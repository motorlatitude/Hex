jQuery Plugin: Hex
=====================

Getting Started
---------------------

jQuery is required for the plugin to work:<br><br>
<code>http://code.jquery.com/jquery-latest.min.js</code>
<br><br>
The element in which the hex effect is ment to be run needs to have the <code>position: relative</code> or <code>position: absolute</code> set in the css.
<br><br>
The plugin can be added to your file like usual:<br><br>
<code>&lt;script type="text/javascript" src="lib/hex.js"&gt;&lt;/script&gt;</code>


Basic Usage
----------------------

To use the effect with its derfault settings:
<br><br>
<code>$(".element").hex();</code>
<br><br>
This will reveal the element with the animation running from right to left and using hexagons with the default background <code>#eee</code>


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
</ul>


### Option: Show

Values:
<br><br>
<code>default: true </code><br><br><code>accepted: BOOL</code>
<br><br>
The show option allows you to specifiy if you want to show or hide the element. The following code shows how to hide an element:
<br><br>
<code>$(".element").hex({show:false});</code>
<br><br>
and to show it:
<br><br>
<code>$(".element").hex({show:true});</code>


### Option: Direction

Values:
<br><br>
<code>default: "right" </code><br><br><code>accepted: "right", "left", "up", "down", "random", "center"</code>
<br><br>
The direction option allows you to specify in which direction the hexagons will come in or go out. For example:
<br><br>
<code>$(".element").hex({direction: "random"});</code>
<br><br>
This will remove/add the hexagons randomly until the whole object is covered or revealed completely.


### Option: Background

Values:
<br><br>
<code>default: "#eee" </code><br><br><code>accepted: "css color"</code>
<br><br>
The background option allows you to change the color of the hexagons, the default color is <code>#eee</code>. For example:
<br><br>
<code>$(".element").hex({background: "#005da6"});</code>


### Option: Duration

Values:
<br><br>
<code>default: 10 </code><br><br><code>accepted: int &gt; 0</code>
<br><br>
The duration option allows you to set how long it takes for hexagons to start vanishing. This value is randomly generated with respect to the location of the hexagon. By changing the duraiton value will be multiply the delay. So decreasing the duration value will cause the delay to be less than the hexagons will vanish earlier. For example
<br><br>
<code>$(".element").hex({duration: 5});</code>
<br><br>
This will result in the hexagons vanishing in half the time.
    

### Option: Delay

Values:
<br><br>
<code>default: 0 </code><br><br><code>accepted: int &gt; -1</code>
<br><br>
The amount of time in ms until the animation will run. For example
<br><br>
<code>$(".element").hex({delay: 1000});</code>
<br><br>
This will result that the animation will start 1s after the code above is executed.


## Option: Example
      
This is the animation used on loading this doc.
<br><br>
<code>
$(document).ready(function(){<br> 
&nbsp;&nbsp;&nbsp;&nbsp;show_hex();<br>
&nbsp;});<br>
<br><br>
&nbsp;function show_hex(){<br>
&nbsp;&nbsp;&nbsp;&nbsp;$(".hex_ani").hex({show: true, direction: "left", background: "#0769ad", duration: 5, delay: 5000});
&nbsp;&nbsp;&nbsp;&nbsp;setTimeout("hide_hex()",10000);
&nbsp;}
<br><br>
&nbsp;function hide_hex(){<br>
&nbsp;&nbsp;&nbsp;&nbsp;$(".hex_ani").hex({show: false, direction: "left", background: "#0769ad", duration: 5, delay: 5000});
&nbsp;&nbsp;&nbsp;&nbsp;setTimeout("show_hex()",10000);
&nbsp;}
</code>