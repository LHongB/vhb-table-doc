<template>
  <div>
    <p class="tip">当一个表格高度需要自适应的时候可以设置为最大高度，通过设置 <table-api-link prop="max-height"/> 参数</p>

    <vhb-table
      border
      max-height="200"
      :row-config="{isHover: true}"
      :data="tableData">
      <vhb-column type="seq" width="60"></vhb-column>
      <vhb-column field="name" title="Name" sortable></vhb-column>
      <vhb-column field="sex" title="Sex" align="center"></vhb-column>
      <vhb-column field="age" title="Age"></vhb-column>
      <vhb-column field="address" title="Address" show-overflow></vhb-column>
    </vhb-table>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <pre-code class="xml">{{ demoCodes[0] }}</pre-code>
      <pre-code class="javascript">{{ demoCodes[1] }}</pre-code>
    </pre>

    <p class="tip">如果设置 <table-api-link prop="max-height"/>，当内容为达到最大高度时会自适应</p>

    <vhb-table
      border
      max-height="200"
      :row-config="{isHover: true}"
      :data="tableData2">
      <vhb-column type="seq" width="60"></vhb-column>
      <vhb-column field="name" title="Name" sortable></vhb-column>
      <vhb-column field="sex" title="Sex"></vhb-column>
      <vhb-column field="age" title="Age"></vhb-column>
      <vhb-column field="address" title="Address" show-overflow></vhb-column>
    </vhb-table>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <pre-code class="xml">{{ demoCodes[2] }}</pre-code>
      <pre-code class="javascript">{{ demoCodes[3] }}</pre-code>
    </pre>

    <p class="tip">也可以设置相对于父容器的百分比</p>

    <div style="height: 400px;">
      <vhb-table
        border
        max-height="100%"
        :row-config="{isHover: true}"
        :data="tableData">
        <vhb-column type="seq" width="60"></vhb-column>
        <vhb-column field="name" title="Name" sortable></vhb-column>
        <vhb-column field="sex" title="Sex"></vhb-column>
        <vhb-column field="age" title="Age"></vhb-column>
        <vhb-column field="address" title="Address" show-overflow></vhb-column>
      </vhb-table>
    </div>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <pre-code class="xml">{{ demoCodes[4] }}</pre-code>
      <pre-code class="javascript">{{ demoCodes[5] }}</pre-code>
    </pre>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
        { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' }
      ],
      tableData2: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
        { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' }
      ],
      demoCodes: [
        `
        <vhb-table
          border
          max-height="200"
          :row-config="{isHover: true}"
          :data="tableData">
          <vhb-column type="seq" width="60"></vhb-column>
          <vhb-column field="name" title="Name" sortable></vhb-column>
          <vhb-column field="sex" title="Sex" align="center"></vhb-column>
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
                { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' }
              ]
            }
          }
        }
        `,
        `
        <vhb-table
          border
          max-height="200"
          :row-config="{isHover: true}"
          :data="tableData2">
          <vhb-column type="seq" width="60"></vhb-column>
          <vhb-column field="name" title="Name" sortable></vhb-column>
          <vhb-column field="sex" title="Sex"></vhb-column>
          <vhb-column field="age" title="Age"></vhb-column>
          <vhb-column field="address" title="Address" show-overflow></vhb-column>
        </vhb-table>
        `,
        `
        export default {
          data () {
            return {
              tableData2: [
                { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
                { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' }
              ]
            }
          }
        }
        `,
        `
        <div style="height: 400px;">
          <vhb-table
            border
            max-height="100%"
            :row-config="{isHover: true}"
            :data="tableData">
            <vhb-column type="seq" width="60"></vhb-column>
            <vhb-column field="name" title="Name" sortable></vhb-column>
            <vhb-column field="sex" title="Sex"></vhb-column>
            <vhb-column field="age" title="Age"></vhb-column>
            <vhb-column field="address" title="Address" show-overflow></vhb-column>
          </vhb-table>
        </div>
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
