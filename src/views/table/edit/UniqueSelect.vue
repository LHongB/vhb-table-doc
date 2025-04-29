<template>
  <div>
    <p class="tip">实现简单的唯一下拉选项列表<span class="red">（具体请自行实现，该示例仅供参考）</span></p>

    <vhb-toolbar>
      <template #buttons>
        <vhb-button @click="insertEvent()">新增</vhb-button>
      </template>
    </vhb-toolbar>

    <vhb-table
      border
      resizable
      show-overflow
      ref="xTable"
      max-height="400"
      :data="tableData"
      :edit-config="{trigger: 'click', mode: 'row'}"
      @edit-actived="editActivedEvent">
      <vhb-column type="seq" width="60"></vhb-column>
      <vhb-column field="name" title="Name" :edit-render="{}">
        <template #edit="{ row }">
          <vhb-input v-model="row.name" type="text"></vhb-input>
        </template>
      </vhb-column>
      <vhb-column field="role" title="Role" :edit-render="{}">
        <template #default="{ row }">
          <span>{{ formatRole(row.role) }}</span>
        </template>
        <template #edit="{ row }">
          <vhb-select v-model="row.role" clearable transfer @change="roleChangeEvent">
            <vhb-option v-for="item in roleList" :key="item.value" :value="item.value" :label="item.label" :disabled="item.disabled"></vhb-option>
          </vhb-select>
        </template>
      </vhb-column>
      <vhb-column field="date13" title="Date" :edit-render="{}">
        <template #edit="{ row }">
          <vhb-input v-model="row.date13" type="date" transfer></vhb-input>
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
export default {
  data () {
    return {
      tableData: [
        { id: 10001, name: 'Test1', nickname: 'T1', role: '1', age: 28, address: 'Shenzhen', date12: '', date13: '' },
        { id: 10002, name: 'Test2', nickname: 'T2', role: '2', age: 22, address: 'Guangzhou', date12: '', date13: '2020-08-20' }
      ],
      roleList: [
        { label: '前端', value: '1', disabled: false },
        { label: '后端', value: '2', disabled: false },
        { label: '项目经理', value: '3', disabled: false },
        { label: '设计师', value: '4', disabled: false },
        { label: '运维', value: '5', disabled: false }
      ],
      demoCodes: [
        `
        <vhb-toolbar>
          <template #buttons>
            <vhb-button @click="insertEvent()">新增</vhb-button>
          </template>
        </vhb-toolbar>

        <vhb-table
          border
          resizable
          show-overflow
          ref="xTable"
          max-height="400"
          :data="tableData"
          :edit-config="{trigger: 'click', mode: 'row'}"
          @edit-actived="editActivedEvent">
          <vhb-column type="seq" width="60"></vhb-column>
          <vhb-column field="name" title="Name" :edit-render="{}">
            <template #edit="{ row }">
              <vhb-input v-model="row.name" type="text"></vhb-input>
            </template>
          </vhb-column>
          <vhb-column field="role" title="Role" :edit-render="{}">
            <template #default="{ row }">
              <span>{{ formatRole(row.role) }}</span>
            </template>
            <template #edit="{ row }">
              <vhb-select v-model="row.role" clearable transfer @change="roleChangeEvent">
                <vhb-option v-for="item in roleList" :key="item.value" :value="item.value" :label="item.label" :disabled="item.disabled"></vhb-option>
              </vhb-select>
            </template>
          </vhb-column>
          <vhb-column field="date13" title="Date" :edit-render="{}">
            <template #edit="{ row }">
              <vhb-input v-model="row.date13" type="date" transfer></vhb-input>
            </template>
          </vhb-column>
        </vhb-table>
        `,
        `
        export default {
          data () {
            return {
              tableData: [
                { id: 10001, name: 'Test1', nickname: 'T1', role: '1', age: 28, address: 'Shenzhen', date12: '', date13: '' },
                { id: 10002, name: 'Test2', nickname: 'T2', role: '2', age: 22, address: 'Guangzhou', date12: '', date13: '2020-08-20' }
              ],
              roleList: [
                { label: '前端', value: '1', disabled: false },
                { label: '后端', value: '2', disabled: false },
                { label: '项目经理', value: '3', disabled: false },
                { label: '设计师', value: '4', disabled: false },
                { label: '运维', value: '5', disabled: false }
              ]
            }
          },
          created () {
            this.$nextTick(() => {
              this.updateRoleList()
            })
          },
          methods: {
            formatRole (value) {
              const item = this.roleList.find(item => item.value === value)
              return item ? item.label : value
            },
            insertEvent () {
              const $table = this.$refs.xTable
              const record = {}
              $table.insert(record)
            },
            updateRoleList () {
              const $table = this.$refs.xTable
              // 获取表格中的全量数据
              const { fullData } = $table.getTableData()
              this.roleList.forEach(item => {
                if (item.value) {
                  // 如果当前选项已经被选过，则禁用
                  item.disabled = fullData.some(row => row.role === item.value)
                }
              })
            },
            roleChangeEvent ({ row }) {
              this.updateRoleList()
            },
            editActivedEvent ({ row }) {
              // 激活编辑时检查剩余选项是否可选择
              this.updateRoleList()
            }
          }
        }
        `
      ]
    }
  },
  created () {
    this.$nextTick(() => {
      this.updateRoleList()
    })
  },
  methods: {
    formatRole (value) {
      const item = this.roleList.find(item => item.value === value)
      return item ? item.label : value
    },
    insertEvent () {
      const $table = this.$refs.xTable
      const record = {}
      $table.insert(record)
    },
    updateRoleList () {
      const $table = this.$refs.xTable
      // 获取表格中的全量数据
      const { fullData } = $table.getTableData()
      this.roleList.forEach(item => {
        if (item.value) {
          // 如果当前选项已经被选过，则禁用
          item.disabled = fullData.some(row => row.role === item.value)
        }
      })
    },
    roleChangeEvent () {
      this.updateRoleList()
    },
    editActivedEvent () {
      // 激活编辑时检查剩余选项是否可选择
      this.updateRoleList()
    }
  }
}
</script>
