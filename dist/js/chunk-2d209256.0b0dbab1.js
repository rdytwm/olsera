(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d209256"],{a88a:function(t,e,n){"use strict";n.r(e);var o=n("7a23"),a={class:"q-pa-md",style:{"max-width":"400px",margin:"auto"}};function l(t,e,n,l,r,i){var c=Object(o["D"])("q-input"),u=Object(o["D"])("q-btn"),d=Object(o["D"])("q-form");return Object(o["y"])(),Object(o["g"])("div",a,[Object(o["j"])(d,{onSubmit:i.handlerSubmit,class:"q-gutter-md"},{default:Object(o["I"])((function(){return[Object(o["j"])(c,{filled:"",modelValue:r.form.title,"onUpdate:modelValue":e[0]||(e[0]=function(t){return r.form.title=t}),label:"Title"},null,8,["modelValue"]),Object(o["j"])(c,{filled:"",modelValue:r.form.body,"onUpdate:modelValue":e[1]||(e[1]=function(t){return r.form.body=t}),label:"Description"},null,8,["modelValue"]),Object(o["h"])("div",null,[Object(o["j"])(u,{label:"Post",type:"submit",color:"primary"})])]})),_:1},8,["onSubmit"])])}var r=n("1da1"),i=(n("96cf"),n("bc3a"),{name:"Login",data:function(){return{form:{title:null,body:null},loading:!1}},created:function(){},methods:{handlerSubmit:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:try{t.loading=!0,t.form.title?t.form.body?(t.loading=!1,t.$store.dispatch("posts",{id:"user_posts_"+(t.$store.getters.getPost.length+1),title:t.form.title,body:t.form.body}),t.$router.push("/admin")):(t.loading=!1,console.log("Description canot empty")):(t.loading=!1,console.log("TItle canot Empty"))}catch(n){t.loading=!1,console.log("pastikan isi id dengan benar!",n)}case 1:case"end":return e.stop()}}),e)})))()}}}),c=n("6b0d"),u=n.n(c),d=n("0378"),s=n("27f9"),m=n("9c40"),b=n("93dc"),f=n.n(b);const p=u()(i,[["render",l]]);e["default"]=p;f()(i,"components",{QForm:d["a"],QInput:s["a"],QBtn:m["a"]})}}]);
//# sourceMappingURL=chunk-2d209256.0b0dbab1.js.map