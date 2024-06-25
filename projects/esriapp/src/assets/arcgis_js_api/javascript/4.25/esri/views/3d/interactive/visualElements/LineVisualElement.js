// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../core/maybe ../../../../chunks/mat4 ../../../../chunks/mat4f64 ../../../../chunks/vec3 ../../../../chunks/vec3f64 ../../../../chunks/vec4f32 ./Object3DVisualElement ../../support/engineContent/line ../../webgl-engine/lib/Material ../../webgl-engine/materials/RibbonLineMaterial".split(" "),function(t,u,e,v,z,k,h,p,r,w,A,B){r=function(x){function q(a,c){var b=x.call(this,a)||this;b._hasExternalMaterial=!1;b._renderOccluded=A.RenderOccludedFlag.OccludeAndTransparent;
b._width=1;b._color=p.fromValues(1,0,1,1);b._innerWidth=1;b._innerColor=null;b._stipplePattern=null;b._stippleOffColor=null;b._stipplePreferContinuous=!0;b._writeDepthEnabled=!0;b._falloff=0;b._polygonOffset=!1;b._material=c;b._hasExternalMaterial=e.isSome(c);b.applyProps(a);return b}u._inheritsLoose(q,x);var g=q.prototype;g.setGeometryFromRenderSpacePoint=function(a,c=1E3){const b=[];b.push([[a[0]-c,a[1]+0,a[2]+0],[a[0]+c,a[1]+0,a[2]+0]]);b.push([[a[0]-0,a[1]-c,a[2]+0],[a[0]+0,a[1]+c,a[2]+0]]);b.push([[a[0]-
0,a[1]+0,a[2]-c],[a[0]+0,a[1]+0,a[2]+c]]);this.geometry=b};g.setGeometryFromExtent=function(a){const c=this.view.spatialReference,b=h.create(),d=h.create(),f=[];k.set(b,a[0],a[1],100);this.view.renderCoordsHelper.toRenderCoords(b,c,d);f.push([d[0],d[1],d[2]]);k.set(b,a[2],a[1],100);this.view.renderCoordsHelper.toRenderCoords(b,c,d);f.push([d[0],d[1],d[2]]);k.set(b,a[2],a[3],100);this.view.renderCoordsHelper.toRenderCoords(b,c,d);f.push([d[0],d[1],d[2]]);k.set(b,a[0],a[3],100);this.view.renderCoordsHelper.toRenderCoords(b,
c,d);f.push([d[0],d[1],d[2]]);k.set(b,a[0],a[1],100);this.view.renderCoordsHelper.toRenderCoords(b,c,d);f.push([d[0],d[1],d[2]]);k.set(b,a[0],a[1],100);this.view.renderCoordsHelper.toRenderCoords(b,c,d);f.push([d[0],d[1],d[2]]);this.geometry=[f]};g.setGeometryFromFrustum=function(a){const c=[];a.lines.forEach(b=>{c.push([b.origin[0],b.origin[1],b.origin[2]]);c.push([b.endpoint[0],b.endpoint[1],b.endpoint[2]])});this.geometry=[c]};g.setGeometryFromBoundedPlane=function(a){const c=[],b=a.origin,d=a.basis1;
a=a.basis2;const f=h.create(),l=h.create(),m=h.create(),n=h.create();f[0]=b[0]-.5*d[0]-.5*a[0];f[1]=b[1]-.5*d[1]-.5*a[1];f[2]=b[2]-.5*d[2]-.5*a[2];l[0]=b[0]-.5*d[0]+.5*a[0];l[1]=b[1]-.5*d[1]+.5*a[1];l[2]=b[2]-.5*d[2]+.5*a[2];m[0]=b[0]+.5*d[0]+.5*a[0];m[1]=b[1]+.5*d[1]+.5*a[1];m[2]=b[2]+.5*d[2]+.5*a[2];n[0]=b[0]+.5*d[0]-.5*a[0];n[1]=b[1]+.5*d[1]-.5*a[1];n[2]=b[2]+.5*d[2]-.5*a[2];c.push([f[0],f[1],f[2]]);c.push([l[0],l[1],l[2]]);c.push([m[0],m[1],m[2]]);c.push([n[0],n[1],n[2]]);c.push([f[0],f[1],f[2]]);
this.geometry=[c]};g.setGeometryFromSegment=function(a){const c=a.endRenderSpace;this.transform=v.fromTranslation(y,c);({points:a}=a.createRenderGeometry(c,this.view.renderCoordsHelper));this.geometry=[a]};g.setGeometryFromSegments=function(a,c=h.ZEROS){this.transform=v.fromTranslation(y,c);this.geometry=a.map(b=>b.createRenderGeometry(c,this.view.renderCoordsHelper).points)};g.getTransformedGeometry=function(){return e.isNone(this._geometry)?null:this._geometry.map(a=>a.map(c=>k.transformMat4(h.create(),
c,this.transform)))};g.createExternalResources=function(){this._hasExternalMaterial||(this._material=new B.RibbonLineMaterial({width:this._width,color:this._color,stippleOffColor:this._stippleOffColor,stipplePattern:this._stipplePattern,stipplePreferContinuous:this._stipplePreferContinuous,isClosed:!1,falloff:this._falloff,innerColor:this._innerColor,innerWidth:this._innerWidth,hasPolygonOffset:this._polygonOffset,renderOccluded:this._renderOccluded,writeDepth:this._writeDepthEnabled}))};g.destroyExternalResources=
function(){this._hasExternalMaterial||(this._material=null)};g.createGeometries=function(a){for(const c of w.lineStripsToParameters(this.geometry)){const b=w.createGeometry(c);a.addGeometry(b,e.unwrap(this._material))}};g.forEachExternalMaterial=function(a){this._hasExternalMaterial||a(e.unwrap(this._material))};u._createClass(q,[{key:"renderOccluded",get:function(){return e.isSome(this._material)?this._material.parameters.renderOccluded:this._renderOccluded},set:function(a){this._renderOccluded=
a;e.isSome(this._material)&&this._material.setParameters({renderOccluded:a})}},{key:"geometry",get:function(){return this._geometry},set:function(a){this._geometry=a;this.recreateGeometry()}},{key:"width",get:function(){return e.isSome(this._material)?this._material.parameters.width:this._width},set:function(a){this._width=a;e.isSome(this._material)&&this._material.setParameters({width:a})}},{key:"color",get:function(){return e.isSome(this._material)?this._material.parameters.color:this._color},set:function(a){this._color=
p.clone(a);e.isSome(this._material)&&this._material.setParameters({color:this._color})}},{key:"innerWidth",get:function(){return e.isSome(this._material)?this._material.parameters.innerWidth:this._innerWidth},set:function(a){this._innerWidth=a;e.isSome(this._material)&&this._material.setParameters({innerWidth:a})}},{key:"innerColor",get:function(){return e.isSome(this._material)?this._material.parameters.innerColor:this._innerColor},set:function(a){this._innerColor=e.isSome(a)?p.clone(a):a;e.isSome(this._material)&&
this._material.setParameters({innerColor:this._innerColor})}},{key:"stipplePattern",get:function(){return e.isSome(this._material)?this._material.parameters.stipplePattern:this._stipplePattern},set:function(a){this._stipplePattern=a;e.isSome(this._material)&&this._material.setParameters({stipplePattern:a})}},{key:"stippleOffColor",get:function(){return e.isSome(this._material)?this._material.parameters.stippleOffColor:this._stippleOffColor},set:function(a){this._stippleOffColor=e.isSome(a)?p.clone(a):
null;e.isSome(this._material)&&this._material.setParameters({stippleOffColor:this._stippleOffColor})}},{key:"stipplePreferContinuous",get:function(){return e.isSome(this._material)?this._material.parameters.stipplePreferContinuous:this._stipplePreferContinuous},set:function(a){this._stipplePreferContinuous=a;e.isSome(this._material)&&this._material.setParameters({stipplePreferContinuous:a})}},{key:"writeDepthEnabled",get:function(){return e.isSome(this._material)?this._material.parameters.writeDepth:
this._writeDepthEnabled},set:function(a){this._writeDepthEnabled=a;e.isSome(this._material)&&this._material.setParameters({writeDepth:a})}},{key:"falloff",get:function(){return e.isSome(this._material)?this._material.parameters.falloff:this._falloff},set:function(a){this._falloff=a;e.isSome(this._material)&&this._material.setParameters({falloff:a})}},{key:"polygonOffset",get:function(){return e.isSome(this._material)?this._material.parameters.hasPolygonOffset:this._polygonOffset},set:function(a){this._polygonOffset=
a;e.isSome(this._material)&&this._material.setParameters({hasPolygonOffset:a})}}]);return q}(r.Object3DVisualElement);const y=z.create();t.LineVisualElement=r;Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});