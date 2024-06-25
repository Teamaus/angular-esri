// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports","../../core/has","../../chunks/vec3f64","../../geometry/support/aaBoundingBox"],function(b,h,p,e){const k=e.fromValues(-.5,-.5,-.5,.5,.5,.5),l=e.fromValues(-.5,-.5,0,.5,.5,1),m=e.fromValues(-.5,-.5,0,.5,.5,.5);h=["butt","square","round"];e=[...h,"none"];b.OBJECT_SYMBOL_LAYER_BOUNDING_BOX_TETRAHEDRON=m;b.OBJECT_SYMBOL_LAYER_BOUNDING_BOX_UNIT_CUBE=k;b.OBJECT_SYMBOL_LAYER_BOUNDING_BOX_UNIT_CYLINDER=l;b.lineCaps=h;b.lineJoins=["miter","bevel","round"];b.objectSymbolLayerPrimitiveBoundingBox=
function(c){switch(c){case "sphere":case "cube":case "diamond":return k;case "cylinder":case "cone":case "inverted-cone":return l;case "tetrahedron":return m}};b.objectSymbolLayerSizeWithResourceSize=function(c,{isPrimitive:f,width:d,depth:a,height:g}){f=f?10:1;if(null==d&&null==g&&null==a)return[f*c[0],f*c[1],f*c[2]];d=p.fromValues(d,a,g);let n;for(a=0;3>a;a++)if(g=d[a],null!=g){n=g/c[a];break}for(a=0;3>a;a++)null==d[a]&&(d[a]=c[a]*n);return d};b.pathCaps=e;Object.defineProperties(b,{__esModule:{value:!0},
[Symbol.toStringTag]:{value:"Module"}})});