// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports"],function(f){let g=function(a,b,c){this.x=a;this.y=b;this.spatialReference=c;this.m=this.z=void 0},h=function(a,b,c,d){this.rings=a;this.spatialReference=b;this.hasM=this.hasZ=void 0;c&&(this.hasZ=c);d&&(this.hasM=d)},k=function(a,b,c,d){this.paths=a;this.spatialReference=b;this.hasM=this.hasZ=void 0;c&&(this.hasZ=c);d&&(this.hasM=d)},l=function(a,b,c,d){this.points=a;this.spatialReference=b;this.hasM=this.hasZ=void 0;c&&(this.hasZ=c);d&&(this.hasM=d)},m=function(a,b,c,d,e){this.xmin=
a;this.ymin=b;this.xmax=c;this.ymax=d;this.spatialReference=e;this.mmax=this.mmin=this.zmax=this.zmin=void 0};f.jsonAdapter={convertToGEGeometry:function(a,b){return null==b?null:a.convertJSONToGeometry(b)},exportPoint:function(a,b,c){c=new g(a.getPointX(b),a.getPointY(b),c);const d=a.hasZ(b),e=a.hasM(b);d&&(c.z=a.getPointZ(b));e&&(c.m=a.getPointM(b));return c},exportPolygon:function(a,b,c){return new h(a.exportPaths(b),c,a.hasZ(b),a.hasM(b))},exportPolyline:function(a,b,c){return new k(a.exportPaths(b),
c,a.hasZ(b),a.hasM(b))},exportMultipoint:function(a,b,c){return new l(a.exportPoints(b),c,a.hasZ(b),a.hasM(b))},exportExtent:function(a,b,c){var d=a.hasZ(b);const e=a.hasM(b);c=new m(a.getXMin(b),a.getYMin(b),a.getXMax(b),a.getYMax(b),c);d&&(d=a.getZExtent(b),c.zmin=d.vmin,c.zmax=d.vmax);e&&(a=a.getMExtent(b),c.mmin=a.vmin,c.mmax=a.vmax);return c}};Object.defineProperties(f,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});