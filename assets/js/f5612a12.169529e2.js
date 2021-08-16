"use strict";(self.webpackChunkswizzin_website=self.webpackChunkswizzin_website||[]).push([[3926,865],{4137:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8448:function(e,t,r){var n=r(7294);t.Z=function(e){var t=e.children,r=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:a},t)}},2713:function(e,t,r){var n=(0,r(7294).createContext)(void 0);t.Z=n},50:function(e,t,r){var n=r(7294),a=r(2713);t.Z=function(){var e=(0,n.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e}},4297:function(e,t,r){r.d(t,{Z:function(){return c}});var n=r(7294),a=r(50),o=r(6010),i="tabItem_HqPw",s=37,l=39;var c=function(e){var t=e.block,r=e.children,c=e.defaultValue,u=e.values,p=e.groupId,d=e.className,m=(0,a.Z)(),f=m.tabGroupChoices,v=m.setTabGroupChoices,y=(0,n.useState)(c),h=y[0],b=y[1],w=(0,n.useState)(!1),k=w[0],g=w[1];if(null!=p){var N=f[p];null!=N&&N!==h&&u.some((function(e){return e.value===N}))&&b(N)}var x=function(e){b(e),null!=p&&v(p,e)},P=[],T=function(e){e.metaKey||e.altKey||e.ctrlKey||g(!0)},C=function(){g(!1)};return(0,n.useEffect)((function(){return window.addEventListener("keydown",T),window.addEventListener("mousedown",C),function(){window.removeEventListener("keydown",T),window.removeEventListener("mousedown",C)}}),[]),n.createElement("div",null,n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},d)},u.map((function(e){var t=e.value,r=e.label;return n.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===t,className:(0,o.Z)("tabs__item",t,i,{"tabs__item--active":h===t}),style:k?{}:{outline:"none"},key:t,ref:function(e){return P.push(e)},onKeyDown:function(e){!function(e,t,r){switch(r.keyCode){case l:!function(e,t){var r=e.indexOf(t)+1;e[r]?e[r].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var r=e.indexOf(t)-1;e[r]?e[r].focus():e[e.length-1].focus()}(e,t)}}(P,e.target,e),T(e)},onFocus:function(){return x(t)},onClick:function(){x(t),g(!1)},onPointerDown:function(){return g(!1)}},r)}))),n.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(r).filter((function(e){return e.props.value===h}))[0]))}},5526:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var n=r(7462),a=r(3366),o=(r(7294),r(4137)),i=r(9971),s=["components"],l={id:"prowlarr",title:"Prowlarr",sidebar_label:"Prowlarr"},c=void 0,u={unversionedId:"applications/prowlarr",id:"applications/prowlarr",isDocsHomePage:!1,title:"Prowlarr",description:"Prowlarr is a indexer manager/proxy built on the popular arr .net/reactjs base stack to integrate with your various PVR apps. Prowlarr supports both Torrent Trackers and Usenet Indexers. It integrates seamlessly with Sonarr, Radarr, Lidarr, and Readarr offering complete management of your indexers with no per app Indexer setup required (we do it all).",source:"@site/docs/applications/prowlarr.mdx",sourceDirName:"applications",slug:"/applications/prowlarr",permalink:"/applications/prowlarr",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/applications/prowlarr.mdx",version:"current",frontMatter:{id:"prowlarr",title:"Prowlarr",sidebar_label:"Prowlarr"},sidebar:"docs",previous:{title:"Radarr",permalink:"/applications/radarr"},next:{title:"Resilio (bt)Sync",permalink:"/applications/btsync"}},p=[{value:"Initial Setup",id:"initial-setup",children:[]},{value:"How to Access",id:"how-to-access",children:[]},{value:"Service Management",id:"service-management",children:[]},{value:"Configuration",id:"configuration",children:[]}],d={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Prowlarr is a indexer manager/proxy built on the popular arr .net/reactjs base stack to integrate with your various PVR apps. Prowlarr supports both Torrent Trackers and Usenet Indexers. It integrates seamlessly with Sonarr, Radarr, Lidarr, and Readarr offering complete management of your indexers with no per app Indexer setup required (we do it all)."),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Prowlarr is in the early stages of development and is considered alpha/beta.\nPlease make sure to check in the ",(0,o.kt)("a",{parentName:"p",href:"https://prowlarr.com/discord"},"Prowlarr Discord")," about any issues you might face with the ",(0,o.kt)("strong",{parentName:"p"},"application"),".\nAnything else can go into the swizzin discord.\nInstall and use with caution."))),(0,o.kt)("h2",{id:"initial-setup"},"Initial Setup"),(0,o.kt)("p",null,"Installing Prowlarr is easy. Simply issue the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:"main",main:!0},"sudo box install prowlarr\n")),(0,o.kt)("p",null,"This command will configure prowlarr for your user."),(0,o.kt)("h2",{id:"how-to-access"},"How to Access"),(0,o.kt)("p",null,"After Prowlarr has been installed, it will be available for access at ",(0,o.kt)("inlineCode",{parentName:"p"},"https://<hostname.ltd>/prowlarr"),"."),(0,o.kt)("p",null,"If you don't use ",(0,o.kt)("inlineCode",{parentName:"p"},"nginx"),", you can find it on port ",(0,o.kt)("inlineCode",{parentName:"p"},"9696"),"."),(0,o.kt)("h2",{id:"service-management"},"Service Management"),(0,o.kt)("p",null,"The Prowlarr service is managed by systemd and has been configured for single user usage. You can find the service file here:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/etc/systemd/system/prowlarr.service\n")),(0,o.kt)(i.default,{service:"prowlarr",mdxType:"SystemdTabs"}),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"In order to get this thing working, you just need to connect your sources, and then connect your arr apps."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add your indexers",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Go to ",(0,o.kt)("inlineCode",{parentName:"li"},"Indexers")," and add your sources"))),(0,o.kt)("li",{parentName:"ul"},"Add your arr Applications to push indexer definitions to",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"In Prowlarr, go to ",(0,o.kt)("inlineCode",{parentName:"li"},"Settings")," -> ",(0,o.kt)("inlineCode",{parentName:"li"},"Apps")),(0,o.kt)("li",{parentName:"ul"},"Select the app to add"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Append the baseurl to __arr server"),". e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"http://localhost:8989/sonarr")," for sonarr "),(0,o.kt)("li",{parentName:"ul"},"Paste in the API key from said app (Open target app, browse to Settings -> General)")))),(0,o.kt)("p",null,"If you need further help, you can refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.servarr.com/Prowlarr"},"Prowlarr Wiki")," and ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.servarr.com/Prowlarr_FAQ"},"Prowlarr FAQ"),"/"),(0,o.kt)("p",null,"If you are not running Prowlarr as your master user, you can set the environment variable ",(0,o.kt)("inlineCode",{parentName:"p"},"prowlarrOwner=<yourUser>"),"before the update, and the migration will respect the choice."))}m.isMDXComponent=!0},9971:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return m},default:function(){return v}});var n=r(7462),a=r(3366),o=(r(7294),r(4137)),i=r(4297),s=r(8448),l=r(1462),c=["components"],u={},p=void 0,d={unversionedId:"snippets/systemdtabs",id:"snippets/systemdtabs",isDocsHomePage:!1,title:"systemdtabs",description:"<Tabs",source:"@site/docs/snippets/systemdtabs.mdx",sourceDirName:"snippets",slug:"/snippets/systemdtabs",permalink:"/snippets/systemdtabs",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/snippets/systemdtabs.mdx",version:"current",frontMatter:{}},m=[],f={toc:m};function v(e){var t=e.components,r=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"code"},(0,o.kt)(i.Z,{defaultValue:"start",values:[{label:"Status",value:"status"},{label:"Start",value:"start"},{label:"Stop",value:"stop"},{label:"Restart",value:"restart"},{label:"Enable",value:"enable"},{label:"Disable",value:"disable"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"status",mdxType:"TabItem"},(0,o.kt)(l.Z,{children:"sudo systemctl status "+r.service,className:"bash",mdxType:"CodeBlock"})),(0,o.kt)(s.Z,{value:"start",mdxType:"TabItem"},(0,o.kt)(l.Z,{children:"sudo systemctl start "+r.service,className:"bash",mdxType:"CodeBlock"})),(0,o.kt)(s.Z,{value:"stop",mdxType:"TabItem"},(0,o.kt)(l.Z,{children:"sudo systemctl stop "+r.service,className:"bash",mdxType:"CodeBlock"})),(0,o.kt)(s.Z,{value:"restart",mdxType:"TabItem"},(0,o.kt)(l.Z,{children:"sudo systemctl restart "+r.service,className:"bash",mdxType:"CodeBlock"})),(0,o.kt)(s.Z,{value:"enable",mdxType:"TabItem"},(0,o.kt)(l.Z,{children:"sudo systemctl enable "+r.service,className:"bash",mdxType:"CodeBlock"})),(0,o.kt)(s.Z,{value:"disable",mdxType:"TabItem"},(0,o.kt)(l.Z,{children:"sudo systemctl disable "+r.service,className:"bash",mdxType:"CodeBlock"})))))}v.isMDXComponent=!0}}]);