"use strict";(self.webpackChunkcoinDex=self.webpackChunkcoinDex||[]).push([[472],{5472:function(t,e,s){s.r(e),s.d(e,{default:function(){return h}});var i=s(8473),l=s(9197),o=s(4887);const n=[(0,i._)("i",null,null,-1)],d={class:"deposit-area"},a={class:"deposit-content"},u=[(0,i._)("dt",null,[(0,i._)("i",{class:"deposit-icon-usdt"})],-1),(0,i._)("dd",{class:"flex-box"},[(0,i._)("p",null,[(0,i.Uk)("USDT "),(0,i._)("span",null,"(TRC20)")]),(0,i._)("i")],-1)],c=(0,i._)("dt",null,[(0,i._)("i",{class:"deposit-icon-bank"})],-1),r={class:"flex-box"},p=(0,i._)("i",null,null,-1);s(7658);e={name:"depositId",data(){return{showUSDT:!1}},created(){this.getShowUSDT()},computed:{...(0,s(299).Se)(["getIsGuoJi"])},methods:{async getShowUSDT(){var t=(await this.$http.post("getPlatformType"))["res"];t&&(t=t[0]||{},this.showUSDT="2"===t.value)},toRouter(t){this.$router.push({name:t="depositUsdt"===t?"service":t})}}};var h=(0,s(9533).Z)(e,[["render",function(t,e,s,h,_,k){var w=(0,i.up)("v-header");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(w,{title:t.$t("deposit")},{right:(0,i.w5)((()=>[(0,i._)("div",{class:"deposit-head-right",onClick:e[0]||(e[0]=t=>k.toRouter("depositHis"))},n)])),_:1},8,["title"]),(0,i._)("section",d,[(0,i._)("section",a,[(0,i.wy)((0,i._)("dl",{class:"display-flex",onClick:e[1]||(e[1]=t=>k.toRouter("depositUsdt"))},u,512),[[l.F8,_.showUSDT]]),t.getIsGuoJi?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("dl",{key:0,class:"display-flex",onClick:e[2]||(e[2]=t=>k.toRouter("depositYhk"))},[c,(0,i._)("dd",r,[(0,i._)("p",null,(0,o.zw)(t.$t("bankTsf")),1),p])]))])])])}]])}}]);