import{_ as i,K as r,L as t,M as e,N as n,a5 as a,W as o,F as d}from"./framework-edebdfe1.js";const l={},c=e("h1",{id:"文件共享",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#文件共享","aria-hidden":"true"},"#"),n(" 文件共享")],-1),u={id:"ipc",tabindex:"-1"},h=e("a",{class:"header-anchor",href:"#ipc","aria-hidden":"true"},"#",-1),m={href:"https://learn.microsoft.com/en-us/troubleshoot/windows-server/networking/inter-process-communication-share-null-session",target:"_blank",rel:"noopener noreferrer"},v={href:"https://learn.microsoft.com/en-us/windows/win32/ipc/interprocess-communications",target:"_blank",rel:"noopener noreferrer"},p=o(`<p>IPC$(Internet Process Connection)是共享”命名管道”的资源，它是为了让进程间通信而开放的命名管道，可以通过验证用户名和密码获得相应的权限,在远程管理计算机和查看计算机的共享资源时使用。</p><h2 id="共享命令" tabindex="-1"><a class="header-anchor" href="#共享命令" aria-hidden="true">#</a> 共享命令</h2><ul><li>查看共享</li></ul><div class="language-JS line-numbers-mode" data-ext="JS"><pre class="language-JS"><code>net share
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>删除共享</li></ul><div class="language-JS line-numbers-mode" data-ext="JS"><pre class="language-JS"><code>net use \\\\127.0.0.1\\ipc$ /delete
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>访问共享</li></ul><div class="language-JS line-numbers-mode" data-ext="JS"><pre class="language-JS"><code>net use \\\\127.0.0.1\\ipc$ &quot;&quot; /user:&quot;&quot;
net use \\\\127.0.0.1\\c$  &quot;密码&quot; /user:&quot;用户名&quot;
net use \\\\127.0.0.1\\d$  &quot;密码&quot; /user:&quot;DEELMIND\\usera&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>执行共享</li></ul><div class="language-JS line-numbers-mode" data-ext="JS"><pre class="language-JS"><code>copy file \\\\127.0.0.1\\c$
command \\\\127.0.0.1\\c$\\file
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,10);function _(b,g){const s=d("ExternalLinkIcon");return r(),t("div",null,[c,e("h2",u,[h,n(),e("a",m,[n("IPC$"),a(s)])]),e("p",null,[e("a",v,[n("进程通讯"),a(s)])]),p])}const x=i(l,[["render",_],["__file","share.html.vue"]]);export{x as default};