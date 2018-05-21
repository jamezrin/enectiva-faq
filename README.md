# Enectiva FAQ
Enectiva FAQ is using [Hugo](https://gohugo.io/). In this site, we can view how to use Hugo: [https://gohugo.io/overview/usage/](https://gohugo.io/overview/usage/)
This site was initially started with Hugo v.0.20.6, being currently compatible with Hugo v.0.36

## Getting started
Execute the following commands to get the site running in a test environment
```shell
git clone https://github.com/EnerfisTeam/enectiva-faq
cd enectiva-faq
npm install
grunt test
```

## Dependencies
First of all, Hugo. Make sure it is accessible from anywhere (added to your PATH variable).
This should be able to work with both Windows and Linux-based distros.

Then there are the frontend JS dependencies, included in static/assets/js/
- [lunrjs v2.0.3](https://github.com/olivernn/lunr.js)
- [horsey v4.2.2](https://bevacqua.github.io/horsey/)
- [jQuery v3.2.1](https://jquery.com/)

To update the lunr index files and compile the sass to css, it depends on
- [NodeJS >= 4.7.2](https://nodejs.org)
- [Grunt v1.0.2](https://gruntjs.com/getting-started)
- [string v3.3.3](https://www.npmjs.com/package/string)
- [toml v2.3.3](https://www.npmjs.com/package/toml)

As well as some grunt addons
- grunt-contrib-imagin **Used for optimizing images**
- grunt-contrib-watch **Used to automatically run Grunt tasks when modifying files**
- grunt-open **Used to automatically open your default browser**
- grunt-sass **Used to compile the SASS to CSS**
- grunt-shell **Used to run hugo**
- load-grunt-tasks **Used for grunt-sass**

## Creating new blog post
The command to do this is the next:
```shell
[sudo] hugo new XX/1st-section/[2nd-section]/name-to-do.XX.md
```
You must to change the **XX** to the language what you can write the post (**es**: Spanish, **cs**: Czech, **en**: English, **it**: Italian, **fr**: French, **de**: German)
So if you want to create a new english post, you need to write:
```shell
[sudo] hugo new XX/1st-section/[2nd-section]/filename.XX.md
```
When you have your empty file, you must go into the folder where you created the file.
- Open **content/** folder.
- Open **lang** folder.
- Open **1st-section** and **2nd-section** if you have it.
- Open your file that you have created with a editor markdown. ([ghostwriter](https://wereturtle.github.io/ghostwriter/) is recommended). You should never modify the post date

#### How to organize the content into content directory
```txt
.
└── content
    ├── cs
    |   └── first-section
    |       └── nested-section
    ├── de
    ├── en
    ├── es
    ├── fr
    ├── it
    ├── ru
    └── images (the root folder of images)
```

### How to use the header of file (archetype)
When you create a new post, automatically is created a file with a header. This header has the following labels by default, defined in your archetype:
##### Version [CS]
```toml
+++
author = "Enectiva"
date = "2017-04-19T13:34:25+02:00"
oddily = "instrukce-k-instalaci"
url = "/cs/oddily/instrukce-k-instalaci/example-1"
tags = [
    "slovo1",
    "slovo2"
]
title = "Instrukce k instalaci #1"
toc = false
+++
```

##### Version [DE]
```toml
+++
author = "Enectiva"
date = "2017-04-19T12:48:07+02:00"
tags = [
    "Wort1",
    "Wort2"
]
title = "Handbücher #1"
url = "/de/abschnitte/handbucher/example-1"
toc = false
+++
```

##### Version [EN]
```toml
+++
author = "Enectiva"
date = "2017-04-25T13:22:46+02:00"
sections = "third-party-manuals/sensors"
url = "/en/sections/third-party-manuals/sensors/example-1"
tags = [
    "word1",
    "word2"
]
title = "title of file"
toc = false
+++
```

##### Version [ES]
```toml
+++
author = "Enectiva"
date = "2017-05-31T12:32:37+02:00"
url = "/es/secciones/manuales/medidores/como-conectar-smartcoms-al-servidor"
tags = [
    "manuales",
    "smartcoms"
]
title = "Cómo conectar SmartComs al servidor"
toc = false
+++
```

##### Version [FR]
```toml
+++
author = "Enectiva"
date = "2017-04-19T14:58:49+02:00"
sections = "instructions-d-installation"
url = "/fr/sections/instructions-d-installation/example-1"
tags = [
    "mot1",
    "mot2"
]
title = "Instructions d'installation #1"
toc = false
+++
```

##### Version [IT]
```toml
+++
author = "Enectiva"
date = "2017-04-25T13:47:04+02:00"
url = "/it/sezioni/istruzioni-di-installazione/calibri/example-1"
tags = [
    "parola1",
    "parola2"
]
title = "Calibri #1"
toc = false
+++
```

##### Version [RU]
```toml
+++
author = "Enectiva"
date = "2017-04-19T13:13:16+02:00"
url = "/ru/razdely/instruktsiya-po-ustanovke/example-1"
tags = [
    "слово1",
    "слово2"
]
title = "Инструкция по установке #1"
toc = false
+++
```

Something to say:
- In **sections** we must enter the section of file.
- You must modify URL file, is important that redirect to file. If you don't enter the URL correctly, the search couldn't work.
- You must modify the tag words, if you want have related files.

## Development environment
The application features searching with lunr, and it uses index files generated from the posts. Not only that, we also use SASS for the styling of our application.
The generation of index files and compilation of the SASS files only happens when starting the application. If you don't want to restart the application whenever you change something, execute the `sass` or the `lunr-build-indexes` respectively. You can automate this by launching another terminal and executing `grunt watch`

### How to work the searching implementation
In this case, the searching implementation needs of the followings files:
- Partial into **layouts/partials/search.html** that contents the searchbox and variable that indicates to the javascript, "*ey, listen, this is the URL of the page*".
- The partial is called if within the configuration the parameter search set true. Looks the file **layouts/partials/menu.html**
- The javascript is within **layouts/base/metas.html**
```js
 $.getJSON("/dist/search.{{ .Site.Language.Lang }}.json")
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
All the original code included within of the file metas.html has been extracted of this [gist](https://gist.github.com/sebz/efddfc8fdcb6b480f567) and include, the official code and useful tools.

But, the modified code includes horsey.js. **Horsey** is a library that provides autocompletion, used for the search feature.
The file sizes in the normal version **<200Kb** and in the minified version about **>=20Kb!!**
In the next link will find examples and the source code of project: [horsey](https://bevacqua.github.io/horsey/)
If you want change something of the code, you must open the grunt task.

The structure of search index:
```json
[
    {
        "title": "title1",
        "tags": [
            "word1",
            "word2"
        ],
        "url": "/en/installation-instructions/convertors/example-1",
        "content": "something"
    }
]...
```
You needs know that the most important in above file is what the javascript calls to each file depending of language and consults the variables:
```txt
    title,
    tags,
    url,
    content
```
Therefore, you needs define them into of the frontmatter of your content.

#### Remarking the files implicated in the search implementation
```txt
.
enectiva-faq
├── layouts
|   └── partials
|       ├── base
|       |   └── metas.html (contains the javascript necessary)
|       └── internal
|           └── search.html (contains the search box)
└── static
    └── dist
        ├── search.cs.json (index to search)
        ├── search.de.json (index to search)
        ├── search.en.json (index to search)
        ├── search.es.json (index to search)
        ├── search.fr.json (index to search)
        ├── search.it.json (index to search)
        └── search.ru.json (index to search)
```

### Grunt tasks
```shell
- sass (Compiles the SASS files into one css one)
- lunr-build-indexes (Generates the index files)
- test (What you should use in development)
- watch (What you should use in development too if modifying the articles or sass)
- build (What you should use in production)
```

### How to work the multilingual mode into site.
The website is built with multilingual mode. Provide to a site the ability to be multilingual is awesome but this same can be a problem for the development. Before, I must explain you some things:
- I have used data files for word translations. Into themes/enectiva-faq/data/locales/
- All partials includes the followings variables, with which will map the datas. Then, only you will needs to use $l.<string>, very useful:
```html
{{ $lang := .Site.Language.Lang }}
{{ $l := index .Site.Data.locales $lang }}
```
- You can add all levels of map-strings that you needs. Only, you adds as many points as needed after of each word, i.e.:
```
{{ $l.<string1>.<string2>.<string3... }}
```
Example of a data file:
```yaml
meta_description: 'Enectiva представляет собой веб-информационную систему, предназначенную для управления энергопотреблением офисных зданий, торговых центров и других коммерческих недвижимостей.'
meta_keywords: 'Enectiva, управление энергией, мониторинг энергии, энергосберегающие проекты, энергосбережение, мониторинг энергии, смарт измерения, дистанционное считывание показаний счетчиков'
menu:
    toggle:
        cs: CS
        de: DE
        en: EN
        es: ES
        fr: FR
        it: IT
        ru: RU
    title:
        cs: Чешский
        de: Немецкий
        en: Aнглийский
        es: испанский
        fr: Французский
        it: итальянский
        ru: русский
read_more: 'Подробнее '
tags: 'Теги:'
pagination:
    next: 'Cледующий '
    prev: ' Предыдущая'
rel_title: 'Cтатьи по теме'
search_placeholder: 'Поиск...'
404:
    error: '404 Не Найдено'
    message: "Что вы ищете не здесь, извините!"
    back_home: 'Нажмите здесь, чтобы вернуться домой'
footer:
    author_message: 'Решение по управлению энергией Enectiva было разработано компанией'
street_address: 'Drtinova 557/10'
address_locality: 'Прага 5'
```

### How to work the menu and menu data file
All the content and site is written in multilingual. This require some additional configurations on some files, I am talking about the menu data files. Must take into account that these files have certains settings. See examples:
```yaml
main_menu:
    installations_instructions:
        name: "Инструкция по установке"
        URL: /ru/razdely/instruktsiya-po-ustanovke/
        hide: false
        weight: 01
        meters:
            name: Шлюзы
            URL: /ru/razdely/instruktsiya-po-ustanovke/shlyuzy/
            hide: false
            weight: 01
        sensors:
            name: Mанометры
            URL: /ru/razdely/instruktsiya-po-ustanovke/manometry/
            hide: false
            weight: 02
        gateways:
            name: датчиков
            URL: /ru/razdely/instruktsiya-po-ustanovke/datchikov/
            hide: false
            weight: 03
        convertors:
            name: Преобразователи
            URL: /ru/razdely/instruktsiya-po-ustanovke/preobrazovateli/
            hide: false
            weight: 04
        splitters:
            name: Сплиттеры
            URL: /ru/razdely/instruktsiya-po-ustanovke/razvetviteli/
            hide: false
            weight: 05
        concentrators:
            name: Концентраторы
            URL: /ru/razdely/instruktsiya-po-ustanovke/kontsentratory/
            hide: false
            weight: 06
    manuals:
        name: Руководства
        URL: /ru/razdely/rukovodstva/
        hide: false
        weight: 02
        meters:
            name: Шлюзы
            URL: /ru/razdely/rukovodstva/shlyuzy/
            hide: false
            weight: 01
        sensors:
            name: Mанометры
            URL: /ru/razdely/rukovodstva/manometry/
            hide: false
            weight: 02
        gateways:
            name: датчиков
            URL: /ru/razdely/rukovodstva/datchikov/
            hide: false
            weight: 03
        convertors:
            name: Преобразователи
            URL: /ru/razdely/rukovodstva/preobrazovateli/
            hide: false
            weight: 04
        splitters:
            name: Сплиттеры
            URL: /ru/razdely/rukovodstva/razvetviteli/
            hide: false
            weight: 05
        concentrators:
            name: Концентраторы
            URL: /ru/razdely/rukovodstva/kontsentratory/
            hide: false
            weight: 06
    tp_manuals:
        name: "Pуководства третьего"
        URL: /ru/razdely/rukovodstva-tret-yego/
        hide: false
        weight: 03
        meters:
            name: Шлюзы
            URL: /ru/razdely/rukovodstva-tret-yego/shlyuzy/
            hide: false
            weight: 01
        sensors:
            name: Mанометры
            URL: /ru/razdely/rukovodstva-tret-yego/manometry/
            hide: false
            weight: 02
        gateways:
            name: датчиков
            URL: /ru/razdely/rukovodstva-tret-yego/datchikov/
            hide: false
            weight: 03
        convertors:
            name: Преобразователи
            URL: /ru/razdely/rukovodstva-tret-yego/preobrazovateli/
            hide: false
            weight: 04
        splitters:
            name: Сплиттеры
            URL: /ru/razdely/rukovodstva-tret-yego/razvetviteli/
            hide: false
            weight: 05
        concentrators:
            name: Концентраторы
            URL: /ru/razdely/rukovodstva-tret-yego/kontsentratory/
            hide: false
            weight: 06

footer_menu:
    partner_program:
        name: "Партнерская программа"
        URL: https://www.enectiva.cz/ru/partnerskaya-programma
        hide: false
        weight: 01
    enectiva_rules:
        name: "Правила компании Enectiva"
        URL: https://www.enectiva.cz/ru/pravila-enectivy/
        hide: false
        weight: 02
    dev_blog:
        name: "Блог развития"
        URL: https://developing.enectiva.cz/
        hide: false
        weight: 03
    contact_us:
        name: "Контакт"
        URL: https://www.enectiva.cz/ru/svyazhites-s-nami
        hide: false
        weight: 04
```
The data files its found into root directory in the data folder, and are separated by each language. You will find the main menu and footer menu inside the files, follow the above structure to put new menu entries:
```txt
.
└── data
|   └── locales
|   |   ├── cs.yaml
|   |   ├── de.yaml
|   |   ├── en.yaml
|   |   ├── es.yaml
|   |   ├── fr.yaml
|   |   ├── it.yaml
|   |   └── ru.yaml
|   └── menu
|       ├── cs.yaml
|       ├── de.yaml
|       ├── en.yaml
|       ├── es.yaml
|       ├── fr.yaml
|       ├── it.yaml
|       └── ru.yaml
```
If you wants to implement a new menu entry, needs to follow the above structure. **Remark the use of the hide parameter, you can use it for hide menu**. Last one, and for to implement the menu entry correctly, you must add a new line into main-menu.html layout.

#### Top-level menu
Use of the variables:
- **$i_i** = installations_instructions
- **$m** = manuals
- **$tp_m** = tp_manuals
- If you wants to create one top-level menu, **adds variable:** `$string := $l.main_menu.<reference map string>`
```html
<li class="sub-menu"><a href="{{- $<top-level>.URL -}}" hreflang="{{ $lang }}">{{- $<top-level>.name -}}</a>
    <ul class="sub">
        <li class="{{ if eq $<top-level>.<sub-level>.hide true }}hide{{ end }}"><a href="" hreflang="{{ $lang }}"></a></li>
            ...
            ...
            ...
    </ul>
</li>
```

#### Control over the sort
When you wants to sort the menu, have that to use weight parameter. You have one in each section into of the menu data files.
