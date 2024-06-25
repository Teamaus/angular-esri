// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ./maybe ./nextTick ./PerformanceSampler ./PooledArray ./promiseUtils ./time".split(" "),function(c,I,w,x,y,m,d){function z(a){a=new J(a);r.push(a);h.willDispatch||(h.willDispatch=!0,w.nextTick(A));return a}function B(a){a=new K(a);f.push(a);null==n&&(t=performance.now(),n=requestAnimationFrame(C));return new D(a)}function C(){const a=performance.now();n=null;n=0<f.length?requestAnimationFrame(C):null;h.executeFrameTasks(a)}function E(){f.forAll(a=>{a.removed&&p.push(a)});f.removeUnorderedMany(p.data,
p.length);p.clear()}function A(){for(;r.length;){const a=I.assumeNonNull(r.shift());a.isActive&&a.callback()}h.willDispatch=!1}let K=function(a){this.phases=a;this.paused=!1;this.ticks=-1;this.removed=!1},J=function(){function a(b){this.callback=b;this.isActive=!0}a.prototype.remove=function(){this.isActive=!1};return a}(),t=0,u=0;const k={time:d.Milliseconds(0),deltaTime:d.Milliseconds(0),elapsedFrameTime:d.Milliseconds(0),frameDuration:d.Milliseconds(0)},v="prepare preRender render postRender update finish".split(" "),
r=[],f=new y;let D=function(){function a(e){this._task=e}var b=a.prototype;b.remove=function(){this._task.removed=!0};b.pause=function(){this._task.paused=!0};b.resume=function(){this._task.paused=!1};return a}();const h={frameTasks:f,willDispatch:!1,clearFrameTasks:function(a=!1){f.forAll(b=>{b.removed=!0});a&&E()},dispatch:A,executeFrameTasks:function(a){const b=d.Milliseconds(a-t);t=a;const e=0<u?u:1E3/60,q=Math.max(0,b-e);for(let l=0;l<v.length;l++){const L=performance.now(),F=v[l];f.forAll(g=>
{g.paused||g.removed||(0===l&&g.ticks++,g.phases[F]&&(k.time=a,k.deltaTime=0===g.ticks?d.Milliseconds(0):b,k.elapsedFrameTime=d.Milliseconds(performance.now()-a),k.frameDuration=d.Milliseconds(e-q),g.phases[F]?.call(g,k)))});G[l].record(performance.now()-L)}E();H.record(performance.now()-a)}};let n=null;const p=new y,G=v.map(a=>new x(a)),H=new x("total");c.FrameTaskHandle=D;c.addFrameTask=B;c.debug=h;c.performanceInfo=G;c.performanceTotal=H;c.schedule=z;c.setFrameDuration=function(a){u=Math.max(0,
a)};c.waitAnimationFrame=function(){const a=m.createResolver(),b=B({postRender:()=>{b.remove();z(a)}});return a.promise};c.waitTicks=function(a=1,b){const e=m.createResolver(),q=()=>{m.isAborted(b)?e.reject(m.createAbortError()):0===a?e():(--a,w.nextTick(()=>q()))};q();return e.promise};Object.defineProperties(c,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});