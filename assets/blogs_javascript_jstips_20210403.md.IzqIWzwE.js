import{_ as a,c as s,o as e,a3 as t}from"./chunks/framework.DpzXWsSh.js";const i="/assets/01pic.D0sFbVvU.png",x=JSON.parse('{"title":"js赋值运算的坑","description":"","frontmatter":{"title":"js赋值运算的坑","date":"2021-4-03","categories":["javascript"]},"headers":[],"relativePath":"blogs/javascript/jstips/20210403.md","filePath":"blogs/javascript/jstips/20210403.md"}'),o={name:"blogs/javascript/jstips/20210403.md"},l=t(`<h2 id="js赋值运算的坑" tabindex="-1">js赋值运算的坑 <a class="header-anchor" href="#js赋值运算的坑" aria-label="Permalink to &quot;js赋值运算的坑&quot;">​</a></h2><pre><code>  \`\`\`js  
      var a = {
        n: 1
      }
      var b = a
      a.x = a = {
        n: 2
      }
      console.log(a.x, b.x);  
  \`\`\`   
</code></pre><ol><li><p>赋值运算流程</p><ol><li>找到待赋值变量的内存地址，准备赋值</li><li>运算右侧代码，得到要赋值的数据</li><li>将右侧运算的数据放入到之前的地址中</li><li>返回整个表达式的结果为右侧运算的数据</li></ol></li><li><p>例子流程</p><ol><li>要对a.x进行赋值了，先找到a.x的地址，没有就新建一个地址，然后开始运算等式右边</li><li>等式右边依旧是赋值，要对a进行赋值了，找到a的地址，然后运算等式右边</li><li>将<code>{n:2}</code>与a的地址链接，a的赋值结束，然后a.x的地址是已经创建好了的，将<code>{n:2}</code>的与a.x进行链接</li></ol><p><img src="`+i+'" alt=""></p></li></ol>',3),n=[l];function c(r,_,p,d,j,m){return e(),s("div",null,n)}const f=a(o,[["render",c]]);export{x as __pageData,f as default};
