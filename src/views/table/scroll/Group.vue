<template>
  <div>
    <p class="tip">分组表头<br><span class="red">（注：分组表头不支持横向虚拟滚动，通过设置 scroll-x={enabled: false} 关闭即可）</span></p>

    <vhb-table
      border
      resizable
      show-overflow
      ref="xTable"
      height="500"
      :scroll-x="{enabled: false}"
      :loading="loading">
      <vhb-column type="seq" title="序号" width="100"></vhb-column>
      <vhb-colgroup title="基本信息">
        <vhb-column field="name" title="Name" width="200" sortable></vhb-column>
        <vhb-column field="age" title="Age" width="200"></vhb-column>
        <vhb-column field="sex" title="Sex" width="200"></vhb-column>
      </vhb-colgroup>
      <vhb-colgroup title="详细信息">
        <vhb-colgroup title="分组">
          <vhb-column field="rate" title="Rate" width="200"></vhb-column>
          <vhb-column field="region" title="Region" width="200"></vhb-column>
        </vhb-colgroup>
        <vhb-colgroup title="其他">
          <vhb-column field="time" title="Time" width="200" sortable></vhb-column>
          <vhb-column field="address" title="Address" width="300" show-overflow></vhb-column>
        </vhb-colgroup>
      </vhb-colgroup>
      <vhb-column field="updateTime" title="UpdateTime" width="200"></vhb-column>
      <vhb-column field="createTime" title="CreateTime" width="200"></vhb-column>
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
      demoCodes: [
        `
        <vhb-table
          border
          resizable
          show-overflow
          ref="xTable"
          height="500"
          :scroll-x="{enabled: false}"
          :loading="loading">
          <vhb-column type="seq" title="序号" width="100"></vhb-column>
          <vhb-colgroup title="基本信息">
            <vhb-column field="name" title="Name" width="200" sortable></vhb-column>
            <vhb-column field="age" title="Age" width="200"></vhb-column>
            <vhb-column field="sex" title="Sex" width="200"></vhb-column>
          </vhb-colgroup>
          <vhb-colgroup title="详细信息">
            <vhb-colgroup title="分组">
              <vhb-column field="rate" title="Rate" width="200"></vhb-column>
              <vhb-column field="region" title="Region" width="200"></vhb-column>
            </vhb-colgroup>
            <vhb-colgroup title="其他">
              <vhb-column field="time" title="Time" width="200" sortable></vhb-column>
              <vhb-column field="address" title="Address" width="300" show-overflow></vhb-column>
            </vhb-colgroup>
          </vhb-colgroup>
          <vhb-column field="updateTime" title="UpdateTime" width="200"></vhb-column>
          <vhb-column field="createTime" title="CreateTime" width="200"></vhb-column>
        </vhb-table>
        `,
        `
        export default {
          data () {
            return {
              loading: false
            }
          },
          mounted () {
            this.loading = true
            this.$nextTick(() => {
              const $table = this.$refs.xTable
              this.mockList(1000).then(data => {
                this.loading = false
                if ($table) {
                  $table.loadData(data)
                }
              })
            })
          },
          methods: {
            mockList (size) {
              return new Promise(resolve => {
                const list = []
                for (let index = 0; index < size; index++) {
                  list.push({
                    name: \`名称\${index}\`,
                    sex: '0',
                    num: 123,
                    age: 18,
                    num2: 234,
                    rate: 3,
                    address: 'shenzhen'
                  })
                }
                resolve(list)
              })
            }
          }
        }
        `
      ]
    }
  },
  mounted () {
    this.loading = true
    this.$nextTick(() => {
      const $table = this.$refs.xTable
      this.mockList(1000).then(data => {
        this.loading = false
        if ($table) {
          $table.loadData(data)
        }
      })
    })
  },
  methods: {
    mockList (size) {
      return new Promise(resolve => {
        const list = []
        for (let index = 0; index < size; index++) {
          list.push({
            name: `名称${index}`,
            sex: '0',
            num: 123,
            age: 18,
            num2: 234,
            rate: 3,
            address: 'shenzhen'
          })
        }
        resolve(list)
      })
    }
  }
}
</script>
