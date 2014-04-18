![jQuery Plugin: Hex](https://raw.githubusercontent.com/motorlatitude/Hex/master/header.png)


Getting Started
---------------------

You can check out a live preview here:
<a href="http://codepen.io/motorlatitude/pen/BJIfk">Live Preview</a>

jQuery is required for the plugin to work:
```html
<script type="text/javascript" src="http://code.jquery.com/jquery-latest.min.js"></script>
```
The element in which the hex effect is ment to be run needs to have the <code>position: relative</code> or <code>position: absolute</code> set in the css otherwise the hexagons will be inaccurately placed.
<br><br>
The plugin can be added to your file like usual:
```html
<script type="text/javascript" src="lib/hex.js"></script>
```

Basic Usage
----------------------

To use the effect with its default settings:
```javascript
$(".element").hex();
```
This will reveal the element with the animation running from right to left and using hexagons with the default background color of: <code>#eee</code>


Options
----------------------

All of the available options are listed below:
<br>
<ul>
  <li>show</li>
  <li>direction</li>
  <li>background</li>
  <li>duration</li>
  <li>delay</li>
  <li>callback</li>
</ul>


### Option: Show

Values:
```javascript
default: true
accepted: BOOL
```
The show option allows you to specifiy if you want to show or hide the element. The following code shows how to hide an element:
```javascript
$(".element").hex({show:false});
```
and to show it:
```javascript
$(".element").hex({show:true});
```

### Option: Direction

Values:
```javascript
default: "right"
accepted: "right", "left", "up", "down", "random", "center"
```
The direction option allows you to specify in which direction the hexagons will come in or go out. For example:
```javascript
$(".element").hex({direction: "random"});
```
This will remove/add the hexagons randomly until the whole object is covered or revealed completely.


### Option: Background

Values:
```javascript
default: "#eee"
accepted: "css color"
```
The background option allows you to change the color of the hexagons, the default color is <code>#eee</code>. For example:
```javascript
$(".element").hex({background: "#005da6"});
```

### Option: Duration

Values:
```javascript
default: 10
accepted: int > 0
```
The duration option allows you to set how long it takes for hexagons to start vanishing. This value is randomly generated with respect to the location of the hexagon. By changing the duraiton value will be multiply the delay. So decreasing the duration value will cause the delay to be less than the hexagons will vanish earlier. For example:
```javascript
$(".element").hex({duration: 5});
```
This will result in the hexagons vanishing in half the time.
    

### Option: Delay

Values:
```javascript
default: 0
accepted: int > -1
```
The amount of time in ms until the animation will run. For example
```javascript
$(".element").hex({delay: 1000});
```
This will result that the animation will start 1s after the code above is executed.


### Option: Callback

Values:

```javascript
default: function(){}
accepted: function(){ /*your function here*/ }
```
The callback option lets you run a function once the animation has finished. For Example:
```javascript
$(".element").hex({callback: function(){console.log('done');}});
```
This will result that once the animation is complete, <code>done</code> will be printed in the console.

## Usage Example
      
This is the animation used on loading the docs.html file.
<br>
```javascript
$(document).ready(function(){
    show_hex();
});

function show_hex(){
    $(".hex_ani").hex({show: true, direction: "left", background: "#0769ad", duration: 5, delay: 0, callback: function(){setTimeout("hide_hex()",5000);}});
}

function hide_hex(){
  $(".hex_ani").hex({show: false, direction: "left", background: "#0769ad", duration: 5, delay: 0, callback: function(){setTimeout("show_hex()",5000);}});
}
```
