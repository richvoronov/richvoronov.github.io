(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(n,t,e){n.exports=e.p+"static/media/imageCosmos1.f40fbad4.png"},34:function(n,t,e){n.exports=e.p+"static/media/ex-link.86c3629d.svg"},35:function(n,t,e){n.exports=e.p+"static/media/mail.a88955b2.svg"},36:function(n,t,e){n.exports=e.p+"static/media/telegram.41140f93.svg"},37:function(n,t,e){n.exports=e.p+"static/media/github.c39c8c8d.svg"},40:function(n,t,e){n.exports=e.p+"static/media/ufo1.2348e24f.svg"},41:function(n,t,e){n.exports=e.p+"static/media/ufo2.a5e1dd2d.svg"},42:function(n,t,e){n.exports=e.p+"static/media/ufo3.8cb8dfe5.svg"},47:function(n,t,e){n.exports=e(65)},64:function(n,t,e){},65:function(n,t,e){"use strict";e.r(t);var r=e(8),a=e(9),i=e(11),o=e(10),c=e(12),l=e(0),u=e.n(l),s=e(17),d=e.n(s),h=e(2),f=e(45),p=e(3);function m(n,t){if(arguments.length<2&&(t=n,n=0),n>t){var e=t;t=n,n=e}return Math.floor(Math.random()*(t-n+1))+n}var g=null,b=function(n){function t(){var n,e;Object(r.a)(this,t);for(var a=arguments.length,c=new Array(a),l=0;l<a;l++)c[l]=arguments[l];return(e=Object(i.a)(this,(n=Object(o.a)(t)).call.apply(n,[this].concat(c)))).windowStart=function(){window.requestAnimFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(n){window.setTimeout(n,1e3/60)}},e.canvas=function(){var n=e.props,t=n.width,r=void 0===t?window.innerWidth:t,a=n.height,i=void 0===a?window.innerHeight:a,o=e.refs.canvas,c=e.refs.canvas.getContext("2d"),l=o.width=r,u=o.height=i,s=217,d=[],h=0,f=document.createElement("canvas"),p=f.getContext("2d");f.width=100,f.height=100;var b=f.width/2,v=p.createRadialGradient(b,b,0,b,b,b);v.addColorStop(.025,"#fff"),v.addColorStop(.1,"hsl("+s+", 20%, 35%)"),v.addColorStop(.25,"hsl("+s+", 64%, 6%)"),v.addColorStop(1,"transparent"),p.fillStyle=v,p.beginPath(),p.arc(b,b,b,0,2*Math.PI),p.fill();var x=function(){this.orbitRadius=m(function(n,t){var e=Math.max(n,t);return Math.round(Math.sqrt(e*e+e*e))/2}(l,u)),this.radius=m(60,this.orbitRadius)/12,this.orbitX=l/2,this.orbitY=u/2,this.timePassed=m(0,1200),this.speed=m(this.orbitRadius)/9e5,this.alpha=m(2,10)/10,d[++h]=this};x.prototype.draw=function(){var n=Math.sin(this.timePassed)*this.orbitRadius+this.orbitX,t=Math.cos(this.timePassed)*this.orbitRadius+this.orbitY,e=m(10);1===e&&this.alpha>0?this.alpha-=.05:2===e&&this.alpha<1&&(this.alpha+=.05),c.globalAlpha=this.alpha,c.drawImage(f,n-this.radius/2,t-this.radius/2,this.radius,this.radius),this.timePassed+=this.speed};for(var w=0;w<1200;w++)new x;!function n(){c.globalCompositeOperation="source-over",c.globalAlpha=.8,c.fillStyle="hsla("+s+", 64%, 6%, 1)",c.fillRect(0,0,l,u),c.globalCompositeOperation="lighter";for(var t=1,e=d.length;t<e;t++)d[t].draw();g=window.requestAnimationFrame(n)}()},e}return Object(c.a)(t,n),Object(a.a)(t,[{key:"componentDidMount",value:function(){this.windowStart(),this.canvas()}},{key:"componentDidUpdate",value:function(n){n.width===this.props.width&&n.height===this.props.height||g&&(window.cancelAnimationFrame(g),this.canvas())}},{key:"render",value:function(){return u.a.createElement("canvas",{id:"canvas",ref:"canvas",style:{opacity:"1",position:"absolute",top:"0",left:"0"}})}}]),t}(l.Component),v=e(26),x=e(23),w=e.n(x);function O(){var n=Object(p.a)(["\n      opacity: 0.2;\n      animation: 800s "," ease infinite alternate;\n    "]);return O=function(){return n},n}function j(){var n=Object(p.a)(["\n  background-image: url(",");\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  height: ","px;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 10;\n  opacity: 0;\n  will-change: transform;\n  transition: opacity ",";\n\n  ",";\n"]);return j=function(){return n},n}function y(){var n=Object(p.a)(["\n  from {\n    transform: scale(1) rotate(0deg);\n  }\n  to {\n    transform: scale(2) rotate(-360deg);\n  }\n"]);return y=function(){return n},n}console.log("\u0417\u0430\u043a\u0440\u043e\u0439 \u043a\u043e\u043d\u0441\u043e\u043b\u044c!");var E=Object(h.e)(y()),k=h.d.div(j(),w.a,function(n){var t=n.windowHeight;return t&&t},function(n){return n.theme.transition.background},function(n){return n.loaded&&Object(h.c)(O(),E)}),z=function(n){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(c.a)(t,n),Object(a.a)(t,[{key:"render",value:function(){var n=this;return u.a.createElement(v.a,{src:w.a},function(t){var e=t.hasLoaded;return u.a.createElement(k,{loaded:e,windowHeight:n.props.windowHeight})})}}]),t}(l.Component),C=e(15),S=e(14),H=e(13),R=e(34),A=e.n(R),M=e(35),B=e.n(M),F=e(36),D=e.n(F),q=e(37),P=e.n(q);function W(){var n=Object(p.a)(["\n  margin-top: 20px;\n  font-family: 'Chemistry', sans-serif;\n  font-size: 30px;\n  text-decoration: none;\n  color: ",";\n\n  display: flex;\n  align-items: center;\n\n  span {\n    display: inline-block;\n    margin-left: 10px;\n    font-size: 25px;\n    transition: ",";\n  }\n  &:hover {\n    span {\n      transform: translateX(2px);\n    }\n  }\n"]);return W=function(){return n},n}function X(){var n=Object(p.a)(["\n  cursor: pointer;\n\n  &:hover {\n    text-decoration: underline;\n  }\n"]);return X=function(){return n},n}function G(){var n=Object(p.a)(["\n  ",";\n"]);return G=function(){return n},n}function I(){var n=Object(p.a)(["\n  ",";\n"]);return I=function(){return n},n}function L(){var n=Object(p.a)(["\n  ",";\n"]);return L=function(){return n},n}function N(){var n=Object(p.a)(["\n  margin-left: 7px;\n\n  svg {\n    fill: #fff;\n    width: 15px;\n    height: 15px;\n  }\n"]);return N=function(){return n},n}function T(){var n=Object(p.a)(["\n  display: flex;\n  margin-bottom: 10px;\n\n  a {\n    display: flex;\n    align-items: center;\n    color: ",";\n    text-decoration: none;\n  }\n"]);return T=function(){return n},n}function J(){var n=Object(p.a)(["\n  display: flex;\n  align-items: center;\n  margin-right: 20px;\n  width: 120px;\n"]);return J=function(){return n},n}function Y(){var n=Object(p.a)(["\n  max-width: 780px;\n  padding: 0;\n  margin: 200px auto 0;\n\n  h1 {\n    font-size: 40px;\n    margin-bottom: 10px;\n\n    .ufo-letter {\n      font-size: 26px;\n    }\n  }\n  h2 {\n    font-size: 20px;\n    margin-bottom: 30px;\n\n    .flags {\n      position: relative;\n      top: 3px;\n    }\n  }\n\n  @media (max-width: 768px) {\n    max-width: 100%;\n    padding: 0 50px;\n  }\n"]);return Y=function(){return n},n}var _=h.d.div(Y()),U=h.d.div(J()),V=h.d.div(T(),function(n){return n.theme.colors.lightBlue}),$=Object(h.d)(H.a).attrs({src:A.a})(N()),K="\n  margin-right: 10px; \n  svg {\n    fill: #fff;\n  }\n",Q=Object(h.d)(H.a).attrs({src:D.a})(L(),K),Z=Object(h.d)(H.a).attrs({src:B.a})(I(),K),nn=Object(h.d)(H.a).attrs({src:P.a})(G(),K),tn=h.d.a(X()),en=Object(h.d)(C.b)(W(),function(n){return n.theme.colors.white},function(n){return n.theme.transition.button}),rn=function(){return u.a.createElement(_,null,u.a.createElement("h1",null,"Rich V",u.a.createElement("span",{className:"ufo-letter",role:"img","aria-label":"img"},"\ud83d\udc7d"),"ronov"," "),u.a.createElement("h2",null,"Front-end engineer"," ",u.a.createElement("span",{className:"flags"},u.a.createElement("span",{role:"img","aria-label":"img"},"\ud83c\uddf7\ud83c\uddfa \ud83c\uddec\ud83c\udde7"))),u.a.createElement(V,null,u.a.createElement(U,null,u.a.createElement(Z,null)," ",u.a.createElement("p",null,"Email:")," "),u.a.createElement(tn,{href:"mailto:richvoronov@gmail.com"},"richvoronov@gmail.com",u.a.createElement($,null))),u.a.createElement(V,null,u.a.createElement(U,null,u.a.createElement(Q,null)," ",u.a.createElement("p",null,"Telegram:")," "),u.a.createElement(tn,{href:"https://t.me/richvoronov",target:"_blank",rel:"noreferrer noopener"},"@richvoronov",u.a.createElement($,null))),u.a.createElement(V,null,u.a.createElement(U,null,u.a.createElement(nn,null)," ",u.a.createElement("p",null,"Github:")," "),u.a.createElement(tn,{href:"https://github.com/richvoronov",target:"_blank",rel:"noreferrer noopener"},"richvoronov",u.a.createElement($,null))),u.a.createElement(en,{to:"/sayhi"},"Say hi ",u.a.createElement("span",null,">")))},an=e(40),on=e.n(an),cn=e(41),ln=e.n(cn),un=e(42),sn=e.n(un);function dn(){var n=Object(p.a)(["\n  position: fixed;\n  z-index: 10;\n  bottom: 50px;\n  right: 300px;\n  height: 100px;\n  width: 100px;\n  animation: "," 1.7s ease-in-out infinite 1s;\n  animation-fill-mode: forwards;\n\n  svg {\n    ",";\n  }\n"]);return dn=function(){return n},n}function hn(){var n=Object(p.a)(["\n  height: 150px;\n  width: 150px;\n  position: fixed;\n  z-index: 10;\n  top: 140px;\n  right: 100px;\n  animation: "," 1.7s ease-in-out infinite 0.8s;\n  animation-fill-mode: forwards;\n  svg {\n    ",";\n  }\n"]);return hn=function(){return n},n}function fn(){var n=Object(p.a)(["\n  height: 150px;\n  width: 150px;\n  position: fixed;\n  z-index: 10;\n  top: 50px;\n  left: 100px;\n  transform: rotate(-10deg);\n  animation: "," 1.7s ease-in-out infinite;\n  animation-fill-mode: forwards;\n  svg {\n    ",";\n  }\n"]);return fn=function(){return n},n}function pn(){var n=Object(p.a)(["\n  0% {\n    transform: translate3d(0,0,0);\n  }\n\n  50% {\n    transform: translate3d(0,-10px,0);\n  }\n\n  100% {\n    transform: translate3d(0,0,0);\n  }\n"]);return pn=function(){return n},n}function mn(){var n=Object(p.a)(["\n  0% {\n    transform: translate3d(0,0,0);\n  }\n\n  50% {\n    transform: translate3d(0,10px,0);\n  }\n\n  100% {\n    transform: translate3d(0,0,0);\n  }\n"]);return mn=function(){return n},n}function gn(){var n=Object(p.a)(["\n  0% {\n    transform: translate3d(0,0,0) rotate(-10deg);\n  }\n\n  50% {\n    transform: translate3d(0,20px,0) rotate(-8deg);\n  }\n\n  100% {\n    transform: translate3d(0,0,0) rotate(-10deg);\n  }\n"]);return gn=function(){return n},n}function bn(){var n=Object(p.a)(["\n  display: block;\n\n  @media (max-width: 920px) {\n    display: none;\n  }\n"]);return bn=function(){return n},n}var vn=h.d.div(bn()),xn=Object(h.e)(gn()),wn=Object(h.e)(mn()),On=Object(h.e)(pn()),jn="width: 100%;\nheight: 100%;",yn=Object(h.d)(H.a).attrs({src:on.a})(fn(),xn,jn),En=Object(h.d)(H.a).attrs({src:ln.a})(hn(),wn,jn),kn=Object(h.d)(H.a).attrs({src:sn.a})(dn(),On,jn),zn=function(){return u.a.createElement(vn,null,u.a.createElement(yn,null),u.a.createElement(En,null),u.a.createElement(kn,null))};function Cn(){var n=Object(p.a)(["\n  margin-top: 20px;\n  font-family: 'Chemistry', sans-serif;\n  font-size: 30px;\n  text-decoration: none;\n  color: ",";\n\n  display: flex;\n  align-items: center;\n\n  span {\n    display: inline-block;\n    margin-right: 10px;\n    font-size: 25px;\n    transition: ",";\n  }\n  &:hover {\n    span {\n      transform: translateX(-2px);\n    }\n  }\n"]);return Cn=function(){return n},n}function Sn(){var n=Object(p.a)(["\n  margin-top: 30px;\n  display: inline-block;\n  border: none;\n  background: ",";\n  outline: none;\n  padding: 15px;\n  color: ",";\n  font-size: ",";\n  cursor: pointer;\n  transition: all 0.5s ease;\n  text-transform: uppercase;\n  text-decoration: none;\n  pointer-events: all;\n\n  &:hover,\n  &:active {\n    background: ",";\n  }\n\n  ",";\n"]);return Sn=function(){return n},n}function Hn(){var n=Object(p.a)(["\n  width: 100%;\n  height: 100%;\n  border: none;\n  padding: 0;\n  font-size: 40px;\n  text-transform: uppercase;\n  font-weight: 100;\n  color: #cda352;\n  background: transparent;\n  padding-left: 40px;\n  padding-right: 40px;\n  box-sizing: border-box;\n  text-align: center;\n  outline: none;\n  letter-spacing: 10px;\n"]);return Hn=function(){return n},n}function Rn(){var n=Object(p.a)(["\n  width: 80%;\n  height: 70px;\n  margin: 0 auto;\n  background: rgba(21, 31, 40, 0.7);\n"]);return Rn=function(){return n},n}function An(){var n=Object(p.a)(["\n  margin-bottom: 20px;\n"]);return An=function(){return n},n}function Mn(){var n=Object(p.a)(["\n  font-size: ",";\n"]);return Mn=function(){return n},n}function Bn(){var n=Object(p.a)(["\n  font-size: ",";\n  margin-bottom: 25px;\n  text-transform: uppercase;\n  letter-spacing: 15px;\n"]);return Bn=function(){return n},n}function Fn(){var n=Object(p.a)(["\n  background: rgba(87, 47, 111, 0.3);\n  width: 615px;\n  margin: 0 auto;\n  font-family: 'Chemistry', sans-serif;\n  text-align: center;\n  padding: 30px;\n\n  @media (max-width: 920px) {\n    width: auto;\n  }\n"]);return Fn=function(){return n},n}function Dn(){var n=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-top: 200px;\n\n  @media (max-width: 920px) {\n    padding: 0 30px;\n  }\n"]);return Dn=function(){return n},n}var qn=h.d.div(Dn()),Pn=h.d.div(Fn()),Wn=h.d.p(Bn(),function(n){return n.theme.font.middleSize}),Xn=(h.d.ul(Mn(),function(n){return n.theme.font.textDescrSize}),h.d.li(An()),h.d.div(Rn())),Gn=h.d.input(Hn()),In=h.d.a(Sn(),function(n){return n.theme.colors.purple},function(n){return n.theme.colors.white},function(n){return n.theme.font.textDescrSize},function(n){return n.theme.colors.purpleHover},function(n){var t=n.disabled,e=n.theme;return t&&"\n    background: ".concat(e.colors.grey,";\n    pointer-events: none;\n  ")}),Ln=Object(h.d)(C.b)(Cn(),function(n){return n.theme.colors.white},function(n){return n.theme.transition.button}),Nn=function(n){function t(){var n,e;Object(r.a)(this,t);for(var a=arguments.length,c=new Array(a),l=0;l<a;l++)c[l]=arguments[l];return(e=Object(i.a)(this,(n=Object(o.a)(t)).call.apply(n,[this].concat(c)))).state={value:""},e.handleChange=function(n){e.setState({value:n.target.value})},e}return Object(c.a)(t,n),Object(a.a)(t,[{key:"render",value:function(){var n=this.state.value;return u.a.createElement(u.a.Fragment,null,u.a.createElement(zn,null),u.a.createElement(qn,null,u.a.createElement(Pn,null,u.a.createElement(Wn,null,"Say hi to me"),u.a.createElement(Xn,null,u.a.createElement(Gn,{onChange:this.handleChange,value:n})),u.a.createElement(In,{href:"mailto:richvoronov@gmail.com",disabled:!n.length},n.length?"Click me":"Write something")),u.a.createElement(Ln,{to:"/"},u.a.createElement("span",null,"<")," Back")))}}]),t}(l.Component),Tn=function(n){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(c.a)(t,n),Object(a.a)(t,[{key:"render",value:function(){return u.a.createElement("div",null,"Not Found")}}]),t}(l.Component);function Jn(){var n=Object(p.a)(["\n  text-align: center;\n  position: fixed;\n  bottom: 20px;\n  width: 100%;\n"]);return Jn=function(){return n},n}var Yn=h.d.div(Jn()),_n=function(){return u.a.createElement(Yn,null,"Copyright \xa92018")};function Un(){var n=Object(p.a)(["\n  position: relative;\n  z-index: 50;\n"]);return Un=function(){return n},n}function Vn(){var n=Object(p.a)(["\n  margin-top: 100px;\n"]);return Vn=function(){return n},n}var $n=h.d.div(Vn()),Kn=h.d.div(Un()),Qn=function(){return u.a.createElement(C.a,null,u.a.createElement(Kn,null,u.a.createElement($n,null,u.a.createElement(S.c,null,u.a.createElement(S.a,{path:"/",exact:!0,component:rn}),u.a.createElement(S.a,{path:"/sayhi",component:Nn}),u.a.createElement(S.a,{component:Tn}))),u.a.createElement(_n,null)))},Zn=e(43),nt=e.n(Zn),tt=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:250;!function(n){var t=n.type,e=n.listener,r=n.element,a=void 0===r?window:r,i=n.options,o=Object(l.useRef)();Object(l.useEffect)(function(){o.current=e},[e]);var c=Object(l.useCallback)(function(n){o.current(n)},[]);Object(l.useEffect)(function(){var n=function(n){return n&&"current"in n?n.current:n}(a);return n.addEventListener(t,c,i),function(){return n.removeEventListener(t,c)}},[t,a,i,c])}({type:"resize",listener:Object(l.useMemo)(function(){return 0!==t?nt()(function(t){return n(t)},t):function(t){return n(t)}},[t,n]),options:{passive:!0}})};function et(){var n=Object(p.a)(["\n  margin: auto;\n  overflow: hidden;\n"]);return et=function(){return n},n}var rt=h.d.div(et()),at=function(){var n=Object(l.useState)({width:window.innerWidth,height:window.innerHeight}),t=Object(f.a)(n,2),e=t[0],r=t[1];return tt(function(){return r({width:window.innerWidth,height:window.innerHeight})},500),u.a.createElement(rt,null,u.a.createElement(Qn,null),u.a.createElement(z,{windowHeight:e.height}),u.a.createElement(b,{width:e.width,height:e.height}))},it=e(44),ot=e.n(it);e(64);function ct(){var n=Object(p.a)(["\n  ",";\n\n  *::placeholder {\n    color: ",";\n    font-size: ",";\n    opacity: 0.5;\n    /* line-height: 100px; */\n    font-weight: 400;\n    font-style: italic;\n    height: 100%;\n}\n\n  html, body {\n    height: 100%;\n  }\n\n  body {\n    /* font-family: 'Encode Sans', sans-serif; */\n    font-family: 'Chalkduster', 'Helvetica';\n    color: ",";\n    background-color: ",";\n    font-size: ",";\n    overflow: hidden;\n    height: ",';\n    min-width: 320px;\n    max-height: 1080px;\n    /* max-width: 1980px;\n    max-height: 1080px; */\n  }\n\n  img {\n    width: 100%;\n  }\n\n  h1, h2, h3, h4, h5, p, span {\n    line-height: 1.33;\n  }\n\n  /* clears the \'X\' from Internet Explorer */\ninput[type=search]::-ms-clear {  display: none; width : 0; height: 0; }\ninput[type=search]::-ms-reveal {  display: none; width : 0; height: 0; }\n\n/* clears the \'X\' from Chrome */\ninput[type="search"]::-webkit-search-decoration,\ninput[type="search"]::-webkit-search-cancel-button,\ninput[type="search"]::-webkit-search-results-button,\ninput[type="search"]::-webkit-search-results-decoration { display: none; }\n\n\n']);return ct=function(){return n},n}var lt=Object(h.b)(ct(),ot.a,function(n){return n.theme.colors.grey},function(n){return n.theme.font.smallSize},function(n){return n.theme.colors.white},function(n){return n.theme.colors.darkBlue},function(n){return n.theme.font.normalSize},function(n){var t=n.bodyHeight;return t&&t+"px"}),ut={colors:{darkBlue:"#071924",white:"#f1f2f2",purple:"#58306f",purpleHover:"#5b4476",blue:"#0652dd",black:"#2c2a2a",grey:"#8c8c8c",lightGrey:"#e5e5e5",whiteGrey:"#f3f3f3",green:"#009432",red:"#ea2027",orange:"#ee5a24",yellow:"#ffc312",lightBlue:"#8BA3DB",darkRed:"#c11b21",lightRed:"#D89694"},font:{textDescrSize:"18px",textTitleSize:"20px",smallSize:"18px",middleSize:"30px",bigSize:"35px"},transition:{background:"10s ease",textHover:"0.2s ease",button:"0.2s ease"}};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));navigator.cookieEnabled||alert("Enable cookies for comfortable work with this site.");var st=function(n){function t(){var n,e;Object(r.a)(this,t);for(var a=arguments.length,c=new Array(a),l=0;l<a;l++)c[l]=arguments[l];return(e=Object(i.a)(this,(n=Object(o.a)(t)).call.apply(n,[this].concat(c)))).state={bodyHeight:"auto",render:!1},e}return Object(c.a)(t,n),Object(a.a)(t,[{key:"componentDidMount",value:function(){this.setState({bodyHeight:window.innerHeight,render:!0})}},{key:"render",value:function(){var n=this.state,t=n.render,e=n.bodyHeight;return u.a.createElement(h.a,{theme:ut},u.a.createElement("div",null,t&&u.a.createElement(at,null),u.a.createElement(lt,{bodyHeight:e})))}}]),t}(l.Component);d.a.render(u.a.createElement(st,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[47,1,2]]]);
//# sourceMappingURL=main.afe862f8.chunk.js.map