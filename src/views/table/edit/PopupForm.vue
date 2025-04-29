<template>
  <div>
    <p class="tip">实现弹框表单编辑功能，双击行可以弹出编辑框<span class="red">（具体请自行实现，该示例仅供参考）</span></p>

    <vhb-toolbar>
      <template #buttons>
        <vhb-button icon="fa fa-plus" @click="insertEvent()">新增</vhb-button>
      </template>
    </vhb-toolbar>

    <vhb-table
      border
      resizable
      show-overflow
      ref="xTable"
      height="500"
      :row-config="{isHover: true}"
      :data="tableData"
      @cell-dblclick="cellDBLClickEvent">
      <vhb-column type="seq" width="60"></vhb-column>
      <vhb-column field="name" title="Name"></vhb-column>
      <vhb-column field="sex" title="Sex" :formatter="formatterSex"></vhb-column>
      <vhb-column field="age" title="Age"></vhb-column>
      <vhb-column field="address" title="Address" show-overflow></vhb-column>
      <vhb-column title="操作" width="100" show-overflow>
        <template #default="{ row }">
          <vhb-button type="text" icon="fa fa-edit" @click="editEvent(row)"></vhb-button>
          <vhb-button type="text" icon="fa fa-trash-o" @click="removeEvent(row)"></vhb-button>
        </template>
      </vhb-column>
    </vhb-table>

    <vhb-modal v-model="showEdit" :title="selectRow ? '编辑&保存' : '新增&保存'" width="800" min-width="600" min-height="300" :loading="submitLoading" resize destroy-on-close>
      <template #default>
        <vhb-form :data="formData" :rules="formRules" title-align="right" title-width="100" @submit="submitEvent">
          <vhb-form-item title="Basic information" title-align="left" :title-width="200" :span="24" :title-prefix="{icon: 'fa fa-address-card-o'}"></vhb-form-item>
          <vhb-form-item field="name" title="Name" :span="12" :item-render="{}">
            <template #default="{ data }">
              <vhb-input v-model="data.name" placeholder="请输入名称"></vhb-input>
            </template>
          </vhb-form-item>
          <vhb-form-item field="nickname" title="Nickname" :span="12" :item-render="{}">
            <template #default="{ data }">
              <vhb-input v-model="data.name" placeholder="请输入名称"></vhb-input>
            </template>
          </vhb-form-item>
          <vhb-form-item field="role" title="Role" :span="12" :item-render="{}">
            <template #default="{ data }">
              <vhb-input v-model="data.name" placeholder="请输入角色"></vhb-input>
            </template>
          </vhb-form-item>
          <vhb-form-item field="sex" title="Sex" :span="12" :item-render="{}">
            <template #default="{ data }">
              <vhb-select v-model="data.sex" transfer>
                <vhb-option v-for="item in sexList" :key="item.value" :value="item.value" :label="item.label"></vhb-option>
              </vhb-select>
            </template>
          </vhb-form-item>
          <vhb-form-item field="age" title="Age" :span="12" :item-render="{}">
            <template #default="{ data }">
              <vhb-input v-model="data.age" type="number" placeholder="请输入年龄"></vhb-input>
            </template>
          </vhb-form-item>
          <vhb-form-item field="flag1" title="是否单身" :span="12" :item-render="{}">
            <template #default="{ data }">
              <vhb-radio-group v-model="data.flag1">
                <vhb-radio label="Y" content="是"></vhb-radio>
                <vhb-radio label="N" content="否"></vhb-radio>
              </vhb-radio-group>
            </template>
          </vhb-form-item>
          <vhb-form-item field="checkedList" title="可选信息" :visible-method="visibleMethod" :span="24" :item-render="{}">
            <template #default="{ data }">
              <vhb-checkbox-group v-model="data.checkedList">
                <vhb-checkbox label="1" content="运动、跑步"></vhb-checkbox>
                <vhb-checkbox label="2" content="听音乐"></vhb-checkbox>
                <vhb-checkbox label="3" content="爬山"></vhb-checkbox>
                <vhb-checkbox label="4" content="吃美食"></vhb-checkbox>
              </vhb-checkbox-group>
            </template>
          </vhb-form-item>
          <vhb-form-item title="Other information" title-align="left" :title-width="200" :span="24" :title-prefix="{message: '请填写必填项', icon: 'fa fa-info-circle'}"></vhb-form-item>
          <vhb-form-item field="num" title="Number" :span="12" :item-render="{}">
            <template #default="{ data }">
              <vhb-input v-model="data.num" type="number" placeholder="请输入数值"></vhb-input>
            </template>
          </vhb-form-item>
          <vhb-form-item field="date3" title="Date" :span="12" :item-render="{}">
            <template #default="{ data }">
              <vhb-input v-model="data.date3" type="date" placeholder="请选择日期" transfer></vhb-input>
            </template>
          </vhb-form-item>
          <vhb-form-item field="address" title="Date" :span="24" :item-render="{}" :title-suffix="{message: '提示信息！！', icon: 'fa fa-question-circle'}">
            <template #default="{ data }">
              <vhb-textarea v-model="data.address" :autosize="{minRows: 2, maxRows: 4}"></vhb-textarea>
            </template>
          </vhb-form-item>
          <vhb-form-item align="center" title-align="left" :span="24">
            <template #default>
              <vhb-button type="submit">提交</vhb-button>
              <vhb-button type="reset">重置</vhb-button>
            </template>
          </vhb-form-item>
        </vhb-form>
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
import VHBTable from 'vhb-table'

export default {
  data () {
    return {
      submitLoading: false,
      tableData: [
        { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: '0', sex2: ['0'], num1: 40, age: 28, address: 'Shenzhen', date12: '', date13: '' },
        { id: 10002, name: 'Test2', nickname: 'T2', role: 'Designer', sex: '1', sex2: ['0', '1'], num1: 20, age: 22, address: 'Guangzhou', date12: '', date13: '2020-08-20' },
        { id: 10003, name: 'Test3', nickname: 'T3', role: 'Test', sex: '0', sex2: ['1'], num1: 200, age: 32, address: 'Shanghai', date12: '2020-09-10', date13: '' },
        { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: '1', sex2: ['1'], num1: 30, age: 23, address: 'Shenzhen', date12: '', date13: '2020-12-04' }
      ],
      selectRow: null,
      showEdit: false,
      sexList: [
        { label: '女', value: '0' },
        { label: '男', value: '1' }
      ],
      formData: {
        name: null,
        nickname: null,
        role: null,
        sex: null,
        age: null,
        num: null,
        checkedList: [],
        flag1: null,
        date3: null,
        address: null
      },
      formRules: {
        name: [
          { required: true, message: '请输入名称' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符' }
        ],
        nickname: [
          { required: true, message: '请输入昵称' }
        ],
        sex: [
          { required: true, message: '请选择性别' }
        ]
      },
      demoCodes: [
        `
        <vhb-toolbar>
          <template #buttons>
            <vhb-button icon="fa fa-plus" @click="insertEvent()">新增</vhb-button>
          </template>
        </vhb-toolbar>

        <vhb-table
          border
          resizable
          show-overflow
          ref="xTable"
          height="500"
          :row-config="{isHover: true}"
          :data="tableData"
          @cell-dblclick="cellDBLClickEvent">
          <vhb-column type="seq" width="60"></vhb-column>
          <vhb-column field="name" title="Name"></vhb-column>
          <vhb-column field="sex" title="Sex" :formatter="formatterSex"></vhb-column>
          <vhb-column field="age" title="Age"></vhb-column>
          <vhb-column field="address" title="Address" show-overflow></vhb-column>
          <vhb-column title="操作" width="100" show-overflow>
            <template #default="{ row }">
              <vhb-button type="text" icon="fa fa-edit" @click="editEvent(row)"></vhb-button>
              <vhb-button type="text" icon="fa fa-trash-o" @click="removeEvent(row)"></vhb-button>
            </template>
          </vhb-column>
        </vhb-table>

        <vhb-modal v-model="showEdit" :title="selectRow ? '编辑&保存' : '新增&保存'" width="800" min-width="600" min-height="300" :loading="submitLoading" resize destroy-on-close>
          <template #default>
            <vhb-form :data="formData" :rules="formRules" title-align="right" title-width="100" @submit="submitEvent">
              <vhb-form-item title="Basic information" title-align="left" :title-width="200" :span="24" :title-prefix="{icon: 'fa fa-address-card-o'}"></vhb-form-item>
              <vhb-form-item field="name" title="Name" :span="12" :item-render="{}">
                <template #default="{ data }">
                  <vhb-input v-model="data.name" placeholder="请输入名称"></vhb-input>
                </template>
              </vhb-form-item>
              <vhb-form-item field="nickname" title="Nickname" :span="12" :item-render="{}">
                <template #default="{ data }">
                  <vhb-input v-model="data.name" placeholder="请输入名称"></vhb-input>
                </template>
              </vhb-form-item>
              <vhb-form-item field="role" title="Role" :span="12" :item-render="{}">
                <template #default="{ data }">
                  <vhb-input v-model="data.name" placeholder="请输入角色"></vhb-input>
                </template>
              </vhb-form-item>
              <vhb-form-item field="sex" title="Sex" :span="12" :item-render="{}">
                <template #default="{ data }">
                  <vhb-select v-model="data.sex" transfer>
                    <vhb-option v-for="item in sexList" :key="item.value" :value="item.value" :label="item.label"></vhb-option>
                  </vhb-select>
                </template>
              </vhb-form-item>
              <vhb-form-item field="age" title="Age" :span="12" :item-render="{}">
                <template #default="{ data }">
                  <vhb-input v-model="data.age" type="number" placeholder="请输入年龄"></vhb-input>
                </template>
              </vhb-form-item>
              <vhb-form-item field="flag1" title="是否单身" :span="12" :item-render="{}">
                <template #default="{ data }">
                  <vhb-radio-group v-model="data.flag1">
                    <vhb-radio label="Y" content="是"></vhb-radio>
                    <vhb-radio label="N" content="否"></vhb-radio>
                  </vhb-radio-group>
                </template>
              </vhb-form-item>
              <vhb-form-item field="checkedList" title="可选信息" :visible-method="visibleMethod" :span="24" :item-render="{}">
                <template #default="{ data }">
                  <vhb-checkbox-group v-model="data.checkedList">
                    <vhb-checkbox label="1" content="运动、跑步"></vhb-checkbox>
                    <vhb-checkbox label="2" content="听音乐"></vhb-checkbox>
                    <vhb-checkbox label="3" content="爬山"></vhb-checkbox>
                    <vhb-checkbox label="4" content="吃美食"></vhb-checkbox>
                  </vhb-checkbox-group>
                </template>
              </vhb-form-item>
              <vhb-form-item title="Other information" title-align="left" :title-width="200" :span="24" :title-prefix="{message: '请填写必填项', icon: 'fa fa-info-circle'}"></vhb-form-item>
              <vhb-form-item field="num" title="Number" :span="12" :item-render="{}">
                <template #default="{ data }">
                  <vhb-input v-model="data.num" type="number" placeholder="请输入数值"></vhb-input>
                </template>
              </vhb-form-item>
              <vhb-form-item field="date3" title="Date" :span="12" :item-render="{}">
                <template #default="{ data }">
                  <vhb-input v-model="data.date3" type="date" placeholder="请选择日期" transfer></vhb-input>
                </template>
              </vhb-form-item>
              <vhb-form-item field="address" title="Date" :span="24" :item-render="{}" :title-suffix="{message: '提示信息！！', icon: 'fa fa-question-circle'}">
                <template #default="{ data }">
                  <vhb-textarea v-model="data.address" :autosize="{minRows: 2, maxRows: 4}"></vhb-textarea>
                </template>
              </vhb-form-item>
              <vhb-form-item align="center" title-align="left" :span="24">
                <template #default>
                  <vhb-button type="submit">提交</vhb-button>
                  <vhb-button type="reset">重置</vhb-button>
                </template>
              </vhb-form-item>
            </vhb-form>
          </template>
        </vhb-modal>
        `,
        `
        import VHBTable from 'vhb-table'
        
        export default {
          data () {
            return {
              submitLoading: false,
              tableData: [
                { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: '0', sex2: ['0'], num1: 40, age: 28, address: 'Shenzhen', date12: '', date13: '' },
                { id: 10002, name: 'Test2', nickname: 'T2', role: 'Designer', sex: '1', sex2: ['0', '1'], num1: 20, age: 22, address: 'Guangzhou', date12: '', date13: '2020-08-20' },
                { id: 10003, name: 'Test3', nickname: 'T3', role: 'Test', sex: '0', sex2: ['1'], num1: 200, age: 32, address: 'Shanghai', date12: '2020-09-10', date13: '' },
                { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: '1', sex2: ['1'], num1: 30, age: 23, address: 'Shenzhen', date12: '', date13: '2020-12-04' }
              ],
              selectRow: null,
              showEdit: false,
              sexList: [
                { label: '女', value: '0' },
                { label: '男', value: '1' }
              ],
              formData: {
                name: null,
                nickname: null,
                role: null,
                sex: null,
                age: null,
                num: null,
                checkedList: [],
                flag1: null,
                date3: null,
                address: null
              },
              formRules: {
                name: [
                  { required: true, message: '请输入名称' },
                  { min: 3, max: 5, message: '长度在 3 到 5 个字符' }
                ],
                nickname: [
                  { required: true, message: '请输入昵称' }
                ],
                sex: [
                  { required: true, message: '请选择性别' }
                ]
              }
            }
          },
          methods: {
            formatterSex ({ cellValue }) {
              let item = this.sexList.find(item => item.value === cellValue)
              return item ? item.label : ''
            },
            visibleMethod ({ data }) {
              return data.flag1 === 'Y'
            },
            cellDBLClickEvent ({ row }) {
              this.editEvent(row)
            },
            insertEvent () {
              this.formData = {
                name: '',
                nickname: '',
                role: '',
                sex: '',
                age: '',
                num: '',
                checkedList: [],
                flag1: '',
                date3: '',
                address: ''
              }
              this.selectRow = null
              this.showEdit = true
            },
            editEvent (row) {
              this.formData = {
                name: row.name,
                nickname: row.nickname,
                role: row.role,
                sex: row.sex,
                age: row.age,
                num: row.num,
                checkedList: row.checkedList,
                flag1: row.flag1,
                date3: row.date3,
                address: row.address
              }
              this.selectRow = row
              this.showEdit = true
            },
            async removeEvent (row) {
              const type = await VHBTable.modal.confirm('您确定要删除该数据?')
              const $table = this.$refs.xTable
              if (type === 'confirm') {
                $table.remove(row)
              }
            },
            submitEvent () {
              this.submitLoading = true
              setTimeout(() => {
                const $table = this.$refs.xTable
                this.submitLoading = false
                this.showEdit = false
                if (this.selectRow) {
                  VHBTable.modal.message({ content: '保存成功', status: 'success' })
                  Object.assign(this.selectRow, this.formData)
                } else {
                  VHBTable.modal.message({ content: '新增成功', status: 'success' })
                  $table.insert(this.formData)
                }
              }, 500)
            }
          }
        }
        `
      ]
    }
  },
  methods: {
    formatterSex ({ cellValue }) {
      const item = this.sexList.find(item => item.value === cellValue)
      return item ? item.label : ''
    },
    visibleMethod ({ data }) {
      return data.flag1 === 'Y'
    },
    cellDBLClickEvent ({ row }) {
      this.editEvent(row)
    },
    insertEvent () {
      this.formData = {
        name: '',
        nickname: '',
        role: '',
        sex: '',
        age: '',
        num: '',
        checkedList: [],
        flag1: '',
        date3: '',
        address: ''
      }
      this.selectRow = null
      this.showEdit = true
    },
    editEvent (row) {
      this.formData = {
        name: row.name,
        nickname: row.nickname,
        role: row.role,
        sex: row.sex,
        age: row.age,
        num: row.num,
        checkedList: row.checkedList,
        flag1: row.flag1,
        date3: row.date3,
        address: row.address
      }
      this.selectRow = row
      this.showEdit = true
    },
    async removeEvent (row) {
      const type = await VHBTable.modal.confirm('您确定要删除该数据?')
      const $table = this.$refs.xTable
      if (type === 'confirm') {
        $table.remove(row)
      }
    },
    submitEvent () {
      this.submitLoading = true
      setTimeout(() => {
        const $table = this.$refs.xTable
        this.submitLoading = false
        this.showEdit = false
        if (this.selectRow) {
          VHBTable.modal.message({ content: '保存成功', status: 'success' })
          Object.assign(this.selectRow, this.formData)
        } else {
          VHBTable.modal.message({ content: '新增成功', status: 'success' })
          $table.insert(this.formData)
        }
      }, 500)
    }
  }
}
</script>
