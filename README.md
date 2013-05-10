AppScroll
=========

<img src="http://i.imgur.com/cn2VQFV.png" height="500">

AppScroll is a wicked small library that helps kill the cases in which a webapp on iDevices will scroll in the following behavior depicted above. It’s concept is simple: Set the scrollTop to 1 if an elements scrollTop is ever at 0, allowing the user to scroll again. All fixed elements have touchmove events canceled as well, but can be allowed via data attributes.

# Usage

```javascript
window.onload = function(){
  
	AppScroll({
		toolbar: document.getElementsByClassName('bar-title')[0],
		scroller: document.getElementsByClassName('content')[0]
	});
	
};
```

# ToDo

* Event Delegation
* Auto Sniff Elements (fixed toolbars and scrollable content areas)
