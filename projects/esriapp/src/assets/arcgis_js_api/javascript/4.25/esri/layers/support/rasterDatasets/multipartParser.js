// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports"],function(n){function q(b,c,a=0){var e="--"+c.boundary,d=[];for(var g=0;g<e.length;g++)d.push(e.charCodeAt(g));e=[];g="\n--"+c.boundary+"--";for(var f=0;f<g.length;f++)e.push(g.charCodeAt(f));f=[10];const m=[13,10];g=[];const k=d.length;b=new Uint8Array(b,a);const r=Math.min(5E4,b.length-k);let h=a=0;for(let l=0;l<r;l++){for(h=0;h<k&&b[l+h]===d[h];h++);h===k&&(a&&g.push(p(b.subarray(a,l),c)),l+=k-1,b[l+1]===f[0]?l+=1:b[l+1]===m[0]&&b[l+2]===m[1]&&(l+=2),a=l+1)}d=e.length;for(f=b.length-
d-10;f<b.length-d;f++){for(h=0;h<d&&b[f+h]===e[h];h++);if(h===d){g.push(p(b.subarray(a,f),c));break}}return g}function p(b,c){var a=String.fromCharCode.apply(null,b.subarray(0,Math.min(300,b.length))).split("\n"),e=Math.min(a.length,7);const d={contentDisposition:"inline"};let g=0;for(var f=0;f<e;f++)if(4>a[f].length)g=g+a[f].length+1;else if("content"===a[f].slice(0,7).toLowerCase()){g=g+a[f].length+1;if(!a[f].includes(":"))continue;const m=a[f].substring(0,a[f].indexOf(":")).trim(),k=a[f].substring(a[f].indexOf(":")+
1).trim();switch(m.toLowerCase()){case "content-type":d.contentType=k;break;case "content-description":d.contentDescription=k;break;case "content-transfer-encoding":d.contentTransferEncoding=k;break;case "content-id":d.contentID=k;break;case "content-disposition":d.contentDisposition=k;break;case "content-location":d.contentLocation=k}}else if(d.contentDisposition.toLowerCase().includes("inline")&&4<=a[f].length&&-1<d.contentType?.toLowerCase().indexOf("image")){a=!0;c=b.subarray(g,b.length);if(0<
d.contentType.toLowerCase().indexOf("tif")){if("base64"===d.contentTransferEncoding){a="";for(e=0;e<c.length;e+=65535)f=c.subarray(e,e+65535>c.length-1?c.length-1:e+65535),a+=String.fromCharCode.apply(null,f);a=atob(a);c=new Uint8Array(a.length);for(e=0;e<c.length;e++)c[e]=a.charCodeAt(e)}a=73===c[0]&&73===c[1]||77===c[0]&&77===c[1]}a&&(a=c.buffer,"base64"!==d.contentTransferEncoding&&(a=new ArrayBuffer(b.length-g),c=new Uint8Array(a),c.set(b.subarray(g,b.length))),d.contentData=a);break}else if((""===
c.start||d.contentID===c.start)&&d.contentType){if(d.contentType.includes("text")||d.contentType.includes("xml")){d.contentData=String.fromCharCode.apply(null,b.subarray(g,b.length));break}d.contentData=b.subarray(g,b.length)}return d}n.getBoundary=function(b){b=new Uint8Array(b,0,2E3);var c=String.fromCharCode.apply(null,b);b=c.indexOf('boundary\x3d"');c=-1!==b?c.slice(b+10,c.indexOf('"',b+10)):"";return{boundary:c,offset:-1!==b?b+12+c.length:0}};n.parse=function(b){{const e=b.getHeader?.("Content-Type")?.split(";");
if((e?.[0].trim()??"").startsWith("multipart/")){var c={boundary:"",start:"",type:""};for(let d=1;d<e.length;d++){var a=e[d].indexOf("\x3d");if(0<a){const g=e[d].slice(0,a).trim();a=e[d].slice(a+1).trim();c[g]=a.startsWith('"')?a.slice(1,a.length-1):a}}}else c=null}return c?{isMultipart:!0,data:c.boundary?q(b.data,c,0):null}:{isMultipart:!1,data:null}};Object.defineProperties(n,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});