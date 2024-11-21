import{_ as s,c as a,o as n,a3 as p}from"./chunks/framework.DpzXWsSh.js";const g=JSON.parse('{"title":"Webpack 5 基础配置详解","description":"","frontmatter":{"title":"Webpack 5 基础配置详解","date":"2023-12-20T00:00:00.000Z","categories":["工程化","工具轮子"]},"headers":[],"relativePath":"blogs/tool/20210718.md","filePath":"blogs/tool/20210718.md"}'),e={name:"blogs/tool/20210718.md"},i=p(`<h1 id="📦-webpack-5-基础配置详解" tabindex="-1">📦 Webpack 5 基础配置详解 <a class="header-anchor" href="#📦-webpack-5-基础配置详解" aria-label="Permalink to &quot;📦 Webpack 5 基础配置详解&quot;">​</a></h1><h2 id="📑-目录" tabindex="-1">📑 目录 <a class="header-anchor" href="#📑-目录" aria-label="Permalink to &quot;📑 目录&quot;">​</a></h2><ul><li><a href="#-webpack概念与核心功能">webpack概念与核心功能</a></li><li><a href="#-项目初始化配置">项目初始化配置</a></li><li><a href="#-加载器loader配置">加载器(Loader)配置</a></li><li><a href="#-插件plugin配置">插件(Plugin)配置</a></li><li><a href="#-开发服务器配置">开发服务器配置</a></li><li><a href="#-多页面打包配置">多页面打包配置</a></li><li><a href="#-性能优化建议">性能优化建议</a></li></ul><h2 id="🎯-webpack概念与核心功能" tabindex="-1">🎯 webpack概念与核心功能 <a class="header-anchor" href="#🎯-webpack概念与核心功能" aria-label="Permalink to &quot;🎯 webpack概念与核心功能&quot;">​</a></h2><p>Webpack 是现代 JavaScript 应用程序的静态模块打包工具。当 webpack 处理应用程序时,它会在内部从一个或多个入口点构建一个依赖图,然后将项目中所需的每一个模块组合成一个或多个 bundles。</p><h3 id="核心概念" tabindex="-1">核心概念 <a class="header-anchor" href="#核心概念" aria-label="Permalink to &quot;核心概念&quot;">​</a></h3><ul><li><strong>Entry</strong>: 入口起点,指示 webpack 应该使用哪个模块来作为构建其内部依赖图的开始</li><li><strong>Output</strong>: 输出结果,告诉 webpack 在哪里输出它所创建的 bundle</li><li><strong>Loader</strong>: 让 webpack 能够去处理其他类型的文件,并将它们转换为有效模块</li><li><strong>Plugin</strong>: 插件则可以用于执行范围更广的任务,从打包优化到资源管理</li><li><strong>Mode</strong>: 模式配置(development/production),启用相应模式下的优化</li></ul><h2 id="🛠-项目初始化配置" tabindex="-1">🛠 项目初始化配置 <a class="header-anchor" href="#🛠-项目初始化配置" aria-label="Permalink to &quot;🛠 项目初始化配置&quot;">​</a></h2><h3 id="_1-创建项目并初始化" tabindex="-1">1. 创建项目并初始化 <a class="header-anchor" href="#_1-创建项目并初始化" aria-label="Permalink to &quot;1. 创建项目并初始化&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mkdir</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> webpack-demo</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> webpack-demo</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span></span></code></pre></div><h3 id="_2-安装webpack相关依赖" tabindex="-1">2. 安装webpack相关依赖 <a class="header-anchor" href="#_2-安装webpack相关依赖" aria-label="Permalink to &quot;2. 安装webpack相关依赖&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> webpack</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> webpack-cli</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --save-dev</span></span></code></pre></div><h3 id="_3-基础配置文件" tabindex="-1">3. 基础配置文件 <a class="header-anchor" href="#_3-基础配置文件" aria-label="Permalink to &quot;3. 基础配置文件&quot;">​</a></h3><div class="language-javascript:webpack.config.js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript:webpack.config.js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const path = require(&#39;path&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>module.exports = {</span></span>
<span class="line"><span>  entry: &#39;./src/index.js&#39;,</span></span>
<span class="line"><span>  output: {</span></span>
<span class="line"><span>    filename: &#39;bundle.js&#39;,</span></span>
<span class="line"><span>    path: path.resolve(__dirname, &#39;dist&#39;),</span></span>
<span class="line"><span>    clean: true, // webpack 5 内置清理功能</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  mode: &#39;development&#39;</span></span>
<span class="line"><span>};</span></span></code></pre></div><h2 id="📦-加载器-loader-配置" tabindex="-1">📦 加载器(Loader)配置 <a class="header-anchor" href="#📦-加载器-loader-配置" aria-label="Permalink to &quot;📦 加载器(Loader)配置&quot;">​</a></h2><h3 id="css处理" tabindex="-1">CSS处理 <a class="header-anchor" href="#css处理" aria-label="Permalink to &quot;CSS处理&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> css-loader</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> style-loader</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> postcss-loader</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> postcss</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> postcss-preset-env</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --save-dev</span></span></code></pre></div><div class="language-javascript:webpack.config.js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript:webpack.config.js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>module.exports = {</span></span>
<span class="line"><span>  // ...</span></span>
<span class="line"><span>  module: {</span></span>
<span class="line"><span>    rules: [</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        test: /\\.css$/i,</span></span>
<span class="line"><span>        use: [</span></span>
<span class="line"><span>          &#39;style-loader&#39;,</span></span>
<span class="line"><span>          &#39;css-loader&#39;,</span></span>
<span class="line"><span>          {</span></span>
<span class="line"><span>            loader: &#39;postcss-loader&#39;,</span></span>
<span class="line"><span>            options: {</span></span>
<span class="line"><span>              postcssOptions: {</span></span>
<span class="line"><span>                plugins: [</span></span>
<span class="line"><span>                  &#39;postcss-preset-env&#39;,</span></span>
<span class="line"><span>                ],</span></span>
<span class="line"><span>              },</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>        ],</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>};</span></span></code></pre></div><h3 id="资源模块处理" tabindex="-1">资源模块处理 <a class="header-anchor" href="#资源模块处理" aria-label="Permalink to &quot;资源模块处理&quot;">​</a></h3><p>Webpack 5 内置了资源模块(Asset Modules),无需额外的 loader:</p><div class="language-javascript:webpack.config.js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript:webpack.config.js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>module.exports = {</span></span>
<span class="line"><span>  // ...</span></span>
<span class="line"><span>  module: {</span></span>
<span class="line"><span>    rules: [</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        test: /\\.(png|svg|jpg|jpeg|gif)$/i,</span></span>
<span class="line"><span>        type: &#39;asset&#39;,</span></span>
<span class="line"><span>        parser: {</span></span>
<span class="line"><span>          dataUrlCondition: {</span></span>
<span class="line"><span>            maxSize: 4 * 1024 // 4kb</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        generator: {</span></span>
<span class="line"><span>          filename: &#39;images/[hash][ext][query]&#39;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>};</span></span></code></pre></div><h2 id="🔌-插件-plugin-配置" tabindex="-1">🔌 插件(Plugin)配置 <a class="header-anchor" href="#🔌-插件-plugin-配置" aria-label="Permalink to &quot;🔌 插件(Plugin)配置&quot;">​</a></h2><h3 id="html生成插件" tabindex="-1">HTML生成插件 <a class="header-anchor" href="#html生成插件" aria-label="Permalink to &quot;HTML生成插件&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> html-webpack-plugin</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --save-dev</span></span></code></pre></div><div class="language-javascript:webpack.config.js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript:webpack.config.js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>module.exports = {</span></span>
<span class="line"><span>  // ...</span></span>
<span class="line"><span>  plugins: [</span></span>
<span class="line"><span>    new HtmlWebpackPlugin({</span></span>
<span class="line"><span>      template: &#39;./src/index.html&#39;,</span></span>
<span class="line"><span>      title: &#39;Webpack App&#39;</span></span>
<span class="line"><span>    }),</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>};</span></span></code></pre></div><h3 id="css提取插件" tabindex="-1">CSS提取插件 <a class="header-anchor" href="#css提取插件" aria-label="Permalink to &quot;CSS提取插件&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mini-css-extract-plugin</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --save-dev</span></span></code></pre></div><div class="language-javascript:webpack.config.js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript:webpack.config.js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const MiniCssExtractPlugin = require(&#39;mini-css-extract-plugin&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>module.exports = {</span></span>
<span class="line"><span>  // ...</span></span>
<span class="line"><span>  plugins: [</span></span>
<span class="line"><span>    new MiniCssExtractPlugin({</span></span>
<span class="line"><span>      filename: &#39;css/[name].[contenthash].css&#39;</span></span>
<span class="line"><span>    }),</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>  module: {</span></span>
<span class="line"><span>    rules: [</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        test: /\\.css$/i,</span></span>
<span class="line"><span>        use: [MiniCssExtractPlugin.loader, &#39;css-loader&#39;],</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>};</span></span></code></pre></div><h2 id="🚀-开发服务器配置" tabindex="-1">🚀 开发服务器配置 <a class="header-anchor" href="#🚀-开发服务器配置" aria-label="Permalink to &quot;🚀 开发服务器配置&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> webpack-dev-server</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --save-dev</span></span></code></pre></div><div class="language-javascript:webpack.config.js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript:webpack.config.js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>module.exports = {</span></span>
<span class="line"><span>  // ...</span></span>
<span class="line"><span>  devServer: {</span></span>
<span class="line"><span>    static: &#39;./dist&#39;,</span></span>
<span class="line"><span>    hot: true,</span></span>
<span class="line"><span>    open: true,</span></span>
<span class="line"><span>    port: 8080,</span></span>
<span class="line"><span>    compress: true,</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>};</span></span></code></pre></div><h2 id="📚-多页面打包配置" tabindex="-1">📚 多页面打包配置 <a class="header-anchor" href="#📚-多页面打包配置" aria-label="Permalink to &quot;📚 多页面打包配置&quot;">​</a></h2><div class="language-javascript:webpack.config.js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript:webpack.config.js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>module.exports = {</span></span>
<span class="line"><span>  entry: {</span></span>
<span class="line"><span>    home: &#39;./src/pages/home/index.js&#39;,</span></span>
<span class="line"><span>    about: &#39;./src/pages/about/index.js&#39;,</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  output: {</span></span>
<span class="line"><span>    filename: &#39;[name].[contenthash].js&#39;,</span></span>
<span class="line"><span>    path: path.resolve(__dirname, &#39;dist&#39;),</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  plugins: [</span></span>
<span class="line"><span>    new HtmlWebpackPlugin({</span></span>
<span class="line"><span>      template: &#39;./src/pages/home/index.html&#39;,</span></span>
<span class="line"><span>      filename: &#39;home.html&#39;,</span></span>
<span class="line"><span>      chunks: [&#39;home&#39;],</span></span>
<span class="line"><span>    }),</span></span>
<span class="line"><span>    new HtmlWebpackPlugin({</span></span>
<span class="line"><span>      template: &#39;./src/pages/about/index.html&#39;,</span></span>
<span class="line"><span>      filename: &#39;about.html&#39;,</span></span>
<span class="line"><span>      chunks: [&#39;about&#39;],</span></span>
<span class="line"><span>    }),</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>};</span></span></code></pre></div><h2 id="🚀-性能优化建议" tabindex="-1">🚀 性能优化建议 <a class="header-anchor" href="#🚀-性能优化建议" aria-label="Permalink to &quot;🚀 性能优化建议&quot;">​</a></h2><h3 id="_1-开启缓存" tabindex="-1">1. 开启缓存 <a class="header-anchor" href="#_1-开启缓存" aria-label="Permalink to &quot;1. 开启缓存&quot;">​</a></h3><div class="language-javascript:webpack.config.js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript:webpack.config.js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>module.exports = {</span></span>
<span class="line"><span>  // ...</span></span>
<span class="line"><span>  cache: {</span></span>
<span class="line"><span>    type: &#39;filesystem&#39;,</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>};</span></span></code></pre></div><h3 id="_2-代码分割" tabindex="-1">2. 代码分割 <a class="header-anchor" href="#_2-代码分割" aria-label="Permalink to &quot;2. 代码分割&quot;">​</a></h3><div class="language-javascript:webpack.config.js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript:webpack.config.js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>module.exports = {</span></span>
<span class="line"><span>  // ...</span></span>
<span class="line"><span>  optimization: {</span></span>
<span class="line"><span>    splitChunks: {</span></span>
<span class="line"><span>      chunks: &#39;all&#39;,</span></span>
<span class="line"><span>      cacheGroups: {</span></span>
<span class="line"><span>        vendor: {</span></span>
<span class="line"><span>          test: /[\\\\/]node_modules[\\\\/]/,</span></span>
<span class="line"><span>          name: &#39;vendors&#39;,</span></span>
<span class="line"><span>          chunks: &#39;all&#39;,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>};</span></span></code></pre></div><h3 id="_3-tree-shaking" tabindex="-1">3. Tree Shaking <a class="header-anchor" href="#_3-tree-shaking" aria-label="Permalink to &quot;3. Tree Shaking&quot;">​</a></h3><div class="language-javascript:webpack.config.js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript:webpack.config.js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>module.exports = {</span></span>
<span class="line"><span>  mode: &#39;production&#39;, // 生产模式自动启用</span></span>
<span class="line"><span>  optimization: {</span></span>
<span class="line"><span>    usedExports: true,</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>};</span></span></code></pre></div><h2 id="📝-注意事项" tabindex="-1">📝 注意事项 <a class="header-anchor" href="#📝-注意事项" aria-label="Permalink to &quot;📝 注意事项&quot;">​</a></h2><ol><li>确保 Node.js 版本 &gt;= 14.0.0</li><li>webpack 5 对 package.json 中的 <code>type: &quot;module&quot;</code> 支持更好</li><li>开发环境建议使用 source map 便于调试</li><li>生产环境注意开启代码压缩和优化选项</li></ol><h2 id="🎉-总结" tabindex="-1">🎉 总结 <a class="header-anchor" href="#🎉-总结" aria-label="Permalink to &quot;🎉 总结&quot;">​</a></h2><p>本文介绍了 Webpack 5 的基础配置,包括:</p><ul><li>基本概念和核心功能</li><li>loader 和 plugin 的配置</li><li>开发服务器设置</li><li>多页面应用配置</li><li>性能优化方案</li></ul><blockquote><p>💡 提示: webpack 5 的配置比之前版本更加简洁,内置了许多原本需要第三方插件才能实现的功能。建议经常查看官方文档获取最新特性。</p></blockquote>`,46),l=[i];function t(c,o,h,r,d,k){return n(),a("div",null,l)}const b=s(e,[["render",t]]);export{g as __pageData,b as default};