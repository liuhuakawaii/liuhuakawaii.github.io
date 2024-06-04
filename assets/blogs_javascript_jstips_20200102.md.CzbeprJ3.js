import{_ as s,c as i,o as a,a3 as n}from"./chunks/framework.DpzXWsSh.js";const C=JSON.parse('{"title":"小数运算不精确","description":"","frontmatter":{"title":"小数运算不精确","date":"2020-1-02","categories":["踩坑","javascript"]},"headers":[],"relativePath":"blogs/javascript/jstips/20200102.md","filePath":"blogs/javascript/jstips/20200102.md"}'),h={name:"blogs/javascript/jstips/20200102.md"},k=n(`<h2 id="小数运算不精确" tabindex="-1">小数运算不精确 <a class="header-anchor" href="#小数运算不精确" aria-label="Permalink to &quot;小数运算不精确&quot;">​</a></h2><blockquote><p><code>console.log(0.5 - 0.4 === 0.1)</code> ? <code>//false</code></p></blockquote><ol><li><p>出现小数精度问题的根源是js底层对于浮点数的存储是利用二进制</p></li><li><p>采取乘2取整，顺序排列的方式</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  0.125</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ==&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 001</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  0.125</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.25</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  //取0</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  0.25</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.5</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  //取0</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  0.5</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1.0</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  //取1  </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  //结果001   </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  0.2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  ==&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  00110011</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">..</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  0.2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.4</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  //取0</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  0.4</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.8</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  //取0</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  0.8</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1.6</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  //取1</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  0.6</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1.2</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  //取1</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  0.2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.4</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  //取0  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  。。。。</span></span></code></pre></div></li></ol>`,3),t=[k];function l(p,e,r,d,F,g){return a(),i("div",null,t)}const c=s(h,[["render",l]]);export{C as __pageData,c as default};