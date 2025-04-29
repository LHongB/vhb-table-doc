<template>
  <div>
    <p class="tip">
      导入/导出文件类型：通过 <table-api-link prop="types"/> 设置文件类型，例如：限制只允许使用 CSV 格式<br>
    </p>

    <vhb-toolbar>
      <template #buttons>
        <vhb-button @click="clearDataEvent">清空数据</vhb-button>
        <vhb-button @click="exportDataEvent">导出数据</vhb-button>
        <vhb-button @click="importDataEvent">导入数据</vhb-button>
      </template>
    </vhb-toolbar>

    <vhb-table
      border
      ref="xTable"
      height="400"
      :row-config="{isHover: true}"
      :import-config="{}"
      :export-config="{}"
      :data="tableData">
      <vhb-column type="seq" width="60"></vhb-column>
      <vhb-column field="name" title="Name"></vhb-column>
      <vhb-column field="sex" title="Sex"></vhb-column>
      <vhb-column field="age" title="Age" sortable></vhb-column>
      <vhb-column field="address" title="Address" show-overflow></vhb-column>
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
        { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
        { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
        { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
        { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 36, address: 'Guangzhou' },
        { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women', age: 24, address: 'Shanghai' },
        { id: 10006, name: 'Test6', role: 'Designer', sex: 'Man', age: 34, address: 'test abc' }
      ],
      demoCodes: [
        `
        <vhb-toolbar>
          <template #buttons>
            <vhb-button @click="clearDataEvent">清空数据</vhb-button>
            <vhb-button @click="exportDataEvent">导出数据</vhb-button>
            <vhb-button @click="importDataEvent">导入数据</vhb-button>
          </template>
        </vhb-toolbar>

        <vhb-table
          border
          ref="xTable"
          height="400"
          :row-config="{isHover: true}"
          :import-config="{}"
          :export-config="{}"
          :data="tableData">
          <vhb-column type="seq" width="60"></vhb-column>
          <vhb-column field="name" title="Name"></vhb-column>
          <vhb-column field="sex" title="Sex"></vhb-column>
          <vhb-column field="age" title="Age" sortable></vhb-column>
          <vhb-column field="address" title="Address" show-overflow></vhb-column>
        </vhb-table>
        `,
        `
        export default {
          data () {
            return {
              tableData: [
                { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
                { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
                { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
                { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 36, address: 'Guangzhou' },
                { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women', age: 24, address: 'Shanghai' },
                { id: 10006, name: 'Test6', role: 'Designer', sex: 'Man', age: 34, address: 'test abc' }
              ]
            }
          },
          methods: {
            clearDataEvent () {
              this.tableData = []
            },
            exportDataEvent () {
              this.$refs.xTable.openExport({ types: ['csv'] })
            },
            importDataEvent () {
              this.$refs.xTable.importData({ types: ['csv'] })
            }
          }
        }
        `
      ]
    }
  },
  methods: {
    clearDataEvent () {
      this.tableData = []
    },
    exportDataEvent () {
      this.$refs.xTable.openExport({ types: ['csv'] })
    },
    importDataEvent () {
      this.$refs.xTable.importData({ types: ['csv'] })
    }
  }
}
</script>
