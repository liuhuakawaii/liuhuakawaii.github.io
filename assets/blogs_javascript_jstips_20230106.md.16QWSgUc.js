import{_ as s,c as i,o as a,a3 as n}from"./chunks/framework.DpzXWsSh.js";const c=JSON.parse('{"title":"qs.stringify使用","description":"","frontmatter":{"title":"qs.stringify使用","date":"2023-1-06","categories":["javascript"]},"headers":[],"relativePath":"blogs/javascript/jstips/20230106.md","filePath":"blogs/javascript/jstips/20230106.md"}'),h={name:"blogs/javascript/jstips/20230106.md"},p=n(`<p>qs是一个npm仓库所管理的包,可通过<code>npm install qs</code>命令进行安装（axios 自带qs , <code>// import qs from &#39;qs&#39;</code>）</p><h2 id="qs-stringify使用" tabindex="-1">qs.stringify使用 <a class="header-anchor" href="#qs-stringify使用" aria-label="Permalink to &quot;qs.stringify使用&quot;">​</a></h2><ol><li><strong>基本使用</strong><ol><li><code>qs.parse()</code>:将<code>urlencoded</code>解析成对象的形式<div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> url </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;user=wdx&amp;pwd=123&amp;appToken=7d22e38e-5717-11e7-907b-a6006ad3dba0&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(qs.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">parse</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(url)) </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // {user:&#39;wdx&#39;,pwd:&#39;123&#39;,appToken:&#39;7d22e38e-5717-11e7-907b-a6006ad3dba0&#39;}</span></span></code></pre></div></li><li><code>qs.stringify()</code>将对象序列化成<code>urlencoded</code>的形式，以&amp;进行拼接<div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> obj</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        user:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;wdx&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        pwd:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;123&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        appToken:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;7d22e38e-5717-11e7-907b-a6006ad3dba0&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(qs.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stringify</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(obj)) </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // &#39;user=wdx&amp;pwd=123&amp;appToken=7d22e38e-5717-11e7-907b-a6006ad3dba0&#39;</span></span></code></pre></div></li></ol></li><li><strong>指定数组编码格式</strong><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    /*  默认情况下，它们给出明确的索引  */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    qs.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stringify</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ a: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;b&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;c&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;d&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] }); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &#39;a[0]=b&amp;a[1]=c&amp;a[2]=d&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    /* 重写这种默认方式为false */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    qs.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stringify</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ a: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;b&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;c&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;d&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] }, { indices: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> });</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &#39;a=b&amp;a=c&amp;a=d&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    /* 通过arrayFormat 选项进行格式化输出 */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    qs.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stringify</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ a: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;b&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;c&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] }, { arrayFormat: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;indices&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> })</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &#39;a[0]=b&amp;a[1]=c&#39; // indices（默认）</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    qs.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stringify</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ a: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;b&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;c&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] }, { arrayFormat: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;brackets&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> })</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &#39;a[]=b&amp;a[]=c&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    qs.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stringify</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ a: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;b&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;c&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] }, { arrayFormat: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;repeat&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> })</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &#39;a=b&amp;a=c&#39;</span></span></code></pre></div></li><li><strong>处理json格式的参数</strong><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    /* 默认情况  json格式的参数会用 [] 方式编码 */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> json </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { a: { b: { c: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;d&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, e: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;f&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } } };       </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    qs.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stringify</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(json);  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//结果 &#39;a[b][c]=d&amp;a[b][e]=f&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    /* 但是某些服务端框架，并不能很好的处理这种格式，所以需要转为下面的格式 */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    qs.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stringify</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(json, {allowDots: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//结果 &#39;a.b.c=d&amp;a.b.e=f&#39;</span></span></code></pre></div></li></ol>`,3),l=[p];function t(k,e,E,d,r,g){return a(),i("div",null,l)}const o=s(h,[["render",t]]);export{c as __pageData,o as default};