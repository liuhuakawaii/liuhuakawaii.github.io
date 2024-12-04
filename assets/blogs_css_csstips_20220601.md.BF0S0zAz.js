import{_ as s,c as i,o as a,a3 as h}from"./chunks/framework.DpzXWsSh.js";const y=JSON.parse('{"title":"less中calc()计算无效的解决方法","description":"","frontmatter":{"title":"less中calc()计算无效的解决方法","date":"2022-6-01","categories":["less","css","css小知识"]},"headers":[],"relativePath":"blogs/css/csstips/20220601.md","filePath":"blogs/css/csstips/20220601.md"}'),n={name:"blogs/css/csstips/20220601.md"},l=h(`<h1 id="less中calc-计算无效的解决方法-🔧" tabindex="-1">Less中calc()计算无效的解决方法 🔧 <a class="header-anchor" href="#less中calc-计算无效的解决方法-🔧" aria-label="Permalink to &quot;Less中calc()计算无效的解决方法 🔧&quot;">​</a></h1><h2 id="问题描述-❓" tabindex="-1">问题描述 ❓ <a class="header-anchor" href="#问题描述-❓" aria-label="Permalink to &quot;问题描述 ❓&quot;">​</a></h2><p>在使用 Less 时，如果直接使用 <code>calc()</code> 函数进行计算，可能会遇到计算无效的问题。比如：</p><div class="language-less vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">less</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.container</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">calc</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">vh</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 132</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 这样写是无效的</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>这是因为 Less 会优先处理自己的计算逻辑，导致 CSS 的 <code>calc()</code> 函数失效。</p><h2 id="解决方案-✅" tabindex="-1">解决方案 ✅ <a class="header-anchor" href="#解决方案-✅" aria-label="Permalink to &quot;解决方案 ✅&quot;">​</a></h2><h3 id="_1-使用-符号转义" tabindex="-1">1. 使用 <code>~</code> 符号转义 <a class="header-anchor" href="#_1-使用-符号转义" aria-label="Permalink to &quot;1. 使用 \`~\` 符号转义&quot;">​</a></h3><p>最简单的解决方案是使用 <code>~&quot;&quot;</code> 来包裹 calc 表达式：</p><div class="language-less vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">less</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.container</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">calc</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">~</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;100vh - 132px&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 正确写法</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="_2-使用变量的情况-🔄" tabindex="-1">2. 使用变量的情况 🔄 <a class="header-anchor" href="#_2-使用变量的情况-🔄" aria-label="Permalink to &quot;2. 使用变量的情况 🔄&quot;">​</a></h3><p>如果需要在 calc 中使用 Less 变量，可以这样写：</p><div class="language-less vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">less</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.container</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  @</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">headerHeight</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">rem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">calc</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">~</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;100vh - </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">headerHeight</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="_3-使用-less-4-0-的新语法" tabindex="-1">3. 使用 Less 4.0+ 的新语法 <a class="header-anchor" href="#_3-使用-less-4-0-的新语法" aria-label="Permalink to &quot;3. 使用 Less 4.0+ 的新语法&quot;">​</a></h3><p>在 Less 4.0 及以上版本中，可以使用 <code>calc(100vh - $headerHeight)</code> 的形式：</p><div class="language-less vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">less</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.container</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  @</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">headerHeight</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">rem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">calc</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">vh</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> @</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">headerHeight</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Less 4.0+ 支持直接使用</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="注意事项-⚠️" tabindex="-1">注意事项 ⚠️ <a class="header-anchor" href="#注意事项-⚠️" aria-label="Permalink to &quot;注意事项 ⚠️&quot;">​</a></h2><ol><li>确保你的 Less 版本与你使用的语法相匹配</li><li>在使用变量时，注意单位的一致性</li><li>如果遇到复杂计算，建议拆分成多个变量处理</li></ol><h2 id="实际应用示例-🌟" tabindex="-1">实际应用示例 🌟 <a class="header-anchor" href="#实际应用示例-🌟" aria-label="Permalink to &quot;实际应用示例 🌟&quot;">​</a></h2><div class="language-less vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">less</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 常见的布局场景</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.page-container</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 头部固定高度</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  @</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">headerHeight</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">60</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 底部固定高度</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  @</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">footerHeight</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">40</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 内容区域自适应</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  .content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">calc</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">~</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;100vh - </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">headerHeight</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> - </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">footerHeight</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    overflow-y</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">auto</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 响应式布局示例</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.responsive-container</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  @</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">padding</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">rem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  @</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">margin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">calc</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">~</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;100% - (</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">padding</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> * 2) - (</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">margin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> * 2)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="总结-📝" tabindex="-1">总结 📝 <a class="header-anchor" href="#总结-📝" aria-label="Permalink to &quot;总结 📝&quot;">​</a></h2><p>正确使用 <code>calc()</code> 在 Less 中是很重要的，它能帮助我们实现更灵活的布局。记住使用转义符号 <code>~&quot;&quot;</code> 或确保使用正确的 Less 版本语法，就能避免计算无效的问题。</p>`,21),t=[l];function k(p,e,E,d,r,g){return a(),i("div",null,t)}const o=s(n,[["render",k]]);export{y as __pageData,o as default};