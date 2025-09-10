jQuery(function ($) {
	("use strict");

	function owlCarousel() {
	  $('#slider-small').owlCarousel({
		loop: true,
		margin: 10,
		dots: false,
		nav: false,
		responsive: {
		  0: {
			items: 1
		  },
		  600: {
			items: 2
		  },
		  1000: {
			items: 4
		  }
		}
	  });

	  $('#slider-carousel').owlCarousel({
		loop: true,
		margin: 0,
		dots: false,
		nav: false,
		responsive: {
		  0: {
			items: 1
		  },
		  600: {
			items: 3
		  },
		  1000: {
			items: 3
		  }
		},
		nav: true,
		navText: ["<span class='arrow-prev'></span>", "<span class='arrow-next'></span>"]
	  });

	  $('#slideshow_face').owlCarousel({
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		items: 1,
		margin: 0,
		stagePadding: 0,
		smartSpeed: 450,
		loop: true,
		autoplay: true,
	  });

	  $('#slideshow_big').owlCarousel({
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		items: 1,
		margin: 0,
		stagePadding: 0,
		smartSpeed: 450,
		loop: true,
		autoplay: false,
		nav: true,
		navText: ["<span class='arrow-prev'></span>", "<span class='arrow-next'></span>"]
	  });
	}
	owlCarousel();

	/*------ Wow Active ----*/
    new WOW().init();

	function goToTop() {
	  $('.js-gotop').on('click', function (event) {
		event.preventDefault();
		$('html, body').animate({
		  scrollTop: $('html').offset().top
		}, 500, 'swing');
		return false;
	  });

	  $(window).scroll(function () {
		var $win = $(window);
		if ($win.scrollTop() > 200) {
		  $('.js-top').addClass('active');
		} else {
		  $('.js-top').removeClass('active');
		}
	  });
	}
	goToTop();

	function slickNav() {
	  $('#main-menu').slicknav({
		label: 'MENU',
		duration: 150,
		allowParentLinks: true,
		prependTo: '#nav',
	  });

	  $('#sidebar-menu').slicknav({
		label: 'MENU',
		duration: 150,
		allowParentLinks: true,
		prependTo: '.menu-main-menu-container',
	  });
	}
	slickNav();

	function OffCanvas() {
	  $('.off-canvas-toggle').on('click', function (event) {
		$("#wrapper").addClass("toggled");
		$("#off-canvas-toggle").addClass("hidden");
	  });

	  $('.off-canvas-close').on('click', function (event) {
		$("#wrapper").removeClass("toggled");
	  });

	  $(document).mouseup(function (e) {
		var offcanvas = $("#sidebar-wrapper");
		if (!offcanvas.is(e.target) && offcanvas.has(e.target).length === 0) {
		  $("#wrapper").removeClass("toggled");
		}
	  });
	}
	OffCanvas();

	function TopSearch() {
	  $(".top-search").on('click', function (event) {
		$(".top-search-form").slideDown();
	  });

	  $(document).mouseup(function (e) {
		var container = $(".top-search-form");
		if (!container.is(e.target) && container.has(e.target).length === 0) {
		  container.slideUp();
		}
	  });
	}
	TopSearch();

	function SubMenu() {
	  $("li.menu-item-has-children").on({
		mouseenter: function () {
		  $('.sub-menu:first, .children:first', this).stop(true, true).slideDown('fast');
		},
		mouseleave: function () {
		  $('.sub-menu:first, .children:first', this).stop(true, true).slideUp('fast');
		}
	  });
	}
	SubMenu();

	function MasonryGrid() {
	  $('.grid').masonry({
		itemSelector: '.grid-item',
		columnWidth: '.grid-sizer',
		percentPosition: true
	  });
	}
	MasonryGrid();

	function theStickySidebar() {
	  $('.sidebar_right').stickySidebar({
		topSpacing: 30,
		bottomSpacing: 30
	  });
	}
	theStickySidebar();

	function moreArticles() {
	  $(window).on("scroll", function () {
		var scrollHeight = $(document).height();
		var bottomHeight = $('.bottom').height() + 300;
		var scrollPosition = $(window).height() + $(window).scrollTop();
		var $more_articles = $('.single-more-articles');
		if ((scrollHeight - scrollPosition) < bottomHeight) {
		  $more_articles.addClass("single-more-articles--visible");
		} else {
		  $more_articles.removeClass("single-more-articles--visible");
		}
	  });

	  $(".single-more-articles-close-button").on('click', function (event) {
		$('.single-more-articles').hide();
	  });
	}
	moreArticles();
  });
