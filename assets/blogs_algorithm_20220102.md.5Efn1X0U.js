import{_ as i,c as s,o as a,a5 as l}from"./chunks/framework.Bx-mEslM.js";const y=JSON.parse('{"title":"前端开发者必懂的时间复杂度分析","description":"","frontmatter":{"title":"前端开发者必懂的时间复杂度分析","date":"2022-1-02","categories":["算法"]},"headers":[],"relativePath":"blogs/algorithm/20220102.md","filePath":"blogs/algorithm/20220102.md"}'),h={name:"blogs/algorithm/20220102.md"},n=l(`<h1 id="时间复杂度详解" tabindex="-1">时间复杂度详解 <a class="header-anchor" href="#时间复杂度详解" aria-label="Permalink to &quot;时间复杂度详解&quot;">​</a></h1><p>在前端开发中，了解时间复杂度对于编写高效的代码至关重要。本文将通过实例详细讲解时间复杂度的概念及应用。</p><h2 id="_1-基础概念" tabindex="-1">1. 基础概念 <a class="header-anchor" href="#_1-基础概念" aria-label="Permalink to &quot;1. 基础概念&quot;">​</a></h2><h3 id="_1-1-什么是常数操作" tabindex="-1">1.1 什么是常数操作？ <a class="header-anchor" href="#_1-1-什么是常数操作" aria-label="Permalink to &quot;1.1 什么是常数操作？&quot;">​</a></h3><p>常数操作是指执行时间与输入数据量无关的操作。无论输入规模如何，这类操作都能在固定时间内完成。</p><p><strong>常见的常数操作包括：</strong></p><ul><li>数组索引访问：<code>arr[i]</code></li><li>基本算术运算：<code>+</code>、<code>-</code>、<code>*</code>、<code>/</code></li><li>变量赋值：<code>let a = 1</code></li><li>位运算：<code>&amp;</code>、<code>|</code>、<code>&gt;&gt;</code>等</li></ul><p><strong>非常数操作示例：</strong></p><ul><li>数组遍历：需要随数组大小增加操作次数</li><li>链表查找：需要逐个节点遍历</li></ul><h3 id="_1-2-时间复杂度计算原则" tabindex="-1">1.2 时间复杂度计算原则 <a class="header-anchor" href="#_1-2-时间复杂度计算原则" aria-label="Permalink to &quot;1.2 时间复杂度计算原则&quot;">​</a></h3><p>时间复杂度采用大O表示法，计算规则如下：</p><ol><li>只保留最高阶项</li><li>忽略系数</li><li>忽略低阶项</li></ol><p><strong>示例：冒泡排序分析</strong></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> bubbleSort</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">arr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> arr.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">length</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> j </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; j </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> arr.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">length</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; j</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(arr[j] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> arr[j</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                [arr[j], arr[j</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [arr[j</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], arr[j]];</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="_2-master公式" tabindex="-1">2. Master公式 <a class="header-anchor" href="#_2-master公式" aria-label="Permalink to &quot;2. Master公式&quot;">​</a></h2><p>Master公式是分析递归算法时间复杂度的有力工具。</p><h3 id="_2-1-公式形式" tabindex="-1">2.1 公式形式 <a class="header-anchor" href="#_2-1-公式形式" aria-label="Permalink to &quot;2.1 公式形式&quot;">​</a></h3><p>T(N) = a*T(N/b) + O(N^d)</p><p>其中：</p><ul><li>T(N)：问题规模为N的运行时间</li><li>a：子问题个数</li><li>b：子问题规模是原问题的1/b</li><li>O(N^d)：分解和合并的时间复杂度</li></ul><h3 id="_2-2-结果判断" tabindex="-1">2.2 结果判断 <a class="header-anchor" href="#_2-2-结果判断" aria-label="Permalink to &quot;2.2 结果判断&quot;">​</a></h3><p>比较 log(b,a) 和 d：</p><ol><li>log(b,a) &lt; d → O(N^d)</li><li>log(b,a) &gt; d → O(N^log(b,a))</li><li>log(b,a) = d → O(N^d * logN)</li></ol><p><strong>实际应用示例：二分查找</strong></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> binarySearch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">arr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">target</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> left </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> right </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> arr.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">length</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    while</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(left </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> right) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> mid </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Math.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">floor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((left </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> right) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(arr[mid] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> target) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> mid;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(arr[mid] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> target) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            right </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> mid </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            left </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> mid </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>分析：</p><ul><li>a = 1（每次递归调用一个子问题）</li><li>b = 2（每次规模减半）</li><li>d = 0（除了递归外的操作是常数级）</li><li>log(2,1) = 0 = d</li><li>所以时间复杂度为 O(logN)</li></ul><h2 id="_3-常见时间复杂度对比" tabindex="-1">3. 常见时间复杂度对比 <a class="header-anchor" href="#_3-常见时间复杂度对比" aria-label="Permalink to &quot;3. 常见时间复杂度对比&quot;">​</a></h2><p>按照从好到坏的顺序：</p><ol><li>O(1) &lt; O(logN) &lt; O(N) &lt; O(NlogN) &lt; O(N²) &lt; O(2^N) &lt; O(N!)</li></ol><p><strong>前端常见操作的时间复杂度：</strong></p><ul><li>数组push/pop：O(1)</li><li>Object属性访问：O(1)</li><li>Array.prototype.sort：O(NlogN)</li><li>嵌套循环：O(N²)</li></ul><h2 id="实践建议" tabindex="-1">实践建议 <a class="header-anchor" href="#实践建议" aria-label="Permalink to &quot;实践建议&quot;">​</a></h2><ol><li>优先使用时间复杂度较低的算法</li><li>注意数组方法的时间复杂度（如splice是O(N)）</li><li>避免不必要的嵌套循环</li><li>合理使用缓存优化性能</li></ol><h2 id="参考资料" tabindex="-1">参考资料 <a class="header-anchor" href="#参考资料" aria-label="Permalink to &quot;参考资料&quot;">​</a></h2><ul><li><a href="https://developer.mozilla.org/en-US/docs/Glossary/Time_complexity" target="_blank" rel="noreferrer">Big O Notation</a></li><li><a href="https://www.bigocheatsheet.com/" target="_blank" rel="noreferrer">JavaScript数组方法的时间复杂度</a></li></ul>`,36),t=[n];function k(p,e,r,E,d,g){return a(),s("div",null,t)}const c=i(h,[["render",k]]);export{y as __pageData,c as default};