// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports"],function(d){let h=function(){function e(a,b){this._lockedSchemaPixelSize=a;this._isGCS=b}var c=e.prototype;c.getLevelRowColumn=function(a){return this._isGCS?[a[0],a[1]>>1,a[2]>>1]:256===this._lockedSchemaPixelSize&&0<a[0]?[a[0]-1,a[1]>>1,a[2]>>1]:a};c.adjustLevel=function(a){return this._isGCS?a:256===this._lockedSchemaPixelSize?0<a?a-1:0:a};c.getShift=function(a,b){let f=0,g=0;if(256===this._lockedSchemaPixelSize||this._isGCS)a[2]%2&&(f=b),a[1]%2&&(g=b);return[f,g]};c.getScale=
function(a){if(this._isGCS){if(512===this._lockedSchemaPixelSize)return 4}else if(256===this._lockedSchemaPixelSize&&0===a)return 1;return 2};return e}();d.SchemaHelper=h;Object.defineProperties(d,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});