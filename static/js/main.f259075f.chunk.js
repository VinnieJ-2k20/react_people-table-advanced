(this["webpackJsonpreact_people-table-advanced"]=this["webpackJsonpreact_people-table-advanced"]||[]).push([[0],{36:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var c=a(24),s=a.n(c),r=a(6),n=a(3),i=(a(35),a(36),a(1)),o=a.n(i),j=a(0),l=o.a.memo((function(){return Object(j.jsx)("nav",{className:"navbar",children:Object(j.jsxs)("div",{className:"navbar-brand",children:[Object(j.jsx)("a",{href:"/",className:"navbar-item",children:Object(j.jsx)("img",{src:"./images/logo.png",alt:"Mate Academy logo",className:"logo"})}),Object(j.jsx)(r.c,{to:"/",exact:!0,className:"navbar-item is-tab",activeClassName:"is-active",children:"Home"}),Object(j.jsx)(r.c,{to:"/people",className:"navbar-item is-tab",activeClassName:"is-active",children:"People Table"})]})})})),b=function(){return Object(j.jsx)("h2",{className:"subtitle",children:"Home page"})},u=a(10),h=a.n(u),d=a(15),m=a(11),O=a(27),x=a.n(O),A=a(22),p="https://mate-academy.github.io/react_people-table/api/people.json";function f(){return g.apply(this,arguments)}function g(){return(g=Object(d.a)(h.a.mark((function e(){var t,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(p);case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("Error fetching data from server");case 5:return e.next=7,t.json();case 7:return a=e.sent,e.abrupt("return",a.map((function(e){return Object(A.a)(Object(A.a)({},e),{},{father:a.find((function(t){var a=t.name;return e.fatherName===a})),mother:a.find((function(t){var a=t.name;return e.motherName===a}))})})));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var v,N,B=a(21),w=a(28),C=a(30),S=a(29),E=a.n(S);!function(e){e.Name="name",e.Sex="sex",e.Born="born",e.Died="died"}(v||(v={})),function(e){e.Asc="asc",e.Desc="desc"}(N||(N={}));var y=a(17),P=a.n(y),Q=function(e){var t=e.person,a=Object(n.h)();return Object(j.jsx)(r.b,{to:"/people/".concat(t.slug).concat(a.search),className:P()({"has-text-blue":"m"===t.sex,"has-text-danger":"f"===t.sex}),children:t.name})},k=(a(46),function(e){var t=e.person,a=Object(n.i)().personSlug;return Object(j.jsxs)("tr",{className:P()({selected:a===t.slug}),children:[Object(j.jsx)("td",{children:Object(j.jsx)(Q,{person:t})}),Object(j.jsx)("td",{children:t.sex}),Object(j.jsx)("td",{children:t.born}),Object(j.jsx)("td",{children:t.died}),Object(j.jsx)("td",{children:t.father?Object(j.jsx)(Q,{person:t.father}):Object(j.jsx)("p",{children:t.fatherName})}),Object(j.jsx)("td",{children:t.mother?Object(j.jsx)(Q,{person:t.mother}):Object(j.jsx)("p",{children:t.motherName})})]})}),M=(a(47),function(e){var t=e.name,a=function(e){var t=Object(n.h)(),a=new URLSearchParams(t.search),c=a.get("sortBy")||"",s=a.get("sortOrder")||"asc";return e!==c?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAQAAADYWf5HAAAAkElEQVQoz7XQMQ5AQBCF4dWQSJxC5wwax1Cq1e7BAdxD5SL+Tq/QCM1oNiJidwox0355mXnG/DrEtIQ6azioNZQxI0ykPhTQIwhCR+BmBYtlK7kLJYwWCcJA9M4qdrZrd8pPjZWPtOqdRQy320YSV17OatFC4euts6z39GYMKRPCTKY9UnPQ6P+GtMRfGtPnBCiqhAeJPmkqAAAAAElFTkSuQmCC":s===N.Asc?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAZ0lEQVQ4y2NgGLKgquEuFxBPAGI2ahhWCsS/gDibUoO0gPgxEP8H4ttArEyuQYxAPBdqEAxPBImTY5gjEL9DM+wTENuQahAvEO9DMwiGdwAxOymGJQLxTyD+jgWDxCMZRsEoGAVoAADeemwtPcZI2wAAAABJRU5ErkJggg==":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAZUlEQVQ4y2NgGAWjYBSggaqGu5FA/BOIv2PBIPFEUgxjB+IdQPwfC94HxLykus4GiD+hGfQOiB3J8SojEE9EM2wuSJzcsFMG4ttQgx4DsRalkZENxL+AuJQaMcsGxBOAmGvopk8AVz1sLZgg0bsAAAAASUVORK5CYII="}(t),c=function(){var e=Object(n.g)(),t=Object(n.h)(),a=new URLSearchParams(t.search),c=a.get("sortBy")||"",s=a.get("sortOrder")||"asc";return function(t){if(t!==c)return a.set("sortBy",t),a.set("sortOrder",N.Asc),void e.push({search:a.toString()});a.set("sortOrder",s===N.Asc?N.Desc:N.Asc),e.push({search:a.toString()})}}();return Object(j.jsx)("th",{className:"is-capitalized sortable-header",onClick:function(){return c(t)},children:Object(j.jsxs)("div",{className:"is-flex",children:[t,Object(j.jsx)("span",{className:"icon is-right",children:Object(j.jsx)("img",{src:a,alt:""})})]})})}),D=o.a.memo((function(){return Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)(M,{name:v.Name}),Object(j.jsx)(M,{name:v.Sex}),Object(j.jsx)(M,{name:v.Born}),Object(j.jsx)(M,{name:v.Died}),Object(j.jsx)("th",{children:"Father"}),Object(j.jsx)("th",{children:"Mother"})]})})})),G=o.a.memo((function(e){var t=e.people,a=Object(n.h)(),c=new URLSearchParams(a.search),s=c.get("query")||"",r=Object(i.useState)(s),o=Object(m.a)(r,2),l=o[0],b=o[1],u=function(){var e=Object(n.g)(),t=Object(n.h)(),a=new URLSearchParams(t.search);return function(t){a.set("query",t),e.push({search:t?a.toString():""})}}(),h=Object(i.useCallback)(E()((function(e){return u(e)}),500),[]),d=Object(i.useCallback)((function(e){var t=e.target.value;b(t),h(t)}),[]),O=Object(i.useMemo)((function(){var e=s.toLowerCase();return t.filter((function(t){return[t.name||"",t.fatherName||"",t.motherName||""].some((function(t){return t.toLowerCase().includes(e)}))}))}),[s]),x=c.get("sortBy"),A=c.get("sortOrder"),p=function(e){switch(e){case v.Born:case v.Died:return function(t,a){return t[e]-a[e]};case v.Name:case v.Sex:return function(t,a){return t[e].localeCompare(a[e])};default:return function(){return 0}}}(x),f=x?Object(B.a)(O).sort(p):Object(B.a)(O);return A===N.Desc&&f.reverse(),Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)("div",{className:"field columns",children:[Object(j.jsxs)("div",{className:"container column is-4",children:[Object(j.jsx)("label",{className:"label",htmlFor:"nameInput",children:"Name"}),Object(j.jsxs)("div",{className:"control has-icons-right",children:[Object(j.jsx)("input",{type:"search",className:"input",placeholder:"Type person name",value:l,onChange:d,id:"nameInput"}),Object(j.jsx)("span",{className:"icon is-right is-small has-text-link",children:Object(j.jsx)(w.a,{icon:C.faSearch})})]})]}),Object(j.jsx)("div",{className:"column"})]}),Object(j.jsxs)("table",{className:"table people-table",children:[Object(j.jsx)(D,{}),Object(j.jsx)("tbody",{children:f.map((function(e){return Object(j.jsx)(k,{person:e},e.slug)}))})]})]})})),U=function(){var e=Object(i.useState)([]),t=Object(m.a)(e,2),a=t[0],c=t[1],s=Object(i.useState)(!1),r=Object(m.a)(s,2),n=r[0],o=r[1],l=Object(i.useState)(!1),b=Object(m.a)(l,2),u=b[0],O=b[1],A=Object(i.useCallback)(Object(d.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),e.prev=1,e.next=4,f();case 4:t=e.sent,c(t),o(!1),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),o(!1),O(!0);case 13:case"end":return e.stop()}}),e,null,[[1,9]])}))),[]);x()(A,[]);var p=!u&&!n;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{className:"subtitle",children:"People page"}),n&&Object(j.jsx)("progress",{className:"progress is-large is-info",max:"100"}),u&&Object(j.jsx)("h3",{className:"subtitle has-text-danger-dark",children:"Could not load People info from server"}),p&&Object(j.jsx)(G,{people:a})]})},R=function(){return Object(j.jsx)("h2",{className:"subtitle",children:"404: Page not found"})},I=function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(l,{}),Object(j.jsx)("section",{className:"section",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{className:"title",children:"Mate Academy"}),Object(j.jsxs)(n.d,{children:[Object(j.jsx)(n.b,{path:"/",exact:!0,children:Object(j.jsx)(b,{})}),Object(j.jsx)(n.b,{path:"/people/:personSlug?",children:Object(j.jsx)(U,{})}),Object(j.jsx)(n.a,{to:"/",path:"/home"}),Object(j.jsx)(R,{})]})]})})]})};s.a.render(Object(j.jsx)(r.a,{basename:"/",children:Object(j.jsx)(I,{})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.f259075f.chunk.js.map