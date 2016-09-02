/**
 * Created by showzyl on 16/8/19.
 */

window.Mvjssdk = window.Mvjssdk || {};


!(function (window) {
  "use strict";

  let Mv = window.Mvjssdk || {};
  Mv.Core = {
    version: '0.0.1',
    time_stamp: +new Date(),
    system : {}, ///一些浏览器通用内容
    //number : {}, //数字计算相关
    //date : {}, //日期时间相关
    //string : {}, //字符串相关
    dom: {}, // dom相关
    cookie : {}, //cookie相关
    ls: {} // localstorage相关
  };

  let core = Mv.Core;
  let system = core.system;

  // safiri 无痕模式
  try {
    localStorage.setItem('isPrivateMode', '1');
    localStorage.removeItem('isPrivateMode');
    Mv.isPrivateMode = false;
  } catch(e) {
    Mv.isPrivateMode = true;
  }


  /**************************************************************************************************************
   *core.cookie
   ***************************************************************************************************************/
  /**
   * @description 得到指定的cookie值
   * @param {String} name cookie名称【必选】
   * @param {Boolean} [encode] 是否encodeURIComponent 默认false【可选】
   * @return 指定cookie的值
   * @example Q_core.cookie.get('name')
   * @method
   */
  core.cookie.get = function(name, encode) {
    var m = document.cookie.match(new RegExp("(^| )" + name + "=([^;])*", "gi")),
      v = !m ? '' : m[0].split(name + '=')[1];
    return (!!encode ? v : decodeURIComponent(v));
  };
  /**
   * @description set设置cookie, del删除cookie,当expires小于0时即为删除cookie
   * @param {Object} options 【必选】
   * @param {String} options.name cookie的名称【必选】
   * @param {String} options.value cookie的值【必选】
   * @param {Number} [options.expires] cookie的过期时间，为整数，单位为天，为负时删除cookie【可选】
   * @param {String} [options.domain]  指定cookie所属的域【可选】
   * @param {String} [options.path]  指定cookie 的路径【可选】
   * @param {Boolean} [options.secure]  是否安全传输 当协议为https时才可用【可选】
   * @param {Boolean} [options.encode]  是否对值进行encodeURIComponent【可选】
   * @example Q_core.cookie.set({name:'test',value:'ok'});
   * @method
   */
  core.cookie.set = core.cookie.del = function(options) {
    var ck = [];
    ck.push(options.name + '=');
    if (options.value) {
      ck.push(!!options.encode ? options.value : encodeURIComponent(options.value));
      //是否encodeURIComponent
    }
    if (options.expires) {
      var d = new Date();
      d.setHours(0);
      d.setMinutes(0);
      d.setSeconds(0);
      d.setTime(d.getTime() + options.expires * 86400000);
      //24 * 60 * 60 * 1000
      ck.push(';expires=' + d.toGMTString());
    }
    if (options.domain) {
      ck.push(';domain=' + options.domain);
    }
    ck.push(';path=' + (options.path || '/'));
    if (options.secure) {
      ck.push(';secure');
    }
    document.cookie = ck.join('');
  };

  /**
   * @description set设置ls
   * @param key
   * @param val
   * @returns {*}
   */
  core.ls.set = function(key, val){
    let storage = window.localStorage;
    if(Mv.isPrivateMode && Mv.localStorage){
      if(typeof val !== 'string'){
        val = JSON.stringify(val)
      }
      core.cookie.set({
        name: key,
        value: val
      })
    }else{
      if (val === undefined) { return store.remove(key) }
      storage.setItem(key, core.system.serialize(val))
      return val
    }
  };

  /**
   * @description get获取指定的ls
   * @param key
   * @param val
   * @returns {*}
   */
  core.ls.get = function(key, defaultVal) {
    let storage = window.localStorage;
    var val;
    if(Mv.isPrivateMode && window.localStorage){
      val = core.cookie.get(key);
      if(typeof val === 'string'){
        val = JSON.parse(val)
      }
    }else{
      val = core.system.deserialize(storage.getItem(key))
    }
    return (val === undefined ? defaultVal : val)
  };

  /**
   * @description 序列化
   * @param value
   */
  core.system.serialize = function(value) {
    return JSON.stringify(value)
  };

  /**
   * @description 反序列化
   * @param value
   */
  core.system.deserialize = function(value) {
    if (typeof value != 'string') { return undefined }
    try { return JSON.parse(value) }
    catch(e) { return value || undefined }
  };

  /**
   * ajax
   * @param type get or post
   * @param url
   * @param data
   * @param success  cb
   * @param failed  cb
   */
  core.system.ajax = function (type, url, data, success, failed){
    // 创建ajax对象
    var xhr = null;
    if(window.XMLHttpRequest){
      xhr = new XMLHttpRequest();
    } else {
      xhr = new ActiveXObject('Microsoft.XMLHTTP')
    }

    var type = type.toUpperCase();
    // 用于清除缓存
    var random = Math.random();

    if(typeof data == 'object'){
      var str = '';
      for(var key in data){
        str += key+'='+data[key]+'&';
      }
      data = str.replace(/&$/, '');
    }
    type = type.toUpperCase();
    if(type == 'GET'){
      if(data){
        xhr.open('GET', url + '?' + data, true);
      } else {
        xhr.open('GET', url + '?t=' + random, true);
      }
      xhr.send();

    } else if(type == 'POST'){
      xhr.open('POST', url, true);
      // 如果需要像 html 表单那样 POST 数据，请使用 setRequestHeader() 来添加 http 头。
      xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      xhr.send(data);
    }

    // 处理返回数据
    xhr.onreadystatechange = function(){
      if(xhr.readyState == 4){
        if(xhr.status == 200){
          if(typeof xhr.responseText === 'string'){
            success( system.deserialize(xhr.responseText) );
          }else{
            success(xhr.responseText);
          }
        } else {
          if(failed){
            failed(xhr.status);
          }
        }
      }
    }
  }

  /**
   * 对象合并
   * todo 待优化
   * @param obj
   * @returns {*}
   */
  core.system.assign = function(o1, o2){
    try {
      return Object.assign(o1, o2);
    }catch (e){
      throw e;
      let aArgument = [].slice.call(arguments);
      let oRes = {};
      for(let i=0,len=aArgument.length;i<len;i++){
        for(var key in aArgument[i]){
          oRes[key] = aArgument[i][key];
        }
      }
      return oRes;
    }
  };

  /**
   * 事件绑定
   * @param el
   * @param type
   * @param handler
   * @returns {*}
   */
  core.dom.on = function(el, type, handler){
    if (el.addEventListener) {
      el.addEventListener(type, handler, false);
      return handler;
    } else if (el.attachEvent) {
      var wrapper = function () {
        var event = window.event;
        event.target = event.srcelent;
        handler.call(el, event);
      };
      el.attachEvent('on' + type, wrapper);
      return wrapper;
    }
  };

  /**
   *
   * @param el
   * @param obj
   */
  core.dom.css = function(el, obj, flag){
    if(flag){
      let sRes = '';
      for(let k in obj){
        sRes+=k;
        sRes+=':';
        sRes+=obj[k];
        sRes+=';';
      }
      return sRes;
    }else{
      for(let k in obj){
        el.style[k] = obj[k];
      }
    }
  };

  /**
   * 获取dom的某个属性
   * @param el
   * @param attr
   * @returns {*}
   */
  core.dom.getCss = function(el, attr){
    //console.log(el, attr);
    if (window.getComputedStyle) {
      return window.getComputedStyle(el, null)[attr];
    }else if (el.currentStyle) {
      return el.currentStyle[attr];
    }else {
      return el.style[attr];
    }
  };

  /**
   * 删除dom
   * @param el
   */
  core.dom.remove = function(el) {
    if (el.parentElement) {
      el.parentElement.removeChild(el);
    } else {
      el.remove();
    }
  };

  core.dom.getScreenSize = function() {
    return {
      width: window.screen.width,
      height: window.screen.height
    };
  };



  //console.log(Mv)

})(window);
