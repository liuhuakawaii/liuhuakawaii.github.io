---
title: 小程序学习笔记
date: 2023-4-28
tags:
 - 小程序
categories:
 -  笔记
---         

##  小程序学习笔记    
1. **小程序简介**     
    1. 小程序与普通网页开发的区别     
        + 运行环境：一个是在**浏览器环境**，一个是**微信环境**    
        + API:小程序**无法调用DOM和BOM的API**，但是有微信环境对应的API，比如**地理定位、扫码、支付**等    
        + 开发模式:申请小程序开发账号、安装小程序开发者工具、创建和配置小程序项目       
    2. 项目的基本组成结构           
        + `pages`：**存放所有小程序的页面**       
        + `utils`：存放工具性质的模块     
        + `app.js`：**小程序项目的入口文件**      
        + `app.json`：**小程序项目的全局配置文件**        
            + `pages`：所有页面的路径     
            + `window`：全局定义所有页面的背景色、文字颜色等      
            + `style`：全局定义小程序组件所使用的样式版本     
            + `sitemapLocation`：用来指明`siemap.json`的位置        
        + `app.wxss`：小程序项目的全局样式文件        
        + `project.config.json`：项目的配置文件     
            + `setting`：保存了编译相关的配置     
            + `projectname`：保存的是项目名称     
            + `appid`：保存的是小程序的账号ID     
        + `sitemap.json`：配置小程序及其页面是否允许被微信索引，效果类似于PC网页的SEO     
    3. `WXML`和`HTML`和区别     
        1. 标签名称不同     
            + `HTML(div,span,img,a)`        
            + `WXML(view,text,image,navigator)`     
        2. 属性节点不同     
            + `<a href='#'></a>`
            + `<navigator url='/pages/home/home'></navigator>`      
        3. 提供了类似vue的模板语法      
            + 数据绑定      
            + 列表渲染      
            + 条件渲染      
    4. `WXSS`和`css`的区别      
        1. 新增了rpx尺寸单位        
            + css中需要手动进行像素单位换算，例如rem        
            + wxss在底层支持rpx，在不同大小的屏幕上小程序会自动进行换算            
        2. 提供了全局样式（app.wxss）和局部样式（.wxss）        
        3. 支持部分CSS选择器        