(this["webpackJsonpcounter-app"]=this["webpackJsonpcounter-app"]||[]).push([[0],{14:function(t,e,n){"use strict";n.r(e);var c=n(1),i=n.n(c),r=n(8),s=n.n(r),u=(n(7),n(2)),a=n(3),o=n(5),j=n(4),l=n(0),b=function(t){Object(o.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(u.a)(this,n);for(var c=arguments.length,i=new Array(c),r=0;r<c;r++)i[r]=arguments[r];return(t=e.call.apply(e,[this].concat(i))).state={count:""},t.handleChange=function(e){t.setState({count:e.target.value})},t.handleSubmit=function(e){e.preventDefault(),t.props.inputNum(t.state.count),t.setState({count:""})},t}return Object(a.a)(n,[{key:"render",value:function(){return Object(l.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(l.jsx)("input",{type:"text",onChange:this.handleChange,value:this.state.count}),Object(l.jsx)("button",{className:"input",children:"Input"})]})}}]),n}(c.Component),d=function(t){var e=t.increment;return Object(l.jsx)("div",{children:Object(l.jsx)("button",{onClick:e,id:"plus",children:"WELCOME +"})})},h=function(t){var e=t.decrement;return Object(l.jsx)("div",{id:"sub",children:Object(l.jsx)("button",{onClick:e,id:"minus",children:"Goodbye -"})})},p=function(t){var e=t.reset;return Object(l.jsx)("button",{className:"reset",id:"reset",onClick:e,children:"Reset me"})},m=function(t){Object(o.a)(n,t);var e=Object(j.a)(n);function n(t){var c;return Object(u.a)(this,n),(c=e.call(this,t)).increment=function(){c.setState({count:c.state.count+1})},c.decrement=function(){c.setState({count:c.state.count-1})},c.reset=function(){c.setState({count:0})},c.inputNum=function(t){var e=parseInt(t);c.setState({count:c.state.count+e})},c.state={count:0},c}return Object(a.a)(n,[{key:"render",value:function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("h1",{id:"white-count",children:["Current number of people in store: ",this.state.count]})}),Object(l.jsxs)("div",{className:"container",id:"button-container",children:[Object(l.jsx)(d,{increment:this.increment}),Object(l.jsx)(h,{decrement:this.decrement})]}),Object(l.jsx)(p,{reset:this.reset}),Object(l.jsx)("div",{className:"input",children:Object(l.jsx)(b,{inputNum:this.inputNum})})]})}}]),n}(c.Component),O=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,r=e.getLCP,s=e.getTTFB;n(t),c(t),i(t),r(t),s(t)}))};s.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(m,{})}),document.getElementById("root")),O()},7:function(t,e,n){}},[[14,1,2]]]);
//# sourceMappingURL=main.62019e11.chunk.js.map