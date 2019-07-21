import CryptoJS from 'crypto-js/crypto-js';

export const encryption = (params) => {
  let {data, type, param, key} = params;
  const result = JSON.parse(JSON.stringify(data));
  if (type === 'Base64') {
    param.forEach(ele => {
      result[ele] = btoa(result[ele]);
    });
  } else {
    param.forEach(ele => {
      let data = result[ele];
      key = CryptoJS.enc.Latin1.parse(key);
      let iv = key;
      // 加密
      let encrypted = CryptoJS.AES.encrypt(
        data,
        key,
        {
          iv: iv,
          mode: CryptoJS.mode.CBC,
          padding: CryptoJS.pad.ZeroPadding
        });
      result[ele] = encrypted.toString();
    });
  }
  return result;
};


export const randomNum = (len, date) => {
  let random = '';
  random = Math.ceil(Math.random() * 100000000000000).toString().substr(0, typeof len === 'number' ? len : 4);
  if (date) {
    random = random + Date.now();
  }
  return random;
};


export const store = {

  /**
   * 存储localStorage
   */
  setStore: (params) => {
    const {name, content, type} = params;
    const obj = {
      dataType: typeof (content),
      content: content,
      type: type,
      datetime: new Date().getTime()
    };
    if (type) {
      window.sessionStorage.setItem(name, JSON.stringify(obj));
    } else {
      window.localStorage.setItem(name, JSON.stringify(obj));
    }
  },
  /**
   * 获取localStorage
   */
  getStore: (name) => {
    let content;
    let obj = window.localStorage.getItem(name);
    if (validatenull(obj)) {
      obj = window.sessionStorage.getItem(name);
    }
    if (validatenull(obj)) {
      return;
    }
    obj = JSON.parse(obj);
    if (obj.dataType === 'string') {
      content = obj.content;
    } else if (obj.dataType === 'number') {
      content = Number(obj.content);
    } else if (obj.dataType === 'boolean') {
      content = eval(obj.content);
    } else if (obj.dataType === 'object') {
      content = obj.content;
    }
    return content;
  },
  /**
   * 删除localStorage
   */
  removeStore: name => {
    window.localStorage.removeItem(name);
    window.sessionStorage.removeItem(name);
  }

};


/**
 * 判断是否为空
 */
export function validatenull(val) {
  if (val instanceof Array) {
    if (val.length === 0) {
      return true;
    }
  } else if (val instanceof Object) {
    if (JSON.stringify(val) === '{}') {
      return true;
    }
  } else {
    if (val === 'null' || val === null || val === 'undefined' || val === undefined || val === '') {
      return true;
    }
    return false;
  }
  return false;
}


