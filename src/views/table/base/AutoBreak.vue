<template>
  <div>
    <p class="tip">单元格超出指定宽度自动换行，通过设置 <table-api-link prop="scroll-y"/>="{enabled: false} 关闭虚拟滚动，则支持自动换行</p>

    <vhb-table
      :data="tableData"
      :scroll-y="{enabled: false}">
      <vhb-column type="seq" width="60"></vhb-column>
      <vhb-column field="name" title="Name"></vhb-column>
      <vhb-column field="role" title="Role"></vhb-column>
      <vhb-column field="age" title="Age"></vhb-column>
    </vhb-table>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <pre-code class="xml">{{ demoCodes[0] }}</pre-code>
      <pre-code class="javascript">{{ demoCodes[1] }}</pre-code>
    </pre>

  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [
        { id: 10001, name: 'Test1', role: 'Develop Develop Develop Develop Develop Develop Develop Develop', sex: 'Man', age: 28, address: 'test abc' },
        { id: 10002, name: 'Test2 Test2 Test2 Test2 Test2 Test2 Test2 Test2 Test2 Test2 Test2 Test2 Test2 Test2 Test2 Test2 Test2 Test2 Test2 Test2', role: 'Designer', sex: 'Women', age: 22, address: 'Guangzhou' },
        { id: 10003, name: 'Test3', role: 'PM PM PM PM PM PM PM PM PM PM PM PM PM PM PM PM PM PM', sex: 'Man', age: 32, address: 'Shanghai' },
        { id: 10004, name: 'Test4', role: 'Test', sex: 'Women', age: 24, address: 'Shanghai' }
      ],
      demoCodes: [
        `
        <vhb-table
          :data="tableData"
          :scroll-y="{enabled: false}">
          <vhb-column type="seq" width="60"></vhb-column>
          <vhb-column field="name" title="Name"></vhb-column>
          <vhb-column field="role" title="Role"></vhb-column>
          <vhb-column field="age" title="Age"></vhb-column>
        </vhb-table>
        `,
        `
        export default {
          data () {
            return {
              tableData: [
                { id: 10001, name: 'Test1', role: 'Develop Develop Develop Develop Develop Develop Develop Develop', sex: 'Man', age: 28, address: 'test abc' },
                { id: 10002, name: 'Test2 Test2 Test2 Test2 Test2 Test2 Test2 Test2 Test2 Test2 Test2 Test2 Test2 Test2 Test2 Test2 Test2 Test2 Test2 Test2', role: 'Designer', sex: 'Women', age: 22, address: 'Guangzhou' },
                { id: 10003, name: 'Test3', role: 'PM PM PM PM PM PM PM PM PM PM PM PM PM PM PM PM PM PM', sex: 'Man', age: 32, address: 'Shanghai' },
                { id: 10004, name: 'Test4', role: 'Test', sex: 'Women', age: 24, address: 'Shanghai' }
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
