import{_ as l,c as i,o as e,a3 as t}from"./chunks/framework.DpzXWsSh.js";const o="/assets/20240328_TcpIp.DWDpyy31.png",u="/assets/20240328_URL.2lt9asvN.jpg",a="/assets/20240328_DNS.C3BWMZux.png",r="/assets/20240328_CDN.DGhfJ7fz.png",C=JSON.parse('{"title":"计算机与网络","description":"","frontmatter":{"title":"计算机与网络","date":"2024-3-28","categories":["浏览器","面试"]},"headers":[],"relativePath":"blogs/interview/20240328.md","filePath":"blogs/interview/20240328.md"}'),n={name:"blogs/interview/20240328.md"},s=t('<h2 id="计算机与网络" tabindex="-1">计算机与网络 <a class="header-anchor" href="#计算机与网络" aria-label="Permalink to &quot;计算机与网络&quot;">​</a></h2><h3 id="互联网协议群" tabindex="-1">互联网协议群 <a class="header-anchor" href="#互联网协议群" aria-label="Permalink to &quot;互联网协议群&quot;">​</a></h3><ol><li>类似于OSI模型，一种网络协议的概念模型</li></ol><ul><li>应用层：提供应用间通信能力（http协议）</li><li>传输层：提供主机到主机（host-to-host）的通信能力（TCP/UDP协议），端口号代表的是应用</li><li>网络层：提供地址到地址的通信能力（IP协议）</li><li>链接层：提供设备到设备的通信能力（多种底层网络协议Ethernet，Wi-Fi）</li><li>物理层</li></ul><ol start="2"><li>TCP/IP协议</li></ol><ul><li>三次握手 <ul><li>流程图 <img src="'+o+'" alt=""></li><li>为什么需要三次握手：计算机对话和人对话的区别</li></ul></li><li>处理数据接收发送顺序问题 <ul><li>消息的绝对顺序用（SEQ,ACK）这一对元组描述 <ul><li>SEQ（Sequence）:这个消息发送前一共发送了多少字节</li><li>ACK（AcKnowledge）:这个消息发送前一共收到了多少字节</li></ul></li></ul></li><li>中断连接也需要四次挥手，服务端反馈，这样才能保持可靠性，以免客户端还有发送到服务端但没有收到/服务端发送回客户端，客户端没有收到的消息。</li></ul><h3 id="dns和cdn" tabindex="-1">DNS和CDN <a class="header-anchor" href="#dns和cdn" aria-label="Permalink to &quot;DNS和CDN&quot;">​</a></h3><ol><li><p>统一资源定位符（URL） 也被称作网址，用于定位互联网上的资源 <img src="'+u+'" alt=""></p></li><li><p>DNS(Domain Name System)域名系统 <img src="'+a+'" alt=""></p></li></ol><ul><li><p>DNS资源记录（Resource Record）</p><ul><li>A记录（最常见）：定义主机的IP地址</li><li>AAAA记录：定义主机的IPv6地址</li><li>CNAME记录（Canonical Name Record）：定义域名的别名</li><li>MX记录：定义邮件服务器</li><li>NS记录：定义提供dns信息的服务器</li><li>TXT记录：定义文本信息</li><li>SOA记录：定义在多个ns服务器中哪个是主服务器</li></ul></li><li><p>DNS查询工具（实操）</p><ul><li>dig（DNS lookup utility）：用来查询dns的小工具</li><li>nslookup：交互式查询域名服务工具</li><li>host（DNS lookup utility）</li></ul></li><li><p>本地host修改(实操)</p><ul><li>Window/Linux/Mac等host文件修改</li><li>Switchhost工具</li></ul></li></ul><ol start="3"><li>内容分发网络（Content Delivery Network）</li></ol><ul><li>基于地理位置的分布式代理服务器/数据中心 <ul><li>提高可用性</li><li>提升性能</li><li>提升体验 <img src="'+r+`" alt=""></li></ul></li></ul><h3 id="http协议" tabindex="-1">HTTP协议 <a class="header-anchor" href="#http协议" aria-label="Permalink to &quot;HTTP协议&quot;">​</a></h3><ol><li>HTTP协议</li></ol><ul><li>超文本传输协议(Hyper Text Transfer Protocol)</li><li>处理客户端和服务端之间的通信</li><li>http请求/http返回</li><li>网页/json/xml/提交表单……</li><li>纯文本+无状态（Stateless） <ul><li>应用层协议（下面可以是TCP/IP）信息纯文本传输</li><li>无状态 <ul><li>每次请求独立</li><li>请求间互不影响</li></ul></li><li>浏览器提供了手段维护状态(Cookie, Session, * Storage等)</li></ul></li></ul><ol start="2"><li>HTTP设计考虑因素</li><li>基础因素 + 带宽 <ul><li>基础网络(线路、设备等)</li></ul></li></ol><pre><code>+ 延迟
  - 浏览器
  - DNS查询
  - 建立连接(TCP三次握手)
</code></pre><ol start="2"><li>缓存与带宽优化 + 缓存 <ul><li>(http1.0)提供缓存机制如IF-Modified-Since等基础缓存控制策略</li><li>(http1.1)提供E-Tag等高级缓存策略</li></ul></li></ol><pre><code>+ 带宽优化
  - (http1.1)利用range头获取文件的某个部分
  - (http1.1)利用长连接让多个请求在一个TCP连接上排队
  - (http2.0)利用多路复用技术同时传输多个请求
</code></pre><ol start="3"><li>压缩/安全性 + 压缩 <ul><li>主流web服务器如nginx/express等都提供gzip压缩功能</li><li>(htto2.0)采用二进制传输，头部使用HPACK算法压缩</li></ul></li></ol><pre><code>+ HTTPS
  - 在HTTP和TCP/IP之间增加TSL/SSL层
  - 数据传输加密(非对称+对称加密)
</code></pre><ol start="3"><li>HTTPS</li></ol><ul><li>安全超文本传输协议(Hyper Text Transfer Protocol Secure)</li><li>数据加密传输 <ul><li>防止各种攻击手段(信息泄露、篡改等)</li></ul></li><li>SSL/TSL(Secure Socket Layer/Transport Layer Secure) <ul><li>SSL-安全套接层</li><li>TSL-传输层安全性协议</li><li>需要再客户端安装证书</li></ul></li></ul><ol start="4"><li>cURL</li></ol><ul><li>curl -I url ：获取header</li></ul><ol start="5"><li>常见请求头</li></ol><ul><li>Method <ul><li>GET：从服务器获取资源</li><li>POST：在服务器创建资源</li><li>PUT：在服务器修改资源（幂等性：多次请求对服务器影响一样）</li><li>DELETE：在服务器删除资源</li><li>OPTIONS：获取支持的请求方法</li><li>TRACE：用于调试信息（多数网站不支持）</li><li>CONNECT：建立代理连接</li></ul></li><li>状态码 <ul><li>1xx：信息 <ul><li>100 continue</li><li>101切换协议(switch protocol)</li></ul></li><li>2xx：成功 <ul><li>200 - oK</li><li>201 - Created已创建</li><li>202 - Accepted已接收（客户端应该轮询）</li><li>203 - Non-Authoritative lnformation非权威内容</li><li>204 - No Content没有内容</li><li>205 - Reset Content重置内容（客户端应该清空表单）</li><li>206 - Partial Content服务器下发了部分内容(range header)</li></ul></li><li>3xx：重定向 <ul><li>300 - Multiple Choices用户请求了多个选项的资源(返回选项列表)</li><li>301 - Moved Permanently永久转移</li><li>302 - Found资源被找到（以前是临时转移）</li><li>303 - See Other可以使用GET方法在另一个URL找到资源</li><li>304 - Not Modified没有修改(缓存部分特别说明)</li><li>305 - Use Proxy需要代理</li><li>307- Temporary Redirect 临时重定向</li><li>308 - Permanent Redirect永久重定向</li><li>面试解惑:301 VS 308 <ul><li>共同点 <ul><li>资源被永久移动到新的地址</li></ul></li><li>差异 <ul><li>客户端收到308请求后，之前是什么method，那么之后也会延用这个method(POST/GET/PUT)到新地址</li><li>客户端收到301请求后，通常用户会向新地址发起GET请求</li></ul></li></ul></li><li>面试解惑:302/303/307 <ul><li>共同点 <ul><li>资源临时放到新地址(请不要缓存)</li></ul></li><li>差异 <ul><li>302是http1.0提出的，最早叫做Moved Temporarily;很多浏览器实现的时候没有遵照标准，把所有请求都重定向为GET</li><li>1999年标准委员会增加了303和307，并将302重新定义为Found。</li><li>303告诉客户端使用GET方法重定向资源</li><li>307告诉客户端使用原请求的method重定向资源</li></ul></li></ul></li></ul></li><li>4xx：客户端错误 <ul><li>400 - Bad Request请求格式错误</li><li>401 - Unauthorized未授权</li><li>402 - Payment Required请先付费</li><li>403 - Forbidden禁止访问</li><li>404 - Not Found未找到</li><li>405 - Method Not Allowed请求方法不允许</li><li>406 - Not Acceptable服务端可以提供的内容和客户端期待的不一样</li></ul></li><li>5xx：服务器错误 <ul><li>500 - Internal Server Error服务器内部错误</li><li>501 - Not lmplemented(没有实现)</li><li>502 - Bad Gateway网关错误</li><li>503 - Service Unavailable服务器不可用</li><li>504 - Gateway Timeout网关超时</li><li>505 - HTTP Version Not Supported不支持的HTTP版本</li></ul></li></ul></li><li>Content-Length <ul><li>发送给接收者的Body内容长度（字节） <ul><li>一个byte是8bit</li><li>Utf-8编码的字符1-4个字节</li></ul></li></ul></li><li>User-Agent <ul><li>帮助区分客户端特性的字符串: 操作系统/浏览器/制造商(手机类型等)/内核类型/版本号……</li></ul></li><li>Content-Type <ul><li>帮助区分资源的媒体类型(Media Type/MIME Type) <ul><li>text/html, application/json, text/css, image/jpeg...</li></ul></li></ul></li><li>Origin <ul><li>描述请求来源地址 <ul><li>scheme://host:port.</li><li>不含路径</li><li>可以是null</li></ul></li></ul></li><li>Accept(建议类/与服务器协商) <ul><li>建议服务端返回何种媒体类型(MIME Type)。 <ul><li>*/*代表所有类型(默认)</li><li>多个类型用逗号隔开例如:text/html, application/json</li></ul></li><li>Accept-Encoding: 建议服务端发送哪种编码（压缩算法）</li></ul></li><li>Referer <ul><li>告诉服务端打开当前页面的上一张页面的URL;如果是ajax请求那么就告诉服务端发送请求的URL的什么 <ul><li>非浏览器环境有时候不发送Referer(或者虚拟Referer,通常是爬虫)。</li><li>常常用户用户行为分析</li></ul></li></ul></li><li>Connection <ul><li>决定连接是否在当前事务完成后关闭 <ul><li>Http1.0默认是close</li><li>Http1.1后默认是keep-alive</li></ul></li></ul></li></ul><ol start="6"><li>常见返回头</li></ol><ul><li>协议版本状态码</li><li>X-Powered-By</li><li>日期</li><li>Connection</li><li>Content-Length</li></ul>`,28),c=[s];function p(d,h,T,S,P,m){return e(),i("div",null,c)}const N=l(n,[["render",p]]);export{C as __pageData,N as default};