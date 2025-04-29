import VHBTable from 'vhb-table'

// 创建一个简单的超链接渲染
VHBTable.renderer.add('MyLink', {
  // 默认显示模板
  renderDefault (h, renderOpts, params) {
    const { row, column } = params
    const { events } = renderOpts
    return [
      <a class="link" onClick={ () => events?.click(params) }>{row[column.property]}</a>
    ]
  }
})
