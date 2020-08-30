import _ from 'lodash';

/**
 * 隨機更新目標欄位數值
 * @param {array} data 資料
 * @param {string} property 目標欄位
 * @param {number} min 最小增加值
 * @param {number} max 最大增加值
 * @param {number} rate 每筆被更新機率 [0-1]
 */
export function randomData(data = [], property, min, max, rate) {
  return data.map((item) => {
    // 替換機率
    const pass = _.random(1, data.length) < data.length * rate;
    const value = pass ? item[property] + _.random(min, max) : item[property];
    return { ...item, [property]: value };
  });
}
