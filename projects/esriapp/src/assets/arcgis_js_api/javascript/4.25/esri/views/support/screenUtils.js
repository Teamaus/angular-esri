// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports","../../core/has","../../core/screenUtils"],function(b,g,d){function e(a){return d.createScreenPoint(a.x,a.y)}function f(a,c){a=(a instanceof HTMLElement?a:a.surface).getBoundingClientRect();return d.createScreenPoint(c.clientX-a.left,c.clientY-a.top)}b.createScreenPointArrayFromEvent=function(a){return d.createScreenPointArray(a.x,a.y)};b.createScreenPointFromEvent=e;b.createScreenPointFromNativeEvent=f;b.createScreenPointFromSupportedEvent=function(a,c){return c instanceof Event?
f(a,c):e(c)};b.isSupportedScreenPointEvent=function(a){if(a instanceof Event)return!0;if("object"===typeof a&&"type"in a)switch(a.type){case "click":case "double-click":case "pointer-down":case "pointer-drag":case "pointer-enter":case "pointer-leave":case "pointer-up":case "pointer-move":case "immediate-click":case "immediate-double-click":case "hold":case "drag":case "mouse-wheel":return!0}return!1};Object.defineProperties(b,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});