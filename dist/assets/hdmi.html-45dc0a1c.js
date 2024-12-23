import{_ as r,K as a,L as o,M as e,N as i,a5 as n,W as l,F as h}from"./framework-edebdfe1.js";const s={},d=e("h1",{id:"hdmi信号泄露",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#hdmi信号泄露","aria-hidden":"true"},"#"),i(" HDMI信号泄露")],-1),c={id:"什么是hdmi",tabindex:"-1"},p=e("a",{class:"header-anchor",href:"#什么是hdmi","aria-hidden":"true"},"#",-1),m={href:"https://zh.wikipedia.org/wiki/HDMI",target:"_blank",rel:"noopener noreferrer"},_=l('<p>HDMI（High-Definition Multimedia Interface，高定义多媒体接口）是一种用于传输高质量数字视频和音频信号的接口。它被广泛应用于电视、显示器、电脑、游戏机和其他消费电子设备之间的连接。</p><ul><li>标准 HDMI（Type A）：最常见的 HDMI 接口类型，应用于大多数电视、显示器和AV设备。</li><li>Mini HDMI（Type C）：比标准 HDMI 较小，常用于便携设备，如相机和平板电脑。</li><li>Micro HDMI（Type D）：比 Mini HDMI 更小，主要用于超便携设备，如智能手机。</li><li>Type E：用于汽车中的 HDMI 连接，具有特殊的锁定机制和抗干扰设计。</li></ul><h2 id="什么是hdcp" tabindex="-1"><a class="header-anchor" href="#什么是hdcp" aria-hidden="true">#</a> 什么是HDCP</h2><p>HDCP（High-bandwidth Digital Content Protection，高带宽数字内容保护）是一种由英特尔公司开发的数字版权保护技术，旨在保护通过 HDMI、DVI 和其他数字接口传输的音视频内容。HDCP 的主要目标是防止未经授权的设备从数字连接中复制或截取高质量的数字内容。</p><ol><li><p><strong>认证</strong>：</p><ul><li>发送设备（如蓝光播放器、游戏机）和接收设备（如电视、显示器）在建立连接时会进行握手过程，以验证双方是否都支持 HDCP。</li><li>这个握手过程使用称为密钥交换的机制，其中设备使用一组受信任的密钥来相互认证。</li></ul></li><li><p><strong>加密</strong>：</p><ul><li>发送设备将内容加密，并通过 HDMI 或其他支持 HDCP 的接口传输数据。</li><li>加密过程使用动态加密密钥，使得每次连接都会生成不同的加密密钥，从而提高安全性。</li></ul></li><li><p><strong>解密</strong>：</p><ul><li>接收设备在接收到加密数据后，使用认证过程中交换的密钥进行解密，以恢复原始内容并进行播放。</li></ul></li></ol><h2 id="hdmi信号泄露-1" tabindex="-1"><a class="header-anchor" href="#hdmi信号泄露-1" aria-hidden="true">#</a> HDMI信号泄露</h2>',6),u={href:"https://github.com/martinmarinov/TempestSDR",target:"_blank",rel:"noopener noreferrer"},D={href:"https://github.com/emidan19/deep-tempest",target:"_blank",rel:"noopener noreferrer"};function H(f,M){const t=h("ExternalLinkIcon");return a(),o("div",null,[d,e("h2",c,[p,i(" 什么是"),e("a",m,[i("HDMI"),n(t)])]),_,e("ul",null,[e("li",null,[e("a",u,[i("https://github.com/martinmarinov/TempestSDR"),n(t)])]),e("li",null,[e("a",D,[i("https://github.com/emidan19/deep-tempest"),n(t)])])])])}const g=r(s,[["render",H],["__file","hdmi.html.vue"]]);export{g as default};