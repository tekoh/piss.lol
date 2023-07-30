import{s as H,c as ie,f as j,u as ae,g as ue,d as ce,h as x,i as G,o as pe,j as ee}from"../chunks/scheduler.ba4dd0f0.js";import{S as U,i as X,y as re,e as V,z as fe,j as I,f as h,A as q,a as w,x as N,d as J,t as K,B as me,r as he,u as de,v as ge,w as _e,g as b,s as O,m as ve,C as ke,h as E,c as Q,n as be,k as m,o as Ee}from"../chunks/index.6b98ed67.js";function P(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function Y(n,e){const o={},s={},t={$$scope:1};let l=n.length;for(;l--;){const c=n[l],a=e[l];if(a){for(const d in c)d in a||(s[d]=1);for(const d in a)t[d]||(o[d]=a[d],t[d]=1);n[l]=a}else for(const d in c)t[d]=1}for(const c in s)c in o||(o[c]=void 0);return o}function Ne(n){return typeof n=="object"&&n!==null?n:{}}const te={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};function se(n,e,o){const s=n.slice();return s[10]=e[o][0],s[11]=e[o][1],s}function R(n){let e,o=[n[11]],s={};for(let t=0;t<o.length;t+=1)s=j(s,o[t]);return{c(){e=re(n[10]),this.h()},l(t){e=fe(t,n[10],{}),I(e).forEach(h),this.h()},h(){q(e,s)},m(t,l){w(t,e,l)},p(t,l){q(e,s=Y(o,[l&32&&t[11]]))},d(t){t&&h(e)}}}function le(n){let e=n[10],o,s=n[10]&&R(n);return{c(){s&&s.c(),o=V()},l(t){s&&s.l(t),o=V()},m(t,l){s&&s.m(t,l),w(t,o,l)},p(t,l){t[10]?e?H(e,t[10])?(s.d(1),s=R(t),e=t[10],s.c(),s.m(o.parentNode,o)):s.p(t,l):(s=R(t),e=t[10],s.c(),s.m(o.parentNode,o)):e&&(s.d(1),s=null,e=t[10])},d(t){t&&h(o),s&&s.d(t)}}}function Ae(n){let e,o,s,t,l,c=P(n[5]),a=[];for(let i=0;i<c.length;i+=1)a[i]=le(se(n,c,i));const d=n[9].default,g=ie(d,n,n[8],null);let A=[te,n[6],{width:n[2]},{height:n[2]},{stroke:n[1]},{"stroke-width":s=n[4]?Number(n[3])*24/Number(n[2]):n[3]},{class:t=`lucide-icon lucide lucide-${n[0]} ${n[7].class??""}`}],k={};for(let i=0;i<A.length;i+=1)k=j(k,A[i]);return{c(){e=re("svg");for(let i=0;i<a.length;i+=1)a[i].c();o=V(),g&&g.c(),this.h()},l(i){e=fe(i,"svg",{width:!0,height:!0,stroke:!0,"stroke-width":!0,class:!0});var u=I(e);for(let f=0;f<a.length;f+=1)a[f].l(u);o=V(),g&&g.l(u),u.forEach(h),this.h()},h(){q(e,k)},m(i,u){w(i,e,u);for(let f=0;f<a.length;f+=1)a[f]&&a[f].m(e,null);N(e,o),g&&g.m(e,null),l=!0},p(i,[u]){if(u&32){c=P(i[5]);let f;for(f=0;f<c.length;f+=1){const M=se(i,c,f);a[f]?a[f].p(M,u):(a[f]=le(M),a[f].c(),a[f].m(e,o))}for(;f<a.length;f+=1)a[f].d(1);a.length=c.length}g&&g.p&&(!l||u&256)&&ae(g,d,i,i[8],l?ce(d,i[8],u,null):ue(i[8]),null),q(e,k=Y(A,[te,u&64&&i[6],(!l||u&4)&&{width:i[2]},(!l||u&4)&&{height:i[2]},(!l||u&2)&&{stroke:i[1]},(!l||u&28&&s!==(s=i[4]?Number(i[3])*24/Number(i[2]):i[3]))&&{"stroke-width":s},(!l||u&129&&t!==(t=`lucide-icon lucide lucide-${i[0]} ${i[7].class??""}`))&&{class:t}]))},i(i){l||(J(g,i),l=!0)},o(i){K(g,i),l=!1},d(i){i&&h(e),me(a,i),g&&g.d(i)}}}function Me(n,e,o){const s=["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"];let t=x(e,s),{$$slots:l={},$$scope:c}=e,{name:a}=e,{color:d="currentColor"}=e,{size:g=24}=e,{strokeWidth:A=2}=e,{absoluteStrokeWidth:k=!1}=e,{iconNode:i}=e;return n.$$set=u=>{o(7,e=j(j({},e),G(u))),o(6,t=x(e,s)),"name"in u&&o(0,a=u.name),"color"in u&&o(1,d=u.color),"size"in u&&o(2,g=u.size),"strokeWidth"in u&&o(3,A=u.strokeWidth),"absoluteStrokeWidth"in u&&o(4,k=u.absoluteStrokeWidth),"iconNode"in u&&o(5,i=u.iconNode),"$$scope"in u&&o(8,c=u.$$scope)},e=G(e),[a,d,g,A,k,i,t,e,c,l]}class we extends U{constructor(e){super(),X(this,e,Me,Ae,H,{name:0,color:1,size:2,strokeWidth:3,absoluteStrokeWidth:4,iconNode:5})}}const We=we;function Te(n){let e;const o=n[2].default,s=ie(o,n,n[3],null);return{c(){s&&s.c()},l(t){s&&s.l(t)},m(t,l){s&&s.m(t,l),e=!0},p(t,l){s&&s.p&&(!e||l&8)&&ae(s,o,t,t[3],e?ce(o,t[3],l,null):ue(t[3]),null)},i(t){e||(J(s,t),e=!0)},o(t){K(s,t),e=!1},d(t){s&&s.d(t)}}}function Ie(n){let e,o;const s=[{name:"github"},n[1],{iconNode:n[0]}];let t={$$slots:{default:[Te]},$$scope:{ctx:n}};for(let l=0;l<s.length;l+=1)t=j(t,s[l]);return e=new We({props:t}),{c(){he(e.$$.fragment)},l(l){de(e.$$.fragment,l)},m(l,c){ge(e,l,c),o=!0},p(l,[c]){const a=c&3?Y(s,[s[0],c&2&&Ne(l[1]),c&1&&{iconNode:l[0]}]):{};c&8&&(a.$$scope={dirty:c,ctx:l}),e.$set(a)},i(l){o||(J(e.$$.fragment,l),o=!0)},o(l){K(e.$$.fragment,l),o=!1},d(l){_e(e,l)}}}function je(n,e,o){let{$$slots:s={},$$scope:t}=e;const l=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}],["path",{d:"M9 18c-4.51 2-5-2-7-2"}]];return n.$$set=c=>{o(1,e=j(j({},e),G(c))),"$$scope"in c&&o(3,t=c.$$scope)},e=G(e),[l,e,s,t]}class ze extends U{constructor(e){super(),X(this,e,je,Ie,H,{})}}const Se=ze;function ne(n,e,o){const s=n.slice();return s[5]=e[o],s}function oe(n){let e,o;return{c(){e=b("img"),this.h()},l(s){e=E(s,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){ee(e.src,o=n[5])||m(e,"src",o),m(e,"alt",""),m(e,"class","h-24")},m(s,t){w(s,e,t)},p(s,t){t&1&&!ee(e.src,o=s[5])&&m(e,"src",o)},d(s){s&&h(e)}}}function Ce(n){let e,o,s,t,l,c,a,d,g,A,k,i,u,f,M,C=n[2][n[1]]+"",B,F,W,T,z;document.title=e=n[2][n[1]],u=new Se({props:{size:"32",color:"#8b5cf6"}});let S=P(n[0]),v=[];for(let r=0;r<S.length;r+=1)v[r]=oe(ne(n,S,r));return{c(){o=b("meta"),s=b("meta"),t=b("meta"),l=b("meta"),c=b("meta"),a=b("meta"),d=b("meta"),g=b("meta"),A=O(),k=b("div"),i=b("a"),he(u.$$.fragment),f=O(),M=b("h1"),B=ve(C),F=O(),W=b("div"),T=b("div");for(let r=0;r<v.length;r+=1)v[r].c();this.h()},l(r){const _=ke("svelte-15flo14",document.head);o=E(_,"META",{name:!0,content:!0}),s=E(_,"META",{name:!0,content:!0}),t=E(_,"META",{name:!0,content:!0}),l=E(_,"META",{name:!0,content:!0}),c=E(_,"META",{name:!0,content:!0}),a=E(_,"META",{name:!0,content:!0}),d=E(_,"META",{property:!0,content:!0}),g=E(_,"META",{property:!0,content:!0}),_.forEach(h),A=Q(r),k=E(r,"DIV",{class:!0});var p=I(k);i=E(p,"A",{href:!0,target:!0});var D=I(i);de(u.$$.fragment,D),D.forEach(h),p.forEach(h),f=Q(r),M=E(r,"H1",{class:!0});var Z=I(M);B=be(Z,C),Z.forEach(h),F=Q(r),W=E(r,"DIV",{class:!0});var y=I(W);T=E(y,"DIV",{class:!0});var $=I(T);for(let L=0;L<v.length;L+=1)v[L].l($);$.forEach(h),y.forEach(h),this.h()},h(){m(o,"name","description"),m(o,"content","pisssssssss 😋"),m(s,"name","og:title"),m(s,"content","piss"),m(t,"name","og:description"),m(t,"content","pisssssssss 😋"),m(l,"name","og:site_name"),m(l,"content","piss.lol"),m(c,"name","theme-color"),m(c,"content","#f7d748"),m(a,"name","og:image"),m(a,"content","/piss.png"),m(d,"property","og:image:width"),m(d,"content","128"),m(g,"property","og:image:height"),m(g,"content","128"),m(i,"href","https://github.com/tekoh/piss.lol"),m(i,"target","_blank"),m(k,"class","flex animate-pulse p-3"),m(M,"class","mt-10 text-center font-serif text-6xl font-medium"),m(T,"class","flex w-full flex-wrap justify-center gap-6 sm:w-[65vw]"),m(W,"class","mt-48 flex w-full justify-center")},m(r,_){N(document.head,o),N(document.head,s),N(document.head,t),N(document.head,l),N(document.head,c),N(document.head,a),N(document.head,d),N(document.head,g),w(r,A,_),w(r,k,_),N(k,i),ge(u,i,null),w(r,f,_),w(r,M,_),N(M,B),w(r,F,_),w(r,W,_),N(W,T);for(let p=0;p<v.length;p+=1)v[p]&&v[p].m(T,null);z=!0},p(r,[_]){if((!z||_&6)&&e!==(e=r[2][r[1]])&&(document.title=e),(!z||_&2)&&C!==(C=r[2][r[1]]+"")&&Ee(B,C),_&1){S=P(r[0]);let p;for(p=0;p<S.length;p+=1){const D=ne(r,S,p);v[p]?v[p].p(D,_):(v[p]=oe(D),v[p].c(),v[p].m(T,null))}for(;p<v.length;p+=1)v[p].d(1);v.length=S.length}},i(r){z||(J(u.$$.fragment,r),z=!0)},o(r){K(u.$$.fragment,r),z=!1},d(r){r&&(h(A),h(k),h(f),h(M),h(F),h(W)),h(o),h(s),h(t),h(l),h(c),h(a),h(d),h(g),_e(u),me(v,r)}}}function De(n,e,o){const s=["piss.lol","piss.lol","piss.lol","piss.lol","piss.lo","piss.l","piss.","piss","piss","pisss","pissss","pisssss","pissssss","pissssss😋","pisssss","pissss","pisss","piss","piss.","piss.l","piss.lo","piss.lol","piss.lol😆"];let t=[],l=0,c="up",a="up";return pe(()=>{setTimeout(()=>{setInterval(()=>{l===s.length-1?c="down":l===0&&(c="up"),c==="up"?o(1,l++,l):o(1,l--,l)},300),setInterval(()=>{t.length===6?a="down":t.length===1&&(a="up"),a==="up"?o(0,t=[...t,"/piss.png"]):(t.shift(),o(0,t=[...t]))},1e3)},1e3)}),[t,l,s]}class Ge extends U{constructor(e){super(),X(this,e,De,Ce,H,{})}}export{Ge as component};
