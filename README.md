# Enectiva FAQ
Enectiva FAQ is using [Hugo](https://gohugo.io/). In this site, we can view how to use Hugo: [https://gohugo.io/overview/usage/](https://gohugo.io/overview/usage/)
Actually, we are using Hugo v.0.20.6, [lunrjs v2.0.3](https://github.com/olivernn/lunr.js), [horsey v4.2.2](https://bevacqua.github.io/horsey/) and [jQuery v3.2.1](https://bevacqua.github.io/horsey/)

## Dependencies - NPM
- [Nodejs v4.7.2](https://docs.npmjs.com/getting-started/installing-node)
- [Gruntjs v1.0.1](https://gruntjs.com/getting-started)
- [string v3.3.3](https://www.npmjs.com/package/string)
- [toml v2.3.2](https://www.npmjs.com/package/toml)
- or optional [yamljs v0.2.10](https://www.npmjs.com/package/yamljs)

For to install all dependencies, you must type in command line:
```
cd <folder-project>
[sudo] npm install --save-dev grunt toml string nodejs
```

## How to start the server
We must open command line in your Linux distribution. If we have our web in the personal folder of hard disk, we must write into the black window
```
cd ~
```
After, if our folder named enectiva-faq
```
cd enectiva-faq
```
To start the server, we must type...
```
[sudo] hugo server
```
To create a new post (we explain it below). If you can create a new post, please, close hugo server first.
```
[sudo] hugo new <directory>/filename.md
```

## Creating new blog post
The command to do this is the next:
```
[sudo] hugo new XX/1st-section/[2nd-section]/name-to-do.XX.md
```
You must to change the **XX** to the language what you can write the post (**es**: Spanish, **cs**: Czech, **en**: English, **it**: Italian, **fr**: French, **de**: German)
So if you want to create a new english post, you need to write:
```
[sudo] hugo new XX/1st-section/[2nd-section]/filename.XX.md
```
When you have your empty file, you must go into the folder where you created the file.
- Open **content/** folder.
- Open **lang** folder.
- Open **1st-section** and **2nd-section** if you have it.
- Open your file that you have created with a editor markdown. (recommend [ghostwriter](https://wereturtle.github.io/ghostwriter/)). You never must modify the date of the filename.

### How to use the header of file (archetype)
When you create a new post, automatically is created a file with a header. This header has the following labels by default, defined in your archetype:
```
+++
author = "Enectiva"
date = "2017-04-25T13:22:46+02:00"
sections = "third-party-manuals/sensors"
url = "/en/third-party-manuals/sensors/example-1"
tags = ["word1","word2"]
title = "title of file"

+++
```
Something to say:
- In **sections** we must enter the section of file.
- You must modify URL file, is important that redirect to file. If you don't enter the URL correctly, the search couldn't work.
- You must modify the tag words, if you want have related files.

## Development environment
You need know something before of continue. You must create a index file that you will put into static/json/ folder. For that, type in your command line into hugo folder:

**WARNING:** Don't to generate the index file with images into content folder or the grunt task will crash.
```
[sudo] grunt lunr-index
[sudo] cp static/json/ themes/enectiva-faq/static/json/
```
The gruntfile will get the files into the **content/** folder and will create index file with the URL field. Start the server to see the changes in the search results.

### How to work the searching implementation
In this case, the searching implementation needs of the followings files:
- Partial into layouts/partials/search.html that contents the searchbox and variable that indicates to the javascript, "ey, listen, this is the URL of the page".
- The partial is called if within the configuration the parameter search set true. Looks the file layouts/partials/menu.html
- The javascript is within layouts/base/metas.html.
```
$.getJSON("/json/search.{{ .Site.Language.Lang }}.json")
```
This part calls to the index file by each language. Hugo detects that language is what are you using and, put the .Site.Language.Lang in the line above. The followings are the language codes:
```
cs = Czech
de = German
en = English
es = Spanish
fr = French
it = Italian
ru = Russian
```
All the code included within of the file metas.html has been extracted of this [gist](https://gist.github.com/sebz/efddfc8fdcb6b480f567) and include, the official code and useful tools.
```
var toml = require("toml");
var S = require("string");

var CONTENT_PATH_PREFIX = "site/content";

module.exports = function(grunt) {

    grunt.registerTask("lunr-index", function() {

        grunt.log.writeln("Build pages index");

        var indexPages = function() {
            var pagesIndex = [];
            grunt.file.recurse(CONTENT_PATH_PREFIX, function(abspath, rootdir, subdir, filename) {
                grunt.verbose.writeln("Parse file:",abspath);
                pagesIndex.push(processFile(abspath, filename));
            });

            return pagesIndex;
        };

        var processFile = function(abspath, filename) {
            var pageIndex;

            if (S(filename).endsWith(".html")) {
                pageIndex = processHTMLFile(abspath, filename);
            } else {
                pageIndex = processMDFile(abspath, filename);
            }

            return pageIndex;
        };

        var processHTMLFile = function(abspath, filename) {
            var content = grunt.file.read(abspath);
            var pageName = S(filename).chompRight(".html").s;
            var href = S(abspath)
                .chompLeft(CONTENT_PATH_PREFIX).s;
            return {
                title: pageName,
                href: href,
                content: S(content).trim().stripTags().stripPunctuation().s
            };
        };

        var processMDFile = function(abspath, filename) {
            var content = grunt.file.read(abspath);
            var pageIndex;
            // First separate the Front Matter from the content and parse it
            content = content.split("+++");
            var frontMatter;
            try {
                frontMatter = toml.parse(content[1].trim());
            } catch (e) {
                conzole.failed(e.message);
            }

            var href = S(abspath).chompLeft(CONTENT_PATH_PREFIX).chompRight(".md").s;
            // href for index.md files stops at the folder name
            if (filename === "index.md") {
                href = S(abspath).chompLeft(CONTENT_PATH_PREFIX).chompRight(filename).s;
            }

            // Build Lunr index for this page
            pageIndex = {
                title: frontMatter.title,
                tags: frontMatter.tags,
                href: href,
                content: S(content[2]).trim().stripTags().stripPunctuation().s
            };

            return pageIndex;
        };

        grunt.file.write("site/static/js/lunr/PagesIndex.json", JSON.stringify(indexPages()));
        grunt.log.ok("Index built");
    });
};
```
If you want change something of the code, you must open the grunt task.

The structure of search index:
```
[
    {
        "title": "Convertors #1",
        "tags": [
            "word1",
            "word2"
        ],
        "url": "/en/installation-instructions/convertors/example-1",
        "content": "Lorem ipsum dolor sit amet consectetur adipiscing elit Cras faucibus risus a nisi bibendum viverra Nunc at porta turpis luctus tempor turpis Class aptent taciti sociosqu ad litora torquent per conubia nostra per inceptos himenaeos Integer at libero sed augue hendrerit pharetra Nulla vulputate enim vitae sagittis feugiat dui velit lobortis eros et semper ante tellus dictum odio Nulla et venenatis orci Donec ut euismod justo Duis non imperdiet neque Fusce malesuada pharetra tristique Sed turpis mi maximus ac libero a malesuada facilisis nulla Sed tempus bibendum dignissim Vestibulum sagittis varius nibh et fermentum tellus aliquam ac Vestibulum volutpat erat et nisl tincidunt nec varius ante condimentum Suspendisse malesuada elementum nulla nec ultrices Aliquam tristique cursus mauris ut rhoncus Maecenas luctus lacus nec fermentum pellentesque nibh turpis pulvinar massa eget aliquam nisi ipsum ac est Ut porta pulvinar nisi non molestie Praesent nec sem faucibus volutpat nisl vitae ornare est Phasellus nec tempor ante et auctor erat Nam vitae orci massa Cras consequat convallis pretium Fusce dignissim malesuada lectus in dictum Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae Suspendisse potenti Maecenas rhoncus ligula eget quam aliquam pellentesque Donec eu erat sem Phasellus semper dolor et maximus pretium enim arcu pulvinar odio a sodales metus nisl vel enim Sed ac dui tristique hendrerit odio eu porta sem Mauris ante eros sodales sed sapien sed fermentum aliquam mi Quisque porta ante eu porttitor euismod In massa enim sagittis eu eleifend eu rhoncus eget risus Phasellus venenatis rhoncus urna quis aliquet Donec id lacus condimentum elementum justo vulputate porta velit Sed vitae luctus mi sed consequat sem Lorem ipsum dolor sit amet consectetur adipiscing elit Integer ultricies a nisl ut iaculis Nunc eget nulla eleifend commodo mi in ultrices diam Etiam at tempor eros a molestie ex Proin id ligula quam Sed nec odio elit Nam cursus magna eu aliquet semper Fusce faucibus metus non laoreet tincidunt lacus turpis imperdiet diam sed commodo magna lectus nec neque Vestibulum eget lorem eu ligula laoreet lobortis a non turpis Mauris interdum nisi quis aliquam vestibulum Nullam aliquet eu nunc vel dictum Vivamus non est at velit pharetra rutrum Sed scelerisque diam sed quam accumsan tempus Sed auctor imperdiet maximus Ut placerat nibh nec nibh euismod viverra Aenean venenatis bibendum rutrum Nam eget vestibulum erat Etiam a tortor cursus pulvinar urna aliquam semper quam Nulla fringilla venenatis metus vitae congue ligula vestibulum id Sed id condimentum libero ac consequat orci Ut quis urna in nunc congue ultricies Suspendisse elementum accumsan nisi ut dignissim nibh luctus non Cras luctus elit mauris sit amet mollis arcu malesuada id Phasellus consequat sagittis leo id feugiat tellus scelerisque a Sed at scelerisque lorem Fusce a luctus nisl Etiam rhoncus nibh sit amet augue rhoncus suscipit Mauris arcu augue commodo ut varius vitae luctus a nunc Suspendisse at maximus ligula vel gravida tortor Nam feugiat nunc eu pellentesque tempor ligula arcu rhoncus augue eu finibus nibh libero sit amet ipsum Sed sit amet urna vel augue posuere aliquet Nulla interdum blandit porta Curabitur varius massa quis tellus suscipit fermentum Nullam accumsan felis vitae quam commodo aliquam Lorem ipsum dolor sit amet consectetur adipiscing elit Aenean ullamcorper volutpat nisl volutpat sollicitudin risus pellentesque ut In hac habitasse platea dictumst Integer ullamcorper et sem vitae blandit Aliquam a maximus purus Donec et purus ut nisl posuere bibendum Integer diam enim ornare in gravida vitae vestibulum id dui Praesent nec tellus vitae quam luctus feugiat sit amet et nisl Cras nec ex est Donec rhoncus eros quis commodo gravida tortor mi pharetra lacus ac gravida nisl odio eu massa Nunc laoreet finibus erat auctor tincidunt ex aliquet vel Morbi suscipit et lacus convallis vehicula Praesent aliquam suscipit odio lobortis scelerisque Curabitur rutrum varius dui vitae porttitor Morbi fermentum nisl vitae interdum commodo nulla purus semper dui vitae convallis erat enim id augue In porta placerat aliquam Quisque volutpat leo at augue faucibus vitae rhoncus eros tempus Quisque vel risus id augue ultricies vehicula a sed massa Fusce porttitor risus arcu nec varius ligula placerat nec Quisque tortor sapien ultrices eu feugiat ut condimentum quis orci Fusce felis massa imperdiet et dolor accumsan faucibus tristique turpis Cras lacinia fermentum nibh et finibus Orci varius natoque penatibus et magnis dis parturient montes nascetur ridiculus mus Sed eleifend luctus malesuada Morbi accumsan enim quis odio molestie iaculis Aliquam in pharetra lorem Morbi blandit semper arcu nec congue Curabitur dictum pretium orci Aliquam convallis feugiat metus sed laoreet Phasellus et libero at magna consequat finibus at vel dolor In hac habitasse platea dictumst Quisque dapibus hendrerit erat Nullam consectetur lectus risus sit amet commodo neque placerat condimentum In semper aliquet sem sagittis condimentum In hac habitasse platea dictumst Nunc sit amet molestie nisl Proin metus mi tempor et dignissim tristique ullamcorper et magna Nulla volutpat nulla in diam lobortis porttitor Integer sollicitudin magna purus id pellentesque urna dignissim lacinia Sed efficitur dui venenatis cursus velit mollis aliquet urna Nam feugiat imperdiet nisl a placerat Duis vel tristique libero Aenean hendrerit ligula sed velit viverra euismod Duis tristique dui sem Lorem ipsum dolor sit amet consectetur adipiscing elit Etiam ornare arcu vel blandit hendrerit augue mauris facilisis leo vitae efficitur arcu dui quis purus Vestibulum ut mauris gravida suscipit ante et viverra enim Donec sed turpis a metus porta ultrices Nulla vel rutrum mauris Nunc at placerat quam eu ullamcorper purus"
    }
]...
```
You needs know that the most important in above file is what the javascript calls to each file depending of language and consults the variables:
```
    title,
    tags,
    url,
    content
```
Therefore, you needs define them into of the frontmatter of your content.

### How to work the grunt tasks
The gruntfile has several tasks inside. How each tasks something I must explain them, feel you free of modify them:
```
[sudo] test -> build index and open dev server.
[sudo] build -> build index and build hugo site.
[sudo] all-indexes -> build all indexes.
```
