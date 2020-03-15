var $ = require('jquery');
window.$ = $;

var urlParams = new URLSearchParams(window.location.search);

if (!urlParams.get('full')) {
    var $control = $('.slideshow-control');
    var $preview = $('.slideshow-preview');
    var $slideshowFull = $();
    var $slides = $('.slide');
    var slideLen = $slides.length;
    var currentIndex = 0;

    var selectSlide = function (index) {
        var $slide = $slides.eq(index);
        var text = $slide.text();
        $slides.removeClass('active');
        $slide.addClass('active');

        $preview.find('.slideshow-preview-slide:first-child').remove();
        $preview.append('<div class="slideshow-preview-slide">' + text + '</div>');
        $preview.append('<div class="slideshow-preview-slide"></div>');
        setTimeout(function () {
            $preview.find('.slideshow-preview-slide:last-child').remove();
        }, 100);

        $slideshowFull.find('.slideshow-full-slide:first-child').remove();
        $slideshowFull.append('<div class="slideshow-full-slide">' + text + '</div>');
        $slideshowFull.append('<div class="slideshow-full-slide"></div>');
        setTimeout(function () {
            $slideshowFull.find('.slideshow-full-slide:last-child').remove();
        }, 100);

        $slide[0].scrollIntoViewIfNeeded();
    };

    var nextSlide = function () {
        currentIndex++;
        if (currentIndex > slideLen - 1) {
            currentIndex = slideLen - 1;
        }
        selectSlide(currentIndex);
    };

    var prevSlide = function () {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = 0;
        }
        selectSlide(currentIndex);
    };

    $('.slide').on('click', function (evt) {
        evt.preventDefault();

        currentIndex = $slides.index(this);

        selectSlide(currentIndex, true);
    });

    $('.next-button').on('click', function (evt) {
        evt.preventDefault();
        nextSlide();
    });

    $('.prev-button').on('click', function (evt) {
        evt.preventDefault();
        prevSlide();
    });

    $(document).on('keydown', function (evt) {
        if (evt.keyCode === 40) {
            evt.preventDefault();
            evt.stopPropagation();
            nextSlide();
        }
        if (evt.keyCode === 38) {
            evt.preventDefault();
            evt.stopPropagation();
            prevSlide();
        }
    });

    $('.start-button').on('click', function (evt) {
        evt.preventDefault();

        var win = window.open(window.location.toString() + '?full=true');

        win.onload = function() {
            var $$ = win.$;

            $slideshowFull = $$('.slideshow-full');
            selectSlide(currentIndex);
        };
    });

    $('.back-button').on('click', function (evt) {
        evt.preventDefault();
        window.location.pathname = window.location.pathname.replace(/\/slideshow\/?/, '').replace(/\/[^/]*\/?$/, '');
    });

    selectSlide(0);
}
