import{_ as s,c as a,o as i,a5 as l}from"./chunks/framework.BIhQMg0k.js";const g=JSON.parse('{"title":"wheel事件和scroll事件的深入理解","description":"","frontmatter":{"title":"wheel事件和scroll事件的深入理解","date":"2023-7-25","categories":["javascript","工作随记"]},"headers":[],"relativePath":"blogs/word/2023/0725.md","filePath":"blogs/word/2023/0725.md"}'),e={name:"blogs/word/2023/0725.md"},t=l(`<h1 id="wheel事件和scroll事件的深入理解-🔍" tabindex="-1">wheel事件和scroll事件的深入理解 🔍 <a class="header-anchor" href="#wheel事件和scroll事件的深入理解-🔍" aria-label="Permalink to &quot;wheel事件和scroll事件的深入理解 🔍&quot;">​</a></h1><h2 id="背景介绍-📝" tabindex="-1">背景介绍 📝 <a class="header-anchor" href="#背景介绍-📝" aria-label="Permalink to &quot;背景介绍 📝&quot;">​</a></h2><p>在开发一个水平滚动组件(XScroll)时，遇到了一个有趣的问题：笔记本触控板的双指滚动表现异常。这个问题引发了对<code>wheel</code>事件和<code>scroll</code>事件的深入研究。</p><h2 id="问题描述-❓" tabindex="-1">问题描述 ❓ <a class="header-anchor" href="#问题描述-❓" aria-label="Permalink to &quot;问题描述 ❓&quot;">​</a></h2><ul><li>组件通过<code>transform</code>将垂直布局转换为水平展示</li><li>鼠标滚轮上下滚动时可以正常实现视觉上的左右滑动</li><li>但触控板双指左右滑动无法实现预期效果，必须上下滑动才能触发</li></ul><h2 id="wheel事件详解-🎡" tabindex="-1">wheel事件详解 🎡 <a class="header-anchor" href="#wheel事件详解-🎡" aria-label="Permalink to &quot;wheel事件详解 🎡&quot;">​</a></h2><h3 id="触发场景" tabindex="-1">触发场景 <a class="header-anchor" href="#触发场景" aria-label="Permalink to &quot;触发场景&quot;">​</a></h3><ul><li>🖱️ 鼠标滚轮滚动</li><li>📱 触控板双指滑动</li><li>⌨️ 键盘PageUp/PageDown/Home/End按键</li><li>📲 触控笔和触摸屏滑动手势</li></ul><h3 id="重要属性" tabindex="-1">重要属性 <a class="header-anchor" href="#重要属性" aria-label="Permalink to &quot;重要属性&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">event.deltaX    </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 水平方向滚动距离</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">event.deltaY    </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 垂直方向滚动距离</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">event.deltaZ    </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Z轴方向滚动距离</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">event.deltaMode </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 滚动单位(0:像素, 1:行, 2:页)</span></span></code></pre></div><h3 id="设备差异-⚠️" tabindex="-1">设备差异 ⚠️ <a class="header-anchor" href="#设备差异-⚠️" aria-label="Permalink to &quot;设备差异 ⚠️&quot;">​</a></h3><ol><li><p>鼠标滚轮：</p><ul><li>主要改变<code>deltaY</code></li><li>单次触发值较大(约150)</li><li>触发频率相对较低</li></ul></li><li><p>触控板：</p><ul><li>双指左右滑动改变<code>deltaX</code></li><li>双指上下滑动改变<code>deltaY</code></li><li>触发值较小，但频率高</li></ul></li></ol><h2 id="scroll事件详解-📜" tabindex="-1">scroll事件详解 📜 <a class="header-anchor" href="#scroll事件详解-📜" aria-label="Permalink to &quot;scroll事件详解 📜&quot;">​</a></h2><h3 id="核心属性" tabindex="-1">核心属性 <a class="header-anchor" href="#核心属性" aria-label="Permalink to &quot;核心属性&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">element.scrollTop    </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 垂直滚动位置</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">element.scrollLeft   </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 水平滚动位置</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">element.scrollHeight </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 内容完整高度</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">element.scrollWidth  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 内容完整宽度</span></span></code></pre></div><h3 id="性能注意事项-⚡" tabindex="-1">性能注意事项 ⚡ <a class="header-anchor" href="#性能注意事项-⚡" aria-label="Permalink to &quot;性能注意事项 ⚡&quot;">​</a></h3><p>scroll事件触发频率极高，建议使用节流(throttle)或防抖(debounce)进行性能优化。</p><h2 id="两者关系与实践建议-🔗" tabindex="-1">两者关系与实践建议 🔗 <a class="header-anchor" href="#两者关系与实践建议-🔗" aria-label="Permalink to &quot;两者关系与实践建议 🔗&quot;">​</a></h2><h3 id="触发顺序" tabindex="-1">触发顺序 <a class="header-anchor" href="#触发顺序" aria-label="Permalink to &quot;触发顺序&quot;">​</a></h3><p>通常<code>wheel</code>事件先于<code>scroll</code>事件触发，但在不同浏览器中可能有差异。</p><h3 id="常见问题" tabindex="-1">常见问题 <a class="header-anchor" href="#常见问题" aria-label="Permalink to &quot;常见问题&quot;">​</a></h3><p>❌ 错误示例：直接使用deltaY</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">box.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addEventListener</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;wheel&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">e</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    e.currentTarget.scrollLeft </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> e.deltaY;  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 会造成卡顿</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><p>✅ 优化示例：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">box.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addEventListener</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;wheel&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">e</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    e.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">preventDefault</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> delta</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Math.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">abs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(e.deltaX) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Math.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">abs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(e.deltaY) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> e.deltaX </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> e.deltaY;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    e.currentTarget.scrollLeft </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> delta </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 添加平滑系数</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><h3 id="注意事项" tabindex="-1">注意事项 <a class="header-anchor" href="#注意事项" aria-label="Permalink to &quot;注意事项&quot;">​</a></h3><ol><li>在<code>wheel</code>事件中修改<code>scrollTop/scrollLeft</code>会阻止<code>scroll</code>事件触发</li><li>建议为滚动添加平滑效果：<code>scroll-behavior: smooth</code></li><li>考虑不同设备的滚动特性，适当调整滚动系数</li></ol><h2 id="总结-📌" tabindex="-1">总结 📌 <a class="header-anchor" href="#总结-📌" aria-label="Permalink to &quot;总结 📌&quot;">​</a></h2><p>理解<code>wheel</code>和<code>scroll</code>事件的区别和联系，对于开发更好的滚动交互体验至关重要。在实际应用中，需要考虑不同设备的特性，合理处理滚动行为，并注意性能优化。</p>`,29),h=[t];function n(p,k,r,d,o,c){return i(),a("div",null,h)}const y=s(e,[["render",n]]);export{g as __pageData,y as default};