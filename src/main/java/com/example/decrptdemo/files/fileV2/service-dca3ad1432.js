/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 52);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 6 */,
/* 7 */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}

module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(11);

var iterableToArrayLimit = __webpack_require__(12);

var unsupportedIterableToArray = __webpack_require__(13);

var nonIterableRest = __webpack_require__(15);

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var jddMaps = {
  'basket/match/detail/player/1': 'itou/basket/match/detail/player/1 ',
  'basket/match/detail/ranking/1': 'itou/basket/match/detail/ranking/1',
  'basket/match/detail/history': 'itou/basket/match/detail/history ',
  'basket/match/head/bs/2': 'itou/basket/match/head/bs/2',
  'basket/match/detail/event/1': 'itou/basket/match/detail/event/1',
  'basket/match/list/4': 'itou/basket/match/list/4',
  'soccer/match/list/4': 'itou/soccer/match/list/4',
  'soccer/event/tournament/match/3': 'itou/soccer/event/tournament/match/3',
  'basket/match/detail/event': 'itou/basket/match/detail/event',
  'soccer/match/detail/team': 'itou/soccer/match/detail/team',
  'soccer/match/list/6': 'itou/soccer/match/list/6',
  'odds/betfair/trade/detail': 'qkdata/odds/betfair/trade/detail',
  'odds/betfair/trade/info': 'qkdata/odds/betfair/trade/info',
  'odds/betfair/trade/total': 'qkdata/odds/betfair/trade/total',
  'odds/detail/1': 'qkdata/odds/detail/1',
  'odds/detail/2': 'itou/odds/detail/2',
  'odds/detail/4': 'qkdata/odds/detail/4',
  'odds/detail/5': 'qkdata/odds/detail/5',
  'odds/detail/sameodds/match': 'qkdata/odds/detail/sameodds/match',
  'odds/detail/stats/asia': 'qkdata/odds/detail/stats/asia',
  'odds/detail/stats/europe': 'qkdata/odds/detail/stats/europe',
  'odds/forecast': 'qkdata/odds/forecast',
  'odds/list': 'qkdata/odds/list',
  'odds/list/3': 'itou/odds/list/3',
  'odds/list/4': 'qkdata/odds/list/4',
  'odds/list/5': 'qkdata/odds/list/5',
  'odds/list/6': 'qkdata/odds/list/6',
  'soccer/match/base/2': 'qkdata/soccer/match/base/2',
  'soccer/match/detail/history/3': 'qkdata/soccer/match/detail/history/3',
  'soccer/match/detail/history/4': 'itou/soccer/match/detail/history',
  'soccer/match/detail/history/match': 'qkdata/soccer/match/detail/history/match',
  'soccer/match/detail/lineup/3': 'qkdata/soccer/match/detail/lineup/3',
  'soccer/match/detail/lineup/4': 'qkdata/soccer/match/detail/lineup/4',
  'soccer/match/detail/lineup2': 'qkdata/soccer/match/detail/lineup2',
  'soccer/match/detail/live': 'qkdata/soccer/match/detail/live',
  'soccer/match/detail/live/2': 'qkdata/soccer/match/detail/live/2',
  'soccer/match/detail/match': 'qkdata/soccer/match/detail/match',
  'soccer/match/detail/rules': 'qkdata/soccer/match/detail/rules',
  'soccer/match/detail/stats': 'qkdata/soccer/match/detail/stats',
  'soccer/match/detail/stats/score': 'qkdata/soccer/match/detail/stats/score ',
  'soccer/match/detail/table/1': 'qkdata/soccer/match/detail/table/1',
  'soccer/match/detail/technique/stats': 'qkdata/soccer/match/detail/technique/stats',
  'itou/games/live/animation/url': 'itou/games/live/animation/url',
  'intelligence/gameIntelligence': 'qkdata/intelligence/gameIntelligence'
};
/* harmony default export */ __webpack_exports__["default"] = (jddMaps);

/***/ }),
/* 10 */,
/* 11 */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(14);

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(7);

/**
 * 微信C端公共对象
 * by zhaoyf 2016-08-03
 */
// (function (window, $) {
//   var baseSetting = __webpack_require__(53);
//
//   var simplify = __webpack_require__(54); //--奖多多赛事分析接口配置，id大于分隔值，走老接口，否则走新接口
//
//
//   var jddBase = {
//     "new": '//apic-sport-new.jdddata.com/',
//     //--新
//     old: '//data2c.jdddata.com/',
//     //--旧
//     divide: 14701269 //--分隔值
//
//   }; //--奖多多新老接口映射关系
//
//   var jddMaps = __webpack_require__(9)["default"];
//
//   var preset = {
//     //--预设开发和线上环境变量
//     product: {
//       //--线上产品环境变量
//       appid: {
//         wx: 'wx1c76bcbd8f60cbe3',
//         //--微信公众号appid
//         ali: '2017072607907717' //--支付宝生活号appid
//
//       },
//       base_url: '//youdian.jindianle.com/',
//       //--基础域名，为APP提供默认的资源（默认图等）路径，非APP模式，会根据当前域名变更
//       main_url: '//youdian.jindianle.com/',
//       //--主域名，用来进行跳转
//       secret: '',
//       // api_url:'//a1p1i1c1.59itou.com/api/',
//       api_url: '//apic.91bixin.net/api/',
//       api_jdd_itou: 'itou/sportdata/',
//       //--奖多多给itou定制的接口
//       api_jdd: 'sportdata/',
//       //--奖多多接口
//       api_jdd_ws: '//apiws-sport-new.jdddata.com/',
//       //--奖多多websocket服务器
//       api_upload_url: '//upload-apic.jindianle.com/api/',
//       //--图片上传接口
//       // img_url: '//static-0001.jindianle.com/',
//       download_url: '//nowapp.jindianfa.com/' //--下载页面所处域名
//
//     },
//     development: {
//       //--开发环境变量
//       appid: {
//         wx: 'wx1c76bcbd8f60cbe3',
//         //--微信公众号appid
//         ali: '2017072607907717' //--支付宝生活号appid
//
//       },
//       // base_url:'//k1d1.59itou.com/',
//       base_url: '//youdian.jindianle.com/',
//       main_url: '//youdian.jindianle.com/',
//       //--主域名，用来进行跳转
//       secret: '',
//       api_url: '//apic.91bixin.net/api/',
//       api_jdd_itou: 'itou/sportdata/',
//       //--奖多多给itou定制的接口
//       // api_jdd_itou:'//data2c.jdddata.com:8888/itou/sportdata/',//--奖多多给itou定制的接口
//       api_jdd: 'sportdata/',
//       //--奖多多接口
//       // api_jdd:'//data2c.jdddata.com:8888/sportdata/',//--奖多多接口
//       api_jdd_ws: '//apiws-sport-new.jdddata.com/',
//       //--奖多多websocket服务器
//       api_upload_url: '//upload-apic.jindianle.com/api/',
//       //--图片上传接口
//       // img_url: '//static-0001.jindianle.com/',
//       download_url: '//nowapp.jindianfa.com/'
//     }
//   };
//
//   if (location.port == '9571') {
//     preset.development.api_url = '//apic-dev.17itou.com:9571/api/';
//   }
//
//   preset['download'] = preset['product'];
//   var product = 'undefined';
//   baseSetting = baseSetting[product] || baseSetting['koudai'];
//   window.environment = localStorage.getItem('environment') || window.environment;
//   var config = window.environment ? preset[window.environment] : preset['product'];
//   var base_url = window.location.host;
//
//   if (base_url) {
//     config.base_url = '//' + base_url + '/';
//   }
//
//   config.appDownloadLink = {
//     //--app下载地址
//     ios: null,
//     android: 'http://a.app.qq.com/o/simple.jsp?pkgname=com.itou.cordova.koudai'
//   };
//
//   if (window.environment == 'development') {
//     config.appid.wx = baseSetting.appid;
//   } else {
//     config.appid.wx = baseSetting.appid;
//   } // console.error(config, baseSetting);
//
//
//   config.platform = "./app/"; //--当前运行平台(wx：web端；android：安卓APP；ios：苹果App)
//
//   config.version = '20230615144557';
//   config.privacy = '0.0.001'; //--隐私协议版本，需要重新展示时，修改一下即可
//
//   window.config = config;
//   config.strategy = {
//     //--全局策略
//     saveProjectWithNologin: false //--是否开放匿名提交方案
//
//   };
//
//   if (window.isDownload) {
//     baseSetting.noWX = false;
//   }
//   /**
//    * 说明：
//    * config.platform 会影响接口参数，因而，微信、支付宝和手机网页通用‘wx’；但是app模式，ios和android平台各自拥有不同的值。
//    * config.browser 会影响插件调用，因而 微信、支付宝各自不同；ios和android的插件是经过cordova封装的，因而公用值‘app’
//    */
//
//
//   var UA = navigator.userAgent + '';
//
//   if (config.platform == 'wx') {
//     // console.log(UA);
//     // alert(UA);
//     switch (true) {
//       case baseSetting.noWX && UA.has('MicroMessenger'):
//         //--禁用微信功能
//         config.browser = 'mobile'; //--h5web端
//
//         config.platform = config.browser;
//         break;
//
//       case !baseSetting.noWX && UA.has('MicroMessenger'):
//         config.browser = 'wx'; //--微信公众号
//
//         break;
//       // case UA.has("QQ/"):
//       // 	config.browser = "qq";//--qq公众号
//       // 	break;
//
//       case UA.has('AlipayClient'):
//         config.browser = 'ali'; //--支付宝生活号
//
//         break;
//
//       default:
//         config.browser = 'mobile'; //--h5web端
//
//         config.platform = config.browser;
//         break;
//     }
//   } else {
//     //--自动判断当前设备平台
//     if (/(iPhone|iPad|iPod|iOS)/i.test(UA)) {
//       config.platform = 'ios';
//       config.browser = 'ios';
//     } else if (/(Android)/i.test(UA)) {
//       config.platform = 'android';
//       config.browser = 'android';
//     } else {
//       config.platform = 'app';
//       config.browser = 'app';
//     }
//   } // console.log(config.browser);
//
//
//   config.isAPP = config.browser == 'android' || config.browser == 'ios' || config.browser == 'app'; //--gray框架初始化，微信平台
//
//   Gray.make(config.browser);
//   Gray.cache.cacheable = true; //--允许页面级缓存并开启自动缓存
//
//   var ITOU = function ITOU() {
//     var self = this;
//     self.exp = new Exp(); //--正则表达式
//
//     self.msg = new Message(self); //--页面提示信息 实例对象
//
//     self.outil = new outil(self); //--工具箱，提供一些常用方法
//
//     self.localJson = new localJson(self); //--本地存储json，非永久，超3天自动清除
//
//     self.localData = new localData(self); //--本地存储数据，永久，不会自动清除
//
//     self.sessionData = new sessionData(self); //--本地存储数据，页面关闭自动清除
//
//     self.timeLine = new TimeLine(self); //--时间线对象，用来进行性能分析
//
//     self.setting = new Setting(self); //--基础配置对象，用来设置基本的配置信息
//
//     self.history = new History(self); //--历史记录对象
//
//     self.page = new Page(self); //--页面跳转对象
//
//     self.dataModel = new DataModel(self); //--接口数据原型创建对象
//
//     self.cookie = new Cookie(self); //--JS的cookie操作
//
//     self.apiTimeout = new ApiTimeout(self); //--接口超时错误页面
//
//     self.entry = __webpack_require__(55); //--场景缓存管理对象
//
//     self.currLimit = __webpack_require__(56); //--页面限流管理对象
//
//     self.moneyComputer = __webpack_require__(57); //--最大预计奖金计算对象
//
//     self.requestEnc = __webpack_require__(58); //--奖多多数据请求加密函数
//
//     self.outil.checkSubscribe = __webpack_require__(59); //--检查是否认证
//
//     self.userLocation = __webpack_require__(60); //--获取用户所在省份
//
//     self.checkProvince = __webpack_require__(61); //--获取用户与店铺是否跨省
//
//     self.payScan = __webpack_require__(62); //--扫码付相关功能对象
//
//     self.loading = __webpack_require__(63); //--正在加载弹层功能对象
//
//     self.NP = __webpack_require__(64); //--浮点数精确计算
//
//     self.linkSafe = __webpack_require__(65); //--链接安全机制——防止链接被外部盗用
//
//     self.intercepter = __webpack_require__(66); //--链接安全机制——防止链接被外部盗用
//
//     self.channelHm = __webpack_require__(67)["default"]; //--链接安全机制——防止链接被外部盗用
//
//     self.publicObj = {}; //--公用对象挂接命名空间；所有公共对象都挂到这里
//
//     self.defRlt = {}; //--线下接口调试rlt存储对象；用来配合接口请求中的rlt参数，实现线下接口返回数据劫持；例如：某接口设置{url:'url', rlt: itou.defRlt['key']}; 那么，我们在下下调试的时候，就可以在控制台输入: itou.defRlt['key'] = {errcode: 0, data: {data}};来实现接口返回数据劫持；强制替换接口的返回数据；方便线下调试；如果想使用接口原来返回的数据，那么在控制台输入: itou.defRlt['key'] = null; 即可
//     //--用来获取、缓存当前地理位置
//
//     self.publicObj.location = {
//       key: '__SYS_APP_Location__',
//       timeout: 3600 * 12,
//       //--有效期
//       desc: 'app通过手机获得定位信息，定位信息存储在localJson，key值为localJson的键',
//       set: function set(location) {
//         //--保存数据
//         itou.localJson.setJson(this.key, location, this.timeout);
//       },
//       get: function get() {
//         //--读取数据
//         return itou.localJson.getJson(this.key);
//       },
//       "do": function _do() {
//         //--调用插件获取定位信息
//         Gray.plugin.require('init.js');
//
//         Gray.plugin.require('getlocation.js'); //--获取坐标
//
//
//         return Gray.$plugin['init.js']().then(function () {
//           return Gray.$plugin['getlocation.js']();
//         });
//       }
//     }; //--使用ios配置文件、壳以2种方式的入口标记
//
//     var entry = Gray.$page.getUrlParam('entry');
//
//     if (entry) {
//       self.localJson.setJson('entry_info', {
//         entry: entry
//       });
//     } else {
//       entry = self.localJson.getJson('entry_info').entry;
//     }
//
//     if (/(iPhone|iPad|iPod|iOS)/i.test(UA) && entry == 'koudai_iweb') {
//       config.browser = 'iweb'; //--使用ios配置文件、壳以2种方式
//
//       config.platform = 'iweb';
//     }
//
//     var href = window.location.href; // if(!config.isAPP ) {
//     // 	self.linkSafe.start(self);
//     // }
//
//     self.baseSetting = baseSetting;
//     self.simplify = simplify; //--精简模式设置
//
//     self.lotterySetting = __webpack_require__(68); //--投注设置
//
//     if (baseSetting.noWX && UA.has('MicroMessenger')) {
//       self.platform = baseSetting.prefix + '_wx';
//     } else {
//       self.platform = baseSetting.prefix + '_' + config.browser;
//     }
//
//     self.product = product;
//     self.extend = {}; //--扩展用对象
//
//     self.proto = {}; //--扩展属性
//
//     self.setting.setData('payscan', baseSetting.payscan); //--是否支持扫码付
//
//     self.setting.setData('appid', baseSetting.appid); //--是否支持扫码付
//
//     self.setting.setData('defaultMid', baseSetting.mid); //--默认mid
//
//     var protocol = window.location.protocol; //--协议
//
//     if (protocol == 'http:' || protocol == 'file:' && window.environment == 'development') {
//       self.proto.protocol = 'http:'; //--设置默认协议
//
//       self.proto.protocol_ws = 'ws:'; //--推送设置默认协议
//     } else {
//       self.proto.protocol = 'https:'; //--设置默认协议
//
//       self.proto.protocol_ws = 'wss:'; //--推送设置默认协议
//     }
//
//     config.base_url = self.proto.protocol + config.base_url;
//     config.main_url = self.proto.protocol + config.main_url;
//     config.api_url = self.proto.protocol + config.api_url; // config.api_jdd_itou = self.proto.protocol + config.api_jdd_itou;
//     // config.api_jdd = self.proto.protocol + config.api_jdd;
//
//     config.api_jdd_ws = self.proto.protocol + config.api_jdd_ws; // config.img_url = self.proto.protocol + config.img_url;
//
//     config.api_upload_url = self.proto.protocol + config.api_upload_url;
//     config.download_url = self.proto.protocol + config.download_url;
//     jddBase["new"] = self.proto.protocol + jddBase["new"];
//     jddBase.old = self.proto.protocol + jddBase.old;
//
//     try {
//       var debug = Gray.$page.getUrlParam('debug');
//
//       if (!debug && window.environment != 'development') {
//         // window.console = {};
//         window.console.log = function () {};
//
//         window.console.debug = function () {};
//
//         window.console.error = function () {};
//
//         window.console.info = function () {};
//
//         window.console.warn = function () {};
//       } else if (!!debug && window.environment == 'development') {
//         config.api_url = self.proto.protocol + preset['product'].api_url;
//         console.log(config.api_url);
//       }
//     } catch (error) {}
//
//     var loader = new Loader();
//     loader.checkLoadingElt();
//
//     try {
//       //--监听loader属性设置，来开启或关闭页面加载提示
//       Object.defineProperty(self, 'loader', {
//         set: function set(val) {
//           if (val == 'on') {
//             loader.setOpen();
//           } else if (val == 'off') {
//             loader.setClose();
//           }
//
//           self.__loader_val = val;
//         },
//         get: function get() {
//           return self.__loader_val;
//         }
//       });
//     } catch (e) {
//       console.log(e);
//     } //--异步加载默认参数
//
//
//     var defParams = {
//       dataType: 'json',
//       data: {
//         platform: self.platform,
//         _prt: self.proto.protocol.replace(':', ''),
//         ver: config.version //--内部版本号
//
//       },
//       notoken: false,
//       //--不带token，走get模式
//       formatResult: true,
//       //--是否对接口结果进行预处理，如果code != 0， 弹窗提示，默认true
//       autocache: false,
//       //--是否将数据缓存到本页面——页面级缓存
//       sessionCache: false,
//       //--是否将数据缓存到本页面——session级缓存:true(只读缓存不写缓存), false（及不读也不写）, reload（重新加载并且写缓存）
//       fullUrl: false,
//       //--是否是完整的接口url，默认为否，需要连接api服务器域名
//       noToast: false,
//       //--是否展示toast弹窗
//       showErr: false,
//       //--超时后是否跳转到超时页面
//       noQuery: false,
//       //--没有地址栏参数,会清空data参数
//       specialErr: null,
//       //--特殊错误号处理，类型：json；用于在页面逻辑中对特殊错误进行处理;{'-301': function(rlt){页面内部逻辑}}
//       rnd: true,
//       //--是否追加随机数
//       rlt: null,
//       //--线下内部测试用参数，如果值存在的话，直接取代接口返回结果result；或者搭配itou.defRlt使用，进行线下即时注入测试
//       jdd: false,
//       //--是否从奖多多接口获取数据 false，否； true，奖多多接口； "itou"：奖多多给itou的定制接口
//       upload: false,
//       //--是否使用上传专有域名
//       'repeat-abort': null,
//       //--重复请求中止策略：null，不中止；url，仅url相同时中止；url-params：必须url和params都相同时中止
//       noLoading: false,
//       //--是否展示loader层
//       postMode: 'token-only' //--POST时的数据发送模式。只有post时生效
//
//       /**
//        * token-only: 只有token以post方式发送，其他数据为url参数
//        * token&data: token和data的数据以post发送
//        */
//
//     }; //--获取token的值
//
//     self.getToken = function () {
//       //console.log('getToken', localStorage.getItem("token"));
//       return localStorage.getItem('token2');
//     }; //--设置token
//
//
//     self.setToken = function (token) {
//       //console.log('setToken');
//       localStorage.setItem('token2', token);
//     };
//
//     self.random = function (len) {
//       //--生成指定长度随机字符串，范围[1-9a-Z]
//       var str = ''; //--安全随机数
//
//       if (window.crypto && window.crypto.getRandomValues) {
//         var rnd = new Uint32Array(1);
//         window.crypto.getRandomValues(rnd);
//         str = rnd[0].toString(36);
//       } else {
//         str = Math.random().toString(36).substr(2);
//       }
//
//       if (str.length >= len) {
//         return str.substr(0, len);
//       }
//
//       str += self.random(len - str.length);
//       return str;
//     }; //--记录返回的url
//
//
//     self.saveReturnUrl = function (url) {
//       if (!url) {
//         if (config.platform == 'wx') {
//           url = window.location.href;
//         } else {
//           url = Gray.$page.href || window.location.href;
//         }
//       }
//
//       if (!url.has('/user/login/')) {
//         self.localData.setData('__sys_window_return_url', {
//           url: url,
//           date: new Date()
//         });
//         return true;
//       }
//
//       return false;
//     }; //--读取返回url
//
//
//     self.getReturnUrl = function () {
//       var returnUrl = itou.localData.getData('__sys_window_return_url');
//       return returnUrl || null;
//     };
//     /**
//      * 预处理接口参数
//      * @params 接口请求的参数
//      */
//
//
//     self.formatParams = function (params) {
//       var debug = window.environment == 'development',
//           token = self.getToken() || ''; //--获取token
//       // defParams.headers.token = self.getToken() || null;//--获取token
//
//       if (debug) {// defParams.data.token = token;
//       }
//
//       params = $.extend(true, {}, defParams, params); //--参数合并
//
//       if (params.rnd) {
//         params.data.t = Math.floor(Math.random() * 1000000); //--页面传递的随机数
//
//         params.cache = false; //禁用缓存
//
//         params.ifModified = true; //禁用缓存
//       }
//
//       if (!params.fullUrl) {
//         // params.url = config.api_url + params.url;//alert("window.environment=" + window.environment + ";config.api_url=" + config.api_url);
//         if (params.upload) {
//           //--上传专用域名
//           params.url = config.api_upload_url + params.url;
//         } else {
//           params.url = config.api_url + params.url;
//         }
//       }
//
//       if (params.noQuery) {
//         params.data = {};
//       }
//
//       return params;
//     };
//
//     self.formatWithToken = function (params) {
//       //--格式化参数，拼接到url，增加token
//       params = $.extend(true, {}, defParams, params); //--参数合并
//
//       if (params.type) {
//         params.type = (params.type + '').toUpperCase();
//       }
//
//       console.log(params.type);
//
//       if (params.rnd) {
//         params.data.t = Math.floor(Math.random() * 1000000); //--页面传递的随机数
//
//         params.cache = false; //禁用缓存
//
//         params.ifModified = true; //禁用缓存
//       }
//
//       if (!params.fullUrl) {
//         // params.url = config.api_url + params.url;//alert("window.environment=" + window.environment + ";config.api_url=" + config.api_url);
//         if (params.upload) {
//           //--上传专用域名
//           params.url = config.api_upload_url + params.url;
//         } else {
//           params.url = config.api_url + params.url;
//         }
//       }
//
//       var querystring = [];
//
//       if (params.type == 'POST' || !params.notoken) {
//         var data;
//
//         if (params.postMode == 'token&data') {
//           data = defParams.data;
//         } else {
//           data = params.type == 'POST' ? defParams.data : params.data;
//         }
//
//         querystring = $.param(data);
//
//         for (var i in data) {
//           //--通用参数拼接地址栏参数
//           delete params.data[i];
//         }
//
//         if (querystring.length > 0) {
//           params.url += (params.url.has('?') ? '&' : '?') + querystring;
//         }
//
//         params.type = 'POST';
//       }
//
//       if (!params.notoken) {
//         var token = localStorage.getItem('__itou_random_token');
//
//         if (!token) {
//           token = self.random(48);
//           localStorage.setItem('__itou_random_token', token);
//         }
//
//         params.data.token = token;
//       }
//
//       if (params.noQuery) {
//         params.data = {};
//       }
//
//       return params;
//     };
//
//     self.formatJddParams = function (params) {
//       //--奖多多接口参数处理
//       var debug = window.environment == 'development';
//       var data = self.requestEnc({
//         data: {
//           params: params.data
//         }
//       });
//       var matchId = params.data.matchId || '';
//       var mapApi = jddMaps[params.url] || '';
//       var params = $.extend(true, {}, defParams, params); //--参数合并
//
//       params.type = 'POST'; // params.dataType = "text";
//
//       params.data = data;
//
//       if (matchId < jddBase.divide && mapApi) {
//         params.url = jddBase["new"] + mapApi;
//       } else {
//         if (params.jdd == 'itou') {
//           params.url = config.api_jdd_itou + params.url;
//         } else {
//           params.url = config.api_jdd + params.url;
//         }
//
//         params.url = jddBase.old + params.url;
//       }
//
//       if (debug) {
//         console.log('奖多多接口参数：', params.url, params);
//       }
//
//       return params;
//     };
//     /**
//      * 异步调用接口
//      * @params 异步请求参数，包含接口url，接口数据等
//      */
//
//
//     self.get = function (params) {
//       //--注意Params 和 params 是两个变量
//       var key = JSON.stringify(params); //alert(params.url)
//
//       if (self.outil.hex_sha1) {
//         key = self.outil.hex_sha1(key); //--键值加密，用来缩短键值长度
//       }
//
//       if (!!params.sessionCache || !!params.autocache) {
//         self.outil.autocache.setKey(params.url, key);
//       }
//
//       var url = Gray.$page.href || (config.isAPP ? '/' : window.location.href),
//           queryNotoken = self.outil.getUrlParam(url, 'notoken'),
//           Params;
//
//       if (params.jdd) {
//         //--从奖多多获取数据
//         Params = self.formatJddParams(params);
//       } else if (queryNotoken) {
//         Params = self.formatParams(params); //console.log(Params);
//       } else {
//         Params = self.formatWithToken(params); //console.log(Params);
//       }
//
//       var sessionData = self.sessionData.getData('__apis_sessionData')[key]; // console.log(params, !!Gray.cache.autocache, !!params.autocache, key, Gray.$cache);
//
//       if (!!Gray.cache.autocache && !!params.autocache && !!Gray.$cache[key]) {
//         //--如果页面允许自动缓存，并且接口参数要求自动缓存，并且该接口缓存数据存在的时候，读取页面缓存
//         var result = Gray.$cache[key];
//         return formatResult(Params, result); //--返回缓存结果
//       } else if (params.sessionCache == true && sessionData) {
//         var result = sessionData; //console.error(sessionData)
//
//         return formatResult(Params, result); //--返回缓存结果
//       } else {
//         if (self.apiTimeout.showErr && Params.showErr) {
//           console.log(key, Params.url, Gray.$page.href);
//           self.apiTimeout.startApi(key);
//         }
//
//         if (itou.loader == 'on' && params.noLoading == true) {
//           itou.loader = 'off';
//         }
//
//         if (itou.loader == 'off' && params.noLoading == false) {
//           itou.loader = 'on';
//         } // Ajax接口出现错误时执行下述代码
//
//
//         Params.error = function (XMLHttpRequest, textStatus) {
//           console.warn('服务异常：数据获取异常!');
//           console.warn(XMLHttpRequest.status);
//           console.warn(XMLHttpRequest.readyState);
//           console.warn(textStatus);
//         };
//
//         var xhr = $.ajax(Params); //--发起请求
//
//         var abortKey = params['repeat-abort']; //--重复请求中止策略
//
//         var xhrKey; // console.log(abortKey, xhr, Object.keys(self.xhrs || {}));
//
//         if (abortKey) {
//           //--应用重复请求策略
//           self.xhrs = self.xhrs || {}; //--所有拥有中止策略的请求
//
//           if (abortKey == 'url') {
//             //--终止策略为url
//             xhrKey = params.url;
//           } else if (abortKey == 'url-params') {
//             //--终止策略为url-params
//             xhrKey = params.url + '-' + key;
//           } // console.log(xhrKey, self.xhrs[xhrKey]);
//
//
//           if (self.xhrs[xhrKey]) {
//             //--接口尚未完成
//             try {
//               //--尝试中止请求并销毁xhr对象
//               self.xhrs[xhrKey].abort();
//               delete self.xhrs[xhrKey];
//             } catch (error) {
//               console.error(error);
//             }
//           }
//
//           self.xhrs[xhrKey] = xhr; //--记录新的xhr对象
//         }
//
//         return xhr.then(function (result) {
//           if (xhrKey) {
//             //--根据重复终止策略，销毁xhr对象
//             delete self.xhrs[xhrKey];
//           }
//
//           console.log(result); // result = null
//           // console.log("params.url = ", params.url);
//           // console.log(Object.prototype.toString.call(result));
//
//           if (window.environment == 'development' && params.rlt) {
//             result = params.rlt;
//           }
//
//           var _result = result;
//
//           if (self.apiTimeout.showErr && Params.showErr) {
//             self.apiTimeout.endApi(key);
//           }
//
//           result = result || {};
//           result.data = result.data || result.info;
//
//           if (self.outil.is(result.errcode, 'Undefined')) {
//             result.errcode = result.code || 0;
//           }
//
//           if (result.data && result.data.token) {
//             //--如果接口返回token，则保存token值
//             self.setToken(result.data.token);
//           }
//
//           if (!!Gray.cache.autocache && !!params.autocache && !!result) {
//             //--如果页面允许自动缓存，并且接口参数要求自动缓存, 记录缓存数据
//             Gray.$cache[key] = result;
//           }
//
//           if (!!params.sessionCache && result.errcode === 0) {
//             var obj = {};
//             obj[key] = result;
//             self.sessionData.setData('__apis_sessionData', obj);
//           }
//
//           try {
//             var bustling = vm.$refs.bustling;
//
//             if (result.errcode != '0') {
//               bustling.end();
//             }
//           } catch (e) {}
//
//           return formatResult(Params, _result); //--返回异步加载结果
//         });
//       }
//     };
//
//     var __get = self.get; //--get方法保存
//
//     /**
//      * get方法重写，使之增加限流功能
//      */
//
//     self.get = function (params) {
//       var bs = self.baseSetting,
//           cl = self.currLimit;
//
//       if (bs.currLimit.isOpen && cl.isLimit && !params.url.has(bs.currLimit.apiUrl)) {
//         //--限流开启，触发限流功能；正在限流或者正在读取是否限流; 不是限流判断接口
//         var defer = $.Deferred();
//         cl.team.push(defer); //--存入队列
//
//         var p = defer.promise();
//         p = p.then(function () {
//           return __get(params);
//         });
//         return p;
//       } else {
//         return __get(params);
//       }
//     };
//
//     self.gotoLogin = function (returnUrl) {
//       if (!self.saveReturnUrl(returnUrl)) {
//         //--已经在登录页面时禁止跳转
//         return;
//       }
//
//       var isInIframe = window != top; //--是否在iframe内
//
//       if (config.platform == 'wx' && !isInIframe) {
//         //--微信环境并且非iframe内用授权登录
//         self.auth.getCode('snsapi_userinfo');
//       } else {
//         Gray.$page.loadPage('/user/login/');
//       }
//     };
//
//     self.formatResult = formatResult; //--处理返回结构，返回promise对象
//
//     function formatResult(Params, result) {
//       var defer = $.Deferred(),
//           specialErr = Params.specialErr;
//
//       if (!Params.formatResult) {
//         //--如果不需要预处理，则直接返回结果
//         defer.resolve(result);
//       } else {
//         if (result === null || typeof result == 'undefined') {
//           //--接口不正常
//           if (!Params.noToast) {
//             self.msg.toast = '网络错误或者服务器返回未知错误，请重试';
//           }
//
//           defer.reject();
//           return defer.promise();
//         }
//
//         var errcode = result.errcode;
//
//         if (errcode === 0 && Params.jdd && !result.data) {
//           if (!Params.noToast) {
//             self.msg.toast = '接口返回数据异常-null';
//           }
//
//           defer.reject();
//           return defer.promise();
//         }
//
//         if (result.errcode === 0) {
//           //--接口正常
//           defer.resolve(result.data);
//
//           if (specialErr && specialErr['0']) {
//             try {
//               specialErr[0](result);
//             } catch (error) {
//               console.log(error);
//             }
//           }
//         } else if (specialErr && specialErr[errcode]) {
//           //--特殊错误处理
//           try {
//             specialErr[errcode](result);
//           } catch (error) {
//             console.log(error);
//           }
//         } else if (result.errcode == -1001) {
//           self.gotoLogin();
//         } else if (result.errcode == -1012) {
//           //--未登录，但不强制跳转
//           result.data = result.data || {};
//           result.data.isLogin = false;
//           defer.resolve(result.data);
//         } else if (result.errcode == -4) {
//           var returnUrl = self.localData.getData('__sys_window_return_url');
//
//           if (returnUrl) {
//             var date = new Date(returnUrl.date);
//             var diff = Math.abs(new Date().DateDiff('s', date));
//
//             if (diff >= 300) {
//               Gray.$page.loadPage('/');
//             } else if (returnUrl.url.replace(config.base_url, '') == 'user/setting/') {
//               Gray.$page.loadPage('/');
//             } else {
//               itou.localData.setData('__sys_window_return_url', {});
//               Gray.$page.loadPage(returnUrl.url);
//             }
//           } else {
//             Gray.$page.loadPage('/');
//           }
//         } else if (result.errcode != -2 || result.errcode == -2 && Params.url != 'user/Wxauth') {
//           //--接口返回错误信息,-2是/api/user/Wxauth/接口返回的错误信息
//           if (!Params.noToast) {
//             if (result.errcode == -701) {
//               result.msg = '保存失败，包含已停售的场次！';
//             }
//
//             self.msg.toast = result.msg;
//           }
//
//           defer.reject(result);
//         } else {
//           defer.reject(result);
//         }
//       }
//
//       return defer.promise();
//     }
//     /**
//      * 批量获取接口数据
//      * @arr params的数组
//      * params.formatResult 会被忽略，按照fals处理，无论接口是否返回错误信息，返回结果都会存入数组
//      * 返回结果的顺序与请求参数顺序一致
//      * 暂时不支持页面缓存
//      */
//
//
//     self.getApis = function (arr) {
//       var results = [];
//       var chains = null;
//
//       for (var i = 0, len = arr.length; i < len; i++) {
//         //--拼接任务链
//         var params = self.formatParams(arr[i]); //--预处理请求数据
//
//         chains = chains ? $.ajax(params) : chains.then(function (result) {
//           if (result.data && result.data.token) {
//             //--如果接口返回token，则保存token值
//             self.setToken(result.data.token);
//           }
//
//           results.push(result); //--结果存入数组
//
//           return $.ajax(params); //--进行下一步请求
//         });
//       }
//
//       return !chains ? null : chains.then(function (result) {
//         if (result.data && result.data.token) {
//           //--如果接口返回token，则保存token值
//           self.setToken(result.data.token);
//         }
//
//         results.push(result);
//         return results;
//       });
//     };
//
//     self.auth = new auth(self); //--微信端认证验证对象，仅微信端生效
//     //self.auth.getCode("snsapi_userinfo");
//
//     var baiduTJ = __webpack_require__(69);
//
//     self.baiduHm = baiduTJ.baiduHm;
//     self.baiduPV = baiduTJ.baiduPV;
//     self.hmClear = baiduTJ.hmClear;
//     /**
//      * @function gotoPartner
//      * @description 跳转到合作方地址；如果在微信，则直接top跳转；在fordova和cordova环境，则需要时用不同的方式，打开弹窗页面
//      * @param {string} url - <param description>
//      */
//
//     self.gotoPartner = function (url) {
//       var ua = window.navigator.userAgent.toLowerCase();
//       var isWeixin = ua.match(/MicroMessenger/i) == 'micromessenger';
//       var isIOS = /(iPhone|iPad|iPod|iOS)/i.test(ua);
//
//       if (isWeixin) {
//         //--防止短域名下，合作方无法付款问题
//         top.location.href = url;
//       } else {
//         url += '&_r=' + Math.random(); //--ios壳模式下，调用iweb插件
//
//         if (typeof fwv_share != 'undefined' || isIOS) {
//           window.location = url;
//         } else {
//           window.open(url, '_blank');
//         }
//       }
//     };
//     /**
//      * @function refreshOnWebClose
//      * @description 当App下弹出的子窗口关闭时，刷新页面
//      */
//
//
//     self.refreshOnWebClose = function () {
//       var hProp, vbcEvent; //--是否隐藏的属性 和 可见状态切换的事件
//
//       switch (true) {
//         case 'hidden' in document:
//           hProp = 'hidden';
//           vbcEvent = 'visibilitychange';
//           break;
//
//         case 'webkitHidden' in document:
//           hProp = 'webkitHidden';
//           vbcEvent = 'webkitvisibilitychange';
//           break;
//
//         case 'mozHidden' in document:
//           hProp = 'mozHidden';
//           vbcEvent = 'mozvisibilitychange';
//           break;
//
//         default:
//           hProp = null;
//           vbcEvent = null;
//           break;
//       }
//
//       if (hProp) {
//         var pageRM = function pageRM() {
//           if (!document[hProp]) {
//             document.removeEventListener(vbcEvent, pageRM); //--监听移除
//
//             Gray.$page.refresh();
//           }
//         };
//
//         document.addEventListener(vbcEvent, pageRM); //--添加事件监听
//       }
//     };
//   };
//   /**
//    * 页面提示信息
//    * 包含toast、alert、confirm等方法
//    * 作为ITOU的子对象实例化
//    */
//
//
//   var Message = function Message(itou) {
//     var self = this;
//     self.parent = itou; //--关联itou实例对象
//
//     var toast = new Toast(self);
//
//     self.hide = function () {
//       toast.hide();
//     };
//
//     try {
//       //页面弹层提示，在toast属性设置时，触发toast.show事件；
//       //--如果值为文本，则直接显示信息，如果值为对象，则在结束时出发回调
//       //--参数形式：string 或者 {text:"", callback: function(){}}
//       Object.defineProperty(self, 'toast', {
//         set: function set(val) {
//           if (_typeof(val).toLowerCase() == 'string') {
//             toast.show(val);
//           } else if (val && _typeof(val).toLowerCase() == 'object') {
//             toast.show(val.text, val.callback);
//           }
//         }
//       });
//     } catch (e) {
//       console.log(e.message);
//     }
//   };
//   /**
//    * 页面弹层提示，3秒后消失
//    */
//
//
//   var Toast = function Toast(msg) {
//     var self = this; //--弹层元素
//     //var html = "<div style='corlor:white;left:0px;position:absolute;top:10px;width:100%;line-height:30px;background-color:blue;display:none;text-align:center;z-index:9999'></div>";
//
//     var html = '<div class=\'formerror\' style=\'z-index:999999\'></div>';
//     var $el = null;
//
//     self.create = function () {
//       //--创建弹层对象
//       if (!$el) {
//         $el = $(html);
//       }
//
//       return $el.appendTo('body'); //--单页模式页面切换会将元素清除，因而需要重新插入BODY
//     }; //--显示弹层对象并在消失后调用回掉函数
//
//
//     self.show = function (err, callback) {
//       $el = self.create();
//       $el.text(err).show();
//       window.setTimeout(function () {
//         $el.hide();
//
//         if (_typeof(callback).toLowerCase() == 'function') {
//           callback();
//         }
//       }, 3000);
//     };
//
//     self.hide = function () {
//       $el.hide();
//     };
//   }; //--todo: 编写对应Confirm 和 Alert 弹窗
//
//   /**
//    * 正则表达式
//    */
//
//
//   var Exp = function Exp() {
//     var self = this;
//     self.userName = /^[\u4e00-\u9fa5\d\w]{6,20}$/; //--用户名：6-20个汉字字母或数字
//
//     self.mobile = /^1[\d]{10}$/; //--手机
//
//     self.userPass = /^[\d\w]{6,12}$/; //--密码：6-12位，数字或字母
//
//     self.checkcode = /^\d{6}$/; //--验证码：6位数字
//
//     self.shopName = /^[\u4e00-\u9fa5\w\d]{1,8}$/; //--店铺名称
//
//     self.nickName = /^[\u4e00-\u9fa5\w\d]{6,16}$/; //--昵称
//
//     self.shopUrl = /^[\d\w]{5,}$/; //--店铺网址：5位以上数字或字母
//
//     self.qq = /^[1-9][0-9]{4,}$/; //--qq验证
//
//     self.email = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/; //--电子邮箱
//
//     /**
//      * 通用验证，验证值是否符合正则表达式
//      * @val 需要验证的值
//      * @exp 验证的正则表达式
//      * 注意：val 为 “” 或 0 或 false 或 null 或 undefined 时，将直接返回false；
//      */
//
//     self.testVal = function (val, exp) {
//       if (!val) {
//         return false;
//       }
//
//       if (exp.test(val)) {
//         return true;
//       } else {
//         return false;
//       }
//     };
//     /**
//      * 验证手机号是否正确
//      * @mobile 被验证的手机号
//      */
//
//
//     self.testMobile = function (mobile) {
//       return self.testVal(mobile, self.mobile);
//     };
//     /**
//      * 验证密码格式是否正确
//      * @userPass 被验证的登陆密码
//      */
//
//
//     self.testPass = function (pass) {
//       return self.testVal(pass, self.userPass);
//     };
//     /**
//      * 验证用户名格式是否正确
//      * @userName 被验证的登陆用户名
//      */
//
//
//     self.testUserName = function (userName) {
//       return self.testVal(userName, self.userName);
//     };
//     /**
//      * 验证qq格式是否正确
//      * @qq 被验证的qq
//      */
//
//
//     self.testQQ = function (qq) {
//       return self.testVal(qq, self.qq);
//     };
//     /**
//      * 验证支付宝格式是否正确
//      * @alipay 被验证的支付宝
//      */
//
//
//     self.testAlipay = function (alipay) {
//       return self.testVal(alipay, self.qq) || self.testVal(alipay, self.email);
//     };
//     /**
//      * 验证是否是过于简单的密码
//      * @pass 被验证的登陆密码
//      * 判定条件：
//      * 重复的字符串，例如 aaaaaaaaaaa
//      * 单调递增的数字或字母，例如 123456 或者 abcdefg
//      * 单调递减的数字或字母，例如 654321 或者 gfedcba
//      */
//
//
//     self.testEasyPass = function (pass) {
//       pass = pass || '';
//       pass += ''; //--过短的登录密码
//
//       if (pass.length < 6) {
//         return true;
//       } //--检查是否由相同的字符组成，如果是，则返回true
//
//
//       var t = pass.replace(new RegExp(pass.charAt(1), 'g'), '');
//
//       if (t.length == 0) {
//         return true;
//       }
//
//       var t = pass.replace(/\d/g, ''); //--完全由数字或者字母组成的，判断是否单点递增或递减
//
//       if (t.length == 0 || t.length == pass.length) {
//         var diff = pass.charCodeAt(1) - pass.charCodeAt(0); //--计算前两个字符测差值
//
//         if (diff != 1 && diff != -1) {
//           //--递增值不是1或者-1，返回false
//           return false;
//         }
//
//         for (var i = 1, len = pass.length; i < len; i++) {
//           //--遍历，两两计算差值，与diff进行比较
//           if (pass.charCodeAt(i) - pass.charCodeAt(i - 1) != diff) {
//             //--如果量量计算的差值与首个差值不同，则不属于简单密码
//             return false;
//           }
//         }
//
//         return true;
//       }
//
//       return false;
//     };
//   };
//   /**
//    * 异步请求,超过700毫秒时，出现加载弹窗
//    */
//
//
//   var Loader = function Loader() {
//     var self = this;
//     var myTimmer = null;
//     self.checkLoadingElt = checkLoadingElt;
//
//     function checkLoadingElt() {
//       $(function () {
//         var el = $('#loaderbox');
//         var img = el.find('img');
//
//         var _src = img.attr('src');
//
//         if (_src != baseSetting.loadingimg) {
//           img.attr('src', baseSetting.loadingimg);
//           img.attr('alt', baseSetting.name);
//         }
//       });
//     } //--监听ajax事件
//
//
//     function ajaxBeforeSend() {
//       //--监听ajaxBeforeSend事件
//       if (myTimmer) {
//         window.clearTimeout(myTimmer);
//       }
//
//       checkLoadingElt();
//       myTimmer = window.setTimeout(function () {
//         $('#loaderbox').show();
//       }, 700);
//     }
//
//     function ajaxComplete() {
//       //--监听ajaxComplete事件
//       if (myTimmer) {
//         window.clearTimeout(myTimmer);
//       }
//
//       $('#loaderbox').hide();
//     }
//
//     function ajaxError() {
//       //--监听ajaxError事件
//       if (myTimmer) {
//         window.clearTimeout(myTimmer);
//       }
//
//       $('#loaderbox').hide();
//     } //--开启加载提示
//
//
//     self.setOpen = function () {
//       $(document).on('ajaxBeforeSend', ajaxBeforeSend);
//       $(document).on('ajaxComplete', ajaxComplete);
//       $(document).on('ajaxError', ajaxError);
//     }; //--关闭加载提示
//
//
//     self.setClose = function () {
//       $(document).off('ajaxBeforeSend', ajaxBeforeSend);
//       $(document).off('ajaxComplete', ajaxComplete);
//       $(document).off('ajaxError', ajaxError);
//     };
//   };
//   /**
//    * 工具构造对象
//    * 负责一些通用的公共方法
//    */
//
//
//   var outil = function outil(obj) {
//     var self = this;
//     self.parent = obj;
//     self.hex_sha1 = window.__hex_sha1;
//     /**
//      * 隐藏手机号码的中间四位
//      * @mobile 待处理的手机号
//      */
//
//     self.hideMobile = function (mobile) {
//       //--隐藏中间4位号码
//       var exp1 = /^\d{7}/,
//           exp2 = /^\d{3}/;
//
//       if (!!mobile && mobile.length >= 7) {
//         var m1 = mobile.match(exp1)[0],
//             m2 = mobile.match(exp2)[0];
//         mobile = mobile.replace(m1, m2 + '****');
//       }
//
//       return mobile;
//     };
//     /**
//      * 格式化时间
//      * @date 要格式化的时间
//      * @formatModel 要格式化的样式
//      */
//
//
//     self.formatDate = function (date, formatModel) {
//       try {
//         date = date.split(/[- :]/);
//         var d = new Date(date[0], date[1] - 1, date[2], date[3], date[4], date[5]);
//       } catch (error) {
//         console.log('outil-err-formatDate:', error.message);
//       }
//
//       if (!d) {
//         return date;
//       } else {
//         var yyyy = d.getFullYear(),
//             mm = d.getMonth() + 1,
//             dd = d.getDate(),
//             hh = d.getHours(),
//             nn = d.getMinutes(),
//             ss = d.getSeconds(),
//             YY = ('' + yyyy).right(2),
//             MM = ('00' + mm).right(2),
//             DD = ('00' + dd).right(2),
//             HH = ('00' + hh).right(2),
//             NN = ('00' + nn).right(2),
//             SS = ('00' + ss).right(2);
//         return formatModel.replace(/yyyy/g, yyyy).replace(/mm/g, mm).replace(/dd/g, dd).replace(/hh/g, hh).replace(/nn/g, nn).replace(/ss/g, ss).replace(/YY/g, YY).replace(/MM/g, MM).replace(/DD/g, DD).replace(/HH/g, HH).replace(/NN/g, NN).replace(/SS/g, SS);
//       }
//     };
//     /**
//      * 计算两个坐标之间的距离
//      */
//
//
//     self.getFlatternDistance = function (lat1, lng1, lat2, lng2) {
//       function getRad(d) {
//         return d * Math.PI / 180.0;
//       }
//
//       var EARTH_RADIUS = 6378137.0;
//       var f = getRad((lat1 * 1 + lat2 * 1) / 2);
//       var g = getRad((lat1 - lat2) / 2);
//       var l = getRad((lng1 - lng2) / 2);
//       c;
//       var sg = Math.sin(g);
//       var sl = Math.sin(l);
//       var sf = Math.sin(f);
//       var s, c, w, r, d, h1, h2;
//       var a = EARTH_RADIUS;
//       var fl = 1 / 298.257;
//       sg = sg * sg;
//       sl = sl * sl;
//       sf = sf * sf;
//       s = sg * (1 - sl) + (1 - sf) * sl;
//       c = (1 - sg) * (1 - sl) + sf * sl;
//       w = Math.atan(Math.sqrt(s / c));
//       r = Math.sqrt(s * c) / w;
//       d = 2 * w * a;
//       h1 = (3 * r - 1) / 2 / c;
//       h2 = (3 * r + 1) / 2 / s;
//       return d * (1 + fl * (h1 * sf * (1 - sg) - h2 * (1 - sf) * sg));
//     };
//     /**
//      * 根据评分获得评价文本
//      */
//
//
//     self.pingjia = function (f) {
//       var p = '';
//
//       switch (true) {
//         case f >= 4.5:
//           p = '超好';
//           break;
//
//         case f >= 4 && f < 4.5:
//           p = '很好';
//           break;
//
//         case f >= 3.5 && f < 4:
//           p = '不错';
//           break;
//
//         case f >= 3 && f < 3.5:
//           p = '一般';
//           break;
//
//         case f >= 2 && f < 3:
//           p = '不好';
//           break;
//
//         case f < 2:
//           p = '很差';
//           break;
//       }
//
//       return p;
//     };
//     /**
//      * 判断某个对象是否是某个类型
//      * 返回：bool值 true 或 false
//      * 实例：alert(is([], "Array"));
//      */
//
//
//     self.is = function (obj, type) {
//       return type === 'Null' && obj === null || type === 'Undefined' && obj === void 0 || type === 'Number' && isFinite(obj) || Object.prototype.toString.call(obj).slice(8, -1) === type;
//     };
//     /**
//      * 是否是特殊的分享页面
//      */
//
//
//     self.isSharePage = function () {
//       var url = window.location.href;
//       return url.has('/gofor/') || url.has('/project/detail/') || url.has('/help/download/') || url.has('/user/shop/details/') || url.has('/activity/givebouns/') || url.has('/activity/first/') || url.has('/activity/arena/') || url.has('activity/receivebonus') || url.has('/activity/arenarankdata/') || url.has('/activity/myarenarank/') || url.has('/activity/giveredbag/') || url.has('/activity/getbouns/') || url.has('/precommend/share/') || url.has('/precommend/confirmshare/') || url.has('/project/gendan/') || url.has('/precommend/detail/') || url.has('/precommend/?') || url.has('/activity/rcmd') || url.has('/project/hm/') || url.has('/pay/scan/projectma/') && config.isAPP || url.has('/pay/scan/savedtma/') && config.isAPP;
//     };
//     /**
//      * 将时间(或时间文本)转换成短格式：今天 18:00、明天 17:00、 3-11 16:00 这三种形式
//      * 返回：短时间格式
//      * 实例：alert(toShortDate("2019-05-07 17:35:27"));
//      */
//
//
//     self.toShortDate = function (date) {
//       if (date.toDate) {
//         date = date.toDate();
//       }
//
//       try {
//         var diff = new Date().Dateformat('yyyy-MM-DD 00:00:00').toDate().DateDiff('s', date),
//             seconds = 3600 * 24;
//
//         if (diff > 0 && diff < seconds) {
//           var r = date.Dateformat('今日 hh:NN');
//         } else if (diff >= seconds && diff < seconds * 2) {
//           var r = date.Dateformat('明日 hh:NN');
//         } else {
//           var r = date.Dateformat('mm-dd hh:NN');
//         }
//       } catch (error) {
//         console.error(error.message);
//         var r = date.Dateformat('mm-dd hh:NN');
//       }
//
//       return r;
//     };
//     /**
//      * 将秒数转换为x天y小时z分a秒
//      * @formater {string} 格式化的格式，默认 dd天hh小时nn分ss秒
//      */
//
//
//     self.numToTime = function (num, formater) {
//       formater = formater || 'dd天hh小时nn分ss秒';
//       formater += '';
//       var d = 3600 * 24,
//           h = 3600,
//           n = 60;
//       var dd = Math.floor(num / d),
//           //--计算天数
//       hh = Math.floor(num % d / h),
//           //--计算小时
//       nn = Math.floor(num % d % h / n),
//           //--计算分钟
//       ee = num % d % h % n; //--计算秒数
//
//       return formater.replace(/dd/g, dd).replace(/hh/g, hh).replace(/nn/g, nn).replace(/ee/g, ee);
//     };
//     /**
//      * 判断某个对象是否是空
//      * 返回：bool值 true 或 false
//      * 实例：isNull(0) --> false;
//      */
//
//
//     self.isNull = function (arg1) {
//       return !arg1 && arg1 !== 0 && typeof arg1 !== 'boolean' ? true : false;
//     };
//
//     var timmer = function timmer(obj) {
//       var self = this;
//       self.parent = obj;
//       var timmerMap = {}; //--计时器映射
//
//       self.newTimmer = function (opts) {
//         //--创建新的计时器
//         var key = opts.key,
//             fun = opts.fun,
//             timeout = opts.timeout;
//         self.clearTimmer(key);
//         timmerMap[key] = window.setInterval(function () {
//           fun();
//         }, timeout);
//         console.log(timmerMap); //console.log(obj);
//       };
//
//       self.clearTimmer = function (key) {
//         //--清除指定的计时器
//         if (key) {
//           window.clearInterval(timmerMap[key]);
//           delete timmerMap[key];
//         } else {
//           for (var key in timmerMap) {
//             window.clearInterval(timmerMap[key]);
//             delete timmerMap[key];
//           }
//         }
//       };
//
//       self.getTimmers = function (key) {
//         // console.log(timmerMap);
//         var arr = [];
//
//         for (var i in timmerMap) {
//           if (i.has(key)) {
//             arr.push(i);
//           }
//         }
//
//         return arr;
//       };
//     };
//
//     self.timmer = new timmer(self); //--计时器管理对象
//
//     self.checkLogin = __webpack_require__(70); //--检查用户是否登录
//
//     self.checkDeputeLimit = __webpack_require__(71); //--检查用户是否限制提交
//     //--过关方式排列函数
//     //--排序规则：单关优先依次排列，其次混关关数依次排列，最后关数相同的依据串法排列
//
//     self.guoguanSort = function (arr) {
//       return arr.split(',').sort(function (x, y) {
//         //--过关排序
//         var x = x.split('_'),
//             y = y.split('_');
//         return x[0] - y[0];
//       }).sort(function (x, y) {
//         //--串法排序
//         var x = x.split('_'),
//             y = y.split('_');
//         return x[1] - y[1];
//       }).sort(function (x, y) {
//         //--单关排序
//         var x = x.split('_'),
//             y = y.split('_');
//
//         if (x[1] == 1 && y[1] == 1) {
//           //--同是单关，依次排列
//           return x[0] - y[0];
//         } else if (x[1] == 1 && y[1] != 1 && x[0] != y[0]) {
//           //--任一非单关，单关在前
//           return x[0] - y[0];
//         } else if (x[1] != 1 && y[1] == 1 && x[0] != y[0]) {
//           //--任一非单关，单关在前
//           return (x[0] - y[0]) * -1;
//         }
//       }).join(',');
//     };
//     /**
//      * @function jingcaiCheck
//      * @description 竞彩投注数据限制检查
//      */
//
//
//     self.jingcaiCheck = function () {
//       var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
//       var jingcai = ['SportteryWDL', 'SportteryNWDL', 'SportteryScore', 'SportteryTotalGoals', 'SportteryHalfFull', 'SportterySoccerMix'];
//       var jingcailanqiu = [//--竞彩篮球类型
//       'SportteryWL', //--胜负
//       'SportteryHWL', //--让胜负
//       'SportteryBS', //--大小分
//       'SportteryWS', //--胜分差
//       'SportteryBasketMix' //--竞彩篮球混合过关
//       ];
//       var lottType = data.lottery_type;
//
//       if (jingcai.includes(lottType) || jingcailanqiu.includes(lottType)) {
//         var _data$wager_store = data.wager_store,
//             wager_store = _data$wager_store === void 0 ? [] : _data$wager_store,
//             money = data.money,
//             betTimes = data.betTimes;
//
//         var _ref = wager_store[0] || {},
//             m = _ref.m,
//             wager = _ref.wager;
//
//         if (money > 200000) {
//           vm.showToast('方案金额不能超过20万元');
//           return false;
//         } // if (m > 6000) {
//         //     vm.showToast('单倍最高金额6000');
//         //     return false;
//         // }
//
//
//         var wagers = wager.split(';');
//         var sumCount = 0; //--选中项数
//
//         wagers.forEach(function () {
//           var wg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
//           sumCount += wg.split(',').length;
//         });
//
//         if (sumCount > 20) {
//           vm.showToast('总投注选项数不能超过20个');
//           return false;
//         }
//
//         if (data.wager_store_optimize_json) {
//           //--优化后的数据
//           try {
//             var wagerOptz = JSON.parse(data.wager_store_optimize_json);
//
//             if (Object.keys(wagerOptz).length > 20) {
//               vm.showToast('优化拆分组合数不能超过20个');
//               return false;
//             }
//           } catch (error) {
//             return true;
//           }
//         }
//
//         if (betTimes > 16) {
//           vm.showToast('每场选择玩法数连乘不能超过16');
//           return false;
//         }
//
//         return true;
//       }
//
//       return true;
//     };
//     /**
//      * 做单通用方法，在生成订单前询问是否登录
//      * 参数：data，做单需求的数据，即做单接口data元素的数据;
//      * 		act:动作,save = 保存方案 || submit = 提交彩电 || hemai = 合买
//      * 		nologin: 布尔值，是否允许匿名提交，如果为true，则不进行登陆提示；优先级低于场景，非扫码场景下失效
//      * 注意：在data 或者 act 为null的时候，会自动获取上次执行时缓存的数据，也就是说允许使用：saveProject(null, null, true)的方式再次提交
//      */
//
//
//     self.saveProject = function (data, act, nologin) {
//       var baseSetting = itou.baseSetting,
//           simplify = itou.simplify; //--检查是否是精简模式，是否开启该功能
//
//       if (act == 'save' && baseSetting.simplify && !simplify.baocun) {
//         vm.showMsgBox('很抱歉，欧洲杯期间保存功能暂时关闭！');
//         return Promise.reject();
//       } //--检查是否是精简模式，是否开启该功能
//
//
//       if (act == 'hemai' && baseSetting.simplify && !simplify.hemai) {
//         // if (act == 'hemai') {
//         vm.showMsgBox('受世界杯影响，系统负载过高无法保证合买体验，从11月25日至12月18期间暂停合买发起功能！');
//         return Promise.reject();
//       }
//
//       if (self.saveProject.doing) {
//         vm.showToast('操作太频繁了，请稍后再试');
//         return;
//       }
//
//       self.saveProject.doing = true;
//       setTimeout(function () {
//         self.saveProject.doing = false;
//       }, 5000); // console.log(data); return;
//
//       if (!self.jingcaiCheck(data)) {
//         return;
//       }
//
//       var bustling = vm.$refs.bustling,
//           loading = false;
//
//       if (loading) {
//         return Promise.reject();
//       }
//
//       loading = true;
//       bustling && bustling.start({
//         fun: function fun() {
//           loading = false;
//         }
//       });
//
//       if (!act) {
//         //--提交动作默认获取上一次的动作
//         act = itou.sessionData.getData('__saveProject_act').act || 'save';
//       } else {
//         itou.sessionData.setData('__saveProject_act', {
//           act: act
//         });
//       }
//
//       data = data || itou.sessionData.getData('__saveProject_data').data;
//
//       if (data.pass_type) {
//         try {
//           data.pass_type = self.guoguanSort(data.pass_type + '');
//         } catch (error) {
//           console.log(error);
//         }
//       }
//
//       if (data.wager_store && data.wager_store[0] && data.wager_store[0].pt) {
//         var pt = data.wager_store[0].pt + '';
//         data.wager_store[0].pt = self.guoguanSort(pt);
//       }
//
//       var entry_info = itou.localJson.getJson('__entry_info') || {};
//       data.station_uid = entry_info.station_id || '';
//       console.log(JSON.stringify(data, null, 4)); //合买参数判定
//
//       if (act == 'hemai') {
//         data.is_share_buy = 1;
//       }
//
//       if (!data) {
//         Gray.$page.loadPage('/');
//         return Promise.reject();
//       }
//
//       if (act == 'save') {
//         data.by_save = 1;
//       }
//
//       if (act == 'save') {
//         //--渠道动作埋点
//         itou.channelHm.setBuriedPoints('project_save');
//       } else if (act == 'hemai') {
//         //--渠道动作埋点
//         itou.channelHm.setBuriedPoints('project_sharebuy');
//       } else if (act == 'submit') {
//         //--渠道动作埋点
//         itou.channelHm.setBuriedPoints('project_next');
//       } // return self.checkLogin()
//       //     .then(function () {//--做单
//       //         return itou.get({
//       //             url: 'make/index',
//       //             data: data,
//       //             type: 'POST'
//       //         });
//       //     })
//
//
//       return itou.get({
//         url: 'make/index',
//         data: data,
//         type: 'POST',
//         specialErr: {
//           //--特殊错误处理
//           '-81': function _(rlt) {
//             vm.$refs.limitLayer.open(rlt.data);
//           }
//         }
//       }).then(function (result) {
//         //--根据动作进行跳转
//         loading = false;
//         bustling && bustling.end();
//         result.p_uuid = result.p_uuid || '0';
//         var defer = $.Deferred();
//
//         if (act == 'submit') {
//           //--提交店铺
//           defer.reject();
//           var localData = itou.localData.getData('__sys_lottery_type').key || {};
//           localData.v = data.lottery_type;
//           localData.money = data.money;
//           itou.localData.setData('__sys_lottery_type', {
//             key: localData
//           });
//           itou.localJson.setJson('/project/detail/', {
//             id: result.project_id,
//             uuid: result.p_uuid
//           });
//           var backurl = window.backurl || '';
//
//           if (backurl.has(encodeURIComponent('/confirm/noaccount/')) || backurl.has('/confirm/noaccount/')) {
//             backurl = encodeURIComponent(window.backpaths[0]) || backurl;
//           }
//
//           if (nologin) {
//             //--允许匿名提交，需要先进行微信授权
//             itou.auth.getCode('snsapi_userinfo', '/confirm/?back=' + backurl + '&nologin=true');
//           } else {
//             Gray.$page.loadPage('/confirm/?back=' + backurl);
//           }
//         } else if (act == 'save' || act == 'hemai') {
//           //--保存方案
//           defer.reject();
//           itou.localJson.setJson('/project/detail/', {
//             id: result.project_id,
//             uuid: result.p_uuid
//           });
//           var backurl = window.backurl || '';
//
//           if (backurl.has(encodeURIComponent('/confirm/basket/')) || backurl.has('/confirm/basket/')) {
//             backurl = encodeURIComponent(window.backpaths[0]) || backurl;
//           }
//
//           if (nologin) {
//             //--允许匿名提交，需要先进行微信授权
//             itou.auth.getCode('snsapi_userinfo', '/project/detail/?back=' + backurl + '&nologin=true');
//           } else if (act == 'save') {
//             Gray.$page.loadPage('/project/detail/?back=' + backurl);
//           } else if (act == 'hemai') {
//             Gray.$page.loadPage('/hm/add/?id=' + result.project_id + '&p_uuid=' + result.p_uuid + '&back=' + backurl);
//           }
//         }
//
//         return defer.promise();
//       });
//     };
//
//     self.getUrlParam = function (url, key) {
//       var reg = new RegExp('(^|&|\\?)' + key + '=([^&]*)(&|$)'); //构造一个含有目标参数的正则表达式对象
//
//       var r = url.match(reg); //匹配目标参数
//
//       if (r != null) return r[2];
//       return null; //返回参数值
//     };
//
//     self.getBackUrl = function () {
//       var url = Gray.$page.href || (config.isAPP ? '/' : window.location.href),
//           reg = /^(http:\/\/|https:\/\/|file:\/\/\/)[^\/]+\//,
//           num = 0,
//           r = {
//         paths: [],
//         backurl: null
//       };
//       url = url.replace(reg, '/').replace(/\/\//g, '/'); //--鉴于code 或 auth_code 使用一次后会失效，因而在back中移除code等地址栏参数
//
//       var code = self.getUrlParam(url, 'code');
//       url = url.replace('code=' + code, '1=1');
//       var auth_code = self.getUrlParam(url, 'auth_code');
//       url = url.replace('auth_code=' + auth_code, '1=1');
//       url = url.replace(/\&1=1/g, ''); // if(!config.isAPP && itou.linkSafe) {
//       // 	url = itou.linkSafe.timeSafe.replaceParams(url);
//       // }
//       //--end
//
//       function getBcak(url) {
//         var back = self.getUrlParam(url, 'back');
//
//         if (back) {
//           num += 1;
//           back = decodeURIComponent(back);
//           r.paths.push(back);
//           return getBcak(back);
//         } else {
//           return url;
//         }
//       }
//
//       var back = getBcak(url);
//
//       if (num <= 8) {
//         r.backurl = encodeURIComponent(url);
//       } else {
//         r.backurl = encodeURIComponent(back);
//       }
//
//       console.debug(r);
//       return r;
//     };
//
//     self.moneyFormat = function (num, fixedNum) {
//       //--金额格式化，自动处理成亿、万等单位
//       fixedNum = fixedNum || 1;
//
//       try {
//         var num1 = Math.pow(10, 8),
//             num2 = Math.pow(10, 4);
//
//         if (num / num1 > 1) {
//           num = (num / num1).toFixed(fixedNum) + '亿';
//         } else if (num / num2 > 1) {
//           num = (num / num2).toFixed(fixedNum) + '万';
//         } else {
//           num = (num * 1).toFixed(fixedNum) + '元';
//         }
//       } catch (error) {
//         var num = 0 .toFixed(fixedNum) + '元';
//       }
//
//       return num;
//     };
//
//     self.gotoTaps = function (url) {
//       //--同级标签页来回切换，不会影默认响返回功能
//       var backurl = window.backpaths[0] || '/';
//       backurl = encodeURIComponent(backurl);
//
//       switch (true) {
//         case url.has('?'):
//           Gray.$page.loadPage(url + '&back=' + backurl);
//           break;
//
//         default:
//           Gray.$page.loadPage(url + '?back=' + backurl);
//       }
//     };
//
//     self.gotoDetail = function (lottery_type, id) {
//       //--跳转到简化的方案详情页
//       var jingcai = ['SportteryWDL', 'SportteryNWDL', 'SportteryScore', 'SportteryTotalGoals', 'SportteryHalfFull', 'SportterySoccerMix'],
//           danchang = ['WL', 'WDL', 'Score', 'TotalGoals', 'OverUnder', //--上下单双
//       'HalfFull'],
//           jingcailanqiu = [//--竞彩篮球类型
//       'SportteryWL', //--胜负
//       'SportteryHWL', //--让胜负
//       'SportteryBS', //--大小分
//       'SportteryWS', //--胜分差
//       'SportteryBasketMix' //--竞彩篮球混合过关
//       ],
//           zucai = ['ToTo', 'NineToTo'],
//           backurl = window.backurl,
//           url;
//
//       if (jingcai.contains(lottery_type) || danchang.contains(lottery_type)) {
//         url = '/confirm/project/jingcai/';
//       } else if (jingcailanqiu.contains(lottery_type)) {
//         url = '/confirm/project/jingcailanqiu/';
//       } else if (zucai.contains(lottery_type)) {
//         url = '/confirm/project/zucai/';
//       } else if (lottery_type == 'SSQ' || lottery_type == 'SuperLotto' || lottery_type == 'KL8') {
//         url = '/confirm/project/number/';
//       } else if (lottery_type == 'P3' || lottery_type == '3D' || lottery_type == 'P5' || lottery_type == 'P7' || lottery_type == 'NP7') {
//         url = '/confirm/project/p33d/';
//       } else {
//         url = '/confirm/project/fast/';
//       }
//
//       url += '?back=' + backurl;
//
//       if (id) {
//         url += '&id=' + id;
//       }
//
//       Gray.$page.loadPage(url);
//     };
//
//     self.autocache = {};
//
//     self.autocache.setKey = function (api, key) {
//       //--记录自动缓存的接口的键值
//       var obj = {};
//       obj[api] = key;
//       itou.sessionData.setData('__itou_outil_autocache.key', obj);
//     };
//
//     self.autocache.getKey = function (api) {
//       return itou.sessionData.getData('__itou_outil_autocache.key')[api];
//     };
//     /**
//      * 循环内演示执行函数。放入循环体内，可延时将arr1的内容存入arr内
//      * @param {Array} arr 目标数组，延时执行被插入的数组
//      * @param {Array} arr1 数据数组，延时执行要插入的数据
//      * @param {Number} n 延时时间，单位毫秒
//      */
//
//
//     self.doSetTimeout = function (arr, arr1, n) {
//       setTimeout(function () {
//         // console.log(arr, arr1, n);
//         arr.push.apply(arr, arr1);
//       }, n);
//     };
//     /**
//      * 展示“正在加载loading”层。
//      * @param {Number} len 展示时间，数字，单位S，可以是小数；
//      * @备注：只会同时存在一个层，如果连续多次调用，会以最后一次调用开始计时；
//      * @强行中止方式：调用 itou.outil.showLoading(0);可直接终止loading层展示
//      */
//
//
//     self.showLoading = function (len) {
//       var el = $('#loaderbox__sys_itou_outil_showLoading'),
//           key = '__sys_itou_outil_showLoading';
//       itou.outil.timmer.clearTimmer(key);
//
//       if (el.length == 0) {
//         el = $('#loaderbox').clone();
//         el.attr('id', 'loaderbox__sys_itou_outil_showLoading');
//         el.appendTo('body');
//       }
//
//       el.show();
//       itou.outil.timmer.newTimmer({
//         key: key,
//         timeout: len * 1000,
//         fun: function fun() {
//           el.hide();
//           itou.outil.timmer.clearTimmer(key);
//         }
//       });
//     };
//   }; //--微信认证构对象造函数
//
//
//   var auth = function auth(obj) {
//     var self = this,
//         regetNum = 0;
//     self.parent = obj;
//     self.code = Gray.$page.getUrlParam('code') || Gray.$page.getUrlParam('auth_code'); //alert(self.code);
//     //--当实例初始化时，判断当前帐户的认证和绑定状态
//
//     self.checkWxauth = function (isToBindShop) {
//       var nologin = Gray.$page.getUrlParam('nologin') || null;
//       var defer = $.Deferred();
//       window.codePromise = defer.promise();
//
//       if (self.code) {
//         var _maps = {
//           wx: 'wechat',
//           ali: 'ali',
//           qq: 'qq'
//         };
//         self.parent.get({
//           url: 'user/partnerauth',
//           data: {
//             partnerinfo: {
//               code: self.code,
//               appid: config.appid.wx
//             },
//             type: _maps[config.browser] || 'wechat'
//           },
//           formatResult: false
//         }).then(function (result) {
//           // console.info(JSON.stringify(result, null, 4));return;
//           // confirm(JSON.stringify(result));
//           regetNum += 1;
//
//           if (result.errcode == -2) {
//             if (regetNum > 5) {
//               //--重复次数过多
//               return;
//             } // itou.gotoLogin();//--重新获取Code
//
//
//             var url = Gray.$page.href || window.location.href; //领红包页跳转处理
//             // if(url.has("/receivebonus")){
//             // 	return;
//             // }
//             //领红包页处理完成
//
//             var code = itou.outil.getUrlParam(url, 'code');
//             url = url.replace('code=' + code, '1=1');
//             var auth_code = itou.outil.getUrlParam(url, 'auth_code');
//             url = url.replace('auth_code=' + auth_code, '1=1');
//             url = url.replace(/\&1=1/g, '');
//             self.getCode('snsapi_userinfo', url); //--重新获取Code
//
//             return;
//           }
//
//           regetNum = 0;
//           var data = result.data;
//           console.log(data);
//           self.parent.localJson.setJson('itou_is_subscribe', {
//             key: data.is_subscribe,
//             islogin: data.is_bind,
//             timestamp: new Date().Dateformat('yyyy-MM-DD HH:NN:SS')
//           });
//           window.setTimeout(function () {
//             defer.resolve();
//           }, 500);
//           var url = Gray.$page.href || window.location.href;
//
//           if (!data.is_bind && nologin) {//--不要求登陆的情况
//           } else if (!data.is_bind && url.has('/user/login/')) {//--就在登陆页面不需要跳转
//           } else if (!data.is_bind) {
//             vm.logined = false;
//           } else if (data.is_bind) {
//             if (url.has('/user/shop/details/')) {
//               return;
//             }
//
//             var back = Gray.$page.getUrlParam('back');
//
//             if (back) {
//               itou.page.back();
//               return;
//             }
//
//             var returnUrl = itou.localData.getData('__sys_window_return_url');
//             returnUrl = returnUrl.url;
//             var r = returnUrl || localStorage.getItem('returnUrl');
//
//             if (!!r && !r.has('/user/login/')) {
//               Gray.$page.loadPage(r);
//             } else {
//               Gray.$page.loadPage('/');
//             }
//           }
//         });
//       }
//     };
//     /**
//      * 获取code
//      * @scope 	应用授权作用域，此时固定为：snsapi_userinfo
//      * 單頁面模式，直接進入指定的返回頁面
//      */
//
//
//     self.getCode = function (scope, returnUrl) {
//       if (config.platform == 'wx') {
//         self.returnurl = Gray.page.href || window.location.href;
//         localStorage.setItem('returnUrl', self.returnurl); // alert(returnUrl + "\n\r" + config.base_url)
//
//         if (returnUrl) {
//           returnUrl = returnUrl.has(config.base_url) ? returnUrl : config.base_url + returnUrl;
//           var redirect_uri = encodeURIComponent(returnUrl);
//         } else {
//           try {
//             // var redirect_uri = window.backpaths[0]? encodeURIComponent(window.backpaths[0]): window.backurl;
//             var redirect_uri = window.backurl || encodeURIComponent('/');
//
//             if (redirect_uri.has('code') || redirect_uri.has('auth_code')) {
//               redirect_uri = encodeURIComponent(window.backpaths[0]);
//             } // redirect_uri = encodeURIComponent(config.base_url) + redirect_uri;
//
//
//             redirect_uri = encodeURIComponent(config.base_url + '/user/login/?back=' + redirect_uri);
//           } catch (error) {
//             var redirect_uri = encodeURIComponent(config.base_url + '/user/login/');
//           }
//         } // var url = config.base_url;
//         // if(!self.returnurl.toLowerCase().has("/user/login/")){
//         // 	url += "/user/login/";
//         // }
//         // alert(redirect_uri)
//
//
//         var url;
//
//         if (config.browser == 'wx') {
//           var url = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + config.appid['wx'] + '&redirect_uri=' + redirect_uri + '&response_type=code' + '&scope=' + scope + '#wechat_redirect';
//         } else if (config.browser == 'ali') {
//           var url = 'https://openauth.alipay.com/oauth2/publicAppAuthorize.htm?app_id=' + config.appid['ali'] + '&redirect_uri=' + redirect_uri + '&scope=auth_user';
//         } // alert(url);
//
//
//         window.location.href = url;
//       } else {
//         if (returnUrl) {
//           var href = Gray.$page.href || window.location.href;
//           if (href == returnUrl) return;else var redirect_uri = returnUrl;
//         } else {
//           try {
//             var redirect_uri = window.backpaths[0] || window.backurl; // redirect_uri = encodeURIComponent(config.base_url) + redirect_uri;
//
//             redirect_uri = '/user/login/?back=' + encodeURIComponent(redirect_uri);
//           } catch (error) {
//             var redirect_uri = '/user/login/';
//           }
//         }
//
//         Gray.$page.loadPage(redirect_uri);
//       }
//     }; // self.getCode("snsapi_userinfo");
//
//   };
//   /**
//    * 本地存储JSON数据
//    * 数据存储在itou_localJson的key中
//    * 超过3天的数据会自动清除
//    */
//
//
//   var localJson = function localJson(obj) {
//     var self = this;
//     self.parent = obj;
//     var str = localStorage.getItem('itou_localJson');
//     var Json = str ? strToJson(str) : {};
//
//     function strToJson(str) {
//       var json = new Function('return ' + str)();
//       return json;
//     } // for(var i in Json){//--清除超过缓存时间的数据
//     // 	var lastTime = Json[i].lastTime || (3 * 24 * 3600);
//     // 	if(lastTime != -1){
//     // 		try{
//     // 			var timestamp  = new Date(Json[i].timestamp);
//     // 		}catch(e){
//     // 			delete Json[i];
//     // 			return;
//     // 		}
//     // 		var diff = timestamp.DateDiff("s", new Date());
//     // 		if(diff > lastTime){
//     // 			delete Json[i];
//     // 		}
//     // 	}
//     // }
//     //--将json存入localStorage
//
//
//     self.setJson = function (key, json, lastTime) {
//       //--lastTime:缓存时间，单位秒
//       //--lastTime == -1，则为永久保存不清除
//       lastTime = lastTime || 3 * 24 * 3600;
//
//       if (Json[key]) {
//         json = $.extend({}, Json[key].json, json);
//       }
//
//       Json[key] = {
//         'timestamp': new Date(),
//         //--时间戳
//         'lastTime': lastTime,
//         //--缓存时间
//         'json': json
//       };
//       localStorage.setItem('itou_localJson', JSON.stringify(Json));
//     }; //--从localStorage中读取json
//
//
//     self.getJson = function (key) {
//       if (Json[key]) {
//         var lastTime = Json[key].lastTime || 3 * 24 * 3600; //--有效期
//
//         if (lastTime != -1) {
//           try {
//             var timestamp = new Date(Json[key].timestamp); //--时间戳
//           } catch (e) {
//             delete Json[key]; //--无效时间戳，删除缓存数据
//
//             return {};
//           }
//
//           var diff = timestamp.DateDiff('s', new Date());
//
//           if (diff > lastTime) {
//             //--超时，删除缓存数据
//             delete Json[key];
//             return {};
//           }
//         }
//       }
//
//       return Json[key] ? Json[key].json || {} : {};
//     };
//
//     self.delJson = function (key, key1) {
//       if (key && key1) {
//         if (Json[key]) {
//           delete Json[key].json[key1];
//         }
//       } else if (key) {
//         delete Json[key];
//       } //console.log(Json);
//
//
//       localStorage.setItem('itou_localJson', JSON.stringify(Json));
//     };
//
//     self.clear = function () {
//       //--清除所有存储数据
//       localStorage.setItem('itou_localJson', '{}');
//     };
//   };
//   /**
//    * 本地存储JSON数据
//    * 数据存储在itou_localData的key中
//    * 数据不会自动清除
//    */
//
//
//   var localData = function localData(obj) {
//     var self = this;
//     self.parent = obj;
//     var str = localStorage.getItem('itou_localData');
//     var Json = str ? strToJson(str) : {};
//
//     function strToJson(str) {
//       var json = new Function('return ' + str)();
//       return json;
//     } //--将json存入localStorage
//
//
//     self.setData = function (key, json) {
//       if (Json[key]) {
//         json = $.extend({}, Json[key].json, json);
//       }
//
//       Json[key] = {
//         'json': json
//       };
//       localStorage.setItem('itou_localData', JSON.stringify(Json));
//     }; //--从localStorage中读取json
//
//
//     self.getData = function (key) {
//       return Json[key] ? Json[key].json || {} : {};
//     };
//
//     self.delData = function (key, key1) {
//       if (key && key1) {
//         if (Json[key]) {
//           delete Json[key].json[key1];
//         }
//       } else if (key) {
//         delete Json[key];
//       }
//
//       console.log(Json);
//       localStorage.setItem('itou_localData', JSON.stringify(Json));
//     };
//
//     self.clear = function () {
//       //--清除所有存储数据
//       localStorage.setItem('itou_localData', '{}');
//     };
//   };
//   /**
//    * 本地存储JSON数据
//    * 数据存储在itou_sessionData的key中
//    * 数据不会自动清除
//    */
//
//
//   var sessionData = function sessionData(obj) {
//     var self = this;
//     self.parent = obj;
//     var str = sessionStorage.getItem('itou_sessionData');
//     var Json = str ? strToJson(str) : {};
//
//     function strToJson(str) {
//       var json = new Function('return ' + str)();
//       return json;
//     } //--将json存入sessionStorage
//
//
//     self.setData = function (key, json, lastTime) {
//       if (Json[key]) {
//         json = $.extend({}, Json[key].json, json);
//       }
//
//       Json[key] = {
//         'timestamp': new Date(),
//         //--时间戳
//         'lastTime': lastTime || 30,
//         //--有效期， 单位：分钟
//         'json': json
//       };
//       sessionStorage.setItem('itou_sessionData', JSON.stringify(Json));
//     }; //--从sessionStorage中读取json
//
//
//     self.getData = function (key) {
//       if (Json[key]) {
//         try {
//           var timestamp = new Date(Json[key].timestamp); //--时间戳
//         } catch (e) {
//           delete Json[key]; //--无效时间戳，删除缓存
//
//           return {};
//         }
//
//         var lTime = Json[key].lastTime || 30;
//         var diff = timestamp.DateDiff('n', new Date());
//
//         if (diff > lTime) {
//           //--超时，删除缓存数据
//           delete Json[key];
//           return {};
//         }
//       }
//
//       return Json[key] ? Json[key].json || {} : {};
//     };
//
//     self.delData = function (key, key1) {
//       if (key && key1) {
//         if (Json[key]) {
//           delete Json[key].json[key1];
//         }
//       } else if (key) {
//         delete Json[key];
//       }
//
//       console.log(Json);
//       sessionStorage.setItem('itou_sessionData', JSON.stringify(Json));
//     };
//
//     self.clear = function () {
//       //--清除所有存储数据
//       sessionStorage.setItem('itou_sessionData', '{}');
//     };
//   };
//   /**
//    * 系统固定设置信息
//    * 用于设置一些固定的配置信息，例如省份等
//    */
//
//
//   var Setting = function Setting(obj) {
//     var self = this;
//     self.parent = obj;
//     obj.$setting = {};
//
//     self.setData = function (key, val) {
//       obj.$setting[key] = val;
//       console.log(obj.$setting);
//     };
//
//     self.getData = function (key) {
//       return typeof obj.$setting[key] == 'boolean' ? obj.$setting[key] : obj.$setting[key] || null;
//     };
//
//     self.delData = function () {
//       delete obj.$setting[key];
//     };
//   };
//
//   var TimeLine = function TimeLine(obj) {
//     //--时间线对象，用于进行性能分析
//     var self = this;
//     self.parent = obj;
//     self.config = {
//       //--基础设置
//       autoAnalyze: true,
//       //--是否自动分析
//       timeout: 5000,
//       //--自动分析延时时间，autoAnalyze == true时生效
//       timeMin: 3000,
//       //--自动分析延时时间最小值
//       timeMax: 30000,
//       //--自动分析延时时间最大值
//       debug: true //--是否在标记函数触发时展示标记信息
//
//     };
//
//     try {
//       //--监听auto属性设置，来开启或关闭时间线自动分析
//       Object.defineProperty(self, 'auto', {
//         set: function set(val) {
//           if (val == 'on') {
//             self.config.autoAnalyze = true;
//           } else if (val == 'off') {
//             self.config.autoAnalyze = false;
//           }
//         }
//       });
//     } catch (e) {
//       console.error(e);
//     }
//
//     try {
//       //--监听timeout属性设置，来设置时间线自动分析延时,单位：毫秒
//       Object.defineProperty(self, 'timeout', {
//         set: function set(val) {
//           if (!val || isNaN(val)) {
//             //--非数字直接返回
//             return;
//           } else if (val > self.config.timeMax) {
//             //--超过最大延时
//             self.config.timeout = self.config.timeMax;
//           } else if (val < self.config.timeMin) {
//             //--低于最小延时
//             self.config.timeout = self.config.timeMin;
//           } else {
//             self.config.timeout = val;
//           }
//         }
//       });
//     } catch (e) {
//       console.error(e);
//     }
//
//     try {
//       //--监听debug属性设置，来开启或关闭时间线标记展示
//       Object.defineProperty(self, 'debug', {
//         set: function set(val) {
//           if (val == 'on') {
//             self.config.debug = true;
//           } else if (val == 'off') {
//             self.config.debug = false;
//           }
//         }
//       });
//     } catch (e) {
//       console.error(e);
//     }
//
//     var marks = {},
//         //---标记数据对象，数据形式{"1": {key: {msg: "msg", time: "time"}}}
//     keys = [],
//         //--标记键值数组，用于记录顺序,数据形式：[[key1, key2, key3], [key1, key2, key3]]
//     error = [],
//         //--错误信息，一般用于记录标记key重复信息，数据结构：[{cutOff: 1, key: key}]
//     result = {},
//         //--时间间隔计算对象，数据结构：{55: [{cutOff: 3, prev: {key: key, msg: msg, time: time}, curr: {key: key, msg: msg, time: time}}]}
//     timeInterval = [],
//         //--时间间隔数组，用于计算间隔最大值和最小值
//     timmer = null;
//
//     self.cutOff = function () {
//       //--时间线分割
//       keys.push([]);
//       var len = keys.length,
//           debug = self.config.debug;
//       marks[len] = {};
//
//       if (debug) {
//         console.debug('timeLine', '**********************时间线分割**********************');
//       }
//
//       return self;
//     };
//
//     self.stamp = function (key, msg) {
//       //--时间线标记函数
//       if (keys.length == 0) {
//         //--初始数据处理
//         keys.push([]);
//         var len = keys.length;
//         marks[len] = {};
//       }
//
//       var auto = self.config.autoAnalyze,
//           timeout = debug = self.config.timeout,
//           debug = self.config.debug,
//           len = keys.length,
//           ks = keys[len - 1],
//           mrks = marks[len];
//
//       if (!mrks[key]) {
//         //--添加标记
//         mrks[key] = {
//           msg: msg,
//           time: new Date()
//         };
//         ks.push(key);
//
//         if (debug) {
//           console.debug('timeLine', '——添加标记', 'key = ', key, 'msg = ', msg);
//         }
//       } else {
//         //-错误信息记录
//         error.push({
//           'cutOff': len,
//           'key': key
//         });
//         console.error('timeLine', '——添加标记', '标记' + key + '已存在，本次标记无效');
//       }
//
//       if (auto) {
//         //--自动执行数据分析
//         if (timmer) {
//           //--清除计时器
//           window.clearTimeout(timmer);
//         }
//
//         timmer = window.setTimeout(function () {
//           //--重新开始计时分析
//           self.analyze();
//         }, timeout);
//       }
//     };
//
//     self.analyze = function () {
//       //--开始时间线分析
//       var errLen = error.length;
//
//       if (errLen) {
//         //--抛出错误信息
//         console.error('timeLine', '——分析:', '标记存在重复，无法分析');
//
//         for (var i = 0; i < len; i++) {
//           console.error('timeLine', '——标记重复:', '分割数：', error[i].cutOff, '键值：', error[i].key);
//         }
//
//         return;
//       }
//
//       var len = keys.length;
//
//       for (var i = 0; i < len; i++) {
//         //--循环输出分析数据
//         var prev = null,
//             curr = null,
//             cutOff = i + 1,
//             ks = keys[i],
//             klen = ks.length,
//             mrks = marks[cutOff];
//
//         for (var ii = 0; ii < klen; ii++) {
//           var key = ks[ii],
//               //--当前键值
//           mark = mrks[key]; //--当前标记信息
//
//           curr = {
//             //--当前标记
//             key: key,
//             msg: mark.msg,
//             time: mark.time
//           };
//           console.log('timeLine', '——标记信息：', '分割数：', cutOff, 'key：', key, 'msg：', mark.msg, 'time：', mark.time);
//
//           if (!prev) {
//             console.log('开始标记，无上一时间标记');
//           } else {
//             var diff = curr.time - prev.time;
//             timeInterval.push(diff);
//
//             if (!result[diff]) {
//               result[diff] = [];
//             }
//
//             result[diff].push({
//               cutOff: cutOff,
//               prev: prev,
//               curr: curr
//             });
//             console.log('执行时间：', diff);
//           }
//
//           prev = {
//             //--当前标记
//             key: key,
//             msg: mark.msg,
//             time: mark.time
//           };
//         }
//       }
//
//       var max = Math.max.apply(null, timeInterval),
//           min = Math.min.apply(null, timeInterval),
//           maxMsg = result[max],
//           minMsg = result[min];
//       console.log('最大运行时间：', max);
//       console.log(maxMsg);
//       console.log('最小运行时间：', min);
//       console.log(minMsg);
//       console.log('marks = ', marks);
//       console.log('keys = ', keys);
//       console.log('error = ', error);
//       console.log('result = ', result);
//       console.log('timeInterval = ', timeInterval);
//     };
//
//     self.end = function () {
//       //--忽视延时，直接输出分析数据，并清空数据信息
//       var auto = self.config.autoAnalyze,
//           timeout = debug = self.config.timeout,
//           debug = self.config.debug;
//
//       if (timmer) {
//         //--清除计时器
//         window.clearTimeout(timmer);
//         timmer = null;
//       }
//
//       self.analyze(); //--进行数据分析
//       //--清空数据
//
//       marks = {};
//       keys = [];
//       error = [];
//       result = {};
//       timeInterval = [];
//       timmer = null;
//     };
//   };
//
//   var History = function History(itou) {
//     var self = this;
//     self.parent = itou;
//
//     self.add = function (openPage) {
//       var history = itou.sessionData.getData('__sys_history') || {},
//           paths = history.paths || [],
//           url = Gray.$page.href || window.location.href;
//       history.paths = history.paths || paths;
//
//       if (openPage || !paths[0]) {
//         var p = [];
//         p.splice(0, 0, url);
//         paths.splice(0, 0, p);
//       } else {
//         if (url != paths[0][0]) {
//           paths[0].splice(0, 0, url);
//         }
//       }
//
//       itou.sessionData.setData('__sys_history', history, 60 * 24);
//     };
//
//     self.back = function () {
//       var history = itou.sessionData.getData('__sys_history') || {},
//           paths = history.paths || [];
//       history.paths = history.paths || paths;
//
//       try {
//         var r = paths[0][0];
//         paths[0].splice(0, 1);
//       } catch (error) {
//         var r = '/';
//       }
//
//       itou.sessionData.setData('__sys_history', history, 60 * 24);
//       return r;
//     };
//
//     self.close = function () {
//       var history = itou.sessionData.getData('__sys_history') || {},
//           paths = history.paths || [];
//       history.paths = history.paths || paths;
//
//       try {
//         var r = paths[1][0];
//         paths.splice(0, 1);
//       } catch (error) {
//         var r = '/';
//       }
//
//       itou.sessionData.setData('__sys_history', history, 60 * 24);
//       return r;
//     };
//   };
//
//   var Page = function Page(itou) {
//     var self = this;
//     self.parent = itou;
//
//     self.loadPage = function (url, openPage) {
//       itou.history.add(openPage);
//       Gray.$page.loadPage(url, openPage);
//     };
//
//     self.back = function (params) {
//       // var url = Gray.$page.getUrlParam("back") || itou.history.back();
//       // url = url? url: window.prevPage;
//       // alert(url);
//       params = params || {};
//       var def = {
//         step: 1 //--返回步数
//
//       },
//           url = Gray.$page.getUrlParam('back') || itou.history.back();
//       url = url.replace('undefined', '');
//       url = url ? url : window.prevPage;
//       params = $.extend({}, def, params);
//       url = url || '/';
//       var step = params.step;
//
//       for (var i = 2; i <= step; i++) {
//         url = itou.outil.getUrlParam(url, 'back');
//         url ? url = decodeURIComponent(url) : url = '/';
//       }
//
//       Gray.$page.loadPage(url);
//     };
//
//     self.close = function () {
//       var url = itou.history.close();
//       url = url ? unescape(url) : '/';
//       Gray.$page.loadPage(url);
//     };
//   };
//
//   var Cookie = function Cookie(itou) {
//     var self = this;
//     self.parent = itou;
//
//     self.set = function (params) {
//       var str = [];
//       str.push(params.name + '=' + params.value);
//       params.expires ? str.push('expires=' + params.expires) : ''; // params.path? str.push("path=" + params.path): "";
//
//       str.push('path=/');
//       params.domain ? str.push('domain=' + params.domain) : '';
//       params.secure ? str.push('secure=' + params.secure) : '';
//       document.cookie = str.join(';');
//     };
//
//     self.get = function (name) {
//       var strCookie = document.cookie,
//           arrCookie = strCookie.split('; '),
//           len = arrCookie.length;
//
//       for (var i = 0; i < len; i++) {
//         var arr = arrCookie[i].split('=');
//
//         if (arr[0] == name) {
//           return arr[1];
//         }
//       }
//
//       return '';
//     };
//
//     self.del = function (name) {
//       self.set({
//         name: name,
//         value: '',
//         expires: -1
//       });
//     };
//   };
//
//   var DataModel = function DataModel(itou) {
//     var self = this;
//     self.parent = itou;
//     self.debug = window.environment == 'development';
//     var $default = {// item: {//--每行赛事信息的数据对应关系； t: 选项说明; k: 选项在接口数据中的键值; d: 选项默认值
//       // 	no: {t: "编号", k: "serial_no", d: ""},
//       // 	saishi: {t: "赛事", k: "league_name", d: ""}
//       // }
//     };
//     /**
//      * 使用方式：
//      * 注意：选项数据格式 = {t: "描述信息", k: "键值", d: "默认值"}
//      * 关于默认值：	可以是object对象，但实例化后，所有实例化对象共享
//      * 				可以是function，,会被立即执行
//      * itou.dataModel.config({
//         key: "toto_Item",
//         opts: {
//             no: {t: "编号", k: "serial_no", d: ""},
//             saishi: {t: "赛事", k: "league_name", d: ""},
//             bgcolor: {t: "赛事背景色", k: "league_color[0]", d: ""},
//             fontcolor: {t: "赛事字体颜色", k: "league_color[1]", d: "#000"},
//             date: {t: "比赛时间", k: "match_time", d: ""},
//             id: {t: "标识", k: "match_id", d: ""},
//             hostName: {t: "主队名称", k: "host_name_s", d: ""},
//             guestName: {t: "客队名称", k: "guest_name_s", d: ""},
//             peilv3: {t: "胜赔率", k: "odds[3]", d: "0"},
//             peilv1: {t: "平赔率", k: "odds[1]", d: "0"},
//             peilv0: {t: "负赔率", k: "odds[0]", d: "0"},
//             selected: {t: "选中项", k: "", d: []},
//             dan: {t: "胆", k: "", d: false}
//         }
//     });
//      */
//
//     self.config = function (params) {
//       //--处理默认设定
//       var key = params.key,
//           opts = params.opts;
//       $default[key] = $.extend({}, $default[key], opts);
//     };
//
//     self.dataFactory = new function () {
//       //--数据信息创建工厂
//       var _self = this;
//
//       _self.create = function (key) {
//         //--创建并返回行数据原型
//         var arr = []; //--接口数据信息映射处理
//
//         if (!$default[key]) {
//           if (self.debug) {
//             console.debug('不存在类型为' + key + '的接口对应关系');
//           }
//
//           return new function () {}();
//         }
//
//         arr.push('var debug = ' + self.debug + ';');
//         arr.push('var _default = $default[\'' + key + '\'];');
//
//         for (var i in $default[key]) {
//           arr.push('try{');
//
//           if ($default[key][i].k) {
//             //--当设置中存在键值时，获取键值代表数据
//             arr.push('var val = apiData.' + $default[key][i].k + ';');
//             arr.push('switch (typeof val) {');
//             arr.push('case \'undefined\': throw \'\'; break;'); //--当值不存在时，进入获取默认值流程
//
//             arr.push('case \'function\': _self.' + i + ' = val(apiData, _self); break;'); //--当值的类型为function，立即执行获取返回值
//
//             arr.push('default: _self.' + i + ' = val; break;'); //--默认获得当前值
//
//             arr.push('}');
//           } else {
//             //--当设置中不存在键值时，抛出，进入获取默认值过程
//             arr.push('throw \'\'');
//           }
//
//           arr.push('}catch(error){');
//           arr.push('try{'); //--尝试获取默认值
//
//           arr.push('var val = _default[\'' + i + '\'].d;');
//           arr.push('switch (typeof val) {');
//           arr.push('case \'undefined\': _self.' + i + ' = null; break;');
//           arr.push('case \'function\': _self.' + i + ' = val(apiData, _self); break;');
//           arr.push('default: _self.' + i + ' = val; break;');
//           arr.push('}');
//           arr.push('}catch(error){');
//           arr.push(' _self.' + i + ' = null;');
//           arr.push('if(debug && error.message){');
//           arr.push('console.warn(error.message)');
//           arr.push('}');
//           arr.push('}');
//           arr.push('if(debug && error.message){');
//           arr.push('console.warn(error.message)');
//           arr.push('}');
//           arr.push('}');
//         }
//
//         var __Data = function __Data(apiData) {
//           //--数据原型
//           var _self = this;
//
//           var opts = new Function('_self', 'apiData', '$default', arr.join('\n'));
//           apiData = apiData || {};
//           opts(_self, apiData, $default);
//         };
//
//         __Data.prototype.reload = function (apiData) {
//           //--重新加载数据
//           var _self = this;
//
//           var opts = new Function('_self', 'apiData', '$default', arr.join('\n'));
//           apiData = apiData || {};
//           opts(_self, apiData, $default);
//           return _self;
//         };
//
//         __Data.prototype.getJson = function () {
//           //--返回纯JSON数据
//           var _self = this,
//               r = {};
//
//           for (var i in _self) {
//             if (typeof _self[i] != 'function') {
//               r[i] = _self[i];
//             }
//           }
//
//           return r;
//         };
//
//         return __Data;
//       };
//     }();
//   };
//
//   var ApiTimeout = function ApiTimeout(itou) {
//     //--接口超时处理
//     var self = this;
//     self.seconds = 15; //--超时时间
//
//     self.showErr = true; //--是否展示错误页面
//
//     self.errUrl = '/errors/'; //--错误页面Url地址
//
//     self.showLoading = false; //--是否展示正在加载的图标
//
//     var sLgKey = ''; //--showLoading计时器key
//
//     var maps = {}; //--接口开始数据映射
//
//     self.startApi = function (key) {
//       //--接口调用开始，参数为接口唯一标识
//       self.endApi(key);
//
//       if ((Gray.$page.href + '').has(self.errUrl)) {
//         //--网络错误展示页面不执行接口计时
//         return;
//       }
//
//       console.debug('apiTimeout.startApi', new Date().getTime());
//
//       if (!self.showLoading) {
//         window.clearTimeout(sLgKey);
//         self.showLoading = true;
//         sLgKey = setTimeout(function () {
//           if (self.showLoading) {///todo:展示加载中的图标
//           }
//         }, 700);
//       }
//
//       maps[key] = {};
//       maps[key].timeoutKey = setTimeout(function () {
//         self.timeoutErr(); //--15秒后展示超时错误页面
//       }, self.seconds * 1000);
//     };
//
//     self.endApi = function (key) {
//       //--接口调用结束，参数为接口唯一标识
//       if (maps[key] && maps[key].timeoutKey) {
//         window.clearTimeout(maps[key].timeoutKey);
//         delete maps[key];
//         console.debug('apiTimeout.endApi', new Date().getTime());
//
//         if (JSON.stringify(maps) == '{}') {
//           window.clearTimeout(sLgKey);
//           self.showLoading = false; ///todo:隐藏加载中的图标
//         }
//       }
//     };
//
//     self.timeoutErr = function () {
//       //--超时错误处理，转到超时错误展示页面
//       for (var i in maps) {
//         window.clearTimeout(maps[i].timeoutKey);
//       }
//
//       Gray.$page.loadPage(self.errUrl + '?back=' + window.backurl);
//     };
//   };
//
//   window.itou = new ITOU();
//
//   var shopUuid = __webpack_require__(72); //--使用uuid代替数字id
//
//
//   itou.shopUuid = new shopUuid(itou);
//
//   if (config.isAPP) {
//     //--单页模式监听跳转动作
//     itou.shopUuid.watcher.watch('pageLoad');
//   } else {
//     //--非单页模式监听地址栏参数
//     itou.shopUuid.watcher.watch('url');
//   }
//
//   itou.shopUuid.watcher.watch('shopDetails');
//   itou.shopUuid.watcher.watch('apiInput');
//   itou.shopUuid.watcher.watch('apiOutput');
//   itou.loader = 'on'; //--开启页面加载提示
//
//   var randomJerry = function randomJerry() {
//     var self = this;
//     self.path = ['/project/hm/', '/project/share/', '/project/gendan/', '/gofor/', '/user/shop/details/', '/user/shop/detail/' // '/project/detail/'
//     ]; // self.prefix = 'jerry_';
//
//     self.prefix = ['content_', 'mylist_', 'myinfo_', 'mydetail_', 'result_'];
//     self.suffix = '.html';
//   };
//
//   randomJerry.prototype.createName = function () {
//     //--根据前后缀创建文件名
//     var lib = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     lib = lib.split('');
//     var self = this,
//         len = lib.length,
//         prefix = self.prefix,
//         suffix = self.suffix,
//         min = 4,
//         max = 8,
//         rLen = min + Math.floor(Math.random() * (max - min + 1)),
//         r = [];
//     prefix = prefix[Math.floor(Math.random() * prefix.length)];
//     r.push(prefix);
//
//     for (var i = 0; i < rLen; i++) {
//       r.push(lib[Math.floor(Math.random() * len)]);
//     }
//
//     r.push(suffix);
//     var name = r.join('');
//     return name;
//   };
//
//   randomJerry.prototype.formatUrl = function (url, newName) {
//     //--对url进行处理，替换或追加随机html文件名
//     if ((url.has('http://') || url.has('https://')) && !url.has(window.location.host)) {
//       return url;
//     }
//
//     var self = this,
//         prefix = self.prefix,
//         suffix = self.suffix,
//         exp = new RegExp('(' + prefix.join('|') + ')[\\d\\w\\W]{4,8}\\' + suffix + '\\??');
//     console.log(url, exp.test(url));
//
//     if (newName) {
//       var name = self.createName();
//
//       if (exp.test(url)) {
//         url = url.split(exp);
//         url.splice(1, 1);
//         url = url.join(name);
//       } else {
//         var arr = url.split('?');
//         arr[0] += name;
//         url = arr.join('?');
//       }
//     }
//
//     var exp1 = /\/\d{1,4}\/|\//g,
//         arr1;
//     url = url.replace('://', ':ll');
//     var url1 = url.split('?');
//     url = url1[0];
//
//     if (exp1.test(url)) {
//       arr1 = url.split(exp1);
//     } else {
//       arr1 = url.split(/\//g);
//     }
//
//     console.log(arr1);
//
//     if (arr1.length >= 4) {
//       arr1.splice(2, 0, Math.floor(Math.random() * 1000));
//     }
//
//     console.log(arr1);
//
//     if (arr1.length >= 3) {
//       arr1.splice(1, 0, Math.floor(Math.random() * 1000));
//     }
//
//     console.log(arr1);
//     url = arr1.join('/');
//     url1[0] = url;
//     url = url1.join('?');
//     url = url.replace(':ll', '://');
//     return url;
//   };
//
//   randomJerry.prototype["do"] = function (url) {
//     // return url;
//     var self = this,
//         path = self.path,
//         len = path.length,
//         newName = false,
//         arr = url.split('?');
//     url = arr[0];
//
//     for (var i = 0; i < len; i++) {
//       if (url.has(path[i])) {
//         newName = true;
//         console.log(url);
//         break;
//       }
//     }
//
//     url = self.formatUrl(url, newName);
//     arr[0] = url;
//     url = arr.join('?');
//     return url;
//   };
//
//   window.itou.randomJerry = new randomJerry();
//
//   itou.outil.encodeShareUrl = function (shareUrl) {
//     //--对分享链接进行加密
//     var r = [];
//
//     for (var i = 0, len = shareUrl.length; i < len; i++) {
//       var code = shareUrl.charCodeAt(i);
//       var str = code.toString(16);
//       var num = Number(str);
//
//       if (!isNaN(num) && num >= 65 && num <= 90) {
//         str = String.fromCharCode(num);
//       }
//
//       r.push(str);
//     }
//
//     r = r.join('');
//     return r;
//   };
//
//   itou.outil.decodeShareUrl = function (str) {
//     //--对分享链接进行解码
//     var r = [],
//         exp = /[A-Z]/,
//         len = str.length,
//         i = 0;
//
//     while (i < len) {
//       var s = str.substr(i++, 1),
//           num; //document.write(s + '<br>');
//
//       if (exp.test(s)) {
//         num = s.charCodeAt(0);
//       } else {
//         num = s + str.substr(i++, 1);
//       }
//
//       num = parseInt('0x' + num, 16);
//       s = String.fromCharCode(num); //document.write(s + '<br>');
//
//       r.push(s);
//     }
//
//     return r.join('');
//   };
//
//   itou.outil.getGamesLiveUrl = function (gameId) {
//     var sportId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
//     return itou.get({
//       // notoken: true,
//       // rnd: false,
//       // fullUrl: jddBase.new + 'itou/games/live/animation/url',
//       url: 'itou/games/live/animation/url',
//       data: {
//         gameId: gameId,
//         sportId: sportId
//       },
//       jdd: true
//     });
//   }; //--获取奖多多websocket的token
//
//
//   itou.outil.getWsToken = function () {
//     return itou.get({
//       notoken: true,
//       rnd: false,
//       url: config.api_jdd_ws + 'ws/getToken',
//       fullUrl: true,
//       data: {
//         app: 'com.jdd.itou'
//       },
//       dataType: 'text',
//       formatResult: false
//     });
//   };
//
//   var gray_loadPage = Gray.$page.loadPage;
//
//   Gray.$page.loadPage = function (url, openPage) {
//     // console.log("Gray.loadPage");
//     //--合买页面被微信禁止，无法访问；但是在路径中加入index.html会绕过改禁用；因而，合买详情的路径将特殊处理，追加index.html
//     // if(url.has("/project/hm/") || url.has("/project/share/")){
//     // 	var arr = url.split('?');
//     // 	if(!arr[0].has('index.html')){
//     // 		arr[0] += 'index.html';
//     // 	}
//     // 	url = arr.join('?');
//     // }
//
//     /**
//      * 赛事直播页面，在口袋卡包非常慢，会卡死，原因不明，估计和壳有关；
//      * 所以，只能对口袋卡包进行特殊处理；
//      * 凡是在口袋卡包中，跳转到赛事直播页面的链接，都会被拦截，直接用window.open打开
//      */
//     // if (
//     //     config.isAPP
//     // 	&& typeof fwv_share != 'undefined'
//     // 	&& url.has('/livescore/jingcai/livevideo/')
//     // ) {
//     //     var mid = itou.outil.getUrlParam(url, 'matchid');
//     //     itou.outil.getGamesLiveUrl(mid)
//     //         .then(data => {
//     //             window.location = data + '&_r=' + Math.random();
//     //         })
//     //     return;
//     // }
//     if (!config.isAPP) {
//       url = itou.randomJerry["do"](url);
//     } else {
//       //--APP为单页模式，为单页模式追加百度PV跟踪
//       try {
//         //--PV跟踪区分安卓和IOS
//         _hmt.push(['_trackPageview', '/' + config.browser + '.17itou.com' + (Gray.$page.href || '')]);
//       } catch (error) {
//         console.log(error.message);
//       }
//     }
//
//     if ( // !(//--安卓手机浏览器由于有滑动前进后退功能，上一页会保留，所以不销毁vue对象
//     // 	/(Android)/i.test(UA)
//     // 	&& !(UA.has("MicroMessenger") || UA.has("AlipayClient") || config.browser == "android")
//     // )
//     // && window.vueObj && itou.outil.is(window.vueObj, "Array")
//     window.vueObj && itou.outil.is(window.vueObj, 'Array')) {
//       var len = window.vueObj.length;
//
//       for (var i = len - 1; i >= 0; i--) {
//         var vm = window.vueObj[i];
//
//         if ( //--安卓手机浏览器由于有滑动前进后退功能，上一页会保留，所以不销毁vue对象
//         !/(iPhone|iPad|iPod|iOS)/i.test(UA) && !(UA.has('MicroMessenger') || UA.has('AlipayClient') || config.browser == 'android')) {
//           try {
//             //--尝试执行自身的beforeDestroy事件
//             //--全局混合中已经写了一个beforeDestroy事件
//             //--因此自身的beforeDestroy事件下标是1
//             vm.$options.beforeDestroy[1].call(vm);
//           } catch (e) {}
//         } else {
//           //--销毁原Vue对象
//           if (vm.destroy) {
//             vm.destroy();
//           }
//         }
//
//         window.vueObj[i] = null;
//         window.vueObj.splice(i, 1);
//       } // console.log(window.vueObj);
//
//     }
//
//     gray_loadPage(url, openPage);
//
//     if (config.browser == 'android' || config.browser == 'ios' || config.browser == 'app') {
//       Gray.$entrust['page-load-prev-page']();
//       Gray.$entrust['single-link-click']();
//     }
//
//     if (/(iPhone|iPad|iPod|iOS)/i.test(UA)) {
//       /**
//        * ios软键盘导致页面无法操作的问题
//        * 尝试修复
//        */
//       (function () {
//         $('input').on('blur', function () {
//           var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop || 0;
//           window.scroll(0, scrollTop - 1); //让页面归位
//         });
//         $('textarea').on('blur', function () {
//           var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop || 0;
//           window.scroll(0, scrollTop - 1); //让页面归位
//         });
//       })();
//     }
//   };
//
//   function addYouliaoHistroy(url) {
//     var defStr = '{"value":{"history":[],"back":[]},"timeOut":-1}';
//     var key = '__youliao___sys_$history_list__';
//     var str = sessionStorage.getItem(key) || defStr;
//
//     if (str) {
//       var _obj$value;
//
//       var obj = JSON.parse(str);
//
//       if (obj !== null && obj !== void 0 && (_obj$value = obj.value) !== null && _obj$value !== void 0 && _obj$value.history) {
//         var _obj$value2;
//
//         obj === null || obj === void 0 ? void 0 : (_obj$value2 = obj.value) === null || _obj$value2 === void 0 ? void 0 : _obj$value2.history.push(url);
//       }
//
//       sessionStorage.setItem(key, JSON.stringify(obj));
//     }
//   }
//
//   Gray.entrust.define('page-load-prev-page', function () {
//     var prev = itou.sessionData.getData('__sys_window_prev_page').key || ''; //--获取上一页的名称
//
//     if (!$.isArray(prev)) {
//       prev = [prev];
//     } // var url = Gray.$page.href || window.location.href;//console.log(url, prev);
//
//
//     var url;
//
//     if (config.isAPP) {
//       url = Gray.$page.href || '/';
//     } else {
//       url = window.location.href;
//     }
//
//     if (url == prev[0]) {
//       window.prevPage = prev[1] || '';
//       window.prevs = prev || [];
//       window.isReload = true;
//     } else {
//       window.isReload = false;
//       window.prevPage = prev[0] || '';
//       window.prevs = prev || [];
//       prev.splice(0, 0, url);
//
//       try {
//         addYouliaoHistroy(url); //--向C端重构添加历史数据
//       } catch (error) {
//         console.log(error);
//       }
//     }
//
//     if (prev.length > 50) {
//       prev.length = 50;
//     }
//
//     itou.sessionData.setData('__sys_window_prev_page', {
//       key: prev
//     });
//   });
//   Gray.entrust.define('page-load-auth-check', function () {
//     var prev = window.prevs,
//         isToBindShop = false;
//
//     for (var i = 0, len = prev.length; i < len; i++) {
//       if (!prev[i].has('/user/login/')) {
//         isToBindShop = prev[i].has('/user/shop/details/') || prev[i].has('/user/shop/bind_succ/');
//         break;
//       }
//     }
//
//     window.isToBindShop = isToBindShop;
//     var url = Gray.$page.href || window.location.href;
//
//     if (!url.has('/pay/scan/')) {
//       //--扫码入口页例外，其他页进行授权判断
//       itou.auth.checkWxauth(isToBindShop);
//     }
//   });
//   /**
//    * 页面加载场景检测，用于支持自动绑定店铺和匿名提交
//    * 场景：扫码 = scan，分享 = share， 店铺采种 = station_lottery， 公众号 = wx
//    */
//
//   Gray.entrust.define('page-load-scene-check', function () {
//     //--页面加载场景检测
//     var scene = Gray.$page.getUrlParam('scene'),
//         //--入口场景
//     station_id = Gray.$page.getUrlParam('station_id'),
//         //--店铺id
//     share_id = Gray.$page.getUrlParam('share_id'); //--分享人ID
//
//     if (!scene) {
//       return;
//     } else if (scene == 'wx') {
//       itou.entry.clear(); //--删除场景缓存
//     } else {
//       var entry_info = itou.entry.get(),
//           stationID = entry_info.station_id;
//
//       if (!station_id) {
//         return;
//       }
//       /**
//        * 2017-11-23 10:16:18
//        * 注释部分代码，取消场景优先级，所有场景和店铺ID统一都会被新的覆盖
//        */
//       // if(station_id == stationID){//--当分享店铺相同时
//       // 	if(entry_info.scene != "scan"){//--扫码场景拥有最高优先级，不被其他场景覆盖
//       // 		entry_info.scene = scene;
//       // 	}
//       // }else{//--分享店铺不同时，覆盖所有信息
//
//
//       entry_info.scene = scene;
//       entry_info.station_id = station_id; // }
//
//       entry_info.share_id = share_id;
//       itou.entry.set(entry_info);
//     }
//   });
//   /**
//    * 微信对象全局初始化和微信分享设置
//    */
//
//   Gray.entrust.define('page-load-wx-init', function () {
//     var url = window.location.href;
//
//     if (itou.outil.isSharePage()) {
//       return;
//     }
//
//     var result = null;
//
//     var getInfo = function getInfo() {
//       return itou.get({
//         //--获取分享人信息和绑定店铺信息
//         url: 'user/GetDefaultStation',
//         data: {},
//         formatResult: false,
//         autocache: true,
//         sessionCache: true
//       }).then(function (rlt) {
//         result = rlt;
//       });
//     };
//
//     Gray.plugin.require('init.js');
//
//     Gray.$plugin['init.js']().then(function () {
//       // console.debug(result);
//       // try {//--分享人处理
//       // 	var data = result.data,
//       // 		station_id = data.list[0],
//       // 		share_id = data.user_id;
//       // } catch (error) {
//       // 	var station_id = null,
//       // 		share_id = null;
//       // }
//       var entry_info = itou.localJson.getJson('__entry_info') || {},
//           station_id = entry_info.station_id,
//           share_id = null;
//       var self = {},
//           href = window.location.href;
//
//       if (href.has('scene=')) {
//         //--连接中是否存在场景参数
//         href = href.replace(/scene=[\d_]+/g, 'scene=share');
//       } else {
//         href += (href.has('?') ? '&' : '?') + 'scene=share';
//       }
//
//       if (station_id) {
//         href = href + (href.has('?') ? '&' : '?') + 'station_id=' + station_id;
//       }
//
//       if (share_id) {
//         href = href + (href.has('?') ? '&' : '?') + 'share_id=' + share_id;
//       } // href = itou.linkSafe.timeSafe.replaceParams(href);
//
//
//       self.data = {};
//       self.data.shareMess = {
//         title: '店铺欢迎您',
//         imgUrl: config.base_url + itou.baseSetting.shareimg,
//         desc: '打开微信就能用，身边的实体店随时随地为您服务。',
//         link: href
//       };
//       self.wx = wx;
//       return self;
//     }).then(function (self) {
//       // console.debug(self);
//       Gray.plugin.define('self', [], function () {
//         return self;
//       }); // console.debug(itou.setting.getData("__onMenuShareAppMessage"), itou.setting.getData("__onmenusharetimeline"));
//
//       var href = window.location.href;
//
//       if (!href.has('/user/shop/details') && !href.has('/project/details')) {
//         //--防止共共分享覆盖私有分享
//         // function wx_share_build(){
//         // 	Gray.plugin.require("onmenushareappmessage.js");//--微信分享给好友
//         // 	Gray.$plugin["onmenushareappmessage.js"]();
//         // 	Gray.plugin.require("onmenusharetimeline.js");//--微信分享给好友
//         // 	Gray.$plugin["onmenusharetimeline.js"]();
//         // }
//         // document.addEventListener('WeixinJSBridgeReady', wx_share_build, false);
//         // 	function check_weixin(wx_share_callback){
//         // 		if(typeof WeixinJSBridge == 'undefined' || (typeof WeixinJSBridge.invoke == 'undefined')){
//         // 			window.setTimeout(check_weixin(wx_share_callback), 200);
//         // 		}
//         // 		else{
//         // 			wx_share_callback();
//         // 		}
//         // 	}
//         // 	check_weixin(wx_share_build);
//         Gray.plugin.require('onmenushareappmessage.js'); //--微信分享给好友
//
//
//         Gray.$plugin['onmenushareappmessage.js']();
//
//         Gray.plugin.require('onmenusharetimeline.js'); //--微信分享给好友
//
//
//         Gray.$plugin['onmenusharetimeline.js']();
//       }
//     }); // Gray.$plugin["init.js"]()//--微信授权
//     // 	.then(function(){
//     // 		return itou.get({//--获取分享人信息和绑定店铺信息
//     // 			url: "user/GetDefaultStation",
//     // 			data: {},
//     // 			formatResult: false,
//     // 			autocache: true
//     // 		});
//     // 	})
//   });
//   /**
//    * 全局APP插件初始化和分享功能设置
//    */
//
//   Gray.entrust.define('page-load-app-init', function () {
//     console.log('当前操作：', 'page-load-app-init');
//
//     Gray.plugin.require('init.js');
//
//     Gray.plugin.require('exitapp.js');
//
//     Gray.plugin.require('backbutton.js');
//
//     Gray.plugin.require('checknetwork.js');
//
//     Gray.plugin.require('startprogress.js');
//
//     Gray.plugin.require('endprogress.js');
//
//     Gray.plugin.require('getdevicetoken.js');
//
//     Gray.$plugin['init.js']().then(function () {
//       try {
//         Gray.$plugin['backbutton.js']();
//         Gray.$plugin['checknetwork.js'](); // Gray.$plugin["startprogress.js"]();
//       } catch (error) {
//         console.error(error.message, error);
//       }
//     });
//     $(function (e) {
//       console.log('当前状态：', '页面加载完成。');
//
//       try {
//         itou.setting.setData('__app_document_ready', {
//           status: 'ready'
//         }); // Gray.$plugin["endprogress.js"]();
//       } catch (error) {
//         console.error(error.message, error);
//       }
//     });
//     itou.page.__back = itou.page.back;
//     var backbtnNum = 0,
//         //--短时间内主页返回按钮点击次数
//     key = '__index_backbtn_dbClick';
//
//     itou.page.back = function (params) {
//       //--封装APP独有逻辑
//       var url = Gray.$page.getUrlParam('back') || itou.history.back();
//       url = url ? url : window.prevPage;
//       url = url || '/';
//       var $href = Gray.$page.href;
//
//       if ((!$href || $href == '/') && url == '/') {
//         backbtnNum += 1;
//
//         if (backbtnNum < 2) {
//           vm.showToast('再次点击关闭应用');
//           itou.outil.timmer.clearTimmer(key); //--清除计时器
//           // itou.outil.timmer.newTimmer({
//           // 	key: key,
//           // 	timeout: 1000,
//           // 	fun: function(){
//           // 		backbtnNum = 0;
//           // 		itou.outil.timmer.clearTimmer(key);//--清除计时器
//           // 	}
//           // });
//         } else {
//           Gray.$plugin['init.js']().then(function () {
//             //--关闭APP
//             try {
//               Gray.$plugin['exitapp.js']();
//             } catch (error) {
//               console.error(error.message, error);
//             }
//           });
//         }
//
//         return;
//       }
//
//       itou.page.__back(params);
//     };
//
//     var dtManage = itou.setting.getData('device_token');
//     window.setTimeout(function () {
//       dtManage.update();
//     }, 500);
//     itou.__get = itou.get;
//
//     itou.get = function (params) {
//       //--封装APP独有接口逻辑
//       Gray.$plugin['init.js']().then(function () {
//         try {
//           Gray.$plugin['checknetwork.js']();
//         } catch (error) {
//           console.error(error.message, error);
//         }
//       });
//       var url = params.url;
//
//       if (url == 'user/info' || url == 'user/reglogin' || url == 'user/pwlogin' || url == 'user/partnerauth' || url == 'user/Unbind') {
//         return itou.__get(params).then(function (result) {
//           result = result || {};
//
//           if (!result.errcode || result.errcode === 0) {
//             //--接口正常
//             if (url == 'user/info' || url == 'user/reglogin' || url == 'user/pwlogin' || url == 'user/partnerauth') {
//               dtManage.update(url); //--更新设备token
//             } else if (url == 'user/Unbind') {
//               dtManage.del(); //--删除设备token
//             }
//           }
//
//           return result;
//         });
//       } else {
//         return itou.__get(params);
//       }
//     };
//
//     document.addEventListener('deviceready', function (res) {
//       //--解决cookies问题
//       // self.showDemo = true;
//       console.log('deviceready：', res);
//       console.log('deviceready：', res);
//
//       if (device && device.platform == 'iOS') {
//         var args = ['GET', 'www.jindianle.com'];
//         cordova.exec(null, null, 'WKWebViewSyncCookies', 'sync', args);
//       }
//     });
//   }); //--页面链接点击事件委托指令注册
//
//   Gray.entrust.define('single-link-click', function () {
//     $(function () {
//       var fun = function fun(e) {
//         //console.log("click")//--body点击事件绑定
//         try {
//           self.parent.history.log = 'on'; //--修改历史记录开关，使页面跳转正常记录历史状态
//         } catch (error) {}
//
//         var el = this; //--获取事件触发元素
//
//         var href = el.getAttribute('href');
//         console.log('single-link-click, htrf = ' + href);
//         var openPage = el.getAttribute('target') || '';
//         openPage = openPage.has('blank');
//         var canback = el.getAttribute('canback') || false;
//         var backStamp = el.getAttribute('data-back') || false;
//         var backurl = el.getAttribute('backurl') || ''; //--tel,msm(通话、短信)唤起处理
//
//         if (!!href && (href.replace(/ /g, '').indexOf('tel:') == 0 || href.replace(/ /g, '').indexOf('sms:') == 0)) {
//           if (typeof fwv_share != 'undefined') {
//             e.preventDefault();
//             fwv_urlLauncher.postMessage(href);
//           } else {
//             var a = document.createElement('a');
//             a.href = href;
//             a.click();
//           }
//         } else if (!!href && href.replace(/ /g, '').indexOf('javascript:') < 0) {
//           //--当触发元素为a，并且href属性不以“javascript:”开头时，委托点击事件，
//           if (backStamp == 'default') {
//             href += (href.has('?') ? '&' : '?') + 'back=' + window.backurl;
//           } else if (backurl) {
//             href += (href.has('?') ? '&' : '?') + 'back=' + backurl;
//           }
//
//           if (canback) {
//             itou.page.loadPage(href, openPage);
//           } else {
//             Gray.$page.loadPage(href, openPage);
//           }
//         } else if (!!href && href.replace(/ /g, '').indexOf('javascript:history.go(-1)') == 0) {
//           itou.page.back();
//         }
//
//         return false;
//       }; // $("a[href]").on("click", fun);
//       // $("html").on("click", "a[href]", fun);
//
//
//       Vue.directive('takeover', {
//         //--指令所在组件的 VNode 及其子 VNode 全部更新后调用。……
//         componentUpdated: function componentUpdated(el, binding, vnode) {
//           // $(el).on("click", fun);
//           $('a[href]').off('click', fun);
//           $('a[href]').on('click', fun);
//         }
//       }); // if(config.isAPP){
//       // 	$("a[href]").die("click");
//       // 	$("a[href]").live("click", fun);
//       // 	//$("a[href^='tel:']").die("click");//--呼叫唤起A标签例外处理
//       // 	//$("a[href^='sms:']").die("click");//--短信唤起A标签例外处理
//       // }
//
//       /**
//        * 链接接管会影响特殊a标签功能。
//        * 例如：唤起呼叫功能的A标签，由于功能接管，会导致地址栏变化，Vue实例销毁而使页面绑定事件失效
//        * 因此，对于特殊链接做例外处理
//        */
//       //$("a[href^='tel:']").off("click");//--呼叫唤起A标签例外处理
//       //$("a[href^='sms:']").off("click");//--短信唤起A标签例外处理
//     });
//   }); //--ios系统safari浏览器隐身模式判断
//
//   try {
//     localStorage.setItem('ios-localStory-check-msg', 'test');
//   } catch (e) {
//     alert('本地储存写入错误，若为safari浏览器请关闭隐身模式浏览。');
//   }
//
//   Gray.$entrust['page-load-prev-page']();
//   Gray.$entrust['single-link-click']();
//   Gray.$entrust['page-load-scene-check'](); //--页面加载场景检测
//
//   Gray.$entrust['page-load-auth-check']();
//
//   if (config.browser == 'wx') {
//     //--全局微信插件初始化和分享功能设置
//     Gray.$entrust['page-load-wx-init']();
//   }
//
//   if (config.browser == 'android' || config.browser == 'ios' || config.browser == 'app') {
//     //--全局APP插件初始化和分享功能设置
//     Gray.plugin.require('getpackagename.js'); //--当前包名
//
//
//     itou.setting.setData('device_token', {
//       //--设备token管理
//       key: '__device_token',
//       update: function update(url) {
//         //--设置设备token缓存
//         var key = itou.setting.getData('device_token').key,
//             device_token = itou.localData.getData(key).device_token,
//             //--缓存的设备token
//         packagename;
//         Gray.$plugin['init.js']().then(function () {
//           return Gray.$plugin['getpackagename.js']().then(function (_packagename) {
//             packagename = _packagename;
//           });
//         }).then(function () {
//           try {
//             return Gray.$plugin['getdevicetoken.js']() //--获取当前设备token
//             .then(function (_device_token) {
//               if (device_token != _device_token.token || url == 'user/reglogin' || url == 'user/pwlogin') {
//                 //--与缓存token进行对比，如果不一样，则调用接口更新设备token
//                 itou.get({
//                   url: 'app/updatedevicetoken',
//                   data: {
//                     device_token: device_token,
//                     device_token_new: _device_token.token,
//                     "package": packagename
//                   },
//                   formatResult: false
//                 }).then(function (rlt) {
//                   //--更新缓存设备token
//                   if (rlt.errcode == 0) {
//                     itou.localData.setData(key, {
//                       device_token: _device_token.token
//                     });
//                   }
//                 });
//               }
//             });
//           } catch (error) {
//             console.error(error.message, error);
//             return false;
//           }
//         });
//       },
//       del: function del() {
//         //--清除设备token缓存
//         var key = itou.setting.getData('device_token').key,
//             device_token = itou.localData.getData(key).device_token,
//             //--缓存的设备token
//         packagename;
//         Gray.$plugin['init.js']().then(function () {
//           return Gray.$plugin['getpackagename.js']().then(function (_packagename) {
//             packagename = _packagename;
//           });
//         }).then(function () {
//           try {
//             return Gray.$plugin['getdevicetoken.js']() //--获取当前设备token
//             .then(function (_device_token) {
//               // if(device_token != _device_token){//--与缓存token进行对比，如果不一样，则两个token全部删除，否则只删除一个
//               // }else{
//               // }
//               var _old = device_token,
//                   _new = _device_token.token;
//               itou.localData.setData(key, {
//                 device_token: ''
//               }); //--清空缓存设备token
//
//               itou.get({
//                 //--调用接口，删除设备token
//                 url: 'app/deletedevicetoken',
//                 data: {
//                   device_token: _old,
//                   device_token_new: _new,
//                   "package": packagename
//                 }
//               }).then(function () {});
//             });
//           } catch (error) {
//             console.error(error.message, error);
//             return false;
//           }
//         });
//       }
//     });
//     Gray.$entrust['page-load-app-init']();
//   }
//
//   console.log('window.prevPage:', window.prevPage); // console.log("window.prevs:",window.prevs);
//
//   var merchant = __webpack_require__(73);
//
//   merchant.init(config);
//   console.log(merchant);
//   window.merchant = merchant;
//
//   window.onpageshow = function (e) {
//     //--防止IOS返回按钮读取缓存，致使页面事件未加载问题
//     if (e.persisted) {
//       if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
//         console.log('iPhone|iPad|iPod|iOS');
//         window.location.reload();
//       } else if (/(Android)/i.test(navigator.userAgent)) {
//         console.log('Android');
//       } else {
//         console.log('PC');
//       }
//     }
//   }; //js错误抓取
//
//
//   window.onerror = function (errorMessage, scriptURI, lineNumber, columnNumber, errorObj) {
//     var stack = '';
//     var u_agent = '';
//     if (navigator) u_agent = navigator.userAgent;
//     if (errorObj && errorObj.stack) stack = errorObj.stack;
//
//     if (!stack) {
//       return;
//     }
//
//     var reg = new RegExp('WeixinJSBridge is not defined');
//     if (reg.test(errorMessage)) return;
//     var reg = new RegExp('WeixinJSBridge is not defined');
//     if (reg.test(errorMessage)) return;
//     var ajax_obj = {
//       env: window.environment,
//       platform: itou.platform,
//       u_agent: u_agent,
//       err: errorMessage,
//       url: window.location.href,
//       script: scriptURI,
//       line: lineNumber,
//       column: columnNumber,
//       detail: {
//         stack: stack
//       }
//     };
//
//     if (config.isAPP) {
//       ajax_obj.app_target = Gray.$page.href;
//       ajax_obj.app_ver = config.version;
//     }
//
//     var msg = window.JSON.stringify(ajax_obj);
//     $.ajax({
//       url: config.api_url + 'common/errorlog',
//       data: {
//         msg: msg
//       },
//       type: 'post',
//       success: function success(result) {}
//     });
//   }; //--Vue内部错误监听
//
//
//   Vue.config.errorHandler = function (err, vm, info) {
//     console.error(err);
//     var stack = '';
//     var u_agent = '';
//     if (navigator) u_agent = navigator.userAgent;
//     if (err && err.stack) stack = err.stack;
//
//     if (!stack) {
//       return;
//     }
//
//     var errorMessage = err.message;
//     var reg = new RegExp('WeixinJSBridge is not defined');
//     if (reg.test(errorMessage)) return;
//     var reg = new RegExp('WeixinJSBridge is not defined');
//     if (reg.test(errorMessage)) return;
//     var ajax_obj = {
//       env: window.environment,
//       platform: itou.platform,
//       u_agent: u_agent,
//       err: errorMessage,
//       url: window.location.href,
//       // script: scriptURI,
//       // line: lineNumber,
//       // column: columnNumber,
//       detail: {
//         stack: stack
//       },
//       type: 'Vue'
//     };
//
//     if (config.isAPP) {
//       ajax_obj.app_target = Gray.$page.href;
//       ajax_obj.app_ver = config.version;
//     }
//
//     var msg = window.JSON.stringify(ajax_obj);
//     $.ajax({
//       url: config.api_url + 'common/errorlog',
//       data: {
//         msg: msg
//       },
//       type: 'post',
//       success: function success(result) {}
//     });
//   };
//
//   if (/(iPhone|iPad|iPod|iOS)/i.test(UA)) {
//     /**
//      * ios软键盘导致页面无法操作的问题
//      * 尝试修复
//      */
//     $(function () {
//       $('input').on('blur', function () {
//         var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop || 0;
//         window.scroll(0, scrollTop - 1); //让页面归位
//       });
//       $('textarea').on('blur', function () {
//         var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop || 0;
//         window.scroll(0, scrollTop - 1); //让页面归位
//       });
//     });
//   }
//
//   window.fwv_onResume = function () {//--空的，装装样子；防止口袋密码调不到对应方法而报错
//   };
//
//   window.fwv_onPageFinished = window.fwv_onResume;
// })(window, Zepto);

/***/ }),
/* 53 */
/***/ (function(module, exports) {

/**
 * 多公众号参数基本设置
 * by zhaoyf	2018年5月16日
 */
module.exports = {
  koudai: {
    name: '口袋',
    prefix: 'koudai',
    //--前缀，例如 koudai_mobile, koudai_./app/
    appid: 'wxbbf2437537b420af',
    //--好店公众号appid
    payscan: true,
    //--是否支持扫码付，默认是
    codeimg: 'static/images/codeimg-bf5587ee07.png',
    //--公众号二维码图片地址
    shareimg: 'static/images/share/koudailogred-4494b289ce.jpg',
    //--分享默认图片
    loadingimg: 'static/images/koudailogo-b324c8e7cd.png',
    //--加载中默认图片
    appdownload: {
      downloadapp: true,
      //--是否展示店铺首页下载链接
      openapp: false //--是否展示其他页面顶部下载链接

    },
    //--是否允许下载APP
    simplify: false,
    //--精简模式
    currLimit: {
      //--页面限流功能
      isOpen: false,
      //--是否开启
      apiUrl: 'https://qms.17itou.com/hz_qms/api/v1/server/queue/verify/' //--是否限流接口地址
      // apiUrl: "http://192.168.200.239:9093/hz_qms/api/v1/server/queue/verify/"//--是否限流接口地址

    },
    mid: 0,
    //--合作方id
    noWX: true,
    //--禁用微信功能
    thirdParty: {
      //--需要第三方支持的功能;是否开放
      trendChart: true,
      //--走势图
      prizeHall: true //--开奖大厅

    }
  },
  haodian: {
    name: '好店',
    prefix: 'haodian',
    //--前缀，例如 koudai_mobile, koudai_./app/
    appid: 'wxbbf2437537b420af',
    //--公众号appid
    payscan: false,
    //--是否支持扫码付，默认是
    codeimg: 'static/images/codehaodian.png',
    //--公众号二维码图片地址
    shareimg: 'static/images/share/koudailogred-2271431a89.png',
    //--分享默认图片
    loadingimg: 'static/images/haodianlogo-cfad496420.png',
    //--加载中默认图片
    appdownload: {
      downloadapp: false,
      //--是否展示店铺首页下载链接
      openapp: false //--是否展示其他页面顶部下载链接

    },
    //--是否允许下载APP
    simplify: true,
    //--精简模式
    currLimit: {
      //--页面限流功能
      isOpen: false,
      //--是否开启
      apiUrl: 'https://qms.jindianle.com/hz_qms/api/v1/server/queue/verify/' //--是否限流接口地址

    },
    mid: 50396024,
    //--合作方id
    noWX: false,
    //--禁用微信功能
    thirdParty: {
      //--需要第三方支持的功能;是否开放
      trendChart: true,
      //--走势图
      prizeHall: false //--开奖大厅

    }
  },
  kd: {
    name: '口袋',
    prefix: 'koudai',
    //--前缀，例如 koudai_mobile, koudai_./app/
    appid: '',
    //--公众号appid
    payscan: false,
    //--是否支持扫码付，默认是
    codeimg: 'static/images/codeimg-bf5587ee07.png',
    //--公众号二维码图片地址
    shareimg: 'static/images/share/koudailogred-4494b289ce.jpg',
    //--分享默认图片
    loadingimg: 'static/images/koudailogo-b324c8e7cd.png',
    //--加载中默认图片
    appdownload: {
      downloadapp: true,
      //--是否展示店铺首页下载链接
      openapp: false //--是否展示其他页面顶部下载链接

    },
    //--是否允许下载APP
    simplify: false,
    //--精简模式
    currLimit: {
      //--页面限流功能
      isOpen: false,
      //--是否开启
      apiUrl: 'https://qms.jindianle.com/hz_qms/api/v1/server/queue/verify/' //--是否限流接口地址

    },
    mid: 0,
    //--合作方id
    noWX: true,
    //--禁用微信功能
    thirdParty: {
      //--需要第三方支持的功能;是否开放
      trendChart: true,
      //--走势图
      prizeHall: false //--开奖大厅

    }
  }
};

/***/ }),
/* 54 */
/***/ (function(module, exports) {

/**
 * 精简模式参数基本设置
 * by zhaoyf	2018-06-21
 */
module.exports = {
  hemai: false,
  //--投注页合买功能
  youhua: false,
  //--投注页将建优化
  baocun: false,
  //--投注页保存功能
  shopdetail: {
    //--方案详情页
    selectcount: false,
    //--各彩种数量
    isbind: false,
    //--是否已经绑定
    gendan: false,
    //--跟单数量信息
    hemai: false,
    //--合买数量信息
    huodong: false,
    //--活动数量信息
    paijiang: false,
    //--派奖信息
    gdBanner: false //--推荐跟单banner条

  },
  shoplist: {
    //--方案列表信息
    fuwu: false,
    //--服务范围
    money: false,
    //--金额
    renshu: false,
    //--30提案投注人数
    pingjia: false //--评价

  },
  confirm: {
    //--提交确认页
    detail: false //--方案简要信息，需要在缓存中读写彩种和金额信息

  },
  projectdetail: {
    //--方案详情信息
    huodong: false,
    //--活动
    bifen: false,
    //--比分直播
    isfollow: false,
    //--跟单店铺信息
    gdList: false //--推荐跟单list

  }
};

/***/ }),
/* 55 */
/***/ (function(module, exports) {

/**
 * 页面加载场景检测，用于支持自动绑定店铺和匿名提交
 * 场景：扫码 = scan，分享 = share， 店铺采种 = station_lottery， 公众号 = wx
 * by zhaoyf	2018年5月15日
 */
module.exports = function () {
  var entry = function entry() {
    var self = this;
    self.key = '__entry_info';
  };

  entry.prototype.get = function () {
    //--获取场景属性值
    var self = this;
    return itou.localJson.getJson('__entry_info') || {};
  };

  entry.prototype.set = function (params) {
    //--设置场景属性值
    var self = this;
    itou.localJson.setJson(self.key, params, -1);
  };

  entry.prototype.clear = function () {
    //--清理所有场景属性值
    var self = this;
    itou.localJson.delJson(self.key); //--删除场景缓存
  };

  return new entry();
}();

/***/ }),
/* 56 */
/***/ (function(module, exports) {

/**
 * 限流功能，当页面繁忙的时候，限制接口加载
 * by zhaoyf	2018-06-23
 * 依赖itou对象
 */
module.exports = function () {
  var currLimit = function currLimit() {
    //--限流模块
    var self = this;
    self.team = []; //--接口promise队列

    self.apiUrl = ''; //--限流接口地址

    self.isLoading = false; //--是否正在加载

    self.isLimit = false; //--限制是否开启

    self.timeout = 3000; //--接口超时处理

    self.key = '__model_currLimit_timmer'; //--计时器键值
  };

  currLimit.prototype.init = function () {
    //--模块初始化
    var self = this,
        bs = itou.baseSetting;

    var __nolimit = Gray.$page.getUrlParam('__nolimit'); //--参数控制是否禁用限流模式


    if (__nolimit == 1) {
      return;
    }

    self.apiUrl = bs.currLimit.isOpen ? bs.currLimit.apiUrl : '';

    if (self.apiUrl) {
      self.isLimit = true; //--开启限制

      itou.outil.timmer.clearTimmer(self.key);
      itou.outil.timmer.newTimmer({
        key: self.key,
        timeout: self.timeout,
        fun: function fun() {
          if (self.isLimit) {
            //--接口超时按照不限流处理
            self.deLimit();
          }
        }
      });
      var token = localStorage.getItem('__itou_random_token');

      if (!token) {
        token = itou.random(48);
        localStorage.setItem('__itou_random_token', token);
      }

      itou.get({
        url: self.apiUrl + token,
        fullUrl: true,
        formatResult: false,
        type: 'get',
        rnd: false,
        notoken: true,
        noQuery: true,
        data: {}
      }).then(function (rlt) {
        //--接口错误或者超时，按照不限流处理
        var data = rlt.d || rlt.data || {}; // data.s = 0;

        if (data.s == 0) {
          //--确定限流
          self.limit();
        } else {
          self.deLimit(); //--不限流，释放接口队列
        }
      });
    }
  };

  currLimit.prototype.limit = function () {
    //--页面被限流
    var self = this;
    self.isLimit = true; //--开启限制

    self.team = [];
    self.showErr();
  };

  currLimit.prototype.deLimit = function () {
    //--页面不需要限流
    var self = this,
        team = self.team;
    self.isLimit = false; //--限制关闭

    for (var i = 0, len = team.length; i < len; i++) {
      //--接口继续执行
      team[i].resolve(); //--接口放行
    }

    self.team = [];
  };

  currLimit.prototype.refresh = function () {
    //--页面刷新
    var self = this;
    Gray.$page.refresh();
  };

  currLimit.prototype.showErr = function () {
    //--展示限流信息
    var self = this;
    console.log('showErr');

    try {
      vm.$refs.currlimit.start();
    } catch (e) {
      console.error(e);
    }
  };

  return new currLimit();
}();

/***/ }),
/* 57 */
/***/ (function(module, exports) {

/**
 * 奖金评测，预计最大奖金计算
 * by	zhaoyf
 * 2018年12月26日 14点48分
 * 依赖文件：js\business\jingcai-compute.js => window.jianzhong.maps
 * 依赖文件：js\public\lottery.js => $.lottery.jingcai.$guoguan
 */
module.exports = function () {
  var Computer = function Computer() {
    var self = this;
    self.maxMoneyLimit = {
      //--单注最大奖金
      '1': 100000,
      //--单关单注最大奖金
      '2': 200000,
      //--二串一单注最大奖金
      '3': 200000,
      //--三串一单注最大奖金
      '4': 500000,
      //--四串一单注最大奖金
      '5': 500000,
      //--五串一单注最大奖金
      'd': 1000000 //--其他串法最大奖金

    };
  };
  /**
  * 计算的数据初始化，将计算所需的数据存入对象；
  * @param {object} params 计算所需的数据，包括每个赛事各玩法的选项、每个赛事所选选项的赔率、过关方式字符串、倍数
  * 数据形式：竞彩{
  * 	selected: {
  *		"3101": [["负", "平", "胜"], ["平*-1", "胜*-1"], ["1:0", "5:2", "0:0", "1:1", "0:2"], ["1球", "2球", "3球"], ["胜/平", "平/平", "负/平"]],
  *		"3102": [["负", "胜"], ["负*+1", "平*+1", "胜*+1"]],
  *		"3103": [["负", "平", "胜"], ["1:0", "0:0", "负其他"], ["0球"]],
  *		"3104": [["负", "平", "胜"]]
  *	},
  *	odds: {
  *		"3101": {"负": 3.6, "平": 3.5, "胜": 1.77, "平*-1": 3.55, "胜*-1": 3.4, …}
  *		"3102": {"负": 1.53, "胜": 5.15, "负*+1": 2.7, "平*+1": 3.35, "胜*+1": 2.17}
  *		"3103": {"负": 2.11, "平": 3.1, "胜": 3, "1:0": 7.5, "0:0": 8.5, …}
  *		"3104": {"负": 1.61, "平": 3.6, "胜": 4.35}
  *	},
  *	guoguan: "4_1,4_5,4_6,3_1,2_1",
  *	beishu: 1
  * }
  * 竞彩篮球数据特殊，选项并不是文本‘胜’，而是对应的号‘30’，因此需要多传递一个参数$maps，兼中关系映射
  */


  Computer.prototype.init = function (params) {
    var self = this;
    self.$guoguan = $.lottery.jingcai.$guoguan; //--过关与混合过关玩法映射

    self.$maps = params.$maps || window.jianzhong.maps; //--选项与可兼中的选项的映射关系
    //--各赛事选项，二维数组，同玩法存在同一子数组内

    self.selected = params.max_money_obj || params.selected;
    self.odds = params.odd_obj || params.odds; //--个赛事选项及对应赔率

    self.guoguan = params.pass_type || params.guoguan; //--过关字符串，形式x_y，中间用逗号隔开

    self.beishu = params.multiple || params.beishu; //--购买倍数
  };
  /**
  * 进行计算
  */


  Computer.prototype["do"] = function () {
    var self = this;
    var jianzhongs = {},
        //--各赛事可兼中选项的组合对象
    maxOdds = {}; //--各赛事兼中最大赔率的组合对象

    for (var i in self.selected) {
      //--遍历得出各赛事选项可兼中的组合
      jianzhongs[i] = self.getJianzhong(self.selected[i]);
      maxOdds[i] = self.getMaxOdds(i, jianzhongs[i]);
    } // console.log(maxOdds);


    self.maxOdds = maxOdds;
    self.select_formated = self.formatSelected(); //--处理选择数据
    // console.log(self.select_formated);

    self.guoguan_zuhe = self.formatSelectWithGuoguan(); //--根据过关，拆分成对应组合
    // console.log(self.guoguan_zuhe);

    var money = self.getMaxMoney(); //--计算最大预计奖金

    self.maxMoney = (money * self.beishu).toFixed(2); //--预计最大奖金
    // console.log(self.maxMoney);
  };
  /**
  * 计算该赛事选项的兼中情况
  * @param {array} opts 二维数组，该赛事选择的选项，同玩法从在同一个子数组中
  * 例如：[["负", "平", "胜"], ["负*+1", "平*+1", "胜*+1"], ["1:0", "0:1"]]
  * @returns {array} 二维数组，所有兼中情况的组合，每种兼中情况从入一个子数组
  */


  Computer.prototype.getJianzhong = function (select) {
    var self = this,
        r = [],
        //--返回值
    len = select.length,
        wanfa_zh = [],
        //--玩法组合，三维数组，存的数据是select参数分别取1~length的所有玩法组合
    opt_zh = []; //--二维数组，所有可能的选项组合

    for (var i = 1; i <= len; i++) {
      wanfa_zh = wanfa_zh.concat(select.combination(i)); //--玩法组合
    } // console.log("wanfa_zh = ", wanfa_zh);


    for (var i = 0, len = wanfa_zh.length; i < len; i++) {
      //--玩法组合拆分成选项组合，存入选项组合数组
      opt_zh = opt_zh.concat(wanfa_zh[i].getZuhes());
    } // console.log("opt_zh = ", opt_zh);


    for (var i = 0, len = opt_zh.length; i < len; i++) {
      var opts = opt_zh[i]; //--单个可能的选项
      //--检查该选项组合是否可以兼中，如果可以则存入兼中组合的返回自

      if (self.checkJianzhong(opts)) {
        r.push(opts);
      }
    } // console.log(r);


    return r;
  };
  /**
  * 判断该组合是否可以兼中
  * @param {array} zuhe 一维数组，被查询的选项组合
  * @returns {boolean} 布尔值，可以兼中返回true，否则返回false
  */


  Computer.prototype.checkJianzhong = function (zuhe) {
    zuhe = zuhe.slice(); //--数组复制，避免由于splice操作影响原数组

    var self = this,
        r = true,
        //--返回值
    len = zuhe.length,
        $maps = self.$maps; //--兼中关系映射

    if (len == 1) {
      return r; //--单个的直接返回true
    } else {
      while (len > 0) {
        var opt = zuhe[0],
            //--组合的第一个选项
        jianzhong = $maps[opt]; //--该选项可以兼中的选项数组

        zuhe.splice(0, 1); //--组合数组移除第一项

        var len = zuhe.length; //--重新获取数组长度

        for (var i = 0; i < len; i++) {
          if (jianzhong.indexOf(zuhe[i]) == -1) {
            //--选项不可兼中
            r = false; //--返回值设为false

            len = 0; //--中止外循环

            break; //--终止内循环
          }
        }
      }
    }

    return r;
  };
  /**
  * 获取最大的兼中赔率，返回赔率值和选项组合数组
  * @param {number} no 数字，赛事的编号
  * @param {array} jianzhong 二维数组，兼中的组合
  * @returns {object} json对象，内含最大兼中赔率和生成赔率的选项组合
  */


  Computer.prototype.getMaxOdds = function (no, jianzhongs) {
    var self = this,
        len = jianzhongs.length,
        max = 0,
        //--最大兼中赔率值
    maxArr = [],
        //--最大兼中的选项组合
    oddArr = [],
        //--最大兼中的赔率组合
    odds = self.odds[no]; //--各选项的赔率值

    for (var i = 0; i < len; i++) {
      var jz = jianzhongs[i],
          //--单个兼中组合
      jz_odd = 0; //--该兼中组合的赔率之和
      // console.log("return odds['" + jz.join("'] + odds['") + "']");

      jz_odd = new Function('odds', 'return odds[\'' + jz.join('\'] * 1 + odds[\'') + '\'] * 1')(odds); // console.log(jz_odd);

      if (jz_odd > max) {
        //--取得更大的兼中赔率值和兼中组合
        max = jz_odd;
        maxArr = jz.slice(0);
      }
    }

    for (var i = 0, len = maxArr.length; i < len; i++) {
      //--遍历最大兼中选项组合
      oddArr.push(odds[maxArr[i]]); //--将对应选项的赔率存入数组
    }

    return {
      odd: max,
      arr: maxArr,
      odds: oddArr
    };
  };
  /**
  * 格式化对象自身的selected数据，得出赛事数组和每个赛事的玩法数对象
  */


  Computer.prototype.formatSelected = function () {
    var self = this,
        selected = self.selected,
        nos = [],
        //--赛事编号数组
    num_obj = {}; //--赛事玩法数对象

    for (var i in selected) {
      nos.push(i);
      num_obj[i] = selected[i].length;
    }

    return {
      nos: nos,
      num_obj: num_obj
    };
  };
  /**
  * 根据过关方式，拆分组合
  * @returns {object} 该过关方式对应的组合
  * 数据形式：{
  * 	'4_1': {
  * 		'4_1': [{gg: [过关组合], zh: [玩法组合]}, …………]
  * 	},
  * 	'4_11': {
  * 		'2_1': [{gg: [过关组合], zh: [玩法组合]}, …………],
  * 		'3_1': [{gg: [过关组合], zh: [玩法组合]}, …………],
  * 		'4_1': [{gg: [过关组合], zh: [玩法组合]}, …………],
  * 	}
  * }
  */


  Computer.prototype.formatSelectWithGuoguan = function () {
    var self = this,
        select = self.select_formated,
        nos = select.nos,
        //--场次数组
    $guoguan = self.$guoguan,
        //--不同的过关方式，对应的拆分数量
    guoguan = self.guoguan,
        //--过关方式字符串
    r = {}; //--返回值

    guoguan = guoguan.split(','); //--过关方式处理成数组
    // console.log($guoguan, guoguan);

    for (var i = 0, len = guoguan.length; i < len; i++) {
      var gg = guoguan[i].split('_'),
          changci = gg[0],
          //--串法场次数
      c_num = gg[1],
          //--串法总数量
      chuanfa = $guoguan[changci][c_num]; //--过关方式的内部玩法数组

      var nos_cc_zuhe,
          //--根据串法场次数，拆分场次号组合
      o = {}; //--过关和玩法组合的对象

      if (c_num == 1) {
        nos_cc_zuhe = [nos];
      } else {
        nos_cc_zuhe = nos.combination(changci);
      }

      for (var m = 0, n = chuanfa.length; m < n; m++) {
        //--遍历玩法数组
        var cf = chuanfa[m],
            //--混关内部串法值
        hg_arr = []; //--对应串法场次和拆分组合对象的数组

        for (var x = 0, y = nos_cc_zuhe.length; x < y; x++) {
          //--遍历场次拆分数组
          var cc = nos_cc_zuhe[x]; //--将场次组合和其拆分组合存入数组

          hg_arr.push({
            gg: cc,
            zh: cc.combination(cf)
          });
        }

        o[cf + '_1'] = hg_arr;
      }

      r[guoguan[i]] = o;
    }

    return r;
  };
  /**
  * 根据场次和串法组合，计算该串法出现的次数
  * @param {object} params json对象，包含场次和串法
  * 数据形式：{gg: [场次], zh: [串法]}
  * @returns {number} 数字，该串法出现次数
  */


  Computer.prototype.getTimes = function (params) {
    var self = this,
        select = self.select_formated,
        num_obj = select.num_obj,
        //--赛事玩法数对象
    gg = params.gg,
        //--场次组合
    zh = params.zh,
        //--串法
    r = 1; //--出现次数
    //--文本处理，用来计算出现次数

    var gg_str = 'num_obj[\'' + gg.join('\'] * num_obj[\'') + '\']',
        zh_str = 'num_obj[\'' + zh.join('\'] * num_obj[\'') + '\']';

    try {
      //--计算出现次数
      r = new Function('num_obj', 'return (' + gg_str + ') / (' + zh_str + ')')(num_obj);
    } catch (error) {
      console.error(error.message);
    }

    return r;
  };
  /**
  * 计算某个串法的奖金
  * 只计算最大兼中的选项的组合的奖金
  * @param {array} cf 计算的场次串法
  * 依赖数据：odds，maxOdds
  * @returns {number} 该串法所有兼中选项组合的奖金之和
  */


  Computer.prototype.getCfMoney = function (cf) {
    var self = this,
        limit = self.maxMoneyLimit,
        //--单注最大奖金限制
    maxOdds = self.maxOdds,
        //--最大兼中赔率
    // maxOdds_arr = maxOdds.arr,//--最大赔率的各赛事选项的对应赔率
    opts = [],
        //--选项组合，二维数组
    opts_zh = [],
        //--选项拆分组合，二维数组
    r = 0;

    for (var i = 0, len = cf.length; i < len; i++) {
      //--遍历串法
      opts.push(maxOdds[cf[i]].odds); //--将选项对应赔率存入二维数组
    }

    opts_zh = opts.getZuhes();

    for (var i = 0, len = opts_zh.length; i < len; i++) {
      //--遍历选项拆分组合
      var opt_adds = opts_zh[i],
          //--选项赔率组合
      l = limit[opt_adds.length] || limit['d'],
          //--单注最大奖金
      m = 2; // console.log(opt_adds, l);

      try {
        m *= new Function('return ' + opt_adds.join('*'))(); //--计算单注奖金
      } catch (error) {
        console.error(error.message);
      }

      m = m > l ? l : m; //--判断单注奖金是否大于单注最大奖金

      r += m * 1;
    }

    return r;
  };
  /**
  * 计算最大预计奖金
  * 依赖数据：odds，maxOdds，select_formated，guoguan_zuhe
  */


  Computer.prototype.getMaxMoney = function () {
    var self = this,
        maxOdds = self.maxOdds,
        select = self.select_formated,
        guoguan_zuhe = self.guoguan_zuhe,
        r = 0;

    for (var guoguan in guoguan_zuhe) {
      //--循环遍历过关组合
      //--获得混合过关的数据（单一过关也可以看成只有一个过关方式的混关）
      var guoguan_hunhe = guoguan_zuhe[guoguan];

      for (var gg_key in guoguan_hunhe) {
        //--遍历混合过关数据
        var guoguan_danyi = guoguan_hunhe[gg_key],
            //--得出单一过关的数据
        len = guoguan_danyi.length; //--由于混关拆分组合，可能会存在多个组合进行拆分

        for (var i = 0; i < len; i++) {
          //--遍历场次组合
          var changci_zh = guoguan_danyi[i],
              gg = changci_zh.gg,
              //--过关的场次
          zh = changci_zh.zh; //--串法的组合
          // console.log(zh);

          for (var m = 0, n = zh.length; m < n; m++) {
            //--遍历串法组合
            var cf = zh[m]; //--串法

            var t = self.getTimes({
              gg: gg,
              zh: cf
            });
            var money = self.getCfMoney(cf); // console.log(cf, t, money);

            r += t * money;
          }
        }
      }
    }

    return r;
  };

  return new Computer();
}();

/***/ }),
/* 58 */
/***/ (function(module, exports) {

/**
 * CryptoJS 的 aes 加密
 * 用来对奖多多的接口请求数据进行加密
 * by	zhaoyf	2019年4月4日 09点42分
 * 依赖文件：js/plugin/crypto-js-60ab5dbd46.js 和 js/plugin/mode-cbc-37629ad789.js
 */
module.exports = function () {
  var enc = function enc(pm) {
    var AES = CryptoJS.AES,
        modeEBC = CryptoJS.mode.CBC,
        encUtf8 = CryptoJS.enc.Utf8,
        encBase64 = CryptoJS.enc.Base64,
        padPkcs7 = CryptoJS.pad.Pkcs7;
    var key = encUtf8.parse('d3YmI1BUOSE2S2YmalBVZUQ='),
        iv = encUtf8.parse('0000000000000000');
    var params = JSON.stringify(pm);
    console.log(params);
    var srcs = encUtf8.parse(params);
    var encrypted = AES.encrypt(srcs, key, {
      iv: iv,
      mode: modeEBC,
      padding: padPkcs7
    });
    var res = encodeURI(encBase64.stringify(encrypted.ciphertext)).replace(/\+/g, '%2B');
    return res;
  };
  /**
  * 请求参数加密拦截器
  * @method requestEnc
  * @param  {[type]}           config [description]
  * @return {[type]}                  [description]
  */


  var requestEnc = function requestEnc(config) {
    var params = {
      header: {},
      body: config.data.params
    };
    params.header = {
      uuid: itou.random(36),
      // 36位的uuid 187c6fc9405b4322872019948a66a5e3
      platformCode: 'h5mobile',
      appVersion: '4.0.2',
      platformVersion: '4.0.2',
      userID: '',
      userType: 1,
      cmdName: 'h5_itou',
      cmdId: 0,
      token: '',
      action: config.data.action
    }; // params.header = {"appVersion":"4.0.2","cmdId":0,"platformVersion":"4.0.2","action":200101,"cmdName":"h5_zz","userType":1,"uuid":"e158248dff3043e4821393df576f38e9","userID":"","platformCode":"h5mobile","token":""};

    config.data = 'request=' + enc(params);
    return config.data;
  };

  return requestEnc;
}();

/***/ }),
/* 59 */
/***/ (function(module, exports) {

/**
 * 检查是否认证
 * by zhaoyf 2019年5月5日10:52:13
 */
module.exports = function () {
  var checkSubscribe = function checkSubscribe(isLogined) {
    //--检查是否认证
    return itou.get({
      url: 'user/isFollow',
      data: {
        appid: itou.setting.getData('appid')
      }
    }).then(function (data) {
      var r = data.is_subscribe,
          defer = $.Deferred();

      if (r != -1 || isLogined) {
        var cache = itou.localJson.getJson('itou_is_subscribe');
        cache.key = r;
        cache.timestamp = new Date().Dateformat('yyyy-MM-DD HH:NN:SS');
        itou.localJson.setJson('itou_is_subscribe', cache);
        defer.resolve();

        try {
          var defer1 = $.Deferred();
          window.codePromise = defer1.promise();
          defer1.resolve();
        } catch (error) {
          console.error(error.message);
        }
      } else {
        defer.reject();
      }

      return defer.promise();
    }).then(function () {}, function () {
      var code = Gray.$page.getUrlParam('code') || '',
          defer = $.Deferred();

      if (!code) {
        var href = Gray.$page.href || window.location.href,
            cache = itou.localJson.getJson('itou_is_subscribe');
        var timestamp = cache.timestamp; //--获取认证请求时间戳

        if (!timestamp) {
          itou.auth.getCode('snsapi_userinfo', href);
        } else if (timestamp.toDate().DateDiff('s', new Date()) > 10) {
          itou.auth.getCode('snsapi_userinfo', href);
        }

        defer.reject();
      } else {
        defer.resolve();
      }

      return defer.promise();
    });
  };

  return checkSubscribe;
}();

/***/ }),
/* 60 */
/***/ (function(module, exports) {

/**
 * 获取用户当前所在位置、省份
 * by zhaoyf	2019年7月29日10:20:53
 */
module.exports = function () {
  var userLocation = function userLocation() {
    var self = this;
    self.province = '';
    self.provinceType = ''; //--ip或者gps

    self.wx = wx;
    Gray.plugin.define('self', [], function () {
      return self;
    });
    Gray.plugin.define('flag', [], function () {
      return 'latlng';
    });

    Gray.plugin.require('init.js');

    Gray.plugin.require('getlocation.js'); //--获取坐标


    self.getProvince = function () {
      var cacheData = itou.localJson.getJson('__user_location_Province');

      if (cacheData.province && cacheData.type) {
        self.province = cacheData.province;
        self.provinceType = cacheData.type;
        var defer = $.Deferred();
        defer.resolve(cacheData);
        return defer.promise();
      } else {
        return Gray.$plugin['init.js']().then(function () {
          return Gray.$plugin['getlocation.js']();
        }).then(function (data) {
          data = data || {};
          data.wgs84 = data.wgs84 || {};
          return itou.get({
            url: 'user/userprovince',
            data: {
              lat: data.wgs84.lat,
              lng: data.wgs84["long"]
            }
          });
        }).then(function (data) {
          self.province = data.province;
          self.provinceType = data.type;
          itou.localJson.setJson('__user_location_Province', data, 3600 * 12);
          return data;
        });
      }
    };
  };

  return new userLocation();
}();

/***/ }),
/* 61 */
/***/ (function(module, exports) {

/**
 * 检查用户与店铺书否同省
 * 会强制要求登录
 * by	zhaoyf	2019年8月23日10:09:14
 */
module.exports = function () {
  var checkProvince = function checkProvince(shopid) {
    var user_id;
    return itou.get({
      url: 'user/info',
      data: {},
      autocache: true
    }).then(function (data) {
      user_id = data.uid;
      return itou.userLocation.getProvince();
    }).then(function (data) {
      return itou.payScan.checkLimited({
        station_user_id: shopid,
        user_id: user_id,
        province: data.province
      });
    }).then(function (data) {
      var err = {};
      var defer = $.Deferred();

      if (data.pay_status) {
        //--允许提交
        err.code = 0;
        defer.resolve(err);
      } else {
        err.code = -1;
        err.msg = data.msg;
        err.title = data.title;
        defer.reject(err);
      }

      return defer.promise();
    });
  };

  return checkProvince;
}();

/***/ }),
/* 62 */
/***/ (function(module, exports) {

/**
 * 扫码付功能对象
 * 用于扫码付的流程处理、状态判断等
 * by zhaoyf	2019年8月1日14:14:47
 */
module.exports = function () {
  var PayScan = function PayScan() {
    var self = this;
    self.station_user_id = '';
  };

  PayScan.prototype.checkPay = function (params) {
    var self = this,
        defer = $.Deferred();
    params.prize = params.prize || 0; //--订单金额

    params.money = params.money || 0; //--店铺记账金额

    params.scene = params.scene || 'scan_store'; //--场景，scan_store = 预付码,scan_fixed_project = 方案码

    params.station_user_id = params.station_user_id || self.station_user_id || ''; //--店铺id

    if (!params.station_user_id) {
      defer.resolve({
        'err': 'noShop'
      }); //--返回错误信息，没有输入店铺id
    } else {
      itou.get({
        url: 'pay/CheckPay',
        data: params,
        formatResult: false,
        // autocache: true,
        type: 'POST'
      }).then(function (rlt) {
        if (rlt.errcode == 0) {
          if (params.money >= params.prize) {
            defer.resolve({
              'err': 'noErr'
            }); //--余额充足可以使用余额扣款
          } else {
            var msg = '当前店内账本不足，可在店内让店员为您加账，每次出票可省去收款找零时间，极大提高为您成功出票的概率。<br /><br />';
            defer.resolve({
              'err': 'noMoney',
              'msg': msg
            }); //--允许扫码付返回错误信息，余额不足
          }
        } else if (rlt.errcode == -11) {
          defer.resolve({
            'err': 'closePayScan',
            'msg': rlt.msg
          });
        } else if (['-7', '-12', '-22', '-32', '-42', '-2'].indexOf(rlt.errcode + '') > -1) {
          // '-7'://--已截止
          // '-12'://--已扣账本
          // '-22'://--已出票
          // '-32'://--无法出票
          // '-42'://--已接单
          // '-2'://--已撤单
          defer.resolve({
            'err': 'projectErr',
            'msg': rlt.msg,
            'errcode': rlt.errcode
          });
        } else {
          defer.resolve({
            'err': 'noPayScan',
            'msg': rlt.msg
          });
        }
      });
    }

    return defer.promise();
  };

  PayScan.prototype.checkPay1 = function (params) {
    //--检查是否允许扫码付，不带金额检查
    var self = this,
        defer = $.Deferred();
    params.scene = params.scene || 'scan_store'; //--场景，scan_store = 预付码

    params.station_user_id = params.station_user_id || self.station_user_id || ''; //--店铺id

    if (!params.station_user_id) {
      defer.resolve({
        'err': 'noShop'
      }); //--返回错误信息，没有输入店铺id
    } else {
      itou.get({
        url: 'pay/CheckPay',
        data: params,
        formatResult: false,
        // autocache: true,
        type: 'POST'
      }).then(function (rlt) {
        if (rlt.errcode == 0) {
          defer.resolve({
            'err': 'noErr'
          }); //--余额充足可以使用余额扣款
        } else if (rlt.errcode == -11) {
          defer.resolve({
            'err': 'closePayScan',
            'msg': rlt.msg
          });
        } else if (['-7', '-12', '-22', '-32', '-42', '-2', '-41'].indexOf(rlt.errcode + '') > -1) {
          // '-7'://--已截止
          // '-12'://--已扣账本
          // '-22'://--已出票
          // '-32'://--无法出票
          // '-42'://--已接单
          // '-2'://--已撤单
          defer.resolve({
            'err': 'projectErr',
            'msg': rlt.msg,
            'errcode': rlt.errcode
          });
        } else {
          defer.resolve({
            'err': 'noPayScan',
            'msg': rlt.msg
          });
        }
      });
    }

    return defer.promise();
  }; //--获取店铺余额


  PayScan.prototype.getMyRemain = function (station_user_id) {
    return itou.get({
      url: 'user/getMyRemain',
      data: {
        station_user_id: station_user_id
      }
    }).then(function (data) {
      return data.remain_score;
    });
  }; //--将合买发起、合买认购的数据缓存到服务器

  /**
  * 数据形式
  * @data(json):{
              station_user_id: self.station.id,//--店铺id
              project_id: self.project.id,//--方案id
              lottery_type: self.project.lottery_type,//--彩种
              object_type: 'launch_sharebuy',//--订单对象类型，普通方案:project,发起合买方案:launch_sharebuy,参与合买:join_sharebuy
              consign_time: new Date().Dateformat('yyyy-MM-DD HH:NN:SS'),//--发起时间 
              amount: (detail.p_share * detail.cur_share).toFixed(2),//--付款金额
              end_time: self.end_time,//--投注截止时间
              detail: detail//--用户缓存数据
  }
  @data.detail: 数据形式
  @data.object_type == 'launch_sharebuy'
  {
  project_id : '',//--方案ID
  t_share : '',//--合买拆分份数
  p_share : '',//--单价
  profit_per : '',//--盈利奖励，抽成百分比
  cur_share : '',//--认购份数
  all_assure : '1',//--是否全额保底,0||1
  cur_assure : '',//--保底数量
  content_hide : '0',//--选号是否公开，0||1
  shop_public : '',//--是否店内展示，0||1
  desc : '',//--合买留言
  station_id : '',//--店铺id
  t_prize : '',//--
  }
  @data.object_type == 'join_sharebuy'
  {
  uuid: '',
  project_id: '',//方案id
  s_s: '',//--认购数量
  is_notice: '0',//--发起人发单时是否通知我.0||1
  }
  */


  PayScan.prototype.saveTemp = function (data) {
    return itou.get({
      url: 'pay/AddPayWaitingProjectDetail',
      data: data
    });
  }; //--获取合买发起、合买认购的缓存数据

  /**
  * @data(json): {station_user_id: '', project_id: ''}
  */


  PayScan.prototype.getTemp = function (data) {
    return itou.get({
      url: 'pay/getPayWaitingProjectDetail',
      data: data
    });
  }; //--获取合买发起、合买认购的缓存数据

  /**
  * @data(json): {station_user_id: ''}
  */


  PayScan.prototype.getList = function (data) {
    return itou.get({
      url: 'pay/getPayWaitingProjectList',
      data: data
    });
  }; //--尝时使用余额付款

  /**
  * @data(json): {station_user_id: '', project_id: ''}
  */


  PayScan.prototype.tryToPay = function (data) {
    try {
      return tryToPay();
    } catch (e) {
      var defer = $.Deferred();
      defer.resolve({
        errcode: '-9527',
        msg: e.message
      });
      return defer.promise();
    }

    function tryToPay() {
      return itou.get({
        url: 'pay/payForProjectByRemain',
        data: data,
        formatResult: false
      });
    }
  }; //--获取店铺是否允许扫码付

  /**
  * @data(json): {station_user_id: '', user_id: '', province: ''}
  */


  PayScan.prototype.checkLimited = function (data) {
    return itou.get({
      url: 'pay/checkShopPayLimited',
      data: data
    });
  };

  return new PayScan();
}();

/***/ }),
/* 63 */
/***/ (function(module, exports) {

/**
 * 正在加载浮层
 * by	zhaoyf	2019年8月23日14:11:37
 */
module.exports = function () {
  var Loading = function Loading() {
    var self = this;
    self.id = 'loading';
    self.template = [//--模板
    '<div id="' + self.id + '" class="layerbox larer_processing" style="display:none">', '	<div class="loader flexcenter">', '		<img src="static/images/koudailogo-b324c8e7cd.png" alt="口袋好店" />', '		<p class="gray5">努力加载中...</p>', '	</div>', '</div>'];
    self.el = null;
  };

  Loading.prototype.init = function () {
    //--初始化，并获取遮罩元素
    var self = this;

    if ($('#' + self.id).length > 0) {
      self.el = $('#' + self.id);
    } else {
      self.el = $(self.template.join('')).appendTo('body');
    }

    return self.el;
  };

  Loading.prototype.start = function () {
    //--展示正在加载层
    var self = this;
    self.init().show();
    var key = 'itou_loading_timmer';
    itou.outil.timmer.newTimmer({
      //--超时后自动关闭
      key: key,
      timeout: 10 * 1000,
      fun: function fun() {
        itou.outil.timmer.clearTimmer(key);
        self.end();
      }
    });
  };

  Loading.prototype.end = function () {
    //--隐藏正在加载层
    var self = this;
    self.init().hide();
  };

  return new Loading();
}();

/***/ }),
/* 64 */
/***/ (function(module, exports) {

/**
 * 浮点数精确计算
 * by zhaoyf 2019年9月9日09:48:04
 */
module.exports = function () {
  return {
    /**
    * 把错误的数据转正
    * strip(0.09999999999999998)=0.1
    */
    strip: function strip(num, precision) {
      precision = precision || 12;
      num *= 1;
      return +parseFloat(num.toPrecision(precision));
    },

    /**
    * Return digits length of a number
    * @ param {*number} num Input number
    */
    digitLength: function digitLength(num) {
      // Get digit length of e
      var eSplit = num.toString().split(/[eE]/);
      var len = (eSplit[0].split('.')[1] || '').length - +(eSplit[1] || 0);
      return len > 0 ? len : 0;
    },

    /**
    * 精确加法
    */
    plus: function plus(num1, num2) {
      var baseNum = Math.pow(10, Math.max(this.digitLength(num1), this.digitLength(num2)));
      return (num1 * baseNum + num2 * baseNum) / baseNum;
    },

    /**
    * 精确减法
    */
    minus: function minus(num1, num2) {
      var baseNum = Math.pow(10, Math.max(this.digitLength(num1), this.digitLength(num2)));
      return (num1 * baseNum - num2 * baseNum) / baseNum;
    },

    /**
    * 精确乘法
    */
    times: function times(num1, num2) {
      var num1Changed = Number(num1.toString().replace('.', ''));
      var num2Changed = Number(num2.toString().replace('.', ''));
      var baseNum = this.digitLength(num1) + this.digitLength(num2);
      return num1Changed * num2Changed / Math.pow(10, baseNum);
    },

    /**
    * 精确除法
    */
    divide: function divide(num1, num2) {
      var num1Changed = Number(num1.toString().replace('.', ''));
      var num2Changed = Number(num2.toString().replace('.', ''));
      return this.times(num1Changed / num2Changed, Math.pow(10, this.digitLength(num2) - this.digitLength(num1)));
    },

    /**
    * 四舍五入
    */
    round: function round(num, ratio) {
      var base = Math.pow(10, ratio);
      return this.divide(Math.round(this.times(num, base)), base);
    }
  };
}();

/***/ }),
/* 65 */
/***/ (function(module, exports) {

/**
 * 链接安全机制——防止链接被外部盗用
 * by zhaoyf	2019年10月15日10:27:18
 */
module.exports = function () {
  var itou; //--参数更新模式：history 使用 history.replaceState，hash 使用 location.hash
  //--默认history；但是hashLink变量中的链接强制使用has模式

  var mode = 'history'; // var mode = 'hash';

  var hashLink = [//--时间戳函数强制使用hash模式的页面
  '/pay/scan/savedma/', '/pay/scan/projectma/', '/pay/pay_plugin/', '/user/shop/shopcode/'];
  var safeHost = [//--安全域名，用来检测document.referer是否安全
  '*.17itou.com', '*.jindian188.cn', '*.51yueqian.com', '*.aitou188.com', '*.59itou.com', '*.51aitou.com', '*.jindianle.com', '*.jindianfa.com'];
  var paramNames = [//--随机的参数名
  'abvertising', 'abvertising_id', 'ageucyId', 'fornal', 'ifornal', 'trackIufo', 'untraok', 'yeslf', 'ba_dits', 'ecouomics'];

  var Crypto = function Crypto() {
    //--时间戳加解密对象，随时间戳数字进行加密
    var self = this;
    self.nums = []; //--加密可用的数字

    self.confuseNum = []; //--混淆可用的数字

    self.init();
  };

  Crypto.prototype.init = function () {
    //--内部信息初始化
    var self = this,
        s = 'A'.charCodeAt(0) * 1,
        //--字母A对应的ASCII码
    e = 'Z'.charCodeAt(0) * 1,
        //--字母Z对应的ASCII码
    s1 = 0,
        e1 = 9;

    for (var i = s1; i <= e1; i++) {
      //--计算出加密用的数字
      var num = (i * 1 + 21) * 3 + 2;
      num = num == 92 ? 90 : num;
      self.nums.push(num);
    }

    for (var i = s; i <= e; i++) {
      //--计算出混淆用的数字
      if (self.nums.indexOf(i) == -1) {
        self.confuseNum.push(i);
      }
    }
  };

  Crypto.prototype.encode = function (timeStamp) {
    //--时间戳加密
    //--加密公式：(num + 21) * 3 + 2, 转为字母，字母转为小写
    //--解释：时间戳数字范围0~9；大写字母ASCII码范围：65~90；经过公式处理，数字范围65~89外加92；92单独处理为90
    timeStamp = timeStamp + '';
    var self = this,
        temp = [],
        len = timeStamp.length,
        num;

    for (var i = 0; i < len; i++) {
      num = timeStamp.charAt(i) * 1;
      num = (num + 21) * 3 + 2;
      num = num == 92 ? 90 : num;
      temp.push(String.fromCharCode(num));
    }

    temp = temp.join('');
    temp = temp.toLowerCase();
    temp = self.confuse(temp);
    return temp;
  };

  Crypto.prototype.decode = function (str) {
    //--时间戳解密
    var self = this,
        confuseNum = self.confuseNum;

    if (!self.check(str)) {
      return str;
    }

    var temp = self.replaceTab(str),
        len = temp.length,
        r = [];
    temp = temp.toUpperCase();

    for (var i = 0; i < len; i++) {
      var num = temp.charCodeAt(i);

      if (confuseNum.indexOf(num) == -1) {
        num = num == 90 ? 92 : num;
        num = (num - 2) / 3 - 21;
        r.push(num);
      }
    }

    return r.join('');
  };

  Crypto.prototype.confuse = function (temp) {
    //--加密串混淆，并增加密文标记
    var self = this;

    function confuseWord() {
      //--产生随机的混淆字母
      var confuseNum = self.confuseNum,
          len = confuseNum.length;
      var num = Math.floor(Math.random() * len); //--根据混淆数组长度取随机数

      num = confuseNum[num];
      var w = String.fromCharCode(num); //--ASCII码转换

      if (Math.random() < 0.6) {
        //--随机小写化
        w = w.toLowerCase();
      }

      return w;
    }

    var temp = temp.split(''),
        L = temp.length;

    for (var i = 0; i < L; i++) {
      var len = temp.length,
          r = Math.floor(Math.random() * len),
          w = confuseWord();
      temp.splice(r, 0, w);
    }

    var len = temp.length; //--密文标记：倒数第三位，I；倒数第六位，T；第六位，O；第三位，U

    temp.splice(len - 2, 0, 'I'); //--插入密文标记

    temp.splice(len - 4, 0, 'T');
    temp.splice(4, 0, 'O');
    temp.splice(2, 0, 'U');
    return temp.join('');
  };

  Crypto.prototype.check = function (str) {
    //--密文标记检查，检查是否符合
    var self = this;
    return self.getTab(str) == 'ITOU';
  };

  Crypto.prototype.getTab = function (str) {
    //--获得密文标记
    var temp = str.split(''),
        len = temp.length,
        r = [];
    r.push(temp[len - 3]);
    r.push(temp[len - 6]);
    r.push(temp[5]);
    r.push(temp[2]);
    return r.join('');
  };

  Crypto.prototype.replaceTab = function (str) {
    //--移除密文标记
    var temp = str.split(''),
        len = temp.length;
    temp.splice(len - 3, 1);
    temp.splice(len - 6, 1);
    temp.splice(5, 1);
    temp.splice(2, 1);
    return temp.join('');
  };

  var refererSafe = function refererSafe() {
    //--引用安全检测对象
    var self = this;
    self.safeHost = null; //--处理之后的安全域名

    self.init();
  };

  refererSafe.prototype.init = function () {
    //--数据初始化
    var self = this,
        r = [];

    for (var i = 0, len = safeHost.length; i < len; i++) {
      r[i] = safeHost[i].split('.');
    }

    self.safeHost = r;
  };

  refererSafe.prototype.check = function (url) {
    //--检查引用页是否安全
    var self = this,
        safeHost = self.safeHost,
        len = safeHost.length,
        r = false;
    url = url || document.referrer || '';

    if (!url) {
      return false;
    }

    var host = url.split(/[\?\#\/]|http:\/\/|https:\/\//)[1],
        //--获取url的host
    H = host.split('.'),
        L = H.length; //--整理host，将koudai.17itou.com整理成["koudai","17itou","com" ]
    //--将koudai.dev.test.17itou.com整理成["koudai.dev.test","17itou","com" ]

    host = [];
    host.unshift(H.splice(L - 1, 1).join(''));
    host.unshift(H.splice(L - 2, 1).join(''));
    host.unshift(H.join('.'));

    for (var i = 0; i < len; i++) {
      //--从安全域名中进行匹配
      var sHost = safeHost[i];

      if ((sHost[0] == '*' || sHost[0] == host[0] //--有通配符或者相同
      ) && sHost[1] == host[1] && sHost[2] == host[2]) {
        r = true; //--安全

        break;
      }
    }

    return r;
  }; // paramNames


  var timeSafe = function timeSafe(linkSafe) {
    //--时间安全检测对象
    var self = this; // self.params = {};//--符合条件的时间戳参数及其对应值

    self.crypto = linkSafe.crypto;
  };

  timeSafe.prototype.getHashParam = function (url, pName) {
    var hash = url.split('#').splice(1).join('#');
    hash = hash.split('&');
    var len = hash.length,
        r = '';

    for (var i = 0; i < len; i++) {
      var param = hash[i].split('=');

      if (pName == param[0]) {
        r = param[1];
        break;
      }
    }

    return r;
  };

  timeSafe.prototype.getParams = function (url) {
    //--获取时间戳参数名和值
    var self = this,
        len = paramNames.length,
        r = [];

    for (var i = 0; i < len; i++) {
      var pName = paramNames[i];
      var pValue;

      if (mode == 'history') {
        //--根据页面模式，获取地址栏参数值
        pValue = itou.outil.getUrlParam(url, pName);
      } else {
        pValue = self.getHashParam(url, pName);
      }

      if (pValue) {
        pValue = decodeURIComponent(pValue);
        r = [pName, pValue];
        break;
      }
    }

    return r;
  };

  timeSafe.prototype.addParams = function (url) {
    //--添加时间戳参数名和值
    var self = this,
        crypto = self.crypto,
        len = paramNames.length,
        d = new Date().getTime(),
        r = Math.floor(Math.random() * len);
    var param = paramNames[r] + '=' + encodeURIComponent(crypto.encode(d));

    if (mode == 'history') {
      if (url.indexOf('?') >= 0) {
        url = url.replace('?', '?' + param + '&');
      } else {
        url += '?' + param;
      }
    } else {
      console.table(url);

      if (url.indexOf('#') >= 0) {
        url = url.replace('#', '#' + param + '&');
      } else {
        url += '#' + param;
      }

      console.table(url);
    }

    return url;
  };

  timeSafe.prototype.replaceParams = function (url) {
    //--移除时间戳参数
    var self = this,
        len = paramNames.length,
        u = url;

    for (var i = 0; i < len; i++) {
      var pName = paramNames[i];
      var pValue;

      if (mode == 'history') {
        //--根据页面模式，获取地址栏参数值
        pValue = itou.outil.getUrlParam(url, pName);
      } else {
        pValue = self.getHashParam(url, pName);
      }

      if (pValue) {
        var mark = mode == 'history' ? '?' : '#';
        var arr = url.split(mark),
            host = arr.splice(0, 1)[0],
            params = arr.join(''),
            str = pName + '=' + pValue;
        params = params.split('&');

        if (params.indexOf(str) >= 0) {
          params.splice(params.indexOf(str), 1);
        }

        url = host;

        if (params.length > 0) {
          url += mark + params.join('&');
        }
      }
    }

    if (url == u) {
      return url;
    } else {
      return self.replaceParams(url); //--递归移除重复参数
    }
  };

  timeSafe.prototype.format = function (url) {
    //--格式化url地址
    var self = this,
        r = {},
        param = self.getParams(url);

    if (param.length != 2) {
      //--没有时间戳参数
      r.hasTime = false;
      return r;
    }

    r.key = param[0]; //--时间戳参数和值

    r.val = param[1]; //--时间戳参数和值

    r.hasTime = true; //--是否包含时间戳

    r.url = self.replaceParams(url); //--移除地址栏的时间戳参数

    return r;
  };

  timeSafe.prototype.check = function (url) {
    //--检查时间戳是否符合要求（有没有时间戳，或者是在5分钟之内）
    var self = this,
        data = self.format(url),
        crypto = self.crypto;

    if (!data.hasTime) {
      return true;
    }

    var timeStamp = crypto.decode(data.val);
    var time = new Date(timeStamp * 1),
        time1 = new Date();

    if (time.toString() == 'Invalid Date') {
      //--有时间戳，但是值不正确
      return false;
    }

    return (time1 - time) / 1000 <= 300; //--有时间戳，比较时间差是否小于300秒
  };

  var browserSafe = function browserSafe() {
    //--浏览器安全检测对象
    var self = this;
    self.UA = navigator.userAgent;
    self.curr = ''; //--当前浏览器类型：wx，wxwork，qq，dd，ali

    self.safe = {
      //--安全浏览器设置，true为安全
      wx: false,
      //--微信内置浏览器
      wxwork: false,
      //--企业微信内置浏览器
      qq: false,
      //--qq内置浏览器
      dd: true,
      //--钉钉内置浏览器
      ali: false //--支付宝内置浏览器

    };
    self.test = {
      //--个浏览器UA标识
      wx: 'MicroMessenger',
      //--微信内置浏览器
      wxwork: 'wxwork',
      //--企业微信内置浏览器
      qq: 'MQQBrowser',
      //--qq内置浏览器
      dd: 'DingTalk',
      //--钉钉内置浏览器
      ali: 'AlipayClient' //--支付宝内置浏览器

    };
  };

  browserSafe.prototype.check = function () {
    //--检查是否是安全浏览器
    var self = this,
        UA = self.UA,
        test = self.test;

    for (var i in test) {
      if (UA.has(test[i])) {
        self.curr = i;
        break;
      }
    }

    return !!self.safe[self.curr];
  };

  var defer = $.Deferred();

  var linkSafe = function linkSafe() {
    //--链接安全检测对象
    var self = this;
    self.promise = defer.promise();
    self.safeStamp = false; //--安全戳，存属于浏览器缓存，一旦认证为安全，则免于安全检测

    self.keys = {
      //--标识
      'safeStamp': '__linkSafe_safeStamp_key',
      //--安全戳缓存标记
      'closeIndex': '__linkSafe_closeIndex_key' //--关闭首页缓存标记

    };
    self.refererSafe = new refererSafe();
    self.crypto = new Crypto();
    self.timeSafe = new timeSafe(self);
    self.browserSafe = new browserSafe();
    self.url = '';
  };

  linkSafe.prototype.checkMode = function () {
    //--检查参数模式
    var href = window.location.href,
        len = hashLink.length;

    for (var i = 0; i < len; i++) {
      var link = hashLink[i];

      if (href.has(link)) {
        //--检查当前页面是否强制使用hash模式
        mode = 'hash';
        break;
      }
    }
  };

  linkSafe.prototype.checkSafeStamp = function () {
    //--检查安全戳
    var self = this,
        key = self.keys.safeStamp;
    return itou.localData.getData(key).key == 'true';
  };

  linkSafe.prototype.addSafeStamp = function () {
    //--添加安全戳
    var self = this,
        key = self.keys.safeStamp;
    return itou.localData.setData(key, {
      'key': 'true'
    });
  };

  linkSafe.prototype.checkCloseIndex = function () {
    //--检查是否关闭首页
    var self = this,
        key = self.keys.closeIndex;
    return itou.localJson.getJson(key).key == 'true';
  };

  linkSafe.prototype.addCloseIndex = function () {
    //--添加关闭首页标记
    var self = this,
        key = self.keys.closeIndex;
    return itou.localJson.setJson(key, {
      'key': 'true'
    }, 3600);
  };

  linkSafe.prototype.closeIndex = function () {
    //--添加关闭首页标记
    var self = this;

    if (self.checkCloseIndex()) {
      $(function () {
        document.write('该页面已经移除，无法访问!');
      });
    }
  };

  linkSafe.prototype.check = function (url) {
    //--检查地址是否安全
    url = url || window.location.href;
    var self = this,
        refererSafe = self.refererSafe,
        timeSafe = self.timeSafe,
        browserSafe = self.browserSafe;
    self.url = url;
    var timeState = timeSafe.format(url);

    if (!timeState.hasTime) {
      //--不含有时间戳参数，跳过验证
      return true;
    } else {
      //--含有时间戳参数，有安全戳或者是通过安全验证
      console.log(self.checkSafeStamp(), refererSafe.check(url), timeSafe.check(url), browserSafe.check()); // return self.checkSafeStamp() || (refererSafe.check(url) && timeSafe.check(url));

      return self.checkSafeStamp() || refererSafe.check() || timeSafe.check(url) || browserSafe.check();
    }
  };

  linkSafe.prototype.carry = function (isSafe) {
    //--触发安全机制
    var self = this,
        timeSafe = self.timeSafe; // console.log({isSafe: isSafe})

    var url = window.location.href,
        params = url.split('?')[1] || '';
    params = params.replace(/\s/g, '');

    if (params.length == 0 && self.checkCloseIndex()) {
      //--首页锁定时，同时锁定所有不带地址栏参数的链接
      self.closeIndex();
      return;
    }

    if (!isSafe) {
      //--地址不安全
      itou.localJson.delJson('/user/shop/details/'); //--删除店铺缓存ID

      self.addCloseIndex(); //--添加首页关闭标记

      $(function () {
        document.write('该页面已经移除，无法访问!');
      });
    } else {
      if (location.pathname == '/' && self.checkCloseIndex()) {
        //--检查页面是否是首页，并执行首页关闭
        self.closeIndex();
        return;
      }

      var url = self.url;
      url = timeSafe.replaceParams(url);
      url = timeSafe.addParams(url);

      if (mode == 'history') {
        history.replaceState('', '', url);
      } else {
        var hash = url.split('#').splice(1).join('#');
        location.hash = hash;
      }

      self.addSafeStamp(); //--添加安全戳
    }
  };

  linkSafe.prototype.start = function (obj) {
    //--开始连接安全检查
    var self = this;
    itou = obj;
    self.checkMode(); //--检查校正当前参数模式

    self.carry(self.check());
  };

  return new linkSafe();
}();

/***/ }),
/* 66 */
/***/ (function(module, exports) {

/**
 * 拦截接口请求，返回指定的数据
 * by zhaoyf    2020年12月10日14:17:34
 * version 1.0.0
 */
module.exports = function () {
  var Intercepter = function Intercepter() {
    var self = this; // self.status = 'off';//--开关

    self.redirectList = []; //--重定向事件列表

    self.falsifyList = []; //--数据伪造事件列表

    self.mergeList = []; //--数据合并事件列表
  };
  /**
   * 向拦截器中加入要拦截的请求
   * @param {Object} params 需要拦截的接口地址、重定向地址、伪造的接口数据
   * {
   *      url: '',//--接口地址
   *      redirect: '',//--重定向地址
   *      data: {} || [{}, {}, {}],//--返回的数据，非必填项；或者是数组；如果是数组，则随机返回其中之一
   *      mergeData: {}//--合并到接口的返回数据里
   * }
   */


  Intercepter.prototype.add = function (params) {
    //--仅在生产模式下使用
    if (window.environment != 'development') {
      return this;
    }

    this.redirect(params); //--生成重定向检测事件

    this.falsify(params); //--生成数据伪造事件

    this.falsifyMerge(params); //--生成数据合并事件

    return this;
  }; //--重定向接口地址
  //--修改ajaxData的url地址，改变接口指向；
  //--需要在接口请求发送前执行


  Intercepter.prototype.redirect = function (params) {
    //--仅在生产模式下可以使用
    if (window.environment != 'development') {
      return this;
    }

    var self = this;

    if (params.redirect) {
      //--追加重定向事件列表
      self.redirectList.push(function (ajaxData) {
        var data = ajaxData,
            url = '/' + params.url + '?';

        if (data.url.indexOf(url) > -1) {
          //--检查当前接口是否是参数设置的接口
          data.url = data.url.replace(url, '/' + params.redirect + '?'); //--url替换
        }
      });
    }
  }; //--伪造接口返回数据


  Intercepter.prototype.falsify = function (params) {
    //--仅在生产模式下可以使用
    if (window.environment != 'development') {
      return this;
    }

    var self = this;

    if (params.data) {
      //--参数中设置的需要伪造的接口数据
      self.falsifyList.push(function (xhr, ajaxData) {
        var data = ajaxData,
            url = params.redirect ? '/' + params.redirect + '?' : '/' + params.url + '?';

        if (data.url.indexOf(url) > -1) {
          //--检查当前接口是否是参数设置的接口
          //--responseText和response不是writeable的，但拦截时需要修改它，所以就做了数据代理
          //--在接口请求发送前，对xhr对象的responseText和response属性做好数据代理，提前预设好接口返回数据
          Object.defineProperty(xhr, 'responseText', {
            //--数据代理
            get: function get() {
              return xhr['_responseText'];
            },
            set: function set(val) {
              xhr['_responseText'] = val;
            },
            enumerable: true
          });
          Object.defineProperty(xhr, 'response', {
            //--数据代理
            get: function get() {
              return xhr['_response'];
            },
            set: function set(val) {
              xhr['_response'] = val;
            },
            enumerable: true
          }); //--注意responseText和response的内容都是纯文本

          xhr.responseText = JSON.stringify(self.random(params.data));
          xhr.response = xhr.responseText;
        }
      });
    }
  }; //--随机返回预设的结果


  Intercepter.prototype.random = function (data) {
    if (data instanceof Array) {
      var len = data.length;
      var n = Math.floor(Math.random() * len);
      return data[n];
    } else {
      return data;
    }
  }; //--向接口的返回数据中追加数据


  Intercepter.prototype.falsifyMerge = function (params) {
    //--仅在生产模式下可以使用
    if (window.environment != 'development') {
      return this;
    }

    var self = this;

    if (params.mergeData) {
      //--参数中设置需要追加数据
      self.mergeList.push(function (xhr, ajaxData) {
        var data = ajaxData,
            url = params.redirect ? '/' + params.redirect + '?' : '/' + params.url + '?';

        if (data.url.indexOf(url) > -1) {
          //--检查当前接口是否是参数设置的接口
          if (xhr.then) {
            //--如果xhr对象中包含then
            var then = xhr.then; //--用变量存储原来的then函数
            //--包装生成新的then函数

            xhr.then = function (fn1, fn2) {
              //--对第一个函数接受的数据进行处理
              var fn = function fn(data) {
                //--在调用前，合并数据
                console.log('then数据篡改、追加');
                return fn1(self.deepMerge(data, params.mergeData));
              };

              return then(fn, fn2); //--调用原来的then函数
            };
          }

          if (ajaxData.success) {
            //--如果ajax的参数中设置了success函数
            var success = ajaxData.success; //--用变量存储原success
            //--生成新的success函数，对原success函数进行包装，预先进行数据合并

            ajaxData.success = function (result) {
              console.log('success数据篡改、追加');
              return success(self.deepMerge(result, params.mergeData));
            };
          }
        }
      });
    }
  }; //--json深度合并
  //--将json2的数据合并到json1中；深度合并；
  //--如果json1和json2有相同的属性，则用json2的覆盖json1的


  Intercepter.prototype.deepMerge = function (json1, json2) {
    var self = this;

    for (var i in json2) {
      //--遍历json2的属性
      if (!json1[i]) {
        //--如果json1中没有同名属性，则直接给json1赋值
        json1[i] = json2[i];
      } else {
        var type = Object.prototype.toString.call(json2[i]).slice(8, -1);

        if (type == 'Object') {
          //--如果该属性值类型为json
          self.deepMerge(json1[i], json2[i]); //--递归，对该属性进行合并
        } else {
          //--否则直接用json2的值覆盖json1的值
          json1[i] = json2[i];
        }
      }
    }

    return json1;
  }; //--拦截器开始工作


  Intercepter.prototype.start = function () {
    //--仅在生产模式下可以使用
    if (window.environment != 'development') {
      return this;
    }

    console.log('拦截器开始工作');
    var self = this,
        redirectList = self.redirectList,
        //--重定向监听事件列表
    falsifyList = self.falsifyList,
        //--数据伪造监听事件列表
    mergeList = self.mergeList; //--数据合并监听事件列表
    //--开始数据监听与拦截

    $(document).on('ajaxBeforeSend', function (event, xhr, data) {
      //--循环执行事件监听
      redirectList.forEach(function (fun) {
        fun(data); //--检查函数url，执行重定向函数
      });
      falsifyList.forEach(function (fun) {
        fun(xhr, data); //--执行数据篡改函数
      });
      mergeList.forEach(function (fun) {
        fun(xhr, data);
      });
    });
    return self;
  };

  return new Intercepter();
}();

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__);
/**
 * 用户来源渠道数据
 * @description 用户来源渠道数据埋点管理对象
 * @author zhaoyf
 * @time 2023/04/03 11:16:23
 * @copyright 2023 itou
 */

/**
 * @class ChannelHm
 * @classdesc 渠道信息、动作信息埋点管理对象。
 */






var ChannelHm = /*#__PURE__*/function () {
  function ChannelHm() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, ChannelHm);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, "type", '');

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, "id", '');

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, "action", '');

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, "key", '_channel_info');
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(ChannelHm, [{
    key: "sniff",
    value: //--缓存键值

    /**
     * @function sniff
     * @description 渠道信息嗅探器，如果页面链接中有渠道信息，则获取并记录缓存；否则就从缓存读取并更新数据；当页面有店铺口令时，会被调用且传参
     * @param {String} id - 店铺口令中的店铺id
     * @param {String} type - 店铺口令中的渠道类型
     */
    function sniff() {
      var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      type || (type = Gray.$page.getUrlParam('reg_channel_type') || '');

      if (id && type) {
        var action = '';
        this.type = type;
        this.id = id;
        this.action = action;
        itou.localData.setData(this.key, {
          id: id,
          type: type,
          action: action
        });
      } else {
        var _type = Gray.$page.getUrlParam('reg_channel_type'),
            _itou$entry$get = itou.entry.get(),
            _id = _itou$entry$get.station_id; //--从缓存读取id


        if (_id && _type) {
          var _action = '';
          this.type = _type;
          this.id = _id;
          this.action = _action;
          itou.localData.setData(this.key, {
            id: _id,
            type: _type,
            action: _action
          });
        } else {
          var _itou$localData$getDa = itou.localData.getData(this.key),
              _itou$localData$getDa2 = _itou$localData$getDa.id,
              _id2 = _itou$localData$getDa2 === void 0 ? '' : _itou$localData$getDa2,
              _itou$localData$getDa3 = _itou$localData$getDa.type,
              _type2 = _itou$localData$getDa3 === void 0 ? '' : _itou$localData$getDa3,
              _itou$localData$getDa4 = _itou$localData$getDa.action,
              _action2 = _itou$localData$getDa4 === void 0 ? '' : _itou$localData$getDa4;

          this.type = _type2;
          this.id = _id2;
          this.action = _action2;
        }
      }
    }
    /**
     * @function set
     * @description 记录缓存信息
     * @param {String} key - 要记录的key值
     * @param {String} val - 要记录的值
     */

  }, {
    key: "set",
    value: function set(key, val) {
      itou.localData.setData(this.key, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()({}, key, val));
    }
    /**
     * @function del
     * @description 删除缓存信息
     * @param {String} key - 要删除的key值
     */

  }, {
    key: "del",
    value: function del(key) {
      itou.localData.setData(this.key, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()({}, key, ''));
    }
    /**
     * @function delAction
     * @description 删除动作信息
     */

  }, {
    key: "delAction",
    value: function delAction() {
      this.del('action');
    }
    /**
     * @function setAction
     * @description 设置动作埋点
     * @param {String} action - 动作类型
     */

  }, {
    key: "setAction",
    value: function setAction() {
      var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      this.set('action', action);
    }
    /**
     * @function setBuriedPoints
     * @description 添加动作埋点；
     * 动作埋点运行逻辑：
     * 1.在点击事件上添加一个动作埋点，埋点有效期5秒，防止动作长期有效会影响无动作的登录；
     * 2.在登录、注册页面加载时接收的动作埋点，即调用getBuriedPoints，会同时调用setAction方法设置action；如果超时，则设置为空，否则设置动作值；
     * 3.登录、注册页面离开时，重新添加该埋点动作，即调用setBuriedPoints方法，防止登录、注册页面切换 或者 返回后直接又跳转到登录页面时，action动作丢失。
     * @param {String} action - 动作类型
     */

  }, {
    key: "setBuriedPoints",
    value: function setBuriedPoints() {
      var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      itou.localJson.setJson(this.key, {
        action: action
      }, 5);
    }
    /**
     * @function getBuriedPoints
     * @description 获取埋点动作，并设置action
     */

  }, {
    key: "getBuriedPoints",
    value: function getBuriedPoints() {
      var _itou$localJson$getJs = itou.localJson.getJson(this.key),
          _itou$localJson$getJs2 = _itou$localJson$getJs.action,
          action = _itou$localJson$getJs2 === void 0 ? '' : _itou$localJson$getJs2;

      this.setAction(action);
      this.action = action;
    }
    /**
     * @function createCommand
     * @description 创建店铺口令
     * @param {String} name - 店铺名称
     * @param {String} uid - 店铺id
     * @param {String} uuid - 店铺uuid
     */

  }, {
    key: "createCommand",
    value: function createCommand() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var uid = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var uuid = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
      var type = this.type,
          id = this.id;
      var str = [uid, uuid, type].join('|');
      var shopName = name ? "[".concat(name, "]") : '';
      return "$\u5E97\u94FA\u53E3\u4EE4$\u957F\u6309\u590D\u5236\u672C\u6761\u6D88\u606F\uFF0C\u6253\u5F00\u53E3\u888B\u597D\u5E97App\u5373\u53EF\u8FDB\u5165".concat(shopName, "\uFF0C").concat(window.btoa(str));
    }
  }, {
    key: "explainCommand",
    value:
    /**
     * @function explainCommand
     * @description 解释店铺口令
     * @param {String} command - <param description>
     * @returns {Object} 包含店铺id信息和渠道信息的json对象
     */
    function explainCommand() {
      var command = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var b64ID = command.split('，').pop(),
          str = window.atob(b64ID);

      var _str$split = str.split('|'),
          _str$split2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_str$split, 3),
          station_user_id = _str$split2[0],
          station_uuid = _str$split2[1],
          channel_type = _str$split2[2];

      if (station_user_id && channel_type) {
        this.sniff(station_user_id, channel_type);
      }

      return {
        station_user_id: station_user_id,
        station_uuid: station_uuid,
        channel_type: channel_type
      };
    }
  }]);

  return ChannelHm;
}();

/* harmony default export */ __webpack_exports__["default"] = (new ChannelHm());

/***/ }),
/* 68 */
/***/ (function(module, exports) {

/**
 * 投注设置
 * by	zhaoyf	2018年12月6日 16点03分
 */
var r = {
  jingcai: {
    //--竞彩足球投注设置
    dantuo: false,
    //--是否允许胆拖投注
    guoguan: {
      //--过关方式设置
      max: 7,
      //--最大可选择的过关串数
      model: 'max-only' //--更多过关展示方式：max-only——保留最高过关串法；all——所有可选的过关串法

    },
    changci: {
      //--场次设置
      max: 8 //--最大可选场次数

    },
    zhushu: {
      //--注数计算设置
      model: '1' //--计算模式：0，胆拖→玩法→场次；1，胆拖→场次→玩法

    }
  },
  danchang: {
    //--北单投注设置
    guoguan: {
      //--过关方式设置
      max: 15,
      //--最大过关串
      model: 'all' //--更多过关展示方式：max-only——保留最高过关串法；all——所有可选的过关串法

    }
  }
};
r.jingcailanqiu = r.jingcai; //--竞彩足球投注设置

r.jingcailanqiu.guoguan.max = 7; //--最大可选择的过关串数

module.exports = r;

/***/ }),
/* 69 */
/***/ (function(module, exports) {

/**
 * 百度统计功能
 * by zhaoyf    2020年8月11日11:07:03
 * 包括：
 * 1.非APP端百度统计代码引入
 * 2.百度hm埋点事件，包含App和非APP环境
 * 3.百度pv埋点事件，包含App和非APP环境
 * 4.埋点缓存列表管理和清理
 * 原理：
 * 1.非APP，使用正常的百度埋点
 * 2.APP使用的是file协议，无法拿到referer，因此正常使用百度统计，无法获取到https://hm.baidu.com/hm.js的内容。所以，采用iframe的形式，间接触发百度统计功能；iframe指向/help/baiduhm/index.html#埋点内容；
 * 3.由于APP为单页模式，在内部页面切换时，可能导致iframe刚插入，还没触发埋点就被覆盖的情况，APP的hm埋点会写入缓存，并延时执行，执行完毕清理缓存；而且，页面加载后，会进行缓存检查，避免出现埋点没被触发的情况。
 * 
 * 功能优化：
 * 1.多页模式下，为了避免事件埋点点击后，页面切换造成埋点数据损耗；因此，微信下百度事件埋点，也采用 延时执行——下一页回收 的机制；埋点触发后，存缓存并延时执行；如果期间切换页面，则由下一页的回收机制触发
 */
module.exports = function () {
  window._hmt = window._hmt || []; // 非APP模式，直接插入百度埋点代码

  if (!config.isAPP) {
    (function () {
      var hm = document.createElement('script');
      hm.async = 'async';
      hm.src = 'https://hm.baidu.com/hm.js?cd47a2ca039c6161bdee85124fce41d1'; // hm.src = config.api_url + "bd/stat";

      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(hm, s);
    })();
  }

  var key = '__sys_baidu_hm_list'; //--百度hm埋点缓存列表键值

  function getList() {
    //--读取缓存列表
    return itou.sessionData.getData(key);
  }

  function setList(list) {
    //--记录缓存列表
    list = list || {};
    itou.sessionData.setData(key, list);
  }

  var eventHm = function eventHm(id, info) {
    //--执行百度统计事件埋点
    if (!config.isAPP) {
      //--非APP模式下，直接使用百度统计
      try {
        window._hmt.push(decodeURIComponent(info).split('|'));
      } catch (error) {
        console.table(error);
      }
    } else {
      //--APP下使用iframe间接触发百度埋点
      var ifr = document.createElement('iframe'); //--创建iframe元素

      ifr.id = id;
      ifr.style = 'display: none';
      document.body.appendChild(ifr); //--iframe元素加入到body

      ifr.src = config.base_url + 'help/baiduhm/index.html#' + info;
    }

    var list = getList(); //--读取缓存

    delete list[id]; //--清理缓存

    setList(list); //--保存缓存
  };

  var hmClear = function hmClear() {
    //--回收未执行的百度事件埋点
    if (!window._hmt) {
      return;
    }

    var list = getList(); //--读取缓存

    Object.keys(list).forEach(function (id) {
      (function () {
        eventHm(id, list[id]);
      })();
    });
  };

  var baiduHm = function baiduHm(page, btn) {
    //--百度统计
    if (!window._hmt) {
      return;
    }

    var platform;

    if (!config.isAPP) {
      //--当前平台判断
      platform = '微信';
    } else if (config.platform == 'ios') {
      platform = '苹果APP';
    } else {
      platform = '安卓APP';
    }

    var info = ['_trackEvent', platform, page, btn];
    var id = 'baidu_event_hm_' + Math.random();
    id = id.replace('.', '');
    info = encodeURIComponent(info.join('|'));
    var list = getList(); //--读取缓存

    list[id] = info; //--存入缓存

    setList(list); //--保存缓存

    itou.outil.timmer.newTimmer({
      //--延时执行百度事件埋点
      key: id,
      fun: function fun() {
        itou.outil.timmer.clearTimmer(id);
        var list = getList(); //--读取缓存

        if (list[id]) {
          //--防止被回收后，再次触发
          eventHm(id, info);
        }
      },
      timeout: 400
    });
  };

  var baiduPV = function baiduPV(url) {
    //--百度pv
    if (!window._hmt) {
      return;
    }

    url = url || '/' + config.browser + '_pv' + (Gray.$page.href || '/');
    var info = ['_trackPageview', url];

    if (!config.isAPP) {
      //--非APP模式下，直接使用百度PV
      try {
        //--PV跟踪区分安卓和IOS
        window._hmt.push(info);
      } catch (error) {
        console.log(error.message);
      }
    } else {
      //--app模式下，使用iframe中转，间接调用百度PV
      var id = 'baidu_pv_' + Math.random();
      id = id.replace('.', '');
      var ifr = document.createElement('iframe');
      ifr.style = 'display: none';
      ifr.id = id;
      document.body.appendChild(ifr);
      ifr.src = config.base_url + 'help/baiduhm/index.html#' + encodeURIComponent(info.join('|'));
    }
  };

  return {
    hmClear: hmClear,
    baiduHm: baiduHm,
    baiduPV: baiduPV
  };
}();

/***/ }),
/* 70 */
/***/ (function(module, exports) {

/**
 * 检查用户是否登录
 * by	zhaoyf	2019年1月22日 14点09分
 */
module.exports = function () {
  /**
  * 检查用户的登录状态
  * @param {boolean} noAct 是否不进行任何操作直接返回结果，默认false;
  */
  var checkLogin = function checkLogin(noAct) {
    noAct = noAct || false;
    return itou.get({
      url: 'user/isLogin',
      data: {},
      formatResult: !noAct,
      autocache: true
    }).then(function (result) {
      if (noAct) {
        //--直接返回结果
        var defer = $.Deferred();
        defer.resolve(result.data.is_login);
        return defer.promise();
      }

      var defer = $.Deferred(),
          entry_info = itou.localJson.getJson('__entry_info') || {},
          scene = entry_info.scene;

      if (scene != 'scan' && !result.is_login) {
        //--非扫码场景禁止匿名提交
        defer.reject(); // Gray.$page.loadPage("/user/login/?back=" + window.backurl);

        itou.auth.getCode('snsapi_userinfo', '/user/login/?back=' + window.backurl); // } else if (act == "save" && !result.is_login) {//--未登录禁止匿名保存
        // 	defer.reject();
        // 	// Gray.$page.loadPage("/user/login/?back=" + window.backurl);
        // 	itou.auth.getCode("snsapi_userinfo", "/user/login/?back=" + window.backurl);
      } else {
        if (config.strategy.saveProjectWithNologin) {
          //--策略允许匿名提交
          if (nologin) {
            //--允许匿名提交
            defer.resolve(true);
          } else {
            if (result.is_login) {
              //--是否等陆
              defer.resolve(true);
            } else {
              //--未登录需确认是否匿名提交
              defer.reject();
              itou.sessionData.setData('__saveProject_data', {
                data: data
              });
              Gray.$page.loadPage('/confirm/noaccount/?back=' + window.backurl);
            }
          }
        } else {
          //--策略禁止匿名提交
          if (result.is_login) {
            //--是否等陆
            defer.resolve(true);
          } else {
            //--未登录需确认是否匿名提交
            defer.reject(); // Gray.$page.loadPage("/user/login/?back=" + window.backurl);

            itou.auth.getCode('snsapi_userinfo', '/user/login/?back=' + window.backurl);
          }
        }
      }

      return defer.promise();
    });
  };

  return checkLogin;
}();

/***/ }),
/* 71 */
/***/ (function(module, exports) {

/**
 * 判断客户能否提交
 * by zhaoyf	2019年1月22日 14点16分
 * 需要登录状态，否则errcode == -1
 * 结果缓存3天
 */
module.exports = function () {
  var checkDeputeLimit = function checkDeputeLimit() {
    var key = '_itou_outil_checkDeputeLimit_rlt',
        isLimited = itou.localJson.getJson(key);

    if (isNaN(isLimited)) {
      //--如果没有缓存信息，则从接口读取
      return itou.get({
        url: 'shop/deputeLimit',
        data: {},
        formatResult: false
      }).then(function (rlt) {
        var data = rlt.data,
            errcode = rlt.errcode;

        if (errcode == 0) {
          isLimited = data.isLimited == 1;
          itou.localJson.setJson(key, data.isLimited); //--缓存结果数据
        } else {
          isLimited = false; //--返回人和错误信息都按照不能提交处理
        }

        return isLimited;
      });
    } else {
      //--如果有缓存，则通过缓存判断
      var defer = $.Deferred();
      defer.resolve(isLimited == 1);
      return defer.promise();
    }
  };

  return checkDeputeLimit;
}();

/***/ }),
/* 72 */
/***/ (function(module, exports) {

/**
 * 店铺由数字id过渡为24位的uuid
 * by zhaoyf    2020年5月6日14:02:22
 */
module.exports = function () {
  var itou;
  var _default = {
    //--默认配置
    page: {
      //--页面参数中shopid和station_uuid的参数key值
      id: 'id',
      //--数字id的参数key
      uuid: 'station_uuid' //--uuid的参数key

    },
    api: {
      //--接口返回数据中，shopid和station_uuid的参数key值
      id: 'station_uid',
      //--数字id的key
      uuid: 'station_uuid' //--uuid的key

    }
  };
  var _config = {
    //--页面、接口数据映射配置
    page: {
      //--需要接收station_uuid的页面
      '/user/shop/details/': _default.page,
      '/user/shop/detail/': _default.page,
      '/download/': _default.page
    },
    api: {
      //--接口处理
      input: {
        //--输入参数中，需要追加station_uuid的
        'shop': {
          //--需要追加的uuid的key
          id: 'station_user_id',
          //--数字id的key
          uuid: 'station_uuid' //--uuid的key

        },
        'shop/index': {
          id: 'station_user_id',
          //--数字id的key
          uuid: 'station_uuid' //--uuid的key

        },
        'shop/getContactInfo': {
          id: 'station_user_id',
          //--数字id的key
          uuid: 'station_uuid' //--uuid的key

        }
      },
      output: {
        //--输出接口中，需要对id和station_uuid做映射关系的；根据id和uuid的key的获取到对应的数据，并维护映射关系
        'shop': _default.api,
        'shop/index': _default.api,
        'project/recommenddetailV2': _default.api,
        'project/sharebuydetail': _default.api,
        'recommend/add': _default.api,
        'project/detail': _default.api,
        'project/shareDetail': _default.api,
        'project/detailV2': _default.api,
        'recommend/byshop': _default.api,
        'activity/over': _default.api,
        'activity/doing': _default.api,
        'activity/get': _default.api,
        'shop/getMyRecommStation': {
          //--接口返回数据中，shopid和station_uuid的参数key值
          id: 'station_user_id',
          //--数字id的key
          uuid: 'uuid' //--uuid的key

        }
      }
    }
  };
  var isapp = config.isAPP;

  var _Location = function _Location() {
    //--兼容单页模式和多页模式的location对象
    var self = this;
  };

  var _location = new _Location();

  Object.defineProperty(_location, 'pathname', {
    //--获取页面pathname
    get: function get() {
      var exp1 = /\/\d{1,4}\/|\//g;
      var pathname;

      if (!isapp) {
        //--非单页模式直接使用原生location获取pathname
        pathname = location.pathname;
        pathname = pathname.replace(exp1, '/'); //--去除jerry混淆的数字路径

        if (pathname.has('.html')) {
          //--去除jerry混淆的html文件名
          pathname = pathname.split('/');
          pathname.pop();
          pathname = pathname.join('/') + '/';
        }
      } else {
        //--单页模式直接获取当前路径
        var url = Gray.$page.href || '/'; //--获取当前路径

        pathname = url.split('?')[0]; //--去除路径参数
      }

      var n = 0; //--防止死循环

      while (pathname.indexOf('//') != -1 && n++ < 10) {
        //--移除连续的//
        pathname = pathname.replace(/\/\//g, '/');
      }

      return pathname;
    }
  });

  var Storage = function Storage() {
    //--缓存映射控制对象
    var self = this;
    self.key = '__sys_shopuuid_map';
  };

  Storage.prototype.set = function (id, station_uuid) {
    //--保存id与station_uuid的映射关系
    var self = this;
    var data = {};
    data[id] = station_uuid; //--建立映射关系

    itou && itou.localData.setData(self.key, data); //--保存映射关系
  };

  Storage.prototype.get = function (id) {
    //--获取id对应的station_uuid
    var self = this;
    var data = itou && itou.localData.getData(self.key);
    return data && data[id];
  };

  var storage = new Storage();

  if (window.itou && window.itou.publicObj) {
    window.itou.publicObj.uuid_storage = storage;
  }

  var Watcher = function Watcher() {
    //--页面、接口数据监控对象
    var self = this;
  };

  Watcher.prototype.watch = function (type) {
    //--执行监控
    var self = this;

    if (type == 'url') {
      //--监听几个主要页面的地址栏参数
      self.watchUrl();
    } else if (type == 'pageLoad') {
      //--监听几个主要页面内部跳转的参数
      self.watchPageLoad();
    } else if (type == 'apiInput') {
      //--监听接口输入数据的参数
      self.watchApiInput();
    } else if (type == 'apiOutput') {
      //--监听接口输出数据的参数
      self.watchApiOutput();
    } else if (type == 'shopDetails') {
      self.watchShopDetails(); //--监听向店铺详情跳转的链接，追加station_uuid参数
    }
  };

  Watcher.prototype.watchUrl = function () {
    //--监控地址栏参数；非单页模式直接监控；单页模式页面加载后监控
    var pathname = _location.pathname;
    var reg = /\/download\/\d{1,}\//; //--匹配特殊的download路径

    if (_config.page[pathname] || reg.test(pathname)) {
      //--页面在配置中 或者是下载页面
      var path_id;

      if (reg.test(pathname)) {
        var path = pathname.split('/');

        if (path.length >= 4) {
          path_id = path[path.length - 2];
        }

        pathname = '/download/';
      }

      var key_id = _config.page[pathname].id,
          //--获取对应key
      key_uuid = _config.page[pathname].uuid;
      var id = path_id || Gray.$page.getUrlParam(key_id),
          //--获取对应参数值
      uuid = Gray.$page.getUrlParam(key_uuid);

      if (id && uuid) {
        storage.set(id, uuid); //--维护映射关系
      }
    }
  };

  Watcher.prototype.watchPageLoad = function () {
    //--对页面跳转进行监控，获取对应参数并维护映射关系
    //--单页模式生效
    var self = this;
    var gray_loadPage = Gray.$page.loadPage;

    Gray.$page.loadPage = function (url, openPage) {
      //--扩展loadPage方法，追加页面监控事件
      gray_loadPage(url, openPage);
      self.watchUrl();
    };
  };

  Watcher.prototype.watchShopDetails = function () {
    //--监听向店铺详情跳转的链接，追加station_uuid参数
    var self = this;
    var gray_loadPage = Gray.$page.loadPage;

    Gray.$page.loadPage = function (url, openPage) {
      //--扩展loadPage方法，追加页面监控事件
      var exp1 = /\/\d{1,4}\/|\//g;
      var pathname, id, uuid, arr;
      arr = url.split('?');
      pathname = arr[0];
      pathname = pathname.replace(exp1, '/'); //--去除jerry混淆的数字路径

      if (pathname.has('.html')) {
        //--去除jerry混淆的html文件名
        pathname = pathname.split('/');
        pathname.pop();
        pathname = pathname.join('/') + '/';
      }

      if (pathname.has('/user/shop/details/')) {
        //--店铺详情跳转链接处理
        id = itou.outil.getUrlParam(url, 'id'); //--获取id

        if (!id) {
          id = itou.localJson.getJson('/user/shop/details/').id;
          url += (url.has('?') ? '&' : '?') + 'id=' + id;
        }

        uuid = itou.outil.getUrlParam(url, 'station_uuid'); //--获取uuid

        if (id && !uuid) {
          //--如果有id但无uuid，则追加uuid
          if (id == itou.localJson.getJson('/user/shop/details/').id) {
            uuid = itou.localJson.getJson('/user/shop/details/').uuid;
          }

          if (!uuid) {
            uuid = storage.get(id); //--从映射获取uuid
          }

          if (uuid) {
            //--如果映射中存在uuid，则在连接中追加uuid
            url += (url.has('?') ? '&' : '?') + 'station_uuid=' + uuid;
          }
        }
      }

      gray_loadPage(url, openPage);
    };
  };

  Watcher.prototype.watchApiInput = function () {
    //--对接口输入参数进行监控，设置中的接口，参数中追加station_uuid
    var self = this;

    if (itou) {
      var __get = itou.get; //--get方法保存

      itou.get = function (params) {
        //--扩展get方法，监听接口输入数据
        var url = params.url;

        if (_config.api.input[url]) {
          var key_id = _config.api.input[url].id,
              //--获取对应key
          key_uuid = _config.api.input[url].uuid;
          var id = params.data && params.data[key_id]; //--参数station_user_id的值

          if (!id) {
            console.warn('接口输入参数有误，缺少', key_id);
          } else {
            var uuid = storage.get(id); //--获取映射的station_uuid

            if (!uuid) {
              console.warn('未找到对应映射数据，', key_id, '的对应station_uuid不存在');
            } else {
              params.data && (params.data[key_uuid] = uuid); //--存入接口参数
            }
          }
        }

        return __get(params);
      };
    }
  };

  Watcher.prototype.watchApiOutput = function () {
    //--对接口输出参数进行监控，获得参数中的station_user_id 和 station_uuid，并维护映射
    var self = this;

    if (itou) {
      var __get = itou.get; //--get方法保存

      itou.get = function (params) {
        //--扩展get方法，监听接口输出数据
        return __get(params).then(function (result) {
          var data = result;

          if (params.formatResult == false) {
            data = result.data;
          }

          var url = params.url;

          if (_config.api.output[url]) {
            var key_id = _config.api.output[url].id,
                //--获取对应key
            key_uuid = _config.api.output[url].uuid;
            var id = data[key_id],
                //--参数station_user_id的值
            uuid = data[key_uuid];

            if (id && uuid) {
              storage.set(id, uuid); //--维护映射关系
            } else {
              console.warn(url, '返回数据中，不存在', key_id, '或者', key_uuid);
            }
          }

          return result;
        });
      };
    }
  };

  var ShopUuid = function ShopUuid(itou_obj) {
    if (!(this instanceof ShopUuid)) {
      return new ShopUuid(itou_obj);
    }

    itou = itou_obj;
    var self = this;
    self.watcher = new Watcher();
    self.storage = storage;
    var scene = Gray.$page.getUrlParam('scene'),
        //--入口场景
    id = Gray.$page.getUrlParam('station_id'),
        //--店铺id
    uuid = Gray.$page.getUrlParam('station_uuid'); //--店铺uuid

    if (scene && id && uuid) {
      storage.set(id, uuid); //--维护映射关系
    }
  };

  return ShopUuid;
}();

/***/ }),
/* 73 */
/***/ (function(module, exports) {

/**
 * 微信C端	营销系统
 * by zhaoyf	2018年5月2日
 */
module.exports = function () {
  var Merchant = function Merchant() {
    var self = this;
    self.parent = itou;
    self.config = null;
    self.isAPP = false;
    self.info = null;
    self.key = '__sys_merchant_id';
  };

  Merchant.prototype.init = function (config) {
    var self = this;
    self.config = config;
    self.isAPP = config.isAPP;
    self.getMid();
    self.check();
  };

  Merchant.prototype.getMid = function () {
    //--获取第三方信息
    var self = this;

    if (self.isAPP) {
      self.getAppMid();
    } else {
      self.getWebMid();
    }
  };

  Merchant.prototype.getAppMid = function () {
    var self = this; //--插件获取mid，并进行处理，保存
  };

  Merchant.prototype.getWebMid = function () {
    //--获取地址栏参数的第三方信息
    var self = this,
        itou = self.parent,
        mid = Gray.$page.getUrlParam('_mid'),
        mname = Gray.$page.getUrlParam('_mname'),
        grant_code = Gray.$page.getUrlParam('_grant_code'),
        r = {};

    if (mid && itou.outil.is(mid, 'Number')) {
      r.mid = mid;

      if (mname && grant_code) {
        r.mname = mname;
        r.grant_code = grant_code;
      }

      itou.localJson.setJson(self.key, r, -1);
    }
  };

  Merchant.prototype.check = function () {
    //--检查授权信息并返回结果
    var self = this,
        itou = self.parent,
        defaultMid = itou.setting.getData('defaultMid'),
        r = {},
        info = itou.localJson.getJson(self.key) || {};
    r.canAuth = !!info.mid && !!info.mname && !!info.grant_code;
    self.canPaidan = !!info.mid;

    if (!info.mid && !!defaultMid && defaultMid != '0') {
      info.mid = defaultMid;
    }

    r.data = info;
    self.info = r;
    return r;
  };

  Merchant.prototype.ubind = function () {
    //--解绑时仅保留mid
    var self = this,
        itou = self.parent,
        r = {},
        info = itou.localJson.getJson(self.key) || {},
        mid = info.mid;

    if (mid && itou.outil.is(mid, 'Number')) {
      r.mid = mid;
    }

    itou.localJson.delJson(self.key);
    itou.localJson.setJson(self.key, r, -1);
  };

  return new Merchant();
}();

/***/ })
/******/ ]);