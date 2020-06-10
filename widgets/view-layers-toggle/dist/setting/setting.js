define(["jimu-core","jimu-for-builder","jimu-ui/setting-components"], function(__WEBPACK_EXTERNAL_MODULE_jimu_core__, __WEBPACK_EXTERNAL_MODULE_jimu_for_builder__, __WEBPACK_EXTERNAL_MODULE_jimu_ui_setting_components__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./your-extensions/widgets/view-layers-toggle/src/setting/setting.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./your-extensions/widgets/view-layers-toggle/src/setting/setting.tsx":
/*!****************************************************************************!*\
  !*** ./your-extensions/widgets/view-layers-toggle/src/setting/setting.tsx ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar jimu_core_1 = __webpack_require__(/*! jimu-core */ \"jimu-core\");\r\nvar jimu_for_builder_1 = __webpack_require__(/*! jimu-for-builder */ \"jimu-for-builder\");\r\nvar setting_components_1 = __webpack_require__(/*! jimu-ui/setting-components */ \"jimu-ui/setting-components\");\r\nvar default_1 = __webpack_require__(/*! ./translations/default */ \"./your-extensions/widgets/view-layers-toggle/src/setting/translations/default.ts\");\r\nvar Setting = /** @class */ (function (_super) {\r\n    __extends(Setting, _super);\r\n    function Setting(props) {\r\n        var _a, _b, _c;\r\n        var _this = _super.call(this, props) || this;\r\n        _this.onMapSelected = function (useMapWidgetIds) {\r\n            _this.props.onSettingChange({\r\n                id: _this.props.id,\r\n                useMapWidgetIds: useMapWidgetIds,\r\n            });\r\n        };\r\n        _this.onTextChange = function (event) {\r\n            _this.setState({ layerTextareaValue: event.target.value });\r\n            _this.props.onSettingChange({\r\n                id: _this.props.id,\r\n                config: _this.props.config.set(\"layerUrls\", event.target.value.split(\"\\n\")),\r\n            });\r\n        };\r\n        console.log(\"TYPEOF undefined\", typeof ((_a = _this.props.config) === null || _a === void 0 ? void 0 : _a.layerUrls) === undefined);\r\n        _this.state = {\r\n            layerTextareaValue: ((_b = _this.props.config) === null || _b === void 0 ? void 0 : _b.layerUrls) === undefined\r\n                ? \"\"\r\n                : (_c = _this.props.config) === null || _c === void 0 ? void 0 : _c.layerUrls.join(\"\\n\"),\r\n        };\r\n        return _this;\r\n    }\r\n    Setting.prototype.render = function () {\r\n        return (jimu_core_1.React.createElement(\"div\", { className: \"view-layers-toggle-setting\" },\r\n            jimu_core_1.React.createElement(setting_components_1.SettingSection, { title: this.props.intl.formatMessage({\r\n                    id: \"selectedMapLabel\",\r\n                    defaultMessage: default_1.default.selectedMap,\r\n                }) },\r\n                jimu_core_1.React.createElement(setting_components_1.SettingRow, null,\r\n                    jimu_core_1.React.createElement(setting_components_1.JimuMapViewSelector, { onSelect: this.onMapSelected, useMapWidgetIds: this.props.useMapWidgetIds }))),\r\n            jimu_core_1.React.createElement(setting_components_1.SettingSection, { title: this.props.intl.formatMessage({\r\n                    id: \"layers\",\r\n                    defaultMessage: default_1.default.layers,\r\n                }) },\r\n                jimu_core_1.React.createElement(setting_components_1.SettingRow, null,\r\n                    jimu_core_1.React.createElement(\"textarea\", { className: \"w-100 p-1\", style: { whiteSpace: \"nowrap\", minHeight: \"100px\" }, value: this.state.layerTextareaValue, onChange: this.onTextChange })))));\r\n    };\r\n    return Setting;\r\n}(jimu_for_builder_1.BaseWidgetSetting));\r\nexports.default = Setting;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy92aWV3LWxheWVycy10b2dnbGUvc3JjL3NldHRpbmcvc2V0dGluZy50c3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy92aWV3LWxheWVycy10b2dnbGUvc3JjL3NldHRpbmcvc2V0dGluZy50c3g/ODVhMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWFjdCB9IGZyb20gXCJqaW11LWNvcmVcIjtcclxuaW1wb3J0IHsgQmFzZVdpZGdldFNldHRpbmcsIEFsbFdpZGdldFNldHRpbmdQcm9wcyB9IGZyb20gXCJqaW11LWZvci1idWlsZGVyXCI7XHJcbmltcG9ydCB7XHJcbiAgSmltdU1hcFZpZXdTZWxlY3RvcixcclxuICBTZXR0aW5nUm93LFxyXG4gIFNldHRpbmdTZWN0aW9uLFxyXG59IGZyb20gXCJqaW11LXVpL3NldHRpbmctY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgZGVmYXVsdEkxOG5NZXNzYWdlcyBmcm9tIFwiLi90cmFuc2xhdGlvbnMvZGVmYXVsdFwiO1xyXG5pbXBvcnQgeyBJTUNvbmZpZyB9IGZyb20gXCIuLi9jb25maWdcIjtcclxuXHJcbmludGVyZmFjZSBJU3RhdGUge1xyXG4gIGxheWVyVGV4dGFyZWFWYWx1ZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXR0aW5nIGV4dGVuZHMgQmFzZVdpZGdldFNldHRpbmc8XHJcbiAgQWxsV2lkZ2V0U2V0dGluZ1Byb3BzPElNQ29uZmlnPixcclxuICBJU3RhdGVcclxuPiB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcclxuICAgICAgXCJUWVBFT0YgdW5kZWZpbmVkXCIsXHJcbiAgICAgIHR5cGVvZiB0aGlzLnByb3BzLmNvbmZpZz8ubGF5ZXJVcmxzID09PSB1bmRlZmluZWRcclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgbGF5ZXJUZXh0YXJlYVZhbHVlOlxyXG4gICAgICAgIHRoaXMucHJvcHMuY29uZmlnPy5sYXllclVybHMgPT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgPyBcIlwiXHJcbiAgICAgICAgICA6IHRoaXMucHJvcHMuY29uZmlnPy5sYXllclVybHMuam9pbihcIlxcblwiKSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBvbk1hcFNlbGVjdGVkID0gKHVzZU1hcFdpZGdldElkczogc3RyaW5nW10pID0+IHtcclxuICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcclxuICAgICAgaWQ6IHRoaXMucHJvcHMuaWQsXHJcbiAgICAgIHVzZU1hcFdpZGdldElkczogdXNlTWFwV2lkZ2V0SWRzLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgb25UZXh0Q2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgbGF5ZXJUZXh0YXJlYVZhbHVlOiBldmVudC50YXJnZXQudmFsdWUgfSk7XHJcblxyXG4gICAgdGhpcy5wcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xyXG4gICAgICBpZDogdGhpcy5wcm9wcy5pZCxcclxuICAgICAgY29uZmlnOiB0aGlzLnByb3BzLmNvbmZpZy5zZXQoXHJcbiAgICAgICAgXCJsYXllclVybHNcIixcclxuICAgICAgICBldmVudC50YXJnZXQudmFsdWUuc3BsaXQoXCJcXG5cIilcclxuICAgICAgKSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlldy1sYXllcnMtdG9nZ2xlLXNldHRpbmdcIj5cclxuICAgICAgICA8U2V0dGluZ1NlY3Rpb25cclxuICAgICAgICAgIHRpdGxlPXt0aGlzLnByb3BzLmludGwuZm9ybWF0TWVzc2FnZSh7XHJcbiAgICAgICAgICAgIGlkOiBcInNlbGVjdGVkTWFwTGFiZWxcIixcclxuICAgICAgICAgICAgZGVmYXVsdE1lc3NhZ2U6IGRlZmF1bHRJMThuTWVzc2FnZXMuc2VsZWN0ZWRNYXAsXHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8U2V0dGluZ1Jvdz5cclxuICAgICAgICAgICAgPEppbXVNYXBWaWV3U2VsZWN0b3JcclxuICAgICAgICAgICAgICBvblNlbGVjdD17dGhpcy5vbk1hcFNlbGVjdGVkfVxyXG4gICAgICAgICAgICAgIHVzZU1hcFdpZGdldElkcz17dGhpcy5wcm9wcy51c2VNYXBXaWRnZXRJZHN9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L1NldHRpbmdSb3c+XHJcbiAgICAgICAgPC9TZXR0aW5nU2VjdGlvbj5cclxuXHJcbiAgICAgICAgPFNldHRpbmdTZWN0aW9uXHJcbiAgICAgICAgICB0aXRsZT17dGhpcy5wcm9wcy5pbnRsLmZvcm1hdE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICBpZDogXCJsYXllcnNcIixcclxuICAgICAgICAgICAgZGVmYXVsdE1lc3NhZ2U6IGRlZmF1bHRJMThuTWVzc2FnZXMubGF5ZXJzLFxyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFNldHRpbmdSb3c+XHJcbiAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTAwIHAtMVwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgd2hpdGVTcGFjZTogXCJub3dyYXBcIiwgbWluSGVpZ2h0OiBcIjEwMHB4XCIgfX1cclxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5sYXllclRleHRhcmVhVmFsdWV9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25UZXh0Q2hhbmdlfVxyXG4gICAgICAgICAgICA+PC90ZXh0YXJlYT5cclxuICAgICAgICAgIDwvU2V0dGluZ1Jvdz5cclxuICAgICAgICA8L1NldHRpbmdTZWN0aW9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBS0E7QUFPQTtBQUFBO0FBSUE7O0FBQUE7QUFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUE5QkE7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUNBO0FBcUJBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFPQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFVQTtBQUNBO0FBQUE7OyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./your-extensions/widgets/view-layers-toggle/src/setting/setting.tsx\n");

/***/ }),

/***/ "./your-extensions/widgets/view-layers-toggle/src/setting/translations/default.ts":
/*!****************************************************************************************!*\
  !*** ./your-extensions/widgets/view-layers-toggle/src/setting/translations/default.ts ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.default = {\r\n    selectedMap: \"Map\",\r\n    layers: \"Layers\",\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy92aWV3LWxheWVycy10b2dnbGUvc3JjL3NldHRpbmcvdHJhbnNsYXRpb25zL2RlZmF1bHQudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy92aWV3LWxheWVycy10b2dnbGUvc3JjL3NldHRpbmcvdHJhbnNsYXRpb25zL2RlZmF1bHQudHM/NjVmYiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XHJcbiAgc2VsZWN0ZWRNYXA6IFwiTWFwXCIsXHJcbiAgbGF5ZXJzOiBcIkxheWVyc1wiLFxyXG59O1xyXG4iXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./your-extensions/widgets/view-layers-toggle/src/setting/translations/default.ts\n");

/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamltdS1jb3JlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiamltdS1jb3JlXCI/YzY5NSJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///jimu-core\n");

/***/ }),

/***/ "jimu-for-builder":
/*!***********************************!*\
  !*** external "jimu-for-builder" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_for_builder__;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamltdS1mb3ItYnVpbGRlci5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImppbXUtZm9yLWJ1aWxkZXJcIj8xY2IyIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2Zvcl9idWlsZGVyX187Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///jimu-for-builder\n");

/***/ }),

/***/ "jimu-ui/setting-components":
/*!*********************************************!*\
  !*** external "jimu-ui/setting-components" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_setting_components__;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamltdS11aS9zZXR0aW5nLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqaW11LXVpL3NldHRpbmctY29tcG9uZW50c1wiPzYyYmEiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfc2V0dGluZ19jb21wb25lbnRzX187Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///jimu-ui/setting-components\n");

/***/ })

/******/ })});;