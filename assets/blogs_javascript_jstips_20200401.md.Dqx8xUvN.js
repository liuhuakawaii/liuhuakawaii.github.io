import{_ as e,c as a,o as n,a3 as t}from"./chunks/framework.DpzXWsSh.js";const h=JSON.parse('{"title":"js将base64转为pdf文件并实现预览功能","description":"","frontmatter":{"title":"js将base64转为pdf文件并实现预览功能","date":"2020-4-01","categories":["javascript"]},"headers":[],"relativePath":"blogs/javascript/jstips/20200401.md","filePath":"blogs/javascript/jstips/20200401.md"}'),o={name:"blogs/javascript/jstips/20200401.md"},r=t(`<h2 id="js将base64转为pdf文件并实现预览功能" tabindex="-1">js将base64转为pdf文件并实现预览功能 <a class="header-anchor" href="#js将base64转为pdf文件并实现预览功能" aria-label="Permalink to &quot;js将base64转为pdf文件并实现预览功能&quot;">​</a></h2><h3 id="方式一-通过img标签或者iframe标签的src进行输出" tabindex="-1">方式一： 通过img标签或者iframe标签的src进行输出 <a class="header-anchor" href="#方式一-通过img标签或者iframe标签的src进行输出" aria-label="Permalink to &quot;方式一： 通过img标签或者iframe标签的src进行输出&quot;">​</a></h3><pre><code>\`\`\`js  
    &lt;img class=&quot;img&quot; src=&quot;data:image/jpg;base64,{base64}&quot; &gt;
    &lt;iframe  :src=&quot;&#39;data:application/pdf;base64,&#39;+basedatapdf&quot;&gt;&lt;/iframe&gt;

\`\`\`   
</code></pre><h3 id="方式二-通过blob对象进行输出-推荐" tabindex="-1">方式二： 通过Blob对象进行输出(推荐) <a class="header-anchor" href="#方式二-通过blob对象进行输出-推荐" aria-label="Permalink to &quot;方式二： 通过Blob对象进行输出(推荐)&quot;">​</a></h3><pre><code>\`\`\`js  
    viewPdf (content) {
      const blob = this.base64ToBlob(content)
      if (window.navigator &amp;&amp; window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveOrOpenBlob(blob)
      } else {
        const fileURL = URL.createObjectURL(blob)
        
        //1. 新页面打开pdf
        window.open(fileURL) 
        
        //2. 下载dpf用这个
        const a = document.createElement(&#39;a&#39;)
        a.href = fileURL
        a.download = name + &#39;.pdf&#39;
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
        
        //3. 用本地img、iframe展示pdf
        document.querySelector(&#39;.iframe&#39;).src = fileURL
        
        //删除url绑定
        window.URL.revokeObjectURL(fileURL)
      }
    },
    base64ToBlob (code) {
      code = code.replace(/[\\n\\r]/g, &#39;&#39;)
      const raw = window.atob(code)
      const rawLength = raw.length
      const uInt8Array = new Uint8Array(rawLength)
      while (rawLength--) {uInt8Array[rawLength] = bstr.charCodeAt(rawLength);}
      return new Blob([uInt8Array], { type: &#39;application/pdf&#39; })
    }    
\`\`\`
</code></pre>`,5),s=[r];function i(c,d,l,p,b,f){return n(),a("div",null,s)}const _=e(o,[["render",i]]);export{h as __pageData,_ as default};
