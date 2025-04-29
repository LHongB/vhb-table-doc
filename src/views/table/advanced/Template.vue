<template>
  <div>
    <p class="tip">使用 <table-column-api-link prop="slot"/> 自定义模板；可以实现自定义任意内容及 html 元素<br>
      <table-column-api-link prop="default"/>：自定义内容模板（提前格式化（最优） > <table-column-api-link prop="formatter"/>（field值发生变化时） > <table-column-api-link prop="slots"/>（即时））<br>
      <table-column-api-link prop="header"/>：自定义表头模板<br>
      <table-column-api-link prop="footer"/>：自定义表尾模板<br>
      <table-column-api-link prop="filter"/>：自定义筛选模板（建议使用<router-link :to="{name: 'RendererAPI'}">渲染器</router-link>，可以更好的复用）<br>
      <table-column-api-link prop="edit"/>：自定义可编辑模板（建议使用<router-link :to="{name: 'RendererAPI'}">渲染器</router-link>，可以更好的复用）
    </p>

    <vhb-toolbar>
      <template #buttons>
        <vhb-button>{{ $t('app.body.button.insert') }}</vhb-button>
        <vhb-button>
          <template #default>下拉按钮</template>
          <template #dropdowns>
            <vhb-button>删除</vhb-button>
            <vhb-button>保存</vhb-button>
          </template>
        </vhb-button>
      </template>
      <template #tools>
        <vhb-input v-model="value2" placeholder="搜索"></vhb-input>
      </template>
    </vhb-toolbar>

    <vhb-table
      border
      resizable
      show-footer
      ref="xTable"
      height="500"
      :footer-method="footerMethod"
      :data="tableData"
      @checkbox-change="checkboxChangeEvent"
      @checkbox-all="checkboxChangeEvent">
      <vhb-column type="checkbox" width="60"></vhb-column>
      <vhb-column type="seq" width="160" :resizable="false" show-overflow>
        <template #header>
          <div class="first-col">
            <div class="first-col-top">名称</div>
            <div class="first-col-bottom">序号</div>
          </div>
        </template>
        <template #footer="{ items, _columnIndex }">
          <vhb-button status="primary" @click="clickFooterItem(items, _columnIndex)" size="mini">支持</vhb-button>
          <vhb-button @click="clickFooterItem(items, _columnIndex)" size="mini">test abc</vhb-button>
        </template>
        <template #default="{ row }">
          <vhb-button @click="showDetailEvent(row)">弹框{{ row.name }}</vhb-button>
        </template>
      </vhb-column>
      <vhb-column field="name" title="app.body.label.name" sortable>
        <template #default="{ row }">
          <a href="https://github.com/x-extends/vhb-table" target="_black">我是超链接：{{ row.name }}</a>
        </template>
      </vhb-column>
      <vhb-column field="role" title="Role">
        <template #header>
          <span style="color: red;">自定义头部</span>
        </template>
        <template #footer="{ items, _columnIndex }">
          <span style="color: red">累计：{{ items[_columnIndex] }}</span>
        </template>
        <template #filter="{ $panel, column }">
          <template v-for="(option, index) in column.filters">
            <input class="my-filter" type="type" v-model="option.data" :key="index" @input="changeFilterEvent($event, option, $panel)">
          </template>
        </template>
        <template #default>
          <vhb-button type="text">自定义按钮</vhb-button>
        </template>
      </vhb-column>
      <vhb-column field="time" title="Time">
        <template #header>
          <vhb-input v-model="value1" placeholder="放个输入框" size="mini"></vhb-input>
        </template>
        <template #default="{ row, rowIndex }">
          <template v-if="rowIndex === 2">
            <vhb-switch v-model="row.flag"></vhb-switch>
          </template>
          <template v-else-if="rowIndex === 3">
            <vhb-switch v-model="row.flag" open-label="开" close-label="关"></vhb-switch>
          </template>
          <template v-else>
            <span>{{ formatDate(row.time) }}</span>
          </template>
        </template>
      </vhb-column>
      <vhb-column field="sex" title="Sex" show-overflow>
        <template #default="{ row }">
          <vhb-select v-model="row.sex" transfer>
            <vhb-option value="Man" label="Man"></vhb-option>
            <vhb-option value="Women" label="Women"></vhb-option>
          </vhb-select>
        </template>
      </vhb-column>
      <vhb-column field="html1" title="Html片段" width="200" show-overflow>
        <template #default="{ row }">
          <span v-html="row.html1"></span>
        </template>
        <template #footer>
          <span>
            <img src="https://pic2.zhimg.com/50/v2-f7031359103859e1ed38559715ef5f3f_hd.gif" style="width: 36px;">自定义模板<img src="https://n.sinaimg.cn/sinacn17/w120h120/20180314/89fc-fyscsmv5911424.gif" style="width: 30px;">
          </span>
        </template>
      </vhb-column>
      <vhb-column field="img1" title="图片路径" width="120">
        <template #default="{ row }">
          <img v-if="row.img1" :src="row.img1" style="width: 100px;">
          <span v-else>无</span>
        </template>
      </vhb-column>
    </vhb-table>

    <vhb-pager
      perfect
      :current-page.sync="tablePage.currentPage"
      :page-size.sync="tablePage.pageSize"
      :total="tablePage.total"
      :layouts="['PrevJump', 'PrevPage', 'Number', 'NextPage', 'NextJump', 'Sizes', 'FullJump', 'Total']">
      <template #left>
        <span class="page-left">
          <vhb-checkbox v-model="isAllChecked" :indeterminate="isIndeterminate" @change="changeAllEvent"></vhb-checkbox>
          <span class="select-count">自定义模板 {{ selectRecords.length }} 条</span>
          <vhb-button>修改</vhb-button>
          <vhb-button>管理</vhb-button>
          <vhb-button>删除</vhb-button>
          <vhb-button size="small">
            <template #default>更多操作</template>
            <template #dropdowns>
              <vhb-button type="text">批量修改</vhb-button>
              <vhb-button type="text">批量管理</vhb-button>
              <vhb-button type="text">批量删除</vhb-button>
            </template>
          </vhb-button>
        </span>
      </template>
      <template #right>
        <img src="https://pic2.zhimg.com/50/v2-f7031359103859e1ed38559715ef5f3f_hd.gif" height="34">
        <img src="https://pic2.zhimg.com/50/v2-f7031359103859e1ed38559715ef5f3f_hd.gif" height="34">
        <img src="https://pic2.zhimg.com/50/v2-f7031359103859e1ed38559715ef5f3f_hd.gif" height="34">
      </template>
    </vhb-pager>

    <vhb-modal v-model="showDetails" title="查看详情" width="800" height="400" resize>
      <template #default>{{ selectRow ? selectRow.name : '' }}</template>
    </vhb-modal>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <pre-code class="xml">{{ demoCodes[0] }}</pre-code>
      <pre-code class="javascript">{{ demoCodes[1] }}</pre-code>
      <pre-code class="css">{{ demoCodes[2] }}</pre-code>
    </pre>
  </div>
</template>

<script>
import HBUtils from 'hb-js-utils'
import VHBTable from 'vhb-table'

export default {
  data () {
    return {
      value1: '',
      value2: '',
      showDetails: false,
      selectRow: null,
      isAllChecked: false,
      isIndeterminate: false,
      selectRecords: [],
      tableData: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc', flag: false, time: 1600261774531, html1: '<span style="color:red">自定义HTML</span>', img1: 'https://5b0988e595225.cdn.sohucs.com/images/20181014/dce7cdaa130440e8b609fad083877ef3.gif' },
        { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou', flag: false, time: 1600261774531, html1: '', img1: 'https://5b0988e595225.cdn.sohucs.com/images/20181014/dce7cdaa130440e8b609fad083877ef3.gif' },
        { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai', flag: true, time: 1600261774531, html1: '<span style="color:orange">自定义HTML</span>', img1: 'https://pic2.zhimg.com/50/v2-f7031359103859e1ed38559715ef5f3f_hd.gif' },
        { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc', flag: false, time: 1600261774531, html1: '', img1: 'https://pic2.zhimg.com/50/v2-f7031359103859e1ed38559715ef5f3f_hd.gif' },
        { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai', flag: true, time: 1600261774531, html1: '', img1: 'https://5b0988e595225.cdn.sohucs.com/images/20181014/dce7cdaa130440e8b609fad083877ef3.gif' },
        { id: 10006, name: 'Test6', role: 'Designer', sex: 'Women', age: 21, address: 'test abc', flag: true, time: 1600261774531, html1: '<span style="color:blue">自定义HTML</span>', img1: 'https://pic2.zhimg.com/50/v2-f7031359103859e1ed38559715ef5f3f_hd.gif' },
        { id: 10007, name: 'Test7', role: 'Test', sex: 'Man', age: 29, address: 'test abc', flag: false, time: 1600261774531, html1: '', img1: 'https://5b0988e595225.cdn.sohucs.com/images/20181014/dce7cdaa130440e8b609fad083877ef3.gif' },
        { id: 10008, name: 'Test8', role: 'Develop', sex: 'Man', age: 35, address: 'test abc', flag: false, time: 1600261774531, html1: '', img1: 'https://5b0988e595225.cdn.sohucs.com/images/20181014/dce7cdaa130440e8b609fad083877ef3.gif' }
      ],
      tablePage: {
        total: 0,
        currentPage: 1,
        pageSize: 10
      },
      demoCodes: [
        `
        <vhb-toolbar>
          <template #buttons>
            <vhb-button>{{ $t('app.body.button.insert') }}</vhb-button>
            <vhb-button>
              <template #default>下拉按钮</template>
              <template #dropdowns>
                <vhb-button>删除</vhb-button>
                <vhb-button>保存</vhb-button>
              </template>
            </vhb-button>
          </template>
          <template #tools>
            <vhb-input v-model="value2" placeholder="搜索"></vhb-input>
          </template>
        </vhb-toolbar>

        <vhb-table
          border
          resizable
          show-footer
          ref="xTable"
          height="500"
          :footer-method="footerMethod"
          :data="tableData"
          @checkbox-change="checkboxChangeEvent"
          @checkbox-all="checkboxChangeEvent">
          <vhb-column type="checkbox" width="60"></vhb-column>
          <vhb-column type="seq" width="160" :resizable="false" show-overflow>
            <template #header>
              <div class="first-col">
                <div class="first-col-top">名称</div>
                <div class="first-col-bottom">序号</div>
              </div>
            </template>
            <template #footer="{ items, _columnIndex }">
              <vhb-button status="primary" @click="clickFooterItem(items, _columnIndex)" size="mini">支持</vhb-button>
              <vhb-button @click="clickFooterItem(items, _columnIndex)" size="mini">test abc</vhb-button>
            </template>
            <template #default="{ row }">
              <vhb-button @click="showDetailEvent(row)">弹框{{ row.name }}</vhb-button>
            </template>
          </vhb-column>
          <vhb-column field="name" title="app.body.label.name" sortable>
            <template #default="{ row }">
              <a href="https://github.com/x-extends/vhb-table" target="_black">我是超链接：{{ row.name }}</a>
            </template>
          </vhb-column>
          <vhb-column field="role" title="Role">
            <template #header>
              <span style="color: red;">自定义头部</span>
            </template>
            <template #footer="{ items, _columnIndex }">
              <span style="color: red">累计：{{ items[_columnIndex] }}</span>
            </template>
            <template #filter="{ $panel, column }">
              <template v-for="(option, index) in column.filters">
                <input class="my-filter" type="type" v-model="option.data" :key="index" @input="changeFilterEvent($event, option, $panel)">
              </template>
            </template>
            <template #default>
              <vhb-button type="text">自定义按钮</vhb-button>
            </template>
          </vhb-column>
          <vhb-column field="time" title="Time">
            <template #header>
              <vhb-input v-model="value1" placeholder="放个输入框" size="mini"></vhb-input>
            </template>
            <template #default="{ row, rowIndex }">
              <template v-if="rowIndex === 2">
                <vhb-switch v-model="row.flag"></vhb-switch>
              </template>
              <template v-else-if="rowIndex === 3">
                <vhb-switch v-model="row.flag" open-label="开" close-label="关"></vhb-switch>
              </template>
              <template v-else>
                <span>{{ formatDate(row.time) }}</span>
              </template>
            </template>
          </vhb-column>
          <vhb-column field="sex" title="Sex" show-overflow>
            <template #default="{ row }">
              <vhb-select v-model="row.sex" transfer>
                <vhb-option value="Man" label="Man"></vhb-option>
                <vhb-option value="Women" label="Women"></vhb-option>
              </vhb-select>
            </template>
          </vhb-column>
          <vhb-column field="html1" title="Html片段" width="200" show-overflow>
            <template #default="{ row }">
              <span v-html="row.html1"></span>
            </template>
            <template #footer>
              <span>
                <img src="https://pic2.zhimg.com/50/v2-f7031359103859e1ed38559715ef5f3f_hd.gif" style="width: 36px;">自定义模板<img src="https://n.sinaimg.cn/sinacn17/w120h120/20180314/89fc-fyscsmv5911424.gif" style="width: 30px;">
              </span>
            </template>
          </vhb-column>
          <vhb-column field="img1" title="图片路径" width="120">
            <template #default="{ row }">
              <img v-if="row.img1" :src="row.img1" style="width: 100px;">
              <span v-else>无</span>
            </template>
          </vhb-column>
        </vhb-table>

        <vhb-pager
          perfect
          :current-page.sync="tablePage.currentPage"
          :page-size.sync="tablePage.pageSize"
          :total="tablePage.total"
          :layouts="['PrevJump', 'PrevPage', 'Number', 'NextPage', 'NextJump', 'Sizes', 'FullJump', 'Total']">
          <template #left>
            <span class="page-left">
              <vhb-checkbox v-model="isAllChecked" :indeterminate="isIndeterminate" @change="changeAllEvent"></vhb-checkbox>
              <span class="select-count">自定义模板 {{ selectRecords.length }} 条</span>
              <vhb-button>修改</vhb-button>
              <vhb-button>管理</vhb-button>
              <vhb-button>删除</vhb-button>
              <vhb-button size="small">
                <template #default>更多操作</template>
                <template #dropdowns>
                  <vhb-button type="text">批量修改</vhb-button>
                  <vhb-button type="text">批量管理</vhb-button>
                  <vhb-button type="text">批量删除</vhb-button>
                </template>
              </vhb-button>
            </span>
          </template>
          <template #right>
            <img src="https://pic2.zhimg.com/50/v2-f7031359103859e1ed38559715ef5f3f_hd.gif" height="34">
            <img src="https://pic2.zhimg.com/50/v2-f7031359103859e1ed38559715ef5f3f_hd.gif" height="34">
            <img src="https://pic2.zhimg.com/50/v2-f7031359103859e1ed38559715ef5f3f_hd.gif" height="34">
          </template>
        </vhb-pager>

        <vhb-modal v-model="showDetails" title="查看详情" width="800" height="400" resize>
          <template #default>{{ selectRow ? selectRow.name : '' }}</template>
        </vhb-modal>
        `,
        `
        import HBUtils from 'hb-js-utils'
        import VHBTable from 'vhb-table'
        
        export default {
          data () {
            return {
              value1: '',
              value2: '',
              showDetails: false,
              selectRow: null,
              isAllChecked: false,
              isIndeterminate: false,
              selectRecords: [],
              tableData: [
                { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc', flag: false, time: 1600261774531, html1: '<span style="color:red">自定义HTML</span>', img1: 'https://5b0988e595225.cdn.sohucs.com/images/20181014/dce7cdaa130440e8b609fad083877ef3.gif' },
                { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou', flag: false, time: 1600261774531, html1: '', img1: 'https://5b0988e595225.cdn.sohucs.com/images/20181014/dce7cdaa130440e8b609fad083877ef3.gif' },
                { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai', flag: true, time: 1600261774531, html1: '<span style="color:orange">自定义HTML</span>', img1: 'https://pic2.zhimg.com/50/v2-f7031359103859e1ed38559715ef5f3f_hd.gif' },
                { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc', flag: false, time: 1600261774531, html1: '', img1: 'https://pic2.zhimg.com/50/v2-f7031359103859e1ed38559715ef5f3f_hd.gif' },
                { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai', flag: true, time: 1600261774531, html1: '', img1: 'https://5b0988e595225.cdn.sohucs.com/images/20181014/dce7cdaa130440e8b609fad083877ef3.gif' },
                { id: 10006, name: 'Test6', role: 'Designer', sex: 'Women', age: 21, address: 'test abc', flag: true, time: 1600261774531, html1: '<span style="color:blue">自定义HTML</span>', img1: 'https://pic2.zhimg.com/50/v2-f7031359103859e1ed38559715ef5f3f_hd.gif' },
                { id: 10007, name: 'Test7', role: 'Test', sex: 'Man', age: 29, address: 'test abc', flag: false, time: 1600261774531, html1: '', img1: 'https://5b0988e595225.cdn.sohucs.com/images/20181014/dce7cdaa130440e8b609fad083877ef3.gif' },
                { id: 10008, name: 'Test8', role: 'Develop', sex: 'Man', age: 35, address: 'test abc', flag: false, time: 1600261774531, html1: '', img1: 'https://5b0988e595225.cdn.sohucs.com/images/20181014/dce7cdaa130440e8b609fad083877ef3.gif' }
              ],
              tablePage: {
                total: 0,
                currentPage: 1,
                pageSize: 10
              }
            }
          },
          methods: {
            formatDate (value) {
              return HBUtils.toDateString(value, 'yyyy-MM-dd HH:mm:ss.S')
            },
            changeFilterEvent (event, option, $panel) {
              $panel.changeOption(event, !!option.data, option)
            },
            showDetailEvent (row) {
              this.selectRow = row
              this.showDetails = true
            },
            clickFooterItem (items, _columnIndex) {
              VHBTable.modal.alert(\`点击了表尾第\${_columnIndex}列\`)
            },
            checkboxChangeEvent () {
              this.isAllChecked = this.$refs.xTable.isAllCheckboxChecked()
              this.isIndeterminate = this.$refs.xTable.isAllCheckboxIndeterminate()
              this.selectRecords = this.$refs.xTable.getCheckboxRecords()
            },
            changeAllEvent () {
              this.$refs.xTable.setAllCheckboxRow(this.isAllChecked)
              this.selectRecords = this.$refs.xTable.getCheckboxRecords()
            },
            sumNum (list, field) {
              let count = 0
              list.forEach(item => {
                count += Number(item[field])
              })
              return count
            },
            footerMethod ({ columns, data }) {
              return [
                columns.map(column => {
                  if (['num'].includes(column.property)) {
                    return this.sumNum(data, column.property)
                  }
                  return null
                })
              ]
            }
          }
        }
        `,
        `
        .first-col {
          position: relative;
          height: 20px;
        }
        .first-col:before {
          content: "";
          position: absolute;
          left: -15px;
          top: 10px;
          width: 170px;
          height: 1px;
          transform: rotate(18deg);
          background-color: #e8eaec;
        }
        .first-col .first-col-top {
          position: absolute;
          right: 4px;
          top: -10px;
        }
        .first-col .first-col-bottom {
          position: absolute;
          left: 4px;
          bottom: -10px;
        }
        .my-filter {
          margin: 10px;
        }
        .page-left {
          position: absolute;
          left: 10px;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
        }
        `
      ]
    }
  },
  methods: {
    formatDate (value) {
      return HBUtils.toDateString(value, 'yyyy-MM-dd HH:mm:ss.S')
    },
    changeFilterEvent (evnt, option, $panel) {
      $panel.changeOption(evnt, !!option.data, option)
    },
    showDetailEvent (row) {
      this.selectRow = row
      this.showDetails = true
    },
    clickFooterItem (items, _columnIndex) {
      VHBTable.modal.alert(`点击了表尾第${_columnIndex}列`)
    },
    checkboxChangeEvent () {
      this.isAllChecked = this.$refs.xTable.isAllCheckboxChecked()
      this.isIndeterminate = this.$refs.xTable.isAllCheckboxIndeterminate()
      this.selectRecords = this.$refs.xTable.getCheckboxRecords()
    },
    changeAllEvent () {
      this.$refs.xTable.setAllCheckboxRow(this.isAllChecked)
      this.selectRecords = this.$refs.xTable.getCheckboxRecords()
    },
    sumNum (list, field) {
      let count = 0
      list.forEach(item => {
        count += Number(item[field])
      })
      return count
    },
    footerMethod ({ columns, data }) {
      return [
        columns.map(column => {
          if (['num'].includes(column.property)) {
            return this.sumNum(data, column.property)
          }
          return null
        })
      ]
    }
  }
}
</script>

<style scoped>
.first-col {
  position: relative;
  height: 20px;
}
.first-col:before {
  content: "";
  position: absolute;
  left: -15px;
  top: 10px;
  width: 170px;
  height: 1px;
  transform: rotate(18deg);
  background-color: #e8eaec;
}
.first-col .first-col-top {
  position: absolute;
  right: 4px;
  top: -10px;
}
.first-col .first-col-bottom {
  position: absolute;
  left: 4px;
  bottom: -10px;
}
.my-filter {
  margin: 10px;
}
.page-left {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
}
</style>
