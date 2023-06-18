---
title: Canvas
date: 2023-6-13
tags:
 - Canvas
categories:
 -  笔记
---       
##  Canvas学习笔记      

### **Canvas基础**
1. 使用canvas
    ```html
            <!-- 1.布置画布：通过添加<canvas>标签，添加canvas元素 -->
            <canvas id="canvas" style="border: 1px solid #aaaaaa; display: block; margin: 50px auto;" width="800" height="600">
              你的浏览器居然不支持Canvas？！赶快换一个吧！！
            </canvas>
            <script type="text/javascript">
                //  获取画布：通过<canvas>标签的id，获得canvas对象 
                const canvas = document.getElementById("canvas");
                //  获得画笔：通过canvas对象的getContext("2d")方法，获得2D环境 
                const context = canvas.getContext("2d");
                console.log(canvas, context);
            </script>
    ```

2. **<font color="red">Canvas是基于状态的绘制（很重要）</font>**，所以前面几步都是在确定状态，**最后一步才会具体绘制**。

3. canvas 画布的左上角为笛卡尔坐标系的原点，且y轴的正方向向下，x轴的正方向向右

4. **绘制线段**
    ```js
          context.moveTo(100, 100); //移动画笔(moveTo())
          context.lineTo(600, 600); //笔画停点(lineTo()) 从 上一笔的停止点 绘制到(600,600)这里
          context.lineWidth = 15; //设置一下画笔的颜色和粗细。
          context.strokeStyle = "#AA394C";
          context.stroke(); //确定绘制只有两种方法，填充fill()和描边stroke()
    ```

5. **beginPath()**
    ```js
        //为了让绘制方法不重复绘制，我们可以在每次绘制之前加上beginPath()，代表下次绘制的起始之处为beginPath()之后的代码。我们在三次绘制之前分别加上context.beginPath()。
            context.beginPath();
            context.moveTo(100, 100);
            context.lineTo(300, 300);
            context.lineTo(100, 500);
            context.lineWidth = 5;
            context.strokeStyle = "red";
            context.stroke();

            context.beginPath();
            context.moveTo(300, 100);
            context.lineTo(500, 300);
            context.lineTo(300, 500);
            context.lineWidth = 5;
            context.strokeStyle = "blue";
            context.stroke();

            context.beginPath();
            context.moveTo(500, 100);
            context.lineTo(700, 300);
            context.lineTo(500, 500);
            context.lineWidth = 5;
            context.strokeStyle = "black";
            context.stroke();
    ```

6. **矩形绘制**
    ```js
        //绘制路径的时候需要将规划的路径使用beginPath()与closePath()包裹起来。当然，最后一笔可以不画出来，直接使用closePath()，它会自动帮你闭合的。(所以如果你不想绘制闭合图形就不可以使用closePath())
        context.beginPath();
        context.moveTo(150, 50);
        context.lineTo(650, 50);
        context.lineTo(650, 550);
        context.lineTo(150, 550);
        //最后一笔闭合的时候有问题，导致左上角有一个缺口。这种情况是设置了lineWidth导致的。如果默认1笔触的话，是没有问题的。但是笔触越大，线条越宽，这种缺口就越明显
        // context.lineTo(150, 50); //绘制最后一笔使图像闭合 最后一笔可以不画
        context.closePath(); //使用closePath()闭合图形
        context.fillStyle = "yellow"; //选择油漆桶的颜色
        context.lineWidth = 5;
        context.strokeStyle = "black";
        context.fill(); //确定填充
        context.stroke();

        //封装矩形绘制
        function drawRect(ctx, x, y, width, height, fillColor, borderWidth, borderColor) {
          ctx.beginPath();
          // ctx.moveTo(x, y);
          // ctx.lineTo(x + width, y);
          // ctx.lineTo(x + width, y + height);
          // ctx.lineTo(x, y + height);
          // ctx.lineTo(x, y);
          // ctx.closePath();
          cxt.rect(x, y, width, height); //基于rect优化封装矩形绘制

          ctx.lineWidth = borderWidth;
          ctx.strokeStyle = borderColor;
          ctx.fillStyle = fillColor;
          ctx.fill();
          ctx.stroke();
        }
    ```

7. **线条属性**   
    1. lineCap属性 :定义线的端点
        + butt：默认值，端点是垂直于线段边缘的平直边缘。
        + round：端点是在线段边缘处以线宽为直径的半圆。
        + square：端点是在选段边缘处以线宽为长、以一半线宽为宽的矩形。
    2. lineJoin属性: 定义两条线相交产生的拐角
        + miter：默认值，在连接处边缘延长相接。miterLimit 是角长和线宽所允许的最大比例(默认是 10)。
        + bevel：连接处是一个对角线斜角。
        + round：连接处是一个圆。
        + 当lineJoin设置为miter时（默认），会解锁使用miterLimit属性。这个miterLimit规定了一个自动填充连接点的极限值。如果超过了这个值，会导致lineJoin属性失效，会从 miter 变成 bevel。可以看出来，这个值和线宽以及夹角有关
    3. lineWidth: 定义线的宽度(默认值为 1.0)。
    4. strokeStyle 笔触样式 : 定义线和形状边框的颜色和样式

8. **填充颜色** 
    ```js
        context.fillStyle = "hsl(0,100%,50%)";
        //填充渐变形状
        var grd = context.createLinearGradient(xstart, ystart, xend, yend); //添加渐变线：
        grd.addColorStop(stop, color); //为渐变线添加关键色(类似于颜色断点)：这里的stop传递的是 0 ~ 1 的浮点数，代表断点到(xstart,ystart)的距离占整个渐变色长度是比例。
        context.fillStyle = grd;
        context.strokeStyle = grd;

        context.rect(200, 100, 400, 400);
        //添加渐变线
        var grd = context.createLinearGradient(200, 300, 600, 300);
        //添加颜色断点
        grd.addColorStop(0, "black");
        grd.addColorStop(0.5, "white");
        grd.addColorStop(1, "black");
        //应用渐变
        context.fillStyle = grd;
        context.fill();
    ```