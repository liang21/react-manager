export default {
  /**
   * storage存储
   * @param key
   * @param value
   */
  set(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value))
  },
  /**
   * storage获取
   * @param key
   * @returns
   */
  get(key: string) {
    const value = localStorage.getItem(key)
    if (value === null || value === undefined) return ''
    try {
      return JSON.parse(value)
    } catch (err) {
      return value
    }
  },
  /**
   * storage删除
   * @param key
   */
  remove(key: string) {
    localStorage.removeItem(key)
  },
  /**
   * storage清空
   */
  clear() {
    localStorage.clear()
  }
}
