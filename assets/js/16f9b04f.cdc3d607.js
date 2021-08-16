"use strict";(self.webpackChunkswizzin_website=self.webpackChunkswizzin_website||[]).push([[2556],{4137:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5786:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var a=n(7462),i=n(3366),r=(n(7294),n(4137)),o=["components"],l={id:"letsencrypt",title:"Letsencrypt",sidebar_label:"Letsencrypt"},s=void 0,u={unversionedId:"applications/letsencrypt",id:"applications/letsencrypt",isDocsHomePage:!1,title:"Letsencrypt",description:"SSL certificates made easy via the script acme.sh",source:"@site/docs/applications/letsencrypt.mdx",sourceDirName:"applications",slug:"/applications/letsencrypt",permalink:"/applications/letsencrypt",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/applications/letsencrypt.mdx",version:"current",frontMatter:{id:"letsencrypt",title:"Letsencrypt",sidebar_label:"Letsencrypt"},sidebar:"docs",previous:{title:"Librespeed",permalink:"/applications/librespeed"},next:{title:"Netdata",permalink:"/applications/netdata"}},p=[{value:"Installation",id:"installation",children:[{value:"Before Install",id:"before-install",children:[]},{value:"Setting up Let&#39;s Encrypt",id:"setting-up-lets-encrypt",children:[]},{value:"Install options",id:"install-options",children:[]}]},{value:"Renewals",id:"renewals",children:[]},{value:"Changing domains (or adding secondaries)",id:"changing-domains-or-adding-secondaries",children:[]},{value:"Certificate and Install Locations",id:"certificate-and-install-locations",children:[]}],c={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"SSL certificates made easy via the script ",(0,r.kt)("inlineCode",{parentName:"p"},"acme.sh")),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("h3",{id:"before-install"},"Before Install"),(0,r.kt)("p",null,"Setting up your server with a Let's Encrypt certificate is easy, though it does require a couple steps. We use the helper script ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/neilpang/acme.sh"},"acme.sh")," for domain verification and easy renewals."),(0,r.kt)("p",null,"First, you must have your own domain or a subdomain already pointed at the IP address of your server. (An ",(0,r.kt)("inlineCode",{parentName:"p"},"A Record"),")."),(0,r.kt)("p",null,"If you need a domain name, there are plenty of registrars, here are two that I personally use ",(0,r.kt)("a",{parentName:"p",href:"https://namecheap.com"},"Namecheap"),"; however, if you already own your domain, you can consider transferring it to ",(0,r.kt)("a",{parentName:"p",href:"https://www.cloudflare.com/products/registrar/"},"CloudFlare")," to potentially save money."),(0,r.kt)("p",null,"If you are using the CloudFlare DNS option, you can use the DNS Verification method rather than the web-root verification method -- this method is a bit more resilient and less prone to future issues than the web-root error as domain verification doesn't take place on your server. If you have a CloudFlare proxy in front of your server (for instance), there can sometimes be issues with renewal which will cause it to fail. The DNS Verification should not fail where the web-root does."),(0,r.kt)("p",null,"If you'd like to use DNS verification for your CloudFlare domain, make sure you grab your API Key from your CloudFlare Profile (",(0,r.kt)("inlineCode",{parentName:"p"},"Profile > API Tokens > View Global API Key"),")."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Make sure you keep your API Key safe -- it's ",(0,r.kt)("strong",{parentName:"p"},"as good as")," your password in terms of modifying the settings on your account."))),(0,r.kt)("h3",{id:"setting-up-lets-encrypt"},"Setting up Let's Encrypt"),(0,r.kt)("p",null,"In order to start issuing a certificate use the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo box install letsencrypt\n")),(0,r.kt)("p",null,"A dialog box will pop up and ask you the domain you'd like to secure with LE:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Enter domain name to secure with LE\ndocs.swizzin.ltd\n")),(0,r.kt)("p",null,"And press enter. You'll be asked if you want to use this domain for your default site. If you say yes, the ",(0,r.kt)("inlineCode",{parentName:"p"},"server_name")," variable in the default nginx configuration will be updated with the provided domain. If you say no, the script will issue a certificate, but not apply it."),(0,r.kt)("p",null,'You\'ll be asked if you want to use CloudFlare. If you choose "No", the installer will continue with the web-root (.well-known) domain verification. If you choose "Yes", you\'ll be asked for your CloudFlare email and API Key (don\'t worry, this will never leave your server -- the key is stored in ',(0,r.kt)("inlineCode",{parentName:"p"},"/root/.acme.sh/account.conf")," for future renewals). After entering these details, the issuing will continue."),(0,r.kt)("p",null,"If everything goes well, acme.sh should declare success. If you reload your site, you should now be greeted by a valid SSL certificate, rather than a warning about invalid SSL."),(0,r.kt)("h3",{id:"install-options"},"Install options"),(0,r.kt)("p",null,"You can set these variables before running the script to skip the interactive questions. You can also use this in the Advanced setup."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Please note that we did not have a chance to test these values extremely thoroughly, let us know if something is not functioning as expected hen using these")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LE_hostname"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"domain.tld")),(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"Interactive")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LE_defaultconf"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Whether or not to install the cert into nginx's ",(0,r.kt)("inlineCode",{parentName:"li"},"default.conf")),(0,r.kt)("li",{parentName:"ul"},"Options: ",(0,r.kt)("inlineCode",{parentName:"li"},"yes")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"no")),(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"Interactive")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LE_bool_cf"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Used to specify whether or not to enable the CloudFlare portion of the script"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Note")," setting other ",(0,r.kt)("inlineCode",{parentName:"li"},"cf")," options mentioned below sets this to ",(0,r.kt)("inlineCode",{parentName:"li"},"yes"),". Set this to ",(0,r.kt)("inlineCode",{parentName:"li"},"no")," if you want to skip the cloudflare questions."),(0,r.kt)("li",{parentName:"ul"},"Options: ",(0,r.kt)("inlineCode",{parentName:"li"},"yes")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"no")),(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"Interactive")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LE_cf_email"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"Interactive")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LE_cf_api"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"Interactive")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LE_cf_zoneexists"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Note")," setting  ",(0,r.kt)("inlineCode",{parentName:"li"},"LE_cf_zone")," option implies this to ",(0,r.kt)("inlineCode",{parentName:"li"},"no"),". Set this to ",(0,r.kt)("inlineCode",{parentName:"li"},"yes")," if your zone already exists."),(0,r.kt)("li",{parentName:"ul"},"Options: ",(0,r.kt)("inlineCode",{parentName:"li"},"yes")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"no")),(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"Interactive")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LE_cf_zone"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"Interactive"))))),(0,r.kt)("h2",{id:"renewals"},"Renewals"),(0,r.kt)("p",null,"Renewals are handled automatically via the cronjob that acme.sh installs during the initial run. If your server is configured correctly, you shouldn't have to worry about future renewals."),(0,r.kt)("h2",{id:"changing-domains-or-adding-secondaries"},"Changing domains (or adding secondaries)"),(0,r.kt)("p",null,"If you decide you've outgrown your old domain or want to update your domain, simply run the script again with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo box install letsencrypt\n")),(0,r.kt)("p",null,"There are no lock files associated with the LE script, so it can be run as many times as you like to issue certificates for as many domains as you desire."),(0,r.kt)("h2",{id:"certificate-and-install-locations"},"Certificate and Install Locations"),(0,r.kt)("p",null,"By default, the configuration files for acme.sh reside in:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/root/.acme.sh\n")),(0,r.kt)("p",null,'This folder contains "account" information and domains currently configured via acme.sh.'),(0,r.kt)("p",null,'SSL certificates are "installed" into your nginx directory as well and this is the location you should use with your scripts when configuring where the certificates are located on your machine:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/etc/nginx/ssl/<hostname.ltd>\n")))}d.isMDXComponent=!0}}]);