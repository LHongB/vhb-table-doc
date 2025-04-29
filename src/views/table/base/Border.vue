<template>
  <div>
    <p class="tip">通过设置 <table-api-link prop="border"/>=false|default 默认显示边框</p>

    <vhb-table
      show-footer
      height="200"
      :footer-method="footerMethod"
      :data="tableData">
      <vhb-column type="seq" width="60"></vhb-column>
      <vhb-column field="name" title="Name"></vhb-column>
      <vhb-column field="sex" title="Sex"></vhb-column>
      <vhb-column field="age" title="Age"></vhb-column>
      <vhb-column field="address" title="Address" show-overflow></vhb-column>
    </vhb-table>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <pre-code class="xml">{{ demoCodes[0] }}</pre-code>
      <pre-code class="javascript">{{ demoCodes[1] }}</pre-code>
    </pre>

    <p class="tip">通过设置 <table-api-link prop="border"/>=true|full 显示完整边框</p>

    <vhb-table
      border
      show-footer
      height="200"
      :footer-method="footerMethod"
      :data="tableData">
      <vhb-column type="seq" width="60"></vhb-column>
      <vhb-column field="name" title="Name"></vhb-column>
      <vhb-column field="sex" title="Sex"></vhb-column>
      <vhb-column field="age" title="Age"></vhb-column>
      <vhb-column field="address" title="Address" show-overflow></vhb-column>
    </vhb-table>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <pre-code class="xml">{{ demoCodes[2] }}</pre-code>
      <pre-code class="javascript">{{ demoCodes[3] }}</pre-code>
    </pre>

    <p class="tip">通过设置 <table-api-link prop="border"/>=outer 显示外边框</p>

    <vhb-table
      show-footer
      height="200"
      border="outer"
      :footer-method="footerMethod"
      :data="tableData">
      <vhb-column type="seq" width="60"></vhb-column>
      <vhb-column field="name" title="Name"></vhb-column>
      <vhb-column field="sex" title="Sex"></vhb-column>
      <vhb-column field="age" title="Age"></vhb-column>
      <vhb-column field="address" title="Address" show-overflow></vhb-column>
    </vhb-table>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <pre-code class="xml">{{ demoCodes[4] }}</pre-code>
      <pre-code class="javascript">{{ demoCodes[5] }}</pre-code>
    </pre>

    <p class="tip">通过设置 <table-api-link prop="border"/>=inner 显示内边框</p>

    <vhb-table
      show-footer
      height="200"
      border="inner"
      :footer-method="footerMethod"
      :data="tableData">
      <vhb-column type="seq" width="60"></vhb-column>
      <vhb-column field="name" title="Name"></vhb-column>
      <vhb-column field="sex" title="Sex"></vhb-column>
      <vhb-column field="age" title="Age"></vhb-column>
      <vhb-column field="address" title="Address" show-overflow></vhb-column>
    </vhb-table>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <pre-code class="xml">{{ demoCodes[6] }}</pre-code>
      <pre-code class="javascript">{{ demoCodes[7] }}</pre-code>
    </pre>

    <p class="tip">通过设置 <table-api-link prop="border"/>=none 去掉所有边框</p>

    <vhb-table
      show-footer
      height="200"
      border="none"
      :footer-method="footerMethod"
      :data="tableData">
      <vhb-column type="seq" width="60"></vhb-column>
      <vhb-column field="name" title="Name"></vhb-column>
      <vhb-column field="sex" title="Sex"></vhb-column>
      <vhb-column field="age" title="Age"></vhb-column>
      <vhb-column field="address" title="Address" show-overflow></vhb-column>
    </vhb-table>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <pre-code class="xml">{{ demoCodes[8] }}</pre-code>
      <pre-code class="javascript">{{ demoCodes[9] }}</pre-code>
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
          show-footer
          height="200"
          :footer-method="footerMethod"
          :data="tableData">
          <vhb-column type="seq" width="60"></vhb-column>
          <vhb-column field="name" title="Name"></vhb-column>
          <vhb-column field="sex" title="Sex"></vhb-column>
          <vhb-column field="age" title="Age"></vhb-column>
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
            sumNum (list, field) {
              let count = 0
              list.forEach(item => {
                count += Number(item[field])
              })
              return count
            },
            footerMethod ({ columns, data }) {
              const sums = []
              columns.forEach((column, columnIndex) => {
                if (columnIndex === 0) {
                  sums.push('和值')
                } else {
                  sums.push(this.sumNum(data, column.property))
                }
              })
              // 返回一个二维数组的表尾合计
              return [sums]
            }
          }
        }
        `,
        `
        <vhb-table
          border
          show-footer
          height="200"
          :footer-method="footerMethod"
          :data="tableData">
          <vhb-column type="seq" width="60"></vhb-column>
          <vhb-column field="name" title="Name"></vhb-column>
          <vhb-column field="sex" title="Sex"></vhb-column>
          <vhb-column field="age" title="Age"></vhb-column>
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
            sumNum (list, field) {
              let count = 0
              list.forEach(item => {
                count += Number(item[field])
              })
              return count
            },
            footerMethod ({ columns, data }) {
              const sums = []
              columns.forEach((column, columnIndex) => {
                if (columnIndex === 0) {
                  sums.push('和值')
                } else {
                  sums.push(this.sumNum(data, column.property))
                }
              })
              // 返回一个二维数组的表尾合计
              return [sums]
            }
          }
        }
        `,
        `
        <vhb-table
          show-footer
          height="200"
          border="outer"
          :footer-method="footerMethod"
          :data="tableData">
          <vhb-column type="seq" width="60"></vhb-column>
          <vhb-column field="name" title="Name"></vhb-column>
          <vhb-column field="sex" title="Sex"></vhb-column>
          <vhb-column field="age" title="Age"></vhb-column>
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
            sumNum (list, field) {
              let count = 0
              list.forEach(item => {
                count += Number(item[field])
              })
              return count
            },
            footerMethod ({ columns, data }) {
              const sums = []
              columns.forEach((column, columnIndex) => {
                if (columnIndex === 0) {
                  sums.push('和值')
                } else {
                  sums.push(this.sumNum(data, column.property))
                }
              })
              // 返回一个二维数组的表尾合计
              return [sums]
            }
          }
        }
        `,
        `
        <vhb-table
          show-footer
          height="200"
          border="inner"
          :footer-method="footerMethod"
          :data="tableData">
          <vhb-column type="seq" width="60"></vhb-column>
          <vhb-column field="name" title="Name"></vhb-column>
          <vhb-column field="sex" title="Sex"></vhb-column>
          <vhb-column field="age" title="Age"></vhb-column>
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
            sumNum (list, field) {
              let count = 0
              list.forEach(item => {
                count += Number(item[field])
              })
              return count
            },
            footerMethod ({ columns, data }) {
              const sums = []
              columns.forEach((column, columnIndex) => {
                if (columnIndex === 0) {
                  sums.push('和值')
                } else {
                  sums.push(this.sumNum(data, column.property))
                }
              })
              // 返回一个二维数组的表尾合计
              return [sums]
            }
          }
        }
        `,
        `
        <vhb-table
          show-footer
          height="200"
          border="none"
          :footer-method="footerMethod"
          :data="tableData">
          <vhb-column type="seq" width="60"></vhb-column>
          <vhb-column field="name" title="Name"></vhb-column>
          <vhb-column field="sex" title="Sex"></vhb-column>
          <vhb-column field="age" title="Age"></vhb-column>
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
            sumNum (list, field) {
              let count = 0
              list.forEach(item => {
                count += Number(item[field])
              })
              return count
            },
            footerMethod ({ columns, data }) {
              const sums = []
              columns.forEach((column, columnIndex) => {
                if (columnIndex === 0) {
                  sums.push('和值')
                } else {
                  sums.push(this.sumNum(data, column.property))
                }
              })
              // 返回一个二维数组的表尾合计
              return [sums]
            }
          }
        }
        `
      ]
    }
  },
  methods: {
    sumNum (list, field) {
      let count = 0
      list.forEach(item => {
        count += Number(item[field])
      })
      return count
    },
    footerMethod ({ columns, data }) {
      const sums = []
      columns.forEach((column, columnIndex) => {
        if (columnIndex === 0) {
          sums.push('和值')
        } else {
          sums.push(this.sumNum(data, column.property))
        }
      })
      // 返回一个二维数组的表尾合计
      return [sums]
    }
  }
}
</script>
