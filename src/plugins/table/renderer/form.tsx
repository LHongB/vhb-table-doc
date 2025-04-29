import VHBTable from 'vhb-table'

// 创建一个简单的表单-输入框渲染
VHBTable.renderer.add('FormItemInput', {
  // 项内容模板
  renderItemContent (h, renderOpts, params) {
    const { data, property } = params
    const { props } = renderOpts
    return [
      <vhb-input v-model={ data[property] } { ...{ props } }></vhb-input>
    ]
  }
})

// 创建一个简单的表单-按钮组渲染
VHBTable.renderer.add('FormItemButtonGroup', {
  // 项内容模板
  renderItemContent () {
    return [
      <vhb-button type="submit" status="primary">查询</vhb-button>,
      <vhb-button type="reset">重置</vhb-button>
    ]
  }
})
