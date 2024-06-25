// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../../../../../chunks/_rollupPluginBabelHelpers ../../../../../../core/maybe ../../../../../../core/screenUtils ../../../../../../symbols/cim/enums ../../alignmentUtils ../../color ../../definitions ../../number ../../materialKey/MaterialKey ./util ./WGLBaseTextTemplate ./WGLDynamicMeshTemplate ../../../../layers/features/textUtils".split(" "),function(v,q,l,A,w,r,t,B,C,e,D,E,F){return function(u){function p(a,c,d){var b=u.call(this,a)||this;b._horizontalAlignment="center";b._verticalAlignment=
"middle";b._textToGlyphs=new Map;b._minMaxZoom=B.i1616to32(Math.round(c*t.MIN_MAX_ZOOM_PRECISION_FACTOR),Math.round(d*t.MIN_MAX_ZOOM_PRECISION_FACTOR));c=a.scaleFactor||1;b._cimTextLayer=a;const m=a.color;e.isFunction(m)?b._dynamicPropertyMap.set("_color",(f,g,h)=>r.premultiplyAlphaRGBA(m(f,g,h))):b._color=r.premultiplyAlphaRGBA(m);const k=a.outlineColor;e.isFunction(k)?b._dynamicPropertyMap.set("_haloColor",(f,g,h)=>r.premultiplyAlphaRGBA(k(f,g,h))):b._haloColor=r.premultiplyAlphaRGBA(k);let n;e.isFunction(a.size)||
(n=Math.min(Math.round(l.pt2px(a.size*a.sizeRatio)),127));b._dynamicPropertyMap.set("_size",(f,g,h)=>e.isFunction(a.size)?Math.min(Math.round(l.pt2px(a.size(f,g,h)*a.sizeRatio)),127):n);e.isFunction(a.outlineSize)?b._dynamicPropertyMap.set("_haloSize",(f,g,h)=>Math.min(Math.floor(5*l.pt2px(a.outlineSize(f,g,h)*a.sizeRatio)),127)):b._haloSize=Math.min(Math.floor(5*l.pt2px(a.outlineSize*a.sizeRatio)),127);let x;e.isFunction(a.offsetX)||(x=Math.round(l.pt2px(a.offsetX*a.sizeRatio)));b._dynamicPropertyMap.set("_xOffset",
(f,g,h)=>e.isFunction(a.offsetX)?Math.round(l.pt2px(a.offsetX(f,g,h)*a.sizeRatio)):x);let y;e.isFunction(a.offsetY)||(y=Math.round(l.pt2px(a.offsetY*a.sizeRatio)));b._dynamicPropertyMap.set("_yOffset",(f,g,h)=>e.isFunction(a.offsetY)?Math.round(l.pt2px(a.offsetY(f,g,h)*a.sizeRatio)):y);e.isFunction(a.angle)?b._dynamicPropertyMap.set("_angle",a.angle):b._angle=a.angle;e.isFunction(a.horizontalAlignment)?b._dynamicPropertyMap.set("_horizontalAlignment",a.horizontalAlignment):b._horizontalAlignment=
a.horizontalAlignment;e.isFunction(a.verticalAlignment)?b._dynamicPropertyMap.set("_verticalAlignment",a.verticalAlignment):b._verticalAlignment=a.verticalAlignment;q.isSome(a.effects)&&(d=a.effects,e.isFunction(d)?b._dynamicPropertyMap.set("_effects",d):b._effects=d);q.isSome(a.markerPlacement)&&(d=a.markerPlacement,e.isFunction(d)?b._dynamicPropertyMap.set("_markerPlacement",d):b._textPlacement=d);e.isFunction(a.text)?b._dynamicPropertyMap.set("_text",a.text):b._text=a.text;b._scaleFactor=c;c=Math.min(Math.round(l.pt2px(a.referenceSize*
a.sizeRatio)),127);b._referenceSize=Math.round(Math.sqrt(256*c));b._materialKey=a.materialKey;c=C.TextMaterialKey.load(b._materialKey);c.sdf=!0;b._bitset=(a.alignment===A.Alignment.MAP?1:0)|(a.colorLocked?1:0)<<1;b._materialKey=c.data;b._decoration="none";b._lineHeight=1;b._lineWidth=512;b._isCIM=!0;return b}v._inheritsLoose(p,u);p.fromCIMText=function(a,c){const [d,b]=e.getMinMaxZoom(a.scaleInfo,c);return new p(a,d,b)};var z=p.prototype;z.analyze=function(){var a=v._asyncToGenerator(function*(c,
d,b,m){var k=d.readLegacyFeature();var n=this._cimTextLayer;k="string"===typeof n.text?n.text:"function"===typeof n.text?n.text(k,b,m):"";(c=yield u.prototype.analyze.call(this,c,d,b,m,F.codepoints(k)))&&c.glyphMosaicItems&&this._textToGlyphs.set(k,c.glyphMosaicItems);return c});return function(c,d,b,m){return a.apply(this,arguments)}}();z.bindFeature=function(a,c,d){const b=a.readLegacyFeature();this._dynamicPropertyMap.forEach((m,k)=>{this[k]=m(b,c,d)});this._text&&0!==this._text.length?(this._size*=
this._scaleFactor,this._scale=this._size/t.GLYPH_SIZE,this._xOffset*=this._scaleFactor,this._yOffset*=this._scaleFactor,this._xAlignD=w.getXAnchorDirection(q.unwrapOr(this._horizontalAlignment,"center")),this._yAlignD=w.getYAnchorDirection(q.unwrapOr(this._verticalAlignment,"baseline")),a=this._textToGlyphs.get(this._text),this.bindTextInfo(a,!1)):this._shapingInfo=null};return p}(D(E))});