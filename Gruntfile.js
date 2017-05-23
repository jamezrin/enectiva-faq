var grunt = require('grunt'),
    toml = require("toml"),
    S = require("string");

grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-connect');
grunt.loadNpmTasks('grunt-contrib-copy');
grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-open');
grunt.loadNpmTasks('grunt-responsive-images');
grunt.loadNpmTasks('grunt-shell');

module.exports = function(grunt) {

    grunt.registerTask("lunr-index-cs", function() {

        var CONTENT_PATH_PREFIX = "content/cs";

        grunt.log.writeln("Building pages index...");

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
            var url = S(abspath)
                .chompLeft(CONTENT_PATH_PREFIX).s;
            return {
                title: pageName,
                url: url,
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
            if (frontMatter.url) {
                var url = frontMatter.url;
            } else {
                var url = S(abspath).chompLeft(CONTENT_PATH_PREFIX).chompRight(".md").s;
                if (filename === "index.md") {
                    url = S(abspath).chompLeft(CONTENT_PATH_PREFIX).chompRight(filename).s;
                }
            }

                // Build Lunr index for this page
            pageIndex = {
                title: frontMatter.title,
                tags: frontMatter.tags,
                url: url,
                content: S(content[2]).trim().stripTags().stripPunctuation().s
            };
            return pageIndex;
        };

        grunt.file.write("static/json/search.cs.json", JSON.stringify(indexPages()));
        grunt.log.ok("Index built.");
    });

    grunt.registerTask("lunr-index-de", function() {

        var CONTENT_PATH_PREFIX = "content/de";

        grunt.log.writeln("Building pages index...");

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
            var url = S(abspath)
                .chompLeft(CONTENT_PATH_PREFIX).s;
            return {
                title: pageName,
                url: url,
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
            if (frontMatter.url) {
                var url = frontMatter.url;
            } else {
                var url = S(abspath).chompLeft(CONTENT_PATH_PREFIX).chompRight(".md").s;
                if (filename === "index.md") {
                    url = S(abspath).chompLeft(CONTENT_PATH_PREFIX).chompRight(filename).s;
                }
            }

                // Build Lunr index for this page
            pageIndex = {
                title: frontMatter.title,
                tags: frontMatter.tags,
                url: url,
                content: S(content[2]).trim().stripTags().stripPunctuation().s
            };
            return pageIndex;
        };

        grunt.file.write("static/json/search.de.json", JSON.stringify(indexPages()));
        grunt.log.ok("Index built.");
    });

    grunt.registerTask("lunr-index-en", function() {

        var CONTENT_PATH_PREFIX = "content/en";

        grunt.log.writeln("Building pages index...");

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
            var url = S(abspath)
                .chompLeft(CONTENT_PATH_PREFIX).s;
            return {
                title: pageName,
                url: url,
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
            if (frontMatter.url) {
                var url = frontMatter.url;
            } else {
                var url = S(abspath).chompLeft(CONTENT_PATH_PREFIX).chompRight(".md").s;
                if (filename === "index.md") {
                    url = S(abspath).chompLeft(CONTENT_PATH_PREFIX).chompRight(filename).s;
                }
            }

                // Build Lunr index for this page
            pageIndex = {
                title: frontMatter.title,
                tags: frontMatter.tags,
                url: url,
                content: S(content[2]).trim().stripTags().stripPunctuation().s
            };
            return pageIndex;
        };

        grunt.file.write("static/json/search.en.json", JSON.stringify(indexPages()));
        grunt.log.ok("Index built.");
    });

    grunt.registerTask("lunr-index-es", function() {

        var CONTENT_PATH_PREFIX = "content/es";

        grunt.log.writeln("Building pages index...");

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
            var url = S(abspath)
                .chompLeft(CONTENT_PATH_PREFIX).s;
            return {
                title: pageName,
                url: url,
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
            if (frontMatter.url) {
                var url = frontMatter.url;
            } else {
                var url = S(abspath).chompLeft(CONTENT_PATH_PREFIX).chompRight(".md").s;
                if (filename === "index.md") {
                    url = S(abspath).chompLeft(CONTENT_PATH_PREFIX).chompRight(filename).s;
                }
            }

                // Build Lunr index for this page
            pageIndex = {
                title: frontMatter.title,
                tags: frontMatter.tags,
                url: url,
                content: S(content[2]).trim().stripTags().stripPunctuation().s
            };
            return pageIndex;
        };

        grunt.file.write("static/json/search.es.json", JSON.stringify(indexPages()));
        grunt.log.ok("Index built.");
    });

    grunt.registerTask("lunr-index-fr", function() {

        var CONTENT_PATH_PREFIX = "content/fr";

        grunt.log.writeln("Building pages index...");

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
            var url = S(abspath)
                .chompLeft(CONTENT_PATH_PREFIX).s;
            return {
                title: pageName,
                url: url,
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
            if (frontMatter.url) {
                var url = frontMatter.url;
            } else {
                var url = S(abspath).chompLeft(CONTENT_PATH_PREFIX).chompRight(".md").s;
                if (filename === "index.md") {
                    url = S(abspath).chompLeft(CONTENT_PATH_PREFIX).chompRight(filename).s;
                }
            }

                // Build Lunr index for this page
            pageIndex = {
                title: frontMatter.title,
                tags: frontMatter.tags,
                url: url,
                content: S(content[2]).trim().stripTags().stripPunctuation().s
            };
            return pageIndex;
        };

        grunt.file.write("static/json/search.fr.json", JSON.stringify(indexPages()));
        grunt.log.ok("Index built.");
    });

    grunt.registerTask("lunr-index-it", function() {

        var CONTENT_PATH_PREFIX = "content/it";

        grunt.log.writeln("Building pages index...");

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
            var url = S(abspath)
                .chompLeft(CONTENT_PATH_PREFIX).s;
            return {
                title: pageName,
                url: url,
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
            if (frontMatter.url) {
                var url = frontMatter.url;
            } else {
                var url = S(abspath).chompLeft(CONTENT_PATH_PREFIX).chompRight(".md").s;
                if (filename === "index.md") {
                    url = S(abspath).chompLeft(CONTENT_PATH_PREFIX).chompRight(filename).s;
                }
            }

                // Build Lunr index for this page
            pageIndex = {
                title: frontMatter.title,
                tags: frontMatter.tags,
                url: url,
                content: S(content[2]).trim().stripTags().stripPunctuation().s
            };
            return pageIndex;
        };

        grunt.file.write("static/json/search.it.json", JSON.stringify(indexPages()));
        grunt.log.ok("Index built.");
    });

    grunt.registerTask("lunr-index-ru", function() {

        var CONTENT_PATH_PREFIX = "content/ru";

        grunt.log.writeln("Building pages index...");

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
            var url = S(abspath)
                .chompLeft(CONTENT_PATH_PREFIX).s;
            return {
                title: pageName,
                url: url,
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
            if (frontMatter.url) {
                var url = frontMatter.url;
            } else {
                var url = S(abspath).chompLeft(CONTENT_PATH_PREFIX).chompRight(".md").s;
                if (filename === "index.md") {
                    url = S(abspath).chompLeft(CONTENT_PATH_PREFIX).chompRight(filename).s;
                }
            }

                // Build Lunr index for this page
            pageIndex = {
                title: frontMatter.title,
                tags: frontMatter.tags,
                url: url,
                content: S(content[2]).trim().stripTags().stripPunctuation().s
            };
            return pageIndex;
        };

        grunt.file.write("static/json/search.ru.json", JSON.stringify(indexPages()));
        grunt.log.ok("Index built.");
    });
    grunt.initConfig({
        shell: {
            options: {
                stdout: true
            },
            server: {
                command: 'hugo server --theme=enectiva-faq'
            },
            build: {
                command: 'hugo -d public/ --theme=enectiva-faq'
            }
        },

        open: {
            devserver: {
                path: 'http://localhost:1313',
                app: 'firefox',
            },
            live: {
                path: 'http://faq.enectiva.cz',
                app: 'firefox',
            }
        }
    });
    grunt.registerTask('test', ['lunr-index-cs', 'lunr-index-de', 'lunr-index-en', 'lunr-index-es', 'lunr-index-fr', 'lunr-index-it', 'lunr-index-ru', 'open:devserver', 'shell:server']);
    grunt.registerTask('build', ['lunr-index-cs', 'lunr-index-de', 'lunr-index-en', 'lunr-index-es', 'lunr-index-fr', 'lunr-index-it', 'lunr-index-ru', 'open:live', 'shell:build']);
    grunt.registerTask('all-indexes',['lunr-index-cs', 'lunr-index-de', 'lunr-index-en', 'lunr-index-es', 'lunr-index-fr', 'lunr-index-it', 'lunr-index-ru']);
};
