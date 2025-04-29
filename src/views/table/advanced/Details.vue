<template>
  <div>
    <p class="tip">实现点击行弹出窗口并显示详情信息<span class="red">（具体请自行实现，该示例仅供参考）</span></p>

    <vhb-table
      border
      resizable
      height="500"
      :row-config="{isCurrent: true, isHover: true}"
      :data="tableData"
      @cell-click="cellClickEvent">
      <vhb-column type="seq" width="60"></vhb-column>
      <vhb-column field="name" title="Name"></vhb-column>
      <vhb-column field="sex" title="Sex"></vhb-column>
      <vhb-column field="age" title="Age"></vhb-column>
      <vhb-column field="address" title="Address" show-overflow></vhb-column>
    </vhb-table>

    <vhb-modal v-model="showDetails" title="查看详情" width="600" height="400" :mask="false" :lock-view="false" resize>
      <template #default>
        <vhb-table
          border="inner"
          auto-resize
          show-overflow
          height="auto"
          :row-config="{isHover: true}"
          :show-header="false"
          :sync-resize="showDetails"
          :data="detailData">
          <vhb-column field="label" width="40%"></vhb-column>
          <vhb-column field="value"></vhb-column>
        </vhb-table>
      </template>
    </vhb-modal>

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
      showDetails: false,
      detailData: [],
      tableData: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, amount: 888, address: 'test abc' },
        { id: 10002, name: 'Test2', role: 'Test', sex: '1', age: 22, amount: 666, address: 'Guangzhou' },
        { id: 10003, name: 'Test3', role: 'PM', sex: '1', age: 32, amount: 89, address: 'Shanghai' },
        { id: 10004, name: 'Test4', role: 'Designer', sex: '0', age: 23, amount: 1000, address: 'test abc' },
        { id: 10005, name: 'Test5', role: 'Develop', sex: '0', age: 30, amount: 999, address: 'Shanghai' },
        { id: 10006, name: 'Test6', role: 'Designer', sex: '0', age: 21, amount: 998, address: 'test abc' },
        { id: 10007, name: 'Test7', role: 'Test', sex: '1', age: 29, amount: 2000, address: 'test abc' },
        { id: 10008, name: 'Test8', role: 'Develop', sex: '1', age: 35, amount: 999, address: 'test abc' },
        { id: 10009, name: 'Test9', role: 'Test', sex: '1', age: 26, amount: 2000, address: 'test abc' },
        { id: 100010, name: 'Test10', role: 'Develop', sex: '1', age: 21, amount: 666, address: 'test abc' }
      ],
      demoCodes: [
        `
        <vhb-table
          border
          resizable
          height="500"
          :row-config="{isCurrent: true, isHover: true}"
          :data="tableData"
          @cell-click="cellClickEvent">
          <vhb-column type="seq" width="60"></vhb-column>
          <vhb-column field="name" title="Name"></vhb-column>
          <vhb-column field="sex" title="Sex"></vhb-column>
          <vhb-column field="age" title="Age"></vhb-column>
          <vhb-column field="address" title="Address" show-overflow></vhb-column>
        </vhb-table>

        <vhb-modal v-model="showDetails" title="查看详情" width="600" height="400" :mask="false" :lock-view="false" resize>
          <template #default>
            <vhb-table
              border="inner"
              auto-resize
              show-overflow
              height="auto"
              :row-config="{isHover: true}"
              :show-header="false"
              :sync-resize="showDetails"
              :data="detailData">
              <vhb-column field="label" width="40%"></vhb-column>
              <vhb-column field="value"></vhb-column>
            </vhb-table>
          </template>
        </vhb-modal>
        `,
        `
        export default {
          data () {
            return {
              showDetails: false,
              detailData: [],
              tableData: [
                { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, amount: 888, address: 'test abc' },
                { id: 10002, name: 'Test2', role: 'Test', sex: '1', age: 22, amount: 666, address: 'Guangzhou' },
                { id: 10003, name: 'Test3', role: 'PM', sex: '1', age: 32, amount: 89, address: 'Shanghai' },
                { id: 10004, name: 'Test4', role: 'Designer', sex: '0', age: 23, amount: 1000, address: 'test abc' },
                { id: 10005, name: 'Test5', role: 'Develop', sex: '0', age: 30, amount: 999, address: 'Shanghai' },
                { id: 10006, name: 'Test6', role: 'Designer', sex: '0', age: 21, amount: 998, address: 'test abc' },
                { id: 10007, name: 'Test7', role: 'Test', sex: '1', age: 29, amount: 2000, address: 'test abc' },
                { id: 10008, name: 'Test8', role: 'Develop', sex: '1', age: 35, amount: 999, address: 'test abc' },
                { id: 10009, name: 'Test9', role: 'Test', sex: '1', age: 26, amount: 2000, address: 'test abc' },
                { id: 100010, name: 'Test10', role: 'Develop', sex: '1', age: 21, amount: 666, address: 'test abc' }
              ]
            }
          },
          methods: {
            cellClickEvent ({ row }) {
              this.detailData = ['name', 'nickname', 'role', 'sex', 'age', 'amount', 'address'].map(field => {
                return { label: field, value: row[field] }
              })
              this.showDetails = true
            }
          }
        }
        `
      ]
    }
  },
  methods: {
    cellClickEvent ({ row }) {
      this.detailData = ['name', 'nickname', 'role', 'sex', 'age', 'amount', 'address'].map(field => {
        return { label: field, value: row[field] }
      })
      this.showDetails = true
    }
  }
}
</script>
