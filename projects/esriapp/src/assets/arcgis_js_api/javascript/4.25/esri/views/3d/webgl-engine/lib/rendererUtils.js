// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports","./ChangeSet"],function(f,g){f.splitRenderGeometryChangeSetByMaterial=function(c){const d=new Map,e=a=>{let b=d.get(a);b||(b=new g.MaterialChangeSet,d.set(a,b));return b};c.removes.forAll(a=>{1<=a.data.indexCount&&e(a.material).removes.push(a)});c.adds.forAll(a=>{1<=a.data.indexCount&&e(a.material).adds.push(a)});c.updates.forAll(a=>{1<=a.renderGeometry.data.indexCount&&e(a.renderGeometry.material).updates.push(a)});return d};Object.defineProperties(f,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});