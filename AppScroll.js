var AppScroll = AppScroll || (function(win, doc){
    
    var cache = {},
        events = {
            touchMove: function(e){
                e.preventDefault();
            },
            touchEnd: function(e){
                cache.listenForScroll = true;
            },
            endScroll: function(e){
                if(cache.listenForScroll){
                    if(cache.scroller.scrollTop === 0){
                        cache.scroller.scrollTop = 1;
                        cache.listenForScroll = false;
                    }
                } else {
                    cache.listenForScroll = false;
                }
            }
        },
        init = function(elements){
            cache = elements;
            
            cache.toolbar.addEventListener('touchmove', events.touchMove);
            
            cache.scroller.addEventListener('touchend', events.touchEnd);
            cache.scroller.addEventListener('scroll', events.endScroll);
            
            events.touchEnd();
            events.endScroll();
        };
    
    return init;
    
})(window, document);
