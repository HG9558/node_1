"use strict";(self.webpackChunkcoinDex=self.webpackChunkcoinDex||[]).push([[233],{2233:function(a,t,e){e.r(t),e.d(t,{default:function(){return g}});var l=e(8473),s=e(4887);const o={class:"options-navs-box"},i={class:"options-area"},d={class:"display-flex"},n={class:"flex-box"},r={class:"display-flex"},c={class:"display-flex"},p={class:"flex-box"},u={class:"display-flex"},h={class:"flex-box"},f={class:"display-flex"},m={class:"flex-box"},w={class:"display-flex"},x={class:"flex-box"},_={class:"display-flex"};e(7658);t={name:"optionsId",data(){return{nav:[{name:"Position",type:"0",title:"position"},{name:"History",type:"1",title:"history"}],params:{orderNo:"",coinName:"",status:"0",tradeType:"",startTime:"",endTime:"",pageNo:1,pageSize:10},loadData:{loading:!1,finished:!1,list:[]}}},created(){this.onLoad()},methods:{onLoad(){this.loadData.loading=!0,this.$http.post("opRecord",this.params).then((a=>{1e3!==a.code||(a.data.result.forEach((a=>{this.loadData.list.push(a)})),a.data.totalPage<=this.params.pageNo)?this.loadData.finished=!0:++this.params.pageNo,this.loadData.loading=!1}))},selectTabs(){this.params.pageNo=1,this.loadData.finished=!1,this.loadData.list=[],this.onLoad()}}};var g=(0,e(9533).Z)(t,[["render",function(a,t,e,g,y,b){var D=(0,l.up)("v-header");const v=(0,l.up)("van-tab");var z=(0,l.up)("van-tabs"),$=(0,l.up)("van-list");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(D,{title:a.$t("optionsOrders")},null,8,["title"]),(0,l._)("section",o,[(0,l.Wm)(z,{class:"options-navs",onClickTab:b.selectTabs,active:y.params.status,"onUpdate:active":t[0]||(t[0]=a=>y.params.status=a)},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(y.nav,((t,e)=>((0,l.wg)(),(0,l.j4)(v,{title:a.$t(t.title),key:e,name:t.type},null,8,["title","name"])))),128))])),_:1},8,["onClickTab","active"])]),(0,l._)("section",i,[(0,l.Wm)($,{loading:y.loadData.loading,"onUpdate:loading":t[1]||(t[1]=a=>y.loadData.loading=a),finished:y.loadData.finished,"immediate-check":!1,"loading-text":"Loading more content",onLoad:b.onLoad},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(y.loadData.list,((t,e)=>((0,l.wg)(),(0,l.iD)("div",{class:"options-item",key:e},[(0,l._)("dl",d,[(0,l._)("dt",null,(0,s.zw)(a.$t("tradPair")),1),(0,l._)("dd",n,(0,s.zw)(t.coinName),1)]),(0,l._)("dl",r,[(0,l._)("dt",null,(0,s.zw)(a.$t("direction")),1),(0,l._)("dd",{class:(0,s.C_)(["flex-box",[1===t.tradeType?"color-green":"color-red"]])},(0,s.zw)(a.$t("buy"))+" "+(0,s.zw)(1===t.tradeType?a.$t("long"):a.$t("short")),3)]),(0,l._)("dl",c,[(0,l._)("dt",null,(0,s.zw)(a.$t("buyPrice")),1),(0,l._)("dd",p,(0,s.zw)(t.price),1)]),(0,l._)("dl",u,[(0,l._)("dt",null,(0,s.zw)(a.$t("amount")),1),(0,l._)("dd",h,(0,s.zw)(t.amount.toFixed(2)),1)]),(0,l._)("dl",f,[(0,l._)("dt",null,(0,s.zw)(a.$t("orderDuration")),1),(0,l._)("dd",m,(0,s.zw)(t.second)+"s",1)]),1===t.status?((0,l.wg)(),(0,l.iD)(l.HY,{key:0},[(0,l._)("dl",w,[(0,l._)("dt",null,(0,s.zw)(a.$t("sellTime")),1),(0,l._)("dd",x,(0,s.zw)(t.gmtCreate),1)]),(0,l._)("dl",_,[(0,l._)("dt",null,(0,s.zw)(a.$t("proLoss")),1),(0,l._)("dd",{class:(0,s.C_)(["flex-box",[1<=t.win?"color-green":"color-red"]])},(0,s.zw)(Number(t.win).toFixed(2)),3)])],64)):(0,l.kq)("",!0)])))),128))])),_:1},8,["loading","finished","onLoad"])])],64)}]])}}]);