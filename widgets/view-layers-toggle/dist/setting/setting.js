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
/******/ 	return __webpack_require__(__webpack_require__.s = "./view-layers-toggle-experience-builder/widgets/view-layers-toggle/src/setting/setting.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./view-layers-toggle-experience-builder/widgets/view-layers-toggle/src/setting/setting.tsx":
/*!**************************************************************************************************!*\
  !*** ./view-layers-toggle-experience-builder/widgets/view-layers-toggle/src/setting/setting.tsx ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar jimu_core_1 = __webpack_require__(/*! jimu-core */ \"jimu-core\");\r\nvar jimu_for_builder_1 = __webpack_require__(/*! jimu-for-builder */ \"jimu-for-builder\");\r\nvar setting_components_1 = __webpack_require__(/*! jimu-ui/setting-components */ \"jimu-ui/setting-components\");\r\nvar default_1 = __webpack_require__(/*! ./translations/default */ \"./view-layers-toggle-experience-builder/widgets/view-layers-toggle/src/setting/translations/default.ts\");\r\nvar Setting = /** @class */ (function (_super) {\r\n    __extends(Setting, _super);\r\n    function Setting(props) {\r\n        var _a, _b, _c;\r\n        var _this = _super.call(this, props) || this;\r\n        _this.onMapSelected = function (useMapWidgetIds) {\r\n            _this.props.onSettingChange({\r\n                id: _this.props.id,\r\n                useMapWidgetIds: useMapWidgetIds,\r\n            });\r\n        };\r\n        _this.onTextChange = function (event) {\r\n            _this.setState({ layerTextareaValue: event.target.value });\r\n            _this.props.onSettingChange({\r\n                id: _this.props.id,\r\n                config: _this.props.config.set(\"layerUrls\", event.target.value.split(\"\\n\")),\r\n            });\r\n        };\r\n        console.log(\"TYPEOF undefined\", typeof ((_a = _this.props.config) === null || _a === void 0 ? void 0 : _a.layerUrls) === undefined);\r\n        _this.state = {\r\n            layerTextareaValue: ((_b = _this.props.config) === null || _b === void 0 ? void 0 : _b.layerUrls) === undefined\r\n                ? \"\"\r\n                : (_c = _this.props.config) === null || _c === void 0 ? void 0 : _c.layerUrls.join(\"\\n\"),\r\n        };\r\n        return _this;\r\n    }\r\n    Setting.prototype.render = function () {\r\n        return (jimu_core_1.React.createElement(\"div\", { className: \"view-layers-toggle-setting\" },\r\n            jimu_core_1.React.createElement(setting_components_1.SettingSection, { title: this.props.intl.formatMessage({\r\n                    id: \"selectedMapLabel\",\r\n                    defaultMessage: default_1.default.selectedMap,\r\n                }) },\r\n                jimu_core_1.React.createElement(setting_components_1.SettingRow, null,\r\n                    jimu_core_1.React.createElement(setting_components_1.JimuMapViewSelector, { onSelect: this.onMapSelected, useMapWidgetIds: this.props.useMapWidgetIds }))),\r\n            jimu_core_1.React.createElement(setting_components_1.SettingSection, { title: this.props.intl.formatMessage({\r\n                    id: \"layers\",\r\n                    defaultMessage: default_1.default.layers,\r\n                }) },\r\n                jimu_core_1.React.createElement(setting_components_1.SettingRow, null,\r\n                    jimu_core_1.React.createElement(\"textarea\", { className: \"w-100 p-1\", style: { whiteSpace: \"nowrap\", minHeight: \"100px\" }, value: this.state.layerTextareaValue, onChange: this.onTextChange })))));\r\n    };\r\n    return Setting;\r\n}(jimu_for_builder_1.BaseWidgetSetting));\r\nexports.default = Setting;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi92aWV3LWxheWVycy10b2dnbGUtZXhwZXJpZW5jZS1idWlsZGVyL3dpZGdldHMvdmlldy1sYXllcnMtdG9nZ2xlL3NyYy9zZXR0aW5nL3NldHRpbmcudHN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vdmlldy1sYXllcnMtdG9nZ2xlLWV4cGVyaWVuY2UtYnVpbGRlci93aWRnZXRzL3ZpZXctbGF5ZXJzLXRvZ2dsZS9zcmMvc2V0dGluZy9zZXR0aW5nLnRzeD83OGEyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlYWN0IH0gZnJvbSBcImppbXUtY29yZVwiO1xyXG5pbXBvcnQgeyBCYXNlV2lkZ2V0U2V0dGluZywgQWxsV2lkZ2V0U2V0dGluZ1Byb3BzIH0gZnJvbSBcImppbXUtZm9yLWJ1aWxkZXJcIjtcclxuaW1wb3J0IHtcclxuICBKaW11TWFwVmlld1NlbGVjdG9yLFxyXG4gIFNldHRpbmdSb3csXHJcbiAgU2V0dGluZ1NlY3Rpb24sXHJcbn0gZnJvbSBcImppbXUtdWkvc2V0dGluZy1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBkZWZhdWx0STE4bk1lc3NhZ2VzIGZyb20gXCIuL3RyYW5zbGF0aW9ucy9kZWZhdWx0XCI7XHJcbmltcG9ydCB7IElNQ29uZmlnIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xyXG5cclxuaW50ZXJmYWNlIElTdGF0ZSB7XHJcbiAgbGF5ZXJUZXh0YXJlYVZhbHVlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNldHRpbmcgZXh0ZW5kcyBCYXNlV2lkZ2V0U2V0dGluZzxcclxuICBBbGxXaWRnZXRTZXR0aW5nUHJvcHM8SU1Db25maWc+LFxyXG4gIElTdGF0ZVxyXG4+IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICBcIlRZUEVPRiB1bmRlZmluZWRcIixcclxuICAgICAgdHlwZW9mIHRoaXMucHJvcHMuY29uZmlnPy5sYXllclVybHMgPT09IHVuZGVmaW5lZFxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBsYXllclRleHRhcmVhVmFsdWU6XHJcbiAgICAgICAgdGhpcy5wcm9wcy5jb25maWc/LmxheWVyVXJscyA9PT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICA/IFwiXCJcclxuICAgICAgICAgIDogdGhpcy5wcm9wcy5jb25maWc/LmxheWVyVXJscy5qb2luKFwiXFxuXCIpLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIG9uTWFwU2VsZWN0ZWQgPSAodXNlTWFwV2lkZ2V0SWRzOiBzdHJpbmdbXSkgPT4ge1xyXG4gICAgdGhpcy5wcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xyXG4gICAgICBpZDogdGhpcy5wcm9wcy5pZCxcclxuICAgICAgdXNlTWFwV2lkZ2V0SWRzOiB1c2VNYXBXaWRnZXRJZHMsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBvblRleHRDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBsYXllclRleHRhcmVhVmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcclxuXHJcbiAgICB0aGlzLnByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XHJcbiAgICAgIGlkOiB0aGlzLnByb3BzLmlkLFxyXG4gICAgICBjb25maWc6IHRoaXMucHJvcHMuY29uZmlnLnNldChcclxuICAgICAgICBcImxheWVyVXJsc1wiLFxyXG4gICAgICAgIGV2ZW50LnRhcmdldC52YWx1ZS5zcGxpdChcIlxcblwiKVxyXG4gICAgICApLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWV3LWxheWVycy10b2dnbGUtc2V0dGluZ1wiPlxyXG4gICAgICAgIDxTZXR0aW5nU2VjdGlvblxyXG4gICAgICAgICAgdGl0bGU9e3RoaXMucHJvcHMuaW50bC5mb3JtYXRNZXNzYWdlKHtcclxuICAgICAgICAgICAgaWQ6IFwic2VsZWN0ZWRNYXBMYWJlbFwiLFxyXG4gICAgICAgICAgICBkZWZhdWx0TWVzc2FnZTogZGVmYXVsdEkxOG5NZXNzYWdlcy5zZWxlY3RlZE1hcCxcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxTZXR0aW5nUm93PlxyXG4gICAgICAgICAgICA8SmltdU1hcFZpZXdTZWxlY3RvclxyXG4gICAgICAgICAgICAgIG9uU2VsZWN0PXt0aGlzLm9uTWFwU2VsZWN0ZWR9XHJcbiAgICAgICAgICAgICAgdXNlTWFwV2lkZ2V0SWRzPXt0aGlzLnByb3BzLnVzZU1hcFdpZGdldElkc31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvU2V0dGluZ1Jvdz5cclxuICAgICAgICA8L1NldHRpbmdTZWN0aW9uPlxyXG5cclxuICAgICAgICA8U2V0dGluZ1NlY3Rpb25cclxuICAgICAgICAgIHRpdGxlPXt0aGlzLnByb3BzLmludGwuZm9ybWF0TWVzc2FnZSh7XHJcbiAgICAgICAgICAgIGlkOiBcImxheWVyc1wiLFxyXG4gICAgICAgICAgICBkZWZhdWx0TWVzc2FnZTogZGVmYXVsdEkxOG5NZXNzYWdlcy5sYXllcnMsXHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8U2V0dGluZ1Jvdz5cclxuICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xMDAgcC0xXCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiLCBtaW5IZWlnaHQ6IFwiMTAwcHhcIiB9fVxyXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmxheWVyVGV4dGFyZWFWYWx1ZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblRleHRDaGFuZ2V9XHJcbiAgICAgICAgICAgID48L3RleHRhcmVhPlxyXG4gICAgICAgICAgPC9TZXR0aW5nUm93PlxyXG4gICAgICAgIDwvU2V0dGluZ1NlY3Rpb24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFLQTtBQU9BO0FBQUE7QUFJQTs7QUFBQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQTlCQTtBQUtBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBQ0E7QUFxQkE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQU9BO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQVVBO0FBQ0E7QUFBQTs7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./view-layers-toggle-experience-builder/widgets/view-layers-toggle/src/setting/setting.tsx\n");

/***/ }),

/***/ "./view-layers-toggle-experience-builder/widgets/view-layers-toggle/src/setting/translations/default.ts":
/*!**************************************************************************************************************!*\
  !*** ./view-layers-toggle-experience-builder/widgets/view-layers-toggle/src/setting/translations/default.ts ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.default = {\r\n    selectedMap: \"Map\",\r\n    layers: \"Layers\"\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi92aWV3LWxheWVycy10b2dnbGUtZXhwZXJpZW5jZS1idWlsZGVyL3dpZGdldHMvdmlldy1sYXllcnMtdG9nZ2xlL3NyYy9zZXR0aW5nL3RyYW5zbGF0aW9ucy9kZWZhdWx0LnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vdmlldy1sYXllcnMtdG9nZ2xlLWV4cGVyaWVuY2UtYnVpbGRlci93aWRnZXRzL3ZpZXctbGF5ZXJzLXRvZ2dsZS9zcmMvc2V0dGluZy90cmFuc2xhdGlvbnMvZGVmYXVsdC50cz85MDc2Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcclxuICBzZWxlY3RlZE1hcDogXCJNYXBcIixcclxuICBsYXllcnM6IFwiTGF5ZXJzXCJcclxufTtcclxuIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./view-layers-toggle-experience-builder/widgets/view-layers-toggle/src/setting/translations/default.ts\n");

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