// Instafeed Website: http://instafeedjs.com/
// Inspiration: https://codepen.io/markmurray/pen/dtseB

$(document).ready(function () {
    // pagination buttons
    var more = $("#more");
    var nomore = $("#nomore");
    
    // feed settings
    var feed = new Instafeed({
        get: 'user',
        userId: 195761337,
        accessToken: '195761337.1677ed0.44206195a27b493182a0a4ee4749773d', // http://instagram.pixelunion.net/
        target: 'instafeed',
        limit: 15, // max 60
        sortBy: 'most-recent',
        resolution: 'standard_resolution',
        // when each set of images are loaded... *
        after: function () {
            // * check for more images
            if (!this.hasNext()) {
                more.hide();
                nomore.show();
            } else {
                more.show();
                nomore.hide();
            }
            // * animate new set of images and add class to each image
            $('.image').not('.animated').velocity('transition.slideUpIn', {
                stagger: 150
            }).addClass('animated');
            // * cache location name
            var loc = $('.location');
            // * hide location if not set
            loc.each(function () {
                if (!$(this).text().trim().length) {
                    $(this).css('visibility', 'hidden').insertAfter($(this).next());
                }
            });
        },
        // for each image... *
        filter: function (image) {
            // * create new date object and pass in image date
            var date = new Date(image.created_time * 1000);
            // * create months array
            var months = new Array(12);
            months[0] = 'January';
            months[1] = 'February';
            months[2] = 'March';
            months[3] = 'April';
            months[4] = 'May';
            months[5] = 'June';
            months[6] = 'July';
            months[7] = 'August';
            months[8] = 'September';
            months[9] = 'October';
            months[10] = 'November';
            months[11] = 'December';
            // * parse month, day and year
            month = date.getMonth();
            day = date.getDate();
            year = date.getFullYear();
            // * concatenate and assign time
            var time = months[month] + ' ' + day + ', ' + year;
            image.created_time = time;
            // * end function execution
            return true;
        },
        template: '<a class="image" href="{{link}}"><span class="filter">{{model.filter}}</span><img src="{{image}}"><div class="info"><p class="caption"><span class="oi" data-glyph="comment-square"></span>{{caption}}</p><p class="location"><span class="oi" data-glyph="compass"></span>{{location}}</p><p class="date"><span class="oi" data-glyph="clock"></span>{{model.created_time}}</p></div><div class="likes"><span class="oi" data-glyph="heart"></span><p>{{likes}}</p></div></a>'
    });
    
    // pagination binding
    more.on('click', function () {
        feed.next();
    });
    
    // initialize feed
    feed.run();
});