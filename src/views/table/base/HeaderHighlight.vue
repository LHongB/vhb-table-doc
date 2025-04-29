<template>
  <div>
    <p class="tip">高亮当前列，当前列是唯一的，通过设置 <table-api-link prop="column-config"/>.<table-api-link prop="isCurrent"/> 参数</p>

    <vhb-table
      border
      :column-config="{isCurrent: true, isHover: true}"
      :data="tableData">
      <vhb-column type="seq" width="60"></vhb-column>
      <vhb-column field="name" title="Name"></vhb-column>
      <vhb-column field="sex" title="Sex"></vhb-column>
      <vhb-column field="age" title="Age"></vhb-column>
      <vhb-column field="address" title="Address" show-overflow></vhb-column>
    </vhb-table>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <pre-code class="xml">{{ demoCodes[0] }}</pre-code>
      <pre-code class="javascript">{{ demoCodes[1] }}</pre-code>
    </pre>

    <p class="tip">列和行选中高亮，通过设置 <table-api-link prop="column-config"/>.isCurrent、<table-api-link prop="row-config="/>.isCurrent 参数</p>

    <vhb-table
      border
      :column-config="{isCurrent: true, isHover: true}"
      :row-config="{isCurrent: true, isHover: true}"
      :data="tableData">
      <vhb-column type="seq" width="60"></vhb-column>
      <vhb-column field="name" title="Name"></vhb-column>
      <vhb-column field="sex" title="Sex"></vhb-column>
      <vhb-column field="age" title="Age"></vhb-column>
      <vhb-column field="address" title="Address" show-overflow></vhb-column>
    </vhb-table>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <pre-code class="xml">{{ demoCodes[2] }}</pre-code>
      <pre-code class="javascript">{{ demoCodes[3] }}</pre-code>
    </pre>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
        { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
        { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
        { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc' },
        { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' },
        { id: 10006, name: 'Test6', role: 'Designer', sex: 'Women', age: 21, address: 'test abc' },
        { id: 10007, name: 'Test7', role: 'Test', sex: 'Man', age: 29, address: 'test abc' },
        { id: 10008, name: 'Test8', role: 'Develop', sex: 'Man', age: 35, address: 'test abc' }
      ],
      demoCodes: [
        `
        <vhb-table
          border
          :column-config="{isCurrent: true, isHover: true}"
          :data="tableData">
          <vhb-column type="seq" width="60"></vhb-column>
          <vhb-column field="name" title="Name"></vhb-column>
          <vhb-column field="sex" title="Sex"></vhb-column>
          <vhb-column field="age" title="Age"></vhb-column>
          <vhb-column field="address" title="Address" show-overflow></vhb-column>
        </vhb-table>
        `,
        `
        export default {
          data () {
            return {
              tableData: [
                { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
                { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
                { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
                { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc' },
                { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' },
                { id: 10006, name: 'Test6', role: 'Designer', sex: 'Women', age: 21, address: 'test abc' },
                { id: 10007, name: 'Test7', role: 'Test', sex: 'Man', age: 29, address: 'test abc' },
                { id: 10008, name: 'Test8', role: 'Develop', sex: 'Man', age: 35, address: 'test abc' }
              ]
            }
          }
        }
        `,
        `
        <vhb-table
          border
          :column-config="{isCurrent: true, isHover: true}"
          :row-config="{isCurrent: true, isHover: true}"
          :data="tableData">
          <vhb-column type="seq" width="60"></vhb-column>
          <vhb-column field="name" title="Name"></vhb-column>
          <vhb-column field="sex" title="Sex"></vhb-column>
          <vhb-column field="age" title="Age"></vhb-column>
          <vhb-column field="address" title="Address" show-overflow></vhb-column>
        </vhb-table>
        `,
        `
        export default {
          data () {
            return {
              tableData: [
                { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
                { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
                { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
                { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc' },
                { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' },
                { id: 10006, name: 'Test6', role: 'Designer', sex: 'Women', age: 21, address: 'test abc' },
                { id: 10007, name: 'Test7', role: 'Test', sex: 'Man', age: 29, address: 'test abc' },
                { id: 10008, name: 'Test8', role: 'Develop', sex: 'Man', age: 35, address: 'test abc' }
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
