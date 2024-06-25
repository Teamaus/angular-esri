// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports","../PixelBlock"],function(c,E){function F(a){const b=Math.sqrt(a.length),l=a.slice(0,b),g=[1];for(let h=1;h<b;h++){let e=null;for(let d=0;d<b;d++){const k=a[d+h*b],m=a[d];if(null==e)if(0===m){if(k)return{separable:!1,row:null,col:null}}else e=k/m;else if(k/m!==e)return{separable:!1,row:null,col:null}}if(null==e)return{separable:!1,row:null,col:null};g.push(e)}return{separable:!0,row:l,col:g}}function G(a,b,l,g,h,e,d){const k=new Float32Array(b*l),m=e.length,v=d?0:g,u=d?g:0;d=d?1:
b;for(let r=v;r<l-v;r++){const q=r*b;for(let n=u;n<b-u;n++){if(h&&!h[q+n])continue;let t=0;for(let p=0;p<m;p++)t+=a[q+n+(p-g)*d]*e[p];k[q+n]=t}}return k}function M(a,b,l=!0){const {pixels:g,width:h,height:e,pixelType:d,mask:k}=a;a=g.length;const m=[],{kernel:v,rows:u,cols:r}=b;for(b=0;b<a;b++){var q=g[b],n=h,t=e,p=u,z=r,H=k,N=v;const I=new Float32Array(n*t),A=Math.floor(p/2),B=Math.floor(z/2);for(let C=A;C<t-A;C++){const D=C*n;for(let w=B;w<n-B;w++){if(H&&!H[D+w])continue;let J=0;for(let x=0;x<p;x++)for(let y=
0;y<z;y++)J+=q[D+w+(x-A)*n+y-B]*N[x*z+y];I[D+w]=J}}q=I;l&&K(q,h,e,u,r);m.push(q)}return new E({width:h,height:e,pixelType:d,pixels:m,mask:k})}function K(a,b,l,g,h){g=Math.floor(g/2);for(var e=0;e<g;e++)for(var d=0;d<b;d++)a[e*b+d]=a[(h-1-e)*b+d],a[(l-1-e)*b+d]=a[(l-h+e)*b+d];g=Math.floor(h/2);for(e=0;e<l;e++){d=e*b;for(let k=0;k<g;k++)a[d+k]=a[d+h-1-k],a[d+b-k-1]=a[d+b+k-h]}}function L(a,b,l,g=!0){const {pixels:h,width:e,height:d,pixelType:k,mask:m}=a;a=h.length;const v=[],u=b.length,r=l.length,q=
Math.floor(u/2),n=Math.floor(r/2);for(let t=0;t<a;t++){let p=G(h[t],e,d,q,m,b,!0);p=G(p,e,d,n,m,l,!1);g&&K(p,e,d,u,r);v.push(p)}return new E({width:e,height:d,pixelType:k,pixels:v,mask:m})}c.ConvolutionKernel=void 0;(function(a){a[a.UserDefined=-1]="UserDefined";a[a.LineDetectionHorizontal=0]="LineDetectionHorizontal";a[a.LineDetectionVertical=1]="LineDetectionVertical";a[a.LineDetectionLeftDiagonal=2]="LineDetectionLeftDiagonal";a[a.LineDetectionRightDiagonal=3]="LineDetectionRightDiagonal";a[a.GradientNorth=
4]="GradientNorth";a[a.GradientWest=5]="GradientWest";a[a.GradientEast=6]="GradientEast";a[a.GradientSouth=7]="GradientSouth";a[a.GradientNorthEast=8]="GradientNorthEast";a[a.GradientNorthWest=9]="GradientNorthWest";a[a.SmoothArithmeticMean=10]="SmoothArithmeticMean";a[a.Smoothing3x3=11]="Smoothing3x3";a[a.Smoothing5x5=12]="Smoothing5x5";a[a.Sharpening3x3=13]="Sharpening3x3";a[a.Sharpening5x5=14]="Sharpening5x5";a[a.Laplacian3x3=15]="Laplacian3x3";a[a.Laplacian5x5=16]="Laplacian5x5";a[a.SobelHorizontal=
17]="SobelHorizontal";a[a.SobelVertical=18]="SobelVertical";a[a.Sharpen=19]="Sharpen";a[a.Sharpen2=20]="Sharpen2";a[a.PointSpread=21]="PointSpread";a[a.None=255]="None"})(c.ConvolutionKernel||(c.ConvolutionKernel={}));const f=new Map;f.set(c.ConvolutionKernel.None,[0,0,0,0,1,0,0,0,0]);f.set(c.ConvolutionKernel.LineDetectionHorizontal,[-1,-1,-1,2,2,2,-1,-1,-1]);f.set(c.ConvolutionKernel.LineDetectionVertical,[-1,2,-1,-1,2,-1,-1,2,-1]);f.set(c.ConvolutionKernel.LineDetectionLeftDiagonal,[2,-1,-1,-1,
2,-1,-1,-1,2]);f.set(c.ConvolutionKernel.LineDetectionRightDiagonal,[-1,-1,2,-1,2,-1,2,-1,-1]);f.set(c.ConvolutionKernel.GradientNorth,[-1,-2,-1,0,0,0,1,2,1]);f.set(c.ConvolutionKernel.GradientWest,[-1,0,1,-2,0,2,-1,0,1]);f.set(c.ConvolutionKernel.GradientEast,[1,0,-1,2,0,-2,1,0,-1]);f.set(c.ConvolutionKernel.GradientSouth,[1,2,1,0,0,0,-1,-2,-1]);f.set(c.ConvolutionKernel.GradientNorthEast,[0,-1,-2,1,0,-1,2,1,0]);f.set(c.ConvolutionKernel.GradientNorthWest,[-2,-1,0,-1,0,1,0,1,2]);f.set(c.ConvolutionKernel.SmoothArithmeticMean,
[.111111111111,.111111111111,.111111111111,.111111111111,.111111111111,.111111111111,.111111111111,.111111111111,.111111111111]);f.set(c.ConvolutionKernel.Smoothing3x3,[.0625,.125,.0625,.125,.25,.125,.0625,.125,.0625]);f.set(c.ConvolutionKernel.Smoothing5x5,[1,1,1,1,1,1,4,4,4,1,1,4,12,4,1,1,4,4,4,1,1,1,1,1,1]);f.set(c.ConvolutionKernel.Sharpening3x3,[-1,-1,-1,-1,9,-1,-1,-1,-1]);f.set(c.ConvolutionKernel.Sharpening5x5,[-1,-3,-4,-3,-1,-3,0,6,0,-3,-4,6,21,6,-4,-3,0,6,0,-3,-1,-3,-4,-3,-1]);f.set(c.ConvolutionKernel.Laplacian3x3,
[0,-1,0,-1,4,-1,0,-1,0]);f.set(c.ConvolutionKernel.Laplacian5x5,[0,0,-1,0,0,0,-1,-2,-1,0,-1,-2,17,-2,-1,0,-1,-2,-1,0,0,0,-1,0,0]);f.set(c.ConvolutionKernel.SobelHorizontal,[-1,-2,-1,0,0,0,1,2,1]);f.set(c.ConvolutionKernel.SobelVertical,[-1,0,1,-2,0,2,-1,0,1]);f.set(c.ConvolutionKernel.Sharpen,[0,-.25,0,-.25,2,-.25,0,-.25,0]);f.set(c.ConvolutionKernel.Sharpen2,[-.25,-.25,-.25,-.25,3,-.25,-.25,-.25,-.25]);f.set(c.ConvolutionKernel.PointSpread,[-.627,.352,-.627,.352,2.923,.352,-.627,.352,-.627]);c.convolute=
function(a,b){const l=F(b.kernel),g=!1!==b.mirrorEdges;a=l.separable?L(a,l.row,l.col,g):M(a,b,g);({outputPixelType:b}=b);b&&a.clamp(b);return a};c.convoluteSeparable=L;c.convolutionKernels=f;c.separateKernels=F;Object.defineProperties(c,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});