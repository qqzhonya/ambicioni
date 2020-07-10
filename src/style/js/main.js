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
	
	$('.header-slider').owlCarousel({
		items: 1,
		loop:true,
    margin:10,
		nav:true,
		dots:true,
		autoplay:true,
    autoplayTimeout:2500,
		autoplayHoverPause:true,
		animateOut: 'fadeOut'
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
          my: 'center top',
          at: 'center bottom',
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
	//
	// Price filter slider end 
	//

});
