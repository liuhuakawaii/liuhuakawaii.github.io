import{_ as l,c as i,o as e,a3 as o}from"./chunks/framework.DpzXWsSh.js";const a="/assets/01.T8iszJym.png",b=JSON.parse('{"title":"web缓存","description":"","frontmatter":{"title":"web缓存","date":"2022-10-12T00:00:00.000Z","categories":["浏览器","面试"]},"headers":[],"relativePath":"blogs/interview/20221012.md","filePath":"blogs/interview/20221012.md"}'),t={name:"blogs/interview/20221012.md"},r=o('<h2 id="资源转载引入" tabindex="-1">资源转载引入 <a class="header-anchor" href="#资源转载引入" aria-label="Permalink to &quot;资源转载引入&quot;">​</a></h2><p><a href="https://juejin.cn/post/7127194919235485733" target="_blank" rel="noreferrer"></a></p><h2 id="web缓存" tabindex="-1">web缓存 <a class="header-anchor" href="#web缓存" aria-label="Permalink to &quot;web缓存&quot;">​</a></h2><ol><li>web缓存主要包括两部分 <ul><li>浏览器缓存（localStoorage，sessionStorage，cookie）</li><li>http缓存（强缓存，协商缓存）</li></ul></li></ol><h2 id="浏览器缓存" tabindex="-1">浏览器缓存 <a class="header-anchor" href="#浏览器缓存" aria-label="Permalink to &quot;浏览器缓存&quot;">​</a></h2><ol><li>相同点 <ul><li>localStoorage，sessionStorage都是用来存储客户端数据的，被称为前端缓存或webStorage</li><li>存储大小都是5M</li><li>都只能存储字符串类型的数据</li></ul></li><li>区别 <ol><li>通信问题</li></ol><ul><li>sessionStorage不可进行跨页面客户端通讯（不过同页面下嵌套的iframe属于同源，可以通讯），不参与服务器通信</li><li>cookie参与服务器通信，每次都会携带在http头中，如果使用过多数据会带来性能问题</li></ul><ol start="2"><li>生命周期</li></ol><ul><li>sessStorage生命周期基于浏览器页面，存储的数据会在页面关闭时自动清除，刷新不会消失，同一页面不同窗口也不同</li><li>localStoorage除非我们手动清除，不然不会消失</li><li>cookie生命周期和设置的过期时间有关，存放大小只有4k左右</li></ul></li><li>应用场景 <ol><li>localStoorage长期有效的自动登录</li><li>sessStorage短期有效的自动登录</li></ol></li></ol><h2 id="http缓存" tabindex="-1">http缓存 <a class="header-anchor" href="#http缓存" aria-label="Permalink to &quot;http缓存&quot;">​</a></h2><ol><li>缓存目标 <ul><li>主要是针对html,css,img等静态资源，缓存动态资源会影响数据的实时性</li></ul></li><li>优缺点 <ul><li>减少不必要的网络传输，节约宽带（就是省钱）</li><li>更快的加载页面（就是加速）</li><li>减少服务器负载，避免服务器过载的情况出现。（就是减载）</li><li>占内存（有些缓存会被存到内存中）</li></ul></li><li>流程图<br><img src="'+a+'" alt=""></li></ol><h2 id="强制缓存" tabindex="-1">强制缓存 <a class="header-anchor" href="#强制缓存" aria-label="Permalink to &quot;强制缓存&quot;">​</a></h2><ol><li>基于Expires <ul><li>设定一个强缓存时间。在此时间范围内，则从内存（或磁盘）中读取缓存返回</li><li>过渡依赖本地时间，如果本地时间与服务器不同步，则可能出现无法命中缓存问题或者永远命中缓存问题。</li><li>已经废弃，除非需要向下兼容使用</li></ul></li><li>基于Cache-control <ol><li>属性</li></ol><ul><li>max-age：决定客户端资源被缓存多久</li><li>s-maxage：决定代理服务器缓存的时长</li><li>no-cache：表示是强制进行协商缓存（跳过强缓存）</li><li>no-store：是表示禁止任何缓存策略</li><li>public：表示资源即可以被浏览器缓存也可以被代理服务器缓存</li><li>private：表示资源只能被浏览器缓存（默认值）</li></ul><ol start="2"><li>示例：</li></ol><ul><li><code>Cache-Control:max-age=N</code>，N就是需要缓存的秒数。从第一次请求资源的时候开始，往后N秒内，资源若再次请求，则直接从磁盘（或内存中读取），不与服务器做任何交互。</li></ul></li><li>强缓存的问题 <ul><li>html页面一般不做强缓存，每一次html的请求都是正常的http请求</li><li>服务器更新资源之后，让资源名称和之前不一样，这样页面都是最新资源（webpack打包的时候会生成文件名hash name）</li></ul></li></ol><h2 id="协商缓存" tabindex="-1">协商缓存 <a class="header-anchor" href="#协商缓存" aria-label="Permalink to &quot;协商缓存&quot;">​</a></h2><ol><li>基于last-modified（基于时间戳） <ol><li>实现方式 <ul><li>首先需要在服务器端读出文件修改时间</li><li>将读出来的修改时间赋给响应头的<code>last-modified</code>字段</li><li>最后设置<code>Cache-control:no-cache</code></li><li>客户端读取到<code>last-modified</code>的时候，会在下次的请求标头中携带<code>If-Modified-Since</code></li><li>服务端对比两个修改时间，决定是读取缓存还是返回新资源</li></ul></li><li>缺点 <ul><li>如果是文件名更改，不是内容改变，修改时间也会变化</li><li>如果修改时间非常非常短，服务器没法对比，也不会返回最新资源</li></ul></li></ol></li><li>基于Etag（基于文件指纹--文件哈希值） <ol><li>实现方式 <ul><li>第一次请求某资源的时候，服务端读取文件并计算出文件指纹，将文件指纹放在响应头的etag字段中跟资源一起返回给客户端</li><li>第二次请求某资源的时候，客户端自动从缓存中读取出上一次服务端返回的ETag也就是文件指纹。并赋给请求头的<code>if-None-Match</code>字段，让上一次的文件指纹跟随请求一起回到服务端</li><li>服务端拿到请求头中的<code>is-None-Match</code>字段值（也就是上一次的文件指纹），并再次读取目标资源并生成文件指纹，两个指纹做对比。如果两个文件指纹完全吻合，说明文件没有被改变，则直接返回304状态码和一个空的响应体并return。如果两个文件指纹不吻合，则说明文件被更改，那么将新的文件指纹重新存储到响应头的ETag中并返回给客户端</li></ul></li><li>缺点 <ul><li>服务端计算文件指纹需要更多开销，影响性能</li><li>强验证，哪怕文件中只有一个字节改变了，也会生成不同的哈希值，非常消耗性能，弱验证只提取部分文件属性计算哈希值，整体速度快，准确率不高</li></ul></li></ol></li></ol><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><ol><li>有哈希值的文件设置强缓存即可。没有哈希值的文件（比如<code>index.html</code>）设置协商缓存</li><li>http缓存可以减少宽带流量，加快响应速度</li><li>关于强缓存，cache-control是Expires的完全替代方案，在可以使用cache-control的情况下不要使用expires</li><li>关于协商缓存,etag并不是last-modified的完全替代方案，而是补充方案，具体用哪一个，取决于业务场景</li><li>有些缓存是从磁盘读取，有些缓存是从内存读取，有什么区别？答：从内存读取的缓存更快</li></ol>',14),c=[r];function s(h,n,d,u,m,p){return e(),i("div",null,c)}const g=l(t,[["render",s]]);export{b as __pageData,g as default};
