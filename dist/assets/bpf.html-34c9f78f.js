import{_ as l,K as i,L as s,M as e,N as r,a5 as t,W as c,F as a}from"./framework-edebdfe1.js";const h="/imgs/rev/protect/bpf.png",d={},_=e("h1",{id:"bpf",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#bpf","aria-hidden":"true"},"#"),r(" BPF")],-1),f={id:"什么是bpf",tabindex:"-1"},p=e("a",{class:"header-anchor",href:"#什么是bpf","aria-hidden":"true"},"#",-1),u={href:"https://ebpf.io/",target:"_blank",rel:"noopener noreferrer"},b={href:"https://docs.kernel.org/bpf/",target:"_blank",rel:"noopener noreferrer"},B={href:"https://github.com/microsoft/ebpf-for-windows",target:"_blank",rel:"noopener noreferrer"},m=e("p",null,"eBPF 是 BPF 的扩展版本，具有以下优势：",-1),F=e("ul",null,[e("li",null,"支持更复杂的程序"),e("li",null,"运行效率更高"),e("li",null,"安全性更高")],-1),P=c('<h2 id="bfp原理" tabindex="-1"><a class="header-anchor" href="#bfp原理" aria-hidden="true">#</a> *BFP原理</h2><ul><li>用户代码</li><li>内核执行</li><li>JIT/虚拟机执行</li></ul><p><img src="'+h+'" alt="er" loading="lazy"></p><h2 id="bpf应用" tabindex="-1"><a class="header-anchor" href="#bpf应用" aria-hidden="true">#</a> BPF应用：</h2><ul><li>网络：BPF 可以用于实现数据包过滤、流量分析、安全防护等功能。</li><li>安全：BPF 可以用于检测恶意软件、入侵检测等。</li><li>监控：BPF 可以用于收集系统运行状态信息，例如 CPU 使用率、内存使用率等。</li><li>调试：BPF 可以用于跟踪系统运行过程，例如追踪进程调用栈、内存分配等。</li></ul><h2 id="支持语言" tabindex="-1"><a class="header-anchor" href="#支持语言" aria-hidden="true">#</a> 支持语言</h2><ul><li>rust</li><li>c/c++</li><li>golang</li></ul>',7);function x(g,k){const n=a("ExternalLinkIcon"),o=a("DocsAD");return i(),s("div",null,[_,e("h2",f,[p,r(" 什么是"),e("a",u,[r("BPF"),t(n)])]),e("p",null,[r("BPF (Berkeley Packet Filter)，是一种运行在 "),e("a",b,[r("Linux"),t(n)]),r(" 内核（"),e("a",B,[r("Windows"),t(n)]),r("）中的虚拟机，用于处理网络数据包，最初用于实现数据包过滤功能，但后来被扩展为支持更广泛的用途，例如跟踪、调试、安全等。")]),m,F,t(o),P])}const v=l(d,[["render",x],["__file","bpf.html.vue"]]);export{v as default};