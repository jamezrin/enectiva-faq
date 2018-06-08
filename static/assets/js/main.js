var currentXhr, language, searcher;

function init(language, searcher) {
    this.language = language;
    console.log("Language:", language);

    this.searcher = searcher;
    console.log("Search Server:", searcher);

    $(document).ready(ready);
}

function ready() {
    var cursorRemoved = true;

    $('#search-field').autocomplete({  }, [{
        source: function(query, callback) { //Could replace with just `search`
            search(query, function(data) {
                callback(data)
            })
        },
        templates: {
            suggestion: function(suggestion) {
                return "<div>" + suggestion.title + "</div>" +
                    "<div style='font-size: 12px;'>" + suggestion.summary + "</div>"
            },
            empty: function() {
                return "No results"
            }
        },
        debounce: 200
    }]).on('autocomplete:selected', function(event, suggestion, dataset) {
        location.href = suggestion.url;
    }).on('autocomplete:cursorremoved', function(event) {
        cursorRemoved = true;
    }).on('autocomplete:cursorchanged', function(event, suggestion, dataset) {
        cursorRemoved = false;
    }).on('keydown', function(event) {
        if (cursorRemoved && event.which === 13) {
            location.href = "/" + language + "/search?q=" + this.value;
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
        if (data.length > 0) {
            data.forEach(function (value) {
                var result = document.createElement("div");
                result.className = "search-result";

                var anchor = document.createElement("a");
                anchor.appendChild(document.createTextNode(value.title));
                anchor.title = value.title;
                anchor.href = value.url;
                result.appendChild(anchor);

                var description = document.createElement("p");
                description.appendChild(document.createTextNode(value.summary));
                result.appendChild(description);

                document.getElementById('search-results').appendChild(result);
            });
        } else {
            var result = document.createElement("h3");
            result.appendChild(document.createTextNode("No search results found"));

            document.getElementById('search-results').appendChild(result)
        }
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
            url: window.location.hostname,
            id: "lang-" + this.language
        }, success: function (data) {
            callback(data.data)
        }, error: function (err) {
            console.log(err)
        }
    });
}