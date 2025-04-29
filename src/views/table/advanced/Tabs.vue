<template>
  <div>
    <p class="tip">
      Tab 页签切换<span class="red">（如果需要将表格放到隐藏的元素中，那么就必然会导致宽度无法计算）</span>，有以下方法解决<br>
      1.每次切换 Tab 页显示之后手动调用 <table-api-link prop="recalculate"/> 重新计算表格<br>
      2.使用 <table-api-link prop="sync-resize"/> 绑定指定的变量来触发重新计算表格<br>
      3.使用 <table-api-link prop="auto-resize"/> 自动监听父容器来触发重新计算表格
    </p>

    <p>
      <vhb-radio-group v-model="selectTab">
        <vhb-radio-button label="tab1" content="分组按钮1"></vhb-radio-button>
        <vhb-radio-button label="tab2" content="分组按钮2"></vhb-radio-button>
        <vhb-radio-button label="tab3" content="分组按钮3"></vhb-radio-button>
      </vhb-radio-group>
    </p>

    <div v-show="selectTab === 'tab1'">
      <vhb-table
        border
        :sync-resize="selectTab"
        :data="tableData">
        <vhb-column type="seq" width="60"></vhb-column>
        <vhb-column field="name" title="Name"></vhb-column>
        <vhb-column field="sex" title="Sex"></vhb-column>
        <vhb-column field="address" title="Address" show-overflow></vhb-column>
      </vhb-table>
    </div>

    <div v-show="selectTab === 'tab2'">
      <vhb-table
        border
        :sync-resize="selectTab"
        :data="tableData">
        <vhb-column type="radio" width="60"></vhb-column>
        <vhb-column field="role" title="Rolw"></vhb-column>
        <vhb-column field="age" title="Age"></vhb-column>
        <vhb-column field="num" title="Num"></vhb-column>
        <vhb-column field="date12" title="Date"></vhb-column>
      </vhb-table>
    </div>

    <div v-show="selectTab === 'tab3'">
      <vhb-table
        border
        :sync-resize="selectTab"
        :data="tableData">
        <vhb-column type="checkbox" width="60"></vhb-column>
        <vhb-column field="nickname" title="nickname"></vhb-column>
        <vhb-column field="sex" title="Sex"></vhb-column>
        <vhb-column field="age" title="Age"></vhb-column>
        <vhb-column field="date12" title="Date"></vhb-column>
        <vhb-column field="region" title="Region"></vhb-column>
        <vhb-column field="rate" title="Rate"></vhb-column>
      </vhb-table>
    </div>

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
      selectTab: 'tab1',
      tableData: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, amount: 888, address: 'test abc' },
        { id: 10002, name: 'Test2', role: 'Test', sex: '1', age: 22, amount: 666, address: 'Guangzhou' },
        { id: 10003, name: 'Test3', role: 'PM', sex: '1', age: 32, amount: 89, address: 'Shanghai' },
        { id: 10004, name: 'Test4', role: 'Designer', sex: '0', age: 23, amount: 1000, address: 'test abc' },
        { id: 10005, name: 'Test5', role: 'Develop', sex: '0', age: 30, amount: 999, address: 'Shanghai' }
      ],
      demoCodes: [
        `
        <p>
          <vhb-radio-group v-model="selectTab">
            <vhb-radio-button label="tab1" content="分组按钮1"></vhb-radio-button>
            <vhb-radio-button label="tab2" content="分组按钮2"></vhb-radio-button>
            <vhb-radio-button label="tab3" content="分组按钮3"></vhb-radio-button>
          </vhb-radio-group>
        </p>

        <div v-show="selectTab === 'tab1'">
          <vhb-table
            border
            :sync-resize="selectTab"
            :data="tableData">
            <vhb-column type="seq" width="60"></vhb-column>
            <vhb-column field="name" title="Name"></vhb-column>
            <vhb-column field="sex" title="Sex"></vhb-column>
            <vhb-column field="address" title="Address" show-overflow></vhb-column>
          </vhb-table>
        </div>

        <div v-show="selectTab === 'tab2'">
          <vhb-table
            border
            :sync-resize="selectTab"
            :data="tableData">
            <vhb-column type="radio" width="60"></vhb-column>
            <vhb-column field="role" title="Rolw"></vhb-column>
            <vhb-column field="age" title="Age"></vhb-column>
            <vhb-column field="num" title="Num"></vhb-column>
            <vhb-column field="date12" title="Date"></vhb-column>
          </vhb-table>
        </div>

        <div v-show="selectTab === 'tab3'">
          <vhb-table
            border
            :sync-resize="selectTab"
            :data="tableData">
            <vhb-column type="checkbox" width="60"></vhb-column>
            <vhb-column field="nickname" title="nickname"></vhb-column>
            <vhb-column field="sex" title="Sex"></vhb-column>
            <vhb-column field="age" title="Age"></vhb-column>
            <vhb-column field="date12" title="Date"></vhb-column>
            <vhb-column field="region" title="Region"></vhb-column>
            <vhb-column field="rate" title="Rate"></vhb-column>
          </vhb-table>
        </div>
        `,
        `
        export default {
          data () {
            return {
              selectTab: 'tab1',
              tableData: [
                { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, amount: 888, address: 'test abc' },
                { id: 10002, name: 'Test2', role: 'Test', sex: '1', age: 22, amount: 666, address: 'Guangzhou' },
                { id: 10003, name: 'Test3', role: 'PM', sex: '1', age: 32, amount: 89, address: 'Shanghai' },
                { id: 10004, name: 'Test4', role: 'Designer', sex: '0', age: 23, amount: 1000, address: 'test abc' },
                { id: 10005, name: 'Test5', role: 'Develop', sex: '0', age: 30, amount: 999, address: 'Shanghai' }
              ]
            }
          }
        }
        `
      ]
    }
  }
}
</script>
