// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/vec4 ../../../../chunks/vec4f64 ../core/shaderModules/Float4PassUniform ../core/shaderModules/interfaces".split(" "),function(c,e,f,g,h,d){d=function(b){function a(){return b.apply(this,arguments)||this}e._inheritsLoose(a,b);return a}(d.NoParameters);let k=function(b){function a(){return b.apply(this,arguments)||this}e._inheritsLoose(a,b);return a}(d);const l=g.create();c.SMAAPassParameters=d;c.ValidSMAAPassParameters=
k;c.addResolutionUniform=function(b){b.uniforms.add(new h.Float4PassUniform("resolution",a=>f.set(l,1/a.colorTexture.descriptor.width,1/a.colorTexture.descriptor.height,a.colorTexture.descriptor.width,a.colorTexture.descriptor.height)))};Object.defineProperties(c,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});