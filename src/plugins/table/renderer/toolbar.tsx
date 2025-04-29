import VHBTable from 'vhb-table'

// 创建一个简单的工具栏-左侧按钮渲染
VHBTable.renderer.add('ToolbarButtonDownload', {
  renderToolbarButton (h, renderOpts, params) {
    const { events = {} } = renderOpts
    const { button } = params
    return [
      <vhb-button circle icon="fa fa-cloud-download" onClick={
        () => {
          events.click(button)
        }
      }></vhb-button>
    ]
  }
})

// 创建一个简单的工具栏-右侧工具渲染
VHBTable.renderer.add('ToolbarToolPrint', {
  renderToolbarTool (h, renderOpts, params) {
    const { $table } = params
    return [
      <vhb-button circle icon="fa fa-print" onClick={
        () => {
          $table.print()
        }
      }></vhb-button>
    ]
  }
})
