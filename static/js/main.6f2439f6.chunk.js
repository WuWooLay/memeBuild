(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,n){e.exports=n(30)},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(4),o=n.n(c),i=n(17),m=n(9),s=n(1),u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_MEME":return t.data;default:return e}},l=Object(s.c)({meme:u}),h=n(6),p=n(7),f=n(11),v=n(8),d=n(10),b=(n(28),function(e){function t(){var e,n;Object(h.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(f.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={hover:!1},n}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.props.meme;return r.a.createElement("div",{className:"meme-item",onMouseEnter:function(){return e.setState({hover:!e.state.hover})},onMouseLeave:function(){return e.setState({hover:!e.state.hover})}},r.a.createElement("img",{src:t.url,alt:t.name,className:this.state.hover?"meme-img darken-img":"meme-img"}),r.a.createElement("p",{className:this.state.hover?"meme-txt":"no-txt"},t.name))}}]),t}(r.a.Component)),E=function(e){function t(){var e,n;Object(h.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(f.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={increament:10},n.increament=function(){var e=n.state.increament;n.setState({increament:e+10})},n}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;return console.log("this.props",this.props),r.a.createElement("div",null,r.a.createElement("h3",null," Frozen Lwin MemeGenerator "),r.a.createElement("div",null,"Top ",r.a.createElement("input",{type:"text",name:"",id:""})," ",r.a.createElement("br",null),"Btn ",r.a.createElement("input",{type:"text",name:"",id:""})),this.props.meme.slice(0,this.state.increament).map(function(e){return r.a.createElement(b,{key:e.id,meme:e})}),r.a.createElement("div",null,this.props.meme.length&&this.props.meme.length>this.state.increament?r.a.createElement("button",{className:"MemeButton",onClick:function(){return e.increament()}}," ","Load More .."):""))}}]),t}(a.Component),g=Object(m.b)(function(e){return{meme:e.meme}},null)(E),j=(n(29),Object(s.d)(l,Object(s.a)(i.a)));j.subscribe(function(){console.log("store.subscribe => ",j.getState())}),j.dispatch(function(e){fetch("https://api.imgflip.com/get_memes").then(function(e){return e.json()}).then(function(t){return e(function(e){var t=e.data.memes;return console.log("in reciveMeme"),{type:"SET_MEME",data:t}}(t))}).catch(function(e){return e})}),o.a.render(r.a.createElement(m.a,{store:j},r.a.createElement(g,null)),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.6f2439f6.chunk.js.map