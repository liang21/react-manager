/**
 * 格式化金额
 * @param num
 * @returns
 */
export const formatNum = (num: number | string) => {
  const a = parseFloat(num.toString());
  return a.toLocaleString("zh-CN", { style: "currency", currency: "CNY" });
};

export const formatNum2 = (num: number | string) => {
  const a = parseFloat(num.toString());
  return a.toLocaleString("zh-CN", { style: "currency", currency: "CNY" });
};
