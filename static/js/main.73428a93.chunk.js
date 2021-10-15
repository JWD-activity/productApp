(this["webpackJsonpproduct-app"]=this["webpackJsonpproduct-app"]||[]).push([[0],{114:function(e,t,r){},145:function(e,t,r){"use strict";r.r(t);var n=r(0),c=r(40),o=r.n(c),a=(r(114),r(35)),i=r(16),s=r(206),j=r(98),l=Object(j.a)({typography:{htmlFontSize:10,fontFamily:"'Inter', sans-serif;",fontSize:14,fontWeightRegular:400,fontWeightMedium:600,fontWeightBold:700,h1:{fontWeight:600,fontSize:"2.5rem"},h2:{fontWeight:600,fontSize:"2rem"},subtitle1:{fontWeight:600},body1:{fontSize:"1.6rem"}},palette:{primary:{main:"#0A0C1B"},secondary:{main:"#AE1FEB"},text:{primary:"#fff"}},components:{MuiInput:{styleOverrides:{root:{fontSize:"1.6rem",fontWeight:400,color:"#0A0C1B",backgroundColor:"#fff",padding:"1.2rem",borderRadius:".5rem"}}},MuiToolbar:{styleOverrides:{root:{boxShadow:"0 4px 12px 0 rgb(17 68 153 / 15%)"}}},MuiSelect:{styleOverrides:{icon:{color:"#0A0C1B"},filled:{backgroundColor:"#fff",borderRadius:".5rem",fontWeight:400,color:"#0A0C1B"}}},MuiOutlinedInput:{styleOverrides:{notchedOutline:{borderColor:"#fff"}}},MuiMenuItem:{styleOverrides:{root:{color:"#0A0C1B"}}}}}),u=r(13),d=r(62),b=r.n(d);function m(e,t){switch(t.type){case"FETCH_SUCCESS":return{loading:!1,error:"",post:t.payload};case"FETCH_ERROR":return{loading:!1,error:"Something went wrong! Try again.",post:{}};default:return e}}var h="https://products-api-01.herokuapp.com/api/products",O={loading:!0,error:"",post:[]},p=r(2),x=Object(n.createContext)(),f=function(e){var t=e.children,r=Object(n.useReducer)(m,O),c=Object(u.a)(r,2),o=c[0],a=c[1],i=Object(n.useState)(""),s=Object(u.a)(i,2),j=s[0],l=s[1],d=Object(n.useState)(""),f=Object(u.a)(d,2),g=f[0],v=f[1];return Object(n.useEffect)((function(){b.a.get("".concat(h)).then((function(e){a({type:"FETCH_SUCCESS",payload:e.data})})).catch((function(e){a({type:"FETCH_ERROR"})}))}),[]),Object(p.jsx)(x.Provider,{value:{state:o,search:j,setSearchTerm:function(e){l(e)},sorting:g,setSort:function(e){v(e)}},children:t})},g=r(207),v=r(209),y=r(210);var C=function(){var e=Object(n.useContext)(x).setSearchTerm;return Object(p.jsx)(g.a,{position:"static",children:Object(p.jsx)(v.a,{component:"nav",children:Object(p.jsx)(a.b,{to:"/productApp",onClick:function(){e("")},children:Object(p.jsx)(y.a,{variant:"h6",component:"h1",color:"text.primary",children:"Products"})})})})},S=r(212),E=r(211),w=r(97),A=r.n(w);var R=function(){var e=Object(n.useContext)(x),t=e.search,r=e.setSearchTerm;return Object(p.jsx)(E.a,{placeholder:"Search",color:"secondary",value:t,onChange:function(e){r(e.target.value)},startAdornment:Object(p.jsx)(S.a,{position:"start",children:Object(p.jsx)(A.a,{})})})},F=r(203),T=r(202),B=r(213),L=r(199);var z=function(){var e=Object(n.useContext)(x),t=e.sorting,r=e.setSort;return Object(p.jsxs)(B.a,{fullWidth:!0,variant:"filled",children:[Object(p.jsx)(F.a,{id:"sort-by-label",color:"secondary",children:"Sort By"}),Object(p.jsxs)(L.a,{labelId:"sort-by-label",id:"sort-by-select",value:t,label:"Sort by",onChange:function(e){r(e.target.value)},sx:{minWidth:"20rem"},color:"secondary",children:[Object(p.jsx)(T.a,{value:"a-z",children:"Apphbeically, A-Z"}),Object(p.jsx)(T.a,{value:"z-a",children:"Apphbeically, Z-A"}),Object(p.jsx)(T.a,{value:"0-9",children:"Price, Low to High"}),Object(p.jsx)(T.a,{value:"9-0",children:"Price, High to Low"})]})]})},W=r(200),H=r(205);var I=function(e){var t=e.status,r=e.title,n=e.message;return Object(p.jsx)(H.a,{container:!0,item:!0,sx:{justifyContent:"center",alignItems:"center",p:"5rem",my:"5rem"},children:Object(p.jsxs)(W.a,{severity:t,sx:{px:"10rem"},variant:"filled",children:[Object(p.jsx)("strong",{children:r})," - ",n]})})},_=r(214),M=r(216),U=r(215);var k=function(e){var t=e.name,r=e.imgUrl,n=e.price,c=e.id;return Object(p.jsx)(H.a,{item:!0,xs:12,sm:6,md:4,children:Object(p.jsx)(a.b,{to:"/product/".concat(c),children:Object(p.jsxs)(_.a,{children:[Object(p.jsx)(U.a,{component:"img",height:"200",image:r,alt:t}),Object(p.jsxs)(M.a,{children:[Object(p.jsx)(y.a,{gutterBottom:!0,variant:"h6",component:"h1",color:"primary",children:t}),Object(p.jsx)(y.a,{variant:"h2",color:"text.secondary",children:"$".concat(n)})]})]})})})},P=r(218),N=r(217);var J=function(){var e=Object(n.useContext)(x),t=e.state,r=e.search,c=e.sorting,o=t.post,a=t.loading,i=t.error,s=Object(n.useState)(["name"]),j=Object(u.a)(s,1)[0],l=Object(n.useState)([]),d=Object(u.a)(l,2),b=d[0],m=d[1];return Object(n.useEffect)((function(){m(o)}),[o]),Object(n.useEffect)((function(){var e,t;m(r?(e=r,t=j,o.filter((function(r){return t.some((function(t){return r[t].toString().toLowerCase().indexOf(e.toLowerCase())>-1}))}))):o)}),[r]),Object(p.jsx)(P.a,{component:"main",children:Object(p.jsxs)(H.a,{container:!0,spacing:{xs:6,sm:7},columns:12,component:"section",sx:{justifyContent:"center",pt:"11rem"},children:[Object(p.jsxs)(H.a,{container:!0,sx:{justifyContent:"end"},spacing:2,children:[Object(p.jsx)(H.a,{item:!0,sx:{mb:".5rem"},children:Object(p.jsx)(R,{})}),Object(p.jsx)(H.a,{item:!0,sx:{mb:".5rem"},children:Object(p.jsx)(z,{})})]}),function(){var e=function(e,t){switch(e){case"a-z":return t.sort((function(e,t){return e.name.toLowerCase()>t.name.toLowerCase()?1:-1}));case"z-a":return t.sort((function(e,t){return e.name.toLowerCase()<t.name.toLowerCase()?1:-1}));case"9-0":return t.sort((function(e,t){return Number(t.price)-Number(e.price)}));case"0-9":return t.sort((function(e,t){return Number(e.price)-Number(t.price)}));default:return t}}(c,b);return a?Object(p.jsx)(N.a,{color:"secondary"}):i?Object(p.jsx)(I,{status:"error",title:"Error",message:i}):r&&0===e.length?Object(p.jsx)(I,{status:"info",title:"Search results",message:"Sorry No results found."}):!a&&e?e.map((function(e){return Object(p.jsx)(k,{id:e._id,imgUrl:e.imgURL,name:e.name,price:e.price,loading:a},e._id)})):void 0}()]})})},Z=r(198);var $=function(){var e=Object(i.e)().id,t=Object(n.useReducer)(m,O),r=Object(u.a)(t,2),c=r[0],o=r[1],a=c.loading,s=c.error,j=Object(n.useState)([]),l=Object(u.a)(j,2),d=l[0],x=l[1];return Object(n.useEffect)((function(){b.a.get("".concat(h,"/").concat(e)).then((function(e){o({type:"FETCH_SUCCESS",payload:e.data}),x(e.data)})).catch((function(e){o({type:"FETCH_ERROR"})}))}),[]),Object(p.jsx)(P.a,{component:"main",children:Object(p.jsx)(H.a,{container:!0,sx:{my:"5rem",justifyContent:"center"},children:a?Object(p.jsx)(N.a,{color:"secondary"}):s?Object(p.jsx)(I,{status:"error",title:"Error",message:s}):d?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(H.a,{item:!0,sx:{overflow:"hidden"},xs:12,sm:6,md:4,children:Object(p.jsx)("img",{src:d.imgURL,alt:d.name,style:{objectFit:"cover",width:"40rem",marginBottom:"3rem"}})}),Object(p.jsx)(H.a,{item:!0,xs:12,sm:6,md:8,children:Object(p.jsxs)(Z.a,{sx:{px:"2rem"},children:[Object(p.jsx)(y.a,{variant:"h1",component:"h1",color:"primary",sx:{mb:"3rem"},children:d.name}),Object(p.jsxs)(y.a,{variant:"h5",component:"h2",color:"text.secondary",sx:{mb:"3rem"},children:["$",d.price]}),Object(p.jsx)(y.a,{variant:"body1",component:"p",color:"primary",sx:{mb:"3rem"},children:d.description})]})})]}):void 0})})},D=r(219);var q=function(){return Object(p.jsx)("footer",{children:Object(p.jsx)(D.a,{sx:{textAlign:"center",p:"2rem 0"}})})};var G=function(){return console.log("render App"),Object(p.jsx)(s.a,{theme:l,children:Object(p.jsxs)(f,{children:[Object(p.jsx)(C,{}),Object(p.jsx)(i.a,{exact:!0,path:"/productApp",children:Object(p.jsx)(J,{})}),Object(p.jsx)(i.a,{path:"/productApp/product/:id",children:Object(p.jsx)($,{})}),Object(p.jsx)(q,{})]})})},K=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,220)).then((function(t){var r=t.getCLS,n=t.getFID,c=t.getFCP,o=t.getLCP,a=t.getTTFB;r(e),n(e),c(e),o(e),a(e)}))};o.a.render(Object(p.jsx)(a.a,{children:Object(p.jsx)(G,{})}),document.getElementById("root")),K()}},[[145,1,2]]]);
//# sourceMappingURL=main.73428a93.chunk.js.map