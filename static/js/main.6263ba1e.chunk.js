(this.webpackJsonpcripto=this.webpackJsonpcripto||[]).push([[0],{69:function(e,t,a){},70:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(9),r=a.n(i),o=(a(69),a(18)),l=a(29),s=a(30),u=a(53),j=a(52),b=a(45),d=a(54),h=(a(70),a(115)),v=a(108),O=a(110),f=a(116),x=a(111),p=a(112),g=a(114),m=a(117),y=a(113),C=a(107),S=1,k=0,T=function(){function e(){Object(l.a)(this,e),this.text="",this.permutation=[],this.type=k,this.table="",this.matrix=[[]]}return Object(s.a)(e,[{key:"setText",value:function(e){this.text=e}},{key:"cipherText",value:function(e,t){console.log("ORIGINAL ",e);var a=[];this.table="";for(var n="",c=e,i=Math.ceil(c.length/t),r=0;r<t;++r){for(var o=r,l=0,s=[];l<i;)o>=c.length?n=n.concat("X"):n+=c[o],s.push(n[n.length-1]),o+=t,l++;a.push(s)}if(this.matrix=a,console.log("TIPO: ",this.type),this.type===S){var u=[];for(r=0;r<i;++r){var j=[];for(o=0;o<t;++o)j.push(a[o][r]);u.push(j)}this.matrix=u}return console.log("CIFRADO ",n),n}},{key:"setType",value:function(e){this.type=e?S:k}},{key:"decrypyText",value:function(e,t){var a="",n=e,c=Math.ceil(n.length/t);console.log(c);for(var i=0;i<c;++i){var r=i,o=0;for(console.log("---");o<t;)r<n.length&&(console.log(n[r]),a+=n[r]),r+=c,o++}return a}},{key:"setKeyfromArray",value:function(e){this.permutation=e}}]),e}(),N=function(){function e(){Object(l.a)(this,e),this.abc="abcdefghijklmn\xf1opqrstuvwxyz",this.abc_up="ABCDEFGHIJKLMN\xd1OPQRSTUVWXYZ"}return Object(s.a)(e,[{key:"caesarShift",value:function(e,t){if(t<0)return this.caesarShift(e,t+26);for(var a="",n=0;n<e.length;n++){var c=e[n];if(c.match(/[a-z]/i)){var i=e.charCodeAt(n);i>=65&&i<=90?c=String.fromCharCode((i-65+t)%26+65):i>=97&&i<=122&&(c=String.fromCharCode((i-97+t)%26+97))}a+=c}return a}}]),e}(),I=a(6);function F(e){var t=e.children,a=e.value,n=e.index,c=Object(d.a)(e,["children","value","index"]);return Object(I.jsx)("div",Object(b.a)(Object(b.a)({role:"tabpanel",hidden:a!==n,id:"simple-tabpanel-".concat(n),"aria-labelledby":"simple-tab-".concat(n)},c),{},{children:a===n&&Object(I.jsx)(h.a,{p:3,children:t})}))}var w=Object(C.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)}}}})),A=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return Object(I.jsx)("table",{children:Object(I.jsx)("tbody",{children:this.props.tabla.map((function(e,t){return Object(I.jsx)("tr",{children:e.map((function(e,t){return Object(I.jsx)("td",{style:{border:"1px solid black",width:"20px",height:"20px"},children:e},"".concat(e).concat(t))}))},t)}))})})}}]),a}(c.a.Component);var L=function(){var e=w(),t=Object(n.useState)(0),a=Object(o.a)(t,2),c=a[0],i=a[1],r=Object(n.useState)([[]]),l=Object(o.a)(r,2),s=l[0],u=l[1],j=Object(n.useState)(""),b=Object(o.a)(j,2),d=b[0],h=b[1],C=Object(n.useState)(1),S=Object(o.a)(C,2),k=S[0],L=S[1],P=Object(n.useState)(""),D=Object(o.a)(P,2),E=D[0],M=D[1],B=Object(n.useState)(!1),J=Object(o.a)(B,2),R=J[0],z=J[1],G=Object(n.useState)(""),K=Object(o.a)(G,2),X=K[0],q=K[1],H=Object(n.useState)(""),Q=Object(o.a)(H,2),U=Q[0],V=Q[1],W=Object(n.useState)(1),Y=Object(o.a)(W,2),Z=Y[0],_=Y[1],$=new T,ee=new N;return Object(I.jsxs)("div",{className:"App",children:[Object(I.jsxs)(v.a,{position:"static",children:[Object(I.jsx)(O.a,{variant:"dense",children:"Criptografia"}),Object(I.jsxs)(f.a,{value:c,onChange:function(e,t){i(t)},children:[Object(I.jsx)(x.a,{label:"Transposici\xf3n"}),Object(I.jsx)(x.a,{label:"Sustituci\xf3n"})]})]}),Object(I.jsxs)(F,{value:c,index:0,children:[Object(I.jsx)(p.a,{variant:"h4",children:"Fila y Columna"}),Object(I.jsxs)("form",{className:e.root,children:[Object(I.jsx)("div",{children:Object(I.jsx)(g.a,{id:"outlined-basic",label:"Texto Plano",variant:"outlined",value:d,onChange:function(e){return h(e.target.value)}})}),Object(I.jsx)("div",{children:Object(I.jsx)(g.a,{id:"outlined-basic",label:"Llave de Encriptado",variant:"outlined",value:k,onChange:function(e){return L(e.target.value)}})})]}),Object(I.jsx)(p.a,{variant:"h5",children:"Tabla"}),Object(I.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(I.jsx)(A,{tabla:s})}),Object(I.jsxs)("div",{children:["Columnar",Object(I.jsx)(m.a,{checked:R,onChange:function(e){z(e.target.checked)}})]}),Object(I.jsxs)("div",{className:e.root,children:[Object(I.jsx)(y.a,{variant:"contained",color:"primary",onClick:function(){$.setType(R);var e=$.cipherText(d,Number(k));console.log($.matrix),u($.matrix),M(e)},children:"Cifrar"}),Object(I.jsx)(y.a,{variant:"contained",color:"secondary",onClick:function(){var e=$.decrypyText(E,Number(k));h(e)},children:"Descifrar"})]}),Object(I.jsx)(g.a,{id:"outlined-basic",label:"Texto Cifrado",variant:"outlined",value:E,onChange:function(e){return M(e.target.value)}})]}),Object(I.jsxs)(F,{value:c,index:1,children:[Object(I.jsx)(p.a,{variant:"h4",children:"Cifrado de C\xe9sar"}),Object(I.jsxs)("form",{className:e.root,children:[Object(I.jsx)("div",{children:Object(I.jsx)(g.a,{id:"outlined-basic",label:"Texto Plano",variant:"outlined",value:X,onChange:function(e){return q(e.target.value)}})}),Object(I.jsx)("div",{children:Object(I.jsx)(g.a,{id:"outlined-basic",label:"Llave de Encriptado",variant:"outlined",value:Z,onChange:function(e){return _(e.target.value)}})})]}),Object(I.jsxs)("div",{className:e.root,children:[Object(I.jsx)(y.a,{variant:"contained",color:"primary",value:X,onClick:function(){var e=Number(Z);V(ee.caesarShift(X,e))},children:"Cifrar"}),Object(I.jsx)(y.a,{variant:"contained",color:"secondary",value:U,onClick:function(){var e=Number(Z);q(ee.caesarShift(U,-1*e))},children:"Descifrar"})]}),Object(I.jsx)(g.a,{id:"outlined-basic",label:"Texto Cifrado",variant:"outlined",value:U,onChange:function(e){return V(e.target.value)}})]})]})},P=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,119)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),i(e),r(e)}))};r.a.render(Object(I.jsx)(c.a.StrictMode,{children:Object(I.jsx)(L,{})}),document.getElementById("root")),P()}},[[75,1,2]]]);
//# sourceMappingURL=main.6263ba1e.chunk.js.map