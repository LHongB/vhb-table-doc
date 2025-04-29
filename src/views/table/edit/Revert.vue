<template>
  <div>
    <p class="tip">
      设置 <table-api-link prop="keep-source"/> 开启保持原始值状态，通过调用 <table-api-link prop="revertData"/> 还原数据<br>
      <span class="red">（注：开启 keep-source 将会影响性能，具体取决于数据量）</span>
    </p>

    <vhb-toolbar perfect>
      <template #buttons>
        <vhb-button icon="fa fa-plus" status="perfect" @click="insertEvent">新增</vhb-button>
        <vhb-button icon="fa fa-trash-o" status="perfect" @click="removeEvent">移除</vhb-button>
        <vhb-button icon="fa fa-save" status="perfect" @click="saveEvent">保存</vhb-button>
        <vhb-button icon="fa fa-mail-reply" status="perfect" @click="revertEvent">还原</vhb-button>
      </template>
    </vhb-toolbar>

    <vhb-table
      ref="xTable"
      border
      show-overflow
      keep-source
      :data="tableData"
      :edit-config="{trigger: 'click', mode: 'cell', showStatus: true}">
      <vhb-column type="checkbox" width="60"></vhb-column>
      <vhb-column type="seq" width="60"></vhb-column>
      <vhb-column field="name" title="Name" :edit-render="{}">
        <template #edit="{ row }">
          <vhb-input v-model="row.name" type="text"></vhb-input>
        </template>
      </vhb-column>
      <vhb-column field="sex" title="Sex" :edit-render="{}">
        <template #edit="{ row }">
          <vhb-input v-model="row.sex" type="text"></vhb-input>
        </template>
      </vhb-column>
      <vhb-column field="age" title="Age" :edit-render="{}">
        <template #edit="{ row }">
          <vhb-input v-model="row.age" type="text"></vhb-input>
        </template>
      </vhb-column>
      <vhb-column title="操作">
        <template #default="{ row }">
          <vhb-button v-if="!$refs.xTable.isInsertByRow(row)" @click="$refs.xTable.revertData(row)">还原</vhb-button>
        </template>
      </vhb-column>
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
        { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, address: 'test abc' },
        { id: 10002, name: 'Test2', role: 'Test', sex: '1', age: 22, address: 'Guangzhou' },
        { id: 10003, name: 'Test3', role: 'PM', sex: '0', age: 32, address: 'Shanghai' },
        { id: 10004, name: 'Test4', role: 'Designer', sex: '1', age: 23, address: 'test abc' },
        { id: 10005, name: 'Test5', role: 'Develop', sex: '1', age: 30, address: 'Shanghai' },
        { id: 10006, name: 'Test6', role: 'Designer', sex: '1', age: 21, address: 'test abc' }
      ],
      demoCodes: [
        `
        <vhb-toolbar perfect>
          <template #buttons>
            <vhb-button icon="fa fa-plus" status="perfect" @click="insertEvent">新增</vhb-button>
            <vhb-button icon="fa fa-trash-o" status="perfect" @click="removeEvent">移除</vhb-button>
            <vhb-button icon="fa fa-save" status="perfect" @click="saveEvent">保存</vhb-button>
            <vhb-button icon="fa fa-mail-reply" status="perfect" @click="revertEvent">还原</vhb-button>
          </template>
        </vhb-toolbar>

        <vhb-table
          ref="xTable"
          border
          show-overflow
          keep-source
          :data="tableData"
          :edit-config="{trigger: 'click', mode: 'cell', showStatus: true}">
          <vhb-column type="checkbox" width="60"></vhb-column>
          <vhb-column type="seq" width="60"></vhb-column>
          <vhb-column field="name" title="Name" :edit-render="{}">
            <template #edit="{ row }">
              <vhb-input v-model="row.name" type="text"></vhb-input>
            </template>
          </vhb-column>
          <vhb-column field="sex" title="Sex" :edit-render="{}">
            <template #edit="{ row }">
              <vhb-input v-model="row.sex" type="text"></vhb-input>
            </template>
          </vhb-column>
          <vhb-column field="age" title="Age" :edit-render="{}">
            <template #edit="{ row }">
              <vhb-input v-model="row.age" type="text"></vhb-input>
            </template>
          </vhb-column>
          <vhb-column title="操作">
            <template #default="{ row }">
              <vhb-button v-if="!$refs.xTable.isInsertByRow(row)" @click="$refs.xTable.revertData(row)">还原</vhb-button>
            </template>
          </vhb-column>
        </vhb-table>
        `,
        `
        import VHBTable from 'vhb-table'
        
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
            insertEvent () {
              const $table = this.$refs.xTable
              const record = {
                sex: '1'
              }
              $table.insert(record).then(({ row }) => {
                $table.setActiveCell(row, 'sex')
              })
            },
            async removeEvent () {
              const $table = this.$refs.xTable
              const selectRecords = $table.getCheckboxRecords()
              if (selectRecords.length) {
                const type = await VHBTable.modal.confirm('您确定要删除选中的数据吗?')
                if (type === 'confirm') {
                  $table.removeCheckboxRow()
                }
              } else {
                VHBTable.modal.message({ content: '请至少选择一条数据', status: 'error' })
              }
            },
            async revertEvent () {
              const type = await VHBTable.modal.confirm('您确定要还原数据吗?')
              const $table = this.$refs.xTable
              if (type === 'confirm') {
                $table.revertData()
              }
            },
            saveEvent () {
              const $table = this.$refs.xTable
              const { insertRecords, removeRecords, updateRecords } = $table.getRecordset()
              VHBTable.modal.alert(\`insertRecords=\${insertRecords.length} removeRecords=\${removeRecords.length} updateRecords=\${updateRecords.length}\`)
            }
          }
        }
        `
      ]
    }
  },
  methods: {
    insertEvent () {
      const $table = this.$refs.xTable
      const record = {
        sex: '1'
      }
      $table.insert(record).then(({ row }) => {
        $table.setActiveCell(row, 'sex')
      })
    },
    async removeEvent () {
      const $table = this.$refs.xTable
      const selectRecords = $table.getCheckboxRecords()
      if (selectRecords.length) {
        const type = await VHBTable.modal.confirm('您确定要删除选中的数据吗?')
        if (type === 'confirm') {
          $table.removeCheckboxRow()
        }
      } else {
        VHBTable.modal.message({ content: '请至少选择一条数据', status: 'error' })
      }
    },
    async revertEvent () {
      const type = await VHBTable.modal.confirm('您确定要还原数据吗?')
      const $table = this.$refs.xTable
      if (type === 'confirm') {
        $table.revertData()
      }
    },
    saveEvent () {
      const $table = this.$refs.xTable
      const { insertRecords, removeRecords, updateRecords } = $table.getRecordset()
      VHBTable.modal.alert(`insertRecords=${insertRecords.length} removeRecords=${removeRecords.length} updateRecords=${updateRecords.length}`)
    }
  }
}
</script>
