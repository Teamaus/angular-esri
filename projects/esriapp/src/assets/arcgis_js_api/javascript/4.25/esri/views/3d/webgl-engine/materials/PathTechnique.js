// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("require exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../chunks/vec3f64 ../../../ViewingMode ../core/shaderLibrary/ShaderOutput ../core/shaderLibrary/attributes/PathVertexPosition.glsl ../core/shaderLibrary/shading/Normals.glsl ../core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl ../core/shaderLibrary/util/DoublePrecision.glsl ../core/shaderTechnique/ReloadableShaderModule ../core/shaderTechnique/ShaderTechnique ../core/shaderTechnique/ShaderTechniqueConfiguration ../lib/OrderIndependentTransparency ../lib/Program ../lib/StencilUtils ../lib/TransparencyPassType ../lib/VertexAttribute ./DefaultTechniqueConfiguration ../../../../chunks/Path.glsl ../../../webgl/context-util ../../../webgl/renderState".split(" "),
function(B,k,t,c,u,C,m,v,w,D,E,b,n,d,p,F,y,q,l,G,H,I,r){const z=new Map([[l.VertexAttribute.POSITION,0],[l.VertexAttribute.PROFILERIGHT,1],[l.VertexAttribute.PROFILEUP,2],[l.VertexAttribute.PROFILEVERTEXANDNORMAL,3],[l.VertexAttribute.FEATUREVALUE,4]]);v=function(g){function e(){var a=g.apply(this,arguments)||this;a.ambient=u.fromValues(.2,.2,.2);a.diffuse=u.fromValues(.8,.8,.8);a.specular=u.fromValues(0,0,0);a.opacity=1;return a}t._inheritsLoose(e,g);return e}(v.PathVertexPositionPassParameters);
n=function(g){function e(){return g.apply(this,arguments)||this}t._inheritsLoose(e,g);var a=e.prototype;a.initializeConfiguration=function(h,f){f.hasWebGL2Context=h.rctx.type===I.ContextType.WEBGL2;f.spherical=h.viewingMode===C.ViewingMode.Global;f.doublePrecisionRequiresObfuscation=E.doublePrecisionRequiresObfuscation(h.rctx)};a.initializeProgram=function(h){return new F.Program(h.rctx,e.shader.get().build(this.configuration),z)};a.initializePipeline=function(){const h=this.configuration.transparencyPassType,
f=this.configuration,x=h===q.TransparencyPassType.NONE,A=h===q.TransparencyPassType.FrontFace;return r.makePipelineState({blending:f.output!==m.ShaderOutput.Color&&f.output!==m.ShaderOutput.Alpha||!f.transparent?null:x?p.blendingDefault:p.oitBlending(h),culling:f.hasSlicePlane&&!f.transparent&&f.doubleSidedMode!==w.NormalsDoubleSidedMode.None&&r.frontFaceCullingParams,depthTest:{func:p.oitDepthTest(h)},depthWrite:x||A?r.defaultDepthWriteParams:null,colorWrite:r.defaultColorWriteParams,stencilWrite:f.hasOccludees?
y.stencilWriteMaskOn:null,stencilTest:f.hasOccludees?y.stencilBaseAllZerosParams:null,polygonOffset:x||A?null:p.OITPolygonOffset})};return e}(n.ShaderTechnique);n.shader=new b.ReloadableShaderModule(H.Path,()=>new Promise((g,e)=>B(["../shaders/Path.glsl"],g,e)));b=function(g){function e(){var a=g.apply(this,arguments)||this;a.output=m.ShaderOutput.Color;a.doubleSidedMode=w.NormalsDoubleSidedMode.None;a.transparencyPassType=q.TransparencyPassType.NONE;a.spherical=!1;a.receiveShadows=!1;a.receiveAmbientOcclusion=
!1;a.vvSize=!1;a.vvColor=!1;a.vvOpacity=!1;a.hasSlicePlane=!1;a.transparent=!1;a.hasOccludees=!1;a.hasMultipassTerrain=!1;a.cullAboveGround=!1;a.doublePrecisionRequiresObfuscation=!1;return a}t._inheritsLoose(e,g);return e}(G.DefaultTechniqueConfiguration);c.__decorate([d.parameter({count:m.ShaderOutput.COUNT})],b.prototype,"output",void 0);c.__decorate([d.parameter({count:w.NormalsDoubleSidedMode.COUNT})],b.prototype,"doubleSidedMode",void 0);c.__decorate([d.parameter({count:q.TransparencyPassType.COUNT})],
b.prototype,"transparencyPassType",void 0);c.__decorate([d.parameter()],b.prototype,"spherical",void 0);c.__decorate([d.parameter()],b.prototype,"receiveShadows",void 0);c.__decorate([d.parameter()],b.prototype,"receiveAmbientOcclusion",void 0);c.__decorate([d.parameter()],b.prototype,"vvSize",void 0);c.__decorate([d.parameter()],b.prototype,"vvColor",void 0);c.__decorate([d.parameter()],b.prototype,"vvOpacity",void 0);c.__decorate([d.parameter()],b.prototype,"hasSlicePlane",void 0);c.__decorate([d.parameter()],
b.prototype,"transparent",void 0);c.__decorate([d.parameter()],b.prototype,"hasOccludees",void 0);c.__decorate([d.parameter()],b.prototype,"hasMultipassTerrain",void 0);c.__decorate([d.parameter()],b.prototype,"cullAboveGround",void 0);c.__decorate([d.parameter()],b.prototype,"doublePrecisionRequiresObfuscation",void 0);c.__decorate([d.parameter({constValue:D.PBRMode.Disabled})],b.prototype,"pbrMode",void 0);c.__decorate([d.parameter({constValue:!0})],b.prototype,"hasVvInstancing",void 0);c.__decorate([d.parameter({constValue:!1})],
b.prototype,"useCustomDTRExponentForWater",void 0);c.__decorate([d.parameter({constValue:!1})],b.prototype,"useFillLights",void 0);k.PathPassParameters=v;k.PathTechnique=n;k.PathTechniqueConfiguration=b;k.vertexAttributeLocations=z;Object.defineProperties(k,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});