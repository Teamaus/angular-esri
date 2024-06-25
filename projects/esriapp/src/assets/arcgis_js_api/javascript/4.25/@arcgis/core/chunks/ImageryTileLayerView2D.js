/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import t from"../Graphic.js";import{L as s}from"./Logger.js";import{i,u as r}from"./maybe.js";import{debounce as o,isAbortError as a,eachAlways as l}from"../core/promiseUtils.js";import{watch as n,syncAndInitial as p,sync as m,initial as h}from"../core/reactiveUtils.js";import{property as c}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"./ensureType.js";import{subclass as u}from"../core/accessorSupport/decorators/subclass.js";import{h as d}from"./multidimensionalUtils.js";import{R as y,F as b}from"./RasterVFDisplayObject.js";import{L as f}from"./LayerView2D.js";import{c as g}from"./aaBoundingRect.js";import{m as j}from"../views/2d/ViewState.js";import{R as w,b as _,B as v}from"./WGLContainer.js";import{c as P}from"./mat3f32.js";import{T as S}from"./TiledDisplayObject.js";import{W as T}from"./enums4.js";import{T as I}from"./TileContainer.js";import"../geometry.js";import{HandleOwner as C}from"../core/HandleOwner.js";import R from"../geometry/Point.js";import U from"../layers/support/PixelBlock.js";import V from"../layers/support/TileInfo.js";import{u as x,c as D,r as L,g as k}from"./RawBlockCache.js";import{e as z}from"./pixelUtils.js";import{g as F,h as B}from"./rasterProjectionHelper.js";import{a as G,T as E}from"./TileStrategy.js";import{T as M}from"./TileInfoView.js";import"./TileKey2.js";import{g as O}from"./capabilities2.js";import W from"../geometry/Extent.js";import{c as q}from"./util.js";import{h as A}from"./vectorFieldUtils.js";import{s as Q,m as H}from"./mat3.js";import{I as J}from"./ImageryTileLayerView.js";import N from"../views/layers/LayerView.js";import{R as K}from"./RefreshableLayerView.js";import"../PopupTemplate.js";import"../core/Clonable.js";import"../core/Accessor.js";import"../core/Handles.js";import"./get.js";import"./utils.js";import"./handleUtils.js";import"./metadata.js";import"./object.js";import"./ArrayPool.js";import"./tracking.js";import"./watch.js";import"../core/scheduling.js";import"./nextTick.js";import"../core/Error.js";import"../config.js";import"./string.js";import"../core/Collection.js";import"../core/Evented.js";import"./shared.js";import"./SimpleObservable.js";import"../core/JSONSupport.js";import"../core/accessorSupport/decorators/cast.js";import"./reader.js";import"./writer.js";import"../layers/support/fieldUtils.js";import"./arcadeOnDemand.js";import"../geometry/SpatialReference.js";import"../geometry/Geometry.js";import"../geometry/support/webMercatorUtils.js";import"./Ellipsoid.js";import"../geometry/Multipoint.js";import"./zmUtils.js";import"../geometry/Polygon.js";import"./extentUtils.js";import"../geometry/Polyline.js";import"./typeUtils.js";import"./jsonMap.js";import"../geometry/support/jsonUtils.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"./enumeration.js";import"../popup/support/FieldInfoFormat.js";import"./date.js";import"./number.js";import"./locale.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/mixins/ChartMediaInfo.js";import"../popup/content/mixins/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"./chartMediaInfoUtils.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/RelationshipContent.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../support/actions/ActionBase.js";import"../core/Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../Color.js";import"./colorUtils.js";import"./mathUtils.js";import"./vec3.js";import"./common.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"./utils2.js";import"../symbols/edges/Edges3D.js";import"./screenUtils.js";import"./materialUtils.js";import"./opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"./Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"./lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"./utils3.js";import"./colors.js";import"./symbolLayerUtils3D.js";import"./aaBoundingBox.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../core/urlUtils.js";import"./persistableUrlUtils.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"./collectionUtils.js";import"../portal/Portal.js";import"../kernel.js";import"../request.js";import"../core/Loadable.js";import"../core/Promise.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/support/StyleOrigin.js";import"./Thumbnail.js";import"./calloutUtils.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/support/Symbol3DVerticalOffset.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"./urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../layers/support/DimensionalDefinition.js";import"./FramebufferObject.js";import"./enums3.js";import"./Texture.js";import"./context-util.js";import"./VertexElementDescriptor.js";import"./dataUtils.js";import"./DisplayObject.js";import"./vec2f32.js";import"./Utils18.js";import"./number2.js";import"./enums.js";import"./Container.js";import"./EffectView.js";import"./parser.js";import"./mat4f32.js";import"./mat4.js";import"./_commonjsHelpers.js";import"./ClipRect.js";import"../Viewpoint.js";import"../Camera.js";import"./Cyclical.js";import"./mat2d.js";import"./mat2df32.js";import"./mat2df64.js";import"./vec2.js";import"./vec2f64.js";import"./unitUtils.js";import"./projectionEllipsoid.js";import"../geometry/projection.js";import"./pe.js";import"./assets.js";import"./geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"./zscale.js";import"./WGLBrushVTLSymbol.js";import"./vec4f32.js";import"./definitions.js";import"./StyleDefinition.js";import"./config.js";import"./GeometryUtils2.js";import"./DefaultVertexAttributeLayouts.js";import"./ShaderCompiler.js";import"./ProgramTemplate.js";import"./Program.js";import"./MaterialKey.js";import"./alignmentUtils.js";import"./utils19.js";import"./heatmapUtils.js";import"./vec4f64.js";import"./heatmapTextureUtils.js";import"./earcut.js";import"./featureConversionUtils.js";import"./OptimizedFeature.js";import"./OptimizedFeatureSet.js";import"./WatchUpdatingTracking.js";import"../layers/support/LOD.js";import"./TileKey.js";import"./QueueProcessor.js";import"./Queue.js";import"./commonProperties.js";import"../TimeExtent.js";import"./timeUtils.js";import"../support/timeUtils.js";import"./ElevationInfo.js";import"./unitConversionUtils.js";import"./lengthUtils.js";import"./popupUtils.js";class X extends S{constructor(e,t,s,i,r,o,a=null){super(e,t,s,i,r,o),this.bitmap=new w(a,null,null),this.bitmap.coordScale=[r,o],this.bitmap.once("isReady",(()=>this.ready()))}destroy(){super.destroy(),this.bitmap.destroy(),this.bitmap=null,this.stage=null}set stencilRef(e){this.bitmap.stencilRef=e}get stencilRef(){return this.bitmap.stencilRef}setTransform(e){super.setTransform(e),this.bitmap.transforms.dvs=this.transforms.dvs}_createTransforms(){return{dvs:P(),tileMat3:P()}}onAttach(){this.bitmap.stage=this.stage}onDetach(){this.bitmap.stage=null}}class Y extends I{constructor(){super(...arguments),this.isCustomTilingScheme=!1}createTile(e){const t=this._getTileBounds(e),[s,i]=this._tileInfoView.tileInfo.size,r=this._tileInfoView.getTileResolution(e.level);return new X(e,r,t[0],t[3],s,i)}prepareRenderPasses(e){const t=e.registerRenderPass({name:"imagery (tile)",brushes:[_.raster],target:()=>this.children.map((e=>e.bitmap)),drawPhase:T.MAP});return[...super.prepareRenderPasses(e),t]}doRender(e){this.visible&&e.drawPhase===T.MAP&&super.doRender(e)}_getTileBounds(e){const t=this._tileInfoView.getTileBounds(g(),e);if(this.isCustomTilingScheme&&e.world){const{tileInfo:s}=this._tileInfoView,i=j(s.spatialReference);if(i){const{resolution:r}=s.lodAt(e.level),o=i/r%s.size[0],a=o?(s.size[0]-o)*r:0;t[0]-=a*e.world,t[2]-=a*e.world}}return t}}const Z=[0,0];let $=class extends C{constructor(){super(...arguments),this._emptyTilePixelBlock=null,this._tileStrategy=null,this._tileInfoView=null,this._fetchQueue=null,this._blockCacheRegistryUrl=null,this._blockCacheRegistryId=null,this._srcResolutions=null,this.previousLOD=null,this._needBlockCacheUpdate=!1,this._globalSymbolizerParams=null,this._symbolizerParams=null,this._abortController=null,this._isCustomTilingScheme=!1,this._globalUpdateRequested=!1,this.attached=!1,this.container=null,this.layer=null,this.timeExtent=null,this.redrawOrRefetch=o(((e,t)=>!this.previousLOD||this.layerView.suspended?Promise.resolve():e?this.updatingHandles.addPromise(this.doRefresh()):this.updatingHandles.addPromise(this._redrawImage(t))))}get useWebGLForProcessing(){return this._get("useWebGLForProcessing")??!0}set useWebGLForProcessing(e){this._set("useWebGLForProcessing",e)}get useProgressiveUpdate(){return null==this._get("useProgressiveUpdate")||this._get("useProgressiveUpdate")}set useProgressiveUpdate(e){if(this._tileStrategy&&this.useProgressiveUpdate!==e){this._tileStrategy.destroy(),this.container.removeAllChildren();const t=this._getCacheSize(e);this._tileStrategy=new G({cachePolicy:"purge",acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),cacheSize:t,tileInfoView:this._tileInfoView}),this._set("useProgressiveUpdate",e),this.layerView.requestUpdate()}}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume();const{extent:t,resolution:s,scale:i}=e.state,r=this._tileInfoView.getClosestInfoForScale(i);if(this.layer.raster){if(!this.useProgressiveUpdate||this._needBlockCacheUpdate){const e=this._srcResolutions[r.level],i=t.toJSON?t:W.fromJSON(t);x(this._blockCacheRegistryUrl,this._blockCacheRegistryId,i,s,e,this.layer.raster.ioConfig.sampling)}this._needBlockCacheUpdate=!1,this.previousLOD?.level!==r.level&&(this.previousLOD=r,null==this._symbolizerParams||this.layerView.hasTilingEffects||this._updateSymbolizerParams(),this._tileStrategy.updateCacheSize(0))}}moveEnd(){!this.layerView.hasTilingEffects&&this.useProgressiveUpdate||(this._abortController&&this._abortController.abort(),this._abortController=new AbortController,0===this._fetchQueue.length&&this._redrawImage(this._abortController.signal).then((()=>{this._globalUpdateRequested=!1,this.layerView.requestUpdate()})));const e=this._getCacheSize(this.useProgressiveUpdate);this._tileStrategy.updateCacheSize(e),this.layerView.requestUpdate()}get updating(){return this._fetchQueue?.updating||this._globalUpdateRequested||!(!this.updatingHandles||!this.updatingHandles.updating)}attach(){O("2d").supportsTextureFloat||(this.useWebGLForProcessing=!1),this._initializeTileInfo(),this._tileInfoView=new M(this.layerView.tileInfo,this.layerView.fullExtent);const e=this._computeFetchConcurrency();this._fetchQueue=new E({tileInfoView:this._tileInfoView,concurrency:e,process:(e,t)=>this._fetchTile1(e,t)});const t=this._getCacheSize(this.useProgressiveUpdate);this._tileStrategy=new G({cachePolicy:"purge",acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),cacheSize:t,tileInfoView:this._tileInfoView}),this._updateBlockCacheRegistry()}detach(){this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null,D(this._blockCacheRegistryUrl,this._blockCacheRegistryId),this._blockCacheRegistryUrl=this._blockCacheRegistryId=null}acquireTile(e){const t=this.container.createTile(e);return this._enqueueTileFetch(t),this.layerView.requestUpdate(),this._needBlockCacheUpdate=!0,this._globalUpdateRequested=this.layerView.hasTilingEffects||!this.useProgressiveUpdate,t}releaseTile(e){this._fetchQueue.abort(e.key.id),this.container.removeChild(e),e.once("detach",(()=>{e.destroy(),this.layerView.requestUpdate()})),this.layerView.requestUpdate()}createEmptyTilePixelBlock(e=null){const t=null==e||e.join(",")===this._tileInfoView.tileInfo.size.join(",");if(t&&i(this._emptyTilePixelBlock))return this._emptyTilePixelBlock;e=e||this._tileInfoView.tileInfo.size;const[s,r]=e,o=new U({width:s,height:r,pixels:[new Uint8Array(s*r)],mask:new Uint8Array(s*r),pixelType:"u8"});return t&&(this._emptyTilePixelBlock=o),o}_fetchTile1(e,t){const s=i(t)&&t.signal,o=this.canUseWebGLForProcessing(),{layerView:a}=this,l=!a.tileInfo.isWrappable&&i(F(a.view.spatialReference)),n={allowPartialFill:!0,datumTransformation:a.datumTransformation,interpolation:o?"nearest":this.layer.interpolation,registryId:this._blockCacheRegistryId,requestRawData:o,signal:r(s),srcResolution:this._srcResolutions[e.level],timeExtent:a.timeExtent,tileInfo:a.tileInfo,disableWrapAround:l};return this.fetchTile(e,n)}_getCacheSize(e){return e?40:0}_initializeTileInfo(){const e=this.layerView.view.spatialReference,t=new R({x:this.layerView.fullExtent.xmin,y:this.layerView.fullExtent.ymax,spatialReference:e}),{scales:s,srcResolutions:i,isCustomTilingScheme:r}=B(this.layer.rasterInfo,e),o=V.create({spatialReference:e,size:512,scales:s});(0===o.origin.x||o.origin.x>t.x)&&(o.origin=t),this._isCustomTilingScheme=r,this.layerView.set("tileInfo",o),this._srcResolutions=i??[]}_computeFetchConcurrency(){const{blockBoundary:e}=this.layer.rasterInfo.storageInfo,t=e[e.length-1];return(t.maxCol-t.minCol+1)*(t.maxRow-t.minRow+1)>64?2:10}async _enqueueTileFetch(e,t){this.updatingHandles.addPromise(this._enqueueTileFetch1(e,t))}async _enqueueTileFetch1(e,t){if(!this._fetchQueue.has(e.key.id)){try{const t=await this._fetchQueue.push(e.key),{bandIds:i}=this.layer;let r=!this.useProgressiveUpdate||this.layerView.hasTilingEffects&&!this._globalSymbolizerParams;if(this._globalUpdateRequested&&!this.layerView.moving&&0===this._fetchQueue.length){r=!1;try{await this._redrawImage(this._abortController&&this._abortController.signal)}catch(e){a(e)&&s.getLogger(this.declaredClass).error(e)}this._globalUpdateRequested=!1}!this.canUseWebGLForProcessing()&&"rasterVF"!==this.type||this.layerView.hasTilingEffects||null!=this._symbolizerParams||this._updateSymbolizerParams();const o=this._tileInfoView.getTileCoords(Z,e.key),l=this._tileInfoView.getTileResolution(e.key);await this.updateTileSource(e,{source:t,symbolizerParams:this._symbolizerParams,globalSymbolizerParams:this._globalSymbolizerParams,suspended:r,bandIds:i,coords:o,resolution:l}),e.once("attach",(()=>this.layerView.requestUpdate())),this.container.addChild(e)}catch(e){a(e)||s.getLogger(this.declaredClass).error(e)}this.layerView.requestUpdate()}}async _redrawImage(e){if(0===this.container.children.length)return;await this.layer.updateRenderer(),this.layerView.hasTilingEffects?await this._updateGlobalSymbolizerParams(e):(this._updateSymbolizerParams(),this._globalSymbolizerParams=null);const t=this.container.children.map((async e=>this.updateTileSymbolizerParameters(e,{local:this._symbolizerParams,global:this._globalSymbolizerParams})));await l(t),this.container.requestRender()}async _updateGlobalSymbolizerParams(e){const t={srcResolution:this._srcResolutions[this.previousLOD.level],registryId:this._blockCacheRegistryId,signal:e},s=await this.layer.fetchPixels(this.layerView.view.extent,this.layerView.view.width,this.layerView.view.height,t);if(!s||!s.pixelBlock)return;const i=this.layer.symbolizer.generateWebGLParameters({pixelBlock:z(s.pixelBlock,this.layer.bandIds),isGCS:this.layerView.view.spatialReference.isGeographic,resolution:{x:this.previousLOD.resolution,y:this.previousLOD.resolution},bandIds:this.layer.bandIds});!this.canUseWebGLForProcessing()&&i&&"stretch"===i.type&&this.layer.renderer&&"raster-stretch"===this.layer.renderer.type&&(i.factor=i.factor.map((e=>255*e)),i.outMin=Math.round(255*i.outMin),i.outMax=Math.round(255*i.outMax)),this._globalSymbolizerParams=i}_updateSymbolizerParams(){this._symbolizerParams=this.layer.symbolizer.generateWebGLParameters({pixelBlock:null,isGCS:this.layerView.view.spatialReference.isGeographic,resolution:{x:this.previousLOD.resolution,y:this.previousLOD.resolution},bandIds:this.layer.bandIds})}_updateBlockCacheRegistry(e=!1){const{url:t,rasterInfo:s,raster:i}=this.layer,{multidimensionalDefinition:r}=this.layer.normalizeRasterFetchOptions({multidimensionalDefinition:this.layer.multidimensionalDefinition,timeExtent:this.layerView.timeExtent}),o=s?.multidimensionalInfo?i.getSliceIndex(r):null,a=k(t,o);if(a!==this._blockCacheRegistryUrl){if(null!=this._blockCacheRegistryUrl&&D(this._blockCacheRegistryUrl,this._blockCacheRegistryId),this._blockCacheRegistryId=L(a,this.layer.raster.rasterInfo),e){const e=this._tileInfoView.getClosestInfoForScale(this.layerView.view.scale),t=this._srcResolutions[e.level];x(a,this._blockCacheRegistryId,this.layerView.view.extent,this.layerView.view.resolution,t,this.layer.raster.ioConfig.sampling)}this._blockCacheRegistryUrl=a}}async doRefresh(){if(!this.attached)return;await this.layer.updateRenderer(),this.layerView.hasTilingEffects||this._updateSymbolizerParams(),this._updateBlockCacheRegistry(!0),this._fetchQueue.reset();const e=[];this._globalUpdateRequested=this.layerView.hasTilingEffects||!this.useProgressiveUpdate,this._tileStrategy.tiles.forEach((t=>e.push(this._enqueueTileFetch(t)))),await l(e)}};e([c()],$.prototype,"_fetchQueue",void 0),e([c()],$.prototype,"_globalUpdateRequested",void 0),e([c()],$.prototype,"attached",void 0),e([c()],$.prototype,"container",void 0),e([c()],$.prototype,"layer",void 0),e([c()],$.prototype,"layerView",void 0),e([c()],$.prototype,"type",void 0),e([c()],$.prototype,"useWebGLForProcessing",null),e([c()],$.prototype,"useProgressiveUpdate",null),e([c()],$.prototype,"timeExtent",void 0),e([c()],$.prototype,"updating",null),$=e([u("esri.views.2d.layers.imagery.BaseImageryTileSubView2D")],$);let ee=class extends ${constructor(){super(...arguments),this.container=null,this.layer=null,this.type="raster"}attach(){super.attach(),this.container=new Y(this._tileInfoView),this.container.isCustomTilingScheme=this._isCustomTilingScheme}detach(){super.detach(),this.container.removeAllChildren(),this.container=null}canUseWebGLForProcessing(){return this.useWebGLForProcessing&&this.layer.symbolizer.canRenderInWebGL&&!("majority"===this.layer.interpolation&&q(this.layer))}fetchTile(e,t){return this.layer.fetchTile(e.level,e.row,e.col,t)}async updateTileSource(e,t){const{bandIds:s}=this.layer,r=this._getLayerInterpolation(),o=this.canUseWebGLForProcessing(),{source:a,globalSymbolizerParams:l,suspended:n,coords:p,resolution:m}=t,h=this.layerView.hasTilingEffects?l:t.symbolizerParams,{bitmap:c}=e;if([c.x,c.y]=p,c.resolution=m,a&&i(a)&&i(a.pixelBlock)){const e={extent:a.extent,pixelBlock:a.pixelBlock};if(c.rawPixelData=e,o)c.source=a.pixelBlock,c.isRendereredSource=!1;else{const t=await this.layer.applyRenderer(e,"stretch"===l?.type?l:null);c.source=t,c.isRendereredSource=!0}c.symbolizerParameters=o?h:null,o?c.transformGrid||(c.transformGrid=a.transformGrid):c.transformGrid=null}else{const e=this.createEmptyTilePixelBlock();c.source=e,c.symbolizerParameters=o?h:null,c.transformGrid=null}c.bandIds=o?s:null,c.width=this._tileInfoView.tileInfo.size[0],c.height=this._tileInfoView.tileInfo.size[1],c.interpolation=r,c.suspended=n,c.invalidateTexture()}async updateTileSymbolizerParameters(e,t){const{local:s,global:r}=t,{bandIds:o}=this.layer,a=this._getLayerInterpolation(),l=this.canUseWebGLForProcessing(),{bitmap:n}=e,{rawPixelData:p}=n;!l&&i(p)?(n.source=await this.layer.applyRenderer(p,"stretch"===r?.type?r:null),n.isRendereredSource=!0):(n.isRendereredSource&&i(p)&&(n.source=p.pixelBlock),n.isRendereredSource=!1),n.symbolizerParameters=l?this.layerView.hasTilingEffects?r:s:null,n.bandIds=l?o:null,n.interpolation=a,n.suspended=!1}_getLayerInterpolation(){const e=this.layer.renderer.type;if("raster-colormap"===e||"unique-value"===e||"class-breaks"===e)return"nearest";const{interpolation:t}=this.layer,{renderer:s}=this.layer;return"raster-stretch"===s.type&&null!=s.colorRamp?"bilinear"===t||"cubic"===t?"bilinear":"nearest":t}};e([c()],ee.prototype,"container",void 0),e([c()],ee.prototype,"layer",void 0),e([c()],ee.prototype,"type",void 0),ee=e([u("esri.views.2d.layers.imagery.ImageryTileView2D")],ee);const te=ee;class se extends S{constructor(e,t,s,i,r,o,a=null){super(e,t,s,i,r,o),this.tileData=new y(a),this.tileData.coordScale=[r,o],this.tileData.once("isReady",(()=>this.ready()))}destroy(){super.destroy(),this.tileData.destroy(),this.tileData=null,this.stage=null}set stencilRef(e){this.tileData.stencilRef=e}get stencilRef(){return this.tileData.stencilRef}_createTransforms(){return{dvs:P(),tileMat3:P()}}setTransform(e){super.setTransform(e);const t=this.resolution/(e.resolution*e.pixelRatio),s=this.transforms.tileMat3,[i,r]=this.tileData.offset,o=[this.x+i*this.resolution,this.y-r*this.resolution],[a,l]=e.toScreenNoRotation([0,0],o),{symbolTileSize:n}=this.tileData.symbolizerParameters,p=Math.round((this.width-this.tileData.offset[0])/n)*n,m=Math.round((this.height-this.tileData.offset[1])/n)*n,h=p/this.rangeX*t,c=m/this.rangeY*t;Q(s,h,0,0,0,c,0,a,l,1),H(this.transforms.dvs,e.displayViewMat3,s),this.tileData.transforms.dvs=this.transforms.dvs}onAttach(){this.tileData.stage=this.stage}onDetach(){this.tileData.stage=null}}class ie extends I{constructor(){super(...arguments),this.isCustomTilingScheme=!1,this.symbolTypes=["triangle"]}createTile(e){const t=this._tileInfoView.getTileBounds(g(),e),[s,i]=this._tileInfoView.tileInfo.size,r=this._tileInfoView.getTileResolution(e.level);return new se(e,r,t[0],t[3],s,i)}prepareRenderPasses(e){const t=e.registerRenderPass({name:"imagery (vf tile)",brushes:[v],target:()=>this.children.map((e=>e.tileData)),drawPhase:T.MAP});return[...super.prepareRenderPasses(e),t]}doRender(e){this.visible&&e.drawPhase===T.MAP&&this.symbolTypes.forEach((t=>{e.renderPass=t,super.doRender(e)}))}}let re=class extends ${constructor(){super(...arguments),this._handle=null,this.container=null,this.layer=null,this.type="rasterVF"}canUseWebGLForProcessing(){return!1}async fetchTile(e,t){t={...t,interpolation:"nearest",requestProjectedLocalDirections:!0};const s=await this.layer.fetchTile(e.level,e.row,e.col,t);return"vector-magdir"===this.layer.rasterInfo.dataType&&s?.pixelBlock&&(s.pixelBlock=await this.layer.convertVectorFieldData(s.pixelBlock,t)),s}updateTileSource(e,t){const s=t.symbolizerParams,{tileData:r}=e;r.key=e.key,r.width=this._tileInfoView.tileInfo.size[0],r.height=this._tileInfoView.tileInfo.size[1];const{symbolTileSize:o}=s,{source:a}=t;if(r.offset=this._getTileSymbolOffset(r.key,o),i(a)&&i(a.pixelBlock)){const e={extent:a.extent,pixelBlock:a.pixelBlock};r.rawPixelData=e,r.symbolizerParameters=s,r.source=this._sampleVectorFieldData(a.pixelBlock,s,r.offset)}else{const e=[Math.round((this._tileInfoView.tileInfo[0]-r.offset[0])/o),Math.round((this._tileInfoView.tileInfo[1]-r.offset[1])/o)],t=this.createEmptyTilePixelBlock(e);r.source=t,r.symbolizerParameters=s}return r.invalidateVAO(),Promise.resolve(null)}updateTileSymbolizerParameters(e,t){const s=t.local,{symbolTileSize:r}=s,{tileData:o}=e;o.offset=this._getTileSymbolOffset(o.key,r);const a=o.symbolizerParameters.symbolTileSize;return o.symbolizerParameters=s,i(o.rawPixelData?.pixelBlock)&&a!==r&&(o.source=this._sampleVectorFieldData(o.rawPixelData.pixelBlock,o.symbolizerParameters,o.offset)),Promise.resolve(null)}attach(){super.attach(),this.container=new ie(this._tileInfoView),this.container.isCustomTilingScheme=this._isCustomTilingScheme,this._updateSymbolType(this.layer.renderer),this._handle=n((()=>this.layer.renderer),(e=>this._updateSymbolType(e)))}detach(){super.detach(),this.container.removeAllChildren(),this._handle.remove(),this._handle=null}_getTileSymbolOffset(e,t){const s=e.col*this._tileInfoView.tileInfo.size[0]%t,i=e.row*this._tileInfoView.tileInfo.size[1]%t;return[s>t/2?t-s:-s,i>t/2?t-i:-i]}_sampleVectorFieldData(e,t,s){const{symbolTileSize:i}=t;return A(e,"vector-uv",i,s)}_updateSymbolType(e){"vector-field"===e.type&&(this.container.symbolTypes="wind-barb"===e.style?["scalar","triangle"]:"simple-scalar"===e.style?["scalar"]:["triangle"])}};e([c()],re.prototype,"container",void 0),e([c()],re.prototype,"layer",void 0),e([c()],re.prototype,"type",void 0),re=e([u("esri.views.2d.layers.imagery.VectorFieldTileView2D")],re);const oe=re;let ae=class extends(J(K(f(N)))){constructor(){super(...arguments),this._useWebGLForProcessing=!0,this._useProgressiveUpdate=!0,this.subview=null}get useWebGLForProcessing(){return this._useWebGLForProcessing}set useWebGLForProcessing(e){this._useWebGLForProcessing=e,this.subview&&"useWebGLForProcessing"in this.subview&&(this.subview.useWebGLForProcessing=e)}get useProgressiveUpdate(){return this._useWebGLForProcessing}set useProgressiveUpdate(e){this._useProgressiveUpdate=e,this.subview&&"useProgressiveUpdate"in this.subview&&(this.subview.useProgressiveUpdate=e)}update(e){this.subview.update(e),this.notifyChange("updating")}isUpdating(){return!this.subview||this.subview.updating}attach(){this.layer.increaseRasterJobHandlerUsage(),this._updateSubview(),this.handles.add([n((()=>{const{layer:e}=this;return{bandIds:e.bandIds,renderer:e.renderer,interpolation:e.interpolation,multidimensionalDefinition:e.multidimensionalDefinition,rasterFunction:"imagery-tile"===e.type?e.rasterFunction:null}}),((e,t)=>{const i=e.interpolation!==t.interpolation&&("majority"===e.interpolation||"majority"===t.interpolation)&&q(this.layer),r=e.renderer!==t.renderer&&t.renderer?.type!==e.renderer?.type;r&&this._updateSubview();const o=e.multidimensionalDefinition!==t.multidimensionalDefinition,l=e.rasterFunction!==t.rasterFunction,n=o||i||r||l;this.subview.redrawOrRefetch(n).catch((e=>{a(e)||s.getLogger(this.declaredClass).error(e)})),this.notifyChange("updating")})),n((()=>this.layer.blendMode??"normal"),(e=>{this.subview.container.blendMode=e}),p),n((()=>this.layer.effect??null),(e=>{this.subview.container.effect=e}),p),n((()=>this.layer.multidimensionalSubset??null),((e,t)=>{const{multidimensionalDefinition:r}=this.layer;i(r)&&d(r,e)!==d(r,t)&&(this.subview.redrawOrRefetch(!0).catch((e=>{a(e)||s.getLogger(this.declaredClass).error(e)})),this.notifyChange("updating"))}),m),n((()=>this.timeExtent),(()=>{this.subview.timeExtent=this.timeExtent,this.subview.redrawOrRefetch(!0).catch((e=>{a(e)||s.getLogger(this.declaredClass).error(e)}))}),h)],"attach")}detach(){this.handles.remove("attach"),this.layer.decreaseRasterJobHandlerUsage(),this._detachSubview(this.subview),this.subview?.destroy(),this.subview=null}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.subview.moveEnd()}async hitTest(e,s){return[{type:"graphic",layer:this.layer,mapPoint:e,graphic:new t({attributes:{},geometry:e.clone()})}]}doRefresh(){return this.subview?.doRefresh()}_updateSubview(){const e="vector-field"===this.layer.renderer.type?"rasterVF":"flow"===this.layer.renderer.type?"flow":"raster";if(this.subview){if(this.subview.type===e)return void this._attachSubview(this.subview);this._detachSubview(this.subview),this.subview?.destroy(),this.subview=null}const{layer:t}=this;let s;s="rasterVF"===e?new oe({layer:t,layerView:this}):"flow"===e?new b({layer:t,layerView:this}):new te({layer:t,layerView:this}),"useWebGLForProcessing"in s&&(s.useWebGLForProcessing=this._useWebGLForProcessing),"useProgressiveUpdate"in s&&(s.useProgressiveUpdate=this._useProgressiveUpdate),"previousLOD"in s&&(s.previousLOD=this.subview&&"previousLOD"in this.subview&&this.subview.previousLOD),this._attachSubview(s),this.subview=s,this.requestUpdate()}_attachSubview(e){e&&!e.attached&&(e.attach(),e.attached=!0,this.container.addChildAt(e.container,0),e.container.blendMode=this.layer.blendMode,e.container.effect=this.layer.effect)}_detachSubview(e){e?.attached&&(this.container.removeChild(e.container),e.detach(),e.attached=!1)}};e([c()],ae.prototype,"subview",void 0),e([c()],ae.prototype,"useWebGLForProcessing",null),e([c()],ae.prototype,"useProgressiveUpdate",null),ae=e([u("esri.views.2d.layers.ImageryTileLayerView2D")],ae);const le=ae;export{le as default};
