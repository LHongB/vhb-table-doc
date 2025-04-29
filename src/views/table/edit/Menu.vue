<template>
  <div>
    <p class="tip">通过右键菜单增删改查<span class="red">（具体请自行实现，该示例仅供参考）</span></p>

    <vhb-toolbar>
      <template #buttons>
        <vhb-button @click="getInsertEvent">获取新增</vhb-button>
        <vhb-button @click="getRemoveEvent">获取删除</vhb-button>
        <vhb-button @click="getUpdateEvent">获取修改</vhb-button>
      </template>
    </vhb-toolbar>

    <vhb-table
      border
      resizable
      show-overflow
      keep-source
      ref="xTable"
      height="400"
      :loading="loading"
      :data="tableData"
      :menu-config="tableMenu"
      :edit-config="{trigger: 'click', mode: 'row', showStatus: true}"
      @menu-click="contextMenuClickEvent">
      <vhb-column type="seq" width="60"></vhb-column>
      <vhb-column field="name" title="Name" :edit-render="{autofocus: '.myinput'}">
        <template #edit="{ row }">
          <input v-model="row.name" type="text" class="myinput" />
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
      <vhb-column field="age" title="Age" :edit-render="{}">
        <template #edit="{ row }">
          <vhb-input v-model="row.age" type="number"></vhb-input>
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
import XEClipboard from 'xe-clipboard'
import VHBTable from 'vhb-table'

export default {
  data () {
    return {
      loading: false,
      tableData: [],
      tableMenu: {
        header: {
          options: [
            [
              { code: 'hideColumn', name: '隐藏列', disabled: false },
              { code: 'showAllColumn', name: '取消所有隐藏列', disabled: false }
            ]
          ]
        },
        body: {
          options: [
            [
              { code: 'copy', name: '复制', prefixIcon: 'fa fa-copy', disabled: false },
              { code: 'reload', name: '刷新', disabled: false },
              { code: 'insertAt', name: '插入', disabled: false },
              { code: 'remove', name: '删除', disabled: false },
              { code: 'save', name: '保存', prefixIcon: 'fa fa-save', disabled: false }
            ]
          ]
        },
        visibleMethod: this.visibleMethod
      },
      sexList: [
        { label: '', value: '' },
        { label: '男', value: '1' },
        { label: '女', value: '0' }
      ],
      demoCodes: [
        `
        <vhb-toolbar>
          <template #buttons>
            <vhb-button @click="getInsertEvent">获取新增</vhb-button>
            <vhb-button @click="getRemoveEvent">获取删除</vhb-button>
            <vhb-button @click="getUpdateEvent">获取修改</vhb-button>
          </template>
        </vhb-toolbar>

        <vhb-table
          border
          resizable
          show-overflow
          keep-source
          ref="xTable"
          height="400"
          :loading="loading"
          :data="tableData"
          :menu-config="tableMenu"
          :edit-config="{trigger: 'click', mode: 'row', showStatus: true}"
          @menu-click="contextMenuClickEvent">
          <vhb-column type="seq" width="60"></vhb-column>
          <vhb-column field="name" title="Name" :edit-render="{autofocus: '.myinput'}">
            <template #edit="{ row }">
              <input v-model="row.name" type="text" class="myinput" />
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
          <vhb-column field="age" title="Age" :edit-render="{}">
            <template #edit="{ row }">
              <vhb-input v-model="row.age" type="number"></vhb-input>
            </template>
          </vhb-column>
        </vhb-table>
        `,
        `
        import XEClipboard from 'xe-clipboard'
        import VHBTable from 'vhb-table'

        export default {
          data () {
            return {
              loading: false,
              tableData: [],
              tableMenu: {
                header: {
                  options: [
                    [
                      { code: 'hideColumn', name: '隐藏列', disabled: false },
                      { code: 'showAllColumn', name: '取消所有隐藏列', disabled: false }
                    ]
                  ]
                },
                body: {
                  options: [
                    [
                      { code: 'copy', name: '复制', prefixIcon: 'fa fa-copy', disabled: false },
                      { code: 'reload', name: '刷新', disabled: false },
                      { code: 'insertAt', name: '插入', disabled: false },
                      { code: 'remove', name: '删除', disabled: false },
                      { code: 'save', name: '保存', prefixIcon: 'fa fa-save', disabled: false }
                    ]
                  ]
                },
                visibleMethod: this.visibleMethod
              }
              sexList: [
                { label: '', value: '' },
                { label: '男', value: '1' },
                { label: '女', value: '0' }
              ]
            }
          },
          created () {
            this.findList()
          },
          methods: {
            findList () {
              this.loading = true
              this.tableData = []
              setTimeout(() => {
                this.tableData = [
                  { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, address: 'test abc' },
                  { id: 10002, name: 'Test2', role: 'Test', sex: '1', age: 22, address: 'Guangzhou' },
                  { id: 10003, name: 'Test3', role: 'PM', sex: '0', age: 32, address: 'Shanghai' },
                  { id: 10004, name: 'Test4', role: 'Designer', sex: '1', age: 23, address: 'test abc' },
                  { id: 10005, name: 'Test5', role: 'Develop', sex: '1', age: 30, address: 'Shanghai' },
                  { id: 10006, name: 'Test6', role: 'Designer', sex: '1', age: 21, address: 'test abc' },
                  { id: 10007, name: 'Test7', role: 'Test', sex: '0', 1: 29, address: 'test abc' },
                  { id: 10008, name: 'Test8', role: 'Develop', sex: '0', age: 35, address: 'test abc' }
                ]
                this.loading = false
              }, 500)
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
            insertEvent (row, column) {
              const $table = this.$refs.xTable
              $table.insertAt(null, row || -1).then(({ row }) => {
                $table.setActiveCell(row, column || 'name')
              })
            },
            visibleMethod ({ options, column }) {
              const isDisabled = !column
              options.forEach(list => {
                list.forEach(item => {
                  item.disabled = isDisabled
                })
              })
              return true
            },
            contextMenuClickEvent ({ menu, row, column }) {
              const $table = this.$refs.xTable
              switch (menu.code) {
                case 'hideColumn':
                  $table.hideColumn(column)
                  break
                case 'showAllColumn':
                  $table.resetColumn()
                  break
                case 'copy':
                  if (XEClipboard.copy(row[column.property])) {
                    VHBTable.modal.message({ content: '已复制到剪贴板！', status: 'success' })
                  }
                  break
                case 'reload':
                  this.findList()
                  break
                case 'insertAt':
                  this.insertEvent(row, column)
                  break
                case 'remove':
                  $table.remove(row)
                  break
                case 'save':
                  VHBTable.modal.message({ content: '保存成功', status: 'success' })
                  this.findList()
                  break
              }
            },
            getInsertEvent () {
              const $table = this.$refs.xTable
              const insertRecords = $table.getInsertRecords()
              VHBTable.modal.alert(insertRecords.length)
            },
            getRemoveEvent () {
              const $table = this.$refs.xTable
              const removeRecords = $table.getRemoveRecords()
              VHBTable.modal.alert(removeRecords.length)
            },
            getUpdateEvent () {
              const $table = this.$refs.xTable
              const updateRecords = $table.getUpdateRecords()
              VHBTable.modal.alert(updateRecords.length)
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
      this.tableData = []
      setTimeout(() => {
        this.tableData = [
          { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, address: 'test abc' },
          { id: 10002, name: 'Test2', role: 'Test', sex: '1', age: 22, address: 'Guangzhou' },
          { id: 10003, name: 'Test3', role: 'PM', sex: '0', age: 32, address: 'Shanghai' },
          { id: 10004, name: 'Test4', role: 'Designer', sex: '1', age: 23, address: 'test abc' },
          { id: 10005, name: 'Test5', role: 'Develop', sex: '1', age: 30, address: 'Shanghai' },
          { id: 10006, name: 'Test6', role: 'Designer', sex: '1', age: 21, address: 'test abc' },
          { id: 10007, name: 'Test7', role: 'Test', sex: '0', 1: 29, address: 'test abc' },
          { id: 10008, name: 'Test8', role: 'Develop', sex: '0', age: 35, address: 'test abc' }
        ]
        this.loading = false
      }, 500)
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
    insertEvent (row, column) {
      const $table = this.$refs.xTable
      $table.insertAt(null, row || -1).then(({ row }) => {
        $table.setActiveCell(row, column || 'name')
      })
    },
    visibleMethod ({ options, column }) {
      const isDisabled = !column
      options.forEach(list => {
        list.forEach(item => {
          item.disabled = isDisabled
        })
      })
      return true
    },
    contextMenuClickEvent ({ menu, row, column }) {
      const $table = this.$refs.xTable
      switch (menu.code) {
        case 'hideColumn':
          $table.hideColumn(column)
          break
        case 'showAllColumn':
          $table.resetColumn()
          break
        case 'copy':
          if (XEClipboard.copy(row[column.property])) {
            VHBTable.modal.message({ content: '已复制到剪贴板！', status: 'success' })
          }
          break
        case 'reload':
          this.findList()
          break
        case 'insertAt':
          this.insertEvent(row, column)
          break
        case 'remove':
          $table.remove(row)
          break
        case 'save':
          VHBTable.modal.message({ content: '保存成功', status: 'success' })
          this.findList()
          break
      }
    },
    getInsertEvent () {
      const $table = this.$refs.xTable
      const insertRecords = $table.getInsertRecords()
      VHBTable.modal.alert(insertRecords.length)
    },
    getRemoveEvent () {
      const $table = this.$refs.xTable
      const removeRecords = $table.getRemoveRecords()
      VHBTable.modal.alert(removeRecords.length)
    },
    getUpdateEvent () {
      const $table = this.$refs.xTable
      const updateRecords = $table.getUpdateRecords()
      VHBTable.modal.alert(updateRecords.length)
    }
  }
}
</script>
