(()=>{"use strict";function t(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var e,o,c=[],a=!0,i=!1;try{for(r=r.call(t);!(a=(e=r.next()).done)&&(c.push(e.value),!n||c.length!==n);a=!0);}catch(t){i=!0,o=t}finally{try{a||null==r.return||r.return()}finally{if(i)throw o}}return c}(t,r)||function(t,r){if(!t)return;if("string"==typeof t)return n(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return n(t,r)}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}function r(n){if(!n)return"";if("string"==typeof n)return n;if(Array.isArray(n)){var e="";return n.forEach((function(t){var n=r(t);e+=n})),e}var o=n.block,c=n.cls,a=n.content,i=n.attrs,u="",l="";return i&&Object.entries(i).forEach((function(n){var r=t(n,2),e=r[0],o=r[1];u+="".concat(e,'="').concat(o,'"')})),c&&(l='class="'.concat(c,'"')),function(t,n,r,e){return"input"===t||"img"===t?"<".concat(t," ").concat(e).concat(n,">"):"<".concat(t," ").concat(e).concat(n,">").concat(r,"</").concat(t,">")}(o,l,r(a),u)}var e=function(t){return{block:"div",cls:"popover__message",content:"".concat(t)}},o=function(t){return{block:"div",cls:"popover__title",content:"".concat(t)}};const c=function(t,n){return{block:"div",cls:"popover",content:[o(t),e(n)]}};function a(t,n){for(var r=0;r<n.length;r++){var e=n[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}var i=function(){function t(n,e){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t);var o=r(c(n,e));document.body.insertAdjacentHTML("beforeend",o),this.node=document.body.querySelector(".popover")}var n,e,o;return n=t,(e=[{key:"togglePopover",value:function(t){this.node.classList.toggle("popover__active");var n=this.node.getBoundingClientRect(),r=t.getBoundingClientRect(),e=r.left+(r.width-n.width)/2;this.node.style.left="".concat(e,"px"),this.node.style.top="".concat(r.top-n.height-10,"px")}}])&&a(n.prototype,e),o&&a(n,o),t}();new function t(){var n=this;!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t);var r=document.querySelector(".popover__button");this.popover=new i("Bruh Greetings","holla bruh holla bruh holla bruh holla bruh holla bruh",r),r.addEventListener("click",(function(){n.popover.togglePopover(r)}))}})();
//# sourceMappingURL=bundle.js.map