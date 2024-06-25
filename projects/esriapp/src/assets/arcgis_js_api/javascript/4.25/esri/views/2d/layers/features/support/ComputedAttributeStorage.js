// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports","../../../engine/webgl/DisplayId","./DisplayIdGenerator","./StaticBitSet"],function(m,d,q,r){function g(f,c,a){if(!(f.length>c))for(;f.length<=c;)f.push(a)}let t=function(){function f(){this._numerics=[];this._strings=[];this._idGenerator=new q.DisplayIdGenerator;this._allocatedSize=256;this._bitsets=[];this._instanceIds=[];this._bounds=[]}var c=f.prototype;c.createBitset=function(){const a=this._bitsets.length;this._bitsets.push(r.StaticBitSet.create(this._allocatedSize,d.DISPLAY_ID_TEXEL_MASK));
return a+1};c.getBitset=function(a){return this._bitsets[a-1]};c._expand=function(){this._allocatedSize<<=1;for(const a of this._bitsets)a.resize(this._allocatedSize)};c._ensureNumeric=function(a,b){this._numerics[a]||(this._numerics[a]=[]);g(this._numerics[a],b,0)};c._ensureInstanceId=function(a){g(this._instanceIds,a,0)};c._ensureString=function(a,b){this._strings[a]||(this._strings[a]=[]);g(this._strings[a],b,null)};c.createDisplayId=function(a=!1){const b=this._idGenerator.createId();b>this._allocatedSize&&
this._expand();return d.createDisplayId(b,a)};c.releaseDisplayId=function(a){for(const b of this._bitsets)b.unset(a);return this._idGenerator.releaseId(a&d.DISPLAY_ID_TEXEL_MASK)};c.getComputedNumeric=function(a,b){return this.getComputedNumericAtIndex(a&d.DISPLAY_ID_TEXEL_MASK,0)};c.setComputedNumeric=function(a,b,e){return this.setComputedNumericAtIndex(a&d.DISPLAY_ID_TEXEL_MASK,e,0)};c.getComputedString=function(a,b){return this.getComputedStringAtIndex(a&d.DISPLAY_ID_TEXEL_MASK,0)};c.setComputedString=
function(a,b,e){return this.setComputedStringAtIndex(a&d.DISPLAY_ID_TEXEL_MASK,0,e)};c.getComputedNumericAtIndex=function(a,b){a&=d.DISPLAY_ID_TEXEL_MASK;this._ensureNumeric(b,a);return this._numerics[b][a]};c.setComputedNumericAtIndex=function(a,b,e){a&=d.DISPLAY_ID_TEXEL_MASK;this._ensureNumeric(b,a);this._numerics[b][a]=e};c.getInstanceId=function(a){a&=d.DISPLAY_ID_TEXEL_MASK;this._ensureInstanceId(a);return this._instanceIds[a]};c.setInstanceId=function(a,b){a&=d.DISPLAY_ID_TEXEL_MASK;this._ensureInstanceId(a);
this._instanceIds[a]=b};c.getComputedStringAtIndex=function(a,b){a&=d.DISPLAY_ID_TEXEL_MASK;this._ensureString(b,a);return this._strings[b][a]};c.setComputedStringAtIndex=function(a,b,e){a&=d.DISPLAY_ID_TEXEL_MASK;this._ensureString(b,a);this._strings[b][a]=e};c.getXMin=function(a){return this._bounds[4*(a&d.DISPLAY_ID_TEXEL_MASK)]};c.getYMin=function(a){return this._bounds[4*(a&d.DISPLAY_ID_TEXEL_MASK)+1]};c.getXMax=function(a){return this._bounds[4*(a&d.DISPLAY_ID_TEXEL_MASK)+2]};c.getYMax=function(a){return this._bounds[4*
(a&d.DISPLAY_ID_TEXEL_MASK)+3]};c.setBounds=function(a,b){b=b.readHydratedGeometry();if(!b||!b.coords.length)return!1;let e=Infinity,h=Infinity,k=-Infinity,l=-Infinity;b.forEachVertex((n,p)=>{e=Math.min(e,n);h=Math.min(h,p);k=Math.max(k,n);l=Math.max(l,p)});a&=d.DISPLAY_ID_TEXEL_MASK;g(this._bounds,4*a+4,0);this._bounds[4*a]=e;this._bounds[4*a+1]=h;this._bounds[4*a+2]=k;this._bounds[4*a+3]=l;return!0};return f}();m.ComputedAttributeStorage=t;Object.defineProperties(m,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});