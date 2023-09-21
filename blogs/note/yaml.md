---
title: yaml学习笔记
date: 2023-8-22
tags:
 - js
categories:
 -  笔记
---

## yaml学习笔记

1. yaml是什么
  + yaml是一个可读性高，用来表达数据序列化的格式
  + yaml是“yaml ain`t a markup language“（yaml不是一种标记语言）的递归缩写
  + yaml --- JSON + XML   文件后缀：.yaml或者.yml

2. 语法
	+ 使用缩进表示层级关系
	+ 缩进的空格数不重要，只要相同层级的元素左对齐即可
	+ #表示注释

3. 基本数据类型
	+ 纯量	纯量是最基本的，不可再分的值，包括:字符串、布尔值、整数、浮点数、Null、时间、日期
      ```yaml
          	#comment here
            name : redis
            version: 5.6
            port: 6379
            stdin: true
            image: ~(null)
            # date and time formate IS0 8601
            date: 2022-03-18
            time: 2022-03-18T08.30:10+08:00

            singleLineString: >-
              this is a very long string
              another line xjfldsjl
                            another line
            #"this is a very long string\n another line xjfldsjl\n another line\n”
            >-     #"this is a very long string another line xjfldsjl another line”
            >     #"this is a very long string another line xjfldsjl another line\n”
      ```
	+ 数组 
      ```yaml
          ports：
          - 6379
          - 6380
          
          ports: [6379 , 6380]
      ```

	+ 对象
      ```yaml
        container:
          name:mysql
          image:mysql
          prot:1236
          version:5.7
      ```
