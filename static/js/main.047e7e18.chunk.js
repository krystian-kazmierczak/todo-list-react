(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],[,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var c=n(1),s=n.n(c),a=n(7),o=n.n(a),i=(n(13),n(8)),r=n(4),u=n(3),d=(n(14),n(0)),l=function(t){var e=t.addNewTask,n=Object(c.useState)(""),s=Object(u.a)(n,2),a=s[0],o=s[1];return Object(d.jsxs)("form",{className:"form",onSubmit:function(t){var n=a.trim();t.preventDefault(),""!==n&&(e(n),o(""))},children:[Object(d.jsx)("input",{value:a,className:"form__input",placeholder:"Co jest do zrobienia?",required:!0,onChange:function(t){var e=t.target;return o(e.value)}}),Object(d.jsx)("button",{className:"form__button",children:"Dodaj zadanie"})]})},j=(n(16),function(t){var e=t.tasks,n=t.hideDoneTasks,c=t.removeTask,s=t.toggleTaskDone;return Object(d.jsx)("ul",{className:"task",children:e.map((function(t){return Object(d.jsxs)("li",{className:"task__item".concat(t.done&&n?" task__item--hidden":""),children:[Object(d.jsx)("button",{className:"task__button task__button--done",onClick:function(){return s(t.id)},children:t.done?"\u2713":""}),Object(d.jsx)("span",{className:"task__taskContent".concat(t.done?" task__taskContent--done":""),children:t.content}),Object(d.jsx)("button",{className:"task__button task__button--remove",onClick:function(){return c(t.id)},children:"\ud83d\uddd1"})]},t.id)}))})}),b=(n(17),function(t){var e=t.tasks,n=t.hideDoneTasks,c=t.toggleHideDoneTasks,s=t.setAllTaskDone;return e.length>0&&Object(d.jsxs)("div",{className:"buttons",children:[Object(d.jsxs)("button",{className:"buttons__button",onClick:c,children:[n?"Poka\u017c":"Ukryj"," uko\u0144czone"]}),Object(d.jsx)("button",{className:"buttons__button",disabled:e.every((function(t){return t.done})),onClick:s,children:"Uko\u0144cz wszystkie"})]})}),f=(n(18),function(t){var e=t.title,n=t.body,c=t.extraContent;return Object(d.jsxs)("section",{className:"section",children:[Object(d.jsxs)("header",{className:"section__header",children:[Object(d.jsx)("h2",{className:"section__title",children:e}),c]}),Object(d.jsx)("div",{className:"section__body",children:n})]})}),h=function(t){var e=t.title;return Object(d.jsx)("header",{className:"header",children:Object(d.jsx)("h1",{children:e})})},k=(n(19),function(t){var e=t.children;return Object(d.jsx)("main",{className:"container",children:e})});var O=function(){var t=Object(c.useState)(!1),e=Object(u.a)(t,2),n=e[0],s=e[1],a=Object(c.useState)([{id:1,content:"przej\u015bc na reacta",done:!1},{id:2,content:"test",done:!0}]),o=Object(u.a)(a,2),O=o[0],m=o[1];return Object(d.jsxs)(k,{children:[Object(d.jsx)(h,{title:"Lista zada\u0144"}),Object(d.jsx)(f,{title:"Dodaj nowe zadanie",body:Object(d.jsx)(l,{addNewTask:function(t){m((function(e){return[].concat(Object(i.a)(e),[{id:e.length?e[e.length-1].id+1:1,content:t,done:!1}])}))}})}),Object(d.jsx)(f,{title:"Lista zada\u0144",body:Object(d.jsx)(j,{tasks:O,hideDoneTasks:n,removeTask:function(t){m((function(e){return e.filter((function(e){return e.id!==t}))}))},toggleTaskDone:function(t){m((function(e){return e.map((function(e){return e.id===t?Object(r.a)(Object(r.a)({},e),{},{done:!e.done}):e}))}))}}),extraContent:Object(d.jsx)(b,{tasks:O,hideDoneTasks:n,toggleHideDoneTasks:function(){s((function(t){return!t}))},setAllTaskDone:function(){m((function(t){return t.map((function(t){return Object(r.a)(Object(r.a)({},t),{},{done:!0})}))}))}})})]})},m=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(e){var n=e.getCLS,c=e.getFID,s=e.getFCP,a=e.getLCP,o=e.getTTFB;n(t),c(t),s(t),a(t),o(t)}))};o.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(O,{})}),document.getElementById("root")),m()}],[[20,1,2]]]);
//# sourceMappingURL=main.047e7e18.chunk.js.map