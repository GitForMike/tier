(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[462],{9719:(e,r,t)=>{Promise.resolve().then(t.bind(t,599))},7634:(e,r,t)=>{"use strict";t.d(r,{f:()=>c});var a=t(5155),n=t(2115),s=t(7254),o=t(2877),i=t.n(o);let l=["#FF7F7F","#FFBF7F","#FFDF7F","#FFFF7F","#BFFF7F","#7FFF7F","#7FFFFF","#7FBFFF","#1DA1F2","#7F7FFF","#BF7FBF","#FF7FFF","#666666","#BBBBBB","#EDEDED","#FFFFFF"];var d=t(3747);function g(e){let{imageCard:r,cardIndex:t}=e,o=(0,n.useRef)(null),[i,l]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{let e=o.current;return(0,s.A)(e),(0,d.kZ)({element:e,getInitialData:()=>({...r,cardIndex:t}),onDragStart:()=>l(!0),onDrop:()=>l(!1)})},[]),(0,a.jsx)("div",{role:"file",className:"group ml-1 mt-1 flex h-20 w-20 items-center justify-center rounded-sm bg-cover hover:scale-105",children:(0,a.jsx)("img",{className:"max-w-full max-h-full object-cover ".concat(i?"opacity-40":""),src:r.url,ref:o})})}function c(e){let{row:r,rowIndex:t,hideText:o=!1}=e,c=(0,n.useRef)(null),[p,f]=(0,n.useState)(!1),u=e=>{console.log(e)};return(0,n.useEffect)(()=>((0,s.A)(c.current),(0,d.tO)({element:c.current,getData:()=>({rowIndex:t}),getIsSticky:()=>!0,onDragEnter:()=>f(!0),onDragLeave:()=>f(!1),onDrop:()=>f(!1)})),[]),(0,a.jsxs)("div",{role:"row",className:"row flex outline outline-1 outline-black","data-testid":"row",ref:c,children:[!o&&(0,a.jsx)(i(),{tagName:"label",className:"flex w-24 cursor-text items-center justify-center break-all border-r border-black p-1 text-center leading-4 text-black",style:{backgroundColor:l[t],minHeight:"80px",minWidth:"96px"},html:r.title,onChange:e=>u(e.target.value),"data-testid":"label"}),(0,a.jsx)("div",{className:"min-w-[80px] flex-1 flex flex-row ".concat(p?"bg-blue-100":"bg-gray-100"),children:r.items.map((e,r)=>(0,a.jsx)(g,{cardIndex:r,imageCard:e},r))})]})}},118:(e,r,t)=>{"use strict";t.d(r,{A:()=>l});var a=t(5155),n=t(2115),s=t(7254),o=t(3747),i=t(7634);function l(e){let{initialData:r}=e,[t,l]=(0,n.useState)(r);(0,n.useEffect)(()=>(0,o.$p)({onDrop(e){let{source:r,location:t}=e;if(!t.current.dropTargets.length)return;console.log(r,t);let[a]=t.initial.dropTargets,n=a.data.rowIndex,o=r.data,i=o.cardIndex,[c]=t.current.dropTargets,p=c.data.rowIndex;if((0,s.A)("number"==typeof n),(0,s.A)("number"==typeof p),(0,s.A)("number"==typeof i),console.log(n,p,o),-1==p){if(-1===n)return;l(e=>{let r=e.map(e=>({...e,items:[...e.items]}));return r[n].items.splice(i,1),r})}else -1===n?((0,s.A)(null!==o&&"object"==typeof o&&"url"in o&&"name"in o&&"string"==typeof o.url&&"string"==typeof o.name),d({finishRowId:p,card:o})):g({startRowId:n,finishRowId:p,itemIndexInStartRow:i})}}),[]);let d=(0,n.useCallback)(e=>{let{finishRowId:r,card:t}=e;l(e=>{let a=e.map(e=>({...e,items:[...e.items]}));return a[r].items.push(t),a})},[]),g=(0,n.useCallback)(e=>{let{startRowId:r,finishRowId:t,itemIndexInStartRow:a}=e;r!==t&&l(e=>{let n=e.map(e=>({...e,items:[...e.items]})),[s]=n[r].items.splice(a,1);return n[t].items.push(s),n})},[]);return(0,a.jsx)("div",{className:"h-full flex-col space-y-6 md:py-12",children:(0,a.jsx)("div",{className:"container mx-auto max-w-6xl flex-col space-y-5",children:(0,a.jsx)("div",{className:"rows flex-col space-y-[1px]",children:t.map((e,r)=>(0,a.jsx)(i.f,{row:e,rowIndex:r},r))})})})}},599:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>p});var a=t(5155),n=t(6046),s=t(2115),o=t(8026);let i=/(png|jpg|jpeg)/i,l=[{title:"S",items:[]},{title:"A",items:[]},{title:"B",items:[]},{title:"C",items:[]},{title:"D",items:[]}];var d=t(7634);function g(){let[e,r]=(0,s.useState)([]),t=t=>{if(!(null==t?void 0:t.length))return;let a=(e,r)=>{null!=r||(r=Error()),e(r),console.error(r)};Promise.all(Array.from(t).map(e=>new Promise((r,t)=>{i.test(e.type)||a(t,TypeError("Invalid file extension"));let n=new FileReader;n.onload=()=>r(n.result),n.onerror=()=>a(t,n.error),n.readAsDataURL(e)}))).then(t=>{r([...new Set([...e,...t])])})};return(0,a.jsxs)("div",{className:"flex flex-col items-center space-y-10 text-center",children:[(0,a.jsx)("div",{className:"space-y-2"}),(0,a.jsxs)("div",{className:"flex flex-col items-center space-y-6 md:w-1/2",children:[(0,a.jsx)(o.FileDrop,{className:"flex h-32 w-96 items-center justify-center rounded-lg bg-slate-100 text-xl leading-8 outline-dashed outline-slate-300 text-gray-900",draggingOverTargetClassName:"bg-green-50 outline-green-400",onDrop:e=>t(e),children:(0,a.jsxs)("label",{className:"flex h-full w-full cursor-pointer items-center justify-center",htmlFor:"files",children:["Drop files here",(0,a.jsx)("br",{}),"or click to browse"]})}),(0,a.jsx)("input",{className:"pointer-events-none absolute opacity-0",accept:"image/png, image/jpeg, image/jpg",type:"file",id:"files",multiple:!0,onChange:e=>{e.preventDefault(),t(e.target.files)}}),(0,a.jsxs)("div",{className:"max-w-[592px] leading-5 text-gray-900",children:[(0,a.jsxs)("p",{className:"text-2xl",children:[e.length," Images"]}),e.length>0&&(0,a.jsx)("p",{className:"mb-2",children:"Drag an image to the tier list."}),(0,a.jsx)("div",{className:"flex flex-wrap",children:(0,a.jsx)(d.f,{rowIndex:-1,hideText:!0,row:{title:"default",items:e.map((e,r)=>({url:e,name:"".concat(r)}))}},-1)})]})]})]})}var c=t(118);function p(){let e=(0,n.useRouter)();return(0,a.jsxs)("main",{className:"container mx-auto p-6",children:[(0,a.jsx)("button",{onClick:()=>{e.back()},className:"bg-gray-500 text-white p-3 rounded-lg hover:bg-gray-600 mb-6",children:"← Back"}),(0,a.jsx)("h1",{className:"text-4xl font-bold text-center text-gray-900",children:"Tier List Builder"}),(0,a.jsx)(g,{}),(0,a.jsx)(c.A,{initialData:l})]})}},8026:function(e,r,t){"use strict";var a,n=this&&this.__extends||(a=function(e,r){return(a=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)r.hasOwnProperty(t)&&(e[t]=r[t])})(e,r)},function(e,r){function t(){this.constructor=e}a(e,r),e.prototype=null===r?Object.create(r):(t.prototype=r.prototype,new t)}),s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});var o=s(t(1996)),i=s(t(2115)),l=function(e){function r(t){var a=e.call(this,t)||this;return a.resetDragging=function(){a.frameDragCounter=0,a.setState({draggingOverFrame:!1,draggingOverTarget:!1})},a.handleWindowDragOverOrDrop=function(e){e.preventDefault()},a.handleFrameDrag=function(e){if(r.eventHasFiles(e)){if(a.frameDragCounter+="dragenter"===e.type?1:-1,1===a.frameDragCounter){a.setState({draggingOverFrame:!0}),a.props.onFrameDragEnter&&a.props.onFrameDragEnter(e);return}if(0===a.frameDragCounter){a.setState({draggingOverFrame:!1}),a.props.onFrameDragLeave&&a.props.onFrameDragLeave(e);return}}},a.handleFrameDrop=function(e){!a.state.draggingOverTarget&&(a.resetDragging(),a.props.onFrameDrop&&a.props.onFrameDrop(e))},a.handleDragOver=function(e){r.eventHasFiles(e)&&(a.setState({draggingOverTarget:!0}),!r.isIE()&&a.props.dropEffect&&(e.dataTransfer.dropEffect=a.props.dropEffect),a.props.onDragOver&&a.props.onDragOver(e))},a.handleDragLeave=function(e){a.setState({draggingOverTarget:!1}),a.props.onDragLeave&&a.props.onDragLeave(e)},a.handleDrop=function(e){if(a.props.onDrop&&r.eventHasFiles(e)){var t=e.dataTransfer?e.dataTransfer.files:null;a.props.onDrop(t,e)}a.resetDragging()},a.handleTargetClick=function(e){a.props.onTargetClick&&a.props.onTargetClick(e),a.resetDragging()},a.stopFrameListeners=function(e){e&&(e.removeEventListener("dragenter",a.handleFrameDrag),e.removeEventListener("dragleave",a.handleFrameDrag),e.removeEventListener("drop",a.handleFrameDrop))},a.startFrameListeners=function(e){e&&(e.addEventListener("dragenter",a.handleFrameDrag),e.addEventListener("dragleave",a.handleFrameDrag),e.addEventListener("drop",a.handleFrameDrop))},a.frameDragCounter=0,a.state={draggingOverFrame:!1,draggingOverTarget:!1},a}return n(r,e),r.prototype.componentDidMount=function(){this.startFrameListeners(this.props.frame),this.resetDragging(),window.addEventListener("dragover",this.handleWindowDragOverOrDrop),window.addEventListener("drop",this.handleWindowDragOverOrDrop)},r.prototype.componentDidUpdate=function(e){e.frame!==this.props.frame&&(this.resetDragging(),this.stopFrameListeners(e.frame),this.startFrameListeners(this.props.frame))},r.prototype.componentWillUnmount=function(){this.stopFrameListeners(this.props.frame),window.removeEventListener("dragover",this.handleWindowDragOverOrDrop),window.removeEventListener("drop",this.handleWindowDragOverOrDrop)},r.prototype.render=function(){var e=this.props,r=e.children,t=e.className,a=e.targetClassName,n=e.draggingOverFrameClassName,s=e.draggingOverTargetClassName,o=this.state,l=o.draggingOverTarget,d=o.draggingOverFrame,g=a;return d&&(g+=" "+n),l&&(g+=" "+s),i.default.createElement("div",{className:t,onDragOver:this.handleDragOver,onDragLeave:this.handleDragLeave,onDrop:this.handleDrop},i.default.createElement("div",{className:g,onClick:this.handleTargetClick},r))},r.isIE=function(){return"undefined"!=typeof window&&(-1!==window.navigator.userAgent.indexOf("MSIE")||window.navigator.appVersion.indexOf("Trident/")>0)},r.eventHasFiles=function(e){var r=!1;if(e.dataTransfer){var t=e.dataTransfer.types;for(var a in t)if("Files"===t[a]){r=!0;break}}return r},r.propTypes={className:o.default.string,targetClassName:o.default.string,draggingOverFrameClassName:o.default.string,draggingOverTargetClassName:o.default.string,onDragOver:o.default.func,onDragLeave:o.default.func,onDrop:o.default.func,onTargetClick:o.default.func,dropEffect:o.default.oneOf(["copy","move","link","none"]),frame:function(e,r,t){var a=e[r];return null==a?Error("Warning: Required prop `"+r+"` was not specified in `"+t+"`"):a===document||a instanceof HTMLElement?void 0:Error("Warning: Prop `"+r+"` must be one of the following: document, HTMLElement!")},onFrameDragEnter:o.default.func,onFrameDragLeave:o.default.func,onFrameDrop:o.default.func},r.defaultProps={dropEffect:"copy",frame:"undefined"==typeof window?void 0:window.document,className:"file-drop",targetClassName:"file-drop-target",draggingOverFrameClassName:"file-drop-dragging-over-frame",draggingOverTargetClassName:"file-drop-dragging-over-target"},r}(i.default.PureComponent);r.FileDrop=l}},e=>{var r=r=>e(e.s=r);e.O(0,[487,441,517,358],()=>r(9719)),_N_E=e.O()}]);