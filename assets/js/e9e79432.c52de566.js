"use strict";(self.webpackChunkswizzin_website=self.webpackChunkswizzin_website||[]).push([[1836,865,1687],{4137:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||r;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8448:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:i},t)}},2713:function(e,t,n){var a=(0,n(7294).createContext)(void 0);t.Z=a},50:function(e,t,n){var a=n(7294),i=n(2713);t.Z=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e}},4297:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(7294),i=n(50),r=n(6010),o="tabItem_HqPw",s=37,l=39;var p=function(e){var t=e.block,n=e.children,p=e.defaultValue,d=e.values,u=e.groupId,c=e.className,m=(0,i.Z)(),h=m.tabGroupChoices,f=m.setTabGroupChoices,k=(0,a.useState)(p),g=k[0],y=k[1],v=(0,a.useState)(!1),b=v[0],w=v[1];if(null!=u){var N=h[u];null!=N&&N!==g&&d.some((function(e){return e.value===N}))&&y(N)}var C=function(e){y(e),null!=u&&f(u,e)},T=[],x=function(e){e.metaKey||e.altKey||e.ctrlKey||w(!0)},z=function(){w(!1)};return(0,a.useEffect)((function(){return window.addEventListener("keydown",x),window.addEventListener("mousedown",z),function(){window.removeEventListener("keydown",x),window.removeEventListener("mousedown",z)}}),[]),a.createElement("div",null,a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},c)},d.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===t,className:(0,r.Z)("tabs__item",t,o,{"tabs__item--active":g===t}),style:b?{}:{outline:"none"},key:t,ref:function(e){return T.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case l:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(T,e.target,e),x(e)},onFocus:function(){return C(t)},onClick:function(){C(t),w(!1)},onPointerDown:function(){return w(!1)}},n)}))),a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===g}))[0]))}},5571:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return d},metadata:function(){return u},toc:function(){return c},default:function(){return h}});var a=n(7462),i=n(3366),r=(n(7294),n(4137)),o=n(9971),s=n(1899),l=["components"],p={id:"panel",title:"Panel",sidebar_label:"Panel"},d=void 0,u={unversionedId:"applications/panel",id:"applications/panel",isDocsHomePage:!1,title:"Panel",description:"The dashboard is a graphical user interface which provides a central location for you to keep an eye on server statistics, personal usage information and your services.",source:"@site/docs/applications/panel.mdx",sourceDirName:"applications",slug:"/applications/panel",permalink:"/applications/panel",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/applications/panel.mdx",version:"current",frontMatter:{id:"panel",title:"Panel",sidebar_label:"Panel"},sidebar:"docs",previous:{title:"Organizr",permalink:"/applications/organizr"},next:{title:"Pyload",permalink:"/applications/pyload"}},c=[{value:"How to Install",id:"how-to-install",children:[]},{value:"How to Access",id:"how-to-access",children:[]},{value:"Configuration options",id:"configuration-options",children:[]},{value:"Service Management",id:"service-management",children:[]},{value:"Features",id:"features",children:[{value:"Application Links",id:"application-links",children:[]},{value:"Server Statistics",id:"server-statistics",children:[]},{value:"Statistic Graphs",id:"statistic-graphs",children:[]},{value:"Personal Usage Statistics",id:"personal-usage-statistics",children:[]},{value:"Service Management",id:"service-management-1",children:[]}]},{value:"Customizing Application Settings",id:"customizing-application-settings",children:[{value:"Application Profile Definitions",id:"application-profile-definitions",children:[]},{value:"Application Definitions with a User",id:"application-definitions-with-a-user",children:[]},{value:"Editing an existing application",id:"editing-an-existing-application",children:[]},{value:"Adding a new definition",id:"adding-a-new-definition",children:[]}]},{value:"Troubleshooting",id:"troubleshooting",children:[{value:"I cannot log in",id:"i-cannot-log-in",children:[]},{value:"Logs",id:"logs",children:[]},{value:"Why am I being rate-limited?",id:"why-am-i-being-rate-limited",children:[]}]}],m={toc:c};function h(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The dashboard is a graphical user interface which provides a central location for you to keep an eye on server statistics, personal usage information and your services."),(0,r.kt)("h2",{id:"how-to-install"},"How to Install"),(0,r.kt)("p",null,"By default, the panel is not installed on swizzin installations, you must select it during install or install it afterwards via SSH with the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"main",main:!0},"sudo box install panel\n")),(0,r.kt)("p",null,"Setup will create a virtual python environment (",(0,r.kt)("inlineCode",{parentName:"p"},"/opt/.venv/swizzin"),") and then clone the github repository (",(0,r.kt)("inlineCode",{parentName:"p"},"/opt/swizzin"),")"),(0,r.kt)("h2",{id:"how-to-access"},"How to Access"),(0,r.kt)("p",null,"If nginx is currently installed, the dashboard is available at the web root for your IP/DNS:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"https://<hostname.ltd>")),(0,r.kt)("p",null,"If nginx is not installed, you can find the panel at"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"http://<hostname.ltd>:8333")),(0,r.kt)("h2",{id:"configuration-options"},"Configuration options"),(0,r.kt)("p",null,"There should not be much need to alter config options, but a few currently exist. These options should be defined directly in ",(0,r.kt)("inlineCode",{parentName:"p"},"/opt/swizzin/swizzin.cfg"),". Please note, all config variables are uppercase:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ADMIN_USER"),' - Previously referred to as the "master" user. (Default: User with UID 1000)'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"FLASK_HTPASSWD_PATH")," - The location of the htpasswd file to protect the panel with. (Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"/etc/htpasswd"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"FLASK_AUTH_REALM")," - Text displayed during auth pop up"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"FORMS_LOGIN")," - Whether or not to use the newer forms based login. (Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"True"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"HOST")," - IP address to bind to (Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"0.0.0.0"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PORT")," - Bind port (Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"8333"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"URLBASE"),' - "Sub-path" to server the panel (Default: ',(0,r.kt)("inlineCode",{parentName:"li"},"/"),"). Make sure to adjust your nginx config."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"RATELIMIT_ENABLED")," - Define whether or not rate limiting is active for non-logged-in users. (Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"True"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"RATELIMIT_DEFAULT")," - Customize the default rate limiting period. (Default: ",(0,r.kt)("inlineCode",{parentName:"li"},'"5 per minute"'),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DEBUG")," - Turn off production mode and turn on the debugger. Prints response times and displays Python errors in the browser instead of causing internal server errors (Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"False"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SHAREDSERVER")," - Defines if this server is a swizzin enterprise server, you will probably never need to set this (Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"False"),")")),(0,r.kt)("h2",{id:"service-management"},"Service Management"),(0,r.kt)("p",null,"The systemd service file resides at:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"main",main:!0},"/etc/systemd/system/panel.service\n")),(0,r.kt)(o.default,{service:"panel",mdxType:"SystemdTabs"}),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("h3",{id:"application-links"},"Application Links"),(0,r.kt)("p",null,"On the left side of the dashboard, you'll find quick links to the currently installed applications on your slot. No need to remember the endpoints and ports yourself!"),(0,r.kt)("h3",{id:"server-statistics"},"Server Statistics"),(0,r.kt)("p",null,"The dashboard provides metrics for server load, CPU usage, and the current network metrics for upload and download speeds."),(0,r.kt)("h3",{id:"statistic-graphs"},"Statistic Graphs"),(0,r.kt)("p",null,"If you have the ",(0,r.kt)("inlineCode",{parentName:"p"},"netdata")," package installed, you'll see an additional tab in the navbar for Stats."),(0,r.kt)("h3",{id:"personal-usage-statistics"},"Personal Usage Statistics"),(0,r.kt)("p",null,"You can find your disk quota here."),(0,r.kt)("h3",{id:"service-management-1"},"Service Management"),(0,r.kt)("p",null,"You can see at a glance whether or not your services are currently running. You can also start and stop services directly from the panel, if you just need to quickly restart a service without SSH-ing into your slot."),(0,r.kt)("h2",{id:"customizing-application-settings"},"Customizing Application Settings"),(0,r.kt)("p",null,"Application profiles can be adjusted to your needs by editing the file ",(0,r.kt)("inlineCode",{parentName:"p"},"/opt/swizzin/core/custom/profiles.py"),". While this file is largely just variable definitions, it is Python, so be aware that indentation is extremely important. Please note, it is imperative that you do not touch the ",(0,r.kt)("inlineCode",{parentName:"p"},"import")," definition at the top of this file."),(0,r.kt)("h3",{id:"application-profile-definitions"},"Application Profile Definitions"),(0,r.kt)("p",null,"Most of the application options are self-explanatory, nevertheless, things can get confusing. Here's a list of options you can currently define and their meaning/usage."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name")," - The name of the application"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pretty_name")," - A pretty version of the name, meant for printing in html templates"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"process")," - The name of the process to search for when running ",(0,r.kt)("inlineCode",{parentName:"li"},"app_status")," (default: ",(0,r.kt)("inlineCode",{parentName:"li"},"name"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"runas")," - The user of the process to search for when running ",(0,r.kt)("inlineCode",{parentName:"li"},"app_status")," (default: ",(0,r.kt)("inlineCode",{parentName:"li"},"user"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"scheme")," - Use to force HTTP if reverse proxy is disabled (default: current http scheme, usually https)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"baseurl")," - The base URL and/or port of the application. If undefined, no sidebar link will be created."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"urloverride")," - A complete override of the URL. If true, will supersede a baseurl/scheme definition. Example: ",(0,r.kt)("inlineCode",{parentName:"li"},"https://plex.example.com")," (default: ",(0,r.kt)("inlineCode",{parentName:"li"},"False"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"systemd")," - The name of the systemd service (default: ",(0,r.kt)("inlineCode",{parentName:"li"},"name"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"img")," - The name of your brand app icon. This directive can allow you to reuse already existing icons (i.e. for a 4k radarr instance). (default: ",(0,r.kt)("inlineCode",{parentName:"li"},"name"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"check_theD")," - If ",(0,r.kt)("inlineCode",{parentName:"li"},"True"),", the panel will use ",(0,r.kt)("inlineCode",{parentName:"li"},"systemctl is-active")," rather than searching ",(0,r.kt)("inlineCode",{parentName:"li"},"ps")," when running ",(0,r.kt)("inlineCode",{parentName:"li"},"app_status")," (default: ",(0,r.kt)("inlineCode",{parentName:"li"},"False"),")")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"There is a very large performance penalty when enabling a service with ",(0,r.kt)("inlineCode",{parentName:"p"},"check_theD"),". The following response times speak for themselves."),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre"},'#check_theD enabled for 14 services\n"GET /apps/status HTTP/1.1" 200 1163 0.226762\n#check_theD enabled for a single service\n"GET /apps/status HTTP/1.1" 200 1164 0.043281\n#check_theD enabled for no services\n"GET /apps/status HTTP/1.1" 200 1164 0.026525\n')),(0,r.kt)("p",{parentName:"div"},"Given the results, it is important to remember to use ",(0,r.kt)("inlineCode",{parentName:"p"},"check_theD")," sparingly. As such, it is not enabled by default in any default swizzin profiles."))),(0,r.kt)("h3",{id:"application-definitions-with-a-user"},"Application Definitions with a User"),(0,r.kt)("p",null,"If for some reason your application requires extra information specific to the user's context, the application's meta profile can be called with the user context."),(0,r.kt)("h3",{id:"editing-an-existing-application"},"Editing an existing application"),(0,r.kt)("p",null,"If you want to edit the variables of already profiled applications, you simply need to make a new class definition while calling the same class as the template."),(0,r.kt)("p",null,"Let's take an application that many users request to make changes to: Plex. Say my Plex instance isn't at port 32400 for some reason (perhaps I have a custom docker container running). If I wanted my dashboard link to instead use port 31400, I can easily make this change by adding two lines of code to ",(0,r.kt)("inlineCode",{parentName:"p"},"core/custom/profiles.py"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'class plex_meta(plex_meta):\n    baseurl = ":31400/web"\n')),(0,r.kt)("p",null,'It\'s not necessary to add any other already-defined variables unless you wish to change them. This layout will only override the definitions which have been altered by us in the custom profile and use the defaults for everything else. But why stop there? We can also do things like change the "Pretty Name" of Plex displayed on the panel.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'class plex_meta(plex_meta):\n    baseurl = ":31400/web"\n    pretty_name = "PLEX MEDIA SERVER"\n')),(0,r.kt)("p",null,'Now, instead of "Plex" the sidebar link and service status name will be displayed as "PLEX MEDIA SERVER". Why am I yelling? I have no idea.'),(0,r.kt)("h3",{id:"adding-a-new-definition"},"Adding a new definition"),(0,r.kt)("p",null,"Another commonly requested task is adding link and service status for applications not managed by swizzin. For instance, some users may have a second instance of Radarr running which they use to manage their 4k libraries. Let's add a new definition -- it won't be based on anything else, so we'll start fresh and define everything we need to make the service show up."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'class radarr4k_meta:\n    name = "radarr4k"\n    pretty_name = "4K Radarr"\n    baseurl = "/radarr4k"\n    systemd = "radarr4k@"\n    check_theD = True\n    img = "radarr"\n')),(0,r.kt)("p",null,"Since we enabled the checking of systemd services for this unit, we should enable it for the regular Radarr unit as well; otherwise, we won't be able to tell which Radarr is actually running when checking if it is active."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"class radarr_meta(radarr_meta):\n    check_theD = True\n")),(0,r.kt)("p",null,"In order to tell the panel to check for the new application, simply create a lock file using SSH with the rest of your swizzin applications:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo touch /install/.radarr4k.lock\n")),(0,r.kt)("p",null,"Finally, if you want to add an application icon to the sidebar, simply add a similarly named .png (or use the ",(0,r.kt)("inlineCode",{parentName:"p"},"img")," variable) to the ",(0,r.kt)("inlineCode",{parentName:"p"},"/opt/swizzin/static/img/apps")," folder. i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},"/opt/swizzin/static/img/apps/radarr4k.png"),"."),(0,r.kt)("p",null,"Once you're happy with your edits, don't forget to restart the panel:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"systemctl restart panel\n")),(0,r.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)(s.default,{mdxType:"Troubleshooting"}),(0,r.kt)("h3",{id:"i-cannot-log-in"},"I cannot log in"),(0,r.kt)("p",null,"You're probably running some browser plugins which are causing interference with the swizzin panel due to the way basic http auth is being handled. Please try to disable the plugin, use a different browser or use a private session without plugins to confirm your login still works, and try isolate the issue before reaching out for help."),(0,r.kt)("h3",{id:"logs"},"Logs"),(0,r.kt)("p",null,"You can retrieve the logs of panel by running ",(0,r.kt)("inlineCode",{parentName:"p"},"sudo journalctl -u panel"),". The logs contain the output of the python application."),(0,r.kt)("h3",{id:"why-am-i-being-rate-limited"},"Why am I being rate-limited?"),(0,r.kt)("p",null,"As of October 31st, 2020, the swizzin panel now does rate limiting to reduce the ability of an unauthenticated attacker to brute force basic authentication passwords against the swizzin panel. This rate limiting should not be in effect for logged-in users. If you wish to disable this behavior, you can define ",(0,r.kt)("inlineCode",{parentName:"p"},"RATELIMIT_ENABLED = False")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"swizzin.cfg"),"."))}h.isMDXComponent=!0},9971:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return m},default:function(){return f}});var a=n(7462),i=n(3366),r=(n(7294),n(4137)),o=n(4297),s=n(8448),l=n(1462),p=["components"],d={},u=void 0,c={unversionedId:"snippets/systemdtabs",id:"snippets/systemdtabs",isDocsHomePage:!1,title:"systemdtabs",description:"<Tabs",source:"@site/docs/snippets/systemdtabs.mdx",sourceDirName:"snippets",slug:"/snippets/systemdtabs",permalink:"/snippets/systemdtabs",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/snippets/systemdtabs.mdx",version:"current",frontMatter:{}},m=[],h={toc:m};function f(e){var t=e.components,n=(0,i.Z)(e,p);return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"code"},(0,r.kt)(o.Z,{defaultValue:"start",values:[{label:"Status",value:"status"},{label:"Start",value:"start"},{label:"Stop",value:"stop"},{label:"Restart",value:"restart"},{label:"Enable",value:"enable"},{label:"Disable",value:"disable"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"status",mdxType:"TabItem"},(0,r.kt)(l.Z,{children:"sudo systemctl status "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,r.kt)(s.Z,{value:"start",mdxType:"TabItem"},(0,r.kt)(l.Z,{children:"sudo systemctl start "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,r.kt)(s.Z,{value:"stop",mdxType:"TabItem"},(0,r.kt)(l.Z,{children:"sudo systemctl stop "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,r.kt)(s.Z,{value:"restart",mdxType:"TabItem"},(0,r.kt)(l.Z,{children:"sudo systemctl restart "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,r.kt)(s.Z,{value:"enable",mdxType:"TabItem"},(0,r.kt)(l.Z,{children:"sudo systemctl enable "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,r.kt)(s.Z,{value:"disable",mdxType:"TabItem"},(0,r.kt)(l.Z,{children:"sudo systemctl disable "+n.service,className:"bash",mdxType:"CodeBlock"})))))}f.isMDXComponent=!0},1899:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return d},default:function(){return c}});var a=n(7462),i=n(3366),r=(n(7294),n(4137)),o=["components"],s={},l=void 0,p={unversionedId:"snippets/troubleshooting",id:"snippets/troubleshooting",isDocsHomePage:!1,title:"troubleshooting",description:"You can always also try the general troubleshooting tips written in our guide. They might or might not apply, but asking these questions can often make you understand what is under the hood better and help you find what needs to be fixed. It's always worth a shot!",source:"@site/docs/snippets/troubleshooting.md",sourceDirName:"snippets",slug:"/snippets/troubleshooting",permalink:"/snippets/troubleshooting",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/snippets/troubleshooting.md",version:"current",frontMatter:{}},d=[],u={toc:d};function c(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You can always also try the ",(0,r.kt)("a",{parentName:"p",href:"/guides/troubleshooting"},"general troubleshooting tips written in our guide"),". They might or might not apply, but asking these questions can often make you understand what is under the hood better and help you find what needs to be fixed. It's always worth a shot!"))))}c.isMDXComponent=!0}}]);