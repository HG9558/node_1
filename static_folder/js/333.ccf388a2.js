"use strict";(self.webpackChunkcoinDex=self.webpackChunkcoinDex||[]).push([[333],{5333:function(e,t,s){s.r(t),s.d(t,{default:function(){return b}});var n=s(8473),i=s(4887),o=s(9197);const c=[(0,n._)("i",null,null,-1)],l={class:"exchange-area"},r={class:"exchange-main"},u={class:"exchange-dl"},a=(0,n._)("i",null,null,-1),h=(0,n._)("div",{class:"exchange-tsf"},[(0,n._)("div",{class:"exchange-div"},[(0,n._)("i")])],-1),p={class:"exchange-dl"},d=(0,n._)("i",null,null,-1),m={class:"exchange-dl exchange-dl2"},f=(0,n._)("i",null,null,-1),y={class:"exchange-dl exchange-dl2"},g={class:"exchange-dl exchange-dl2"},_={class:"exchange-receive"},C={class:"exchange-footer"},w=(0,n._)("h2",{class:"exchange-popup-title"},"Coin",-1),x={class:"exchange-popup-main"},T=["onClick"],k=(0,n._)("span",null,null,-1),$={class:"exchange-popup-title"},v={class:"exchange-popup-main"},F=["onClick"],z=(0,n._)("span",null,null,-1);s(7658);t=s(299),t={name:"transferId",data(){return{isTsf:!1,curType:0,selectList:[],isFrom:!1,tabTsf:[{name:"Options Account",type:"1",title:"optAcc"},{name:"Spot Account",type:"2",title:"spotAcc"}],curTsfType:0,curFrom:{name:"Options Account",type:"1",title:"optAcc"},curTo:{name:"Spot Account",type:"2",title:"spotAcc"},curCoin:{},money:"",refund:0}},computed:{...(0,t.Se)(["getSpot","getOption","getIsGuoJi"]),curCoinMoney(){return"1"===this.curFrom.type&&this.curCoin.optionBalance?this.curCoin.optionBalance:"2"===this.curFrom.type&&this.curCoin.coinBalance?this.curCoin.coinBalance:"0.00"}},watch:{},created(){this.getSpot.length<=0&&this.reqSpot(),this.getOption.length<=0&&this.reqOption(),this.getCsion()},methods:{...(0,t.nv)(["reqSpot","reqOption"]),selectFrom(e){this.curTsfType=e,this.isFrom=!0},selectCoin(e){if(!(1===this.curTsfType&&this.curFrom.type===e.type||2===this.curTsfType&&this.curTo.type===e.type)){for(let s=0;s<this.tabTsf.length;s++){var t=this.tabTsf[s];if(e.type!==t.type){1===this.curTsfType?(this.curFrom=e,this.curTo=t):(this.curFrom=t,this.curTo=e);break}}this.isFrom=!1,this.curCoin={},this.money=""}},showTsf(){void 0!==this.curFrom.type&&("1"===this.curFrom.type?this.selectList=this.getOption:this.selectList=this.getSpot,this.isTsf=!0)},selectTsf(e){this.curCoin=e,this.isTsf=!1,this.money=""},sure(){var e;this.curFrom.type?this.curCoin.coinCode?+this.money<=0?this.$error(this.$t("enterAmount")):this.curCoinMoney<this.money?this.$error(this.$t("exceedingBalance")):(e={coinCode:this.curCoin.coinCode,transferInCoinType:Number(this.curTo.type)-1,transferOutCoinType:Number(this.curFrom.type)-1,adjustBalance:this.money},this.$http.post("transfer",e).then((e=>{1e3===e.code?(this.$success(this.$t("trfSuccess")),this.$router.back()):this.$error(e.message)}))):this.$error(this.$t("selectCurrency")):this.$error(this.$t("pSelect"))},toRouter(e){this.$router.push({name:e})},maxMoney(){"1"===this.curFrom.type&&(this.money=this.curCoin.optionBalance),"2"===this.curFrom.type&&(this.money=this.curCoin.coinBalance)},getCsion(){this.$http.post("sysDictItem").then((e=>{1e3===e.code?this.refund=+e.data.transfer||0:this.$error(e.message)}))}}};var b=(0,s(9533).Z)(t,[["render",function(e,t,s,b,U,A){var S=(0,n.up)("v-header"),D=(0,n.up)("van-field"),B=(0,n.up)("van-popup");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(S,{title:e.$t("transfer")},{right:(0,n.w5)((()=>[(0,n._)("div",{class:"exchange-head-right",onClick:t[0]||(t[0]=e=>A.toRouter("transferHis"))},c)])),_:1},8,["title"]),(0,n._)("section",l,[(0,n._)("article",r,[(0,n._)("dl",u,[(0,n._)("dt",null,(0,i.zw)(e.$t("from")),1),(0,n._)("dd",null,[(0,n._)("div",{class:"exchange-div",onClick:t[1]||(t[1]=e=>A.selectFrom(1))},[(0,n.Uk)((0,i.zw)(U.curFrom.title&&e.$t(U.curFrom.title))+" ",1),a])])]),h,(0,n._)("dl",p,[(0,n._)("dt",null,(0,i.zw)(e.$t("to")),1),(0,n._)("dd",null,[(0,n._)("div",{class:"exchange-div",onClick:t[2]||(t[2]=e=>A.selectFrom(2))},[(0,n.Uk)((0,i.zw)(U.curTo.title&&e.$t(U.curTo.title))+" ",1),d])])]),(0,n._)("dl",m,[(0,n._)("dt",null,(0,i.zw)(e.$t("coin")),1),(0,n._)("dd",null,[(0,n._)("div",{class:"exchange-div",onClick:t[3]||(t[3]=e=>A.showTsf())},[(0,n.Uk)((0,i.zw)(U.curCoin.coinCode)+" ",1),f])])]),(0,n._)("dl",y,[(0,n._)("dt",null,[(0,n.Uk)((0,i.zw)(e.$t("tsfAmount"))+" ",1),(0,n._)("p",null,[(0,n.Uk)((0,i.zw)(e.$t("available"))+": ",1),(0,n._)("span",null,(0,i.zw)(A.curCoinMoney)+" "+(0,i.zw)(e.getIsGuoJi?"USDT":"CNY"),1)])]),(0,n._)("dd",null,[(0,n.Wm)(D,{class:"exchange-input",maxlength:"25",type:"number",modelValue:U.money,"onUpdate:modelValue":t[4]||(t[4]=e=>U.money=e),modelModifiers:{trim:!0},placeholder:"Min 1 CNY"},null,8,["modelValue"]),(0,n._)("p",{class:"exchange-max",onClick:t[5]||(t[5]=e=>A.maxMoney())},(0,i.zw)(e.$t("max")),1)])]),(0,n._)("dl",g,[(0,n._)("dt",null,[(0,n.Uk)((0,i.zw)(e.$t("receiveAmount"))+" ",1),(0,n._)("section",null,[(0,n._)("p",null,[(0,n.Uk)((0,i.zw)(e.$t("refundFees"))+":",1),(0,n._)("span",null,(0,i.zw)(U.refund)+"%",1)])])]),(0,n._)("dd",null,[(0,n._)("div",_,(0,i.zw)(U.money&&+(U.money*U.refund/100).toFixed(2)),1)])])]),(0,n._)("article",C,[(0,n._)("button",{type:"button",onClick:t[6]||(t[6]=e=>A.sure())},(0,i.zw)(e.$t("transfer")),1)])]),(0,n.Wm)(B,{class:"exchange-popup","close-on-click-overlay":!0,show:U.isTsf,"onUpdate:show":t[7]||(t[7]=e=>U.isTsf=e),position:"bottom",style:{backgroundColor:"#ffffff"}},{default:(0,n.w5)((()=>[w,(0,n._)("div",x,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(U.selectList,((e,t)=>((0,n.wg)(),(0,n.iD)("dl",{key:t,onClick:t=>A.selectTsf(e)},[(0,n._)("dt",null,[(0,n.Uk)((0,i.zw)(e.coinCode)+" ",1),k]),(0,n.wy)((0,n._)("dd",null,null,512),[[o.F8,U.curCoin.id===e.id]])],8,T)))),128))])])),_:1},8,["show"]),(0,n.Wm)(B,{class:"exchange-popup","close-on-click-overlay":!0,show:U.isFrom,"onUpdate:show":t[8]||(t[8]=e=>U.isFrom=e),position:"bottom",style:{backgroundColor:"#ffffff"}},{default:(0,n.w5)((()=>[(0,n._)("h2",$,(0,i.zw)(e.$t("coin")),1),(0,n._)("div",v,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(U.tabTsf,((t,s)=>((0,n.wg)(),(0,n.iD)("dl",{key:s,onClick:e=>A.selectCoin(t)},[(0,n._)("dt",null,[(0,n.Uk)((0,i.zw)(e.$t(t.title))+" ",1),z])],8,F)))),128))])])),_:1},8,["show"])],64)}]])}}]);