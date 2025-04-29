<template>
  <div>
    <p class="tip">
      通过调用 <table-api-link prop="exportData"/> 函数指定 type='csv' 可以直接将表格导出为 CSV/HTML/XML/TXT 格式的文件；<br>
      默认会排除 field 为空和 type 相关的功能列（除 seq、checkbox、radio 之外），可以通过自定义 <table-api-link prop="columnFilterMethod"/> 列过滤方法<br>
      对于 csv 等特殊类型，可以通过设置 <table-column-api-link prop="cell-type"/> 将数值类型转为字符串类型<br>
      如果是服务端导出，通过设置 <table-api-link prop="remote"/> 和 <table-api-link prop="exportMethod"/> 开启服务端自定义导出<br>
      <span class="red">（注：树结构和虚拟滚动只允许导出数据源，前端导出的数据量有限，建议使用后端导出）</span>
      <span class="red">（注：导出多级表头合并列，需要将导出格式设置为 html/xlsx 格式）</span>
    </p>

    <vhb-toolbar>
      <template #buttons>
        <vhb-button @click="showOverflow1 = !showOverflow1">单元格是否换行</vhb-button>
        <vhb-button @click="exportDataEvent">默认导出</vhb-button>
        <vhb-button @click="exportSelectEvent">导出选中</vhb-button>
        <vhb-button @click="openExportEvent">高级导出</vhb-button>
      </template>
    </vhb-toolbar>

    <vhb-table
      ref="xTable1"
      height="300"
      :row-config="{isHover: true}"
      :show-overflow="showOverflow1"
      :export-config="{}"
      :data="tableData1">
      <vhb-column type="checkbox" width="60"></vhb-column>
      <vhb-column type="seq" width="60"></vhb-column>
      <vhb-colgroup title="Group1">
        <vhb-column field="name" title="Name"></vhb-column>
      </vhb-colgroup>
      <vhb-colgroup title="Group2">
        <vhb-column field="attr1" title="自动转换"></vhb-column>
        <vhb-column field="amount" title="导出数值" cell-type="number"></vhb-column>
        <vhb-column field="num" title="导出字符串" cell-type="string" sortable></vhb-column>
      </vhb-colgroup>
    </vhb-table>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <pre-code class="xml">{{ demoCodes[0] }}</pre-code>
      <pre-code class="javascript">{{ demoCodes[1] }}</pre-code>
    </pre>

    <p class="tip">配置 <table-api-link prop="columnFilterMethod"/> 参数过滤指定列</p>

    <vhb-toolbar>
      <template #buttons>
        <vhb-button @click="exportDataEvent2">导出指定列 [name,sex]</vhb-button>
      </template>
    </vhb-toolbar>

    <vhb-table
      ref="xTable2"
      height="300"
      :row-config="{isHover: true}"
      :data="tableData">
      <vhb-column type="seq" width="60"></vhb-column>
      <vhb-column field="name" title="Name"></vhb-column>
      <vhb-column field="sex" title="Sex"></vhb-column>
      <vhb-column field="age" title="Age" sortable></vhb-column>
      <vhb-column field="address" title="Address" show-overflow></vhb-column>
    </vhb-table>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <pre-code class="xml">{{ demoCodes[2] }}</pre-code>
      <pre-code class="javascript">{{ demoCodes[3] }}</pre-code>
    </pre>

    <p class="tip">配置 <table-api-link prop="dataFilterMethod"/> 参数过滤指定行</p>

    <vhb-toolbar>
      <template #buttons>
        <vhb-button @click="exportDataEvent3">导出 sex=1 的行</vhb-button>
      </template>
    </vhb-toolbar>

    <vhb-table
      show-footer
      height="300"
      ref="xTable3"
      :row-config="{isHover: true}"
      :footer-method="footerMethod"
      :data="tableData">
      <vhb-column type="seq" width="60"></vhb-column>
      <vhb-column field="name" title="Name"></vhb-column>
      <vhb-column field="sex" title="Sex" :formatter="formatterSex"></vhb-column>
      <vhb-column field="age" title="Age" sortable></vhb-column>
      <vhb-column field="address" title="Address" show-overflow></vhb-column>
    </vhb-table>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <pre-code class="xml">{{ demoCodes[4] }}</pre-code>
      <pre-code class="javascript">{{ demoCodes[5] }}</pre-code>
    </pre>

    <p class="tip">不导出表头，指定文件名，导出源数据,格式化数据</p>

    <vhb-toolbar>
      <template #buttons>
        <vhb-button @click="exportCurrDataEvent4">导出当前页</vhb-button>
        <vhb-button @click="exportDataEvent4">自定义数据导出</vhb-button>
        <vhb-button @click="exportAllDataEvent4">全量导出后台数据</vhb-button>
      </template>
    </vhb-toolbar>

    <vhb-table
      border
      show-footer
      ref="xTable4"
      height="300"
      :row-config="{isHover: true}"
      :loading="loading"
      :footer-method="footerMethod"
      :data="tableData4">
      <vhb-column type="seq" width="60"></vhb-column>
      <vhb-column field="name" title="Name"></vhb-column>
      <vhb-column field="sex" title="Sex" :formatter="formatterSex"></vhb-column>
      <vhb-column field="age" title="Age"></vhb-column>
      <vhb-column type="html" field="html1" title="Html片段"></vhb-column>
    </vhb-table>

    <vhb-pager
      :loading="loading"
      :current-page="tablePage4.currentPage"
      :page-size="tablePage4.pageSize"
      :total="tablePage4.totalResult"
      :layouts="['PrevPage', 'JumpNumber', 'NextPage', 'FullJump', 'Sizes', 'Total']"
      @page-change="handlePageChange">
    </vhb-pager>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <pre-code class="xml">{{ demoCodes[6] }}</pre-code>
      <pre-code class="javascript">{{ demoCodes[7] }}</pre-code>
    </pre>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      tableData: [
        { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
        { id: 10002, name: 'Test2', nickname: 'T2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
        { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
        { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc' },
        { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' },
        { id: 10006, name: 'Test6', nickname: 'T6', role: 'Designer', sex: 'Women', age: 21, address: 'test abc' },
        { id: 10007, name: 'Test7', nickname: 'T7', role: 'Test', sex: 'Man', age: 29, address: 'test abc' },
        { id: 10008, name: 'Test8', nickname: 'T8', role: 'Develop', sex: 'Man', age: 35, address: 'test abc' }
      ],
      showOverflow1: false,
      tableData1: [
        { name: 'test1', attr1: 'test1', amount: '12953.6985', num: 1259326 },
        { name: 'tesfg t1', attr1: '154645623546345', amount: '45646464888888654654', num: 4564566456645 },
        { name: 'sdf sgfd fdg', attr1: 1231242, amount: '4564564545646.6985', num: 0 },
        { name: 'test1', attr1: true, amount: '12953.6985', num: 54646646 },
        { name: 'aaa\n换行bb\n换行gg', attr1: '0', amount: '0', num: '645645645665567645234326456' },
        { name: 'te st1', attr1: false, amount: '1231231213123.456', num: '45645645645646456' },
        { name: 'tesf \n换行g t6', attr1: 'test2', amount: '99999.08', num: 9999.88 }
      ],
      tableData4: [],
      tablePage4: {
        currentPage: 1,
        pageSize: 10,
        totalResult: 0
      },
      demoCodes: [
        `
        <vhb-toolbar>
          <template #buttons>
            <vhb-button @click="showOverflow1 = !showOverflow1">单元格是否换行</vhb-button>
            <vhb-button @click="exportDataEvent">默认导出</vhb-button>
            <vhb-button @click="exportSelectEvent">导出选中</vhb-button>
            <vhb-button @click="openExportEvent">高级导出</vhb-button>
          </template>
        </vhb-toolbar>

        <vhb-table
          ref="xTable1"
          height="300"
          :row-config="{isHover: true}"
          :show-overflow="showOverflow1"
          :export-config="{}"
          :data="tableData1">
          <vhb-column type="checkbox" width="60"></vhb-column>
          <vhb-column type="seq" width="60"></vhb-column>
          <vhb-colgroup title="Group1">
            <vhb-column field="name" title="Name"></vhb-column>
          </vhb-colgroup>
          <vhb-colgroup title="Group2">
            <vhb-column field="attr1" title="自动转换"></vhb-column>
            <vhb-column field="amount" title="导出数值" cell-type="number"></vhb-column>
            <vhb-column field="num" title="导出字符串" cell-type="string" sortable></vhb-column>
          </vhb-colgroup>
        </vhb-table>
        `,
        `
        export default {
          data () {
            return {
              showOverflow1: false,
              tableData1: [
                { name: 'test1', attr1: 'test1', amount: '12953.6985', num: 1259326 },
                { name: 'tesfg t1', attr1: '154645623546345', amount: '45646464888888654654', num: 4564566456645 },
                { name: 'sdf sgfd fdg', attr1: 1231242, amount: '4564564545646.6985', num: 0 },
                { name: 'test1', attr1: true, amount: '12953.6985', num: 54646646 },
                { name: 'aaa\n换行bb\n换行gg', attr1: '0', amount: '0', num: '645645645665567645234326456' },
                { name: 'te st1', attr1: false, amount: '1231231213123.456', num: '45645645645646456' },
                { name: 'tesf \n换行g t6', attr1: 'test2', amount: '99999.08', num: 9999.88 }
              ]
            }
          },
          methods: {
            exportDataEvent () {
              this.$refs.xTable1.exportData({ type: 'csv' })
            },
            exportSelectEvent () {
              this.$refs.xTable1.exportData({
                data: this.$refs.xTable1.getCheckboxRecords()
              })
            },
            openExportEvent () {
              this.$refs.xTable1.openExport()
            }
          }
        }
        `,
        `
        <vhb-toolbar>
          <template #buttons>
            <vhb-button @click="exportDataEvent2">导出指定列 [name,sex]</vhb-button>
          </template>
        </vhb-toolbar>

        <vhb-table
          ref="xTable2"
          height="300"
          :row-config="{isHover: true}"
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
                { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, address: 'test abc' },
                { id: 10002, name: 'Test2', role: 'Test', sex: '1', age: 22, address: 'Guangzhou' },
                { id: 10003, name: 'Test3', role: 'PM', sex: '0', age: 32, address: 'Shanghai' },
                { id: 10004, name: 'Test4', role: 'Designer', sex: '1', age: 23, address: 'test abc' },
                { id: 10005, name: 'Test5', role: 'Develop', sex: '1', age: 30, address: 'Shanghai' },
                { id: 10006, name: 'Test6', role: 'Designer', sex: '1', age: 21, address: 'test abc' }
              ]
            }
          },
          methods: {
            exportDataEvent2 () {
              this.$refs.xTable2.exportData({
                type: 'csv',
                columnFilterMethod ({ column }) {
                  return ['name', 'sex'].includes(column.property)
                }
              })
            }
          }
        }
        `,
        `
        <vhb-toolbar>
          <template #buttons>
            <vhb-button @click="exportDataEvent3">导出指定第10-20行</vhb-button>
          </template>
        </vhb-toolbar>

        <vhb-table
          show-footer
          height="300"
          ref="xTable3"
          :row-config="{isHover: true}"
          :footer-method="footerMethod"
          :data="tableData">
          <vhb-column type="seq" width="60"></vhb-column>
          <vhb-column field="name" title="Name"></vhb-column>
          <vhb-column field="sex" title="Sex" :formatter="formatterSex"></vhb-column>
          <vhb-column field="age" title="Age" sortable></vhb-column>
          <vhb-column field="address" title="Address" show-overflow></vhb-column>
        </vhb-table>
        `,
        `
        export default {
          data () {
            return {
              tableData: [
                { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, address: 'test abc' },
                { id: 10002, name: 'Test2', role: 'Test', sex: '1', age: 22, address: 'Guangzhou' },
                { id: 10003, name: 'Test3', role: 'PM', sex: '0', age: 32, address: 'Shanghai' },
                { id: 10004, name: 'Test4', role: 'Designer', sex: '1', age: 23, address: 'test abc' },
                { id: 10005, name: 'Test5', role: 'Develop', sex: '1', age: 30, address: 'Shanghai' },
                { id: 10006, name: 'Test6', role: 'Designer', sex: '1', age: 21, address: 'test abc' }
              ]
            }
          },
          methods: {
            formatterSex ({ cellValue }) {
              if (cellValue === '1') {
                return '男'
              } else if (cellValue === '0') {
                return '女'
              }
              return cellValue
            },
            meanNum (list, field) {
              let count = 0
              list.forEach(item => {
                count += Number(item[field])
              })
              return count / list.length
            },
            footerMethod ({ columns, data }) {
              const footerData = [
                columns.map((column, columnIndex) => {
                  if (columnIndex === 0) {
                    return '平均'
                  }
                  if (['age'].includes(column.property)) {
                    return this.meanNum(data, column.property)
                  }
                  return null
                })
              ]
              return footerData
            },
            exportDataEvent3 () {
              this.$refs.xTable3.exportData({
                type: 'csv',
                dataFilterMethod ({ row }) {
                  return row.sex === '1'
                }
              })
            }
          }
        }
        `,
        `
        <vhb-toolbar>
          <template #buttons>
            <vhb-button @click="exportCurrDataEvent4">导出当前页</vhb-button>
            <vhb-button @click="exportDataEvent4">自定义数据导出</vhb-button>
            <vhb-button @click="exportAllDataEvent4">全量导出后台数据</vhb-button>
          </template>
        </vhb-toolbar>

        <vhb-table
          border
          show-footer
          ref="xTable4"
          height="300"
          :row-config="{isHover: true}"
          :loading="loading"
          :footer-method="footerMethod"
          :data="tableData4">
          <vhb-column type="seq" width="60"></vhb-column>
          <vhb-column field="name" title="Name"></vhb-column>
          <vhb-column field="sex" title="Sex" :formatter="formatterSex"></vhb-column>
          <vhb-column field="age" title="Age"></vhb-column>
          <vhb-column type="html" field="html1" title="Html片段"></vhb-column>
        </vhb-table>

        <vhb-pager
          :loading="loading"
          :current-page="tablePage4.currentPage"
          :page-size="tablePage4.pageSize"
          :total="tablePage4.totalResult"
          :layouts="['PrevPage', 'JumpNumber', 'NextPage', 'FullJump', 'Sizes', 'Total']"
          @page-change="handlePageChange">
        </vhb-pager>
        `,
        `
        export default {
          data () {
            return {
              tableData4: [],
              tablePage4: {
                currentPage: 1,
                pageSize: 10,
                totalResult: 0
              }
            }
          },
          created () {
            this.findList()
          },
          methods: {
            findList () {
              this.loading = true
              setTimeout(() => {
                const list = [
                  { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc', html1: '<span>111</span>' },
                  { id: 10002, name: 'Test2', nickname: 'T2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou', html1: '<span>111</span>' },
                  { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai', html1: '<span>456</span>' },
                  { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc', html1: '<span>111</span>' },
                  { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai', html1: '<span>456</span>' },
                  { id: 10006, name: 'Test6', nickname: 'T6', role: 'Designer', sex: 'Women', age: 21, address: 'test abc', html1: '<span>56</span>' },
                  { id: 10007, name: 'Test7', nickname: 'T7', role: 'Test', sex: 'Man', age: 29, address: 'test abc', html1: '<span>768</span>' },
                  { id: 10008, name: 'Test8', nickname: 'T8', role: 'Develop', sex: 'Man', age: 35, address: 'test abc', html1: '<span>789</span>' }
                ]
                this.tableData4 = list
                this.tablePage4.totalResult = 20
                this.loading = false
              }, 100)
            },
            handlePageChange ({ currentPage, pageSize }) {
              this.tablePage4.currentPage = currentPage
              this.tablePage4.pageSize = pageSize
              this.findList()
            },
            formatterSex ({ cellValue }) {
              if (cellValue === '1') {
                return '男'
              } else if (cellValue === '0') {
                return '女'
              }
              return cellValue
            },
            meanNum (list, field) {
              let count = 0
              list.forEach(item => {
                count += Number(item[field])
              })
              return count / list.length
            },
            footerMethod ({ columns, data }) {
              const footerData = [
                columns.map((column, columnIndex) => {
                  if (columnIndex === 0) {
                    return '平均'
                  }
                  if (['age'].includes(column.property)) {
                    return this.meanNum(data, column.property)
                  }
                  return null
                })
              ]
              return footerData
            },
            exportCurrDataEvent4 () {
              this.$refs.xTable4.exportData({
                filename: '自定义文件名',
                type: 'html',
                isHeader: true,
                isFooter: true
              })
            },
            exportDataEvent4 () {
              this.$refs.xTable4.exportData({
                filename: '自定义文件名',
                type: 'html',
                isHeader: true,
                isFooter: true,
                // 自定义导出的数据源
                data: [
                  { name: 'Name1', sex: '男', age: 26, role: '前端', html1: '<a>xxx1</a>' },
                  { name: 'Name2', sex: '女', age: 20, role: '测试', html1: '<a>xxx2</a>' },
                  { name: 'Name4', sex: '女', age: 22, role: '设计师', html1: '<a>xxx3</a>' }
                ]
              })
            },
            exportAllDataEvent4 () {
              this.loading = true
              setTimeout(() => {
                const list = [
                  { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc', html1: '<span>111</span>' },
                  { id: 10002, name: 'Test2', nickname: 'T2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou', html1: '<span>111</span>' },
                  { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai', html1: '<span>456</span>' },
                  { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc', html1: '<span>111</span>' },
                  { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai', html1: '<span>456</span>' },
                  { id: 10006, name: 'Test6', nickname: 'T6', role: 'Designer', sex: 'Women', age: 21, address: 'test abc', html1: '<span>56</span>' },
                  { id: 10007, name: 'Test7', nickname: 'T7', role: 'Test', sex: 'Man', age: 29, address: 'test abc', html1: '<span>768</span>' },
                  { id: 10008, name: 'Test8', nickname: 'T8', role: 'Develop', sex: 'Man', age: 35, address: 'test abc', html1: '<span>789</span>' }
                ]
                this.$refs.xTable4.exportData({
                  filename: '自定义文件名',
                  type: 'csv',
                  isHeader: true,
                  isFooter: true,
                  data: list
                })
                this.loading = false
              }, 100)
            }
          }
        }
        `
      ]
    }
  },
  created () {
    this.findList()
  },
  methods: {
    findList () {
      this.loading = true
      setTimeout(() => {
        const list = [
          { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc', html1: '<span>111</span>' },
          { id: 10002, name: 'Test2', nickname: 'T2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou', html1: '<span>111</span>' },
          { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai', html1: '<span>456</span>' },
          { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc', html1: '<span>111</span>' },
          { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai', html1: '<span>456</span>' },
          { id: 10006, name: 'Test6', nickname: 'T6', role: 'Designer', sex: 'Women', age: 21, address: 'test abc', html1: '<span>56</span>' },
          { id: 10007, name: 'Test7', nickname: 'T7', role: 'Test', sex: 'Man', age: 29, address: 'test abc', html1: '<span>768</span>' },
          { id: 10008, name: 'Test8', nickname: 'T8', role: 'Develop', sex: 'Man', age: 35, address: 'test abc', html1: '<span>789</span>' }
        ]
        this.tableData4 = list
        this.tablePage4.totalResult = 20
        this.loading = false
      }, 100)
    },
    handlePageChange ({ currentPage, pageSize }) {
      this.tablePage4.currentPage = currentPage
      this.tablePage4.pageSize = pageSize
      this.findList()
    },
    formatterSex ({ cellValue }) {
      if (cellValue === '1') {
        return '男'
      } else if (cellValue === '0') {
        return '女'
      }
      return cellValue
    },
    meanNum (list, field) {
      let count = 0
      list.forEach(item => {
        count += Number(item[field])
      })
      return count / list.length
    },
    footerMethod ({ columns, data }) {
      const footerData = [
        columns.map((column, columnIndex) => {
          if (columnIndex === 0) {
            return '平均'
          }
          if (['age'].includes(column.property)) {
            return this.meanNum(data, column.property)
          }
          return null
        })
      ]
      return footerData
    },
    exportDataEvent () {
      this.$refs.xTable1.exportData({ type: 'csv' })
    },
    exportSelectEvent () {
      this.$refs.xTable1.exportData({
        data: this.$refs.xTable1.getCheckboxRecords()
      })
    },
    openExportEvent () {
      this.$refs.xTable1.openExport()
    },
    exportDataEvent2 () {
      this.$refs.xTable2.exportData({
        type: 'csv',
        columnFilterMethod ({ column }) {
          return ['name', 'sex'].includes(column.property)
        }
      })
    },
    exportDataEvent3 () {
      this.$refs.xTable3.exportData({
        type: 'csv',
        dataFilterMethod ({ row }) {
          return row.sex === '1'
        }
      })
    },
    exportCurrDataEvent4 () {
      this.$refs.xTable4.exportData({
        filename: '自定义文件名',
        type: 'html',
        isHeader: true,
        isFooter: true
      })
    },
    exportDataEvent4 () {
      this.$refs.xTable4.exportData({
        filename: '自定义文件名',
        type: 'html',
        isHeader: true,
        isFooter: true,
        // 自定义导出的数据源
        data: [
          { name: 'Name1', sex: '男', age: 26, role: '前端', html1: '<a>xxx1</a>' },
          { name: 'Name2', sex: '女', age: 20, role: '测试', html1: '<a>xxx2</a>' },
          { name: 'Name4', sex: '女', age: 22, role: '设计师', html1: '<a>xxx3</a>' }
        ]
      })
    },
    exportAllDataEvent4 () {
      this.loading = true
      setTimeout(() => {
        const list = [
          { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc', html1: '<span>111</span>' },
          { id: 10002, name: 'Test2', nickname: 'T2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou', html1: '<span>111</span>' },
          { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai', html1: '<span>456</span>' },
          { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc', html1: '<span>111</span>' },
          { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai', html1: '<span>456</span>' },
          { id: 10006, name: 'Test6', nickname: 'T6', role: 'Designer', sex: 'Women', age: 21, address: 'test abc', html1: '<span>56</span>' },
          { id: 10007, name: 'Test7', nickname: 'T7', role: 'Test', sex: 'Man', age: 29, address: 'test abc', html1: '<span>768</span>' },
          { id: 10008, name: 'Test8', nickname: 'T8', role: 'Develop', sex: 'Man', age: 35, address: 'test abc', html1: '<span>789</span>' }
        ]
        this.$refs.xTable4.exportData({
          filename: '自定义文件名',
          type: 'csv',
          isHeader: true,
          isFooter: true,
          data: list
        })
        this.loading = false
      }, 100)
    }
  }
}
</script>
