"use strict";(self.webpackChunkcoinDex=self.webpackChunkcoinDex||[]).push([[712],{6712:function(a,e,t){t.r(e),t.d(e,{default:function(){return g}});var l=t(8473),o=t(4887);const i={class:"financial-area"},d={key:0,class:"display-flex"},n={class:"flex-box"},s={class:"display-flex"},c={class:"display-flex"},r={class:"flex-box"},u={class:"display-flex"};t(7658);e={name:"financialId",data(){return{params:{coinCode:"",startTime:"",endTime:"",type:"",pageNo:1,pageSize:10},loadData:{loading:!1,finished:!1,list:[]}}},created(){this.onLoad()},computed:{...(0,t(299).Se)(["getIsGuoJi"])},methods:{onLoad(){this.loadData.loading=!0,this.$http.post("walletChange",this.params).then((a=>{1e3!==a.code||(a.data.result.forEach((a=>{this.loadData.list.push(a)})),a.data.totalPage<=this.params.pageNo)?this.loadData.finished=!0:++this.params.pageNo,this.loadData.loading=!1}))}}};var g=(0,t(9533).Z)(e,[["render",function(a,e,t,g,p,f){var h=(0,l.up)("v-header"),m=(0,l.up)("van-list");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(h,{title:a.$t("financialRecords")},null,8,["title"]),(0,l._)("section",i,[(0,l.Wm)(m,{loading:p.loadData.loading,"onUpdate:loading":e[0]||(e[0]=a=>p.loadData.loading=a),finished:p.loadData.finished,"immediate-check":!1,"loading-text":"Loading more content",onLoad:f.onLoad},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(p.loadData.list,((e,t)=>((0,l.wg)(),(0,l.iD)("div",{class:"financial-item",key:t},[a.getIsGuoJi?(0,l.kq)("",!0):((0,l.wg)(),(0,l.iD)("dl",d,[(0,l._)("dt",null,(0,o.zw)(a.$t("coin")),1),(0,l._)("dd",n,(0,o.zw)(e.coinCode),1)])),(0,l._)("dl",s,[(0,l._)("dt",null,(0,o.zw)(a.$t("amount")),1),(0,l._)("dd",{class:(0,o.C_)(["flex-box",[0<e.amount?"color-green":"color-red"]])},(0,o.zw)(Number(e.amount).toFixed(2)),3)]),(0,l._)("dl",c,[(0,l._)("dt",null,(0,o.zw)(a.$t("time")),1),(0,l._)("dd",r,(0,o.zw)(e.gmtCreate),1)]),(0,l._)("dl",u,[(0,l._)("dt",null,(0,o.zw)(a.$t("type")),1),(0,l._)("dd",{class:(0,o.C_)(["flex-box",[0<e.amount?"color-green":"color-red"]])},(0,o.zw)(a.$t("enumType"+String(e.type))),3)])])))),128))])),_:1},8,["loading","finished","onLoad"])])],64)}]])}}]);