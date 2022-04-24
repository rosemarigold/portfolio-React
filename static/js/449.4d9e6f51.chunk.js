"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[449],{8393:function(e,t,n){n.d(t,{Z:function(){return u}});var a="Menu_menu__IsJMi",r="Menu_options__VE8at",i="Menu_notactive__wiJJV",c="Menu_active__UlKtI",s="Menu_name__4yaw1",l=n(3504),o=n(184);function u(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:a,children:[(0,o.jsx)("div",{className:s,children:"Lamia Ouassaa"}),(0,o.jsxs)("div",{className:r,children:[(0,o.jsx)("h1",{children:(0,o.jsx)(l.OL,{to:"/",className:function(e){return e.isActive?c:i},children:"Home"})}),(0,o.jsx)("h1",{children:(0,o.jsx)(l.OL,{to:"/ProjectsMainPage",className:function(e){return e.isActive?c:i},children:"Projects"})}),(0,o.jsx)("h1",{children:(0,o.jsx)(l.OL,{to:"/Contact",className:function(e){return e.isActive?c:i},children:"Contact"})})]})]})})}},2449:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var a=n(8152),r={contactcontainer:"ContactComp_contactcontainer__WyUCU",contactparagraph:"ContactComp_contactparagraph__o-i2G",contactform:"ContactComp_contactform__abv7v",nom:"ContactComp_nom__VESKk",courriel:"ContactComp_courriel__lCWnw",sujet:"ContactComp_sujet__rRPKc",message:"ContactComp_message__a2Qya",contactsubmit:"ContactComp_contactsubmit__RDApW",contactformheader:"ContactComp_contactformheader__p2GAZ",erreur:"ContactComp_erreur__TAKkp",emailSent:"ContactComp_emailSent__4ztdJ"},i=n(2791),c=n(184);function s(){var e=(0,i.useRef)(null),t=(0,i.useRef)(null),n=(0,i.useRef)(null),s=(0,i.useRef)(null),l=(0,i.useState)(""),o=(0,a.Z)(l,2),u=o[0],m=o[1],d=function(){if(e.current.validity.valid)return m(""),!0;e.current.validity.valueMissing?m("Your name is missing."):e.current.validity.typeMismatch&&m("Please enter a valid name.")},h=(0,i.useState)(""),v=(0,a.Z)(h,2),p=v[0],j=v[1],_=function(){if(t.current.validity.valid)return j(""),!0;t.current.validity.valueMissing?j("Your email is missing."):t.current.validity.typeMismatch&&j("Please enter a valid email.")},f=(0,i.useState)(""),x=(0,a.Z)(f,2),C=x[0],g=x[1],y=function(){if(n.current.validity.valid)return g(""),!0;n.current.validity.valueMissing?g("The subject is missing."):n.current.validity.typeMismatch&&g("Please enter a valid subject.")},N=(0,i.useState)(""),b=(0,a.Z)(N,2),M=b[0],S=b[1],L=function(){if(s.current.validity.valid)return S(""),!0;s.current.validity.valueMissing?S("The description is missing."):s.current.validity.typeMismatch&&S("Please enter a valid description.")},w=(0,i.useState)(""),P=(0,a.Z)(w,2),k=P[0],Z=P[1];return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)("div",{className:r.ContactComp,children:[(0,c.jsxs)("p",{className:r.contactparagraph,children:["Interested in hiring me for your project or just want to say hi?  ",(0,c.jsx)("br",{}),"You can fill in the contact form below ",(0,c.jsx)("br",{})," or send me an email to\xa0",(0,c.jsx)("a",{href:"mailto:lamia_ouassaa@outlook.com",children:"lamia_ouassaa@outlook.com"})]}),(0,c.jsx)("div",{className:r.contactcontainer,children:(0,c.jsxs)("form",{className:r.contactform,noValidate:!0,onSubmit:function(a){a.preventDefault(),d()&&_()&&y()&&L()&&e.current&&t.current&&n.current&&s.current&&(console.log("Name: "+e.current.value),console.log("Email: "+t.current.value),console.log("Email: "+n.current.value),console.log("Description: "+s.current.value),e.current.value="",t.current.value="",n.current.value="",s.current.value="",Z("Your email was sent!"))},children:[(0,c.jsxs)("div",{className:r.contactformheader,children:[(0,c.jsx)("label",{children:(0,c.jsx)("input",{type:"text",className:r.nom,required:!0,minLength:"1",maxLength:"30",placeholder:"Name",ref:e,onChange:d,onBlur:d})}),(0,c.jsx)("label",{children:(0,c.jsx)("input",{type:"email",className:r.courriel,required:!0,placeholder:"Email",ref:t,onChange:_,onBlur:_})})]}),(0,c.jsx)("label",{children:(0,c.jsx)("input",{type:"text",className:r.sujet,required:!0,minLength:"1",maxLength:"30",placeholder:"Subject",ref:n,onChange:y,onBlur:y})}),(0,c.jsx)("label",{children:(0,c.jsx)("textarea",{className:r.message,placeholder:"Message",required:!0,minLength:"1",maxLength:"500",ref:s,onChange:L,onBlur:L})}),(0,c.jsx)("input",{className:r.contactsubmit,type:"submit",value:"Send now"}),""!==u&&(0,c.jsx)("div",{className:r.erreur,children:u}),""!==p&&(0,c.jsx)("div",{className:r.erreur,children:p}),""!==C&&(0,c.jsx)("div",{className:r.erreur,children:C}),""!==M&&(0,c.jsx)("div",{className:r.erreur,children:M}),""!==k&&(0,c.jsx)("div",{className:r.emailSent,children:k})]})})]})})}var l=n(8393),o=n(6907);function u(){return(0,c.jsxs)("main",{children:[(0,c.jsxs)(o.ql,{children:[(0,c.jsx)("meta",{name:"description",content:"Contact page of the portfolio"}),(0,c.jsx)("title",{children:"Contact - Portfolio"})]}),(0,c.jsx)("div",{className:"menucontainer",children:(0,c.jsx)(l.Z,{})}),(0,c.jsx)("div",{className:"contactcontainer",children:(0,c.jsx)(s,{})})]})}}}]);
//# sourceMappingURL=449.4d9e6f51.chunk.js.map