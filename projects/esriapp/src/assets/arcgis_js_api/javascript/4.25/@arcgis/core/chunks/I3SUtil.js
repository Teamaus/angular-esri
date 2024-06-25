/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import e from"../request.js";import{c as t,d as r,f as n,s as a}from"../core/lang.js";import o from"../core/Error.js";import{h as s}from"./object.js";import{i,a as c}from"./maybe.js";import{eachAlways as l}from"../core/promiseUtils.js";import{a as f}from"./mat3.js";import{c as u}from"./mat3f64.js";import{c as h}from"./mat4.js";import{c as m}from"./mat4f64.js";import{c as p,a as b,m as d}from"./quat.js";import{c as y,a as S,b as M,r as g}from"./I3SBinaryReader.js";import{c as w}from"./quatf64.js";import{d as j,k as x,p as z,q as I,c as T,b as q,o as E,a as v,s as P,r as N,u as R,v as A,l as F,g as C,w as V,x as _,y as k,e as G}from"./vec3.js";import{computeTranslationToOriginAndRotation as O,canProjectWithoutEngine as W,projectBuffer as D,projectVectorToVector as U}from"../geometry/projection.js";import{g as L,c as B}from"./projectionEllipsoid.js";import K,{k as Y}from"../geometry/SpatialReference.js";import{c as $,e as Q,b as H,i as J}from"./aaBoundingRect.js";import Z from"../rest/support/Query.js";import{V as X}from"./ViewingMode.js";import{c as ee,a as te}from"./edgeUtils.js";import{p as re,C as ne}from"./symbolColorUtils.js";import{c as ae,a as oe}from"./vec3f32.js";import{c as se}from"./aaBoundingBox.js";import{s as ie,n as ce}from"./plane.js";function le(e,t,r,n){const a=fe(e,t,r),o=m();return O(r,a,o,n),o}function fe(e,t,r){const n=j(),a=e[3],o=2**(4*Math.ceil(Math.log(a)*Math.LOG2E/4)+1);if(r.isGeographic){const t=o/L(r).radius*180/Math.PI,a=Math.round(e[1]/t),s=Math.max(-90,Math.min(90,a*t)),i=t/Math.cos((Math.abs(s)-t/2)/180*Math.PI),c=Math.round(e[0]/i)*i;n[0]=c,n[1]=s}else{const t=Math.round(e[0]/o),r=Math.round(e[1]/o);n[0]=t*o,n[1]=r*o}const s=e[2]+t,i=Math.round(s/o);return n[2]=i*o,n}const ue=[0,0,0],he=[0,0,0],me=[0,0,0],pe=[0,0,0],be=[0,0,0],de=[0,0,0],ye=[0,0,0],Se=[0,0,0],Me=[0,0,0],ge=[0,0,0],we=[0,0,0],je=[0,0],xe=[0,0,0],ze=[0,0,0],Ie=[0,0,0],Te=[0,0,0],qe=[0,0,0],Ee=[0,0,0];function ve(e,t,r,n,a,o){if(et(t)<1e-6)return;Ze(xe,r,t),Ze(ze,n,t),Ze(Ie,a,t),Ne(e,t,je),qe[1]=je[0],Te[1]=je[1],Ee[1]=Te[1]-qe[1];const s=[r,n,a],i=[xe,ze,Ie];for(let r=0;r<3;++r){Ne(e,s[r],je),qe[0]=je[0],Te[0]=je[1],Ne(e,i[r],je),qe[2]=je[0],Te[2]=je[1],Ee[0]=Te[0]-qe[0],Ee[2]=Te[2]-qe[2];const n=Ye(Ee);n<o.quality&&(Je(o.b0,s[r]),Je(o.b1,t),Je(o.b2,i[r]),o.quality=n)}}const Pe=[0,0,0];function Ne(e,t,r){const{data:n,size:a}=e;r[0]=Number.POSITIVE_INFINITY,r[1]=Number.NEGATIVE_INFINITY;for(let e=0;e<n.length;e+=a){const a=n[e]*t[0]+n[e+1]*t[1]+n[e+2]*t[2];r[0]=Math.min(r[0],a),r[1]=Math.max(r[1],a)}}function Re(e,t,r){Je(r.center,e),He(r.halfSize,t,.5),r.quaternion[0]=0,r.quaternion[1]=0,r.quaternion[2]=0,r.quaternion[3]=1}const Ae=[0,0,0],Fe=[0,0,0],Ce=[0,0,0],Ve=[0,0,0],_e=[0,0,0],ke=[0,0,0];function Ge(e,t,r){Je(Ae,t),Math.abs(t[0])>Math.abs(t[1])&&Math.abs(t[0])>Math.abs(t[2])?Ae[0]=0:Math.abs(t[1])>Math.abs(t[2])?Ae[1]=0:Ae[2]=0,et(Ae)<1e-6&&(Ae[0]=Ae[1]=Ae[2]=1),Ze(Fe,t,Ae),Xe(Fe,Fe),Ze(Ce,t,Fe),Xe(Ce,Ce),Oe(e,t,Fe,Ce,Ve,_e),Qe(ke,_e,Ve),Le(t,Fe,Ce,Ve,_e,ke,r)}function Oe(e,t,r,n,a,o){Ne(e,t,je),a[0]=je[0],o[0]=je[1],Ne(e,r,je),a[1]=je[0],o[1]=je[1],Ne(e,n,je),a[2]=je[0],o[2]=je[1]}const We=[0,0,0],De=[1,0,0,0,1,0,0,0,1],Ue=[0,0,0];function Le(e,t,r,n,a,o,s){De[0]=e[0],De[1]=e[1],De[2]=e[2],De[3]=t[0],De[4]=t[1],De[5]=t[2],De[6]=r[0],De[7]=r[1],De[8]=r[2],function(e,t){const r=t[0]+t[4]+t[8];if(r>0){let n=Math.sqrt(r+1);e[3]=.5*n,n=.5/n,e[0]=(t[5]-t[7])*n,e[1]=(t[6]-t[2])*n,e[2]=(t[1]-t[3])*n}else{let r=0;t[4]>t[0]&&(r=1),t[8]>t[3*r+r]&&(r=2);const n=(r+1)%3,a=(r+2)%3;let o=Math.sqrt(t[3*r+r]-t[3*n+n]-t[3*a+a]+1);e[r]=.5*o,o=.5/o,e[3]=(t[3*n+a]-t[3*a+n])*o,e[n]=(t[3*n+r]+t[3*r+n])*o,e[a]=(t[3*a+r]+t[3*r+a])*o}}(s.quaternion,De),$e(Ue,n,a),He(Ue,Ue,.5),He(s.center,e,Ue[0]),He(We,t,Ue[1]),$e(s.center,s.center,We),He(We,r,Ue[2]),$e(s.center,s.center,We),He(s.halfSize,o,.5)}class Be{constructor(e){this.minVert=new Array(7),this.maxVert=new Array(7),this.buffer=new ArrayBuffer(448);let t=0;this.minProj=new Float64Array(this.buffer,t,7),t+=56,this.maxProj=new Float64Array(this.buffer,t,7),t+=56;for(let e=0;e<7;++e)this.minVert[e]=new Float64Array(this.buffer,t,3),t+=24;for(let e=0;e<7;++e)this.maxVert[e]=new Float64Array(this.buffer,t,3),t+=24;for(let e=0;e<7;++e)this.minProj[e]=Number.POSITIVE_INFINITY,this.maxProj[e]=Number.NEGATIVE_INFINITY;const r=new Array(7),n=new Array(7),{data:a,size:o}=e;for(let e=0;e<a.length;e+=o){let t=a[e];t<this.minProj[0]&&(this.minProj[0]=t,r[0]=e),t>this.maxProj[0]&&(this.maxProj[0]=t,n[0]=e),t=a[e+1],t<this.minProj[1]&&(this.minProj[1]=t,r[1]=e),t>this.maxProj[1]&&(this.maxProj[1]=t,n[1]=e),t=a[e+2],t<this.minProj[2]&&(this.minProj[2]=t,r[2]=e),t>this.maxProj[2]&&(this.maxProj[2]=t,n[2]=e),t=a[e]+a[e+1]+a[e+2],t<this.minProj[3]&&(this.minProj[3]=t,r[3]=e),t>this.maxProj[3]&&(this.maxProj[3]=t,n[3]=e),t=a[e]+a[e+1]-a[e+2],t<this.minProj[4]&&(this.minProj[4]=t,r[4]=e),t>this.maxProj[4]&&(this.maxProj[4]=t,n[4]=e),t=a[e]-a[e+1]+a[e+2],t<this.minProj[5]&&(this.minProj[5]=t,r[5]=e),t>this.maxProj[5]&&(this.maxProj[5]=t,n[5]=e),t=a[e]-a[e+1]-a[e+2],t<this.minProj[6]&&(this.minProj[6]=t,r[6]=e),t>this.maxProj[6]&&(this.maxProj[6]=t,n[6]=e)}for(let e=0;e<7;++e){let t=r[e];Je(this.minVert[e],a,t),t=n[e],Je(this.maxVert[e],a,t)}}}class Ke{constructor(){this.b0=[1,0,0],this.b1=[0,1,0],this.b2=[0,0,1],this.quality=0}}function Ye(e){return e[0]*e[1]+e[0]*e[2]+e[1]*e[2]}function $e(e,t,r){e[0]=t[0]+r[0],e[1]=t[1]+r[1],e[2]=t[2]+r[2]}function Qe(e,t,r){e[0]=t[0]-r[0],e[1]=t[1]-r[1],e[2]=t[2]-r[2]}function He(e,t,r){e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r}function Je(e,t,r=0){e[0]=t[r+0],e[1]=t[r+1],e[2]=t[r+2]}function Ze(e,t,r){const n=t[0],a=t[1],o=t[2],s=r[0],i=r[1],c=r[2];e[0]=a*c-o*i,e[1]=o*s-n*c,e[2]=n*i-a*s}function Xe(e,t){const r=t[0]*t[0]+t[1]*t[1]+t[2]*t[2];if(r>0){const n=1/Math.sqrt(r);e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n}}function et(e){return e[0]*e[0]+e[1]*e[1]+e[2]*e[2]}function tt(e,t){const r=t[0]-e[0],n=t[1]-e[1],a=t[2]-e[2];return r*r+n*n+a*a}function rt(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}const nt=w(),at=j(),ot=j(),st=u();class it{constructor(e){const t=56*e;this.buffer=new ArrayBuffer(t),this.obbs=new Array(e);for(let t=0;t<e;t++)this.obbs[t]={center:I(this.buffer,56*t+0),halfSize:oe(this.buffer,56*t+24),quaternion:S(this.buffer,56*t+36)}}}function ct(e=[0,0,0],t=[-1,-1,-1],r=[0,0,0,1]){return{center:x(e),halfSize:ae(t),quaternion:y(r)}}function lt(e){return ct(e.center,e.halfSize,e.quaternion)}function ft(e,t){T(t.center,e.center),T(t.halfSize,e.halfSize),b(t.quaternion,e.quaternion)}function ut(e,t){return function(e,t){const{data:r,size:n}=e,a=r.length/n;if(a<=0)return;const o=new Be(e);$e(ue,o.minProj,o.maxProj),He(ue,ue,.5),Qe(he,o.maxProj,o.minProj);const s=Ye(he),i=new Ke;i.quality=s,a<14&&(e={data:new Float64Array(o.buffer,112,42),size:3});const c=[0,0,0],l=[0,0,0],f=[0,0,0],u=[0,0,0],h=[0,0,0],m=[0,0,0],p=[0,0,0];switch(function(e,t,r,n,a,o,s,i,c,l){return function(e,t,r){let n=tt(e.maxVert[0],e.minVert[0]),a=0;for(let t=1;t<7;++t){const r=tt(e.maxVert[t],e.minVert[t]);r>n&&(n=r,a=t)}Je(t,e.minVert[a]),Je(r,e.maxVert[a])}(e,n,a),tt(n,a)<1e-6?1:(Qe(s,n,a),Xe(s,s),function(e,t,r,n){const{data:a,size:o}=e;let s=Number.NEGATIVE_INFINITY,i=0;for(let e=0;e<a.length;e+=o){we[0]=a[e]-t[0],we[1]=a[e+1]-t[1],we[2]=a[e+2]-t[2];const n=r[0]*we[0]+r[1]*we[1]+r[2]*we[2],o=r[0]*r[0]+r[1]*r[1]+r[2]*r[2],c=we[0]*we[0]+we[1]*we[1]+we[2]*we[2]-n*n/o;c>s&&(s=c,i=e)}return Je(n,a,i),s}(t,n,s,o)<1e-6?2:(Qe(i,a,o),Xe(i,i),Qe(c,o,n),Xe(c,c),Ze(r,i,s),Xe(r,r),ve(t,r,s,i,c,l),0))}(o,e,p,c,l,f,u,h,m,i)){case 1:return void Re(ue,he,t);case 2:return void Ge(e,u,t)}!function(e,t,r,n,a,o,s,i,c){(function(e,t,r,n,a){!function(e,t,r,n,a){const{data:o,size:s}=e;Je(n,o),Je(a,n),r[0]=rt(Pe,t),r[1]=r[0];for(let e=s;e<o.length;e+=s){const s=o[e]*t[0]+o[e+1]*t[1]+o[e+2]*t[2];s<r[0]&&(r[0]=s,Je(n,o,e)),s>r[1]&&(r[1]=s,Je(a,o,e))}}(e,t,je,a,n);const o=rt(r,t);je[1]-1e-6<=o&&(n[0]=void 0),je[0]+1e-6>=o&&(a[0]=void 0)})(e,t,r,me,pe),void 0!==me[0]&&(Qe(be,me,r),Xe(be,be),Qe(de,me,n),Xe(de,de),Qe(ye,me,a),Xe(ye,ye),Ze(Se,de,o),Xe(Se,Se),Ze(Me,ye,s),Xe(Me,Me),Ze(ge,be,i),Xe(ge,ge),ve(e,Se,o,de,be,c),ve(e,Me,s,ye,de,c),ve(e,ge,i,be,ye,c)),void 0!==pe[0]&&(Qe(be,pe,r),Xe(be,be),Qe(de,pe,n),Xe(de,de),Qe(ye,pe,a),Xe(ye,ye),Ze(Se,de,o),Xe(Se,Se),Ze(Me,ye,s),Xe(Me,Me),Ze(ge,be,i),Xe(ge,ge),ve(e,Se,o,de,be,c),ve(e,Me,s,ye,de,c),ve(e,ge,i,be,ye,c))}(e,p,c,l,f,u,h,m,i),Oe(e,i.b0,i.b1,i.b2,Ve,_e);const b=[0,0,0];Qe(b,_e,Ve),i.quality=Ye(b),i.quality<s?Le(i.b0,i.b1,i.b2,Ve,_e,b,t):Re(ue,he,t)}(e,t=t||ct()),t}function ht(e,t){const r=ie(t,e.center),n=St(e,ce(t));return r>n?1:r<-n?-1:0}function mt(e,t){t||(t=se());const r=f(st,e.quaternion),n=e.halfSize[0]*Math.abs(r[0])+e.halfSize[1]*Math.abs(r[3])+e.halfSize[2]*Math.abs(r[6]),a=e.halfSize[0]*Math.abs(r[1])+e.halfSize[1]*Math.abs(r[4])+e.halfSize[2]*Math.abs(r[7]),o=e.halfSize[0]*Math.abs(r[2])+e.halfSize[1]*Math.abs(r[5])+e.halfSize[2]*Math.abs(r[8]);return t[0]=e.center[0]-n,t[1]=e.center[1]-a,t[2]=e.center[2]-o,t[3]=e.center[0]+n,t[4]=e.center[1]+a,t[5]=e.center[2]+o,t}function pt(e,t){return ie(t,e.center)-St(e,ce(t))}function bt(e,t){return ie(t,e.center)+St(e,ce(t))}function dt(e,t){return ht(e,t[0])<=0&&ht(e,t[1])<=0&&ht(e,t[2])<=0&&ht(e,t[3])<=0&&ht(e,t[4])<=0&&ht(e,t[5])<=0}function yt(e,t,r,n=0){p(nt,e.quaternion),q(at,t,e.center);const a=z(at,at,nt),o=z(ot,r,nt);let s=-1/0,i=1/0;for(let t=0;t<3;t++)if(Math.abs(o[t])>1e-6){const r=(n+e.halfSize[t]-a[t])/o[t],c=(-n-e.halfSize[t]-a[t])/o[t];s=Math.max(s,Math.min(r,c)),i=Math.min(i,Math.max(r,c))}else if(a[t]>e.halfSize[t]+n||a[t]<-e.halfSize[t]-n)return!1;return s<=i}function St(e,t){p(nt,e.quaternion),z(at,t,nt);const r=e.halfSize;return Math.abs(at[0]*r[0])+Math.abs(at[1]*r[1])+Math.abs(at[2]*r[2])}function Mt(e,t){for(let r=0;r<8;++r){const n=t[r];n[0]=1&r?-e.halfSize[0]:e.halfSize[0],n[1]=2&r?-e.halfSize[1]:e.halfSize[1],n[2]=4&r?-e.halfSize[2]:e.halfSize[2],z(n,n,e.quaternion),v(n,n,e.center)}}function gt(e){return E(e.halfSize)}function wt(e){return e&&parseInt(e.substring(e.lastIndexOf("/")+1,e.length),10)}function jt(e){if(s("disable-feature:i3s-draco")||!e)return!1;for(const t of e)for(const e of t.geometryBuffers)if("draco"===e.compressedAttributes?.encoding)return!0;return!1}function xt(e,t,r,n){r.traverse(t,(t=>{const r=t.mbs;return vt(e,r)!==Et.OUTSIDE&&(n(t),!0)}))}function zt(e,t,r){let n=0,a=0;for(let o=0;o<t.length&&n<e.length;o++)e[n]===t[o]&&(r(o)&&(e[a]=e[n],a++),n++);e.length=a}function It(e,t,r){let a=0,o=0;for(;a<r.length;)n(e,r[a])>=0===t&&(r[o]=r[a],o++),a++;r.length=o}(()=>{const e=new Int8Array(162);let t=0;const r=r=>{for(let n=0;n<r.length;n++)e[t+n]=r[n];t+=6};r([6,2,3,1,5,4]),r([0,2,3,1,5,4]),r([0,2,3,7,5,4]),r([0,1,3,2,6,4]),r([0,1,3,2,0,0]),r([0,1,5,7,3,2]),r([0,1,3,7,6,4]),r([0,1,3,7,6,2]),r([0,1,5,7,6,2]),r([0,1,5,4,6,2]),r([0,1,5,4,0,0]),r([0,1,3,7,5,4]),r([0,2,6,4,0,0]),r([0,0,0,0,0,0]),r([1,3,7,5,0,0]),r([2,3,7,6,4,0]),r([2,3,7,6,0,0]),r([2,3,1,5,7,6]),r([0,1,5,7,6,2]),r([0,1,5,7,6,4]),r([0,1,3,7,6,4]),r([4,5,7,6,2,0]),r([4,5,7,6,0,0]),r([4,5,1,3,7,6]),r([0,2,3,7,5,4]),r([6,2,3,7,5,4]),r([6,2,3,1,5,4])})();const Tt=$();function qt(e,t){if(0===t.rotationScale[1]&&0===t.rotationScale[2]&&0===t.rotationScale[3]&&0===t.rotationScale[5]&&0===t.rotationScale[6]&&0===t.rotationScale[7])return Tt[0]=(e[0]-t.position[0])/t.rotationScale[0],Tt[1]=(e[1]-t.position[1])/t.rotationScale[4],Tt[2]=(e[2]-t.position[0])/t.rotationScale[0],Tt[3]=(e[3]-t.position[1])/t.rotationScale[4],Tt}var Et;function vt(e,t){const r=t[0],n=t[1],a=t[3],o=e[0]-r,s=r-e[2],i=e[1]-n,c=n-e[3],l=Math.max(o,s,0),f=Math.max(i,c,0),u=l*l+f*f;return u>a*a?Et.OUTSIDE:u>0?Et.INTERSECTS_CENTER_OUTSIDE:-Math.max(o,s,i,c)>a?Et.INSIDE:Et.INTERSECTS_CENTER_INSIDE}function Pt(e,t,r){const n=[],a=r&&r.missingFields,o=r&&r.originalFields;for(const r of e){const e=r.toLowerCase();let s=!1;for(const a of t)if(e===a.name.toLowerCase()){n.push(a.name),s=!0,o&&o.push(r);break}!s&&a&&a.push(r)}return n}async function Nt(e,t,r,n,a){if(0===t.length)return[];const s=e.attributeStorageInfo;if(i(e.associatedLayer))try{return await async function(e,t,r,n){t.sort(((e,t)=>e.attributes[r]-t.attributes[r]));const a=t.map((e=>e.attributes[r])),o=[],s=Pt(n,e.fields,{originalFields:o}),i=await Rt(e,a,s);for(let e=0;e<t.length;e++){const r=t[e],n=i[e],a={};if(r.attributes)for(const e in r.attributes)a[e]=r.attributes[e];for(let e=0;e<o.length;e++)a[o[e]]=n[s[e]];r.attributes=a}return t}(e.associatedLayer,t,r,n)}catch(t){if(e.associatedLayer.loaded)throw t}if(s){const i=function(e,t,r){const n=new Map,a=[],o=r();for(const r of e){const e=r.attributes[t];for(let t=0;t<o.length;t++){const s=o[t],i=s.featureIds.indexOf(e);if(i>=0){let e=n.get(s.node);e||(e={node:s.node,indices:[],graphics:[]},a.push(e),n.set(s.node,e)),e.indices.push(i),e.graphics.push(r);for(let e=t;e>0;e--)o[e]=o[e-1];o[0]=s;break}}}return a}(t,r,a);if(c(i))throw new o("scenelayer:features-not-loaded","Tried to query attributes for unloaded features");const l=e.parsedUrl.path,f=await Promise.all(i.map((e=>function(e,t,r,n,a){return At(e,t,r.resources.attributes,n,a)}(l,s,e.node,e.indices,n).then((t=>{for(let r=0;r<e.graphics.length;r++){const n=e.graphics[r],a=t[r];if(n.attributes)for(const e in n.attributes)e in a||(a[e]=n.attributes[e]);n.attributes=a}return e.graphics})))));return f.flat()}throw new o("scenelayer:no-attribute-source","This scene layer does not have a source for attributes available")}function Rt(e,t,r){const n=e.capabilities.query.maxRecordCount;if(null!=n&&t.length>n){const o=a(t,n);return Promise.all(o.map((t=>Rt(e,t,r)))).then((e=>e.flat()))}const s=new Z({objectIds:t,outFields:r,orderByFields:[e.objectIdField]});return e.queryFeatures(s).then((e=>{if(e&&e.features&&e.features.length===t.length)return e.features.map((e=>e.attributes));throw new o("scenelayer:feature-not-in-associated-layer","Feature not found in associated feature layer")}))}function At(t,r,n,a,o){const s=[];for(const e of r)if(e&&o.includes(e.name)){const r=`${t}/nodes/${n}/attributes/${e.key}/0`;s.push({url:r,storageInfo:e})}return l(s.map((t=>e(t.url,{responseType:"array-buffer"}).then((e=>g(t.storageInfo,e.data)))))).then((e=>{const t=[];for(const r of a){const n={};for(let t=0;t<e.length;t++)null!=e[t].value&&(n[s[t].storageInfo.name]=Ft(e[t].value,r));t.push(n)}return t}))}function Ft(e,n){if(!e)return null;const a=e[n];return t(e)?-32768===a?null:a:r(e)?-2147483648===a?null:a:a!=a?null:a}function Ct(e){const t=e.store.indexCRS||e.store.geographicCRS,r=void 0===t?e.store.indexWKT:void 0;if(r){if(!e.spatialReference)throw new o("layerview:no-store-spatial-reference-wkt-index-and-no-layer-spatial-reference","Found indeWKT in the scene layer store but no layer spatial reference",{});if(r!==e.spatialReference.wkt)throw new o("layerview:store-spatial-reference-wkt-index-incompatible","The indeWKT of the scene layer store does not match the WKT of the layer spatial reference",{})}const n=t?new K(wt(t)):e.spatialReference;return n.equals(e.spatialReference)?e.spatialReference:n}function Vt(e){const t=e.store.vertexCRS||e.store.projectedCRS,r=void 0===t?e.store.vertexWKT:void 0;if(r){if(!e.spatialReference)throw new o("layerview:no-store-spatial-reference-wkt-vertex-and-no-layer-spatial-reference","Found vertexWKT in the scene layer store but no layer spatial reference",{});if(r!==e.spatialReference.wkt)throw new o("layerview:store-spatial-reference-wkt-vertex-incompatible","The vertexWKT of the scene layer store does not match the WKT of the layer spatial reference",{})}const n=t?new K(wt(t)):e.spatialReference;return n.equals(e.spatialReference)?e.spatialReference:n}function _t(e,t){return c(t)?"@null":t===B(t)?"@ECEF":e.equals(t)?"":null!=t.wkid?"@"+t.wkid:null}function kt(e,t,r){if(!W(e,t))throw new o("layerview:spatial-reference-incompatible","The spatial reference of this scene layer is incompatible with the spatial reference of the view",{});if("local"===r&&!function(e,t){return e.equals(t)||e.isWGS84&&t.isWebMercator||e.isWebMercator&&t.isWGS84}(e,t))throw new o("layerview:spatial-reference-incompatible","The spatial reference of this scene layer is incompatible with the spatial reference of the view",{})}function Gt(e,t,r){const n=Ct(e),a=Vt(e);kt(n,t,r),kt(a,t,r)}function Ot(e){if(null==e.store||null==e.store.defaultGeometrySchema||null!=(t=e.store.defaultGeometrySchema).geometryType&&"triangles"!==t.geometryType||null!=t.topology&&"PerAttributeArray"!==t.topology||null==t.vertexAttributes||null==t.vertexAttributes.position)throw new o("scenelayer:unsupported-geometry-schema","The geometry schema of this scene layer is not supported.",{url:e.parsedUrl.path});var t}function Wt(e,t){Gt(e,t.spatialReference,t.viewingMode)}function Dt(e){if(null==e.store||null==e.store.defaultGeometrySchema||null==(t=e.store.defaultGeometrySchema).geometryType||"points"!==t.geometryType||null!=t.topology&&"PerAttributeArray"!==t.topology||null!=t.encoding&&""!==t.encoding&&"lepcc-xyz"!==t.encoding||null==t.vertexAttributes||null==t.vertexAttributes.position)throw new o("pointcloud:unsupported-geometry-schema","The geometry schema of this point cloud scene layer is not supported.",{});var t}function Ut(e,t){kt(e.spatialReference,t.spatialReference,t.viewingMode)}function Lt(e){return"mesh-3d"===e.type}function Bt(e){if(null==e||!function(e){return"simple"===e.type||"class-breaks"===e.type||"unique-value"===e.type}(e))return!0;if(("unique-value"===e.type||"class-breaks"===e.type)&&null==e.defaultSymbol)return!0;const t=e.getSymbols();if(0===t.length)return!0;for(const e of t){if(!Lt(e)||0===e.symbolLayers.length)return!0;for(const t of e.symbolLayers.items)if("fill"!==t.type||c(t.material)||c(t.material.color)||"replace"!==t.material.colorMixMode)return!0}return!1}!function(e){e[e.OUTSIDE=0]="OUTSIDE",e[e.INTERSECTS_CENTER_OUTSIDE=1]="INTERSECTS_CENTER_OUTSIDE",e[e.INTERSECTS_CENTER_INSIDE=2]="INTERSECTS_CENTER_INSIDE",e[e.INSIDE=3]="INSIDE"}(Et||(Et={}));const Kt=ee({color:[0,0,0,0],opacity:0});class Yt{constructor(){this.edgeMaterial=null,this.material=null,this.castShadows=!0}}function $t(e){const t=new Yt;let r=!1,n=!1;for(const a of e.symbolLayers.items)if("fill"===a.type&&a.enabled){const e=a.material,o=a.edges;if(i(e)&&!r){const n=e.color,o=re(e.colorMixMode);i(n)?t.material={color:[n.r/255,n.g/255,n.b/255],alpha:n.a,colorMixMode:o}:t.material={color:[1,1,1],alpha:1,colorMixMode:ne.Multiply},t.castShadows=a.castShadows,r=!0}i(o)&&!n&&(t.edgeMaterial=te(o,{}),n=!0)}return t.material||(t.material={color:[1,1,1],alpha:1,colorMixMode:ne.Multiply}),t}function Qt(e,t){return(0|e)+(0|t)|0}function Ht(e,t,r,n,a=0){n===B(n)?t.isGeographic?function(e,t,r,n){const a=L(r),o=1+Math.max(0,n)/(a.radius+e.center[2]);P(t.center,e.center[0],e.center[1],e.center[2]+n),D(t.center,r,0,t.center,B(r),0,1),b(t.quaternion,e.quaternion),p(pr,e.quaternion),P(Mr,0,0,1),z(Mr,Mr,pr),P(Mr,e.halfSize[0]*Math.abs(Mr[0]),e.halfSize[1]*Math.abs(Mr[1]),e.halfSize[2]*Math.abs(Mr[2])),C(Mr,Mr,a.inverseFlattening),v(t.halfSize,e.halfSize,Mr),C(t.halfSize,t.halfSize,o)}(e,r,t,a):function(e,t,r,n){Mt(e,br),P(t.center,e.center[0],e.center[1],e.center[2]+n),O(r,t.center,mr,B(r)),P(t.center,mr[12],mr[13],mr[14]);const a=2*Math.sqrt(1+mr[0]+mr[5]+mr[10]);pr[0]=(mr[6]-mr[9])/a,pr[1]=(mr[8]-mr[2])/a,pr[2]=(mr[1]-mr[4])/a,pr[3]=.25*a,d(t.quaternion,pr,e.quaternion),p(pr,t.quaternion);let o=0,s=0,i=0;for(const e of br)e[2]+=n,D(e,r,0,e,B(r),0,1),A(Mr,e,t.center),z(Mr,Mr,pr),o=Math.max(o,Math.abs(Mr[0])),s=Math.max(s,Math.abs(Mr[1])),i=Math.max(i,Math.abs(Mr[2]));P(t.halfSize,o,s,i)}(e,r,t,a):t.isWGS84&&(n.isWebMercator||Y(n))?function(e,t,r,n,a){T(or,t.center),or[2]+=a;const o=B(r);D(or,e,0,or,o,0,1),ir(o,t,or,r,n)}(t,e,n,r,a):t.isWebMercator&&Y(n)?function(e,t,r,n,a){T(or,t.center),or[2]+=a,ir(e,t,or,r,n)}(t,e,n,r,a):e===r?(r.center[2]+=a,D(r.center,t,0,r.center,n,0,1)):(P(r.center,e.center[0],e.center[1],e.center[2]+a),D(r.center,t,0,r.center,n,0,1),b(r.quaternion,e.quaternion),T(r.halfSize,e.halfSize))}function Jt(e,t,r,n,a){if(b(a.quaternion,e.quaternion),n===X.Global){p(tr,e.quaternion),z(Zt,e.center,tr),N(Xt,Zt),R(er,Xt,e.halfSize),A(er,Xt,er);const n=F(er);v(er,Xt,e.halfSize);const o=F(er);if(n<r)T(a.center,e.center),P(Zt,r,r,r),v(a.halfSize,e.halfSize,Zt);else{const s=o>0?1+t/o:1,i=n>0?1+r/n:1,c=(i+s)/2,l=(i-s)/2;C(a.halfSize,Xt,l),V(a.halfSize,a.halfSize,e.halfSize,c),C(a.center,Xt,c),V(a.center,a.center,e.halfSize,l),_(Zt,Zt),k(a.center,a.center,Zt),z(a.center,a.center,a.quaternion)}}else{const n=P(Zt,0,0,1);V(a.center,e.center,n,(r+t)/2),p(tr,e.quaternion),z(n,n,tr),N(n,n),V(a.halfSize,e.halfSize,n,(r-t)/2)}return a}const Zt=j(),Xt=j(),er=j(),tr=w(),rr=new Float64Array(24),nr={data:rr,size:3},ar=j(),or=j(),sr=u();function ir(e,t,r,n,a){const o=f(sr,t.quaternion);for(let e=0;e<8;++e){for(let r=0;r<3;++r)ar[r]=t.halfSize[r]*(0!=(e&1<<r)?-1:1);for(let t=0;t<3;++t){let n=r[t];for(let e=0;e<3;++e)n+=ar[e]*o[3*e+t];rr[3*e+t]=n}}D(rr,e,0,rr,n,0,8),ut(nr,a)}function cr(e,t,r,n,a,o){if(!o||0===o.length||c(t))return null;const s=le(e.mbs,a,r,t);let l;h(wr,s);let f=1/0,u=-1/0;if(o.forEach((o=>(o=>{if("replace"!==o.type)return;const s=o.geometry;if(!s.hasZ)return;Q(dr);const c=s.spatialReference||n,h=s.rings.reduce(((e,r)=>r.reduce(((e,r)=>(U(r,c,Mr,t),G(Mr,Mr,wr),H(dr,Mr),Math.min(Mr[2],e))),e)),1/0);(()=>{if(!l)if(l=br,Q(yr),i(e.serviceObb)){Ht(e.serviceObb,r,Sr,t,a),Mt(Sr,l);for(const e of l)G(e,e,wr),H(yr,e)}else{const n=e.mbs,o=n[3];U(n,r,Mr,t),G(Mr,Mr,wr),Mr[2]+=a;for(let e=0;e<8;++e){const t=1&e?o:-o,r=2&e?o:-o,n=4&e?o:-o,a=l[e];T(a,[Mr[0]+t,Mr[1]+r,Mr[2]+n]),H(yr,a)}}})(),J(yr,dr)&&(f=Math.min(f,h),u=Math.max(u,h))})(o))),f===1/0)return null;for(let e=0;e<8;++e)m=gr.data,p=3*e,b=l[e],G(Mr,b,s),m[p+0]=Mr[0],m[p+1]=Mr[1],m[p+2]=Mr[2],p+=24,b[2]=f,G(Mr,b,s),m[p+0]=Mr[0],m[p+1]=Mr[1],m[p+2]=Mr[2],p+=24,b[2]=u,G(Mr,b,s),m[p+0]=Mr[0],m[p+1]=Mr[1],m[p+2]=Mr[2];var m,p,b;return ut(gr)}function lr(e){return i(e)&&e.halfSize[0]>=0}function fr(e){return e[3]>=0}function ur(e){i(e)&&(e.halfSize[0]=-1)}function hr(e){i(e)&&(e[3]=-1)}const mr=m(),pr=M(),br=[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],dr=$(),yr=$(),Sr=ct(),Mr=[0,0,0],gr={data:new Array(72),size:3},wr=m();export{Kt as A,qt as B,It as C,hr as D,ur as E,Ht as F,dt as G,Vt as H,xt as I,ft as J,mt as K,pt as L,Et as M,bt as N,it as O,Dt as P,Ut as Q,Gt as R,jt as S,ut as T,Jt as a,kt as b,lt as c,lr as d,yt as e,Pt as f,Ct as g,fr as h,ht as i,ct as j,Bt as k,Ot as l,Wt as m,_t as n,le as o,St as p,At as q,gt as r,cr as s,fe as t,zt as u,Ft as v,Nt as w,vt as x,Qt as y,$t as z};
