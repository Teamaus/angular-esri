/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import t from"../core/Accessor.js";import{HandleOwner as o,HandleOwnerMixin as i}from"../core/HandleOwner.js";import{m as r,d as s}from"./handleUtils.js";import{i as n,a,g as l,m as p}from"./maybe.js";import{whenOrAbort as m,throwIfAborted as d}from"../core/promiseUtils.js";import{watch as u,sync as c,initial as y}from"../core/reactiveUtils.js";import{property as h}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"./ensureType.js";import{subclass as j}from"../core/accessorSupport/decorators/subclass.js";import{O as g}from"./ObservableValue.js";import{m as f,h as v}from"./elevationInfoUtils.js";import{T as b}from"./TileKey.js";import{s as S}from"./vec3.js";import{c as w}from"./vec4f64.js";import{c as I,g as _,h as O}from"./boundedPlane.js";import{s as k}from"./layerViewUtils.js";import{V as C}from"./FeatureTileDescriptor3D.js";import{c as H,m as T}from"./queryEngineUtils.js";import P from"../core/Handles.js";import U from"../geometry/Polygon.js";import{t as E,r as F}from"./aaBoundingRect.js";import{T as M}from"./TileTreeDebugger.js";import{W as D}from"./WorkerHandle.js";import{f as R}from"./typeUtils.js";import L from"../geometry/Point.js";import x from"../layers/support/LOD.js";import z from"../layers/support/TileInfo.js";import{d as A}from"./debugFlags2.js";import"./get.js";import"./utils.js";import"./metadata.js";import"./object.js";import"./Logger.js";import"../config.js";import"./string.js";import"./ArrayPool.js";import"./tracking.js";import"./watch.js";import"../core/scheduling.js";import"./nextTick.js";import"../core/Error.js";import"./WatchUpdatingTracking.js";import"./SimpleObservable.js";import"./unitConversionUtils.js";import"./lengthUtils.js";import"./unitUtils.js";import"./jsonMap.js";import"./projectionEllipsoid.js";import"../geometry/SpatialReference.js";import"../core/JSONSupport.js";import"./writer.js";import"./Ellipsoid.js";import"./common.js";import"./mathUtils.js";import"./ray.js";import"./byteSizeEstimations.js";import"./mat3f64.js";import"./mat4f64.js";import"./quatf64.js";import"./vec2f64.js";import"./mat4.js";import"./vector.js";import"./lineSegment.js";import"./plane.js";import"./mathUtils2.js";import"./SnappingManager.js";import"../core/Evented.js";import"../geometry/projection.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"./reader.js";import"../geometry/support/webMercatorUtils.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/Multipoint.js";import"./zmUtils.js";import"./pe.js";import"./assets.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../geometry/Polyline.js";import"./extentUtils.js";import"./geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"./zscale.js";import"./RightAngleSnappingHint.js";import"./vec2.js";import"./QueryEngineResult.js";import"./quantizationUtils.js";import"../geometry/support/jsonUtils.js";import"./ItemCache.js";import"./MemCache.js";import"../core/sql/WhereClause.js";import"./_commonjsHelpers.js";import"./utils13.js";import"./generateRendererUtils.js";import"./colorRamps.js";import"../rest/support/AlgorithmicColorRamp.js";import"../Color.js";import"./colorUtils.js";import"./enumeration.js";import"../rest/support/ColorRamp.js";import"../rest/support/MultipartColorRamp.js";import"../symbols/Symbol.js";import"./projectionSupport.js";import"./json.js";import"./SnappingCandidate.js";import"./utils21.js";import"../geometry/support/normalizeUtils.js";import"./normalizeUtilsCommon.js";import"./simplify.js";import"../geometry.js";import"./utils4.js";import"./utils5.js";import"./featureConversionUtils.js";import"./OptimizedFeature.js";import"./OptimizedFeatureSet.js";import"../layers/support/fieldUtils.js";import"./arcadeOnDemand.js";import"./Settings2.js";import"./geometry2dUtils.js";import"./viewUtils.js";import"./screenUtils.js";import"../core/Collection.js";import"./shared.js";import"../views/interactive/snapping/SnappingOptions.js";import"../views/interactive/snapping/FeatureSnappingLayerSource.js";import"./VertexSnappingCandidate.js";import"./PointSnappingHint.js";import"../Graphic.js";import"../PopupTemplate.js";import"../core/Clonable.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"../popup/support/FieldInfoFormat.js";import"./date.js";import"./number.js";import"./locale.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/mixins/ChartMediaInfo.js";import"../popup/content/mixins/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"./chartMediaInfoUtils.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/RelationshipContent.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../support/actions/ActionBase.js";import"../core/Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"./utils2.js";import"../symbols/edges/Edges3D.js";import"./materialUtils.js";import"./opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"./Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"./lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"./utils3.js";import"./colors.js";import"./symbolLayerUtils3D.js";import"./aaBoundingBox.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"./persistableUrlUtils.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"./collectionUtils.js";import"../portal/Portal.js";import"../core/Loadable.js";import"../core/Promise.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/support/StyleOrigin.js";import"./Thumbnail.js";import"./calloutUtils.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/support/Symbol3DVerticalOffset.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"./urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../core/workers/workers.js";import"../core/workers/Connection.js";import"./Queue.js";import"../core/workers/RemoteClient.js";import"../intl.js";import"./messages.js";function N(e,t){return _(t.extent,V),O(V,S(J,e.x,e.y,0))}const V=I(),J=w();let q=class extends t{constructor(e){super(e),this.pointOfInterest=null}get tiles(){const e=this.tilesCoveringView,t=n(this.pointOfInterest)?this.pointOfInterest:this.view.center;return e.sort(((e,o)=>N(t,e)-N(t,o))),e}_scaleEnabled(){return k(this.view.scale,this.layer.minScale||0,this.layer.maxScale||0)}get tilesCoveringView(){if(!this.view.ready||!this.view.featuresTilingScheme||!this.view.state||a(this.tileInfo))return[];if(!this._scaleEnabled)return[];const{spans:e,lodInfo:t}=this.view.featuresTilingScheme.getTileCoverage(this.view.state,0),{level:o}=t,i=[];for(const{row:r,colFrom:s,colTo:n}of e)for(let e=s;e<=n;e++){const s=t.normalizeCol(e),n=new b(null,o,r,s);this.tileInfo.updateTileInfo(n),i.push(n)}return i}get tileInfo(){return this.view.featuresTilingScheme?.tileInfo??null}get tileSize(){return n(this.tileInfo)?this.tileInfo.size[0]:256}initialize(){this.addHandles(u((()=>this.view?.state?.viewpoint),(()=>this.notifyChange("tilesCoveringView")),c))}};e([h({readOnly:!0})],q.prototype,"tiles",null),e([h({readOnly:!0})],q.prototype,"_scaleEnabled",null),e([h({readOnly:!0})],q.prototype,"tilesCoveringView",null),e([h({readOnly:!0})],q.prototype,"tileInfo",null),e([h({readOnly:!0})],q.prototype,"tileSize",null),e([h({constructOnly:!0})],q.prototype,"view",void 0),e([h({constructOnly:!0})],q.prototype,"layer",void 0),e([h()],q.prototype,"pointOfInterest",void 0),q=e([j("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiles2D")],q);let W=class extends o{constructor(e){super(e),this.pointOfInterest=null}get tiles(){const e=this.tilesCoveringView,t=this._effectivePointOfInterest;if(n(t)){const o=e.map((e=>N(t,e)));for(let i=1;i<o.length;i++)if(o[i-1]>o[i])return e.sort(((e,o)=>N(t,e)-N(t,o))),e.slice()}return e}get tilesCoveringView(){return this._filterTiles(this.view.featureTiles?.tiles?.toArray()).map(G)}get tileInfo(){return this.view.featureTiles?.tilingScheme.toTileInfo()??null}get tileSize(){return this.view.featureTiles?.tileSize??256}get _effectivePointOfInterest(){const e=this.pointOfInterest;return n(e)?e:this.view.pointsOfInterest?.focus.location}initialize(){this.handles.add(u((()=>this.view.featureTiles),(e=>{this.handles.remove($),e&&this.handles.add(e.addClient(),$)}),y))}_filterTiles(e){return a(e)?[]:e.filter((e=>Math.abs(e.measures.screenRect[3]-e.measures.screenRect[1])>Z&&e.measures.visibility===C.VISIBLE_ON_SURFACE))}};function G({lij:[e,t,o],extent:i}){return new b(`${e}/${t}/${o}`,e,t,o,i)}e([h({readOnly:!0})],W.prototype,"tiles",null),e([h({readOnly:!0})],W.prototype,"tilesCoveringView",null),e([h({readOnly:!0})],W.prototype,"tileInfo",null),e([h({readOnly:!0})],W.prototype,"tileSize",null),e([h({constructOnly:!0})],W.prototype,"view",void 0),e([h()],W.prototype,"pointOfInterest",void 0),e([h()],W.prototype,"_effectivePointOfInterest",null),W=e([j("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiles3D")],W);const Z=50,$="feature-tiles";let B=class extends M{constructor(e){super(e),this._handles=new P}initialize(){const e=setInterval((()=>this._fetchDebugInfo()),2e3);this._handles.add(r((()=>clearInterval(e))))}destroy(){this._handles.destroy()}getTiles(){if(!this._debugInfo)return[];const e=new Map,t=new Map;this._debugInfo.storedTiles.forEach((t=>{e.set(t.data.id,t.featureCount)})),this._debugInfo.pendingTiles.forEach((o=>{e.set(o.data.id,o.featureCount),t.set(o.data.id,o.state)}));const o=o=>{const i=t.get(o),r=e.get(o)??"?";return i?`${i}:${r}\n${o}`:`store:${r}\n${o}`},i=new Map;return this._debugInfo.storedTiles.forEach((e=>{i.set(e.data.id,e.data)})),this._debugInfo.pendingTiles.forEach((e=>{i.set(e.data.id,e.data)})),Array.from(i.values()).map((e=>({lij:[e.level,e.row,e.col],geometry:U.fromExtent(E(e.extent,this.view.spatialReference)),label:o(e.id)})))}_fetchDebugInfo(){this.handle.getDebugInfo(null).then((e=>{this._debugInfo=e,this.update()}))}};e([h({constructOnly:!0})],B.prototype,"handle",void 0),B=e([j("esri.views.interactive.snapping.featureSources.WorkerTileTreeDebugger")],B);let Q=class extends o{constructor(e){super(e),this.schedule=null,this.hasZ=!1,this.elevationAlignPointsInFeatures=async e=>{const t=[];for(const{points:o}of e)for(const{z:e}of o)t.push(e);return{elevations:t,drapedObjectIds:new Set,failedObjectIds:new Set}},this.queryForSymbologySnapping=async()=>({candidates:[],sourceCandidateIndices:[]}),this.availability=0,this._workerHandleUpdating=!0,this._editId=0}get updating(){return this.updatingHandles.updating||this._workerHandleUpdating}destroy(){this._workerHandle.destroy()}initialize(){this._workerHandle=new K(this.schedule,{alignElevation:async(e,{signal:t})=>({result:await this.elevationAlignPointsInFeatures(e.points,t)}),getSymbologyCandidates:async(e,{signal:t})=>({result:await this.queryForSymbologySnapping(e,t)})}),this.handles.add([this._workerHandle.on("notify-updating",(({updating:e})=>this._workerHandleUpdating=e)),this._workerHandle.on("notify-availability",(({availability:e})=>this._set("availability",e)))])}async setup(e,t){const o=this._serviceInfoFromLayer(e.layer);if(a(o))return;const i={configuration:this._convertConfiguration(e.configuration),serviceInfo:o,spatialReference:e.spatialReference.toJSON(),hasZ:this.hasZ,elevationInfo:e.layer.elevationInfo?.toJSON()};await this.updatingHandles.addPromise(this._workerHandle.invokeMethod("setup",i,t)),this.updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},t))}async configure(e,t){const o=this._convertConfiguration(e);await this.updatingHandles.addPromise(this._workerHandle.invokeMethod("configure",o,t)),this.updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},t))}async refresh(e){await this.updatingHandles.addPromise(this._workerHandle.invokeMethod("refresh",{},e)),this.updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},e))}async fetchCandidates(e,t){const o={distance:e.distance,point:e.coordinateHelper.vectorToPoint(e.point).toJSON(),types:e.types,filter:n(e.filter)?e.filter.toJSON():null};return this._workerHandle.invoke(o,t)}async updateTiles(e,t){const o={tiles:e.tiles,tileInfo:n(e.tileInfo)?e.tileInfo.toJSON():null,tileSize:e.tileSize};await this.updatingHandles.addPromise(this._workerHandle.invokeMethod("updateTiles",o,t)),this.updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},t))}async applyEdits(e,t){const o=this._editId++,i={id:o};await this.updatingHandles.addPromise(this._workerHandle.invokeMethod("beginApplyEdits",i,t));const r=await this.updatingHandles.addPromise(m(e.result,t)),s={id:o,edits:{addedFeatures:r.addedFeatures?.map((({objectId:e})=>e)).filter(n)??[],deletedFeatures:r.deletedFeatures?.map((({objectId:e,globalId:t})=>({objectId:e,globalId:t})))??[],updatedFeatures:r.updatedFeatures?.map((({objectId:e})=>e)).filter(n)??[]}};await this.updatingHandles.addPromise(this._workerHandle.invokeMethod("endApplyEdits",s,t)),this.updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},t))}getDebugInfo(e){return this._workerHandle.invokeMethod("getDebugInfo",{},e)}async notifyElevationSourceChange(){await this._workerHandle.invokeMethod("notifyElevationSourceChange",{})}async notifySymbologyChange(){await this._workerHandle.invokeMethod("notifySymbologyChange",{})}async setSymbologySnappingSupported(e){await this._workerHandle.invokeMethod("setSymbologySnappingSupported",e)}_convertConfiguration(e){return{filter:n(e.filter)?e.filter.toJSON():null,customParameters:e.customParameters,viewType:e.viewType}}_serviceInfoFromLayer(e){return"multipatch"===e.geometryType||"mesh"===e.geometryType?null:{url:e.parsedUrl?.path??"",fields:e.fields.map((e=>e.toJSON())),geometryType:R.toJSON(e.geometryType),capabilities:e.capabilities,objectIdField:e.objectIdField,globalIdField:e.globalIdField,spatialReference:e.spatialReference.toJSON(),timeInfo:e.timeInfo?.toJSON()}}};e([h({constructOnly:!0})],Q.prototype,"schedule",void 0),e([h({constructOnly:!0})],Q.prototype,"hasZ",void 0),e([h({constructOnly:!0})],Q.prototype,"elevationAlignPointsInFeatures",void 0),e([h({constructOnly:!0})],Q.prototype,"queryForSymbologySnapping",void 0),e([h({readOnly:!0})],Q.prototype,"updating",null),e([h({readOnly:!0})],Q.prototype,"availability",void 0),e([h()],Q.prototype,"_workerHandleUpdating",void 0),Q=e([j("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceSnappingSourceWorkerHandle")],Q);class K extends D{constructor(e,t){super("FeatureServiceSnappingSourceWorker","fetchCandidates",{},e,{strategy:"dedicated",client:t})}}let X=class extends t{constructor(e){super(e),this.pointOfInterest=null}get tiles(){return[new b("0/0/0",0,0,0,F(-1e8,-1e8,1e8,1e8))]}get tileInfo(){return new z({origin:new L({x:-1e8,y:1e8,spatialReference:this.layer.spatialReference}),size:[512,512],lods:[new x({level:0,scale:1,resolution:390625})],spatialReference:this.layer.spatialReference})}get tileSize(){return this.tileInfo.size[0]}};e([h({readOnly:!0})],X.prototype,"tiles",null),e([h({readOnly:!0})],X.prototype,"tileInfo",null),e([h({readOnly:!0})],X.prototype,"tileSize",null),e([h({constructOnly:!0})],X.prototype,"layer",void 0),e([h()],X.prototype,"pointOfInterest",void 0),X=e([j("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTilesSimple")],X);let Y=class extends(i(t)){constructor(e){super(e)}get _updateTilesParameters(){return{tiles:this._tilesOfInterest.tiles,tileInfo:this._tilesOfInterest.tileInfo,tileSize:this._tilesOfInterest.tileSize}}get updating(){return this._workerHandle.updating||this.updatingHandles.updating}get configuration(){const{view:e}=this,t=n(e)?e.type:"2d";return{filter:this._layer.createQuery(),customParameters:this._layer.customParameters,viewType:t}}get availability(){return this._workerHandle.availability}get _layer(){return this.layerSource.layer}initialize(){const e=this.view;if(n(e))switch(e.type){case"2d":this._tilesOfInterest=new q({view:e,layer:this._layer}),this._workerHandle=new Q;break;case"3d":{const{resourceController:t}=e,o=this._layer,i=e.whenLayerView(o);this._tilesOfInterest=new W({view:e}),this._workerHandle=new Q({schedule:e=>t.schedule(e),hasZ:this._layer.hasZ&&(this._layer.returnZ??!0),elevationAlignPointsInFeatures:async(e,t)=>{const o=await i;return d(t),o.elevationAlignPointsInFeatures(e,t)},queryForSymbologySnapping:async(e,t)=>{const o=await i;return d(t),o.queryForSymbologySnapping(e,t)}});const r=new g(null);i.then((e=>r.set(e))),this.addHandles([e.elevationProvider.on("elevation-change",(({context:e})=>{const{elevationInfo:t}=o;f(e,t)&&this._workerHandle?.notifyElevationSourceChange()})),u((()=>o.elevationInfo),(()=>this._workerHandle?.notifyElevationSourceChange()),y),u((()=>l(r.get(),(({processor:e})=>e?.renderer))),(()=>this._workerHandle?.notifySymbologyChange()),y),u((()=>p(r.get(),!1,(e=>e.symbologySnappingSupported))),(e=>this._workerHandle?.setSymbologySnappingSupported(e)),y)]);break}}else this._tilesOfInterest=new X({layer:this._layer}),this._workerHandle=new Q;this.handles.add([s(this._workerHandle)]),this._workerHandle.setup({layer:this._layer,spatialReference:this.spatialReference,configuration:this.configuration},null),this.updatingHandles.add((()=>this._updateTilesParameters),(()=>this._workerHandle.updateTiles(this._updateTilesParameters,null)),y),this.handles.add([u((()=>this.configuration),(e=>this._workerHandle.configure(e,null)),c)]),n(e)&&this.handles.add(u((()=>A.FEATURE_SERVICE_SNAPPING_SOURCE_TILE_TREE_SHOW_TILES),(t=>{t&&!this._debug?(this._debug=new B({view:e,handle:this._workerHandle}),this.handles.add(s(this._debug),"debug")):!t&&this._debug&&this.handles.remove("debug")}),y)),this.handles.add(this.layerSource.layer.on("apply-edits",(e=>{this._workerHandle.applyEdits(e,null)})))}refresh(){this._workerHandle.refresh(null)}async fetchCandidates(e,t){const{coordinateHelper:o,elevationInfo:i,point:r}=e;this._tilesOfInterest.pointOfInterest=o.vectorToPoint(r);const s=o.hasZ()?v:i,n=this._getGroundElevation;return(await this._workerHandle.fetchCandidates({...e},t)).candidates.map((e=>H(e,o,s,n)))}getDebugInfo(e){return this._workerHandle.getDebugInfo(e)}get _getGroundElevation(){return T(this.view)}};e([h({constructOnly:!0})],Y.prototype,"spatialReference",void 0),e([h({constructOnly:!0})],Y.prototype,"layerSource",void 0),e([h({constructOnly:!0})],Y.prototype,"view",void 0),e([h()],Y.prototype,"_tilesOfInterest",void 0),e([h({readOnly:!0})],Y.prototype,"_updateTilesParameters",null),e([h({readOnly:!0})],Y.prototype,"updating",null),e([h({readOnly:!0})],Y.prototype,"configuration",null),e([h({readOnly:!0})],Y.prototype,"availability",null),e([h()],Y.prototype,"_getGroundElevation",null),Y=e([j("esri.views.interactive.snapping.featureSources.FeatureServiceSnappingSource")],Y);export{Y as FeatureServiceSnappingSource};