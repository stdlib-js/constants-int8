// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty,r=Object.prototype,o=r.toString,a=r.__defineGetter__,n=r.__defineSetter__,l=r.__lookupGetter__,i=r.__lookupSetter__;var _=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?t:function(e,t,_){var u,c,p,f;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof _||null===_||"[object Array]"===o.call(_))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+_+"`.");if((c="value"in _)&&(l.call(e,t)||i.call(e,t)?(u=e.__proto__,e.__proto__=r,delete e[t],e[t]=_.value,e.__proto__=u):e[t]=_.value),p="get"in _,f="set"in _,c&&(p||f))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&a&&a.call(e,t,_.get),f&&n&&n.call(e,t,_.set),e};function u(e,t,r){_(e,t,{configurable:!1,enumerable:!0,writable:!1,value:r})}var c=127,p=-128,f=1,b={};u(b,"MAX",127),u(b,"MIN",-128),u(b,"NUM_BYTES",1);export{c as MAX,p as MIN,f as NUM_BYTES,b as default};
//# sourceMappingURL=mod.js.map
