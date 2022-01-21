(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{25:function(t,e,n){t.exports={form:"ContactForm_form__3YjnV",btn:"ContactForm_btn__1KHYl"}},37:function(t,e,n){t.exports={container:"Section_container__1_Fhp",title:"Section_title__1OXFc"}},38:function(t,e,n){t.exports={title:"PageTitle_title__1Nd9K"}},39:function(t,e,n){t.exports={title:"Title_title__1tYVA"}},41:function(t,e,n){t.exports={filter:"Filter_filter__2uVq7"}},8:function(t,e,n){t.exports={contacts:"ContactList_contacts__1u7Hp",item:"ContactList_item__37drS",btn:"ContactList_btn__79ddY",notification:"ContactList_notification__1vt9F"}},92:function(t,e,n){},93:function(t,e,n){"use strict";n.r(e);var c,a,r=n(0),i=n.n(r),o=n(11),s=n.n(o),u=n(6),l=n(16),b=n(2),j=n(36),f=n.n(j),d=n(4),p=n(13),O=Object(b.b)("contacts/fetchContactsRequest"),h=Object(b.b)("contacts/fetchContactsSuccess"),m=Object(b.b)("contacts/fetchContactsError"),x=Object(b.b)("contacts/addContactRequest"),v=Object(b.b)("contacts/addContactSuccess"),_=Object(b.b)("contacts/addContactError"),C=Object(b.b)("contacts/deleteContactRequest"),y=Object(b.b)("contacts/deleteContactSuccess"),g=Object(b.b)("contacts/deleteContactError"),k=Object(b.b)("phonebook/updateFilter"),w=Object(b.c)([],(c={},Object(d.a)(c,h,(function(t,e){return e.payload})),Object(d.a)(c,v,(function(t,e){return[e.payload].concat(Object(l.a)(t))})),Object(d.a)(c,y,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),c)),N=Object(b.c)("",Object(d.a)({},k,(function(t,e){return e.payload}))),S=Object(b.c)(!1,(a={},Object(d.a)(a,O,(function(){return!0})),Object(d.a)(a,h,(function(){return!1})),Object(d.a)(a,m,(function(){return!1})),Object(d.a)(a,x,(function(){return!0})),Object(d.a)(a,v,(function(){return!1})),Object(d.a)(a,_,(function(){return!1})),Object(d.a)(a,C,(function(){return!0})),Object(d.a)(a,y,(function(){return!1})),Object(d.a)(a,g,(function(){return!1})),a)),F=Object(p.b)({items:w,filter:N,loading:S}),L=[].concat(Object(l.a)(Object(b.d)()),[f.a]),q=Object(b.d)({serializableCheck:!1}),E=Object(b.a)({reducer:{contacts:F},middleware:L,customizedMiddleware:q,devTools:!1}),V=n(37),D=n.n(V),P=n(1),T=function(t){var e=t.children;return Object(P.jsx)("section",{children:Object(P.jsx)("div",{className:D.a.container,children:e})})},A=n(38),H=n.n(A),I=function(t){var e=t.title;return e&&Object(P.jsx)("h1",{className:H.a.title,children:e})};I.defaultProps={title:""};var R=I,Y=n(39),M=n.n(Y),U=function(t){var e=t.title;return e&&Object(P.jsx)("h2",{className:M.a.title,children:e})};U.defaultProps={title:""};var z=U,B=n(14),J=n(15),K=n(18),X=n(17),G=n(19),Q=n(7),W=n.n(Q),Z=n(10),$=n.n(Z);$.a.defaults.baseURL="https://61eb18a77ec58900177cdbb5.mockapi.io";var tt=n(12),et=function(t){return t.contacts.filter},nt=function(t){return t.contacts.items},ct=Object(tt.a)([nt,et],(function(t,e){return t.filter((function(t){var n=t.name,c=t.number;return n.toLowerCase().includes(e.toLocaleLowerCase())||c.includes(e)}))})),at=function(t){return t.contacts.loading},rt=n(25),it=n.n(rt),ot=function(t){Object(K.a)(n,t);var e=Object(X.a)(n);function n(){var t;Object(B.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={name:"",number:""},t.handleInputChange=function(e){var n=e.currentTarget,c=n.name,a=n.value;t.setState(Object(d.a)({},c,a))},t.handleSubmit=function(e){e.preventDefault();var n=t.state,c=n.name,a=n.number,r=t.props,i=r.items,o=r.submitHandler;if(c){var s=i.find((function(t){return t.name===c}));if(s)alert("".concat(s.name," is already in contacts."));else o({name:c.trim(),number:a.trim()}),t.reset()}},t.reset=function(){t.setState({name:"",number:""})},t}return Object(J.a)(n,[{key:"render",value:function(){return Object(P.jsxs)("form",{className:it.a.form,onSubmit:this.handleSubmit,children:[Object(P.jsxs)("label",{children:["Name",Object(P.jsx)("input",{type:"name",name:"name",value:this.state.name,onChange:this.handleInputChange,required:!0})]}),Object(P.jsxs)("label",{children:["Number",Object(P.jsx)("input",{type:"tel",name:"number",value:this.state.number,onChange:this.handleInputChange,required:!0})]}),Object(P.jsx)("button",{type:"submit",className:it.a.btn,children:"Add"})]})}}]),n}(r.Component),st=Object(u.b)((function(t){return{items:nt(t)}}),(function(t){return{submitHandler:function(e){return t(function(t){return function(){var e=Object(G.a)(W.a.mark((function e(n){var c,a;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(x()),e.prev=1,e.next=4,$.a.post("/contacts",t);case 4:c=e.sent,a=c.data,n(v(a)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),n(_(e.t0));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()}(e))}}}))(ot),ut=n(41),lt=n.n(ut),bt=function(t){var e=t.filterValue,n=t.filterUpdate;return Object(P.jsx)("div",{className:lt.a.filter,children:Object(P.jsxs)("label",{children:["Find contacts by name",Object(P.jsx)("input",{type:"text",name:"filter",value:e,onChange:n,autoComplete:"off",required:!0})]})})};bt.defaultProps={filterValue:""};var jt=Object(u.b)((function(t){return{filterValue:et(t)}}),(function(t){return{filterUpdate:function(e){return t(k(e.target.value))}}}))(bt),ft=n(9),dt=n(26),pt=n.n(dt),Ot=n(42),ht=n.n(Ot),mt=(n(90),n(8)),xt=n.n(mt),vt=function(t){Object(K.a)(n,t);var e=Object(X.a)(n);function n(){return Object(B.a)(this,n),e.apply(this,arguments)}return Object(J.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchContacts()}},{key:"render",value:function(){var t=this.props,e=t.filtered,n=t.onDeleteContact,c=t.isLoading,a={type:"TailSpin",color:"#80cbc4",height:50,width:50,className:xt.a.loader};return Object(P.jsxs)(P.Fragment,{children:[c&&Object(P.jsx)(ht.a,Object(ft.a)({},a)),!pt.a.isEmpty(e)&&Object(P.jsx)("ul",{className:xt.a.contacts,children:e.map((function(t){var e=t.id,c=t.name,a=t.number;return Object(P.jsxs)("li",{className:xt.a.item,children:[Object(P.jsxs)("div",{children:[Object(P.jsxs)("p",{children:[c,":"]}),Object(P.jsx)("p",{children:a})]}),Object(P.jsx)("button",{className:xt.a.btn,onClick:function(){n(e)},children:"Delete"})]},e)}))}),pt.a.isEmpty(e)&&!c&&Object(P.jsx)("p",{className:xt.a.notification,children:"No contact found."})]})}}]),n}(r.Component),_t=Object(u.b)((function(t){return{filtered:ct(t),isLoading:at(t)}}),(function(t){return{onDeleteContact:function(e){return t(function(t){return function(){var e=Object(G.a)(W.a.mark((function e(n){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(C()),e.prev=1,e.next=4,$.a.delete("/contacts/".concat(t));case 4:n(y(t)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),n(g(e.t0));case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}()}(e))},fetchContacts:function(){return t(function(){var t=Object(G.a)(W.a.mark((function t(e){var n,c;return W.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(O()),t.prev=1,t.next=4,$.a.get("/contacts");case 4:n=t.sent,c=n.data,e(h(c)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(m(t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}())}}}))(vt),Ct=function(){return Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(R,{title:"Phone Book"}),Object(P.jsxs)(T,{children:[Object(P.jsx)(z,{title:"Add contacts"}),Object(P.jsx)(st,{}),Object(P.jsx)(z,{title:"\u0421ontacts"}),Object(P.jsx)(jt,{}),Object(P.jsx)(_t,{})]})]})};n(91),n(92);s.a.render(Object(P.jsx)(i.a.StrictMode,{children:Object(P.jsx)(u.a,{store:E,children:Object(P.jsx)(Ct,{})})}),document.getElementById("root"))}},[[93,1,2]]]);
//# sourceMappingURL=main.1ead8246.chunk.js.map