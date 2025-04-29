<template>
  <div>
    <h2>{{ $t('app.aside.nav.pulldown') }}</h2>
    <p class="tip">下拉容器，可以非常简单的基于下拉容器去实现各种下拉组件。查看 <router-link class="link" :to="{name: 'VHBAPI', params: {name: 'pulldown'}}">API</router-link></p>

    <p>
      <vhb-pulldown v-model="visible1">
        <template #default>
          <vhb-input v-model="value1" placeholder="可搜索的下拉框" @focus="focusEvent1" @keyup="keyupEvent1"></vhb-input>
        </template>
        <template #dropdown>
          <div class="my-dropdown1">
            <div class="list-item1" v-for="item in list1" :key="item.value" @click="selectEvent1(item)">
              <i class="fa fa-user-o"></i>
              <span>{{ item.label }}</span>
            </div>
          </div>
        </template>
      </vhb-pulldown>

      <vhb-pulldown ref="xDown2">
        <template #default>
          <vhb-input v-model="value2" placeholder="可搜索的大数据下拉框" @focus="focusEvent2" @keyup="keyupEvent2"></vhb-input>
        </template>
        <template #dropdown>
          <vhb-list height="200" class="my-dropdown2" :data="list2" auto-resize>
            <template #default="{ items }">
              <div class="list-item2" v-for="item in items" :key="item.value" @click="selectEvent2(item)">
                <i class="fa fa-envelope-o"></i>
                <span>{{ item.label }}</span>
              </div>
            </template>
          </vhb-list>
        </template>
      </vhb-pulldown>

      <vhb-pulldown ref="xDown3" destroy-on-close>
        <template #default>
          <vhb-button icon="fa fa-table" @click="clickEvent3">切换下拉表格</vhb-button>
        </template>
        <template #dropdown>
          <div class="my-dropdown3">
            <vhb-table
              auto-resize
              :data="tableData3">
              <vhb-column field="name" title="Name"></vhb-column>
              <vhb-column field="role" title="Role"></vhb-column>
              <vhb-column field="sex" title="Sex"></vhb-column>
            </vhb-table>
          </div>
        </template>
      </vhb-pulldown>

      <vhb-pulldown ref="xDown4" transfer>
        <template #default>
          <vhb-input v-model="value4" suffix-icon="fa fa-search" placeholder="实现下拉分页表格" @keyup="keyupEvent4" @focus="focusEvent4" @suffix-click="suffixClick4"></vhb-input>
        </template>
        <template #dropdown>
          <div class="my-dropdown4">
            <vhb-grid
              border
              auto-resize
              height="auto"
              :row-config="{isHover: true}"
              :loading="loading4"
              :pager-config="tablePage4"
              :data="tableData4"
              :columns="tableColumn4"
              @cell-click="cellClickEvent4"
              @page-change="pageChangeEvent4">
            </vhb-grid>
          </div>
        </template>
      </vhb-pulldown>
    </p>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <pre-code class="html">{{ demoCodes[0] }}</pre-code>
      <pre-code class="javascript">{{ demoCodes[1] }}</pre-code>
      <pre-code class="css">{{ demoCodes[2] }}</pre-code>
    </pre>
  </div>
</template>

<script>
export default {
  data () {
    return {
      visible1: false,
      value1: '',
      list1: [],
      value2: '',
      list2: [],
      tableData3: [
        { name: 'Test1', role: '前端', sex: '男' },
        { name: 'Test2', role: '后端', sex: '男' },
        { name: 'Test3', role: '测试', sex: '男' },
        { name: 'Test4', role: '设计师', sex: '女' }
      ],
      value4: '',
      tableColumn4: [
        { field: 'name', title: 'Name' },
        { field: 'role', title: 'Role' },
        { field: 'sex', title: 'Sex' }
      ],
      loading4: false,
      tableData4: [],
      tableList4: [
        { name: 'Test1', role: '前端', sex: '男' },
        { name: 'Test2', role: '后端', sex: '男' },
        { name: 'Test3', role: '测试', sex: '男' },
        { name: 'Test4', role: '设计师', sex: '女' },
        { name: 'Test5', role: '前端', sex: '男' },
        { name: 'Test6', role: '前端', sex: '男' },
        { name: 'Test7', role: '前端', sex: '男' }
      ],
      tablePage4: {
        total: 0,
        currentPage: 1,
        pageSize: 10
      },
      demoCodes: [
        `
        <p>
          <vhb-pulldown v-model="visible1">
            <template #default>
              <vhb-input v-model="value1" placeholder="可搜索的下拉框" @focus="focusEvent1" @keyup="keyupEvent1"></vhb-input>
            </template>
            <template #dropdown>
              <div class="my-dropdown1">
                <div class="list-item1" v-for="item in list1" :key="item.value" @click="selectEvent1(item)">
                  <i class="fa fa-user-o"></i>
                  <span>{{ item.label }}</span>
                </div>
              </div>
            </template>
          </vhb-pulldown>

          <vhb-pulldown ref="xDown2">
            <template #default>
              <vhb-input v-model="value2" placeholder="可搜索的大数据下拉框" @focus="focusEvent2" @keyup="keyupEvent2"></vhb-input>
            </template>
            <template #dropdown>
              <vhb-list height="200" class="my-dropdown2" :data="list2" auto-resize>
                <template #default="{ items }">
                  <div class="list-item2" v-for="item in items" :key="item.value" @click="selectEvent2(item)">
                    <i class="fa fa-envelope-o"></i>
                    <span>{{ item.label }}</span>
                  </div>
                </template>
              </vhb-list>
            </template>
          </vhb-pulldown>

          <vhb-pulldown ref="xDown3" destroy-on-close>
            <template #default>
              <vhb-button icon="fa fa-table" @click="clickEvent3">切换下拉表格</vhb-button>
            </template>
            <template #dropdown>
              <div class="my-dropdown3">
                <vhb-table
                  auto-resize
                  :data="tableData3">
                  <vhb-column field="name" title="Name"></vhb-column>
                  <vhb-column field="role" title="Role"></vhb-column>
                  <vhb-column field="sex" title="Sex"></vhb-column>
                </vhb-table>
              </div>
            </template>
          </vhb-pulldown>

          <vhb-pulldown ref="xDown4" transfer>
            <template #default>
              <vhb-input v-model="value4" suffix-icon="fa fa-search" placeholder="实现下拉分页表格" @keyup="keyupEvent4" @focus="focusEvent4" @suffix-click="suffixClick4"></vhb-input>
            </template>
            <template #dropdown>
              <div class="my-dropdown4">
                <vhb-grid
                  border
                  auto-resize
                  height="auto"
                  :row-config="{isHover: true}"
                  :loading="loading4"
                  :pager-config="tablePage4"
                  :data="tableData4"
                  :columns="tableColumn4"
                  @cell-click="cellClickEvent4"
                  @page-change="pageChangeEvent4">
                </vhb-grid>
              </div>
            </template>
          </vhb-pulldown>
        </p>
        `,
        `
        export default {
          data () {
            return {
              visible1: false,
              value1: '',
              list1: [],
              value2: '',
              list2: [],
              tableData3: [
                { name: 'Test1', role: '前端', sex: '男' },
                { name: 'Test2', role: '后端', sex: '男' },
                { name: 'Test3', role: '测试', sex: '男' },
                { name: 'Test4', role: '设计师', sex: '女' }
              ],
              value4: '',
              tableColumn4: [
                { field: 'name', title: 'Name' },
                { field: 'role', title: 'Role' },
                { field: 'sex', title: 'Sex' }
              ],
              loading4: false,
              tableData4: [],
              tableList4: [
                { name: 'Test1', role: '前端', sex: '男' },
                { name: 'Test2', role: '后端', sex: '男' },
                { name: 'Test3', role: '测试', sex: '男' },
                { name: 'Test4', role: '设计师', sex: '女' },
                { name: 'Test5', role: '前端', sex: '男' },
                { name: 'Test6', role: '前端', sex: '男' },
                { name: 'Test7', role: '前端', sex: '男' }
              ],
              tablePage4: {
                total: 0,
                currentPage: 1,
                pageSize: 10
              }
            }
          },
          created () {
            const list1 = []
            const list2 = []
            for (let index = 0; index < 20; index++) {
              list1.push({ label: \`选项\${index}\`, value: index })
            }
            for (let index = 0; index < 2000; index++) {
              list2.push({ label: \`选项\${index}\`, value: index })
            }
            this.data1 = list1
            this.list1 = list1
            this.data2 = list2
            this.list2 = list2
            this.keyupEvent4()
          },
          methods: {
            focusEvent1 () {
              this.visible1 = true
            },
            keyupEvent1 () {
              const { value1 } = this
              this.list1 = value1 ? this.data1.filter(item => item.label.indexOf(value1) > -1) : this.data1
            },
            selectEvent1 (item) {
              this.value1 = item.label
              this.visible1 = false
              this.list1 = this.data1
            },
            focusEvent2 () {
              this.$refs.xDown2.showPanel()
            },
            keyupEvent2 () {
              const { value2 } = this
              this.list2 = value2 ? this.data2.filter(item => item.label.indexOf(value2) > -1) : this.data2
            },
            selectEvent2 (item) {
              this.value2 = item.label
              this.$refs.xDown2.hidePanel().then(() => {
                this.list2 = this.data2
              })
            },
            clickEvent3 () {
              this.$refs.xDown3.togglePanel()
            },
            focusEvent4 () {
              this.$refs.xDown4.showPanel()
            },
            keyupEvent4 () {
              const { value4 } = this
              this.loading4 = true
              setTimeout(() => {
                this.loading4 = false
                if (value4) {
                  this.tableData4 = this.tableList4.filter(row => row.name.indexOf(value4) > -1)
                } else {
                  this.tableData4 = this.tableList4.slice(0)
                }
              }, 100)
            },
            suffixClick4 () {
              this.$refs.xDown4.togglePanel()
            },
            cellClickEvent4 ({ row }) {
              this.value4 = row.name
              this.$refs.xDown4.hidePanel()
            },
            pageChangeEvent4 ({ currentPage, pageSize }) {
              this.tablePage4.currentPage = currentPage
              this.tablePage4.pageSize = pageSize
            }
          }
        }
        `,
        `
        .my-dropdown1 {
          height: 200px;
          overflow: auto;
          border-radius: 4px;
          border: 1px solid #dcdfe6;
          background-color: #fff;
        }
        .list-item1:hover {
          background-color: #f5f7fa;
        }
        .my-dropdown2 {
          border-radius: 4px;
          border: 1px solid #dcdfe6;
          background-color: #fff;
        }
        .list-item2:hover {
          background-color: #f5f7fa;
        }
        .my-dropdown3 {
          width: 400px;
          background-color: #fff;
          box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.1);
        }
        .my-dropdown4 {
          width: 600px;
          height: 300px;
          background-color: #fff;
          box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.1);
        }
        `
      ]
    }
  },
  created () {
    const list1 = []
    const list2 = []
    for (let index = 0; index < 20; index++) {
      list1.push({ label: `选项${index}`, value: index })
    }
    for (let index = 0; index < 2000; index++) {
      list2.push({ label: `选项${index}`, value: index })
    }
    this.data1 = list1
    this.list1 = list1
    this.data2 = list2
    this.list2 = list2
    this.keyupEvent4()
  },
  methods: {
    focusEvent1 () {
      this.visible1 = true
    },
    keyupEvent1 () {
      const { value1 } = this
      this.list1 = value1 ? this.data1.filter(item => item.label.indexOf(value1) > -1) : this.data1
    },
    selectEvent1 (item) {
      this.value1 = item.label
      this.visible1 = false
      this.list1 = this.data1
    },
    focusEvent2 () {
      this.$refs.xDown2.showPanel()
    },
    keyupEvent2 () {
      const { value2 } = this
      this.list2 = value2 ? this.data2.filter(item => item.label.indexOf(value2) > -1) : this.data2
    },
    selectEvent2 (item) {
      this.value2 = item.label
      this.$refs.xDown2.hidePanel().then(() => {
        this.list2 = this.data2
      })
    },
    clickEvent3 () {
      this.$refs.xDown3.togglePanel()
    },
    focusEvent4 () {
      this.$refs.xDown4.showPanel()
    },
    keyupEvent4 () {
      const { value4 } = this
      this.loading4 = true
      setTimeout(() => {
        this.loading4 = false
        if (value4) {
          this.tableData4 = this.tableList4.filter(row => row.name.indexOf(value4) > -1)
        } else {
          this.tableData4 = this.tableList4.slice(0)
        }
      }, 100)
    },
    suffixClick4 () {
      this.$refs.xDown4.togglePanel()
    },
    cellClickEvent4 ({ row }) {
      this.value4 = row.name
      this.$refs.xDown4.hidePanel()
    },
    pageChangeEvent4 ({ currentPage, pageSize }) {
      this.tablePage4.currentPage = currentPage
      this.tablePage4.pageSize = pageSize
    }
  }
}
</script>

<style lang="css" scoped>
.my-dropdown1 {
  height: 200px;
  overflow: auto;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  background-color: #fff;
}
.list-item1:hover {
  background-color: #f5f7fa;
}
.my-dropdown2 {
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  background-color: #fff;
}
.list-item2:hover {
  background-color: #f5f7fa;
}
.my-dropdown3 {
  width: 400px;
  background-color: #fff;
  box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.1);
}
.my-dropdown4 {
  width: 600px;
  height: 300px;
  background-color: #fff;
  box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.1);
}
</style>
