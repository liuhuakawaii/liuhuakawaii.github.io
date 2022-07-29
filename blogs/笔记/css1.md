---
title: css学习笔记(一)--基础知识部分
date: 2022-01-02
tags:
 - css
categories:
 -  笔记
---  

## 基础知识  

1. **css简介**  
   web标准：结构（html）表现（css）行为（JavaScript）  
   最佳体验方式：结构、样式、行为相分离  
2. **css引入方式**  
  ![](./css%E7%AC%94%E8%AE%B01pic/pic1.jpg)  
  **电商网站首页必须使用内嵌式，加载速度快**  
   
3. **选择器**  
  + 后代选择器：符号是空格 `.nav a`  
  + 子代选择器：符号是大于 `.nav>p`  
  + 并集选择器：符号是逗号 `.nav，.header`  
  + 链接伪类选择器：重点记住`a{}`和`a:hover`  
  + `:focus`选择器：`input:focus` 记住这个写法  
  + 兄弟选择器：  
    1. 选择下一个兄弟：前一个+下一个  
    2. 选择下边所有的兄弟：兄~弟  
  + **属性选择器（css3）**  
  ![](./css%E7%AC%94%E8%AE%B01pic/pic2.jpg)  
  + **伪类选择器**  
    1. 这些伪类根据<font color="red">所有的子元素</font>进行排序  
    ![](./css%E7%AC%94%E8%AE%B01pic/pic3.jpg)  
      + n可以是数字和<font color="red">公式（n+5表示从第五个开始到最后，-n+5表示前五个）</font>  
      + 2n或even表示选中<font color="red">偶数位</font>的元素  
      + 2n+1 或odd表示选中<font color="red">奇数位</font>的元素       
    2.  这几个伪类的功能和上述的类似，不通点是他们是在<font color="red">同类型元素</font>中进行排序  
    ![](./css%E7%AC%94%E8%AE%B01pic/pic4.jpg)  
      + `:not()`否定伪类：将符合条件的元素从选择器中去除  
      ![](./css%E7%AC%94%E8%AE%B01pic/pic5.jpg)  
    3. a元素的伪类  
      + `：link`表示没访问过的链接  
      + `：visited`表示访问过的链接（由于隐私的原因，这个伪类只能修改链接颜色）  
      + `：hover`表示鼠标移入的状态  
      + `：active`表示鼠标点击的状态  
  + **伪元素选择器**  
    ![](./css%E7%AC%94%E8%AE%B01pic/pic6.jpg)  
    + before和after创建一个元素，但是属于<font color="red">行内元素</font>  
    + 新创建的这个元素在文档树中是找不到的，所以我们称为伪元素  
    + before和after <font color="red">必须有content属性</font>  
    + 伪元素选择器和标签选择器一样，<font color="red">权重为1</font>  
    + **伪元素选择器使用场景**  
      1. 伪元素字体图标  
      ![](./css%E7%AC%94%E8%AE%B01pic/pic7.jpg)  
      2. 仿土豆遮挡效果  
      ![](./css%E7%AC%94%E8%AE%B01pic/pic8.jpg)  
      1[](./css%E7%AC%94%E8%AE%B01pic/pic9.jpg)  

4. **背景**  
  ![](./css%E7%AC%94%E8%AE%B01pic/pic10.jpg)  
  1. `background-position`：通过方为`top center left`等设置必须同时指定两个值  
  2. `background-clip：`      
        + `border-box`默认值，背景会出现在边框的下边
        + `padding-box`背景不会出现在边框,只出现在内容区和内边距
        + `content-box`背景只会出现在内容区  
  3. `background-origin`：背景图片的偏移量计算的原点  
      + `padding-box` 默认值  
      + `background-position`从内边距处开始计算
      + `content-box`背景图片的偏移量从内容区处计算
      + `border-box`背景图片的变量从边框处开始计算  
  4. `background-size`:设置背景图片的大小  
      第一个值表示宽度,  第二个值表示高度, 如果只写一个，则第二个值默认是 auto  
      + `cover`图片的比例不变,将元素铺满  
      + `contain`图片比例不变,将图片在元素中完整显示  
  5. `background-attachment`: 背景图片是否跟随元素移动  
      + `scroll`默认值背景图片会跟随元素移动  
      + `fixed`背景会固定在页面中，不会随元素移动  
  6. `backgound`背景相关的简写属性  
      + `background-size`必须写在`background-position`的后边，并且使用/隔开  
      + `background-origin background-clip`两个样式，`orgin`要在`clip`的前边  
5. **css三大特性**  
  1. 层叠性  
      相同选择器给设置相同的样式，此时一个样式就会覆盖（层叠）另一个冲突的样式。**层叠性主要解决样式冲突的问题**  
      层叠性原则∶样式冲突，遵循的原则是就近原则，哪个样式离结构近，就执行哪个样式样式不冲突，不会层叠  
  2. 继承性  
      CSS中的继承:子标签会继承父标签的某些样式，如**文本颜色和字号**  
      恰当地使用继承可以简化代码，降低CSS样式的复杂性  
      子元素可以继承父元素的样式`( text-, font-， line-`这些元素开头的可以继承，以及`color`属性)  
    + **行高的继承性**  
      1. 行高可以跟单位也可以不跟单位  
      2. 如果子元素没有设置行高，则会继承父元素的行高为1.5此时子元素的行高是∶当前子元素的文字大小*1.5  
      3. body行高1.5这样写法的优势就是里面子元素可以根据自己文字大小自动调整行高  
  3. 优先性  
    ![](./css%E7%AC%94%E8%AE%B01pic/pic11.jpg)   
    1. 权重是有4组数字组成,但是不会有进位(进位据说要到255)。  
    2. 类选择器和属性选择器伪类选择器权重都是10  
    3. **继承的权重是0**，如果该元素没有直接选中，不管父元素权重多高，子元素都是0。 





         


