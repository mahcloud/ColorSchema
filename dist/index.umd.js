!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("ColorSchema",[],t):"object"==typeof exports?exports.ColorSchema=t():e.ColorSchema=t()}(window,function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/dist/",r(r.s=8)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return null==e}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,r=e[0]/255,n=e[1]/255,i=e[2]/255,u=Math.max(r,n,i),o=Math.min(r,n,i),c=u-o,a=void 0;return u===o?a=0:r===u?a=(n-i)/c:n===u?a=2+(i-r)/c:i===u&&(a=4+(r-n)/c),(a=Math.min(60*a,360))<0&&(a+=360),t=(o+u)/2,[a,100*(u===o?0:t<=.5?c/(u+o):c/(2-u-o)),100*t]}},function(e,t,r){"use strict";var n=r(1);e.exports=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,r,n,i,u,o=e[0]/360,c=e[1]/100,a=e[2]/100;if(0===c)return[u=255*a,u,u];t=2*a-(r=a<.5?a*(1+c):a+c-a*c),i=[0,0,0];for(var s=0;s<3;s++)(n=o+1/3*-(s-1))<0&&n++,n>1&&n--,u=6*n<1?t+6*(r-t)*n:2*n<1?r:3*n<2?t+(r-t)*(2/3-n)*6:t,i[s]=255*u;return i}},function(e,t,r){"use strict";var n=r(3);e.exports=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=o(r(4)),u=o(r(2));function o(e){return e&&e.__esModule?e:{default:e}}var c=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.color=(0,u.default)(this.hexToRgb(t))}return n(e,[{key:"darken",value:function(e){return this.color[2]-=e,this.color[2]<0&&(this.color[2]=0),this}},{key:"decreaseHue",value:function(e){return e*=3.6,this.color[0]-=e,this.color[0]<0&&(this.color[0]=0),this}},{key:"decreaseSaturation",value:function(e){return this.color[1]-=e,this.color[1]<0&&(this.color[1]=0),this}},{key:"hexToRgb",value:function(e){3===(e=e.replace(/^#/,"")).length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var t=parseInt(e,16);return[t>>16,t>>8&255,255&t]}},{key:"increaseHue",value:function(e){return e*=3.6,this.color[0]+=e,this.color[0]>360&&(this.color[0]=360),this}},{key:"increaseSaturation",value:function(e){return this.color[1]+=e,this.color[1]>100&&(this.color[1]=100),this}},{key:"isDark",value:function(){var e=(0,i.default)(this.color);return(299*e[0]+587*e[1]+114*e[2])/1e3<128}},{key:"isLight",value:function(){return!this.isDark()}},{key:"lighten",value:function(e){return this.color[2]+=e,this.color[2]>100&&(this.color[2]=100),this}},{key:"toHex",value:function(){var e=(0,i.default)(this.color),t=e[0],r=e[1];return"#"+(e[2]|r<<8|t<<16|1<<24).toString(16).slice(1).toUpperCase()}}]),e}();t.default=c},function(e,t,r){"use strict";var n=r(5);e.exports=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return((0,i.default)(e)||"[object Object]"!==Object.prototype.toString(e))&&(e={}),e=o("background",e),e=o("text",e),e=o("danger",e),e=o("dangerHighlight",e),e=o("textOnDanger",e),e=o("textOnDangerHighlight",e),e=o("grayedOut",e),e=o("primary",e),e=o("primaryHighlight",e),e=o("textOnPrimary",e),e=o("textOnPrimaryHighlight",e),e=o("secondary",e),e=o("secondary",e),e=o("secondaryHighlight",e),e=o("textOnSecondary",e),e=o("textOnSecondaryHighlight",e),e=o("success",e),e=o("successHighlight",e),e=o("textOnSuccess",e),e=o("textOnSuccessHighlight",e),e=o("warning",e),e=o("warningHighlight",e),e=o("textOnWarning",e),e=o("textOnWarningHighlight",e)};var n=u(r(6)),i=u(r(0));function u(e){return e&&e.__esModule?e:{default:e}}var o=function(e,t){return(0,i.default)(t[e])&&(t[e]=function(e,t){switch(e){case"background":return"#ECF0F1";case"danger":return"#C0392B";case"dangerHighlight":return c(t.danger);case"grayedOut":return"#7F8C8D";case"primary":return"#2C3E50";case"primaryHighlight":return c(t.primary);case"secondary":return"#7F8C8D";case"secondaryHighlight":return c(t.secondary);case"success":return"#2ECC71";case"successHighlight":return c(t.success);case"text":return a(t.background);case"textOnDanger":return a(t.danger);case"textOnDangerHighlight":return a(t.dangerHighlight);case"textOnPrimary":return a(t.primary);case"textOnPrimaryHighlight":return a(t.primaryHighlight);case"textOnSecondary":return a(t.secondary);case"textOnSecondaryHighlight":return a(t.secondaryHighlight);case"textOnSuccess":return a(t.success);case"textOnSuccessHighlight":return a(t.successHighlight);case"textOnWarning":return a(t.warning);case"textOnWarningHighlight":return a(t.warningHighlight);case"warning":return"#F1C40F";case"warningHighlight":return c(t.warning);default:return"#000000"}}(e,t)),t},c=function(e){return new n.default(e).lighten(5).toHex()},a=function(e){return new n.default(e).isLight()?"#000000":"#FFFFFF"}},function(e,t,r){e.exports=r(7)}])});