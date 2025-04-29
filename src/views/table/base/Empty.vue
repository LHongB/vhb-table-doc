<template>
  <div>
    <p class="tip">当数据为空时，通过 <table-api-link prop="empty-text"/> 设置空数据提示文本，可以使用 <router-link class="link" :to="{name: 'RendererEmpty'}">渲染器</router-link> 实现全局复用</p>

    <vhb-table
      empty-text="没有更多数据了！"
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

    <p class="tip">可以通过 slot=<table-api-link prop="empty"/> 自定义提示语</p>

    <vhb-table
      border
      :loading="loading"
      :data="tableData">
      <vhb-column type="seq" width="60"></vhb-column>
      <vhb-column field="name" title="Name"></vhb-column>
      <vhb-column field="sex" title="Sex"></vhb-column>
      <vhb-column field="age" title="Age"></vhb-column>
      <vhb-column field="address" title="Address" show-overflow></vhb-column>
      <template #empty>
        <span style="color: red;">
          <img src="https://n.sinaimg.cn/sinacn17/w120h120/20180314/89fc-fyscsmv5911424.gif">
          <p>没有更多数据了！</p>
        </span>
      </template>
    </vhb-table>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <pre-code class="xml">{{ demoCodes[2] }}</pre-code>
      <pre-code class="javascript">{{ demoCodes[3] }}</pre-code>
    </pre>

    <p class="tip">出现滚动条</p>

    <vhb-table
      border
      height="300"
      :loading="loading"
      :data="tableData">
      <vhb-column type="seq" width="60"></vhb-column>
      <vhb-column field="name" title="Name" width="300"></vhb-column>
      <vhb-column field="sex" title="Sex" width="300"></vhb-column>
      <vhb-column field="age" title="Age" width="300"></vhb-column>
      <vhb-column field="date12" title="Date" width="300"></vhb-column>
      <vhb-column field="address" title="Address" width="300" show-overflow></vhb-column>
      <template #empty>
        <span style="color: red;">
          <img src="https://pic2.zhimg.com/50/v2-f7031359103859e1ed38559715ef5f3f_hd.gif">
          <p>不用再看了，没有更多数据了！</p>
        </span>
      </template>
    </vhb-table>

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
      loading: false,
      tableData: [],
      tableData2: [],
      demoCodes: [
        `
        <vhb-table
          empty-text="没有更多数据了！"
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
              tableData: []
            }
          },
          created () {
            setTimeout(() => {
              this.tableData = []
            }, 1000)
          }
        }
        `,
        `
        <vhb-table
          border
          :loading="loading"
          :data="tableData">
          <vhb-column type="seq" width="60"></vhb-column>
          <vhb-column field="name" title="Name"></vhb-column>
          <vhb-column field="sex" title="Sex"></vhb-column>
          <vhb-column field="age" title="Age"></vhb-column>
          <vhb-column field="address" title="Address" show-overflow></vhb-column>
          <template #empty>
            <span style="color: red;">
              <img src="https://n.sinaimg.cn/sinacn17/w120h120/20180314/89fc-fyscsmv5911424.gif">
              <p>没有更多数据了！</p>
            </span>
          </template>
        </vhb-table>
        `,
        `
        export default {
          data () {
            return {
              loading: false,
              tableData: []
            }
          },
          created () {
            this.loading = true
            setTimeout(() => {
              this.tableData = []
              this.loading = false
            }, 1000)
          }
        }
        `,
        `
        <vhb-table
          border
          height="300"
          :loading="loading"
          :data="tableData">
          <vhb-column type="seq" width="60"></vhb-column>
          <vhb-column field="name" title="Name" width="300"></vhb-column>
          <vhb-column field="sex" title="Sex" width="300"></vhb-column>
          <vhb-column field="age" title="Age" width="300"></vhb-column>
          <vhb-column field="date12" title="Date" width="300"></vhb-column>
          <vhb-column field="address" title="Address" width="300" show-overflow></vhb-column>
          <template #empty>
            <span style="color: red;">
              <img src="https://pic2.zhimg.com/50/v2-f7031359103859e1ed38559715ef5f3f_hd.gif">
              <p>不用再看了，没有更多数据了！</p>
            </span>
          </template>
        </vhb-table>
        `,
        `
        export default {
          data () {
            return {
              loading: false,
              tableData: []
            }
          },
          created () {
            this.loading = true
            setTimeout(() => {
              this.tableData = []
              this.loading = false
            }, 1000)
          }
        }
        `
      ]
    }
  },
  created () {
    this.loading = true
    setTimeout(() => {
      this.tableData = []
      this.loading = false
    }, 1000)
  }
}
</script>
