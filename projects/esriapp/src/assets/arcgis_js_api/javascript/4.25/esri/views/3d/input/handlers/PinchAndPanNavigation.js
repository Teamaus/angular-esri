// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../state/controllers/global/PinchAndPanController ../../state/controllers/local/PinchAndPanController ../../../input/InputHandler ../../../input/handlers/support".split(" "),function(g,k,l,m,e,n){e=function(h){function f(a,b,p){var c=h.call(this,!0)||this;c._view=a;c.pointerAction=b;c._lastEndTimestamp=0;c._lastTimestamp=0;c.registerIncoming("drag",p,q=>c._handleDrag(q));return c}k._inheritsLoose(f,h);var d=f.prototype;d._handleDrag=
function(a){if("mouse"!==a.data.pointerType||n.eventMatchesMousePointerAction(a.data,this.pointerAction)){var b=a.timestamp-this._lastEndTimestamp;b=this._momentum&&this._momentum.active&&40>b;switch(a.data.action){case "start":case "update":if(b)break;this._controller&&this._controller.active?2<a.data.timestamp-this._lastTimestamp&&(this._controller.update(a.data),this._lastTimestamp=a.timestamp):this._startController(a);break;case "end":case "removed":this._endController(a,!0);break;case "added":this._endController(a,
!1),this._startController(a)}a.stopPropagation()}};d._endController=function(a,b){this._controller&&this._controller.active&&(this._lastEndTimestamp=a.timestamp,a=this._controller.end(a.data),b&&a&&(this._momentum=a,this._view.state.switchCameraController(this._momentum)));this._controller=null};d._startController=function(a){this._controller=this._createController();this._view.state.switchCameraController(this._controller);this._controller.begin(a.data);this._lastTimestamp=a.timestamp};d._createController=
function(){return this._view.state.isGlobal?new l.PinchAndPanController({view:this._view}):new m.PinchAndPanController({view:this._view})};return f}(e.InputHandler);g.PinchAndPanNavigation=e;Object.defineProperties(g,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});