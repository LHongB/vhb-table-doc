<template>
  <div>
    <p class="tip">表单</p>

    <vhb-form :data="formData" @submit="submitEvent">
      <vhb-form-item title="app.body.label.name" field="name" :item-render="{}">
        <template #default="{ data }">
          <vhb-input v-model="data.name" placeholder="请输入名称"></vhb-input>
        </template>
      </vhb-form-item>
      <vhb-form-item title="性别" field="sex" :item-render="{}" :title-prefix="{ message: '帮助信息！！！' }">
        <template #default="{ data }">
          <vhb-select v-model="data.sex" placeholder="请选择性别" clearable>
            <vhb-option value="1" label="女"></vhb-option>
            <vhb-option value="2" label="男"></vhb-option>
          </vhb-select>
        </template>
      </vhb-form-item>
      <vhb-form-item>
        <template #default>
          <vhb-button type="submit" status="primary">查询</vhb-button>
          <vhb-button type="reset">重置</vhb-button>
        </template>
      </vhb-form-item>
    </vhb-form>

    <vhb-table
      show-overflow
      height="400"
      :loading="loading"
      :data="tableData">
      <vhb-column type="checkbox" width="60"></vhb-column>
      <vhb-column type="seq" title="序号" width="60"></vhb-column>
      <vhb-column field="name" title="Name"></vhb-column>
      <vhb-column field="sex" title="Sex"></vhb-column>
      <vhb-column field="age" title="Age"></vhb-column>
      <vhb-column field="rate" title="Rate"></vhb-column>
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
      loading: false,
      formData: {
        name: '',
        sex: ''
      },
      tableData: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, amount: 888, address: 'test abc' },
        { id: 10002, name: 'Test2', role: 'Test', sex: '1', age: 22, amount: 666, address: 'Guangzhou' },
        { id: 10003, name: 'Test3', role: 'PM', sex: '1', age: 32, amount: 89, address: 'Shanghai' },
        { id: 10004, name: 'Test4', role: 'Designer', sex: '0', age: 23, amount: 1000, address: 'test abc' },
        { id: 10005, name: 'Test5', role: 'Develop', sex: '0', age: 30, amount: 999, address: 'Shanghai' },
        { id: 10006, name: 'Test6', role: 'Designer', sex: '0', age: 21, amount: 998, address: 'test abc' },
        { id: 10007, name: 'Test7', role: 'Test', sex: '1', age: 29, amount: 2000, address: 'test abc' },
        { id: 10008, name: 'Test8', role: 'Develop', sex: '1', age: 35, amount: 999, address: 'test abc' }
      ],
      demoCodes: [
        `
        <vhb-form :data="formData" @submit="submitEvent">
          <vhb-form-item title="app.body.label.name" field="name" :item-render="{}">
            <template #default="{ data }">
              <vhb-input v-model="data.name" placeholder="请输入名称"></vhb-input>
            </template>
          </vhb-form-item>
          <vhb-form-item title="性别" field="sex" :item-render="{}" :title-prefix="{ message: '帮助信息！！！' }">
            <template #default="{ data }">
              <vhb-select v-model="data.sex" placeholder="请选择性别" clearable>
                <vhb-option value="1" label="女"></vhb-option>
                <vhb-option value="2" label="男"></vhb-option>
              </vhb-select>
            </template>
          </vhb-form-item>
          <vhb-form-item>
            <template #default>
              <vhb-button type="submit" status="primary">查询</vhb-button>
              <vhb-button type="reset">重置</vhb-button>
            </template>
          </vhb-form-item>
        </vhb-form>

        <vhb-table
          show-overflow
          height="400"
          :loading="loading"
          :data="tableData">
          <vhb-column type="checkbox" width="60"></vhb-column>
          <vhb-column type="seq" title="序号" width="60"></vhb-column>
          <vhb-column field="name" title="Name"></vhb-column>
          <vhb-column field="sex" title="Sex"></vhb-column>
          <vhb-column field="age" title="Age"></vhb-column>
          <vhb-column field="rate" title="Rate"></vhb-column>
        </vhb-table>
        `,
        `
        export default {
          data () {
            return {
              loading: false,
              formData: {
                name: '',
                sex: ''
              },
              tableData: [
                { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, amount: 888, address: 'test abc' },
                { id: 10002, name: 'Test2', role: 'Test', sex: '1', age: 22, amount: 666, address: 'Guangzhou' },
                { id: 10003, name: 'Test3', role: 'PM', sex: '1', age: 32, amount: 89, address: 'Shanghai' },
                { id: 10004, name: 'Test4', role: 'Designer', sex: '0', age: 23, amount: 1000, address: 'test abc' },
                { id: 10005, name: 'Test5', role: 'Develop', sex: '0', age: 30, amount: 999, address: 'Shanghai' },
                { id: 10006, name: 'Test6', role: 'Designer', sex: '0', age: 21, amount: 998, address: 'test abc' },
                { id: 10007, name: 'Test7', role: 'Test', sex: '1', age: 29, amount: 2000, address: 'test abc' },
                { id: 10008, name: 'Test8', role: 'Develop', sex: '1', age: 35, amount: 999, address: 'test abc' }
              ]
            }
          },
          methods: {
            submitEvent () {
              console.log('submit')
            }
          }
        }
        `
      ]
    }
  },
  methods: {
    submitEvent () {
      console.log('submit')
    }
  }
}
</script>
