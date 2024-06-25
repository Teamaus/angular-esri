/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{r as e}from"./string.js";const s=[{pattern:/^\s*(https?:\/\/([^\s]+))\s*$/i,target:"_blank",label:"{messages.view}"},{pattern:/^\s*(tel:([^\s]+))\s*$/i,label:"{hierPart}"},{pattern:/^\s*(mailto:([^\s]+))\s*$/i,label:"{hierPart}"},{pattern:/^\s*(arcgis-appstudio-player:\/\/([^\s]+))\s*$/i,label:"{messages.openInApp}",appName:"App Studio Player"},{pattern:/^\s*(arcgis-collector:\/\/([^\s]+))\s*$/i,label:"{messages.openInApp}",appName:"Collector"},{pattern:/^\s*(arcgis-explorer:\/\/([^\s]+))\s*$/i,label:"{messages.openInApp}",appName:"Explorer"},{pattern:/^\s*(arcgis-navigator:\/\/([^\s]+))\s*$/i,label:"{messages.openInApp}",appName:"Navigator"},{pattern:/^\s*(arcgis-survey123:\/\/([^\s]+))\s*$/i,label:"{messages.openInApp}",appName:"Survey123"},{pattern:/^\s*(arcgis-trek2there:\/\/([^\s]+))\s*$/i,label:"{messages.openInApp}",appName:"Trek2There"},{pattern:/^\s*(arcgis-workforce:\/\/([^\s]+))\s*$/i,label:"{messages.openInApp}",appName:"Workforce"},{pattern:/^\s*(iform:\/\/([^\s]+))\s*$/i,label:"{messages.openInApp}",appName:"iForm"},{pattern:/^\s*(flow:\/\/([^\s]+))\s*$/i,label:"{messages.openInApp}",appName:"FlowFinity"},{pattern:/^\s*(lfmobile:\/\/([^\s]+))\s*$/i,label:"{messages.openInApp}",appName:"Laserfische"},{pattern:/^\s*(mspbi:\/\/([^\s]+))\s*$/i,label:"{messages.openInApp}",appName:"Microsoft Power Bi"}];function a(a,p){if("string"!=typeof p||!p)return p;const r=function(e){let a=null;return s.some((s=>(s.pattern.test(e)&&(a=s),!!a))),a}(p);if(!r)return p;const t=p.match(r.pattern),n=t&&t[2],l=e(e(r.label,{messages:a,hierPart:n}),{appName:r.appName}),i=r.target?` target="${r.target}"`:"",o="_blank"===r.target?' rel="noreferrer"':"";return p.replace(r.pattern,`<a${i} href="$1"${o}>${l}</a>`)}export{a};
