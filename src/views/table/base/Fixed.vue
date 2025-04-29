<template>
  <div>
    <p class="tip">
      固定列，通过设置 <table-column-api-link prop="fixed"/>=left|right 来启用固定列<br>
      当横向内容过多时，将列固定在左右两侧
    </p>

    <vhb-table
      border="inner"
      show-overflow
      :data="tableData">
      <vhb-column type="seq" width="60" fixed="left"></vhb-column>
      <vhb-column field="name" title="Name" width="300"></vhb-column>
      <vhb-column field="role" title="Role" width="300"></vhb-column>
      <vhb-column field="sex" title="Sex" width="300"></vhb-column>
      <vhb-column field="date" title="Date" width="300"></vhb-column>
      <vhb-column field="address" title="Address" fixed="right" width="300"></vhb-column>
    </vhb-table>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <pre-code class="xml">{{ demoCodes[0] }}</pre-code>
      <pre-code class="javascript">{{ demoCodes[1] }}</pre-code>
    </pre>

    <p class="tip">如果列宽足够的情况下，固定列不会浮动</p>

    <vhb-table
      border
      show-overflow
      :data="tableData">
      <vhb-column type="seq" width="60" fixed="left"></vhb-column>
      <vhb-column field="name" title="Name"></vhb-column>
      <vhb-column field="role" title="Role"></vhb-column>
      <vhb-column field="sex" title="Sex"></vhb-column>
      <vhb-column field="age" title="Age"></vhb-column>
      <vhb-column field="address" title="Address" fixed="right" width="300"></vhb-column>
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
        { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
      ],
      demoCodes: [
        `
        <vhb-table
          border="inner"
          show-overflow
          :data="tableData">
          <vhb-column type="seq" width="60" fixed="left"></vhb-column>
          <vhb-column field="name" title="Name" width="300"></vhb-column>
          <vhb-column field="role" title="Role" width="300"></vhb-column>
          <vhb-column field="sex" title="Sex" width="300"></vhb-column>
          <vhb-column field="date" title="Date" width="300"></vhb-column>
          <vhb-column field="address" title="Address" fixed="right" width="300"></vhb-column>
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
                { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
              ]
            }
          }
        }
        `,
        `
        <vhb-table
          border
          show-overflow
          :data="tableData">
          <vhb-column type="seq" width="60" fixed="left"></vhb-column>
          <vhb-column field="name" title="Name"></vhb-column>
          <vhb-column field="role" title="Role"></vhb-column>
          <vhb-column field="sex" title="Sex"></vhb-column>
          <vhb-column field="age" title="Age"></vhb-column>
          <vhb-column field="address" title="Address" fixed="right" width="300"></vhb-column>
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
                { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
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
