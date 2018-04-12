var lunrIdx, pagesIdx;

//Update the token with the latinised version of it
var normaliseSpelling = function (builder) {
    var pipelineFunction = function(token) {
        var normalised = S(token.toString()).latinise().s;
        if (normalised !== token.toString()) {
            return token.update(function() {
                return normalised;
            });
        } else {
            return token;
        }
    };

    lunr.Pipeline.registerFunction(pipelineFunction, 'normaliseSpelling');
    builder.pipeline.before(lunr.stemmer, pipelineFunction);
    builder.searchPipeline.before(lunr.stemmer, pipelineFunction);
};

//After updating lunr, it is slow. Maybe it is because of the stemmer?
//I removed it, so it might be needed to add it back again
//The variable 'LANGUAGE' is coming from a script tag in the HTML
function initLunr() {
    $.getJSON("/dist/search." + LANGUAGE + ".json")
    .done(function (indexFile) {
        pagesIdx = indexFile;
        lunrIdx = lunr(function() {
            this.ref('url');
            this.field('title', { boost: 15 });
            this.field('tags', { boost: 10 });
            this.field('content', { boost: 5 });
            //this.use(normaliseSpelling);
            
            indexFile.forEach(function(element) {
                this.add(element);
            }, this);

            this.pipeline.remove(this.stemmer);
        });
    })
    .fail(function (jqxhr, textStatus, error) {
        var err = textStatus + ", " + error;
        console.error("Error getting Hugo index file:", err);
    });
}

/**
 * Trigger a search in lunr and transform the result
 *
 * @param  {String} query
 * @return {Array}  results
 */
function search(query) {
    // Find the item in our index corresponding to the lunr one to have more info
    return lunrIdx.search(query).map(function (result) {
        return pagesIdx.filter(function (page) {
            return page.url === result.ref;
        })[0];
    });
}

initLunr();

$(document).ready(function() {
    var horseyList = horsey($("#search-by").get(0), {
        suggestions: function (value, done) {
            var query = $("#search-by").val();
            var results = search(query);
            done(results);
        },
        filter: function (q, suggestion) {
            return true;
        },
        set: function (value) {
            location.href = value.href;
        },
        render: function (li, suggestion) {
            var url = suggestion.url.substring(1, suggestion.url.length);
            var indexOfIndex = url.lastIndexOf("/index");
            if (indexOfIndex == -1) {
                indexOfIndex = url.length;
            }
            var href = url.substring(url.indexOf("/"), indexOfIndex);
            suggestion.href = baseurl + url;

            var query = $("#search-by").val();
            var numWords = 2;
            var text = suggestion.content.match("(?:\\s?(?:[\\w]+)\\s?){0," + numWords + "}" + query + "(?:\\s?(?:[\\w]+)\\s?){0," + numWords + "}");
            suggestion.context = text;
            var image = '<div>' + '» ' + suggestion.title + '</div><div style="font-size:12px">' + (suggestion.context || '') + '</div>';
            li.innerHTML = image;
        },
        limit: 10
    });

    horseyList.refreshPosition();

    //When clicking the 'x' or pressing enter
    $('input[type=search]').on('search', function () {
        horseyList.clear();
    }).on('input', function () {
        if (!this.value) {
            horseyList.clear();
        }
    });
});