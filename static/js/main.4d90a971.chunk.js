(this["webpackJsonphome-work"]=this["webpackJsonphome-work"]||[]).push([[0],[,,function(e,t,a){e.exports={header__container:"Navbar_header__container__3ZJoz",header__body:"Navbar_header__body__1urLb",active:"Navbar_active__EIKxt",header__burger:"Navbar_header__burger__1UZ7L",header__menu:"Navbar_header__menu__EjUtk",header__list:"Navbar_header__list__3lAu8",list:"Navbar_list__g1Svd",activeLink:"Navbar_activeLink__1eTAF"}},,,,,,,function(e,t,a){e.exports={message:"Mymessage_message__21_xl",message__text:"Mymessage_message__text__TY9ws",message__textInner:"Mymessage_message__textInner__3QKym"}},function(e,t,a){e.exports={wrapper:"InputNya_wrapper__LcwpD",inputNya:"InputNya_inputNya__UoWwU",container:"InputNya_container__VAQSR",error:"InputNya_error__3EN3f"}},,function(e,t,a){e.exports={wrapper:"Todoapp_wrapper__3V8i-",container:"Todoapp_container__clZt3",wrapperBtn:"Todoapp_wrapperBtn__1PyCd"}},,,,,function(e,t,a){e.exports={message__avaIcon:"User_message__avaIcon__2LTyK",text:"User_text__ml2yI"}},function(e,t,a){e.exports={text__item:"Message_text__item__1NL8y",time__item:"Message_time__item__3l1F7"}},function(e,t,a){e.exports={middleEditable:"Junior_middleEditable__3RUoC"}},,,,,function(e,t,a){e.exports={btn:"ButtonNya_btn__3gugF"}},function(e,t,a){e.exports={wrapperInputtask:"InputTask_wrapperInputtask__iQYc-"}},,,function(e,t,a){e.exports=a(40)},,,,,function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(22),l=a.n(c),i=(a(33),a(34),a(3)),o=a(2),u=a.n(o),s=a(6),m=function(){var e=Object(n.useState)(!0),t=Object(i.a)(e,2),a=t[0],c=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:u.a.header__container},r.a.createElement("div",{className:a?u.a.header__body:"".concat(u.a.header__body," ").concat(u.a.active)},r.a.createElement("div",{className:a?u.a.header__burger:"".concat(u.a.header__burger," ").concat(u.a.active),onClick:function(){c(!a)}},r.a.createElement("span",null)),r.a.createElement("div",{className:a?u.a.header__menu:"".concat(u.a.header__menu," ").concat(u.a.active)},r.a.createElement("ul",{className:u.a.header__list},r.a.createElement("li",{className:u.a.list},r.a.createElement(s.b,{to:"/prejunior",activeClassName:u.a.activeLink},"PreJunior")),r.a.createElement("li",{className:u.a.list},r.a.createElement(s.b,{to:"/junior",activeClassName:u.a.activeLink},"Junior")),r.a.createElement("li",{className:u.a.list},r.a.createElement(s.b,{to:"/juniorplus",activeClassName:u.a.activeLink},"Junior +")))))))},_=a(1),p=a(26),d=a(42),E=a(17),v=a.n(E),f=function(e){return r.a.createElement("div",{className:v.a.message__avaIcon},e.logo&&r.a.createElement("img",{src:e.logo,alt:"avatar"}))},g=function(e){return r.a.createElement("div",{className:v.a.text},r.a.createElement(f,{logo:e.logo?e.logo:""}),r.a.createElement("span",null,e.name))},h=a(18),b=a.n(h);var N=function(e){return r.a.createElement("div",{className:b.a.text__item},e.text,r.a.createElement("div",{className:b.a.time__item},r.a.createElement("span",null,"13:20")))},y=a(9),k=a.n(y);var w=function(){return r.a.createElement("div",{className:k.a.message},r.a.createElement(g,{logo:"https://img.pngio.com/person-icon-png-download-10241024-free-transparent-avatar-png-png-avatar-900_900.jpg"}),r.a.createElement("div",{className:k.a.message__text},r.a.createElement("div",{className:k.a.message__textInner},r.a.createElement("div",{className:k.a.text},r.a.createElement(g,{name:"\u042f\u0440\u043e\u0446\u043a\u0438\u0439 \u0410\u043d\u0434\u0440\u0435\u0439"}),r.a.createElement(N,{text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamu "})))))},x=a(12),j=a.n(x),I=a(24),O=a.n(I),C=function(e){var t=Object.assign({},e);return r.a.createElement("div",null,r.a.createElement("button",Object.assign({className:O.a.btn},t)))},S=function(e){return r.a.createElement("div",null,r.a.createElement("h1",null,e.title),r.a.createElement("div",{className:j.a.wrapper},e.task.map((function(t){return r.a.createElement("div",{className:j.a.container,key:t.id},r.a.createElement("p",null,t.title),r.a.createElement(C,{onClick:function(){return e.removeTask(t.id)}},"remove"))}))),r.a.createElement("div",{className:j.a.wrapperBtn},r.a.createElement(C,{onClick:function(){return e.changeFilter("very bad")}},r.a.createElement("p",null,"very bad")),r.a.createElement(C,{onClick:function(){return e.changeFilter("low")}},r.a.createElement("p",null,"low")),r.a.createElement(C,{onClick:function(){return e.changeFilter("medium")}},r.a.createElement("p",null,"medium")),r.a.createElement(C,{onClick:function(){return e.changeFilter("high")}},r.a.createElement("p",null,"high")),r.a.createElement(C,{onClick:function(){return e.changeFilter("all")}},r.a.createElement("p",null,"ALL"))))},L=function(){var e=Object(n.useState)([{id:1,title:"Work",priority:"low"},{id:2,title:"Game",priority:"high"},{id:3,title:"Lessons React",priority:"medium"},{id:4,title:"Lessons Native JS",priority:"low"},{id:5,title:"Family",priority:"high"},{id:6,title:"Chill",priority:"very bad"}]),t=Object(i.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)("all"),o=Object(i.a)(l,2),u=o[0],s=o[1],m=a;return"low"===u&&(m=a.filter((function(e){return"low"===e.priority}))),"high"===u&&(m=a.filter((function(e){return"high"===e.priority}))),"medium"===u&&(m=a.filter((function(e){return"medium"===e.priority}))),"very bad"===u&&(m=a.filter((function(e){return"very bad"===e.priority}))),r.a.createElement("div",null,r.a.createElement(S,{title:"I'm so fool",task:m,removeTask:function(e){var t=a.filter((function(t){return t.id!==e}));c(t)},changeFilter:function(e){s(e)}}))},F=a(27),T=a(10),J=a.n(T),A=function(e){var t=e.onEnter,a=e.error,n=Object(F.a)(e,["onEnter","error"]);return r.a.createElement("div",{className:J.a.wrapper},r.a.createElement("div",{className:J.a.container},r.a.createElement("input",Object.assign({className:J.a.inputNya},n,{type:"text",onKeyPress:function(e){n.clearInputAfterPress&&n.clearInputAfterPress(),"Enter"===e.key&&t&&t()},placeholder:a}))),r.a.createElement("div",{className:J.a.error},a))},P=a(25),B=a.n(P),U=function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),c=a[0],l=a[1];return r.a.createElement("div",{className:B.a.wrapperInputtask},r.a.createElement(A,{value:c,onChange:function(e){l(e.currentTarget.value)},onEnter:function(){e.onEnter(c),e.addName(c),l("")},error:e.error,clearInputAfterPress:function(){return e.clearInputAfterPress(c)}}),r.a.createElement(C,{onClick:function(){e.onEnter(c),e.addName(c),l("")}},"BTN"),r.a.createElement("span",null,e.arr.length))};var V=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)([]),o=Object(i.a)(l,2),u=o[0],s=o[1];return r.a.createElement("div",null,r.a.createElement(w,null),r.a.createElement(L,null),r.a.createElement(U,{arr:u,addName:function(e){if(e){var t={name:e,id:Object(d.a)()},a=[].concat(Object(p.a)(u),[t]);s(a)}},onEnter:function(e){""!==e.trim()?alert("Hello "+e.trim()):c("Please add text to the form")},error:a,clearInputAfterPress:function(e){e||c("")}}))},M=function(e){var t=Object(n.useState)(!1),a=Object(i.a)(t,2),c=a[0],l=a[1];return c?r.a.createElement(A,{value:e.value,onBlur:function(){l(!1)},onChange:e.changeValueInput}):r.a.createElement("span",{onClick:function(){l(!0)}},"Click on span")},R=a(19),K=a.n(R);var W=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Junior"),r.a.createElement("div",{className:K.a.middleEditable},r.a.createElement(C,{onClick:function(){!function(e,t){var a=JSON.stringify(t);localStorage.setItem(e,a)}("inputValue",{x:a})}},"SAVE"),r.a.createElement(C,{onClick:function(){var e=function(e,t){var a=localStorage.getItem(e);return null!==a&&(t=JSON.parse(a)),t}("inputValue",{x:""});c(e.x)}},"RESTORE")),r.a.createElement("div",{className:K.a.middleEditable},r.a.createElement(M,{value:a,changeValueInput:function(e){c(e.currentTarget.value)}})))};var Q=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"JuniorPlus"))};var Z=function(){return r.a.createElement(s.a,null,r.a.createElement("div",{className:"app-wrapper"},r.a.createElement(m,null),r.a.createElement(_.a,{path:"/prejunior",component:V}),r.a.createElement(_.a,{path:"/junior",component:W}),r.a.createElement(_.a,{path:"/juniorplus",component:Q})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[28,1,2]]]);
//# sourceMappingURL=main.4d90a971.chunk.js.map