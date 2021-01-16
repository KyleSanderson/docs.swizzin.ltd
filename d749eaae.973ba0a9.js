(window.webpackJsonp=window.webpackJsonp||[]).push([[68,15,76],{141:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),o=(n(0),n(156)),i=n(56),s=n(59),c={id:"mango",title:"Mango",sidebar_label:"Mango"},l={unversionedId:"applications/mango",id:"applications/mango",isDocsHomePage:!1,title:"Mango",description:"Mango is a CBZ viewer with an integrated MangaDex downloader and plugin support for other services.",source:"@site/docs/applications/mango.mdx",slug:"/applications/mango",permalink:"/applications/mango",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/applications/mango.mdx",version:"current",sidebar_label:"Mango",sidebar:"docs",previous:{title:"Jellyfin",permalink:"/applications/jellyfin"},next:{title:"Plex",permalink:"/applications/plex"}},u=[{value:"Installation",id:"installation",children:[]},{value:"Accessing Mango",id:"accessing-mango",children:[{value:"Retrieving files",id:"retrieving-files",children:[]}]},{value:"Service Management",id:"service-management",children:[]},{value:"User management",id:"user-management",children:[]},{value:"Troubleshooting",id:"troubleshooting",children:[]}],d={toc:u};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Mango is a CBZ viewer with an integrated MangaDex downloader and plugin support for other services."),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("p",null,"You can install mango by issuing the following command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"sudo box install mango\n")),Object(o.b)("h2",{id:"accessing-mango"},"Accessing Mango"),Object(o.b)("p",null,"You can access Mango using ",Object(o.b)("inlineCode",{parentName:"p"},"domain.tld/mango")," if you have ",Object(o.b)("inlineCode",{parentName:"p"},"nginx")," installed. Otherwise, it is available on ",Object(o.b)("inlineCode",{parentName:"p"},"domain.tld:9003")),Object(o.b)("h3",{id:"retrieving-files"},"Retrieving files"),Object(o.b)("p",null,"As the media library for mango is shared, it is located under ",Object(o.b)("inlineCode",{parentName:"p"},"/opt/mango/library"),". This directory is accessible to all users of the server."),Object(o.b)("h2",{id:"service-management"},"Service Management"),Object(o.b)("p",null,"The Mango service is managed by ",Object(o.b)("inlineCode",{parentName:"p"},"systemd")," and has been configured as a system application. You can find the service file here:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"/etc/systemd/system/mango.service\n")),Object(o.b)(i.default,{service:"mango",mdxType:"SystemdTabs"}),Object(o.b)("h2",{id:"user-management"},"User management"),Object(o.b)("p",null,"Mango manages its users in a separate database to ",Object(o.b)("inlineCode",{parentName:"p"},"box"),". However, ",Object(o.b)("inlineCode",{parentName:"p"},"box")," will automatically add, remove and update users and their passwords into Mango when you use the ",Object(o.b)("inlineCode",{parentName:"p"},"box")," user commands (such as ",Object(o.b)("inlineCode",{parentName:"p"},"adduser"),", ",Object(o.b)("inlineCode",{parentName:"p"},"deluser"),", and ",Object(o.b)("inlineCode",{parentName:"p"},"chpasswd"),"). You can still manage users through thee Mango admin interface, and create mango users that are not managed by box at all."),Object(o.b)("h2",{id:"troubleshooting"},"Troubleshooting"),Object(o.b)(s.default,{mdxType:"Troubleshooting"}),Object(o.b)("p",null,"Please refer to the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/hkalexling/Mango"}),"Mango project on Github"),". Please check the Wiki first, and see if there are any closed issues from the past which might be relevant to your problems. Give Mango a star while you're at it ;)"))}b.isMDXComponent=!0},156:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),p=a,m=d["".concat(i,".").concat(p)]||d[p]||b[p]||o;return n?r.a.createElement(m,s(s({ref:t},l),{},{components:n})):r.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},157:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(160),i=n(159),s=n(58),c=n.n(s),l=37,u=39;t.a=function(e){var t=e.block,n=e.children,s=e.defaultValue,d=e.values,b=e.groupId,p=e.className,m=Object(o.a)(),h=m.tabGroupChoices,g=m.setTabGroupChoices,f=Object(a.useState)(s),v=f[0],y=f[1],O=Object(a.useState)(!1),j=O[0],w=O[1];if(null!=b){var x=h[b];null!=x&&x!==v&&d.some((function(e){return e.value===x}))&&y(x)}var N=function(e){y(e),null!=b&&g(b,e)},T=[],C=function(e){e.metaKey||e.altKey||e.ctrlKey||w(!0)},M=function(){w(!1)};return Object(a.useEffect)((function(){return window.addEventListener("keydown",C),window.addEventListener("mousedown",M),function(){window.removeEventListener("keydown",C),window.removeEventListener("mousedown",M)}}),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t},p)},d.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===t,className:Object(i.a)("tabs__item",t,c.a.tabItem,{"tabs__item--active":v===t}),style:j?{}:{outline:"none"},key:t,ref:function(e){return T.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(T,e.target,e),C(e)},onFocus:function(){return N(t)},onClick:function(){N(t),w(!1)},onPointerDown:function(){return w(!1)}},n)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===v}))[0]))}},158:function(e,t,n){"use strict";var a=n(3),r=n(0),o=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return o.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:n,className:r}),t)}},56:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return d})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(156)),i=n(157),s=n(158),c=n(161),l={},u={unversionedId:"snippets/systemdtabs",id:"snippets/systemdtabs",isDocsHomePage:!1,title:"systemdtabs",description:"<Tabs",source:"@site/docs/snippets/systemdtabs.mdx",slug:"/snippets/systemdtabs",permalink:"/snippets/systemdtabs",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/snippets/systemdtabs.mdx",version:"current"},d=[],b={toc:d};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"code"},Object(o.b)(i.a,{defaultValue:"start",values:[{label:"Status",value:"status"},{label:"Start",value:"start"},{label:"Stop",value:"stop"},{label:"Restart",value:"restart"},{label:"Enable",value:"enable"},{label:"Disable",value:"disable"}],mdxType:"Tabs"},Object(o.b)(s.a,{value:"status",mdxType:"TabItem"},Object(o.b)(c.a,{children:"sudo systemctl status "+n.service,className:"bash",mdxType:"CodeBlock"})),Object(o.b)(s.a,{value:"start",mdxType:"TabItem"},Object(o.b)(c.a,{children:"sudo systemctl start "+n.service,className:"bash",mdxType:"CodeBlock"})),Object(o.b)(s.a,{value:"stop",mdxType:"TabItem"},Object(o.b)(c.a,{children:"sudo systemctl stop "+n.service,className:"bash",mdxType:"CodeBlock"})),Object(o.b)(s.a,{value:"restart",mdxType:"TabItem"},Object(o.b)(c.a,{children:"sudo systemctl restart "+n.service,className:"bash",mdxType:"CodeBlock"})),Object(o.b)(s.a,{value:"enable",mdxType:"TabItem"},Object(o.b)(c.a,{children:"sudo systemctl enable "+n.service,className:"bash",mdxType:"CodeBlock"})),Object(o.b)(s.a,{value:"disable",mdxType:"TabItem"},Object(o.b)(c.a,{children:"sudo systemctl disable "+n.service,className:"bash",mdxType:"CodeBlock"})))))}p.isMDXComponent=!0},59:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),o=(n(0),n(156)),i={},s={unversionedId:"snippets/troubleshooting",id:"snippets/troubleshooting",isDocsHomePage:!1,title:"troubleshooting",description:"You can always also try the general troubleshooting tips written in our guide. They might or might not apply, but asking these questions can often make you understand what is under the hood better and help you find what needs to be fixed. It's always worth a shot!",source:"@site/docs/snippets/troubleshooting.md",slug:"/snippets/troubleshooting",permalink:"/snippets/troubleshooting",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/snippets/troubleshooting.md",version:"current"},c=[],l={toc:c};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"You can always also try the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/guides/troubleshooting"}),"general troubleshooting tips written in our guide"),". They might or might not apply, but asking these questions can often make you understand what is under the hood better and help you find what needs to be fixed. It's always worth a shot!"))))}u.isMDXComponent=!0}}]);