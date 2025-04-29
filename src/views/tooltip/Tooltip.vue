<template>
  <div>
    <h2>{{ $t('app.aside.nav.tooltip') }}</h2>
    <p class="tip">工具提示，查看 <router-link class="link" :to="{name: 'VHBAPI', params: {name: 'tooltip'}}">API</router-link>，可以通过 <router-link class="link" :to="{name: 'StartGlobal'}">setup</router-link> 设置全局参数</p>

    <p>
      <vhb-tooltip content="我是提示内容">
        <a class="link">文字提示</a>
      </vhb-tooltip>
    </p>

    <p>
      <vhb-tooltip content="除了点击之外不会自动消息" trigger="click">
        <vhb-button>点击触发</vhb-button>
      </vhb-tooltip>
      <vhb-tooltip content="hover 提示内容">
        <vhb-button>Hover 触发</vhb-button>
      </vhb-tooltip>
      <vhb-tooltip content="鼠标可以进入到 tooltip 中" enterable>
        <vhb-button>设置 Enterable</vhb-button>
      </vhb-tooltip>
    </p>

    <p>
      <vhb-tooltip v-model="value1" content="自定义提示内容" trigger="manual">
        <vhb-button @mouseenter="value1 = true" @mouseleave="value1 = false">手动模式</vhb-button>
      </vhb-tooltip>
    </p>

    <p>
      <vhb-tooltip ref="myTip"></vhb-tooltip>
      <vhb-button @mouseenter="$refs.myTip.open($event.target, '自定义提示内容')" @mouseleave="$refs.myTip.close()">高性能模式，只创建一个实例</vhb-button>
    </p>

    <p>
      <vhb-tooltip ref="xTip"></vhb-tooltip>
      <vhb-table
        border
        height="200"
        :tooltip-config="{}"
        :data="tableData"
        @cell-mouseenter="cellMouseenterEvent"
        @cell-mouseleave="cellMouseleaveEvent">
        <vhb-column type="seq" width="60"></vhb-column>
        <vhb-column field="name" title="Name"></vhb-column>
        <vhb-column field="sex" title="Sex"></vhb-column>
        <vhb-column field="age" title="Age"></vhb-column>
      </vhb-table>
    </p>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <pre-code class="html">{{ demoCodes[0] }}</pre-code>
      <pre-code class="javascript">{{ demoCodes[1] }}</pre-code>
    </pre>
  </div>
</template>

<script>
export default {
  data  () {
    return {
      value1: false,
      tableData: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
        { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
        { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
        { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
      ],
      demoCodes: [
        `
        <p>
          <vhb-tooltip content="我是提示内容">
            <a class="link">文字提示</a>
          </vhb-tooltip>
        </p>

        <p>
          <vhb-tooltip content="除了点击之外不会自动消息" trigger="click">
            <vhb-button>点击触发</vhb-button>
          </vhb-tooltip>
          <vhb-tooltip content="hover 提示内容">
            <vhb-button>Hover 触发</vhb-button>
          </vhb-tooltip>
          <vhb-tooltip content="鼠标可以进入到 tooltip 中" enterable>
            <vhb-button>设置 Enterable</vhb-button>
          </vhb-tooltip>
        </p>

        <p>
          <vhb-tooltip v-model="value1" content="自定义提示内容" trigger="manual">
            <vhb-button @mouseenter="value1 = true" @mouseleave="value1 = false">手动模式</vhb-button>
          </vhb-tooltip>
        </p>

        <p>
          <vhb-tooltip ref="myTip"></vhb-tooltip>
          <vhb-button @mouseenter="$refs.myTip.open($event.target, '自定义提示内容')" @mouseleave="$refs.myTip.close()">高性能模式，只创建一个实例</vhb-button>
        </p>

        <p>
          <vhb-tooltip ref="xTip"></vhb-tooltip>
          <vhb-table
            border
            height="200"
            :tooltip-config="{}"
            :data="tableData"
            @cell-mouseenter="cellMouseenterEvent"
            @cell-mouseleave="cellMouseleaveEvent">
            <vhb-column type="seq" width="60"></vhb-column>
            <vhb-column field="name" title="Name"></vhb-column>
            <vhb-column field="sex" title="Sex"></vhb-column>
            <vhb-column field="age" title="Age"></vhb-column>
          </vhb-table>
        </p>
        `,
        `
        export default {
          data () {
            return {
              value1: false,
              tableData: [
                { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
                { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
                { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
                { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
              ]
            }
          },
          methods: {
            cellMouseenterEvent ({ row, column, cell }) {
              this.$refs.xTip.open(cell, \`自定义提示内容：\${cell.innerText}\`)
            },
            cellMouseleaveEvent ({ row, column, cell }) {
              this.$refs.xTip.close()
            }
          }
        }
        `
      ]
    }
  },
  methods: {
    cellMouseenterEvent ({ cell }) {
      this.$refs.xTip.open(cell, `自定义提示内容：${cell.innerText}`)
    },
    cellMouseleaveEvent () {
      this.$refs.xTip.close()
    }
  }
}
</script>
