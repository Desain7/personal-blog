import{_ as s,o as a,c as n,S as l}from"./chunks/framework.59c3ae61.js";const C=JSON.parse('{"title":"怎么解决跨域问题？","description":"","frontmatter":{"isTimeLine":true,"title":"怎么解决跨域问题？","date":"2024-3-7","tags":["前端","开发经验"],"categories":["开发经验"]},"headers":[],"relativePath":"frontend/exp/怎么解决跨域问题？.md","filePath":"frontend/exp/怎么解决跨域问题？.md","lastUpdated":1709819209000}'),o={name:"frontend/exp/怎么解决跨域问题？.md"},p=l(`<h1 id="怎么解决跨域问题" tabindex="-1">怎么解决跨域问题？ <a class="header-anchor" href="#怎么解决跨域问题" aria-label="Permalink to &quot;怎么解决跨域问题？&quot;">​</a></h1><h2 id="什么是跨域" tabindex="-1">什么是跨域？ <a class="header-anchor" href="#什么是跨域" aria-label="Permalink to &quot;什么是跨域？&quot;">​</a></h2><p>一个网页向另一个不同域名/不同协议/不同端口的网页请求资源，这就是跨域。</p><p>跨域产生的原因：出于安全考虑，浏览器实施了同源策略。在当前域名请求网站中，默认不允许通过 ajax 请求发送到其他域名。<em>违背同源策略就是跨域</em></p><h2 id="同源策略" tabindex="-1">同源策略 <a class="header-anchor" href="#同源策略" aria-label="Permalink to &quot;同源策略&quot;">​</a></h2><h3 id="什么是同源策略" tabindex="-1">什么是同源策略 <a class="header-anchor" href="#什么是同源策略" aria-label="Permalink to &quot;什么是同源策略&quot;">​</a></h3><p>同源策略是由 Netscape 提出的一个著名的安全策略，现在所有支持 JavaScript 的浏览器都会使用这个策略。</p><p>同源策略要求网页只能从同一个域名（协议、域名、端口号都相同）加载资源，而不能直接访问其他域名下的资源。</p><h3 id="为什么要使用同源策略" tabindex="-1">为什么要使用同源策略 <a class="header-anchor" href="#为什么要使用同源策略" aria-label="Permalink to &quot;为什么要使用同源策略&quot;">​</a></h3><p>同源策略的目的是防止恶意网站通过脚本等方式获取用户的敏感信息或进行其他恶意操作。</p><p>如果没有同源策略限制，恶意网站就可以通过跨域请求攻击其他网站，窃取用户的信息。</p><p>如果网页之间不满足同源要求，将不能:</p><ol><li>共享Cookie、LocalStorage、IndexDB</li><li>获取DOM</li><li>AJAX请求不能发送</li></ol><h2 id="跨域的解决方案" tabindex="-1">跨域的解决方案 <a class="header-anchor" href="#跨域的解决方案" aria-label="Permalink to &quot;跨域的解决方案&quot;">​</a></h2><h3 id="cors-跨域资源共享" tabindex="-1">CORS（跨域资源共享） <a class="header-anchor" href="#cors-跨域资源共享" aria-label="Permalink to &quot;CORS（跨域资源共享）&quot;">​</a></h3><p>CORS（Cross-Origin Resource Sharing），跨域资源共享。CORS 是官方的跨域解决方案，它的特点是不需要在客户端做任何特殊的操作，完全在服务器中进行处理，支持 get 和 post 请求。</p><p>跨域资源共享标准新增了一组 HTTP 首部字段，允许服务器声明哪些源站通过浏览器有权限访问哪些资源。</p><p><strong>怎么使用 CORS：</strong> CORS 通过设置一个响应头来告诉浏览器，该请求允许跨域，浏览器收到该响应以后就会对响应放行。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 代码示例</span></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">all</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/cors-server</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">request</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">response</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">//设置响应头</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">//响应首部中可以携带一个 Access-Control-Allow-Origin 字段，表示允许哪些源站访问</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">response</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setHeader</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Access-Control-Allow-Origin</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">*</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// response.setHeader(&quot;Access-Control-Allow-Origin&quot;, &quot;http://127.0.0.1:5500&quot;);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">//Access-Control-Allow-Headers 首部字段用于预检请求的响应。其指明了实际请求中允许携带的首部字</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">response</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setHeader</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Access-Control-Allow-Headers</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">*</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">//Access-Control-Allow-Methods 首部字段用于预检请求的响应。其指明了实际请求所允许使用的 HTTP</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">response</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setHeader</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Access-Control-Allow-Method</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">*</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">response</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">send</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello CORS</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p><strong>以下是具体的一些字段：</strong></p><ol><li>Access-Control-Allow-Origin</li></ol><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Access</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">Control</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">Allow</span><span style="color:#89DDFF;">-</span><span style="color:#FFCB6B;">Origin</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">origin</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> | *</span></span></code></pre></div><p>origin 参数的值指定了允许访问该资源的外域 URI。对于不需要携带身份凭证的请求，服务器可以指定该字段的值为通配符，表示允许来自所有域的请求。</p><ol start="2"><li>Access-Control-Allow-Headers</li></ol><p>Access-Control-Allow-Headers 指明了实际请求中允许携带的首部字段。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Access</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">Control</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">Allow</span><span style="color:#89DDFF;">-</span><span style="color:#FFCB6B;">Headers</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">field-name</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">[, </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">field-name</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">]*</span></span></code></pre></div><ol start="3"><li>Access-Control-Allow-Methods</li></ol><p>Access-Control-Allow-Methods 指明了实际请求所允许使用的 HTTP 方法。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Access</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">Control</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">Allow</span><span style="color:#89DDFF;">-</span><span style="color:#FFCB6B;">Methods</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">method</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">[, </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">method</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">]*</span></span></code></pre></div><h3 id="jsonp" tabindex="-1">JSONP <a class="header-anchor" href="#jsonp" aria-label="Permalink to &quot;JSONP&quot;">​</a></h3><p><strong>JSONP 是什么？</strong></p><p>JSONP(JSON with Padding)，是一个非官方的跨域解决方案，纯粹凭借程序员的聪明才智开发出来，只支持 get 请求。</p><p><strong>JSONP 是怎么工作的？</strong></p><p>在网页有一些标签天生具有跨域能力，比如：img link iframe script。</p><p>JSONP 就是利用 script 标签的跨域能力来发送请求的。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 1. 动态的创建一个 script 标签------------------------------------------------------------</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> script </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createElement</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">script</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//2. 设置 script 的 src， 设置回调函数</span></span>
<span class="line"><span style="color:#A6ACCD;">script</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">src </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">http://localhost:3000/testAJAX?callback=abc</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">abc</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">data</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">alert</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 3. 将 script 添加到 body 中</span></span>
<span class="line"><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">body</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">appendChild</span><span style="color:#A6ACCD;">(script)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 4. 服务器中路由的处理------------------------------------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;">router</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/testAJAX</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">req</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">res</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">收到请求</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">callback</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">req</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">query</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">callback</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">obj</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    ame</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">孙悟空</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    age</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">18</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">send</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">callback</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">JSON</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">stringify</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">obj</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>Axios 中的实现：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">$http </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> axios</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">$http</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">jsonp</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">http://www.domain2.com:8080/login</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">params</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">jsonp</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">handleCallback</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">res</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span></code></pre></div><p><strong>JSONP的缺点：</strong></p><ul><li>具有局限性， 仅支持get方法</li><li>不安全，可能会遭受XSS攻击</li></ul><h3 id="nginx-反向代理" tabindex="-1">nginx 反向代理 <a class="header-anchor" href="#nginx-反向代理" aria-label="Permalink to &quot;nginx 反向代理&quot;">​</a></h3><p>同源策略仅是针对浏览器的安全策略。服务器端调用 HTTP 接口只是使用 HTTP 协议，不需要同源策略，也就不存在跨域问题。</p><p>**实现思路：**通过 Nginx 配置一个代理服务器域名与 domain1 相同，端口不同）做跳板机，反向代理访问 domain2 接口，并且可以顺便修改 cookie 中 domain 信息，方便当前域 cookie 写入，实现跨域访问。</p><p>nginx 具体配置：</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">#proxy服务器</span></span>
<span class="line"><span style="color:#A6ACCD;">server {</span></span>
<span class="line"><span style="color:#A6ACCD;">    listen       81;</span></span>
<span class="line"><span style="color:#A6ACCD;">    server_name  www.domain1.com;</span></span>
<span class="line"><span style="color:#A6ACCD;">    location / {</span></span>
<span class="line"><span style="color:#A6ACCD;">        proxy_pass   http://www.domain2.com:8080;  #反向代理</span></span>
<span class="line"><span style="color:#A6ACCD;">        proxy_cookie_domain www.domain2.com www.domain1.com; #修改cookie里域名</span></span>
<span class="line"><span style="color:#A6ACCD;">        index  index.html index.htm;</span></span>
<span class="line"><span style="color:#A6ACCD;">        # 当用webpack-dev-server等中间件代理接口访问nignx时，此时无浏览器参与，故没有同源限制，下面的跨域配置可不启用</span></span>
<span class="line"><span style="color:#A6ACCD;">        add_header Access-Control-Allow-Origin http://www.domain1.com;  #当前端只跨域不带cookie时，可为*</span></span>
<span class="line"><span style="color:#A6ACCD;">        add_header Access-Control-Allow-Credentials true;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h3 id="待更新" tabindex="-1">待更新... <a class="header-anchor" href="#待更新" aria-label="Permalink to &quot;待更新...&quot;">​</a></h3>`,46),e=[p];function t(c,r,D,y,F,i){return a(),n("div",null,e)}const d=s(o,[["render",t]]);export{C as __pageData,d as default};
