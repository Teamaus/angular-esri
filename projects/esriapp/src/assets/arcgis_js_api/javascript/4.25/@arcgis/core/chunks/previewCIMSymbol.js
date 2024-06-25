/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{p as o,a as t}from"./screenUtils.js";import{O as s,C as r}from"./cimAnalyzer.js";import{GeometryStyle as i,CIMSymbolRasterizer as e}from"./CIMSymbolRasterizer.js";import{m}from"./utils7.js";import{S as l,h as p}from"../symbols/support/symbolUtils.js";import"../Color.js";import"./colorUtils.js";import"./mathUtils.js";import"./vec3.js";import"./common.js";import"./maybe.js";import"./ensureType.js";import"./object.js";import"../core/lang.js";import"./Logger.js";import"../config.js";import"./string.js";import"./fontUtils.js";import"./arcadeOnDemand.js";import"../geometry.js";import"../geometry/Extent.js";import"./tslib.es6.js";import"../core/accessorSupport/decorators/property.js";import"./get.js";import"./utils.js";import"./handleUtils.js";import"./metadata.js";import"../core/Error.js";import"../core/accessorSupport/decorators/subclass.js";import"./tracking.js";import"../geometry/Geometry.js";import"../core/JSONSupport.js";import"../core/Accessor.js";import"../core/Handles.js";import"./ArrayPool.js";import"./watch.js";import"../core/scheduling.js";import"./nextTick.js";import"../core/promiseUtils.js";import"./reader.js";import"../geometry/SpatialReference.js";import"./writer.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"./Ellipsoid.js";import"../geometry/Multipoint.js";import"./zmUtils.js";import"../geometry/Polygon.js";import"./extentUtils.js";import"../geometry/Polyline.js";import"./typeUtils.js";import"./jsonMap.js";import"../geometry/support/jsonUtils.js";import"./shapingUtils.js";import"./BidiEngine.js";import"./mat2d.js";import"./mat2df32.js";import"./vec2.js";import"./vec2f32.js";import"./alignmentUtils.js";import"./number2.js";import"./Rect.js";import"./aaBoundingRect.js";import"./enums.js";import"./definitions.js";import"./callExpressionWithFeature.js";import"./quantizationUtils.js";import"./GeometryUtils.js";import"./floatRGBA.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"./Rasterizer.js";import"./_commonjsHelpers.js";import"./imageutils2.js";import"./rasterizingUtils.js";import"../symbols/support/cimSymbolUtils.js";import"../symbols/IconSymbol3DLayer.js";import"./enumeration.js";import"../symbols/Symbol3DLayer.js";import"./colors.js";import"./persistableUrlUtils.js";import"./materialUtils.js";import"./opacityUtils.js";import"./Symbol3DMaterial.js";import"./utils6.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../layers/support/fieldUtils.js";import"../symbols/Symbol.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"./utils2.js";import"../symbols/edges/Edges3D.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"./lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"./utils3.js";import"./symbolLayerUtils3D.js";import"./aaBoundingBox.js";import"../symbols/Font.js";import"../symbols/LabelSymbol3D.js";import"../core/Collection.js";import"../core/Evented.js";import"./shared.js";import"./SimpleObservable.js";import"../symbols/Symbol3D.js";import"./collectionUtils.js";import"../portal/Portal.js";import"../core/Loadable.js";import"../core/Promise.js";import"./locale.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../core/Clonable.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/support/StyleOrigin.js";import"./Thumbnail.js";import"./calloutUtils.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/support/Symbol3DVerticalOffset.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"./urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"./asyncUtils.js";import"./jsonUtils.js";import"./parser.js";import"./mat4f32.js";import"./mat4.js";import"./assets.js";import"./ItemCache.js";import"./MemCache.js";import"./colorUtils2.js";import"./projector.js";import"./widgetUtils.js";import"./jsxFactory.js";import"./jsxWidgetSupport.js";const j=new e(null,!0),a=o(l.size),y=o(l.maxSize),n=o(l.lineWidth);async function c(o,e={}){const{node:l,opacity:c,symbolConfig:b}=e,u="object"==typeof b&&"isSquareFill"in b&&b.isSquareFill,g=e.cimOptions||e,d=g.geometryType||m(o?.data?.symbol),S=function(o){const t=o?.size;return"number"==typeof t?{width:t,height:t}:{width:null!=t&&"object"==typeof t&&"width"in t?t.width:null,height:null!=t&&"object"==typeof t&&"height"in t?t.height:null}}(e),{feature:h,fieldMap:f}=g;if(null==S.width||null==S.height){const t=await s.resolveSymbolOverrides(o.data,h,null,f,d);if(!t)return null;(o=o.clone()).data={type:"CIMSymbolReference",symbol:t},o.data.primitiveOverrides=null;const i=[];r.fetchResources(t,j.resourceManager,i),i.length>0&&await Promise.all(i);const{width:e,height:m}=r.getEnvelope(t,null,j.resourceManager);S.width="esriGeometryPolygon"===d?a:"esriGeometryPolyline"===d?n:null!=e&&isFinite(e)?Math.min(e,y):a,S.height="esriGeometryPolygon"===d?a:null!=m&&isFinite(m)?Math.max(Math.min(m,y),1):a}const U=await j.rasterizeCIMSymbolAsync(o,h,S,u||"esriGeometryPolygon"!==d?i.Preview:i.Legend,f,d);if(!U)return null;const{width:D,height:P}=U,w=document.createElement("canvas");w.width=D,w.height=P,w.getContext("2d").putImageData(U,0,0);const L=t(S.width),M=t(S.height),x=new Image(L,M);x.src=w.toDataURL(),null!=c&&(x.style.opacity=`${c}`);let C=x;if(null!=e.effectView){const o={shape:{type:"image",x:0,y:0,width:L,height:M,src:x.src},fill:null,stroke:null,offset:[0,0]};C=p([[o]],[L,M],{effectView:e.effectView})}return l&&C&&l.appendChild(C),C}export{c as previewCIMSymbol};
