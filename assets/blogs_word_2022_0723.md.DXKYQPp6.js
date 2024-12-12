import{_ as s,c as i,o as a,a5 as t}from"./chunks/framework.BIhQMg0k.js";const g=JSON.parse('{"title":"JavaScript数组初始化与属性访问的最佳实践","description":"","frontmatter":{"title":"JavaScript数组初始化与属性访问的最佳实践","date":"2022-7-23","categories":["javascript","工作随记"]},"headers":[],"relativePath":"blogs/word/2022/0723.md","filePath":"blogs/word/2022/0723.md"}'),l={name:"blogs/word/2022/0723.md"},n=t(`<h2 id="javascript数组初始化与属性访问问题" tabindex="-1">JavaScript数组初始化与属性访问问题 <a class="header-anchor" href="#javascript数组初始化与属性访问问题" aria-label="Permalink to &quot;JavaScript数组初始化与属性访问问题&quot;">​</a></h2><p>在前端开发中，我们经常需要处理后端返回的数组数据，特别是在使用 <code>v-for</code> 进行列表渲染时。今天分享一个关于数组初始化的小技巧，可以有效避免常见的 <code>undefined</code> 报错问题。</p><h3 id="问题演示" tabindex="-1">问题演示 <a class="header-anchor" href="#问题演示" aria-label="Permalink to &quot;问题演示&quot;">​</a></h3><p>让我们通过两个示例来理解这个问题：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 示例1：空数组</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> arr1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> []</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(arr1[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])          </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 输出: undefined</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(arr1[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]?.result)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 输出: undefined（使用可选链操作符）</span></span></code></pre></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 示例2：包含空对象的数组</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> arr2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [{}]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(arr2[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])          </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 输出: {}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(arr2[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">].result)   </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 输出: undefined</span></span></code></pre></div><h3 id="最佳实践" tabindex="-1">最佳实践 <a class="header-anchor" href="#最佳实践" aria-label="Permalink to &quot;最佳实践&quot;">​</a></h3><p>在处理异步数据时，建议采用以下方案：</p><ol><li>使用可选链操作符 <code>?.</code></li><li>初始化时使用带空对象的数组 <code>[{}]</code></li><li>设置默认值：<code>arr[0]?.result || defaultValue</code></li></ol><h3 id="实际应用" tabindex="-1">实际应用 <a class="header-anchor" href="#实际应用" aria-label="Permalink to &quot;实际应用&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 推荐的初始化方式</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> arr </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [{}]  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 而不是 let arr = []</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 在Vue模板中使用</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-for</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;item in arr&quot;</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> :key=&quot;item.id&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {{ item?.result || </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;暂无数据&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }}</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&lt;/div&gt;</span></span></code></pre></div><p>这样的初始化方式可以：</p><ul><li>避免 <code>Cannot read property &#39;xxx&#39; of undefined</code> 错误</li><li>提供更好的用户体验</li><li>代码更加健壮</li></ul><blockquote><p>注意：虽然直接使用空数组 <code>[]</code> 不会导致功能问题，但使用 <code>[{}]</code> 初始化可以避免烦人的控制台报错信息。</p></blockquote>`,14),e=[n];function h(p,k,r,d,o,c){return a(),i("div",null,e)}const y=s(l,[["render",h]]);export{g as __pageData,y as default};