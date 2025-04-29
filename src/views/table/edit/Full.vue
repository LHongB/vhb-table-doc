<template>
  <div>
    <p class="tip">增删改查完整示例</p>

    <vhb-toolbar ref="xToolbar" :loading="loading">
      <template #buttons>
        <vhb-button status="primary" content="临时新增" @click="insertEvent"></vhb-button>
        <vhb-button status="warning" content="临时删除" @click="removeSelectEvent"></vhb-button>
        <vhb-button status="danger" content="直接删除" @click="deleteSelectEvent"></vhb-button>
        <vhb-button content="提交（将临时操作持久化）" @click="saveEvent"></vhb-button>
      </template>
    </vhb-toolbar>

    <vhb-table
      border
      resizable
      show-overflow
      keep-source
      ref="xTable"
      height="500"
      :loading="loading"
      :data="tableData"
      :edit-rules="validRules"
      :edit-config="{trigger: 'click', mode: 'row', showUpdateStatus: true, showInsertStatus: true}">
      <vhb-column type="checkbox" width="60"></vhb-column>
      <vhb-column field="name" title="Name" :edit-render="{}">
        <template #edit="{ row }">
          <vhb-input v-model="row.name" type="text"></vhb-input>
        </template>
      </vhb-column>
      <vhb-column field="nickname" title="Nickname" :edit-render="{}">
        <template #edit="{ row }">
          <vhb-input v-model="row.nickname" type="text"></vhb-input>
        </template>
      </vhb-column>
      <vhb-column field="sex" title="Sex" :edit-render="{}">
        <template #default="{ row }">
          <span>{{ formatSex(row.sex) }}</span>
        </template>
        <template #edit="{ row }">
          <vhb-select v-model="row.sex" type="text" :options="sexList" transfer></vhb-select>
        </template>
      </vhb-column>
      <vhb-column field="amount" title="Amount" :edit-render="{}">
        <template #edit="{ row }">
          <vhb-input v-model="row.amount" type="float" :digits="2"></vhb-input>
        </template>
      </vhb-column>
      <vhb-column field="updateDate" title="Date" :edit-render="{}">
        <template #edit="{ row }">
          <vhb-input v-model="row.updateDate" type="date"></vhb-input>
        </template>
      </vhb-column>
      <vhb-column title="操作" width="240">
        <template #default="{ row }">
          <vhb-button status="warning" content="临时删除" @click="removeRowEvent(row)"></vhb-button>
          <vhb-button status="danger" content="直接删除" @click="deleteRowEvent(row)"></vhb-button>
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
import { mapState } from 'vuex'

export default {
  data () {
    return {
      loading: false,
      tableData: [],
      validRules: {
        name: [
          { required: true, message: '名称必须填写' }
        ]
      },
      sexList: [
        { label: '男', value: '1' },
        { label: '女', value: '0' }
      ],
      demoCodes: [
        `
        <vhb-toolbar ref="xToolbar" :loading="loading">
          <template #buttons>
            <vhb-button status="primary" content="临时新增" @click="insertEvent"></vhb-button>
            <vhb-button status="warning" content="临时删除" @click="removeSelectEvent"></vhb-button>
            <vhb-button status="danger" content="直接删除" @click="deleteSelectEvent"></vhb-button>
            <vhb-button content="提交（将临时操作持久化）" @click="saveEvent"></vhb-button>
          </template>
        </vhb-toolbar>

        <vhb-table
          border
          resizable
          show-overflow
          keep-source
          ref="xTable"
          height="500"
          :loading="loading"
          :data="tableData"
          :edit-rules="validRules"
          :edit-config="{trigger: 'click', mode: 'row', showUpdateStatus: true, showInsertStatus: true}">
          <vhb-column type="checkbox" width="60"></vhb-column>
          <vhb-column field="name" title="Name" :edit-render="{}">
            <template #edit="{ row }">
              <vhb-input v-model="row.name" type="text"></vhb-input>
            </template>
          </vhb-column>
          <vhb-column field="nickname" title="Nickname" :edit-render="{}">
            <template #edit="{ row }">
              <vhb-input v-model="row.nickname" type="text"></vhb-input>
            </template>
          </vhb-column>
          <vhb-column field="sex" title="Sex" :edit-render="{}">
            <template #default="{ row }">
              <span>{{ formatSex(row.sex) }}</span>
            </template>
            <template #edit="{ row }">
              <vhb-select v-model="row.sex" type="text" :options="sexList" transfer></vhb-select>
            </template>
          </vhb-column>
          <vhb-column field="amount" title="Amount" :edit-render="{}">
            <template #edit="{ row }">
              <vhb-input v-model="row.amount" type="float" :digits="2"></vhb-input>
            </template>
          </vhb-column>
          <vhb-column field="updateDate" title="Date" :edit-render="{}">
            <template #edit="{ row }">
              <vhb-input v-model="row.updateDate" type="date"></vhb-input>
            </template>
          </vhb-column>
          <vhb-column title="操作" width="240">
            <template #default="{ row }">
              <vhb-button status="warning" content="临时删除" @click="removeRowEvent(row)"></vhb-button>
              <vhb-button status="danger" content="直接删除" @click="deleteRowEvent(row)"></vhb-button>
            </template>
          </vhb-column>
        </vhb-table>
        `,
        `
        import VHBTable from 'vhb-table'
        import { mapState } from 'vuex'

        export default {
          data () {
            return {
              loading: false,
              tableData: [],
              validRules: {
                name: [
                  { required: true, message: '名称必须填写' }
                ]
              },
              sexList: [
                { label: '男', value: '1' },
                { label: '女', value: '0' }
              ]
            }
          },
          computed: {
            ...mapState([
              'serveApiUrl'
            ])
          },
          created () {
            this.$nextTick(() => {
              // 将表格和工具栏进行关联
              const $table = this.$refs.xTable
              $table.connect(this.$refs.xToolbar)
            })
            this.loadList()
          },
          methods: {
            async loadList () {
              this.loading = true
              try {
                const res = await fetch(\`\${this.serveApiUrl}/api/pub/all\`).then(response => response.json())
                this.tableData = res
              } catch (e) {
                this.tableData = []
              }
              this.loading = false
            },
            formatSex (value) {
              if (value === '1') {
                return '男'
              }
              if (value === '0') {
                return '女'
              }
              return ''
            },
            async insertEvent () {
              const $table = this.$refs.xTable
              const newRecord = {}
              const { row: newRow } = await $table.insert(newRecord)
              await $table.setActiveRow(newRow)
            },
            async removeSelectEvent () {
              const $table = this.$refs.xTable
              await $table.removeCheckboxRow()
            },
            async deleteSelectEvent () {
              const type = await VHBTable.modal.confirm('您确定要删除选中的数据?')
              if (type !== 'confirm') {
                return
              }
              const $table = this.$refs.xTable
              const checkboxRecords = $table.getCheckboxRecords()
              this.loading = true
              try {
                const body = { removeRecords: checkboxRecords }
                await fetch(\`\${this.serveApiUrl}/api/pub/save\`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
                await this.loadList()
              } catch (e) {}
              this.loading = false
            },
            async removeRowEvent (row) {
              const $table = this.$refs.xTable
              await $table.remove(row)
            },
            async deleteRowEvent (row) {
              const type = await VHBTable.modal.confirm('您确定要删除该数据?')
              if (type !== 'confirm') {
                return
              }
              this.loading = true
              try {
                const body = { removeRecords: [row] }
                await fetch(\`\${this.serveApiUrl}/api/pub/save\`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
                await this.loadList()
              } catch (e) {}
            },
            async saveEvent () {
              const $table = this.$refs.xTable
              const { insertRecords, removeRecords, updateRecords } = $table.getRecordset()
              if (insertRecords.length <= 0 && removeRecords.length <= 0 && updateRecords.length <= 0) {
                VHBTable.modal.message({ content: '数据未改动！', status: 'warning' })
                return
              }
              const errMap = await $table.validate().catch(errMap => errMap)
              if (errMap) {
                return
              }
              this.loading = true
              try {
                const body = { insertRecords, removeRecords, updateRecords }
                await fetch(\`\${this.serveApiUrl}/api/pub/save\`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
                await this.loadList()
                VHBTable.modal.message({ content: \`操作成功，新增 \${insertRecords.length} 条，更新 \${updateRecords.length} 条，删除 \${removeRecords.length} 条\`, status: 'success' })
              } catch (e) {
                if (e && e.message) {
                  VHBTable.modal.message({ content: e.message, status: 'error' })
                }
              }
              this.loading = false
            }
          }
        }
        `
      ]
    }
  },
  computed: {
    ...mapState([
      'serveApiUrl'
    ])
  },
  created () {
    this.$nextTick(() => {
      // 将表格和工具栏进行关联
      const $table = this.$refs.xTable
      $table.connect(this.$refs.xToolbar)
    })
    this.loadList()
  },
  methods: {
    async loadList () {
      this.loading = true
      try {
        const res = await fetch(`${this.serveApiUrl}/api/pub/all`).then(response => response.json())
        this.tableData = res
      } catch (e) {
        this.tableData = []
      }
      this.loading = false
    },
    formatSex (value) {
      if (value === '1') {
        return '男'
      }
      if (value === '0') {
        return '女'
      }
      return ''
    },
    async insertEvent () {
      const $table = this.$refs.xTable
      const newRecord = {}
      const { row: newRow } = await $table.insert(newRecord)
      await $table.setActiveRow(newRow)
    },
    async removeSelectEvent () {
      const $table = this.$refs.xTable
      await $table.removeCheckboxRow()
    },
    async deleteSelectEvent () {
      const type = await VHBTable.modal.confirm('您确定要删除选中的数据?')
      if (type !== 'confirm') {
        return
      }
      const $table = this.$refs.xTable
      const checkboxRecords = $table.getCheckboxRecords()
      this.loading = true
      try {
        const body = { removeRecords: checkboxRecords }
        await fetch(`${this.serveApiUrl}/api/pub/save`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
        await this.loadList()
      } catch (e) {}
      this.loading = false
    },
    async removeRowEvent (row) {
      const $table = this.$refs.xTable
      await $table.remove(row)
    },
    async deleteRowEvent (row) {
      const type = await VHBTable.modal.confirm('您确定要删除该数据?')
      if (type !== 'confirm') {
        return
      }
      this.loading = true
      try {
        const body = { removeRecords: [row] }
        await fetch(`${this.serveApiUrl}/api/pub/save`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
        await this.loadList()
      } catch (e) {}
    },
    async saveEvent () {
      const $table = this.$refs.xTable
      const { insertRecords, removeRecords, updateRecords } = $table.getRecordset()
      if (insertRecords.length <= 0 && removeRecords.length <= 0 && updateRecords.length <= 0) {
        VHBTable.modal.message({ content: '数据未改动！', status: 'warning' })
        return
      }
      const errMap = await $table.validate().catch(errMap => errMap)
      if (errMap) {
        return
      }
      this.loading = true
      try {
        const body = { insertRecords, removeRecords, updateRecords }
        await fetch(`${this.serveApiUrl}/api/pub/save`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
        await this.loadList()
        VHBTable.modal.message({ content: `操作成功，新增 ${insertRecords.length} 条，更新 ${updateRecords.length} 条，删除 ${removeRecords.length} 条`, status: 'success' })
      } catch (e) {
        if (e && e.message) {
          VHBTable.modal.message({ content: e.message, status: 'error' })
        }
      }
      this.loading = false
    }
  }
}
</script>
