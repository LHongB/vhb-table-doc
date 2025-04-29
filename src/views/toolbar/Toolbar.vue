<template>
  <div>
    <h2>{{ $t('app.aside.nav.toolbar') }}</h2>
    <p class="tip">工具栏模块，与表格组合使用，通过调用 <table-api-link prop="connect"/> 方法与表格建立连接</p>

    <p>
      <vhb-toolbar>
        <template #buttons>
          <vhb-button content="默认尺寸"></vhb-button>
          <vhb-button content="下拉按钮">
            <template #dropdowns>
              <vhb-button type="text" content="按钮1"></vhb-button>
              <vhb-button type="text" content="按钮2"></vhb-button>
              <vhb-button type="text" content="按钮3"></vhb-button>
            </template>
          </vhb-button>
        </template>
      </vhb-toolbar>
      <vhb-toolbar size="medium">
        <template #buttons>
          <vhb-button content="中等尺寸"></vhb-button>
          <vhb-button content="下拉按钮">
            <template #dropdowns>
              <vhb-button type="text" content="按钮1"></vhb-button>
              <vhb-button type="text" content="按钮2"></vhb-button>
              <vhb-button type="text" content="按钮3"></vhb-button>
            </template>
          </vhb-button>
        </template>
      </vhb-toolbar>
      <vhb-toolbar size="small">
        <template #buttons>
          <vhb-button content="小型尺寸"></vhb-button>
          <vhb-button content="下拉按钮">
            <template #dropdowns>
              <vhb-button type="text" content="按钮1"></vhb-button>
              <vhb-button type="text" content="按钮2"></vhb-button>
              <vhb-button type="text" content="按钮3"></vhb-button>
            </template>
          </vhb-button>
        </template>
      </vhb-toolbar>
      <vhb-toolbar size="mini">
        <template #buttons>
          <vhb-button content="超小尺寸"></vhb-button>
          <vhb-button content="下拉按钮">
            <template #dropdowns>
              <vhb-button type="text" content="按钮1"></vhb-button>
              <vhb-button type="text" content="按钮2"></vhb-button>
              <vhb-button type="text" content="按钮3"></vhb-button>
            </template>
          </vhb-button>
        </template>
      </vhb-toolbar>
    </p>

    <p>
      <vhb-toolbar perfect>
        <template #buttons>
          <vhb-button type="text" icon="fa fa-plus" content="新增"></vhb-button>
          <vhb-button type="text" icon="fa fa-trash-o" content="删除"></vhb-button>
          <vhb-button type="text" icon="fa fa-save" content="保存"></vhb-button>
        </template>
      </vhb-toolbar>

      <vhb-toolbar perfect>
        <template #buttons>
          <vhb-button icon="fa fa-plus" status="perfect" content="新增"></vhb-button>
          <vhb-button icon="fa fa-trash-o" status="perfect" content="删除"></vhb-button>
          <vhb-button icon="fa fa-save" status="perfect" content="保存"></vhb-button>
        </template>
      </vhb-toolbar>

      <vhb-toolbar ref="xToolbar" custom>
        <template #buttons>
          <vhb-button content="自定义模板"></vhb-button>
          <vhb-button content="按钮2"></vhb-button>
          <vhb-button content="按钮3"></vhb-button>
          <vhb-button content="下拉按钮">
            <template #dropdowns>
              <vhb-button content="按钮1"></vhb-button>
              <vhb-button content="按钮2"></vhb-button>
              <vhb-button content="按钮3"></vhb-button>
            </template>
          </vhb-button>
        </template>
        <template #tools>
          <vhb-button type="text" icon="vhb-icon--question" class="tool-btn"></vhb-button>
          <vhb-button type="text" icon="vhb-icon--funnel" class="tool-btn" @click="funnelEvent"></vhb-button>
        </template>
      </vhb-toolbar>

      <vhb-table ref="xTable" :data="tableData">
        <vhb-column field="name" title="Name"></vhb-column>
        <vhb-column field="role" title="Role"></vhb-column>
        <vhb-column field="sex" title="Sex"></vhb-column>
      </vhb-table>
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
import VHBTable from 'vhb-table'

export default {
  data  () {
    return {
      loading: false,
      tableData: [
        { name: 'Test1', role: '前端', sex: '男' },
        { name: 'Test2', role: '后端', sex: '男' },
        { name: 'Test3', role: '测试', sex: '男' },
        { name: 'Test4', role: '设计师', sex: '女' }
      ],
      demoCodes: [
        `
        <p>
          <vhb-toolbar>
            <template #buttons>
              <vhb-button content="默认尺寸"></vhb-button>
              <vhb-button content="下拉按钮">
                <template #dropdowns>
                  <vhb-button type="text" content="按钮1"></vhb-button>
                  <vhb-button type="text" content="按钮2"></vhb-button>
                  <vhb-button type="text" content="按钮3"></vhb-button>
                </template>
              </vhb-button>
            </template>
          </vhb-toolbar>
          <vhb-toolbar size="medium">
            <template #buttons>
              <vhb-button content="中等尺寸"></vhb-button>
              <vhb-button content="下拉按钮">
                <template #dropdowns>
                  <vhb-button type="text" content="按钮1"></vhb-button>
                  <vhb-button type="text" content="按钮2"></vhb-button>
                  <vhb-button type="text" content="按钮3"></vhb-button>
                </template>
              </vhb-button>
            </template>
          </vhb-toolbar>
          <vhb-toolbar size="small">
            <template #buttons>
              <vhb-button content="小型尺寸"></vhb-button>
              <vhb-button content="下拉按钮">
                <template #dropdowns>
                  <vhb-button type="text" content="按钮1"></vhb-button>
                  <vhb-button type="text" content="按钮2"></vhb-button>
                  <vhb-button type="text" content="按钮3"></vhb-button>
                </template>
              </vhb-button>
            </template>
          </vhb-toolbar>
          <vhb-toolbar size="mini">
            <template #buttons>
              <vhb-button content="超小尺寸"></vhb-button>
              <vhb-button content="下拉按钮">
                <template #dropdowns>
                  <vhb-button type="text" content="按钮1"></vhb-button>
                  <vhb-button type="text" content="按钮2"></vhb-button>
                  <vhb-button type="text" content="按钮3"></vhb-button>
                </template>
              </vhb-button>
            </template>
          </vhb-toolbar>
        </p>

        <p>
          <vhb-toolbar perfect>
            <template #buttons>
              <vhb-button type="text" icon="fa fa-plus" content="新增"></vhb-button>
              <vhb-button type="text" icon="fa fa-trash-o" content="删除"></vhb-button>
              <vhb-button type="text" icon="fa fa-save" content="保存"></vhb-button>
            </template>
          </vhb-toolbar>

          <vhb-toolbar perfect>
            <template #buttons>
              <vhb-button icon="fa fa-plus" status="perfect" content="新增"></vhb-button>
              <vhb-button icon="fa fa-trash-o" status="perfect" content="删除"></vhb-button>
              <vhb-button icon="fa fa-save" status="perfect" content="保存"></vhb-button>
            </template>
          </vhb-toolbar>

          <vhb-toolbar ref="xToolbar" custom>
            <template #buttons>
              <vhb-button content="自定义模板"></vhb-button>
              <vhb-button content="按钮2"></vhb-button>
              <vhb-button content="按钮3"></vhb-button>
              <vhb-button content="下拉按钮">
                <template #dropdowns>
                  <vhb-button content="按钮1"></vhb-button>
                  <vhb-button content="按钮2"></vhb-button>
                  <vhb-button content="按钮3"></vhb-button>
                </template>
              </vhb-button>
            </template>
            <template #tools>
              <vhb-button type="text" icon="vhb-icon--question" class="tool-btn"></vhb-button>
              <vhb-button type="text" icon="vhb-icon--funnel" class="tool-btn" @click="funnelEvent"></vhb-button>
            </template>
          </vhb-toolbar>

          <vhb-table ref="xTable" :data="tableData">
            <vhb-column field="name" title="Name"></vhb-column>
            <vhb-column field="role" title="Role"></vhb-column>
            <vhb-column field="sex" title="Sex"></vhb-column>
          </vhb-table>
        </p>
        `,
        `
        import VHBTable from 'vhb-table'
        
        export default {
          data () {
            return {
              loading: false,
              tableData: [
                { name: 'Test1', role: '前端', sex: '男' },
                { name: 'Test2', role: '后端', sex: '男' },
                { name: 'Test3', role: '测试', sex: '男' },
                { name: 'Test4', role: '设计师', sex: '女' }
              ]
            }
          },
          created () {
            this.$nextTick(() => {
              // 将表格和工具栏进行关联
              const $table = this.$refs.xTable
              $table.connect(this.$refs.xToolbar)
            })
          },
          methods: {
            funnelEvent () {
              VHBTable.modal.alert({ content: '点击事件' })
            }
          }
        }
        `,
        `
        .tool-btn {
          font-size: 20px;
          cursor: pointer;
        }
        .tool-btn:hover {
          color: #409eff;
        }
        `
      ]
    }
  },
  created () {
    this.$nextTick(() => {
      // 将表格和工具栏进行关联
      const $table = this.$refs.xTable
      $table.connect(this.$refs.xToolbar)
    })
  },
  methods: {
    funnelEvent () {
      VHBTable.modal.alert({ content: '点击事件' })
    }
  }
}
</script>

<style scoped>
.tool-btn {
  font-size: 20px;
  cursor: pointer;
}
.tool-btn:hover {
  color: #409eff;
}
</style>
