import{_ as s,c as i,o as a,a3 as l}from"./chunks/framework.DpzXWsSh.js";const y=JSON.parse('{"title":"localStorage超过5M了怎么办？","description":"","frontmatter":{"title":"localStorage超过5M了怎么办？","date":"2023-4-21","categories":["浏览器","面试"]},"headers":[],"relativePath":"blogs/interview/20230421.md","filePath":"blogs/interview/20230421.md"}'),n={name:"blogs/interview/20230421.md"},h=l(`<h1 id="localstorage-存储限制及解决方案-🔍" tabindex="-1">localStorage 存储限制及解决方案 🔍 <a class="header-anchor" href="#localstorage-存储限制及解决方案-🔍" aria-label="Permalink to &quot;localStorage 存储限制及解决方案 🔍&quot;">​</a></h1><h2 id="问题背景" tabindex="-1">问题背景 <a class="header-anchor" href="#问题背景" aria-label="Permalink to &quot;问题背景&quot;">​</a></h2><p>localStorage 是 Web Storage API 提供的一种客户端存储机制，但它存在存储大小限制（通常为5MB）。当我们遇到存储溢出时，需要有合理的解决方案。</p><h2 id="localstorage-的核心特性-⭐" tabindex="-1">localStorage 的核心特性 ⭐ <a class="header-anchor" href="#localstorage-的核心特性-⭐" aria-label="Permalink to &quot;localStorage 的核心特性 ⭐&quot;">​</a></h2><ol><li><strong>持久化存储</strong>: 数据永久保存在浏览器中，除非手动清除</li><li><strong>跨页面共享</strong>: 同域名下的所有页面共享同一个 localStorage 空间</li><li><strong>存储限制</strong>: 一般为5MB（不同浏览器可能略有差异）</li><li><strong>同步操作</strong>: 读写操作都是同步的，可能影响性能</li></ol><h2 id="存储溢出的常见原因-🤔" tabindex="-1">存储溢出的常见原因 🤔 <a class="header-anchor" href="#存储溢出的常见原因-🤔" aria-label="Permalink to &quot;存储溢出的常见原因 🤔&quot;">​</a></h2><ol><li>同域名下多个业务线互相争抢存储空间</li><li>存储了不适合放在 localStorage 中的大型数据</li><li>历史数据未及时清理</li><li>数据未做压缩处理</li></ol><h2 id="解决方案-💡" tabindex="-1">解决方案 💡 <a class="header-anchor" href="#解决方案-💡" aria-label="Permalink to &quot;解决方案 💡&quot;">​</a></h2><h3 id="_1-架构层面的优化" tabindex="-1">1. 架构层面的优化 <a class="header-anchor" href="#_1-架构层面的优化" aria-label="Permalink to &quot;1. 架构层面的优化&quot;">​</a></h3><ul><li><p>🔸 <strong>域名划分</strong></p><ul><li>为不同业务线配置独立域名</li><li>每个业务域名独立管理自己的存储空间</li></ul></li><li><p>🔸 <strong>统一存储管理</strong></p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> StorageManager</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  static</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> maxSize</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 4</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1024</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1024</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 预留1MB防止溢出</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  static</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> size</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Blob</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">JSON</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stringify</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(value)]).size;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (size </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.maxSize) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      throw</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Error</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;数据超出存储限制&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    localStorage.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(key, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">JSON</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stringify</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(value));</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></li></ul><h3 id="_2-技术方案优化" tabindex="-1">2. 技术方案优化 <a class="header-anchor" href="#_2-技术方案优化" aria-label="Permalink to &quot;2. 技术方案优化&quot;">​</a></h3><ul><li><p>🔸 <strong>使用替代存储方案</strong></p><ul><li>IndexedDB: 适合存储大文件和二进制数据</li><li>WebSQL: 适合结构化数据（已废弃，不推荐）</li><li>SessionStorage: 临时存储方案</li></ul></li><li><p>🔸 <strong>数据压缩</strong></p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { compress, decompress } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;lz-string&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 压缩存储</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">localStorage.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;data&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">compress</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">JSON</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stringify</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(bigData)));</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 解压读取</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> data</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> JSON</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">parse</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">decompress</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(localStorage.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;data&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)));</span></span></code></pre></div></li></ul><h3 id="_3-数据优化" tabindex="-1">3. 数据优化 <a class="header-anchor" href="#_3-数据优化" aria-label="Permalink to &quot;3. 数据优化&quot;">​</a></h3><ul><li><p>🔸 <strong>定期清理</strong></p><ul><li>设置数据过期时间</li><li>实现 LRU 缓存策略</li></ul></li><li><p>🔸 <strong>数据分片</strong></p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> chunk</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">size</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1024</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1024</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> chunks</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [];</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> stringData</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> JSON</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stringify</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> stringData.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">length</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> size) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    chunks.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">push</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(stringData.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">slice</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(i, i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> size));</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> chunks;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div></li></ul><h2 id="最佳实践建议-📝" tabindex="-1">最佳实践建议 📝 <a class="header-anchor" href="#最佳实践建议-📝" aria-label="Permalink to &quot;最佳实践建议 📝&quot;">​</a></h2><ol><li><p><strong>合理评估存储需求</strong></p><ul><li>在开发前评估数据量</li><li>选择合适的存储方案</li></ul></li><li><p><strong>实现监控机制</strong></p><ul><li>监控存储使用量</li><li>设置预警阈值</li></ul></li><li><p><strong>降级处理</strong></p><ul><li>实现存储失败的降级方案</li><li>考虑服务端存储备选方案</li></ul></li></ol><h2 id="注意事项-⚠️" tabindex="-1">注意事项 ⚠️ <a class="header-anchor" href="#注意事项-⚠️" aria-label="Permalink to &quot;注意事项 ⚠️&quot;">​</a></h2><ol><li>避免存储敏感信息</li><li>注意浏览器兼容性</li><li>实现错误处理机制</li><li>定期清理无用数据</li><li>考虑移动端的存储限制</li></ol>`,18),t=[h];function k(p,e,r,E,g,d){return a(),i("div",null,t)}const c=s(n,[["render",k]]);export{y as __pageData,c as default};
