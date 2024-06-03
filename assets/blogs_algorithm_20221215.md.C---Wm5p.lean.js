import{_ as k,D as p,c as t,l as s,a as i,I as l,w as h,a3 as a,o as e}from"./chunks/framework.DpzXWsSh.js";const E="/assets/121501.BfgVQVq2.png",r="/assets/121504.C_1CkEGT.png",d="/assets/121505.DMvOHw07.png",g="/assets/121502.ZecbxRoS.png",y="/assets/121503.BsD0JGDM.png",F="/assets/021201pic.BPRPn77S.png",c="/assets/121601.JyC2ztR_.png",U=JSON.parse('{"title":"数据结构-二叉树","description":"","frontmatter":{"title":"数据结构-二叉树","date":"2022-12-15T00:00:00.000Z","categories":["算法"]},"headers":[],"relativePath":"blogs/algorithm/20221215.md","filePath":"blogs/algorithm/20221215.md"}'),o={name:"blogs/algorithm/20221215.md"},A=a("",8),D=s("p",null,"深度优先遍历（DFS）",-1),C=s("p",null,[i("递归序与三种遍历的顺序"),s("br"),s("img",{src:r,alt:""})],-1),u=s("li",null,"对于上图的遍历顺序",-1),B=s("li",null,"递归序：124442555213666377731",-1),f=s("strong",null,"中--左--右",-1),_=s("strong",null,"对于递归序，第一次来到节点执行打印",-1),v=s("strong",null,"左--中--右",-1),b=s("strong",null,"对于递归序，第二次来到节点执行打印",-1),m=s("strong",null,"左--右--中",-1),T=s("strong",null,"对于递归序，第三次来到节点执行打印",-1),N=a("",5),S=a("",1),j=s("h3",{id:"二叉树解题的思维模式",tabindex:"-1"},[i("二叉树解题的思维模式 "),s("a",{class:"header-anchor",href:"#二叉树解题的思维模式","aria-label":'Permalink to "二叉树解题的思维模式"'},"​")],-1),q=s("li",null,"是否可以通过遍历一遍二叉树得到答案? (遍历的思维)",-1),P=s("li",null,"是否可以定义一个递归函数，通过子问题（子树）的答案推导出原问题的答案？ (分解问题的思维)",-1),w=s("li",null,"其他的节点不用你操心，递归函数会帮你在所有节点上执行相同的操作",-1),V=a("",1),O=a("",1),x=a("",12);function I(L,R,H,M,$,G){const n=p("font");return e(),t("div",null,[A,s("ol",null,[s("li",null,[D,s("ol",null,[s("li",null,[C,s("ul",null,[u,B,s("li",null,[i("先序遍历:对于每个子节点都是按照"),f,i("的顺序遍历---1245367 "),l(n,{color:"red"},{default:h(()=>[_]),_:1})]),s("li",null,[i("中序遍历: "),v,i("（4251637） "),l(n,{color:"red"},{default:h(()=>[b]),_:1})]),s("li",null,[i("后序遍历: "),m,i("（4526731） "),l(n,{color:"red"},{default:h(()=>[T]),_:1})])])]),N])]),S]),j,s("ol",null,[q,P,s("li",null,[i("无论使用那种思维模式，你都需要思考: "),s("ul",null,[s("li",null,[s("strong",null,[l(n,{color:"red"},{default:h(()=>[i("如果单独抽出一个二叉树节点，它需要做什么事情？需要在什么时候（前/中/后序位置）做")]),_:1})])]),w])]),V,s("li",null,[s("strong",null,[l(n,{color:"red"},{default:h(()=>[i("二叉树的所有问题，就是让你在前中后序位置注入巧妙的代码逻辑，去达到自己的目的")]),_:1})])]),O]),x])}const Z=k(o,[["render",I]]);export{U as __pageData,Z as default};
