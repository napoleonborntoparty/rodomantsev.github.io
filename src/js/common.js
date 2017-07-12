$(document).ready(function () {
    //====================================
    //--------- Functions ----------------
    //====================================

    //  //= source/debounce.js

    //====================================
    //--------- Custom Scripts -----------
    //====================================

    //  // = source/map.js
    //= source/button-top.js
    //  //= source/modal.js
    //  //= source/responsive-iframe.js
    //  //= source/miss-click.js
    //= source/forms.js
    //= source/slider.js
    //= source/header.js

    //====================================
    //--------- Setting libs -------------
    //====================================
    $('.catalog-btn').click(function (e) {
        $('.top-info .catalog').toggleClass('active')
    })


    //====================================
    //-------- Only this site ------------
    //====================================


});


$('.menu button').click(function (event) {
    $('.menu-inner').toggleClass('active');
});
$('.catalog button').click(function (event) {
    $('.catalog-inner').toggleClass('active');
});

$('.star').raty({
    readOnly: true,
    start: 4
});


$("#slider-range").slider({
    min: 0,
    max: 1000,
    values: [0, 1000],
    range: true,
    stop: function (event, ui) {
        $("input#minCost").val($("#slider-range").slider("values", 0));
        $("input#maxCost").val($("#slider-range").slider("values", 1));
    },
    slide: function (event, ui) {
        $("input#minCost").val($("#slider-range").slider("values", 0));
        $("input#maxCost").val($("#slider-range").slider("values", 1));
    }
});

if ($('#clock').length) {


    $(window).on('load', function() {
        var labels = ['weeks', 'days', 'hours', 'minutes', 'seconds'],
            nextYear = (new Date().getFullYear() + 1) + '/01/01',
            template = _.template($('#clock-template').html()),
            currDate = '00:00:00:00:00',
            nextDate = '00:00:00:00:00',
            parser = /([0-9]{2})/gi,
            $example = $('#clock');
        // Parse countdown string to an object
        function strfobj(str) {
            var parsed = str.match(parser),
                obj = {};
            labels.forEach(function(label, i) {
                obj[label] = parsed[i]
            });
            return obj;
        }
        // Return the time components that diffs
        function diff(obj1, obj2) {
            var diff = [];
            labels.forEach(function(key) {
                if (obj1[key] !== obj2[key]) {
                    diff.push(key);
                }
            });
            return diff;
        }
        // Build the layout
        var initData = strfobj(currDate);
        labels.forEach(function(label, i) {
            $example.append(template({
                curr: initData[label],
                next: initData[label],
                label: label
            }));
        });
        // Starts the countdown
        $example.countdown(nextYear, function(event) {
            var newDate = event.strftime('%w:%d:%H:%M:%S'),
                data;
            if (newDate !== nextDate) {
                currDate = nextDate;
                nextDate = newDate;
                // Setup the data
                data = {
                    'curr': strfobj(currDate),
                    'next': strfobj(nextDate)
                };
                // Apply the new values to each node that changed
                diff(data.curr, data.next).forEach(function(label) {
                    var selector = '.%s'.replace(/%s/, label),
                        $node = $example.find(selector);
                    // Update the node
                    $node.removeClass('flip');
                    $node.find('.curr').text(data.curr[label]);
                    $node.find('.next').text(data.next[label]);
                    // Wait for a repaint to then flip
                    _.delay(function($node) {
                        $node.addClass('flip');
                    }, 50, $node);
                });
            }
        });
    });

}
