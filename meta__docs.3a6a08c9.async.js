"use strict";(self.webpackChunkcreate_puzzle=self.webpackChunkcreate_puzzle||[]).push([[904],{6055:function(O,l,n){n.r(l),n.d(l,{demos:function(){return r}});var g=n(75271),u=n(43258),r={"docs-generator-demo-generator":{component:g.memo(g.lazy(function(){return Promise.all([n.e(557),n.e(433)]).then(n.bind(n,82394))})),asset:null,context:void 0,renderOpts:void 0}}},22453:function(O,l,n){var g;n.r(l),n.d(l,{demos:function(){return I}});var u=n(90228),r=n.n(u),R=n(87999),s=n.n(R),x=n(75271),L=n(48421),z=n(91874),t=n(23482),a=n(67991),I={"docs-demo-dev-puzzle":{component:x.memo(x.lazy(function(){return Promise.all([n.e(557),n.e(433)]).then(n.bind(n,61729))})),asset:{type:"BLOCK",id:"docs-demo-dev-puzzle",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(47735).Z},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:g||(g=n.t(x,2))},renderOpts:{compile:function(){var f=s()(r()().mark(function h(){var p,c=arguments;return r()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,n.e(105).then(n.bind(n,59105));case 2:return i.abrupt("return",(p=i.sent).default.apply(p,c));case 3:case"end":return i.stop()}},h)}));function d(){return f.apply(this,arguments)}return d}()}},"docs-demo-dev-puzzle-random":{component:x.memo(x.lazy(function(){return Promise.all([n.e(557),n.e(433)]).then(n.bind(n,41976))})),asset:{type:"BLOCK",id:"docs-demo-dev-puzzle-random",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(38567).Z},react:{type:"NPM",value:"18.3.1"},"../util.ts":{type:"FILE",value:n(18415).Z},ut2:{type:"NPM",value:"1.19.0"}},entry:"index.tsx"},context:{"../util.ts":z,react:g||(g=n.t(x,2)),"/home/runner/work/create-puzzle/create-puzzle/src/util.ts":z,ut2:t},renderOpts:{compile:function(){var f=s()(r()().mark(function h(){var p,c=arguments;return r()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,n.e(105).then(n.bind(n,59105));case 2:return i.abrupt("return",(p=i.sent).default.apply(p,c));case 3:case"end":return i.stop()}},h)}));function d(){return f.apply(this,arguments)}return d}()}},"docs-demo-dev-image":{component:x.memo(x.lazy(function(){return Promise.all([n.e(557),n.e(433)]).then(n.bind(n,10114))})),asset:{type:"BLOCK",id:"docs-demo-dev-image",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(74467).Z},react:{type:"NPM",value:"18.3.1"},"../util.ts":{type:"FILE",value:n(18415).Z},ut2:{type:"NPM",value:"1.19.0"}},entry:"index.tsx"},context:{"../util.ts":z,react:g||(g=n.t(x,2)),"/home/runner/work/create-puzzle/create-puzzle/src/util.ts":z,ut2:t},renderOpts:{compile:function(){var f=s()(r()().mark(function h(){var p,c=arguments;return r()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,n.e(105).then(n.bind(n,59105));case 2:return i.abrupt("return",(p=i.sent).default.apply(p,c));case 3:case"end":return i.stop()}},h)}));function d(){return f.apply(this,arguments)}return d}()}},"docs-demo-basic":{component:x.memo(x.lazy(function(){return Promise.all([n.e(557),n.e(433)]).then(n.bind(n,87074))})),asset:{type:"BLOCK",id:"docs-demo-basic",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(14535).Z},react:{type:"NPM",value:"18.3.1"},"create-puzzle":{type:"NPM",value:"3.0.3"}},entry:"index.tsx"},context:{react:g||(g=n.t(x,2)),"create-puzzle":a},renderOpts:{compile:function(){var f=s()(r()().mark(function h(){var p,c=arguments;return r()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,n.e(105).then(n.bind(n,59105));case 2:return i.abrupt("return",(p=i.sent).default.apply(p,c));case 3:case"end":return i.stop()}},h)}));function d(){return f.apply(this,arguments)}return d}()}}}},67991:function(O,l,n){n.r(l),n.d(l,{Point:function(){return s.Point},clearCache:function(){return t},createPuzzle:function(){return p},drawPuzzle:function(){return s.drawPuzzle},getRandomPoints:function(){return s.getRandomPoints}});var g=n(48305),u=n.n(g),r=n(12969),R=n(23042),s=n(91874),x=n(95810),L=n(81855),z=new r.Z({max:5,maxStrategy:"replaced"});z.cache.on("del",function(c,o){try{o.image.src&&URL.revokeObjectURL(o.image.src)}catch(i){}});function t(c){c?z.cache.del(c):z.cache.clear()}var a=new WeakMap,I=function(o){if(!(0,x.Z)(o))return String(o);if(!a.get(o)){var i="_"+Date.now();a.set(o,i)}return a.get(o)},f={jpeg:"image/jpeg",png:"image/png"},d=[];function h(c){c.forEach(function(o){URL.revokeObjectURL(o)})}function p(c){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=o.borderWidth,B=i===void 0?2:i,W=o.borderColor,v=W===void 0?"rgba(255,255,255,0.7)":W,K=o.fillColor,b=K===void 0?"rgba(255,255,255,0.7)":K,y=o.points,N=o.width,m=N===void 0?60:N,_=o.height,e=_===void 0?60:_,E=o.x,C=o.y,Q=o.margin,J=Q===void 0?2:Q,k=o.equalHeight,V=k===void 0?!0:k,q=o.imageWidth,nn=o.imageHeight,S=o.bgWidth,$=o.bgHeight,en=o.bgOffset,F=en===void 0?[0,0]:en,tn=o.bgImageType,hn=tn===void 0?f.jpeg:tn,rn=o.quality,on=rn===void 0?.8:rn,an=o.format,fn=an===void 0?"dataURL":an,cn=o.cacheImage,gn=cn===void 0?!0:cn,ln=o.autoRevokePreviousBlobUrl,xn=ln===void 0?!0:ln,vn=o.ajaxOptions;return new Promise(function(yn,un){var j=document.createElement("canvas"),U=document.createElement("canvas"),w=j.getContext("2d"),M=U.getContext("2d"),In=gn?I(c):void 0;z.run(function(){return(0,R.Z)(c,vn)},In).then(function(Pn){var P=Pn.image;q&&(P.width=q),nn&&(P.height=nn);var H=typeof S=="number"&&S>0?S>m?S:m:P.width,A=typeof $=="number"&&$>0?$>e?$:e:P.height;j.width=H,j.height=A;var G=H-m,X=A-e,D=typeof E=="undefined"?(0,L.Z)(m,G):E||0,T=typeof C=="undefined"?(0,L.Z)(0,X):C||0;D<0?D=0:D>G&&(D=G),T<0?T=0:T>X&&(T=X);var sn=typeof y=="number"||!y?(0,s.getRandomPoints)(y):y,Z=typeof F=="function"?F(P.width,P.height):F;w.strokeStyle=v,w.lineWidth=B,w.fillStyle=b,(0,s.drawPuzzle)(w,{x:D,y:T,w:m,h:e,points:sn,margin:J}),w.fillStyle=b,w.fill(),w.globalCompositeOperation="destination-over",w.drawImage(P,Z[0],Z[1],P.width,P.height),U.width=H,U.height=A,M.strokeStyle=v,M.lineWidth=B,(0,s.drawPuzzle)(M,{x:D,y:T,w:m,h:e,points:sn,margin:J}),M.globalCompositeOperation="destination-over",M.clip(),M.drawImage(P,Z[0],Z[1],P.width,P.height);var zn=M.getImageData(D,T,m,e);M.clearRect(0,0,H,A),U.width=m,U.height=V?A:e,M.putImageData(zn,0,V?T:0);var Y=fn==="blob",bn=(0,s.canvasToImage)(U,Y,f.png,on),On=(0,s.canvasToImage)(j,Y,hn,on);Promise.all([bn,On]).then(function(Rn){var dn=u()(Rn,2),mn=dn[0],pn=dn[1];xn&&(d.length&&(h(d),d.length=0),Y&&d.push(pn,mn)),yn({puzzleUrl:mn,bgUrl:pn,x:D,y:V?0:T})}).catch(un)}).catch(un)})}l.default=p},91874:function(O,l,n){n.r(l),n.d(l,{Point:function(){return r},canvasToImage:function(){return z},drawPuzzle:function(){return L},getRandomPoints:function(){return x},pointArray:function(){return R}});var g=n(81855),u=Math.PI,r=function(t){return t[t.None=0]="None",t[t.Outer=1]="Outer",t[t.Inner=2]="Inner",t}({}),R=[r.None,r.Outer,r.Inner];function s(t){var a=t.length,I=(0,g.Z)(0,a-1);return t[I]}function x(t){var a={top:s(R),right:s(R),bottom:s(R),left:s(R)},I=Object.keys(a),f=["top","bottom"],d=["left","right"];if(a.top===r.Outer&&a.bottom===r.Outer?a[s(f)]=r.Inner:a.top!==r.Outer&&a.bottom!==r.Outer&&(a[s(f)]=r.Outer),a.left===r.Outer&&a.right===r.Outer?a[s(d)]=r.Inner:a.left!==r.Outer&&a.right!==r.Outer&&(a[s(d)]=r.Outer),t){var h=[],p=[];I.forEach(function(c){a[c]===r.Inner?h.push(c):a[c]===r.None&&p.push(c)}),t===2?h.forEach(function(c){return a[c]=r.None}):t===3?h.length===0?a[s(p)]=r.Inner:h.length===2&&(a[s(h)]=r.None):t==4&&p.forEach(function(c){return a[c]=r.Inner})}return a}function L(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},I=a.x,f=I===void 0?0:I,d=a.y,h=d===void 0?0:d,p=a.w,c=p===void 0?60:p,o=a.h,i=o===void 0?60:o,B=a.needClosePath,W=B===void 0?!0:B,v=a.points,K=a.margin,b=K===void 0?0:K;b=b<=0?0:b,(typeof v=="number"||!v)&&(v=x(v));var y=(Math.min(c,i)-b*2)*.15,N=Math.hypot(y,y),m=N/2,_=y+m,e={x:f+b,y:h+b,w:c-_-b*2,h:i-_-b*2},E=e.w/2,C=e.h/2;v.left===r.Outer&&(e.x+=_),v.top===r.Outer&&(e.y+=_),t.beginPath(),t.lineWidth=2,t.moveTo(e.x,e.y),v.top!==r.None&&(t.lineTo(e.x+E-m,e.y),v.top===r.Inner?t.arc(e.x+E,e.y+m,y,1.25*u,1.75*u,!0):t.arc(e.x+E,e.y-m,y,.75*u,.25*u)),t.lineTo(e.x+e.w,e.y),v.right!==r.None&&(t.lineTo(e.x+e.w,e.y+C-m),v.right===r.Inner?t.arc(e.x+e.w-m,e.y+C,y,1.75*u,.25*u,!0):t.arc(e.x+e.w+m,e.y+C,y,1.25*u,.75*u)),t.lineTo(e.x+e.w,e.y+e.h),v.bottom!==r.None&&(t.lineTo(e.x+E+m,e.y+e.h),v.bottom===r.Inner?t.arc(e.x+E,e.y+e.h-m,y,.25*u,.75*u,!0):t.arc(e.x+E,e.y+e.h+m,y,1.75*u,1.25*u)),t.lineTo(e.x,e.y+e.h),v.left!==r.None&&(t.lineTo(e.x,e.y+C+m),v.left===r.Inner?t.arc(e.x+m,e.y+C,y,.75*u,1.25*u,!0):t.arc(e.x-m,e.y+C,y,.25*u,1.75*u)),t.lineTo(e.x,e.y),t.stroke(),W&&t.closePath()}function z(t,a,I,f){return new Promise(function(d){a?t.toBlob(function(h){d(h?URL.createObjectURL(h):t.toDataURL(I,f))},I,f):d(t.toDataURL(I,f))})}},54780:function(O,l,n){n.r(l),n.d(l,{texts:function(){return u}});var g=n(43258);const u=[{value:" ",paraId:0,tocIndex:0},{value:" ",paraId:0,tocIndex:0},{value:"\u53EF\u4EE5\u4F7F\u7528\u8BE5\u5DE5\u5177\u751F\u6210\u56FE\u7247\u5B58\u5165\u62FC\u56FE\u56FE\u5E93\uFF0C\u5EFA\u8BAE\u56FE\u7247\u5C3A\u5BF8 ",paraId:1,tocIndex:0},{value:"320 <= \u9AD8\u5EA6 <= 480",paraId:1,tocIndex:0},{value:" ",paraId:1,tocIndex:0},{value:"160 <= \u5BBD\u5EA6 <= 240",paraId:1,tocIndex:0},{value:" \uFF0C\u524D\u7AEF\u63A8\u8350\u642D\u914D ",paraId:1,tocIndex:0},{value:"rc-slider-captcha",paraId:1,tocIndex:0},{value:" \u4F7F\u7528\u3002",paraId:1,tocIndex:0},{value:"\u70B9\u51FB\u8FD4\u56DE create-puzzle \u6587\u6863",paraId:2}]},89512:function(O,l,n){n.r(l),n.d(l,{texts:function(){return u}});var g=n(48421);const u=[{value:" ",paraId:0,tocIndex:0},{value:" ",paraId:0,tocIndex:0},{value:"\u5728\u6D4F\u89C8\u5668\u7AEF\u751F\u6210\u6ED1\u5757\u9A8C\u8BC1\u7801\u7684\u62FC\u56FE\u548C\u80CC\u666F\u56FE\u3002",paraId:1,tocIndex:0},{value:"\u53EF\u4EE5\u5728\u5BA2\u6237\u7AEF\u751F\u6210\u62FC\u56FE\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u5B83\u751F\u6210\u7684\u62FC\u56FE\u653E\u5230\u670D\u52A1\u7AEF\u56FE\u5E93\uFF0C\u63A8\u8350\u642D\u914D ",paraId:2,tocIndex:0},{value:"rc-slider-captcha",paraId:2,tocIndex:0},{value:" \u4F7F\u7528\u3002",paraId:2,tocIndex:0},{value:"\u5982\u679C\u4F60\u4F7F\u7528\u7684\u662F Node.js \u505A\u670D\u52A1\u7AEF\uFF0C\u63A8\u8350\u4F7F\u7528 ",paraId:3,tocIndex:0},{value:"node-puzzle",paraId:3,tocIndex:0},{value:"\u3002",paraId:3,tocIndex:0},{value:"\u5B89\u88C5\u4F9D\u8D56",paraId:4,tocIndex:2},{value:`npm install create-puzzle
`,paraId:5,tocIndex:2},{value:`yarn add create-puzzle
`,paraId:6,tocIndex:2},{value:`pnpm add create-puzzle
`,paraId:7,tocIndex:2},{value:"\u9879\u76EE\u4E2D\u4F7F\u7528",paraId:8,tocIndex:2},{value:`import { createPuzzle } from 'create-puzzle';

createPuzzle(imgUrl).then((res) => {
  console.log(res);
  // {
  //   bgUrl:  "data:image/jpeg;base64,/9j/4AAQSk...",
  //   puzzleUrl :  "data:image/png;base64,iVBORw0KGgo...",
  //   x: 60,
  //   y: 0
  // }
});
`,paraId:9,tocIndex:2},{value:"\u5982\u679C\u4F60\u7684\u9879\u76EE\u4F7F\u7528\u7684\u662F\u539F\u751F\u65B9\u5F0F\u5F00\u53D1\uFF0C\u53EF\u4EE5\u5728\u6D4F\u89C8\u5668\u4E2D\u4F7F\u7528 ",paraId:10,tocIndex:3},{value:"script",paraId:10,tocIndex:3},{value:" \u6807\u7B7E\u76F4\u63A5\u5F15\u5165\u6587\u4EF6\uFF0C\u5E76\u4F7F\u7528\u5168\u5C40\u53D8\u91CF ",paraId:10,tocIndex:3},{value:"createPuzzle",paraId:10,tocIndex:3},{value:" \u3002",paraId:10,tocIndex:3},{value:"npm \u5305\u7684 ",paraId:11,tocIndex:3},{value:"dist",paraId:11,tocIndex:3},{value:" \u76EE\u5F55\u4E0B\u63D0\u4F9B\u4E86 UMD \u5305 ",paraId:11,tocIndex:3},{value:"createPuzzle.js",paraId:11,tocIndex:3},{value:" \u4EE5\u53CA ",paraId:11,tocIndex:3},{value:"createPuzzle.min.js",paraId:11,tocIndex:3},{value:"\u3002\u4F60\u4E5F\u53EF\u4EE5\u901A\u8FC7 ",paraId:11,tocIndex:3},{value:"UNPKG",paraId:11,tocIndex:3},{value:" \u4E0B\u8F7D\u5230\u672C\u5730\u8FDB\u884C\u4F7F\u7528\u3002\u6216\u8005\u76F4\u63A5\u4F7F\u7528 ",paraId:11,tocIndex:3},{value:"UNPKG \u7EBF\u4E0A\u7248\u672C",paraId:11,tocIndex:3},{value:"\u6CE8\u610F\u7248\u672C",paraId:11,tocIndex:3},{value:"\u3002",paraId:11,tocIndex:3},{value:"\u70B9\u51FB\u8FDB\u5165",paraId:12},{value:`import { createPuzzle, Options, Result, Point, clearCache } from 'create-puzzle';

function createPuzzle(imgUrl: string | Blob, options?: Options): Promise<Result>;

type Options = {
  // \u62FC\u56FE
  borderWidth?: number; // \u63CF\u8FB9\u5BBD\u5EA6\u3002\u9ED8\u8BA4 2
  borderColor?: string; // \u63CF\u8FB9\u989C\u8272\u3002\u9ED8\u8BA4 rgba(255,255,255,0.7)
  fillColor?: string; // \u586B\u5145\u989C\u8272\u3002\u9ED8\u8BA4 rgba(255,255,255,0.7)
  points?:
    | 2
    | 3
    | 4
    | {
        top: Point;
        right: Point;
        bottom: Point;
        left: Point;
      }; // \u62FC\u56FE\u70B9\uFF0C\u4E0D\u4F20\u9ED8\u8BA4\u968F\u673A2/3/4
  width?: number; // \u5BBD\u5EA6\u3002\u9ED8\u8BA4 60
  height?: number; // \u9AD8\u5EA6\u3002\u9ED8\u8BA4 60
  x?: number; // x \u8F74\u504F\u79FB\u503C\uFF0C\u5982\u679C\u4E0D\u4F20\u5185\u90E8\u968F\u673A\u751F\u6210\u3002
  y?: number; // y \u8F74\u504F\u79FB\u503C\uFF0C\u5982\u679C\u4E0D\u4F20\u5185\u90E8\u968F\u673A\u751F\u6210\u3002
  margin?: number; // \u4E0A\u4E0B\u5DE6\u53F3\u7559\u767D\u3002\u9ED8\u8BA4 2

  // \u80CC\u666F\u56FE
  bgWidth?: number; // \u80CC\u666F\u56FE\u5BBD\u5EA6\u3002\u9ED8\u8BA4 \u56FE\u7247\u5BBD\u5EA6
  bgHeight?: number; // \u80CC\u666F\u56FE\u9AD8\u5EA6\u3002\u9ED8\u8BA4 \u56FE\u7247\u9AD8\u5EA6
  bgOffset?: [number, number] | ((imgWidth: number, imgHeight: number) => [number, number]); // \u80CC\u666F\u56FE\u504F\u79FB\u503C\u3002 \u9ED8\u8BA4 [0,0]

  // \u4E0A\u4F20\u7684\u56FE\u7247
  imageWidth?: number; // \u81EA\u5B9A\u4E49\u8F93\u5165\u56FE\u7247\u5BBD\u5EA6\u3002
  imageHeight?: number; // \u81EA\u5B9A\u4E49\u8F93\u5165\u56FE\u7247\u9AD8\u5EA6\u3002
  cacheImage?: boolean; // \u7F13\u5B58\u6700\u8FD1\u52A0\u8F7D\u6210\u529F\u7684\u56FE\u7247\uFF0C\u6700\u5927\u7F13\u5B58\u6570\u91CF\u4E3A 5 \uFF0C\u53EF\u4F7F\u7528 clearCache \u6E05\u7406\u7F13\u5B58\u3002\u9ED8\u8BA4\u4E3A true \u3002
  ajaxOptions?: AjaxOptions; // ajax \u8BF7\u6C42\u914D\u7F6E\u9879\uFF0C\u5F53\u4F20\u5165\u7684\u56FE\u7247\u4E3A\u5B57\u7B26\u4E32\u65F6\u624D\u4F1A\u89E6\u53D1\u8BF7\u6C42\u3002\u66F4\u591A\u4FE1\u606F\u53EF\u67E5\u9605\uFF1A https://doly-dev.github.io/util-helpers/global.html#AjaxOptions

  // \u5BFC\u51FA\u56FE\u7247
  bgImageType?: string; // \u80CC\u666F\u56FE\u5BFC\u51FA\u7C7B\u578B\u3002\u9ED8\u8BA4 image/jpeg
  quality?: number; // \u5BFC\u51FA\u56FE\u7247\u8D28\u91CF\u3002\u9ED8\u8BA4 0.8 \u3002
  format?: 'dataURL' | 'blob'; // \u5BFC\u51FA\u56FE\u7247\u683C\u5F0F\u3002\u9ED8\u8BA4 dataURL \u3002
  autoRevokePreviousBlobUrl?: boolean; // \u81EA\u52A8\u91CA\u653E\u4E4B\u524D\u5BFC\u51FA\u7684 blob url \uFF0C\u4EC5\u5728 format='blob' \u65F6\u751F\u6548\u3002\u9ED8\u8BA4 true \u3002
};

type Result = {
  bgUrl: string; // \u80CC\u666F\u56FE
  puzzleUrl: string; // \u62FC\u56FE
  x: number; // x \u8F74\u504F\u79FB\u503C\u3002\u5982\u679C\u4F7F\u7528\u8BE5\u503C\u6821\u9A8C\uFF0C\u5EFA\u8BAE\u524D\u540E\u9608\u503C\u589E\u51CF 5 \u7684\u8303\u56F4
  y: number; // y \u8F74\u504F\u79FB\u503C\uFF0C\u7B49\u9AD8\u62FC\u56FE\u65F6\u503C\u59CB\u7EC8\u4E3A 0
};

// \u62FC\u56FE\u70B9
enum Point {
  None, // \u6CA1\u6709
  Outer, // \u5916\u90E8
  Inner, // \u5185\u90E8
}
`,paraId:13,tocIndex:7}]},14535:function(O,l){l.Z=`import React, { useEffect, useState } from 'react';
import { createPuzzle, Result } from 'create-puzzle';
import DemoImage from './sunflower.jpg';

function Demo() {
  const [result, setResult] = useState<Result>();

  const generate = () => {
    createPuzzle(DemoImage).then((res) => {
      console.log(res);
      setResult(res);
    });
  };

  useEffect(() => {
    generate();
  }, []);

  return (
    <div>
      {result && (
        <div>
          <div>
            \u80CC\u666F\u56FE\uFF1A
            <img src={result.bgUrl} alt="" />
          </div>
          <div>
            \u62FC\u56FE\uFF1A
            <img src={result.puzzleUrl} alt="" />
          </div>
          <div>x \u8F74\u504F\u79FB\u503C\uFF1A{result.x}</div>
          <div>y \u8F74\u504F\u79FB\u503C\uFF1A{result.y}</div>
        </div>
      )}
      <br />
      <button onClick={generate}>\u70B9\u51FB\u91CD\u65B0\u751F\u6210</button>
    </div>
  );
}

export default Demo;
`},74467:function(O,l){l.Z=`import React, { useEffect, useRef } from 'react';
import DemoImage from './sunflower.jpg';
import { drawPuzzle } from '../util';

function Demo() {
  const myCanvasRef = useRef<HTMLCanvasElement>(null);
  const puzzleImageRef = useRef<HTMLImageElement>(null);

  function draw() {
    const ctx = myCanvasRef.current!.getContext('2d');

    const img = new Image();
    img.src = DemoImage;

    img.crossOrigin = 'Anonymous';
    img.onload = () => {
      if (ctx) {
        myCanvasRef.current!.width = img.width;
        myCanvasRef.current!.height = img.height;
        ctx.drawImage(img, 0, 0);

        ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
        drawPuzzle(ctx, { x: 40, y: 40 });
        // ctx.globalCompositeOperation = "destination-over";
        ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
        ctx.fill();
        // ctx.clip();

        // ctx.drawImage(img, 0, 0);

        // var imgData = ctx.getImageData(140, 140, 60, 60);
        // ctx.clearRect(0, 0, 500, 300);
        // ctx.putImageData(imgData, 60, 60);
      }

      // if (ctx) {
      //   // ctx?.moveTo(40.5, 40.5);
      //   ctx.rect(40.5, 40.5, 40, 40);
      //   ctx.lineWidth = 2;
      //   ctx.strokeStyle = 'white';
      //   ctx.stroke();

      //   ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
      //   ctx.fill();
      //   // ctx.clip();

      //   // const dataURL = myCanvasRef.current?.toDataURL();
      //   // console.log(dataURL);

      //   // var imgData = ctx.getImageData(40.5, 40.5, 40, 40);
      //   // ctx.clearRect(0, 0, 500, 300);
      //   // ctx.putImageData(imgData, 40.5, 40.5);
      // }
    };
  }

  useEffect(() => {
    draw();
  }, []);

  return (
    <>
      <canvas ref={myCanvasRef} width="0" height="0" />
      <img src="" alt="" ref={puzzleImageRef} />
    </>
  );
}

export default Demo;
`},38567:function(O,l){l.Z=`import React, { useEffect, useRef, useState } from 'react';
import { drawPuzzle } from '../util';

function Demo() {
  const myCanvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D>(null);
  const [size, setSize] = useState(60);
  const [margin, setMargin] = useState(0);
  const [points, setPoints] = useState<2 | 3 | 4>();

  function draw() {
    // @ts-ignore
    ctxRef.current = myCanvasRef.current!.getContext('2d');

    if (ctxRef.current) {
      const offset = (120 - size) / 2;
      drawPuzzle(ctxRef.current, {
        x: offset,
        y: offset,
        w: size,
        h: size,
        margin,
        points,
      });
    }
  }

  function randomDraw() {
    if (ctxRef.current) {
      ctxRef.current.clearRect(0, 0, 120, 120);
      draw();
    }
  }

  function changeSize(e: any) {
    const { value } = e.target;
    const numValue = +value;
    if (numValue < 30) {
      setSize(30);
    } else if (numValue > 120) {
      setSize(120);
    } else {
      setSize(Math.floor(numValue) || 60);
    }
  }

  function changeMargin(e: any) {
    const { value } = e.target;
    const numValue = +value;
    if (numValue < 0) {
      setMargin(0);
    } else if (numValue > 20) {
      setMargin(20);
    } else {
      setMargin(Math.floor(numValue) || 0);
    }
  }

  function changePoints(e: any) {
    const { value } = e.target;
    // @ts-ignore
    setPoints(value ? +value : undefined);
  }

  useEffect(() => {
    draw();
  }, []);

  useEffect(() => {
    randomDraw();
  }, [size, margin, points]);

  return (
    <>
      <canvas ref={myCanvasRef} width="120" height="120" style={{ border: '1px solid red' }} />
      <div>
        \u62FC\u56FE\u5BBD\u9AD8\uFF1A
        <input type="number" value={size} onInput={changeSize} onChange={changeSize} />
      </div>
      <div>
        \u7559\u767D\uFF1A
        <input type="number" value={margin} onInput={changeMargin} onChange={changeMargin} />
      </div>
      <div>
        \u968F\u673A\u62FC\u56FE\u70B9\uFF1A
        <select onChange={changePoints} value={points}>
          <option value={''}>2/3/4</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
        </select>
      </div>
      <br />
      <button onClick={randomDraw}>\u70B9\u51FB\u91CD\u65B0\u751F\u6210\u62FC\u56FE</button>
    </>
  );
}

export default Demo;
`},47735:function(O,l){l.Z=`import React, { useEffect, useRef } from 'react';

function Demo() {
  const myCanvasRef1 = useRef<HTMLCanvasElement>(null);
  const myCanvasRef2 = useRef<HTMLCanvasElement>(null);

  function draw() {
    const ctx1 = myCanvasRef1.current!.getContext('2d');
    const ctx2 = myCanvasRef2.current!.getContext('2d');

    // canvas\u5185\u90E8\u89C4\u5B9A\u7EBF\u6761\u7684\u7C97\u7EC6\u662F1px\uFF0C\u989C\u8272\u662F\u9ED1\u8272\uFF0C\u4F46\u662F\u5B9E\u9645\u60C5\u51B5\u4E0B\uFF0C\u7C97\u7EC6\u662F2px\uFF0C\u5E76\u4E14\u989C\u8272\u4E0D\u662F\u7EAF\u9ED1\u8272
    // \u5F53\u9700\u8981\u7ED8\u5236\u663E\u793A\u7684\u65F6\u5019\uFF0C\u4F1A\u91C7\u7528\u4EE5\u7EBF\u6761\u7684\u4E2D\u7EBF\u53BB\u5BF9\u9F50\u9875\u9762\u4E0A\u4E24\u4E2A\u5C0F\u683C\u5B50\u4E4B\u95F4\u7684\u7EBF\u6761
    // \u89E3\u51B3\u65B9\u6CD5\uFF1A\u5411\u4E0A\u632A\u52A80.5px\u7684\u50CF\u7D20\uFF0C\u4F7F\u5176\u4E0E1\u4E2A\u50CF\u7D20\u7684\u5E95\u90E8\u5BF9\u9F50
    // ref: https://blog.csdn.net/darabiuz/article/details/123733638
    const rect = {
      x: 40.5,
      y: 40.5,
      w: 40,
      h: 40,
    };

    const r = 7; // \u5706\u7684\u534A\u5F84
    const l = Math.hypot(r, r); // \u659C\u8FB9\u957F\u5EA6
    // const c3_4r = l / 2;

    // // \u5706\u5728\u5916\u9762\u7684\u4F4D\u7F6E
    // const outerPos = {
    //   top: [rect.x + rect.w / 2, rect.y - c3_4r],
    //   right: [rect.x + rect.w + c3_4r, rect.y + rect.h / 2],
    //   bottom: [rect.x + rect.w / 2, rect.y + rect.h + c3_4r],
    //   left: [rect.x - c3_4r, rect.y + rect.h / 2],
    // };

    // // \u5706\u5728\u91CC\u9762\u7684\u4F4D\u7F6E
    // const innerPos = {
    //   top: [rect.x + rect.w / 2, rect.y + c3_4r],
    //   right: [rect.x + rect.w - c3_4r, rect.y + rect.h / 2],
    //   bottom: [rect.x + rect.w / 2, rect.y + rect.h - c3_4r],
    //   left: [rect.x + c3_4r, rect.y + rect.h / 2],
    // };

    // sharp
    // ctx?.strokeRect(rect.x, rect.y, rect.w, rect.h);
    // drawCircle3_4(ctx!, outerPos.top[0], outerPos.top[1], r, 'bottom');
    // drawCircle3_4(ctx!, outerPos.right[0], outerPos.right[1], r, 'left');
    // drawCircle3_4(ctx!, outerPos.bottom[0], outerPos.bottom[1], r, 'top');

    if (ctx1) {
      ctx1.beginPath();

      // outer top
      ctx1.moveTo(rect.x, rect.y);
      ctx1.lineTo(rect.x + rect.w / 2 - l / 2, rect.y);
      ctx1.arc(rect.x + rect.w / 2, rect.y - l / 2, r, 0.75 * Math.PI, 0.25 * Math.PI);
      ctx1.moveTo(rect.x + rect.w / 2 + l / 2, rect.y);
      ctx1.lineTo(rect.x + rect.w, rect.y);

      // outer right
      ctx1.lineTo(rect.x + rect.w, rect.y + rect.h / 2 - l / 2);
      ctx1.arc(rect.x + rect.w + l / 2, rect.y + rect.h / 2, r, 1.25 * Math.PI, 0.75 * Math.PI);
      ctx1.moveTo(rect.x + rect.w, rect.y + rect.h / 2 + l / 2);
      ctx1.lineTo(rect.x + rect.w, rect.y + rect.h);

      // outer bottom
      ctx1.lineTo(rect.x + rect.w / 2 + l / 2, rect.y + rect.h);
      ctx1.arc(rect.x + rect.w / 2, rect.y + rect.h + l / 2, r, 1.75 * Math.PI, 1.25 * Math.PI);
      ctx1.moveTo(rect.x + rect.w / 2 - l / 2, rect.y + rect.h);
      ctx1.lineTo(rect.x, rect.y + rect.h);

      // outer left
      ctx1.lineTo(rect.x, rect.y + rect.h / 2 + l / 2);
      ctx1.arc(rect.x - l / 2, rect.y + rect.h / 2, r, 0.25 * Math.PI, 1.75 * Math.PI);
      ctx1.moveTo(rect.x, rect.y + rect.h / 2 - l / 2);
      ctx1.lineTo(rect.x, rect.y);

      ctx1.strokeStyle = 'red';
      ctx1.stroke();

      ctx1.closePath();
    }

    if (ctx2) {
      ctx2.beginPath();

      // inner top
      ctx2.moveTo(rect.x, rect.y);
      ctx2.lineTo(rect.x + rect.w / 2 - l / 2, rect.y);
      ctx2.arc(rect.x + rect.w / 2, rect.y + l / 2, r, 1.25 * Math.PI, 1.75 * Math.PI, true);
      ctx2.moveTo(rect.x + rect.w / 2 + l / 2, rect.y);
      ctx2.lineTo(rect.x + rect.w, rect.y);

      // inner right
      ctx2.lineTo(rect.x + rect.w, rect.y + rect.h / 2 - l / 2);
      ctx2.arc(
        rect.x + rect.w - l / 2,
        rect.y + rect.h / 2,
        r,
        1.75 * Math.PI,
        0.25 * Math.PI,
        true,
      );
      ctx2.moveTo(rect.x + rect.w, rect.y + rect.h / 2 + l / 2);
      ctx2.lineTo(rect.x + rect.w, rect.y + rect.h);

      // inner bottom
      ctx2.lineTo(rect.x + rect.w / 2 + l / 2, rect.y + rect.h);
      ctx2.arc(
        rect.x + rect.w / 2,
        rect.y + rect.h - l / 2,
        r,
        0.25 * Math.PI,
        0.75 * Math.PI,
        true,
      );
      ctx2.moveTo(rect.x + rect.w / 2 - l / 2, rect.y + rect.h);
      ctx2.lineTo(rect.x, rect.y + rect.h);

      // inner left
      ctx2.lineTo(rect.x, rect.y + rect.h / 2 + l / 2);
      ctx2.arc(rect.x + l / 2, rect.y + rect.h / 2, r, 0.75 * Math.PI, 1.25 * Math.PI, true);
      ctx2.moveTo(rect.x, rect.y + rect.h / 2 - l / 2);
      ctx2.lineTo(rect.x, rect.y);

      ctx2.strokeStyle = 'red';
      ctx2.stroke();

      ctx2.closePath();
    }
  }

  useEffect(() => {
    draw();
  }, []);

  return (
    <>
      <canvas ref={myCanvasRef1} width="120" height="120" style={{ border: '1px solid #d3d3d3' }} />
      <canvas ref={myCanvasRef2} width="120" height="120" style={{ border: '1px solid #d3d3d3' }} />
    </>
  );
}

export default Demo;
`},18415:function(O,l){l.Z=`import { randomInt } from 'ut2';

const mathPI = Math.PI;

// \u62FC\u56FE\u70B9
export enum Point {
  None, // \u6CA1\u6709
  Outer, // \u5916\u90E8
  Inner, // \u5185\u90E8
}
export const pointArray = [Point.None, Point.Outer, Point.Inner];

// \u968F\u673A\u9009\u62E9\u6570\u7EC4\u4E2D\u7684\u67D0\u4E00\u9879
function pick<T = any>(arr: T[]) {
  const len = arr.length;
  const randomIndex = randomInt(0, len - 1);
  return arr[randomIndex];
}

// \u83B7\u53D6\u968F\u673A\u62FC\u56FE\u70B9
export function getRandomPoints(pointNum?: 2 | 3 | 4) {
  const points = {
    top: pick(pointArray),
    right: pick(pointArray),
    bottom: pick(pointArray),
    left: pick(pointArray),
  };
  type PointKey = keyof typeof points;
  const pointsKeys = Object.keys(points) as PointKey[];
  const verticalDirs = ['top', 'bottom'] as PointKey[];
  const horizontalDirs = ['left', 'right'] as PointKey[];

  // \u4FDD\u8BC1\u4E0A\u4E0B \u548C \u5DE6\u53F3 \u90FD\u5FC5\u987B\u6709\u4E00\u4E2A\u5916\u90E8\u7684\u62FC\u56FE\u70B9
  if (points.top === Point.Outer && points.bottom === Point.Outer) {
    points[pick(verticalDirs)] = Point.Inner;
  } else if (points.top !== Point.Outer && points.bottom !== Point.Outer) {
    points[pick(verticalDirs)] = Point.Outer;
  }
  if (points.left === Point.Outer && points.right === Point.Outer) {
    points[pick(horizontalDirs)] = Point.Inner;
  } else if (points.left !== Point.Outer && points.right !== Point.Outer) {
    points[pick(horizontalDirs)] = Point.Outer;
  }

  if (pointNum) {
    const inners: PointKey[] = [];
    const nones: PointKey[] = [];
    pointsKeys.forEach((item) => {
      if (points[item] === Point.Inner) {
        inners.push(item);
      } else if (points[item] === Point.None) {
        nones.push(item);
      }
    });

    if (pointNum === 2) {
      inners.forEach((item) => (points[item] = Point.None));
    } else if (pointNum === 3) {
      if (inners.length === 0) {
        points[pick(nones)] = Point.Inner;
      } else if (inners.length === 2) {
        points[pick(inners)] = Point.None;
      }
    } else if (pointNum == 4) {
      nones.forEach((item) => (points[item] = Point.Inner));
    }
  }

  return points;
}

// \u753B\u62FC\u56FE
export function drawPuzzle(
  ctx: CanvasRenderingContext2D,
  options: {
    x?: number;
    y?: number;
    w?: number;
    h?: number;
    points?:
      | 2
      | 3
      | 4
      | {
          // \u62FC\u56FE\u70B9
          top: Point;
          right: Point;
          bottom: Point;
          left: Point;
        };
    margin?: number; // \u5916\u90E8\u7559\u767D
    needClosePath?: boolean; // \u662F\u5426\u8981\u95ED\u5408\u8DEF\u5F84
  } = {},
) {
  const { x = 0, y = 0, w = 60, h = 60, needClosePath = true } = options;
  let { points, margin = 0 } = options;

  margin = margin <= 0 ? 0 : margin;

  if (typeof points === 'number' || !points) {
    points = getRandomPoints(points);
  }

  const r = (Math.min(w, h) - margin * 2) * 0.15; // \u9002\u5408\u62FC\u56FE\u70B9\u7684\u6BD4\u4F8B 0.15
  const l = Math.hypot(r, r); // \u659C\u8FB9\u957F\u5EA6
  const l1_2 = l / 2; // \u659C\u8FB9\u957F\u5EA6\u4E00\u534A\uFF0C45\u5EA6\u89D2\u76F4\u89D2\u4E09\u89D2\u5F62\uFF0C\u90BB\u8FB9\u76F8\u7B49
  const c2r = r + l1_2; // \u5706\u76F4\u5F84

  const rect = {
    x: x + margin,
    y: y + margin,
    w: w - c2r - margin * 2,
    h: h - c2r - margin * 2,
  };
  const w1_2 = rect.w / 2; // \u77E9\u5F62\u4E00\u534A\u5BBD\u5EA6
  const h1_2 = rect.h / 2; // \u77E9\u5F62\u4E00\u534A\u9AD8\u5EA6

  if (points.left === Point.Outer) {
    rect.x += c2r;
  }
  if (points.top === Point.Outer) {
    rect.y += c2r;
  }

  // draw start
  ctx.beginPath();
  ctx.lineWidth = 2;

  // top
  ctx.moveTo(rect.x, rect.y);
  if (points.top !== Point.None) {
    ctx.lineTo(rect.x + w1_2 - l1_2, rect.y);
    if (points.top === Point.Inner) {
      ctx.arc(rect.x + w1_2, rect.y + l1_2, r, 1.25 * mathPI, 1.75 * mathPI, true);
    } else {
      ctx.arc(rect.x + w1_2, rect.y - l1_2, r, 0.75 * mathPI, 0.25 * mathPI);
    }
  }
  ctx.lineTo(rect.x + rect.w, rect.y);

  // right
  if (points.right !== Point.None) {
    ctx.lineTo(rect.x + rect.w, rect.y + h1_2 - l1_2);
    if (points.right === Point.Inner) {
      ctx.arc(rect.x + rect.w - l1_2, rect.y + h1_2, r, 1.75 * mathPI, 0.25 * mathPI, true);
    } else {
      ctx.arc(rect.x + rect.w + l1_2, rect.y + h1_2, r, 1.25 * mathPI, 0.75 * mathPI);
    }
  }
  ctx.lineTo(rect.x + rect.w, rect.y + rect.h);

  // bottom
  if (points.bottom !== Point.None) {
    ctx.lineTo(rect.x + w1_2 + l1_2, rect.y + rect.h);
    if (points.bottom === Point.Inner) {
      ctx.arc(rect.x + w1_2, rect.y + rect.h - l1_2, r, 0.25 * mathPI, 0.75 * mathPI, true);
    } else {
      ctx.arc(rect.x + w1_2, rect.y + rect.h + l1_2, r, 1.75 * mathPI, 1.25 * mathPI);
    }
  }
  ctx.lineTo(rect.x, rect.y + rect.h);

  // left
  if (points.left !== Point.None) {
    ctx.lineTo(rect.x, rect.y + h1_2 + l1_2);
    if (points.left === Point.Inner) {
      ctx.arc(rect.x + l1_2, rect.y + h1_2, r, 0.75 * mathPI, 1.25 * mathPI, true);
    } else {
      ctx.arc(rect.x - l1_2, rect.y + h1_2, r, 0.25 * mathPI, 1.75 * mathPI);
    }
  }
  ctx.lineTo(rect.x, rect.y);

  ctx.stroke();

  needClosePath && ctx.closePath();

  // ctx.fillStyle = "red";
  // ctx.fill();

  // ctx.strokeRect(x, y, w, h);
}

export function canvasToImage(
  canvas: HTMLCanvasElement,
  formatBlob: boolean,
  type: string,
  quality: number,
) {
  return new Promise<string>((resolve) => {
    if (formatBlob) {
      canvas.toBlob(
        (blob) => {
          if (blob) {
            resolve(URL.createObjectURL(blob));
          } else {
            resolve(canvas.toDataURL(type, quality));
          }
        },
        type,
        quality,
      );
    } else {
      resolve(canvas.toDataURL(type, quality));
    }
  });
}
`}}]);
