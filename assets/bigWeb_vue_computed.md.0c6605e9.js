import{_ as s,o as a,c as n,S as l}from"./chunks/framework.59c3ae61.js";const u=JSON.parse('{"title":"computed与watch","description":"","frontmatter":{"sidebar":{"title":"computed与watch","step":6},"isTimeLine":true,"title":"computed与watch","date":"2020-04-14T00:00:00.000Z","tags":["大前端","vue"],"categories":["大前端"]},"headers":[],"relativePath":"bigWeb/vue/computed.md","filePath":"bigWeb/vue/computed.md","lastUpdated":1692784587000}'),p={name:"bigWeb/vue/computed.md"},o=l(`<h1 id="computed-与-watch" tabindex="-1">computed 与 watch <a class="header-anchor" href="#computed-与-watch" aria-label="Permalink to &quot;computed 与 watch&quot;">​</a></h1><ul><li><code>computed</code> 是计算属性，依赖其他属性计算值，并且 computed 的值有缓存，只有当计算值变化才会返回内容。</li><li><code>watch</code> 监听到值的变化就会执行回调，在回调中可以进行一些逻辑操作。</li></ul><h2 id="使用场景" tabindex="-1">使用场景 <a class="header-anchor" href="#使用场景" aria-label="Permalink to &quot;使用场景&quot;">​</a></h2><ul><li>需要依赖别的属性来动态获得值的时候可以使用 <code>computed</code></li><li>对于监听到值的变化需要做一些复杂业务逻辑的情况可以使用 <code>watch</code></li></ul><h2 id="对象写法" tabindex="-1">对象写法 <a class="header-anchor" href="#对象写法" aria-label="Permalink to &quot;对象写法&quot;">​</a></h2><h3 id="computed" tabindex="-1">computed <a class="header-anchor" href="#computed" aria-label="Permalink to &quot;computed&quot;">​</a></h3><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#C792EA;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">data</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            num</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">computed</span><span style="color:#89DDFF;">:{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#FFCB6B;">doubleNum</span><span style="color:#89DDFF;">:{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#82AAFF;">get</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">num</span><span style="color:#89DDFF;">*</span><span style="color:#F78C6C;">2</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#82AAFF;">set</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">v</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">num</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">~~</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">v</span><span style="color:#89DDFF;">/</span><span style="color:#F78C6C;">2</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h3 id="watch" tabindex="-1">watch <a class="header-anchor" href="#watch" aria-label="Permalink to &quot;watch&quot;">​</a></h3><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#C792EA;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">data</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            num</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">watch</span><span style="color:#89DDFF;">:{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#FFCB6B;">num</span><span style="color:#89DDFF;">:{</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;font-style:italic;">// 深度遍历</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#FFCB6B;">deep</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;font-style:italic;">// 立即触发</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#FFCB6B;">immediate</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;font-style:italic;">// 执行的函数</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#82AAFF;">handler</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">val</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">oldVal</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">v</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">oldVal</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div>`,9),e=[o];function t(c,r,F,y,i,D){return a(),n("div",null,e)}const h=s(p,[["render",t]]);export{u as __pageData,h as default};
