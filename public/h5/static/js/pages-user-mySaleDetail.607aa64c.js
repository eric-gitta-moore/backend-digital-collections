(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-mySaleDetail"],{"2b76":function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAAXNSR0IArs4c6QAAAiRJREFUWEftmD1vE0EQht/ZO3CHFBokeoTSUoQK6JAooNuxLZeQgiKpQgdUUEHFhyigobDs7LqkxpCOFFDmHyAhF1GKSBjrbtAiBzmnM769+IQNO+3szjzz7uze6AhLZrRkvAjAVZ9YUDgonFHg/2qJbre7qpRqi8gqkXftXwDcYOYDnzbyzjIZ3BhjAGifhJm1uwCu+0CfFPgjgKsAXgHYLgpORBdE5CWA0wC8oOcCTET3tNZPiwK7dcaYWwCsL/RJgXcAXCkDnAO9wcwvZhVdGLjdbq/UarW1JEncMf4ypdQZETlFRIdpmn7PS+Z8zPx+Gogx5hOANSLa1Fo/nwtwp9M5H0XRZwDnZgXM84vIo3q9/iDPVwmwtfaOiLwGMCKi/aLQIhIDOOvWT4OuCnhDRJ65G83Mlz2AyVrrCr09DXqhgMeQx6AB3Gfmx0dFLxzwEXSv19sWEfeR2WHmawsN7OCstVsi8iQA510oa22pSzcZKyj8p6cqKBxeiUx/hJZYtpZQSr0Tka3xV3AFgBtR17XWb2bNKYXm4Xm3BIAPAB5OwH1LkuRSs9n8upDAcRyvj0ajiw4uiqIfw+Fwt9VqFRpb/4rCk8PPLEWz/n8eeA/AXV9Vxuvr473HxkvfWEUV1iLifprMwywzc9lAhYD7/X48GAzeArjpnqAyyUQERLSXpmmr0Wi4kyplhYBLRa5oUwCuSNjfYYPCQeGMAqElqm6Jn1X+8DxdPqDIAAAAAElFTkSuQmCC"},3963:function(t,a,e){"use strict";e.r(a);var i=e("787a"),o=e.n(i);for(var n in i)"default"!==n&&function(t){e.d(a,t,(function(){return i[t]}))}(n);a["default"]=o.a},"52bf":function(t,a,e){t.exports=e.p+"static/img/bj2.f97a4992.png"},6243:function(t,a,e){"use strict";var i=e("bbfc"),o=e.n(i);o.a},"787a":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={data:function(){return{goodsId:"",banner:{},info:{},msg:"",price:"",saleFlag:!1}},onLoad:function(t){this.goodsId=t.goodsId,this.getData()},onShow:function(){},methods:{openSalePopup:function(){this.saleFlag=!0,this.$refs.salePopup.open()},closeSalePopup:function(){this.price="",this.saleFlag=!1,this.$refs.salePopup.close()},modifyPrice:function(){var t=this;if(this.price){var a={id:this.goodsId,price:this.price};this.$http.post("order/checkPrice",a).then((function(a){1==a.code?(t.toast(a.msg),t.closeSalePopup(),setTimeout((function(){t.getData()}),600)):t.toast(a.msg)}))}else this.toast("请输入商品价格")},offSale:function(t){var a=this;this.saleFlag&&this.closeSalePopup(),this.msg="1"==t?"确认上架？":"确认下架？",this.confirm("提示",this.msg,(function(){var e={id:a.goodsId,is_show:t};a.$http.post("order/checkShow",e).then((function(t){1==t.code?(a.toast(t.msg),setTimeout((function(){a.getData()}),600)):a.toast(t.msg)}))}))},getData:function(){var t=this;this.$http.get("order/collectionDetail",{id:this.goodsId}).then((function(a){1==a.code&&(t.banner=a.data.images,t.info=a.data)}))}}};a.default=i},"7be3":function(t,a,e){t.exports=e.p+"static/img/b2.a1ea860b.png"},9436:function(t,a,e){var i=e("24fb"),o=e("1de5"),n=e("f89c"),s=e("f357"),r=e("52bf");a=i(!1);var c=o(n),f=o(s),d=o(r);a.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 颜色变量 */\n/*  常用字体颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-textarea[data-v-91aafb8a]{background-color:#f8f8f8;width:%?650?%;height:%?130?%;display:block;position:relative;font-size:%?28?%;line-height:normal;white-space:pre-wrap;word-break:break-all;padding:%?20?%;color:#777;border-radius:%?10?%}@-webkit-keyframes myfirst-data-v-91aafb8a{0%{-webkit-transform:rotatey(0deg);transform:rotatey(0deg)}25%{-webkit-transform:rotatey(90deg);transform:rotatey(90deg)}50%{-webkit-transform:rotatey(180deg);transform:rotatey(180deg)}75%{-webkit-transform:rotatey(270deg);transform:rotatey(270deg)}100%{-webkit-transform:rotatey(1turn);transform:rotatey(1turn)}}@keyframes myfirst-data-v-91aafb8a{0%{-webkit-transform:rotatey(0deg);transform:rotatey(0deg)}25%{-webkit-transform:rotatey(90deg);transform:rotatey(90deg)}50%{-webkit-transform:rotatey(180deg);transform:rotatey(180deg)}75%{-webkit-transform:rotatey(270deg);transform:rotatey(270deg)}100%{-webkit-transform:rotatey(1turn);transform:rotatey(1turn)}}.content[data-v-91aafb8a]{padding-bottom:%?200?%}.content .bigbox[data-v-91aafb8a]{background:url('+c+") no-repeat 0 0;background-size:100%;background-color:#000}.content .Box[data-v-91aafb8a]{width:100%;height:%?680?%;padding-bottom:%?50?%;background:url("+f+") no-repeat 0 0;background-size:100%;display:flex;flex-direction:column;justify-content:flex-end;align-items:center;perspective:1000;-webkit-perspective:1000}.content .Box .rotateBox[data-v-91aafb8a]{width:%?540?%;height:%?540?%;-webkit-animation:myfirst-data-v-91aafb8a 10s linear .15s 100;animation:myfirst-data-v-91aafb8a 10s linear .15s 100}.content .Box .rotateBox .image[data-v-91aafb8a]{width:%?540?%;height:%?540?%}.content .Box1[data-v-91aafb8a]{width:100%;height:%?360?%;margin-top:%?-120?%;padding-bottom:%?30?%;background:url("+d+") no-repeat top;background-size:%?620?%;display:flex;justify-content:center;align-items:flex-end}.content .Box1 .img[data-v-91aafb8a]{width:%?84?%;height:%?152?%;margin:0 %?15?%}.content .Box1 .center[data-v-91aafb8a]{max-width:%?500?%;height:%?152?%;display:flex;flex-direction:column;justify-content:space-around;align-items:center}.content .Box1 .center .goodsName[data-v-91aafb8a]{color:#fff;font-size:%?30?%;text-align:center;overflow:hidden;word-break:break-all;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}.content .Box1 .center .LimitBox[data-v-91aafb8a]{height:%?40?%;line-height:%?40?%;background:#4c464a;border-radius:%?6?%;font-size:12px;text-align:center}.content .Box1 .center .LimitBox .Limit[data-v-91aafb8a]{width:%?60?%;padding:0 %?10?%;border-radius:%?6?%;color:#010101;background-color:#f1e2bc}.content .Box1 .center .LimitBox .stock[data-v-91aafb8a]{padding:0 %?10?%;color:#f1e2bc}.content .specs_boxs[data-v-91aafb8a]{padding:%?50?% 0 %?10?%;width:%?600?%;background:#fff;border-radius:%?12?%;margin:0 auto}.content .specs_boxs .ipt[data-v-91aafb8a]{flex:1;height:%?100?%;line-height:%?100?%;font-size:%?28?%;font-weight:500;color:#333;background-color:#f7f7f7;padding-left:%?30?%;margin:0 %?30?%}.content .specs_boxs .iptP[data-v-91aafb8a]{color:#777;font-weight:400}.content .specs_boxs .btnBox[data-v-91aafb8a]{margin-top:%?20?%}.content .specs_boxs .btnBox .btn[data-v-91aafb8a]{flex:1;height:%?80?%;line-height:%?80?%;text-align:center;font-size:%?30?%}.content .specs_boxs .btnBox .btn1[data-v-91aafb8a]{color:#427afc}.content .banner[data-v-91aafb8a]{width:100%;height:%?500?%;background-color:#23272c}.content .banner .uni-swiper-wrapper[data-v-91aafb8a]{z-index:10}.content .banner uni-image[data-v-91aafb8a]{width:100%;height:%?500?%}.content .msgBox[data-v-91aafb8a]{background-color:#fff;padding:%?30?%}.content .msgBox .goodsName[data-v-91aafb8a]{color:#000;font-size:%?36?%;font-weight:500;margin-bottom:%?20?%}.content .msgBox .describe[data-v-91aafb8a]{color:#aaa;font-size:%?24?%;line-height:%?36?%;font-weight:500;margin-top:%?20?%}.content .msgBox .priceBox[data-v-91aafb8a]{color:#000;font-size:%?24?%;font-weight:500}.content .msgBox .priceBox uni-text[data-v-91aafb8a]{font-weight:500;font-size:%?36?%;margin-left:%?10?%}.content .descBox[data-v-91aafb8a]{padding:%?20?% %?30?%;background-color:#fff;color:#aaa}.content .descBox .item[data-v-91aafb8a]{font-size:%?26?%;font-weight:500;color:#000;margin-bottom:%?10?%}.content .goodsinfo[data-v-91aafb8a]{padding:0 %?30?%;background-color:#fff;margin:%?20?% 0}.content .goodsinfo .iptBox[data-v-91aafb8a]{padding:%?20?% 0;border-bottom:%?1?% solid #f0f0f0}.content .goodsinfo .iptBox .label[data-v-91aafb8a]{width:20%;font-size:%?24?%;color:#000}.content .goodsinfo .iptBox .center[data-v-91aafb8a]{width:75%;color:#000;font-size:%?24?%;line-height:%?44?%;word-break:break-word;display:block;position:relative}.content .goodsinfo .iptBox .copy[data-v-91aafb8a]{width:%?44?%;height:%?44?%;position:absolute;bottom:0;right:0}.content .goodsinfo .iptBox1 .center[data-v-91aafb8a]{color:#000;font-weight:500}.content .footerBox[data-v-91aafb8a]{position:fixed;left:0;bottom:0;z-index:10;width:100%;height:%?120?%;background-color:#fff;box-shadow:%?0?% %?-4?% %?32?% %?0?% hsla(0,0%,70.6%,.5)}.content .footerBox .subBtn[data-v-91aafb8a]{width:%?320?%;height:%?88?%;line-height:%?88?%;text-align:center;color:#fff;font-size:%?32?%;font-weight:500;background:#00db7d;border-radius:%?44?%;margin:0 %?30?%}.content .footerBox .subBtn1[data-v-91aafb8a]{background:#fff;color:#00db7d;border:%?2?% solid #00db7d}",""]),t.exports=a},a374:function(t,a,e){"use strict";e.d(a,"b",(function(){return o})),e.d(a,"c",(function(){return n})),e.d(a,"a",(function(){return i}));var i={uniPopup:e("2745").default},o=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"bigbox"},[i("v-uni-view",{staticClass:"Box"},[i("v-uni-view",{staticClass:"rotateBox",style:"background-image: url("+t.info.image+");background-size: 100% 100%"},[i("v-uni-image",{staticClass:"image",attrs:{src:e("66b5")}})],1)],1),i("v-uni-view",{staticClass:"Box1"},[i("v-uni-image",{staticClass:"img",attrs:{src:e("fe16"),mode:""}}),i("v-uni-view",{staticClass:"center"},[i("v-uni-view",{staticClass:"goodsName"},[t._v(t._s(t.info.name))]),i("v-uni-view",{staticClass:"flexBox LimitBox"},[i("v-uni-view",{staticClass:"Limit"},[t._v("限量")]),i("v-uni-view",{staticClass:"stock"},[t._v(t._s(t.info.surplus)+"份")])],1)],1),i("v-uni-image",{staticClass:"img",attrs:{src:e("7be3"),mode:""}})],1)],1),i("v-uni-view",{staticClass:"msgBox"},[i("v-uni-view",{staticClass:"priceBox"},[t._v("当前价:"),i("v-uni-text",[t._v("¥"+t._s(t.info.price))])],1),i("v-uni-view",{staticClass:"describe"},[t._v(t._s(t.info.title))])],1),i("v-uni-view",{staticClass:"goodsinfo"},[i("v-uni-view",{staticClass:"iptBox  flexBox"},[i("v-uni-view",{staticClass:"label"},[t._v("创作者")]),i("v-uni-view",{staticClass:"center"},[t._v(t._s(t.info.creator))])],1),i("v-uni-view",{staticClass:"iptBox flexBox"},[i("v-uni-view",{staticClass:"label"},[t._v("拥有者")]),i("v-uni-view",{staticClass:"center"},[i("v-uni-text",[t._v(t._s(t.info.owner))]),i("v-uni-image",{staticClass:"copy",attrs:{src:e("2b76"),mode:""},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.copy(t.info.owner)}}})],1)],1),i("v-uni-view",{staticClass:"iptBox iptBox1 flexBox"},[i("v-uni-view",{staticClass:"label"},[t._v("铸造平台")]),i("v-uni-view",{staticClass:"center"},[t._v(t._s(t.info.casting_name))])],1),i("v-uni-view",{staticClass:"iptBox iptBox1 flexBox"},[i("v-uni-view",{staticClass:"label"},[t._v("铸造时间")]),i("v-uni-view",{staticClass:"center"},[t._v(t._s(t.info.casting_time))])],1),t.info.number?i("v-uni-view",{staticClass:"iptBox iptBox1"},[i("v-uni-view",{staticClass:"label"},[t._v("藏品编号")]),i("v-uni-view",{staticClass:"center"},[t._v(t._s(t.info.number))])],1):t._e()],1),t.info.content?i("v-uni-view",{staticClass:"descBox"},[i("v-uni-view",{staticClass:"item"},[t._v("藏品介绍")]),i("v-uni-view",{staticClass:"desinfo",domProps:{innerHTML:t._s(t.util.checkImg(t.info.content))}})],1):t._e(),i("v-uni-view",{staticClass:"footerBox flex_bt"},[i("v-uni-view",{staticClass:"subBtn subBtn1",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.openSalePopup()}}},[t._v("修改信息")]),2==t.info.status&&1==t.info.is_show?i("v-uni-view",{staticClass:"subBtn",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.offSale("0")}}},[t._v("下 架")]):t._e(),2==t.info.status&&0==t.info.is_show?i("v-uni-view",{staticClass:"subBtn subBtn1",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.offSale("1")}}},[t._v("上 架")]):t._e()],1),i("uni-popup",{ref:"salePopup",attrs:{type:"center","mask-click":!1}},[i("v-uni-view",{staticClass:"specs_boxs"},[i("v-uni-view",{staticClass:"flex"},[i("v-uni-input",{staticClass:"ipt",attrs:{type:"digit","placeholder-class":"iptP",placeholder:"请输入商品价格"},model:{value:t.price,callback:function(a){t.price=a},expression:"price"}})],1),i("v-uni-view",{staticClass:"btnBox flex"},[i("v-uni-view",{staticClass:"btn",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.closeSalePopup()}}},[t._v("取消")]),i("v-uni-view",{staticClass:"btn btn1",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.modifyPrice()}}},[t._v("确定")])],1)],1)],1)],1)},n=[]},bbfc:function(t,a,e){var i=e("9436");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=e("4f06").default;o("62f91586",i,!0,{sourceMap:!1,shadowMode:!1})},ef5b:function(t,a,e){"use strict";e.r(a);var i=e("a374"),o=e("3963");for(var n in o)"default"!==n&&function(t){e.d(a,t,(function(){return o[t]}))}(n);e("6243");var s,r=e("f0c5"),c=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"91aafb8a",null,!1,i["a"],s);a["default"]=c.exports},f89c:function(t,a,e){t.exports=e.p+"static/img/bg.0b0dc05b.jpg"},fe16:function(t,a,e){t.exports=e.p+"static/img/b1.b9ddb0cd.png"}}]);