(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0f02b2"],{"9ae9":function(t,e,n){"use strict";n.r(e);var s=n("7a23"),o={class:"row"},c={class:"col-12"},r={class:"comment"},i=Object(s["h"])("h5",{class:"comment-label"},"Comment",-1),a={class:"comment-list"};function u(t,e,n,u,p,d){var l=Object(s["D"])("Card");return Object(s["y"])(),Object(s["g"])("div",o,[Object(s["h"])("div",c,[p.posts?(Object(s["y"])(),Object(s["e"])(l,{key:0,id:p.posts.id,title:p.posts.title,description:p.posts.body},null,8,["id","title","description"])):Object(s["f"])("",!0),Object(s["h"])("div",r,[i,Object(s["h"])("input",{class:"input input-rounded",type:"text",onKeyup:e[0]||(e[0]=Object(s["K"])((function(t){return d.handlerInput(t)}),["enter"])),placeholder:"komentar .. ."},null,32),Object(s["h"])("ul",a,[(Object(s["y"])(!0),Object(s["g"])(s["a"],null,Object(s["C"])(d.comments,(function(t,e){return Object(s["y"])(),Object(s["g"])("li",{key:e},Object(s["F"])(t.body),1)})),128))])])])])}var p=n("1da1"),d=(n("96cf"),n("bc3a")),l=n.n(d),h=n("ae8d"),b={components:{Card:h["a"]},data:function(){return{posts:null,pages_not_found:!1}},beforeMount:function(){this.getPost()},methods:{getPost:function(){var t=Object(p["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.a.get("https://jsonplaceholder.typicode.com/posts/".concat(this.$route.params.id));case 3:e=t.sent,this.posts=e.data,t.next=11;break;case 7:t.prev=7,t.t0=t["catch"](0),console.log("Error",t.t0),this.pages_not_found=!0;case 11:case"end":return t.stop()}}),t,this,[[0,7]])})));function e(){return t.apply(this,arguments)}return e}(),handlerInput:function(t){var e=t.target.value;if(!this.$store.getters.getLoggedIn)return this.$router.push("/login");e.length>2&&this.$store.dispatch("comment",{id_posts:this.posts.id,body:e})}},computed:{comments:function(){if(this.posts)return this.$store.getters.getComment(this.posts.id)}}},m=n("6b0d"),f=n.n(m);const g=f()(b,[["render",u]]);e["default"]=g}}]);
//# sourceMappingURL=chunk-2d0f02b2.35cf9892.js.map