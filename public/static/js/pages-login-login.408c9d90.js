(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-login"],{3252:function(t,n,o){var i=o("76d4");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var e=o("4f06").default;e("01980430",i,!0,{sourceMap:!1,shadowMode:!1})},3386:function(t,n,o){"use strict";var i=o("3252"),e=o.n(i);e.a},3470:function(t,n,o){"use strict";o.r(n);var i=o("727f"),e=o("75f5");for(var a in e)"default"!==a&&function(t){o.d(n,t,(function(){return e[t]}))}(a);o("cf75"),o("3386");var s,c=o("f0c5"),r=Object(c["a"])(e["default"],i["b"],i["c"],!1,null,"74726628",null,!1,i["a"],s);n["default"]=r.exports},6076:function(t,n,o){t.exports=o.p+"static/img/login-logo.e177e726.png"},"6ee5":function(t,n,o){var i=o("24fb");n=i(!1),n.push([t.i,"uni-page-body[data-v-74726628]{background-color:#23272c}body.?%PAGE?%[data-v-74726628]{background-color:#23272c}",""]),t.exports=n},"727f":function(t,n,o){"use strict";var i;o.d(n,"b",(function(){return e})),o.d(n,"c",(function(){return a})),o.d(n,"a",(function(){return i}));var e=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("v-uni-view",{staticClass:"content"},[i("v-uni-image",{staticClass:"login-logo",attrs:{src:o("6076"),mode:""}}),i("v-uni-view",{staticClass:"titleBox"},[t._v("甄选·珍品·真价值")]),i("v-uni-view",{staticClass:"formBox"},[i("v-uni-view",{staticClass:"tabBox flexBox"},[i("v-uni-view",{class:"1"==t.showType?"tab act":"tab",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.reload(1)}}},[t._v("密码登录")]),i("v-uni-view",{staticClass:"line"}),i("v-uni-view",{class:"2"==t.showType?"tab act":"tab",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.reload(2)}}},[t._v("验证码登录")])],1),"1"==t.showType?[i("v-uni-view",{staticClass:"iptItem"},[i("v-uni-view",{staticClass:"iptBox flexBox"},[i("v-uni-input",{staticClass:"ipt",attrs:{maxlength:"11",type:"number",placeholder:"请输入手机号","placeholder-class":"iptP"},model:{value:t.mobile,callback:function(n){t.mobile=n},expression:"mobile"}})],1)],1),i("v-uni-view",{staticClass:"iptItem iptItem1"},[t.flag?t._e():i("v-uni-view",{staticClass:"iptBox flexBox"},[i("v-uni-input",{staticClass:"ipt",attrs:{type:"password",placeholder:"请输入登录密码","placeholder-class":"iptP"},model:{value:t.password,callback:function(n){t.password=n},expression:"password"}}),i("v-uni-image",{staticClass:"rightIcon",attrs:{src:o("c96a"),mode:""},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.flag=!t.flag}}})],1),t.flag?i("v-uni-view",{staticClass:"iptBox flexBox"},[i("v-uni-input",{staticClass:"ipt",attrs:{type:"text",placeholder:"请输入登录密码","placeholder-class":"iptP"},model:{value:t.password,callback:function(n){t.password=n},expression:"password"}}),i("v-uni-image",{staticClass:"rightIcon",attrs:{src:o("a442"),mode:""},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.flag=!t.flag}}})],1):t._e()],1),i("v-uni-view",{staticClass:"findpsd flex"},[i("v-uni-view",{on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.go("findPsd")}}},[t._v("忘记密码")])],1),i("v-uni-view",{staticClass:"subBtn",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.Passwordlogin.apply(void 0,arguments)}}},[t._v("立即登录")]),i("v-uni-view",{staticClass:"subBtn1",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.go("reg")}}},[t._v("新用户注册")])]:t._e(),"2"==t.showType?[i("v-uni-view",{staticClass:"iptItem"},[i("v-uni-view",{staticClass:"iptBox flexBox"},[i("v-uni-input",{staticClass:"ipt",attrs:{maxlength:"11",type:"number",placeholder:"请输入手机号","placeholder-class":"iptP"},model:{value:t.mobile1,callback:function(n){t.mobile1=n},expression:"mobile1"}})],1)],1),i("v-uni-view",{staticClass:"iptItem iptItem1"},[i("v-uni-view",{staticClass:"iptBox flexBox"},[i("v-uni-text",{}),i("v-uni-input",{staticClass:"ipt",attrs:{type:"number",placeholder:"请输入验证码","placeholder-class":"iptP"},model:{value:t.code,callback:function(n){t.code=n},expression:"code"}}),i("v-uni-view",{staticClass:"codeBtn",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.getCode.apply(void 0,arguments)}}},[t._v(t._s(t.btnMsg))])],1)],1),i("v-uni-view",{staticClass:"findpsd flex"}),i("v-uni-view",{staticClass:"subBtn",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.Codelogin.apply(void 0,arguments)}}},[t._v("立即登录")]),i("v-uni-view",{staticClass:"subBtn1",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.go("reg")}}},[t._v("新用户注册")])]:t._e()],2)],1)},a=[]},"75f5":function(t,n,o){"use strict";o.r(n);var i=o("ac4e"),e=o.n(i);for(var a in i)"default"!==a&&function(t){o.d(n,t,(function(){return i[t]}))}(a);n["default"]=e.a},"76d4":function(t,n,o){var i=o("24fb"),e=o("1de5"),a=o("9db8");n=i(!1);var s=e(a);n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 颜色变量 */\r\n/*  常用字体颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-textarea[data-v-74726628]{background-color:#f8f8f8;width:%?650?%;height:%?130?%;display:block;position:relative;font-size:%?28?%;line-height:normal;white-space:pre-wrap;word-break:break-all;padding:%?20?%;color:#777;border-radius:%?10?%}uni-page-body[data-v-74726628]{height:100%;background-image:url('+s+");background-size:100% auto;background-repeat:no-repeat}.content[data-v-74726628]{\r\n  /* padding: 0 0 200rpx; */\r\n  /* margin-bottom: 200rpx; */overflow:hidden;position:relative}.content .login-logo[data-v-74726628]{display:block;width:%?214?%;height:%?162?%;margin:0 auto;margin-top:%?60?%;overflow:hidden}.content .titleBox[data-v-74726628]{margin-top:%?40?%;width:100%;font-size:%?46?%;font-family:Microsoft YaHei;font-weight:700;color:#999;text-align:center}.content .formBox[data-v-74726628]{width:%?670?%;padding:0 %?30?%}.content .formBox .tabBox[data-v-74726628]{margin-top:%?20?%;height:%?100?%;line-height:%?100?%}.content .formBox .tabBox .tab[data-v-74726628]{text-align:center;font-size:%?28?%;color:#aaa}.content .formBox .tabBox .line[data-v-74726628]{width:%?2?%;height:%?36?%;margin:0 %?30?%;background-color:#eee}.content .formBox .tabBox .act[data-v-74726628]{color:#fff1ac}.content .formBox .iptItem .iptBox[data-v-74726628]{padding:0 %?30?%;height:%?112?%;font-size:%?32?%;border-bottom:%?1?% solid #58584a}.content .formBox .iptItem .iptBox .left[data-v-74726628]{color:#aaa;margin-right:%?40?%}.content .formBox .iptItem .iptBox .ipt[data-v-74726628]{flex:1;height:100%;font-size:%?32?%;font-weight:500;color:#aaa}.content .formBox .iptItem .iptBox .codeBtn[data-v-74726628]{width:%?220?%;height:%?68?%;line-height:%?68?%;text-align:center;border-radius:%?34?%;font-size:%?30?%;font-weight:500;color:#fff1ac}.content .formBox .iptItem .iptBox .rightIcon[data-v-74726628]{width:%?48?%;height:%?48?%;padding:%?10?%}.content .formBox .iptItem1[data-v-74726628]{margin-bottom:%?0?%}.content .formBox .findpsd[data-v-74726628]{height:%?60?%;line-height:%?60?%;justify-content:flex-end;color:#777;font-size:%?28?%}.content .psdBox[data-v-74726628]{width:100%;position:absolute;left:0;bottom:%?50?%}.content .psdBox .rememberIcon[data-v-74726628]{width:%?44?%;height:%?44?%;padding:%?20?%}.content .psdBox .remeberBox[data-v-74726628]{color:#777;font-size:%?24?%;font-weight:400}.content .subBtn[data-v-74726628]{width:100%;height:%?100?%;line-height:%?100?%;text-align:center;border-radius:%?50?%;color:#000;font-size:%?32?%;font-weight:500;margin-top:%?30?%;background:#fff1ac;box-shadow:%?0?% %?8?% %?40?% %?0?% rgba(174,53,35,.4)}.content .subBtn1[data-v-74726628]{width:%?600?%;text-align:center;color:#777;font-size:%?32?%;font-weight:500;margin:%?40?% auto 0}.content .loginBox[data-v-74726628]{position:absolute;left:0;bottom:%?50?%;width:100%;height:%?60?%;line-height:%?60?%;font-size:%?24?%;color:#aaa}.content .loginBox uni-text[data-v-74726628]{color:#ae3523}body.?%PAGE?%[data-v-74726628]{background-image:url("+s+");background-size:100% auto;background-repeat:no-repeat}",""]),t.exports=n},"8ab6":function(t,n,o){var i=o("6ee5");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var e=o("4f06").default;e("85b27032",i,!0,{sourceMap:!1,shadowMode:!1})},"9db8":function(t,n,o){t.exports=o.p+"static/img/login-bg.ac0c0e28.png"},a442:function(t,n){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAyFJREFUaEPtWD1oFEEU/t6eGvZIJJcmXRoro6ioaKsBBUHRwsZCm0ggRlBCvNnTZhq9nVWDgj8QTKOFjYWiICgkliIqUWJS2dilyYUk3JHo7QsTbsMhd/uTJZiV3Xa+9+Z973v75s0QEv5RwuNHSuBfK5gqkCoQMwNpCcVMYGzzVIFaCsmyrH0AjjPzfmbuJqJOANtr6/PMPENEU0T0FcA727YnAHBcCWIpIKVsL5fL/UTUC2BHxGB+MvNoNpt9LKWci2i7Bl8Xgb6+vq0dHR2DrutaRNS+3s21HTPPGYZhz87ODo+MjPyO6isygUKh0F2tVp8T0Z6om/nhmfl7JpM5VywWp6L4jUQgn8+fIaJnAFqjbBIBu8jM5x3HeRnWJjQBIcQFAKMAtoR1vk7cHwC9SqmnYexDERBCnAbwIkzwzDxJRE8Mw3jf0tLySwextLTU5bruMWa+SES7QwSmSZxVSr0KwgYS0DXvuu5HAG0BzpYBDJqmqbuK2wgrpTQqlUo/gGEA2wL8LTDzYcdxpv1wvgR0t8nlcp8A6B7v9y0T0QnbtseCMqbXLcvqYea3IUhMlEqlQ37dyZeAEGIIwO0QQV1WSj30cIVC4WS1Wh0kooO1Vvk5k8kMF4vFNx5GCDEA4EEI39eUUnea4ZoSkFK2VioVXcO5gPY3mc1m93plI4S4CeB6E5tbSqkbek2XU7lc/hbinyiZptklpVxs5LMpAcuyLjHzWlZ9SFxVSt3X6zrzruu+9iNsGMYpTwkhxBUA94JUIKIB27YfRSIghBgHcCTIuWEYu7zDJ5/PjxHR0QDFxh3H6akR1g3iR9AeAD4opRr6baqAEGI+ROeBaZptnrwhbRaUUqtDXq1MF0IQWLP5G/tfE0h2CSX+J058G9U/y2Y4yIhoyLbtu5EPMm2Q+FGirlcnc5irm1uSO07XkUjuhcYjkegrZd2onNxLvUci0c8q9f04sQ9bDQ6V+qfFA0S0E0AnM69OnUSkJ9sZZp4moi+b5mkxxBi84ZDAV4kNjyDmBimBmAmMbZ4qEDuFMR2kCsRMYGzzVIHYKYzpYAUl9OpATOWOKAAAAABJRU5ErkJggg=="},ac4e:function(t,n,o){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={data:function(){return{showType:1,btnMsg:"获取验证码",mobile:"",password:"",mobile1:"",code:"",flag:!1,tim:""}},onLoad:function(){},methods:{weixinLogin:function(){var n=this;uni.login({provider:"weixin",success:function(t){n.$http.post("login/wxAuth",{wx_open_id:t.authResult.openid,wx_union_id:t.authResult.unionid}).then((function(t){1==t.code?(n.toast(t.msg),uni.setStorageSync("app_token",t.data.app_token),n.getMemInfo(),setTimeout((function(){uni.reLaunch({url:"../index/index"})}),1e3)):n.toast(t.msg)}))},fail:function(n){t("log",n," at pages/login/login.vue:114")}})},reload:function(t){this.showType!=t&&(this.showType=t,this.mobile="",this.password="",this.mobile1="",this.code="")},getCode:function(){var t=this;""==this.tim&&(this.mobile1?this.$http.post("login/sendCode",{phone:this.mobile1,type:"3"}).then((function(n){if(1==n.code){t.toast(n.msg),t.tim=60;var o=setInterval((function(){t.tim>0?(t.btnMsg=t.tim+"s后重新获取",t.tim--):(t.btnMsg="获取验证码",t.tim="",clearInterval(o))}),1e3)}else t.toast(n.msg)})):this.toast("请输入正确的手机号码"))},Passwordlogin:function(){var t=this;this.mobile?this.password?this.$http.post("login/login/",{phone:this.mobile,password:this.password}).then((function(n){1==n.code?(t.toast(n.msg),uni.setStorageSync("app_token",n.data.app_token),t.getMemInfo(),setTimeout((function(){uni.reLaunch({url:"../index/index"})}),1e3)):t.toast(n.msg)})):this.toast("请输入登录密码"):this.toast("请输入正确的手机号码")},Codelogin:function(){var t=this;this.mobile1?this.code?this.$http.post("login/codeLogin",{phone:this.mobile1,code:this.code}).then((function(n){1==n.code?(t.toast(n.msg),uni.setStorageSync("app_token",n.data.app_token),t.getMemInfo(),setTimeout((function(){uni.reLaunch({url:"../index/index"})}),1e3)):t.toast(n.msg)})):this.toast("请输入验证码"):this.toast("请输入正确的手机号码")},getMemInfo:function(){this.$http.get("user/userInfo").then((function(t){1==t.code&&(uni.setStorageSync("phone",t.data.phone),uni.setStorageSync("wx_auth",t.data.wx_small_auth))}))}}};n.default=o}).call(this,o("0de9")["log"])},c96a:function(t,n){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAA4pJREFUaEPtV0uIHEUY/v5qJ9qzq6vrxRwCinoxHnwgKlGQiIKCSyDm4CGewhJvWdneql4RS4nTXd1C8GRYcjIH8XVYBQ8+8KBBRXwcgggqCjnEi67Pac3Y9UtJB2TZnemZ6kVWeqBPXd/X3+PvvxnCNv/RNteP1sB/3WDbQNuAZwLtCHkG6A1vG/CO0JOgbcAzQG9424B3hJ4EbQOeAXrD/78NLC4uTk1PT5da6z+8Y/IgWFhYCGdmZkhr3d+IZtMGpJRfA+haa+/P8/xzDw0TQ6MoukEI8QaAvjHmmrEMKKVWmXkOwM/M/HCWZa9NrGQCoJTyAQAnAcwAWDXG7BvLwPz8fGd2dvaEEw+AAZwQQsRJkvwwgZ7akDiOL7fWJgAOAf/85X1+bW3t0MrKymAsA+cPx3F8xFr7tBsnAD8x8zNBEBxv2ogTXpblYSJaBHCpGxtmfizLsmerADcModYWiqLoWiHERwAuq1gKAC8DeCUMw7cmfdG11hcVRXEPgAcBHAAQVvxr1tpb8zz/alR1tQxIKY8BOOJSAfAegLsBXFCR/w7gYwAfEtFpZv52MBicsdb+2u/33T10u90pIcTFnU5nFxFdxczXA7gNwC0ApiqevwC8A+DOqu1jxphHvQ0opY66KgH8SURzaZq+uby8vLMsy4NVcjf+y8yo562/70R/5poMguBkr9c7q5S6l5ndwrgQwFFjzOPDSIc2IKVcAmAAuBfogDFmdT2Z1nq6KIo9RPQEM98O4HsALvlLqstBfqkul/YVzPwBET0ZhuEprfVv6zmXlpb2EdFLADoApDEm28zEKANuZHYQ0cE0TV8YlkT13bg6CIK9vV7v3Y3OKqX2MrMbk2822+vncUqph5jZrdFzxhi3QMZ/iaWU9xHRIE3Tt4eJj6JojxDifWY+0+12r9Ra243Oa61Fv9//joh2WWvvyPP81DBepdRd1togyzJnenwDdQdaKfUcMx8GkBpj4hFNuR2viOh4mqaP1H3GlhnQWu8oiuIsgFkhxO4kSb4YYWA3gNMAfgzDcKfW+pyPiVprdIQg98l3W+NTY8zNdcRIKT8BcBOAOWPM63UwW9ZAHMfXlWX5ohBCp2n6ah0xSqn9AJ4iov1JknxZB7NlBnwe3gTWe4SaEOHD0RrwSa8JbNtAEyn6cLQN+KTXBLZtoIkUfTjaBnzSawLbNtBEij4c276BvwGLjTJAeah8QwAAAABJRU5ErkJggg=="},cf75:function(t,n,o){"use strict";var i=o("8ab6"),e=o.n(i);e.a}}]);