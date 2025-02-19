"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[748],{7678:(e,t,r)=>{r.d(t,{A:()=>c});var n=r(5155),a=r(6046),l=r(118),s=r(1536),i=r(6793),o=r.n(i);function c(e){let{gameData:t,children:r}=e,i=(0,a.useRouter)();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(o(),{children:[(0,n.jsx)("title",{children:"".concat(t.name," Tier List")}),(0,n.jsx)("meta",{name:"description",content:t.description}),(0,n.jsx)("meta",{name:"keywords",content:"".concat(t.name,", Tier List, Game Guide, 티어표, 티어 표, 티어리스트")}),(0,n.jsx)("meta",{property:"og:title",content:"".concat(t.name," Tier List")}),(0,n.jsx)("meta",{property:"og:description",content:t.description}),(0,n.jsx)("script",{type:"application/ld+json",children:JSON.stringify({"@context":"https://schema.org","@type":"Game",name:t.name,description:t.description})})]}),(0,n.jsxs)("main",{className:"container mx-auto p-6",children:[(0,n.jsx)("button",{onClick:()=>{i.push("/")},className:"bg-gray-500 text-white p-3 rounded-lg hover:bg-gray-600 mb-6",children:"← Back"}),(0,n.jsx)("h1",{className:"text-4xl font-bold text-center text-gray-900",children:t.name}),(0,n.jsxs)("section",{className:"mt-6",children:[(0,n.jsx)("h2",{className:"text-2xl font-semibold text-gray-800",children:"게임 소개"}),(0,n.jsx)("p",{className:"mt-2 text-lg text-gray-600",children:t.description})]}),(0,n.jsxs)("section",{className:"mt-6",children:[(0,n.jsx)("h2",{className:"text-2xl font-semibold text-gray-800",children:"공식 홈페이지 & 다운로드"}),(0,n.jsxs)("div",{className:"mt-4 flex space-x-6",children:[t.officialWebsite&&(0,n.jsx)("a",{href:t.officialWebsite,target:"_blank",rel:"noopener noreferrer",className:"bg-gray-800 text-white px-6 py-3 rounded-lg text-lg flex items-center space-x-2 hover:bg-gray-900 transition-colors duration-300",children:(0,n.jsx)("span",{children:"공식 홈페이지"})}),t.playStoreLink&&(0,n.jsxs)("a",{href:t.playStoreLink,target:"_blank",rel:"noopener noreferrer",className:"bg-green-600 text-white px-6 py-3 rounded-lg text-lg flex items-center space-x-2 hover:bg-green-700 transition-colors duration-300",children:[(0,n.jsx)(s.N8X,{className:"text-xl"}),(0,n.jsx)("span",{children:"Play Store"})]}),t.appStoreLink&&(0,n.jsxs)("a",{href:t.appStoreLink,target:"_blank",rel:"noopener noreferrer",className:"bg-blue-600 text-white px-6 py-3 rounded-lg text-lg flex items-center space-x-2 hover:bg-blue-700 transition-colors duration-300",children:[(0,n.jsx)(s.eMv,{className:"text-xl"}),(0,n.jsx)("span",{children:"App Store"})]})]})]}),(0,n.jsx)("h2",{className:"text-2xl font-semibold text-gray-900 mt-6",children:t.tierListName?t.tierListName:"캐릭터 티어 리스트"}),(0,n.jsx)("div",{className:"mt-8",children:(0,n.jsx)(l.A,{initialData:t.initialData})}),(0,n.jsxs)("div",{className:"mt-10 text-center",children:[(0,n.jsx)("p",{className:"text-lg text-gray-700",children:"직접 나만의 티어리스트를 만들고 싶다면?"}),(0,n.jsx)("button",{onClick:()=>{i.push("/builder")},className:"mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition-colors duration-300",children:"티어리스트 만들기"})]}),r&&(0,n.jsx)("div",{className:"mt-8",children:r})]})]})}},7634:(e,t,r)=>{r.d(t,{f:()=>m});var n=r(5155),a=r(2115),l=r(7254),s=r(2877),i=r.n(s);let o=["#FF7F7F","#FFBF7F","#FFDF7F","#FFFF7F","#BFFF7F","#7FFF7F","#7FFFFF","#7FBFFF","#1DA1F2","#7F7FFF","#BF7FBF","#FF7FFF","#666666","#BBBBBB","#EDEDED","#FFFFFF"];var c=r(3747),u=r(5565);function d(e){let{imageCard:t,cardIndex:r}=e,s=(0,a.useRef)(null),[i,o]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{let e=s.current;return(0,l.A)(e),(0,c.kZ)({element:e,getInitialData:()=>({...t,cardIndex:r}),onDragStart:()=>o(!0),onDrop:()=>o(!1)})},[]),(0,n.jsxs)("div",{role:"file",className:"group relative ml-1 mt-1 flex h-20 w-20 items-center justify-center rounded-sm bg-cover hover:scale-105",children:[t.url?(0,n.jsx)(u.default,{className:"max-w-full max-h-full object-contain rounded-sm ".concat(i?"opacity-40":""),src:t.url,alt:t.name||"Image",layout:"fill",ref:s,priority:!1,loading:"lazy"}):(0,n.jsx)("div",{className:"w-full h-full flex items-center justify-center text-center bg-gray-200 text-sm text-black rounded-sm",ref:s,children:t.name}),(0,n.jsx)("div",{className:"absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none",children:(0,n.jsx)("span",{className:"text-white text-sm font-semibold",children:t.name})})]})}function m(e){let{row:t,rowIndex:r,hideText:s=!1}=e,u=(0,a.useRef)(null),[m,p]=(0,a.useState)(!1),f=e=>{console.log(e)};return(0,a.useEffect)(()=>((0,l.A)(u.current),(0,c.tO)({element:u.current,getData:()=>({rowIndex:r}),getIsSticky:()=>!0,onDragEnter:()=>p(!0),onDragLeave:()=>p(!1),onDrop:()=>p(!1)})),[]),(0,n.jsxs)("div",{role:"row",className:"row flex outline outline-1 outline-black","data-testid":"row",ref:u,children:[!s&&(0,n.jsx)(i(),{tagName:"label",className:"flex w-24 cursor-text items-center justify-center break-all border-r border-black p-1 text-center leading-4 text-black",style:{backgroundColor:o[r],minHeight:"80px",minWidth:"96px"},html:t.title,onChange:e=>f(e.target.value),"data-testid":"label"}),(0,n.jsx)("div",{className:"min-w-[80px] flex-1 flex flex-wrap ".concat(m?"bg-blue-100":"bg-gray-100"),style:{gap:"8px"},children:t.items.map((e,t)=>(0,n.jsx)(d,{cardIndex:t,imageCard:e},t))})]})}},118:(e,t,r)=>{r.d(t,{A:()=>o});var n=r(5155),a=r(2115),l=r(7254),s=r(3747),i=r(7634);function o(e){let{initialData:t}=e,[r,o]=(0,a.useState)(t);(0,a.useEffect)(()=>(0,s.$p)({onDrop(e){let{source:t,location:r}=e;if(!r.current.dropTargets.length)return;console.log(t,r);let[n]=r.initial.dropTargets,a=n.data.rowIndex,s=t.data,i=s.cardIndex,[d]=r.current.dropTargets,m=d.data.rowIndex;if((0,l.A)("number"==typeof a),(0,l.A)("number"==typeof m),(0,l.A)("number"==typeof i),console.log(a,m,s),-1==m){if(-1===a)return;o(e=>{let t=e.map(e=>({...e,items:[...e.items]}));return t[a].items.splice(i,1),t})}else -1===a?((0,l.A)(null!==s&&"object"==typeof s&&"url"in s&&"name"in s&&"string"==typeof s.url&&"string"==typeof s.name),c({finishRowId:m,card:s})):u({startRowId:a,finishRowId:m,itemIndexInStartRow:i})}}),[]);let c=(0,a.useCallback)(e=>{let{finishRowId:t,card:r}=e;o(e=>{let n=e.map(e=>({...e,items:[...e.items]}));return n[t].items.push(r),n})},[]),u=(0,a.useCallback)(e=>{let{startRowId:t,finishRowId:r,itemIndexInStartRow:n}=e;t!==r&&o(e=>{let a=e.map(e=>({...e,items:[...e.items]})),[l]=a[t].items.splice(n,1);return a[r].items.push(l),a})},[]);return(0,n.jsx)("div",{className:"h-full flex-col space-y-6 md:py-12",children:(0,n.jsx)("div",{className:"container mx-auto max-w-6xl flex-col space-y-5",children:(0,n.jsx)("div",{className:"rows flex-col space-y-[1px]",children:r.map((e,t)=>(0,n.jsx)(i.f,{row:e,rowIndex:t},t))})})})}},6793:(e,t)=>{function r(){return null}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3435:(e,t,r)=>{r.d(t,{k5:()=>u});var n=r(2115),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=n.createContext&&n.createContext(a),s=["attr","size","title"];function i(){return(i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach(function(t){var n,a;n=t,a=r[t],(n=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(n))in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function u(e){return t=>n.createElement(d,i({attr:c({},e.attr)},t),function e(t){return t&&t.map((t,r)=>n.createElement(t.tag,c({key:r},t.attr),e(t.child)))}(e.child))}function d(e){var t=t=>{var r,{attr:a,size:l,title:o}=e,u=function(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}(e,s),d=l||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,u,{className:r,style:c(c({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),o&&n.createElement("title",null,o),e.children)};return void 0!==l?n.createElement(l.Consumer,null,e=>t(e)):t(a)}}}]);