import{_ as p,D as t,c as e,l as s,I as n,w as h,a as i,a3 as a,o as E}from"./chunks/framework.DpzXWsSh.js";const r="/assets/04.8k_Vx70s.png",d="/assets/02.C_pDwkw9.png",g="/assets/03.S28gjJfa.jpg",y="/assets/01.BgMAgCvX.png",Ms=JSON.parse('{"title":"React学习笔记","description":"","frontmatter":{"title":"React学习笔记","date":"2023-5-8","categories":["react","笔记"]},"headers":[],"relativePath":"blogs/note/react.md","filePath":"blogs/note/react.md"}'),c={name:"blogs/note/react.md"},o=a("",4),F=s("li",null,[s("p",null,[s("strong",null,"MVC与MVVM")]),s("ol",null,[s("li",null,"React采用的是MVC体系，Vue采取的是MVVM体系"),s("li",null,[i("MVC：model数据层 + view视图层 + controller控制层 （单向数据驱动视图） "),s("ul",null,[s("li",null,"我们需要按照专业的语法去构建视图（页面）：react中是基于jsx语法来构建视图的"),s("li",null,"构建数据层：但凡在视图中，需要'动态'处理的（获取需要变化的，不论是样式还是内容），我们都要有对应的数据模型"),s("li",null,"控制层：当我们在视图中进行某些操作时，修改了相关数据，react会根据最新的数据重新渲染")])]),s("li",null,"MVVM：model数据层 + view视图层 + viewModel数据/视图监听层 （双向数据驱动视图）")])],-1),A=s("p",null,[s("strong",null,"JSX构建视图的基本知识（javascript and xml）")],-1),D=a("",4),C=s("li",null,[s("code",null,"number/string"),i("：直接渲染值")],-1),u=s("li",null,[s("code",null,"Boolean/null/undefined/Symbol/Bigint"),i(":渲染内容是空")],-1),B=s("li",null,[i("对象：一般不支持渲染，也有特殊情况 "),s("ul",null,[s("li",null,[i("JSX虚拟DOM对象"),s("code",null,"{React.createElement('button',null,'提交')}")]),s("li",null,"给元素设置style行内样式，要求必须写成一个对象格式")])],-1),m=s("li",null,[i("函数对象：不支持在"),s("code",null,"{}"),i("中渲染，但是可以作为函数组件，用"),s("code",null,"<Component/>"),i("方式渲染")],-1),v=a("",2),f=a("",1),b=a("",4),_=a("",1),x=a("",3),S={start:"3"},R=a("",4),q=s("p",null,"ref",-1),T=s("li",null,[s("p",null,"应用场景： 1. 管理焦点，文本选择或媒体播放。 2. 触发强制动画。 3. 集成第三方 DOM 库。")],-1),P=s("strong",null,"给类组件设置ref，获取的是当前组件的实例",-1),j=s("br",null,null,-1),N=s("code",null,"ref='xxx'",-1),w=s("code",null,"this.refs.xxx",-1),M=s("br",null,null,-1),V=s("code",null,"ref ={x=>this.xxx = x}",-1),O=s("code",null,"this.xxx",-1),I=s("code",null,"xxx = React.createRef()",-1),U=s("code",null,"{current:null}",-1),H=s("code",null,"ref = {xxx}",-1),L=s("code",null,"this.xxx.current",-1),z=s("a",{href:"//React.createRef",target:"_blank",rel:"noreferrer"},"//React.createRef",-1),J={ref:"{this.ref1}"},X={ref:"ref2"},W=s("br",null,null,-1),$=s("pre",null,[s("code",null,"      }  \n```\n")],-1),Q=s("li",null,[s("p",null,[s("strong",null,"以上三种使用ref方式不能在函数组件上使用，因为函数组件没有实例"),i(" 1. 可以将该组件转化为 class 组件 2. 可以使用 "),s("code",null,"React.forwardRef"),i("实现ref的转发（可与 "),s("code",null,"useImperativeHandle"),i(" 结合使用） 3. 在函数组件 使用useRef "),s("code",null,"js const Child = React.forwardRef((props,ref)=>{ return <button ref={ref}></button> }) //父组件 render(){ return <Child ref={x=>this.child = x}></Child> }/// console.log(this.child) ")])],-1),Y=s("li",null,[s("p",null,"在HOC中转发ref + 这个技巧对高阶组件（HOC）特别有用（接受一个组件，返回一个组件的函数） ```js function logProps(WrapperdComponent){ class LogProps extends React.Component{ componentDidUpdate(prevProps){"),s("pre",null,[s("code",null,`                  }
                  render(){
                        return <WrapperdComponent {...this.props}/>
                  }
            }
            return LogProps
      }

      function logProps(WrapperdComponent){
            class LogProps extends React.Component{
                  componentDidUpdate(prevProps){

                  }
                  render(){
                        const {forwardedRef , ...rest} = this.props
                        return <WrapperdComponent ref={forwardedRef} {...rest}/>
                  }
            }
            return React.forwardRef((props,ref)=>{
                  return <LogProps {...props} forwardedRef={ref}/>
            })
      }
\`\`\`
`)])],-1),K=a("",5),G={start:"4"},Z=s("p",null,[s("strong",null,"异步更新")],-1),ss=s("li",null,[i("在"),s("code",null,"React18"),i("中，产生的私有上下文中，遇到"),s("code",null,"setState"),i(",不会立即更新状态和视图，而是加入到更新队列"),s("code",null,"updaterQueue"),i("中。")],-1),is=s("li",null,"当上下文中代码都处理完毕后，会让更新队列中的任务，统一渲染/更新一次（批处理）",-1),as=s("li",null,"能够有效减少更新次数，降低性能消耗，有效管理代码执行的逻辑顺序",-1),ns=s("code",null,"React18",-1),ls=s("code",null,"React16",-1),hs=s("code",null,"setState",-1),ts=s("br",null,null,-1),ks=s("strong",null,[i("在"),s("code",null,"React18"),i("中，不论什么地方，都是异步的，基于"),s("code",null,"updaterQueue"),i("处理机制实现批处理")],-1),ps=s("br",null,null,-1),es=s("strong",null,[i("在"),s("code",null,"React16"),i("中，在合成事件（On绑定事件），周期函数中，"),s("code",null,"setState"),i("是异步的，但是如果"),s("code",null,"setState"),i("出现在其他异步操作中，比如定时器，手动获取DOM元素做的事件绑定，它将变为同步的操作（立即更新状态和视图渲染）")],-1),Es=a("",1),rs=a("",1),ds=a("",4),gs=a("",2),ys=a("",3),cs=s("h3",{id:"useeffect",tabindex:"-1"},[s("strong",null,"useEffect"),i(),s("a",{class:"header-anchor",href:"#useeffect","aria-label":'Permalink to "**useEffect**"'},"​")],-1),os=a("",2),Fs=s("p",null,[s("strong",null,"useEffect细节")],-1),As=s("code",null,"useEffect",-1),Ds=a("",1),Cs=a("",1),us=a("",2),Bs=a("",3),ms=s("li",null,[s("p",null,[s("strong",null,"useMemo（callback,[dependencies]）")]),s("ul",null,[s("li",null,"函数组件的每一次更新，都是把函数重新执行，如果依赖值没有发生变化，我们不执行部分逻辑代码"),s("li",null,[s("code",null,"useMemo"),i("具备计算缓存，在依赖的状态值没有发生改变，"),s("code",null,"callback"),i("没有触发执行的时候，取得是上一次计算出来的结果")]),s("li",null,[s("code",null,"useMemo"),i("是一个优化的Hook函数，如果函数组件中，有消耗性能/时间的计算操作，则竟可能缓存起来，设置相应的依赖")])])],-1),vs=s("p",null,[s("strong",null,"useCallback（callback,[dependencies]）"),i("：避免重复创建函数，开辟新的堆内存")],-1),fs=a("",3),bs=s("code",null,"useCallback",-1),_s=s("pre",null,[s("code",null,`         /* 子组件需要验证父组件传递的属性是否发生改变 */
         /* 类组件:基于React.PureComponent做浅比较 */
         class VoteFooter extends React.PureComponent{

         }

         /* 函数组件:基于React.memo()作比较  写法一*/       
         const VoteFooter = React.memo(function VoteFooter(props){
            let { change } = props 
            ....
         })
         
         /* 写法二 可以传递第二个参数改成深度比较*/
         import React, { memo } from "react";
         const VoteFooter = function VoteFooter(props){}
         export default memo(VoteFooter,(preProps,nextProps)=>{
            return JSON.Stringfy(preProps) === JSON.Stringfy(nextProps)
         });
         //注意：React.memo的第二个参数进行深度比较时有一定开销，其产生的开销存在大于子组件reRender的可能
    \`\`\`
`)],-1),xs=a("",28);function Ss(Rs,qs,Ts,Ps,js,Ns){const l=t("font"),k=t("VoteFooter");return E(),e("div",null,[o,s("ol",null,[F,s("li",null,[A,s("ol",null,[D,s("li",null,[s("strong",null,[n(l,{color:"red"},{default:h(()=>[i("胡子语法中嵌入不同的值，所呈现的特点")]),_:1})]),s("ol",null,[C,u,B,s("li",null,[i("数组对象：把数组每一项分别拿出来渲染，"),s("strong",null,[n(l,{color:"red"},{default:h(()=>[i("并不是变为字符串渲染，中间没有逗号")]),_:1})])]),m])]),v])]),f]),b,s("ol",null,[_,s("li",null,[x,s("ol",S,[R,s("li",null,[q,s("ul",null,[T,s("li",null,[s("p",null,[i("基于ref获取DOM的语法 "),P,j,i(" 1. string ref(废弃) : 元素设置"),N,i(",通过"),w,i("来获取"),M,i(" 2. callback ref : 把ref属性设置为一个函数"),V,i("，直接通过"),O,i("来获取（推荐） 3. React.createRef() : 基于"),I,i("创建一个对象-->"),U,i(",设置"),H,i(",通过"),L,i("来获取 ```js class Parent extends React.Component{ constructor(props){ super(props) this.ref1 = React.createRef() //{current:null} } componentDidMount(){ console.log(this.ref1) "),z,i("() -- {current:div} console.log(this.refs.ref2) //string ref(废弃) console.log(this.ref3) //callback ref 这个也可以用作父组件拿子组件的ref } render(){ return ( "),s("div",null,[s("div",J,null,512),s("div",X,null,512),W,i(" <div ref={ele=>this.ref3 = ele} /> ")]),i(" ) }")]),$]),Q,Y])])])])]),K,s("ol",G,[s("li",null,[Z,s("ul",null,[ss,is,as,s("li",null,[s("strong",null,[n(l,{color:"red"},{default:h(()=>[i("在"),ns,i("和"),ls,i("中，关于"),hs,i("的区别")]),_:1})]),ts,i(" + "),ks,ps,i(" + "),es])])]),Es,s("li",null,[s("p",null,[s("strong",null,[n(l,{color:"red"},{default:h(()=>[i("短时间内多次修改state的同一值的问题")]),_:1})])]),rs])]),ds,s("ol",null,[s("li",null,[s("p",null,[s("strong",null,[n(l,{color:"red"},{default:h(()=>[i("useState")]),_:1})]),i("：目的是在函数组件中使用状态，并且后期基于状态的修改，可以让组件更新")]),gs]),ys]),cs,s("ol",null,[s("li",null,[s("p",null,[s("strong",null,[n(l,{color:"red"},{default:h(()=>[i("作用：在函数组件中，使用生命周期函数,遇到修改某个状态后（视图更新后），想要依赖新数据做一些事情，不能直接在代码下面编写，只能在新闭包中获取新值，也就是基于useEffect设置状态的依赖，去执行!!!!")]),_:1})])])]),os,s("li",null,[Fs,s("ol",null,[s("li",null,[s("strong",null,[n(l,{color:"red"},{default:h(()=>[As,i("必须在函数的最外层上下文中调用")]),_:1})]),i("，不能把其嵌入到条件判断、循环等操作语句中"),Ds]),Cs])]),us]),Bs,s("ol",null,[ms,s("li",null,[vs,s("ul",null,[fs,s("li",null,[s("p",null,[i("使用时机： + 父组件嵌套子组件，父组件要把一个内部的函数，基于属性传递给子组件，此时传递的这个方法，用"),bs,i("处理一下会更好 ```js /* 父组件使用useCallback缓存一个callback给子组件传递保证此函数每一次是相同的堆内存 */ const Vote = function Vote() { const change = useCallback((type) => {}, [supNum, oppNum]); return "),n(k,{change:"{change}"}),i(" }")]),_s])])])]),xs])}const Vs=p(c,[["render",Ss]]);export{Ms as __pageData,Vs as default};
