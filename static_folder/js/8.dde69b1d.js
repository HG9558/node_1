"use strict";(self.webpackChunkcoinDex=self.webpackChunkcoinDex||[]).push([[8],{5691:function(e,s,t){t.d(s,{Z:function(){return c}});var a=t(8473),l=t(4887);const r={class:"footer"},o={class:"display-box footer-ul"},n=["onClick"],i=(0,a._)("i",null,null,-1);t(7658);s={name:"footerId",data(){return{tabs:[{name:"home",toRouter:"home",class:"home"},{name:"markets",toRouter:"markets",class:"markets"},{name:"customerService",toRouter:"service",class:"service"},{name:"assets",toRouter:"assets",class:"assets"},{name:"me",toRouter:"me",class:"me"}]}},computed:{...(0,t(299).Se)(["getUser"])},methods:{toRouter(e){["assets","me"].includes(e)&&!1===this.getUser.isLogin?this.$router.push({name:"login"}):this.$router.push({name:e})}}};var c=(0,t(9533).Z)(s,[["render",function(e,s,t,c,u,d){return(0,a.wg)(),(0,a.iD)("div",r,[(0,a._)("ul",o,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(u.tabs,((s,t)=>((0,a.wg)(),(0,a.iD)("li",{key:t},[(0,a._)("section",{onClick:e=>d.toRouter(s.toRouter),class:(0,l.C_)([{active:e.$route.name===s.toRouter},"footer-"+s.class])},[i,(0,a._)("p",null,(0,l.zw)(e.$t(s.name)),1)],10,n)])))),128))])])}]])},9008:function(e,s,t){t.r(s),t.d(s,{default:function(){return x}});var a=t(8473),l=t(4887);const r={class:"markers-head"},o={class:"display-flex markers-head-dl"},n={class:"markers-head-dt1"},i={class:"flex-box"},c={class:"markers-head-dt2"},u={class:"markers-area"},d={class:"markers-main"},m=["onClick"],p={class:"display-flex markers-dt1"},k={class:"display-flex"},h={class:"markers-div1"},v=["src"],_={class:"flex-box markers-div2"},f=(0,a._)("span",null,null,-1),w={class:"flex-box"},g={class:"markers-dt2"},b={key:0,class:"markers-bg-red"},y={key:1,class:"markers-bg-green"};t(7658);s={name:"marketsId",components:{"v-footer":t(5691).Z},data(){return{tabs:[{name:"USDT",type:"2",title:"usdt"},{name:"Favorites",type:"1",title:"favorites"}],curType:"2",loadList:[]}},created(){this.selectTabs({name:this.curType})},methods:{selectTabs(e){let s="";s="2"===e.name?"coinsyList":"favoriteList",this.loadList=[],this.$http.get(s).then((e=>{1e3===e.code?this.loadList=e.data:this.$error(e.message)}))},selectCoin(e){this.$router.push({name:"trade",query:{coinName:e.coinName}})}}};var x=(0,t(9533).Z)(s,[["render",function(e,s,t,x,D,$){var C=(0,a.up)("v-header");const T=(0,a.up)("van-tab");var z=(0,a.up)("van-tabs"),R=(0,a.up)("v-footer");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(C,{title:e.$t("markets"),showLeft:!1},null,8,["title"]),(0,a._)("section",r,[(0,a.Wm)(z,{class:"markers-tabs",active:D.curType,"onUpdate:active":s[0]||(s[0]=e=>D.curType=e),onClickTab:$.selectTabs},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(D.tabs,((s,t)=>((0,a.wg)(),(0,a.j4)(T,{title:e.$t(s.title),key:t,name:s.type},null,8,["title","name"])))),128))])),_:1},8,["active","onClickTab"]),(0,a._)("dl",o,[(0,a._)("dt",n,(0,l.zw)(e.$t("name")),1),(0,a._)("dd",i,[(0,a._)("section",null,[(0,a._)("p",null,(0,l.zw)(e.$t("lastPrice")),1)])]),(0,a._)("dt",c,[(0,a._)("section",null,[(0,a._)("p",null,(0,l.zw)(e.$t("change")),1)])])])]),(0,a._)("section",u,[(0,a._)("article",d,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(D.loadList,((e,s)=>((0,a.wg)(),(0,a.iD)("dl",{class:"display-flex markers-dl",key:s,onClick:s=>$.selectCoin(e)},[(0,a._)("dt",p,[(0,a._)("section",k,[(0,a._)("div",h,[(0,a._)("img",{src:e.url},null,8,v)]),(0,a._)("div",_,[(0,a._)("h3",null,[(0,a.Uk)((0,l.zw)(e.coinName)+" ",1),f]),(0,a._)("p",null,"Vol: "+(0,l.zw)(e.volume24h),1)])])]),(0,a._)("dd",w,(0,l.zw)(e.priceNow),1),(0,a._)("dt",g,[e.proportion<=0?((0,a.wg)(),(0,a.iD)("div",b,(0,l.zw)(+(100*e.proportion).toFixed(2))+"% ",1)):((0,a.wg)(),(0,a.iD)("div",y,"+ "+(0,l.zw)(+(100*e.proportion).toFixed(2))+"%",1))])],8,m)))),128))])]),(0,a.Wm)(R)],64)}]])}}]);