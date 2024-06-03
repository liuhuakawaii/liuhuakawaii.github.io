import{_ as s,c as i,o as a,a3 as n}from"./chunks/framework.DpzXWsSh.js";const E=JSON.parse('{"title":"yaml学习笔记","description":"","frontmatter":{"title":"yaml学习笔记","date":"2023-8-22","categories":["yaml","工程化","笔记"]},"headers":[],"relativePath":"blogs/note/yaml.md","filePath":"blogs/note/yaml.md"}'),l={name:"blogs/note/yaml.md"},t=n(`<h2 id="yaml学习笔记" tabindex="-1">yaml学习笔记 <a class="header-anchor" href="#yaml学习笔记" aria-label="Permalink to &quot;yaml学习笔记&quot;">​</a></h2><ol><li>yaml是什么</li></ol><ul><li>yaml是一个可读性高，用来表达数据序列化的格式</li><li>yaml是“yaml ain\`t a markup language“（yaml不是一种标记语言）的递归缩写</li><li>yaml --- JSON + XML 文件后缀：.yaml或者.yml</li></ul><ol start="2"><li><p>语法</p><ul><li>使用缩进表示层级关系</li><li>缩进的空格数不重要，只要相同层级的元素左对齐即可</li><li>#表示注释</li></ul></li><li><p>基本数据类型</p><ul><li><p>纯量 纯量是最基本的，不可再分的值，包括:字符串、布尔值、整数、浮点数、Null、时间、日期</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    	#comment here</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> : </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">redis</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5.6</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      port</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6379</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      stdin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">~(null)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # date and time formate IS0 8601</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      date</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2022-03-18</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      time</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">2022-03-18T08.30:10+08:00</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      singleLineString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;-</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        this is a very long string</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        another line xjfldsjl</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                      another line</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      #&quot;this is a very long string\\n another line xjfldsjl\\n another line\\n”</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      &gt;-</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     #&quot;this is a very long string another line xjfldsjl another line”</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &gt;     #&quot;this is a very long string another line xjfldsjl another line\\n”</span></span></code></pre></div></li><li><p>数组</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    ports：</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6379</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6380</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    ports</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6379</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> , </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6380</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div></li><li><p>对象</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  container</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    name:mysql</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    image:mysql</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    prot:1236</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    version:5.7</span></span></code></pre></div></li></ul></li></ol>`,4),p=[t];function e(h,k,r,d,g,y){return a(),i("div",null,p)}const c=s(l,[["render",e]]);export{E as __pageData,c as default};
