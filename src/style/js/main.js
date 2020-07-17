$(function() {

	//
	// Search show
	//
	
		$('.header-search-btn').click(function() {
			$('.header-search-form').animate({width: 'toggle'});
		});

		$('.header-search-close').click(function() {
			$('.header-search-form').animate({width: 'toggle'});
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
		autoplay: true,
  	autoplaySpeed: 2500
	});
	
	//
	// Header slider end
	//

	//
	// Modal cart 
	//
	
	$('.header-cart').click(function() {
		$('.modal-cart').slideDown();
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

	$('.product-slider').slick({
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
		focusOnSelect: true
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
	// Product tab 
	//

	$('ul.product-tab-nav').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.product-tab').find('div.product-tab-elem').removeClass('active').eq($(this).index()).addClass('active');
  });

	//
	// Product tab end
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
	});

	//
	// Product other slider end
	//

	//
	// Modal product slider
	//

	function modalProduct() {
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
		});
	}

	//
	// Modal product slider
	//

	//
	// Open modal
	//

	function initModal(button) {
		button.click(function (event) {
			// var buttonVal = $(this).data("modal-btn");
			// var showModal = $(document).find('.modal').data("modal", buttonVal);

			// console.log(showModal);
			
			// showModal.fadeIn();

			$('body').addClass('modal-active');
			
			if(button.hasClass('product-slider-elem')) {
				$('.modal-product').fadeIn();
				modalProduct();
			} else if (button.hasClass('product-discussion-btn')) {
				$('.modal-discussion').fadeIn();
			} else if (button.hasClass('product-faq-btn')) {
				$('.modal-faq').fadeIn();
			} else if (button.hasClass('cart-menu-quick')) {
				$('.modal-quick').fadeIn();
			} else if (button.hasClass('order-btn')) {
				$('.modal-order').fadeIn();
			} else if (button.hasClass('terms-btn')) {
				$('.modal-terms').fadeIn();
			}
		})
	}	

	initModal($('.product-slider-elem'));
	initModal($('.product-discussion-btn'));
	initModal($('.product-faq-btn'));
	initModal($('.cart-menu-quick'));
	initModal($('.order-btn'));
	initModal($('.terms-btn'))

	$('.modal-close, .modal-bg').click(function() {
		$('.modal').fadeOut();
		$('body').removeClass('modal-active');
	})

	//
	// Open modal end
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
		$('.cart-comment-form').show();
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
});
