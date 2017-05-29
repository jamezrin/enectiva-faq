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
If you want change something of the code, you must open the grunt task.

### How to work the grunt tasks
The gruntfile has several tasks inside. How each tasks something I must explain them, feel you free of modify them:
```
[sudo] test -> build index and open dev server.
[sudo] build -> build index and build hugo site.
[sudo] all-indexes -> build all indexes.
```
