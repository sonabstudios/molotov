(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"0dNw":function(e,t,n){"use strict";n.r(t);var a=n("mXGw"),r=n.n(a),i=n("bBV7"),o=n.n(i),s=n("Hj0o"),l=n("p/6a"),c=n("Q+qT"),u=n("rw/D"),d=n("jPxp"),m=n("1PTH"),f=n("uUAZ"),p=n("V2/N"),b=n("1LRU"),h=n("R82R"),v=n("ozoj"),g=n("lOOT"),w=r.a.createElement,j=Object(h.a)(function(e){return Object(v.a)({form:{width:"100%",marginTop:e.spacing(1)}})});t.default=function(){var e=Object(a.useContext)(m.AuthContext),t=Object(a.useState)(""),n=t[0],r=t[1],i=Object(a.useState)(""),h=i[0],v=i[1],E=Object(a.useState)(!0),O=E[0],S=E[1],x=Object(a.useState)(""),N=x[0],P=x[1];Object(a.useEffect)(function(){S(!(n&&h))},[n,h]);var y=j(Object(g.a)());return w(s.a,{title:"Molotov Auth"},w(l.a,{title:"Sign Up"},w(f.a,{variant:"error",message:N}),w("form",{className:y.form,onSubmit:function(t){return function(t){t.preventDefault(),e.signUp(n,h).then(function(e){console.log(e),o.a.push("/auth/signup/confirm")}).catch(function(e){console.error("error:",e),P(e)})}(t)},noValidate:!0},w(c.a,{setEmail:function(e){return r(e)}}),w(u.a,{setPassword:function(e){return v(e)}}),w(d.a,{disabled:O},"Sign Up"),w(p.a,{container:!0},w(p.a,{item:!0,xs:!0}),w(p.a,{item:!0},w(b.a,{href:"#",onClick:function(){return o.a.push("/auth")},variant:"body2"},"Already have an account? Sign In"))))))}},BXQL:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth/signup",function(){return n("0dNw")}])},"rw/D":function(e,t,n){"use strict";var a=n("mXGw"),r=n.n(a),i=n("Qyht"),o=n("3Dqh"),s=n("AeqC"),l=n("6vEY"),c=n("Fcif"),u=n("dV/x"),d=(n("W0B4"),n("PDtE")),m=n("/ZiB"),f=n("gbh0"),p=n("UNwf"),b=r.a.forwardRef(function(e,t){var n=e.children,a=e.classes,i=e.className,o=e.component,s=void 0===o?"div":o,l=e.disablePointerEvents,f=void 0!==l&&l,b=e.disableTypography,h=void 0!==b&&b,v=e.position,g=e.variant,w=Object(u.a)(e,["children","classes","className","component","disablePointerEvents","disableTypography","position","variant"]),j=Object(p.b)()||{},E=g;return g&&j.variant,j&&!E&&(E=j.variant),r.a.createElement(p.a.Provider,{value:null},r.a.createElement(s,Object(c.a)({className:Object(d.a)(a.root,i,f&&a.disablePointerEvents,j.hiddenLabel&&a.hiddenLabel,{filled:a.filled}[E],{start:a.positionStart,end:a.positionEnd}[v],{dense:a.marginDense}[j.margin]),ref:t},w),"string"!==typeof n||h?n:r.a.createElement(m.a,{color:"textSecondary"},n)))}),h=Object(f.a)({root:{display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center"},filled:{"&$positionStart:not($hiddenLabel)":{marginTop:16}},positionStart:{marginRight:8},positionEnd:{marginLeft:8},disablePointerEvents:{pointerEvents:"none"},hiddenLabel:{},marginDense:{}},{name:"MuiInputAdornment"})(b),v=n("oQEK"),g=n("VQdz");function w(e,t){var n=r.a.memo(r.a.forwardRef(function(t,n){return r.a.createElement(g.a,Object(c.a)({ref:n},t),e)}));return n.muiName=g.a.muiName,n}var j=w(r.a.createElement("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"})),E=w(r.a.createElement(r.a.Fragment,null,r.a.createElement("path",{fill:"none",d:"m0 0h24v24H0z"}),r.a.createElement("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"}))),O=n("R82R"),S=n("ozoj"),x=n("lOOT"),N=r.a.createElement,P=Object(O.a)(function(e){return Object(S.a)({textfield:{margin:e.spacing(2,0,0)}})});t.a=function(e){var t=e.setPassword,n=P(Object(x.a)()),r=Object(a.useState)(!1),c=r[0],u=r[1],d=Object(a.useState)(!0),m=d[0],f=d[1],p=Object(a.useState)(""),b=p[0],g=p[1],w=null;m||N(i.a,{error:!m,id:"standard-weight-helper-text"},b);return N(o.a,{required:!0,variant:"outlined",fullWidth:!0,className:n.textfield},N(s.a,{htmlFor:"outlined-adornment-password",error:!m},"Password"),N(l.a,{required:!0,error:!m,id:"outlined-adornment-password",type:c?"text":"password",onChange:function(e){return n=e.target.value,null!==w&&clearTimeout(w),void(w=setTimeout(function(){var e=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/.test(n);f(e),g(n.length>0?"Invalid password.":"Enter password."),t(e?n:""),w=null},300));var n},endAdornment:N(h,{position:"end"},N(v.a,{"aria-label":"toggle password visibility",onClick:function(){u(!c)},onMouseDown:function(e){e.preventDefault()}},N(c?j:E,null))),labelWidth:80}),N(i.a,{error:!m,id:"standard-weight-helper-text"},b))}}},[["BXQL",1,0]]]);