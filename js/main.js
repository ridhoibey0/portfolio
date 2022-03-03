/*
	Foxstar 2.0
    by WowThemez
*/

(function ($) {
  'use strict';

  $(window).on('load', function () {
    $('body').addClass('loaded');
  });

  /*=========================================================================
    Navigation Menu
=========================================================================*/
  $(function () {
    var header = $('#header-1'),
      yOffset = 0,
      triggerPoint = 10;
    $(window).on('scroll', function () {
      yOffset = $(window).scrollTop();

      if (yOffset >= triggerPoint) {
        header.addClass('fixed-top');
      } else {
        header.removeClass('fixed-top');
      }
    });
  });

  /*=========================================================================
    Progress Bar Loading Effect
=========================================================================*/
  if ($('.content_section.content-17, .content_section.content-22, .skill_section.tab-7').length) {
    var barsSec = $('.content_section.content-17, .content_section.content-22, .skill_section.tab-7');
    var barsLoaded = false;
    if (barsSec[0]) {
      $(window).on('scroll', function () {
        var _offsetTop = $(this).scrollTop() - barsSec.offset().top;
        if (!barsLoaded) {
          if (_offsetTop >= -550) {
            barsSec.find('.progress-bar').each(function () {
              var _this = $(this);
              _this.css('width', _this.data('skill-value') + '%');
            });
            barsLoaded = true;
          }
        }
      });
    }
  }

  /*=========================================================================
    Isotope Active
=========================================================================*/
  var PortfolioEl = $('.portfolio_items'),
    FilterEl = $('.portfolio_filter li');
  PortfolioEl.imagesLoaded(function () {
    // Add isotope click function
    FilterEl.on('click', function () {
      FilterEl.removeClass('active');
      $(this).addClass('active');

      var selector = $(this).attr('data-filter');
      PortfolioEl.isotope({
        filter: selector,
        animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false,
        },
      });
      return false;
    });

    PortfolioEl.isotope({
      itemSelector: '.single_item',
      layoutMode: 'fitRows',
    });
  });

  var PortfolioElMason = $('.portfolio_items_m'),
    FilterElMason = $('.portfolio_filter li');
  PortfolioElMason.imagesLoaded(function () {
    // Add isotope click function
    FilterElMason.on('click', function () {
      FilterElMason.removeClass('active');
      $(this).addClass('active');

      var selector = $(this).attr('data-filter');
      PortfolioElMason.isotope({
        filter: selector,
        animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false,
        },
      });
      return false;
    });

    PortfolioElMason.isotope({
      itemSelector: '.single_item',
      layoutMode: 'masonry',
    });
  });
})(jQuery);
