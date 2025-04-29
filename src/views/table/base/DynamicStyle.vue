<template>
  <div>
    <p class="tip">
      行的动态样色、单元格动态样式，表头的动态样式、表尾的动态样式、可以通过设置 <table-api-link prop="cell-style"/>、<table-api-link prop="header-cell-style"/>、<table-api-link prop="row-style"/> ...等参数<br>
      <span class="red">（注：当自定义样式之后可能会覆盖表格的样式，比如选中行..等，记得自行处理好相关样式）</span>
    </p>

    <vhb-table
      border
      :header-cell-style="headerCellStyle"
      :cell-style="cellStyle"
      :data="tableData">
      <vhb-column type="seq" width="60"></vhb-column>
      <vhb-column field="name" title="Name"></vhb-column>
      <vhb-column field="sex" title="Sex"></vhb-column>
      <vhb-column field="age" title="Age"></vhb-column>
      <vhb-column field="attr1" title="Attr1"></vhb-column>
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
        { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
      ],
      demoCodes: [
        `
        <vhb-table
          border
          :header-cell-style="headerCellStyle"
          :cell-style="cellStyle"
          :data="tableData">
          <vhb-column type="seq" width="60"></vhb-column>
          <vhb-column field="name" title="Name"></vhb-column>
          <vhb-column field="sex" title="Sex"></vhb-column>
          <vhb-column field="age" title="Age"></vhb-column>
          <vhb-column field="attr1" title="Attr1"></vhb-column>
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
                { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
              ]
            }
          },
          methods: {
            headerCellStyle ({ column, columnIndex }) {
              if (column.property === 'name') {
                return {
                  backgroundColor: '#f60',
                  color: '#ffffff'
                }
              }
            },
            cellStyle ({ row, rowIndex, column }) {
              if (column.property === 'sex') {
                if (row.sex === 'Women') {
                  return {
                    backgroundColor: '#187',
                    color: '#ffffff'
                  }
                } else if (row.age === 24) {
                  return {
                    backgroundColor: '#2db7f5',
                    color: '#000'
                  }
                }
              }
              if ([2, 3, 5].includes(rowIndex)) {
                return {
                  backgroundColor: 'red',
                  color: '#ffffff'
                }
              }
            }
          }
        }
        `
      ]
    }
  },
  methods: {
    headerCellStyle ({ column }) {
      if (column.property === 'name') {
        return {
          backgroundColor: '#f60',
          color: '#ffffff'
        }
      }
    },
    cellStyle ({ row, rowIndex, column }) {
      if (column.property === 'sex') {
        if (row.sex === 'Women') {
          return {
            backgroundColor: '#187',
            color: '#ffffff'
          }
        } else if (row.age === 24) {
          return {
            backgroundColor: '#2db7f5',
            color: '#000'
          }
        }
      }
      if ([2, 3, 5].includes(rowIndex)) {
        return {
          backgroundColor: 'red',
          color: '#ffffff'
        }
      }
    }
  }
}
</script>
