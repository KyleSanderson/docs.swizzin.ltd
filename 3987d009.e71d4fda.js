(window.webpackJsonp=window.webpackJsonp||[]).push([[32,15,22,76],{107:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return d})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return m}));var a=n(3),o=n(7),r=(n(0),n(156)),i=n(61),s=n(56),l=n(60),c=n(59),d={id:"sonarrv3",title:'Sonarr v3 aka "Phantom"',sidebar_label:"Sonarr v3"},b={unversionedId:"applications/sonarrv3",id:"applications/sonarrv3",isDocsHomePage:!1,title:'Sonarr v3 aka "Phantom"',description:"Sonarr is a PVR for Usenet and BitTorrent users. It can monitor multiple RSS feeds for new episodes of your favorite shows and will grab, sort and rename them. It can also be configured to automatically upgrade the quality of files already downloaded when a better quality format becomes available.",source:"@site/docs/applications/sonarrv3.mdx",slug:"/applications/sonarrv3",permalink:"/applications/sonarrv3",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/applications/sonarrv3.mdx",version:"current",sidebar_label:"Sonarr v3",sidebar:"docs",previous:{title:'Sonarr v2 aka "Stable"',permalink:"/applications/sonarr"},next:{title:"Radarr",permalink:"/applications/radarr"}},u=[{value:"Initial Setup",id:"initial-setup",children:[{value:"Optional parameters",id:"optional-parameters",children:[]}]},{value:"How to Access",id:"how-to-access",children:[]},{value:"Migrating from v2",id:"migrating-from-v2",children:[{value:"v2 setups that were modified",id:"v2-setups-that-were-modified",children:[]}]},{value:"Service Management",id:"service-management",children:[]},{value:"Configuration",id:"configuration",children:[{value:"Add a new show (and your first root directory)",id:"add-a-new-show-and-your-first-root-directory",children:[]},{value:"Connect download clients",id:"connect-download-clients",children:[]},{value:"Add an indexer with Jackett",id:"add-an-indexer-with-jackett",children:[]},{value:"Sonarr and user homedir permissions",id:"sonarr-and-user-homedir-permissions",children:[]},{value:"Other tasks",id:"other-tasks",children:[]}]},{value:"Troubleshooting",id:"troubleshooting",children:[]},{value:"Downgrading to v2",id:"downgrading-to-v2",children:[]}],p={toc:u};function m(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Sonarr is a PVR for Usenet and BitTorrent users. It can monitor multiple RSS feeds for new episodes of your favorite shows and will grab, sort and rename them. It can also be configured to automatically upgrade the quality of files already downloaded when a better quality format becomes available."),Object(r.b)("h2",{id:"initial-setup"},"Initial Setup"),Object(r.b)("p",null,"Installing Sonarr is easy. Simply issue the following command"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash",metastring:"main",main:!0}),"sudo box install sonarrv3\n")),Object(r.b)("p",null,"This command will configure sonarr for your user. Sonarr is installed via an apt repository, thus the easiest way to keep it up to date is by issuing the command ",Object(r.b)("inlineCode",{parentName:"p"},"apt update && apt upgrade"),". The sonarr base files will be located in ",Object(r.b)("inlineCode",{parentName:"p"},"/usr/lib/sonarr")),Object(r.b)("h3",{id:"optional-parameters"},"Optional parameters"),Object(r.b)(i.default,{mdxType:"InstallOptsWarning"}),Object(r.b)("p",null,"The following is an example of how this would look"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash",metastring:"main",main:!0}),"export sonarrv3owner='autodlbot'\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"sonarrv2owner"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Used to specify a non-master user which sonarr v2 might have ran under before for the migration and user-group adding."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"sonarrv3owner"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Used to specify a non-master user which sonarr v3 will run as after the installation.")))),Object(r.b)("h2",{id:"how-to-access"},"How to Access"),Object(r.b)("p",null,"Once setup, sonarr will be available at the link ",Object(r.b)("inlineCode",{parentName:"p"},"https://<hostname.ltd>/sonarr")),Object(r.b)("h2",{id:"migrating-from-v2"},"Migrating from v2"),Object(r.b)("p",null,"The install script for Sonarr v3 includes functionality to migrate and remove a v2 (",Object(r.b)("inlineCode",{parentName:"p"},"sonarr"),") installation. Please keep the v2 installed for optimal results. ",Object(r.b)("strong",{parentName:"p"},"It is not possible to have both v2 and v3 installed at the same time.")),Object(r.b)("p",null,"An additional backup of the v2 configuration is created in ",Object(r.b)("inlineCode",{parentName:"p"},"/root/sonarrv2.bak/"),", which includes an internal Sonarr backup file triggered via API right before the installation."),Object(r.b)("p",null,"Please check the Downgrading chapter if you want to go back."),Object(r.b)("h3",{id:"v2-setups-that-were-modified"},"v2 setups that were modified"),Object(r.b)("p",null,"If you have toyed with the v2 Sonarr configuration and are not using the vanilla setup by swizzin (e.g. modified service files, overrides, etc.), you should make sure to run some extra steps before."),Object(r.b)("p",null,"You should generally follow the following steps at your own risk. "),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Back up your sonarrv2 through the web interface."),Object(r.b)("li",{parentName:"ol"},"Make a remote copy of the entire Sonarr folder just in case."),Object(r.b)("li",{parentName:"ol"},"Stop your sonarr service or process"),Object(r.b)("li",{parentName:"ol"},"Remove Sonarrv2 through ",Object(r.b)("inlineCode",{parentName:"li"},"box remove sonarrv2"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"verify you cleaned up all custom configs in random places"))),Object(r.b)("li",{parentName:"ol"},"Link/copy your old ",Object(r.b)("inlineCode",{parentName:"li"},".config/nzb")," directory to the sonarrv3 migration path",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"e.g. ",Object(r.b)("inlineCode",{parentName:"li"},'ln -s /home/"${sonarrv2owner}"/.config/NzbDrone /usr/lib/sonarr/nzbdrone-appdata')))),Object(r.b)("li",{parentName:"ol"},"Install sonarr v3 with ",Object(r.b)("inlineCode",{parentName:"li"},"box install sonarrv3"))),Object(r.b)("h2",{id:"service-management"},"Service Management"),Object(r.b)("p",null,"Service status for sonarr is handled by systemd and is owned by the ",Object(r.b)("inlineCode",{parentName:"p"},"sonarr")," package. The systemd service file resides at"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash",metastring:"main",main:!0}),"/lib/systemd/system/sonarr.service\n")),Object(r.b)("p",null,"It is not recommended to make alterations directly to this file. Rather, use ",Object(r.b)("inlineCode",{parentName:"p"},"systemctl edit sonarr")," if you would like to make adjustments."),Object(r.b)(s.default,{service:"sonarr",mdxType:"SystemdTabs"}),Object(r.b)("h2",{id:"configuration"},"Configuration"),Object(r.b)("p",null,"Out of the box, Sonarr comes with very little pre-set configuration. Following are some basic tasks to help get your client up and running."),Object(r.b)("h3",{id:"add-a-new-show-and-your-first-root-directory"},"Add a new show (and your first root directory)"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"At the top, click series."),Object(r.b)("li",{parentName:"ol"},"Click the button ",Object(r.b)("inlineCode",{parentName:"li"},"+ Add Series")),Object(r.b)("li",{parentName:"ol"},"Type the name of the show you want to add"),Object(r.b)("li",{parentName:"ol"},"Under ",Object(r.b)("inlineCode",{parentName:"li"},"Path"),", choose ",Object(r.b)("inlineCode",{parentName:"li"},"Add a new path"),". Enter the path for the folder you wish to add your Sonarr shows to and click the green check-mark to add the directory.")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"e.g. ",Object(r.b)("inlineCode",{parentName:"li"},'"/home/<username>/media/TV Shows"'))),Object(r.b)("ol",{start:5},Object(r.b)("li",{parentName:"ol"},"Change the other settings to your own needs"),Object(r.b)("li",{parentName:"ol"},"Click the green + to add the show.")),Object(r.b)("h3",{id:"connect-download-clients"},"Connect download clients"),Object(r.b)("p",null,"Please note the two current caveats:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},'RuTorrent installs require a change to Sonarr\'s Security policy, which you can change by going to Settings -> General -> Security. Set the value to "Disable for local" ',Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://i.imgur.com/m6mAocu.png"}),"(See here)")),Object(r.b)("li",{parentName:"ul"},"qBittorrent 4.3.x+ is not currently supported, and it is advised to switch back to 4.2.5 ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/Sonarr/Sonarr/wiki/Downloads-and-Importing#qbittorrent-43x"}),"(More info here)"))),Object(r.b)(l.default,{mdxType:"Conn4Arrs"}),Object(r.b)("h3",{id:"add-an-indexer-with-jackett"},"Add an indexer with Jackett"),Object(r.b)("p",null,"Sonarr only supports a few trackers out of the box, but the indexers can be expanded by using the application ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/applications/jackett"}),"Jackett"),". To add an indexer with Jackett, use the following steps."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"By default, when receiving the torznab feed from Jackett, it will need to be modified to be connected with the application. The default link looks like:"),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-plaintext"}),"https://<yourhostname.ltd>/jackett/api/v2.0/indexers/yourtracker/results/torznab/\n")),Object(r.b)("p",{parentName:"div"},"We need to edit this link to ",Object(r.b)("strong",{parentName:"p"},"remove https")," and ",Object(r.b)("strong",{parentName:"p"},"add the port number"),". Thus, if your port number was ",Object(r.b)("inlineCode",{parentName:"p"},"12345"),", your edited URL would look like this:"),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-plaintext"}),"http://<yourhostname.ltd>:12345/jackett/api/v2.0/indexers/yourtracker/results/torznab/\n")))),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Go to ",Object(r.b)("inlineCode",{parentName:"li"},"Settings > Indexers")," and click ",Object(r.b)("inlineCode",{parentName:"li"},"+")," to add a new indexer."),Object(r.b)("li",{parentName:"ol"},"Under ",Object(r.b)("inlineCode",{parentName:"li"},"Torrent")," choose ",Object(r.b)("inlineCode",{parentName:"li"},"Torznab")),Object(r.b)("li",{parentName:"ol"},"Use the settings:")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-plaintext",metastring:"main",main:!0}),"Name: <tracker name>\nURL: <click copy torznab feed in jackett and modify as per above>\nAPI: <copy and paste from jackett UI>\n")),Object(r.b)("ol",{start:4},Object(r.b)("li",{parentName:"ol"},"Click ",Object(r.b)("inlineCode",{parentName:"li"},"Test"),". If all is good, click ",Object(r.b)("inlineCode",{parentName:"li"},"Save"),".")),Object(r.b)("h3",{id:"sonarr-and-user-homedir-permissions"},"Sonarr and user homedir permissions"),Object(r.b)("p",null,"Sonarr is running as the master user (unless changed in install options using parameters), so that user needs to be able to see the directories you'd like sonarr to see as well. You can achieve this by adding the desired user to the group of whoever runs the sonarr process. e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"usermod -a -G <user with data> <master/sonarrv3owner>")),Object(r.b)("h3",{id:"other-tasks"},"Other tasks"),Object(r.b)("p",null,"You may wish to further alter your setup by setting quality profiles or setting up post-processing so that media is automatically transferred to your Sonarr library when your torrents are completed. If you need further help, you can refer to the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Sonarr/Sonarr/wiki"}),"Sonarr Wiki"),"."),Object(r.b)("h2",{id:"troubleshooting"},"Troubleshooting"),Object(r.b)(c.default,{mdxType:"Troubleshooting"}),Object(r.b)("p",null,"Please consult the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Sonarr/Sonarr/issues"}),"github issues")," or the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://discord.gg/M6BvZn5"}),"Sonarr Discord community")," in case you are having problems with this application."),Object(r.b)("h2",{id:"downgrading-to-v2"},"Downgrading to v2"),Object(r.b)("p",null,"In order to downgrade, remove ",Object(r.b)("inlineCode",{parentName:"p"},"sonarrv3")," and install ",Object(r.b)("inlineCode",{parentName:"p"},"sonarr")," again. The original configuration files will be untouched. Any changes in v3 will not be migrated, as the installation will only look at the old files."),Object(r.b)("p",null,"If the installation does not reproduce your original v2 content, please see the Migration and Backup steps on the Sonarr Github, and use the contents of ",Object(r.b)("inlineCode",{parentName:"p"},"/root/swizzin/backups/sonarrv2.bak"),' as the "original" files.'),Object(r.b)("p",null,"Please consult the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Sonarr/Sonarr/wiki/Backup-and-Restore"}),"Sonarr's wiki for downgrading steps")),Object(r.b)("p",null,"Therefore, you could achieve a downgrade with the following (untested!) example steps"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"box remove sonarrv3\nbox install sonarr\nsystemctl stop sonarr@<master>\ncd /home/<master>/.config\nmv sonarr sonarrv3bak\ncp /root/swizzin/backups/sonarrv2.back./* NzbDrone/\nchown -R <master>:<master> NzbDrone\nsystemctl start sonarr@<master>\n")))}m.isMDXComponent=!0},156:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),d=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=d(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=d(n),p=a,m=b["".concat(i,".").concat(p)]||b[p]||u[p]||r;return n?o.a.createElement(m,s(s({ref:t},c),{},{components:n})):o.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},157:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(160),i=n(159),s=n(58),l=n.n(s),c=37,d=39;t.a=function(e){var t=e.block,n=e.children,s=e.defaultValue,b=e.values,u=e.groupId,p=e.className,m=Object(r.a)(),h=m.tabGroupChoices,O=m.setTabGroupChoices,g=Object(a.useState)(s),f=g[0],j=g[1],v=Object(a.useState)(!1),y=v[0],w=v[1];if(null!=u){var N=h[u];null!=N&&N!==f&&b.some((function(e){return e.value===N}))&&j(N)}var k=function(e){j(e),null!=u&&O(u,e)},T=[],x=function(e){e.metaKey||e.altKey||e.ctrlKey||w(!0)},S=function(){w(!1)};return Object(a.useEffect)((function(){return window.addEventListener("keydown",x),window.addEventListener("mousedown",S),function(){window.removeEventListener("keydown",x),window.removeEventListener("mousedown",S)}}),[]),o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t},p)},b.map((function(e){var t=e.value,n=e.label;return o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===t,className:Object(i.a)("tabs__item",t,l.a.tabItem,{"tabs__item--active":f===t}),style:y?{}:{outline:"none"},key:t,ref:function(e){return T.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case d:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case c:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(T,e.target,e),x(e)},onFocus:function(){return k(t)},onClick:function(){k(t),w(!1)},onPointerDown:function(){return w(!1)}},n)}))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===f}))[0]))}},158:function(e,t,n){"use strict";var a=n(3),o=n(0),r=n.n(o);t.a=function(e){var t=e.children,n=e.hidden,o=e.className;return r.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:n,className:o}),t)}},172:function(e,t,n){"use strict";var a=n(3),o=n(0),r=n.n(o),i=n(185),s=n(22),l=n(169),c=n(173),d=n.n(c);t.a=function(e){var t=Object(s.default)().siteConfig.themeConfig.prism,n=void 0===t?{}:t,c=Object(o.useState)(!1),b=c[0],u=c[1];Object(o.useEffect)((function(){u(!0)}),[]);var p=Object(l.a)().isDarkTheme,m=n.theme,h=n.darkTheme||m,O=p?h:m,g=e.language,f=void 0===g?"bash":g,j=e.code;return r.a.createElement(i.a,Object(a.a)({},i.b,{code:j,language:f,key:b,theme:O}),(function(e){var t=e.className,n=e.style,a=e.tokens,o=e.getLineProps,i=e.getTokenProps;return r.a.createElement("pre",{className:t+" "+d.a.code,style:n},a.map((function(e,t){return r.a.createElement("div",o({line:e,key:t}),e.map((function(e,t){return r.a.createElement("span",i({token:e,key:t}))})))})))}))}},173:function(e,t,n){e.exports={code:"code_ddYG"}},56:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return d})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(3),o=n(7),r=(n(0),n(156)),i=n(157),s=n(158),l=n(161),c={},d={unversionedId:"snippets/systemdtabs",id:"snippets/systemdtabs",isDocsHomePage:!1,title:"systemdtabs",description:"<Tabs",source:"@site/docs/snippets/systemdtabs.mdx",slug:"/snippets/systemdtabs",permalink:"/snippets/systemdtabs",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/snippets/systemdtabs.mdx",version:"current"},b=[],u={toc:b};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"code"},Object(r.b)(i.a,{defaultValue:"start",values:[{label:"Status",value:"status"},{label:"Start",value:"start"},{label:"Stop",value:"stop"},{label:"Restart",value:"restart"},{label:"Enable",value:"enable"},{label:"Disable",value:"disable"}],mdxType:"Tabs"},Object(r.b)(s.a,{value:"status",mdxType:"TabItem"},Object(r.b)(l.a,{children:"sudo systemctl status "+n.service,className:"bash",mdxType:"CodeBlock"})),Object(r.b)(s.a,{value:"start",mdxType:"TabItem"},Object(r.b)(l.a,{children:"sudo systemctl start "+n.service,className:"bash",mdxType:"CodeBlock"})),Object(r.b)(s.a,{value:"stop",mdxType:"TabItem"},Object(r.b)(l.a,{children:"sudo systemctl stop "+n.service,className:"bash",mdxType:"CodeBlock"})),Object(r.b)(s.a,{value:"restart",mdxType:"TabItem"},Object(r.b)(l.a,{children:"sudo systemctl restart "+n.service,className:"bash",mdxType:"CodeBlock"})),Object(r.b)(s.a,{value:"enable",mdxType:"TabItem"},Object(r.b)(l.a,{children:"sudo systemctl enable "+n.service,className:"bash",mdxType:"CodeBlock"})),Object(r.b)(s.a,{value:"disable",mdxType:"TabItem"},Object(r.b)(l.a,{children:"sudo systemctl disable "+n.service,className:"bash",mdxType:"CodeBlock"})))))}p.isMDXComponent=!0},59:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var a=n(3),o=n(7),r=(n(0),n(156)),i={},s={unversionedId:"snippets/troubleshooting",id:"snippets/troubleshooting",isDocsHomePage:!1,title:"troubleshooting",description:"You can always also try the general troubleshooting tips written in our guide. They might or might not apply, but asking these questions can often make you understand what is under the hood better and help you find what needs to be fixed. It's always worth a shot!",source:"@site/docs/snippets/troubleshooting.md",slug:"/snippets/troubleshooting",permalink:"/snippets/troubleshooting",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/snippets/troubleshooting.md",version:"current"},l=[],c={toc:l};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"You can always also try the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/guides/troubleshooting"}),"general troubleshooting tips written in our guide"),". They might or might not apply, but asking these questions can often make you understand what is under the hood better and help you find what needs to be fixed. It's always worth a shot!"))))}d.isMDXComponent=!0},60:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return d})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(3),o=n(7),r=(n(0),n(156)),i=n(157),s=n(158),l=n(172),c={},d={unversionedId:"snippets/conn4arr",id:"snippets/conn4arr",isDocsHomePage:!1,title:"conn4arr",description:"To add a download client, go to Settings > Download Client. Make sure Advanced Settings are shown and click Add Client.",source:"@site/docs/snippets/conn4arr.mdx",slug:"/snippets/conn4arr",permalink:"/snippets/conn4arr",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/snippets/conn4arr.mdx",version:"current"},b=[],u={toc:b};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"To add a download client, go to ",Object(r.b)("inlineCode",{parentName:"p"},"Settings > Download Client"),". Make sure ",Object(r.b)("inlineCode",{parentName:"p"},"Advanced Settings")," are shown and click ",Object(r.b)("inlineCode",{parentName:"p"},"Add Client"),"."),Object(r.b)(i.a,{defaultValue:"rutorrent",values:[{label:"ruTorrent",value:"rutorrent"},{label:"Transmission",value:"transmission"},{label:"Deluge",value:"deluge"},{label:"nzbGet",value:"nzbget"},{label:"qBittorrent",value:"qbittorrent"}],mdxType:"Tabs"},Object(r.b)(s.a,{value:"rutorrent",mdxType:"TabItem"},Object(r.b)(l.a,{code:"Name: rTorrent\nrTorrent host: 127.0.0.1\nPort: 443\nURL Path: /rutorrent/plugins/httprpc/action.php\nUse SSL: ON\nUsername: <your username>\nPassword: <your password>\nAdd label to torrent: TV (or anything else you desire)\nOptional - Downloaded files location: <custom directory>",lang:"plaintext",mdxType:"CodeSnippet"})),Object(r.b)(s.a,{value:"transmission",mdxType:"TabItem"},Object(r.b)(l.a,{code:"To retrieve your port, please run `grep rpc-port ~/.config/transmission-daemon/settings.json`,\nwhen logged in as the user you want to use transmission of (i.e. not root).\n----------\nHost: 127.0.0.1\nPort: <See above, e.g. 9091>\nURL Base: /transmission/ (Should be default)\nUsername: <your username>\nPassword: <your password>\nCategory: <optional, e.g. Sonarr or TV>\nConnect using HTTPS: OFF",lang:"plaintext",mdxType:"CodeSnippet"})),Object(r.b)(s.a,{value:"deluge",mdxType:"TabItem"},Object(r.b)(l.a,{code:"Name: Deluge\nHost: 127.0.0.1\nPost: <deluge web port>\nDeluge Password: <your password>\nAdd label to torrent: TV (or anything else you desire)\n* label plugin must be enabled in Deluge if you add a label\nSSL: OFF",lang:"plaintext",mdxType:"CodeSnippet"})),Object(r.b)(s.a,{value:"nzbget",mdxType:"TabItem"},Object(r.b)(l.a,{code:"NZBget host: 127.0.0.1\nport: 443\nURL Base: nzbget\nConnect using HTTPS: ON\nnzbget username: <your username>\nnzbget Password: <your password>\nAdd label to torrent: Series (or anything else you desire)\n* label must exist under Categories in nzbGet",lang:"plaintext",mdxType:"CodeSnippet"})),Object(r.b)(s.a,{value:"qbittorrent",mdxType:"TabItem"},Object(r.b)(l.a,{code:"Name: qBittorrent\nHost: 127.0.0.1\nPost: <qbittorrent web port>\nUsername: <your username>\nPassword: <your password>\nCategory: TV (or anything else you desire)\nSSL: OFF",lang:"plaintext",mdxType:"CodeSnippet"}))))}p.isMDXComponent=!0},61:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var a=n(3),o=n(7),r=(n(0),n(156)),i={},s={unversionedId:"snippets/installoptswarning",id:"snippets/installoptswarning",isDocsHomePage:!1,title:"installoptswarning",description:"None of these are required for you to define if you want an easy install. If you would like to do something custom, then here are some options for you.",source:"@site/docs/snippets/installoptswarning.md",slug:"/snippets/installoptswarning",permalink:"/snippets/installoptswarning",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/snippets/installoptswarning.md",version:"current"},l=[],c={toc:l};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"None of these are required for you to define if you want an easy install. If you would like to do something custom, then here are some options for you."),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Make sure you know what you're doing!")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},Object(r.b)("strong",{parentName:"p"},"Please note that it is difficult for us to support these options as they are custom for each install")),Object(r.b)("p",{parentName:"div"},"None of the options are sanity-checked on install so setting something wrong could break your installation."),Object(r.b)("p",{parentName:"div"},"Again, you do not need to set these if you don't know what you're doing."))),Object(r.b)("p",null,"There are a couple options you can set ",Object(r.b)("strong",{parentName:"p"},"before")," installing transmission through export. "),Object(r.b)("p",null,"If you'd like to use one of these, run ",Object(r.b)("inlineCode",{parentName:"p"},"export option=value")," ",Object(r.b)("strong",{parentName:"p"},"before")," running the install command."))}d.isMDXComponent=!0}}]);