/**
 * 格式化金额
 * @param num
 * @returns
 */
export const formatNumMoney = (num: number | string) => {
  const a = parseFloat(num.toString())
  return a.toLocaleString('zh-CN', { style: 'currency', currency: 'CNY' })
}

export const formatNum = (num: number | string) => {
  const a = num.toString()
  if (a.indexOf('.') > -1) {
    return a.replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
  }
  return a.replace(/(\d)(?=(\d{3})+$)/g, '$1,')
}

/**
 * 格式化时间
 * @param time
 * @returns
 * @example
 */
export const toLocalDate = (date?: Date, rule?: string) => {
  let curDate = new Date()
  if (date) curDate = date
  if (rule == 'yyyy-MM-dd') {
    return curDate.toLocaleDateString().replace('/', '-')
  }
  if (rule == 'hh:mm:ss') {
    return curDate.toLocaleTimeString().replace('/', '-')
  }
  return curDate.toLocaleString().replace('/', '-')
}

export const formatDate = (date?: Date, rule?: string) => {
  let curDate = new Date()
  if (date) curDate = date
  let fmt = rule || 'yyyy-MM-dd hh:mm:ss'
  fmt = fmt.replace(/(y+)/, curDate.getFullYear().toString())
  type OType = {
    [key: string]: number
  }
  const O: OType = {
    'M+': curDate.getMonth() + 1,
    'd+': curDate.getDate(),
    'H+': curDate.getHours(),
    'm+': curDate.getMinutes(),
    's+': curDate.getSeconds()
  }
  for (const k in O) {
    fmt = fmt.replace(new RegExp(`(${k})`), O[k] > 9 ? O[k].toString() : '0' + O[k].toString())
  }
  return fmt
}
