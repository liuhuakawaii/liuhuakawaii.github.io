import{_ as s,c as i,o as a,a3 as l}from"./chunks/framework.DpzXWsSh.js";const u=JSON.parse('{"title":"Selector的问题","description":"","frontmatter":{"title":"Selector的问题","date":"2020-1-01","categories":["css","css小知识"]},"headers":[],"relativePath":"blogs/css/csstips/20200101.md","filePath":"blogs/css/csstips/20200101.md"}'),e={name:"blogs/css/csstips/20200101.md"},t=l(`<h2 id="selector的问题" tabindex="-1">Selector的问题 <a class="header-anchor" href="#selector的问题" aria-label="Permalink to &quot;Selector的问题&quot;">​</a></h2><h2 id="选择器权重" tabindex="-1">选择器权重 <a class="header-anchor" href="#选择器权重" aria-label="Permalink to &quot;选择器权重&quot;">​</a></h2><ol><li><p>权重比较</p><ul><li>（x，y，z）</li><li>x： id选择器的数量</li><li>y： 类、伪类、属性选择器的数量</li><li>z： 元素、伪元素选择器的数量</li><li>从左到右依次比较</li></ul></li><li><p>例子</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    #list</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}    (1,0,0)</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}    (0,0,1)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    .container</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}   (0,1,0)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    .container</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> #list::before</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}  (1,1,1)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    .container</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> #list</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;"> a</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">::before</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}  (1,1,2)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    .container</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> .form</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;"> input</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">type</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;text&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] {}  (0,3,1)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    .container</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;"> ul</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;"> a</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:hover</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}  (0,2,2)</span></span></code></pre></div></li></ol><h2 id="选择器匹配模式" tabindex="-1">选择器匹配模式 <a class="header-anchor" href="#选择器匹配模式" aria-label="Permalink to &quot;选择器匹配模式&quot;">​</a></h2><ol><li><code>E F</code><ul><li>E后面所有的子孙F节点<div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"></span></code></pre></div></li></ul></li><li><code>E &gt; F</code><ul><li>E后面所有的子孙F节点<div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"></span></code></pre></div></li></ul></li><li><code>E + F</code><ul><li>E后面下一个满足条件的兄弟元素F节点<div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"></span></code></pre></div></li></ul></li><li><code>E ~ F</code><ul><li>E后面所有满足条件的兄弟元素F节点<div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"></span></code></pre></div></li></ul></li></ol>`,5),n=[t];function p(h,c,o,k,d,r){return a(),i("div",null,n)}const E=s(e,[["render",p]]);export{u as __pageData,E as default};