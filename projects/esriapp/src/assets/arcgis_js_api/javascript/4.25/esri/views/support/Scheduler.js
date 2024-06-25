// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../core/Handles ../../core/Logger ../../core/maybe ../../core/PerformanceSampler ../../core/PooledArray ../../core/promiseUtils ../../core/reactiveUtils ../../core/time ../../core/accessorSupport/tracking/ObservableValue ../../layers/support/PromiseQueue ./debugFlags ./RenderState".split(" "),function(d,t,I,J,C,u,v,w,x,k,D,K,L,l){function y(e){return z.has(e)?z.get(e):"number"===typeof e?e:1}d.TaskPriority=void 0;(function(e){e.RESOURCE_CONTROLLER=
"schedule";e.SLIDE="slide";e.STREAM_DATA_LOADER="stream loader";e.ELEVATION_QUERY="elevation query";e.TERRAIN_SURFACE="terrain";e.SURFACE_GEOMETRY_UPDATES="surface geometry updates";e.GRAPHICS_CORE="Graphics3D";e.I3S_CONTROLLER="I3S";e.POINT_CLOUD_LAYER="point cloud";e.FEATURE_TILE_FETCHER="feature fetcher";e.OVERLAY="overlay";e.STAGE="stage";e.GRAPHICS_DECONFLICTOR="graphics deconflictor";e.FILTER_VISIBILITY="Graphics3D filter visibility";e.SCALE_VISIBILITY="Graphics3D scale visibility";e.FRUSTUM_VISIBILITY=
"Graphics3D frustum visibility";e.POINT_OF_INTEREST_FREQUENT="POI frequent";e.POINT_OF_INTEREST_INFREQUENT="POI infrequent";e.LABELER="labeler";e.FEATURE_QUERY_ENGINE="feature query";e.FEATURE_TILE_TREE="feature tile tree";e.FEATURE_TILE_TREE_ACTIVE="fast feature tile tree";e.ELEVATION_ALIGNMENT="elevation alignment";e.TEXT_TEXTURE_ATLAS="text texture atlas";e.TEXTURE_UNLOAD="texture unload";e.LINE_OF_SIGHT_TOOL="line of sight tool";e.LINE_OF_SIGHT_TOOL_INTERACTIVE="interactive line of sight tool";
e.ELEVATION_PROFILE="elevation profile";e.SNAPPING="snapping";e.SHADOW_ACCUMULATOR="shadow accumulator";e.CLOUDS_GENERATOR="cloud generator";e[e.TEST_PRIO=1]="TEST_PRIO"})(d.TaskPriority||(d.TaskPriority={}));const z=new Map([[d.TaskPriority.RESOURCE_CONTROLLER,0],[d.TaskPriority.SLIDE,0],[d.TaskPriority.STREAM_DATA_LOADER,0],[d.TaskPriority.ELEVATION_QUERY,0],[d.TaskPriority.TERRAIN_SURFACE,1],[d.TaskPriority.SURFACE_GEOMETRY_UPDATES,1],[d.TaskPriority.GRAPHICS_CORE,2],[d.TaskPriority.I3S_CONTROLLER,
2],[d.TaskPriority.POINT_CLOUD_LAYER,2],[d.TaskPriority.FEATURE_TILE_FETCHER,2],[d.TaskPriority.OVERLAY,4],[d.TaskPriority.STAGE,4],[d.TaskPriority.GRAPHICS_DECONFLICTOR,4],[d.TaskPriority.FILTER_VISIBILITY,4],[d.TaskPriority.SCALE_VISIBILITY,4],[d.TaskPriority.FRUSTUM_VISIBILITY,4],[d.TaskPriority.CLOUDS_GENERATOR,4],[d.TaskPriority.POINT_OF_INTEREST_FREQUENT,6],[d.TaskPriority.POINT_OF_INTEREST_INFREQUENT,30],[d.TaskPriority.LABELER,8],[d.TaskPriority.FEATURE_QUERY_ENGINE,8],[d.TaskPriority.FEATURE_TILE_TREE,
16],[d.TaskPriority.FEATURE_TILE_TREE_ACTIVE,0],[d.TaskPriority.ELEVATION_ALIGNMENT,12],[d.TaskPriority.TEXT_TEXTURE_ATLAS,12],[d.TaskPriority.TEXTURE_UNLOAD,12],[d.TaskPriority.LINE_OF_SIGHT_TOOL,16],[d.TaskPriority.LINE_OF_SIGHT_TOOL_INTERACTIVE,0],[d.TaskPriority.SNAPPING,0],[d.TaskPriority.SHADOW_ACCUMULATOR,30]]),E=k.Milliseconds(6.5),F=k.Milliseconds(1),M=k.Milliseconds(30),G=k.Milliseconds(1E3/30),H=k.Milliseconds(100);var q;(function(e){let n=function(){function g(){this._updating=new D.ObservableValue(!0);
this._microTaskQueued=!1;this._frameNumber=0;this.performanceInfo={total:new u("total"),tasks:new Map};this._frameTaskTimes=new Map;this._budget=new m;this._state=l.RenderState.INTERACTING;this._tasks=new v;this._runQueue=new v;this._load=0;this._idleStateCallbacks=new v;this._idleUpdatesStartFired=!1;this._maxReschedule=32;this._debug=this._forceTask=!1;this._debugHandle=x.watch(()=>L.SCHEDULER_LOG_SLOW_TASKS,b=>this._debug=b,x.initial);for(const b of Object.keys(d.TaskPriority))this.performanceInfo.tasks.set(d.TaskPriority[b],
new u(d.TaskPriority[b]));const a=this;this._test={FRAME_SAFETY_BUDGET:E,INTERACTING_BUDGET:G,IDLE_BUDGET:H,get availableBudget(){return a._budget.budget},usedBudget:0,getBudget:()=>a._budget,setBudget:b=>a._budget=b,updateTask:b=>this._updateTask(b),getState:b=>this._getState(b),getRuntime:b=>this._getRuntime(b),frameTaskTimes:this._frameTaskTimes,resetRuntimes:()=>this._resetRuntimes(),getRunning:()=>this._getRunning()}}var f=g.prototype;f.destroy=function(){this._tasks.toArray().forEach(a=>a.remove());
this._tasks.clear();C.removeMaybe(this._debugHandle);this._microTaskQueued=!1;this._updating.set(!1)};f.activate=function(){this._budget.done||this._microTaskQueued||(this._microTaskQueued=!0,queueMicrotask(()=>{this._microTaskQueued&&(this._microTaskQueued=!1,this._budget.done||(this._maxReschedule=32,this._schedule(),this.frame()))}))};f.registerTask=function(a,b){const c=y(a);b=new p(this,a,b,c);this._tasks.push(b);this.performanceInfo.tasks.has(a)||this.performanceInfo.tasks.set(a,new u(a));return b};
f.registerIdleStateCallbacks=function(a,b){const c={idleBegin:a,idleEnd:b};this._idleStateCallbacks.push(c);this.state===l.RenderState.IDLE&&this._idleUpdatesStartFired&&c.idleBegin();const h=this;return{remove:()=>this._removeIdleStateCallbacks(c),set idleBegin(r){h._idleUpdatesStartFired&&(c.idleEnd(),h._state===l.RenderState.IDLE&&r());c.idleBegin=r},set idleEnd(r){c.idleEnd=r}}};f.updateBudget=function(a){this._test.usedBudget=0;++this._frameNumber;let b=E,c=a.frameDuration,h=F;switch(this.state){case l.RenderState.IDLE:b=
k.Milliseconds(0);c=k.Milliseconds(Math.max(H,a.frameDuration));h=M;break;case l.RenderState.INTERACTING:c=k.Milliseconds(Math.max(G,a.frameDuration))}c=k.Milliseconds(c-a.elapsedFrameTime-b);if(this.state!==l.RenderState.IDLE&&c<F&&!this._forceTask)return this._forceTask=!0,!1;c=k.Milliseconds(Math.max(c,h));this._budget.reset(c,this.state);this._maxReschedule=32;this._updateLoad();return this._schedule()};f.frame=function(){this._microTaskQueued=this._forceTask=!1;switch(this.state){case l.RenderState.IDLE:this._idleUpdatesStartFired||
(this._idleUpdatesStartFired=!0,this._idleStateCallbacks.forAll(a=>a.idleBegin()));this._runIdle();break;case l.RenderState.INTERACTING:this._runInteracting();break;default:this._runAnimating()}this._test.usedBudget=this._budget.elapsed};f.stopFrame=function(){this._budget.reset(k.Milliseconds(0),this._state);this._budget.madeProgress()};f._removeIdleStateCallbacks=function(a){this._idleUpdatesStartFired&&a.idleEnd();this._idleStateCallbacks.removeUnordered(a)};f.removeTask=function(a){this._tasks.removeUnordered(a);
this._runQueue.removeUnordered(a)};f._updateTask=function(a){this._tasks.forAll(b=>{b.name===a&&b.setPriority(a)})};f._getState=function(a){if(this._runQueue.some(c=>c.name===a))return d.TaskState.SCHEDULED;let b=d.TaskState.IDLE;this._tasks.forAll(c=>{c.name===a&&c.needsUpdate&&(1>=c.schedulePriority?b=d.TaskState.READY:b!==d.TaskState.READY&&(b=d.TaskState.WAITING))});return b};f._getRuntime=function(a){let b=0;this._tasks.forAll(c=>{c.name===a&&(b+=c.runtime)});return b};f._resetRuntimes=function(){this._tasks.forAll(a=>
a.runtime=0)};f._getRunning=function(){const a=new Map;this._tasks.forAll(c=>{c.needsUpdate&&a.set(c.name,(a.get(c.name)||0)+1)});if(0===a.size)return null;let b="";a.forEach((c,h)=>{b=1<c?b+` ${c}x ${h}`:b+` ${h}`});return b};f._runIdle=function(){this._run()};f._runInteracting=function(){this._run()};f._runAnimating=function(){this._run()};f._updateLoad=function(){const a=this._tasks.reduce((b,c)=>c.needsUpdate?++b:b,0);this._load=.9*this._load+a*(1-.9)};f._schedule=function(){if(0>=this._maxReschedule)return!1;
this._runQueue.filterInPlace(a=>{if(a.needsUpdate)return!0;a.schedulePriority=a.basePriority;return!1});for(this._tasks.forAll(a=>{0===a.basePriority&&a.needsUpdate&&!this._runQueue.includes(a)&&this._runQueue.unshift(a)});0===this._runQueue.length;){let a=!1;this._tasks.forAll(b=>{if(b.needsUpdate&&0!==b.schedulePriority&&0!==b.basePriority&&(!b.task.runOncePerFrame||b.lastFrameRun!==this._frameNumber))switch(a=!0,b.schedulePriority){case 1:b.schedulePriority=0;this._runQueue.push(b);break;default:--b.schedulePriority}});
if(!a)return this._updating.set(!1),!1;--this._maxReschedule}this._updating.set(!0);return!0};f._run=function(){const a=this._budget.now();this._startFrameTaskTimes();do for(;0<this._runQueue.length;){var b=this._budget.now();const c=this._runQueue.pop();this._budget.resetProgress();try{c.task.runTask(this._budget)}catch(h){J.getLogger("esri.views.support.Scheduler").error(`Exception in task "${c.name}"`,h)}c.schedulePriority=c.basePriority;c.lastFrameRun=this._frameNumber;b=this._budget.now()-b;
c.runtime+=b;this._frameTaskTimes.set(c.priority,this._frameTaskTimes.get(c.priority)+b);this._debug&&this._budget.elapsed>2*this._budget.budget&&console.log("Task",c.name,"used",this._budget.elapsed,"of max",this._budget.budget,"ms");if(0>=this._budget.remaining){this._updating.set(this._tasks.some(h=>h.needsUpdate));this._recordFrameTaskTimes(this._budget.now()-a);return}}while(this._schedule());this._updating.set(this._tasks.some(c=>c.needsUpdate));this._recordFrameTaskTimes(this._budget.now()-
a)};f._startFrameTaskTimes=function(){for(const a of Object.keys(d.TaskPriority))this._frameTaskTimes.set(d.TaskPriority[a],0)};f._recordFrameTaskTimes=function(a){this._frameTaskTimes.forEach((b,c)=>this.performanceInfo.tasks.get(c).record(b));this.performanceInfo.total.record(a)};t._createClass(g,[{key:"updating",get:function(){return this._updating.get()},set:function(a){this._updating.set(a)}},{key:"load",get:function(){return this._load}},{key:"state",get:function(){return this._state},set:function(a){this._state!==
a&&(this._state=a,this.state!==l.RenderState.IDLE&&this._idleUpdatesStartFired&&(this._idleUpdatesStartFired=!1,this._idleStateCallbacks.forAll(b=>b.idleEnd())))}},{key:"test",get:function(){return this._test}}]);return g}();e.Scheduler=n;let p=function(){function g(a,b,c,h){this._scheduler=a;this.name=b;this._basePriority=h;this.runtime=this.lastFrameRun=0;this._queue=new K.PromiseQueue;this._handles=new I;this.schedulePriority=this._basePriority;this._task=new D.ObservableValue(C.isSome(c)?c:this._queue);
this._handles.add(x.when(()=>this.task.running,()=>a.activate()))}var f=g.prototype;f.remove=function(){this.processQueue(A);this._scheduler.removeTask(this);this.schedule=B.schedule;this.reschedule=B.reschedule;this._handles.destroy()};f.setPriority=function(a){this.name=a;a=y(a);if(0===this._basePriority||0!==this.schedulePriority)this.schedulePriority=a;this._basePriority=a};f.schedule=function(a,b,c){return this._queue.push(a,b,c)};f.reschedule=function(a,b,c){return this._queue.unshift(a,b,c)};
f.processQueue=function(a){this._queue.runTask(a)};t._createClass(g,[{key:"task",get:function(){return this._task.get()}},{key:"updating",get:function(){return this._queue.running}},{key:"basePriority",get:function(){return this._basePriority}},{key:"priority",get:function(){return this.name},set:function(a){this.setPriority(a)}},{key:"needsUpdate",get:function(){return this.updating||this.task.running}}]);return g}(),m=function(){function g(){this._begin="undefined"!==typeof performance?performance.now():
0;this._budget=0;this._state=l.RenderState.IDLE;this._done=!1;this._enabled=!0}var f=g.prototype;f.run=function(a){if(this.done)return!1;!0===a()&&this.madeProgress();return!0};f.madeProgress=function(){this._done=this.elapsed>=this._budget&&this._enabled};f.reset=function(a,b){this._begin=this.now();this._budget=a;this._state=b;this._done=!1};f.now=function(){return performance.now()};f.resetProgress=function(){this._done=!1};t._createClass(g,[{key:"done",get:function(){return this._done}},{key:"budget",
get:function(){return this._budget}},{key:"state",get:function(){return this._state}},{key:"enabled",get:function(){return this._enabled},set:function(a){this._enabled=a}},{key:"remaining",get:function(){return Math.max(this._budget-this.elapsed,0)}},{key:"elapsed",get:function(){return performance.now()-this._begin}},{key:"hasProgressed",get:function(){return this._done}}]);return g}();e.Budget=m})(q||(q={}));d.TaskState=void 0;(function(e){e.SCHEDULED="s";e.READY="r";e.WAITING="w";e.IDLE="i"})(d.TaskState||
(d.TaskState={}));const A=(()=>{const e=new q.Budget;e.enabled=!1;return e})(),B=new (function(){function e(){}var n=e.prototype;n.remove=function(){};n.processQueue=function(){};n.schedule=function(p,m,g){try{if(w.isAborted(m)){const f=w.createAbortError();return g?Promise.resolve(g(f)):Promise.reject(f)}return w.when(p(A))}catch(f){return Promise.reject(f)}};n.reschedule=function(p,m,g){return this.schedule(p,m,g)};return e}());d.ImmediateTask=B;d.getTaskPriority=y;d.newScheduler=function(){return new q.Scheduler};
d.noBudget=A;d.taskPriorities=z;Object.defineProperties(d,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});