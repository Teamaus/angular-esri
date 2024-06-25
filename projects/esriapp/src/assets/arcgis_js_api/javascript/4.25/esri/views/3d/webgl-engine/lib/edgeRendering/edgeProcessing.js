// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../../../geometry/support/meshUtils/deduplicate ../../../support/meshProcessing ../../../support/buffer/InterleavedLayout ../VertexAttribute ./bufferLayouts ./edgeBufferWriters ./edgePreprocessing".split(" "),function(e,p,k,g,d,q,h,r){function l(a,c,f,b){if(c)return c=k.computeNeighbors(f,b,a.count),new t(f,b,c,a);a=p.deduplicate(a.buffer,a.stride/4,{originalIndices:f,originalIndicesLength:b});b=k.computeNeighbors(a.indices,b,a.uniqueCount);return{faces:a.indices,facesLength:a.indices.length,
neighbors:b,vertices:q.EdgeInputBufferLayout.createView(a.buffer)}}let t=function(a,c,f,b){this.faces=a;this.facesLength=c;this.neighbors=f;this.vertices=b};const m=new h.RegularEdgeBufferWriter,n=new h.SilhouetteEdgeBufferWriter;h=g.newLayout().vec3f(d.VertexAttribute.POSITION0).vec3f(d.VertexAttribute.POSITION1);g=g.newLayout().vec3f(d.VertexAttribute.POSITION0).vec3f(d.VertexAttribute.POSITION1).u16(d.VertexAttribute.COMPONENTINDEX).u16(d.VertexAttribute.U16PADDING,{glPadding:!0});e.extract=function(a){const c=
l(a.data,a.skipDeduplicate,a.indices,a.indicesLength);m.updateSettings(a.writerSettings);n.updateSettings(a.writerSettings);return r.extractEdges(c,m,n)};e.extractComponentsEdgeLocationsLayout=g;e.extractEdgeInformation=l;e.extractEdgeLocationsLayout=h;Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});