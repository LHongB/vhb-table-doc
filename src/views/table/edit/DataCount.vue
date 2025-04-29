<template>
  <div>
    <p class="tip">
      通过 <table-column-api-link prop="slot"/>插槽（实时） 或者 <table-column-api-link prop="formatter"/> 格式化内容（值改变时），自动计算联动的行数据，如果是用原生输入框可以通过添加 <table-column-api-link prop="immediate"/> 启用实时运算<br>
      <span class="red">（具体请自行实现，该示例仅供参考）</span>
    </p>

    <vhb-table
      border
      resizable
      show-overflow
      show-footer
      :data="tableData"
      :footer-method="footerMethod"
      :edit-config="{trigger: 'click', mode: 'cell'}">
      <vhb-column type="seq" width="60"></vhb-column>
      <vhb-column field="name" title="书名" :edit-render="{}">
        <template #edit="{ row }">
          <vhb-input v-model="row.name" type="text"></vhb-input>
        </template>
      </vhb-column>
      <vhb-column field="amount" title="单价" :edit-render="{}">
        <template #edit="{ row }">
          <vhb-input v-model="row.amount" type="number"></vhb-input>
        </template>
      </vhb-column>
      <vhb-column field="num1" title="数量" :edit-render="{}">
        <template #edit="{ row }">
          <vhb-input v-model="row.num1" type="number"></vhb-input>
        </template>
      </vhb-column>
      <vhb-column title="总价">
        <template #default="{ row }">
          <span>{{ countAmount(row) }} 元</span>
        </template>
      </vhb-column>
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
        { name: 'test abc', amount: 80, num1: 5 },
        { name: 'JavaScript 权威指南', amount: 40, num1: 3 },
        { name: 'Vue 入门到精通', amount: 90, num1: 9 },
        { name: '深入现代 JavaScript 应用开发', amount: 60, num1: 1 }
      ],
      demoCodes: [
        `
        <vhb-table
          border
          resizable
          show-overflow
          show-footer
          :data="tableData"
          :footer-method="footerMethod"
          :edit-config="{trigger: 'click', mode: 'cell'}">
          <vhb-column type="seq" width="60"></vhb-column>
          <vhb-column field="name" title="书名" :edit-render="{}">
            <template #edit="{ row }">
              <vhb-input v-model="row.name" type="text"></vhb-input>
            </template>
          </vhb-column>
          <vhb-column field="amount" title="单价" :edit-render="{}">
            <template #edit="{ row }">
              <vhb-input v-model="row.amount" type="number"></vhb-input>
            </template>
          </vhb-column>
          <vhb-column field="num1" title="数量" :edit-render="{}">
            <template #edit="{ row }">
              <vhb-input v-model="row.num1" type="number"></vhb-input>
            </template>
          </vhb-column>
          <vhb-column title="总价">
            <template #default="{ row }">
              <span>{{ countAmount(row) }} 元</span>
            </template>
          </vhb-column>
        </vhb-table>
        `,
        `
        export default {
          data () {
            return {
              tableData: [
                { name: 'test abc', amount: 80, number: 5 },
                { name: 'JavaScript 权威指南', amount: 40, number: 3 },
                { name: 'Vue 入门到精通', amount: 90, number: 9 },
                { name: '深入现代 JavaScript 应用开发', amount: 60, number: 1 }
              ]
            }
          },
          methods: {
            sumNum (list, field) {
              let count = 0
              list.forEach(item => {
                count += Number(item[field])
              })
              return count
            },
            countAmount (row) {
              return row.amount * row.num1
            },
            countAllAmount (data) {
              let count = 0
              data.forEach(row => {
                count += this.countAmount(row)
              })
              return count
            },
            footerMethod ({ columns, data }) {
              return [
                columns.map((column, columnIndex) => {
                  if (columnIndex === 0) {
                    return '合计'
                  }
                  if (columnIndex === 3) {
                    return \`\${this.sumNum(data, 'num1')} 本\`
                  } else if (columnIndex === 4) {
                    return \`共 \${this.countAllAmount(data)} 元\`
                  }
                  return '-'
                })
              ]
            }
          }
        }
        `
      ]
    }
  },
  methods: {
    sumNum (list, field) {
      let count = 0
      list.forEach(item => {
        count += Number(item[field])
      })
      return count
    },
    countAmount (row) {
      return row.amount * row.num1
    },
    countAllAmount (data) {
      let count = 0
      data.forEach(row => {
        count += this.countAmount(row)
      })
      return count
    },
    footerMethod ({ columns, data }) {
      return [
        columns.map((column, columnIndex) => {
          if (columnIndex === 0) {
            return '合计'
          }
          if (columnIndex === 3) {
            return `${this.sumNum(data, 'num1')} 本`
          } else if (columnIndex === 4) {
            return `共 ${this.countAllAmount(data)} 元`
          }
          return '-'
        })
      ]
    }
  }
}
</script>
