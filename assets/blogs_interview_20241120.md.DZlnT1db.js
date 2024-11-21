import{_ as t,c as e,o,a3 as p}from"./chunks/framework.DpzXWsSh.js";const b=JSON.parse('{"title":"面试题汇总 - 网络","description":"","frontmatter":{"title":"面试题汇总 - 网络","date":"2024-11-20T00:00:00.000Z","categories":["面试"]},"headers":[],"relativePath":"blogs/interview/20241120.md","filePath":"blogs/interview/20241120.md"}'),l={name:"blogs/interview/20241120.md"},a=p('<h1 id="计算机网络面试题汇总" tabindex="-1">计算机网络面试题汇总 <a class="header-anchor" href="#计算机网络面试题汇总" aria-label="Permalink to &quot;计算机网络面试题汇总&quot;">​</a></h1><h3 id="_1-简述-tcp-连接的过程-淘系" tabindex="-1">1. 简述 TCP 连接的过程（淘系） <a class="header-anchor" href="#_1-简述-tcp-连接的过程-淘系" aria-label="Permalink to &quot;1. 简述 TCP 连接的过程（淘系）&quot;">​</a></h3><blockquote><p>参考答案：</p><p>TCP 协议通过三次握手建立可靠的点对点连接，具体过程是：</p><p>首先服务器进入监听状态，然后即可处理连接</p><p>第一次握手：建立连接时，客户端发送 syn 包到服务器，并进入 SYN_SENT 状态，等待服务器确认。在发送的包中还会包含一个初始序列号 seq。此次握手的含义是客户端希望与服务器建立连接。</p><p>第二次握手：服务器收到 syn 包，然后回应给客户端一个 SYN+ACK 包，此时服务器进入 SYN_RCVD 状态。此次握手的含义是服务端回应客户端，表示已收到并同意客户端的连接请求。</p><p>第三次握手：客户端收到服务器的 SYN 包后，向服务器再次发送 ACK 包，并进入 ESTAB_LISHED 状态。</p><p>最后，服务端收到客户端的 ACK 包，于是也进入 ESTAB_LISHED 状态，至此，连接建立完成</p></blockquote><h3 id="_2-介绍下-https-中间人攻击" tabindex="-1">2. 介绍下 HTTPS 中间人攻击 <a class="header-anchor" href="#_2-介绍下-https-中间人攻击" aria-label="Permalink to &quot;2. 介绍下 HTTPS 中间人攻击&quot;">​</a></h3><blockquote><p>参考答案：</p><p>针对 HTTPS 攻击主要有 SSL 劫持攻击和 SSL 剥离攻击两种。</p><p>SSL 劫持攻击是指攻击者劫持了客户端和服务器之间的连接，将服务器的合法证书替换为伪造的证书，从而获取客户端和服务器之间传递的信息。这种方式一般容易被用户发现，浏览器会明确的提示证书错误，但某些用户安全意识不强，可能会点击继续浏览，从而达到攻击目的。</p><p>SSL 剥离攻击是指攻击者劫持了客户端和服务器之间的连接，攻击者保持自己和服务器之间的 HTTPS 连接，但发送给客户端普通的 HTTP 连接，由于 HTTP 连接是明文传输的，即可获取客户端传输的所有明文数据。</p></blockquote><h3 id="_3-介绍下-http1-0、http1-1、http2-0-协议的区别" tabindex="-1">3. 介绍下 <code>http1.0</code>、<code>http1.1</code>、<code>http2.0</code> 协议的区别？ <a class="header-anchor" href="#_3-介绍下-http1-0、http1-1、http2-0-协议的区别" aria-label="Permalink to &quot;3. 介绍下 `http1.0`、`http1.1`、`http2.0` 协议的区别？&quot;">​</a></h3><blockquote><p>参考答案：</p><p>首先说 http1.0</p><p>它的特点是每次请求和响应完毕后都会销毁 TCP 连接，同时规定前一个响应完成后才能发送下一个请求。这样做有两个问题：</p><ol><li><p>无法复用连接</p><p>每次请求都要创建新的 TCP 连接，完成三次握手和四次挥手，网络利用率低</p></li><li><p>队头阻塞</p><p>如果前一个请求被某种原因阻塞了，会导致后续请求无法发送。</p></li></ol><p>然后是 http1.1</p><p>http1.1 是 http1.0 的改进版，它做出了以下改进：</p><ol><li><p>长连接</p><p>http1.1 允许在请求时增加请求头<code>connection:keep-alive</code>，这样便允许后续的客户端请求在一段时间内复用之前的 TCP 连接</p></li><li><p>管道化</p><p>基于长连接的基础，管道化可以不等第一个请求响应继续发送后面的请求，但响应的顺序还是按照请求的顺序返回。</p></li><li><p>缓存处理</p><p>新增响应头 cache-control，用于实现客户端缓存。</p></li><li><p>断点传输</p><p>在上传/下载资源时，如果资源过大，将其分割为多个部分，分别上传/下载，如果遇到网络故障，可以从已经上传/下载好的地方继续请求，不用从头开始，提高效率</p></li></ol><p>最后是 http2.0</p><p>http2.0 进一步优化了传输效率，它主要有以下改进：</p><ol><li><p>二进制分帧</p><p>将传输的消息分为更小的二进制帧，每帧有自己的标识序号，即便被随意打乱也能在另一端正确组装</p></li><li><p>多路复用</p><p>基于二进制分帧，在同一域名下所有访问都是从同一个 tcp 连接中走，并且不再有队头阻塞问题，也无须遵守响应顺序</p></li><li><p>头部压缩</p><p>http2.0 通过字典的形式，将头部中的常见信息替换为更少的字符，极大的减少了头部的数据量，从而实现更小的传输量</p></li><li><p>服务器推</p><p>http2.0 允许服务器直接推送消息给客户端，无须客户端明确的请求</p></li></ol></blockquote><h3 id="_4-为什么-http1-1-不能实现多路复用-腾讯" tabindex="-1">4. 为什么 HTTP1.1 不能实现多路复用（腾讯） <a class="header-anchor" href="#_4-为什么-http1-1-不能实现多路复用-腾讯" aria-label="Permalink to &quot;4. 为什么 HTTP1.1 不能实现多路复用（腾讯）&quot;">​</a></h3><blockquote><p>参考答案：</p><p>HTTP/1.1 不是二进制传输，而是通过文本进行传输。由于没有流的概念，在使用并行传输（多路复用）传递数据时，接收端在接收到响应后，并不能区分多个响应分别对应的请求，所以无法将多个响应的结果重新进行组装，也就实现不了多路复用。</p></blockquote><h3 id="_5-简单讲解一下-http2-的多路复用-网易" tabindex="-1">5. 简单讲解一下 http2 的多路复用（网易） <a class="header-anchor" href="#_5-简单讲解一下-http2-的多路复用-网易" aria-label="Permalink to &quot;5. 简单讲解一下 http2 的多路复用（网易）&quot;">​</a></h3><blockquote><p>参考答案：</p><p>在 HTTP/2 中，有两个非常重要的概念，分别是帧（frame）和流（stream）。 帧代表着最小的数据单位，每个帧会标识出该帧属于哪个流，流也就是多个帧组成的数据流。 多路复用，就是在一个 TCP 连接中可以存在多条流。换句话说，也就是可以发送多个请求，对端可以通过帧中的标识知道属于哪个请求。通过这个技术，可以避免 HTTP 旧版本中的队头阻塞问题，极大的提高传输性能。</p></blockquote><h3 id="_6-谈谈你对-tcp-三次握手和四次挥手的理解" tabindex="-1">6. 谈谈你对 TCP 三次握手和四次挥手的理解 <a class="header-anchor" href="#_6-谈谈你对-tcp-三次握手和四次挥手的理解" aria-label="Permalink to &quot;6. 谈谈你对 TCP 三次握手和四次挥手的理解&quot;">​</a></h3><blockquote><p>TCP 协议通过三次握手建立可靠的点对点连接，具体过程是：</p><p>首先服务器进入监听状态，然后即可处理连接</p><p>第一次握手：建立连接时，客户端发送 syn 包到服务器，并进入 SYN_SENT 状态，等待服务器确认。在发送的包中还会包含一个初始序列号 seq。此次握手的含义是客户端希望与服务器建立连接。</p><p>第二次握手：服务器收到 syn 包，然后回应给客户端一个 SYN+ACK 包，此时服务器进入 SYN_RCVD 状态。此次握手的含义是服务端回应客户端，表示已收到并同意客户端的连接请求。</p><p>第三次握手：客户端收到服务器的 SYN 包后，向服务器再次发送 ACK 包，并进入 ESTAB_LISHED 状态。</p><p>最后，服务端收到客户端的 ACK 包，于是也进入 ESTAB_LISHED 状态，至此，连接建立完成</p><p>当需要关闭连接时，需要进行四次挥手才能关闭</p><ol><li>Client 向 Server 发送 FIN 包，表示 Client 主动要关闭连接，然后进入 FIN_WAIT_1 状态，等待 Server 返回 ACK 包。此后 Client 不能再向 Server 发送数据，但能读取数据。</li><li>Server 收到 FIN 包后向 Client 发送 ACK 包，然后进入 CLOSE_WAIT 状态，此后 Server 不能再读取数据，但可以继续向 Client 发送数据。</li><li>Client 收到 Server 返回的 ACK 包后进入 FIN_WAIT_2 状态，等待 Server 发送 FIN 包。</li><li>Server 完成数据的发送后，将 FIN 包发送给 Client，然后进入 LAST_ACK 状态，等待 Client 返回 ACK 包，此后 Server 既不能读取数据，也不能发送数据。</li><li>Client 收到 FIN 包后向 Server 发送 ACK 包，然后进入 TIME_WAIT 状态，接着等待足够长的时间（2MSL）以确保 Server 接收到 ACK 包，最后回到 CLOSED 状态，释放网络资源。</li><li>Server 收到 Client 返回的 ACK 包后便回到 CLOSED 状态，释放网络资源。</li></ol></blockquote><h3 id="_7-介绍-https-握手过程" tabindex="-1">7. 介绍 HTTPS 握手过程 <a class="header-anchor" href="#_7-介绍-https-握手过程" aria-label="Permalink to &quot;7. 介绍 HTTPS 握手过程&quot;">​</a></h3><blockquote><p>参考答案：</p><ol><li>客户端请求服务器，并告诉服务器自身支持的加密算法以及密钥长度等信息</li><li>服务器响应公钥和服务器证书</li><li>客户端验证证书是否合法，然后生成一个会话密钥，并用服务器的公钥加密密钥，把加密的结果通过请求发送给服务器</li><li>服务器使用私钥解密被加密的会话密钥并保存起来，然后使用会话密钥加密消息响应给客户端，表示自己已经准备就绪</li><li>客户端使用会话密钥解密消息，知道了服务器已经准备就绪。</li><li>后续客户端和服务器使用会话密钥加密信息传递消息</li></ol></blockquote><h3 id="_8-https-握手过程中-客户端如何验证证书的合法性" tabindex="-1">8. HTTPS 握手过程中，客户端如何验证证书的合法性 <a class="header-anchor" href="#_8-https-握手过程中-客户端如何验证证书的合法性" aria-label="Permalink to &quot;8. HTTPS 握手过程中，客户端如何验证证书的合法性&quot;">​</a></h3><blockquote><p>参考答案：</p><ol><li>校验证书的颁发机构是否受客户端信任。</li><li>通过 CRL 或 OCSP 的方式校验证书是否被吊销。</li><li>对比系统时间，校验证书是否在有效期内。</li><li>通过校验对方是否存在证书的私钥，判断证书的网站域名是否与证书颁发的域名一致。</li></ol></blockquote><h3 id="_9-http-状态码-301-和-302-的应用场景分别是什么" tabindex="-1">9. Http 状态码 301 和 302 的应用场景分别是什么 <a class="header-anchor" href="#_9-http-状态码-301-和-302-的应用场景分别是什么" aria-label="Permalink to &quot;9. Http 状态码 301 和 302 的应用场景分别是什么&quot;">​</a></h3><blockquote><p>参考答案：</p><p>301 表示永久重定向，302 表示临时重定向。</p><p>如果浏览器收到的是 301，则会缓存重定向的地址，之后不会再重新请求服务器，直接使用缓存的地址请求，这样可以减少请求次数。</p><p>但如果浏览器收到的是 302，则不会缓存重定向地址，浏览器将来会继续以原有地址请求。</p><p>因此，301 适合地址永久转移的场景，比如域名变更；而 302 适合临时转移的场景，比如首页临时跳转到活动页</p></blockquote><h3 id="_11-cookie-和-token-都存放在-header-中-为什么不会劫持-token" tabindex="-1">11. cookie 和 token 都存放在 header 中，为什么不会劫持 token？ <a class="header-anchor" href="#_11-cookie-和-token-都存放在-header-中-为什么不会劫持-token" aria-label="Permalink to &quot;11. cookie 和 token 都存放在 header 中，为什么不会劫持 token？&quot;">​</a></h3><blockquote><p>参考答案：</p><p>由于浏览器会自动发送 cookie 到服务器，因此攻击者可以利用这种特点进行 csrf 攻击。</p><p>而通常 token 是不放到 cookie 中的，需要浏览器端使用 JS 自行保存到 localstorage 中，在请求时也需要手动的加入到请求头中，因此不容易引发 csrf 攻击。</p></blockquote><h3 id="_12-介绍下如何实现-token-加密" tabindex="-1">12. 介绍下如何实现 token 加密 <a class="header-anchor" href="#_12-介绍下如何实现-token-加密" aria-label="Permalink to &quot;12. 介绍下如何实现 token 加密&quot;">​</a></h3><blockquote><p>参考答案：</p><p>以最常见的 token 格式 jwt 为例</p><p>token 分为三段，分别是 header、payload、signature</p><p>其中，header 标识签名算法和令牌类型；payload 标识主体信息，包含令牌过期时间、发布时间、发行者、主体内容等；signature 是使用特定的算法对前面两部分进行加密，得到的加密结果。</p><p>token 有防篡改的特点，如果攻击者改动了前面两个部分，就会导致和第三部分对应不上，使得 token 失效。而攻击者不知道加密秘钥，因此又无法修改第三部分的值。</p><p>所以，在秘钥不被泄露的前提下，一个验证通过的 token 是值得被信任的。</p></blockquote><h3 id="_13-说下单点登录-新东方" tabindex="-1">13. 说下单点登录（新东方） <a class="header-anchor" href="#_13-说下单点登录-新东方" aria-label="Permalink to &quot;13. 说下单点登录（新东方）&quot;">​</a></h3><blockquote><p>参考答案：</p><p>SSO 一般都需要一个独立的认证中心（passport），子系统的登录均得通过 passport，子系统本身将不参与登录操作，当一个系统成功登录以后，passport 将会颁发一个令牌给各个子系统，子系统可以拿着令牌会获取各自的受保护资源，为了减少频繁认证，各个子系统在被 passport 授权以后，会建立一个局部会话，在一定时间内可以无需再次向 passport 发起认证。</p><p>具体流程是：</p><ol><li>用户访问系统 1 的受保护资源，系统 1 发现用户未登录，跳转至 sso 认证中心，并将自己的地址作为参数</li><li>sso 认证中心发现用户未登录，将用户引导至登录页面</li><li>用户输入用户名密码提交登录申请</li><li>sso 认证中心校验用户信息，创建用户与 sso 认证中心之间的会话，称为全局会话，同时创建授权令牌</li><li>sso 认证中心带着令牌跳转会最初的请求地址（系统 1）</li><li>系统 1 拿到令牌，去 sso 认证中心校验令牌是否有效</li><li>sso 认证中心校验令牌，返回有效，注册系统 1</li><li>系统 1 使用该令牌创建与用户的会话，称为局部会话，返回受保护资源</li><li>用户访问系统 2 的受保护资源</li><li>系统 2 发现用户未登录，跳转至 sso 认证中心，并将自己的地址作为参数</li><li>sso 认证中心发现用户已登录，跳转回系统 2 的地址，并附上令牌</li><li>系统 2 拿到令牌，去 sso 认证中心校验令牌是否有效</li><li>sso 认证中心校验令牌，返回有效，注册系统 2</li><li>系统 2 使用该令牌创建与用户的局部会话，返回受保护资源</li></ol></blockquote><h3 id="_14-http1-1-是如何复用-tcp-连接的-网易" tabindex="-1">14. http1.1 是如何复用 tcp 连接的？（网易） <a class="header-anchor" href="#_14-http1-1-是如何复用-tcp-连接的-网易" aria-label="Permalink to &quot;14. http1.1 是如何复用 tcp 连接的？（网易）&quot;">​</a></h3><blockquote><p>参考答案：</p><p>客户端请求服务器时，通过请求行告诉服务器使用的协议是 http1.1，同时在请求头中附带<code>connection:keep-alive</code>（为保持兼容），告诉服务器这是一个长连接，后续请求可以重复使用这一次的 TCP 连接。</p><p>这样做的好处是减少了三次握手和四次挥手的次数，一定程度上提升了网络利用率。但由于 http1.1 不支持多路复用，响应顺序必须按照请求顺序抵达客户端，不能真正实现并行传输，因此在 http2.0 出现之前，实际项目中往往把静态资源，比如图片，分发到不同域名下的资源服务器，以便实现真正的并行传输。</p></blockquote><h3 id="_15-文件上传如何做断点续传-网易" tabindex="-1">15. 文件上传如何做断点续传（网易） <a class="header-anchor" href="#_15-文件上传如何做断点续传-网易" aria-label="Permalink to &quot;15. 文件上传如何做断点续传（网易）&quot;">​</a></h3><blockquote><p>参考答案：</p><p>客户端将文件的二进制内容进行分片，每片数据按顺序进行序号标识，上传每片数据时同时附带其序号。服务器接收到每片数据时，将其保存成一个临时文件，并记录每个文件的 hash 和序号。</p><p>若上传中止，将来再次上传时，可以向服务器索要已上传的分片序号，客户端仅需上传剩余分片即可。</p><p>当全部分片上传完成后，服务器按照分片的顺序组装成完整的文件，并删除分片文件。</p></blockquote><h3 id="_16-介绍-ssl-和-tls-寺库" tabindex="-1">16. 介绍 SSL 和 TLS（寺库） <a class="header-anchor" href="#_16-介绍-ssl-和-tls-寺库" aria-label="Permalink to &quot;16. 介绍 SSL 和 TLS（寺库）&quot;">​</a></h3><blockquote><p>参考答案：</p><p>它们都是用于保证传输安全的协议，介于传输层和应用层之间，TLS 是 SSL 的升级版。</p><p>它们的基本流程一致：</p><ol><li>客户端向服务器端索要公钥，并使用数字证书验证公钥。</li><li>客户端使用公钥加密会话密钥，服务端用私钥解密会话密钥，于是得到一个双方都认可的会话密钥</li><li>传输的数据使用会话密钥加密，然后再传输，接收消息方使用会话密钥解密得到原始数据</li></ol></blockquote><h3 id="_17-说说网络的五层模型-寺库" tabindex="-1">17. 说说网络的五层模型（寺库） <a class="header-anchor" href="#_17-说说网络的五层模型-寺库" aria-label="Permalink to &quot;17. 说说网络的五层模型（寺库）&quot;">​</a></h3><blockquote><p>参考答案：</p><p>从上到下分别为：应用层、传输层、网络层、数据链路层、物理层。在发送消息时，消息从上到下进行打包，每一层会在上一层基础上加包，而接受消息时，从下到上进行解包，最终得到原始信息。</p><p>其中：</p><p>应用层主要面向互联网中的应用场景，比如网页、邮件、文件中心等等，它的代表协议有 http、smtp、pop3、ftp、DNS 等等</p><p>传输层主要面向传输过程，比如 TCP 协议是为了保证可靠的传输，而 UDP 协议则是一种无连接的广播，它们提供了不同的传输方式</p><p>网络层主要解决如何定位目标的问题，比如 IP、ICMP、ARP 等等</p><p>数据链路层的作用是将数据可靠的传输到目标，比如常见的以太网协议、P2P 协议</p><p>物理层是要规范网络两端使用的物理设备，比如蓝牙、wifi、光纤、网线接头等等</p></blockquote><h3 id="_18-get-和-post-的区别-流利说" tabindex="-1">18. GET 和 POST 的区别（流利说） <a class="header-anchor" href="#_18-get-和-post-的区别-流利说" aria-label="Permalink to &quot;18. GET 和 POST 的区别（流利说）&quot;">​</a></h3><blockquote><p>参考答案：</p><p>从 http 协议的角度来说，GET 和 POST 它们都只是请求行中的第一个单词，除了语义不同，其实没有本质的区别。</p><p>之所以在实际开发中会产生各种区别，主要是因为浏览器的默认行为造成的。</p><p>受浏览器的影响，在实际开发中，GET 和 POST 有以下区别：</p><ol><li>浏览器在发送 GET 请求时，不会附带请求体</li><li>GET 请求的传递信息量有限，适合传递少量数据；POST 请求的传递信息量是没有限制的，适合传输大量数据。</li><li>GET 请求只能传递 ASCII 数据，遇到非 ASCII 数据需要进行编码；POST 请求没有限制</li><li>大部分 GET 请求传递的数据都附带在 path 参数中，能够通过分享地址完整的重现页面，但同时也暴露了数据，若有敏感数据传递，不应该使用 GET 请求，至少不应该放到 path 中</li><li>刷新页面时，若当前的页面是通过 POST 请求得到的，则浏览器会提示用户是否重新提交。若是 GET 请求得到的页面则没有提示。</li><li>GET 请求的地址可以被保存为浏览器书签，POST 不可以</li></ol></blockquote><h3 id="_20-http-劫持是什么" tabindex="-1">20. http 劫持是什么？ <a class="header-anchor" href="#_20-http-劫持是什么" aria-label="Permalink to &quot;20. http 劫持是什么？&quot;">​</a></h3><blockquote><p>参考答案：</p><p>是指攻击者在客户端和服务器之间同时建立了连接通道，通过某种方式，让客户端请求发送到自己的服务器，然后自己就拥有了控制响应内容的能力，从而给客户端展示错误的信息。</p></blockquote><h3 id="_19-http-劫持、dns-劫持与-xss" tabindex="-1">19. HTTP 劫持、DNS 劫持与 XSS <a class="header-anchor" href="#_19-http-劫持、dns-劫持与-xss" aria-label="Permalink to &quot;19. HTTP 劫持、DNS 劫持与 XSS&quot;">​</a></h3><blockquote><p>参考答案：</p><p>http 劫持是指攻击者在客户端和服务器之间同时建立了连接通道，通过某种方式，让客户端请求发送到自己的服务器，然后自己就拥有了控制响应内容的能力，从而给客户端展示错误的信息，比如在页面中加入一些广告内容。</p><p>DNS 劫持是指攻击者劫持了 DNS 服务器，获得了修改 DNS 解析记录的权限，从而导致客户端请求的域名被解析到了错误的 IP 地址，攻击者通过这种方式窃取用户资料或破坏原有正常服务。</p><p>XSS 是指跨站脚本攻击。攻击者利用站点的漏洞，在表单提交时，在表单内容中加入一些恶意脚本，当其他正常用户浏览页面，而页面中刚好出现攻击者的恶意脚本时，脚本被执行，从而使得页面遭到破坏，或者用户信息被窃取。</p><p>要防范 XSS 攻击，需要在服务器端过滤脚本代码，将一些危险的元素和属性去掉或对元素进行HTML实体编码。</p></blockquote><h3 id="_20-介绍-xss-csrf-攻击" tabindex="-1">20. 介绍 xss csrf 攻击 <a class="header-anchor" href="#_20-介绍-xss-csrf-攻击" aria-label="Permalink to &quot;20. 介绍 xss csrf 攻击&quot;">​</a></h3><blockquote><p>参考答案：</p><p>XSS：</p><p>XSS 是指跨站脚本攻击。攻击者利用站点的漏洞，在表单提交时，在表单内容中加入一些恶意脚本，当其他正常用户浏览页面，而页面中刚好出现攻击者的恶意脚本时，脚本被执行，从而使得页面遭到破坏，或者用户信息被窃取。</p><p>要防范 XSS 攻击，需要在服务器端过滤脚本代码，将一些危险的元素和属性去掉或对元素进行HTML实体编码。</p><p>CSRF：</p><p>CSRF 是跨站请求伪造，是一种挟制用户在当前已登录的Web应用上执行非本意的操作的攻击方法</p><p>它首先引导用户访问一个危险网站，当用户访问网站后，网站会发送请求到被攻击的站点，这次请求会携带用户的cookie发送，因此就利用了用户的身份信息完成攻击</p><p>防御 CSRF 攻击有多种手段：</p><ol><li>不使用cookie</li><li>为表单添加校验的 token 校验</li><li>cookie中使用sameSite字段</li><li>服务器检查 referer 字段</li></ol></blockquote><h3 id="_23-https-验证身份也就是-tsl-ssl-身份验证的过程" tabindex="-1">23. https 验证身份也就是 TSL/SSL 身份验证的过程 <a class="header-anchor" href="#_23-https-验证身份也就是-tsl-ssl-身份验证的过程" aria-label="Permalink to &quot;23. https 验证身份也就是 TSL/SSL 身份验证的过程&quot;">​</a></h3><blockquote><p>参考答案：</p><ol><li>客户端请求服务器，并告诉服务器自身支持的加密算法以及密钥长度等信息</li><li>服务器响应公钥和服务器证书</li><li>客户端验证证书是否合法，然后生成一个会话密钥，并用服务器的公钥加密密钥，把加密的结果通过请求发送给服务器</li><li>服务器使用私钥解密被加密的会话密钥并保存起来，然后使用会话密钥加密消息响应给客户端，表示自己已经准备就绪</li><li>客户端使用会话密钥解密消息，知道了服务器已经准备就绪。</li><li>后续客户端和服务器使用会话密钥加密信息传递消息</li></ol></blockquote><h3 id="_24-为什么需要-ca-机构对证书签名" tabindex="-1">24. 为什么需要 CA 机构对证书签名 <a class="header-anchor" href="#_24-为什么需要-ca-机构对证书签名" aria-label="Permalink to &quot;24. 为什么需要 CA 机构对证书签名&quot;">​</a></h3><blockquote><p>参考答案：</p><p>主要是为了解决证书的可信问题。如果没有权威机构对证书进行签名，客户端就无法知晓证书是否是伪造的，从而增加了中间人攻击的风险，https 就变得毫无意义。</p></blockquote><h3 id="_25-身份验证过程中会涉及到密钥-对称加密-非对称加密-摘要的概念-请解释一下" tabindex="-1">25. 身份验证过程中会涉及到密钥，对称加密，非对称加密，摘要的概念，请解释一下 <a class="header-anchor" href="#_25-身份验证过程中会涉及到密钥-对称加密-非对称加密-摘要的概念-请解释一下" aria-label="Permalink to &quot;25. 身份验证过程中会涉及到密钥，对称加密，非对称加密，摘要的概念，请解释一下&quot;">​</a></h3><blockquote><p>参考答案：</p><p>密钥</p><p>密钥是一种参数，它是在明文转换为密文或将密文转换为明文的算法中输入的参数。密钥分为对称密钥与非对称密钥，分别应用在对称加密和非对称加密上。</p><p>对称加密</p><p>对称加密又叫做私钥加密，即信息的发送方和接收方使用同一个密钥去加密和解密数据。对称加密的特点是算法公开、加密和解密速度快，适合于对大数据量进行加密，常见的对称加密算法有 DES、3DES、TDEA、Blowfish、RC5 和 IDEA。</p><p>非对称加密</p><p>非对称加密也叫做公钥加密。非对称加密与对称加密相比，其安全性更好。对称加密的通信双方使用相同的密钥，如果一方的密钥遭泄露，那么整个通信就会被破解。而非对称加密使用一对密钥，即公钥和私钥，且二者成对出现。私钥被自己保存，不能对外泄露。公钥指的是公共的密钥，任何人都可以获得该密钥。用公钥或私钥中的任何一个进行加密，用另一个进行解密。</p><p>摘要</p><p>摘要算法又称哈希/散列算法。它通过一个函数，把任意长度的数据转换为一个长度固定的数据串（通常用 16 进制的字符串表示）。算法不可逆。</p></blockquote><h3 id="_26-websocket-协议是什么-能简述一下吗" tabindex="-1">26. webSocket 协议是什么，能简述一下吗？ <a class="header-anchor" href="#_26-websocket-协议是什么-能简述一下吗" aria-label="Permalink to &quot;26. webSocket 协议是什么，能简述一下吗？&quot;">​</a></h3><blockquote><p>参考答案：</p><p>websocket 协议 HTML5 带来的新协议，相对于 http，它是一个持久连接的协议，它利用 http 协议完成握手，然后通过 TCP 连接通道发送消息，使用 websocket 协议可以实现服务器主动推送消息。</p><p>首先，客户端若要发起 websocket 连接，首先必须向服务器发送 http 请求以完成握手，请求行中的 path 需要使用<code>ws:</code>开头的地址，请求头中要分别加入<code>upgrade、connection、Sec-WebSocket-Key、Sec-WebSocket-Version</code>标记</p><p>然后，服务器收到请求后，发现这是一个 websocket 协议的握手请求，于是响应行中包含<code>Switching Protocols</code>，同时响应头中包含<code>upgrade、connection、Sec-WebSocket-Accept</code>标记</p><p>当客户端收到响应后即可完成握手，随后使用建立的 TCP 连接直接发送和接收消息。</p></blockquote><h3 id="_27-websocket-与传统的-http-有什么优势" tabindex="-1">27. webSocket 与传统的 http 有什么优势 <a class="header-anchor" href="#_27-websocket-与传统的-http-有什么优势" aria-label="Permalink to &quot;27. webSocket 与传统的 http 有什么优势&quot;">​</a></h3><blockquote><p>参考答案：</p><p>当页面中需要观察实时数据的变化（比如聊天、k 线图）时，过去我们往往使用两种方式完成</p><p>第一种是短轮询，即客户端每隔一段时间就向服务器发送消息，询问有没有新的数据</p><p>第二种是长轮询，发起一次请求询问服务器，服务器可以将该请求挂起，等到有新消息时再进行响应。响应后，客户端立即又发起一次请求，重复整个流程。</p><p>无论是哪一种方式，都暴露了 http 协议的弱点，即响应必须在请求之后发生，服务器是被动的，无法主动推送消息。而让客户端不断的发起请求又白白的占用了资源。</p><p>websocket 的出现就是为了解决这个问题，它利用 http 协议完成握手之后，就可以与服务器建立持久的连接，服务器可以在任何需要的时候，主动推送消息给客户端，这样占用的资源最少，同时实时性也最高。</p></blockquote><h3 id="_28-如何劫持-https-的请求-提供思路" tabindex="-1">28. 如何劫持 https 的请求，提供思路 <a class="header-anchor" href="#_28-如何劫持-https-的请求-提供思路" aria-label="Permalink to &quot;28. 如何劫持 https 的请求，提供思路&quot;">​</a></h3><blockquote><p>参考答案：</p><p>https 有防篡改的特点，只要浏览器证书验证过程是正确的，很难在用户不察觉的情况下进行攻击。但若能够更改浏览器的证书验证过程，便有机会实现 https 中间人攻击。</p><p>所以，要劫持 https，首先要伪造一个证书，并且要想办法让用户信任这个证书，可以有多种方式，比如病毒、恶意软件、诱导等。一旦证书被信任后，就可以利用普通中间人攻击的方式，使用伪造的证书进行攻击。</p></blockquote><h3 id="_29-怎样解决跨域问题" tabindex="-1">29. 怎样解决跨域问题？ <a class="header-anchor" href="#_29-怎样解决跨域问题" aria-label="Permalink to &quot;29. 怎样解决跨域问题？&quot;">​</a></h3><blockquote><p>参考答案：</p><ol><li><p>使用 JSONP</p><p>这是一种古老的解决跨域问题的思路。</p><p>在需要跨域请求时，事先准备好一个处理服务器数据的函数，然后生成一个<code>&lt;script&gt;</code>元素，<code>src</code>指向跨域站点，同时把准备好的函数名通过地址参数传递到服务器。</p><p>跨域站点返回一段调用该函数的脚本，当客户端接收到脚本后就会运行事先准备的函数，从而实现跨域获取数据。</p><p>JSONP 实现简单、兼容性好，但缺点也很明显，它只支持 get 请求，同时也有安全性问题，并且对服务器端代码侵入性比较强。</p></li><li><p>使用 cors</p><p>在请求时，客户端使用一些特殊的请求头向服务器申请跨域访问，并通过这些请求头告诉服务器自己的行为。服务器根据自身的规则决定是否允许跨域，如果允许，则通过响应头告诉客户端可以发送跨域请求。</p><p>cors 协议已被各种主流浏览器支持，它安全性高，同时也不会侵入服务器代码，是目前最主流的跨域方式</p></li></ol><p>除此之外，远古时期的跨域处理还包括 iframe、form 等，由于它们缺陷非常明显，故很少使用了。</p></blockquote><h3 id="_30-前端如何实现即时通讯" tabindex="-1">30. 前端如何实现即时通讯？ <a class="header-anchor" href="#_30-前端如何实现即时通讯" aria-label="Permalink to &quot;30. 前端如何实现即时通讯？&quot;">​</a></h3><blockquote><p>参考答案：</p><ol><li>短轮询。即客户端每隔一段时间就向服务器发送消息，询问有没有新的数据</li><li>长轮询，发起一次请求询问服务器，服务器可以将该请求挂起，等到有新消息时再进行响应。响应后，客户端立即又发起一次请求，重复整个流程。</li><li>websocket，握手完毕后会建立持久性的连接通道，随后服务器可以在任何时候推送新消息给客户端</li></ol></blockquote><h3 id="_31-http-常用状态码-301-302-304-403" tabindex="-1">31. HTTP 常用状态码 301 302 304 403 <a class="header-anchor" href="#_31-http-常用状态码-301-302-304-403" aria-label="Permalink to &quot;31. HTTP 常用状态码 301 302 304 403&quot;">​</a></h3><blockquote><p>参考答案：</p><p>301 永久重定向，浏览器会把重定向后的地址缓存起来，将来用户再次访问原始地址时，直接引导用户访问新地址</p><p>302 临时重定向，浏览器会引导用户进入新地址，但不会缓存原始地址，下一次用户访问源地址时，浏览器仍然要请求原地址的服务器</p><p>304 资源未修改，服务器通过该状态码告诉客户端，请求的资源和过去一样，并没有任何变化，建议自行使用过去的缓存。通常，304 状态码的响应中，服务器不会附带任何的响应体。</p><p>403 不允许访问。服务器通过该状态码告诉客户端，这个资源目前不允许访问。这种状态码通常出现在权限不足的情况下。</p></blockquote><h3 id="_30-在浏览器地址栏输入地址-并按下回车键后-发生了哪些事情" tabindex="-1">30. 在浏览器地址栏输入地址，并按下回车键后，发生了哪些事情？ <a class="header-anchor" href="#_30-在浏览器地址栏输入地址-并按下回车键后-发生了哪些事情" aria-label="Permalink to &quot;30. 在浏览器地址栏输入地址，并按下回车键后，发生了哪些事情？&quot;">​</a></h3><blockquote><ol><li><p>参考答案：</p><ol><li>浏览器自动补全协议、端口</li><li>浏览器自动完成url编码</li><li>浏览器根据url地址查找本地缓存，根据缓存规则看是否命中缓存，若命中缓存则直接使用缓存，不再发出请求</li><li>通过DNS解析找到服务器的IP地址</li><li>浏览器向服务器发出建立TCP连接的申请，完成三次握手后，连接通道建立</li><li>若使用了HTTPS协议，则还会进行SSL握手，建立加密信道。使用SSL握手时，会确定是否使用HTTP2</li><li>浏览器决定要附带哪些cookie到请求头中</li><li>浏览器自动设置好请求头、协议版本、cookie，发出GET请求</li><li>服务器处理请求，进入后端处理流程。完成处理后，服务器响应一个HTTP报文给浏览器。</li><li>浏览器根据使用的协议版本，以及Connection字段的约定，决定是否要保留TCP连接。</li><li>浏览器根据响应状态码决定如何处理这一次响应</li><li>浏览器根据响应头中的Content-Type字段识别响应类型，如果是text/html，则对响应体的内容进行HTML解析，否则做其他处理</li><li>浏览器根据响应头的其他内容完成缓存、cookie的设置</li><li>浏览器开始从上到下解析HTML，若遇到外部资源链接，则进一步请求资源</li><li>解析过程中生成DOM树、CSSOM树，然后一边生成，一边把二者合并为渲染树（rendering tree），随后对渲染树中的每个节点计算位置和大小（reflow），最后把每个节点利用GPU绘制到屏幕（repaint）</li><li>在解析过程中还会触发一系列的事件，当DOM树完成后会触发DOMContentLoaded事件，当所有资源加载完毕后会触发load事件</li></ol></li></ol></blockquote><h3 id="_33-https-握手" tabindex="-1">33. HTTPS 握手 <a class="header-anchor" href="#_33-https-握手" aria-label="Permalink to &quot;33. HTTPS 握手&quot;">​</a></h3><blockquote><p>参考答案：</p><ol><li>客户端请求服务器，并告诉服务器自身支持的加密算法以及密钥长度等信息</li><li>服务器响应公钥和服务器证书</li><li>客户端验证证书是否合法，然后生成一个会话密钥，并用服务器的公钥加密密钥，把加密的结果通过请求发送给服务器</li><li>服务器使用私钥解密被加密的会话密钥并保存起来，然后使用会话密钥加密消息响应给客户端，表示自己已经准备就绪</li><li>客户端使用会话密钥解密消息，知道了服务器已经准备就绪。</li><li>后续客户端和服务器使用会话密钥加密信息传递消息</li></ol></blockquote><h3 id="_34-网页验证码是干嘛的-是为了解决什么安全问题" tabindex="-1">34. 网页验证码是干嘛的，是为了解决什么安全问题？ <a class="header-anchor" href="#_34-网页验证码是干嘛的-是为了解决什么安全问题" aria-label="Permalink to &quot;34. 网页验证码是干嘛的，是为了解决什么安全问题？&quot;">​</a></h3><blockquote><p>参考答案：</p><p>验证码主要用于让服务器区分请求是人还是机器发送的。这样做是为了避免某些程序恶意的提交大量信息到服务器，进而导致服务器产生大量的垃圾数据。有时，验证码也可以防止机器暴力破解用户密码，它通过在短时间内不断提交登录信息，尝试各种密码组合来达到破解的目的。</p></blockquote><h3 id="_35-http1-0、http2-0、http3-0-之间的区别" tabindex="-1">35. http1.0、http2.0、http3.0 之间的区别 <a class="header-anchor" href="#_35-http1-0、http2-0、http3-0-之间的区别" aria-label="Permalink to &quot;35. http1.0、http2.0、http3.0 之间的区别&quot;">​</a></h3><blockquote><p>参考答案：</p><p>http1.0</p><p>每次请求和响应完毕后都会销毁 TCP 连接，同时规定前一个响应完成后才能发送下一个请求。这样做有两个问题：</p><ol><li><p>无法复用连接</p><p>每次请求都要创建新的 TCP 连接，完成三次握手和四次挥手，网络利用率低</p></li><li><p>队头阻塞</p><p>如果前一个请求被某种原因阻塞了，会导致后续请求无法发送。</p></li></ol><p>http2.0</p><p>http2.0 优化了传输效率，它主要有以下改进：</p><ol><li><p>二进制分帧</p><p>将传输的消息分为更小的二进制帧，每帧有自己的标识序号，即便被随意打乱也能在另一端正确组装</p></li><li><p>多路复用</p><p>基于二进制分帧，在同一域名下所有访问都是从同一个 tcp 连接中走，并且不再有队头阻塞问题，也无须遵守响应顺序</p></li><li><p>头部压缩</p><p>http2.0 通过字典的形式，将头部中的常见信息替换为更少的字符，极大的减少了头部的数据量，从而实现更小的传输量</p></li><li><p>服务器推</p><p>http2.0 允许服务器直接推送消息给客户端，无须客户端明确的请求</p></li></ol><p>http3.0</p><p>http3.0 目前还在草案阶段，它完全抛弃了 TCP 协议，转而使用 UDP 协议，是为了进一步提升性能。</p><p>虽然 http2.0 进行了大量的优化，但它无法摆脱 TCP 协议本身的问题，比如建立连接时间长、对头阻塞问题等等。</p><p>为了保证传输的可靠性，http3.0 使用了 QUIC 协议。</p></blockquote><h3 id="_36-cookie-sessionstorage-localstorage-的区别" tabindex="-1">36. cookie/sessionStorage/localStorage 的区别 <a class="header-anchor" href="#_36-cookie-sessionstorage-localstorage-的区别" aria-label="Permalink to &quot;36. cookie/sessionStorage/localStorage 的区别&quot;">​</a></h3><blockquote><p>参考答案：</p><p>cookie、sessionStorage、localStorage 都是保存本地数据的方式</p><p>其中，cookie 兼容性较好，所有浏览器均支持。浏览器针对 cookie 会有一些默认行为，比如当响应头中出现<code>set-cookie</code>字段时，浏览器会自动保存 cookie 的值；再比如，浏览器发送请求时，会附带匹配的 cookie 到请求头中。这些默认行为，使得 cookie 长期以来担任着维持登录状态的责任。与此同时，也正是因为浏览器的默认行为，给了恶意攻击者可乘之机，CSRF 攻击就是一个典型的利用 cookie 的攻击方式。虽然 cookie 不断的改进，但前端仍然需要另一种更加安全的保存数据的方式</p><p>HTML5 新增了 sessionStorage 和 localStorage，前者用于保存会话级别的数据，后者用于更持久的保存数据。浏览器针对它们没有任何默认行为，这样一来，就把保存数据、读取数据的工作交给了前端开发者，这就让恶意攻击者难以针对登录状态进行攻击。 cookie 的大小是有限制的，一般浏览器会限制同一个域下的 cookie 总量为 4M，而 sessionStorage 和 localStorage 则没有限制 cookie 会与 domain、path 关联，而 sessionStorage 和 localStorage 只与 domain 关联</p></blockquote><h3 id="_37-post-请求什么时候用-form-data-什么时候用-request-payload" tabindex="-1">37. post 请求什么时候用 form data 什么时候用 request payload <a class="header-anchor" href="#_37-post-请求什么时候用-form-data-什么时候用-request-payload" aria-label="Permalink to &quot;37. post 请求什么时候用 form data 什么时候用 request payload&quot;">​</a></h3><blockquote><p>参考答案：</p><p>form data 适合传递简单的键值对信息，由于传递的信息比较扁平，难以传递深层次嵌套的数据</p><p>request payload 适合传递任意格式的数据，包括单个数字、布尔、深层次嵌套的对象、数组等，但 request payload 不适合传递文件数据</p><p>在前后端分离的项目中，对于非文件数据的传递，都推荐使用 request payload 的形式，以传递最明确的数据类型和数据结构，而对于文件上传，则推荐使用传统的 form data</p></blockquote><h3 id="_38-http-常见请求方法有哪些" tabindex="-1">38. http 常见请求方法有哪些？ <a class="header-anchor" href="#_38-http-常见请求方法有哪些" aria-label="Permalink to &quot;38. http 常见请求方法有哪些？&quot;">​</a></h3><blockquote><p>参考答案：</p><ul><li>GET，表示向服务器获取资源</li><li>POST，表示向服务器提交信息，通常用于产生新的数据，比如注册</li><li>PUT，表示希望修改服务器的数据，通常用于修改</li><li>DELETE，表示希望删除服务器的数据</li><li>OPTIONS，发生在跨域的预检请求中，表示客户端向服务器申请跨域提交</li><li>TRACE，回显服务器收到的请求，主要用于测试和诊断</li><li>CONNECT，用于建立连接管道，通常在代理场景中使用，网页中很少用到</li></ul></blockquote><h3 id="_37-列举优化网络性能方法" tabindex="-1">37. 列举优化网络性能方法 <a class="header-anchor" href="#_37-列举优化网络性能方法" aria-label="Permalink to &quot;37. 列举优化网络性能方法&quot;">​</a></h3><blockquote><p>参考答案：</p><ul><li><p>优化打包体积</p><p>利用一些工具压缩、混淆最终打包代码，减少包体积</p></li><li><p>多目标打包</p><p>利用一些打包插件，针对不同的浏览器打包出不同的兼容性版本，这样一来，每个版本中的兼容性代码就会大大减少，从而减少包体积</p></li><li><p>压缩</p><p>现代浏览器普遍支持压缩格式，因此服务端的各种文件可以压缩后再响应给客户端，只要解压时间小于优化的传输时间，压缩就是可行的</p></li><li><p>CDN</p><p>利用 CDN 可以大幅缩减静态资源的访问时间，特别是对于公共库的访问，可以使用知名的 CDN 资源，这样可以实现跨越站点的缓存</p></li><li><p>缓存</p><p>对于除 HTML 外的所有静态资源均可以开启协商缓存，利用构建工具打包产生的文件 hash 值来置换缓存</p></li><li><p>http2</p><p>开启 http2 后，利用其多路复用、头部压缩等特点，充分利用带宽传递大量的文件数据</p></li><li><p>雪碧图</p><p>对于不使用 HTTP2 的场景，可以将多个图片合并为雪碧图，以达到减少文件的目的</p></li><li><p>defer、async</p><p>通过 defer 和 async 属性，可以让页面尽早加载 js 文件</p></li><li><p>prefetch、preload</p><p>通过 prefetch 属性，可以让页面在空闲时预先下载其他页面可能要用到的资源</p><p>通过 preload 属性，可以让页面预先下载本页面可能要用到的资源</p></li><li><p>多个静态资源域</p><p>对于不使用 HTTP2 的场景，将相对独立的静态资源分到多个域中保存，可以让浏览器同时开启多个 TCP 连接，并行下载</p></li></ul></blockquote><h3 id="_40-session-怎么消除" tabindex="-1">40. session 怎么消除 <a class="header-anchor" href="#_40-session-怎么消除" aria-label="Permalink to &quot;40. session 怎么消除&quot;">​</a></h3><blockquote><p>参考答案：</p><ol><li><p>过期时间</p><p>当客户端长时间没有传递 sessionid 过来时，服务器可以在过期时间之后自动清除 session</p></li><li><p>客户端主动通知</p><p>可以使用 JS 监听客户端页面关闭或其他退出操作，然后通知服务器清除 session</p></li></ol></blockquote><h3 id="_41-什么是-dns-域名解析" tabindex="-1">41. 什么是 DNS 域名解析？ <a class="header-anchor" href="#_41-什么是-dns-域名解析" aria-label="Permalink to &quot;41. 什么是 DNS 域名解析？&quot;">​</a></h3><blockquote><p>参考答案：</p><p>DNS 域名解析是指把域名解析成 IP 地址的过程。</p><p>在具体的实现上，域名解析是由多个层级的服务器共同完成的。在查询域名时，客户端会先检查自身的 DNS 映射表，若找不到解析记录，则使用用户配置的 DNS 服务器，若目标 DNS 服务器中找不到记录，则继续往上一个层级寻找，直到到达根域名服务器，根域名服务器会根据域名的类型，将解析任务分发到对应的子域名服务器依次查找，直到找到解析记录为止。</p></blockquote>',79),i=[a];function h(r,c,s,n,d,k){return o(),e("div",null,i)}const q=t(l,[["render",h]]);export{b as __pageData,q as default};
