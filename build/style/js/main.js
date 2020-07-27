$(function() {

	//
	// Search show
	//
	
	$('.header-search-btn').click(function() {
		$('.header-search-form').animate({width: 'toggle'});
		$('.header').addClass('search-open');
		$('.header-menu-btn').removeClass('active');
		$('.mobile-menu').hide();
		$('.modal-cart').slideUp();
	});

	$('.header-search-close').click(function() {
		$('.header-search-form').animate({width: 'toggle'});
		$('.header').removeClass('search-open');
	});

	//
	// Search show end 
	//
	
	//
	// Header slider
	//
	
	$('.header-slider').slick({
		dots: true,
		infinite: true,
		speed: 2000,
		fade: true,
		cssEase: 'linear',
		autoplay: false,
  	autoplaySpeed: 2000
	});
	
	//
	// Header slider end
	//

	//
	// Modal cart 
	//
	
	$('.header-cart').click(function() {
		$('.modal-cart').slideDown();
		$('.header-menu-btn').removeClass('active');
		$('.mobile-menu').hide();
	});

	$('.modal-cart-close').click(function() {
		$('.modal-cart').slideUp();
	})

	//
	// Modal cart end
	//

	//
	// Price filter slider
	//

	if($('#priceSlider').length) {
		$('.price-filter-slider').slider({
			range: true,
			min: 0,
			max: 150000,
			values: [1600, 120000],
			slide: function( event, ui ) {
				$('#input-from').val(ui.values[0]);
				$('#input-to').val(ui.values[1])
				var delay = function() {
					var handleIndex = $(ui.handle).index();
					var label = handleIndex == 1 ? '#priceSlider-min' : '#priceSlider-max';
					$(label).html(ui.value).position({
						my: "center top",
						at: "center bottom",
						of: ui.handle,
						offset: "0, 10"
					});
				}
	
				setTimeout(delay, 5);
			}
		});
	
		$('#priceSlider-min').html($('#priceSlider').slider('values', 0)).position({
			my: 'center top',
			at: 'center bottom',
			of: $('#priceSlider span:eq(0)'),
			offset: "0, 10"
		});
	
		$('#priceSlider-max').html($('#priceSlider').slider('values', 1)).position({
			my: 'center top',
			at: 'center bottom',
			of: $('#priceSlider span:eq(1)'),
			offset: "0, 10"
		});
	
		$('#input-from').val($('#priceSlider').slider("values", 0));
		$('#input-to').val($('#priceSlider').slider("values", 1)) 
	
		$('#input-from').on("input", function() {
			var inputVal = $(this).val();
	
			$('#priceSlider').slider('values', 0, inputVal);
			$('#priceSlider-min').text(inputVal);
		})
	
		$('#input-to').on("input", function() {
			var inputVal = $(this).val();
	
			$('#priceSlider').slider('values', 1, inputVal);
			$('#priceSlider-max').text(inputVal);
		})
	}

	//
	// Price filter slider end 
	//

	//
	// Product slider
	//

	var slideCount = $('.product-slider').find(".product-slider-elem").length;
	if (slideCount <= 9 ) {
		// clone element
		for(var i=slideCount; i < 8; i++) {
			$(".product-slider").children().clone(true, true).appendTo(".product-slider");
			$(".product-slider-nav").children().clone(true, true).appendTo(".product-slider-nav");
		}
	};


	$('.product-slider').not('.slick-initialized').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		fade: true,
		asNavFor: '.product-slider-nav'
	});

	$('.product-slider-nav').slick({
		slidesToShow: 8,
		slidesToScroll: 1,
		asNavFor: '.product-slider',
		dots: false,
		arrows: false,
		centerMode: false,
		focusOnSelect: true,
		responsive: [
			{
				breakpoint: 961,
				settings: {
					slidesToShow: 6,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 421,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
				}
			}
		]
	});

	//
	// Product slider end
	//

	//
	// Custom select
	//

	$('.custom-select').each(function() {
		$('.custom-select').select2({
			minimumResultsForSearch: Infinity
		});
	});

	function selectColor (color) {
		if (!color.id) {
			return color.text;
		}

		var baseUrl = "style/img/productColor";
		var $color = $(
			'<span class="product-select-option"><img src="' + baseUrl + '/' + color.element.value.toLowerCase() + '.jpg" class="product-color-img" /> '+ color.text +' </span>'
		);
		return $color;
	};

	$('#select-color').select2({
		templateSelection: selectColor,
		templateResult: selectColor,
		minimumResultsForSearch: Infinity
	});

	$('.custom-select').on('select2:open', function() {
		$('.select2-dropdown .select2-results__options').mCustomScrollbar('destroy');
    $('.select2-dropdown .select2-results__options').mCustomScrollbar('update');
    setTimeout(function() {
        $('.select2-dropdown .select2-results__options').mCustomScrollbar({
						axis: 'y',
						theme: 'customScroll-select'
        });
    }, 0);
	});

	//
	// Custom select end
	//

	//
	// Tab 
	//

	$('ul.tab-nav').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.tab').find('div.tab-elem').removeClass('active').eq($(this).index()).addClass('active');
  });

	//
	// Tab end
	//

	//
	// Product other slider
	//
	
	$('.product-other-slider').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		infinite: false,
		responsive: [
			{
				breakpoint: 720,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 420,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				}
			},
		]
	});

	//
	// Product other slider end
	//

	//
	// Modal product slider
	//

	function modalProduct() {
		var slideCount = $('.modal-product-slider').find(".modal-product-slider-elem").length;
		if (slideCount <= 9 ) {
			// clone element
			for(var i=slideCount; i < 8; i++) {
				$(".modal-product-slider").children().clone(true, true).appendTo(".modal-product-slider");
				$(".modal-product-slider-nav").children().clone(true, true).appendTo(".modal-product-slider-nav");
			}
		};

		$('.modal-product-slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			dots: false,
			fade: true,
			asNavFor: '.modal-product-slider-nav'
		});
	
		$('.modal-product-slider-nav').slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			asNavFor: '.modal-product-slider',
			dots: false,
			arrows: false,
			centerMode: false,
			focusOnSelect: true,
			vertical: true,
			verticalSwiping: true,
			responsive: [
				{
					breakpoint: 1050,
					settings: {
						slidesToShow: 8,
						vertical: false,
						verticalSwiping: false,
					}
				},
				{
					breakpoint: 500,
					settings: {
						slidesToShow: 4,
						vertical: false,
						verticalSwiping: false,
					}
				}
			]
		});
	}

	//
	// Modal product slider
	//

	//
	// Modal
	//

	function initModal(button) {
		button.click(function (event) {
			var buttonVal = $(this).data("modal-btn");
			var showModal = $(".modal").filter('[data-modal = "' + buttonVal +'"]');

			$('body').addClass('modal-active');
			
			showModal.fadeIn();

			if($('.modal').filter('[data-modal = "product-modal"]')) {
				modalProduct();
			}
		})
	}	

	initModal($('.modal-btn'));	

	$('.modal-close, .modal-bg').click(function() {
		$('.modal').fadeOut();
		$('body').removeClass('modal-active');
	})

	document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
			$('.modal').fadeOut();
			$('body').removeClass('modal-active');
    }
	};

	//
	// Modal end
	//

	//
	// Cart quantity 
	//

	$('.cart-number-plus').click(function () {
		var $input = $(this).parent().parent().find('input');
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		return false;
	});

	$('.cart-number-minus').click(function () {
		var $input = $(this).parent().parent().find('input');
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
	});
	
	//
	// Cart quantity end
	//

	//
	// Cart show comment
	//
	
	$('.cart-comment-btn').click(function() {
		$(this).hide();
		$(this).parent().find('.cart-comment-form').show();
	});

	$('.cart-comment-form-close').click(function() {
		$(this).parent().parent().find('.cart-comment-btn').show();
		$(this).parent().parent().find('.cart-comment-form').hide();
	});

	//
	// Cart show comment end
	//

	//
	// Comment size 
	//

	$('.cart-comment-textarea').on('input',function(){
		var input = $(this);
		$('.cart-comment-symbols-value').text(input.val().length);
	});

	//
	// Comment size end 
	//

	//
	// About media fancybox
	//

	$('.about-media-elem').fancybox();

	//
	// About media fancybox end
	//

	//
	// Cooperation change form
	//

	$('.cooperation-form-radio').click(function() {
		$(this).toggleClass('active');

		if($(this).hasClass('cooperation-form-radio-design')) {
			$('.cooperation-form-dealer').removeClass('active');

			$('.cooperation-form-design').addClass('active');
		} else if($(this).hasClass('cooperation-form-radio-dealer')) {
			$('.cooperation-form-design').removeClass('active');

			$('.cooperation-form-dealer').addClass('active');
		}
	});

	//
	// Cooperation change form end
	//

	//
	// Order list info
	//

	$('.order-list-heading').click(function() {
		$(this).parent().toggleClass('active').siblings().removeClass('active');

		$('.order-list-dropdown').slideUp()

		if($(this).parent().hasClass('active')) {
			$(this).parent().find('.order-list-dropdown').slideDown();;
		}
	})

	//
	// Order list info end
	//

	//
	// Mobile menu
	//

	$('.header-menu-btn').click(function() {
		$(this).toggleClass('active');

		if($(this).hasClass('active')) {
			$('.mobile-menu').show();
			$('.modal-cart').slideUp();
		} else {
			$('.mobile-menu').hide();
		}
	});

	$('.mobile-menu-nav-about').click(function() {
		$(this).toggleClass('active');

		if($(this).hasClass('active')) {
			$('.mobile-menu-nav-submenu').slideDown();
		} else {
			$('.mobile-menu-nav-submenu').slideUp();
		}
	});

	//
	// Mobile menu end
	//

});
