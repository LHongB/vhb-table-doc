<template>
  <div>
    <p class="tip">可编辑表格</p>

    <vhb-toolbar ref="xToolbar" export :refresh="{query: findList}">
      <template #buttons>
        <vhb-button>
          <template #default>新增操作</template>
          <template #dropdowns>
            <vhb-button type="text" @click="insertEvent(null)">从第一行插入</vhb-button>
            <vhb-button type="text" @click="insertEvent(-1)">从最后插入</vhb-button>
            <vhb-button type="text" @click="insertEvent($refs.xTable.getData(100))">插入到 100 行</vhb-button>
            <vhb-button type="text" @click="insertEvent($refs.xTable.getData(300))">插入到 300 行</vhb-button>
          </template>
        </vhb-button>
        <vhb-button>
          <template #default>删除操作</template>
          <template #dropdowns>
            <vhb-button type="text" @click="$refs.xTable.removeCheckboxRow()">删除选中</vhb-button>
            <vhb-button type="text" @click="$refs.xTable.remove($refs.xTable.getData(0))">删除第一行</vhb-button>
            <vhb-button type="text" @click="$refs.xTable.remove($refs.xTable.getData($refs.xTable.getData().length - 1))">删除最后一行</vhb-button>
            <vhb-button type="text" @click="$refs.xTable.remove($refs.xTable.getData(100))">删除第 100 行</vhb-button>
          </template>
        </vhb-button>
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
      :export-config="{}"
      :loading="loading"
      :edit-config="{trigger: 'click', mode: 'row', showStatus: true}">
      <vhb-column type="checkbox" width="60"></vhb-column>
      <vhb-column type="seq" width="100"></vhb-column>
      <vhb-column field="name" title="Name" sortable width="200" :edit-render="{autofocus: '.vhb-input--inner'}">
        <template #edit="{ row }">
          <vhb-input v-model="row.name" type="text"></vhb-input>
        </template>
      </vhb-column>
      <vhb-column field="age" title="Age" width="200" :edit-render="{}">
        <template #edit="{ row }">
          <vhb-input v-model="row.age" type="text"></vhb-input>
        </template>
      </vhb-column>
      <vhb-column field="sex" title="Sex" width="200" :edit-render="{}">
        <template #edit="{ row }">
          <vhb-input v-model="row.sex" type="text"></vhb-input>
        </template>
      </vhb-column>
      <vhb-column field="rate" title="Rate" width="200"></vhb-column>
      <vhb-column field="region" title="Region" width="200"></vhb-column>
      <vhb-column field="time" title="Time" width="200"></vhb-column>
      <vhb-column field="address" title="Address" width="300" show-overflow></vhb-column>
      <vhb-column field="updateTime" title="UpdateTime" width="200"></vhb-column>
      <vhb-column field="attr1" title="Attr1" width="200"></vhb-column>
      <vhb-column field="attr2" title="Attr2" width="200"></vhb-column>
      <vhb-column field="attr3" title="Attr3" width="200"></vhb-column>
      <vhb-column field="attr4" title="Attr4" width="200"></vhb-column>
      <vhb-column field="attr5" title="Attr5" width="200"></vhb-column>
      <vhb-column field="attr6" title="Attr6" width="200"></vhb-column>
      <vhb-column field="attr7" title="Attr7" width="200"></vhb-column>
      <vhb-column field="attr8" title="Attr8" width="200"></vhb-column>
      <vhb-column field="attr9" title="Attr9" width="200"></vhb-column>
      <vhb-column field="createTime" title="CreateTime" width="200"></vhb-column>
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
      loading: false,
      demoCodes: [
        `
        <vhb-toolbar ref="xToolbar" export :refresh="{query: findList}">
          <template #buttons>
            <vhb-button>
              <template #default>新增操作</template>
              <template #dropdowns>
                <vhb-button type="text" @click="insertEvent(null)">从第一行插入</vhb-button>
                <vhb-button type="text" @click="insertEvent(-1)">从最后插入</vhb-button>
                <vhb-button type="text" @click="insertEvent($refs.xTable.getData(100))">插入到 100 行</vhb-button>
                <vhb-button type="text" @click="insertEvent($refs.xTable.getData(300))">插入到 300 行</vhb-button>
              </template>
            </vhb-button>
            <vhb-button>
              <template #default>删除操作</template>
              <template #dropdowns>
                <vhb-button type="text" @click="$refs.xTable.removeCheckboxRow()">删除选中</vhb-button>
                <vhb-button type="text" @click="$refs.xTable.remove($refs.xTable.getData(0))">删除第一行</vhb-button>
                <vhb-button type="text" @click="$refs.xTable.remove($refs.xTable.getData($refs.xTable.getData().length - 1))">删除最后一行</vhb-button>
                <vhb-button type="text" @click="$refs.xTable.remove($refs.xTable.getData(100))">删除第 100 行</vhb-button>
              </template>
            </vhb-button>
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
          :export-config="{}"
          :loading="loading"
          :edit-config="{trigger: 'click', mode: 'row', showStatus: true}">
          <vhb-column type="checkbox" width="60"></vhb-column>
          <vhb-column type="seq" width="100"></vhb-column>
          <vhb-column field="name" title="Name" sortable width="200" :edit-render="{autofocus: '.vhb-input--inner'}">
            <template #edit="{ row }">
              <vhb-input v-model="row.name" type="text"></vhb-input>
            </template>
          </vhb-column>
          <vhb-column field="age" title="Age" width="200" :edit-render="{}">
            <template #edit="{ row }">
              <vhb-input v-model="row.age" type="text"></vhb-input>
            </template>
          </vhb-column>
          <vhb-column field="sex" title="Sex" width="200" :edit-render="{}">
            <template #edit="{ row }">
              <vhb-input v-model="row.sex" type="text"></vhb-input>
            </template>
          </vhb-column>
          <vhb-column field="rate" title="Rate" width="200"></vhb-column>
          <vhb-column field="region" title="Region" width="200"></vhb-column>
          <vhb-column field="time" title="Time" width="200"></vhb-column>
          <vhb-column field="address" title="Address" width="300" show-overflow></vhb-column>
          <vhb-column field="updateTime" title="UpdateTime" width="200"></vhb-column>
          <vhb-column field="attr1" title="Attr1" width="200"></vhb-column>
          <vhb-column field="attr2" title="Attr2" width="200"></vhb-column>
          <vhb-column field="attr3" title="Attr3" width="200"></vhb-column>
          <vhb-column field="attr4" title="Attr4" width="200"></vhb-column>
          <vhb-column field="attr5" title="Attr5" width="200"></vhb-column>
          <vhb-column field="attr6" title="Attr6" width="200"></vhb-column>
          <vhb-column field="attr7" title="Attr7" width="200"></vhb-column>
          <vhb-column field="attr8" title="Attr8" width="200"></vhb-column>
          <vhb-column field="attr9" title="Attr9" width="200"></vhb-column>
          <vhb-column field="createTime" title="CreateTime" width="200"></vhb-column>
        </vhb-table>
        `,
        `
        import VHBTable from 'vhb-table'
        
        export default {
          data () {
            return {
              loading: false
            }
          },
          created () {
            this.$nextTick(() => {
              // 将表格和工具栏进行关联
              this.$refs.xTable.connect(this.$refs.xToolbar)
            })
            this.findList()
          },
          methods: {
            findList () {
              this.loading = true
              return new Promise(resolve => {
                setTimeout(() => {
                  const data = this.mockList(600)
                  // 阻断 vue 对大数组的监听，避免 vue 绑定大数据造成短暂的卡顿
                  if (this.$refs.xTable) {
                    this.$refs.xTable.loadData(data)
                  }
                  resolve()
                  this.loading = false
                }, 300)
              })
            },
            mockList (size) {
              const list = []
              for (let index = 0; index < size; index++) {
                list.push({
                  name: \`名称\${index}\`,
                  sex: '0',
                  num: 123,
                  age: 18,
                  num2: 234,
                  rate: 3,
                  address: 'shenzhen'
                })
              }
              return list
            },
            insertEvent (row) {
              let xTable = this.$refs.xTable
              const record = {
                checked: false
              }
              xTable.insertAt(record, row).then(({ row }) => {
                xTable.setActiveRow(row)
              })
            },
            getInsertEvent () {
              let insertRecords = this.$refs.xTable.getInsertRecords()
              VHBTable.modal.alert(insertRecords.length)
            },
            getRemoveEvent () {
              let removeRecords = this.$refs.xTable.getRemoveRecords()
              VHBTable.modal.alert(removeRecords.length)
            },
            getUpdateEvent () {
              let updateRecords = this.$refs.xTable.getUpdateRecords()
              VHBTable.modal.alert(updateRecords.length)
            }
          }
        }
        `
      ]
    }
  },
  created () {
    this.$nextTick(() => {
      // 将表格和工具栏进行关联
      this.$refs.xTable.connect(this.$refs.xToolbar)
    })
    this.findList()
  },
  methods: {
    findList () {
      this.loading = true
      return new Promise(resolve => {
        setTimeout(() => {
          const data = this.mockList(600)
          // 阻断 vue 对大数组的监听，避免 vue 绑定大数据造成短暂的卡顿
          if (this.$refs.xTable) {
            this.$refs.xTable.loadData(data)
          }
          resolve()
          this.loading = false
        }, 300)
      })
    },
    mockList (size) {
      const list = []
      for (let index = 0; index < size; index++) {
        list.push({
          name: `名称${index}`,
          sex: '0',
          num: 123,
          age: 18,
          num2: 234,
          rate: 3,
          address: 'shenzhen'
        })
      }
      return list
    },
    insertEvent (row) {
      const xTable = this.$refs.xTable
      const record = {
        checked: false
      }
      xTable.insertAt(record, row).then(({ row }) => {
        console.log(111)
        xTable.setActiveRow(row)
      })
    },
    getInsertEvent () {
      const insertRecords = this.$refs.xTable.getInsertRecords()
      VHBTable.modal.alert(insertRecords.length)
    },
    getRemoveEvent () {
      const removeRecords = this.$refs.xTable.getRemoveRecords()
      VHBTable.modal.alert(removeRecords.length)
    },
    getUpdateEvent () {
      const updateRecords = this.$refs.xTable.getUpdateRecords()
      VHBTable.modal.alert(updateRecords.length)
    }
  }
}
</script>
