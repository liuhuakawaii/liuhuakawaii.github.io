import{_ as l,D as h,c as t,l as s,a as i,I as k,w as p,a7 as a,o as e}from"./chunks/framework.DLSH1pMh.js";const q=JSON.parse('{"title":"面试宝典 - html+css题目","description":"","frontmatter":{"title":"面试宝典 - html+css题目","needVerify":true,"date":"2024-12-12T00:00:00.000Z","categories":["hide"]},"headers":[],"relativePath":"blogs/hide/html+css题目.md","filePath":"blogs/hide/html+css题目.md"}'),E={name:"blogs/hide/html+css题目.md"},d=s("h1",{id:"html-css题目",tabindex:"-1"},[i("HTML+CSS题目 "),s("a",{class:"header-anchor",href:"#html-css题目","aria-label":'Permalink to "HTML+CSS题目"'},"​")],-1),r=s("h2",{id:"_1-什么是重绘-什么是回流-如何减少回流",tabindex:"-1"},[i("1. 什么是重绘，什么是回流？如何减少回流？ "),s("a",{class:"header-anchor",href:"#_1-什么是重绘-什么是回流-如何减少回流","aria-label":'Permalink to "1. 什么是重绘，什么是回流？如何减少回流？"'},"​")],-1),g=s("li",null,[s("strong",null,"重绘（Re-paint）："),i(" 指页面元素在样式改变后，在不影响其布局的情况下，浏览器重新绘制该元素。如字体颜色，背景颜色等。")],-1),y=s("li",null,[s("strong",null,"回流（Reflow）****："),i(" 指页面元素在样式改变后，需要重新计算其位置、尺寸等信息，浏览器重新计算该元素。如宽度、高度、位置等。")],-1),o=s("li",null,"回流的成本比重绘高，因为回流需要重新计算页面元素的位置、尺寸等信息，而重绘只需要重新绘制页面元素。",-1),c=s("strong",null,"如何减少回流：",-1),F=a("",3),C=a("",2),u=a("",122);function B(b,A,D,m,v,f){const n=h("font");return e(),t("div",null,[d,r,s("ul",null,[g,y,o,s("li",null,[c,s("ul",null,[F,s("li",null,[i("**使用文档片段(DocumentFragment)：**当需要在页面中插入大量元素时，可以将元素放入一个文档片段中，然后再一次性插入到页面中，可以减少回流次数。（"),k(n,{color:"red"},{default:p(()=>[i("虚拟dom vue的方式")]),_:1}),i("）")]),C])])]),u])}const _=l(E,[["render",B]]);export{q as __pageData,_ as default};
