// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/Accessor ../core/Collection ../core/HandleOwner ../core/handleUtils ../core/has ../core/Logger ../core/maybe ../core/reactiveUtils ../core/accessorSupport/decorators/property ../core/arrayUtils ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/subclass ./3d/support/TextureCollection ./input/InputManager ./input/ViewEvents ./interactive/interactiveToolUtils ./interactive/interfaces ./interactive/ToolViewManagerManipulatorState".split(" "),
function(p,g,t,q,e,u,C,v,d,m,h,D,E,w,x,y,z,n,A,B){e=function(r){function k(a){var b=r.call(this,a)||this;b._manipulatorState=new B.ToolViewManagerManipulatorState;b.tools=new q;b.cursor=null;b._forEachTool=c=>{for(const l of b.tools.items)if(c(l))break};return b}p._inheritsLoose(k,r);var f=k.prototype;f.initialize=function(){this.handles.add([this.view.on(z.eventTypes,a=>{this._handleInputEvent(a)},y.ViewEventPriorities.TOOL),...n.getToolCollectionHandles(this.tools),this.tools.on("before-add",({item:a})=>
{this._updateToolEditableFlag(a)}),this.tools.on("before-remove",({item:a})=>{this._manipulatorState.clearPointers(a,this._manipulatorStateEventArgs);this._updateCursor()}),this.tools.on("change",()=>{this._refreshToolWatchers()})])};f.destroy=function(){this.detach();this.handles.removeAll()};f.attach=function(){"3d"===this.view.type?(this._set("textures",new x.TextureCollection(this.view._stage,this.view.resourceController.scheduler)),this.handles.add([m.watch(()=>{const {state:a}=this.view;return"camera"in
a&&a.camera},()=>{this._forEachManipulator(a=>{if(null!=a.onViewChange)a.onViewChange()})}),this.view.elevationProvider.on("elevation-change",a=>{this._forEachManipulator(b=>{if(null!=b.onElevationChange)b.onElevationChange(a)})}),u.makeHandle(()=>this._set("textures",d.destroyMaybe(this.textures)))],"attached")):this.handles.add(m.watch(()=>this.view.extent,()=>{this._forEachManipulator(a=>{if(null!=a.onViewChange)a.onViewChange()})}))};f.detach=function(){d.isSome(this.activeTool)&&(this.activeTool=
null);this.tools.removeAll();this.handles.remove("attached")};f._forEachManipulator=function(a){this._forEachTool(b=>{b.manipulators&&b.manipulators.forEach(({manipulator:c})=>a(c,b))})};f._handleInputEvent=function(a){let b=!1;const c={...a,stopPropagation:()=>{b=!0;a.stopPropagation()}};d.isSome(this.activeTool)?this.activeTool.handleInputEvent&&this.activeTool.handleInputEvent(c):this._forEachTool(l=>{!b&&l.visible&&l.handleInputEvent(c)});!b&&"key-down"===a.type&&"Escape"===a.key&&this.activeTool&&
(a.stopPropagation(),this.activeTool=null);this._manipulatorState.handleInputEvent(c,this._manipulatorStateEventArgs);!b&&d.isSome(this.activeTool)&&this.activeTool.handleInputEventAfter(c);this._manipulatorState.handleHoverEvent(c,this._forEachTool);this._updateCursor()};f._refreshToolWatchers=function(){this.handles.remove("tools");this._forEachTool(a=>{if(a instanceof t){const b=m.watch(()=>[a.cursor,a.visible,a.editable],()=>{n.areToolManipulatorsEditable(a)||this._manipulatorState.clearPointers(a,
this._manipulatorStateEventArgs);this._updateCursor()});this.handles.add(b,"tools")}a.manipulators&&this.handles.add([a.manipulators.on("after-remove",b=>{this._manipulatorState.clearPointers(a,this._manipulatorStateEventArgs,!0,b.item.manipulator)}),a.manipulators.on("change",()=>{this._manipulatorState.updateHoveredStateFromKnownPointers(this._forEachTool);this._updateCursor()})],"tools")});this._manipulatorState.updateHoveredStateFromKnownPointers(this._forEachTool);this._updateCursor()};f._updateToolEditableFlag=
function(a){a.setEditableFlag(A.EditableFlag.MANAGER,d.isNone(this.activeTool)||a===this.activeTool)};f._updateCursor=function(){let a=this._manipulatorState.cursor;d.isNone(a)&&this._forEachTool(b=>d.isSome(b.cursor)&&b.visible?(a=b.cursor,!0):!1);this._get("cursor")!==a&&this._set("cursor",a)};f._removeIncompleteTools=function(a){this.tools.filter(b=>(d.isNone(a)||b!==a)&&!b.created&&b.removeIncompleteOnCancel).forEach(b=>{this.tools.remove(b)})};p._createClass(k,[{key:"_manipulatorStateEventArgs",
get:function(){return{forEachTool:this._forEachTool,activeTool:this.activeTool,setActiveTool:a=>{this.activeTool=a},view:this.view}}},{key:"activeTool",set:function(a){if(d.isSome(a)&&!this.view.ready)v.getLogger(this.declaredClass).error("Cannot set active tool while view is not ready.");else if(a!==this.activeTool){var b=this.activeTool;this._set("activeTool",a);d.isSome(b)&&b.deactivate();d.isSome(a)&&a.activate();this._removeIncompleteTools(a);for(const c of this.tools)this._updateToolEditableFlag(c),
a=n.areToolManipulatorsEditable(c),!d.isNone(this.activeTool)&&a||this._manipulatorState.clearPointers(c,this._manipulatorStateEventArgs,!a);this._updateCursor()}}},{key:"updating",get:function(){return this.updatingHandles.updating||this.tools.some(a=>a.updating)||(this.textures?.updating??!1)}}]);return k}(e.HandleOwner);g.__decorate([h.property({constructOnly:!0,nonNullable:!0})],e.prototype,"view",void 0);g.__decorate([h.property({readOnly:!0,nonNullable:!0})],e.prototype,"textures",void 0);g.__decorate([h.property({value:null})],
e.prototype,"activeTool",null);g.__decorate([h.property({readOnly:!0,type:q})],e.prototype,"tools",void 0);g.__decorate([h.property({readOnly:!0})],e.prototype,"cursor",void 0);g.__decorate([h.property({readOnly:!0})],e.prototype,"updating",null);return e=g.__decorate([w.subclass("esri.views.ToolViewManager")],e)});