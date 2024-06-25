// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../../../core/Logger ../../../../../core/MapUtils ../../../../../core/maybe ../../../../../chunks/quat ../../../../../chunks/quatf64 ../../../../../chunks/vec3 ../../../../../chunks/vec3f64 ../../../MeshMaterialMetallicRoughness ../../georeference ./buffer ./geometry ./types ./imageutils ../../../../../views/webgl/enums".split(" "),function(G,C,M,q,N,H,I,v,O,P,J,K,g,D,l){const Q=C.getLogger("gltf");C=function(){function L(b,a,c){this.params={};this._materialMap=[];this._imageMap=
new Map;this._textureMap=new Map;this.gltf={asset:{version:"2.0",copyright:b.copyright,generator:b.generator},extras:{options:a,binChunkBuffer:null,promises:[]}};c&&(this.params=c);this._addScenes(b)}var n=L.prototype;n._addScenes=function(b){this.gltf.scene=b.defaultScene;const a=this.gltf.extras,c=a.options.bufferOutputType===g.BufferOutputType.GLB||a.options.imageOutputType===g.ImageOutputType.GLB;c&&(a.binChunkBuffer=new J.Buffer(this.gltf));b.forEachScene(d=>{this._addScene(d)});c&&a.binChunkBuffer.finalize()};
n._addScene=function(b){this.gltf.scenes||(this.gltf.scenes=[]);const a={};b.name&&(a.name=b.name);b.forEachNode(c=>{a.nodes||(a.nodes=[]);c=this._addNode(c);a.nodes.push(c)});this.gltf.scenes.push(a)};n._addNode=function(b){this.gltf.nodes||(this.gltf.nodes=[]);const a={};b.name&&(a.name=b.name);var c=b.translation;I.exactEquals(c,v.ZEROS)||(a.translation=v.clone(c));c=b.rotation;N.exactEquals(c,H.IDENTITY)||(a.rotation=H.clone(c));c=b.scale;I.exactEquals(c,v.ONES)||(a.scale=v.clone(c));b.mesh&&
b.mesh.vertexAttributes.position?a.mesh=this._addMesh(b.mesh):b.forEachNode(d=>{a.children||(a.children=[]);d=this._addNode(d);a.children.push(d)});b=this.gltf.nodes.length;this.gltf.nodes.push(a);return b};n._addMesh=function(b){this.gltf.meshes||(this.gltf.meshes=[]);const a={primitives:[]};var c=this.gltf.extras;const d=c.options.bufferOutputType===g.BufferOutputType.GLB;c=d?c.binChunkBuffer:new J.Buffer(this.gltf);this.params.origin||(this.params.origin=K.computeOrigin(b));var e=P.ungeoreferenceByTransform(b.vertexAttributes,
b.transform,this.params.origin,{geographic:this.params.geographic,unit:"meters"});K.smoothNormals(b,e);this._flipYZAxis(e);const k=c.addBufferView(l.DataType.FLOAT,g.AttributeType.VEC3,g.TargetBuffer.ARRAY_BUFFER);let f;e.normal&&(f=c.addBufferView(l.DataType.FLOAT,g.AttributeType.VEC3,g.TargetBuffer.ARRAY_BUFFER));let m;b.vertexAttributes.uv&&(m=c.addBufferView(l.DataType.FLOAT,g.AttributeType.VEC2,g.TargetBuffer.ARRAY_BUFFER));let h;e.tangent&&(h=c.addBufferView(l.DataType.FLOAT,g.AttributeType.VEC4,
g.TargetBuffer.ARRAY_BUFFER));let p;b.vertexAttributes.color&&(p=c.addBufferView(l.DataType.UNSIGNED_BYTE,g.AttributeType.VEC4,g.TargetBuffer.ARRAY_BUFFER));k.startAccessor("POSITION");f&&f.startAccessor("NORMAL");m&&m.startAccessor("TEXCOORD_0");h&&h.startAccessor("TANGENT");p&&p.startAccessor("COLOR_0");var r=e.position.length/3;const {position:E,normal:w,tangent:t}=e,{color:u,uv:F}=b.vertexAttributes;for(e=0;e<r;++e)k.push(E[3*e]),k.push(E[3*e+1]),k.push(E[3*e+2]),f&&q.isSome(w)&&(f.push(w[3*e]),
f.push(w[3*e+1]),f.push(w[3*e+2])),m&&q.isSome(F)&&(m.push(F[2*e]),m.push(F[2*e+1])),h&&q.isSome(t)&&(h.push(t[4*e]),h.push(t[4*e+1]),h.push(t[4*e+2]),h.push(t[4*e+3])),p&&q.isSome(u)&&(p.push(u[4*e]),p.push(u[4*e+1]),p.push(u[4*e+2]),p.push(u[4*e+3]));r=k.endAccessor();r=this._addAccessor(k.index,r);if(f){var x=f.endAccessor();x=this._addAccessor(f.index,x)}if(m){var y=m.endAccessor();y=this._addAccessor(m.index,y)}if(h){var z=h.endAccessor();z=this._addAccessor(h.index,z)}if(p){var A=p.endAccessor();
A=this._addAccessor(p.index,A)}let B;b.components&&0<b.components.length&&b.components[0].faces?(B=c.addBufferView(l.DataType.UNSIGNED_INT,g.AttributeType.SCALAR,g.TargetBuffer.ELEMENT_ARRAY_BUFFER),this._addMeshVertexIndexed(B,b.components,a,r,x,y,z,A)):this._addMeshVertexNonIndexed(b.components,a,r,x,y,z,A);k.finalize();f&&f.finalize();m&&m.finalize();h&&h.finalize();B&&B.finalize();p&&p.finalize();d||c.finalize();b=this.gltf.meshes.length;this.gltf.meshes.push(a);return b};n._flipYZAxis=function({position:b,
normal:a,tangent:c}){this._flipYZBuffer(b,3);this._flipYZBuffer(a,3);this._flipYZBuffer(c,4)};n._flipYZBuffer=function(b,a){if(!q.isNone(b))for(let c=1,d=2;c<b.length;c+=a,d+=a){const e=b[c];b[c]=b[d];b[d]=-e}};n._addMaterial=function(b){if(null!==b){var a=this._materialMap.indexOf(b);if(-1!==a)return a;this.gltf.materials||(this.gltf.materials=[]);a={};switch(b.alphaMode){case "mask":a.alphaMode=g.AlphaMode.MASK;break;case "auto":case "blend":a.alphaMode=g.AlphaMode.BLEND}.5!==b.alphaCutoff&&(a.alphaCutoff=
b.alphaCutoff);b.doubleSided&&(a.doubleSided=b.doubleSided);a.pbrMetallicRoughness={};var c=d=>{d=d.toRgba();d[0]=(d[0]/255)**2.1;d[1]=(d[1]/255)**2.1;d[2]=(d[2]/255)**2.1;return d};q.isSome(b.color)&&(a.pbrMetallicRoughness.baseColorFactor=c(b.color));q.isSome(b.colorTexture)&&(a.pbrMetallicRoughness.baseColorTexture={index:this._addTexture(b.colorTexture)});q.isSome(b.normalTexture)&&(a.normalTexture={index:this._addTexture(b.normalTexture)});b instanceof O?(q.isSome(b.emissiveTexture)&&(a.emissiveTexture=
{index:this._addTexture(b.emissiveTexture)}),q.isSome(b.emissiveColor)&&(c=c(b.emissiveColor),a.emissiveFactor=[c[0],c[1],c[2]]),q.isSome(b.occlusionTexture)&&(a.occlusionTexture={index:this._addTexture(b.occlusionTexture)}),q.isSome(b.metallicRoughnessTexture)&&(a.pbrMetallicRoughness.metallicRoughnessTexture={index:this._addTexture(b.metallicRoughnessTexture)}),a.pbrMetallicRoughness.metallicFactor=b.metallic,a.pbrMetallicRoughness.roughnessFactor=b.roughness):(a.pbrMetallicRoughness.metallicFactor=
1,a.pbrMetallicRoughness.roughnessFactor=1,Q.warnOnce("Meshes exported to GLTF without MeshMaterialMetallicRoughness material will appear different when imported back."));c=this.gltf.materials.length;this.gltf.materials.push(a);this._materialMap.push(b);return c}};n._addTexture=function(b){const a=this.gltf.textures??[];this.gltf.textures=a;return M.getOrCreateMapValue(this._textureMap,b,()=>{const c={sampler:this._addSampler(b),source:this._addImage(b)},d=a.length;a.push(c);return d})};n._addImage=
function(b){var a=this._imageMap.get(b);if(null!=a)return a;this.gltf.images||(this.gltf.images=[]);const c={};if(b.url)c.uri=b.url;else{a=b.data;c.extras=a;for(var d=0;d<this.gltf.images.length;++d)if(a===this.gltf.images[d].extras)return d;d=this.gltf.extras;switch(d.options.imageOutputType){case g.ImageOutputType.GLB:const e=d.binChunkBuffer.addBufferView(l.DataType.UNSIGNED_BYTE,g.AttributeType.SCALAR);a=D.imageToArrayBuffer(a).then(({data:k,type:f})=>{c.mimeType=f;return k});e.writeAsync(a).then(()=>
{e.finalize()});c.bufferView=e.index;break;case g.ImageOutputType.DataURI:c.uri=D.imageToDataURI(a);break;default:d.promises.push(D.imageToArrayBuffer(a).then(({data:k,type:f})=>{c.uri=k;c.mimeType=f}))}}a=this.gltf.images.length;this.gltf.images.push(c);this._imageMap.set(b,a);return a};n._addSampler=function(b){this.gltf.samplers||(this.gltf.samplers=[]);var a=l.TextureWrapMode.REPEAT;let c=l.TextureWrapMode.REPEAT;if("string"===typeof b.wrap)switch(b.wrap){case "clamp":c=a=l.TextureWrapMode.CLAMP_TO_EDGE;
break;case "mirror":c=a=l.TextureWrapMode.MIRRORED_REPEAT}else{switch(b.wrap.vertical){case "clamp":c=l.TextureWrapMode.CLAMP_TO_EDGE;break;case "mirror":c=l.TextureWrapMode.MIRRORED_REPEAT}switch(b.wrap.horizontal){case "clamp":a=l.TextureWrapMode.CLAMP_TO_EDGE;break;case "mirror":a=l.TextureWrapMode.MIRRORED_REPEAT}}b={wrapS:a,wrapT:c};for(a=0;a<this.gltf.samplers.length;++a)if(JSON.stringify(b)===JSON.stringify(this.gltf.samplers[a]))return a;a=this.gltf.samplers.length;this.gltf.samplers.push(b);
return a};n._addAccessor=function(b,a){this.gltf.accessors||(this.gltf.accessors=[]);b={bufferView:b,byteOffset:a.byteOffset,componentType:a.componentType,count:a.count,type:a.type,min:a.min,max:a.max,name:a.name};a.normalized&&(b.normalized=!0);a=this.gltf.accessors.length;this.gltf.accessors.push(b);return a};n._addMeshVertexIndexed=function(b,a,c,d,e,k,f,m){for(const h of a){b.startAccessor("INDICES");for(a=0;a<h.faces.length;++a)b.push(h.faces[a]);a=b.endAccessor();a={attributes:{POSITION:d},
indices:this._addAccessor(b.index,a),material:this._addMaterial(h.material)};e&&"flat"!==h.shading&&(a.attributes.NORMAL=e);k&&(a.attributes.TEXCOORD_0=k);f&&"flat"!==h.shading&&(a.attributes.TANGENT=f);m&&(a.attributes.COLOR_0=m);c.primitives.push(a)}};n._addMeshVertexNonIndexed=function(b,a,c,d,e,k,f){c={attributes:{POSITION:c}};d&&(c.attributes.NORMAL=d);e&&(c.attributes.TEXCOORD_0=e);k&&(c.attributes.TANGENT=k);f&&(c.attributes.COLOR_0=f);b&&(c.material=this._addMaterial(b[0].material));a.primitives.push(c)};
return L}();G.GLTF=C;Object.defineProperties(G,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});