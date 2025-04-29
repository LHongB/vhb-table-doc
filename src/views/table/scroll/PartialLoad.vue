<template>
  <div>
    <p class="tip">局部递增数据</p>

    <vhb-toolbar :loading="loading">
      <template #buttons>
        <vhb-button @click="loadList(20)">+20条</vhb-button>
        <vhb-button @click="loadList(100)">+100条</vhb-button>
        <vhb-button @click="loadList(500)">+500条</vhb-button>
        <vhb-button @click="loadList(1000)">+1000条</vhb-button>
        <vhb-button @click="loadList(2000)">+2000条</vhb-button>
        <vhb-button @click="$refs.xTable.scrollTo(null, 4000)">y=4000</vhb-button>
        <vhb-button @click="$refs.xTable.clearScroll()">清除滚动状态</vhb-button>
      </template>
    </vhb-toolbar>

    <vhb-table
      ref="xTable"
      border
      resizable
      show-overflow
      height="500"
      row-id="id"
      :loading="loading">
      <vhb-column type="checkbox" width="60"></vhb-column>
      <vhb-column type="seq" width="100"></vhb-column>
      <vhb-column field="name" title="Name" sortable></vhb-column>
      <vhb-column field="role" title="Role"></vhb-column>
      <vhb-column field="age" title="Age"></vhb-column>
      <vhb-column field="date" title="Date"></vhb-column>
      <vhb-column field="address" title="Address"></vhb-column>
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
        <vhb-toolbar :loading="loading">
          <template #buttons>
            <vhb-button @click="loadList(20)">+20条</vhb-button>
            <vhb-button @click="loadList(100)">+100条</vhb-button>
            <vhb-button @click="loadList(500)">+500条</vhb-button>
            <vhb-button @click="loadList(1000)">+1000条</vhb-button>
            <vhb-button @click="loadList(2000)">+2000条</vhb-button>
            <vhb-button @click="$refs.xTable.scrollTo(null, 4000)">y=4000</vhb-button>
            <vhb-button @click="$refs.xTable.clearScroll()">清除滚动状态</vhb-button>
          </template>
        </vhb-toolbar>

        <vhb-table
          ref="xTable"
          border
          resizable
          show-overflow
          height="500"
          row-id="id"
          :loading="loading">
          <vhb-column type="checkbox" width="60"></vhb-column>
          <vhb-column type="seq" width="100"></vhb-column>
          <vhb-column field="name" title="Name" sortable></vhb-column>
          <vhb-column field="role" title="Role"></vhb-column>
          <vhb-column field="age" title="Age"></vhb-column>
          <vhb-column field="date" title="Date"></vhb-column>
          <vhb-column field="address" title="Address"></vhb-column>
        </vhb-table>
        `,
        `
        export default {
          data () {
            return {
              loading: false
            }
          },
          created () {
            // 动态定义，阻断 vue 对大数据双向绑定，提升加载速度
            this.allData = []
            this.loadList(600)
          },
          methods: {
            loadList (size) {
              this.loading = true
              this.findList(size).then(data => {
                this.allData = this.allData.concat(data)// 局部追加并保存所有数据
                const xTable = this.$refs.xTable
                if (xTable) {
                  xTable.loadData(this.allData)
                }
                this.loading = false
              })
            },
            findList (size) {
              return new Promise(resolve => {
                setTimeout(() => {
                  var list = []
                  for (var index = 0; index < size; index++) {
                    list.push({
                      id: 100000 + index,
                      name: 'test' + index,
                      role: 'developer',
                      age: 10,
                      date: '2019-05-01',
                      address: 'address abc' + index
                    })
                  }
                  resolve(list)
                }, 250)
              })
            }
          }
        }
        `
      ]
    }
  },
  created () {
    // 动态定义，阻断 vue 对大数据双向绑定，提升加载速度
    this.allData = []
    this.loadList(600)
  },
  methods: {
    loadList (size) {
      this.loading = true
      this.findList(size).then(data => {
        this.allData = this.allData.concat(data)// 局部追加并保存所有数据
        const xTable = this.$refs.xTable
        if (xTable) {
          xTable.loadData(this.allData)
        }
        this.loading = false
      })
    },
    findList (size) {
      return new Promise(resolve => {
        setTimeout(() => {
          const list = []
          for (let index = 0; index < size; index++) {
            list.push({
              id: 100000 + index,
              name: 'test' + index,
              role: 'developer',
              age: 10,
              date: '2019-05-01',
              address: 'address abc' + index
            })
          }
          resolve(list)
        }, 250)
      })
    }
  }
}
</script>
