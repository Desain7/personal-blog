import{_ as s,o as a,c as n,S as l}from"./chunks/framework.59c3ae61.js";const C=JSON.parse('{"title":"extendAP","description":"","frontmatter":{"sidebar":{"title":"extend API","step":4},"isTimeLine":true,"title":"extendAP","date":"2020-04-14T00:00:00.000Z","tags":["大前端","vue"],"categories":["大前端"]},"headers":[],"relativePath":"bigWeb/vue/extend.md","filePath":"bigWeb/vue/extend.md","lastUpdated":1692784587000}'),p={name:"bigWeb/vue/extend.md"},o=l(`<h1 id="extend-api" tabindex="-1">extend API <a class="header-anchor" href="#extend-api" aria-label="Permalink to &quot;extend API&quot;">​</a></h1><p>扩展组件生成一个构造器，通常会与 $mount 一起使用</p><h2 id="简单使用" tabindex="-1">简单使用 <a class="header-anchor" href="#简单使用" aria-label="Permalink to &quot;简单使用&quot;">​</a></h2><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">app</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> Component </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Vue</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">extend</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">&lt;div&gt;{{param1}}&lt;/div&gt;</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                param1</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">666</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 挂载到 #app 上</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Component</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">$mount</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#app</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="扩展现有组件" tabindex="-1">扩展现有组件 <a class="header-anchor" href="#扩展现有组件" aria-label="Permalink to &quot;扩展现有组件&quot;">​</a></h2><p>接着上面的示例</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> SuperComponent </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Vue</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">exte</span><span style="color:#A6ACCD;">   (Component)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">SuperComponent</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">created</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 挂载到 #app 上</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">SuperComponent</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">$mount</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#app</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div>`,7),e=[o];function t(c,r,D,F,y,i){return a(),n("div",null,e)}const d=s(p,[["render",t]]);export{C as __pageData,d as default};
