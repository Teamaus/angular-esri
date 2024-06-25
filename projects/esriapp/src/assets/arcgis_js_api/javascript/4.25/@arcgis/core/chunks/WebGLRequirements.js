/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{_ as t}from"./tslib.es6.js";import{i as e,d as i,r as n,a}from"./maybe.js";import{eachAlwaysValues as s,c as r}from"../core/promiseUtils.js";import"./Logger.js";import{s as o}from"./ensureType.js";import"../core/lang.js";import h from"../core/Error.js";import{h as l}from"./object.js";import{subclass as u}from"../core/accessorSupport/decorators/subclass.js";import{g as c}from"./vec3.js";import{e as d,I as p}from"./InputManager.js";import{addFrameTask as m,M as _}from"../core/scheduling.js";import g from"../views/input/gamepad/GamepadInputDevice.js";import{b as v}from"./screenUtils2.js";import{c as f}from"./screenUtils.js";import{c as b}from"./mathUtils.js";import{g as w}from"./capabilities2.js";import{C as y}from"./context-util.js";const D=i=>{let n=class extends i{async fetchPopupFeatures(t,e){await this.when();const{location:i,queryArea:n,layerViewsAndGraphics:a,clientOnlyGraphics:r}=await this._prepareFetchPopupFeatures(t,e),o=Promise.resolve(r),h=this._queryLayerPopupFeatures(n,a,e),l=h.map((t=>t.promise));return{location:i,clientOnlyGraphics:r,allGraphicsPromise:s([o,...l]).then((t=>Array.from(new Set(t.flat())))),promisesPerLayerView:h}}_queryLayerPopupFeatures(t,i,n){return i.map((({layerView:i,graphics:a})=>{const s={clientGraphics:a,event:e(n)?n.event:null,signal:e(n)?n.signal:null,defaultPopupTemplateEnabled:!!e(n)&&!!n.defaultPopupTemplateEnabled},r=i.fetchPopupFeatures(t,s);return{layerView:i,promise:r}}))}_isValidPopupGraphic(t,i){return t&&!!t.getEffectivePopupTemplate(e(i)&&i.defaultPopupTemplateEnabled)}async _prepareFetchPopupFeatures(t,e){const{clientGraphics:i,queryArea:n,location:a}=await this._popupHitTestGraphics(t,e),s=this._getFetchPopupLayerViews(),{layerViewsAndGraphics:r,clientOnlyGraphics:o}=this._graphicsPerFetchPopupLayerView(i,s);return{clientOnlyGraphics:o,layerViewsAndGraphics:r,queryArea:n,location:a}}async _popupHitTestGraphics(t,e){const{results:i,mapPoint:n}=await this.popupHitTest(t),a=i.filter((t=>"graphic"===t.type&&this._isValidPopupGraphic(t.graphic,e))),s=a.length?a[0].mapPoint:null;return{clientGraphics:a.map((t=>t.graphic)),queryArea:n,location:n||s}}_getFetchPopupLayerViews(){const t=[];return this.allLayerViews.forEach((e=>{this._isValidPopupLayerView(e)&&t.push(e)})),e(this.graphicsView)&&this._isValidPopupLayerView(this.graphicsView)&&t.push(this.graphicsView),t.reverse()}_isValidPopupLayerView(t){return e(t)&&(!("layer"in t)||!t.suspended)&&"fetchPopupFeatures"in t}_graphicsPerFetchPopupLayerView(t,e){const i=[],n=new Map,a=e.map((t=>{const e=[];return"layer"in t?n.set(t.layer,e):n.set(t.graphics,e),{layerView:t,graphics:e}}));for(const e of t){const t=n.get(e.layer)||n.get(e.sourceLayer)||null;t?t.push(e):i.push(e)}return{layerViewsAndGraphics:a,clientOnlyGraphics:i}}};return n=t([u("esri.views.PopupView")],n),n};function P(t,e){switch(e){case"primary":return"touch"===t.pointerType||0===t.button;case"secondary":return"touch"!==t.pointerType&&2===t.button;case"tertiary":return"touch"!==t.pointerType&&1===t.button}}function x(t,e){if("touch"===t.pointerType)return!1;switch(e){case"primary":return 0===t.button;case"secondary":return 2===t.button;case"tertiary":return 1===t.button}}class k{constructor(t){this._callbacks=t,this._currentCount=0,this._callbacks.condition||(this._callbacks.condition=()=>!0)}handle(t){const e=t.data,i=e.pointers.size;switch(e.action){case"start":this._currentCount=i,this._emitStart(t);break;case"added":this._emitEnd(this._previousEvent),this._currentCount=i,this._emitStart(t);break;case"update":this._emitUpdate(t);break;case"removed":this._startEvent&&this._emitEnd(this._previousEvent),this._currentCount=i,this._emitStart(t);break;case"end":this._emitEnd(t),this._currentCount=0}this._previousEvent=t}_emitStart(t){this._startEvent=t,this._callbacks.condition?.(this._currentCount,t)&&this._callbacks.start(this._currentCount,t,this._startEvent)}_emitUpdate(t){this._callbacks.condition?.(this._currentCount,t)&&this._callbacks.update(this._currentCount,t,this._startEvent)}_emitEnd(t){this._callbacks.condition?.(this._currentCount,t)&&this._callbacks.end(this._currentCount,t,this._startEvent),this._startEvent=null}}function E(t){let e=t*t;return t<0&&(e*=-1),e}function T(t){return t.translation[0]=0,t.translation[1]=0,t.translation[2]=0,t.heading=0,t.tilt=0,t}function M(t,e,i){const n=i,a=t.state,s=t.device,r="forward-down"===e.tiltDirection?1:-1;return"standard"===s.deviceType?(n.translation[0]=E(a.axes[0]),n.translation[1]=E(a.axes[1]),n.translation[2]=E(a.buttons[7])-E(a.buttons[6]),n.heading=E(a.axes[2]),n.tilt=E(a.axes[3])):"spacemouse"===s.deviceType&&(n.translation[0]=1.2*E(a.axes[0]),n.translation[1]=1.2*E(a.axes[1]),n.translation[2]=2*-E(a.axes[2]),n.heading=1.2*E(a.axes[5]),n.tilt=1.2*E(a.axes[3])),n.tilt*=r,c(n.translation,n.translation,1),n}function C(t,e){const i=e;return i.translation[0]=t[1]-t[0],i.translation[1]=t[3]-t[2],i.translation[2]=t[4]-t[5],i.heading=t[7]-t[6],i.tilt=t[8]-t[9],i.zoom=t[10]-t[11],i}function S(t){return 0===t.translation[0]&&0===t.translation[1]&&0===t.translation[2]&&0===t.heading&&0===t.tilt&&0===t.zoom}function I(t){const e=t.native;return e?{buttons:e.buttons.map((t=>t.pressed?t.value?t.value:1:0)),axes:e.axes.map((e=>function(t,e){const i=Math.abs(t);return i<e?0:Math.sign(t)*(i-e)/(1-e)}(e,t.axisThreshold)))}:{buttons:[],axes:[]}}class L{constructor(t,e){this._element=t,this._input=e,this._hasEventListeners=!1,this._onConnectGamepad=t=>{this._connectGamepad(t.gamepad)},this._onDisconnectGamepad=t=>{const e=t.gamepad,i=e.index,n=this._inputDevices[i];n&&(this._emitGamepadEvent(e,I(n),!1),this._inputDevices.splice(i,1),this._latestUpdate.splice(i,1),this._input.gamepad.devices.remove(n),this.ensurePollingState())},this._frameTask=null,this._latestUpdate=new Array,this._inputDevices=new Array,this._callback=null;const i="getGamepads"in window.navigator,n=window.isSecureContext;this.supported=i&&n,this.supported&&(this._forEachGamepad((t=>this._connectGamepad(t))),window.addEventListener("gamepadconnected",this._onConnectGamepad),window.addEventListener("gamepaddisconnected",this._onDisconnectGamepad),this.ensurePollingState())}destroy(){this.hasEventListeners=!1,this.supported&&(window.removeEventListener("gamepadconnected",this._onConnectGamepad),window.removeEventListener("gamepaddisconnected",this._onDisconnectGamepad))}set hasEventListeners(t){this._hasEventListeners!==t&&(this._hasEventListeners=t,this.ensurePollingState())}get _eventsEnabled(){return this.supported&&this._inputDevices.length>0&&this._hasEventListeners}set onEvent(t){this._callback=t}_connectGamepad(t){const e=new g(t);"unknown"!==e.deviceType&&(this._inputDevices[t.index]=e,this._input.gamepad.devices.add(e)),this.ensurePollingState()}ensurePollingState(){this._eventsEnabled?this._startPolling():this._stopPolling()}_startPolling(){null==this._frameTask&&(this._frameTask=m({update:()=>this._readGamepadState()}))}_stopPolling(){null!=this._frameTask&&(this._frameTask.remove(),this._frameTask=null,this._latestUpdate=new Array)}_readGamepadState(){const t=document.hasFocus(),e=this._element.contains(document.activeElement),i="document"===this._input.gamepad.enabledFocusMode&&!t||"view"===this._input.gamepad.enabledFocusMode&&!e;this._forEachGamepad((t=>{const e=this._inputDevices[t.index];if(!e)return;const n=this._latestUpdate[t.index],a=I(e),s=i||function(t){for(let e=0;e<t.axes.length;e++)if(0!==t.axes[e])return!1;for(let e=0;e<t.buttons.length;e++)if(0!==t.buttons[e])return!1;return!0}(a);if(n){if(n.timestamp===t.timestamp)return;if(!n.active&&s)return;if(function(t,e){if(t.axes.length!==e.axes.length)return!1;if(t.buttons.length!==e.buttons.length)return!1;for(let i=0;i<t.axes.length;i++)if(t.axes[i]!==e.axes[i])return!1;for(let i=0;i<t.buttons.length;i++)if(t.buttons[i]!==e.buttons[i])return!1;return!0}(n.state,a))return}this._emitGamepadEvent(t,a,!s)}))}_forEachGamepad(t){const e=window.navigator.getGamepads();for(let i=0;i<e.length;i++){const n=e[i];this._validate(n)&&t(n)}}_emitGamepadEvent(t,e,i){const n=this._latestUpdate[t.index],a=n&&n.active;if(!a&&!i)return;const s=!a&&i?"start":a&&i?"update":"end";this._latestUpdate[t.index]={timestamp:t.timestamp,state:e,active:i},this._callback&&this._callback({device:this._inputDevices[t.index],state:e,action:s})}_validate(t){if(!t)return!1;if(!t.connected)return!1;for(let e=0;e<t.axes.length;e++)if(isNaN(t.axes[e]))return!1;return!0}}const G=l("trident"),A=l("edge"),U=l("chrome"),j=l("ff"),q=l("safari"),V="esri-view-surface--touch-none",H="esri-view-surface--touch-pan";class F{constructor(t,e){this._input=e,this._active={},this._activePointerCaptures=new Set,this._keyDownState=new Set,this._eventId=1,this._browserTouchPanningEnabled=!1,this._element=t,t.getAttribute("tabindex")||t.setAttribute("tabindex","0"),this._eventHandlers={"key-down":this._handleKey,"key-up":this._handleKey,"pointer-down":this._handlePointer,"pointer-move":this._handlePointerPreventDefault,"pointer-up":this._handlePointerPreventDefault,"pointer-enter":this._handlePointer,"pointer-leave":this._handlePointer,"pointer-cancel":this._handlePointer,"mouse-wheel":this._handleMouseWheel,"pointer-capture-lost":this._handlePointerCaptureLost},this._updateTouchAction(),this._element.addEventListener("keydown",this._preventAltKeyDefault),this._gamepadSource=new L(t,this._input),this._gamepadSource.onEvent=t=>this._callback("gamepad",t)}destroy(){this._callback=null,this.activeEvents=null,this._activePointerCaptures.forEach((t=>{this._releasePointerCaptureSafe(t)})),this._gamepadSource=i(this._gamepadSource),this._activePointerCaptures=null,this._removeTouchAction(),this._element.removeEventListener("keydown",this._preventAltKeyDefault)}get browserTouchPanningEnabled(){return this._browserTouchPanningEnabled}set browserTouchPanningEnabled(t){this._browserTouchPanningEnabled=t,this._updateTouchAction(),this._updateTouchEventHandling()}set onEventReceived(t){this._callback=t}set activeEvents(t){for(const e in this._active)if(!t||!t.has(e)){const t=this._active[e];this._element.removeEventListener(B[e],t),delete this._active[e]}t&&t.forEach((t=>{if(!this._active[t]&&B[t]){const e=(this._eventHandlers[t]||this._handleDefault).bind(this,t);this._element.addEventListener(B[t],e),this._active[t]=e}})),this._gamepadSource.hasEventListeners=t&&t.has("gamepad")}setPointerCapture(t,e){e?(this._element.setPointerCapture(t.pointerId),this._activePointerCaptures.add(t.pointerId)):(this._releasePointerCaptureSafe(t.pointerId),this._activePointerCaptures.delete(t.pointerId))}_updateTouchAction(){this._element.classList.remove(this._browserTouchPanningEnabled?V:H),this._element.classList.add(this._browserTouchPanningEnabled?H:V)}_updateTouchEventHandling(){this._browserTouchPanningEnabled?this._element.addEventListener("touchmove",this._preventMultiTouchPanning):this._element.removeEventListener("touchmove",this._preventMultiTouchPanning)}_removeTouchAction(){this._element.classList.remove(V),this._element.classList.remove(H),this._element.removeEventListener("touchmove",this._preventMultiTouchPanning)}_releasePointerCaptureSafe(t){try{if(this._element.hasPointerCapture&&!this._element.hasPointerCapture(t))return;this._element.releasePointerCapture(t)}catch(t){}}_updateNormalizedPointerLikeEvent(t,e){const i=v(this._element,t);return F.test.disableSubpixelCoordinates&&(i.x=Math.round(i.x),i.y=Math.round(i.y)),e.x=i.x,e.y=i.y,e}_handleKey(t,e){const i=d(e);i&&"key-up"===t&&this._keyDownState.delete(i);const n={native:e,key:i,repeat:i&&this._keyDownState.has(i)};i&&"key-down"===t&&this._keyDownState.add(n.key),this._callback(t,n)}_handlePointer(t,e){const i=this._updateNormalizedPointerLikeEvent(e,{native:e,x:0,y:0,pointerType:e.pointerType,button:e.button,buttons:e.buttons,eventId:this._eventId++});this._callback(t,i)}_handlePointerPreventDefault(t,e){const i=this._updateNormalizedPointerLikeEvent(e,{native:e,x:0,y:0,pointerType:e.pointerType,button:e.button,buttons:e.buttons,eventId:this._eventId++});e.preventDefault(),this._callback(t,i)}_handleMouseWheel(t,e){let i=e.deltaY;switch(e.deltaMode){case 0:(G||A)&&(i=i/document.documentElement.clientHeight*600);break;case 1:i*=30;break;case 2:i*=900}G||A?i*=.7:U||q?i*=.6:j&&(i*=1.375);const n=Math.abs(i);if(n>100){const t=.02;i=i/n*200/(1+Math.exp(-t*(n-100)))}const a=this._updateNormalizedPointerLikeEvent(e,{native:e,x:0,y:0,deltaY:i});this._callback(t,a)}_handlePointerCaptureLost(t,e){this._activePointerCaptures.delete(e.pointerId),this._handleDefault(t,e)}_handleDefault(t,e){const i={native:e};e.preventDefault(),this._callback(t,i)}_preventAltKeyDefault(t){"Alt"===t.key&&t.preventDefault()}_preventMultiTouchPanning(t){t.touches.length>1&&t.preventDefault()}}F.test={disableSubpixelCoordinates:!1};const B={"key-down":"keydown","key-up":"keyup","pointer-down":"pointerdown","pointer-up":"pointerup","pointer-move":"pointermove","mouse-wheel":"wheel","pointer-capture-got":"gotpointercapture","pointer-capture-lost":"lostpointercapture","context-menu":"contextmenu","pointer-enter":"pointerenter","pointer-leave":"pointerleave","pointer-cancel":"pointercancel",focus:"focus",blur:"blur"};class z extends p{constructor(){super(!0),this.registerIncoming("context-menu",(t=>{t.data.native.preventDefault()}))}}function O(t,e){return Math.abs(e.x-t.x)+Math.abs(e.y-t.y)}function W(t){const{native:e}=t,{pointerId:i,button:n,pointerType:a}=e;return"mouse"===a?`${i}:${n}`:`${a}`}const R={maximumDoubleClickDelay:250,maximumDoubleClickDistance:10,maximumDoubleTouchDelay:350,maximumDoubleTouchDistance:35};class K extends p{constructor(t=R.maximumDoubleClickDelay,e=R.maximumDoubleClickDistance,i=R.maximumDoubleTouchDelay,n=R.maximumDoubleTouchDistance,a=r){super(!1),this._maximumDoubleClickDelay=t,this._maximumDoubleClickDistance=e,this._maximumDoubleTouchDelay=i,this._maximumDoubleTouchDistance=n,this._clock=a,this._pointerState=new Map,this._click=this.registerOutgoing("click"),this._doubleClick=this.registerOutgoing("double-click"),this.registerIncoming("immediate-click",this._handleImmediateClick.bind(this)),this.registerIncoming("pointer-down",this._handlePointerDown.bind(this))}onUninstall(){this._pointerState.forEach((t=>t.doubleClickTimer=n(t.doubleClickTimer)))}get hasPendingInputs(){return o(this._pointerState,(t=>null!=t.doubleClickTimer))}_clearDoubleClickTimer(t,e){const i=this._pointerState.get(t);i&&(i.doubleClickTimer=n(i.doubleClickTimer),e&&this._click.emit(i.event.data,void 0,i.event.modifiers),this._pointerState.delete(t),this.refreshHasPendingInputs())}_doubleClickTimeoutExceeded(t){const e=this._pointerState.get(t);1===e.pointerDownCount&&this._click.emit(e.event.data,void 0,e.event.modifiers),e.doubleClickTimer=null,this._pointerState.delete(t),this.refreshHasPendingInputs()}_getPointerId(t){const{pointerId:e,pointerType:i,button:n}=t.native;return"mouse"===i?`${e}:${n}`:`${i}`}_handleImmediateClick(t){const e=t.data,{pointerType:i}=e.native,n=this._getPointerId(e);if(!this._pointerState.has(n))return void this._startClick(t);const a=this._pointerState.get(n),{data:s,modifiers:r}=a.event,o="touch"===i?this._maximumDoubleTouchDistance:this._maximumDoubleClickDistance;O(s,e)>o?(this._clearDoubleClickTimer(n,!0),this._startClick(t)):(this._clearDoubleClickTimer(n,!1),2===a.pointerDownCount&&this._doubleClick.emit(s,void 0,r))}_handlePointerDown(t){const e=W(t.data),i=this._pointerState.get(e);i&&(i.pointerDownCount+=1)}_startClick(t){const{data:e}=t,{native:{pointerType:i}}=e,n=W(e),a="touch"===i?this._maximumDoubleTouchDelay:this._maximumDoubleClickDelay,s=this._clock.setTimeout((()=>this._doubleClickTimeoutExceeded(n)),a);this._pointerState.set(n,{event:t,doubleClickTimer:s,pointerDownCount:1}),this.refreshHasPendingInputs()}}class N extends p{constructor(t){super(!1),this._navigationTouch=t,this._startStateModifiers=new Set,this._activePointerMap=new Map,this._isDragging=!1,this._isCurrentDragSuppressed=!1,this._drag=this.registerOutgoing("drag"),this.registerIncoming("pointer-drag",this._handlePointerDrag.bind(this)),this.registerIncoming("pointer-up",this._handlePointerUpAndPointerLost.bind(this)),this.registerIncoming("pointer-capture-lost",this._handlePointerUpAndPointerLost.bind(this)),this.registerIncoming("pointer-cancel",this._handlePointerUpAndPointerLost.bind(this))}_createPayload(t,e,i,n){return{action:t,pointerType:this._pointerType,button:this._mouseButton,buttons:e.buttons,timestamp:n,pointers:J(this._activePointerMap),pointer:e,angle:i.angle,radius:i.radius,center:i.center}}_addPointer(t){const e=t.native.pointerId,i=Y(this._activePointerMap).angle,n={event:t,initialAngle:0,lastAngle:0};this._activePointerMap.set(e,n);const a=Q(n,$(this._activePointerMap));n.initialAngle=a,n.lastAngle=a,this._updatePointerAngles(i)}_updatePointer(t){if(t&&null==t.x&&null==t.y)return;const e=t.native.pointerId,i=this._activePointerMap.get(e);i?i.event=t:this._addPointer(t)}_removePointer(t){const e=Y(this._activePointerMap).angle;this._activePointerMap.delete(t),this._updatePointerAngles(e)}_updatePointerAngles(t){const e=Y(this._activePointerMap);this._activePointerMap.forEach((i=>{i.initialAngle=Q(i,e)-t,i.lastAngle=Q(i,e)-t}))}_emitEvent(t,e,i){const n=Y(this._activePointerMap);this._drag.emit(this._createPayload(t,e,n,i),void 0,this._startStateModifiers)}_handlePointerUpAndPointerLost(t){const e=t.data.native.pointerId,i=_(t.timestamp);this._activePointerMap.get(e)&&(1===this._activePointerMap.size?(this._updatePointer(t.data),!this._isCurrentDragSuppressed&&this._emitEvent("end",t.data,i),this._isDragging=!1,this._isCurrentDragSuppressed=!1,this._removePointer(e)):(this._removePointer(e),this._emitEvent("removed",t.data,_(t.timestamp))))}_handlePointerDrag(t){const e=t.data,i=e.currentEvent,n=_(t.timestamp);switch(e.action){case"start":case"update":this._isDragging?this._activePointerMap.has(i.native.pointerId)?(this._updatePointer(i),!this._isCurrentDragSuppressed&&this._emitEvent("update",i,n)):(this._addPointer(i),this._emitEvent("added",i,n),this._isCurrentDragSuppressed=this._isSuppressed):(this._updatePointer(i),this._pointerType=t.data.startEvent.pointerType,this._mouseButton=t.data.startEvent.button,this._startStateModifiers=t.modifiers,this._isDragging=!0,this._isCurrentDragSuppressed=this._isSuppressed,!this._isCurrentDragSuppressed&&this._emitEvent("start",i,n))}}get _isSuppressed(){return!!this._navigationTouch&&!this._navigationTouch.browserTouchPanEnabled&&"touch"===this._pointerType&&1===this._activePointerMap.size}}function $(t){const e=[];return t.forEach((t=>{e.push(f(t.event.x,t.event.y))})),function(t,e){if(e?(e.radius=0,e.center.x=0,e.center.y=0):e={radius:0,center:f()},0===t.length)return e;if(1===t.length)return e.center.x=t[0].x,e.center.y=t[0].y,e;if(2===t.length){const[i,n]=t,[a,s]=[n.x-i.x,n.y-i.y];return e.radius=Math.sqrt(a*a+s*s)/2,e.center.x=(i.x+n.x)/2,e.center.y=(i.y+n.y)/2,e}let i=0,n=0;for(let e=0;e<t.length;e++)i+=t[e].x,n+=t[e].y;i/=t.length,n/=t.length;const a=t.map((t=>t.x-i)),s=t.map((t=>t.y-n));let r=0,o=0,h=0,l=0,u=0,c=0,d=0;for(let t=0;t<a.length;t++){const e=a[t],i=s[t],n=e*e,p=i*i;r+=n,o+=p,h+=e*i,l+=n*e,u+=p*i,c+=e*p,d+=i*n}const p=.5*(l+c),m=.5*(u+d),_=r*o-h*h,g=(p*o-m*h)/_,v=(r*m-h*p)/_,b=f(g+i,v+n);return{radius:Math.sqrt(g*g+v*v+(r+o)/t.length),center:b}}(e)}function Y(t){const e=$(t);let i=0;return t.forEach((t=>{let n=Q(t,e),a=n-t.lastAngle;for(;a>Math.PI;)a-=2*Math.PI;for(;a<-Math.PI;)a+=2*Math.PI;n=t.lastAngle+a,t.lastAngle=n;const s=n-t.initialAngle;i+=s})),i/=t.size||1,{angle:i,radius:e.radius,center:e.center}}function J(t){const e=new Map;return t.forEach(((t,i)=>e.set(i,t.event))),e}function Q(t,e){const i=t.event,n=i.x-e.center.x,a=i.y-e.center.y;return Math.atan2(a,n)}var X;!function(t){t[t.Left=0]="Left",t[t.Middle=1]="Middle",t[t.Right=2]="Right",t[t.Back=3]="Back",t[t.Forward=4]="Forward",t[t.Undefined=-1]="Undefined"}(X||(X={}));class Z extends p{constructor(t=R.maximumDoubleClickDelay,e=R.maximumDoubleClickDistance,i=R.maximumDoubleTouchDelay,n=R.maximumDoubleTouchDistance,a=r){super(!1),this._maximumDoubleClickDelay=t,this._maximumDoubleClickDistance=e,this._maximumDoubleTouchDelay=i,this._maximumDoubleTouchDistance=n,this._clock=a,this._pointerState=new Map,this._immediateDoubleClick=this.registerOutgoing("immediate-double-click"),this.registerIncoming("pointer-down",this._handlePointerDown.bind(this)),this.registerIncoming("pointer-up",this._handlePointerUp.bind(this))}onUninstall(){this._pointerState.forEach((t=>{t.immediateDoubleClick&&t.immediateDoubleClick.timeoutHandle.remove()})),super.onUninstall()}_handlePointerDown(t){const e=t.data,i=W(e);if(!this._pointerState.has(i)){const t={downButton:e.native.button,immediateDoubleClick:null};this._pointerState.set(i,t),this.startCapturingPointer(e.native)}}_handlePointerUp(t){const e=t.data,i=W(e),n=this._pointerState.get(i);if(n&&n.downButton===e.native.button){const i=n.immediateDoubleClick;if(i){i.timeoutHandle.remove();const a="touch"===t.data.native.pointerType?this._maximumDoubleTouchDistance:this._maximumDoubleClickDistance;O(i,t.data)>a?this._startImmediateDoubleClick(t,n):(this._immediateDoubleClick.emit(t.data,void 0,i.modifiers),this._removeState(e))}else this._startImmediateDoubleClick(t,n)}}_startImmediateDoubleClick(t,e){const i="touch"===t.data.native.pointerType?this._maximumDoubleTouchDelay:this._maximumDoubleClickDelay;e.immediateDoubleClick={x:t.data.x,y:t.data.y,modifiers:t.modifiers,timeoutHandle:this._clock.setTimeout((()=>this._removeState(t.data)),i)}}_removeState(t){const e=W(t);this._pointerState.delete(e),this.stopCapturingPointer(t.native),this.refreshHasPendingInputs()}}class tt extends p{constructor(t=300,e=1.5,i=6,n=6,a=500,s=r){super(!1),this._maximumClickDelay=t,this._movementUntilMouseDrag=e,this._movementUntilPenDrag=i,this._movementUntilTouchDrag=n,this._holdDelay=a,this._clock=s,this._pointerState=new Map,this._pointerDrag=this.registerOutgoing("pointer-drag"),this._immediateClick=this.registerOutgoing("immediate-click"),this._pointerHold=this.registerOutgoing("hold"),this.registerIncoming("pointer-down",this._handlePointerDown.bind(this)),this.registerIncoming("pointer-up",(t=>{this._handlePointerLoss(t,"pointer-up")})),this.registerIncoming("pointer-capture-lost",(t=>{this._handlePointerLoss(t,"pointer-capture-lost")})),this.registerIncoming("pointer-cancel",(t=>{this._handlePointerLoss(t,"pointer-cancel")})),this._moveHandle=this.registerIncoming("pointer-move",this._handlePointerMove.bind(this)),this._moveHandle.pause()}onUninstall(){this._pointerState.forEach((t=>{t.holdTimeout=n(t.holdTimeout)})),super.onUninstall()}_handlePointerDown(t){const e=t.data,i=e.native.pointerId;let n=null;0===this._pointerState.size&&(n=this._clock.setTimeout((()=>{const e=this._pointerState.get(i);if(e){if(!e.isDragging){const i=e.previousEvent;this._pointerHold.emit(i,void 0,t.modifiers),e.holdEmitted=!0}e.holdTimeout=null}}),this._holdDelay));const a={startEvent:e,previousEvent:e,startTimestamp:t.timestamp,isDragging:!1,downButton:e.native.button,holdTimeout:n,modifiers:new Set};this._pointerState.set(i,a),this.startCapturingPointer(e.native),this._moveHandle.resume(),this._pointerState.size>1&&this._startDragging(t)}_createPointerDragData(t,e,i){return{action:t,startEvent:e.startEvent,previousEvent:e.previousEvent,currentEvent:i}}_handlePointerMove(t){const e=t.data,i=e.native.pointerId,n=this._pointerState.get(i);n&&(n.isDragging?this._pointerDrag.emit(this._createPointerDragData("update",n,e),void 0,n.modifiers):function(t,e){const i=e.x-t.x,n=e.y-t.y;return Math.sqrt(i*i+n*n)}(e,n.startEvent)>this._getDragThreshold(e.native.pointerType)&&this._startDragging(t),n.previousEvent=e)}_getDragThreshold(t){switch(t){case"touch":return this._movementUntilTouchDrag;case"pen":return this._movementUntilPenDrag;default:return this._movementUntilMouseDrag}}_startDragging(t){const e=t.data,i=e.native.pointerId;this._pointerState.forEach((n=>{null!=n.holdTimeout&&(n.holdTimeout.remove(),n.holdTimeout=null),n.isDragging||(n.modifiers=t.modifiers,n.isDragging=!0,i===n.startEvent.native.pointerId?this._pointerDrag.emit(this._createPointerDragData("start",n,e)):this._pointerDrag.emit(this._createPointerDragData("start",n,n.previousEvent),t.timestamp))}))}_handlePointerLoss(t,e){const i=t.data,n=i.native.pointerId,a=this._pointerState.get(n);a&&(null!=a.holdTimeout&&(a.holdTimeout.remove(),a.holdTimeout=null),a.isDragging?this._pointerDrag.emit(this._createPointerDragData("end",a,"pointer-up"===e?i:a.previousEvent),void 0,a.modifiers):"pointer-up"===e&&a.downButton===i.native.button&&t.timestamp-a.startTimestamp<=this._maximumClickDelay&&!a.holdEmitted&&this._immediateClick.emit(i),this._pointerState.delete(n),this.stopCapturingPointer(i.native),0===this._pointerState.size&&this._moveHandle.pause())}}function et(t,e){const i=function(t,e){const{format:i,quality:n,rotation:a,disableDecorations:s}=t||{},r=ct(t,e.padding),o=function(t,e){const i={x:0,y:0,width:e.width,height:e.height};if(t&&t.area){null!=t.area.x&&(i.x=Math.floor(t.area.x)),null!=t.area.y&&(i.y=Math.floor(t.area.y));const n=null!=t.area.width?Math.floor(t.area.width):null,a=null!=t.area.height?Math.floor(t.area.height):null;if(i.width=e.width-i.x,i.height=e.height-i.y,null!=n&&null!=a)i.width=Math.min(i.width,n),i.height=Math.min(i.height,a);else if(null==n&&null!=a){const t=Math.min(i.width,n);i.height=t/i.width*i.height,i.width=t}else if(null!=n&&null==a){const t=Math.min(i.height,a);i.width=t/i.height*i.width,i.height=t}}return function(t,e){const i=Math.floor(Math.max(t.x,0)),n=Math.floor(Math.max(t.y,0)),a={x:i,y:n,width:Math.floor(Math.min(t.width,e.width-i)),height:Math.floor(Math.min(t.height,e.height-n))},s=a.width/a.height,r=t.width/t.height;if(r===s)return a;if(r>s){const t=Math.floor(a.width/r),e=a.height-t;return{x:a.x,y:Math.floor(a.y+e/2),width:a.width,height:t}}const o=Math.floor(a.height*r),h=a.width-o;return{x:Math.floor(a.x+h/2),y:a.y,width:o,height:a.height}}(function(t,e){if(!e||null==e.width||null==e.height)return t;const i=e.width/e.height,n=t.width/t.height;if(n===i)return t;if(n<i){const e=Math.floor(t.height*i);return t.x-=(e-t.width)/2,t.width=e,t}const a=Math.floor(t.width/i);return t.y-=(a-t.height)/2,t.height=a,t}(i,t),e)}(t,{width:e.width-r.left-r.right,height:e.height-r.top-r.bottom}),{width:h,height:l}=function(t,e){if(!t)return e;const i=t.width,n=t.height;if(null!=i&&null!=n)return{width:Math.floor(i),height:Math.floor(n)};if(null==i&&null==n)return e;const a=e.width/e.height;return null==n?{width:Math.floor(i),height:Math.floor(i/a)}:{width:Math.floor(n*a),height:Math.floor(n)}}(t,o),u=dt(i),c=_t[u];return{format:u,quality:b(null!=n?n:c,0,100),area:o,width:h,height:l,rotation:a,disableDecorations:!!s,ignoreBackground:!(!t||!t.ignoreBackground),ignorePadding:!(!t||!t.ignorePadding)}}(t,e),n=i.area,a=i.width/n.width,s=ct(i,e.padding),r=s.left+s.right,o=s.top+s.bottom,h=e.width-r,l=e.height-o,u=Math.floor(h*a+r),c=Math.floor(l*a+o),d=t&&t.layers?t.layers:[],p=i.ignoreBackground,m=i.ignorePadding;return{framebufferWidth:u,framebufferHeight:c,region:{x:Math.floor(n.x*a)+s.left,y:Math.floor(n.y*a)+s.top,width:i.width,height:i.height},format:i.format,quality:i.quality,rotation:i.rotation,pixelRatio:a,layers:d,disableDecorations:i.disableDecorations,ignoreBackground:p,ignorePadding:m,objectAndLayerIdColor:!1}}function it(t,e,i){const{ctx:n,canvas:a}=at(t,i),s=n.getImageData(0,0,t.width,t.height),r=function(t,e){const i=pt[e.format],n=e.quality/100;return t.toDataURL(i,n)}(a,e);return st(a),{dataUrl:r,data:s}}function nt(t,e){const{ctx:i,canvas:n}=at(t,e),a=i.getImageData(0,0,t.width,t.height);return st(n),a}function at(t,e){const i=(a(rt)&&(rt=document.createElement("canvas")),rt);e.premultipliedAlpha&&function(t){const e=t.data,i=e.length;for(let t=0;t<i;t+=4){const i=e[t+3];if(255!==i&&i>0){const n=255/i;e[t+0]=e[t+0]*n,e[t+1]=e[t+1]*n,e[t+2]=e[t+2]*n}}}(t),i.width=t.width,i.height=t.height;const n=i.getContext("2d");return n.putImageData(t,0,0),e.flipY&&function(t){t.save(),t.globalCompositeOperation="copy",t.scale(1,-1),t.translate(0,-t.canvas.height),t.drawImage(t.canvas,0,0),t.restore()}(n),{ctx:n,canvas:i}}function st(t){t.width=0,t.height=0}let rt=null;function ot(t,e){const i=dt(t),n=_t[i];return{format:i,quality:b(null!=e?e:n,0,100)}}function ht(t,e){return e/Math.max(t[0],t[1])}function lt(t,e,i,n=0,a=0,s=t.width-n,r=t.height-a,o=!1){const{data:h}=t,{width:l,height:u,data:c}=e,d=s/l,p=r/u,m=Math.ceil(d/2),_=Math.ceil(p/2),g=t.width;for(let t=0;t<u;t++)for(let e=0;e<l;e++){const s=4*(e+(o?u-t-1:t)*l);let r=0,v=0,f=0,b=0,w=0,y=0;const D=(t+.5)*p;for(let s=Math.floor(t*p);s<(t+1)*p;s++){const t=Math.abs(D-(s+.5))/_,o=(e+.5)*d,l=t*t;for(let t=Math.floor(e*d);t<(e+1)*d;t++){const e=Math.abs(o-(t+.5))/m,u=Math.sqrt(l+e*e);if(u>=1)continue;let c=2*u*u*u-3*u*u+1;const d=4*(n+t+(a+s)*g);y+=c*h[d+3],v+=c,!i&&h[d+3]<255&&(c=c*h[d+3]/255),f+=c*h[d],b+=c*h[d+1],w+=c*h[d+2],r+=c}}c[s]=f/r,c[s+1]=b/r,c[s+2]=w/r,c[s+3]=y/v}return e}function ut(t,e,i){if(!e)return t;const{framebufferWidth:n,framebufferHeight:a,pixelRatio:s,region:r}=t,o=ct(t,i),h=o.left+o.right,l=o.top+o.bottom,u=n-h,c=a-l,d=Math.min(8,Math.min((2048-h)/u,(2048-l)/c));return d<1.5?t:{...t,framebufferWidth:Math.round(u*d)+h,framebufferHeight:Math.round(c*d)+l,pixelRatio:s*d,resample:{region:{x:Math.round((r.x-o.left)*d)+o.left,y:Math.round((r.y-o.top)*d)+o.top,width:Math.round(r.width*d),height:Math.round(r.height*d)},width:n,height:a}}}function ct(t,e){return!e||t&&t.ignorePadding?gt:e}function dt(t){switch(t){case"png":case"jpg":case"jpeg":return t;default:return mt}}const pt={png:"image/png",jpg:"image/jpeg",jpeg:"image/jpeg"},mt="png",_t={png:100,jpg:98,jpeg:98},gt={top:0,right:0,bottom:0,left:0};function vt(t){const e=w(t);if(!e.available)return new h("webgl:required","WebGL is required but not supported.");if("3d"===t&&e.majorPerformanceCaveat)return new h("webgl:major-performance-caveat-detected","Your WebGL implementation doesn't seem to support hardware accelerated rendering. Check your browser settings or if your GPU is in a blocklist.");if(!e.supportsHighPrecisionFragment)return new h("webgl:high-precision-fragment-required","WebGL support for high precision fragment shaders is required but not supported.");if(!e.supportsVertexShaderSamplers)return new h("webgl:vertex-shader-samplers-required","WebGL support for vertex shader samplers is required but not supported.");if(e.type===y.WEBGL1){if(!e.supportsElementIndexUint)return new h("webgl:element-index-uint-required","WebGL support for uint vertex indices is required but not supported.");if(!e.supportsStandardDerivatives)return new h("webgl:standard-derivatives-required","WebGL support for standard derivatives is required but not supported.");if(!e.supportsInstancedArrays)return new h("webgl:instanced-arrays-required","WebGL support for instanced rendering is required but not supported.")}return null}export{F as B,k as D,Z as I,tt as P,K as S,M as a,R as b,N as c,z as d,P as e,D as f,W as g,it as h,S as i,nt as j,ht as k,ot as l,O as m,vt as n,x as o,C as p,lt as q,T as r,ut as s,et as t};
