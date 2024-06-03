import{_ as a,c as t,o as e,a3 as s}from"./chunks/framework.DpzXWsSh.js";const N=JSON.parse('{"title":"map和parseInt","description":"","frontmatter":{"title":"map和parseInt","date":"2021-5-04","categories":["javascript"]},"headers":[],"relativePath":"blogs/javascript/jstips/20210504.md","filePath":"blogs/javascript/jstips/20210504.md"}'),r={name:"blogs/javascript/jstips/20210504.md"},p=s('<h2 id="map和parseint" tabindex="-1">map和parseInt <a class="header-anchor" href="#map和parseint" aria-label="Permalink to &quot;map和parseInt&quot;">​</a></h2><ul><li><p><code>[&#39;1&#39;,&#39;2&#39;,&#39;3&#39;].map(parseInt)</code>运行结果？<br> ```js<br> //我们首先要了解map的运行机制<br> [&#39;1&#39;,&#39;2&#39;,&#39;3&#39;].map(函数) //map会得到一个新的数组，新数组长度和原数组一致<br> [ 函数(&#39;1&#39;,0), 函数(&#39;2&#39;,1), 函数(&#39;3&#39;,2), ] //了解parseInt的参数使用 //parseInt(string，radix) //radix是进制（2-36），因为有26个英文字母和10个数字，所以最大36</p><pre><code>  //1.如果进制传0/NaN/Infinity的话，如果第一个参数以0x开头，则当做16进制，否则当做10进制    \n  //2.如果进制小于2或者大于36，则返回NaN  \n\n  //[1,NaN,NaN]   \n```\n</code></pre></li></ul>',2),n=[p];function i(o,c,_,d,l,m){return e(),t("div",null,n)}const f=a(r,[["render",i]]);export{N as __pageData,f as default};
