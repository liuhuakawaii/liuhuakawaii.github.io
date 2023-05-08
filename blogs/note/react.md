---
title: React学习笔记
date: 2023-5-8
tags:
 - React
categories:
 -  笔记
---     

##  React学习笔记   

### 项目搭建    
1. 安装脚手架:`npm i create-react-app -g` mac前面要设置sudo   
2. 检查安装情况：`create-react-app --version`   
3. 基于脚手架创建React工程化项目:`create-react-app 项目名称`,项目名称遵循npm命名规范  `数字 小写字母  _`    
4. React项目中默认安装    
    + `react` 框架核心    
    + `react-dom` 视图渲染的核心，基于react构建webapp（html页面）
    + `react-native` 构建和渲染app的    
    + `react-scripts`:脚手架为了让项目目录看起来干净一些，把webpack打包的规则及相关的插件/loader等都隐藏到了`node_modules`目录下，`react-scripts`就是脚手架中自己对打包命令的一种封装，基于它打包，会调用`node_modules`中的webpack来进行打包        
    + `web-vitals`:性能检测工具   
    + `eslintConfig`：  
          + 对webpack中ESlint词法检测的相关配置   
          + 词法错误---不符合标准规范   
          + 符合标准，代码本身不会报错，但是不符合ESlint的检测规范    
    + `browserslist`：基于browserslist规范，设置浏览器的兼容情况    
          1. 对`postcss-loader + autoprefixer`生效，会给CSS3设置相关的前缀   
          2. 对`babel-loader`生效，会把ES6编译成ES5         
          3. 无法处理ES6内置API的兼容，我们需要`@babel/polyfill`对常见内置的API重写了     
          4. 脚手架中内置兼容处理`react-app-polyfill`
5. `scripts`命令    
      + `start` ：开发环境--在本地启动web服务器，预览打包内容   
      + `build` ：生产环境--打包部署，打包的内容输出到dist目录中    
      + `test` ：单元测试   
      + `eject` : 暴露`webpack`配置规则，修改默认打包规则           
6. 处理跨域       
      + 安装`http-proxy-middleware`       
      + `src/setupProxy.js`处理跨域问题