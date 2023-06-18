---
title: three.js学习笔记
date: 2023-5-15
tags:
 - three.js
categories:
 -  笔记
---

## parcel打包工具搭建开发环境

## 概念   

1. **前置知识**
    + 场景(`Scene`)：是物体、光源等元素的容器，可以配合 `chrome` 插件使用，抛出 `window.scene`即可实时调整 `obj` 的信息和材质信息。
    + 相机（`Camera`）：场景中的相机，代替人眼去观察，场景中只能添加一个，一般常用的是透视相机（`PerspectiveCamera`）
    + 物体对象（`Mesh`）：包括二维物体（点、线、面）、三维物体，模型等等
    + 光源（`Light`）：场景中的光照，如果不添加光照场景将会是一片漆黑，包括全局光、平行光、点光源等
    + 渲染器（`Renderer`）:场景的渲染方式，如`webGL\canvas2D\Css3D`。
    + 控制器(`Control`): 可通过键盘、鼠标控制相机的移动

2. **相机(Camera)**   
    + 正交（`orthographic`）相机：物品的渲染尺寸与它距离镜头的远近无关。也就是说在场景中移动一个物体，其大小不会变化。正交镜头适合2D游戏。
    + 透视（`perspective`）相机：模拟人眼的视觉特点，距离远的物体显得更小。透视镜头通常更适合3D渲染
    + `THREE.PerspectiveCamera(fov,aspect,near,far)`
        +  fov视野角度：FOV取值在60-90度之间较好，默认值为60
        + aspect渲染区域的纵横比：较好的默认值为`window.innerWidth/window.innerHeight`
        + near最近离镜头的距离 
        + far远离镜头的距离
    + `camera.position`：控制相机在整个3D环境中的位置
    + `camera.lookAt`：控制相机的焦点位置，决定相机的朝向

3. **光源**
    | 光源    | 说明                        |   
    | ------- | --------------------------- |     
    | AmbientLight    | 环境光，其颜色均匀的应用到场景及其所有对象上,这种光源为场景添加全局的环境光。这种光没有特定的方向，不会产生阴影。通常不会把AmbientLight作为唯一的光源，而是和SpotLight、DirectionalLight等光源结合使用，从而达到柔化阴影、添加全局色调的效果。指定颜色时要相对保守，例如#0c0c0c。设置太亮的颜色会导致整个画面过度饱和，什么都看不清： |     
    | PointLight    | 3D空间中的一个点光源，向所有方向发出光线 | 
    | SpotLight   | 产生圆锥形光柱的聚光灯，台灯、天花板射灯通常都属于这类光源,这种光源的使用场景最多，特别是在你需要阴影效果的时候。 |     
    | DirectionalLight     | 也就无限光，光线是平行的。典型的例子是日光,用于模拟遥远的，类似太阳那样的光源。该光源与SpotLight的主要区别是，它不会随着距离而变暗，所有被照耀的地方获得相同的光照强度。  |      
    | HemisphereLight     |  特殊光源，用于创建户外自然的光线效果，此光源模拟物体表面反光效果、微弱发光的天空,模拟穹顶（半球）的微弱发光效果，让户外场景更加逼真。使用DirectionalLight + AmbientLight可以在某种程度上来模拟户外光线，但是不够真实，因为无法体现大气层的散射效果、地面或物体的反射效果  |   
    | AreaLight    | 面光源，指定一个发光的区域   |  
    | LensFlare| 不是光源，用于给光源添加镜头光晕效果  |   

4. **材质(Mesh)**
    | 材质   | 说明                        |   
    | ------- | --------------------------- |     
    | MeshBasicMaterial    | 基本的材质，显示为简单的颜色或者显示为线框。不考虑光线的影响 |     
    | MeshDepthMaterial    | 使用简单的颜色，但是颜色深度和距离相机的远近有关 | 
    | MeshNormalMaterial   | 基于面Geometry的法线（normals）数组来给面着色 |     
    | MeshFacematerial     | 容器，允许为Geometry的每一个面指定一个材质  |      
    | MeshLambertMaterial     |  考虑光线的影响，哑光材质  |   
    | MeshPhongMaterial    | 考虑光线的影响，光泽材质  |  
    | ShaderMaterial  | 允许使用自己的着色器来控制顶点如何被放置、像素如何被着色  |   
    | LineBasicMaterial  | 用于THREE.Line对象，创建彩色线条  |   
    | LineDashMaterial  | 用于THREE.Line对象，创建虚线条  |   
    | RawShaderMaterial  | 仅和THREE.BufferedGeometry联用，优化静态Geometry（顶点、面不变）的渲染  |   

5. **几何图形**   
    + 2D
        | 图形   | 说明                        |   
        | ------- | --------------------------- |     
        | 矩形 THREE.PlaneGeometry    | 外观上是一个矩形new THREE.PlaneGeometry(width, height, widthSegments, heightSegments); |     
        | THREE.CircleGeometry    | 外观上是一个圆形或者扇形 // 半径为3的圆new THREE.CircleGeometry(3, 12); // 半径为3的半圆new THREE.CircleGeometry(3, 12, 0, Math.PI);第三个参数和第四个分别是起始角度和结束角度，默认0-2*PI | 
        | THREE.RingGeometry   | 外观上是一个圆环或者扇环 new THREE.RingGeometry(innerRadius, outerRadius, thetaSegments, phiSegments, thetaStart, thetaLength) |     
        | THREE.ShapeGeometry     | 该形状允许你创建自定义的二维图形，其操作方式类似于SVG/Canvas中的画布  |      
    + 3D
        | 图形   | 说明                        |   
        | ------- | --------------------------- |     
        | THREE.BoxGeometry    | 这是一个具有长宽高的盒子 BoxGeometry(width, height, depth, widthSegments, heightSegments, depthSegments) |     
        | THREE.SphereGeometry    | 这是一个三维球体/不完整球体 SphereGeometry(radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength) | 
        | THREE. CylinderGeometry   | 可以绘制圆柱、圆筒、圆锥或者截锥 new THREE.CylinderGeometry(radiusTop,radiusBottom,height,radialSegments,heightSegments,openEnded) |     

6. **加载外部模型**   
    + 通过`Three.js`加载器（`Loader`）实现
    + 加载器把文本/二进制的模型文件转化为`Three.js`对象结构。 每个加载器理解某种特定的文件格式。
    + **需要注意的是，由于贴图的尺寸必须是(2的幂数)X (2的幂数)，如：1024X512，所以为了防止贴图变形，平面的宽度比例需要与贴图的比例一致**。
    + **支持的格式**    
        | 格式   | 说明                        |   
        | ------- | --------------------------- |     
        | JSON    | Three.js自定义的、基于JSON的格式。可以声明式的定义一个Geometry或者Scene.利用该格式，你可以方便的重用复杂的Geometry或Scene |     
        | OBJ / MTL    | OBJ是Wavefront开发的一种简单3D格式，此格式被广泛的支持，用于定义Geometry，MTL用于配合OBJ，它指定OBJ使用的材质 | 
        | Collada（dae）   | 基于XML的格式，被大量3D应用程序、渲染引擎支持 |     
        | STL     | STereoLithography的简写，在快速原型领域被广泛使用。3D打印模型通常使用该格式定义Three.js提供了STLExporter.js，使用它可以把Three.js模型导出为STL格式  |      
        | CTM     |  openCTM定义的格式，以紧凑的格式存储基于三角形的Mesh  |   
        | VTK    | Visualization Toolkit定义的格式，用于声明顶点和面。此格式有二进制/ASCII两种变体，Three.js仅支持ASCII变体  |  
        | AWD  | 3D场景的二进制格式，主要被away3d引擎使用，Three.js不支持AWD压缩格式  |   
        | Assimp  | 开放资产导入库（Open asset import library）是导入多种3D模型的标准方式。使用该Loader你可以导入多种多样的3D模型格式  |   
        | VRML  | 虚拟现实建模语言（Virtual Reality Modeling Language）是一种基于文本的格式，现已经被X3D格式取代尽管Three.js不直接支持X3D，但是后者很容易被转换为其它格式  |   
        | Babylon  | 游戏引擎Babylon的私有格式  | 
        | PLY  | 常用于存储来自3D扫描仪的信息  | 



## 基本使用   

1. **基础使用模板**
    ```js
      import * as THREE from 'three'
       //导入相机轨道控制器 
      import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'  
      
      /* 1.创建场景 */
      const scene = new THREE.Scene()

      /* 2.创建相机 THREE.PerspectiveCamera(fov,aspect,near,far) */
      const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000) //透视相机
      camera.position.set(5, 5, 10)  //（x,y,z） 设置相机位置
      camera.lookAt(mesh.position)  //需要控制相机的拍照目标
      scene.add(camera)

      /* 3.创建物体：网格模型Mesh */
      const geometry = new THREE.BoxGeometry(1, 2, 3) //定义物体形状：几何体
      const material = new THREE.MeshBasicMaterial({ //定义物体外观：材质
        color: 0x00ff00, 
        wireframe: true， //线框
        side:THREE.DoubleSide, //平面物体材质双面可见 
      })
      const cube = new THREE.Mesh(geometry, material)
      scene.add(cube)
      
      /* 4.渲染器 */
      const renderer = new THREE.WebGL1Renderer()
      renderer.setSize(window.innerWidth, window.innerHeight) //设置three.js渲染区域的尺寸(像素px)
      document.body.appendChild(renderer.domElement) //将webgl渲染的HTML元素:canvas添加到body
      
      /* 5.光源：受光照影响材质 
            + 点光源
            + 添加一个环境光(无方向)
            + 添加平行光
      */
      const pointLight = new THREE.PointLight(0xffffff, 1)
      pointLight.position.set(400, 100, 300)
      scene.add(pointLight) 
      const ambient = new THREE.AmbientLight(0xffffff, 0.2)
      scene.add(ambient)
      const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
      directionalLight.position.set(-80, -100, -50)//设置光源的方向：通过光源position属性和目标指向对象的position属性计算
      // directionalLight.target = mesh  /方向光指向对象网格模型mesh，可以不设置，默认位置是0 0 0 
      scene.add(directionalLight)

      /* 6.辅助对象 
            + 辅助观察坐标系 AxesHelper
            + 点光源辅助观察 PointLightHelper
            + 平行光辅助观察 DirectionalLightHelper
            + 网格地面辅助观察 GridHelper
      */
      const axesHelper = new THREE.AxesHelper(5)
      scene.add(axesHelper)
      const pointLightHelper = new THREE.PointLightHelper(pointLight, 10)
      scene.add(pointLightHelper)
      const directionalLightHepler = new THREE.DirectionalLightHelper(directionalLight, 5, 0xffff00)
      const gridHelper = new THREE.GridHelper(300, 25, 0x004444, 0x004444);
      scene.add(directionalLightHepler)

      /* 7.创建相机控制器 */
      const controls = new OrbitControls(camera, renderer.domElement)
      controls.enableDamping = true //设置控制器阻尼，让控制器更加真实
      controls.target.set(1000, 0, 1000) //注意和lookAt保持一致~~!!!!
      controls.addEventListener('change', function () { // 如果OrbitControls改变了相机参数，重新调用渲染器渲染三维场景
          renderer.render(scene, camera); //执行渲染操作
      });

      /* 8.动画渲染循环:周期性执行，默认根据电脑刷新率来决定每秒钟执行次数 */
      const clock = new THREE.Clock()
      function render () {
        const spt = clock.getDelta() * 1000 //单位毫秒
        console.log('spt', spt, '渲染帧率', 1000 / spt)
        mesh.rotateY(0.01) //每次绕y轴旋转0.01弧度
        //update()函数内会执行camera.lookAt(controls.target)
        controls.update()  //控制器阻尼
        renderer.render(scene, camera)
        requestAnimationFrame(render) //请求再次执行渲染函数render，渲染下一帧
      }
      render()
    ```

2. **渲染画布自适应**   
    ```js
      //监听画面变化，更新渲染画面
      window.addEventListener('resize', () => {
        // 渲染器执行render方法的时候会读取相机对象的投影矩阵属性projectionMatrix
        // 但是不会每渲染一帧，就通过相机的属性计算投影矩阵(节约计算资源)
        // 如果相机的一些属性发生了变化，需要执行updateProjectionMatrix ()方法更新相机的投影矩阵
        camera.aspect = window.innerWidth / window.innerHeight //更新摄像头的宽高比
        camera.updateProjectionMatrix() //更新投影矩阵
        renderer.setSize(window.innerWidth, window.innerHeight) //重置渲染器输出画布canvas尺寸
        renderer.setPixelRatio(window.devicePixelRatio) //设置渲染器的像素比
      })
    ```

3. **控制画面全屏**   
    ```js
      window.addEventListener('dblclick', () => {
        const fullScreenElement = document.fullscreenElement
        console.log(renderer.domElement)
        if (!fullScreenElement) {
          renderer.domElement.requestFullscreen() //让画布对象全屏
        } else {
          document.exitFullscreen()//让文档对象退出全屏
        }
      })
    ```

4. **status性能监视器**
    ```js
      //引入性能监视器stats.js
      import Stats from 'three/examples/jsm/libs/stats.module.js'
      function render () {
        stats.update()
        renderer.render(scene, camera)
        requestAnimationFrame(render) //动画帧持续调用render渲染
      }
      render()
    ```

5. **`gsap`动画库**
    ```js
      //导入动画库
      import gsap from 'gsap'
      //调用gsap动画库
      const animate1 = gsap.to(cube.position,
        {
          x: 5,
          duration: 3,
          ease: 'power1.inOut',
          onComplete: () => {
            console.log('gggggggg')
          },
          onStart: () => {
            console.log('动画开始')
          },
          repeat: -1,
          yoyo: true,//往返运动
          // delay: 2,//延迟两秒
        })
      gsap.to(cube.rotation, { x: Math.PI, duration: 3 })
      //实现动画暂停与恢复
       window.addEventListener('dblclick', () => {
         console.log(animate1)
         if (animate1.isActive()) {
           animate1.pause()
         } else {
           animate1.resume()
         }
       })

    ```

6. **`gui.js`调试库**    
    ```js
        //导入dat.gui库
        import * as dat from 'dat.gui'
        const gui = new dat.GUI()
        const params = {
          color: '#000',
          fn: () => {
            gsap.to(cube.position, { x: 5, duration: 2, yoyo: true, repeat: -1 })
          }
        }
        /* gui.add(控制对象，对象具体属性，参数3,参数4，...) 
           + 参数3 & 参数4：number -- 交互界面是一个鼠标可以拖动的拖动条，可以在一个区间改变属性的值
           + 参数3：array -- 生成交互界面是下拉菜单
           + 参数3：object -- 生成交互界面是下拉菜单
           + add改变的是布尔值 -- 交互界面就是一个单选框
        */
        gui
          .add(camera.position, 'x', 0, 1000)
          .step(0.01)
          .name('移动x轴')
          .onFinishChange((value) => {
            console.log('值被修改了', value)
        })
        gui
          .addColor(params, 'color')
          .onChange((value) => {
            console.log('值被修改了', value)
            cube.material.color.set(value)
          }) //设置颜色
        gui.add(cube, 'visible').name('是否显示') //设置显示隐藏
        gui.add(params, 'fn').name('设置运动函数')
        const folder = gui.addFolder('设置立方体') //设置子菜单
        folder.add(cube.material, 'wireframe').name('线框')
        folder.close()//默认当前子菜单关闭
    ```
  
7. **材质(Meterial)**

8. **WebGL渲染器设置**    
    1. **锯齿模糊**
        ```js
            const renderer = new THREE.WebGLRenderer({
              antialias: true,//启用抗锯齿
            })
        ```
    2. **设备像素比window.devicePixelRatio**
        ```js
            renderer.setPixelRatio(window.devicePixelRatio) //设置渲染器的像素比
        ```
    3. **设置背景颜色.setClearColor()**
        ```js
            renderer.setClearColor(0x444444, 1); //设置背景颜色
        ```

## **几何体BufferGeometry**

1. 概念：threejs的长方体`BoxGeometry`、球体`SphereGeometry`等几何体都是基于`BufferGeometry`类构建的，BufferGeometry是一个没有任何形状的空几何体，你可以通过`BufferGeometry`自定义任何几何形状，具体一点说就是**定义顶点数据**。

2. **自定义几何体**   
    + **定义几何体顶点数据**
        ```js
            const geometry = new THREE.BufferGeometry(); //创建一个空的几何体对象
            const vertices = new Float32Array([//类型化数组创建顶点数据
                0, 0, 0, //顶点1坐标
                50, 0, 0, //顶点2坐标
                0, 100, 0, //顶点3坐标
                0, 0, 10, //顶点4坐标
                0, 0, 100, //顶点5坐标
                50, 0, 10, //顶点6坐标
            ]);
            // 创建属性缓冲区对象
            //3个为一组，表示一个顶点的xyz坐标
            const attribue = new THREE.BufferAttribute(vertices, 3); 
            // 设置几何体attributes属性的位置属性
            geometry.attributes.position = attribue;
        ```
    + **点模型Points**
        ```js
            const material = new THREE.PointsMaterial({
                color: 0xffff00,
                size: 10.0 //点对象像素尺寸
            }); 
            const points = new THREE.Points(geometry, material); //点模型对象
        ```
    + **线模型Line**
        ```js
            // 线材质对象
            const material = new THREE.LineBasicMaterial({
                color: 0xff0000 //线条颜色
            }); 
            // 创建线模型对象
            const line = new THREE.Line(geometry, material);
            const line = new THREE.LineLoop(geometry, material);  // 闭合线条
            const line = new THREE.LineSegments(geometry, material);//非连续的线条
        ```
    + **网格模型Mesh(三角形概念)**
        ```js
            /* 网格模型三角形:三个顶点顺序是逆时针的方向视为正面！！ */
            const material = new THREE.MeshBasicMaterial({
                color: 0x0000ff, //材质颜色
                side: THREE.FrontSide, //默认只有正面可见 DoubleSide两面可见  BackSide背面可见
            });
            const points = new THREE.Mesh(geometry, material)
        ```
    + **顶点索引数据**
        ```js
            // Uint16Array类型数组创建顶点索引数据
            const indexes = new Uint16Array([
                // 下面索引值对应顶点位置数据中的顶点坐标
                0, 1, 2, 0, 2, 3,
            ])
            // 索引数据赋值给几何体的index属性
            geometry.index = new THREE.BufferAttribute(indexes, 1); //1个为一组
        ```
    + **顶点法线数据**
        ```js
            //使用受光照影响的材质，几何体BufferGeometry需要定义顶点法线数据。
            const norlmals = new Float32Array([
                0, 0, 1, //顶点1法向量
                0, 0, 1,
                0, 0, 1,
                0, 0, 1,
                0, 0, 1,
                0, 0, 1,
            ])
            geometry.attributes.normal = new THREE.BufferAttribute(norlmals, 3)
        ```
    + 几何体细分数
        ```js
            //矩形几何体PlaneGeometry的参数3,4表示细分数，默认是1,1
            const geometry = new THREE.PlaneGeometry(100,50,1,1);
            //球体SphereGeometry参数2、3分别代表宽、高度两个方向上的细分数，默认32,16，
            const geometry = new THREE.SphereGeometry( 50, 32, 16 );
        ```
    + 旋转、平移、缩放
        ```js
            geometry.scale(2, 2, 2); // 几何体xyz三个方向都放大2倍
            geometry.translate(50, 0, 0); // 几何体沿着x轴平移50
            geometry.rotateX(Math.PI / 4); // 几何体绕着x轴旋转45度
            geometry.center();// 居中：已经偏移的几何体居中，执行.center()，你可以看到几何体重新与坐标原点重合
        ```

## **模型对象、材质** 

1. **三维向量Vector3**
    ```js
        const v3 = new THREE.Vector3(10,10,10) //三维向量 x，y，z
        //可以用set方法修改三维向量的xyz
        //网格模型的position，scale就是一个三维向量的实例
        v3.normalize()//转化为单位向量
        mesh.translateOnAxis(v3,100)  //沿着向量方向平移
    ```
2. **欧拉Euler与角度属性.rotation**   
    ```js
        // 创建一个欧拉对象，表示绕着xyz轴分别旋转45度，0度，90度
        const Euler = new THREE.Euler( Math.PI/4,0, Math.PI/2);
        mesh.rotation.y += Math.PI/3; //绕y轴的角度设置为60度
        mesh.rotateX(Math.PI/4);//绕x轴旋转π/4
        const axis = new THREE.Vector3(0,1,0);//向量axis
        mesh.rotateOnAxis(axis,Math.PI/8);//绕axis轴旋转π/8
    ```
3. **模型材质颜色(Color对象)**    
    ```js
       /* 创建一个颜色对象 new THREE.Color(r=1,g=1,b=1) 
            + 只定义了r，可以是十六进制数，也可以是字符串'css样式'，可以是另一个颜色实例。
            + 当所有参数被定义时，r是红色分量，g是绿色分量，b是蓝色分量。 
            + color.set(0x00ff00), color.setStyle('#00ff00')      
       */
        const color = new THREE.Color();//默认是纯白色0xffffff
    ```
4. **克隆.clone()和复制.copy()**   
    ```js
        /* 克隆.clone()、复制.copy()是threejs很多对象都具有的方法，比如三维向量对象Vector3、网格模型Mesh、几何体、材质。 */
        const v1 = new THREE.Vector3(1, 2, 3);
        const v2 = v1.clone();//v2是一个新的Vector3对象，和v1的.x、.y、.z属性值一样
        const v1 = new THREE.Vector3(1, 2, 3);
        const v3 = new THREE.Vector3(4, 5, 6);
        v3.copy(v1);//读取v1.x、v1.y、v1.z的赋值给v3.x、v3.y、v3.z
    ```

## **层级模型**

1. **组对象**
    ```js
        const group = new THREE.Group();//创建一个组对象
        const obj = new THREE.Object3D() //历史遗留问题，相当于Group，表示模型对象节点
        group.add(mesh1,mesh2); //把 mesh1型 mesh2型插入到组group中，作为group的子对象
        group.name='小区房子'; //模型对象通过.name属性命名进行标记
        scene.add(group);//把group插入到场景中作为场景子对象
        group.translateY(50) //通过移动父对象，使子对象都移动

        mesh1.add(mesh2); //threejs默认mesh也可以添加子对象,mesh基类也是Object3D

        // 递归遍历model包含所有的模型节点
        model.traverse(function(obj) {
            console.log('所有模型节点的名称',obj.name);
            // obj.isMesh：if判断模型对象obj是不是网格模型'Mesh'
            if (obj.isMesh) {//判断条件也可以是obj.type === 'Mesh'
                obj.material.color.set(0xffff00);
            }
        });

        // 返回名.name为"4号楼"对应的对象  类似查找Dom
        const nameNode = scene.getObjectByName ("4号楼");
    ```

2. **坐标** 
    + **本地坐标(局部坐标)**:就是模型的`.position`属性。
    + **世界坐标**:模型自身`.position`和所有父对象`.position`累加的坐标。
    + `.getWorldPosition()`获取世界坐标
    + 局部坐标系：`mesh.add(new THREE.AxesHelper(50));`

3. **移除对象.remove()**
    + `.remove()`方法是删除父对象中的一个子对象。
    + 一次移除多个子对象：`group.remove(mesh1,mesh2);`

4. **模型隐藏或显示**
    + 模型对象的父类`Object3D`封装了一个属性`.visible`，通过该属性可以隐藏或显示一个模型。
    + 材质对象的父类`Material`封装了一个`.visible`属性，通过该属性可以控制是否隐藏该材质对应的模型对象。

##  **顶点UV坐标，纹理贴图**

1. **创建纹理贴图**
    + 通过纹理贴图加载器`TextureLoader`的`load()`方法加载一张图片可以返回一个纹理对象`Texture`，纹理对象`Texture`可以作为模型材质颜色贴图`.map`属性的值。   
    + 代码演示：    
        ```js
            const geometry = new THREE.PlaneGeometry(200, 100); 
            //纹理贴图加载器TextureLoader
            const texLoader = new THREE.TextureLoader();
            // .load()方法加载图像，返回一个纹理对象Texture
            const texture = texLoader.load('./earth.jpg');
            const material = new THREE.MeshLambertMaterial({
                // 设置纹理贴图：Texture对象作为材质map属性的属性值
                map: texture,//map表示材质的颜色贴图属性
            });
        ```
    + **颜色贴图map和color属性颜色值会混合**,如果没有特殊需要，设置了颜色贴图.map,不用设置color的值，color默认白色0xffffff

2. **顶点UV坐标**
    + 查看UV坐标
        ```js
            const geometry = new THREE.PlaneGeometry(200, 100); //矩形平面
            // const geometry = new THREE.BoxGeometry(100, 100, 100); //长方体
            // const geometry = new THREE.SphereGeometry(100, 30, 30);//球体
            console.log('uv',geometry.attributes.uv);
        ```
    + 自定义顶点UV`geometry.attributes.uv`
        ```js
            /**纹理坐标0~1之间随意定义*/
            const uvs = new Float32Array([
                0, 0, //图片左下角
                1, 0, //图片右下角
                1, 1, //图片右上角
                0, 1, //图片左上角
            ]);
            // 设置几何体attributes属性的位置normal属性
            geometry.attributes.uv = new THREE.BufferAttribute(uvs, 2);
        ```

3. **纹理对象Texture阵列**    
    ```js
        // .load()方法加载图像，返回一个纹理对象Texture
        const texture = texLoader.load('./瓷砖.jpg');
        // 设置阵列模式
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        // uv两个方向纹理重复数量
        texture.repeat.set(12,12);//注意选择合适的阵列数量
        mesh.rotateX(-Math.PI/2);// 旋转矩形平面
    ```

4. **矩形Mesh+背景透明png贴图**   
    + 创建一个矩形平面，设置颜色贴图`.map`,注意选择背景透明的`.png`图像作为颜色贴图，同时材质设置`transparent: true`，**这样png图片背景完全透明的部分不显示**。
    + 如果你不想矩形平面Mesh与地面网格线重合，可以通过位置属性`.position`适当偏移。`mesh.position.y = 1;`

5. **UV动画**   
    + 纹理对象`Texture`的`.offset`的功能是偏移贴图在`Mesh`上位置，本质上相当于修改了UV顶点坐标。    
        ```js
            /* 纹理对象.wrapS或.wrapT与.offset组合使用
                + 当你通过.offset设置了纹理映射偏移后，把.wrapS或.wrapT设置为重复映射模式THREE.RepeatWrapping 
            */
            texture.offset.x +=0.5;//纹理U方向偏移
            // 设置.wrapS也就是U方向，纹理映射模式(包裹模式)
            texture.wrapS = THREE.RepeatWrapping;//对应offste.x偏移

            //通过阵列纹理贴图设置.map,这样的话贴图像素可以更小一些。
            // 设置U方向阵列模式
            texture.wrapS = THREE.RepeatWrapping;
            // uv两个方向纹理重复数量
            texture.repeat.x=50;//注意选择合适的阵列数量
            // 渲染循环
            function render() {
                texture.offset.x +=0.1;//设置纹理动画：偏移量根据纹理和动画需要，设置合适的值
                renderer.render(scene, camera);
                requestAnimationFrame(render);
            }
            render();
        ```

##  **加载外部三维模型（gltf）**

1. GLTF格式简介 (Web3D领域JPG)
    + 相比较`obj`、`stl`等格式而言，.gltf格式可以包含更多的模型信息。
    + 不仅`three.js`，其它的`WebGL`三维引擎`cesium`、`babylonjs`都对`gltf`格式有良好的的支持
    + `GLTF`文件就是通过`JSON`的键值对方式来表示模型信息，比如`meshes`表示网格模型信息，`materials`表示材质信息...
    + .glb就是gltf格式的二进制文件。

2. **加载.gltf文件(模型加载全流程)**
    ```js
        // 引入gltf模型加载库GLTFLoader.js
        import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
        // 创建GLTF加载器对象
        const loader = new GLTFLoader()
        loader.load( 'gltf模型.gltf', function ( gltf ) {
          console.log('控制台查看加载gltf文件返回的对象结构',gltf);
          console.log('gltf对象场景属性',gltf.scene);
          // 返回的场景对象gltf.scene插入到threejs场景中
          scene.add( gltf.scene );
        })

        //解决加载gltf格式模型纹理贴图和原图不一样问题
          renderer.outputEncoding = THREE.sRGBEncoding;
    ```