"use strict";(self.webpackChunkswizzin_website=self.webpackChunkswizzin_website||[]).push([[4927],{4137:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return m}});var n=t(7294);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,s=function(e,r){if(null==e)return{};var t,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var c=n.createContext({}),u=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=u(e.components);return n.createElement(c.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,s=e.mdxType,o=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=u(t),m=s,f=d["".concat(c,".").concat(m)]||d[m]||l[m]||o;return t?n.createElement(f,i(i({ref:r},p),{},{components:t})):n.createElement(f,i({ref:r},p))}));function m(e,r){var t=arguments,s=r&&r.mdxType;if("string"==typeof e||s){var o=t.length,i=new Array(o);i[0]=d;var a={};for(var c in r)hasOwnProperty.call(r,c)&&(a[c]=r[c]);a.originalType=e,a.mdxType="string"==typeof e?e:s,i[1]=a;for(var u=2;u<o;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5338:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return l},default:function(){return m}});var n=t(7462),s=t(3366),o=(t(7294),t(4137)),i=t(1462),a=["components"],c={},u=void 0,p={unversionedId:"snippets/permsmediasrv",id:"snippets/permsmediasrv",isDocsHomePage:!1,title:"permsmediasrv",description:"{props.serviceName} runs as the user {props.serviceUsr}. This means, that this user needs to be able to read (and execute directories leading all the way up to) whatever you would like {props.serviceUsr} to play.",source:"@site/docs/snippets/permsmediasrv.mdx",sourceDirName:"snippets",slug:"/snippets/permsmediasrv",permalink:"/snippets/permsmediasrv",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/snippets/permsmediasrv.mdx",version:"current",frontMatter:{}},l=[],d={toc:l};function m(e){var r=e.components,t=(0,s.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,t.serviceName," runs as the user ",(0,o.kt)("command",null,t.serviceUsr),". This means, that this user needs to be able to read (and execute directories leading all the way up to) whatever you would like ",t.serviceUsr," to play."),(0,o.kt)("p",null,"During the installation, only the master user is present in this group."),(0,o.kt)("p",null,"In order to access non-master-user files cleanly, please add the ",t.serviceUsr," user to the group of users who can access the desired user's files, and ensure that this group has access to the media you would like to access."),(0,o.kt)(i.Z,{children:"usermod -a -G <aUser> "+t.serviceUsr+"\nchmod g+rx -R /home/<aUser>",className:"bash",mdxType:"CodeBlock"}))}m.isMDXComponent=!0}}]);