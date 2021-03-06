/*!
 * pixelard-Tabs v1.0.1 (https://github.com/rakeshongithub)
 * Copyright 2013 W3C Dezigns (www.w3cdezigns.com).
 * Licensed under www.w3cdezigns.com.
 */


// Self Invoking function and making alies safe
(function($, window, document, undefined){
		  
	var defaults = {
			detailBox : $('.detail-tab-wrapper > div'), // Detail wrapper
			activeClassName : 'active',                 // Class name for active tab
			activeTab : 2,                              // Default active tab index value
			events : 'mouseenter',                      // Events Mouseenter, click, hover
			fadeInOut : true,                           // Enable/Desable fadeIn/fadeOut effect by passing true and false.
			speed : 400
		};
		
	$.fn.domTab = function(options){
		// grabing defaults value with the help of $.extend();
		var settings = $.extend({}, defaults, options),
			$this = $(this);
		
		// Checking the dom tabs and dom detail boxs have equal count.
		if($this.length === settings.detailBox.length){
			
		// Set default active tab
		$this.eq(settings.activeTab).addClass(settings.activeClassName)
		
		// find current active tab and it's realated detail box
		$this.each(function(){
			var $this = $(this), currentId;
			if($this.is('.'+settings.activeClassName)){
				currentId = $(this).index();
				settings.detailBox.eq(currentId).addClass(settings.activeClassName).show()
				.siblings().removeClass(settings.activeClassName).hide();
			};
		});
		
		// Check if fadeIn/fadeOut effect is on and wrapper all detail boxes with fader-wrapper.
		if(settings.fadeInOut){
			settings.detailBox.wrapAll("<div class='fader-wrapper'></div>")
		}
		//show/hide detail boxes onclick on tab list
		$this.on(settings.events, function(){
			var tabId = $(this).index();
			$(this).addClass(settings.activeClassName)            // Add active click.
    	    .siblings().removeClass(settings.activeClassName);    // Remove active class from other siblings.
			
			// Check if fadeIn/fadeOut effect is on or not
			if(settings.fadeInOut){
				settings.detailBox.eq(tabId).addClass(settings.activeClassName).fadeIn(settings.speed)             // fadeIn detail box.
		        .siblings().removeClass(settings.activeClassName).fadeOut(settings.speed);                         // fadeOut other siblings detail box.
			} else {
				settings.detailBox.eq(tabId).addClass(settings.activeClassName).show()               // show detail box.
		        .siblings().removeClass(settings.activeClassName).hide();                            // hide other siblings detail box.
			};
		});
		
		} else { return false}
	};

}(jQuery, window, document))
