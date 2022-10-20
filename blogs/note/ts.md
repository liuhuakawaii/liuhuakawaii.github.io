---
title: TypeScript学习
date: 2021-5-08
tags:
 - TypeScript
categories:
 -  笔记
---      
## TypeScript学习  
1. 类型声明  
    + 类型声明是TS非常重要的—个特点  
    + 通过类型声明可以指定TS中变量(参数、形参)的类型  
    + 指定类型后，当为变量赋值时，TS编译器会自动检查值是否符合类型声明，符合则赋值，否则报错  
    + 简而言之，类型声明给变量设置了类型，使得变量只能存储某种类型的值  
    + 语法  
    ```ts  
      let 变量：类型  

      let 变量：类型 = 值  
      
      function fn（参数：类型，参数：类型）：类型{
        ...
      }  
    ```  
    + 类型  
      | 类型    | 例子               | 描述                        |  
      | ------- | ----------------- | --------------------------- | 
      | number  | 1,-33,2.5         | 任意数字                     | 
      | string  | 'hi',"hi"         | 任意字符串                   |   
      | boolean | true、false       | 布尔值                       |  
      | 字面量  | 其本身             | 限制变量的值就是该字面量的值   |   
      | any     | *                 | 任意类型                     |   
      | unknown | *                 | 类型安全的any                |  
      | void    | 空值（undefined）  | 没有值（或undefined）        |   
      | never   | 没有值             | 不能是任何值                 |  
      | object  | {name:'孙悟空'}    | 任何的js对象                 |  
      | array   | [1,2,3]           | 任何的js数组                 |  
      | tuple   | [4,5]             | 元素，TS新增类型，固定长度数组 |  
      | enum   | enum(A,B)          | 枚举，TS中新增类型            |   
    + 区别  
    ```ts  
      //直接使用字面量进行类型声明  
        let a: 10  
      //可以使用 | 连接多个类型  
        let a: true | string  
      //any表示是任意类型，相当于关闭了TS的类型检测（显示的any）（少用） 
        let a: number  
      //声明变量如果不指定类型，则TS解析器会自动判断变的类型为any（隐式的any）（少用）
        let a
        a = 10  
      //unknown与any的区别是any可以赋值给其他变量，unknown不能赋值给其他变量  
        let e: unknown 
        e = 'hi' 
        if(typeof e === 'string'){
            s = e
        }    
        //类型断言，可以用来告诉解析器变量的实际类型  
        s = e as string 
        s = <string> e 
        // void 用来表示空，以函数为例，就表示没有返回值的函数（相当于返回undefined或者null）
        function fn(): void{
          
        }  
        //never 用来表示什么都不返回，包括空，一般用于抛错函数  
        function fn(): never{
          throw new Error('报错了~~')
        }  
        //object表示一个对象（少用）  
        let a: object 
        a = {}
        a = function(){}  
        //{ }用来指定对象可以包含那些属性  
        //语法：{属性名：属性值，属性名：属性值}  
        //在属性名后+？，表示该属性可选  
        let b: {name: sting,age?: number}  

        //[propName: string]: any 表示任意类型的属性  
        let c = {name: string,[propName: string]: any}
          c = {name: '111', age: 222, gender: '男'}  

        //设置函数结构的类型声明  
        //      ：语法： （形参：类型，形参：类型，....）=> 返回值  
        let d: (a: number , b: number)=>number

        /**
        * 数组的类型声明  
        *     类型[]
        *     Array<类型>
        **/
        //string[] 表示字符串数组  
        let e: string[]
        e = ['a','b','c']  
        //number[] Array<number>表示数值数组 
        let f: number[]
        let g: Array<number>    

         /**
        * 元组：就是固定长度的数组  
        *       [类型，类型...]
        **/  
       let h: [string,number]
       h = ['ddd',123]  

        /**
        * enum 枚举
        *    
        **/  
       enum Gender{
        Male = 0，
        Female = 1
       } 
       let i： {name: string,gender:Gender}
       i = {
        name:'悟空'，
        gender: Gender.Male
       }  
       console.log(i.gender === Gender.Male)  
       //& 表示同时  
       let j:{name:string} & {age:number} 
       j = {name:'孙悟空', age：22}  

       //类型的别名  
       type myType = 1 | 2 | 3 | string  
       let k: myType  
    ```  
2. TS编译  
    1. 配置文件  
    ```ts  
      {
        /*
          tsconfig.json是ts编译器的配置文件，ts编译器可以根据它的信息来对代码进行编译
          "include”用来指定哪些ts文件需要被编译
              路径: **表示任意目录
                    *表示任意文件  
          
          "exclude" 不需要被编译的文件目录  
              默认值:["node_modules" , "bower_components", "jspm_packages"]  

          
          "files:指定被编译文件的列表，只有需要编译的文件少时才会用到
        */  
        "include":[
          "./src/**/*"
        ],
        "exclude":[
          "./src/hello/**/*"
        ],
        /*
          "compilerOptions":编译选项是配置文件中非常重要也比较复杂的配置选项
        */
       "compilerOptions":{
          
          // target用来指定ts 被编译为的ES的版本
          // 'es3','es5','es6','es2015','es2016','es2017','es2018','es2019','es2020',"ESNext"
          "target" : "ESNext",
          
          //module指定要使用的模块化的规范
          // 'none','commonjs','amd','system','umd','es6','es2015','es2020','esnext'
          "module":'es2015',
          
          //lib用来指定项目中要使用的库,一般情况下不改，除非不在浏览器环境下运行，比如在node中运行
          "lib":["es6","dom"],

          //outDir用来指定编译后文件所在目录
          "outDir":"./dist",

          //outFile将编译后的代码合并为一个文件
          //设置outFile后，所有的全局作用域中的代码会合并到同一个文件  注意模块化合并只能用system amd 
          "outFile":'./dist/app.js',  

          ///是否对js文件进行编译，默认是falsel
          "allowJs" : false,
          //是否检的s代码是否符合语法规范，默认是false
          "checkJs" : false,
          //是否移除注释
          "removeComments" : true,
          //不生成编译后的文件
          "noEmit" : false,
          //当有错误时不生成编译后的文件
          "noEmitOnError" : true,
          //用来设置编译后的文件是否使用严格模式
          "alwaysStrict" : true,
          //不允许隐式的any类型
          "noImplicitAny" : true,
          //不允许不明确类型的this
          "noImplicitThis" : true,
          //严格的检查空值
          "strictNullChecks" : true,
          //所有严格检查的总开关
          "strict" : true,
       }
      }  
    ```









