import{u as l,j as t,T as r,a as c}from"./index-DNj0eB6Q.js";import{C as h,a as u,b as x,c as g,B as j,d as f}from"./post-Ki6NXhnd.js";const p=i=>{const{title:e,author:s,text:n,id:o}=i.post,d=l(),a={header:{padding:16,display:"flex",alignItems:"center"},avatar:{width:40,height:40,borderRadius:"50%",backgroundColor:"#f0f0f0",marginRight:16},title:{fontWeight:"bold",fontSize:18},author:{color:"#999",fontSize:14},button:{color:"#3897f0",fontWeight:"bold"}};return t.jsxs(h,{style:a.card,children:[t.jsx(u,{avatar:t.jsx("div",{style:a.avatar}),title:t.jsx(r,{style:a.title,children:e}),subheader:t.jsx(r,{style:a.author,children:s})}),t.jsx(x,{style:a.content,children:t.jsx(r,{children:n})}),t.jsx(g,{style:a.actions,children:t.jsx(j,{style:a.button,onClick:()=>{d(`/#post${o}`)},children:"Go back"})})]})};function m(i){const{taskId:e}=c(),{post:s,error:n,isLoading:o}=f(e);return t.jsxs(t.Fragment,{children:[t.jsxs("h1",{children:["Post #",s==null?void 0:s.id]}),o||!s?"loading":t.jsx(p,{post:s},s.id)]})}export{m as default};