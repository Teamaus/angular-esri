// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("require exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/HandleOwner ../../../core/Handles ../../../core/MapUtils ../../../core/maybe ../../../core/promiseUtils ../../../core/reactiveUtils ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../../../chunks/vec2 ../../../chunks/vec3 ../../../chunks/vec3f64 ../../../layers/graphics/data/QueryEngineResult ../../../support/elevationInfoUtils ./SnappingConstraint ./SnappingDomain ./snappingUtils ./candidates/EdgeSnappingCandidate ./candidates/FeatureSnappingCandidate ./candidates/RightAngleSnappingCandidate ../support/viewUtils".split(" "),
function(t,n,A,r,J,K,L,e,D,u,v,W,X,M,N,O,B,E,w,P,Q,z,R,S,F,G){function C(p,g,f,a,c,b,{coordinateHelper:d}){g=O.copy(T,g);g[0]+=f;g[1]+=a;g[2]+=c;f=G.vectorToScreenPoint(g,d.spatialReference,w.absoluteHeightElevationInfo,b);return z.screenDistance(f,p)}n.FeatureSnappingEngine=function(p){function g(a){a=p.call(this,a)||this;a.options=null;a._domain=Q.SnappingDomain.FEATURE;a._sourceModules={featureService:{module:null,loader:null},featureCollection:{module:null,loader:null},graphics:{module:null,loader:null},
notes:{module:null,loader:null},scene:{module:null,loader:null}};return a}A._inheritsLoose(g,p);var f=g.prototype;f.initialize=function(){this.updatingHandles.add(()=>this.snappingSources,()=>this.notifyChange("updating"),u.sync);e.isSome(this.view)&&this.handles.add([this.view.on("layerview-create",a=>this._updateLayerView(a.layer,a.layerView)),this.view.on("layerview-destroy",a=>this._updateLayerView(a.layer,null))])};f._updateLayerView=function(a,c){for(const [,b]of this.snappingSources)b.snappingSource.layerSource.layer===
a&&(b.layerView=c)};f.destroy=function(){this._set("options",null);for(const [,a]of this.snappingSources)a.destroy()};f.fetchCandidates=function(){var a=A._asyncToGenerator(function*(c,b,d,h){if(!(b&this._domain)||e.isNone(this.options)||!this.options.effectiveFeatureEnabled)return[];var m=[];b=this._computeScreeenSizeDistanceParameters(c,d);const k={distance:b,point:c,coordinateHelper:d.coordinateHelper,types:this._types};for(const [,{snappingSource:l,layerView:q}]of this.snappingSources)!l.layerSource.enabled||
e.isSome(q)&&q.suspended||m.push(l.fetchCandidates(k,h).then(x=>x.filter(y=>!this._candidateIsExcluded(l,y,d.excludeFeature))));m=(yield D.eachAlwaysValues(m)).flat();this._addRightAngleCandidates(m,c,b,d);D.throwIfAborted(h);z.sortCandidatesInPlace(c,m,d.coordinateHelper);return m});return function(c,b,d,h){return a.apply(this,arguments)}}();f._addRightAngleCandidates=function(a,c,b,d){var h=e.isSome(d.vertexHandle)?d.vertexHandle.rightEdge?.rightVertex?.pos:e.isSome(d.editGeometryOperations)&&"polygon"===
d.editGeometryOperations.data.type?e.unwrap(d.editGeometryOperations.data.components[0]?.getFirstVertex())?.pos:null,m=e.isSome(d.vertexHandle)?d.vertexHandle.leftEdge?.leftVertex?.pos:e.isSome(d.editGeometryOperations)?e.unwrap(d.editGeometryOperations.data.components[0]?.getLastVertex())?.pos:null,{view:k}=this;h=z.convertPointElevation(h,k,d);m=z.convertPointElevation(m,k,d);k=a.length;for(let l=0;l<k;l++)this._addRightAngleCandidate(a[l],m,c,b,d,a),this._addRightAngleCandidate(a[l],h,c,b,d,a)};
f._addRightAngleCandidate=function(a,c,b,d,h,m){var k=a instanceof R.EdgeSnappingCandidate,l=k&&N.equals(a.constraint.start,a.constraint.end);e.isNone(c)||!k||l||(k=a.constraint.closestTo(c),l=(k[0]-b[0])/d.x,b=(k[1]-b[1])/d.y,1>=l*l+b*b&&(h=h.coordinateHelper,a=new F.RightAngleSnappingCandidate({coordinateHelper:h,targetPoint:k,otherVertex:c,otherVertexType:F.OtherVertexType.NEXT,previousVertex:a.constraint.start,constraint:new P.VerticalHalfPlaneConstraint(h,c,k),objectId:a.objectId,elevationInfo:a.elevationInfo}),
m.push(a)))};f._computeScreeenSizeDistanceParameters=function(a,c){let b=e.isSome(this.options)?this.options.distance*("touch"===c.pointer?this.options.touchSensitivityMultiplier:1):0;return e.isNone(this.view)?{x:b,y:b,z:b,distance:b}:"2d"===this.view.type?(b*=this.view.resolution,{x:b,y:b,z:b,distance:b}):this._computeScreenSizeDistanceParameters3D(a,b,this.view,c)};f._computeScreenSizeDistanceParameters3D=function(a,c,b,d){const {coordinateHelper:h,elevationInfo:m}=d;var {spatialReference:k}=h,
l=h.hasZ()?w.absoluteHeightElevationInfo:m;a=h.toXYZ(a,U);a[2]=w.getConvertedElevationFromVector(b,a,k,l,w.absoluteHeightElevationInfo);b.renderCoordsHelper.toRenderCoords(a,k,H);l=b.state.camera.computeScreenPixelSizeAt(H);const q=l*b.renderCoordsHelper.unitInMeters/b.mapCoordsHelper.unitInMeters,x=c*q,y=G.vectorToScreenPoint(a,k,w.absoluteHeightElevationInfo,b);k=C(y,a,q,0,0,b,d);const I=C(y,a,0,q,0,b,d);b=C(y,a,0,0,q,b,d);return{x:0===k?0:x/k,y:0===I?0:x/I,z:0===b?0:x/b,distance:l*c}};f._candidateIsExcluded=
function(a,c,b){if(e.isNone(b))return!1;c=this._getCandidateObjectId(c);if(e.isNone(c))return!1;a=a.layerSource.layer;return"graphics"===a.type?b.uid===c:b.sourceLayer===a&&b.attributes&&"objectIdField"in a?b.attributes[a.objectIdField]===c:!1};f._getCandidateObjectId=function(a){return a instanceof S.FeatureSnappingCandidate?a.objectId:null};f._createSourceInfo=function(a){const c=this._createFeatureSnappingSourceType(a);if(e.isNone(c))return null;if("loading"in c)return this.updatingHandles.addPromise(c.loading.then(()=>
{this.destroyed||this.notifyChange("snappingSources")})),null;const b=e.isSome(this.view)?this.view.allLayerViews.find(d=>d.layer===a.layer):null;return new V(c.source,b)};f._createFeatureSnappingSourceType=function(a){switch(a.layer.type){case "feature":case "geojson":case "csv":case "oriented-imagery":case "subtype-group":case "wfs":return this._createFeatureSnappingSourceFeatureLayer(a);case "graphics":return this._createFeatureSnappingSourceGraphicsLayer(a);case "map-notes":return this._createFeatureSnappingSourceMapNotesLayer(a);
case "scene":case "building-scene":return this._createFeatureSnappingSourceSceneLayer(a)}return null};f._createFeatureSnappingSourceSceneLayer=function(a){const {view:c}=this;if(e.isNone(c)||"3d"!==c.type)return null;const b=this._getSourceModule("scene");return e.isSome(b.module)?{source:new b.module.SceneLayerSnappingSource({layerSource:a,view:c})}:{loading:b.loader}};f._createFeatureSnappingSourceFeatureLayer=function(a){switch(a.layer.source.type){case "feature-layer":case "oriented-imagery":var c=
this._getSourceModule("featureService");return e.isSome(c.module)?{source:new c.module.FeatureServiceSnappingSource({spatialReference:this.spatialReference,view:this.view,layerSource:a})}:{loading:c.loader};case "memory":case "csv":case "geojson":case "wfs":if("mesh"!==a.layer.geometryType)return c=this._getSourceModule("featureCollection"),e.isSome(c.module)?{source:new c.module.FeatureCollectionSnappingSource({layerSource:a,view:this.view})}:{loading:c.loader}}return null};f._createFeatureSnappingSourceGraphicsLayer=
function(a){const c=this._getSourceModule("graphics");return e.isSome(c.module)?{source:new c.module.GraphicsSnappingSource({getGraphicsLayers:()=>[a.layer],spatialReference:this.spatialReference,view:this.view,layerSource:a})}:{loading:c.loader}};f._createFeatureSnappingSourceMapNotesLayer=function(a){const c=this._getSourceModule("notes");return e.isSome(c.module)?{source:new c.module.GraphicsSnappingSource({getGraphicsLayers:()=>e.isSome(a.layer.sublayers)?a.layer.sublayers.toArray():[],spatialReference:this.spatialReference,
view:this.view,layerSource:a})}:{loading:c.loader}};f._getSourceModule=function(a){const c=this._sourceModules[a];return e.isNone(c.loader)?(a=this._loadSourceModule(a).then(b=>{c.module=b}),c.loader=a,{module:c.module,loader:a}):{module:c.module,loader:c.loader}};f._loadSourceModule=function(a){const c=this.updatingHandles;switch(a){case "featureService":return c.addPromise(new Promise((b,d)=>t(["./featureSources/FeatureServiceSnappingSource"],b,d)));case "featureCollection":return c.addPromise(new Promise((b,
d)=>t(["./featureSources/FeatureCollectionSnappingSource"],b,d)));case "graphics":return c.addPromise(new Promise((b,d)=>t(["./featureSources/GraphicsSnappingSource"],b,d)));case "notes":return c.addPromise(new Promise((b,d)=>t(["./featureSources/GraphicsSnappingSource"],b,d)));case "scene":return c.addPromise(new Promise((b,d)=>t(["./featureSources/SceneLayerSnappingSource"],b,d)))}return null};A._createClass(g,[{key:"updating",get:function(){return L.someMap(this.snappingSources,({snappingSource:a})=>
a.updating)||this.updatingHandles.updating}},{key:"snappingSources",get:function(){const a=this._get("snappingSources")||new Map,c=new Map;if(e.isSome(this.options)&&e.isSome(this.options.featureSources))for(const d of this.options.featureSources.items){const h=d.layer.uid;var b=a.get(h);b?(a.delete(h),c.set(h,b)):d.layer.loaded?(b=this._createSourceInfo(d),e.isSome(b)&&c.set(h,b)):this.updatingHandles.addPromise(d.layer.load())}for(const [,d]of a)d.destroy();return c}},{key:"_types",get:function(){return E.SnappingTypes.EDGE|
E.SnappingTypes.VERTEX}}]);return g}(J.HandleOwner);r.__decorate([v.property({constructOnly:!0})],n.FeatureSnappingEngine.prototype,"spatialReference",void 0);r.__decorate([v.property({constructOnly:!0})],n.FeatureSnappingEngine.prototype,"view",void 0);r.__decorate([v.property()],n.FeatureSnappingEngine.prototype,"options",void 0);r.__decorate([v.property({readOnly:!0})],n.FeatureSnappingEngine.prototype,"updating",null);r.__decorate([v.property({readOnly:!0})],n.FeatureSnappingEngine.prototype,
"snappingSources",null);n.FeatureSnappingEngine=r.__decorate([M.subclass("esri.views.interactive.snapping.FeatureSnappingEngine")],n.FeatureSnappingEngine);let V=function(){function p(g,f){this.snappingSource=g;this.layerView=f;this.handles=new K;f=this.snappingSource.layerSource.layer;"refresh"in f&&this.handles.add(f.on("refresh",()=>g.refresh()));this.handles.add([u.watch(()=>g.updating,a=>g.layerSource.updating=a,u.syncAndInitial),u.watch(()=>g.availability,a=>g.layerSource.availability=a,u.syncAndInitial)])}
p.prototype.destroy=function(){this.snappingSource.destroy();this.handles.destroy()};return p}();const U=B.create(),H=B.create(),T=B.create();Object.defineProperties(n,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});