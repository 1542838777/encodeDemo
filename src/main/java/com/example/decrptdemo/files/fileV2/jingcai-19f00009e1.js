/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		55: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([345,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 12:
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/images/yingdaoimg01-min-d10c91657d5426099dbe0c539bcc5e97.png";

/***/ }),

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/images/yingdaoimg02-min-389817759466a2282da75c3645cbe53f.png";

/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _utils = __webpack_require__(11);

var _style = __webpack_require__(55);

var _event = __webpack_require__(30);

var _raf = __webpack_require__(59);

var _number = __webpack_require__(60);

var _touch = __webpack_require__(53);

var _relation = __webpack_require__(31);

var _bindEvent = __webpack_require__(56); // Utils
// Mixins


var _createNamespace = (0, _utils.createNamespace)('swipe'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

var _default = createComponent({
  mixins: [_touch.TouchMixin, (0, _relation.ParentMixin)('vanSwipe'), (0, _bindEvent.BindEventMixin)(function (bind, isBind) {
    bind(window, 'resize', this.resize, true);
    bind(window, 'orientationchange', this.resize, true);
    bind(window, 'visibilitychange', this.onVisibilityChange);

    if (isBind) {
      this.initialize();
    } else {
      this.clear();
    }
  })],
  props: {
    width: [Number, String],
    height: [Number, String],
    autoplay: [Number, String],
    vertical: Boolean,
    lazyRender: Boolean,
    indicatorColor: String,
    loop: {
      type: Boolean,
      "default": true
    },
    duration: {
      type: [Number, String],
      "default": 500
    },
    touchable: {
      type: Boolean,
      "default": true
    },
    initialSwipe: {
      type: [Number, String],
      "default": 0
    },
    showIndicators: {
      type: Boolean,
      "default": true
    },
    stopPropagation: {
      type: Boolean,
      "default": true
    }
  },
  data: function data() {
    return {
      rect: null,
      offset: 0,
      active: 0,
      deltaX: 0,
      deltaY: 0,
      swiping: false,
      computedWidth: 0,
      computedHeight: 0
    };
  },
  watch: {
    children: function children() {
      this.initialize();
    },
    initialSwipe: function initialSwipe() {
      this.initialize();
    },
    autoplay: function autoplay(_autoplay) {
      if (_autoplay > 0) {
        this.autoPlay();
      } else {
        this.clear();
      }
    }
  },
  computed: {
    count: function count() {
      return this.children.length;
    },
    maxCount: function maxCount() {
      return Math.ceil(Math.abs(this.minOffset) / this.size);
    },
    delta: function delta() {
      return this.vertical ? this.deltaY : this.deltaX;
    },
    size: function size() {
      return this[this.vertical ? 'computedHeight' : 'computedWidth'];
    },
    trackSize: function trackSize() {
      return this.count * this.size;
    },
    activeIndicator: function activeIndicator() {
      return (this.active + this.count) % this.count;
    },
    isCorrectDirection: function isCorrectDirection() {
      var expect = this.vertical ? 'vertical' : 'horizontal';
      return this.direction === expect;
    },
    trackStyle: function trackStyle() {
      var style = {
        transitionDuration: (this.swiping ? 0 : this.duration) + "ms",
        transform: "translate" + (this.vertical ? 'Y' : 'X') + "(" + this.offset + "px)"
      };

      if (this.size) {
        var mainAxis = this.vertical ? 'height' : 'width';
        var crossAxis = this.vertical ? 'width' : 'height';
        style[mainAxis] = this.trackSize + "px";
        style[crossAxis] = this[crossAxis] ? this[crossAxis] + "px" : '';
      }

      return style;
    },
    indicatorStyle: function indicatorStyle() {
      return {
        backgroundColor: this.indicatorColor
      };
    },
    minOffset: function minOffset() {
      return (this.vertical ? this.rect.height : this.rect.width) - this.size * this.count;
    }
  },
  mounted: function mounted() {
    this.bindTouchEvent(this.$refs.track);
  },
  methods: {
    // initialize swipe position
    initialize: function initialize(active) {
      if (active === void 0) {
        active = +this.initialSwipe;
      }

      if (!this.$el || (0, _style.isHidden)(this.$el)) {
        return;
      }

      clearTimeout(this.timer);
      var rect = {
        width: this.$el.offsetWidth,
        height: this.$el.offsetHeight
      };
      this.rect = rect;
      this.swiping = true;
      this.active = active;
      this.computedWidth = +this.width || rect.width;
      this.computedHeight = +this.height || rect.height;
      this.offset = this.getTargetOffset(active);
      this.children.forEach(function (swipe) {
        swipe.offset = 0;
      });
      this.autoPlay();
    },
    // @exposed-api
    resize: function resize() {
      this.initialize(this.activeIndicator);
    },
    onVisibilityChange: function onVisibilityChange() {
      if (document.hidden) {
        this.clear();
      } else {
        this.autoPlay();
      }
    },
    onTouchStart: function onTouchStart(event) {
      if (!this.touchable) return;
      this.clear();
      this.touchStartTime = Date.now();
      this.touchStart(event);
      this.correctPosition();
    },
    onTouchMove: function onTouchMove(event) {
      if (!this.touchable || !this.swiping) return;
      this.touchMove(event);

      if (this.isCorrectDirection) {
        (0, _event.preventDefault)(event, this.stopPropagation);
        this.move({
          offset: this.delta
        });
      }
    },
    onTouchEnd: function onTouchEnd() {
      if (!this.touchable || !this.swiping) return;
      var size = this.size,
          delta = this.delta;
      var duration = Date.now() - this.touchStartTime;
      var speed = delta / duration;
      var shouldSwipe = Math.abs(speed) > 0.25 || Math.abs(delta) > size / 2;

      if (shouldSwipe && this.isCorrectDirection) {
        var offset = this.vertical ? this.offsetY : this.offsetX;
        var pace = 0;

        if (this.loop) {
          pace = offset > 0 ? delta > 0 ? -1 : 1 : 0;
        } else {
          pace = -Math[delta > 0 ? 'ceil' : 'floor'](delta / size);
        }

        this.move({
          pace: pace,
          emitChange: true
        });
      } else if (delta) {
        this.move({
          pace: 0
        });
      }

      this.swiping = false;
      this.autoPlay();
    },
    getTargetActive: function getTargetActive(pace) {
      var active = this.active,
          count = this.count,
          maxCount = this.maxCount;

      if (pace) {
        if (this.loop) {
          return (0, _number.range)(active + pace, -1, count);
        }

        return (0, _number.range)(active + pace, 0, maxCount);
      }

      return active;
    },
    getTargetOffset: function getTargetOffset(targetActive, offset) {
      if (offset === void 0) {
        offset = 0;
      }

      var currentPosition = targetActive * this.size;

      if (!this.loop) {
        currentPosition = Math.min(currentPosition, -this.minOffset);
      }

      var targetOffset = offset - currentPosition;

      if (!this.loop) {
        targetOffset = (0, _number.range)(targetOffset, this.minOffset, 0);
      }

      return targetOffset;
    },
    move: function move(_ref) {
      var _ref$pace = _ref.pace,
          pace = _ref$pace === void 0 ? 0 : _ref$pace,
          _ref$offset = _ref.offset,
          offset = _ref$offset === void 0 ? 0 : _ref$offset,
          emitChange = _ref.emitChange;
      var loop = this.loop,
          count = this.count,
          active = this.active,
          children = this.children,
          trackSize = this.trackSize,
          minOffset = this.minOffset;

      if (count <= 1) {
        return;
      }

      var targetActive = this.getTargetActive(pace);
      var targetOffset = this.getTargetOffset(targetActive, offset); // auto move first and last swipe in loop mode

      if (loop) {
        if (children[0] && targetOffset !== minOffset) {
          var outRightBound = targetOffset < minOffset;
          children[0].offset = outRightBound ? trackSize : 0;
        }

        if (children[count - 1] && targetOffset !== 0) {
          var outLeftBound = targetOffset > 0;
          children[count - 1].offset = outLeftBound ? -trackSize : 0;
        }
      }

      this.active = targetActive;
      this.offset = targetOffset;

      if (emitChange && targetActive !== active) {
        this.$emit('change', this.activeIndicator);
      }
    },
    // @exposed-api
    prev: function prev() {
      var _this = this;

      this.correctPosition();
      this.resetTouchStatus();
      (0, _raf.doubleRaf)(function () {
        _this.swiping = false;

        _this.move({
          pace: -1,
          emitChange: true
        });
      });
    },
    // @exposed-api
    next: function next() {
      var _this2 = this;

      this.correctPosition();
      this.resetTouchStatus();
      (0, _raf.doubleRaf)(function () {
        _this2.swiping = false;

        _this2.move({
          pace: 1,
          emitChange: true
        });
      });
    },
    // @exposed-api
    swipeTo: function swipeTo(index, options) {
      var _this3 = this;

      if (options === void 0) {
        options = {};
      }

      this.correctPosition();
      this.resetTouchStatus();
      (0, _raf.doubleRaf)(function () {
        var targetIndex;

        if (_this3.loop && index === _this3.count) {
          targetIndex = _this3.active === 0 ? 0 : index;
        } else {
          targetIndex = index % _this3.count;
        }

        if (options.immediate) {
          (0, _raf.doubleRaf)(function () {
            _this3.swiping = false;
          });
        } else {
          _this3.swiping = false;
        }

        _this3.move({
          pace: targetIndex - _this3.active,
          emitChange: true
        });
      });
    },
    correctPosition: function correctPosition() {
      this.swiping = true;

      if (this.active <= -1) {
        this.move({
          pace: this.count
        });
      }

      if (this.active >= this.count) {
        this.move({
          pace: -this.count
        });
      }
    },
    clear: function clear() {
      clearTimeout(this.timer);
    },
    autoPlay: function autoPlay() {
      var _this4 = this;

      var autoplay = this.autoplay;

      if (autoplay > 0 && this.count > 1) {
        this.clear();
        this.timer = setTimeout(function () {
          _this4.next();

          _this4.autoPlay();
        }, autoplay);
      }
    },
    genIndicator: function genIndicator() {
      var _this5 = this;

      var h = this.$createElement;
      var count = this.count,
          activeIndicator = this.activeIndicator;
      var slot = this.slots('indicator');

      if (slot) {
        return slot;
      }

      if (this.showIndicators && count > 1) {
        return h("div", {
          "class": bem('indicators', {
            vertical: this.vertical
          })
        }, [Array.apply(void 0, Array(count)).map(function (empty, index) {
          return h("i", {
            "class": bem('indicator', {
              active: index === activeIndicator
            }),
            "style": index === activeIndicator ? _this5.indicatorStyle : null
          });
        })]);
      }
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": bem()
    }, [h("div", {
      "ref": "track",
      "style": this.trackStyle,
      "class": bem('track', {
        vertical: this.vertical
      })
    }, [this.slots()]), this.genIndicator()]);
  }
});

exports["default"] = _default;

/***/ }),

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/images/yingdaoimg03_1-min-0ed264c0e03372d2ab4f1fc8a7f2b334.png";

/***/ }),

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/images/yingdaoimg03_2-min-6e5958821d4de56267971bfe6e3c31fb.png";

/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/images/yingdaoimg03_3-min-c426e56623361a25dd0c74b0438eb7db.png";

/***/ }),

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/images/yingdaoimg03_4-min-37cd7d92d52e44fc206bafaee1c51a2a.png";

/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/images/yingdaoimg04_1-min-1ffaf51e3b542b5b25588bfdb4d4f2c2.png";

/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/images/yingdaoimg04_2-min-be6161889d528fbc30b4cc6a500667b6.png";

/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/images/yingdaoimg05-min-091ad3e47f4b0bfd5075acd6cc77e4e9.png";

/***/ }),

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(14);

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(54));

var _utils = __webpack_require__(11);

var _relation = __webpack_require__(31);

var _createNamespace = (0, _utils.createNamespace)('swipe-item'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

var _default = createComponent({
  mixins: [(0, _relation.ChildrenMixin)('vanSwipe')],
  data: function data() {
    return {
      offset: 0,
      inited: false,
      mounted: false
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      _this.mounted = true;
    });
  },
  computed: {
    style: function style() {
      var style = {};
      var _this$parent = this.parent,
          size = _this$parent.size,
          vertical = _this$parent.vertical;

      if (size) {
        style[vertical ? 'height' : 'width'] = size + "px";
      }

      if (this.offset) {
        style.transform = "translate" + (vertical ? 'Y' : 'X') + "(" + this.offset + "px)";
      }

      return style;
    },
    shouldRender: function shouldRender() {
      var index = this.index,
          inited = this.inited,
          parent = this.parent,
          mounted = this.mounted;

      if (!parent.lazyRender || inited) {
        return true;
      } // wait for all item to mount, so we can get the exact count


      if (!mounted) {
        return false;
      }

      var active = parent.activeIndicator;
      var maxActive = parent.count - 1;
      var prevActive = active === 0 && parent.loop ? maxActive : active - 1;
      var nextActive = active === maxActive && parent.loop ? 0 : active + 1;
      var shouldRender = index === active || index === prevActive || index === nextActive;

      if (shouldRender) {
        this.inited = true;
      }

      return shouldRender;
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": bem(),
      "style": this.style,
      "on": (0, _extends2["default"])({}, this.$listeners)
    }, [this.shouldRender && this.slots()]);
  }
});

exports["default"] = _default;

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".van-swipe{position:relative;overflow:hidden;-webkit-transform:translateZ(0);transform:translateZ(0);cursor:grab;-webkit-user-select:none;user-select:none}.van-swipe__track{display:-webkit-box;display:-webkit-flex;display:flex;height:100%}.van-swipe__track--vertical{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.van-swipe__indicators{position:absolute;bottom:12px;left:50%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.van-swipe__indicators--vertical{top:50%;bottom:auto;left:12px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.van-swipe__indicators--vertical .van-swipe__indicator:not(:last-child){margin-bottom:6px}.van-swipe__indicator{width:6px;height:6px;background-color:#ebedf0;border-radius:100%;opacity:.3;-webkit-transition:opacity .2s,background-color .2s;transition:opacity .2s,background-color .2s}.van-swipe__indicator:not(:last-child){margin-right:6px}.van-swipe__indicator--active{background-color:#1989fa;opacity:1}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["a"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".van-swipe-item{position:relative;-webkit-flex-shrink:0;flex-shrink:0;width:100%;height:100%}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["a"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.ChildrenMixin = ChildrenMixin;
exports.ParentMixin = ParentMixin;

var _vnodes = __webpack_require__(61);

function ChildrenMixin(_parent, options) {
  var _inject, _computed;

  if (options === void 0) {
    options = {};
  }

  var indexKey = options.indexKey || 'index';
  return {
    inject: (_inject = {}, _inject[_parent] = {
      "default": null
    }, _inject),
    computed: (_computed = {
      parent: function parent() {
        if (this.disableBindRelation) {
          return null;
        }

        return this[_parent];
      }
    }, _computed[indexKey] = function () {
      this.bindRelation();

      if (this.parent) {
        return this.parent.children.indexOf(this);
      }

      return null;
    }, _computed),
    watch: {
      disableBindRelation: function disableBindRelation(val) {
        if (!val) {
          this.bindRelation();
        }
      }
    },
    mounted: function mounted() {
      this.bindRelation();
    },
    beforeDestroy: function beforeDestroy() {
      var _this = this;

      if (this.parent) {
        this.parent.children = this.parent.children.filter(function (item) {
          return item !== _this;
        });
      }
    },
    methods: {
      bindRelation: function bindRelation() {
        if (!this.parent || this.parent.children.indexOf(this) !== -1) {
          return;
        }

        var children = [].concat(this.parent.children, [this]);
        (0, _vnodes.sortChildren)(children, this.parent);
        this.parent.children = children;
      }
    }
  };
}

function ParentMixin(parent) {
  return {
    provide: function provide() {
      var _ref;

      return _ref = {}, _ref[parent] = this, _ref;
    },
    data: function data() {
      return {
        children: []
      };
    }
  };
}

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(10);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(8);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/thread-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/buness/jingcai/bet-guide/index.vue?vue&type=template&id=4f082f72&
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.isShow
    ? _c(
        "div",
        { staticClass: "layer_jcbet_guide" },
        [
          _c(
            "van-swipe",
            {
              ref: "guideSwipe",
              attrs: {
                autoplay: _vm.autoplay,
                loop: _vm.loop,
                "show-indicators": _vm.showIndicators,
                touchable: _vm.touchable,
              },
              on: { change: _vm.onChange },
            },
            [
              _c("van-swipe-item", [
                _c("div", { staticClass: "flexcenter layer_jcbet_guide_box" }, [
                  _c("div", { staticClass: "layer_jcbet_guide_con" }, [
                    _c("p", { staticClass: "icon_jcbetguide" }),
                    _vm._v(" "),
                    _c("h3", { staticClass: "jcbetguide_tit" }, [
                      _vm._v("新手课堂"),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "jcbetguide_txt" }, [
                      _vm._v(
                        "\n                        简单、返奖高，固定赔率，凭借诸多鲜明的特点让竞彩越来越受到大家的喜爱，下面花费一分钟的时间带您轻松玩转竞彩！\n                    "
                      ),
                    ]),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("van-swipe-item", [
                _c("div", { staticClass: "flexcenter layer_jcbet_guide_box" }, [
                  _c("div", { staticClass: "layer_jcbet_guide_con" }, [
                    _c("p", { staticClass: "icon_jcbetguide" }),
                    _vm._v(" "),
                    _c("h3", { staticClass: "jcbetguide_tit" }, [
                      _vm._v("足球竞猜结果"),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "jcbetguide_txt" }, [
                      _c("span", { staticClass: "fontredf3" }, [
                        _vm._v("竞猜结果为全场90分钟 (含伤停补时)的赛果"),
                      ]),
                      _vm._v(
                        "，不包含加时赛和点球大战。\n                    "
                      ),
                    ]),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("van-swipe-item", [
                _c("div", { staticClass: "flexcenter layer_jcbet_guide_box" }, [
                  _c("div", { staticClass: "layer_jcbet_guide_con" }, [
                    _c("p", { staticClass: "icon_jcbetguide" }),
                    _vm._v(" "),
                    _c("h3", { staticClass: "jcbetguide_tit" }, [
                      _vm._v("胜平负玩法"),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "jcbetguide_txt" }, [
                      _c("img", {
                        attrs: {
                          src: __webpack_require__(178),
                        },
                      }),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          "\n                            1、胜平负是指主队的最终比赛结果，即主队胜、主队平、主队负；\n                        "
                        ),
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          "\n                            2、奖金=投注金额*赔率，例如平赔率为"
                        ),
                        _c("b", [_vm._v("4.60")]),
                        _vm._v("，投注"),
                        _c("b", [_vm._v("100")]),
                        _vm._v("元，则奖金为"),
                        _c("b", [_vm._v("460")]),
                        _vm._v("元；\n                        "),
                      ]),
                    ]),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("van-swipe-item", [
                _c("div", { staticClass: "flexcenter layer_jcbet_guide_box" }, [
                  _c("div", { staticClass: "layer_jcbet_guide_con" }, [
                    _c("p", { staticClass: "icon_jcbetguide" }),
                    _vm._v(" "),
                    _c("h3", { staticClass: "jcbetguide_tit" }, [
                      _vm._v("让球胜平负玩法"),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "jcbetguide_txt" }, [
                      _c("img", {
                        attrs: {
                          src: __webpack_require__(179),
                        },
                      }),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          "\n                            1、让球胜平负是考虑让球后的胜平负结果，即需要主队进球加上让球进行计算结果。\n                        "
                        ),
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("2、如上图让球为"),
                        _c("b", [_vm._v("+1")]),
                        _vm._v("，当全场"),
                        _c("b", [_vm._v("90")]),
                        _vm._v("分钟比赛结束后："),
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("\n                            [克罗地亚]进球"),
                        _c("b", [_vm._v("+1>")]),
                        _vm._v(
                          "[巴西]进球，则[克罗地亚]胜\n                        "
                        ),
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("[克罗地亚]进球"),
                        _c("b", [_vm._v("+1=")]),
                        _vm._v("[巴西]进球，则两队平"),
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("\n                            [克罗地亚]进球"),
                        _c("b", [_vm._v("+1<")]),
                        _vm._v(
                          "[巴西]进球，则[克罗地亚]负\n                        "
                        ),
                      ]),
                    ]),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("van-swipe-item", [
                _c("div", { staticClass: "flexcenter layer_jcbet_guide_box" }, [
                  _c("div", { staticClass: "layer_jcbet_guide_con" }, [
                    _c("p", { staticClass: "icon_jcbetguide" }),
                    _vm._v(" "),
                    _c("h3", { staticClass: "jcbetguide_tit" }, [
                      _vm._v("更多玩法"),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "jcbetguide_txt" }, [
                      _c("img", {
                        attrs: {
                          src: __webpack_require__(180),
                        },
                      }),
                      _vm._v(" "),
                      _c("p", { staticClass: "mb10" }, [
                        _vm._v(
                          "\n                            更多玩法里可投注比分、总进球、半全场\n                        "
                        ),
                      ]),
                      _vm._v(" "),
                      _c("img", {
                        attrs: {
                          src: __webpack_require__(181),
                        },
                      }),
                      _vm._v(" "),
                      _c("img", {
                        attrs: {
                          src: __webpack_require__(182),
                        },
                      }),
                      _vm._v(" "),
                      _c("img", {
                        attrs: {
                          src: __webpack_require__(183),
                        },
                      }),
                    ]),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("van-swipe-item", [
                _c("div", { staticClass: "flexcenter layer_jcbet_guide_box" }, [
                  _c("div", { staticClass: "layer_jcbet_guide_con" }, [
                    _c("p", { staticClass: "icon_jcbetguide" }),
                    _vm._v(" "),
                    _c("h3", { staticClass: "jcbetguide_titbg" }, [
                      _vm._v("完成一个选单"),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "jcbetguide_txt" }, [
                      _c("h4", [_vm._v("单关")]),
                      _vm._v(" "),
                      _c("p", [_vm._v("左上角有“单”标识即可选择单关投注；")]),
                      _vm._v(" "),
                      _c("img", {
                        attrs: {
                          src: __webpack_require__(184),
                        },
                      }),
                      _vm._v(" "),
                      _c("h4", [_vm._v("过关")]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          "\n                            没设单关标识的玩法需至少选择"
                        ),
                        _c("b", [_vm._v("2")]),
                        _vm._v("场组成"),
                        _c("b", [_vm._v("2")]),
                        _vm._v("串"),
                        _c("b", [_vm._v("1")]),
                        _vm._v("投注；\n                        "),
                      ]),
                      _vm._v(" "),
                      _c("img", {
                        attrs: {
                          src: __webpack_require__(185),
                        },
                      }),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          "\n                            单关投注即您只需要竞猜对一场比赛即可，过关要保证过关场次竞猜结果都猜对才算中奖；\n                        "
                        ),
                      ]),
                    ]),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("van-swipe-item", [
                _c("div", { staticClass: "flexcenter layer_jcbet_guide_box" }, [
                  _c("div", { staticClass: "layer_jcbet_guide_con" }, [
                    _c("p", { staticClass: "icon_jcbetguide" }),
                    _vm._v(" "),
                    _c("h3", { staticClass: "jcbetguide_titbg" }, [
                      _vm._v("完成一个选单"),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "jcbetguide_txt" }, [
                      _c("p", [
                        _vm._v("\n                            1、设定"),
                        _c("b", [_vm._v("【过关方式】")]),
                        _vm._v("和"),
                        _c("b", [_vm._v("【投注倍数】")]),
                        _vm._v("；\n                        "),
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("2、点击"),
                        _c("b", [_vm._v("【下一步】")]),
                        _vm._v("生成选单到店；"),
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("3、按照店内指引进行付款，由店铺为您出票"),
                      ]),
                    ]),
                  ]),
                ]),
              ]),
            ],
            1
          ),
          _vm._v(" "),
          !_vm.isEnd
            ? _c("div", { staticClass: "jcbet_guide_btnbox" }, [
                _c(
                  "p",
                  {
                    staticClass: "jcbet_guide_nextbtn",
                    on: { click: _vm.next },
                  },
                  [_vm._v("我知道了，继续")]
                ),
                _vm._v(" "),
                _c(
                  "p",
                  { staticClass: "linkbtn", on: { click: _vm.complete } },
                  [_vm._v("跳过")]
                ),
              ])
            : _c("div", { staticClass: "jcbet_guide_btnlast" }, [
                _c("p", { staticClass: "lasttxtbg" }),
                _vm._v(" "),
                _c(
                  "p",
                  {
                    staticClass: "jcbet_guide_nextbtn",
                    on: { click: _vm.complete },
                  },
                  [_vm._v("完成")]
                ),
                _vm._v(" "),
                _c("img", {
                  attrs: { src: __webpack_require__(186) },
                }),
              ]),
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/components/buness/jingcai/bet-guide/index.vue?vue&type=template&id=4f082f72&

// EXTERNAL MODULE: ./node_modules/vant/lib/swipe/index.js
var swipe = __webpack_require__(18);
var swipe_default = /*#__PURE__*/__webpack_require__.n(swipe);

// EXTERNAL MODULE: ./node_modules/vant/lib/swipe-item/index.js
var swipe_item = __webpack_require__(19);
var swipe_item_default = /*#__PURE__*/__webpack_require__.n(swipe_item);

// EXTERNAL MODULE: ./node_modules/vant/lib/swipe/style/index.js
var style = __webpack_require__(46);

// EXTERNAL MODULE: ./node_modules/vant/lib/swipe-item/style/index.js
var swipe_item_style = __webpack_require__(47);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./src/components/buness/jingcai/bet-guide/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/**
 * 竞彩投注引导弹层
 * @description 竞彩投注引导弹层
 * @author zhaoyf
 * @time 2022/12/15 17:19:27
 * @copyright 2022 itou
 */
 //--从vant中按需引用轮播组件





/* harmony default export */ var bet_guidevue_type_script_lang_js_ = ({
  name: 'bet-guide',
  components: {
    'van-swipe': swipe_default.a,
    'van-swipe-item': swipe_item_default.a
  },
  data: function data() {
    return {
      key: '_bet_guide_cache',
      isShow: false,
      currIndex: 0,
      autoplay: false,
      loop: false,
      showIndicators: false,
      touchable: false
    };
  },
  computed: {
    isStart: function isStart() {
      return this.currIndex == 0;
    },
    isEnd: function isEnd() {
      return this.currIndex == 6;
    }
  },
  methods: {
    onChange: function onChange(index) {
      this.currIndex = index; // if (this.isEnd) {
      //     this.saveCache();
      // }
    },
    next: function next() {
      this.$refs.guideSwipe.next();
    },
    complete: function complete() {
      this.isShow = false;
      this.saveCache();
    },
    start: function start() {
      if (!this.getCache()) {
        this.isShow = true;
      }
    },
    getCache: function getCache() {
      var key = this.key;
      var completed = itou.localData.getData(key).val == 1;
      return completed;
    },
    saveCache: function saveCache() {
      var key = this.key;
      itou.localData.setData(key, {
        val: 1
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/buness/jingcai/bet-guide/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var jingcai_bet_guidevue_type_script_lang_js_ = (bet_guidevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./src/components/buness/jingcai/bet-guide/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  jingcai_bet_guidevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/buness/jingcai/bet-guide/index.vue"
/* harmony default export */ var bet_guide = (component.exports);
// CONCATENATED MODULE: ./src/static/js/business/jingcai.js



/**
 * 微信C端     竞彩投注页
 * Created by 赵宇飞 on 2016/9/13.
 */

$(function () {
  itou.currLimit.init();
  itou.localJson.setJson('__confirm_prev_page', {
    key: '/jingcai/'
  });

  var match_computer = __webpack_require__(25); // var ticket_number = require('./../model/ticket/get-number');


  Vue.directive('oddsnum', {
    //--全局指令，计算页面展示的的欧赔锦囊数量
    bind: function bind(el, binding, vnode) {
      var days = binding.value;
      days.oddsWaringNum++;
    }
  });

  var itemSelected = function itemSelected() {
    var self = this;
    self.shengfu = []; //--胜平负选中项

    self.rangqiu = []; //--让球胜平负选中项

    self.bifen = []; //--比分选中项

    self.jinqiu = []; //--进球数选中项

    self.banquanchang = []; //--半全场选中项
  };

  var itemInfo = function itemInfo(obj) {
    //--投注行基础信息
    var self = this,
        data = obj.data;
    self.parent = obj;
    self.no = data.no || ''; //--编号

    self.id = data.id || 0; //--唯一标识

    self.saishi = data.saishi || ''; //--所属赛事

    self.saishiColor = data.saishiColor || '#666'; //--所属赛事背景颜色
    //self.fontColor = data.fontColor || "#000";  //--所属赛事字体颜色

    self.fontColor = '#fff';
    self.endTime = data.endTime; //--投注结束时间

    var weekday = self.no.slice(0, 1);
    var cn = ['', '一', '二', '三', '四', '五', '六', '日'];

    if (cn[weekday]) {
      self.weekday = '周' + cn[weekday];
    } else {
      self.weekday = '';
    }

    try {
      self.bisaiTime = data.bisaiTime.toDate(); //--比赛时间
    } catch (error) {
      self.bisaiTime = data.bisaiTime; //--比赛时间
    }

    self.sort = data.sort; //--排列顺序

    self.pankou = data.pankou || 0; //--盘口，即让球数

    self.isShow = false; //--是否展开更多选项

    self.selectMore = false; //--是否选择了更多玩法

    self.selectNum = null; //--选择了几种玩法

    var d = (self.endTime || '').split(/-| |:/);
    var D = new Date(d[0], d[1] - 1, d[2], d[3], d[4], d[5]);

    if (D.Dateformat) {
      self.endTime = D.Dateformat('HH:NN');
    }

    self.selectMore = obj.parent.hasMoreGame(data.no); //self.hasDanguan = data.hasDanguan || false; //--是否可以单关
    // console.log(self);
  };

  var itemTeam = function itemTeam(obj) {
    //--投注行队伍信息
    var self = this,
        data = obj.data;
    self.parent = obj;
    self.host = {
      name: data.hostName || '',
      //--主队名称
      rank: data.hostRank && data.hostRank != '0' ? data.hostRank : '-',
      //--主队排名
      saishi: data.hostSaishi //--所属赛事

    };
    self.guest = {
      name: data.guestName || '',
      //--客队名称
      rank: data.guestRank && data.guestRank != '0' ? data.guestRank : '-',
      //--客队排名
      saishi: data.guestSaishi //--所属赛事

    };
    self.reversion = data.reversion == '1'; //--主客场是否逆转
  };

  var gameShengfuFactory = function gameShengfuFactory() {
    //--胜平负玩法赔率
    var self = this,
        obj = self.parent,
        data = obj.data,
        no = data.no;
    var selected = self.parent.parent.selected || {}; //--缓存的选择数据

    var shengfu = selected && selected.list && selected.list[no] && selected.list[no].shengfu ? selected.list[no].shengfu : []; //--缓存的胜平负数据

    self.title = '胜平负'; //--玩法名称

    self.rangNum = 0; //--玩法让球数
    // console.log(data.no);

    if (!self.peilv) {
      self.peilv = {}; //--玩法赔率

      if (data.shengfu) {
        self.peilv['胜'] = {
          v: data.shengfu['胜'] || 0,
          s: shengfu.contains('胜')
        }; //--主队胜赔率

        self.peilv['平'] = {
          v: data.shengfu['平'] || 0,
          s: shengfu.contains('平')
        }; //--平局赔率

        self.peilv['负'] = {
          v: data.shengfu['负'] || 0,
          s: shengfu.contains('负')
        }; //--客队胜赔率
      }
    } else {
      var _data$shengfu, _data$shengfu2, _data$shengfu3;

      //--选中状态重载
      self.peilv['胜'].s = shengfu.contains('胜');
      self.peilv['平'].s = shengfu.contains('平');
      self.peilv['负'].s = shengfu.contains('负');
      self.peilv['胜'].v = ((_data$shengfu = data.shengfu) === null || _data$shengfu === void 0 ? void 0 : _data$shengfu['胜']) || 0;
      self.peilv['平'].v = ((_data$shengfu2 = data.shengfu) === null || _data$shengfu2 === void 0 ? void 0 : _data$shengfu2['平']) || 0;
      self.peilv['负'].v = ((_data$shengfu3 = data.shengfu) === null || _data$shengfu3 === void 0 ? void 0 : _data$shengfu3['负']) || 0;
    }

    self.danguan = data.shengfuDanguan || false; //--是否可以单关

    self.key = data.shengfuKey;
    self.open = data.shengfuOpen;
  };

  var gameShengfu = function gameShengfu(obj) {
    //--胜平负玩法及赔率,对象初始化
    var self = this;
    self.parent = obj;
    gameShengfuFactory.call(self);
  };

  gameShengfu.prototype.loadMore = function () {
    //--胜平负玩法及赔率，数据重新载入
    var self = this;
    gameShengfuFactory.call(self);
  };

  var gameRangqiuFactory = function gameRangqiuFactory() {
    //--让球胜平负玩法赔率
    var self = this,
        obj = self.parent,
        data = obj.data,
        no = data.no;
    var selected = self.parent.parent.selected || {}; //--缓存的选择数据

    var rangqiu = selected && selected.list && selected.list[no] && selected.list[no].rangqiu ? selected.list[no].rangqiu : []; //--缓存的让球胜平负数据

    self.title = '让球胜平负'; //--玩法名称

    self.rangqiuNum = data.rangqiuNum || 0; //--玩法让球数

    if (!self.peilv) {
      self.peilv = {}; //--玩法赔率

      if (data.rangqiu) {
        self.peilv['胜'] = {
          v: data.rangqiu['胜'] || 0,
          s: rangqiu.contains('胜')
        }; //--主队胜赔率

        self.peilv['平'] = {
          v: data.rangqiu['平'] || 0,
          s: rangqiu.contains('平')
        }; //--平局赔率

        self.peilv['负'] = {
          v: data.rangqiu['负'] || 0,
          s: rangqiu.contains('负')
        }; //--客队胜赔率
      }
    } else {
      var _data$rangqiu, _data$rangqiu2, _data$rangqiu3;

      //--选中状态重载
      self.peilv['胜'].s = rangqiu.contains('胜');
      self.peilv['平'].s = rangqiu.contains('平');
      self.peilv['负'].s = rangqiu.contains('负');
      self.peilv['胜'].v = ((_data$rangqiu = data.rangqiu) === null || _data$rangqiu === void 0 ? void 0 : _data$rangqiu['胜']) || 0;
      self.peilv['平'].v = ((_data$rangqiu2 = data.rangqiu) === null || _data$rangqiu2 === void 0 ? void 0 : _data$rangqiu2['平']) || 0;
      self.peilv['负'].v = ((_data$rangqiu3 = data.rangqiu) === null || _data$rangqiu3 === void 0 ? void 0 : _data$rangqiu3['负']) || 0;
    }

    self.danguan = data.rangqiuDanguan || false; //--是否可以单关

    self.key = data.rangqiuKey;
    self.open = data.rangqiuOpen;
  };

  var gameRangqiu = function gameRangqiu(obj) {
    //--让球胜平负玩法及赔率,对象初始化
    var self = this;
    self.parent = obj;
    gameRangqiuFactory.call(self);
  };

  gameRangqiu.prototype.loadMore = function () {
    //--让球胜平负玩法及赔率，数据重新载入
    var self = this;
    gameRangqiuFactory.call(self);
  };

  var gameBifenFactory = function gameBifenFactory() {
    //--比分玩法挤赔率数据载入
    var self = this,
        obj = self.parent,
        data = obj.data,
        no = data.no;
    var model = self.parent.parent;
    var selected = model.selected || {}; //--缓存的选择数据

    var bifen = selected && selected.list && selected.list[no] && selected.list[no].bifen ? selected.list[no].bifen : []; //--缓存的比分数据

    var win = model.opts.bifen.win.slice(0),
        //--胜比分选项
    dogfall = model.opts.bifen.dogfall.slice(0),
        //--平比分选项
    lose = model.opts.bifen.lose.slice(0); //--负比分选项

    self.title = '比分'; //--玩法名称

    if (!self.peilv) {
      var peilv = [win, dogfall, lose]; //--玩法赔率

      for (var m = 0, len = peilv.length; m < len; m++) {
        var arr = peilv[m];
        peilv[m] = {};

        for (var n = 0, l = arr.length; n < l; n++) {
          var t = arr[n]; //--玩法比分

          var o = {
            v: data.bifen && data.bifen[t] ? data.bifen[t] : 1,
            //--赔率
            s: bifen.contains(t)
          };
          peilv[m][t] = o;
        }
      }

      self.peilv = peilv;
    } else {
      //--选择项选中状态重载
      var peilv = self.peilv;

      for (var m = 0, len = peilv.length; m < len; m++) {
        var arr = peilv[m];

        for (var n in arr) {
          var t = arr[n]; //--玩法比分

          t.s = bifen.contains(n);
          t.v = data.bifen && data.bifen[n] ? data.bifen[n] : 1;
        }
      }
    }

    self.danguan = data.bifenDanguan || false; //--是否可以单关

    self.key = data.bifenKey;
    self.open = data.bifenOpen;
  };

  var gameBifen = function gameBifen(obj) {
    //--比分玩法及赔率,对象初始化
    var self = this;
    self.parent = obj;
    gameBifenFactory.call(self);
  };

  gameBifen.prototype.loadMore = function () {
    //--比分玩法及赔率，数据重新载入
    var self = this;
    gameBifenFactory.call(self);
  };

  var gameJinqiuFactory = function gameJinqiuFactory() {
    //--总进球玩法及赔率
    var self = this,
        obj = self.parent,
        data = obj.data,
        no = data.no;
    var model = self.parent.parent;
    var selected = model.selected || {}; //--缓存的选择数据

    var jinqiu = selected && selected.list && selected.list[no] && selected.list[no].jinqiu ? selected.list[no].jinqiu : []; //--缓存的总进球数据

    var balls = model.opts.balls.slice(0); //--总进球选项

    self.title = '总进球'; //--玩法名称

    if (!self.peilv) {
      self.peilv = {}; //--玩法赔率

      var arr = balls;

      for (var n = 0, l = arr.length; n < l; n++) {
        var t = arr[n]; //--玩法标题

        var o = {
          v: data.jinqiu && data.jinqiu[t] ? data.jinqiu[t] : 1,
          //--赔率
          s: jinqiu.contains(t)
        };
        self.peilv[t] = o;
      }
    } else {
      //--选中状态重载
      var arr = balls;

      for (var n = 0, l = arr.length; n < l; n++) {
        var t = arr[n]; //--玩法标题

        self.peilv[t].s = jinqiu.contains(t);
        self.peilv[t].v = data.jinqiu && data.jinqiu[t] ? data.jinqiu[t] : 1;
      }
    }

    self.danguan = data.jinqiuDanguan || false; //--是否可以单关

    self.key = data.jinqiuKey;
    self.open = data.jinqiuOpen;
  };

  var gameJinqiu = function gameJinqiu(obj) {
    //--总进球玩法及赔率,对象初始化
    var self = this;
    self.parent = obj;
    gameJinqiuFactory.call(self);
  };

  gameJinqiu.prototype.loadMore = function () {
    //--总进球玩法及赔率，数据重新载入
    var self = this;
    gameJinqiuFactory.call(self);
  };

  var gameBanquanchangFactory = function gameBanquanchangFactory() {
    //--半全场玩法及赔率
    var self = this,
        obj = self.parent,
        data = obj.data,
        no = data.no;
    var model = self.parent.parent;
    var selected = model.selected || {}; //--缓存的选择数据

    var banquanchang = selected && selected.list && selected.list[no] && selected.list[no].banquanchang ? selected.list[no].banquanchang : []; //--缓存的总进球数据

    var shengfu = model.opts.shengfu.slice(0); //--半全场选项

    self.title = '半全场'; //--玩法名称

    if (!self.peilv) {
      self.peilv = {}; //--玩法赔率

      var arr = shengfu;

      for (var n = 0, l = arr.length; n < l; n++) {
        var t = arr[n]; //--玩法标题

        var o = {
          v: data.banquanchang && data.banquanchang[t] ? data.banquanchang[t] : 1,
          //--赔率
          s: banquanchang.contains(t)
        };
        self.peilv[t] = o;
      }
    } else {
      var arr = shengfu;

      for (var n = 0, l = arr.length; n < l; n++) {
        var t = arr[n]; //--玩法标题

        self.peilv[t].s = banquanchang.contains(t);
        self.peilv[t].v = data.banquanchang && data.banquanchang[t] ? data.banquanchang[t] : 1;
      }
    }

    self.danguan = data.banquanchangDanguan || false; //--是否可以单关

    self.key = data.banquanchangKey;
    self.open = data.banquanchangOpen;
  };

  var gameBanquanchang = function gameBanquanchang(obj) {
    //--半全场玩法及赔率,对象初始化
    var self = this;
    self.parent = obj;
    gameBanquanchangFactory.call(self);
  };

  gameBanquanchang.prototype.loadMore = function () {
    //--半全场玩法及赔率，数据重新载入
    var self = this;
    gameBanquanchangFactory.call(self);
  };

  var itemGame = function itemGame(obj) {
    //--投注行玩法及赔率
    var self = this;
    self.shengfu = new gameShengfu(obj); //--胜平负玩法

    self.rangqiu = new gameRangqiu(obj); //--让球玩法

    self.bifen = new gameBifen(obj); //--比分玩法

    self.jinqiu = new gameJinqiu(obj); //--总进球玩法

    self.banquanchang = new gameBanquanchang(obj); //--半全场玩法
  };

  itemGame.prototype.loadMore = function () {
    //--投注行玩法及赔率重新加载更多信息
    var self = this;
    self.shengfu.loadMore();
    self.rangqiu.loadMore();
    self.bifen.loadMore();
    self.jinqiu.loadMore();
    self.banquanchang.loadMore();
  };

  var item = function item(data, model) {
    //--竞彩投注行数据原型
    var self = this;
    self.data = data;
    self.parent = model;
    self.info = new itemInfo(self); //--行基础信息

    self.team = new itemTeam(self); //--行队伍信息

    self.game = new itemGame(self); //--行玩法及赔率

    var no = data.no; //--赛事编号

    var selected = self.parent.selected || {}; //--缓存的选择数据

    var i = selected.list && selected.list[no] ? selected.list[no] : {}; //--赛事选择数据

    var dan = i && i.dan ? i.dan : false; //--缓存的选胆数据

    if (!i) {
      self.selected = 0; //--0 = 未选中，1 = 选中，-1 = 设胆
    } else {
      self.selected = dan ? -1 : 1;
    }

    self.parent.maps[no] = self; //--设置映射关系

    self.parent.hasMoreGame(no);
  };

  item.prototype.loadMore = function () {
    //--点击获取比分、总进球、半全场的赔率
    var self = this;
    self.game.loadMore();
  };

  var apis = function apis(obj) {
    //--API调用实例化函数，用于调用所有api
    var self = this;
    self.parent = obj;

    self.getAdvLive = function () {
      return itou.get({
        url: 'adv/getnotice',
        data: {},
        formatResult: false
      });
    };

    self.getAdertisingStatus = function () {
      return itou.get({
        url: 'adv/adinfo',
        data: {
          aid: 1,
          pid: 2,
          station_id: self.parent.station_id
        },
        formatResult: false
      });
    };

    self.getAdvNum = function () {
      return itou.get({
        url: 'adv/clickstat',
        data: {
          aid: 1,
          pid: 2,
          station_id: self.parent.station_id
        },
        formatResult: false
      });
    };

    self.getList = function () {
      //--获取赛事列表
      var model = self.parent; // if(model.cacheList){
      // 	var cacheList = model.cacheList,
      // 		defer = $.Deferred();
      // 		defer.resolve(cacheList);
      // 		return defer.promise();
      // }else{

      var s = self.parent.selected.search || {},
          min_odds = '',
          //--最小赔率
      max_odds = '',
          //--最大赔率
      odds_list = [],
          //--赔率范围数组,
      danguan = s.danguan || [],
          peilv = s.peilv,
          league_name = s.saishi || ''; //--所属赛事，数组
      //console.log(s);

      for (var i = 0, len = peilv.length; i < len; i++) {
        switch (peilv[i]) {
          case '0':
            //--1.5以下
            min_odds = '0';
            max_odds = '1.5';
            break;

          case '1':
            //--1.5-2.0
            min_odds = '1.5';
            max_odds = '2';
            break;

          case '2':
            //--2.0以上
            min_odds = '2';
            max_odds = '0';
            break;
        }

        odds_list.push([min_odds, max_odds]);
      } // console.log(odds_list);


      var single_support = 2;

      if (danguan.length == 1) {
        single_support = danguan[0];
      }

      return itou.get({
        url: 'match/selectlist',
        data: {
          hide_more: 1,
          odds_list: odds_list,
          league_name: league_name,
          single_support: single_support,
          station_user_id: itou.localJson.getJson('/user/shop/details/').id,
          station_uuid: itou.localJson.getJson('/user/shop/details/').uuid
        },
        showErr: true,
        //--接口超时是否跳转错误页面
        rnd: false,
        notoken: true
      }); // }
    };

    self.loadMore = function (data) {
      //--赛事加载更多选项，获取比分、总进球、半全场赔率
      return itou.get({
        url: 'match/selectmore',
        data: data
      });
    };

    self.getSearchSaishi = function () {
      //--获取检索项中的赛事
      return itou.get({
        url: 'match/leaguequerylist',
        data: {// station_user_id: itou.localJson.getJson("/user/shop/details/").id,
          // station_uuid: itou.localJson.getJson("/user/shop/details/").uuid
        },
        rnd: false,
        notoken: true
      });
    };

    self.getJiangjin = function (data) {
      //--获取奖金，这个异步加载要在点击选择赛事后，延时调用
      // var token = itou.getToken(),
      //     t = Math.floor(Math.random() * 1000);
      obj.pingceLoading = 'doing'; //--评测接口正在进行

      return itou.get({
        // url: "evaluate/?token=" + token + "&t=" + t,
        url: 'evaluate',
        data: JSON.stringify(data),
        type: 'POST',
        processData: false,
        formatResult: false,
        // rlt: {},//--测试用，强制使接口返回rlt的值
        autocache: true
      });
    };

    self.saveFangan = function (data, act) {
      //--保存方案
      return itou.outil.saveProject(data, act);
    };

    self.getDefaultStation = function (data) {
      //--获取默认店铺
      return itou.get({
        url: 'shop/getMyRecommStation',
        data: {
          lottery_type: data.lottery_type,
          money: data.money
        }
      });
    };

    self.getResult = function () {
      //--获取最近7天比赛结果数量
      return itou.get({
        url: 'match/finishcount',
        data: {},
        rnd: false,
        notoken: true
      });
    };

    self.getAllowUser = function () {
      return itou.get({
        url: 'sharebuy/allowusesharebuy',
        data: {
          station_id: self.parent.station_id
        }
      });
    };

    self.getHemaiStatus = function () {
      return itou.get({
        url: 'sharebuy/issupport',
        data: {
          station_id: self.parent.station_id
        }
      });
    };
  };

  var money = function money(data) {
    //--奖金信息，通过接口返回
    var self = this;
    self.huafei = data.huafei || 0; //--总投注金额

    self.jiangjin = data.jiangjin || 0; //--最大奖金金额

    self.list = data.list || []; //--奖金状态列表
  };

  var searchOpts = function searchOpts(obj) {
    //--检索项数据
    var self = this;
    self.parent = obj;
    var selected = self.parent.selected,
        search = selected.search || {},
        peilv = search.peilv || [],
        //--缓存数据
    danguan = search.danguan || [],
        saishi = search.saishi || [];
    self.isShow = false;
    self.temp = {
      //--临时数据，执行检索后，需要同步到缓存数据中，取消检索需要充值
      peilv: peilv.slice(0),
      saishi: saishi.slice(0),
      danguan: danguan.slice(0)
    };
    self.peilv = {
      //--胜平负低赔率区间检索项，单选
      title: '胜平负低赔率区间',
      opts: []
    };
    self.saishi = {
      //--赛事检索项，数据格式{t: "英超", v: "yingchao", s: false}，复选；来源：接口返回
      title: '赛事',
      opts: []
    };
    self.danguan = {
      //--胜平负/让球胜平负是否支持单关
      title: '单关类型（胜平负/让球胜平负）',
      opts: []
    };

    self.tempReset = function () {
      var selected = self.parent.selected,
          search = selected.search || {},
          peilv = search.peilv || [],
          //--缓存数据
      danguan = search.danguan || [],
          saishi = search.saishi || [];
      self.temp = {
        //--临时数据，执行检索后，需要同步到缓存数据中，取消检索需要充值
        peilv: peilv.slice(0),
        //--复制原检索项选中数组
        saishi: saishi.slice(0),
        danguan: danguan.slice(0)
      }; //console.log(selected);
    }; // self.tempReset();console.log(self.temp);


    self.formatOpts();
  };

  searchOpts.prototype.formatOpts = function () {
    //--根据缓存，格式化检索项选中状态;需要在接口完成后执行
    var self = this;
    var temp = self.temp,
        peilv = temp.peilv || [],
        danguan = temp.danguan || [],
        saishi = temp.saishi || [],
        //--缓存数据
    opts = self.saishi.opts; //console.log(temp.peilv,temp.saishi);

    self.peilv.opts = [{
      t: '1.50以下',
      v: '0',
      s: peilv.contains('0')
    }, //--通过缓存数据判断选中状态
    {
      t: '1.50-2.00',
      v: '1',
      s: peilv.contains('1')
    }, {
      t: '2.00以上',
      v: '2',
      s: peilv.contains('2')
    }];

    for (var i in opts) {
      opts[i].s = saishi.contains(opts[i].t);
    }

    self.danguan.opts = [// {t: '全部', v: '2', s: danguan.contains('2')}, //--通过缓存数据判断选中状态
    {
      t: '仅单关',
      v: '1',
      s: danguan.contains('1')
    }, {
      t: '非单关',
      v: '0',
      s: danguan.contains('0')
    }]; //self.tempReset();
  };

  searchOpts.prototype.doSelectSearch = function (type, index) {
    //--选择检索项
    var self = this;

    if (self[type] && self[type].opts && self[type].opts[index] && self[type].opts[index].t) {
      //console.log(self.temp,self);
      if (self[type].opts[index].s) {
        //--取消选中状态
        self.temp[type] = Array.minus(self.temp[type], [self[type].opts[index].v]); //--取差集
      } else {
        //--设置选中状态
        self.temp[type].push(self[type].opts[index].v);
      }

      self[type].opts[index].s = !self[type].opts[index].s;
    }
  };

  searchOpts.prototype.selectAll = function () {
    //--选中全部赛事
    var self = this,
        opts = self.saishi.opts;

    for (var i = 0, len = opts.length; i < len; i++) {
      if (!opts[i].s) {
        self.doSelectSearch('saishi', i);
      }
    }
  };

  searchOpts.prototype.unselectAll = function () {
    //--反选全部赛事
    var self = this,
        opts = self.saishi.opts;

    for (var i = 0, len = opts.length; i < len; i++) {
      // if(!opts[i].s){
      self.doSelectSearch('saishi', i); // }
    }
  };

  searchOpts.prototype.getSelectedFromTemp = function () {
    //--将选中项从临时数据中取出
    var self = this;
    var selected = self.parent.selected,
        search = selected.search || {};
    search.peilv = self.temp.peilv.slice(0);
    search.danguan = self.temp.danguan.slice(0);
    search.saishi = self.temp.saishi.slice(0);
    console.log(selected);
    itou.localJson.setJson('__Jingcai_Selected', {
      data: selected
    }); //--保存缓存数据
  };

  var helper = function helper(model) {
    //--帮助信息对象实例化函数
    var self = this;
    self.parent = model;
    self.showTop = false; //--是否显示页面右上角帮助弹窗

    self.rangqiu = {
      //--让球帮助信息
      isShow: false,
      //--是否显示
      info: {
        host: '',
        //--主队名
        guest: '',
        //--客队名
        num: '' //--让球数

      }
    };
    self.resultList = []; //--最近3天比赛结果
  };

  var result = function result(model) {
    //--选择场次之后的计算结果
    var self = this;
    self.parent = model;
    self.formated = {
      intro: {
        text: ' '
      }
    };
    self.guoguan = []; //--过关方式

    self.guoguanMore = []; //--混合过关方式

    self.formatedGuoguan = []; //--处理之后的过关方式

    self.zhushu = null;
    self.guoguanHtml = null;
    self.guoguanDef = null;
    self.minDan = 0;
  };

  result.prototype.compute = function () {
    //--处理选中数据，进行计算
    var self = this,
        model = self.parent,
        selected = model.selected.list,
        maps = model.maps,
        setting = self.parent.setting; // console.log(self);
    //console.log(selected);

    self.guoguanCompute(); //--过关计算，得出最短过关串

    self.getMinDan();
    var min = self.minDan; //console.log(model.getDanNum(),min);

    if (model.getDanNum() > min) {
      model.clearDan(); //--清除胆

      model.getDanList();
    }

    var r = $.lottery.jingcai.football.outil.formatSelected(selected, maps); //--格式化选择数据，用于后续计算

    self.formated = r;
    console.log(JSON.stringify(selected, null, 4), r);
    var guoguan = self.getGuoguan(r); //console.log(guoguan);

    var guoguanMore = self.getGuoguanMore(guoguan);
    self.clearGuoguan(); //--清理不合适的过关选项

    if (guoguan.length > 0 && self.guoguanDef) {
      //--获取默认过关方式
      // console.log(guoguan, Math.max.apply(null, guoguan));
      model.selected.guoguan.splice(0);
      model.selected.guoguan.push(Math.max.apply(null, guoguan) + '_1');
    } else if (guoguan.length == 0) {
      model.selected.guoguan.splice(0);
    } // console.log(guoguan, guoguanMore);
    // self.getZhushu();//--注数计算


    self.getGuoguanHtml(); //--获取过关按钮显示信息

    var r1 = $.lottery.jingcai.football.outil.formatSelectedToApi({
      //--格式化选中数据，使之可以被评测接口使用
      passTypes: model.selected.guoguan.join(','),
      //--过关方式
      multiple: model.selected.beishu //--倍数
      // type: "mixed"//--单关或者是混关

    });
    self.getMinDan(); // console.log(r);
    // console.log(r1);//alert(JSON.stringify(r1));
    // console.log(r1.passTypes, !r1.passTypes)

    if (!r1.passTypes || r1.matches.length == 0) {
      model.evaluate.max = 0;
    } else {
      var timeout = 0;

      if (self.zhushu > 10000) {
        timeout = 100;
      }

      model.timmer.newTimmer({
        //--调用接口获取奖金评测
        key: '__sys_jingcai_football_evaluate',
        fun: function fun() {
          model.timmer.clearTimmer('__sys_jingcai_football_evaluate'); // model.apis.getJiangjin(r1)
          // 	.then(function(r){
          // 		self.formatEvaluateFromApi(r);
          // 	});

          if (setting.zhushu.model == '0') {
            model.evaluate.max = model.getMaxMoney();
          } else if (setting.zhushu.model == '1') {
            model.evaluate.max = model.getMaxMoney1();
          } //--调用票数计算组件，计算票数量


          try {
            var data = model.act.getFanganData();
            model.vm.$refs.ticket_num.doCompute(data, 1000 - timeout);
          } catch (error) {
            console.error(error);
          }
        },
        timeout: timeout
      });
    }

    self.guoguanCompute(); //--过关计算，得出最短过关串

    itou.localJson.setJson('__Jingcai_Selected', {
      data: model.selected
    }); //--保存缓存数据
  };

  result.prototype.getMinDan = function () {
    //--获得最短的胆数量
    var self = this,
        guoguan = self.parent.selected.guoguan;

    for (var i = 0, len = guoguan.length; i < len; i++) {
      var gg = guoguan[i].split('_');

      if (i == 0) {
        self.minDan = gg[0];
      } else {
        self.minDan = self.minDan < gg[0] ? self.minDan : gg[0];
      }
    }
  };

  result.prototype.getGuoguan = function (r) {
    //--获得过关方式
    var self = this;
    self.guoguan = $.lottery.jingcai.football.outil.getGuoguan(r);
    return self.guoguan;
  };

  result.prototype.getGuoguanMore = function (guoguan) {
    //--获得混合过关方式
    var self = this,
        model = self.parent,
        selected = model.selected,
        setting = self.parent.setting;

    if (setting.guoguan.model == 'all') {
      //--全部混合过关模式
      self.guoguanMore = $.lottery.jingcai.football.outil.getGuoguanMore(guoguan);
    } else if (setting.guoguan.model == 'max-only') {
      //--最大混合过关模式
      var formated = self.formated,
          intro = formated.intro,
          dan = intro.dan,
          tuo = intro.tuo; // console.log(dan.length + tuo.length, guoguan[guoguan.length - 1])

      if (dan.length + tuo.length <= guoguan[guoguan.length - 1]) {
        //--更多过关保留与场次一致最高过关串法，场次数超过最高过关串法则相应串关方式不显示
        self.guoguanMore = $.lottery.jingcai.football.outil.getGuoguanMore_max(guoguan);
      } else {
        self.guoguanMore = [];
      }
    }

    var s_guoguan = selected.guoguan;

    for (var i = s_guoguan.length - 1; i >= 0; i--) {
      //--移除已经不存在的复合过关
      var gg = s_guoguan[i];

      if (gg.split('_')[1] != 1 && self.guoguanMore.indexOf(gg) == -1) {
        s_guoguan.splice(i, 1);
      }
    }

    return self.guoguanMore;
  };

  result.prototype.guoguanCompute = function () {
    //--处理选择的过关方式，得出最短串法
    var self = this,
        guoguan = self.parent.selected.guoguan;
    self.formatedGuoguan = $.lottery.jingcai.football.outil.formatGuoguan(guoguan); // console.log(guoguan, self.formatedGuoguan, self.parent.selected);

    return self.formatedGuoguan;
  };

  result.prototype.getZhushu = function () {
    //--获取注数
    var self = this,
        guoguan = self.parent.selected.guoguan,
        setting = self.parent.setting;

    if (setting.zhushu.model == '0') {
      self.zhushu = $.lottery.jingcai.football.outil.getZhushu(guoguan);
    } else if (setting.zhushu.model == '1') {
      self.zhushu = $.lottery.jingcai.football.outil.getZhushu1(guoguan);
    }

    return self.zhushu;
  };

  result.prototype.clearGuoguan = function () {
    //---清理不合适的过关选项
    var self = this,
        num = self.formated.intro.nuNum,
        sNum = self.formated.intro.num,
        danguan = self.formated.intro.danguan,
        guoguan = self.guoguan,
        l = guoguan.length,
        max = guoguan[l - 1],
        s = self.parent.selected.guoguan; //console.log(self.formated.intro);

    var hasMore = sNum.SportteryScore || sNum.SportteryHalfFull;
    var hasTotalGoals = sNum.SportteryTotalGoals;

    if (hasMore) {
      var m = 4;
    } else if (hasTotalGoals) {
      var m = 6;
    } else {
      var m = 8;
    }

    num = num < m ? num : m;

    for (var len = s.length, i = len - 1; i >= 0; i--) {
      var x = s[i].split('_')[0];

      if (x > num || x == 1 && !danguan) {
        s.splice(i, 1);
      }
    }

    if (s.length == 0 && self.parent.isDoselect == true) {
      s.push(max + '_1');
      self.guoguanDef = true;
    }

    self.parent.isDoselect = false; // console.log(self.parent.selected.guoguan,self,self.guoguan);
  };

  result.prototype.formatEvaluateFromApi = function (data) {
    //--处理奖金测评数据
    var self = this,
        hrm = data.data.hrm,
        o = self.parent.evaluate;
    o.list = [];

    if (data.code != '200') {
      if (data.data.msg) {
        itou.msg.toast = data.data.msg;
      }

      return;
    }

    o.max = 0;
    o.min = 0;
    o.hasDan = true;

    for (var i in hrm) {
      o.hasDan = !(i == '0'); //--是否是胆拖投注

      var a = hrm[i];

      for (var ii in a) {
        var b = a[ii],
            obj = {};
        o.max = o.max > b.max ? o.max : b.max; //--获取最大奖金

        o.min = o.min == 0 ? b.min : o.min < b.min ? o.min : b.min; //--获取最小金额

        obj.dan = i;
        obj.tuo = ii;
        obj.max = b.max;
        obj.min = b.min;
        o.list.push(obj);
      }
    } //console.log(o);

  };

  result.prototype.getGuoguanHtml = function () {
    //--获取过关呈现字符
    var self = this,
        $data = self.parent,
        guoguan = $data.selected.guoguan,
        dan = self.formated.intro.dan.length,
        str = ''; // console.log(guoguan);

    if (guoguan.length == 0) {
      str = '选择过关';
    } else {
      str = guoguan[0] == '1_1' ? '单关' : guoguan[0].replace('_', '串');

      if (dan) {
        str = str + '(<span class=\'fontred font12\'>胆</span>)';
      }

      if (guoguan.length > 1) {
        str = str + '..';
      }
    }

    self.guoguanHtml = str;
  };

  var act = function act(model) {
    var self = this;
    self.parent = model;
    self.currAction = ''; //--当前弹窗动作

    self.submitAction = ''; //--当前提交动作
  };

  act.prototype.reEvaluate = function (reget) {
    //--获取奖金优化数据;@reget == 1，清除缓存重新获取接口数据
    var self = this,
        model = self.parent;

    if (reget) {
      //--是否忽略缓存重新获取
      var token = itou.getToken();
      var key = itou.outil.autocache.getKey('evaluate/?token=' + token);
      delete Gray.$cache[key]; // console.log(token, key, Gray.$cache, Gray.$cache[key]);
    }

    var r1 = $.lottery.jingcai.football.outil.formatSelectedToApi({
      //--格式化选中数据，使之可以被评测接口使用
      passTypes: model.selected.guoguan.join(','),
      //--过关方式
      multiple: model.selected.beishu //--倍数
      // type: "mixed"//--单关或者是混关

    });
    console.log(r1, JSON.stringify(r1));
    model.apis.getJiangjin(r1).then(function (r) {
      model.pingceLoading = 'done';
      console.log('done');
      model.result.formatEvaluateFromApi(r);
    });
  };

  act.prototype.show = function (key) {
    //--显示指定弹窗
    var self = this,
        model = self.parent;

    if (key == 'evaluate' && self.currAction != 'evaluate') {
      self.reEvaluate();
    }

    if (key == 'evaluate' && self.parent.evaluate.max == '0') {
      //--最大奖金为0时，不显示奖金评测窗口
      self.currAction = '';
      return;
    } else if (key == 'jianpan') {
      self.parent.jianpan.firstKeyDown = false;
    }

    self.currAction = self.currAction == key ? '' : key;
  };

  act.prototype.hide = function () {
    //--隐藏指定弹窗
    var self = this;
    self.currAction = '';
  };

  act.prototype.selectGuoguan = function (key) {
    //--选择/取消过关方式
    var self = this,
        model = self.parent,
        setting = model.setting,
        maxGuoguan = setting.guoguan.max,
        //--最多可选的过关串个数
    guoguan = model.selected.guoguan; //console.log(guoguan.contains(key));

    if (guoguan.length >= maxGuoguan && !guoguan.contains(key)) {
      model.vm.showToast('过关方式不能超过' + maxGuoguan + '个');
      return;
    }

    if (guoguan.contains(key)) {
      self.parent.selected.guoguan = Array.minus(guoguan, [key]);
    } else {
      guoguan.push(key);
    }

    self.parent.result.guoguanDef = false;
    self.parent.result.compute();
    self.parent.result.guoguanCompute(); // self.parent.result.getZhushu();

    itou.localJson.setJson('__Jingcai_Selected', {
      data: self.selected
    }); //--保存缓存数据
  };

  act.prototype.checkData = function () {
    //--检查方案数据
    var self = this,
        model = self.parent,
        result = model.result,
        selected = model.selected,
        s = model.result.guoguanHtml;

    if (s == '选择过关') {
      model.vm.showToast('请选择过关方式');
      return false;
    }

    if (result.zhushu * 2 > 100000) {
      model.vm.showToast('单倍方案金额不能超过10万元');
      return false;
    } // if (result.zhushu * selected.beishu * 2 > 2000000) {
    //     model.vm.showToast('方案金额不能超过200万');
    //     return false;
    // }


    if (result.zhushu * selected.beishu * 2 > 200000) {
      model.vm.showToast('方案金额不能超过20万');
      return false;
    }

    return true;
  };

  act.prototype.doSaveFangan = function () {
    //--保存方案
    var self = this,
        model = self.parent,
        submitAction = self.submitAction;

    if (self.checkData()) {
      //--检查方案数据
      var r = self.getFanganData(); // console.log(r);

      model.apis.saveFangan(r, submitAction);
    }
  };

  act.prototype.getFanganData = function () {
    //--获取方案所需数据
    var self = this,
        model = self.parent,
        f = model.result.formated,
        dan = f && f.intro && f.intro.dan || [],
        betIds = model.getBetIds(),
        o = {};
    o.passTypes = model.selected.guoguan.join(','); //--过关方式

    o.count = model.result.zhushu * model.selected.beishu; //--总注数

    o.multiple = model.selected.beishu; //--倍数

    o.m_ext = ''; //--投注方式选项

    o.manner = dan.length > 0 ? 1 : 0; //--投注方式

    o.bet_seq = betIds; //--bet_id序列

    o.dan = dan;
    var selected = f.selected || {};
    var betTimes = 1; //--所选玩法的组合数

    try {
      for (var matchid in selected) {
        var match = selected[matchid];
        betTimes *= Object.keys(match).length;
      }
    } catch (error) {
      console.error(error);
    }

    var r = $.lottery.jingcai.football.outil.formatSelectedToApiFangan(o);
    r.betTimes = betTimes;
    return r;
  };

  act.prototype.doSubmit = /*#__PURE__*/asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
    var self;
    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            //--提交店铺
            self = this; //--渠道动作埋点

            itou.channelHm.setBuriedPoints('project_next');
            _context.next = 4;
            return vm.checkDanguan();

          case 4:
            if (_context.sent) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return");

          case 6:
            self.submitAction = 'submit';
            self.doSaveFangan();

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  act.prototype.doSave = /*#__PURE__*/asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee2() {
    var self;
    return regenerator_default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            //--保存方案并执行跳转
            self = this; //--渠道动作埋点

            itou.channelHm.setBuriedPoints('project_save');
            _context2.next = 4;
            return vm.checkDanguan();

          case 4:
            if (_context2.sent) {
              _context2.next = 6;
              break;
            }

            return _context2.abrupt("return");

          case 6:
            self.submitAction = 'save';
            console.log(self);
            self.doSaveFangan();

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));
  act.prototype.doHemai = /*#__PURE__*/asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee3() {
    var self;
    return regenerator_default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            self = this; //--渠道动作埋点

            itou.channelHm.setBuriedPoints('project_sharebuy');
            _context3.next = 4;
            return vm.checkDanguan();

          case 4:
            if (_context3.sent) {
              _context3.next = 6;
              break;
            }

            return _context3.abrupt("return");

          case 6:
            itou.get({
              url: 'user/info',
              data: {
                token: itou.getToken()
              },
              noToast: true
            }).then(function (result) {
              var _self$parent, _self$parent$evaluate, _self$parent$evaluate2;

              self.submitAction = 'hemai';
              var num = self === null || self === void 0 ? void 0 : (_self$parent = self.parent) === null || _self$parent === void 0 ? void 0 : (_self$parent$evaluate = _self$parent.evaluate) === null || _self$parent$evaluate === void 0 ? void 0 : (_self$parent$evaluate2 = _self$parent$evaluate.max) === null || _self$parent$evaluate2 === void 0 ? void 0 : _self$parent$evaluate2.toFixed(2);

              if (num) {
                itou.sessionData.setData('__hemai_pingce', {
                  num: num
                });
              }

              self.doSaveFangan();
            });

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  var jianpan = function jianpan(model) {
    var self = this;
    self.parent = model;
    self.firstKeyDown = false;
    var selected = self.parent.selected,
        beishu = selected.beishu || 1;
    self.canReplace = beishu == 1; //--是否可以替换掉原数字'
  };

  jianpan.prototype.keyNum = function (code) {
    //--点击数字按键
    var self = this,
        result = self.parent.result,
        selected = self.parent.selected,
        beishu = selected.beishu || 1,
        canReplace = self.canReplace; //console.log(self.firstKeyDown,canReplace);

    if (!self.firstKeyDown) {
      beishu = code;
    } else {
      beishu = canReplace ? code * 1 : (beishu + '' + code) * 1;
    }

    self.canReplace = false;

    if (beishu > 50000) {
      beishu = 50000;
    } else if (beishu < 1) {
      beishu = 1;
    }

    if (beishu != selected.beishu) {
      self.parent.selected.beishu = beishu;
      result.compute();
    }

    self.firstKeyDown = true;
  };

  jianpan.prototype.keydel = function () {
    //--点击删除按键
    var self = this,
        result = self.parent.result,
        selected = self.parent.selected,
        beishu = selected.beishu || 1,
        len = (beishu + '').length;

    if (!self.firstKeyDown) {
      beishu = 1;
    } else {
      beishu = (beishu + '').left(len - 1) || 1;
    }

    beishu = beishu * 1;

    if (beishu > 50000) {
      beishu = 50000;
    } else if (beishu < 1) {
      beishu = 1;
    }

    self.canReplace = beishu == 1;

    if (beishu != selected.beishu) {
      self.parent.selected.beishu = beishu;
      result.compute();
    }

    self.firstKeyDown = true;
  };

  jianpan.prototype.keyTop = function (code) {
    //--点击倍数按键
    var self = this,
        result = self.parent.result,
        act = self.parent.act;
    self.parent.selected.beishu = code;
    result.compute();
    act.hide();
  };

  var currItem = function currItem(model) {
    //--显示更多玩法的控制对象
    var self = this;
    self.parent = model;
    self.show = false; //--是否显示界面

    self.item = new item({}, model); //--当前显示的数据

    self.no = null;
    self.selected = {};
  };

  currItem.prototype.showMore = function (no) {
    var self = this,
        model = self.parent,
        pSelected = model.selected.list,
        maps = model.maps;
    self.no = no;
    self.item = maps[no];
    var selected = pSelected[no] || {};
    self.selected = {};

    for (var i in selected) {
      if (itou.outil.is(selected[i], 'Array')) {
        self.selected[i] = selected[i].slice(0);
      }
    }

    var game = self.item.game;

    if (game.bifen.open || game.jinqiu.open || game.banquanchang.open) {
      self.show = true;
    } else {
      var betid = game.shengfu.key || game.rangqiu.key;
      model.apis.loadMore({
        serial_no: no,
        bet_id: betid
      }).then(function (data) {
        //--格式化数据并重载更多玩法
        var y = 0;

        for (var x in data) {
          if (x != 'token') {
            y = x;
            break;
          }
        }

        var r = $.lottery.jingcai.football.outil.formatItemFromApi(data[y]); // r.no = y;
        // console.log(r);
        // console.log(it.data);

        self.item.data = r;
        self.item.loadMore();
        self.show = true;
      });
    } // console.log(self.item);
    // console.log(self.selected);

  };

  currItem.prototype.submit = function () {
    //--确认
    var self = this,
        model = self.parent,
        pSelected = model.selected.list;
    self.show = false;
    model.isDoselect = true;
    model.selected.list[self.no] = self.selected;
    itou.localJson.setJson('__Jingcai_Selected', {
      data: model.selected
    }); //--保存缓存数据

    model.clearSelected();
    self.item.loadMore();
    model.hasMoreGame(self.no);
    model.result.compute();
    model.getDanList();

    if (window.myDrapload) {
      window.myDrapload.unlock();
    }
  };

  currItem.prototype.cancel = function () {
    //--取消
    var self = this;
    self.show = false;
    self.item.loadMore();

    if (window.myDrapload) {
      window.myDrapload.unlock();
    }
  };

  currItem.prototype.doSelectSaishi = function (game, key, index) {
    //--在弹窗选择赛事
    var self = this,
        result = self.parent.result.formated.intro || {},
        nuNum = result.nuNum || 0,
        no = self.no,
        selected = self.parent.selected.list,
        changciMax = self.parent.setting.changci.max; // console.log(self.item);

    if (self.item.game && self.item.game[game] && self.item.game[game].peilv) {
      if (self.item.game[game].peilv[key] && self.item.game[game].peilv[key].v == '未受注') {
        return;
      }

      if (self.item.game[game].peilv[index] && self.item.game[game].peilv[index][key] && self.item.game[game].peilv[index][key].v == '未受注') {
        return;
      }

      if (nuNum >= changciMax && !selected[no]) {
        vm.showToast('最多选择' + changciMax + '场比赛。');
        return;
      }

      if (!index && index != 0) {
        self.item.game[game].peilv[key].s = !self.item.game[game].peilv[key].s; //--是否选中样式切换
      } else {
        self.item.game[game].peilv[index][key].s = !self.item.game[game].peilv[index][key].s; //--是否选中样式切换
      }

      if (!self.selected[game]) {
        self.selected[game] = [];
      }

      if (self.selected[game].contains(key)) {
        //--是否选中数据处理
        self.selected[game] = Array.minus(self.selected[game], [key]); //--取差集
      } else {
        self.selected[game].push(key); //--追加
      }
    } // console.log(self.parent.selected.list[self.no][game]);
    // console.log(self.selected[game]);

  };

  currItem.prototype.selectAll = function (game, index) {
    //--点击标题全选、全取消, @param game(String) = 玩法, @param index(Int) = 下标
    if (game != 'bifen') {
      return;
    }

    var self = this,
        result = self.parent.result.formated.intro || {},
        nuNum = result.nuNum || 0,
        no = self.no,
        selected = self.parent.selected.list,
        changciMax = self.parent.setting.changci.max;

    if (nuNum >= changciMax && !selected[no]) {
      vm.showToast('最多选择' + changciMax + '场比赛。');
      return;
    }

    self.selected[game] = self.selected[game] || [];
    var peilv = self.item.game[game].peilv[index],
        selected = self.selected[game] || [],
        selectedAll = true; //--是否已经全部选中

    for (var i in peilv) {
      var o = peilv[i];

      if (selectedAll && !o.s) {
        selectedAll = false;
      }
    } // console.log(peilv, self.selected[game], selectedAll);


    for (var i in peilv) {
      var o = peilv[i];
      o.s = !selectedAll;

      if (selectedAll) {
        self.selected[game] = Array.minus(self.selected[game], [i]); //--取差集
      } else {
        if (!self.selected[game].contains(i)) {
          self.selected[game].push(i); //--追加
        }
      }
    } // console.log(peilv, self.selected[game], selectedAll);

  };

  var model = function model() {
    var self = this;
    self.setting = itou.lotterySetting.jingcai; //--竞彩足球投注设置

    self.showBody = false;
    self.drapload = null;
    self.showOpenMsg = false; //--是否显示页面第一次打开时的提示信息

    self.isDoselect = false;
    self.vm = null;
    self.localData = {
      t: '竞彩足球',
      v: '',
      service: '',
      num: 0,
      map: 'jingcai'
    };
    itou.localData.setData('__sys_lottery_type', {
      key: self.localData
    });
    self.result = new result(self);
    self.helper = new helper(self); //--帮助信息对象实例化

    self.timmer = itou.outil.timmer; //--计时器对象实例化

    self.apis = new apis(self);
    self.act = new act(self);
    self.opts = {
      //--玩法选项
      bifen: {
        //--比分选项
        win: ['1:0', '2:0', '2:1', '3:0', '3:1', '3:2', '4:0', '4:1', '4:2', '5:0', '5:1', '5:2', '胜其他'],
        //::胜比分选项
        dogfall: ['0:0', '1:1', '2:2', '3:3', '平其他'],
        //::平比分选项
        lose: ['0:1', '0:2', '1:2', '0:3', '1:3', '2:3', '0:4', '1:4', '2:4', '0:5', '1:5', '2:5', '负其他'] //::负比分选项

      },
      balls: ['0球', '1球', '2球', '3球', '4球', '5球', '6球', '7+'],
      //--总进球选项
      shengfu: ['胜/胜', '胜/平', '胜/负', '平/胜', '平/平', '平/负', '负/胜', '负/平', '负/负'] //--半全场选项

    }; // self.ticket = {
    // 	num: 0,
    // 	doing: false
    // };
    //self.itemModel = new item({});

    /**
    *在生成赛事列表的同时，要生成编号与列表数据的映射关系；
    * 并且要根据缓存的投注数据，重新设置列表数据的投注状态
    */

    self.loading = true;
    self.chddDataTools = {}; //--彩虹多多决策投注数据

    self.grcmdNum = {};
    self.list = []; //--赛事列表列表信息//--元素形式：{t: "8月10日  周四 共4场比赛", items: [item1, item2, item3 …………]}

    self.maps = {}; //--赛事编号与列表数据映射关系，数据形式self.maps[saishi_no] = item;

    self.danList = []; //--设单列表数据

    self.betIds = []; //--被选中的玩法标志

    self.evaluate = {
      //--奖金评测对象
      max: 0,
      //--最大奖金值
      min: 0,
      //--最小奖金值
      hasDan: true,
      //--是否是胆拖投注
      list: [] //--评测数据列表

    }; //--缓存的投注数据
    //--数据形式：

    /*
    self.selected = {
    search: {
    peilv: [0, 1, 2],
    saishi: ['yijia', 'yingchao', 'xijia' …………]
    },
    list: {
    saishi_no: {
    shengfu: ["负"],
    rangqiu: ["胜"],
    bifen: ["1-0"],
    jinqiu: [],
    banquanchang: [],
    dan: false
    }
    },
    guoguan:[],//--用户选择的过关串
    beishu: 1
    };
    */

    self.paijiang = {};

    if ($.paijiang) {
      var sid = Gray.$page.getUrlParam('station_id') || '';
      $.paijiang.init({
        dataType: 'lottery',
        sid: sid
      });
      $.paijiang.apis.getInfo({
        lottery_type: 'jczq',
        station_user_id: sid
      });
      self.paijiang = $.paijiang;
    }

    self.paijiang.info = self.paijiang.info || {};
    var prev = window.prevPage;

    if (!prev || prev.has('/project/detail/') || prev.has('/user/shop/details/') || prev == window.config.base_url) {
      //--清空缓存数据
      itou.localJson.setJson('__Jingcai_Selected', {
        data: {}
      });
      itou.sessionData.delData('__Jingcai_SaishiList');
    }

    var localSelected = itou.localJson.getJson('__Jingcai_Selected').data; //--竞彩投注页缓存的投注数据，包含选号数据和筛选条件
    // console.log("localSelected = ", JSON.stringify(localSelected));

    self.selected = localSelected || {}; //--这个数据需要随时更新并存入缓存，存入之前需要剔除多余的数据

    self.selected.search = self.selected.search || {
      peilv: [],
      saishi: [],
      danguan: []
    };
    self.selected.list = self.selected.list || {};
    self.selected.guoguan = self.selected.guoguan || [];
    self.selected.beishu = self.selected.beishu || 1;
    /**
    * 列表缓存数据，在
    */

    var cacheList = itou.sessionData.getData('__Jingcai_SaishiList').data;

    if (cacheList && !(!prev || prev.has('/project/detail/') || prev == window.config.base_url)) {
      //--列表缓存数据存，在需要重新调用接口的位置，需要将self.cacheList设置为null
      self.cacheList = cacheList;
    } else {
      self.cacheList = null;
    } // console.log(self.cacheList);


    self.searchOpts = new searchOpts(self); //---检索项初始化

    self.result.guoguanDef = self.selected.guoguan.length == 0;
    self.result.getMinDan(); //--获得最小可设胆数

    self.jianpan = new jianpan(self); //--小键盘梳理对象

    self.advertising_data = {
      dest_url: '',
      show: false
    };
    self.station_id = itou.localJson.getJson('__entry_info').station_id;
    self.is_allow = false;
    self.hemai_allow = false;
    self.pingceLoading = 'done'; //--奖金评测接口调用状态

    self.currItem = new currItem(self); //--显示更多玩法的控制对象
  };

  model.prototype.getAdvertising = function () {
    var self = this;
    self.apis.getAdertisingStatus().then(function (result) {
      var defer = $.Deferred();

      if (result.data.toString()) {
        self.advertising_data.dest_url = result.data.dest_url;
        var time = localStorage.getItem('advertising_time'); //itou.localJson.getJson('advertising_time');

        var d = new Date();
        var now_time = d.getTime();

        if (!time) {
          self.advertising_data.show = true; //itou.localJson.setJson('advertising_time', now_time);
        } else if (now_time - time > 86400000) {
          self.advertising_data.show = true;
        }

        defer.resolve();
      }

      return defer.promise();
    });
  };

  model.prototype.deleteSelected = function () {
    var self = this,
        selected = self.selected;
    selected.search.peilv = [];
    selected.search.saishi = [];
    selected.search.danguan = [];
    selected.list = {};
    selected.guoguan = [];
    selected.beishu = 1;
  };

  model.prototype.formatData = function (item) {
    //--格式化接口返回的列表数据，返回结果可作为item()函数的参数
    var self = this,
        d = {};
    d.no = item.no || ''; //--编号

    d.id = item.id || 0; //--唯一标识

    d.saishi = item.saishi || ''; //--所属赛事

    d.saishiColor = item.saishiColor || '#666'; //--所属赛事颜色

    d.endTIme = item.endTime; //--投注结束时间

    d.hasDanguan = item.hasDanguan || false; //--是否可以单关

    d.hostName = item.hostName || ''; //--主队名称

    d.hostRank = item.hostRank || ''; //--主队排名

    d.guestName = item.guestName || ''; //--客队名称

    d.guestRank = item.guestRank || ''; //--客队排名

    d.shengfu = item.shengfu || []; //--胜平负赔率

    d.shengfuDanguan = item.shengfuDanguan || false; //--胜平负单关

    d.rangNum = item.rangNum || 0; //--让球胜平负让球数

    d.rangqiu = item.rangqiu || []; //--让球胜平负赔率

    d.rangqiuDanguan = item.rangqiuDanguan || false; //--让球胜平负单关

    d.bifen = item.bifen || {}; //--比分玩法赔率

    d.bifenDanguan = item.bifenDanguan || false; //--让球胜平负单关

    d.jinqiu = item.jinqiu || {}; //--进球数玩法赔率

    d.jinqiuDanguan = item.jinqiuDanguan || false; //--进球数单关

    d.banquanchang = item.banquanchang || {}; //--半全场玩法赔率

    d.banquanchangDanguan = item.banquanchangDanguan || false; //--半全场单关

    return d;
  };

  model.prototype.clearSelected = function () {
    //--清除已不存在的赛事的投注缓存
    var self = this,
        maps = self.maps,
        selected = self.selected.list;

    for (var i in selected) {
      if (!maps[i]) {
        delete selected[i]; //--移除已经不存在的赛事的投注状态
      } else {
        //--移除空选择项
        var num = 0;

        for (var x in selected[i]) {
          var g = selected[i][x];
          num += g.length;
        }

        if (num == 0) {
          delete selected[i];
        }
      }
    } // for(var i in maps){//--追加新增赛事的选择项
    //     if(!selected[i]){
    //         selected[i] = new itemSelected();
    //     }
    // }

  };

  model.prototype.setDan = function (no) {
    //--设胆
    var self = this,
        maps = self.maps,
        selected = self.selected.list;

    if (selected[no]) {
      selected[no].dan = !selected[no].dan;
    }
  };

  model.prototype.clearDan = function () {
    //--清空胆
    var self = this,
        maps = self.maps,
        selected = self.selected.list;

    for (var i in selected) {
      selected[i].dan = false;
    }
  };
  /**
  * 选择投注项
  * @param no    赛事编号
  * @param game  玩法，例如 "shengfu"
  * @param key   键值
  */


  model.prototype.doSelect = function (no, game, key, vm, i) {
    var self = this,
        result = self.result.formated.intro || {},
        maxNum = result.maxNum || 0,
        nuNum = result.nuNum || 0,
        selected = self.selected.list,
        maps = self.maps,
        changciMax = self.setting.changci.max;
    self.isDoselect = true;
    self.clearSelected();

    if (maxNum >= 50 && (!selected[no] || !selected[no][game] || !selected[no][game].contains(key))) {// vm.showToast("单场比赛最多选择50个投注项。");
      // return;
    } else if (nuNum >= changciMax && !selected[no]) {
      vm.showToast('最多选择' + changciMax + '场比赛。');
      return;
    }

    if (!selected[no]) {
      selected[no] = {};
    }

    if (!selected[no][game]) {
      selected[no][game] = [];
    }

    i = i || 0;

    if (maps && maps[no] && maps[no].game[game] && maps[no].game[game].peilv && (maps[no].game[game].peilv[key] || maps[no].game[game].peilv[i][key])) {
      var peilv = maps[no].game[game].peilv[i] ? maps[no].game[game].peilv[i][key] : maps[no].game[game].peilv[key];
      var s = peilv.s;
      var t = key;
      peilv.s = !s;
      selected[no][game].danguan = maps[no].game[game].danguan; //--是否可以单关

      if (!s) {
        if (t) {
          selected[no][game].push(t);
        }
      } else {
        if (t) {
          selected[no][game] = Array.minus(selected[no][game], [t]); //--求二者差集
        }
      }
    } // console.log(self.selected);


    self.clearSelected();
    itou.localJson.setJson('__Jingcai_Selected', {
      data: self.selected
    }); //--保存缓存数据

    self.result.compute(); //--计算

    self.getDanList();
    self.hasMoreGame(no);
  };

  model.prototype.getDanList = function () {
    //--获取设胆列表信息
    var self = this,
        selected = self.selected.list,
        maps = self.maps,
        r = [];

    for (var i in selected) {
      var s = selected[i],
          o = {},
          item = maps[i];
      o.no = i;
      o.pankou = item.info.pankou;
      o.hostname = item.team.host.name;
      o.guestname = item.team.guest.name;
      o.list = [];

      for (var m in s) {
        if (m != 'dan') {
          if (m == 'rangqiu') {
            s[m].pankou = item.info.pankou;
          }

          o.list.push(s[m]);
        }
      }

      o.dan = !!s['dan'];
      r.push(o);
    }

    self.danList = r; //console.log(r);
  };

  model.prototype.getDanNum = function () {
    //--获取胆的数量
    var self = this,
        s = (self.selected || {}).list,
        num = 0;

    for (var i in s) {
      if (s[i].dan) {
        num += 1;
      }
    }

    return num;
  }; //--是否选择了更多玩法


  model.prototype.hasMoreGame = function (no) {
    var self = this,
        s = self.selected.list,
        r = false,
        num = 0,
        maps = ['bifen', 'jinqiu', 'banquanchang'];

    if (!s[no]) {
      r = false;
      num = 0;
    } else {
      var ss = s[no];

      for (var i = 0, len = maps.length; i < len; i++) {
        var key = maps[i];

        if (ss[key] && ss[key].length > 0) {
          r = true;
          num += 1;
        }
      }
    }

    if (self.maps[no]) {
      self.maps[no].info.selectMore = r;
      self.maps[no].info.selectNum = num ? '+' + num : null;
    } else {
      return r;
    }
  };

  model.prototype.getBetIds = function () {
    //--获取选定玩法标识
    var self = this,
        s = self.selected.list,
        maps = self.maps,
        a = [];

    for (var i in s) {
      for (var ii in s[i]) {
        if (ii != 'dan' && maps[i].game[ii].key && s[i][ii].length > 0) {
          a.push(maps[i].game[ii].key);
        }
      }
    }

    self.betIds = a;
    return a;
  };

  model.prototype.formatSelectedForOptimize = function () {
    //--将选中的数据，格式化成奖金优化所需形式
    var self = this,
        selected = self.selected,
        list = selected.list,
        //--选中列表
    guoguan = selected.guoguan,
        //--过关方式
    zhushu = self.result.zhushu,
        //--注数
    changshu = 0,
        //--場數
    maps = self.maps,
        r = [];

    for (var i in list) {
      //--格式化选中数据，获取主队名称、各选定项赔率、以及让球数
      var o = {},
          item = maps[i],
          a = list[i];
      o.hostname = item.team.host.name; //--主队名

      o.pankou = item.info.pankou; //--让球数

      o.opts = []; //--所有选项

      o.peifulv = {}; //--赔付率

      for (var m in a) {
        if (m != 'dan') {
          var pflv = 0; //--临时数据，用于计算赔付率

          var b = a[m],
              g = item.game[m],
              bei = 1; //--乘数，默认1，让球胜平负时为 -1

          if (m == 'rangqiu') {
            bei = -1;
          }

          for (var x = 0, y = b.length; x < y; x++) {
            var t = b[x];
            var peilv = g.peilv;

            if (m == 'bifen') {
              peilv = $.extend({}, peilv[0], peilv[1], peilv[2]);
            }

            var peilv = peilv[t].v * bei; //--获取赔率

            o.opts.push([t, peilv, m, i]); //--选项（胜、平、负等）、对应赔率，玩法，对应no

            pflv += 1 / Math.abs(peilv);
          }

          if (pflv > 0) {
            o.peifulv[m] = 1 / pflv; //--赔付率
          }
        }
      }

      if (o.opts.length > 0) {
        r.push(o);
      }
    }

    changshu = r.length; // console.log(r);

    var zuhe = [];

    for (var i = 0, len = guoguan.length; i < len; i++) {
      //--获得场次组合
      var a = guoguan[i].split('_'),
          l = a[0],
          z = r.combination(l);
      zuhe = zuhe.concat(z);
    }

    console.log(zuhe); // var allZuhe = getZuhes([], zuhe[9].slice(0));
    // console.log(allZuhe);

    var allZuhe = [];

    for (var i = 0, len = zuhe.length; i < len; i++) {
      allZuhe = allZuhe.concat(getZuhes([], zuhe[i].slice(0)));
    }

    console.log(allZuhe); //document.write(JSON.stringify(allZuhe));

    var data = {
      changshu: changshu,
      //--场数
      money: self.result.zhushu * selected.beishu * 2,
      //--总金额
      guoguan: guoguan,
      //--过关
      type: self.result.formated.intro.type,
      //--投注方式：混合或单一
      zuhe: allZuhe,
      //--所有组合
      canHot: guoguan.length == 1 && guoguan[0] == changshu + '_1' //--是否可以博冷博热

    }; // console.log(guoguan.length == 1, guoguan[0] == changshu + "_1", self.evaluate.min >= self.result.zhushu * 2);

    var r = self.act.getFanganData(); // console.log(JSON.stringify({data: data, api: r}));return;

    itou.localJson.setJson('__Jingcai_Optimize', {
      data: data,
      api: r
    }); //--保存缓存数据

    Gray.$page.loadPage('/jingcai/prizereview/?back=' + window.backurl);
    /**
    * 递归函数，用来获取所有组合
    */

    function getZuhes(r, arr) {
      var a = arr[0],
          name = a.hostname,
          pankou = a.pankou,
          peifulv = a.peifulv,
          opts = a.opts,
          b = [name, pankou],
          //--队名、盘口
      c = [];
      console.log(r, b, opts);

      for (var i = 0, len = opts.length; i < len; i++) {
        var d = b.slice(0);
        d[2] = peifulv[opts[i][2]]; //--获得赔付率

        d = d.concat(opts[i]); //console.log(d);

        c.push(d);
      }

      var e = [];

      if (r.length == 0) {
        r = c;

        for (var i = 0, len = r.length; i < len; i++) {
          r[i] = [r[i]];
        }
      } else {
        // console.log(r, c);
        for (var i = 0, len = r.length; i < len; i++) {
          for (var ii = 0, l = c.length; ii < l; ii++) {
            //console.log(r[i])
            var f = r[i].slice(0);
            f.push(c[ii].slice(0));
            e.push(f);
          }
        }

        r = e;
      }

      arr.splice(0, 1);

      if (arr.length == 0) {
        return r;
      } else {
        return getZuhes(r, arr);
      }
    }
  }; //--缓存中被选中的更多玩法选项初始化


  model.prototype.initMore = function () {
    var self = this,
        selected = self.selected,
        list = selected.list,
        maps = self.maps,
        deferred = [];

    for (var i in list) {
      var item = list[i],
          bifen = item.bifen,
          //--比分选项
      jinqiu = item.jinqiu,
          //--总进球选项
      banquanchang = item.banquanchang,
          //--半全场选项
      it = maps[i],
          betid = it.game.shengfu.key || it.game.rangqiu.key; // console.log(i);

      if (bifen && bifen.length > 0 || jinqiu && jinqiu.length > 0 || banquanchang && banquanchang.length > 0) {
        var d = self.apis.loadMore({
          //--获取更多玩法数据
          serial_no: i,
          bet_id: betid
        }).then(function (data) {
          //--格式化数据并重载更多玩法
          var y = 0;

          for (var x in data) {
            if (x != 'token') {
              y = x;
              break;
            }
          }

          var r = $.lottery.jingcai.football.outil.formatItemFromApi(data[y]),
              it = maps[y]; // r.no = y;
          // console.log(r);
          // console.log(it.data);

          it && (it.data = r);
          it && it.loadMore();
        });
        deferred.push(d); //--promise对象存入数组
      }
    }

    if (deferred == 0) {
      //--如果缓存中没有赛事选择了更多玩法
      var defer = $.Deferred();
      defer.resolve();
      return defer.promise();
    } else {
      return $.when.apply(null, deferred); //--执行$.when，当所有更多玩法的异步加载完成后，执行后续计算操作
    }
  };

  model.prototype.getMaxMoney = function () {
    //--获取理论最大奖金，根据注数计算模式不同，计算方式对应setting.zhushu.model == "0"
    var self = this,
        result = self.result,
        formated = result.formated,
        selected = self.selected,
        maps = self.maps,
        maxArr = [],
        maxObj = {},
        optArr = [],
        optObj = {};

    if (formated.intro.enough && selected.guoguan.length > 0) {
      //--场数足够并且选择了过关方式
      var list = selected.list; //--赛事选择列表

      console.log(list);
      console.log(maps);

      for (var i in list) {
        var si = list[i],
            //--单个赛事的选择项，包括是否为胆
        item = maps[i],
            //--赛事数据映射
        arr = [],
            odds = {},
            max = 0; //console.log(item);

        if (!item) {
          continue;
        }

        var pankou = item.info.pankou; //--盘口

        for (var ii in si) {
          //--循环处理选择项
          var opts = si[ii]; //console.log(opts);

          if (itou.outil.is(opts, 'Array') && opts.length > 0) {
            if (ii == 'rangqiu') {
              //--让球胜平负特殊处理
              arr.push(opts.each(function (v) {
                odds[v + '*' + pankou] = item.game[ii].peilv[v].v; //--获取赔率

                return v + '*' + pankou; //--拼接数组
              }));
            } else {
              arr.push(opts); //--拼接数组

              if (ii == 'bifen') {
                var peilv = item.game[ii].peilv;
                peilv = $.extend({}, peilv[0], peilv[1], peilv[2]);
              } else {
                var peilv = item.game[ii].peilv;
              }

              opts.each(function (v) {
                odds[v] = peilv[v].v; //--获取赔率
              });
            }
          }
        }

        console.log(arr, odds);
        var zh = [];

        for (var m = 1, n = arr.length; m <= n; m++) {
          var _arr = arr.combination(m);

          _arr.each(function (v) {
            var __arr = getZuhes([], v.slice(0)); //console.log(v);


            zh = zh.concat(__arr);
          });
        }

        var _zh = null;
        zh.each(function (v) {
          var _odds = getOdds(v);

          if (max < _odds) {
            _zh = v;
          }

          max = max > _odds ? max : _odds; //console.log(max, _odds, v);
        });
        maxArr.push(max);
        maxObj[i] = max; // console.log(_zh);

        var __zh = _zh.each(function (v) {
          return v + '$|$' + i;
        });

        optArr.push(__zh);
        optObj[i] = __zh;
      }

      console.log(maxArr); // console.log(optArr);

      var dan = self.result.formated.intro.dan,
          tuo = self.result.formated.intro.tuo,
          allS = dan.concat(tuo);

      if (tuo.length == 0) {
        tuo = dan.splice(0);
      }

      var tLen = tuo.length,
          dLen = dan.length,
          allZH = [],
          allZH1 = [];
      var guoguan = self.selected.guoguan;
      var $guoguan = $.lottery.jingcai.football.$guoguan;
      guoguan.each(function (val) {
        var arr = val.split('_'),
            a = arr[0],
            b = arr[1];
        var tZH = tuo.combination(a - dLen); //console.log(tZH);

        var __allZH = [[dan], tZH].getZuhes();

        if (b == 1) {
          __allZH.each(function (val) {
            allZH.push(val[0].concat(val[1]));
          });
        } else {
          var d_t_Arr = [];

          __allZH.each(function (val) {
            var _optArr = val[0].concat(val[1]);

            _optArr = _optArr.each(function (_val) {
              return optObj[_val];
            }); //console.log(optObj, _optArr);

            var zh = _optArr.getZuhes(); //console.log(zh);


            zh.each(function (val) {
              var _dan = [],
                  _tuo = [];
              val.each(function (_val) {
                var _arr = _val.split('$|$');

                if (dan.contains(_arr[1])) {
                  _dan.push(_val);
                } else {
                  _tuo.push(_val);
                }
              });
              d_t_Arr.push([_dan, _tuo]);
            });
          }); // var zh = optArr.getZuhes();
          // console.log(zh);


          var __zh = [];
          d_t_Arr.each(function (val) {
            var _dan = val[0],
                _tuo = val[1];

            var _zh = _tuo.combination(a - _dan.length);

            var _zh = [[_dan], _zh].getZuhes();

            _zh = _zh.each(function (_val) {
              return _val[0].concat(_val[1]);
            }); // console.log(_zh);

            __zh = __zh.concat(_zh);
          }); // console.log(__zh);

          var _mps = $guoguan[a][b]; // var __allZH = [];

          __zh.each(function (val) {
            _mps.each(function (_val) {
              if (_val != 1) {
                var ___zh = val.combination(_val);

                allZH1 = allZH1.concat(___zh);
              }
            });
          });
        }
      }); // console.log(allZH);

      var allMoney = 0;
      allZH.each(function (v) {
        var m = 1;
        v.each(function (val) {
          m *= maxObj[val]; //console.log(maxObj[val], val, m);
        });
        allMoney += m * 1;
      }); // console.log(allZH1);

      allZH1.each(function (v) {
        var m = 1;
        v.each(function (val) {
          var _arr = val.split('$|$');

          var item = self.maps[_arr[1]];

          if (item) {
            var game = item.game;

            switch (true) {
              case _arr[0].has('*'):
                //--让球胜平负
                var opt = _arr[0].split('*');

                var odds = game.rangqiu.peilv[opt[0]].v;
                break;

              case _arr[0].has(':') || _arr[0].has('其他'):
                //--比分
                // var odds = game.bifen.peilv[_arr[0]].v;
                if (game.bifen.peilv[0][_arr[0]]) {
                  var odds = game.bifen.peilv[0][_arr[0]].v;
                }

                if (game.bifen.peilv[1][_arr[0]]) {
                  var odds = game.bifen.peilv[1][_arr[0]].v;
                }

                if (game.bifen.peilv[2][_arr[0]]) {
                  var odds = game.bifen.peilv[2][_arr[0]].v;
                }

                break;

              case _arr[0].has('/'):
                //--半全场
                var odds = game.banquanchang.peilv[_arr[0]].v;
                break;

              case _arr[0].has('球') || _arr[0] == '7+':
                //--总进球
                var odds = game.jinqiu.peilv[_arr[0]].v;
                break;

              default:
                var odds = game.shengfu.peilv[_arr[0]].v;
                break;
            } // console.log(odds, _arr[0]);


            m *= odds;
          }
        });
        allMoney += m * 1;
      }); // console.log(allMoney * 2);

      return allMoney * 2 * self.selected.beishu;
    }
    /**
    * 递归函数，用来获取所有组合
    */


    function getZuhes(r, arr) {
      //console.log(arr);
      var a = arr[0],
          c = a.slice(0); //console.log(r,b, opts);

      var e = [];

      if (r.length == 0) {
        r = c;

        for (var i = 0, len = r.length; i < len; i++) {
          // r[i] = [r[i]];
          if (checnJianZhong([r[i]])) {
            e.push([r[i]]);
          }
        }

        r = e;
      } else {
        // console.log(r, c);
        for (var i = 0, len = r.length; i < len; i++) {
          for (var ii = 0, l = c.length; ii < l; ii++) {
            //console.log(r[i])
            var f = r[i].slice(0);
            f.push(c[ii]);

            if (checnJianZhong(f)) {
              e.push(f);
            }
          }
        }

        r = e;
      }

      arr.splice(0, 1);

      if (arr.length == 0) {
        return r;
      } else {
        return getZuhes(r, arr);
      }
    }

    function checnJianZhong(arr) {
      //--判断组合是否可以建忠
      var maps = window.jianzhong.maps,
          _arr = null,
          max = 0,
          r = true;

      for (var i = 0, len = arr.length; i < len; i++) {
        var ms = maps[arr[i]]; //console.log(arr, arr[i], ms);

        for (var ii = 0; ii < len; ii++) {
          if (i != ii) {
            var v = arr[ii];

            if (!ms.contains(v)) {
              r = false;
              break;
            }
          }
        }
      } // console.log(arr,r);


      return r;
    }

    function getOdds(arr) {
      //--获取赔率总和
      var max = 0;
      arr.each(function (v) {
        max += odds[v];
      });
      return max;
    }
  };

  model.prototype.getMaxMoney1 = function () {
    //--获取理论最大奖金，根据注数计算模式不同，计算方式对应setting.zhushu.model == "1"
    //--该模式无胆拖
    var self = this,
        result = self.result,
        formated = result.formated,
        selected = self.selected,
        maps = self.maps,
        $selected = {},
        $odds = {},
        money = 0; // console.log(formated, selected);

    if (formated.intro.enough && selected.guoguan.length > 0) {
      //--场数足够并且选择了过关方式
      var list = selected.list; //--赛事选择列表

      /**
      * 循环处理数据，生成能够被计算对象使用的数据
      */

      for (var i in list) {
        var si = list[i],
            //--单个赛事的选择项，包括是否为胆
        item = maps[i],
            //--赛事数据映射
        arr = [],
            odds = {};

        if (!item) {
          continue;
        }

        var pankou = item.info.pankou; //--盘口

        for (var ii in si) {
          //--循环处理选择项
          var opts = si[ii]; //console.log(opts);

          if (itou.outil.is(opts, 'Array') && opts.length > 0) {
            if (ii == 'rangqiu') {
              //--让球胜平负特殊处理
              arr.push(opts.each(function (v) {
                odds[v + '*' + pankou] = item.game[ii].peilv[v].v; //--获取赔率

                return v + '*' + pankou; //--拼接数组
              }));
            } else {
              arr.push(opts); //--拼接数组

              if (ii == 'bifen') {
                var peilv = item.game[ii].peilv;
                peilv = $.extend({}, peilv[0], peilv[1], peilv[2]);
              } else {
                var peilv = item.game[ii].peilv;
              }

              opts.each(function (v) {
                try {
                  odds[v] = peilv[v].v; //--获取赔率
                } catch (error) {
                  odds[v] = '';
                } // odds[v] = peilv[v].v;//--获取赔率

              });
            }
          }
        } // console.log(arr, odds);


        $selected[i] = arr;
        $odds[i] = odds;
      }

      match_computer.init({
        selected: $selected,
        odds: $odds,
        guoguan: selected.guoguan.join(','),
        beishu: selected.beishu
      }); // itou.moneyComputer.do();//--进行计算

      console.log($selected, $odds);
      money = match_computer.getMaxMoney();
      result.zhushu = match_computer.getCount() / selected.beishu;
      console.log(money);
    }

    return money * 1;
  }; //--获取竞彩仅限单关的配置


  model.prototype.getJczqLimitConfig = function () {
    var shop = itou.localJson.getJson('/user/shop/details/'); //--店铺id信息

    var self = this;
    return itou.get({
      url: 'station/getJczqLimitConfig',
      data: {
        station_user_id: shop.id
      }
    }).then(function () {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      // data.all = 1;
      return data.all == 1;
    });
  }; //--获取彩种匹配赛事匹配的推荐数量


  model.prototype.getBetMatchGrcmdNum = function () {
    var shop = itou.localJson.getJson('/user/shop/details/'); //--店铺id信息

    var self = this;
    return itou.get({
      url: 'recommend/getBetMatchGrcmdNum',
      data: {
        lottery_style: 'jczq',
        station_uid: shop.id
      },
      rnd: false,
      notoken: true,
      noToast: true
    }).then(function () {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      self.grcmdNum = data;

      if (Object.keys(data).length > 0) {
        itou.baiduHm('投注页', '推单入口展示'); //--百度统计
      }
    });
  }; //--获取彩虹多多决策投注信息


  model.prototype.getChddDataTools = function () {
    var shop = itou.localJson.getJson('/user/shop/details/'); //--店铺id信息

    var self = this;
    return itou.get({
      url: 'chdd/dataTools',
      data: {
        lottery_style: 'jczq',
        station_user_id: shop.id,
        station_uuid: shop.uuid
      },
      rnd: false,
      notoken: true,
      noToast: true
    }).then(function (data) {
      var chddDataTools = {};
      var num = 0;

      for (var i in data) {
        var _item = data[i] || {},
            content = _item.content || {},
            obj = {};

        obj.text = content.text;
        obj.type = content.type;
        obj.id = _item.match_id2;
        obj.color = content.color; //--字体颜色

        if (content.bgcolor) {
          //--有背景颜色
          obj.bgcolor = content.bgcolor; //--背景颜色
        } else if (obj.color) {
          //--无背景颜色，将字体颜色做饱和度处理
          var color = obj.color.replace('#', '').split(''),
              arr = [];
          arr.push(Number('0x' + color[0] + color[1]));
          arr.push(Number('0x' + color[2] + color[3]));
          arr.push(Number('0x' + color[4] + color[5]));
          obj.bgcolor = 'rgba(' + arr.join(',') + ', 0.3)';
        } else {
          obj.bgcolor = '#ffffff';
        }

        obj.style = 'color:' + obj.color + ';background-color:' + obj.bgcolor; // if(obj.text == '异动警报'){obj.className = 'alarm'}
        // else if(obj.text == '冷门预警'){obj.className = 'coldside'}
        // else if(obj.text == '信心操盘'){obj.className = 'faith'}
        // else if(obj.text == '四星信心'){obj.className = 'fourstar'}

        chddDataTools[i] = obj;

        if (num++ == 0) {
          itou.baiduHm('竞足投注', '决策工具展示'); //--百度统计

          itou.baiduHm('竞足投注', '欧赔预警数展示'); //--百度统计
        }
      }

      console.log(chddDataTools);
      self.chddDataTools = chddDataTools;
    });
  };

  var _data = new model();

  window.pageLoad = function () {
    var vm = new Vue({
      el: '#vue2_el',
      components: {
        'bet-guide': bet_guide
      },
      data: function data() {
        return _data;
      },
      beforeDestroy: function beforeDestroy() {
        var self = this;

        if (self.position) {
          self.position.init({
            //--重定位功能初始化
            daysData: self.list,
            //--日期数据对象
            openkey: 'isShow',
            //--是否展示的键值名
            type: 'danchang',
            //--类型
            //el: config.platform == "wx"? "body": "html"
            // el: '#vue2_el'
            el: config.isAPP ? 'html' : 'body' // el: "body"

          });
          self.position.setPosition();
        }
      },
      mounted: function mounted() {
        console.debug('jingcai:Vue ready');
        var self = this,
            $data = self.$data;
        var hasOpened = itou.sessionData.getData('__jingcai_hasOpened');

        if (!hasOpened.key) {
          $data.showOpenMsg = true; //--显示页面第一次打开时的提示信息，3秒后隐藏

          window.setTimeout(function () {
            $data.showOpenMsg = false;
          }, 3000);
          itou.sessionData.setData('__jingcai_hasOpened', {
            key: true
          });
        }
      },
      created: function created() {
        var self = this,
            $data = self.$data;
        $data.vm = self; //$data.getAdvertising();

        if (!itou.localJson.getJson('is_allow' + self.station_id).status) {
          $data.apis.getAllowUser().then(function (result) {
            self.is_allow = result.is_allow ? 'open' : 'close';
            itou.localJson.setJson('is_allow' + self.station_id, {
              status: result.is_allow ? 'open' : 'close'
            }, 600);
          });
        } else {
          self.is_allow = itou.localJson.getJson('is_allow' + self.station_id).status;
        }

        if (!itou.localJson.getJson('share_buy' + self.station_id).status) {
          $data.apis.getHemaiStatus().then(function (result) {
            self.hemai_allow = result.share_buy ? 'open' : 'close';
            itou.localJson.setJson('share_buy' + self.station_id, {
              status: result.share_buy ? 'open' : 'close'
            }, 600);
          });
        } else {
          self.hemai_allow = itou.localJson.getJson('share_buy' + self.station_id).status;
        } // $data.apis.getAllowUser()
        // 	.then(function(result){
        // 		self.is_allow = result.is_allow? 'open':'close';
        // 	})
        // $data.apis.getHemaiStatus()
        // 	.then(function(result){
        // 		self.hemai_allow = result.share_buy? 'open':'close';
        // 	})
        // $data.apis.getSearchSaishi()//--获取检索项赛事列表
        //     .then(function (data) {
        //         if (data.league_list) {
        //             data.league_list.each(function (v) {
        //                 $data.searchOpts.saishi.opts.push({t: v, v: v, s: false});
        //             });
        //         }
        //     });


        self.doRefresh() //--获取页面列表数据
        .then(function () {
          console.log('isShow = ', $data.list[0] && $data.list[0].isShow);
          console.log(self.position && (prevPage.has('/match2/') || prevPage.has('/confirm/') || prevPage.has('/hemai/add/') || prevPage.has('/jingcai/prizereview/') || prevPage.has('/project/detail/')));

          if (self.position && (prevPage.has('/match2/') || prevPage.has('/confirm/') || prevPage.has('/hemai/add/') || prevPage.has('/jingcai/prizereview/') || prevPage.has('/project/detail/'))) {
            self.position.init({
              //--重定位功能初始化
              daysData: self.list,
              //--日期数据对象
              openkey: 'isShow',
              //--是否展示的键值名
              type: 'danchang',
              //--类型
              //el: config.platform == "wx"? "body": "html"
              // el: '#vue2_el'
              el: config.isAPP ? 'html' : 'body' // el: "body"

            });
            self.position["do"]();
          }

          console.log('isShow = ', $data.list[0] && $data.list[0].isShow);
        }).then(function () {
          // itou.timeLine.stamp("Vue-created-doRefresh-ok", "页面数据读取完毕");
          self.$nextTick(function () {
            if (Object.keys(self.maps).length) {
              var _self$$refs, _self$$refs$betGuide;

              self === null || self === void 0 ? void 0 : (_self$$refs = self.$refs) === null || _self$$refs === void 0 ? void 0 : (_self$$refs$betGuide = _self$$refs.betGuide) === null || _self$$refs$betGuide === void 0 ? void 0 : _self$$refs$betGuide.start();
            }
          });
        });
      },
      computed: {
        hasSearchOpts: function hasSearchOpts() {
          //--计算：是否已经有选中的选择项
          var self = this,
              $data = self.$data,
              search = $data.selected.search; // console.log("$data.selected = ", $data.selected);
          // console.log("search = ", search);

          return search.peilv.length > 0 || search.saishi.length > 0 || search.danguan.length > 0;
        },
        guoguanHtml: function guoguanHtml() {
          var self = this,
              $data = self.$data,
              guoguan = $data.selected.guoguan,
              dan = $data.result.formated.intro.dan.length,
              str = ''; // console.log(guoguan);

          if (guoguan.length == 0) {
            str = '选择过关';
          } else {
            str = guohuan[0].replace('_', '串');

            if (dan) {
              str = str + '(<span class=\'fontred font12\'>胆</span>)';
            }
          }

          return str;
        },
        canOptimize: function canOptimize() {
          //--是否支持奖金优化
          var self = this,
              $data = self.$data,
              selected = $data.selected,
              result = $data.result,
              guoguan = selected.guoguan,
              money = result.zhushu * selected.beishu * 2;
          var danLen = result && result.formated && result.formated.intro && result.formated.intro.Dan && result.formated.intro.Dan.length; // console.log(result.zhushu);

          if (result.zhushu < 2) {
            return false;
          } else if (!danLen && guoguan.length > 0 && result.zhushu <= 500 && money <= 100000) {
            var r = true;

            for (var i = 0, len = guoguan.length; i < len; i++) {
              var a = guoguan[i].split('_');

              if (a[1] != '1') {
                r = false;
                break;
              }
            }

            return r;
          } else {
            return false;
          }
        },
        pingceStatus: function pingceStatus() {
          //--奖金评测接口调用状态
          var self = this,
              pingceLoading = self.pingceLoading,
              key = 'pingce_status_key',
              r = {};
          r.status = pingceLoading;
          console.log(pingceLoading);
          itou.outil.timmer.clearTimmer(key);

          if (pingceLoading == 'doing') {
            itou.outil.timmer.newTimmer({
              key: key,
              timeout: 5000,
              fun: function fun() {
                console.log(pingceLoading == 'doing');
                itou.outil.timmer.clearTimmer(key);

                if (pingceLoading == 'doing') {
                  self.pingceLoading = 'error';
                  r.status = pingceLoading;
                }
              }
            });
          }

          return r;
        },
        eLst_max_desc: function eLst_max_desc() {
          return _.orderBy(this.evaluate.list, 'max', 'desc');
        },
        canGuess: function canGuess() {
          //--是否可以转为猜一场
          var result = this.result;
          var selected = this.selected;
          var sList = selected.list; //--选中的列表

          var no = Object.keys(sList); //--选中的赛事no集合

          console.log(no.length, result.formated.intro.danguan);

          if (no.length == 1 && !result.formated.intro.danguan) {
            //--只选择了一场比赛,并且不是单关
            var _item2 = this.maps[no[0]];

            if (!_item2) {
              return false;
            }

            var pankou = _item2.info.pankou || 0;
            console.log(pankou); // if(pankou == 1 || pankou == -1){//--盘口为1或者是-1

            var opts = sList[no[0]]; //--选中项数据

            opts.banquanchang || (opts.banquanchang = []); //--半全场选中项

            opts.bifen || (opts.bifen = []); //--比分选中项

            opts.jinqiu || (opts.jinqiu = []); //--总进球选中项

            opts.rangqiu || (opts.rangqiu = []); //--让球胜平负选中项

            opts.shengfu || (opts.shengfu = []); //--胜平负选中项

            if (opts.banquanchang.length == 0 && opts.bifen.length == 0 && opts.jinqiu.length == 0) {
              if (opts.rangqiu.length > 0 && opts.shengfu.length == 0) {
                return true;
              }

              if (opts.rangqiu.length == 0 && opts.shengfu.length > 0) {
                return true;
              }
            } // }

          }

          return false;
        }
      },
      methods: {
        danguanOnly: function danguanOnly() {
          //--是否仅允许提交单关
          //--比分、半全场、总进球数玩法以及相互组合玩法仅支持单关
          var _this$selected$list = this.selected.list,
              list = _this$selected$list === void 0 ? {} : _this$selected$list; // const dgTypes = ['banquanchang', 'bifen', 'jinqiu'];

          var dgTypes = ['banquanchang', 'bifen'];
          var r = [];

          for (var no in list) {
            var match = list[no] || {};

            for (var pType in match) {
              if (!dgTypes.includes(pType) && match[pType].length) {
                r.push(pType);
              }
            }
          }

          console.log(r);
          return r.length == 0;
        },
        checkDanguan: function checkDanguan() {
          var _this = this;

          return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee4() {
            var limitOpen, _this$selected$guogua, guoguan;

            return regenerator_default.a.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.prev = 0;
                    _context4.next = 3;
                    return _this.$data.getJczqLimitConfig();

                  case 3:
                    limitOpen = _context4.sent;
                    _context4.next = 9;
                    break;

                  case 6:
                    _context4.prev = 6;
                    _context4.t0 = _context4["catch"](0);
                    limitOpen = false;

                  case 9:
                    if (limitOpen) {
                      _context4.next = 11;
                      break;
                    }

                    return _context4.abrupt("return", true);

                  case 11:
                    _this$selected$guogua = _this.selected.guoguan, guoguan = _this$selected$guogua === void 0 ? [] : _this$selected$guogua;

                    if (!_this.danguanOnly()) {
                      _context4.next = 22;
                      break;
                    }

                    if (!(guoguan.length == 1 && guoguan[0] == '1_1')) {
                      _context4.next = 17;
                      break;
                    }

                    return _context4.abrupt("return", true);

                  case 17:
                    //--并非仅选中单关
                    // this.layer.tip.show('比分、半全场、总进球数玩法仅支持单关，请调整后再提交');
                    _this.showMsgBox('<div style="margin-bottom: 20px">本店【比分】【半全场】玩法仅支持单关，请修改后重试</div>', '', '', '知道了');

                    itou.baiduHm('投注页拦截', '玩法串关限制'); //--百度统计

                    return _context4.abrupt("return", false);

                  case 20:
                    _context4.next = 23;
                    break;

                  case 22:
                    return _context4.abrupt("return", true);

                  case 23:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, null, [[0, 6]]);
          }))();
        },
        // back: function(){
        // 	Gray.$page.loadPage("/");
        // },
        close_adv: function close_adv() {
          var self = this;
          self.advertising_data.show = false;
          var d = new Date();
          var now_time = d.getTime();
          localStorage.setItem('advertising_time', now_time); //itou.localJson.setJson('advertising_time', now_time);
        },
        look_adv_details: function look_adv_details() {
          var self = this,
              $data = self.$data;
          $data.apis.getAdvNum().then(function (result) {
            Gray.$page.loadPage(self.advertising_data.dest_url);
          });
        },
        showDays: function showDays(index) {
          //--显示或隐藏某一天的赛事列表
          var self = this,
              $data = self.$data,
              list = $data.list;

          if (list[index]) {
            list[index].isShow = !list[index].isShow;
          }
        },
        showSaishiMore: function showSaishiMore(key) {
          //--显示或隐藏赛事的更多投注项列表
          var self = this,
              $data = self.$data,
              maps = $data.maps; //console.log(maps[key], maps[key].info);

          if (maps[key] && maps[key].info) {
            // maps[key].info.isShow = !maps[key].info.isShow;
            if (window.myDrapload) {
              window.myDrapload.isLockUp = true; // console.log(window.myDrapload);
            }

            $data.currItem.showMore(key);
          }
        },

        /**
         * @function getResult
         * @description 获取最近几天比赛结果
         */
        getResult: function getResult() {
          var $data = this.$data;

          if ($data.apis.getResult.loaded) {
            return Promise.resolve();
          }

          return $data.apis.getResult() //--获取最近几天比赛结果
          .then(function (data) {
            $data.apis.getResult.loaded = true;
            var date = new Date();

            for (var i = 0; i < 3; i++) {
              //--计算最近3天，得到第一个有结果的天数
              var d = date.DateAdd('d', i * -1),
                  f = d.Dateformat('yyyy-MM-DD'),
                  v = data[f];
              var o = {};
              o.v = v;
              o.i = i;

              switch (i) {
                case 0:
                  o.t = '今日';
                  break;

                case 1:
                  o.t = '昨日';
                  break;

                default:
                  o.t = d.Dateformat('mm月dd日');
              }

              if (v > 0) {
                $data.helper.resultList.push(o);
              }
            }
          });
        },
        showTopHelp: function () {
          var _showTopHelp = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee5() {
            var self, $data, helper;
            return regenerator_default.a.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.getResult();

                  case 2:
                    self = this, $data = self.$data, helper = $data.helper;
                    helper.showTop = !helper.showTop;

                  case 4:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));

          function showTopHelp() {
            return _showTopHelp.apply(this, arguments);
          }

          return showTopHelp;
        }(),
        closeTopHelp: function closeTopHelp() {
          //--显示右上角帮助信息
          var self = this,
              $data = self.$data,
              helper = $data.helper;
          helper.showTop = false;
        },
        showRangqiuHelp: function showRangqiuHelp(key) {
          //--显示让球帮助信息
          var self = this,
              $data = self.$data,
              maps = $data.maps,
              helper = $data.helper;

          if (helper.rangqiu.isShow) {
            //--当提示信息显示时，关闭提示信息
            helper.rangqiu.isShow = false;
            return;
          }

          if (!maps[key]) {
            return;
          }

          if (!maps[key].game.rangqiu) {
            return;
          }

          if (!maps[key].game.rangqiu.open) {
            return;
          } //--未受注时不显示提示信息


          if (maps[key] && maps[key].info && maps[key].team) {
            var info = maps[key].info,
                team = maps[key].team,
                host = team.host.name,
                guest = team.guest.name,
                num = info.pankou;
            helper.rangqiu.info = {
              host: host,
              guest: guest,
              num: num
            };
            helper.rangqiu.isShow = true;
          }
        },
        doSelectSaishi: function doSelectSaishi(no, game, key, i) {
          //--选择赛事
          var self = this,
              $data = self.$data,
              maps = $data.maps;

          if (maps && maps[no] && maps[no].game && maps[no].game[game] && maps[no].game[game].peilv) {
            var peilv = !isFinite(i) ? maps[no].game[game].peilv : maps[no].game[game].peilv[i]; //console.log(peilv[key]);

            if (isNaN(peilv[key].v)) {
              return;
            }

            $data.doSelect(no, game, key, vm, i);
          }
        },

        /**
         * @function getSearchSaishi
         * @description 获取检索项赛事列表
         */
        getSearchSaishi: function getSearchSaishi() {
          var $data = this.$data;

          if ($data.apis.getSearchSaishi.loaded) {
            return Promise.resolve();
          }

          return $data.apis.getSearchSaishi() //--获取检索项赛事列表
          .then(function (data) {
            $data.apis.getSearchSaishi.loaded = true;

            if (data.league_list) {
              data.league_list.each(function (v) {
                $data.searchOpts.saishi.opts.push({
                  t: v,
                  v: v,
                  s: false
                });
              });
            }
          });
        },
        showSearch: function () {
          var _showSearch = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee6() {
            var self, $data, searchOpts;
            return regenerator_default.a.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.getSearchSaishi();

                  case 2:
                    self = this, $data = self.$data, searchOpts = $data.searchOpts;
                    searchOpts.tempReset();
                    searchOpts.formatOpts();
                    searchOpts.isShow = !searchOpts.isShow;

                  case 6:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));

          function showSearch() {
            return _showSearch.apply(this, arguments);
          }

          return showSearch;
        }(),
        selectSearch: function selectSearch(type, index) {
          //--选中筛选项
          var self = this,
              $data = self.$data,
              searchOpts = $data.searchOpts;
          searchOpts.doSelectSearch(type, index);
        },
        doSelectAll: function doSelectAll() {
          //--选中所有赛事筛选项
          var self = this,
              $data = self.$data,
              searchOpts = $data.searchOpts;
          searchOpts.selectAll();
        },
        doUnSelectAll: function doUnSelectAll() {
          //--取消选中所有赛事选项
          var self = this,
              $data = self.$data,
              searchOpts = $data.searchOpts;
          searchOpts.unselectAll();
        },
        doRefresh: function doRefresh() {
          //--刷新页面，加载数据
          var self = this,
              $data = self.$data;
          var list = [];
          $data.maps = {}; // $data.getChddDataTools();

          $data.getBetMatchGrcmdNum();
          return $data.apis.getList().then(function (data) {
            console.log(data);
            $data.loading = false;
            itou.sessionData.setData('__Jingcai_SaishiList', {
              data: data
            });
            $data.showBody = true;
            var r = $.lottery.jingcai.football.outil.formatFromApi(data); // console.log(r);

            var x = 0;

            for (var i = 0, l = r.length; i < l; i++) {
              var d = r[i],
                  o = {
                intro: d.t,
                //--时间、场次等信息
                isShow: d.isShow,
                //--是否展开当天赛事
                oddsWaringNum: 0 //--欧赔锦囊预警数量

              },
                  items = d.items,
                  itemsOrderBySort = {},
                  rs = []; //console.log(o);

              o.items = [];
              list.push(o); // $data.list = list;

              var len = items.length;

              for (var ii = 0; ii < len; ii++) {
                //--循环数据，将生成的行数据以sort为key存入json，用来实现以sort排序
                var it = new item(items[ii], $data); //--赛事实例化

                var sort = it.info.sort;

                if (!itemsOrderBySort[sort]) {
                  itemsOrderBySort[sort] = [];
                }

                itemsOrderBySort[sort].push(it);
              }

              var xx = 0; //--数据条数计算

              for (var ii in itemsOrderBySort) {
                x += 1;
                var its = itemsOrderBySort[ii]; //--赛事实例化

                xx += its.length; // rs.push(it);//console.log(ii, it);

                rs = rs.concat(its);

                if (x % 5 == 0 || xx == len) {
                  //--每5条一次延时，将数据延时插入页面
                  itou.outil.doSetTimeout(o.items, rs, x * 5);
                  rs = [];
                }
              }
            }

            $data.list = list;
            $data.clearSelected(); //---移除已不存在的选择项
          }).then(function () {
            return $data.initMore(); //--初始化缓存中选中的更多玩法
          }).then(function () {
            $data.result.compute();
            $data.getDanList();
          });
        },
        doSearch: function doSearch() {
          //--执行检索
          var self = this,
              $data = self.$data;
          $data.searchOpts.getSelectedFromTemp(); //--选择项数据更新

          self.doRefresh(); //--执行数据检索

          self.showSearch(); //--滚动到最顶部

          if (this.$refs.gotoview) {
            this.$refs.gotoview.scrollIntoView({
              block: 'center'
            });
          }
        },
        doSetDan: function doSetDan(no) {
          //--设胆
          var self = this,
              $data = self.$data,
              s = $data.selected.list,
              f = $data.result.formated,
              danLen = f.intro.dan.length,
              guoguan = $data.result.formatedGuoguan,
              min = $data.result.minDan || 0; //console.log(min);

          if (!s[no].dan && danLen + 1 > min) {
            self.showToast('设胆个数不能超过最小过关场数');
            return;
          }

          $data.setDan(no);
          $data.result.compute();
          $data.getDanList();
          itou.localJson.setJson('__Jingcai_Selected', {
            data: self.selected
          }); //--保存缓存数据
        },
        doOptimize: function doOptimize() {
          //--奖金优化
          var self = this,
              $data = self.$data;

          if (!self.canOptimize) {
            return;
          }

          var baseSetting = itou.baseSetting,
              simplify = itou.simplify;

          if (baseSetting.simplify && !simplify.youhua) {
            vm.showMsgBox('很抱歉，欧洲杯期间奖金优化功能暂时关闭！');
            return;
          }

          $data.formatSelectedForOptimize();
        },
        gotoMatch: function gotoMatch(item, page) {
          //--查看战绩分析
          page = page || 'history';
          var matchid = item.info.id;

          if (!matchid || matchid == '0') {
            return;
          }

          if (page == 'odds') {
            itou.baiduHm('竞足投注', '决策工具点击'); //--百度统计
          } else if (page == 'recommend') {
            itou.baiduHm('投注页', '推单入口点击'); //--百度统计
          } else {
            itou.baiduHm('投注页', '赛事分析点击'); //--百度统计
          }

          if (item.team.reversion) {
            var msg = '<span class=\'fontred\'>您将要打开的数据页面中，主客场位置与当前投注页相反，</span>投注时请确认主客队位置，一旦提交，我们将按照您的所选选项执行。<br />';
            vm.showMsgBox(msg, '重要提醒', 'beforeGotoMatch_close', '确定');
            vm.$on('msgbox_close', function (msg) {
              if (msg == 'beforeGotoMatch_close') {
                // Gray.$page.loadPage("/match/history/?doreset=1&lotteryId=90&matchid=" + matchid + "&back=" + this.backurl);
                Gray.$page.loadPage('/match2/?pageName=' + page + '&matchid=' + matchid + '&lotteryId=90&lottStyle=jczq&back=' + this.backurl);
              }
            });
          } else {
            // Gray.$page.loadPage("/match/history/?doreset=1&lotteryId=90&matchid=" + matchid + "&back=" + this.backurl);
            Gray.$page.loadPage('/match2/?pageName=' + page + '&matchid=' + matchid + '&lotteryId=90&lottStyle=jczq&back=' + this.backurl);
          }
        },
        doDeleteSelected: function doDeleteSelected() {
          var self = this,
              $data = self.$data;
          $data.deleteSelected();
        },
        doSave: function doSave() {
          var self = this;
          self.act.doSave();
        },
        doSubmit: function doSubmit() {
          var self = this;
          self.act.doSubmit();
        },
        doHemai: function doHemai() {
          var self = this;
          self.act.doHemai();
        },
        checkSubmit: function checkSubmit() {
          //--检查数据并弹出提交按钮
          var self = this;

          if (!self.act.checkData()) {
            return;
          }

          itou.outil.checkLogin().then(function (is_login) {
            if (is_login) {
              self.$refs.submitlayer.init({
                //--唤起提交按钮弹层
                vm: self,
                is_allow: self.is_allow,
                hemai_allow: self.hemai_allow,
                doSave: self.doSave,
                doSubmit: self.doSubmit,
                doHemai: self.doHemai
              });
            }
          });
        },
        gotoInfo: function gotoInfo(item) {
          //--跳转到中转页，中转页再欧赔锦囊页面
          var matchId = item.id;
          var shop = itou.localJson.getJson('/user/shop/details/'); //--店铺id信息

          itou.baiduHm('竞足投注', '决策工具点击'); //--百度统计

          var url = '/monetize/tochdd/'; //--大神推单中转页面

          url += '?type=' + item.type + '_data'; //--需要跳转到合作方大师榜

          url += '&back=' + window.backurl; //--返回路径

          url += '&match_id=' + matchId;
          url += '&id=' + shop.id; //--店铺ID

          Gray.$page.loadPage(url); //--跳转到中转页面
        },
        gotoChddList: function gotoChddList() {
          var shop = itou.localJson.getJson('/user/shop/details/'); //--店铺id信息

          itou.baiduHm('竞足投注', '欧赔预警数点击'); //--百度统计

          var url = '/monetize/tochdd/'; //--大神推单中转页面

          url += '?type=' + 'europe_index'; //--需要跳转到合作方

          url += '&id=' + shop.id; //--店铺ID

          url += '&back=' + window.backurl; //--返回路径

          Gray.$page.loadPage(url); //--跳转到中转页面
        },
        gotoGuessone: function gotoGuessone() {
          var _this2 = this;

          var isSelected = !this.result.formated.intro.text;

          if (isSelected) {
            var text = '切换玩法将清除已选项，确定切换吗？';
            this.$root.$refs.layer.confirm.show({
              text: text,
              buttons: [{
                text: '取消'
              }, {
                text: '确定',
                fun: function fun() {
                  _this2.doDeleteSelected();

                  _this2.$data.clearSelected(); //---移除已不存在的选择项


                  _this2.$data.result.compute();

                  var back = Gray.$page.getUrlParam('back') || '/';
                  Gray.$page.loadPage("/jingcai/guessone/?back=".concat(encodeURIComponent(back)));
                }
              }]
            });
            return;
          }

          this.doDeleteSelected();
          this.$data.clearSelected(); //---移除已不存在的选择项

          this.$data.result.compute();
          var back = Gray.$page.getUrlParam('back') || '/';
          Gray.$page.loadPage("/jingcai/guessone/?back=".concat(encodeURIComponent(back)));
        },
        copyToGuessone: function copyToGuessone() {
          //--将选中项拷贝到猜一场页面
          itou.baiduHm('竞彩足球', '猜一场点击'); //--百度统计

          var selected = this.selected;
          var sList = selected.list; //--选中的列表

          var no = Object.keys(sList)[0]; //--选中的赛事no

          var r = [];
          var maps = {
            '胜': 3,
            '平': 1,
            '负': 0
          };

          if (no) {
            var _item3 = this.maps[no];
            var opts = sList[no];

            if (_item3 && opts) {
              var _loop = function _loop(i) {
                var bet_id = _item3.game[i].key;
                opts[i].forEach(function (opt) {
                  if (!isNaN(maps[opt])) {
                    r.push([no, bet_id, maps[opt], 0]);
                  }
                });
              };

              for (var i in opts) {
                _loop(i);
              }
            }
          }

          console.log(r);
          itou.localData.setData('__jc_copy_to_guessone', {
            list: r
          });
          this.doDeleteSelected();
          this.$data.clearSelected(); //---移除已不存在的选择项

          this.$data.result.compute();
          var back = Gray.$page.getUrlParam('back') || '/';
          Gray.$page.loadPage("/jingcai/guessone/?back=".concat(encodeURIComponent(back)));
        },

        /**
         * @function doClearSelected
         * @description 弹窗提示，清空选项
         */
        doClearSelected: function doClearSelected() {
          var _this3 = this;

          var noWarning = itou.localData.getData('__tz_del_warn').noWarning || 0;

          if (noWarning != 1) {
            this.$refs.layer.alert.warning({
              text: "\u662F\u5426\u6E05\u7A7A\u5DF2\u6295\u6CE8\u9009\u9879\uFF1F",
              checkbox: {
                checked: noWarning == 1,
                fun: function fun() {
                  noWarning ^= 1;
                },
                text: '不再提示，直接清空。'
              },
              buttons: [{
                text: '否'
              }, {
                text: '是',
                fun: function fun() {
                  _this3.unSelectAll();

                  itou.localData.setData('__tz_del_warn', {
                    noWarning: noWarning
                  });
                }
              }]
            });
          } else {
            this.unSelectAll();
          }
        },

        /**
         * @function unSelectAll
         * @description 清空选中的选项
         */
        unSelectAll: function unSelectAll() {
          var sList = this.selected.list || {};
          var maps = this.maps;

          for (var x in sList) {
            var _item4 = maps[x];

            if (_item4 && _item4.game) {
              for (var y in _item4.game) {
                var game = _item4.game[y];

                if (game !== null && game !== void 0 && game.peilv) {
                  for (var z in game.peilv) {
                    game.peilv[z].s = false;
                  }
                }
              }
            }
          }

          this.act.currAction = '';
          this.doDeleteSelected();
          this.$data.clearSelected(); //---移除已不存在的选择项

          this.$data.result.compute();
          this.$refs.layer.tip.succesTop({
            text: '投注选项已清空'
          });
        }
      }
    });

    function doDropload() {
      window.myDrapload = $('#dropload-body').dropload({
        scrollArea: window,
        autoLoad: false,
        domUp: {
          // 下方DOM
          domClass: 'dropload-down',
          domLoad: '<div class="dropload-load"><div><span class="loading"></span>加载中...</div></div>',
          domUpdate: '<div class="dropload-update">↑松开刷新</div>',
          domNoData: '<div class="dropload-noData"><div>没有更多数据了</div></div>'
        },
        distance: 100,
        loadUpFn: function loadUpFn(me) {
          me.lock();
          vm.cacheList = null;
          vm.doDeleteSelected();
          vm.doRefresh().then(function () {
            me.unlock();
          });
          me.resetload();
        }
      });
    }

    window.setTimeout(doDropload, 500);
  };
});

/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(26);

__webpack_require__(57);

/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(26);

__webpack_require__(58);

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], options);



/* harmony default export */ __webpack_exports__["default"] = (_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].locals || {});

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], options);



/* harmony default export */ __webpack_exports__["default"] = (_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].locals || {});

/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

exports.__esModule = true;
exports.raf = raf;
exports.doubleRaf = doubleRaf;
exports.cancelRaf = cancelRaf;

var _ = __webpack_require__(11);
/**
 * requestAnimationFrame polyfill
 */


var prev = Date.now();
/* istanbul ignore next */

function fallback(fn) {
  var curr = Date.now();
  var ms = Math.max(0, 16 - (curr - prev));
  var id = setTimeout(fn, ms);
  prev = curr + ms;
  return id;
}
/* istanbul ignore next */


var root = _.isServer ? global : window;
/* istanbul ignore next */

var iRaf = root.requestAnimationFrame || fallback;
/* istanbul ignore next */

var iCancel = root.cancelAnimationFrame || root.clearTimeout;

function raf(fn) {
  return iRaf.call(root, fn);
} // double raf for animation


function doubleRaf(fn) {
  raf(function () {
    raf(fn);
  });
}

function cancelRaf(id) {
  iCancel.call(root, id);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(52)))

/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.range = range;
exports.formatNumber = formatNumber;
exports.addNumber = addNumber;

function range(num, min, max) {
  return Math.min(Math.max(num, min), max);
}

function trimExtraChar(value, _char, regExp) {
  var index = value.indexOf(_char);
  var prefix = '';

  if (index === -1) {
    return value;
  }

  if (_char === '-' && index !== 0) {
    return value.slice(0, index);
  }

  if (_char === '.' && value.match(/^(\.|-\.)/)) {
    prefix = index ? '-0' : '0';
  }

  return prefix + value.slice(0, index + 1) + value.slice(index).replace(regExp, '');
}

function formatNumber(value, allowDot, allowMinus) {
  if (allowDot === void 0) {
    allowDot = true;
  }

  if (allowMinus === void 0) {
    allowMinus = true;
  }

  if (allowDot) {
    value = trimExtraChar(value, '.', /\./g);
  } else {
    value = value.split('.')[0];
  }

  if (allowMinus) {
    value = trimExtraChar(value, '-', /-/g);
  } else {
    value = value.replace(/-/, '');
  }

  var regExp = allowDot ? /[^-0-9.]/g : /[^-0-9]/g;
  return value.replace(regExp, '');
} // add num and avoid float number


function addNumber(num1, num2) {
  var cardinal = Math.pow(10, 10);
  return Math.round((num1 + num2) * cardinal) / cardinal;
}

/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.sortChildren = sortChildren;

function flattenVNodes(vnodes) {
  var result = [];

  function traverse(vnodes) {
    vnodes.forEach(function (vnode) {
      result.push(vnode);

      if (vnode.componentInstance) {
        traverse(vnode.componentInstance.$children.map(function (item) {
          return item.$vnode;
        }));
      }

      if (vnode.children) {
        traverse(vnode.children);
      }
    });
  }

  traverse(vnodes);
  return result;
} // sort children instances by vnodes order


function sortChildren(children, parent) {
  var componentOptions = parent.$vnode.componentOptions;

  if (!componentOptions || !componentOptions.children) {
    return;
  }

  var vnodes = flattenVNodes(componentOptions.children);
  children.sort(function (a, b) {
    return vnodes.indexOf(a.$vnode) - vnodes.indexOf(b.$vnode);
  });
}

/***/ })

/******/ });