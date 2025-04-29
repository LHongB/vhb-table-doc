<template>
  <div>
    <p class="tip">
      <table-api-link name="vhb-table"/> 基础表格，基于模板方式使用非常简单、便捷<br>
      <span class="red">（注：每一列 field 字段属性不可更改）</span>
    </p>

    <vhb-toolbar>
      <template #buttons>
        <vhb-button @click="allAlign = 'left'">居左</vhb-button>
        <vhb-button @click="allAlign = 'center'">居中</vhb-button>
        <vhb-button @click="allAlign = 'right'">居右</vhb-button>
      </template>
    </vhb-toolbar>

    <vhb-table
      :align="allAlign"
      :data="tableData">
      <vhb-column type="seq" width="60"></vhb-column>
      <vhb-column field="name" title="Name"></vhb-column>
      <vhb-column field="sex" title="Sex"></vhb-column>
      <vhb-column field="age" title="Age"></vhb-column>
    </vhb-table>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <pre-code class="xml">{{ demoCodes[0] }}</pre-code>
      <pre-code class="javascript">{{ demoCodes[1] }}</pre-code>
    </pre>

    <p class="tip">使用 <table-api-link prop="row-config"/>.<table-api-link prop="isHover"/> 属性启用 hover 行高亮</p>

    <vhb-table
      border
      show-header-overflow
      show-overflow
      :row-config="{isHover: true}"
      :align="allAlign"
      :data="tableData">
      <vhb-column type="seq" title="序号" width="60"></vhb-column>
      <vhb-column field="name" title="Name"></vhb-column>
      <vhb-column field="sex" title="Sex"></vhb-column>
      <vhb-column field="age" title="Age"></vhb-column>
      <vhb-column field="address" title="Address"></vhb-column>
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
      allAlign: null,
      tableData: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
        { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
        { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
        { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
      ],
      demoCodes: [
        `
        <vhb-toolbar>
          <template #buttons>
            <vhb-button @click="allAlign = 'left'">居左</vhb-button>
            <vhb-button @click="allAlign = 'center'">居中</vhb-button>
            <vhb-button @click="allAlign = 'right'">居右</vhb-button>
          </template>
        </vhb-toolbar>

        <vhb-table
          :align="allAlign"
          :data="tableData">
          <vhb-column type="seq" width="60"></vhb-column>
          <vhb-column field="name" title="Name"></vhb-column>
          <vhb-column field="sex" title="Sex"></vhb-column>
          <vhb-column field="age" title="Age"></vhb-column>
        </vhb-table>
        `,
        `
        export default {
          data () {
            return {
              allAlign: null,
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
          show-header-overflow
          show-overflow
          :align="allAlign"
          :row-config="{isHover: true}"
          :data="tableData">
          <vhb-column type="seq" title="序号" width="60"></vhb-column>
          <vhb-column field="name" title="Name"></vhb-column>
          <vhb-column field="sex" title="Sex"></vhb-column>
          <vhb-column field="age" title="Age"></vhb-column>
          <vhb-column field="address" title="Address"></vhb-column>
        </vhb-table>
        `,
        `
        export default {
          data () {
            return {
              allAlign: null,
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
