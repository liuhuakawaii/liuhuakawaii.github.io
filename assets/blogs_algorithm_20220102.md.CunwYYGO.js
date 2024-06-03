import{_ as l,c as t,o,a3 as a}from"./chunks/framework.DpzXWsSh.js";const p=JSON.parse('{"title":"时间复杂度","description":"","frontmatter":{"title":"时间复杂度","date":"2022-1-02","categories":["算法"]},"headers":[],"relativePath":"blogs/algorithm/20220102.md","filePath":"blogs/algorithm/20220102.md"}'),e={name:"blogs/algorithm/20220102.md"},i=a('<h2 id="时间复杂度" tabindex="-1">时间复杂度 <a class="header-anchor" href="#时间复杂度" aria-label="Permalink to &quot;时间复杂度&quot;">​</a></h2><ol><li><p>时间复杂度</p><ul><li>一个操作如果和样本的数据量没有关系，每次都是固定时间内完成的操作，叫做<strong>常数操作</strong><ul><li>例如 <code>arr[i]</code>寻址，只是计算了偏移量，<code>+-*/</code>和位运算都是常数操作，遍历，链表查找就不是常数操作</li></ul></li><li>在表达式中，只要高阶项，不要低阶项，也不要高阶项的系数，剩下的部分如果是f(N),那么时间复杂度就是O(f(N)) <ul><li>例如冒泡排序，第一次遍历了N次，然后比较数据N次，交换数据1次，第二遍遍历了N-1次....循环往复，我们可以得知遍历（N+N-1+N-2+...+1）=(N(1+N)/2),同理比较数据也是(N(1+N)/2)，交换数据是N次，总共是（aN^2+bN+c）,忽略之后就是O(N^2)</li></ul></li></ul></li><li><p>利用master公式估算递归行为的时间复杂度</p><ul><li><code>T(N) = a*T(N/b) + O(N^d)</code></li><li>其中T(N)表示母问题的规模，a*T(N/b)表示a个<strong>被等分</strong>的子问题,O(N^d)表示剩余操作的空间复杂度</li><li>时间复杂度： <ul><li>log(b,a) &lt; d --&gt; O(N^d)</li><li>log(b,a) &gt; d --&gt; O(N^log(b,a))</li><li>log(b,a) = d --&gt; O(logN * N^d)</li></ul></li></ul></li></ol>',2),r=[i];function s(d,c,N,_,n,g){return o(),t("div",null,r)}const h=l(e,[["render",s]]);export{p as __pageData,h as default};
