// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../core/maybe ../../../../../chunks/vec2 ../../../../../chunks/vec2f64 ../shaderLibrary/util/WebGL2Utils ./Float2PassUniform ./TextureSizeUniformType ./Uniform ../shaderTechnique/BindType".split(" "),function(g,t,l,m,h,n,p,k,u,v){let q=function(b){function c(d,e){return b.call(this,d,"sampler2D",v.BindType.Pass,(a,f,w)=>a.bindTexture(d,e(f,w)))||this}t._inheritsLoose(c,b);return c}(u.Uniform);const r=h.create();g.Texture2DPassUniform=
q;g.createTexture2DPassSizeUniforms=function(b,c,d=k.TextureSizeUniformType.None){const e=[new q(b,c)];d&k.TextureSizeUniformType.Size&&e.push(new p.Float2PassUniform(b+n.TEXTURE_SIZE_UNIFORM_SUFFIX,(a,f)=>{a=c(a,f);return l.isSome(a)?m.set(r,a.descriptor.width,a.descriptor.height):h.ZEROS}));d&k.TextureSizeUniformType.InvSize&&e.push(new p.Float2PassUniform(b+n.TEXTURE_INVERSE_SIZE_UNIFORM_SUFFIX,(a,f)=>{a=c(a,f);return l.isSome(a)?m.set(r,1/a.descriptor.width,1/a.descriptor.height):h.ZEROS}));return e};
Object.defineProperties(g,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});