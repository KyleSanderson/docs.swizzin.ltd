"use strict";(self.webpackChunkswizzin_website=self.webpackChunkswizzin_website||[]).push([[8080,865],{6125:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return h}});var n=a(7462),i=a(3366),o=(a(7294),a(4137)),s=a(9733),l=a(9124),r=a(9353),u=["components"],p={id:"calibreweb",title:"Calibre-Web",sidebar_label:"Calibre-Web"},d=void 0,m={unversionedId:"applications/calibreweb",id:"applications/calibreweb",title:"Calibre-Web",description:"Calibre-web is a graphical web frontend for a Calibre Library with many very useful features, such as user management, on-the-fly conversion, Send-to-Kindle and Kobo Sync API.",source:"@site/docs/applications/calibreweb.mdx",sourceDirName:"applications",slug:"/applications/calibreweb",permalink:"/applications/calibreweb",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/applications/calibreweb.mdx",tags:[],version:"current",frontMatter:{id:"calibreweb",title:"Calibre-Web",sidebar_label:"Calibre-Web"},sidebar:"docs",previous:{title:"Airsonic",permalink:"/applications/airsonic"},next:{title:"Emby",permalink:"/applications/emby"}},c={},h=[{value:"Initial Setup",id:"initial-setup",level:2},{value:"Options",id:"options",level:3},{value:"Post-install",id:"post-install",level:2},{value:"User management",id:"user-management",level:2},{value:"Service management",id:"service-management",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Verbose output",id:"verbose-output",level:3}],b={toc:h};function k(e){var t=e.components,a=(0,i.Z)(e,u);return(0,o.kt)("wrapper",(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Calibre-web is a graphical web frontend for a Calibre Library with many very useful features, such as user management, on-the-fly conversion, Send-to-Kindle and Kobo Sync API."),(0,o.kt)("h2",{id:"initial-setup"},"Initial Setup"),(0,o.kt)("p",null,"Installing Calibre-web is easy. Simply issue the following command from SSH:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:"main",main:!0},"sudo box install calibreweb\n")),(0,o.kt)("p",null,"This command will configure and install Calibre-web."),(0,o.kt)("p",null,"You will then be able to access it through either ",(0,o.kt)("inlineCode",{parentName:"p"},"http://domain.tld/calibre")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"http://domain.tld:8083"),", depending on whether or not you have nginx installed."),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)(s.default,{mdxType:"InstallOptsWarning"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"CALIBRE_LIBRARY_USER"),":"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Default: The name of the master user"),(0,o.kt)("li",{parentName:"ul"},"Adds the dedicated calibre-web user to the group of this user"),(0,o.kt)("li",{parentName:"ul"},"Used to infer possible calibre library path if not specified (see below)"),(0,o.kt)("li",{parentName:"ul"},"Calibre-web's admin password will be set to the value of this user's password"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"CALIBRE_LIBRARY_PATH"),":"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Default",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"If exists, then: ",(0,o.kt)("inlineCode",{parentName:"li"},"/home/$CALIBRE_LIBRARY_USER/Calibre Library")),(0,o.kt)("li",{parentName:"ul"},"Otherwise unset, which will skip the library setup and password change procedure"))),(0,o.kt)("li",{parentName:"ul"},"Used to set up the calibre-web basic setup")))),(0,o.kt)("h2",{id:"post-install"},"Post-install"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("em",{parentName:"li"},"*")," Link to your instance of the Calibre Library folder",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"* Note: swizzin should do this for you during install in most cases. You should be told in the output if you need to do this")),(0,o.kt)("li",{parentName:"ul"},"For example ",(0,o.kt)("inlineCode",{parentName:"li"},"/home/masteruser/Calibre Library")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Note:")," If you installed calibre through swizzin, this step will be done for you"),(0,o.kt)("li",{parentName:"ul"},"If you would like to add your existing library, you will need to give the ",(0,o.kt)("inlineCode",{parentName:"li"},"calibreweb")," system user access to your library with these commands:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Replace $theuser with the name of the user which has the library files\nsudo usermod -a -G $theuser calibreweb\nsudo chmod 750 -R /home/$theuser\nsudo chmod 770 /home/$theuser/path/to/library\nsystemctl restart calibre-web\n"))))))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("em",{parentName:"li"},"*")," Change the password of the admin user ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"* Note: swizzin should do this for you during install in most cases. You should be told in the output if you need to do this")),(0,o.kt)("li",{parentName:"ul"},"Log in to calibre using ",(0,o.kt)("inlineCode",{parentName:"li"},"admin"),":",(0,o.kt)("inlineCode",{parentName:"li"},"admin123")),(0,o.kt)("li",{parentName:"ul"},"Go to ",(0,o.kt)("inlineCode",{parentName:"li"},"http://<domain>/calibre/me")," and change the password there.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"You might need to fill in an email address for this action to work"))))),(0,o.kt)("li",{parentName:"ol"},"Change the name of the admin user",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Log in to calibre using ",(0,o.kt)("inlineCode",{parentName:"li"},"admin"),":",(0,o.kt)("inlineCode",{parentName:"li"},"<your password>")),(0,o.kt)("li",{parentName:"ul"},"Go to ",(0,o.kt)("inlineCode",{parentName:"li"},"http://<domain>/calibre/me")," and change the details there",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"You might need to fill in an email address for this action to work"))))),(0,o.kt)("li",{parentName:"ol"},"Link or install necessary binaries",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Go to ",(0,o.kt)("inlineCode",{parentName:"li"},"https://<domain>/calibre-web/admin/config"),' and open the "External binaries" section at the bottom'),(0,o.kt)("li",{parentName:"ul"},"Calibre e-book converter should be in ",(0,o.kt)("strong",{parentName:"li"},"either")," of these paths",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/usr/bin/ebook-convert")," (if installed via apt)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/opt/calibre/ebook-convert")," (if installed through calibre installer)"))),(0,o.kt)("li",{parentName:"ul"},"Kepubify is installed in ",(0,o.kt)("inlineCode",{parentName:"li"},"/usr/local/bin/kepubify")),(0,o.kt)("li",{parentName:"ul"},"If you have ",(0,o.kt)("inlineCode",{parentName:"li"},"unrar")," installed (",(0,o.kt)("inlineCode",{parentName:"li"},"apt install unrar"),"), it will be in ",(0,o.kt)("inlineCode",{parentName:"li"},"/usr/local/bin/kepubify")))),(0,o.kt)("li",{parentName:"ol"},"Set up SMTP",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Get an SMTP gate and credentials"),(0,o.kt)("li",{parentName:"ul"},"External guide goes here"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Optional:")," configure the direct Google Drive support",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Please check ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/janeczku/calibre-web/wiki/Configuration#using-google-drive-integration"},"this article")," for the appropriate steps"),(0,o.kt)("li",{parentName:"ul"},"You only need to do this when you want to keep your entire library in google drive, not if you're using rclone etc.")))),(0,o.kt)("h2",{id:"user-management"},"User management"),(0,o.kt)("p",null,"Calibre-web has its own internal user database ",(0,o.kt)("strong",{parentName:"p"},"which swizzin does not manage in any way"),". Please manage your users through the web interface."),(0,o.kt)("h2",{id:"service-management"},"Service management"),(0,o.kt)("p",null,"Calibre-web runs as its own single process with its own system user."),(0,o.kt)("p",null,"The systemd service for calibre-web resides here:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"/etc/systemd/system/calibre-web.service\n")),(0,o.kt)("p",null,"You can use the following commands to manage the service."),(0,o.kt)(l.default,{service:"calibre-web",mdxType:"SystemdTabs"}),(0,o.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)(r.default,{mdxType:"Troubleshooting"}),(0,o.kt)("p",null,"Please make sure to consult the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/janeczku/calibre-web/issues"},"issues")," of Calibre-web and the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/janeczku/calibre-web/wiki"},"expansive wiki of the project"),". "),(0,o.kt)("h3",{id:"verbose-output"},"Verbose output"),(0,o.kt)("p",null,"Calibre-web stores its logs in ",(0,o.kt)("inlineCode",{parentName:"p"},"/opt/calibre-web/calibre-web.log")," and optionally ",(0,o.kt)("inlineCode",{parentName:"p"},"/opt/calibre-web/access.log"),"."),(0,o.kt)("p",null,"You can increase the verbosity of the log level by going to ",(0,o.kt)("inlineCode",{parentName:"p"},"http://domain.tld/calibre/admin/config"),', opening the "Logfile Configuration" section and changing the level there.'))}k.isMDXComponent=!0},9733:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return r},default:function(){return c},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var n=a(7462),i=a(3366),o=(a(7294),a(4137)),s=["components"],l={},r=void 0,u={unversionedId:"snippets/installoptswarning",id:"snippets/installoptswarning",title:"installoptswarning",description:"None of these are required for you to define if you want an easy install. If you would like to do something custom, then here are some options for you.",source:"@site/docs/snippets/installoptswarning.md",sourceDirName:"snippets",slug:"/snippets/installoptswarning",permalink:"/snippets/installoptswarning",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/snippets/installoptswarning.md",tags:[],version:"current",frontMatter:{}},p={},d=[],m={toc:d};function c(e){var t=e.components,a=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"None of these are required for you to define if you want an easy install. If you would like to do something custom, then here are some options for you."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Make sure you know what you're doing!")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"Please note that it is difficult for us to support these options as they are custom for each install")),(0,o.kt)("p",{parentName:"div"},"None of the options are sanity-checked on install so setting something wrong could break your installation."),(0,o.kt)("p",{parentName:"div"},"Again, you do not need to set these if you don't know what you're doing."))),(0,o.kt)("p",null,"There are a couple options you can set ",(0,o.kt)("strong",{parentName:"p"},"before")," installing transmission through export. "),(0,o.kt)("p",null,"If you'd like to use one of these, run ",(0,o.kt)("inlineCode",{parentName:"p"},"export option=value")," ",(0,o.kt)("strong",{parentName:"p"},"before")," running the install command."))}c.isMDXComponent=!0},9124:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return h}});var n=a(7462),i=a(3366),o=(a(7294),a(4137)),s=a(5529),l=a(8448),r=a(2380),u=["components"],p={},d=void 0,m={unversionedId:"snippets/systemdtabs",id:"snippets/systemdtabs",title:"systemdtabs",description:"<Tabs",source:"@site/docs/snippets/systemdtabs.mdx",sourceDirName:"snippets",slug:"/snippets/systemdtabs",permalink:"/snippets/systemdtabs",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/snippets/systemdtabs.mdx",tags:[],version:"current",frontMatter:{}},c={},h=[],b={toc:h};function k(e){var t=e.components,a=(0,i.Z)(e,u);return(0,o.kt)("wrapper",(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"code"},(0,o.kt)(s.Z,{defaultValue:"start",values:[{label:"Status",value:"status"},{label:"Start",value:"start"},{label:"Stop",value:"stop"},{label:"Restart",value:"restart"},{label:"Enable",value:"enable"},{label:"Disable",value:"disable"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"status",mdxType:"TabItem"},(0,o.kt)(r.Z,{children:"sudo systemctl status "+a.service,className:"bash",mdxType:"CodeBlock"})),(0,o.kt)(l.Z,{value:"start",mdxType:"TabItem"},(0,o.kt)(r.Z,{children:"sudo systemctl start "+a.service,className:"bash",mdxType:"CodeBlock"})),(0,o.kt)(l.Z,{value:"stop",mdxType:"TabItem"},(0,o.kt)(r.Z,{children:"sudo systemctl stop "+a.service,className:"bash",mdxType:"CodeBlock"})),(0,o.kt)(l.Z,{value:"restart",mdxType:"TabItem"},(0,o.kt)(r.Z,{children:"sudo systemctl restart "+a.service,className:"bash",mdxType:"CodeBlock"})),(0,o.kt)(l.Z,{value:"enable",mdxType:"TabItem"},(0,o.kt)(r.Z,{children:"sudo systemctl enable "+a.service,className:"bash",mdxType:"CodeBlock"})),(0,o.kt)(l.Z,{value:"disable",mdxType:"TabItem"},(0,o.kt)(r.Z,{children:"sudo systemctl disable "+a.service,className:"bash",mdxType:"CodeBlock"})))))}k.isMDXComponent=!0},9353:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return r},default:function(){return c},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var n=a(7462),i=a(3366),o=(a(7294),a(4137)),s=["components"],l={},r=void 0,u={unversionedId:"snippets/troubleshooting",id:"snippets/troubleshooting",title:"troubleshooting",description:"You can always also try the general troubleshooting tips written in our guide. They might or might not apply, but asking these questions can often make you understand what is under the hood better and help you find what needs to be fixed. It's always worth a shot!",source:"@site/docs/snippets/troubleshooting.md",sourceDirName:"snippets",slug:"/snippets/troubleshooting",permalink:"/snippets/troubleshooting",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/snippets/troubleshooting.md",tags:[],version:"current",frontMatter:{}},p={},d=[],m={toc:d};function c(e){var t=e.components,a=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You can always also try the ",(0,o.kt)("a",{parentName:"p",href:"/guides/troubleshooting"},"general troubleshooting tips written in our guide"),". They might or might not apply, but asking these questions can often make you understand what is under the hood better and help you find what needs to be fixed. It's always worth a shot!"))))}c.isMDXComponent=!0}}]);