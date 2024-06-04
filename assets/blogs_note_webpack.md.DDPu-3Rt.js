import{_ as a,c as i,o as e,a3 as s}from"./chunks/framework.DpzXWsSh.js";const l="/assets/02.DT72GdLo.png",t="/assets/03.VAW8aDbk.png",m=JSON.parse('{"title":"webpack深入浅出","description":"","frontmatter":{"title":"webpack深入浅出","date":"2024-5-15","categories":["webpack","工程化","笔记"]},"headers":[],"relativePath":"blogs/note/webpack.md","filePath":"blogs/note/webpack.md"}'),n={name:"blogs/note/webpack.md"},p=s('<h1 id="webpack核心" tabindex="-1"><strong>webpack核心</strong> <a class="header-anchor" href="#webpack核心" aria-label="Permalink to &quot;**webpack核心**&quot;">​</a></h1><h2 id="为什么需要webpack" tabindex="-1"><strong>为什么需要webpack</strong> <a class="header-anchor" href="#为什么需要webpack" aria-label="Permalink to &quot;**为什么需要webpack**&quot;">​</a></h2><h3 id="模块化的利与弊" tabindex="-1"><strong>模块化的利与弊</strong> <a class="header-anchor" href="#模块化的利与弊" aria-label="Permalink to &quot;**模块化的利与弊**&quot;">​</a></h3><p>优点：</p><ul><li>代码复用</li><li>开发的时候效率提升 缺点：</li><li>兼容性问题：目前浏览器仅支持ES6模块</li><li>性能问题：划分过多的js文件，浏览器加载速度变慢</li><li>工具问题：浏览器不支持npm下载的第三方包</li></ul><blockquote><p>上面提到的问题，为什么在node端没有那么明显，反而到了浏览器端变得如此严重呢？ 在node端，运行的JS文件在本地，因此可以本地读取文件，它的效率比浏览器远程传输文件高的多</p></blockquote><h3 id="根本原因" tabindex="-1"><strong>根本原因</strong> <a class="header-anchor" href="#根本原因" aria-label="Permalink to &quot;**根本原因**&quot;">​</a></h3><p>在浏览器端，开发时态（devtime）和运行时态（runtime）的侧重点不一样</p><p><strong>开发时态，devtime：</strong></p><ol><li>模块划分越细越好</li><li>支持多种模块化标准</li><li>支持npm或其他包管理器下载的模块</li><li>能够解决其他工程化的问题</li></ol><p><strong>运行时态，runtime：</strong></p><ol><li>文件越少越好</li><li>文件体积越小越好</li><li>代码内容越乱越好</li><li>所有浏览器都要兼容</li><li>能够解决其他运行时的问题，主要是执行效率问题</li></ol><h3 id="webpack应运而生" tabindex="-1">webpack应运而生 <a class="header-anchor" href="#webpack应运而生" aria-label="Permalink to &quot;webpack应运而生&quot;">​</a></h3><p>我们需要一个工具（构建工具），能够将开发时态的代码转换成运行时态的代码，所以webpack应运而生,注意两个点：</p><ol><li>构建工具是在node环境运行的</li><li>打包后的代码不存在模块化的概念，就是一个函数，一个js文件</li></ol><h2 id="webpack的安装" tabindex="-1"><strong>webpack的安装</strong> <a class="header-anchor" href="#webpack的安装" aria-label="Permalink to &quot;**webpack的安装**&quot;">​</a></h2><h3 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> webpack</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --save-dev</span></span></code></pre></div><ul><li>webpack：核心包，包含了webpack构建过程中要用到的所有api</li><li>webpack-cli：提供一个简单的cli命令，它调用了webpack核心包的api，来完成构建过程</li></ul><h3 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> webpack</span></span></code></pre></div><h2 id="模块化兼容性" tabindex="-1"><strong>模块化兼容性</strong> <a class="header-anchor" href="#模块化兼容性" aria-label="Permalink to &quot;**模块化兼容性**&quot;">​</a></h2><p>不同模块化标准导入导出，webpack打包之后的处理结果如下</p><ul><li><p>使用es6导出，commonjs导入会得到一个包含default属性的对象 <img src="'+l+'" alt=""></p></li><li><p>使用commonjs导出，es6导入的时候需要使用<strong>导入默认值</strong>，或者<strong>全部导入</strong><img src="'+t+`" alt=""></p></li></ul><h2 id="编译结果" tabindex="-1">编译结果 <a class="header-anchor" href="#编译结果" aria-label="Permalink to &quot;编译结果&quot;">​</a></h2><p>手写一个webpack打包结果</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//不能造成全局变量污染，所以需要创建一个闭包</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">modules</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})()</span></span></code></pre></div><h2 id="webpack" tabindex="-1">webpack <a class="header-anchor" href="#webpack" aria-label="Permalink to &quot;webpack&quot;">​</a></h2><ul><li><p>babel 的原理</p><ol><li>parse: 把代码 code 变成 AST</li><li>traverse: 遍历 AST 进行修改</li><li>generate: 把 AST 变成代码 code2 即 code --(1)-&gt; ast --(2)-&gt; ast2 --(3)-&gt; code2</li></ol></li><li><p>为什么必须使用AST</p><ul><li>你很难用正则表达式来替换，正则很容易把 let a = &#39;let&#39; 变成 var a = &#39;var&#39;</li><li>你需要识别每个单词的意思，才能做到只修改用于声明变量的 let</li><li>而 AST 能明确地告诉你每个 let 的意思</li></ul></li></ul>`,29),o=[p];function r(h,c,k,d,b,g){return e(),i("div",null,o)}const w=a(n,[["render",r]]);export{m as __pageData,w as default};
