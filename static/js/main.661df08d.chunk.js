(this.webpackJsonpcards=this.webpackJsonpcards||[]).push([[0],{12:function(e,t,n){e.exports={navbar:"Navbar_navbar__UjdbE",active:"Navbar_active__1NE7j"}},21:function(e,t,n){e.exports={error:"ErrorPage_error__2qfsS",emoji:"ErrorPage_emoji__3NBoI"}},3:function(e,t,n){e.exports={title:"SignUp_title__1Ph07",form:"SignUp_form__t8X5o",info:"SignUp_info__NtZEq",link:"SignUp_link__oxnWG"}},32:function(e,t,n){e.exports={elements:"TestPage_elements__2HAji"}},41:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var r,c=n(1),s=n(16),a=n.n(s),i=n(6),j=(n(41),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,64)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),s(e),a(e)}))}),o=n(5),l=n(2);!function(e){e.HOME="/",e.PROFILE="/profile",e.PACKS="/packs",e.LOGIN="/login",e.SIGN_UP="/signup",e.PASSWORD_RECOVERY="/password-recovery",e.CHECK_EMAIL="/password-on-email",e.NEW_PASSWORD="/enter-new-password",e.NEW_PASSWORD_WITH_TOKEN="/enter-new-password/:token",e.TEST_PAGE="/super-components",e.ERROR="/404"}(r||(r={}));var b=n(3),u=n.n(b),d=n(0),O=function(){var e=Object(i.c)((function(e){return e.auth.restoreEmail}));return Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{className:u.a.title,children:"Check Email"}),Object(d.jsxs)("p",{children:["We\u2019ve sent an Email with instructions to ",e]})]})},h=n(4),m=n(8),x=n(13),p=n(11),f=n.n(p),v=n(31),E=n.n(v).a.create({baseURL:"https://neko-back.herokuapp.com/2.0",withCredentials:!0}),g=function(e){return E.post("/auth/register",e)},S=function(e){return E.post("/auth/login",e)},_=function(e){return E.post("auth/forgot",e)},w=function(e){return{email:e,from:"cards-admin <wadik.nhl@gmail.com>",message:'<div style="background-color: lightcyan; padding: 15px">\n                  Password recovery link: \n                  <a href=\''.concat("https://vadzimka0.github.io/cards-team/#/enter-new-password/$token$","'>link</a>\n              </div>\n              ")}},N={isRegisterSuccess:!1,isLoggedIn:!1,userInfo:null,restoreEmail:"",isEmailSent:!1,isPasswordChanged:!1},P=function(e){return{type:"AUTH/SET_REGISTER_SUCCESS",payload:{isRegisterSuccess:e}}},T=function(e){return{type:"AUTH/SET_IS_EMAIL_SENT",payload:{isEmailSent:e}}},R=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.auth.isLoggedIn})),n=Object(c.useState)({email:"",password:"",rememberMe:!1}),s=Object(m.a)(n,2),a=s[0],j=s[1];return t?Object(d.jsx)(l.a,{to:r.PROFILE}):Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{className:u.a.title,children:"Sign In"}),Object(d.jsxs)("form",{onSubmit:function(t){var n;t.preventDefault(),e((n=Object(h.a)({},a),function(){var e=Object(x.a)(f.a.mark((function e(t){var r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S(n);case 3:r=e.sent,t({type:"AUTH/SET_USER_INFO",payload:{userInfo:r.data}}),t({type:"AUTH/SET_IS_LOGGED_IN",payload:{isLoggedIn:!0}}),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:return e.prev=10,e.finish(10);case 12:case"end":return e.stop()}}),e,null,[[0,8,10,12]])})));return function(t){return e.apply(this,arguments)}}()))},className:u.a.form,children:[Object(d.jsxs)("label",{htmlFor:"loginEmail",children:[Object(d.jsx)("div",{children:"E-mail:"}),Object(d.jsx)("input",{id:"loginEmail",type:"email",value:a.email,onChange:function(e){return j(Object(h.a)(Object(h.a)({},a),{},{email:e.currentTarget.value}))}})]}),Object(d.jsxs)("label",{htmlFor:"loginPassword",children:[Object(d.jsx)("div",{children:"Password:"}),Object(d.jsx)("input",{id:"loginPassword",type:"password",autoComplete:"on",value:a.password,onChange:function(e){return j(Object(h.a)(Object(h.a)({},a),{},{password:e.currentTarget.value}))}})]}),Object(d.jsxs)("label",{htmlFor:"loginRememberMe",children:[Object(d.jsx)("input",{id:"loginRememberMe",type:"checkbox",checked:a.rememberMe,onChange:function(e){return j(Object(h.a)(Object(h.a)({},a),{},{rememberMe:e.currentTarget.checked}))}}),Object(d.jsx)("span",{children:"remember me"})]}),Object(d.jsx)("button",{type:"submit",children:"Login"})]}),Object(d.jsxs)("div",{className:u.a.info,children:[Object(d.jsx)(o.b,{className:u.a.link,to:r.PASSWORD_RECOVERY,children:"Forgot Password"}),Object(d.jsx)("div",{children:"Don\u2019t have an account?"}),Object(d.jsx)(o.b,{className:u.a.link,to:r.SIGN_UP,children:"Sign Up"})]})]})},I=function(){var e=Object(c.useState)(""),t=Object(m.a)(e,2),n=t[0],r=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsxs)("h3",{className:u.a.title,children:["Create",Object(d.jsx)("br",{})," new password"]}),Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault()},className:u.a.form,children:[Object(d.jsxs)("label",{htmlFor:"newPassword",children:[Object(d.jsx)("div",{children:"Password:"}),Object(d.jsx)("input",{id:"newPassword",type:"password",autoComplete:"on",value:n,onChange:function(e){return r(e.currentTarget.value)}})]}),Object(d.jsxs)("p",{children:["Create new password and we will",Object(d.jsx)("br",{})," send you further instructions to email"]}),Object(d.jsx)("button",{type:"submit",children:"Create new password"})]})]})},y=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.auth.isEmailSent})),n=Object(c.useState)(""),s=Object(m.a)(n,2),a=s[0],j=s[1];return t?Object(d.jsx)(l.a,{to:r.CHECK_EMAIL}):Object(d.jsxs)("div",{children:[Object(d.jsxs)("h4",{className:u.a.title,children:["Forgot your",Object(d.jsx)("br",{}),"password?"]}),Object(d.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(function(e){return function(){var t=Object(x.a)(f.a.mark((function t(n){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,_(w(e));case 3:n(T(!0)),n({type:"AUTH/SET_RESTORE_EMAIL",payload:{restoreEmail:e}}),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:return t.prev=9,n(T(!1)),t.finish(9);case 12:case"end":return t.stop()}}),t,null,[[0,7,9,12]])})));return function(e){return t.apply(this,arguments)}}()}(a))},className:u.a.form,children:[Object(d.jsxs)("label",{htmlFor:"restoreEmail",children:[Object(d.jsx)("div",{children:"E-mail:"}),Object(d.jsx)("input",{id:"restoreEmail",type:"email",value:a,onChange:function(e){return j(e.currentTarget.value)}})]}),Object(d.jsxs)("div",{children:["Enter your email address and",Object(d.jsx)("br",{}),"we will send you further instructions"]}),Object(d.jsx)("button",{type:"submit",children:"Create new password"})]}),Object(d.jsxs)("div",{className:u.a.info,children:[Object(d.jsx)("div",{children:"Did you remember your password?"}),Object(d.jsx)(o.b,{className:u.a.link,to:r.LOGIN,children:"Try logging in"})]})]})},C=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.auth.isRegisterSuccess})),n=Object(c.useState)({email:"",password:"",confirmPassword:""}),s=Object(m.a)(n,2),a=s[0],j=s[1];return t?Object(d.jsx)(l.a,{to:r.LOGIN}):Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{className:u.a.title,children:"Sign Up"}),Object(d.jsxs)("form",{onSubmit:function(t){var n;t.preventDefault(),a.password===a.confirmPassword&&e((n={email:a.email,password:a.password},function(){var e=Object(x.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g(n);case 3:t(P(!0)),e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:return e.prev=8,t(P(!1)),e.finish(8);case 11:case"end":return e.stop()}}),e,null,[[0,6,8,11]])})));return function(t){return e.apply(this,arguments)}}()))},className:u.a.form,children:[Object(d.jsxs)("label",{htmlFor:"registerEmail",children:[Object(d.jsx)("div",{children:"E-mail:"}),Object(d.jsx)("input",{id:"registerEmail",type:"email",value:a.email,onChange:function(e){return j(Object(h.a)(Object(h.a)({},a),{},{email:e.currentTarget.value}))}})]}),Object(d.jsxs)("label",{htmlFor:"registerPassword",children:[Object(d.jsx)("div",{children:"Password:"}),Object(d.jsx)("input",{id:"registerPassword",type:"password",autoComplete:"on",value:a.password,onChange:function(e){return j(Object(h.a)(Object(h.a)({},a),{},{password:e.currentTarget.value}))}})]}),Object(d.jsxs)("label",{htmlFor:"registerConfirmPassword",children:[Object(d.jsx)("div",{children:"Confirm Password:"}),Object(d.jsx)("input",{id:"registerConfirmPassword",type:"password",autoComplete:"on",value:a.confirmPassword,onChange:function(e){return j(Object(h.a)(Object(h.a)({},a),{},{confirmPassword:e.currentTarget.value}))}})]}),Object(d.jsx)("button",{type:"submit",children:"Register"})]}),Object(d.jsxs)("div",{className:u.a.info,children:[Object(d.jsx)("div",{children:"Already have an account?"}),Object(d.jsx)(o.b,{className:u.a.link,to:r.LOGIN,children:"Sign In"})]})]})},A=n(21),L=n.n(A),k=function(){return Object(d.jsxs)("div",{className:L.a.error,children:[Object(d.jsx)("div",{className:L.a.emoji,children:" \ud83d\ude1e "}),Object(d.jsx)("div",{children:"Error 404"}),Object(d.jsx)("p",{children:"This page is not exist"})]})},U=function(){return Object(d.jsxs)("div",{children:["Double Range Analogue",Object(d.jsx)("input",{type:"number",min:"0"}),Object(d.jsx)("input",{type:"number",min:"10"})]})},F=function(){return Object(d.jsx)("div",{children:"Pagination"})},D=function(){return Object(d.jsxs)("div",{children:["Search",Object(d.jsx)("input",{type:"text"})]})},G=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("button",{type:"button",children:"\u2b07\ufe0f"}),Object(d.jsx)("button",{type:"button",children:"\u2b06\ufe0f"})]})},H=function(){return Object(d.jsx)("div",{children:"Table"})},W=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{children:Object(d.jsx)(D,{})}),Object(d.jsx)("div",{children:Object(d.jsx)(U,{})}),Object(d.jsx)("div",{children:Object(d.jsx)(G,{})}),Object(d.jsx)("div",{children:Object(d.jsx)(H,{})}),Object(d.jsx)("div",{children:Object(d.jsx)(F,{})})]})},M=function(){var e=Object(i.c)((function(e){return e.auth.userInfo}));return Object(i.c)((function(e){return e.auth.isLoggedIn}))?Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{children:["Email: ",e&&e.email]}),Object(d.jsxs)("div",{children:["Name: ",e&&e.name]})]}):Object(d.jsx)(l.a,{to:r.LOGIN})},K=n(32),B=n.n(K),V=function(){return Object(d.jsxs)("div",{className:B.a.elements,children:[Object(d.jsx)(d.Fragment,{children:"Some Button"}),Object(d.jsx)(d.Fragment,{children:"Some Text"})]})},Y=function(){return Object(d.jsxs)(l.d,{children:[Object(d.jsx)(l.b,{path:r.HOME,element:Object(d.jsx)(M,{})}),Object(d.jsx)(l.b,{path:r.PROFILE,element:Object(d.jsx)(M,{})}),Object(d.jsx)(l.b,{path:r.PACKS,element:Object(d.jsx)(W,{})}),Object(d.jsx)(l.b,{path:r.LOGIN,element:Object(d.jsx)(R,{})}),Object(d.jsx)(l.b,{path:r.SIGN_UP,element:Object(d.jsx)(C,{})}),Object(d.jsx)(l.b,{path:r.PASSWORD_RECOVERY,element:Object(d.jsx)(y,{})}),Object(d.jsx)(l.b,{path:r.CHECK_EMAIL,element:Object(d.jsx)(O,{})}),Object(d.jsx)(l.b,{path:r.NEW_PASSWORD,element:Object(d.jsx)(I,{})}),Object(d.jsx)(l.b,{path:r.NEW_PASSWORD_WITH_TOKEN,element:Object(d.jsx)(I,{})}),Object(d.jsx)(l.b,{path:r.ERROR,element:Object(d.jsx)(k,{})}),Object(d.jsx)(l.b,{path:r.TEST_PAGE,element:Object(d.jsx)(V,{})}),Object(d.jsx)(l.b,{path:"*",element:Object(d.jsx)(l.a,{to:r.ERROR})})]})},q=n(12),z=n.n(q),J=function(){return Object(d.jsxs)("header",{className:z.a.navbar,children:[Object(d.jsx)(o.b,{to:r.PROFILE,className:function(e){return e.isActive?z.a.active:""},children:"Profile"}),Object(d.jsx)(o.b,{to:r.SIGN_UP,className:function(e){return e.isActive?z.a.active:""},children:"Sign Up"}),Object(d.jsx)(o.b,{to:r.LOGIN,className:function(e){return e.isActive?z.a.active:""},children:"Log In"}),Object(d.jsx)(o.b,{to:r.PASSWORD_RECOVERY,className:function(e){return e.isActive?z.a.active:""},children:"Password Rec"}),Object(d.jsx)(o.b,{to:r.NEW_PASSWORD,className:function(e){return e.isActive?z.a.active:""},children:"New Pass"})]})},$=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(o.a,{children:[Object(d.jsx)(J,{}),Object(d.jsx)("main",{children:Object(d.jsx)(Y,{})})]})})},X=n(18),Z=n(33),Q={isLoading:!1,isInitialized:!1,error:"",info:""},ee=Object(X.b)({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;return t.type,e},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH/SET_REGISTER_SUCCESS":case"AUTH/SET_USER_INFO":case"AUTH/SET_IS_LOGGED_IN":case"AUTH/SET_RESTORE_EMAIL":case"AUTH/SET_IS_EMAIL_SENT":case"AUTH/SET_IS_PASSWORD_CHANGED":return Object(h.a)(Object(h.a)({},e),t.payload);default:return e}}}),te=Object(X.c)(ee,Object(X.a)(Z.a));window.store=te,a.a.render(Object(d.jsx)(i.a,{store:te,children:Object(d.jsx)($,{})}),document.getElementById("root")),j()}},[[62,1,2]]]);
//# sourceMappingURL=main.661df08d.chunk.js.map