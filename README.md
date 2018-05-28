# Enectiva
Enectiva FAQ is using [Hugo](https://gohugo.io/).
This site was initially started with Hugo v.0.20.6, because of that there might be things that are not optimized for the latest versions of hugo.
Nonetheless, it is encouraged and recommended to run on the latest version and always use the best features you can.
The last person that has worked on this project was running Hugo 0.40.3

## Getting started
Execute the following commands to get the site running in a test environment
```shell
git clone https://github.com/EnerfisTeam/enectiva-faq
cd enectiva-faq
npm install
```
You will then have the project ready to test, to do that run
```shell
grunt dev
```
That will compile the sass every time you modify a file, it will also minify it.
As that will keep running in your terminal, you will have to open another one for hugo, then run this
```shell
hugo server
```

## Dependencies
First of all, Hugo. Make sure it is accessible from anywhere (added to your PATH variable).
This should be able to work with both Windows and Linux-based distros.

Then there are the frontend JS dependencies, included in static/assets/js/
- [autocomplete.js](https://github.com/algolia/autocomplete.js)
- [jQuery v3.3.1](https://jquery.com/)

As well as some grunt addons
- grunt-contrib-imagin **Used for optimizing images**
- grunt-contrib-watch **Used to automatically run Grunt tasks when modifying files**
- grunt-open **Used to automatically open your default browser**
- grunt-sass **Used to compile the SASS to CSS**
- grunt-shell **Used to run hugo**
- load-grunt-tasks **Used for grunt-sass**

## Creating new post
You can create a post with this command, it will include all the necessary boilerplate for you to work on
```shell
[sudo] hugo new *language*/*section*/.../article-name.md
```

Whenever you create a new post, there is only the default frontmatter (according to the default archetype)
You will want to modify it, this is how it looks by default
```
+++
title = "Post title"
author = "Enectiva"
date = "2018-05-24T12:52:27+02:00"
tags = [
    "tag1",
    "tag2"
]
toc = false
+++
```

It is crucial to get the frontmatter right, and make sure it is in the right format.
The first and last lines of the frontmatter indicate the format of the frontmatter, it can be TOML, YAML or JSON

## Search system
This application depends on other application (right now available at [GitHub](https://github.com/jamezrin/hugo-fusejs-server))
We communicate with that application with GET requests, that application replies with the results that Fuse.js spits out of our content.
It finds out all the links to the posts by requesting the sitemap, it requests every link, parses it and finally it creates the search index.
That happens for every language, which is configured in the application as a site. Every site has an id which is passed in every search with the `id` argument.

There are other parameters you can use, for example:
* `q`: The query string, make sure to escape it.
* `limit`: The limit of the results. Default is 10.
* `full`:  Whether to return entire result item, including the entire document's content and other possible fields.

Make sure both applications point at each other, for this application you configure it in the `config.toml` file.
You will have to change these values whenever you change address or port of either of the applications.
This includes deploying the application or running it dev mode. Make sure you do it, otherwise it won't work as expected.
For the search server, you can configure it in the `index.js` file, though it will probably change in a near future.
You might also want to customize the fuse settings that we use to initialize it, that is how you tune the search results.

