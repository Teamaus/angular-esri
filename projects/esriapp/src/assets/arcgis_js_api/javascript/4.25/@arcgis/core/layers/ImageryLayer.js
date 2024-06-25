/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{_ as r}from"../chunks/tslib.es6.js";import s from"../PopupTemplate.js";import{i as t}from"../chunks/maybe.js";import{M as o}from"../chunks/MultiOriginJSONSupport.js";import{throwIfAbortError as e}from"../core/promiseUtils.js";import{property as i}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"../chunks/ensureType.js";import{subclass as p}from"../core/accessorSupport/decorators/subclass.js";import{w as m}from"../chunks/writer.js";import n from"./Layer.js";import{ArcGISImageService as a}from"./mixins/ArcGISImageService.js";import{A as l}from"../chunks/ArcGISService.js";import{BlendLayer as u}from"./mixins/BlendLayer.js";import{CustomParametersMixin as j}from"./mixins/CustomParametersMixin.js";import{O as c}from"../chunks/OperationalLayer.js";import{PortalLayer as y}from"./mixins/PortalLayer.js";import{RefreshableLayer as h}from"./mixins/RefreshableLayer.js";import{ScaleRangeLayer as d}from"./mixins/ScaleRangeLayer.js";import{TemporalLayer as k}from"./mixins/TemporalLayer.js";import{a as b,p as S}from"../chunks/commonProperties.js";import{s as f}from"../chunks/versionUtils.js";import{createPopupTemplate as g}from"../support/popupUtils.js";import"../core/Clonable.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/get.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../chunks/object.js";import"../chunks/Logger.js";import"../config.js";import"../chunks/string.js";import"../chunks/ArrayPool.js";import"../chunks/tracking.js";import"../chunks/watch.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../core/Error.js";import"../core/Collection.js";import"../core/Evented.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";import"../core/JSONSupport.js";import"../core/accessorSupport/decorators/cast.js";import"../chunks/reader.js";import"./support/fieldUtils.js";import"../chunks/arcadeOnDemand.js";import"../geometry.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../geometry/SpatialReference.js";import"../geometry/Point.js";import"../geometry/support/webMercatorUtils.js";import"../chunks/Ellipsoid.js";import"../geometry/Multipoint.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/extentUtils.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../chunks/jsonMap.js";import"../geometry/support/jsonUtils.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"../chunks/enumeration.js";import"../popup/support/FieldInfoFormat.js";import"../chunks/date.js";import"../chunks/number.js";import"../chunks/locale.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/mixins/ChartMediaInfo.js";import"../popup/content/mixins/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../chunks/chartMediaInfoUtils.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/RelationshipContent.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../support/actions/ActionBase.js";import"../core/Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../core/Loadable.js";import"../core/Promise.js";import"../Graphic.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../Color.js";import"../chunks/colorUtils.js";import"../chunks/mathUtils.js";import"../chunks/vec3.js";import"../chunks/common.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"../chunks/utils2.js";import"../symbols/edges/Edges3D.js";import"../chunks/screenUtils.js";import"../chunks/materialUtils.js";import"../chunks/opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"../chunks/Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"../chunks/lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"../chunks/utils3.js";import"../chunks/colors.js";import"../chunks/symbolLayerUtils3D.js";import"../chunks/aaBoundingBox.js";import"../chunks/aaBoundingRect.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../chunks/persistableUrlUtils.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"../chunks/collectionUtils.js";import"../portal/Portal.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/support/StyleOrigin.js";import"../chunks/Thumbnail.js";import"../chunks/calloutUtils.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/support/Symbol3DVerticalOffset.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"../chunks/urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../rasterRenderers.js";import"../renderers/ClassBreaksRenderer.js";import"../renderers/Renderer.js";import"../renderers/support/AuthoringInfo.js";import"../renderers/support/AuthoringInfoVisualVariable.js";import"../chunks/colorRamps.js";import"../rest/support/AlgorithmicColorRamp.js";import"../rest/support/ColorRamp.js";import"../rest/support/MultipartColorRamp.js";import"../renderers/mixins/VisualVariablesMixin.js";import"../renderers/visualVariables/ColorVariable.js";import"../renderers/visualVariables/VisualVariable.js";import"../chunks/LegendOptions.js";import"../renderers/visualVariables/support/ColorStop.js";import"../renderers/visualVariables/OpacityVariable.js";import"../renderers/visualVariables/support/OpacityStop.js";import"../renderers/visualVariables/RotationVariable.js";import"../renderers/visualVariables/SizeVariable.js";import"../renderers/visualVariables/support/SizeStop.js";import"../chunks/sizeVariableUtils.js";import"../chunks/visualVariableUtils.js";import"../chunks/compilerUtils.js";import"../chunks/lengthUtils.js";import"../chunks/unitUtils.js";import"../chunks/projectionEllipsoid.js";import"../renderers/support/ClassBreakInfo.js";import"../chunks/commonProperties2.js";import"../symbols/support/jsonUtils.js";import"../chunks/symbolConversion.js";import"../renderers/FlowRenderer.js";import"../renderers/RasterColormapRenderer.js";import"../renderers/support/ColormapInfo.js";import"../chunks/colorRampUtils.js";import"../chunks/colorUtils2.js";import"../renderers/RasterShadedReliefRenderer.js";import"../renderers/RasterStretchRenderer.js";import"../chunks/stretchRendererUtils.js";import"../renderers/UniqueValueRenderer.js";import"../core/reactiveUtils.js";import"../chunks/diffUtils.js";import"../renderers/support/UniqueValue.js";import"../renderers/support/UniqueValueClass.js";import"../renderers/support/UniqueValueGroup.js";import"../renderers/support/UniqueValueInfo.js";import"../chunks/styleUtils2.js";import"../renderers/VectorFieldRenderer.js";import"../geometry/support/normalizeUtils.js";import"../chunks/normalizeUtilsCommon.js";import"../chunks/simplify.js";import"../chunks/utils4.js";import"../chunks/utils5.js";import"../chunks/vectorFieldUtils.js";import"./support/PixelBlock.js";import"../chunks/pixelUtils.js";import"../chunks/utils6.js";import"../chunks/asyncUtils.js";import"../chunks/jsonUtils.js";import"../chunks/parser.js";import"../chunks/mat4f32.js";import"../chunks/mat4.js";import"../chunks/_commonjsHelpers.js";import"../chunks/assets.js";import"../chunks/ItemCache.js";import"../chunks/MemCache.js";import"../symbols/support/cimSymbolUtils.js";import"../chunks/utils7.js";import"./support/DimensionalDefinition.js";import"./support/RasterFunction.js";import"./support/MosaicRule.js";import"../chunks/rasterEnums.js";import"./support/Field.js";import"../chunks/domains.js";import"./support/CodedValueDomain.js";import"./support/Domain.js";import"./support/InheritedDomain.js";import"./support/RangeDomain.js";import"../chunks/fieldType.js";import"./support/FieldsIndex.js";import"./support/MultidimensionalSubset.js";import"./support/RasterInfo.js";import"../chunks/RasterJobHandler.js";import"../core/workers/workers.js";import"../core/workers/Connection.js";import"../chunks/Queue.js";import"../core/workers/RemoteClient.js";import"../intl.js";import"../chunks/messages.js";import"../chunks/multidimensionalUtils.js";import"../chunks/RasterSymbolizer.js";import"../chunks/stretchUtils.js";import"../chunks/rasterRendererHelper.js";import"../chunks/generateRendererUtils.js";import"../rest/imageService.js";import"../rest/support/ImageAngleResult.js";import"../rest/support/ImageIdentifyResult.js";import"../rest/support/FeatureSet.js";import"../rest/support/ImagePixelLocationResult.js";import"../rest/support/ImageSampleResult.js";import"../rest/support/ImageSample.js";import"../chunks/DataLayerSource.js";import"../chunks/executeQueryJSON.js";import"../chunks/query.js";import"../chunks/pbfQueryUtils.js";import"../chunks/pbf.js";import"../chunks/OptimizedFeature.js";import"../chunks/OptimizedFeatureSet.js";import"../chunks/queryZScale.js";import"../chunks/zscale.js";import"../rest/support/Query.js";import"../TimeExtent.js";import"../chunks/timeUtils.js";import"../chunks/FullTextSearch.js";import"../rest/support/StatisticDefinition.js";import"../chunks/featureConversionUtils.js";import"../rest/query/support/AttachmentInfo.js";import"../rest/support/AttachmentQuery.js";import"../chunks/executeForIds.js";import"../rest/support/RelationshipQuery.js";import"../rest/support/TopFeaturesQuery.js";import"../rest/support/TopFilter.js";import"../chunks/fetchRasterInfo.js";import"../rest/support/ImageAngleParameters.js";import"../rest/support/ImageHistogramParameters.js";import"../rest/support/ImageIdentifyParameters.js";import"../rest/support/ImagePixelLocationParameters.js";import"../rest/support/ImageSampleParameters.js";import"../chunks/dataUtils.js";import"../chunks/arcgisLayerUrl.js";import"../portal/PortalItem.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"../TimeInterval.js";import"./support/TimeInfo.js";import"./support/TimeReference.js";import"../support/timeUtils.js";import"../chunks/ElevationInfo.js";import"../chunks/unitConversionUtils.js";let I=class extends(u(k(d(c(y(a(h(j(l(o(n))))))))))){constructor(...r){super(...r),this.legendEnabled=!0,this.isReference=null,this.operationalLayerType="ArcGISImageServiceLayer",this.popupEnabled=!0,this.popupTemplate=null,this.type="imagery"}normalizeCtorArgs(r,s){return"string"==typeof r?{url:r,...s}:r}load(r){const s=t(r)?r.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service"]},r).catch(e).then((()=>this._fetchService(s)))),Promise.resolve(this)}writeOperationalLayerType(r,s,t){const o="vector-field"===this.renderer?.type;s[t]=o?"ArcGISImageServiceVectorLayer":"ArcGISImageServiceLayer"}get defaultPopupTemplate(){return this.createPopupTemplate()}createPopupTemplate(r){const s=this.rasterFields,t=this.title,o=new Set;let e=!1,i=!1;this.capabilities&&(e=this.capabilities.operations.supportsQuery&&this.fields&&this.fields.length>0,i="esriImageServiceDataTypeVector-UV"===this.serviceDataType||"esriImageServiceDataTypeVector-MagDir"===this.serviceDataType);const p=new Set;e&&p.add("raster.itempixelvalue");for(const r of s){const s=r.name.toLowerCase();p.has(s)||s.includes("raster.servicepixelvalue.")||o.add(r.name)}return i&&o.add("raster.magnitude").add("raster.direction"),g({fields:s,title:t},{...r,visibleFieldNames:o})}queryFeatures(r,s){return this.queryRasters(r,s).then((r=>{if(r?.features)for(const s of r.features)s.layer=s.sourceLayer=this;return r}))}queryFeatureCount(r,s){return this.queryRasterCount(r,s)}redraw(){this.emit("redraw")}serviceSupportsSpatialReference(r){return f(this,r)}};r([i(b)],I.prototype,"legendEnabled",void 0),r([i({type:["show","hide"]})],I.prototype,"listMode",void 0),r([i({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],I.prototype,"isReference",void 0),r([i({type:["ArcGISImageServiceLayer"],json:{origins:{"web-map":{type:["ArcGISImageServiceLayer","ArcGISImageServiceVectorLayer"],read:!1,write:{target:"layerType",ignoreOrigin:!0}}}}})],I.prototype,"operationalLayerType",void 0),r([m("web-map","operationalLayerType")],I.prototype,"writeOperationalLayerType",null),r([i(S)],I.prototype,"popupEnabled",void 0),r([i({type:s,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],I.prototype,"popupTemplate",void 0),r([i({readOnly:!0})],I.prototype,"defaultPopupTemplate",null),r([i({readOnly:!0,json:{read:!1}})],I.prototype,"type",void 0),I=r([p("esri.layers.ImageryLayer")],I);const U=I;export{U as default};
