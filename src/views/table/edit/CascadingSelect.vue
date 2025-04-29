<template>
  <div>
    <p class="tip">实现简单的级联下拉选项列表<span class="red">（具体请自行实现，该示例仅供参考）</span></p>

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
      <vhb-column field="attr3" title="Project type" :edit-render="{}">
        <template #default="{ row }">
          <span>{{ formatProjectType(row.attr3) }}</span>
        </template>
        <template #edit="{ row }">
          <vhb-select v-model="row.attr3" clearable transfer @change="ptypeChangeEvent({ row })">
            <vhb-option v-for="item in ptypeList" :key="item.value" :value="item.value" :label="item.label"></vhb-option>
          </vhb-select>
        </template>
      </vhb-column>
      <vhb-column field="attr4" title="Project name" :formatter="formatPanmeLabel" :edit-render="{}">
        <template #edit="{ row }">
          <vhb-select v-model="row.attr4" clearable transfer>
            <vhb-option v-for="item in pnameList" :key="item.value" :value="item.value" :label="item.label"></vhb-option>
          </vhb-select>
        </template>
      </vhb-column>
      <vhb-column field="date12" title="Date" :edit-render="{name: '$input', props: {type: 'date'}}">
        <template #edit="{ row }">
          <vhb-input v-model="row.date12" type="date" placeholder="请选择日期" transfer></vhb-input>
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
import HBUtils from 'hb-js-utils'

export default {
  data () {
    return {
      tableData: [
        { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', attr3: '', attr4: '', age: 28, address: 'Shenzhen', date12: '', date13: '' },
        { id: 10002, name: 'Test2', nickname: 'T2', role: 'Designer', attr3: '', attr4: '', age: 22, address: 'Guangzhou', date12: '', date13: '2020-08-20' }
      ],
      ptypeList: [
        { label: '项目1', value: '1' },
        { label: '项目2', value: '2' },
        { label: '项目3', value: '3' }
      ],
      pnameList: [],
      cachePnameList: [],
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
          <vhb-column field="attr3" title="Project type" :edit-render="{}">
            <template #default="{ row }">
              <span>{{ formatProjectType(row.attr3) }}</span>
            </template>
            <template #edit="{ row }">
              <vhb-select v-model="row.attr3" clearable transfer @change="ptypeChangeEvent({ row })">
                <vhb-option v-for="item in ptypeList" :key="item.value" :value="item.value" :label="item.label"></vhb-option>
              </vhb-select>
            </template>
          </vhb-column>
          <vhb-column field="attr4" title="Project name" :formatter="formatPanmeLabel" :edit-render="{}">
            <template #edit="{ row }">
              <vhb-select v-model="row.attr4" clearable transfer>
                <vhb-option v-for="item in pnameList" :key="item.value" :value="item.value" :label="item.label"></vhb-option>
              </vhb-select>
            </template>
          </vhb-column>
          <vhb-column field="date12" title="Date" :edit-render="{name: '$input', props: {type: 'date'}}">
            <template #edit="{ row }">
              <vhb-input v-model="row.date12" type="date" placeholder="请选择日期" transfer></vhb-input>
            </template>
          </vhb-column>
        </vhb-table>
        `,
        `
        import HBUtils from 'hb-js-utils'
        
        export default {
          data () {
            return {
              tableData: [
                { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', attr3: '', attr4: '', age: 28, address: 'Shenzhen', date12: '', date13: '' },
                { id: 10002, name: 'Test2', nickname: 'T2', role: 'Designer', attr3: '', attr4: '', age: 22, address: 'Guangzhou', date12: '', date13: '2020-08-20' }
              ],
              ptypeList: [
                { label: '项目1', value: '1' },
                { label: '项目2', value: '2' },
                { label: '项目3', value: '3' }
              ],
              pnameList: [],
              cachePnameList: []
            }
          },
          methods: {
            formatProjectType (value) {
              const item = this.ptypeList.find(item => item.value === value)
              return item ? item.label : value
            },
            insertEvent () {
              const $table = this.$refs.xTable
              const record = {}
              $table.insert(record)
            },
            // 格式化显示名称
            formatPanmeLabel ({ cellValue, row }) {
              let ptype = row.attr3
              let ptypeItem = this.cachePnameList.find(item => item.ptype === ptype)
              if (ptypeItem && ptypeItem.pnameList) {
                let pnameItem = ptypeItem.pnameList.find(item => item.value === cellValue)
                if (pnameItem) {
                  return pnameItem.label
                }
              }
              return ''
            },
            // 更新级联选项列表
            updatePnameList (row) {
              let ptype = row.attr3
              let pnameList = []
              if (ptype) {
                let item = this.cachePnameList.find(item => item.ptype === ptype)
                if (item) {
                  pnameList = item.pnameList
                } else {
                  // 模拟后台数据
                  Array.from(new Array(HBUtils.random(3, 8))).forEach((item, index) => {
                    pnameList.push({
                      label: \`\${ptype}-名称\${index}\`,
                      value: \`\${ptype}_\${index}\`
                    })
                  })
                  this.cachePnameList.push({ ptype, pnameList })
                }
              }
              this.pnameList = pnameList
            },
            ptypeChangeEvent ({ row }) {
              // 类型切换时更新级联的下拉数据
              row.attr4 = ''
              this.updatePnameList(row)
            },
            editActivedEvent ({ row }) {
              this.updatePnameList(row)
            }
          }
        }
        `
      ]
    }
  },
  methods: {
    formatProjectType (value) {
      const item = this.ptypeList.find(item => item.value === value)
      return item ? item.label : value
    },
    insertEvent () {
      const $table = this.$refs.xTable
      const record = {}
      $table.insert(record)
    },
    // 格式化显示名称
    formatPanmeLabel ({ cellValue, row }) {
      const ptype = row.attr3
      const ptypeItem = this.cachePnameList.find(item => item.ptype === ptype)
      if (ptypeItem && ptypeItem.pnameList) {
        const pnameItem = ptypeItem.pnameList.find(item => item.value === cellValue)
        if (pnameItem) {
          return pnameItem.label
        }
      }
      return ''
    },
    // 更新级联选项列表
    updatePnameList (row) {
      const ptype = row.attr3
      let pnameList = []
      if (ptype) {
        const item = this.cachePnameList.find(item => item.ptype === ptype)
        if (item) {
          pnameList = item.pnameList
        } else {
          // 模拟后台数据
          Array.from(new Array(HBUtils.random(3, 8))).forEach((item, index) => {
            pnameList.push({
              label: `${ptype}-名称${index}`,
              value: `${ptype}_${index}`
            })
          })
          this.cachePnameList.push({ ptype, pnameList })
        }
      }
      this.pnameList = pnameList
    },
    ptypeChangeEvent ({ row }) {
      // 类型切换时更新级联的下拉数据
      row.attr4 = ''
      this.updatePnameList(row)
    },
    editActivedEvent ({ row }) {
      this.updatePnameList(row)
    }
  }
}
</script>
