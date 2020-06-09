define(["jimu-core","jimu-ui","jimu-for-builder","jimu-ui/setting-components","jimu-ui/data-source-selector","jimu-ui/rich-text-editor"],(function(e,t,n,o,a,i){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var a=t[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(o,a,function(t){return e[t]}.bind(null,a));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=560)}({11:function(e,t){e.exports=a},169:function(e,t){e.exports='<svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h12v12H0z"></path><path d="M.5 10h11a.5.5 0 110 1H.5a.5.5 0 110-1zm0-3h6a.5.5 0 010 1h-6a.5.5 0 010-1zm0-3h9a.5.5 0 010 1h-9a.5.5 0 010-1zm0-3h7a.5.5 0 010 1h-7a.5.5 0 010-1z" fill="#000" fill-rule="nonzero"></path></g></svg>'},170:function(e,t){e.exports='<svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h12v12H0z"></path><path d="M11.5 10a.5.5 0 110 1H.5a.5.5 0 110-1h11zm-3-3a.5.5 0 010 1h-5a.5.5 0 010-1h5zm3-3a.5.5 0 110 1H.5a.5.5 0 010-1h11zm-3-3a.5.5 0 010 1h-5a.5.5 0 010-1h5z" fill="#000" fill-rule="nonzero"></path></g></svg>'},171:function(e,t){e.exports='<svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h12v12H0z"></path><path d="M11.5 10a.5.5 0 110 1H.5a.5.5 0 110-1h11zm0-3a.5.5 0 110 1h-6a.5.5 0 010-1h6zm0-3a.5.5 0 110 1h-9a.5.5 0 010-1h9zm0-3a.5.5 0 110 1h-7a.5.5 0 010-1h7z" fill="#000" fill-rule="nonzero"></path></g></svg>'},177:function(e,t,n){"use strict";var o=this;Object.defineProperty(t,"__esModule",{value:!0});var a=n(3),i=n(4);t.getTextFormats=function(e){var t=e&&e.typography.fontFamilyBase||"Avenir Next",n=e&&e.typography.lineHeights.medium||"1.5",o=e&&e.body.color,a=e&&e.typography.fontSizeBase||"14px";return{font:t,linespace:n,color:o,size:a=i.styleUtils.remToPixel(a)}},t.mixinFormats=function(e,t){void 0===t&&(t={});var n=o.getTextFormats(e);return t=a.lodash.assign({},n,t)}},178:function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 32"><path d="M19.6 26.267a2.8 2.8 0 01-2.8 2.8h-3.733C5.85 29.067 0 23.217 0 16S5.85 2.933 13.067 2.933H16.8a2.8 2.8 0 010 5.6h-3.733a7.467 7.467 0 100 14.934H16.8a2.8 2.8 0 012.8 2.8zm8.4-2.8h3.733a7.467 7.467 0 100-14.934H28a2.8 2.8 0 010-5.6h3.733C38.95 2.933 44.8 8.783 44.8 16s-5.85 13.067-13.067 13.067H28a2.8 2.8 0 010-5.6zM15.867 13.2h13.067a2.8 2.8 0 010 5.6H15.867a2.8 2.8 0 010-5.6z"></path></svg>'},3:function(t,n){t.exports=e},4:function(e,n){e.exports=t},43:function(e,t){e.exports=i},560:function(e,t,n){"use strict";var o,a=this&&this.__extends||(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var i=n(3),r=n(6),s=n(7),l=n(4),c=n(11),u=n(561),p=n(572),h=n(177),d=n(575),f=function(e){function t(t){var n=e.call(this,t)||this;return n.supportedTypes=i.Immutable([c.AllDataSourceTypes.FeatureLayer,c.AllDataSourceTypes.FeatureQuery]),n.mixinFormats=function(e){void 0===e&&(e={});var t=n.props.appTheme;return e=h.mixinFormats(t,e)},n.editWidgetConfig=function(e){n.props.onSettingChange({id:n.props.id,config:e})},n.onToggleUseDataEnabled=function(e){n.props.onSettingChange({id:n.props.id,useDataSourcesEnabled:e})},n.onDataSourceSelected=function(e,t){if(e){var o=e.map((function(e){return{dataSourceId:e.dataSourceJson&&e.dataSourceJson.id,rootDataSourceId:e.rootDataSourceId}}));n.props.onSettingChange({id:n.props.id,useDataSources:o})}},n.onDataSourceRemoved=function(e,t){t&&t.dataSourceJson&&n.props.onSettingChange({id:n.props.id,useDataSources:n.props.useDataSources.filter((function(e){return e&&e.dataSourceId!==t.dataSourceJson.id})).asMutable({deep:!0})})},n.onStyleChange=function(e,t){var o=n.props.config;n.editWidgetConfig(o.setIn(["style",e],t))},n.translate=function(e,t){var o=n.props.intl,a=t?r.defaultMessages:d.default;return o?o.formatMessage({id:e,defaultMessage:a[e]}):e},n.state={editor:null},n.mutableStoreManager=window._appWindow._mutableStoreManager,n.getDataSourceIds=n.getDataSourceIds.bind(n),n}return a(t,e),t.prototype.componentDidMount=function(){var e=this.mutableStoreManager?this.mutableStoreManager.getStateValue([this.props.id,"editor"]):null;this.setState({editor:e})},t.prototype.componentDidUpdate=function(e){if(this.props.mutableStateVersion!==e.mutableStateVersion){var t=this.mutableStoreManager?this.mutableStoreManager.getStateValue([this.props.id,"editor"]):null;this.setState({editor:t})}},t.prototype.getDataSourceIds=function(){var e=this.props,t=e.useDataSources;if(e.useDataSourcesEnabled&&t)return i.Immutable(t.map((function(e){return e.dataSourceId})))},t.prototype.render=function(){var e=this,t=this.props,n=t.isInlineEditing,o=t.config.style,a=(void 0===o?{}:o).wrap;return i.React.createElement("div",{className:"widget-setting-text jimu-widget-setting"},i.React.createElement(s.SettingSection,null,i.React.createElement(s.SettingRow,null,i.React.createElement(c.DataSourceSelector,{isMultiple:!0,selectedDataSourceIds:this.getDataSourceIds(),types:this.supportedTypes,useDataSourcesEnabled:this.props.useDataSourcesEnabled,onToggleUseDataEnabled:this.onToggleUseDataEnabled,onSelect:this.onDataSourceSelected,onRemove:this.onDataSourceRemoved}))),i.React.createElement(s.SettingSection,null,i.React.createElement(s.SettingRow,{flow:"no-wrap",label:this.translate("wrap")},i.React.createElement(l.Switch,{checked:a,onChange:function(){return e.onStyleChange("wrap",!a)}}))),!!this.state.editor&&i.React.createElement(s.SettingSection,null,i.React.createElement(s.SettingRow,{flow:"no-wrap",label:this.props.intl.formatMessage({id:"textFormat",defaultMessage:l.defaultMessages.textFormat})},i.React.createElement(p.ClearFormats,{quillEnabled:n,source:n?"user":"api",editor:this.state.editor})),i.React.createElement(s.SettingRow,null,i.React.createElement(u.Formats,{quillEnabled:n,source:n?"user":"api",editor:this.state.editor,mixFormats:this.mixinFormats,dataSourceIds:this.getDataSourceIds()}))))},t.mapExtraStateProps=function(e,t){var n=e&&e.appStateInBuilder,o=n&&n.widgetsMutableStateVersion&&n.widgetsMutableStateVersion[t.id],a=n&&n.widgetsRuntimeInfo&&n.widgetsRuntimeInfo[t.id];return{appTheme:n.theme,isInlineEditing:a&&a.isInlineEditing,mutableStateVersion:o}},t}(r.BaseWidgetSetting);t.default=f},561:function(e,t,n){"use strict";var o,a=this&&this.__extends||(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),i=this&&this.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e};Object.defineProperty(t,"__esModule",{value:!0});var r,s=n(3),l=n(562),c=n(43),u=function(e){function t(t){var n=e.call(this,t)||this;return n.getStyle=function(){return s.css(r||(r=i(["\n      > * {\n        user-select: none;\n      }\n    "],["\n      > * {\n        user-select: none;\n      }\n    "])))},n.onEditorChange=function(){var e=n.props,t=e.editor,o=e.quillEnabled?t.getSelection(!1):n.getAllSelection(t);o&&(n.selection=o,n.updateSelectionFormats(o))},n.updateSelectionFormats=function(e){var t=n.props.editor.getFormat(e);t=n.prepareFormats(t),n.setState({formats:t})},n.prepareFormats=function(e){return n.props.mixFormats&&(e=n.props.mixFormats(e)),e&&e.link&&e.link.link&&(e=s.lodash.assign({},e,{link:e.link.link})),e=c.richTextUtils.handlingExceptionalFormats(e)},n.getAllSelection=function(e){var t=e.getLength();return{index:0,length:t=t>0?t-1:t}},n.getSelection=function(){return n.selection},n.handleChange=function(e,t,o){var a=n.props,i=a.editor,r=a.source,s=a.quillEnabled,l={type:o,key:e,value:t,selection:n.getSelection(),enabled:s,source:r};c.richTextUtils.formatText(i,l)},n.state={formats:{}},n}return a(t,e),t.prototype.componentDidMount=function(){var e=this.props,t=e.editor,n=e.quillEnabled;this.debounce=s.lodash.debounce(this.onEditorChange.bind(this),100),t.on("editor-change",this.debounce),t.on("scroll-optimize",this.debounce);var o=this.prepareFormats({});this.setState({formats:o}),n||(this.selection=this.getAllSelection(t),this.updateSelectionFormats(this.selection))},t.prototype.componentWillUnmount=function(){var e=this.props.editor;e&&e.off("selection-change",this.debounce),this.debounce&&this.debounce.cancel()},t.prototype.render=function(){var e=this.props,t=e.quillEnabled,n=e.className,o=e.style,a=e.dataSourceIds,i=!this.selection||!this.selection.length||!t;return s.jsx(l.FormatsNode,{css:this.getStyle(),className:n,style:o,dataSourceIds:a,disableIndent:!t,disableLink:i,formats:this.state.formats,onChange:this.handleChange})},t.defaultProps={source:"user"},t}(s.React.PureComponent);t.Formats=u},562:function(e,t,n){"use strict";var o,a=this&&this.__extends||(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),i=this&&this.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e};Object.defineProperty(t,"__esModule",{value:!0});var r=n(3),s=n(43),l=n(4),c=n(7),u=n(563),p=n(564),h=n(565),d=n(566),f=n(567),g=n(568),m=n(169),v=n(170),y=n(171),x=n(569),w=n(570),S=n(571),b=n(178),z=function(e){function t(t){var n=e.call(this,t)||this;return n.getStyle=function(){return r.css(j||(j=i(["\n      > * {\n        user-select: none;\n      }\n      .jimu-widget-setting--row {\n        margin-top: ","\n      }\n    "],["\n      > * {\n        user-select: none;\n      }\n      .jimu-widget-setting--row {\n        margin-top: ","\n      }\n    "])),r.polished.rem(12))},n.translate=function(e){return n.props.intl?n.props.intl.formatMessage({id:e,defaultMessage:l.defaultMessages[e]}):e},n.handleListChange=function(e){var t=n.props.formats.list!==e&&e;n.props.onChange(s.RichTextFormatKeys.List,t,s.FormatType.BLOCK)},n.handleLinkChange=function(e,t,o){n.props.onChange(e,t,o),n.toggleLinkOpen()},n.toggleLinkOpen=function(){n.setState({openLink:!n.state.openLink})},n.handleLinespaceChange=function(e){var t=+e.currentTarget.value;n.props.onChange(s.RichTextFormatKeys.Linespace,t,s.FormatType.BLOCK)},n.state={openLink:!1},n}return a(t,e),t.prototype.render=function(){var e=this,t=this.props,n=t.className,o=t.style,a=t.formats,i=t.dataSourceIds,z=t.onChange,j=t.disableLink,T=t.disableIndent,_=t.appTheme;return r.jsx("div",{css:this.getStyle(),style:o,className:r.classNames(n,"format-panel")},r.jsx(c.SettingRow,null,r.jsx("div",{className:"d-flex align-items-center justify-content-between w-100"},r.jsx(s.FontFamily,{style:{width:"61%"},font:a.font,onChange:function(e){return z(s.RichTextFormatKeys.Font,e,s.FormatType.INLINE)}}),r.jsx(s.Size,{style:{width:"35%"},value:a.size,onChange:function(e){return z(s.RichTextFormatKeys.Size,e,s.FormatType.INLINE)}}))),r.jsx(c.SettingRow,null,r.jsx("div",{className:"d-flex align-items-center justify-content-between w-100"},r.jsx(l.ButtonGroup,{size:"sm"},r.jsx(l.Button,{title:this.translate("bold"),active:!!a[s.RichTextFormatKeys.Bold],icon:!0,size:"sm",onClick:function(){return z(s.RichTextFormatKeys.Bold,!a[s.RichTextFormatKeys.Bold],s.FormatType.INLINE)}},r.jsx(l.Icon,{size:12,icon:h})),r.jsx(l.Button,{title:this.translate("italic"),active:!!a[s.RichTextFormatKeys.Italic],icon:!0,size:"sm",onClick:function(){return z(s.RichTextFormatKeys.Italic,!a[s.RichTextFormatKeys.Italic],s.FormatType.INLINE)}},r.jsx(l.Icon,{size:12,icon:d})),r.jsx(l.Button,{title:this.translate("strike"),active:!!a[s.RichTextFormatKeys.Strike],icon:!0,size:"sm",onClick:function(){return z(s.RichTextFormatKeys.Strike,!a[s.RichTextFormatKeys.Strike],s.FormatType.INLINE)}},r.jsx(l.Icon,{size:12,icon:g})),r.jsx(l.Button,{title:this.translate("underline"),active:!!a[s.RichTextFormatKeys.Underline],icon:!0,size:"sm",onClick:function(){return z(s.RichTextFormatKeys.Underline,!a[s.RichTextFormatKeys.Underline],s.FormatType.INLINE)}},r.jsx(l.Icon,{size:12,icon:f}))),r.jsx("div",{className:"d-flex align-items-center justify-content-between",style:{width:"50%"}},r.jsx(s.TextThemeColorPicker,{specificTheme:_,title:this.translate("highlight"),value:a.background,icon:p,onChange:function(e){return z(s.RichTextFormatKeys.Background,e,s.FormatType.INLINE)}}),r.jsx(s.TextThemeColorPicker,{specificTheme:_,title:this.translate("fontColor"),value:a.color,icon:u,onChange:function(e){return z(s.RichTextFormatKeys.Color,e,s.FormatType.INLINE)}}),r.jsx(l.Button,{style:{width:42},title:this.translate("link"),disabled:j,active:!!a[s.RichTextFormatKeys.Link],icon:!0,size:"sm",onClick:this.toggleLinkOpen},r.jsx(l.Icon,{size:12,icon:b})),r.jsx(s.LinkNode,{dataSourceIds:i,open:this.state.openLink,onClose:this.toggleLinkOpen,formats:a,onChange:this.handleLinkChange,className:"mr-2_5"})))),r.jsx(c.SettingRow,null,r.jsx("div",{className:"d-flex align-items-center justify-content-between w-100"},r.jsx(l.ButtonGroup,null,r.jsx(l.Button,{title:this.translate("left"),active:a.align===l.AlignValue.LEFT,icon:!0,size:"sm",onClick:function(){return z(s.RichTextFormatKeys.Align,l.AlignValue.LEFT,s.FormatType.BLOCK)}},r.jsx(l.Icon,{size:12,icon:m})),r.jsx(l.Button,{title:this.translate("center"),active:a.align===l.AlignValue.CENTER,icon:!0,size:"sm",onClick:function(){return z(s.RichTextFormatKeys.Align,l.AlignValue.CENTER,s.FormatType.BLOCK)}},r.jsx(l.Icon,{size:12,icon:v})),r.jsx(l.Button,{title:this.translate("right"),active:a.align===l.AlignValue.RIGHT,icon:!0,size:"sm",onClick:function(){return z(s.RichTextFormatKeys.Align,l.AlignValue.RIGHT,s.FormatType.BLOCK)}},r.jsx(l.Icon,{size:12,icon:y})),r.jsx(l.Button,{title:this.translate("justify"),active:a.align===l.AlignValue.JUSTIFY,icon:!0,size:"sm",onClick:function(){return z(s.RichTextFormatKeys.Align,l.AlignValue.JUSTIFY,s.FormatType.BLOCK)}},r.jsx(l.Icon,{size:12,icon:x}))),r.jsx(l.ButtonGroup,null,r.jsx(l.Button,{title:this.translate("bullet"),active:a.list===s.ListValue.BULLET,icon:!0,size:"sm",onClick:function(){return e.handleListChange(s.ListValue.BULLET)}},r.jsx(l.Icon,{size:12,icon:w})),r.jsx(l.Button,{title:this.translate("numbering"),active:a.list===s.ListValue.ORDERED,icon:!0,size:"sm",onClick:function(){return e.handleListChange(s.ListValue.ORDERED)}},r.jsx(l.Icon,{size:12,icon:S}))),r.jsx(s.Indent,{disabled:T,value:a.indent,onClick:function(e){return z(s.RichTextFormatKeys.Indent,e,s.FormatType.BLOCK)}}))),r.jsx(c.SettingRow,{flow:"no-wrap",label:this.translate("characterSpacing")},r.jsx(s.Size,{style:{width:"35%"},value:a.letterspace||"0px",onChange:function(e){return z(s.RichTextFormatKeys.Letterspace,e,s.FormatType.INLINE)}})),r.jsx(c.SettingRow,{flow:"no-wrap",label:this.translate("lineSpacing")},r.jsx(l.NumericInput,{style:{width:"35%"},size:"sm",value:a.linespace||1.5,showHandlers:!1,onPressEnter:this.handleLinespaceChange,onBlur:this.handleLinespaceChange})))},t.defaultProps={formats:{},onChange:function(){}},t}(r.React.PureComponent);t._FormatsNode=z;var j;t.FormatsNode=r.ReactRedux.connect((function(e){return{appTheme:e.appStateInBuilder&&e.appStateInBuilder.theme}}))(r.injectIntl(z))},563:function(e,t){e.exports='<svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M6.828.535l4.966 11.01A.323.323 0 0111.5 12a.776.776 0 01-.707-.455L9.182 8H2.818l-1.611 3.545A.776.776 0 01.5 12a.323.323 0 01-.294-.456L5.172.535a.909.909 0 011.656 0zM6 1L3.272 7h5.456L6 1z" fill="#000" fill-rule="nonzero"></path></svg>'},564:function(e,t){e.exports='<svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M10.893 11.995c-.56-.045-.839-.378-.839-1 0-.67.324-1.339.973-2.009.649.67.973 1.34.973 2.01 0 .67-.324 1.004-.973 1.004l-.134-.005zM9.518 4.18c.47.276.623.872.34 1.33L6.77 10.53c-.283.459-.893.607-1.363.331L.482 7.972a.957.957 0 01-.34-1.331l3.086-5.015-1.23-.721a.48.48 0 01-.17-.669.506.506 0 01.685-.166l7.005 4.11zM4.056 2.112L1.684 5.966l7.343-.938-4.97-2.916z" fill="#000" fill-rule="evenodd"></path></svg>'},565:function(e,t){e.exports='<svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h12v12H0z"></path><path d="M5.75 0a3.25 3.25 0 012.328 5.518A3.25 3.25 0 017.75 12H3a1 1 0 01-1-1V1a1 1 0 011-1h2.75zm2 6.5H3V11h4.75a2.25 2.25 0 100-4.5zm-2-5.5H3v4.5h2.75a2.25 2.25 0 100-4.5z" fill="#000" fill-rule="nonzero"></path></g></svg>'},566:function(e,t){e.exports='<svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h12v12H0z"></path><path d="M6.5 1h-2a.5.5 0 010-1h5a.5.5 0 010 1h-2l-2 10h2a.5.5 0 110 1h-5a.5.5 0 110-1h2l2-10z" fill="#000"></path></g></svg>'},567:function(e,t){e.exports='<svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h12v12H0z"></path><path d="M10 11.5a.5.5 0 01-.5.5h-7a.5.5 0 110-1h7a.5.5 0 01.5.5zM3 .5V6a3 3 0 106 0V.5a.5.5 0 011 0V6a4 4 0 11-8 0V.5a.5.5 0 011 0z" fill="#000" fill-rule="nonzero"></path></g></svg>'},568:function(e,t){e.exports='<svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h12v12H0z"></path><path d="M8.6 6.999H9.71c.185.456.289.964.289 1.501 0 1.866-1.252 3.391-2.83 3.494L7 12H4a1 1 0 01-1-1v-.5a.5.5 0 111 0v.499L7 11c1.105 0 2-1.12 2-2.5a2.96 2.96 0 00-.311-1.34L8.599 7zM11 5.5a.5.5 0 01-.5.5h-9a.5.5 0 010-1h9a.5.5 0 01.5.5zM9 1v.5a.5.5 0 01-1 0V1H6a2 2 0 00-1.732 3.001H3.171A3 3 0 016 0l2-.001a1 1 0 011 1z" fill="#000" fill-rule="nonzero"></path></g></svg>'},569:function(e,t){e.exports='<svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h12v12H0z"></path><path d="M11.5 10a.5.5 0 110 1H.5a.5.5 0 110-1h11zm0-3a.5.5 0 110 1H.5a.5.5 0 010-1h11zm0-3a.5.5 0 110 1H.5a.5.5 0 010-1h11zm0-3a.5.5 0 110 1H.5a.5.5 0 010-1h11z" fill="#000" fill-rule="nonzero"></path></g></svg>'},570:function(e,t){e.exports='<svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h12v12H0z"></path><path d="M3.5 1h8a.5.5 0 110 1h-8a.5.5 0 010-1zM1 2.5a1 1 0 100-2 1 1 0 000 2zm0 4a1 1 0 100-2 1 1 0 000 2zm0 2a1 1 0 110 2 1 1 0 010-2zm10.5.5a.5.5 0 110 1h-8a.5.5 0 010-1h8zm0-4a.5.5 0 110 1h-8a.5.5 0 010-1h8z" fill="#000" fill-rule="nonzero"></path></g></svg>'},571:function(e,t){e.exports='<svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h12v12H0z"></path><path d="M3.5 1h8a.5.5 0 110 1h-8a.5.5 0 010-1zM.905 2.8V.744l-.545.403L0 .677.963 0H1.6v2.8H.905zm-.848 4v-.54l1.047-.962c.066-.064.12-.13.16-.196a.422.422 0 00.06-.224.32.32 0 00-.09-.237.33.33 0 00-.243-.09.331.331 0 00-.26.113.517.517 0 00-.12.299L0 4.878a.952.952 0 01.65-.818C.77 4.02.894 4 1.026 4c.124 0 .244.017.36.05.117.033.22.085.311.154a.766.766 0 01.3.632.856.856 0 01-.142.481 1.25 1.25 0 01-.152.187 5.659 5.659 0 01-.176.171l-.623.563H2V6.8H.057zm.977 1.4c.114 0 .225.015.333.045.107.03.203.076.288.139a.674.674 0 01.283.567.579.579 0 01-.432.578v.01a.649.649 0 01.458.404.789.789 0 01-.049.59.786.786 0 01-.224.262.97.97 0 01-.31.154c-.115.034-.232.051-.35.051-.116 0-.23-.014-.34-.041a1.05 1.05 0 01-.3-.126.884.884 0 01-.391-.539l.566-.154a.473.473 0 00.15.231c.074.067.17.1.286.1a.49.49 0 00.132-.019.359.359 0 00.12-.058.312.312 0 00.087-.103.328.328 0 00.035-.158.296.296 0 00-.046-.169.325.325 0 00-.12-.107.575.575 0 00-.168-.056 1.07 1.07 0 00-.189-.017H.69v-.462h.178c.058 0 .113-.004.166-.013a.434.434 0 00.144-.049.281.281 0 00.101-.095.29.29 0 00.039-.158.258.258 0 00-.098-.218.36.36 0 00-.225-.075.342.342 0 00-.227.08.375.375 0 00-.126.217l-.566-.135a.88.88 0 01.365-.505c.086-.057.18-.1.281-.128a1.14 1.14 0 01.312-.043zM11.5 9a.5.5 0 110 1h-8a.5.5 0 010-1h8zm0-4a.5.5 0 110 1h-8a.5.5 0 010-1h8z" fill="#000" fill-rule="nonzero"></path></g></svg>'},572:function(e,t,n){"use strict";var o,a=this&&this.__extends||(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),i=this&&this.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},s=this&&this.__rest||function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]])}return n};Object.defineProperty(t,"__esModule",{value:!0});var l,c=n(3),u=n(573),p=n(43),h=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.getStyle=function(){return c.css(l||(l=i(["\n      > * {\n        user-select: none;\n      }\n    "],["\n      > * {\n        user-select: none;\n      }\n    "])))},t.getAllSelection=function(e){var t=e.getLength();return{index:0,length:t=t>0?t-1:t}},t.handleChange=function(e,n,o){var a=t.props,i=a.quillEnabled,r=a.editor,s={type:o,key:e,value:n,selection:i?r.getSelection(!1):t.getAllSelection(r),source:i?"user":"api"};p.richTextUtils.formatText(r,s)},t}return a(t,e),t.prototype.render=function(){var e=this.props,t=(e.editor,e.onChange,e.source,e.quillEnabled,s(e,["editor","onChange","source","quillEnabled"]));return c.jsx(u.ClearFormatsNode,r({css:this.getStyle()},t,{onChange:this.handleChange}))},t.defaultProps={source:"user",formats:{},onChange:function(){}},t}(c.React.PureComponent);t.ClearFormats=h},573:function(e,t,n){"use strict";var o,a=this&&this.__extends||(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var i=n(3),r=n(4),s=n(43),l=n(574),c=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.translate=function(e){return t.props.intl?t.props.intl.formatMessage({id:e,defaultMessage:r.defaultMessages[e]}):e},t}return a(t,e),t.prototype.render=function(){var e=this.props,t=e.onChange,n=e.className,o=e.style,a=e.formats,c=!!Object.keys(a).length;return i.React.createElement(r.Button,{active:c,className:n,style:o,icon:!0,type:"tertiary",size:"sm",onClick:function(){return t(s.RichTextFormatKeys.Clear,null,s.FormatType.INLINE)},title:this.translate("clearAllFormats")},i.React.createElement(r.Icon,{size:14,icon:l}))},t.defaultProps={formats:{},onChange:function(){}},t}(i.React.PureComponent);t.ClearFormatsNode=i.injectIntl(c)},574:function(e,t){e.exports='<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><path d="M4.375 1l-.813 6.504A.566.566 0 013 8a.441.441 0 01-.438-.496L3.375 1H1a.5.5 0 010-1h6a.5.5 0 010 1H4.375zM.5 9h4a.5.5 0 010 1h-4a.5.5 0 010-1zm7.25-1.952l1.403-1.403a.496.496 0 01.702.702L8.452 7.75l1.403 1.403a.496.496 0 01-.702.702L7.75 8.452 6.347 9.855a.496.496 0 01-.702-.702L7.048 7.75 5.645 6.347a.496.496 0 01.702-.702L7.75 7.048z" fill="#000" fill-rule="nonzero"></path></svg>'},575:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={wrap:"Wrap",verticalAlignment:"Vertical alignment"}},6:function(e,t){e.exports=n},7:function(e,t){e.exports=o}})}));