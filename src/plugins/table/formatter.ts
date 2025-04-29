import VHBTable from 'vhb-table'
import HBUtils from 'hb-js-utils'

// 自定义全局的格式化处理函数
VHBTable.formats.mixin({
  // 格式化性别
  formatSex ({ cellValue }) {
    return cellValue ? (cellValue === '1' ? '男' : '女') : ''
  },
  // 格式化下拉选项
  formatSelect ({ cellValue }, list: any[]) {
    const item = list.find(item => item.value === cellValue)
    return item ? item.label : ''
  },
  // 格式化日期，默认 yyyy-MM-dd HH:mm:ss
  formatDate ({ cellValue }, format) {
    return HBUtils.toDateString(cellValue, format || 'yyyy-MM-dd HH:mm:ss')
  },
  // 四舍五入金额，每隔3位逗号分隔，默认2位数
  formatAmount ({ cellValue }, digits = 2) {
    return HBUtils.commafy(HBUtils.toNumber(cellValue), { digits })
  },
  // 格式化银行卡，默认每4位空格隔开
  formatBankcard ({ cellValue }) {
    return HBUtils.commafy(HBUtils.toValueString(cellValue), { spaceNumber: 4, separator: ' ' })
  },
  // 四舍五入,默认两位数
  formatFixedNumber ({ cellValue }, digits = 2) {
    return HBUtils.toFixed(HBUtils.round(cellValue, digits), digits)
  },
  // 向下舍入,默认两位数
  formatCutNumber ({ cellValue }, digits = 2) {
    return HBUtils.toFixed(HBUtils.floor(cellValue, digits), digits)
  }
})
