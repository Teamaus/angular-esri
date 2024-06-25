// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/Accessor ../../../core/Handles ../../../core/maybe ../../../core/reactiveUtils ../../../core/scheduling ../../../core/time ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ./index ./MemoryController ./StreamDataLoader ../../support/Scheduler".split(" "),function(m,n,b,h,v,k,p,w,x,e,C,D,
t,u,y,z,q){h=function(f){function g(){var c=f.apply(this,arguments)||this;c.updating=!1;return c}n._inheritsLoose(g,f);return g}(h);b.__decorate([e.property({readOnly:!0})],h.prototype,"updating",void 0);h=b.__decorate([t.subclass("esri.views.3d.support.ResourceControllerMain")],h);let d=function(f){function g(){var a=f.apply(this,arguments)||this;a._scheduler=null;a._memoryController=null;a._streamDataLoader=null;a._scheduleTask=q.ImmediateTask;a._handles=new v;a._frameTask=null;return a}n._inheritsLoose(g,
f);var c=g.prototype;c.initialize=function(){this._scheduler=q.newScheduler();this._memoryController=y.newMemoryController(this.view);this._streamDataLoader=new z.StreamDataLoader;this._streamDataLoader.setup(u.maxDownloadSlots,u.downloadSlotsPerClient,this._scheduler);this._handles.add([p.watch(()=>this.view.state?.mode,a=>this._scheduler.state=a,p.sync),p.watch(()=>this.view.stationary,()=>this._stationaryChangedHandler())]);this._frameTask=w.addFrameTask({update:a=>this._frame(a)});this._scheduleTask=
this._scheduler.registerTask(q.TaskPriority.RESOURCE_CONTROLLER)};c.destroy=function(){this._handles=k.destroyMaybe(this._handles);this._scheduleTask.remove();this._frameTask=k.removeMaybe(this._frameTask);this._streamDataLoader=k.destroyMaybe(this._streamDataLoader);this._memoryController=k.destroyMaybe(this._memoryController);this._scheduler=k.destroyMaybe(this._scheduler)};c.schedule=function(a,l,r){return this._scheduleTask.schedule(a,l,r)};c.createStreamDataRequester=function(a){const l=this._streamDataLoader;
return{request(r,A,B){return l.request(r,A,a,B)},get busy(){return!l.hasDownloadSlots(a)}}};c._frame=function(a){if(!this.view.suspended){if(this.view.stateManager&&(this.view.stateManager.step(x.secondsFromMilliseconds(a.deltaTime)),!this._scheduler))return;this._scheduler.updateBudget(a)?(this._memoryController.update(),this._scheduler.frame()):this._memoryController.updating&&this._memoryController.update()}};c._stationaryChangedHandler=function(){this.memoryController.resetStableQuality()};n._createClass(g,
[{key:"updating",get:function(){return!!(this._memoryController?.updating||this._streamDataLoader?.updating||this._scheduleTask?.updating)}},{key:"scheduler",get:function(){return this._scheduler}},{key:"memoryController",get:function(){return this._memoryController}},{key:"test",get:function(){return{getQueueStats:a=>this._streamDataLoader.test.loadQueue.getStatsForType(a)}}}]);return g}(h);b.__decorate([e.property({constructOnly:!0})],d.prototype,"view",void 0);b.__decorate([e.property()],d.prototype,
"_scheduler",void 0);b.__decorate([e.property()],d.prototype,"_memoryController",void 0);b.__decorate([e.property()],d.prototype,"_streamDataLoader",void 0);b.__decorate([e.property()],d.prototype,"_scheduleTask",void 0);b.__decorate([e.property({readOnly:!0})],d.prototype,"updating",null);d=b.__decorate([t.subclass("esri.views.3d.support.ResourceControllerImpl")],d);m.INTERACTING_TIMEOUT=100;m.newResourceController=function(f){return new d({view:f})};Object.defineProperties(m,{__esModule:{value:!0},
[Symbol.toStringTag]:{value:"Module"}})});