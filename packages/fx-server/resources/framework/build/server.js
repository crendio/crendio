"use strict";var Dr=Object.create;var re=Object.defineProperty;var mt=Object.getOwnPropertyDescriptor;var Nr=Object.getOwnPropertyNames,_t=Object.getOwnPropertySymbols,xr=Object.getPrototypeOf,bt=Object.prototype.hasOwnProperty,Fr=Object.prototype.propertyIsEnumerable;var vt=(o,t,e)=>t in o?re(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,V=(o,t)=>{for(var e in t||={})bt.call(t,e)&&vt(o,e,t[e]);if(_t)for(var e of _t(t))Fr.call(t,e)&&vt(o,e,t[e]);return o};var b=(o,t)=>()=>(t||o((t={exports:{}}).exports,t),t.exports);var Vr=(o,t,e,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of Nr(t))!bt.call(o,n)&&n!==e&&re(o,n,{get:()=>t[n],enumerable:!(r=mt(t,n))||r.enumerable});return o};var Ur=(o,t,e)=>(e=o!=null?Dr(xr(o)):{},Vr(t||!o||!o.__esModule?re(e,"default",{value:o,enumerable:!0}):e,o));var ne=(o,t,e,r)=>{for(var n=r>1?void 0:r?mt(t,e):t,s=o.length-1,u;s>=0;s--)(u=o[s])&&(n=(r?u(t,e,n):u(n))||n);return r&&n&&re(t,e,n),n};var gt=(o,t,e)=>new Promise((r,n)=>{var s=d=>{try{c(e.next(d))}catch(m){n(m)}},u=d=>{try{c(e.throw(d))}catch(m){n(m)}},c=d=>d.done?r(d.value):Promise.resolve(d.value).then(s,u);c((e=e.apply(o,t)).next())});var se=b((vo,ie)=>{var Pt,Ot,jt,Mt,Tt,kt,Et,At,It,oe,Te,Rt,St,L,qt,Ct,Dt,Nt,xt,Ft,Vt,Ut,Gt;(function(o){var t=typeof global=="object"?global:typeof self=="object"?self:typeof this=="object"?this:{};typeof define=="function"&&define.amd?define("tslib",["exports"],function(r){o(e(t,e(r)))}):typeof ie=="object"&&typeof ie.exports=="object"?o(e(t,e(ie.exports))):o(e(t));function e(r,n){return r!==t&&(typeof Object.create=="function"?Object.defineProperty(r,"__esModule",{value:!0}):r.__esModule=!0),function(s,u){return r[s]=n?n(s,u):u}}})(function(o){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var n in r)r.hasOwnProperty(n)&&(e[n]=r[n])};Pt=function(e,r){t(e,r);function n(){this.constructor=e}e.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)},Ot=Object.assign||function(e){for(var r,n=1,s=arguments.length;n<s;n++){r=arguments[n];for(var u in r)Object.prototype.hasOwnProperty.call(r,u)&&(e[u]=r[u])}return e},jt=function(e,r){var n={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&r.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,s=Object.getOwnPropertySymbols(e);u<s.length;u++)r.indexOf(s[u])<0&&Object.prototype.propertyIsEnumerable.call(e,s[u])&&(n[s[u]]=e[s[u]]);return n},Mt=function(e,r,n,s){var u=arguments.length,c=u<3?r:s===null?s=Object.getOwnPropertyDescriptor(r,n):s,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(e,r,n,s);else for(var m=e.length-1;m>=0;m--)(d=e[m])&&(c=(u<3?d(c):u>3?d(r,n,c):d(r,n))||c);return u>3&&c&&Object.defineProperty(r,n,c),c},Tt=function(e,r){return function(n,s){r(n,s,e)}},kt=function(e,r){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,r)},Et=function(e,r,n,s){function u(c){return c instanceof n?c:new n(function(d){d(c)})}return new(n||(n=Promise))(function(c,d){function m(M){try{y(s.next(M))}catch(x){d(x)}}function E(M){try{y(s.throw(M))}catch(x){d(x)}}function y(M){M.done?c(M.value):u(M.value).then(m,E)}y((s=s.apply(e,r||[])).next())})},At=function(e,r){var n={label:0,sent:function(){if(c[0]&1)throw c[1];return c[1]},trys:[],ops:[]},s,u,c,d;return d={next:m(0),throw:m(1),return:m(2)},typeof Symbol=="function"&&(d[Symbol.iterator]=function(){return this}),d;function m(y){return function(M){return E([y,M])}}function E(y){if(s)throw new TypeError("Generator is already executing.");for(;n;)try{if(s=1,u&&(c=y[0]&2?u.return:y[0]?u.throw||((c=u.return)&&c.call(u),0):u.next)&&!(c=c.call(u,y[1])).done)return c;switch(u=0,c&&(y=[y[0]&2,c.value]),y[0]){case 0:case 1:c=y;break;case 4:return n.label++,{value:y[1],done:!1};case 5:n.label++,u=y[1],y=[0];continue;case 7:y=n.ops.pop(),n.trys.pop();continue;default:if(c=n.trys,!(c=c.length>0&&c[c.length-1])&&(y[0]===6||y[0]===2)){n=0;continue}if(y[0]===3&&(!c||y[1]>c[0]&&y[1]<c[3])){n.label=y[1];break}if(y[0]===6&&n.label<c[1]){n.label=c[1],c=y;break}if(c&&n.label<c[2]){n.label=c[2],n.ops.push(y);break}c[2]&&n.ops.pop(),n.trys.pop();continue}y=r.call(e,n)}catch(M){y=[6,M],u=0}finally{s=c=0}if(y[0]&5)throw y[1];return{value:y[0]?y[1]:void 0,done:!0}}},Gt=function(e,r,n,s){s===void 0&&(s=n),e[s]=r[n]},It=function(e,r){for(var n in e)n!=="default"&&!r.hasOwnProperty(n)&&(r[n]=e[n])},oe=function(e){var r=typeof Symbol=="function"&&Symbol.iterator,n=r&&e[r],s=0;if(n)return n.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&s>=e.length&&(e=void 0),{value:e&&e[s++],done:!e}}};throw new TypeError(r?"Object is not iterable.":"Symbol.iterator is not defined.")},Te=function(e,r){var n=typeof Symbol=="function"&&e[Symbol.iterator];if(!n)return e;var s=n.call(e),u,c=[],d;try{for(;(r===void 0||r-- >0)&&!(u=s.next()).done;)c.push(u.value)}catch(m){d={error:m}}finally{try{u&&!u.done&&(n=s.return)&&n.call(s)}finally{if(d)throw d.error}}return c},Rt=function(){for(var e=[],r=0;r<arguments.length;r++)e=e.concat(Te(arguments[r]));return e},St=function(){for(var e=0,r=0,n=arguments.length;r<n;r++)e+=arguments[r].length;for(var s=Array(e),u=0,r=0;r<n;r++)for(var c=arguments[r],d=0,m=c.length;d<m;d++,u++)s[u]=c[d];return s},L=function(e){return this instanceof L?(this.v=e,this):new L(e)},qt=function(e,r,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var s=n.apply(e,r||[]),u,c=[];return u={},d("next"),d("throw"),d("return"),u[Symbol.asyncIterator]=function(){return this},u;function d(O){s[O]&&(u[O]=function(I){return new Promise(function(Z,Pe){c.push([O,I,Z,Pe])>1||m(O,I)})})}function m(O,I){try{E(s[O](I))}catch(Z){x(c[0][3],Z)}}function E(O){O.value instanceof L?Promise.resolve(O.value.v).then(y,M):x(c[0][2],O)}function y(O){m("next",O)}function M(O){m("throw",O)}function x(O,I){O(I),c.shift(),c.length&&m(c[0][0],c[0][1])}},Ct=function(e){var r,n;return r={},s("next"),s("throw",function(u){throw u}),s("return"),r[Symbol.iterator]=function(){return this},r;function s(u,c){r[u]=e[u]?function(d){return(n=!n)?{value:L(e[u](d)),done:u==="return"}:c?c(d):d}:c}},Dt=function(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=e[Symbol.asyncIterator],n;return r?r.call(e):(e=typeof oe=="function"?oe(e):e[Symbol.iterator](),n={},s("next"),s("throw"),s("return"),n[Symbol.asyncIterator]=function(){return this},n);function s(c){n[c]=e[c]&&function(d){return new Promise(function(m,E){d=e[c](d),u(m,E,d.done,d.value)})}}function u(c,d,m,E){Promise.resolve(E).then(function(y){c({value:y,done:m})},d)}},Nt=function(e,r){return Object.defineProperty?Object.defineProperty(e,"raw",{value:r}):e.raw=r,e},xt=function(e){if(e&&e.__esModule)return e;var r={};if(e!=null)for(var n in e)Object.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r.default=e,r},Ft=function(e){return e&&e.__esModule?e:{default:e}},Vt=function(e,r){if(!r.has(e))throw new TypeError("attempted to get private field on non-instance");return r.get(e)},Ut=function(e,r,n){if(!r.has(e))throw new TypeError("attempted to set private field on non-instance");return r.set(e,n),n},o("__extends",Pt),o("__assign",Ot),o("__rest",jt),o("__decorate",Mt),o("__param",Tt),o("__metadata",kt),o("__awaiter",Et),o("__generator",At),o("__exportStar",It),o("__createBinding",Gt),o("__values",oe),o("__read",Te),o("__spread",Rt),o("__spreadArrays",St),o("__await",L),o("__asyncGenerator",qt),o("__asyncDelegator",Ct),o("__asyncValues",Dt),o("__makeTemplateObject",Nt),o("__importStar",xt),o("__importDefault",Ft),o("__classPrivateFieldGet",Vt),o("__classPrivateFieldSet",Ut)})});var Ae=b(Ee=>{"use strict";Object.defineProperty(Ee,"__esModule",{value:!0});var ke;(function(o){o[o.Transient=0]="Transient",o[o.Singleton=1]="Singleton",o[o.ResolutionScoped=2]="ResolutionScoped",o[o.ContainerScoped=3]="ContainerScoped"})(ke||(ke={}));Ee.default=ke});var $t=b(Ie=>{"use strict";Object.defineProperty(Ie,"__esModule",{value:!0});var Gr=Ae();Object.defineProperty(Ie,"Lifecycle",{enumerable:!0,get:function(){return Gr.default}})});var G=b(R=>{"use strict";Object.defineProperty(R,"__esModule",{value:!0});R.defineInjectionTokenMetadata=R.getParamInfo=R.INJECTION_TOKEN_METADATA_KEY=void 0;R.INJECTION_TOKEN_METADATA_KEY="injectionTokens";function $r(o){let t=Reflect.getMetadata("design:paramtypes",o)||[],e=Reflect.getOwnMetadata(R.INJECTION_TOKEN_METADATA_KEY,o)||{};return Object.keys(e).forEach(r=>{t[+r]=e[r]}),t}R.getParamInfo=$r;function Wr(o,t){return function(e,r,n){let s=Reflect.getOwnMetadata(R.INJECTION_TOKEN_METADATA_KEY,e)||{};s[n]=t?{token:o,transform:t.transformToken,transformArgs:t.args||[]}:o,Reflect.defineMetadata(R.INJECTION_TOKEN_METADATA_KEY,s,e)}}R.defineInjectionTokenMetadata=Wr});var Re=b(ae=>{"use strict";Object.defineProperty(ae,"__esModule",{value:!0});ae.isClassProvider=void 0;function Hr(o){return!!o.useClass}ae.isClassProvider=Hr});var Se=b(ue=>{"use strict";Object.defineProperty(ue,"__esModule",{value:!0});ue.isFactoryProvider=void 0;function Yr(o){return!!o.useFactory}ue.isFactoryProvider=Yr});var le=b(z=>{"use strict";Object.defineProperty(z,"__esModule",{value:!0});z.delay=z.DelayedConstructor=void 0;var ce=class{constructor(t){this.wrap=t,this.reflectMethods=["get","getPrototypeOf","setPrototypeOf","getOwnPropertyDescriptor","defineProperty","has","set","deleteProperty","apply","construct","ownKeys"]}createProxy(t){let e={},r=!1,n,s=()=>(r||(n=t(this.wrap()),r=!0),n);return new Proxy(e,this.createHandler(s))}createHandler(t){let e={},r=n=>{e[n]=(...s)=>{s[0]=t();let u=Reflect[n];return u(...s)}};return this.reflectMethods.forEach(r),e}};z.DelayedConstructor=ce;function Jr(o){if(typeof o>"u")throw new Error("Attempt to `delay` undefined. Constructor must be wrapped in a callback");return new ce(o)}z.delay=Jr});var fe=b(q=>{"use strict";Object.defineProperty(q,"__esModule",{value:!0});q.isConstructorToken=q.isTransformDescriptor=q.isTokenDescriptor=q.isNormalToken=void 0;var Br=le();function Lr(o){return typeof o=="string"||typeof o=="symbol"}q.isNormalToken=Lr;function zr(o){return typeof o=="object"&&"token"in o&&"multiple"in o}q.isTokenDescriptor=zr;function Zr(o){return typeof o=="object"&&"token"in o&&"transform"in o}q.isTransformDescriptor=Zr;function Qr(o){return typeof o=="function"||o instanceof Br.DelayedConstructor}q.isConstructorToken=Qr});var qe=b(de=>{"use strict";Object.defineProperty(de,"__esModule",{value:!0});de.isTokenProvider=void 0;function Xr(o){return!!o.useToken}de.isTokenProvider=Xr});var Ce=b(pe=>{"use strict";Object.defineProperty(pe,"__esModule",{value:!0});pe.isValueProvider=void 0;function Kr(o){return o.useValue!=null}pe.isValueProvider=Kr});var De=b($=>{"use strict";Object.defineProperty($,"__esModule",{value:!0});var en=Re();Object.defineProperty($,"isClassProvider",{enumerable:!0,get:function(){return en.isClassProvider}});var tn=Se();Object.defineProperty($,"isFactoryProvider",{enumerable:!0,get:function(){return tn.isFactoryProvider}});var rn=fe();Object.defineProperty($,"isNormalToken",{enumerable:!0,get:function(){return rn.isNormalToken}});var nn=qe();Object.defineProperty($,"isTokenProvider",{enumerable:!0,get:function(){return nn.isTokenProvider}});var sn=Ce();Object.defineProperty($,"isValueProvider",{enumerable:!0,get:function(){return sn.isValueProvider}})});var Wt=b(he=>{"use strict";Object.defineProperty(he,"__esModule",{value:!0});he.isProvider=void 0;var an=Re(),un=Ce(),cn=qe(),ln=Se();function fn(o){return an.isClassProvider(o)||un.isValueProvider(o)||cn.isTokenProvider(o)||ln.isFactoryProvider(o)}he.isProvider=fn});var Fe=b(xe=>{"use strict";Object.defineProperty(xe,"__esModule",{value:!0});var Ne=class{constructor(){this._registryMap=new Map}entries(){return this._registryMap.entries()}getAll(t){return this.ensure(t),this._registryMap.get(t)}get(t){this.ensure(t);let e=this._registryMap.get(t);return e[e.length-1]||null}set(t,e){this.ensure(t),this._registryMap.get(t).push(e)}setAll(t,e){this._registryMap.set(t,e)}has(t){return this.ensure(t),this._registryMap.get(t).length>0}clear(){this._registryMap.clear()}ensure(t){this._registryMap.has(t)||this._registryMap.set(t,[])}};xe.default=Ne});var Ht=b(Ue=>{"use strict";Object.defineProperty(Ue,"__esModule",{value:!0});var dn=Fe(),Ve=class extends dn.default{};Ue.default=Ve});var Yt=b($e=>{"use strict";Object.defineProperty($e,"__esModule",{value:!0});var Ge=class{constructor(){this.scopedResolutions=new Map}};$e.default=Ge});var We=b(ye=>{"use strict";Object.defineProperty(ye,"__esModule",{value:!0});ye.formatErrorCtor=void 0;function pn(o,t){return o===null?`at position #${t}`:`"${o.split(",")[t].trim()}" at position #${t}`}function hn(o,t,e="    "){return[o,...t.message.split(`
`).map(r=>e+r)].join(`
`)}function yn(o,t,e){let[,r=null]=o.toString().match(/constructor\(([\w, ]+)\)/)||[],n=pn(r,t);return hn(`Cannot inject the dependency ${n} of "${o.name}" constructor. Reason:`,e)}ye.formatErrorCtor=yn});var Jt=b(_e=>{"use strict";Object.defineProperty(_e,"__esModule",{value:!0});_e.isDisposable=void 0;function _n(o){return!(typeof o.dispose!="function"||o.dispose.length>0)}_e.isDisposable=_n});var Lt=b(W=>{"use strict";Object.defineProperty(W,"__esModule",{value:!0});W.PostResolutionInterceptors=W.PreResolutionInterceptors=void 0;var Bt=Fe(),ve=class extends Bt.default{};W.PreResolutionInterceptors=ve;var me=class extends Bt.default{};W.PostResolutionInterceptors=me;var He=class{constructor(){this.preResolution=new ve,this.postResolution=new me}};W.default=He});var H=b(D=>{"use strict";Object.defineProperty(D,"__esModule",{value:!0});D.instance=D.typeInfo=void 0;var vn=se(),k=De(),mn=Wt(),be=fe(),bn=Ht(),A=Ae(),zt=Yt(),gn=We(),wn=le(),Pn=Jt(),On=Lt();D.typeInfo=new Map;var X=class{constructor(t){this.parent=t,this._registry=new bn.default,this.interceptors=new On.default,this.disposed=!1,this.disposables=new Set}register(t,e,r={lifecycle:A.default.Transient}){this.ensureNotDisposed();let n;if(mn.isProvider(e)?n=e:n={useClass:e},k.isTokenProvider(n)){let s=[t],u=n;for(;u!=null;){let c=u.useToken;if(s.includes(c))throw new Error(`Token registration cycle detected! ${[...s,c].join(" -> ")}`);s.push(c);let d=this._registry.get(c);d&&k.isTokenProvider(d.provider)?u=d.provider:u=null}}if((r.lifecycle===A.default.Singleton||r.lifecycle==A.default.ContainerScoped||r.lifecycle==A.default.ResolutionScoped)&&(k.isValueProvider(n)||k.isFactoryProvider(n)))throw new Error(`Cannot use lifecycle "${A.default[r.lifecycle]}" with ValueProviders or FactoryProviders`);return this._registry.set(t,{provider:n,options:r}),this}registerType(t,e){return this.ensureNotDisposed(),k.isNormalToken(e)?this.register(t,{useToken:e}):this.register(t,{useClass:e})}registerInstance(t,e){return this.ensureNotDisposed(),this.register(t,{useValue:e})}registerSingleton(t,e){if(this.ensureNotDisposed(),k.isNormalToken(t)){if(k.isNormalToken(e))return this.register(t,{useToken:e},{lifecycle:A.default.Singleton});if(e)return this.register(t,{useClass:e},{lifecycle:A.default.Singleton});throw new Error('Cannot register a type name as a singleton without a "to" token')}let r=t;return e&&!k.isNormalToken(e)&&(r=e),this.register(t,{useClass:r},{lifecycle:A.default.Singleton})}resolve(t,e=new zt.default){this.ensureNotDisposed();let r=this.getRegistration(t);if(!r&&k.isNormalToken(t))throw new Error(`Attempted to resolve unregistered dependency token: "${t.toString()}"`);if(this.executePreResolutionInterceptor(t,"Single"),r){let n=this.resolveRegistration(r,e);return this.executePostResolutionInterceptor(t,n,"Single"),n}if(be.isConstructorToken(t)){let n=this.construct(t,e);return this.executePostResolutionInterceptor(t,n,"Single"),n}throw new Error("Attempted to construct an undefined constructor. Could mean a circular dependency problem. Try using `delay` function.")}executePreResolutionInterceptor(t,e){if(this.interceptors.preResolution.has(t)){let r=[];for(let n of this.interceptors.preResolution.getAll(t))n.options.frequency!="Once"&&r.push(n),n.callback(t,e);this.interceptors.preResolution.setAll(t,r)}}executePostResolutionInterceptor(t,e,r){if(this.interceptors.postResolution.has(t)){let n=[];for(let s of this.interceptors.postResolution.getAll(t))s.options.frequency!="Once"&&n.push(s),s.callback(t,e,r);this.interceptors.postResolution.setAll(t,n)}}resolveRegistration(t,e){if(this.ensureNotDisposed(),t.options.lifecycle===A.default.ResolutionScoped&&e.scopedResolutions.has(t))return e.scopedResolutions.get(t);let r=t.options.lifecycle===A.default.Singleton,n=t.options.lifecycle===A.default.ContainerScoped,s=r||n,u;return k.isValueProvider(t.provider)?u=t.provider.useValue:k.isTokenProvider(t.provider)?u=s?t.instance||(t.instance=this.resolve(t.provider.useToken,e)):this.resolve(t.provider.useToken,e):k.isClassProvider(t.provider)?u=s?t.instance||(t.instance=this.construct(t.provider.useClass,e)):this.construct(t.provider.useClass,e):k.isFactoryProvider(t.provider)?u=t.provider.useFactory(this):u=this.construct(t.provider,e),t.options.lifecycle===A.default.ResolutionScoped&&e.scopedResolutions.set(t,u),u}resolveAll(t,e=new zt.default){this.ensureNotDisposed();let r=this.getAllRegistrations(t);if(!r&&k.isNormalToken(t))throw new Error(`Attempted to resolve unregistered dependency token: "${t.toString()}"`);if(this.executePreResolutionInterceptor(t,"All"),r){let s=r.map(u=>this.resolveRegistration(u,e));return this.executePostResolutionInterceptor(t,s,"All"),s}let n=[this.construct(t,e)];return this.executePostResolutionInterceptor(t,n,"All"),n}isRegistered(t,e=!1){return this.ensureNotDisposed(),this._registry.has(t)||e&&(this.parent||!1)&&this.parent.isRegistered(t,!0)}reset(){this.ensureNotDisposed(),this._registry.clear(),this.interceptors.preResolution.clear(),this.interceptors.postResolution.clear()}clearInstances(){this.ensureNotDisposed();for(let[t,e]of this._registry.entries())this._registry.setAll(t,e.filter(r=>!k.isValueProvider(r.provider)).map(r=>(r.instance=void 0,r)))}createChildContainer(){this.ensureNotDisposed();let t=new X(this);for(let[e,r]of this._registry.entries())r.some(({options:n})=>n.lifecycle===A.default.ContainerScoped)&&t._registry.setAll(e,r.map(n=>n.options.lifecycle===A.default.ContainerScoped?{provider:n.provider,options:n.options}:n));return t}beforeResolution(t,e,r={frequency:"Always"}){this.interceptors.preResolution.set(t,{callback:e,options:r})}afterResolution(t,e,r={frequency:"Always"}){this.interceptors.postResolution.set(t,{callback:e,options:r})}dispose(){return vn.__awaiter(this,void 0,void 0,function*(){this.disposed=!0;let t=[];this.disposables.forEach(e=>{let r=e.dispose();r&&t.push(r)}),yield Promise.all(t)})}getRegistration(t){return this.isRegistered(t)?this._registry.get(t):this.parent?this.parent.getRegistration(t):null}getAllRegistrations(t){return this.isRegistered(t)?this._registry.getAll(t):this.parent?this.parent.getAllRegistrations(t):null}construct(t,e){if(t instanceof wn.DelayedConstructor)return t.createProxy(n=>this.resolve(n,e));let r=(()=>{let n=D.typeInfo.get(t);if(!n||n.length===0){if(t.length===0)return new t;throw new Error(`TypeInfo not known for "${t.name}"`)}let s=n.map(this.resolveParams(e,t));return new t(...s)})();return Pn.isDisposable(r)&&this.disposables.add(r),r}resolveParams(t,e){return(r,n)=>{try{return be.isTokenDescriptor(r)?be.isTransformDescriptor(r)?r.multiple?this.resolve(r.transform).transform(this.resolveAll(r.token),...r.transformArgs):this.resolve(r.transform).transform(this.resolve(r.token,t),...r.transformArgs):r.multiple?this.resolveAll(r.token):this.resolve(r.token,t):be.isTransformDescriptor(r)?this.resolve(r.transform,t).transform(this.resolve(r.token,t),...r.transformArgs):this.resolve(r,t)}catch(s){throw new Error(gn.formatErrorCtor(e,n,s))}}}ensureNotDisposed(){if(this.disposed)throw new Error("This container has been disposed, you cannot interact with a disposed container")}};D.instance=new X;D.default=D.instance});var Zt=b(Je=>{"use strict";Object.defineProperty(Je,"__esModule",{value:!0});var jn=G(),N=H(),Ye=fe(),Mn=We();function Tn(){return function(o){let t=jn.getParamInfo(o);return class extends o{constructor(...e){super(...e.concat(t.slice(e.length).map((r,n)=>{try{return Ye.isTokenDescriptor(r)?Ye.isTransformDescriptor(r)?r.multiple?N.instance.resolve(r.transform).transform(N.instance.resolveAll(r.token),...r.transformArgs):N.instance.resolve(r.transform).transform(N.instance.resolve(r.token),...r.transformArgs):r.multiple?N.instance.resolveAll(r.token):N.instance.resolve(r.token):Ye.isTransformDescriptor(r)?N.instance.resolve(r.transform).transform(N.instance.resolve(r.token),...r.transformArgs):N.instance.resolve(r)}catch(s){let u=n+e.length;throw new Error(Mn.formatErrorCtor(o,u,s))}})))}}}}Je.default=Tn});var Qt=b(Be=>{"use strict";Object.defineProperty(Be,"__esModule",{value:!0});var kn=G();function En(o){return kn.defineInjectionTokenMetadata(o)}Be.default=En});var ge=b(Le=>{"use strict";Object.defineProperty(Le,"__esModule",{value:!0});var An=G(),In=H();function Rn(){return function(o){In.typeInfo.set(o,An.getParamInfo(o))}}Le.default=Rn});var Xt=b(ze=>{"use strict";Object.defineProperty(ze,"__esModule",{value:!0});var Sn=se(),qn=H();function Cn(o=[]){return function(t){return o.forEach(e=>{var{token:r,options:n}=e,s=Sn.__rest(e,["token","options"]);return qn.instance.register(r,s,n)}),t}}ze.default=Cn});var Kt=b(Ze=>{"use strict";Object.defineProperty(Ze,"__esModule",{value:!0});var Dn=ge(),Nn=H();function xn(){return function(o){Dn.default()(o),Nn.instance.registerSingleton(o)}}Ze.default=xn});var er=b(Qe=>{"use strict";Object.defineProperty(Qe,"__esModule",{value:!0});var Fn=G();function Vn(o){let t={token:o,multiple:!0};return Fn.defineInjectionTokenMetadata(t)}Qe.default=Vn});var tr=b(Xe=>{"use strict";Object.defineProperty(Xe,"__esModule",{value:!0});var Un=G();function Gn(o,t,...e){let r={token:o,multiple:!0,transform:t,transformArgs:e};return Un.defineInjectionTokenMetadata(r)}Xe.default=Gn});var rr=b(Ke=>{"use strict";Object.defineProperty(Ke,"__esModule",{value:!0});var $n=G();function Wn(o,t,...e){return $n.defineInjectionTokenMetadata(o,{transformToken:t,args:e})}Ke.default=Wn});var nr=b(et=>{"use strict";Object.defineProperty(et,"__esModule",{value:!0});var Hn=ge(),Yn=H();function Jn(o,t){return function(e){Hn.default()(e),Yn.instance.register(t||e,e,{lifecycle:o})}}et.default=Jn});var or=b(S=>{"use strict";Object.defineProperty(S,"__esModule",{value:!0});var Bn=Zt();Object.defineProperty(S,"autoInjectable",{enumerable:!0,get:function(){return Bn.default}});var Ln=Qt();Object.defineProperty(S,"inject",{enumerable:!0,get:function(){return Ln.default}});var zn=ge();Object.defineProperty(S,"injectable",{enumerable:!0,get:function(){return zn.default}});var Zn=Xt();Object.defineProperty(S,"registry",{enumerable:!0,get:function(){return Zn.default}});var Qn=Kt();Object.defineProperty(S,"singleton",{enumerable:!0,get:function(){return Qn.default}});var Xn=er();Object.defineProperty(S,"injectAll",{enumerable:!0,get:function(){return Xn.default}});var Kn=tr();Object.defineProperty(S,"injectAllWithTransform",{enumerable:!0,get:function(){return Kn.default}});var eo=rr();Object.defineProperty(S,"injectWithTransform",{enumerable:!0,get:function(){return eo.default}});var to=nr();Object.defineProperty(S,"scoped",{enumerable:!0,get:function(){return to.default}})});var ir=b(tt=>{"use strict";Object.defineProperty(tt,"__esModule",{value:!0});function ro(o){let t;return e=>(t==null&&(t=o(e)),t)}tt.default=ro});var sr=b(rt=>{"use strict";Object.defineProperty(rt,"__esModule",{value:!0});function no(o){let t=new WeakMap;return e=>{let r=t.get(e);return r==null&&(r=o(e),t.set(e,r)),r}}rt.default=no});var ar=b(nt=>{"use strict";Object.defineProperty(nt,"__esModule",{value:!0});function oo(o,t,e,r=!0){let n,s;return u=>{let c=o(u);return(!r||s!==c)&&((s=c)?n=u.resolve(t):n=u.resolve(e)),n}}nt.default=oo});var ur=b(K=>{"use strict";Object.defineProperty(K,"__esModule",{value:!0});var io=ir();Object.defineProperty(K,"instanceCachingFactory",{enumerable:!0,get:function(){return io.default}});var so=sr();Object.defineProperty(K,"instancePerContainerCachingFactory",{enumerable:!0,get:function(){return so.default}});var ao=ar();Object.defineProperty(K,"predicateAwareClassFactory",{enumerable:!0,get:function(){return ao.default}})});var cr=b(U=>{"use strict";Object.defineProperty(U,"__esModule",{value:!0});var ot=se();if(typeof Reflect>"u"||!Reflect.getMetadata)throw new Error(`tsyringe requires a reflect polyfill. Please add 'import "reflect-metadata"' to the top of your entry point.`);var uo=$t();Object.defineProperty(U,"Lifecycle",{enumerable:!0,get:function(){return uo.Lifecycle}});ot.__exportStar(or(),U);ot.__exportStar(ur(),U);ot.__exportStar(De(),U);var co=le();Object.defineProperty(U,"delay",{enumerable:!0,get:function(){return co.delay}});var lo=H();Object.defineProperty(U,"container",{enumerable:!0,get:function(){return lo.instance}})});var wt;(function(o){(function(t){var e=typeof global=="object"?global:typeof self=="object"?self:typeof this=="object"?this:Function("return this;")(),r=n(o);typeof e.Reflect>"u"?e.Reflect=o:r=n(e.Reflect,r),t(r);function n(s,u){return function(c,d){typeof s[c]!="function"&&Object.defineProperty(s,c,{configurable:!0,writable:!0,value:d}),u&&u(c,d)}}})(function(t){var e=Object.prototype.hasOwnProperty,r=typeof Symbol=="function",n=r&&typeof Symbol.toPrimitive<"u"?Symbol.toPrimitive:"@@toPrimitive",s=r&&typeof Symbol.iterator<"u"?Symbol.iterator:"@@iterator",u=typeof Object.create=="function",c={__proto__:[]}instanceof Array,d=!u&&!c,m={create:u?function(){return Me(Object.create(null))}:c?function(){return Me({__proto__:null})}:function(){return Me({})},has:d?function(i,a){return e.call(i,a)}:function(i,a){return a in i},get:d?function(i,a){return e.call(i,a)?i[a]:void 0}:function(i,a){return i[a]}},E=Object.getPrototypeOf(Function),y=typeof process=="object"&&process.env&&process.env.REFLECT_METADATA_USE_MAP_POLYFILL==="true",M=!y&&typeof Map=="function"&&typeof Map.prototype.entries=="function"?Map:Sr(),x=!y&&typeof Set=="function"&&typeof Set.prototype.entries=="function"?Set:qr(),O=!y&&typeof WeakMap=="function"?WeakMap:Cr(),I=new O;function Z(i,a,l,f){if(P(l)){if(!dt(i))throw new TypeError;if(!pt(a))throw new TypeError;return gr(i,a)}else{if(!dt(i))throw new TypeError;if(!j(a))throw new TypeError;if(!j(f)&&!P(f)&&!J(f))throw new TypeError;return J(f)&&(f=void 0),l=C(l),wr(i,a,l,f)}}t("decorate",Z);function Pe(i,a){function l(f,p){if(!j(f))throw new TypeError;if(!P(p)&&!kr(p))throw new TypeError;ut(i,a,f,p)}return l}t("metadata",Pe);function dr(i,a,l,f){if(!j(l))throw new TypeError;return P(f)||(f=C(f)),ut(i,a,l,f)}t("defineMetadata",dr);function pr(i,a,l){if(!j(a))throw new TypeError;return P(l)||(l=C(l)),it(i,a,l)}t("hasMetadata",pr);function hr(i,a,l){if(!j(a))throw new TypeError;return P(l)||(l=C(l)),Oe(i,a,l)}t("hasOwnMetadata",hr);function yr(i,a,l){if(!j(a))throw new TypeError;return P(l)||(l=C(l)),st(i,a,l)}t("getMetadata",yr);function _r(i,a,l){if(!j(a))throw new TypeError;return P(l)||(l=C(l)),at(i,a,l)}t("getOwnMetadata",_r);function vr(i,a){if(!j(i))throw new TypeError;return P(a)||(a=C(a)),ct(i,a)}t("getMetadataKeys",vr);function mr(i,a){if(!j(i))throw new TypeError;return P(a)||(a=C(a)),lt(i,a)}t("getOwnMetadataKeys",mr);function br(i,a,l){if(!j(a))throw new TypeError;P(l)||(l=C(l));var f=Q(a,l,!1);if(P(f)||!f.delete(i))return!1;if(f.size>0)return!0;var p=I.get(a);return p.delete(l),p.size>0||I.delete(a),!0}t("deleteMetadata",br);function gr(i,a){for(var l=i.length-1;l>=0;--l){var f=i[l],p=f(a);if(!P(p)&&!J(p)){if(!pt(p))throw new TypeError;a=p}}return a}function wr(i,a,l,f){for(var p=i.length-1;p>=0;--p){var T=i[p],_=T(a,l,f);if(!P(_)&&!J(_)){if(!j(_))throw new TypeError;f=_}}return f}function Q(i,a,l){var f=I.get(i);if(P(f)){if(!l)return;f=new M,I.set(i,f)}var p=f.get(a);if(P(p)){if(!l)return;p=new M,f.set(a,p)}return p}function it(i,a,l){var f=Oe(i,a,l);if(f)return!0;var p=je(a);return J(p)?!1:it(i,p,l)}function Oe(i,a,l){var f=Q(a,l,!1);return P(f)?!1:Mr(f.has(i))}function st(i,a,l){var f=Oe(i,a,l);if(f)return at(i,a,l);var p=je(a);if(!J(p))return st(i,p,l)}function at(i,a,l){var f=Q(a,l,!1);if(!P(f))return f.get(i)}function ut(i,a,l,f){var p=Q(l,f,!0);p.set(i,a)}function ct(i,a){var l=lt(i,a),f=je(i);if(f===null)return l;var p=ct(f,a);if(p.length<=0)return l;if(l.length<=0)return p;for(var T=new x,_=[],v=0,h=l;v<h.length;v++){var g=h[v],w=T.has(g);w||(T.add(g),_.push(g))}for(var F=0,yt=p;F<yt.length;F++){var g=yt[F],w=T.has(g);w||(T.add(g),_.push(g))}return _}function lt(i,a){var l=[],f=Q(i,a,!1);if(P(f))return l;for(var p=f.keys(),T=Er(p),_=0;;){var v=Ir(T);if(!v)return l.length=_,l;var h=Ar(v);try{l[_]=h}catch(g){try{Rr(T)}finally{throw g}}_++}}function ft(i){if(i===null)return 1;switch(typeof i){case"undefined":return 0;case"boolean":return 2;case"string":return 3;case"symbol":return 4;case"number":return 5;case"object":return i===null?1:6;default:return 6}}function P(i){return i===void 0}function J(i){return i===null}function Pr(i){return typeof i=="symbol"}function j(i){return typeof i=="object"?i!==null:typeof i=="function"}function Or(i,a){switch(ft(i)){case 0:return i;case 1:return i;case 2:return i;case 3:return i;case 4:return i;case 5:return i}var l=a===3?"string":a===5?"number":"default",f=ht(i,n);if(f!==void 0){var p=f.call(i,l);if(j(p))throw new TypeError;return p}return jr(i,l==="default"?"number":l)}function jr(i,a){if(a==="string"){var l=i.toString;if(B(l)){var f=l.call(i);if(!j(f))return f}var p=i.valueOf;if(B(p)){var f=p.call(i);if(!j(f))return f}}else{var p=i.valueOf;if(B(p)){var f=p.call(i);if(!j(f))return f}var T=i.toString;if(B(T)){var f=T.call(i);if(!j(f))return f}}throw new TypeError}function Mr(i){return!!i}function Tr(i){return""+i}function C(i){var a=Or(i,3);return Pr(a)?a:Tr(a)}function dt(i){return Array.isArray?Array.isArray(i):i instanceof Object?i instanceof Array:Object.prototype.toString.call(i)==="[object Array]"}function B(i){return typeof i=="function"}function pt(i){return typeof i=="function"}function kr(i){switch(ft(i)){case 3:return!0;case 4:return!0;default:return!1}}function ht(i,a){var l=i[a];if(l!=null){if(!B(l))throw new TypeError;return l}}function Er(i){var a=ht(i,s);if(!B(a))throw new TypeError;var l=a.call(i);if(!j(l))throw new TypeError;return l}function Ar(i){return i.value}function Ir(i){var a=i.next();return a.done?!1:a}function Rr(i){var a=i.return;a&&a.call(i)}function je(i){var a=Object.getPrototypeOf(i);if(typeof i!="function"||i===E||a!==E)return a;var l=i.prototype,f=l&&Object.getPrototypeOf(l);if(f==null||f===Object.prototype)return a;var p=f.constructor;return typeof p!="function"||p===i?a:p}function Sr(){var i={},a=[],l=function(){function _(v,h,g){this._index=0,this._keys=v,this._values=h,this._selector=g}return _.prototype["@@iterator"]=function(){return this},_.prototype[s]=function(){return this},_.prototype.next=function(){var v=this._index;if(v>=0&&v<this._keys.length){var h=this._selector(this._keys[v],this._values[v]);return v+1>=this._keys.length?(this._index=-1,this._keys=a,this._values=a):this._index++,{value:h,done:!1}}return{value:void 0,done:!0}},_.prototype.throw=function(v){throw this._index>=0&&(this._index=-1,this._keys=a,this._values=a),v},_.prototype.return=function(v){return this._index>=0&&(this._index=-1,this._keys=a,this._values=a),{value:v,done:!0}},_}();return function(){function _(){this._keys=[],this._values=[],this._cacheKey=i,this._cacheIndex=-2}return Object.defineProperty(_.prototype,"size",{get:function(){return this._keys.length},enumerable:!0,configurable:!0}),_.prototype.has=function(v){return this._find(v,!1)>=0},_.prototype.get=function(v){var h=this._find(v,!1);return h>=0?this._values[h]:void 0},_.prototype.set=function(v,h){var g=this._find(v,!0);return this._values[g]=h,this},_.prototype.delete=function(v){var h=this._find(v,!1);if(h>=0){for(var g=this._keys.length,w=h+1;w<g;w++)this._keys[w-1]=this._keys[w],this._values[w-1]=this._values[w];return this._keys.length--,this._values.length--,v===this._cacheKey&&(this._cacheKey=i,this._cacheIndex=-2),!0}return!1},_.prototype.clear=function(){this._keys.length=0,this._values.length=0,this._cacheKey=i,this._cacheIndex=-2},_.prototype.keys=function(){return new l(this._keys,this._values,f)},_.prototype.values=function(){return new l(this._keys,this._values,p)},_.prototype.entries=function(){return new l(this._keys,this._values,T)},_.prototype["@@iterator"]=function(){return this.entries()},_.prototype[s]=function(){return this.entries()},_.prototype._find=function(v,h){return this._cacheKey!==v&&(this._cacheIndex=this._keys.indexOf(this._cacheKey=v)),this._cacheIndex<0&&h&&(this._cacheIndex=this._keys.length,this._keys.push(v),this._values.push(void 0)),this._cacheIndex},_}();function f(_,v){return _}function p(_,v){return v}function T(_,v){return[_,v]}}function qr(){return function(){function i(){this._map=new M}return Object.defineProperty(i.prototype,"size",{get:function(){return this._map.size},enumerable:!0,configurable:!0}),i.prototype.has=function(a){return this._map.has(a)},i.prototype.add=function(a){return this._map.set(a,a),this},i.prototype.delete=function(a){return this._map.delete(a)},i.prototype.clear=function(){this._map.clear()},i.prototype.keys=function(){return this._map.keys()},i.prototype.values=function(){return this._map.values()},i.prototype.entries=function(){return this._map.entries()},i.prototype["@@iterator"]=function(){return this.keys()},i.prototype[s]=function(){return this.keys()},i}()}function Cr(){var i=16,a=m.create(),l=f();return function(){function h(){this._key=f()}return h.prototype.has=function(g){var w=p(g,!1);return w!==void 0?m.has(w,this._key):!1},h.prototype.get=function(g){var w=p(g,!1);return w!==void 0?m.get(w,this._key):void 0},h.prototype.set=function(g,w){var F=p(g,!0);return F[this._key]=w,this},h.prototype.delete=function(g){var w=p(g,!1);return w!==void 0?delete w[this._key]:!1},h.prototype.clear=function(){this._key=f()},h}();function f(){var h;do h="@@WeakMap@@"+v();while(m.has(a,h));return a[h]=!0,h}function p(h,g){if(!e.call(h,l)){if(!g)return;Object.defineProperty(h,l,{value:m.create()})}return h[l]}function T(h,g){for(var w=0;w<g;++w)h[w]=Math.random()*255|0;return h}function _(h){return typeof Uint8Array=="function"?typeof crypto<"u"?crypto.getRandomValues(new Uint8Array(h)):typeof msCrypto<"u"?msCrypto.getRandomValues(new Uint8Array(h)):T(new Uint8Array(h),h):T(new Array(h),h)}function v(){var h=_(i);h[6]=h[6]&79|64,h[8]=h[8]&191|128;for(var g="",w=0;w<i;++w){var F=h[w];(w===4||w===6||w===8)&&(g+="-"),F<16&&(g+="0"),g+=F.toString(16).toLowerCase()}return g}}function Me(i){return i.__=void 0,delete i.__,i}})})(wt||(wt={}));var te=Ur(cr());var ee=class{static getMetadata(t,e,r){let n=Reflect.getOwnMetadata(e,t);return n||r}static wait(t){return new Promise(e=>setTimeout(e,t))}static loadModel(t){return gt(this,null,function*(){return new Promise((e,r)=>{RequestModel(t);let n=setTick(()=>{HasModelLoaded(t)&&(clearTick(n),e())})})})}};var fo={global:!1},lr=o=>{let t=o||{},e=V(V({},fo),t);return function(r){let n=ee.getMetadata(r.prototype,"events",{}),s=ee.getMetadata(r.prototype,"commands",[]),u=class extends r{constructor(...c){super(...c),po(this,n),ho(this,s)}};if(e.global){let c=(0,te.autoInjectable)()(u);return(0,te.singleton)()(c),c}return(0,te.autoInjectable)()(u)}},po=(o,t)=>{for(let[e,r]of Object.entries(t))r.options.net?onNet(e,(...n)=>{let s=global.source;o[r.methodName](s,...n)}):on(e,(...n)=>{let s=global.source;o[r.methodName](s,...n)})},ho=(o,t)=>{for(let e of t)RegisterCommand(e.command,(...r)=>{let n=[];if(e.restrictors){let s=!1;for(let u of e.restrictors)if(u()===!1){s=!0,n.push("You do not have permission to run this command!");break}}if(n.length>0){n.forEach(s=>{IsDuplicityVersion()&&console.log(s)});return}(void 0)[e.handler](r[0],[...r[1]])},!1)};var yo={modules:[]},fr=o=>{let t=o||{},e=V(V({},yo),t);return function(r){let n=[],s=[];for(let c of e.modules){let d=Reflect.getMetadata("events",c.prototype);if(d)for(let[,E]of Object.entries(d))n.push(E.methodName);let m=new c;m.$onReady&&s.push(m.$onReady)}let u=class extends r{constructor(...c){super(...c),s.forEach(d=>{d.call(this)}),Object.defineProperty(this,"events",{value:n,writable:!0,configurable:!0})}};return new u,u}};var Y=class{$onReady(){console.log("Test server ready!")}};Y=ne([lr({global:!0})],Y);var we=class{constructor(){console.log("Hello there!")}};we=ne([fr({modules:[Y]})],we);
/*! *****************************************************************************
Copyright (C) Microsoft. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
