(this.webpackJsonpdailyroutine=this.webpackJsonpdailyroutine||[]).push([[0],{48:function(n,t,e){},56:function(n,t,e){"use strict";e.r(t);var o=e(5),r=e(0),c=e.n(r),i=e(3),a=e.n(i),u=(e(48),e(29)),d=e(6),s=e(7),h=e(11),f=e.n(h),p=e(4),l=e(85),b=e(25);function j(){var n=Object(d.a)(["\n  margin: 0px 10px;\n  background-color: transparent;\n  border: 1px solid;\n  border-color: transparent;\n  border-bottom-color: #949494;\n  height: 28px;\n  &:hover {\n    border: 1px solid;\n    border-color: transparent;\n    border-bottom-color: #3a3a3a;\n  }\n"]);return j=function(){return n},n}function x(){var n=Object(d.a)(["\n  margin: 10px;\n  align-items: center;\n  display: flex;\n  /* padding-bottom: 5px;\n  border: 1px solid;\n  border-color: transparent;\n  border-bottom-color: #303030; */\n"]);return x=function(){return n},n}function g(){var n=Object(d.a)(["\n  font-size: 20px;\n"]);return g=function(){return n},n}function m(){var n=Object(d.a)(["\n  background-color: #c05805;\n  color: #f1ece1;\n  padding: 10px 40px;\n  border-color: transparent;\n  border-radius: 5px;\n  &:Hover {\n    background-color: #505668;\n  }\n  /* box-shadow: 1px 3px 8px 5px #888888; */\n"]);return m=function(){return n},n}function y(){var n=Object(d.a)(["\n  margin-top: 50px;\n  padding: 10px 20px;\n  background-color: #ecd596;\n  height: 100vh;\n  width: 382px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  box-shadow: 1px 2px 8px 2px #2c2c2c;\n  overflow: scroll;\n"]);return y=function(){return n},n}function v(){var n=Object(d.a)(["\n  background-color: whitesmoke;\n  background-image: url('https://get.pxhere.com/photo/desk-notebook-writing-table-book-pen-diary-journal-writer-paper-education-brand-document-knowledge-pen-and-paper-611823.jpg');\n  background-size: cover;\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return v=function(){return n},n}function O(){var n=Object(d.a)(["\n  margin-top: 10px;\n  font-size: 24px;\n  color: #f1ece1;\n"]);return O=function(){return n},n}function k(){var n=Object(d.a)(["\n  background-color: #505668;\n  width: 100%;\n  height: 50px;\n  display: flex;\n  justify-content: center;\n  position: absolute;\n  /* z-index: ; */\n"]);return k=function(){return n},n}var w=s.a.div(k()),E=s.a.div(O()),C=s.a.div(v()),T=s.a.div(y()),S=s.a.button(m()),D=s.a.div(g()),G=s.a.div(x()),J=s.a.input(j());var z=function(){var n="http://52.221.201.253/",t=Object(r.useState)([]),e=Object(u.a)(t,2),c=e[0],i=e[1];return Object(r.useEffect)((function(){fetch("".concat(n,"history/"),{method:"GET"}).then((function(n){return n.json()})).then((function(n){return i(n)}))}),[]),Object(o.jsxs)("div",{children:[Object(o.jsx)(w,{children:Object(o.jsx)(E,{children:"Daily Routine"})}),Object(o.jsx)(C,{children:Object(o.jsxs)(T,{children:[Object(o.jsx)(S,{onClick:function(){var t={description:"",date:"".concat(f()().format("M-D")),time:"".concat(f()().format("H:m")),pub_date:"".concat(f()().format())};fetch("".concat(n,"history/historyCreate/"),{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(t)}).then((function(n){return n.json()})).then((function(t){fetch("".concat(n,"history/"),{method:"GET"}).then((function(n){return n.json()})).then((function(n){return i(n)}))})).catch((function(n){return console.log(n)}))},children:Object(o.jsx)(D,{children:"Add list"})}),Object(o.jsx)("div",{children:c.map((function(t,e){return Object(o.jsxs)(G,{children:[Object(o.jsx)(p.a,{utils:b.a,children:Object(o.jsx)(l.a,{value:t.pub_date,onChange:function(e){return function(t,e){var o={pub_date:"".concat(t.format())};fetch("".concat(n,"history/historyUpdate/").concat(e.id,"/"),{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(o)}).then((function(n){return n.json()})).then((function(t){fetch("".concat(n,"history/"),{method:"GET"}).then((function(n){return n.json()})).then((function(n){return i(n)}))})).catch((function(n){return console.log(n)}))}(e,t)},format:"YYYY-MM-DD HH:mm"})}),Object(o.jsx)(J,{value:t.description,onChange:function(e){return function(t,e){var o={description:"".concat(t.target.value)};fetch("".concat(n,"history/historyUpdate/").concat(e.id,"/"),{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(o)}).then((function(n){return n.json()})).then((function(t){fetch("".concat(n,"history/"),{method:"GET"}).then((function(n){return n.json()})).then((function(n){return i(n)}))})).catch((function(n){return console.log(n)}))}(e,t)}}),Object(o.jsx)("button",{onClick:function(){return function(t){fetch("".concat(n,"history/historyDelete/").concat(t.id,"/"),{method:"DELETE",headers:{"Content-type":"application/json"}}).then((function(n){return n.json()})).then((function(t){fetch("".concat(n,"history/"),{method:"GET"}).then((function(n){return n.json()})).then((function(n){return i(n)}))})).catch((function(n){return console.log(n)}))}(t)},children:"X"})]},e)}))})]})})]})};a.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(z,{})}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.9865874f.chunk.js.map