/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import s from"../../../core/Error.js";import{h as r,a as t}from"../../../chunks/utils11.js";import{c as o}from"../../../chunks/layerUtils2.js";import"../../../core/lang.js";import"../../../chunks/maybe.js";import"../../../chunks/Logger.js";import"../../../config.js";import"../../../chunks/object.js";import"../../../chunks/string.js";import"../../../chunks/arcadeOnDemand.js";import"../../../geometry.js";import"../../../chunks/ensureType.js";import"../../../geometry/Extent.js";import"../../../chunks/tslib.es6.js";import"../../../core/accessorSupport/decorators/property.js";import"../../../chunks/get.js";import"../../../chunks/utils.js";import"../../../chunks/handleUtils.js";import"../../../chunks/metadata.js";import"../../../core/accessorSupport/decorators/subclass.js";import"../../../chunks/tracking.js";import"../../../geometry/Geometry.js";import"../../../core/JSONSupport.js";import"../../../core/Accessor.js";import"../../../core/Handles.js";import"../../../chunks/ArrayPool.js";import"../../../chunks/watch.js";import"../../../core/scheduling.js";import"../../../chunks/nextTick.js";import"../../../core/promiseUtils.js";import"../../../chunks/reader.js";import"../../../geometry/SpatialReference.js";import"../../../chunks/writer.js";import"../../../geometry/Point.js";import"../../../core/accessorSupport/decorators/cast.js";import"../../../geometry/support/webMercatorUtils.js";import"../../../chunks/Ellipsoid.js";import"../../../geometry/Multipoint.js";import"../../../chunks/zmUtils.js";import"../../../geometry/Polygon.js";import"../../../chunks/extentUtils.js";import"../../../geometry/Polyline.js";import"../../../chunks/typeUtils.js";import"../../../chunks/jsonMap.js";import"../../../geometry/support/jsonUtils.js";import"../../../chunks/basemapUtils.js";import"../../../Basemap.js";import"../../../core/Collection.js";import"../../../core/Evented.js";import"../../../chunks/shared.js";import"../../../chunks/SimpleObservable.js";import"../../../chunks/collectionUtils.js";import"../../../core/Loadable.js";import"../../../core/Promise.js";import"../../../chunks/loadAll.js";import"../../../chunks/asyncUtils.js";import"../../../core/urlUtils.js";import"../../../portal/Portal.js";import"../../../kernel.js";import"../../../request.js";import"../../../chunks/locale.js";import"../../../portal/PortalQueryParams.js";import"../../../portal/PortalQueryResult.js";import"../../../portal/PortalUser.js";import"../../../portal/PortalFolder.js";import"../../../portal/PortalGroup.js";import"../../../portal/PortalItem.js";import"../../../chunks/assets.js";import"../../../portal/PortalItemResource.js";import"../../../portal/PortalRating.js";import"../../../chunks/messages.js";import"../../../chunks/writeUtils.js";import"../../../chunks/layerUtils.js";import"../../../chunks/generateRendererUtils.js";import"../../../chunks/colorRamps.js";import"../../../rest/support/AlgorithmicColorRamp.js";import"../../../Color.js";import"../../../chunks/colorUtils.js";import"../../../chunks/mathUtils.js";import"../../../chunks/vec3.js";import"../../../chunks/common.js";import"../../../chunks/enumeration.js";import"../../../rest/support/ColorRamp.js";import"../../../rest/support/MultipartColorRamp.js";import"../../../symbols/Symbol.js";import"../../../chunks/statsWorker.js";import"../../../chunks/screenUtils.js";import"../../../chunks/quantizationUtils.js";import"../../../layers/support/fieldUtils.js";import"../../../chunks/heatmapUtils.js";import"../../../chunks/vec4f64.js";import"../../../chunks/utils13.js";import"../../../core/workers/workers.js";import"../../../core/workers/Connection.js";import"../../../chunks/Queue.js";import"../../../core/workers/RemoteClient.js";import"../../../intl.js";import"../../../chunks/number.js";import"../../../core/reactiveUtils.js";import"../../../chunks/arcgisLayerUrl.js";import"../../../chunks/persistableUrlUtils.js";import"../../../chunks/fieldType.js";import"../../../rest/support/Query.js";import"../../../TimeExtent.js";import"../../../chunks/timeUtils.js";import"../../../chunks/DataLayerSource.js";import"../../../layers/support/Field.js";import"../../../chunks/domains.js";import"../../../layers/support/CodedValueDomain.js";import"../../../layers/support/Domain.js";import"../../../layers/support/InheritedDomain.js";import"../../../layers/support/RangeDomain.js";import"../../../chunks/FullTextSearch.js";import"../../../core/Clonable.js";import"../../../rest/support/StatisticDefinition.js";import"./predominanceUtils.js";import"../../../chunks/utils12.js";import"../../../renderers/support/jsonUtils.js";import"../../../renderers/ClassBreaksRenderer.js";import"../../../symbols.js";import"../../../symbols/CIMSymbol.js";import"../../../symbols/ExtrudeSymbol3DLayer.js";import"../../../symbols/Symbol3DLayer.js";import"../../../chunks/utils2.js";import"../../../symbols/edges/Edges3D.js";import"../../../chunks/materialUtils.js";import"../../../chunks/opacityUtils.js";import"../../../symbols/edges/SketchEdges3D.js";import"../../../symbols/edges/SolidEdges3D.js";import"../../../chunks/Symbol3DMaterial.js";import"../../../symbols/FillSymbol.js";import"../../../symbols/SimpleLineSymbol.js";import"../../../symbols/LineSymbol.js";import"../../../symbols/LineSymbolMarker.js";import"../../../chunks/lineMarkers.js";import"../../../symbols/FillSymbol3DLayer.js";import"../../../symbols/patterns/LineStylePattern3D.js";import"../../../symbols/patterns/StylePattern3D.js";import"../../../chunks/utils3.js";import"../../../chunks/colors.js";import"../../../chunks/symbolLayerUtils3D.js";import"../../../chunks/aaBoundingBox.js";import"../../../chunks/aaBoundingRect.js";import"../../../symbols/Font.js";import"../../../symbols/IconSymbol3DLayer.js";import"../../../symbols/LabelSymbol3D.js";import"../../../symbols/Symbol3D.js";import"../../../symbols/LineSymbol3DLayer.js";import"../../../symbols/LineStyleMarker3D.js";import"../../../symbols/ObjectSymbol3DLayer.js";import"../../../symbols/PathSymbol3DLayer.js";import"../../../symbols/TextSymbol3DLayer.js";import"../../../symbols/WaterSymbol3DLayer.js";import"../../../symbols/support/StyleOrigin.js";import"../../../chunks/Thumbnail.js";import"../../../chunks/calloutUtils.js";import"../../../symbols/callouts/Callout3D.js";import"../../../symbols/callouts/LineCallout3D.js";import"../../../symbols/support/Symbol3DVerticalOffset.js";import"../../../symbols/LineSymbol3D.js";import"../../../symbols/MarkerSymbol.js";import"../../../symbols/MeshSymbol3D.js";import"../../../symbols/PictureFillSymbol.js";import"../../../chunks/urlUtils.js";import"../../../symbols/PictureMarkerSymbol.js";import"../../../symbols/PointSymbol3D.js";import"../../../symbols/PolygonSymbol3D.js";import"../../../symbols/SimpleFillSymbol.js";import"../../../symbols/SimpleMarkerSymbol.js";import"../../../symbols/TextSymbol.js";import"../../../symbols/WebStyleSymbol.js";import"../../../renderers/Renderer.js";import"../../../renderers/support/AuthoringInfo.js";import"../../../renderers/support/AuthoringInfoVisualVariable.js";import"../../../renderers/mixins/VisualVariablesMixin.js";import"../../../renderers/visualVariables/ColorVariable.js";import"../../../renderers/visualVariables/VisualVariable.js";import"../../../chunks/LegendOptions.js";import"../../../renderers/visualVariables/support/ColorStop.js";import"../../../renderers/visualVariables/OpacityVariable.js";import"../../../renderers/visualVariables/support/OpacityStop.js";import"../../../renderers/visualVariables/RotationVariable.js";import"../../../renderers/visualVariables/SizeVariable.js";import"../../../renderers/visualVariables/support/SizeStop.js";import"../../../chunks/sizeVariableUtils.js";import"../../../chunks/visualVariableUtils.js";import"../../../Graphic.js";import"../../../PopupTemplate.js";import"../../../popup/content.js";import"../../../popup/content/AttachmentsContent.js";import"../../../popup/content/Content.js";import"../../../popup/content/CustomContent.js";import"../../../popup/content/ExpressionContent.js";import"../../../popup/ElementExpressionInfo.js";import"../../../popup/content/FieldsContent.js";import"../../../popup/FieldInfo.js";import"../../../popup/support/FieldInfoFormat.js";import"../../../chunks/date.js";import"../../../popup/content/MediaContent.js";import"../../../popup/content/BarChartMediaInfo.js";import"../../../popup/content/mixins/ChartMediaInfo.js";import"../../../popup/content/mixins/MediaInfo.js";import"../../../popup/content/support/ChartMediaInfoValue.js";import"../../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../../chunks/chartMediaInfoUtils.js";import"../../../popup/content/ColumnChartMediaInfo.js";import"../../../popup/content/ImageMediaInfo.js";import"../../../popup/content/support/ImageMediaInfoValue.js";import"../../../popup/content/LineChartMediaInfo.js";import"../../../popup/content/PieChartMediaInfo.js";import"../../../popup/content/RelationshipContent.js";import"../../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../../popup/content/TextContent.js";import"../../../popup/ExpressionInfo.js";import"../../../popup/LayerOptions.js";import"../../../popup/RelatedRecordsInfo.js";import"../../../support/actions/ActionBase.js";import"../../../core/Identifiable.js";import"../../../support/actions/ActionButton.js";import"../../../support/actions/ActionToggle.js";import"../../../chunks/compilerUtils.js";import"../../../chunks/lengthUtils.js";import"../../../chunks/unitUtils.js";import"../../../chunks/projectionEllipsoid.js";import"../../../renderers/support/ClassBreakInfo.js";import"../../../chunks/commonProperties2.js";import"../../../symbols/support/jsonUtils.js";import"../../../chunks/symbolConversion.js";import"../../../renderers/DictionaryRenderer.js";import"../../../chunks/DictionaryLoader.js";import"../../../chunks/LRUCache.js";import"../../../chunks/MemCache.js";import"../../../renderers/DotDensityRenderer.js";import"../../../renderers/support/AttributeColorInfo.js";import"../../../renderers/HeatmapRenderer.js";import"../../../renderers/support/HeatmapColorStop.js";import"../../../renderers/PieChartRenderer.js";import"../../../renderers/SimpleRenderer.js";import"../../../renderers/UniqueValueRenderer.js";import"../../../chunks/diffUtils.js";import"../../../renderers/support/UniqueValue.js";import"../../../renderers/support/UniqueValueClass.js";import"../../../renderers/support/UniqueValueGroup.js";import"../../../renderers/support/UniqueValueInfo.js";import"../../../chunks/styleUtils2.js";import"../../../chunks/executeQuery.js";import"../../../chunks/executeQueryJSON.js";import"../../../chunks/utils4.js";import"../../../chunks/query.js";import"../../../geometry/support/normalizeUtils.js";import"../../../chunks/normalizeUtilsCommon.js";import"../../../chunks/simplify.js";import"../../../chunks/utils5.js";import"../../../chunks/pbfQueryUtils.js";import"../../../chunks/pbf.js";import"../../../chunks/OptimizedFeature.js";import"../../../chunks/OptimizedFeatureSet.js";import"../../../chunks/queryZScale.js";import"../../../chunks/zscale.js";import"../../../rest/support/FeatureSet.js";import"../../../chunks/executeQueryPBF.js";import"../../../chunks/featureConversionUtils.js";import"../../../rest/query/support/AttachmentInfo.js";import"../../../rest/support/AttachmentQuery.js";import"../../../rest/support/RelationshipQuery.js";import"../../../rest/support/TopFeaturesQuery.js";import"../../../rest/support/TopFilter.js";import"../../../chunks/Task.js";const e=["date","number"],i=["years","months","days","hours","minutes","seconds"];function p(t,o,i,p){const m=[];let n=null;return[o,i].every((s=>{const o=r(t,s);return o&&m.push(o),!!o}))?m[0]===m[1]?"field"===m[0]?o===i&&(n=new s(p,"'startTime' and 'endTime' parameters cannot be identical")):n=new s(p,"Invalid combination of 'startTime' and 'endTime' parameters"):e.includes(m[0])&&e.includes(m[1])&&(n=new s(p,"Invalid combination of 'startTime' and 'endTime' parameters")):n=new s(p,"'startTime' and 'endTime' parameters must be one of these values: a date object, unix epoch time, name of a valid date field or <now>"),n}function m(s,r,t){let o;return o="number"===r?s:"date"===r?s.getTime():'$feature["'+s+'"]',"var "+t+" = "+o+";"}function n(s,t,o,e){const i=r(s,t),p=r(s,o),n=[m(t,i,"startTime"),m(o,p,"endTime"),`var retVal = null;\n\n    if (startTime != null && endTime != null) {\n      startTime = Date(startTime);\n      endTime = Date(endTime);\n      retVal = DateDiff(endTime, startTime, "${e}");\n    }\n\n    return retVal;`],l=[];return"field"===i&&l.push(t),"field"===p&&l.push(o),function(s){const r=s.map((s=>`$feature["${s}"];`));return r.length?r.join("\n")+"\n":""}(l)+n.join("\n")}function l(s){const{layer:r,startTime:e,endTime:i}=s,p=o(r),m=s.unit||"days",l=t(p,e,i,m);return{valueExpression:n(p,e,i,m),statisticsQuery:l,histogramQuery:l}}export{l as getAgeExpressions,i as supportedAgeUnits,p as verifyDates};