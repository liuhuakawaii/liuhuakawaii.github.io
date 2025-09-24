import{_ as s,c as n,o as a,a7 as i}from"./chunks/framework.DLSH1pMh.js";const p="/assets/01.shnZGrng.png",y=JSON.parse('{"title":"AGI全栈项目--LLMOps","description":"","frontmatter":{"title":"AGI全栈项目--LLMOps","date":"2025-09-24T00:00:00.000Z","categories":["前端进阶","工作随记","javascript","ai"]},"headers":[],"relativePath":"blogs/word/2025/20250924-AGI全栈项目.md","filePath":"blogs/word/2025/20250924-AGI全栈项目.md"}'),l={name:"blogs/word/2025/20250924-AGI全栈项目.md"},e=i(`<h1 id="agi全栈项目" tabindex="-1">AGI全栈项目 <a class="header-anchor" href="#agi全栈项目" aria-label="Permalink to &quot;AGI全栈项目&quot;">​</a></h1><h2 id="llmops项目架构" tabindex="-1">LLMOps项目架构 <a class="header-anchor" href="#llmops项目架构" aria-label="Permalink to &quot;LLMOps项目架构&quot;">​</a></h2><p>| --- | --- | | 表示层 | PC网站、开放API、APP | | 接入层 | Nginx、负载均衡 | | 控制层 | AI应用模块、用户模块、授权模块、插件模块 | | 服务层 | LLM应用服务、上传服务、授权服务、文本嵌入服务 | | 核心层 | 多LLM集成、Agent集成、LangChain封装 | | 存储层 | PostgreSQL、Redis、向量数据库、对象存储 | | 资源层 | Linux服务器、Docker虚拟机、K8s集群 |</p><p><strong>技术栈</strong></p><ol><li>使用 Python 作为后端编程语言虽然性能比不上Java等编译型等语言,但是<strong>Python丰富的生态系统</strong>,庞大的AI开源模型、机器学习基础库等,是其他语言无法媲美的。</li><li>Flask是一个<strong>轻量级的框架</strong>,核心非常小,功能丰富但不臃肿,性能对比Django强了不少,零基础也可以快速入门,大大降低了学习难度。</li><li>对于LLM应用开发,可以使用<strong>LangChain</strong>极大简化开发流程,提升开发效率,其他语言需要自己封装轮子。</li></ol><h2 id="环境搭建" tabindex="-1">环境搭建 <a class="header-anchor" href="#环境搭建" aria-label="Permalink to &quot;环境搭建&quot;">​</a></h2><h3 id="后端搭建" tabindex="-1">后端搭建 <a class="header-anchor" href="#后端搭建" aria-label="Permalink to &quot;后端搭建&quot;">​</a></h3><ol><li>Python虚拟环境的创建与优缺点</li></ol><ul><li>创建虚拟环境：<code>python -m venv &lt;环境名&gt;</code>,该命令在Python 2.7+/Python3.3+以上版本可用</li><li>python 虚拟环境与系统环境之间是隔离的，不会相互干扰，不会对系统环境造成任何影响，最大程度避免包冲突</li><li>占用更大的空间 <ul><li>激活虚拟环境：<code>activate</code>（cmd <code>env\\Scripts\\activate</code>）</li><li>退出虚拟环境：<code>deactivate</code>（cmd <code>env\\Scripts\\deactivate.bat</code>）</li></ul></li></ul><ol start="2"><li>腾讯云pip镜像加速装置</li></ol><ul><li>临时使用：<code>pip install -i &lt;镜像地址&gt; &lt;包名&gt;</code></li><li>永久使用：<code>pip config set global.index-url &lt;镜像地址&gt;</code></li><li>镜像地址：<a href="https://mirrors.cloud.tencent.com/pypi/simple" target="_blank" rel="noreferrer">https://mirrors.cloud.tencent.com/pypi/simple</a></li><li>查询镜像源：<code>pip config list</code></li></ul><ol start="3"><li>python 新建代码模版</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>#! /usr/bin/env python</span></span>
<span class="line"><span># -*- coding: utf-8 -*-</span></span>
<span class="line"><span>&quot;&quot;&quot;</span></span>
<span class="line"><span>@Time    : \${DATE} \${TIME}</span></span>
<span class="line"><span>@Author  : liuhuakawaii@gmail.com</span></span>
<span class="line"><span>@File    : \${NAME}.py</span></span>
<span class="line"><span>&quot;&quot;&quot;</span></span></code></pre></div><ol start="4"><li>插件推荐</li></ol><ul><li>.env files</li><li>CodeGlance Pro</li></ul><h4 id="项目目录结构约定、规范与依赖注入" tabindex="-1">项目目录结构约定、规范与依赖注入 <a class="header-anchor" href="#项目目录结构约定、规范与依赖注入" aria-label="Permalink to &quot;项目目录结构约定、规范与依赖注入&quot;">​</a></h4><p>Flask是一个优美的微框架,这即是一件好事--你可以按照自己的习惯和想法来组织你的项目,不过对于团队来说这可能是一件坏事--团队每个人都有自己的喜好,这会使整体项目的结构很混乱。因此我们为LLMOp项目设计提炼了一种规范,它不仅仅是结构,风格还还有诸多细节</p><ol><li>项目结构 对于很多人来说,适应规范会觉得很不舒服,但在开发中,这是一件必须的事,越规矩,越自由。</li></ol><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>|---app  // 应用入口集合</span></span>
<span class="line"><span>|    ├── __init__.py</span></span>
<span class="line"><span>│    └── http</span></span>
<span class="line"><span>│---config  // 应用配置文件</span></span>
<span class="line"><span>│   ├── __init__.py</span></span>
<span class="line"><span>│   ├── config.py</span></span>
<span class="line"><span>│   └── default_config.py</span></span>
<span class="line"><span>│---internal  // 应用所有内部文件</span></span>
<span class="line"><span>│   └── core  // LLM核心文件，集成LangChain, LLM, Embedding等模型的代码</span></span>
<span class="line"><span>│       ├── agent</span></span>
<span class="line"><span>│       ├── chain</span></span>
<span class="line"><span>│       ├── prompt</span></span>
<span class="line"><span>│       ├── model_runtime</span></span>
<span class="line"><span>│       ├── moderation</span></span>
<span class="line"><span>│       ├── tool</span></span>
<span class="line"><span>│       ├── vector_store</span></span>
<span class="line"><span>│       └── ...</span></span>
<span class="line"><span>│   └──exception  // 通用公共异常目录</span></span>
<span class="line"><span>│       ├── __init__.py</span></span>
<span class="line"><span>│       ├── exception.py</span></span>
<span class="line"><span>│       └── ...</span></span>
<span class="line"><span>│   └──extension  // Flask扩展文件目录</span></span>
<span class="line"><span>│       ├── __init__.py</span></span>
<span class="line"><span>│       ├── database_extension.py</span></span>
<span class="line"><span>|       └── ...</span></span>
<span class="line"><span>|   └──handler  // 路由处理器、控制器目录</span></span>
<span class="line"><span>│       ├── __init__.py</span></span>
<span class="line"><span>│       ├── account_handler.py</span></span>
<span class="line"><span>│       └── ...</span></span>
<span class="line"><span>│   └──middleware  // 应用中间件目录，包含检验是否登录</span></span>
<span class="line"><span>│       ├── __init__.py</span></span>
<span class="line"><span>│       ├── middleware.py</span></span>
<span class="line"><span>|       └── ...</span></span>
<span class="line"><span>|   └──migration  // 数据库迁移文件目录，自动生成</span></span>
<span class="line"><span>│       ├── versions</span></span>
<span class="line"><span>|       └── ...</span></span>
<span class="line"><span>|   └──model  // 数据库模型文件目录</span></span>
<span class="line"><span>│       ├── __init__.py</span></span>
<span class="line"><span>│       ├── account.py</span></span>
<span class="line"><span>|       └── ...</span></span>
<span class="line"><span>|   └──router  // 应用路由文件夹</span></span>
<span class="line"><span>│       ├── __init__.py</span></span>
<span class="line"><span>│       └── router.py</span></span>
<span class="line"><span>│   └──schedule  // 调度任务、定时任务文件夹</span></span>
<span class="line"><span>│       ├── __init__.py</span></span>
<span class="line"><span>│       └── ...</span></span>
<span class="line"><span>│   └──schema  // 请求和响应的结构体</span></span>
<span class="line"><span>│       └── __init__.py</span></span>
<span class="line"><span>│   └──server  // 构建的应用，与app文件夹对应</span></span>
<span class="line"><span>│       └── __init__.py</span></span>
<span class="line"><span>│   └──service  // 服务层文件夹</span></span>
<span class="line"><span>│       ├── __init__.py</span></span>
<span class="line"><span>│       └── oauth_service.py</span></span>
<span class="line"><span>│   └──task  // 任务文件夹，支持即时任务+延迟任务</span></span>
<span class="line"><span>│       └── __init__.py</span></span>
<span class="line"><span>│---pkg  // 扩展包文件夹</span></span>
<span class="line"><span>│   ├── __init__.py</span></span>
<span class="line"><span>│   └── oauth</span></span>
<span class="line"><span>│       ├── __init__.py</span></span>
<span class="line"><span>│       └── github_oauth.py</span></span>
<span class="line"><span>|---storage  // 本地存储文件夹</span></span>
<span class="line"><span>|---test  // 测试目录(注意在settings里面排除)</span></span>
<span class="line"><span>|---venv  // 虚拟环境</span></span>
<span class="line"><span>|---.env  // 应用配置文件</span></span>
<span class="line"><span>|---.gitignore  // 配置git忽略文件</span></span>
<span class="line"><span>|---requirements.txt  // 第三方包依赖管理</span></span>
<span class="line"><span>|---README.md  // 项目说明文件</span></span></code></pre></div><ol start="2"><li>代码运行流程图 <img src="`+p+`" alt="代码运行流程图"></li><li>文件与Python类函数命名规范 3.1文件名</li></ol><ul><li>使用全部小写字母。</li><li>使用下划线分隔单词,例如:<code>app_service.py</code>。</li><li>尽可能保证文件作用的单一,不要把所有代码一次性写在同一个文件中。 3.2类名</li><li>使用驼峰命名法,例如:<code>class AppService</code>。</li><li>类名应该以大写字母开头,每个单词的首字母都大写。</li><li>如果类名由多个单词组成,单词之间不使用下划线分割。 3.3函数名和方法</li><li>使用小写字母。</li><li>使用下划线分隔单词。</li><li>例如:<code>get_account</code>,<code>generate_token</code>等。 3.4变量名</li><li>使用小写字母。</li><li>使用下划线分隔单词。</li><li>例如:<code>my_variable</code>,<code>token_count</code>。 3.5常量</li><li>使用全大写字母。</li><li>使用下划线分隔单词。</li><li>例如:<code>MAX SIZE</code>,<code>PI</code>等。 3.6私有变量与方法</li><li>以一个下划线开头表示私有,例如:<code>my_private_variable</code>,<code>_my_private_method()</code>等</li><li>在Python中并没有严格的私有变量/方法,这种命名约定只是一种约定,而不是强制规则,实际上这些变量/方法仍然可以被使用,但是作为一种约定,在外部调用时,不应该调用私有的变量与方法。 3.7模块名</li><li>与文件名类似,使用全部小写字母,使用下划线分隔单词。</li><li>例如:<code>my_module.py</code>对应的模块名应该是<code>my_module</code>。</li><li>模块下创建<code>_init_.py</code>文件代表当前目录为一个模块,并尽可能在<code>_init_.py</code>中使用 <code>__all__</code> 简化导出。</li></ul><ol start="4"><li>Python中的依赖注入</li></ol><ul><li>依赖注入是软件工程中的一种设计模式,它允许在创建对象时由夕下部提供依赖关系,而不是自己创建这些依赖关系。</li><li>简单来说,即我需要什么,传递什么,而不是自己内部构建,<code>Corntroller</code>需要使用<code>Service</code>的内容,将<code>Service</code>作为参数传递给<code>Controller</code>即可,在<code>Python</code>中可以使用<code>injector</code>包来快速实现依赖注</li><li>安装：<code>pip install injector</code></li><li>使用示例：</li></ul><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> injector </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Injector, inject</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> A</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    name: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">str</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;llmops&#39;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">@inject</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> B</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    def</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> __init__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self, a: A):</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    def</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self):</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Class A的name:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.a.name</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">injector </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Injector()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">b </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> injector.get(B)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">b.print()</span></span></code></pre></div><p>其中@inject装饰器用于注入,使用@inject装饰的函数/类,不需要显式创建依赖对象就可以直接使用。要获取被注入的对象,可以使用Injector实例的get0方法传入特定的类型,即可获取。</p>`,25),t=[e];function c(o,h,r,d,k,_){return a(),n("div",null,t)}const E=s(l,[["render",c]]);export{y as __pageData,E as default};
