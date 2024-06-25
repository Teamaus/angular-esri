// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/Accessor ../../../core/Handles ../../../core/has ../../../core/Logger ../../../core/maybe ../../../core/PooledArray ../../../core/Promise ../../../core/promiseUtils ../../../core/reactiveUtils ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../../../geometry/projection ../../../geometry/support/aaBoundingRect ../dehydratedFeatures ../../support/PromiseQueue ../../../views/ViewingMode ../../../views/3d/layers/i3s/I3SFrameTask ../../../views/3d/layers/i3s/I3SIndex ../../../views/3d/layers/i3s/I3SLodHandling ../../../views/3d/layers/i3s/I3SNode ../../../views/3d/layers/i3s/I3SNodeLoader ../../../views/3d/layers/i3s/I3SStreamDataController ../../../views/3d/layers/i3s/I3SUtil ../../../views/3d/layers/i3s/I3SViewportQueries ../../../views/3d/layers/support/I3SLayerView ../../../views/3d/support/extentUtils ../../../views/3d/support/index ../../../views/support/layerViewUtils ../../../views/support/Scheduler".split(" "),
function(H,l,k,M,N,O,e,w,P,x,n,m,ca,da,Q,I,A,R,S,T,U,V,W,t,X,J,B,Y,Z,aa,C,D,ba){function E(p,q){return e.isSome(p)&&p.length===q.length&&p.every(d=>0<=F(q,d.name))}function F(p,q){q=q.toLowerCase();for(let d=0;d<p.length;d++)if(p[d].name.toLowerCase()===q)return d;return-1}const u=O.getLogger("esri.layers.graphics.controllers.I3SOnDemandController");k=function(p){function q(a){a=p.call(this,a)||this;a.screenSizeFactor=0;a.featureTarget=5E4;a.fixedFeatureTarget=!1;a.updating=!0;a.updatingProgress=
1;a.leavesReached=!1;a.scaleVisibilityEnabled=!0;a._featureLOD=1;a._stableFeatureLOD=!1;a._isIdle=!1;a._cameraDirty=!0;a._invisibleDirty=!1;a._newLoadingNodes=new w({deallocator:null});a._loadedNodeScales=new Map;a._modificationsNodeFilteringArray=new w;a._downloadingCount=0;a._loadingNodes=new Map;a._updatingNodes=new Map;a._progressMaxNumNodes=1;a._requiredAttributes=[];a._requiredAttributesDirty=!0;a._updatesDisabled=!1;a.disableIDBCache=!1;a._disableMemCache=!1;a._restartNodeLoading=!1;a._fields=
null;a._attributeStorageInfo=null;a._handles=new M;a._idleQueue=new S.PromiseQueue;a._elevationUpdateNodes=new w({deallocator:null});a._errorCount=0;return a}H._inheritsLoose(q,p);var d=q.prototype;d.initialize=function(){const {layerView:a,layer:b}=this;this._disableMemCache=!a.loadCachedGPUData||!a.addCachedGPUData;this._lodHandling=new W(a);this._defaultGeometrySchema=b.store.defaultGeometrySchema;this.disableIDBCache=N("disable-feature:idb-cache");"fields"in b&&(this._fields=b.fields,this._attributeStorageInfo=
b.attributeStorageInfo);this.addResolvingPromise(Promise.all([b.indexInfo,b.when(),a.when()]).then(([c])=>{if(!this.destroyed&&a&&!a.destroyed){var {view:f}=a,{resourceController:h}=f;this._setClippingArea(f.clippingArea);this.addHandles([n.watch(()=>f?.pointsOfInterest?.focus?.renderLocation,g=>this._pointOfInterestChanged(g),n.initial),n.watch(()=>h.memoryController.memoryFactor,()=>this._setCameraDirty(),n.sync),n.watch(()=>a.suspended,g=>{const y=g?()=>this._updateViewData():()=>this._updateIdleState(!0),
K=g?()=>{}:()=>this._updateIdleState(!1);!g&&e.isSome(this._index)&&this._index.invalidateAllElevationRanges();this._idleStateCallbacks?(g&&this.cancelNodeLoading(),this.restartNodeLoading(),this._idleStateCallbacks.idleBegin=y,this._idleStateCallbacks.idleEnd=K):this._idleStateCallbacks=h.scheduler.registerIdleStateCallbacks(y,K)},n.initial),U.addTask(a.view.resourceController.scheduler,{update:(g,y)=>this._frame(g,y),needsUpdate:()=>this.updating}),n.watch(()=>a.uncompressedTextureDownsamplingEnabled,
()=>this.restartNodeLoading()),n.watch(()=>[this.featureTarget,this.fixedFeatureTarget],()=>{this._setCameraDirty();this._stableFeatureLOD=!1}),n.watch(()=>f.state?.contentCamera,()=>this._setCameraDirty()),n.watch(()=>b.elevationInfo,g=>this._elevationInfoChanged(g)),n.watch(()=>b.effectiveScaleRange,()=>this._scaleBoundsChanged()),n.watch(()=>a.lodFactor,()=>this._setCameraDirty()),n.watch(()=>a.availableFields,()=>this._requiredFieldsChange()),n.watch(()=>a.holeFilling,g=>e.isSome(this._index)&&
(this._index.holeFilling=g))]);this._updateScaleHandles();this._viewportQueries=new Y(this.crsIndex,f.renderCoordsHelper,f.state.contentCamera,!f.state.fixedContentCamera||this.isGraphics3D,this._clippingArea,this.isMeshPyramid?f.basemapTerrain:f.elevationProvider,T.viewingModeFromString(f.viewingMode),this.layer.elevationInfo,{progressiveLoadFactor:this._getProgressiveLoadFactor(),screenspaceErrorBias:this._lod,angleDependentLoD:.5>this._lod});this._index=new V.I3SIndex(b,c,this.indexStreamController,
this._viewportQueries,u,a.holeFilling,g=>a.isNodeLoaded(g),g=>a.isNodeReloading(g),g=>this._shouldLoadNode(g),g=>this._enableFromGPUCache(g,t.NodeState.Leaf),g=>this._needsUpdate(g),()=>!this.indexStreamController.busy,g=>a.computeVisibilityObb?a.computeVisibilityObb(g):null,a?.computeNodeFiltering?g=>a.computeNodeFiltering(g):void 0);this._index.updateElevationInfo(this.layer.elevationInfo,this.isMeshPyramid);this._index.imModificationsChanged(!!a.hasModifications);this._startNodeLoading()}}));this._tmpPoint=
R.makeDehydratedPoint(0,0,0,this.crsIndex)};d.updateNodeModificationStatus=function(a){const b=this._index,c=this.layerView;e.isSome(b)&&c?.updateNodeModificationStatus&&(this._modificationsNodeFilteringArray.clear(),a.forAll(f=>{f=b.getNode(f);e.isSome(f)&&this._modificationsNodeFilteringArray.push(f)}),c.updateNodeModificationStatus(this._modificationsNodeFilteringArray),this._invisibleDirty=!0)};d.destroy=function(){this.cancelNodeLoading();this._idleStateCallbacks&&(this._isIdle=!1,this._idleStateCallbacks.remove(),
this._idleStateCallbacks=null);this._handles.destroy();this._nodeLoader=null;r.prune();e.isSome(G)&&(G.hide(),G=null)};d._getRequiredAttributes=function(){if(null==this._attributeStorageInfo||!this._fields||!this.layerView.availableFields)return[];const a=this._attributeStorageInfo,b=this._fields,c=this.layer.objectIdField;return this.layerView.availableFields.map(f=>{const h=F(a,f);f=F(b,f);return 0<=h&&0<=f?{index:h,name:b[f].name,field:b[f],attributeStorageInfo:a[h]}:null}).filter(f=>null!=f&&
f.name!==c)};d._requiredFieldsChange=function(){const a=this._getRequiredAttributes();E(this._requiredAttributes,a)||(this._requiredAttributes=a,this._requiredAttributesDirty=!1,this.restartNodeLoading())};d.requestUpdate=function(){this._requiredAttributesDirty=!0;this.restartNodeLoading()};d._setClippingArea=function(a){const b=A.create();aa.toBoundingRect(a,b,this.layerView.view.renderSpatialReference)?this._clippingArea=b:this._clippingArea=null};d._pointOfInterestChanged=function(a){e.isSome(this._viewportQueries)&&
(this._viewportQueries.setPointOfInterest(a),e.isSome(this._index)&&(this._index.progressiveLoadPenalty=L.distancePenalty*this._viewportQueries.distCameraToPOI(),this._index.requestUpdate()))};d.updateClippingArea=function(a){this._setClippingArea(a);e.isSome(this._viewportQueries)&&e.isSome(this._index)&&(this._viewportQueries.updateClippingArea(this._clippingArea),this._index.invalidateVisibilityCache());this._setCameraDirty()};d._setCameraDirty=function(){this._cameraDirty=!0;this._lodHandling.setLodGlobalDirty();
this._evaluateUpdating()};d.updateElevationChanged=function(a,b){const c=this._index;if(e.isNone(c)||e.isNone(c.rootNode)||e.isNone(b))return null;this.crsIndex.equals(b)||(I.projectBoundingRect(a,b,z,this.crsIndex),a=z);const f=this._elevationUpdateNodes;f.clear();B.findIntersectingNodes(a,c.rootNode,c,h=>f.push(h.index));f.length&&(f.forAll(h=>c.updateElevationChanged(h)),this._setCameraDirty());return f};d.getParentIndex=function(a){return e.isSome(this._index)&&this._index.getParentIndex(a)};
d.removeAllGeometryObbs=function(){e.isSome(this._index)&&this._index.removeAllGeometryObbs()};d.getRenderMbs=function(a){return e.isSome(this._viewportQueries)?this._viewportQueries.getRenderMbs(a):null};d._elevationInfoChanged=function(a){e.isNone(this._index)||(this._index.updateElevationInfo(a,this.isMeshPyramid),this._setCameraDirty())};d._updateScaleHandles=function(){this._handles.remove("scale-bounds");this._areScaleBoundsActive&&this._handles.add(this.layerView.view.basemapTerrain.on("scale-change",
a=>this._scaleUpdateHandler(a)),"scale-bounds")};d._scaleBoundsChanged=function(){this._areScaleBoundsActive||this._loadedNodeScales.clear();this._updateScaleHandles();this._setCameraDirty()};d._scaleUpdateHandler=function(a){this._updateScaleInBoundingRect(a.extent,a.spatialReference);this._setCameraDirty()};d._updateScaleInBoundingRect=function(a,b){const c=this._index;e.isNone(c)||!e.isNone(c.rootNode)&&I.projectBoundingRect(a,b,z,this.crsIndex)&&this._loadedNodeScales.forEach((f,h)=>{f=c.getNode(h);
e.isSome(f)&&A.intersectsSphere(z,f.mbs)&&this._loadedNodeScales.set(h,this._computeScale(f))})};d.restartNodeLoading=function(){this._restartNodeLoading=!0;this.cancelNodeLoading();this._evaluateUpdating()};d.schedule=function(a,b){return this._idleQueue.push(a,b)};d.reschedule=function(a,b){return this._idleQueue.unshift(a,b)};d._frame=function(a,b){if(this.layerView.suspended)return this._updateViewData(),this._evaluateUpdating(),-Infinity;if(!this.layerView.visible||e.isNone(this._index))return-Infinity;
this._processWithErrorLogging(a,b);return this._index.maxPriority};d._processWithErrorLogging=function(a,b){try{this._process(a,b)}catch(c){50>this._errorCount?u.error("Error during processing: "+c):50===this._errorCount&&u.error("Too many errors for this layer. Further errors will not be displayed."),this._errorCount++}};d._process=function(a,b){this._restartNodeLoading&&this._startNodeLoading();null==this._nodeLoader||e.isNone(this._index)||(this._updateViewData(),this._invisibleDirty&&this._removeInvisibleNodes(a)&&
(this._invisibleDirty=!1),this._isIntegratedMesh&&(a.enabled=!1),a.run(()=>this._processIndex(a)),this._updateFeatureLOD(),a.run(()=>this._processCache(a)),this._isIntegratedMesh&&(a.enabled=!0),a.run(()=>this._processNodes(a,b)),this._idleQueue.runTask(a),a.run(()=>this._prefetchIndex()),b.numIndexLoading+=this._index.indexLoading,b.numNodesLoading+=this._downloadingCount,a.run(()=>this._lodHandling.lodGlobalHandling(a)),this._evaluateUpdating())};d._processIndex=function(a){if(e.isNone(this._index))return!1;
this._index.dirty&&(this._newLoadingNodes.clear(),this._index.update(Array.from(this._loadingNodes.keys()),a,b=>this.updateNodeModificationStatus(b)),this._disableMemCache||(this._newLoadingNodes.pushArray(this._index.updates.add.data,this._index.updates.add.length),this._newLoadingNodes.pushArray(this._index.updates.missing.data,this._index.updates.missing.length)),a=this._index.featureEstimate.leavesReached,this._index.isLoading||a===this._get("leavesReached")||this._set("leavesReached",a));return this._index.load()};
d._prefetchIndex=function(){return e.isNone(this._index)||0<this._loadingNodes.size||0<this._index.updates.add.length?!1:this._index.prefetch()};d._updateFeatureLOD=function(){if(this.useMaximumNumberOfFeatures&&!e.isNone(this._index)&&!e.isNone(this._viewportQueries)){var a=!this._index.isLoading,b=this.featureTarget*this._baseLOD,c=this._index.featureEstimate;c.estimate=c.estimate||b/2;if(500<this._index.indexMissing){if(1E-4>=this._featureLOD)return;this._featureLOD/=1.5;this._stableFeatureLOD=
!1}else if(a&&c.estimate<b){if(c.leavesReached||1E4<=this._featureLOD||this._stableFeatureLOD)return;this._featureLOD*=Math.min(10,Math.max(b/c.estimate,1.001));a=this._lod;b=this._index.checkFeatureTarget(b,a);b!==a&&(this._featureLOD=b/this._baseLOD,this._stableFeatureLOD=!0)}else if(c.estimate>1.2*b||a&&c.estimate>b){if(1E-4>=this._featureLOD)return;this._featureLOD/=1+.25*(c.estimate/b-1);this._stableFeatureLOD=!1}else return;this._featureLOD=Math.min(1E4,Math.max(1E-4,this._featureLOD));this._viewportQueries.updateScreenSpaceErrorBias(this._lod);
this._index.requestUpdate()}};d._processCache=function(a){const b=this._index;if(e.isNone(b))return!1;for(;0<this._newLoadingNodes.length&&!a.done;){var c=this._newLoadingNodes.pop();for(c=b.getParent(c);e.isSome(c)&&!this.layerView.isNodeLoaded(c.index)&&this._isNodeInScaleBounds(c);c=b.getParent(c.index))if(this._enableFromGPUCache(c,t.NodeState.Hole)){a.madeProgress();break}}return a.hasProgressed};d._processNodes=function(a,b){if(e.isNone(this._index))return!1;let c=(this._isIdle?100:2)-this._loadingNodes.size;
const f=this._index.updates;f.cancel.forEach(this._cancelNode,this);for(f.cancel=[];0<f.remove.length&&!a.done;)this.layerView.removeNode(f.remove.pop()),a.madeProgress();for(;0<f.update.length&&!a.done;){var h=this._index.getNode(f.update.pop());e.isSome(h)&&(this._updateLoadedNode(h),a.madeProgress())}for(;0<f.add.length&&!a.done&&0<c;){--c;h=this._index.getNode(f.add.back());if(e.isNone(h)||h.cacheState!==t.CacheState.Cached&&!this._hasNodeLoadToken(b))break;f.add.pop();this._loadNode(h);a.madeProgress()}return a.hasProgressed};
d._cancelAllNodes=function(){this._loadingNodes.forEach(a=>a.abort());this._loadingNodes.clear();this._updatingNodes.forEach(a=>a.abort());this._updatingNodes.clear()};d._cancelNode=function(a){const b=this._loadingNodes.get(a);b&&(b.abort(),this._loadingNodes.delete(a))};d._hasNodeLoadToken=function(a){return!this._isIdle&&2<=a.numNodesLoading+this._loadingNodes.size?!1:this._downloadingCount<C.maxDownloadSlots&&!this.dataStreamController.busy};d._evaluateUpdating=function(){var a=!1,b=0;this.layerView.suspended?
b=(a=this._cameraDirty)?0:1:(a=e.isSome(this._index)?this._index.indexMissing:0,b=e.isSome(this._index)?this._index.updates.add.length:0,b=a+3*b+2*this._loadingNodes.size,a=!!(0<b||0<this._updatingNodes.size||this._restartNodeLoading||this._cameraDirty||this._idleQueue.running||this._lodHandling&&this._lodHandling.requiresLODGlobalHandling||e.isSome(this._index)&&this._index.isPrefetching),0===b&&(this._progressMaxNumNodes=1),this._progressMaxNumNodes=Math.max(b,this._progressMaxNumNodes),b=1-b/this._progressMaxNumNodes);
this.updating=a;this.updatingProgress=b};d._updateViewData=function(){if(this._cameraDirty&&!e.isNone(this._index)&&!e.isNone(this._viewportQueries)){var a=this.layerView.view,{contentCamera:b,fixedContentCamera:c}=a.state;this.screenSizeFactor=1/(b.perScreenPixelRatio/2);this._viewportQueries.updateCamera(b,!c||this.isGraphics3D);this._viewportQueries.setPointOfInterest(a.pointsOfInterest.focus.renderLocation);this._viewportQueries.updateScreenSpaceErrorBias(this._lod);this._index.invalidateVisibilityCache();
this._index.progressiveLoadPenalty=L.distancePenalty*this._viewportQueries.distCameraToPOI();this._index.requestUpdate();this._stableFeatureLOD=!1;this._invisibleDirty=!0;this._cameraDirty=!1;this.notifyChange("rootNodeVisible")}};d._getProgressiveLoadFactor=function(){return 1>this.layerView.view.resourceController.memoryController.memoryFactor?1:this.layerView.progressiveLoadFactor};d.isGeometryVisible=function(a){return e.isSome(this._index)&&this._index.isGeometryVisible(a.index)};d.updateVisibility=
function(a){e.isSome(this._index)&&this._index.invalidateNodeVisibilityCache(a)};d.invalidateGeometryVisibility=function(a){e.isSome(this._index)&&this._index.invalidateGeometryVisibility(a)};d.invalidateVisibilityObbs=function(){e.isSome(this._index)&&this._index.invalidateVisibilityObbs()};d.modificationsChanged=function(){e.isSome(this._index)&&this._index.imModificationsChanged(!!this.layerView.hasModifications);this._invisibleDirty=!0};d._shouldLoadNode=function(a){return!this._lodHandling.shouldLoadNode(a)||
this._shouldDropNode(a)||e.isNone(this._index)||!this._index.isGeometryVisible(a.index)?!1:this._isNodeInScaleBounds(a)};d._shouldDropNode=function(a){if(e.isNone(this._viewportQueries))return!1;const b=this._lodDropFactor;return 1<=b||!this._lodHandling.hasNoVisibleChildren(a)?!1:Math.abs(this._viewportQueries.calcCameraDistanceToCenter(a))-this._viewportQueries.minDistance>(this._viewportQueries.maxDistance-this._viewportQueries.minDistance)*b};d._startNodeLoading=function(){this._restartNodeLoading=
!1;const a=this._index;this._updatesDisabled||e.isNone(a)||e.isNone(this._viewportQueries)||(this._updateViewData(),this._requiredAttributesDirty&&(this._requiredAttributes=this._getRequiredAttributes(),this._requiredAttributesDirty=!1),this._nodeLoader=new X(this.layer,this.dataStreamController,u,this._defaultGeometrySchema,this._requiredAttributes,{textureEncodings:this.layerView.supportedTextureEncodings,uncompressedTextureDownsamplingEnabled:this.layerView.uncompressedTextureDownsamplingEnabled,
textureUsageMask:this.layerView.rendererTextureUsage,loadFeatureData:this.useMaximumNumberOfFeatures}),a.requestUpdate(),this._lodHandling.startNodeLoading(b=>this._isNodeInScaleBounds(b),(b,c)=>this._removeNodes(b,c,v.fadeout),a,{maxLodLevel:this._viewportQueries.maxLodLevel}),this._evaluateUpdating())};d.isNodeLoading=function(){return null!=this._nodeLoader&&null!=this._index};d.cancelNodeLoading=function(){this.isNodeLoading()&&(this.indexStreamController.cancelAll(),this.dataStreamController.cancelAll(),
this._idleQueue.cancelAll(),this._cancelAllNodes(),this._nodeLoader=null,this._evaluateUpdating())};d._removeInvisibleNodes=function(a){const b=this._index;if(e.isNone(b)||e.isNone(this._viewportQueries))return!1;r.clear();this.layerView.getLoadedNodeIndices(r);const c=0===this._viewportQueries.maxDistance,f=c?()=>!1:h=>this._shouldDropNode(h);r.filterInPlace(h=>{const g=b.getNode(h);return e.isNone(g)||!b.isGeometryVisible(h)||f(g)||!this._isNodeInScaleBounds(g)});0<r.length&&this._lodHandling.setLodGlobalDirty();
this._removeNodes(r,a,v.pop);if(c&&1>this._lodDropFactor)return!1;if(0===r.length)return!0;r.clear();return!1};d.markNodeToRemove=function(a){r.push(a)};d.removeMarkedNodes=function(){this._removeNodes(r,ba.noBudget,v.pop)};d._removeNodes=function(a,b,c){const f=a.length;if(0!==f&&!b.done){for(e.isSome(this._index)&&this._index.requestUpdate();0<a.length&&!b.done;){const h=a.pop(),g=this._index;c===v.fadeout&&this.layerView.nodeFadeoutEnabled&&e.isSome(g)&&g.isGeometryVisible(h)?this.layerView.fadeNode(h,
Z.FadeDirection.FadeOut,!0):this.layerView.removeNode(h);b.madeProgress()}if(0<this._loadedNodeScales.size)for(b=a.length;b<f;b++)this._loadedNodeScales.delete(a.data[b])}};d._needsUpdate=function(a){if(!a.resources.hasFeatureData||this._updatingNodes.has(a.index))return!1;a=this.layerView.getLoadedAttributes(a.index);return null!=a&&a!==this._requiredAttributes};d._updateLoadedNode=function(a){const b=new AbortController;this._updatingNodes.set(a.index,b);const c=this.layerView.getLoadedAttributes(a.index);
(E(c,this._requiredAttributes)?Promise.resolve(this.layerView.getAttributeData(a.index)):this._nodeLoader.loadAttributes(a,this._requiredAttributes,b.signal)).then(f=>this.schedule(()=>this.layerView.updateAttributes(a.index,{loadedAttributes:this._requiredAttributes,attributeData:f},b.signal),b.signal)).catch(f=>{if(!x.isAbortError(f))return this.layerView.updateAttributes(a.index,{loadedAttributes:this._requiredAttributes,attributeData:{}},b.signal)}).catch(()=>{}).then(()=>{this._updatingNodes.delete(a.index);
this._evaluateUpdating()});this._evaluateUpdating()};d._loadNode=function(a){if(this._loadingNodes.has(a.index))u.error("already loading node "+a.index);else{var b=new AbortController;this._loadingNodes.set(a.index,b);this._evaluateUpdating();this._loadAndAddNode(a,b.signal).then(c=>{c&&e.isSome(this._index)&&this._loadingNodes.get(a.index)===b&&(this._loadingNodes.delete(a.index),this._index.requestUpdate())}).catch(c=>{if(!x.isAbortError(c))throw c;}).finally(()=>{this._loadingNodes.get(a.index)===
b&&this._loadingNodes.delete(a.index);this._evaluateUpdating()})}};d._loadAndAddNode=function(a,b){return a.cacheState===t.CacheState.Uncached?this._loadUncached(a,b).then(()=>!1):this._loadCached(a,b).then(c=>{if(c)return!1;a.cacheState=t.CacheState.Uncached;return!0}).catch(c=>x.isAbortError(c)?!1:(a.cacheState=t.CacheState.Uncached,!0))};d._enableFromGPUCache=function(a,b){if(this._disableMemCache||e.isNone(this._index))return!1;if(b===t.NodeState.Hole&&!this._index.useNodeAsHole(a.index))return!0;
const c=this._loadCachedGPUData(a);if(!c)return!1;this.layerView.addCachedGPUData(a,c,b);this._nodeAdded();return!0};d._loadCachedGPUData=function(a){a=this.layerView.loadCachedGPUData(a);if(e.isSome(a)&&e.isSome(a.attributeInfo)&&E(a.attributeInfo.loadedAttributes,this._requiredAttributes))return a;this.layerView.deleteCachedGPUData(a);return null};d._nodeAdded=function(){e.isSome(this._index)&&this._index.requestUpdate();this._lodHandling.setLodGlobalDirty();this._evaluateUpdating()};d.updateLoadStatus=
function(a,b){const c=this._index;e.isSome(c)&&c.updateChildrenLoaded(a,b?1:-1)};d._loadCached=function(a,b){if(this._enableFromGPUCache(a,t.NodeState.Leaf))return Promise.resolve(!0);const c=this.layerView;return!this.disableIDBCache&&c.loadCachedNodeData&&c.addCachedNodeData?this.schedule(()=>c.loadCachedNodeData(a,b,(f,h)=>this._nodeLoader.loadTextures(a,f,h)),b).then(f=>{if(e.isNone(f))return!1;const h=this._requiredAttributes;return this.reschedule(()=>this._nodeLoader.loadAttributes(a,h,b),
b).then(g=>this.reschedule(()=>c.addCachedNodeData(a,f,{loadedAttributes:h,attributeData:g},b),b)).then(()=>{this._nodeAdded();return!0})}):Promise.resolve(!1)};d._loadUncached=function(a,b){this._downloadingCount++;return this._nodeLoader.loadNodeData(a,b).catch(c=>{this._downloadingCount--;throw c;}).then(c=>{this._downloadingCount--;return this.schedule(()=>this.layerView.addNode(a,c,b),b)}).then(()=>{this._nodeAdded();a.cacheState=t.CacheState.Cached}).catch(c=>{if(!x.isAbortError(c))throw u.error("#loadNodeData()",
this.layer,`Failed to load node '${a.id}'`,c),a.failed=!0,e.isSome(this._index)&&this._index.requestUpdate(),c;})};d._updateIdleState=function(a){a!==this._isIdle&&(this._isIdle=a,this._evaluateUpdating(),a&&this._index&&e.isSome(this._index)&&this._index.resetFailedNodes())};d._getScale=function(a){if(this._loadedNodeScales.has(a.index))return this._loadedNodeScales.get(a.index);const b=this._computeScale(a);this.layerView.isNodeLoaded(a.index)&&this._loadedNodeScales.set(a.index,b);return b};d._computeScale=
function(a){this._tmpPoint.x=a.mbs[0];this._tmpPoint.y=a.mbs[1];this._tmpPoint.z=a.mbs[2];return this.layerView.view.basemapTerrain.getSphereScale(this._tmpPoint,a.mbs[3])};d._isNodeInScaleBounds=function(a){if(!this._areScaleBoundsActive)return!0;a=this._getScale(a);const {minScale:b,maxScale:c}=D.extractSafeScaleBounds(this.layer);return D.scaleBoundsPredicate(a,b,c)};d.updateStats=function(a){a.index=e.isSome(this._index)?this._index.size:0;this.isGraphics3D&&(a.detail=this._featureLOD,a.target=
this.featureTarget*this._baseLOD);e.isSome(this._index)&&this._index.updateStats(a)};d.notifyLODUpdate=function(){this._lodHandling.setLodGlobalDirty();this._evaluateUpdating();e.isSome(this._index)&&this._index.requestUpdate()};d.geometryFilterChanged=function(a){const b=this._index;e.isSome(b)&&b.layerFilterChanged(a);this._setCameraDirty()};H._createClass(q,[{key:"isMeshPyramid",get:function(){return"mesh-pyramids"===this.layer.profile||"MeshPyramid"===this.layer.store.lodType}},{key:"isGraphics3D",
get:function(){return"points"===this.layer.profile}},{key:"useMaximumNumberOfFeatures",get:function(){return!this.isMeshPyramid&&(e.isNone(this.layer.priority)||"High"===this.layer.priority)}},{key:"indexStreamController",get:function(){const a=this.layerView.view.resourceController.createStreamDataRequester(C.ClientType.I3S_INDEX);return new J.I3SStreamDataController(a,this.layer.apiKey)}},{key:"dataStreamController",get:function(){const a=this.layerView.view.resourceController.createStreamDataRequester(C.ClientType.I3S_DATA);
return new J.I3SStreamDataController(a,this.layer.apiKey)}},{key:"crsVertex",get:function(){return B.getVertexCrs(this.layer)}},{key:"crsIndex",get:function(){return B.getIndexCrs(this.layer)}},{key:"layer",get:function(){return this.layerView.i3slayer}},{key:"rootNodeVisible",get:function(){if(e.isSome(this._index)){const a=this._index.rootNode;if(e.isSome(a))return this._updateViewData(),this._index.isNodeVisible(a.index)}return!0}},{key:"index",get:function(){return this._index}},{key:"_isIntegratedMesh",
get:function(){return"integrated-mesh"===this.layer.type}},{key:"_areScaleBoundsActive",get:function(){const {minScale:a,maxScale:b}=D.extractSafeScaleBounds(this.layer);return this.scaleVisibilityEnabled&&(0<a||0<b)}},{key:"unloadedMemoryEstimate",get:function(){return e.isNone(this._index)||this.layerView.suspended?0:this._index.unloadedMemoryEstimate*this._lodDropFactor}},{key:"indexDepth",get:function(){return e.isSome(this._index)?this._index.maxLevel:0}},{key:"disableMemCache",set:function(a){this.layerView.loadCachedGPUData&&
this.layerView.addCachedGPUData||(this._disableMemCache=!0);this._disableMemCache=a}},{key:"_lod",get:function(){return this._featureLOD*this._baseLOD}},{key:"_baseLOD",get:function(){const a=this.layerView.lodFactor,b=this.layerView.view.resourceController.memoryController.memoryFactor;return this.fixedFeatureTarget?1:(0<a?a:1)*b}},{key:"_lodDropFactor",get:function(){if(this.fixedFeatureTarget)return 1;const a=this.layerView.view.resourceController.memoryController;return(Math.min(a.memoryFactor,
.5)-a.minQuality)/(.5-a.minQuality)}},{key:"test",get:function(){const a=this;return{index:this._index,set disableUpdates(b){(a._updatesDisabled=b)?a.cancelNodeLoading():a.requestUpdate()},set disableIDBCache(b){a.disableIDBCache=b},set ignoreServiceObb(b){e.isSome(a._index)&&(a._index.ignoreServiceObb=b)},shouldLoadNode:b=>a._shouldLoadNode(b)}}}]);return q}(P.EsriPromiseMixin(k));l.__decorate([m.property({readOnly:!0})],k.prototype,"isMeshPyramid",null);l.__decorate([m.property({readOnly:!0})],
k.prototype,"isGraphics3D",null);l.__decorate([m.property({readOnly:!0})],k.prototype,"useMaximumNumberOfFeatures",null);l.__decorate([m.property({readOnly:!0})],k.prototype,"indexStreamController",null);l.__decorate([m.property({readOnly:!0})],k.prototype,"dataStreamController",null);l.__decorate([m.property({readOnly:!0})],k.prototype,"crsVertex",null);l.__decorate([m.property({readOnly:!0})],k.prototype,"crsIndex",null);l.__decorate([m.property()],k.prototype,"screenSizeFactor",void 0);l.__decorate([m.property()],
k.prototype,"featureTarget",void 0);l.__decorate([m.property()],k.prototype,"fixedFeatureTarget",void 0);l.__decorate([m.property()],k.prototype,"layerView",void 0);l.__decorate([m.property()],k.prototype,"layer",null);l.__decorate([m.property({})],k.prototype,"updating",void 0);l.__decorate([m.property({})],k.prototype,"updatingProgress",void 0);l.__decorate([m.property({readOnly:!0})],k.prototype,"leavesReached",void 0);l.__decorate([m.property({constructOnly:!0})],k.prototype,"scaleVisibilityEnabled",
void 0);l.__decorate([m.property({readOnly:!0,dependsOn:[]})],k.prototype,"rootNodeVisible",null);k=l.__decorate([Q.subclass("esri.layers.graphics.controllers.I3SOnDemandController")],k);const r=new w({deallocator:null});let G;const L={factorIM:.2,factor3dObject:.05,distancePenalty:10},z=A.create();var v;(function(p){p[p.pop=0]="pop";p[p.fadeout=1]="fadeout"})(v||(v={}));return k});