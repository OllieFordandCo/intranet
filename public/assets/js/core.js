/*!
 * imagesLoaded PACKAGED v3.1.8
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

(function(){function e(){}function t(e,t){for(var n=e.length;n--;)if(e[n].listener===t)return n;return-1}function n(e){return function(){return this[e].apply(this,arguments)}}var i=e.prototype,r=this,o=r.EventEmitter;i.getListeners=function(e){var t,n,i=this._getEvents();if("object"==typeof e){t={};for(n in i)i.hasOwnProperty(n)&&e.test(n)&&(t[n]=i[n])}else t=i[e]||(i[e]=[]);return t},i.flattenListeners=function(e){var t,n=[];for(t=0;e.length>t;t+=1)n.push(e[t].listener);return n},i.getListenersAsObject=function(e){var t,n=this.getListeners(e);return n instanceof Array&&(t={},t[e]=n),t||n},i.addListener=function(e,n){var i,r=this.getListenersAsObject(e),o="object"==typeof n;for(i in r)r.hasOwnProperty(i)&&-1===t(r[i],n)&&r[i].push(o?n:{listener:n,once:!1});return this},i.on=n("addListener"),i.addOnceListener=function(e,t){return this.addListener(e,{listener:t,once:!0})},i.once=n("addOnceListener"),i.defineEvent=function(e){return this.getListeners(e),this},i.defineEvents=function(e){for(var t=0;e.length>t;t+=1)this.defineEvent(e[t]);return this},i.removeListener=function(e,n){var i,r,o=this.getListenersAsObject(e);for(r in o)o.hasOwnProperty(r)&&(i=t(o[r],n),-1!==i&&o[r].splice(i,1));return this},i.off=n("removeListener"),i.addListeners=function(e,t){return this.manipulateListeners(!1,e,t)},i.removeListeners=function(e,t){return this.manipulateListeners(!0,e,t)},i.manipulateListeners=function(e,t,n){var i,r,o=e?this.removeListener:this.addListener,s=e?this.removeListeners:this.addListeners;if("object"!=typeof t||t instanceof RegExp)for(i=n.length;i--;)o.call(this,t,n[i]);else for(i in t)t.hasOwnProperty(i)&&(r=t[i])&&("function"==typeof r?o.call(this,i,r):s.call(this,i,r));return this},i.removeEvent=function(e){var t,n=typeof e,i=this._getEvents();if("string"===n)delete i[e];else if("object"===n)for(t in i)i.hasOwnProperty(t)&&e.test(t)&&delete i[t];else delete this._events;return this},i.removeAllListeners=n("removeEvent"),i.emitEvent=function(e,t){var n,i,r,o,s=this.getListenersAsObject(e);for(r in s)if(s.hasOwnProperty(r))for(i=s[r].length;i--;)n=s[r][i],n.once===!0&&this.removeListener(e,n.listener),o=n.listener.apply(this,t||[]),o===this._getOnceReturnValue()&&this.removeListener(e,n.listener);return this},i.trigger=n("emitEvent"),i.emit=function(e){var t=Array.prototype.slice.call(arguments,1);return this.emitEvent(e,t)},i.setOnceReturnValue=function(e){return this._onceReturnValue=e,this},i._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},i._getEvents=function(){return this._events||(this._events={})},e.noConflict=function(){return r.EventEmitter=o,e},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return e}):"object"==typeof module&&module.exports?module.exports=e:this.EventEmitter=e}).call(this),function(e){function t(t){var n=e.event;return n.target=n.target||n.srcElement||t,n}var n=document.documentElement,i=function(){};n.addEventListener?i=function(e,t,n){e.addEventListener(t,n,!1)}:n.attachEvent&&(i=function(e,n,i){e[n+i]=i.handleEvent?function(){var n=t(e);i.handleEvent.call(i,n)}:function(){var n=t(e);i.call(e,n)},e.attachEvent("on"+n,e[n+i])});var r=function(){};n.removeEventListener?r=function(e,t,n){e.removeEventListener(t,n,!1)}:n.detachEvent&&(r=function(e,t,n){e.detachEvent("on"+t,e[t+n]);try{delete e[t+n]}catch(i){e[t+n]=void 0}});var o={bind:i,unbind:r};"function"==typeof define&&define.amd?define("eventie/eventie",o):e.eventie=o}(this),function(e,t){"function"==typeof define&&define.amd?define(["eventEmitter/EventEmitter","eventie/eventie"],function(n,i){return t(e,n,i)}):"object"==typeof exports?module.exports=t(e,require("wolfy87-eventemitter"),require("eventie")):e.imagesLoaded=t(e,e.EventEmitter,e.eventie)}(window,function(e,t,n){function i(e,t){for(var n in t)e[n]=t[n];return e}function r(e){return"[object Array]"===d.call(e)}function o(e){var t=[];if(r(e))t=e;else if("number"==typeof e.length)for(var n=0,i=e.length;i>n;n++)t.push(e[n]);else t.push(e);return t}function s(e,t,n){if(!(this instanceof s))return new s(e,t);"string"==typeof e&&(e=document.querySelectorAll(e)),this.elements=o(e),this.options=i({},this.options),"function"==typeof t?n=t:i(this.options,t),n&&this.on("always",n),this.getImages(),a&&(this.jqDeferred=new a.Deferred);var r=this;setTimeout(function(){r.check()})}function f(e){this.img=e}function c(e){this.src=e,v[e]=this}var a=e.jQuery,u=e.console,h=u!==void 0,d=Object.prototype.toString;s.prototype=new t,s.prototype.options={},s.prototype.getImages=function(){this.images=[];for(var e=0,t=this.elements.length;t>e;e++){var n=this.elements[e];"IMG"===n.nodeName&&this.addImage(n);var i=n.nodeType;if(i&&(1===i||9===i||11===i))for(var r=n.querySelectorAll("img"),o=0,s=r.length;s>o;o++){var f=r[o];this.addImage(f)}}},s.prototype.addImage=function(e){var t=new f(e);this.images.push(t)},s.prototype.check=function(){function e(e,r){return t.options.debug&&h&&u.log("confirm",e,r),t.progress(e),n++,n===i&&t.complete(),!0}var t=this,n=0,i=this.images.length;if(this.hasAnyBroken=!1,!i)return this.complete(),void 0;for(var r=0;i>r;r++){var o=this.images[r];o.on("confirm",e),o.check()}},s.prototype.progress=function(e){this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded;var t=this;setTimeout(function(){t.emit("progress",t,e),t.jqDeferred&&t.jqDeferred.notify&&t.jqDeferred.notify(t,e)})},s.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";this.isComplete=!0;var t=this;setTimeout(function(){if(t.emit(e,t),t.emit("always",t),t.jqDeferred){var n=t.hasAnyBroken?"reject":"resolve";t.jqDeferred[n](t)}})},a&&(a.fn.imagesLoaded=function(e,t){var n=new s(this,e,t);return n.jqDeferred.promise(a(this))}),f.prototype=new t,f.prototype.check=function(){var e=v[this.img.src]||new c(this.img.src);if(e.isConfirmed)return this.confirm(e.isLoaded,"cached was confirmed"),void 0;if(this.img.complete&&void 0!==this.img.naturalWidth)return this.confirm(0!==this.img.naturalWidth,"naturalWidth"),void 0;var t=this;e.on("confirm",function(e,n){return t.confirm(e.isLoaded,n),!0}),e.check()},f.prototype.confirm=function(e,t){this.isLoaded=e,this.emit("confirm",this,t)};var v={};return c.prototype=new t,c.prototype.check=function(){if(!this.isChecked){var e=new Image;n.bind(e,"load",this),n.bind(e,"error",this),e.src=this.src,this.isChecked=!0}},c.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},c.prototype.onload=function(e){this.confirm(!0,"onload"),this.unbindProxyEvents(e)},c.prototype.onerror=function(e){this.confirm(!1,"onerror"),this.unbindProxyEvents(e)},c.prototype.confirm=function(e,t){this.isConfirmed=!0,this.isLoaded=e,this.emit("confirm",this,t)},c.prototype.unbindProxyEvents=function(e){n.unbind(e.target,"load",this),n.unbind(e.target,"error",this)},s});


/*!
 * Midnight.js 1.0.3
 * jQuery plugin to switch between multiple fixed header designs on the fly, so it looks in line with the content below it.
 * http://aerolab.github.io/midnight.js/
 *
 * Copyright (c) 2014 Aerolab <info@aerolab.co>
 *
 * Released under the MIT license
 * http://aerolab.github.io/midnight.js/LICENSE.txt
 */
 !function(e){e.fn.midnight=function(t){return"object"!=typeof t&&(t={}),this.each(function(){var s={headerClass:"midnightHeader",innerClass:"midnightInner",defaultClass:"default"};e.extend(s,t);var a=window.pageYOffset||document.documentElement.scrollTop,n=e(document).height(),r=e(this),o={},l={top:0,height:r.outerHeight()},d=e("[data-midnight]"),f=[],h=function(){for(var e="transform WebkitTransform MozTransform OTransform msTransform".split(" "),t=0;t<e.length;t++)if(void 0!==document.createElement("div").style[e[t]])return e[t];return!1},m=h();if(0!=d.length){var c=function(){var t=r.find("> ."+s.headerClass),a=0,n=0;return t.length?t.each(function(){var t=e(this),i=t.find("> ."+s.innerClass);i.length?(i.css("bottom","auto"),n=i.outerHeight(),i.css("bottom","0")):(t.css("bottom","auto"),n=t.outerHeight(),t.css("bottom","0")),a=n>a?n:a}):a=n=r.outerHeight(),a},u=function(){l.height=c(),r.css("height",l.height+"px")},g=function(){o["default"]={},d.each(function(){var t=e(this),s=t.data("midnight");"string"==typeof s&&(s=s.trim(),""!==s&&(o[s]={}))});({top:r.css("padding-top"),right:r.css("padding-right"),bottom:r.css("padding-bottom"),left:r.css("padding-left")});r.css({position:"fixed",top:0,left:0,right:0,overflow:"hidden"}),u();var t=r.find("> ."+s.headerClass);t.length?t.filter("."+s.defaultClass).length||t.filter("."+s.headerClass+":first").clone(!0,!0).attr("class",s.headerClass+" "+s.defaultClass):r.wrapInner('<div class="'+s.headerClass+" "+s.defaultClass+'"></div>');var t=r.find("> ."+s.headerClass),a=t.filter("."+s.defaultClass).clone(!0,!0);for(headerClass in o)if("undefined"==typeof o[headerClass].element){var n=t.filter("."+headerClass);o[headerClass].element=n.length?n:a.clone(!0,!0).removeClass(s.defaultClass).addClass(headerClass).appendTo(r);var i={position:"absolute",overflow:"hidden",top:0,left:0,right:0,bottom:0};o[headerClass].element.css(i),m!==!1&&o[headerClass].element.css(m,"translateZ(0)"),o[headerClass].element.find("> ."+s.innerClass).length||o[headerClass].element.wrapInner('<div class="'+s.innerClass+'"></div>'),o[headerClass].inner=o[headerClass].element.find("> ."+s.innerClass),o[headerClass].inner.css(i),m!==!1&&o[headerClass].inner.css(m,"translateZ(0)"),o[headerClass].from="",o[headerClass].progress=0}t.each(function(){var t=e(this),a=!1;for(headerClass in o)t.hasClass(headerClass)&&(a=!0);t.find("> ."+s.innerClass).length||t.wrapInner('<div class="'+s.innerClass+'"></div>'),a||t.hide()})};g();var p=function(){for(n=e(document).height(),f=[],i=0;i<d.length;i++){var t=e(d[i]);f.push({element:t,"class":t.data("midnight"),start:t.offset().top,end:t.offset().top+t.outerHeight()})}};setInterval(p,1e3);var x=function(){a=window.pageYOffset||document.body.scrollTop||document.documentElement.scrollTop,a=Math.max(a,0),a=Math.min(a,n);var e=l.height,t=a+l.top,s=a+l.top+e;for(ix in o)o[ix].from="",o[ix].progress=0;for(ix in f)s>=f[ix].start&&t<=f[ix].end&&(o[f[ix].class].visible=!0,t>=f[ix].start&&s<=f[ix].end?(o[f[ix].class].from="top",o[f[ix].class].progress+=1):s>f[ix].end&&t<f[ix].end?(o[f[ix].class].from="top",o[f[ix].class].progress=1-(s-f[ix].end)/e):s>f[ix].start&&t<f[ix].start&&("top"===o[f[ix].class].from?o[f[ix].class].progress+=(s-f[ix].start)/e:(o[f[ix].class].from="bottom",o[f[ix].class].progress=(s-f[ix].start)/e)))},C=function(){var e=0,t="";for(ix in o)""!==!o[ix].from&&(e+=o[ix].progress,t=ix);1>e&&(""===o[s.defaultClass].from?(o[s.defaultClass].from="top"===o[t].from?"bottom":"top",o[s.defaultClass].progress=1-e):o[s.defaultClass].progress+=1-e);for(ix in o)if(""!==!o[ix].from){var a=100*(1-o[ix].progress);"top"===o[ix].from?m!==!1?(o[ix].element[0].style[m]="translateY(-"+a+"%) translateZ(0)",o[ix].inner[0].style[m]="translateY(+"+a+"%) translateZ(0)"):(o[ix].element[0].style.top="-"+a+"%",o[ix].inner[0].style.top="+"+a+"%"):m!==!1?(o[ix].element[0].style[m]="translateY(+"+a+"%) translateZ(0)",o[ix].inner[0].style[m]="translateY(-"+a+"%) translateZ(0)"):(o[ix].element.style.top="+"+a+"%",o[ix].inner.style.top="-"+a+"%")}};e(window).resize(function(){p(),u(),x(),C()}).trigger("resize"),requestAnimationFrame=window.requestAnimationFrame||function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}();var v=function(){requestAnimationFrame(v),x(),C()};v()}})}}(jQuery);

/* Make sure jQuery Mobile loads correctly if necessary */
jQuery(document).on("mobileinit", function(){
	jQuery.mobile.loader.prototype.options.text = "";
	jQuery.mobile.loader.prototype.options.html = "";
});

/* jQuery Declaration */
jQuery.noConflict();
(function( $ ) { 

  $(function() {

	$.ajaxSetup({
        headers: {
            'X-CSRF-Token': $('meta[name="_token"]').attr('content')
        }
    });

	$app = $('.app');

	/* Pre-Loading images */
	$('body').imagesLoaded( function() {
	 	// images have loaded
		setTimeout(function() {
			 $('.overlay').fadeOut('slow');
		}, 1000);	  
	});
	
	$(document).ready(function() {
	
		/* On element click */
		$('body').on('click', '.canvas-toggle', function() {
		
			$app.toggleClass('open');
		
		});

		$('body').on('click', '[data-api]', function() {
			$href = $(this).data('api');
			$token = $('meta[name="_token"]').attr('content');
			$.ajax({
			  type: "POST",
			  url: $href
			}).done(function( msg ) {
				$('html, body').animate({
					scrollTop: 0
				}, 1000);
				$('.content-wrapper').html(msg);
			}).fail(function() {
				alert( "error" );
			}).always(function() {
				alert( "complete" );
			});		
		});
	
	}); 	

  });
})(jQuery);