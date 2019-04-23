// { "framework": "Vue"} 

/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (t) {
  if ("object" == ( false ? "undefined" : _typeof2(exports)) && "undefined" != typeof module) module.exports = t();else if (true) !(__WEBPACK_AMD_DEFINE_RESULT__ = (function (e, n, r) {
    r.exports = t();
  }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {
    ("undefined" != typeof window ? window : "undefined" != typeof self ? self : "undefined" != typeof global ? global : this).index = t();
  }
}(function () {
  return function (t) {
    var e = {};function n(r) {
      if (e[r]) return e[r].exports;var o = e[r] = { i: r, l: !1, exports: {} };return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
    }return n.m = t, n.c = e, n.d = function (t, e, r) {
      n.o(t, e) || Object.defineProperty(t, e, { configurable: !1, enumerable: !0, get: r });
    }, n.n = function (t) {
      var e = t && t.__esModule ? function () {
        return t.default;
      } : function () {
        return t;
      };return n.d(e, "a", e), e;
    }, n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }, n.p = "", n(n.s = 0);
  }([function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var r = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (t) {
      return typeof t === "undefined" ? "undefined" : _typeof2(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof2(t);
    },
        o = n(1),
        i = n(3);function a(t) {
      try {
        if (void 0 !== ("undefined" == typeof weex ? "undefined" : r(weex)) && weex.requireModule) return weex.requireModule(t);
      } catch (t) {}return window.require("@weex-module/" + t);
    }var s = !0,
        u = !0,
        c = void 0,
        l = {};if (o.isWeb) l = n(4);else {
      try {
        c = a("bindingx"), s = !0;
      } catch (t) {
        s = !1;
      }if (!c || !c.bind) try {
        c = a("binding"), s = !0;
      } catch (t) {
        s = !1;
      }if (!(s = !!(c && c.bind && c.unbind && c.getComputedStyle))) try {
        c = a("expressionBinding"), u = !0;
      } catch (t) {
        u = !1;
      }u = !(!c || !c.bind && !c.createBinding);
    }function f(t) {
      if (void 0 !== t) {
        try {
          t = JSON.parse(t);
        } catch (t) {}var e = {};if ("string" == typeof t ? e.origin = t : t && (e.origin = t.origin, e.transformed = t.transformed), e.transformed || e.origin) return e.transformed = e.transformed || (0, i.parse)(e.origin), e;
      }
    }e.default = { isSupportNewBinding: s, isSupportBinding: u, _bindingInstances: [], bind: function bind(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function () {};if (!t) throw new Error("should pass options for binding");if (function (t) {
          t && (t.exitExpression = f(t.exitExpression), t.props && t.props.forEach(function (t) {
            t.expression = f(t.expression);
          }));
        }(t), !o.isWeex) return l.bind(t, e);if (c && u) {
          if (s) return c.bind(t, t && "timing" === t.eventType ? function (t) {
            return function () {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};if ("function" == typeof t) return t({ state: "end" === e.state ? "exit" : e.state, t: void 0 !== e.t ? e.t : e.deltaT });
            };
          }(e) : e);c.enableBinding(t.anchor, t.eventType), c.createBinding(t.anchor, t.eventType, "", function (t) {
            if (t && t.props) return t.props.map(function (t) {
              return { element: t.element, property: t.property, expression: t.expression.transformed };
            });
          }(t), e);
        }
      }, unbind: function unbind(t) {
        if (!t) throw new Error("should pass options for binding");return o.isWeex ? c && u ? s ? c.unbind(t) : c.disableBinding(t.anchor, t.eventType) : void 0 : l.unbind(t);
      }, unbindAll: function unbindAll() {
        return o.isWeex ? c && u ? s ? c.unbindAll() : c.disableAll() : void 0 : l.unbindAll();
      }, prepare: function prepare(t) {
        if (o.isWeex && c && u) return s ? c.prepare(t) : c.enableBinding(t.anchor, t.eventType);
      }, getComputedStyle: function getComputedStyle(t) {
        return o.isWeex ? s ? c.getComputedStyle(t) : {} : l.getComputedStyle(t);
      } }, t.exports = e.default;
  }, function (t, e, n) {
    "use strict";
    (function (n) {
      function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (t) {
          return typeof t === "undefined" ? "undefined" : _typeof2(t);
        } : function (t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof2(t);
        })(t);
      }Object.defineProperty(e, "__esModule", { value: !0 }), e.default = e.isReactNative = e.isWeex = e.isNode = e.isWeb = void 0;var o = "object" === ("undefined" == typeof navigator ? "undefined" : r(navigator)) && ("Mozilla" === navigator.appCodeName || "Gecko" === navigator.product);e.isWeb = o;var i = void 0 !== n && !(!n.versions || !n.versions.node);e.isNode = i;var a = "function" == typeof callNative || "object" === ("undefined" == typeof WXEnvironment ? "undefined" : r(WXEnvironment)) && "Web" !== WXEnvironment.platform;e.isWeex = a;var s = "undefined" != typeof __fbBatchedBridgeConfig;e.isReactNative = s, e.default = t.exports;var u = t.exports;e.default = u;
    }).call(e, n(2));
  }, function (t, e) {
    var n,
        r,
        o = t.exports = {};function i() {
      throw new Error("setTimeout has not been defined");
    }function a() {
      throw new Error("clearTimeout has not been defined");
    }function s(t) {
      if (n === setTimeout) return setTimeout(t, 0);if ((n === i || !n) && setTimeout) return n = setTimeout, setTimeout(t, 0);try {
        return n(t, 0);
      } catch (e) {
        try {
          return n.call(null, t, 0);
        } catch (e) {
          return n.call(this, t, 0);
        }
      }
    }!function () {
      try {
        n = "function" == typeof setTimeout ? setTimeout : i;
      } catch (t) {
        n = i;
      }try {
        r = "function" == typeof clearTimeout ? clearTimeout : a;
      } catch (t) {
        r = a;
      }
    }();var u,
        c = [],
        l = !1,
        f = -1;function p() {
      l && u && (l = !1, u.length ? c = u.concat(c) : f = -1, c.length && h());
    }function h() {
      if (!l) {
        var t = s(p);l = !0;for (var e = c.length; e;) {
          for (u = c, c = []; ++f < e;) {
            u && u[f].run();
          }f = -1, e = c.length;
        }u = null, l = !1, function (t) {
          if (r === clearTimeout) return clearTimeout(t);if ((r === a || !r) && clearTimeout) return r = clearTimeout, clearTimeout(t);try {
            r(t);
          } catch (e) {
            try {
              return r.call(null, t);
            } catch (e) {
              return r.call(this, t);
            }
          }
        }(t);
      }
    }function d(t, e) {
      this.fun = t, this.array = e;
    }function v() {}o.nextTick = function (t) {
      var e = new Array(arguments.length - 1);if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) {
        e[n - 1] = arguments[n];
      }c.push(new d(t, e)), 1 !== c.length || l || s(h);
    }, d.prototype.run = function () {
      this.fun.apply(null, this.array);
    }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = v, o.addListener = v, o.once = v, o.off = v, o.removeListener = v, o.removeAllListeners = v, o.emit = v, o.prependListener = v, o.prependOnceListener = v, o.listeners = function (t) {
      return [];
    }, o.binding = function (t) {
      throw new Error("process.binding is not supported");
    }, o.cwd = function () {
      return "/";
    }, o.chdir = function (t) {
      throw new Error("process.chdir is not supported");
    }, o.umask = function () {
      return 0;
    };
  }, function (module, exports, __webpack_require__) {
    !function (t, e) {
      module.exports = e();
    }("undefined" != typeof self && self, function () {
      return function (t) {
        var e = {};function n(r) {
          if (e[r]) return e[r].exports;var o = e[r] = { i: r, l: !1, exports: {} };return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
        }return n.m = t, n.c = e, n.d = function (t, e, r) {
          n.o(t, e) || Object.defineProperty(t, e, { configurable: !1, enumerable: !0, get: r });
        }, n.n = function (t) {
          var e = t && t.__esModule ? function () {
            return t.default;
          } : function () {
            return t;
          };return n.d(e, "a", e), e;
        }, n.o = function (t, e) {
          return Object.prototype.hasOwnProperty.call(t, e);
        }, n.p = "", n(n.s = 0);
      }([function (module, exports, __webpack_require__) {
        "use strict";
        var _typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (t) {
          return typeof t === "undefined" ? "undefined" : _typeof2(t);
        } : function (t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof2(t);
        },
            lex = { InputElementDiv: "<WhiteSpace>|<LineTerminator>|<ReservedWord>|<Identifier>|<NumericLiteral>|<Punctuator>|<StringLiteral>", InputElementRegExp: "<WhiteSpace>|<LineTerminator>|<ReservedWord>|<Identifier>|<NumericLiteral>|<Punctuator>|<StringLiteral>", ReservedWord: "<Keyword>|<NullLiteral>|<BooleanLiteral>", WhiteSpace: /[\t\v\f\u0020\u00A0\u1680\u180E\u2000-\u200A\u202F\u205f\u3000\uFEFF]/, LineTerminator: /[\n\r\u2028\u2029]/, Keyword: /new(?![_$a-zA-Z0-9])|void(?![_$a-zA-Z0-9])|delete(?![_$a-zA-Z0-9])|in(?![_$a-zA-Z0-9])|instanceof(?![_$a-zA-Z0-9])|typeof(?![_$a-zA-Z0-9])/, NullLiteral: /null(?![_$a-zA-Z0-9])/, BooleanLiteral: /(?:true|false)(?![_$a-zA-Z0-9])/, Identifier: /[_$a-zA-Z][_$a-zA-Z0-9]*/, Punctuator: /\/|=>|\*\*|>>>=|>>=|<<=|===|!==|>>>|<<|%=|\*=|-=|\+=|<=|>=|==|!=|\^=|\|=|\|\||&&|&=|>>|\+\+|--|\:|}|\*|&|\||\^|!|~|-|\+|\?|%|=|>|<|,|;|\.(?![0-9])|\]|\[|\)|\(|{/, DivPunctuator: /\/=|\//, NumericLiteral: /(?:0[xX][0-9a-fA-F]*|\.[0-9]+|(?:[1-9]+[0-9]*|0)(?:\.[0-9]*|\.)?)(?:[eE][+-]{0,1}[0-9]+)?(?![_$a-zA-Z0-9])/, StringLiteral: /"(?:[^"\n\\\r\u2028\u2029]|\\(?:['"\\bfnrtv\n\r\u2028\u2029]|\r\n)|\\x[0-9a-fA-F]{2}|\\u[0-9a-fA-F]{4}|\\[^0-9ux'"\\bfnrtv\n\\\r\u2028\u2029])*"|'(?:[^'\n\\\r\u2028\u2029]|\\(?:['"\\bfnrtv\n\r\u2028\u2029]|\r\n)|\\x[0-9a-fA-F]{2}|\\u[0-9a-fA-F]{4}|\\[^0-9ux'"\\bfnrtv\n\\\r\u2028\u2029])*'/, RegularExpressionLiteral: /\/(?:\[(?:\\[\s\S]|[^\]])*\]|[^*\/\\\n\r\u2028\u2029]|\\[^\n\r\u2028\u2029])(?:\[(?:\\[\s\S]|[^\]])*\]|[^\/\\\n\r\u2028\u2029]|\\[^\n\r\u2028\u2029])*\/[0-9a-zA-Z]*/ };function XRegExp(t, e, n) {
          var r = [e];var o = function e(o) {
            var i = new RegExp();return i.compile(o.replace(/<([^>]+)>/g, function (n, o) {
              return t[o] ? (r.push(o), t[o] instanceof RegExp ? "(" + t[o].source + ")" : "(" + e(t[o]).source + ")") : "";
            }), n), i;
          }(t[e]);this.exec = function (t) {
            var e = o.exec(t);if (null == e) return null;for (var n = new String(e[0]), i = 0; i < r.length; i++) {
              e[i] && (n[r[i]] = e[i]);
            }return n;
          }, Object.defineProperty(this, "lastIndex", { get: function get() {
              return o.lastIndex;
            }, set: function set(t) {
              o.lastIndex = t;
            } });
        }function LexicalParser() {
          var t,
              e = new XRegExp(lex, "InputElementDiv", "g"),
              n = new XRegExp(lex, "InputElementRegExp", "g");Object.defineProperty(this, "source", { get: function get() {
              return t;
            }, set: function set(r) {
              t = r, e.lastIndex = 0, n.lastIndex = 0;
            } }), this.reset = function () {
            e.lastIndex = 0, n.lastIndex = 0;
          }, this.getNextToken = function (r) {
            var o,
                i = e.lastIndex,
                a = (o = r ? e : n).exec(t);if (a && o.lastIndex - i > a.length) throw new SyntaxError("Unexpected token ILLEGAL");return e.lastIndex = o.lastIndex, n.lastIndex = o.lastIndex, a;
          };
        }var rules = { IdentifierName: [["Identifier"]], Literal: [["NullLiteral"], ["BooleanLiteral"], ["NumericLiteral"], ["StringLiteral"], ["RegularExpressionLiteral"]], PrimaryExpression: [["Identifier"], ["Literal"], ["(", "Expression", ")"]], CallExpression: [["PrimaryExpression", "Arguments"], ["CallExpression", "Arguments"]], Arguments: [["(", ")"], ["(", "ArgumentList", ")"]], ArgumentList: [["ConditionalExpression"], ["ArgumentList", ",", "ConditionalExpression"]], LeftHandSideExpression: [["PrimaryExpression"], ["CallExpression"]], UnaryExpression: [["LeftHandSideExpression"], ["void", "UnaryExpression"], ["+", "UnaryExpression"], ["-", "UnaryExpression"], ["~", "UnaryExpression"], ["!", "UnaryExpression"]], ExponentiationExpression: [["UnaryExpression"], ["ExponentiationExpression", "**", "UnaryExpression"]], MultiplicativeExpression: [["MultiplicativeExpression", "/", "ExponentiationExpression"], ["ExponentiationExpression"], ["MultiplicativeExpression", "*", "ExponentiationExpression"], ["MultiplicativeExpression", "%", "ExponentiationExpression"]], AdditiveExpression: [["MultiplicativeExpression"], ["AdditiveExpression", "+", "MultiplicativeExpression"], ["AdditiveExpression", "-", "MultiplicativeExpression"]], ShiftExpression: [["AdditiveExpression"], ["ShiftExpression", "<<", "AdditiveExpression"], ["ShiftExpression", ">>", "AdditiveExpression"], ["ShiftExpression", ">>>", "AdditiveExpression"]], RelationalExpression: [["ShiftExpression"], ["RelationalExpression", "<", "ShiftExpression"], ["RelationalExpression", ">", "ShiftExpression"], ["RelationalExpression", "<=", "ShiftExpression"], ["RelationalExpression", ">=", "ShiftExpression"], ["RelationalExpression", "instanceof", "ShiftExpression"], ["RelationalExpression", "in", "ShiftExpression"]], EqualityExpression: [["RelationalExpression"], ["EqualityExpression", "==", "RelationalExpression"], ["EqualityExpression", "!=", "RelationalExpression"], ["EqualityExpression", "===", "RelationalExpression"], ["EqualityExpression", "!==", "RelationalExpression"]], BitwiseANDExpression: [["EqualityExpression"], ["BitwiseANDExpression", "&", "EqualityExpression"]], BitwiseXORExpression: [["BitwiseANDExpression"], ["BitwiseXORExpression", "^", "BitwiseANDExpression"]], BitwiseORExpression: [["BitwiseXORExpression"], ["BitwiseORExpression", "|", "BitwiseXORExpression"]], LogicalANDExpression: [["BitwiseORExpression"], ["LogicalANDExpression", "&&", "BitwiseORExpression"]], LogicalORExpression: [["LogicalANDExpression"], ["LogicalORExpression", "||", "LogicalANDExpression"]], ConditionalExpression: [["LogicalORExpression"], ["LogicalORExpression", "?", "LogicalORExpression", ":", "LogicalORExpression"]], Expression: [["ConditionalExpression"], ["Expression", ",", "ConditionalExpression"]], Program: [["Expression"]] };function _Symbol(t, e) {
          this.name = t, this.token = e, this.childNodes = [], this.toString = function (t) {
            if (t || (t = ""), 1 == this.childNodes.length) return this.childNodes[0].toString(t);for (var e = t + this.name + (void 0 != this.token && this.name != this.token ? ":" + this.token : "") + "\n", n = 0; n < this.childNodes.length; n++) {
              e += this.childNodes[n].toString(t + "    ");
            }return e;
          };
        }function SyntacticalParser() {
          var t = { Program: "$" },
              e = {};!function t(n) {
            e[JSON.stringify(n)] = n;for (var r = Object.getOwnPropertyNames(n); r.length;) {
              var o = r.shift();rules[o] && rules[o].forEach(function (t) {
                n[t[0]] || r.push(t[0]);var e = n;t.forEach(function (t) {
                  e[t] || (e[t] = {}), e = e[t];
                }), n[o].$div && (e.$div = !0), e.$reduce = o, e.$count = t.length;
              });
            }for (var i in n) {
              "object" != _typeof(n[i]) || "$" == i.charAt(0) || n[i].$closure || (e[JSON.stringify(n[i])] ? n[i] = e[JSON.stringify(n[i])] : t(n[i]));
            }n.$closure = !0;
          }(t);var n = [],
              r = [t],
              o = t;this.insertSymbol = function (t, e) {
            for (; !o[t.name] && o.$reduce;) {
              for (var i = o.$count, a = new _Symbol(o.$reduce); i--;) {
                a.childNodes.push(n.pop()), r.pop();
              }o = r[r.length - 1], this.insertSymbol(a);
            }if (o = o[t.name], n.push(t), r.push(o), !o) throw new Error();return o.$div;
          }, this.reset = function () {
            o = t, n = [], r = [t];
          }, Object.defineProperty(this, "grammarTree", { get: function get() {
              try {
                for (; o.$reduce;) {
                  for (var t = o.$count, e = new _Symbol(o.$reduce); t--;) {
                    e.childNodes.push(n.pop()), r.pop();
                  }o = r[r.length - 1], this.insertSymbol(e);
                }if (n.length > 0 && o[";"]) return this.insertSymbol(new _Symbol(";", ";")), this.grammarTree;if (1 != n.length || "Program" != n[0].name) throw new Error();
              } catch (t) {
                throw new SyntaxError("Unexpected end of input");
              }return n[0];
            } });
        }function Parser() {
          this.lexicalParser = new LexicalParser(), this.syntacticalParser = new SyntacticalParser();var t = {};["NullLiteral", "BooleanLiteral", "NumericLiteral", "StringLiteral", "RegularExpressionLiteral", "Identifier", "**", "=>", "{", "}", "(", ")", "[", "]", ".", ";", ",", "<", ">", "<=", ">=", "==", "!=", "===", "!==", "+", "-", "*", "%", "++", "--", "<<", ">>", ">>>", "&", "|", "^", "!", "~", "&&", "||", "?", ":", "=", "+=", "-=", "*=", "%=", "<<=", ">>=", ">>>=", "&=", "|=", "^=", "/", "/=", "instanceof", "typeof", "new", "void", "debugger", "this", "delete", "in"].forEach(function (e) {
            Object.defineProperty(t, e, {});
          }), this.reset = function () {
            this.lexicalParser.reset(), this.syntacticalParser.reset();
          }, this.parse = function (e, n) {
            var r,
                o = this,
                i = !1;this.lexicalParser.source = e;for (var a = !1; r = this.lexicalParser.getNextToken(a);) {
              n && n(r);try {
                if (Object.getOwnPropertyNames(r).some(function (e) {
                  return !!t.hasOwnProperty(e) && (a = o.syntacticalParser.insertSymbol(new _Symbol(e, r), i), i = !1, !0);
                })) continue;(r.Keyword || r.Punctuator || r.DivPunctuator) && t.hasOwnProperty(r.toString()) && (a = this.syntacticalParser.insertSymbol(new _Symbol(r.toString(), r), i));
              } catch (t) {
                throw new SyntaxError("Unexpected token " + r);
              }
            }return this.syntacticalParser.grammarTree;
          };
        }var parser = new Parser();function JavaScriptExpression(text) {
          parser.reset(), this.tree = parser.parse(text), this.paths = [];var context = Object.create(null),
              me = this,
              pathIndex = Object.create(null);function checkSimple(t) {
            for (var e = t; e.childNodes.length <= 1 && "MemberExpression" !== e.name;) {
              e = e.childNodes[0];
            }"MemberExpression" === e.name ? me.isSimple = !0 : me.isSimple = !1;
          }function walk(t) {
            if ("CallExpression" === t.name && "CallExpression" !== t.childNodes[t.childNodes.length - 1].name) {
              getPath(t.childNodes[1]);walk(t.childNodes[0]);
            } else if ("NewExpression" === t.name && 1 === t.childNodes.length) getPath(t.childNodes[0]);else if ("MemberExpression" === t.name && 1 === t.childNodes.length) getPath(t);else for (var e = 0; e < t.childNodes.length; e++) {
              walk(t.childNodes[e]);
            }
          }function getPath(t) {
            var e;if ("IdentifierName" === t.childNodes[0].name) return (e = getPath(t.childNodes[2])) && (e = e.concat(t.childNodes[0].childNodes[0].token.toString())), createPath(e), e;if ("PrimaryExpression" === t.childNodes[0].name) return "Identifier" === t.childNodes[0].childNodes[0].name ? (createPath(e = [t.childNodes[0].childNodes[0].token.toString()]), e) : null;if ("]" === t.childNodes[0].name) return getPath(t.childNodes[3]), walk(t.childNodes[1]), null;if ("Arguments" === t.childNodes[0].name) return walk(t.childNodes[0]), walk(t.childNodes[1]), null;for (var n = 0; n < t.childNodes.length; n++) {
              walk(t.childNodes[n]);
            }
          }function createPath(t) {
            for (var e = context, n = 0; n < t.length - 1; n++) {
              e[t[n]] || (e[t[n]] = Object.create(null)), e = e[t[n]];
            }me.paths.push(t), pathIndex[t.join(".")] = !1;
          }this.isSimple, this.isConst, walk(this.tree), checkSimple(this.tree), 0 === this.paths.length && (this.isConst = !0), this.setter = function (t) {
            for (var e = context, n = 0; n < t.length - 1; n++) {
              e[t[n]] || (e[t[n]] = Object.create(null)), e = e[t[n]];
            }return { isCompleted: function isCompleted() {
                for (var t in pathIndex) {
                  if (!pathIndex[t]) return !1;
                }return !0;
              }, set: function set(r) {
                return pathIndex[t.join(".")] || (pathIndex[t.join(".")] = !0), e[t[n]] = r, this.isCompleted() ? me.exec() : void 0;
              } };
          }, this.valueOf = this.exec = function () {
            try {
              return function () {
                return eval(text);
              }.call(context);
            } catch (t) {}
          };
        }function visit(t) {
          var e,
              n = t.childNodes.slice().reverse(),
              r = n.filter(function (t) {
            return !t.token || !t.token.Punctuator;
          });if ("UnaryExpression" === t.name && 2 === n.length && "-" === n[0].name && 1 === r.length) return (e = visit(r[0])).value = -e.value, e;if ("Arguments" === t.name) {
            for (var o = [], i = r[0]; i;) {
              3 === i.childNodes.length && (o.unshift(i.childNodes[0]), i = i.childNodes[2]), 1 === i.childNodes.length && (o.unshift(i.childNodes[0]), i = null);
            }return { type: "Arguments", children: o.map(function (t) {
                return visit(t);
              }) };
          }if (r && 1 === r.length) return e = visit(r[0]);if (t.token && ["NullLiteral", "BooleanLiteral", "NumericLiteral", "StringLiteral", "Identifier"].some(function (e) {
            return t.token[e];
          })) {
            var a = Object.keys(t.token).filter(function (t) {
              return t.match(/Literal/) || t.match(/Identifier/);
            })[0];return { type: a, value: { NullLiteral: null, BooleanLiteral: Boolean(t.token), NumericLiteral: Number(t.token), StringLiteral: t.token, Identifier: t.token }[a] };
          }return "CallExpression" === t.name ? { type: "CallExpression", children: [visit(n[0]), visit(n[1])] } : { type: n.filter(function (t) {
              return t.token && t.token.Punctuator;
            })[0].name, children: n.filter(function (t) {
              return !t.token || !t.token.Punctuator;
            }).map(function (t) {
              return visit(t);
            }) };
        }function parse(t) {
          var e = new JavaScriptExpression(t);return JSON.stringify(visit(e.tree), null);
        }module.exports = { parse: parse };
      }]);
    });
  }, function (t, e, n) {
    !function (e, n) {
      t.exports = n();
    }("undefined" != typeof self && self, function () {
      return function (t) {
        var e = {};function n(r) {
          if (e[r]) return e[r].exports;var o = e[r] = { i: r, l: !1, exports: {} };return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
        }return n.m = t, n.c = e, n.d = function (t, e, r) {
          n.o(t, e) || Object.defineProperty(t, e, { configurable: !1, enumerable: !0, get: r });
        }, n.n = function (t) {
          var e = t && t.__esModule ? function () {
            return t.default;
          } : function () {
            return t;
          };return n.d(e, "a", e), e;
        }, n.o = function (t, e) {
          return Object.prototype.hasOwnProperty.call(t, e);
        }, n.p = "", n(n.s = 9);
      }([function (t, e, n) {
        "use strict";
        /*
        object-assign
        (c) Sindre Sorhus
        @license MIT
        */
        var r = Object.getOwnPropertySymbols,
            o = Object.prototype.hasOwnProperty,
            i = Object.prototype.propertyIsEnumerable;t.exports = function () {
          try {
            if (!Object.assign) return !1;var t = new String("abc");if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return !1;for (var e = {}, n = 0; n < 10; n++) {
              e["_" + String.fromCharCode(n)] = n;
            }if ("0123456789" !== Object.getOwnPropertyNames(e).map(function (t) {
              return e[t];
            }).join("")) return !1;var r = {};return "abcdefghijklmnopqrst".split("").forEach(function (t) {
              r[t] = t;
            }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("");
          } catch (t) {
            return !1;
          }
        }() ? Object.assign : function (t, e) {
          for (var n, a, s = function (t) {
            if (null === t || void 0 === t) throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t);
          }(t), u = 1; u < arguments.length; u++) {
            for (var c in n = Object(arguments[u])) {
              o.call(n, c) && (s[c] = n[c]);
            }if (r) {
              a = r(n);for (var l = 0; l < a.length; l++) {
                i.call(n, a[l]) && (s[a[l]] = n[a[l]]);
              }
            }
          }return s;
        };
      }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });var r = function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
            }
          }return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e;
          };
        }(),
            o = function (t) {
          return t && t.__esModule ? t : { default: t };
        }(n(2)),
            i = n(3);var a = function () {
          function t(e) {
            !function (t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this, t), this.binding = null, this.binding = e;var n = e.options.props;o.default.map(n, function (t) {
              var e = t.element,
                  n = t.config;n && e && (n.perspective && e.parentNode && (e.parentNode.style[(0, i.prefixStyle)("transformStyle")] = "preserve-3d", e.parentNode.style[(0, i.prefixStyle)("perspective")] = n.perspective + "px", e.parentNode.style[(0, i.prefixStyle)("perspectiveOrigin")] = "0 0"), n.transformOrigin && (e.style[(0, i.prefixStyle)("transformOrigin")] = n.transformOrigin));
            });
          }return r(t, [{ key: "destroy", value: function value() {} }]), t;
        }();e.default = a;
      }, function (t, e, n) {
        !function (e, n) {
          t.exports = n();
        }("undefined" != typeof self && self, function () {
          return function (t) {
            var e = {};function n(r) {
              if (e[r]) return e[r].exports;var o = e[r] = { i: r, l: !1, exports: {} };return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
            }return n.m = t, n.c = e, n.d = function (t, e, r) {
              n.o(t, e) || Object.defineProperty(t, e, { configurable: !1, enumerable: !0, get: r });
            }, n.n = function (t) {
              var e = t && t.__esModule ? function () {
                return t.default;
              } : function () {
                return t;
              };return n.d(e, "a", e), e;
            }, n.o = function (t, e) {
              return Object.prototype.hasOwnProperty.call(t, e);
            }, n.p = "", n(n.s = 0);
          }([function (t, e, n) {
            "use strict";
            function r(t, e) {
              if (t instanceof Array) return Array.prototype.map.call(t, e);var n = [];return o(t, function (t, r) {
                n.push(e(t, r));
              }), n;
            }function o(t, e) {
              if (t instanceof Array) return Array.prototype.forEach.call(t, e);Object.keys(t).forEach(function (n) {
                e(t[n], n);
              });
            }function i(t, e) {
              var n = null;return o(t, function (t, r) {
                if ("function" == typeof e) e(t, r) && (n = t);else {
                  var o = Object.keys(e)[0];o && t[o] === e[o] && (n = t);
                }
              }), n;
            }t.exports = { find: i, forEach: o, map: r, filter: function filter(t, e) {
                var n = [];return o(t, function (t, r) {
                  e(t, r) && n.push(t);
                }), n;
              }, dropWhile: function dropWhile(t, e) {
                var n = [];return r(t, function (t, r) {
                  e(t, r) || n.push(t);
                }), n;
              }, findIndex: function findIndex(t, e) {
                return t.indexOf(i(t, e));
              } };
          }]);
        });
      }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });var r = function () {
          return function (t, e) {
            if (Array.isArray(t)) return t;if (Symbol.iterator in Object(t)) return function (t, e) {
              var n = [],
                  r = !0,
                  o = !1,
                  i = void 0;try {
                for (var a, s = t[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0) {}
              } catch (t) {
                o = !0, i = t;
              } finally {
                try {
                  !r && s.return && s.return();
                } finally {
                  if (o) throw i;
                }
              }return n;
            }(t, e);throw new TypeError("Invalid attempt to destructure non-iterable instance");
          };
        }();function o(t) {
          return t / document.body.clientWidth * 750;
        }var i = function () {
          for (var t = document.createElement("div").style, e = ["t", "webkitT", "MozT", "msT", "OT"], n = 0, r = e.length; n < r; n++) {
            if (e[n] + "ransform" in t) return e[n].substr(0, e[n].length - 1);
          }return !1;
        }();var a = { a: 7, c: 6, h: 1, l: 2, m: 2, q: 4, s: 4, t: 2, v: 1, z: 0 },
            s = /([astvzqmhlc])([^astvzqmhlc]*)/gi;e.matrixToTransformObj = function (t) {
          "none" === t && (t = "matrix(1,0,0,1,0,0)");Math.atan;var e = Math.atan2,
              n = Math.round,
              i = Math.sqrt,
              a = (Math.PI, { skewY: 0, skewX: 0, translateX: 0, translateY: 0, scaleX: 1, scaleY: 1 }),
              s = t.split("(")[1];if (!(s = (s = s && s.split(")")[0]) && s.split(",")) || !s.length) return a;var u = r(s, 6),
              c = u[0],
              l = u[1],
              f = u[2],
              p = u[3],
              h = u[4],
              d = u[5];return a.rotate = a.rotateZ = n(e(parseFloat(l), parseFloat(c)) * (180 / Math.PI)) || 0, a.translateX = void 0 !== h ? o(h) : 0, a.translateY = void 0 !== d ? o(d) : 0, a.scaleX = i(c * c + l * l), a.scaleY = i(f * f + p * p), a;
        }, e.pxTo750 = o, e.px = function (t) {
          return t / 750 * document.body.clientWidth;
        }, e.clamp = function (t, e, n) {
          return t < e ? e : t > n ? n : t;
        }, e.prefixStyle = function (t) {
          return !1 !== i && ("" === i ? t : i + t.charAt(0).toUpperCase() + t.substr(1));
        }, e.parseSVGPath = function (t, e) {
          var n = [];return t.replace(s, function (t, e, r) {
            var o = e.toLowerCase();for (r = function (t) {
              var e = t.match(/-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/gi);return e ? e.map(Number) : [];
            }(r), "m" === o && r.length > 2 && (n.push([e].concat(r.splice(0, 2))), o = "l", e = "m" === e ? "l" : "L"); r.length >= 0;) {
              if (r.length === a[o]) return r.unshift(e), n.push(r);if (r.length < a[o]) throw new Error("malformed path data");n.push([e].concat(r.splice(0, a[o])));
            }
          }), "function" == typeof e ? n.map(function (t) {
            return t.map(function (t, n) {
              return n > 0 ? e(t) : t;
            });
          }) : n;
        }, e.stringifySVGPath = function (t, e) {
          return "function" == typeof e && (t = t.map(function (t) {
            return t.map(function (t, n) {
              return n > 0 ? e(t) : t;
            });
          })), t.map(function (t) {
            return t.join(" ");
          }).join(" ");
        }, e.interceptSVGPath = function (t, e, n, r) {
          return t && t[e] && (n = [r = (r && r.replace(/'|"/g, "") || t[e][0]).replace(/'|"/g, "")].concat(function (t) {
            if (Array.isArray(t)) {
              for (var e = 0, n = Array(t.length); e < t.length; e++) {
                n[e] = t[e];
              }return n;
            }return Array.from(t);
          }(n)), t[e] = n), t;
        };
      }, function (t, e, n) {
        !function (e, n) {
          t.exports = n();
        }(0, function () {
          return function (t) {
            var e = {};function n(r) {
              if (e[r]) return e[r].exports;var o = e[r] = { i: r, l: !1, exports: {} };return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
            }return n.m = t, n.c = e, n.d = function (t, e, r) {
              n.o(t, e) || Object.defineProperty(t, e, { configurable: !1, enumerable: !0, get: r });
            }, n.n = function (t) {
              var e = t && t.__esModule ? function () {
                return t.default;
              } : function () {
                return t;
              };return n.d(e, "a", e), e;
            }, n.o = function (t, e) {
              return Object.prototype.hasOwnProperty.call(t, e);
            }, n.p = "", n(n.s = 3);
          }([function (t, e, n) {
            "use strict";
            var r = Math.PI,
                o = Math.sin,
                i = Math.cos,
                a = Math.sqrt,
                s = Math.pow,
                u = 1.70158,
                c = 1.525 * u,
                l = 2 * r / 3,
                f = 2 * r / 4.5;function p(t) {
              var e = 7.5625,
                  n = 2.75;return t < 1 / n ? e * t * t : t < 2 / n ? e * (t -= 1.5 / n) * t + .75 : t < 2.5 / n ? e * (t -= 2.25 / n) * t + .9375 : e * (t -= 2.625 / n) * t + .984375;
            }var h = { linear: function linear(t) {
                return t;
              }, easeInQuad: function easeInQuad(t) {
                return t * t;
              }, easeOutQuad: function easeOutQuad(t) {
                return 1 - (1 - t) * (1 - t);
              }, easeInOutQuad: function easeInOutQuad(t) {
                return t < .5 ? 2 * t * t : 1 - s(-2 * t + 2, 2) / 2;
              }, easeInCubic: function easeInCubic(t) {
                return t * t * t;
              }, easeOutCubic: function easeOutCubic(t) {
                return 1 - s(1 - t, 3);
              }, easeInOutCubic: function easeInOutCubic(t) {
                return t < .5 ? 4 * t * t * t : 1 - s(-2 * t + 2, 3) / 2;
              }, easeInQuart: function easeInQuart(t) {
                return t * t * t * t;
              }, easeOutQuart: function easeOutQuart(t) {
                return 1 - s(1 - t, 4);
              }, easeInOutQuart: function easeInOutQuart(t) {
                return t < .5 ? 8 * t * t * t * t : 1 - s(-2 * t + 2, 4) / 2;
              }, easeInQuint: function easeInQuint(t) {
                return t * t * t * t * t;
              }, easeOutQuint: function easeOutQuint(t) {
                return 1 - s(1 - t, 5);
              }, easeInOutQuint: function easeInOutQuint(t) {
                return t < .5 ? 16 * t * t * t * t * t : 1 - s(-2 * t + 2, 5) / 2;
              }, easeInSine: function easeInSine(t) {
                return 1 - i(t * r / 2);
              }, easeOutSine: function easeOutSine(t) {
                return o(t * r / 2);
              }, easeInOutSine: function easeInOutSine(t) {
                return -(i(r * t) - 1) / 2;
              }, easeInExpo: function easeInExpo(t) {
                return 0 === t ? 0 : s(2, 10 * t - 10);
              }, easeOutExpo: function easeOutExpo(t) {
                return 1 === t ? 1 : 1 - s(2, -10 * t);
              }, easeInOutExpo: function easeInOutExpo(t) {
                return 0 === t ? 0 : 1 === t ? 1 : t < .5 ? s(2, 20 * t - 10) / 2 : (2 - s(2, -20 * t + 10)) / 2;
              }, easeInCirc: function easeInCirc(t) {
                return 1 - a(1 - s(t, 2));
              }, easeOutCirc: function easeOutCirc(t) {
                return a(1 - s(t - 1, 2));
              }, easeInOutCirc: function easeInOutCirc(t) {
                return t < .5 ? (1 - a(1 - s(2 * t, 2))) / 2 : (a(1 - s(-2 * t + 2, 2)) + 1) / 2;
              }, easeInElastic: function easeInElastic(t) {
                return 0 === t ? 0 : 1 === t ? 1 : -s(2, 10 * t - 10) * o((10 * t - 10.75) * l);
              }, easeOutElastic: function easeOutElastic(t) {
                return 0 === t ? 0 : 1 === t ? 1 : s(2, -10 * t) * o((10 * t - .75) * l) + 1;
              }, easeInOutElastic: function easeInOutElastic(t) {
                return 0 === t ? 0 : 1 === t ? 1 : t < .5 ? -s(2, 20 * t - 10) * o((20 * t - 11.125) * f) / 2 : s(2, -20 * t + 10) * o((20 * t - 11.125) * f) / 2 + 1;
              }, easeInBack: function easeInBack(t) {
                return 2.70158 * t * t * t - u * t * t;
              }, easeOutBack: function easeOutBack(t) {
                return 1 + 2.70158 * s(t - 1, 3) + u * s(t - 1, 2);
              }, easeInOutBack: function easeInOutBack(t) {
                return t < .5 ? s(2 * t, 2) * (7.189819 * t - c) / 2 : (s(2 * t - 2, 2) * ((c + 1) * (2 * t - 2) + c) + 2) / 2;
              }, easeInBounce: function easeInBounce(t) {
                return 1 - p(1 - t);
              }, easeOutBounce: p, easeInOutBounce: function easeInOutBounce(t) {
                return t < .5 ? (1 - p(1 - 2 * t)) / 2 : (1 + p(2 * t - 1)) / 2;
              }, cubicBezier: function cubicBezier() {} };t.exports = h;
          }, function (t, e, n) {
            "use strict";
            t.exports = function (t, e, n, r, o) {
              var i = function i(e) {
                var r = 1 - e;return 3 * r * r * e * t + 3 * r * e * e * n + e * e * e;
              },
                  a = function a(t) {
                var n = 1 - t;return 3 * n * n * t * e + 3 * n * t * t * r + t * t * t;
              },
                  s = function s(e) {
                var r = 1 - e;return 3 * (2 * (e - 1) * e + r * r) * t + 3 * (-e * e * e + 2 * r * e) * n;
              };return function (t) {
                var e,
                    n,
                    r,
                    u,
                    c,
                    l,
                    f = t;for (r = f, l = 0; l < 8; l++) {
                  if (u = i(r) - f, Math.abs(u) < o) return a(r);if (c = s(r), Math.abs(c) < 1e-6) break;r -= u / c;
                }if (n = 1, (r = f) < (e = 0)) return a(e);if (r > n) return a(n);for (; e < n;) {
                  if (u = i(r), Math.abs(u - f) < o) return a(r);f > u ? e = r : n = r, r = .5 * (n - e) + e;
                }return a(r);
              };
            };
          }, function (t, e, n) {
            "use strict";
            var r = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (t) {
              window.setTimeout(t, 1e3 / 60);
            },
                o = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || window.clearTimeout;t.exports = { raf: r, cancelRAF: o };
          }, function (t, e, n) {
            "use strict";
            t.exports = n(4);
          }, function (t, e, n) {
            "use strict";
            var r = n(0),
                o = n(1),
                i = n(2),
                a = i.raf,
                s = i.cancelRAF,
                u = n(5),
                c = "start",
                l = "end",
                f = "run",
                p = "stop",
                h = function h() {};function d(t) {
              this.init(t);
            }d.prototype = { init: function init(t) {
                this.cfg = u({ easing: "linear", duration: 1 / 0, onStart: h, onRun: h, onStop: h, onEnd: h }, t);
              }, run: function run() {
                var t = this.cfg,
                    e = t.duration,
                    n = t.onStart,
                    i = t.onRun;if (e <= 1 && (this.isfinished = !0, "function" == typeof i && i({ percent: 1 }), this.stop()), !this.isfinished) {
                  this._hasFinishedPercent = this._stop && this._stop.percent || 0, this._stop = null, this.start = Date.now(), this.percent = 0, "function" == typeof n && n({ percent: 0, type: c });var a = 1e3 / 60 / e / 4,
                      s = this.cfg.bezierArgs;this.easingFn = s && 4 === s.length ? o(s[0], s[1], s[2], s[3], a) : r[this.cfg.easing], this._run();
                }
              }, _run: function _run() {
                var t = this,
                    e = this.cfg,
                    n = e.onRun,
                    r = e.onStop;s(this._raf), this._raf = a(function () {
                  if (t.now = Date.now(), t.t = t.now - t.start, t.duration = t.now - t.start >= t.cfg.duration ? t.cfg.duration : t.now - t.start, t.progress = t.easingFn(t.duration / t.cfg.duration), t.percent = t.duration / t.cfg.duration + t._hasFinishedPercent, t.percent >= 1 || t._stop) return t.percent = t._stop && t._stop.percent ? t._stop.percent : 1, t.duration = t._stop && t._stop.duration ? t._stop.duration : t.duration, "function" == typeof n && n({ percent: t.progress, originPercent: t.percent, t: t.t, type: f }), "function" == typeof r && r({ percent: t.percent, t: t.t, type: p }), void (t.percent >= 1 && (t.isfinished = !0, t.stop()));"function" == typeof n && n({ percent: t.progress, originPercent: t.percent, t: t.t, type: f }), t._run();
                });
              }, stop: function stop() {
                var t = this.cfg.onEnd;this._stop = { percent: this.percent, now: this.now }, "function" == typeof t && t({ percent: 1, t: this.t, type: l }), s(this._raf);
              } }, d.Easing = r, d.Bezier = o, d.raf = a, d.cancelRAF = s, t.exports = d;
          }, function (t, e, n) {
            "use strict";
            /*
            object-assign
            (c) Sindre Sorhus
            @license MIT
            */
            var r = Object.getOwnPropertySymbols,
                o = Object.prototype.hasOwnProperty,
                i = Object.prototype.propertyIsEnumerable;t.exports = function () {
              try {
                if (!Object.assign) return !1;var t = new String("abc");if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return !1;for (var e = {}, n = 0; n < 10; n++) {
                  e["_" + String.fromCharCode(n)] = n;
                }if ("0123456789" !== Object.getOwnPropertyNames(e).map(function (t) {
                  return e[t];
                }).join("")) return !1;var r = {};return "abcdefghijklmnopqrst".split("").forEach(function (t) {
                  r[t] = t;
                }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("");
              } catch (t) {
                return !1;
              }
            }() ? Object.assign : function (t, e) {
              for (var n, a, s = function (t) {
                if (null === t || void 0 === t) throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t);
              }(t), u = 1; u < arguments.length; u++) {
                for (var c in n = Object(arguments[u])) {
                  o.call(n, c) && (s[c] = n[c]);
                }if (r) {
                  a = r(n);for (var l = 0; l < a.length; l++) {
                    i.call(n, a[l]) && (s[a[l]] = n[a[l]]);
                  }
                }
              }return s;
            };
          }]);
        });
      }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });var r = function (t) {
          return t && t.__esModule ? t : { default: t };
        }(n(6));function o(t, e, n) {
          this.x = t || 0, this.y = e || 0, this.z = n || 0;
        }o.prototype = { constructor: o, isVector3: !0, set: function set(t, e, n) {
            return this.x = t, this.y = e, this.z = n, this;
          }, applyEuler: function () {
            var t;return function (e) {
              return !1 === (e && e.isEuler) && console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."), void 0 === t && (t = new r.default()), this.applyQuaternion(t.setFromEuler(e));
            };
          }(), applyQuaternion: function applyQuaternion(t) {
            var e = this.x,
                n = this.y,
                r = this.z,
                o = t.x,
                i = t.y,
                a = t.z,
                s = t.w,
                u = s * e + i * r - a * n,
                c = s * n + a * e - o * r,
                l = s * r + o * n - i * e,
                f = -o * e - i * n - a * r;return this.x = u * s + f * -o + c * -a - l * -i, this.y = c * s + f * -i + l * -o - u * -a, this.z = l * s + f * -a + u * -i - c * -o, this;
          } }, e.default = o;
      }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });var r = function (t) {
          return t && t.__esModule ? t : { default: t };
        }(n(0));function o(t, e, n, r) {
          this._x = t || 0, this._y = e || 0, this._z = n || 0, this._w = void 0 !== r ? r : 1;
        }o.prototype = { constructor: o, get x() {
            return this._x;
          }, set x(t) {
            this._x = t, this.onChangeCallback();
          }, get y() {
            return this._y;
          }, set y(t) {
            this._y = t, this.onChangeCallback();
          }, get z() {
            return this._z;
          }, set z(t) {
            this._z = t, this.onChangeCallback();
          }, get w() {
            return this._w;
          }, set w(t) {
            this._w = t, this.onChangeCallback();
          }, set: function set(t, e, n, r) {
            return this._x = t, this._y = e, this._z = n, this._w = r, this.onChangeCallback(), this;
          }, clone: function clone() {
            return new this.constructor(this._x, this._y, this._z, this._w);
          }, copy: function copy(t) {
            return this._x = t.x, this._y = t.y, this._z = t.z, this._w = t.w, this.onChangeCallback(), this;
          }, setFromEuler: function setFromEuler(t, e) {
            if (!1 === (t && t.isEuler)) throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");var n = Math.cos(t._x / 2),
                r = Math.cos(t._y / 2),
                o = Math.cos(t._z / 2),
                i = Math.sin(t._x / 2),
                a = Math.sin(t._y / 2),
                s = Math.sin(t._z / 2),
                u = t.order;return "XYZ" === u ? (this._x = i * r * o + n * a * s, this._y = n * a * o - i * r * s, this._z = n * r * s + i * a * o, this._w = n * r * o - i * a * s) : "YXZ" === u ? (this._x = i * r * o + n * a * s, this._y = n * a * o - i * r * s, this._z = n * r * s - i * a * o, this._w = n * r * o + i * a * s) : "ZXY" === u ? (this._x = i * r * o - n * a * s, this._y = n * a * o + i * r * s, this._z = n * r * s + i * a * o, this._w = n * r * o - i * a * s) : "ZYX" === u ? (this._x = i * r * o - n * a * s, this._y = n * a * o + i * r * s, this._z = n * r * s - i * a * o, this._w = n * r * o + i * a * s) : "YZX" === u ? (this._x = i * r * o + n * a * s, this._y = n * a * o + i * r * s, this._z = n * r * s - i * a * o, this._w = n * r * o - i * a * s) : "XZY" === u && (this._x = i * r * o - n * a * s, this._y = n * a * o - i * r * s, this._z = n * r * s + i * a * o, this._w = n * r * o + i * a * s), !1 !== e && this.onChangeCallback(), this;
          }, setFromAxisAngle: function setFromAxisAngle(t, e) {
            var n = e / 2,
                r = Math.sin(n);return this._x = t.x * r, this._y = t.y * r, this._z = t.z * r, this._w = Math.cos(n), this.onChangeCallback(), this;
          }, multiply: function multiply(t, e) {
            return void 0 !== e ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."), this.multiplyQuaternions(t, e)) : this.multiplyQuaternions(this, t);
          }, multiplyQuaternions: function multiplyQuaternions(t, e) {
            var n = t._x,
                r = t._y,
                o = t._z,
                i = t._w,
                a = e._x,
                s = e._y,
                u = e._z,
                c = e._w;return this._x = n * c + i * a + r * u - o * s, this._y = r * c + i * s + o * a - n * u, this._z = o * c + i * u + n * s - r * a, this._w = i * c - n * a - r * s - o * u, this.onChangeCallback(), this;
          }, slerp: function slerp(t, e) {
            if (0 === e) return this;if (1 === e) return this.copy(t);var n = this._x,
                r = this._y,
                o = this._z,
                i = this._w,
                a = i * t._w + n * t._x + r * t._y + o * t._z;if (a < 0 ? (this._w = -t._w, this._x = -t._x, this._y = -t._y, this._z = -t._z, a = -a) : this.copy(t), a >= 1) return this._w = i, this._x = n, this._y = r, this._z = o, this;var s = Math.sqrt(1 - a * a);if (Math.abs(s) < .001) return this._w = .5 * (i + this._w), this._x = .5 * (n + this._x), this._y = .5 * (r + this._y), this._z = .5 * (o + this._z), this;var u = Math.atan2(s, a),
                c = Math.sin((1 - e) * u) / s,
                l = Math.sin(e * u) / s;return this._w = i * c + this._w * l, this._x = n * c + this._x * l, this._y = r * c + this._y * l, this._z = o * c + this._z * l, this.onChangeCallback(), this;
          }, onChange: function onChange(t) {
            return this.onChangeCallback = t, this;
          }, onChangeCallback: function onChangeCallback() {} }, (0, r.default)(o, { slerp: function slerp(t, e, n, r) {
            return n.copy(t).slerp(e, r);
          }, slerpFlat: function slerpFlat(t, e, n, r, o, i, a) {
            var s = n[r + 0],
                u = n[r + 1],
                c = n[r + 2],
                l = n[r + 3],
                f = o[i + 0],
                p = o[i + 1],
                h = o[i + 2],
                d = o[i + 3];if (l !== d || s !== f || u !== p || c !== h) {
              var v = 1 - a,
                  y = s * f + u * p + c * h + l * d,
                  g = y >= 0 ? 1 : -1,
                  b = 1 - y * y;if (b > Number.EPSILON) {
                var m = Math.sqrt(b),
                    x = Math.atan2(m, y * g);v = Math.sin(v * x) / m, a = Math.sin(a * x) / m;
              }var _ = a * g;if (s = s * v + f * _, u = u * v + p * _, c = c * v + h * _, l = l * v + d * _, v === 1 - a) {
                var w = 1 / Math.sqrt(s * s + u * u + c * c + l * l);s *= w, u *= w, c *= w, l *= w;
              }
            }t[e] = s, t[e + 1] = u, t[e + 2] = c, t[e + 3] = l;
          } }), e.default = o;
      }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });var r = { DEG2RAD: Math.PI / 180, RAD2DEG: 180 / Math.PI, degToRad: function degToRad(t) {
            return t * r.DEG2RAD;
          }, radToDeg: function radToDeg(t) {
            return t * r.RAD2DEG;
          } };e.default = r;
      }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });var r = function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
            }
          }return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e;
          };
        }(),
            o = s(n(2)),
            i = s(n(0)),
            a = n(3);function s(t) {
          return t && t.__esModule ? t : { default: t };
        }Math.abs;var u = { pointers: 2, threshold: 2 },
            c = function () {
          function t(e, n) {
            var r = this;!function (t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this, t), this.lastScale = -1, this.lastRotation = -1, this.rotation = -1, this.lastDistance = 0, this.deltaX = 0, this.deltaY = 0, this.events = { pinchstart: [], pinch: [], pinchend: [], pinchcancel: [], rotationstart: [], rotation: [], rotationend: [], rotationcancel: [] }, this.onTouchStart = function (t) {}, this.handleGestureStart = function (t) {
              t.preventDefault();var e = (0, a.pxTo750)(t.touches[0].pageX),
                  n = (0, a.pxTo750)(t.touches[0].pageY),
                  o = (0, a.pxTo750)(t.touches[1].pageX),
                  i = (0, a.pxTo750)(t.touches[1].pageY);r.lastDistance = r.distanceBetweenTwoPoints(e, o, n, i), r.lastScale = 1, r.lastRotation = r.getAngle(e, n, o, i), r.events.pinchstart.forEach(function (t) {
                t({ scale: r.lastScale });
              }), r.events.rotationstart.forEach(function (t) {
                t({ rotation: 0 });
              });
            }, this.getPointerNum = function (t) {
              return t.touches.length;
            }, this.distanceBetweenTwoPoints = function (t, e, n, r) {
              return Math.hypot(e - t, r - n);
            }, this.onTouchMove = function (t) {
              var e = r.config,
                  n = e.pointers;e.threshold;if (r.getPointerNum(t) === n) if (r.lastScale < 0 || r.lastRotation < 0) r.handleGestureStart(t);else {
                var o = (0, a.pxTo750)(t.touches[0].pageX),
                    i = (0, a.pxTo750)(t.touches[0].pageY),
                    s = (0, a.pxTo750)(t.touches[1].pageX),
                    u = (0, a.pxTo750)(t.touches[1].pageY),
                    c = r.distanceBetweenTwoPoints(o, s, i, u);r.lastScale = c / r.lastDistance;var l = r.getAngle(o, i, s, u);r.rotation = l - r.lastRotation, r.events.pinch.forEach(function (t) {
                  t({ scale: r.lastScale });
                }), r.events.rotation.forEach(function (t) {
                  t({ rotation: r.rotation });
                });
              }
            }, this.onTouchEnd = function (t) {
              r.events.pinchend.forEach(function (t) {
                t({ scale: r.lastScale });
              }), r.events.rotationend.forEach(function (t) {
                t({ scale: r.rotation });
              });
            }, this.onTouchCancel = function (t) {
              r.events.pinchcancel.forEach(function (t) {
                t({ scale: r.lastScale });
              }), r.events.rotationcancel.forEach(function (t) {
                t({ scale: r.rotation });
              });
            }, this.el = e, this.config = (0, i.default)(u, n), this.el.addEventListener("touchstart", this.onTouchStart), this.el.addEventListener("touchmove", this.onTouchMove), this.el.addEventListener("touchend", this.onTouchEnd), this.el.addEventListener("touchcancel", this.onTouchCancel);
          }return r(t, [{ key: "getAngle", value: function value(t, e, n, r) {
              return 180 * Math.atan2(r - e, n - t) / Math.PI;
            } }, { key: "on", value: function value(t, e) {
              this.events[t] && this.events[t].push(e);
            } }, { key: "destroy", value: function value() {
              this.el.removeEventListener("touchstart", this.onTouchStart), this.el.removeEventListener("touchmove", this.onTouchMove), this.el.removeEventListener("touchend", this.onTouchEnd), this.el.removeEventListener("touchcancel", this.onTouchCancel), this.offAll(), this.lastDistance = 0, this.lastScale = -1, this.lastRotation = -1, this.rotation = -1;
            } }, { key: "offAll", value: function value() {
              var t = this;o.default.map(this.events, function (e, n) {
                o.default.forEach(e, function (e) {
                  t.off(n, e);
                });
              });
            } }, { key: "off", value: function value(t, e) {
              if (t && t && this.events[t] && this.events[t].length) {
                if (!e) return;var n = o.default.find(this.events[t], function (t) {
                  return t === e;
                }),
                    r = o.default.findIndex(this.events[t], function (t) {
                  return t === e;
                });n && this.events[t].splice(r, 1);
              }
            } }]), t;
        }();e.default = c;
      }, function (t, e, n) {
        "use strict";
        var r = function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
            }
          }return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e;
          };
        }(),
            o = l(n(2)),
            i = l(n(10)),
            a = n(11),
            s = n(3),
            u = l(n(21)),
            c = l(n(0));function l(t) {
          return t && t.__esModule ? t : { default: t };
        }var f = (0, s.prefixStyle)("transform");function p(t, e, n) {
          t.transform[e] = n, t.shouldTransform = !0;
        }function h(t) {
          if (t instanceof HTMLElement || t instanceof SVGElement) {
            var e = window.getComputedStyle(t),
                n = (0, s.matrixToTransformObj)(e[f]);return n.opacity = Number(e.opacity), n["background-color"] = e["background-color"], n.color = e.color, n.width = (0, s.pxTo750)(e.width.replace("px", "")), n.height = (0, s.pxTo750)(e.height.replace("px", "")), n["border-top-left-radius"] = (0, s.pxTo750)(e["border-top-left-radius"].replace("px", "")), n["border-top-right-radius"] = (0, s.pxTo750)(e["border-top-right-radius"].replace("px", "")), n["border-bottom-left-radius"] = (0, s.pxTo750)(e["border-bottom-left-radius"].replace("px", "")), n["border-bottom-right-radius"] = (0, s.pxTo750)(e["border-bottom-right-radius"].replace("px", "")), n["margin-top"] = (0, s.pxTo750)(e["margin-top"].replace("px", "")), n["margin-bottom"] = (0, s.pxTo750)(e["margin-bottom"].replace("px", "")), n["margin-left"] = (0, s.pxTo750)(e["margin-left"].replace("px", "")), n["margin-right"] = (0, s.pxTo750)(e["margin-right"].replace("px", "")), n["padding-top"] = (0, s.pxTo750)(e["padding-top"].replace("px", "")), n["padding-bottom"] = (0, s.pxTo750)(e["padding-bottom"].replace("px", "")), n["padding-left"] = (0, s.pxTo750)(e["padding-left"].replace("px", "")), n["padding-right"] = (0, s.pxTo750)(e["padding-right"].replace("px", "")), n;
          }
        }var d = function () {
          function t(e, n) {
            switch (function (t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this, t), this._eventHandler = null, this.elTransforms = [], this.elPaths = [], this.token = null, this.options = e, this.callback = n, this.token = this.genToken(), this._initElTransforms(), e.eventType) {case "pan":
                this._eventHandler = new a.PanHandler(this);break;case "pinch":
                this._eventHandler = new a.PinchHandler(this);break;case "rotation":
                this._eventHandler = new a.RotationHandler(this);break;case "orientation":
                this._eventHandler = new a.OrientationHandler(this);break;case "timing":
                this._eventHandler = new a.TimingHandler(this);break;case "scroll":
                this._eventHandler = new a.ScrollHandler(this);}
          }return r(t, [{ key: "genToken", value: function value() {
              return parseInt(1e7 * Math.random());
            } }, { key: "_initElTransforms", value: function value() {
              var t = this.options.props,
                  e = void 0 === t ? [] : t,
                  n = this.elTransforms;e.forEach(function (t) {
                var e = t.element;if (!o.default.find(n, function (t) {
                  return t.element === e;
                })) {
                  var r = { translateX: 0, translateY: 0, translateZ: 0, scaleX: 1, scaleY: 1, scaleZ: 1, rotateX: 0, rotateY: 0, rotateZ: 0, skewX: 0, skewY: 0 };if (e instanceof SVGElement) {
                    var i = h(e);r.translateX = (0, s.px)(i.translateX), r.translateY = (0, s.px)(i.translateY), r.rotateZ = i.rotateZ, r.scaleX = i.scaleX, r.scaleY = i.scaleY, r.skewX = i.skewX, r.skewY = i.skewY;
                  }n.push({ element: e, transform: r });
                }
              });
            } }, { key: "getValue", value: function value(t, e) {
              return i.default.execute(e, (0, c.default)(u.default, t));
            } }, { key: "setProperty", value: function value(t, e, n) {
              if (this.options.debug && console.log("property:", e, " value:", n), t instanceof HTMLElement) {
                var r = o.default.find(this.elTransforms, function (e) {
                  return e.element === t;
                });switch (e) {case "scroll.contentOffsetY":
                    t.scrollTop = (0, s.px)(n);break;case "scroll.contentOffsetX":
                    t.scrollLeft = (0, s.px)(n);break;case "transform.translateX":
                    p(r, "translateX", (0, s.px)(n));break;case "transform.translateY":
                    p(r, "translateY", (0, s.px)(n));break;case "transform.translateZ":
                    p(r, "translateZ", (0, s.px)(n));break;case "transform.rotateX":
                    p(r, "rotateX", n);break;case "transform.rotateY":
                    p(r, "rotateY", n);break;case "transform.rotateZ":case "transform.rotate":
                    p(r, "rotateZ", n);break;case "transform.scaleX":
                    p(r, "scaleX", n);break;case "transform.scaleY":
                    p(r, "scaleY", n);break;case "transform.scale":
                    p(r, "scaleX", n), p(r, "scaleY", n);break;case "opacity":
                    t.style.opacity = n;break;case "background-color":
                    t.style["background-color"] = n;break;case "color":
                    t.style.color = n;break;case "width":case "height":case "border-top-left-radius":case "border-top-right-radius":case "border-bottom-left-radius":case "border-bottom-right-radius":case "border-radius":case "margin-top":case "margin-bottom":case "margin-left":case "margin-right":case "padding-top":case "padding-bottom":case "padding-left":case "padding-right":
                    t.style[e] = (0, s.px)(n) + "px";}r && r.shouldTransform && (t.style[f] = ["translateX(" + r.transform.translateX + "px)", "translateY(" + r.transform.translateY + "px)", "translateZ(" + r.transform.translateZ + "px)", "scaleX(" + r.transform.scaleX + ")", "scaleY(" + r.transform.scaleY + ")", "rotateX(" + r.transform.rotateX + "deg)", "rotateY(" + r.transform.rotateY + "deg)", "rotateZ(" + r.transform.rotateZ + "deg)"].join(" "));
              } else if (t instanceof SVGElement) {
                var i = o.default.find(this.elTransforms, function (e) {
                  return e.element === t;
                });switch (e) {case "svg-dashoffset":
                    t.setAttribute("stroke-dashoffset", (0, s.px)(n));break;case "svg-transform.translateX":
                    p(i, "translateX", (0, s.px)(n));break;case "svg-transform.translateY":
                    p(i, "translateY", (0, s.px)(n));break;case "svg-transform.translateZ":
                    p(i, "translateZ", (0, s.px)(n));break;case "svg-transform.rotateX":
                    p(i, "rotateX", n);break;case "svg-transform.rotateY":
                    p(i, "rotateY", n);break;case "svg-transform.rotateZ":case "svg-transform.rotate":
                    p(i, "rotateZ", n);break;case "svg-transform.scaleX":
                    p(i, "scaleX", n);break;case "svg-transform.scaleY":
                    p(i, "scaleY", n);break;case "svg-transform.scale":
                    p(i, "scaleX", n), p(i, "scaleY", n);break;case "svg-transform.skewX":
                    p(i, "skewX", n);break;case "svg-transform.skewY":
                    p(i, "skewY", n);break;case "svg-path":
                    var a = o.default.find(this.elPaths, function (e) {
                      return e.element === t;
                    });if (a && a.path || (a = { element: t, path: (0, s.parseSVGPath)(t.getAttribute("d"), s.pxTo750) }, this.elPaths.push(a)), a && a.path) if (n && n.length) for (var u = 0; u < n.length; u++) {
                      a.path = (0, s.interceptSVGPath)(a.path, n[u].index, n[u].values, n[u].cmd);
                    } else a.path = (0, s.interceptSVGPath)(a.path, n.index, n.values, n.cmd);}var c = o.default.find(this.elPaths, function (e) {
                  return e.element === t;
                });c && c.path && t.setAttribute("d", (0, s.stringifySVGPath)(c.path, s.px)), i.shouldTransform && (t.style[f] = ["translateX(" + i.transform.translateX + "px)", "translateY(" + i.transform.translateY + "px)", "translateZ(" + i.transform.translateZ + "px)", "scaleX(" + i.transform.scaleX + ")", "scaleY(" + i.transform.scaleY + ")", "rotateX(" + i.transform.rotateX + "deg)", "rotateY(" + i.transform.rotateY + "deg)", "rotateZ(" + i.transform.rotateZ + "deg)", "skewX(" + i.transform.skewX + "deg)", "skewY(" + i.transform.skewY + "deg)"].join(" "));
              } else switch (e) {case "lottie-progress":
                  "function" == typeof t.setProgress && t.setProgress(n);}
            } }, { key: "destroy", value: function value() {
              this._eventHandler.destroy();
            } }]), t;
        }();t.exports = { _bindingInstances: [], bind: function bind(t) {
            var e = this,
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function () {};if (!t) throw new Error("should pass options for binding");var r = o.default.filter(this._bindingInstances, function (e) {
              if (t.anchor) return e.options.anchor === t.anchor && e.options.eventType === t.eventType;
            });r && o.default.forEach(r, function (t) {
              t.destroy(), e._bindingInstances = o.default.dropWhile(e._bindingInstances, function (e) {
                return e === t;
              });
            });var i = new d(t, n);return this._bindingInstances.push(i), { token: i.token };
          }, unbind: function unbind(t) {
            if (!t) throw new Error("should pass options for binding");var e = o.default.find(this._bindingInstances, function (e) {
              return e.options.eventType === t.eventType && e.token === t.token;
            });e && e.destroy();
          }, unbindAll: function unbindAll() {
            this._bindingInstances.forEach(function (t) {
              t.destroy({ eventType: t.options.eventType, token: t.token });
            });
          }, getComputedStyle: h };
      }, function (t, e, n) {
        "use strict";
        function r(t) {
          return Number(t);
        }function o(t) {
          return !!t;
        }function i(t, e) {
          return t == e;
        }function a(t, e) {
          return t === e;
        }Object.defineProperty(e, "__esModule", { value: !0 }), e.default = { execute: function t(e, n) {
            var s = e.type,
                u = e.children;switch (s) {case "StringLiteral":
                return String(e.value);case "NumericLiteral":
                return parseFloat(e.value);case "BooleanLiteral":
                return !!e.value;case "Identifier":
                return n[e.value];case "CallExpression":
                for (var c = t(u[0], n), l = [], f = u[1].children, p = 0; p < f.length; p++) {
                  l.push(t(f[p], n));
                }return c.apply(null, l);case "?":
                return t(u[0], n) ? t(u[1], n) : t(u[2], n);case "+":
                return r(t(u[0], n)) + r(t(u[1], n));case "-":
                return r(t(u[0], n)) - r(t(u[1], n));case "*":
                return r(t(u[0], n)) * r(t(u[1], n));case "/":
                return r(t(u[0], n)) / r(t(u[1], n));case "%":
                return r(t(u[0], n)) % r(t(u[1], n));case "**":
                return Math.pow(r(t(u[0], n)), r(t(u[1], n)));case ">":
                return r(t(u[0], n)) > r(t(u[1], n));case "<":
                return r(t(u[0], n)) < r(t(u[1], n));case ">=":
                return r(t(u[0], n)) >= r(t(u[1], n));case "<=":
                return r(t(u[0], n)) <= r(t(u[1], n));case "==":
                return i(t(u[0], n), t(u[1], n));case "===":
                return a(t(u[0], n), t(u[1], n));case "!=":
                return !i(t(u[0], n), t(u[1], n));case "!==":
                return !a(t(u[0], n), t(u[1], n));case "&&":
                var h = void 0;return o(h = t(u[0], n)) ? t(u[1], n) : h;case "||":
                return o(h = t(u[0], n)) ? h : t(u[1], n);case "!":
                return !o(t(u[0], n));}return null;
          } };
      }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }), e.RotationHandler = e.PinchHandler = e.ScrollHandler = e.TimingHandler = e.OrientationHandler = e.PanHandler = void 0;var r = c(n(12)),
            o = c(n(14)),
            i = c(n(17)),
            a = c(n(18)),
            s = c(n(19)),
            u = c(n(20));function c(t) {
          return t && t.__esModule ? t : { default: t };
        }e.PanHandler = r.default, e.OrientationHandler = o.default, e.TimingHandler = i.default, e.ScrollHandler = a.default, e.PinchHandler = s.default, e.RotationHandler = u.default;
      }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });var r = function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
            }
          }return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e;
          };
        }(),
            o = a(n(13)),
            i = a(n(1));function a(t) {
          return t && t.__esModule ? t : { default: t };
        }var s = function (t) {
          function e(t) {
            !function (t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this, e);var n = function (t, e) {
              if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e || "object" != (typeof e === "undefined" ? "undefined" : _typeof2(e)) && "function" != typeof e ? t : e;
            }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));n._onPan = function (t) {
              var e = t.deltaX,
                  r = t.deltaY,
                  o = n.binding.options.props;(void 0 === o ? [] : o).forEach(function (t) {
                var o = t.element,
                    i = t.property,
                    a = t.expression,
                    s = JSON.parse(a.transformed),
                    u = n.binding.getValue({ x: e, y: r }, s);n.binding.setProperty(o, i, u), o.style.transition = "", o.style.webkitTransition = "";
              });
            }, n._onPanStart = function () {
              n.binding.callback({ deltaX: 0, state: "start", deltaY: 0 });
            }, n._onPanEnd = function (t) {
              n.binding.callback({ deltaX: parseInt(t.deltaX), state: "end", deltaY: parseInt(t.deltaY) });
            };var r = t.options.anchor,
                i = n.panGesture = new o.default(r, t.options.options);return i.on("pan", n._onPan), i.on("panstart", n._onPanStart), i.on("panend", n._onPanEnd), n;
          }return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (typeof e === "undefined" ? "undefined" : _typeof2(e)));t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
          }(e, i.default), r(e, [{ key: "destroy", value: function value() {
              var t = this.panGesture;t.off("pan", this._onPan), t.off("panstart", this._onPanStart), t.off("panend", this._onPanEnd), t.destroy();
            } }]), e;
        }();e.default = s;
      }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });var r = function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
            }
          }return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e;
          };
        }(),
            o = s(n(2)),
            i = s(n(0)),
            a = n(3);function s(t) {
          return t && t.__esModule ? t : { default: t };
        }var u = Math.abs,
            c = { thresholdX: 10, thresholdY: 10, touchAction: "auto", touchActionRatio: .5 },
            l = function () {
          function t(e, n) {
            var r = this;!function (t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this, t), this.startX = null, this.startY = null, this.panStartX = null, this.panStartY = null, this.deltaX = 0, this.deltaY = 0, this.events = { panstart: [], pan: [], panend: [], pancancel: [] }, this.onTouchStart = function (t) {}, this.handlePanStart = function (t) {
              if (t.preventDefault(), null === r.panStartX || null === r.panStartY) return r.panStartX = (0, a.pxTo750)(t.touches[0].pageX), r.panStartY = (0, a.pxTo750)(t.touches[0].pageY), void r.events.panstart.forEach(function (e) {
                e(t);
              });
            }, this.onTouchMove = function (t) {
              var e = r.config,
                  n = e.thresholdX,
                  o = e.thresholdY,
                  i = e.touchAction,
                  s = e.touchActionRatio;null !== r.startX && null !== r.startY || (r.startX = t.touches[0].pageX, r.startY = t.touches[0].pageY);var c = t.touches[0].pageX - r.startX,
                  l = t.touches[0].pageY - r.startY;switch (i) {case "auto":
                  t.preventDefault(), (u(c) >= n || u(l) >= o) && r.handlePanStart(t);break;case "pan-x":
                  u(c) >= n && u(l / c) < s && u(l) < o && r.handlePanStart(t);break;case "pan-y":
                  u(l) >= o && u(c / l) < s && u(c) < n && r.handlePanStart(t);}if (null !== r.panStartX && null !== r.panStartY) {
                switch (i) {case "auto":
                    r.deltaX = (0, a.pxTo750)(t.touches[0].pageX) - r.panStartX, r.deltaY = (0, a.pxTo750)(t.touches[0].pageY) - r.panStartY;break;case "pan-x":
                    r.deltaX = (0, a.pxTo750)(t.touches[0].pageX) - r.panStartX, r.deltaY = 0;break;case "pan-y":
                    r.deltaX = 0, r.deltaY = (0, a.pxTo750)(t.touches[0].pageY) - r.panStartY;}t.deltaX = r.deltaX, t.deltaY = r.deltaY, r.events.pan.forEach(function (e) {
                  e(t);
                });
              }
            }, this.onTouchEnd = function (t) {
              t.deltaX = r.deltaX, t.deltaY = r.deltaY, r.events.panend.forEach(function (e) {
                e(t);
              });
            }, this.onTouchCancel = function (t) {
              t.deltaX = r.deltaX, t.deltaY = r.deltaY, r.events.pancancel.forEach(function (e) {
                e(t);
              });
            }, this.el = e, this.config = (0, i.default)(c, n), this.el.addEventListener("touchstart", this.onTouchStart), this.el.addEventListener("touchmove", this.onTouchMove), this.el.addEventListener("touchend", this.onTouchEnd), this.el.addEventListener("touchcancel", this.onTouchCancel);
          }return r(t, [{ key: "on", value: function value(t, e) {
              this.events[t] && this.events[t].push(e);
            } }, { key: "destroy", value: function value() {
              this.el.removeEventListener("touchstart", this.onTouchStart), this.el.removeEventListener("touchmove", this.onTouchMove), this.el.removeEventListener("touchend", this.onTouchEnd), this.el.removeEventListener("touchcancel", this.onTouchCancel), this.offAll(), this.startX = null, this.startY = null, this.panStartX = null, this.panStartY = null;
            } }, { key: "offAll", value: function value() {
              var t = this;o.default.map(this.events, function (e, n) {
                o.default.forEach(e, function (e) {
                  t.off(n, e);
                });
              });
            } }, { key: "off", value: function value(t, e) {
              if (t && t && this.events[t] && this.events[t].length) {
                if (!e) return;var n = o.default.find(this.events[t], function (t) {
                  return t === e;
                }),
                    r = o.default.findIndex(this.events[t], function (t) {
                  return t === e;
                });n && this.events[t].splice(r, 1);
              }
            } }]), t;
        }();e.default = l;
      }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });var r = function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
            }
          }return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e;
          };
        }(),
            o = l(n(5)),
            i = l(n(15)),
            a = l(n(7)),
            s = n(4),
            u = l(n(1)),
            c = l(n(0));function l(t) {
          return t && t.__esModule ? t : { default: t };
        }var f = function (t) {
          function e(t) {
            !function (t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this, e);var n = function (t, e) {
              if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e || "object" != (typeof e === "undefined" ? "undefined" : _typeof2(e)) && "function" != typeof e ? t : e;
            }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));return n.binding = null, n.control = null, n.start = null, n.timer = null, n._onOrientation = function (t) {
              n.binding.options.props.forEach(function (e) {
                var r = e.element,
                    o = e.property,
                    i = e.expression,
                    a = JSON.parse(i.transformed),
                    s = n.binding.getValue(t, a);n.binding.setProperty(r, o, s);
              });
            }, n.options = (0, c.default)({ sceneType: "2d" }, t.options.options), n.binding = t, "2d" === n.options.sceneType.toLowerCase() ? (n.controlX = new i.default({ beta: 90 }), n.controlY = new i.default({ gamma: 90, alpha: 0 })) : n.control = new i.default(), n.run(), n;
          }return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (typeof e === "undefined" ? "undefined" : _typeof2(e)));t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
          }(e, u.default), r(e, [{ key: "run", value: function value() {
              var t = this;if ("2d" === this.options.sceneType.toLowerCase()) {
                this.controlX.update(), this.controlY.update();var e = this.controlX.deviceOrientation,
                    n = e.alpha,
                    r = e.beta,
                    i = e.gamma,
                    u = e.dalpha,
                    c = e.dbeta,
                    l = e.dgamma,
                    f = new o.default(0, 0, 1);f.applyQuaternion(this.controlX.quaternion);var p = new o.default(0, 1, 1);p.applyQuaternion(this.controlY.quaternion);var h = a.default.radToDeg(Math.acos(f.x)) - 90,
                    d = a.default.radToDeg(Math.acos(p.y)) - 90;if (this.start || isNaN(h) || isNaN(d) || (this.start = { x: h, y: d }), this.start) {
                  var v = h - this.start.x,
                      y = d - this.start.y;this._onOrientation({ x: h, y: d, dx: v, dy: y, alpha: n, beta: r, gamma: i, dalpha: u, dbeta: c, dgamma: l });
                }
              } else {
                this.control.update();var g = this.control.deviceOrientation,
                    b = g.alpha,
                    m = g.beta,
                    x = g.gamma,
                    _ = g.dalpha,
                    w = g.dbeta,
                    E = g.dgamma,
                    O = this.control.quaternion,
                    k = O.x,
                    S = O.y,
                    P = O.z;this._onOrientation({ alpha: b, beta: m, gamma: x, dalpha: _, dbeta: w, dgamma: E, x: k, y: S, z: P });
              }this.timer = (0, s.raf)(function () {
                t.run();
              });
            } }, { key: "destroy", value: function value() {
              this.timer && ((0, s.cancelRAF)(this.timer), this.timer = null);
            } }]), e;
        }();e.default = f;
      }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });var r = u(n(6)),
            o = u(n(5)),
            i = u(n(16)),
            a = u(n(7)),
            s = u(n(0));function u(t) {
          return t && t.__esModule ? t : { default: t };
        }function c(t) {
          return void 0 === t || isNaN(t) || null === t;
        }e.default = function (t) {
          var e = this;this.object = (0, s.default)({ alphaOffsetAngle: 0, betaOffsetAngle: 0, gammaOffsetAngle: 0 }, t), this.alphaOffsetAngle = this.object.alphaOffsetAngle, this.betaOffsetAngle = this.object.betaOffsetAngle, this.gammaOffsetAngle = this.object.gammaOffsetAngle, this.quaternion = new r.default(0, 0, 0, 1), this.enabled = !0, this.deviceOrientation = {}, this.screenOrientation = 0, this.start = null, this.recordsAlpha = [];var n = function n(t) {
            var n = t.alpha,
                r = t.beta,
                o = t.gamma,
                i = e.recordsAlpha;e.start || (e.start = { alpha: n, beta: r, gamma: o }), i.push(n), i.length > 5 && (i = function (t, e) {
              var n = t.length,
                  r = 0;if (n > 1) for (var o = 0; o < n; o++) {
                void 0 != t[o - 1] && void 0 != t[o] && (t[o] - t[o - 1] < -e / 2 && (r = Math.floor(t[o - 1] / e) + 1, t[o] = t[o] + r * e), t[o] - t[o - 1] > e / 2 && (t[o] = t[o] - e));
              }return t;
            }(i, 360)).shift();var a = (i[i.length - 1] - e.start.alpha) % 360;c(n) || c(r) || c(o) || (e.enabled = !0), e.deviceOrientation = { alpha: n, beta: r, gamma: o, formatAlpha: a, dalpha: n - e.start.alpha, dbeta: r - e.start.beta, dgamma: o - e.start.gamma };
          },
              u = function u() {
            e.screenOrientation = window.orientation || 0;
          },
              l = function () {
            var t = new o.default(0, 0, 1),
                e = new i.default(),
                n = new r.default(),
                a = new r.default(-Math.sqrt(.5), 0, 0, Math.sqrt(.5));return function (r, o, i, s, u) {
              e.set(i, o, -s, "YXZ"), r.setFromEuler(e), r.multiply(a), r.multiply(n.setFromAxisAngle(t, -u));
            };
          }();this.connect = function () {
            u(), window.addEventListener("orientationchange", u, !1), window.addEventListener("deviceorientation", n, !1);
          }, this.disconnect = function () {
            window.removeEventListener("orientationchange", u, !1), window.removeEventListener("deviceorientation", n, !1), e.enabled = !1;
          }, this.update = function () {
            if (!1 !== e.enabled) {
              var t = c(e.deviceOrientation.formatAlpha) ? 0 : a.default.degToRad(c(e.object.alpha) ? e.deviceOrientation.formatAlpha + e.alphaOffsetAngle : e.object.alpha),
                  n = c(e.deviceOrientation.beta) ? 0 : a.default.degToRad(c(e.object.beta) ? e.deviceOrientation.beta + e.betaOffsetAngle : e.object.beta),
                  r = c(e.deviceOrientation.gamma) ? 0 : a.default.degToRad(c(e.object.gamma) ? e.deviceOrientation.gamma + e.gammaOffsetAngle : e.object.gamma),
                  o = e.screenOrientation ? a.default.degToRad(e.screenOrientation) : 0;l(e.quaternion, t, n, r, o);
            }
          }, this.updateAlphaOffsetAngle = function (t) {
            this.alphaOffsetAngle = t, this.update();
          }, this.updateBetaOffsetAngle = function (t) {
            this.betaOffsetAngle = t, this.update();
          }, this.updateGammaOffsetAngle = function (t) {
            this.gammaOffsetAngle = t, this.update();
          }, this.dispose = function () {
            this.disconnect();
          }, this.connect();
        };
      }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });var r = function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
            }
          }return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e;
          };
        }();var o = function () {
          function t(e, n, r, o) {
            !function (t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this, t), this.isEuler = !0, this._x = 0, this._y = 0, this._z = 0, this._x = e || 0, this._y = n || 0, this._z = r || 0, this._order = o || t.DefaultOrder;
          }return r(t, [{ key: "set", value: function value(t, e, n, r) {
              return this._x = t, this._y = e, this._z = n, this._order = r || this._order, this.onChangeCallback(), this;
            } }, { key: "onChange", value: function value(t) {
              return this.onChangeCallback = t, this;
            } }, { key: "onChangeCallback", value: function value() {} }, { key: "order", get: function get() {
              return this._order;
            }, set: function set(t) {
              this._order = t, this.onChangeCallback();
            } }]), t;
        }();o.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"], o.DefaultOrder = "XYZ", e.default = o;
      }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });var r = Object.assign || function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];for (var r in n) {
              Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
            }
          }return t;
        },
            o = function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
            }
          }return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e;
          };
        }(),
            i = s(n(4)),
            a = s(n(1));function s(t) {
          return t && t.__esModule ? t : { default: t };
        }var u = function (t) {
          function e(t) {
            !function (t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this, e);var n = function (t, e) {
              if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e || "object" != (typeof e === "undefined" ? "undefined" : _typeof2(e)) && "function" != typeof e ? t : e;
            }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t)),
                o = n.binding.options,
                a = o.props,
                s = void 0 === a ? [] : a,
                u = o.exitExpression;s.forEach(function (t) {
              var e = t.expression;e && e.transformed && "string" == typeof e.transformed && (e.transformed = JSON.parse(e.transformed));
            });var c = void 0;return u && u.transformed && (c = JSON.parse(u.transformed)), (n.animation = new i.default({ duration: 1 / 0, easing: "linear", onStart: function onStart() {
                n.binding.callback({ state: "start", t: 0 });
              }, onRun: function onRun(t) {
                c && n.binding.getValue({ t: t.t }, c) && n.animation.stop(), s.forEach(function (e) {
                  n.animate(r({ exitTransformed: c, t: t.t }, e));
                });
              }, onStop: function onStop(t) {
                n.binding.callback({ state: "exit", t: t.t - 1e3 / 60 });
              } })).run(), n;
          }return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (typeof e === "undefined" ? "undefined" : _typeof2(e)));t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
          }(e, a.default), o(e, [{ key: "animate", value: function value(t) {
              var e = t.element,
                  n = t.property,
                  r = t.expression,
                  o = t.t,
                  i = this.binding.getValue({ t: o }, r.transformed);this.binding.setProperty(e, n, i);
            } }, { key: "destroy", value: function value() {
              this.animation && this.animation.stop();
            } }]), e;
        }();e.default = u;
      }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });var r = function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
            }
          }return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e;
          };
        }(),
            o = function (t) {
          return t && t.__esModule ? t : { default: t };
        }(n(1)),
            i = n(3);function a(t, e) {
          return t / e < 0;
        }var s = function (t) {
          function e(t) {
            !function (t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this, e);var n = function (t, e) {
              if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e || "object" != (typeof e === "undefined" ? "undefined" : _typeof2(e)) && "function" != typeof e ? t : e;
            }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));n.dx = 0, n.dy = 0, n.prevX = null, n.prevY = null, n.tx = 0, n.ty = 0, n.tdx = 0, n.tdy = 0, n._onScroll = function (t) {
              var e = n.binding.options.props,
                  r = n.binding.callback,
                  o = (0, i.pxTo750)(t.target.scrollLeft),
                  s = (0, i.pxTo750)(t.target.scrollTop);if (e.forEach(function (t) {
                var e = t.element,
                    r = t.property,
                    i = t.expression,
                    a = JSON.parse(i.transformed),
                    u = n.binding.getValue({ x: o, y: s, dx: n.dx, dy: n.dy, tdx: n.tdx, tdy: n.tdy }, a);n.binding.setProperty(e, r, u);
              }), null !== n.prevX && null !== n.prevY) {
                var u = o - n.prevX,
                    c = s - n.prevY,
                    l = { x: o, y: s };a(n.dx, u) && (n.tx = o, l.state = "turn"), a(n.dy, c) && (n.ty = s, l.state = "turn"), n.dx = l.dx = o - n.prevX, n.dy = l.dy = s - n.prevY, n.tdx = l.tdx = o - n.tx, n.tdy = l.tdy = s - n.ty, l.state && r(l);
              }n.prevX = o, n.prevY = s;
            };var r = t.options.anchor;return n.tx = (0, i.pxTo750)(r.scrollLeft), n.ty = (0, i.pxTo750)(r.scrollTop), r.addEventListener("scroll", n._onScroll), n;
          }return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (typeof e === "undefined" ? "undefined" : _typeof2(e)));t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
          }(e, o.default), r(e, [{ key: "destroy", value: function value() {
              this.binding.options.anchor.removeEventListener("scroll", this._onScroll);
            } }]), e;
        }();e.default = s;
      }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });var r = function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
            }
          }return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e;
          };
        }(),
            o = a(n(8)),
            i = a(n(1));function a(t) {
          return t && t.__esModule ? t : { default: t };
        }var s = function (t) {
          function e(t) {
            !function (t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this, e);var n = function (t, e) {
              if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e || "object" != (typeof e === "undefined" ? "undefined" : _typeof2(e)) && "function" != typeof e ? t : e;
            }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));n._onPinch = function (t) {
              var e = t.scale,
                  r = n.binding.options.props;(void 0 === r ? [] : r).forEach(function (t) {
                var r = t.element,
                    o = t.property,
                    i = t.expression,
                    a = JSON.parse(i.transformed),
                    s = n.binding.getValue({ s: e }, a);n.binding.setProperty(r, o, s), r.style.transition = "", r.style.webkitTransition = "";
              });
            }, n._onPinchStart = function (t) {
              n.binding.callback({ scale: parseInt(t.scale), state: "start" });
            }, n._onPinchEnd = function (t) {
              n.binding.callback({ scale: parseInt(t.scale), state: "end" });
            };var r = t.options.anchor,
                i = n.pinchGesture = new o.default(r, t.options.options);return i.on("pinch", n._onPinch), i.on("pinchstart", n._onPinchStart), i.on("pinchend", n._onPinchEnd), n;
          }return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (typeof e === "undefined" ? "undefined" : _typeof2(e)));t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
          }(e, i.default), r(e, [{ key: "destroy", value: function value() {
              var t = this.pinchGesture;t.off("pinchstart", this._onPinchStart), t.off("pinchend", this._onPinchEnd), t.off("pinch", this._onPinch), t.destroy();
            } }]), e;
        }();e.default = s;
      }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });var r = function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
            }
          }return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e;
          };
        }(),
            o = a(n(8)),
            i = a(n(1));function a(t) {
          return t && t.__esModule ? t : { default: t };
        }var s = function (t) {
          function e(t) {
            !function (t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this, e);var n = function (t, e) {
              if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e || "object" != (typeof e === "undefined" ? "undefined" : _typeof2(e)) && "function" != typeof e ? t : e;
            }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));n._onRotation = function (t) {
              var e = t.rotation,
                  r = n.binding.options.props;(void 0 === r ? [] : r).forEach(function (t) {
                var r = t.element,
                    o = t.property,
                    i = t.expression,
                    a = JSON.parse(i.transformed),
                    s = n.binding.getValue({ r: e }, a);n.binding.setProperty(r, o, s), r.style.transition = "", r.style.webkitTransition = "";
              });
            }, n._onRotationStart = function (t) {
              n.binding.callback({ rotation: parseInt(t.rotation), state: "start" });
            }, n._onRotationEnd = function (t) {
              n.binding.callback({ rotation: parseInt(t.rotation), state: "end" });
            };var r = t.options.anchor,
                i = n.rotationGesture = new o.default(r, t.options.options);return i.on("rotation", n._onRotation), i.on("rotationstart", n._onRotationStart), i.on("rotationend", n._onRotationEnd), n;
          }return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (typeof e === "undefined" ? "undefined" : _typeof2(e)));t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
          }(e, i.default), r(e, [{ key: "destroy", value: function value() {
              var t = this.rotationGesture;t.off("rotationstart", this._onRotationStart), t.off("rotationend", this._onRotationEnd), t.off("rotation", this._onRotation), t.destroy();
            } }]), e;
        }();e.default = s;
      }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });var r = function (t) {
          return t && t.__esModule ? t : { default: t };
        }(n(2)),
            o = n(4);function i(t) {
          var e = t.replace(/'|"|#/g, "");return parseInt(e, 16);
        }function a(t) {
          var e = t.replace(/'|"|#/g, ""),
              n = "" + (e = 3 === e.length ? [e[0], e[0], e[1], e[1], e[2], e[2]].join("") : e)[0] + e[1],
              r = "" + e[2] + e[3],
              o = "" + e[4] + e[5];return { r: n, g: r, b: o, dr: i(n), dg: i(r), db: i(o) };
        }var s = { max: Math.max, min: Math.min, sin: Math.sin, cos: Math.cos, tan: Math.tan, sqrt: Math.sqrt, cbrt: Math.cbrt, log: Math.log, abs: Math.abs, atan: Math.atan, floor: Math.floor, ceil: Math.ceil, pow: Math.pow, exp: Math.exp, PI: Math.PI, E: Math.E, acos: Math.acos, asin: Math.asin, sign: Math.sign, atan2: Math.atan2, round: Math.round, rgb: function rgb(t, e, n) {
            return "rgb(" + parseInt(t) + "," + parseInt(e) + "," + parseInt(n) + ")";
          }, rgba: function rgba(t, e, n, r) {
            return "rgb(" + parseInt(t) + "," + parseInt(e) + "," + parseInt(n) + "," + r + ")";
          }, getArgs: function getArgs() {
            return arguments;
          }, evaluateColor: function evaluateColor(t, e, n) {
            n = n > 1 ? 1 : n;var r = a(t),
                o = a(e);return "#" + function (t) {
              for (var e = t.toString(16), n = [], r = 0; r < 6 - e.length; r++) {
                n.push("0");
              }return n.join("") + e;
            }(16 * parseInt((o.dr - r.dr) * n + r.dr) * 16 * 16 * 16 + 16 * parseInt((o.dg - r.dg) * n + r.dg) * 16 + parseInt((o.db - r.db) * n + r.db));
          }, svgDrawCmd: function svgDrawCmd(t, e, n) {
            return { index: t, values: e, cmd: n };
          }, svgDrawCmds: function svgDrawCmds() {
            return arguments;
          }, asArray: function asArray() {
            return [].concat(Array.prototype.slice.call(arguments));
          } };r.default.map(o.Easing, function (t, e) {
          "cubicBezier" !== e && (s[e] = function (e, n, r, o) {
            return e = Math.max(Math.min(e / o, 1)), t(e) * r + n;
          });
        }), s.cubicBezier = function (t, e, n, r, i, a, s, u) {
          t = Math.max(Math.min(t / r, 1));var c = 1e3 / 60 / r / 4;return (0, o.Bezier)(i, a, s, u, c)(t) * n + e;
        }, e.default = s;
      }]);
    });
  }]);
});

/***/ }),

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(20);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_index2.default.el = '#root';
new Vue(_index2.default);

/***/ }),

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(21)
)

/* script */
__vue_exports__ = __webpack_require__(22)

/* template */
var __vue_template__ = __webpack_require__(23)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\Users\\asus\\Desktop\\weex-demo\\src\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-1a4d8e3c"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),

/***/ 21:
/***/ (function(module, exports) {

module.exports = {
  "public_align": {
    "alignItems": "center"
  },
  "public_direction": {
    "flexDirection": "row"
  },
  "item-container": {
    "width": "750",
    "backgroundColor": "#008cee"
  },
  "per_top": {
    "position": "absolute",
    "left": 0,
    "width": "750",
    "justifyContent": "flex-start",
    "paddingLeft": "32",
    "paddingTop": "30",
    "paddingBottom": "30"
  },
  "per_topl": {
    "width": "120",
    "height": "120",
    "backgroundColor": "#008cee"
  },
  "per_toplimg": {
    "width": "120",
    "height": "120",
    "borderBottomRightRadius": "100",
    "borderBottomLeftRadius": "100",
    "borderTopRightRadius": "100",
    "borderTopLeftRadius": "100"
  },
  "per_topltext": {
    "fontSize": "44",
    "color": "#ffffff",
    "marginLeft": "20",
    "backgroundColor": "#008cee"
  },
  "pers_list": {
    "backgroundColor": "#ffffff",
    "marginTop": "20",
    "width": "750"
  },
  "public_boxlistmm": {
    "backgroundColor": "#f5f5f5"
  },
  "topbox": {
    "height": "264",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "topboxbg": {
    "position": "absolute",
    "top": 0,
    "left": 0,
    "width": "750",
    "backgroundColor": "#363483",
    "overflow": "hidden"
  },
  "topboxbg_inner": {
    "position": "relative",
    "backgroundImage": "linear-gradient(to left,rgba(207,64,32,0),rgba(207,64,32,1))"
  },
  "panel": {
    "width": "600",
    "height": "250",
    "marginLeft": "75",
    "marginTop": "35",
    "marginBottom": "35",
    "flexDirection": "column",
    "justifyContent": "center",
    "borderWidth": "2",
    "borderStyle": "solid",
    "borderColor": "#DDDDDD",
    "backgroundColor": "#F5F5F5"
  },
  "text": {
    "fontSize": "50",
    "textAlign": "center",
    "color": "#41B883"
  },
  "public_srcl": {
    "height": "100",
    "paddingLeft": "32"
  },
  "public_srcltopy": {
    "fontSize": "40",
    "height": "100",
    "lineHeight": "100",
    "color": "#ffffff",
    "backgroundColor": "#008000"
  },
  "public_srcltopy1": {
    "flex": 1,
    "height": "100",
    "backgroundColor": "#FFFF00"
  },
  "name_input": {
    "marginRight": "32",
    "marginLeft": "32",
    "width": "400",
    "height": "60",
    "backgroundColor": "#FFFFFF"
  }
}

/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _weexBindingx = __webpack_require__(0);

var _weexBindingx2 = _interopRequireDefault(_weexBindingx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var modal = weex.requireModule('modal'); //
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

var dom = weex.requireModule('dom');
var headerStyle = function headerStyle() {
	var isnumber = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

	var isIPhoneX = weex && (weex.config.env.deviceModel === 'iPhone10,3' || weex.config.env.deviceModel === 'iPhone10,6' || weex.config.env.deviceModel === 'iPhone11,8' || weex.config.env.deviceModel === 'iPhone11,2' || weex.config.env.deviceModel === 'iPhone11,6' || weex.config.env.deviceModel === 'iPhone11,4');
	var isIOS = WXEnvironment.osName == 'iOS';
	var style = null;
	isnumber ? style = {
		paddingTop: 0,
		height: 100
	} : style = {
		paddingTop: 0,
		height: '100px'
	};
	if (isIOS) {
		isnumber ? style = {
			paddingTop: 40,
			height: 140
		} : style = {
			paddingTop: '40px',
			height: '140px'
		};
	}
	if (isIPhoneX) {
		isnumber ? style = {
			paddingTop: 88,
			height: 188
		} : style = {
			paddingTop: '88px',
			height: '188px'
		};
	}
	return style;
};
exports.default = {
	data: function data() {
		return {
			userInfoModel: {
				avatar: "https://placem.at/things?w=250&random=1",
				nickName: "我的姓名是xxx"
			},
			headerStyle2: {
				width: "750px",
				position: "absolute",
				top: 0,
				left: 0,
				backgroundColor: "rgba(255, 255, 255, 0)"
			},
			lists: [1, 2, 3, 4, 5, 6, 7, 8],
			metaHeight: { // 当前页面元素几个重要的高度元数据
				top: 180, // 用户信息条高度
				bottom: 264 // 用户信息条下方区域高度
			},
			weatherWidth: 0, // 天气组件的宽度
			userPanelWidth: 0, // 用户头像和用户昵称总长
			headerHeight: headerStyle(true).height,
			paddingTop: headerStyle(true).paddingTop,
			baseStyle: headerStyle(),
			show: false,
			defaultName: '',
			tempWeatherWidth: 0,
			gesToken: 0,
			isSupportsEB: true // 是否兼容bindingX
		};
	},

	computed: {
		bgHeight: function bgHeight() {
			var _metaHeight = this.metaHeight,
			    top = _metaHeight.top,
			    bottom = _metaHeight.bottom;

			return top + bottom + this.headerHeight;
		},

		// 滚动的临界距离(正值)
		limitDis: function limitDis() {
			return (this.metaHeight.top + this.headerHeight - this.paddingTop) / 2;
		},

		// 滚动的临界距离2(正值)
		// 导航条背景变化的临界值
		limitDis2: function limitDis2() {
			var _metaHeight2 = this.metaHeight,
			    top = _metaHeight2.top,
			    bottom = _metaHeight2.bottom;

			return top + bottom - 120;
		}
	},
	methods: {
		updateName: function updateName() {
			if (!this.defaultName) {
				return modal.toast({
					message: "请输入姓名"
				});
			}
			this.userInfoModel.nickName = this.defaultName;
			this.$refs.input.blur();
			this.show = false;
		},
		onclick: function onclick() {
			this.show = true;
		},
		getWeatherWidth: function getWeatherWidth() {
			var _this = this;

			return new Promise(function (resolve) {
				if (!!_this.tempWeatherWidth) {
					resolve(_this.tempWeatherWidth);
				} else {
					var weather = _this.$refs.weather;
					dom.getComponentRect(weather, function (_ref) {
						var result = _ref.result,
						    size = _ref.size;

						if (result) {
							_this.tempWeatherWidth = Math.ceil(size.width);
							resolve(_this.tempWeatherWidth);
						}
					});
				}
			});
		},

		/* ====新版===动效 start==== */
		// add at 2019-03-25  动效
		// update at 2019-04-01
		launchAnimate: function launchAnimate() {
			var _this2 = this;

			this.getWeatherWidth().then(function (width) {
				_this2.weatherWidth = width;
				dom.getComponentRect(_this2.$refs.nickname, function (nameRes) {
					if (nameRes.result) {
						dom.getComponentRect(_this2.$refs.avatar, function (avatarRes) {
							if (avatarRes.result) {
								// 需要根据比例计算出真正的用户昵称长度
								var ratio = avatarRes.size.width / 120;
								_this2.userPanelWidth = Math.ceil(nameRes.size.width / ratio + 172); // 172--头像宽120+32+20
								console.log('\u7F29\u653E\u6BD4\u4F8B' + ratio + ',\u7528\u6237\u6635\u79F0\u533A\u57DF\u5BBD\u5EA6' + nameRes.size.width + ',\u5929\u6C14\u6A21\u5757\u5BBD' + _this2.weatherWidth);
								_this2.userAnimateBinding();
							}
						});
					}
				});
			});
		},
		userAnimateBinding: function userAnimateBinding() {
			if (!this.isSupportsEB) {
				return;
			}
			var scroller = this.$refs.container; // scroller容器
			var imgTop = this.$refs.imgTop; // 用户信息条
			var weather = this.$refs.weather;

			// 宽度
			var minWidth = this.userPanelWidth * 0.5;
			var varyWidth = this.weatherWidth + '+y*(' + (this.userPanelWidth * 0.5 - this.weatherWidth) + ')/' + this.limitDis;
			var widthExp = 'y>' + this.limitDis + '?' + minWidth + ':(y<0?' + this.weatherWidth + ':' + varyWidth + ')';

			var bindingResult = _weexBindingx2.default.bind({
				eventType: 'scroll',
				anchor: scroller.ref,
				props: [
				// 用户信息条缩放
				{
					element: imgTop.ref,
					property: 'transform.scale',
					expression: {
						origin: 'y>140?0.5:(y<0?1:(1-y/280))'
					},
					config: {
						transformOrigin: "left center"
					}
				},
				// 用户信息条移动
				{
					element: imgTop.ref,
					property: 'transform.translateY',
					expression: {
						origin: 'y>' + this.limitDis + '?-' + this.limitDis + ':0-y'
					}
				},
				// 天气模块位移
				{
					element: weather.ref,
					property: 'transform.translateY',
					expression: {
						origin: 'y>0?(0-y):0'
					}
				},
				// 天气模块透明度
				{
					element: weather.ref,
					property: "opacity",
					expression: {
						origin: '1-y/' + this.limitDis
					}
				},
				// 宽度
				{
					element: weather.ref,
					property: "width",
					expression: {
						origin: widthExp
					}
				}]
			}, function (e) {});
			this.gesToken = bindingResult.token;
		},
		userAnimateBindingDestory: function userAnimateBindingDestory() {
			if (!this.isSupportsEB) {
				return;
			}
			if (this.gesToken != 0) {
				_weexBindingx2.default.unbind({
					eventType: 'scroll',
					token: this.gesToken
				});
				this.gesToken = 0;
			}
		}
	},
	watch: {
		"userInfoModel.nickName": function userInfoModelNickName(newname, oldname) {
			var _this3 = this;

			console.log('\u7528\u6237\u6635\u79F0\u4FEE\u6539\u5566\u65E7\u540D' + oldname + '\uFF0C\u65B0\u540D' + newname);
			if (this.isSupportsEB) {
				var tm = setTimeout(function () {
					// 销毁动画
					_this3.userAnimateBindingDestory();
					console.log('动画启动');
					_this3.launchAnimate();
					clearTimeout(tm);
				}, 20);
			}
		}
	},
	beforeDestroy: function beforeDestroy() {
		this.userAnimateBindingDestory();
	},
	created: function created() {
		modal.toast({
			message: "等3秒再滚动页面哦~"
		});
		this.defaultName = "我的姓名是xxx";
	},
	mounted: function mounted() {
		var _this4 = this;

		setTimeout(function () {
			_this4.launchAnimate();
		}, 20);
	}
};

/***/ }),

/***/ 23:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["item-container"]
  }, [_c('scroller', {
    ref: "container",
    attrs: {
      "showScrollbar": false
    }
  }, [_c('div', {
    staticStyle: {
      position: "relative"
    }
  }, [_c('div', {
    ref: "hold",
    style: {
      height: _vm.headerHeight + _vm.metaHeight.top + 'px'
    }
  }), _c('div', {
    staticClass: ["topbox"]
  }, [(_vm.show) ? _c('div', {
    staticClass: ["public_align", "public_direction"]
  }, [_c('input', {
    ref: "input",
    staticClass: ["name_input"],
    attrs: {
      "autofocus": "true",
      "value": (_vm.defaultName)
    },
    on: {
      "input": function($event) {
        _vm.defaultName = $event.target.attr.value
      }
    }
  }), _c('text', {
    staticStyle: {
      color: "white"
    },
    on: {
      "click": _vm.updateName
    }
  }, [_vm._v("确定")])]) : _vm._e()]), _c('div', {
    ref: "boxlist",
    staticClass: ["public_boxlistmm"]
  }, [_c('div', {
    staticClass: ["pers_list"]
  }, _vm._l((_vm.lists), function(num, index) {
    return _c('div', {
      staticClass: ["cell"]
    }, [_c('div', {
      staticClass: ["panel"]
    }, [_c('text', {
      staticClass: ["text"]
    }, [_vm._v(_vm._s(num))])])])
  }))])])]), _c('div', {
    ref: "headerBar",
    style: [_vm.headerStyle2, _vm.baseStyle]
  }, [_c('div', {
    staticClass: ["public_srcl", "public_align", "public_direction"]
  }, [_c('text', {
    ref: "weather",
    staticClass: ["public_srcltopy"]
  }, [_vm._v("············")]), _c('div', {
    staticClass: ["public_srcltopy1"]
  })])]), (_vm.isSupportsEB) ? _c('div', {
    ref: "imgTop",
    staticClass: ["per_top", "public_direction", "public_align"],
    style: {
      top: _vm.headerHeight + 'px'
    },
    on: {
      "click": _vm.onclick
    }
  }, [_c('div', {
    staticClass: ["per_topl"]
  }, [_c('image', {
    ref: "avatar",
    staticClass: ["per_toplimg"],
    attrs: {
      "src": _vm.userInfoModel.avatar,
      "resize": "cover"
    }
  })]), _c('text', {
    ref: "nickname",
    staticClass: ["per_topltext", "fontSele"]
  }, [_vm._v(_vm._s(_vm.userInfoModel.nickName || '请设置'))])]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })

/******/ });