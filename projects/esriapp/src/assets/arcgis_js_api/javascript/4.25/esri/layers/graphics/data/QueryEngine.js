// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../core/arrayUtils ../../../core/Error ../../../core/lang ../../../core/maybe ../../../core/MemCache ../../../core/unitUtils ../../../geometry/support/aaBoundingBox ../../../geometry/support/aaBoundingRect ../../../geometry/support/boundsUtils ../../../geometry/support/jsonUtils ../../../geometry/support/normalizeUtils ../../../geometry/support/spatialReferenceUtils ../featureConversionUtils ./attributeSupport ./projectionSupport ./QueryEngineCapabilities ./QueryEngineResult ./spatialQuerySupport ./timeSupport ./utils ../../support/FieldsIndex ../../../support/arcadeOnDemand ../../../views/support/Scheduler".split(" "),
function(M,n,Q,C,R,p,S,N,J,O,X,K,T,D,Y,y,z,Z,t,E,U,u,aa,ba,V){function ca(H){return H.every(l=>"exceedslimit"!==l.statisticType)}const da=new S.MemCacheStorage(2E6);let ea=0,ka=function(){function H(c){this.capabilities={query:Z.queryCapabilities};this.geometryType=c.geometryType;this.hasM=c.hasM;this.hasZ=c.hasZ;this.objectIdField=c.objectIdField;this.spatialReference=c.spatialReference;this.definitionExpression=c.definitionExpression;this.featureStore=c.featureStore;this.aggregateAdapter=c.aggregateAdapter;
this._changeHandle=this.featureStore.events.on("changed",()=>this.clearCache());this.timeInfo=c.timeInfo;c.cacheSpatialQueries&&(this._geometryQueryCache=new S.MemCache(ea++ +"$$",da));this.fieldsIndex=new aa(c.fields);c.scheduler&&c.priority&&(this._frameTask=c.scheduler.registerTask(c.priority))}var l=H.prototype;l.destroy=function(){this._frameTask=p.removeMaybe(this._frameTask);this.clearCache();p.destroyMaybe(this._geometryQueryCache);this._changeHandle=p.removeMaybe(this._changeHandle);p.destroyMaybe(this.fieldsIndex)};
l.clearCache=function(){this._geometryQueryCache?.clear();this._timeExtent=this._allItems=null};l.executeQuery=function(){var c=n._asyncToGenerator(function*(a,b){try{return(yield this._executeQuery(a,{},b)).createQueryResponse()}catch(d){if(d!==u.QUERY_ENGINE_EMPTY_RESULT)throw d;return(new t.QueryEngineResult([],a,this)).createQueryResponse()}});return function(a,b){return c.apply(this,arguments)}}();l.executeQueryForCount=function(){var c=n._asyncToGenerator(function*(a={},b){try{return(yield this._executeQuery(a,
{returnGeometry:!1,returnCentroid:!1,outSR:null},b)).createQueryResponseForCount()}catch(d){if(d!==u.QUERY_ENGINE_EMPTY_RESULT)throw d;return 0}});return function(){return c.apply(this,arguments)}}();l.executeQueryForExtent=function(){var c=n._asyncToGenerator(function*(a,b){const d=a.outSR;try{const f=yield this._executeQuery(a,{returnGeometry:!0,returnCentroid:!1,outSR:null},b),g=f.size;if(!g)return{count:0,extent:null};J.set(x,J.NEGATIVE_INFINITY);this.featureStore.forEachBounds(f.items,h=>J.expandWithAABB(x,
h),fa);const k={xmin:x[0],ymin:x[1],xmax:x[3],ymax:x[4],spatialReference:u.cleanFromGeometryEngine(this.spatialReference)};this.hasZ&&isFinite(x[2])&&isFinite(x[5])&&(k.zmin=x[2],k.zmax=x[5]);const e=z.project(k,f.spatialReference,d);e.spatialReference=u.cleanFromGeometryEngine(d||this.spatialReference);if(0===e.xmax-e.xmin){const h=N.getMetersPerUnitForSR(e.spatialReference);e.xmin-=h;e.xmax+=h}if(0===e.ymax-e.ymin){const h=N.getMetersPerUnitForSR(e.spatialReference);e.ymin-=h;e.ymax+=h}if(this.hasZ&&
null!=e.zmin&&null!=e.zmax&&0===e.zmax-e.zmin){const h=N.getMetersPerUnitForSR(e.spatialReference);e.zmin-=h;e.zmax+=h}return{count:g,extent:e}}catch(f){if(f===u.QUERY_ENGINE_EMPTY_RESULT)return{count:0,extent:null};throw f;}});return function(a,b){return c.apply(this,arguments)}}();l.executeQueryForIds=function(){var c=n._asyncToGenerator(function*(a,b){return this.executeQueryForIdSet(a,b).then(d=>Array.from(d))});return function(a,b){return c.apply(this,arguments)}}();l.executeQueryForIdSet=function(){var c=
n._asyncToGenerator(function*(a,b){try{const d=yield this._executeQuery(a,{returnGeometry:!0,returnCentroid:!1,outSR:null},b),f=d.items,g=new Set;yield this._reschedule(()=>{for(const k of f)g.add(d.featureAdapter.getObjectId(k))},b);return g}catch(d){if(d===u.QUERY_ENGINE_EMPTY_RESULT)return new Set;throw d;}});return function(a,b){return c.apply(this,arguments)}}();l.executeQueryForSnapping=function(){var c=n._asyncToGenerator(function*(a,b){const {point:d,distance:f,types:g}=a;if(g===t.SnappingTypes.NONE)return{candidates:[]};
const k=yield this._reschedule(()=>this._checkQuerySupport(a.query),b),e=!D.equals(d.spatialReference,this.spatialReference);e&&(yield z.checkProjectionSupport(d.spatialReference,this.spatialReference));var h="number"===typeof f?f:f.x,q="number"===typeof f?f:f.y;h={xmin:d.x-h,xmax:d.x+h,ymin:d.y-q,ymax:d.y+q,spatialReference:d.spatialReference};h=e?z.project(h,this.spatialReference):h;if(!h)return{candidates:[]};q=(yield T.normalizeCentralMeridian(K.fromJSON(d),null,{signal:b}))[0];const m=(yield T.normalizeCentralMeridian(K.fromJSON(h),
null,{signal:b}))[0];if(p.isNone(q)||p.isNone(m))return{candidates:[]};const r=new t.QueryEngineResult(this._searchFeatures(this._getQueryBBoxes(m.toJSON())),k,this);yield this._reschedule(()=>this._executeObjectIdsQuery(r),b);yield this._reschedule(()=>this._executeTimeQuery(r),b);yield this._reschedule(()=>this._executeAttributesQuery(r),b);b=q.toJSON();b=e?z.project(b,this.spatialReference):b;return r.createSnappingResponse({...a,point:b,distance:e?Math.max(h.xmax-h.xmin,h.ymax-h.ymin)/2:f},d.spatialReference)});
return function(a,b){return c.apply(this,arguments)}}();l.executeQueryForLatestObservations=function(){var c=n._asyncToGenerator(function*(a,b){if(!this.timeInfo||!this.timeInfo.trackIdField)throw new C("feature-store:unsupported-query","Missing timeInfo or timeInfo.trackIdField",{query:a,timeInfo:this.timeInfo});try{const d=yield this._executeQuery(a,{},b);yield this._reschedule(()=>this._filterLatest(d),b);return d.createQueryResponse()}catch(d){if(d!==u.QUERY_ENGINE_EMPTY_RESULT)throw d;return(new t.QueryEngineResult([],
a,this)).createQueryResponse()}});return function(a,b){return c.apply(this,arguments)}}();l.executeQueryForSummaryStatistics=function(){var c=n._asyncToGenerator(function*(a={},b,d){const {field:f,normalizationField:g,valueExpression:k}=b;return(yield this._getQueryEngineResultForStats(a,{field:f,normalizationField:g,valueExpression:k},d)).createSummaryStatisticsResponse(b)});return function(){return c.apply(this,arguments)}}();l.executeQueryForUniqueValues=function(){var c=n._asyncToGenerator(function*(a=
{},b,d){const {field:f,field2:g,field3:k,valueExpression:e}=b;return(yield this._getQueryEngineResultForStats(a,{field:f,field2:g,field3:k,valueExpression:e},d)).createUniqueValuesResponse(b)});return function(){return c.apply(this,arguments)}}();l.executeQueryForClassBreaks=function(){var c=n._asyncToGenerator(function*(a={},b,d){const {field:f,normalizationField:g,valueExpression:k}=b;return(yield this._getQueryEngineResultForStats(a,{field:f,normalizationField:g,valueExpression:k},d)).createClassBreaksResponse(b)});
return function(){return c.apply(this,arguments)}}();l.executeQueryForHistogram=function(){var c=n._asyncToGenerator(function*(a={},b,d){const {field:f,normalizationField:g,valueExpression:k}=b;return(yield this._getQueryEngineResultForStats(a,{field:f,normalizationField:g,valueExpression:k},d)).createHistogramResponse(b)});return function(){return c.apply(this,arguments)}}();l._schedule=function(){var c=n._asyncToGenerator(function*(a,b){return p.isSome(this._frameTask)?this._frameTask.schedule(a,
b):a(V.noBudget)});return function(a,b){return c.apply(this,arguments)}}();l._reschedule=function(){var c=n._asyncToGenerator(function*(a,b){return p.isSome(this._frameTask)?this._frameTask.reschedule(a,b):a(V.noBudget)});return function(a,b){return c.apply(this,arguments)}}();l._getAll=function(c){p.isNone(this._allItems)&&(this._allItems=this.featureStore.toArray());return new t.QueryEngineResult(this._allItems,c,this)};l._executeQuery=function(){var c=n._asyncToGenerator(function*(a,b,d){a=R.clone(a);
a=yield this._schedule(()=>u.normalizeQuery(a,this.definitionExpression,this.spatialReference),d);a=yield this._reschedule(()=>this._checkQuerySupport(a),d);a={...a,...b};const f=yield this._reschedule(()=>this._executeSceneFilterQuery(a,d),d),g=yield this._reschedule(()=>this._executeGeometryQuery(a,f,d),d);yield this._reschedule(()=>this._executeAggregateIdsQuery(g),d);yield this._reschedule(()=>this._executeObjectIdsQuery(g),d);yield this._reschedule(()=>this._executeTimeQuery(g),d);yield this._reschedule(()=>
this._executeAttributesQuery(g),d);return g});return function(a,b,d){return c.apply(this,arguments)}}();l._executeSceneFilterQuery=function(){var c=n._asyncToGenerator(function*(a,b){var d=this;if(p.isNone(a.sceneFilter))return null;const {outSR:f,returnGeometry:g,returnCentroid:k}=a;var e=this.featureStore.featureSpatialReference,h=a.sceneFilter.geometry;const q=p.isNone(e)||D.equals(e,h.spatialReference)?h:z.project(h,e);if(!q)return null;e=g||k;e=D.isValid(f)&&!D.equals(this.spatialReference,f)&&
e?function(){var w=n._asyncToGenerator(function*(v){return d._project(v,f)});return function(v){return w.apply(this,arguments)}}():w=>w;const m=this.featureAdapter;h=this._searchFeatures(this._getQueryBBoxes(q));if("disjoint"===a.sceneFilter.spatialRelationship){if(!h.length)return null;const w=new Set;for(var r of h)w.add(m.getObjectId(r));const v=yield this._reschedule(()=>this.featureStore.toArray(),b);r=yield this._reschedule(n._asyncToGenerator(function*(){const I=yield E.getSpatialQueryOperator("esriSpatialRelDisjoint",
q,d.geometryType,d.hasZ,d.hasM),A=yield d._runSpatialFilter(v,F=>!w.has(m.getObjectId(F))||I(m.getGeometry(F)),b);return new t.QueryEngineResult(A,a,d)}),b);return e(r)}if(!h.length)return new t.QueryEngineResult([],a,this);if(this._canExecuteSinglePass(q,a))return e(new t.QueryEngineResult(h,a,this));const L=yield E.getSpatialQueryOperator("esriSpatialRelContains",q,this.geometryType,this.hasZ,this.hasM);r=yield this._runSpatialFilter(h,w=>L(m.getGeometry(w)),b);return e(new t.QueryEngineResult(r,
a,this))});return function(a,b){return c.apply(this,arguments)}}();l._executeGeometryQuery=function(){var c=n._asyncToGenerator(function*(a,b,d){var f=this;if(p.isSome(b)&&0===b.items.length)return b;a=p.isSome(b)?b.query:a;const {geometry:g,outSR:k,spatialRel:e,returnGeometry:h,returnCentroid:q}=a;var m=this.featureStore.featureSpatialReference;const r=!g||p.isNone(m)||D.equals(m,g.spatialReference)?g:z.project(g,m),L=h||q,w=D.isValid(k)&&!D.equals(this.spatialReference,k),v=this._geometryQueryCache&&
p.isNone(b)?w&&L?JSON.stringify({originalFilterGeometry:g,spatialRelationship:e,outSpatialReference:k}):JSON.stringify({originalFilterGeometry:g,spatialRelationship:e}):null;m=v?this._geometryQueryCache.get(v):null;if(p.isSome(m))return new t.QueryEngineResult(m,a,this);m=function(){var G=n._asyncToGenerator(function*(B){w&&L&&(yield f._project(B,k));v&&f._geometryQueryCache.put(v,B.items,B.items.length+1);return B});return function(B){return G.apply(this,arguments)}}();if(!r)return m(p.isSome(b)?
b:this._getAll(a));const I=this.featureAdapter;let A=this._searchFeatures(this._getQueryBBoxes(g));if("esriSpatialRelDisjoint"===e){if(!A.length)return m(p.isSome(b)?b:this._getAll(a));const G=new Set;for(var F of A)G.add(I.getObjectId(F));const B=p.isSome(b)?b.items:yield this._reschedule(()=>this.featureStore.toArray(),d);F=yield this._reschedule(n._asyncToGenerator(function*(){const ha=yield E.getSpatialQueryOperator(e,r,f.geometryType,f.hasZ,f.hasM),ia=yield f._runSpatialFilter(B,W=>!G.has(I.getObjectId(W))||
ha(I.getGeometry(W)),d);return new t.QueryEngineResult(ia,a,f)}),d);return m(F)}if(p.isSome(b)){const G=new Q.PositionHint;A=A.filter(B=>0<=Q.indexOf(b.items,B,b.items.length,G))}if(!A.length)return m=new t.QueryEngineResult([],a,this),v&&this._geometryQueryCache.put(v,m.items,1),m;if(this._canExecuteSinglePass(r,a))return m(new t.QueryEngineResult(A,a,this));const ja=yield E.getSpatialQueryOperator(e,r,this.geometryType,this.hasZ,this.hasM);F=yield this._runSpatialFilter(A,G=>ja(I.getGeometry(G)),
d);return m(new t.QueryEngineResult(F,a,this))});return function(a,b,d){return c.apply(this,arguments)}}();l._executeAggregateIdsQuery=function(c){if(0!==c.items.length&&c.query.aggregateIds&&c.query.aggregateIds.length&&!p.isNone(this.aggregateAdapter)){var a=new Set;for(const d of c.query.aggregateIds)this.aggregateAdapter.getFeatureObjectIds(d).forEach(f=>a.add(f));var b=this.featureAdapter.getObjectId;c.items=c.items.filter(d=>a.has(b(d)))}};l._executeObjectIdsQuery=function(c){if(0!==c.items.length&&
c.query.objectIds&&c.query.objectIds.length){var a=new Set(c.query.objectIds),b=this.featureAdapter.getObjectId;c.items=c.items.filter(d=>a.has(b(d)))}};l._executeTimeQuery=function(c){if(0!==c.items.length){var a=U.getTimeOperator(this.timeInfo,c.query.timeExtent,this.featureAdapter);p.isNone(a)||(c.items=c.items.filter(a))}};l._executeAttributesQuery=function(c){if(0!==c.items.length){var a=y.getWhereClause(c.query.where,this.fieldsIndex);if(a){if(!a.isStandardized)throw new TypeError("Where clause is not standardized");
c.items=c.items.filter(b=>a.testFeature(b,this.featureAdapter))}}};l._runSpatialFilter=function(){var c=n._asyncToGenerator(function*(a,b,d){var f=this;if(!b)return a;if(p.isNone(this._frameTask))return a.filter(h=>b(h));let g=0;const k=[],e=function(){var h=n._asyncToGenerator(function*(q){for(;g<a.length;){const m=a[g++];b(m)&&(k.push(m),q.madeProgress());q.done&&(yield f._reschedule(r=>e(r),d))}});return function(q){return h.apply(this,arguments)}}();return this._reschedule(h=>e(h),d).then(()=>
k)});return function(a,b,d){return c.apply(this,arguments)}}();l._filterLatest=function(c){const {trackIdField:a,startTimeField:b,endTimeField:d}=this.timeInfo,f=d||b,g=new Map,k=this.featureAdapter.getAttribute;for(const e of c.items){const h=k(e,a),q=k(e,f),m=g.get(h);(!m||q>k(m,f))&&g.set(h,e)}c.items=Array.from(g.values())};l._canExecuteSinglePass=function(c,a){({spatialRel:a}=a);return E.canQueryWithRBush(c)&&("esriSpatialRelEnvelopeIntersects"===a||"esriGeometryPoint"===this.geometryType&&("esriSpatialRelIntersects"===
a||"esriSpatialRelContains"===a||"esriSpatialRelWithin"===a))};l._project=function(){var c=n._asyncToGenerator(function*(a,b){if(!b||D.equals(this.spatialReference,b))return a;const d=this.featureAdapter;b=yield z.projectMany(a.items.map(f=>u.getGeometry(this.geometryType,this.hasZ,this.hasM,d.getGeometry(f))),this.spatialReference,b);a.items=b.map((f,g)=>d.cloneWithGeometry(a.items[g],Y.convertFromGeometry(f,this.hasZ,this.hasM)));return a});return function(a,b){return c.apply(this,arguments)}}();
l._getQueryBBoxes=function(c){if(E.canQueryWithRBush(c)){if(K.isExtent(c))return[O.fromValues(c.xmin,c.ymin,c.xmax,c.ymax)];if(K.isPolygon(c))return c.rings.map(a=>O.fromValues(Math.min(a[0][0],a[2][0]),Math.min(a[0][1],a[2][1]),Math.max(a[0][0],a[2][0]),Math.max(a[0][1],a[2][1])))}return[X.getBoundsXY(O.create(),c)]};l._searchFeatures=function(c){for(const a of c)this.featureStore.forEachInBounds(a,b=>P.add(b));c=Array.from(P.values());P.clear();return c};l._checkStatisticsSupport=function(){var c=
n._asyncToGenerator(function*(a,b){if(0>a.distance||null!=a.geometryPrecision||a.multipatchOption||a.pixelSize||a.relationParam||a.text||a.outStatistics||a.groupByFieldsForStatistics||a.having||a.orderByFields)throw new C("feature-store:unsupported-query","Unsupported query options",{query:a});this._checkAttributesQuerySupport(a);return Promise.all([this._checkStatisticsParamsSupport(b),E.checkSpatialQuerySupport(a,this.geometryType,this.spatialReference),z.checkProjectionSupport(this.spatialReference,
a.outSR)]).then(()=>a)});return function(a,b){return c.apply(this,arguments)}}();l._checkStatisticsParamsSupport=function(){var c=n._asyncToGenerator(function*(a){var b=[];a.valueExpression&&({arcadeUtils:b}=yield ba.loadArcade(),b=b.extractFieldNames(a.valueExpression));a.field&&b.push(a.field);a.field2&&b.push(a.field2);a.field3&&b.push(a.field3);a.normalizationField&&b.push(a.normalizationField);if(!b.length)throw new C("feature-store:unsupported-query","params should have at least a field or valueExpression",
{params:a});y.validateFields(this.fieldsIndex,b,"params contains missing fields")});return function(a){return c.apply(this,arguments)}}();l._checkQuerySupport=function(){var c=n._asyncToGenerator(function*(a){if(0>a.distance||null!=a.geometryPrecision||a.multipatchOption||a.pixelSize||a.relationParam||a.text)throw new C("feature-store:unsupported-query","Unsupported query options",{query:a});this._checkAttributesQuerySupport(a);this._checkStatisticsQuerySupport(a);return Promise.all([E.checkSpatialQuerySupport(a,
this.geometryType,this.spatialReference),z.checkProjectionSupport(this.spatialReference,a.outSR)]).then(()=>a)});return function(a){return c.apply(this,arguments)}}();l._checkAttributesQuerySupport=function(c){const {outFields:a,orderByFields:b,returnDistinctValues:d,outStatistics:f}=c,g=f?f.map(k=>k.outStatisticFieldName&&k.outStatisticFieldName.toLowerCase()).filter(Boolean):[];if(b&&0<b.length){const k=b.map(e=>{const h=e.toLowerCase();return h.includes(" asc")?h.split(" asc")[0]:h.includes(" desc")?
h.split(" desc")[0]:e}).filter(e=>!g.includes(e));y.validateFields(this.fieldsIndex,k,"orderByFields contains missing fields")}if(a&&0<a.length)y.validateFields(this.fieldsIndex,a,"outFields contains missing fields");else if(d)throw new C("feature-store:unsupported-query","outFields should be specified for returnDistinctValues",{query:c});y.validateWhere(this.fieldsIndex,c.where)};l._checkStatisticsQuerySupport=function(c){const {outStatistics:a,groupByFieldsForStatistics:b,having:d}=c;var f=b&&b.length,
g=a&&a.length;if(d){if(!f||!g)throw new C("feature-store:unsupported-query","outStatistics and groupByFieldsForStatistics should be specified with having",{query:c});y.validateHaving(this.fieldsIndex,d,a)}if(g&&ca(a)){g=a.map(k=>k.onStatisticField).filter(Boolean);y.validateFields(this.fieldsIndex,g,"onStatisticFields contains missing fields");f&&y.validateFields(this.fieldsIndex,b,"groupByFieldsForStatistics contains missing fields");for(const k of a){const {onStatisticField:e,statisticType:h}=k;
if(("percentile_disc"===h||"percentile_cont"===h)&&"statisticParameters"in k){if({statisticParameters:f}=k,!f)throw new C("feature-store:unsupported-query","statisticParamters should be set for percentile type",{definition:k,query:c});}else if("count"!==h&&e&&y.hasInvalidFieldType(e,this.fieldsIndex))throw new C("feature-store:unsupported-query","outStatistics contains non-numeric fields",{definition:k,query:c});}}};l._getQueryEngineResultForStats=function(){var c=n._asyncToGenerator(function*(a,
b,d){a=R.clone(a);try{a=yield this._schedule(()=>u.normalizeQuery(a,this.definitionExpression,this.spatialReference),d);a=yield this._reschedule(()=>this._checkStatisticsSupport(a,b),d);const f=yield this._reschedule(()=>this._executeSceneFilterQuery(a,d),d),g=yield this._reschedule(()=>this._executeGeometryQuery(a,f,d),d);yield this._reschedule(()=>this._executeAggregateIdsQuery(g),d);yield this._reschedule(()=>this._executeObjectIdsQuery(g),d);yield this._reschedule(()=>this._executeTimeQuery(g),
d);yield this._reschedule(()=>this._executeAttributesQuery(g),d);return g}catch(f){if(f!==u.QUERY_ENGINE_EMPTY_RESULT)throw f;return new t.QueryEngineResult([],a,this)}});return function(a,b,d){return c.apply(this,arguments)}}();n._createClass(H,[{key:"featureAdapter",get:function(){return this.featureStore.featureAdapter}},{key:"fullExtent",get:function(){const c=this.featureStore.fullBounds;return p.isNone(c)?null:{xmin:c[0],ymin:c[1],xmax:c[2],ymax:c[3],spatialReference:u.cleanFromGeometryEngine(this.spatialReference)}}},
{key:"timeExtent",get:function(){if(!this.timeInfo)return null;this._timeExtent||(this._timeExtent=U.getTimeExtent(this.timeInfo,this.featureStore));return this._timeExtent}}]);return H}();const fa=J.create(),x=J.create(),P=new Set;M.Feature=function(H,l=null,c,a,b){this.attributes=H;this.geometry=c;this.centroid=a;this.filterFlags=b;this.groupId=-1;this.displayId=l};M.QueryEngine=ka;Object.defineProperties(M,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});