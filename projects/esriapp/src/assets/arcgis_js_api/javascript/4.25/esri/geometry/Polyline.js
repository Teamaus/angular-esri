// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/lang ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/subclass ../core/accessorSupport/decorators/writer ./Extent ./Geometry ./Point ./SpatialReference ./support/extentUtils ./support/zmUtils".split(" "),function(q,l,r,n,g,v,w,x,y,h,z,A,t){var p;g=p=function(u){function m(...a){a=u.call(this,...a)||this;a.paths=[];a.type="polyline";return a}q._inheritsLoose(m,u);
var e=m.prototype;e.normalizeCtorArgs=function(a,b){let c=null,f,d,k=null;a&&!Array.isArray(a)?(c=a.paths?a.paths:null,b||(a.spatialReference?b=a.spatialReference:a.paths||(b=a)),f=a.hasZ,d=a.hasM):c=a;c=c||[];b=b||z.WGS84;c.length&&c[0]&&null!=c[0][0]&&"number"===typeof c[0][0]&&(c=[c]);if(k=c[0]&&c[0][0])void 0===f&&void 0===d?(f=2<k.length,d=!1):void 0===f?f=!d&&3<k.length:void 0===d&&(d=!f&&3<k.length);return{paths:c,spatialReference:b,hasZ:f,hasM:d}};e.writePaths=function(a,b){b.paths=r.clone(this.paths)};
e.addPath=function(a){if(a){var b=this.paths,c=b.length;if(Array.isArray(a[0]))b[c]=a.concat();else{const f=[];for(let d=0,k=a.length;d<k;d++)f[d]=a[d].toArray();b[c]=f}this.notifyChange("paths");return this}};e.clone=function(){const a=new p;a.spatialReference=this.spatialReference;a.paths=r.clone(this.paths);a.hasZ=this.hasZ;a.hasM=this.hasM;return a};e.getPoint=function(a,b){if(!this._validateInputs(a,b))return null;a=this.paths[a][b];b=this.hasZ;const c=this.hasM;return b&&!c?new h(a[0],a[1],
a[2],void 0,this.spatialReference):c&&!b?new h(a[0],a[1],void 0,a[2],this.spatialReference):b&&c?new h(a[0],a[1],a[2],a[3],this.spatialReference):new h(a[0],a[1],this.spatialReference)};e.insertPoint=function(a,b,c){if(!this._validateInputs(a,b,!0))return this;t.updateSupportFromPoint(this,c);Array.isArray(c)||(c=c.toArray());this.paths[a].splice(b,0,c);this.notifyChange("paths");return this};e.removePath=function(a){if(!this._validateInputs(a,null))return null;a=this.paths.splice(a,1)[0];const b=
this.spatialReference;a=a.map(c=>new h(c,b));this.notifyChange("paths");return a};e.removePoint=function(a,b){if(!this._validateInputs(a,b))return null;a=new h(this.paths[a].splice(b,1)[0],this.spatialReference);this.notifyChange("paths");return a};e.setPoint=function(a,b,c){if(!this._validateInputs(a,b))return this;t.updateSupportFromPoint(this,c);Array.isArray(c)||(c=c.toArray());this.paths[a][b]=c;this.notifyChange("paths");return this};e._validateInputs=function(a,b,c=!1){return null==a||0>a||
a>=this.paths.length||null!=b&&(a=this.paths[a],c&&(0>b||b>a.length)||!c&&(0>b||b>=a.length))?!1:!0};e.toJSON=function(a){return this.write({},a)};q._createClass(m,[{key:"cache",get:function(){this.commitProperty("paths");this.commitProperty("hasZ");this.commitProperty("hasM");this.commitProperty("spatialReference");return{}}},{key:"extent",get:function(){const {spatialReference:a}=this;var b=A.getPolylineExtent(this);if(!b)return null;b=new x(b);b.spatialReference=a;return b}}]);return m}(y);l.__decorate([n.property({readOnly:!0})],
g.prototype,"cache",null);l.__decorate([n.property({readOnly:!0})],g.prototype,"extent",null);l.__decorate([n.property({type:[[[Number]]],json:{write:{isRequired:!0}}})],g.prototype,"paths",void 0);l.__decorate([w.writer("paths")],g.prototype,"writePaths",null);g=p=l.__decorate([v.subclass("esri.geometry.Polyline")],g);g.prototype.toJSON.isDefaultToJSON=!0;return g});