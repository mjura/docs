"use strict";(self.webpackChunkgo_4_clouds=self.webpackChunkgo_4_clouds||[]).push([[701],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),k=r,m=p["".concat(c,".").concat(k)]||p[k]||d[k]||l;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=k;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},8174:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:1},o="Install kubectl",i={unversionedId:"kubernetes/install-kubectl",id:"kubernetes/install-kubectl",title:"Install kubectl",description:"Install the Kubernetes client kubectl",source:"@site/docs/kubernetes/install-kubectl.md",sourceDirName:"kubernetes",slug:"/kubernetes/install-kubectl",permalink:"/docs/kubernetes/install-kubectl",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Kubernetes - Tutorial",permalink:"/docs/category/kubernetes---tutorial"},next:{title:"Introduction to Kubernetes",permalink:"/docs/kubernetes/intro-to-kubernetes"}},c={},s=[{value:"Download the kubectl client",id:"download-the-kubectl-client",level:2},{value:"Get the <strong>KUBECONFIG</strong> credentials file",id:"get-the-kubeconfig-credentials-file",level:2},{value:"Configure <code>kubectl</code> client",id:"configure-kubectl-client",level:2},{value:"Configure the <code>vim</code> text editor",id:"configure-the-vim-text-editor",level:2},{value:"Configure the <code>GNU nano</code> text editor",id:"configure-the-gnu-nano-text-editor",level:2},{value:"Adding syntax highlighting for YAML-files",id:"adding-syntax-highlighting-for-yaml-files",level:3},{value:"Check the <strong>KUBECONFIG</strong> configuration",id:"check-the-kubeconfig-configuration",level:2}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"install-kubectl"},"Install kubectl"),(0,r.kt)("p",null,"Install the Kubernetes client ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")),(0,r.kt)("h2",{id:"download-the-kubectl-client"},"Download the kubectl client"),(0,r.kt)("p",null,"After ",(0,r.kt)("strong",{parentName:"p"},"Kubernetes")," cluster installation, get a ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," command line tool based on instructions from the documentation ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/tools/#kubectl"},"kubectl"),"."),(0,r.kt)("h2",{id:"get-the-kubeconfig-credentials-file"},"Get the ",(0,r.kt)("strong",{parentName:"h2"},"KUBECONFIG")," credentials file"),(0,r.kt)("p",null,"After the ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," installation get the ",(0,r.kt)("strong",{parentName:"p"},"KUBECONFIG")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir $HOME/.kube\nscp root@cp1:/etc/kubernetes/admin.conf $HOME/.kube/config\nchown $(id -u):$(id -g) $HOME/.kube/config\n")),(0,r.kt)("p",null,"Check the connection to the ",(0,r.kt)("strong",{parentName:"p"},"Kubernetes")," cluster:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl cluster-info\n")),(0,r.kt)("p",null,"Expected output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"Kubernetes control plane is running at https://cp1:6443\nCoreDNS is running at https://cp1:6443/api/v1/namespaces/kube-system/services/kube-dns:dns/proxy\n\nTo further debug and diagnose cluster problems, use 'kubectl cluster-info dump'.\n")),(0,r.kt)("p",null,"Alternative ways to provide ",(0,r.kt)("strong",{parentName:"p"},"KUBECONFIG")," for ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"export KUBECONFIG=$HOME/.kube/config\nkubectl cluster-info\n")),(0,r.kt)("p",null,"or"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl --kubeconfig=$HOME/.kube/config cluster-info\n")),(0,r.kt)("h2",{id:"configure-kubectl-client"},"Configure ",(0,r.kt)("inlineCode",{parentName:"h2"},"kubectl")," client"),(0,r.kt)("p",null,"Configure Bash autocompletion for ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'kubectl completion bash\necho "source <(kubectl completion bash)" >> ~/.bashrc       \nsource <(kubectl completion bash)\n')),(0,r.kt)("h2",{id:"configure-the-vim-text-editor"},"Configure the ",(0,r.kt)("inlineCode",{parentName:"h2"},"vim")," text editor"),(0,r.kt)("p",null,"Next up, let's configure the  text editor, which you will be using for editing ",(0,r.kt)("strong",{parentName:"p"},"Kubernetes")," ",(0,r.kt)("inlineCode",{parentName:"p"},"yaml")," manifests."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"vim")," text editor is a minimalistic text editor that is often available even in bare-bones deployment, which is why we are recommending it. However, it is often considered to be complicated and non-intuitive for developers that are fairly new to the command line. As an alternative to  ",(0,r.kt)("inlineCode",{parentName:"p"},"vim"),", you can consider the ",(0,r.kt)("inlineCode",{parentName:"p"},"GNU Nano")," text editor, which is described in the next section."),(0,r.kt)("p",null,"If you have chosen to stick with ",(0,r.kt)("inlineCode",{parentName:"p"},"vim"),", create a ",(0,r.kt)("strong",{parentName:"p"},"Vim")," custom configuration file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt",metastring:'title="$HOME/.vimrc"',title:'"$HOME/.vimrc"'},'" Sets tabstop to 2 for working with YAML\nset ts=2\n" Sets softtabstop makes spaces feel like tabs\nset sts=2\n" Sets the shift width to 2, making shift operations (<< or >>)\nset sw=2\n" Expands new tabs to spaces\nset expandtab\n" Convert all existing tabs to spaces\nretab\n" Enable syntax highlighting\nsyntax on\n" For certain filetypes, enable automatic indenting\nfiletype indent plugin on\n" Show column and line number\nset ruler\n')),(0,r.kt)("h2",{id:"configure-the-gnu-nano-text-editor"},"Configure the ",(0,r.kt)("inlineCode",{parentName:"h2"},"GNU nano")," text editor"),(0,r.kt)("p",null,"As an alternative to  ",(0,r.kt)("inlineCode",{parentName:"p"},"vim"),",  the ",(0,r.kt)("inlineCode",{parentName:"p"},"GNU nano")," text editor is a lightweight and versatile terminal-based text editor. "),(0,r.kt)("p",null,"In order to use ",(0,r.kt)("inlineCode",{parentName:"p"},"nano")," to edit ",(0,r.kt)("strong",{parentName:"p"},"Kubernetes")," ",(0,r.kt)("inlineCode",{parentName:"p"},"yaml")," manifest, we need to edit the configuration file, located at ",(0,r.kt)("inlineCode",{parentName:"p"},"$HOME/.nanorc")," "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt",metastring:'title="$HOME/.nanorc"',title:'"$HOME/.nanorc"'},"# Sets tabstop to 2 for working with YAML\nset tabsize 2\n# Sets tabs to spaces \nset tabstospaces\n# Turn on line numbers for ease of reference\nset linenumbers\n")),(0,r.kt)("p",null,"This can also be done automatically using the pipe and tee operators in bash, by running the follwing commands."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt",metastring:'title="bash"',title:'"bash"'},' echo "set tabsize 2" | tee -a ~/.nanorc\n echo "set tabstospaces" | tee -a ~/.nanorc\n echo "set linenumbers" | tee -a ~/.nanorc\n')),(0,r.kt)("h3",{id:"adding-syntax-highlighting-for-yaml-files"},"Adding syntax highlighting for YAML-files"),(0,r.kt)("p",null,"In addition it can be useful with syntax highlighting for ",(0,r.kt)("inlineCode",{parentName:"p"},"yaml")," files. To achieve this we first need a ",(0,r.kt)("inlineCode",{parentName:"p"},".nanorc")," file to tell nano how to handle the ",(0,r.kt)("inlineCode",{parentName:"p"},"yaml")," manifests."),(0,r.kt)("p",null,"Create a file in ",(0,r.kt)("inlineCode",{parentName:"p"},"$HOME/.nano/")," named ",(0,r.kt)("inlineCode",{parentName:"p"},"yaml.nanorc")," and copy the following"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt",metastring:'title="$HOME/.nano/yaml.nanorc"',title:'"$HOME/.nano/yaml.nanorc"'},'syntax "YUM" "\\.repo$|yum.*\\.conf$"\ncolor cyan "^[[:space:]]*[^=]*="\ncolor brightmagenta "^[[:space:]]*\\[.*\\]$"\ncolor brightyellow "\\$(releasever|arch|basearch|uuid|YUM[0-9])"\ncolor brightblack "(^|[[:space:]])#([^{].*)?$"\ncolor ,green "[[:space:]]+$"\ncolor ,red "    + +| +  +"\n')),(0,r.kt)("p",null,"Then ensure that the config is included in the include ",(0,r.kt)("inlineCode",{parentName:"p"},"$HOME/.nanorc")," file by adding the following"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt",metastring:'title=$HOME/.nanorc"',title:'$HOME/.nanorc"'},'include "~/.nano/yaml.nanorc"\n')),(0,r.kt)("p",null,"Or by running the following command in bash"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt",metastring:'title="bash"',title:'"bash"'}," echo \"include '~/.nano/yaml.nanorc'\" | tee -a ~/.nanorc\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Wohoo!")," Your nano text editor should now be ready to go! "),(0,r.kt)("h2",{id:"check-the-kubeconfig-configuration"},"Check the ",(0,r.kt)("strong",{parentName:"h2"},"KUBECONFIG")," configuration"),(0,r.kt)("p",null,"Check the current ",(0,r.kt)("strong",{parentName:"p"},"KUBECONFIG")," config:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl config view\nkubectl config get-clusters\nkubectl config get-users\nkubectl config get-contexts\nkubectl config current-context\nkubectl get pods\n")),(0,r.kt)("p",null,"Set example cluster adminstrator context:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl config set-context kube-system-admin --cluster=kubernetes  --user=kubernetes-admin --namespace=kube-system\nkubectl config get-contexts\nkubectl config use-context kube-system-admin\nkubectl get pods\n")),(0,r.kt)("p",null,"Switch back to the previous context:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl config use-context kubernetes-admin@kubernetes\nkubectl config current-context\n")))}p.isMDXComponent=!0}}]);