(this.webpackJsonpgaussian=this.webpackJsonpgaussian||[]).push([[0],{19:function(e,t,n){},56:function(e,t){},64:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(34),i=n.n(s),c=(n(19),n(3)),l=n(13),o=n(10),u=n(4),d=n(68);var x=function(e){for(var t=[],n=0;n<e.length;n++){var a=e[n].filter((function(e,t){return 2!==t}));t.push(a)}return 0===Object(d.b)(t)?["Soluci\xf3n infinita"]:function(e){for(var t=0;t<e.length;t++){for(var n=0;t>n;)e[t]=Object(d.a)(e[t],Object(d.d)(Object(d.d)(e[n],e[t][n]),-1)),n+=1;if(e[t]=Object(d.c)(e[t],e[t][t]),e[t].includes(NaN)||e[t].includes(1/0))return["No hay soluci\xf3n"]}return function(e){for(var t,n,a=[],r=e.length-1;r>=0;r--){for(var s=0,i=e[0].length-2,c=e[r][e[0].length-1];s<a.length;)c-=e[r][i]*a[s],s++,i--;a.push((t=c,n=3,Number(Math.round(t+"e"+n)+"e-"+n)))}return a.reverse()}(e)}(e)},m=n(1),j=r.a.createContext();function b(e){var t=e.children,n=r.a.useState(""),a=Object(u.a)(n,2),s=a[0],i=a[1],c=r.a.useState([]),l=Object(u.a)(c,2),d=l[0],b=l[1],h=r.a.useState([" "]),p=Object(u.a)(h,2),g=p[0],f=p[1],v=r.a.useState(""),O=Object(u.a)(v,2),y=O[0],N=O[1],w=r.a.useState(""),I=Object(u.a)(w,2),C=I[0],z=I[1];return r.a.useEffect((function(){if(b([]),z(""),N(""),parseInt(s)<2)z("Numero de incognitas debe ser mayor a 1");else if(parseInt(s)>6)z("Numero de incognitas debe ser menor a 6");else if(""!==s&&parseInt(s)>1&&parseInt(s)<7){var e=Array.from(Array(parseInt(s)*(parseInt(s)+1)).keys());f(e)}else f([])}),[s]),Object(m.jsx)(j.Provider,{value:{setIncog:i,setInputs:f,handleMainInput:function(e){i(e.target.value)},handleInputs:function(e,t){var n=Object(o.a)(d);n[t]=parseInt(e.target.value),b(n),z("")},createMatrix:function(){if(!(""===s?(z("Debes a\xf1adir el n\xfamero de incognitas"),!0):d.includes(void 0)||d.length<parseInt(s)*(parseInt(s)+1)||d.includes(NaN)?(z("La matriz debe estar completamente definida"),!0):void 0)){z("");for(var e=[],t=0,n=parseInt(s)+1,a=0;a<parseInt(s);a++){for(var r=[];t<n;)r.push(d[t]),t++;e.push(r),n+=parseInt(s)+1}N(x(e))}},setValues:b,refresh:function(){i(""),b([]),z(""),N("")},result:y,values:d,error:C,incog:s,inputs:g},children:t})}function h(){var e=r.a.useContext(j).refresh;return Object(m.jsx)(l.b,{to:"/",className:"absolute top-0 left-0 cursor-pointer",onClick:e,children:Object(m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",id:"BackArrow",className:"rounded-full border-2 border-gray-900 text-gray-900",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(m.jsx)("path",{d:"M10 19l-7-7m0 0l7-7m-7 7h18"})})})}function p(){var e=r.a.useContext(j),t=e.incog,n=e.inputs,a=e.handleMainInput,s=e.handleInputs,i=e.createMatrix,c=e.result,l=e.error,o=["x","y","z","a","b","c"];return Object(m.jsxs)("div",{id:"calculator",className:"px-5 w-full flex flex-wrap content-center justify-center",children:[Object(m.jsx)(h,{}),Object(m.jsx)("h1",{className:"w-full py-10 mt-3 text-5xl font-semibold text-gray-800 text-center self-center ",children:"Calculadora"}),Object(m.jsx)("input",{type:"number",className:"p-5 w-full text-sm border-2 focus:border-red-300 hover:border-red-300 rounded outline-none",placeholder:"N\xfamero de Incognitas (max 6)",value:t,onChange:a}),Object(m.jsx)("div",{className:"w-full grid grid-cols-".concat(parseInt(t)+1," grid-rows-").concat(t," gap-2 my-4"),id:"inputs",children:n.map((function(e){return Object(m.jsx)("input",{type:"number",className:"w-4/6 py-2 text-sm text-gray-800 place-self-center text-center border-2 focus:border-red-300 hover:border-red-300 rounded outline-none",placeholder:"".concat(e),onChange:function(t){return s(t,e)}})}))}),l?Object(m.jsx)("h2",{className:"w-full text-sm text-center text-red-700 my-6",children:l}):"",Object(m.jsx)("a",{onClick:i,className:"border-2 cursor-pointer rounded text-sm hover:border-red-300 text-gray-800 focus:border-red-300  outline-none mb-3 px-5 py-3",children:"Calcular"}),Object(m.jsx)("div",{className:"w-full flex flex-wrap justify-around items-center",children:c?c.length<2?c.map((function(e){return Object(m.jsx)("h1",{className:" px-4 text-red-500 text-sm text-center",children:e})})):c.map((function(e,t){return Object(m.jsx)("h1",{className:"text-sm px-4 text-green-500",children:"".concat(o[t]," = ").concat(e)})})):""})]})}var g=n(44);function f(){return Object(m.jsxs)("div",{className:"w-full h-full flex flex-wrap",id:"principal",children:[Object(m.jsxs)("a",{href:"https://github.com/Jrigoo",children:[" ",Object(m.jsx)(g.a,{className:"absolute top-0 right-0 text-gray-800 cursor-pointer",id:"git-hub"})]}),Object(m.jsx)("h1",{className:"w-full py-10 text-5xl font-semibold text-gray-800 text-center self-center",id:"main__title",children:"Eliminaci\xf3n Gaussiana"}),Object(m.jsxs)("div",{className:"w-full grid grid-cols-2 auto-rows-min gap-2 ",children:[Object(m.jsxs)(l.b,{className:"group mx-4 p-3 rounded border-2 border-gray-300 hover:bg-red-500 ",to:"/calculator",children:[Object(m.jsx)("h2",{className:"text-lg text-gray-800 group-hover:text-gray-50 text-center",children:"Calculadora"}),Object(m.jsx)("p",{className:"text-sm text-gray-700 font-extralight group-hover:text-white text-center",children:"Usar la calculadora"})]}),Object(m.jsxs)(l.b,{className:"group mx-4 p-3 rounded border-2 border-gray-300 hover:bg-red-500 ",to:"/code",children:[Object(m.jsx)("h2",{className:"text-lg text-gray-800 group-hover:text-gray-50 text-center",children:"C\xf3digo"}),Object(m.jsx)("p",{className:"text-sm text-gray-700 font-extralight group-hover:text-white text-center",children:"Ver el codigo principal"})]})]})]})}var v=n(18);function O(){return Object(m.jsxs)("div",{id:"codigo",className:"px-5",children:[Object(m.jsx)(h,{}),Object(m.jsx)("h1",{className:"w-full py-9 text-5xl font-semibold text-gray-800 text-center self-center",children:"C\xf3digo"}),Object(m.jsx)("div",{className:"codigo py-5",children:Object(m.jsx)(v.a,{text:'const solve = (m) => {\n  let newMatrix = [];\n  for (let i = 0; i < m.length; i++) {\n    let x = m[i].filter((v, idx) => idx !== 2);\n    newMatrix.push(x);\n  }\n  let determinant = det(newMatrix);\n  if (determinant === 0) {\n    return ["Soluci\xf3n infinita"];\n  } else {\n    return gaussianElim(m);\n  }\n};',language:"javascript",theme:v.b,showLineNumbers:!0})}),Object(m.jsx)("p",{className:"text-sm text-justify text-gray-800 p-3",children:"Esta funci\xf3n es la inicial. Determina si la matriz tiene solucion. En caso de que si, llama a la funcion que empieza el metodo de eliminaci\xf3n gaussiana. Y en caso de que no, envia un error. Para calcular el determinante la matriz debe ser cuadrada por lo tanto, la funci\xf3n crea una nueva matriz con los mismos valores pero sin la ultima columna."}),Object(m.jsx)("div",{className:"codigo py-5",children:Object(m.jsx)(v.a,{text:'const gaussianElim = (m) => {\n  for (let i = 0; i < m.length; i++) {\n    let j = 0;\n    while (i > j) {\n      m[i] = add(m[i], multiply(multiply(m[j], m[i][j]), -1));\n      j += 1;\n    }\n    m[i] = divide(m[i], m[i][i]);\n\n    //Revisamos la matriz para ver si no tiene soluci\xf3n\n    if (m[i].includes(NaN) || m[i].includes(Infinity)) {\n      return ["No hay soluci\xf3n"];\n    }\n  }\n  return getResult(m);\n  };\n',language:"javascript",theme:v.b,showLineNumbers:!0})}),Object(m.jsx)("p",{className:"text-sm text-justify text-gray-800 p-3",children:"Esta funci\xf3n es la que se encarga de ejecutar el metodo de eliminaci\xf3n gaussiana. Lo que hace es iterar 3 varias veces la matriz asi lograr la diagonal de unos y los ceros."}),Object(m.jsx)("div",{className:"codigo py-5",children:Object(m.jsx)(v.a,{text:"const getResult = (m) => {\n  let values = [];\n  for (let i = m.length - 1; i >= 0; i--) {\n    let idx = 0;\n    let x = m[0].length - 2; \n    let variable = m[i][m[0].length - 1]; \n  \n    while (idx < values.length) {\n      variable = variable - m[i][x] * values[idx];\n      idx++;\n      x--;\n    }\n    values.push(round(variable, 3));\n  }\n  return values.reverse();\n};",language:"javascript",theme:v.b,showLineNumbers:!0})}),Object(m.jsx)("p",{className:"text-sm text-justify text-gray-800 pb-20",children:"Esta funci\xf3n es la que se encarga de obtener el resultado. Teniendo ya la matriz con su diagonal de unos y los ceros. La funci\xf3n itera una vez mas sobre esta nueva matriz y realiza las operaciones correspondients para obtener nuestras incognitas"})]})}function y(){return Object(m.jsx)("div",{id:"main_page",className:"main_page",children:Object(m.jsxs)(c.c,{children:[Object(m.jsx)(c.a,{path:"/",element:Object(m.jsx)(f,{})}),Object(m.jsx)(c.a,{path:"/calculator",element:Object(m.jsx)(p,{})}),Object(m.jsx)(c.a,{path:"/code",element:Object(m.jsx)(O,{})})]})})}i.a.render(Object(m.jsx)(l.a,{children:Object(m.jsx)(b,{children:Object(m.jsx)(y,{})})}),document.getElementById("root"))}},[[64,152,153]]]);
//# sourceMappingURL=main.0d00f27a.chunk.js.map