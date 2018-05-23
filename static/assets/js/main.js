var currentXhr, language, searcher;

function init(language, searcher) {
    this.language = language;
    console.log("Language:", language);

    this.searcher = searcher;
    console.log("Search Server:", searcher);

    $(document).ready(ready);
}

function ready() {
    $('#search-field')
        //When pressing enter in the search input
        .on('keydown', function (e) {
            if (e.which === 13) {
                location.href = "/" + language + "/search?q=" + this.value;
            }
        })

        //When clicking the 'x' or pressing enter
        .on('search', function () {

        })
        .on('input', function () {
            if (!this.value) {
                //Clear search
            }
        })

        .autoComplete({
            source: function(term, response) {
                search(term, function(data) {
                    response(data)
                })
            },
            onSelect: function (e, term, item) {
                console.log(item);
                if (e.type === 'keydown') {
                    location.href = "/" + language + "/search?q=" + term;
                } else {
                    location.href = $('.autocomplete-suggestion div a').attr('href');
                }
            },
            renderItem: function (item, search) {
                return '<div class=\"autocomplete-suggestion\">' +
                    '<div class="title"><a href=\"' + item.url + '\">' + item.title + '</a></div>' +
                    '<div style="font-size: 12px;">' + item.matches[0].value + '</div>' +
                    '</div>'
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
                anchor.appendChild(document.createTextNode(value.title));
                anchor.title = value.title;
                anchor.href = value.url;
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