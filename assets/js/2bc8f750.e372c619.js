(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(3),i=n(8),l=(n(0),n(161)),r={id:"advanced-setup",title:"Setting up swizzin with advanced options",sidebar_label:"Advanced Setup"},o={unversionedId:"guides/advanced-setup",id:"guides/advanced-setup",isDocsHomePage:!1,title:"Setting up swizzin with advanced options",description:"Below are the many ways you can use the installer to get exactly toi where you need to be, fast.",source:"@site/docs/guides/advanced-setup.md",sourceDirName:"guides",slug:"/guides/advanced-setup",permalink:"/guides/advanced-setup",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/guides/advanced-setup.md",version:"current",sidebar_label:"Advanced Setup",frontMatter:{id:"advanced-setup",title:"Setting up swizzin with advanced options",sidebar_label:"Advanced Setup"},sidebar:"docs",previous:{title:"Troubleshooting 101",permalink:"/guides/troubleshooting"},next:{title:"Migrating swizzin installations across servers",permalink:"/guides/migrating"}},s=[{value:"Options",id:"options",children:[{value:"<code>--unattend</code>",id:"--unattend",children:[]},{value:"<code>--user</code>",id:"--user",children:[]},{value:"<code>--pass</code>",id:"--pass",children:[]},{value:"<code>--domain</code>",id:"--domain",children:[]},{value:"<code>--local</code>",id:"--local",children:[]},{value:"<code>--env</code>",id:"--env",children:[]},{value:"<code>--post-command</code>",id:"--post-command",children:[]},{value:"<code>--run-checks</code>",id:"--run-checks",children:[]},{value:"<code>[package(s)]</code>",id:"packages",children:[]},{value:"Environment variables",id:"environment-variables",children:[]}]},{value:"Env file",id:"env-file",children:[]},{value:"Examples",id:"examples",children:[]}],c={toc:s};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Below are the many ways you can use the installer to get exactly toi where you need to be, fast."),Object(l.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Note")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("p",{parentName:"div"},"Not all the code such as package installers has been modified yet to be compatible with the unattended setup and environment variable importing."),Object(l.b)("p",{parentName:"div"},"If you find some application that is breaking the unattended setup or has no Install options, please raise a ",Object(l.b)("a",{parentName:"p",href:"https://github.com/liaralabs/swizzin/issues/new/choose"},"GitHub issue"),"."))),Object(l.b)("h2",{id:"options"},"Options"),Object(l.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("p",{parentName:"div"},"Please note that none of the values that you set here are checked for validity or comaptibility. Make sure you programatically check them before. Setting wrong values here could break your system."))),Object(l.b)("h3",{id:"--unattend"},Object(l.b)("inlineCode",{parentName:"h3"},"--unattend")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Disables interactive queries within the ",Object(l.b)("inlineCode",{parentName:"li"},"setup.sh")," script such as the greeting and installation applications queries."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Does not disable interactive queries within package installers"),", as those are disabled based on whether environment variables are set.",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"If you find some interactive elements you can't seem to work around, please open an issue on github.")))),Object(l.b)("h3",{id:"--user"},Object(l.b)("inlineCode",{parentName:"h3"},"--user")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Takes the ",Object(l.b)("inlineCode",{parentName:"li"},"username")," of the master user for swizzin to create as positional argument (i.e. ",Object(l.b)("inlineCode",{parentName:"li"},"--user masteruser"),")"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("em",{parentName:"li"},"Setting this flag will disable the greeting popup during installation"))),Object(l.b)("h3",{id:"--pass"},Object(l.b)("inlineCode",{parentName:"h3"},"--pass")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Takes the ",Object(l.b)("inlineCode",{parentName:"li"},"password")," of the master user for siwzzin to create as positional argument (i.e. ",Object(l.b)("inlineCode",{parentName:"li"},"--pass 'P@55w0rd'"),")"),Object(l.b)("li",{parentName:"ul"},"To generate a random password, use ",Object(l.b)("inlineCode",{parentName:"li"},'--pass ""')),Object(l.b)("li",{parentName:"ul"},"Shell variables will expand when not in single quotes!"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("em",{parentName:"li"},"Setting this flag will disable the greeting popup during installation")),Object(l.b)("li",{parentName:"ul"},"Same as ",Object(l.b)("inlineCode",{parentName:"li"},"--password"))),Object(l.b)("h3",{id:"--domain"},Object(l.b)("inlineCode",{parentName:"h3"},"--domain")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Takes ",Object(l.b)("inlineCode",{parentName:"li"},"domain")," as positional argument (i.e. ",Object(l.b)("inlineCode",{parentName:"li"},"--domain domain.tld"),")"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("em",{parentName:"li"},"In the event")," ",Object(l.b)("inlineCode",{parentName:"li"},"letsencrypt")," is being installed, this will set the domain against which to verify, enable the certificate in the default ",Object(l.b)("inlineCode",{parentName:"li"},"nginx")," config, and skip cloudflare integration",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Shorthand for ",Object(l.b)("inlineCode",{parentName:"li"},"LE_hostname=domain.tld"),", ",Object(l.b)("inlineCode",{parentName:"li"},"LE_defaultconf=yes")," and ",Object(l.b)("inlineCode",{parentName:"li"},"LF_bool_cf=no")," as described in the ",Object(l.b)("a",{parentName:"li",href:"/applications/letsencrypt#install-options"},"Letsencrypt install options"),". If you need something else, check the ",Object(l.b)("a",{parentName:"li",href:"#--env"},Object(l.b)("inlineCode",{parentName:"a"},"--env"))," or ",Object(l.b)("a",{parentName:"li",href:"#environment-variables"},"environment variables")," options."))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Please note:")," This does not imply that ",Object(l.b)("inlineCode",{parentName:"li"},"nginx")," and ",Object(l.b)("inlineCode",{parentName:"li"},"letsencrypt")," will be installed, you still have to pass those as packages to install in order for this to apply.")),Object(l.b)("h3",{id:"--local"},Object(l.b)("inlineCode",{parentName:"h3"},"--local")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Instead of cloning the repository to ",Object(l.b)("inlineCode",{parentName:"li"},"/etc/swizzin/"),", it will link the folder where ",Object(l.b)("inlineCode",{parentName:"li"},"setup.sh")," is located to ",Object(l.b)("inlineCode",{parentName:"li"},"/etc/swizzin"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Note:")," If you (re)move the folder where ",Object(l.b)("inlineCode",{parentName:"li"},"setup.sh")," was sitting, the link will break, and so will your ",Object(l.b)("inlineCode",{parentName:"li"},"box")," commands etc.")),Object(l.b)("h3",{id:"--env"},Object(l.b)("inlineCode",{parentName:"h3"},"--env")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Takes a path to file as positional argument (e.g. ",Object(l.b)("inlineCode",{parentName:"li"},"--env /path/to/env/file.env"),")"),Object(l.b)("li",{parentName:"ul"},"Ingests variables and settings from a file for use later through the installer.Please see the ",Object(l.b)("a",{parentName:"li",href:"#env-file"},"Env File")," Chapter below"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("em",{parentName:"li"},"Using this implies using ",Object(l.b)("a",{parentName:"em",href:"#--unattend"},Object(l.b)("inlineCode",{parentName:"a"},"--unattend")))),Object(l.b)("li",{parentName:"ul"},"If ",Object(l.b)("inlineCode",{parentName:"li"},"--env")," is specified after other arguments, contents of env file will override the arguments. If arguments are specified after the ",Object(l.b)("inlineCode",{parentName:"li"},"--env file"),", they will override the content of the env file.",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"if you do ",Object(l.b)("inlineCode",{parentName:"li"},"bash setup.sh --env /path/to/file.env --user otheruser"),", all of the env file contents will be ingested, and then the user will be overridden to ",Object(l.b)("inlineCode",{parentName:"li"},"otheruser")),Object(l.b)("li",{parentName:"ul"},"The only exception to this are the packages specified on the CLI. If they are specified after the ",Object(l.b)("inlineCode",{parentName:"li"},"--env"),", they will get added to the list.")))),Object(l.b)("h3",{id:"--post-command"},Object(l.b)("inlineCode",{parentName:"h3"},"--post-command")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Takes a string variable with commands to execute at the end of the installation script")),Object(l.b)("h3",{id:"--run-checks"},Object(l.b)("inlineCode",{parentName:"h3"},"--run-checks")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"When set, checks defined in installers will be ran to confirm a succesful install. The output will be printed into stdout.")),Object(l.b)("h3",{id:"packages"},Object(l.b)("inlineCode",{parentName:"h3"},"[package(s)]")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Any other arguments are treated as a name of a swizzin package to install."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"The order of packages matters"),", if a package requires another as a dependency and its absence would make an installer fail, make sure to put the dependency first",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"e.g. when installing ",Object(l.b)("inlineCode",{parentName:"li"},"ruTorrent"),", you need to ensure that both ",Object(l.b)("inlineCode",{parentName:"li"},"nginx")," and ",Object(l.b)("inlineCode",{parentName:"li"},"rtorrent")," come before ",Object(l.b)("inlineCode",{parentName:"li"},"rutorrent"),", as the installation of that package will fail."))),Object(l.b)("li",{parentName:"ul"},"If any package is specified, the application installation picker will be skipped during the installation"),Object(l.b)("li",{parentName:"ul"},"If you want no packages to be installed, make sure to specify ",Object(l.b)("a",{parentName:"li",href:"#--unattend"},"the ",Object(l.b)("inlineCode",{parentName:"a"},"--unattend")," flag"))),Object(l.b)("h3",{id:"environment-variables"},"Environment variables"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"You can pass environment variables to the script either through...",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"export")," within your shell before running ",Object(l.b)("inlineCode",{parentName:"li"},"bash setup.sh")),Object(l.b)("li",{parentName:"ul"},"you can use something like ",Object(l.b)("inlineCode",{parentName:"li"},"var1=value var2=value bash setup.sh")))),Object(l.b)("li",{parentName:"ul"},"Same options are available as are for the ",Object(l.b)("a",{parentName:"li",href:"#env-file"},"env file"),".")),Object(l.b)("h2",{id:"env-file"},"Env file"),Object(l.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("p",{parentName:"div"},"Please note that none of the values that you set here are checked for validity or comaptibility. Please test your env file thoroughly before deployment."))),Object(l.b)("p",null,"You can use a file with recorded variables for ",Object(l.b)("inlineCode",{parentName:"p"},"setup.sh")," to use, instead of using the CLI arguments/variables. Please ",Object(l.b)("a",{parentName:"p",href:"#--env"},"see the ",Object(l.b)("inlineCode",{parentName:"a"},"--env")," option in the chapter above"),"."),Object(l.b)("p",null,"An example file is included in the root of the swizzin git repo."),Object(l.b)("p",null,'If a package has an "Install Options" chapter, you can specify those values in this file. Please note that these options can change over time. An example of these can be found ',Object(l.b)("a",{parentName:"p",href:"/applications/letsencrypt#install-options"},"here"),", or in the source code. "),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Please take these precauttions into account"),":"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Some variables gett exported, some only sourced",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Variables starting with ",Object(l.b)("strong",{parentName:"li"},"caps")," (",Object(l.b)("inlineCode",{parentName:"li"},"[A-Z]"),") will get ",Object(l.b)("inlineCode",{parentName:"li"},"export"),"ed"),Object(l.b)("li",{parentName:"ul"},"Variables starting with ",Object(l.b)("strong",{parentName:"li"},"miniscules")," (",Object(l.b)("inlineCode",{parentName:"li"},"[a-z]"),") will get ",Object(l.b)("inlineCode",{parentName:"li"},"source"),"d"),Object(l.b)("li",{parentName:"ul"},"Please make sure to read the env file example in the repo, and the docs of the application you intend to configure"))),Object(l.b)("li",{parentName:"ul"},"You cannot set the option to make a local install in an env file, you will need to append ",Object(l.b)("a",{parentName:"li",href:"#--local"},Object(l.b)("inlineCode",{parentName:"a"},"--local"))," on the command line.")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},'# SETUP.SH OPTIONS\n## master user setup\nuser=test\npass=test123\n## symlink local swizzin folder to /etc/swizzin/ instead of cloning from upstream\nlocal=true\n## packages to install separated by colons.\n## **The order of packages matters**, if a package requires another as a dependency and its absence would make an installer fail, make sure to put the dependency first\npackages=nginx:panel:transmission:letsencrypt\n# PACKAGE SPECIFIC OPTIONS\n## LetsEncrypt options ((https://docs.swizzin.ltd/applications/letsencrypt#install-options))\nLE_hostname="domain.tld"\nLE_defaultconf=yes\n# LE_bool_cf=no if you don\'t want to use any cloudflare\nLE_cf_api=aaapppiiiikkkeeeeeyyyyyyyy\nLE_cf_email="email@blach.lol"\nLE_cf_zone="some.zone.asdasdasdasd" # or LE_cf_zoneexists=yes if you don\'t need it created\n')),Object(l.b)("h2",{id:"examples"},"Examples"),Object(l.b)("p",null,"A fully automated install with everything in an env file, and user and password which override the env file"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"bash <(wget -qO - git.io/swizzin) \\\n--env /path/to/file.env --user tester --pass tester123\n")),Object(l.b)("p",null,"Quickly get a local environment with a user installed, using your local fork clone instead of upstream, and no apps installed"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"git clone <your fork>\nbash /path/to/swizzin/setup.sh --user tester --pass tester123 --local --unattend\n")),Object(l.b)("p",null,"Get a quick transmission installation"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},'arg_transmissionsource="Repo" \\\nbash <(wget -qO - git.io/swizzin) \\\n--user tester --pass tester123 transmission\n')),Object(l.b)("p",null,"Get the Dan Martini(TM) (A username, password, domain, nginx and letsencrypt only. Shaken, not interrupted)"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"bash <(wget -qO - git.io/swizzin) \\\n--unattend --user tester --pass tester123 --domain testing.com nginx letsencrypt\n")),Object(l.b)("p",null,"The sausage multipass developer menu (this definitely is not me just saving my command recipe for later)"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-powershell"},"multipass delete --all --purge; multipass launch -n swiz; \\\nmultipass mount .\\Git\\Fun\\swizzin\\ swiz:/home/ubuntu/swizzin; \\\nmultipass exec swiz -- sudo -H su -c 'bash /home/ubuntu/swizzin/setup.sh --unattend --local --user test --pass tester123'\n")))}b.isMDXComponent=!0},161:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),b=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=b(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,r=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=b(n),u=a,m=p["".concat(r,".").concat(u)]||p[u]||d[u]||l;return n?i.a.createElement(m,o(o({ref:t},c),{},{components:n})):i.a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var c=2;c<l;c++)r[c]=n[c];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);