(function(e){function t(t){for(var o,a,i=t[0],s=t[1],l=t[2],u=0,b=[];u<i.length;u++)a=i[u],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&b.push(r[a][0]),r[a]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);d&&d(t);while(b.length)b.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,a=1;a<n.length;a++){var s=n[a];0!==r[s]&&(o=!1)}o&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={app:0},c=[];function a(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"c62fd639"}[e]+".js"}function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=o);var c,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=a(e);var l=new Error;c=function(t){s.onerror=s.onload=null,clearTimeout(u);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+o+": "+c+")",l.name="ChunkLoadError",l.type=o,l.request=c,n[1](l)}r[e]=void 0}};var u=setTimeout((function(){c({type:"timeout",target:s})}),12e4);s.onerror=s.onload=c,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var d=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("e9c4");var o=n("7a23");function r(e,t,n,r,c,a){var i=Object(o["resolveComponent"])("NavTop"),s=Object(o["resolveComponent"])("router-view");return Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],null,[Object(o["createVNode"])(i),Object(o["createElementVNode"])("main",null,[Object(o["createVNode"])(s)])],64)}n("b383"),n("b0c0");var c={key:0,class:"navbar"},a={class:"navbar__menu"},i=Object(o["createTextVNode"])("Home"),s=Object(o["createTextVNode"])("About"),l=Object(o["createTextVNode"])("Admin"),u=Object(o["createTextVNode"])("Logout");function d(e,t,n,r,d,b){var p=Object(o["resolveComponent"])("router-link"),f=Object(o["resolveComponent"])("el-button");return"Login"!==e.$route.name?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",c,[Object(o["createElementVNode"])("div",a,[Object(o["createVNode"])(p,{class:"navbar__menu__link",to:"/"},{default:Object(o["withCtx"])((function(){return[i]})),_:1}),Object(o["createVNode"])(p,{class:"navbar__menu__link",to:"/about"},{default:Object(o["withCtx"])((function(){return[s]})),_:1}),Object(o["createVNode"])(f,{plain:"",onClick:t[0]||(t[0]=function(t){return e.$router.push("/admin")})},{default:Object(o["withCtx"])((function(){return[l]})),_:1}),b.loggedIn?(Object(o["openBlock"])(),Object(o["createBlock"])(f,{key:0,onClick:b.logedOut,plain:""},{default:Object(o["withCtx"])((function(){return[u]})),_:1},8,["onClick"])):Object(o["createCommentVNode"])("",!0)])])):Object(o["createCommentVNode"])("",!0)}var b=n("1da1"),p=(n("96cf"),{name:"NavTop",computed:{loggedIn:function(){return this.$store.getters.getLoggedIn}},methods:{logedOut:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("logedOut");case 2:return t.abrupt("return",e.$router.push("/"));case 3:case"end":return t.stop()}}),t)})))()}}}),f=n("6b0d"),m=n.n(f);const g=m()(p,[["render",d]]);var h=g,v={name:"App",components:{NavTop:h},beforeCreate:function(){this.$store.commit("initialiseStore")}};const O=m()(v,[["render",r]]);var j=O,k=n("9483");Object(k["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7"),n("3ca3"),n("ddb0");var w=n("6c02"),N=Object(o["createElementVNode"])("h2",{class:"display-1"},"Latest Post",-1),y={id:"infinite-list",class:"container"},E={class:"col-posts"};function V(e,t,n,r,c,a){var i=Object(o["resolveComponent"])("Card");return Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],null,[N,Object(o["createElementVNode"])("div",y,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(c.posts,(function(e){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",E,[Object(o["createVNode"])(i,{title:e.title,description:e.body},null,8,["title","description"])])})),256))])],64)}var x=n("2909"),C=(n("b64b"),n("99af"),n("bc3a")),_=n.n(C),S=n("ae8d"),I={name:"Home",components:{Card:S["a"]},data:function(){return{posts:[],nextItem:1,loading:!1}},beforeMount:function(){this.getPosts()},mounted:function(){this.getNextPost()},beforeDestroy:function(){window.removeEventListener("scroll",this.handleDebouncedScroll)},methods:{getPosts:function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_.a.get("https://jsonplaceholder.typicode.com/posts?_page=1&_limit=5");case 3:t=e.sent,console.log(t),this.posts=t.data,e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),console.log("get posts error",e.t0);case 11:case"end":return e.stop()}}),e,this,[[0,8]])})));function t(){return e.apply(this,arguments)}return t}(),getNextPost:function(){var e=this;window.onscroll=Object(b["a"])(regeneratorRuntime.mark((function t(){var n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=document.documentElement.scrollTop+window.innerHeight===document.documentElement.offsetHeight,!n){t.next=12;break}return t.prev=2,t.next=5,_.a.get("https://jsonplaceholder.typicode.com/posts?_page=".concat(e.nextItem++,"&_limit=5"));case 5:o=t.sent,Object.keys(o.data).length&&e.posts.push(Object.assign.apply(Object,Object(x["a"])(e.posts).concat(Object(x["a"])(o.data)))),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](2),console.log("get posts error",t.t0);case 12:case"end":return t.stop()}}),t,null,[[2,9]])})))}}};const P=m()(I,[["render",V]]);var B=P,L=[{path:"/",name:"Home",component:B},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/login",name:"Login",component:function(){return n.e("about").then(n.bind(null,"a55b"))}},{path:"/admin",name:"Admin-Dashboard",component:function(){return n.e("about").then(n.bind(null,"0a09"))},meta:{auth:!0}},{path:"/admin/post/create",name:"Admin-Post-Create",component:function(){return n.e("about").then(n.bind(null,"651e"))},meta:{auth:!0}}],T=Object(w["a"])({history:Object(w["b"])("/"),routes:L});T.beforeEach((function(e,t,n){var o=JSON.parse(localStorage.getItem("store"));if(o)if(e.matched.some((function(e){return e.meta.auth}))){if(o.loggedIn)return void n();n("/login")}else n()}));var A=T,R=n("5502"),$=Object(R["a"])({state:{users:[],posts:[],loggedIn:!1},getters:{getLoggedIn:function(e){return e.loggedIn},getUser:function(e){return e.users},getPost:function(e){return e.posts}},mutations:{initialiseStore:function(e){localStorage.getItem("store")&&this.replaceState(Object.assign(e,JSON.parse(localStorage.getItem("store"))))},setLoggedIn:function(e,t){return e.loggedIn=t},setUser:function(e,t){return e.users=t},setPost:function(e,t){return e.posts.push(t)}},actions:{loggedIn:function(e,t){var n=e.commit;n("setLoggedIn",t)},users:function(e,t){var n=e.commit;n("setUser",t)},logedOut:function(e){var t=e.commit;t("setUser",[]),t("setLoggedIn",!1)},posts:function(e,t){var n=e.commit;n("setPost",t)}},modules:{}}),D=(n("4af4"),n("f3fc"),n("44fb")),F=n.n(D),H=function(e){e.use(F.a)},J=Object(o["createApp"])(j);H(J),$.subscribe((function(e,t){localStorage.setItem("store",JSON.stringify(t))})),J.use($).use(A).mount("#app")},ae8d:function(e,t,n){"use strict";n("a4d3"),n("e01a");var o=n("7a23"),r={class:"card"},c={class:"card-title"},a={class:"card-body"},i={class:"card-footer"},s=Object(o["createElementVNode"])("i",{class:"bi-hand-thumbs-up"},null,-1),l=[s],u=Object(o["createElementVNode"])("i",{class:"bi-hand-thumbs-down"},null,-1),d=[u],b=Object(o["createElementVNode"])("div",null,[Object(o["createElementVNode"])("button",{class:"btn btn-action btn-comment"},[Object(o["createElementVNode"])("i",{class:"bi-chat-left-dots-fill"})])],-1);function p(e,t,n,s,u,p){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",r,[Object(o["createElementVNode"])("div",c,Object(o["toDisplayString"])(n.title),1),Object(o["createElementVNode"])("div",a,Object(o["toDisplayString"])(n.description),1),Object(o["createElementVNode"])("div",i,[Object(o["createElementVNode"])("div",null,[Object(o["createElementVNode"])("button",{class:Object(o["normalizeClass"])((u.likes?"active":"")+" btn btn-action btn-like"),onClick:t[0]||(t[0]=function(e){return p.handlerReaction(!0)})},l,2)]),Object(o["createElementVNode"])("div",null,[Object(o["createElementVNode"])("button",{class:Object(o["normalizeClass"])((u.dislike?"active":"")+" btn btn-action btn-like"),onClick:t[1]||(t[1]=function(e){return p.handlerReaction(!1)})},d,2)]),b])])}n("a9e3");var f={name:"Card",props:{key:Number,title:String,description:String},data:function(){return{likes:!1,dislike:!1}},methods:{handlerReaction:function(e){return e?this.likes=!this.likes:this.dislike=!this.dislike},highlightReaction:function(e){}}},m=n("6b0d"),g=n.n(m);const h=g()(f,[["render",p]]);t["a"]=h},b383:function(e,t,n){}});
//# sourceMappingURL=app.98777673.js.map