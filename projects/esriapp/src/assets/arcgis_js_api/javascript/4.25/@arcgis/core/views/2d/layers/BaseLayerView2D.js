/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{_ as t}from"../../../chunks/tslib.es6.js";import{property as s}from"../../../core/accessorSupport/decorators/property.js";import"../../../core/lang.js";import"../../../chunks/ensureType.js";import{subclass as e}from"../../../core/accessorSupport/decorators/subclass.js";import{c as i}from"../../../chunks/aaBoundingRect.js";import{e as r}from"../../../geometry/SpatialReference.js";import"../../../chunks/TileStrategy.js";import{T as o}from"../../../chunks/TileInfoView.js";import"../../../chunks/TileKey2.js";import{L as n}from"../../../chunks/LayerView2D.js";import{B as c}from"../../../chunks/Bitmap.js";import{B as m}from"../../../chunks/BitmapContainer.js";import p from"../../layers/LayerView.js";import{R as a}from"../../../chunks/RefreshableLayerView.js";import"../../../chunks/Logger.js";import"../../../config.js";import"../../../chunks/object.js";import"../../../chunks/maybe.js";import"../../../chunks/string.js";import"../../../chunks/get.js";import"../../../chunks/utils.js";import"../../../chunks/handleUtils.js";import"../../../chunks/metadata.js";import"../../../core/Error.js";import"../../../chunks/tracking.js";import"../../../chunks/mathUtils.js";import"../../../chunks/vec3.js";import"../../../chunks/common.js";import"../../../geometry/Extent.js";import"../../../geometry/Geometry.js";import"../../../core/JSONSupport.js";import"../../../core/Accessor.js";import"../../../core/Handles.js";import"../../../chunks/ArrayPool.js";import"../../../chunks/watch.js";import"../../../core/scheduling.js";import"../../../chunks/nextTick.js";import"../../../core/promiseUtils.js";import"../../../chunks/reader.js";import"../../../chunks/writer.js";import"../../../geometry/Point.js";import"../../../core/accessorSupport/decorators/cast.js";import"../../../geometry/support/webMercatorUtils.js";import"../../../chunks/Ellipsoid.js";import"../../../chunks/vec2.js";import"../../../chunks/QueueProcessor.js";import"../../../chunks/Queue.js";import"../../../core/Collection.js";import"../../../core/Evented.js";import"../../../chunks/shared.js";import"../../../chunks/SimpleObservable.js";import"../../../chunks/collectionUtils.js";import"../../../core/reactiveUtils.js";import"../../../chunks/Container.js";import"../../../chunks/mat3f32.js";import"../../../chunks/EffectView.js";import"../../../chunks/parser.js";import"../../../chunks/colorUtils.js";import"../../../chunks/screenUtils.js";import"../../../chunks/mat4f32.js";import"../../../chunks/mat4.js";import"../../../chunks/_commonjsHelpers.js";import"../../../chunks/DisplayObject.js";import"../../../chunks/ClipRect.js";import"../../../geometry.js";import"../../../geometry/Multipoint.js";import"../../../chunks/zmUtils.js";import"../../../geometry/Polygon.js";import"../../../chunks/extentUtils.js";import"../../../geometry/Polyline.js";import"../../../chunks/typeUtils.js";import"../../../chunks/jsonMap.js";import"../../../geometry/support/jsonUtils.js";import"../../../chunks/mat3.js";import"../../../chunks/vec2f32.js";import"../../../chunks/context-util.js";import"../../../chunks/enums3.js";import"../../../chunks/Texture.js";import"../../../chunks/WGLContainer.js";import"../../../chunks/WGLBrushVTLSymbol.js";import"../../../chunks/vec4f32.js";import"../../../chunks/definitions.js";import"../../../chunks/enums4.js";import"../../../chunks/number2.js";import"../../../chunks/FramebufferObject.js";import"../../../chunks/StyleDefinition.js";import"../../../chunks/enums.js";import"../../../chunks/config.js";import"../../../chunks/GeometryUtils2.js";import"../../../chunks/pixelUtils.js";import"../../../layers/support/PixelBlock.js";import"../../../chunks/DefaultVertexAttributeLayouts.js";import"../../../chunks/vec2f64.js";import"../../../chunks/VertexElementDescriptor.js";import"../../../chunks/Utils18.js";import"../../../chunks/ShaderCompiler.js";import"../../../chunks/ProgramTemplate.js";import"../../../chunks/Program.js";import"../../../chunks/MaterialKey.js";import"../../../chunks/alignmentUtils.js";import"../../../chunks/utils19.js";import"../../../chunks/heatmapUtils.js";import"../../../chunks/vec4f64.js";import"../../../Color.js";import"../../../chunks/heatmapTextureUtils.js";import"../../../chunks/earcut.js";import"../../../chunks/featureConversionUtils.js";import"../../../chunks/OptimizedFeature.js";import"../../../chunks/OptimizedFeatureSet.js";import"../../../core/HandleOwner.js";import"../../../chunks/WatchUpdatingTracking.js";import"../../../core/Identifiable.js";import"../../../core/Promise.js";class h extends m{constructor(t){super(),this.requestRender=this.requestRender.bind(this),this._layerView=t,this._canvas=document.createElement("canvas"),this._context=this._canvas.getContext("2d"),this._bitmap=new c(null,{immutable:!1,requestRenderOnSourceChangedEnabled:!1}),this.addChild(this._bitmap)}doRender(t){const s=t.state,e=this._createCustomRenderParams(t),i=this._canvas,r=this._bitmap,o=window.devicePixelRatio;i.width=s.size[0]*o,i.height=s.size[1]*o,r.resolution=s.resolution;const n=s.clone();n.pixelRatio=o,r.pixelRatio=o,e.state=n,r.x=s.viewpoint.targetGeometry.x-Math.abs(s.extent.xmax-s.extent.xmin)/2,r.y=s.viewpoint.targetGeometry.y+Math.abs(s.extent.ymax-s.extent.ymin)/2,this._layerView.render(e),r.source=i,r.rotation=s.rotation,super.doRender({...t,state:n})}_createCustomRenderParams(t){return{globalOpacity:t.globalOpacity,state:t.state,stationary:t.stationary,pixelRatio:window.devicePixelRatio,context:this._context}}}const u=new Set,l=[],j=[];class k{constructor(t,s,e,r,o,n,c,m=[0,0],p=i()){this.id=t,this.level=s,this.row=e,this.col=r,this.world=o,this.resolution=n,this.scale=c,this.coords=m,this.bounds=p}}let d=class extends(a(n(p))){constructor(t){super(t),this._tileMap=new Map,this.layer=null,this.tiles=[]}initialize(){this.display=new h(this),this.container.addChild(this.display)}get _tileInfoView(){const t=this.layer&&this.layer.tileInfo;return t?new o(t):null}attach(){}detach(){}requestRender(){this.display.requestRender()}tilesChanged(t,s){}supportsSpatialReference(t){const s=this.layer?.tileInfo;return!s||r(s.spatialReference,t)}async doRefresh(){}isUpdating(){return!1}update(t){const s=this._tileInfoView,e=this.tiles;if(s){const i=s.getTileCoverage(t.state,0),{spans:r,lodInfo:o}=i,{level:n}=o;if(r.length)for(const{row:t,colFrom:s,colTo:i}of r)for(let r=s;r<=i;r++){const s=o.normalizeCol(r),i=o.getWorldForColumn(r),c=`${n}/${t}/${s}/${i}`;if(!this._tileMap.has(c)){const r=new k(c,n,t,s,i,o.resolution,o.scale);o.getTileCoords(r.coords,r,!1),o.getTileBounds(r.bounds,r,!0),this._tileMap.set(c,r),e.push(r),l.push(r)}u.add(c)}}for(let t=e.length-1;t>=0;t--){const s=e[t];u.has(s.id)||(e.splice(t,1),j.push(s),this._tileMap.delete(s.id))}(l.length||j.length)&&(this.tilesChanged(l,j),l.length=j.length=0),u.clear(),this.requestRender()}moveStart(){}viewChange(){this.requestUpdate()}moveEnd(){}};t([s()],d.prototype,"_tileInfoView",null),t([s()],d.prototype,"layer",void 0),d=t([e("esri.views.2d.layers.BaseLayerView2D")],d);const y=d;export{y as default};
