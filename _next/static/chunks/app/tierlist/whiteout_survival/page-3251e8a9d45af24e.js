(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[210],{2614:(e,t,a)=>{Promise.resolve().then(a.bind(a,1356))},7634:(e,t,a)=>{"use strict";a.d(t,{f:()=>m});var l=a(5155),s=a(2115),n=a(7254),o=a(2877),r=a.n(o);let i=["#FF7F7F","#FFBF7F","#FFDF7F","#FFFF7F","#BFFF7F","#7FFF7F","#7FFFFF","#7FBFFF","#1DA1F2","#7F7FFF","#BF7FBF","#FF7FFF","#666666","#BBBBBB","#EDEDED","#FFFFFF"];var c=a(3747);function u(e){let{imageCard:t,cardIndex:a}=e,o=(0,s.useRef)(null),[r,i]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{let e=o.current;return(0,n.A)(e),(0,c.kZ)({element:e,getInitialData:()=>({...t,cardIndex:a}),onDragStart:()=>i(!0),onDrop:()=>i(!1)})},[]),(0,l.jsxs)("div",{role:"file",className:"group relative ml-1 mt-1 flex h-20 w-20 items-center justify-center rounded-sm bg-cover hover:scale-105",children:[(0,l.jsx)("img",{className:"max-w-full max-h-full object-cover rounded-sm ".concat(r?"opacity-40":""),src:t.url,ref:o,alt:t.name}),(0,l.jsx)("div",{className:"absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none",children:(0,l.jsx)("span",{className:"text-white text-sm font-semibold",children:t.name})})]})}function m(e){let{row:t,rowIndex:a,hideText:o=!1}=e,m=(0,s.useRef)(null),[p,w]=(0,s.useState)(!1),h=e=>{console.log(e)};return(0,s.useEffect)(()=>((0,n.A)(m.current),(0,c.tO)({element:m.current,getData:()=>({rowIndex:a}),getIsSticky:()=>!0,onDragEnter:()=>w(!0),onDragLeave:()=>w(!1),onDrop:()=>w(!1)})),[]),(0,l.jsxs)("div",{role:"row",className:"row flex outline outline-1 outline-black","data-testid":"row",ref:m,children:[!o&&(0,l.jsx)(r(),{tagName:"label",className:"flex w-24 cursor-text items-center justify-center break-all border-r border-black p-1 text-center leading-4 text-black",style:{backgroundColor:i[a],minHeight:"80px",minWidth:"96px"},html:t.title,onChange:e=>h(e.target.value),"data-testid":"label"}),(0,l.jsx)("div",{className:"min-w-[80px] flex-1 flex flex-row ".concat(p?"bg-blue-100":"bg-gray-100"),children:t.items.map((e,t)=>(0,l.jsx)(u,{cardIndex:t,imageCard:e},t))})]})}},118:(e,t,a)=>{"use strict";a.d(t,{A:()=>i});var l=a(5155),s=a(2115),n=a(7254),o=a(3747),r=a(7634);function i(e){let{initialData:t}=e,[a,i]=(0,s.useState)(t);(0,s.useEffect)(()=>(0,o.$p)({onDrop(e){let{source:t,location:a}=e;if(!a.current.dropTargets.length)return;console.log(t,a);let[l]=a.initial.dropTargets,s=l.data.rowIndex,o=t.data,r=o.cardIndex,[m]=a.current.dropTargets,p=m.data.rowIndex;if((0,n.A)("number"==typeof s),(0,n.A)("number"==typeof p),(0,n.A)("number"==typeof r),console.log(s,p,o),-1==p){if(-1===s)return;i(e=>{let t=e.map(e=>({...e,items:[...e.items]}));return t[s].items.splice(r,1),t})}else -1===s?((0,n.A)(null!==o&&"object"==typeof o&&"url"in o&&"name"in o&&"string"==typeof o.url&&"string"==typeof o.name),c({finishRowId:p,card:o})):u({startRowId:s,finishRowId:p,itemIndexInStartRow:r})}}),[]);let c=(0,s.useCallback)(e=>{let{finishRowId:t,card:a}=e;i(e=>{let l=e.map(e=>({...e,items:[...e.items]}));return l[t].items.push(a),l})},[]),u=(0,s.useCallback)(e=>{let{startRowId:t,finishRowId:a,itemIndexInStartRow:l}=e;t!==a&&i(e=>{let s=e.map(e=>({...e,items:[...e.items]})),[n]=s[t].items.splice(l,1);return s[a].items.push(n),s})},[]);return(0,l.jsx)("div",{className:"h-full flex-col space-y-6 md:py-12",children:(0,l.jsx)("div",{className:"container mx-auto max-w-6xl flex-col space-y-5",children:(0,l.jsx)("div",{className:"rows flex-col space-y-[1px]",children:a.map((e,t)=>(0,l.jsx)(r.f,{row:e,rowIndex:t},t))})})})}},1356:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>r});var l=a(5155),s=a(6046),n=a(118);let o={name:"WOS: 화이트아웃 서바이벌",initialData:[{title:"S",items:[{name:"Jeronimo",url:"https://www.allclash.com/wp-content/uploads/2023/12/whiteout-jeronimo.jpeg"},{name:"Bahiti",url:"https://www.allclash.com/wp-content/uploads/2023/12/whiteout-bahiti.jpeg"},{name:"Jessie",url:"https://www.allclash.com/wp-content/uploads/2023/12/whiteout-jessie.jpeg"},{name:"Logan",url:"https://www.allclash.com/wp-content/uploads/2023/12/whiteout-logan.jpeg"}]},{title:"A",items:[{name:"Natalia",url:"https://www.allclash.com/wp-content/uploads/2023/12/whiteout-natalia.jpeg"},{name:"Philly",url:"https://www.allclash.com/wp-content/uploads/2023/12/whiteout-philly.jpeg"},{name:"Reina",url:"https://www.allclash.com/wp-content/uploads/2023/12/whiteout-reina.jpeg"},{name:"Sergey",url:"https://www.allclash.com/wp-content/uploads/2023/12/whiteout-sergey.jpeg"}]},{title:"B",items:[{name:"Patrick",url:"https://www.allclash.com/wp-content/uploads/2023/12/whiteout-patrick.jpeg"},{name:"Alonso",url:"https://www.allclash.com/wp-content/uploads/2023/12/whiteout-alonso.jpeg"},{name:"Greg",url:"https://www.allclash.com/wp-content/uploads/2023/12/whiteout-greg.jpeg"}]},{title:"C",items:[{name:"Mia",url:"https://www.allclash.com/wp-content/uploads/2023/12/whiteout-mia.jpeg"},{name:"Ahmose",url:"https://www.allclash.com/wp-content/uploads/2023/12/whiteout-ahmose.jpeg"},{name:"Flint",url:"https://www.allclash.com/wp-content/uploads/2023/12/whiteout-flint.jpeg"}]}]};function r(){let e=(0,s.useRouter)();return(0,l.jsxs)("main",{className:"container mx-auto p-6",children:[(0,l.jsx)("button",{onClick:()=>{e.back()},className:"bg-gray-500 text-white p-3 rounded-lg hover:bg-gray-600 mb-6",children:"← Back"}),(0,l.jsxs)("h1",{className:"text-4xl font-bold text-center text-gray-900",children:[o.name," 티어 리스트"]}),(0,l.jsx)("div",{className:"mt-8",children:(0,l.jsx)(n.A,{initialData:o.initialData})})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[487,441,517,358],()=>t(2614)),_N_E=e.O()}]);