// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../chunks/tslib.es6 ../../../../../core/arrayUtils ../../../../../core/AsyncSequence ../../../../../core/asyncUtils ../../../../../core/HandleOwner ../../../../../core/handleUtils ../../../../../core/Logger ../../../../../core/maybe ../../../../../core/promiseUtils ../../../../../core/reactiveUtils ../../../../../core/accessorSupport/decorators/property ../../../../../core/accessorSupport/ensureType ../../../../../core/accessorSupport/decorators/subclass ../../../../../geometry/Extent ../../../../../geometry/support/aaBoundingRect ../../../../../layers/graphics/featureConversionUtils ../../../../../layers/support/arcgisLayerUrl ../../../../../rest/query/operations/pbfOptimizedFeatureSet ../../../../../rest/query/operations/query ../../../../../rest/support/Query ./PendingFeatureTile".split(" "),
function(g,n,h,B,C,D,E,F,G,l,H,I,k,P,J,K,L,z,M,N,v,w,x){g.FeatureServiceTiledFetcher=function(A){function u(a){a=A.call(this,a)||this;a.tilesOfInterest=[];a.availability=0;a._pendingTiles=new Map;a._pendingEdits=new C.AsyncSequence;a._pendingEditsAbortController=new AbortController;return a}n._inheritsLoose(u,A);var d=u.prototype;d.initialize=function(){this._initializeFetchExtent();this.updatingHandles.add(()=>this._configuration,()=>this.refresh());this.updatingHandles.add(()=>this.tilesOfInterest,
(a,b)=>{B.equals(a,b,({id:c},{id:e})=>c===e)||this._process()},I.sync)};d.destroy=function(){this._pendingTiles.forEach(a=>this._deletePendingTile(a));this._pendingTiles.clear();this.store.destroy();this.tilesOfInterest.length=0;this._pendingEditsAbortController.abort();this._pendingEditsAbortController=null};d.refresh=function(){this.store.refresh();this._pendingTiles.forEach(a=>this._deletePendingTile(a));this._process()};d.applyEdits=function(a){var b=this;this._pendingEdits.push(a,function(){var c=
n._asyncToGenerator(function*(e){if(0!==e.addedFeatures.length||0!==e.updatedFeatures.length||0!==e.deletedFeatures.length){for(const [,f]of b._pendingTiles)f.reset();e={...e,deletedFeatures:e.deletedFeatures.map(({objectId:f,globalId:m})=>f&&-1!==f?f:b._lookupObjectIdByGlobalId(m))};yield b.updatingHandles.addPromise(b.store.processEdits(e,(f,m)=>b._queryFeaturesById(f,m),b._pendingEditsAbortController.signal));b._processPendingTiles()}});return function(e){return c.apply(this,arguments)}}())};d._initializeFetchExtent=
function(){var a=this;if(this.capabilities.query.supportsExtent&&M.isHostedAgolService(this.url)){var b=D.createTask(function(){var c=n._asyncToGenerator(function*(e){try{const f=yield v.executeQueryForExtent(a.url,new w({where:"1\x3d1",outSpatialReference:a.spatialReference,cacheHint:a.capabilities.query.supportsCacheHint?!0:void 0}),{query:a._configuration.customParameters,signal:e});a.store.extent=K.fromJSON(f.data?.extent)}catch(f){H.throwIfAbortError(f),G.getLogger(a.declaredClass).warn("Failed to fetch data extent",
f)}});return function(e){return c.apply(this,arguments)}}());this.updatingHandles.addPromise(b.promise.then(()=>this._process()));this.handles.add(F.makeHandle(()=>b.abort()))}};d._process=function(){this._markTilesNotAlive();this._createPendingTiles();this._deletePendingTiles();this._processPendingTiles()};d._markTilesNotAlive=function(){for(const [,a]of this._pendingTiles)a.alive=!1};d._createPendingTiles=function(){var a=this._collectMissingTilesInfo();this._setAvailability(l.isNone(a)?1:a.coveredArea/
a.fullArea);if(!l.isNone(a))for(const {data:b,resolution:c}of a.missingTiles)(a=this._pendingTiles.get(b.id))?(a.resolution=c,a.alive=!0):this._createPendingTile(b,c)};d._collectMissingTilesInfo=function(){let a=null;for(let b=this.tilesOfInterest.length-1;0<=b;b--){const c=this.store.process(this.tilesOfInterest[b],(e,f)=>this._verifyTileComplexity(e,f));l.isNone(a)?a=c:a.prepend(c)}return a};d._deletePendingTiles=function(){for(const [,a]of this._pendingTiles)a.alive||this._deletePendingTile(a)};
d._processPendingTiles=function(){const a={fetchCount:(b,c)=>this._fetchCount(b,c),fetchFeatures:(b,c,e)=>this._fetchFeatures(b,c,e),finish:(b,c)=>this._finishPendingTile(b,c),resume:()=>this._processPendingTiles()};if(this._ensureFetchAllCounts(a))for(const [,b]of this._pendingTiles)this._verifyTileComplexity(this.store.getFeatureCount(b.data),b.resolution)&&this.updatingHandles.addPromise(b.process(a))};d._verifyTileComplexity=function(a,b){return this._verifyVertexComplexity(a)&&this._verifyFeatureDensity(a,
b)};d._verifyVertexComplexity=function(a){return 1E6>a*this._minimumVerticesPerFeature};d._verifyFeatureDensity=function(a,b){if(l.isNone(this.tileInfo))return!1;b*=this.tileSize;return 1>25/(b*b)*a};d._ensureFetchAllCounts=function(a){let b=!0;for(const [,c]of this._pendingTiles)c.state.type<x.StateType.FETCHED_COUNT&&this.updatingHandles.addPromise(c.process(a)),c.state.type<=x.StateType.FETCH_COUNT&&(b=!1);return b};d._finishPendingTile=function(a,b){this.store.add(a.data,b);this._deletePendingTile(a);
this._updateAvailability()};d._updateAvailability=function(){const a=this._collectMissingTilesInfo();this._setAvailability(l.isNone(a)?1:a.coveredArea/a.fullArea)};d._setAvailability=function(a){this._set("availability",a)};d._createPendingTile=function(a,b){b=new x.PendingFeatureTile(a,b);this._pendingTiles.set(a.id,b);return b};d._deletePendingTile=function(a){a.reset();this._pendingTiles.delete(a.data.id)};d._fetchCount=function(){var a=n._asyncToGenerator(function*(b,c){return this.store.fetchCount(b.data,
this.url,this._createCountQuery(b),{query:this.customParameters,timeout:6E5,signal:c})});return function(b,c){return a.apply(this,arguments)}}();d._fetchFeatures=function(){var a=n._asyncToGenerator(function*(b,c,e){let f=0,m,r=0,t=c;for(;;){const p=this._createFeaturesQuery(b),q=this._setPagingParameters(p,f,t),{features:y,exceededTransferLimit:O}=yield this._queryFeatures(p,e);q&&(f+=l.unwrap(p.num));r+=y.length;m=m?m.concat(y):y;t=c-r;if(!q||!O||0>=t)return m}});return function(b,c,e){return a.apply(this,
arguments)}}();d._filterProperties=function(a){return l.isNone(a)?{where:"1\x3d1",gdbVersion:void 0,timeExtent:void 0}:{where:a.where||"1\x3d1",timeExtent:a.timeExtent,gdbVersion:a.gdbVersion}};d._lookupObjectIdByGlobalId=function(a){const b=this.globalIdField,c=this.objectIdField;if(l.isNone(b))throw Error("Expected globalIdField to be defined");let e=null;this.store.featureStore.forEach(f=>{a===f.attributes[b]&&(e=f.objectId??f.attributes[c])});if(l.isNone(e))throw Error(`Expected to find a feature with globalId ${a}`);
return e};d._queryFeaturesById=function(a,b){const c=this._createFeaturesQuery();c.objectIds=a;return this._queryFeatures(c,b)};d._queryFeatures=function(a,b){return this.capabilities.query.supportsFormatPBF?this._queryFeaturesPBF(a,b):this._queryFeaturesJSON(a,b)};d._queryFeaturesPBF=function(){var a=n._asyncToGenerator(function*(b,c){const {sourceSpatialReference:e}=this;({data:b}=yield v.executeQueryPBF(this.url,b,new N.OptimizedFeatureSetParserContext({sourceSpatialReference:e}),{query:this._configuration.customParameters,
timeout:6E5,signal:c}));return z.unquantizeOptimizedFeatureSet(b)});return function(b,c){return a.apply(this,arguments)}}();d._queryFeaturesJSON=function(){var a=n._asyncToGenerator(function*(b,c){const {sourceSpatialReference:e}=this;({data:b}=yield v.executeQuery(this.url,b,e,{query:this._configuration.customParameters,timeout:6E5,signal:c}));return z.convertFromFeatureSet(b,this.objectIdField)});return function(b,c){return a.apply(this,arguments)}}();d._createCountQuery=function(a){a=this._createBaseQuery(a);
this.capabilities.query.supportsCacheHint&&(a.cacheHint=!0);return a};d._createFeaturesQuery=function(a=null){const b=this._createBaseQuery(a);b.outFields=this.globalIdField?[this.globalIdField,this.objectIdField]:[this.objectIdField];b.returnGeometry=!0;l.isSome(a)&&(this.capabilities.query.supportsResultType?b.resultType="tile":this.capabilities.query.supportsCacheHint&&(b.cacheHint=!0));return b};d._createBaseQuery=function(a){a=new w({returnZ:this.hasZ,returnM:!1,geometry:l.isSome(this.tileInfo)&&
l.isSome(a)?L.toExtent(a.data.extent,this.tileInfo.spatialReference):void 0});const b=this._configuration.filter;l.isSome(b)&&(a.where=b.where,a.gdbVersion=b.gdbVersion,a.timeExtent=b.timeExtent);a.outSpatialReference=this.spatialReference;return a};d._setPagingParameters=function(a,b,c){if(!this.capabilities.query.supportsPagination)return!1;const {supportsMaxRecordCountFactor:e,supportsCacheHint:f,tileMaxRecordCount:m,maxRecordCount:r,supportsResultType:t}=this.capabilities.query,p=e?w.MAX_MAX_RECORD_COUNT_FACTOR:
1,q=p*((t||f)&&m?m:r?r:2E3);a.start=b;e?(a.maxRecordCountFactor=Math.min(p,Math.ceil(c/q)),a.num=Math.min(c,a.maxRecordCountFactor*q)):a.num=Math.min(c,q);return!0};n._createClass(u,[{key:"_minimumVerticesPerFeature",get:function(){switch(this.store?.featureStore.geometryType){case "esriGeometryPoint":case "esriGeometryMultipoint":return 1;case "esriGeometryPolygon":return 4;case "esriGeometryPolyline":return 2}}},{key:"filter",set:function(a){const b=this._get("filter");a=this._filterProperties(a);
JSON.stringify(b)!==JSON.stringify(a)&&this._set("filter",a)}},{key:"customParameters",set:function(a){const b=this._get("customParameters");JSON.stringify(b)!==JSON.stringify(a)&&this._set("customParameters",a)}},{key:"_configuration",get:function(){return{filter:this.filter,customParameters:this.customParameters,tileInfo:this.tileInfo,tileSize:this.tileSize}}},{key:"tileInfo",set:function(a){const b=this._get("tileInfo");b===a||l.isSome(a)&&l.isSome(b)&&JSON.stringify(a)===JSON.stringify(b)||(this._set("tileInfo",
a),this.store.tileInfo=a)}},{key:"tileSize",set:function(a){this._get("tileSize")!==a&&this._set("tileSize",a)}},{key:"updating",get:function(){return this.updatingExcludingEdits||this._pendingEdits.updating}},{key:"updatingExcludingEdits",get:function(){return this.updatingHandles.updating}},{key:"hasZ",get:function(){return this.store.featureStore.hasZ}},{key:"debugInfo",get:function(){return{numberOfFeatures:this.store.featureStore.numFeatures,tilesOfInterest:this.tilesOfInterest,pendingTiles:Array.from(this._pendingTiles.values()).map(a=>
a.debugInfo),storedTiles:this.store.debugInfo}}}]);return u}(E.HandleOwner);h.__decorate([k.property({constructOnly:!0})],g.FeatureServiceTiledFetcher.prototype,"url",void 0);h.__decorate([k.property({constructOnly:!0})],g.FeatureServiceTiledFetcher.prototype,"objectIdField",void 0);h.__decorate([k.property({constructOnly:!0})],g.FeatureServiceTiledFetcher.prototype,"globalIdField",void 0);h.__decorate([k.property({constructOnly:!0})],g.FeatureServiceTiledFetcher.prototype,"capabilities",void 0);
h.__decorate([k.property({constructOnly:!0})],g.FeatureServiceTiledFetcher.prototype,"sourceSpatialReference",void 0);h.__decorate([k.property({constructOnly:!0})],g.FeatureServiceTiledFetcher.prototype,"spatialReference",void 0);h.__decorate([k.property({constructOnly:!0})],g.FeatureServiceTiledFetcher.prototype,"store",void 0);h.__decorate([k.property({readOnly:!0})],g.FeatureServiceTiledFetcher.prototype,"_minimumVerticesPerFeature",null);h.__decorate([k.property()],g.FeatureServiceTiledFetcher.prototype,
"filter",null);h.__decorate([k.property()],g.FeatureServiceTiledFetcher.prototype,"customParameters",null);h.__decorate([k.property({readOnly:!0})],g.FeatureServiceTiledFetcher.prototype,"_configuration",null);h.__decorate([k.property()],g.FeatureServiceTiledFetcher.prototype,"tileInfo",null);h.__decorate([k.property()],g.FeatureServiceTiledFetcher.prototype,"tileSize",null);h.__decorate([k.property()],g.FeatureServiceTiledFetcher.prototype,"tilesOfInterest",void 0);h.__decorate([k.property({readOnly:!0})],
g.FeatureServiceTiledFetcher.prototype,"updating",null);h.__decorate([k.property({readOnly:!0})],g.FeatureServiceTiledFetcher.prototype,"updatingExcludingEdits",null);h.__decorate([k.property({readOnly:!0})],g.FeatureServiceTiledFetcher.prototype,"availability",void 0);h.__decorate([k.property()],g.FeatureServiceTiledFetcher.prototype,"hasZ",null);g.FeatureServiceTiledFetcher=h.__decorate([J.subclass("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiledFetcher")],
g.FeatureServiceTiledFetcher);Object.defineProperties(g,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});