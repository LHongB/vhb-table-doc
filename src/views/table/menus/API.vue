<template>
  <div>
    <h1>{{ $t('app.aside.nav.menus') }}</h1>
    <p class="tip">将右键菜单注册成全局可复用的</p>
    <vhb-table
      resizable
      :row-config="{isCurrent: true, isHover: true}"
      :column-config="{isCurrent: true}"
      :data="tableData">
      <vhb-column field="name" title="app.api.title.prop" min-width="280" tree-node></vhb-column>
      <vhb-column field="desc" title="app.api.title.desc" min-width="200"></vhb-column>
      <vhb-column field="type" title="app.api.title.type" min-width="140"></vhb-column>
      <vhb-column field="enum" title="app.api.title.enum" min-width="150"></vhb-column>
      <vhb-column field="defVal" title="app.api.title.defVal" min-width="160"></vhb-column>
    </vhb-table>
    <h2>示例</h2>
    <pre>
      <pre-code class="html">{{ demoCodes[0] }}</pre-code>
      <pre-code class="javascript">{{ demoCodes[1] }}</pre-code>
    </pre>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [
        {
          name: 'add(code, callback)',
          desc: '添加一个',
          type: '',
          enum: '',
          defVal: 'code: string, callback: (params, event) => any',
          list: []
        },
        {
          name: 'mixin(options)',
          desc: '添加多个',
          type: '',
          enum: '',
          defVal: 'options: { [code: string]: (params, event) => any }',
          list: []
        },
        {
          name: 'delete(code)',
          desc: '删除',
          type: '',
          enum: '',
          defVal: 'code: string',
          list: []
        }
      ],
      demoCodes: [
        `
        <vhb-table
          border
          :menu-config="tableMenu"
          :data="tableData">
          <vhb-column type="seq" width="60"></vhb-column>
          <vhb-column field="name" title="Name"></vhb-column>
          <vhb-column field="sex" title="sex"></vhb-column>
          <vhb-column field="age" title="Age"></vhb-column>
        </vhb-table>
        `,
        `
        VHBTable.menus.add('exportData', (params, event) => {
          let { $table } = params
          $table.exportData()
        })

        VHBTable.menus.add('insert', (params, event) => {
          let { $table, menu } = params
          // 读取自定义的参数
          $table.insert(menu.record)
        })

        export default {
          data () {
            return {
              tableMenu: {
                body: {
                  options: [
                    [
                      { code: 'exportData', name: '导出.csv' },
                      { code: 'insert', name: '新增', record: { name: '默认名称' } }
                    ]
                  ]
                }
              },
              tableData: [
                { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'Shenzhen' },
                { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
                { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
                { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
              ]
            }
          }
        }
        `
      ]
    }
  }
}
</script>
