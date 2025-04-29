import Vue from 'vue'
import i18n from '@/i18n'

import VHBTable from 'vhb-table'

import './renderer'
import './formatter'

// 设置默认参数
VHBTable.setup({
  translate: (key, args) => key && key.indexOf('app.') > -1 ? i18n.t(key, args) as string : key, // 自动翻译以 app. 开头的键值
  i18n: (key, args) => i18n.t(key, args) as string
})

Vue.use(VHBTable)
