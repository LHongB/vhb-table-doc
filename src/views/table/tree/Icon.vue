<template>
  <div>
    <p class="tip">
      自定义图标，通过设置 <table-api-link prop="tree-config"/>={<table-api-link prop="iconOpen"/>, <table-api-link prop="iconClose"/>} 局部替换默认的图标，例如第三方图标库：font-awesome、inconfont
    </p>

    <vhb-toolbar>
      <template #buttons>
        <vhb-button @click="getTreeExpansionEvent">获取已展开</vhb-button>
        <vhb-button @click="$refs.xTree1.setAllTreeExpand(true)">展开所有</vhb-button>
        <vhb-button @click="$refs.xTree1.clearTreeExpand()">关闭所有</vhb-button>
      </template>
    </vhb-toolbar>

    <vhb-table
      border
      resizable
      ref="xTree1"
      :tree-config="{transform: true, rowField: 'id', parentField: 'parentId', iconOpen: 'fa fa-minus-square-o', iconClose: 'fa fa-plus-square-o'}"
      :data="tableData1">
      <vhb-column field="name" title="app.body.label.name" tree-node></vhb-column>
      <vhb-column field="size" title="Size"></vhb-column>
      <vhb-column field="type" title="Type"></vhb-column>
      <vhb-column field="date" title="Date"></vhb-column>
    </vhb-table>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <pre-code class="xml">{{ demoCodes[0] }}</pre-code>
      <pre-code class="javascript">{{ demoCodes[1] }}</pre-code>
    </pre>

    <p class="tip">更多自定义</p>

    <vhb-table
      resizable
      show-overflow
      ref="xTree2"
      :tree-config="{transform: true, iconOpen: 'fa fa-minus-circle', iconClose: 'fa fa-plus-circle'}"
      :data="tableData2">
      <vhb-column field="name" title="Name" tree-node>
        <template #default="{ row }">
          <span>
            <template v-if="row.children && row.children.length">
              <i class="tree-node-icon fa" :class="$refs.xTree2.isTreeExpandByRow(row) ? 'fa-folder-open-o' : 'fa-folder-o'"></i>
            </template>
            <template v-else>
              <i class="tree-node-icon fa fa-file-o"></i>
            </template>
            <span>{{ row.name }}</span>
          </span>
        </template>
      </vhb-column>
      <vhb-column field="size" title="Size"></vhb-column>
      <vhb-column field="type" title="Type"></vhb-column>
      <vhb-column field="date" title="Date"></vhb-column>
    </vhb-table>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <pre-code class="xml">{{ demoCodes[2] }}</pre-code>
      <pre-code class="javascript">{{ demoCodes[3] }}</pre-code>
      <pre-code class="css">{{ demoCodes[4] }}</pre-code>
    </pre>

    <p class="tip">还可以通过 <table-api-link prop="tree-config"/>={<table-api-link prop="toggleMethod"/>} 方法实现展开与关闭的细节处理，返回值用来决定是否允许继续执行</p>

    <vhb-table
      resizable
      show-overflow
      :tree-config="{transform: true, toggleMethod: toggleTreeMethod}"
      :data="tableData3">
      <vhb-column field="name" title="Name" tree-node></vhb-column>
      <vhb-column field="size" title="Size"></vhb-column>
      <vhb-column field="type" title="Type"></vhb-column>
      <vhb-column field="date" title="Date"></vhb-column>
    </vhb-table>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <pre-code class="xml">{{ demoCodes[5] }}</pre-code>
      <pre-code class="javascript">{{ demoCodes[6] }}</pre-code>
    </pre>
  </div>
</template>

<script>
import VHBTable from 'vhb-table'

export default {
  data () {
    return {
      tableData1: [
        { id: 10000, parentId: null, name: 'test abc1', type: 'mp3', size: 1024, date: '2020-08-01' },
        { id: 10050, parentId: null, name: 'Test2', type: 'mp4', size: null, date: '2021-04-01' },
        { id: 24300, parentId: 10050, name: 'Test3', type: 'avi', size: 1024, date: '2020-03-01' },
        { id: 20045, parentId: 24300, name: 'test abc4', type: 'html', size: 600, date: '2021-04-01' },
        { id: 10053, parentId: 24300, name: 'test abc96', type: 'avi', size: null, date: '2021-04-01' },
        { id: 24330, parentId: 10053, name: 'test abc5', type: 'txt', size: 25, date: '2021-10-01' },
        { id: 21011, parentId: 10053, name: 'Test6', type: 'pdf', size: 512, date: '2020-01-01' },
        { id: 22200, parentId: 10053, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
        { id: 23666, parentId: null, name: 'Test8', type: 'xlsx', size: 2048, date: '2020-11-01' },
        { id: 23677, parentId: 23666, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
        { id: 23671, parentId: 23677, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
        { id: 23672, parentId: 23677, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
        { id: 23688, parentId: 23666, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
        { id: 23681, parentId: 23688, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
        { id: 23682, parentId: 23688, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
        { id: 24555, parentId: null, name: 'test abc9', type: 'avi', size: 224, date: '2020-10-01' },
        { id: 24566, parentId: 24555, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
        { id: 24577, parentId: 24555, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' }
      ],
      tableData2: [
        { id: 10000, parentId: null, name: 'test abc1', type: 'mp3', size: 1024, date: '2020-08-01' },
        { id: 10050, parentId: null, name: 'Test2', type: 'mp4', size: null, date: '2021-04-01' },
        { id: 24300, parentId: 10050, name: 'Test3', type: 'avi', size: 1024, date: '2020-03-01' },
        { id: 20045, parentId: 24300, name: 'test abc4', type: 'html', size: 600, date: '2021-04-01' },
        { id: 10053, parentId: 24300, name: 'test abc96', type: 'avi', size: null, date: '2021-04-01' },
        { id: 24330, parentId: 10053, name: 'test abc5', type: 'txt', size: 25, date: '2021-10-01' },
        { id: 21011, parentId: 10053, name: 'Test6', type: 'pdf', size: 512, date: '2020-01-01' },
        { id: 22200, parentId: 10053, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
        { id: 23666, parentId: null, name: 'Test8', type: 'xlsx', size: 2048, date: '2020-11-01' },
        { id: 23677, parentId: 23666, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
        { id: 23671, parentId: 23677, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
        { id: 23672, parentId: 23677, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
        { id: 23688, parentId: 23666, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
        { id: 23681, parentId: 23688, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
        { id: 23682, parentId: 23688, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
        { id: 24555, parentId: null, name: 'test abc9', type: 'avi', size: 224, date: '2020-10-01' },
        { id: 24566, parentId: 24555, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
        { id: 24577, parentId: 24555, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' }
      ],
      tableData3: [
        { id: 10000, parentId: null, name: 'test abc1', type: 'mp3', size: 1024, date: '2020-08-01' },
        { id: 10050, parentId: null, name: 'Test2', type: 'mp4', size: null, date: '2021-04-01' },
        { id: 24300, parentId: 10050, name: 'Test3', type: 'avi', size: 1024, date: '2020-03-01' },
        { id: 20045, parentId: 24300, name: 'test abc4', type: 'html', size: 600, date: '2021-04-01' },
        { id: 10053, parentId: 24300, name: 'test abc96', type: 'avi', size: null, date: '2021-04-01' },
        { id: 24330, parentId: 10053, name: 'test abc5', type: 'txt', size: 25, date: '2021-10-01' },
        { id: 21011, parentId: 10053, name: 'Test6', type: 'pdf', size: 512, date: '2020-01-01' },
        { id: 22200, parentId: 10053, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
        { id: 23666, parentId: null, name: 'Test8', type: 'xlsx', size: 2048, date: '2020-11-01' },
        { id: 23677, parentId: 23666, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
        { id: 23671, parentId: 23677, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
        { id: 23672, parentId: 23677, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
        { id: 23688, parentId: 23666, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
        { id: 23681, parentId: 23688, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
        { id: 23682, parentId: 23688, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
        { id: 24555, parentId: null, name: 'test abc9', type: 'avi', size: 224, date: '2020-10-01' },
        { id: 24566, parentId: 24555, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
        { id: 24577, parentId: 24555, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' }
      ],
      demoCodes: [
        `
        <vhb-toolbar>
          <template #buttons>
            <vhb-button @click="getTreeExpansionEvent">获取已展开</vhb-button>
            <vhb-button @click="$refs.xTree.setAllTreeExpand(true)">展开所有</vhb-button>
            <vhb-button @click="$refs.xTree.clearTreeExpand()">关闭所有</vhb-button>
          </template>
        </vhb-toolbar>

        <vhb-table
          border
          resizable
          ref="xTree"
          :tree-config="{transform: true, rowField: 'id', parentField: 'parentId', iconOpen: 'fa fa-minus-square-o', iconClose: 'fa fa-plus-square-o'}"
          :data="tableData1">
          <vhb-column field="name" title="app.body.label.name"  tree-node></vhb-column>
          <vhb-column field="size" title="Size"></vhb-column>
          <vhb-column field="type" title="Type"></vhb-column>
          <vhb-column field="date" title="Date"></vhb-column>
        </vhb-table>
        `,
        `
        import VHBTable from 'vhb-table'

        export default {
          data () {
            return {
              tableData1: [
                { id: 10000, parentId: null, name: 'test abc1', type: 'mp3', size: 1024, date: '2020-08-01' },
                { id: 10050, parentId: null, name: 'Test2', type: 'mp4', size: null, date: '2021-04-01' },
                { id: 24300, parentId: 10050, name: 'Test3', type: 'avi', size: 1024, date: '2020-03-01' },
                { id: 20045, parentId: 24300, name: 'test abc4', type: 'html', size: 600, date: '2021-04-01' },
                { id: 10053, parentId: 24300, name: 'test abc96', type: 'avi', size: null, date: '2021-04-01' },
                { id: 24330, parentId: 10053, name: 'test abc5', type: 'txt', size: 25, date: '2021-10-01' },
                { id: 21011, parentId: 10053, name: 'Test6', type: 'pdf', size: 512, date: '2020-01-01' },
                { id: 22200, parentId: 10053, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
                { id: 23666, parentId: null, name: 'Test8', type: 'xlsx', size: 2048, date: '2020-11-01' },
                { id: 23677, parentId: 23666, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
                { id: 23671, parentId: 23677, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
                { id: 23672, parentId: 23677, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
                { id: 23688, parentId: 23666, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
                { id: 23681, parentId: 23688, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
                { id: 23682, parentId: 23688, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
                { id: 24555, parentId: null, name: 'test abc9', type: 'avi', size: 224, date: '2020-10-01' },
                { id: 24566, parentId: 24555, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
                { id: 24577, parentId: 24555, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' }
              ]
            }
          },
          methods: {
            getTreeExpansionEvent () {
              let treeExpandRecords = this.$refs.xTree.getTreeExpandRecords()
              VHBTable.modal.alert(treeExpandRecords.length)
            }
          }
        }
        `,
        `
        <vhb-table
          resizable
          show-overflow
          ref="xTree"
          :tree-config="{transform: true, iconOpen: 'fa fa-minus-circle', iconClose: 'fa fa-plus-circle'}"
          :data="tableData2">
          <vhb-column field="name" title="Name" tree-node>
            <template #default="{ row }">
              <span>
                <template v-if="row.children && row.children.length">
                  <i class="tree-node-icon fa" :class="$refs.xTree.isTreeExpandByRow(row) ? 'fa-folder-open-o' : 'fa-folder-o'"></i>
                </template>
                <template v-else>
                  <i class="tree-node-icon fa fa-file-o"></i>
                </template>
                <span>{{ row.name }}</span>
              </span>
            </template>
          </vhb-column>
          <vhb-column field="size" title="Size"></vhb-column>
          <vhb-column field="type" title="Type"></vhb-column>
          <vhb-column field="date" title="Date"></vhb-column>
        </vhb-table>
        `,
        `
        export default {
          data () {
            return {
              tableData2: [
                { id: 10000, parentId: null, name: 'test abc1', type: 'mp3', size: 1024, date: '2020-08-01' },
                { id: 10050, parentId: null, name: 'Test2', type: 'mp4', size: null, date: '2021-04-01' },
                { id: 24300, parentId: 10050, name: 'Test3', type: 'avi', size: 1024, date: '2020-03-01' },
                { id: 20045, parentId: 24300, name: 'test abc4', type: 'html', size: 600, date: '2021-04-01' },
                { id: 10053, parentId: 24300, name: 'test abc96', type: 'avi', size: null, date: '2021-04-01' },
                { id: 24330, parentId: 10053, name: 'test abc5', type: 'txt', size: 25, date: '2021-10-01' },
                { id: 21011, parentId: 10053, name: 'Test6', type: 'pdf', size: 512, date: '2020-01-01' },
                { id: 22200, parentId: 10053, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
                { id: 23666, parentId: null, name: 'Test8', type: 'xlsx', size: 2048, date: '2020-11-01' },
                { id: 23677, parentId: 23666, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
                { id: 23671, parentId: 23677, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
                { id: 23672, parentId: 23677, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
                { id: 23688, parentId: 23666, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
                { id: 23681, parentId: 23688, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
                { id: 23682, parentId: 23688, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
                { id: 24555, parentId: null, name: 'test abc9', type: 'avi', size: 224, date: '2020-10-01' },
                { id: 24566, parentId: 24555, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
                { id: 24577, parentId: 24555, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' }
              ]
            }
          }
        }
        `,
        `
        .tree-node-icon {
          width: 20px;
        }
        `,
        `
        <vhb-table
          resizable
          show-overflow
          :tree-config="{transform: true, toggleMethod: toggleTreeMethod}"
          :data="tableData3">
          <vhb-column field="name" title="Name" tree-node></vhb-column>
          <vhb-column field="size" title="Size"></vhb-column>
          <vhb-column field="type" title="Type"></vhb-column>
          <vhb-column field="date" title="Date"></vhb-column>
        </vhb-table>
        `,
        `
        import VHBTable from 'vhb-table'
        
        export default {
          data () {
            return {
              tableData3: [
                { id: 10000, parentId: null, name: 'test abc1', type: 'mp3', size: 1024, date: '2020-08-01' },
                { id: 10050, parentId: null, name: 'Test2', type: 'mp4', size: null, date: '2021-04-01' },
                { id: 24300, parentId: 10050, name: 'Test3', type: 'avi', size: 1024, date: '2020-03-01' },
                { id: 20045, parentId: 24300, name: 'test abc4', type: 'html', size: 600, date: '2021-04-01' },
                { id: 10053, parentId: 24300, name: 'test abc96', type: 'avi', size: null, date: '2021-04-01' },
                { id: 24330, parentId: 10053, name: 'test abc5', type: 'txt', size: 25, date: '2021-10-01' },
                { id: 21011, parentId: 10053, name: 'Test6', type: 'pdf', size: 512, date: '2020-01-01' },
                { id: 22200, parentId: 10053, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
                { id: 23666, parentId: null, name: 'Test8', type: 'xlsx', size: 2048, date: '2020-11-01' },
                { id: 23677, parentId: 23666, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
                { id: 23671, parentId: 23677, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
                { id: 23672, parentId: 23677, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
                { id: 23688, parentId: 23666, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
                { id: 23681, parentId: 23688, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
                { id: 23682, parentId: 23688, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
                { id: 24555, parentId: null, name: 'test abc9', type: 'avi', size: 224, date: '2020-10-01' },
                { id: 24566, parentId: 24555, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
                { id: 24577, parentId: 24555, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' }
              ]
            }
          },
          methods: {
            toggleTreeMethod ({ expanded, row }) {
              if (expanded) {
                if (row.date === '2019-10-22') {
                  VHBTable.modal.message({ id: 'openErr', content: '不允许展开', status: 'error' })
                  return false
                }
              } else {
                if (row.date === '2019-03-04') {
                  VHBTable.modal.message({ id: 'closeErr', content: '不允许关闭', status: 'error' })
                  return false
                }
              }
              return true
            }
          }
        }
        `
      ]
    }
  },
  methods: {
    getTreeExpansionEvent () {
      const treeExpandRecords = this.$refs.xTree1.getTreeExpandRecords()
      VHBTable.modal.alert(treeExpandRecords.length)
    },
    toggleTreeMethod ({ expanded, row }) {
      if (expanded) {
        if (row.date === '2019-10-22') {
          VHBTable.modal.message({ id: 'openErr', content: '不允许展开', status: 'error' })
          return false
        }
      } else {
        if (row.date === '2019-03-04') {
          VHBTable.modal.message({ id: 'closeErr', content: '不允许关闭', status: 'error' })
          return false
        }
      }
      return true
    }
  }
}
</script>

<style scoped>
.tree-node-icon {
  width: 20px;
}
</style>
