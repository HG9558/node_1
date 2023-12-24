import{d as e,X as t,e as o,x as r,u as n,G as s,o as a,K as i}from"./_@vue-25e51883.js";import{d as p,c as m}from"./_pinia-b1a0e29c.js";import{R as c,c as _,a as l,b as h,E as u,L as d}from"./__vendor-38d4085c.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const f={class:s(["main-container"])},E=e({__name:"App",setup:e=>(t((()=>{})),(e,t)=>(a(),o("div",f,[r(n(c))])))}),g={},L=function(e,t,o){if(!t||0===t.length)return e();const r=document.getElementsByTagName("link");return Promise.all(t.map((e=>{if((e=function(e){return"/"+e}(e))in g)return;g[e]=!0;const t=e.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(!!o)for(let o=r.length-1;o>=0;o--){const n=r[o];if(n.href===e&&(!t||"stylesheet"===n.rel))return}else if(document.querySelector(`link[href="${e}"]${n}`))return;const s=document.createElement("link");return s.rel=t?"stylesheet":"modulepreload",t||(s.as="script",s.crossOrigin=""),s.href=e,document.head.appendChild(s),t?new Promise(((t,o)=>{s.addEventListener("load",t),s.addEventListener("error",(()=>o(new Error(`Unable to preload CSS for ${e}`))))})):void 0}))).then((()=>e())).catch((e=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}))},y=[{name:"recharge",path:"/recharge",component:()=>L((()=>import("./index-b473fcf7.js")),["static/js/index-b473fcf7.js","static/js/__vendor-38d4085c.js","static/js/_@vue-25e51883.js","static/css/name-25347acc.css","static/js/CommonHeader.vue_vue_type_style_index_0_lang-729ad2f0.js","static/css/name-69f2d0c6.css","static/js/index-7efd0a7c.js","static/js/_axios-dc055ed6.js","static/js/_plugin-vue_export-helper-1b428a4d.js","static/js/_pinia-b1a0e29c.js","static/css/name-d3fb9a67.css"]),props:!0,meta:{auth:!0}},{name:"setup",path:"/setup",component:()=>L((()=>import("./setup-a9a57a0f.js")),["static/js/setup-a9a57a0f.js","static/js/CommonHeader.vue_vue_type_style_index_0_lang-729ad2f0.js","static/js/__vendor-38d4085c.js","static/js/_@vue-25e51883.js","static/css/name-25347acc.css","static/css/name-69f2d0c6.css","static/js/usePath-cad0276a.js","static/js/index-7efd0a7c.js","static/js/_axios-dc055ed6.js","static/js/_plugin-vue_export-helper-1b428a4d.js","static/js/_pinia-b1a0e29c.js","static/css/name-6e7f90b6.css"]),props:!0,meta:{auth:!0}},{name:"search",path:"/search",component:()=>L((()=>import("./search-1409265c.js")),["static/js/search-1409265c.js","static/js/__vendor-38d4085c.js","static/js/_@vue-25e51883.js","static/css/name-25347acc.css","static/js/CommonHeader.vue_vue_type_style_index_0_lang-729ad2f0.js","static/css/name-69f2d0c6.css","static/js/usePath-cad0276a.js","static/js/index-7efd0a7c.js","static/js/_axios-dc055ed6.js","static/js/_plugin-vue_export-helper-1b428a4d.js","static/js/_pinia-b1a0e29c.js","static/css/name-b8db4272.css"]),props:!0,meta:{auth:!0}},{name:"register",path:"/register",component:()=>L((()=>import("./register-78e5a503.js")),["static/js/register-78e5a503.js","static/js/__vendor-38d4085c.js","static/js/_@vue-25e51883.js","static/css/name-25347acc.css","static/js/index-7efd0a7c.js","static/js/_axios-dc055ed6.js","static/js/_plugin-vue_export-helper-1b428a4d.js","static/js/_pinia-b1a0e29c.js","static/css/name-95ad28f4.css"]),props:!0},{name:"personalData",path:"/personaldata",component:()=>L((()=>import("./personalData-c807cb34.js")),["static/js/personalData-c807cb34.js","static/js/__vendor-38d4085c.js","static/js/_@vue-25e51883.js","static/css/name-25347acc.css","static/js/CommonHeader.vue_vue_type_style_index_0_lang-729ad2f0.js","static/css/name-69f2d0c6.css","static/js/index-7efd0a7c.js","static/js/_axios-dc055ed6.js","static/js/_plugin-vue_export-helper-1b428a4d.js","static/js/_pinia-b1a0e29c.js","static/css/name-b33e3453.css"]),props:!0,meta:{auth:!0}},{name:"order",path:"/order",component:()=>L((()=>import("./order-8be336e8.js")),["static/js/order-8be336e8.js","static/js/CommonHeader.vue_vue_type_style_index_0_lang-729ad2f0.js","static/js/__vendor-38d4085c.js","static/js/_@vue-25e51883.js","static/css/name-25347acc.css","static/css/name-69f2d0c6.css","static/js/index-7efd0a7c.js","static/js/_axios-dc055ed6.js","static/js/_plugin-vue_export-helper-1b428a4d.js","static/js/_pinia-b1a0e29c.js","static/css/name-b139ee73.css"]),props:!0,meta:{auth:!0}},{name:"login",path:"/login",component:()=>L((()=>import("./login-ba021be0.js")),["static/js/login-ba021be0.js","static/js/__vendor-38d4085c.js","static/js/_@vue-25e51883.js","static/css/name-25347acc.css","static/js/index-7efd0a7c.js","static/js/_axios-dc055ed6.js","static/js/_plugin-vue_export-helper-1b428a4d.js","static/js/_pinia-b1a0e29c.js","static/css/name-b060fc8d.css"]),props:!0},{path:"/home",component:()=>L((()=>import("./home-b788ab47.js")),["static/js/home-b788ab47.js","static/js/__vendor-38d4085c.js","static/js/_@vue-25e51883.js","static/css/name-25347acc.css","static/js/usePath-cad0276a.js","static/js/_plugin-vue_export-helper-1b428a4d.js","static/js/_pinia-b1a0e29c.js","static/css/name-07beb3d4.css"]),children:[{name:"home-vip",path:"vip",component:()=>L((()=>import("./vip-fad8dd42.js")),["static/js/vip-fad8dd42.js","static/js/_@vue-25e51883.js","static/js/_plugin-vue_export-helper-1b428a4d.js","static/css/name-48dd3059.css"]),props:!0,meta:{auth:!0}},{name:"home-user",path:"user",component:()=>L((()=>import("./user-fccce505.js")),["static/js/user-fccce505.js","static/js/__vendor-38d4085c.js","static/js/_@vue-25e51883.js","static/css/name-25347acc.css","static/js/usePath-cad0276a.js","static/js/index-7efd0a7c.js","static/js/_axios-dc055ed6.js","static/js/_plugin-vue_export-helper-1b428a4d.js","static/js/_pinia-b1a0e29c.js","static/css/name-365ad23e.css"]),props:!0,meta:{auth:!0}},{name:"home",path:"",component:()=>L((()=>import("./index-4e5eba9f.js")),["static/js/index-4e5eba9f.js","static/js/__vendor-38d4085c.js","static/js/_@vue-25e51883.js","static/css/name-25347acc.css","static/js/Card-c38245ed.js","static/js/usePath-cad0276a.js","static/js/_plugin-vue_export-helper-1b428a4d.js","static/css/name-622e23eb.css","static/js/index-7efd0a7c.js","static/js/_axios-dc055ed6.js","static/js/_pinia-b1a0e29c.js","static/css/name-8109fd8d.css"]),props:!0}],props:!0},{name:"selfPage-type",path:"/selfpage/:type",component:()=>L((()=>import("./_type_-e1e3e9de.js")),["static/js/_type_-e1e3e9de.js","static/js/__vendor-38d4085c.js","static/js/_@vue-25e51883.js","static/css/name-25347acc.css","static/js/usePath-cad0276a.js","static/js/CommonHeader.vue_vue_type_style_index_0_lang-729ad2f0.js","static/css/name-69f2d0c6.css","static/js/index-7efd0a7c.js","static/js/_axios-dc055ed6.js","static/js/_plugin-vue_export-helper-1b428a4d.js","static/js/_pinia-b1a0e29c.js","static/css/name-52462224.css","static/css/name-622e23eb.css"]),props:!0,meta:{auth:!0}},{name:"videoDetail-id",path:"/videodetail/:id",component:()=>L((()=>import("./_id_-f2417230.js")),["static/js/_id_-f2417230.js","static/js/__vendor-38d4085c.js","static/js/_@vue-25e51883.js","static/css/name-25347acc.css","static/js/Card-c38245ed.js","static/js/usePath-cad0276a.js","static/js/_plugin-vue_export-helper-1b428a4d.js","static/css/name-622e23eb.css","static/js/index-7efd0a7c.js","static/js/_axios-dc055ed6.js","static/js/_pinia-b1a0e29c.js","static/css/name-30ebec8d.css"]),props:!0},{name:"more-id-type",path:"/more/:id/:type",component:()=>L((()=>import("./_type_-b6e51be7.js")),["static/js/_type_-b6e51be7.js","static/js/__vendor-38d4085c.js","static/js/_@vue-25e51883.js","static/css/name-25347acc.css","static/js/Card-c38245ed.js","static/js/usePath-cad0276a.js","static/js/_plugin-vue_export-helper-1b428a4d.js","static/css/name-622e23eb.css","static/js/CommonHeader.vue_vue_type_style_index_0_lang-729ad2f0.js","static/css/name-69f2d0c6.css","static/js/index-7efd0a7c.js","static/js/_axios-dc055ed6.js","static/js/_pinia-b1a0e29c.js","static/css/name-6f7310cf.css"]),props:!0,meta:{auth:!0}}],v=p("USERSTATE",{state:()=>({token:"",userInfo:{},active:0,menuList:[]}),actions:{setToken(e){this.token=e},changeActive(e){this.active=e},setMenuList(e){this.menuList=e},setUserInfo(e){this.userInfo=Object.assign(this.userInfo,e)},claerUserInfo(){this.userInfo={},this.token=""}},persist:{enabled:!0}}),I=_({history:l("/"),scrollBehavior:()=>({top:0}),routes:[{path:"/",redirect:{name:"home"},children:y}]});I.beforeEach((async(e,t,o)=>{const{auth:r}=e.meta,{token:n}=v();!!n?e.path.includes("/login")?o("/home"):o():r?o({path:"/login"}):o()}));const P=m();P.use(h);const j=i(E);for(const[O,A]of Object.entries(u))j.component(O,A);j.config.errorHandler=(e,t,o)=>{},j.use(P).use(I).use(d).mount("#app");export{v as u};