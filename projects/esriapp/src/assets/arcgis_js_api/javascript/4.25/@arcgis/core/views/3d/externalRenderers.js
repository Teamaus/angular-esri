/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{h as e}from"../../chunks/object.js";import{c as r}from"../../chunks/mat4f64.js";import{projectBuffer as t,computeTranslationToOriginAndRotation as s}from"../../geometry/projection.js";import n from"../../core/Collection.js";import{L as i}from"../../chunks/Logger.js";import{watch as o,initial as c}from"../../core/reactiveUtils.js";import{C as a}from"../../chunks/Camera.js";import{R as d,S as h}from"../../chunks/RenderSlot.js";import"../../core/lang.js";import"../../chunks/maybe.js";import"../../core/Error.js";import"../../config.js";import"../../chunks/string.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/common.js";import"../../core/promiseUtils.js";import"../../chunks/unitUtils.js";import"../../chunks/jsonMap.js";import"../../chunks/projectionEllipsoid.js";import"../../geometry/SpatialReference.js";import"../../chunks/tslib.es6.js";import"../../core/JSONSupport.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../chunks/ArrayPool.js";import"../../core/accessorSupport/decorators/subclass.js";import"../../chunks/tracking.js";import"../../chunks/ensureType.js";import"../../core/accessorSupport/decorators/property.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../chunks/writer.js";import"../../chunks/Ellipsoid.js";import"../../chunks/SimpleObservable.js";import"../../chunks/mat4.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../chunks/reader.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../chunks/pe.js";import"../../chunks/assets.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../geometry/Polyline.js";import"../../chunks/aaBoundingRect.js";import"../../chunks/geodesicConstants.js";import"../../geometry/support/GeographicTransformation.js";import"../../geometry/support/GeographicTransformationStep.js";import"../../chunks/zscale.js";import"../../core/Evented.js";import"../../chunks/shared.js";import"../../chunks/screenUtils.js";import"../../chunks/vec2.js";import"../../chunks/vec2f64.js";import"../../chunks/vec4f64.js";import"../../chunks/frustum.js";import"../../chunks/ray.js";import"../../chunks/byteSizeEstimations.js";import"../../chunks/mat3f64.js";import"../../chunks/quatf64.js";import"../../chunks/plane.js";import"../../chunks/vector.js";import"../../chunks/mathUtils2.js";import"../../chunks/ViewingMode.js";import"../../chunks/Util2.js";class p{constructor(e){this.view=e,this.camera=new a,this._renderTargetHelper=null}get gl(){return this.rctx.gl}resetWebGLState(){null!=this.rctx&&(this.rctx.enforceState(),this._renderTargetHelper&&this._renderTargetHelper.bindFramebuffer())}bindRenderTarget(){this._renderTargetHelper&&this._renderTargetHelper.framebuffer.initializeAndBind()}}class m{constructor(e){this.view=e,this.canRender=!0,this.renderers=new n,this._readyWatchHandle=o((()=>e.ready),(e=>{e?(this.context=new p(this.view),this.view._stage.addRenderPlugin([d.OPAQUE_MATERIAL,d.TRANSPARENT_MATERIAL],this)):(this.renderers.forEach((e=>u(e,"dispose",this.context))),this.context=null)}),c)}destroy(){this.renderers.drain((e=>{this.context&&u(e,"dispose",this.context)})),this.view._stage&&this.view._stage.removeRenderPlugin(this),this._readyWatchHandle&&(this._readyWatchHandle.remove(),this._readyWatchHandle=null),this.context=null}add(e){this.renderers.includes(e)?i.getLogger("esri.views.3d.externalRenderers.ExternalRendererStore").warn("add(): Cannot add external renderer: renderer has already been added"):(this.renderers.add(e),this.context&&(this._webglStateReset(),u(e,"setup",this.context),this.view._stage.renderView.requestRender()))}remove(e){const r=this.renderers.indexOf(e);-1!==r&&(this.renderers.removeAt(r),this.context&&(u(e,"dispose",this.context),this.view._stage.renderView.requestRender()))}initializeRenderContext(e){this.context.rctx=e.renderContext.rctx,this.renderers.length>0&&this._webglStateReset(),this.renderers.forEach((e=>u(e,"setup",this.context)))}uninitializeRenderContext(){}render(e){0===this.renderers.length||e.output!==h.Color||e.bindParameters.slot!==d.OPAQUE_MATERIAL&&e.bindParameters.slot!==d.TRANSPARENT_MATERIAL||(this._updateContext(e),this._webglStateReset(),this.renderers.forEach((r=>{switch(e.bindParameters.slot){case d.OPAQUE_MATERIAL:u(r,"render",this.context);break;case d.TRANSPARENT_MATERIAL:u(r,"renderTransparent",this.context)}})))}_updateContext(e){this.context.camera.copyFrom(e.bindParameters.camera),this.context.sunLight=e.bindParameters.lighting.legacy,this.context._renderTargetHelper=e.offscreenRenderingHelper}_webglStateReset(){this.context.rctx.resetState(),this.context._renderTargetHelper?.bindFramebuffer()}get needsTransparentPass(){return this.renderers.some((e=>"function"==typeof e.renderTransparent))}}function u(e,r,t){"function"==typeof e[r]&&e[r](t)}const l=new class{constructor(){this._renderers=new n}add(e,r){this._findOrCreateStageRenderer(e).add(r)}remove(e,r){const t=this._findStageRenderer(e);t&&t.remove(r),0===t.renderers.length&&(t.destroy(),this._renderers.remove(t))}_findStageRenderer(e){return this._renderers.find((r=>r.view===e))}_findOrCreateStageRenderer(e){let r=this._findStageRenderer(e);return r||(r=new m(e),this._renderers.add(r)),r}};function j(e,r){l.add(e,r)}function g(e,r){l.remove(e,r)}function f(e){e._stage.renderView.requestRender()}function k(e,r,s,n,i,o,c){return n=n||e.spatialReference,t(r,n,s,i,e.renderCoordsHelper.spatialReference,o,c)?i:null}function R(e,r,s,n,i,o,c){return o=o||e.spatialReference,t(r,e.renderCoordsHelper.spatialReference,s,n,o,i,c)?n:null}function x(e,t,n,i){return i||(i=r()),n=n||e.spatialReference,s(n,t,i,e.renderCoordsHelper.spatialReference)?i:null}function _(e){return e.state.camera.clone()}function b(e){return{add:j.bind(this,e),remove:g.bind(this,e),requestRender:f.bind(this,e),toRenderCoordinates:k.bind(this,e),fromRenderCoordinates:R.bind(this,e),renderCoordinateTransformAt:x.bind(this,e)}}function y(r){e.add("esri-force-webgl",r)}export{j as add,b as bind,y as forceWebGLContext,R as fromRenderCoordinates,_ as getRenderCamera,g as remove,x as renderCoordinateTransformAt,f as requestRender,k as toRenderCoordinates};
