import{_ as t,c as e,o as n,a3 as o}from"./chunks/framework.DpzXWsSh.js";const g=JSON.parse('{"title":"书签立体角标","description":"","frontmatter":{"title":"书签立体角标","date":"2023-3-07","categories":["css","css案例"]},"headers":[],"relativePath":"blogs/css/demo/20230307.md","filePath":"blogs/css/demo/20230307.md"}'),i={name:"blogs/css/demo/20230307.md"},a=o(`<h2 id="书签立体角标" tabindex="-1">书签立体角标 <a class="header-anchor" href="#书签立体角标" aria-label="Permalink to &quot;书签立体角标&quot;">​</a></h2><p><a href="https://blog.51cto.com/u_15663467/5397719" target="_blank" rel="noreferrer"></a> + \`\`\`html<br><template><div><div class="cornerMarkBox"><img style="width:auto;height:auto;max-width:100%;max-height:100%;" src="https://preview.qiantucdn.com/58pic/44/05/54/47858PIC4pj2zTn5Dhzr6_PIC2018.png!w1024_new_0"><img style="width:auto;height:auto;max-width:100%;max-height:100%;" src="https://preview.qiantucdn.com/58pic/44/05/54/47858PIC4pj2zTn5Dhzr6_PIC2018.png!w1024_new_1024"><div class="MarkBox"><div class="insideBox">水香木鱼</div></div></div></div></template></p><pre><code>      &lt;style lang=&quot;less&quot; scoped&gt;
      //去除img标签默认的水平和垂直间距
      img {vertical-align:bottom}

      //大盒子
      .cornerMarkBox {
        width: 400px;
        height: 500px;
        position: relative;
        background: #1890ff;
        overflow: visible;
        margin: 20px;
        display: inline-block;
      }

      //角标盒子
      .MarkBox {
        width: 106px;
        height: 108px;
        overflow: hidden;
        position: absolute;
        top: -6px;
        left: 297px;
        //内侧盒子
        .insideBox {
          line-height: 18px;
          text-align: center;
          transform: rotate(45deg);
          position: relative;
          padding: 8px 0;
          left: -8px;
          top: 25px;
          width: 150px;
          background: red;
          color: white;
          box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
          letter-spacing: 1px;
        }
      }
      .insideBox:before,
      .insideBox:after {
        content: &quot;&quot;;
        border-top: 4px solid #4e7c7d;
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        position: absolute;
        bottom: -4px;
      }
      //左上阴影
      .insideBox:before {
        left: 0;
      }

      .insideBox:after {
        right: 0;
      }

      &lt;/style&gt;
\`\`\`
</code></pre>`,3),r=[a];function s(d,p,l,c,h,x){return n(),e("div",null,r)}const m=t(i,[["render",s]]);export{g as __pageData,m as default};
