// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports"],function(P){var K={exports:{}};(function(Q){(function(v){v=v();void 0!==v&&(Q.exports=v)})(function(){function v(a,c,b){b=b||2;var d=c&&c.length,e=d?c[0]*b:a.length,g=L(a,0,e,b,!0),k=[];if(!g||g.next===g.prev)return k;var l;if(d){var f=g;var n=b;g=[];var q;d=0;for(q=c.length;d<q;d++){var p=c[d]*n;var u=d<q-1?c[d+1]*n:a.length;p=L(a,p,u,n,!1);p===p.next&&(p.steiner=!0);u=g;var t=u.push,h=p,m=p;do{if(h.x<m.x||h.x===m.x&&h.y<m.y)m=h;h=h.next}while(h!==p);t.call(u,m)}g.sort(R);for(d=
0;d<g.length;d++)n=g[d],c=f,(f=S(n,c))?(q=M(f,n),n=w(f,f.next),q=G(q),w(q,q.next),n=G(n),f=G(c===f?n:c)):f=c,f=w(f,f.next);g=f}if(a.length>80*b){var B=l=a[0];var C=d=a[1];for(n=b;n<e;n+=b)c=a[n],f=a[n+1],c<B&&(B=c),f<C&&(C=f),c>l&&(l=c),f>d&&(d=f);l=Math.max(l-B,d-C);l=0!==l?1/l:0}y(g,k,b,B,C,l);return k}function L(a,c,b,d,e){if(e===0<H(a,c,b,d))for(e=c;e<b;e+=d)var g=N(e,a[e],a[e+1],g);else for(e=b-d;e>=c;e-=d)g=N(e,a[e],a[e+1],g);g&&D(g,g.next)&&(a=g.next,z(g),g=a);return g}function w(a,c){if(!a)return a;
c||(c=a);do{var b=!1;if(a.steiner||!D(a,a.next)&&0!==r(a.prev,a,a.next))a=a.next;else{c=a.prev;z(a);a=c;if(a===a.next)break;b=!0}}while(b||a!==c);return c}function y(a,c,b,d,e,g,k){if(a){if(!k&&g){var l=a,f=l;do null===f.z&&(f.z=I(f.x,f.y,d,e,g)),f.prevZ=f.prev,f=f.nextZ=f.next;while(f!==l);f.prevZ.nextZ=null;f.prevZ=null;l=f;var n,q,p,u,t=1;do{f=l;var h=l=null;for(q=0;f;){q++;var m=f;for(n=p=0;n<t&&(p++,m=m.nextZ,m);n++);for(u=t;0<p||0<u&&m;)0!==p&&(0===u||!m||f.z<=m.z)?(n=f,f=f.nextZ,p--):(n=m,
m=m.nextZ,u--),h?h.nextZ=n:l=n,n.prevZ=h,h=n;f=m}h.nextZ=null;t*=2}while(1<q)}for(l=a;a.prev!==a.next;){f=a.prev;m=a.next;if(g)h=T(a,d,e,g);else a:if(h=a,q=h.prev,p=h,t=h.next,0<=r(q,p,t))h=!1;else{for(n=h.next.next;n!==h.prev;){if(x(q.x,q.y,p.x,p.y,t.x,t.y,n.x,n.y)&&0<=r(n.prev,n,n.next)){h=!1;break a}n=n.next}h=!0}if(h)c.push(f.i/b),c.push(a.i/b),c.push(m.i/b),z(a),l=a=m.next;else if(a=m,a===l){if(!k)y(w(a),c,b,d,e,g,1);else if(1===k){a=w(a);k=c;l=b;f=a;do m=f.prev,h=f.next.next,!D(m,h)&&O(m,f,
f.next,h)&&A(m,h)&&A(h,m)&&(k.push(m.i/l),k.push(f.i/l),k.push(h.i/l),z(f),z(f.next),f=a=h),f=f.next;while(f!==a);a=w(f);y(a,c,b,d,e,g,2)}else if(2===k)a:{k=a;do{for(l=k.next.next;l!==k.prev;){if(f=k.i!==l.i){h=h=h=h=void 0;f=k;m=l;if(h=f.next.i!==m.i&&f.prev.i!==m.i){b:{h=f;do{if(h.i!==f.i&&h.next.i!==f.i&&h.i!==m.i&&h.next.i!==m.i&&O(h,h.next,f,m)){h=!0;break b}h=h.next}while(h!==f);h=!1}h=!h}if(h){if(h=A(f,m)&&A(m,f)){h=f;q=!1;p=(f.x+m.x)/2;t=(f.y+m.y)/2;do h.y>t!==h.next.y>t&&h.next.y!==h.y&&
p<(h.next.x-h.x)*(t-h.y)/(h.next.y-h.y)+h.x&&(q=!q),h=h.next;while(h!==f);h=q}h=h&&(r(f.prev,f,m.prev)||r(f,m.prev,m))||D(f,m)&&0<r(f.prev,f,f.next)&&0<r(m.prev,m,m.next)}f=h}if(f){a=M(k,l);k=w(k,k.next);a=w(a,a.next);y(k,c,b,d,e,g);y(a,c,b,d,e,g);break a}l=l.next}k=k.next}while(k!==a)}break}}}}function T(a,c,b,d){var e=a.prev,g=a.next;if(0<=r(e,a,g))return!1;var k=e.x>a.x?e.x>g.x?e.x:g.x:a.x>g.x?a.x:g.x,l=e.y>a.y?e.y>g.y?e.y:g.y:a.y>g.y?a.y:g.y,f=I(e.x<a.x?e.x<g.x?e.x:g.x:a.x<g.x?a.x:g.x,e.y<a.y?
e.y<g.y?e.y:g.y:a.y<g.y?a.y:g.y,c,b,d);c=I(k,l,c,b,d);b=a.prevZ;for(d=a.nextZ;b&&b.z>=f&&d&&d.z<=c;){if(b!==a.prev&&b!==a.next&&x(e.x,e.y,a.x,a.y,g.x,g.y,b.x,b.y)&&0<=r(b.prev,b,b.next))return!1;b=b.prevZ;if(d!==a.prev&&d!==a.next&&x(e.x,e.y,a.x,a.y,g.x,g.y,d.x,d.y)&&0<=r(d.prev,d,d.next))return!1;d=d.nextZ}for(;b&&b.z>=f;){if(b!==a.prev&&b!==a.next&&x(e.x,e.y,a.x,a.y,g.x,g.y,b.x,b.y)&&0<=r(b.prev,b,b.next))return!1;b=b.prevZ}for(;d&&d.z<=c;){if(d!==a.prev&&d!==a.next&&x(e.x,e.y,a.x,a.y,g.x,g.y,d.x,
d.y)&&0<=r(d.prev,d,d.next))return!1;d=d.nextZ}return!0}function R(a,c){return a.x-c.x}function G(a){if(a.next.prev===a)return a;let c=a;do{const b=c.next;if(b.prev===c||b===c||b===a)break;c=b}while(1);return c}function S(a,c){var b=c,d=a.x,e=a.y,g=-Infinity;do{if(e<=b.y&&e>=b.next.y&&b.next.y!==b.y){var k=b.x+(e-b.y)*(b.next.x-b.x)/(b.next.y-b.y);if(k<=d&&k>g){g=k;if(k===d){if(e===b.y)return b;if(e===b.next.y)return b.next}var l=b.x<b.next.x?b:b.next}}b=b.next}while(b!==c);if(!l)return null;if(d===
g)return l;c=l;k=l.x;var f=l.y,n=Infinity;b=l;do{if(d>=b.x&&b.x>=k&&d!==b.x&&x(e<f?d:g,e,k,f,e<f?g:d,e,b.x,b.y)){var q=Math.abs(e-b.y)/(d-b.x);var p;if((p=A(b,a))&&!(p=q<n)&&(p=q===n)&&!(p=b.x>l.x)&&(p=b.x===l.x)){p=l;var u=b;p=0>r(p.prev,p,u.prev)&&0>r(u.next,p,p.next)}p&&(l=b,n=q)}b=b.next}while(b!==c);return l}function I(a,c,b,d,e){a=32767*(a-b)*e;c=32767*(c-d)*e;a=(a|a<<8)&16711935;a=(a|a<<4)&252645135;a=(a|a<<2)&858993459;c=(c|c<<8)&16711935;c=(c|c<<4)&252645135;c=(c|c<<2)&858993459;return(a|
a<<1)&1431655765|((c|c<<1)&1431655765)<<1}function x(a,c,b,d,e,g,k,l){return 0<=(e-k)*(c-l)-(a-k)*(g-l)&&0<=(a-k)*(d-l)-(b-k)*(c-l)&&0<=(b-k)*(g-l)-(e-k)*(d-l)}function r(a,c,b){return(c.y-a.y)*(b.x-c.x)-(c.x-a.x)*(b.y-c.y)}function D(a,c){return a.x===c.x&&a.y===c.y}function O(a,c,b,d){var e=E(r(a,c,b)),g=E(r(a,c,d)),k=E(r(b,d,a)),l=E(r(b,d,c));return e!==g&&k!==l||0===e&&F(a,b,c)||0===g&&F(a,d,c)||0===k&&F(b,a,d)||0===l&&F(b,c,d)?!0:!1}function F(a,c,b){return c.x<=Math.max(a.x,b.x)&&c.x>=Math.min(a.x,
b.x)&&c.y<=Math.max(a.y,b.y)&&c.y>=Math.min(a.y,b.y)}function E(a){return 0<a?1:0>a?-1:0}function A(a,c){return 0>r(a.prev,a,a.next)?0<=r(a,c,a.next)&&0<=r(a,a.prev,c):0>r(a,c,a.prev)||0>r(a,a.next,c)}function M(a,c){var b=new J(a.i,a.x,a.y),d=new J(c.i,c.x,c.y),e=a.next,g=c.prev;a.next=c;c.prev=a;b.next=e;e.prev=b;d.next=b;b.prev=d;g.next=d;d.prev=g;return d}function N(a,c,b,d){a=new J(a,c,b);d?(a.next=d.next,a.prev=d,d.next.prev=a,d.next=a):(a.prev=a,a.next=a);return a}function z(a){a.next.prev=
a.prev;a.prev.next=a.next;a.prevZ&&(a.prevZ.nextZ=a.nextZ);a.nextZ&&(a.nextZ.prevZ=a.prevZ)}function J(a,c,b){this.i=a;this.x=c;this.y=b;this.nextZ=this.prevZ=this.z=this.next=this.prev=null;this.steiner=!1}function H(a,c,b,d){for(var e=0,g=b-d;c<b;c+=d)e+=(a[g]-a[c])*(a[c+1]+a[g+1]),g=c;return e}v.deviation=function(a,c,b,d){var e=c&&c.length,g=Math.abs(H(a,0,e?c[0]*b:a.length,b));if(e){e=0;for(var k=c.length;e<k;e++)g-=Math.abs(H(a,c[e]*b,e<k-1?c[e+1]*b:a.length,b))}for(e=c=0;e<d.length;e+=3){k=
d[e]*b;var l=d[e+1]*b,f=d[e+2]*b;c+=Math.abs((a[k]-a[f])*(a[l+1]-a[k+1])-(a[k]-a[l])*(a[f+1]-a[k+1]))}return 0===g&&0===c?0:Math.abs((c-g)/g)};v.flatten=function(a){for(var c=a[0][0].length,b={vertices:[],holes:[],dimensions:c},d=0,e=0;e<a.length;e++){for(var g=0;g<a[e].length;g++)for(var k=0;k<c;k++)b.vertices.push(a[e][g][k]);0<e&&(d+=a[e-1].length,b.holes.push(d))}return b};return v})})(K);P.earcut=K.exports});