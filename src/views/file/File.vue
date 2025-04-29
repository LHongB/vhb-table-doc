<template>
  <div>
    <p class="tip">
      文件操作<br>
    </p>

    <p>
      <vhb-button @click="clickEvent1">读取一个文件</vhb-button>
      <vhb-button @click="clickEvent2">读取指定类型文件</vhb-button>
      <vhb-button @click="clickEvent3">读取多个文件</vhb-button>
    </p>

    <p>
      <vhb-button @click="clickEvent6">保存为txt文件</vhb-button>
      <vhb-button @click="clickEvent7">保存为html文件</vhb-button>
    </p>

    <p>
      <vhb-button @click="clickEvent10">下载文件</vhb-button>
    </p>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <pre-code class="xml">{{ demoCodes[0] }}</pre-code>
      <pre-code class="javascript">{{ demoCodes[1] }}</pre-code>
    </pre>
  </div>
</template>

<script>
import VHBTable from 'vhb-table'

export default {
  data () {
    return {
      demoCodes: [
        `
        <p>
          <vhb-button @click="clickEvent1">读取一个文件</vhb-button>
          <vhb-button @click="clickEvent2">读取指定类型文件</vhb-button>
          <vhb-button @click="clickEvent3">读取多个文件</vhb-button>
        </p>

        <p>
          <vhb-button @click="clickEvent6">保存为txt文件</vhb-button>
          <vhb-button @click="clickEvent7">保存为html文件</vhb-button>
        </p>

        <p>
          <vhb-button @click="clickEvent10">下载文件</vhb-button>
        </p>
        `,
        `
        import VHBTable from 'vhb-table'

        export default {
          methods: {
            async clickEvent1 () {
              try {
                const { file } = await VHBTable.readFile()
                VHBTable.modal.alert(\`文件名：\${file.name}，文件大小：\${file.size}\`)
              } catch (e) {}
            },
            async clickEvent2 () {
              try {
                const { file } = await VHBTable.readFile({
                  types: ['xlsx', 'html']
                })
                VHBTable.modal.alert(\`文件名：\${file.name}，文件大小：\${file.size}\`)
              } catch (e) {}
            },
            async clickEvent3 () {
              try {
                const { files } = await VHBTable.readFile({
                  multiple: true
                })
                VHBTable.modal.alert(\`共：\${files.length} 个文件\`)
              } catch (e) {}
            },
            clickEvent6 () {
              VHBTable.saveFile({
                filename: '文本',
                type: 'txt',
                content: '内容xxx'
              })
            },
            clickEvent7 () {
              VHBTable.saveFile({
                filename: '页面',
                type: 'html',
                content: '<html><head></head><body>内容xx</body></html>'
              })
            },
            clickEvent10 () {
              // 请求文件
              fetch('https://pic2.zhimg.com/50/v2-f7031359103859e1ed38559715ef5f3f_hd.gif').then(response => {
                response.blob().then(blob => {
                  // 下载到本地
                  VHBTable.saveFile({ filename: '图片', type: 'gif', content: blob })
                })
              })
            }
          }
        }
        `
      ]
    }
  },
  methods: {
    async clickEvent1 () {
      try {
        const { file } = await VHBTable.readFile()
        VHBTable.modal.alert(`文件名：${file.name}，文件大小：${file.size}`)
      } catch (e) {}
    },
    async clickEvent2 () {
      try {
        const { file } = await VHBTable.readFile({
          types: ['xlsx', 'html']
        })
        VHBTable.modal.alert(`文件名：${file.name}，文件大小：${file.size}`)
      } catch (e) {}
    },
    async clickEvent3 () {
      try {
        const { files } = await VHBTable.readFile({
          multiple: true
        })
        VHBTable.modal.alert(`共：${files.length} 个文件`)
      } catch (e) {}
    },
    clickEvent6 () {
      VHBTable.saveFile({
        filename: '文本',
        type: 'txt',
        content: '内容xxx'
      })
    },
    clickEvent7 () {
      VHBTable.saveFile({
        filename: '页面',
        type: 'html',
        content: '<html><head></head><body>内容xx</body></html>'
      })
    },
    clickEvent10 () {
      // 请求文件
      fetch('https://pic2.zhimg.com/50/v2-f7031359103859e1ed38559715ef5f3f_hd.gif').then(response => {
        response.blob().then(blob => {
          // 下载到本地
          VHBTable.saveFile({ filename: '图片', type: 'gif', content: blob })
        })
      })
    }
  }
}
</script>
