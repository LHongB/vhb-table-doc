<template>
  <div>
    <p class="tip">当数据结构比较复杂的时候，可以使用多级表头来更加直观的显示数据</p>

    <vhb-table
      border
      height="400"
      :data="tableData">
      <vhb-colgroup title="基本信息">
        <vhb-column type="seq" width="60"></vhb-column>
        <vhb-column field="name" title="Name"></vhb-column>
      </vhb-colgroup>
      <vhb-colgroup title="更多信息">
        <vhb-column field="role" title="Role"></vhb-column>
        <vhb-colgroup title="详细信息">
          <vhb-column field="sex" title="Sex"></vhb-column>
          <vhb-column field="age" title="Age"></vhb-column>
        </vhb-colgroup>
      </vhb-colgroup>
      <vhb-colgroup title="分类信息">
        <vhb-column field="date3" title="Date"></vhb-column>
      </vhb-colgroup>
      <vhb-column field="address" title="Address" show-overflow></vhb-column>
    </vhb-table>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <pre-code class="xml">{{ demoCodes[0] }}</pre-code>
      <pre-code class="javascript">{{ demoCodes[1] }}</pre-code>
    </pre>

    <p class="tip">分组表头与固定列</p>

    <vhb-toolbar>
      <template #buttons>
        <vhb-button @click="toggleFixedColumn('group0', 'left')">切换第一列固定</vhb-button>
        <vhb-button @click="toggleFixedColumn('group1', 'left')">切换第二列固定</vhb-button>
        <vhb-button @click="toggleFixedColumn('group3', 'right')">切换第四列固定</vhb-button>
        <vhb-button @click="toggleFixedColumn('group4', 'right')">切换第五列固定</vhb-button>
      </template>
    </vhb-toolbar>

    <vhb-table
      border
      ref="xTable"
      height="400"
      :data="tableData">
      <vhb-colgroup field="group0" title="基本信息">
        <vhb-column type="seq" width="60"></vhb-column>
        <vhb-column field="name" title="Name" width="180"></vhb-column>
      </vhb-colgroup>
      <vhb-colgroup field="group1" title="分类信息1">
        <vhb-column field="age" title="Age1" width="120"></vhb-column>
      </vhb-colgroup>
      <vhb-colgroup field="group2" title="更多信息">
        <vhb-column field="role" title="Role" width="300"></vhb-column>
        <vhb-column field="attr1" title="Attr1" width="200"></vhb-column>
        <vhb-colgroup title="详细信息">
          <vhb-column field="sex" title="Sex" width="200"></vhb-column>
          <vhb-column field="num" title="Num" width="200"></vhb-column>
        </vhb-colgroup>
      </vhb-colgroup>
      <vhb-colgroup field="group3" title="分类信息2">
        <vhb-column field="attr6" title="Attr6" width="120"></vhb-column>
      </vhb-colgroup>
      <vhb-colgroup field="group4" title="额外信息">
        <vhb-column field="date3" title="Date" width="140"></vhb-column>
        <vhb-column field="address" title="Address" width="200" show-overflow></vhb-column>
      </vhb-colgroup>
    </vhb-table>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <pre-code class="xml">{{ demoCodes[2] }}</pre-code>
      <pre-code class="javascript">{{ demoCodes[3] }}</pre-code>
    </pre>
  </div>
</template>

<script>
import HBUtils from 'hb-js-utils'

export default {
  data () {
    return {
      tableData: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
        { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
        { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
        { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc' },
        { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' },
        { id: 10006, name: 'Test6', role: 'Designer', sex: 'Women', age: 21, address: 'test abc' },
        { id: 10007, name: 'Test7', role: 'Test', sex: 'Man', age: 29, address: 'test abc' },
        { id: 10008, name: 'Test8', role: 'Develop', sex: 'Man', age: 35, address: 'test abc' }
      ],
      demoCodes: [
        `
        <vhb-table
          border
          height="400"
          :data="tableData">
          <vhb-colgroup title="基本信息">
            <vhb-column type="seq" width="60"></vhb-column>
            <vhb-column field="name" title="Name"></vhb-column>
          </vhb-colgroup>
          <vhb-colgroup title="更多信息">
            <vhb-column field="role" title="Role"></vhb-column>
            <vhb-colgroup title="详细信息">
              <vhb-column field="sex" title="Sex"></vhb-column>
              <vhb-column field="age" title="Age"></vhb-column>
            </vhb-colgroup>
          </vhb-colgroup>
          <vhb-colgroup title="分类信息">
            <vhb-column field="date3" title="Date"></vhb-column>
          </vhb-colgroup>
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
                { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc' },
                { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' },
                { id: 10006, name: 'Test6', role: 'Designer', sex: 'Women', age: 21, address: 'test abc' },
                { id: 10007, name: 'Test7', role: 'Test', sex: 'Man', age: 29, address: 'test abc' },
                { id: 10008, name: 'Test8', role: 'Develop', sex: 'Man', age: 35, address: 'test abc' }
              ]
            }
          }
        }
        `,
        `
        <vhb-toolbar>
          <template #buttons>
            <vhb-button @click="toggleFixedColumn('group0', 'left')">切换第一列固定</vhb-button>
            <vhb-button @click="toggleFixedColumn('group1', 'left')">切换第二列固定</vhb-button>
            <vhb-button @click="toggleFixedColumn('group3', 'right')">切换第四列固定</vhb-button>
            <vhb-button @click="toggleFixedColumn('group4', 'right')">切换第五列固定</vhb-button>
          </template>
        </vhb-toolbar>

        <vhb-table
          border
          ref="xTable"
          height="400"
          :data="tableData">
          <vhb-colgroup field="group0" title="基本信息">
            <vhb-column type="seq" width="60"></vhb-column>
            <vhb-column field="name" title="Name" width="180"></vhb-column>
          </vhb-colgroup>
          <vhb-colgroup field="group1" title="分类信息1">
            <vhb-column field="age" title="Age1" width="120"></vhb-column>
          </vhb-colgroup>
          <vhb-colgroup field="group2" title="更多信息">
            <vhb-column field="role" title="Role" width="300"></vhb-column>
            <vhb-column field="attr1" title="Attr1" width="200"></vhb-column>
            <vhb-colgroup title="详细信息">
              <vhb-column field="sex" title="Sex" width="200"></vhb-column>
              <vhb-column field="num" title="Num" width="200"></vhb-column>
            </vhb-colgroup>
          </vhb-colgroup>
          <vhb-colgroup field="group3" title="分类信息2">
            <vhb-column field="attr6" title="Attr6" width="120"></vhb-column>
          </vhb-colgroup>
          <vhb-colgroup field="group4" title="额外信息">
            <vhb-column field="date3" title="Date" width="140"></vhb-column>
            <vhb-column field="address" title="Address" width="200" show-overflow></vhb-column>
          </vhb-colgroup>
        </vhb-table>
        `,
        `
        import HBUtils from 'hb-js-utils'
        
        export default {
          data () {
            return {
              tableData: [
                { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
                { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
                { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
                { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc' },
                { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' },
                { id: 10006, name: 'Test6', role: 'Designer', sex: 'Women', age: 21, address: 'test abc' },
                { id: 10007, name: 'Test7', role: 'Test', sex: 'Man', age: 29, address: 'test abc' },
                { id: 10008, name: 'Test8', role: 'Develop', sex: 'Man', age: 35, address: 'test abc' }
              ]
            }
          },
          methods: {
            toggleFixedColumn (field, type) {
              const xTable = this.$refs.xTable
              const column = xTable.getColumnByField(field)
              const groupFixed = column.fixed ? null : type
              // 将分组整体设置固定列
              HBUtils.eachTree([column], column => {
                column.fixed = groupFixed
              })
              // 刷新列
              xTable.refreshColumn()
            }
          }
        }
        `
      ]
    }
  },
  methods: {
    toggleFixedColumn (field, type) {
      const xTable = this.$refs.xTable
      const column = xTable.getColumnByField(field)
      const groupFixed = column.fixed ? null : type
      // 将分组整体设置固定列
      HBUtils.eachTree([column], column => {
        column.fixed = groupFixed
      })
      // 刷新列
      xTable.refreshColumn()
    }
  }
}
</script>
