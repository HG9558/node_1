import{e as a,f as s,I as e}from"./__vendor-38d4085c.js";import{u as r}from"./usePath-cad0276a.js";import{d as l,L as n,o as p,e as t,f as d,x as o,Z as i,J as _,A as c,_ as u,u as v,Y as m,G as y,$ as g,a0 as h}from"./_@vue-25e51883.js";/* empty css                                                             */import{_ as f}from"./_plugin-vue_export-helper-1b428a4d.js";const w=a=>(g("data-v-e41e9f9a"),a=a(),h(),a),j={class:"card_main_wrapper"},C={class:"banner_img"},x=w((()=>d("div",{class:"paly_count"},null,-1))),z={class:"name"},$={class:"play_wrapper"},k={class:"play_wrapper_left"},D=["src"],I={key:0,class:"play_wrapper_right"},L=w((()=>d("span",null,"HD",-1))),T=f(l({__name:"Card",props:{data:{},showType:{}},setup(l){const g=a();return(a,l)=>{const h=s,f=e,w=n("lazy");return p(),t("div",{class:y(["card_container",`col-${a.showType}`]),onClick:l[0]||(l[0]=s=>{return e=a.data.id,void g.push(`/videoDetail/${e}`);var e})},[d("div",j,[o(f,{width:"100%",height:"100%","lazy-load":"",src:a.data.coverUrl},{loading:i((()=>[o(h,{type:"spinner",size:"20"})])),error:i((()=>[_("Loading Failed")])),_:1},8,["src"]),c(d("img",C,null,512),[[w,a.data.coverUrl]]),x]),d("div",z,u(a.data.name),1),d("div",$,[d("div",k,[d("img",{src:v(r)("play_icon.png"),alt:""},null,8,D),d("span",null,u(a.data.playCnt),1)]),a.data.length?(p(),t("div",I,[L,d("span",null,u(a.data.length),1)])):m("",!0)])],2)}}}),[["__scopeId","data-v-e41e9f9a"]]);export{T as C};
