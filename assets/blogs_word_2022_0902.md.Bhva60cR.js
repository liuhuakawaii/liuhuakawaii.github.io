import{_ as s,c as n,o as a,a3 as p}from"./chunks/framework.DpzXWsSh.js";const m=JSON.parse('{"title":"UI组件的二次封装实践指南","description":"","frontmatter":{"title":"UI组件的二次封装实践指南","date":"2022-9-2","categories":["vue","工具轮子","工作随记"]},"headers":[],"relativePath":"blogs/word/2022/0902.md","filePath":"blogs/word/2022/0902.md"}'),t={name:"blogs/word/2022/0902.md"},e=p(`<h2 id="背景" tabindex="-1">背景 <a class="header-anchor" href="#背景" aria-label="Permalink to &quot;背景&quot;">​</a></h2><p>在Vue项目中，我们经常需要对第三方UI组件库(如Element UI)进行二次封装，以满足业务需求。本文将介绍如何优雅地实现组件二次封装。</p><h2 id="核心概念" tabindex="-1">核心概念 <a class="header-anchor" href="#核心概念" aria-label="Permalink to &quot;核心概念&quot;">​</a></h2><h3 id="_1-attrs" tabindex="-1">1. $attrs <a class="header-anchor" href="#_1-attrs" aria-label="Permalink to &quot;1. $attrs&quot;">​</a></h3><ul><li>包含了父组件传递的所有属性中，未被当前组件props声明的属性</li><li>在Vue3中，<code>$attrs</code>同时包含了属性和事件</li></ul><h3 id="_2-inheritattrs" tabindex="-1">2. inheritAttrs <a class="header-anchor" href="#_2-inheritattrs" aria-label="Permalink to &quot;2. inheritAttrs&quot;">​</a></h3><ul><li>用于控制是否在组件根元素上继承未被声明的属性</li><li>设置<code>inheritAttrs: false</code>可以避免根元素继承不需要的属性，防止出现意外问题(如type被错误修改)</li></ul><h2 id="实现示例" tabindex="-1">实现示例 <a class="header-anchor" href="#实现示例" aria-label="Permalink to &quot;实现示例&quot;">​</a></h2><h3 id="vue2版本实现" tabindex="-1">Vue2版本实现 <a class="header-anchor" href="#vue2版本实现" aria-label="Permalink to &quot;Vue2版本实现&quot;">​</a></h3><div class="language-vue:components/MyInput.vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue:components/MyInput.vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div class=&quot;my-input&quot;&gt;</span></span>
<span class="line"><span>    &lt;!-- 通过v-bind=&quot;$attrs&quot;传递属性，v-on=&quot;$listeners&quot;传递事件 --&gt;</span></span>
<span class="line"><span>    &lt;el-input ref=&quot;inp&quot; v-bind=&quot;$attrs&quot; v-on=&quot;$listeners&quot;&gt;</span></span>
<span class="line"><span>      &lt;!-- 处理普通插槽 --&gt;</span></span>
<span class="line"><span>      &lt;slot </span></span>
<span class="line"><span>        v-for=&quot;(value, name) in $slots&quot; </span></span>
<span class="line"><span>        :name=&quot;name&quot; </span></span>
<span class="line"><span>        :slot=&quot;name&quot;</span></span>
<span class="line"><span>      &gt;&lt;/slot&gt;</span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>      &lt;!-- 处理作用域插槽 --&gt;</span></span>
<span class="line"><span>      &lt;template </span></span>
<span class="line"><span>        v-for=&quot;(value, name) in $scopedSlots&quot; </span></span>
<span class="line"><span>        #[name]=&quot;scope&quot;</span></span>
<span class="line"><span>      &gt;</span></span>
<span class="line"><span>        &lt;slot :name=&quot;name&quot; v-bind=&quot;scope || {}&quot;&gt;&lt;/slot&gt;</span></span>
<span class="line"><span>      &lt;/template&gt;</span></span>
<span class="line"><span>    &lt;/el-input&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  inheritAttrs: false,</span></span>
<span class="line"><span>  mounted() {</span></span>
<span class="line"><span>    // 将el-input的方法挂载到当前组件实例上</span></span>
<span class="line"><span>    const entries = Object.entries(this.$refs.inp)</span></span>
<span class="line"><span>    for (const [key, value] of entries) {</span></span>
<span class="line"><span>      this[key] = value</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><h3 id="vue3版本实现" tabindex="-1">Vue3版本实现 <a class="header-anchor" href="#vue3版本实现" aria-label="Permalink to &quot;Vue3版本实现&quot;">​</a></h3><div class="language-vue:components/MyInput.vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue:components/MyInput.vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div class=&quot;my-input&quot;&gt;</span></span>
<span class="line"><span>    &lt;!-- Vue3中$attrs已包含所有属性和事件 --&gt;</span></span>
<span class="line"><span>    &lt;el-input ref=&quot;inp&quot; v-bind=&quot;$attrs&quot;&gt;</span></span>
<span class="line"><span>      &lt;!-- 统一处理所有插槽 --&gt;</span></span>
<span class="line"><span>      &lt;template </span></span>
<span class="line"><span>        v-for=&quot;(value, name) in $slots&quot; </span></span>
<span class="line"><span>        #[name]=&quot;slotData&quot;</span></span>
<span class="line"><span>      &gt;</span></span>
<span class="line"><span>        &lt;slot :name=&quot;name&quot; v-bind=&quot;slotData || {}&quot;&gt;&lt;/slot&gt;</span></span>
<span class="line"><span>      &lt;/template&gt;</span></span>
<span class="line"><span>    &lt;/el-input&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  inheritAttrs: false,</span></span>
<span class="line"><span>  mounted() {</span></span>
<span class="line"><span>    // 将el-input的方法挂载到当前组件实例上</span></span>
<span class="line"><span>    const entries = Object.entries(this.$refs.inp)</span></span>
<span class="line"><span>    for (const [key, value] of entries) {</span></span>
<span class="line"><span>      this[key] = value</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><h2 id="注意事项" tabindex="-1">注意事项 <a class="header-anchor" href="#注意事项" aria-label="Permalink to &quot;注意事项&quot;">​</a></h2><ol><li>设置<code>inheritAttrs: false</code>很重要，可以避免属性被错误继承</li><li>在<code>mounted</code>钩子中复制原组件方法，确保封装后的组件保持原有功能</li><li>需要正确处理普通插槽和作用域插槽 这样的组件封装方式可以完整保留原组件的功能，同时允许你添加自定义的逻辑和样式。</li></ol>`,14),l=[e];function i(o,c,u,r,d,h){return a(),n("div",null,l)}const g=s(t,[["render",i]]);export{m as __pageData,g as default};
