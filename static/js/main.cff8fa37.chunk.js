(this.webpackJsonpreact_keyboard=this.webpackJsonpreact_keyboard||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var r=n(3),c=n.n(r),a=n(4),s=n(5),o=n(7),u=n(6),i=n(1),p=n.n(i),d=n(0),y=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={currentKey:""},e.keyupHendler=function(t){e.setState({currentKey:t.key})},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("keyup",this.keyupHendler)}},{key:"componenWillUnmount",value:function(){document.removeEventListener("keyup",this.keyupHendler)}},{key:"render",value:function(){var e=this.state.currentKey;return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)("p",{className:"App__message",children:e?"The last pressed key is [".concat(e,"]"):"Nothing was pressed yet"})})}}]),n}(p.a.Component);n(13);c.a.render(Object(d.jsx)(y,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.cff8fa37.chunk.js.map