/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import"../geometry.js";import e from"../core/Error.js";import{L as r}from"./Logger.js";import{i as t}from"./maybe.js";import a from"../geometry/SpatialReference.js";const s=r.getLogger("esri.support.arcadeOnDemand");let i;function c(){return i||(i=(async()=>{const e=await import("./arcadeUtils.js").then((e=>e.aw));return{arcade:e.arcade,arcadeUtils:e,Dictionary:e.Dictionary,Feature:e.arcadeFeature}})()),i}const n=(e,r,t)=>u.create(e,r,t,null,["$feature"]),o=(e,r,t)=>u.create(e,r,t,null,["$feature","$view"]),l=(e,r,t,a)=>u.create(e,r,t,a,["$feature","$view"]);class u{constructor(e,r,t,a,s,i,c,n){this.script=e,this.evaluate=s;const o=Array.isArray(c)?c:c.fields;this.fields=o,this._syntaxTree=a,this._arcade=r,this._arcadeDictionary=t,this._arcadeFeature=i,this._spatialReference=n,this._referencesGeometry=r.scriptTouchesGeometry(this._syntaxTree),this._referencesScale=this._arcade.referencesMember(this._syntaxTree,"scale")}static async create(r,i,n,o,l,p){const{arcade:d,Feature:m,Dictionary:f}=await c(),y=a.fromJSON(i);let h=null;try{h=d.parseScript(r,p)}catch(t){return s.error(new e("arcade-bad-expression","Failed to parse arcade script",{script:r,error:t})),null}const _=l.reduce(((e,r)=>({...e,[r]:null})),{});let w=null;t(o)&&(w=new f(o),w.immutable=!0,_.$config=null);const F=d.scriptUsesGeometryEngine(h),g=F&&d.enableGeometrySupport(),b=d.scriptUsesFeatureSet(h)&&d.enableFeatureSetSupport(),S=d.scriptIsAsync(h),x=S&&d.enableAsyncSupport(),$={vars:_,spatialReference:y,useAsync:!!x};await Promise.all([g,b,x]);const v=new Set;await d.loadDependentModules(v,h,null,S,F);const D=new f;D.immutable=!1,D.setField("scale",0);const j=d.compileScript(h,$);return new u(r,d,f,h,(e=>("$view"in e&&e.$view&&(D.setField("scale",e.$view.scale),e.$view=D),w&&(e.$config=w),j({vars:e,spatialReference:y}))),new m,n,y)}repurposeFeature(e){return e.geometry&&!e.geometry.spatialReference&&(e.geometry.spatialReference=this._spatialReference),this._arcadeFeature.repurposeFromGraphicLikeObject(e.geometry,e.attributes,{fields:this.fields}),this._arcadeFeature}createDictionary(){return new this._arcadeDictionary}referencesMember(e){return this._arcade.referencesMember(this._syntaxTree,e)}referencesFunction(e){return this._arcade.referencesFunction(this._syntaxTree,e)}referencesGeometry(){return this._referencesGeometry}referencesScale(){return this._referencesScale}extractFieldLiterals(){return this._arcade.extractExpectedFieldLiterals(this._syntaxTree)}}export{u as A,o as a,n as b,l as c,c as l};