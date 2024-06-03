import{_ as a,c as e,o as l,a3 as i}from"./chunks/framework.DpzXWsSh.js";const b=JSON.parse('{"title":"Javascript内存管理 & V8引擎的垃圾回收","description":"","frontmatter":{"title":"Javascript内存管理 & V8引擎的垃圾回收","date":"2024-3-19","categories":["javascript"]},"headers":[],"relativePath":"blogs/javascript/jstips/20240319.md","filePath":"blogs/javascript/jstips/20240319.md"}'),o={name:"blogs/javascript/jstips/20240319.md"},t=i('<h2 id="内存在js中的存储方式" tabindex="-1">内存在js中的存储方式 <a class="header-anchor" href="#内存在js中的存储方式" aria-label="Permalink to &quot;内存在js中的存储方式&quot;">​</a></h2><ol><li>普通变量会存在栈中</li><li>对象本身会存在堆中，对象所对应的引用地址会存在栈中</li></ol><h2 id="v8内存的大小" tabindex="-1">V8内存的大小 <a class="header-anchor" href="#v8内存的大小" aria-label="Permalink to &quot;V8内存的大小&quot;">​</a></h2><ol><li>64位下是1.4G</li><li>32位下700MB</li><li>但是根据浏览器不同，有些许扩容。Node情况下会有一些C++内存扩容</li></ol><h2 id="新生代和老生代" tabindex="-1">新生代和老生代 <a class="header-anchor" href="#新生代和老生代" aria-label="Permalink to &quot;新生代和老生代&quot;">​</a></h2><h3 id="新生代" tabindex="-1">新生代 <a class="header-anchor" href="#新生代" aria-label="Permalink to &quot;新生代&quot;">​</a></h3><p>短时间存活的新变量会存在新生代种中，新生代的内存量极小，64位下大概是32MB 回收算法： 可以检署为复制-清空，把存活者的变量复制到to空间，然后把from空间清空，然后对调from和to。这样可以提升回收速度，典型的牺牲空间换时间</p><h3 id="老生代" tabindex="-1">老生代 <a class="header-anchor" href="#老生代" aria-label="Permalink to &quot;老生代&quot;">​</a></h3><p>生存时间比较长的变量，会转存到老生代，老生代占据了几乎所有内存。64位下大概是1400MB 回收分为三步：</p><ol><li>标记已死变量</li><li>清楚已死变量</li><li>整理磁盘（因为数组这类的变量，需要占用连续内存，所以需要整理磁盘）</li></ol><h3 id="新生代和老生代如何转化" tabindex="-1">新生代和老生代如何转化 <a class="header-anchor" href="#新生代和老生代如何转化" aria-label="Permalink to &quot;新生代和老生代如何转化&quot;">​</a></h3><ol><li>新生代发现本次复制后，会占用超过百分之25的to空间。</li><li>这个对象已经经历过一次回收</li></ol><h2 id="为什么大小设置成这样" tabindex="-1">为什么大小设置成这样？ <a class="header-anchor" href="#为什么大小设置成这样" aria-label="Permalink to &quot;为什么大小设置成这样？&quot;">​</a></h2><ol><li>1.4g对于浏览器脚本来说够用，浏览器端我们其实很少会遇到使用大量内存的场景</li><li>JS是单线程的，回收的时候是阻塞式的，也就是进行垃圾回收的时候会中断代码的执行。</li></ol><h2 id="什么时候触发回收" tabindex="-1">什么时候触发回收？ <a class="header-anchor" href="#什么时候触发回收" aria-label="Permalink to &quot;什么时候触发回收？&quot;">​</a></h2><ol><li>执行完一次代码</li><li>内存不够的时候</li></ol><h2 id="那到底怎么判定一个变量可以回收呢" tabindex="-1">那到底怎么判定一个变量可以回收呢 <a class="header-anchor" href="#那到底怎么判定一个变量可以回收呢" aria-label="Permalink to &quot;那到底怎么判定一个变量可以回收呢&quot;">​</a></h2><ol><li>全局变量会直到程序执行完毕，才会回收。</li><li>普通变量，就是当他们失去引用</li></ol><h2 id="优化的建议" tabindex="-1">优化的建议 <a class="header-anchor" href="#优化的建议" aria-label="Permalink to &quot;优化的建议&quot;">​</a></h2><ol><li>尽量不要定义全局，定义了及时手动释放</li><li>注意闭包</li></ol><h2 id="node端一些特殊点" tabindex="-1">Node端一些特殊点 <a class="header-anchor" href="#node端一些特殊点" aria-label="Permalink to &quot;Node端一些特殊点&quot;">​</a></h2><p>Node可以手动触发垃圾回收- global.gc Node端可以设置内存- node --max-old-space-size=1700 test.js和node --max-new-space-size=1024 test.js</p>',22),r=[t];function s(h,d,n,c,p,_){return l(),e("div",null,r)}const m=a(o,[["render",s]]);export{b as __pageData,m as default};
