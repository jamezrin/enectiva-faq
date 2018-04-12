var grunt = require('grunt'),
    toml = require("toml"),
    S = require("string");

grunt.loadNpmTasks('grunt-open');
grunt.loadNpmTasks('grunt-shell');
grunt.loadNpmTasks('grunt-contrib-imagemin');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-cssmin');
require('load-grunt-tasks')(grunt); 

var buildIndexes = function(contentPath) {
    var processFile = function(abspath, filename) {
        if (S(filename).endsWith(".html")) {
            return processHTMLFile(abspath, filename);
        } else {
            return processMDFile(abspath, filename);
        }
    };

    var processHTMLFile = function(abspath, filename) {
        var content = grunt.file.read(abspath);
        var pageName = S(filename).chompRight(".html").s;
        var url = S(abspath).chompLeft(contentPath).s;
        return {
            title: pageName,
            url: url,
            content: S(content)
                .trim() //Removes unnecessary spaces
                .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"") //Removes punctuation, calling stripPunctuation() removes diacritics too
                .replace("/\r?\n|\r/g", " ") //Removes line breaks
                .stripTags() //Removes HTML tags
                .s
        };
    };

    var processMDFile = function(abspath, filename) {
        var content = grunt.file.read(abspath);
        //Remove front matter (+++ for TOML and --- for YAML)
        content = content.split("+++");
        var frontMatter;
        try {
            frontMatter = toml.parse(content[1].trim());
        } catch (e) {
            console.error("Failed to parse", e.message);
        }
        
        if (frontMatter.url) {
            var url = frontMatter.url;
        } else {
            var url = S(abspath).chompLeft(contentPath).chompRight(".md").s;
            if (filename === "index.md") {
                url = S(abspath).chompLeft(contentPath).chompRight(filename).s;
            }
        }
        
        return {
            title: frontMatter.title,
            tags: frontMatter.tags,
            url: url,
            content: S(content[2])
                .trim() //Removes unnecessary spaces
                .replace(/[.,\/#!$%\^&\*;:{}=\-_|`~()]/g, '') //Removes punctuation, calling stripPunctuation() removes diacritics too
                .replace(/[\n\r]+/g, ' ') //Removes line breaks
                .stripTags() //Removes HTML tags
                .s
        };
    };

    var pagesIndex = [];
    grunt.file.recurse(contentPath, function(abspath, rootdir, subdir, filename) {
        grunt.verbose.writeln("Parse file:", abspath);
        pagesIndex.push(processFile(abspath, filename));
    });

    grunt.log.ok("Successfully indexed:", contentPath);
    return JSON.stringify(pagesIndex);
}

module.exports = function(grunt) {
    grunt.registerTask("lunr-build-indexes", () => {
        grunt.log.writeln("Generating lunr indexes...");
        ["cs", "de", "en", "es", "fr", "it", "ru"].forEach((lang) => {
            grunt.file.write("static/dist/search." + lang + ".json", buildIndexes("content/" + lang))
        });
        grunt.log.ok("Successfully built indexes");
    });

    grunt.initConfig({
        shell: {
            options: {
                stdout: true
            },
            server: {
                command: 'hugo server'
            },
            build: {
                command: 'hugo -d public/'
            }
        },

        open: {
            devserver: {
                path: 'http://localhost:1313'
            },
            live: {
                path: 'http://faq.enectiva.cz'
            }
        },

        sass: {
            dist: {
                files: {
                    'static/dist/main.css': 'static/assets/sass/main.sass'
                }
            }
        },

        cssmin: {
            target: {
                files: {
                    'static/dist/main.min.css': 'static/dist/main.css'
                }
            }
        },

        watch: {
            sass: {
                files: ['**/*.sass'],
                tasks: ['sass', 'cssmin']
            },
            lunr: {
                files: ['content/**/*.md'],
                tasks: ['lunr-build-indexes']
            }
        }
    });
    
    grunt.registerTask('test', ['sass', 'cssmin', 'lunr-build-indexes', 'open:devserver', 'shell:server']);
    grunt.registerTask('build', ['sass', 'cssmin', 'lunr-build-indexes', 'open:live', 'shell:build']);
};
