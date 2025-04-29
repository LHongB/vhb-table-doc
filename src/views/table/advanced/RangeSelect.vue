<template>
  <div>
    <p class="tip">复选框的范围选中功能，通过配置项 <table-api-link prop="checkbox-config"/>={<table-api-link prop="range"/>} 启用，还可以同时按住 ctrl 键取消/勾选不连续的行</p>

    <vhb-table
      border
      height="400"
      :checkbox-config="{trigger: 'row', highlight: true, range: true}"
      :data="tableData">
      <vhb-column type="checkbox" width="80"></vhb-column>
      <vhb-column field="name" title="Name" sortable></vhb-column>
      <vhb-column field="sex" title="Sex"></vhb-column>
      <vhb-column field="age" title="Age"></vhb-column>
      <vhb-column field="time" title="Time"></vhb-column>
    </vhb-table>

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
      tableData: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, amount: 888, address: 'test abc' },
        { id: 10002, name: 'Test2', role: 'Test', sex: '1', age: 22, amount: 666, address: 'Guangzhou' },
        { id: 10003, name: 'Test3', role: 'PM', sex: '1', age: 32, amount: 89, address: 'Shanghai' },
        { id: 10004, name: 'Test4', role: 'Designer', sex: '0', age: 23, amount: 1000, address: 'test abc' },
        { id: 10005, name: 'Test5', role: 'Develop', sex: '0', age: 30, amount: 999, address: 'Shanghai' },
        { id: 10006, name: 'Test6', role: 'Designer', sex: '0', age: 21, amount: 998, address: 'test abc' },
        { id: 10007, name: 'Test7', role: 'Test', sex: '1', age: 29, amount: 2000, address: 'test abc' },
        { id: 10008, name: 'Test8', role: 'Develop', sex: '1', age: 35, amount: 999, address: 'test abc' },
        { id: 10009, name: 'Test9', role: 'Test', sex: '1', age: 26, amount: 2000, address: 'test abc' },
        { id: 100010, name: 'Test10', role: 'Develop', sex: '1', age: 21, amount: 666, address: 'test abc' }
      ],
      demoCodes: [
        `
        <vhb-table
          border
          height="400"
          :checkbox-config="{trigger: 'row', highlight: true, range: true}"
          :data="tableData">
          <vhb-column type="checkbox" width="80"></vhb-column>
          <vhb-column field="name" title="Name" sortable></vhb-column>
          <vhb-column field="sex" title="Sex"></vhb-column>
          <vhb-column field="age" title="Age"></vhb-column>
          <vhb-column field="time" title="Time"></vhb-column>
        </vhb-table>
        `,
        `
        export default {
          data () {
            return {
              tableData: [
                { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, amount: 888, address: 'test abc' },
                { id: 10002, name: 'Test2', role: 'Test', sex: '1', age: 22, amount: 666, address: 'Guangzhou' },
                { id: 10003, name: 'Test3', role: 'PM', sex: '1', age: 32, amount: 89, address: 'Shanghai' },
                { id: 10004, name: 'Test4', role: 'Designer', sex: '0', age: 23, amount: 1000, address: 'test abc' },
                { id: 10005, name: 'Test5', role: 'Develop', sex: '0', age: 30, amount: 999, address: 'Shanghai' },
                { id: 10006, name: 'Test6', role: 'Designer', sex: '0', age: 21, amount: 998, address: 'test abc' },
                { id: 10007, name: 'Test7', role: 'Test', sex: '1', age: 29, amount: 2000, address: 'test abc' },
                { id: 10008, name: 'Test8', role: 'Develop', sex: '1', age: 35, amount: 999, address: 'test abc' },
                { id: 10009, name: 'Test9', role: 'Test', sex: '1', age: 26, amount: 2000, address: 'test abc' },
                { id: 100010, name: 'Test10', role: 'Develop', sex: '1', age: 21, amount: 666, address: 'test abc' }
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
