import{_ as s,c as i,o as a,a5 as l}from"./chunks/framework.BIhQMg0k.js";const g=JSON.parse('{"title":"BFF(Backend For Frontend) - 前端友好的后端服务层","description":"","frontmatter":{"title":"BFF(Backend For Frontend) - 前端友好的后端服务层","date":"2024-11-26T00:00:00.000Z","categories":["工作随记","性能优化","javascript"],"tags":["BFF","架构设计","Node.js"]},"headers":[],"relativePath":"blogs/word/2024/20241126.md","filePath":"blogs/word/2024/20241126.md"}'),n={name:"blogs/word/2024/20241126.md"},t=l(`<h1 id="bff-打造专属前端的后端服务" tabindex="-1">BFF：打造专属前端的后端服务 <a class="header-anchor" href="#bff-打造专属前端的后端服务" aria-label="Permalink to &quot;BFF：打造专属前端的后端服务&quot;">​</a></h1><h2 id="什么是bff" tabindex="-1">什么是BFF？ <a class="header-anchor" href="#什么是bff" aria-label="Permalink to &quot;什么是BFF？&quot;">​</a></h2><p>BFF（Backend For Frontend）是一种架构模式，简单来说就是为前端定制的后端服务层。它位于前端和服务端之间，主要负责服务端数据的整合和转换，让数据格式更符合前端的需求。</p><h2 id="为什么需要bff" tabindex="-1">为什么需要BFF？ <a class="header-anchor" href="#为什么需要bff" aria-label="Permalink to &quot;为什么需要BFF？&quot;">​</a></h2><p>想象一下这个场景：</p><ul><li>手机端需要简洁的数据</li><li>PC端需要更完整的数据</li><li>不同端的数据格式要求不同</li></ul><p>如果没有BFF，前端可能需要：</p><ol><li>多次调用后端接口</li><li>在前端做大量数据处理</li><li>处理不同端的适配问题</li></ol><h2 id="bff的主要应用场景" tabindex="-1">BFF的主要应用场景 <a class="header-anchor" href="#bff的主要应用场景" aria-label="Permalink to &quot;BFF的主要应用场景&quot;">​</a></h2><ol><li><p><strong>多端应用适配</strong></p><ul><li>Web端</li><li>移动端</li><li>小程序端</li></ul></li><li><p><strong>数据聚合</strong></p><ul><li>整合多个服务接口</li><li>减少前端请求次数</li></ul></li><li><p><strong>数据裁剪</strong></p><ul><li>按需返回数据</li><li>减少无用数据传输</li></ul></li></ol><h2 id="bff的工作原理" tabindex="-1">BFF的工作原理 <a class="header-anchor" href="#bff的工作原理" aria-label="Permalink to &quot;BFF的工作原理&quot;">​</a></h2><div class="language-mermaid vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">graph LR</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    A[前端应用] --&gt; B[BFF层]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    B --&gt; C1[微服务1]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    B --&gt; C2[微服务2]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    B --&gt; C3[微服务3]</span></span></code></pre></div><ol><li>前端发起请求到BFF层</li><li>BFF层根据需求调用相关微服务</li><li>BFF层组装数据返回给前端</li></ol><h2 id="实战案例" tabindex="-1">实战案例 <a class="header-anchor" href="#实战案例" aria-label="Permalink to &quot;实战案例&quot;">​</a></h2><h3 id="场景-商品详情页" tabindex="-1">场景：商品详情页 <a class="header-anchor" href="#场景-商品详情页" aria-label="Permalink to &quot;场景：商品详情页&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// BFF层代码示例</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">async</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> getProductDetail</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">productId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 并行请求多个服务</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        basicInfo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        price</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        comments</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Promise</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">all</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        getBasicInfo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(productId),</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        getPriceInfo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(productId),</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        getComments</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(productId)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ])</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 数据整合</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        ...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">basicInfo,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        price: price.currentPrice,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        promotion: price.promotion,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        commentCount: comments.total,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        topComments: comments.list.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">slice</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="bff的优势" tabindex="-1">BFF的优势 <a class="header-anchor" href="#bff的优势" aria-label="Permalink to &quot;BFF的优势&quot;">​</a></h2><ol><li><p><strong>提升开发效率</strong></p><ul><li>前端开发者更懂前端需求</li><li>接口格式更符合前端使用习惯</li></ul></li><li><p><strong>优化性能</strong></p><ul><li>减少请求次数</li><li>减少数据传输量</li><li>降低前端计算压力</li></ul></li><li><p><strong>提升可维护性</strong></p><ul><li>解耦前后端</li><li>便于功能扩展</li><li>独立部署和扩展</li></ul></li></ol><h2 id="注意事项" tabindex="-1">注意事项 <a class="header-anchor" href="#注意事项" aria-label="Permalink to &quot;注意事项&quot;">​</a></h2><ol><li><p><strong>避免过度设计</strong></p><ul><li>BFF不是万能的</li><li>不要将业务逻辑放入BFF</li></ul></li><li><p><strong>合理分层</strong></p><ul><li>保持BFF层轻量</li><li>专注于数据转换和聚合</li></ul></li><li><p><strong>性能考虑</strong></p><ul><li>合理使用缓存</li><li>注意并发处理</li><li>错误处理机制</li></ul></li></ol><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>BFF作为前端和后端之间的桥梁，能够很好地解决前端开发中的痛点问题。它不仅提升了开发效率，还能优化应用性能。在实际项目中，要根据具体需求来决定是否使用BFF，以及如何更好地发挥BFF的价值。</p><h2 id="参考资料" tabindex="-1">参考资料 <a class="header-anchor" href="#参考资料" aria-label="Permalink to &quot;参考资料&quot;">​</a></h2><ul><li><a href="https://samnewman.io/patterns/architectural/bff/" target="_blank" rel="noreferrer">Pattern: Backends For Frontends</a></li><li><a href="https://medium.com/better-programming/bff-backend-for-frontend-pattern-458e8b346385" target="_blank" rel="noreferrer">BFF - Backend for Frontend</a></li></ul>`,24),e=[t];function h(p,r,k,o,d,c){return a(),i("div",null,e)}const F=s(n,[["render",h]]);export{g as __pageData,F as default};