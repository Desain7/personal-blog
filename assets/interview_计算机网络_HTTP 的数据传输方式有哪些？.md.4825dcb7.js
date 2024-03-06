import{_ as a,o as s,c as e,S as o}from"./chunks/framework.59c3ae61.js";const C=JSON.parse('{"title":"HTTP 的数据传输方式有哪些？","description":"","frontmatter":{"isTimeLine":true,"title":"HTTP 的数据传输方式有哪些？","date":"2024-3-6","tags":["面试经验","计算机网络"],"categories":["计算机网络"]},"headers":[],"relativePath":"interview/计算机网络/HTTP 的数据传输方式有哪些？.md","filePath":"interview/计算机网络/HTTP 的数据传输方式有哪些？.md","lastUpdated":1709733602000}'),n={name:"interview/计算机网络/HTTP 的数据传输方式有哪些？.md"},p=o(`<h1 id="http-的数据传输方式有哪些" tabindex="-1">HTTP 的数据传输方式有哪些？ <a class="header-anchor" href="#http-的数据传输方式有哪些" aria-label="Permalink to &quot;HTTP 的数据传输方式有哪些？&quot;">​</a></h1><p>对前端来说，后端主要通过提供 http 接口来传输数据，而数据传输的方式主要有 5 种：</p><ul><li>url param</li><li>query</li><li>form-urlencoded</li><li>form-data</li><li>json</li></ul><h2 id="url-param" tabindex="-1">url param <a class="header-anchor" href="#url-param" aria-label="Permalink to &quot;url param&quot;">​</a></h2><p>url param 是 url 中的参数，它是通过 URL 中的参数来传输数据的。</p><p>我们可以把参数写在 url 中，比如：</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">http://baidu.com/person/abc</span></span></code></pre></div><p>这里的 abc 就是路径中的参数（url param），服务端框架或单页应用的路由都支持从 url 中取出参数。</p><h2 id="query" tabindex="-1">query <a class="header-anchor" href="#query" aria-label="Permalink to &quot;query&quot;">​</a></h2><p>通过 url 中 ？后面用 &amp; 分隔的字符串传递数据。比如：</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">http://baidu.com/person?name=abc&amp;age=20</span></span></code></pre></div><p>这里的 name 和 age 就是 query 传递的数据。</p><p>其中非英文的字符和一些特殊字符要经过编码，可以使用 encodeURIComponent 的 api 来编码：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> query </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">?name=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">encodeURIComponent</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">abc</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">&amp;age=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">encodeURIComponent</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">20</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// ?name=%E5%85%89&amp;age=20</span></span></code></pre></div><p>或使用 querystring 的 api 来编码：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> query </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> querystring</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">stringify</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">abc</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">age</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// ?name=%E5%85%89&amp;age=20</span></span></code></pre></div><h2 id="form-urlencoded" tabindex="-1">form-urlencoded <a class="header-anchor" href="#form-urlencoded" aria-label="Permalink to &quot;form-urlencoded&quot;">​</a></h2><p>直接用 form 表单提交数据就是这种，它和 query 字符串的方式的区别只是放在了 body 里，然后指定了 content-type 是 <code>application/x-www-form-urlencoded</code>。</p><p>因为内容也是 query 字符串，所以也要用 encodeURIComponent 的 api 或 query-string 库处理下。</p><p>这种格式也很容易理解，get 是把数据拼成 query 字符串放在 url 后面，于是表单的 post 提交方式的时候就直接用相同的方式把数据放在了 body 里。</p><p>通过 &amp; 分隔的 form-urlencoded 的方式需要对内容做 url encode，如果传递大量的数据，比如上传文件的时候就不是很合适了，因为文件 encode 一遍的话太慢了，这时候就可以用 form-data。</p><h2 id="form-data" tabindex="-1">form-data <a class="header-anchor" href="#form-data" aria-label="Permalink to &quot;form-data&quot;">​</a></h2><p>form data 不再是通过 &amp; 分隔数据，而是用 --------- + 一串数字做为 boundary 分隔符。因为不是 url 的方式了，自然也不用再做 url encode 了。</p><p>form-data 需要指定 content type 为 multipart/form-data，然后指定 boundary 也就是分割线。</p><p>body 里面就是用 boundary 分隔符分割的内容。</p><p>很明显，这种方式适合传输文件，而且可以传输多个文件。</p><p>但是毕竟多了一些只是用来分隔的 boundary，所以请求体会增大。</p><h2 id="json" tabindex="-1">json <a class="header-anchor" href="#json" aria-label="Permalink to &quot;json&quot;">​</a></h2><p>form-urlencoded 需要对内容做 url encode，而 form data 则需要加很长的 boundary，两种方式都有一些缺点。如果只是传输 json 数据的话，不需要用这两种。</p><p>可以直接指定content type 为 application/json 就行，我们平时传输 json 数据基本用的是这种。</p>`,30),l=[p];function t(r,c,i,d,y,u){return s(),e("div",null,l)}const D=a(n,[["render",t]]);export{C as __pageData,D as default};
