"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[4074],{51006:(e,t,s)=>{var _,i,n,r,E,a,T,o,R,A,c,N,h,f,u,S,C,O,I,l,L,d,D,M;s.d(t,{B:()=>n,C:()=>P,D:()=>o,F:()=>a,P:()=>f,R:()=>D,S:()=>u,T:()=>h,U:()=>O,a:()=>S,b:()=>N,c:()=>c,d:()=>R,e:()=>i,f:()=>A,g:()=>L,h:()=>d,i:()=>C,l:()=>E,m:()=>M,n:()=>B,o:()=>l,q:()=>T,r:()=>r}),function(e){e[e.DEPTH_BUFFER_BIT=256]="DEPTH_BUFFER_BIT",e[e.STENCIL_BUFFER_BIT=1024]="STENCIL_BUFFER_BIT",e[e.COLOR_BUFFER_BIT=16384]="COLOR_BUFFER_BIT"}(_||(_={})),function(e){e[e.POINTS=0]="POINTS",e[e.LINES=1]="LINES",e[e.LINE_LOOP=2]="LINE_LOOP",e[e.LINE_STRIP=3]="LINE_STRIP",e[e.TRIANGLES=4]="TRIANGLES",e[e.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",e[e.TRIANGLE_FAN=6]="TRIANGLE_FAN"}(i||(i={})),function(e){e[e.ZERO=0]="ZERO",e[e.ONE=1]="ONE",e[e.SRC_COLOR=768]="SRC_COLOR",e[e.ONE_MINUS_SRC_COLOR=769]="ONE_MINUS_SRC_COLOR",e[e.SRC_ALPHA=770]="SRC_ALPHA",e[e.ONE_MINUS_SRC_ALPHA=771]="ONE_MINUS_SRC_ALPHA",e[e.DST_ALPHA=772]="DST_ALPHA",e[e.ONE_MINUS_DST_ALPHA=773]="ONE_MINUS_DST_ALPHA",e[e.DST_COLOR=774]="DST_COLOR",e[e.ONE_MINUS_DST_COLOR=775]="ONE_MINUS_DST_COLOR",e[e.SRC_ALPHA_SATURATE=776]="SRC_ALPHA_SATURATE",e[e.CONSTANT_COLOR=32769]="CONSTANT_COLOR",e[e.ONE_MINUS_CONSTANT_COLOR=32770]="ONE_MINUS_CONSTANT_COLOR",e[e.CONSTANT_ALPHA=32771]="CONSTANT_ALPHA",e[e.ONE_MINUS_CONSTANT_ALPHA=32772]="ONE_MINUS_CONSTANT_ALPHA"}(n||(n={})),function(e){e[e.ADD=32774]="ADD",e[e.SUBTRACT=32778]="SUBTRACT",e[e.REVERSE_SUBTRACT=32779]="REVERSE_SUBTRACT"}(r||(r={})),function(e){e[e.ARRAY_BUFFER=34962]="ARRAY_BUFFER",e[e.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",e[e.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER",e[e.PIXEL_PACK_BUFFER=35051]="PIXEL_PACK_BUFFER",e[e.PIXEL_UNPACK_BUFFER=35052]="PIXEL_UNPACK_BUFFER",e[e.COPY_READ_BUFFER=36662]="COPY_READ_BUFFER",e[e.COPY_WRITE_BUFFER=36663]="COPY_WRITE_BUFFER"}(E||(E={})),function(e){e[e.FRONT=1028]="FRONT",e[e.BACK=1029]="BACK",e[e.FRONT_AND_BACK=1032]="FRONT_AND_BACK"}(a||(a={})),function(e){e[e.CW=2304]="CW",e[e.CCW=2305]="CCW"}(T||(T={})),function(e){e[e.BYTE=5120]="BYTE",e[e.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",e[e.SHORT=5122]="SHORT",e[e.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",e[e.INT=5124]="INT",e[e.UNSIGNED_INT=5125]="UNSIGNED_INT",e[e.FLOAT=5126]="FLOAT"}(o||(o={})),function(e){e[e.NEVER=512]="NEVER",e[e.LESS=513]="LESS",e[e.EQUAL=514]="EQUAL",e[e.LEQUAL=515]="LEQUAL",e[e.GREATER=516]="GREATER",e[e.NOTEQUAL=517]="NOTEQUAL",e[e.GEQUAL=518]="GEQUAL",e[e.ALWAYS=519]="ALWAYS"}(R||(R={})),function(e){e[e.ZERO=0]="ZERO",e[e.KEEP=7680]="KEEP",e[e.REPLACE=7681]="REPLACE",e[e.INCR=7682]="INCR",e[e.DECR=7683]="DECR",e[e.INVERT=5386]="INVERT",e[e.INCR_WRAP=34055]="INCR_WRAP",e[e.DECR_WRAP=34056]="DECR_WRAP"}(A||(A={})),function(e){e[e.NEAREST=9728]="NEAREST",e[e.LINEAR=9729]="LINEAR",e[e.NEAREST_MIPMAP_NEAREST=9984]="NEAREST_MIPMAP_NEAREST",e[e.LINEAR_MIPMAP_NEAREST=9985]="LINEAR_MIPMAP_NEAREST",e[e.NEAREST_MIPMAP_LINEAR=9986]="NEAREST_MIPMAP_LINEAR",e[e.LINEAR_MIPMAP_LINEAR=9987]="LINEAR_MIPMAP_LINEAR"}(c||(c={})),function(e){e[e.CLAMP_TO_EDGE=33071]="CLAMP_TO_EDGE",e[e.REPEAT=10497]="REPEAT",e[e.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT"}(N||(N={})),function(e){e[e.TEXTURE_2D=3553]="TEXTURE_2D",e[e.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",e[e.TEXTURE_3D=32879]="TEXTURE_3D",e[e.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",e[e.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",e[e.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",e[e.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",e[e.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",e[e.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z",e[e.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY"}(h||(h={})),function(e){e[e.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",e[e.DEPTH_STENCIL=34041]="DEPTH_STENCIL",e[e.ALPHA=6406]="ALPHA",e[e.RGB=6407]="RGB",e[e.RGBA=6408]="RGBA",e[e.LUMINANCE=6409]="LUMINANCE",e[e.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",e[e.RED=6403]="RED",e[e.RG=33319]="RG",e[e.RED_INTEGER=36244]="RED_INTEGER",e[e.RG_INTEGER=33320]="RG_INTEGER",e[e.RGB_INTEGER=36248]="RGB_INTEGER",e[e.RGBA_INTEGER=36249]="RGBA_INTEGER"}(f||(f={})),function(e){e[e.RGBA4=32854]="RGBA4",e[e.R16F=33325]="R16F",e[e.RG16F=33327]="RG16F",e[e.RGB32F=34837]="RGB32F",e[e.RGBA16F=34842]="RGBA16F",e[e.R32F=33326]="R32F",e[e.RG32F=33328]="RG32F",e[e.RGBA32F=34836]="RGBA32F",e[e.R11F_G11F_B10F=35898]="R11F_G11F_B10F",e[e.RGB8=32849]="RGB8",e[e.RGBA8=32856]="RGBA8",e[e.RGB5_A1=32855]="RGB5_A1",e[e.R8=33321]="R8",e[e.RG8=33323]="RG8",e[e.R8I=33329]="R8I",e[e.R8UI=33330]="R8UI",e[e.R16I=33331]="R16I",e[e.R16UI=33332]="R16UI",e[e.R32I=33333]="R32I",e[e.R32UI=33334]="R32UI",e[e.RG8I=33335]="RG8I",e[e.RG8UI=33336]="RG8UI",e[e.RG16I=33337]="RG16I",e[e.RG16UI=33338]="RG16UI",e[e.RG32I=33339]="RG32I",e[e.RG32UI=33340]="RG32UI",e[e.RGB16F=34843]="RGB16F",e[e.RGB9_E5=35901]="RGB9_E5",e[e.SRGB8=35905]="SRGB8",e[e.SRGB8_ALPHA8=35907]="SRGB8_ALPHA8",e[e.RGB565=36194]="RGB565",e[e.RGBA32UI=36208]="RGBA32UI",e[e.RGB32UI=36209]="RGB32UI",e[e.RGBA16UI=36214]="RGBA16UI",e[e.RGB16UI=36215]="RGB16UI",e[e.RGBA8UI=36220]="RGBA8UI",e[e.RGB8UI=36221]="RGB8UI",e[e.RGBA32I=36226]="RGBA32I",e[e.RGB32I=36227]="RGB32I",e[e.RGBA16I=36232]="RGBA16I",e[e.RGB16I=36233]="RGB16I",e[e.RGBA8I=36238]="RGBA8I",e[e.RGB8I=36239]="RGB8I",e[e.R8_SNORM=36756]="R8_SNORM",e[e.RG8_SNORM=36757]="RG8_SNORM",e[e.RGB8_SNORM=36758]="RGB8_SNORM",e[e.RGBA8_SNORM=36759]="RGBA8_SNORM",e[e.RGB10_A2=32857]="RGB10_A2",e[e.RGB10_A2UI=36975]="RGB10_A2UI"}(u||(u={})),function(e){e[e.FLOAT=5126]="FLOAT",e[e.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",e[e.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",e[e.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",e[e.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",e[e.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",e[e.BYTE=5120]="BYTE",e[e.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",e[e.SHORT=5122]="SHORT",e[e.UNSIGNED_INT=5125]="UNSIGNED_INT",e[e.INT=5124]="INT",e[e.HALF_FLOAT=5131]="HALF_FLOAT",e[e.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",e[e.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",e[e.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",e[e.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV"}(S||(S={})),function(e){e[e.DEPTH_COMPONENT16=33189]="DEPTH_COMPONENT16",e[e.STENCIL_INDEX8=36168]="STENCIL_INDEX8",e[e.DEPTH_STENCIL=34041]="DEPTH_STENCIL",e[e.DEPTH_COMPONENT24=33190]="DEPTH_COMPONENT24",e[e.DEPTH_COMPONENT32F=36012]="DEPTH_COMPONENT32F",e[e.DEPTH24_STENCIL8=35056]="DEPTH24_STENCIL8",e[e.DEPTH32F_STENCIL8=36013]="DEPTH32F_STENCIL8"}(C||(C={})),function(e){e[e.STATIC_DRAW=35044]="STATIC_DRAW",e[e.DYNAMIC_DRAW=35048]="DYNAMIC_DRAW",e[e.STREAM_DRAW=35040]="STREAM_DRAW",e[e.STATIC_READ=35045]="STATIC_READ",e[e.DYNAMIC_READ=35049]="DYNAMIC_READ",e[e.STREAM_READ=35041]="STREAM_READ",e[e.STATIC_COPY=35046]="STATIC_COPY",e[e.DYNAMIC_COPY=35050]="DYNAMIC_COPY",e[e.STREAM_COPY=35042]="STREAM_COPY"}(O||(O={})),function(e){e[e.FRAGMENT_SHADER=35632]="FRAGMENT_SHADER",e[e.VERTEX_SHADER=35633]="VERTEX_SHADER"}(I||(I={})),function(e){e[e.FRAMEBUFFER=36160]="FRAMEBUFFER",e[e.READ_FRAMEBUFFER=36008]="READ_FRAMEBUFFER",e[e.DRAW_FRAMEBUFFER=36009]="DRAW_FRAMEBUFFER"}(l||(l={})),function(e){e[e.TEXTURE=0]="TEXTURE",e[e.RENDER_BUFFER=1]="RENDER_BUFFER",e[e.CUBEMAP=2]="CUBEMAP"}(L||(L={})),function(e){e[e.NONE=0]="NONE",e[e.DEPTH_RENDER_BUFFER=1]="DEPTH_RENDER_BUFFER",e[e.STENCIL_RENDER_BUFFER=2]="STENCIL_RENDER_BUFFER",e[e.DEPTH_STENCIL_RENDER_BUFFER=3]="DEPTH_STENCIL_RENDER_BUFFER",e[e.DEPTH_STENCIL_TEXTURE=4]="DEPTH_STENCIL_TEXTURE"}(d||(d={})),function(e){e[e.Texture=0]="Texture",e[e.BufferObject=1]="BufferObject",e[e.VertexArrayObject=2]="VertexArrayObject",e[e.Shader=3]="Shader",e[e.Program=4]="Program",e[e.FramebufferObject=5]="FramebufferObject",e[e.Renderbuffer=6]="Renderbuffer",e[e.Sync=7]="Sync",e[e.COUNT=8]="COUNT"}(D||(D={})),function(e){e[e.COLOR_ATTACHMENT0=36064]="COLOR_ATTACHMENT0",e[e.COLOR_ATTACHMENT1=36065]="COLOR_ATTACHMENT1",e[e.COLOR_ATTACHMENT2=36066]="COLOR_ATTACHMENT2",e[e.COLOR_ATTACHMENT3=36067]="COLOR_ATTACHMENT3",e[e.COLOR_ATTACHMENT4=36068]="COLOR_ATTACHMENT4",e[e.COLOR_ATTACHMENT5=36069]="COLOR_ATTACHMENT5",e[e.COLOR_ATTACHMENT6=36070]="COLOR_ATTACHMENT6",e[e.COLOR_ATTACHMENT7=36071]="COLOR_ATTACHMENT7",e[e.COLOR_ATTACHMENT8=36072]="COLOR_ATTACHMENT8",e[e.COLOR_ATTACHMENT9=36073]="COLOR_ATTACHMENT9",e[e.COLOR_ATTACHMENT10=36074]="COLOR_ATTACHMENT10",e[e.COLOR_ATTACHMENT11=36075]="COLOR_ATTACHMENT11",e[e.COLOR_ATTACHMENT12=36076]="COLOR_ATTACHMENT12",e[e.COLOR_ATTACHMENT13=36077]="COLOR_ATTACHMENT13",e[e.COLOR_ATTACHMENT14=36078]="COLOR_ATTACHMENT14",e[e.COLOR_ATTACHMENT15=36079]="COLOR_ATTACHMENT15"}(M||(M={}));const B=33306;var P,U,G,p,m,g,F;!function(e){e[e.COMPRESSED_RGB_S3TC_DXT1_EXT=33776]="COMPRESSED_RGB_S3TC_DXT1_EXT",e[e.COMPRESSED_RGBA_S3TC_DXT1_EXT=33777]="COMPRESSED_RGBA_S3TC_DXT1_EXT",e[e.COMPRESSED_RGBA_S3TC_DXT3_EXT=33778]="COMPRESSED_RGBA_S3TC_DXT3_EXT",e[e.COMPRESSED_RGBA_S3TC_DXT5_EXT=33779]="COMPRESSED_RGBA_S3TC_DXT5_EXT",e[e.COMPRESSED_R11_EAC=37488]="COMPRESSED_R11_EAC",e[e.COMPRESSED_SIGNED_R11_EAC=37489]="COMPRESSED_SIGNED_R11_EAC",e[e.COMPRESSED_RG11_EAC=37490]="COMPRESSED_RG11_EAC",e[e.COMPRESSED_SIGNED_RG11_EAC=37491]="COMPRESSED_SIGNED_RG11_EAC",e[e.COMPRESSED_RGB8_ETC2=37492]="COMPRESSED_RGB8_ETC2",e[e.COMPRESSED_SRGB8_ETC2=37493]="COMPRESSED_SRGB8_ETC2",e[e.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2=37494]="COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2",e[e.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2=37495]="COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2",e[e.COMPRESSED_RGBA8_ETC2_EAC=37496]="COMPRESSED_RGBA8_ETC2_EAC",e[e.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC=37497]="COMPRESSED_SRGB8_ALPHA8_ETC2_EAC"}(P||(P={})),function(e){e[e.FLOAT=5126]="FLOAT",e[e.FLOAT_VEC2=35664]="FLOAT_VEC2",e[e.FLOAT_VEC3=35665]="FLOAT_VEC3",e[e.FLOAT_VEC4=35666]="FLOAT_VEC4",e[e.INT=5124]="INT",e[e.INT_VEC2=35667]="INT_VEC2",e[e.INT_VEC3=35668]="INT_VEC3",e[e.INT_VEC4=35669]="INT_VEC4",e[e.BOOL=35670]="BOOL",e[e.BOOL_VEC2=35671]="BOOL_VEC2",e[e.BOOL_VEC3=35672]="BOOL_VEC3",e[e.BOOL_VEC4=35673]="BOOL_VEC4",e[e.FLOAT_MAT2=35674]="FLOAT_MAT2",e[e.FLOAT_MAT3=35675]="FLOAT_MAT3",e[e.FLOAT_MAT4=35676]="FLOAT_MAT4",e[e.SAMPLER_2D=35678]="SAMPLER_2D",e[e.SAMPLER_CUBE=35680]="SAMPLER_CUBE",e[e.UNSIGNED_INT=5125]="UNSIGNED_INT",e[e.UNSIGNED_INT_VEC2=36294]="UNSIGNED_INT_VEC2",e[e.UNSIGNED_INT_VEC3=36295]="UNSIGNED_INT_VEC3",e[e.UNSIGNED_INT_VEC4=36296]="UNSIGNED_INT_VEC4",e[e.FLOAT_MAT2x3=35685]="FLOAT_MAT2x3",e[e.FLOAT_MAT2x4=35686]="FLOAT_MAT2x4",e[e.FLOAT_MAT3x2=35687]="FLOAT_MAT3x2",e[e.FLOAT_MAT3x4=35688]="FLOAT_MAT3x4",e[e.FLOAT_MAT4x2=35689]="FLOAT_MAT4x2",e[e.FLOAT_MAT4x3=35690]="FLOAT_MAT4x3",e[e.SAMPLER_3D=35679]="SAMPLER_3D",e[e.SAMPLER_2D_SHADOW=35682]="SAMPLER_2D_SHADOW",e[e.SAMPLER_2D_ARRAY=36289]="SAMPLER_2D_ARRAY",e[e.SAMPLER_2D_ARRAY_SHADOW=36292]="SAMPLER_2D_ARRAY_SHADOW",e[e.SAMPLER_CUBE_SHADOW=36293]="SAMPLER_CUBE_SHADOW",e[e.INT_SAMPLER_2D=36298]="INT_SAMPLER_2D",e[e.INT_SAMPLER_3D=36299]="INT_SAMPLER_3D",e[e.INT_SAMPLER_CUBE=36300]="INT_SAMPLER_CUBE",e[e.INT_SAMPLER_2D_ARRAY=36303]="INT_SAMPLER_2D_ARRAY",e[e.UNSIGNED_INT_SAMPLER_2D=36306]="UNSIGNED_INT_SAMPLER_2D",e[e.UNSIGNED_INT_SAMPLER_3D=36307]="UNSIGNED_INT_SAMPLER_3D",e[e.UNSIGNED_INT_SAMPLER_CUBE=36308]="UNSIGNED_INT_SAMPLER_CUBE",e[e.UNSIGNED_INT_SAMPLER_2D_ARRAY=36311]="UNSIGNED_INT_SAMPLER_2D_ARRAY"}(U||(U={})),function(e){e[e.OBJECT_TYPE=37138]="OBJECT_TYPE",e[e.SYNC_CONDITION=37139]="SYNC_CONDITION",e[e.SYNC_STATUS=37140]="SYNC_STATUS",e[e.SYNC_FLAGS=37141]="SYNC_FLAGS"}(G||(G={})),function(e){e[e.UNSIGNALED=37144]="UNSIGNALED",e[e.SIGNALED=37145]="SIGNALED"}(p||(p={})),function(e){e[e.ALREADY_SIGNALED=37146]="ALREADY_SIGNALED",e[e.TIMEOUT_EXPIRED=37147]="TIMEOUT_EXPIRED",e[e.CONDITION_SATISFIED=37148]="CONDITION_SATISFIED",e[e.WAIT_FAILED=37149]="WAIT_FAILED"}(m||(m={})),function(e){e[e.SYNC_GPU_COMMANDS_COMPLETE=37143]="SYNC_GPU_COMMANDS_COMPLETE"}(g||(g={})),function(e){e[e.SYNC_FLUSH_COMMANDS_BIT=1]="SYNC_FLUSH_COMMANDS_BIT"}(F||(F={}))},94074:(e,t,s)=>{s.r(t),s.d(t,{toBinaryGLTF:()=>X});var _=s(32101),i=s(50406),n=s(91597),r=s(92143),E=s(91306),a=s(71252),T=s(35861),o=s(45087),R=s(72836),A=s(71337),c=s(84017),N=s(51006),h=(s(71552),s(60991));function f(e){const t=S(e);return(0,a.i)(t)?t.toDataURL():""}async function u(e){const t=S(e);if((0,a.a)(t))throw new h.Z("imageToArrayBuffer","Unsupported image type");const s=await async function(e){if(!(e instanceof HTMLImageElement))return"image/png";const t=e.src;if((0,_.HK)(t)){const e=(0,_.sJ)(t);return"image/jpeg"===e?.mediaType?e.mediaType:"image/png"}return/\.png$/i.test(t)?"image/png":/\.(jpg|jpeg)$/i.test(t)?"image/jpeg":"image/png"}(e),i=await new Promise((e=>t.toBlob(e,s)));if(!i)throw new h.Z("imageToArrayBuffer","Failed to encode image");return{data:await i.arrayBuffer(),type:s}}function S(e){if(e instanceof HTMLCanvasElement)return e;if(e instanceof HTMLVideoElement)return null;const t=document.createElement("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");return e instanceof HTMLImageElement?s.drawImage(e,0,0,e.width,e.height):e instanceof ImageData&&s.putImageData(e,0,0),t}var C,O,I,l,L,d,D,M,B,P=s(76506);s(31450),s(40642),s(34250),s(60474),s(66396),s(86656),s(86787),s(97714),s(17533),s(6540),s(2906),s(73796),s(12047),s(21972),s(91055),s(19657),s(6906),s(60947),s(35132),s(89623),s(29794),s(82426),s(48027),s(54174),s(44265),s(8187),s(38742),s(53785),s(57251),s(95587),s(65775),s(26923),s(1623),s(89914),s(21801),s(84069),s(12381),s(73173),s(82058),s(88762),s(44567),s(98380),s(92896),s(92482),s(92624),s(92847),s(34987),s(40167),s(47880),s(79641),s(84661),(B=C||(C={}))[B.JSON=1313821514]="JSON",B[B.BIN=5130562]="BIN";class U{constructor(e,t){if(!e)throw new Error("GLB requires a JSON gltf chunk");this._length=U.HEADER_SIZE,this._length+=U.CHUNK_HEADER_SIZE;const s=this._textToArrayBuffer(e);if(this._length+=this._alignTo(s.byteLength,4),t&&(this._length+=U.CHUNK_HEADER_SIZE,this._length+=t.byteLength,t.byteLength%4))throw new Error("Expected BIN chunk length to be divisible by 4 at this point");this.buffer=new ArrayBuffer(this._length),this._outView=new DataView(this.buffer),this._writeHeader();const _=this._writeChunk(s,12,C.JSON,32);t&&this._writeChunk(t,_,C.BIN)}_writeHeader(){this._outView.setUint32(0,U.MAGIC,!0),this._outView.setUint32(4,U.VERSION,!0),this._outView.setUint32(8,this._length,!0)}_writeChunk(e,t,s,_=0){const i=this._alignTo(e.byteLength,4);for(this._outView.setUint32(t,i,!0),this._outView.setUint32(t+=4,s,!0),this._writeArrayBuffer(this._outView.buffer,e,t+=4,0,e.byteLength),t+=e.byteLength;t%4;)_&&this._outView.setUint8(t,_),t++;return t}_writeArrayBuffer(e,t,s,_,i){new Uint8Array(e,s,i).set(new Uint8Array(t,_,i),0)}_textToArrayBuffer(e){return(new TextEncoder).encode(e).buffer}_alignTo(e,t){return t*Math.ceil(e/t)}}U.HEADER_SIZE=12,U.CHUNK_HEADER_SIZE=8,U.MAGIC=1179937895,U.VERSION=2,function(e){e[e.External=0]="External",e[e.DataURI=1]="DataURI",e[e.GLB=2]="GLB"}(O||(O={})),function(e){e[e.External=0]="External",e[e.DataURI=1]="DataURI",e[e.GLB=2]="GLB"}(I||(I={})),function(e){e[e.ARRAY_BUFFER=34962]="ARRAY_BUFFER",e[e.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER"}(l||(l={})),function(e){e.SCALAR="SCALAR",e.VEC2="VEC2",e.VEC3="VEC3",e.VEC4="VEC4",e.MAT2="MAT2",e.MAT3="MAT3",e.MAT4="MAT4"}(L||(L={})),function(e){e[e.POINTS=0]="POINTS",e[e.LINES=1]="LINES",e[e.LINE_LOOP=2]="LINE_LOOP",e[e.LINE_STRIP=3]="LINE_STRIP",e[e.TRIANGLES=4]="TRIANGLES",e[e.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",e[e.TRIANGLE_FAN=6]="TRIANGLE_FAN"}(d||(d={})),function(e){e.OPAQUE="OPAQUE",e.MASK="MASK",e.BLEND="BLEND"}(D||(D={})),function(e){e[e.NoColor=0]="NoColor",e[e.FaceColor=1]="FaceColor",e[e.VertexColor=2]="VertexColor"}(M||(M={}));class G{constructor(e,t,s,_,i){this._buffer=e,this._componentType=s,this._dataType=_,this._data=[],this._isFinalized=!1,this._accessorIndex=-1,this._accessorAttribute=null,this._accessorMin=null,this._accessorMax=null,t.bufferViews||(t.bufferViews=[]),this.index=t.bufferViews.length,this._bufferView={buffer:e.index,byteLength:-1,target:i};const n=this._getElementSize();n>=4&&i!==l.ELEMENT_ARRAY_BUFFER&&(this._bufferView.byteStride=n),t.bufferViews.push(this._bufferView),this._numComponentsForDataType=this._calculateNumComponentsForDataType()}push(e){const t=this._data.length;if(this._data.push(e),this._accessorIndex>=0){const s=t%this._numComponentsForDataType,_=this._accessorMin[s];this._accessorMin[s]="number"!=typeof _?e:Math.min(_,e);const i=this._accessorMax[s];this._accessorMax[s]="number"!=typeof i?e:Math.max(i,e)}}get dataSize(){return this._data.length*this._sizeComponentType()}get byteSize(){return e=this.dataSize,4*Math.ceil(e/4);var e}getByteOffset(){if(!this._isFinalized)throw new Error("Cannot get BufferView offset until it is finalized");return this._buffer.getByteOffset(this)}get byteOffset(){if(!this._isFinalized)throw new Error("Cannot get BufferView offset until it is finalized");return this._buffer.getByteOffset(this)}_createTypedArray(e,t){switch(this._componentType){case N.D.BYTE:return new Int8Array(e,t);case N.D.FLOAT:return new Float32Array(e,t);case N.D.SHORT:return new Int16Array(e,t);case N.D.UNSIGNED_BYTE:return new Uint8Array(e,t);case N.D.UNSIGNED_INT:return new Uint32Array(e,t);case N.D.UNSIGNED_SHORT:return new Uint16Array(e,t)}}writeOutToBuffer(e,t){this._createTypedArray(e,t).set(this._data)}writeAsync(e){if(this._asyncWritePromise)throw new Error("Can't write multiple bufferView values asynchronously");return this._asyncWritePromise=e.then((e=>{const t=new Uint8Array(e);for(let e=0;e<t.length;++e)this._data.push(t[e]);delete this._asyncWritePromise})),this._asyncWritePromise}startAccessor(e){if(this._accessorIndex>=0)throw new Error("Accessor was started without ending the previous one");this._accessorIndex=this._data.length,this._accessorAttribute=e;const t=this._numComponentsForDataType;this._accessorMin=new Array(t),this._accessorMax=new Array(t)}endAccessor(){if(this._accessorIndex<0)throw new Error("An accessor was not started, but was attempted to be ended");const e=this._getElementSize(),t=this._numComponentsForDataType,s=(this._data.length-this._accessorIndex)/t;if(s%1)throw new Error("An accessor was ended with missing component values");for(let e=0;e<this._accessorMin.length;++e)"number"!=typeof this._accessorMin[e]&&(this._accessorMin[e]=0),"number"!=typeof this._accessorMax[e]&&(this._accessorMax[e]=0);const _={byteOffset:e*(this._accessorIndex/t),componentType:this._componentType,count:s,type:this._dataType,min:this._accessorMin,max:this._accessorMax,name:this._accessorAttribute};switch(this._accessorAttribute){case"TEXCOORD_0":case"TEXCOORD_1":case"COLOR_0":case"WEIGHTS_0":switch(this._componentType){case N.D.UNSIGNED_BYTE:case N.D.UNSIGNED_SHORT:_.normalized=!0}}return this._accessorIndex=-1,this._accessorAttribute=null,this._accessorMin=null,this._accessorMax=null,_}get finalized(){return this._finalizedPromise?this._finalizedPromise:this._isFinalized?this._finalizedPromise=Promise.resolve():this._finalizedPromise=new Promise((e=>this._finalizedPromiseResolve=e))}finalize(){const e=this._bufferView;return new Promise((e=>{const t=this._buffer.getViewFinalizePromises(this);this._asyncWritePromise&&t.push(this._asyncWritePromise),e((0,i.as)(t))})).then((()=>{this._isFinalized=!0,e.byteOffset=this.getByteOffset(),e.byteLength=this.dataSize,this._finalizedPromiseResolve&&this._finalizedPromiseResolve()}))}_getElementSize(){return this._sizeComponentType()*this._numComponentsForDataType}_sizeComponentType(){switch(this._componentType){case N.D.BYTE:case N.D.UNSIGNED_BYTE:return 1;case N.D.SHORT:case N.D.UNSIGNED_SHORT:return 2;case N.D.UNSIGNED_INT:case N.D.FLOAT:return 4}}_calculateNumComponentsForDataType(){switch(this._dataType){case L.SCALAR:return 1;case L.VEC2:return 2;case L.VEC3:return 3;case L.VEC4:case L.MAT2:return 4;case L.MAT3:return 9;case L.MAT4:return 16}}}class p{constructor(e){this._gltf=e,this._bufferViews=[],this._isFinalized=!1,e.buffers||(e.buffers=[]),this.index=e.buffers.length;const t={byteLength:-1};e.buffers.push(t),this._buffer=t}addBufferView(e,t,s){if(this._finalizePromise)throw new Error("Cannot add buffer view after fiinalizing buffer");const _=new G(this,this._gltf,e,t,s);return this._bufferViews.push(_),_}getByteOffset(e){let t=0;for(const s of this._bufferViews){if(s===e)return t;t+=s.byteSize}throw new Error("Given bufferView was not present in this buffer")}getViewFinalizePromises(e){const t=[];for(const s of this._bufferViews){if(e&&s===e)return t;t.push(s.finalized)}return t}getArrayBuffer(){if(!this._isFinalized)throw new Error("Cannot get ArrayBuffer from Buffer before it is finalized");const e=this._getTotalSize(),t=new ArrayBuffer(e);let s=0;for(const e of this._bufferViews)e.writeOutToBuffer(t,s),s+=e.byteSize;return t}finalize(){if(this._finalizePromise)throw new Error(`Buffer ${this.index} was already finalized`);return this._finalizePromise=new Promise((e=>{e((0,i.as)(this.getViewFinalizePromises()))})).then((()=>{this._isFinalized=!0;const e=this.getArrayBuffer();this._buffer.byteLength=e.byteLength,this._buffer.uri=e})),this._gltf.extras?.promises.push(this._finalizePromise),this._finalizePromise}_getTotalSize(){let e=0;for(const t of this._bufferViews)e+=t.byteSize;return e}}function m(e,t){(0,a.a)(t.normal)&&(t.normal=new Float32Array(t.position.length));const s=e.faces,{position:_,normal:i}=t,n=s.length/3;for(let e=0;e<n;++e){const t=3*s[3*e+0],n=3*s[3*e+1],r=3*s[3*e+2],E=(0,R.s)(g,_[t+0],_[t+1],_[t+2]),a=(0,R.s)(F,_[n+0],_[n+1],_[n+2]),T=(0,R.s)(w,_[r+0],_[r+1],_[r+2]),o=(0,R.b)(a,a,E),A=(0,R.b)(T,T,E),c=(0,R.h)(o,o,A);i[t+0]+=c[0],i[t+1]+=c[1],i[t+2]+=c[2],i[n+0]+=c[0],i[n+1]+=c[1],i[n+2]+=c[2],i[r+0]+=c[0],i[r+1]+=c[1],i[r+2]+=c[2]}for(let e=0;e<i.length;e+=3)(0,R.s)(b,i[e],i[e+1],i[e+2]),(0,R.n)(b,b),i[e+0]=b[0],i[e+1]=b[1],i[e+2]=b[2]}const g=(0,R.d)(),F=(0,R.d)(),w=(0,R.d)(),b=(0,R.d)(),y=r.L.getLogger("gltf");class H{constructor(e,t,s){this.params={},this._materialMap=new Array,this._imageMap=new Map,this._textureMap=new Map,this.gltf={asset:{version:"2.0",copyright:e.copyright,generator:e.generator},extras:{options:t,binChunkBuffer:null,promises:[]}},s&&(this.params=s),this._addScenes(e)}_addScenes(e){this.gltf.scene=e.defaultScene;const t=this.gltf.extras,s=t.options.bufferOutputType===O.GLB||t.options.imageOutputType===I.GLB;s&&(t.binChunkBuffer=new p(this.gltf)),e.forEachScene((e=>{this._addScene(e)})),s&&t.binChunkBuffer.finalize()}_addScene(e){this.gltf.scenes||(this.gltf.scenes=[]);const t={};e.name&&(t.name=e.name),e.forEachNode((e=>{t.nodes||(t.nodes=[]);const s=this._addNode(e);t.nodes.push(s)})),this.gltf.scenes.push(t)}_addNode(e){this.gltf.nodes||(this.gltf.nodes=[]);const t={};e.name&&(t.name=e.name);const s=e.translation;(0,R.j)(s,R.Z)||(t.translation=(0,R.k)(s));const _=e.rotation;(0,T.e)(_,o.I)||(t.rotation=(0,o.b)(_));const i=e.scale;(0,R.j)(i,R.O)||(t.scale=(0,R.k)(i)),e.mesh&&e.mesh.vertexAttributes.position?t.mesh=this._addMesh(e.mesh):e.forEachNode((e=>{t.children||(t.children=[]);const s=this._addNode(e);t.children.push(s)}));const n=this.gltf.nodes.length;return this.gltf.nodes.push(t),n}_addMesh(e){this.gltf.meshes||(this.gltf.meshes=[]);const t={primitives:[]},s=this.gltf.extras,_=s.options.bufferOutputType===O.GLB;let i;i=_?s.binChunkBuffer:new p(this.gltf),this.params.origin||(this.params.origin=function(e){if((0,a.i)(e.transform))return e.transform.getOriginPoint(e.spatialReference);const t=e.extent.xmax-e.extent.width/2,s=e.extent.ymax-e.extent.height/2,_=e.extent.zmin;return new n.Z({x:t,y:s,z:_,spatialReference:e.extent.spatialReference})}(e));const r=(0,c.c)(e.vertexAttributes,e.transform,this.params.origin,{geographic:this.params.geographic,unit:"meters"});!function(e,t){if(e.components)for(const s of e.components)s.faces&&"smooth"===s.shading&&m(s,t)}(e,r),this._flipYZAxis(r);const E=i.addBufferView(N.D.FLOAT,L.VEC3,l.ARRAY_BUFFER);let T,o,R,A;r.normal&&(T=i.addBufferView(N.D.FLOAT,L.VEC3,l.ARRAY_BUFFER)),e.vertexAttributes.uv&&(o=i.addBufferView(N.D.FLOAT,L.VEC2,l.ARRAY_BUFFER)),r.tangent&&(R=i.addBufferView(N.D.FLOAT,L.VEC4,l.ARRAY_BUFFER)),e.vertexAttributes.color&&(A=i.addBufferView(N.D.UNSIGNED_BYTE,L.VEC4,l.ARRAY_BUFFER)),E.startAccessor("POSITION"),T&&T.startAccessor("NORMAL"),o&&o.startAccessor("TEXCOORD_0"),R&&R.startAccessor("TANGENT"),A&&A.startAccessor("COLOR_0");const h=r.position.length/3,{position:f,normal:u,tangent:S}=r,{color:C,uv:I}=e.vertexAttributes;for(let e=0;e<h;++e)E.push(f[3*e+0]),E.push(f[3*e+1]),E.push(f[3*e+2]),T&&(0,a.i)(u)&&(T.push(u[3*e+0]),T.push(u[3*e+1]),T.push(u[3*e+2])),o&&(0,a.i)(I)&&(o.push(I[2*e+0]),o.push(I[2*e+1])),R&&(0,a.i)(S)&&(R.push(S[4*e+0]),R.push(S[4*e+1]),R.push(S[4*e+2]),R.push(S[4*e+3])),A&&(0,a.i)(C)&&(A.push(C[4*e+0]),A.push(C[4*e+1]),A.push(C[4*e+2]),A.push(C[4*e+3]));const d=E.endAccessor(),D=this._addAccessor(E.index,d);let M,B,P,U,G;if(T){const e=T.endAccessor();M=this._addAccessor(T.index,e)}if(o){const e=o.endAccessor();B=this._addAccessor(o.index,e)}if(R){const e=R.endAccessor();P=this._addAccessor(R.index,e)}if(A){const e=A.endAccessor();U=this._addAccessor(A.index,e)}e.components&&e.components.length>0&&e.components[0].faces?(G=i.addBufferView(N.D.UNSIGNED_INT,L.SCALAR,l.ELEMENT_ARRAY_BUFFER),this._addMeshVertexIndexed(G,e.components,t,D,M,B,P,U)):this._addMeshVertexNonIndexed(e.components,t,D,M,B,P,U),E.finalize(),T&&T.finalize(),o&&o.finalize(),R&&R.finalize(),G&&G.finalize(),A&&A.finalize(),_||i.finalize();const g=this.gltf.meshes.length;return this.gltf.meshes.push(t),g}_flipYZAxis({position:e,normal:t,tangent:s}){this._flipYZBuffer(e,3),this._flipYZBuffer(t,3),this._flipYZBuffer(s,4)}_flipYZBuffer(e,t){if(!(0,a.a)(e))for(let s=1,_=2;s<e.length;s+=t,_+=t){const t=e[s],i=e[_];e[s]=i,e[_]=-t}}_addMaterial(e){if(null===e)return;const t=this._materialMap.indexOf(e);if(-1!==t)return t;this.gltf.materials||(this.gltf.materials=[]);const s={};switch(e.alphaMode){case"mask":s.alphaMode=D.MASK;break;case"auto":case"blend":s.alphaMode=D.BLEND}.5!==e.alphaCutoff&&(s.alphaCutoff=e.alphaCutoff),e.doubleSided&&(s.doubleSided=e.doubleSided),s.pbrMetallicRoughness={};const _=e=>e**2.1,i=e=>{const t=e.toRgba();return t[0]=_(t[0]/255),t[1]=_(t[1]/255),t[2]=_(t[2]/255),t};if((0,a.i)(e.color)&&(s.pbrMetallicRoughness.baseColorFactor=i(e.color)),(0,a.i)(e.colorTexture)&&(s.pbrMetallicRoughness.baseColorTexture={index:this._addTexture(e.colorTexture)}),(0,a.i)(e.normalTexture)&&(s.normalTexture={index:this._addTexture(e.normalTexture)}),e instanceof A.Z){if((0,a.i)(e.emissiveTexture)&&(s.emissiveTexture={index:this._addTexture(e.emissiveTexture)}),(0,a.i)(e.emissiveColor)){const t=i(e.emissiveColor);s.emissiveFactor=[t[0],t[1],t[2]]}(0,a.i)(e.occlusionTexture)&&(s.occlusionTexture={index:this._addTexture(e.occlusionTexture)}),(0,a.i)(e.metallicRoughnessTexture)&&(s.pbrMetallicRoughness.metallicRoughnessTexture={index:this._addTexture(e.metallicRoughnessTexture)}),s.pbrMetallicRoughness.metallicFactor=e.metallic,s.pbrMetallicRoughness.roughnessFactor=e.roughness}else s.pbrMetallicRoughness.metallicFactor=1,s.pbrMetallicRoughness.roughnessFactor=1,y.warnOnce("Meshes exported to GLTF without MeshMaterialMetallicRoughness material will appear different when imported back.");const n=this.gltf.materials.length;return this.gltf.materials.push(s),this._materialMap.push(e),n}_addTexture(e){const t=this.gltf.textures??[];return this.gltf.textures=t,(0,E.o)(this._textureMap,e,(()=>{const s={sampler:this._addSampler(e),source:this._addImage(e)},_=t.length;return t.push(s),_}))}_addImage(e){const t=this._imageMap.get(e);if(null!=t)return t;this.gltf.images||(this.gltf.images=[]);const s={};if(e.url)s.uri=e.url;else{const t=e.data;s.extras=t;for(let e=0;e<this.gltf.images.length;++e)if(t===this.gltf.images[e].extras)return e;const _=this.gltf.extras;switch(_.options.imageOutputType){case I.GLB:{const e=_.binChunkBuffer.addBufferView(N.D.UNSIGNED_BYTE,L.SCALAR),i=u(t).then((({data:e,type:t})=>(s.mimeType=t,e)));e.writeAsync(i).then((()=>{e.finalize()})),s.bufferView=e.index;break}case I.DataURI:s.uri=f(t);break;default:_.promises.push(u(t).then((({data:e,type:t})=>{s.uri=e,s.mimeType=t})))}}const _=this.gltf.images.length;return this.gltf.images.push(s),this._imageMap.set(e,_),_}_addSampler(e){this.gltf.samplers||(this.gltf.samplers=[]);let t=N.b.REPEAT,s=N.b.REPEAT;if("string"==typeof e.wrap)switch(e.wrap){case"clamp":t=N.b.CLAMP_TO_EDGE,s=N.b.CLAMP_TO_EDGE;break;case"mirror":t=N.b.MIRRORED_REPEAT,s=N.b.MIRRORED_REPEAT}else{switch(e.wrap.vertical){case"clamp":s=N.b.CLAMP_TO_EDGE;break;case"mirror":s=N.b.MIRRORED_REPEAT}switch(e.wrap.horizontal){case"clamp":t=N.b.CLAMP_TO_EDGE;break;case"mirror":t=N.b.MIRRORED_REPEAT}}const _={wrapS:t,wrapT:s};for(let e=0;e<this.gltf.samplers.length;++e)if(JSON.stringify(_)===JSON.stringify(this.gltf.samplers[e]))return e;const i=this.gltf.samplers.length;return this.gltf.samplers.push(_),i}_addAccessor(e,t){this.gltf.accessors||(this.gltf.accessors=[]);const s={bufferView:e,byteOffset:t.byteOffset,componentType:t.componentType,count:t.count,type:t.type,min:t.min,max:t.max,name:t.name};t.normalized&&(s.normalized=!0);const _=this.gltf.accessors.length;return this.gltf.accessors.push(s),_}_addMeshVertexIndexed(e,t,s,_,i,n,r,E){for(const a of t){e.startAccessor("INDICES");for(let t=0;t<a.faces.length;++t)e.push(a.faces[t]);const t=e.endAccessor(),T={attributes:{POSITION:_},indices:this._addAccessor(e.index,t),material:this._addMaterial(a.material)};i&&"flat"!==a.shading&&(T.attributes.NORMAL=i),n&&(T.attributes.TEXCOORD_0=n),r&&"flat"!==a.shading&&(T.attributes.TANGENT=r),E&&(T.attributes.COLOR_0=E),s.primitives.push(T)}}_addMeshVertexNonIndexed(e,t,s,_,i,n,r){const E={attributes:{POSITION:s}};_&&(E.attributes.NORMAL=_),i&&(E.attributes.TEXCOORD_0=i),n&&(E.attributes.TANGENT=n),r&&(E.attributes.COLOR_0=r),e&&(E.material=this._addMaterial(e[0].material)),t.primitives.push(E)}}class x{constructor(){this.copyright="",this.defaultScene=0,this.generator="",this._scenes=[]}addScene(e){if(this._scenes.includes(e))throw new Error("Scene already added");this._scenes.push(e)}removeScene(e){(0,P.r)(this._scenes,e)}forEachScene(e){this._scenes.forEach(e)}}class V{constructor(){this.name="",this._nodes=[]}addNode(e){if(this._nodes.includes(e))throw new Error("Node already added");this._nodes.push(e)}forEachNode(e){this._nodes.forEach(e)}}class Y{constructor(e){this.mesh=e,this.name="",this.translation=(0,R.d)(),this.rotation=(0,o.c)(),this.scale=(0,R.k)(R.O),this._nodes=[]}addNode(e){if(this._nodes.includes(e))throw new Error("Node already added");this._nodes.push(e)}forEachNode(e){this._nodes.forEach(e)}set rotationAngles(e){(0,T.f)(this.rotation,e[0],e[1],e[2])}}class z{constructor(e,t){this._file={type:"model/gltf-binary",data:e},this.origin=t}buffer(){return Promise.resolve(this._file)}download(e){(0,_.io)(new Blob([this._file.data],{type:this._file.type}),e)}}function X(e,t){const s=new x,_=new V;return s.addScene(_),_.addNode(new Y(e)),function(e,t){return function(e,t,s){const _=new H(e,t=t||{},s);let r=_.params;r?r.origin||(r.origin=new n.Z({x:-1,y:-1,z:-1})):r={origin:new n.Z({x:-1,y:-1,z:-1})};const E=r.origin,a=_.gltf,T=a.extras?.promises??[];let o=1,R=1,A=null;return(0,i.as)(T).then((()=>{const e={origin:E};delete a.extras;const s="number"==typeof t.jsonSpacing?t.jsonSpacing:4,_=JSON.stringify(a,((s,_)=>{if("extras"!==s){if(_ instanceof ArrayBuffer){if(function(e){if(e.byteLength<8)return!1;const t=new Uint8Array(e);return 137===t[0]&&80===t[1]&&78===t[2]&&71===t[3]&&13===t[4]&&10===t[5]&&26===t[6]&&10===t[7]}(_))switch(t.imageOutputType){case I.DataURI:case I.GLB:break;case I.External:default:{const t=`img${R}.png`;return R++,e[t]=_,t}}switch(t.bufferOutputType){case O.DataURI:return function(e){const t=[],s=new Uint8Array(e);for(let e=0;e<s.length;e++)t.push(String.fromCharCode(s[e]));return"data:application/octet-stream;base64,"+btoa(t.join(""))}(_);case O.GLB:if(A)throw new Error("Already encountered an ArrayBuffer, there should only be one in the GLB format.");return void(A=_);case O.External:default:{const t=`data${o}.bin`;return o++,e[t]=_,t}}}return _}}),s);return t.bufferOutputType===O.GLB||t.imageOutputType===I.GLB?e["model.glb"]=new U(_,A).buffer:e["model.gltf"]=_,e}))}(e,{bufferOutputType:O.GLB,imageOutputType:I.GLB,jsonSpacing:0},t)}(s,t).then((e=>new z(e["model.glb"],e.origin)))}}}]);