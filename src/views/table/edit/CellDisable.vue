<template>
  <div>
    <p class="tip">
      设置 <table-api-link prop="edit-config"/> 的 <table-api-link prop="activeMethod"/> 方法判断单元格是否禁用<br>
      <span class="red">（具体请自行实现，该示例仅供参考）</span>
    </p>

    <vhb-table
      border
      show-overflow
      :data="tableData"
      :edit-config="{trigger: 'click', mode: 'cell', activeMethod: activeCellMethod}"
      @edit-disabled="editDisabledEvent">
      <vhb-column type="seq" width="60"></vhb-column>
      <vhb-column field="name" title="Name" :edit-render="{autofocus: '.myinput'}">
        <template #edit="{ row }">
          <vhb-input v-model="row.name" class="myinput"></vhb-input>
        </template>
      </vhb-column>
      <vhb-column field="sex" title="Sex" :edit-render="{}">
        <template #default="{ row }">
          <span>{{ formatSex(row.sex) }}</span>
        </template>
        <template #edit="{ row }">
          <vhb-select v-model="row.sex" transfer>
            <vhb-option v-for="item in sexList" :key="item.value" :value="item.value" :label="item.label"></vhb-option>
          </vhb-select>
        </template>
      </vhb-column>
      <vhb-column field="date" title="Date" :edit-render="{}">
        <template #edit="{ row }">
          <vhb-input v-model="row.date" type="week" placeholder="请选择日期" transfer></vhb-input>
        </template>
      </vhb-column>
    </vhb-table>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <pre-code class="xml">{{ demoCodes[0] }}</pre-code>
      <pre-code class="javascript">{{ demoCodes[1] }}</pre-code>
    </pre>

    <p class="tip">配合  <table-api-link prop="edit-actived"/> 事件，使用组件方式禁用编辑</p>

    <vhb-table
      border
      show-overflow
      :data="tableData"
      :edit-config="{trigger: 'click', mode: 'cell'}"
      @edit-actived="editActivedEvent">
      <vhb-column type="seq" width="60"></vhb-column>
      <vhb-column field="name" title="Name" :edit-render="{autofocus: '.myinput'}">
        <template #edit="{ row }">
          <input v-model="row.name" class="myinput" :disabled="nameDisabled" />
        </template>
      </vhb-column>
      <vhb-colgroup title="分组">
        <vhb-column field="sex" title="Sex" :edit-render="{}">
          <template #default="{ row }">
            <span>{{ formatSex(row.sex) }}</span>
          </template>
          <template #edit="{ row }">
            <vhb-select v-model="row.sex" transfer :disabled="sexDisabled">
              <vhb-option v-for="item in sexList" :key="item.value" :value="item.value" :label="item.label"></vhb-option>
            </vhb-select>
          </template>
        </vhb-column>
        <vhb-column field="date" title="Date" :edit-render="{}">
          <template #edit="{ row }">
            <vhb-input v-model="row.date" type="week" placeholder="请选择日期" :disabled="dateDisabled" transfer></vhb-input>
          </template>
        </vhb-column>
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
import VHBTable from 'vhb-table'

export default {
  data () {
    return {
      nameDisabled: false,
      sexDisabled: false,
      dateDisabled: false,
      tableData: [
        { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: '0', sex2: ['0'], num1: 40, age: 28, address: 'Shenzhen', date12: '', date13: '' },
        { id: 10002, name: 'Test2', nickname: 'T2', role: 'Designer', sex: '1', sex2: ['0', '1'], num1: 44, age: 22, address: 'Guangzhou', date12: '', date13: '2020-08-20' },
        { id: 10003, name: 'Test3', nickname: 'T3', role: 'Test', sex: '0', sex2: ['1'], num1: 200, age: 32, address: 'Shanghai', date12: '2020-09-10', date13: '' },
        { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: '1', sex2: ['1'], num1: 30, age: 23, address: 'Shenzhen', date12: '', date13: '2020-12-04' },
        { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: '0', sex2: ['1', '0'], num1: 20, age: 30, address: 'Shanghai', date12: '2020-09-20', date13: '' },
        { id: 10006, name: 'Test6', nickname: 'T6', role: 'Designer', sex: '1', sex2: ['0'], num1: 10, age: 21, address: 'Shenzhen', date12: '', date13: '' },
        { id: 10007, name: 'Test7', nickname: 'T7', role: 'Develop', sex: '0', sex2: ['0'], num1: 5, age: 29, address: 'Shenzhen', date12: '2020-01-02', date13: '2020-09-20' },
        { id: 10008, name: 'Test8', nickname: 'T8', role: 'PM', sex: '1', sex2: ['0'], num1: 2, age: 35, address: 'Shenzhen', date12: '', date13: '' }
      ],
      sexList: [
        { label: '', value: '' },
        { label: '男', value: '1' },
        { label: '女', value: '0' }
      ],
      demoCodes: [
        `
        <vhb-table
          border
          show-overflow
          :data="tableData"
          :edit-config="{trigger: 'click', mode: 'cell', activeMethod: activeCellMethod}"
          @edit-disabled="editDisabledEvent">
          <vhb-column type="seq" width="60"></vhb-column>
          <vhb-column field="name" title="Name" :edit-render="{autofocus: '.myinput'}">
            <template #edit="{ row }">
              <vhb-input v-model="row.name" class="myinput"></vhb-input>
            </template>
          </vhb-column>
          <vhb-column field="sex" title="Sex" :edit-render="{}">
            <template #default="{ row }">
              <span>{{ formatSex(row.sex) }}</span>
            </template>
            <template #edit="{ row }">
              <vhb-select v-model="row.sex" transfer>
                <vhb-option v-for="item in sexList" :key="item.value" :value="item.value" :label="item.label"></vhb-option>
              </vhb-select>
            </template>
          </vhb-column>
          <vhb-column field="date" title="Date" :edit-render="{}">
            <template #edit="{ row }">
              <vhb-input v-model="row.date" type="week" placeholder="请选择日期" transfer></vhb-input>
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
                { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: '0', sex2: ['0'], num1: 40, age: 28, address: 'Shenzhen', date12: '', date13: '' },
                { id: 10002, name: 'Test2', nickname: 'T2', role: 'Designer', sex: '1', sex2: ['0', '1'], num1: 44, age: 22, address: 'Guangzhou', date12: '', date13: '2020-08-20' },
                { id: 10003, name: 'Test3', nickname: 'T3', role: 'Test', sex: '0', sex2: ['1'], num1: 200, age: 32, address: 'Shanghai', date12: '2020-09-10', date13: '' },
                { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: '1', sex2: ['1'], num1: 30, age: 23, address: 'Shenzhen', date12: '', date13: '2020-12-04' },
                { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: '0', sex2: ['1', '0'], num1: 20, age: 30, address: 'Shanghai', date12: '2020-09-20', date13: '' },
                { id: 10006, name: 'Test6', nickname: 'T6', role: 'Designer', sex: '1', sex2: ['0'], num1: 10, age: 21, address: 'Shenzhen', date12: '', date13: '' },
                { id: 10007, name: 'Test7', nickname: 'T7', role: 'Develop', sex: '0', sex2: ['0'], num1: 5, age: 29, address: 'Shenzhen', date12: '2020-01-02', date13: '2020-09-20' },
                { id: 10008, name: 'Test8', nickname: 'T8', role: 'PM', sex: '1', sex2: ['0'], num1: 2, age: 35, address: 'Shenzhen', date12: '', date13: '' }
              ],
              sexList: [
                { label: '', value: '' },
                { label: '男', value: '1' },
                { label: '女', value: '0' }
              ]
            }
          },
          methods: {
            formatSex (value) {
              if (value === '1') {
                return '男'
              }
              if (value === '0') {
                return '女'
              }
              return ''
            },
            activeCellMethod ({ column, columnIndex }) {
              if (columnIndex === 1) {
                return false
              }
              return true
            },
            editDisabledEvent ({ row, column }) {
              VHBTable.modal.message({ content: '禁止编辑', status: 'error' })
            }
          }
        }
        `,
        `
        <vhb-table
          border
          show-overflow
          :data="tableData"
          :edit-config="{trigger: 'click', mode: 'cell'}"
          @edit-actived="editActivedEvent">
          <vhb-column type="seq" width="60"></vhb-column>
          <vhb-column field="name" title="Name" :edit-render="{autofocus: '.myinput'}">
            <template #edit="{ row }">
              <input v-model="row.name" class="myinput" :disabled="nameDisabled" />
            </template>
          </vhb-column>
          <vhb-colgroup title="分组">
            <vhb-column field="sex" title="Sex" :edit-render="{}">
              <template #default="{ row }">
                <span>{{ formatSex(row.sex) }}</span>
              </template>
              <template #edit="{ row }">
                <vhb-select v-model="row.sex" transfer :disabled="sexDisabled">
                  <vhb-option v-for="item in sexList" :key="item.value" :value="item.value" :label="item.label"></vhb-option>
                </vhb-select>
              </template>
            </vhb-column>
            <vhb-column field="date" title="Date" :edit-render="{}">
              <template #edit="{ row }">
                <vhb-input v-model="row.date" type="week" placeholder="请选择日期" :disabled="dateDisabled" transfer></vhb-input>
              </template>
            </vhb-column>
          </vhb-colgroup>
        </vhb-table>
        `,
        `
        export default {
          data () {
            return {
              nameDisabled: false,
              sexDisabled: false,
              dateDisabled: false,
              tableData: [
                { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: '0', sex2: ['0'], num1: 40, age: 28, address: 'Shenzhen', date12: '', date13: '' },
                { id: 10002, name: 'Test2', nickname: 'T2', role: 'Designer', sex: '1', sex2: ['0', '1'], num1: 44, age: 22, address: 'Guangzhou', date12: '', date13: '2020-08-20' },
                { id: 10003, name: 'Test3', nickname: 'T3', role: 'Test', sex: '0', sex2: ['1'], num1: 200, age: 32, address: 'Shanghai', date12: '2020-09-10', date13: '' },
                { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: '1', sex2: ['1'], num1: 30, age: 23, address: 'Shenzhen', date12: '', date13: '2020-12-04' },
                { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: '0', sex2: ['1', '0'], num1: 20, age: 30, address: 'Shanghai', date12: '2020-09-20', date13: '' },
                { id: 10006, name: 'Test6', nickname: 'T6', role: 'Designer', sex: '1', sex2: ['0'], num1: 10, age: 21, address: 'Shenzhen', date12: '', date13: '' },
                { id: 10007, name: 'Test7', nickname: 'T7', role: 'Develop', sex: '0', sex2: ['0'], num1: 5, age: 29, address: 'Shenzhen', date12: '2020-01-02', date13: '2020-09-20' },
                { id: 10008, name: 'Test8', nickname: 'T8', role: 'PM', sex: '1', sex2: ['0'], num1: 2, age: 35, address: 'Shenzhen', date12: '', date13: '' }
              ],
              sexList: [
                { label: '', value: '' },
                { label: '男', value: '1' },
                { label: '女', value: '0' }
              ]
            }
          },
          methods: {
            formatSex (value) {
              if (value === '1') {
                return '男'
              }
              if (value === '0') {
                return '女'
              }
              return ''
            },
            editActivedEvent ({ rowIndex, row }) {
              this.nameDisabled = rowIndex === 1
              this.sexDisabled = row.sex === '1'
              this.dateDisabled = !!row.date
            }
          }
        }
        `
      ]
    }
  },
  methods: {
    formatSex (value) {
      if (value === '1') {
        return '男'
      }
      if (value === '0') {
        return '女'
      }
      return ''
    },
    activeCellMethod ({ columnIndex }) {
      if (columnIndex === 1) {
        return false
      }
      return true
    },
    editDisabledEvent () {
      VHBTable.modal.message({ content: '禁止编辑', status: 'error' })
    },
    editActivedEvent ({ rowIndex, row }) {
      this.nameDisabled = rowIndex === 1
      this.sexDisabled = row.sex === '1'
      this.dateDisabled = !!row.date
    }
  }
}
</script>
