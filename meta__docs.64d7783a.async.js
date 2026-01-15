"use strict";(self.webpackChunkcreate_puzzle=self.webpackChunkcreate_puzzle||[]).push([[904],{35807:function(b,l,n){n.r(l),n.d(l,{demos:function(){return L}});var f=n(75271),L={"docs-generator-demo-generator":{component:f.memo(f.lazy(function(){return Promise.all([n.e(740),n.e(459),n.e(433)]).then(n.bind(n,23734))})),asset:null,context:void 0,renderOpts:void 0}}},29777:function(b,l,n){var f;n.r(l),n.d(l,{demos:function(){return o}});var L=n(90228),c=n.n(L),i=n(87999),h=n.n(i),s=n(75271),D=n(2956),O=n(61313),S=n.n(O),r=n(99482),o={"docs-demo-dev-puzzle":{component:s.memo(s.lazy(function(){return Promise.all([n.e(740),n.e(459),n.e(433)]).then(n.bind(n,9101))})),asset:{type:"BLOCK",id:"docs-demo-dev-puzzle",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(34445).Z},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:f||(f=n.t(s,2))},renderOpts:{compile:function(){var m=h()(c()().mark(function g(){var u,d=arguments;return c()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,n.e(896).then(n.bind(n,44896));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,d));case 3:case"end":return a.stop()}},g)}));function p(){return m.apply(this,arguments)}return p}()}},"docs-demo-dev-puzzle-random":{component:s.memo(s.lazy(function(){return Promise.all([n.e(740),n.e(459),n.e(433)]).then(n.bind(n,28888))})),asset:{type:"BLOCK",id:"docs-demo-dev-puzzle-random",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(37606).Z},react:{type:"NPM",value:"18.3.1"},"../util.ts":{type:"FILE",value:n(34590).Z},ut2:{type:"NPM",value:"1.21.3"}},entry:"index.tsx"},context:{"../util.ts":D,react:f||(f=n.t(s,2)),"/home/runner/work/create-puzzle/create-puzzle/src/util.ts":D,ut2:O},renderOpts:{compile:function(){var m=h()(c()().mark(function g(){var u,d=arguments;return c()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,n.e(896).then(n.bind(n,44896));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,d));case 3:case"end":return a.stop()}},g)}));function p(){return m.apply(this,arguments)}return p}()}},"docs-demo-dev-image":{component:s.memo(s.lazy(function(){return Promise.all([n.e(740),n.e(459),n.e(433)]).then(n.bind(n,9720))})),asset:{type:"BLOCK",id:"docs-demo-dev-image",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(25400).Z},react:{type:"NPM",value:"18.3.1"},"../util.ts":{type:"FILE",value:n(34590).Z},ut2:{type:"NPM",value:"1.21.3"}},entry:"index.tsx"},context:{"../util.ts":D,react:f||(f=n.t(s,2)),"/home/runner/work/create-puzzle/create-puzzle/src/util.ts":D,ut2:O},renderOpts:{compile:function(){var m=h()(c()().mark(function g(){var u,d=arguments;return c()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,n.e(896).then(n.bind(n,44896));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,d));case 3:case"end":return a.stop()}},g)}));function p(){return m.apply(this,arguments)}return p}()}},"docs-demo-basic":{component:s.memo(s.lazy(function(){return Promise.all([n.e(740),n.e(459),n.e(433)]).then(n.bind(n,92653))})),asset:{type:"BLOCK",id:"docs-demo-basic",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(81333).Z},react:{type:"NPM",value:"18.3.1"},"create-puzzle":{type:"NPM",value:"3.0.4"}},entry:"index.tsx"},context:{react:f||(f=n.t(s,2)),"create-puzzle":r},renderOpts:{compile:function(){var m=h()(c()().mark(function g(){var u,d=arguments;return c()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,n.e(896).then(n.bind(n,44896));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,d));case 3:case"end":return a.stop()}},g)}));function p(){return m.apply(this,arguments)}return p}()}}}},99482:function(b,l,n){n.r(l),n.d(l,{Point:function(){return h.Point},clearCache:function(){return S},createPuzzle:function(){return u},drawPuzzle:function(){return h.drawPuzzle},getRandomPoints:function(){return h.getRandomPoints}});var f=n(48305),L=n.n(f),c=n(43096),i=n.n(c),h=n(2956),s=n(61313),D=n.n(s),O=new c.AsyncMemo({max:5,maxStrategy:"replaced"});O.cache.on("del",function(d,t){try{t.image.src&&URL.revokeObjectURL(t.image.src)}catch(a){}});function S(d){d?O.cache.del(d):O.cache.clear()}var r=new WeakMap,o=function(t){if(!(0,s.isObject)(t))return String(t);if(!r.get(t)){var a="_"+Date.now();r.set(t,a)}return r.get(t)},m={jpeg:"image/jpeg",png:"image/png"},p=[];function g(d){d.forEach(function(t){URL.revokeObjectURL(t)})}function u(d){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.borderWidth,A=a===void 0?2:a,K=t.borderColor,$=K===void 0?"rgba(255,255,255,0.7)":K,x=t.fillColor,W=x===void 0?"rgba(255,255,255,0.7)":x,I=t.points,y=t.width,R=y===void 0?60:y,v=t.height,P=v===void 0?60:v,e=t.x,C=t.y,E=t.margin,J=E===void 0?2:E,k=t.equalHeight,F=k===void 0?!0:k,q=t.imageWidth,nn=t.imageHeight,j=t.bgWidth,H=t.bgHeight,en=t.bgOffset,G=en===void 0?[0,0]:en,tn=t.bgImageType,fn=tn===void 0?m.jpeg:tn,rn=t.quality,on=rn===void 0?.8:rn,an=t.format,hn=an===void 0?"dataURL":an,cn=t.cacheImage,gn=cn===void 0?!0:cn,ln=t.autoRevokePreviousBlobUrl,xn=ln===void 0?!0:ln,vn=t.ajaxOptions;return new Promise(function(yn,sn){var Z=document.createElement("canvas"),B=document.createElement("canvas"),w=Z.getContext("2d"),M=B.getContext("2d"),In=gn?o(d):void 0;O.run(function(){return(0,c.loadImageWithBlob)(d,vn)},In).then(function(Pn){var z=Pn.image;q&&(z.width=q),nn&&(z.height=nn);var _=typeof j=="number"&&j>0?j>R?j:R:z.width,N=typeof H=="number"&&H>0?H>P?H:P:z.height;Z.width=_,Z.height=N;var X=_-R,Y=N-P,U=typeof e=="undefined"?(0,s.randomInt)(R,X):e||0,T=typeof C=="undefined"?(0,s.randomInt)(0,Y):C||0;U<0?U=0:U>X&&(U=X),T<0?T=0:T>Y&&(T=Y);var un=typeof I=="number"||!I?(0,h.getRandomPoints)(I):I,V=typeof G=="function"?G(z.width,z.height):G;w.strokeStyle=$,w.lineWidth=A,w.fillStyle=W,(0,h.drawPuzzle)(w,{x:U,y:T,w:R,h:P,points:un,margin:J}),w.fillStyle=W,w.fill(),w.globalCompositeOperation="destination-over",w.drawImage(z,V[0],V[1],z.width,z.height),B.width=_,B.height=N,M.strokeStyle=$,M.lineWidth=A,(0,h.drawPuzzle)(M,{x:U,y:T,w:R,h:P,points:un,margin:J}),M.globalCompositeOperation="destination-over",M.clip(),M.drawImage(z,V[0],V[1],z.width,z.height);var zn=M.getImageData(U,T,R,P);M.clearRect(0,0,_,N),B.width=R,B.height=F?N:P,M.putImageData(zn,0,F?T:0);var Q=hn==="blob",bn=(0,h.canvasToImage)(B,Q,m.png,on),On=(0,h.canvasToImage)(Z,Q,fn,on);Promise.all([bn,On]).then(function(Rn){var dn=L()(Rn,2),mn=dn[0],pn=dn[1];xn&&(p.length&&(g(p),p.length=0),Q&&p.push(pn,mn)),yn({puzzleUrl:mn,bgUrl:pn,x:U,y:F?0:T})}).catch(sn)}).catch(sn)})}l.default=u},2956:function(b,l,n){n.r(l),n.d(l,{Point:function(){return i},canvasToImage:function(){return S},drawPuzzle:function(){return O},getRandomPoints:function(){return D},pointArray:function(){return h}});var f=n(61313),L=n.n(f),c=Math.PI,i=function(r){return r[r.None=0]="None",r[r.Outer=1]="Outer",r[r.Inner=2]="Inner",r}({}),h=[i.None,i.Outer,i.Inner];function s(r){var o=r.length,m=(0,f.randomInt)(0,o-1);return r[m]}function D(r){var o={top:s(h),right:s(h),bottom:s(h),left:s(h)},m=Object.keys(o),p=["top","bottom"],g=["left","right"];if(o.top===i.Outer&&o.bottom===i.Outer?o[s(p)]=i.Inner:o.top!==i.Outer&&o.bottom!==i.Outer&&(o[s(p)]=i.Outer),o.left===i.Outer&&o.right===i.Outer?o[s(g)]=i.Inner:o.left!==i.Outer&&o.right!==i.Outer&&(o[s(g)]=i.Outer),r){var u=[],d=[];m.forEach(function(t){o[t]===i.Inner?u.push(t):o[t]===i.None&&d.push(t)}),r===2?u.forEach(function(t){return o[t]=i.None}):r===3?u.length===0?o[s(d)]=i.Inner:u.length===2&&(o[s(u)]=i.None):r==4&&d.forEach(function(t){return o[t]=i.Inner})}return o}function O(r){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},m=o.x,p=m===void 0?0:m,g=o.y,u=g===void 0?0:g,d=o.w,t=d===void 0?60:d,a=o.h,A=a===void 0?60:a,K=o.needClosePath,$=K===void 0?!0:K,x=o.points,W=o.margin,I=W===void 0?0:W;I=I<=0?0:I,(typeof x=="number"||!x)&&(x=D(x));var y=(Math.min(t,A)-I*2)*.15,R=Math.hypot(y,y),v=R/2,P=y+v,e={x:p+I,y:u+I,w:t-P-I*2,h:A-P-I*2},C=e.w/2,E=e.h/2;x.left===i.Outer&&(e.x+=P),x.top===i.Outer&&(e.y+=P),r.beginPath(),r.lineWidth=2,r.moveTo(e.x,e.y),x.top!==i.None&&(r.lineTo(e.x+C-v,e.y),x.top===i.Inner?r.arc(e.x+C,e.y+v,y,1.25*c,1.75*c,!0):r.arc(e.x+C,e.y-v,y,.75*c,.25*c)),r.lineTo(e.x+e.w,e.y),x.right!==i.None&&(r.lineTo(e.x+e.w,e.y+E-v),x.right===i.Inner?r.arc(e.x+e.w-v,e.y+E,y,1.75*c,.25*c,!0):r.arc(e.x+e.w+v,e.y+E,y,1.25*c,.75*c)),r.lineTo(e.x+e.w,e.y+e.h),x.bottom!==i.None&&(r.lineTo(e.x+C+v,e.y+e.h),x.bottom===i.Inner?r.arc(e.x+C,e.y+e.h-v,y,.25*c,.75*c,!0):r.arc(e.x+C,e.y+e.h+v,y,1.75*c,1.25*c)),r.lineTo(e.x,e.y+e.h),x.left!==i.None&&(r.lineTo(e.x,e.y+E+v),x.left===i.Inner?r.arc(e.x+v,e.y+E,y,.75*c,1.25*c,!0):r.arc(e.x-v,e.y+E,y,.25*c,1.75*c)),r.lineTo(e.x,e.y),r.stroke(),$&&r.closePath()}function S(r,o,m,p){return new Promise(function(g){o?r.toBlob(function(u){g(u?URL.createObjectURL(u):r.toDataURL(m,p))},m,p):g(r.toDataURL(m,p))})}},93059:function(b,l,n){n.r(l),n.d(l,{texts:function(){return f}});const f=[{value:" ",paraId:0,tocIndex:0},{value:" ",paraId:0,tocIndex:0},{value:"\u53EF\u4EE5\u4F7F\u7528\u8BE5\u5DE5\u5177\u751F\u6210\u56FE\u7247\u5B58\u5165\u62FC\u56FE\u56FE\u5E93\uFF0C\u5EFA\u8BAE\u56FE\u7247\u5C3A\u5BF8 ",paraId:1,tocIndex:0},{value:"320 <= \u9AD8\u5EA6 <= 480",paraId:1,tocIndex:0},{value:" ",paraId:1,tocIndex:0},{value:"160 <= \u5BBD\u5EA6 <= 240",paraId:1,tocIndex:0},{value:" \uFF0C\u524D\u7AEF\u63A8\u8350\u642D\u914D ",paraId:1,tocIndex:0},{value:"rc-slider-captcha",paraId:1,tocIndex:0},{value:" \u4F7F\u7528\u3002",paraId:1,tocIndex:0},{value:"\u70B9\u51FB\u8FD4\u56DE create-puzzle \u6587\u6863",paraId:2}]},73171:function(b,l,n){n.r(l),n.d(l,{texts:function(){return f}});const f=[{value:" ",paraId:0,tocIndex:0},{value:" ",paraId:0,tocIndex:0},{value:"\u5728\u6D4F\u89C8\u5668\u7AEF\u751F\u6210\u6ED1\u5757\u9A8C\u8BC1\u7801\u7684\u62FC\u56FE\u548C\u80CC\u666F\u56FE\u3002",paraId:1,tocIndex:0},{value:"\u53EF\u4EE5\u5728\u5BA2\u6237\u7AEF\u751F\u6210\u62FC\u56FE\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u5B83\u751F\u6210\u7684\u62FC\u56FE\u653E\u5230\u670D\u52A1\u7AEF\u56FE\u5E93\uFF0C\u63A8\u8350\u642D\u914D ",paraId:2,tocIndex:0},{value:"rc-slider-captcha",paraId:2,tocIndex:0},{value:" \u4F7F\u7528\u3002",paraId:2,tocIndex:0},{value:"\u5982\u679C\u4F60\u4F7F\u7528\u7684\u662F Node.js \u505A\u670D\u52A1\u7AEF\uFF0C\u63A8\u8350\u4F7F\u7528 ",paraId:3,tocIndex:0},{value:"node-puzzle",paraId:3,tocIndex:0},{value:"\u3002",paraId:3,tocIndex:0},{value:"\u5B89\u88C5\u4F9D\u8D56",paraId:4,tocIndex:2},{value:`npm install create-puzzle
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
  Inner // \u5185\u90E8
}
`,paraId:13,tocIndex:7}]},81333:function(b,l){l.Z=`import React, { useEffect, useState } from 'react';
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
`},25400:function(b,l){l.Z=`import React, { useEffect, useRef } from 'react';
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
`},37606:function(b,l){l.Z=`import React, { useEffect, useRef, useState } from 'react';
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
        points
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
`},34445:function(b,l){l.Z=`import React, { useEffect, useRef } from 'react';

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
      h: 40
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
        true
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
        true
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
`},34590:function(b,l){l.Z=`import { randomInt } from 'ut2';

const mathPI = Math.PI;

// \u62FC\u56FE\u70B9
export enum Point {
  None, // \u6CA1\u6709
  Outer, // \u5916\u90E8
  Inner // \u5185\u90E8
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
    left: pick(pointArray)
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
  } = {}
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
    h: h - c2r - margin * 2
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

  if (needClosePath) {
    ctx.closePath();
  }

  // ctx.fillStyle = "red";
  // ctx.fill();

  // ctx.strokeRect(x, y, w, h);
}

export function canvasToImage(
  canvas: HTMLCanvasElement,
  formatBlob: boolean,
  type: string,
  quality: number
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
        quality
      );
    } else {
      resolve(canvas.toDataURL(type, quality));
    }
  });
}
`}}]);
