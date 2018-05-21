$(document).ready(function() {
    var horseyList = horsey($("#search-by").get(0), {
        suggestions: function (data, done) {
            var currentRequest = $.ajax({
                type: 'GET',
                url: 'http://localhost:3000/',
                contentType: 'text/plain',
                data: {
                    q: data,
                    id: "lang-" + SITE_DATA.language,
                    limit: 10
                },
                beforeSend: function() {
                    if (currentRequest != null) {
                        currentRequest.abort();
                    }
                },
                success: function (data) {
                    currentRequest = null;
                    console.log('Response:', data);
                    done(data);
                },
                error: function (err) {
                    currentRequest = null;
                    done([]);
                }
            });
        },

        set: function(value) {
            location.href = value.url;
        },

        render: function (li, suggestion) {
            li.innerHTML = "<div>» " + suggestion.title + "</div>" +
                "<div style=\"font-size: 12px\">" + (suggestion.matches[0].value || '') + "</div>";
        }
    });

    horseyList.refreshPosition();

    $('#search-by').on('keydown', function (e) {
        if (e.which === 13) {
            console.log('Go to the search results page');
            //Go to the search page
            alert('call')
        }
    });

    //When clicking the 'x' or pressing enter
    $('input[type=search]').on('search', function () {
        horseyList.clear();
    }).on('input', function () {
        if (!this.value) {
            horseyList.clear();
        }
    });
});