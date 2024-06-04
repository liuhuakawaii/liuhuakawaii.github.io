import{_ as s,c as i,o as a,a3 as n}from"./chunks/framework.DpzXWsSh.js";const g=JSON.parse('{"title":"如何中断前端网络请求？","description":"","frontmatter":{"title":"如何中断前端网络请求？","date":"2022-6-05","categories":["javascript","面试"]},"headers":[],"relativePath":"blogs/javascript/jstips/20220605.md","filePath":"blogs/javascript/jstips/20220605.md"}'),l={name:"blogs/javascript/jstips/20220605.md"},t=n(`<h2 id="如何中断前端网络请求" tabindex="-1">如何中断前端网络请求？ <a class="header-anchor" href="#如何中断前端网络请求" aria-label="Permalink to &quot;如何中断前端网络请求？&quot;">​</a></h2><ol><li><p><strong>应用场景</strong></p><ul><li><strong>重复请求</strong>：页面多个组件在mount时并发调用同一个接口，在第一个请求返回后，中断其他接口的调用（业务场景需要，如组件高度复用，不依赖公共api）。</li><li><strong>竞态请求</strong>：页面<strong>定时轮询</strong>发起请求，上一个请求响应速度比下一个响应速度慢，则前者响应会覆盖后者，从而导致数据错乱。</li><li><strong>无效请求</strong>：（如单页应用中侧边栏菜单路由切换），组件mount后由于加载过慢，路由跳转后组件卸载，但是请求没有中断，当接口错误时，会在其他页面弹出错误提示。</li><li><strong>大文件上传实现进度的暂停、恢复</strong></li></ul></li><li><p><strong>了解底层原理</strong></p><ul><li>引用出处：<a href="https://juejin.cn/post/7033906910583586829" target="_blank" rel="noreferrer"></a></li></ul><ol><li><p><code>axios</code></p><ul><li><code>axios</code> 是基于<code>AJAX</code>封装的，底层调的是<code>XMLHttpRequest</code></li><li>中断<code>Axios</code>如果该请求已被发出，<code>XMLHttpRequest.abort()</code>方法将终止该请求，当一个请求被终止，它的<code>readyState</code>将被置为<code>XMLHttpRequest.UNSENT(0)</code>，并且请求的<code>status</code>置为<code>0</code>。</li><li><code>Axios</code>内置<code>CancelToken</code>类，并且<code>new</code>时可以传入回调函数，回调函数接受一个参数<code>cancel</code>函数，<code>CancelToken</code>会把取消回调注入给参数<code>callback</code>，外部使用<code>cancelCallback</code>接收。 <ol><li>使用 <code>CancelToken.souce</code> 工厂方法创建一个 <code>cancel token</code>，代码如下：<div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">     const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> CancelToken</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> axios.CancelToken; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//\`CancelToken\`构造函数生成\`cancel\`函数 </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">     const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> source</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CancelToken.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">source</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//\`CancelToken.source()\`生成取消令牌\`token\` </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     axios.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;https://mdn.github.io/dom-examples/abort-api/sintel.mp4&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">       cancelToken: source.token</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     }).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">catch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">thrown</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">       // 判断请求是否已中止</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">       if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (axios.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">isCancel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(thrown)) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">         // 参数 thrown 是自定义的信息</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">         console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Request canceled&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, thrown.message);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">       } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">         // 处理错误</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">       }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     });</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     // 取消请求（message 参数是可选的）</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     source.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cancel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Operation canceled by the user.&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div></li><li>通过传递一个 <code>executor</code> 函数到 <code>CancelToken</code> 的构造函数来创建一个 <code>cancel token</code><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> CancelToken</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> axios.CancelToken;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> cancel;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    axios.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/user/12345&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      cancelToken: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CancelToken</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> executor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">c</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // executor 函数接收一个 cancel 函数作为参数</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        cancel </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> c;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    });</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 取消请求</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    cancel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Operation canceled by the user.&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div></li></ol></li></ul></li><li><p><code>fecth</code></p><ul><li><code>Fetch</code>是H5新添加的功能，在低版本是不支持的，比如：ie。为了中断<code>Fetch</code>请求跟随出现了<code>AbortController</code>一个控制器对象，允许你根据需要中止一个或者多个web请求。</li><li><code>AbortController</code>通过在请求中传入信号源，然后在需要中断请求的时候通过<code>abort</code>方法进行中断请求。</li><li><code>AbortController</code>类生成会返回<code>abort</code>中断请求的方法和<code>signal</code>中断请求匹配的信号源。<div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 1. 创建 abortController 对象</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> abortControllerObj</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> AbortController</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 2. 创建信号源</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> signal</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> abortControllerObj.signal</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 3. 使用</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> request</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> async</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">     try</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">       const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ret</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> fetch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/api/task/list&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, { signal })</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">       return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ret</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">catch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">       console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(error)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 4. 中断</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    abortControllerObj.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">abort</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span></code></pre></div></li></ul></li></ol></li></ol>`,2),e=[t];function h(k,p,r,d,c,o){return a(),i("div",null,e)}const y=s(l,[["render",h]]);export{g as __pageData,y as default};