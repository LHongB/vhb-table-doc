<template>
  <div>
    <p class="tip">使用 <table-api-link prop="row-config"/>.<table-api-link prop="isCurrent"/> 显示高亮行，当前行是唯一的；用户操作点击选项时会触发事件 <table-api-link prop="current-change"/></p>

    <vhb-toolbar>
      <template #buttons>
        <vhb-button @click="$refs.xTable.setCurrentRow(tableData[1])">设置第二行选中</vhb-button>
        <vhb-button @click="$refs.xTable.clearCurrentRow()">取消选中</vhb-button>
        <vhb-button @click="getCurrentEvent">获取高亮行</vhb-button>
      </template>
    </vhb-toolbar>

    <vhb-table
      border
      ref="xTable"
      height="300"
      :data="tableData"
      :row-config="{isCurrent: true, isHover: true}"
      @current-change="currentChangeEvent">
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
  </div>
</template>

<script>
import VHBTable from 'vhb-table'

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
        <vhb-toolbar>
          <template #buttons>
            <vhb-button @click="$refs.xTable.setCurrentRow(tableData[1])">设置第二行选中</vhb-button>
            <vhb-button @click="$refs.xTable.clearCurrentRow()">取消选中</vhb-button>
            <vhb-button @click="getCurrentEvent">获取高亮行</vhb-button>
          </template>
        </vhb-toolbar>

        <vhb-table
          border
          ref="xTable"
          height="300"
          :row-config="{isCurrent: true, isHover: true}"
          :data="tableData"
          @current-change="currentChangeEvent">
          <vhb-column field="name" title="Name"></vhb-column>
          <vhb-column field="sex" title="Sex"></vhb-column>
          <vhb-column field="age" title="Age"></vhb-column>
          <vhb-column field="address" title="Address" show-overflow></vhb-column>
        </vhb-table>
        `,
        `
        import VHBTable from 'vhb-table'
        
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
            currentChangeEvent ({ row }) {
              console.log('行选中事件')
            },
            getCurrentEvent () {
              VHBTable.modal.alert(JSON.stringify(this.$refs.xTable.getCurrentRecord()))
            }
          }
        }
        `
      ]
    }
  },
  methods: {
    currentChangeEvent ({ rowIndex }) {
      console.log(`行选中事件 ${rowIndex}`)
    },
    getCurrentEvent () {
      VHBTable.modal.alert(JSON.stringify(this.$refs.xTable.getCurrentRecord()))
    }
  }
}
</script>
