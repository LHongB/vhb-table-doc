<template>
  <div>
    <h2>{{ $t('app.aside.nav.use') }}</h2>
    <p class="tip">
      如果您使用了 webpack，借助插件 <a class="link" href="https://www.npmjs.com/package/babel-plugin-import" target="_blank">babel-plugin-import</a> 可以实现按需加载模块，减少文件体积。
    </p>
    <pre>
      <pre-code class="shell">
        npm install babel-plugin-import -D
      </pre-code>
      <div>修改文件 .babelrc 或 babel.config.js</div>
      <pre-code class="javascript">
        {
          "plugins": [
            [
              "import",
              {
                "libraryName": "vhb-table",
                "style": true // 样式是否也按需加载
              }
            ]
          ]
        }
      </pre-code>
    </pre>
    <p class="tip">最后这样按需引入模块，就可以减小体积了</p>
    <pre>
      <pre-code class="javascript">
        import Vue from 'vue'
        import HBUtils from 'hb-js-utils'
        import {
          // 核心
          VHBTable,

          // 功能模块
          // Icon,
          // Filter,
          // Menu,
          // Edit,
          // Export,
          // Keyboard,
          // Validator,
          Header,
          // Footer,

          // 可选组件
          Column,
          // Colgroup,
          // Grid,
          // Toolbar,
          // Pager,
          // Checkbox,
          // CheckboxGroup,
          // Radio,
          // RadioGroup,
          // RadioButton,
          // Input,
          // Textarea,
          // Button,
          // Modal,
          // Tooltip,
          // Form,
          // FormItem,
          // FormGather,
          // Select,
          // Optgroup,
          // Option,
          // Switch,
          // List,
          // Pulldown,

          // 表格
          Table
        } from 'vhb-table'
        import zhCN from 'vhb-table/lib/locale/lang/zh-CN'

        // 按需加载的方式默认是不带国际化的，自定义国际化需要自行解析占位符 '{0}'，例如：
        VHBTable.setup({
          i18n: (key, args) => HBUtils.toFormatString(HBUtils.get(zhCN, key), args)
        })

        // 表格功能
        Vue.use(Header)
        // .use(Footer)
        // .use(Icon)
        // .use(Filter)
        // .use(Edit)
        // .use(Menu)
        // .use(Export)
        // .use(Keyboard)
        // .use(Validator)

        // 可选组件
        .use(Column)
        // .use(Colgroup)
        // .use(Grid)
        // .use(Toolbar)
        // .use(Pager)
        // .use(Checkbox)
        // .use(CheckboxGroup)
        // .use(Radio)
        // .use(RadioGroup)
        // .use(RadioButton)
        // .use(Input)
        // .use(Textarea)
        // .use(Button)
        // .use(Modal)
        // .use(Tooltip)
        // .use(Form)
        // .use(FormItem)
        // .use(FormGather)
        // .use(Select)
        // .use(Optgroup)
        // .use(Option)
        // .use(Switch)
        // .use(List)
        // .use(Pulldown)

        // 安装表格
        .use(Table)

        // 给 vue 实例挂载内部对象，例如：
        // Vue.prototype.$XModal = VHBTable.modal
        // Vue.prototype.$XPrint = VHBTable.print
        // Vue.prototype.$XSaveFile = VHBTable.saveFile
        // Vue.prototype.$XReadFile = VHBTable.readFile
      </pre-code>
    </pre>
  </div>
</template>
