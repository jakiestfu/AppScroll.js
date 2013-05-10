AppScroll
=========

<img src="http://i.imgur.com/cn2VQFV.png" height="500">

AppScroll is a tiny JS library that fixes the "website dragging" issue caused on iDevices

# Usage

```javascript
var scroller = new AppScroll({
	toolbar: toolbarElement,
	scroller: contentElement
});
```

# Public Methods

### `on`: Turns on the events
```javascript
scroller.on();
```

### `off`: Turns off the events
```javascript
scroller.off();
```

# ToDo

* Event Delegation
* Auto Sniff Elements (fixed toolbars and scrollable content areas)
