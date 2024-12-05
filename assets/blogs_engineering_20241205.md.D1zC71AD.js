import{_ as s,c as i,o as a,a3 as n}from"./chunks/framework.DpzXWsSh.js";const F=JSON.parse('{"title":"如何给网站添加子域名 - 完整指南 🚀","description":"","frontmatter":{"title":"如何给网站添加子域名 - 完整指南 🚀","date":"2024-12-05T00:00:00.000Z","categories":["工程化"]},"headers":[],"relativePath":"blogs/engineering/20241205.md","filePath":"blogs/engineering/20241205.md"}'),l={name:"blogs/engineering/20241205.md"},e=n(`<h1 id="如何给网站添加子域名-完整指南-🚀" tabindex="-1">如何给网站添加子域名 - 完整指南 🚀 <a class="header-anchor" href="#如何给网站添加子域名-完整指南-🚀" aria-label="Permalink to &quot;如何给网站添加子域名 - 完整指南 🚀&quot;">​</a></h1><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p>在网站开发中，我们经常需要为不同的服务配置子域名，比如：</p><ul><li>主站：example.com</li><li>文档：docs.example.com</li><li>API：api.example.com</li></ul><p>本文将详细介绍如何一步步配置子域名。</p><h2 id="一、dns配置-🌐" tabindex="-1">一、DNS配置 🌐 <a class="header-anchor" href="#一、dns配置-🌐" aria-label="Permalink to &quot;一、DNS配置 🌐&quot;">​</a></h2><h3 id="_1-登录域名管理平台" tabindex="-1">1. 登录域名管理平台 <a class="header-anchor" href="#_1-登录域名管理平台" aria-label="Permalink to &quot;1. 登录域名管理平台&quot;">​</a></h3><p>进入您的域名服务商平台（如阿里云、腾讯云等）</p><h3 id="_2-添加dns记录" tabindex="-1">2. 添加DNS记录 <a class="header-anchor" href="#_2-添加dns记录" aria-label="Permalink to &quot;2. 添加DNS记录&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">类型:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> A记录</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">主机记录:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> connect（或其他前缀）</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">记录值:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 您的服务器IP</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">TTL:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 600秒（默认即可）</span></span></code></pre></div><blockquote><p>注意：DNS解析可能需要几分钟到几小时不等，耐心等待</p></blockquote><h2 id="二、ssl证书配置-🔒" tabindex="-1">二、SSL证书配置 🔒 <a class="header-anchor" href="#二、ssl证书配置-🔒" aria-label="Permalink to &quot;二、SSL证书配置 🔒&quot;">​</a></h2><h3 id="_1-查看现有证书" tabindex="-1">1. 查看现有证书 <a class="header-anchor" href="#_1-查看现有证书" aria-label="Permalink to &quot;1. 查看现有证书&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> certbot</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> certificates</span></span></code></pre></div><h3 id="_2-为子域名添加证书" tabindex="-1">2. 为子域名添加证书 <a class="header-anchor" href="#_2-为子域名添加证书" aria-label="Permalink to &quot;2. 为子域名添加证书&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 方式1：只添加新的子域名</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> certbot</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> certonly</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --nginx</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> connect.example.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 方式2：更新所有域名的证书（推荐）</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> certbot</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --nginx</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  -d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> example.com</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  -d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> www.example.com</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  -d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> connect.example.com</span></span></code></pre></div><h2 id="三、nginx配置-⚙️" tabindex="-1">三、Nginx配置 ⚙️ <a class="header-anchor" href="#三、nginx配置-⚙️" aria-label="Permalink to &quot;三、Nginx配置 ⚙️&quot;">​</a></h2><h3 id="_1-创建新的配置文件" tabindex="-1">1. 创建新的配置文件 <a class="header-anchor" href="#_1-创建新的配置文件" aria-label="Permalink to &quot;1. 创建新的配置文件&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nano</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/nginx/sites-available/connect.conf</span></span></code></pre></div><h3 id="_2-添加配置内容" tabindex="-1">2. 添加配置内容 <a class="header-anchor" href="#_2-添加配置内容" aria-label="Permalink to &quot;2. 添加配置内容&quot;">​</a></h3><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># HTTP重定向</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    listen </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">80</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    server_name </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">connect.example.com;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 301</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> https://$host$request_uri;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># HTTPS配置</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    listen </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">443</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ssl;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    server_name </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">connect.example.com;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    root </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/var/www/project-b;  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 项目目录</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    index </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">index.html;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # SSL配置</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    ssl_certificate </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/etc/letsencrypt/live/example.com/fullchain.pem;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    ssl_certificate_key </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/etc/letsencrypt/live/example.com/privkey.pem;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    ssl_protocols </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">TLSv1.2 TLSv1.3;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 应用配置</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    location</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> / </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        try_files </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$uri $uri/ /index.html;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 静态资源缓存</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    location</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ~*</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;"> \\.(js|css|png|jpg|jpeg|gif|ico)$ </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        expires </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">1y;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        add_header </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Cache-Control </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;public, no-transform&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # gzip配置</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    gzip </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    gzip_types </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">text/plain application/javascript text/css;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 日志</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    access_log </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/var/log/nginx/connect.access.log;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    error_log </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/var/log/nginx/connect.error.log;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="_3-启用配置" tabindex="-1">3. 启用配置 <a class="header-anchor" href="#_3-启用配置" aria-label="Permalink to &quot;3. 启用配置&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 创建符号链接</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ln</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/nginx/sites-available/connect.conf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/nginx/sites-enabled/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 测试配置</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nginx</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -t</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 重启Nginx</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> restart</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nginx</span></span></code></pre></div><h2 id="四、前端项目配置-💻" tabindex="-1">四、前端项目配置 💻 <a class="header-anchor" href="#四、前端项目配置-💻" aria-label="Permalink to &quot;四、前端项目配置 💻&quot;">​</a></h2><h3 id="_1-修改构建配置" tabindex="-1">1. 修改构建配置 <a class="header-anchor" href="#_1-修改构建配置" aria-label="Permalink to &quot;1. 修改构建配置&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// vite.config.js</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  base: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 使用根路径</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // ...其他配置</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="_2-部署项目" tabindex="-1">2. 部署项目 <a class="header-anchor" href="#_2-部署项目" aria-label="Permalink to &quot;2. 部署项目&quot;">​</a></h3><p>确保项目文件正确部署到配置的目录中（如 <code>/var/www/project-b</code>）</p><h2 id="五、验证和测试-✅" tabindex="-1">五、验证和测试 ✅ <a class="header-anchor" href="#五、验证和测试-✅" aria-label="Permalink to &quot;五、验证和测试 ✅&quot;">​</a></h2><ol><li><strong>DNS解析验证</strong></li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">dig</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> connect.example.com</span></span></code></pre></div><ol start="2"><li><strong>SSL证书验证</strong></li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查看证书信息</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">openssl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> s_client</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -connect</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> connect.example.com:443</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -servername</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> connect.example.com</span></span></code></pre></div><ol start="3"><li><strong>访问测试</strong></li></ol><ul><li>浏览器访问 <a href="https://connect.example.com" target="_blank" rel="noreferrer">https://connect.example.com</a></li><li>检查SSL锁标志</li><li>测试网站功能</li></ul><h2 id="六、常见问题-❗" tabindex="-1">六、常见问题 ❗ <a class="header-anchor" href="#六、常见问题-❗" aria-label="Permalink to &quot;六、常见问题 ❗&quot;">​</a></h2><ol><li><strong>DNS未生效</strong></li></ol><ul><li>检查DNS记录是否正确</li><li>等待DNS解析生效（通常需要几分钟到几小时）</li></ul><ol start="2"><li><strong>SSL证书问题</strong></li></ol><ul><li>确保证书路径正确</li><li>检查证书权限</li><li>查看Nginx错误日志</li></ul><ol start="3"><li><strong>502/504错误</strong></li></ol><ul><li>检查项目是否正确部署</li><li>验证目录权限</li><li>查看错误日志</li></ul><h2 id="七、维护建议-🛠️" tabindex="-1">七、维护建议 🛠️ <a class="header-anchor" href="#七、维护建议-🛠️" aria-label="Permalink to &quot;七、维护建议 🛠️&quot;">​</a></h2><ol><li><strong>定期检查</strong></li></ol><ul><li>证书有效期</li><li>日志文件大小</li><li>网站访问状态</li></ul><ol start="2"><li><strong>自动化</strong></li></ol><ul><li>配置证书自动续期</li><li>设置日志轮转</li><li>监控服务状态</li></ul><h2 id="结语" tabindex="-1">结语 <a class="header-anchor" href="#结语" aria-label="Permalink to &quot;结语&quot;">​</a></h2><p>子域名的配置虽然步骤较多，但只要按部就班地完成每一步，就能顺利完成配置。建议保存相关命令和配置，以便将来参考。</p><h2 id="参考资料" tabindex="-1">参考资料 <a class="header-anchor" href="#参考资料" aria-label="Permalink to &quot;参考资料&quot;">​</a></h2><ul><li><a href="https://nginx.org/en/docs/" target="_blank" rel="noreferrer">Nginx官方文档</a></li><li><a href="https://letsencrypt.org/docs/" target="_blank" rel="noreferrer">Let&#39;s Encrypt文档</a></li><li><a href="https://certbot.eff.org/docs/" target="_blank" rel="noreferrer">Certbot指南</a></li></ul>`,51),t=[e];function h(p,k,r,d,o,c){return a(),i("div",null,t)}const y=s(l,[["render",h]]);export{F as __pageData,y as default};
