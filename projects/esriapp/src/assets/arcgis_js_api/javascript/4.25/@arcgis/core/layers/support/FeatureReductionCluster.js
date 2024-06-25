/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{_ as o}from"../../chunks/tslib.es6.js";import s from"../../PopupTemplate.js";import"../../renderers/ClassBreaksRenderer.js";import"../../renderers/DictionaryRenderer.js";import"../../renderers/DotDensityRenderer.js";import"../../renderers/HeatmapRenderer.js";import"../../renderers/PieChartRenderer.js";import"../../renderers/Renderer.js";import r from"../../renderers/SimpleRenderer.js";import t from"../../renderers/UniqueValueRenderer.js";import{read as e,r as i}from"../../renderers/support/jsonUtils.js";import{symbolTypesRenderer as p,symbolTypesCluster as n}from"../../symbols.js";import{JSONSupport as m}from"../../core/JSONSupport.js";import{clone as l}from"../../core/lang.js";import{s as a}from"../../chunks/object.js";import{t as u}from"../../chunks/screenUtils.js";import{property as j}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/ensureType.js";import{r as c}from"../../chunks/reader.js";import{c as y,subclass as d}from"../../core/accessorSupport/decorators/subclass.js";import{w as b}from"../../chunks/writer.js";import h from"./AggregateField.js";import{p as f,l as k}from"../../chunks/commonProperties.js";import S from"./LabelClass.js";import"../../core/Clonable.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/string.js";import"../../chunks/ArrayPool.js";import"../../chunks/tracking.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../core/Collection.js";import"../../core/Evented.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../core/accessorSupport/decorators/cast.js";import"./fieldUtils.js";import"../../chunks/arcadeOnDemand.js";import"../../geometry.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../geometry/SpatialReference.js";import"../../geometry/Point.js";import"../../geometry/support/webMercatorUtils.js";import"../../chunks/Ellipsoid.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../chunks/jsonMap.js";import"../../geometry/support/jsonUtils.js";import"../../popup/content.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/Content.js";import"../../popup/content/CustomContent.js";import"../../popup/content/ExpressionContent.js";import"../../popup/ElementExpressionInfo.js";import"../../popup/content/FieldsContent.js";import"../../popup/FieldInfo.js";import"../../chunks/enumeration.js";import"../../popup/support/FieldInfoFormat.js";import"../../chunks/date.js";import"../../chunks/number.js";import"../../chunks/locale.js";import"../../popup/content/MediaContent.js";import"../../popup/content/BarChartMediaInfo.js";import"../../popup/content/mixins/ChartMediaInfo.js";import"../../popup/content/mixins/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../chunks/chartMediaInfoUtils.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/RelationshipContent.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../popup/content/TextContent.js";import"../../popup/ExpressionInfo.js";import"../../popup/LayerOptions.js";import"../../popup/RelatedRecordsInfo.js";import"../../support/actions/ActionBase.js";import"../../core/Identifiable.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import"../../renderers/mixins/VisualVariablesMixin.js";import"../../renderers/visualVariables/ColorVariable.js";import"../../renderers/visualVariables/VisualVariable.js";import"../../chunks/LegendOptions.js";import"../../renderers/visualVariables/support/ColorStop.js";import"../../Color.js";import"../../chunks/colorUtils.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/common.js";import"../../renderers/visualVariables/OpacityVariable.js";import"../../renderers/visualVariables/support/OpacityStop.js";import"../../chunks/opacityUtils.js";import"../../renderers/visualVariables/RotationVariable.js";import"../../renderers/visualVariables/SizeVariable.js";import"../../renderers/visualVariables/support/SizeStop.js";import"../../chunks/sizeVariableUtils.js";import"../../chunks/visualVariableUtils.js";import"../../Graphic.js";import"../../symbols/CIMSymbol.js";import"../../symbols/Symbol.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/utils2.js";import"../../symbols/edges/Edges3D.js";import"../../chunks/materialUtils.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/Symbol3DMaterial.js";import"../../symbols/FillSymbol.js";import"../../symbols/SimpleLineSymbol.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import"../../chunks/lineMarkers.js";import"../../symbols/FillSymbol3DLayer.js";import"../../symbols/patterns/LineStylePattern3D.js";import"../../symbols/patterns/StylePattern3D.js";import"../../chunks/utils3.js";import"../../chunks/colors.js";import"../../chunks/symbolLayerUtils3D.js";import"../../chunks/aaBoundingBox.js";import"../../chunks/aaBoundingRect.js";import"../../symbols/Font.js";import"../../symbols/IconSymbol3DLayer.js";import"../../core/urlUtils.js";import"../../chunks/persistableUrlUtils.js";import"../../symbols/LabelSymbol3D.js";import"../../symbols/Symbol3D.js";import"../../chunks/collectionUtils.js";import"../../portal/Portal.js";import"../../kernel.js";import"../../request.js";import"../../core/Loadable.js";import"../../core/Promise.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../portal/PortalGroup.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/LineStyleMarker3D.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../symbols/support/StyleOrigin.js";import"../../chunks/Thumbnail.js";import"../../chunks/calloutUtils.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../symbols/support/Symbol3DVerticalOffset.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../symbols/PictureFillSymbol.js";import"../../chunks/urlUtils.js";import"../../symbols/PictureMarkerSymbol.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../symbols/SimpleFillSymbol.js";import"../../symbols/SimpleMarkerSymbol.js";import"../../symbols/TextSymbol.js";import"../../symbols/WebStyleSymbol.js";import"../../chunks/compilerUtils.js";import"../../chunks/lengthUtils.js";import"../../chunks/unitUtils.js";import"../../chunks/projectionEllipsoid.js";import"../../renderers/support/ClassBreakInfo.js";import"../../chunks/commonProperties2.js";import"../../symbols/support/jsonUtils.js";import"../../chunks/symbolConversion.js";import"../../renderers/support/AuthoringInfo.js";import"../../renderers/support/AuthoringInfoVisualVariable.js";import"../../chunks/colorRamps.js";import"../../rest/support/AlgorithmicColorRamp.js";import"../../rest/support/ColorRamp.js";import"../../rest/support/MultipartColorRamp.js";import"../../chunks/DictionaryLoader.js";import"../../chunks/LRUCache.js";import"../../chunks/MemCache.js";import"../../renderers/support/AttributeColorInfo.js";import"../../renderers/support/HeatmapColorStop.js";import"../../chunks/heatmapUtils.js";import"../../chunks/vec4f64.js";import"../../core/reactiveUtils.js";import"../../chunks/diffUtils.js";import"../../renderers/support/UniqueValue.js";import"../../renderers/support/UniqueValueClass.js";import"../../renderers/support/UniqueValueGroup.js";import"../../renderers/support/UniqueValueInfo.js";import"../../chunks/styleUtils2.js";import"./ExpressionInfo.js";import"../../TimeExtent.js";import"../../chunks/timeUtils.js";import"../../support/timeUtils.js";import"../../chunks/ElevationInfo.js";import"../../chunks/unitConversionUtils.js";import"../../chunks/labelUtils.js";import"../../chunks/defaults.js";import"../../chunks/defaultsJSON.js";var g;const I=y({types:p});function U(o){return"simple"===o.type&&!o.visualVariables?.length}let C=g=class extends m{constructor(o){super(o),this.type="cluster",this.clusterRadius=u("80px"),this.clusterMinSize=u("12px"),this.clusterMaxSize=u("50px"),this.popupEnabled=!0,this.popupTemplate=null,this.renderer=null,this.symbol=null,this.labelingInfo=null,this.labelsVisible=!0,this.fields=null}readRenderer(o,s,i){const p=s.drawingInfo?.renderer;return p?.authoringInfo?.isAutoGenerated?null:p?U(p)?null:e(p,s,i)??void 0:s.defaultSymbol?s.types&&s.types.length?new t({defaultSymbol:I(s.defaultSymbol,s,i),field:s.typeIdField,uniqueValueInfos:s.types.map((o=>({id:o.id,symbol:I(o.symbol,o,i)})))}):new r({symbol:I(s.defaultSymbol,s,i)}):null}readSymbol(o,s,r){const t=s.drawingInfo?.renderer;return t?.authoringInfo?.isAutoGenerated?null:t&&U(t)?e(t,s,r)?.symbol:null}writeSymbol(o,s,t,e){const i=this.renderer?.authoringInfo?.isAutoGenerated;if(!this.renderer||i){const t=new r({symbol:o});s.drawingInfo={renderer:t.write({},e)}}}writeFields(o,s,r){const t=o.filter((o=>"avg_angle"!==o.statisticType)).map((o=>o.toJSON()));a(r,t,s)}readFields(o,s,r){return o.filter((o=>!o.isAutoGenerated)).map((o=>h.fromJSON(o)))}clone(){return new g({clusterRadius:this.clusterRadius,clusterMinSize:this.clusterMinSize,clusterMaxSize:this.clusterMaxSize,labelingInfo:l(this.labelingInfo),labelsVisible:this.labelsVisible,fields:l(this.fields),renderer:l(this.renderer),symbol:l(this.symbol),popupEnabled:this.popupEnabled,popupTemplate:l(this.popupTemplate)})}};o([j({type:["cluster"],readOnly:!0,json:{write:!0}})],C.prototype,"type",void 0),o([j({type:Number,cast:o=>"auto"===o?o:u(o),json:{write:!0}})],C.prototype,"clusterRadius",void 0),o([j({type:Number,cast:u,json:{write:!0}})],C.prototype,"clusterMinSize",void 0),o([j({type:Number,cast:u,json:{write:!0}})],C.prototype,"clusterMaxSize",void 0),o([j(f)],C.prototype,"popupEnabled",void 0),o([j({type:s,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],C.prototype,"popupTemplate",void 0),o([j({types:i,json:{write:{target:"drawingInfo.renderer"}}})],C.prototype,"renderer",void 0),o([c("renderer",["drawingInfo.renderer"])],C.prototype,"readRenderer",null),o([j({types:n})],C.prototype,"symbol",void 0),o([c("symbol",["drawingInfo.renderer"])],C.prototype,"readSymbol",null),o([b("symbol")],C.prototype,"writeSymbol",null),o([j({type:[S],json:{read:{source:"drawingInfo.labelingInfo"},write:{target:"drawingInfo.labelingInfo"}}})],C.prototype,"labelingInfo",void 0),o([j(k)],C.prototype,"labelsVisible",void 0),o([j({type:[h],json:{write:!0}})],C.prototype,"fields",void 0),o([b("fields")],C.prototype,"writeFields",null),o([c("fields")],C.prototype,"readFields",null),C=g=o([d("esri.layers.support.FeatureReductionCluster")],C);const M=C;export{M as default};