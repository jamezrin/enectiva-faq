$(document).ready(function() {
    $('#search-by').on('keydown', function () {
        console.log('Key down, current value:', this.value)
    });

    //When clicking the 'x' or pressing enter
    $('input[type=search]').on('search', function () {
        //Clear horsey list
    }).on('input', function () {
        if (!this.value) {
            //Clear horsey list
        }
    });
});