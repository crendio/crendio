"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// ../../node_modules/tsyringe/node_modules/tslib/tslib.js
var require_tslib = __commonJS({
  "../../node_modules/tsyringe/node_modules/tslib/tslib.js"(exports, module2) {
    var __extends;
    var __assign;
    var __rest;
    var __decorate;
    var __param;
    var __metadata;
    var __awaiter;
    var __generator;
    var __exportStar;
    var __values;
    var __read;
    var __spread;
    var __spreadArrays;
    var __await;
    var __asyncGenerator;
    var __asyncDelegator;
    var __asyncValues;
    var __makeTemplateObject;
    var __importStar;
    var __importDefault;
    var __classPrivateFieldGet;
    var __classPrivateFieldSet;
    var __createBinding;
    (function(factory) {
      var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
      if (typeof define === "function" && define.amd) {
        define("tslib", ["exports"], function(exports2) {
          factory(createExporter(root, createExporter(exports2)));
        });
      } else if (typeof module2 === "object" && typeof module2.exports === "object") {
        factory(createExporter(root, createExporter(module2.exports)));
      } else {
        factory(createExporter(root));
      }
      function createExporter(exports2, previous) {
        if (exports2 !== root) {
          if (typeof Object.create === "function") {
            Object.defineProperty(exports2, "__esModule", { value: true });
          } else {
            exports2.__esModule = true;
          }
        }
        return function(id, v) {
          return exports2[id] = previous ? previous(id, v) : v;
        };
      }
    })(function(exporter) {
      var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b)
          if (b.hasOwnProperty(p))
            d[p] = b[p];
      };
      __extends = function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      __rest = function(s, e) {
        var t = {};
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
          for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
          }
        return t;
      };
      __decorate = function(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          r = Reflect.decorate(decorators, target, key, desc);
        else
          for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
              r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      __param = function(paramIndex, decorator) {
        return function(target, key) {
          decorator(target, key, paramIndex);
        };
      };
      __metadata = function(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
          return Reflect.metadata(metadataKey, metadataValue);
      };
      __awaiter = function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        return new (P || (P = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      __generator = function(thisArg, body) {
        var _ = { label: 0, sent: function() {
          if (t[0] & 1)
            throw t[1];
          return t[1];
        }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
          return this;
        }), g;
        function verb(n) {
          return function(v) {
            return step([n, v]);
          };
        }
        function step(op) {
          if (f)
            throw new TypeError("Generator is already executing.");
          while (_)
            try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                return t;
              if (y = 0, t)
                op = [op[0] & 2, t.value];
              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;
                case 4:
                  _.label++;
                  return { value: op[1], done: false };
                case 5:
                  _.label++;
                  y = op[1];
                  op = [0];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }
                  if (t && _.label < t[2]) {
                    _.label = t[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t[2])
                    _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _);
            } catch (e) {
              op = [6, e];
              y = 0;
            } finally {
              f = t = 0;
            }
          if (op[0] & 5)
            throw op[1];
          return { value: op[0] ? op[1] : void 0, done: true };
        }
      };
      __createBinding = function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      };
      __exportStar = function(m, exports2) {
        for (var p in m)
          if (p !== "default" && !exports2.hasOwnProperty(p))
            exports2[p] = m[p];
      };
      __values = function(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
          return m.call(o);
        if (o && typeof o.length === "number")
          return {
            next: function() {
              if (o && i >= o.length)
                o = void 0;
              return { value: o && o[i++], done: !o };
            }
          };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
      };
      __read = function(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
          return o;
        var i = m.call(o), r, ar = [], e;
        try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
            ar.push(r.value);
        } catch (error) {
          e = { error };
        } finally {
          try {
            if (r && !r.done && (m = i["return"]))
              m.call(i);
          } finally {
            if (e)
              throw e.error;
          }
        }
        return ar;
      };
      __spread = function() {
        for (var ar = [], i = 0; i < arguments.length; i++)
          ar = ar.concat(__read(arguments[i]));
        return ar;
      };
      __spreadArrays = function() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
          s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
          for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
        return r;
      };
      __await = function(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
      };
      __asyncGenerator = function(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
          return this;
        }, i;
        function verb(n) {
          if (g[n])
            i[n] = function(v) {
              return new Promise(function(a, b) {
                q.push([n, v, a, b]) > 1 || resume(n, v);
              });
            };
        }
        function resume(n, v) {
          try {
            step(g[n](v));
          } catch (e) {
            settle(q[0][3], e);
          }
        }
        function step(r) {
          r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
        }
        function fulfill(value) {
          resume("next", value);
        }
        function reject(value) {
          resume("throw", value);
        }
        function settle(f, v) {
          if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]);
        }
      };
      __asyncDelegator = function(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function(e) {
          throw e;
        }), verb("return"), i[Symbol.iterator] = function() {
          return this;
        }, i;
        function verb(n, f) {
          i[n] = o[n] ? function(v) {
            return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v;
          } : f;
        }
      };
      __asyncValues = function(o) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
          return this;
        }, i);
        function verb(n) {
          i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
              v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
          };
        }
        function settle(resolve, reject, d, v) {
          Promise.resolve(v).then(function(v2) {
            resolve({ value: v2, done: d });
          }, reject);
        }
      };
      __makeTemplateObject = function(cooked, raw) {
        if (Object.defineProperty) {
          Object.defineProperty(cooked, "raw", { value: raw });
        } else {
          cooked.raw = raw;
        }
        return cooked;
      };
      __importStar = function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (Object.hasOwnProperty.call(mod, k))
              result[k] = mod[k];
        }
        result["default"] = mod;
        return result;
      };
      __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      __classPrivateFieldGet = function(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
          throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
      };
      __classPrivateFieldSet = function(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
          throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
      };
      exporter("__extends", __extends);
      exporter("__assign", __assign);
      exporter("__rest", __rest);
      exporter("__decorate", __decorate);
      exporter("__param", __param);
      exporter("__metadata", __metadata);
      exporter("__awaiter", __awaiter);
      exporter("__generator", __generator);
      exporter("__exportStar", __exportStar);
      exporter("__createBinding", __createBinding);
      exporter("__values", __values);
      exporter("__read", __read);
      exporter("__spread", __spread);
      exporter("__spreadArrays", __spreadArrays);
      exporter("__await", __await);
      exporter("__asyncGenerator", __asyncGenerator);
      exporter("__asyncDelegator", __asyncDelegator);
      exporter("__asyncValues", __asyncValues);
      exporter("__makeTemplateObject", __makeTemplateObject);
      exporter("__importStar", __importStar);
      exporter("__importDefault", __importDefault);
      exporter("__classPrivateFieldGet", __classPrivateFieldGet);
      exporter("__classPrivateFieldSet", __classPrivateFieldSet);
    });
  }
});

// ../../node_modules/tsyringe/dist/cjs/types/lifecycle.js
var require_lifecycle = __commonJS({
  "../../node_modules/tsyringe/dist/cjs/types/lifecycle.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Lifecycle;
    (function(Lifecycle2) {
      Lifecycle2[Lifecycle2["Transient"] = 0] = "Transient";
      Lifecycle2[Lifecycle2["Singleton"] = 1] = "Singleton";
      Lifecycle2[Lifecycle2["ResolutionScoped"] = 2] = "ResolutionScoped";
      Lifecycle2[Lifecycle2["ContainerScoped"] = 3] = "ContainerScoped";
    })(Lifecycle || (Lifecycle = {}));
    exports.default = Lifecycle;
  }
});

// ../../node_modules/tsyringe/dist/cjs/types/index.js
var require_types = __commonJS({
  "../../node_modules/tsyringe/dist/cjs/types/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var lifecycle_1 = require_lifecycle();
    Object.defineProperty(exports, "Lifecycle", { enumerable: true, get: function() {
      return lifecycle_1.default;
    } });
  }
});

// ../../node_modules/tsyringe/dist/cjs/reflection-helpers.js
var require_reflection_helpers = __commonJS({
  "../../node_modules/tsyringe/dist/cjs/reflection-helpers.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.defineInjectionTokenMetadata = exports.getParamInfo = exports.INJECTION_TOKEN_METADATA_KEY = void 0;
    exports.INJECTION_TOKEN_METADATA_KEY = "injectionTokens";
    function getParamInfo(target) {
      const params = Reflect.getMetadata("design:paramtypes", target) || [];
      const injectionTokens = Reflect.getOwnMetadata(exports.INJECTION_TOKEN_METADATA_KEY, target) || {};
      Object.keys(injectionTokens).forEach((key) => {
        params[+key] = injectionTokens[key];
      });
      return params;
    }
    exports.getParamInfo = getParamInfo;
    function defineInjectionTokenMetadata(data, transform) {
      return function(target, _propertyKey, parameterIndex) {
        const descriptors = Reflect.getOwnMetadata(exports.INJECTION_TOKEN_METADATA_KEY, target) || {};
        descriptors[parameterIndex] = transform ? {
          token: data,
          transform: transform.transformToken,
          transformArgs: transform.args || []
        } : data;
        Reflect.defineMetadata(exports.INJECTION_TOKEN_METADATA_KEY, descriptors, target);
      };
    }
    exports.defineInjectionTokenMetadata = defineInjectionTokenMetadata;
  }
});

// ../../node_modules/tsyringe/dist/cjs/providers/class-provider.js
var require_class_provider = __commonJS({
  "../../node_modules/tsyringe/dist/cjs/providers/class-provider.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isClassProvider = void 0;
    function isClassProvider(provider) {
      return !!provider.useClass;
    }
    exports.isClassProvider = isClassProvider;
  }
});

// ../../node_modules/tsyringe/dist/cjs/providers/factory-provider.js
var require_factory_provider = __commonJS({
  "../../node_modules/tsyringe/dist/cjs/providers/factory-provider.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isFactoryProvider = void 0;
    function isFactoryProvider(provider) {
      return !!provider.useFactory;
    }
    exports.isFactoryProvider = isFactoryProvider;
  }
});

// ../../node_modules/tsyringe/dist/cjs/lazy-helpers.js
var require_lazy_helpers = __commonJS({
  "../../node_modules/tsyringe/dist/cjs/lazy-helpers.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.delay = exports.DelayedConstructor = void 0;
    var DelayedConstructor = class {
      constructor(wrap) {
        this.wrap = wrap;
        this.reflectMethods = [
          "get",
          "getPrototypeOf",
          "setPrototypeOf",
          "getOwnPropertyDescriptor",
          "defineProperty",
          "has",
          "set",
          "deleteProperty",
          "apply",
          "construct",
          "ownKeys"
        ];
      }
      createProxy(createObject) {
        const target = {};
        let init = false;
        let value;
        const delayedObject = () => {
          if (!init) {
            value = createObject(this.wrap());
            init = true;
          }
          return value;
        };
        return new Proxy(target, this.createHandler(delayedObject));
      }
      createHandler(delayedObject) {
        const handler = {};
        const install = (name) => {
          handler[name] = (...args) => {
            args[0] = delayedObject();
            const method = Reflect[name];
            return method(...args);
          };
        };
        this.reflectMethods.forEach(install);
        return handler;
      }
    };
    exports.DelayedConstructor = DelayedConstructor;
    function delay(wrappedConstructor) {
      if (typeof wrappedConstructor === "undefined") {
        throw new Error("Attempt to `delay` undefined. Constructor must be wrapped in a callback");
      }
      return new DelayedConstructor(wrappedConstructor);
    }
    exports.delay = delay;
  }
});

// ../../node_modules/tsyringe/dist/cjs/providers/injection-token.js
var require_injection_token = __commonJS({
  "../../node_modules/tsyringe/dist/cjs/providers/injection-token.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isConstructorToken = exports.isTransformDescriptor = exports.isTokenDescriptor = exports.isNormalToken = void 0;
    var lazy_helpers_1 = require_lazy_helpers();
    function isNormalToken(token) {
      return typeof token === "string" || typeof token === "symbol";
    }
    exports.isNormalToken = isNormalToken;
    function isTokenDescriptor(descriptor) {
      return typeof descriptor === "object" && "token" in descriptor && "multiple" in descriptor;
    }
    exports.isTokenDescriptor = isTokenDescriptor;
    function isTransformDescriptor(descriptor) {
      return typeof descriptor === "object" && "token" in descriptor && "transform" in descriptor;
    }
    exports.isTransformDescriptor = isTransformDescriptor;
    function isConstructorToken(token) {
      return typeof token === "function" || token instanceof lazy_helpers_1.DelayedConstructor;
    }
    exports.isConstructorToken = isConstructorToken;
  }
});

// ../../node_modules/tsyringe/dist/cjs/providers/token-provider.js
var require_token_provider = __commonJS({
  "../../node_modules/tsyringe/dist/cjs/providers/token-provider.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isTokenProvider = void 0;
    function isTokenProvider(provider) {
      return !!provider.useToken;
    }
    exports.isTokenProvider = isTokenProvider;
  }
});

// ../../node_modules/tsyringe/dist/cjs/providers/value-provider.js
var require_value_provider = __commonJS({
  "../../node_modules/tsyringe/dist/cjs/providers/value-provider.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isValueProvider = void 0;
    function isValueProvider(provider) {
      return provider.useValue != void 0;
    }
    exports.isValueProvider = isValueProvider;
  }
});

// ../../node_modules/tsyringe/dist/cjs/providers/index.js
var require_providers = __commonJS({
  "../../node_modules/tsyringe/dist/cjs/providers/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var class_provider_1 = require_class_provider();
    Object.defineProperty(exports, "isClassProvider", { enumerable: true, get: function() {
      return class_provider_1.isClassProvider;
    } });
    var factory_provider_1 = require_factory_provider();
    Object.defineProperty(exports, "isFactoryProvider", { enumerable: true, get: function() {
      return factory_provider_1.isFactoryProvider;
    } });
    var injection_token_1 = require_injection_token();
    Object.defineProperty(exports, "isNormalToken", { enumerable: true, get: function() {
      return injection_token_1.isNormalToken;
    } });
    var token_provider_1 = require_token_provider();
    Object.defineProperty(exports, "isTokenProvider", { enumerable: true, get: function() {
      return token_provider_1.isTokenProvider;
    } });
    var value_provider_1 = require_value_provider();
    Object.defineProperty(exports, "isValueProvider", { enumerable: true, get: function() {
      return value_provider_1.isValueProvider;
    } });
  }
});

// ../../node_modules/tsyringe/dist/cjs/providers/provider.js
var require_provider = __commonJS({
  "../../node_modules/tsyringe/dist/cjs/providers/provider.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isProvider = void 0;
    var class_provider_1 = require_class_provider();
    var value_provider_1 = require_value_provider();
    var token_provider_1 = require_token_provider();
    var factory_provider_1 = require_factory_provider();
    function isProvider(provider) {
      return class_provider_1.isClassProvider(provider) || value_provider_1.isValueProvider(provider) || token_provider_1.isTokenProvider(provider) || factory_provider_1.isFactoryProvider(provider);
    }
    exports.isProvider = isProvider;
  }
});

// ../../node_modules/tsyringe/dist/cjs/registry-base.js
var require_registry_base = __commonJS({
  "../../node_modules/tsyringe/dist/cjs/registry-base.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var RegistryBase = class {
      constructor() {
        this._registryMap = /* @__PURE__ */ new Map();
      }
      entries() {
        return this._registryMap.entries();
      }
      getAll(key) {
        this.ensure(key);
        return this._registryMap.get(key);
      }
      get(key) {
        this.ensure(key);
        const value = this._registryMap.get(key);
        return value[value.length - 1] || null;
      }
      set(key, value) {
        this.ensure(key);
        this._registryMap.get(key).push(value);
      }
      setAll(key, value) {
        this._registryMap.set(key, value);
      }
      has(key) {
        this.ensure(key);
        return this._registryMap.get(key).length > 0;
      }
      clear() {
        this._registryMap.clear();
      }
      ensure(key) {
        if (!this._registryMap.has(key)) {
          this._registryMap.set(key, []);
        }
      }
    };
    exports.default = RegistryBase;
  }
});

// ../../node_modules/tsyringe/dist/cjs/registry.js
var require_registry = __commonJS({
  "../../node_modules/tsyringe/dist/cjs/registry.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var registry_base_1 = require_registry_base();
    var Registry = class extends registry_base_1.default {
    };
    exports.default = Registry;
  }
});

// ../../node_modules/tsyringe/dist/cjs/resolution-context.js
var require_resolution_context = __commonJS({
  "../../node_modules/tsyringe/dist/cjs/resolution-context.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ResolutionContext = class {
      constructor() {
        this.scopedResolutions = /* @__PURE__ */ new Map();
      }
    };
    exports.default = ResolutionContext;
  }
});

// ../../node_modules/tsyringe/dist/cjs/error-helpers.js
var require_error_helpers = __commonJS({
  "../../node_modules/tsyringe/dist/cjs/error-helpers.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.formatErrorCtor = void 0;
    function formatDependency(params, idx) {
      if (params === null) {
        return `at position #${idx}`;
      }
      const argName = params.split(",")[idx].trim();
      return `"${argName}" at position #${idx}`;
    }
    function composeErrorMessage(msg, e, indent = "    ") {
      return [msg, ...e.message.split("\n").map((l) => indent + l)].join("\n");
    }
    function formatErrorCtor(ctor, paramIdx, error) {
      const [, params = null] = ctor.toString().match(/constructor\(([\w, ]+)\)/) || [];
      const dep = formatDependency(params, paramIdx);
      return composeErrorMessage(`Cannot inject the dependency ${dep} of "${ctor.name}" constructor. Reason:`, error);
    }
    exports.formatErrorCtor = formatErrorCtor;
  }
});

// ../../node_modules/tsyringe/dist/cjs/types/disposable.js
var require_disposable = __commonJS({
  "../../node_modules/tsyringe/dist/cjs/types/disposable.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isDisposable = void 0;
    function isDisposable(value) {
      if (typeof value.dispose !== "function")
        return false;
      const disposeFun = value.dispose;
      if (disposeFun.length > 0) {
        return false;
      }
      return true;
    }
    exports.isDisposable = isDisposable;
  }
});

// ../../node_modules/tsyringe/dist/cjs/interceptors.js
var require_interceptors = __commonJS({
  "../../node_modules/tsyringe/dist/cjs/interceptors.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PostResolutionInterceptors = exports.PreResolutionInterceptors = void 0;
    var registry_base_1 = require_registry_base();
    var PreResolutionInterceptors = class extends registry_base_1.default {
    };
    exports.PreResolutionInterceptors = PreResolutionInterceptors;
    var PostResolutionInterceptors = class extends registry_base_1.default {
    };
    exports.PostResolutionInterceptors = PostResolutionInterceptors;
    var Interceptors = class {
      constructor() {
        this.preResolution = new PreResolutionInterceptors();
        this.postResolution = new PostResolutionInterceptors();
      }
    };
    exports.default = Interceptors;
  }
});

// ../../node_modules/tsyringe/dist/cjs/dependency-container.js
var require_dependency_container = __commonJS({
  "../../node_modules/tsyringe/dist/cjs/dependency-container.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.instance = exports.typeInfo = void 0;
    var tslib_1 = require_tslib();
    var providers_1 = require_providers();
    var provider_1 = require_provider();
    var injection_token_1 = require_injection_token();
    var registry_1 = require_registry();
    var lifecycle_1 = require_lifecycle();
    var resolution_context_1 = require_resolution_context();
    var error_helpers_1 = require_error_helpers();
    var lazy_helpers_1 = require_lazy_helpers();
    var disposable_1 = require_disposable();
    var interceptors_1 = require_interceptors();
    exports.typeInfo = /* @__PURE__ */ new Map();
    var InternalDependencyContainer = class {
      constructor(parent) {
        this.parent = parent;
        this._registry = new registry_1.default();
        this.interceptors = new interceptors_1.default();
        this.disposed = false;
        this.disposables = /* @__PURE__ */ new Set();
      }
      register(token, providerOrConstructor, options = { lifecycle: lifecycle_1.default.Transient }) {
        this.ensureNotDisposed();
        let provider;
        if (!provider_1.isProvider(providerOrConstructor)) {
          provider = { useClass: providerOrConstructor };
        } else {
          provider = providerOrConstructor;
        }
        if (providers_1.isTokenProvider(provider)) {
          const path = [token];
          let tokenProvider = provider;
          while (tokenProvider != null) {
            const currentToken = tokenProvider.useToken;
            if (path.includes(currentToken)) {
              throw new Error(`Token registration cycle detected! ${[...path, currentToken].join(" -> ")}`);
            }
            path.push(currentToken);
            const registration = this._registry.get(currentToken);
            if (registration && providers_1.isTokenProvider(registration.provider)) {
              tokenProvider = registration.provider;
            } else {
              tokenProvider = null;
            }
          }
        }
        if (options.lifecycle === lifecycle_1.default.Singleton || options.lifecycle == lifecycle_1.default.ContainerScoped || options.lifecycle == lifecycle_1.default.ResolutionScoped) {
          if (providers_1.isValueProvider(provider) || providers_1.isFactoryProvider(provider)) {
            throw new Error(`Cannot use lifecycle "${lifecycle_1.default[options.lifecycle]}" with ValueProviders or FactoryProviders`);
          }
        }
        this._registry.set(token, { provider, options });
        return this;
      }
      registerType(from, to) {
        this.ensureNotDisposed();
        if (providers_1.isNormalToken(to)) {
          return this.register(from, {
            useToken: to
          });
        }
        return this.register(from, {
          useClass: to
        });
      }
      registerInstance(token, instance) {
        this.ensureNotDisposed();
        return this.register(token, {
          useValue: instance
        });
      }
      registerSingleton(from, to) {
        this.ensureNotDisposed();
        if (providers_1.isNormalToken(from)) {
          if (providers_1.isNormalToken(to)) {
            return this.register(from, {
              useToken: to
            }, { lifecycle: lifecycle_1.default.Singleton });
          } else if (to) {
            return this.register(from, {
              useClass: to
            }, { lifecycle: lifecycle_1.default.Singleton });
          }
          throw new Error('Cannot register a type name as a singleton without a "to" token');
        }
        let useClass = from;
        if (to && !providers_1.isNormalToken(to)) {
          useClass = to;
        }
        return this.register(from, {
          useClass
        }, { lifecycle: lifecycle_1.default.Singleton });
      }
      resolve(token, context = new resolution_context_1.default()) {
        this.ensureNotDisposed();
        const registration = this.getRegistration(token);
        if (!registration && providers_1.isNormalToken(token)) {
          throw new Error(`Attempted to resolve unregistered dependency token: "${token.toString()}"`);
        }
        this.executePreResolutionInterceptor(token, "Single");
        if (registration) {
          const result = this.resolveRegistration(registration, context);
          this.executePostResolutionInterceptor(token, result, "Single");
          return result;
        }
        if (injection_token_1.isConstructorToken(token)) {
          const result = this.construct(token, context);
          this.executePostResolutionInterceptor(token, result, "Single");
          return result;
        }
        throw new Error("Attempted to construct an undefined constructor. Could mean a circular dependency problem. Try using `delay` function.");
      }
      executePreResolutionInterceptor(token, resolutionType) {
        if (this.interceptors.preResolution.has(token)) {
          const remainingInterceptors = [];
          for (const interceptor of this.interceptors.preResolution.getAll(token)) {
            if (interceptor.options.frequency != "Once") {
              remainingInterceptors.push(interceptor);
            }
            interceptor.callback(token, resolutionType);
          }
          this.interceptors.preResolution.setAll(token, remainingInterceptors);
        }
      }
      executePostResolutionInterceptor(token, result, resolutionType) {
        if (this.interceptors.postResolution.has(token)) {
          const remainingInterceptors = [];
          for (const interceptor of this.interceptors.postResolution.getAll(token)) {
            if (interceptor.options.frequency != "Once") {
              remainingInterceptors.push(interceptor);
            }
            interceptor.callback(token, result, resolutionType);
          }
          this.interceptors.postResolution.setAll(token, remainingInterceptors);
        }
      }
      resolveRegistration(registration, context) {
        this.ensureNotDisposed();
        if (registration.options.lifecycle === lifecycle_1.default.ResolutionScoped && context.scopedResolutions.has(registration)) {
          return context.scopedResolutions.get(registration);
        }
        const isSingleton = registration.options.lifecycle === lifecycle_1.default.Singleton;
        const isContainerScoped = registration.options.lifecycle === lifecycle_1.default.ContainerScoped;
        const returnInstance = isSingleton || isContainerScoped;
        let resolved;
        if (providers_1.isValueProvider(registration.provider)) {
          resolved = registration.provider.useValue;
        } else if (providers_1.isTokenProvider(registration.provider)) {
          resolved = returnInstance ? registration.instance || (registration.instance = this.resolve(registration.provider.useToken, context)) : this.resolve(registration.provider.useToken, context);
        } else if (providers_1.isClassProvider(registration.provider)) {
          resolved = returnInstance ? registration.instance || (registration.instance = this.construct(registration.provider.useClass, context)) : this.construct(registration.provider.useClass, context);
        } else if (providers_1.isFactoryProvider(registration.provider)) {
          resolved = registration.provider.useFactory(this);
        } else {
          resolved = this.construct(registration.provider, context);
        }
        if (registration.options.lifecycle === lifecycle_1.default.ResolutionScoped) {
          context.scopedResolutions.set(registration, resolved);
        }
        return resolved;
      }
      resolveAll(token, context = new resolution_context_1.default()) {
        this.ensureNotDisposed();
        const registrations = this.getAllRegistrations(token);
        if (!registrations && providers_1.isNormalToken(token)) {
          throw new Error(`Attempted to resolve unregistered dependency token: "${token.toString()}"`);
        }
        this.executePreResolutionInterceptor(token, "All");
        if (registrations) {
          const result2 = registrations.map((item) => this.resolveRegistration(item, context));
          this.executePostResolutionInterceptor(token, result2, "All");
          return result2;
        }
        const result = [this.construct(token, context)];
        this.executePostResolutionInterceptor(token, result, "All");
        return result;
      }
      isRegistered(token, recursive = false) {
        this.ensureNotDisposed();
        return this._registry.has(token) || recursive && (this.parent || false) && this.parent.isRegistered(token, true);
      }
      reset() {
        this.ensureNotDisposed();
        this._registry.clear();
        this.interceptors.preResolution.clear();
        this.interceptors.postResolution.clear();
      }
      clearInstances() {
        this.ensureNotDisposed();
        for (const [token, registrations] of this._registry.entries()) {
          this._registry.setAll(token, registrations.filter((registration) => !providers_1.isValueProvider(registration.provider)).map((registration) => {
            registration.instance = void 0;
            return registration;
          }));
        }
      }
      createChildContainer() {
        this.ensureNotDisposed();
        const childContainer = new InternalDependencyContainer(this);
        for (const [token, registrations] of this._registry.entries()) {
          if (registrations.some(({ options }) => options.lifecycle === lifecycle_1.default.ContainerScoped)) {
            childContainer._registry.setAll(token, registrations.map((registration) => {
              if (registration.options.lifecycle === lifecycle_1.default.ContainerScoped) {
                return {
                  provider: registration.provider,
                  options: registration.options
                };
              }
              return registration;
            }));
          }
        }
        return childContainer;
      }
      beforeResolution(token, callback, options = { frequency: "Always" }) {
        this.interceptors.preResolution.set(token, {
          callback,
          options
        });
      }
      afterResolution(token, callback, options = { frequency: "Always" }) {
        this.interceptors.postResolution.set(token, {
          callback,
          options
        });
      }
      dispose() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
          this.disposed = true;
          const promises = [];
          this.disposables.forEach((disposable) => {
            const maybePromise = disposable.dispose();
            if (maybePromise) {
              promises.push(maybePromise);
            }
          });
          yield Promise.all(promises);
        });
      }
      getRegistration(token) {
        if (this.isRegistered(token)) {
          return this._registry.get(token);
        }
        if (this.parent) {
          return this.parent.getRegistration(token);
        }
        return null;
      }
      getAllRegistrations(token) {
        if (this.isRegistered(token)) {
          return this._registry.getAll(token);
        }
        if (this.parent) {
          return this.parent.getAllRegistrations(token);
        }
        return null;
      }
      construct(ctor, context) {
        if (ctor instanceof lazy_helpers_1.DelayedConstructor) {
          return ctor.createProxy((target) => this.resolve(target, context));
        }
        const instance = (() => {
          const paramInfo = exports.typeInfo.get(ctor);
          if (!paramInfo || paramInfo.length === 0) {
            if (ctor.length === 0) {
              return new ctor();
            } else {
              throw new Error(`TypeInfo not known for "${ctor.name}"`);
            }
          }
          const params = paramInfo.map(this.resolveParams(context, ctor));
          return new ctor(...params);
        })();
        if (disposable_1.isDisposable(instance)) {
          this.disposables.add(instance);
        }
        return instance;
      }
      resolveParams(context, ctor) {
        return (param, idx) => {
          try {
            if (injection_token_1.isTokenDescriptor(param)) {
              if (injection_token_1.isTransformDescriptor(param)) {
                return param.multiple ? this.resolve(param.transform).transform(this.resolveAll(param.token), ...param.transformArgs) : this.resolve(param.transform).transform(this.resolve(param.token, context), ...param.transformArgs);
              } else {
                return param.multiple ? this.resolveAll(param.token) : this.resolve(param.token, context);
              }
            } else if (injection_token_1.isTransformDescriptor(param)) {
              return this.resolve(param.transform, context).transform(this.resolve(param.token, context), ...param.transformArgs);
            }
            return this.resolve(param, context);
          } catch (e) {
            throw new Error(error_helpers_1.formatErrorCtor(ctor, idx, e));
          }
        };
      }
      ensureNotDisposed() {
        if (this.disposed) {
          throw new Error("This container has been disposed, you cannot interact with a disposed container");
        }
      }
    };
    exports.instance = new InternalDependencyContainer();
    exports.default = exports.instance;
  }
});

// ../../node_modules/tsyringe/dist/cjs/decorators/auto-injectable.js
var require_auto_injectable = __commonJS({
  "../../node_modules/tsyringe/dist/cjs/decorators/auto-injectable.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var reflection_helpers_1 = require_reflection_helpers();
    var dependency_container_1 = require_dependency_container();
    var injection_token_1 = require_injection_token();
    var error_helpers_1 = require_error_helpers();
    function autoInjectable2() {
      return function(target) {
        const paramInfo = reflection_helpers_1.getParamInfo(target);
        return class extends target {
          constructor(...args) {
            super(...args.concat(paramInfo.slice(args.length).map((type, index) => {
              try {
                if (injection_token_1.isTokenDescriptor(type)) {
                  if (injection_token_1.isTransformDescriptor(type)) {
                    return type.multiple ? dependency_container_1.instance.resolve(type.transform).transform(dependency_container_1.instance.resolveAll(type.token), ...type.transformArgs) : dependency_container_1.instance.resolve(type.transform).transform(dependency_container_1.instance.resolve(type.token), ...type.transformArgs);
                  } else {
                    return type.multiple ? dependency_container_1.instance.resolveAll(type.token) : dependency_container_1.instance.resolve(type.token);
                  }
                } else if (injection_token_1.isTransformDescriptor(type)) {
                  return dependency_container_1.instance.resolve(type.transform).transform(dependency_container_1.instance.resolve(type.token), ...type.transformArgs);
                }
                return dependency_container_1.instance.resolve(type);
              } catch (e) {
                const argIndex = index + args.length;
                throw new Error(error_helpers_1.formatErrorCtor(target, argIndex, e));
              }
            })));
          }
        };
      };
    }
    exports.default = autoInjectable2;
  }
});

// ../../node_modules/tsyringe/dist/cjs/decorators/inject.js
var require_inject = __commonJS({
  "../../node_modules/tsyringe/dist/cjs/decorators/inject.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var reflection_helpers_1 = require_reflection_helpers();
    function inject(token) {
      return reflection_helpers_1.defineInjectionTokenMetadata(token);
    }
    exports.default = inject;
  }
});

// ../../node_modules/tsyringe/dist/cjs/decorators/injectable.js
var require_injectable = __commonJS({
  "../../node_modules/tsyringe/dist/cjs/decorators/injectable.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var reflection_helpers_1 = require_reflection_helpers();
    var dependency_container_1 = require_dependency_container();
    function injectable() {
      return function(target) {
        dependency_container_1.typeInfo.set(target, reflection_helpers_1.getParamInfo(target));
      };
    }
    exports.default = injectable;
  }
});

// ../../node_modules/tsyringe/dist/cjs/decorators/registry.js
var require_registry2 = __commonJS({
  "../../node_modules/tsyringe/dist/cjs/decorators/registry.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require_tslib();
    var dependency_container_1 = require_dependency_container();
    function registry(registrations = []) {
      return function(target) {
        registrations.forEach((_a) => {
          var { token, options } = _a, provider = tslib_1.__rest(_a, ["token", "options"]);
          return dependency_container_1.instance.register(token, provider, options);
        });
        return target;
      };
    }
    exports.default = registry;
  }
});

// ../../node_modules/tsyringe/dist/cjs/decorators/singleton.js
var require_singleton = __commonJS({
  "../../node_modules/tsyringe/dist/cjs/decorators/singleton.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var injectable_1 = require_injectable();
    var dependency_container_1 = require_dependency_container();
    function singleton2() {
      return function(target) {
        injectable_1.default()(target);
        dependency_container_1.instance.registerSingleton(target);
      };
    }
    exports.default = singleton2;
  }
});

// ../../node_modules/tsyringe/dist/cjs/decorators/inject-all.js
var require_inject_all = __commonJS({
  "../../node_modules/tsyringe/dist/cjs/decorators/inject-all.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var reflection_helpers_1 = require_reflection_helpers();
    function injectAll(token) {
      const data = { token, multiple: true };
      return reflection_helpers_1.defineInjectionTokenMetadata(data);
    }
    exports.default = injectAll;
  }
});

// ../../node_modules/tsyringe/dist/cjs/decorators/inject-all-with-transform.js
var require_inject_all_with_transform = __commonJS({
  "../../node_modules/tsyringe/dist/cjs/decorators/inject-all-with-transform.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var reflection_helpers_1 = require_reflection_helpers();
    function injectAllWithTransform(token, transformer, ...args) {
      const data = {
        token,
        multiple: true,
        transform: transformer,
        transformArgs: args
      };
      return reflection_helpers_1.defineInjectionTokenMetadata(data);
    }
    exports.default = injectAllWithTransform;
  }
});

// ../../node_modules/tsyringe/dist/cjs/decorators/inject-with-transform.js
var require_inject_with_transform = __commonJS({
  "../../node_modules/tsyringe/dist/cjs/decorators/inject-with-transform.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var reflection_helpers_1 = require_reflection_helpers();
    function injectWithTransform(token, transformer, ...args) {
      return reflection_helpers_1.defineInjectionTokenMetadata(token, {
        transformToken: transformer,
        args
      });
    }
    exports.default = injectWithTransform;
  }
});

// ../../node_modules/tsyringe/dist/cjs/decorators/scoped.js
var require_scoped = __commonJS({
  "../../node_modules/tsyringe/dist/cjs/decorators/scoped.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var injectable_1 = require_injectable();
    var dependency_container_1 = require_dependency_container();
    function scoped(lifecycle, token) {
      return function(target) {
        injectable_1.default()(target);
        dependency_container_1.instance.register(token || target, target, {
          lifecycle
        });
      };
    }
    exports.default = scoped;
  }
});

// ../../node_modules/tsyringe/dist/cjs/decorators/index.js
var require_decorators = __commonJS({
  "../../node_modules/tsyringe/dist/cjs/decorators/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var auto_injectable_1 = require_auto_injectable();
    Object.defineProperty(exports, "autoInjectable", { enumerable: true, get: function() {
      return auto_injectable_1.default;
    } });
    var inject_1 = require_inject();
    Object.defineProperty(exports, "inject", { enumerable: true, get: function() {
      return inject_1.default;
    } });
    var injectable_1 = require_injectable();
    Object.defineProperty(exports, "injectable", { enumerable: true, get: function() {
      return injectable_1.default;
    } });
    var registry_1 = require_registry2();
    Object.defineProperty(exports, "registry", { enumerable: true, get: function() {
      return registry_1.default;
    } });
    var singleton_1 = require_singleton();
    Object.defineProperty(exports, "singleton", { enumerable: true, get: function() {
      return singleton_1.default;
    } });
    var inject_all_1 = require_inject_all();
    Object.defineProperty(exports, "injectAll", { enumerable: true, get: function() {
      return inject_all_1.default;
    } });
    var inject_all_with_transform_1 = require_inject_all_with_transform();
    Object.defineProperty(exports, "injectAllWithTransform", { enumerable: true, get: function() {
      return inject_all_with_transform_1.default;
    } });
    var inject_with_transform_1 = require_inject_with_transform();
    Object.defineProperty(exports, "injectWithTransform", { enumerable: true, get: function() {
      return inject_with_transform_1.default;
    } });
    var scoped_1 = require_scoped();
    Object.defineProperty(exports, "scoped", { enumerable: true, get: function() {
      return scoped_1.default;
    } });
  }
});

// ../../node_modules/tsyringe/dist/cjs/factories/instance-caching-factory.js
var require_instance_caching_factory = __commonJS({
  "../../node_modules/tsyringe/dist/cjs/factories/instance-caching-factory.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function instanceCachingFactory(factoryFunc) {
      let instance;
      return (dependencyContainer) => {
        if (instance == void 0) {
          instance = factoryFunc(dependencyContainer);
        }
        return instance;
      };
    }
    exports.default = instanceCachingFactory;
  }
});

// ../../node_modules/tsyringe/dist/cjs/factories/instance-per-container-caching-factory.js
var require_instance_per_container_caching_factory = __commonJS({
  "../../node_modules/tsyringe/dist/cjs/factories/instance-per-container-caching-factory.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function instancePerContainerCachingFactory(factoryFunc) {
      const cache = /* @__PURE__ */ new WeakMap();
      return (dependencyContainer) => {
        let instance = cache.get(dependencyContainer);
        if (instance == void 0) {
          instance = factoryFunc(dependencyContainer);
          cache.set(dependencyContainer, instance);
        }
        return instance;
      };
    }
    exports.default = instancePerContainerCachingFactory;
  }
});

// ../../node_modules/tsyringe/dist/cjs/factories/predicate-aware-class-factory.js
var require_predicate_aware_class_factory = __commonJS({
  "../../node_modules/tsyringe/dist/cjs/factories/predicate-aware-class-factory.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function predicateAwareClassFactory(predicate, trueConstructor, falseConstructor, useCaching = true) {
      let instance;
      let previousPredicate;
      return (dependencyContainer) => {
        const currentPredicate = predicate(dependencyContainer);
        if (!useCaching || previousPredicate !== currentPredicate) {
          if (previousPredicate = currentPredicate) {
            instance = dependencyContainer.resolve(trueConstructor);
          } else {
            instance = dependencyContainer.resolve(falseConstructor);
          }
        }
        return instance;
      };
    }
    exports.default = predicateAwareClassFactory;
  }
});

// ../../node_modules/tsyringe/dist/cjs/factories/index.js
var require_factories = __commonJS({
  "../../node_modules/tsyringe/dist/cjs/factories/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var instance_caching_factory_1 = require_instance_caching_factory();
    Object.defineProperty(exports, "instanceCachingFactory", { enumerable: true, get: function() {
      return instance_caching_factory_1.default;
    } });
    var instance_per_container_caching_factory_1 = require_instance_per_container_caching_factory();
    Object.defineProperty(exports, "instancePerContainerCachingFactory", { enumerable: true, get: function() {
      return instance_per_container_caching_factory_1.default;
    } });
    var predicate_aware_class_factory_1 = require_predicate_aware_class_factory();
    Object.defineProperty(exports, "predicateAwareClassFactory", { enumerable: true, get: function() {
      return predicate_aware_class_factory_1.default;
    } });
  }
});

// ../../node_modules/tsyringe/dist/cjs/index.js
var require_cjs = __commonJS({
  "../../node_modules/tsyringe/dist/cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require_tslib();
    if (typeof Reflect === "undefined" || !Reflect.getMetadata) {
      throw new Error(`tsyringe requires a reflect polyfill. Please add 'import "reflect-metadata"' to the top of your entry point.`);
    }
    var types_1 = require_types();
    Object.defineProperty(exports, "Lifecycle", { enumerable: true, get: function() {
      return types_1.Lifecycle;
    } });
    tslib_1.__exportStar(require_decorators(), exports);
    tslib_1.__exportStar(require_factories(), exports);
    tslib_1.__exportStar(require_providers(), exports);
    var lazy_helpers_1 = require_lazy_helpers();
    Object.defineProperty(exports, "delay", { enumerable: true, get: function() {
      return lazy_helpers_1.delay;
    } });
    var dependency_container_1 = require_dependency_container();
    Object.defineProperty(exports, "container", { enumerable: true, get: function() {
      return dependency_container_1.instance;
    } });
  }
});

// ../../node_modules/fivem-js/lib/Audio.js
var require_Audio = __commonJS({
  "../../node_modules/fivem-js/lib/Audio.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Audio = void 0;
    var Audio = class {
      static playSoundAt(position, sound, set) {
        PlaySoundFromCoord(-1, sound, position.x, position.y, position.z, set ? set : null, false, 0, false);
        return GetSoundId();
      }
      static playSoundFromEntity(entity, sound, set) {
        PlaySoundFromEntity(-1, sound, entity.Handle, set ? set : null, false, 0);
        return GetSoundId();
      }
      static playSoundFrontEnd(sound, set) {
        PlaySoundFrontend(-1, sound, set ? set : null, false);
        return GetSoundId();
      }
      static stopSound(soundId) {
        StopSound(soundId);
      }
      static releaseSound(soundId) {
        ReleaseSoundId(soundId);
      }
      static hasSoundFinished(soundId) {
        return !!HasSoundFinished(soundId);
      }
      static setAudioFlag(flag, toggle) {
        if (typeof flag === "string") {
          SetAudioFlag(flag, toggle);
        } else {
          SetAudioFlag(this.audioFlags[Number(flag)], toggle);
        }
      }
      static playSound(soundFile, soundSet) {
        this.releaseSound(this.playSoundFrontEnd(soundFile, soundSet));
      }
      static playMusic(musicFile) {
        if (this.cachedMusicFile !== null) {
          CancelMusicEvent(musicFile);
        }
        this.cachedMusicFile = musicFile;
        TriggerMusicEvent(musicFile);
      }
      static stopMusic(musicFile) {
        if (musicFile === null) {
          if (this.cachedMusicFile !== null) {
            CancelMusicEvent(this.cachedMusicFile);
            this.cachedMusicFile = null;
          }
        } else {
          CancelMusicEvent(musicFile);
        }
      }
    };
    exports.Audio = Audio;
    Audio.audioFlags = [
      "ActivateSwitchWheelAudio",
      "AllowCutsceneOverScreenFade",
      "AllowForceRadioAfterRetune",
      "AllowPainAndAmbientSpeechToPlayDuringCutscene",
      "AllowPlayerAIOnMission",
      "AllowPoliceScannerWhenPlayerHasNoControl",
      "AllowRadioDuringSwitch",
      "AllowRadioOverScreenFade",
      "AllowScoreAndRadio",
      "AllowScriptedSpeechInSlowMo",
      "AvoidMissionCompleteDelay",
      "DisableAbortConversationForDeathAndInjury",
      "DisableAbortConversationForRagdoll",
      "DisableBarks",
      "DisableFlightMusic",
      "DisableReplayScriptStreamRecording",
      "EnableHeadsetBeep",
      "ForceConversationInterrupt",
      "ForceSeamlessRadioSwitch",
      "ForceSniperAudio",
      "FrontendRadioDisabled",
      "HoldMissionCompleteWhenPrepared",
      "IsDirectorModeActive",
      "IsPlayerOnMissionForSpeech",
      "ListenerReverbDisabled",
      "LoadMPData",
      "MobileRadioInGame",
      "OnlyAllowScriptTriggerPoliceScanner",
      "PlayMenuMusic",
      "PoliceScannerDisabled",
      "ScriptedConvListenerMaySpeak",
      "SpeechDucksScore",
      "SuppressPlayerScubaBreathing",
      "WantedMusicDisabled",
      "WantedMusicOnMission"
    ];
  }
});

// ../../node_modules/fivem-js/lib/enums/Alignment.js
var require_Alignment = __commonJS({
  "../../node_modules/fivem-js/lib/enums/Alignment.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Alignment = void 0;
    var Alignment;
    (function(Alignment2) {
      Alignment2[Alignment2["Left"] = 0] = "Left";
      Alignment2[Alignment2["Centered"] = 1] = "Centered";
      Alignment2[Alignment2["Right"] = 2] = "Right";
    })(Alignment = exports.Alignment || (exports.Alignment = {}));
  }
});

// ../../node_modules/fivem-js/lib/enums/AudioFlag.js
var require_AudioFlag = __commonJS({
  "../../node_modules/fivem-js/lib/enums/AudioFlag.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AudioFlag = void 0;
    var AudioFlag;
    (function(AudioFlag2) {
      AudioFlag2[AudioFlag2["ActivateSwitchWheelAudio"] = 0] = "ActivateSwitchWheelAudio";
      AudioFlag2[AudioFlag2["AllowCutsceneOverScreenFade"] = 1] = "AllowCutsceneOverScreenFade";
      AudioFlag2[AudioFlag2["AllowForceRadioAfterRetune"] = 2] = "AllowForceRadioAfterRetune";
      AudioFlag2[AudioFlag2["AllowPainAndAmbientSpeechToPlayDuringCutscene"] = 3] = "AllowPainAndAmbientSpeechToPlayDuringCutscene";
      AudioFlag2[AudioFlag2["AllowPlayerAIOnMission"] = 4] = "AllowPlayerAIOnMission";
      AudioFlag2[AudioFlag2["AllowPoliceScannerWhenPlayerHasNoControl"] = 5] = "AllowPoliceScannerWhenPlayerHasNoControl";
      AudioFlag2[AudioFlag2["AllowRadioDuringSwitch"] = 6] = "AllowRadioDuringSwitch";
      AudioFlag2[AudioFlag2["AllowRadioOverScreenFade"] = 7] = "AllowRadioOverScreenFade";
      AudioFlag2[AudioFlag2["AllowScoreAndRadio"] = 8] = "AllowScoreAndRadio";
      AudioFlag2[AudioFlag2["AllowScriptedSpeechInSlowMo"] = 9] = "AllowScriptedSpeechInSlowMo";
      AudioFlag2[AudioFlag2["AvoidMissionCompleteDelay"] = 10] = "AvoidMissionCompleteDelay";
      AudioFlag2[AudioFlag2["DisableAbortConversationForDeathAndInjury"] = 11] = "DisableAbortConversationForDeathAndInjury";
      AudioFlag2[AudioFlag2["DisableAbortConversationForRagdoll"] = 12] = "DisableAbortConversationForRagdoll";
      AudioFlag2[AudioFlag2["DisableBarks"] = 13] = "DisableBarks";
      AudioFlag2[AudioFlag2["DisableFlightMusic"] = 14] = "DisableFlightMusic";
      AudioFlag2[AudioFlag2["DisableReplayScriptStreamRecording"] = 15] = "DisableReplayScriptStreamRecording";
      AudioFlag2[AudioFlag2["EnableHeadsetBeep"] = 16] = "EnableHeadsetBeep";
      AudioFlag2[AudioFlag2["ForceConversationInterrupt"] = 17] = "ForceConversationInterrupt";
      AudioFlag2[AudioFlag2["ForceSeamlessRadioSwitch"] = 18] = "ForceSeamlessRadioSwitch";
      AudioFlag2[AudioFlag2["ForceSniperAudio"] = 19] = "ForceSniperAudio";
      AudioFlag2[AudioFlag2["FrontendRadioDisabled"] = 20] = "FrontendRadioDisabled";
      AudioFlag2[AudioFlag2["HoldMissionCompleteWhenPrepared"] = 21] = "HoldMissionCompleteWhenPrepared";
      AudioFlag2[AudioFlag2["IsDirectorModeActive"] = 22] = "IsDirectorModeActive";
      AudioFlag2[AudioFlag2["IsPlayerOnMissionForSpeech"] = 23] = "IsPlayerOnMissionForSpeech";
      AudioFlag2[AudioFlag2["ListenerReverbDisabled"] = 24] = "ListenerReverbDisabled";
      AudioFlag2[AudioFlag2["LoadMPData"] = 25] = "LoadMPData";
      AudioFlag2[AudioFlag2["MobileRadioInGame"] = 26] = "MobileRadioInGame";
      AudioFlag2[AudioFlag2["OnlyAllowScriptTriggerPoliceScanner"] = 27] = "OnlyAllowScriptTriggerPoliceScanner";
      AudioFlag2[AudioFlag2["PlayMenuMusic"] = 28] = "PlayMenuMusic";
      AudioFlag2[AudioFlag2["PoliceScannerDisabled"] = 29] = "PoliceScannerDisabled";
      AudioFlag2[AudioFlag2["ScriptedConvListenerMaySpeak"] = 30] = "ScriptedConvListenerMaySpeak";
      AudioFlag2[AudioFlag2["SpeechDucksScore"] = 31] = "SpeechDucksScore";
      AudioFlag2[AudioFlag2["SuppressPlayerScubaBreathing"] = 32] = "SuppressPlayerScubaBreathing";
      AudioFlag2[AudioFlag2["WantedMusicDisabled"] = 33] = "WantedMusicDisabled";
      AudioFlag2[AudioFlag2["WantedMusicOnMission"] = 34] = "WantedMusicOnMission";
    })(AudioFlag = exports.AudioFlag || (exports.AudioFlag = {}));
  }
});

// ../../node_modules/fivem-js/lib/enums/BadgeStyle.js
var require_BadgeStyle = __commonJS({
  "../../node_modules/fivem-js/lib/enums/BadgeStyle.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BadgeStyle = void 0;
    var BadgeStyle;
    (function(BadgeStyle2) {
      BadgeStyle2[BadgeStyle2["None"] = 0] = "None";
      BadgeStyle2[BadgeStyle2["Lock"] = 1] = "Lock";
      BadgeStyle2[BadgeStyle2["Star"] = 2] = "Star";
      BadgeStyle2[BadgeStyle2["Warning"] = 3] = "Warning";
      BadgeStyle2[BadgeStyle2["Crown"] = 4] = "Crown";
      BadgeStyle2[BadgeStyle2["MedalBronze"] = 5] = "MedalBronze";
      BadgeStyle2[BadgeStyle2["MedalGold"] = 6] = "MedalGold";
      BadgeStyle2[BadgeStyle2["MedalSilver"] = 7] = "MedalSilver";
      BadgeStyle2[BadgeStyle2["Cash"] = 8] = "Cash";
      BadgeStyle2[BadgeStyle2["Coke"] = 9] = "Coke";
      BadgeStyle2[BadgeStyle2["Heroin"] = 10] = "Heroin";
      BadgeStyle2[BadgeStyle2["Meth"] = 11] = "Meth";
      BadgeStyle2[BadgeStyle2["Weed"] = 12] = "Weed";
      BadgeStyle2[BadgeStyle2["Ammo"] = 13] = "Ammo";
      BadgeStyle2[BadgeStyle2["Armor"] = 14] = "Armor";
      BadgeStyle2[BadgeStyle2["Barber"] = 15] = "Barber";
      BadgeStyle2[BadgeStyle2["Clothing"] = 16] = "Clothing";
      BadgeStyle2[BadgeStyle2["Franklin"] = 17] = "Franklin";
      BadgeStyle2[BadgeStyle2["Bike"] = 18] = "Bike";
      BadgeStyle2[BadgeStyle2["Car"] = 19] = "Car";
      BadgeStyle2[BadgeStyle2["Gun"] = 20] = "Gun";
      BadgeStyle2[BadgeStyle2["HealthHeart"] = 21] = "HealthHeart";
      BadgeStyle2[BadgeStyle2["MakeupBrush"] = 22] = "MakeupBrush";
      BadgeStyle2[BadgeStyle2["Mask"] = 23] = "Mask";
      BadgeStyle2[BadgeStyle2["Michael"] = 24] = "Michael";
      BadgeStyle2[BadgeStyle2["Tattoo"] = 25] = "Tattoo";
      BadgeStyle2[BadgeStyle2["Tick"] = 26] = "Tick";
      BadgeStyle2[BadgeStyle2["Trevor"] = 27] = "Trevor";
      BadgeStyle2[BadgeStyle2["Female"] = 28] = "Female";
      BadgeStyle2[BadgeStyle2["Male"] = 29] = "Male";
      BadgeStyle2[BadgeStyle2["LockArena"] = 30] = "LockArena";
      BadgeStyle2[BadgeStyle2["Adversary"] = 31] = "Adversary";
      BadgeStyle2[BadgeStyle2["BaseJumping"] = 32] = "BaseJumping";
      BadgeStyle2[BadgeStyle2["Briefcase"] = 33] = "Briefcase";
      BadgeStyle2[BadgeStyle2["MissionStar"] = 34] = "MissionStar";
      BadgeStyle2[BadgeStyle2["Deathmatch"] = 35] = "Deathmatch";
      BadgeStyle2[BadgeStyle2["Castle"] = 36] = "Castle";
      BadgeStyle2[BadgeStyle2["Trophy"] = 37] = "Trophy";
      BadgeStyle2[BadgeStyle2["RaceFlag"] = 38] = "RaceFlag";
      BadgeStyle2[BadgeStyle2["RaceFlagPlane"] = 39] = "RaceFlagPlane";
      BadgeStyle2[BadgeStyle2["RaceFlagBicycle"] = 40] = "RaceFlagBicycle";
      BadgeStyle2[BadgeStyle2["RaceFlagPerson"] = 41] = "RaceFlagPerson";
      BadgeStyle2[BadgeStyle2["RaceFlagCar"] = 42] = "RaceFlagCar";
      BadgeStyle2[BadgeStyle2["RaceFlagBoatAnchor"] = 43] = "RaceFlagBoatAnchor";
      BadgeStyle2[BadgeStyle2["Rockstar"] = 44] = "Rockstar";
      BadgeStyle2[BadgeStyle2["Stunt"] = 45] = "Stunt";
      BadgeStyle2[BadgeStyle2["StuntPremium"] = 46] = "StuntPremium";
      BadgeStyle2[BadgeStyle2["RaceFlagStuntJump"] = 47] = "RaceFlagStuntJump";
      BadgeStyle2[BadgeStyle2["Shield"] = 48] = "Shield";
      BadgeStyle2[BadgeStyle2["TeamDeathmatch"] = 49] = "TeamDeathmatch";
      BadgeStyle2[BadgeStyle2["VehicleDeathmatch"] = 50] = "VehicleDeathmatch";
      BadgeStyle2[BadgeStyle2["MpAmmoPickup"] = 51] = "MpAmmoPickup";
      BadgeStyle2[BadgeStyle2["MpAmmo"] = 52] = "MpAmmo";
      BadgeStyle2[BadgeStyle2["MpCash"] = 53] = "MpCash";
      BadgeStyle2[BadgeStyle2["MpRp"] = 54] = "MpRp";
      BadgeStyle2[BadgeStyle2["MpSpectating"] = 55] = "MpSpectating";
      BadgeStyle2[BadgeStyle2["Sale"] = 56] = "Sale";
      BadgeStyle2[BadgeStyle2["GlobeWhite"] = 57] = "GlobeWhite";
      BadgeStyle2[BadgeStyle2["GlobeRed"] = 58] = "GlobeRed";
      BadgeStyle2[BadgeStyle2["GlobeBlue"] = 59] = "GlobeBlue";
      BadgeStyle2[BadgeStyle2["GlobeYellow"] = 60] = "GlobeYellow";
      BadgeStyle2[BadgeStyle2["GlobeGreen"] = 61] = "GlobeGreen";
      BadgeStyle2[BadgeStyle2["GlobeOrange"] = 62] = "GlobeOrange";
      BadgeStyle2[BadgeStyle2["InvArmWrestling"] = 63] = "InvArmWrestling";
      BadgeStyle2[BadgeStyle2["InvBasejump"] = 64] = "InvBasejump";
      BadgeStyle2[BadgeStyle2["InvMission"] = 65] = "InvMission";
      BadgeStyle2[BadgeStyle2["InvDarts"] = 66] = "InvDarts";
      BadgeStyle2[BadgeStyle2["InvDeathmatch"] = 67] = "InvDeathmatch";
      BadgeStyle2[BadgeStyle2["InvDrug"] = 68] = "InvDrug";
      BadgeStyle2[BadgeStyle2["InvCastle"] = 69] = "InvCastle";
      BadgeStyle2[BadgeStyle2["InvGolf"] = 70] = "InvGolf";
      BadgeStyle2[BadgeStyle2["InvBike"] = 71] = "InvBike";
      BadgeStyle2[BadgeStyle2["InvBoat"] = 72] = "InvBoat";
      BadgeStyle2[BadgeStyle2["InvAnchor"] = 73] = "InvAnchor";
      BadgeStyle2[BadgeStyle2["InvCar"] = 74] = "InvCar";
      BadgeStyle2[BadgeStyle2["InvDollar"] = 75] = "InvDollar";
      BadgeStyle2[BadgeStyle2["InvCoke"] = 76] = "InvCoke";
      BadgeStyle2[BadgeStyle2["InvKey"] = 77] = "InvKey";
      BadgeStyle2[BadgeStyle2["InvData"] = 78] = "InvData";
      BadgeStyle2[BadgeStyle2["InvHeli"] = 79] = "InvHeli";
      BadgeStyle2[BadgeStyle2["InvHeorin"] = 80] = "InvHeorin";
      BadgeStyle2[BadgeStyle2["InvKeycard"] = 81] = "InvKeycard";
      BadgeStyle2[BadgeStyle2["InvMeth"] = 82] = "InvMeth";
      BadgeStyle2[BadgeStyle2["InvBriefcase"] = 83] = "InvBriefcase";
      BadgeStyle2[BadgeStyle2["InvLink"] = 84] = "InvLink";
      BadgeStyle2[BadgeStyle2["InvPerson"] = 85] = "InvPerson";
      BadgeStyle2[BadgeStyle2["InvPlane"] = 86] = "InvPlane";
      BadgeStyle2[BadgeStyle2["InvPlane2"] = 87] = "InvPlane2";
      BadgeStyle2[BadgeStyle2["InvQuestionmark"] = 88] = "InvQuestionmark";
      BadgeStyle2[BadgeStyle2["InvRemote"] = 89] = "InvRemote";
      BadgeStyle2[BadgeStyle2["InvSafe"] = 90] = "InvSafe";
      BadgeStyle2[BadgeStyle2["InvSteerWheel"] = 91] = "InvSteerWheel";
      BadgeStyle2[BadgeStyle2["InvWeapon"] = 92] = "InvWeapon";
      BadgeStyle2[BadgeStyle2["InvWeed"] = 93] = "InvWeed";
      BadgeStyle2[BadgeStyle2["InvRaceFlagPlane"] = 94] = "InvRaceFlagPlane";
      BadgeStyle2[BadgeStyle2["InvRaceFlagBicycle"] = 95] = "InvRaceFlagBicycle";
      BadgeStyle2[BadgeStyle2["InvRaceFlagBoatAnchor"] = 96] = "InvRaceFlagBoatAnchor";
      BadgeStyle2[BadgeStyle2["InvRaceFlagPerson"] = 97] = "InvRaceFlagPerson";
      BadgeStyle2[BadgeStyle2["InvRaceFlagCar"] = 98] = "InvRaceFlagCar";
      BadgeStyle2[BadgeStyle2["InvRaceFlagHelmet"] = 99] = "InvRaceFlagHelmet";
      BadgeStyle2[BadgeStyle2["InvShootingRange"] = 100] = "InvShootingRange";
      BadgeStyle2[BadgeStyle2["InvSurvival"] = 101] = "InvSurvival";
      BadgeStyle2[BadgeStyle2["InvTeamDeathmatch"] = 102] = "InvTeamDeathmatch";
      BadgeStyle2[BadgeStyle2["InvTennis"] = 103] = "InvTennis";
      BadgeStyle2[BadgeStyle2["InvVehicleDeathmatch"] = 104] = "InvVehicleDeathmatch";
      BadgeStyle2[BadgeStyle2["AudioMute"] = 105] = "AudioMute";
      BadgeStyle2[BadgeStyle2["AudioInactive"] = 106] = "AudioInactive";
      BadgeStyle2[BadgeStyle2["AudioVol1"] = 107] = "AudioVol1";
      BadgeStyle2[BadgeStyle2["AudioVol2"] = 108] = "AudioVol2";
      BadgeStyle2[BadgeStyle2["AudioVol3"] = 109] = "AudioVol3";
      BadgeStyle2[BadgeStyle2["CountryUsa"] = 110] = "CountryUsa";
      BadgeStyle2[BadgeStyle2["CountryUk"] = 111] = "CountryUk";
      BadgeStyle2[BadgeStyle2["CountrySweden"] = 112] = "CountrySweden";
      BadgeStyle2[BadgeStyle2["CountryKorea"] = 113] = "CountryKorea";
      BadgeStyle2[BadgeStyle2["CountryJapan"] = 114] = "CountryJapan";
      BadgeStyle2[BadgeStyle2["CountryItaly"] = 115] = "CountryItaly";
      BadgeStyle2[BadgeStyle2["CountryGermany"] = 116] = "CountryGermany";
      BadgeStyle2[BadgeStyle2["CountryFrance"] = 117] = "CountryFrance";
      BadgeStyle2[BadgeStyle2["BrandAlbany"] = 118] = "BrandAlbany";
      BadgeStyle2[BadgeStyle2["BrandAnnis"] = 119] = "BrandAnnis";
      BadgeStyle2[BadgeStyle2["BrandBanshee"] = 120] = "BrandBanshee";
      BadgeStyle2[BadgeStyle2["BrandBenefactor"] = 121] = "BrandBenefactor";
      BadgeStyle2[BadgeStyle2["BrandBf"] = 122] = "BrandBf";
      BadgeStyle2[BadgeStyle2["BrandBollokan"] = 123] = "BrandBollokan";
      BadgeStyle2[BadgeStyle2["BrandBravado"] = 124] = "BrandBravado";
      BadgeStyle2[BadgeStyle2["BrandBrute"] = 125] = "BrandBrute";
      BadgeStyle2[BadgeStyle2["BrandBuckingham"] = 126] = "BrandBuckingham";
      BadgeStyle2[BadgeStyle2["BrandCanis"] = 127] = "BrandCanis";
      BadgeStyle2[BadgeStyle2["BrandChariot"] = 128] = "BrandChariot";
      BadgeStyle2[BadgeStyle2["BrandCheval"] = 129] = "BrandCheval";
      BadgeStyle2[BadgeStyle2["BrandClassique"] = 130] = "BrandClassique";
      BadgeStyle2[BadgeStyle2["BrandCoil"] = 131] = "BrandCoil";
      BadgeStyle2[BadgeStyle2["BrandDeclasse"] = 132] = "BrandDeclasse";
      BadgeStyle2[BadgeStyle2["BrandDewbauchee"] = 133] = "BrandDewbauchee";
      BadgeStyle2[BadgeStyle2["BrandDilettante"] = 134] = "BrandDilettante";
      BadgeStyle2[BadgeStyle2["BrandDinka"] = 135] = "BrandDinka";
      BadgeStyle2[BadgeStyle2["BrandDundreary"] = 136] = "BrandDundreary";
      BadgeStyle2[BadgeStyle2["BrandEmporer"] = 137] = "BrandEmporer";
      BadgeStyle2[BadgeStyle2["BrandEnus"] = 138] = "BrandEnus";
      BadgeStyle2[BadgeStyle2["BrandFathom"] = 139] = "BrandFathom";
      BadgeStyle2[BadgeStyle2["BrandGalivanter"] = 140] = "BrandGalivanter";
      BadgeStyle2[BadgeStyle2["BrandGrotti"] = 141] = "BrandGrotti";
      BadgeStyle2[BadgeStyle2["BrandGrotti2"] = 142] = "BrandGrotti2";
      BadgeStyle2[BadgeStyle2["BrandHijak"] = 143] = "BrandHijak";
      BadgeStyle2[BadgeStyle2["BrandHvy"] = 144] = "BrandHvy";
      BadgeStyle2[BadgeStyle2["BrandImponte"] = 145] = "BrandImponte";
      BadgeStyle2[BadgeStyle2["BrandInvetero"] = 146] = "BrandInvetero";
      BadgeStyle2[BadgeStyle2["BrandJacksheepe"] = 147] = "BrandJacksheepe";
      BadgeStyle2[BadgeStyle2["BrandLcc"] = 148] = "BrandLcc";
      BadgeStyle2[BadgeStyle2["BrandJobuilt"] = 149] = "BrandJobuilt";
      BadgeStyle2[BadgeStyle2["BrandKarin"] = 150] = "BrandKarin";
      BadgeStyle2[BadgeStyle2["BrandLampadati"] = 151] = "BrandLampadati";
      BadgeStyle2[BadgeStyle2["BrandMaibatsu"] = 152] = "BrandMaibatsu";
      BadgeStyle2[BadgeStyle2["BrandMammoth"] = 153] = "BrandMammoth";
      BadgeStyle2[BadgeStyle2["BrandMtl"] = 154] = "BrandMtl";
      BadgeStyle2[BadgeStyle2["BrandNagasaki"] = 155] = "BrandNagasaki";
      BadgeStyle2[BadgeStyle2["BrandObey"] = 156] = "BrandObey";
      BadgeStyle2[BadgeStyle2["BrandOcelot"] = 157] = "BrandOcelot";
      BadgeStyle2[BadgeStyle2["BrandOverflod"] = 158] = "BrandOverflod";
      BadgeStyle2[BadgeStyle2["BrandPed"] = 159] = "BrandPed";
      BadgeStyle2[BadgeStyle2["BrandPegassi"] = 160] = "BrandPegassi";
      BadgeStyle2[BadgeStyle2["BrandPfister"] = 161] = "BrandPfister";
      BadgeStyle2[BadgeStyle2["BrandPrincipe"] = 162] = "BrandPrincipe";
      BadgeStyle2[BadgeStyle2["BrandProgen"] = 163] = "BrandProgen";
      BadgeStyle2[BadgeStyle2["BrandProgen2"] = 164] = "BrandProgen2";
      BadgeStyle2[BadgeStyle2["BrandRune"] = 165] = "BrandRune";
      BadgeStyle2[BadgeStyle2["BrandSchyster"] = 166] = "BrandSchyster";
      BadgeStyle2[BadgeStyle2["BrandShitzu"] = 167] = "BrandShitzu";
      BadgeStyle2[BadgeStyle2["BrandSpeedophile"] = 168] = "BrandSpeedophile";
      BadgeStyle2[BadgeStyle2["BrandStanley"] = 169] = "BrandStanley";
      BadgeStyle2[BadgeStyle2["BrandTruffade"] = 170] = "BrandTruffade";
      BadgeStyle2[BadgeStyle2["BrandUbermacht"] = 171] = "BrandUbermacht";
      BadgeStyle2[BadgeStyle2["BrandVapid"] = 172] = "BrandVapid";
      BadgeStyle2[BadgeStyle2["BrandVulcar"] = 173] = "BrandVulcar";
      BadgeStyle2[BadgeStyle2["BrandWeeny"] = 174] = "BrandWeeny";
      BadgeStyle2[BadgeStyle2["BrandWestern"] = 175] = "BrandWestern";
      BadgeStyle2[BadgeStyle2["BrandWesternmotorcycle"] = 176] = "BrandWesternmotorcycle";
      BadgeStyle2[BadgeStyle2["BrandWillard"] = 177] = "BrandWillard";
      BadgeStyle2[BadgeStyle2["BrandZirconium"] = 178] = "BrandZirconium";
      BadgeStyle2[BadgeStyle2["Info"] = 179] = "Info";
    })(BadgeStyle = exports.BadgeStyle || (exports.BadgeStyle = {}));
  }
});

// ../../node_modules/fivem-js/lib/enums/Blip.js
var require_Blip = __commonJS({
  "../../node_modules/fivem-js/lib/enums/Blip.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BlipSprite = exports.BlipColor = void 0;
    var BlipColor;
    (function(BlipColor2) {
      BlipColor2[BlipColor2["White"] = 0] = "White";
      BlipColor2[BlipColor2["Red"] = 1] = "Red";
      BlipColor2[BlipColor2["Green"] = 2] = "Green";
      BlipColor2[BlipColor2["Blue"] = 3] = "Blue";
      BlipColor2[BlipColor2["MichaelBlue"] = 42] = "MichaelBlue";
      BlipColor2[BlipColor2["FranklinGreen"] = 43] = "FranklinGreen";
      BlipColor2[BlipColor2["TrevorOrange"] = 44] = "TrevorOrange";
      BlipColor2[BlipColor2["Yellow"] = 66] = "Yellow";
    })(BlipColor = exports.BlipColor || (exports.BlipColor = {}));
    var BlipSprite;
    (function(BlipSprite2) {
      BlipSprite2[BlipSprite2["Standard"] = 1] = "Standard";
      BlipSprite2[BlipSprite2["BigBlip"] = 2] = "BigBlip";
      BlipSprite2[BlipSprite2["PoliceOfficer"] = 3] = "PoliceOfficer";
      BlipSprite2[BlipSprite2["PoliceArea"] = 4] = "PoliceArea";
      BlipSprite2[BlipSprite2["Square"] = 5] = "Square";
      BlipSprite2[BlipSprite2["Player"] = 6] = "Player";
      BlipSprite2[BlipSprite2["North"] = 7] = "North";
      BlipSprite2[BlipSprite2["Waypoint"] = 8] = "Waypoint";
      BlipSprite2[BlipSprite2["BigCircle"] = 9] = "BigCircle";
      BlipSprite2[BlipSprite2["BigCircleOutline"] = 10] = "BigCircleOutline";
      BlipSprite2[BlipSprite2["ArrowUpOutlined"] = 11] = "ArrowUpOutlined";
      BlipSprite2[BlipSprite2["ArrowDownOutlined"] = 12] = "ArrowDownOutlined";
      BlipSprite2[BlipSprite2["ArrowUp"] = 13] = "ArrowUp";
      BlipSprite2[BlipSprite2["ArrowDown"] = 14] = "ArrowDown";
      BlipSprite2[BlipSprite2["PoliceHelicopterAnimated"] = 15] = "PoliceHelicopterAnimated";
      BlipSprite2[BlipSprite2["Jet"] = 16] = "Jet";
      BlipSprite2[BlipSprite2["Number1"] = 17] = "Number1";
      BlipSprite2[BlipSprite2["Number2"] = 18] = "Number2";
      BlipSprite2[BlipSprite2["Number3"] = 19] = "Number3";
      BlipSprite2[BlipSprite2["Number4"] = 20] = "Number4";
      BlipSprite2[BlipSprite2["Number5"] = 21] = "Number5";
      BlipSprite2[BlipSprite2["Number6"] = 22] = "Number6";
      BlipSprite2[BlipSprite2["Number7"] = 23] = "Number7";
      BlipSprite2[BlipSprite2["Number8"] = 24] = "Number8";
      BlipSprite2[BlipSprite2["Number9"] = 25] = "Number9";
      BlipSprite2[BlipSprite2["Number10"] = 26] = "Number10";
      BlipSprite2[BlipSprite2["GTAOCrew"] = 27] = "GTAOCrew";
      BlipSprite2[BlipSprite2["GTAOFriendly"] = 28] = "GTAOFriendly";
      BlipSprite2[BlipSprite2["Lift"] = 36] = "Lift";
      BlipSprite2[BlipSprite2["RaceFinish"] = 38] = "RaceFinish";
      BlipSprite2[BlipSprite2["Safehouse"] = 40] = "Safehouse";
      BlipSprite2[BlipSprite2["PoliceOfficer2"] = 41] = "PoliceOfficer2";
      BlipSprite2[BlipSprite2["PoliceCarDot"] = 42] = "PoliceCarDot";
      BlipSprite2[BlipSprite2["PoliceHelicopter"] = 43] = "PoliceHelicopter";
      BlipSprite2[BlipSprite2["ChatBubble"] = 47] = "ChatBubble";
      BlipSprite2[BlipSprite2["Garage2"] = 50] = "Garage2";
      BlipSprite2[BlipSprite2["Drugs"] = 51] = "Drugs";
      BlipSprite2[BlipSprite2["Store"] = 52] = "Store";
      BlipSprite2[BlipSprite2["PoliceCar"] = 56] = "PoliceCar";
      BlipSprite2[BlipSprite2["PolicePlayer"] = 58] = "PolicePlayer";
      BlipSprite2[BlipSprite2["PoliceStation"] = 60] = "PoliceStation";
      BlipSprite2[BlipSprite2["Hospital"] = 61] = "Hospital";
      BlipSprite2[BlipSprite2["Helicopter"] = 64] = "Helicopter";
      BlipSprite2[BlipSprite2["StrangersAndFreaks"] = 65] = "StrangersAndFreaks";
      BlipSprite2[BlipSprite2["ArmoredTruck"] = 66] = "ArmoredTruck";
      BlipSprite2[BlipSprite2["TowTruck"] = 68] = "TowTruck";
      BlipSprite2[BlipSprite2["Barber"] = 71] = "Barber";
      BlipSprite2[BlipSprite2["LosSantosCustoms"] = 72] = "LosSantosCustoms";
      BlipSprite2[BlipSprite2["Clothes"] = 73] = "Clothes";
      BlipSprite2[BlipSprite2["TattooParlor"] = 75] = "TattooParlor";
      BlipSprite2[BlipSprite2["Simeon"] = 76] = "Simeon";
      BlipSprite2[BlipSprite2["Lester"] = 77] = "Lester";
      BlipSprite2[BlipSprite2["Michael"] = 78] = "Michael";
      BlipSprite2[BlipSprite2["Trevor"] = 79] = "Trevor";
      BlipSprite2[BlipSprite2["Rampage"] = 84] = "Rampage";
      BlipSprite2[BlipSprite2["VinewoodTours"] = 85] = "VinewoodTours";
      BlipSprite2[BlipSprite2["Lamar"] = 86] = "Lamar";
      BlipSprite2[BlipSprite2["Franklin"] = 88] = "Franklin";
      BlipSprite2[BlipSprite2["Chinese"] = 89] = "Chinese";
      BlipSprite2[BlipSprite2["Airport"] = 90] = "Airport";
      BlipSprite2[BlipSprite2["Bar"] = 93] = "Bar";
      BlipSprite2[BlipSprite2["BaseJump"] = 94] = "BaseJump";
      BlipSprite2[BlipSprite2["CarWash"] = 100] = "CarWash";
      BlipSprite2[BlipSprite2["ComedyClub"] = 102] = "ComedyClub";
      BlipSprite2[BlipSprite2["Dart"] = 103] = "Dart";
      BlipSprite2[BlipSprite2["FIB"] = 106] = "FIB";
      BlipSprite2[BlipSprite2["DollarSign"] = 108] = "DollarSign";
      BlipSprite2[BlipSprite2["Golf"] = 109] = "Golf";
      BlipSprite2[BlipSprite2["AmmuNation"] = 110] = "AmmuNation";
      BlipSprite2[BlipSprite2["Exile"] = 112] = "Exile";
      BlipSprite2[BlipSprite2["ShootingRange"] = 119] = "ShootingRange";
      BlipSprite2[BlipSprite2["Solomon"] = 120] = "Solomon";
      BlipSprite2[BlipSprite2["StripClub"] = 121] = "StripClub";
      BlipSprite2[BlipSprite2["Tennis"] = 122] = "Tennis";
      BlipSprite2[BlipSprite2["Triathlon"] = 126] = "Triathlon";
      BlipSprite2[BlipSprite2["OffRoadRaceFinish"] = 127] = "OffRoadRaceFinish";
      BlipSprite2[BlipSprite2["Key"] = 134] = "Key";
      BlipSprite2[BlipSprite2["MovieTheater"] = 135] = "MovieTheater";
      BlipSprite2[BlipSprite2["Music"] = 136] = "Music";
      BlipSprite2[BlipSprite2["Marijuana"] = 140] = "Marijuana";
      BlipSprite2[BlipSprite2["Hunting"] = 141] = "Hunting";
      BlipSprite2[BlipSprite2["ArmsTraffickingGround"] = 147] = "ArmsTraffickingGround";
      BlipSprite2[BlipSprite2["Nigel"] = 149] = "Nigel";
      BlipSprite2[BlipSprite2["AssaultRifle"] = 150] = "AssaultRifle";
      BlipSprite2[BlipSprite2["Bat"] = 151] = "Bat";
      BlipSprite2[BlipSprite2["Grenade"] = 152] = "Grenade";
      BlipSprite2[BlipSprite2["Health"] = 153] = "Health";
      BlipSprite2[BlipSprite2["Knife"] = 154] = "Knife";
      BlipSprite2[BlipSprite2["Molotov"] = 155] = "Molotov";
      BlipSprite2[BlipSprite2["Pistol"] = 156] = "Pistol";
      BlipSprite2[BlipSprite2["RPG"] = 157] = "RPG";
      BlipSprite2[BlipSprite2["Shotgun"] = 158] = "Shotgun";
      BlipSprite2[BlipSprite2["SMG"] = 159] = "SMG";
      BlipSprite2[BlipSprite2["Sniper"] = 160] = "Sniper";
      BlipSprite2[BlipSprite2["SonicWave"] = 161] = "SonicWave";
      BlipSprite2[BlipSprite2["PointOfInterest"] = 162] = "PointOfInterest";
      BlipSprite2[BlipSprite2["GTAOPassive"] = 163] = "GTAOPassive";
      BlipSprite2[BlipSprite2["GTAOUsingMenu"] = 164] = "GTAOUsingMenu";
      BlipSprite2[BlipSprite2["Link"] = 171] = "Link";
      BlipSprite2[BlipSprite2["Minigun"] = 173] = "Minigun";
      BlipSprite2[BlipSprite2["GrenadeLauncher"] = 174] = "GrenadeLauncher";
      BlipSprite2[BlipSprite2["Armor"] = 175] = "Armor";
      BlipSprite2[BlipSprite2["Castle"] = 176] = "Castle";
      BlipSprite2[BlipSprite2["Camera"] = 184] = "Camera";
      BlipSprite2[BlipSprite2["Handcuffs"] = 188] = "Handcuffs";
      BlipSprite2[BlipSprite2["Yoga"] = 197] = "Yoga";
      BlipSprite2[BlipSprite2["Cab"] = 198] = "Cab";
      BlipSprite2[BlipSprite2["Number11"] = 199] = "Number11";
      BlipSprite2[BlipSprite2["Number12"] = 200] = "Number12";
      BlipSprite2[BlipSprite2["Number13"] = 201] = "Number13";
      BlipSprite2[BlipSprite2["Number14"] = 202] = "Number14";
      BlipSprite2[BlipSprite2["Number15"] = 203] = "Number15";
      BlipSprite2[BlipSprite2["Number16"] = 204] = "Number16";
      BlipSprite2[BlipSprite2["Shrink"] = 205] = "Shrink";
      BlipSprite2[BlipSprite2["Epsilon"] = 206] = "Epsilon";
      BlipSprite2[BlipSprite2["PersonalVehicleCar"] = 225] = "PersonalVehicleCar";
      BlipSprite2[BlipSprite2["PersonalVehicleBike"] = 226] = "PersonalVehicleBike";
      BlipSprite2[BlipSprite2["Custody"] = 237] = "Custody";
      BlipSprite2[BlipSprite2["ArmsTraffickingAir"] = 251] = "ArmsTraffickingAir";
      BlipSprite2[BlipSprite2["Fairground"] = 266] = "Fairground";
      BlipSprite2[BlipSprite2["PropertyManagement"] = 267] = "PropertyManagement";
      BlipSprite2[BlipSprite2["Altruist"] = 269] = "Altruist";
      BlipSprite2[BlipSprite2["Enemy"] = 270] = "Enemy";
      BlipSprite2[BlipSprite2["Chop"] = 273] = "Chop";
      BlipSprite2[BlipSprite2["Dead"] = 274] = "Dead";
      BlipSprite2[BlipSprite2["Hooker"] = 279] = "Hooker";
      BlipSprite2[BlipSprite2["Friend"] = 280] = "Friend";
      BlipSprite2[BlipSprite2["BountyHit"] = 303] = "BountyHit";
      BlipSprite2[BlipSprite2["GTAOMission"] = 304] = "GTAOMission";
      BlipSprite2[BlipSprite2["GTAOSurvival"] = 305] = "GTAOSurvival";
      BlipSprite2[BlipSprite2["CrateDrop"] = 306] = "CrateDrop";
      BlipSprite2[BlipSprite2["PlaneDrop"] = 307] = "PlaneDrop";
      BlipSprite2[BlipSprite2["Sub"] = 308] = "Sub";
      BlipSprite2[BlipSprite2["Race"] = 309] = "Race";
      BlipSprite2[BlipSprite2["Deathmatch"] = 310] = "Deathmatch";
      BlipSprite2[BlipSprite2["ArmWrestling"] = 311] = "ArmWrestling";
      BlipSprite2[BlipSprite2["AmmuNationShootingRange"] = 313] = "AmmuNationShootingRange";
      BlipSprite2[BlipSprite2["RaceAir"] = 314] = "RaceAir";
      BlipSprite2[BlipSprite2["RaceCar"] = 315] = "RaceCar";
      BlipSprite2[BlipSprite2["RaceSea"] = 316] = "RaceSea";
      BlipSprite2[BlipSprite2["GarbageTruck"] = 318] = "GarbageTruck";
      BlipSprite2[BlipSprite2["SafehouseForSale"] = 350] = "SafehouseForSale";
      BlipSprite2[BlipSprite2["Package"] = 351] = "Package";
      BlipSprite2[BlipSprite2["MartinMadrazo"] = 352] = "MartinMadrazo";
      BlipSprite2[BlipSprite2["EnemyHelicopter"] = 353] = "EnemyHelicopter";
      BlipSprite2[BlipSprite2["Boost"] = 354] = "Boost";
      BlipSprite2[BlipSprite2["Devin"] = 355] = "Devin";
      BlipSprite2[BlipSprite2["Marina"] = 356] = "Marina";
      BlipSprite2[BlipSprite2["Garage"] = 357] = "Garage";
      BlipSprite2[BlipSprite2["GolfFlag"] = 358] = "GolfFlag";
      BlipSprite2[BlipSprite2["Hangar"] = 359] = "Hangar";
      BlipSprite2[BlipSprite2["Helipad"] = 360] = "Helipad";
      BlipSprite2[BlipSprite2["JerryCan"] = 361] = "JerryCan";
      BlipSprite2[BlipSprite2["Masks"] = 362] = "Masks";
      BlipSprite2[BlipSprite2["HeistSetup"] = 363] = "HeistSetup";
      BlipSprite2[BlipSprite2["Incapacitated"] = 364] = "Incapacitated";
      BlipSprite2[BlipSprite2["PickupSpawn"] = 365] = "PickupSpawn";
      BlipSprite2[BlipSprite2["BoilerSuit"] = 366] = "BoilerSuit";
      BlipSprite2[BlipSprite2["Completed"] = 367] = "Completed";
      BlipSprite2[BlipSprite2["Rockets"] = 368] = "Rockets";
      BlipSprite2[BlipSprite2["GarageForSale"] = 369] = "GarageForSale";
      BlipSprite2[BlipSprite2["HelipadForSale"] = 370] = "HelipadForSale";
      BlipSprite2[BlipSprite2["MarinaForSale"] = 371] = "MarinaForSale";
      BlipSprite2[BlipSprite2["HangarForSale"] = 372] = "HangarForSale";
      BlipSprite2[BlipSprite2["Business"] = 374] = "Business";
      BlipSprite2[BlipSprite2["BusinessForSale"] = 375] = "BusinessForSale";
      BlipSprite2[BlipSprite2["RaceBike"] = 376] = "RaceBike";
      BlipSprite2[BlipSprite2["Parachute"] = 377] = "Parachute";
      BlipSprite2[BlipSprite2["TeamDeathmatch"] = 378] = "TeamDeathmatch";
      BlipSprite2[BlipSprite2["RaceFoot"] = 379] = "RaceFoot";
      BlipSprite2[BlipSprite2["VehicleDeathmatch"] = 380] = "VehicleDeathmatch";
      BlipSprite2[BlipSprite2["Barry"] = 381] = "Barry";
      BlipSprite2[BlipSprite2["Dom"] = 382] = "Dom";
      BlipSprite2[BlipSprite2["MaryAnn"] = 383] = "MaryAnn";
      BlipSprite2[BlipSprite2["Cletus"] = 384] = "Cletus";
      BlipSprite2[BlipSprite2["Josh"] = 385] = "Josh";
      BlipSprite2[BlipSprite2["Minute"] = 386] = "Minute";
      BlipSprite2[BlipSprite2["Omega"] = 387] = "Omega";
      BlipSprite2[BlipSprite2["Tonya"] = 388] = "Tonya";
      BlipSprite2[BlipSprite2["Paparazzo"] = 389] = "Paparazzo";
      BlipSprite2[BlipSprite2["Crosshair"] = 390] = "Crosshair";
      BlipSprite2[BlipSprite2["Creator"] = 398] = "Creator";
      BlipSprite2[BlipSprite2["CreatorDirection"] = 399] = "CreatorDirection";
      BlipSprite2[BlipSprite2["Abigail"] = 400] = "Abigail";
      BlipSprite2[BlipSprite2["Blimp"] = 401] = "Blimp";
      BlipSprite2[BlipSprite2["Repair"] = 402] = "Repair";
      BlipSprite2[BlipSprite2["Testosterone"] = 403] = "Testosterone";
      BlipSprite2[BlipSprite2["Dinghy"] = 404] = "Dinghy";
      BlipSprite2[BlipSprite2["Fanatic"] = 405] = "Fanatic";
      BlipSprite2[BlipSprite2["Information"] = 407] = "Information";
      BlipSprite2[BlipSprite2["CaptureBriefcase"] = 408] = "CaptureBriefcase";
      BlipSprite2[BlipSprite2["LastTeamStanding"] = 409] = "LastTeamStanding";
      BlipSprite2[BlipSprite2["Boat"] = 410] = "Boat";
      BlipSprite2[BlipSprite2["CaptureHouse"] = 411] = "CaptureHouse";
      BlipSprite2[BlipSprite2["JerryCan2"] = 415] = "JerryCan2";
      BlipSprite2[BlipSprite2["RP"] = 416] = "RP";
      BlipSprite2[BlipSprite2["GTAOPlayerSafehouse"] = 417] = "GTAOPlayerSafehouse";
      BlipSprite2[BlipSprite2["GTAOPlayerSafehouseDead"] = 418] = "GTAOPlayerSafehouseDead";
      BlipSprite2[BlipSprite2["CaptureAmericanFlag"] = 419] = "CaptureAmericanFlag";
      BlipSprite2[BlipSprite2["CaptureFlag"] = 420] = "CaptureFlag";
      BlipSprite2[BlipSprite2["Tank"] = 421] = "Tank";
      BlipSprite2[BlipSprite2["HelicopterAnimated"] = 422] = "HelicopterAnimated";
      BlipSprite2[BlipSprite2["Plane"] = 423] = "Plane";
      BlipSprite2[BlipSprite2["PlayerNoColor"] = 425] = "PlayerNoColor";
      BlipSprite2[BlipSprite2["GunCar"] = 426] = "GunCar";
      BlipSprite2[BlipSprite2["Speedboat"] = 427] = "Speedboat";
      BlipSprite2[BlipSprite2["Heist"] = 428] = "Heist";
      BlipSprite2[BlipSprite2["Stopwatch"] = 430] = "Stopwatch";
      BlipSprite2[BlipSprite2["DollarSignCircled"] = 431] = "DollarSignCircled";
      BlipSprite2[BlipSprite2["Crosshair2"] = 432] = "Crosshair2";
      BlipSprite2[BlipSprite2["DollarSignSquared"] = 434] = "DollarSignSquared";
    })(BlipSprite = exports.BlipSprite || (exports.BlipSprite = {}));
  }
});

// ../../node_modules/fivem-js/lib/enums/Bone.js
var require_Bone = __commonJS({
  "../../node_modules/fivem-js/lib/enums/Bone.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Bone = void 0;
    var Bone;
    (function(Bone2) {
      Bone2[Bone2["SKEL_ROOT"] = 0] = "SKEL_ROOT";
      Bone2[Bone2["SKEL_Pelvis"] = 11816] = "SKEL_Pelvis";
      Bone2[Bone2["SKEL_L_Thigh"] = 58271] = "SKEL_L_Thigh";
      Bone2[Bone2["SKEL_L_Calf"] = 63931] = "SKEL_L_Calf";
      Bone2[Bone2["SKEL_L_Foot"] = 14201] = "SKEL_L_Foot";
      Bone2[Bone2["SKEL_L_Toe0"] = 2108] = "SKEL_L_Toe0";
      Bone2[Bone2["IK_L_Foot"] = 65245] = "IK_L_Foot";
      Bone2[Bone2["PH_L_Foot"] = 57717] = "PH_L_Foot";
      Bone2[Bone2["MH_L_Knee"] = 46078] = "MH_L_Knee";
      Bone2[Bone2["SKEL_R_Thigh"] = 51826] = "SKEL_R_Thigh";
      Bone2[Bone2["SKEL_R_Calf"] = 36864] = "SKEL_R_Calf";
      Bone2[Bone2["SKEL_R_Foot"] = 52301] = "SKEL_R_Foot";
      Bone2[Bone2["SKEL_R_Toe0"] = 20781] = "SKEL_R_Toe0";
      Bone2[Bone2["IK_R_Foot"] = 35502] = "IK_R_Foot";
      Bone2[Bone2["PH_R_Foot"] = 24806] = "PH_R_Foot";
      Bone2[Bone2["MH_R_Knee"] = 16335] = "MH_R_Knee";
      Bone2[Bone2["RB_L_ThighRoll"] = 23639] = "RB_L_ThighRoll";
      Bone2[Bone2["RB_R_ThighRoll"] = 6442] = "RB_R_ThighRoll";
      Bone2[Bone2["SKEL_Spine_Root"] = 57597] = "SKEL_Spine_Root";
      Bone2[Bone2["SKEL_Spine0"] = 23553] = "SKEL_Spine0";
      Bone2[Bone2["SKEL_Spine1"] = 24816] = "SKEL_Spine1";
      Bone2[Bone2["SKEL_Spine2"] = 24817] = "SKEL_Spine2";
      Bone2[Bone2["SKEL_Spine3"] = 24818] = "SKEL_Spine3";
      Bone2[Bone2["SKEL_L_Clavicle"] = 64729] = "SKEL_L_Clavicle";
      Bone2[Bone2["SKEL_L_UpperArm"] = 45509] = "SKEL_L_UpperArm";
      Bone2[Bone2["SKEL_L_Forearm"] = 61163] = "SKEL_L_Forearm";
      Bone2[Bone2["SKEL_L_Hand"] = 18905] = "SKEL_L_Hand";
      Bone2[Bone2["SKEL_L_Finger00"] = 26610] = "SKEL_L_Finger00";
      Bone2[Bone2["SKEL_L_Finger01"] = 4089] = "SKEL_L_Finger01";
      Bone2[Bone2["SKEL_L_Finger02"] = 4090] = "SKEL_L_Finger02";
      Bone2[Bone2["SKEL_L_Finger10"] = 26611] = "SKEL_L_Finger10";
      Bone2[Bone2["SKEL_L_Finger11"] = 4169] = "SKEL_L_Finger11";
      Bone2[Bone2["SKEL_L_Finger12"] = 4170] = "SKEL_L_Finger12";
      Bone2[Bone2["SKEL_L_Finger20"] = 26612] = "SKEL_L_Finger20";
      Bone2[Bone2["SKEL_L_Finger21"] = 4185] = "SKEL_L_Finger21";
      Bone2[Bone2["SKEL_L_Finger22"] = 4186] = "SKEL_L_Finger22";
      Bone2[Bone2["SKEL_L_Finger30"] = 26613] = "SKEL_L_Finger30";
      Bone2[Bone2["SKEL_L_Finger31"] = 4137] = "SKEL_L_Finger31";
      Bone2[Bone2["SKEL_L_Finger32"] = 4138] = "SKEL_L_Finger32";
      Bone2[Bone2["SKEL_L_Finger40"] = 26614] = "SKEL_L_Finger40";
      Bone2[Bone2["SKEL_L_Finger41"] = 4153] = "SKEL_L_Finger41";
      Bone2[Bone2["SKEL_L_Finger42"] = 4154] = "SKEL_L_Finger42";
      Bone2[Bone2["PH_L_Hand"] = 60309] = "PH_L_Hand";
      Bone2[Bone2["IK_L_Hand"] = 36029] = "IK_L_Hand";
      Bone2[Bone2["RB_L_ForeArmRoll"] = 61007] = "RB_L_ForeArmRoll";
      Bone2[Bone2["RB_L_ArmRoll"] = 5232] = "RB_L_ArmRoll";
      Bone2[Bone2["MH_L_Elbow"] = 22711] = "MH_L_Elbow";
      Bone2[Bone2["SKEL_R_Clavicle"] = 10706] = "SKEL_R_Clavicle";
      Bone2[Bone2["SKEL_R_UpperArm"] = 40269] = "SKEL_R_UpperArm";
      Bone2[Bone2["SKEL_R_Forearm"] = 28252] = "SKEL_R_Forearm";
      Bone2[Bone2["SKEL_R_Hand"] = 57005] = "SKEL_R_Hand";
      Bone2[Bone2["SKEL_R_Finger00"] = 58866] = "SKEL_R_Finger00";
      Bone2[Bone2["SKEL_R_Finger01"] = 64016] = "SKEL_R_Finger01";
      Bone2[Bone2["SKEL_R_Finger02"] = 64017] = "SKEL_R_Finger02";
      Bone2[Bone2["SKEL_R_Finger10"] = 58867] = "SKEL_R_Finger10";
      Bone2[Bone2["SKEL_R_Finger11"] = 64096] = "SKEL_R_Finger11";
      Bone2[Bone2["SKEL_R_Finger12"] = 64097] = "SKEL_R_Finger12";
      Bone2[Bone2["SKEL_R_Finger20"] = 58868] = "SKEL_R_Finger20";
      Bone2[Bone2["SKEL_R_Finger21"] = 64112] = "SKEL_R_Finger21";
      Bone2[Bone2["SKEL_R_Finger22"] = 64113] = "SKEL_R_Finger22";
      Bone2[Bone2["SKEL_R_Finger30"] = 58869] = "SKEL_R_Finger30";
      Bone2[Bone2["SKEL_R_Finger31"] = 64064] = "SKEL_R_Finger31";
      Bone2[Bone2["SKEL_R_Finger32"] = 64065] = "SKEL_R_Finger32";
      Bone2[Bone2["SKEL_R_Finger40"] = 58870] = "SKEL_R_Finger40";
      Bone2[Bone2["SKEL_R_Finger41"] = 64080] = "SKEL_R_Finger41";
      Bone2[Bone2["SKEL_R_Finger42"] = 64081] = "SKEL_R_Finger42";
      Bone2[Bone2["PH_R_Hand"] = 28422] = "PH_R_Hand";
      Bone2[Bone2["IK_R_Hand"] = 6286] = "IK_R_Hand";
      Bone2[Bone2["RB_R_ForeArmRoll"] = 43810] = "RB_R_ForeArmRoll";
      Bone2[Bone2["RB_R_ArmRoll"] = 37119] = "RB_R_ArmRoll";
      Bone2[Bone2["MH_R_Elbow"] = 2992] = "MH_R_Elbow";
      Bone2[Bone2["SKEL_Neck_1"] = 39317] = "SKEL_Neck_1";
      Bone2[Bone2["SKEL_Head"] = 31086] = "SKEL_Head";
      Bone2[Bone2["IK_Head"] = 12844] = "IK_Head";
      Bone2[Bone2["FACIAL_facialRoot"] = 65068] = "FACIAL_facialRoot";
      Bone2[Bone2["FB_L_Brow_Out_000"] = 58331] = "FB_L_Brow_Out_000";
      Bone2[Bone2["FB_L_Lid_Upper_000"] = 45750] = "FB_L_Lid_Upper_000";
      Bone2[Bone2["FB_L_Eye_000"] = 25260] = "FB_L_Eye_000";
      Bone2[Bone2["FB_L_CheekBone_000"] = 21550] = "FB_L_CheekBone_000";
      Bone2[Bone2["FB_L_Lip_Corner_000"] = 29868] = "FB_L_Lip_Corner_000";
      Bone2[Bone2["FB_R_Lid_Upper_000"] = 43536] = "FB_R_Lid_Upper_000";
      Bone2[Bone2["FB_R_Eye_000"] = 27474] = "FB_R_Eye_000";
      Bone2[Bone2["FB_R_CheekBone_000"] = 19336] = "FB_R_CheekBone_000";
      Bone2[Bone2["FB_R_Brow_Out_000"] = 1356] = "FB_R_Brow_Out_000";
      Bone2[Bone2["FB_R_Lip_Corner_000"] = 11174] = "FB_R_Lip_Corner_000";
      Bone2[Bone2["FB_Brow_Centre_000"] = 37193] = "FB_Brow_Centre_000";
      Bone2[Bone2["FB_UpperLipRoot_000"] = 20178] = "FB_UpperLipRoot_000";
      Bone2[Bone2["FB_UpperLip_000"] = 61839] = "FB_UpperLip_000";
      Bone2[Bone2["FB_L_Lip_Top_000"] = 20279] = "FB_L_Lip_Top_000";
      Bone2[Bone2["FB_R_Lip_Top_000"] = 17719] = "FB_R_Lip_Top_000";
      Bone2[Bone2["FB_Jaw_000"] = 46240] = "FB_Jaw_000";
      Bone2[Bone2["FB_LowerLipRoot_000"] = 17188] = "FB_LowerLipRoot_000";
      Bone2[Bone2["FB_LowerLip_000"] = 20623] = "FB_LowerLip_000";
      Bone2[Bone2["FB_L_Lip_Bot_000"] = 47419] = "FB_L_Lip_Bot_000";
      Bone2[Bone2["FB_R_Lip_Bot_000"] = 49979] = "FB_R_Lip_Bot_000";
      Bone2[Bone2["FB_Tongue_000"] = 47495] = "FB_Tongue_000";
      Bone2[Bone2["RB_Neck_1"] = 35731] = "RB_Neck_1";
      Bone2[Bone2["IK_Root"] = 56604] = "IK_Root";
    })(Bone = exports.Bone || (exports.Bone = {}));
  }
});

// ../../node_modules/fivem-js/lib/enums/CameraShake.js
var require_CameraShake = __commonJS({
  "../../node_modules/fivem-js/lib/enums/CameraShake.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CameraShake = void 0;
    var CameraShake;
    (function(CameraShake2) {
      CameraShake2[CameraShake2["Hand"] = 0] = "Hand";
      CameraShake2[CameraShake2["SmallExplosion"] = 1] = "SmallExplosion";
      CameraShake2[CameraShake2["MediumExplosion"] = 2] = "MediumExplosion";
      CameraShake2[CameraShake2["LargeExplosion"] = 3] = "LargeExplosion";
      CameraShake2[CameraShake2["Jolt"] = 4] = "Jolt";
      CameraShake2[CameraShake2["Vibrate"] = 5] = "Vibrate";
      CameraShake2[CameraShake2["RoadVibration"] = 6] = "RoadVibration";
      CameraShake2[CameraShake2["Drunk"] = 7] = "Drunk";
      CameraShake2[CameraShake2["SkyDiving"] = 8] = "SkyDiving";
      CameraShake2[CameraShake2["FamilyDrugTrip"] = 9] = "FamilyDrugTrip";
      CameraShake2[CameraShake2["DeathFail"] = 10] = "DeathFail";
    })(CameraShake = exports.CameraShake || (exports.CameraShake = {}));
  }
});

// ../../node_modules/fivem-js/lib/enums/CheckboxStyle.js
var require_CheckboxStyle = __commonJS({
  "../../node_modules/fivem-js/lib/enums/CheckboxStyle.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CheckboxStyle = void 0;
    var CheckboxStyle;
    (function(CheckboxStyle2) {
      CheckboxStyle2[CheckboxStyle2["Tick"] = 0] = "Tick";
      CheckboxStyle2[CheckboxStyle2["Cross"] = 1] = "Cross";
    })(CheckboxStyle = exports.CheckboxStyle || (exports.CheckboxStyle = {}));
  }
});

// ../../node_modules/fivem-js/lib/enums/Checkpoint.js
var require_Checkpoint = __commonJS({
  "../../node_modules/fivem-js/lib/enums/Checkpoint.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CheckpointCustomIconStyle = exports.CheckpointIcon = void 0;
    var CheckpointIcon;
    (function(CheckpointIcon2) {
      CheckpointIcon2[CheckpointIcon2["CylinderSingleArrow"] = 0] = "CylinderSingleArrow";
      CheckpointIcon2[CheckpointIcon2["CylinderDoubleArrow"] = 1] = "CylinderDoubleArrow";
      CheckpointIcon2[CheckpointIcon2["CylinderTripleArrow"] = 2] = "CylinderTripleArrow";
      CheckpointIcon2[CheckpointIcon2["CylinderCycleArrow"] = 3] = "CylinderCycleArrow";
      CheckpointIcon2[CheckpointIcon2["CylinderCheckerboard"] = 4] = "CylinderCheckerboard";
      CheckpointIcon2[CheckpointIcon2["CylinderSingleArrow2"] = 5] = "CylinderSingleArrow2";
      CheckpointIcon2[CheckpointIcon2["CylinderDoubleArrow2"] = 6] = "CylinderDoubleArrow2";
      CheckpointIcon2[CheckpointIcon2["CylinderTripleArrow2"] = 7] = "CylinderTripleArrow2";
      CheckpointIcon2[CheckpointIcon2["CylinderCycleArrow2"] = 8] = "CylinderCycleArrow2";
      CheckpointIcon2[CheckpointIcon2["CylinderCheckerboard2"] = 9] = "CylinderCheckerboard2";
      CheckpointIcon2[CheckpointIcon2["RingSingleArrow"] = 10] = "RingSingleArrow";
      CheckpointIcon2[CheckpointIcon2["RingDoubleArrow"] = 11] = "RingDoubleArrow";
      CheckpointIcon2[CheckpointIcon2["RingTripleArrow"] = 12] = "RingTripleArrow";
      CheckpointIcon2[CheckpointIcon2["RingCycleArrow"] = 13] = "RingCycleArrow";
      CheckpointIcon2[CheckpointIcon2["RingCheckerboard"] = 14] = "RingCheckerboard";
      CheckpointIcon2[CheckpointIcon2["SingleArrow"] = 15] = "SingleArrow";
      CheckpointIcon2[CheckpointIcon2["DoubleArrow"] = 16] = "DoubleArrow";
      CheckpointIcon2[CheckpointIcon2["TripleArrow"] = 17] = "TripleArrow";
      CheckpointIcon2[CheckpointIcon2["CycleArrow"] = 18] = "CycleArrow";
      CheckpointIcon2[CheckpointIcon2["Checkerboard"] = 19] = "Checkerboard";
      CheckpointIcon2[CheckpointIcon2["CylinderSingleArrow3"] = 20] = "CylinderSingleArrow3";
      CheckpointIcon2[CheckpointIcon2["CylinderDoubleArrow3"] = 21] = "CylinderDoubleArrow3";
      CheckpointIcon2[CheckpointIcon2["CylinderTripleArrow3"] = 22] = "CylinderTripleArrow3";
      CheckpointIcon2[CheckpointIcon2["CylinderCycleArrow3"] = 23] = "CylinderCycleArrow3";
      CheckpointIcon2[CheckpointIcon2["CylinderCheckerboard3"] = 24] = "CylinderCheckerboard3";
      CheckpointIcon2[CheckpointIcon2["CylinderSingleArrow4"] = 25] = "CylinderSingleArrow4";
      CheckpointIcon2[CheckpointIcon2["CylinderDoubleArrow4"] = 26] = "CylinderDoubleArrow4";
      CheckpointIcon2[CheckpointIcon2["CylinderTripleArrow4"] = 27] = "CylinderTripleArrow4";
      CheckpointIcon2[CheckpointIcon2["CylinderCycleArrow4"] = 28] = "CylinderCycleArrow4";
      CheckpointIcon2[CheckpointIcon2["CylinderCheckerboard4"] = 29] = "CylinderCheckerboard4";
      CheckpointIcon2[CheckpointIcon2["CylinderSingleArrow5"] = 30] = "CylinderSingleArrow5";
      CheckpointIcon2[CheckpointIcon2["CylinderDoubleArrow5"] = 31] = "CylinderDoubleArrow5";
      CheckpointIcon2[CheckpointIcon2["CylinderTripleArrow5"] = 32] = "CylinderTripleArrow5";
      CheckpointIcon2[CheckpointIcon2["CylinderCycleArrow5"] = 33] = "CylinderCycleArrow5";
      CheckpointIcon2[CheckpointIcon2["CylinderCheckerboard5"] = 34] = "CylinderCheckerboard5";
      CheckpointIcon2[CheckpointIcon2["RingPlaneUp"] = 35] = "RingPlaneUp";
      CheckpointIcon2[CheckpointIcon2["RingPlaneLeft"] = 36] = "RingPlaneLeft";
      CheckpointIcon2[CheckpointIcon2["RingPlaneRight"] = 37] = "RingPlaneRight";
      CheckpointIcon2[CheckpointIcon2["RingPlaneDown"] = 38] = "RingPlaneDown";
      CheckpointIcon2[CheckpointIcon2["Empty"] = 39] = "Empty";
      CheckpointIcon2[CheckpointIcon2["Ring"] = 40] = "Ring";
      CheckpointIcon2[CheckpointIcon2["Empty2"] = 41] = "Empty2";
      CheckpointIcon2[CheckpointIcon2["Cyclinder"] = 45] = "Cyclinder";
      CheckpointIcon2[CheckpointIcon2["Cyclinder2"] = 46] = "Cyclinder2";
      CheckpointIcon2[CheckpointIcon2["Cyclinder3"] = 47] = "Cyclinder3";
    })(CheckpointIcon = exports.CheckpointIcon || (exports.CheckpointIcon = {}));
    var CheckpointCustomIconStyle;
    (function(CheckpointCustomIconStyle2) {
      CheckpointCustomIconStyle2[CheckpointCustomIconStyle2["Number"] = 0] = "Number";
      CheckpointCustomIconStyle2[CheckpointCustomIconStyle2["SingleArrow"] = 1] = "SingleArrow";
      CheckpointCustomIconStyle2[CheckpointCustomIconStyle2["DoubleArrow"] = 2] = "DoubleArrow";
      CheckpointCustomIconStyle2[CheckpointCustomIconStyle2["TripleArrow"] = 3] = "TripleArrow";
      CheckpointCustomIconStyle2[CheckpointCustomIconStyle2["Ring"] = 4] = "Ring";
      CheckpointCustomIconStyle2[CheckpointCustomIconStyle2["CycleArrow"] = 5] = "CycleArrow";
      CheckpointCustomIconStyle2[CheckpointCustomIconStyle2["Ring2"] = 6] = "Ring2";
      CheckpointCustomIconStyle2[CheckpointCustomIconStyle2["RingPointer"] = 7] = "RingPointer";
      CheckpointCustomIconStyle2[CheckpointCustomIconStyle2["SegmentedRing"] = 8] = "SegmentedRing";
      CheckpointCustomIconStyle2[CheckpointCustomIconStyle2["Sphere"] = 9] = "Sphere";
      CheckpointCustomIconStyle2[CheckpointCustomIconStyle2["Dollar"] = 10] = "Dollar";
      CheckpointCustomIconStyle2[CheckpointCustomIconStyle2["QuintupleLines"] = 11] = "QuintupleLines";
      CheckpointCustomIconStyle2[CheckpointCustomIconStyle2["BeastIcon"] = 12] = "BeastIcon";
    })(CheckpointCustomIconStyle = exports.CheckpointCustomIconStyle || (exports.CheckpointCustomIconStyle = {}));
  }
});

// ../../node_modules/fivem-js/lib/enums/CloudHat.js
var require_CloudHat = __commonJS({
  "../../node_modules/fivem-js/lib/enums/CloudHat.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CloudHat = void 0;
    var CloudHat;
    (function(CloudHat2) {
      CloudHat2[CloudHat2["Unknown"] = 1] = "Unknown";
      CloudHat2[CloudHat2["Altostratus"] = 2] = "Altostratus";
      CloudHat2[CloudHat2["Cirrus"] = 3] = "Cirrus";
      CloudHat2[CloudHat2["Cirrocumulus"] = 4] = "Cirrocumulus";
      CloudHat2[CloudHat2["Clear"] = 5] = "Clear";
      CloudHat2[CloudHat2["Cloudy"] = 6] = "Cloudy";
      CloudHat2[CloudHat2["Contrails"] = 7] = "Contrails";
      CloudHat2[CloudHat2["Horizon"] = 8] = "Horizon";
      CloudHat2[CloudHat2["HorizonBand1"] = 9] = "HorizonBand1";
      CloudHat2[CloudHat2["HorizonBand2"] = 10] = "HorizonBand2";
      CloudHat2[CloudHat2["HorizonBand3"] = 11] = "HorizonBand3";
      CloudHat2[CloudHat2["Horsey"] = 12] = "Horsey";
      CloudHat2[CloudHat2["Nimbus"] = 13] = "Nimbus";
      CloudHat2[CloudHat2["Puffs"] = 14] = "Puffs";
      CloudHat2[CloudHat2["Rain"] = 15] = "Rain";
      CloudHat2[CloudHat2["Snowy"] = 16] = "Snowy";
      CloudHat2[CloudHat2["Stormy"] = 17] = "Stormy";
      CloudHat2[CloudHat2["Stratoscumulus"] = 18] = "Stratoscumulus";
      CloudHat2[CloudHat2["Stripey"] = 19] = "Stripey";
      CloudHat2[CloudHat2["Shower"] = 20] = "Shower";
      CloudHat2[CloudHat2["Wispy"] = 21] = "Wispy";
    })(CloudHat = exports.CloudHat || (exports.CloudHat = {}));
  }
});

// ../../node_modules/fivem-js/lib/enums/Control.js
var require_Control = __commonJS({
  "../../node_modules/fivem-js/lib/enums/Control.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Control = void 0;
    var Control;
    (function(Control2) {
      Control2[Control2["NextCamera"] = 0] = "NextCamera";
      Control2[Control2["LookLeftRight"] = 1] = "LookLeftRight";
      Control2[Control2["LookUpDown"] = 2] = "LookUpDown";
      Control2[Control2["LookUpOnly"] = 3] = "LookUpOnly";
      Control2[Control2["LookDownOnly"] = 4] = "LookDownOnly";
      Control2[Control2["LookLeftOnly"] = 5] = "LookLeftOnly";
      Control2[Control2["LookRightOnly"] = 6] = "LookRightOnly";
      Control2[Control2["CinematicSlowMo"] = 7] = "CinematicSlowMo";
      Control2[Control2["FlyUpDown"] = 8] = "FlyUpDown";
      Control2[Control2["FlyLeftRight"] = 9] = "FlyLeftRight";
      Control2[Control2["ScriptedFlyZUp"] = 10] = "ScriptedFlyZUp";
      Control2[Control2["ScriptedFlyZDown"] = 11] = "ScriptedFlyZDown";
      Control2[Control2["WeaponWheelUpDown"] = 12] = "WeaponWheelUpDown";
      Control2[Control2["WeaponWheelLeftRight"] = 13] = "WeaponWheelLeftRight";
      Control2[Control2["WeaponWheelNext"] = 14] = "WeaponWheelNext";
      Control2[Control2["WeaponWheelPrev"] = 15] = "WeaponWheelPrev";
      Control2[Control2["SelectNextWeapon"] = 16] = "SelectNextWeapon";
      Control2[Control2["SelectPrevWeapon"] = 17] = "SelectPrevWeapon";
      Control2[Control2["SkipCutscene"] = 18] = "SkipCutscene";
      Control2[Control2["CharacterWheel"] = 19] = "CharacterWheel";
      Control2[Control2["MultiplayerInfo"] = 20] = "MultiplayerInfo";
      Control2[Control2["Sprint"] = 21] = "Sprint";
      Control2[Control2["Jump"] = 22] = "Jump";
      Control2[Control2["Enter"] = 23] = "Enter";
      Control2[Control2["Attack"] = 24] = "Attack";
      Control2[Control2["Aim"] = 25] = "Aim";
      Control2[Control2["LookBehind"] = 26] = "LookBehind";
      Control2[Control2["Phone"] = 27] = "Phone";
      Control2[Control2["SpecialAbility"] = 28] = "SpecialAbility";
      Control2[Control2["SpecialAbilitySecondary"] = 29] = "SpecialAbilitySecondary";
      Control2[Control2["MoveLeftRight"] = 30] = "MoveLeftRight";
      Control2[Control2["MoveUpDown"] = 31] = "MoveUpDown";
      Control2[Control2["MoveUpOnly"] = 32] = "MoveUpOnly";
      Control2[Control2["MoveDownOnly"] = 33] = "MoveDownOnly";
      Control2[Control2["MoveLeftOnly"] = 34] = "MoveLeftOnly";
      Control2[Control2["MoveRightOnly"] = 35] = "MoveRightOnly";
      Control2[Control2["Duck"] = 36] = "Duck";
      Control2[Control2["SelectWeapon"] = 37] = "SelectWeapon";
      Control2[Control2["Pickup"] = 38] = "Pickup";
      Control2[Control2["SniperZoom"] = 39] = "SniperZoom";
      Control2[Control2["SniperZoomInOnly"] = 40] = "SniperZoomInOnly";
      Control2[Control2["SniperZoomOutOnly"] = 41] = "SniperZoomOutOnly";
      Control2[Control2["SniperZoomInSecondary"] = 42] = "SniperZoomInSecondary";
      Control2[Control2["SniperZoomOutSecondary"] = 43] = "SniperZoomOutSecondary";
      Control2[Control2["Cover"] = 44] = "Cover";
      Control2[Control2["Reload"] = 45] = "Reload";
      Control2[Control2["Talk"] = 46] = "Talk";
      Control2[Control2["Detonate"] = 47] = "Detonate";
      Control2[Control2["HUDSpecial"] = 48] = "HUDSpecial";
      Control2[Control2["Arrest"] = 49] = "Arrest";
      Control2[Control2["AccurateAim"] = 50] = "AccurateAim";
      Control2[Control2["Context"] = 51] = "Context";
      Control2[Control2["ContextSecondary"] = 52] = "ContextSecondary";
      Control2[Control2["WeaponSpecial"] = 53] = "WeaponSpecial";
      Control2[Control2["WeaponSpecial2"] = 54] = "WeaponSpecial2";
      Control2[Control2["Dive"] = 55] = "Dive";
      Control2[Control2["DropWeapon"] = 56] = "DropWeapon";
      Control2[Control2["DropAmmo"] = 57] = "DropAmmo";
      Control2[Control2["ThrowGrenade"] = 58] = "ThrowGrenade";
      Control2[Control2["VehicleMoveLeftRight"] = 59] = "VehicleMoveLeftRight";
      Control2[Control2["VehicleMoveUpDown"] = 60] = "VehicleMoveUpDown";
      Control2[Control2["VehicleMoveUpOnly"] = 61] = "VehicleMoveUpOnly";
      Control2[Control2["VehicleMoveDownOnly"] = 62] = "VehicleMoveDownOnly";
      Control2[Control2["VehicleMoveLeftOnly"] = 63] = "VehicleMoveLeftOnly";
      Control2[Control2["VehicleMoveRightOnly"] = 64] = "VehicleMoveRightOnly";
      Control2[Control2["VehicleSpecial"] = 65] = "VehicleSpecial";
      Control2[Control2["VehicleGunLeftRight"] = 66] = "VehicleGunLeftRight";
      Control2[Control2["VehicleGunUpDown"] = 67] = "VehicleGunUpDown";
      Control2[Control2["VehicleAim"] = 68] = "VehicleAim";
      Control2[Control2["VehicleAttack"] = 69] = "VehicleAttack";
      Control2[Control2["VehicleAttack2"] = 70] = "VehicleAttack2";
      Control2[Control2["VehicleAccelerate"] = 71] = "VehicleAccelerate";
      Control2[Control2["VehicleBrake"] = 72] = "VehicleBrake";
      Control2[Control2["VehicleDuck"] = 73] = "VehicleDuck";
      Control2[Control2["VehicleHeadlight"] = 74] = "VehicleHeadlight";
      Control2[Control2["VehicleExit"] = 75] = "VehicleExit";
      Control2[Control2["VehicleHandbrake"] = 76] = "VehicleHandbrake";
      Control2[Control2["VehicleHotwireLeft"] = 77] = "VehicleHotwireLeft";
      Control2[Control2["VehicleHotwireRight"] = 78] = "VehicleHotwireRight";
      Control2[Control2["VehicleLookBehind"] = 79] = "VehicleLookBehind";
      Control2[Control2["VehicleCinCam"] = 80] = "VehicleCinCam";
      Control2[Control2["VehicleNextRadio"] = 81] = "VehicleNextRadio";
      Control2[Control2["VehiclePrevRadio"] = 82] = "VehiclePrevRadio";
      Control2[Control2["VehicleNextRadioTrack"] = 83] = "VehicleNextRadioTrack";
      Control2[Control2["VehiclePrevRadioTrack"] = 84] = "VehiclePrevRadioTrack";
      Control2[Control2["VehicleRadioWheel"] = 85] = "VehicleRadioWheel";
      Control2[Control2["VehicleHorn"] = 86] = "VehicleHorn";
      Control2[Control2["VehicleFlyThrottleUp"] = 87] = "VehicleFlyThrottleUp";
      Control2[Control2["VehicleFlyThrottleDown"] = 88] = "VehicleFlyThrottleDown";
      Control2[Control2["VehicleFlyYawLeft"] = 89] = "VehicleFlyYawLeft";
      Control2[Control2["VehicleFlyYawRight"] = 90] = "VehicleFlyYawRight";
      Control2[Control2["VehiclePassengerAim"] = 91] = "VehiclePassengerAim";
      Control2[Control2["VehiclePassengerAttack"] = 92] = "VehiclePassengerAttack";
      Control2[Control2["VehicleSpecialAbilityFranklin"] = 93] = "VehicleSpecialAbilityFranklin";
      Control2[Control2["VehicleStuntUpDown"] = 94] = "VehicleStuntUpDown";
      Control2[Control2["VehicleCinematicUpDown"] = 95] = "VehicleCinematicUpDown";
      Control2[Control2["VehicleCinematicUpOnly"] = 96] = "VehicleCinematicUpOnly";
      Control2[Control2["VehicleCinematicDownOnly"] = 97] = "VehicleCinematicDownOnly";
      Control2[Control2["VehicleCinematicLeftRight"] = 98] = "VehicleCinematicLeftRight";
      Control2[Control2["VehicleSelectNextWeapon"] = 99] = "VehicleSelectNextWeapon";
      Control2[Control2["VehicleSelectPrevWeapon"] = 100] = "VehicleSelectPrevWeapon";
      Control2[Control2["VehicleRoof"] = 101] = "VehicleRoof";
      Control2[Control2["VehicleJump"] = 102] = "VehicleJump";
      Control2[Control2["VehicleGrapplingHook"] = 103] = "VehicleGrapplingHook";
      Control2[Control2["VehicleShuffle"] = 104] = "VehicleShuffle";
      Control2[Control2["VehicleDropProjectile"] = 105] = "VehicleDropProjectile";
      Control2[Control2["VehicleMouseControlOverride"] = 106] = "VehicleMouseControlOverride";
      Control2[Control2["VehicleFlyRollLeftRight"] = 107] = "VehicleFlyRollLeftRight";
      Control2[Control2["VehicleFlyRollLeftOnly"] = 108] = "VehicleFlyRollLeftOnly";
      Control2[Control2["VehicleFlyRollRightOnly"] = 109] = "VehicleFlyRollRightOnly";
      Control2[Control2["VehicleFlyPitchUpDown"] = 110] = "VehicleFlyPitchUpDown";
      Control2[Control2["VehicleFlyPitchUpOnly"] = 111] = "VehicleFlyPitchUpOnly";
      Control2[Control2["VehicleFlyPitchDownOnly"] = 112] = "VehicleFlyPitchDownOnly";
      Control2[Control2["VehicleFlyUnderCarriage"] = 113] = "VehicleFlyUnderCarriage";
      Control2[Control2["VehicleFlyAttack"] = 114] = "VehicleFlyAttack";
      Control2[Control2["VehicleFlySelectNextWeapon"] = 115] = "VehicleFlySelectNextWeapon";
      Control2[Control2["VehicleFlySelectPrevWeapon"] = 116] = "VehicleFlySelectPrevWeapon";
      Control2[Control2["VehicleFlySelectTargetLeft"] = 117] = "VehicleFlySelectTargetLeft";
      Control2[Control2["VehicleFlySelectTargetRight"] = 118] = "VehicleFlySelectTargetRight";
      Control2[Control2["VehicleFlyVerticalFlightMode"] = 119] = "VehicleFlyVerticalFlightMode";
      Control2[Control2["VehicleFlyDuck"] = 120] = "VehicleFlyDuck";
      Control2[Control2["VehicleFlyAttackCamera"] = 121] = "VehicleFlyAttackCamera";
      Control2[Control2["VehicleFlyMouseControlOverride"] = 122] = "VehicleFlyMouseControlOverride";
      Control2[Control2["VehicleSubTurnLeftRight"] = 123] = "VehicleSubTurnLeftRight";
      Control2[Control2["VehicleSubTurnLeftOnly"] = 124] = "VehicleSubTurnLeftOnly";
      Control2[Control2["VehicleSubTurnRightOnly"] = 125] = "VehicleSubTurnRightOnly";
      Control2[Control2["VehicleSubPitchUpDown"] = 126] = "VehicleSubPitchUpDown";
      Control2[Control2["VehicleSubPitchUpOnly"] = 127] = "VehicleSubPitchUpOnly";
      Control2[Control2["VehicleSubPitchDownOnly"] = 128] = "VehicleSubPitchDownOnly";
      Control2[Control2["VehicleSubThrottleUp"] = 129] = "VehicleSubThrottleUp";
      Control2[Control2["VehicleSubThrottleDown"] = 130] = "VehicleSubThrottleDown";
      Control2[Control2["VehicleSubAscend"] = 131] = "VehicleSubAscend";
      Control2[Control2["VehicleSubDescend"] = 132] = "VehicleSubDescend";
      Control2[Control2["VehicleSubTurnHardLeft"] = 133] = "VehicleSubTurnHardLeft";
      Control2[Control2["VehicleSubTurnHardRight"] = 134] = "VehicleSubTurnHardRight";
      Control2[Control2["VehicleSubMouseControlOverride"] = 135] = "VehicleSubMouseControlOverride";
      Control2[Control2["VehiclePushbikePedal"] = 136] = "VehiclePushbikePedal";
      Control2[Control2["VehiclePushbikeSprint"] = 137] = "VehiclePushbikeSprint";
      Control2[Control2["VehiclePushbikeFrontBrake"] = 138] = "VehiclePushbikeFrontBrake";
      Control2[Control2["VehiclePushbikeRearBrake"] = 139] = "VehiclePushbikeRearBrake";
      Control2[Control2["MeleeAttackLight"] = 140] = "MeleeAttackLight";
      Control2[Control2["MeleeAttackHeavy"] = 141] = "MeleeAttackHeavy";
      Control2[Control2["MeleeAttackAlternate"] = 142] = "MeleeAttackAlternate";
      Control2[Control2["MeleeBlock"] = 143] = "MeleeBlock";
      Control2[Control2["ParachuteDeploy"] = 144] = "ParachuteDeploy";
      Control2[Control2["ParachuteDetach"] = 145] = "ParachuteDetach";
      Control2[Control2["ParachuteTurnLeftRight"] = 146] = "ParachuteTurnLeftRight";
      Control2[Control2["ParachuteTurnLeftOnly"] = 147] = "ParachuteTurnLeftOnly";
      Control2[Control2["ParachuteTurnRightOnly"] = 148] = "ParachuteTurnRightOnly";
      Control2[Control2["ParachutePitchUpDown"] = 149] = "ParachutePitchUpDown";
      Control2[Control2["ParachutePitchUpOnly"] = 150] = "ParachutePitchUpOnly";
      Control2[Control2["ParachutePitchDownOnly"] = 151] = "ParachutePitchDownOnly";
      Control2[Control2["ParachuteBrakeLeft"] = 152] = "ParachuteBrakeLeft";
      Control2[Control2["ParachuteBrakeRight"] = 153] = "ParachuteBrakeRight";
      Control2[Control2["ParachuteSmoke"] = 154] = "ParachuteSmoke";
      Control2[Control2["ParachutePrecisionLanding"] = 155] = "ParachutePrecisionLanding";
      Control2[Control2["Map"] = 156] = "Map";
      Control2[Control2["SelectWeaponUnarmed"] = 157] = "SelectWeaponUnarmed";
      Control2[Control2["SelectWeaponMelee"] = 158] = "SelectWeaponMelee";
      Control2[Control2["SelectWeaponHandgun"] = 159] = "SelectWeaponHandgun";
      Control2[Control2["SelectWeaponShotgun"] = 160] = "SelectWeaponShotgun";
      Control2[Control2["SelectWeaponSmg"] = 161] = "SelectWeaponSmg";
      Control2[Control2["SelectWeaponAutoRifle"] = 162] = "SelectWeaponAutoRifle";
      Control2[Control2["SelectWeaponSniper"] = 163] = "SelectWeaponSniper";
      Control2[Control2["SelectWeaponHeavy"] = 164] = "SelectWeaponHeavy";
      Control2[Control2["SelectWeaponSpecial"] = 165] = "SelectWeaponSpecial";
      Control2[Control2["SelectCharacterMichael"] = 166] = "SelectCharacterMichael";
      Control2[Control2["SelectCharacterFranklin"] = 167] = "SelectCharacterFranklin";
      Control2[Control2["SelectCharacterTrevor"] = 168] = "SelectCharacterTrevor";
      Control2[Control2["SelectCharacterMultiplayer"] = 169] = "SelectCharacterMultiplayer";
      Control2[Control2["SaveReplayClip"] = 170] = "SaveReplayClip";
      Control2[Control2["SpecialAbilityPC"] = 171] = "SpecialAbilityPC";
      Control2[Control2["PhoneUp"] = 172] = "PhoneUp";
      Control2[Control2["PhoneDown"] = 173] = "PhoneDown";
      Control2[Control2["PhoneLeft"] = 174] = "PhoneLeft";
      Control2[Control2["PhoneRight"] = 175] = "PhoneRight";
      Control2[Control2["PhoneSelect"] = 176] = "PhoneSelect";
      Control2[Control2["PhoneCancel"] = 177] = "PhoneCancel";
      Control2[Control2["PhoneOption"] = 178] = "PhoneOption";
      Control2[Control2["PhoneExtraOption"] = 179] = "PhoneExtraOption";
      Control2[Control2["PhoneScrollForward"] = 180] = "PhoneScrollForward";
      Control2[Control2["PhoneScrollBackward"] = 181] = "PhoneScrollBackward";
      Control2[Control2["PhoneCameraFocusLock"] = 182] = "PhoneCameraFocusLock";
      Control2[Control2["PhoneCameraGrid"] = 183] = "PhoneCameraGrid";
      Control2[Control2["PhoneCameraSelfie"] = 184] = "PhoneCameraSelfie";
      Control2[Control2["PhoneCameraDOF"] = 185] = "PhoneCameraDOF";
      Control2[Control2["PhoneCameraExpression"] = 186] = "PhoneCameraExpression";
      Control2[Control2["FrontendDown"] = 187] = "FrontendDown";
      Control2[Control2["FrontendUp"] = 188] = "FrontendUp";
      Control2[Control2["FrontendLeft"] = 189] = "FrontendLeft";
      Control2[Control2["FrontendRight"] = 190] = "FrontendRight";
      Control2[Control2["FrontendRdown"] = 191] = "FrontendRdown";
      Control2[Control2["FrontendRup"] = 192] = "FrontendRup";
      Control2[Control2["FrontendRleft"] = 193] = "FrontendRleft";
      Control2[Control2["FrontendRright"] = 194] = "FrontendRright";
      Control2[Control2["FrontendAxisX"] = 195] = "FrontendAxisX";
      Control2[Control2["FrontendAxisY"] = 196] = "FrontendAxisY";
      Control2[Control2["FrontendRightAxisX"] = 197] = "FrontendRightAxisX";
      Control2[Control2["FrontendRightAxisY"] = 198] = "FrontendRightAxisY";
      Control2[Control2["FrontendPause"] = 199] = "FrontendPause";
      Control2[Control2["FrontendPauseAlternate"] = 200] = "FrontendPauseAlternate";
      Control2[Control2["FrontendAccept"] = 201] = "FrontendAccept";
      Control2[Control2["FrontendCancel"] = 202] = "FrontendCancel";
      Control2[Control2["FrontendX"] = 203] = "FrontendX";
      Control2[Control2["FrontendY"] = 204] = "FrontendY";
      Control2[Control2["FrontendLb"] = 205] = "FrontendLb";
      Control2[Control2["FrontendRb"] = 206] = "FrontendRb";
      Control2[Control2["FrontendLt"] = 207] = "FrontendLt";
      Control2[Control2["FrontendRt"] = 208] = "FrontendRt";
      Control2[Control2["FrontendLs"] = 209] = "FrontendLs";
      Control2[Control2["FrontendRs"] = 210] = "FrontendRs";
      Control2[Control2["FrontendLeaderboard"] = 211] = "FrontendLeaderboard";
      Control2[Control2["FrontendSocialClub"] = 212] = "FrontendSocialClub";
      Control2[Control2["FrontendSocialClubSecondary"] = 213] = "FrontendSocialClubSecondary";
      Control2[Control2["FrontendDelete"] = 214] = "FrontendDelete";
      Control2[Control2["FrontendEndscreenAccept"] = 215] = "FrontendEndscreenAccept";
      Control2[Control2["FrontendEndscreenExpand"] = 216] = "FrontendEndscreenExpand";
      Control2[Control2["FrontendSelect"] = 217] = "FrontendSelect";
      Control2[Control2["ScriptLeftAxisX"] = 218] = "ScriptLeftAxisX";
      Control2[Control2["ScriptLeftAxisY"] = 219] = "ScriptLeftAxisY";
      Control2[Control2["ScriptRightAxisX"] = 220] = "ScriptRightAxisX";
      Control2[Control2["ScriptRightAxisY"] = 221] = "ScriptRightAxisY";
      Control2[Control2["ScriptRUp"] = 222] = "ScriptRUp";
      Control2[Control2["ScriptRDown"] = 223] = "ScriptRDown";
      Control2[Control2["ScriptRLeft"] = 224] = "ScriptRLeft";
      Control2[Control2["ScriptRRight"] = 225] = "ScriptRRight";
      Control2[Control2["ScriptLB"] = 226] = "ScriptLB";
      Control2[Control2["ScriptRB"] = 227] = "ScriptRB";
      Control2[Control2["ScriptLT"] = 228] = "ScriptLT";
      Control2[Control2["ScriptRT"] = 229] = "ScriptRT";
      Control2[Control2["ScriptLS"] = 230] = "ScriptLS";
      Control2[Control2["ScriptRS"] = 231] = "ScriptRS";
      Control2[Control2["ScriptPadUp"] = 232] = "ScriptPadUp";
      Control2[Control2["ScriptPadDown"] = 233] = "ScriptPadDown";
      Control2[Control2["ScriptPadLeft"] = 234] = "ScriptPadLeft";
      Control2[Control2["ScriptPadRight"] = 235] = "ScriptPadRight";
      Control2[Control2["ScriptSelect"] = 236] = "ScriptSelect";
      Control2[Control2["CursorAccept"] = 237] = "CursorAccept";
      Control2[Control2["CursorCancel"] = 238] = "CursorCancel";
      Control2[Control2["CursorX"] = 239] = "CursorX";
      Control2[Control2["CursorY"] = 240] = "CursorY";
      Control2[Control2["CursorScrollUp"] = 241] = "CursorScrollUp";
      Control2[Control2["CursorScrollDown"] = 242] = "CursorScrollDown";
      Control2[Control2["EnterCheatCode"] = 243] = "EnterCheatCode";
      Control2[Control2["InteractionMenu"] = 244] = "InteractionMenu";
      Control2[Control2["MpTextChatAll"] = 245] = "MpTextChatAll";
      Control2[Control2["MpTextChatTeam"] = 246] = "MpTextChatTeam";
      Control2[Control2["MpTextChatFriends"] = 247] = "MpTextChatFriends";
      Control2[Control2["MpTextChatCrew"] = 248] = "MpTextChatCrew";
      Control2[Control2["PushToTalk"] = 249] = "PushToTalk";
      Control2[Control2["CreatorLS"] = 250] = "CreatorLS";
      Control2[Control2["CreatorRS"] = 251] = "CreatorRS";
      Control2[Control2["CreatorLT"] = 252] = "CreatorLT";
      Control2[Control2["CreatorRT"] = 253] = "CreatorRT";
      Control2[Control2["CreatorMenuToggle"] = 254] = "CreatorMenuToggle";
      Control2[Control2["CreatorAccept"] = 255] = "CreatorAccept";
      Control2[Control2["CreatorDelete"] = 256] = "CreatorDelete";
      Control2[Control2["Attack2"] = 257] = "Attack2";
      Control2[Control2["RappelJump"] = 258] = "RappelJump";
      Control2[Control2["RappelLongJump"] = 259] = "RappelLongJump";
      Control2[Control2["RappelSmashWindow"] = 260] = "RappelSmashWindow";
      Control2[Control2["PrevWeapon"] = 261] = "PrevWeapon";
      Control2[Control2["NextWeapon"] = 262] = "NextWeapon";
      Control2[Control2["MeleeAttack1"] = 263] = "MeleeAttack1";
      Control2[Control2["MeleeAttack2"] = 264] = "MeleeAttack2";
      Control2[Control2["Whistle"] = 265] = "Whistle";
      Control2[Control2["MoveLeft"] = 266] = "MoveLeft";
      Control2[Control2["MoveRight"] = 267] = "MoveRight";
      Control2[Control2["MoveUp"] = 268] = "MoveUp";
      Control2[Control2["MoveDown"] = 269] = "MoveDown";
      Control2[Control2["LookLeft"] = 270] = "LookLeft";
      Control2[Control2["LookRight"] = 271] = "LookRight";
      Control2[Control2["LookUp"] = 272] = "LookUp";
      Control2[Control2["LookDown"] = 273] = "LookDown";
      Control2[Control2["SniperZoomIn"] = 274] = "SniperZoomIn";
      Control2[Control2["SniperZoomOut"] = 275] = "SniperZoomOut";
      Control2[Control2["SniperZoomInAlternate"] = 276] = "SniperZoomInAlternate";
      Control2[Control2["SniperZoomOutAlternate"] = 277] = "SniperZoomOutAlternate";
      Control2[Control2["VehicleMoveLeft"] = 278] = "VehicleMoveLeft";
      Control2[Control2["VehicleMoveRight"] = 279] = "VehicleMoveRight";
      Control2[Control2["VehicleMoveUp"] = 280] = "VehicleMoveUp";
      Control2[Control2["VehicleMoveDown"] = 281] = "VehicleMoveDown";
      Control2[Control2["VehicleGunLeft"] = 282] = "VehicleGunLeft";
      Control2[Control2["VehicleGunRight"] = 283] = "VehicleGunRight";
      Control2[Control2["VehicleGunUp"] = 284] = "VehicleGunUp";
      Control2[Control2["VehicleGunDown"] = 285] = "VehicleGunDown";
      Control2[Control2["VehicleLookLeft"] = 286] = "VehicleLookLeft";
      Control2[Control2["VehicleLookRight"] = 287] = "VehicleLookRight";
      Control2[Control2["ReplayStartStopRecording"] = 288] = "ReplayStartStopRecording";
      Control2[Control2["ReplayStartStopRecordingSecondary"] = 289] = "ReplayStartStopRecordingSecondary";
      Control2[Control2["ScaledLookLeftRight"] = 290] = "ScaledLookLeftRight";
      Control2[Control2["ScaledLookUpDown"] = 291] = "ScaledLookUpDown";
      Control2[Control2["ScaledLookUpOnly"] = 292] = "ScaledLookUpOnly";
      Control2[Control2["ScaledLookDownOnly"] = 293] = "ScaledLookDownOnly";
      Control2[Control2["ScaledLookLeftOnly"] = 294] = "ScaledLookLeftOnly";
      Control2[Control2["ScaledLookRightOnly"] = 295] = "ScaledLookRightOnly";
      Control2[Control2["ReplayMarkerDelete"] = 296] = "ReplayMarkerDelete";
      Control2[Control2["ReplayClipDelete"] = 297] = "ReplayClipDelete";
      Control2[Control2["ReplayPause"] = 298] = "ReplayPause";
      Control2[Control2["ReplayRewind"] = 299] = "ReplayRewind";
      Control2[Control2["ReplayFfwd"] = 300] = "ReplayFfwd";
      Control2[Control2["ReplayNewmarker"] = 301] = "ReplayNewmarker";
      Control2[Control2["ReplayRecord"] = 302] = "ReplayRecord";
      Control2[Control2["ReplayScreenshot"] = 303] = "ReplayScreenshot";
      Control2[Control2["ReplayHidehud"] = 304] = "ReplayHidehud";
      Control2[Control2["ReplayStartpoint"] = 305] = "ReplayStartpoint";
      Control2[Control2["ReplayEndpoint"] = 306] = "ReplayEndpoint";
      Control2[Control2["ReplayAdvance"] = 307] = "ReplayAdvance";
      Control2[Control2["ReplayBack"] = 308] = "ReplayBack";
      Control2[Control2["ReplayTools"] = 309] = "ReplayTools";
      Control2[Control2["ReplayRestart"] = 310] = "ReplayRestart";
      Control2[Control2["ReplayShowhotkey"] = 311] = "ReplayShowhotkey";
      Control2[Control2["ReplayCycleMarkerLeft"] = 312] = "ReplayCycleMarkerLeft";
      Control2[Control2["ReplayCycleMarkerRight"] = 313] = "ReplayCycleMarkerRight";
      Control2[Control2["ReplayFOVIncrease"] = 314] = "ReplayFOVIncrease";
      Control2[Control2["ReplayFOVDecrease"] = 315] = "ReplayFOVDecrease";
      Control2[Control2["ReplayCameraUp"] = 316] = "ReplayCameraUp";
      Control2[Control2["ReplayCameraDown"] = 317] = "ReplayCameraDown";
      Control2[Control2["ReplaySave"] = 318] = "ReplaySave";
      Control2[Control2["ReplayToggletime"] = 319] = "ReplayToggletime";
      Control2[Control2["ReplayToggletips"] = 320] = "ReplayToggletips";
      Control2[Control2["ReplayPreview"] = 321] = "ReplayPreview";
      Control2[Control2["ReplayToggleTimeline"] = 322] = "ReplayToggleTimeline";
      Control2[Control2["ReplayTimelinePickupClip"] = 323] = "ReplayTimelinePickupClip";
      Control2[Control2["ReplayTimelineDuplicateClip"] = 324] = "ReplayTimelineDuplicateClip";
      Control2[Control2["ReplayTimelinePlaceClip"] = 325] = "ReplayTimelinePlaceClip";
      Control2[Control2["ReplayCtrl"] = 326] = "ReplayCtrl";
      Control2[Control2["ReplayTimelineSave"] = 327] = "ReplayTimelineSave";
      Control2[Control2["ReplayPreviewAudio"] = 328] = "ReplayPreviewAudio";
      Control2[Control2["VehicleDriveLook"] = 329] = "VehicleDriveLook";
      Control2[Control2["VehicleDriveLook2"] = 330] = "VehicleDriveLook2";
      Control2[Control2["VehicleFlyAttack2"] = 331] = "VehicleFlyAttack2";
      Control2[Control2["RadioWheelUpDown"] = 332] = "RadioWheelUpDown";
      Control2[Control2["RadioWheelLeftRight"] = 333] = "RadioWheelLeftRight";
      Control2[Control2["VehicleSlowMoUpDown"] = 334] = "VehicleSlowMoUpDown";
      Control2[Control2["VehicleSlowMoUpOnly"] = 335] = "VehicleSlowMoUpOnly";
      Control2[Control2["VehicleSlowMoDownOnly"] = 336] = "VehicleSlowMoDownOnly";
      Control2[Control2["VehicleHydraulicsControlToggle"] = 337] = "VehicleHydraulicsControlToggle";
      Control2[Control2["VehicleHydraulicsControlLeft"] = 338] = "VehicleHydraulicsControlLeft";
      Control2[Control2["VehicleHydraulicsControlRight"] = 339] = "VehicleHydraulicsControlRight";
      Control2[Control2["VehicleHydraulicsControlUp"] = 340] = "VehicleHydraulicsControlUp";
      Control2[Control2["VehicleHydraulicsControlDown"] = 341] = "VehicleHydraulicsControlDown";
      Control2[Control2["VehicleHydraulicsControlUpDown"] = 342] = "VehicleHydraulicsControlUpDown";
      Control2[Control2["VehicleHydraulicsControlLeftRight"] = 343] = "VehicleHydraulicsControlLeftRight";
      Control2[Control2["SwitchVisor"] = 344] = "SwitchVisor";
      Control2[Control2["VehicleMeleeHold"] = 345] = "VehicleMeleeHold";
      Control2[Control2["VehicleMeleeLeft"] = 346] = "VehicleMeleeLeft";
      Control2[Control2["VehicleMeleeRight"] = 347] = "VehicleMeleeRight";
      Control2[Control2["MapPointOfInterest"] = 348] = "MapPointOfInterest";
      Control2[Control2["ReplaySnapmaticPhoto"] = 349] = "ReplaySnapmaticPhoto";
      Control2[Control2["VehicleCarJump"] = 350] = "VehicleCarJump";
      Control2[Control2["VehicleRocketBoost"] = 351] = "VehicleRocketBoost";
      Control2[Control2["VehicleFlyBoost"] = 352] = "VehicleFlyBoost";
      Control2[Control2["VehicleParachute"] = 353] = "VehicleParachute";
      Control2[Control2["VehicleBikeWings"] = 354] = "VehicleBikeWings";
      Control2[Control2["VehicleFlyBombBay"] = 355] = "VehicleFlyBombBay";
      Control2[Control2["VehicleFlyCounter"] = 356] = "VehicleFlyCounter";
      Control2[Control2["VehicleFlyTransform"] = 357] = "VehicleFlyTransform";
    })(Control = exports.Control || (exports.Control = {}));
  }
});

// ../../node_modules/fivem-js/lib/enums/CursorSprite.js
var require_CursorSprite = __commonJS({
  "../../node_modules/fivem-js/lib/enums/CursorSprite.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CursorSprite = void 0;
    var CursorSprite;
    (function(CursorSprite2) {
      CursorSprite2[CursorSprite2["Normal"] = 1] = "Normal";
      CursorSprite2[CursorSprite2["LightArrow"] = 2] = "LightArrow";
      CursorSprite2[CursorSprite2["OpenHand"] = 3] = "OpenHand";
      CursorSprite2[CursorSprite2["GrabHand"] = 4] = "GrabHand";
      CursorSprite2[CursorSprite2["MiddleFinger"] = 5] = "MiddleFinger";
      CursorSprite2[CursorSprite2["LeftArrow"] = 6] = "LeftArrow";
      CursorSprite2[CursorSprite2["RightArrow"] = 7] = "RightArrow";
      CursorSprite2[CursorSprite2["UpArrow"] = 8] = "UpArrow";
      CursorSprite2[CursorSprite2["DownArrow"] = 9] = "DownArrow";
      CursorSprite2[CursorSprite2["HorizontalDoubleArrow"] = 10] = "HorizontalDoubleArrow";
      CursorSprite2[CursorSprite2["NormalWithPlus"] = 11] = "NormalWithPlus";
      CursorSprite2[CursorSprite2["NormalWithMinus"] = 12] = "NormalWithMinus";
    })(CursorSprite = exports.CursorSprite || (exports.CursorSprite = {}));
  }
});

// ../../node_modules/fivem-js/lib/enums/Driving.js
var require_Driving = __commonJS({
  "../../node_modules/fivem-js/lib/enums/Driving.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.VehicleDrivingFlags = exports.DrivingStyle = void 0;
    var DrivingStyle;
    (function(DrivingStyle2) {
      DrivingStyle2[DrivingStyle2["None"] = 0] = "None";
      DrivingStyle2[DrivingStyle2["Normal"] = 786603] = "Normal";
      DrivingStyle2[DrivingStyle2["IgnoreLights"] = 2883621] = "IgnoreLights";
      DrivingStyle2[DrivingStyle2["SometimesOvertakeTraffic"] = 5] = "SometimesOvertakeTraffic";
      DrivingStyle2[DrivingStyle2["Rushed"] = 1074528293] = "Rushed";
      DrivingStyle2[DrivingStyle2["AvoidTraffic"] = 786468] = "AvoidTraffic";
      DrivingStyle2[DrivingStyle2["AvoidTrafficExtremely"] = 6] = "AvoidTrafficExtremely";
      DrivingStyle2[DrivingStyle2["AvoidHighwaysWhenPossible"] = 536870912] = "AvoidHighwaysWhenPossible";
      DrivingStyle2[DrivingStyle2["IgnorePathing"] = 16777216] = "IgnorePathing";
      DrivingStyle2[DrivingStyle2["IgnoreRoads"] = 4194304] = "IgnoreRoads";
      DrivingStyle2[DrivingStyle2["ShortestPath"] = 262144] = "ShortestPath";
      DrivingStyle2[DrivingStyle2["Backwards"] = 1024] = "Backwards";
    })(DrivingStyle = exports.DrivingStyle || (exports.DrivingStyle = {}));
    var VehicleDrivingFlags;
    (function(VehicleDrivingFlags2) {
      VehicleDrivingFlags2[VehicleDrivingFlags2["None"] = 0] = "None";
      VehicleDrivingFlags2[VehicleDrivingFlags2["FollowTraffic"] = 1] = "FollowTraffic";
      VehicleDrivingFlags2[VehicleDrivingFlags2["YieldToPeds"] = 2] = "YieldToPeds";
      VehicleDrivingFlags2[VehicleDrivingFlags2["AvoidVehicles"] = 4] = "AvoidVehicles";
      VehicleDrivingFlags2[VehicleDrivingFlags2["AvoidEmptyVehicles"] = 8] = "AvoidEmptyVehicles";
      VehicleDrivingFlags2[VehicleDrivingFlags2["AvoidPeds"] = 16] = "AvoidPeds";
      VehicleDrivingFlags2[VehicleDrivingFlags2["AvoidObjects"] = 32] = "AvoidObjects";
      VehicleDrivingFlags2[VehicleDrivingFlags2["StopAtTrafficLights"] = 128] = "StopAtTrafficLights";
      VehicleDrivingFlags2[VehicleDrivingFlags2["UseBlinkers"] = 256] = "UseBlinkers";
      VehicleDrivingFlags2[VehicleDrivingFlags2["AllowGoingWrongWay"] = 512] = "AllowGoingWrongWay";
      VehicleDrivingFlags2[VehicleDrivingFlags2["Reverse"] = 1024] = "Reverse";
      VehicleDrivingFlags2[VehicleDrivingFlags2["AllowMedianCrossing"] = 262144] = "AllowMedianCrossing";
      VehicleDrivingFlags2[VehicleDrivingFlags2["DriveBySight"] = 4194304] = "DriveBySight";
      VehicleDrivingFlags2[VehicleDrivingFlags2["IgnorePathFinding"] = 16777216] = "IgnorePathFinding";
      VehicleDrivingFlags2[VehicleDrivingFlags2["TryToAvoidHighways"] = 536870912] = "TryToAvoidHighways";
      VehicleDrivingFlags2[VehicleDrivingFlags2["StopAtDestination"] = 2147483648] = "StopAtDestination";
    })(VehicleDrivingFlags = exports.VehicleDrivingFlags || (exports.VehicleDrivingFlags = {}));
  }
});

// ../../node_modules/fivem-js/lib/enums/ExplosionType.js
var require_ExplosionType = __commonJS({
  "../../node_modules/fivem-js/lib/enums/ExplosionType.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ExplosionType = void 0;
    var ExplosionType;
    (function(ExplosionType2) {
      ExplosionType2[ExplosionType2["Grenade"] = 0] = "Grenade";
      ExplosionType2[ExplosionType2["GrenadeL"] = 1] = "GrenadeL";
      ExplosionType2[ExplosionType2["StickyBomb"] = 2] = "StickyBomb";
      ExplosionType2[ExplosionType2["Molotov1"] = 3] = "Molotov1";
      ExplosionType2[ExplosionType2["Rocket"] = 4] = "Rocket";
      ExplosionType2[ExplosionType2["TankShell"] = 5] = "TankShell";
      ExplosionType2[ExplosionType2["HiOctane"] = 6] = "HiOctane";
      ExplosionType2[ExplosionType2["Car"] = 7] = "Car";
      ExplosionType2[ExplosionType2["Plane"] = 8] = "Plane";
      ExplosionType2[ExplosionType2["PetrolPump"] = 9] = "PetrolPump";
      ExplosionType2[ExplosionType2["Bike"] = 10] = "Bike";
      ExplosionType2[ExplosionType2["Steam"] = 11] = "Steam";
      ExplosionType2[ExplosionType2["Flame"] = 12] = "Flame";
      ExplosionType2[ExplosionType2["WaterHydrant"] = 13] = "WaterHydrant";
      ExplosionType2[ExplosionType2["GasCanister"] = 14] = "GasCanister";
      ExplosionType2[ExplosionType2["Boat"] = 15] = "Boat";
      ExplosionType2[ExplosionType2["ShipDestroy"] = 16] = "ShipDestroy";
      ExplosionType2[ExplosionType2["Truck"] = 17] = "Truck";
      ExplosionType2[ExplosionType2["Bullet"] = 18] = "Bullet";
      ExplosionType2[ExplosionType2["SmokeGL"] = 19] = "SmokeGL";
      ExplosionType2[ExplosionType2["SmokeG"] = 20] = "SmokeG";
      ExplosionType2[ExplosionType2["BZGas"] = 21] = "BZGas";
      ExplosionType2[ExplosionType2["Flare"] = 22] = "Flare";
      ExplosionType2[ExplosionType2["GasCanister2"] = 23] = "GasCanister2";
      ExplosionType2[ExplosionType2["Extinguisher"] = 24] = "Extinguisher";
      ExplosionType2[ExplosionType2["ProgramAR"] = 25] = "ProgramAR";
      ExplosionType2[ExplosionType2["Train"] = 26] = "Train";
      ExplosionType2[ExplosionType2["Barrel"] = 27] = "Barrel";
      ExplosionType2[ExplosionType2["Propane"] = 28] = "Propane";
      ExplosionType2[ExplosionType2["Blimp"] = 29] = "Blimp";
      ExplosionType2[ExplosionType2["FlameExplode"] = 30] = "FlameExplode";
      ExplosionType2[ExplosionType2["Tanker"] = 31] = "Tanker";
      ExplosionType2[ExplosionType2["PlaneRocket"] = 32] = "PlaneRocket";
      ExplosionType2[ExplosionType2["VehicleBullet"] = 33] = "VehicleBullet";
      ExplosionType2[ExplosionType2["GasTank"] = 34] = "GasTank";
      ExplosionType2[ExplosionType2["FireWork"] = 35] = "FireWork";
      ExplosionType2[ExplosionType2["SnowBall"] = 36] = "SnowBall";
      ExplosionType2[ExplosionType2["ProxMine"] = 37] = "ProxMine";
      ExplosionType2[ExplosionType2["Valkyrie"] = 38] = "Valkyrie";
    })(ExplosionType = exports.ExplosionType || (exports.ExplosionType = {}));
  }
});

// ../../node_modules/fivem-js/lib/enums/Font.js
var require_Font = __commonJS({
  "../../node_modules/fivem-js/lib/enums/Font.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Font = void 0;
    var Font;
    (function(Font2) {
      Font2[Font2["ChaletLondon"] = 0] = "ChaletLondon";
      Font2[Font2["HouseScript"] = 1] = "HouseScript";
      Font2[Font2["Monospace"] = 2] = "Monospace";
      Font2[Font2["ChaletComprimeCologne"] = 4] = "ChaletComprimeCologne";
      Font2[Font2["Pricedown"] = 7] = "Pricedown";
    })(Font = exports.Font || (exports.Font = {}));
  }
});

// ../../node_modules/fivem-js/lib/enums/ForceType.js
var require_ForceType = __commonJS({
  "../../node_modules/fivem-js/lib/enums/ForceType.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ForceType = void 0;
    var ForceType;
    (function(ForceType2) {
      ForceType2[ForceType2["MinForce"] = 0] = "MinForce";
      ForceType2[ForceType2["MaxForceRot"] = 1] = "MaxForceRot";
      ForceType2[ForceType2["MinForce2"] = 2] = "MinForce2";
      ForceType2[ForceType2["MaxForceRot2"] = 3] = "MaxForceRot2";
      ForceType2[ForceType2["ForceNoRot"] = 4] = "ForceNoRot";
      ForceType2[ForceType2["ForceRotPlusForce"] = 5] = "ForceRotPlusForce";
    })(ForceType = exports.ForceType || (exports.ForceType = {}));
  }
});

// ../../node_modules/fivem-js/lib/enums/Gender.js
var require_Gender = __commonJS({
  "../../node_modules/fivem-js/lib/enums/Gender.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Gender = void 0;
    var Gender;
    (function(Gender2) {
      Gender2[Gender2["Male"] = 0] = "Male";
      Gender2[Gender2["Female"] = 1] = "Female";
    })(Gender = exports.Gender || (exports.Gender = {}));
  }
});

// ../../node_modules/fivem-js/lib/enums/HelmetType.js
var require_HelmetType = __commonJS({
  "../../node_modules/fivem-js/lib/enums/HelmetType.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HelmetType = void 0;
    var HelmetType;
    (function(HelmetType2) {
      HelmetType2[HelmetType2["RegularMotorcycleHelmet"] = 4096] = "RegularMotorcycleHelmet";
      HelmetType2[HelmetType2["FiremanHelmet"] = 16384] = "FiremanHelmet";
      HelmetType2[HelmetType2["PilotHeadset"] = 32768] = "PilotHeadset";
    })(HelmetType = exports.HelmetType || (exports.HelmetType = {}));
  }
});

// ../../node_modules/fivem-js/lib/enums/HudColor.js
var require_HudColor = __commonJS({
  "../../node_modules/fivem-js/lib/enums/HudColor.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HudColor = void 0;
    var HudColor;
    (function(HudColor2) {
      HudColor2[HudColor2["NONE"] = -1] = "NONE";
      HudColor2[HudColor2["HUD_COLOUR_PURE_WHITE"] = 0] = "HUD_COLOUR_PURE_WHITE";
      HudColor2[HudColor2["HUD_COLOUR_WHITE"] = 1] = "HUD_COLOUR_WHITE";
      HudColor2[HudColor2["HUD_COLOUR_BLACK"] = 2] = "HUD_COLOUR_BLACK";
      HudColor2[HudColor2["HUD_COLOUR_GREY"] = 3] = "HUD_COLOUR_GREY";
      HudColor2[HudColor2["HUD_COLOUR_GREYLIGHT"] = 4] = "HUD_COLOUR_GREYLIGHT";
      HudColor2[HudColor2["HUD_COLOUR_GREYDARK"] = 5] = "HUD_COLOUR_GREYDARK";
      HudColor2[HudColor2["HUD_COLOUR_RED"] = 6] = "HUD_COLOUR_RED";
      HudColor2[HudColor2["HUD_COLOUR_REDLIGHT"] = 7] = "HUD_COLOUR_REDLIGHT";
      HudColor2[HudColor2["HUD_COLOUR_REDDARK"] = 8] = "HUD_COLOUR_REDDARK";
      HudColor2[HudColor2["HUD_COLOUR_BLUE"] = 9] = "HUD_COLOUR_BLUE";
      HudColor2[HudColor2["HUD_COLOUR_BLUELIGHT"] = 10] = "HUD_COLOUR_BLUELIGHT";
      HudColor2[HudColor2["HUD_COLOUR_BLUEDARK"] = 11] = "HUD_COLOUR_BLUEDARK";
      HudColor2[HudColor2["HUD_COLOUR_YELLOW"] = 12] = "HUD_COLOUR_YELLOW";
      HudColor2[HudColor2["HUD_COLOUR_YELLOWLIGHT"] = 13] = "HUD_COLOUR_YELLOWLIGHT";
      HudColor2[HudColor2["HUD_COLOUR_YELLOWDARK"] = 14] = "HUD_COLOUR_YELLOWDARK";
      HudColor2[HudColor2["HUD_COLOUR_ORANGE"] = 15] = "HUD_COLOUR_ORANGE";
      HudColor2[HudColor2["HUD_COLOUR_ORANGELIGHT"] = 16] = "HUD_COLOUR_ORANGELIGHT";
      HudColor2[HudColor2["HUD_COLOUR_ORANGEDARK"] = 17] = "HUD_COLOUR_ORANGEDARK";
      HudColor2[HudColor2["HUD_COLOUR_GREEN"] = 18] = "HUD_COLOUR_GREEN";
      HudColor2[HudColor2["HUD_COLOUR_GREENLIGHT"] = 19] = "HUD_COLOUR_GREENLIGHT";
      HudColor2[HudColor2["HUD_COLOUR_GREENDARK"] = 20] = "HUD_COLOUR_GREENDARK";
      HudColor2[HudColor2["HUD_COLOUR_PURPLE"] = 21] = "HUD_COLOUR_PURPLE";
      HudColor2[HudColor2["HUD_COLOUR_PURPLELIGHT"] = 22] = "HUD_COLOUR_PURPLELIGHT";
      HudColor2[HudColor2["HUD_COLOUR_PURPLEDARK"] = 23] = "HUD_COLOUR_PURPLEDARK";
      HudColor2[HudColor2["HUD_COLOUR_PINK"] = 24] = "HUD_COLOUR_PINK";
      HudColor2[HudColor2["HUD_COLOUR_RADAR_HEALTH"] = 25] = "HUD_COLOUR_RADAR_HEALTH";
      HudColor2[HudColor2["HUD_COLOUR_RADAR_ARMOUR"] = 26] = "HUD_COLOUR_RADAR_ARMOUR";
      HudColor2[HudColor2["HUD_COLOUR_RADAR_DAMAGE"] = 27] = "HUD_COLOUR_RADAR_DAMAGE";
      HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER1"] = 28] = "HUD_COLOUR_NET_PLAYER1";
      HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER2"] = 29] = "HUD_COLOUR_NET_PLAYER2";
      HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER3"] = 30] = "HUD_COLOUR_NET_PLAYER3";
      HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER4"] = 31] = "HUD_COLOUR_NET_PLAYER4";
      HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER5"] = 32] = "HUD_COLOUR_NET_PLAYER5";
      HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER6"] = 33] = "HUD_COLOUR_NET_PLAYER6";
      HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER7"] = 34] = "HUD_COLOUR_NET_PLAYER7";
      HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER8"] = 35] = "HUD_COLOUR_NET_PLAYER8";
      HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER9"] = 36] = "HUD_COLOUR_NET_PLAYER9";
      HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER10"] = 37] = "HUD_COLOUR_NET_PLAYER10";
      HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER11"] = 38] = "HUD_COLOUR_NET_PLAYER11";
      HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER12"] = 39] = "HUD_COLOUR_NET_PLAYER12";
      HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER13"] = 40] = "HUD_COLOUR_NET_PLAYER13";
      HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER14"] = 41] = "HUD_COLOUR_NET_PLAYER14";
      HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER15"] = 42] = "HUD_COLOUR_NET_PLAYER15";
      HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER16"] = 43] = "HUD_COLOUR_NET_PLAYER16";
      HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER17"] = 44] = "HUD_COLOUR_NET_PLAYER17";
      HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER18"] = 45] = "HUD_COLOUR_NET_PLAYER18";
      HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER19"] = 46] = "HUD_COLOUR_NET_PLAYER19";
      HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER20"] = 47] = "HUD_COLOUR_NET_PLAYER20";
      HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER21"] = 48] = "HUD_COLOUR_NET_PLAYER21";
      HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER22"] = 49] = "HUD_COLOUR_NET_PLAYER22";
      HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER23"] = 50] = "HUD_COLOUR_NET_PLAYER23";
      HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER24"] = 51] = "HUD_COLOUR_NET_PLAYER24";
      HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER25"] = 52] = "HUD_COLOUR_NET_PLAYER25";
      HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER26"] = 53] = "HUD_COLOUR_NET_PLAYER26";
      HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER27"] = 54] = "HUD_COLOUR_NET_PLAYER27";
      HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER28"] = 55] = "HUD_COLOUR_NET_PLAYER28";
      HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER29"] = 56] = "HUD_COLOUR_NET_PLAYER29";
      HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER30"] = 57] = "HUD_COLOUR_NET_PLAYER30";
      HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER31"] = 58] = "HUD_COLOUR_NET_PLAYER31";
      HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER32"] = 59] = "HUD_COLOUR_NET_PLAYER32";
      HudColor2[HudColor2["HUD_COLOUR_SIMPLEBLIP_DEFAULT"] = 60] = "HUD_COLOUR_SIMPLEBLIP_DEFAULT";
      HudColor2[HudColor2["HUD_COLOUR_MENU_BLUE"] = 61] = "HUD_COLOUR_MENU_BLUE";
      HudColor2[HudColor2["HUD_COLOUR_MENU_GREY_LIGHT"] = 62] = "HUD_COLOUR_MENU_GREY_LIGHT";
      HudColor2[HudColor2["HUD_COLOUR_MENU_BLUE_EXTRA_DARK"] = 63] = "HUD_COLOUR_MENU_BLUE_EXTRA_DARK";
      HudColor2[HudColor2["HUD_COLOUR_MENU_YELLOW"] = 64] = "HUD_COLOUR_MENU_YELLOW";
      HudColor2[HudColor2["HUD_COLOUR_MENU_YELLOW_DARK"] = 65] = "HUD_COLOUR_MENU_YELLOW_DARK";
      HudColor2[HudColor2["HUD_COLOUR_MENU_GREEN"] = 66] = "HUD_COLOUR_MENU_GREEN";
      HudColor2[HudColor2["HUD_COLOUR_MENU_GREY"] = 67] = "HUD_COLOUR_MENU_GREY";
      HudColor2[HudColor2["HUD_COLOUR_MENU_GREY_DARK"] = 68] = "HUD_COLOUR_MENU_GREY_DARK";
      HudColor2[HudColor2["HUD_COLOUR_MENU_HIGHLIGHT"] = 69] = "HUD_COLOUR_MENU_HIGHLIGHT";
      HudColor2[HudColor2["HUD_COLOUR_MENU_STANDARD"] = 70] = "HUD_COLOUR_MENU_STANDARD";
      HudColor2[HudColor2["HUD_COLOUR_MENU_DIMMED"] = 71] = "HUD_COLOUR_MENU_DIMMED";
      HudColor2[HudColor2["HUD_COLOUR_MENU_EXTRA_DIMMED"] = 72] = "HUD_COLOUR_MENU_EXTRA_DIMMED";
      HudColor2[HudColor2["HUD_COLOUR_BRIEF_TITLE"] = 73] = "HUD_COLOUR_BRIEF_TITLE";
      HudColor2[HudColor2["HUD_COLOUR_MID_GREY_MP"] = 74] = "HUD_COLOUR_MID_GREY_MP";
      HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER1_DARK"] = 75] = "HUD_COLOUR_NET_PLAYER1_DARK";
      HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER2_DARK"] = 76] = "HUD_COLOUR_NET_PLAYER2_DARK";
      HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER3_DARK"] = 77] = "HUD_COLOUR_NET_PLAYER3_DARK";
      HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER4_DARK"] = 78] = "HUD_COLOUR_NET_PLAYER4_DARK";
      HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER5_DARK"] = 79] = "HUD_COLOUR_NET_PLAYER5_DARK";
      HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER6_DARK"] = 80] = "HUD_COLOUR_NET_PLAYER6_DARK";
      HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER7_DARK"] = 81] = "HUD_COLOUR_NET_PLAYER7_DARK";
      HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER8_DARK"] = 82] = "HUD_COLOUR_NET_PLAYER8_DARK";
      HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER9_DARK"] = 83] = "HUD_COLOUR_NET_PLAYER9_DARK";
      HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER10_DARK"] = 84] = "HUD_COLOUR_NET_PLAYER10_DARK";
      HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER11_DARK"] = 85] = "HUD_COLOUR_NET_PLAYER11_DARK";
      HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER12_DARK"] = 86] = "HUD_COLOUR_NET_PLAYER12_DARK";
      HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER13_DARK"] = 87] = "HUD_COLOUR_NET_PLAYER13_DARK";
      HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER14_DARK"] = 88] = "HUD_COLOUR_NET_PLAYER14_DARK";
      HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER15_DARK"] = 89] = "HUD_COLOUR_NET_PLAYER15_DARK";
      HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER16_DARK"] = 90] = "HUD_COLOUR_NET_PLAYER16_DARK";
      HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER17_DARK"] = 91] = "HUD_COLOUR_NET_PLAYER17_DARK";
      HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER18_DARK"] = 92] = "HUD_COLOUR_NET_PLAYER18_DARK";
      HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER19_DARK"] = 93] = "HUD_COLOUR_NET_PLAYER19_DARK";
      HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER20_DARK"] = 94] = "HUD_COLOUR_NET_PLAYER20_DARK";
      HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER21_DARK"] = 95] = "HUD_COLOUR_NET_PLAYER21_DARK";
      HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER22_DARK"] = 96] = "HUD_COLOUR_NET_PLAYER22_DARK";
      HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER23_DARK"] = 97] = "HUD_COLOUR_NET_PLAYER23_DARK";
      HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER24_DARK"] = 98] = "HUD_COLOUR_NET_PLAYER24_DARK";
      HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER25_DARK"] = 99] = "HUD_COLOUR_NET_PLAYER25_DARK";
      HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER26_DARK"] = 100] = "HUD_COLOUR_NET_PLAYER26_DARK";
      HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER27_DARK"] = 101] = "HUD_COLOUR_NET_PLAYER27_DARK";
      HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER28_DARK"] = 102] = "HUD_COLOUR_NET_PLAYER28_DARK";
      HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER29_DARK"] = 103] = "HUD_COLOUR_NET_PLAYER29_DARK";
      HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER30_DARK"] = 104] = "HUD_COLOUR_NET_PLAYER30_DARK";
      HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER31_DARK"] = 105] = "HUD_COLOUR_NET_PLAYER31_DARK";
      HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER32_DARK"] = 106] = "HUD_COLOUR_NET_PLAYER32_DARK";
      HudColor2[HudColor2["HUD_COLOUR_BRONZE"] = 107] = "HUD_COLOUR_BRONZE";
      HudColor2[HudColor2["HUD_COLOUR_SILVER"] = 108] = "HUD_COLOUR_SILVER";
      HudColor2[HudColor2["HUD_COLOUR_GOLD"] = 109] = "HUD_COLOUR_GOLD";
      HudColor2[HudColor2["HUD_COLOUR_PLATINUM"] = 110] = "HUD_COLOUR_PLATINUM";
      HudColor2[HudColor2["HUD_COLOUR_GANG1"] = 111] = "HUD_COLOUR_GANG1";
      HudColor2[HudColor2["HUD_COLOUR_GANG2"] = 112] = "HUD_COLOUR_GANG2";
      HudColor2[HudColor2["HUD_COLOUR_GANG3"] = 113] = "HUD_COLOUR_GANG3";
      HudColor2[HudColor2["HUD_COLOUR_GANG4"] = 114] = "HUD_COLOUR_GANG4";
      HudColor2[HudColor2["HUD_COLOUR_SAME_CREW"] = 115] = "HUD_COLOUR_SAME_CREW";
      HudColor2[HudColor2["HUD_COLOUR_FREEMODE"] = 116] = "HUD_COLOUR_FREEMODE";
      HudColor2[HudColor2["HUD_COLOUR_PAUSE_BG"] = 117] = "HUD_COLOUR_PAUSE_BG";
      HudColor2[HudColor2["HUD_COLOUR_FRIENDLY"] = 118] = "HUD_COLOUR_FRIENDLY";
      HudColor2[HudColor2["HUD_COLOUR_ENEMY"] = 119] = "HUD_COLOUR_ENEMY";
      HudColor2[HudColor2["HUD_COLOUR_LOCATION"] = 120] = "HUD_COLOUR_LOCATION";
      HudColor2[HudColor2["HUD_COLOUR_PICKUP"] = 121] = "HUD_COLOUR_PICKUP";
      HudColor2[HudColor2["HUD_COLOUR_PAUSE_SINGLEPLAYER"] = 122] = "HUD_COLOUR_PAUSE_SINGLEPLAYER";
      HudColor2[HudColor2["HUD_COLOUR_FREEMODE_DARK"] = 123] = "HUD_COLOUR_FREEMODE_DARK";
      HudColor2[HudColor2["HUD_COLOUR_INACTIVE_MISSION"] = 124] = "HUD_COLOUR_INACTIVE_MISSION";
      HudColor2[HudColor2["HUD_COLOUR_DAMAGE"] = 125] = "HUD_COLOUR_DAMAGE";
      HudColor2[HudColor2["HUD_COLOUR_PINKLIGHT"] = 126] = "HUD_COLOUR_PINKLIGHT";
      HudColor2[HudColor2["HUD_COLOUR_PM_MITEM_HIGHLIGHT"] = 127] = "HUD_COLOUR_PM_MITEM_HIGHLIGHT";
      HudColor2[HudColor2["HUD_COLOUR_SCRIPT_VARIABLE"] = 128] = "HUD_COLOUR_SCRIPT_VARIABLE";
      HudColor2[HudColor2["HUD_COLOUR_YOGA"] = 129] = "HUD_COLOUR_YOGA";
      HudColor2[HudColor2["HUD_COLOUR_TENNIS"] = 130] = "HUD_COLOUR_TENNIS";
      HudColor2[HudColor2["HUD_COLOUR_GOLF"] = 131] = "HUD_COLOUR_GOLF";
      HudColor2[HudColor2["HUD_COLOUR_SHOOTING_RANGE"] = 132] = "HUD_COLOUR_SHOOTING_RANGE";
      HudColor2[HudColor2["HUD_COLOUR_FLIGHT_SCHOOL"] = 133] = "HUD_COLOUR_FLIGHT_SCHOOL";
      HudColor2[HudColor2["HUD_COLOUR_NORTH_BLUE"] = 134] = "HUD_COLOUR_NORTH_BLUE";
      HudColor2[HudColor2["HUD_COLOUR_SOCIAL_CLUB"] = 135] = "HUD_COLOUR_SOCIAL_CLUB";
      HudColor2[HudColor2["HUD_COLOUR_PLATFORM_BLUE"] = 136] = "HUD_COLOUR_PLATFORM_BLUE";
      HudColor2[HudColor2["HUD_COLOUR_PLATFORM_GREEN"] = 137] = "HUD_COLOUR_PLATFORM_GREEN";
      HudColor2[HudColor2["HUD_COLOUR_PLATFORM_GREY"] = 138] = "HUD_COLOUR_PLATFORM_GREY";
      HudColor2[HudColor2["HUD_COLOUR_FACEBOOK_BLUE"] = 139] = "HUD_COLOUR_FACEBOOK_BLUE";
      HudColor2[HudColor2["HUD_COLOUR_INGAME_BG"] = 140] = "HUD_COLOUR_INGAME_BG";
      HudColor2[HudColor2["HUD_COLOUR_DARTS"] = 141] = "HUD_COLOUR_DARTS";
      HudColor2[HudColor2["HUD_COLOUR_WAYPOINT"] = 142] = "HUD_COLOUR_WAYPOINT";
      HudColor2[HudColor2["HUD_COLOUR_MICHAEL"] = 143] = "HUD_COLOUR_MICHAEL";
      HudColor2[HudColor2["HUD_COLOUR_FRANKLIN"] = 144] = "HUD_COLOUR_FRANKLIN";
      HudColor2[HudColor2["HUD_COLOUR_TREVOR"] = 145] = "HUD_COLOUR_TREVOR";
      HudColor2[HudColor2["HUD_COLOUR_GOLF_P1"] = 146] = "HUD_COLOUR_GOLF_P1";
      HudColor2[HudColor2["HUD_COLOUR_GOLF_P2"] = 147] = "HUD_COLOUR_GOLF_P2";
      HudColor2[HudColor2["HUD_COLOUR_GOLF_P3"] = 148] = "HUD_COLOUR_GOLF_P3";
      HudColor2[HudColor2["HUD_COLOUR_GOLF_P4"] = 149] = "HUD_COLOUR_GOLF_P4";
      HudColor2[HudColor2["HUD_COLOUR_WAYPOINTLIGHT"] = 150] = "HUD_COLOUR_WAYPOINTLIGHT";
      HudColor2[HudColor2["HUD_COLOUR_WAYPOINTDARK"] = 151] = "HUD_COLOUR_WAYPOINTDARK";
      HudColor2[HudColor2["HUD_COLOUR_PANEL_LIGHT"] = 152] = "HUD_COLOUR_PANEL_LIGHT";
      HudColor2[HudColor2["HUD_COLOUR_MICHAEL_DARK"] = 153] = "HUD_COLOUR_MICHAEL_DARK";
      HudColor2[HudColor2["HUD_COLOUR_FRANKLIN_DARK"] = 154] = "HUD_COLOUR_FRANKLIN_DARK";
      HudColor2[HudColor2["HUD_COLOUR_TREVOR_DARK"] = 155] = "HUD_COLOUR_TREVOR_DARK";
      HudColor2[HudColor2["HUD_COLOUR_OBJECTIVE_ROUTE"] = 156] = "HUD_COLOUR_OBJECTIVE_ROUTE";
      HudColor2[HudColor2["HUD_COLOUR_PAUSEMAP_TINT"] = 157] = "HUD_COLOUR_PAUSEMAP_TINT";
      HudColor2[HudColor2["HUD_COLOUR_PAUSE_DESELECT"] = 158] = "HUD_COLOUR_PAUSE_DESELECT";
      HudColor2[HudColor2["HUD_COLOUR_PM_WEAPONS_PURCHASABLE"] = 159] = "HUD_COLOUR_PM_WEAPONS_PURCHASABLE";
      HudColor2[HudColor2["HUD_COLOUR_PM_WEAPONS_LOCKED"] = 160] = "HUD_COLOUR_PM_WEAPONS_LOCKED";
      HudColor2[HudColor2["HUD_COLOUR_END_SCREEN_BG"] = 161] = "HUD_COLOUR_END_SCREEN_BG";
      HudColor2[HudColor2["HUD_COLOUR_CHOP"] = 162] = "HUD_COLOUR_CHOP";
      HudColor2[HudColor2["HUD_COLOUR_PAUSEMAP_TINT_HALF"] = 163] = "HUD_COLOUR_PAUSEMAP_TINT_HALF";
      HudColor2[HudColor2["HUD_COLOUR_NORTH_BLUE_OFFICIAL"] = 164] = "HUD_COLOUR_NORTH_BLUE_OFFICIAL";
      HudColor2[HudColor2["HUD_COLOUR_SCRIPT_VARIABLE_2"] = 165] = "HUD_COLOUR_SCRIPT_VARIABLE_2";
      HudColor2[HudColor2["HUD_COLOUR_H"] = 166] = "HUD_COLOUR_H";
      HudColor2[HudColor2["HUD_COLOUR_HDARK"] = 167] = "HUD_COLOUR_HDARK";
      HudColor2[HudColor2["HUD_COLOUR_T"] = 168] = "HUD_COLOUR_T";
      HudColor2[HudColor2["HUD_COLOUR_TDARK"] = 169] = "HUD_COLOUR_TDARK";
      HudColor2[HudColor2["HUD_COLOUR_HSHARD"] = 170] = "HUD_COLOUR_HSHARD";
      HudColor2[HudColor2["HUD_COLOUR_CONTROLLER_MICHAEL"] = 171] = "HUD_COLOUR_CONTROLLER_MICHAEL";
      HudColor2[HudColor2["HUD_COLOUR_CONTROLLER_FRANKLIN"] = 172] = "HUD_COLOUR_CONTROLLER_FRANKLIN";
      HudColor2[HudColor2["HUD_COLOUR_CONTROLLER_TREVOR"] = 173] = "HUD_COLOUR_CONTROLLER_TREVOR";
      HudColor2[HudColor2["HUD_COLOUR_CONTROLLER_CHOP"] = 174] = "HUD_COLOUR_CONTROLLER_CHOP";
      HudColor2[HudColor2["HUD_COLOUR_VIDEO_EDITOR_VIDEO"] = 175] = "HUD_COLOUR_VIDEO_EDITOR_VIDEO";
      HudColor2[HudColor2["HUD_COLOUR_VIDEO_EDITOR_AUDIO"] = 176] = "HUD_COLOUR_VIDEO_EDITOR_AUDIO";
      HudColor2[HudColor2["HUD_COLOUR_VIDEO_EDITOR_TEXT"] = 177] = "HUD_COLOUR_VIDEO_EDITOR_TEXT";
      HudColor2[HudColor2["HUD_COLOUR_HB_BLUE"] = 178] = "HUD_COLOUR_HB_BLUE";
      HudColor2[HudColor2["HUD_COLOUR_HB_YELLOW"] = 179] = "HUD_COLOUR_HB_YELLOW";
    })(HudColor = exports.HudColor || (exports.HudColor = {}));
  }
});

// ../../node_modules/fivem-js/lib/enums/HudComponent.js
var require_HudComponent = __commonJS({
  "../../node_modules/fivem-js/lib/enums/HudComponent.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HudComponent = void 0;
    var HudComponent;
    (function(HudComponent2) {
      HudComponent2[HudComponent2["WantedStars"] = 1] = "WantedStars";
      HudComponent2[HudComponent2["WeaponIcon"] = 2] = "WeaponIcon";
      HudComponent2[HudComponent2["Cash"] = 3] = "Cash";
      HudComponent2[HudComponent2["MpCash"] = 4] = "MpCash";
      HudComponent2[HudComponent2["MpMessage"] = 5] = "MpMessage";
      HudComponent2[HudComponent2["VehicleName"] = 6] = "VehicleName";
      HudComponent2[HudComponent2["AreaName"] = 7] = "AreaName";
      HudComponent2[HudComponent2["Unused"] = 8] = "Unused";
      HudComponent2[HudComponent2["StreetName"] = 9] = "StreetName";
      HudComponent2[HudComponent2["HelpText"] = 10] = "HelpText";
      HudComponent2[HudComponent2["FloatingHelpText1"] = 11] = "FloatingHelpText1";
      HudComponent2[HudComponent2["FloatingHelpText2"] = 12] = "FloatingHelpText2";
      HudComponent2[HudComponent2["CashChange"] = 13] = "CashChange";
      HudComponent2[HudComponent2["Reticle"] = 14] = "Reticle";
      HudComponent2[HudComponent2["SubtitleText"] = 15] = "SubtitleText";
      HudComponent2[HudComponent2["RadioStationsWheel"] = 16] = "RadioStationsWheel";
      HudComponent2[HudComponent2["Saving"] = 17] = "Saving";
      HudComponent2[HudComponent2["GamingStreamUnusde"] = 18] = "GamingStreamUnusde";
      HudComponent2[HudComponent2["WeaponWheel"] = 19] = "WeaponWheel";
      HudComponent2[HudComponent2["WeaponWheelStats"] = 20] = "WeaponWheelStats";
      HudComponent2[HudComponent2["DrugsPurse01"] = 21] = "DrugsPurse01";
      HudComponent2[HudComponent2["DrugsPurse02"] = 22] = "DrugsPurse02";
      HudComponent2[HudComponent2["DrugsPurse03"] = 23] = "DrugsPurse03";
      HudComponent2[HudComponent2["DrugsPurse04"] = 24] = "DrugsPurse04";
      HudComponent2[HudComponent2["MpTagCashFromBank"] = 25] = "MpTagCashFromBank";
      HudComponent2[HudComponent2["MpTagPackages"] = 26] = "MpTagPackages";
      HudComponent2[HudComponent2["MpTagCuffKeys"] = 27] = "MpTagCuffKeys";
      HudComponent2[HudComponent2["MpTagDownloadData"] = 28] = "MpTagDownloadData";
      HudComponent2[HudComponent2["MpTagIfPedFollowing"] = 29] = "MpTagIfPedFollowing";
      HudComponent2[HudComponent2["MpTagKeyCard"] = 30] = "MpTagKeyCard";
      HudComponent2[HudComponent2["MpTagRandomObject"] = 31] = "MpTagRandomObject";
      HudComponent2[HudComponent2["MpTagRemoteControl"] = 32] = "MpTagRemoteControl";
      HudComponent2[HudComponent2["MpTagCashFromSafe"] = 33] = "MpTagCashFromSafe";
      HudComponent2[HudComponent2["MpTagWeaponsPackage"] = 34] = "MpTagWeaponsPackage";
      HudComponent2[HudComponent2["MpTagKeys"] = 35] = "MpTagKeys";
      HudComponent2[HudComponent2["MpVehicle"] = 36] = "MpVehicle";
      HudComponent2[HudComponent2["MpVehicleHeli"] = 37] = "MpVehicleHeli";
      HudComponent2[HudComponent2["MpVehiclePlane"] = 38] = "MpVehiclePlane";
      HudComponent2[HudComponent2["PlayerSwitchAlert"] = 39] = "PlayerSwitchAlert";
      HudComponent2[HudComponent2["MpRankBar"] = 40] = "MpRankBar";
      HudComponent2[HudComponent2["DirectorMode"] = 41] = "DirectorMode";
      HudComponent2[HudComponent2["ReplayController"] = 42] = "ReplayController";
      HudComponent2[HudComponent2["ReplayMouse"] = 43] = "ReplayMouse";
      HudComponent2[HudComponent2["ReplayHeader"] = 44] = "ReplayHeader";
      HudComponent2[HudComponent2["ReplayOptions"] = 45] = "ReplayOptions";
      HudComponent2[HudComponent2["ReplayHelpText"] = 46] = "ReplayHelpText";
      HudComponent2[HudComponent2["ReplayMiscText"] = 47] = "ReplayMiscText";
      HudComponent2[HudComponent2["ReplayTopLine"] = 48] = "ReplayTopLine";
      HudComponent2[HudComponent2["ReplayBottomLine"] = 49] = "ReplayBottomLine";
      HudComponent2[HudComponent2["ReplayLeftBar"] = 50] = "ReplayLeftBar";
      HudComponent2[HudComponent2["ReplayTimer"] = 51] = "ReplayTimer";
    })(HudComponent = exports.HudComponent || (exports.HudComponent = {}));
  }
});

// ../../node_modules/fivem-js/lib/enums/InputMode.js
var require_InputMode = __commonJS({
  "../../node_modules/fivem-js/lib/enums/InputMode.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.InputMode = void 0;
    var InputMode;
    (function(InputMode2) {
      InputMode2[InputMode2["MouseAndKeyboard"] = 0] = "MouseAndKeyboard";
      InputMode2[InputMode2["GamePad"] = 2] = "GamePad";
    })(InputMode = exports.InputMode || (exports.InputMode = {}));
  }
});

// ../../node_modules/fivem-js/lib/enums/IntersectOptions.js
var require_IntersectOptions = __commonJS({
  "../../node_modules/fivem-js/lib/enums/IntersectOptions.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.IntersectOptions = void 0;
    var IntersectOptions;
    (function(IntersectOptions2) {
      IntersectOptions2[IntersectOptions2["Everything"] = -1] = "Everything";
      IntersectOptions2[IntersectOptions2["Map"] = 1] = "Map";
      IntersectOptions2[IntersectOptions2["MissionEntities"] = 2] = "MissionEntities";
      IntersectOptions2[IntersectOptions2["Peds1"] = 12] = "Peds1";
      IntersectOptions2[IntersectOptions2["Objects"] = 16] = "Objects";
      IntersectOptions2[IntersectOptions2["Unk1"] = 32] = "Unk1";
      IntersectOptions2[IntersectOptions2["Unk2"] = 64] = "Unk2";
      IntersectOptions2[IntersectOptions2["Unk3"] = 128] = "Unk3";
      IntersectOptions2[IntersectOptions2["Vegetation"] = 256] = "Vegetation";
      IntersectOptions2[IntersectOptions2["Unk4"] = 512] = "Unk4";
    })(IntersectOptions = exports.IntersectOptions || (exports.IntersectOptions = {}));
  }
});

// ../../node_modules/fivem-js/lib/enums/InvertAxis.js
var require_InvertAxis = __commonJS({
  "../../node_modules/fivem-js/lib/enums/InvertAxis.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.InvertAxisFlags = void 0;
    var InvertAxisFlags;
    (function(InvertAxisFlags2) {
      InvertAxisFlags2[InvertAxisFlags2["None"] = 0] = "None";
      InvertAxisFlags2[InvertAxisFlags2["X"] = 1] = "X";
      InvertAxisFlags2[InvertAxisFlags2["Y"] = 2] = "Y";
      InvertAxisFlags2[InvertAxisFlags2["Z"] = 4] = "Z";
    })(InvertAxisFlags = exports.InvertAxisFlags || (exports.InvertAxisFlags = {}));
  }
});

// ../../node_modules/fivem-js/lib/enums/Language.js
var require_Language = __commonJS({
  "../../node_modules/fivem-js/lib/enums/Language.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Language = void 0;
    var Language;
    (function(Language2) {
      Language2[Language2["American"] = 0] = "American";
      Language2[Language2["French"] = 1] = "French";
      Language2[Language2["German"] = 2] = "German";
      Language2[Language2["Italian"] = 3] = "Italian";
      Language2[Language2["Spanish"] = 4] = "Spanish";
      Language2[Language2["Portuguese"] = 5] = "Portuguese";
      Language2[Language2["Polish"] = 6] = "Polish";
      Language2[Language2["Russian"] = 7] = "Russian";
      Language2[Language2["Korean"] = 8] = "Korean";
      Language2[Language2["Chinese"] = 9] = "Chinese";
      Language2[Language2["Japanese"] = 10] = "Japanese";
      Language2[Language2["Mexican"] = 11] = "Mexican";
    })(Language = exports.Language || (exports.Language = {}));
  }
});

// ../../node_modules/fivem-js/lib/enums/LoadingSpinnerType.js
var require_LoadingSpinnerType = __commonJS({
  "../../node_modules/fivem-js/lib/enums/LoadingSpinnerType.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LoadingSpinnerType = void 0;
    var LoadingSpinnerType;
    (function(LoadingSpinnerType2) {
      LoadingSpinnerType2[LoadingSpinnerType2["Clockwise1"] = 1] = "Clockwise1";
      LoadingSpinnerType2[LoadingSpinnerType2["Clockwise2"] = 2] = "Clockwise2";
      LoadingSpinnerType2[LoadingSpinnerType2["Clockwise3"] = 3] = "Clockwise3";
      LoadingSpinnerType2[LoadingSpinnerType2["SocialClubSaving"] = 4] = "SocialClubSaving";
      LoadingSpinnerType2[LoadingSpinnerType2["RegularClockwise"] = 5] = "RegularClockwise";
    })(LoadingSpinnerType = exports.LoadingSpinnerType || (exports.LoadingSpinnerType = {}));
  }
});

// ../../node_modules/fivem-js/lib/enums/MarkerType.js
var require_MarkerType = __commonJS({
  "../../node_modules/fivem-js/lib/enums/MarkerType.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MarkerType = void 0;
    var MarkerType;
    (function(MarkerType2) {
      MarkerType2[MarkerType2["UpsideDownCone"] = 0] = "UpsideDownCone";
      MarkerType2[MarkerType2["VerticalCylinder"] = 1] = "VerticalCylinder";
      MarkerType2[MarkerType2["ThickChevronUp"] = 2] = "ThickChevronUp";
      MarkerType2[MarkerType2["ThinChevronUp"] = 3] = "ThinChevronUp";
      MarkerType2[MarkerType2["CheckeredFlagRect"] = 4] = "CheckeredFlagRect";
      MarkerType2[MarkerType2["CheckeredFlagCircle"] = 5] = "CheckeredFlagCircle";
      MarkerType2[MarkerType2["VerticleCircle"] = 6] = "VerticleCircle";
      MarkerType2[MarkerType2["PlaneModel"] = 7] = "PlaneModel";
      MarkerType2[MarkerType2["LostMCDark"] = 8] = "LostMCDark";
      MarkerType2[MarkerType2["LostMCLight"] = 9] = "LostMCLight";
      MarkerType2[MarkerType2["Number0"] = 10] = "Number0";
      MarkerType2[MarkerType2["Number1"] = 11] = "Number1";
      MarkerType2[MarkerType2["Number2"] = 12] = "Number2";
      MarkerType2[MarkerType2["Number3"] = 13] = "Number3";
      MarkerType2[MarkerType2["Number4"] = 14] = "Number4";
      MarkerType2[MarkerType2["Number5"] = 15] = "Number5";
      MarkerType2[MarkerType2["Number6"] = 16] = "Number6";
      MarkerType2[MarkerType2["Number7"] = 17] = "Number7";
      MarkerType2[MarkerType2["Number8"] = 18] = "Number8";
      MarkerType2[MarkerType2["Number9"] = 19] = "Number9";
      MarkerType2[MarkerType2["ChevronUpx1"] = 20] = "ChevronUpx1";
      MarkerType2[MarkerType2["ChevronUpx2"] = 21] = "ChevronUpx2";
      MarkerType2[MarkerType2["ChevronUpx3"] = 22] = "ChevronUpx3";
      MarkerType2[MarkerType2["HorizontalCircleFat"] = 23] = "HorizontalCircleFat";
      MarkerType2[MarkerType2["ReplayIcon"] = 24] = "ReplayIcon";
      MarkerType2[MarkerType2["HorizontalCircleSkinny"] = 25] = "HorizontalCircleSkinny";
      MarkerType2[MarkerType2["HorizontalCircleSkinnyArrow"] = 26] = "HorizontalCircleSkinnyArrow";
      MarkerType2[MarkerType2["HorizontalSplitArrowCircle"] = 27] = "HorizontalSplitArrowCircle";
      MarkerType2[MarkerType2["DebugSphere"] = 28] = "DebugSphere";
      MarkerType2[MarkerType2["DollarSign"] = 29] = "DollarSign";
      MarkerType2[MarkerType2["HorizontalBars"] = 30] = "HorizontalBars";
      MarkerType2[MarkerType2["WolfHead"] = 31] = "WolfHead";
      MarkerType2[MarkerType2["QuestionMark"] = 32] = "QuestionMark";
      MarkerType2[MarkerType2["PlaneSymbol"] = 33] = "PlaneSymbol";
      MarkerType2[MarkerType2["HelicopterSymbol"] = 34] = "HelicopterSymbol";
      MarkerType2[MarkerType2["BoatSymbol"] = 35] = "BoatSymbol";
      MarkerType2[MarkerType2["CarSymbol"] = 36] = "CarSymbol";
      MarkerType2[MarkerType2["MotorcycleSymbol"] = 37] = "MotorcycleSymbol";
      MarkerType2[MarkerType2["BikeSymbol"] = 38] = "BikeSymbol";
      MarkerType2[MarkerType2["TruckSymbol"] = 39] = "TruckSymbol";
      MarkerType2[MarkerType2["ParachuteSymbol"] = 40] = "ParachuteSymbol";
      MarkerType2[MarkerType2["SawbladeSymbol"] = 41] = "SawbladeSymbol";
    })(MarkerType = exports.MarkerType || (exports.MarkerType = {}));
  }
});

// ../../node_modules/fivem-js/lib/enums/NotificationType.js
var require_NotificationType = __commonJS({
  "../../node_modules/fivem-js/lib/enums/NotificationType.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.NotificationType = void 0;
    var NotificationType;
    (function(NotificationType2) {
      NotificationType2[NotificationType2["Default"] = 0] = "Default";
      NotificationType2[NotificationType2["Bubble"] = 1] = "Bubble";
      NotificationType2[NotificationType2["Mail"] = 2] = "Mail";
      NotificationType2[NotificationType2["FriendRequest"] = 3] = "FriendRequest";
      NotificationType2[NotificationType2["Default2"] = 4] = "Default2";
      NotificationType2[NotificationType2["Reply"] = 7] = "Reply";
      NotificationType2[NotificationType2["ReputationPoints"] = 8] = "ReputationPoints";
      NotificationType2[NotificationType2["Money"] = 9] = "Money";
    })(NotificationType = exports.NotificationType || (exports.NotificationType = {}));
  }
});

// ../../node_modules/fivem-js/lib/enums/Parachute.js
var require_Parachute = __commonJS({
  "../../node_modules/fivem-js/lib/enums/Parachute.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ParachuteState = exports.ParachuteLandingType = void 0;
    var ParachuteLandingType;
    (function(ParachuteLandingType2) {
      ParachuteLandingType2[ParachuteLandingType2["None"] = -1] = "None";
      ParachuteLandingType2[ParachuteLandingType2["Stumbling"] = 1] = "Stumbling";
      ParachuteLandingType2[ParachuteLandingType2["Rolling"] = 2] = "Rolling";
      ParachuteLandingType2[ParachuteLandingType2["Ragdoll"] = 3] = "Ragdoll";
    })(ParachuteLandingType = exports.ParachuteLandingType || (exports.ParachuteLandingType = {}));
    var ParachuteState;
    (function(ParachuteState2) {
      ParachuteState2[ParachuteState2["None"] = -1] = "None";
      ParachuteState2[ParachuteState2["FreeFalling"] = 0] = "FreeFalling";
      ParachuteState2[ParachuteState2["Deploying"] = 1] = "Deploying";
      ParachuteState2[ParachuteState2["Gliding"] = 2] = "Gliding";
      ParachuteState2[ParachuteState2["LandingOrFallingToDoom"] = 3] = "LandingOrFallingToDoom";
    })(ParachuteState = exports.ParachuteState || (exports.ParachuteState = {}));
  }
});

// ../../node_modules/fivem-js/lib/enums/RadioStation.js
var require_RadioStation = __commonJS({
  "../../node_modules/fivem-js/lib/enums/RadioStation.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RadioStation = void 0;
    var RadioStation;
    (function(RadioStation2) {
      RadioStation2["LosSantosRockRadio"] = "RADIO_01_CLASS_ROCK";
      RadioStation2["NonStopPopFM"] = "RADIO_02_POP";
      RadioStation2["RadioLosSantos"] = "RADIO_03_HIPHOP_NEW";
      RadioStation2["ChannelX"] = "RADIO_04_PUNK";
      RadioStation2["WestCoastTalkRadio"] = "RADIO_05_TALK_01";
      RadioStation2["RebelRadio"] = "RADIO_06_COUNTRY";
      RadioStation2["SoulwaxFM"] = "RADIO_07_DANCE_01";
      RadioStation2["EastLosFM"] = "RADIO_08_MEXICAN";
      RadioStation2["WestCoastClassics"] = "RADIO_09_HIPHOP_OLD";
      RadioStation2["BlaineCountyRadio"] = "RADIO_11_TALK_02";
      RadioStation2["TheBlueArk"] = "RADIO_12_REGGAE";
      RadioStation2["WorldWideFM"] = "RADIO_13_JAZZ";
      RadioStation2["FlyloFM"] = "RADIO_14_DANCE_02";
      RadioStation2["TheLowdown"] = "RADIO_15_MOTOWN";
      RadioStation2["RadioMirrorPark"] = "RADIO_16_SILVERLAKE";
      RadioStation2["Space"] = "RADIO_17_FUNK";
      RadioStation2["VinewoodBoulevardRadio"] = "RADIO_18_90S_ROCK";
      RadioStation2["SelfRadio"] = "RADIO_19_USER";
      RadioStation2["TheLab"] = "RADIO_20_THELAB";
      RadioStation2["BlondedLosSantos"] = "RADIO_21_DLC_XM17";
      RadioStation2["LosSantosUndergroundRadio"] = "RADIO_22_DLC_BATTLE_MIX1_RADIO";
      RadioStation2["RadioOff"] = "OFF";
    })(RadioStation = exports.RadioStation || (exports.RadioStation = {}));
  }
});

// ../../node_modules/fivem-js/lib/enums/RagdollType.js
var require_RagdollType = __commonJS({
  "../../node_modules/fivem-js/lib/enums/RagdollType.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RagdollType = void 0;
    var RagdollType;
    (function(RagdollType2) {
      RagdollType2[RagdollType2["Normal"] = 0] = "Normal";
      RagdollType2[RagdollType2["StiffLegs"] = 1] = "StiffLegs";
      RagdollType2[RagdollType2["NarrowLegs"] = 2] = "NarrowLegs";
      RagdollType2[RagdollType2["WideLegs"] = 3] = "WideLegs";
    })(RagdollType = exports.RagdollType || (exports.RagdollType = {}));
  }
});

// ../../node_modules/fivem-js/lib/enums/Relationship.js
var require_Relationship = __commonJS({
  "../../node_modules/fivem-js/lib/enums/Relationship.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Relationship = void 0;
    var Relationship;
    (function(Relationship2) {
      Relationship2[Relationship2["Hate"] = 5] = "Hate";
      Relationship2[Relationship2["Dislike"] = 4] = "Dislike";
      Relationship2[Relationship2["Neutral"] = 3] = "Neutral";
      Relationship2[Relationship2["Like"] = 2] = "Like";
      Relationship2[Relationship2["Respect"] = 1] = "Respect";
      Relationship2[Relationship2["Companion"] = 0] = "Companion";
      Relationship2[Relationship2["Pedestrians"] = 255] = "Pedestrians";
    })(Relationship = exports.Relationship || (exports.Relationship = {}));
  }
});

// ../../node_modules/fivem-js/lib/enums/RopeType.js
var require_RopeType = __commonJS({
  "../../node_modules/fivem-js/lib/enums/RopeType.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RopeType = void 0;
    var RopeType;
    (function(RopeType2) {
      RopeType2[RopeType2["ThickRope"] = 4] = "ThickRope";
      RopeType2[RopeType2["ThinMetalWire"] = 5] = "ThinMetalWire";
    })(RopeType = exports.RopeType || (exports.RopeType = {}));
  }
});

// ../../node_modules/fivem-js/lib/enums/ScreenEffect.js
var require_ScreenEffect = __commonJS({
  "../../node_modules/fivem-js/lib/enums/ScreenEffect.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ScreenEffect = void 0;
    var ScreenEffect;
    (function(ScreenEffect2) {
      ScreenEffect2[ScreenEffect2["SwitchHudIn"] = 0] = "SwitchHudIn";
      ScreenEffect2[ScreenEffect2["SwitchHudOut"] = 1] = "SwitchHudOut";
      ScreenEffect2[ScreenEffect2["FocusIn"] = 2] = "FocusIn";
      ScreenEffect2[ScreenEffect2["FocusOut"] = 3] = "FocusOut";
      ScreenEffect2[ScreenEffect2["MinigameEndNeutral"] = 4] = "MinigameEndNeutral";
      ScreenEffect2[ScreenEffect2["MinigameEndTrevor"] = 5] = "MinigameEndTrevor";
      ScreenEffect2[ScreenEffect2["MinigameEndFranklin"] = 6] = "MinigameEndFranklin";
      ScreenEffect2[ScreenEffect2["MinigameEndMichael"] = 7] = "MinigameEndMichael";
      ScreenEffect2[ScreenEffect2["MinigameTransitionOut"] = 8] = "MinigameTransitionOut";
      ScreenEffect2[ScreenEffect2["MinigameTransitionIn"] = 9] = "MinigameTransitionIn";
      ScreenEffect2[ScreenEffect2["SwitchShortNeutralIn"] = 10] = "SwitchShortNeutralIn";
      ScreenEffect2[ScreenEffect2["SwitchShortFranklinIn"] = 11] = "SwitchShortFranklinIn";
      ScreenEffect2[ScreenEffect2["SwitchShortTrevorIn"] = 12] = "SwitchShortTrevorIn";
      ScreenEffect2[ScreenEffect2["SwitchShortMichaelIn"] = 13] = "SwitchShortMichaelIn";
      ScreenEffect2[ScreenEffect2["SwitchOpenMichaelIn"] = 14] = "SwitchOpenMichaelIn";
      ScreenEffect2[ScreenEffect2["SwitchOpenFranklinIn"] = 15] = "SwitchOpenFranklinIn";
      ScreenEffect2[ScreenEffect2["SwitchOpenTrevorIn"] = 16] = "SwitchOpenTrevorIn";
      ScreenEffect2[ScreenEffect2["SwitchHudMichaelOut"] = 17] = "SwitchHudMichaelOut";
      ScreenEffect2[ScreenEffect2["SwitchHudFranklinOut"] = 18] = "SwitchHudFranklinOut";
      ScreenEffect2[ScreenEffect2["SwitchHudTrevorOut"] = 19] = "SwitchHudTrevorOut";
      ScreenEffect2[ScreenEffect2["SwitchShortFranklinMid"] = 20] = "SwitchShortFranklinMid";
      ScreenEffect2[ScreenEffect2["SwitchShortMichaelMid"] = 21] = "SwitchShortMichaelMid";
      ScreenEffect2[ScreenEffect2["SwitchShortTrevorMid"] = 22] = "SwitchShortTrevorMid";
      ScreenEffect2[ScreenEffect2["DeathFailOut"] = 23] = "DeathFailOut";
      ScreenEffect2[ScreenEffect2["CamPushInNeutral"] = 24] = "CamPushInNeutral";
      ScreenEffect2[ScreenEffect2["CamPushInFranklin"] = 25] = "CamPushInFranklin";
      ScreenEffect2[ScreenEffect2["CamPushInMichael"] = 26] = "CamPushInMichael";
      ScreenEffect2[ScreenEffect2["CamPushInTrevor"] = 27] = "CamPushInTrevor";
      ScreenEffect2[ScreenEffect2["SwitchSceneFranklin"] = 28] = "SwitchSceneFranklin";
      ScreenEffect2[ScreenEffect2["SwitchSceneTrevor"] = 29] = "SwitchSceneTrevor";
      ScreenEffect2[ScreenEffect2["SwitchSceneMichael"] = 30] = "SwitchSceneMichael";
      ScreenEffect2[ScreenEffect2["SwitchSceneNeutral"] = 31] = "SwitchSceneNeutral";
      ScreenEffect2[ScreenEffect2["MpCelebWin"] = 32] = "MpCelebWin";
      ScreenEffect2[ScreenEffect2["MpCelebWinOut"] = 33] = "MpCelebWinOut";
      ScreenEffect2[ScreenEffect2["MpCelebLose"] = 34] = "MpCelebLose";
      ScreenEffect2[ScreenEffect2["MpCelebLoseOut"] = 35] = "MpCelebLoseOut";
      ScreenEffect2[ScreenEffect2["DeathFailNeutralIn"] = 36] = "DeathFailNeutralIn";
      ScreenEffect2[ScreenEffect2["DeathFailMpDark"] = 37] = "DeathFailMpDark";
      ScreenEffect2[ScreenEffect2["DeathFailMpIn"] = 38] = "DeathFailMpIn";
      ScreenEffect2[ScreenEffect2["MpCelebPreloadFade"] = 39] = "MpCelebPreloadFade";
      ScreenEffect2[ScreenEffect2["PeyoteEndOut"] = 40] = "PeyoteEndOut";
      ScreenEffect2[ScreenEffect2["PeyoteEndIn"] = 41] = "PeyoteEndIn";
      ScreenEffect2[ScreenEffect2["PeyoteIn"] = 42] = "PeyoteIn";
      ScreenEffect2[ScreenEffect2["PeyoteOut"] = 43] = "PeyoteOut";
      ScreenEffect2[ScreenEffect2["MpRaceCrash"] = 44] = "MpRaceCrash";
      ScreenEffect2[ScreenEffect2["SuccessFranklin"] = 45] = "SuccessFranklin";
      ScreenEffect2[ScreenEffect2["SuccessTrevor"] = 46] = "SuccessTrevor";
      ScreenEffect2[ScreenEffect2["SuccessMichael"] = 47] = "SuccessMichael";
      ScreenEffect2[ScreenEffect2["DrugsMichaelAliensFightIn"] = 48] = "DrugsMichaelAliensFightIn";
      ScreenEffect2[ScreenEffect2["DrugsMichaelAliensFight"] = 49] = "DrugsMichaelAliensFight";
      ScreenEffect2[ScreenEffect2["DrugsMichaelAliensFightOut"] = 50] = "DrugsMichaelAliensFightOut";
      ScreenEffect2[ScreenEffect2["DrugsTrevorClownsFightIn"] = 51] = "DrugsTrevorClownsFightIn";
      ScreenEffect2[ScreenEffect2["DrugsTrevorClownsFight"] = 52] = "DrugsTrevorClownsFight";
      ScreenEffect2[ScreenEffect2["DrugsTrevorClownsFightOut"] = 53] = "DrugsTrevorClownsFightOut";
      ScreenEffect2[ScreenEffect2["HeistCelebPass"] = 54] = "HeistCelebPass";
      ScreenEffect2[ScreenEffect2["HeistCelebPassBw"] = 55] = "HeistCelebPassBw";
      ScreenEffect2[ScreenEffect2["HeistCelebEnd"] = 56] = "HeistCelebEnd";
      ScreenEffect2[ScreenEffect2["HeistCelebToast"] = 57] = "HeistCelebToast";
      ScreenEffect2[ScreenEffect2["MenuMgHeistIn"] = 58] = "MenuMgHeistIn";
      ScreenEffect2[ScreenEffect2["MenuMgTournamentIn"] = 59] = "MenuMgTournamentIn";
      ScreenEffect2[ScreenEffect2["MenuMgSelectionIn"] = 60] = "MenuMgSelectionIn";
      ScreenEffect2[ScreenEffect2["ChopVision"] = 61] = "ChopVision";
      ScreenEffect2[ScreenEffect2["DmtFlightIntro"] = 62] = "DmtFlightIntro";
      ScreenEffect2[ScreenEffect2["DmtFlight"] = 63] = "DmtFlight";
      ScreenEffect2[ScreenEffect2["DrugsDrivingIn"] = 64] = "DrugsDrivingIn";
      ScreenEffect2[ScreenEffect2["DrugsDrivingOut"] = 65] = "DrugsDrivingOut";
      ScreenEffect2[ScreenEffect2["SwitchOpenNeutralFib5"] = 66] = "SwitchOpenNeutralFib5";
      ScreenEffect2[ScreenEffect2["HeistLocate"] = 67] = "HeistLocate";
      ScreenEffect2[ScreenEffect2["MpJobLoad"] = 68] = "MpJobLoad";
      ScreenEffect2[ScreenEffect2["RaceTurbo"] = 69] = "RaceTurbo";
      ScreenEffect2[ScreenEffect2["MpIntroLogo"] = 70] = "MpIntroLogo";
      ScreenEffect2[ScreenEffect2["HeistTripSkipFade"] = 71] = "HeistTripSkipFade";
      ScreenEffect2[ScreenEffect2["MenuMgHeistOut"] = 72] = "MenuMgHeistOut";
      ScreenEffect2[ScreenEffect2["MpCoronaSwitch"] = 73] = "MpCoronaSwitch";
      ScreenEffect2[ScreenEffect2["MenuMgSelectionTint"] = 74] = "MenuMgSelectionTint";
      ScreenEffect2[ScreenEffect2["SuccessNeutral"] = 75] = "SuccessNeutral";
      ScreenEffect2[ScreenEffect2["ExplosionJosh3"] = 76] = "ExplosionJosh3";
      ScreenEffect2[ScreenEffect2["SniperOverlay"] = 77] = "SniperOverlay";
      ScreenEffect2[ScreenEffect2["RampageOut"] = 78] = "RampageOut";
      ScreenEffect2[ScreenEffect2["Rampage"] = 79] = "Rampage";
      ScreenEffect2[ScreenEffect2["DontTazemeBro"] = 80] = "DontTazemeBro";
    })(ScreenEffect = exports.ScreenEffect || (exports.ScreenEffect = {}));
  }
});

// ../../node_modules/fivem-js/lib/enums/SpeechModifier.js
var require_SpeechModifier = __commonJS({
  "../../node_modules/fivem-js/lib/enums/SpeechModifier.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SpeechModifier = void 0;
    var SpeechModifier;
    (function(SpeechModifier2) {
      SpeechModifier2[SpeechModifier2["Standard"] = 0] = "Standard";
      SpeechModifier2[SpeechModifier2["AllowRepeat"] = 1] = "AllowRepeat";
      SpeechModifier2[SpeechModifier2["Beat"] = 2] = "Beat";
      SpeechModifier2[SpeechModifier2["Force"] = 3] = "Force";
      SpeechModifier2[SpeechModifier2["ForceFrontend"] = 4] = "ForceFrontend";
      SpeechModifier2[SpeechModifier2["ForceNoRepeatFrontend"] = 5] = "ForceNoRepeatFrontend";
      SpeechModifier2[SpeechModifier2["ForceNormal"] = 6] = "ForceNormal";
      SpeechModifier2[SpeechModifier2["ForceNormalClear"] = 7] = "ForceNormalClear";
      SpeechModifier2[SpeechModifier2["ForceNormalCritical"] = 8] = "ForceNormalCritical";
      SpeechModifier2[SpeechModifier2["ForceShouted"] = 9] = "ForceShouted";
      SpeechModifier2[SpeechModifier2["ForceShoutedClear"] = 10] = "ForceShoutedClear";
      SpeechModifier2[SpeechModifier2["ForceShoutedCritical"] = 11] = "ForceShoutedCritical";
      SpeechModifier2[SpeechModifier2["ForcePreloadOnly"] = 12] = "ForcePreloadOnly";
      SpeechModifier2[SpeechModifier2["Megaphone"] = 13] = "Megaphone";
      SpeechModifier2[SpeechModifier2["Helicopter"] = 14] = "Helicopter";
      SpeechModifier2[SpeechModifier2["ForceMegaphone"] = 15] = "ForceMegaphone";
      SpeechModifier2[SpeechModifier2["ForceHelicopter"] = 16] = "ForceHelicopter";
      SpeechModifier2[SpeechModifier2["Interrupt"] = 17] = "Interrupt";
      SpeechModifier2[SpeechModifier2["InterruptShouted"] = 18] = "InterruptShouted";
      SpeechModifier2[SpeechModifier2["InterruptShoutedClear"] = 19] = "InterruptShoutedClear";
      SpeechModifier2[SpeechModifier2["InterruptShoutedCritical"] = 20] = "InterruptShoutedCritical";
      SpeechModifier2[SpeechModifier2["InterruptNoForce"] = 21] = "InterruptNoForce";
      SpeechModifier2[SpeechModifier2["InterruptFrontend"] = 22] = "InterruptFrontend";
      SpeechModifier2[SpeechModifier2["InterruptNoForceFrontend"] = 23] = "InterruptNoForceFrontend";
      SpeechModifier2[SpeechModifier2["AddBlip"] = 24] = "AddBlip";
      SpeechModifier2[SpeechModifier2["AddBlipAllowRepeat"] = 25] = "AddBlipAllowRepeat";
      SpeechModifier2[SpeechModifier2["AddBlipForce"] = 26] = "AddBlipForce";
      SpeechModifier2[SpeechModifier2["AddBlipShouted"] = 27] = "AddBlipShouted";
      SpeechModifier2[SpeechModifier2["AddBlipShoutedForce"] = 28] = "AddBlipShoutedForce";
      SpeechModifier2[SpeechModifier2["AddBlipInterrupt"] = 29] = "AddBlipInterrupt";
      SpeechModifier2[SpeechModifier2["AddBlipInterruptForce"] = 30] = "AddBlipInterruptForce";
      SpeechModifier2[SpeechModifier2["ForcePreloadOnlyShouted"] = 31] = "ForcePreloadOnlyShouted";
      SpeechModifier2[SpeechModifier2["ForcePreloadOnlyShoutedClear"] = 32] = "ForcePreloadOnlyShoutedClear";
      SpeechModifier2[SpeechModifier2["ForcePreloadOnlyShoutedCritical"] = 33] = "ForcePreloadOnlyShoutedCritical";
      SpeechModifier2[SpeechModifier2["Shouted"] = 34] = "Shouted";
      SpeechModifier2[SpeechModifier2["ShoutedClear"] = 35] = "ShoutedClear";
      SpeechModifier2[SpeechModifier2["ShoutedCritical"] = 36] = "ShoutedCritical";
    })(SpeechModifier = exports.SpeechModifier || (exports.SpeechModifier = {}));
  }
});

// ../../node_modules/fivem-js/lib/enums/Vehicle.js
var require_Vehicle = __commonJS({
  "../../node_modules/fivem-js/lib/enums/Vehicle.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.VehicleWheelIndex = exports.VehicleWheelType = exports.VehicleDoorIndex = exports.VehiclePaintType = exports.VehicleToggleModType = exports.VehicleModType = exports.VehicleWindowIndex = exports.VehicleWindowTint = exports.VehicleSeat = exports.VehicleRoofState = exports.VehicleNeonLight = exports.VehicleLockStatus = exports.VehicleLandingGearState = exports.VehicleColor = exports.VehicleClass = exports.LicensePlateType = exports.LicensePlateStyle = exports.CargobobHook = void 0;
    var CargobobHook;
    (function(CargobobHook2) {
      CargobobHook2[CargobobHook2["Hook"] = 0] = "Hook";
      CargobobHook2[CargobobHook2["Magnet"] = 1] = "Magnet";
    })(CargobobHook = exports.CargobobHook || (exports.CargobobHook = {}));
    var LicensePlateStyle;
    (function(LicensePlateStyle2) {
      LicensePlateStyle2[LicensePlateStyle2["BlueOnWhite1"] = 3] = "BlueOnWhite1";
      LicensePlateStyle2[LicensePlateStyle2["BlueOnWhite2"] = 0] = "BlueOnWhite2";
      LicensePlateStyle2[LicensePlateStyle2["BlueOnWhite3"] = 4] = "BlueOnWhite3";
      LicensePlateStyle2[LicensePlateStyle2["YellowOnBlack"] = 1] = "YellowOnBlack";
      LicensePlateStyle2[LicensePlateStyle2["YellowOnBlue"] = 2] = "YellowOnBlue";
      LicensePlateStyle2[LicensePlateStyle2["NorthYankton"] = 5] = "NorthYankton";
    })(LicensePlateStyle = exports.LicensePlateStyle || (exports.LicensePlateStyle = {}));
    var LicensePlateType;
    (function(LicensePlateType2) {
      LicensePlateType2[LicensePlateType2["FrontAndRearPlates"] = 0] = "FrontAndRearPlates";
      LicensePlateType2[LicensePlateType2["FrontPlate"] = 1] = "FrontPlate";
      LicensePlateType2[LicensePlateType2["RearPlate"] = 2] = "RearPlate";
      LicensePlateType2[LicensePlateType2["None"] = 3] = "None";
    })(LicensePlateType = exports.LicensePlateType || (exports.LicensePlateType = {}));
    var VehicleClass;
    (function(VehicleClass2) {
      VehicleClass2[VehicleClass2["Compacts"] = 0] = "Compacts";
      VehicleClass2[VehicleClass2["Sedans"] = 1] = "Sedans";
      VehicleClass2[VehicleClass2["SUVs"] = 2] = "SUVs";
      VehicleClass2[VehicleClass2["Coupes"] = 3] = "Coupes";
      VehicleClass2[VehicleClass2["Muscle"] = 4] = "Muscle";
      VehicleClass2[VehicleClass2["SportsClassics"] = 5] = "SportsClassics";
      VehicleClass2[VehicleClass2["Sports"] = 6] = "Sports";
      VehicleClass2[VehicleClass2["Super"] = 7] = "Super";
      VehicleClass2[VehicleClass2["Motorcycles"] = 8] = "Motorcycles";
      VehicleClass2[VehicleClass2["OffRoad"] = 9] = "OffRoad";
      VehicleClass2[VehicleClass2["Industrial"] = 10] = "Industrial";
      VehicleClass2[VehicleClass2["Utility"] = 11] = "Utility";
      VehicleClass2[VehicleClass2["Vans"] = 12] = "Vans";
      VehicleClass2[VehicleClass2["Cycles"] = 13] = "Cycles";
      VehicleClass2[VehicleClass2["Boats"] = 14] = "Boats";
      VehicleClass2[VehicleClass2["Helicopters"] = 15] = "Helicopters";
      VehicleClass2[VehicleClass2["Planes"] = 16] = "Planes";
      VehicleClass2[VehicleClass2["Service"] = 17] = "Service";
      VehicleClass2[VehicleClass2["Emergency"] = 18] = "Emergency";
      VehicleClass2[VehicleClass2["Military"] = 19] = "Military";
      VehicleClass2[VehicleClass2["Commercial"] = 20] = "Commercial";
      VehicleClass2[VehicleClass2["Trains"] = 21] = "Trains";
    })(VehicleClass = exports.VehicleClass || (exports.VehicleClass = {}));
    var VehicleColor;
    (function(VehicleColor2) {
      VehicleColor2[VehicleColor2["MetallicBlack"] = 0] = "MetallicBlack";
      VehicleColor2[VehicleColor2["MetallicGraphiteBlack"] = 1] = "MetallicGraphiteBlack";
      VehicleColor2[VehicleColor2["MetallicBlackSteel"] = 2] = "MetallicBlackSteel";
      VehicleColor2[VehicleColor2["MetallicDarkSilver"] = 3] = "MetallicDarkSilver";
      VehicleColor2[VehicleColor2["MetallicSilver"] = 4] = "MetallicSilver";
      VehicleColor2[VehicleColor2["MetallicBlueSilver"] = 5] = "MetallicBlueSilver";
      VehicleColor2[VehicleColor2["MetallicSteelGray"] = 6] = "MetallicSteelGray";
      VehicleColor2[VehicleColor2["MetallicShadowSilver"] = 7] = "MetallicShadowSilver";
      VehicleColor2[VehicleColor2["MetallicStoneSilver"] = 8] = "MetallicStoneSilver";
      VehicleColor2[VehicleColor2["MetallicMidnightSilver"] = 9] = "MetallicMidnightSilver";
      VehicleColor2[VehicleColor2["MetallicGunMetal"] = 10] = "MetallicGunMetal";
      VehicleColor2[VehicleColor2["MetallicAnthraciteGray"] = 11] = "MetallicAnthraciteGray";
      VehicleColor2[VehicleColor2["MatteBlack"] = 12] = "MatteBlack";
      VehicleColor2[VehicleColor2["MatteGray"] = 13] = "MatteGray";
      VehicleColor2[VehicleColor2["MatteLightGray"] = 14] = "MatteLightGray";
      VehicleColor2[VehicleColor2["UtilBlack"] = 15] = "UtilBlack";
      VehicleColor2[VehicleColor2["UtilBlackPoly"] = 16] = "UtilBlackPoly";
      VehicleColor2[VehicleColor2["UtilDarksilver"] = 17] = "UtilDarksilver";
      VehicleColor2[VehicleColor2["UtilSilver"] = 18] = "UtilSilver";
      VehicleColor2[VehicleColor2["UtilGunMetal"] = 19] = "UtilGunMetal";
      VehicleColor2[VehicleColor2["UtilShadowSilver"] = 20] = "UtilShadowSilver";
      VehicleColor2[VehicleColor2["WornBlack"] = 21] = "WornBlack";
      VehicleColor2[VehicleColor2["WornGraphite"] = 22] = "WornGraphite";
      VehicleColor2[VehicleColor2["WornSilverGray"] = 23] = "WornSilverGray";
      VehicleColor2[VehicleColor2["WornSilver"] = 24] = "WornSilver";
      VehicleColor2[VehicleColor2["WornBlueSilver"] = 25] = "WornBlueSilver";
      VehicleColor2[VehicleColor2["WornShadowSilver"] = 26] = "WornShadowSilver";
      VehicleColor2[VehicleColor2["MetallicRed"] = 27] = "MetallicRed";
      VehicleColor2[VehicleColor2["MetallicTorinoRed"] = 28] = "MetallicTorinoRed";
      VehicleColor2[VehicleColor2["MetallicFormulaRed"] = 29] = "MetallicFormulaRed";
      VehicleColor2[VehicleColor2["MetallicBlazeRed"] = 30] = "MetallicBlazeRed";
      VehicleColor2[VehicleColor2["MetallicGracefulRed"] = 31] = "MetallicGracefulRed";
      VehicleColor2[VehicleColor2["MetallicGarnetRed"] = 32] = "MetallicGarnetRed";
      VehicleColor2[VehicleColor2["MetallicDesertRed"] = 33] = "MetallicDesertRed";
      VehicleColor2[VehicleColor2["MetallicCabernetRed"] = 34] = "MetallicCabernetRed";
      VehicleColor2[VehicleColor2["MetallicCandyRed"] = 35] = "MetallicCandyRed";
      VehicleColor2[VehicleColor2["MetallicSunriseOrange"] = 36] = "MetallicSunriseOrange";
      VehicleColor2[VehicleColor2["MetallicClassicGold"] = 37] = "MetallicClassicGold";
      VehicleColor2[VehicleColor2["MetallicOrange"] = 38] = "MetallicOrange";
      VehicleColor2[VehicleColor2["MatteRed"] = 39] = "MatteRed";
      VehicleColor2[VehicleColor2["MatteDarkRed"] = 40] = "MatteDarkRed";
      VehicleColor2[VehicleColor2["MatteOrange"] = 41] = "MatteOrange";
      VehicleColor2[VehicleColor2["MatteYellow"] = 42] = "MatteYellow";
      VehicleColor2[VehicleColor2["UtilRed"] = 43] = "UtilRed";
      VehicleColor2[VehicleColor2["UtilBrightRed"] = 44] = "UtilBrightRed";
      VehicleColor2[VehicleColor2["UtilGarnetRed"] = 45] = "UtilGarnetRed";
      VehicleColor2[VehicleColor2["WornRed"] = 46] = "WornRed";
      VehicleColor2[VehicleColor2["WornGoldenRed"] = 47] = "WornGoldenRed";
      VehicleColor2[VehicleColor2["WornDarkRed"] = 48] = "WornDarkRed";
      VehicleColor2[VehicleColor2["MetallicDarkGreen"] = 49] = "MetallicDarkGreen";
      VehicleColor2[VehicleColor2["MetallicRacingGreen"] = 50] = "MetallicRacingGreen";
      VehicleColor2[VehicleColor2["MetallicSeaGreen"] = 51] = "MetallicSeaGreen";
      VehicleColor2[VehicleColor2["MetallicOliveGreen"] = 52] = "MetallicOliveGreen";
      VehicleColor2[VehicleColor2["MetallicGreen"] = 53] = "MetallicGreen";
      VehicleColor2[VehicleColor2["MetallicGasolineBlueGreen"] = 54] = "MetallicGasolineBlueGreen";
      VehicleColor2[VehicleColor2["MatteLimeGreen"] = 55] = "MatteLimeGreen";
      VehicleColor2[VehicleColor2["UtilDarkGreen"] = 56] = "UtilDarkGreen";
      VehicleColor2[VehicleColor2["UtilGreen"] = 57] = "UtilGreen";
      VehicleColor2[VehicleColor2["WornDarkGreen"] = 58] = "WornDarkGreen";
      VehicleColor2[VehicleColor2["WornGreen"] = 59] = "WornGreen";
      VehicleColor2[VehicleColor2["WornSeaWash"] = 60] = "WornSeaWash";
      VehicleColor2[VehicleColor2["MetallicMidnightBlue"] = 61] = "MetallicMidnightBlue";
      VehicleColor2[VehicleColor2["MetallicDarkBlue"] = 62] = "MetallicDarkBlue";
      VehicleColor2[VehicleColor2["MetallicSaxonyBlue"] = 63] = "MetallicSaxonyBlue";
      VehicleColor2[VehicleColor2["MetallicBlue"] = 64] = "MetallicBlue";
      VehicleColor2[VehicleColor2["MetallicMarinerBlue"] = 65] = "MetallicMarinerBlue";
      VehicleColor2[VehicleColor2["MetallicHarborBlue"] = 66] = "MetallicHarborBlue";
      VehicleColor2[VehicleColor2["MetallicDiamondBlue"] = 67] = "MetallicDiamondBlue";
      VehicleColor2[VehicleColor2["MetallicSurfBlue"] = 68] = "MetallicSurfBlue";
      VehicleColor2[VehicleColor2["MetallicNauticalBlue"] = 69] = "MetallicNauticalBlue";
      VehicleColor2[VehicleColor2["MetallicBrightBlue"] = 70] = "MetallicBrightBlue";
      VehicleColor2[VehicleColor2["MetallicPurpleBlue"] = 71] = "MetallicPurpleBlue";
      VehicleColor2[VehicleColor2["MetallicSpinnakerBlue"] = 72] = "MetallicSpinnakerBlue";
      VehicleColor2[VehicleColor2["MetallicUltraBlue"] = 73] = "MetallicUltraBlue";
      VehicleColor2[VehicleColor2["UtilDarkBlue"] = 75] = "UtilDarkBlue";
      VehicleColor2[VehicleColor2["UtilMidnightBlue"] = 76] = "UtilMidnightBlue";
      VehicleColor2[VehicleColor2["UtilBlue"] = 77] = "UtilBlue";
      VehicleColor2[VehicleColor2["UtilSeaFoamBlue"] = 78] = "UtilSeaFoamBlue";
      VehicleColor2[VehicleColor2["UtilLightningBlue"] = 79] = "UtilLightningBlue";
      VehicleColor2[VehicleColor2["UtilMauiBluePoly"] = 80] = "UtilMauiBluePoly";
      VehicleColor2[VehicleColor2["UtilBrightBlue"] = 81] = "UtilBrightBlue";
      VehicleColor2[VehicleColor2["MatteDarkBlue"] = 82] = "MatteDarkBlue";
      VehicleColor2[VehicleColor2["MatteBlue"] = 83] = "MatteBlue";
      VehicleColor2[VehicleColor2["MatteMidnightBlue"] = 84] = "MatteMidnightBlue";
      VehicleColor2[VehicleColor2["WornDarkBlue"] = 85] = "WornDarkBlue";
      VehicleColor2[VehicleColor2["WornBlue"] = 86] = "WornBlue";
      VehicleColor2[VehicleColor2["WornLightBlue"] = 87] = "WornLightBlue";
      VehicleColor2[VehicleColor2["MetallicTaxiYellow"] = 88] = "MetallicTaxiYellow";
      VehicleColor2[VehicleColor2["MetallicRaceYellow"] = 89] = "MetallicRaceYellow";
      VehicleColor2[VehicleColor2["MetallicBronze"] = 90] = "MetallicBronze";
      VehicleColor2[VehicleColor2["MetallicYellowBird"] = 91] = "MetallicYellowBird";
      VehicleColor2[VehicleColor2["MetallicLime"] = 92] = "MetallicLime";
      VehicleColor2[VehicleColor2["MetallicChampagne"] = 93] = "MetallicChampagne";
      VehicleColor2[VehicleColor2["MetallicPuebloBeige"] = 94] = "MetallicPuebloBeige";
      VehicleColor2[VehicleColor2["MetallicDarkIvory"] = 95] = "MetallicDarkIvory";
      VehicleColor2[VehicleColor2["MetallicChocoBrown"] = 96] = "MetallicChocoBrown";
      VehicleColor2[VehicleColor2["MetallicGoldenBrown"] = 97] = "MetallicGoldenBrown";
      VehicleColor2[VehicleColor2["MetallicLightBrown"] = 98] = "MetallicLightBrown";
      VehicleColor2[VehicleColor2["MetallicStrawBeige"] = 99] = "MetallicStrawBeige";
      VehicleColor2[VehicleColor2["MetallicMossBrown"] = 100] = "MetallicMossBrown";
      VehicleColor2[VehicleColor2["MetallicBistonBrown"] = 101] = "MetallicBistonBrown";
      VehicleColor2[VehicleColor2["MetallicBeechwood"] = 102] = "MetallicBeechwood";
      VehicleColor2[VehicleColor2["MetallicDarkBeechwood"] = 103] = "MetallicDarkBeechwood";
      VehicleColor2[VehicleColor2["MetallicChocoOrange"] = 104] = "MetallicChocoOrange";
      VehicleColor2[VehicleColor2["MetallicBeachSand"] = 105] = "MetallicBeachSand";
      VehicleColor2[VehicleColor2["MetallicSunBleechedSand"] = 106] = "MetallicSunBleechedSand";
      VehicleColor2[VehicleColor2["MetallicCream"] = 107] = "MetallicCream";
      VehicleColor2[VehicleColor2["UtilBrown"] = 108] = "UtilBrown";
      VehicleColor2[VehicleColor2["UtilMediumBrown"] = 109] = "UtilMediumBrown";
      VehicleColor2[VehicleColor2["UtilLightBrown"] = 110] = "UtilLightBrown";
      VehicleColor2[VehicleColor2["MetallicWhite"] = 111] = "MetallicWhite";
      VehicleColor2[VehicleColor2["MetallicFrostWhite"] = 112] = "MetallicFrostWhite";
      VehicleColor2[VehicleColor2["WornHoneyBeige"] = 113] = "WornHoneyBeige";
      VehicleColor2[VehicleColor2["WornBrown"] = 114] = "WornBrown";
      VehicleColor2[VehicleColor2["WornDarkBrown"] = 115] = "WornDarkBrown";
      VehicleColor2[VehicleColor2["WornStrawBeige"] = 116] = "WornStrawBeige";
      VehicleColor2[VehicleColor2["BrushedSteel"] = 117] = "BrushedSteel";
      VehicleColor2[VehicleColor2["BrushedBlackSteel"] = 118] = "BrushedBlackSteel";
      VehicleColor2[VehicleColor2["BrushedAluminium"] = 119] = "BrushedAluminium";
      VehicleColor2[VehicleColor2["Chrome"] = 120] = "Chrome";
      VehicleColor2[VehicleColor2["WornOffWhite"] = 121] = "WornOffWhite";
      VehicleColor2[VehicleColor2["UtilOffWhite"] = 122] = "UtilOffWhite";
      VehicleColor2[VehicleColor2["WornOrange"] = 123] = "WornOrange";
      VehicleColor2[VehicleColor2["WornLightOrange"] = 124] = "WornLightOrange";
      VehicleColor2[VehicleColor2["MetallicSecuricorGreen"] = 125] = "MetallicSecuricorGreen";
      VehicleColor2[VehicleColor2["WornTaxiYellow"] = 126] = "WornTaxiYellow";
      VehicleColor2[VehicleColor2["PoliceCarBlue"] = 127] = "PoliceCarBlue";
      VehicleColor2[VehicleColor2["MatteGreen"] = 128] = "MatteGreen";
      VehicleColor2[VehicleColor2["MatteBrown"] = 129] = "MatteBrown";
      VehicleColor2[VehicleColor2["MatteWhite"] = 131] = "MatteWhite";
      VehicleColor2[VehicleColor2["WornWhite"] = 132] = "WornWhite";
      VehicleColor2[VehicleColor2["WornOliveArmyGreen"] = 133] = "WornOliveArmyGreen";
      VehicleColor2[VehicleColor2["PureWhite"] = 134] = "PureWhite";
      VehicleColor2[VehicleColor2["HotPink"] = 135] = "HotPink";
      VehicleColor2[VehicleColor2["Salmonpink"] = 136] = "Salmonpink";
      VehicleColor2[VehicleColor2["MetallicVermillionPink"] = 137] = "MetallicVermillionPink";
      VehicleColor2[VehicleColor2["Orange"] = 138] = "Orange";
      VehicleColor2[VehicleColor2["Green"] = 139] = "Green";
      VehicleColor2[VehicleColor2["Blue"] = 140] = "Blue";
      VehicleColor2[VehicleColor2["MettalicBlackBlue"] = 141] = "MettalicBlackBlue";
      VehicleColor2[VehicleColor2["MetallicBlackPurple"] = 142] = "MetallicBlackPurple";
      VehicleColor2[VehicleColor2["MetallicBlackRed"] = 143] = "MetallicBlackRed";
      VehicleColor2[VehicleColor2["HunterGreen"] = 144] = "HunterGreen";
      VehicleColor2[VehicleColor2["MetallicPurple"] = 145] = "MetallicPurple";
      VehicleColor2[VehicleColor2["MetaillicVDarkBlue"] = 146] = "MetaillicVDarkBlue";
      VehicleColor2[VehicleColor2["ModshopBlack1"] = 147] = "ModshopBlack1";
      VehicleColor2[VehicleColor2["MattePurple"] = 148] = "MattePurple";
      VehicleColor2[VehicleColor2["MatteDarkPurple"] = 149] = "MatteDarkPurple";
      VehicleColor2[VehicleColor2["MetallicLavaRed"] = 150] = "MetallicLavaRed";
      VehicleColor2[VehicleColor2["MatteForestGreen"] = 151] = "MatteForestGreen";
      VehicleColor2[VehicleColor2["MatteOliveDrab"] = 152] = "MatteOliveDrab";
      VehicleColor2[VehicleColor2["MatteDesertBrown"] = 153] = "MatteDesertBrown";
      VehicleColor2[VehicleColor2["MatteDesertTan"] = 154] = "MatteDesertTan";
      VehicleColor2[VehicleColor2["MatteFoliageGreen"] = 155] = "MatteFoliageGreen";
      VehicleColor2[VehicleColor2["DefaultAlloyColor"] = 156] = "DefaultAlloyColor";
      VehicleColor2[VehicleColor2["EpsilonBlue"] = 157] = "EpsilonBlue";
      VehicleColor2[VehicleColor2["PureGold"] = 158] = "PureGold";
      VehicleColor2[VehicleColor2["BrushedGold"] = 159] = "BrushedGold";
    })(VehicleColor = exports.VehicleColor || (exports.VehicleColor = {}));
    var VehicleLandingGearState;
    (function(VehicleLandingGearState2) {
      VehicleLandingGearState2[VehicleLandingGearState2["Deployed"] = 0] = "Deployed";
      VehicleLandingGearState2[VehicleLandingGearState2["Closing"] = 1] = "Closing";
      VehicleLandingGearState2[VehicleLandingGearState2["Opening"] = 2] = "Opening";
      VehicleLandingGearState2[VehicleLandingGearState2["Retracted"] = 3] = "Retracted";
    })(VehicleLandingGearState = exports.VehicleLandingGearState || (exports.VehicleLandingGearState = {}));
    var VehicleLockStatus;
    (function(VehicleLockStatus2) {
      VehicleLockStatus2[VehicleLockStatus2["None"] = 0] = "None";
      VehicleLockStatus2[VehicleLockStatus2["Unlocked"] = 1] = "Unlocked";
      VehicleLockStatus2[VehicleLockStatus2["Locked"] = 2] = "Locked";
      VehicleLockStatus2[VehicleLockStatus2["LockedForPlayer"] = 3] = "LockedForPlayer";
      VehicleLockStatus2[VehicleLockStatus2["StickPlayerInside"] = 4] = "StickPlayerInside";
      VehicleLockStatus2[VehicleLockStatus2["CanBeBrokenInto"] = 7] = "CanBeBrokenInto";
      VehicleLockStatus2[VehicleLockStatus2["CanBeBrokenIntoPersist"] = 8] = "CanBeBrokenIntoPersist";
      VehicleLockStatus2[VehicleLockStatus2["CannotBeTriedToEnter"] = 10] = "CannotBeTriedToEnter";
    })(VehicleLockStatus = exports.VehicleLockStatus || (exports.VehicleLockStatus = {}));
    var VehicleNeonLight;
    (function(VehicleNeonLight2) {
      VehicleNeonLight2[VehicleNeonLight2["Left"] = 0] = "Left";
      VehicleNeonLight2[VehicleNeonLight2["Right"] = 1] = "Right";
      VehicleNeonLight2[VehicleNeonLight2["Front"] = 2] = "Front";
      VehicleNeonLight2[VehicleNeonLight2["Back"] = 3] = "Back";
    })(VehicleNeonLight = exports.VehicleNeonLight || (exports.VehicleNeonLight = {}));
    var VehicleRoofState;
    (function(VehicleRoofState2) {
      VehicleRoofState2[VehicleRoofState2["Closed"] = 0] = "Closed";
      VehicleRoofState2[VehicleRoofState2["Opening"] = 1] = "Opening";
      VehicleRoofState2[VehicleRoofState2["Opened"] = 2] = "Opened";
      VehicleRoofState2[VehicleRoofState2["Closing"] = 3] = "Closing";
    })(VehicleRoofState = exports.VehicleRoofState || (exports.VehicleRoofState = {}));
    var VehicleSeat;
    (function(VehicleSeat2) {
      VehicleSeat2[VehicleSeat2["None"] = -3] = "None";
      VehicleSeat2[VehicleSeat2["Any"] = -2] = "Any";
      VehicleSeat2[VehicleSeat2["Driver"] = -1] = "Driver";
      VehicleSeat2[VehicleSeat2["Passenger"] = 0] = "Passenger";
      VehicleSeat2[VehicleSeat2["LeftFront"] = -1] = "LeftFront";
      VehicleSeat2[VehicleSeat2["RightFront"] = 0] = "RightFront";
      VehicleSeat2[VehicleSeat2["LeftRear"] = 1] = "LeftRear";
      VehicleSeat2[VehicleSeat2["RightRear"] = 2] = "RightRear";
      VehicleSeat2[VehicleSeat2["ExtraSeat1"] = 3] = "ExtraSeat1";
      VehicleSeat2[VehicleSeat2["ExtraSeat2"] = 4] = "ExtraSeat2";
      VehicleSeat2[VehicleSeat2["ExtraSeat3"] = 5] = "ExtraSeat3";
      VehicleSeat2[VehicleSeat2["ExtraSeat4"] = 6] = "ExtraSeat4";
      VehicleSeat2[VehicleSeat2["ExtraSeat5"] = 7] = "ExtraSeat5";
      VehicleSeat2[VehicleSeat2["ExtraSeat6"] = 8] = "ExtraSeat6";
      VehicleSeat2[VehicleSeat2["ExtraSeat7"] = 9] = "ExtraSeat7";
      VehicleSeat2[VehicleSeat2["ExtraSeat8"] = 10] = "ExtraSeat8";
      VehicleSeat2[VehicleSeat2["ExtraSeat9"] = 11] = "ExtraSeat9";
      VehicleSeat2[VehicleSeat2["ExtraSeat10"] = 12] = "ExtraSeat10";
      VehicleSeat2[VehicleSeat2["ExtraSeat11"] = 13] = "ExtraSeat11";
      VehicleSeat2[VehicleSeat2["ExtraSeat12"] = 14] = "ExtraSeat12";
    })(VehicleSeat = exports.VehicleSeat || (exports.VehicleSeat = {}));
    var VehicleWindowTint;
    (function(VehicleWindowTint2) {
      VehicleWindowTint2[VehicleWindowTint2["None"] = 0] = "None";
      VehicleWindowTint2[VehicleWindowTint2["PureBlack"] = 1] = "PureBlack";
      VehicleWindowTint2[VehicleWindowTint2["DarkSmoke"] = 2] = "DarkSmoke";
      VehicleWindowTint2[VehicleWindowTint2["LightSmoke"] = 3] = "LightSmoke";
      VehicleWindowTint2[VehicleWindowTint2["Stock"] = 4] = "Stock";
      VehicleWindowTint2[VehicleWindowTint2["Limo"] = 5] = "Limo";
      VehicleWindowTint2[VehicleWindowTint2["Green"] = 6] = "Green";
    })(VehicleWindowTint = exports.VehicleWindowTint || (exports.VehicleWindowTint = {}));
    var VehicleWindowIndex;
    (function(VehicleWindowIndex2) {
      VehicleWindowIndex2[VehicleWindowIndex2["FrontRightWindow"] = 1] = "FrontRightWindow";
      VehicleWindowIndex2[VehicleWindowIndex2["FrontLeftWindow"] = 0] = "FrontLeftWindow";
      VehicleWindowIndex2[VehicleWindowIndex2["BackRightWindow"] = 3] = "BackRightWindow";
      VehicleWindowIndex2[VehicleWindowIndex2["BackLeftWindow"] = 2] = "BackLeftWindow";
      VehicleWindowIndex2[VehicleWindowIndex2["ExtraWindow1"] = 4] = "ExtraWindow1";
      VehicleWindowIndex2[VehicleWindowIndex2["ExtraWindow2"] = 5] = "ExtraWindow2";
      VehicleWindowIndex2[VehicleWindowIndex2["ExtraWindow3"] = 6] = "ExtraWindow3";
      VehicleWindowIndex2[VehicleWindowIndex2["ExtraWindow4"] = 7] = "ExtraWindow4";
    })(VehicleWindowIndex = exports.VehicleWindowIndex || (exports.VehicleWindowIndex = {}));
    var VehicleModType;
    (function(VehicleModType2) {
      VehicleModType2[VehicleModType2["Spoilers"] = 0] = "Spoilers";
      VehicleModType2[VehicleModType2["FrontBumper"] = 1] = "FrontBumper";
      VehicleModType2[VehicleModType2["RearBumper"] = 2] = "RearBumper";
      VehicleModType2[VehicleModType2["SideSkirt"] = 3] = "SideSkirt";
      VehicleModType2[VehicleModType2["Exhaust"] = 4] = "Exhaust";
      VehicleModType2[VehicleModType2["Frame"] = 5] = "Frame";
      VehicleModType2[VehicleModType2["Grille"] = 6] = "Grille";
      VehicleModType2[VehicleModType2["Hood"] = 7] = "Hood";
      VehicleModType2[VehicleModType2["Fender"] = 8] = "Fender";
      VehicleModType2[VehicleModType2["RightFender"] = 9] = "RightFender";
      VehicleModType2[VehicleModType2["Roof"] = 10] = "Roof";
      VehicleModType2[VehicleModType2["Engine"] = 11] = "Engine";
      VehicleModType2[VehicleModType2["Brakes"] = 12] = "Brakes";
      VehicleModType2[VehicleModType2["Transmission"] = 13] = "Transmission";
      VehicleModType2[VehicleModType2["Horns"] = 14] = "Horns";
      VehicleModType2[VehicleModType2["Suspension"] = 15] = "Suspension";
      VehicleModType2[VehicleModType2["Armor"] = 16] = "Armor";
      VehicleModType2[VehicleModType2["FrontWheel"] = 23] = "FrontWheel";
      VehicleModType2[VehicleModType2["RearWheel"] = 24] = "RearWheel";
      VehicleModType2[VehicleModType2["PlateHolder"] = 25] = "PlateHolder";
      VehicleModType2[VehicleModType2["VanityPlates"] = 26] = "VanityPlates";
      VehicleModType2[VehicleModType2["TrimDesign"] = 27] = "TrimDesign";
      VehicleModType2[VehicleModType2["Ornaments"] = 28] = "Ornaments";
      VehicleModType2[VehicleModType2["Dashboard"] = 29] = "Dashboard";
      VehicleModType2[VehicleModType2["DialDesign"] = 30] = "DialDesign";
      VehicleModType2[VehicleModType2["DoorSpeakers"] = 31] = "DoorSpeakers";
      VehicleModType2[VehicleModType2["Seats"] = 32] = "Seats";
      VehicleModType2[VehicleModType2["SteeringWheels"] = 33] = "SteeringWheels";
      VehicleModType2[VehicleModType2["ColumnShifterLevers"] = 34] = "ColumnShifterLevers";
      VehicleModType2[VehicleModType2["Plaques"] = 35] = "Plaques";
      VehicleModType2[VehicleModType2["Speakers"] = 36] = "Speakers";
      VehicleModType2[VehicleModType2["Trunk"] = 37] = "Trunk";
      VehicleModType2[VehicleModType2["Hydraulics"] = 38] = "Hydraulics";
      VehicleModType2[VehicleModType2["EngineBlock"] = 39] = "EngineBlock";
      VehicleModType2[VehicleModType2["AirFilter"] = 40] = "AirFilter";
      VehicleModType2[VehicleModType2["Struts"] = 41] = "Struts";
      VehicleModType2[VehicleModType2["ArchCover"] = 42] = "ArchCover";
      VehicleModType2[VehicleModType2["Aerials"] = 43] = "Aerials";
      VehicleModType2[VehicleModType2["Trim"] = 44] = "Trim";
      VehicleModType2[VehicleModType2["Tank"] = 45] = "Tank";
      VehicleModType2[VehicleModType2["Windows"] = 46] = "Windows";
      VehicleModType2[VehicleModType2["Livery"] = 48] = "Livery";
    })(VehicleModType = exports.VehicleModType || (exports.VehicleModType = {}));
    var VehicleToggleModType;
    (function(VehicleToggleModType2) {
      VehicleToggleModType2[VehicleToggleModType2["Turbo"] = 18] = "Turbo";
      VehicleToggleModType2[VehicleToggleModType2["TireSmoke"] = 20] = "TireSmoke";
      VehicleToggleModType2[VehicleToggleModType2["XenonHeadlights"] = 22] = "XenonHeadlights";
    })(VehicleToggleModType = exports.VehicleToggleModType || (exports.VehicleToggleModType = {}));
    var VehiclePaintType;
    (function(VehiclePaintType2) {
      VehiclePaintType2[VehiclePaintType2["Normal"] = 0] = "Normal";
      VehiclePaintType2[VehiclePaintType2["Metallic"] = 1] = "Metallic";
      VehiclePaintType2[VehiclePaintType2["Pearl"] = 2] = "Pearl";
      VehiclePaintType2[VehiclePaintType2["Matte"] = 3] = "Matte";
      VehiclePaintType2[VehiclePaintType2["Metal"] = 4] = "Metal";
      VehiclePaintType2[VehiclePaintType2["Chrome"] = 5] = "Chrome";
    })(VehiclePaintType = exports.VehiclePaintType || (exports.VehiclePaintType = {}));
    var VehicleDoorIndex;
    (function(VehicleDoorIndex2) {
      VehicleDoorIndex2[VehicleDoorIndex2["FrontRightDoor"] = 1] = "FrontRightDoor";
      VehicleDoorIndex2[VehicleDoorIndex2["FrontLeftDoor"] = 0] = "FrontLeftDoor";
      VehicleDoorIndex2[VehicleDoorIndex2["BackRightDoor"] = 3] = "BackRightDoor";
      VehicleDoorIndex2[VehicleDoorIndex2["BackLeftDoor"] = 2] = "BackLeftDoor";
      VehicleDoorIndex2[VehicleDoorIndex2["Hood"] = 4] = "Hood";
      VehicleDoorIndex2[VehicleDoorIndex2["Trunk"] = 5] = "Trunk";
    })(VehicleDoorIndex = exports.VehicleDoorIndex || (exports.VehicleDoorIndex = {}));
    var VehicleWheelType;
    (function(VehicleWheelType2) {
      VehicleWheelType2[VehicleWheelType2["Sport"] = 0] = "Sport";
      VehicleWheelType2[VehicleWheelType2["Muscle"] = 1] = "Muscle";
      VehicleWheelType2[VehicleWheelType2["Lowrider"] = 2] = "Lowrider";
      VehicleWheelType2[VehicleWheelType2["SUV"] = 3] = "SUV";
      VehicleWheelType2[VehicleWheelType2["Offroad"] = 4] = "Offroad";
      VehicleWheelType2[VehicleWheelType2["Tuner"] = 5] = "Tuner";
      VehicleWheelType2[VehicleWheelType2["BikeWheels"] = 6] = "BikeWheels";
      VehicleWheelType2[VehicleWheelType2["HighEnd"] = 7] = "HighEnd";
      VehicleWheelType2[VehicleWheelType2["BennysOriginals"] = 8] = "BennysOriginals";
      VehicleWheelType2[VehicleWheelType2["BennysBespoke"] = 9] = "BennysBespoke";
    })(VehicleWheelType = exports.VehicleWheelType || (exports.VehicleWheelType = {}));
    var VehicleWheelIndex;
    (function(VehicleWheelIndex2) {
      VehicleWheelIndex2[VehicleWheelIndex2["FrontLeftWheel"] = 0] = "FrontLeftWheel";
      VehicleWheelIndex2[VehicleWheelIndex2["FrontRightWheel"] = 1] = "FrontRightWheel";
      VehicleWheelIndex2[VehicleWheelIndex2["MidLeftWheel"] = 2] = "MidLeftWheel";
      VehicleWheelIndex2[VehicleWheelIndex2["MidRightWheel"] = 3] = "MidRightWheel";
      VehicleWheelIndex2[VehicleWheelIndex2["RearLeftWheel"] = 4] = "RearLeftWheel";
      VehicleWheelIndex2[VehicleWheelIndex2["RearRightWheel"] = 5] = "RearRightWheel";
      VehicleWheelIndex2[VehicleWheelIndex2["TrailerMidLeftWheel"] = 45] = "TrailerMidLeftWheel";
      VehicleWheelIndex2[VehicleWheelIndex2["TrailerMidRightWheel"] = 47] = "TrailerMidRightWheel";
    })(VehicleWheelIndex = exports.VehicleWheelIndex || (exports.VehicleWheelIndex = {}));
  }
});

// ../../node_modules/fivem-js/lib/enums/Weather.js
var require_Weather = __commonJS({
  "../../node_modules/fivem-js/lib/enums/Weather.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Weather = void 0;
    var Weather;
    (function(Weather2) {
      Weather2[Weather2["Unknown"] = -1] = "Unknown";
      Weather2[Weather2["ExtraSunny"] = 0] = "ExtraSunny";
      Weather2[Weather2["Clear"] = 1] = "Clear";
      Weather2[Weather2["Clouds"] = 2] = "Clouds";
      Weather2[Weather2["Smog"] = 3] = "Smog";
      Weather2[Weather2["Foggy"] = 4] = "Foggy";
      Weather2[Weather2["Overcast"] = 5] = "Overcast";
      Weather2[Weather2["Raining"] = 6] = "Raining";
      Weather2[Weather2["ThunderStorm"] = 7] = "ThunderStorm";
      Weather2[Weather2["Clearing"] = 8] = "Clearing";
      Weather2[Weather2["Neutral"] = 9] = "Neutral";
      Weather2[Weather2["Snowing"] = 10] = "Snowing";
      Weather2[Weather2["Blizzard"] = 11] = "Blizzard";
      Weather2[Weather2["Snowlight"] = 12] = "Snowlight";
      Weather2[Weather2["Christmas"] = 13] = "Christmas";
      Weather2[Weather2["Halloween"] = 14] = "Halloween";
    })(Weather = exports.Weather || (exports.Weather = {}));
  }
});

// ../../node_modules/fivem-js/lib/enums/ZoneID.js
var require_ZoneID = __commonJS({
  "../../node_modules/fivem-js/lib/enums/ZoneID.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ZoneID = void 0;
    var ZoneID;
    (function(ZoneID2) {
      ZoneID2[ZoneID2["AIRP"] = 0] = "AIRP";
      ZoneID2[ZoneID2["ALAMO"] = 1] = "ALAMO";
      ZoneID2[ZoneID2["ALTA"] = 2] = "ALTA";
      ZoneID2[ZoneID2["ARMYB"] = 3] = "ARMYB";
      ZoneID2[ZoneID2["BANHAMC"] = 4] = "BANHAMC";
      ZoneID2[ZoneID2["BANNING"] = 5] = "BANNING";
      ZoneID2[ZoneID2["BEACH"] = 6] = "BEACH";
      ZoneID2[ZoneID2["BHAMCA"] = 7] = "BHAMCA";
      ZoneID2[ZoneID2["BRADP"] = 8] = "BRADP";
      ZoneID2[ZoneID2["BRADT"] = 9] = "BRADT";
      ZoneID2[ZoneID2["BURTON"] = 10] = "BURTON";
      ZoneID2[ZoneID2["CALAFB"] = 11] = "CALAFB";
      ZoneID2[ZoneID2["CANNY"] = 12] = "CANNY";
      ZoneID2[ZoneID2["CCREAK"] = 13] = "CCREAK";
      ZoneID2[ZoneID2["CHAMH"] = 14] = "CHAMH";
      ZoneID2[ZoneID2["CHIL"] = 15] = "CHIL";
      ZoneID2[ZoneID2["CHU"] = 16] = "CHU";
      ZoneID2[ZoneID2["CMSW"] = 17] = "CMSW";
      ZoneID2[ZoneID2["CYPRE"] = 18] = "CYPRE";
      ZoneID2[ZoneID2["DAVIS"] = 19] = "DAVIS";
      ZoneID2[ZoneID2["DELBE"] = 20] = "DELBE";
      ZoneID2[ZoneID2["DELPE"] = 21] = "DELPE";
      ZoneID2[ZoneID2["DELSOL"] = 22] = "DELSOL";
      ZoneID2[ZoneID2["DESRT"] = 23] = "DESRT";
      ZoneID2[ZoneID2["DOWNT"] = 24] = "DOWNT";
      ZoneID2[ZoneID2["DTVINE"] = 25] = "DTVINE";
      ZoneID2[ZoneID2["EAST_V"] = 26] = "EAST_V";
      ZoneID2[ZoneID2["EBURO"] = 27] = "EBURO";
      ZoneID2[ZoneID2["ELGORL"] = 28] = "ELGORL";
      ZoneID2[ZoneID2["ELYSIAN"] = 29] = "ELYSIAN";
      ZoneID2[ZoneID2["GALFISH"] = 30] = "GALFISH";
      ZoneID2[ZoneID2["golf"] = 31] = "golf";
      ZoneID2[ZoneID2["GRAPES"] = 32] = "GRAPES";
      ZoneID2[ZoneID2["GREATC"] = 33] = "GREATC";
      ZoneID2[ZoneID2["HARMO"] = 34] = "HARMO";
      ZoneID2[ZoneID2["HAWICK"] = 35] = "HAWICK";
      ZoneID2[ZoneID2["HORS"] = 36] = "HORS";
      ZoneID2[ZoneID2["HUMLAB"] = 37] = "HUMLAB";
      ZoneID2[ZoneID2["JAIL"] = 38] = "JAIL";
      ZoneID2[ZoneID2["KOREAT"] = 39] = "KOREAT";
      ZoneID2[ZoneID2["LACT"] = 40] = "LACT";
      ZoneID2[ZoneID2["LAGO"] = 41] = "LAGO";
      ZoneID2[ZoneID2["LDAM"] = 42] = "LDAM";
      ZoneID2[ZoneID2["LEGSQU"] = 43] = "LEGSQU";
      ZoneID2[ZoneID2["LMESA"] = 44] = "LMESA";
      ZoneID2[ZoneID2["LOSPUER"] = 45] = "LOSPUER";
      ZoneID2[ZoneID2["MIRR"] = 46] = "MIRR";
      ZoneID2[ZoneID2["MORN"] = 47] = "MORN";
      ZoneID2[ZoneID2["MOVIE"] = 48] = "MOVIE";
      ZoneID2[ZoneID2["MTCHIL"] = 49] = "MTCHIL";
      ZoneID2[ZoneID2["MTGORDO"] = 50] = "MTGORDO";
      ZoneID2[ZoneID2["MTJOSE"] = 51] = "MTJOSE";
      ZoneID2[ZoneID2["MURRI"] = 52] = "MURRI";
      ZoneID2[ZoneID2["NCHU"] = 53] = "NCHU";
      ZoneID2[ZoneID2["NOOSE"] = 54] = "NOOSE";
      ZoneID2[ZoneID2["OCEANA"] = 55] = "OCEANA";
      ZoneID2[ZoneID2["PALCOV"] = 56] = "PALCOV";
      ZoneID2[ZoneID2["PALETO"] = 57] = "PALETO";
      ZoneID2[ZoneID2["PALFOR"] = 58] = "PALFOR";
      ZoneID2[ZoneID2["PALHIGH"] = 59] = "PALHIGH";
      ZoneID2[ZoneID2["PALMPOW"] = 60] = "PALMPOW";
      ZoneID2[ZoneID2["PBLUFF"] = 61] = "PBLUFF";
      ZoneID2[ZoneID2["PBOX"] = 62] = "PBOX";
      ZoneID2[ZoneID2["PROCOB"] = 63] = "PROCOB";
      ZoneID2[ZoneID2["RANCHO"] = 64] = "RANCHO";
      ZoneID2[ZoneID2["RGLEN"] = 65] = "RGLEN";
      ZoneID2[ZoneID2["RICHM"] = 66] = "RICHM";
      ZoneID2[ZoneID2["ROCKF"] = 67] = "ROCKF";
      ZoneID2[ZoneID2["RTRAK"] = 68] = "RTRAK";
      ZoneID2[ZoneID2["SanAnd"] = 69] = "SanAnd";
      ZoneID2[ZoneID2["SANCHIA"] = 70] = "SANCHIA";
      ZoneID2[ZoneID2["SANDY"] = 71] = "SANDY";
      ZoneID2[ZoneID2["SKID"] = 72] = "SKID";
      ZoneID2[ZoneID2["SLAB"] = 73] = "SLAB";
      ZoneID2[ZoneID2["STAD"] = 74] = "STAD";
      ZoneID2[ZoneID2["STRAW"] = 75] = "STRAW";
      ZoneID2[ZoneID2["TATAMO"] = 76] = "TATAMO";
      ZoneID2[ZoneID2["TERMINA"] = 77] = "TERMINA";
      ZoneID2[ZoneID2["TEXTI"] = 78] = "TEXTI";
      ZoneID2[ZoneID2["TONGVAH"] = 79] = "TONGVAH";
      ZoneID2[ZoneID2["TONGVAV"] = 80] = "TONGVAV";
      ZoneID2[ZoneID2["VCANA"] = 81] = "VCANA";
      ZoneID2[ZoneID2["VESP"] = 82] = "VESP";
      ZoneID2[ZoneID2["VINE"] = 83] = "VINE";
      ZoneID2[ZoneID2["WINDF"] = 84] = "WINDF";
      ZoneID2[ZoneID2["WVINE"] = 85] = "WVINE";
      ZoneID2[ZoneID2["ZANCUDO"] = 86] = "ZANCUDO";
      ZoneID2[ZoneID2["ZP_ORT"] = 87] = "ZP_ORT";
      ZoneID2[ZoneID2["ZQ_UAR"] = 88] = "ZQ_UAR";
    })(ZoneID = exports.ZoneID || (exports.ZoneID = {}));
  }
});

// ../../node_modules/fivem-js/lib/enums/index.js
var require_enums = __commonJS({
  "../../node_modules/fivem-js/lib/enums/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.VehicleDoorIndex = exports.VehiclePaintType = exports.VehicleToggleModType = exports.VehicleModType = exports.VehicleWindowIndex = exports.VehicleWindowTint = exports.VehicleSeat = exports.VehicleRoofState = exports.VehicleNeonLight = exports.VehicleLockStatus = exports.VehicleLandingGearState = exports.VehicleColor = exports.VehicleClass = exports.SpeechModifier = exports.ScreenEffect = exports.RopeType = exports.Relationship = exports.RagdollType = exports.RadioStation = exports.ParachuteState = exports.ParachuteLandingType = exports.NotificationType = exports.MarkerType = exports.LoadingSpinnerType = exports.Language = exports.InvertAxisFlags = exports.IntersectOptions = exports.InputMode = exports.HudComponent = exports.HudColor = exports.HelmetType = exports.Gender = exports.ForceType = exports.Font = exports.ExplosionType = exports.VehicleDrivingFlags = exports.DrivingStyle = exports.CursorSprite = exports.Control = exports.CloudHat = exports.CheckpointIcon = exports.CheckpointCustomIconStyle = exports.CheckboxStyle = exports.CameraShake = exports.Bone = exports.BlipSprite = exports.BlipColor = exports.BadgeStyle = exports.AudioFlag = exports.Alignment = void 0;
    exports.ZoneID = exports.Weather = exports.VehicleWheelIndex = exports.VehicleWheelType = void 0;
    var Alignment_1 = require_Alignment();
    Object.defineProperty(exports, "Alignment", { enumerable: true, get: function() {
      return Alignment_1.Alignment;
    } });
    var AudioFlag_1 = require_AudioFlag();
    Object.defineProperty(exports, "AudioFlag", { enumerable: true, get: function() {
      return AudioFlag_1.AudioFlag;
    } });
    var BadgeStyle_1 = require_BadgeStyle();
    Object.defineProperty(exports, "BadgeStyle", { enumerable: true, get: function() {
      return BadgeStyle_1.BadgeStyle;
    } });
    var Blip_1 = require_Blip();
    Object.defineProperty(exports, "BlipColor", { enumerable: true, get: function() {
      return Blip_1.BlipColor;
    } });
    Object.defineProperty(exports, "BlipSprite", { enumerable: true, get: function() {
      return Blip_1.BlipSprite;
    } });
    var Bone_1 = require_Bone();
    Object.defineProperty(exports, "Bone", { enumerable: true, get: function() {
      return Bone_1.Bone;
    } });
    var CameraShake_1 = require_CameraShake();
    Object.defineProperty(exports, "CameraShake", { enumerable: true, get: function() {
      return CameraShake_1.CameraShake;
    } });
    var CheckboxStyle_1 = require_CheckboxStyle();
    Object.defineProperty(exports, "CheckboxStyle", { enumerable: true, get: function() {
      return CheckboxStyle_1.CheckboxStyle;
    } });
    var Checkpoint_1 = require_Checkpoint();
    Object.defineProperty(exports, "CheckpointCustomIconStyle", { enumerable: true, get: function() {
      return Checkpoint_1.CheckpointCustomIconStyle;
    } });
    Object.defineProperty(exports, "CheckpointIcon", { enumerable: true, get: function() {
      return Checkpoint_1.CheckpointIcon;
    } });
    var CloudHat_1 = require_CloudHat();
    Object.defineProperty(exports, "CloudHat", { enumerable: true, get: function() {
      return CloudHat_1.CloudHat;
    } });
    var Control_1 = require_Control();
    Object.defineProperty(exports, "Control", { enumerable: true, get: function() {
      return Control_1.Control;
    } });
    var CursorSprite_1 = require_CursorSprite();
    Object.defineProperty(exports, "CursorSprite", { enumerable: true, get: function() {
      return CursorSprite_1.CursorSprite;
    } });
    var Driving_1 = require_Driving();
    Object.defineProperty(exports, "DrivingStyle", { enumerable: true, get: function() {
      return Driving_1.DrivingStyle;
    } });
    Object.defineProperty(exports, "VehicleDrivingFlags", { enumerable: true, get: function() {
      return Driving_1.VehicleDrivingFlags;
    } });
    var ExplosionType_1 = require_ExplosionType();
    Object.defineProperty(exports, "ExplosionType", { enumerable: true, get: function() {
      return ExplosionType_1.ExplosionType;
    } });
    var Font_1 = require_Font();
    Object.defineProperty(exports, "Font", { enumerable: true, get: function() {
      return Font_1.Font;
    } });
    var ForceType_1 = require_ForceType();
    Object.defineProperty(exports, "ForceType", { enumerable: true, get: function() {
      return ForceType_1.ForceType;
    } });
    var Gender_1 = require_Gender();
    Object.defineProperty(exports, "Gender", { enumerable: true, get: function() {
      return Gender_1.Gender;
    } });
    var HelmetType_1 = require_HelmetType();
    Object.defineProperty(exports, "HelmetType", { enumerable: true, get: function() {
      return HelmetType_1.HelmetType;
    } });
    var HudColor_1 = require_HudColor();
    Object.defineProperty(exports, "HudColor", { enumerable: true, get: function() {
      return HudColor_1.HudColor;
    } });
    var HudComponent_1 = require_HudComponent();
    Object.defineProperty(exports, "HudComponent", { enumerable: true, get: function() {
      return HudComponent_1.HudComponent;
    } });
    var InputMode_1 = require_InputMode();
    Object.defineProperty(exports, "InputMode", { enumerable: true, get: function() {
      return InputMode_1.InputMode;
    } });
    var IntersectOptions_1 = require_IntersectOptions();
    Object.defineProperty(exports, "IntersectOptions", { enumerable: true, get: function() {
      return IntersectOptions_1.IntersectOptions;
    } });
    var InvertAxis_1 = require_InvertAxis();
    Object.defineProperty(exports, "InvertAxisFlags", { enumerable: true, get: function() {
      return InvertAxis_1.InvertAxisFlags;
    } });
    var Language_1 = require_Language();
    Object.defineProperty(exports, "Language", { enumerable: true, get: function() {
      return Language_1.Language;
    } });
    var LoadingSpinnerType_1 = require_LoadingSpinnerType();
    Object.defineProperty(exports, "LoadingSpinnerType", { enumerable: true, get: function() {
      return LoadingSpinnerType_1.LoadingSpinnerType;
    } });
    var MarkerType_1 = require_MarkerType();
    Object.defineProperty(exports, "MarkerType", { enumerable: true, get: function() {
      return MarkerType_1.MarkerType;
    } });
    var NotificationType_1 = require_NotificationType();
    Object.defineProperty(exports, "NotificationType", { enumerable: true, get: function() {
      return NotificationType_1.NotificationType;
    } });
    var Parachute_1 = require_Parachute();
    Object.defineProperty(exports, "ParachuteLandingType", { enumerable: true, get: function() {
      return Parachute_1.ParachuteLandingType;
    } });
    Object.defineProperty(exports, "ParachuteState", { enumerable: true, get: function() {
      return Parachute_1.ParachuteState;
    } });
    var RadioStation_1 = require_RadioStation();
    Object.defineProperty(exports, "RadioStation", { enumerable: true, get: function() {
      return RadioStation_1.RadioStation;
    } });
    var RagdollType_1 = require_RagdollType();
    Object.defineProperty(exports, "RagdollType", { enumerable: true, get: function() {
      return RagdollType_1.RagdollType;
    } });
    var Relationship_1 = require_Relationship();
    Object.defineProperty(exports, "Relationship", { enumerable: true, get: function() {
      return Relationship_1.Relationship;
    } });
    var RopeType_1 = require_RopeType();
    Object.defineProperty(exports, "RopeType", { enumerable: true, get: function() {
      return RopeType_1.RopeType;
    } });
    var ScreenEffect_1 = require_ScreenEffect();
    Object.defineProperty(exports, "ScreenEffect", { enumerable: true, get: function() {
      return ScreenEffect_1.ScreenEffect;
    } });
    var SpeechModifier_1 = require_SpeechModifier();
    Object.defineProperty(exports, "SpeechModifier", { enumerable: true, get: function() {
      return SpeechModifier_1.SpeechModifier;
    } });
    var Vehicle_1 = require_Vehicle();
    Object.defineProperty(exports, "VehicleClass", { enumerable: true, get: function() {
      return Vehicle_1.VehicleClass;
    } });
    Object.defineProperty(exports, "VehicleColor", { enumerable: true, get: function() {
      return Vehicle_1.VehicleColor;
    } });
    Object.defineProperty(exports, "VehicleLandingGearState", { enumerable: true, get: function() {
      return Vehicle_1.VehicleLandingGearState;
    } });
    Object.defineProperty(exports, "VehicleLockStatus", { enumerable: true, get: function() {
      return Vehicle_1.VehicleLockStatus;
    } });
    Object.defineProperty(exports, "VehicleNeonLight", { enumerable: true, get: function() {
      return Vehicle_1.VehicleNeonLight;
    } });
    Object.defineProperty(exports, "VehicleRoofState", { enumerable: true, get: function() {
      return Vehicle_1.VehicleRoofState;
    } });
    Object.defineProperty(exports, "VehicleSeat", { enumerable: true, get: function() {
      return Vehicle_1.VehicleSeat;
    } });
    Object.defineProperty(exports, "VehicleWindowTint", { enumerable: true, get: function() {
      return Vehicle_1.VehicleWindowTint;
    } });
    Object.defineProperty(exports, "VehicleWindowIndex", { enumerable: true, get: function() {
      return Vehicle_1.VehicleWindowIndex;
    } });
    Object.defineProperty(exports, "VehicleModType", { enumerable: true, get: function() {
      return Vehicle_1.VehicleModType;
    } });
    Object.defineProperty(exports, "VehicleToggleModType", { enumerable: true, get: function() {
      return Vehicle_1.VehicleToggleModType;
    } });
    Object.defineProperty(exports, "VehiclePaintType", { enumerable: true, get: function() {
      return Vehicle_1.VehiclePaintType;
    } });
    Object.defineProperty(exports, "VehicleDoorIndex", { enumerable: true, get: function() {
      return Vehicle_1.VehicleDoorIndex;
    } });
    Object.defineProperty(exports, "VehicleWheelType", { enumerable: true, get: function() {
      return Vehicle_1.VehicleWheelType;
    } });
    Object.defineProperty(exports, "VehicleWheelIndex", { enumerable: true, get: function() {
      return Vehicle_1.VehicleWheelIndex;
    } });
    var Weather_1 = require_Weather();
    Object.defineProperty(exports, "Weather", { enumerable: true, get: function() {
      return Weather_1.Weather;
    } });
    var ZoneID_1 = require_ZoneID();
    Object.defineProperty(exports, "ZoneID", { enumerable: true, get: function() {
      return ZoneID_1.ZoneID;
    } });
  }
});

// ../../node_modules/fivem-js/lib/utils/Vector3.js
var require_Vector3 = __commonJS({
  "../../node_modules/fivem-js/lib/utils/Vector3.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Vector3 = void 0;
    var Vector32 = class {
      constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
      }
      static create(v1) {
        if (typeof v1 === "number") {
          return new Vector32(v1, v1, v1);
        }
        return new Vector32(v1.x, v1.y, v1.z);
      }
      static clone(v1) {
        return Vector32.create(v1);
      }
      static add(v1, v2) {
        if (typeof v2 === "number") {
          return new Vector32(v1.x + v2, v1.y + v2, v1.z + v2);
        }
        return new Vector32(v1.x + v2.x, v1.y + v2.y, v1.z + v2.z);
      }
      static subtract(v1, v2) {
        return new Vector32(v1.x - v2.x, v1.y - v2.y, v1.z - v2.z);
      }
      static multiply(v1, v2) {
        if (typeof v2 === "number") {
          return new Vector32(v1.x * v2, v1.y * v2, v1.z * v2);
        }
        return new Vector32(v1.x * v2.x, v1.y * v2.y, v1.z * v2.z);
      }
      static divide(v1, v2) {
        if (typeof v2 === "number") {
          return new Vector32(v1.x / v2, v1.y / v2, v1.z / v2);
        }
        return new Vector32(v1.x / v2.x, v1.y / v2.y, v1.z / v2.z);
      }
      static dotProduct(v1, v2) {
        return v1.x * v2.x + v1.y * v2.y + v1.z * v2.z;
      }
      static crossProduct(v1, v2) {
        const x = v1.y * v2.z - v1.z * v2.y;
        const y = v1.z * v2.x - v1.z * v2.z;
        const z = v1.x * v2.y - v1.z * v2.x;
        return new Vector32(x, y, z);
      }
      static normalize(v) {
        return Vector32.divide(v, v.Length);
      }
      clone() {
        return new Vector32(this.x, this.y, this.z);
      }
      distanceSquared(v) {
        const w = this.subtract(v);
        return Vector32.dotProduct(w, w);
      }
      distance(v) {
        return Math.sqrt(this.distanceSquared(v));
      }
      get normalize() {
        return Vector32.normalize(this);
      }
      crossProduct(v) {
        return Vector32.crossProduct(this, v);
      }
      dotProduct(v) {
        return Vector32.dotProduct(this, v);
      }
      add(v) {
        return Vector32.add(this, v);
      }
      subtract(v) {
        return Vector32.subtract(this, v);
      }
      multiply(v) {
        return Vector32.multiply(this, v);
      }
      divide(v) {
        return Vector32.divide(this, v);
      }
      replace(v) {
        this.x = v.x;
        this.y = v.y;
        this.z = v.z;
      }
      get Length() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
      }
    };
    exports.Vector3 = Vector32;
  }
});

// ../../node_modules/fivem-js/lib/utils/Math.js
var require_Math = __commonJS({
  "../../node_modules/fivem-js/lib/utils/Math.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getRandomInt = exports.clamp = void 0;
    function clamp(num, min, max) {
      return num <= min ? min : num >= max ? max : num;
    }
    exports.clamp = clamp;
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    }
    exports.getRandomInt = getRandomInt;
  }
});

// ../../node_modules/fivem-js/lib/utils/String.js
var require_String = __commonJS({
  "../../node_modules/fivem-js/lib/utils/String.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.measureString = exports.measureStringWidthNoConvert = exports.stringToArray = void 0;
    var __1 = require_lib();
    var Math_1 = require_Math();
    function stringToArray(input) {
      let stringsNeeded = 1;
      if (input.length > 99) {
        stringsNeeded = Math.ceil(input.length / 99);
      }
      const outputString = new Array(stringsNeeded);
      for (let i = 0; i < stringsNeeded; i++) {
        outputString[i] = input.substring(i * 99, i * 99 + Math_1.clamp(input.substring(i * 99).length, 0, 99));
      }
      return outputString;
    }
    exports.stringToArray = stringToArray;
    function measureStringWidthNoConvert(input, font = __1.Font.ChaletLondon, scale = 0) {
      SetTextEntryForWidth("STRING");
      __1.Text.addLongString(input);
      SetTextFont(font);
      SetTextScale(1, scale);
      return GetTextScreenWidth(false);
    }
    exports.measureStringWidthNoConvert = measureStringWidthNoConvert;
    function measureString(str, font, scale, screenWidth = __1.Screen.ScaledWidth) {
      return this.measureStringWidthNoConvert(str, font, scale) * screenWidth;
    }
    exports.measureString = measureString;
  }
});

// ../../node_modules/fivem-js/lib/utils/LiteEvent.js
var require_LiteEvent = __commonJS({
  "../../node_modules/fivem-js/lib/utils/LiteEvent.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LiteEvent = void 0;
    var LiteEvent = class {
      constructor() {
        this.handlers = [];
      }
      on(handler) {
        this.handlers.push(handler);
      }
      off(handler) {
        this.handlers = this.handlers.filter((h) => h !== handler);
      }
      emit(...args) {
        this.handlers.slice(0).forEach((h) => {
          h(...args);
        });
      }
      expose() {
        return this;
      }
    };
    exports.LiteEvent = LiteEvent;
  }
});

// ../../node_modules/fivem-js/lib/utils/PointF.js
var require_PointF = __commonJS({
  "../../node_modules/fivem-js/lib/utils/PointF.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PointF = void 0;
    var PointF = class {
      constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
      }
      static empty() {
        return new PointF(0, 0, 0);
      }
    };
    exports.PointF = PointF;
  }
});

// ../../node_modules/fivem-js/lib/utils/UUIDV4.js
var require_UUIDV4 = __commonJS({
  "../../node_modules/fivem-js/lib/utils/UUIDV4.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.uuidv4 = void 0;
    function uuidv4() {
      let uuid = "";
      for (let ii = 0; ii < 32; ii += 1) {
        switch (ii) {
          case 8:
          case 20:
            uuid += "-";
            uuid += (Math.random() * 16 | 0).toString(16);
            break;
          case 12:
            uuid += "-";
            uuid += "4";
            break;
          case 16:
            uuid += "-";
            uuid += (Math.random() * 4 | 8).toString(16);
            break;
          default:
            uuid += (Math.random() * 16 | 0).toString(16);
        }
      }
      return uuid;
    }
    exports.uuidv4 = uuidv4;
  }
});

// ../../node_modules/fivem-js/lib/utils/Point.js
var require_Point = __commonJS({
  "../../node_modules/fivem-js/lib/utils/Point.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Point = void 0;
    var Point = class {
      constructor(x = 0, y = 0) {
        this.X = x;
        this.Y = y;
      }
      static parse(arg) {
        let point = new Point();
        if (arg) {
          if (typeof arg === "object") {
            if (Array.isArray(arg)) {
              if (arg.length === 2) {
                point = new Point(arg[0], arg[1]);
              }
            } else if (arg.X && arg.Y) {
              point = new Point(arg.X, arg.Y);
            }
          } else {
            if (arg.indexOf(",") !== -1) {
              const arr = arg.split(",");
              point = new Point(parseFloat(arr[0]), parseFloat(arr[1]));
            }
          }
        }
        return point;
      }
    };
    exports.Point = Point;
  }
});

// ../../node_modules/fivem-js/lib/utils/Color.js
var require_Color = __commonJS({
  "../../node_modules/fivem-js/lib/utils/Color.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Color = void 0;
    var Color = class {
      constructor(a = 255, r, g, b) {
        this.a = a;
        this.r = r;
        this.g = g;
        this.b = b;
      }
      static fromArgb(a, r, g, b) {
        return new Color(a, r, g, b);
      }
      static fromRgb(r, g, b) {
        return new Color(255, r, g, b);
      }
    };
    exports.Color = Color;
    Color.empty = new Color(0, 0, 0, 0);
    Color.transparent = new Color(0, 0, 0, 0);
    Color.black = new Color(255, 0, 0, 0);
    Color.white = new Color(255, 255, 255, 255);
    Color.whiteSmoke = new Color(255, 245, 245, 245);
  }
});

// ../../node_modules/fivem-js/lib/utils/Size.js
var require_Size = __commonJS({
  "../../node_modules/fivem-js/lib/utils/Size.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Size = void 0;
    var Size = class {
      constructor(w = 0, h = 0) {
        this.width = w;
        this.height = h;
      }
    };
    exports.Size = Size;
  }
});

// ../../node_modules/fivem-js/lib/utils/Quaternion.js
var require_Quaternion = __commonJS({
  "../../node_modules/fivem-js/lib/utils/Quaternion.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Quaternion = void 0;
    var Vector3_1 = require_Vector3();
    var Quaternion = class {
      constructor(valueXOrVector, yOrW, z, w) {
        if (valueXOrVector instanceof Vector3_1.Vector3) {
          this.x = valueXOrVector.x;
          this.y = valueXOrVector.y;
          this.z = valueXOrVector.z;
          this.w = yOrW;
        } else if (yOrW === void 0) {
          this.x = valueXOrVector;
          this.y = valueXOrVector;
          this.z = valueXOrVector;
          this.w = valueXOrVector;
        } else {
          this.x = valueXOrVector;
          this.y = yOrW;
          this.z = z;
          this.w = w;
        }
      }
    };
    exports.Quaternion = Quaternion;
  }
});

// ../../node_modules/fivem-js/lib/utils/index.js
var require_utils = __commonJS({
  "../../node_modules/fivem-js/lib/utils/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Quaternion = exports.Size = exports.getRandomInt = exports.clamp = exports.Color = exports.Point = exports.uuidv4 = exports.PointF = exports.LiteEvent = exports.measureStringWidthNoConvert = exports.measureString = exports.stringToArray = exports.Vector3 = void 0;
    var Vector3_1 = require_Vector3();
    Object.defineProperty(exports, "Vector3", { enumerable: true, get: function() {
      return Vector3_1.Vector3;
    } });
    var String_1 = require_String();
    Object.defineProperty(exports, "stringToArray", { enumerable: true, get: function() {
      return String_1.stringToArray;
    } });
    Object.defineProperty(exports, "measureString", { enumerable: true, get: function() {
      return String_1.measureString;
    } });
    Object.defineProperty(exports, "measureStringWidthNoConvert", { enumerable: true, get: function() {
      return String_1.measureStringWidthNoConvert;
    } });
    var LiteEvent_1 = require_LiteEvent();
    Object.defineProperty(exports, "LiteEvent", { enumerable: true, get: function() {
      return LiteEvent_1.LiteEvent;
    } });
    var PointF_1 = require_PointF();
    Object.defineProperty(exports, "PointF", { enumerable: true, get: function() {
      return PointF_1.PointF;
    } });
    var UUIDV4_1 = require_UUIDV4();
    Object.defineProperty(exports, "uuidv4", { enumerable: true, get: function() {
      return UUIDV4_1.uuidv4;
    } });
    var Point_1 = require_Point();
    Object.defineProperty(exports, "Point", { enumerable: true, get: function() {
      return Point_1.Point;
    } });
    var Color_1 = require_Color();
    Object.defineProperty(exports, "Color", { enumerable: true, get: function() {
      return Color_1.Color;
    } });
    var Math_1 = require_Math();
    Object.defineProperty(exports, "clamp", { enumerable: true, get: function() {
      return Math_1.clamp;
    } });
    Object.defineProperty(exports, "getRandomInt", { enumerable: true, get: function() {
      return Math_1.getRandomInt;
    } });
    var Size_1 = require_Size();
    Object.defineProperty(exports, "Size", { enumerable: true, get: function() {
      return Size_1.Size;
    } });
    var Quaternion_1 = require_Quaternion();
    Object.defineProperty(exports, "Quaternion", { enumerable: true, get: function() {
      return Quaternion_1.Quaternion;
    } });
  }
});

// ../../node_modules/fivem-js/lib/Blip.js
var require_Blip2 = __commonJS({
  "../../node_modules/fivem-js/lib/Blip.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Blip = void 0;
    var utils_1 = require_utils();
    var models_1 = require_models();
    var Blip = class {
      constructor(handle) {
        this.handle = handle;
      }
      get Handle() {
        return this.handle;
      }
      get Position() {
        const coords = GetBlipInfoIdCoord(this.handle);
        return new utils_1.Vector3(coords[0], coords[1], coords[2]);
      }
      set Position(location) {
        SetBlipCoords(this.handle, location.x, location.y, location.z);
      }
      set Rotation(rotation) {
        SetBlipRotation(this.handle, rotation);
      }
      set Scale(scale) {
        SetBlipScale(this.handle, scale);
      }
      get Type() {
        return GetBlipInfoIdType(this.handle);
      }
      get Alpha() {
        return GetBlipAlpha(this.handle);
      }
      set Alpha(alpha) {
        SetBlipAlpha(this.handle, alpha);
      }
      set Priority(priority) {
        SetBlipPriority(this.handle, priority);
      }
      set NumberLabel(number) {
        ShowNumberOnBlip(this.handle, number);
      }
      get Color() {
        return GetBlipColour(this.handle);
      }
      set Color(color) {
        SetBlipColour(this.handle, color);
      }
      get Sprite() {
        return GetBlipSprite(this.handle);
      }
      set Sprite(sprite) {
        SetBlipSprite(this.handle, sprite);
      }
      set Display(display) {
        SetBlipDisplay(this.handle, display);
      }
      set Name(name) {
        BeginTextCommandSetBlipName("STRING");
        AddTextComponentSubstringPlayerName(name);
        EndTextCommandSetBlipName(this.handle);
      }
      setNameToPlayerName(player) {
        SetBlipNameToPlayerName(this.handle, player.Handle);
      }
      get Entity() {
        return models_1.Entity.fromHandle(GetBlipInfoIdEntityIndex(this.handle));
      }
      set ShowHeadingIndicator(show) {
        ShowHeadingIndicatorOnBlip(this.handle, show);
      }
      set ShowRoute(show) {
        SetBlipRoute(this.handle, show);
      }
      set IsFriendly(friendly) {
        SetBlipAsFriendly(this.handle, friendly);
      }
      set IsFriend(friend) {
        SetBlipFriend(this.handle, friend);
      }
      set IsCrew(crew) {
        SetBlipCrew(this.handle, crew);
      }
      get IsFlashing() {
        return !!IsBlipFlashing(this.handle);
      }
      set IsFlashing(flashing) {
        SetBlipFlashes(this.handle, flashing);
      }
      get IsOnMinimap() {
        return !!IsBlipOnMinimap(this.handle);
      }
      get IsShortRange() {
        return !!IsBlipShortRange(this.handle);
      }
      set IsShortRange(shortRange) {
        SetBlipAsShortRange(this.handle, shortRange);
      }
      removeNumberLabel() {
        HideNumberOnBlip(this.handle);
      }
      delete() {
        if (this.exists()) {
          RemoveBlip(this.handle);
        }
      }
      exists() {
        return !!DoesBlipExist(this.handle);
      }
    };
    exports.Blip = Blip;
  }
});

// ../../node_modules/fivem-js/lib/hashes/MaterialHash.js
var require_MaterialHash = __commonJS({
  "../../node_modules/fivem-js/lib/hashes/MaterialHash.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MaterialHash = void 0;
    var MaterialHash;
    (function(MaterialHash2) {
      MaterialHash2[MaterialHash2["None"] = 0] = "None";
      MaterialHash2[MaterialHash2["Unk"] = 2519482235] = "Unk";
      MaterialHash2[MaterialHash2["Concrete"] = 1187676648] = "Concrete";
      MaterialHash2[MaterialHash2["ConcretePothole"] = 359120722] = "ConcretePothole";
      MaterialHash2[MaterialHash2["ConcreteDusty"] = 3210327185] = "ConcreteDusty";
      MaterialHash2[MaterialHash2["Tarmac"] = 282940568] = "Tarmac";
      MaterialHash2[MaterialHash2["TarmacPainted"] = 2993614768] = "TarmacPainted";
      MaterialHash2[MaterialHash2["TarmacPothole"] = 1886546517] = "TarmacPothole";
      MaterialHash2[MaterialHash2["RumbleStrip"] = 4044799021] = "RumbleStrip";
      MaterialHash2[MaterialHash2["BreezeBlock"] = 3340854742] = "BreezeBlock";
      MaterialHash2[MaterialHash2["Rock"] = 3454750755] = "Rock";
      MaterialHash2[MaterialHash2["RockMossy"] = 4170197704] = "RockMossy";
      MaterialHash2[MaterialHash2["Stone"] = 765206029] = "Stone";
      MaterialHash2[MaterialHash2["Cobblestone"] = 576169331] = "Cobblestone";
      MaterialHash2[MaterialHash2["Brick"] = 1639053622] = "Brick";
      MaterialHash2[MaterialHash2["Marble"] = 1945073303] = "Marble";
      MaterialHash2[MaterialHash2["PavingSlab"] = 1907048430] = "PavingSlab";
      MaterialHash2[MaterialHash2["SandstoneSolid"] = 592446772] = "SandstoneSolid";
      MaterialHash2[MaterialHash2["SandstoneBrittle"] = 1913209870] = "SandstoneBrittle";
      MaterialHash2[MaterialHash2["SandLoose"] = 2699818980] = "SandLoose";
      MaterialHash2[MaterialHash2["SandCompact"] = 510490462] = "SandCompact";
      MaterialHash2[MaterialHash2["SandWet"] = 909950165] = "SandWet";
      MaterialHash2[MaterialHash2["SandTrack"] = 2387446527] = "SandTrack";
      MaterialHash2[MaterialHash2["SandUnderwater"] = 3158909604] = "SandUnderwater";
      MaterialHash2[MaterialHash2["SandDryDeep"] = 509508168] = "SandDryDeep";
      MaterialHash2[MaterialHash2["SandWetDeep"] = 1288448767] = "SandWetDeep";
      MaterialHash2[MaterialHash2["Ice"] = 3508906581] = "Ice";
      MaterialHash2[MaterialHash2["IceTarmac"] = 2363942873] = "IceTarmac";
      MaterialHash2[MaterialHash2["SnowLoose"] = 2357397706] = "SnowLoose";
      MaterialHash2[MaterialHash2["SnowCompact"] = 3416406407] = "SnowCompact";
      MaterialHash2[MaterialHash2["SnowDeep"] = 1619704960] = "SnowDeep";
      MaterialHash2[MaterialHash2["SnowTarmac"] = 1550304810] = "SnowTarmac";
      MaterialHash2[MaterialHash2["GravelSmall"] = 951832588] = "GravelSmall";
      MaterialHash2[MaterialHash2["GravelLarge"] = 2128369009] = "GravelLarge";
      MaterialHash2[MaterialHash2["GravelDeep"] = 3938260814] = "GravelDeep";
      MaterialHash2[MaterialHash2["GravelTrainTrack"] = 1925605558] = "GravelTrainTrack";
      MaterialHash2[MaterialHash2["DirtTrack"] = 2409420175] = "DirtTrack";
      MaterialHash2[MaterialHash2["MudHard"] = 2352068586] = "MudHard";
      MaterialHash2[MaterialHash2["MudPothole"] = 312396330] = "MudPothole";
      MaterialHash2[MaterialHash2["MudSoft"] = 1635937914] = "MudSoft";
      MaterialHash2[MaterialHash2["MudUnderwater"] = 4021477129] = "MudUnderwater";
      MaterialHash2[MaterialHash2["MudDeep"] = 1109728704] = "MudDeep";
      MaterialHash2[MaterialHash2["Marsh"] = 223086562] = "Marsh";
      MaterialHash2[MaterialHash2["MarshDeep"] = 1584636462] = "MarshDeep";
      MaterialHash2[MaterialHash2["Soil"] = 3594309083] = "Soil";
      MaterialHash2[MaterialHash2["ClayHard"] = 1144315879] = "ClayHard";
      MaterialHash2[MaterialHash2["ClaySoft"] = 560985072] = "ClaySoft";
      MaterialHash2[MaterialHash2["GrassLong"] = 3833216577] = "GrassLong";
      MaterialHash2[MaterialHash2["Grass"] = 1333033863] = "Grass";
      MaterialHash2[MaterialHash2["GrassShort"] = 3008270349] = "GrassShort";
      MaterialHash2[MaterialHash2["Hay"] = 2461440131] = "Hay";
      MaterialHash2[MaterialHash2["Bushes"] = 581794674] = "Bushes";
      MaterialHash2[MaterialHash2["Twigs"] = 3381615457] = "Twigs";
      MaterialHash2[MaterialHash2["Leaves"] = 2253637325] = "Leaves";
      MaterialHash2[MaterialHash2["Woodchips"] = 3985845843] = "Woodchips";
      MaterialHash2[MaterialHash2["TreeBark"] = 2379541433] = "TreeBark";
      MaterialHash2[MaterialHash2["MetalSolidSmall"] = 2847687191] = "MetalSolidSmall";
      MaterialHash2[MaterialHash2["MetalSolidMedium"] = 3929336056] = "MetalSolidMedium";
      MaterialHash2[MaterialHash2["MetalSolidLarge"] = 752131025] = "MetalSolidLarge";
      MaterialHash2[MaterialHash2["MetalHollowSmall"] = 15972667] = "MetalHollowSmall";
      MaterialHash2[MaterialHash2["MetalHollowMedium"] = 1849540536] = "MetalHollowMedium";
      MaterialHash2[MaterialHash2["MetalHollowLarge"] = 3711753465] = "MetalHollowLarge";
      MaterialHash2[MaterialHash2["MetalChainlinkSmall"] = 762193613] = "MetalChainlinkSmall";
      MaterialHash2[MaterialHash2["MetalChainlinkLarge"] = 125958708] = "MetalChainlinkLarge";
      MaterialHash2[MaterialHash2["MetalCorrugatedIron"] = 834144982] = "MetalCorrugatedIron";
      MaterialHash2[MaterialHash2["MetalGrille"] = 3868849285] = "MetalGrille";
      MaterialHash2[MaterialHash2["MetalRailing"] = 2100727187] = "MetalRailing";
      MaterialHash2[MaterialHash2["MetalDuct"] = 1761524221] = "MetalDuct";
      MaterialHash2[MaterialHash2["MetalGarageDoor"] = 4063706601] = "MetalGarageDoor";
      MaterialHash2[MaterialHash2["MetalManhole"] = 3539969597] = "MetalManhole";
      MaterialHash2[MaterialHash2["WoodSolidSmall"] = 3895095068] = "WoodSolidSmall";
      MaterialHash2[MaterialHash2["WoodSolidMedium"] = 555004797] = "WoodSolidMedium";
      MaterialHash2[MaterialHash2["WoodSolidLarge"] = 815762359] = "WoodSolidLarge";
      MaterialHash2[MaterialHash2["WoodSolidPolished"] = 126470059] = "WoodSolidPolished";
      MaterialHash2[MaterialHash2["WoodFloorDusty"] = 3545514974] = "WoodFloorDusty";
      MaterialHash2[MaterialHash2["WoodHollowSmall"] = 1993976879] = "WoodHollowSmall";
      MaterialHash2[MaterialHash2["WoodHollowMedium"] = 3929491133] = "WoodHollowMedium";
      MaterialHash2[MaterialHash2["WoodHollowLarge"] = 3369548007] = "WoodHollowLarge";
      MaterialHash2[MaterialHash2["WoodChipboard"] = 1176309403] = "WoodChipboard";
      MaterialHash2[MaterialHash2["WoodOldCreaky"] = 722686013] = "WoodOldCreaky";
      MaterialHash2[MaterialHash2["WoodHighDensity"] = 2552123904] = "WoodHighDensity";
      MaterialHash2[MaterialHash2["WoodLattice"] = 2011204130] = "WoodLattice";
      MaterialHash2[MaterialHash2["Ceramic"] = 3108646581] = "Ceramic";
      MaterialHash2[MaterialHash2["RoofTile"] = 1755188853] = "RoofTile";
      MaterialHash2[MaterialHash2["RoofFelt"] = 2877802565] = "RoofFelt";
      MaterialHash2[MaterialHash2["Fibreglass"] = 1354180827] = "Fibreglass";
      MaterialHash2[MaterialHash2["Tarpaulin"] = 3652308448] = "Tarpaulin";
      MaterialHash2[MaterialHash2["Plastic"] = 2221655295] = "Plastic";
      MaterialHash2[MaterialHash2["PlasticHollow"] = 627123e3] = "PlasticHollow";
      MaterialHash2[MaterialHash2["PlasticHighDensity"] = 2668971817] = "PlasticHighDensity";
      MaterialHash2[MaterialHash2["PlasticClear"] = 2435246283] = "PlasticClear";
      MaterialHash2[MaterialHash2["PlasticHollowClear"] = 772722531] = "PlasticHollowClear";
      MaterialHash2[MaterialHash2["PlasticHighDensityClear"] = 2956494126] = "PlasticHighDensityClear";
      MaterialHash2[MaterialHash2["FibreglassHollow"] = 3528912198] = "FibreglassHollow";
      MaterialHash2[MaterialHash2["Rubber"] = 4149231379] = "Rubber";
      MaterialHash2[MaterialHash2["RubberHollow"] = 3511032624] = "RubberHollow";
      MaterialHash2[MaterialHash2["Linoleum"] = 289630530] = "Linoleum";
      MaterialHash2[MaterialHash2["Laminate"] = 1845676458] = "Laminate";
      MaterialHash2[MaterialHash2["CarpetSolid"] = 669292054] = "CarpetSolid";
      MaterialHash2[MaterialHash2["CarpetSolidDusty"] = 158576196] = "CarpetSolidDusty";
      MaterialHash2[MaterialHash2["CarpetFloorboard"] = 2898482353] = "CarpetFloorboard";
      MaterialHash2[MaterialHash2["Cloth"] = 122789469] = "Cloth";
      MaterialHash2[MaterialHash2["PlasterSolid"] = 3720844863] = "PlasterSolid";
      MaterialHash2[MaterialHash2["PlasterBrittle"] = 4043078398] = "PlasterBrittle";
      MaterialHash2[MaterialHash2["CardboardSheet"] = 236511221] = "CardboardSheet";
      MaterialHash2[MaterialHash2["CardboardBox"] = 2885912856] = "CardboardBox";
      MaterialHash2[MaterialHash2["Paper"] = 474149820] = "Paper";
      MaterialHash2[MaterialHash2["Foam"] = 808719444] = "Foam";
      MaterialHash2[MaterialHash2["FeatherPillow"] = 1341866303] = "FeatherPillow";
      MaterialHash2[MaterialHash2["Polystyrene"] = 2538039965] = "Polystyrene";
      MaterialHash2[MaterialHash2["Leather"] = 3724496396] = "Leather";
      MaterialHash2[MaterialHash2["Tvscreen"] = 1429989756] = "Tvscreen";
      MaterialHash2[MaterialHash2["SlattedBlinds"] = 673696729] = "SlattedBlinds";
      MaterialHash2[MaterialHash2["GlassShootThrough"] = 937503243] = "GlassShootThrough";
      MaterialHash2[MaterialHash2["GlassBulletproof"] = 244521486] = "GlassBulletproof";
      MaterialHash2[MaterialHash2["GlassOpaque"] = 1500272081] = "GlassOpaque";
      MaterialHash2[MaterialHash2["Perspex"] = 2675173228] = "Perspex";
      MaterialHash2[MaterialHash2["CarMetal"] = 4201905313] = "CarMetal";
      MaterialHash2[MaterialHash2["CarPlastic"] = 2137197282] = "CarPlastic";
      MaterialHash2[MaterialHash2["CarSofttop"] = 3315319434] = "CarSofttop";
      MaterialHash2[MaterialHash2["CarSofttopClear"] = 2130571536] = "CarSofttopClear";
      MaterialHash2[MaterialHash2["CarGlassWeak"] = 1247281098] = "CarGlassWeak";
      MaterialHash2[MaterialHash2["CarGlassMedium"] = 602884284] = "CarGlassMedium";
      MaterialHash2[MaterialHash2["CarGlassStrong"] = 1070994698] = "CarGlassStrong";
      MaterialHash2[MaterialHash2["CarGlassBulletproof"] = 2573051366] = "CarGlassBulletproof";
      MaterialHash2[MaterialHash2["CarGlassOpaque"] = 513061559] = "CarGlassOpaque";
      MaterialHash2[MaterialHash2["Water"] = 435688960] = "Water";
      MaterialHash2[MaterialHash2["Blood"] = 5236042] = "Blood";
      MaterialHash2[MaterialHash2["Oil"] = 3660485991] = "Oil";
      MaterialHash2[MaterialHash2["Petrol"] = 2660782956] = "Petrol";
      MaterialHash2[MaterialHash2["FreshMeat"] = 868733839] = "FreshMeat";
      MaterialHash2[MaterialHash2["DriedMeat"] = 2849806867] = "DriedMeat";
      MaterialHash2[MaterialHash2["EmissiveGlass"] = 1501078253] = "EmissiveGlass";
      MaterialHash2[MaterialHash2["EmissivePlastic"] = 1059629996] = "EmissivePlastic";
      MaterialHash2[MaterialHash2["VfxMetalElectrified"] = 3985833031] = "VfxMetalElectrified";
      MaterialHash2[MaterialHash2["VfxMetalWaterTower"] = 611561919] = "VfxMetalWaterTower";
      MaterialHash2[MaterialHash2["VfxMetalSteam"] = 3603690002] = "VfxMetalSteam";
      MaterialHash2[MaterialHash2["VfxMetalFlame"] = 332778253] = "VfxMetalFlame";
      MaterialHash2[MaterialHash2["PhysNoFriction"] = 1666473731] = "PhysNoFriction";
      MaterialHash2[MaterialHash2["PhysGolfBall"] = 2601153738] = "PhysGolfBall";
      MaterialHash2[MaterialHash2["PhysTennisBall"] = 4038262533] = "PhysTennisBall";
      MaterialHash2[MaterialHash2["PhysCaster"] = 4059664613] = "PhysCaster";
      MaterialHash2[MaterialHash2["PhysCasterRusty"] = 2016463089] = "PhysCasterRusty";
      MaterialHash2[MaterialHash2["PhysCarVoid"] = 1345867677] = "PhysCarVoid";
      MaterialHash2[MaterialHash2["PhysPedCapsule"] = 4003336261] = "PhysPedCapsule";
      MaterialHash2[MaterialHash2["PhysElectricFence"] = 3124923563] = "PhysElectricFence";
      MaterialHash2[MaterialHash2["PhysElectricMetal"] = 2281206151] = "PhysElectricMetal";
      MaterialHash2[MaterialHash2["PhysBarbedWire"] = 2751643840] = "PhysBarbedWire";
      MaterialHash2[MaterialHash2["PhysPooltableSurface"] = 605776921] = "PhysPooltableSurface";
      MaterialHash2[MaterialHash2["PhysPooltableCushion"] = 972939963] = "PhysPooltableCushion";
      MaterialHash2[MaterialHash2["PhysPooltableBall"] = 3546625734] = "PhysPooltableBall";
      MaterialHash2[MaterialHash2["Buttocks"] = 483400232] = "Buttocks";
      MaterialHash2[MaterialHash2["ThighLeft"] = 3834431425] = "ThighLeft";
      MaterialHash2[MaterialHash2["ShinLeft"] = 652772852] = "ShinLeft";
      MaterialHash2[MaterialHash2["FootLeft"] = 1926285543] = "FootLeft";
      MaterialHash2[MaterialHash2["ThighRight"] = 4057986041] = "ThighRight";
      MaterialHash2[MaterialHash2["ShinRight"] = 3848931141] = "ShinRight";
      MaterialHash2[MaterialHash2["FootRight"] = 2925830612] = "FootRight";
      MaterialHash2[MaterialHash2["Spine0"] = 2372680412] = "Spine0";
      MaterialHash2[MaterialHash2["Spine1"] = 3154854427] = "Spine1";
      MaterialHash2[MaterialHash2["Spine2"] = 1457572381] = "Spine2";
      MaterialHash2[MaterialHash2["Spine3"] = 32752644] = "Spine3";
      MaterialHash2[MaterialHash2["ClavicleLeft"] = 2825350831] = "ClavicleLeft";
      MaterialHash2[MaterialHash2["UpperArmLeft"] = 3784624938] = "UpperArmLeft";
      MaterialHash2[MaterialHash2["LowerArmLeft"] = 1045062756] = "LowerArmLeft";
      MaterialHash2[MaterialHash2["HandLeft"] = 113101985] = "HandLeft";
      MaterialHash2[MaterialHash2["ClavicleRight"] = 2737678298] = "ClavicleRight";
      MaterialHash2[MaterialHash2["UpperArmRight"] = 1501153539] = "UpperArmRight";
      MaterialHash2[MaterialHash2["LowerArmRight"] = 1777921590] = "LowerArmRight";
      MaterialHash2[MaterialHash2["HandRight"] = 2000961972] = "HandRight";
      MaterialHash2[MaterialHash2["Neck"] = 1718294164] = "Neck";
      MaterialHash2[MaterialHash2["Head"] = 3559574543] = "Head";
      MaterialHash2[MaterialHash2["AnimalDefault"] = 286224918] = "AnimalDefault";
      MaterialHash2[MaterialHash2["CarEngine"] = 2378027672] = "CarEngine";
      MaterialHash2[MaterialHash2["Puddle"] = 999829011] = "Puddle";
      MaterialHash2[MaterialHash2["ConcretePavement"] = 2015599386] = "ConcretePavement";
      MaterialHash2[MaterialHash2["BrickPavement"] = 3147605720] = "BrickPavement";
      MaterialHash2[MaterialHash2["PhysDynamicCoverBound"] = 2247498441] = "PhysDynamicCoverBound";
      MaterialHash2[MaterialHash2["VfxWoodBeerBarrel"] = 998201806] = "VfxWoodBeerBarrel";
      MaterialHash2[MaterialHash2["WoodHighFriction"] = 2154880249] = "WoodHighFriction";
      MaterialHash2[MaterialHash2["RockNoinst"] = 127813971] = "RockNoinst";
      MaterialHash2[MaterialHash2["BushesNoinst"] = 1441114862] = "BushesNoinst";
      MaterialHash2[MaterialHash2["MetalSolidRoadSurface"] = 3565854962] = "MetalSolidRoadSurface";
      MaterialHash2[MaterialHash2["StuntRampSurface"] = 2206792300] = "StuntRampSurface";
      MaterialHash2[MaterialHash2["Temp01"] = 746881105] = "Temp01";
      MaterialHash2[MaterialHash2["Temp02"] = 2316997185] = "Temp02";
      MaterialHash2[MaterialHash2["Temp03"] = 1911121241] = "Temp03";
      MaterialHash2[MaterialHash2["Temp04"] = 1923995104] = "Temp04";
      MaterialHash2[MaterialHash2["Temp05"] = 2901304848] = "Temp05";
      MaterialHash2[MaterialHash2["Temp06"] = 1061250033] = "Temp06";
      MaterialHash2[MaterialHash2["Temp07"] = 2529443614] = "Temp07";
      MaterialHash2[MaterialHash2["Temp08"] = 1343679702] = "Temp08";
      MaterialHash2[MaterialHash2["Temp09"] = 1026054937] = "Temp09";
      MaterialHash2[MaterialHash2["Temp10"] = 63305994] = "Temp10";
      MaterialHash2[MaterialHash2["Temp11"] = 47470226] = "Temp11";
      MaterialHash2[MaterialHash2["Temp12"] = 702596674] = "Temp12";
      MaterialHash2[MaterialHash2["Temp13"] = 2657481383] = "Temp13";
      MaterialHash2[MaterialHash2["Temp14"] = 3649011722] = "Temp14";
      MaterialHash2[MaterialHash2["Temp15"] = 2710969365] = "Temp15";
      MaterialHash2[MaterialHash2["Temp16"] = 2782232023] = "Temp16";
      MaterialHash2[MaterialHash2["Temp17"] = 1011960114] = "Temp17";
      MaterialHash2[MaterialHash2["Temp18"] = 1354993138] = "Temp18";
      MaterialHash2[MaterialHash2["Temp19"] = 3493162850] = "Temp19";
      MaterialHash2[MaterialHash2["Temp20"] = 2242086891] = "Temp20";
      MaterialHash2[MaterialHash2["Temp21"] = 3257211236] = "Temp21";
      MaterialHash2[MaterialHash2["Temp22"] = 3674578943] = "Temp22";
      MaterialHash2[MaterialHash2["Temp23"] = 465002639] = "Temp23";
      MaterialHash2[MaterialHash2["Temp24"] = 1963820161] = "Temp24";
      MaterialHash2[MaterialHash2["Temp25"] = 1952288305] = "Temp25";
      MaterialHash2[MaterialHash2["Temp26"] = 3178714198] = "Temp26";
      MaterialHash2[MaterialHash2["Temp27"] = 889255498] = "Temp27";
      MaterialHash2[MaterialHash2["Temp28"] = 3115293198] = "Temp28";
      MaterialHash2[MaterialHash2["Temp29"] = 1078418101] = "Temp29";
      MaterialHash2[MaterialHash2["Temp30"] = 13626292] = "Temp30";
    })(MaterialHash = exports.MaterialHash || (exports.MaterialHash = {}));
  }
});

// ../../node_modules/fivem-js/lib/hashes/PedHash.js
var require_PedHash = __commonJS({
  "../../node_modules/fivem-js/lib/hashes/PedHash.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PedHash = void 0;
    var PedHash;
    (function(PedHash2) {
      PedHash2[PedHash2["Michael"] = 225514697] = "Michael";
      PedHash2[PedHash2["Franklin"] = 2602752943] = "Franklin";
      PedHash2[PedHash2["Trevor"] = 2608926626] = "Trevor";
      PedHash2[PedHash2["Abigail"] = 1074457665] = "Abigail";
      PedHash2[PedHash2["Agent"] = 3614493108] = "Agent";
      PedHash2[PedHash2["Agent14"] = 4227433577] = "Agent14";
      PedHash2[PedHash2["AmandaTownley"] = 1830688247] = "AmandaTownley";
      PedHash2[PedHash2["Andreas"] = 1206185632] = "Andreas";
      PedHash2[PedHash2["Ashley"] = 2129936603] = "Ashley";
      PedHash2[PedHash2["AviSchwartzman"] = 939183526] = "AviSchwartzman";
      PedHash2[PedHash2["Ballasog"] = 2802535058] = "Ballasog";
      PedHash2[PedHash2["Bankman"] = 2426248831] = "Bankman";
      PedHash2[PedHash2["Barry"] = 797459875] = "Barry";
      PedHash2[PedHash2["Bestmen"] = 1464257942] = "Bestmen";
      PedHash2[PedHash2["Beverly"] = 3181518428] = "Beverly";
      PedHash2[PedHash2["Brad"] = 3183167778] = "Brad";
      PedHash2[PedHash2["Bride"] = 1633872967] = "Bride";
      PedHash2[PedHash2["Car3Guy1"] = 2230970679] = "Car3Guy1";
      PedHash2[PedHash2["Car3Guy2"] = 1975732938] = "Car3Guy2";
      PedHash2[PedHash2["Casey"] = 3774489940] = "Casey";
      PedHash2[PedHash2["Chef"] = 1240128502] = "Chef";
      PedHash2[PedHash2["Chef2"] = 2240322243] = "Chef2";
      PedHash2[PedHash2["Clay"] = 1825562762] = "Clay";
      PedHash2[PedHash2["Claypain"] = 2634057640] = "Claypain";
      PedHash2[PedHash2["Cletus"] = 3865252245] = "Cletus";
      PedHash2[PedHash2["CrisFormage"] = 678319271] = "CrisFormage";
      PedHash2[PedHash2["Dale"] = 1182012905] = "Dale";
      PedHash2[PedHash2["DaveNorton"] = 365775923] = "DaveNorton";
      PedHash2[PedHash2["Denise"] = 2181772221] = "Denise";
      PedHash2[PedHash2["Devin"] = 1952555184] = "Devin";
      PedHash2[PedHash2["DoaMan"] = 1646160893] = "DoaMan";
      PedHash2[PedHash2["Dom"] = 2620240008] = "Dom";
      PedHash2[PedHash2["Dreyfuss"] = 3666413874] = "Dreyfuss";
      PedHash2[PedHash2["DrFriedlander"] = 3422293493] = "DrFriedlander";
      PedHash2[PedHash2["EdToh"] = 712602007] = "EdToh";
      PedHash2[PedHash2["Fabien"] = 3499148112] = "Fabien";
      PedHash2[PedHash2["FbiSuit01"] = 988062523] = "FbiSuit01";
      PedHash2[PedHash2["Floyd"] = 2981205682] = "Floyd";
      PedHash2[PedHash2["G"] = 2216405299] = "G";
      PedHash2[PedHash2["Groom"] = 4274948997] = "Groom";
      PedHash2[PedHash2["Hao"] = 1704428387] = "Hao";
      PedHash2[PedHash2["Hunter"] = 3457361118] = "Hunter";
      PedHash2[PedHash2["Janet"] = 225287241] = "Janet";
      PedHash2[PedHash2["JayNorris"] = 2050158196] = "JayNorris";
      PedHash2[PedHash2["Jewelass"] = 257763003] = "Jewelass";
      PedHash2[PedHash2["JimmyBoston"] = 3986688045] = "JimmyBoston";
      PedHash2[PedHash2["JimmyDisanto"] = 1459905209] = "JimmyDisanto";
      PedHash2[PedHash2["JoeMinuteman"] = 3189787803] = "JoeMinuteman";
      PedHash2[PedHash2["JohnnyKlebitz"] = 2278195374] = "JohnnyKlebitz";
      PedHash2[PedHash2["Josef"] = 3776618420] = "Josef";
      PedHash2[PedHash2["Josh"] = 2040438510] = "Josh";
      PedHash2[PedHash2["KarenDaniels"] = 3948009817] = "KarenDaniels";
      PedHash2[PedHash2["KerryMcintosh"] = 1530648845] = "KerryMcintosh";
      PedHash2[PedHash2["LamarDavis"] = 1706635382] = "LamarDavis";
      PedHash2[PedHash2["Lazlow"] = 3756278757] = "Lazlow";
      PedHash2[PedHash2["LesterCrest"] = 1302784073] = "LesterCrest";
      PedHash2[PedHash2["Lifeinvad01"] = 1401530684] = "Lifeinvad01";
      PedHash2[PedHash2["Lifeinvad02"] = 666718676] = "Lifeinvad02";
      PedHash2[PedHash2["Magenta"] = 4242313482] = "Magenta";
      PedHash2[PedHash2["Malc"] = 4055673113] = "Malc";
      PedHash2[PedHash2["Manuel"] = 4248931856] = "Manuel";
      PedHash2[PedHash2["Marnie"] = 411185872] = "Marnie";
      PedHash2[PedHash2["MaryAnn"] = 2741999622] = "MaryAnn";
      PedHash2[PedHash2["Maude"] = 1005070462] = "Maude";
      PedHash2[PedHash2["Michelle"] = 3214308084] = "Michelle";
      PedHash2[PedHash2["Milton"] = 3408943538] = "Milton";
      PedHash2[PedHash2["Molly"] = 2936266209] = "Molly";
      PedHash2[PedHash2["MrK"] = 3990661997] = "MrK";
      PedHash2[PedHash2["MrsPhillips"] = 946007720] = "MrsPhillips";
      PedHash2[PedHash2["MrsThornhill"] = 503621995] = "MrsThornhill";
      PedHash2[PedHash2["Natalia"] = 3726105915] = "Natalia";
      PedHash2[PedHash2["NervousRon"] = 3170921201] = "NervousRon";
      PedHash2[PedHash2["Nigel"] = 3367442045] = "Nigel";
      PedHash2[PedHash2["OldMan1a"] = 1906124788] = "OldMan1a";
      PedHash2[PedHash2["OldMan2"] = 4011150407] = "OldMan2";
      PedHash2[PedHash2["Omega"] = 1625728984] = "Omega";
      PedHash2[PedHash2["ONeil"] = 768005095] = "ONeil";
      PedHash2[PedHash2["Orleans"] = 1641334641] = "Orleans";
      PedHash2[PedHash2["Ortega"] = 648372919] = "Ortega";
      PedHash2[PedHash2["Paper"] = 2577072326] = "Paper";
      PedHash2[PedHash2["Patricia"] = 3312325004] = "Patricia";
      PedHash2[PedHash2["Popov"] = 645279998] = "Popov";
      PedHash2[PedHash2["Paige"] = 357551935] = "Paige";
      PedHash2[PedHash2["Priest"] = 1681385341] = "Priest";
      PedHash2[PedHash2["PrologueDriver"] = 2237544099] = "PrologueDriver";
      PedHash2[PedHash2["PrologueSec01"] = 1888624839] = "PrologueSec01";
      PedHash2[PedHash2["PrologueSec02"] = 666086773] = "PrologueSec02";
      PedHash2[PedHash2["RampGang"] = 3845001836] = "RampGang";
      PedHash2[PedHash2["RampHic"] = 1165307954] = "RampHic";
      PedHash2[PedHash2["RampHipster"] = 3740245870] = "RampHipster";
      PedHash2[PedHash2["RampMex"] = 3870061732] = "RampMex";
      PedHash2[PedHash2["Rashkovsky"] = 940326374] = "Rashkovsky";
      PedHash2[PedHash2["RoccoPelosi"] = 3585757951] = "RoccoPelosi";
      PedHash2[PedHash2["RussianDrunk"] = 1024089777] = "RussianDrunk";
      PedHash2[PedHash2["ScreenWriter"] = 4293277303] = "ScreenWriter";
      PedHash2[PedHash2["SiemonYetarian"] = 1283141381] = "SiemonYetarian";
      PedHash2[PedHash2["Solomon"] = 2260598310] = "Solomon";
      PedHash2[PedHash2["SteveHains"] = 941695432] = "SteveHains";
      PedHash2[PedHash2["Stretch"] = 915948376] = "Stretch";
      PedHash2[PedHash2["Talina"] = 3885222120] = "Talina";
      PedHash2[PedHash2["Tanisha"] = 226559113] = "Tanisha";
      PedHash2[PedHash2["TaoCheng"] = 3697041061] = "TaoCheng";
      PedHash2[PedHash2["TaosTranslator"] = 2089096292] = "TaosTranslator";
      PedHash2[PedHash2["TennisCoach"] = 2721800023] = "TennisCoach";
      PedHash2[PedHash2["Terry"] = 1728056212] = "Terry";
      PedHash2[PedHash2["TomEpsilon"] = 3447159466] = "TomEpsilon";
      PedHash2[PedHash2["Tonya"] = 3402126148] = "Tonya";
      PedHash2[PedHash2["TracyDisanto"] = 3728026165] = "TracyDisanto";
      PedHash2[PedHash2["TrafficWarden"] = 1461287021] = "TrafficWarden";
      PedHash2[PedHash2["TylerDixon"] = 1382414087] = "TylerDixon";
      PedHash2[PedHash2["VagosSpeak"] = 4194109068] = "VagosSpeak";
      PedHash2[PedHash2["Wade"] = 2459507570] = "Wade";
      PedHash2[PedHash2["WeiCheng"] = 2867128955] = "WeiCheng";
      PedHash2[PedHash2["Zimbor"] = 188012277] = "Zimbor";
      PedHash2[PedHash2["AbigailCutscene"] = 2306246977] = "AbigailCutscene";
      PedHash2[PedHash2["AgentCutscene"] = 3614493108] = "AgentCutscene";
      PedHash2[PedHash2["Agent14Cutscene"] = 1841036427] = "Agent14Cutscene";
      PedHash2[PedHash2["AmandaTownleyCutscene"] = 2515474659] = "AmandaTownleyCutscene";
      PedHash2[PedHash2["AndreasCutscene"] = 3881194279] = "AndreasCutscene";
      PedHash2[PedHash2["AnitaCutscene"] = 117698822] = "AnitaCutscene";
      PedHash2[PedHash2["AntonCutscene"] = 2781317046] = "AntonCutscene";
      PedHash2[PedHash2["AshleyCutscene"] = 650367097] = "AshleyCutscene";
      PedHash2[PedHash2["AviSchwartzmanCutscene"] = 2560490906] = "AviSchwartzmanCutscene";
      PedHash2[PedHash2["BallasogCutscene"] = 2884567044] = "BallasogCutscene";
      PedHash2[PedHash2["BankmanCutscene"] = 2539657518] = "BankmanCutscene";
      PedHash2[PedHash2["BarryCutscene"] = 1767447799] = "BarryCutscene";
      PedHash2[PedHash2["BeverlyCutscene"] = 3027157846] = "BeverlyCutscene";
      PedHash2[PedHash2["BradCutscene"] = 4024807398] = "BradCutscene";
      PedHash2[PedHash2["BradCadaverCutscene"] = 1915268960] = "BradCadaverCutscene";
      PedHash2[PedHash2["BrideCutscene"] = 2193587873] = "BrideCutscene";
      PedHash2[PedHash2["BurgerDrugCutscene"] = 2363277399] = "BurgerDrugCutscene";
      PedHash2[PedHash2["Car3Guy1Cutscene"] = 71501447] = "Car3Guy1Cutscene";
      PedHash2[PedHash2["Car3Guy2Cutscene"] = 327394568] = "Car3Guy2Cutscene";
      PedHash2[PedHash2["CarBuyerCutscene"] = 2362341647] = "CarBuyerCutscene";
      PedHash2[PedHash2["CaseyCutscene"] = 3935738944] = "CaseyCutscene";
      PedHash2[PedHash2["ChefCutscene"] = 2739391114] = "ChefCutscene";
      PedHash2[PedHash2["Chef2Cutscene"] = 2925257274] = "Chef2Cutscene";
      PedHash2[PedHash2["ChinGoonCutscene"] = 2831296918] = "ChinGoonCutscene";
      PedHash2[PedHash2["ClayCutscene"] = 3687553076] = "ClayCutscene";
      PedHash2[PedHash2["CletusCutscene"] = 3404326357] = "CletusCutscene";
      PedHash2[PedHash2["CopCutscene"] = 2595446627] = "CopCutscene";
      PedHash2[PedHash2["CrisFormageCutscene"] = 3253960934] = "CrisFormageCutscene";
      PedHash2[PedHash2["CustomerCutscene"] = 2756669323] = "CustomerCutscene";
      PedHash2[PedHash2["DaleCutscene"] = 216536661] = "DaleCutscene";
      PedHash2[PedHash2["DaveNortonCutscene"] = 2240226444] = "DaveNortonCutscene";
      PedHash2[PedHash2["DebraCutscene"] = 3973074921] = "DebraCutscene";
      PedHash2[PedHash2["DeniseCutscene"] = 1870669624] = "DeniseCutscene";
      PedHash2[PedHash2["DeniseFriendCutscene"] = 3045926185] = "DeniseFriendCutscene";
      PedHash2[PedHash2["DevinCutscene"] = 788622594] = "DevinCutscene";
      PedHash2[PedHash2["DomCutscene"] = 1198698306] = "DomCutscene";
      PedHash2[PedHash2["DreyfussCutscene"] = 1012965715] = "DreyfussCutscene";
      PedHash2[PedHash2["DrFriedlanderCutscene"] = 2745392175] = "DrFriedlanderCutscene";
      PedHash2[PedHash2["FabienCutscene"] = 1191403201] = "FabienCutscene";
      PedHash2[PedHash2["FbiSuit01Cutscene"] = 1482427218] = "FbiSuit01Cutscene";
      PedHash2[PedHash2["FloydCutscene"] = 103106535] = "FloydCutscene";
      PedHash2[PedHash2["FosRepCutscene"] = 466359675] = "FosRepCutscene";
      PedHash2[PedHash2["GCutscene"] = 2727244247] = "GCutscene";
      PedHash2[PedHash2["GroomCutscene"] = 2058033618] = "GroomCutscene";
      PedHash2[PedHash2["GroveStrDlrCutscene"] = 3898166818] = "GroveStrDlrCutscene";
      PedHash2[PedHash2["GuadalopeCutscene"] = 261428209] = "GuadalopeCutscene";
      PedHash2[PedHash2["GurkCutscene"] = 3272931111] = "GurkCutscene";
      PedHash2[PedHash2["HaoCutscene"] = 3969814300] = "HaoCutscene";
      PedHash2[PedHash2["HughCutscene"] = 1863555924] = "HughCutscene";
      PedHash2[PedHash2["HunterCutscene"] = 1531218220] = "HunterCutscene";
      PedHash2[PedHash2["ImranCutscene"] = 3812756443] = "ImranCutscene";
      PedHash2[PedHash2["JackHowitzerCutscene"] = 1153203121] = "JackHowitzerCutscene";
      PedHash2[PedHash2["JanetCutscene"] = 808778210] = "JanetCutscene";
      PedHash2[PedHash2["JanitorCutscene"] = 3254803008] = "JanitorCutscene";
      PedHash2[PedHash2["JewelassCutscene"] = 1145088004] = "JewelassCutscene";
      PedHash2[PedHash2["JimmyBostonCutscene"] = 60192701] = "JimmyBostonCutscene";
      PedHash2[PedHash2["JimmyDisantoCutscene"] = 3100414644] = "JimmyDisantoCutscene";
      PedHash2[PedHash2["JoeMinutemanCutscene"] = 4036845097] = "JoeMinutemanCutscene";
      PedHash2[PedHash2["JohnnyKlebitzCutscene"] = 4203395201] = "JohnnyKlebitzCutscene";
      PedHash2[PedHash2["JosefCutscene"] = 1167549130] = "JosefCutscene";
      PedHash2[PedHash2["JoshCutscene"] = 1158606749] = "JoshCutscene";
      PedHash2[PedHash2["KarenDanielsCutscene"] = 1269774364] = "KarenDanielsCutscene";
      PedHash2[PedHash2["LamarDavisCutscene"] = 1162230285] = "LamarDavisCutscene";
      PedHash2[PedHash2["LazlowCutscene"] = 949295643] = "LazlowCutscene";
      PedHash2[PedHash2["LesterCrestCutscene"] = 3046438339] = "LesterCrestCutscene";
      PedHash2[PedHash2["Lifeinvad01Cutscene"] = 1918178165] = "Lifeinvad01Cutscene";
      PedHash2[PedHash2["MagentaCutscene"] = 1477887514] = "MagentaCutscene";
      PedHash2[PedHash2["ManuelCutscene"] = 4222842058] = "ManuelCutscene";
      PedHash2[PedHash2["MarnieCutscene"] = 1464721716] = "MarnieCutscene";
      PedHash2[PedHash2["MartinMadrazoCutscene"] = 1129928304] = "MartinMadrazoCutscene";
      PedHash2[PedHash2["MaryannCutscene"] = 161007533] = "MaryannCutscene";
      PedHash2[PedHash2["MaudeCutscene"] = 3166991819] = "MaudeCutscene";
      PedHash2[PedHash2["MerryWeatherCutscene"] = 1631478380] = "MerryWeatherCutscene";
      PedHash2[PedHash2["MichelleCutscene"] = 1890499016] = "MichelleCutscene";
      PedHash2[PedHash2["MiltonCutscene"] = 3077190415] = "MiltonCutscene";
      PedHash2[PedHash2["MollyCutscene"] = 1167167044] = "MollyCutscene";
      PedHash2[PedHash2["MoviePremFemaleCutscene"] = 1270514905] = "MoviePremFemaleCutscene";
      PedHash2[PedHash2["MoviePremMaleCutscene"] = 2372398717] = "MoviePremMaleCutscene";
      PedHash2[PedHash2["MrKCutscene"] = 3284966005] = "MrKCutscene";
      PedHash2[PedHash2["MrsPhillipsCutscene"] = 3422397391] = "MrsPhillipsCutscene";
      PedHash2[PedHash2["MrsThornhillCutscene"] = 1334976110] = "MrsThornhillCutscene";
      PedHash2[PedHash2["NataliaCutscene"] = 1325314544] = "NataliaCutscene";
      PedHash2[PedHash2["NervousRonCutscene"] = 2023152276] = "NervousRonCutscene";
      PedHash2[PedHash2["NigelCutscene"] = 3779566603] = "NigelCutscene";
      PedHash2[PedHash2["OldMan1aCutscene"] = 518814684] = "OldMan1aCutscene";
      PedHash2[PedHash2["OldMan2Cutscene"] = 2566514544] = "OldMan2Cutscene";
      PedHash2[PedHash2["OmegaCutscene"] = 2339419141] = "OmegaCutscene";
      PedHash2[PedHash2["OrleansCutscene"] = 2905870170] = "OrleansCutscene";
      PedHash2[PedHash2["OrtegaCutscene"] = 3235579087] = "OrtegaCutscene";
      PedHash2[PedHash2["OscarCutscene"] = 4095687067] = "OscarCutscene";
      PedHash2[PedHash2["PaigeCutscene"] = 1528799427] = "PaigeCutscene";
      PedHash2[PedHash2["PaperCutscene"] = 1798879480] = "PaperCutscene";
      PedHash2[PedHash2["PopovCutscene"] = 1635617250] = "PopovCutscene";
      PedHash2[PedHash2["PatriciaCutscene"] = 3750433537] = "PatriciaCutscene";
      PedHash2[PedHash2["PornDudesCutscene"] = 793443893] = "PornDudesCutscene";
      PedHash2[PedHash2["PriestCutscene"] = 1299047806] = "PriestCutscene";
      PedHash2[PedHash2["PrologueDriverCutscene"] = 4027271643] = "PrologueDriverCutscene";
      PedHash2[PedHash2["PrologueSec01Cutscene"] = 2141384740] = "PrologueSec01Cutscene";
      PedHash2[PedHash2["PrologueSec02Cutscene"] = 512955554] = "PrologueSec02Cutscene";
      PedHash2[PedHash2["RampGangCutscene"] = 3263172030] = "RampGangCutscene";
      PedHash2[PedHash2["RampHicCutscene"] = 2240582840] = "RampHicCutscene";
      PedHash2[PedHash2["RampHipsterCutscene"] = 569740212] = "RampHipsterCutscene";
      PedHash2[PedHash2["RampMarineCutscene"] = 1634506681] = "RampMarineCutscene";
      PedHash2[PedHash2["RampMexCutscene"] = 4132362192] = "RampMexCutscene";
      PedHash2[PedHash2["RashkovskyCutscene"] = 411081129] = "RashkovskyCutscene";
      PedHash2[PedHash2["ReporterCutscene"] = 776079908] = "ReporterCutscene";
      PedHash2[PedHash2["RoccoPelosiCutscene"] = 2858686092] = "RoccoPelosiCutscene";
      PedHash2[PedHash2["RussianDrunkCutscene"] = 1179785778] = "RussianDrunkCutscene";
      PedHash2[PedHash2["ScreenWriterCutscene"] = 2346790124] = "ScreenWriterCutscene";
      PedHash2[PedHash2["SiemonYetarianCutscene"] = 3230888450] = "SiemonYetarianCutscene";
      PedHash2[PedHash2["SolomonCutscene"] = 4140949582] = "SolomonCutscene";
      PedHash2[PedHash2["SteveHainsCutscene"] = 2766184958] = "SteveHainsCutscene";
      PedHash2[PedHash2["StretchCutscene"] = 2302502917] = "StretchCutscene";
      PedHash2[PedHash2["Stripper01Cutscene"] = 2934601397] = "Stripper01Cutscene";
      PedHash2[PedHash2["Stripper02Cutscene"] = 2168724337] = "Stripper02Cutscene";
      PedHash2[PedHash2["TanishaCutscene"] = 1123963760] = "TanishaCutscene";
      PedHash2[PedHash2["TaoChengCutscene"] = 2288257085] = "TaoChengCutscene";
      PedHash2[PedHash2["TaosTranslatorCutscene"] = 1397974313] = "TaosTranslatorCutscene";
      PedHash2[PedHash2["TennisCoachCutscene"] = 1545995274] = "TennisCoachCutscene";
      PedHash2[PedHash2["TerryCutscene"] = 978452933] = "TerryCutscene";
      PedHash2[PedHash2["TomCutscene"] = 1776856003] = "TomCutscene";
      PedHash2[PedHash2["TomEpsilonCutscene"] = 2349847778] = "TomEpsilonCutscene";
      PedHash2[PedHash2["TonyaCutscene"] = 1665391897] = "TonyaCutscene";
      PedHash2[PedHash2["TracyDisantoCutscene"] = 101298480] = "TracyDisantoCutscene";
      PedHash2[PedHash2["TrafficWardenCutscene"] = 3727243251] = "TrafficWardenCutscene";
      PedHash2[PedHash2["UndercoverCopCutscene"] = 4017642090] = "UndercoverCopCutscene";
      PedHash2[PedHash2["VagosSpeakCutscene"] = 1224690857] = "VagosSpeakCutscene";
      PedHash2[PedHash2["WadeCutscene"] = 3529955798] = "WadeCutscene";
      PedHash2[PedHash2["WeiChengCutscene"] = 819699067] = "WeiChengCutscene";
      PedHash2[PedHash2["ZimborCutscene"] = 3937184496] = "ZimborCutscene";
      PedHash2[PedHash2["Boar"] = 3462393972] = "Boar";
      PedHash2[PedHash2["Cat"] = 1462895032] = "Cat";
      PedHash2[PedHash2["ChickenHawk"] = 2864127842] = "ChickenHawk";
      PedHash2[PedHash2["Chimp"] = 2825402133] = "Chimp";
      PedHash2[PedHash2["Chop"] = 351016938] = "Chop";
      PedHash2[PedHash2["Cormorant"] = 1457690978] = "Cormorant";
      PedHash2[PedHash2["Cow"] = 4244282910] = "Cow";
      PedHash2[PedHash2["Coyote"] = 1682622302] = "Coyote";
      PedHash2[PedHash2["Crow"] = 402729631] = "Crow";
      PedHash2[PedHash2["Deer"] = 3630914197] = "Deer";
      PedHash2[PedHash2["Dolphin"] = 2344268885] = "Dolphin";
      PedHash2[PedHash2["Fish"] = 802685111] = "Fish";
      PedHash2[PedHash2["Hen"] = 1794449327] = "Hen";
      PedHash2[PedHash2["HammerShark"] = 1015224100] = "HammerShark";
      PedHash2[PedHash2["Humpback"] = 1193010354] = "Humpback";
      PedHash2[PedHash2["Husky"] = 1318032802] = "Husky";
      PedHash2[PedHash2["KillerWhale"] = 2374682809] = "KillerWhale";
      PedHash2[PedHash2["MountainLion"] = 307287994] = "MountainLion";
      PedHash2[PedHash2["Pig"] = 2971380566] = "Pig";
      PedHash2[PedHash2["Pigeon"] = 111281960] = "Pigeon";
      PedHash2[PedHash2["Poodle"] = 1125994524] = "Poodle";
      PedHash2[PedHash2["Pug"] = 1832265812] = "Pug";
      PedHash2[PedHash2["Rabbit"] = 3753204865] = "Rabbit";
      PedHash2[PedHash2["Rat"] = 3283429734] = "Rat";
      PedHash2[PedHash2["Retriever"] = 882848737] = "Retriever";
      PedHash2[PedHash2["Rhesus"] = 3268439891] = "Rhesus";
      PedHash2[PedHash2["Rottweiler"] = 2506301981] = "Rottweiler";
      PedHash2[PedHash2["Seagull"] = 3549666813] = "Seagull";
      PedHash2[PedHash2["Shepherd"] = 1126154828] = "Shepherd";
      PedHash2[PedHash2["Stingray"] = 2705875277] = "Stingray";
      PedHash2[PedHash2["TigerShark"] = 113504370] = "TigerShark";
      PedHash2[PedHash2["Westy"] = 2910340283] = "Westy";
      PedHash2[PedHash2["Abner"] = 4037813798] = "Abner";
      PedHash2[PedHash2["AlDiNapoli"] = 4042020578] = "AlDiNapoli";
      PedHash2[PedHash2["Antonb"] = 3479321132] = "Antonb";
      PedHash2[PedHash2["Armoured01"] = 3455013896] = "Armoured01";
      PedHash2[PedHash2["Babyd"] = 3658575486] = "Babyd";
      PedHash2[PedHash2["Bankman01"] = 3272005365] = "Bankman01";
      PedHash2[PedHash2["Baygor"] = 1380197501] = "Baygor";
      PedHash2[PedHash2["Benny"] = 3300333010] = "Benny";
      PedHash2[PedHash2["BikeHire01"] = 1984382277] = "BikeHire01";
      PedHash2[PedHash2["BikerChic"] = 4198014287] = "BikerChic";
      PedHash2[PedHash2["BoatStaff01M"] = 3361671816] = "BoatStaff01M";
      PedHash2[PedHash2["BoatStaff01F"] = 848542878] = "BoatStaff01F";
      PedHash2[PedHash2["BurgerDrug"] = 2340239206] = "BurgerDrug";
      PedHash2[PedHash2["Chip"] = 610290475] = "Chip";
      PedHash2[PedHash2["Claude01"] = 3237179831] = "Claude01";
      PedHash2[PedHash2["ClubHouseBar01"] = 1914945105] = "ClubHouseBar01";
      PedHash2[PedHash2["CocaineFemale01"] = 1897303236] = "CocaineFemale01";
      PedHash2[PedHash2["CocaineMale01"] = 3455927962] = "CocaineMale01";
      PedHash2[PedHash2["ComJane"] = 3064628686] = "ComJane";
      PedHash2[PedHash2["Corpse01"] = 773063444] = "Corpse01";
      PedHash2[PedHash2["Corpse02"] = 228356856] = "Corpse02";
      PedHash2[PedHash2["CounterfeitFemale01"] = 1074385436] = "CounterfeitFemale01";
      PedHash2[PedHash2["CounterfeitMale01"] = 2625926338] = "CounterfeitMale01";
      PedHash2[PedHash2["Cyclist01"] = 755956971] = "Cyclist01";
      PedHash2[PedHash2["DeadHooker"] = 1943971979] = "DeadHooker";
      PedHash2[PedHash2["Drowned"] = 1943971979] = "Drowned";
      PedHash2[PedHash2["ExArmy01"] = 1161072059] = "ExArmy01";
      PedHash2[PedHash2["ExecutivePAMale01"] = 983887149] = "ExecutivePAMale01";
      PedHash2[PedHash2["ExecutivePAFemale01"] = 2913175640] = "ExecutivePAFemale01";
      PedHash2[PedHash2["Famdd01"] = 866411749] = "Famdd01";
      PedHash2[PedHash2["FibArchitect"] = 874722259] = "FibArchitect";
      PedHash2[PedHash2["FibMugger01"] = 2243544680] = "FibMugger01";
      PedHash2[PedHash2["FibSec01"] = 1558115333] = "FibSec01";
      PedHash2[PedHash2["FilmDirector"] = 728636342] = "FilmDirector";
      PedHash2[PedHash2["FilmNoir"] = 732742363] = "FilmNoir";
      PedHash2[PedHash2["Finguru01"] = 1189322339] = "Finguru01";
      PedHash2[PedHash2["ForgeryFemale01"] = 3691903615] = "ForgeryFemale01";
      PedHash2[PedHash2["ForgeryMale01"] = 325317957] = "ForgeryMale01";
      PedHash2[PedHash2["FreemodeFemale01"] = 2627665880] = "FreemodeFemale01";
      PedHash2[PedHash2["FreemodeMale01"] = 1885233650] = "FreemodeMale01";
      PedHash2[PedHash2["Glenstank01"] = 1169888870] = "Glenstank01";
      PedHash2[PedHash2["Griff01"] = 3293887675] = "Griff01";
      PedHash2[PedHash2["Guido01"] = 3333724719] = "Guido01";
      PedHash2[PedHash2["GunVend01"] = 3005388626] = "GunVend01";
      PedHash2[PedHash2["Hacker"] = 2579169528] = "Hacker";
      PedHash2[PedHash2["HeliStaff01"] = 431423238] = "HeliStaff01";
      PedHash2[PedHash2["Hippie01"] = 4030826507] = "Hippie01";
      PedHash2[PedHash2["Hotposh01"] = 2526768638] = "Hotposh01";
      PedHash2[PedHash2["Imporage"] = 880829941] = "Imporage";
      PedHash2[PedHash2["Jesus01"] = 3459037009] = "Jesus01";
      PedHash2[PedHash2["Jewelass01"] = 4040474158] = "Jewelass01";
      PedHash2[PedHash2["JewelSec01"] = 2899099062] = "JewelSec01";
      PedHash2[PedHash2["JewelThief"] = 3872144604] = "JewelThief";
      PedHash2[PedHash2["Justin"] = 2109968527] = "Justin";
      PedHash2[PedHash2["Mani"] = 3367706194] = "Mani";
      PedHash2[PedHash2["Markfost"] = 479578891] = "Markfost";
      PedHash2[PedHash2["Marston01"] = 943915367] = "Marston01";
      PedHash2[PedHash2["MethFemale01"] = 3778572496] = "MethFemale01";
      PedHash2[PedHash2["MethMale01"] = 1293671805] = "MethMale01";
      PedHash2[PedHash2["MilitaryBum"] = 1191548746] = "MilitaryBum";
      PedHash2[PedHash2["Miranda"] = 1095737979] = "Miranda";
      PedHash2[PedHash2["Mistress"] = 1573528872] = "Mistress";
      PedHash2[PedHash2["Misty01"] = 3509125021] = "Misty01";
      PedHash2[PedHash2["MovieStar"] = 894928436] = "MovieStar";
      PedHash2[PedHash2["MPros01"] = 1822283721] = "MPros01";
      PedHash2[PedHash2["Niko01"] = 4007317449] = "Niko01";
      PedHash2[PedHash2["Paparazzi"] = 1346941736] = "Paparazzi";
      PedHash2[PedHash2["Party01"] = 921110016] = "Party01";
      PedHash2[PedHash2["PartyTarget"] = 2180468199] = "PartyTarget";
      PedHash2[PedHash2["PestContDriver"] = 994527967] = "PestContDriver";
      PedHash2[PedHash2["PestContGunman"] = 193469166] = "PestContGunman";
      PedHash2[PedHash2["Pogo01"] = 3696858125] = "Pogo01";
      PedHash2[PedHash2["Poppymich"] = 602513566] = "Poppymich";
      PedHash2[PedHash2["Princess"] = 3538133636] = "Princess";
      PedHash2[PedHash2["Prisoner01"] = 2073775040] = "Prisoner01";
      PedHash2[PedHash2["PrologueHostage01"] = 3306347811] = "PrologueHostage01";
      PedHash2[PedHash2["PrologueMournFemale01"] = 2718472679] = "PrologueMournFemale01";
      PedHash2[PedHash2["PrologueMournMale01"] = 3465937675] = "PrologueMournMale01";
      PedHash2[PedHash2["RivalPaparazzi"] = 1624626906] = "RivalPaparazzi";
      PedHash2[PedHash2["ShopKeep01"] = 416176080] = "ShopKeep01";
      PedHash2[PedHash2["SpyActor"] = 2886641112] = "SpyActor";
      PedHash2[PedHash2["SpyActress"] = 1535236204] = "SpyActress";
      PedHash2[PedHash2["StripperLite"] = 695248020] = "StripperLite";
      PedHash2[PedHash2["Taphillbilly"] = 2585681490] = "Taphillbilly";
      PedHash2[PedHash2["Tramp01"] = 1787764635] = "Tramp01";
      PedHash2[PedHash2["VagosFun01"] = 3299219389] = "VagosFun01";
      PedHash2[PedHash2["WillyFist"] = 2423691919] = "WillyFist";
      PedHash2[PedHash2["WeedFemale01"] = 1596374223] = "WeedFemale01";
      PedHash2[PedHash2["WeedMale01"] = 2648833641] = "WeedMale01";
      PedHash2[PedHash2["Zombie01"] = 2890614022] = "Zombie01";
      PedHash2[PedHash2["Acult01AMM"] = 1413662315] = "Acult01AMM";
      PedHash2[PedHash2["Acult01AMO"] = 1430544400] = "Acult01AMO";
      PedHash2[PedHash2["Acult01AMY"] = 3043264555] = "Acult01AMY";
      PedHash2[PedHash2["Acult02AMO"] = 1268862154] = "Acult02AMO";
      PedHash2[PedHash2["Acult02AMY"] = 2162532142] = "Acult02AMY";
      PedHash2[PedHash2["AfriAmer01AMM"] = 3513928062] = "AfriAmer01AMM";
      PedHash2[PedHash2["Airhostess01SFY"] = 1567728751] = "Airhostess01SFY";
      PedHash2[PedHash2["AirworkerSMY"] = 1644266841] = "AirworkerSMY";
      PedHash2[PedHash2["Ammucity01SMY"] = 2651349821] = "Ammucity01SMY";
      PedHash2[PedHash2["AmmuCountrySMM"] = 233415434] = "AmmuCountrySMM";
      PedHash2[PedHash2["ArmBoss01GMM"] = 4058522530] = "ArmBoss01GMM";
      PedHash2[PedHash2["ArmGoon01GMM"] = 4255728232] = "ArmGoon01GMM";
      PedHash2[PedHash2["ArmGoon02GMY"] = 3310258058] = "ArmGoon02GMY";
      PedHash2[PedHash2["ArmLieut01GMM"] = 3882958867] = "ArmLieut01GMM";
      PedHash2[PedHash2["Armoured01SMM"] = 2512875213] = "Armoured01SMM";
      PedHash2[PedHash2["Armoured02SMM"] = 1669696074] = "Armoured02SMM";
      PedHash2[PedHash2["Armymech01SMY"] = 1657546978] = "Armymech01SMY";
      PedHash2[PedHash2["Autopsy01SMY"] = 2988916046] = "Autopsy01SMY";
      PedHash2[PedHash2["Autoshop01SMM"] = 68070371] = "Autoshop01SMM";
      PedHash2[PedHash2["Autoshop02SMM"] = 4033578141] = "Autoshop02SMM";
      PedHash2[PedHash2["Azteca01GMY"] = 1752208920] = "Azteca01GMY";
      PedHash2[PedHash2["BallaEast01GMY"] = 4096714883] = "BallaEast01GMY";
      PedHash2[PedHash2["BallaOrig01GMY"] = 588969535] = "BallaOrig01GMY";
      PedHash2[PedHash2["Ballas01GFY"] = 361513884] = "Ballas01GFY";
      PedHash2[PedHash2["BallaSout01GMY"] = 599294057] = "BallaSout01GMY";
      PedHash2[PedHash2["Barman01SMY"] = 3852538118] = "Barman01SMY";
      PedHash2[PedHash2["Bartender01SFY"] = 2014052797] = "Bartender01SFY";
      PedHash2[PedHash2["Baywatch01SFY"] = 1250841910] = "Baywatch01SFY";
      PedHash2[PedHash2["Baywatch01SMY"] = 189425762] = "Baywatch01SMY";
      PedHash2[PedHash2["Beach01AFM"] = 808859815] = "Beach01AFM";
      PedHash2[PedHash2["Beach01AFY"] = 3349113128] = "Beach01AFY";
      PedHash2[PedHash2["Beach01AMM"] = 1077785853] = "Beach01AMM";
      PedHash2[PedHash2["Beach01AMO"] = 2217202584] = "Beach01AMO";
      PedHash2[PedHash2["Beach01AMY"] = 3523131524] = "Beach01AMY";
      PedHash2[PedHash2["Beach02AMM"] = 2021631368] = "Beach02AMM";
      PedHash2[PedHash2["Beach02AMY"] = 600300561] = "Beach02AMY";
      PedHash2[PedHash2["Beach03AMY"] = 3886638041] = "Beach03AMY";
      PedHash2[PedHash2["Beachvesp01AMY"] = 2114544056] = "Beachvesp01AMY";
      PedHash2[PedHash2["Beachvesp02AMY"] = 3394697810] = "Beachvesp02AMY";
      PedHash2[PedHash2["Bevhills01AFM"] = 3188223741] = "Bevhills01AFM";
      PedHash2[PedHash2["Bevhills01AFY"] = 1146800212] = "Bevhills01AFY";
      PedHash2[PedHash2["Bevhills01AMM"] = 1423699487] = "Bevhills01AMM";
      PedHash2[PedHash2["Bevhills01AMY"] = 1982350912] = "Bevhills01AMY";
      PedHash2[PedHash2["Bevhills02AFM"] = 2688103263] = "Bevhills02AFM";
      PedHash2[PedHash2["Bevhills02AFY"] = 1546450936] = "Bevhills02AFY";
      PedHash2[PedHash2["Bevhills02AMM"] = 1068876755] = "Bevhills02AMM";
      PedHash2[PedHash2["Bevhills02AMY"] = 1720428295] = "Bevhills02AMY";
      PedHash2[PedHash2["Bevhills03AFY"] = 549978415] = "Bevhills03AFY";
      PedHash2[PedHash2["Bevhills04AFY"] = 920595805] = "Bevhills04AFY";
      PedHash2[PedHash2["Blackops01SMY"] = 3019107892] = "Blackops01SMY";
      PedHash2[PedHash2["Blackops02SMY"] = 2047212121] = "Blackops02SMY";
      PedHash2[PedHash2["Blackops03SMY"] = 1349953339] = "Blackops03SMY";
      PedHash2[PedHash2["Bodybuild01AFM"] = 1004114196] = "Bodybuild01AFM";
      PedHash2[PedHash2["Bouncer01SMM"] = 2681481517] = "Bouncer01SMM";
      PedHash2[PedHash2["Breakdance01AMY"] = 933205398] = "Breakdance01AMY";
      PedHash2[PedHash2["Busboy01SMY"] = 3640249671] = "Busboy01SMY";
      PedHash2[PedHash2["Busicas01AMY"] = 2597531625] = "Busicas01AMY";
      PedHash2[PedHash2["Business01AFY"] = 664399832] = "Business01AFY";
      PedHash2[PedHash2["Business01AMM"] = 2120901815] = "Business01AMM";
      PedHash2[PedHash2["Business01AMY"] = 3382649284] = "Business01AMY";
      PedHash2[PedHash2["Business02AFM"] = 532905404] = "Business02AFM";
      PedHash2[PedHash2["Business02AFY"] = 826475330] = "Business02AFY";
      PedHash2[PedHash2["Business02AMY"] = 3014915558] = "Business02AMY";
      PedHash2[PedHash2["Business03AFY"] = 2928082356] = "Business03AFY";
      PedHash2[PedHash2["Business03AMY"] = 2705543429] = "Business03AMY";
      PedHash2[PedHash2["Business04AFY"] = 3083210802] = "Business04AFY";
      PedHash2[PedHash2["Busker01SMO"] = 2912874939] = "Busker01SMO";
      PedHash2[PedHash2["CCrew01SMM"] = 3387290987] = "CCrew01SMM";
      PedHash2[PedHash2["Chef01SMY"] = 261586155] = "Chef01SMY";
      PedHash2[PedHash2["ChemSec01SMM"] = 788443093] = "ChemSec01SMM";
      PedHash2[PedHash2["ChemWork01GMM"] = 4128603535] = "ChemWork01GMM";
      PedHash2[PedHash2["ChiBoss01GMM"] = 3118269184] = "ChiBoss01GMM";
      PedHash2[PedHash2["ChiCold01GMM"] = 275618457] = "ChiCold01GMM";
      PedHash2[PedHash2["ChiGoon01GMM"] = 2119136831] = "ChiGoon01GMM";
      PedHash2[PedHash2["ChiGoon02GMM"] = 4285659174] = "ChiGoon02GMM";
      PedHash2[PedHash2["CiaSec01SMM"] = 1650288984] = "CiaSec01SMM";
      PedHash2[PedHash2["Clown01SMY"] = 71929310] = "Clown01SMY";
      PedHash2[PedHash2["Cntrybar01SMM"] = 436345731] = "Cntrybar01SMM";
      PedHash2[PedHash2["Construct01SMY"] = 3621428889] = "Construct01SMY";
      PedHash2[PedHash2["Construct02SMY"] = 3321821918] = "Construct02SMY";
      PedHash2[PedHash2["Cop01SFY"] = 368603149] = "Cop01SFY";
      PedHash2[PedHash2["Cop01SMY"] = 1581098148] = "Cop01SMY";
      PedHash2[PedHash2["Cyclist01AMY"] = 4257633223] = "Cyclist01AMY";
      PedHash2[PedHash2["Dealer01SMY"] = 3835149295] = "Dealer01SMY";
      PedHash2[PedHash2["Devinsec01SMY"] = 2606068340] = "Devinsec01SMY";
      PedHash2[PedHash2["Dhill01AMY"] = 4282288299] = "Dhill01AMY";
      PedHash2[PedHash2["Dockwork01SMM"] = 349680864] = "Dockwork01SMM";
      PedHash2[PedHash2["Dockwork01SMY"] = 2255894993] = "Dockwork01SMY";
      PedHash2[PedHash2["Doctor01SMM"] = 3564307372] = "Doctor01SMM";
      PedHash2[PedHash2["Doorman01SMY"] = 579932932] = "Doorman01SMY";
      PedHash2[PedHash2["Downtown01AFM"] = 1699403886] = "Downtown01AFM";
      PedHash2[PedHash2["Downtown01AMY"] = 766375082] = "Downtown01AMY";
      PedHash2[PedHash2["DwService01SMY"] = 1976765073] = "DwService01SMY";
      PedHash2[PedHash2["DwService02SMY"] = 4119890438] = "DwService02SMY";
      PedHash2[PedHash2["Eastsa01AFM"] = 2638072698] = "Eastsa01AFM";
      PedHash2[PedHash2["Eastsa01AFY"] = 4121954205] = "Eastsa01AFY";
      PedHash2[PedHash2["Eastsa01AMM"] = 4188468543] = "Eastsa01AMM";
      PedHash2[PedHash2["Eastsa01AMY"] = 2756120947] = "Eastsa01AMY";
      PedHash2[PedHash2["Eastsa02AFM"] = 1674107025] = "Eastsa02AFM";
      PedHash2[PedHash2["Eastsa02AFY"] = 70821038] = "Eastsa02AFY";
      PedHash2[PedHash2["Eastsa02AMM"] = 131961260] = "Eastsa02AMM";
      PedHash2[PedHash2["Eastsa02AMY"] = 377976310] = "Eastsa02AMY";
      PedHash2[PedHash2["Eastsa03AFY"] = 1371553700] = "Eastsa03AFY";
      PedHash2[PedHash2["Epsilon01AFY"] = 1755064960] = "Epsilon01AFY";
      PedHash2[PedHash2["Epsilon01AMY"] = 2010389054] = "Epsilon01AMY";
      PedHash2[PedHash2["Epsilon02AMY"] = 2860711835] = "Epsilon02AMY";
      PedHash2[PedHash2["Factory01SFY"] = 1777626099] = "Factory01SFY";
      PedHash2[PedHash2["Factory01SMY"] = 1097048408] = "Factory01SMY";
      PedHash2[PedHash2["Famca01GMY"] = 3896218551] = "Famca01GMY";
      PedHash2[PedHash2["Famdnf01GMY"] = 3681718840] = "Famdnf01GMY";
      PedHash2[PedHash2["Famfor01GMY"] = 2217749257] = "Famfor01GMY";
      PedHash2[PedHash2["Families01GFY"] = 1309468115] = "Families01GFY";
      PedHash2[PedHash2["Farmer01AMM"] = 2488675799] = "Farmer01AMM";
      PedHash2[PedHash2["FatBla01AFM"] = 4206136267] = "FatBla01AFM";
      PedHash2[PedHash2["FatCult01AFM"] = 3050275044] = "FatCult01AFM";
      PedHash2[PedHash2["Fatlatin01AMM"] = 1641152947] = "Fatlatin01AMM";
      PedHash2[PedHash2["FatWhite01AFM"] = 951767867] = "FatWhite01AFM";
      PedHash2[PedHash2["FemBarberSFM"] = 373000027] = "FemBarberSFM";
      PedHash2[PedHash2["FibOffice01SMM"] = 3988550982] = "FibOffice01SMM";
      PedHash2[PedHash2["FibOffice02SMM"] = 653289389] = "FibOffice02SMM";
      PedHash2[PedHash2["FibSec01SMM"] = 2072724299] = "FibSec01SMM";
      PedHash2[PedHash2["Fireman01SMY"] = 3065114024] = "Fireman01SMY";
      PedHash2[PedHash2["Fitness01AFY"] = 1165780219] = "Fitness01AFY";
      PedHash2[PedHash2["Fitness02AFY"] = 331645324] = "Fitness02AFY";
      PedHash2[PedHash2["Gaffer01SMM"] = 2841034142] = "Gaffer01SMM";
      PedHash2[PedHash2["GarbageSMY"] = 4000686095] = "GarbageSMY";
      PedHash2[PedHash2["Gardener01SMM"] = 1240094341] = "Gardener01SMM";
      PedHash2[PedHash2["Gay01AMY"] = 3519864886] = "Gay01AMY";
      PedHash2[PedHash2["Gay02AMY"] = 2775713665] = "Gay02AMY";
      PedHash2[PedHash2["Genfat01AMM"] = 115168927] = "Genfat01AMM";
      PedHash2[PedHash2["Genfat02AMM"] = 330231874] = "Genfat02AMM";
      PedHash2[PedHash2["Genhot01AFY"] = 793439294] = "Genhot01AFY";
      PedHash2[PedHash2["Genstreet01AFO"] = 1640504453] = "Genstreet01AFO";
      PedHash2[PedHash2["Genstreet01AMO"] = 2908022696] = "Genstreet01AMO";
      PedHash2[PedHash2["Genstreet01AMY"] = 2557996913] = "Genstreet01AMY";
      PedHash2[PedHash2["Genstreet02AMY"] = 891398354] = "Genstreet02AMY";
      PedHash2[PedHash2["GentransportSMM"] = 411102470] = "GentransportSMM";
      PedHash2[PedHash2["Golfer01AFY"] = 2111372120] = "Golfer01AFY";
      PedHash2[PedHash2["Golfer01AMM"] = 2850754114] = "Golfer01AMM";
      PedHash2[PedHash2["Golfer01AMY"] = 3609190705] = "Golfer01AMY";
      PedHash2[PedHash2["Grip01SMY"] = 815693290] = "Grip01SMY";
      PedHash2[PedHash2["Hairdress01SMM"] = 1099825042] = "Hairdress01SMM";
      PedHash2[PedHash2["Hasjew01AMM"] = 1809430156] = "Hasjew01AMM";
      PedHash2[PedHash2["Hasjew01AMY"] = 3782053633] = "Hasjew01AMY";
      PedHash2[PedHash2["Highsec01SMM"] = 4049719826] = "Highsec01SMM";
      PedHash2[PedHash2["Highsec02SMM"] = 691061163] = "Highsec02SMM";
      PedHash2[PedHash2["Hiker01AFY"] = 813893651] = "Hiker01AFY";
      PedHash2[PedHash2["Hiker01AMY"] = 1358380044] = "Hiker01AMY";
      PedHash2[PedHash2["Hillbilly01AMM"] = 1822107721] = "Hillbilly01AMM";
      PedHash2[PedHash2["Hillbilly02AMM"] = 2064532783] = "Hillbilly02AMM";
      PedHash2[PedHash2["Hippie01AFY"] = 343259175] = "Hippie01AFY";
      PedHash2[PedHash2["Hippy01AMY"] = 2097407511] = "Hippy01AMY";
      PedHash2[PedHash2["Hipster01AFY"] = 2185745201] = "Hipster01AFY";
      PedHash2[PedHash2["Hipster01AMY"] = 587703123] = "Hipster01AMY";
      PedHash2[PedHash2["Hipster02AFY"] = 2549481101] = "Hipster02AFY";
      PedHash2[PedHash2["Hipster02AMY"] = 349505262] = "Hipster02AMY";
      PedHash2[PedHash2["Hipster03AFY"] = 2780469782] = "Hipster03AFY";
      PedHash2[PedHash2["Hipster03AMY"] = 1312913862] = "Hipster03AMY";
      PedHash2[PedHash2["Hipster04AFY"] = 429425116] = "Hipster04AFY";
      PedHash2[PedHash2["Hooker01SFY"] = 42647445] = "Hooker01SFY";
      PedHash2[PedHash2["Hooker02SFY"] = 348382215] = "Hooker02SFY";
      PedHash2[PedHash2["Hooker03SFY"] = 51789996] = "Hooker03SFY";
      PedHash2[PedHash2["Hwaycop01SMY"] = 1939545845] = "Hwaycop01SMY";
      PedHash2[PedHash2["Indian01AFO"] = 3134700416] = "Indian01AFO";
      PedHash2[PedHash2["Indian01AFY"] = 153984193] = "Indian01AFY";
      PedHash2[PedHash2["Indian01AMM"] = 3721046572] = "Indian01AMM";
      PedHash2[PedHash2["Indian01AMY"] = 706935758] = "Indian01AMY";
      PedHash2[PedHash2["JanitorSMM"] = 2842417644] = "JanitorSMM";
      PedHash2[PedHash2["Jetski01AMY"] = 767028979] = "Jetski01AMY";
      PedHash2[PedHash2["Juggalo01AFY"] = 3675473203] = "Juggalo01AFY";
      PedHash2[PedHash2["Juggalo01AMY"] = 2445950508] = "Juggalo01AMY";
      PedHash2[PedHash2["KorBoss01GMM"] = 891945583] = "KorBoss01GMM";
      PedHash2[PedHash2["Korean01GMY"] = 611648169] = "Korean01GMY";
      PedHash2[PedHash2["Korean02GMY"] = 2414729609] = "Korean02GMY";
      PedHash2[PedHash2["KorLieut01GMY"] = 2093736314] = "KorLieut01GMY";
      PedHash2[PedHash2["Ktown01AFM"] = 1388848350] = "Ktown01AFM";
      PedHash2[PedHash2["Ktown01AFO"] = 1204772502] = "Ktown01AFO";
      PedHash2[PedHash2["Ktown01AMM"] = 3512565361] = "Ktown01AMM";
      PedHash2[PedHash2["Ktown01AMO"] = 355916122] = "Ktown01AMO";
      PedHash2[PedHash2["Ktown01AMY"] = 452351020] = "Ktown01AMY";
      PedHash2[PedHash2["Ktown02AFM"] = 1090617681] = "Ktown02AFM";
      PedHash2[PedHash2["Ktown02AMY"] = 696250687] = "Ktown02AMY";
      PedHash2[PedHash2["Lathandy01SMM"] = 2659242702] = "Lathandy01SMM";
      PedHash2[PedHash2["Latino01AMY"] = 321657486] = "Latino01AMY";
      PedHash2[PedHash2["Lifeinvad01SMM"] = 3724572669] = "Lifeinvad01SMM";
      PedHash2[PedHash2["LinecookSMM"] = 3684436375] = "LinecookSMM";
      PedHash2[PedHash2["Lost01GFY"] = 4250220510] = "Lost01GFY";
      PedHash2[PedHash2["Lost01GMY"] = 1330042375] = "Lost01GMY";
      PedHash2[PedHash2["Lost02GMY"] = 1032073858] = "Lost02GMY";
      PedHash2[PedHash2["Lost03GMY"] = 850468060] = "Lost03GMY";
      PedHash2[PedHash2["Lsmetro01SMM"] = 1985653476] = "Lsmetro01SMM";
      PedHash2[PedHash2["Maid01SFM"] = 3767780806] = "Maid01SFM";
      PedHash2[PedHash2["Malibu01AMM"] = 803106487] = "Malibu01AMM";
      PedHash2[PedHash2["Mariachi01SMM"] = 2124742566] = "Mariachi01SMM";
      PedHash2[PedHash2["Marine01SMM"] = 4074414829] = "Marine01SMM";
      PedHash2[PedHash2["Marine01SMY"] = 1702441027] = "Marine01SMY";
      PedHash2[PedHash2["Marine02SMM"] = 4028996995] = "Marine02SMM";
      PedHash2[PedHash2["Marine02SMY"] = 1490458366] = "Marine02SMY";
      PedHash2[PedHash2["Marine03SMY"] = 1925237458] = "Marine03SMY";
      PedHash2[PedHash2["Methhead01AMY"] = 1768677545] = "Methhead01AMY";
      PedHash2[PedHash2["MexBoss01GMM"] = 1466037421] = "MexBoss01GMM";
      PedHash2[PedHash2["MexBoss02GMM"] = 1226102803] = "MexBoss02GMM";
      PedHash2[PedHash2["MexCntry01AMM"] = 3716251309] = "MexCntry01AMM";
      PedHash2[PedHash2["MexGang01GMY"] = 3185399110] = "MexGang01GMY";
      PedHash2[PedHash2["MexGoon01GMY"] = 653210662] = "MexGoon01GMY";
      PedHash2[PedHash2["MexGoon02GMY"] = 832784782] = "MexGoon02GMY";
      PedHash2[PedHash2["MexGoon03GMY"] = 2521633500] = "MexGoon03GMY";
      PedHash2[PedHash2["MexLabor01AMM"] = 2992445106] = "MexLabor01AMM";
      PedHash2[PedHash2["MexThug01AMY"] = 810804565] = "MexThug01AMY";
      PedHash2[PedHash2["Migrant01SFY"] = 3579522037] = "Migrant01SFY";
      PedHash2[PedHash2["Migrant01SMM"] = 3977045190] = "Migrant01SMM";
      PedHash2[PedHash2["MimeSMY"] = 1021093698] = "MimeSMY";
      PedHash2[PedHash2["Motox01AMY"] = 1694362237] = "Motox01AMY";
      PedHash2[PedHash2["Motox02AMY"] = 2007797722] = "Motox02AMY";
      PedHash2[PedHash2["MovAlien01"] = 1684083350] = "MovAlien01";
      PedHash2[PedHash2["MovPrem01SFY"] = 587253782] = "MovPrem01SFY";
      PedHash2[PedHash2["Movprem01SMM"] = 3630066984] = "Movprem01SMM";
      PedHash2[PedHash2["Movspace01SMM"] = 3887273010] = "Movspace01SMM";
      PedHash2[PedHash2["Musclbeac01AMY"] = 1264920838] = "Musclbeac01AMY";
      PedHash2[PedHash2["Musclbeac02AMY"] = 3374523516] = "Musclbeac02AMY";
      PedHash2[PedHash2["OgBoss01AMM"] = 1746653202] = "OgBoss01AMM";
      PedHash2[PedHash2["Paparazzi01AMM"] = 3972697109] = "Paparazzi01AMM";
      PedHash2[PedHash2["Paramedic01SMM"] = 3008586398] = "Paramedic01SMM";
      PedHash2[PedHash2["PestCont01SMY"] = 1209091352] = "PestCont01SMY";
      PedHash2[PedHash2["Pilot01SMM"] = 3881519900] = "Pilot01SMM";
      PedHash2[PedHash2["Pilot01SMY"] = 2872052743] = "Pilot01SMY";
      PedHash2[PedHash2["Pilot02SMM"] = 4131252449] = "Pilot02SMM";
      PedHash2[PedHash2["PoloGoon01GMY"] = 1329576454] = "PoloGoon01GMY";
      PedHash2[PedHash2["PoloGoon02GMY"] = 2733138262] = "PoloGoon02GMY";
      PedHash2[PedHash2["Polynesian01AMM"] = 2849617566] = "Polynesian01AMM";
      PedHash2[PedHash2["Polynesian01AMY"] = 2206530719] = "Polynesian01AMY";
      PedHash2[PedHash2["Postal01SMM"] = 1650036788] = "Postal01SMM";
      PedHash2[PedHash2["Postal02SMM"] = 1936142927] = "Postal02SMM";
      PedHash2[PedHash2["Prisguard01SMM"] = 1456041926] = "Prisguard01SMM";
      PedHash2[PedHash2["PrisMuscl01SMY"] = 1596003233] = "PrisMuscl01SMY";
      PedHash2[PedHash2["Prisoner01SMY"] = 2981862233] = "Prisoner01SMY";
      PedHash2[PedHash2["PrologueHostage01AFM"] = 379310561] = "PrologueHostage01AFM";
      PedHash2[PedHash2["PrologueHostage01AMM"] = 2534589327] = "PrologueHostage01AMM";
      PedHash2[PedHash2["Ranger01SFY"] = 2680682039] = "Ranger01SFY";
      PedHash2[PedHash2["Ranger01SMY"] = 4017173934] = "Ranger01SMY";
      PedHash2[PedHash2["Roadcyc01AMY"] = 4116817094] = "Roadcyc01AMY";
      PedHash2[PedHash2["Robber01SMY"] = 3227390873] = "Robber01SMY";
      PedHash2[PedHash2["RsRanger01AMO"] = 1011059922] = "RsRanger01AMO";
      PedHash2[PedHash2["Runner01AFY"] = 3343476521] = "Runner01AFY";
      PedHash2[PedHash2["Runner01AMY"] = 623927022] = "Runner01AMY";
      PedHash2[PedHash2["Runner02AMY"] = 2218630415] = "Runner02AMY";
      PedHash2[PedHash2["Rurmeth01AFY"] = 1064866854] = "Rurmeth01AFY";
      PedHash2[PedHash2["Rurmeth01AMM"] = 1001210244] = "Rurmeth01AMM";
      PedHash2[PedHash2["Salton01AFM"] = 3725461865] = "Salton01AFM";
      PedHash2[PedHash2["Salton01AFO"] = 3439295882] = "Salton01AFO";
      PedHash2[PedHash2["Salton01AMM"] = 1328415626] = "Salton01AMM";
      PedHash2[PedHash2["Salton01AMO"] = 539004493] = "Salton01AMO";
      PedHash2[PedHash2["Salton01AMY"] = 3613420592] = "Salton01AMY";
      PedHash2[PedHash2["Salton02AMM"] = 1626646295] = "Salton02AMM";
      PedHash2[PedHash2["Salton03AMM"] = 2995538501] = "Salton03AMM";
      PedHash2[PedHash2["Salton04AMM"] = 2521108919] = "Salton04AMM";
      PedHash2[PedHash2["SalvaBoss01GMY"] = 2422005962] = "SalvaBoss01GMY";
      PedHash2[PedHash2["SalvaGoon01GMY"] = 663522487] = "SalvaGoon01GMY";
      PedHash2[PedHash2["SalvaGoon02GMY"] = 846439045] = "SalvaGoon02GMY";
      PedHash2[PedHash2["SalvaGoon03GMY"] = 62440720] = "SalvaGoon03GMY";
      PedHash2[PedHash2["SbikeAMO"] = 1794381917] = "SbikeAMO";
      PedHash2[PedHash2["Scdressy01AFY"] = 3680420864] = "Scdressy01AFY";
      PedHash2[PedHash2["Scientist01SMM"] = 1092080539] = "Scientist01SMM";
      PedHash2[PedHash2["Scrubs01SFY"] = 2874755766] = "Scrubs01SFY";
      PedHash2[PedHash2["Security01SMM"] = 3613962792] = "Security01SMM";
      PedHash2[PedHash2["Sheriff01SFY"] = 1096929346] = "Sheriff01SFY";
      PedHash2[PedHash2["Sheriff01SMY"] = 2974087609] = "Sheriff01SMY";
      PedHash2[PedHash2["ShopHighSFM"] = 2923947184] = "ShopHighSFM";
      PedHash2[PedHash2["ShopLowSFY"] = 2842568196] = "ShopLowSFY";
      PedHash2[PedHash2["ShopMaskSMY"] = 1846684678] = "ShopMaskSMY";
      PedHash2[PedHash2["ShopMidSFY"] = 1055701597] = "ShopMidSFY";
      PedHash2[PedHash2["Skater01AFY"] = 1767892582] = "Skater01AFY";
      PedHash2[PedHash2["Skater01AMM"] = 3654768780] = "Skater01AMM";
      PedHash2[PedHash2["Skater01AMY"] = 3250873975] = "Skater01AMY";
      PedHash2[PedHash2["Skater02AMY"] = 2952446692] = "Skater02AMY";
      PedHash2[PedHash2["Skidrow01AFM"] = 2962707003] = "Skidrow01AFM";
      PedHash2[PedHash2["Skidrow01AMM"] = 32417469] = "Skidrow01AMM";
      PedHash2[PedHash2["Snowcop01SMM"] = 451459928] = "Snowcop01SMM";
      PedHash2[PedHash2["Socenlat01AMM"] = 193817059] = "Socenlat01AMM";
      PedHash2[PedHash2["Soucent01AFM"] = 1951946145] = "Soucent01AFM";
      PedHash2[PedHash2["Soucent01AFO"] = 1039800368] = "Soucent01AFO";
      PedHash2[PedHash2["Soucent01AFY"] = 744758650] = "Soucent01AFY";
      PedHash2[PedHash2["Soucent01AMM"] = 1750583735] = "Soucent01AMM";
      PedHash2[PedHash2["Soucent01AMO"] = 718836251] = "Soucent01AMO";
      PedHash2[PedHash2["Soucent01AMY"] = 3877027275] = "Soucent01AMY";
      PedHash2[PedHash2["Soucent02AFM"] = 4079145784] = "Soucent02AFM";
      PedHash2[PedHash2["Soucent02AFO"] = 2775443222] = "Soucent02AFO";
      PedHash2[PedHash2["Soucent02AFY"] = 1519319503] = "Soucent02AFY";
      PedHash2[PedHash2["Soucent02AMM"] = 2674735073] = "Soucent02AMM";
      PedHash2[PedHash2["Soucent02AMO"] = 1082572151] = "Soucent02AMO";
      PedHash2[PedHash2["Soucent02AMY"] = 2896414922] = "Soucent02AMY";
      PedHash2[PedHash2["Soucent03AFY"] = 2276611093] = "Soucent03AFY";
      PedHash2[PedHash2["Soucent03AMM"] = 2346291386] = "Soucent03AMM";
      PedHash2[PedHash2["Soucent03AMO"] = 238213328] = "Soucent03AMO";
      PedHash2[PedHash2["Soucent03AMY"] = 3287349092] = "Soucent03AMY";
      PedHash2[PedHash2["Soucent04AMM"] = 3271294718] = "Soucent04AMM";
      PedHash2[PedHash2["Soucent04AMY"] = 2318861297] = "Soucent04AMY";
      PedHash2[PedHash2["Soucentmc01AFM"] = 3454621138] = "Soucentmc01AFM";
      PedHash2[PedHash2["Staggrm01AMO"] = 2442448387] = "Staggrm01AMO";
      PedHash2[PedHash2["Stbla01AMY"] = 3482496489] = "Stbla01AMY";
      PedHash2[PedHash2["Stbla02AMY"] = 2563194959] = "Stbla02AMY";
      PedHash2[PedHash2["Stlat01AMY"] = 2255803900] = "Stlat01AMY";
      PedHash2[PedHash2["Stlat02AMM"] = 3265820418] = "Stlat02AMM";
      PedHash2[PedHash2["Stripper01SFY"] = 1381498905] = "Stripper01SFY";
      PedHash2[PedHash2["Stripper02SFY"] = 1846523796] = "Stripper02SFY";
      PedHash2[PedHash2["StripperLiteSFY"] = 1544875514] = "StripperLiteSFY";
      PedHash2[PedHash2["Strperf01SMM"] = 2035992488] = "Strperf01SMM";
      PedHash2[PedHash2["Strpreach01SMM"] = 469792763] = "Strpreach01SMM";
      PedHash2[PedHash2["StrPunk01GMY"] = 4246489531] = "StrPunk01GMY";
      PedHash2[PedHash2["StrPunk02GMY"] = 228715206] = "StrPunk02GMY";
      PedHash2[PedHash2["Strvend01SMM"] = 3465614249] = "Strvend01SMM";
      PedHash2[PedHash2["Strvend01SMY"] = 2457805603] = "Strvend01SMY";
      PedHash2[PedHash2["Stwhi01AMY"] = 605602864] = "Stwhi01AMY";
      PedHash2[PedHash2["Stwhi02AMY"] = 919005580] = "Stwhi02AMY";
      PedHash2[PedHash2["Sunbathe01AMY"] = 3072929548] = "Sunbathe01AMY";
      PedHash2[PedHash2["Surfer01AMY"] = 3938633710] = "Surfer01AMY";
      PedHash2[PedHash2["Swat01SMY"] = 2374966032] = "Swat01SMY";
      PedHash2[PedHash2["Sweatshop01SFM"] = 824925120] = "Sweatshop01SFM";
      PedHash2[PedHash2["Sweatshop01SFY"] = 2231547570] = "Sweatshop01SFY";
      PedHash2[PedHash2["Tattoo01AMO"] = 2494442380] = "Tattoo01AMO";
      PedHash2[PedHash2["Tennis01AFY"] = 1426880966] = "Tennis01AFY";
      PedHash2[PedHash2["Tennis01AMM"] = 1416254276] = "Tennis01AMM";
      PedHash2[PedHash2["Topless01AFY"] = 2633130371] = "Topless01AFY";
      PedHash2[PedHash2["Tourist01AFM"] = 1347814329] = "Tourist01AFM";
      PedHash2[PedHash2["Tourist01AFY"] = 1446741360] = "Tourist01AFY";
      PedHash2[PedHash2["Tourist01AMM"] = 3365863812] = "Tourist01AMM";
      PedHash2[PedHash2["Tourist02AFY"] = 2435054400] = "Tourist02AFY";
      PedHash2[PedHash2["Tramp01AFM"] = 1224306523] = "Tramp01AFM";
      PedHash2[PedHash2["Tramp01AMM"] = 516505552] = "Tramp01AMM";
      PedHash2[PedHash2["Tramp01AMO"] = 390939205] = "Tramp01AMO";
      PedHash2[PedHash2["TrampBeac01AFM"] = 2359345766] = "TrampBeac01AFM";
      PedHash2[PedHash2["TrampBeac01AMM"] = 1404403376] = "TrampBeac01AMM";
      PedHash2[PedHash2["Tranvest01AMM"] = 3773208948] = "Tranvest01AMM";
      PedHash2[PedHash2["Tranvest02AMM"] = 4144940484] = "Tranvest02AMM";
      PedHash2[PedHash2["Trucker01SMM"] = 1498487404] = "Trucker01SMM";
      PedHash2[PedHash2["Ups01SMM"] = 2680389410] = "Ups01SMM";
      PedHash2[PedHash2["Ups02SMM"] = 3502104854] = "Ups02SMM";
      PedHash2[PedHash2["Uscg01SMY"] = 3389018345] = "Uscg01SMY";
      PedHash2[PedHash2["Vagos01GFY"] = 1520708641] = "Vagos01GFY";
      PedHash2[PedHash2["Valet01SMY"] = 999748158] = "Valet01SMY";
      PedHash2[PedHash2["Vindouche01AMY"] = 3247667175] = "Vindouche01AMY";
      PedHash2[PedHash2["Vinewood01AFY"] = 435429221] = "Vinewood01AFY";
      PedHash2[PedHash2["Vinewood01AMY"] = 1264851357] = "Vinewood01AMY";
      PedHash2[PedHash2["Vinewood02AFY"] = 3669401835] = "Vinewood02AFY";
      PedHash2[PedHash2["Vinewood02AMY"] = 1561705728] = "Vinewood02AMY";
      PedHash2[PedHash2["Vinewood03AFY"] = 933092024] = "Vinewood03AFY";
      PedHash2[PedHash2["Vinewood03AMY"] = 534725268] = "Vinewood03AMY";
      PedHash2[PedHash2["Vinewood04AFY"] = 4209271110] = "Vinewood04AFY";
      PedHash2[PedHash2["Vinewood04AMY"] = 835315305] = "Vinewood04AMY";
      PedHash2[PedHash2["Waiter01SMY"] = 2907468364] = "Waiter01SMY";
      PedHash2[PedHash2["WinClean01SMY"] = 1426951581] = "WinClean01SMY";
      PedHash2[PedHash2["Xmech01SMY"] = 1142162924] = "Xmech01SMY";
      PedHash2[PedHash2["Xmech02SMY"] = 3189832196] = "Xmech02SMY";
      PedHash2[PedHash2["Xmech02SMYMP"] = 1755203590] = "Xmech02SMYMP";
      PedHash2[PedHash2["Yoga01AFY"] = 3290105390] = "Yoga01AFY";
      PedHash2[PedHash2["Yoga01AMY"] = 2869588309] = "Yoga01AMY";
    })(PedHash = exports.PedHash || (exports.PedHash = {}));
  }
});

// ../../node_modules/fivem-js/lib/hashes/VehicleHash.js
var require_VehicleHash = __commonJS({
  "../../node_modules/fivem-js/lib/hashes/VehicleHash.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.VehicleHash = void 0;
    var VehicleHash;
    (function(VehicleHash2) {
      VehicleHash2[VehicleHash2["Adder"] = 3078201489] = "Adder";
      VehicleHash2[VehicleHash2["Airbus"] = 1283517198] = "Airbus";
      VehicleHash2[VehicleHash2["Airtug"] = 1560980623] = "Airtug";
      VehicleHash2[VehicleHash2["Akuma"] = 1672195559] = "Akuma";
      VehicleHash2[VehicleHash2["Alpha"] = 767087018] = "Alpha";
      VehicleHash2[VehicleHash2["Ambulance"] = 1171614426] = "Ambulance";
      VehicleHash2[VehicleHash2["Annihilator"] = 837858166] = "Annihilator";
      VehicleHash2[VehicleHash2["Apc"] = 562680400] = "Apc";
      VehicleHash2[VehicleHash2["Ardent"] = 159274291] = "Ardent";
      VehicleHash2[VehicleHash2["ArmyTanker"] = 3087536137] = "ArmyTanker";
      VehicleHash2[VehicleHash2["ArmyTrailer"] = 2818520053] = "ArmyTrailer";
      VehicleHash2[VehicleHash2["ArmyTrailer2"] = 2657817814] = "ArmyTrailer2";
      VehicleHash2[VehicleHash2["Asea"] = 2485144969] = "Asea";
      VehicleHash2[VehicleHash2["Asea2"] = 2487343317] = "Asea2";
      VehicleHash2[VehicleHash2["Asterope"] = 2391954683] = "Asterope";
      VehicleHash2[VehicleHash2["Avarus"] = 2179174271] = "Avarus";
      VehicleHash2[VehicleHash2["Bagger"] = 2154536131] = "Bagger";
      VehicleHash2[VehicleHash2["BaleTrailer"] = 3895125590] = "BaleTrailer";
      VehicleHash2[VehicleHash2["Baller"] = 3486135912] = "Baller";
      VehicleHash2[VehicleHash2["Baller2"] = 142944341] = "Baller2";
      VehicleHash2[VehicleHash2["Baller3"] = 1878062887] = "Baller3";
      VehicleHash2[VehicleHash2["Baller4"] = 634118882] = "Baller4";
      VehicleHash2[VehicleHash2["Baller5"] = 470404958] = "Baller5";
      VehicleHash2[VehicleHash2["Baller6"] = 666166960] = "Baller6";
      VehicleHash2[VehicleHash2["Banshee"] = 3253274834] = "Banshee";
      VehicleHash2[VehicleHash2["Banshee2"] = 633712403] = "Banshee2";
      VehicleHash2[VehicleHash2["Barracks"] = 3471458123] = "Barracks";
      VehicleHash2[VehicleHash2["Barracks2"] = 1074326203] = "Barracks2";
      VehicleHash2[VehicleHash2["Barracks3"] = 630371791] = "Barracks3";
      VehicleHash2[VehicleHash2["Bati"] = 4180675781] = "Bati";
      VehicleHash2[VehicleHash2["Bati2"] = 3403504941] = "Bati2";
      VehicleHash2[VehicleHash2["Benson"] = 2053223216] = "Benson";
      VehicleHash2[VehicleHash2["Besra"] = 1824333165] = "Besra";
      VehicleHash2[VehicleHash2["BestiaGTS"] = 1274868363] = "BestiaGTS";
      VehicleHash2[VehicleHash2["BF400"] = 86520421] = "BF400";
      VehicleHash2[VehicleHash2["BfInjection"] = 1126868326] = "BfInjection";
      VehicleHash2[VehicleHash2["Biff"] = 850991848] = "Biff";
      VehicleHash2[VehicleHash2["Bifta"] = 3945366167] = "Bifta";
      VehicleHash2[VehicleHash2["Bison"] = 4278019151] = "Bison";
      VehicleHash2[VehicleHash2["Bison2"] = 2072156101] = "Bison2";
      VehicleHash2[VehicleHash2["Bison3"] = 1739845664] = "Bison3";
      VehicleHash2[VehicleHash2["BJXL"] = 850565707] = "BJXL";
      VehicleHash2[VehicleHash2["Blade"] = 3089165662] = "Blade";
      VehicleHash2[VehicleHash2["Blazer"] = 2166734073] = "Blazer";
      VehicleHash2[VehicleHash2["Blazer2"] = 4246935337] = "Blazer2";
      VehicleHash2[VehicleHash2["Blazer3"] = 3025077634] = "Blazer3";
      VehicleHash2[VehicleHash2["Blazer4"] = 3854198872] = "Blazer4";
      VehicleHash2[VehicleHash2["Blazer5"] = 2704629607] = "Blazer5";
      VehicleHash2[VehicleHash2["Blimp"] = 4143991942] = "Blimp";
      VehicleHash2[VehicleHash2["Blimp2"] = 3681241380] = "Blimp2";
      VehicleHash2[VehicleHash2["Blista"] = 3950024287] = "Blista";
      VehicleHash2[VehicleHash2["Blista2"] = 1039032026] = "Blista2";
      VehicleHash2[VehicleHash2["Blista3"] = 3703315515] = "Blista3";
      VehicleHash2[VehicleHash2["Bmx"] = 1131912276] = "Bmx";
      VehicleHash2[VehicleHash2["BoatTrailer"] = 524108981] = "BoatTrailer";
      VehicleHash2[VehicleHash2["BobcatXL"] = 1069929536] = "BobcatXL";
      VehicleHash2[VehicleHash2["Bodhi2"] = 2859047862] = "Bodhi2";
      VehicleHash2[VehicleHash2["Boxville"] = 2307837162] = "Boxville";
      VehicleHash2[VehicleHash2["Boxville2"] = 4061868990] = "Boxville2";
      VehicleHash2[VehicleHash2["Boxville3"] = 121658888] = "Boxville3";
      VehicleHash2[VehicleHash2["Boxville4"] = 444171386] = "Boxville4";
      VehicleHash2[VehicleHash2["Boxville5"] = 682434785] = "Boxville5";
      VehicleHash2[VehicleHash2["Brawler"] = 2815302597] = "Brawler";
      VehicleHash2[VehicleHash2["Brickade"] = 3989239879] = "Brickade";
      VehicleHash2[VehicleHash2["Brioso"] = 1549126457] = "Brioso";
      VehicleHash2[VehicleHash2["BType"] = 117401876] = "BType";
      VehicleHash2[VehicleHash2["BType2"] = 3463132580] = "BType2";
      VehicleHash2[VehicleHash2["BType3"] = 3692679425] = "BType3";
      VehicleHash2[VehicleHash2["Buccaneer"] = 3612755468] = "Buccaneer";
      VehicleHash2[VehicleHash2["Buccaneer2"] = 3281516360] = "Buccaneer2";
      VehicleHash2[VehicleHash2["Buffalo"] = 3990165190] = "Buffalo";
      VehicleHash2[VehicleHash2["Buffalo2"] = 736902334] = "Buffalo2";
      VehicleHash2[VehicleHash2["Buffalo3"] = 237764926] = "Buffalo3";
      VehicleHash2[VehicleHash2["Bulldozer"] = 1886712733] = "Bulldozer";
      VehicleHash2[VehicleHash2["Bullet"] = 2598821281] = "Bullet";
      VehicleHash2[VehicleHash2["Burrito"] = 2948279460] = "Burrito";
      VehicleHash2[VehicleHash2["Burrito2"] = 3387490166] = "Burrito2";
      VehicleHash2[VehicleHash2["Burrito3"] = 2551651283] = "Burrito3";
      VehicleHash2[VehicleHash2["Burrito4"] = 893081117] = "Burrito4";
      VehicleHash2[VehicleHash2["Burrito5"] = 1132262048] = "Burrito5";
      VehicleHash2[VehicleHash2["Bus"] = 3581397346] = "Bus";
      VehicleHash2[VehicleHash2["Buzzard"] = 788747387] = "Buzzard";
      VehicleHash2[VehicleHash2["Buzzard2"] = 745926877] = "Buzzard2";
      VehicleHash2[VehicleHash2["CableCar"] = 3334677549] = "CableCar";
      VehicleHash2[VehicleHash2["Caddy"] = 1147287684] = "Caddy";
      VehicleHash2[VehicleHash2["Caddy2"] = 3757070668] = "Caddy2";
      VehicleHash2[VehicleHash2["Caddy3"] = 3525819835] = "Caddy3";
      VehicleHash2[VehicleHash2["Camper"] = 1876516712] = "Camper";
      VehicleHash2[VehicleHash2["Carbonizzare"] = 2072687711] = "Carbonizzare";
      VehicleHash2[VehicleHash2["CarbonRS"] = 11251904] = "CarbonRS";
      VehicleHash2[VehicleHash2["Cargobob"] = 4244420235] = "Cargobob";
      VehicleHash2[VehicleHash2["Cargobob2"] = 1621617168] = "Cargobob2";
      VehicleHash2[VehicleHash2["Cargobob3"] = 1394036463] = "Cargobob3";
      VehicleHash2[VehicleHash2["Cargobob4"] = 2025593404] = "Cargobob4";
      VehicleHash2[VehicleHash2["CargoPlane"] = 368211810] = "CargoPlane";
      VehicleHash2[VehicleHash2["Casco"] = 941800958] = "Casco";
      VehicleHash2[VehicleHash2["Cavalcade"] = 2006918058] = "Cavalcade";
      VehicleHash2[VehicleHash2["Cavalcade2"] = 3505073125] = "Cavalcade2";
      VehicleHash2[VehicleHash2["Cheetah"] = 2983812512] = "Cheetah";
      VehicleHash2[VehicleHash2["Cheetah2"] = 223240013] = "Cheetah2";
      VehicleHash2[VehicleHash2["Chimera"] = 6774487] = "Chimera";
      VehicleHash2[VehicleHash2["Chino"] = 349605904] = "Chino";
      VehicleHash2[VehicleHash2["Chino2"] = 2933279331] = "Chino2";
      VehicleHash2[VehicleHash2["Cliffhanger"] = 390201602] = "Cliffhanger";
      VehicleHash2[VehicleHash2["Coach"] = 2222034228] = "Coach";
      VehicleHash2[VehicleHash2["Cog55"] = 906642318] = "Cog55";
      VehicleHash2[VehicleHash2["Cog552"] = 704435172] = "Cog552";
      VehicleHash2[VehicleHash2["CogCabrio"] = 330661258] = "CogCabrio";
      VehicleHash2[VehicleHash2["Cognoscenti"] = 2264796e3] = "Cognoscenti";
      VehicleHash2[VehicleHash2["Cognoscenti2"] = 3690124666] = "Cognoscenti2";
      VehicleHash2[VehicleHash2["Comet2"] = 3249425686] = "Comet2";
      VehicleHash2[VehicleHash2["Comet3"] = 2272483501] = "Comet3";
      VehicleHash2[VehicleHash2["Contender"] = 683047626] = "Contender";
      VehicleHash2[VehicleHash2["Coquette"] = 108773431] = "Coquette";
      VehicleHash2[VehicleHash2["Coquette2"] = 1011753235] = "Coquette2";
      VehicleHash2[VehicleHash2["Coquette3"] = 784565758] = "Coquette3";
      VehicleHash2[VehicleHash2["Cruiser"] = 448402357] = "Cruiser";
      VehicleHash2[VehicleHash2["Crusader"] = 321739290] = "Crusader";
      VehicleHash2[VehicleHash2["Cuban800"] = 3650256867] = "Cuban800";
      VehicleHash2[VehicleHash2["Cutter"] = 3288047904] = "Cutter";
      VehicleHash2[VehicleHash2["Daemon"] = 2006142190] = "Daemon";
      VehicleHash2[VehicleHash2["Daemon2"] = 2890830793] = "Daemon2";
      VehicleHash2[VehicleHash2["Defiler"] = 822018448] = "Defiler";
      VehicleHash2[VehicleHash2["Diablous"] = 4055125828] = "Diablous";
      VehicleHash2[VehicleHash2["Diablous2"] = 1790834270] = "Diablous2";
      VehicleHash2[VehicleHash2["Dilettante"] = 3164157193] = "Dilettante";
      VehicleHash2[VehicleHash2["Dilettante2"] = 1682114128] = "Dilettante2";
      VehicleHash2[VehicleHash2["Dinghy"] = 1033245328] = "Dinghy";
      VehicleHash2[VehicleHash2["Dinghy2"] = 276773164] = "Dinghy2";
      VehicleHash2[VehicleHash2["Dinghy3"] = 509498602] = "Dinghy3";
      VehicleHash2[VehicleHash2["Dinghy4"] = 867467158] = "Dinghy4";
      VehicleHash2[VehicleHash2["DLoader"] = 1770332643] = "DLoader";
      VehicleHash2[VehicleHash2["DockTrailer"] = 2154757102] = "DockTrailer";
      VehicleHash2[VehicleHash2["Docktug"] = 3410276810] = "Docktug";
      VehicleHash2[VehicleHash2["Dodo"] = 3393804037] = "Dodo";
      VehicleHash2[VehicleHash2["Dominator"] = 80636076] = "Dominator";
      VehicleHash2[VehicleHash2["Dominator2"] = 3379262425] = "Dominator2";
      VehicleHash2[VehicleHash2["Double"] = 2623969160] = "Double";
      VehicleHash2[VehicleHash2["Dubsta"] = 1177543287] = "Dubsta";
      VehicleHash2[VehicleHash2["Dubsta2"] = 3900892662] = "Dubsta2";
      VehicleHash2[VehicleHash2["Dubsta3"] = 3057713523] = "Dubsta3";
      VehicleHash2[VehicleHash2["Dukes"] = 723973206] = "Dukes";
      VehicleHash2[VehicleHash2["Dukes2"] = 3968823444] = "Dukes2";
      VehicleHash2[VehicleHash2["Dump"] = 2164484578] = "Dump";
      VehicleHash2[VehicleHash2["Dune"] = 2633113103] = "Dune";
      VehicleHash2[VehicleHash2["Dune2"] = 534258863] = "Dune2";
      VehicleHash2[VehicleHash2["Dune3"] = 1897744184] = "Dune3";
      VehicleHash2[VehicleHash2["Dune4"] = 3467805257] = "Dune4";
      VehicleHash2[VehicleHash2["Dune5"] = 3982671785] = "Dune5";
      VehicleHash2[VehicleHash2["Duster"] = 970356638] = "Duster";
      VehicleHash2[VehicleHash2["Elegy"] = 196747873] = "Elegy";
      VehicleHash2[VehicleHash2["Elegy2"] = 3728579874] = "Elegy2";
      VehicleHash2[VehicleHash2["Emperor"] = 3609690755] = "Emperor";
      VehicleHash2[VehicleHash2["Emperor2"] = 2411965148] = "Emperor2";
      VehicleHash2[VehicleHash2["Emperor3"] = 3053254478] = "Emperor3";
      VehicleHash2[VehicleHash2["Enduro"] = 1753414259] = "Enduro";
      VehicleHash2[VehicleHash2["EntityXF"] = 3003014393] = "EntityXF";
      VehicleHash2[VehicleHash2["Esskey"] = 2035069708] = "Esskey";
      VehicleHash2[VehicleHash2["Exemplar"] = 4289813342] = "Exemplar";
      VehicleHash2[VehicleHash2["F620"] = 3703357e3] = "F620";
      VehicleHash2[VehicleHash2["Faction"] = 2175389151] = "Faction";
      VehicleHash2[VehicleHash2["Faction2"] = 2504420315] = "Faction2";
      VehicleHash2[VehicleHash2["Faction3"] = 2255212070] = "Faction3";
      VehicleHash2[VehicleHash2["Faggio"] = 2452219115] = "Faggio";
      VehicleHash2[VehicleHash2["Faggio2"] = 55628203] = "Faggio2";
      VehicleHash2[VehicleHash2["Faggio3"] = 3005788552] = "Faggio3";
      VehicleHash2[VehicleHash2["FBI"] = 1127131465] = "FBI";
      VehicleHash2[VehicleHash2["FBI2"] = 2647026068] = "FBI2";
      VehicleHash2[VehicleHash2["FCR"] = 627535535] = "FCR";
      VehicleHash2[VehicleHash2["FCR2"] = 3537231886] = "FCR2";
      VehicleHash2[VehicleHash2["Felon"] = 3903372712] = "Felon";
      VehicleHash2[VehicleHash2["Felon2"] = 4205676014] = "Felon2";
      VehicleHash2[VehicleHash2["Feltzer2"] = 2299640309] = "Feltzer2";
      VehicleHash2[VehicleHash2["Feltzer3"] = 2728226064] = "Feltzer3";
      VehicleHash2[VehicleHash2["FireTruk"] = 1938952078] = "FireTruk";
      VehicleHash2[VehicleHash2["Fixter"] = 3458454463] = "Fixter";
      VehicleHash2[VehicleHash2["Flatbed"] = 1353720154] = "Flatbed";
      VehicleHash2[VehicleHash2["Forklift"] = 1491375716] = "Forklift";
      VehicleHash2[VehicleHash2["FMJ"] = 1426219628] = "FMJ";
      VehicleHash2[VehicleHash2["FQ2"] = 3157435195] = "FQ2";
      VehicleHash2[VehicleHash2["Freight"] = 1030400667] = "Freight";
      VehicleHash2[VehicleHash2["FreightCar"] = 184361638] = "FreightCar";
      VehicleHash2[VehicleHash2["FreightCont1"] = 920453016] = "FreightCont1";
      VehicleHash2[VehicleHash2["FreightCont2"] = 240201337] = "FreightCont2";
      VehicleHash2[VehicleHash2["FreightGrain"] = 642617954] = "FreightGrain";
      VehicleHash2[VehicleHash2["FreightTrailer"] = 3517691494] = "FreightTrailer";
      VehicleHash2[VehicleHash2["Frogger"] = 744705981] = "Frogger";
      VehicleHash2[VehicleHash2["Frogger2"] = 1949211328] = "Frogger2";
      VehicleHash2[VehicleHash2["Fugitive"] = 1909141499] = "Fugitive";
      VehicleHash2[VehicleHash2["Furoregt"] = 3205927392] = "Furoregt";
      VehicleHash2[VehicleHash2["Fusilade"] = 499169875] = "Fusilade";
      VehicleHash2[VehicleHash2["Futo"] = 2016857647] = "Futo";
      VehicleHash2[VehicleHash2["Gargoyle"] = 741090084] = "Gargoyle";
      VehicleHash2[VehicleHash2["Gauntlet"] = 2494797253] = "Gauntlet";
      VehicleHash2[VehicleHash2["Gauntlet2"] = 349315417] = "Gauntlet2";
      VehicleHash2[VehicleHash2["GBurrito"] = 2549763894] = "GBurrito";
      VehicleHash2[VehicleHash2["GBurrito2"] = 296357396] = "GBurrito2";
      VehicleHash2[VehicleHash2["Glendale"] = 75131841] = "Glendale";
      VehicleHash2[VehicleHash2["GP1"] = 1234311532] = "GP1";
      VehicleHash2[VehicleHash2["GrainTrailer"] = 1019737494] = "GrainTrailer";
      VehicleHash2[VehicleHash2["Granger"] = 2519238556] = "Granger";
      VehicleHash2[VehicleHash2["Gresley"] = 2751205197] = "Gresley";
      VehicleHash2[VehicleHash2["Guardian"] = 2186977100] = "Guardian";
      VehicleHash2[VehicleHash2["Habanero"] = 884422927] = "Habanero";
      VehicleHash2[VehicleHash2["Hakuchou"] = 1265391242] = "Hakuchou";
      VehicleHash2[VehicleHash2["Hakuchou2"] = 4039289119] = "Hakuchou2";
      VehicleHash2[VehicleHash2["HalfTrack"] = 4262731174] = "HalfTrack";
      VehicleHash2[VehicleHash2["Handler"] = 444583674] = "Handler";
      VehicleHash2[VehicleHash2["Hauler"] = 1518533038] = "Hauler";
      VehicleHash2[VehicleHash2["Hauler2"] = 387748548] = "Hauler2";
      VehicleHash2[VehicleHash2["Hexer"] = 301427732] = "Hexer";
      VehicleHash2[VehicleHash2["Hotknife"] = 37348240] = "Hotknife";
      VehicleHash2[VehicleHash2["Huntley"] = 486987393] = "Huntley";
      VehicleHash2[VehicleHash2["Hydra"] = 970385471] = "Hydra";
      VehicleHash2[VehicleHash2["Infernus"] = 418536135] = "Infernus";
      VehicleHash2[VehicleHash2["Infernus2"] = 2889029532] = "Infernus2";
      VehicleHash2[VehicleHash2["Ingot"] = 3005245074] = "Ingot";
      VehicleHash2[VehicleHash2["Innovation"] = 4135840458] = "Innovation";
      VehicleHash2[VehicleHash2["Insurgent"] = 2434067162] = "Insurgent";
      VehicleHash2[VehicleHash2["Insurgent2"] = 2071877360] = "Insurgent2";
      VehicleHash2[VehicleHash2["Insurgent3"] = 2370534026] = "Insurgent3";
      VehicleHash2[VehicleHash2["Intruder"] = 886934177] = "Intruder";
      VehicleHash2[VehicleHash2["Issi2"] = 3117103977] = "Issi2";
      VehicleHash2[VehicleHash2["ItaliGTB"] = 2246633323] = "ItaliGTB";
      VehicleHash2[VehicleHash2["ItaliGTB2"] = 3812247419] = "ItaliGTB2";
      VehicleHash2[VehicleHash2["Jackal"] = 3670438162] = "Jackal";
      VehicleHash2[VehicleHash2["JB700"] = 1051415893] = "JB700";
      VehicleHash2[VehicleHash2["Jester"] = 2997294755] = "Jester";
      VehicleHash2[VehicleHash2["Jester2"] = 3188613414] = "Jester2";
      VehicleHash2[VehicleHash2["Jet"] = 1058115860] = "Jet";
      VehicleHash2[VehicleHash2["Jetmax"] = 861409633] = "Jetmax";
      VehicleHash2[VehicleHash2["Journey"] = 4174679674] = "Journey";
      VehicleHash2[VehicleHash2["Kalahari"] = 92612664] = "Kalahari";
      VehicleHash2[VehicleHash2["Khamelion"] = 544021352] = "Khamelion";
      VehicleHash2[VehicleHash2["Kuruma"] = 2922118804] = "Kuruma";
      VehicleHash2[VehicleHash2["Kuruma2"] = 410882957] = "Kuruma2";
      VehicleHash2[VehicleHash2["Landstalker"] = 1269098716] = "Landstalker";
      VehicleHash2[VehicleHash2["Lazer"] = 3013282534] = "Lazer";
      VehicleHash2[VehicleHash2["LE7B"] = 3062131285] = "LE7B";
      VehicleHash2[VehicleHash2["Lectro"] = 640818791] = "Lectro";
      VehicleHash2[VehicleHash2["Lguard"] = 469291905] = "Lguard";
      VehicleHash2[VehicleHash2["Limo2"] = 4180339789] = "Limo2";
      VehicleHash2[VehicleHash2["Lurcher"] = 2068293287] = "Lurcher";
      VehicleHash2[VehicleHash2["Luxor"] = 621481054] = "Luxor";
      VehicleHash2[VehicleHash2["Luxor2"] = 3080673438] = "Luxor2";
      VehicleHash2[VehicleHash2["Lynx"] = 482197771] = "Lynx";
      VehicleHash2[VehicleHash2["Mamba"] = 2634021974] = "Mamba";
      VehicleHash2[VehicleHash2["Mammatus"] = 2548391185] = "Mammatus";
      VehicleHash2[VehicleHash2["Manana"] = 2170765704] = "Manana";
      VehicleHash2[VehicleHash2["Manchez"] = 2771538552] = "Manchez";
      VehicleHash2[VehicleHash2["Marquis"] = 3251507587] = "Marquis";
      VehicleHash2[VehicleHash2["Marshall"] = 1233534620] = "Marshall";
      VehicleHash2[VehicleHash2["Massacro"] = 4152024626] = "Massacro";
      VehicleHash2[VehicleHash2["Massacro2"] = 3663206819] = "Massacro2";
      VehicleHash2[VehicleHash2["Maverick"] = 2634305738] = "Maverick";
      VehicleHash2[VehicleHash2["Mesa"] = 914654722] = "Mesa";
      VehicleHash2[VehicleHash2["Mesa2"] = 3546958660] = "Mesa2";
      VehicleHash2[VehicleHash2["Mesa3"] = 2230595153] = "Mesa3";
      VehicleHash2[VehicleHash2["MetroTrain"] = 868868440] = "MetroTrain";
      VehicleHash2[VehicleHash2["Miljet"] = 165154707] = "Miljet";
      VehicleHash2[VehicleHash2["Minivan"] = 3984502180] = "Minivan";
      VehicleHash2[VehicleHash2["Minivan2"] = 3168702960] = "Minivan2";
      VehicleHash2[VehicleHash2["Mixer"] = 3510150843] = "Mixer";
      VehicleHash2[VehicleHash2["Mixer2"] = 475220373] = "Mixer2";
      VehicleHash2[VehicleHash2["Monroe"] = 3861591579] = "Monroe";
      VehicleHash2[VehicleHash2["Monster"] = 3449006043] = "Monster";
      VehicleHash2[VehicleHash2["Moonbeam"] = 525509695] = "Moonbeam";
      VehicleHash2[VehicleHash2["Moonbeam2"] = 1896491931] = "Moonbeam2";
      VehicleHash2[VehicleHash2["Mower"] = 1783355638] = "Mower";
      VehicleHash2[VehicleHash2["Mule"] = 904750859] = "Mule";
      VehicleHash2[VehicleHash2["Mule2"] = 3244501995] = "Mule2";
      VehicleHash2[VehicleHash2["Mule3"] = 2242229361] = "Mule3";
      VehicleHash2[VehicleHash2["Nemesis"] = 3660088182] = "Nemesis";
      VehicleHash2[VehicleHash2["Nero"] = 1034187331] = "Nero";
      VehicleHash2[VehicleHash2["Nero2"] = 1093792632] = "Nero2";
      VehicleHash2[VehicleHash2["Nightblade"] = 2688780135] = "Nightblade";
      VehicleHash2[VehicleHash2["Nightshade"] = 2351681756] = "Nightshade";
      VehicleHash2[VehicleHash2["NightShark"] = 433954513] = "NightShark";
      VehicleHash2[VehicleHash2["Nimbus"] = 2999939664] = "Nimbus";
      VehicleHash2[VehicleHash2["Ninef"] = 1032823388] = "Ninef";
      VehicleHash2[VehicleHash2["Ninef2"] = 2833484545] = "Ninef2";
      VehicleHash2[VehicleHash2["Omnis"] = 3517794615] = "Omnis";
      VehicleHash2[VehicleHash2["Oppressor"] = 884483972] = "Oppressor";
      VehicleHash2[VehicleHash2["Oracle"] = 1348744438] = "Oracle";
      VehicleHash2[VehicleHash2["Oracle2"] = 3783366066] = "Oracle2";
      VehicleHash2[VehicleHash2["Osiris"] = 1987142870] = "Osiris";
      VehicleHash2[VehicleHash2["Packer"] = 569305213] = "Packer";
      VehicleHash2[VehicleHash2["Panto"] = 3863274624] = "Panto";
      VehicleHash2[VehicleHash2["Paradise"] = 1488164764] = "Paradise";
      VehicleHash2[VehicleHash2["Patriot"] = 3486509883] = "Patriot";
      VehicleHash2[VehicleHash2["PBus"] = 2287941233] = "PBus";
      VehicleHash2[VehicleHash2["PCJ"] = 3385765638] = "PCJ";
      VehicleHash2[VehicleHash2["Penetrator"] = 2536829930] = "Penetrator";
      VehicleHash2[VehicleHash2["Penumbra"] = 3917501776] = "Penumbra";
      VehicleHash2[VehicleHash2["Peyote"] = 1830407356] = "Peyote";
      VehicleHash2[VehicleHash2["Pfister811"] = 2465164804] = "Pfister811";
      VehicleHash2[VehicleHash2["Phantom"] = 2157618379] = "Phantom";
      VehicleHash2[VehicleHash2["Phantom2"] = 2645431192] = "Phantom2";
      VehicleHash2[VehicleHash2["Phantom3"] = 177270108] = "Phantom3";
      VehicleHash2[VehicleHash2["Phoenix"] = 2199527893] = "Phoenix";
      VehicleHash2[VehicleHash2["Picador"] = 1507916787] = "Picador";
      VehicleHash2[VehicleHash2["Pigalle"] = 1078682497] = "Pigalle";
      VehicleHash2[VehicleHash2["Police"] = 2046537925] = "Police";
      VehicleHash2[VehicleHash2["Police2"] = 2667966721] = "Police2";
      VehicleHash2[VehicleHash2["Police3"] = 1912215274] = "Police3";
      VehicleHash2[VehicleHash2["Police4"] = 2321795001] = "Police4";
      VehicleHash2[VehicleHash2["Policeb"] = 4260343491] = "Policeb";
      VehicleHash2[VehicleHash2["PoliceOld1"] = 2758042359] = "PoliceOld1";
      VehicleHash2[VehicleHash2["PoliceOld2"] = 2515846680] = "PoliceOld2";
      VehicleHash2[VehicleHash2["PoliceT"] = 456714581] = "PoliceT";
      VehicleHash2[VehicleHash2["Polmav"] = 353883353] = "Polmav";
      VehicleHash2[VehicleHash2["Pony"] = 4175309224] = "Pony";
      VehicleHash2[VehicleHash2["Pony2"] = 943752001] = "Pony2";
      VehicleHash2[VehicleHash2["Pounder"] = 2112052861] = "Pounder";
      VehicleHash2[VehicleHash2["Prairie"] = 2844316578] = "Prairie";
      VehicleHash2[VehicleHash2["Pranger"] = 741586030] = "Pranger";
      VehicleHash2[VehicleHash2["Predator"] = 3806844075] = "Predator";
      VehicleHash2[VehicleHash2["Premier"] = 2411098011] = "Premier";
      VehicleHash2[VehicleHash2["Primo"] = 3144368207] = "Primo";
      VehicleHash2[VehicleHash2["Primo2"] = 2254540506] = "Primo2";
      VehicleHash2[VehicleHash2["PropTrailer"] = 356391690] = "PropTrailer";
      VehicleHash2[VehicleHash2["Prototipo"] = 2123327359] = "Prototipo";
      VehicleHash2[VehicleHash2["Radi"] = 2643899483] = "Radi";
      VehicleHash2[VehicleHash2["RakeTrailer"] = 390902130] = "RakeTrailer";
      VehicleHash2[VehicleHash2["RancherXL"] = 1645267888] = "RancherXL";
      VehicleHash2[VehicleHash2["RancherXL2"] = 1933662059] = "RancherXL2";
      VehicleHash2[VehicleHash2["RallyTruck"] = 2191146052] = "RallyTruck";
      VehicleHash2[VehicleHash2["RapidGT"] = 2360515092] = "RapidGT";
      VehicleHash2[VehicleHash2["RapidGT2"] = 1737773231] = "RapidGT2";
      VehicleHash2[VehicleHash2["Raptor"] = 3620039993] = "Raptor";
      VehicleHash2[VehicleHash2["RatBike"] = 1873600305] = "RatBike";
      VehicleHash2[VehicleHash2["RatLoader"] = 3627815886] = "RatLoader";
      VehicleHash2[VehicleHash2["RatLoader2"] = 3705788919] = "RatLoader2";
      VehicleHash2[VehicleHash2["Reaper"] = 234062309] = "Reaper";
      VehicleHash2[VehicleHash2["Rebel"] = 3087195462] = "Rebel";
      VehicleHash2[VehicleHash2["Rebel2"] = 2249373259] = "Rebel2";
      VehicleHash2[VehicleHash2["Regina"] = 4280472072] = "Regina";
      VehicleHash2[VehicleHash2["RentalBus"] = 3196165219] = "RentalBus";
      VehicleHash2[VehicleHash2["Rhapsody"] = 841808271] = "Rhapsody";
      VehicleHash2[VehicleHash2["Rhino"] = 782665360] = "Rhino";
      VehicleHash2[VehicleHash2["Riot"] = 3089277354] = "Riot";
      VehicleHash2[VehicleHash2["Ripley"] = 3448987385] = "Ripley";
      VehicleHash2[VehicleHash2["Rocoto"] = 2136773105] = "Rocoto";
      VehicleHash2[VehicleHash2["Romero"] = 627094268] = "Romero";
      VehicleHash2[VehicleHash2["Rubble"] = 2589662668] = "Rubble";
      VehicleHash2[VehicleHash2["Ruffian"] = 3401388520] = "Ruffian";
      VehicleHash2[VehicleHash2["Ruiner"] = 4067225593] = "Ruiner";
      VehicleHash2[VehicleHash2["Ruiner2"] = 941494461] = "Ruiner2";
      VehicleHash2[VehicleHash2["Ruiner3"] = 777714999] = "Ruiner3";
      VehicleHash2[VehicleHash2["Rumpo"] = 1162065741] = "Rumpo";
      VehicleHash2[VehicleHash2["Rumpo2"] = 2518351607] = "Rumpo2";
      VehicleHash2[VehicleHash2["Rumpo3"] = 1475773103] = "Rumpo3";
      VehicleHash2[VehicleHash2["Ruston"] = 719660200] = "Ruston";
      VehicleHash2[VehicleHash2["SabreGT"] = 2609945748] = "SabreGT";
      VehicleHash2[VehicleHash2["SabreGT2"] = 223258115] = "SabreGT2";
      VehicleHash2[VehicleHash2["Sadler"] = 3695398481] = "Sadler";
      VehicleHash2[VehicleHash2["Sadler2"] = 734217681] = "Sadler2";
      VehicleHash2[VehicleHash2["Sanchez"] = 788045382] = "Sanchez";
      VehicleHash2[VehicleHash2["Sanchez2"] = 2841686334] = "Sanchez2";
      VehicleHash2[VehicleHash2["Sanctus"] = 1491277511] = "Sanctus";
      VehicleHash2[VehicleHash2["Sandking"] = 3105951696] = "Sandking";
      VehicleHash2[VehicleHash2["Sandking2"] = 989381445] = "Sandking2";
      VehicleHash2[VehicleHash2["Savage"] = 4212341271] = "Savage";
      VehicleHash2[VehicleHash2["Schafter2"] = 3039514899] = "Schafter2";
      VehicleHash2[VehicleHash2["Schafter3"] = 2809443750] = "Schafter3";
      VehicleHash2[VehicleHash2["Schafter4"] = 1489967196] = "Schafter4";
      VehicleHash2[VehicleHash2["Schafter5"] = 3406724313] = "Schafter5";
      VehicleHash2[VehicleHash2["Schafter6"] = 1922255844] = "Schafter6";
      VehicleHash2[VehicleHash2["Schwarzer"] = 3548084598] = "Schwarzer";
      VehicleHash2[VehicleHash2["Scorcher"] = 4108429845] = "Scorcher";
      VehicleHash2[VehicleHash2["Scrap"] = 2594165727] = "Scrap";
      VehicleHash2[VehicleHash2["Seashark"] = 3264692260] = "Seashark";
      VehicleHash2[VehicleHash2["Seashark2"] = 3678636260] = "Seashark2";
      VehicleHash2[VehicleHash2["Seashark3"] = 3983945033] = "Seashark3";
      VehicleHash2[VehicleHash2["Seminole"] = 1221512915] = "Seminole";
      VehicleHash2[VehicleHash2["Sentinel"] = 1349725314] = "Sentinel";
      VehicleHash2[VehicleHash2["Sentinel2"] = 873639469] = "Sentinel2";
      VehicleHash2[VehicleHash2["Serrano"] = 1337041428] = "Serrano";
      VehicleHash2[VehicleHash2["Seven70"] = 2537130571] = "Seven70";
      VehicleHash2[VehicleHash2["Shamal"] = 3080461301] = "Shamal";
      VehicleHash2[VehicleHash2["Sheava"] = 819197656] = "Sheava";
      VehicleHash2[VehicleHash2["Sheriff"] = 2611638396] = "Sheriff";
      VehicleHash2[VehicleHash2["Sheriff2"] = 1922257928] = "Sheriff2";
      VehicleHash2[VehicleHash2["Shotaro"] = 3889340782] = "Shotaro";
      VehicleHash2[VehicleHash2["Skylift"] = 1044954915] = "Skylift";
      VehicleHash2[VehicleHash2["SlamVan"] = 729783779] = "SlamVan";
      VehicleHash2[VehicleHash2["SlamVan2"] = 833469436] = "SlamVan2";
      VehicleHash2[VehicleHash2["SlamVan3"] = 1119641113] = "SlamVan3";
      VehicleHash2[VehicleHash2["Sovereign"] = 743478836] = "Sovereign";
      VehicleHash2[VehicleHash2["Specter"] = 1886268224] = "Specter";
      VehicleHash2[VehicleHash2["Specter2"] = 1074745671] = "Specter2";
      VehicleHash2[VehicleHash2["Speeder"] = 231083307] = "Speeder";
      VehicleHash2[VehicleHash2["Speeder2"] = 437538602] = "Speeder2";
      VehicleHash2[VehicleHash2["Speedo"] = 3484649228] = "Speedo";
      VehicleHash2[VehicleHash2["Speedo2"] = 728614474] = "Speedo2";
      VehicleHash2[VehicleHash2["Squalo"] = 400514754] = "Squalo";
      VehicleHash2[VehicleHash2["Stalion"] = 1923400478] = "Stalion";
      VehicleHash2[VehicleHash2["Stalion2"] = 3893323758] = "Stalion2";
      VehicleHash2[VehicleHash2["Stanier"] = 2817386317] = "Stanier";
      VehicleHash2[VehicleHash2["Stinger"] = 1545842587] = "Stinger";
      VehicleHash2[VehicleHash2["StingerGT"] = 2196019706] = "StingerGT";
      VehicleHash2[VehicleHash2["Stockade"] = 1747439474] = "Stockade";
      VehicleHash2[VehicleHash2["Stockade3"] = 4080511798] = "Stockade3";
      VehicleHash2[VehicleHash2["Stratum"] = 1723137093] = "Stratum";
      VehicleHash2[VehicleHash2["Stretch"] = 2333339779] = "Stretch";
      VehicleHash2[VehicleHash2["Stunt"] = 2172210288] = "Stunt";
      VehicleHash2[VehicleHash2["Submersible"] = 771711535] = "Submersible";
      VehicleHash2[VehicleHash2["Submersible2"] = 3228633070] = "Submersible2";
      VehicleHash2[VehicleHash2["Sultan"] = 970598228] = "Sultan";
      VehicleHash2[VehicleHash2["SultanRS"] = 3999278268] = "SultanRS";
      VehicleHash2[VehicleHash2["Suntrap"] = 4012021193] = "Suntrap";
      VehicleHash2[VehicleHash2["Superd"] = 1123216662] = "Superd";
      VehicleHash2[VehicleHash2["Supervolito"] = 710198397] = "Supervolito";
      VehicleHash2[VehicleHash2["Supervolito2"] = 2623428164] = "Supervolito2";
      VehicleHash2[VehicleHash2["Surano"] = 384071873] = "Surano";
      VehicleHash2[VehicleHash2["Surfer"] = 699456151] = "Surfer";
      VehicleHash2[VehicleHash2["Surfer2"] = 2983726598] = "Surfer2";
      VehicleHash2[VehicleHash2["Surge"] = 2400073108] = "Surge";
      VehicleHash2[VehicleHash2["Swift2"] = 1075432268] = "Swift2";
      VehicleHash2[VehicleHash2["Swift"] = 3955379698] = "Swift";
      VehicleHash2[VehicleHash2["T20"] = 1663218586] = "T20";
      VehicleHash2[VehicleHash2["Taco"] = 1951180813] = "Taco";
      VehicleHash2[VehicleHash2["Tailgater"] = 3286105550] = "Tailgater";
      VehicleHash2[VehicleHash2["Tampa"] = 972671128] = "Tampa";
      VehicleHash2[VehicleHash2["Tampa2"] = 3223586949] = "Tampa2";
      VehicleHash2[VehicleHash2["Tampa3"] = 3084515313] = "Tampa3";
      VehicleHash2[VehicleHash2["Tanker"] = 3564062519] = "Tanker";
      VehicleHash2[VehicleHash2["Tanker2"] = 1956216962] = "Tanker2";
      VehicleHash2[VehicleHash2["TankerCar"] = 586013744] = "TankerCar";
      VehicleHash2[VehicleHash2["Taxi"] = 3338918751] = "Taxi";
      VehicleHash2[VehicleHash2["Technical"] = 2198148358] = "Technical";
      VehicleHash2[VehicleHash2["Technical2"] = 1180875963] = "Technical2";
      VehicleHash2[VehicleHash2["Technical3"] = 1356124575] = "Technical3";
      VehicleHash2[VehicleHash2["Tempesta"] = 272929391] = "Tempesta";
      VehicleHash2[VehicleHash2["Thrust"] = 1836027715] = "Thrust";
      VehicleHash2[VehicleHash2["TipTruck"] = 48339065] = "TipTruck";
      VehicleHash2[VehicleHash2["TipTruck2"] = 3347205726] = "TipTruck2";
      VehicleHash2[VehicleHash2["Titan"] = 1981688531] = "Titan";
      VehicleHash2[VehicleHash2["Torero"] = 1504306544] = "Torero";
      VehicleHash2[VehicleHash2["Tornado"] = 464687292] = "Tornado";
      VehicleHash2[VehicleHash2["Tornado2"] = 1531094468] = "Tornado2";
      VehicleHash2[VehicleHash2["Tornado3"] = 1762279763] = "Tornado3";
      VehicleHash2[VehicleHash2["Tornado4"] = 2261744861] = "Tornado4";
      VehicleHash2[VehicleHash2["Tornado5"] = 2497353967] = "Tornado5";
      VehicleHash2[VehicleHash2["Tornado6"] = 2736567667] = "Tornado6";
      VehicleHash2[VehicleHash2["Toro"] = 1070967343] = "Toro";
      VehicleHash2[VehicleHash2["Toro2"] = 908897389] = "Toro2";
      VehicleHash2[VehicleHash2["Tourbus"] = 1941029835] = "Tourbus";
      VehicleHash2[VehicleHash2["TowTruck"] = 2971866336] = "TowTruck";
      VehicleHash2[VehicleHash2["TowTruck2"] = 3852654278] = "TowTruck2";
      VehicleHash2[VehicleHash2["TR2"] = 2078290630] = "TR2";
      VehicleHash2[VehicleHash2["TR3"] = 1784254509] = "TR3";
      VehicleHash2[VehicleHash2["TR4"] = 2091594960] = "TR4";
      VehicleHash2[VehicleHash2["Tractor"] = 1641462412] = "Tractor";
      VehicleHash2[VehicleHash2["Tractor2"] = 2218488798] = "Tractor2";
      VehicleHash2[VehicleHash2["Tractor3"] = 1445631933] = "Tractor3";
      VehicleHash2[VehicleHash2["TrailerLogs"] = 2016027501] = "TrailerLogs";
      VehicleHash2[VehicleHash2["TrailerLarge"] = 1502869817] = "TrailerLarge";
      VehicleHash2[VehicleHash2["Trailers"] = 3417488910] = "Trailers";
      VehicleHash2[VehicleHash2["Trailers2"] = 2715434129] = "Trailers2";
      VehicleHash2[VehicleHash2["Trailers3"] = 2236089197] = "Trailers3";
      VehicleHash2[VehicleHash2["Trailers4"] = 3194418602] = "Trailers4";
      VehicleHash2[VehicleHash2["TrailerSmall"] = 712162987] = "TrailerSmall";
      VehicleHash2[VehicleHash2["TrailerSmall2"] = 2413121211] = "TrailerSmall2";
      VehicleHash2[VehicleHash2["Trash"] = 1917016601] = "Trash";
      VehicleHash2[VehicleHash2["Trash2"] = 3039269212] = "Trash2";
      VehicleHash2[VehicleHash2["TRFlat"] = 2942498482] = "TRFlat";
      VehicleHash2[VehicleHash2["TriBike"] = 1127861609] = "TriBike";
      VehicleHash2[VehicleHash2["TriBike2"] = 3061159916] = "TriBike2";
      VehicleHash2[VehicleHash2["TriBike3"] = 3894672200] = "TriBike3";
      VehicleHash2[VehicleHash2["TrophyTruck"] = 101905590] = "TrophyTruck";
      VehicleHash2[VehicleHash2["TrophyTruck2"] = 3631668194] = "TrophyTruck2";
      VehicleHash2[VehicleHash2["Tropic"] = 290013743] = "Tropic";
      VehicleHash2[VehicleHash2["Tropic2"] = 1448677353] = "Tropic2";
      VehicleHash2[VehicleHash2["Tropos"] = 1887331236] = "Tropos";
      VehicleHash2[VehicleHash2["Tug"] = 2194326579] = "Tug";
      VehicleHash2[VehicleHash2["Turismor"] = 408192225] = "Turismor";
      VehicleHash2[VehicleHash2["Turismo2"] = 3312836369] = "Turismo2";
      VehicleHash2[VehicleHash2["TVTrailer"] = 2524324030] = "TVTrailer";
      VehicleHash2[VehicleHash2["Tyrus"] = 2067820283] = "Tyrus";
      VehicleHash2[VehicleHash2["UtilliTruck"] = 516990260] = "UtilliTruck";
      VehicleHash2[VehicleHash2["UtilliTruck2"] = 887537515] = "UtilliTruck2";
      VehicleHash2[VehicleHash2["UtilliTruck3"] = 2132890591] = "UtilliTruck3";
      VehicleHash2[VehicleHash2["Vacca"] = 338562499] = "Vacca";
      VehicleHash2[VehicleHash2["Vader"] = 4154065143] = "Vader";
      VehicleHash2[VehicleHash2["Vagner"] = 1939284556] = "Vagner";
      VehicleHash2[VehicleHash2["Valkyrie"] = 2694714877] = "Valkyrie";
      VehicleHash2[VehicleHash2["Valkyrie2"] = 1543134283] = "Valkyrie2";
      VehicleHash2[VehicleHash2["Velum"] = 2621610858] = "Velum";
      VehicleHash2[VehicleHash2["Velum2"] = 1077420264] = "Velum2";
      VehicleHash2[VehicleHash2["Verlierer2"] = 1102544804] = "Verlierer2";
      VehicleHash2[VehicleHash2["Vestra"] = 1341619767] = "Vestra";
      VehicleHash2[VehicleHash2["Vigero"] = 3469130167] = "Vigero";
      VehicleHash2[VehicleHash2["Vindicator"] = 2941886209] = "Vindicator";
      VehicleHash2[VehicleHash2["Virgo"] = 3796912450] = "Virgo";
      VehicleHash2[VehicleHash2["Virgo2"] = 3395457658] = "Virgo2";
      VehicleHash2[VehicleHash2["Virgo3"] = 16646064] = "Virgo3";
      VehicleHash2[VehicleHash2["Volatus"] = 2449479409] = "Volatus";
      VehicleHash2[VehicleHash2["Voltic"] = 2672523198] = "Voltic";
      VehicleHash2[VehicleHash2["Voltic2"] = 989294410] = "Voltic2";
      VehicleHash2[VehicleHash2["Voodoo"] = 2006667053] = "Voodoo";
      VehicleHash2[VehicleHash2["Voodoo2"] = 523724515] = "Voodoo2";
      VehicleHash2[VehicleHash2["Vortex"] = 3685342204] = "Vortex";
      VehicleHash2[VehicleHash2["Warrener"] = 1373123368] = "Warrener";
      VehicleHash2[VehicleHash2["Washington"] = 1777363799] = "Washington";
      VehicleHash2[VehicleHash2["Wastelander"] = 2382949506] = "Wastelander";
      VehicleHash2[VehicleHash2["Windsor"] = 1581459400] = "Windsor";
      VehicleHash2[VehicleHash2["Windsor2"] = 2364918497] = "Windsor2";
      VehicleHash2[VehicleHash2["Wolfsbane"] = 3676349299] = "Wolfsbane";
      VehicleHash2[VehicleHash2["XA21"] = 917809321] = "XA21";
      VehicleHash2[VehicleHash2["XLS"] = 1203490606] = "XLS";
      VehicleHash2[VehicleHash2["XLS2"] = 3862958888] = "XLS2";
      VehicleHash2[VehicleHash2["Youga"] = 65402552] = "Youga";
      VehicleHash2[VehicleHash2["Youga2"] = 1026149675] = "Youga2";
      VehicleHash2[VehicleHash2["Zentorno"] = 2891838741] = "Zentorno";
      VehicleHash2[VehicleHash2["Zion"] = 3172678083] = "Zion";
      VehicleHash2[VehicleHash2["Zion2"] = 3101863448] = "Zion2";
      VehicleHash2[VehicleHash2["ZombieA"] = 3285698347] = "ZombieA";
      VehicleHash2[VehicleHash2["ZombieB"] = 3724934023] = "ZombieB";
      VehicleHash2[VehicleHash2["ZType"] = 758895617] = "ZType";
    })(VehicleHash = exports.VehicleHash || (exports.VehicleHash = {}));
  }
});

// ../../node_modules/fivem-js/lib/hashes/WeaponHash.js
var require_WeaponHash = __commonJS({
  "../../node_modules/fivem-js/lib/hashes/WeaponHash.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AmmoType = exports.VehicleWeaponHash = exports.WeaponHash = void 0;
    var WeaponHash;
    (function(WeaponHash2) {
      WeaponHash2[WeaponHash2["Knife"] = 2578778090] = "Knife";
      WeaponHash2[WeaponHash2["Nightstick"] = 1737195953] = "Nightstick";
      WeaponHash2[WeaponHash2["Hammer"] = 1317494643] = "Hammer";
      WeaponHash2[WeaponHash2["Bat"] = 2508868239] = "Bat";
      WeaponHash2[WeaponHash2["GolfClub"] = 1141786504] = "GolfClub";
      WeaponHash2[WeaponHash2["Crowbar"] = 2227010557] = "Crowbar";
      WeaponHash2[WeaponHash2["Bottle"] = 4192643659] = "Bottle";
      WeaponHash2[WeaponHash2["SwitchBlade"] = 3756226112] = "SwitchBlade";
      WeaponHash2[WeaponHash2["Pistol"] = 453432689] = "Pistol";
      WeaponHash2[WeaponHash2["CombatPistol"] = 1593441988] = "CombatPistol";
      WeaponHash2[WeaponHash2["APPistol"] = 584646201] = "APPistol";
      WeaponHash2[WeaponHash2["Pistol50"] = 2578377531] = "Pistol50";
      WeaponHash2[WeaponHash2["FlareGun"] = 1198879012] = "FlareGun";
      WeaponHash2[WeaponHash2["MarksmanPistol"] = 3696079510] = "MarksmanPistol";
      WeaponHash2[WeaponHash2["Revolver"] = 3249783761] = "Revolver";
      WeaponHash2[WeaponHash2["MicroSMG"] = 324215364] = "MicroSMG";
      WeaponHash2[WeaponHash2["SMG"] = 736523883] = "SMG";
      WeaponHash2[WeaponHash2["AssaultSMG"] = 4024951519] = "AssaultSMG";
      WeaponHash2[WeaponHash2["CombatPDW"] = 171789620] = "CombatPDW";
      WeaponHash2[WeaponHash2["AssaultRifle"] = 3220176749] = "AssaultRifle";
      WeaponHash2[WeaponHash2["CarbineRifle"] = 2210333304] = "CarbineRifle";
      WeaponHash2[WeaponHash2["AdvancedRifle"] = 2937143193] = "AdvancedRifle";
      WeaponHash2[WeaponHash2["CompactRifle"] = 1649403952] = "CompactRifle";
      WeaponHash2[WeaponHash2["MG"] = 2634544996] = "MG";
      WeaponHash2[WeaponHash2["CombatMG"] = 2144741730] = "CombatMG";
      WeaponHash2[WeaponHash2["PumpShotgun"] = 487013001] = "PumpShotgun";
      WeaponHash2[WeaponHash2["SawnOffShotgun"] = 2017895192] = "SawnOffShotgun";
      WeaponHash2[WeaponHash2["AssaultShotgun"] = 3800352039] = "AssaultShotgun";
      WeaponHash2[WeaponHash2["BullpupShotgun"] = 2640438543] = "BullpupShotgun";
      WeaponHash2[WeaponHash2["DoubleBarrelShotgun"] = 4019527611] = "DoubleBarrelShotgun";
      WeaponHash2[WeaponHash2["StunGun"] = 911657153] = "StunGun";
      WeaponHash2[WeaponHash2["SniperRifle"] = 100416529] = "SniperRifle";
      WeaponHash2[WeaponHash2["HeavySniper"] = 205991906] = "HeavySniper";
      WeaponHash2[WeaponHash2["GrenadeLauncher"] = 2726580491] = "GrenadeLauncher";
      WeaponHash2[WeaponHash2["GrenadeLauncherSmoke"] = 1305664598] = "GrenadeLauncherSmoke";
      WeaponHash2[WeaponHash2["RPG"] = 2982836145] = "RPG";
      WeaponHash2[WeaponHash2["Minigun"] = 1119849093] = "Minigun";
      WeaponHash2[WeaponHash2["Grenade"] = 2481070269] = "Grenade";
      WeaponHash2[WeaponHash2["StickyBomb"] = 741814745] = "StickyBomb";
      WeaponHash2[WeaponHash2["SmokeGrenade"] = 4256991824] = "SmokeGrenade";
      WeaponHash2[WeaponHash2["BZGas"] = 2694266206] = "BZGas";
      WeaponHash2[WeaponHash2["Molotov"] = 615608432] = "Molotov";
      WeaponHash2[WeaponHash2["FireExtinguisher"] = 101631238] = "FireExtinguisher";
      WeaponHash2[WeaponHash2["PetrolCan"] = 883325847] = "PetrolCan";
      WeaponHash2[WeaponHash2["SNSPistol"] = 3218215474] = "SNSPistol";
      WeaponHash2[WeaponHash2["SpecialCarbine"] = 3231910285] = "SpecialCarbine";
      WeaponHash2[WeaponHash2["HeavyPistol"] = 3523564046] = "HeavyPistol";
      WeaponHash2[WeaponHash2["BullpupRifle"] = 2132975508] = "BullpupRifle";
      WeaponHash2[WeaponHash2["HomingLauncher"] = 1672152130] = "HomingLauncher";
      WeaponHash2[WeaponHash2["ProximityMine"] = 2874559379] = "ProximityMine";
      WeaponHash2[WeaponHash2["Snowball"] = 126349499] = "Snowball";
      WeaponHash2[WeaponHash2["VintagePistol"] = 137902532] = "VintagePistol";
      WeaponHash2[WeaponHash2["Dagger"] = 2460120199] = "Dagger";
      WeaponHash2[WeaponHash2["Firework"] = 2138347493] = "Firework";
      WeaponHash2[WeaponHash2["Musket"] = 2828843422] = "Musket";
      WeaponHash2[WeaponHash2["MarksmanRifle"] = 3342088282] = "MarksmanRifle";
      WeaponHash2[WeaponHash2["HeavyShotgun"] = 984333226] = "HeavyShotgun";
      WeaponHash2[WeaponHash2["Gusenberg"] = 1627465347] = "Gusenberg";
      WeaponHash2[WeaponHash2["Hatchet"] = 4191993645] = "Hatchet";
      WeaponHash2[WeaponHash2["Railgun"] = 1834241177] = "Railgun";
      WeaponHash2[WeaponHash2["Unarmed"] = 2725352035] = "Unarmed";
      WeaponHash2[WeaponHash2["KnuckleDuster"] = 3638508604] = "KnuckleDuster";
      WeaponHash2[WeaponHash2["Machete"] = 3713923289] = "Machete";
      WeaponHash2[WeaponHash2["MachinePistol"] = 3675956304] = "MachinePistol";
      WeaponHash2[WeaponHash2["Flashlight"] = 2343591895] = "Flashlight";
      WeaponHash2[WeaponHash2["Ball"] = 600439132] = "Ball";
      WeaponHash2[WeaponHash2["Flare"] = 1233104067] = "Flare";
      WeaponHash2[WeaponHash2["NightVision"] = 2803906140] = "NightVision";
      WeaponHash2[WeaponHash2["Parachute"] = 4222310262] = "Parachute";
      WeaponHash2[WeaponHash2["SweeperShotgun"] = 317205821] = "SweeperShotgun";
      WeaponHash2[WeaponHash2["BattleAxe"] = 3441901897] = "BattleAxe";
      WeaponHash2[WeaponHash2["CompactGrenadeLauncher"] = 125959754] = "CompactGrenadeLauncher";
      WeaponHash2[WeaponHash2["MiniSMG"] = 3173288789] = "MiniSMG";
      WeaponHash2[WeaponHash2["PipeBomb"] = 3125143736] = "PipeBomb";
      WeaponHash2[WeaponHash2["PoolCue"] = 2484171525] = "PoolCue";
      WeaponHash2[WeaponHash2["Wrench"] = 419712736] = "Wrench";
      WeaponHash2[WeaponHash2["PistolMk2"] = 3219281620] = "PistolMk2";
      WeaponHash2[WeaponHash2["AssaultRifleMk2"] = 961495388] = "AssaultRifleMk2";
      WeaponHash2[WeaponHash2["CarbineRifleMk2"] = 4208062921] = "CarbineRifleMk2";
      WeaponHash2[WeaponHash2["CombatMGMk2"] = 3686625920] = "CombatMGMk2";
      WeaponHash2[WeaponHash2["HeavySniperMk2"] = 177293209] = "HeavySniperMk2";
      WeaponHash2[WeaponHash2["SMGMk2"] = 2024373456] = "SMGMk2";
    })(WeaponHash = exports.WeaponHash || (exports.WeaponHash = {}));
    var VehicleWeaponHash;
    (function(VehicleWeaponHash2) {
      VehicleWeaponHash2[VehicleWeaponHash2["Invalid"] = -1] = "Invalid";
      VehicleWeaponHash2[VehicleWeaponHash2["Tank"] = 1945616459] = "Tank";
      VehicleWeaponHash2[VehicleWeaponHash2["SpaceRocket"] = -123497569] = "SpaceRocket";
      VehicleWeaponHash2[VehicleWeaponHash2["PlaneRocket"] = -821520672] = "PlaneRocket";
      VehicleWeaponHash2[VehicleWeaponHash2["PlayerLaser"] = -268631733] = "PlayerLaser";
      VehicleWeaponHash2[VehicleWeaponHash2["PlayerBullet"] = 1259576109] = "PlayerBullet";
      VehicleWeaponHash2[VehicleWeaponHash2["PlayerBuzzard"] = 1186503822] = "PlayerBuzzard";
      VehicleWeaponHash2[VehicleWeaponHash2["PlayerHunter"] = -1625648674] = "PlayerHunter";
      VehicleWeaponHash2[VehicleWeaponHash2["PlayerLazer"] = -494786007] = "PlayerLazer";
      VehicleWeaponHash2[VehicleWeaponHash2["EnemyLaser"] = 1566990507] = "EnemyLaser";
      VehicleWeaponHash2[VehicleWeaponHash2["SearchLight"] = -844344963] = "SearchLight";
      VehicleWeaponHash2[VehicleWeaponHash2["Radar"] = -764006018] = "Radar";
    })(VehicleWeaponHash = exports.VehicleWeaponHash || (exports.VehicleWeaponHash = {}));
    var AmmoType;
    (function(AmmoType2) {
      AmmoType2[AmmoType2["Melee"] = 0] = "Melee";
      AmmoType2[AmmoType2["FireExtinguisher"] = 1359393852] = "FireExtinguisher";
      AmmoType2[AmmoType2["Flare"] = 1808594799] = "Flare";
      AmmoType2[AmmoType2["FlareGun"] = 1173416293] = "FlareGun";
      AmmoType2[AmmoType2["PetrolCan"] = 3395492001] = "PetrolCan";
      AmmoType2[AmmoType2["Shotgun"] = 2416459067] = "Shotgun";
      AmmoType2[AmmoType2["Pistol"] = 1950175060] = "Pistol";
      AmmoType2[AmmoType2["Ball"] = 4287981158] = "Ball";
      AmmoType2[AmmoType2["Snowball"] = 2182627693] = "Snowball";
      AmmoType2[AmmoType2["Sniper"] = 1285032059] = "Sniper";
      AmmoType2[AmmoType2["AssaultRifle"] = 218444191] = "AssaultRifle";
      AmmoType2[AmmoType2["SMG"] = 1820140472] = "SMG";
      AmmoType2[AmmoType2["Molotov"] = 1446246869] = "Molotov";
      AmmoType2[AmmoType2["StunGun"] = 2955849184] = "StunGun";
      AmmoType2[AmmoType2["MG"] = 1788949567] = "MG";
      AmmoType2[AmmoType2["GrenadeLauncher"] = 1003267566] = "GrenadeLauncher";
      AmmoType2[AmmoType2["RPG"] = 1742569970] = "RPG";
      AmmoType2[AmmoType2["Minigun"] = 2680539266] = "Minigun";
      AmmoType2[AmmoType2["Firework"] = 2938367503] = "Firework";
      AmmoType2[AmmoType2["Railgun"] = 2034517757] = "Railgun";
      AmmoType2[AmmoType2["HomingLauncher"] = 2568293933] = "HomingLauncher";
      AmmoType2[AmmoType2["Grenade"] = 1003688881] = "Grenade";
      AmmoType2[AmmoType2["StickyBomb"] = 1411692055] = "StickyBomb";
      AmmoType2[AmmoType2["ProximityMine"] = 2938243239] = "ProximityMine";
      AmmoType2[AmmoType2["PipeBomb"] = 357983224] = "PipeBomb";
      AmmoType2[AmmoType2["SmokeGrenade"] = 3859679398] = "SmokeGrenade";
      AmmoType2[AmmoType2["BZGas"] = 2608103076] = "BZGas";
    })(AmmoType = exports.AmmoType || (exports.AmmoType = {}));
  }
});

// ../../node_modules/fivem-js/lib/hashes/WeatherTypeHash.js
var require_WeatherTypeHash = __commonJS({
  "../../node_modules/fivem-js/lib/hashes/WeatherTypeHash.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WeatherTypeHash = void 0;
    var WeatherTypeHash;
    (function(WeatherTypeHash2) {
      WeatherTypeHash2[WeatherTypeHash2["Unknown"] = -1] = "Unknown";
      WeatherTypeHash2[WeatherTypeHash2["ExtraSunny"] = -1750463879] = "ExtraSunny";
      WeatherTypeHash2[WeatherTypeHash2["Clear"] = 916995460] = "Clear";
      WeatherTypeHash2[WeatherTypeHash2["Neutral"] = -1530260698] = "Neutral";
      WeatherTypeHash2[WeatherTypeHash2["Smog"] = 282916021] = "Smog";
      WeatherTypeHash2[WeatherTypeHash2["Foggy"] = -1368164796] = "Foggy";
      WeatherTypeHash2[WeatherTypeHash2["Clouds"] = 821931868] = "Clouds";
      WeatherTypeHash2[WeatherTypeHash2["Overcast"] = -1148613331] = "Overcast";
      WeatherTypeHash2[WeatherTypeHash2["Clearing"] = 1840358669] = "Clearing";
      WeatherTypeHash2[WeatherTypeHash2["Raining"] = 1420204096] = "Raining";
      WeatherTypeHash2[WeatherTypeHash2["ThunderStorm"] = -1233681761] = "ThunderStorm";
      WeatherTypeHash2[WeatherTypeHash2["Blizzard"] = 669657108] = "Blizzard";
      WeatherTypeHash2[WeatherTypeHash2["Snowing"] = -273223690] = "Snowing";
      WeatherTypeHash2[WeatherTypeHash2["Snowlight"] = 603685163] = "Snowlight";
      WeatherTypeHash2[WeatherTypeHash2["Christmas"] = -1429616491] = "Christmas";
      WeatherTypeHash2[WeatherTypeHash2["Halloween"] = -921030142] = "Halloween";
    })(WeatherTypeHash = exports.WeatherTypeHash || (exports.WeatherTypeHash = {}));
  }
});

// ../../node_modules/fivem-js/lib/hashes/index.js
var require_hashes = __commonJS({
  "../../node_modules/fivem-js/lib/hashes/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WeatherTypeHash = exports.VehicleWeaponHash = exports.WeaponHash = exports.AmmoType = exports.VehicleHash = exports.PedHash = exports.MaterialHash = void 0;
    var MaterialHash_1 = require_MaterialHash();
    Object.defineProperty(exports, "MaterialHash", { enumerable: true, get: function() {
      return MaterialHash_1.MaterialHash;
    } });
    var PedHash_1 = require_PedHash();
    Object.defineProperty(exports, "PedHash", { enumerable: true, get: function() {
      return PedHash_1.PedHash;
    } });
    var VehicleHash_1 = require_VehicleHash();
    Object.defineProperty(exports, "VehicleHash", { enumerable: true, get: function() {
      return VehicleHash_1.VehicleHash;
    } });
    var WeaponHash_1 = require_WeaponHash();
    Object.defineProperty(exports, "AmmoType", { enumerable: true, get: function() {
      return WeaponHash_1.AmmoType;
    } });
    Object.defineProperty(exports, "WeaponHash", { enumerable: true, get: function() {
      return WeaponHash_1.WeaponHash;
    } });
    Object.defineProperty(exports, "VehicleWeaponHash", { enumerable: true, get: function() {
      return WeaponHash_1.VehicleWeaponHash;
    } });
    var WeatherTypeHash_1 = require_WeatherTypeHash();
    Object.defineProperty(exports, "WeatherTypeHash", { enumerable: true, get: function() {
      return WeatherTypeHash_1.WeatherTypeHash;
    } });
  }
});

// ../../node_modules/fivem-js/lib/Model.js
var require_Model = __commonJS({
  "../../node_modules/fivem-js/lib/Model.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Model = void 0;
    var Game_1 = require_Game();
    var hashes_1 = require_hashes();
    var utils_1 = require_utils();
    var Model = class {
      constructor(hash) {
        if (typeof hash === "string") {
          this.hash = Game_1.Game.generateHash(hash);
        } else {
          this.hash = hash;
        }
      }
      get Hash() {
        return this.hash;
      }
      get IsValid() {
        return !!IsModelValid(this.hash);
      }
      get IsInCdImage() {
        return !!IsModelInCdimage(this.hash);
      }
      get IsLoaded() {
        return !!HasModelLoaded(this.hash);
      }
      get IsCollisionLoaded() {
        return !!HasCollisionForModelLoaded(this.hash);
      }
      get IsBicycle() {
        return !!IsThisModelABicycle(this.hash);
      }
      get IsBike() {
        return !!IsThisModelABike(this.hash);
      }
      get IsBoat() {
        return !!IsThisModelABoat(this.hash);
      }
      get IsCar() {
        return !!IsThisModelACar(this.hash);
      }
      get IsCargobob() {
        return this.hash === hashes_1.VehicleHash.Cargobob || this.hash === hashes_1.VehicleHash.Cargobob2 || this.hash === hashes_1.VehicleHash.Cargobob3 || this.hash === hashes_1.VehicleHash.Cargobob4;
      }
      get IsHelicopter() {
        return !!IsThisModelAHeli(this.hash);
      }
      get IsPed() {
        return !!IsModelAPed(this.hash);
      }
      get IsPlane() {
        return !!IsThisModelAPlane(this.hash);
      }
      get IsProp() {
        return this.IsValid && !this.IsPed && !this.IsVehicle && !IsWeaponValid(this.hash);
      }
      get IsQuadbike() {
        return !!IsThisModelAQuadbike(this.hash);
      }
      get IsTrain() {
        return !!IsThisModelATrain(this.hash);
      }
      get IsVehicle() {
        return !!IsModelAVehicle(this.hash);
      }
      get Dimensions() {
        const [min, max] = GetModelDimensions(this.hash);
        const right = new utils_1.Vector3(min[0], min[1], min[2]);
        const left = new utils_1.Vector3(max[0], max[1], max[2]);
        return utils_1.Vector3.subtract(left, right);
      }
      request(timeout) {
        return new Promise((resolve) => {
          if (!this.IsInCdImage && !this.IsValid && !IsWeaponValid(this.hash)) {
            resolve(false);
          }
          RequestModel(this.hash);
          const start = GetGameTimer();
          const interval = setInterval(() => {
            if (this.IsLoaded || GetGameTimer() - start >= timeout) {
              clearInterval(interval);
              this.markAsNoLongerNeeded();
              resolve(this.IsLoaded);
            }
          }, 0);
        });
      }
      markAsNoLongerNeeded() {
        SetModelAsNoLongerNeeded(this.hash);
      }
    };
    exports.Model = Model;
  }
});

// ../../node_modules/fivem-js/lib/models/Entity.js
var require_Entity = __commonJS({
  "../../node_modules/fivem-js/lib/models/Entity.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Entity = void 0;
    var Blip_1 = require_Blip2();
    var enums_1 = require_enums();
    var Game_1 = require_Game();
    var Model_1 = require_Model();
    var utils_1 = require_utils();
    var _1 = require_models();
    var Entity = class {
      constructor(handle) {
        this.handle = handle;
      }
      static fromHandle(handle) {
        switch (GetEntityType(handle)) {
          case 1:
            return new _1.Ped(handle);
          case 2:
            return new _1.Vehicle(handle);
          case 3:
            return new _1.Prop(handle);
        }
        return null;
      }
      static fromNetworkId(networkId) {
        return this.fromHandle(NetworkGetEntityFromNetworkId(networkId));
      }
      get Handle() {
        return this.handle;
      }
      get NetworkId() {
        return NetworkGetNetworkIdFromEntity(this.handle);
      }
      get Health() {
        return GetEntityHealth(this.handle);
      }
      set Health(amount) {
        SetEntityHealth(this.handle, amount);
      }
      get MaxHealth() {
        return GetEntityMaxHealth(this.handle);
      }
      set MaxHealth(amount) {
        SetEntityMaxHealth(this.handle, amount);
      }
      isDead() {
        return IsEntityDead(this.handle) ? true : false;
      }
      isAlive() {
        return !this.isDead();
      }
      get Model() {
        return new Model_1.Model(GetEntityModel(this.handle));
      }
      get Position() {
        const coords = GetEntityCoords(this.handle, false);
        return new utils_1.Vector3(coords[0], coords[1], coords[2]);
      }
      set Position(position) {
        SetEntityCoords(this.handle, position.x, position.y, position.z, false, false, false, true);
      }
      set PositionNoOffset(position) {
        SetEntityCoordsNoOffset(this.handle, position.x, position.y, position.z, true, true, true);
      }
      get Rotation() {
        const rotation = GetEntityRotation(this.handle, 2);
        return new utils_1.Vector3(rotation[0], rotation[1], rotation[2]);
      }
      set Rotation(rotation) {
        SetEntityRotation(this.handle, rotation.x, rotation.y, rotation.z, 2, true);
      }
      get Quaternion() {
        const quaternion = GetEntityQuaternion(this.handle);
        return new utils_1.Quaternion(quaternion[0], quaternion[1], quaternion[2], quaternion[3]);
      }
      set Quaternion(quaternion) {
        SetEntityQuaternion(this.handle, quaternion.x, quaternion.y, quaternion.z, quaternion.w);
      }
      get Heading() {
        return GetEntityHeading(this.handle);
      }
      set Heading(heading) {
        SetEntityHeading(this.handle, heading);
      }
      set IsPositionFrozen(value) {
        FreezeEntityPosition(this.handle, value);
      }
      get Velocity() {
        const velocity = GetEntityVelocity(this.handle);
        return new utils_1.Vector3(velocity[0], velocity[1], velocity[2]);
      }
      set Velocity(velocity) {
        SetEntityVelocity(this.handle, velocity.x, velocity.y, velocity.z);
      }
      get RotationVelocity() {
        const velocity = GetEntityRotationVelocity(this.handle);
        return new utils_1.Vector3(velocity[0], velocity[1], velocity[2]);
      }
      set MaxSpeed(value) {
        SetEntityMaxSpeed(this.handle, value);
      }
      set HasGravity(value) {
        SetEntityHasGravity(this.handle, value);
      }
      get HeightAboveGround() {
        return GetEntityHeightAboveGround(this.handle);
      }
      get SubmersionLevel() {
        return GetEntitySubmergedLevel(this.handle);
      }
      get LodDistance() {
        return GetEntityLodDist(this.handle);
      }
      set LodDistance(value) {
        SetEntityLodDist(this.handle, value);
      }
      get IsVisible() {
        return !!IsEntityVisible(this.handle);
      }
      set IsVisible(value) {
        SetEntityVisible(this.handle, value, false);
      }
      get IsOccluded() {
        return !!IsEntityOccluded(this.handle);
      }
      get IsOnScreen() {
        return !!IsEntityOnScreen(this.handle);
      }
      get IsUpright() {
        return !!IsEntityUpright(this.handle, 0);
      }
      get IsUpsideDown() {
        return !!IsEntityUpsidedown(this.handle);
      }
      get IsInAir() {
        return !!IsEntityInAir(this.handle);
      }
      get IsInWater() {
        return !!IsEntityInWater(this.handle);
      }
      get IsPersistent() {
        return !!IsEntityAMissionEntity(this.handle);
      }
      set IsPersistent(value) {
        if (value) {
          SetEntityAsMissionEntity(this.handle, true, false);
        } else {
          this.markAsNoLongerNeeded();
        }
      }
      get IsOnFire() {
        return !!IsEntityOnFire(this.handle);
      }
      set IsInvincible(value) {
        SetEntityInvincible(this.handle, value);
      }
      set IsOnlyDamagedByPlayer(value) {
        SetEntityOnlyDamagedByPlayer(this.handle, value);
      }
      get Opacity() {
        return GetEntityAlpha(this.handle);
      }
      set Opacity(value) {
        SetEntityAlpha(this.handle, value, 0);
      }
      resetOpacity() {
        ResetEntityAlpha(this.handle);
      }
      get HasCollided() {
        return !!HasEntityCollidedWithAnything(this.handle);
      }
      get IsCollisionEnabled() {
        return !GetEntityCollisonDisabled(this.handle);
      }
      set IsCollisionEnabled(value) {
        SetEntityCollision(this.handle, value, false);
      }
      set IsRecordingCollisions(value) {
        SetEntityRecordsCollisions(this.handle, value);
      }
      get Bones() {
        if (!this.bones) {
          this.bones = new _1.EntityBoneCollection(this);
        }
        return this.bones;
      }
      get AttachedBlip() {
        const handle = GetBlipFromEntity(this.handle);
        if (DoesBlipExist(handle)) {
          return new Blip_1.Blip(handle);
        }
        return null;
      }
      attachBlip() {
        return new Blip_1.Blip(AddBlipForEntity(this.handle));
      }
      setNoCollision(entity, toggle) {
        SetEntityNoCollisionEntity(this.handle, entity.Handle, toggle);
      }
      hasClearLosToEntity(entity, traceType = 17) {
        return !!HasEntityClearLosToEntity(this.handle, entity.Handle, traceType);
      }
      hasClearLosToEntityInFront(entity) {
        return !!HasEntityClearLosToEntityInFront(this.handle, entity.Handle);
      }
      hasBeenDamagedBy(entity) {
        return !!HasEntityBeenDamagedByEntity(this.handle, entity.Handle, true);
      }
      hasBeenDamagedByWeapon(weapon) {
        return !!HasEntityBeenDamagedByWeapon(this.handle, Number(weapon), 0);
      }
      hasBeenDamagedByAnyWeapon() {
        return !!HasEntityBeenDamagedByWeapon(this.handle, 0, 2);
      }
      hasBeenDamagedByAnyMeleeWeapon() {
        return !!HasEntityBeenDamagedByWeapon(this.handle, 0, 1);
      }
      clearLastWeaponDamage() {
        ClearEntityLastWeaponDamage(this.handle);
      }
      isInArea(minBounds, maxBounds) {
        return !!IsEntityInArea(this.handle, minBounds.x, minBounds.y, minBounds.z, maxBounds.x, maxBounds.y, maxBounds.z, false, false, 0);
      }
      isInAngledArea(origin, edge, angle) {
        return !!IsEntityInAngledArea(this.handle, origin.x, origin.y, origin.z, edge.x, edge.y, edge.z, angle, false, true, 0);
      }
      isInRangeOf(position, range) {
        const v = utils_1.Vector3.subtract(this.Position, position);
        return v.dotProduct(v) < range * range;
      }
      isNearEntity(entity, bounds) {
        return !!IsEntityAtEntity(this.handle, entity.Handle, bounds.x, bounds.y, bounds.z, false, true, 0);
      }
      isTouching(entity) {
        return !!IsEntityTouchingEntity(this.handle, entity.Handle);
      }
      isTouchingModel(model) {
        return !!IsEntityTouchingModel(this.handle, model.Hash);
      }
      getOffsetPosition(offset) {
        const o = GetOffsetFromEntityInWorldCoords(this.handle, offset.x, offset.y, offset.z);
        return new utils_1.Vector3(o[0], o[1], o[2]);
      }
      getPositionOffset(worldCoords) {
        const o = GetOffsetFromEntityGivenWorldCoords(this.handle, worldCoords.x, worldCoords.y, worldCoords.z);
        return new utils_1.Vector3(o[0], o[1], o[2]);
      }
      attachTo(entity, position, rotation) {
        AttachEntityToEntity(this.handle, entity.Handle, -1, position.x, position.y, position.z, rotation.x, rotation.y, rotation.z, false, false, false, false, 2, true);
      }
      attachToBone(entityBone, position, rotation) {
        AttachEntityToEntity(this.handle, entityBone.Owner.Handle, -1, position.x, position.y, position.z, rotation.x, rotation.y, rotation.z, false, false, false, false, 2, true);
      }
      detach() {
        DetachEntity(this.handle, true, true);
      }
      isAttached() {
        return !!IsEntityAttached(this.handle);
      }
      isAttachedTo(entity) {
        return !!IsEntityAttachedToEntity(this.handle, entity.Handle);
      }
      getEntityAttachedTo() {
        return Entity.fromHandle(GetEntityAttachedTo(this.handle));
      }
      applyForce(direction, rotation, forceType = enums_1.ForceType.MaxForceRot2) {
        ApplyForceToEntity(this.handle, Number(forceType), direction.x, direction.y, direction.z, rotation.x, rotation.y, rotation.z, 0, false, true, true, false, true);
      }
      applyForceRelative(direction, rotation, forceType = enums_1.ForceType.MaxForceRot2) {
        ApplyForceToEntity(this.handle, Number(forceType), direction.x, direction.y, direction.z, rotation.x, rotation.y, rotation.z, 0, true, true, true, false, true);
      }
      removeAllParticleEffects() {
        RemoveParticleFxFromEntity(this.handle);
      }
      exists() {
        return DoesEntityExist(this.handle) ? true : false;
      }
      delete() {
        if (this.handle !== Game_1.Game.PlayerPed.Handle) {
          SetEntityAsMissionEntity(this.handle, false, true);
          DeleteEntity(this.handle);
        }
      }
      markAsNoLongerNeeded() {
        SetEntityAsMissionEntity(this.Handle, false, true);
        SetEntityAsNoLongerNeeded(this.Handle);
      }
    };
    exports.Entity = Entity;
  }
});

// ../../node_modules/fivem-js/lib/models/EntityBone.js
var require_EntityBone = __commonJS({
  "../../node_modules/fivem-js/lib/models/EntityBone.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.EntityBone = void 0;
    var utils_1 = require_utils();
    var EntityBone = class {
      constructor(owner, boneIndex, boneName) {
        this.owner = owner;
        this.index = boneIndex ? boneIndex : GetEntityBoneIndexByName(this.owner.Handle, boneName);
      }
      get Index() {
        return this.index;
      }
      get Owner() {
        return this.owner;
      }
      get Position() {
        const coords = GetWorldPositionOfEntityBone(this.owner.Handle, this.index);
        return new utils_1.Vector3(coords[0], coords[1], coords[2]);
      }
      get IsValid() {
        return this.owner.exists() && this.index !== -1;
      }
    };
    exports.EntityBone = EntityBone;
  }
});

// ../../node_modules/fivem-js/lib/models/EntityBoneCollection.js
var require_EntityBoneCollection = __commonJS({
  "../../node_modules/fivem-js/lib/models/EntityBoneCollection.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.EntityBoneCollection = void 0;
    var _1 = require_models();
    var EntityBoneCollection = class {
      constructor(owner) {
        this._currentIndex = -1;
        this.owner = owner;
      }
      hasBone(name) {
        return GetEntityBoneIndexByName(this.owner.Handle, name) !== -1;
      }
      get Core() {
        return new _1.EntityBone(this.owner, -1);
      }
    };
    exports.EntityBoneCollection = EntityBoneCollection;
  }
});

// ../../node_modules/fivem-js/lib/models/Ped.js
var require_Ped = __commonJS({
  "../../node_modules/fivem-js/lib/models/Ped.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Ped = void 0;
    var __1 = require_lib();
    var enums_1 = require_enums();
    var _1 = require_models();
    var Ped = class extends _1.Entity {
      constructor(handle) {
        super(handle);
        this.speechModifierNames = [
          "SPEECH_PARAMS_STANDARD",
          "SPEECH_PARAMS_ALLOW_REPEAT",
          "SPEECH_PARAMS_BEAT",
          "SPEECH_PARAMS_FORCE",
          "SPEECH_PARAMS_FORCE_FRONTEND",
          "SPEECH_PARAMS_FORCE_NO_REPEAT_FRONTEND",
          "SPEECH_PARAMS_FORCE_NORMAL",
          "SPEECH_PARAMS_FORCE_NORMAL_CLEAR",
          "SPEECH_PARAMS_FORCE_NORMAL_CRITICAL",
          "SPEECH_PARAMS_FORCE_SHOUTED",
          "SPEECH_PARAMS_FORCE_SHOUTED_CLEAR",
          "SPEECH_PARAMS_FORCE_SHOUTED_CRITICAL",
          "SPEECH_PARAMS_FORCE_PRELOAD_ONLY",
          "SPEECH_PARAMS_MEGAPHONE",
          "SPEECH_PARAMS_HELI",
          "SPEECH_PARAMS_FORCE_MEGAPHONE",
          "SPEECH_PARAMS_FORCE_HELI",
          "SPEECH_PARAMS_INTERRUPT",
          "SPEECH_PARAMS_INTERRUPT_SHOUTED",
          "SPEECH_PARAMS_INTERRUPT_SHOUTED_CLEAR",
          "SPEECH_PARAMS_INTERRUPT_SHOUTED_CRITICAL",
          "SPEECH_PARAMS_INTERRUPT_NO_FORCE",
          "SPEECH_PARAMS_INTERRUPT_FRONTEND",
          "SPEECH_PARAMS_INTERRUPT_NO_FORCE_FRONTEND",
          "SPEECH_PARAMS_ADD_BLIP",
          "SPEECH_PARAMS_ADD_BLIP_ALLOW_REPEAT",
          "SPEECH_PARAMS_ADD_BLIP_FORCE",
          "SPEECH_PARAMS_ADD_BLIP_SHOUTED",
          "SPEECH_PARAMS_ADD_BLIP_SHOUTED_FORCE",
          "SPEECH_PARAMS_ADD_BLIP_INTERRUPT",
          "SPEECH_PARAMS_ADD_BLIP_INTERRUPT_FORCE",
          "SPEECH_PARAMS_FORCE_PRELOAD_ONLY_SHOUTED",
          "SPEECH_PARAMS_FORCE_PRELOAD_ONLY_SHOUTED_CLEAR",
          "SPEECH_PARAMS_FORCE_PRELOAD_ONLY_SHOUTED_CRITICAL",
          "SPEECH_PARAMS_SHOUTED",
          "SPEECH_PARAMS_SHOUTED_CLEAR",
          "SPEECH_PARAMS_SHOUTED_CRITICAL"
        ];
      }
      static exists(ped) {
        return typeof ped !== "undefined" && ped.exists();
      }
      get Health() {
        return super.Health - 100;
      }
      set Health(amount) {
        super.Health = amount + 100;
      }
      get MaxHealth() {
        return super.MaxHealth - 100;
      }
      set MaxHealth(amount) {
        super.MaxHealth = amount + 100;
      }
      get CurrentVehicle() {
        const veh = new _1.Vehicle(GetVehiclePedIsIn(this.handle, false));
        return veh.exists() ? veh : null;
      }
      get LastVehicle() {
        const veh = new _1.Vehicle(GetVehiclePedIsIn(this.handle, true));
        return veh.exists() ? veh : null;
      }
      get VehicleTryingToEnter() {
        const veh = new _1.Vehicle(GetVehiclePedIsTryingToEnter(this.handle));
        return veh.exists() ? veh : null;
      }
      get IsJumpingOutOfVehicle() {
        return !!IsPedJumpingOutOfVehicle(this.handle);
      }
      set StaysInVehicleWhenJacked(value) {
        SetPedStayInVehicleWhenJacked(this.handle, value);
      }
      set MaxDrivingSpeed(value) {
        SetDriveTaskMaxCruiseSpeed(this.handle, value);
      }
      get IsHuman() {
        return !!IsPedHuman(this.handle);
      }
      set IsEnemy(value) {
        SetPedAsEnemy(this.handle, value);
      }
      set IsPriorityTargetForEnemies(value) {
        SetEntityIsTargetPriority(this.handle, value, 0);
      }
      get IsPlayer() {
        return !!IsPedAPlayer(this.handle);
      }
      get IsCuffed() {
        return !!IsPedCuffed(this.handle);
      }
      get IsWearingHelmet() {
        return !!IsPedWearingHelmet(this.handle);
      }
      get IsRagdoll() {
        return !!IsPedRagdoll(this.handle);
      }
      get IsIdle() {
        return !this.IsInjured && !this.IsRagdoll && !this.IsInAir && !this.IsOnFire && !this.IsDucking && !this.IsGettingIntoAVehicle && !this.IsInCombat && !this.IsInMeleeCombat && (!this.isInAnyVehicle() || this.isSittingInAnyVehicle());
      }
      get IsProne() {
        return !!IsPedProne(this.handle);
      }
      set IsDucking(value) {
        SetPedDucking(this.handle, value);
      }
      get IsDucking() {
        return !!IsPedDucking(this.handle);
      }
      get IsGettingUp() {
        return !!IsPedGettingUp(this.handle);
      }
      get IsClimbing() {
        return !!IsPedClimbing(this.handle);
      }
      get IsJumping() {
        return !!IsPedJumping(this.handle);
      }
      get IsFalling() {
        return !!IsPedFalling(this.handle);
      }
      get IsStopped() {
        return !!IsPedStopped(this.handle);
      }
      get IsWalking() {
        return !!IsPedWalking(this.handle);
      }
      get IsRunning() {
        return !!IsPedRunning(this.handle);
      }
      get IsSprinting() {
        return !!IsPedSprinting(this.handle);
      }
      get IsDiving() {
        return !!IsPedDiving(this.handle);
      }
      get IsInParachuteFreeFall() {
        return !!IsPedInParachuteFreeFall(this.handle);
      }
      get IsSwimming() {
        return !!IsPedSwimming(this.handle);
      }
      get IsSwimmingUnderWater() {
        return !!IsPedSwimmingUnderWater(this.handle);
      }
      get IsVaulting() {
        return !!IsPedVaulting(this.handle);
      }
      get IsOnBike() {
        return !!IsPedOnAnyBike(this.handle);
      }
      get IsOnFoot() {
        return !!IsPedOnFoot(this.handle);
      }
      get IsInSub() {
        return !!IsPedInAnySub(this.handle);
      }
      get IsInTaxi() {
        return !!IsPedInAnyTaxi(this.handle);
      }
      get IsInTrain() {
        return !!IsPedInAnyTrain(this.handle);
      }
      get IsInHeli() {
        return !!IsPedInAnyHeli(this.handle);
      }
      get IsInPlane() {
        return !!IsPedInAnyPlane(this.handle);
      }
      get IsInFlyingVehicle() {
        return !!IsPedInFlyingVehicle(this.handle);
      }
      get IsInBoat() {
        return !!IsPedInAnyBoat(this.handle);
      }
      get IsInPoliceVehicle() {
        return !!IsPedInAnyPoliceVehicle(this.handle);
      }
      get IsJacking() {
        return !!IsPedJacking(this.handle);
      }
      get IsBeingJacked() {
        return !!IsPedBeingJacked(this.handle);
      }
      get IsGettingIntoAVehicle() {
        return !!IsPedGettingIntoAVehicle(this.handle);
      }
      get IsTryingToEnterALockedVehicle() {
        return !!IsPedTryingToEnterALockedVehicle(this.handle);
      }
      get IsInjured() {
        return !!IsPedInjured(this.handle);
      }
      get IsFleeing() {
        return !!IsPedFleeing(this.handle);
      }
      get IsInCombat() {
        return !!IsPedInCombat(this.handle, PlayerPedId());
      }
      get IsInMeleeCombat() {
        return !!IsPedInMeleeCombat(this.handle);
      }
      get IsInStealthMode() {
        return !!GetPedStealthMovement(this.handle);
      }
      get IsAmbientSpeechPlaying() {
        return !!IsAmbientSpeechPlaying(this.handle);
      }
      get IsScriptedSpeechPlaying() {
        return !!IsScriptedSpeechPlaying(this.handle);
      }
      get IsAnySpeechPlaying() {
        return !!IsAnySpeechPlaying(this.handle);
      }
      get IsAmbientSpeechEnabled() {
        return !IsAmbientSpeechDisabled(this.handle);
      }
      set IsPainAudioEnabled(value) {
        DisablePedPainAudio(this.handle, !value);
      }
      get IsPlantingBomb() {
        return !!IsPedPlantingBomb(this.handle);
      }
      get IsShooting() {
        return !!IsPedShooting(this.handle);
      }
      get IsReloading() {
        return !!IsPedReloading(this.handle);
      }
      get IsDoingDriveby() {
        return !!IsPedDoingDriveby(this.handle);
      }
      get IsGoingIntoCover() {
        return !!IsPedGoingIntoCover(this.handle);
      }
      get IsBeingStunned() {
        return !!IsPedBeingStunned(this.handle, 0);
      }
      get IsBeingStealthKilled() {
        return !!IsPedBeingStealthKilled(this.handle);
      }
      get IsPerformingStealthKill() {
        return !!IsPedPerformingStealthKill(this.handle);
      }
      get IsAimingFromCover() {
        return !!IsPedAimingFromCover(this.handle);
      }
      isInCover(expectUseWeapon = false) {
        return !!IsPedInCover(this.handle, expectUseWeapon);
      }
      get IsInCoverFacingLeft() {
        return !!IsPedInCoverFacingLeft(this.handle);
      }
      set FiringPattern(value) {
        SetPedFiringPattern(this.handle, value);
      }
      set DropsWeaponsOnDeath(value) {
        SetPedDropsWeaponsWhenDead(this.handle, value);
      }
      set DrivingSpeed(value) {
        SetDriveTaskCruiseSpeed(this.handle, value);
      }
      set DrivingStyle(style) {
        SetDriveTaskDrivingStyle(this.handle, Number(style));
      }
      isInAnyVehicle() {
        return !!IsPedInAnyVehicle(this.handle, false);
      }
      isInVehicle(vehicle) {
        return !!IsPedInVehicle(this.handle, vehicle.Handle, false);
      }
      isSittingInAnyVehicle() {
        return !!IsPedSittingInAnyVehicle(this.handle);
      }
      isSittingInVehicle(vehicle) {
        return !!IsPedSittingInVehicle(this.handle, vehicle.Handle);
      }
      setIntoVehicle(vehicle, seat) {
        SetPedIntoVehicle(this.handle, vehicle.Handle, Number(seat));
      }
      isHeadtracking(entity) {
        return !!IsPedHeadtrackingEntity(this.handle, entity.Handle);
      }
      isInCombatAgainst(target) {
        return !!IsPedInCombat(this.handle, target.Handle);
      }
      getJacker() {
        return new Ped(GetPedsJacker(this.handle));
      }
      getJackTarget() {
        return new Ped(GetJackTarget(this.handle));
      }
      getMeleeTarget() {
        return new Ped(GetMeleeTargetForPed(this.handle));
      }
      getKiller() {
        return _1.Entity.fromHandle(GetPedSourceOfDeath(this.handle));
      }
      kill() {
        this.Health = -1;
      }
      resurrect() {
        const maxHealth = this.Health;
        const isCollisionEnabled = super.IsCollisionEnabled;
        ResurrectPed(this.handle);
        this.MaxHealth = maxHealth;
        this.Health = maxHealth;
        super.IsCollisionEnabled = isCollisionEnabled;
        ClearPedTasksImmediately(this.handle);
      }
      resetVisibleDamage() {
        ResetPedVisibleDamage(this.handle);
      }
      clearBloodDamage() {
        ClearPedBloodDamage(this.handle);
      }
      get IsInGroup() {
        return !!IsPedInGroup(this.handle);
      }
      set NeverLeavesGroup(value) {
        SetPedNeverLeavesGroup(this.handle, value);
      }
      leaveGroup() {
        RemovePedFromGroup(this.handle);
      }
      playAmbientSpeed(speechName, voiceName = "", modifier = enums_1.SpeechModifier.Standard) {
        if (Number(modifier) >= 0 && Number(modifier) < this.speechModifierNames.length) {
          if (voiceName === "") {
            PlayAmbientSpeech1(this.handle, speechName, this.speechModifierNames[Number(modifier)]);
          } else {
            PlayAmbientSpeechWithVoice(this.handle, speechName, voiceName, this.speechModifierNames[Number(modifier)], false);
          }
        } else {
          throw new RangeError("modifier");
        }
      }
      applyDamage(damageAmount) {
        ApplyDamageToPed(this.handle, damageAmount, true);
      }
      hasBeenDamagedByWeapon(weapon) {
        return !!HasPedBeenDamagedByWeapon(this.handle, Number(weapon), 0);
      }
      hasBeenDamagedByAnyWeapon() {
        return !!HasPedBeenDamagedByWeapon(this.handle, 0, 2);
      }
      hasBeenDamagedByAnyMeleeWeapon() {
        return !!HasPedBeenDamagedByWeapon(this.handle, 0, 1);
      }
      clearLastWeaponDamage() {
        ClearPedLastWeaponDamage(this.handle);
      }
      get Bones() {
        if (this.pedBones === null) {
          this.pedBones = new _1.PedBoneCollection(this);
        }
        return this.pedBones;
      }
      giveWeapon(weapon, ammoCount = 999, isHidden = false, equipNow = true) {
        GiveWeaponToPed(this.handle, weapon, ammoCount, isHidden, equipNow);
      }
      removeWeapon(weapon) {
        RemoveWeaponFromPed(this.handle, weapon);
      }
      removeAllWeapons() {
        RemoveAllPedWeapons(this.handle, true);
      }
      getLastWeaponImpactPosition() {
        const position = GetPedLastWeaponImpactCoord(this.handle);
        return new __1.Vector3(position[0], position[1][0], position[1][1]);
      }
      get CanRagdoll() {
        return !!CanPedRagdoll(this.handle);
      }
      set CanRagdoll(value) {
        SetPedCanRagdoll(this.handle, value);
      }
      ragdoll(duration = -1, ragdollType = enums_1.RagdollType.Normal) {
        this.CanRagdoll = true;
        SetPedToRagdoll(this.handle, duration, duration, Number(ragdollType), false, false, false);
      }
      cancelRagdoll() {
        SetPedToRagdoll(this.handle, 1, 1, 1, false, false, false);
      }
      giveHelmet(canBeRemovedByPed, helmetType, textureIndex) {
        GivePedHelmet(this.handle, !canBeRemovedByPed, Number(helmetType), textureIndex);
      }
      removeHelmet(instantly) {
        RemovePedHelmet(this.handle, instantly);
      }
      openParachute() {
        ForcePedToOpenParachute(this.handle);
      }
      getConfigFlag(flagId) {
        return !!GetPedConfigFlag(this.handle, flagId, true);
      }
      setConfigFlag(flagId, value) {
        SetPedConfigFlag(this.handle, flagId, value);
      }
      resetConfigFlag(flagId) {
        SetPedResetFlag(this.handle, flagId, true);
      }
      clone(heading) {
        return new Ped(ClonePed(this.handle, heading, false, false));
      }
      exists(ped = null) {
        if (ped === null) {
          return super.exists() && GetEntityType(this.handle) === 1;
        }
        return ped.exists();
      }
    };
    exports.Ped = Ped;
  }
});

// ../../node_modules/fivem-js/lib/models/PedBone.js
var require_PedBone = __commonJS({
  "../../node_modules/fivem-js/lib/models/PedBone.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PedBone = void 0;
    var _1 = require_models();
    var PedBone = class extends _1.EntityBone {
      constructor(owner, boneId) {
        super(owner, GetPedBoneIndex(owner.Handle, Number(boneId)));
      }
      get IsValid() {
        return _1.Ped.exists(this.Owner) && this.Index !== -1;
      }
    };
    exports.PedBone = PedBone;
  }
});

// ../../node_modules/fivem-js/lib/models/PedBoneCollection.js
var require_PedBoneCollection = __commonJS({
  "../../node_modules/fivem-js/lib/models/PedBoneCollection.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PedBoneCollection = void 0;
    var _1 = require_models();
    var PedBoneCollection = class extends _1.EntityBoneCollection {
      constructor(owner) {
        super(owner);
      }
      get Core() {
        return new _1.PedBone(this.owner, -1);
      }
      get LastDamaged() {
        const outBone = 0;
        if (GetPedLastDamageBone(this.owner.Handle, outBone)) {
          return this[outBone];
        }
      }
      clearLastDamaged() {
        ClearPedLastDamageBone(this.owner.Handle);
      }
    };
    exports.PedBoneCollection = PedBoneCollection;
  }
});

// ../../node_modules/fivem-js/lib/models/Player.js
var require_Player = __commonJS({
  "../../node_modules/fivem-js/lib/models/Player.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Player = void 0;
    var _1 = require_models();
    var Player = class {
      constructor(handle) {
        this.handle = handle;
        this.PvPEnabled = true;
      }
      get Handle() {
        return this.handle;
      }
      get Character() {
        const handle = GetPlayerPed(this.handle);
        if (typeof this.ped === "undefined" || handle !== this.ped.Handle) {
          this.ped = new _1.Ped(handle);
        }
        return this.ped;
      }
      get Name() {
        return GetPlayerName(this.handle);
      }
      get PvPEnabled() {
        return this.pvp;
      }
      set PvPEnabled(value) {
        NetworkSetFriendlyFireOption(value);
        SetCanAttackFriendly(this.Character.Handle, value, value);
        this.pvp = value;
      }
    };
    exports.Player = Player;
  }
});

// ../../node_modules/fivem-js/lib/models/Prop.js
var require_Prop = __commonJS({
  "../../node_modules/fivem-js/lib/models/Prop.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Prop = void 0;
    var _1 = require_models();
    var Prop = class extends _1.Entity {
      static exists(prop) {
        return typeof prop !== "undefined" && prop.exists();
      }
      constructor(handle) {
        super(handle);
      }
      exists() {
        return super.exists() && GetEntityType(this.handle) === 3;
      }
      placeOnGround() {
        PlaceObjectOnGroundProperly(this.handle);
      }
    };
    exports.Prop = Prop;
  }
});

// ../../node_modules/fivem-js/lib/models/Vehicle.js
var require_Vehicle2 = __commonJS({
  "../../node_modules/fivem-js/lib/models/Vehicle.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Vehicle = void 0;
    var _1 = require_models();
    var enums_1 = require_enums();
    var Game_1 = require_Game();
    var Vehicle = class extends _1.Entity {
      constructor(handle) {
        super(handle);
      }
      static getModelDisplayName(vehicleModel) {
        return GetDisplayNameFromVehicleModel(vehicleModel.Hash);
      }
      static getModelClass(vehicleModel) {
        return GetVehicleClassFromName(vehicleModel.Hash);
      }
      static getClassDisplayName(vehicleClass) {
        return `VEH_CLASS_${vehicleClass}`;
      }
      static exists(vehicle) {
        return typeof vehicle !== "undefined" && vehicle.exists();
      }
      exists() {
        return super.exists() && GetEntityType(this.handle) === 2;
      }
      get DisplayName() {
        return Vehicle.getModelDisplayName(this.Model);
      }
      get ClassDisplayName() {
        return Vehicle.getClassDisplayName(this.ClassType);
      }
      get NumberPlate() {
        return GetVehicleNumberPlateText(this.handle);
      }
      set NumberPlate(value) {
        SetVehicleNumberPlateText(this.handle, value.substring(0, 8));
      }
      get ClassType() {
        return GetVehicleClass(this.handle);
      }
      get BodyHealth() {
        return GetVehicleBodyHealth(this.handle);
      }
      set BodyHealth(value) {
        SetVehicleBodyHealth(this.handle, value);
      }
      get EngineHealth() {
        return GetVehicleEngineHealth(this.handle);
      }
      set EngineHealth(value) {
        SetVehicleEngineHealth(this.handle, value);
      }
      get PetrolTankHealth() {
        return GetVehiclePetrolTankHealth(this.handle);
      }
      set PetrolTankHealth(value) {
        SetVehiclePetrolTankHealth(this.handle, value);
      }
      get FuelLevel() {
        return GetVehicleFuelLevel(this.handle);
      }
      set FuelLevel(value) {
        SetVehicleFuelLevel(this.handle, value);
      }
      get OilLevel() {
        return GetVehicleOilLevel(this.handle);
      }
      set OilLevel(value) {
        SetVehicleOilLevel(this.handle, value);
      }
      get Gravity() {
        return GetVehicleGravityAmount(this.handle);
      }
      set Gravity(value) {
        SetVehicleGravityAmount(this.handle, value);
      }
      get IsEngineRunning() {
        return !!GetIsVehicleEngineRunning(this.handle);
      }
      set IsEngineRunning(value) {
        SetVehicleEngineOn(this.handle, value, true, true);
      }
      get IsEngineStarting() {
        return !!IsVehicleEngineStarting(this.handle);
      }
      set IsEngineStarting(value) {
        if ((this.IsEngineStarting || this.IsEngineRunning) && value) {
          return;
        }
        SetVehicleEngineOn(this.handle, value, !value, true);
      }
      get IsRadioEnabled() {
        if (Game_1.Game.Player.Character.isInVehicle(this)) {
          return !!IsPlayerVehicleRadioEnabled();
        }
        return false;
      }
      set IsRadioEnabled(value) {
        SetVehicleRadioEnabled(this.handle, value);
      }
      set RadioStation(value) {
        this.IsRadioEnabled = true;
        SetVehRadioStation(this.handle, value);
      }
      get Speed() {
        return GetEntitySpeed(this.handle);
      }
      set Speed(value) {
        if (this.Model.IsTrain) {
          SetTrainSpeed(this.handle, value);
          SetTrainCruiseSpeed(this.handle, value);
        } else {
          SetVehicleForwardSpeed(this.handle, value);
        }
      }
      get WheelSpeed() {
        return GetVehicleDashboardSpeed(this.handle);
      }
      get Acceleration() {
        return GetVehicleCurrentAcceleration(this.handle);
      }
      get CurrentRPM() {
        return GetVehicleCurrentRpm(this.handle);
      }
      set CurrentRPM(value) {
        SetVehicleCurrentRpm(this.handle, value);
      }
      get HighGear() {
        return GetVehicleHighGear(this.handle);
      }
      set HighGear(value) {
        SetVehicleHighGear(this.handle, value);
      }
      get CurrentGear() {
        return GetVehicleCurrentGear(this.handle);
      }
      get SteeringAngle() {
        return GetVehicleSteeringAngle(this.handle);
      }
      set SteeringAngle(value) {
        SetVehicleSteeringAngle(this.handle, value);
      }
      get SteeringScale() {
        return GetVehicleSteeringScale(this.handle);
      }
      set SteeringScale(value) {
        SetVehicleSteeringScale(this.handle, value);
      }
      get IsAlarmSet() {
        return !!IsVehicleAlarmSet(this.handle);
      }
      set IsAlarmSet(value) {
        SetVehicleAlarm(this.handle, value);
      }
      get IsAlarmSounding() {
        return !!IsVehicleAlarmActivated(this.handle);
      }
      get AlarmTimeLeft() {
        return GetVehicleAlarmTimeLeft(this.handle);
      }
      set AlarmTimeLeft(value) {
        SetVehicleAlarmTimeLeft(this.handle, value);
      }
      startAlarm() {
        StartVehicleAlarm(this.handle);
      }
      get IsSirenActive() {
        return !!IsVehicleSirenOn(this.handle);
      }
      set IsSirenActive(value) {
        SetVehicleSiren(this.handle, value);
      }
      set IsSirenSilent(value) {
        DisableVehicleImpactExplosionActivation(this.handle, value);
      }
      soundHorn(duration) {
        StartVehicleHorn(this.handle, duration, Game_1.Game.generateHash("HELDDOWN"), false);
      }
      get IsWanted() {
        return !!IsVehicleWanted(this.handle);
      }
      set IsWanted(value) {
        SetVehicleIsWanted(this.handle, value);
      }
      set ProvidesCover(value) {
        SetVehicleProvidesCover(this.handle, value);
      }
      set DropsMoneyOnExplosion(value) {
        SetVehicleCreatesMoneyPickupsWhenExploded(this.handle, value);
      }
      get PreviouslyOwnedByPlayer() {
        return !!IsVehiclePreviouslyOwnedByPlayer(this.handle);
      }
      set PreviouslyOwnedByPlayer(value) {
        SetVehicleHasBeenOwnedByPlayer(this.handle, value);
      }
      get NeedsToBeHotwired() {
        return !!IsVehicleNeedsToBeHotwired(this.handle);
      }
      set NeedsToBeHotwired(value) {
        SetVehicleNeedsToBeHotwired(this.handle, value);
      }
      get AreLightsOn() {
        return !!GetVehicleLightsState(this.handle)[0];
      }
      set AreLightsOn(value) {
        SetVehicleLights(this.handle, value ? 3 : 4);
      }
      get AreHighBeamsOn() {
        return !!GetVehicleLightsState(this.handle)[1];
      }
      set AreHighBeamsOn(value) {
        SetVehicleFullbeam(this.handle, value);
      }
      get IsInteriorLightOn() {
        return !!IsVehicleInteriorLightOn(this.handle);
      }
      set IsInteriorLightOn(value) {
        SetVehicleInteriorlight(this.handle, value);
      }
      get IsSearchLightOn() {
        return !!IsVehicleSearchlightOn(this.handle);
      }
      set IsSearchLightOn(value) {
        SetVehicleSearchlight(this.handle, value, false);
      }
      get IsTaxiLightOn() {
        return !!IsTaxiLightOn(this.handle);
      }
      set IsTaxiLightOn(value) {
        SetTaxiLights(this.handle, value);
      }
      get IsLeftIndicatorLightOn() {
        const val = GetVehicleIndicatorLights(this.handle);
        return val === 1 || val === 3;
      }
      set IsLeftIndicatorLightOn(value) {
        SetVehicleIndicatorLights(this.handle, 1, value);
      }
      get IsRightIndicatorLightOn() {
        return GetVehicleIndicatorLights(this.handle) >= 2;
      }
      set IsRightIndicatorLightOn(value) {
        SetVehicleIndicatorLights(this.handle, 0, value);
      }
      get IsHandbrakeForcedOn() {
        return !!GetVehicleHandbrake(this.handle);
      }
      set IsHandbrakeForcedOn(value) {
        SetVehicleHandbrake(this.handle, value);
      }
      set AreBrakeLightsOn(value) {
        SetVehicleBrakeLights(this.handle, value);
      }
      set LightsMultiplier(value) {
        SetVehicleLightMultiplier(this.handle, value);
      }
      set CanBeVisiblyDamaged(value) {
        SetVehicleCanBeVisiblyDamaged(this.handle, value);
      }
      set Strong(toggle) {
        SetVehicleStrong(this.handle, toggle);
      }
      set CanBreak(toggle) {
        SetVehicleCanBreak(this.handle, toggle);
      }
      get IsDamaged() {
        return !!IsVehicleDamaged(this.handle);
      }
      get IsDriveable() {
        return !!IsVehicleDriveable(this.handle, false);
      }
      set IsDriveable(value) {
        SetVehicleUndriveable(this.handle, value);
      }
      get IsEngineOnFire() {
        return !!IsVehicleEngineOnFire(this.handle);
      }
      get HasRoof() {
        return !!DoesVehicleHaveRoof(this.handle);
      }
      get IsLeftHeadLightBroken() {
        return !!GetIsLeftVehicleHeadlightDamaged(this.handle);
      }
      get IsRightHeadLightBroken() {
        return !!GetIsRightVehicleHeadlightDamaged(this.handle);
      }
      get IsRearBumperBrokenOff() {
        return !!IsVehicleBumperBrokenOff(this.handle, false);
      }
      get IsFrontBumperBrokenOff() {
        return !!IsVehicleBumperBrokenOff(this.handle, true);
      }
      set IsAxlesStrong(value) {
        SetVehicleHasStrongAxles(this.handle, value);
      }
      set CanEngineDegrade(value) {
        SetVehicleEngineCanDegrade(this.handle, value);
      }
      set EnginePowerMultiplier(value) {
        SetVehicleEnginePowerMultiplier(this.handle, value);
      }
      set EngineTorqueMultiplier(value) {
        SetVehicleEngineTorqueMultiplier(this.handle, value);
      }
      get LandingGearState() {
        return GetLandingGearState(this.handle);
      }
      set LandingGearState(value) {
        SetVehicleLandingGear(this.handle, value);
      }
      get RoofState() {
        return GetConvertibleRoofState(this.handle);
      }
      set RoofState(value) {
        switch (value) {
          case enums_1.VehicleRoofState.Closed:
            RaiseConvertibleRoof(this.handle, true);
            RaiseConvertibleRoof(this.handle, false);
            break;
          case enums_1.VehicleRoofState.Closing:
            RaiseConvertibleRoof(this.handle, false);
            break;
          case enums_1.VehicleRoofState.Opened:
            LowerConvertibleRoof(this.handle, true);
            LowerConvertibleRoof(this.handle, false);
            break;
          case enums_1.VehicleRoofState.Opening:
            LowerConvertibleRoof(this.handle, false);
            break;
        }
      }
      get LockStatus() {
        return GetVehicleDoorLockStatus(this.handle);
      }
      set LockStatus(value) {
        SetVehicleDoorsLocked(this.handle, value);
      }
      get MaxBraking() {
        return GetVehicleMaxBraking(this.handle);
      }
      get MaxTraction() {
        return GetVehicleMaxTraction(this.handle);
      }
      get IsOnAllWheels() {
        return !!IsVehicleOnAllWheels(this.handle);
      }
      get IsStopped() {
        return !!IsVehicleStopped(this.handle);
      }
      get IsStoppedAtTrafficLights() {
        return !!IsVehicleStoppedAtTrafficLights(this.handle);
      }
      get IsStolen() {
        return !!IsVehicleStolen(this.handle);
      }
      set IsStolen(value) {
        SetVehicleIsStolen(this.handle, value);
      }
      get IsConvertible() {
        return !!IsVehicleAConvertible(this.handle, false);
      }
      set IsBurnoutForced(value) {
        SetVehicleBurnout(this.handle, value);
      }
      get IsInBurnout() {
        return !!IsVehicleInBurnout(this.handle);
      }
      get Driver() {
        return this.getPedOnSeat(enums_1.VehicleSeat.Driver);
      }
      get Occupants() {
        const driver = this.Driver;
        if (!_1.Ped.exists(driver)) {
          return this.Passengers;
        }
        return [driver, ...this.Passengers];
      }
      get Passengers() {
        const passengerCount = this.PassengerCount;
        if (passengerCount === 0) {
          return;
        }
        const result = [];
        for (let i = 0; i < this.PassengerCapacity; i++) {
          if (!this.isSeatFree(i)) {
            result.push(this.getPedOnSeat(i));
            if (result.length === passengerCount) {
              break;
            }
          }
        }
        return result;
      }
      get Doors() {
        if (!this._doors) {
          this._doors = new _1.VehicleDoorCollection(this);
        }
        return this._doors;
      }
      get Mods() {
        if (!this._mods) {
          this._mods = new _1.VehicleModCollection(this);
        }
        return this._mods;
      }
      get Wheels() {
        if (!this._wheels) {
          this._wheels = new _1.VehicleWheelCollection(this);
        }
        return this._wheels;
      }
      get Windows() {
        if (!this._windows) {
          this._windows = new _1.VehicleWindowCollection(this);
        }
        return this._windows;
      }
      extraExists(extra) {
        return !!DoesExtraExist(this.handle, extra);
      }
      isExtraOn(extra) {
        return this.extraExists(extra) ? !!IsVehicleExtraTurnedOn(this.handle, extra) : false;
      }
      toggleExtra(extra, toggle) {
        if (this.extraExists(extra)) {
          SetVehicleExtra(this.handle, extra, !toggle);
        }
      }
      getPedOnSeat(seat) {
        return new _1.Ped(GetPedInVehicleSeat(this.handle, seat));
      }
      isSeatFree(seat) {
        return !!IsVehicleSeatFree(this.handle, seat);
      }
      wash() {
        this.DirtLevel = 0;
      }
      get DirtLevel() {
        return GetVehicleDirtLevel(this.handle);
      }
      set DirtLevel(value) {
        SetVehicleDirtLevel(this.handle, value);
      }
      placeOnGround() {
        SetVehicleOnGroundProperly(this.handle);
      }
      repair() {
        SetVehicleFixed(this.handle);
      }
      explode() {
        ExplodeVehicle(this.handle, true, false);
      }
      explodeNetworked() {
        NetworkExplodeVehicle(this.handle, true, false, false);
      }
      get CanTiresBurst() {
        return !!GetVehicleTyresCanBurst(this.handle);
      }
      set CanTiresBurst(value) {
        SetVehicleTyresCanBurst(this.handle, value);
      }
      set CanWheelsBreak(value) {
        SetVehicleWheelsCanBreak(this.handle, value);
      }
      set CanDeformWheels(value) {
        SetVehicleCanDeformWheels(this.handle, value);
      }
      get HasBombBay() {
        return this.Bones.hasBone("door_hatch_1") && this.Bones.hasBone("door_hatch_r");
      }
      openBombBay() {
        if (this.HasBombBay) {
          OpenBombBayDoors(this.handle);
        }
      }
      closeBombBay() {
        if (this.HasBombBay) {
          CloseBombBayDoors(this.handle);
        }
      }
      setHeliYawPitchRollMult(mult) {
        if (this.Model.IsHelicopter && mult >= 0 && mult <= 1) {
          SetHelicopterRollPitchYawMult(this.handle, mult);
        }
      }
      set TowingCraneRaisedAmount(value) {
        SetTowTruckCraneHeight(this.handle, value);
      }
      get TowedVehicle() {
        return new Vehicle(GetEntityAttachedToTowTruck(this.handle));
      }
      towVehicle(vehicle, rear) {
        AttachVehicleToTowTruck(this.handle, vehicle.Handle, rear, 0, 0, 0);
      }
      detachFromTowTruck() {
        DetachVehicleFromAnyTowTruck(this.handle);
      }
      detachTowedVehicle() {
        const vehicle = this.TowedVehicle;
        if (Vehicle.exists(this.TowedVehicle)) {
          DetachVehicleFromTowTruck(this.handle, vehicle.Handle);
        }
      }
      deform(position, damageAmount, radius) {
        SetVehicleDamage(this.handle, position.x, position.y, position.z, damageAmount, radius, false);
      }
      get PassengerCapacity() {
        return GetVehicleMaxNumberOfPassengers(this.handle);
      }
      get PassengerCount() {
        return GetVehicleNumberOfPassengers(this.handle);
      }
      set RespotTimer(time) {
        SetNetworkVehicleRespotTimer(this.NetworkId, time);
      }
    };
    exports.Vehicle = Vehicle;
  }
});

// ../../node_modules/fivem-js/lib/models/VehicleDoor.js
var require_VehicleDoor = __commonJS({
  "../../node_modules/fivem-js/lib/models/VehicleDoor.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.VehicleDoor = void 0;
    var VehicleDoor = class {
      constructor(owner, index) {
        this._owner = owner;
        this.Index = index;
      }
      get Index() {
        return this._index;
      }
      set Index(index) {
        this._index = index;
      }
      get AngleRatio() {
        return GetVehicleDoorAngleRatio(this._owner.Handle, this.Index);
      }
      set AngleRatio(value) {
        SetVehicleDoorControl(this._owner.Handle, this.Index, 1, value);
      }
      set CanBeBroken(value) {
        SetVehicleDoorBreakable(this._owner.Handle, this.Index, value);
      }
      get IsOpen() {
        return this.AngleRatio > 0;
      }
      get IsFullyOpen() {
        return !!IsVehicleDoorFullyOpen(this._owner.Handle, this.Index);
      }
      get IsBroken() {
        return !!IsVehicleDoorDamaged(this._owner.Handle, this.Index);
      }
      get Vehicle() {
        return this._owner;
      }
      open(loose = false, instantly = false) {
        SetVehicleDoorOpen(this._owner.Handle, this.Index, loose, instantly);
      }
      close(instantly = false) {
        SetVehicleDoorShut(this._owner.Handle, this.Index, instantly);
      }
      break(stayInTheWorld = true) {
        SetVehicleDoorBroken(this._owner.Handle, this.Index, stayInTheWorld);
      }
    };
    exports.VehicleDoor = VehicleDoor;
  }
});

// ../../node_modules/fivem-js/lib/models/VehicleDoorCollection.js
var require_VehicleDoorCollection = __commonJS({
  "../../node_modules/fivem-js/lib/models/VehicleDoorCollection.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.VehicleDoorCollection = void 0;
    var enums_1 = require_enums();
    var VehicleDoor_1 = require_VehicleDoor();
    var VehicleDoorCollection = class {
      constructor(owner) {
        this._vehicleDoors = /* @__PURE__ */ new Map();
        this._owner = owner;
      }
      getDoors(index) {
        if (!this._vehicleDoors.has(index)) {
          this._vehicleDoors.set(index, new VehicleDoor_1.VehicleDoor(this._owner, index));
        }
        return this._vehicleDoors.get(index);
      }
      getAllDoors() {
        return Object.keys(enums_1.VehicleDoorIndex).filter((key) => !isNaN(Number(key))).map((key) => {
          const index = Number(key);
          if (this.hasDoor(index)) {
            return this.getDoors(index);
          }
          return null;
        }).filter((d) => d);
      }
      openAllDoors(loose, instantly) {
        this.getAllDoors().forEach((door) => {
          door.open(loose, instantly);
        });
      }
      closeAllDoors(instantly) {
        this.getAllDoors().forEach((door) => {
          door.close(instantly);
        });
      }
      breakAllDoors(stayInTheWorld) {
        this.getAllDoors().forEach((door) => {
          door.break(stayInTheWorld);
        });
      }
      hasDoor(index) {
        switch (index) {
          case enums_1.VehicleDoorIndex.FrontLeftDoor:
            return this._owner.Bones.hasBone("door_dside_f");
          case enums_1.VehicleDoorIndex.FrontRightDoor:
            return this._owner.Bones.hasBone("door_pside_f");
          case enums_1.VehicleDoorIndex.BackLeftDoor:
            return this._owner.Bones.hasBone("door_dside_r");
          case enums_1.VehicleDoorIndex.BackRightDoor:
            return this._owner.Bones.hasBone("door_pside_r");
          case enums_1.VehicleDoorIndex.Hood:
            return this._owner.Bones.hasBone("bonnet");
          case enums_1.VehicleDoorIndex.Trunk:
            return this._owner.Bones.hasBone("boot");
        }
        return false;
      }
    };
    exports.VehicleDoorCollection = VehicleDoorCollection;
  }
});

// ../../node_modules/fivem-js/lib/models/VehicleMod.js
var require_VehicleMod = __commonJS({
  "../../node_modules/fivem-js/lib/models/VehicleMod.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.VehicleMod = void 0;
    var VehicleMod = class {
      constructor(owner, modType) {
        this._owner = owner;
        this.ModType = modType;
      }
      get ModType() {
        return this._modType;
      }
      set ModType(modType) {
        this._modType = modType;
      }
      get Index() {
        return GetVehicleMod(this._owner.Handle, this.ModType);
      }
      set Index(value) {
        SetVehicleMod(this._owner.Handle, this.ModType, value, this.Variation);
      }
      get Variation() {
        return !!GetVehicleModVariation(this._owner.Handle, this.ModType);
      }
      set Variation(value) {
        SetVehicleMod(this._owner.Handle, this.ModType, this.Index, value);
      }
      get ModCount() {
        return GetNumVehicleMods(this._owner.Handle, this.ModType);
      }
      get Vehicle() {
        return this._owner;
      }
      remove() {
        RemoveVehicleMod(this._owner.Handle, this.ModType);
      }
    };
    exports.VehicleMod = VehicleMod;
  }
});

// ../../node_modules/fivem-js/lib/models/VehicleToggleMod.js
var require_VehicleToggleMod = __commonJS({
  "../../node_modules/fivem-js/lib/models/VehicleToggleMod.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.VehicleToggleMod = void 0;
    var VehicleToggleMod = class {
      constructor(owner, modType) {
        this._owner = owner;
        this.ModType = modType;
      }
      get ModType() {
        return this._modType;
      }
      set ModType(modType) {
        this._modType = modType;
      }
      get IsInstalled() {
        return !!IsToggleModOn(this._owner.Handle, this.ModType);
      }
      set IsInstalled(value) {
        ToggleVehicleMod(this._owner.Handle, this.ModType, value);
      }
      get LocalizedModTypeName() {
        return GetModSlotName(this._owner.Handle, this.ModType);
      }
      get Vehicle() {
        return this._owner;
      }
      remove() {
        RemoveVehicleMod(this._owner.Handle, this.ModType);
      }
    };
    exports.VehicleToggleMod = VehicleToggleMod;
  }
});

// ../../node_modules/fivem-js/lib/models/VehicleModCollection.js
var require_VehicleModCollection = __commonJS({
  "../../node_modules/fivem-js/lib/models/VehicleModCollection.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.VehicleModCollection = void 0;
    var enums_1 = require_enums();
    var VehicleMod_1 = require_VehicleMod();
    var utils_1 = require_utils();
    var VehicleToggleMod_1 = require_VehicleToggleMod();
    var VehicleModCollection = class {
      constructor(owner) {
        this._vehicleMods = /* @__PURE__ */ new Map();
        this._vehicleToggleMods = /* @__PURE__ */ new Map();
        this._owner = owner;
      }
      hasVehicleMod(type) {
        return GetNumVehicleMods(this._owner.Handle, type) > 0;
      }
      getMod(modType) {
        if (!this._vehicleMods.has(modType)) {
          this._vehicleMods.set(modType, new VehicleMod_1.VehicleMod(this._owner, modType));
        }
        return this._vehicleMods.get(modType);
      }
      getToggleMod(modType) {
        if (!this._vehicleToggleMods.has(modType)) {
          this._vehicleToggleMods.set(modType, new VehicleToggleMod_1.VehicleToggleMod(this._owner, modType));
        }
        return this._vehicleToggleMods.get(modType);
      }
      getAllMods() {
        return Object.keys(enums_1.VehicleModType).filter((key) => !isNaN(Number(key))).map((key) => {
          const index = Number(key);
          if (this.hasVehicleMod(index)) {
            return this.getMod(index);
          }
          return null;
        }).filter((m) => m);
      }
      get WheelType() {
        return GetVehicleWheelType(this._owner.Handle);
      }
      set WheelType(type) {
        SetVehicleWheelType(this._owner.Handle, type);
      }
      installModKit() {
        SetVehicleModKit(this._owner.Handle, 0);
      }
      get Livery() {
        const modCount = this.getMod(enums_1.VehicleModType.Livery).ModCount;
        if (modCount > 0) {
          return this.getMod(enums_1.VehicleModType.Livery).Index;
        }
        return GetVehicleLivery(this._owner.Handle);
      }
      set Livery(value) {
        if (this.getMod(enums_1.VehicleModType.Livery).ModCount > 0) {
          this.getMod(enums_1.VehicleModType.Livery).Index = value;
        } else {
          SetVehicleLivery(this._owner.Handle, value);
        }
      }
      get LiveryCount() {
        const modCount = this.getMod(enums_1.VehicleModType.Livery).ModCount;
        if (modCount > 0) {
          return modCount;
        }
        return GetVehicleLiveryCount(this._owner.Handle);
      }
      get WindowTint() {
        return GetVehicleWindowTint(this._owner.Handle);
      }
      set WindowTint(tint) {
        SetVehicleWindowTint(this._owner.Handle, tint);
      }
      get PrimaryColor() {
        return GetVehicleColours(this._owner.Handle)[0];
      }
      set PrimaryColor(color) {
        SetVehicleColours(this._owner.Handle, color, this.SecondaryColor);
      }
      get SecondaryColor() {
        return GetVehicleColours(this._owner.Handle)[1];
      }
      set SecondaryColor(color) {
        SetVehicleColours(this._owner.Handle, this.PrimaryColor, color);
      }
      get RimColor() {
        return GetVehicleExtraColours(this._owner.Handle)[1];
      }
      set RimColor(color) {
        SetVehicleExtraColours(this._owner.Handle, this.PearlescentColor, color);
      }
      get PearlescentColor() {
        return GetVehicleExtraColours(this._owner.Handle)[0];
      }
      set PearlescentColor(color) {
        SetVehicleExtraColours(this._owner.Handle, color, this.RimColor);
      }
      set TrimColor(color) {
        SetVehicleInteriorColour(this._owner.Handle, color);
      }
      set DashboardColor(color) {
        SetVehicleDashboardColour(this._owner.Handle, color);
      }
      setModColor1(paintType, color) {
        SetVehicleModColor_1(this._owner.Handle, paintType, color, 0);
      }
      setModColor2(paintType, color) {
        SetVehicleModColor_2(this._owner.Handle, paintType, color);
      }
      get ColorCombination() {
        return GetVehicleColourCombination(this._owner.Handle);
      }
      set ColorCombination(value) {
        SetVehicleColourCombination(this._owner.Handle, value);
      }
      get ColorCombinationCount() {
        return GetNumberOfVehicleColours(this._owner.Handle);
      }
      get TireSmokeColor() {
        const color = GetVehicleTyreSmokeColor(this._owner.Handle);
        return utils_1.Color.fromRgb(color[0], color[1], color[2]);
      }
      set TireSmokeColor(color) {
        SetVehicleTyreSmokeColor(this._owner.Handle, color.r, color.g, color.b);
      }
      get NeonLightsColor() {
        const color = GetVehicleNeonLightsColour(this._owner.Handle);
        return utils_1.Color.fromRgb(color[0], color[1], color[2]);
      }
      set NeonLightsColor(color) {
        SetVehicleNeonLightsColour(this._owner.Handle, color.r, color.g, color.b);
      }
      isNeonLightsOn(light) {
        return !!IsVehicleNeonLightEnabled(this._owner.Handle, light);
      }
      setNeonLightsOn(light, on2) {
        SetVehicleNeonLightEnabled(this._owner.Handle, light, on2);
      }
      areAllNeonLightsOn() {
        if (!this.HasAllNeonLights) {
          return false;
        }
        let on2 = true;
        Object.keys(enums_1.VehicleNeonLight).filter((key) => !isNaN(Number(key))).forEach((key) => {
          if (!on2) {
            return;
          }
          on2 = this.isNeonLightsOn(Number(key));
        });
        return on2;
      }
      setAllNeonLightsOn(on2) {
        Object.keys(enums_1.VehicleNeonLight).filter((key) => !isNaN(Number(key))).forEach((key) => {
          this.setNeonLightsOn(Number(key), on2);
        });
      }
      get HasAllNeonLights() {
        return Object.keys(enums_1.VehicleNeonLight).filter((key) => !isNaN(Number(key))).findIndex((light) => !this.hasNeonLight(Number(light))) === -1;
      }
      hasNeonLight(light) {
        switch (light) {
          case enums_1.VehicleNeonLight.Left:
            return this._owner.Bones.hasBone("neon_l");
          case enums_1.VehicleNeonLight.Right:
            return this._owner.Bones.hasBone("neon_r");
          case enums_1.VehicleNeonLight.Front:
            return this._owner.Bones.hasBone("neon_f");
          case enums_1.VehicleNeonLight.Back:
            return this._owner.Bones.hasBone("neon_b");
          default:
            return false;
        }
      }
      get CustomPrimaryColor() {
        const color = GetVehicleCustomPrimaryColour(this._owner.Handle);
        return utils_1.Color.fromRgb(color[0], color[1], color[2]);
      }
      set CustomPrimaryColor(color) {
        SetVehicleCustomPrimaryColour(this._owner.Handle, color.r, color.g, color.b);
      }
      get CustomSecondaryColor() {
        const color = GetVehicleCustomSecondaryColour(this._owner.Handle);
        return utils_1.Color.fromRgb(color[0], color[1], color[2]);
      }
      set CustomSecondaryColor(color) {
        SetVehicleCustomSecondaryColour(this._owner.Handle, color.r, color.g, color.b);
      }
      get IsPrimaryColorCustom() {
        return !!GetIsVehiclePrimaryColourCustom(this._owner.Handle);
      }
      get IsSecondaryColorCustom() {
        return !!GetIsVehicleSecondaryColourCustom(this._owner.Handle);
      }
      clearCustomPrimaryColor() {
        ClearVehicleCustomPrimaryColour(this._owner.Handle);
      }
      clearCustomSecondaryColor() {
        ClearVehicleCustomSecondaryColour(this._owner.Handle);
      }
      get LicensePlateStyle() {
        return GetVehicleNumberPlateTextIndex(this._owner.Handle);
      }
      set LicensePlateStyle(style) {
        SetVehicleNumberPlateTextIndex(this._owner.Handle, style);
      }
      get LicensePlateType() {
        return GetVehiclePlateType(this._owner.Handle);
      }
      get LicensePlate() {
        return GetVehicleNumberPlateText(this._owner.Handle);
      }
      set LicensePlate(text) {
        SetVehicleNumberPlateText(this._owner.Handle, text);
      }
    };
    exports.VehicleModCollection = VehicleModCollection;
  }
});

// ../../node_modules/fivem-js/lib/models/VehicleWheel.js
var require_VehicleWheel = __commonJS({
  "../../node_modules/fivem-js/lib/models/VehicleWheel.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.VehicleWheel = void 0;
    var VehicleWheel = class {
      constructor(owner, index) {
        this._owner = owner;
        this.Index = index;
      }
      get Index() {
        return this._index;
      }
      set Index(index) {
        this._index = index;
      }
      get Vehicle() {
        return this._owner;
      }
      burst() {
        SetVehicleTyreBurst(this._owner.Handle, this.Index, true, 1e3);
      }
      fix() {
        SetVehicleTyreFixed(this._owner.Handle, this.Index);
      }
    };
    exports.VehicleWheel = VehicleWheel;
  }
});

// ../../node_modules/fivem-js/lib/models/VehicleWheelCollection.js
var require_VehicleWheelCollection = __commonJS({
  "../../node_modules/fivem-js/lib/models/VehicleWheelCollection.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.VehicleWheelCollection = void 0;
    var VehicleWheel_1 = require_VehicleWheel();
    var enums_1 = require_enums();
    var VehicleWheelCollection = class {
      constructor(owner) {
        this._vehicleWheels = /* @__PURE__ */ new Map();
        this._owner = owner;
      }
      getWheel(index) {
        if (!this._vehicleWheels.has(index)) {
          this._vehicleWheels.set(index, new VehicleWheel_1.VehicleWheel(this._owner, index));
        }
        return this._vehicleWheels.get(index);
      }
      getAllWheels() {
        return Object.keys(enums_1.VehicleWheelIndex).filter((key) => !isNaN(Number(key))).map((key) => {
          const index = Number(key);
          if (this.hasWheel(index)) {
            return this.getWheel(index);
          }
          return null;
        }).filter((w) => w);
      }
      burstAllWheels() {
        this.getAllWheels().forEach((wheel) => {
          wheel.burst();
        });
      }
      fixAllWheels() {
        this.getAllWheels().forEach((wheel) => {
          wheel.fix();
        });
      }
      hasWheel(wheel) {
        switch (wheel) {
          case enums_1.VehicleWheelIndex.FrontLeftWheel:
            return this._owner.Bones.hasBone("wheel_lf");
          case enums_1.VehicleWheelIndex.FrontRightWheel:
            return this._owner.Bones.hasBone("wheel_rf");
          case enums_1.VehicleWheelIndex.MidLeftWheel:
            return this._owner.Bones.hasBone("wheel_lm");
          case enums_1.VehicleWheelIndex.MidRightWheel:
            return this._owner.Bones.hasBone("wheel_rm");
          case enums_1.VehicleWheelIndex.RearLeftWheel:
            return this._owner.Bones.hasBone("wheel_lr");
          case enums_1.VehicleWheelIndex.RearRightWheel:
            return this._owner.Bones.hasBone("wheel_rr");
          default:
            return false;
        }
      }
    };
    exports.VehicleWheelCollection = VehicleWheelCollection;
  }
});

// ../../node_modules/fivem-js/lib/models/VehicleWindow.js
var require_VehicleWindow = __commonJS({
  "../../node_modules/fivem-js/lib/models/VehicleWindow.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.VehicleWindow = void 0;
    var VehicleWindow = class {
      constructor(owner, index) {
        this._owner = owner;
        this.Index = index;
      }
      get Index() {
        return this._index;
      }
      set Index(index) {
        this._index = index;
      }
      get IsIntact() {
        return !!IsVehicleWindowIntact(this._owner.Handle, this.Index);
      }
      get Vehicle() {
        return this._owner;
      }
      repair() {
        FixVehicleWindow(this._owner.Handle, this.Index);
      }
      smash() {
        SmashVehicleWindow(this._owner.Handle, this.Index);
      }
      rollUp() {
        RollUpWindow(this._owner.Handle, this.Index);
      }
      rollDown() {
        RollDownWindow(this._owner.Handle, this.Index);
      }
      remove() {
        RemoveVehicleWindow(this._owner.Handle, this.Index);
      }
    };
    exports.VehicleWindow = VehicleWindow;
  }
});

// ../../node_modules/fivem-js/lib/models/VehicleWindowCollection.js
var require_VehicleWindowCollection = __commonJS({
  "../../node_modules/fivem-js/lib/models/VehicleWindowCollection.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.VehicleWindowCollection = void 0;
    var enums_1 = require_enums();
    var VehicleWindow_1 = require_VehicleWindow();
    var VehicleWindowCollection = class {
      constructor(owner) {
        this._vehicleWindows = /* @__PURE__ */ new Map();
        this._owner = owner;
      }
      getWindow(index) {
        if (!this._vehicleWindows.has(index)) {
          this._vehicleWindows.set(index, new VehicleWindow_1.VehicleWindow(this._owner, index));
        }
        return this._vehicleWindows.get(index);
      }
      getAllWindows() {
        return Object.keys(enums_1.VehicleWindowIndex).filter((key) => !isNaN(Number(key))).map((key) => {
          const index = Number(key);
          if (this.hasWindow(index)) {
            return this.getWindow(index);
          }
          return null;
        }).filter((w) => w);
      }
      get AreAllWindowsIntact() {
        return !!AreAllVehicleWindowsIntact(this._owner.Handle);
      }
      rollDownAllWindows() {
        this.getAllWindows().forEach((window) => {
          window.rollDown();
        });
      }
      rollUpAllWindows() {
        this.getAllWindows().forEach((window) => {
          window.rollUp();
        });
      }
      hasWindow(window) {
        switch (window) {
          case enums_1.VehicleWindowIndex.FrontLeftWindow:
            return this._owner.Bones.hasBone("window_lf");
          case enums_1.VehicleWindowIndex.FrontRightWindow:
            return this._owner.Bones.hasBone("window_rf");
          case enums_1.VehicleWindowIndex.BackLeftWindow:
            return this._owner.Bones.hasBone("window_lr");
          case enums_1.VehicleWindowIndex.BackRightWindow:
            return this._owner.Bones.hasBone("window_rr");
          default:
            return false;
        }
      }
    };
    exports.VehicleWindowCollection = VehicleWindowCollection;
  }
});

// ../../node_modules/fivem-js/lib/models/index.js
var require_models = __commonJS({
  "../../node_modules/fivem-js/lib/models/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.VehicleWindowCollection = exports.VehicleWindow = exports.VehicleWheelCollection = exports.VehicleWheel = exports.VehicleModCollection = exports.VehicleToggleMod = exports.VehicleMod = exports.VehicleDoorCollection = exports.VehicleDoor = exports.Vehicle = exports.Prop = exports.Player = exports.PedBoneCollection = exports.PedBone = exports.Ped = exports.EntityBoneCollection = exports.EntityBone = exports.Entity = void 0;
    var Entity_1 = require_Entity();
    Object.defineProperty(exports, "Entity", { enumerable: true, get: function() {
      return Entity_1.Entity;
    } });
    var EntityBone_1 = require_EntityBone();
    Object.defineProperty(exports, "EntityBone", { enumerable: true, get: function() {
      return EntityBone_1.EntityBone;
    } });
    var EntityBoneCollection_1 = require_EntityBoneCollection();
    Object.defineProperty(exports, "EntityBoneCollection", { enumerable: true, get: function() {
      return EntityBoneCollection_1.EntityBoneCollection;
    } });
    var Ped_1 = require_Ped();
    Object.defineProperty(exports, "Ped", { enumerable: true, get: function() {
      return Ped_1.Ped;
    } });
    var PedBone_1 = require_PedBone();
    Object.defineProperty(exports, "PedBone", { enumerable: true, get: function() {
      return PedBone_1.PedBone;
    } });
    var PedBoneCollection_1 = require_PedBoneCollection();
    Object.defineProperty(exports, "PedBoneCollection", { enumerable: true, get: function() {
      return PedBoneCollection_1.PedBoneCollection;
    } });
    var Player_1 = require_Player();
    Object.defineProperty(exports, "Player", { enumerable: true, get: function() {
      return Player_1.Player;
    } });
    var Prop_1 = require_Prop();
    Object.defineProperty(exports, "Prop", { enumerable: true, get: function() {
      return Prop_1.Prop;
    } });
    var Vehicle_1 = require_Vehicle2();
    Object.defineProperty(exports, "Vehicle", { enumerable: true, get: function() {
      return Vehicle_1.Vehicle;
    } });
    var VehicleDoor_1 = require_VehicleDoor();
    Object.defineProperty(exports, "VehicleDoor", { enumerable: true, get: function() {
      return VehicleDoor_1.VehicleDoor;
    } });
    var VehicleDoorCollection_1 = require_VehicleDoorCollection();
    Object.defineProperty(exports, "VehicleDoorCollection", { enumerable: true, get: function() {
      return VehicleDoorCollection_1.VehicleDoorCollection;
    } });
    var VehicleMod_1 = require_VehicleMod();
    Object.defineProperty(exports, "VehicleMod", { enumerable: true, get: function() {
      return VehicleMod_1.VehicleMod;
    } });
    var VehicleToggleMod_1 = require_VehicleToggleMod();
    Object.defineProperty(exports, "VehicleToggleMod", { enumerable: true, get: function() {
      return VehicleToggleMod_1.VehicleToggleMod;
    } });
    var VehicleModCollection_1 = require_VehicleModCollection();
    Object.defineProperty(exports, "VehicleModCollection", { enumerable: true, get: function() {
      return VehicleModCollection_1.VehicleModCollection;
    } });
    var VehicleWheel_1 = require_VehicleWheel();
    Object.defineProperty(exports, "VehicleWheel", { enumerable: true, get: function() {
      return VehicleWheel_1.VehicleWheel;
    } });
    var VehicleWheelCollection_1 = require_VehicleWheelCollection();
    Object.defineProperty(exports, "VehicleWheelCollection", { enumerable: true, get: function() {
      return VehicleWheelCollection_1.VehicleWheelCollection;
    } });
    var VehicleWindow_1 = require_VehicleWindow();
    Object.defineProperty(exports, "VehicleWindow", { enumerable: true, get: function() {
      return VehicleWindow_1.VehicleWindow;
    } });
    var VehicleWindowCollection_1 = require_VehicleWindowCollection();
    Object.defineProperty(exports, "VehicleWindowCollection", { enumerable: true, get: function() {
      return VehicleWindowCollection_1.VehicleWindowCollection;
    } });
  }
});

// ../../node_modules/fivem-js/lib/Game.js
var require_Game = __commonJS({
  "../../node_modules/fivem-js/lib/Game.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Game = void 0;
    var Audio_1 = require_Audio();
    var enums_1 = require_enums();
    var models_1 = require_models();
    var Game = class {
      static generateHash(input) {
        if (typeof input === "undefined") {
          return 0;
        }
        return GetHashKey(input);
      }
      static get Language() {
        return GetUiLanguageId();
      }
      static get GameTime() {
        return GetGameTimer();
      }
      static set TimeScale(time) {
        SetTimeScale(time <= 1 && time >= 0 ? time : 1);
      }
      static get FrameCount() {
        return GetFrameCount();
      }
      static get FPS() {
        return 1 / this.LastFrameTime;
      }
      static get LastFrameTime() {
        return GetFrameTime();
      }
      static get Player() {
        const handle = PlayerId();
        if (typeof this.cachedPlayer === "undefined" || handle !== this.cachedPlayer.Handle) {
          this.cachedPlayer = new models_1.Player(handle);
        }
        return this.cachedPlayer;
      }
      static get PlayerPed() {
        return this.Player.Character;
      }
      static *playerList() {
        for (const id of GetActivePlayers()) {
          yield new models_1.Player(id);
        }
      }
      static get PlayerVersusPlayer() {
        return this.Player.PvPEnabled;
      }
      static set PlayerVersusPlayer(value) {
        this.Player.PvPEnabled = value;
      }
      static get MaxWantedLevel() {
        return GetMaxWantedLevel();
      }
      static set MaxWantedLevel(value) {
        if (value < 0) {
          value = 0;
        } else if (value > 5) {
          value = 5;
        }
        SetMaxWantedLevel(value);
      }
      static set WantedMultiplier(value) {
        SetWantedLevelMultiplier(value);
      }
      static set ShowPoliceBlipsOnRadar(toggle) {
        SetPoliceRadarBlips(toggle);
      }
      static get Nightvision() {
        return !!IsNightvisionActive();
      }
      static set Nightvision(toggle) {
        SetNightvision(toggle);
      }
      static get ThermalVision() {
        return !!IsSeethroughActive();
      }
      static set ThermalVision(toggle) {
        SetSeethrough(toggle);
      }
      static get IsMissionActive() {
        return !!GetMissionFlag();
      }
      static set IsMissionActive(toggle) {
        SetMissionFlag(toggle);
      }
      static get IsRandomEventActive() {
        return GetRandomEventFlag() === 1;
      }
      static set IsRandomEventActive(toggle) {
        SetRandomEventFlag(toggle ? 1 : 0);
      }
      static get IsCutsceneActive() {
        return !!IsCutsceneActive();
      }
      static get IsWaypointActive() {
        return !!IsWaypointActive();
      }
      static get IsPaused() {
        return !!IsPauseMenuActive();
      }
      static set IsPaused(toggle) {
        SetPauseMenuActive(toggle);
      }
      static get IsLoading() {
        return !!GetIsLoadingScreenActive();
      }
      static get CurrentInputMode() {
        return IsInputDisabled(2) ? enums_1.InputMode.MouseAndKeyboard : enums_1.InputMode.GamePad;
      }
      static get RadioStation() {
        const stationName = GetPlayerRadioStationName();
        const keys = Object.keys(enums_1.RadioStation).filter((x) => enums_1.RadioStation[x] === stationName);
        return keys.length > 0 ? enums_1.RadioStation[keys[0]] : enums_1.RadioStation.RadioOff;
      }
      static set RadioStation(station) {
        const stationName = enums_1.RadioStation[station];
        SetRadioToStationName(stationName);
      }
      static isControlPressed(inputMode, control) {
        return !!IsControlPressed(inputMode, Number(control));
      }
      static isDisabledControlPressed(inputMode, control) {
        return !!IsDisabledControlPressed(inputMode, Number(control));
      }
      static isControlJustPressed(inputMode, control) {
        return !!IsControlJustPressed(inputMode, Number(control));
      }
      static isDisabledControlJustPressed(inputMode, control) {
        return !!IsDisabledControlJustPressed(inputMode, Number(control));
      }
      static isControlReleased(inputMode, control) {
        return !!IsControlReleased(inputMode, Number(control));
      }
      static isDisabledControlReleased(inputMode, control) {
        return !!IsDisabledControlReleased(inputMode, Number(control));
      }
      static isControlJustReleased(inputMode, control) {
        return !!IsControlJustReleased(inputMode, Number(control));
      }
      static isDisabledControlJustReleased(inputMode, control) {
        return !!IsDisabledControlJustReleased(inputMode, Number(control));
      }
      static isControlEnabled(inputMode, control) {
        return !!IsControlEnabled(inputMode, Number(control));
      }
      static enableControlThisFrame(inputMode, control) {
        EnableControlAction(inputMode, Number(control), true);
      }
      static disableControlThisFrame(inputMode, control) {
        DisableControlAction(inputMode, Number(control), true);
      }
      static disableAllControlsThisFrame(inputMode) {
        DisableAllControlActions(inputMode);
      }
      static enableAllControlsThisFrame(inputMode) {
        EnableAllControlActions(inputMode);
      }
      static entityFromHandle(handle) {
        switch (GetEntityType(handle)) {
          case 1:
            return new models_1.Ped(handle);
          case 2:
            return new models_1.Vehicle(handle);
          case 3:
            return new models_1.Prop(handle);
        }
        return null;
      }
      static playSound(soundFile, soundSet) {
        Audio_1.Audio.playSound(soundFile, soundSet);
      }
      static playMusic(musicFile) {
        Audio_1.Audio.playMusic(musicFile);
      }
      static stopMusic(musicFile) {
        Audio_1.Audio.stopMusic(musicFile);
      }
    };
    exports.Game = Game;
  }
});

// ../../node_modules/fivem-js/lib/Camera.js
var require_Camera = __commonJS({
  "../../node_modules/fivem-js/lib/Camera.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Camera = void 0;
    var models_1 = require_models();
    var utils_1 = require_utils();
    var Camera = class {
      constructor(handle) {
        this.shakeNames = [
          "HAND_SHAKE",
          "SMALL_EXPLOSION_SHAKE",
          "MEDIUM_EXPLOSION_SHAKE",
          "LARGE_EXPLOSION_SHAKE",
          "JOLT_SHAKE",
          "VIBRATE_SHAKE",
          "ROAD_VIBRATION_SHAKE",
          "DRUNK_SHAKE",
          "SKY_DIVING_SHAKE",
          "FAMILY5_DRUG_TRIP_SHAKE",
          "DEATH_FAIL_IN_EFFECT_SHAKE"
        ];
        this.handle = handle;
      }
      get IsActive() {
        return !!IsCamActive(this.handle);
      }
      set IsActive(active) {
        SetCamActive(this.handle, active);
      }
      get Position() {
        const pos = GetCamCoord(this.handle);
        return new utils_1.Vector3(pos[0], pos[1], pos[2]);
      }
      set Position(position) {
        SetCamCoord(this.handle, position.x, position.y, position.z);
      }
      get Rotation() {
        const rot = GetCamRot(this.handle, 2);
        return new utils_1.Vector3(rot[0], rot[1], rot[2]);
      }
      set Rotation(rotation) {
        SetCamRot(this.handle, rotation.x, rotation.y, rotation.z, 2);
      }
      get Direction() {
        return this.ForwardVector;
      }
      set Direction(direction) {
        const dir = direction.normalize;
        const vec1 = new utils_1.Vector3(dir.x, dir.y, 0);
        const vec2 = new utils_1.Vector3(dir.z, vec1.distanceSquared(vec1), 0);
        const vec3 = vec2.normalize;
        this.Rotation = new utils_1.Vector3(Math.atan2(vec3.x, vec3.y) * 57.29577951308232, this.Rotation.y, Math.atan2(dir.x, dir.y) * -57.29577951308232);
      }
      get ForwardVector() {
        const rotation = utils_1.Vector3.multiply(this.Rotation, Math.PI / 180);
        const normalized = utils_1.Vector3.normalize(new utils_1.Vector3(-Math.sin(rotation.z) * Math.abs(Math.cos(rotation.x)), Math.cos(rotation.z) * Math.abs(Math.cos(rotation.x)), Math.sin(rotation.x)));
        return new utils_1.Vector3(normalized.x, normalized.y, normalized.z);
      }
      get FieldOfView() {
        return GetCamFov(this.handle);
      }
      set FieldOfView(fieldOfView) {
        SetCamFov(this.handle, fieldOfView);
      }
      get NearClip() {
        return GetCamNearClip(this.handle);
      }
      set NearClip(nearClip) {
        SetCamNearClip(this.handle, nearClip);
      }
      get FarClip() {
        return GetCamFarClip(this.handle);
      }
      set FarClip(farClip) {
        SetCamFarClip(this.handle, farClip);
      }
      set NearDepthOfField(nearDepthOfField) {
        SetCamNearDof(this.handle, nearDepthOfField);
      }
      get FarDepthOfField() {
        return GetCamFarDof(this.handle);
      }
      set FarDepthOfField(farDepthOfField) {
        SetCamFarDof(this.handle, farDepthOfField);
      }
      set DepthOfFieldStrength(strength) {
        SetCamDofStrength(this.handle, strength);
      }
      set MotionBlurStrength(strength) {
        SetCamMotionBlurStrength(this.handle, strength);
      }
      shake(shakeType, amplitude) {
        ShakeCam(this.handle, this.shakeNames[Number(shakeType)], amplitude);
      }
      stopShaking() {
        StopCamShaking(this.handle, true);
      }
      get IsShaking() {
        return !!IsCamShaking(this.handle);
      }
      set ShakeAmplitude(amplitude) {
        SetCamShakeAmplitude(this.handle, amplitude);
      }
      pointAt(target, offset = new utils_1.Vector3(0, 0, 0)) {
        if (target instanceof models_1.Entity) {
          PointCamAtEntity(this.handle, target.Handle, offset.x, offset.y, offset.z, true);
        } else if (target instanceof models_1.PedBone) {
          PointCamAtPedBone(this.handle, target.Owner.Handle, target.Index, offset.x, offset.y, offset.z, true);
        } else {
          PointCamAtCoord(this.handle, target.x, target.y, target.z);
        }
      }
      stopPointing() {
        StopCamPointing(this.handle);
      }
      interpTo(to, duration, easePosition, easeRotation) {
        SetCamActiveWithInterp(to.handle, this.handle, duration, Number(easePosition), Number(easeRotation));
      }
      get IsInterpolating() {
        return !!IsCamInterpolating(this.handle);
      }
      attachTo(object, offset) {
        if (object instanceof models_1.Entity) {
          AttachCamToEntity(this.handle, object.Handle, offset.x, offset.y, offset.z, true);
        } else if (object instanceof models_1.PedBone) {
          AttachCamToPedBone(this.handle, object.Owner.Handle, object.Index, offset.x, offset.y, offset.z, true);
        }
      }
      detach() {
        DetachCam(this.handle);
      }
      delete() {
        DestroyCam(this.handle, false);
      }
      exists() {
        return !!DoesCamExist(this.handle);
      }
    };
    exports.Camera = Camera;
  }
});

// ../../node_modules/fivem-js/lib/Raycast.js
var require_Raycast = __commonJS({
  "../../node_modules/fivem-js/lib/Raycast.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RaycastResult = void 0;
    var Game_1 = require_Game();
    var utils_1 = require_utils();
    var RaycastResult = class {
      constructor(handle) {
        this.handle = handle;
        this.hitPositionArg = new utils_1.Vector3(0, 0, 0);
        this.hitSomethingArg = false;
        this.entityHandleArg = null;
        this.surfaceNormalArg = new utils_1.Vector3(0, 0, 0);
        this.materialArg = 0;
        const results = GetShapeTestResultEx(this.handle);
        this.hitSomethingArg = !!results[1];
        this.hitPositionArg = new utils_1.Vector3(results[2][0], results[2][1], results[2][2]);
        this.surfaceNormalArg = new utils_1.Vector3(results[3][0], results[3][1], results[3][2]);
        this.materialArg = results[4];
        this.entityHandleArg = Game_1.Game.entityFromHandle(results[5]);
        this.result = results[0];
      }
      get HitEntity() {
        return this.entityHandleArg;
      }
      get HitPosition() {
        return this.hitPositionArg;
      }
      get SurfaceNormal() {
        return this.surfaceNormalArg;
      }
      get DidHit() {
        return this.hitSomethingArg;
      }
      get DidHitEntity() {
        return this.entityHandleArg.Handle !== 0;
      }
      get Material() {
        return this.materialArg;
      }
      get Result() {
        return this.result;
      }
    };
    exports.RaycastResult = RaycastResult;
  }
});

// ../../node_modules/fivem-js/lib/World.js
var require_World = __commonJS({
  "../../node_modules/fivem-js/lib/World.js"(exports) {
    "use strict";
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.World = void 0;
    var _1 = require_lib();
    var Blip_1 = require_Blip2();
    var Camera_1 = require_Camera();
    var enums_1 = require_enums();
    var hashes_1 = require_hashes();
    var models_1 = require_models();
    var Raycast_1 = require_Raycast();
    var utils_1 = require_utils();
    var World = class {
      static get RenderingCamera() {
        return new Camera_1.Camera(GetRenderingCam());
      }
      static set RenderingCamera(value) {
        if (value === null) {
          RenderScriptCams(false, false, 3e3, true, false);
        } else {
          value.IsActive = true;
          RenderScriptCams(true, false, 3e3, true, false);
        }
      }
      static get CurrentDate() {
        const year = GetClockYear();
        const month = GetClockMonth();
        const day = GetClockDayOfMonth();
        const hour = GetClockHours();
        const minutes = GetClockMinutes();
        const seconds = GetClockSeconds();
        return new Date(year, month, day, hour, minutes, seconds);
      }
      static set CurrentDate(date) {
        SetClockDate(date.getDate(), date.getMonth(), date.getFullYear());
        SetClockTime(date.getHours(), date.getMinutes(), date.getSeconds());
      }
      static set Blackout(value) {
        SetBlackout(value);
      }
      static get CloudHat() {
        return this.currentCloudHat;
      }
      static set CloudHat(value) {
        this.currentCloudHat = value;
        if (this.currentCloudHat === enums_1.CloudHat.Unknown) {
          this.currentCloudHat = enums_1.CloudHat.Clear;
          ClearCloudHat();
          return;
        }
        SetCloudHatTransition(this.cloudHatDict.has(this.currentCloudHat) ? this.cloudHatDict.get(this.currentCloudHat) : "", 3);
      }
      static get CloudHatOpacity() {
        return GetCloudHatOpacity();
      }
      static set CloudHatOpacity(value) {
        SetCloudHatOpacity(utils_1.clamp(value, 0, 1));
      }
      static get Weather() {
        switch (GetPrevWeatherTypeHashName()) {
          case -1750463879:
            return enums_1.Weather.ExtraSunny;
          case 916995460:
            return enums_1.Weather.Clear;
          case -1530260698:
            return enums_1.Weather.Neutral;
          case 282916021:
            return enums_1.Weather.Smog;
          case -1368164796:
            return enums_1.Weather.Foggy;
          case 821931868:
            return enums_1.Weather.Clouds;
          case -1148613331:
            return enums_1.Weather.Overcast;
          case 1840358669:
            return enums_1.Weather.Clearing;
          case 1420204096:
            return enums_1.Weather.Raining;
          case -1233681761:
            return enums_1.Weather.ThunderStorm;
          case 669657108:
            return enums_1.Weather.Blizzard;
          case -273223690:
            return enums_1.Weather.Snowing;
          case 603685163:
            return enums_1.Weather.Snowlight;
          case -1429616491:
            return enums_1.Weather.Christmas;
          case -921030142:
            return enums_1.Weather.Halloween;
          default:
            return enums_1.Weather.Unknown;
        }
      }
      static set Weather(value) {
        if (value !== enums_1.Weather.Unknown) {
          const weather = this.weatherDict[value];
          SetWeatherTypeOverTime(weather, 1);
          setTimeout(() => {
            SetWeatherTypeNow(weather);
          }, 100);
        }
      }
      static get NextWeather() {
        switch (GetNextWeatherTypeHashName()) {
          case -1750463879:
            return enums_1.Weather.ExtraSunny;
          case 916995460:
            return enums_1.Weather.Clear;
          case -1530260698:
            return enums_1.Weather.Neutral;
          case 282916021:
            return enums_1.Weather.Smog;
          case -1368164796:
            return enums_1.Weather.Foggy;
          case 821931868:
            return enums_1.Weather.Clouds;
          case -1148613331:
            return enums_1.Weather.Overcast;
          case 1840358669:
            return enums_1.Weather.Clearing;
          case 1420204096:
            return enums_1.Weather.Raining;
          case -1233681761:
            return enums_1.Weather.ThunderStorm;
          case 669657108:
            return enums_1.Weather.Blizzard;
          case -273223690:
            return enums_1.Weather.Snowing;
          case 603685163:
            return enums_1.Weather.Snowlight;
          case -1429616491:
            return enums_1.Weather.Christmas;
          case -921030142:
            return enums_1.Weather.Halloween;
          default:
            return enums_1.Weather.Unknown;
        }
      }
      static set NextWeather(value) {
        if (value !== enums_1.Weather.Unknown) {
          const weather = this.weatherDict[value];
          SetWeatherTypeOverTime(weather, 0);
        }
      }
      static get WeatherTransition() {
        const transition = GetWeatherTypeTransition();
        return [this.weatherDict[transition[0]], this.weatherDict[transition[1]], transition[2]];
      }
      static set WeatherTransition(transition) {
        SetWeatherTypeTransition(transition[0], transition[1], transition[2]);
      }
      static transitionToWeather(weather, duration) {
        if (weather !== enums_1.Weather.Unknown) {
          SetWeatherTypeOverTime(this.weatherDict[weather], duration);
        }
      }
      static destroyAllCameras() {
        DestroyAllCams(false);
      }
      static createBlip(position, radius) {
        if (radius !== null && radius !== void 0) {
          return new Blip_1.Blip(AddBlipForRadius(position.x, position.y, position.z, radius));
        }
        return new Blip_1.Blip(AddBlipForCoord(position.x, position.y, position.z));
      }
      static createCamera(position, rotation, fieldOfView) {
        return new Camera_1.Camera(CreateCamWithParams("DEFAULT_SCRIPTED_CAMERA", position.x, position.y, position.z, rotation.x, rotation.y, rotation.z, fieldOfView, true, 2));
      }
      static createPed(model, position, heading = 0) {
        return __awaiter(this, void 0, void 0, function* () {
          if (!model.IsPed || !(yield model.request(1e3))) {
            return null;
          }
          return new models_1.Ped(CreatePed(26, model.Hash, position.x, position.y, position.z, heading, true, false));
        });
      }
      static createRandomPed(position) {
        return new models_1.Ped(CreateRandomPed(position.x, position.y, position.z));
      }
      static createVehicle(model, position, heading = 0) {
        return __awaiter(this, void 0, void 0, function* () {
          if (!model.IsVehicle || !(yield model.request(1e3))) {
            return null;
          }
          return new models_1.Vehicle(CreateVehicle(model.Hash, position.x, position.y, position.z, heading, true, false));
        });
      }
      static createRandomVehicle(position, heading = 0) {
        return __awaiter(this, void 0, void 0, function* () {
          const vehicleCount = Object.keys(hashes_1.VehicleHash).length / 2;
          const randomIndex = utils_1.getRandomInt(0, vehicleCount);
          const randomVehicleName = hashes_1.VehicleHash[randomIndex];
          const modelHash = GetHashKey(randomVehicleName);
          const model = new _1.Model(modelHash);
          if (!model.IsVehicle || !(yield model.request(1e3))) {
            return null;
          }
          return new models_1.Vehicle(CreateVehicle(model.Hash, position.x, position.y, position.z, heading, true, false));
        });
      }
      static createProp(model, position, dynamic, placeOnGround) {
        return __awaiter(this, void 0, void 0, function* () {
          if (!model.IsProp || !(yield model.request(1e3))) {
            return null;
          }
          const prop = new _1.Prop(CreateObject(model.Hash, position.x, position.y, position.z, true, true, dynamic));
          if (placeOnGround) {
            prop.placeOnGround();
          }
          return prop;
        });
      }
      static drawMarker(type, position, direction, rotation, scale, color, bobUpAndDown = false, faceCamera = false, rotateY = false, textureDict = null, textureName = null, drawOnEntity = false) {
        DrawMarker(Number(type), position.x, position.y, position.z, direction.x, direction.y, direction.z, rotation.x, rotation.y, rotation.z, scale.x, scale.y, scale.z, color.r, color.g, color.b, color.a, bobUpAndDown, faceCamera, 2, rotateY, textureDict, textureName, drawOnEntity);
      }
      static drawLightWithRange(pos, color, range, intensity) {
        DrawLightWithRange(pos.x, pos.y, pos.z, color.r, color.g, color.b, range, intensity);
      }
      static drawSpotLight(pos, dir, color, distance, brightness, roundness, radius, fadeOut) {
        DrawSpotLight(pos.x, pos.y, pos.z, dir.x, dir.y, dir.z, color.r, color.g, color.b, distance, brightness, roundness, radius, fadeOut);
      }
      static drawSpotLightWithShadow(pos, dir, color, distance, brightness, roundness, radius, fadeOut) {
        DrawSpotLightWithShadow(pos.x, pos.y, pos.z, dir.x, dir.y, dir.z, color.r, color.g, color.b, distance, brightness, roundness, radius, fadeOut, 0);
      }
      static drawLine(start, end, color) {
        DrawLine(start.x, start.y, start.z, end.x, end.y, end.z, color.r, color.g, color.b, color.a);
      }
      static drawPoly(vertexA, vertexB, vertexC, color) {
        DrawPoly(vertexA.x, vertexA.y, vertexA.z, vertexB.x, vertexB.y, vertexB.z, vertexC.x, vertexC.y, vertexC.z, color.r, color.g, color.b, color.a);
      }
      static raycast(source, direction, maxDistance, options, ignoreEntity) {
        const target = utils_1.Vector3.add(source, utils_1.Vector3.multiply(direction, maxDistance));
        return new Raycast_1.RaycastResult(StartShapeTestRay(source.x, source.y, source.z, target.x, target.y, target.z, Number(options), ignoreEntity.Handle, 7));
      }
      static getAllProps() {
        const props = [];
        const [handle, entityHandle] = FindFirstObject(null);
        let prop = _1.Entity.fromHandle(entityHandle);
        if (prop !== void 0 && prop !== null && prop.exists()) {
          props.push(prop);
        }
        let findResult = [false, null];
        do {
          findResult = FindNextObject(handle, null);
          if (findResult[0]) {
            prop = _1.Entity.fromHandle(findResult[1]);
            if (prop !== void 0 && prop !== null && prop.exists()) {
              props.push(prop);
            }
          }
        } while (findResult[0]);
        EndFindObject(handle);
        return props;
      }
      static getAllPeds() {
        const peds = [];
        const [handle, entityHandle] = FindFirstPed(null);
        let ped = _1.Entity.fromHandle(entityHandle);
        if (ped !== void 0 && ped !== null && ped.exists()) {
          peds.push(ped);
        }
        let findResult = [false, null];
        do {
          findResult = FindNextPed(handle, null);
          if (findResult[0]) {
            ped = _1.Entity.fromHandle(findResult[1]);
            if (ped !== void 0 && ped !== null && ped.exists()) {
              peds.push(ped);
            }
          }
        } while (findResult[0]);
        EndFindPed(handle);
        return peds;
      }
      static getAllVehicles() {
        const vehicles = [];
        const [handle, entityHandle] = FindFirstVehicle(null);
        let vehicle = _1.Entity.fromHandle(entityHandle);
        if (vehicle !== void 0 && vehicle !== null && vehicle.exists()) {
          vehicles.push(vehicle);
        }
        let findResult = [false, null];
        do {
          findResult = FindNextVehicle(handle, null);
          if (findResult[0]) {
            vehicle = _1.Entity.fromHandle(findResult[1]);
            if (vehicle !== void 0 && vehicle !== null && vehicle.exists()) {
              vehicles.push(vehicle);
            }
          }
        } while (findResult[0]);
        EndFindVehicle(handle);
        return vehicles;
      }
    };
    exports.World = World;
    World.currentCloudHat = enums_1.CloudHat.Clear;
    World.cloudHatDict = /* @__PURE__ */ new Map([
      [enums_1.CloudHat.Unknown, "Unknown"],
      [enums_1.CloudHat.Altostratus, "altostratus"],
      [enums_1.CloudHat.Cirrus, "Cirrus"],
      [enums_1.CloudHat.Cirrocumulus, "cirrocumulus"],
      [enums_1.CloudHat.Clear, "Clear 01"],
      [enums_1.CloudHat.Cloudy, "Cloudy 01"],
      [enums_1.CloudHat.Contrails, "Contrails"],
      [enums_1.CloudHat.Horizon, "Horizon"],
      [enums_1.CloudHat.HorizonBand1, "horizonband1"],
      [enums_1.CloudHat.HorizonBand2, "horizonband2"],
      [enums_1.CloudHat.HorizonBand3, "horizonband3"],
      [enums_1.CloudHat.Horsey, "horsey"],
      [enums_1.CloudHat.Nimbus, "Nimbus"],
      [enums_1.CloudHat.Puffs, "Puffs"],
      [enums_1.CloudHat.Rain, "RAIN"],
      [enums_1.CloudHat.Snowy, "Snowy 01"],
      [enums_1.CloudHat.Stormy, "Stormy 01"],
      [enums_1.CloudHat.Stratoscumulus, "stratoscumulus"],
      [enums_1.CloudHat.Stripey, "Stripey"],
      [enums_1.CloudHat.Shower, "shower"],
      [enums_1.CloudHat.Wispy, "Wispy"]
    ]);
    World.weatherDict = [
      "EXTRASUNNY",
      "CLEAR",
      "CLOUDS",
      "SMOG",
      "FOGGY",
      "OVERCAST",
      "RAIN",
      "THUNDER",
      "CLEARING",
      "NEUTRAL",
      "SNOW",
      "BLIZZARD",
      "SNOWLIGHT",
      "XMAS"
    ];
  }
});

// ../../node_modules/fivem-js/lib/Checkpoint.js
var require_Checkpoint2 = __commonJS({
  "../../node_modules/fivem-js/lib/Checkpoint.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Checkpoint = void 0;
    var Checkpoint = class {
      constructor(handle) {
        this.handle = handle;
      }
      get Position() {
        return this.position;
      }
      set Position(position) {
        this.position = position;
      }
      get TargetPosition() {
        return this.targetPosition;
      }
      set TargetPosition(targetPosition) {
        this.targetPosition = targetPosition;
      }
      get Icon() {
        return this.icon;
      }
      set Icon(icon) {
        this.icon = icon;
      }
      get Radius() {
        return this.radius;
      }
      set Radius(radius) {
        this.radius = radius;
      }
    };
    exports.Checkpoint = Checkpoint;
  }
});

// ../../node_modules/fivem-js/lib/GameplayCamera.js
var require_GameplayCamera = __commonJS({
  "../../node_modules/fivem-js/lib/GameplayCamera.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GameplayCamera = void 0;
    var utils_1 = require_utils();
    var GameplayCamera = class {
      static get Position() {
        const coords = GetGameplayCamCoords();
        return new utils_1.Vector3(coords[0], coords[1], coords[2]);
      }
      static get Rotation() {
        const rot = GetGameplayCamRot(2);
        return new utils_1.Vector3(rot[0], rot[1], rot[2]);
      }
      static get ForwardVector() {
        const rotation = utils_1.Vector3.multiply(this.Rotation, Math.PI / 180);
        const normalized = utils_1.Vector3.normalize(new utils_1.Vector3(-Math.sin(rotation.z) * Math.abs(Math.cos(rotation.x)), Math.cos(rotation.z) * Math.abs(Math.cos(rotation.x)), Math.sin(rotation.x)));
        return new utils_1.Vector3(normalized.x, normalized.y, normalized.z);
      }
      static get RelativePitch() {
        return GetGameplayCamRelativePitch();
      }
      static set RelativePitch(pitch) {
        SetGameplayCamRelativePitch(pitch, 1);
      }
      static get RelativeHeading() {
        return GetGameplayCamRelativeHeading();
      }
      static set RelativeHeading(heading) {
        SetGameplayCamRelativeHeading(heading);
      }
    };
    exports.GameplayCamera = GameplayCamera;
  }
});

// ../../node_modules/fivem-js/lib/ParticleEffect.js
var require_ParticleEffect = __commonJS({
  "../../node_modules/fivem-js/lib/ParticleEffect.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ParticleEffect = void 0;
    var ParticleEffect = class {
      constructor(asset, effectName) {
        this.handle = -1;
        this.asset = asset;
        this.effectName = effectName;
      }
      get Handle() {
        return this.handle;
      }
      get IsActive() {
        return this.Handle !== -1 && !!DoesParticleFxLoopedExist(this.Handle);
      }
      stop() {
        if (this.IsActive) {
          RemoveParticleFx(this.Handle, false);
        }
        this.handle = -1;
      }
      get Rotation() {
        return this.rotation;
      }
      set Rotation(rotation) {
        this.rotation = rotation;
        if (this.IsActive) {
          const off = this.offset;
          SetParticleFxLoopedOffsets(this.Handle, off.x, off.y, off.z, rotation.x, rotation.y, rotation.z);
        }
      }
      get Range() {
        return this.range;
      }
      set Range(range) {
        this.range = range;
        SetParticleFxLoopedRange(this.Handle, range);
      }
      get InvertAxis() {
        return this.invertAxis;
      }
      set InvertAxis(invertAxis) {
        this.invertAxis = invertAxis;
        if (this.IsActive) {
          this.stop();
          this.start();
        }
      }
      setParameter(parameterName, value) {
        if (this.IsActive) {
          SetParticleFxLoopedEvolution(this.Handle, parameterName, value, false);
        }
      }
      get AssetName() {
        return this.asset.AssetName;
      }
      get EffectName() {
        return this.effectName;
      }
      toString() {
        return `${this.AssetName}\\${this.EffectName}`;
      }
    };
    exports.ParticleEffect = ParticleEffect;
  }
});

// ../../node_modules/fivem-js/lib/ParticleEffectAsset.js
var require_ParticleEffectAsset = __commonJS({
  "../../node_modules/fivem-js/lib/ParticleEffectAsset.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ParticleEffectAsset = void 0;
    var enums_1 = require_enums();
    var utils_1 = require_utils();
    var ParticleEffectAsset = class {
      constructor(assetName) {
        this.assetName = assetName;
      }
      get Asset() {
        return this.assetName;
      }
      get AssetName() {
        return this.assetName;
      }
      get IsLoaded() {
        return !!HasNamedPtfxAssetLoaded(this.assetName);
      }
      startNonLoopedAtCoord(effectName, pos, rot = new utils_1.Vector3(0, 0, 0), scale = 1, invertAxis = { flags: enums_1.InvertAxisFlags.None }) {
        if (!this.setNextCall()) {
          return false;
        }
        const invertAxisFlags = invertAxis.flags;
        SetPtfxAssetNextCall(this.assetName);
        return StartParticleFxLoopedAtCoord(effectName, pos.x, pos.y, pos.z, rot.x, rot.y, rot.z, scale, !!(invertAxisFlags & enums_1.InvertAxisFlags.X), !!(invertAxisFlags & enums_1.InvertAxisFlags.Y), !!(invertAxisFlags & enums_1.InvertAxisFlags.Z), false) > 0;
      }
      startNonLoopedOnEntity(effectName, entity, off = new utils_1.Vector3(0, 0, 0), rot = new utils_1.Vector3(0, 0, 0), scale = 1, invertAxis = { flags: enums_1.InvertAxisFlags.None }) {
        if (!this.setNextCall()) {
          return false;
        }
        const invertAxisFlags = invertAxis.flags;
        SetPtfxAssetNextCall(this.assetName);
        return !!StartParticleFxLoopedOnEntity(effectName, entity.Handle, off.x, off.y, off.z, rot.x, rot.y, rot.z, scale, !!(invertAxisFlags & enums_1.InvertAxisFlags.X), !!(invertAxisFlags & enums_1.InvertAxisFlags.Y), !!(invertAxisFlags & enums_1.InvertAxisFlags.Z));
      }
      request(timeout) {
        return new Promise((resolve) => {
          if (!this.IsLoaded) {
            RequestNamedPtfxAsset(this.assetName);
            const start = GetGameTimer();
            const interval = setInterval(() => {
              if (this.IsLoaded || GetGameTimer() - start >= timeout) {
                clearInterval(interval);
                resolve(this.IsLoaded);
              }
            }, 0);
          } else {
            resolve(this.IsLoaded);
          }
        });
      }
      markAsNoLongerNeeded() {
        RemoveNamedPtfxAsset(this.assetName);
      }
      toString() {
        return this.assetName;
      }
      setNextCall() {
        if (!this.IsLoaded) {
          RequestNamedPtfxAsset(this.assetName);
        } else {
          SetPtfxAssetNextCall(this.assetName);
          return true;
        }
        return false;
      }
    };
    exports.ParticleEffectAsset = ParticleEffectAsset;
  }
});

// ../../node_modules/fivem-js/lib/RelationshipGroup.js
var require_RelationshipGroup = __commonJS({
  "../../node_modules/fivem-js/lib/RelationshipGroup.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RelationshipGroup = void 0;
    var RelationshipGroup = class {
      constructor(name, groupHash) {
        AddRelationshipGroup(name, groupHash ? groupHash : 0);
        this.hash = groupHash ? groupHash : 0;
      }
      get Hash() {
        return this.hash;
      }
      getRelationshipBetweenGroups(targetGroup) {
        return GetRelationshipBetweenGroups(this.Hash, targetGroup.Hash);
      }
      setRelationshipBetweenGroups(targetGroup, relationship, biDirectionally = false) {
        SetRelationshipBetweenGroups(Number(relationship), this.Hash, targetGroup.Hash);
        if (biDirectionally) {
          SetRelationshipBetweenGroups(Number(relationship), targetGroup.Hash, this.Hash);
        }
      }
      clearRelationshipBetweenGroups(targetGroup, relationship, biDirectionally = false) {
        ClearRelationshipBetweenGroups(Number(relationship), this.Hash, targetGroup.Hash);
        if (biDirectionally) {
          ClearRelationshipBetweenGroups(Number(relationship), targetGroup.Hash, this.Hash);
        }
      }
      remove() {
        RemoveRelationshipGroup(this.Hash);
      }
    };
    exports.RelationshipGroup = RelationshipGroup;
  }
});

// ../../node_modules/fivem-js/lib/ui/interfaces/index.js
var require_interfaces = __commonJS({
  "../../node_modules/fivem-js/lib/ui/interfaces/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// ../../node_modules/fivem-js/lib/ui/Rectangle.js
var require_Rectangle = __commonJS({
  "../../node_modules/fivem-js/lib/ui/Rectangle.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Rectangle = void 0;
    var utils_1 = require_utils();
    var _1 = require_ui();
    var Rectangle = class {
      constructor(pos, size, color) {
        this.pos = pos;
        this.size = size;
        this.color = color;
      }
      draw(arg1, arg2, color, resolution) {
        resolution = color === void 0 ? arg2 : resolution;
        resolution = resolution || new utils_1.Size(_1.Screen.ScaledWidth, _1.Screen.Height);
        if (color === void 0) {
          if (arg1 && arg1 instanceof utils_1.Size) {
            arg1 = new utils_1.Point(this.pos.X + arg1.width, this.pos.Y + arg1.height);
          } else {
            arg1 = this.pos;
          }
          arg2 = this.size;
        } else {
          if (!arg1) {
            arg1 = this.pos;
          } else {
            arg1 = arg1;
          }
          arg2 = arg2 || this.size;
        }
        color = color || this.color;
        const w = arg2.width / resolution.width;
        const h = arg2.height / resolution.height;
        const x = arg1.X / resolution.width + w * 0.5;
        const y = arg1.Y / resolution.height + h * 0.5;
        DrawRect(x, y, w, h, color.r, color.g, color.b, color.a);
      }
    };
    exports.Rectangle = Rectangle;
  }
});

// ../../node_modules/fivem-js/lib/ui/Container.js
var require_Container = __commonJS({
  "../../node_modules/fivem-js/lib/ui/Container.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Container = void 0;
    var utils_1 = require_utils();
    var _1 = require_ui();
    var Container = class {
      constructor(pos, size, color) {
        this.items = [];
        this.pos = pos;
        this.size = size;
        this.color = color;
      }
      addItem(items) {
        if (!Array.isArray(items)) {
          items = [items];
        }
        this.items.push(...items);
      }
      draw(offset, resolution) {
        resolution = resolution || new utils_1.Size(_1.Screen.ScaledWidth, _1.Screen.Height);
        offset = offset || new utils_1.Size();
        const w = this.size.width / resolution.width;
        const h = this.size.height / resolution.height;
        const x = (this.pos.X + offset.width) / resolution.width + w * 0.5;
        const y = (this.pos.Y + offset.height) / resolution.height + h * 0.5;
        DrawRect(x, y, w, h, this.color.r, this.color.g, this.color.b, this.color.a);
        for (const item of this.items) {
          item.draw(new utils_1.Size(this.pos.X + offset.width, this.pos.Y + offset.height), resolution);
        }
      }
    };
    exports.Container = Container;
  }
});

// ../../node_modules/fivem-js/lib/ui/Effects.js
var require_Effects = __commonJS({
  "../../node_modules/fivem-js/lib/ui/Effects.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Effects = void 0;
    var Effects = class {
      static start(effectName, duration = 0, looped = false) {
        StartScreenEffect(this.effectToString(effectName), duration, looped);
      }
      static stop(screenEffect) {
        if (typeof screenEffect === "undefined") {
          StopAllScreenEffects();
        } else {
          StopScreenEffect(this.effectToString(screenEffect));
        }
      }
      static isActive(screenEffect) {
        return !!GetScreenEffectIsActive(this.effectToString(screenEffect));
      }
      static effectToString(screenEffect) {
        const effect = Number(screenEffect);
        if (effect >= 0 && effect <= this.effects.length) {
          return this.effects[effect];
        }
        return "INVALID";
      }
    };
    exports.Effects = Effects;
    Effects.effects = [
      "SwitchHUDIn",
      "SwitchHUDOut",
      "FocusIn",
      "FocusOut",
      "MinigameEndNeutral",
      "MinigameEndTrevor",
      "MinigameEndFranklin",
      "MinigameEndMichael",
      "MinigameTransitionOut",
      "MinigameTransitionIn",
      "SwitchShortNeutralIn",
      "SwitchShortFranklinIn",
      "SwitchShortTrevorIn",
      "SwitchShortMichaelIn",
      "SwitchOpenMichaelIn",
      "SwitchOpenFranklinIn",
      "SwitchOpenTrevorIn",
      "SwitchHUDMichaelOut",
      "SwitchHUDFranklinOut",
      "SwitchHUDTrevorOut",
      "SwitchShortFranklinMid",
      "SwitchShortMichaelMid",
      "SwitchShortTrevorMid",
      "DeathFailOut",
      "CamPushInNeutral",
      "CamPushInFranklin",
      "CamPushInMichael",
      "CamPushInTrevor",
      "SwitchSceneFranklin",
      "SwitchSceneTrevor",
      "SwitchSceneMichael",
      "SwitchSceneNeutral",
      "MP_Celeb_Win",
      "MP_Celeb_Win_Out",
      "MP_Celeb_Lose",
      "MP_Celeb_Lose_Out",
      "DeathFailNeutralIn",
      "DeathFailMPDark",
      "DeathFailMPIn",
      "MP_Celeb_Preload_Fade",
      "PeyoteEndOut",
      "PeyoteEndIn",
      "PeyoteIn",
      "PeyoteOut",
      "MP_race_crash",
      "SuccessFranklin",
      "SuccessTrevor",
      "SuccessMichael",
      "DrugsMichaelAliensFightIn",
      "DrugsMichaelAliensFight",
      "DrugsMichaelAliensFightOut",
      "DrugsTrevorClownsFightIn",
      "DrugsTrevorClownsFight",
      "DrugsTrevorClownsFightOut",
      "HeistCelebPass",
      "HeistCelebPassBW",
      "HeistCelebEnd",
      "HeistCelebToast",
      "MenuMGHeistIn",
      "MenuMGTournamentIn",
      "MenuMGSelectionIn",
      "ChopVision",
      "DMT_flight_intro",
      "DMT_flight",
      "DrugsDrivingIn",
      "DrugsDrivingOut",
      "SwitchOpenNeutralFIB5",
      "HeistLocate",
      "MP_job_load",
      "RaceTurbo",
      "MP_intro_logo",
      "HeistTripSkipFade",
      "MenuMGHeistOut",
      "MP_corona_switch",
      "MenuMGSelectionTint",
      "SuccessNeutral",
      "ExplosionJosh3",
      "SniperOverlay",
      "RampageOut",
      "Rampage",
      "Dont_tazeme_bro"
    ];
  }
});

// ../../node_modules/fivem-js/lib/ui/Fading.js
var require_Fading = __commonJS({
  "../../node_modules/fivem-js/lib/ui/Fading.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Fading = void 0;
    var Fading = class {
      static get IsFadedIn() {
        return !!IsScreenFadedIn();
      }
      static get IsFadedOut() {
        return !!IsScreenFadedOut();
      }
      static get IsFadingIn() {
        return !!IsScreenFadingIn();
      }
      static get IsFadingOut() {
        return !!IsScreenFadingOut();
      }
      static fadeIn(duration) {
        return new Promise((resolve) => {
          DoScreenFadeIn(duration);
          const interval = setInterval(() => {
            if (this.IsFadedIn) {
              clearInterval(interval);
              resolve();
            }
          }, 0);
        });
      }
      static fadeOut(duration) {
        return new Promise((resolve) => {
          DoScreenFadeOut(duration);
          const interval = setInterval(() => {
            if (this.IsFadedOut) {
              clearInterval(interval);
              resolve();
            }
          }, 0);
        });
      }
    };
    exports.Fading = Fading;
  }
});

// ../../node_modules/fivem-js/lib/ui/Hud.js
var require_Hud = __commonJS({
  "../../node_modules/fivem-js/lib/ui/Hud.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Hud = void 0;
    var enums_1 = require_enums();
    var Hud = class {
      static isComponentActive(component) {
        return !!IsHudComponentActive(Number(component));
      }
      static showComponentThisFrame(component) {
        ShowHudComponentThisFrame(Number(component));
      }
      static hideComponentThisFrame(component) {
        HideHudComponentThisFrame(Number(component));
      }
      static showCursorThisFrame() {
        ShowCursorThisFrame();
      }
      static set CursorPosition(position) {
        SetCursorLocation(position.X, position.Y);
      }
      static get CursorSprite() {
        return enums_1.CursorSprite.DownArrow;
      }
      static set CursorSprite(sprite) {
        SetCursorSprite(Number(sprite));
      }
      static get IsVisible() {
        return !(IsHudHidden() || !IsHudPreferenceSwitchedOn());
      }
      static set IsVisible(toggle) {
        DisplayHud(toggle);
      }
      static get IsRadarVisible() {
        return !(IsRadarHidden() || IsRadarPreferenceSwitchedOn());
      }
      static set IsRadarVisible(toggle) {
        DisplayRadar(toggle);
      }
      static set RadarZoom(zoomLevel) {
        SetRadarZoom(zoomLevel);
      }
    };
    exports.Hud = Hud;
  }
});

// ../../node_modules/fivem-js/lib/ui/LoadingPrompt.js
var require_LoadingPrompt = __commonJS({
  "../../node_modules/fivem-js/lib/ui/LoadingPrompt.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LoadingPrompt = void 0;
    var enums_1 = require_enums();
    var LoadingPrompt = class {
      static show(loadingText = null, spinnerType = enums_1.LoadingSpinnerType.RegularClockwise) {
        if (this.IsActive) {
          this.hide();
        }
        if (loadingText === null) {
          BeginTextCommandBusyString(null);
        } else {
          BeginTextCommandBusyString("STRING");
          AddTextComponentSubstringPlayerName(loadingText);
        }
        EndTextCommandBusyString(Number(spinnerType));
      }
      static hide() {
        if (this.IsActive) {
          RemoveLoadingPrompt();
        }
      }
      static get IsActive() {
        return !!IsLoadingPromptBeingDisplayed();
      }
    };
    exports.LoadingPrompt = LoadingPrompt;
  }
});

// ../../node_modules/fivem-js/lib/ui/Notification.js
var require_Notification = __commonJS({
  "../../node_modules/fivem-js/lib/ui/Notification.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Notification = void 0;
    var Notification = class {
      constructor(handle) {
        this.handle = handle;
      }
      hide() {
        RemoveNotification(this.handle);
      }
    };
    exports.Notification = Notification;
  }
});

// ../../node_modules/fivem-js/lib/ui/Scaleform.js
var require_Scaleform = __commonJS({
  "../../node_modules/fivem-js/lib/ui/Scaleform.js"(exports) {
    "use strict";
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Scaleform = void 0;
    var Scaleform = class {
      constructor(name) {
        this.name = name;
        this.handle = RequestScaleformMovie(this.name);
      }
      static render2DMasked(scaleform1, scaleform2) {
        return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
          if (scaleform1.IsLoaded && scaleform2.IsLoaded) {
            DrawScaleformMovieFullscreenMasked(scaleform1.Handle, scaleform2.Handle, 255, 255, 255, 255);
          } else {
            yield scaleform1.load();
            yield scaleform2.load();
          }
          resolve();
        }));
      }
      get Handle() {
        return this.handle;
      }
      get IsValid() {
        return this.handle !== 0;
      }
      get IsLoaded() {
        if (!this.loaded) {
          this.loaded = !!HasScaleformMovieLoaded(this.handle);
        }
        return this.loaded;
      }
      dispose() {
        if (this.IsLoaded) {
          SetScaleformMovieAsNoLongerNeeded(this.handle);
          this.loaded = false;
        }
      }
      callFunction(name, ...args) {
        BeginScaleformMovieMethod(this.handle, name);
        args.forEach((arg) => {
          switch (typeof arg) {
            case "number":
              PushScaleformMovieFunctionParameterInt(arg);
              break;
            case "string":
              PushScaleformMovieFunctionParameterString(arg);
              break;
            case "boolean":
              PushScaleformMovieFunctionParameterBool(arg);
              break;
            default:
              throw new Error(`Unknown argument type [${typeof arg}] passed to scaleform with handle [${this.handle}]`);
          }
        });
        EndScaleformMovieMethod();
      }
      setDuration(duration) {
        if (duration <= 0) {
          return;
        }
        const start = GetGameTimer();
        const interval = setInterval(() => __awaiter(this, void 0, void 0, function* () {
          if (GetGameTimer() - start < duration) {
            yield this.render2D();
          } else {
            clearInterval(interval);
          }
        }), 0);
      }
      render2D() {
        return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
          if (this.IsLoaded) {
            DrawScaleformMovieFullscreen(this.handle, 255, 255, 255, 255, 0);
          } else {
            yield this.load();
          }
          resolve();
        }));
      }
      render2DScreenSpace(location, size) {
        return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
          if (this.IsLoaded) {
            const x = location.x;
            const y = location.y;
            const width = size.x;
            const height = size.y;
            DrawScaleformMovie(this.handle, x + width / 2, y + height / 2, width, height, 255, 255, 255, 255, 0);
          } else {
            yield this.load();
          }
          resolve();
        }));
      }
      render3D(position, rotation, scale) {
        return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
          if (this.IsLoaded) {
            DrawScaleformMovie_3dNonAdditive(this.handle, position.x, position.y, position.z, rotation.x, rotation.y, rotation.z, 2, 2, 1, scale.x, scale.y, scale.z, 2);
          } else {
            yield this.load();
          }
          resolve();
        }));
      }
      render3DAdditive(position, rotation, scale) {
        return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
          if (this.IsLoaded) {
            DrawScaleformMovie_3d(this.handle, position.x, position.y, position.z, rotation.x, rotation.y, rotation.z, 2, 2, 1, scale.x, scale.y, scale.z, 2);
          } else {
            yield this.load();
          }
          resolve();
        }));
      }
      load() {
        return new Promise((resolve) => {
          if (this.IsLoaded) {
            resolve(true);
          } else {
            const start = GetGameTimer();
            const interval = setInterval(() => {
              if (this.IsLoaded) {
                clearInterval(interval);
                resolve(true);
              } else if (GetGameTimer() - start > 5e3) {
                clearInterval(interval);
                console.log(`^1[fivem-js] Could not load scaleform ${this.name}!^7`);
                resolve(false);
              }
            }, 0);
          }
        });
      }
    };
    exports.Scaleform = Scaleform;
  }
});

// ../../node_modules/fivem-js/lib/ui/Screen.js
var require_Screen = __commonJS({
  "../../node_modules/fivem-js/lib/ui/Screen.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Screen = void 0;
    var Audio_1 = require_Audio();
    var enums_1 = require_enums();
    var utils_1 = require_utils();
    var _1 = require_ui();
    var Screen = class {
      static get Resolution() {
        const [width, height] = GetScreenActiveResolution();
        return new utils_1.Size(width, height);
      }
      static get ScaledResolution() {
        const height = this.Height;
        return new utils_1.Size(height * this.AspectRatio, height);
      }
      static get Width() {
        return this.Resolution.width;
      }
      static get ScaledWidth() {
        return this.Height * this.AspectRatio;
      }
      static get Height() {
        return this.Resolution.height;
      }
      static get AspectRatio() {
        return GetAspectRatio(false);
      }
      static showSubtitle(message, duration = 2500) {
        const strings = utils_1.stringToArray(message);
        BeginTextCommandPrint("CELL_EMAIL_BCON");
        strings.forEach((element) => {
          AddTextComponentSubstringPlayerName(element);
        });
        EndTextCommandPrint(duration, true);
      }
      static displayHelpTextThisFrame(message) {
        const strings = utils_1.stringToArray(message);
        BeginTextCommandDisplayHelp("CELL_EMAIL_BCON");
        strings.forEach((element) => {
          AddTextComponentSubstringPlayerName(element);
        });
        EndTextCommandDisplayHelp(0, false, false, -1);
      }
      static showNotification(message, blinking = false) {
        const strings = utils_1.stringToArray(message);
        SetNotificationTextEntry("CELL_EMAIL_BCON");
        strings.forEach((element) => {
          AddTextComponentSubstringPlayerName(element);
        });
        return new _1.Notification(DrawNotification(blinking, true));
      }
      static showAdvancedNotification(message, title, subtitle, iconSet, icon, bgColor = enums_1.HudColor.NONE, flashColor = utils_1.Color.empty, blinking = false, type = enums_1.NotificationType.Default, showInBrief = true, sound = true) {
        const strings = utils_1.stringToArray(message);
        SetNotificationTextEntry("CELL_EMAIL_BCON");
        strings.forEach((element) => {
          AddTextComponentSubstringPlayerName(element);
        });
        if (bgColor !== enums_1.HudColor.NONE) {
          SetNotificationBackgroundColor(Number(bgColor));
        }
        if (flashColor !== utils_1.Color.empty && blinking) {
          SetNotificationFlashColor(flashColor.r, flashColor.g, flashColor.b, flashColor.a);
        }
        if (sound) {
          Audio_1.Audio.playSoundFrontEnd("DELETE", "HUD_DEATHMATCH_SOUNDSET");
        }
        SetNotificationMessage(iconSet, icon, true, Number(type), title, subtitle);
        return new _1.Notification(DrawNotification(blinking, showInBrief));
      }
      static worldToScreen(position, scaleWidth = false) {
        const coords = GetScreenCoordFromWorldCoord(position.x, position.y, position.z);
        return new utils_1.PointF(coords[0] * (scaleWidth ? this.ScaledWidth : this.Width), coords[1] * this.Height, coords[2]);
      }
    };
    exports.Screen = Screen;
  }
});

// ../../node_modules/fivem-js/lib/ui/Sprite.js
var require_Sprite = __commonJS({
  "../../node_modules/fivem-js/lib/ui/Sprite.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Sprite = void 0;
    var utils_1 = require_utils();
    var _1 = require_ui();
    var Sprite = class {
      constructor(textureDict, textureName, pos, size, heading = 0, color = utils_1.Color.white) {
        this._textureDict = textureDict;
        this.textureName = textureName;
        this.pos = pos || new utils_1.Point();
        this.size = size || new utils_1.Size();
        this.heading = heading || 0;
        this.color = color || utils_1.Color.white;
        this.visible = true;
      }
      loadTextureDictionary() {
        RequestStreamedTextureDict(this._textureDict, true);
        const interval = setInterval(() => {
          if (this.IsTextureDictionaryLoaded) {
            clearInterval(interval);
          }
        }, 0);
      }
      set TextureDict(v) {
        this._textureDict = v;
        if (!this.IsTextureDictionaryLoaded) {
          this.loadTextureDictionary();
        }
      }
      get TextureDict() {
        return this._textureDict;
      }
      get IsTextureDictionaryLoaded() {
        return !!HasStreamedTextureDictLoaded(this._textureDict);
      }
      draw(arg1, textureName, pos, size, heading, color, loadTexture = true, resolution) {
        const textureDictionary = arg1 && typeof arg1 === "string" ? arg1 : this.TextureDict;
        textureName = textureName || this.textureName;
        pos = pos || this.pos;
        size = size || this.size;
        heading = heading || this.heading;
        color = color || this.color;
        if (loadTexture) {
          if (!HasStreamedTextureDictLoaded(textureDictionary)) {
            RequestStreamedTextureDict(textureDictionary, false);
          }
        }
        resolution = arg1 instanceof utils_1.Size ? arg1 : resolution;
        resolution = resolution || new utils_1.Size(_1.Screen.ScaledWidth, _1.Screen.Height);
        const w = size.width / resolution.width;
        const h = size.height / resolution.height;
        const x = pos.X / resolution.width + w * 0.5;
        const y = pos.Y / resolution.height + h * 0.5;
        DrawSprite(textureDictionary, textureName, x, y, w, h, heading, color.r, color.g, color.b, color.a);
      }
    };
    exports.Sprite = Sprite;
  }
});

// ../../node_modules/fivem-js/lib/ui/Text.js
var require_Text = __commonJS({
  "../../node_modules/fivem-js/lib/ui/Text.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Text = void 0;
    var enums_1 = require_enums();
    var utils_1 = require_utils();
    var _1 = require_ui();
    var Text = class {
      constructor(caption, pos, scale = 1, color = utils_1.Color.white, font = enums_1.Font.ChaletLondon, alignment = enums_1.Alignment.Left, dropShadow = false, outline = false, wordWrap) {
        this.caption = caption;
        this.pos = pos;
        this.scale = scale;
        this.color = color;
        this.font = font;
        this.alignment = alignment;
        this.dropShadow = dropShadow;
        this.outline = outline;
        this.wordWrap = wordWrap;
      }
      static draw(caption, pos, scale = 1, color = utils_1.Color.white, font = enums_1.Font.ChaletLondon, alignment = enums_1.Alignment.Left, dropShadow = false, outline = false, wordWrap, resolution) {
        resolution = resolution || new utils_1.Size(_1.Screen.ScaledWidth, _1.Screen.Height);
        const x = pos.X / resolution.width;
        const y = pos.Y / resolution.height;
        SetTextFont(Number(font));
        SetTextScale(1, scale);
        SetTextColour(color.r, color.g, color.b, color.a);
        if (dropShadow) {
          SetTextDropshadow(2, 0, 0, 0, 0);
        }
        if (outline) {
          SetTextOutline();
        }
        switch (alignment) {
          case enums_1.Alignment.Centered:
            SetTextCentre(true);
            break;
          case enums_1.Alignment.Right:
            SetTextRightJustify(true);
            if (!wordWrap) {
              SetTextWrap(0, x);
            }
            break;
        }
        if (wordWrap) {
          SetTextWrap(x, (pos.X + wordWrap.width) / resolution.width);
        }
        SetTextEntry("STRING");
        Text.addLongString(caption);
        DrawText(x, y);
      }
      static addLongString(str) {
        const strLen = 99;
        for (let i = 0; i < str.length; i += strLen) {
          const substr = str.substr(i, Math.min(strLen, str.length - i));
          AddTextComponentSubstringPlayerName(substr);
        }
      }
      draw(arg1, arg2, scale, color, font, alignment, dropShadow, outline, wordWrap, resolution) {
        resolution = arg2 instanceof utils_1.Size ? arg2 : resolution;
        if (scale === void 0) {
          if (arg1 && arg1 instanceof utils_1.Size) {
            arg2 = new utils_1.Point(this.pos.X + arg1.width, this.pos.Y + arg1.height);
          } else {
            arg2 = this.pos;
          }
          arg1 = this.caption;
          scale = this.scale;
          color = this.color;
          font = this.font;
          alignment = this.alignment;
          dropShadow = this.dropShadow;
          outline = this.outline;
          wordWrap = this.wordWrap;
        } else {
          arg1 = arg1 || this.caption;
          if (!arg2) {
            arg2 = this.pos;
          } else {
            arg2 = arg2;
          }
          scale = scale !== void 0 && scale !== null ? scale : this.scale;
          color = color || this.color;
          font = font !== void 0 && font !== null ? font : this.font;
          alignment = alignment !== void 0 && alignment !== null ? alignment : this.alignment;
          dropShadow = typeof dropShadow === "boolean" ? dropShadow : dropShadow;
          outline = typeof outline === "boolean" ? outline : outline;
          wordWrap = wordWrap || this.wordWrap;
        }
        Text.draw(arg1, arg2, scale, color, font, alignment, dropShadow, outline, wordWrap, resolution);
      }
    };
    exports.Text = Text;
  }
});

// ../../node_modules/fivem-js/lib/ui/Timerbar.js
var require_Timerbar = __commonJS({
  "../../node_modules/fivem-js/lib/ui/Timerbar.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Timerbar = void 0;
    var enums_1 = require_enums();
    var utils_1 = require_utils();
    var Hud_1 = require_Hud();
    var LoadingPrompt_1 = require_LoadingPrompt();
    var Screen_1 = require_Screen();
    var Sprite_1 = require_Sprite();
    var activeTimerBars = [];
    var drawText = (text, position, options) => {
      options = Object.assign({
        align: 1,
        color: [255, 255, 255, 255],
        font: 4,
        outline: true,
        scale: 0.3,
        shadow: true
      }, options);
      const font = options.font;
      const scale = options.scale;
      const outline = options.outline;
      const shadow = options.shadow;
      const color = options.color;
      const align = options.align;
      SetTextEntry("CELL_EMAIL_BCON");
      for (let i = 0; i < text.length; i += 99) {
        const subStringText = text.substr(i, Math.min(99, text.length - i));
        AddTextComponentSubstringPlayerName(subStringText);
      }
      SetTextFont(font);
      SetTextScale(scale, scale);
      SetTextColour(color[0], color[1], color[2], color[3]);
      if (shadow) {
        SetTextDropShadow();
      }
      if (outline) {
        SetTextOutline();
      }
      switch (align) {
        case 1: {
          SetTextCentre(true);
          break;
        }
        case 2: {
          SetTextRightJustify(true);
          SetTextWrap(0, position[0] || 0);
          break;
        }
      }
      DrawText(position[0] || 0, position[1] || 0);
    };
    var Timerbar = class {
      constructor(title, useProgressBar = false) {
        this.sprite = null;
        this.title = "";
        this.text = "";
        this.useProgressBar = false;
        this.usePlayerStyle = false;
        this.isVisible = false;
        this.pbarValue = 0;
        this.textColor = [240, 240, 240, 255];
        this.pbarBgColor = [155, 155, 155, 255];
        this.pbarFgColor = [255, 255, 255, 255];
        this.title = title;
        this.useProgressBar = useProgressBar;
        this.text = "";
        this.pbarValue = 0;
        this.textColor = [240, 240, 240, 255];
        this.pbarBgColor = [155, 155, 155, 255];
        this.pbarFgColor = [255, 255, 255, 255];
        this.usePlayerStyle = false;
        const safeZone = GetSafeZoneSize();
        const safeZoneX = (1 - safeZone) * 0.5;
        const safeZoneY = (1 - safeZone) * 0.5;
        this.sprite = new Sprite_1.Sprite("timerbars", "all_black_bg", new utils_1.Point(Screen_1.Screen.ScaledWidth * 0.918 - safeZoneX, Screen_1.Screen.Height * 0.984 - safeZoneY), new utils_1.Size(Screen_1.Screen.ScaledWidth * 0.165, Screen_1.Screen.Height * 0.035), 0, new utils_1.Color(160, 255, 255, 255));
        if (!this.sprite.IsTextureDictionaryLoaded) {
          this.sprite.loadTextureDictionary();
        }
        this.isVisible = true;
        activeTimerBars.push(this);
      }
      get Title() {
        return this.title;
      }
      set Title(value) {
        this.title = value;
      }
      get Text() {
        return this.text;
      }
      set Text(value) {
        this.text = value;
      }
      get UseProgressBar() {
        return this.useProgressBar;
      }
      get Progress() {
        return this.pbarValue;
      }
      set Progress(value) {
        this.pbarValue = value <= 0 ? 0 : value >= 1 ? 1 : value;
      }
      get Visible() {
        return this.isVisible;
      }
      set Visible(value) {
        const idx = activeTimerBars.indexOf(this);
        if (value) {
          if (idx !== -1) {
            return;
          }
          activeTimerBars.push(this);
        } else {
          if (idx === -1) {
            return;
          }
          activeTimerBars.splice(idx, 1);
        }
        this.isVisible = value;
      }
      get TextColor() {
        return this.textColor;
      }
      set TextColor(value) {
        if (Array.isArray(value)) {
          this.textColor = value;
        } else {
          const result = GetHudColour(value);
          this.textColor = [result[0], result[1], result[2], result[3]];
        }
      }
      get ProgressbarBgColor() {
        return this.pbarBgColor;
      }
      set ProgressbarBgColor(value) {
        if (Array.isArray(value)) {
          this.pbarBgColor = value;
        } else {
          const result = GetHudColour(value);
          this.pbarBgColor = [result[0], result[1], result[2], result[3]];
        }
      }
      get ProgressbarFgColor() {
        return this.pbarFgColor;
      }
      set ProgressbarFgColor(value) {
        if (Array.isArray(value)) {
          this.pbarFgColor = value;
        } else {
          const result = GetHudColour(value);
          this.pbarFgColor = [result[0], result[1], result[2], result[3]];
        }
      }
      set PlayerStyle(value) {
        this.usePlayerStyle = value;
      }
      get PlayerStyle() {
        return this.usePlayerStyle;
      }
      get Sprite() {
        return this.sprite;
      }
    };
    exports.Timerbar = Timerbar;
    setTick(() => {
      if (activeTimerBars.length <= 0) {
        return;
      }
      const safeZone = GetSafeZoneSize();
      const safeZoneX = (1 - safeZone) * 0.5;
      const safeZoneY = (1 - safeZone) * 0.5;
      Hud_1.Hud.hideComponentThisFrame(enums_1.HudComponent.AreaName);
      Hud_1.Hud.hideComponentThisFrame(enums_1.HudComponent.StreetName);
      let loadingPromptOffset = 0;
      if (LoadingPrompt_1.LoadingPrompt.IsActive) {
        loadingPromptOffset = 0.035 + 0.035 * 0.038 * 2;
      }
      activeTimerBars.forEach((timerbar) => {
        const drawY = 0.984 - loadingPromptOffset - safeZoneY - activeTimerBars.indexOf(timerbar) * 0.038;
        DrawSprite("timerbars", "all_black_bg", 0.918 - safeZoneX, drawY, 0.165, 0.035, 0, 255, 255, 255, 160);
        drawText(timerbar.Title, [0.918 - safeZoneX + 0.012, drawY - 9e-3 - (timerbar.PlayerStyle ? 625e-5 : 0)], {
          align: 2,
          color: timerbar.TextColor,
          font: timerbar.PlayerStyle ? 4 : 0,
          outline: false,
          scale: timerbar.PlayerStyle ? 0.465 : 0.3,
          shadow: timerbar.PlayerStyle
        });
        if (timerbar.UseProgressBar) {
          const pbarX = 0.918 - safeZoneX + 0.047;
          const pbarY = drawY + 15e-4;
          const width = 0.0616 * timerbar.Progress;
          DrawRect(pbarX, pbarY, 0.0616, 0.0105, timerbar.ProgressbarBgColor[0], timerbar.ProgressbarBgColor[1], timerbar.ProgressbarBgColor[2], timerbar.ProgressbarBgColor[3]);
          DrawRect(pbarX - 0.0616 / 2 + width / 2, pbarY, width, 0.0105, timerbar.ProgressbarFgColor[0], timerbar.ProgressbarFgColor[1], timerbar.ProgressbarFgColor[2], timerbar.ProgressbarFgColor[3]);
        } else {
          drawText(timerbar.Text, [0.918 - safeZoneX + 0.0785, drawY + -0.0165], {
            align: 2,
            color: timerbar.TextColor,
            font: 0,
            outline: false,
            scale: 0.425,
            shadow: false
          });
        }
      });
    });
  }
});

// ../../node_modules/fivem-js/lib/ui/menu/items/panels/AbstractUIMenuPanel.js
var require_AbstractUIMenuPanel = __commonJS({
  "../../node_modules/fivem-js/lib/ui/menu/items/panels/AbstractUIMenuPanel.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AbstractUIMenuPanel = void 0;
    var utils_1 = require_utils();
    var __1 = require_ui();
    var __2 = require_menu();
    var AbstractUIMenuPanel = class {
      constructor() {
        this.id = utils_1.uuidv4();
        this.enabled = true;
      }
      get ParentMenu() {
        return this.parentItem.parent;
      }
      get ParentItem() {
        return this.parentItem;
      }
      set ParentItem(value) {
        this.parentItem = value;
      }
      get Enabled() {
        return this.enabled;
      }
      set Enabled(value) {
        this.enabled = value;
      }
      get Height() {
        return this.background.size.height;
      }
      setVerticalPosition(y) {
        this.background.pos.Y = y;
      }
      draw() {
        this.background.size.width = 431 + this.ParentMenu.WidthOffset;
        this.background.pos.X = this.parentItem.offset.X;
        if (this.background instanceof __1.Sprite) {
          this.background.draw(__2.Menu.screenResolution);
        } else {
          this.background.draw(void 0, __2.Menu.screenResolution);
        }
      }
    };
    exports.AbstractUIMenuPanel = AbstractUIMenuPanel;
  }
});

// ../../node_modules/fivem-js/lib/ui/menu/items/panels/UIMenuGridPanel.js
var require_UIMenuGridPanel = __commonJS({
  "../../node_modules/fivem-js/lib/ui/menu/items/panels/UIMenuGridPanel.js"(exports) {
    "use strict";
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.UIMenuGridPanel = void 0;
    var utils_1 = require_utils();
    var _1 = require_panels();
    var __1 = require_ui();
    var enums_1 = require_enums();
    var Game_1 = require_Game();
    var UIMenuGridPanel = class extends _1.AbstractUIMenuPanel {
      constructor(topText, leftText, rightText, bottomText, circlePosition) {
        super();
        this._isCircleLocked = false;
        this._pressed = false;
        this._lockXAxis = false;
        this._lockYAxis = false;
        this._setCirclePosition = circlePosition || new utils_1.Point(0.5, 0.5);
        this.background = new __1.Sprite("commonmenu", "gradient_bgd", new utils_1.Point(), new utils_1.Size(431, 275));
        this._grid = new __1.Sprite("pause_menu_pages_char_mom_dad", "nose_grid", new utils_1.Point(), new utils_1.Size(200, 200));
        this._circle = new __1.Sprite("mpinventory", "in_world_circle", new utils_1.Point(), new utils_1.Size(20, 20));
        this.TopText = topText;
        this.LeftText = leftText;
        this.RightText = rightText;
        this.BottomText = bottomText;
      }
      get TopText() {
        return this._topText ? this._topText.caption : null;
      }
      set TopText(value) {
        this._setText("_topText", value);
      }
      get LeftText() {
        return this._leftText ? this._leftText.caption : null;
      }
      set LeftText(value) {
        this._setText("_leftText", value);
      }
      get RightText() {
        return this._rightText ? this._rightText.caption : null;
      }
      set RightText(value) {
        this._setText("_rightText", value);
      }
      get BottomText() {
        return this._bottomText ? this._bottomText.caption : null;
      }
      set BottomText(value) {
        this._setText("_bottomText", value);
      }
      get CirclePosition() {
        return new utils_1.Point(Math.round((this._circle.pos.X - (this._grid.pos.X + 20) + this._circle.size.width / 2) / (this._grid.size.width - 40) * 100) / 100, Math.round((this._circle.pos.Y - (this._grid.pos.Y + 20) + this._circle.size.height / 2) / (this._grid.size.height - 40) * 100) / 100);
      }
      set CirclePosition(position) {
        this.CirclePositionX = position.X;
        this.CirclePositionY = position.Y;
      }
      set CirclePositionX(x) {
        if (this._isCircleLocked && this._lockXAxis) {
          return;
        }
        x = x >= 0 && x <= 1 ? x : 0;
        this._setCirclePosition.X = x;
        this._circle.pos.X = this._grid.pos.X + 20 + (this._grid.size.width - 40) * x - this._circle.size.width / 2;
      }
      set CirclePositionY(y) {
        if (this._isCircleLocked && this._lockYAxis) {
          return;
        }
        y = y >= 0 && y <= 1 ? y : 0;
        this._setCirclePosition.Y = y;
        this._circle.pos.Y = this._grid.pos.Y + 20 + (this._grid.size.height - 40) * y - this._circle.size.height / 2;
      }
      get LockXAxis() {
        return this._lockXAxis;
      }
      set LockXAxis(value) {
        this._lockXAxis = value;
        if (value) {
          if (this._lockYAxis) {
            this._lockYAxis = false;
          }
          this.CirclePositionX = 0.5;
        }
      }
      get LockYAxis() {
        return this._lockYAxis;
      }
      set LockYAxis(value) {
        this._lockYAxis = value;
        if (value) {
          if (this._lockXAxis) {
            this._lockXAxis = false;
          }
          this.CirclePositionY = 0.5;
        }
      }
      updateParentItem() {
        const last = this._lastCirclePosition;
        const current = this.CirclePosition;
        if (!last || last.X !== current.X || last.Y !== current.Y) {
          this._lastCirclePosition = current;
          this.ParentMenu.panelActivated.emit(this.parentItem, this, current);
          this.parentItem.panelActivated.emit(this, current);
        }
      }
      setVerticalPosition(y) {
        super.setVerticalPosition(y);
        this._grid.pos.Y = y + 37.5;
        if (this._topText) {
          this._topText.pos.Y = y + 5;
        }
        if (this._leftText) {
          this._leftText.pos.Y = y + 120;
        }
        if (this._rightText) {
          this._rightText.pos.Y = y + 120;
        }
        if (this._bottomText) {
          this._bottomText.pos.Y = y + 240;
        }
      }
      draw() {
        if (this.enabled) {
          super.draw();
          const x = this.parentItem.offset.X + this.ParentMenu.WidthOffset / 2;
          this._grid.pos.X = x + 115.5;
          if (!this._isCircleLocked) {
            this.CirclePosition = this._setCirclePosition;
            this._isCircleLocked = true;
          }
          this._grid.draw(__1.Menu.screenResolution);
          this._circle.draw(__1.Menu.screenResolution);
          if (this._topText) {
            this._topText.pos.X = x + 215.5;
            this._topText.draw(void 0, __1.Menu.screenResolution);
          }
          if (this._leftText) {
            this._leftText.pos.X = x + 57.75;
            this._leftText.draw(void 0, __1.Menu.screenResolution);
          }
          if (this._rightText) {
            this._rightText.pos.X = x + 373.25;
            this._rightText.draw(void 0, __1.Menu.screenResolution);
          }
          if (this._bottomText) {
            this._bottomText.pos.X = x + 215.5;
            this._bottomText.draw(void 0, __1.Menu.screenResolution);
          }
          this._processControls();
        }
      }
      _setText(name, value) {
        if (value && value.trim() !== "") {
          if (!this[name]) {
            this[name] = new __1.Text(value, new utils_1.Point(), 0.35, utils_1.Color.white, enums_1.Font.ChaletLondon, enums_1.Alignment.Centered);
          } else {
            this[name].caption = value;
          }
        } else if (this[name]) {
          delete this[name];
        }
      }
      _processControls() {
        if (!this._pressed && Game_1.Game.isDisabledControlJustPressed(0, enums_1.Control.Attack) && this.ParentMenu.isMouseInBounds(this._grid.pos, this._grid.size)) {
          this._pressed = true;
          (() => __awaiter(this, void 0, void 0, function* () {
            const drawOffset = this.ParentMenu.DrawOffset;
            while (Game_1.Game.isDisabledControlPressed(0, enums_1.Control.Attack)) {
              yield new Promise((resolve) => setTimeout(resolve, 0));
              let cX = (GetControlNormal(0, enums_1.Control.CursorX) - drawOffset.X) * __1.Menu.screenWidth;
              let cY = (GetControlNormal(0, enums_1.Control.CursorY) - drawOffset.Y) * __1.Menu.screenHeight;
              cX -= this._circle.size.width / 2;
              cY -= this._circle.size.height / 2;
              this._circle.pos.X = cX > this._grid.pos.X + 10 + this._grid.size.width - (this._lockXAxis ? 120 : 40) ? this._grid.pos.X + 10 + this._grid.size.width - (this._lockXAxis ? 120 : 40) : cX < this._grid.pos.X + (this._lockXAxis ? 100 : 20) - this._circle.size.width / 2 ? this._grid.pos.X + (this._lockXAxis ? 100 : 20) - this._circle.size.width / 2 : cX;
              this._circle.pos.Y = cY > this._grid.pos.Y + 10 + this._grid.size.height - (this._lockYAxis ? 120 : 40) ? this._grid.pos.Y + 10 + this._grid.size.height - (this._lockYAxis ? 120 : 40) : cY < this._grid.pos.Y + (this._lockYAxis ? 100 : 20) - this._circle.size.height / 2 ? this._grid.pos.Y + (this._lockYAxis ? 100 : 20) - this._circle.size.height / 2 : cY;
            }
            this.updateParentItem();
            this._pressed = false;
          }))();
          const interval = setInterval(() => __awaiter(this, void 0, void 0, function* () {
            if (Game_1.Game.isDisabledControlPressed(0, enums_1.Control.Attack)) {
              this.updateParentItem();
            } else {
              clearInterval(interval);
            }
          }), 75);
        }
      }
    };
    exports.UIMenuGridPanel = UIMenuGridPanel;
  }
});

// ../../node_modules/fivem-js/lib/ui/menu/items/panels/UIMenuColorPanel.js
var require_UIMenuColorPanel = __commonJS({
  "../../node_modules/fivem-js/lib/ui/menu/items/panels/UIMenuColorPanel.js"(exports) {
    "use strict";
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.UIMenuColorPanel = void 0;
    var utils_1 = require_utils();
    var _1 = require_panels();
    var __1 = require_ui();
    var enums_1 = require_enums();
    var __2 = require_lib();
    var UIMenuColorPanel = class extends _1.AbstractUIMenuPanel {
      constructor(title, colors) {
        super();
        this._colors = [];
        this._bar = [];
        this._min = 0;
        this._max = 8;
        this._total = 9;
        this._index = 0;
        this.background = new __1.Sprite("commonmenu", "gradient_bgd", new utils_1.Point(), new utils_1.Size(431, 112));
        this._leftArrow = new __1.Sprite("commonmenu", "arrowleft", new utils_1.Point(), new utils_1.Size(30, 30));
        this._rightArrow = new __1.Sprite("commonmenu", "arrowright", new utils_1.Point(), new utils_1.Size(30, 30));
        this._selectedRectangle = new __1.Rectangle(new utils_1.Point(), new utils_1.Size(44.5, 8), utils_1.Color.white);
        this._text = new __1.Text("", new utils_1.Point(), 0.35, utils_1.Color.white, enums_1.Font.ChaletLondon, enums_1.Alignment.Centered);
        this.Title = title;
        this.Colors = colors;
      }
      get Title() {
        return this._title;
      }
      set Title(value) {
        this._title = value ? value.trim() : "";
        this._updateText();
      }
      get Colors() {
        return this._colors;
      }
      set Colors(value) {
        if (!value) {
          value = [];
        }
        this._colors = value;
        this._bar = [];
        const colorRectangles = value.slice(0, this._total).map((color) => {
          return new __1.Rectangle(new utils_1.Point(0, 0), new utils_1.Size(44.5, 44.5), color);
        });
        this._bar.push(...colorRectangles);
        this._refreshIndex();
        this._updateSelection(true);
      }
      get Color() {
        return this._colors[this.Index];
      }
      set Color(value) {
        const index = this._colors.findIndex((c) => {
          return c.a === value.a && c.r === value.r && c.g === value.g && c.b === value.b;
        });
        if (index !== -1) {
          this.Index = index;
        }
      }
      get Index() {
        return this._index % this._colors.length;
      }
      set Index(value) {
        value = 1e6 - 1e6 % this._colors.length + value;
        if (this.Index === value % this._colors.length) {
          return;
        }
        this._index = value;
        const currentSelection = this.Index;
        if (currentSelection > this._max) {
          this._min = currentSelection - this._total + 1;
          this._max = currentSelection;
        } else if (currentSelection < this._min) {
          this._min = currentSelection;
          this._max = currentSelection + this._total - 1;
        }
        this._updateSelection();
      }
      updateParentItem() {
        const last = this._lastColor;
        const current = this.Color;
        if (!last || last.a !== current.a || last.r !== current.r || last.g !== current.g || last.b !== current.b) {
          this._lastColor = current;
          this.ParentMenu.panelActivated.emit(this.parentItem, this, this.Index, current);
          this.parentItem.panelActivated.emit(this, this.Index, current);
        }
      }
      setVerticalPosition(y) {
        super.setVerticalPosition(y);
        this._selectedRectangle.pos.Y = y + 47;
        this._leftArrow.pos.Y = y + 15;
        this._rightArrow.pos.Y = y + 15;
        this._text.pos.Y = y + 15;
        this._bar.forEach((colorRect) => __awaiter(this, void 0, void 0, function* () {
          colorRect.pos.Y = y + 55;
        }));
      }
      draw() {
        if (this.enabled) {
          super.draw();
          const x = this.parentItem.offset.X + this.ParentMenu.WidthOffset / 2;
          this._selectedRectangle.pos.X = x + 15 + 44.5 * (this.Index - this._min);
          this._leftArrow.pos.X = x + 7.5;
          this._rightArrow.pos.X = x + 393.5;
          this._text.pos.X = x + 215.5;
          this._leftArrow.draw(__2.Menu.screenResolution);
          this._rightArrow.draw(__2.Menu.screenResolution);
          this._text.draw(void 0, __2.Menu.screenResolution);
          this._selectedRectangle.draw(void 0, __2.Menu.screenResolution);
          this._bar.forEach((colorRect, index) => __awaiter(this, void 0, void 0, function* () {
            colorRect.pos.X = x + 15 + 44.5 * index;
            colorRect.draw(void 0, __2.Menu.screenResolution);
          }));
          this._processControls();
        }
      }
      _refreshIndex() {
        if (!this._colors.length) {
          this._index = 1e3;
        } else {
          this._index = 1e3 - 1e3 % this._colors.length;
        }
        this._max = this._total - 1;
        this._min = 0;
      }
      _updateSelection(preventUpdate = false) {
        if (!preventUpdate) {
          this.updateParentItem();
        }
        this._bar.forEach((colorRect, index) => __awaiter(this, void 0, void 0, function* () {
          colorRect.color = this._colors[this._min + index];
        }));
        this._updateText();
      }
      _updateText() {
        this._text.caption = `${this._title} [${this.Index + 1 || 0} / ${this._colors.length}]`;
      }
      _goLeft() {
        if (this._colors.length > this._total) {
          if (this.Index <= this._min) {
            if (this.Index === 0) {
              this._min = this._colors.length - this._total;
              this._max = this._colors.length - 1;
              this._index = 1e3 - 1e3 % this._colors.length;
              this._index += this._colors.length - 1;
            } else {
              this._min--;
              this._max--;
              this._index--;
            }
          } else {
            this._index--;
          }
        } else {
          this._index--;
        }
        this._updateSelection();
      }
      _goRight() {
        if (this._colors.length > this._total) {
          if (this.Index >= this._max) {
            if (this.Index === this._colors.length - 1) {
              this._min = 0;
              this._max = this._total - 1;
              this._index = 1e3 - 1e3 % this._colors.length;
            } else {
              this._min++;
              this._max++;
              this._index++;
            }
          } else {
            this._index++;
          }
        } else {
          this._index++;
        }
        this._updateSelection();
      }
      _processControls() {
        if (__2.Game.isDisabledControlJustPressed(0, enums_1.Control.Attack)) {
          if (this.ParentMenu.isMouseInBounds(this._leftArrow.pos, this._leftArrow.size)) {
            this._goLeft();
          } else if (this.ParentMenu.isMouseInBounds(this._rightArrow.pos, this._rightArrow.size)) {
            this._goRight();
          }
          this._bar.forEach((colorRect, index) => __awaiter(this, void 0, void 0, function* () {
            if (this.ParentMenu.isMouseInBounds(colorRect.pos, colorRect.size)) {
              this.Index = this._min + index;
            }
          }));
        }
      }
    };
    exports.UIMenuColorPanel = UIMenuColorPanel;
  }
});

// ../../node_modules/fivem-js/lib/ui/menu/items/panels/UIMenuPercentagePanel.js
var require_UIMenuPercentagePanel = __commonJS({
  "../../node_modules/fivem-js/lib/ui/menu/items/panels/UIMenuPercentagePanel.js"(exports) {
    "use strict";
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.UIMenuPercentagePanel = void 0;
    var utils_1 = require_utils();
    var _1 = require_panels();
    var __1 = require_ui();
    var enums_1 = require_enums();
    var __2 = require_lib();
    var UIMenuPercentagePanel = class extends _1.AbstractUIMenuPanel {
      constructor(title, percentage = 0, minText, maxText) {
        super();
        this._pressed = false;
        this.background = new __1.Sprite("commonmenu", "gradient_bgd", new utils_1.Point(), new utils_1.Size(431, 76));
        const barSize = new utils_1.Size(413, 10);
        this._activeBar = new __1.Rectangle(new utils_1.Point(), barSize, utils_1.Color.fromRgb(245, 245, 245));
        this._backgroundBar = new __1.Rectangle(new utils_1.Point(), Object.assign({}, barSize), utils_1.Color.fromRgb(87, 87, 87));
        this._title = new __1.Text("", new utils_1.Point(), 0.35, utils_1.Color.white, enums_1.Font.ChaletLondon, enums_1.Alignment.Centered);
        this._minText = new __1.Text("", new utils_1.Point(), 0.35, utils_1.Color.white, enums_1.Font.ChaletLondon, enums_1.Alignment.Centered);
        this._maxText = new __1.Text("", new utils_1.Point(), 0.35, utils_1.Color.white, enums_1.Font.ChaletLondon, enums_1.Alignment.Centered);
        this.Title = title;
        this.MinText = minText || "0%";
        this.MaxText = maxText || "100%";
        this.Percentage = percentage;
      }
      get Title() {
        return this._title.caption;
      }
      set Title(value) {
        this._title.caption = value ? value.trim() : "";
      }
      get MinText() {
        return this._minText.caption;
      }
      set MinText(value) {
        this._minText.caption = value ? value.trim() : "";
      }
      get MaxText() {
        return this._maxText.caption;
      }
      set MaxText(value) {
        this._maxText.caption = value ? value.trim() : "";
      }
      get Percentage() {
        const progress = this._activeBar.size.width / this._backgroundBar.size.width;
        return Math.round(progress * 100) / 100;
      }
      set Percentage(value) {
        value = value || 0;
        value = value < 0 ? 0 : value > 1 ? 1 : value;
        this._activeBar.size.width = this._backgroundBar.size.width * value;
      }
      updateParentItem() {
        const last = this._lastPercentage;
        const current = this.Percentage;
        if (last !== current) {
          this._lastPercentage = current;
          this.ParentMenu.panelActivated.emit(this.parentItem, this, current);
          this.parentItem.panelActivated.emit(this, current);
        }
      }
      setVerticalPosition(y) {
        super.setVerticalPosition(y);
        this._activeBar.pos.Y = y + 50;
        this._backgroundBar.pos.Y = y + 50;
        y += 15;
        this._minText.pos.Y = y;
        this._title.pos.Y = y;
        this._maxText.pos.Y = y;
      }
      draw() {
        if (this.enabled) {
          super.draw();
          const x = this.parentItem.offset.X + this.ParentMenu.WidthOffset / 2;
          this._activeBar.pos.X = x + 9;
          this._backgroundBar.pos.X = x + 9;
          this._minText.pos.X = x + 25;
          this._title.pos.X = x + 215.5;
          this._maxText.pos.X = x + 398;
          this._backgroundBar.draw(void 0, __1.Menu.screenResolution);
          this._activeBar.draw(void 0, __1.Menu.screenResolution);
          this._minText.draw(void 0, __1.Menu.screenResolution);
          this._title.draw(void 0, __1.Menu.screenResolution);
          this._maxText.draw(void 0, __1.Menu.screenResolution);
          this._processControls();
        }
      }
      _processControls() {
        if (!this._pressed && __2.Game.isDisabledControlJustPressed(0, enums_1.Control.Attack) && this.ParentMenu.isMouseInBounds(new utils_1.Point(this._backgroundBar.pos.X, this._backgroundBar.pos.Y - 4), new utils_1.Size(this._backgroundBar.size.width, this._backgroundBar.size.height + 8))) {
          this._pressed = true;
          (() => __awaiter(this, void 0, void 0, function* () {
            while (__2.Game.isDisabledControlPressed(0, enums_1.Control.Attack)) {
              yield new Promise((resolve) => setTimeout(resolve, 0));
              this._activeBar.size.width = this._getProgress();
            }
            this.updateParentItem();
            this._pressed = false;
          }))();
          const interval = setInterval(() => __awaiter(this, void 0, void 0, function* () {
            if (__2.Game.isDisabledControlPressed(0, enums_1.Control.Attack)) {
              this.updateParentItem();
            } else {
              clearInterval(interval);
            }
          }), 75);
        }
      }
      _getProgress() {
        const drawOffset = this.ParentMenu.DrawOffset;
        const progress = (GetControlNormal(0, 239) - drawOffset.X) * __1.Menu.screenWidth - this._activeBar.pos.X;
        return progress < 0 ? 0 : progress > 413 ? 413 : progress;
      }
    };
    exports.UIMenuPercentagePanel = UIMenuPercentagePanel;
  }
});

// ../../node_modules/fivem-js/lib/ui/menu/items/panels/UIMenuStatisticsPanel.js
var require_UIMenuStatisticsPanel = __commonJS({
  "../../node_modules/fivem-js/lib/ui/menu/items/panels/UIMenuStatisticsPanel.js"(exports) {
    "use strict";
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.UIMenuStatisticsPanel = void 0;
    var utils_1 = require_utils();
    var _1 = require_panels();
    var __1 = require_ui();
    var UIMenuStatisticsPanel = class extends _1.AbstractUIMenuPanel {
      constructor(item, divider = true) {
        super();
        this._divider = true;
        this._items = [];
        this.background = new __1.Rectangle(new utils_1.Point(), new utils_1.Size(431, 47), new utils_1.Color(170, 0, 0, 0));
        if (item) {
          this.addItem(item);
        }
        this.Divider = divider;
      }
      get Divider() {
        return this._divider;
      }
      set Divider(value) {
        this._divider = value || false;
      }
      get Items() {
        return this._items;
      }
      set Items(value) {
        this._items = value;
      }
      addItem(item) {
        const items = Array.isArray(item) ? item : [item];
        this._items.push(...items);
      }
      removeItem(itemOrIndex) {
        if (typeof itemOrIndex === "number") {
          this._items = this._items.filter((i, index) => index !== itemOrIndex);
        } else {
          this._items = this._items.filter((i) => i.id !== itemOrIndex.id);
        }
      }
      setVerticalPosition(y) {
        super.setVerticalPosition(y);
        this._items.forEach((item, index) => __awaiter(this, void 0, void 0, function* () {
          const itemCountOffset = 40 * (index + 1);
          const yOffset = y + itemCountOffset - 22;
          item.backgroundBar.pos.Y = yOffset;
          item.activeBar.pos.Y = yOffset;
          item.text.pos.Y = yOffset - 12;
          if (this._divider) {
            item.divider.forEach((divider) => __awaiter(this, void 0, void 0, function* () {
              divider.pos.Y = yOffset;
            }));
          }
        }));
      }
      draw() {
        if (this.enabled) {
          super.draw();
          const x = this.parentItem.offset.X + this.ParentMenu.WidthOffset / 2;
          this._items.forEach((item, index) => __awaiter(this, void 0, void 0, function* () {
            const itemCountOffset = 40 * (index + 1);
            item.backgroundBar.pos.X = x + 200;
            item.activeBar.pos.X = x + 200;
            item.text.pos.X = x + 13;
            item.backgroundBar.draw(void 0, __1.Menu.screenResolution);
            item.activeBar.draw(void 0, __1.Menu.screenResolution);
            item.text.draw(void 0, __1.Menu.screenResolution);
            if (this._divider) {
              item.divider.forEach((divider, index2) => __awaiter(this, void 0, void 0, function* () {
                const dividerWidthOffset = (index2 + 1) * 40;
                divider.pos.X = x + dividerWidthOffset + 200;
                this.background.size.height = itemCountOffset + 47 - 39;
                divider.draw(void 0, __1.Menu.screenResolution);
              }));
            }
          }));
        }
      }
    };
    exports.UIMenuStatisticsPanel = UIMenuStatisticsPanel;
  }
});

// ../../node_modules/fivem-js/lib/ui/menu/items/panels/UIMenuStatisticsPanelItem.js
var require_UIMenuStatisticsPanelItem = __commonJS({
  "../../node_modules/fivem-js/lib/ui/menu/items/panels/UIMenuStatisticsPanelItem.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.UIMenuStatisticsPanelItem = void 0;
    var utils_1 = require_utils();
    var __1 = require_ui();
    var enums_1 = require_enums();
    var UIMenuStatisticsPanelItem = class {
      constructor(name, percentage = 0) {
        this.id = utils_1.uuidv4();
        this.divider = [];
        this.text = new __1.Text("", new utils_1.Point(), 0.35, utils_1.Color.white, enums_1.Font.ChaletLondon, enums_1.Alignment.Left);
        this.backgroundBar = new __1.Rectangle(new utils_1.Point(), new utils_1.Size(200, 10), utils_1.Color.fromArgb(100, 87, 87, 87));
        this.activeBar = new __1.Rectangle(new utils_1.Point(), new utils_1.Size(0, 10), utils_1.Color.white);
        for (let i = 1; i <= 4; i++) {
          this.divider.push(new __1.Rectangle(new utils_1.Point(), new utils_1.Size(2, 10), utils_1.Color.black));
        }
        this.Name = name;
        this.Percentage = percentage;
      }
      get Name() {
        return this.text.caption;
      }
      set Name(value) {
        this.text.caption = value ? value.trim() : "";
      }
      get Percentage() {
        return this.activeBar.size.width / 200;
      }
      set Percentage(value) {
        value = value || 0;
        value = Math.round(value * 100) / 100;
        value = value < 0 ? 0 : value > 1 ? 1 : value;
        this.activeBar.size.width = value * 200;
      }
    };
    exports.UIMenuStatisticsPanelItem = UIMenuStatisticsPanelItem;
  }
});

// ../../node_modules/fivem-js/lib/ui/menu/items/panels/index.js
var require_panels = __commonJS({
  "../../node_modules/fivem-js/lib/ui/menu/items/panels/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.UIMenuStatisticsPanelItem = exports.UIMenuStatisticsPanel = exports.UIMenuPercentagePanel = exports.UIMenuColorPanel = exports.UIMenuGridPanel = exports.AbstractUIMenuPanel = void 0;
    var AbstractUIMenuPanel_1 = require_AbstractUIMenuPanel();
    Object.defineProperty(exports, "AbstractUIMenuPanel", { enumerable: true, get: function() {
      return AbstractUIMenuPanel_1.AbstractUIMenuPanel;
    } });
    var UIMenuGridPanel_1 = require_UIMenuGridPanel();
    Object.defineProperty(exports, "UIMenuGridPanel", { enumerable: true, get: function() {
      return UIMenuGridPanel_1.UIMenuGridPanel;
    } });
    var UIMenuColorPanel_1 = require_UIMenuColorPanel();
    Object.defineProperty(exports, "UIMenuColorPanel", { enumerable: true, get: function() {
      return UIMenuColorPanel_1.UIMenuColorPanel;
    } });
    var UIMenuPercentagePanel_1 = require_UIMenuPercentagePanel();
    Object.defineProperty(exports, "UIMenuPercentagePanel", { enumerable: true, get: function() {
      return UIMenuPercentagePanel_1.UIMenuPercentagePanel;
    } });
    var UIMenuStatisticsPanel_1 = require_UIMenuStatisticsPanel();
    Object.defineProperty(exports, "UIMenuStatisticsPanel", { enumerable: true, get: function() {
      return UIMenuStatisticsPanel_1.UIMenuStatisticsPanel;
    } });
    var UIMenuStatisticsPanelItem_1 = require_UIMenuStatisticsPanelItem();
    Object.defineProperty(exports, "UIMenuStatisticsPanelItem", { enumerable: true, get: function() {
      return UIMenuStatisticsPanelItem_1.UIMenuStatisticsPanelItem;
    } });
  }
});

// ../../node_modules/fivem-js/lib/ui/menu/items/UIMenuItem.js
var require_UIMenuItem = __commonJS({
  "../../node_modules/fivem-js/lib/ui/menu/items/UIMenuItem.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.UIMenuItem = void 0;
    var __1 = require_menu();
    var __2 = require_ui();
    var enums_1 = require_enums();
    var utils_1 = require_utils();
    var UIMenuItem = class {
      constructor(text, description) {
        this.id = utils_1.uuidv4();
        this.enabled = true;
        this.activated = new utils_1.LiteEvent();
        this.panelActivated = new utils_1.LiteEvent();
        this.supportsDescription = true;
        this.supportsPanels = true;
        this.supportsLeftBadge = true;
        this.supportsRightBadge = true;
        this.supportsRightLabel = true;
        this._backColor = UIMenuItem.defaultBackColor;
        this._highlightedBackColor = UIMenuItem.defaultHighlightedBackColor;
        this._foreColor = UIMenuItem.defaultForeColor;
        this._highlightedForeColor = UIMenuItem.defaultHighlightedForeColor;
        this._leftBadge = enums_1.BadgeStyle.None;
        this._rightBadge = enums_1.BadgeStyle.None;
        this._panels = [];
        this.rectangle = new __2.Rectangle(new utils_1.Point(), new utils_1.Size(431, 38), this._backColor);
        this.text = new __2.Text("", new utils_1.Point(), 0.33, this._foreColor, enums_1.Font.ChaletLondon, enums_1.Alignment.Left);
        this.selectedSprite = new __2.Sprite("commonmenu", "gradient_nav", new utils_1.Point(), new utils_1.Size(431, 38), 0, this._highlightedBackColor);
        this.badgeLeft = new __2.Sprite("", "");
        this.badgeRight = new __2.Sprite("", "");
        this.labelText = new __2.Text("", new utils_1.Point(), 0.35, this._foreColor, 0, enums_1.Alignment.Right);
        this.Text = text;
        this.Description = description;
      }
      static badgeToTextureDict(badge) {
        switch (badge) {
          case enums_1.BadgeStyle.Male:
          case enums_1.BadgeStyle.Female:
          case enums_1.BadgeStyle.AudioMute:
          case enums_1.BadgeStyle.AudioInactive:
          case enums_1.BadgeStyle.AudioVol1:
          case enums_1.BadgeStyle.AudioVol2:
          case enums_1.BadgeStyle.AudioVol3:
            return "mpleaderboard";
          case enums_1.BadgeStyle.InvArmWrestling:
          case enums_1.BadgeStyle.InvBasejump:
          case enums_1.BadgeStyle.InvMission:
          case enums_1.BadgeStyle.InvDarts:
          case enums_1.BadgeStyle.InvDeathmatch:
          case enums_1.BadgeStyle.InvDrug:
          case enums_1.BadgeStyle.InvCastle:
          case enums_1.BadgeStyle.InvGolf:
          case enums_1.BadgeStyle.InvBike:
          case enums_1.BadgeStyle.InvBoat:
          case enums_1.BadgeStyle.InvAnchor:
          case enums_1.BadgeStyle.InvCar:
          case enums_1.BadgeStyle.InvDollar:
          case enums_1.BadgeStyle.InvCoke:
          case enums_1.BadgeStyle.InvKey:
          case enums_1.BadgeStyle.InvData:
          case enums_1.BadgeStyle.InvHeli:
          case enums_1.BadgeStyle.InvHeorin:
          case enums_1.BadgeStyle.InvKeycard:
          case enums_1.BadgeStyle.InvMeth:
          case enums_1.BadgeStyle.InvBriefcase:
          case enums_1.BadgeStyle.InvLink:
          case enums_1.BadgeStyle.InvPerson:
          case enums_1.BadgeStyle.InvPlane:
          case enums_1.BadgeStyle.InvPlane2:
          case enums_1.BadgeStyle.InvQuestionmark:
          case enums_1.BadgeStyle.InvRemote:
          case enums_1.BadgeStyle.InvSafe:
          case enums_1.BadgeStyle.InvSteerWheel:
          case enums_1.BadgeStyle.InvWeapon:
          case enums_1.BadgeStyle.InvWeed:
          case enums_1.BadgeStyle.InvRaceFlagPlane:
          case enums_1.BadgeStyle.InvRaceFlagBicycle:
          case enums_1.BadgeStyle.InvRaceFlagBoatAnchor:
          case enums_1.BadgeStyle.InvRaceFlagPerson:
          case enums_1.BadgeStyle.InvRaceFlagCar:
          case enums_1.BadgeStyle.InvRaceFlagHelmet:
          case enums_1.BadgeStyle.InvShootingRange:
          case enums_1.BadgeStyle.InvSurvival:
          case enums_1.BadgeStyle.InvTeamDeathmatch:
          case enums_1.BadgeStyle.InvTennis:
          case enums_1.BadgeStyle.InvVehicleDeathmatch:
            return "mpinventory";
          case enums_1.BadgeStyle.Adversary:
          case enums_1.BadgeStyle.BaseJumping:
          case enums_1.BadgeStyle.Briefcase:
          case enums_1.BadgeStyle.MissionStar:
          case enums_1.BadgeStyle.Deathmatch:
          case enums_1.BadgeStyle.Castle:
          case enums_1.BadgeStyle.Trophy:
          case enums_1.BadgeStyle.RaceFlag:
          case enums_1.BadgeStyle.RaceFlagPlane:
          case enums_1.BadgeStyle.RaceFlagBicycle:
          case enums_1.BadgeStyle.RaceFlagPerson:
          case enums_1.BadgeStyle.RaceFlagCar:
          case enums_1.BadgeStyle.RaceFlagBoatAnchor:
          case enums_1.BadgeStyle.Rockstar:
          case enums_1.BadgeStyle.Stunt:
          case enums_1.BadgeStyle.StuntPremium:
          case enums_1.BadgeStyle.RaceFlagStuntJump:
          case enums_1.BadgeStyle.Shield:
          case enums_1.BadgeStyle.TeamDeathmatch:
          case enums_1.BadgeStyle.VehicleDeathmatch:
            return "commonmenutu";
          case enums_1.BadgeStyle.MpAmmoPickup:
          case enums_1.BadgeStyle.MpAmmo:
          case enums_1.BadgeStyle.MpCash:
          case enums_1.BadgeStyle.MpRp:
          case enums_1.BadgeStyle.MpSpectating:
            return "mphud";
          case enums_1.BadgeStyle.Sale:
            return "mpshopsale";
          case enums_1.BadgeStyle.GlobeWhite:
          case enums_1.BadgeStyle.GlobeRed:
          case enums_1.BadgeStyle.GlobeBlue:
          case enums_1.BadgeStyle.GlobeYellow:
          case enums_1.BadgeStyle.GlobeGreen:
          case enums_1.BadgeStyle.GlobeOrange:
            return "mprankbadge";
          case enums_1.BadgeStyle.CountryUsa:
          case enums_1.BadgeStyle.CountryUk:
          case enums_1.BadgeStyle.CountrySweden:
          case enums_1.BadgeStyle.CountryKorea:
          case enums_1.BadgeStyle.CountryJapan:
          case enums_1.BadgeStyle.CountryItaly:
          case enums_1.BadgeStyle.CountryGermany:
          case enums_1.BadgeStyle.CountryFrance:
          case enums_1.BadgeStyle.BrandAlbany:
          case enums_1.BadgeStyle.BrandAnnis:
          case enums_1.BadgeStyle.BrandBanshee:
          case enums_1.BadgeStyle.BrandBenefactor:
          case enums_1.BadgeStyle.BrandBf:
          case enums_1.BadgeStyle.BrandBollokan:
          case enums_1.BadgeStyle.BrandBravado:
          case enums_1.BadgeStyle.BrandBrute:
          case enums_1.BadgeStyle.BrandBuckingham:
          case enums_1.BadgeStyle.BrandCanis:
          case enums_1.BadgeStyle.BrandChariot:
          case enums_1.BadgeStyle.BrandCheval:
          case enums_1.BadgeStyle.BrandClassique:
          case enums_1.BadgeStyle.BrandCoil:
          case enums_1.BadgeStyle.BrandDeclasse:
          case enums_1.BadgeStyle.BrandDewbauchee:
          case enums_1.BadgeStyle.BrandDilettante:
          case enums_1.BadgeStyle.BrandDinka:
          case enums_1.BadgeStyle.BrandDundreary:
          case enums_1.BadgeStyle.BrandEmporer:
          case enums_1.BadgeStyle.BrandEnus:
          case enums_1.BadgeStyle.BrandFathom:
          case enums_1.BadgeStyle.BrandGalivanter:
          case enums_1.BadgeStyle.BrandGrotti:
          case enums_1.BadgeStyle.BrandHijak:
          case enums_1.BadgeStyle.BrandHvy:
          case enums_1.BadgeStyle.BrandImponte:
          case enums_1.BadgeStyle.BrandInvetero:
          case enums_1.BadgeStyle.BrandJacksheepe:
          case enums_1.BadgeStyle.BrandJobuilt:
          case enums_1.BadgeStyle.BrandKarin:
          case enums_1.BadgeStyle.BrandLampadati:
          case enums_1.BadgeStyle.BrandMaibatsu:
          case enums_1.BadgeStyle.BrandMammoth:
          case enums_1.BadgeStyle.BrandMtl:
          case enums_1.BadgeStyle.BrandNagasaki:
          case enums_1.BadgeStyle.BrandObey:
          case enums_1.BadgeStyle.BrandOcelot:
          case enums_1.BadgeStyle.BrandOverflod:
          case enums_1.BadgeStyle.BrandPed:
          case enums_1.BadgeStyle.BrandPegassi:
          case enums_1.BadgeStyle.BrandPfister:
          case enums_1.BadgeStyle.BrandPrincipe:
          case enums_1.BadgeStyle.BrandProgen:
          case enums_1.BadgeStyle.BrandSchyster:
          case enums_1.BadgeStyle.BrandShitzu:
          case enums_1.BadgeStyle.BrandSpeedophile:
          case enums_1.BadgeStyle.BrandStanley:
          case enums_1.BadgeStyle.BrandTruffade:
          case enums_1.BadgeStyle.BrandUbermacht:
          case enums_1.BadgeStyle.BrandVapid:
          case enums_1.BadgeStyle.BrandVulcar:
          case enums_1.BadgeStyle.BrandWeeny:
          case enums_1.BadgeStyle.BrandWestern:
          case enums_1.BadgeStyle.BrandWesternmotorcycle:
          case enums_1.BadgeStyle.BrandWillard:
          case enums_1.BadgeStyle.BrandZirconium:
            return "mpcarhud";
          case enums_1.BadgeStyle.BrandGrotti2:
          case enums_1.BadgeStyle.BrandLcc:
          case enums_1.BadgeStyle.BrandProgen2:
          case enums_1.BadgeStyle.BrandRune:
            return "mpcarhud2";
          case enums_1.BadgeStyle.Info:
            return "shared";
          default:
            return "commonmenu";
        }
      }
      static getBadgeSpriteWidthOffset(sprite) {
        return (40 - sprite.size.width) / 2;
      }
      static getBadgeSpriteHeightOffset(sprite) {
        return (40 - sprite.size.height) / 2;
      }
      static getBadgeSize(badge) {
        switch (badge) {
          case enums_1.BadgeStyle.Cash:
          case enums_1.BadgeStyle.Coke:
          case enums_1.BadgeStyle.Crown:
          case enums_1.BadgeStyle.Heroin:
          case enums_1.BadgeStyle.Meth:
          case enums_1.BadgeStyle.Weed:
          case enums_1.BadgeStyle.Adversary:
          case enums_1.BadgeStyle.BaseJumping:
          case enums_1.BadgeStyle.Briefcase:
          case enums_1.BadgeStyle.MissionStar:
          case enums_1.BadgeStyle.Deathmatch:
          case enums_1.BadgeStyle.Castle:
          case enums_1.BadgeStyle.Trophy:
          case enums_1.BadgeStyle.RaceFlag:
          case enums_1.BadgeStyle.RaceFlagPlane:
          case enums_1.BadgeStyle.RaceFlagBicycle:
          case enums_1.BadgeStyle.RaceFlagPerson:
          case enums_1.BadgeStyle.RaceFlagCar:
          case enums_1.BadgeStyle.RaceFlagBoatAnchor:
          case enums_1.BadgeStyle.Rockstar:
          case enums_1.BadgeStyle.Stunt:
          case enums_1.BadgeStyle.StuntPremium:
          case enums_1.BadgeStyle.RaceFlagStuntJump:
          case enums_1.BadgeStyle.Shield:
          case enums_1.BadgeStyle.TeamDeathmatch:
          case enums_1.BadgeStyle.VehicleDeathmatch:
          case enums_1.BadgeStyle.AudioMute:
          case enums_1.BadgeStyle.AudioInactive:
          case enums_1.BadgeStyle.AudioVol1:
          case enums_1.BadgeStyle.AudioVol2:
          case enums_1.BadgeStyle.AudioVol3:
          case enums_1.BadgeStyle.BrandAlbany:
          case enums_1.BadgeStyle.BrandAnnis:
          case enums_1.BadgeStyle.BrandBanshee:
          case enums_1.BadgeStyle.BrandBenefactor:
          case enums_1.BadgeStyle.BrandBf:
          case enums_1.BadgeStyle.BrandBollokan:
          case enums_1.BadgeStyle.BrandBravado:
          case enums_1.BadgeStyle.BrandBrute:
          case enums_1.BadgeStyle.BrandBuckingham:
          case enums_1.BadgeStyle.BrandCanis:
          case enums_1.BadgeStyle.BrandChariot:
          case enums_1.BadgeStyle.BrandCheval:
          case enums_1.BadgeStyle.BrandClassique:
          case enums_1.BadgeStyle.BrandCoil:
          case enums_1.BadgeStyle.BrandDeclasse:
          case enums_1.BadgeStyle.BrandDewbauchee:
          case enums_1.BadgeStyle.BrandDilettante:
          case enums_1.BadgeStyle.BrandDinka:
          case enums_1.BadgeStyle.BrandDundreary:
          case enums_1.BadgeStyle.BrandEmporer:
          case enums_1.BadgeStyle.BrandEnus:
          case enums_1.BadgeStyle.BrandFathom:
          case enums_1.BadgeStyle.BrandGalivanter:
          case enums_1.BadgeStyle.BrandGrotti:
          case enums_1.BadgeStyle.BrandHijak:
          case enums_1.BadgeStyle.BrandHvy:
          case enums_1.BadgeStyle.BrandImponte:
          case enums_1.BadgeStyle.BrandInvetero:
          case enums_1.BadgeStyle.BrandJacksheepe:
          case enums_1.BadgeStyle.BrandJobuilt:
          case enums_1.BadgeStyle.BrandKarin:
          case enums_1.BadgeStyle.BrandLampadati:
          case enums_1.BadgeStyle.BrandMaibatsu:
          case enums_1.BadgeStyle.BrandMammoth:
          case enums_1.BadgeStyle.BrandMtl:
          case enums_1.BadgeStyle.BrandNagasaki:
          case enums_1.BadgeStyle.BrandObey:
          case enums_1.BadgeStyle.BrandOcelot:
          case enums_1.BadgeStyle.BrandOverflod:
          case enums_1.BadgeStyle.BrandPed:
          case enums_1.BadgeStyle.BrandPegassi:
          case enums_1.BadgeStyle.BrandPfister:
          case enums_1.BadgeStyle.BrandPrincipe:
          case enums_1.BadgeStyle.BrandProgen:
          case enums_1.BadgeStyle.BrandSchyster:
          case enums_1.BadgeStyle.BrandShitzu:
          case enums_1.BadgeStyle.BrandSpeedophile:
          case enums_1.BadgeStyle.BrandStanley:
          case enums_1.BadgeStyle.BrandTruffade:
          case enums_1.BadgeStyle.BrandUbermacht:
          case enums_1.BadgeStyle.BrandVapid:
          case enums_1.BadgeStyle.BrandVulcar:
          case enums_1.BadgeStyle.BrandWeeny:
          case enums_1.BadgeStyle.BrandWestern:
          case enums_1.BadgeStyle.BrandWesternmotorcycle:
          case enums_1.BadgeStyle.BrandWillard:
          case enums_1.BadgeStyle.BrandZirconium:
          case enums_1.BadgeStyle.BrandGrotti2:
          case enums_1.BadgeStyle.BrandLcc:
          case enums_1.BadgeStyle.BrandProgen2:
          case enums_1.BadgeStyle.BrandRune:
          case enums_1.BadgeStyle.CountryUsa:
          case enums_1.BadgeStyle.CountryUk:
          case enums_1.BadgeStyle.CountrySweden:
          case enums_1.BadgeStyle.CountryKorea:
          case enums_1.BadgeStyle.CountryJapan:
          case enums_1.BadgeStyle.CountryItaly:
          case enums_1.BadgeStyle.CountryGermany:
          case enums_1.BadgeStyle.CountryFrance:
            return new utils_1.Size(30, 30);
          case enums_1.BadgeStyle.MedalSilver:
          case enums_1.BadgeStyle.MpAmmoPickup:
          case enums_1.BadgeStyle.MpAmmo:
          case enums_1.BadgeStyle.MpCash:
          case enums_1.BadgeStyle.MpRp:
          case enums_1.BadgeStyle.GlobeWhite:
          case enums_1.BadgeStyle.GlobeBlue:
          case enums_1.BadgeStyle.GlobeGreen:
          case enums_1.BadgeStyle.GlobeOrange:
          case enums_1.BadgeStyle.GlobeRed:
          case enums_1.BadgeStyle.GlobeYellow:
          case enums_1.BadgeStyle.InvArmWrestling:
          case enums_1.BadgeStyle.InvBasejump:
          case enums_1.BadgeStyle.InvMission:
          case enums_1.BadgeStyle.InvDarts:
          case enums_1.BadgeStyle.InvDeathmatch:
          case enums_1.BadgeStyle.InvDrug:
          case enums_1.BadgeStyle.InvCastle:
          case enums_1.BadgeStyle.InvGolf:
          case enums_1.BadgeStyle.InvBike:
          case enums_1.BadgeStyle.InvBoat:
          case enums_1.BadgeStyle.InvAnchor:
          case enums_1.BadgeStyle.InvCar:
          case enums_1.BadgeStyle.InvDollar:
          case enums_1.BadgeStyle.InvCoke:
          case enums_1.BadgeStyle.InvKey:
          case enums_1.BadgeStyle.InvData:
          case enums_1.BadgeStyle.InvHeli:
          case enums_1.BadgeStyle.InvHeorin:
          case enums_1.BadgeStyle.InvKeycard:
          case enums_1.BadgeStyle.InvMeth:
          case enums_1.BadgeStyle.InvBriefcase:
          case enums_1.BadgeStyle.InvLink:
          case enums_1.BadgeStyle.InvPerson:
          case enums_1.BadgeStyle.InvPlane:
          case enums_1.BadgeStyle.InvPlane2:
          case enums_1.BadgeStyle.InvQuestionmark:
          case enums_1.BadgeStyle.InvRemote:
          case enums_1.BadgeStyle.InvSafe:
          case enums_1.BadgeStyle.InvSteerWheel:
          case enums_1.BadgeStyle.InvWeapon:
          case enums_1.BadgeStyle.InvWeed:
          case enums_1.BadgeStyle.InvRaceFlagPlane:
          case enums_1.BadgeStyle.InvRaceFlagBicycle:
          case enums_1.BadgeStyle.InvRaceFlagBoatAnchor:
          case enums_1.BadgeStyle.InvRaceFlagPerson:
          case enums_1.BadgeStyle.InvRaceFlagCar:
          case enums_1.BadgeStyle.InvRaceFlagHelmet:
          case enums_1.BadgeStyle.InvShootingRange:
          case enums_1.BadgeStyle.InvSurvival:
          case enums_1.BadgeStyle.InvTeamDeathmatch:
          case enums_1.BadgeStyle.InvTennis:
          case enums_1.BadgeStyle.InvVehicleDeathmatch:
            return new utils_1.Size(25, 25);
          default:
            return new utils_1.Size(40, 40);
        }
      }
      get Text() {
        return this.text.caption;
      }
      set Text(value) {
        this.text.caption = value ? value.trim() : "";
      }
      get Description() {
        if (!this.supportsDescription) {
          return null;
        }
        return this._description;
      }
      set Description(value) {
        if (!this.supportsDescription) {
          throw new Error("This item does not support description");
        }
        this._description = value ? value.trim() : "";
        this.formatDescription();
      }
      get FormattedDescription() {
        return this._formattedDescription;
      }
      get BackColor() {
        return this._backColor;
      }
      set BackColor(value) {
        value = value || this._backColor;
        this._backColor = value;
        this.rectangle.color = value;
      }
      get HighlightedBackColor() {
        return this._highlightedBackColor;
      }
      set HighlightedBackColor(value) {
        value = value || this._highlightedBackColor;
        this._highlightedBackColor = value;
        this.selectedSprite.color = value;
      }
      get ForeColor() {
        return this._foreColor;
      }
      set ForeColor(value) {
        value = value || this._foreColor;
        this._foreColor = value;
        this.text.color = value;
      }
      get HighlightedForeColor() {
        return this._highlightedForeColor;
      }
      set HighlightedForeColor(value) {
        this._highlightedForeColor = value || this._highlightedForeColor;
      }
      get LeftBadge() {
        if (!this.supportsLeftBadge) {
          return null;
        }
        return this._leftBadge;
      }
      set LeftBadge(value) {
        if (!this.supportsLeftBadge) {
          throw new Error("This item does not support left badge");
        }
        value = Number(value);
        this._leftBadge = value;
        this.badgeLeft.TextureDict = UIMenuItem.badgeToTextureDict(value);
        this.badgeLeft.size = UIMenuItem.getBadgeSize(value);
      }
      get RightBadge() {
        if (!this.supportsRightBadge) {
          return null;
        }
        return this._rightBadge;
      }
      set RightBadge(value) {
        if (!this.supportsRightBadge) {
          throw new Error("This item does not support right badge");
        }
        value = Number(value);
        this._rightBadge = value;
        this.badgeRight.TextureDict = UIMenuItem.badgeToTextureDict(value);
        this.badgeRight.size = UIMenuItem.getBadgeSize(value);
      }
      get RightLabel() {
        if (!this.supportsRightLabel) {
          return null;
        }
        return this.labelText.caption;
      }
      set RightLabel(value) {
        if (!this.supportsRightLabel) {
          throw new Error("This item does not support right label");
        }
        this.labelText.caption = value ? value.trim() : "";
      }
      get IsMouseInBounds() {
        return this.parent.isMouseInBounds(this.rectangle.pos, this.rectangle.size);
      }
      get Panels() {
        if (!this.supportsPanels) {
          return null;
        }
        return this._panels;
      }
      set Panels(value) {
        if (!this.supportsPanels) {
          throw new Error("This item does not support panels");
        }
        this._panels = value;
      }
      addPanel(panel) {
        if (!this.supportsPanels) {
          throw new Error("This item does not support panels");
        }
        const panels = Array.isArray(panel) ? panel : [panel];
        panels.forEach((p) => {
          p.ParentItem = this;
        });
        this._panels.push(...panels);
      }
      findPanelIndex(panel) {
        if (!this.supportsPanels) {
          throw new Error("This item does not support panels");
        }
        const index = this._panels.findIndex((p) => p.id === panel.id);
        return index !== -1 ? index : null;
      }
      removePanel(panelOrIndex) {
        if (!this.supportsPanels) {
          throw new Error("This item does not support panels");
        }
        if (typeof panelOrIndex === "number") {
          this._panels = this._panels.filter((p, index) => index !== panelOrIndex);
        } else {
          this._panels = this._panels.filter((p) => p.id !== panelOrIndex.id);
        }
      }
      addEvent(event, ...args) {
        this._event = { event, args };
      }
      fireEvent() {
        if (this._event) {
          TriggerEvent(this._event.event, ...this._event.args);
        }
      }
      formatDescription() {
        if (!this.parent) {
          return;
        }
        let input = this._description;
        if (input.length > 99) {
          input = input.slice(0, 99);
        }
        const maxPixelsPerLine = 425 + this.parent.WidthOffset;
        let aggregatePixels = 0;
        let output = "";
        const words = input.split(" ");
        const spaceWidth = utils_1.measureString(" ", enums_1.Font.ChaletLondon, 0.33, __1.Menu.screenWidth);
        for (const word of words) {
          const offset = utils_1.measureString(word, enums_1.Font.ChaletLondon, 0.33, __1.Menu.screenWidth);
          aggregatePixels += offset;
          if (aggregatePixels > maxPixelsPerLine) {
            output = `${output} 
${word} `;
            aggregatePixels = offset + spaceWidth;
          } else {
            output = `${output}${word} `;
            aggregatePixels += spaceWidth;
          }
        }
        this._formattedDescription = output;
      }
      badgeToTextureName(badge) {
        const selected = this.selected;
        switch (badge) {
          case enums_1.BadgeStyle.None:
            return "";
          case enums_1.BadgeStyle.Ammo:
            return selected ? "shop_ammo_icon_b" : "shop_ammo_icon_a";
          case enums_1.BadgeStyle.Armor:
            return selected ? "shop_armour_icon_b" : "shop_armour_icon_a";
          case enums_1.BadgeStyle.Barber:
            return selected ? "shop_barber_icon_b" : "shop_barber_icon_a";
          case enums_1.BadgeStyle.Bike:
            return selected ? "shop_garage_bike_icon_b" : "shop_garage_bike_icon_a";
          case enums_1.BadgeStyle.Car:
            return selected ? "shop_garage_icon_b" : "shop_garage_icon_a";
          case enums_1.BadgeStyle.Cash:
            return "mp_specitem_cash";
          case enums_1.BadgeStyle.Clothing:
            return selected ? "shop_clothing_icon_b" : "shop_clothing_icon_a";
          case enums_1.BadgeStyle.Coke:
            return "mp_specitem_coke";
          case enums_1.BadgeStyle.Crown:
            return "mp_hostcrown";
          case enums_1.BadgeStyle.Franklin:
            return selected ? "shop_franklin_icon_b" : "shop_franklin_icon_a";
          case enums_1.BadgeStyle.Gun:
            return selected ? "shop_gunclub_icon_b" : "shop_gunclub_icon_a";
          case enums_1.BadgeStyle.HealthHeart:
            return selected ? "shop_health_icon_b" : "shop_health_icon_a";
          case enums_1.BadgeStyle.Heroin:
            return "mp_specitem_heroin";
          case enums_1.BadgeStyle.Lock:
            return "shop_lock";
          case enums_1.BadgeStyle.MakeupBrush:
            return selected ? "shop_makeup_icon_b" : "shop_makeup_icon_a";
          case enums_1.BadgeStyle.Mask:
            return selected ? "shop_mask_icon_b" : "shop_mask_icon_a";
          case enums_1.BadgeStyle.MedalBronze:
            return "mp_medal_bronze";
          case enums_1.BadgeStyle.MedalGold:
            return "mp_medal_gold";
          case enums_1.BadgeStyle.MedalSilver:
            return "mp_medal_silver";
          case enums_1.BadgeStyle.Meth:
            return "mp_specitem_meth";
          case enums_1.BadgeStyle.Michael:
            return selected ? "shop_michael_icon_b" : "shop_michael_icon_a";
          case enums_1.BadgeStyle.Star:
            return "shop_new_star";
          case enums_1.BadgeStyle.Tattoo:
            return selected ? "shop_tattoos_icon_b" : "shop_tattoos_icon_a";
          case enums_1.BadgeStyle.Tick:
            return "shop_tick_icon";
          case enums_1.BadgeStyle.Trevor:
            return selected ? "shop_trevor_icon_b" : "shop_trevor_icon_a";
          case enums_1.BadgeStyle.Warning:
            return "mp_alerttriangle";
          case enums_1.BadgeStyle.Weed:
            return "mp_specitem_weed";
          case enums_1.BadgeStyle.Male:
            return "leaderboard_male_icon";
          case enums_1.BadgeStyle.Female:
            return "leaderboard_female_icon";
          case enums_1.BadgeStyle.LockArena:
            return "shop_lock_arena";
          case enums_1.BadgeStyle.Adversary:
            return "adversary";
          case enums_1.BadgeStyle.BaseJumping:
            return "base_jumping";
          case enums_1.BadgeStyle.Briefcase:
            return "capture_the_flag";
          case enums_1.BadgeStyle.MissionStar:
            return "custom_mission";
          case enums_1.BadgeStyle.Deathmatch:
            return "deathmatch";
          case enums_1.BadgeStyle.Castle:
            return "gang_attack";
          case enums_1.BadgeStyle.Trophy:
            return "last_team_standing";
          case enums_1.BadgeStyle.RaceFlag:
            return "race";
          case enums_1.BadgeStyle.RaceFlagPlane:
            return "race_air";
          case enums_1.BadgeStyle.RaceFlagBicycle:
            return "race_bicycle";
          case enums_1.BadgeStyle.RaceFlagPerson:
            return "race_foot";
          case enums_1.BadgeStyle.RaceFlagCar:
            return "race_land";
          case enums_1.BadgeStyle.RaceFlagBoatAnchor:
            return "race_water";
          case enums_1.BadgeStyle.Rockstar:
            return "rockstar";
          case enums_1.BadgeStyle.Stunt:
            return "stunt";
          case enums_1.BadgeStyle.StuntPremium:
            return "stunt_premium";
          case enums_1.BadgeStyle.RaceFlagStuntJump:
            return "stunt_race";
          case enums_1.BadgeStyle.Shield:
            return "survival";
          case enums_1.BadgeStyle.TeamDeathmatch:
            return "team_deathmatch";
          case enums_1.BadgeStyle.VehicleDeathmatch:
            return "vehicle_deathmatch";
          case enums_1.BadgeStyle.MpAmmoPickup:
            return "ammo_pickup";
          case enums_1.BadgeStyle.MpAmmo:
            return "mp_anim_ammo";
          case enums_1.BadgeStyle.MpCash:
            return "mp_anim_cash";
          case enums_1.BadgeStyle.MpRp:
            return "mp_anim_rp";
          case enums_1.BadgeStyle.MpSpectating:
            return "spectating";
          case enums_1.BadgeStyle.Sale:
            return "saleicon";
          case enums_1.BadgeStyle.GlobeWhite:
          case enums_1.BadgeStyle.GlobeRed:
          case enums_1.BadgeStyle.GlobeBlue:
          case enums_1.BadgeStyle.GlobeYellow:
          case enums_1.BadgeStyle.GlobeGreen:
          case enums_1.BadgeStyle.GlobeOrange:
            return "globe";
          case enums_1.BadgeStyle.InvArmWrestling:
            return "arm_wrestling";
          case enums_1.BadgeStyle.InvBasejump:
            return "basejump";
          case enums_1.BadgeStyle.InvMission:
            return "custom_mission";
          case enums_1.BadgeStyle.InvDarts:
            return "darts";
          case enums_1.BadgeStyle.InvDeathmatch:
            return "deathmatch";
          case enums_1.BadgeStyle.InvDrug:
            return "drug_trafficking";
          case enums_1.BadgeStyle.InvCastle:
            return "gang_attack";
          case enums_1.BadgeStyle.InvGolf:
            return "golf";
          case enums_1.BadgeStyle.InvBike:
            return "mp_specitem_bike";
          case enums_1.BadgeStyle.InvBoat:
            return "mp_specitem_boat";
          case enums_1.BadgeStyle.InvAnchor:
            return "mp_specitem_boatpickup";
          case enums_1.BadgeStyle.InvCar:
            return "mp_specitem_car";
          case enums_1.BadgeStyle.InvDollar:
            return "mp_specitem_cash";
          case enums_1.BadgeStyle.InvCoke:
            return "mp_specitem_coke";
          case enums_1.BadgeStyle.InvKey:
            return "mp_specitem_cuffkeys";
          case enums_1.BadgeStyle.InvData:
            return "mp_specitem_data";
          case enums_1.BadgeStyle.InvHeli:
            return "mp_specitem_heli";
          case enums_1.BadgeStyle.InvHeorin:
            return "mp_specitem_heroin";
          case enums_1.BadgeStyle.InvKeycard:
            return "mp_specitem_keycard";
          case enums_1.BadgeStyle.InvMeth:
            return "mp_specitem_meth";
          case enums_1.BadgeStyle.InvBriefcase:
            return "mp_specitem_package";
          case enums_1.BadgeStyle.InvLink:
            return "mp_specitem_partnericon";
          case enums_1.BadgeStyle.InvPerson:
            return "mp_specitem_ped";
          case enums_1.BadgeStyle.InvPlane:
            return "mp_specitem_plane";
          case enums_1.BadgeStyle.InvPlane2:
            return "mp_specitem_plane2";
          case enums_1.BadgeStyle.InvQuestionmark:
            return "mp_specitem_randomobject";
          case enums_1.BadgeStyle.InvRemote:
            return "mp_specitem_remote";
          case enums_1.BadgeStyle.InvSafe:
            return "mp_specitem_safe";
          case enums_1.BadgeStyle.InvSteerWheel:
            return "mp_specitem_steer_wheel";
          case enums_1.BadgeStyle.InvWeapon:
            return "mp_specitem_weapons";
          case enums_1.BadgeStyle.InvWeed:
            return "mp_specitem_weed";
          case enums_1.BadgeStyle.InvRaceFlagPlane:
            return "race_air";
          case enums_1.BadgeStyle.InvRaceFlagBicycle:
            return "race_bike";
          case enums_1.BadgeStyle.InvRaceFlagBoatAnchor:
            return "race_boat";
          case enums_1.BadgeStyle.InvRaceFlagPerson:
            return "race_foot";
          case enums_1.BadgeStyle.InvRaceFlagCar:
            return "race_land";
          case enums_1.BadgeStyle.InvRaceFlagHelmet:
            return "race_offroad";
          case enums_1.BadgeStyle.InvShootingRange:
            return "shooting_range";
          case enums_1.BadgeStyle.InvSurvival:
            return "survival";
          case enums_1.BadgeStyle.InvTeamDeathmatch:
            return "team_deathmatch";
          case enums_1.BadgeStyle.InvTennis:
            return "tennis";
          case enums_1.BadgeStyle.InvVehicleDeathmatch:
            return "vehicle_deathmatch";
          case enums_1.BadgeStyle.AudioMute:
            return "leaderboard_audio_mute";
          case enums_1.BadgeStyle.AudioInactive:
            return "leaderboard_audio_inactive";
          case enums_1.BadgeStyle.AudioVol1:
            return "leaderboard_audio_1";
          case enums_1.BadgeStyle.AudioVol2:
            return "leaderboard_audio_2";
          case enums_1.BadgeStyle.AudioVol3:
            return "leaderboard_audio_3";
          case enums_1.BadgeStyle.CountryUsa:
            return "vehicle_card_icons_flag_usa";
          case enums_1.BadgeStyle.CountryUk:
            return "vehicle_card_icons_flag_uk";
          case enums_1.BadgeStyle.CountrySweden:
            return "vehicle_card_icons_flag_sweden";
          case enums_1.BadgeStyle.CountryKorea:
            return "vehicle_card_icons_flag_korea";
          case enums_1.BadgeStyle.CountryJapan:
            return "vehicle_card_icons_flag_japan";
          case enums_1.BadgeStyle.CountryItaly:
            return "vehicle_card_icons_flag_italy";
          case enums_1.BadgeStyle.CountryGermany:
            return "vehicle_card_icons_flag_germany";
          case enums_1.BadgeStyle.CountryFrance:
            return "vehicle_card_icons_flag_france";
          case enums_1.BadgeStyle.BrandAlbany:
            return "albany";
          case enums_1.BadgeStyle.BrandAnnis:
            return "annis";
          case enums_1.BadgeStyle.BrandBanshee:
            return "banshee";
          case enums_1.BadgeStyle.BrandBenefactor:
            return "benefactor";
          case enums_1.BadgeStyle.BrandBf:
            return "bf";
          case enums_1.BadgeStyle.BrandBollokan:
            return "bollokan";
          case enums_1.BadgeStyle.BrandBravado:
            return "bravado";
          case enums_1.BadgeStyle.BrandBrute:
            return "brute";
          case enums_1.BadgeStyle.BrandBuckingham:
            return "buckingham";
          case enums_1.BadgeStyle.BrandCanis:
            return "canis";
          case enums_1.BadgeStyle.BrandChariot:
            return "chariot";
          case enums_1.BadgeStyle.BrandCheval:
            return "cheval";
          case enums_1.BadgeStyle.BrandClassique:
            return "classique";
          case enums_1.BadgeStyle.BrandCoil:
            return "coil";
          case enums_1.BadgeStyle.BrandDeclasse:
            return "declasse";
          case enums_1.BadgeStyle.BrandDewbauchee:
            return "dewbauchee";
          case enums_1.BadgeStyle.BrandDilettante:
            return "dilettante";
          case enums_1.BadgeStyle.BrandDinka:
            return "dinka";
          case enums_1.BadgeStyle.BrandDundreary:
            return "dundreary";
          case enums_1.BadgeStyle.BrandEmporer:
            return "emporer";
          case enums_1.BadgeStyle.BrandEnus:
            return "enus";
          case enums_1.BadgeStyle.BrandFathom:
            return "fathom";
          case enums_1.BadgeStyle.BrandGalivanter:
            return "galivanter";
          case enums_1.BadgeStyle.BrandGrotti:
            return "grotti";
          case enums_1.BadgeStyle.BrandHijak:
            return "hijak";
          case enums_1.BadgeStyle.BrandHvy:
            return "hvy";
          case enums_1.BadgeStyle.BrandImponte:
            return "imponte";
          case enums_1.BadgeStyle.BrandInvetero:
            return "invetero";
          case enums_1.BadgeStyle.BrandJacksheepe:
            return "jacksheepe";
          case enums_1.BadgeStyle.BrandJobuilt:
            return "jobuilt";
          case enums_1.BadgeStyle.BrandKarin:
            return "karin";
          case enums_1.BadgeStyle.BrandLampadati:
            return "lampadati";
          case enums_1.BadgeStyle.BrandMaibatsu:
            return "maibatsu";
          case enums_1.BadgeStyle.BrandMammoth:
            return "mammoth";
          case enums_1.BadgeStyle.BrandMtl:
            return "mtl";
          case enums_1.BadgeStyle.BrandNagasaki:
            return "nagasaki";
          case enums_1.BadgeStyle.BrandObey:
            return "obey";
          case enums_1.BadgeStyle.BrandOcelot:
            return "ocelot";
          case enums_1.BadgeStyle.BrandOverflod:
            return "overflod";
          case enums_1.BadgeStyle.BrandPed:
            return "ped";
          case enums_1.BadgeStyle.BrandPegassi:
            return "pegassi";
          case enums_1.BadgeStyle.BrandPfister:
            return "pfister";
          case enums_1.BadgeStyle.BrandPrincipe:
            return "principe";
          case enums_1.BadgeStyle.BrandProgen:
            return "progen";
          case enums_1.BadgeStyle.BrandSchyster:
            return "schyster";
          case enums_1.BadgeStyle.BrandShitzu:
            return "shitzu";
          case enums_1.BadgeStyle.BrandSpeedophile:
            return "speedophile";
          case enums_1.BadgeStyle.BrandStanley:
            return "stanley";
          case enums_1.BadgeStyle.BrandTruffade:
            return "truffade";
          case enums_1.BadgeStyle.BrandUbermacht:
            return "ubermacht";
          case enums_1.BadgeStyle.BrandVapid:
            return "vapid";
          case enums_1.BadgeStyle.BrandVulcar:
            return "vulcar";
          case enums_1.BadgeStyle.BrandWeeny:
            return "weeny";
          case enums_1.BadgeStyle.BrandWestern:
            return "western";
          case enums_1.BadgeStyle.BrandWesternmotorcycle:
            return "westernmotorcycle";
          case enums_1.BadgeStyle.BrandWillard:
            return "willard";
          case enums_1.BadgeStyle.BrandZirconium:
            return "zirconium";
          case enums_1.BadgeStyle.BrandGrotti2:
            return "grotti_2";
          case enums_1.BadgeStyle.BrandLcc:
            return "lcc";
          case enums_1.BadgeStyle.BrandProgen2:
            return "progen";
          case enums_1.BadgeStyle.BrandRune:
            return "rune";
          case enums_1.BadgeStyle.Info:
            return "info_icon_32";
          default:
            break;
        }
      }
      badgeToColor(badge) {
        const selected = this.selected;
        const enabled = this.enabled;
        switch (badge) {
          case enums_1.BadgeStyle.Crown:
          case enums_1.BadgeStyle.Tick:
          case enums_1.BadgeStyle.Male:
          case enums_1.BadgeStyle.Female:
          case enums_1.BadgeStyle.Lock:
          case enums_1.BadgeStyle.LockArena:
          case enums_1.BadgeStyle.Adversary:
          case enums_1.BadgeStyle.BaseJumping:
          case enums_1.BadgeStyle.Briefcase:
          case enums_1.BadgeStyle.MissionStar:
          case enums_1.BadgeStyle.Deathmatch:
          case enums_1.BadgeStyle.Castle:
          case enums_1.BadgeStyle.Trophy:
          case enums_1.BadgeStyle.RaceFlag:
          case enums_1.BadgeStyle.RaceFlagPlane:
          case enums_1.BadgeStyle.RaceFlagBicycle:
          case enums_1.BadgeStyle.RaceFlagPerson:
          case enums_1.BadgeStyle.RaceFlagCar:
          case enums_1.BadgeStyle.RaceFlagBoatAnchor:
          case enums_1.BadgeStyle.Rockstar:
          case enums_1.BadgeStyle.Stunt:
          case enums_1.BadgeStyle.StuntPremium:
          case enums_1.BadgeStyle.RaceFlagStuntJump:
          case enums_1.BadgeStyle.Shield:
          case enums_1.BadgeStyle.TeamDeathmatch:
          case enums_1.BadgeStyle.VehicleDeathmatch:
          case enums_1.BadgeStyle.MpSpectating:
          case enums_1.BadgeStyle.GlobeWhite:
          case enums_1.BadgeStyle.AudioMute:
          case enums_1.BadgeStyle.AudioInactive:
          case enums_1.BadgeStyle.AudioVol1:
          case enums_1.BadgeStyle.AudioVol2:
          case enums_1.BadgeStyle.AudioVol3:
          case enums_1.BadgeStyle.BrandAlbany:
          case enums_1.BadgeStyle.BrandAnnis:
          case enums_1.BadgeStyle.BrandBanshee:
          case enums_1.BadgeStyle.BrandBenefactor:
          case enums_1.BadgeStyle.BrandBf:
          case enums_1.BadgeStyle.BrandBollokan:
          case enums_1.BadgeStyle.BrandBravado:
          case enums_1.BadgeStyle.BrandBrute:
          case enums_1.BadgeStyle.BrandBuckingham:
          case enums_1.BadgeStyle.BrandCanis:
          case enums_1.BadgeStyle.BrandChariot:
          case enums_1.BadgeStyle.BrandCheval:
          case enums_1.BadgeStyle.BrandClassique:
          case enums_1.BadgeStyle.BrandCoil:
          case enums_1.BadgeStyle.BrandDeclasse:
          case enums_1.BadgeStyle.BrandDewbauchee:
          case enums_1.BadgeStyle.BrandDilettante:
          case enums_1.BadgeStyle.BrandDinka:
          case enums_1.BadgeStyle.BrandDundreary:
          case enums_1.BadgeStyle.BrandEmporer:
          case enums_1.BadgeStyle.BrandEnus:
          case enums_1.BadgeStyle.BrandFathom:
          case enums_1.BadgeStyle.BrandGalivanter:
          case enums_1.BadgeStyle.BrandGrotti:
          case enums_1.BadgeStyle.BrandHijak:
          case enums_1.BadgeStyle.BrandHvy:
          case enums_1.BadgeStyle.BrandImponte:
          case enums_1.BadgeStyle.BrandInvetero:
          case enums_1.BadgeStyle.BrandJacksheepe:
          case enums_1.BadgeStyle.BrandJobuilt:
          case enums_1.BadgeStyle.BrandKarin:
          case enums_1.BadgeStyle.BrandLampadati:
          case enums_1.BadgeStyle.BrandMaibatsu:
          case enums_1.BadgeStyle.BrandMammoth:
          case enums_1.BadgeStyle.BrandMtl:
          case enums_1.BadgeStyle.BrandNagasaki:
          case enums_1.BadgeStyle.BrandObey:
          case enums_1.BadgeStyle.BrandOcelot:
          case enums_1.BadgeStyle.BrandOverflod:
          case enums_1.BadgeStyle.BrandPed:
          case enums_1.BadgeStyle.BrandPegassi:
          case enums_1.BadgeStyle.BrandPfister:
          case enums_1.BadgeStyle.BrandPrincipe:
          case enums_1.BadgeStyle.BrandProgen:
          case enums_1.BadgeStyle.BrandSchyster:
          case enums_1.BadgeStyle.BrandShitzu:
          case enums_1.BadgeStyle.BrandSpeedophile:
          case enums_1.BadgeStyle.BrandStanley:
          case enums_1.BadgeStyle.BrandTruffade:
          case enums_1.BadgeStyle.BrandUbermacht:
          case enums_1.BadgeStyle.BrandVapid:
          case enums_1.BadgeStyle.BrandVulcar:
          case enums_1.BadgeStyle.BrandWeeny:
          case enums_1.BadgeStyle.BrandWestern:
          case enums_1.BadgeStyle.BrandWesternmotorcycle:
          case enums_1.BadgeStyle.BrandWillard:
          case enums_1.BadgeStyle.BrandZirconium:
          case enums_1.BadgeStyle.BrandGrotti2:
          case enums_1.BadgeStyle.BrandLcc:
          case enums_1.BadgeStyle.BrandProgen2:
          case enums_1.BadgeStyle.BrandRune:
            return selected ? enabled ? utils_1.Color.black : utils_1.Color.fromRgb(50, 50, 50) : enabled ? utils_1.Color.white : utils_1.Color.fromRgb(109, 109, 109);
          case enums_1.BadgeStyle.GlobeBlue:
            return enabled ? utils_1.Color.fromRgb(10, 103, 166) : utils_1.Color.fromRgb(11, 62, 117);
          case enums_1.BadgeStyle.GlobeGreen:
            return enabled ? utils_1.Color.fromRgb(10, 166, 85) : utils_1.Color.fromRgb(5, 71, 22);
          case enums_1.BadgeStyle.GlobeOrange:
            return enabled ? utils_1.Color.fromRgb(232, 145, 14) : utils_1.Color.fromRgb(133, 77, 12);
          case enums_1.BadgeStyle.GlobeRed:
            return enabled ? utils_1.Color.fromRgb(207, 43, 31) : utils_1.Color.fromRgb(110, 7, 7);
          case enums_1.BadgeStyle.GlobeYellow:
            return enabled ? utils_1.Color.fromRgb(232, 207, 14) : utils_1.Color.fromRgb(131, 133, 12);
          default:
            return enabled ? utils_1.Color.white : utils_1.Color.fromRgb(109, 109, 109);
        }
      }
      setVerticalPosition(y) {
        const yOffset = y + this.offset.Y;
        this.rectangle.pos.Y = yOffset + 144;
        this.selectedSprite.pos.Y = yOffset + 144;
        this.text.pos.Y = yOffset + 147;
        this.badgeLeft.pos.Y = yOffset + 142 + UIMenuItem.getBadgeSpriteHeightOffset(this.badgeLeft);
        this.badgeRight.pos.Y = yOffset + 142 + UIMenuItem.getBadgeSpriteHeightOffset(this.badgeRight);
        this.labelText.pos.Y = yOffset + 148;
      }
      draw() {
        if (this.selected) {
          this.selectedSprite.size.width = 431 + this.parent.WidthOffset;
          this.selectedSprite.pos.X = this.offset.X;
          this.selectedSprite.draw(__1.Menu.screenResolution);
        } else {
          this.rectangle.size.width = 431 + this.parent.WidthOffset;
          this.rectangle.pos.X = this.offset.X;
          this.rectangle.color = this.hovered ? UIMenuItem.defaultHoveredBackColor : this._backColor;
          this.rectangle.draw(void 0, __1.Menu.screenResolution);
        }
        this.text.color = this.enabled ? this.selected ? this._highlightedForeColor : this.hovered ? UIMenuItem.defaultHoveredForeColor : this._foreColor : new utils_1.Color(255, 163, 159, 148);
        if (this.supportsLeftBadge && this._leftBadge !== enums_1.BadgeStyle.None) {
          const widthOffset = UIMenuItem.getBadgeSpriteWidthOffset(this.badgeLeft);
          this.badgeLeft.pos.X = this.offset.X + widthOffset;
          this.text.pos.X = this.offset.X + 40;
          this.badgeLeft.textureName = this.badgeToTextureName(this._leftBadge);
          this.badgeLeft.color = this.badgeToColor(this._leftBadge);
          this.badgeLeft.draw(__1.Menu.screenResolution);
        } else {
          this.text.pos.X = this.offset.X + 8;
        }
        if (this.supportsRightBadge && this._rightBadge !== enums_1.BadgeStyle.None) {
          this.labelText.pos.X = -40;
          const widthOffset = UIMenuItem.getBadgeSpriteWidthOffset(this.badgeRight);
          this.badgeRight.pos.X = 431 + this.offset.X + this.parent.WidthOffset;
          this.badgeRight.pos.X -= this.badgeRight.size.width + widthOffset;
          this.badgeRight.textureName = this.badgeToTextureName(this._rightBadge);
          this.badgeRight.color = this.badgeToColor(this._rightBadge);
          this.badgeRight.draw(__1.Menu.screenResolution);
        } else {
          this.labelText.pos.X = -11;
        }
        if (this.supportsRightLabel && this.labelText.caption !== "") {
          this.labelText.pos.X += 431 + this.offset.X + this.parent.WidthOffset;
          this.labelText.color = this.text.color;
          this.labelText.draw(void 0, __1.Menu.screenResolution);
        }
        this.text.draw(void 0, __1.Menu.screenResolution);
      }
    };
    exports.UIMenuItem = UIMenuItem;
    UIMenuItem.defaultBackColor = utils_1.Color.empty;
    UIMenuItem.defaultHighlightedBackColor = utils_1.Color.white;
    UIMenuItem.defaultHoveredBackColor = new utils_1.Color(20, 255, 255, 255);
    UIMenuItem.defaultForeColor = utils_1.Color.whiteSmoke;
    UIMenuItem.defaultHoveredForeColor = UIMenuItem.defaultForeColor;
    UIMenuItem.defaultHighlightedForeColor = utils_1.Color.black;
  }
});

// ../../node_modules/fivem-js/lib/ui/menu/items/UIMenuCheckboxItem.js
var require_UIMenuCheckboxItem = __commonJS({
  "../../node_modules/fivem-js/lib/ui/menu/items/UIMenuCheckboxItem.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.UIMenuCheckboxItem = void 0;
    var __1 = require_ui();
    var utils_1 = require_utils();
    var _1 = require_items();
    var enums_1 = require_enums();
    var UIMenuCheckboxItem = class extends _1.UIMenuItem {
      constructor(text, checked = false, description, style = null) {
        super(text, description);
        this.checkboxChanged = new utils_1.LiteEvent();
        this.supportsRightBadge = false;
        this.supportsRightLabel = false;
        this._checked = false;
        this._style = enums_1.CheckboxStyle.Tick;
        this._checkboxSprite = new __1.Sprite("commonmenu", "", new utils_1.Point(410, 95), new utils_1.Size(50, 50));
        this.Checked = checked;
        this.Style = style;
      }
      get Checked() {
        return this._checked;
      }
      set Checked(value) {
        this._checked = value || false;
      }
      get Style() {
        return this._style;
      }
      set Style(value) {
        this._style = Number(value);
      }
      setVerticalPosition(y) {
        super.setVerticalPosition(y);
        this._checkboxSprite.pos.Y = y + 138 + this.offset.Y;
      }
      draw() {
        super.draw();
        this._checkboxSprite.pos.X = 380 + this.offset.X + this.parent.WidthOffset;
        this._checkboxSprite.textureName = this._getSpriteName();
        this._checkboxSprite.color = this._getSpriteColor();
        this._checkboxSprite.draw(__1.Menu.screenResolution);
      }
      _getSpriteName() {
        let name = "blank";
        if (this._checked) {
          switch (this._style) {
            case enums_1.CheckboxStyle.Tick:
              name = "tick";
              break;
            case enums_1.CheckboxStyle.Cross:
              name = "cross";
              break;
          }
        }
        return `shop_box_${name}${this.selected ? "b" : ""}`;
      }
      _getSpriteColor() {
        return this.enabled ? utils_1.Color.white : utils_1.Color.fromRgb(109, 109, 109);
      }
    };
    exports.UIMenuCheckboxItem = UIMenuCheckboxItem;
  }
});

// ../../node_modules/fivem-js/lib/ui/menu/items/UIMenuListItem.js
var require_UIMenuListItem = __commonJS({
  "../../node_modules/fivem-js/lib/ui/menu/items/UIMenuListItem.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.UIMenuListItem = void 0;
    var __1 = require_ui();
    var enums_1 = require_enums();
    var utils_1 = require_utils();
    var _1 = require_items();
    var UIMenuListItem = class extends _1.UIMenuItem {
      constructor(text, items, startIndex = 0, description, arrowOnlyOnSelected = true) {
        super(text, description);
        this.listChanged = new utils_1.LiteEvent();
        this.listSelected = new utils_1.LiteEvent();
        this.supportsRightBadge = false;
        this.supportsRightLabel = false;
        this._index = 0;
        this._items = [];
        this._leftArrow = new __1.Sprite("commonmenu", "arrowleft", new utils_1.Point(), new utils_1.Size(30, 30));
        this._rightArrow = new __1.Sprite("commonmenu", "arrowright", new utils_1.Point(), new utils_1.Size(30, 30));
        this._itemText = new __1.Text("", new utils_1.Point(), 0.35, utils_1.Color.white, enums_1.Font.ChaletLondon, enums_1.Alignment.Right);
        this.ArrowOnlyOnSelected = arrowOnlyOnSelected;
        this.Items = items;
        this.Index = startIndex;
      }
      get Items() {
        return this._items;
      }
      set Items(value) {
        if (!value) {
          throw new Error("Items can't be null");
        }
        this._items = value;
      }
      get SelectedItem() {
        return this.Items[this.Index];
      }
      set SelectedItem(value) {
        const index = this.Items.findIndex((i) => i.id === value.id);
        if (index >= 0) {
          this.Index = index;
        }
      }
      get SelectedValue() {
        const item = this.SelectedItem;
        return item ? item.value : null;
      }
      get Index() {
        return this._index % this.Items.length;
      }
      set Index(value) {
        if (!this._items.length) {
          return;
        }
        value = value < 0 ? this._items.length - 1 : value > this._items.length - 1 ? 0 : value;
        this._index = value;
        delete this._textWidth;
      }
      get ArrowOnlyOnSelected() {
        return this._arrowOnlyOnSelected;
      }
      set ArrowOnlyOnSelected(value) {
        this._arrowOnlyOnSelected = value;
      }
      get IsMouseInBoundsOfLeftArrow() {
        return this.parent.isMouseInBounds(this._leftArrow.pos, this._leftArrow.size);
      }
      get IsMouseInBoundsOfRightArrow() {
        return this.parent.isMouseInBounds(this._rightArrow.pos, this._rightArrow.size);
      }
      setVerticalPosition(y) {
        const yOffset = y + this.offset.Y + 147;
        this._leftArrow.pos.Y = yOffset;
        this._rightArrow.pos.Y = yOffset;
        this._itemText.pos.Y = yOffset;
        super.setVerticalPosition(y);
      }
      draw() {
        super.draw();
        if (this._textWidth === void 0) {
          const caption = this._getSelectedItemCaption();
          this._itemText.caption = caption;
          this._textWidth = utils_1.measureString(caption, this._itemText.font, this._itemText.scale, __1.Menu.screenWidth);
        }
        this._rightArrow.pos.X = this.offset.X + this.parent.WidthOffset + 400;
        this._itemText.pos.X = this._rightArrow.pos.X + 5;
        this._itemText.color = this.enabled ? this.selected ? this.HighlightedForeColor : this.ForeColor : new utils_1.Color(255, 163, 159, 148);
        if (this._arrowOnlyOnSelected && !this.selected) {
          this._itemText.pos.X += this._rightArrow.size.width / 2;
        } else {
          this._leftArrow.color = this._itemText.color;
          this._rightArrow.color = this._itemText.color;
          this._leftArrow.pos.X = this._itemText.pos.X - this._textWidth - this._leftArrow.size.width + 5;
          this._leftArrow.draw(__1.Menu.screenResolution);
          this._rightArrow.draw(__1.Menu.screenResolution);
        }
        this._itemText.draw(void 0, __1.Menu.screenResolution);
      }
      _getSelectedItemCaption() {
        const item = this.SelectedItem;
        return item ? item.name : "";
      }
    };
    exports.UIMenuListItem = UIMenuListItem;
  }
});

// ../../node_modules/fivem-js/lib/ui/menu/items/UIMenuSeparatorItem.js
var require_UIMenuSeparatorItem = __commonJS({
  "../../node_modules/fivem-js/lib/ui/menu/items/UIMenuSeparatorItem.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.UIMenuSeparatorItem = void 0;
    var _1 = require_items();
    var enums_1 = require_enums();
    var __1 = require_menu();
    var UIMenuSeparatorItem = class extends _1.UIMenuItem {
      constructor(text) {
        super(text);
        this.supportsDescription = false;
        this.supportsPanels = false;
        this.supportsLeftBadge = false;
        this.supportsRightBadge = false;
        this.supportsRightLabel = false;
        this.text.alignment = enums_1.Alignment.Centered;
      }
      setVerticalPosition(y) {
        const yOffset = y + this.offset.Y;
        this.rectangle.pos.Y = yOffset + 144;
        this.text.pos.Y = yOffset + 147;
      }
      draw() {
        const width = 431 + this.parent.WidthOffset;
        this.rectangle.size.width = width;
        this.rectangle.pos.X = this.offset.X;
        this.rectangle.draw(void 0, __1.Menu.screenResolution);
        if (this.text.caption !== "") {
          this.text.pos.X = this.offset.X + width / 2;
          this.text.draw(void 0, __1.Menu.screenResolution);
        }
      }
    };
    exports.UIMenuSeparatorItem = UIMenuSeparatorItem;
  }
});

// ../../node_modules/fivem-js/lib/ui/menu/items/UIMenuSliderItem.js
var require_UIMenuSliderItem = __commonJS({
  "../../node_modules/fivem-js/lib/ui/menu/items/UIMenuSliderItem.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.UIMenuSliderItem = void 0;
    var __1 = require_ui();
    var _1 = require_items();
    var utils_1 = require_utils();
    var enums_1 = require_enums();
    var UIMenuSliderItem = class extends _1.UIMenuItem {
      constructor(text, items, startIndex = 0, description, showDivider = false, arrowOnlyOnSelected = false) {
        super(text, description);
        this.sliderChanged = new utils_1.LiteEvent();
        this.sliderSelected = new utils_1.LiteEvent();
        this.supportsRightBadge = false;
        this.supportsRightLabel = false;
        this._leftSliderBadge = enums_1.BadgeStyle.None;
        this._rightSliderBadge = enums_1.BadgeStyle.None;
        this._background = new __1.Rectangle(new utils_1.Point(), new utils_1.Size(150, 9), new utils_1.Color(255, 4, 32, 57));
        this._slider = new __1.Rectangle(new utils_1.Point(), new utils_1.Size(75, 9), new utils_1.Color(255, 57, 116, 200));
        this._divider = new __1.Rectangle(new utils_1.Point(), new utils_1.Size(2.5, 20), utils_1.Color.whiteSmoke);
        this._leftArrow = new __1.Sprite("commonmenutu", "arrowleft", new utils_1.Point(), new utils_1.Size(15, 15));
        this._rightArrow = new __1.Sprite("commonmenutu", "arrowright", new utils_1.Point(), new utils_1.Size(15, 15));
        this._leftSliderBadgeSprite = new __1.Sprite("", "");
        this._rightSliderBadgeSprite = new __1.Sprite("", "");
        this.ArrowOnlyOnSelected = arrowOnlyOnSelected;
        this.ShowDivider = showDivider;
        this.Items = items;
        this.Index = startIndex;
      }
      get Index() {
        return this._index % this._items.length;
      }
      set Index(value) {
        this._index = 1e8 - 1e8 % this._items.length + value;
      }
      get Item() {
        return this._items[this.Index];
      }
      get Items() {
        return this._items;
      }
      set Items(value) {
        this._items = value || [];
      }
      get ShowDivider() {
        return this._showDivider;
      }
      set ShowDivider(value) {
        this._showDivider = value;
      }
      get ArrowOnlyOnSelected() {
        return this._arrowOnlyOnSelected;
      }
      set ArrowOnlyOnSelected(value) {
        this._arrowOnlyOnSelected = value;
      }
      get BackgroundColor() {
        return this._background.color;
      }
      set BackgroundColor(value) {
        this._background.color = value || new utils_1.Color(255, 4, 32, 57);
      }
      get SliderColor() {
        return this._slider.color;
      }
      set SliderColor(value) {
        this._slider.color = value || new utils_1.Color(255, 57, 116, 200);
      }
      get DividerColor() {
        return this._divider.color;
      }
      set DividerColor(value) {
        this._divider.color = value || utils_1.Color.whiteSmoke;
      }
      get LeftSliderBadge() {
        return this._leftSliderBadge;
      }
      set LeftSliderBadge(value) {
        value = Number(value);
        this._leftSliderBadge = value;
        this._leftSliderBadgeSprite.TextureDict = _1.UIMenuItem.badgeToTextureDict(value);
        this._leftSliderBadgeSprite.size = _1.UIMenuItem.getBadgeSize(value);
      }
      get RightSliderBadge() {
        return this._rightSliderBadge;
      }
      set RightSliderBadge(value) {
        value = Number(value);
        this._rightSliderBadge = value;
        this._rightSliderBadgeSprite.TextureDict = _1.UIMenuItem.badgeToTextureDict(value);
        this._rightSliderBadgeSprite.size = _1.UIMenuItem.getBadgeSize(value);
      }
      get IsMouseInBoundsOfLeftArrow() {
        return this.parent.isMouseInBounds(this._leftArrow.pos, this._leftArrow.size);
      }
      get IsMouseInBoundsOfRightArrow() {
        return this.parent.isMouseInBounds(this._rightArrow.pos, this._rightArrow.size);
      }
      indexToItem(index) {
        return this._items[index];
      }
      setVerticalPosition(y) {
        const yOffset = y + this.offset.Y;
        this._background.pos.Y = yOffset + 158.5;
        this._slider.pos.Y = yOffset + 158.5;
        this._divider.pos.Y = yOffset + 153;
        this._leftArrow.pos.Y = yOffset + 155.5;
        this._rightArrow.pos.Y = yOffset + 155.5;
        this._leftSliderBadgeSprite.pos.Y = yOffset + 142 + _1.UIMenuItem.getBadgeSpriteHeightOffset(this._leftSliderBadgeSprite);
        this._rightSliderBadgeSprite.pos.Y = yOffset + 142 + _1.UIMenuItem.getBadgeSpriteHeightOffset(this._rightSliderBadgeSprite);
        super.setVerticalPosition(y);
      }
      draw() {
        super.draw();
        const showArrows = !this._arrowOnlyOnSelected || this.selected;
        const x = this.offset.X + this.parent.WidthOffset;
        this._background.pos.X = 431 + x - this._background.size.width;
        if (showArrows) {
          this._background.pos.X -= this._rightArrow.size.width / 2;
          this._leftSliderBadgeSprite.pos.X = -this._leftArrow.size.width / 2;
        } else {
          this._leftSliderBadgeSprite.pos.X = 0;
        }
        if (this._rightSliderBadge !== enums_1.BadgeStyle.None) {
          const widthOffset = _1.UIMenuItem.getBadgeSpriteWidthOffset(this._rightSliderBadgeSprite);
          this._background.pos.X -= 40;
          this._rightSliderBadgeSprite.pos.X = 431 + x;
          this._rightSliderBadgeSprite.pos.X -= this._rightSliderBadgeSprite.size.width + widthOffset;
          this._rightSliderBadgeSprite.textureName = this.badgeToTextureName(this._rightSliderBadge);
          this._rightSliderBadgeSprite.color = this.badgeToColor(this._rightSliderBadge);
          this._rightSliderBadgeSprite.draw(__1.Menu.screenResolution);
        } else {
          this._background.pos.X -= this._rightArrow.size.width / 2;
        }
        if (this._leftSliderBadge !== enums_1.BadgeStyle.None) {
          const widthOffset = _1.UIMenuItem.getBadgeSpriteWidthOffset(this._leftSliderBadgeSprite);
          this._leftSliderBadgeSprite.pos.X -= this._leftSliderBadgeSprite.size.width + widthOffset;
          this._leftSliderBadgeSprite.pos.X += this._background.pos.X;
          this._leftSliderBadgeSprite.textureName = this.badgeToTextureName(this._leftSliderBadge);
          this._leftSliderBadgeSprite.color = this.badgeToColor(this._leftSliderBadge);
          this._leftSliderBadgeSprite.draw(__1.Menu.screenResolution);
        }
        const sliderXOffset = (this._background.size.width - this._slider.size.width) / (this._items.length - 1) * this.Index;
        this._slider.pos.X = this._background.pos.X + sliderXOffset;
        this._leftArrow.color = this.enabled ? this.selected ? utils_1.Color.black : utils_1.Color.whiteSmoke : new utils_1.Color(255, 163, 159, 148);
        this._rightArrow.color = this._leftArrow.color;
        this._background.draw(void 0, __1.Menu.screenResolution);
        this._slider.draw(void 0, __1.Menu.screenResolution);
        if (showArrows) {
          this._leftArrow.pos.X = this._background.pos.X - 15;
          this._rightArrow.pos.X = this._background.pos.X + this._background.size.width;
          this._leftArrow.draw(__1.Menu.screenResolution);
          this._rightArrow.draw(__1.Menu.screenResolution);
        }
        if (this._showDivider) {
          this._divider.pos.X = this._background.pos.X + this._background.size.width / 2;
          this._divider.draw(void 0, __1.Menu.screenResolution);
        }
      }
    };
    exports.UIMenuSliderItem = UIMenuSliderItem;
  }
});

// ../../node_modules/fivem-js/lib/ui/menu/items/index.js
var require_items = __commonJS({
  "../../node_modules/fivem-js/lib/ui/menu/items/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.UIMenuSliderItem = exports.UIMenuSeparatorItem = exports.UIMenuListItem = exports.UIMenuCheckboxItem = exports.UIMenuItem = void 0;
    __exportStar(require_panels(), exports);
    var UIMenuItem_1 = require_UIMenuItem();
    Object.defineProperty(exports, "UIMenuItem", { enumerable: true, get: function() {
      return UIMenuItem_1.UIMenuItem;
    } });
    var UIMenuCheckboxItem_1 = require_UIMenuCheckboxItem();
    Object.defineProperty(exports, "UIMenuCheckboxItem", { enumerable: true, get: function() {
      return UIMenuCheckboxItem_1.UIMenuCheckboxItem;
    } });
    var UIMenuListItem_1 = require_UIMenuListItem();
    Object.defineProperty(exports, "UIMenuListItem", { enumerable: true, get: function() {
      return UIMenuListItem_1.UIMenuListItem;
    } });
    var UIMenuSeparatorItem_1 = require_UIMenuSeparatorItem();
    Object.defineProperty(exports, "UIMenuSeparatorItem", { enumerable: true, get: function() {
      return UIMenuSeparatorItem_1.UIMenuSeparatorItem;
    } });
    var UIMenuSliderItem_1 = require_UIMenuSliderItem();
    Object.defineProperty(exports, "UIMenuSliderItem", { enumerable: true, get: function() {
      return UIMenuSliderItem_1.UIMenuSliderItem;
    } });
  }
});

// ../../node_modules/fivem-js/lib/ui/menu/modules/ListItem.js
var require_ListItem = __commonJS({
  "../../node_modules/fivem-js/lib/ui/menu/modules/ListItem.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ListItem = void 0;
    var utils_1 = require_utils();
    var ListItem = class {
      constructor(name, value = null) {
        this.id = utils_1.uuidv4();
        this.name = name;
        this.value = value;
      }
    };
    exports.ListItem = ListItem;
  }
});

// ../../node_modules/fivem-js/lib/ui/menu/modules/index.js
var require_modules = __commonJS({
  "../../node_modules/fivem-js/lib/ui/menu/modules/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ListItem = void 0;
    var ListItem_1 = require_ListItem();
    Object.defineProperty(exports, "ListItem", { enumerable: true, get: function() {
      return ListItem_1.ListItem;
    } });
  }
});

// ../../node_modules/fivem-js/lib/ui/menu/Menu.js
var require_Menu = __commonJS({
  "../../node_modules/fivem-js/lib/ui/menu/Menu.js"(exports) {
    "use strict";
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Menu = void 0;
    var __1 = require_ui();
    var __2 = require_lib();
    var enums_1 = require_enums();
    var utils_1 = require_utils();
    var items_1 = require_items();
    var Menu = class {
      constructor(title, subtitle, offset = new utils_1.Point(), spriteLibrary = "commonmenu", spriteName = "interaction_bgd") {
        this.id = utils_1.uuidv4();
        this.visible = false;
        this.items = [];
        this.children = /* @__PURE__ */ new Map();
        this.menuOpen = new utils_1.LiteEvent();
        this.menuClose = new utils_1.LiteEvent();
        this.menuChange = new utils_1.LiteEvent();
        this.indexChange = new utils_1.LiteEvent();
        this.listChange = new utils_1.LiteEvent();
        this.sliderChange = new utils_1.LiteEvent();
        this.checkboxChange = new utils_1.LiteEvent();
        this.listSelect = new utils_1.LiteEvent();
        this.sliderSelect = new utils_1.LiteEvent();
        this.itemSelect = new utils_1.LiteEvent();
        this.panelActivated = new utils_1.LiteEvent();
        this._counterPretext = "";
        this._navigationDelay = 140;
        this._lastUpDownNavigation = 0;
        this._lastLeftRightNavigation = 0;
        this._activeItem = 1e3;
        this._widthOffset = 0;
        this._drawOffset = new utils_1.Point();
        this._justOpened = true;
        this._mousePressed = false;
        this._minItem = 0;
        this._maxItem = 9;
        this._maxItemsOnScreen = this._maxItem;
        this._controls = new __1.MenuControls();
        this._settings = new __1.MenuSettings();
        this._offset = offset;
        this._mainMenu = new __1.Container(new utils_1.Point(), new utils_1.Size(700, 500), utils_1.Color.transparent);
        this._logo = new __1.Sprite(spriteLibrary || "", spriteName || "", new utils_1.Point(this._offset.X, this._offset.Y), new utils_1.Size(431, 107));
        this._mainMenu.addItem([
          this._title = new __1.Text(title || "", new utils_1.Point(431 / 2 + this._offset.X, 20 + this._offset.Y), 1.15, utils_1.Color.white, 1, enums_1.Alignment.Centered),
          this._subtitleResRectangle = new __1.Rectangle(new utils_1.Point(this._offset.X, 107 + this._offset.Y), new utils_1.Size(431, 37), utils_1.Color.black),
          this._subtitle = new __1.Text(subtitle || "", new utils_1.Point(8 + this._offset.X, 110 + this._offset.Y), 0.35, utils_1.Color.white, 0, enums_1.Alignment.Left)
        ]);
        if (this._subtitle.caption.startsWith("~")) {
          this._counterPretext = this._subtitle.caption.substr(0, 3);
        }
        this._counterText = new __1.Text("", new utils_1.Point(425 + this._offset.X, 110 + this._offset.Y), 0.35, utils_1.Color.white, 0, enums_1.Alignment.Right);
        this._upAndDownSprite = new __1.Sprite("commonmenu", "shop_arrows_upanddown", new utils_1.Point(), new utils_1.Size(50, 50));
        const extraRectanglePos = new utils_1.Point(this._offset.X);
        const extraRectangleSize = new utils_1.Size(431, 18);
        const extraRectangleColor = new utils_1.Color(200, 0, 0, 0);
        this._extraRectangleUp = new __1.Rectangle(extraRectanglePos, extraRectangleSize, extraRectangleColor);
        this._extraRectangleDown = new __1.Rectangle(Object.assign({}, extraRectanglePos), Object.assign({}, extraRectangleSize), Object.assign({}, extraRectangleColor));
        this._descriptionBar = new __1.Rectangle(new utils_1.Point(this._offset.X), new utils_1.Size(431, 4), utils_1.Color.black);
        this._descriptionRectangle = new __1.Sprite("commonmenu", "gradient_bgd", new utils_1.Point(this._offset.X), new utils_1.Size(431, 30));
        this._descriptionText = new __1.Text("Description", new utils_1.Point(this._offset.X + 8), 0.35, utils_1.Color.white, enums_1.Font.ChaletLondon, enums_1.Alignment.Left);
        this._background = new __1.Sprite("commonmenu", "gradient_bgd", new utils_1.Point(this._offset.X, 144 + this._offset.Y), new utils_1.Size(290, 25));
        setTick(() => {
          this._render();
        });
      }
      set Title(text) {
        this._title.caption = text;
      }
      get Title() {
        return this._title.caption;
      }
      set Subtitle(text) {
        this._subtitle.caption = text;
      }
      get Subtitle() {
        return this._subtitle.caption;
      }
      set SubtitleForeColor(color) {
        this._subtitle.color = color;
      }
      get SubtitleForeColor() {
        return this._subtitle.color;
      }
      set SubtitleBackColor(color) {
        this._subtitleResRectangle.color = color;
      }
      get SubtitleBackColor() {
        return this._subtitleResRectangle.color;
      }
      get CurrentItem() {
        return this.items[this._activeItem % this.items.length];
      }
      set CurrentItem(value) {
        const index = this.items.findIndex((i) => i.id === value.id);
        if (index !== -1) {
          this.CurrentSelection = index;
        }
      }
      get CurrentSelection() {
        return this._activeItem % this.items.length;
      }
      set CurrentSelection(v) {
        this.CurrentItem.selected = false;
        this._activeItem = 1e3 - 1e3 % this.items.length + v;
        const currentSelection = this.CurrentSelection;
        if (currentSelection > this._maxItem) {
          this._maxItem = currentSelection;
          this._minItem = currentSelection - this._maxItemsOnScreen;
        } else if (currentSelection < this._minItem) {
          this._maxItem = this._maxItemsOnScreen + currentSelection;
          this._minItem = currentSelection;
        }
      }
      get WidthOffset() {
        return this._widthOffset;
      }
      set WidthOffset(widthOffset) {
        this._widthOffset = widthOffset;
        const width = 431 + widthOffset;
        if (this._logo) {
          this._logo.size.width = width;
        }
        this._mainMenu.items[0].pos.X = width / 2 + this._offset.X;
        if (this._counterText) {
          this._counterText.pos.X = 425 + this._offset.X + widthOffset;
        }
        if (this._subtitleResRectangle) {
          this._subtitleResRectangle.size.width = width;
        }
        this._extraRectangleUp.size.width = width;
        this._extraRectangleDown.size.width = width;
        this._upAndDownSprite.pos.X = 190 + this._offset.X + widthOffset / 2;
        this._descriptionBar.size.width = width;
        this._descriptionRectangle.size.width = width;
        this.items.forEach((item) => {
          item.formatDescription();
        });
      }
      get DrawOffset() {
        return this.Settings.scaleWithSafezone ? this._drawOffset : new utils_1.Point();
      }
      get Controls() {
        return this._controls;
      }
      get Settings() {
        return this._settings;
      }
      addNewSubMenu(text, description, inherit = true) {
        let menu;
        if (inherit) {
          menu = new Menu(this._title.caption, text, this._offset, this._logo.TextureDict, this._logo.textureName);
          menu.WidthOffset = this.WidthOffset;
          menu._settings = this._settings;
        } else {
          menu = new Menu(this._title.caption, text);
        }
        const item = new items_1.UIMenuItem(text, description);
        this.addItem(item);
        this.bindMenuToItem(menu, item);
        return menu;
      }
      addSubMenu(subMenuToAdd, text, description, inherit = true) {
        if (inherit) {
          subMenuToAdd.WidthOffset = this.WidthOffset;
          subMenuToAdd._settings = this._settings;
        }
        const item = new items_1.UIMenuItem(text, description);
        this.addItem(item);
        this.bindMenuToItem(subMenuToAdd, item);
        return subMenuToAdd;
      }
      addItem(items) {
        if (!Array.isArray(items)) {
          items = [items];
        }
        items.forEach((item) => {
          item.offset = this._offset;
          item.parent = this;
          item.formatDescription();
        });
        this.items.push(...items);
        this.refreshIndex();
      }
      removeItem(itemOrIndex) {
        if (typeof itemOrIndex === "number") {
          this.items = this.items.filter((i, index) => index !== itemOrIndex);
        } else {
          this.items = this.items.filter((i) => i.id !== itemOrIndex.id);
        }
        this.refreshIndex();
      }
      bindMenuToItem(menuToBind, itemToBindTo) {
        menuToBind.parentMenu = this;
        menuToBind.parentItem = itemToBindTo;
        this.children.set(itemToBindTo.id, menuToBind);
      }
      releaseMenuFromItem(releaseFrom) {
        if (!this.children.has(releaseFrom.id)) {
          return false;
        }
        const menu = this.children.get(releaseFrom.id);
        menu.parentItem = null;
        menu.parentMenu = null;
        this.children.delete(releaseFrom.id);
        return true;
      }
      refreshIndex() {
        if (this.items.length === 0) {
          this._activeItem = 1e3;
          this._maxItem = this._maxItemsOnScreen;
          this._minItem = 0;
          return;
        }
        for (const item of this.items) {
          item.selected = false;
        }
        this._activeItem = 1e3 - 1e3 % this.items.length;
        this._maxItem = this._maxItemsOnScreen;
        this._minItem = 0;
        if (this.CurrentItem instanceof __1.UIMenuSeparatorItem && this._isThereAnyItemExcludingSeparators()) {
          this.goDown();
        }
      }
      clear() {
        this.items = [];
        this._recalculateUpAndDown();
        this._recalculateDescriptionPosition();
      }
      open() {
        this._playSoundAndReleaseId(this.Settings.audio.back, this.Settings.audio.library);
        this.visible = true;
        this._justOpened = true;
        if (!this.parentMenu && this.Settings.resetCursorOnOpen) {
          __1.Hud.CursorPosition = new utils_1.Point(0.5, 0.5);
          __1.Hud.CursorSprite = __2.CursorSprite.Normal;
        }
        this.menuOpen.emit();
      }
      close() {
        this._playSoundAndReleaseId(this.Settings.audio.back, this.Settings.audio.library);
        this.visible = false;
        this.refreshIndex();
        this.menuClose.emit();
      }
      goLeft() {
        const item = this.CurrentItem;
        if (item instanceof items_1.UIMenuListItem) {
          if (!item.Items.length) {
            return;
          }
          item.Index -= 1;
          this._playSoundAndReleaseId(this.Settings.audio.leftRight, this.Settings.audio.library);
          this.listChange.emit(item, item.Index, item.SelectedItem);
          item.listChanged.emit(item.Index, item.SelectedItem);
        } else if (item instanceof items_1.UIMenuSliderItem) {
          if (!item.Items.length) {
            return;
          }
          item.Index -= 1;
          this._playSoundAndReleaseId(this.Settings.audio.leftRight, this.Settings.audio.library);
          this.sliderChange.emit(item, item.Index, item.indexToItem(item.Index));
          item.sliderChanged.emit(item.Index, item.indexToItem(item.Index));
        }
      }
      goRight() {
        const item = this.CurrentItem;
        if (item instanceof items_1.UIMenuListItem) {
          if (item.Items.length === 0) {
            return;
          }
          item.Index += 1;
          this._playSoundAndReleaseId(this.Settings.audio.leftRight, this.Settings.audio.library);
          this.listChange.emit(item, item.Index, item.SelectedItem);
          item.listChanged.emit(item.Index, item.SelectedItem);
        } else if (item instanceof items_1.UIMenuSliderItem) {
          item.Index += 1;
          this._playSoundAndReleaseId(this.Settings.audio.leftRight, this.Settings.audio.library);
          this.sliderChange.emit(item, item.Index, item.indexToItem(item.Index));
          item.sliderChanged.emit(item.Index, item.indexToItem(item.Index));
        }
      }
      selectItem() {
        const item = this.CurrentItem;
        if (!item.enabled) {
          this._playSoundAndReleaseId(this.Settings.audio.error, this.Settings.audio.library);
          return;
        }
        this._playSoundAndReleaseId(this.Settings.audio.select, this.Settings.audio.library);
        if (item instanceof items_1.UIMenuCheckboxItem) {
          item.Checked = !item.Checked;
          this.checkboxChange.emit(item, item.Checked);
          item.checkboxChanged.emit(item.Checked);
        } else if (item instanceof items_1.UIMenuListItem) {
          this.listSelect.emit(item, item.Index, item.SelectedItem);
          item.listSelected.emit(item.Index, item.SelectedItem);
        } else if (item instanceof items_1.UIMenuSliderItem) {
          this.sliderSelect.emit(item, item.Index, item.indexToItem(item.Index));
          item.sliderSelected.emit(item.Index, item.indexToItem(item.Index));
        } else {
          this.itemSelect.emit(item, this.CurrentSelection);
          item.activated.emit();
          if (this.children.has(item.id)) {
            const subMenu = this.children.get(item.id);
            this.visible = false;
            subMenu.visible = true;
            subMenu._justOpened = true;
            subMenu.menuOpen.emit();
            this.menuChange.emit(subMenu, true);
          }
        }
        item.fireEvent();
      }
      isMouseInBounds(pos, size, drawOffset = true) {
        const resolution = Menu.screenResolution;
        const cX = GetControlNormal(0, enums_1.Control.CursorX) * resolution.width / resolution.width;
        const cY = GetControlNormal(0, enums_1.Control.CursorY) * resolution.height / resolution.height;
        let x = pos.X / resolution.width;
        let y = pos.Y / resolution.height;
        const w = size.width / resolution.width;
        const h = size.height / resolution.height;
        if (drawOffset) {
          x += this._drawOffset.X;
          y += this._drawOffset.Y;
        }
        return cX >= x && cX <= x + w && cY > y && cY < y + h;
      }
      goUp() {
        this.CurrentItem.selected = false;
        if (this.items.length > this._maxItemsOnScreen + 1) {
          if (this.CurrentSelection <= this._minItem) {
            if (this.CurrentSelection === 0) {
              this._minItem = this.items.length - this._maxItemsOnScreen - 1;
              this._maxItem = this.items.length - 1;
              this._activeItem = 1e3 - 1e3 % this.items.length;
              this._activeItem += this.items.length - 1;
            } else {
              this._minItem--;
              this._maxItem--;
              this._activeItem--;
            }
          } else {
            this._activeItem--;
          }
        } else {
          this._activeItem--;
        }
        if (this.CurrentItem instanceof __1.UIMenuSeparatorItem && this._isThereAnyItemExcludingSeparators()) {
          this.goUp();
        } else {
          this.CurrentItem.selected = true;
          this._playSoundAndReleaseId(this.Settings.audio.upDown, this.Settings.audio.library);
          this.indexChange.emit(this.CurrentSelection);
        }
      }
      goDown() {
        this.CurrentItem.selected = false;
        if (this.items.length > this._maxItemsOnScreen + 1) {
          if (this.CurrentSelection >= this._maxItem) {
            if (this.CurrentSelection === this.items.length - 1) {
              this._minItem = 0;
              this._maxItem = this._maxItemsOnScreen;
              this._activeItem = 1e3 - 1e3 % this.items.length;
            } else {
              this._minItem++;
              this._maxItem++;
              this._activeItem++;
            }
          } else {
            this._activeItem++;
          }
        } else {
          this._activeItem++;
        }
        if (this.CurrentItem instanceof __1.UIMenuSeparatorItem && this._isThereAnyItemExcludingSeparators()) {
          this.goDown();
        } else {
          this.CurrentItem.selected = true;
          this._playSoundAndReleaseId(this.Settings.audio.upDown, this.Settings.audio.library);
          this.indexChange.emit(this.CurrentSelection);
        }
      }
      goBack() {
        this._playSoundAndReleaseId(this.Settings.audio.back, this.Settings.audio.library);
        this.visible = false;
        if (this.parentMenu != null) {
          this.parentMenu.visible = true;
          this.parentMenu._justOpened = true;
          this.parentMenu.menuOpen.emit();
          this.menuChange.emit(this.parentMenu, false);
        }
        this.menuClose.emit();
      }
      _processMouse() {
        if (!this.visible || this._justOpened || !this.items.length || __2.Game.CurrentInputMode === __2.InputMode.GamePad || !this.Settings.mouseControlsEnabled) {
          __2.Game.enableControlThisFrame(0, enums_1.Control.LookUp);
          __2.Game.enableControlThisFrame(0, enums_1.Control.LookDown);
          __2.Game.enableControlThisFrame(0, enums_1.Control.Attack);
          __2.Game.enableControlThisFrame(0, enums_1.Control.Aim);
          return;
        }
        __1.Hud.showCursorThisFrame();
        if (this.Settings.mouseEdgeEnabled) {
          if (this.isMouseInBounds(new utils_1.Point(), new utils_1.Size(30, Menu.screenHeight), false)) {
            __2.GameplayCamera.RelativeHeading += 1;
            __1.Hud.CursorSprite = __2.CursorSprite.LeftArrow;
          } else if (this.isMouseInBounds(new utils_1.Point(Menu.screenWidth - 30), new utils_1.Size(30, Menu.screenHeight), false)) {
            __2.GameplayCamera.RelativeHeading -= 1;
            __1.Hud.CursorSprite = __2.CursorSprite.RightArrow;
          } else {
            __1.Hud.CursorSprite = __2.CursorSprite.Normal;
          }
        }
        if (this._mousePressed) {
          return;
        }
        let hoveredItem, hoveredItemIndex;
        const limit = this.items.length > this._maxItemsOnScreen + 1 ? this._maxItem : this.items.length - 1;
        for (let i = this._minItem; i <= limit; i++) {
          const item = this.items[i];
          if (item instanceof __1.UIMenuSeparatorItem) {
            continue;
          }
          if (!hoveredItem && item.IsMouseInBounds) {
            item.hovered = true;
            hoveredItem = item;
            hoveredItemIndex = i;
          } else {
            item.hovered = false;
          }
        }
        if (hoveredItem && __2.Game.isDisabledControlJustPressed(0, enums_1.Control.Attack)) {
          (() => __awaiter(this, void 0, void 0, function* () {
            this._mousePressed = true;
            if (hoveredItem.selected) {
              if (hoveredItem.enabled) {
                if (hoveredItem instanceof items_1.UIMenuListItem || hoveredItem instanceof items_1.UIMenuSliderItem) {
                  if (hoveredItem.IsMouseInBoundsOfLeftArrow) {
                    this.goLeft();
                  } else if (hoveredItem.IsMouseInBoundsOfRightArrow) {
                    this.goRight();
                  } else {
                    this.selectItem();
                  }
                } else {
                  this.selectItem();
                }
              } else {
                this._playSoundAndReleaseId(this.Settings.audio.error, this.Settings.audio.library);
              }
            } else {
              this._playSoundAndReleaseId(this.Settings.audio.error, this.Settings.audio.library);
              this.CurrentSelection = hoveredItemIndex;
              this.indexChange.emit(this.CurrentSelection);
            }
            yield new Promise((resolve) => setTimeout(resolve, this._navigationDelay));
            while (__2.Game.isDisabledControlPressed(0, enums_1.Control.Attack) && hoveredItem.IsMouseInBounds) {
              if (hoveredItem.selected) {
                if (hoveredItem.enabled) {
                  if (hoveredItem instanceof items_1.UIMenuListItem || hoveredItem instanceof items_1.UIMenuSliderItem) {
                    if (hoveredItem.IsMouseInBoundsOfLeftArrow) {
                      this.goLeft();
                    } else if (hoveredItem.IsMouseInBoundsOfRightArrow) {
                      this.goRight();
                    }
                  }
                } else {
                  this._playSoundAndReleaseId(this.Settings.audio.error, this.Settings.audio.library);
                }
              } else {
                this._playSoundAndReleaseId(this.Settings.audio.error, this.Settings.audio.library);
                this.CurrentSelection = hoveredItemIndex;
                this.indexChange.emit(this.CurrentSelection);
              }
              yield new Promise((resolve) => setTimeout(resolve, 125));
            }
            this._mousePressed = false;
          }))();
        }
        if (this.items.length <= this._maxItemsOnScreen + 1 || this._mousePressed) {
          return;
        }
        if (this.isMouseInBounds(this._extraRectangleUp.pos, this._extraRectangleUp.size)) {
          this._extraRectangleUp.color = utils_1.Color.fromRgb(30, 30, 30);
          if (__2.Game.isDisabledControlJustPressed(0, enums_1.Control.Attack)) {
            (() => __awaiter(this, void 0, void 0, function* () {
              this._mousePressed = true;
              this.goUp();
              yield new Promise((resolve) => setTimeout(resolve, this._navigationDelay));
              while (__2.Game.isDisabledControlPressed(0, enums_1.Control.Attack)) {
                this.goUp();
                yield new Promise((resolve) => setTimeout(resolve, 125));
              }
              this._mousePressed = false;
            }))();
          }
        } else {
          this._extraRectangleUp.color = new utils_1.Color(200, 0, 0, 0);
        }
        if (this._mousePressed) {
          return;
        }
        if (this.isMouseInBounds(this._extraRectangleDown.pos, this._extraRectangleDown.size)) {
          this._extraRectangleDown.color = utils_1.Color.fromRgb(30, 30, 30);
          if (__2.Game.isDisabledControlJustPressed(0, enums_1.Control.Attack)) {
            (() => __awaiter(this, void 0, void 0, function* () {
              this._mousePressed = true;
              this.goDown();
              yield new Promise((resolve) => setTimeout(resolve, this._navigationDelay));
              while (__2.Game.isDisabledControlPressed(0, enums_1.Control.Attack)) {
                this.goDown();
                yield new Promise((resolve) => setTimeout(resolve, 125));
              }
              this._mousePressed = false;
            }))();
          }
        } else {
          this._extraRectangleDown.color = new utils_1.Color(200, 0, 0, 0);
        }
      }
      _processControl() {
        if (!this.visible) {
          return;
        }
        if (this._justOpened) {
          this._justOpened = false;
          return;
        }
        if (this.Controls.back.Enabled && __2.Game.isDisabledControlJustReleased(0, enums_1.Control.PhoneCancel)) {
          this.goBack();
        }
        if (this.items.length === 0) {
          return;
        }
        if (this.Controls.up.Enabled && (__2.Game.isDisabledControlPressed(0, enums_1.Control.PhoneUp) || __2.Game.isDisabledControlPressed(0, enums_1.Control.CursorScrollUp)) && this._lastUpDownNavigation + this._navigationDelay < Date.now()) {
          this._lastUpDownNavigation = Date.now();
          this.goUp();
        }
        if (this.Controls.down.Enabled && (__2.Game.isDisabledControlPressed(0, enums_1.Control.PhoneDown) || __2.Game.isDisabledControlPressed(0, enums_1.Control.CursorScrollDown)) && this._lastUpDownNavigation + this._navigationDelay < Date.now()) {
          this._lastUpDownNavigation = Date.now();
          this.goDown();
        }
        if (this.Controls.left.Enabled && __2.Game.isDisabledControlPressed(0, enums_1.Control.PhoneLeft) && this._lastLeftRightNavigation + this._navigationDelay < Date.now()) {
          this._lastLeftRightNavigation = Date.now();
          this.goLeft();
        }
        if (this.Controls.right.Enabled && __2.Game.isDisabledControlPressed(0, enums_1.Control.PhoneRight) && this._lastLeftRightNavigation + this._navigationDelay < Date.now()) {
          this._lastLeftRightNavigation = Date.now();
          this.goRight();
        }
        if (this.Controls.select.Enabled && __2.Game.isDisabledControlJustPressed(0, enums_1.Control.FrontendAccept)) {
          this.selectItem();
        }
      }
      _isThereAnyItemExcludingSeparators() {
        return !!this.items.filter((item) => !(item instanceof __1.UIMenuSeparatorItem)).length;
      }
      _playSoundAndReleaseId(sound, set) {
        const soundId = __2.Audio.playSoundFrontEnd(sound, set);
        __2.Audio.releaseSound(soundId);
      }
      _disEnableControls() {
        __2.Game.disableAllControlsThisFrame(__2.InputMode.GamePad);
        for (const control of this._settings.enabledControls[__2.Game.CurrentInputMode]) {
          __2.Game.enableControlThisFrame(0, control);
        }
      }
      _recalculateUpAndDown() {
        const y = this._offset.Y;
        this._extraRectangleUp.pos.Y = 144 + 38 * (this._maxItemsOnScreen + 1) + y;
        this._extraRectangleDown.pos.Y = 144 + 18 + 38 * (this._maxItemsOnScreen + 1) + y;
        this._upAndDownSprite.pos.Y = 147 + 37 * (this._maxItemsOnScreen + 1) + y;
      }
      _recalculateDescriptionPosition() {
        let y = 149 + this._offset.Y;
        let count = this.items.length;
        if (count > this._maxItemsOnScreen + 1) {
          count = this._maxItemsOnScreen + 2;
        }
        y += 38 * count;
        this._descriptionBar.pos.Y = y;
        this._descriptionRectangle.pos.Y = y;
        this._descriptionText.pos.Y = y + 6;
      }
      _calculateItemHeight() {
        const y = 149 + this._offset.Y;
        let count = this.items.length;
        if (count > this._maxItemsOnScreen + 1) {
          count = this._maxItemsOnScreen + 2;
        }
        return y + 38 * count;
      }
      _calculatePanelPosition(hasDescription) {
        let height = 0;
        if (hasDescription) {
          height += this._descriptionRectangle.size.height + 5;
        }
        return this._calculateItemHeight() + height;
      }
      _render() {
        if (!this.visible || __2.Game.IsPaused) {
          return;
        }
        if (this._justOpened) {
          if (this._logo != null && !this._logo.IsTextureDictionaryLoaded) {
            this._logo.loadTextureDictionary();
          }
          if (!this._background.IsTextureDictionaryLoaded) {
            this._background.loadTextureDictionary();
          }
          if (!this._descriptionRectangle.IsTextureDictionaryLoaded) {
            this._descriptionRectangle.loadTextureDictionary();
          }
          if (!this._upAndDownSprite.IsTextureDictionaryLoaded) {
            this._upAndDownSprite.loadTextureDictionary();
          }
        }
        if (this.Settings.scaleWithSafezone) {
          ScreenDrawPositionBegin(76, 84);
          ScreenDrawPositionRatio(0, 0, 0, 0);
          const pos = GetScriptGfxPosition(0, 0);
          this._drawOffset.X = pos[0];
          this._drawOffset.Y = pos[1];
        }
        this._mainMenu.draw(void 0, Menu.screenResolution);
        this._processControl();
        this._processMouse();
        if (this.Settings.controlDisablingEnabled) {
          this._disEnableControls();
        }
        this._background.size = this.items.length > this._maxItemsOnScreen + 1 ? new utils_1.Size(431 + this._widthOffset, 38 * (this._maxItemsOnScreen + 1)) : new utils_1.Size(431 + this._widthOffset, 38 * this.items.length);
        this._background.draw(Menu.screenResolution);
        if (this.items.length > 0) {
          const hasDescription = this.CurrentItem.Description && this.CurrentItem.Description !== "";
          this.CurrentItem.selected = true;
          if (hasDescription) {
            this._recalculateDescriptionPosition();
            this._descriptionText.caption = this.CurrentItem.FormattedDescription;
            const numLines = this._descriptionText.caption.split("\n").length;
            this._descriptionRectangle.size = new utils_1.Size(431 + this._widthOffset, numLines * 25 + 15);
            this._descriptionBar.draw(void 0, Menu.screenResolution);
            this._descriptionRectangle.draw(Menu.screenResolution);
            this._descriptionText.draw(void 0, Menu.screenResolution);
          }
          if (this.CurrentItem.Panels && this.CurrentItem.Panels.length) {
            let offset = this._calculatePanelPosition(hasDescription);
            for (let i = 0; i < this.CurrentItem.Panels.length; i++) {
              if (i > 0) {
                offset += this.CurrentItem.Panels[i - 1].Height + 5;
              }
              this.CurrentItem.Panels[i].setVerticalPosition(offset);
              this.CurrentItem.Panels[i].draw();
            }
          }
        }
        if (this.items.length <= this._maxItemsOnScreen + 1) {
          let count = 0;
          for (const menuItem of this.items) {
            menuItem.setVerticalPosition(count * 38);
            menuItem.draw();
            count += 1;
          }
          if (this._counterText && this._counterOverride) {
            this._counterText.caption = this._counterPretext + this._counterOverride;
            this._counterText.draw(void 0, Menu.screenResolution);
          }
        } else {
          let count = 0;
          for (let index = this._minItem; index <= this._maxItem; index++) {
            const item = this.items[index];
            item.setVerticalPosition(count * 38);
            item.draw();
            count++;
          }
          this._recalculateUpAndDown();
          this._extraRectangleUp.draw(void 0, Menu.screenResolution);
          this._extraRectangleDown.draw(void 0, Menu.screenResolution);
          this._upAndDownSprite.draw(Menu.screenResolution);
          if (this._counterText) {
            if (!this._counterOverride) {
              const cap = `${this.CurrentSelection + 1} / ${this.items.length}`;
              this._counterText.caption = this._counterPretext + cap;
            } else {
              this._counterText.caption = this._counterPretext + this._counterOverride;
            }
            this._counterText.draw(void 0, Menu.screenResolution);
          }
        }
        this._logo.draw(Menu.screenResolution);
        if (this.Settings.scaleWithSafezone) {
          ScreenDrawPositionEnd();
        }
      }
    };
    exports.Menu = Menu;
    Menu.screenAspectRatio = IsDuplicityVersion() ? 0 : __1.Screen.AspectRatio;
    Menu.screenHeight = 1080;
    Menu.screenWidth = Menu.screenHeight * Menu.screenAspectRatio;
    Menu.screenResolution = new utils_1.Size(Menu.screenWidth, Menu.screenHeight);
  }
});

// ../../node_modules/fivem-js/lib/ui/menu/MenuControl.js
var require_MenuControl = __commonJS({
  "../../node_modules/fivem-js/lib/ui/menu/MenuControl.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MenuControl = void 0;
    var MenuControl = class {
      constructor(enabled = true) {
        this._enabled = enabled;
      }
      get Enabled() {
        return this._enabled;
      }
      set Enabled(value) {
        this._enabled = value;
      }
    };
    exports.MenuControl = MenuControl;
  }
});

// ../../node_modules/fivem-js/lib/ui/menu/MenuControls.js
var require_MenuControls = __commonJS({
  "../../node_modules/fivem-js/lib/ui/menu/MenuControls.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MenuControls = void 0;
    var MenuControl_1 = require_MenuControl();
    var MenuControls = class {
      constructor() {
        this.back = new MenuControl_1.MenuControl();
        this.select = new MenuControl_1.MenuControl();
        this.left = new MenuControl_1.MenuControl();
        this.right = new MenuControl_1.MenuControl();
        this.up = new MenuControl_1.MenuControl();
        this.down = new MenuControl_1.MenuControl();
      }
    };
    exports.MenuControls = MenuControls;
  }
});

// ../../node_modules/fivem-js/lib/ui/menu/MenuSettings.js
var require_MenuSettings = __commonJS({
  "../../node_modules/fivem-js/lib/ui/menu/MenuSettings.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MenuSettings = void 0;
    var index_1 = require_lib();
    var enums_1 = require_enums();
    var MenuSettings = class {
      constructor() {
        this.scaleWithSafezone = true;
        this.resetCursorOnOpen = true;
        this.mouseControlsEnabled = true;
        this.mouseEdgeEnabled = true;
        this.controlDisablingEnabled = true;
        this.audio = {
          library: "HUD_FRONTEND_DEFAULT_SOUNDSET",
          upDown: "NAV_UP_DOWN",
          leftRight: "NAV_LEFT_RIGHT",
          select: "SELECT",
          back: "BACK",
          error: "ERROR"
        };
        this.enabledControls = {
          [index_1.InputMode.GamePad]: [enums_1.Control.LookUpDown, enums_1.Control.LookLeftRight, enums_1.Control.Aim, enums_1.Control.Attack],
          [index_1.InputMode.MouseAndKeyboard]: [
            enums_1.Control.FrontendAccept,
            enums_1.Control.FrontendAxisX,
            enums_1.Control.FrontendAxisY,
            enums_1.Control.FrontendDown,
            enums_1.Control.FrontendUp,
            enums_1.Control.FrontendLeft,
            enums_1.Control.FrontendRight,
            enums_1.Control.FrontendCancel,
            enums_1.Control.FrontendSelect,
            enums_1.Control.CursorScrollDown,
            enums_1.Control.CursorScrollUp,
            enums_1.Control.CursorX,
            enums_1.Control.CursorY,
            enums_1.Control.MoveUpDown,
            enums_1.Control.MoveLeftRight,
            enums_1.Control.Sprint,
            enums_1.Control.Jump,
            enums_1.Control.Enter,
            enums_1.Control.VehicleExit,
            enums_1.Control.VehicleAccelerate,
            enums_1.Control.VehicleBrake,
            enums_1.Control.VehicleHandbrake,
            enums_1.Control.VehicleMoveLeftRight,
            enums_1.Control.VehicleFlyYawLeft,
            enums_1.Control.VehicleFlyYawRight,
            enums_1.Control.FlyLeftRight,
            enums_1.Control.FlyUpDown
          ]
        };
      }
    };
    exports.MenuSettings = MenuSettings;
  }
});

// ../../node_modules/fivem-js/lib/ui/menu/index.js
var require_menu = __commonJS({
  "../../node_modules/fivem-js/lib/ui/menu/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MenuSettings = exports.MenuControls = exports.MenuControl = exports.Menu = void 0;
    __exportStar(require_items(), exports);
    __exportStar(require_modules(), exports);
    var Menu_1 = require_Menu();
    Object.defineProperty(exports, "Menu", { enumerable: true, get: function() {
      return Menu_1.Menu;
    } });
    var MenuControl_1 = require_MenuControl();
    Object.defineProperty(exports, "MenuControl", { enumerable: true, get: function() {
      return MenuControl_1.MenuControl;
    } });
    var MenuControls_1 = require_MenuControls();
    Object.defineProperty(exports, "MenuControls", { enumerable: true, get: function() {
      return MenuControls_1.MenuControls;
    } });
    var MenuSettings_1 = require_MenuSettings();
    Object.defineProperty(exports, "MenuSettings", { enumerable: true, get: function() {
      return MenuSettings_1.MenuSettings;
    } });
  }
});

// ../../node_modules/fivem-js/lib/ui/index.js
var require_ui = __commonJS({
  "../../node_modules/fivem-js/lib/ui/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Timerbar = exports.Text = exports.Sprite = exports.Screen = exports.Scaleform = exports.Notification = exports.LoadingPrompt = exports.Hud = exports.Fading = exports.Effects = exports.Container = exports.Rectangle = void 0;
    __exportStar(require_interfaces(), exports);
    var Rectangle_1 = require_Rectangle();
    Object.defineProperty(exports, "Rectangle", { enumerable: true, get: function() {
      return Rectangle_1.Rectangle;
    } });
    var Container_1 = require_Container();
    Object.defineProperty(exports, "Container", { enumerable: true, get: function() {
      return Container_1.Container;
    } });
    var Effects_1 = require_Effects();
    Object.defineProperty(exports, "Effects", { enumerable: true, get: function() {
      return Effects_1.Effects;
    } });
    var Fading_1 = require_Fading();
    Object.defineProperty(exports, "Fading", { enumerable: true, get: function() {
      return Fading_1.Fading;
    } });
    var Hud_1 = require_Hud();
    Object.defineProperty(exports, "Hud", { enumerable: true, get: function() {
      return Hud_1.Hud;
    } });
    var LoadingPrompt_1 = require_LoadingPrompt();
    Object.defineProperty(exports, "LoadingPrompt", { enumerable: true, get: function() {
      return LoadingPrompt_1.LoadingPrompt;
    } });
    var Notification_1 = require_Notification();
    Object.defineProperty(exports, "Notification", { enumerable: true, get: function() {
      return Notification_1.Notification;
    } });
    var Scaleform_1 = require_Scaleform();
    Object.defineProperty(exports, "Scaleform", { enumerable: true, get: function() {
      return Scaleform_1.Scaleform;
    } });
    var Screen_1 = require_Screen();
    Object.defineProperty(exports, "Screen", { enumerable: true, get: function() {
      return Screen_1.Screen;
    } });
    var Sprite_1 = require_Sprite();
    Object.defineProperty(exports, "Sprite", { enumerable: true, get: function() {
      return Sprite_1.Sprite;
    } });
    var Text_1 = require_Text();
    Object.defineProperty(exports, "Text", { enumerable: true, get: function() {
      return Text_1.Text;
    } });
    var Timerbar_1 = require_Timerbar();
    Object.defineProperty(exports, "Timerbar", { enumerable: true, get: function() {
      return Timerbar_1.Timerbar;
    } });
    __exportStar(require_menu(), exports);
  }
});

// ../../node_modules/fivem-js/lib/index.js
var require_lib = __commonJS({
  "../../node_modules/fivem-js/lib/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RelationshipGroup = exports.RaycastResult = exports.ParticleEffectAsset = exports.ParticleEffect = exports.GameplayCamera = exports.Checkpoint = exports.Camera = exports.Blip = exports.Audio = exports.Model = exports.World = exports.Game = void 0;
    var Game_1 = require_Game();
    Object.defineProperty(exports, "Game", { enumerable: true, get: function() {
      return Game_1.Game;
    } });
    var World_1 = require_World();
    Object.defineProperty(exports, "World", { enumerable: true, get: function() {
      return World_1.World;
    } });
    var Model_1 = require_Model();
    Object.defineProperty(exports, "Model", { enumerable: true, get: function() {
      return Model_1.Model;
    } });
    var Audio_1 = require_Audio();
    Object.defineProperty(exports, "Audio", { enumerable: true, get: function() {
      return Audio_1.Audio;
    } });
    var Blip_1 = require_Blip2();
    Object.defineProperty(exports, "Blip", { enumerable: true, get: function() {
      return Blip_1.Blip;
    } });
    var Camera_1 = require_Camera();
    Object.defineProperty(exports, "Camera", { enumerable: true, get: function() {
      return Camera_1.Camera;
    } });
    var Checkpoint_1 = require_Checkpoint2();
    Object.defineProperty(exports, "Checkpoint", { enumerable: true, get: function() {
      return Checkpoint_1.Checkpoint;
    } });
    var GameplayCamera_1 = require_GameplayCamera();
    Object.defineProperty(exports, "GameplayCamera", { enumerable: true, get: function() {
      return GameplayCamera_1.GameplayCamera;
    } });
    var ParticleEffect_1 = require_ParticleEffect();
    Object.defineProperty(exports, "ParticleEffect", { enumerable: true, get: function() {
      return ParticleEffect_1.ParticleEffect;
    } });
    var ParticleEffectAsset_1 = require_ParticleEffectAsset();
    Object.defineProperty(exports, "ParticleEffectAsset", { enumerable: true, get: function() {
      return ParticleEffectAsset_1.ParticleEffectAsset;
    } });
    var Raycast_1 = require_Raycast();
    Object.defineProperty(exports, "RaycastResult", { enumerable: true, get: function() {
      return Raycast_1.RaycastResult;
    } });
    var RelationshipGroup_1 = require_RelationshipGroup();
    Object.defineProperty(exports, "RelationshipGroup", { enumerable: true, get: function() {
      return RelationshipGroup_1.RelationshipGroup;
    } });
    __exportStar(require_models(), exports);
    __exportStar(require_utils(), exports);
    __exportStar(require_enums(), exports);
    __exportStar(require_hashes(), exports);
    __exportStar(require_ui(), exports);
  }
});

// ../../node_modules/reflect-metadata/Reflect.js
var Reflect2;
(function(Reflect3) {
  (function(factory) {
    var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : Function("return this;")();
    var exporter = makeExporter(Reflect3);
    if (typeof root.Reflect === "undefined") {
      root.Reflect = Reflect3;
    } else {
      exporter = makeExporter(root.Reflect, exporter);
    }
    factory(exporter);
    function makeExporter(target, previous) {
      return function(key, value) {
        if (typeof target[key] !== "function") {
          Object.defineProperty(target, key, { configurable: true, writable: true, value });
        }
        if (previous)
          previous(key, value);
      };
    }
  })(function(exporter) {
    var hasOwn = Object.prototype.hasOwnProperty;
    var supportsSymbol = typeof Symbol === "function";
    var toPrimitiveSymbol = supportsSymbol && typeof Symbol.toPrimitive !== "undefined" ? Symbol.toPrimitive : "@@toPrimitive";
    var iteratorSymbol = supportsSymbol && typeof Symbol.iterator !== "undefined" ? Symbol.iterator : "@@iterator";
    var supportsCreate = typeof Object.create === "function";
    var supportsProto = { __proto__: [] } instanceof Array;
    var downLevel = !supportsCreate && !supportsProto;
    var HashMap = {
      create: supportsCreate ? function() {
        return MakeDictionary(/* @__PURE__ */ Object.create(null));
      } : supportsProto ? function() {
        return MakeDictionary({ __proto__: null });
      } : function() {
        return MakeDictionary({});
      },
      has: downLevel ? function(map, key) {
        return hasOwn.call(map, key);
      } : function(map, key) {
        return key in map;
      },
      get: downLevel ? function(map, key) {
        return hasOwn.call(map, key) ? map[key] : void 0;
      } : function(map, key) {
        return map[key];
      }
    };
    var functionPrototype = Object.getPrototypeOf(Function);
    var usePolyfill = typeof process === "object" && process.env && process.env["REFLECT_METADATA_USE_MAP_POLYFILL"] === "true";
    var _Map = !usePolyfill && typeof Map === "function" && typeof Map.prototype.entries === "function" ? Map : CreateMapPolyfill();
    var _Set = !usePolyfill && typeof Set === "function" && typeof Set.prototype.entries === "function" ? Set : CreateSetPolyfill();
    var _WeakMap = !usePolyfill && typeof WeakMap === "function" ? WeakMap : CreateWeakMapPolyfill();
    var Metadata = new _WeakMap();
    function decorate(decorators, target, propertyKey, attributes) {
      if (!IsUndefined(propertyKey)) {
        if (!IsArray(decorators))
          throw new TypeError();
        if (!IsObject(target))
          throw new TypeError();
        if (!IsObject(attributes) && !IsUndefined(attributes) && !IsNull(attributes))
          throw new TypeError();
        if (IsNull(attributes))
          attributes = void 0;
        propertyKey = ToPropertyKey(propertyKey);
        return DecorateProperty(decorators, target, propertyKey, attributes);
      } else {
        if (!IsArray(decorators))
          throw new TypeError();
        if (!IsConstructor(target))
          throw new TypeError();
        return DecorateConstructor(decorators, target);
      }
    }
    exporter("decorate", decorate);
    function metadata(metadataKey, metadataValue) {
      function decorator(target, propertyKey) {
        if (!IsObject(target))
          throw new TypeError();
        if (!IsUndefined(propertyKey) && !IsPropertyKey(propertyKey))
          throw new TypeError();
        OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
      }
      return decorator;
    }
    exporter("metadata", metadata);
    function defineMetadata(metadataKey, metadataValue, target, propertyKey) {
      if (!IsObject(target))
        throw new TypeError();
      if (!IsUndefined(propertyKey))
        propertyKey = ToPropertyKey(propertyKey);
      return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
    }
    exporter("defineMetadata", defineMetadata);
    function hasMetadata(metadataKey, target, propertyKey) {
      if (!IsObject(target))
        throw new TypeError();
      if (!IsUndefined(propertyKey))
        propertyKey = ToPropertyKey(propertyKey);
      return OrdinaryHasMetadata(metadataKey, target, propertyKey);
    }
    exporter("hasMetadata", hasMetadata);
    function hasOwnMetadata(metadataKey, target, propertyKey) {
      if (!IsObject(target))
        throw new TypeError();
      if (!IsUndefined(propertyKey))
        propertyKey = ToPropertyKey(propertyKey);
      return OrdinaryHasOwnMetadata(metadataKey, target, propertyKey);
    }
    exporter("hasOwnMetadata", hasOwnMetadata);
    function getMetadata(metadataKey, target, propertyKey) {
      if (!IsObject(target))
        throw new TypeError();
      if (!IsUndefined(propertyKey))
        propertyKey = ToPropertyKey(propertyKey);
      return OrdinaryGetMetadata(metadataKey, target, propertyKey);
    }
    exporter("getMetadata", getMetadata);
    function getOwnMetadata(metadataKey, target, propertyKey) {
      if (!IsObject(target))
        throw new TypeError();
      if (!IsUndefined(propertyKey))
        propertyKey = ToPropertyKey(propertyKey);
      return OrdinaryGetOwnMetadata(metadataKey, target, propertyKey);
    }
    exporter("getOwnMetadata", getOwnMetadata);
    function getMetadataKeys(target, propertyKey) {
      if (!IsObject(target))
        throw new TypeError();
      if (!IsUndefined(propertyKey))
        propertyKey = ToPropertyKey(propertyKey);
      return OrdinaryMetadataKeys(target, propertyKey);
    }
    exporter("getMetadataKeys", getMetadataKeys);
    function getOwnMetadataKeys(target, propertyKey) {
      if (!IsObject(target))
        throw new TypeError();
      if (!IsUndefined(propertyKey))
        propertyKey = ToPropertyKey(propertyKey);
      return OrdinaryOwnMetadataKeys(target, propertyKey);
    }
    exporter("getOwnMetadataKeys", getOwnMetadataKeys);
    function deleteMetadata(metadataKey, target, propertyKey) {
      if (!IsObject(target))
        throw new TypeError();
      if (!IsUndefined(propertyKey))
        propertyKey = ToPropertyKey(propertyKey);
      var metadataMap = GetOrCreateMetadataMap(target, propertyKey, false);
      if (IsUndefined(metadataMap))
        return false;
      if (!metadataMap.delete(metadataKey))
        return false;
      if (metadataMap.size > 0)
        return true;
      var targetMetadata = Metadata.get(target);
      targetMetadata.delete(propertyKey);
      if (targetMetadata.size > 0)
        return true;
      Metadata.delete(target);
      return true;
    }
    exporter("deleteMetadata", deleteMetadata);
    function DecorateConstructor(decorators, target) {
      for (var i = decorators.length - 1; i >= 0; --i) {
        var decorator = decorators[i];
        var decorated = decorator(target);
        if (!IsUndefined(decorated) && !IsNull(decorated)) {
          if (!IsConstructor(decorated))
            throw new TypeError();
          target = decorated;
        }
      }
      return target;
    }
    function DecorateProperty(decorators, target, propertyKey, descriptor) {
      for (var i = decorators.length - 1; i >= 0; --i) {
        var decorator = decorators[i];
        var decorated = decorator(target, propertyKey, descriptor);
        if (!IsUndefined(decorated) && !IsNull(decorated)) {
          if (!IsObject(decorated))
            throw new TypeError();
          descriptor = decorated;
        }
      }
      return descriptor;
    }
    function GetOrCreateMetadataMap(O, P, Create) {
      var targetMetadata = Metadata.get(O);
      if (IsUndefined(targetMetadata)) {
        if (!Create)
          return void 0;
        targetMetadata = new _Map();
        Metadata.set(O, targetMetadata);
      }
      var metadataMap = targetMetadata.get(P);
      if (IsUndefined(metadataMap)) {
        if (!Create)
          return void 0;
        metadataMap = new _Map();
        targetMetadata.set(P, metadataMap);
      }
      return metadataMap;
    }
    function OrdinaryHasMetadata(MetadataKey, O, P) {
      var hasOwn2 = OrdinaryHasOwnMetadata(MetadataKey, O, P);
      if (hasOwn2)
        return true;
      var parent = OrdinaryGetPrototypeOf(O);
      if (!IsNull(parent))
        return OrdinaryHasMetadata(MetadataKey, parent, P);
      return false;
    }
    function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
      var metadataMap = GetOrCreateMetadataMap(O, P, false);
      if (IsUndefined(metadataMap))
        return false;
      return ToBoolean(metadataMap.has(MetadataKey));
    }
    function OrdinaryGetMetadata(MetadataKey, O, P) {
      var hasOwn2 = OrdinaryHasOwnMetadata(MetadataKey, O, P);
      if (hasOwn2)
        return OrdinaryGetOwnMetadata(MetadataKey, O, P);
      var parent = OrdinaryGetPrototypeOf(O);
      if (!IsNull(parent))
        return OrdinaryGetMetadata(MetadataKey, parent, P);
      return void 0;
    }
    function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
      var metadataMap = GetOrCreateMetadataMap(O, P, false);
      if (IsUndefined(metadataMap))
        return void 0;
      return metadataMap.get(MetadataKey);
    }
    function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
      var metadataMap = GetOrCreateMetadataMap(O, P, true);
      metadataMap.set(MetadataKey, MetadataValue);
    }
    function OrdinaryMetadataKeys(O, P) {
      var ownKeys = OrdinaryOwnMetadataKeys(O, P);
      var parent = OrdinaryGetPrototypeOf(O);
      if (parent === null)
        return ownKeys;
      var parentKeys = OrdinaryMetadataKeys(parent, P);
      if (parentKeys.length <= 0)
        return ownKeys;
      if (ownKeys.length <= 0)
        return parentKeys;
      var set = new _Set();
      var keys = [];
      for (var _i = 0, ownKeys_1 = ownKeys; _i < ownKeys_1.length; _i++) {
        var key = ownKeys_1[_i];
        var hasKey = set.has(key);
        if (!hasKey) {
          set.add(key);
          keys.push(key);
        }
      }
      for (var _a = 0, parentKeys_1 = parentKeys; _a < parentKeys_1.length; _a++) {
        var key = parentKeys_1[_a];
        var hasKey = set.has(key);
        if (!hasKey) {
          set.add(key);
          keys.push(key);
        }
      }
      return keys;
    }
    function OrdinaryOwnMetadataKeys(O, P) {
      var keys = [];
      var metadataMap = GetOrCreateMetadataMap(O, P, false);
      if (IsUndefined(metadataMap))
        return keys;
      var keysObj = metadataMap.keys();
      var iterator = GetIterator(keysObj);
      var k = 0;
      while (true) {
        var next = IteratorStep(iterator);
        if (!next) {
          keys.length = k;
          return keys;
        }
        var nextValue = IteratorValue(next);
        try {
          keys[k] = nextValue;
        } catch (e) {
          try {
            IteratorClose(iterator);
          } finally {
            throw e;
          }
        }
        k++;
      }
    }
    function Type(x) {
      if (x === null)
        return 1;
      switch (typeof x) {
        case "undefined":
          return 0;
        case "boolean":
          return 2;
        case "string":
          return 3;
        case "symbol":
          return 4;
        case "number":
          return 5;
        case "object":
          return x === null ? 1 : 6;
        default:
          return 6;
      }
    }
    function IsUndefined(x) {
      return x === void 0;
    }
    function IsNull(x) {
      return x === null;
    }
    function IsSymbol(x) {
      return typeof x === "symbol";
    }
    function IsObject(x) {
      return typeof x === "object" ? x !== null : typeof x === "function";
    }
    function ToPrimitive(input, PreferredType) {
      switch (Type(input)) {
        case 0:
          return input;
        case 1:
          return input;
        case 2:
          return input;
        case 3:
          return input;
        case 4:
          return input;
        case 5:
          return input;
      }
      var hint = PreferredType === 3 ? "string" : PreferredType === 5 ? "number" : "default";
      var exoticToPrim = GetMethod(input, toPrimitiveSymbol);
      if (exoticToPrim !== void 0) {
        var result = exoticToPrim.call(input, hint);
        if (IsObject(result))
          throw new TypeError();
        return result;
      }
      return OrdinaryToPrimitive(input, hint === "default" ? "number" : hint);
    }
    function OrdinaryToPrimitive(O, hint) {
      if (hint === "string") {
        var toString_1 = O.toString;
        if (IsCallable(toString_1)) {
          var result = toString_1.call(O);
          if (!IsObject(result))
            return result;
        }
        var valueOf = O.valueOf;
        if (IsCallable(valueOf)) {
          var result = valueOf.call(O);
          if (!IsObject(result))
            return result;
        }
      } else {
        var valueOf = O.valueOf;
        if (IsCallable(valueOf)) {
          var result = valueOf.call(O);
          if (!IsObject(result))
            return result;
        }
        var toString_2 = O.toString;
        if (IsCallable(toString_2)) {
          var result = toString_2.call(O);
          if (!IsObject(result))
            return result;
        }
      }
      throw new TypeError();
    }
    function ToBoolean(argument) {
      return !!argument;
    }
    function ToString(argument) {
      return "" + argument;
    }
    function ToPropertyKey(argument) {
      var key = ToPrimitive(argument, 3);
      if (IsSymbol(key))
        return key;
      return ToString(key);
    }
    function IsArray(argument) {
      return Array.isArray ? Array.isArray(argument) : argument instanceof Object ? argument instanceof Array : Object.prototype.toString.call(argument) === "[object Array]";
    }
    function IsCallable(argument) {
      return typeof argument === "function";
    }
    function IsConstructor(argument) {
      return typeof argument === "function";
    }
    function IsPropertyKey(argument) {
      switch (Type(argument)) {
        case 3:
          return true;
        case 4:
          return true;
        default:
          return false;
      }
    }
    function GetMethod(V, P) {
      var func = V[P];
      if (func === void 0 || func === null)
        return void 0;
      if (!IsCallable(func))
        throw new TypeError();
      return func;
    }
    function GetIterator(obj) {
      var method = GetMethod(obj, iteratorSymbol);
      if (!IsCallable(method))
        throw new TypeError();
      var iterator = method.call(obj);
      if (!IsObject(iterator))
        throw new TypeError();
      return iterator;
    }
    function IteratorValue(iterResult) {
      return iterResult.value;
    }
    function IteratorStep(iterator) {
      var result = iterator.next();
      return result.done ? false : result;
    }
    function IteratorClose(iterator) {
      var f = iterator["return"];
      if (f)
        f.call(iterator);
    }
    function OrdinaryGetPrototypeOf(O) {
      var proto = Object.getPrototypeOf(O);
      if (typeof O !== "function" || O === functionPrototype)
        return proto;
      if (proto !== functionPrototype)
        return proto;
      var prototype = O.prototype;
      var prototypeProto = prototype && Object.getPrototypeOf(prototype);
      if (prototypeProto == null || prototypeProto === Object.prototype)
        return proto;
      var constructor = prototypeProto.constructor;
      if (typeof constructor !== "function")
        return proto;
      if (constructor === O)
        return proto;
      return constructor;
    }
    function CreateMapPolyfill() {
      var cacheSentinel = {};
      var arraySentinel = [];
      var MapIterator = function() {
        function MapIterator2(keys, values, selector) {
          this._index = 0;
          this._keys = keys;
          this._values = values;
          this._selector = selector;
        }
        MapIterator2.prototype["@@iterator"] = function() {
          return this;
        };
        MapIterator2.prototype[iteratorSymbol] = function() {
          return this;
        };
        MapIterator2.prototype.next = function() {
          var index = this._index;
          if (index >= 0 && index < this._keys.length) {
            var result = this._selector(this._keys[index], this._values[index]);
            if (index + 1 >= this._keys.length) {
              this._index = -1;
              this._keys = arraySentinel;
              this._values = arraySentinel;
            } else {
              this._index++;
            }
            return { value: result, done: false };
          }
          return { value: void 0, done: true };
        };
        MapIterator2.prototype.throw = function(error) {
          if (this._index >= 0) {
            this._index = -1;
            this._keys = arraySentinel;
            this._values = arraySentinel;
          }
          throw error;
        };
        MapIterator2.prototype.return = function(value) {
          if (this._index >= 0) {
            this._index = -1;
            this._keys = arraySentinel;
            this._values = arraySentinel;
          }
          return { value, done: true };
        };
        return MapIterator2;
      }();
      return function() {
        function Map2() {
          this._keys = [];
          this._values = [];
          this._cacheKey = cacheSentinel;
          this._cacheIndex = -2;
        }
        Object.defineProperty(Map2.prototype, "size", {
          get: function() {
            return this._keys.length;
          },
          enumerable: true,
          configurable: true
        });
        Map2.prototype.has = function(key) {
          return this._find(key, false) >= 0;
        };
        Map2.prototype.get = function(key) {
          var index = this._find(key, false);
          return index >= 0 ? this._values[index] : void 0;
        };
        Map2.prototype.set = function(key, value) {
          var index = this._find(key, true);
          this._values[index] = value;
          return this;
        };
        Map2.prototype.delete = function(key) {
          var index = this._find(key, false);
          if (index >= 0) {
            var size = this._keys.length;
            for (var i = index + 1; i < size; i++) {
              this._keys[i - 1] = this._keys[i];
              this._values[i - 1] = this._values[i];
            }
            this._keys.length--;
            this._values.length--;
            if (key === this._cacheKey) {
              this._cacheKey = cacheSentinel;
              this._cacheIndex = -2;
            }
            return true;
          }
          return false;
        };
        Map2.prototype.clear = function() {
          this._keys.length = 0;
          this._values.length = 0;
          this._cacheKey = cacheSentinel;
          this._cacheIndex = -2;
        };
        Map2.prototype.keys = function() {
          return new MapIterator(this._keys, this._values, getKey);
        };
        Map2.prototype.values = function() {
          return new MapIterator(this._keys, this._values, getValue);
        };
        Map2.prototype.entries = function() {
          return new MapIterator(this._keys, this._values, getEntry);
        };
        Map2.prototype["@@iterator"] = function() {
          return this.entries();
        };
        Map2.prototype[iteratorSymbol] = function() {
          return this.entries();
        };
        Map2.prototype._find = function(key, insert) {
          if (this._cacheKey !== key) {
            this._cacheIndex = this._keys.indexOf(this._cacheKey = key);
          }
          if (this._cacheIndex < 0 && insert) {
            this._cacheIndex = this._keys.length;
            this._keys.push(key);
            this._values.push(void 0);
          }
          return this._cacheIndex;
        };
        return Map2;
      }();
      function getKey(key, _) {
        return key;
      }
      function getValue(_, value) {
        return value;
      }
      function getEntry(key, value) {
        return [key, value];
      }
    }
    function CreateSetPolyfill() {
      return function() {
        function Set2() {
          this._map = new _Map();
        }
        Object.defineProperty(Set2.prototype, "size", {
          get: function() {
            return this._map.size;
          },
          enumerable: true,
          configurable: true
        });
        Set2.prototype.has = function(value) {
          return this._map.has(value);
        };
        Set2.prototype.add = function(value) {
          return this._map.set(value, value), this;
        };
        Set2.prototype.delete = function(value) {
          return this._map.delete(value);
        };
        Set2.prototype.clear = function() {
          this._map.clear();
        };
        Set2.prototype.keys = function() {
          return this._map.keys();
        };
        Set2.prototype.values = function() {
          return this._map.values();
        };
        Set2.prototype.entries = function() {
          return this._map.entries();
        };
        Set2.prototype["@@iterator"] = function() {
          return this.keys();
        };
        Set2.prototype[iteratorSymbol] = function() {
          return this.keys();
        };
        return Set2;
      }();
    }
    function CreateWeakMapPolyfill() {
      var UUID_SIZE = 16;
      var keys = HashMap.create();
      var rootKey = CreateUniqueKey();
      return function() {
        function WeakMap2() {
          this._key = CreateUniqueKey();
        }
        WeakMap2.prototype.has = function(target) {
          var table = GetOrCreateWeakMapTable(target, false);
          return table !== void 0 ? HashMap.has(table, this._key) : false;
        };
        WeakMap2.prototype.get = function(target) {
          var table = GetOrCreateWeakMapTable(target, false);
          return table !== void 0 ? HashMap.get(table, this._key) : void 0;
        };
        WeakMap2.prototype.set = function(target, value) {
          var table = GetOrCreateWeakMapTable(target, true);
          table[this._key] = value;
          return this;
        };
        WeakMap2.prototype.delete = function(target) {
          var table = GetOrCreateWeakMapTable(target, false);
          return table !== void 0 ? delete table[this._key] : false;
        };
        WeakMap2.prototype.clear = function() {
          this._key = CreateUniqueKey();
        };
        return WeakMap2;
      }();
      function CreateUniqueKey() {
        var key;
        do
          key = "@@WeakMap@@" + CreateUUID();
        while (HashMap.has(keys, key));
        keys[key] = true;
        return key;
      }
      function GetOrCreateWeakMapTable(target, create) {
        if (!hasOwn.call(target, rootKey)) {
          if (!create)
            return void 0;
          Object.defineProperty(target, rootKey, { value: HashMap.create() });
        }
        return target[rootKey];
      }
      function FillRandomBytes(buffer, size) {
        for (var i = 0; i < size; ++i)
          buffer[i] = Math.random() * 255 | 0;
        return buffer;
      }
      function GenRandomBytes(size) {
        if (typeof Uint8Array === "function") {
          if (typeof crypto !== "undefined")
            return crypto.getRandomValues(new Uint8Array(size));
          if (typeof msCrypto !== "undefined")
            return msCrypto.getRandomValues(new Uint8Array(size));
          return FillRandomBytes(new Uint8Array(size), size);
        }
        return FillRandomBytes(new Array(size), size);
      }
      function CreateUUID() {
        var data = GenRandomBytes(UUID_SIZE);
        data[6] = data[6] & 79 | 64;
        data[8] = data[8] & 191 | 128;
        var result = "";
        for (var offset = 0; offset < UUID_SIZE; ++offset) {
          var byte = data[offset];
          if (offset === 4 || offset === 6 || offset === 8)
            result += "-";
          if (byte < 16)
            result += "0";
          result += byte.toString(16).toLowerCase();
        }
        return result;
      }
    }
    function MakeDictionary(obj) {
      obj.__ = void 0;
      delete obj.__;
      return obj;
    }
  });
})(Reflect2 || (Reflect2 = {}));

// ../crendio/src/decorators/Module.ts
var import_tsyringe = __toESM(require_cjs());

// ../crendio/src/util/Util.ts
var Util = class {
  static getMetadata(target, key, defaultData) {
    const data = Reflect.getOwnMetadata(key, target);
    if (!data) {
      return defaultData;
    }
    return data;
  }
  static wait(time) {
    return new Promise((res) => setTimeout(res, time));
  }
  static loadModel(model) {
    return __async(this, null, function* () {
      return new Promise((resolve, reject) => {
        RequestModel(model);
        const mtick = setTick(() => {
          if (HasModelLoaded(model)) {
            clearTick(mtick);
            resolve();
          }
        });
      });
    });
  }
};

// ../crendio/src/decorators/Module.ts
var defaultOptions = {
  global: false
};
var Module = (options) => {
  const userOptions = options || {};
  const localOptions = __spreadValues(__spreadValues({}, defaultOptions), userOptions);
  return function(constructor) {
    const events = Util.getMetadata(
      constructor.prototype,
      "events",
      {}
    );
    const commands = Util.getMetadata(
      constructor.prototype,
      "commands",
      []
    );
    const cl = class extends constructor {
      constructor(...args) {
        super(...args);
        registerEvents(this, events);
        registerCommands(this, commands);
      }
    };
    if (localOptions.global) {
      const instance = (0, import_tsyringe.autoInjectable)()(cl);
      (0, import_tsyringe.singleton)()(instance);
      return instance;
    }
    return (0, import_tsyringe.autoInjectable)()(cl);
  };
};
var registerEvents = (target, events) => {
  for (const [eventName, info] of Object.entries(events)) {
    if (info.options.net) {
      onNet(eventName, (...args) => {
        const source = global.source;
        target[info.methodName](...[source, ...args]);
      });
    } else {
      on(eventName, (...args) => {
        const source = global.source;
        target[info.methodName](...[source, ...args]);
      });
    }
  }
};
var registerCommands = (target, commands) => {
  for (const command of commands) {
    RegisterCommand(
      command.command,
      (...args) => {
        const errors = [];
        if (command.restrictors) {
          let restricted = false;
          for (const restrictor of command.restrictors) {
            if (restrictor() === false) {
              restricted = true;
              errors.push(`You do not have permission to run this command!`);
              break;
            }
          }
        }
        if (errors.length > 0) {
          errors.forEach((v) => {
            if (IsDuplicityVersion()) {
              console.log(v);
            }
          });
          return;
        }
        (void 0)[command.handler](args[0], [...args[1]]);
      },
      false
    );
  }
};

// ../crendio/src/decorators/Command.ts
var defaultOptions2 = {
  restrictors: [],
  requireAce: false
};
var Command = (commandName, options) => {
  const userOptions = options || {};
  const localOptions = __spreadValues(__spreadValues({}, defaultOptions2), userOptions);
  return (target, name, desc) => {
    const method = desc.value;
    desc.value = function(...args) {
      const res = method.apply(this, args);
      return res;
    };
    const commands = Reflect.getOwnMetadata("commands", target) || [];
    commands.push({
      command: commandName,
      handler: name,
      restrictors: localOptions.restrictors,
      requireAce: localOptions.requireAce
    });
  };
};

// ../crendio/src/decorators/App.ts
var defaultOptions3 = {
  modules: []
};
var App = (options) => {
  const userOptions = options || {};
  const localOptions = __spreadValues(__spreadValues({}, defaultOptions3), userOptions);
  return function(constructor) {
    const allEvents = [];
    const onReadys = [];
    for (const module2 of localOptions.modules) {
      const onReadys2 = [];
      for (const module3 of localOptions.modules) {
        const events = Reflect.getMetadata("events", module3.prototype);
        if (events) {
          for (const [, event] of Object.entries(events)) {
            for (const [, event2] of Object.entries(events)) {
              allEvents.push(event2.methodName);
            }
          }
          const modInstance = new module3();
          if (modInstance["$onReady"]) {
            onReadys2.push(modInstance["$onReady"]);
          }
        }
      }
    }
    const tr = class extends constructor {
      constructor(...args) {
        super(...args);
        onReadys.forEach((v) => {
          v.call(this);
        });
        onReadys.forEach((v) => {
          v.call(this);
        });
        Object.defineProperty(this, "events", {
          value: allEvents,
          writable: true,
          configurable: true
        });
      }
    };
    new tr();
    console.log(`started`, tr.name);
    return tr;
  };
};

// ../crendio/src/decorators/Event.ts
var defaultOptions4 = {
  net: false
};
var Event = (name, options) => {
  const localOptions = __spreadValues(__spreadValues({}, defaultOptions4), options);
  return (target, propertyName, desc) => {
    const events = Reflect.getOwnMetadata("events", target) || {};
    events[name] = {
      methodName: propertyName,
      handler: desc.value,
      options: localOptions
    };
    Reflect.defineMetadata("events", events, target);
  };
};

// src/modules/test_module/client.ts
var TestClient = class {
};
TestClient = __decorateClass([
  Module({
    global: true
  })
], TestClient);

// src/modules/mapmanager/client.ts
var MapManagerClient = class {
  onStart(_, resource) {
    if (resource === GetCurrentResourceName()) {
      emit("onClientMapStart", resource);
      emit("onClientGameTypeStart", resource);
    }
  }
};
__decorateClass([
  Event("onClientResourceStart", {
    net: false
  })
], MapManagerClient.prototype, "onStart", 1);
MapManagerClient = __decorateClass([
  Module({
    global: true
  })
], MapManagerClient);

// src/modules/spawnmanager/client.ts
var import_fivem_js = __toESM(require_lib());
var SpawnClient = class {
  constructor() {
    this.initialSpawnDone = false;
    this.autoSpawn = false;
    this.autoSpawnCB = void 0;
    this.defaultModel = "mp_m_freemode_01";
  }
  spawnPlayer(coords) {
    return __async(this, null, function* () {
      DoScreenFadeOut(500);
      while (!IsScreenFadedOut) {
        yield Util.wait(0);
      }
      this.freezePlayer(PlayerId(), true);
      yield Util.loadModel(this.defaultModel);
      SetPlayerModel(PlayerId(), this.defaultModel);
      SetPedDefaultComponentVariation(PlayerPedId());
      SetModelAsNoLongerNeeded(this.defaultModel);
      RequestCollisionAtCoord(coords.x, coords.y, coords.z);
      const ped = PlayerPedId();
      SetEntityCoordsNoOffset(
        ped,
        coords.x,
        coords.y,
        coords.z,
        false,
        false,
        false
      );
      NetworkResurrectLocalPlayer(coords.x, coords.y, coords.z, 0, true, true);
      ClearPedTasksImmediately(ped);
      RemoveAllPedWeapons(ped, false);
      ClearPlayerWantedLevel(PlayerId());
      const time = GetGameTimer();
      while (!HasCollisionLoadedAroundEntity(ped) && GetGameTimer() - time < 5e3) {
        yield Util.wait(0);
      }
      ShutdownLoadingScreen();
      if (IsScreenFadedOut()) {
        DoScreenFadeIn(500);
        while (!IsScreenFadedIn()) {
          yield Util.wait(0);
        }
      }
      this.freezePlayer(PlayerId(), false);
    });
  }
  freezePlayer(id, freeze) {
    const player = id;
    SetPlayerControl(player.toString(), !freeze, 0);
    const ped = GetPlayerPed(player);
    if (!freeze) {
      if (!IsEntityVisible(ped)) {
        SetEntityVisible(ped, true, false);
      }
      if (!IsPedInAnyVehicle(ped, false)) {
        SetEntityCollision(ped, true, false);
      }
      FreezeEntityPosition(ped, false);
      SetPlayerInvincible(player, false);
    } else {
      if (IsEntityVisible(ped)) {
        SetEntityVisible(ped, false, false);
      }
      SetEntityCollision(ped, false, false);
      FreezeEntityPosition(ped, true);
      SetPlayerInvincible(player, true);
      if (!IsPedFatallyInjured(ped)) {
        ClearPedTasksImmediately(ped);
      }
    }
  }
  onStart() {
    this.spawnPlayer(new import_fivem_js.Vector3(0, 0, 0)).then(() => {
      console.log(`player spawned`);
    });
  }
};
__decorateClass([
  Event("onClientMapStart", { net: false })
], SpawnClient.prototype, "onStart", 1);
SpawnClient = __decorateClass([
  Module({
    global: true
  })
], SpawnClient);

// src/modules/dev/client.ts
var DevClient = class {
  constructor(notify) {
    this.notify = notify;
  }
  getCoords() {
    console.log("doing coords");
    const coords = GetEntityCoords(PlayerPedId());
    this.notify.sendStandard(`coords ${JSON.stringify(coords)}`);
    console.log(`coords`, coords);
  }
  $onReady() {
    console.log(`dev log ready`);
  }
};
__decorateClass([
  Command("coords")
], DevClient.prototype, "getCoords", 1);
DevClient = __decorateClass([
  Module({
    global: true
  })
], DevClient);

// src/client/main.ts
var ClientApp = class {
};
ClientApp = __decorateClass([
  App({
    modules: [TestClient, MapManagerClient, SpawnClient, DevClient]
  })
], ClientApp);
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
