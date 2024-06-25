// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../Color ../../../request ../../../core/MapUtils ../../../core/mathUtils ../../../core/maybe ../../../chunks/mat3 ../../../chunks/mat3f64 ../../../chunks/vec3f64 ../../../chunks/vec4f64 ../MeshComponent ../MeshMaterialMetallicRoughness ../MeshTexture ../MeshVertexAttributes ../buffer/BufferView ../../../chunks/vec32 ../../../chunks/vec42 ../buffer/utils ./georeference ../../../views/3d/glTF/DefaultLoadingContext ../../../views/3d/glTF/loader ../../../views/3d/glTF/internal/indexUtils ../../../views/3d/webgl-engine/lib/Indices ../../../views/3d/webgl-engine/materials/DefaultMaterial_COLOR_GAMMA ../../../views/webgl/enums ../../../chunks/vec33 ../../../chunks/vec43 ../../../chunks/vec22".split(" "),
function(F,G,H,P,I,J,f,K,L,Q,R,S,T,U,V,n,w,A,x,W,X,Y,D,Z,aa,u,M,B,N){function E(){E=G._asyncToGenerator(function*(a,b,l){var c=new X.DefaultLoadingContext(ba(l));b=(yield Y.loadGLTF(c,b,l,!0)).model;c=b.lods.shift();const e=new Map,d=new Map;b.textures.forEach((g,q)=>{var C=e.set,y=g.data;g=g.parameters.wrap;g={horizontal:O(g.s),vertical:O(g.t)};return C.call(e,q,new U({data:y,wrap:g}))});b.materials.forEach((g,q)=>d.set(q,ca(g,e)));b=da(c);for(var h of b.parts)ea(b,h,d);const {position:t,normal:m,
tangent:k,color:p,texCoord0:r}=b.vertexAttributes;h={position:t.typedBuffer,normal:f.isSome(m)?m.typedBuffer:null,tangent:f.isSome(k)?k.typedBuffer:null,uv:f.isSome(r)?r.typedBuffer:null,color:f.isSome(p)?p.typedBuffer:null};l=W.georeferenceByTransform(h,a,l);return{transform:l.transform,components:b.components,spatialReference:a.spatialReference,vertexAttributes:new V.MeshVertexAttributes({position:l.vertexAttributes.position,normal:l.vertexAttributes.normal,tangent:l.vertexAttributes.tangent,color:h.color,
uv:h.uv})}});return E.apply(this,arguments)}function ba(a){const b=a?.resolveFile;return b?{busy:!1,request:function(){var l=G._asyncToGenerator(function*(c,e,d){c=b(c);return(yield P(c,{responseType:"image"===e?"image":"binary"===e?"array-buffer":"json",signal:f.isSome(d)?d.signal:null})).data});return function(c,e,d){return l.apply(this,arguments)}}()}:null}function z(a,b){if(f.isNone(a))return"-";a=a.typedBuffer;return`${I.getOrCreateMapValue(b,a.buffer,()=>b.size)}/${a.byteOffset}/${a.byteLength}`}
function fa(a){return f.isSome(a)?a.toString():"-"}function da(a){let b=0;var l=!1,c=!1,e=!1,d=!1;const h=new Map,t=new Map,m=[];for(const k of a.parts){const {attributes:{position:p,normal:r,color:g,tangent:q,texCoord0:C}}=k;a=`\n      ${z(p,h)}/\n      ${z(r,h)}/\n      ${z(g,h)}/\n      ${z(q,h)}/\n      ${z(C,h)}/\n      ${fa(k.transform)}\n    `;let y=!1;a=I.getOrCreateMapValue(t,a,()=>{y=!0;return{start:b,length:p.count}});y&&(b+=p.count);r&&(e=!0);g&&(l=!0);q&&(c=!0);C&&(d=!0);m.push({gltf:k,
writeVertices:y,region:a})}return{vertexAttributes:{position:x.createBuffer(n.BufferViewVec3f64,b),normal:e?x.createBuffer(n.BufferViewVec3f,b):null,tangent:c?x.createBuffer(n.BufferViewVec4f,b):null,color:l?x.createBuffer(n.BufferViewVec4u8,b):null,texCoord0:d?x.createBuffer(n.BufferViewVec2f,b):null},parts:m,components:[]}}function ca(a,b){const l=new H(ha(a.color,a.opacity)),c=a.emissiveFactor?new H(ia(a.emissiveFactor)):null;var e=f.unwrap(f.applySome(a.textureColor,k=>b.get(k))),d=f.unwrap(f.applySome(a.textureNormal,
k=>b.get(k))),h=f.unwrap(f.applySome(a.textureEmissive,k=>b.get(k))),t=f.unwrap(f.applySome(a.textureOcclusion,k=>b.get(k)));a:{switch(a.alphaMode){case "OPAQUE":var m="opaque";break a;case "MASK":m="mask";break a;case "BLEND":m="blend";break a}m=void 0}return new T({color:l,colorTexture:e,normalTexture:d,emissiveColor:c,emissiveTexture:h,occlusionTexture:t,alphaMode:m,alphaCutoff:a.alphaCutoff,doubleSided:a.doubleSided,metallic:a.metallicFactor,roughness:a.roughnessFactor,metallicRoughnessTexture:f.unwrap(f.applySome(a.textureMetallicRoughness,
k=>b.get(k))),colorTextureTransform:a.colorTextureTransform,normalTextureTransform:a.normalTextureTransform,occlusionTextureTransform:a.occlusionTextureTransform,emissiveTextureTransform:a.emissiveTextureTransform,metallicRoughnessTextureTransform:a.metallicRoughnessTextureTransform})}function ea(a,b,l){if(b.writeVertices){const {position:t,normal:m,tangent:k,color:p,texCoord0:r}=a.vertexAttributes;var c=b.region.start;const {attributes:g,transform:q}=b.gltf;var e=g.position.count;w.transformMat4(t.slice(c,
e),g.position,q);if(f.isSome(g.normal)&&f.isSome(m)){var d=K.normalFromMat4(L.create(),q),h=m.slice(c,e);w.transformMat3(h,g.normal,d);J.hasScaling(d)&&w.normalize(h,h)}else f.isSome(m)&&M.fill(m,0,0,1,{dstIndex:c,count:e});f.isSome(g.tangent)&&f.isSome(k)?(d=K.normalFromMat4(L.create(),q),h=k.slice(c,e),A.transformMat3(h,g.tangent,d),J.hasScaling(d)&&A.normalize(h,h)):f.isSome(k)&&B.fill(k,0,0,1,1,{dstIndex:c,count:e});f.isSome(g.texCoord0)&&f.isSome(r)?N.normalizeIntegerBuffer(r.slice(c,e),g.texCoord0):
f.isSome(r)&&N.fill(r,0,0,{dstIndex:c,count:e});f.isSome(g.color)&&f.isSome(p)?(d=g.color,c=p.slice(c,e),4===d.elementCount?d instanceof n.BufferViewVec4f?A.scale(c,d,255):d instanceof n.BufferViewVec4u8?B.copy(c,d):d instanceof n.BufferViewVec4u16&&A.shiftRight(c,d,8):(B.fill(c,255,255,255,255),c=n.BufferViewVec3u8.fromTypedArray(c.typedBuffer,c.typedBufferStride),d instanceof n.BufferViewVec3f?w.scale(c,d,255):d instanceof n.BufferViewVec3u8?M.copy(c,d):d instanceof n.BufferViewVec3u16&&w.shiftRight(c,
d,8))):f.isSome(p)&&B.fill(p.slice(c,e),255,255,255,255)}c=b.gltf;a:{e=c.indices||c.attributes.position.count;switch(c.primitiveType){case u.PrimitiveType.TRIANGLES:e=D.trianglesToTriangles(e,Z.generateIndexArray);break a;case u.PrimitiveType.TRIANGLE_STRIP:e=D.triangleStripToTriangles(e);break a;case u.PrimitiveType.TRIANGLE_FAN:e=D.triangleFanToTriangles(e);break a}e=void 0}if(b=b.region.start)for(d=0;d<e.length;d++)e[d]+=b;a.components.push(new S({faces:e,material:l.get(c.material),trustSourceNormals:!0}))}
function O(a){switch(a){case u.TextureWrapMode.CLAMP_TO_EDGE:return"clamp";case u.TextureWrapMode.MIRRORED_REPEAT:return"mirror";case u.TextureWrapMode.REPEAT:return"repeat"}}function v(a){return 255*a**(1/aa.COLOR_GAMMA)}function ha(a,b){return R.fromValues(v(a[0]),v(a[1]),v(a[2]),b)}function ia(a){return Q.fromValues(v(a[0]),v(a[1]),v(a[2]))}F.loadGLTFMesh=function(a,b,l){return E.apply(this,arguments)};Object.defineProperties(F,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});