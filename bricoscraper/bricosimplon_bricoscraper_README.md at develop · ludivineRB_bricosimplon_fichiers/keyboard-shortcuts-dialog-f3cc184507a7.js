"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["keyboard-shortcuts-dialog"],{31481:(e,t,i)=>{i.d(t,{I:()=>n});let n=(0,i(96540).createContext)(null)},12480:(e,t,i)=>{i.d(t,{U0:()=>r});var n=i(97156);let s={Android:"Android",iOS:"iOS",macOS:"macOS",Windows:"Windows",Linux:"Linux",Unknown:"Unknown"};function r(){return function(){let e=s.Unknown,t=!1;if(n.cg){let i=n.cg.navigator,r=i.userAgent,o=i?.userAgentData?.platform||i.platform;-1!==["Macintosh","MacIntel","MacPPC","Mac68K","macOS"].indexOf(o)?e=s.macOS:-1!==["iPhone","iPad","iPod"].indexOf(o)?e=s.iOS:-1!==["Win32","Win64","Windows","WinCE"].indexOf(o)?e=s.Windows:/Android/.test(r)?e=s.Android:/Linux/.test(o)&&(e=s.Linux),t=i?.userAgentData?.mobile??(e===s.Android||e===s.iOS)}return{os:e,isAndroid:e===s.Android,isIOS:e===s.iOS,isMacOS:e===s.macOS,isWindows:e===s.Windows,isLinux:e===s.Linux,isDesktop:e===s.macOS||e===s.Windows||e===s.Linux,isMobile:t}}().isMacOS}},18558:(e,t,i)=>{i.d(t,{JC:()=>n.JC,KK:()=>n.KK,SK:()=>r,Vy:()=>n.Vy,ai:()=>n.ai,oc:()=>n.oc,rd:()=>n.rd});var n=i(50515);let s=/(?:^|,)((?:[^,]|,(?=\+| |$))*(?:,(?=,))?)/g;function r(e){return Array.from(e.matchAll(s)).map(([,e])=>e)}},98164:(e,t,i)=>{i.d(t,{$$:()=>a,GI:()=>r,zw:()=>s});var n=i(18558);let s=()=>{if("undefined"==typeof document)return!1;let e=document.querySelector("meta[name=keyboard-shortcuts-preference]");return!e||"all"===e.content},r=e=>/Enter|Arrow|Escape|Meta|Control|Mod|Esc/.test(e)||e.includes("Alt")&&e.includes("Shift"),o=new Set(["button","checkbox","color","file","hidden","image","radio","range","reset","submit"]),a=e=>{let t=(0,n.Vy)(e),i=s()&&!function(e){if(!(e instanceof HTMLElement))return!1;let t=e.nodeName.toLowerCase(),i=e.getAttribute("type")?.toLowerCase()??"text",n="true"===e.ariaReadOnly||"true"===e.getAttribute("aria-readonly")||null!==e.getAttribute("readonly");return("select"===t||"textarea"===t||"input"===t&&!o.has(i)||e.isContentEditable)&&!n}(e.target);return r(t)||i}},34968:(e,t,i)=>{var n=i(72245),s=i(74848),r=i(96540),o=i(26750),a=i(75177),l=i(30595),d=i(55847),u=i(86079),c=i(8784);function m({group:{service:{name:e},commands:t}}){let i=(0,r.useId)();return(0,s.jsxs)(a.A,{sx:{borderRadius:2,border:"1px solid",borderColor:"border.default",overflow:"hidden"},children:[(0,s.jsx)(a.A,{as:"h3",id:i,sx:{bg:"canvas.subtle",fontWeight:"bold",py:2,px:3,fontSize:1},children:e}),(0,s.jsx)(a.A,{as:"ul",role:"list","aria-labelledby":i,sx:{listStyleType:"none"},children:t.map(({id:e,name:t,keybinding:i})=>(0,s.jsxs)(a.A,{as:"li",sx:{borderTop:"1px solid",borderColor:"border.default",py:2,px:3,display:"flex",gap:2,justifyContent:"space-between",alignItems:"center"},children:[(0,s.jsx)("div",{children:t}),(0,s.jsx)(a.A,{sx:{textAlign:"right"},children:(Array.isArray(i)?i:[i]).map((e,t)=>(0,s.jsxs)(r.Fragment,{children:[t>0&&" or ",(0,s.jsx)(c.U,{keys:e})]},e))})]},e))})]})}try{m.displayName||(m.displayName="ShortcutsGroupList")}catch{}let p={keyboardShortcuts:"Keyboard shortcuts",siteWideShortcuts:"Site-wide shortcuts",loading:"Loading"};i(89794);var f=i(58033),h=i(28784),g=i(18558);let v=()=>(0,s.jsxs)(a.A,{role:"status",sx:{display:"flex",height:"100%",justifyContent:"center",alignItems:"center"},children:[(0,s.jsx)(l.A,{size:"large"}),(0,s.jsx)("span",{className:"sr-only",children:p.loading})]}),y=e=>Array.isArray(e)?e.map(e=>(0,g.rd)(e)):(0,g.rd)(e??""),w=({children:e})=>(0,s.jsx)(a.A,{sx:{display:"flex",flexDirection:"row",gap:2,flexWrap:"wrap"},children:e}),b=({children:e})=>(0,s.jsx)(a.A,{sx:{flex:"250px",display:"flex",flexDirection:"column",gap:2},children:e}),x=({visible:e,onVisibleChange:t,docsUrl:i})=>{let[n,o]=(0,r.useState)({service:{id:"global",name:"Global"},commands:[]}),[a,l]=(0,r.useState)([]),[c,g]=(0,r.useState)(!1);return((0,r.useEffect)(()=>{let t=(0,f.c)(),i=async()=>{g(!0);let e=document.querySelector("meta[name=github-keyboard-shortcuts]");if(!e)throw Error('The "github-keyboard-shortcuts" meta tag must be present');let i={contexts:e.content},n=`/site/keyboard_shortcuts?${new URLSearchParams(i).toString()}`,s=await (0,h.lS)(n,{method:"GET"});if(s.ok){let{global:e,...i}=(await s.json()).commands;o({service:{id:"global",name:p.siteWideShortcuts},commands:[...e.commands,...t.find(e=>"global"===e.service.id)?.commands??[]].map(e=>({...e,keybinding:y(e.keybinding)}))}),l([...Object.values(i),...t].map(e=>({...e,commands:e.commands.map(e=>({...e,keybinding:y(e.keybinding)}))})))}else l(t.map(e=>({...e,commands:e.commands.map(e=>({...e,keybinding:y(e.keybinding)}))})));g(!1)};e&&i()},[e]),e)?(0,s.jsx)(u.l,{title:p.keyboardShortcuts,"aria-modal":"true",width:"xlarge",height:"large",onClose:()=>t(!1),sx:{color:"fg.default"},children:c?(0,s.jsx)(v,{}):(0,s.jsxs)(w,{children:[(0,s.jsx)(b,{children:a.map(e=>(0,s.jsx)(m,{group:e},e.service.id))}),(0,s.jsxs)(b,{children:[(0,s.jsx)(m,{group:n},n.service.id),(0,s.jsx)(d.Q,{as:"a",href:i,sx:{width:"100%"},children:"View all keyboard shortcuts"})]})]})}):null};try{v.displayName||(v.displayName="LoadingState")}catch{}try{w.displayName||(w.displayName="Columns")}catch{}try{b.displayName||(b.displayName="Column")}catch{}try{x.displayName||(x.displayName="ShortcutsDialog")}catch{}var k=i(97564);function C({docsUrl:e}){let[t,i]=(0,r.useState)(!1);return(0,k.G7)("react_keyboard_shortcuts_dialog")?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.ak,{commands:{"keyboard-shortcuts-dialog:show-dialog":()=>i(!0)}}),(0,s.jsx)(x,{visible:t,onVisibleChange:i,docsUrl:e})]}):(0,s.jsx)(s.Fragment,{})}try{C.displayName||(C.displayName="KeyboardShortcutsDialog")}catch{}(0,n.k)("keyboard-shortcuts-dialog",{Component:C})},67726:(e,t,i)=>{i.d(t,{l:()=>n});let n=()=>void 0},24620:(e,t,i)=>{i.d(t,{Y:()=>n});function n(){let e={};return e.promise=new Promise((t,i)=>{e.resolve=t,e.reject=i}),e}},23581:(e,t,i)=>{i.d(t,{A:()=>a});let{getItem:n,setItem:s,removeItem:r}=(0,i(74572).A)("localStorage"),o="REACT_PROFILING_ENABLED",a={enable:()=>s(o,"true"),disable:()=>r(o),isEnabled:()=>!!n(o)}},35311:(e,t,i)=>{i.d(t,{J:()=>s,k:()=>CommandEvent});var n=i(89794);let CommandEvent=class CommandEvent{constructor(e){this.commandId=e}};let s={entries:e=>Object.entries(e).filter(e=>n.dx.is(e[0])&&void 0!==e[1]),keys:e=>Object.keys(e).filter(n.dx.is)}},58033:(e,t,i)=>{i.d(t,{J:()=>l,c:()=>a});var n=i(96540),s=i(35311),r=i(89794);let o=new Map;function a(){let e=new Map;for(let t of new Set(Array.from(o.values()).flat())){let i=r.dx.getServiceId(t);if(!e.has(i)){let t=(0,r.tp)(i);e.set(i,{service:{id:t.id,name:t.name},commands:[]})}let n=(0,r.fL)(t);n&&n.defaultBinding&&e.get(i)?.commands.push({id:t,name:n.name,description:n.description,keybinding:n.defaultBinding})}return Array.from(e.values())}let l=e=>{let t=(0,n.useId)();(0,n.useEffect)(()=>(o.set(t,s.J.keys(e)),()=>{o.delete(t)}),[e,t])}},89794:(e,t,i)=>{i.d(t,{dx:()=>l,fL:()=>d,xJ:()=>c,eY:()=>m,tp:()=>u});var n=i(97564),s=i(18558);let{P:r,$:o}=JSON.parse('{"$":{"commit-diff-view":{"id":"commit-diff-view","name":"Commits diff view","commandIds":["commit-diff-view:open-find","commit-diff-view:create-permalink","commit-diff-view:go-up-commit","commit-diff-view:go-up-commit-arrow","commit-diff-view:go-down-commit","commit-diff-view:go-down-commit-arrow"]},"github":{"id":"github","name":"GitHub (site-wide)","commandIds":["github:submit-form","github:select-multiple"]},"issue-create":{"id":"issue-create","name":"Issue Create","commandIds":["issue-create:new","issue-create:submit-and-create-more","issue-create:open-fullscreen"]},"issue-viewer":{"id":"issue-viewer","name":"Issue viewer","commandIds":["issue-viewer:edit-parent","issue-viewer:edit-title-submit","issue-viewer:close-edit-title"]},"issues-react":{"id":"issues-react","name":"Issues","commandIds":["issues-react:focus-next-issue","issues-react:focus-previous-issue"]},"item-pickers":{"id":"item-pickers","name":"Item Pickers","commandIds":["item-pickers:open-assignees","item-pickers:open-development","item-pickers:open-labels","item-pickers:open-milestone","item-pickers:open-projects","item-pickers:open-issue-type","item-pickers:open-author"]},"keyboard-shortcuts-dialog":{"id":"keyboard-shortcuts-dialog","name":"Keyboard Shortcuts Dialog","commandIds":["keyboard-shortcuts-dialog:show-dialog"]},"list-view-items-issues-prs":{"id":"list-view-items-issues-prs","name":"List View Items: Issues & Pull Requests","commandIds":["list-view-items-issues-prs:open-focused-item","list-view-items-issues-prs:toggle-focused-item-selection"]},"list-views":{"id":"list-views","name":"List views including lists of issues, pull requests, discussions, and notifications.","commandIds":["list-views:open-manage-item-dialog"]},"projects":{"id":"projects","name":"Projects","commandIds":["projects:save-view","projects:save-form"]},"pull-requests-diff-file-tree":{"id":"pull-requests-diff-file-tree","name":"Pull requests - diff file tree","commandIds":["pull-requests-diff-file-tree:focus-file-tree"]},"pull-requests-diff-view":{"id":"pull-requests-diff-view","name":"Pull requests - \'Files changed\' view","commandIds":["pull-requests-diff-view:copy-code","pull-requests-diff-view:expand-all-hunks","pull-requests-diff-view:expand-hunk-up","pull-requests-diff-view:expand-hunk-down","pull-requests-diff-view:copy-anchor-link","pull-requests-diff-view:start-conversation-current","pull-requests-diff-view:jump-to-next-result","pull-requests-diff-view:jump-to-next-result-alternate","pull-requests-diff-view:jump-to-previous-result","pull-requests-diff-view:jump-to-previous-result-alternate","pull-requests-diff-view:open-find","pull-requests-diff-view:close-find"]},"react-sandbox":{"id":"react-sandbox","name":"React Sandbox","commandIds":["react-sandbox:example-command"]},"sub-issues":{"id":"sub-issues","name":"sub-issues","commandIds":["sub-issues:create-sub-issue","sub-issues:add-existing-issue"]}},"P":{"commit-diff-view:create-permalink":{"name":"Create permalink","description":"Hotkey to expand the current url to a full permalink.","defaultBinding":"y"},"commit-diff-view:go-down-commit":{"name":"Go up commit","description":"navigates up one commit","defaultBinding":"j"},"commit-diff-view:go-down-commit-arrow":{"name":"Go up commit","description":"navigates down one commit","defaultBinding":"ArrowDown"},"commit-diff-view:go-up-commit":{"name":"Go up commit","description":"navigates up one commit","defaultBinding":"k"},"commit-diff-view:go-up-commit-arrow":{"name":"Go up commit","description":"navigates up one commit","defaultBinding":"ArrowUp"},"commit-diff-view:open-find":{"name":"Open up find and search on selection","description":"Hotkey to open up the custom find and search on selection.","defaultBinding":"Mod+e"},"github:select-multiple":{"name":"Select multiple items","description":"Add the current item to a multi-selection (or remove it if already added)","defaultBinding":"Mod+Enter"},"github:submit-form":{"name":"Submit form","description":"Submit the current form","defaultBinding":"Mod+Enter"},"issue-create:new":{"name":"Create a new issue","description":"Initiate new issue creation","defaultBinding":"c"},"issue-create:open-fullscreen":{"name":"Open issue creation in fullscreen","description":"Open the issue creation dialog in fullscreen mode","defaultBinding":"Mod+Shift+Enter"},"issue-create:submit-and-create-more":{"name":"Submit and create more","description":"Submit the current issue and create a new one","defaultBinding":"Mod+Alt+Enter"},"issue-viewer:close-edit-title":{"name":"Cancel","description":"Cancel out of editing an issue\'s title","defaultBinding":"Escape"},"issue-viewer:edit-parent":{"name":"Edit parent","description":"Edit parent for current issue","defaultBinding":"Alt+Shift+P"},"issue-viewer:edit-title-submit":{"name":"Save","description":"Submit changes made to an issue\'s title","defaultBinding":"Enter"},"issues-react:focus-next-issue":{"name":"Focus on Next Issue","description":"Focus on the next issue in the list, or the first one if none are focused.","defaultBinding":"j"},"issues-react:focus-previous-issue":{"name":"Focus on Previous Issue","description":"Focus on the previous issue in the list","defaultBinding":"k"},"item-pickers:open-assignees":{"name":"Open assignees panel","description":"Open panel to select assignees","defaultBinding":"a"},"item-pickers:open-author":{"name":"Open author panel","description":"Open panel to select author","defaultBinding":"u"},"item-pickers:open-development":{"name":"Open development panel","description":"Open panel to create or link a pull request","defaultBinding":"d"},"item-pickers:open-issue-type":{"name":"Open issue type panel","description":"Open panel to select issue type","defaultBinding":"t"},"item-pickers:open-labels":{"name":"Open labels panel","description":"Open panel to select labels","defaultBinding":"l"},"item-pickers:open-milestone":{"name":"Open milestone panel","description":"Open panel to select milestone","defaultBinding":"m"},"item-pickers:open-projects":{"name":"Open projects panel","description":"Open panel to select projects","defaultBinding":"p"},"keyboard-shortcuts-dialog:show-dialog":{"name":"Show Keyboard Shortcuts Dialog","description":"Display the keyboard shortcuts help dialog","defaultBinding":"Shift+?"},"list-view-items-issues-prs:open-focused-item":{"name":"Open Focused Item","description":"Open the currently focused item","defaultBinding":"o"},"list-view-items-issues-prs:toggle-focused-item-selection":{"name":"Toggle Focused Item Selection","description":"Toggle the selection state of the currently focused item for bulk actions","defaultBinding":"x"},"list-views:open-manage-item-dialog":{"name":"Open \'manage item\' dialog","defaultBinding":"Mod+Shift+U","description":"Open a dialog to manage the currently focused item."},"projects:save-form":{"name":"Save","description":"Submits the currently focused form.","defaultBinding":"Mod+Enter"},"projects:save-view":{"name":"Save view","description":"Save any unsaved changes to the current project view.","defaultBinding":"Mod+s"},"pull-requests-diff-file-tree:focus-file-tree":{"name":"Focus file tree","description":"Move focus to the file tree","defaultBinding":"Mod+F6"},"pull-requests-diff-view:close-find":{"name":"Close Find","description":"Close the find window","defaultBinding":"Escape"},"pull-requests-diff-view:copy-anchor-link":{"name":"Copy link","description":"Copy link to the current line","defaultBinding":"Mod+Alt+y"},"pull-requests-diff-view:copy-code":{"name":"Copy","description":"Copy the code for the current line(s)","defaultBinding":"Mod+c"},"pull-requests-diff-view:expand-all-hunks":{"name":"Expand all","description":"Expand all hunks in the current file","defaultBinding":"Mod+Shift+ArrowLeft"},"pull-requests-diff-view:expand-hunk-down":{"name":"Expand below","description":"Expand the current hunk downward"},"pull-requests-diff-view:expand-hunk-up":{"name":"Expand above","description":"Expand the current hunk upward"},"pull-requests-diff-view:jump-to-next-result":{"name":"Jump to the next search result","description":"Jump to the next search result","defaultBinding":"Enter"},"pull-requests-diff-view:jump-to-next-result-alternate":{"name":"Jump to the next search result","description":"Jump to the next search result","defaultBinding":"Mod+g"},"pull-requests-diff-view:jump-to-previous-result":{"name":"Jump to the previous search result","description":"Jump to the previous search result","defaultBinding":"Shift+Enter"},"pull-requests-diff-view:jump-to-previous-result-alternate":{"name":"Jump to the previous search result","description":"Jump to the previous search result","defaultBinding":"Mod+Shift+G"},"pull-requests-diff-view:open-find":{"name":"Open up find","description":"Hotkey to open up the custom find.","defaultBinding":"Mod+f"},"pull-requests-diff-view:start-conversation-current":{"name":"Start conversation on line","description":"Start a conversation on the current line"},"react-sandbox:example-command":{"name":"React Sandbox Example Command","description":"Do something.","defaultBinding":"Mod+Shift+Enter"},"sub-issues:add-existing-issue":{"name":"Add existing issue","description":"Add an existing issue as a sub-issue","defaultBinding":"Alt+Shift+A"},"sub-issues:create-sub-issue":{"name":"Create sub-issue","description":"Create a new sub-issue","defaultBinding":"Alt+Shift+C"}}}'),a=new Set(Object.keys(r)),l={is:e=>a.has(e),getServiceId:e=>e.split(":")[0]},d=e=>{let t=r[e];return!t.featureFlag||(0,n.G7)(t.featureFlag.toUpperCase())?t:void 0},u=e=>o[e],c=e=>{let t=d(e);return t?.defaultBinding?(0,s.rd)(t.defaultBinding):void 0},m=e=>new Map(e.map(e=>[e,c(e)]).filter(e=>void 0!==e[1]))},26750:(e,t,i)=>{i.d(t,{Vr:()=>S,cQ:()=>_,ky:()=>s.k,N5:()=>I,hh:()=>j,ak:()=>w,tL:()=>M});var n,s=i(35311),r=i(89794),o=i(74848),a=i(16823),l=i(96540),d=i(58033);let u=new(i(18679)).s({collectorUrl:"https://collector.githubapp.com/ui-commands/collect"}),c={TYPE:"command.trigger",send(e){u.sendEvent(c.TYPE,e)}};function m(e,t){c.send({command_id:e.commandId,trigger_type:t instanceof KeyboardEvent?"keybinding":"click",target_element_html:t.target instanceof HTMLElement?function(e){let t=e.tagName.toLowerCase(),i=Array.from(e.attributes).map(e=>`${e.name}="${e.value.replaceAll('"','\\"')}"`).join(" ");return`<${t}${i?` ${i}`:""}>`}(t.target):void 0,keybinding:(0,r.xJ)(e.commandId)})}let p=new Map;function f(e,t){let i=(0,l.useMemo)(()=>new Map,[]),n="global"===e?p:i;(0,l.useEffect)(()=>{for(let[e,i]of(0,r.eY)(s.J.keys(t))){let t=n.get(i)?.filter(t=>t!==e)??[];t.length&&console.warn(`The keybinding (${i}) for the "${e}" command conflicts with the keybinding for the already-registered command(s) "${t.join(", ")}". This may result in unpredictable behavior.`),n.set(i,t.concat(e))}return()=>{for(let[e,i]of(0,r.eY)(s.J.keys(t))){let t=function(e,t){let i=!1;return e.filter(e=>e!==t||!!i||(i=!0,!1))}(n.get(i)??[],e);t?.length?n.set(i,t):n.delete(i)}}},[t,n])}var h=i(18558),g=i(98164);function v(e,t,i){let n=(0,l.useMemo)(()=>new h.KK,[]),s=(0,l.useMemo)(()=>{let t=new Map;for(let i of e){let e=(0,r.xJ)(i);e&&t.set(e,i)}return t},[e]),o=(0,l.useRef)(null);return(0,l.useCallback)(e=>{let r="nativeEvent"in e?e.nativeEvent:e;if(o.current===r)return;if(o.current=r,!(0,g.$$)(r)){n.reset();return}n.registerKeypress(r);let a=s.get(n.sequence)??s.get((0,h.Vy)(r));a&&(void 0===i||i())&&(n.reset(),e.preventDefault(),e.stopPropagation(),r.stopImmediatePropagation(),t(a,r))},[s,n,t,i])}let y="ui-command-trigger",w=({commands:e})=>{let t=(0,l.useRef)(null),i=(0,l.useCallback)((t,i)=>{let n=e[t];if(n){let e=new s.k(t);try{n(e)}finally{m(e,i)}}},[e]),n=(0,l.useCallback)(()=>{let e=function(){let e=[...document.querySelectorAll('dialog:modal, [role="dialog"][aria-modal="true"]')].filter(e=>e.childNodes.length>0&&function e(t){if(t.clientHeight>0)return!0;for(let i of t.children)if(e(i))return!0;return!1}(e));return e.length?e[e.length-1]:null}();return!e||function(e,t){return!!t&&(e.contains(t)??!1)}(e,t.current)},[]),a=v(s.J.keys(e),i,n);return f("global",e),(0,d.J)(e),(0,l.useEffect)(()=>{let e=e=>{let t="detail"in e&&"object"==typeof e.detail?e.detail:void 0;if(!t)return;let n="commandId"in t&&"string"==typeof t.commandId&&r.dx.is(t.commandId)?t.commandId:void 0,s="domEvent"in t&&(t.domEvent instanceof KeyboardEvent||t.domEvent instanceof MouseEvent)?t.domEvent:void 0;n&&s&&i(n,s)};return document.addEventListener("keydown",a),document.addEventListener(y,e),()=>{document.removeEventListener("keydown",a),document.removeEventListener(y,e)}},[a,i,t]),(0,o.jsx)("div",{ref:t,className:"d-none"})};try{w.displayName||(w.displayName="GlobalCommands")}catch{}let b=(0,l.createContext)({triggerCommand:function(e,t){document.dispatchEvent(new CustomEvent(y,{detail:{commandId:e,domEvent:t}}))}}),x=b.Provider,k=()=>(0,l.useContext)(b);var C=i(8784);let j=({commandId:e,...t})=>{let i=(0,r.xJ)(e);return i?(0,o.jsx)(C.U,{keys:i,...t}):null};try{j.displayName||(j.displayName="CommandKeybindingHint")}catch{}let S=(0,l.forwardRef)(({commandId:e,children:t,description:i,leadingVisual:n,trailingVisual:s,...l},d)=>{let u=(0,r.fL)(e),{triggerCommand:c}=k();return u?(0,o.jsxs)(a.l.Item,{...l,onSelect:t=>c(e,t.nativeEvent),ref:d,children:[t??u.name,i?(0,o.jsx)(a.l.Description,{children:i}):null,n?(0,o.jsx)(a.l.LeadingVisual,{children:n}):null,null!==s&&(0,o.jsx)(a.l.TrailingVisual,{children:s??(0,o.jsx)(j,{commandId:e,format:"condensed"})})]}):null});S.displayName="ActionList.CommandItem";var E=i(55847);let _=(0,l.forwardRef)(({commandId:e,children:t,trailingVisual:i,showKeybindingHint:n=!1,keybindingHintVariant:s,...a},l)=>{let d=(0,r.fL)(e),{triggerCommand:u}=k();if(!d)return null;let c=s??("primary"===a.variant?"onEmphasis":"normal");return(0,o.jsx)(E.Q,{...a,onClick:t=>u(e,t.nativeEvent),trailingVisual:i??n?()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("span",{className:"sr-only",children:"("}),(0,o.jsx)(j,{commandId:e,format:"condensed",variant:c}),(0,o.jsx)("span",{className:"sr-only",children:")"})]}):void 0,ref:l,children:t??d.name})});_.displayName="CommandButton";try{(n=HintVisual).displayName||(n.displayName="HintVisual")}catch{}var A=i(87330);let I=(0,l.forwardRef)(({commandId:e,"aria-label":t,...i},n)=>{let s=(0,r.fL)(e),{triggerCommand:a}=k();return s?(0,o.jsx)(A.K,{...i,"aria-label":t??s.name,onClick:t=>a(e,t.nativeEvent),ref:n}):null});I.displayName="CommandIconButton";var O=i(98152),N=i(10120),T=i(64515);let M=(0,l.forwardRef)(({commands:e,as:t,...i},n)=>{let r=(0,N.M)(e),a=k(),u=(0,l.useCallback)((e,t)=>{let i=r.current[e];if(i){let n=new s.k(e);try{i(n)}finally{m(n,t)}}else a.triggerCommand(e,t)},[r,a]);f("scoped",e),(0,d.J)(e);let c=(0,l.useMemo)(()=>({triggerCommand:u}),[u]),p=v(s.J.keys(e),u),h=(0,O._)(p),g=(0,l.useRef)(null);(0,T.T)(n,g),(0,l.useEffect)(()=>{let e=g.current,t=h.onKeyDown;if(e)return e.addEventListener("keydown",t),()=>e.removeEventListener("keydown",t)});let y=void 0!==t||void 0!==i.className?void 0:{display:"contents"};return(0,o.jsx)(x,{value:c,children:(0,o.jsx)(t??"div",{style:y,...i,...h,ref:g})})});M.displayName="ScopedCommands"},59840:(e,t,i)=>{i.d(t,{m:()=>r});var n=i(96540),s=i(97156);function r(e,t){s.KJ&&(0,n.useLayoutEffect)(e,t)}},98152:(e,t,i)=>{i.d(t,{_:()=>o});var n=i(12480),s=i(96540);let r=new Set(["enter","tab"]),o=e=>{let t=(0,s.useRef)(!1),i=(0,s.useRef)(!1),o=(0,s.useCallback)(e=>{"compositionstart"===e.type&&(t.current=!0,i.current=!1),"compositionend"===e.type&&(t.current=!1,i.current=!0)},[]),a=(0,s.useCallback)(s=>{if(!r.has(s.key.toLowerCase())||!t.current){if((0,n.U0)()&&229===s.keyCode&&i.current){i.current=!1;return}e(s)}},[e]);return(0,s.useMemo)(()=>({onCompositionStart:o,onCompositionEnd:o,onKeyDown:a}),[o,a])}},73272:(e,t,i)=>{i.d(t,{A:()=>r});var n=i(59840),s=i(96540);function r(){let e=(0,s.useRef)(!1),t=(0,s.useCallback)(()=>e.current,[]);return(0,n.m)(()=>(e.current=!0,()=>{e.current=!1}),[]),t}},51012:(e,t,i)=>{i.d(t,{N:()=>r});var n=i(97156),s=i(96540);let r=void 0!==n.cg?.document?.createElement?s.useLayoutEffect:s.useEffect},83784:(e,t,i)=>{i.d(t,{A:()=>r});var n=i(73272),s=i(96540);let r=function(e){let t=(0,n.A)(),[i,r]=(0,s.useState)(e);return[i,(0,s.useCallback)(e=>{t()&&r(e)},[t])]}},10120:(e,t,i)=>{i.d(t,{M:()=>r});var n=i(51012),s=i(96540);function r(e){let t=(0,s.useRef)(e);return(0,n.N)(()=>{t.current=e},[e]),t}},28784:(e,t,i)=>{function n(e,t={}){!function(e){if(new URL(e,window.location.origin).origin!==window.location.origin)throw Error("Can not make cross-origin requests from verifiedFetch")}(e);let i={...t.headers,"GitHub-Verified-Fetch":"true","X-Requested-With":"XMLHttpRequest"};return fetch(e,{...t,headers:i})}function s(e,t){let i={...t?.headers??{},Accept:"application/json","Content-Type":"application/json"},s=t?.body?JSON.stringify(t.body):void 0;return n(e,{...t,body:s,headers:i})}function r(e,t={}){let i={...t.headers,"GitHub-Is-React":"true"};return n(e,{...t,headers:i})}function o(e,t){let i={...t?.headers??{},"GitHub-Is-React":"true"};return s(e,{...t,headers:i})}i.d(t,{DI:()=>n,QJ:()=>r,Sr:()=>o,lS:()=>s})},37190:(e,t,i)=>{i.d(t,{y:()=>o});var n=i(74848),s=i(96540),r=i(31481);function o({children:e,appName:t,category:i,metadata:o}){let a=(0,s.useMemo)(()=>({appName:t,category:i,metadata:o}),[t,i,o]);return(0,n.jsx)(r.I.Provider,{value:a,children:e})}try{o.displayName||(o.displayName="AnalyticsProvider")}catch{}},47831:(e,t,i)=>{i.d(t,{BP:()=>u,D3:()=>d,O8:()=>n});var n,s=i(74848),r=i(96540),o=i(97156),a=i(59840);!function(e){e.ServerRender="ServerRender",e.ClientHydrate="ClientHydrate",e.ClientRender="ClientRender"}(n||(n={}));let l=(0,r.createContext)("ClientRender");function d({wasServerRendered:e,children:t}){let[i,n]=(0,r.useState)(()=>o.X3?"ServerRender":e?"ClientHydrate":"ClientRender");return(0,a.m)(()=>{"ClientRender"!==i&&n("ClientRender")},[i]),(0,s.jsx)(l.Provider,{value:i,children:t})}function u(){return(0,r.useContext)(l)}try{l.displayName||(l.displayName="RenderPhaseContext")}catch{}try{d.displayName||(d.displayName="RenderPhaseProvider")}catch{}},54156:(e,t,i)=>{i.d(t,{Qn:()=>l,T8:()=>u,Y6:()=>m,k6:()=>c});var n=i(74848),s=i(65556),r=i(96540),o=i(67726),a=i(83784);let l=5e3,d=(0,r.createContext)({addToast:o.l,addPersistedToast:o.l,clearPersistedToast:o.l}),u=(0,r.createContext)({toasts:[],persistedToast:null});function c({children:e}){let[t,i]=(0,a.A)([]),[o,c]=(0,r.useState)(null),{safeSetTimeout:m}=(0,s.A)(),p=(0,r.useCallback)(function(e){i([...t,e]),m(()=>i(t.slice(1)),l)},[t,m,i]),f=(0,r.useCallback)(function(e){c(e)},[c]),h=(0,r.useCallback)(function(){c(null)},[c]),g=(0,r.useMemo)(()=>({addToast:p,addPersistedToast:f,clearPersistedToast:h}),[f,p,h]),v=(0,r.useMemo)(()=>({toasts:t,persistedToast:o}),[t,o]);return(0,n.jsx)(d.Provider,{value:g,children:(0,n.jsx)(u.Provider,{value:v,children:e})})}function m(){return(0,r.useContext)(d)}try{d.displayName||(d.displayName="ToastContext")}catch{}try{u.displayName||(u.displayName="InternalToastsContext")}catch{}try{c.displayName||(c.displayName="ToastContextProvider")}catch{}},67870:(e,t,i)=>{i.d(t,{V:()=>m});var n=i(74848),s=i(96540),r=i(54156),o=i(38621),a=i(65556),l=i(16255);let d={info:"",success:"Toast--success",error:"Toast--error"},u={info:(0,n.jsx)(o.InfoIcon,{}),success:(0,n.jsx)(o.CheckIcon,{}),error:(0,n.jsx)(o.StopIcon,{})},c=({message:e,timeToLive:t,icon:i,type:r="info",role:o="log"})=>{let[c,m]=s.useState(!0),{safeSetTimeout:p}=(0,a.A)();return(0,s.useEffect)(()=>{t&&p(()=>m(!1),t-300)},[p,t]),(0,n.jsx)(l.Z,{children:(0,n.jsx)("div",{className:"p-1 position-fixed bottom-0 left-0 mb-3 ml-3",children:(0,n.jsxs)("div",{className:`Toast ${d[r]} ${c?"Toast--animateIn":"Toast--animateOut"}`,id:"ui-app-toast","data-testid":`ui-app-toast-${r}`,role:o,children:[(0,n.jsx)("span",{className:"Toast-icon",children:i||u[r]}),(0,n.jsx)("span",{className:"Toast-content",children:e})]})})})};try{c.displayName||(c.displayName="Toast")}catch{}function m(){let{toasts:e,persistedToast:t}=(0,s.useContext)(r.T8);return(0,n.jsxs)(n.Fragment,{children:[e.map((e,t)=>(0,n.jsx)(c,{message:e.message,icon:e.icon,timeToLive:r.Qn,type:e.type,role:e.role},t)),t&&(0,n.jsx)(c,{message:t.message,icon:t.icon,type:t.type,role:t.role})]})}try{m.displayName||(m.displayName="Toasts")}catch{}},50515:(e,t,i)=>{i.d(t,{JC:()=>y,KK:()=>SequenceTracker,Vy:()=>o,ai:()=>v,oc:()=>l,rd:()=>u});let Leaf=class Leaf{constructor(e){this.children=[],this.parent=e}delete(e){let t=this.children.indexOf(e);return -1!==t&&(this.children=this.children.slice(0,t).concat(this.children.slice(t+1)),0===this.children.length&&this.parent.delete(this),!0)}add(e){return this.children.push(e),this}};let RadixTrie=class RadixTrie{constructor(e){this.parent=null,this.children={},this.parent=e||null}get(e){return this.children[e]}insert(e){let t=this;for(let i=0;i<e.length;i+=1){let n=e[i],s=t.get(n);if(i===e.length-1)return s instanceof RadixTrie&&(t.delete(s),s=null),s||(s=new Leaf(t),t.children[n]=s),s;s instanceof Leaf&&(s=null),s||(s=new RadixTrie(t),t.children[n]=s),t=s}return t}delete(e){for(let t in this.children)if(this.children[t]===e){let e=delete this.children[t];return 0===Object.keys(this.children).length&&this.parent&&this.parent.delete(this),e}return!1}};let n={"\xa1":"1","\u2122":"2","\xa3":"3","\xa2":"4","\u221E":"5","\xa7":"6","\xb6":"7","\u2022":"8","\xaa":"9","\xba":"0","\u2013":"-","\u2260":"=","\u2044":"!","\u20AC":"@","\u2039":"#","\u203A":"$",\uFB01:"%",\uFB02:"^","\u2021":"&","\xb0":"*","\xb7":"(","\u201A":")","\u2014":"_","\xb1":"+",\u0153:"q","\u2211":"w","\xae":"r","\u2020":"t","\xa5":"y","\xf8":"o",\u03C0:"p","\u201C":"[","\u2018":"]","\xab":"\\",\u0152:"Q","\u201E":"W","\xb4":"E","\u2030":"R",\u02C7:"T","\xc1":"Y","\xa8":"U",\u02C6:"I","\xd8":"O","\u220F":"P","\u201D":"{","\u2019":"}","\xbb":"|","\xe5":"a","\xdf":"s","\u2202":"d",\u0192:"f","\xa9":"g","\u02D9":"h","\u2206":"j","\u02DA":"k","\xac":"l","\u2026":";","\xe6":"'","\xc5":"A","\xcd":"S","\xce":"D","\xcf":"F","\u02DD":"G","\xd3":"H","\xd4":"J","\uF8FF":"K","\xd2":"L","\xda":":","\xc6":'"',\u03A9:"z","\u2248":"x","\xe7":"c","\u221A":"v","\u222B":"b","\xb5":"m","\u2264":",","\u2265":".","\xf7":"/","\xb8":"Z","\u02DB":"X","\xc7":"C","\u25CA":"V",\u0131:"B","\u02DC":"N","\xc2":"M","\xaf":"<","\u02D8":">","\xbf":"?"},s={"`":"~",1:"!",2:"@",3:"#",4:"$",5:"%",6:"^",7:"&",8:"*",9:"(",0:")","-":"_","=":"+","[":"{","]":"}","\\":"|",";":":","'":'"',",":"<",".":">","/":"?",q:"Q",w:"W",e:"E",r:"R",t:"T",y:"Y",u:"U",i:"I",o:"O",p:"P",a:"A",s:"S",d:"D",f:"F",g:"G",h:"H",j:"J",k:"K",l:"L",z:"Z",x:"X",c:"C",v:"V",b:"B",n:"N",m:"M"},r={" ":"Space","+":"Plus"};function o(e,t=navigator.platform){var i,o,l;let{ctrlKey:u,altKey:c,metaKey:m,shiftKey:p,key:f}=e,h=[];for(let[e,t]of[u,c,m,p].entries())t&&h.push(a[e]);if(!a.includes(f)){let e=h.includes("Alt")&&d.test(t)&&null!==(i=n[f])&&void 0!==i?i:f,a=h.includes("Shift")&&d.test(t)&&null!==(o=s[e])&&void 0!==o?o:e,u=null!==(l=r[a])&&void 0!==l?l:a;h.push(u)}return h.join("+")}let a=["Control","Alt","Meta","Shift"];function l(e,t){return function(e){let t=e.split("+").pop(),i=[];for(let t of["Control","Alt","Meta","Shift"])e.includes(t)&&i.push(t);return t&&i.push(t),i.join("+")}(function(e,t){var i;let n="undefined"==typeof window?void 0:window,s=d.test(null!==(i=null!=t?t:null==n?void 0:n.navigator.platform)&&void 0!==i?i:"")?"Meta":"Control";return e.replace("Mod",s)}(e,t))}let d=/Mac|iPod|iPhone|iPad/i;let SequenceTracker=class SequenceTracker{constructor({onReset:e}={}){this._path=[],this.timer=null,this.onReset=e}get path(){return this._path}get sequence(){return this._path.join(" ")}registerKeypress(e){this._path=[...this._path,o(e)],this.startTimer()}reset(){var e;this.killTimer(),this._path=[],null===(e=this.onReset)||void 0===e||e.call(this)}killTimer(){null!=this.timer&&window.clearTimeout(this.timer),this.timer=null}startTimer(){this.killTimer(),this.timer=window.setTimeout(()=>this.reset(),SequenceTracker.CHORD_TIMEOUT)}};function u(e){return e.split(" ").map(e=>l(e)).join(" ")}function c(e){if(!(e instanceof HTMLElement))return!1;let t=e.nodeName.toLowerCase(),i=(e.getAttribute("type")||"").toLowerCase();return"select"===t||"textarea"===t||"input"===t&&"submit"!==i&&"reset"!==i&&"checkbox"!==i&&"radio"!==i&&"file"!==i||e.isContentEditable}SequenceTracker.CHORD_TIMEOUT=1500;let m=new RadixTrie,p=new WeakMap,f=m,h=new SequenceTracker({onReset(){f=m}});function g(e){if(e.defaultPrevented||!(e.target instanceof Node))return;if(c(e.target)){let t=e.target;if(!t.id||!t.ownerDocument.querySelector(`[data-hotkey-scope="${t.id}"]`))return}let t=f.get(o(e));if(!t){h.reset();return}if(h.registerKeypress(e),f=t,t instanceof Leaf){let i;let n=e.target,s=!1,r=c(n);for(let e=t.children.length-1;e>=0;e-=1){let o=(i=t.children[e]).getAttribute("data-hotkey-scope");if(!r&&!o||r&&n.id===o){s=!0;break}}i&&s&&(function(e,t){let i=new CustomEvent("hotkey-fire",{cancelable:!0,detail:{path:t}});e.dispatchEvent(i)&&(c(e)?e.focus():e.click())}(i,h.path),e.preventDefault()),h.reset()}}function v(e,t){0===Object.keys(m.children).length&&document.addEventListener("keydown",g);let i=(function(e){let t=[],i=[""],n=!1;for(let s=0;s<e.length;s++){if(n&&","===e[s]){t.push(i),i=[""],n=!1;continue}if(" "===e[s]){i.push(""),n=!1;continue}n="+"!==e[s],i[i.length-1]+=e[s]}return t.push(i),t.map(e=>e.map(e=>l(e)).filter(e=>""!==e)).filter(e=>e.length>0)})(t||e.getAttribute("data-hotkey")||"").map(t=>m.insert(t).add(e));p.set(e,i)}function y(e){let t=p.get(e);if(t&&t.length)for(let i of t)i&&i.delete(e);0===Object.keys(m.children).length&&document.removeEventListener("keydown",g)}},18679:(e,t,i)=>{i.d(t,{s:()=>AnalyticsClient});let n=["utm_source","utm_medium","utm_campaign","utm_term","utm_content","scid"];var s=i(36301);let AnalyticsClient=class AnalyticsClient{constructor(e){this.options=e}get collectorUrl(){return this.options.collectorUrl}get clientId(){return this.options.clientId?this.options.clientId:(0,s.y)()}createEvent(e){return{page:location.href,title:document.title,context:{...this.options.baseContext,...function(){let e={};try{for(let[t,i]of new URLSearchParams(window.location.search)){let s=t.toLowerCase();n.includes(s)&&(e[s]=i)}return e}catch(e){return{}}}(),...e}}}sendPageView(e){let t=this.createEvent(e);this.send({page_views:[t]})}sendEvent(e,t){let i={...this.createEvent(t),type:e};this.send({events:[i]})}send({page_views:e,events:t}){let i=JSON.stringify({client_id:this.clientId,page_views:e,events:t,request_context:{referrer:function(){let e;try{e=window.top.document.referrer}catch(t){if(window.parent)try{e=window.parent.document.referrer}catch(e){}}return""===e&&(e=document.referrer),e}(),user_agent:navigator.userAgent,screen_resolution:function(){try{return`${screen.width}x${screen.height}`}catch(e){return"unknown"}}(),browser_resolution:function(){let e=0,t=0;try{return"number"==typeof window.innerWidth?(t=window.innerWidth,e=window.innerHeight):null!=document.documentElement&&null!=document.documentElement.clientWidth?(t=document.documentElement.clientWidth,e=document.documentElement.clientHeight):null!=document.body&&null!=document.body.clientWidth&&(t=document.body.clientWidth,e=document.body.clientHeight),`${t}x${e}`}catch(e){return"unknown"}}(),browser_languages:navigator.languages?navigator.languages.join(","):navigator.language||"",pixel_ratio:window.devicePixelRatio,timestamp:Date.now(),tz_seconds:-60*new Date().getTimezoneOffset()}});try{if(navigator.sendBeacon){navigator.sendBeacon(this.collectorUrl,i);return}}catch{}fetch(this.collectorUrl,{method:"POST",cache:"no-cache",headers:{"Content-Type":"application/json"},body:i,keepalive:!1})}}}},e=>{var t=t=>e(e.s=t);e.O(0,["primer-react","react-core","react-lib","octicons-react","vendors-node_modules_primer_behaviors_dist_esm_index_mjs","vendors-node_modules_tanstack_query-core_build_modern_queryClient_js","vendors-node_modules_emotion_is-prop-valid_dist_emotion-is-prop-valid_esm_js-node_modules_emo-37e3d5","vendors-node_modules_github_mini-throttle_dist_index_js-node_modules_stacktrace-parser_dist_s-e7dcdd","vendors-node_modules_oddbird_popover-polyfill_dist_popover-fn_js","ui_packages_failbot_failbot_ts"],()=>t(34968)),e.O()}]);
//# sourceMappingURL=keyboard-shortcuts-dialog-b93c155731b7.js.map