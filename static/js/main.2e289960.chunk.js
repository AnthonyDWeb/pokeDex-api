(this["webpackJsonpgive-me-recipes"]=this["webpackJsonpgive-me-recipes"]||[]).push([[0],{20:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),a=n(24),r=n.n(a),i=n(2),o=n.n(i),j=n(6),l=n(7),b=n(12),u=n(3),h=(n(20),n(11)),p=n(5),m=Object(c.createContext)(!1),d=n(1),x=function(){var e=Object(c.useContext)(f),t=e.pokesave,n=e.setpokesave,s=Object(c.useContext)(m).isLogged,a=Object(c.useState)(null),r=Object(l.a)(a,2),i=r[0],b=r[1];Object(c.useEffect)((function(){!i&&function(){var e=Object(j.a)(o.a.mark((function e(){var c,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!s){e.next=10;break}return e.next=3,fetch("https://pokeapi.co/api/v2/pokemon/1");case 3:return c=e.sent,e.next=6,c.json();case 6:a=e.sent,n([].concat(Object(p.a)(t),[Object(h.a)({},a)])),console.log(a),b(a);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[s,t,n]),console.log("pokesave -> ",t);var u=function(){var e=Object(j.a)(o.a.mark((function e(){var c,s,a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=Math.floor(151*Math.random())+1,-1!==(s=t.findIndex((function(e){return e.id===c})))){e.next=13;break}return e.next=5,fetch("https://pokeapi.co/api/v2/pokemon/".concat(c));case 5:return a=e.sent,e.next=8,a.json();case 8:r=e.sent,n([].concat(Object(p.a)(t),[Object(h.a)({},r)])),b(r),e.next=14;break;case 13:b(t[s]);case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();if(!1===s)return console.log("home is logged",s),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h3",{className:"loginAlert",children:"Please Login"}),Object(d.jsx)("p",{className:"loginInfo",children:"*Username must have 15 character max"}),Object(d.jsx)("p",{className:"loginInfo",children:"*Password must have 6 character min"})]});if(!i)return null;var x=Math.floor(100*Math.random())+1;return console.log("shiny ->",x),Object(d.jsxs)("div",{className:"mainContaint",children:[Object(d.jsx)("h1",{className:"mainTitle",children:"Home"}),Object(d.jsxs)("div",{className:"pokinfo",children:[Object(d.jsxs)("p",{children:["Id : ",i.id]}),Object(d.jsxs)("p",{children:["Name : ",i.name]}),Object(d.jsxs)("p",{children:["height : ",i.height]}),Object(d.jsxs)("p",{children:["Weight : ",i.weight]}),i.types.map((function(e,t){return Object(d.jsxs)("p",{children:["Type ",t+1,": ",e.type.name]},t)}))]}),Object(d.jsxs)("div",{className:"pokimage",children:[Object(d.jsx)("div",{children:10===x?Object(d.jsxs)("div",{children:[Object(d.jsx)("img",{className:"img-pokemon",src:i.sprites.front_shiny,alt:"shinyImg"}),Object(d.jsx)("p",{children:" Catch it ! He's a Shiny and very rare !! "})]}):Object(d.jsx)("img",{className:"img-pokemon",src:i.sprites.front_default,alt:"notShinyImg"})}),Object(d.jsx)("button",{className:"btn-retry",onClick:u,children:"Try again !"})]})]})},O=n(26),g=function(){var e=Object(u.f)(),t=Object(c.useContext)(m),n=t.isLogged,s=t.setAuth,a=Object(O.a)(),r=a.register,i=a.handleSubmit;return console.log("is logged in login -> ",n),Object(d.jsxs)("div",{className:"mainContaint",children:[Object(d.jsx)("h1",{className:"mainTitle",children:"Login"}),Object(d.jsx)("form",{onSubmit:i((function(t){console.log(JSON.stringify(t)),s(),e.push("/pokeDex")})),children:n?Object(d.jsx)("input",{className:"input-submit",type:"submit",value:"Logout"}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"form",children:[Object(d.jsxs)("label",{children:["Username",Object(d.jsx)("input",Object(h.a)(Object(h.a)({className:"input-username"},r("Username")),{},{type:"text",maxLength:15,required:!0}))]}),Object(d.jsxs)("label",{children:["Password",Object(d.jsx)("input",Object(h.a)(Object(h.a)({className:"input-password"},r("Password")),{},{type:"password",minLength:6,required:!0}))]})]}),Object(d.jsxs)("div",{className:"input",children:[Object(d.jsxs)("div",{className:"checkbox",children:[Object(d.jsx)("input",{id:"input-checkbox",className:"input-checkbox",type:"checkbox",value:"remember me"}),Object(d.jsx)("p",{children:"remember me!"})]}),Object(d.jsx)("input",{className:"input-submit",type:"submit",value:"Login"})]})]})})]})},f=Object(c.createContext)([]);var v=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(!1),r=Object(l.a)(a,2),i=r[0],h=r[1],p=Object(c.useState)(null),O=Object(l.a)(p,2),v=O[0],k=O[1],N=Object(c.useState)(null),y=Object(l.a)(N,2),w=y[0],L=y[1];Object(c.useEffect)((function(){(function(){var e=Object(j.a)(o.a.mark((function e(){var t,n,c,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pokeapi.co/api/v2/pokemon/151");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,k(n),console.log("mew -> ",n),e.next=10,fetch("https://pokeapi.co/api/v2/pokemon/150");case 10:return c=e.sent,e.next=13,c.json();case 13:s=e.sent,L(s),console.log("mewtwoo -> ",n);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var S=function(){h(!i)};return console.log("is logged -> ",i),(v||w)&&w?Object(d.jsx)("div",{className:"bg",children:Object(d.jsxs)(b.a,{children:[Object(d.jsx)("nav",{className:"navBar",children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)("img",{className:"mew",src:v.sprites.front_default,alt:""})}),Object(d.jsx)("li",{children:Object(d.jsx)(b.b,{to:"/pokeDex",children:"Home"})}),i?Object(d.jsx)("li",{onClick:S,children:Object(d.jsx)(b.b,{to:"/login",children:"Logout"})}):Object(d.jsx)("li",{children:Object(d.jsx)(b.b,{to:"/login",children:"Login"})}),Object(d.jsx)("li",{children:Object(d.jsx)("img",{className:"mewtwoo",src:w.sprites.front_default,alt:""})})]})}),Object(d.jsx)(m.Provider,{value:{isLogged:i,setAuth:S},children:Object(d.jsx)(f.Provider,{value:{pokesave:n,setpokesave:s},children:Object(d.jsxs)(u.c,{children:[Object(d.jsx)(u.a,{exact:!0,path:"/pokeDex",component:x}),i?null:Object(d.jsx)(u.a,{path:"/login",component:g})]})})})]})}):null};r.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.2e289960.chunk.js.map