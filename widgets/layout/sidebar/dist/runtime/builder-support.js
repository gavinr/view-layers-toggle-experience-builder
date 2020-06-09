define(["jimu-core","jimu-ui","jimu-for-builder","jimu-layouts/common","jimu-layouts/layout-builder","jimu-core/dnd"],(function(e,t,o,n,i,r){return function(e){var t={};function o(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=628)}({10:function(e,t){e.exports=n},15:function(e,t){e.exports=i},182:function(e,t,o){"use strict";var n,i=this&&this.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},r=this&&this.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(e,t)},function(e,t){function o(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)});Object.defineProperty(t,"__esModule",{value:!0});var s,l,a,p,d,c,u,f,h,S,y=o(3),g=o(10),b=o(4),v=o(27),m=o(183),x=y.css(s||(s=i(["\n  transition: all 200ms;\n"],["\n  transition: all 200ms;\n"]))),z=function(e){function t(t){var o=e.call(this,t)||this;o.removeSplitHandler=function(){o.interactable&&(o.interactable.unset(),o.interactable=null)},o.toggleSidebar=function(e){e.stopPropagation(),y.getAppStore().dispatch(y.appActions.widgetStatePropChange(o.props.widgetId,"collapse",!o.props.sidebarVisible))};var n=o.props.config;return o.state={isResizing:!1,deltaSize:0},y.getAppStore().dispatch(y.appActions.widgetStatePropChange(o.props.widgetId,"collapse",0!==n.defaultState)),o}return r(t,e),t.prototype.componentDidMount=function(){var e=this.props,t=e.firstLayouts,o=e.secondLayouts;t&&o&&this.bindSplitHandler()},t.prototype.componentDidUpdate=function(){var e=this.props,t=e.firstLayouts,o=e.secondLayouts;t&&o&&!this.interactable&&this.bindSplitHandler(),this.interactable&&this.interactable.draggable({startAxis:this.props.direction===v.SidebarType.Horizontal?"x":"y",lockAxis:this.props.direction===v.SidebarType.Horizontal?"x":"y"})},t.prototype.componentWillUnmount=function(){this.removeSplitHandler()},t.prototype.calSidebarSize=function(){var e=this.props.config;return 0!==this.state.deltaSize?g.isPercentage(e.size)?parseFloat(e.size)*this.domSize/100+this.state.deltaSize+"px":parseFloat(e.size)+this.state.deltaSize+"px":e.size},t.prototype.createCollapsibleSide=function(e,t){var o,n=this.props,r=n.config,s=n.direction,d=this.calSidebarSize(),c=this.shouldFlipLeftAndRight();o=s===v.SidebarType.Horizontal?y.css(l||(l=i(["\n        width: ",";\n        transform: ",";\n        top: ",";\n        bottom: ",";\n        left: ",";\n        right: ",";\n      "],["\n        width: ",";\n        transform: ",";\n        top: ",";\n        bottom: ",";\n        left: ",";\n        right: ",";\n      "])),d,r.overlay&&!this.props.sidebarVisible?r.collapseSide!==v.CollapseSides.First||c?"translateX("+d+")":"translateX(-"+d+")":"none",r.overlay?0:"auto",r.overlay?0:"auto",r.overlay&&t===v.CollapseSides.First&&!c?0:"auto",r.overlay&&t===v.CollapseSides.Second&&!c?0:"auto"):y.css(a||(a=i(["\n        height: ",";\n        transform: ",";\n        left: ",";\n        right: ",";\n        top: ",";\n        bottom: ",";\n      "],["\n        height: ",";\n        transform: ",";\n        left: ",";\n        right: ",";\n        top: ",";\n        bottom: ",";\n      "])),d,r.overlay&&!this.props.sidebarVisible?r.collapseSide===v.CollapseSides.First?"translateY(-"+d+")":"translateY("+d+")":"none",r.overlay?0:"auto",r.overlay?0:"auto",r.overlay&&t===v.CollapseSides.First?0:"auto",r.overlay&&t===v.CollapseSides.Second?0:"auto");var u=this.layoutItemComponent;return y.jsx("div",{css:y.css(p||(p=i(["\n        ","\n        ","\n        position: ",";\n        overflow: visible;\n        z-index: 2;\n        flex-grow: 0;\n        flex-shrink: 0;\n        flex-basis: auto;\n      "],["\n        ","\n        ","\n        position: ",";\n        overflow: visible;\n        z-index: 2;\n        flex-grow: 0;\n        flex-shrink: 0;\n        flex-basis: auto;\n      "])),this.state.isResizing?"":x,o,r.overlay?"absolute":"relative"),className:y.classNames("d-flex",{"flex-column":s===v.SidebarType.Vertical})},y.jsx(u,{innerLayouts:e,itemStyle:t===v.CollapseSides.First?r.firstPanelStyle:r.secondPanelStyle,collapsed:!this.props.sidebarVisible,className:y.classNames({"h-100":s===v.SidebarType.Vertical,"w-100":s===v.SidebarType.Horizontal})}),this.createController(c))},t.prototype.splitStyle=function(e){var t=this.props,o=t.theme,n=t.direction,r=t.config;if(!(e||r.divider&&r.divider.visible&&r.divider.lineStyle||!1!==r.resizable))return null;var s=this.calSidebarSize(),l=!this.props.sidebarVisible,a=r.divider&&r.divider.visible&&r.divider.lineStyle?b.styleUtils.toCSSBorder(r.divider.lineStyle):e?"1px solid "+o.colors.palette.light[500]:"none";return n===v.SidebarType.Horizontal?y.css(d||(d=i(["\n        width: 1px;\n        border-left: ",";\n        position: ",";\n        left: ",";\n        right: ",";\n        height: ",";\n        &:after {\n          display: ",";\n          position: absolute;\n          content: '';\n          width: 10px;\n          top: 0;\n          bottom: 0;\n          left: -5px;\n          cursor: col-resize;\n        }\n        z-index: 3;\n      "],["\n        width: 1px;\n        border-left: ",";\n        position: ",";\n        left: ",";\n        right: ",";\n        height: ",";\n        &:after {\n          display: ",";\n          position: absolute;\n          content: '';\n          width: 10px;\n          top: 0;\n          bottom: 0;\n          left: -5px;\n          cursor: col-resize;\n        }\n        z-index: 3;\n      "])),a,r.overlay?"absolute":"relative",r.overlay&&!l&&r.collapseSide===v.CollapseSides.First?s:"auto",r.overlay&&!l&&r.collapseSide===v.CollapseSides.Second?s:"auto",r.overlay?"100%":"auto",!1!==r.resizable?"block":"none"):y.css(c||(c=i(["\n      height: 1px;\n      border-top: ",";\n      position: ",";\n      top: ",";\n      bottom: ",";\n      width: ",";\n      &:after {\n        display: ",";\n        position: absolute;\n        content: '';\n        height: 10px;\n        top: -5px;\n        right: 0;\n        left: 0;\n        cursor: row-resize;\n      }\n      z-index: 3;\n    "],["\n      height: 1px;\n      border-top: ",";\n      position: ",";\n      top: ",";\n      bottom: ",";\n      width: ",";\n      &:after {\n        display: ",";\n        position: absolute;\n        content: '';\n        height: 10px;\n        top: -5px;\n        right: 0;\n        left: 0;\n        cursor: row-resize;\n      }\n      z-index: 3;\n    "])),a,r.overlay?"absolute":"relative",r.overlay&&!l&&r.collapseSide===v.CollapseSides.First?s:"auto",r.overlay&&!l&&r.collapseSide===v.CollapseSides.Second?s:"auto",r.overlay?"100%":"auto",!1!==r.resizable?"block":"none")},t.prototype.createController=function(e){var t=this.props,o=t.config,n=t.theme,r=t.direction;if(o.toggleBtn&&!o.toggleBtn.visible)return null;var s,l,a,p=this.props.sidebarVisible?o.toggleBtn.collapseStyle:o.toggleBtn.expandStyle,d=0,c=0;if(r===v.SidebarType.Horizontal){o.toggleBtn.position===v.SidebarControllerPositions.Start?s=0:o.toggleBtn.position===v.SidebarControllerPositions.Center&&(s="50%",c=-o.toggleBtn.height/2);var S=this.shouldFlipLeftAndRight();a=y.css(u||(u=i(["\n        top: ",";\n        bottom: ",";\n        right: ",";\n        left: ",";\n      "],["\n        top: ",";\n        bottom: ",";\n        right: ",";\n        left: ",";\n      "])),o.toggleBtn.position!==v.SidebarControllerPositions.End?s:"auto",o.toggleBtn.position===v.SidebarControllerPositions.End?0:"auto",o.collapseSide!==v.CollapseSides.First||S?"auto":0,o.collapseSide!==v.CollapseSides.Second||S?"auto":0)}else o.toggleBtn.position===v.SidebarControllerPositions.Start?l=0:o.toggleBtn.position===v.SidebarControllerPositions.Center&&(l="50%",d=-o.toggleBtn.width/2),a=y.css(f||(f=i(["\n        left: ",";\n        right: ",";\n        bottom: ",";\n        top: ",";\n      "],["\n        left: ",";\n        right: ",";\n        bottom: ",";\n        top: ",";\n      "])),o.toggleBtn.position!==v.SidebarControllerPositions.End?l:"auto",o.toggleBtn.position===v.SidebarControllerPositions.End?0:"auto",o.collapseSide===v.CollapseSides.First?0:"auto",o.collapseSide===v.CollapseSides.Second?0:"auto");var g=p.style,b=o.toggleBtn,x=b.iconSize,z=b.width,C=b.height,w=b.color,_=b.icon;return y.jsx("div",{css:y.css(h||(h=i(["\n          ","\n          position: absolute;\n          transform: translate(","px, ","px);\n        "],["\n          ","\n          position: absolute;\n          transform: translate(","px, ","px);\n        "])),a,o.toggleBtn.offsetX+d,o.toggleBtn.offsetY+c),onClick:this.toggleSidebar},y.jsx(m.SidebarController,{theme:n,icon:_,iconSize:x,expanded:this.props.sidebarVisible,width:z,height:C,color:w,style:g,shouldFlip:e}))},t.prototype.createNormalSide=function(e,t){var o=this.layoutItemComponent,n=this.props.config;return y.jsx("div",{css:this.state.isResizing?"":x,className:"flex-shrink-0 flex-grow-1 d-flex",style:{zIndex:0,flexBasis:this.props.sidebarVisible?"0":"100%",overflow:"auto"}},y.jsx(o,{itemStyle:t===v.CollapseSides.First?n.firstPanelStyle:n.secondPanelStyle,innerLayouts:e,className:"w-100"}))},t.prototype.shouldFlipLeftAndRight=function(){return this.props.direction===v.SidebarType.Horizontal&&y.getAppStore().getState().appContext.isRTL},t.prototype.render=function(){var e=this,t=this.props,o=t.config,n=t.firstLayouts,r=t.secondLayouts,s=t.direction;return n&&r?y.jsx(g.PageContext.Consumer,null,(function(t){var l=t.builderTheme,a=t.isDesignMode?"1px dashed "+y.polished.rgba(l.colors.palette.dark[300],.3):"none";return y.jsx("div",{className:y.classNames("d-flex w-100",{"flex-column":s===v.SidebarType.Vertical}),ref:function(t){return e.ref=t},css:y.css(S||(S=i(["\n            border: ",";\n            position: relative;\n            overflow: hidden;\n            justify-content: ",";\n          "],["\n            border: ",";\n            position: relative;\n            overflow: hidden;\n            justify-content: ",";\n          "])),a,o.collapseSide===v.CollapseSides.First?"flex-end":"flex-start")},o.collapseSide===v.CollapseSides.First?e.createCollapsibleSide(n,v.CollapseSides.First):e.createNormalSide(n,v.CollapseSides.First),y.jsx("div",{css:e.splitStyle(t.isDesignMode),ref:function(t){return e.splitRef=t}}),o.collapseSide===v.CollapseSides.Second?e.createCollapsibleSide(r,v.CollapseSides.Second):e.createNormalSide(r,v.CollapseSides.Second))})):y.jsx(b.Loading,null)},t}(y.React.PureComponent);t.BaseSidebarLayout=z},183:function(e,t,o){"use strict";var n,i=this&&this.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(e,t)},function(e,t){function o(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}),r=this&&this.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e};Object.defineProperty(t,"__esModule",{value:!0});var s=o(3),l=o(4),a=o(27),p={};p[a.ICON_TYPE.Left]=o(25),p[a.ICON_TYPE.Right]=o(39),p[a.ICON_TYPE.Up]=o(55),p[a.ICON_TYPE.Down]=o(33);var d,c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.prototype.getStyle=function(){var e=this.props,t=e.width,o=e.height;return s.css(d||(d=r(["\n      padding: 0;\n      width: ","px;\n      height: ","px;\n\n      .jimu-icon {\n        margin: 0;\n      }\n    "],["\n      padding: 0;\n      width: ","px;\n      height: ","px;\n\n      .jimu-icon {\n        margin: 0;\n      }\n    "])),t,o)},t.prototype.flipStyle=function(e){if(!this.props.shouldFlip)return e;var t=s.Immutable(e);if(e.borderRadius){var o=e.borderRadius.split(" ");t=t.set("borderRadius",o[1]+" "+o[0]+" "+o[3]+" "+o[2])}return t},t.prototype.render=function(){var e=this.props,t=e.icon,o=e.iconSize,n=e.style,i=e.expanded,r=e.shouldFlip?180:0;return s.jsx(l.Button,{className:"sidebar-controller d-flex justify-content-center align-items-center",css:this.getStyle(),style:this.flipStyle(n)},s.jsx(l.Icon,{className:"icon",rotate:i?0+r:180+r,icon:p[t],size:o}))},t}(s.React.PureComponent);t.SidebarController=c},25:function(e,t){e.exports='<svg viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><g fill-rule="nonzero" fill="none"><path d="M4.916 7l5.052 5.125c.31.315.31.825 0 1.14a.786.786 0 01-1.123 0L3.232 7.568a.814.814 0 010-1.138L8.845.736a.786.786 0 011.123 0c.31.314.31.824 0 1.139L4.916 7z" fill="#000"></path><path d="M0 0h14v14H0z"></path></g></svg>'},27:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,i,r,s,l=o(3),a=o(4);!function(e){e.First="FIRST",e.Second="SECOND"}(n=t.CollapseSides||(t.CollapseSides={})),function(e){e.Start="START",e.Center="CENTER",e.End="END"}(i=t.SidebarControllerPositions||(t.SidebarControllerPositions={})),function(e){e.Horizontal="HORIZONTAL",e.Vertical="VERTICAL"}(r=t.SidebarType||(t.SidebarType={})),function(e){e.Left="LEFT",e.Right="RIGHT",e.Up="UP",e.Down="DOWN"}(s=t.ICON_TYPE||(t.ICON_TYPE={})),t.defaultConfig=l.Immutable({direction:r.Horizontal,collapseSide:n.First,overlay:!1,size:"300px",divider:{visible:!0,lineStyle:{type:a.LineType.SOLID,color:"var(--light-500)",width:{distance:1,unit:a.UnitTypes.PIXEL}}},resizable:!1,toggleBtn:{visible:!0,icon:s.Left,offsetX:15,offsetY:0,position:i.Center,iconSize:14,width:15,height:60,color:{normal:{icon:{useTheme:!1,color:"#FFFFFF"},bg:{useTheme:!0,color:"colors.primary"}},hover:{bg:{useTheme:!0,color:"colors.palette.primary[600]"}}},expandStyle:{style:{borderRadius:"0 92px 92px 0"}},collapseStyle:{style:{borderRadius:"0 92px 92px 0"}}},defaultState:1})},3:function(t,o){t.exports=e},33:function(e,t){e.exports='<svg viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><g fill-rule="nonzero" fill="none"><path d="M7 8.684l5.125-5.052a.814.814 0 011.14 0 .786.786 0 010 1.123l-5.696 5.613a.814.814 0 01-1.138 0L.736 4.755a.786.786 0 010-1.123.814.814 0 011.139 0L7 8.684z" fill="#000"></path><path d="M0 0h14v14H0z"></path></g></svg>'},39:function(e,t){e.exports='<svg viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><g fill-rule="nonzero" fill="none"><path d="M8.784 7L3.732 1.875a.814.814 0 010-1.14.786.786 0 011.123 0l5.613 5.696c.31.314.31.824 0 1.138l-5.613 5.695a.786.786 0 01-1.123 0 .814.814 0 010-1.139L8.784 7z" fill="#000"></path><path d="M0 0h14v14H0z"></path></g></svg>'},4:function(e,o){e.exports=t},55:function(e,t){e.exports='<svg viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><g fill-rule="nonzero" fill="none"><path d="M7 5.316l-5.125 5.052a.814.814 0 01-1.14 0 .786.786 0 010-1.123l5.696-5.613a.814.814 0 011.138 0l5.695 5.613a.786.786 0 010 1.123.814.814 0 01-1.139 0L7 5.316z" fill="#000"></path><path d="M0 0h14v14H0z"></path></g></svg>'},6:function(e,t){e.exports=o},628:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(629);t.default={SidebarLayoutBuilder:n.SidebarLayoutBuilder}},629:function(e,t,o){"use strict";var n,i=this&&this.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(e,t)},function(e,t){function o(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)});Object.defineProperty(t,"__esModule",{value:!0});var r=o(3),s=o(64),l=o(6),a=o(10),p=o(630),d=o(27),c=function(e){function t(t){var o=e.call(this,t)||this;return o.bindSplitHandler=function(){var e,t;o.splitRef&&!o.interactable&&(o.interactable=s.interact(o.splitRef).origin("parent").draggable({inertia:!1,autoScroll:!1,modifiers:[s.interact.modifiers.restrict({restriction:"parent"})],startAxis:o.props.direction===d.SidebarType.Horizontal?"x":"y",lockAxis:o.props.direction===d.SidebarType.Horizontal?"x":"y",onstart:function(n){n.stopPropagation(),e=0,t=0;var i=o.ref.getBoundingClientRect();o.domSize=o.props.direction===d.SidebarType.Horizontal?i.width:i.height,o.setState({isResizing:!0})},onmove:function(n){n.stopPropagation(),e+=n.dx,t+=n.dy,o.props.direction===d.SidebarType.Horizontal?o.props.config.collapseSide===d.CollapseSides.First?o.setState({deltaSize:e}):o.setState({deltaSize:-e}):o.props.config.collapseSide===d.CollapseSides.First?o.setState({deltaSize:t}):o.setState({deltaSize:-t})},onend:function(e){e.stopPropagation();var t,n=o.props.config,i=o.state.deltaSize;t=a.isPercentage(n.size)?(100*(parseFloat(n.size)*o.domSize/100+i)/o.domSize).toFixed(4)+"%":(parseFloat(n.size)+i).toFixed(0)+"px",l.getAppConfigAction().editWidgetConfig(o.props.widgetId,r.Immutable(n).set("size",t)).exec(),o.setState({deltaSize:0,isResizing:!1})}}))},o.layoutItemComponent=p.SidebarLayoutItem,o}return i(t,e),t}(o(182).BaseSidebarLayout);t.SidebarLayoutBuilder=c},630:function(e,t,o){"use strict";var n,i=this&&this.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(e,t)},function(e,t){function o(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}),r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++)for(var i in t=arguments[o])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var s=o(3),l=o(15),a=o(4),p=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.prototype.render=function(){var e=this.props,t=e.style,o=e.className,n=e.innerLayouts,i=e.itemStyle,p=e.collapsed;return s.React.createElement("div",{className:s.classNames("side d-flex",o),style:r(r(r({},t),a.styleUtils.toCSSStyle(i)),{overflow:"auto"})},s.React.createElement(l.LayoutEntry,{className:"border-0",layouts:n,isInWidget:!0,ignoreMinHeight:!0,droppable:!p}))},t}(s.React.PureComponent);t.SidebarLayoutItem=p},64:function(e,t){e.exports=r}})}));