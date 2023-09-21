---
title: node.js学习笔记
date: 2023-8-20
tags:
 - js
categories:
 -  笔记
---

## node.js学习笔记

+ code 
    ```js
        const http = require('http')
        const url = require('url')
        const qs = require('querystring')
        const server = http.createServer((req, res) => {

          //http://localhost:3000/getinfo
          const { pathname, query } = url.parse(req.url)

          if (req.method === 'GET' && pathname === '/getinfo') {
            console.log(query)
            console.log(qs.parse(query)) //格式化成js对象
            res.setHeader('Content-Type', 'text/plain;charset=utf-8') //中文乱码处理
            res.end('响应了getinfo API请求')
          } else if (req.method === 'POST' && pathname === '/postinfo') {
            let data = '' //存储结果  
            req.on('data', temp => {//post数据返回可能是一段一段的
              data += temp
            })

            req.on('end', () => {//接受完毕
              console.log(qs.parse(data));
            })

            res.setHeader('Content-Type', 'text/plain;charset=utf-8') //中文乱码处理
            res.end('响应了POST请求')
          } else {
            res.statusCode = 404
            res.end('Not Found')
          }
        })

        server.listen(3000, () => {
          console.log('Server is running');
        })
    ```