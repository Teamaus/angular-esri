/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{p as e}from"./workerHelper.js";import{c as t,d as s,f as i,E as r,h as n,e as a}from"./edgeProcessing.js";import"./BufferView.js";import"./vec2.js";import"./common.js";import"./vec3.js";import"./mathUtils.js";import"./InterleavedLayout.js";import"./types.js";import"./deduplicate.js";import"./VertexAttribute.js";import"./glUtil.js";import"./enums3.js";import"./VertexElementDescriptor.js";import"../core/lang.js";import"./maybe.js";class o{async extract(s){const i=c(s),r=t(i),n=[i.data.buffer],a=function(t,s){return s.push(t.regular.lodInfo.lengths.buffer),s.push(t.silhouette.lodInfo.lengths.buffer),{regular:{instancesData:e(t.regular.instancesData,s),lodInfo:{lengths:t.regular.lodInfo.lengths.buffer}},silhouette:{instancesData:e(t.silhouette.instancesData,s),lodInfo:{lengths:t.silhouette.lodInfo.lengths.buffer}},averageEdgeLength:t.averageEdgeLength}}(r,n);return{result:a,transferList:n}}async extractComponentsEdgeLocations(t){const r=c(t),n=s(r.data,r.skipDeduplicate,r.indices,r.indicesLength),a=i(n,u,p),o=[];return{result:e(a.regular.instancesData,o),transferList:o}}async extractEdgeLocations(t){const r=c(t),n=s(r.data,r.skipDeduplicate,r.indices,r.indicesLength),a=i(n,l,p),o=[];return{result:e(a.regular.instancesData,o),transferList:o}}}function c(e){return{data:r.createView(e.dataBuffer),indices:"Uint32Array"===e.indicesType?new Uint32Array(e.indices):"Uint16Array"===e.indicesType?new Uint16Array(e.indices):e.indices,indicesLength:e.indicesLength,writerSettings:e.writerSettings,skipDeduplicate:e.skipDeduplicate}}const l=new class{allocate(e){return n.createBuffer(e)}trim(e,t){return e.slice(0,t)}write(e,t,s){e.position0.setVec(t,s.position0),e.position1.setVec(t,s.position1)}},u=new class{allocate(e){return a.createBuffer(e)}trim(e,t){return e.slice(0,t)}write(e,t,s){e.position0.setVec(t,s.position0),e.position1.setVec(t,s.position1),e.componentIndex.set(t,s.componentIndex)}},p={allocate:()=>null,write:()=>{},trim:()=>null};export{o as default};