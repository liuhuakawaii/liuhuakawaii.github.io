import{_ as s,c as i,o as a,a3 as l}from"./chunks/framework.DpzXWsSh.js";const c=JSON.parse('{"title":"Vue1.x 源码深度解析","description":"","frontmatter":{"title":"Vue1.x 源码深度解析","date":"2020-2-05","categories":["vue","面试"]},"headers":[],"relativePath":"blogs/interview/20200205.md","filePath":"blogs/interview/20200205.md"}'),n={name:"blogs/interview/20200205.md"},h=l(`<h1 id="vue1-x-源码深度解析-🔍" tabindex="-1">Vue1.x 源码深度解析 🔍 <a class="header-anchor" href="#vue1-x-源码深度解析-🔍" aria-label="Permalink to &quot;Vue1.x 源码深度解析 🔍&quot;">​</a></h1><h2 id="响应式系统实现原理-⚙️" tabindex="-1">响应式系统实现原理 ⚙️ <a class="header-anchor" href="#响应式系统实现原理-⚙️" aria-label="Permalink to &quot;响应式系统实现原理 ⚙️&quot;">​</a></h2><h3 id="vue1-x-的数据响应式是如何实现的" tabindex="-1">Vue1.x 的数据响应式是如何实现的？ <a class="header-anchor" href="#vue1-x-的数据响应式是如何实现的" aria-label="Permalink to &quot;Vue1.x 的数据响应式是如何实现的？&quot;">​</a></h3><p>Vue1.x 的响应式系统主要由以下几个核心部分组成：</p><h4 id="_1-数据拦截-📦" tabindex="-1">1. 数据拦截 📦 <a class="header-anchor" href="#_1-数据拦截-📦" aria-label="Permalink to &quot;1. 数据拦截 📦&quot;">​</a></h4><ul><li>核心实现：通过 <code>Object.defineProperty</code></li><li>实现过程： <ul><li>递归遍历整个 data 对象</li><li>为每个属性设置 getter/setter</li><li>对数组类型做特殊处理</li></ul></li></ul><h4 id="_2-数组响应式处理-📋" tabindex="-1">2. 数组响应式处理 📋 <a class="header-anchor" href="#_2-数组响应式处理-📋" aria-label="Permalink to &quot;2. 数组响应式处理 📋&quot;">​</a></h4><ul><li>拦截数组的七个变异方法： <ul><li>push、pop、shift、unshift、splice、sort、reverse</li></ul></li><li>增强这些方法： <ul><li>完成原有功能</li><li>添加依赖通知能力</li><li>对新增数据进行响应式处理</li></ul></li></ul><h4 id="_3-依赖收集与更新-🔄" tabindex="-1">3. 依赖收集与更新 🔄 <a class="header-anchor" href="#_3-依赖收集与更新-🔄" aria-label="Permalink to &quot;3. 依赖收集与更新 🔄&quot;">​</a></h4><ol><li><strong>初始化阶段</strong>：</li></ol><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 伪代码示例</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defineReactive</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">obj</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">val</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> dep</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Dep</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Object.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">defineProperty</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(obj, key, {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 依赖收集</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">dep.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">depend</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> val</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">newVal</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (val </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> newVal) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">return</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">val </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> newVal</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 通知更新</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">dep.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">notify</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><ol start="2"><li><strong>挂载阶段</strong>：</li></ol><ul><li>编译 DOM 树</li><li>遇到响应式数据时创建 Watcher</li><li>触发 getter 进行依赖收集</li></ul><ol start="3"><li><strong>更新阶段</strong>：</li></ol><ul><li>数据变化触发 setter</li><li>通知相关 Watcher 更新</li><li>Watcher 执行更新回调，更新 DOM</li></ul><h2 id="vue1-x-设计评价-💭" tabindex="-1">Vue1.x 设计评价 💭 <a class="header-anchor" href="#vue1-x-设计评价-💭" aria-label="Permalink to &quot;Vue1.x 设计评价 💭&quot;">​</a></h2><h3 id="优点-✅" tabindex="-1">优点 ✅ <a class="header-anchor" href="#优点-✅" aria-label="Permalink to &quot;优点 ✅&quot;">​</a></h3><ol><li><p><strong>简单直接</strong>：</p><ul><li>数据与 DOM 一一对应</li><li>更新精确，无虚拟 DOM 开销</li><li>适合中小型应用</li></ul></li><li><p><strong>性能表现</strong>：</p><ul><li>中小型项目性能优异</li><li>更新路径短，响应快速</li></ul></li></ol><h3 id="局限性-⚠️" tabindex="-1">局限性 ⚠️ <a class="header-anchor" href="#局限性-⚠️" aria-label="Permalink to &quot;局限性 ⚠️&quot;">​</a></h3><ol><li><p><strong>扩展性问题</strong>：</p><ul><li>Watcher 与数据一一对应</li><li>大型应用会创建过多 Watcher</li><li>内存占用较大</li></ul></li><li><p><strong>大型项目不适用</strong>：</p><ul><li>Watcher 数量随项目规模线性增长</li><li>资源消耗大</li><li>性能容易出现瓶颈</li></ul></li></ol><h3 id="代码示例-📝" tabindex="-1">代码示例 📝 <a class="header-anchor" href="#代码示例-📝" aria-label="Permalink to &quot;代码示例 📝&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 简单的响应式实现示例</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> observe</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">obj</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">obj </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">||</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> typeof</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> obj </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!==</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;object&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">return</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Object.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">keys</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(obj).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">forEach</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">key</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        defineReactive</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(obj, key, obj[key])</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Watcher 简单实现</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Watcher</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    constructor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">vm</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">exp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">cb</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.vm </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> vm</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.exp </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> exp</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.cb </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> cb</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 依赖收集逻辑</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    update</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 更新逻辑</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="总结-📝" tabindex="-1">总结 📝 <a class="header-anchor" href="#总结-📝" aria-label="Permalink to &quot;总结 📝&quot;">​</a></h2><p>Vue1.x 的设计非常优雅地解决了前端开发中数据与 DOM 操作的痛点。它通过响应式系统实现了数据驱动视图的理念，为中小型应用提供了极佳的开发体验。虽然在大型应用上存在一些局限性，但它的设计思想对后续的 Vue2.x 和 Vue3.x 都产生了深远的影响。</p><blockquote><p>💡 <strong>学习建议</strong>：</p><ol><li>深入理解响应式原理对于理解现代前端框架至关重要</li><li>结合实际项目规模选择合适的 Vue 版本</li><li>关注性能优化，合理控制响应式数据的粒度</li></ol></blockquote>`,25),t=[h];function e(p,k,r,E,d,g){return a(),i("div",null,t)}const y=s(n,[["render",e]]);export{c as __pageData,y as default};
