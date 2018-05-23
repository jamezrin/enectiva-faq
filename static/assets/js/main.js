var currentXhr, language, searcher;

function init(language, searcher) {
    this.language = language;
    console.log("Language:", language);

    this.searcher = searcher;
    console.log("Search Server:", searcher);

    $(document).ready(ready);
}

function ready() {
    var horseyList = horsey(document.getElementById("search-field"), {
        highlightCompleteWords: false,
        highlighter: false,
        cache: false,

        source: function (data, done) {
            search(data.input, function(results) {
                done(null, [{
                    list: results
                }])
            });
        },

        renderItem: function(li, suggestion) {
            var title = document.createElement("div");
            var summary = document.createElement("div");
            summary.style.fontSize = "12px";

            title.appendChild(document.createTextNode(suggestion.item.title));
            summary.appendChild(document.createTextNode("This is some future summary"));

            li.appendChild(title);
            li.appendChild(summary)
        },

        filter: function (query, suggestion) {
            return true;
        },

        set: function(obj) {
            console.log(typeof obj)
        }
    });

    $('#search-field')
        //When pressing enter in the search input
        .on('keydown', function (e) {
            if (e.which === 13) {
                location.href = "/" + language + "/search?q=" + this.value;
            }
        })

        //When clicking the 'x' or pressing enter
        .on('search', function () {
            horseyList.clear();
        })
        .on('input', function () {
            if (!this.value) {
                horseyList.clear();
            }
        });

    //For the search page
    var query = getParam('q');
    if (query) displaySearch(query);
}

function getParam(param) {
    var vars = {};
    window.location.href.replace(location.hash, '').replace(
        /[?&]+([^=&]+)=?([^&]*)?/gi,
        function(m, key, value) {
            vars[key] = value || '';
        }
    );

    if (param) {
        return vars[param] ? vars[param] : null;
    }

    return vars;
}

function displaySearch(query) {
    search(query, function(data) {
        console.log(data);

        data.forEach(function (value) {
            if (value.matches.length > 0) {
                var result = document.createElement("div");
                result.className = "search-result";

                var anchor = document.createElement("a");
                anchor.appendChild(document.createTextNode(value.item.title));
                anchor.title = value.item.title;
                anchor.href = value.item.url;
                result.appendChild(anchor);

                var description = document.createElement("p");
                description.appendChild(document.createTextNode(value.matches[0].value));
                result.appendChild(description);

                document.getElementById('search-results').appendChild(result);
            }
        });
    });
}

function search(query, callback) {
    if (currentXhr)
        currentXhr.abort();

    currentXhr = $.ajax({
        type: 'GET',
        url: this.searcher,
        contentType: 'text/plain',
        data: {
            q: query,
            id: "lang-" + this.language,
            limit: 10
        }, success: function (data) {
            callback(data)
        }, error: function (err) {
            console.log(err)
        }
    });
}