import{_ as e,c as o,o as l,a3 as a}from"./chunks/framework.DpzXWsSh.js";const h=JSON.parse('{"title":"localStorage超过5M了怎么办？","description":"","frontmatter":{"title":"localStorage超过5M了怎么办？","date":"2023-4-21","categories":["浏览器","面试"]},"headers":[],"relativePath":"blogs/interview/20230421.md","filePath":"blogs/interview/20230421.md"}'),t={name:"blogs/interview/20230421.md"},r=a('<h2 id="localstorage超过5m了怎么办" tabindex="-1">localStorage超过5M了怎么办？ <a class="header-anchor" href="#localstorage超过5m了怎么办" aria-label="Permalink to &quot;localStorage超过5M了怎么办？&quot;">​</a></h2><ul><li>首先这是一道场景题，我们先考虑是否可以降级存储，比方说能否考虑存到sessionStorage中，能否让客户端加存储插件方法，能否让后端增加接口字段...</li><li><code>localStorage</code>的作用，<strong>localStorage 归根结底就两个作用：持久化存储与跨页面传数据。</strong></li><li>问题的根源：<strong>同一个域名共享同一个 localStorage，而同一个域名下存在过多独立的业务线，业务线之间各自为政，毫无节制的攫取公共资源，这就是 localStorage 溢出问题的根源</strong></li><li>解决方案： <ol><li>划分域名。各域名下的存储空间由各业务组统一规划使用</li><li>跨页面传数据：考虑单页应用、优先采用 url 传数据</li><li>用 <code>indexedDB</code> 存文件类型的数据，<code>localStorage</code> 存业务数据</li><li>最后的兜底方案：清掉别人的存储</li></ol></li></ul>',2),i=[r];function c(s,n,_,d,g,S){return l(),o("div",null,i)}const p=e(t,[["render",c]]);export{h as __pageData,p as default};
