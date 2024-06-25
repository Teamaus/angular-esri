// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../../../../chunks/_rollupPluginBabelHelpers ../../../../../chunks/tslib.es6 ../../../../../core/Handles ../../../../../core/maybe ../../../../../core/reactiveUtils ../../../../../core/accessorSupport/decorators/property ../../../../../core/arrayUtils ../../../../../core/accessorSupport/ensureType ../../../../../core/accessorSupport/decorators/subclass ../../../../../layers/graphics/hydratedFeatures ../../../analysis/support/measurementUtils ../../editingTools/dragEventPipeline3D ./AreaMeasurement3DView ../support/PickRequest ../../../../interactive/AnalysisToolBase ../../../../interactive/dragEventPipeline ../../../../support/screenUtils".split(" "),
function(p,f,A,k,q,h,d,H,B,r,t,u,C,D,E,F,v){d=function(w){function l(a){a=w.call(this,a)||this;a._handles=new A;a.polygonState="initial";a.analysisViewData=null;return a}p._inheritsLoose(l,w);var c=l.prototype;c.initialize=function(){const {view:a,analysisViewData:e,manipulators:b,visible:g}=this;this.measurementView=new C({view:a,analysisViewData:e,toolState:this,manipulators:b,visible:g});this._setupManipulators();this._handles.add(q.watch(()=>this.state,m=>{"measured"===m&&this.finishToolCreation()},
q.syncAndInitial))};c.destroy=function(){this.measurementView.destroy();this._set("measurementView",null);this._handles=k.destroyMaybe(this._handles)};c.finishMeasurement=function(){const {path:a}=this.analysisViewData;3>a.numVertices?(a.clear(),this.polygonState="initial"):(a.close(),this.polygonState="measured");this.analysisViewData.cursorPoint=null};c.onShow=function(){this.measurementView.show()};c.onHide=function(){this.measurementView.hide()};c.onInputEvent=function(a){switch(a.type){case "immediate-double-click":this._handleImmediateDoubleClick(a);
break;case "immediate-click":this._handleImmediateClick(a);break;case "pointer-move":this._handlePointerMove(a);break;case "drag":this._handleDrag(a);break;case "key-down":this._handleKeyDown(a)}};c._setupManipulators=function(){const a=b=>b.events.on("grab-changed",()=>{this.analysisViewData.validMeasurement&&(this.polygonState=this.manipulators.some(g=>g.manipulator.grabbing)?"editing":"measured")}),e=b=>{this._handles.add([F.createManipulatorDragEventPipeline(b,(g,m,G)=>{const x=u.hideManipulatorWhileDragging(g),
n=k.unwrap(g.metadata);m.next(x).next(u.screenToMap3D(this.view)).next(y=>{g.location=y.mapEnd;this.analysisViewData.path.setVertexPosition(n,r.clonePoint(y.mapEnd))});const z=r.clonePoint(this.analysisViewData.path.getVertexPositionAsPoint(n));G.next(x).next(()=>{this.analysisViewData.path.setVertexPosition(n,z);g.location=z})}),a(b)],b)};this.manipulators.forEach(({manipulator:b})=>{e(b)});this._handles.add([this.manipulators.on("after-add",({item:{manipulator:b}})=>{e(b)}),this.manipulators.on("after-remove",
({item:{manipulator:b}})=>this._handles.remove(b))])};c._handleImmediateDoubleClick=function(a){t.isPrimaryPointerAction(a)&&("drawing"===this.polygonState&&this.finishMeasurement(),a.stopPropagation())};c._handleDrag=function(a){"editing"===this.polygonState&&a.stopPropagation()};c._handleImmediateClick=function(a){if(t.isPrimaryPointerAction(a)){var e=v.createScreenPointFromEvent(a);if(this.active)switch(this.polygonState){case "initial":if(this._addVertexAt(e)){this.analysisViewData.cursorPoint=
null;this.polygonState="drawing";a.stopPropagation();return}break;case "drawing":const b=this.measurementView.vertexHandleAt(e,a.pointerType);if(k.isNone(b)){if(this._addVertexAt(e)){this.analysisViewData.cursorPoint=null;a.stopPropagation();return}}else 0===b.index&&(this.finishMeasurement(),a.stopPropagation())}"mouse"===a.pointerType&&this._hoverAt(e)}};c._handlePointerMove=function(a){"mouse"===a.pointerType&&(a=v.createScreenPointFromEvent(a),this._hoverAt(a))};c._handleKeyDown=function(a){"Enter"===
a.key&&"drawing"===this.polygonState&&(this.finishMeasurement(),a.stopPropagation())};c._hoverAt=function(a){!this.active||"initial"!==this.polygonState&&"drawing"!==this.polygonState?this.analysisViewData.cursorPoint=null:(a=this._pick(a),k.isSome(a)&&(this.analysisViewData.cursorPoint=a.mapPoint))};c._addVertexAt=function(a){a=this._pick(a);return k.isSome(a)&&k.isSome(a.mapPoint)?(this.analysisViewData.path.add(a.mapPoint),!0):!1};c._pick=function(a){a=new D.PickRequest(a);return this.measurementView.pick(a)};
p._createClass(l,[{key:"state",get:function(){return 0===this.analysisViewData.path.numVertices?"ready":this.analysisViewData.validMeasurement&&"editing"!==this.polygonState?"measured":"measuring"}},{key:"cursor",get:function(){return"ready"===this.state||"drawing"===this.polygonState?"crosshair":null}}]);return l}(E.AnalysisToolBase);f.__decorate([h.property({readOnly:!0})],d.prototype,"state",null);f.__decorate([h.property()],d.prototype,"polygonState",void 0);f.__decorate([h.property({readOnly:!0})],
d.prototype,"cursor",null);f.__decorate([h.property()],d.prototype,"measurementView",void 0);f.__decorate([h.property({constructOnly:!0})],d.prototype,"view",void 0);f.__decorate([h.property()],d.prototype,"analysis",void 0);f.__decorate([h.property({constructOnly:!0})],d.prototype,"analysisViewData",void 0);return d=f.__decorate([B.subclass("esri.views.3d.interactive.measurementTools.areaMeasurement3D.AreaMeasurement3DTool")],d)});