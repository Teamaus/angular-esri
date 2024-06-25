// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../core/clock ../../../core/MapUtils ../../../core/maybe ../InputHandler ./support".split(" "),function(m,h,t,u,q,n,p){const g={maximumDoubleClickDelay:250,maximumDoubleClickDistance:10,maximumDoubleTouchDelay:350,maximumDoubleTouchDistance:35};n=function(r){function k(a=g.maximumDoubleClickDelay,c=g.maximumDoubleClickDistance,d=g.maximumDoubleTouchDelay,e=g.maximumDoubleTouchDistance,l=t.clock){var b=r.call(this,!1)||this;b._maximumDoubleClickDelay=
a;b._maximumDoubleClickDistance=c;b._maximumDoubleTouchDelay=d;b._maximumDoubleTouchDistance=e;b._clock=l;b._pointerState=new Map;b._click=b.registerOutgoing("click");b._doubleClick=b.registerOutgoing("double-click");b.registerIncoming("immediate-click",b._handleImmediateClick.bind(h._assertThisInitialized(b)));b.registerIncoming("pointer-down",b._handlePointerDown.bind(h._assertThisInitialized(b)));return b}h._inheritsLoose(k,r);var f=k.prototype;f.onUninstall=function(){this._pointerState.forEach(a=>
a.doubleClickTimer=q.removeMaybe(a.doubleClickTimer))};f._clearDoubleClickTimer=function(a,c){const d=this._pointerState.get(a);d&&(d.doubleClickTimer=q.removeMaybe(d.doubleClickTimer),c&&this._click.emit(d.event.data,void 0,d.event.modifiers),this._pointerState.delete(a),this.refreshHasPendingInputs())};f._doubleClickTimeoutExceeded=function(a){const c=this._pointerState.get(a);1===c.pointerDownCount&&this._click.emit(c.event.data,void 0,c.event.modifiers);c.doubleClickTimer=null;this._pointerState.delete(a);
this.refreshHasPendingInputs()};f._getPointerId=function(a){const {pointerId:c,pointerType:d,button:e}=a.native;return"mouse"===d?`${c}:${e}`:`${d}`};f._handleImmediateClick=function(a){const c=a.data;var {pointerType:d}=c.native;const e=this._getPointerId(c);if(this._pointerState.has(e)){var l=this._pointerState.get(e),{data:b,modifiers:v}=l.event;d="touch"===d?this._maximumDoubleTouchDistance:this._maximumDoubleClickDistance;p.manhattanDistance(b,c)>d?(this._clearDoubleClickTimer(e,!0),this._startClick(a)):
(this._clearDoubleClickTimer(e,!1),2===l.pointerDownCount&&this._doubleClick.emit(b,void 0,v))}else this._startClick(a)};f._handlePointerDown=function(a){a=p.getPointerId(a.data);if(a=this._pointerState.get(a))a.pointerDownCount+=1};f._startClick=function(a){var {data:c}=a;const {native:{pointerType:d}}=c,e=p.getPointerId(c);c=this._clock.setTimeout(()=>this._doubleClickTimeoutExceeded(e),"touch"===d?this._maximumDoubleTouchDelay:this._maximumDoubleClickDelay);this._pointerState.set(e,{event:a,doubleClickTimer:c,
pointerDownCount:1});this.refreshHasPendingInputs()};h._createClass(k,[{key:"hasPendingInputs",get:function(){return u.someMap(this._pointerState,a=>null!=a.doubleClickTimer)}}]);return k}(n.InputHandler);m.DefaultParameters=g;m.SingleAndDoubleClick=n;Object.defineProperties(m,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});