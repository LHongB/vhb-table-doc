<template>
  <div>
    <p class="tip">文件上传，可以通过调用 <table-api-link prop="readFile"/> 读取本地文件<span class="red">（具体请自行实现，该示例仅供参考）</span></p>

    <vhb-toolbar>
      <template #buttons>
        <vhb-button status="primary" @click="insertEvent()">选择文件</vhb-button>
        <vhb-button status="primary" @click="insertEvent({ multiple : true })">选择多个</vhb-button>
        <vhb-button @click="$refs.xTable.removeCheckboxRow()">删除选中</vhb-button>
        <vhb-button @click="getInsertEvent">保存</vhb-button>
      </template>
    </vhb-toolbar>

    <vhb-table
      border
      show-overflow
      ref="xTable"
      height="400"
      :data="tableData">
      <vhb-column type="checkbox" width="60"></vhb-column>
      <vhb-column type="seq" width="60"></vhb-column>
      <vhb-column field="name" title="Name"></vhb-column>
      <vhb-column field="type" title="Type"></vhb-column>
      <vhb-column field="size" title="Size"></vhb-column>
      <vhb-column field="date" title="Date"></vhb-column>
    </vhb-table>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <pre-code class="xml">{{ demoCodes[0] }}</pre-code>
      <pre-code class="javascript">{{ demoCodes[1] }}</pre-code>
    </pre>
  </div>
</template>

<script>
import HBUtils from 'hb-js-utils'
import VHBTable from 'vhb-table'

export default {
  data () {
    return {
      tableData: [],
      demoCodes: [
        `
        <vhb-toolbar>
          <template #buttons>
            <vhb-button status="primary" @click="insertEvent()">选择文件</vhb-button>
            <vhb-button status="primary" @click="insertEvent({ multiple : true })">选择多个</vhb-button>
            <vhb-button @click="$refs.xTable.removeCheckboxRow()">删除选中</vhb-button>
            <vhb-button @click="getInsertEvent">保存</vhb-button>
          </template>
        </vhb-toolbar>

        <vhb-table
          border
          show-overflow
          ref="xTable"
          height="400"
          :data="tableData">
          <vhb-column type="checkbox" width="60"></vhb-column>
          <vhb-column type="seq" width="60"></vhb-column>
          <vhb-column field="name" title="Name"></vhb-column>
          <vhb-column field="type" title="Type"></vhb-column>
          <vhb-column field="size" title="Size"></vhb-column>
          <vhb-column field="date" title="Date"></vhb-column>
        </vhb-table>
        `,
        `
        import HBUtils from 'hb-js-utils'
        import VHBTable from 'vhb-table'
        
        export default {
          data () {
            return {
              tableData: []
            }
          },
          methods: {
            insertEvent (opts) {
              const $table = this.$refs.xTable
              $table.readFile(opts).then(params => {
                const { files } = params
                const records = Array.from(files).map(file => {
                  const ns = file.name.split('.')
                  const name = ns.slice(0, ns.length - 1).join('')
                  const type = ns[ns.length - 1]
                  return {
                    name: name,
                    size: file.size,
                    type: type,
                    date: HBUtils.toDateString(new Date())
                  }
                })
                $table.insert(records)
              })
            },
            getInsertEvent () {
              const $table = this.$refs.xTable
              const insertRecords = $table.getInsertRecords()
              VHBTable.modal.alert(insertRecords.length)
            }
          }
        }
        `
      ]
    }
  },
  methods: {
    insertEvent (opts) {
      const $table = this.$refs.xTable
      $table.readFile(opts).then(params => {
        const { files } = params
        const records = Array.from(files).map(file => {
          const ns = file.name.split('.')
          const name = ns.slice(0, ns.length - 1).join('')
          const type = ns[ns.length - 1]
          return {
            name: name,
            size: file.size,
            type: type,
            date: HBUtils.toDateString(new Date())
          }
        })
        $table.insert(records)
      })
    },
    getInsertEvent () {
      const $table = this.$refs.xTable
      const insertRecords = $table.getInsertRecords()
      VHBTable.modal.alert(insertRecords.length)
    }
  }
}
</script>
