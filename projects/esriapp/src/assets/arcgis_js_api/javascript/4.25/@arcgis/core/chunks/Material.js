/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{a as e,i as t}from"./maybe.js";import{g as r}from"./watch.js";import{V as a}from"./VertexAttribute.js";import{n as i}from"../core/lang.js";import{h as n,d as s,c as o}from"./mathUtils.js";import{s as l,h as c,n as u,d}from"./vec3.js";import{c as f,s as m,d as h}from"./aaBoundingBox.js";import{P as p}from"./basicInterfaces.js";import{V as g}from"./ViewingMode.js";import{a as O}from"./Util2.js";import{i as v}from"./utils20.js";class x{constructor(){this.id=r()}unload(){}}var P;!function(e){e[e.Layer=0]="Layer",e[e.Object=1]="Object",e[e.Geometry=2]="Geometry",e[e.Material=3]="Material",e[e.Texture=4]="Texture",e[e.COUNT=5]="COUNT"}(P||(P={}));class M{}function _(e,...t){let r="";for(let a=0;a<t.length;a++)r+=e[a]+t[a];return r+=e[e.length-1],r}!function(e){e.int=function(e){return Math.round(e).toString()},e.float=function(e){return e.toPrecision(8)}}(_||(_={}));const A=new Map([[a.POSITION,0],[a.NORMAL,1],[a.UV0,2],[a.COLOR,3],[a.SIZE,4],[a.TANGENT,4],[a.AUXPOS1,5],[a.SYMBOLCOLOR,5],[a.AUXPOS2,6],[a.FEATUREATTRIBUTE,6],[a.INSTANCEFEATUREATTRIBUTE,6],[a.INSTANCECOLOR,7],[a.OBJECTANDLAYERIDCOLOR,7],[a.OBJECTANDLAYERIDCOLOR_INSTANCED,7],[a.MODEL,8],[a.MODELNORMAL,12],[a.MODELORIGINHI,11],[a.MODELORIGINLO,15]]);function T(e,t){return new D(e,E,t)}function C(e,t){const{curvatureDependent:r,scaleStart:a,scaleFallOffRange:i}=E;return new D(e,{curvatureDependent:{min:{curvature:r.min.curvature,tiltAngle:r.min.tiltAngle,scaleFallOffFactor:N.curvatureDependent.min.scaleFallOffFactor},max:{curvature:r.max.curvature,tiltAngle:r.max.tiltAngle,scaleFallOffFactor:N.curvatureDependent.max.scaleFallOffFactor}},scaleStart:a,scaleFallOffRange:i,minPixelSize:N.minPixelSize},t)}function F(e,t,r){const a=r.parameters,i=r.paddingPixelsOverride;return R.scale=Math.min(a.divisor/(t-a.offset),1),R.factor=function(e){return Math.abs(e*e*e)}(e),R.minPixelSize=a.minPixelSize,R.paddingPixels=i,R}function b(e,t){return 0===e?t.minPixelSize:t.minPixelSize*(1+2*t.paddingPixels/e)}function S(e,t){return Math.max(n(e*t.scale,e,t.factor),b(e,t))}function L(e,t,r,a){a.scale=function(e,t,r){const a=F(e,t,r);return a.minPixelSize=0,a.paddingPixels=0,S(1,a)}(e,t,r),a.factor=0,a.minPixelSize=r.parameters.minPixelSize,a.paddingPixels=r.paddingPixelsOverride}function I(e,t,r=[0,0]){const a=Math.min(Math.max(t.scale,b(e[1],t)/Math.max(1e-5,e[1])),1);return r[0]=e[0]*a,r[1]=e[1]*a,r}class D{constructor(e,t,r,a={camera:{distance:0,fovY:0},divisor:0,offset:0,minPixelSize:0,paddingPixels:0},i){this._viewingMode=e,this._description=t,this._ellipsoidRadius=r,this.parameters=a,this._paddingPixelsOverride=i,this._viewingMode===g.Local?(this._coverageCompensation=this._surfaceCoverageCompensationLocal,this._calculateCurvatureDependentParameters=this._calculateCurvatureDependentParametersLocal):(this._coverageCompensation=this._surfaceCoverageCompensationGlobal,this._calculateCurvatureDependentParameters=this._calculateCurvatureDependentParametersGlobal)}get paddingPixelsOverride(){return this._paddingPixelsOverride||this.parameters.paddingPixels}update(e){return!(this.parameters&&this.parameters.camera.fovY===e.fovY&&this.parameters.camera.distance===e.distance||(this._calculateParameters(e,this._ellipsoidRadius,this.parameters),0))}overridePadding(e){return e!==this.paddingPixelsOverride?new D(this._viewingMode,this._description,this._ellipsoidRadius,this.parameters,e):this}_calculateParameters(e,t,r){const{scaleStart:a,scaleFallOffRange:i,minPixelSize:n}=this._description,{fovY:s,distance:o}=e,l=this._calculateCurvatureDependentParameters(e,t),c=this._coverageCompensation(e,t,l),{tiltAngle:u,scaleFallOffFactor:d}=l,f=Math.sin(u)*o,m=.5*Math.PI-u-s*(.5-a*c),h=f/Math.cos(m),p=m+s*i*c,g=(h-d*(f/Math.cos(p)))/(1-d);return r.camera.fovY=e.fovY,r.camera.distance=e.distance,r.offset=g,r.divisor=h-g,r.minPixelSize=n,r}_calculateCurvatureDependentParametersLocal(e,t,r=y){return r.tiltAngle=this._description.curvatureDependent.min.tiltAngle,r.scaleFallOffFactor=this._description.curvatureDependent.min.scaleFallOffFactor,r}_calculateCurvatureDependentParametersGlobal(e,t,r=y){const a=this._description.curvatureDependent,i=1+e.distance/t,s=Math.sqrt(i*i-1),[l,c]=[a.min.curvature,a.max.curvature],u=o((s-l)/(c-l),0,1),[d,f]=[a.min,a.max];return r.tiltAngle=n(d.tiltAngle,f.tiltAngle,u),r.scaleFallOffFactor=n(d.scaleFallOffFactor,f.scaleFallOffFactor,u),r}_surfaceCoverageCompensationLocal(e,t,r){return(e.fovY-r.tiltAngle)/e.fovY}_surfaceCoverageCompensationGlobal(e,t,r){const a=t*t,i=r.tiltAngle+.5*Math.PI,{fovY:n,distance:s}=e,o=s*s+a-2*Math.cos(i)*s*t,l=Math.sqrt(o),c=Math.sqrt(o-a);return(Math.acos(c/l)-Math.asin(t/(l/Math.sin(i)))+.5*n)/n}}const E={curvatureDependent:{min:{curvature:s(10),tiltAngle:s(12),scaleFallOffFactor:.5},max:{curvature:s(70),tiltAngle:s(40),scaleFallOffFactor:.8}},scaleStart:.3,scaleFallOffRange:.65,minPixelSize:0},N={curvatureDependent:{min:{scaleFallOffFactor:.7},max:{scaleFallOffFactor:.95}},minPixelSize:14},R={scale:0,factor:0,minPixelSize:0,paddingPixels:0},y={tiltAngle:0,scaleFallOffFactor:0},z=f();function V(e,t,r,i,n,s,o){if(!v(t))if(e.boundingInfo){O(e.primitiveType===p.Triangle);const t=r.tolerance;Y(e.boundingInfo,i,n,t,s,o)}else{const t=e.indices.get(a.POSITION),r=e.vertexAttributes.get(a.POSITION);B(i,n,0,t.length/3,t,r,void 0,s,o)}}const j=d();function Y(r,a,i,n,s,o){if(e(r))return;const l=W(a,i,j);if(m(z,r.getBBMin()),h(z,r.getBBMax()),t(s)&&s.applyToAabb(z),X(z,a,l,n)){const{primitiveIndices:e,indices:t,position:l}=r,c=e?e.length:t.length/3;if(c>ee){const e=r.getChildren();if(void 0!==e){for(let t=0;t<8;++t)void 0!==e[t]&&Y(e[t],a,i,n,s,o);return}}B(a,i,0,c,t,l,e,s,o)}}const U=d();function B(e,r,a,i,n,s,o,l,c){if(o)return function(e,r,a,i,n,s,o,l,c){const u=s.data,d=s.stride||s.size,f=e[0],m=e[1],h=e[2],p=r[0]-f,g=r[1]-m,O=r[2]-h;for(let e=a;e<i;++e){const r=o[e];let a=3*r,i=d*n[a++],s=u[i++],v=u[i++],x=u[i];i=d*n[a++];let P=u[i++],M=u[i++],_=u[i];i=d*n[a];let A=u[i++],T=u[i++],C=u[i];t(l)&&([s,v,x]=l.applyToVertex(s,v,x,e),[P,M,_]=l.applyToVertex(P,M,_,e),[A,T,C]=l.applyToVertex(A,T,C,e));const F=P-s,b=M-v,S=_-x,L=A-s,I=T-v,D=C-x,E=g*D-I*O,N=O*L-D*p,R=p*I-L*g,y=F*E+b*N+S*R;if(Math.abs(y)<=Number.EPSILON)continue;const z=f-s,V=m-v,j=h-x,Y=z*E+V*N+j*R;if(y>0){if(Y<0||Y>y)continue}else if(Y>0||Y<y)continue;const B=V*S-b*j,w=j*F-S*z,G=z*b-F*V,W=p*B+g*w+O*G;if(y>0){if(W<0||Y+W>y)continue}else if(W>0||Y+W<y)continue;const X=(L*B+I*w+D*G)/y;X>=0&&c(X,q(F,b,S,L,I,D,U),r,!1)}}(e,r,a,i,n,s,o,l,c);const u=s.data,d=s.stride||s.size,f=e[0],m=e[1],h=e[2],p=r[0]-f,g=r[1]-m,O=r[2]-h;for(let e=a,r=3*a;e<i;++e){let a=d*n[r++],i=u[a++],s=u[a++],o=u[a];a=d*n[r++];let v=u[a++],x=u[a++],P=u[a];a=d*n[r++];let M=u[a++],_=u[a++],A=u[a];t(l)&&([i,s,o]=l.applyToVertex(i,s,o,e),[v,x,P]=l.applyToVertex(v,x,P,e),[M,_,A]=l.applyToVertex(M,_,A,e));const T=v-i,C=x-s,F=P-o,b=M-i,S=_-s,L=A-o,I=g*L-S*O,D=O*b-L*p,E=p*S-b*g,N=T*I+C*D+F*E;if(Math.abs(N)<=Number.EPSILON)continue;const R=f-i,y=m-s,z=h-o,V=R*I+y*D+z*E;if(N>0){if(V<0||V>N)continue}else if(V>0||V<N)continue;const j=y*F-C*z,Y=z*T-F*R,B=R*C-T*y,w=p*j+g*Y+O*B;if(N>0){if(w<0||V+w>N)continue}else if(w>0||V+w<N)continue;const G=(b*j+S*Y+L*B)/N;G>=0&&c(G,q(T,C,F,b,S,L,U),e,!1)}}const w=d(),G=d();function q(e,t,r,a,i,n,s){return l(w,e,t,r),l(G,a,i,n),c(s,w,G),u(s,s),s}function W(e,t,r){return l(r,1/(t[0]-e[0]),1/(t[1]-e[1]),1/(t[2]-e[2]))}function X(e,t,r,a){return k(e,t,r,a,1/0)}function k(e,t,r,a,i){const n=(e[0]-a-t[0])*r[0],s=(e[3]+a-t[0])*r[0];let o=Math.min(n,s),l=Math.max(n,s);const c=(e[1]-a-t[1])*r[1],u=(e[4]+a-t[1])*r[1];if(l=Math.min(l,Math.max(c,u)),l<0)return!1;if(o=Math.max(o,Math.min(c,u)),o>l)return!1;const d=(e[2]-a-t[2])*r[2],f=(e[5]+a-t[2])*r[2];return l=Math.min(l,Math.max(d,f)),!(l<0)&&(o=Math.max(o,Math.min(d,f)),!(o>l)&&o<i)}function H(e,r,a,i,n){let s=(a.screenLength||0)*e.pixelRatio;t(n)&&(s=function(e,t,r,a){return S(e,F(t,r,a))}(s,i,r,n));const l=s*Math.tan(.5*e.fovY)/(.5*e.fullHeight);return o(l*r,a.minWorldLength||0,null!=a.maxWorldLength?a.maxWorldLength:1/0)}function J(e,t){const r=t?J(t):{};for(const t in e){let a=e[t];a&&a.forEach&&(a=Q(a)),null==a&&t in r||(r[t]=a)}return r}function Z(e,t){let r=!1;for(const a in t){const n=t[a];void 0!==n&&(Array.isArray(n)?null===e[a]?(e[a]=n.slice(),r=!0):i(e[a],n)&&(r=!0):e[a]!==n&&(r=!0,e[a]=n))}return r}function K(e,t,r,i,n,s){if(!t.options.selectionMode)return;const l=e.vertexAttributes.get(a.POSITION).data,c=e.vertexAttributes.get(a.SIZE),u=c&&c.data[0],d=i[0],f=i[1],m=((u+n)/2+4)*e.screenToWorldRatio;let h=Number.MAX_VALUE,p=0;for(let e=0;e<l.length-5;e+=3){const t=l[e],r=l[e+1],a=d-t,i=f-r,n=l[e+3]-t,s=l[e+4]-r,c=o((n*a+s*i)/(n*n+s*s),0,1),u=n*c-a,m=s*c-i,g=u*u+m*m;g<h&&(h=g,p=e/3)}h<m*m&&s(r.dist,r.normal,p,!1)}function Q(e){const t=[];return e.forEach((e=>t.push(e))),t}const $={multiply:1,ignore:2,replace:3,tint:4},ee=1e3;class te extends x{constructor(e,t){super(),this.type=P.Material,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._insertOrder=0,this._vertexAttributeLocations=A,this._parameters=J(e,t),this.validateParameters(this._parameters)}dispose(){}get parameters(){return this._parameters}update(e){return!1}setParameters(e,t=!0){Z(this._parameters,e)&&(this.validateParameters(this._parameters),t&&this.parametersChanged())}validateParameters(e){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.parametersChanged())}shouldRender(e){return this.isVisible()&&this.isVisibleForOutput(e.output)&&0!=(this.renderOccluded&e.renderOccludedMask)}isVisibleForOutput(e){return!0}get renderOccluded(){return this.parameters.renderOccluded}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this.parametersChanged())}get insertOrder(){return this._insertOrder}set insertOrder(e){e!==this._insertOrder&&(this._insertOrder=e,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){t(this.repository)&&this.repository.materialChanged(this)}}var re;!function(e){e[e.Occlude=1]="Occlude",e[e.Transparent=2]="Transparent",e[e.OccludeAndTransparent=4]="OccludeAndTransparent",e[e.OccludeAndTransparentStencil=8]="OccludeAndTransparentStencil",e[e.Opaque=16]="Opaque"}(re||(re={}));class ae extends M{constructor(){super(...arguments),this.renderOccluded=re.Occlude}}export{x as C,A as D,te as M,M as N,re as R,ae as a,P as b,J as c,S as d,I as e,K as f,_ as g,T as h,V as i,C as j,k,q as l,B as m,W as n,X as o,L as p,$ as q,Z as u,H as v};
