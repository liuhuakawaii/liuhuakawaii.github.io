import{_ as i,c as s,o as a,a3 as l}from"./chunks/framework.DpzXWsSh.js";const c=JSON.parse('{"title":"面试题汇总 - 浏览器","description":"","frontmatter":{"title":"面试题汇总 - 浏览器","date":"2024-11-19T00:00:00.000Z","categories":["面试"]},"headers":[],"relativePath":"blogs/interview/20241117.md","filePath":"blogs/interview/20241117.md"}'),t={name:"blogs/interview/20241117.md"},n=l(`<h1 id="🌈-浏览器核心知识点" tabindex="-1">🌈 浏览器核心知识点 <a class="header-anchor" href="#🌈-浏览器核心知识点" aria-label="Permalink to &quot;🌈 浏览器核心知识点&quot;">​</a></h1><h2 id="🎨-渲染机制" tabindex="-1">🎨 渲染机制 <a class="header-anchor" href="#🎨-渲染机制" aria-label="Permalink to &quot;🎨 渲染机制&quot;">​</a></h2><h3 id="_1-重绘和重排-repaint-reflow" tabindex="-1">1. 重绘和重排 (Repaint &amp; Reflow) <a class="header-anchor" href="#_1-重绘和重排-repaint-reflow" aria-label="Permalink to &quot;1. 重绘和重排 (Repaint &amp; Reflow)&quot;">​</a></h3><p><strong>渲染过程</strong> 📝</p><ol><li>解析 HTML 和 CSS → DOM树 + 样式规则树</li><li>合并生成渲染树(Render Tree)</li><li>Layout(重排/回流): 计算元素位置和大小</li><li>Paint(重绘): 绘制元素外观</li><li>Composite: GPU合成显示</li></ol><p><strong>性能优化建议</strong> ⚡</p><ul><li>避免频繁操作样式,最好一次性重写style属性</li><li>使用 class 批量修改样式</li><li>避免频繁操作DOM,创建文档片段DocumentFragment</li><li>对复杂动画使用绝对定位,使其脱离文档流</li><li>使用 transform/opacity 等属性实现动画效果</li><li>使用 requestAnimationFrame 执行动画</li><li>对大量操作,使用防抖和节流处理</li></ul><h3 id="_2-浏览器和node事件循环对比-⚖️" tabindex="-1">2. 浏览器和Node事件循环对比 ⚖️ <a class="header-anchor" href="#_2-浏览器和node事件循环对比-⚖️" aria-label="Permalink to &quot;2. 浏览器和Node事件循环对比 ⚖️&quot;">​</a></h3><p><strong>浏览器事件循环</strong></p><ul><li>宏任务(macro-task): setTimeout、setInterval、script、UI渲染等</li><li>微任务(micro-task): Promise、MutationObserver等</li><li>执行顺序: 执行栈 → 微任务队列 → 宏任务队列</li></ul><p><strong>Node事件循环</strong> 六个阶段依次执行:</p><ol><li>timers: 执行setTimeout/setInterval回调</li><li>pending callbacks: 执行系统操作的回调</li><li>idle, prepare: 内部使用</li><li>poll: 获取新的I/O事件</li><li>check: 执行setImmediate回调</li><li>close callbacks: 执行关闭事件回调</li></ol><h2 id="📦-浏览器缓存" tabindex="-1">📦 浏览器缓存 <a class="header-anchor" href="#📦-浏览器缓存" aria-label="Permalink to &quot;📦 浏览器缓存&quot;">​</a></h2><h3 id="_3-缓存机制" tabindex="-1">3. 缓存机制 <a class="header-anchor" href="#_3-缓存机制" aria-label="Permalink to &quot;3. 缓存机制&quot;">​</a></h3><p><strong>缓存位置</strong> (优先级从高到低):</p><ol><li><p>Service Worker</p><ul><li>运行在浏览器背后的独立线程</li><li>可以实现离线缓存、消息推送和网络代理</li><li>必须在HTTPS环境下才能工作</li></ul></li><li><p>Memory Cache</p><ul><li>内存缓存</li><li>快速读取但持续时间短</li><li>常用于页面内的资源重复请求</li></ul></li><li><p>Disk Cache</p><ul><li>硬盘缓存</li><li>容量大,存储时间长</li><li>根据HTTP头信息来判断是否缓存</li></ul></li></ol><p><strong>缓存策略</strong> 🔄</p><ol><li>强缓存:</li></ol><div class="language-http vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Cache-Control</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> max-age=31536000</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Expires</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Wed, 21 Oct 2025 07:28:00 GMT</span></span></code></pre></div><ol start="2"><li>协商缓存:</li></ol><div class="language-http vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">ETag</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;33a64df551425fcc55e4d42a148795d9f25f89d4&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Last-Modified</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Wed, 21 Oct 2023 07:28:00 GMT</span></span></code></pre></div><h3 id="_4-埋点统计-1x1-gif-👀" tabindex="-1">4. 埋点统计 1x1 GIF 👀 <a class="header-anchor" href="#_4-埋点统计-1x1-gif-👀" aria-label="Permalink to &quot;4. 埋点统计 1x1 GIF 👀&quot;">​</a></h3><p><strong>为什么使用 1x1 GIF?</strong></p><ul><li>支持跨域</li><li>体积最小(43字节)</li><li>不会阻塞页面加载</li><li>完整度监测</li><li>相比PNG格式更小</li></ul><p>示例代码:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> reportData</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> img</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  img.src </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`http://analytics-server.com/collect?data=\${</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">encodeURIComponent</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">JSON</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stringify</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">data</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">))</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="🛡️-安全机制" tabindex="-1">🛡️ 安全机制 <a class="header-anchor" href="#🛡️-安全机制" aria-label="Permalink to &quot;🛡️ 安全机制&quot;">​</a></h2><h3 id="_5-同源策略" tabindex="-1">5. 同源策略 <a class="header-anchor" href="#_5-同源策略" aria-label="Permalink to &quot;5. 同源策略&quot;">​</a></h3><p><strong>同源定义</strong>: 协议、域名、端口都相同</p><p><strong>限制范围</strong>:</p><ul><li>Ajax 请求</li><li>DOM 操作</li><li>Cookie、LocalStorage 和 IndexDB 访问</li></ul><p><strong>不受限制的元素</strong>:</p><ul><li><code>&lt;img src=&quot;...&quot;&gt;</code></li><li><code>&lt;link href=&quot;...&quot;&gt;</code></li><li><code>&lt;script src=&quot;...&quot;&gt;</code></li><li><code>&lt;iframe src=&quot;...&quot;&gt;</code></li></ul><h3 id="_6-跨域解决方案-🌉" tabindex="-1">6. 跨域解决方案 🌉 <a class="header-anchor" href="#_6-跨域解决方案-🌉" aria-label="Permalink to &quot;6. 跨域解决方案 🌉&quot;">​</a></h3><ol><li><strong>CORS</strong></li></ol><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 服务器设置</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Access</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Control</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Allow</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Origin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Access</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Control</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Allow</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Methods</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">GET</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">POST</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Access</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Control</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Allow</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Headers</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: Content</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Type</span></span></code></pre></div><ol start="2"><li><strong>JSONP</strong></li></ol><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> handleResponse</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> script</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createElement</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;script&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">script.src </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;http://api.example.com/data?callback=handleResponse&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">document.body.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">appendChild</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(script);</span></span></code></pre></div><ol start="3"><li><strong>代理服务器</strong></li></ol><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Nginx配置</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">location</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> /api </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  proxy_pass </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">http://real-server.com;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="🎯-性能优化" tabindex="-1">🎯 性能优化 <a class="header-anchor" href="#🎯-性能优化" aria-label="Permalink to &quot;🎯 性能优化&quot;">​</a></h2><h3 id="_7-资源优化策略" tabindex="-1">7. 资源优化策略 <a class="header-anchor" href="#_7-资源优化策略" aria-label="Permalink to &quot;7. 资源优化策略&quot;">​</a></h3><ol><li><strong>多域名存储</strong></li></ol><ul><li>突破浏览器并发限制</li><li>CDN就近访问</li><li>Cookie隔离</li></ul><ol start="2"><li><strong>图片优化</strong></li></ol><ul><li>使用WebP格式</li><li>懒加载</li><li>响应式图片</li></ul><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">picture</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">source</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> media</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;(min-width: 800px)&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> srcset</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;large.jpg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">source</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> media</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;(min-width: 400px)&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> srcset</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;medium.jpg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">img</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;small.jpg&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> alt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;图片&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">picture</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><ol start="3"><li><strong>静态资源优化</strong></li></ol><ul><li>文件压缩</li><li>使用HTTP/2</li><li>开启Gzip压缩</li><li>合理使用缓存策略</li></ul><h3 id="_8-seo优化-🔍" tabindex="-1">8. SEO优化 🔍 <a class="header-anchor" href="#_8-seo优化-🔍" aria-label="Permalink to &quot;8. SEO优化 🔍&quot;">​</a></h3><ol><li><strong>基础优化</strong></li></ol><ul><li>语义化HTML标签</li><li>合理的title、description、keywords</li><li>图片添加alt属性</li><li>URL语义化</li></ul><ol start="2"><li><strong>内容优化</strong></li></ol><ul><li>核心内容提前加载</li><li>避免重复内容</li><li>保持更新频率</li><li>内部链接建设</li></ul><ol start="3"><li><strong>技术优化</strong></li></ol><ul><li>服务端渲染(SSR)</li><li>控制页面大小</li><li>提升加载速度</li><li>移动端适配</li></ul><h2 id="🔧-开发调试" tabindex="-1">🔧 开发调试 <a class="header-anchor" href="#🔧-开发调试" aria-label="Permalink to &quot;🔧 开发调试&quot;">​</a></h2><h3 id="_9-常用调试工具" tabindex="-1">9. 常用调试工具 <a class="header-anchor" href="#_9-常用调试工具" aria-label="Permalink to &quot;9. 常用调试工具&quot;">​</a></h3><ol><li><strong>Chrome DevTools</strong></li></ol><ul><li>Elements: DOM和样式检查</li><li>Console: 日志和命令行</li><li>Sources: 断点调试</li><li>Network: 网络请求分析</li><li>Performance: 性能分析</li><li>Application: 存储查看</li></ul><ol start="2"><li><strong>常用命令</strong></li></ol><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 性能标记</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">time</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;标记名&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 代码执行</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">timeEnd</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;标记名&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 对象结构查看</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">dir</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(object);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 分组显示</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">group</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;组名&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;信息1&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;信息2&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">groupEnd</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><h2 id="📚-扩展阅读" tabindex="-1">📚 扩展阅读 <a class="header-anchor" href="#📚-扩展阅读" aria-label="Permalink to &quot;📚 扩展阅读&quot;">​</a></h2><ul><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/Performance" target="_blank" rel="noreferrer">深入浏览器原理</a></li><li><a href="https://developer.chrome.com/docs/devtools/" target="_blank" rel="noreferrer">Chrome开发者工具</a></li><li><a href="https://web.dev/performance" target="_blank" rel="noreferrer">Web性能优化</a></li></ul><blockquote><p>💡 Tips: 面试时要注意结合实际项目经验来回答问题,展示自己的技术深度和实践能力。</p></blockquote>`,65),h=[n];function e(p,k,r,o,d,E){return a(),s("div",null,h)}const y=i(t,[["render",e]]);export{c as __pageData,y as default};