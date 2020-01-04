(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{22:function(e,t,a){},29:function(e,t,a){e.exports=a(40)},34:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(13),o=a.n(c),l=(a(34),a(5)),i=a(6),s=a(9),u=a(7),m=a(8),d=(a(22),a(10)),h=a(3),p=a(42),E=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={isOpen:!1},a.toggle=a.toggle.bind(Object(d.a)(a)),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){return r.a.createElement(h.l,{color:"dark",dark:!0,expand:"md"},r.a.createElement(h.m,{tag:p.a,to:"/"},"Home"),r.a.createElement(h.n,{onClick:this.toggle}),r.a.createElement(h.c,{isOpen:this.state.isOpen,navbar:!0},r.a.createElement(h.i,{className:"ml-auto",navbar:!0},r.a.createElement(h.j,null,r.a.createElement(h.k,{href:"https://twitter.com/oktadev"},"@oktadev")),r.a.createElement(h.j,null,r.a.createElement(h.k,{href:"https://github.com/oktadeveloper/okta-spring-boot-react-crud-example"},"GitHub")))))}}]),t}(n.Component),v=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(E,null),r.a.createElement(h.d,{fluid:!0},r.a.createElement(h.a,{color:"link"},r.a.createElement(p.a,{to:"/groups"},"Manage JUG Tour"))))}}]),t}(n.Component),f=a(44),g=a(46),y=a(43),b=a(12),O=a.n(b),j=a(27),C=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={groups:[],isLoading:!0},a.remove=a.remove.bind(Object(d.a)(a)),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0}),fetch("api/groups").then((function(e){return e.json()})).then((function(t){return e.setState({groups:t,isLoading:!1})}))}},{key:"remove",value:function(e){var t=this;return O.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,O.a.awrap(fetch("/api/group/".concat(e),{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(){var a=Object(j.a)(t.state.groups).filter((function(t){return t.id!==e}));t.setState({groups:a})})));case 2:case"end":return a.stop()}}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.groups;if(t.isLoading)return r.a.createElement("p",null,"Loading...");var n=a.map((function(t){var a="".concat(t.address||""," ").concat(t.city||""," ").concat(t.stateOrProvince||"");return r.a.createElement("tr",{key:t.id},r.a.createElement("td",{style:{whiteSpace:"nowrap"}},t.name),r.a.createElement("td",null,a),r.a.createElement("td",null,t.events.map((function(e){return r.a.createElement("div",{key:e.id},new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"2-digit"}).format(new Date(e.date)),": ",e.title)}))),r.a.createElement("td",null,r.a.createElement(h.b,null,r.a.createElement(h.a,{size:"sm",color:"primary",tag:p.a,to:"/groups/"+t.id},"Edit"),r.a.createElement(h.a,{size:"sm",color:"primary",onClick:function(){return e.remove(t.id)}},"Delete"))))}));return r.a.createElement("div",null,r.a.createElement(E,null),r.a.createElement(h.d,{fluid:!0},r.a.createElement("div",{className:"float-right"},r.a.createElement(h.a,{color:"success",tag:p.a,to:"/groups/new"},"Add Group")),r.a.createElement("h3",null,"My JUG Tour"),r.a.createElement(h.o,{className:"mt-4"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{width:"20%"},"Name"),r.a.createElement("th",{width:"20%"},"Location"),r.a.createElement("th",null,"Events"),r.a.createElement("th",{width:"10%"},"Actions"))),r.a.createElement("tbody",null,n))))}}]),t}(n.Component),k=a(28),w=a(45),x=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).emptyItem={name:"",address:"",city:"",stateOrProvince:"",country:"",postalCode:""},a.state={item:a.emptyItem},a.handleChange=a.handleChange.bind(Object(d.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(d.a)(a)),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e;return O.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if("new"===this.props.match.params.id){t.next=9;break}return t.t0=O.a,t.next=4,O.a.awrap(fetch("/api/group/".concat(this.props.match.params.id)));case 4:return t.t1=t.sent.json(),t.next=7,t.t0.awrap.call(t.t0,t.t1);case 7:e=t.sent,this.setState({item:e});case 9:case"end":return t.stop()}}),null,this)}},{key:"handleChange",value:function(e){var t=e.target,a=t.value,n=t.name,r=Object(k.a)({},this.state.item);r[n]=a,this.setState({item:r})}},{key:"handleSubmit",value:function(e){var t;return O.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return e.preventDefault(),t=this.state.item,a.next=4,O.a.awrap(fetch("/api/group",{method:t.id?"PUT":"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}));case 4:this.props.history.push("/groups");case 5:case"end":return a.stop()}}),null,this)}},{key:"render",value:function(){var e=this.state.item,t=r.a.createElement("h2",null,e.id?"Edit Group":"Add Group");return r.a.createElement("div",null,r.a.createElement(E,null),r.a.createElement(h.d,null,t,r.a.createElement(h.e,{onSubmit:this.handleSubmit},r.a.createElement(h.f,null,r.a.createElement(h.h,{for:"name"},"Name"),r.a.createElement(h.g,{type:"text",name:"name",id:"name",value:e.name||"",onChange:this.handleChange,autoComplete:"name"})),r.a.createElement(h.f,null,r.a.createElement(h.h,{for:"address"},"Address"),r.a.createElement(h.g,{type:"text",name:"address",id:"address",value:e.address||"",onChange:this.handleChange,autoComplete:"address-level1"})),r.a.createElement(h.f,null,r.a.createElement(h.h,{for:"city"},"City"),r.a.createElement(h.g,{type:"text",name:"city",id:"city",value:e.city||"",onChange:this.handleChange,autoComplete:"address-level1"})),r.a.createElement("div",{className:"row"},r.a.createElement(h.f,{className:"col-md-4 mb-3"},r.a.createElement(h.h,{for:"stateOrProvince"},"State/Province"),r.a.createElement(h.g,{type:"text",name:"stateOrProvince",id:"stateOrProvince",value:e.stateOrProvince||"",onChange:this.handleChange,autoComplete:"address-level1"})),r.a.createElement(h.f,{className:"col-md-5 mb-3"},r.a.createElement(h.h,{for:"country"},"Country"),r.a.createElement(h.g,{type:"text",name:"country",id:"country",value:e.country||"",onChange:this.handleChange,autoComplete:"address-level1"})),r.a.createElement(h.f,{className:"col-md-3 mb-3"},r.a.createElement(h.h,{for:"country"},"Postal Code"),r.a.createElement(h.g,{type:"text",name:"postalCode",id:"postalCode",value:e.postalCode||"",onChange:this.handleChange,autoComplete:"address-level1"}))),r.a.createElement(h.f,null,r.a.createElement(h.a,{color:"primary",type:"submit"},"Save")," ",r.a.createElement(h.a,{color:"secondary",tag:p.a,to:"/groups"},"Cancel")))))}}]),t}(n.Component),S=Object(w.a)(x),N=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(f.a,null,r.a.createElement(g.a,null,r.a.createElement(y.a,{path:"/",exact:!0,component:v}),r.a.createElement(y.a,{path:"/groups",exact:!0,component:C}),r.a.createElement(y.a,{path:"/groups/:id",component:S})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(39);o.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[29,1,2]]]);
//# sourceMappingURL=main.1bac9894.chunk.js.map