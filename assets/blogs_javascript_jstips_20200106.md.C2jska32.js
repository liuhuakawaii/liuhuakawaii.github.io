import{_ as t,c as n,o as a,l as e,a as s}from"./chunks/framework.DpzXWsSh.js";const m=JSON.parse('{"title":"判断对象中是否存在某个属性","description":"","frontmatter":{"title":"判断对象中是否存在某个属性","date":"2020-1-06","categories":["javascript"]},"headers":[],"relativePath":"blogs/javascript/jstips/20200106.md","filePath":"blogs/javascript/jstips/20200106.md"}'),o={name:"blogs/javascript/jstips/20200106.md"},r=e("h2",{id:"判断对象中是否存在某个属性",tabindex:"-1"},[s("判断对象中是否存在某个属性 "),e("a",{class:"header-anchor",href:"#判断对象中是否存在某个属性","aria-label":'Permalink to "判断对象中是否存在某个属性"'},"​")],-1),c=e("ul",null,[e("li")],-1),i=e("pre",null,[e("code",null,`\`\`\`js     
      /**
       * 判断对象中是否存在某个属性
      */
      function hasProperty(obj, key) {
        return key in obj //原型链上的属性也算，例如toString
      }

      function hasOwnProperty(obj, key) {
        return obj.hasOwnProperty(key) //只能获取自身的属性，原型链上的获取不到
      }

      function hasProperty(obj, key) {
        return Object.keys(obj).includes(key) //无法获取enumerable为FALSE的属性
      }   
\`\`\`
`)],-1),l=[r,c,i];function p(d,_,u,h,j,b){return a(),n("div",null,l)}const y=t(o,[["render",p]]);export{m as __pageData,y as default};
