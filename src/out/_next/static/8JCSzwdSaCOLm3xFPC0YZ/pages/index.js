(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"23aj":function(e,t,a){"use strict";a.r(t);var n=a("UrUy"),r=a.n(n),i=a("ZOIa"),o=a.n(i);function l(e,t,a,n,r,i,l){try{var c=e[i](l),s=c.value}catch(u){return void a(u)}c.done?t(s):o.a.resolve(s).then(n,r)}var c=a("mXGw"),s=a.n(c),u=a("bBV7"),d=a.n(u),m=a("9fEB"),p=a.n(m),f=a("bgBK"),v=a("06R1"),h=a("5UIW"),b=a("R82R"),g=a("ozoj"),w=a("lOOT"),j=s.a.createElement,O=Object(b.a)(function(e){return Object(g.a)({root:{display:"flex",flexDirection:"column",minHeight:"100vh"},main:{flexGrow:1,display:"flex",alignItems:"center"}})}),x=function(e){var t=e.title,a=e.children,n=O(Object(w.a)());return j(s.a.Fragment,null,j(p.a,null,j("title",null,t),j("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})),j(f.a,null,j("div",{className:n.root},j(h.a,{className:n.main},a),j(v.a,null))))},E=a("V2/N"),y=a("1LRU"),N=a("bJWG"),S=a("I4Pu"),k=a("/ZiB"),P=a("/NZN"),z=a("uUAZ"),D=a("1PTH"),C=a("jPxp"),T=a("Q+qT"),I=a("rw/D"),R=s.a.createElement,M=Object(b.a)(function(e){return Object(g.a)({image:{backgroundImage:"url(https://source.unsplash.com/random)",backgroundRepeat:"no-repeat",backgroundColor:e.palette.grey[50],backgroundSize:"cover",backgroundPosition:"center"}})}),A=function(){var e=M(Object(w.a)());return R(E.a,{item:!0,xs:!1,sm:4,md:7,className:e.image})},B=s.a.createElement,H=Object(b.a)(function(e){return Object(g.a)({root:{display:"flex",minHeight:"100vh"},paper:{margin:e.spacing(2),marginBottom:e.spacing(12),display:"flex",flexDirection:"column",alignItems:"center",alignSelf:"center"},form:{width:"100%",marginTop:e.spacing(3)},dashlink:{margin:e.spacing(3,0,2)}})});t.default=function(){var e=Object(c.useContext)(D.AuthContext),t=Object(c.useState)(""),a=t[0],n=t[1],i=Object(c.useState)(""),s=i[0],u=i[1],m=Object(c.useState)(!0),p=m[0],f=m[1],v=Object(c.useState)(""),b=v[0],g=v[1];Object(c.useEffect)(function(){f(!(a&&s))},[a,s]);var j=function(){var t,n=(t=r.a.mark(function t(n){var i;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,t.next=4,e.signIn(a,s);case 4:i=t.sent,console.log(i),d.a.push("/dashboard"),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),console.error("error:",t.t0),g(t.t0);case 13:case"end":return t.stop()}},t,null,[[1,9]])}),function(){var e=this,a=arguments;return new o.a(function(n,r){var i=t.apply(e,a);function o(e){l(i,n,r,o,c,"next",e)}function c(e){l(i,n,r,o,c,"throw",e)}o(void 0)})});return function(e){return n.apply(this,arguments)}}(),O=H(Object(w.a)()),R=e.isAuth?B(P.a,{color:"primary",variant:"contained",onClick:function(){return d.a.push("/dashboard")},className:O.dashlink},"Dashboard"):B("form",{className:O.form,onSubmit:function(e){return j(e)},noValidate:!0},B(T.a,{setEmail:function(e){return n(e)}}),B(I.a,{setPassword:function(e){return u(e)}}),B(C.a,{disabled:p},"Sign In"),B(E.a,{container:!0},B(E.a,{item:!0,xs:!0},B(y.a,{onClick:function(){return d.a.push("/auth/reset")},variant:"body2"},"Forgot password?")),B(E.a,{item:!0},B(y.a,{onClick:function(){return d.a.push("/auth/signup")},variant:"body2"},"Don't have an account? Sign Up"))));return B("div",null,B(E.a,{container:!0,component:"main",className:O.root},B(E.a,{item:!0,xs:12,sm:8,md:5,component:N.a,elevation:6,square:!0},B(x,{title:"Molotov Home"},B(S.a,null),B(h.a,{maxWidth:"xs"},B("div",{className:O.paper},B(k.a,{variant:"h5",gutterBottom:!0},"Molotov\u2122 Serverless"),B(k.a,{variant:"subtitle2"},"SaaS Starter with Next React Amplify"),B(z.a,{variant:"error",message:b}),R)))),B(A,null)))}},WjHl:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a("23aj")}])},"rw/D":function(e,t,a){"use strict";var n=a("mXGw"),r=a.n(n),i=a("Qyht"),o=a("3Dqh"),l=a("AeqC"),c=a("6vEY"),s=a("Fcif"),u=a("dV/x"),d=(a("W0B4"),a("PDtE")),m=a("/ZiB"),p=a("gbh0"),f=a("UNwf"),v=r.a.forwardRef(function(e,t){var a=e.children,n=e.classes,i=e.className,o=e.component,l=void 0===o?"div":o,c=e.disablePointerEvents,p=void 0!==c&&c,v=e.disableTypography,h=void 0!==v&&v,b=e.position,g=e.variant,w=Object(u.a)(e,["children","classes","className","component","disablePointerEvents","disableTypography","position","variant"]),j=Object(f.b)()||{},O=g;return g&&j.variant,j&&!O&&(O=j.variant),r.a.createElement(f.a.Provider,{value:null},r.a.createElement(l,Object(s.a)({className:Object(d.a)(n.root,i,p&&n.disablePointerEvents,j.hiddenLabel&&n.hiddenLabel,{filled:n.filled}[O],{start:n.positionStart,end:n.positionEnd}[b],{dense:n.marginDense}[j.margin]),ref:t},w),"string"!==typeof a||h?a:r.a.createElement(m.a,{color:"textSecondary"},a)))}),h=Object(p.a)({root:{display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center"},filled:{"&$positionStart:not($hiddenLabel)":{marginTop:16}},positionStart:{marginRight:8},positionEnd:{marginLeft:8},disablePointerEvents:{pointerEvents:"none"},hiddenLabel:{},marginDense:{}},{name:"MuiInputAdornment"})(v),b=a("oQEK"),g=a("VQdz");function w(e,t){var a=r.a.memo(r.a.forwardRef(function(t,a){return r.a.createElement(g.a,Object(s.a)({ref:a},t),e)}));return a.muiName=g.a.muiName,a}var j=w(r.a.createElement("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"})),O=w(r.a.createElement(r.a.Fragment,null,r.a.createElement("path",{fill:"none",d:"m0 0h24v24H0z"}),r.a.createElement("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"}))),x=a("R82R"),E=a("ozoj"),y=a("lOOT"),N=r.a.createElement,S=Object(x.a)(function(e){return Object(E.a)({textfield:{margin:e.spacing(2,0,0)}})});t.a=function(e){var t=e.setPassword,a=S(Object(y.a)()),r=Object(n.useState)(!1),s=r[0],u=r[1],d=Object(n.useState)(!0),m=d[0],p=d[1],f=Object(n.useState)(""),v=f[0],g=f[1],w=null;m||N(i.a,{error:!m,id:"standard-weight-helper-text"},v);return N(o.a,{required:!0,variant:"outlined",fullWidth:!0,className:a.textfield},N(l.a,{htmlFor:"outlined-adornment-password",error:!m},"Password"),N(c.a,{required:!0,error:!m,id:"outlined-adornment-password",type:s?"text":"password",onChange:function(e){return a=e.target.value,null!==w&&clearTimeout(w),void(w=setTimeout(function(){var e=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/.test(a);p(e),g(a.length>0?"Invalid password.":"Enter password."),t(e?a:""),w=null},300));var a},endAdornment:N(h,{position:"end"},N(b.a,{"aria-label":"toggle password visibility",onClick:function(){u(!s)},onMouseDown:function(e){e.preventDefault()}},N(s?j:O,null))),labelWidth:80}),N(i.a,{error:!m,id:"standard-weight-helper-text"},v))}}},[["WjHl",1,0]]]);