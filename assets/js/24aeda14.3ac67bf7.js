"use strict";(self.webpackChunkswizzin_website=self.webpackChunkswizzin_website||[]).push([[4797,865],{4712:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return k}});var l=a(7462),n=a(3366),i=(a(7294),a(4137)),r=a(5529),o=a(8448),s=a(9124),m=["components"],p={id:"ombi",title:"Ombi",sidebar_label:"Ombi"},d=void 0,u={unversionedId:"applications/ombi",id:"applications/ombi",title:"Ombi",description:"Ombi is a self-hosted web application that automatically gives your shared Plex or Emby users the ability to request content by themselves! Ombi can be linked to multiple TV Show and Movie DVR tools to create a seamless end-to-end experience for your users.",source:"@site/docs/applications/ombi.mdx",sourceDirName:"applications",slug:"/applications/ombi",permalink:"/applications/ombi",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/applications/ombi.mdx",tags:[],version:"current",frontMatter:{id:"ombi",title:"Ombi",sidebar_label:"Ombi"},sidebar:"docs",previous:{title:"Mylar",permalink:"/applications/mylar"},next:{title:"Sickchill",permalink:"/applications/sickchill"}},c={},k=[{value:"Initial Setup",id:"initial-setup",level:2},{value:"Upgrading",id:"upgrading",level:2},{value:"Upgrading from v3 to v4",id:"upgrading-from-v3-to-v4",level:3},{value:"How to Access",id:"how-to-access",level:2},{value:"Connecting to other apps",id:"connecting-to-other-apps",level:2},{value:"Service Management",id:"service-management",level:2}],b={toc:k};function h(e){var t=e.components,a=(0,n.Z)(e,m);return(0,i.kt)("wrapper",(0,l.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Ombi is a self-hosted web application that automatically gives your shared Plex or Emby users the ability to request content by themselves! Ombi can be linked to multiple TV Show and Movie DVR tools to create a seamless end-to-end experience for your users. "),(0,i.kt)("h2",{id:"initial-setup"},"Initial Setup"),(0,i.kt)("p",null,"Installing Ombi is easy. Simply issue the following command from SSH:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"main",main:!0},"sudo box install ombi\n")),(0,i.kt)("p",null,"This command will configure and install ombi for your user."),(0,i.kt)("p",null,"After installation, the files are stored in ",(0,i.kt)("inlineCode",{parentName:"p"},"/opt/Ombi")," and the configuration and database are stored in ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/Ombi")),(0,i.kt)("h2",{id:"upgrading"},"Upgrading"),(0,i.kt)("p",null,"Ombi v4 is installed and updated from the official stable repository. In order to keep ombi up-to-date, update your packages with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt -y update\nsudo apt -y upgrade\n")),(0,i.kt)("h3",{id:"upgrading-from-v3-to-v4"},"Upgrading from v3 to v4"),(0,i.kt)("p",null,"If you previously had ombi v3 installed, you can upgrade to v4 using the following command."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"box upgrade ombi\n")),(0,i.kt)("p",null,"When you've upgraded to v4, you can keep your application up to date with the steps mentioned in the ",(0,i.kt)("a",{parentName:"p",href:"#upgrading"},"upgrading")," chapter above."),(0,i.kt)("h2",{id:"how-to-access"},"How to Access"),(0,i.kt)("p",null,"After installation, Ombi will be available at the following web address: ",(0,i.kt)("inlineCode",{parentName:"p"},"https://<hostname.ltd>/ombi")),(0,i.kt)("h2",{id:"connecting-to-other-apps"},"Connecting to other apps"),(0,i.kt)("p",null,"If you would like to connect ombi to other applications you installed with swizzin, please follow the guides below."),(0,i.kt)(r.Z,{defaultValue:"plex",values:[{label:"Plex",value:"plex"},{label:"Emby/Jellyfin",value:"embyfin"},{label:"Sonarr",value:"sonarr"},{label:"Radarr",value:"radarr"},{label:"Lidarr",value:"lidarr"},{label:"SickRage",value:"sickrage"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"plex",mdxType:"TabItem"},(0,i.kt)("p",null,"  Go to ",(0,i.kt)("strong",{parentName:"p"},"Settings")," -> ",(0,i.kt)("strong",{parentName:"p"},"Media Server")," -> ",(0,i.kt)("strong",{parentName:"p"},"Plex")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},'Click on "Add Server"'),(0,i.kt)("li",{parentName:"ol"},"Connect your server through either one of the two",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Plex tokens (easier)",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Fill in your password ans username"),(0,i.kt)("li",{parentName:"ol"},'Press "Load Servers"'),(0,i.kt)("li",{parentName:"ol"},"Select your Plex server"))),(0,i.kt)("li",{parentName:"ul"},"Manually",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Hostname: ",(0,i.kt)("inlineCode",{parentName:"li"},"localhost")),(0,i.kt)("li",{parentName:"ul"},"Port: ",(0,i.kt)("inlineCode",{parentName:"li"},"32400")),(0,i.kt)("li",{parentName:"ul"},"SSL: ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"OFF"))),(0,i.kt)("li",{parentName:"ul"},"Plex auth token: ",(0,i.kt)("a",{parentName:"li",href:"https://support.plex.tv/articles/204059436-finding-an-authentication-token-x-plex-token/"},"Use guide here")),(0,i.kt)("li",{parentName:"ul"},"Machine identifier: ",(0,i.kt)("a",{parentName:"li",href:"https://forums.plex.tv/t/extract-machine-id-from-database-due-missing-preferences-xml/520080/3"},"Use guide here")))))),(0,i.kt)("li",{parentName:"ol"},'Press "Test Connectivity"'),(0,i.kt)("li",{parentName:"ol"},'Press "Submit"'),(0,i.kt)("li",{parentName:"ol"},"Load your libraries and select which ones to track"),(0,i.kt)("li",{parentName:"ol"},'Press "Submit"  '))),(0,i.kt)(o.Z,{value:"sonarr",mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Fill in the following fields:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Sonarr Hostname/IP = ",(0,i.kt)("inlineCode",{parentName:"li"},"localhost")),(0,i.kt)("li",{parentName:"ul"},"Port: ",(0,i.kt)("inlineCode",{parentName:"li"},"8989")),(0,i.kt)("li",{parentName:"ul"},"API Key: Retrieve from Sonarr -> Settings -> General and copy the API Key value"),(0,i.kt)("li",{parentName:"ul"},"SSL: ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"OFF"))),(0,i.kt)("li",{parentName:"ul"},"Sonarr base URL: ",(0,i.kt)("inlineCode",{parentName:"li"},"/sonarr/")))),(0,i.kt)("li",{parentName:"ol"},"Test the connection"),(0,i.kt)("li",{parentName:"ol"},'Press "Submit"'),(0,i.kt)("li",{parentName:"ol"},"Load and choose qualities"),(0,i.kt)("li",{parentName:"ol"},"Load and choose root folder (must already exist)"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("em",{parentName:"li"},"(if on Sonarr v3)")," Load and choose languages"))),(0,i.kt)(o.Z,{value:"radarr",mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Fill in the following fields:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Radarr Hostname/IP = ",(0,i.kt)("inlineCode",{parentName:"li"},"localhost")),(0,i.kt)("li",{parentName:"ul"},"Port: ",(0,i.kt)("inlineCode",{parentName:"li"},"7878")),(0,i.kt)("li",{parentName:"ul"},"API Key: Retrieve from Radarr -> Settings -> General and copy the API Key value"),(0,i.kt)("li",{parentName:"ul"},"SSL: ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"OFF"))),(0,i.kt)("li",{parentName:"ul"},"Radarr base URL: ",(0,i.kt)("inlineCode",{parentName:"li"},"/Radarr/")))),(0,i.kt)("li",{parentName:"ol"},"Test the connection"),(0,i.kt)("li",{parentName:"ol"},'Press "Submit"'),(0,i.kt)("li",{parentName:"ol"},"Load and choose qualities"),(0,i.kt)("li",{parentName:"ol"},"Load and choose root folder (must already exist)"))),(0,i.kt)(o.Z,{value:"lidarr",mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Fill in the following fields:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Lidarr Hostname/IP = ",(0,i.kt)("inlineCode",{parentName:"li"},"localhost")),(0,i.kt)("li",{parentName:"ul"},"Port: ",(0,i.kt)("inlineCode",{parentName:"li"},"8686")),(0,i.kt)("li",{parentName:"ul"},"API Key: Retrieve from Lidarr -> Settings -> General and copy the API Key value"),(0,i.kt)("li",{parentName:"ul"},"SSL: ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"OFF"))),(0,i.kt)("li",{parentName:"ul"},"Lidarr base URL: ",(0,i.kt)("inlineCode",{parentName:"li"},"/lidarr/")))),(0,i.kt)("li",{parentName:"ol"},"Test the connection"),(0,i.kt)("li",{parentName:"ol"},'Press "Submit"'),(0,i.kt)("li",{parentName:"ol"},"Load and choose qualities"),(0,i.kt)("li",{parentName:"ol"},"Load and choose root folder (must already exist)"))),(0,i.kt)(o.Z,{value:"sickrage",mdxType:"TabItem"},(0,i.kt)("p",null,"  ",(0,i.kt)("strong",{parentName:"p"},"No instructions yet!")," Please let us know if you set this up correctly so we can add the values, or PR these in. thanks!")),(0,i.kt)(o.Z,{value:"embyfin",mdxType:"TabItem"},(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Hostname/IP: ",(0,i.kt)("inlineCode",{parentName:"li"},"localhost")),(0,i.kt)("li",{parentName:"ul"},"Port: ",(0,i.kt)("inlineCode",{parentName:"li"},"8096")),(0,i.kt)("li",{parentName:"ul"},"SSL: ",(0,i.kt)("inlineCode",{parentName:"li"},"Off")),(0,i.kt)("li",{parentName:"ul"},"API Key: ",(0,i.kt)("em",{parentName:"li"},"(Retrieve from Jellyfin -> Dashbaord -> Advanced -> API Keys)")),(0,i.kt)("li",{parentName:"ul"},"Externally facing hostname: ",(0,i.kt)("em",{parentName:"li"},"(Your server domain/IP)")),(0,i.kt)("li",{parentName:"ul"},"Server ID: ",(0,i.kt)("em",{parentName:"li"},"(Retrieve from Jellyfin -> Discover server information)"))))),(0,i.kt)("h2",{id:"service-management"},"Service Management"),(0,i.kt)("p",null,"The systemd service for Ombi is not enabled for use in a multi-user environment, and it comes directly from the package itself."),(0,i.kt)("p",null,"In order for ombi to play well in our environment, we supply a ",(0,i.kt)("inlineCode",{parentName:"p"},"systemd")," override file located in the path below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/etc/systemd/system/ombi.service.d/override.conf\n")),(0,i.kt)(s.default,{service:"ombi",mdxType:"SystemdTabs"}))}h.isMDXComponent=!0},9124:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return k}});var l=a(7462),n=a(3366),i=(a(7294),a(4137)),r=a(5529),o=a(8448),s=a(2380),m=["components"],p={},d=void 0,u={unversionedId:"snippets/systemdtabs",id:"snippets/systemdtabs",title:"systemdtabs",description:"<Tabs",source:"@site/docs/snippets/systemdtabs.mdx",sourceDirName:"snippets",slug:"/snippets/systemdtabs",permalink:"/snippets/systemdtabs",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/snippets/systemdtabs.mdx",tags:[],version:"current",frontMatter:{}},c={},k=[],b={toc:k};function h(e){var t=e.components,a=(0,n.Z)(e,m);return(0,i.kt)("wrapper",(0,l.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"code"},(0,i.kt)(r.Z,{defaultValue:"start",values:[{label:"Status",value:"status"},{label:"Start",value:"start"},{label:"Stop",value:"stop"},{label:"Restart",value:"restart"},{label:"Enable",value:"enable"},{label:"Disable",value:"disable"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"status",mdxType:"TabItem"},(0,i.kt)(s.Z,{children:"sudo systemctl status "+a.service,className:"bash",mdxType:"CodeBlock"})),(0,i.kt)(o.Z,{value:"start",mdxType:"TabItem"},(0,i.kt)(s.Z,{children:"sudo systemctl start "+a.service,className:"bash",mdxType:"CodeBlock"})),(0,i.kt)(o.Z,{value:"stop",mdxType:"TabItem"},(0,i.kt)(s.Z,{children:"sudo systemctl stop "+a.service,className:"bash",mdxType:"CodeBlock"})),(0,i.kt)(o.Z,{value:"restart",mdxType:"TabItem"},(0,i.kt)(s.Z,{children:"sudo systemctl restart "+a.service,className:"bash",mdxType:"CodeBlock"})),(0,i.kt)(o.Z,{value:"enable",mdxType:"TabItem"},(0,i.kt)(s.Z,{children:"sudo systemctl enable "+a.service,className:"bash",mdxType:"CodeBlock"})),(0,i.kt)(o.Z,{value:"disable",mdxType:"TabItem"},(0,i.kt)(s.Z,{children:"sudo systemctl disable "+a.service,className:"bash",mdxType:"CodeBlock"})))))}h.isMDXComponent=!0}}]);