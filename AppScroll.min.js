/*
 * AppScroll.js
 *
 * Copyright 2013, Jacob Kelley - http://jakiestfu.com/
 * Released under the MIT Licence
 * http://opensource.org/licenses/MIT
 *
 * Github:  https://github.com/jakiestfu/AppScroll
 * Version: 1.0.0
 */
(function(b){var a=function(f){var c={toolbar:null,scroller:null},d=function(h){if(("ontouchstart" in window)&&typeof h==="function"){h.call()}},e={listen:function(){if(c.scroller){c.scroller.addEventListener("touchend",e._touchEnd);c.scroller.addEventListener("scroll",e._endScroll)}if(c.toolbar){c.toolbar.addEventListener("touchmove",e._touchMove)}e._touchEnd();e._endScroll()},noListen:function(){if(c.scroller){c.scroller.removeEventListener("touchend",e._touchEnd);c.scroller.removeEventListener("scroll",e._endScroll)}if(c.toolbar){c.toolbar.removeEventListener("touchmove",e._touchMove)}},_touchMove:function(h){h.preventDefault()},_touchEnd:function(){c.listenForScroll=true},_endScroll:function(){if(c.listenForScroll){var h=parseInt(b.getComputedStyle(c.scroller).height,10);if((c.scroller.scrollTop+h)===h){c.scroller.scrollTop=1;c.listenForScroll=false}else{if(c.scroller.scrollTop+h===c.scroller.scrollHeight){c.scroller.scrollTop=c.scroller.scrollTop-1}}}else{c.listenForScroll=false}}},g=function(h){d(function(){c=h;e.listen()})};this.on=function(){d(function(){e.noListen();e.listen()})};this.off=function(){d(e.noListen)};g(f)};if((typeof module!=="undefined")&&module.exports){module.exports=a}if(typeof ender==="undefined"){this.AppScroll=a}if((typeof define==="function")&&define.amd){define("AppScroll",[],function(){return a})}}).call(this,window);