(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{358:function(t,s,n){"use strict";n.r(s);var a=n(25),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[n("img",{attrs:{src:"/logo.png",alt:"image"}})]),t._v(" "),n("p",[t._v("Vue-2.x and Vue-next source code compare\n")]),t._v(" "),n("h3",{attrs:{id:"vue-2-x"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vue-2-x"}},[t._v("#")]),t._v(" Vue 2.x")]),t._v(" "),n("p",[n("strong",[t._v("目录结构")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("├─benchmarks             # 存放用于评估性能的代码,用于其他框架对比\n├─dist                   # 项目构建后的文件\n├─scripts                # 与项目构建相关的脚本和配置文件\n├─flow                   # flow的类型声明文件\n├─src                    # 项目源代码\n│    ├─complier          # 与模板编译相关的代码\n│    ├─core              # 通用的、与运行平台无关的运行时代码\n│    │  ├─observe        # 实现变化侦测的代码\n│    │  ├─vdom           # 实现virtual dom的代码\n│    │  ├─instance       # Vue.js实例的构造函数和原型方法\n│    │  ├─global-api     # 全局api的代码\n│    │  └─components     # 内置组件的代码\n│    ├─server            # 与服务端渲染相关的代码\n│    ├─platforms         # 特定运行平台的代码，如weex\n│    ├─sfc               # 单文件组件的解析代码\n│    └─shared            # 项目公用的工具代码\n└─test                   # 项目测试代码\n")])])]),n("blockquote",[n("p",[n("a",{attrs:{href:"https://flow.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("flow"),n("OutboundLink")],1),t._v(": Facebook 团队开发的静态类型检查工具, 用于Vue2.x, Vue3 开始用TS "),n("small",[t._v("(3)")])])]),t._v(" "),n("h4",{attrs:{id:"初始化vue实例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#初始化vue实例"}},[t._v("#")]),t._v(" 初始化VUE实例")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Vue "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./instance/index'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" initGlobalAPI "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./global-api/index'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" isServerRendering "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'core/util/env'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" FunctionalRenderContext "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'core/vdom/create-functional-component'")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("initGlobalAPI")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Vue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n* Object.defineProperty(obj, prop, descriptor)  \n* obj 要在其上定义属性的对象。  \n* prop 要定义或修改的属性的名称。 \n* descriptor 将被定义或修改的属性描述符。   \n*/")]),t._v("\nObject"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("defineProperty")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'$isServer'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" isServerRendering\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nObject"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("defineProperty")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'$ssrContext'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* istanbul ignore next */")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$vnode "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$vnode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ssrContext\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// expose FunctionalRenderContext for ssr runtime helper installation")]),t._v("\nObject"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("defineProperty")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Vue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'FunctionalRenderContext'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  value"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" FunctionalRenderContext\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nVue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("version "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'__VERSION__'")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" Vue\n\n")])])]),n("h4",{attrs:{id:"instance-index-js"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#instance-index-js"}},[t._v("#")]),t._v(" ./instance/index.js")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" initMixin "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./init'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" stateMixin "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./state'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" renderMixin "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./render'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" eventsMixin "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./events'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" lifecycleMixin "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./lifecycle'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" warn "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../util/index'")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Vue")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("options")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("process"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NODE_ENV")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'production'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("warn")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Vue is a constructor and should be called with the `new` keyword'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("_init")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("initMixin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Vue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("stateMixin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Vue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("eventsMixin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Vue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("lifecycleMixin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Vue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("renderMixin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Vue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" Vue\n\n\n")])])]),n("h4",{attrs:{id:"mvvm"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mvvm"}},[t._v("#")]),t._v(" MVVM")]),t._v(" "),n("blockquote",[n("p",[t._v("Model-View-ViewModel "),n("small",[t._v("(4)")])])]),t._v(" "),n("p",[n("img",{attrs:{src:"/mvvm.png",alt:"image"}}),t._v(" "),n("img",{attrs:{src:"/vue.jpg",alt:"image"}})]),t._v(" "),n("ul",[n("li",[t._v("Observer：数据监听器，能够对数据对象的所有属性进行监听，如有变动可拿到最新值并通知订阅者，内部采用Object.defineProperty的getter和setter来实现；")]),t._v(" "),n("li",[t._v("Compile ：指令解析器，它的作用是对每个元素节点的指令进行扫描和解析，根据指令模板替换数据，以及绑定相应的更新函数；")]),t._v(" "),n("li",[t._v("Watcher ：订阅者，作为连接 Observer 和 Compile 的桥梁，能够订阅并收到每个属性变动的通知，执行指令绑定的相应回调函数；")]),t._v(" "),n("li",[t._v("Dep ：消息订阅器，内部维护了一个数组，用来收集订阅者（Watcher），数据变动触发notify 函数，再调用订阅者的 update 方法。")])]),t._v(" "),n("h4",{attrs:{id:"响应式原理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#响应式原理"}},[t._v("#")]),t._v(" 响应式原理")]),t._v(" "),n("p",[n("img",{attrs:{src:"/reactive.jpg",alt:"image"}})]),t._v(" "),n("blockquote",[n("p",[t._v("异步更新队列")])]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" vm "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  el"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#example'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  data"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    message"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'123'")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nvm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("message "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'new message'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 更改数据")]),t._v("\nvm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$el"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("textContent "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'new message'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\nVue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("nextTick")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  vm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$el"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("textContent "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'new message'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n")])])]),n("h4",{attrs:{id:"问题驱动"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#问题驱动"}},[t._v("#")]),t._v(" 问题驱动")]),t._v(" "),n("blockquote",[n("p",[t._v("源码看不动了,怎么办?")])]),t._v(" "),n("hr"),t._v(" "),n("h4",{attrs:{id:"参考"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),n("ol",[n("li",[n("p",[n("a",{attrs:{href:"https://github.com/answershuto/learnVue/blob/master/docs/%E4%BB%8E%E6%BA%90%E7%A0%81%E8%A7%92%E5%BA%A6%E5%86%8D%E7%9C%8B%E6%95%B0%E6%8D%AE%E7%BB%91%E5%AE%9A.MarkDown",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/answershuto/learnVue"),n("OutboundLink")],1)])]),t._v(" "),n("li",[n("p",[n("a",{attrs:{href:"https://nlrx-wjc.github.io/Learn-Vue-Source-Code/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://nlrx-wjc.github.io/Learn-Vue-Source-Code/"),n("OutboundLink")],1)])]),t._v(" "),n("li",[n("p",[n("a",{attrs:{href:"https://www.zhihu.com/question/46397274",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.zhihu.com/question/46397274"),n("OutboundLink")],1)])]),t._v(" "),n("li",[n("p",[n("a",{attrs:{href:"https://medium.com/@gaogezhang/%E5%AD%A6%E7%82%B9%E5%84%BF%E6%8A%80%E6%9C%AF-mvvm%E6%9E%B6%E6%9E%84%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0-ce5a4c731079",target:"_blank",rel:"noopener noreferrer"}},[t._v("what is MVVM"),n("OutboundLink")],1)])]),t._v(" "),n("li",[n("p",[n("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/reactivity.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档： 深入响应式原理"),n("OutboundLink")],1)])]),t._v(" "),n("li",[n("p",[n("a",{attrs:{href:"https://ustbhuangyi.github.io/vue-analysis/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue.js 技术揭秘"),n("OutboundLink")],1)])])])])}),[],!1,null,null,null);s.default=e.exports}}]);