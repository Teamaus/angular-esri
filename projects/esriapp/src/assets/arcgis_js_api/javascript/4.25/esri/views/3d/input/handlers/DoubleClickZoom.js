// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../core/screenUtils ../../state/controllers/global/ZoomStepController ../../state/controllers/local/ZoomStepController ../../../input/InputHandler ../../../input/handlers/support".split(" "),function(f,h,k,l,m,d,n){d=function(g){function e(c,b){var a=g.call(this,!0)||this;a._view=c;a.registerIncoming("double-click",b,p=>a._handleDoubleClick(p));return a}h._inheritsLoose(e,g);e.prototype._handleDoubleClick=function(c){const b=c.data;
if(n.eventMatchesPointerAction(b,"primary")){const a=this._view.state.isGlobal?new l.ZoomStepController({view:this._view,mode:"animation"}):new m.ZoomStepController({view:this._view,mode:"animation"});this._view.state.switchCameraController(a);a.zoomStep(Math.log(.5)/Math.log(.6),k.createScreenPointArray(b.x,b.y));c.stopPropagation()}};return e}(d.InputHandler);f.DoubleClickZoom=d;Object.defineProperties(f,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});