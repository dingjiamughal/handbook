(function (t, e) {
    if ('object' === typeof exports && 'object' === typeof module)
        module.exports = e(require('vue-router'), require('react'), require('vue'));
    else if ('function' === typeof define && define.amd) define(['vue-router', 'react', 'vue'], e);
    else {
        var n =
            'object' === typeof exports
                ? e(require('vue-router'), require('react'), require('vue'))
                : e(t['vue-router'], t['react'], t['vue']);
        for (var r in n) ('object' === typeof exports ? exports : t)[r] = n[r];
    }
})(window, function (t, e, n) {
    return (function (t) {
        var e = {};
        function n(r) {
            if (e[r]) return e[r].exports;
            var o = (e[r] = {i: r, l: !1, exports: {}});
            return t[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
        }
        return (
            (n.m = t),
            (n.c = e),
            (n.d = function (t, e, r) {
                n.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: r});
            }),
            (n.r = function (t) {
                'undefined' !== typeof Symbol &&
                    Symbol.toStringTag &&
                    Object.defineProperty(t, Symbol.toStringTag, {value: 'Module'}),
                    Object.defineProperty(t, '__esModule', {value: !0});
            }),
            (n.t = function (t, e) {
                if ((1 & e && (t = n(t)), 8 & e)) return t;
                if (4 & e && 'object' === typeof t && t && t.__esModule) return t;
                var r = Object.create(null);
                if (
                    (n.r(r),
                    Object.defineProperty(r, 'default', {enumerable: !0, value: t}),
                    2 & e && 'string' != typeof t)
                )
                    for (var o in t)
                        n.d(
                            r,
                            o,
                            function (e) {
                                return t[e];
                            }.bind(null, o)
                        );
                return r;
            }),
            (n.n = function (t) {
                var e =
                    t && t.__esModule
                        ? function () {
                              return t['default'];
                          }
                        : function () {
                              return t;
                          };
                return n.d(e, 'a', e), e;
            }),
            (n.o = function (t, e) {
                return Object.prototype.hasOwnProperty.call(t, e);
            }),
            (n.p = '/'),
            n((n.s = 0))
        );
    })({
        0: function (t, e, n) {
            t.exports = n('56d7');
        },
        '00ee': function (t, e, n) {
            var r = n('b622'),
                o = r('toStringTag'),
                i = {};
            (i[o] = 'z'), (t.exports = '[object z]' === String(i));
        },
        '01b4': function (t, e) {
            var n = function () {
                (this.head = null), (this.tail = null);
            };
            (n.prototype = {
                add: function (t) {
                    var e = {item: t, next: null};
                    this.head ? (this.tail.next = e) : (this.head = e), (this.tail = e);
                },
                get: function () {
                    var t = this.head;
                    if (t) return (this.head = t.next), this.tail === t && (this.tail = null), t.item;
                }
            }),
                (t.exports = n);
        },
        '0366': function (t, e, n) {
            var r = n('e330'),
                o = n('59ed'),
                i = n('40d5'),
                c = r(r.bind);
            t.exports = function (t, e) {
                return (
                    o(t),
                    void 0 === e
                        ? t
                        : i
                        ? c(t, e)
                        : function () {
                              return t.apply(e, arguments);
                          }
                );
            };
        },
        '06cf': function (t, e, n) {
            var r = n('83ab'),
                o = n('c65b'),
                i = n('d1e7'),
                c = n('5c6c'),
                u = n('fc6a'),
                a = n('a04b'),
                f = n('1a2d'),
                s = n('0cfb'),
                p = Object.getOwnPropertyDescriptor;
            e.f = r
                ? p
                : function (t, e) {
                      if (((t = u(t)), (e = a(e)), s))
                          try {
                              return p(t, e);
                          } catch (n) {}
                      if (f(t, e)) return c(!o(i.f, t, e), t[e]);
                  };
        },
        '07fa': function (t, e, n) {
            var r = n('50c4');
            t.exports = function (t) {
                return r(t.length);
            };
        },
        '0cfb': function (t, e, n) {
            var r = n('83ab'),
                o = n('d039'),
                i = n('cc12');
            t.exports =
                !r &&
                !o(function () {
                    return (
                        7 !=
                        Object.defineProperty(i('div'), 'a', {
                            get: function () {
                                return 7;
                            }
                        }).a
                    );
                });
        },
        '0d51': function (t, e) {
            var n = String;
            t.exports = function (t) {
                try {
                    return n(t);
                } catch (e) {
                    return 'Object';
                }
            };
        },
        '13d2': function (t, e, n) {
            var r = n('d039'),
                o = n('1626'),
                i = n('1a2d'),
                c = n('83ab'),
                u = n('5e77').CONFIGURABLE,
                a = n('8925'),
                f = n('69f3'),
                s = f.enforce,
                p = f.get,
                d = Object.defineProperty,
                l =
                    c &&
                    !r(function () {
                        return 8 !== d(function () {}, 'length', {value: 8}).length;
                    }),
                v = String(String).split('String'),
                b = (t.exports = function (t, e, n) {
                    'Symbol(' === String(e).slice(0, 7) &&
                        (e = '[' + String(e).replace(/^Symbol\(([^)]*)\)/, '$1') + ']'),
                        n && n.getter && (e = 'get ' + e),
                        n && n.setter && (e = 'set ' + e),
                        (!i(t, 'name') || (u && t.name !== e)) && d(t, 'name', {value: e, configurable: !0}),
                        l && n && i(n, 'arity') && t.length !== n.arity && d(t, 'length', {value: n.arity});
                    try {
                        n && i(n, 'constructor') && n.constructor
                            ? c && d(t, 'prototype', {writable: !1})
                            : t.prototype && (t.prototype = void 0);
                    } catch (o) {}
                    var r = s(t);
                    return i(r, 'source') || (r.source = v.join('string' == typeof e ? e : '')), t;
                });
            Function.prototype.toString = b(function () {
                return (o(this) && p(this).source) || a(this);
            }, 'toString');
        },
        '14e5': function (t, e, n) {
            'use strict';
            var r = n('23e7'),
                o = n('c65b'),
                i = n('59ed'),
                c = n('f069'),
                u = n('e667'),
                a = n('2266'),
                f = n('5eed');
            r(
                {target: 'Promise', stat: !0, forced: f},
                {
                    all: function (t) {
                        var e = this,
                            n = c.f(e),
                            r = n.resolve,
                            f = n.reject,
                            s = u(function () {
                                var n = i(e.resolve),
                                    c = [],
                                    u = 0,
                                    s = 1;
                                a(t, function (t) {
                                    var i = u++,
                                        a = !1;
                                    s++,
                                        o(n, e, t).then(function (t) {
                                            a || ((a = !0), (c[i] = t), --s || r(c));
                                        }, f);
                                }),
                                    --s || r(c);
                            });
                        return s.error && f(s.value), n.promise;
                    }
                }
            );
        },
        1626: function (t, e) {
            t.exports = function (t) {
                return 'function' == typeof t;
            };
        },
        '19aa': function (t, e, n) {
            var r = n('3a9b'),
                o = TypeError;
            t.exports = function (t, e) {
                if (r(e, t)) return t;
                throw o('Incorrect invocation');
            };
        },
        '1a2d': function (t, e, n) {
            var r = n('e330'),
                o = n('7b0b'),
                i = r({}.hasOwnProperty);
            t.exports =
                Object.hasOwn ||
                function (t, e) {
                    return i(o(t), e);
                };
        },
        '1be4': function (t, e, n) {
            var r = n('d066');
            t.exports = r('document', 'documentElement');
        },
        '1c7e': function (t, e, n) {
            var r = n('b622'),
                o = r('iterator'),
                i = !1;
            try {
                var c = 0,
                    u = {
                        next: function () {
                            return {done: !!c++};
                        },
                        return: function () {
                            i = !0;
                        }
                    };
                (u[o] = function () {
                    return this;
                }),
                    Array.from(u, function () {
                        throw 2;
                    });
            } catch (a) {}
            t.exports = function (t, e) {
                if (!e && !i) return !1;
                var n = !1;
                try {
                    var r = {};
                    (r[o] = function () {
                        return {
                            next: function () {
                                return {done: (n = !0)};
                            }
                        };
                    }),
                        t(r);
                } catch (a) {}
                return n;
            };
        },
        '1cdc': function (t, e, n) {
            var r = n('342f');
            t.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(r);
        },
        '1d80': function (t, e) {
            var n = TypeError;
            t.exports = function (t) {
                if (void 0 == t) throw n("Can't call method on " + t);
                return t;
            };
        },
        2266: function (t, e, n) {
            var r = n('0366'),
                o = n('c65b'),
                i = n('825a'),
                c = n('0d51'),
                u = n('e95a'),
                a = n('07fa'),
                f = n('3a9b'),
                s = n('9a1f'),
                p = n('35a1'),
                d = n('2a62'),
                l = TypeError,
                v = function (t, e) {
                    (this.stopped = t), (this.result = e);
                },
                b = v.prototype;
            t.exports = function (t, e, n) {
                var h,
                    y,
                    m,
                    x,
                    g,
                    w,
                    j,
                    O = n && n.that,
                    S = !(!n || !n.AS_ENTRIES),
                    E = !(!n || !n.IS_ITERATOR),
                    P = !(!n || !n.INTERRUPTED),
                    _ = r(e, O),
                    T = function (t) {
                        return h && d(h, 'normal', t), new v(!0, t);
                    },
                    R = function (t) {
                        return S ? (i(t), P ? _(t[0], t[1], T) : _(t[0], t[1])) : P ? _(t, T) : _(t);
                    };
                if (E) h = t;
                else {
                    if (((y = p(t)), !y)) throw l(c(t) + ' is not iterable');
                    if (u(y)) {
                        for (m = 0, x = a(t); x > m; m++) if (((g = R(t[m])), g && f(b, g))) return g;
                        return new v(!1);
                    }
                    h = s(t, y);
                }
                w = h.next;
                while (!(j = o(w, h)).done) {
                    try {
                        g = R(j.value);
                    } catch (C) {
                        d(h, 'throw', C);
                    }
                    if ('object' == typeof g && g && f(b, g)) return g;
                }
                return new v(!1);
            };
        },
        '23cb': function (t, e, n) {
            var r = n('5926'),
                o = Math.max,
                i = Math.min;
            t.exports = function (t, e) {
                var n = r(t);
                return n < 0 ? o(n + e, 0) : i(n, e);
            };
        },
        '23e7': function (t, e, n) {
            var r = n('da84'),
                o = n('06cf').f,
                i = n('9112'),
                c = n('cb2d'),
                u = n('6374'),
                a = n('e893'),
                f = n('94ca');
            t.exports = function (t, e) {
                var n,
                    s,
                    p,
                    d,
                    l,
                    v,
                    b = t.target,
                    h = t.global,
                    y = t.stat;
                if (((s = h ? r : y ? r[b] || u(b, {}) : (r[b] || {}).prototype), s))
                    for (p in e) {
                        if (
                            ((l = e[p]),
                            t.dontCallGetSet ? ((v = o(s, p)), (d = v && v.value)) : (d = s[p]),
                            (n = f(h ? p : b + (y ? '.' : '#') + p, t.forced)),
                            !n && void 0 !== d)
                        ) {
                            if (typeof l == typeof d) continue;
                            a(l, d);
                        }
                        (t.sham || (d && d.sham)) && i(l, 'sham', !0), c(s, p, l, t);
                    }
            };
        },
        '241c': function (t, e, n) {
            var r = n('ca84'),
                o = n('7839'),
                i = o.concat('length', 'prototype');
            e.f =
                Object.getOwnPropertyNames ||
                function (t) {
                    return r(t, i);
                };
        },
        2626: function (t, e, n) {
            'use strict';
            var r = n('d066'),
                o = n('9bf2'),
                i = n('b622'),
                c = n('83ab'),
                u = i('species');
            t.exports = function (t) {
                var e = r(t),
                    n = o.f;
                c &&
                    e &&
                    !e[u] &&
                    n(e, u, {
                        configurable: !0,
                        get: function () {
                            return this;
                        }
                    });
            };
        },
        '2a62': function (t, e, n) {
            var r = n('c65b'),
                o = n('825a'),
                i = n('dc4a');
            t.exports = function (t, e, n) {
                var c, u;
                o(t);
                try {
                    if (((c = i(t, 'return')), !c)) {
                        if ('throw' === e) throw n;
                        return n;
                    }
                    c = r(c, t);
                } catch (a) {
                    (u = !0), (c = a);
                }
                if ('throw' === e) throw n;
                if (u) throw c;
                return o(c), n;
            };
        },
        '2ba4': function (t, e, n) {
            var r = n('40d5'),
                o = Function.prototype,
                i = o.apply,
                c = o.call;
            t.exports =
                ('object' == typeof Reflect && Reflect.apply) ||
                (r
                    ? c.bind(i)
                    : function () {
                          return c.apply(i, arguments);
                      });
        },
        '2cf4': function (t, e, n) {
            var r,
                o,
                i,
                c,
                u = n('da84'),
                a = n('2ba4'),
                f = n('0366'),
                s = n('1626'),
                p = n('1a2d'),
                d = n('d039'),
                l = n('1be4'),
                v = n('f36a'),
                b = n('cc12'),
                h = n('d6d6'),
                y = n('1cdc'),
                m = n('605d'),
                x = u.setImmediate,
                g = u.clearImmediate,
                w = u.process,
                j = u.Dispatch,
                O = u.Function,
                S = u.MessageChannel,
                E = u.String,
                P = 0,
                _ = {},
                T = 'onreadystatechange';
            try {
                r = u.location;
            } catch (N) {}
            var R = function (t) {
                    if (p(_, t)) {
                        var e = _[t];
                        delete _[t], e();
                    }
                },
                C = function (t) {
                    return function () {
                        R(t);
                    };
                },
                I = function (t) {
                    R(t.data);
                },
                A = function (t) {
                    u.postMessage(E(t), r.protocol + '//' + r.host);
                };
            (x && g) ||
                ((x = function (t) {
                    h(arguments.length, 1);
                    var e = s(t) ? t : O(t),
                        n = v(arguments, 1);
                    return (
                        (_[++P] = function () {
                            a(e, void 0, n);
                        }),
                        o(P),
                        P
                    );
                }),
                (g = function (t) {
                    delete _[t];
                }),
                m
                    ? (o = function (t) {
                          w.nextTick(C(t));
                      })
                    : j && j.now
                    ? (o = function (t) {
                          j.now(C(t));
                      })
                    : S && !y
                    ? ((i = new S()), (c = i.port2), (i.port1.onmessage = I), (o = f(c.postMessage, c)))
                    : u.addEventListener && s(u.postMessage) && !u.importScripts && r && 'file:' !== r.protocol && !d(A)
                    ? ((o = A), u.addEventListener('message', I, !1))
                    : (o =
                          T in b('script')
                              ? function (t) {
                                    l.appendChild(b('script'))[T] = function () {
                                        l.removeChild(this), R(t);
                                    };
                                }
                              : function (t) {
                                    setTimeout(C(t), 0);
                                })),
                (t.exports = {set: x, clear: g});
        },
        '2d00': function (t, e, n) {
            var r,
                o,
                i = n('da84'),
                c = n('342f'),
                u = i.process,
                a = i.Deno,
                f = (u && u.versions) || (a && a.version),
                s = f && f.v8;
            s && ((r = s.split('.')), (o = r[0] > 0 && r[0] < 4 ? 1 : +(r[0] + r[1]))),
                !o &&
                    c &&
                    ((r = c.match(/Edge\/(\d+)/)),
                    (!r || r[1] >= 74) && ((r = c.match(/Chrome\/(\d+)/)), r && (o = +r[1]))),
                (t.exports = o);
        },
        '342f': function (t, e, n) {
            var r = n('d066');
            t.exports = r('navigator', 'userAgent') || '';
        },
        3529: function (t, e, n) {
            'use strict';
            var r = n('23e7'),
                o = n('c65b'),
                i = n('59ed'),
                c = n('f069'),
                u = n('e667'),
                a = n('2266'),
                f = n('5eed');
            r(
                {target: 'Promise', stat: !0, forced: f},
                {
                    race: function (t) {
                        var e = this,
                            n = c.f(e),
                            r = n.reject,
                            f = u(function () {
                                var c = i(e.resolve);
                                a(t, function (t) {
                                    o(c, e, t).then(n.resolve, r);
                                });
                            });
                        return f.error && r(f.value), n.promise;
                    }
                }
            );
        },
        '35a1': function (t, e, n) {
            var r = n('f5df'),
                o = n('dc4a'),
                i = n('3f8c'),
                c = n('b622'),
                u = c('iterator');
            t.exports = function (t) {
                if (void 0 != t) return o(t, u) || o(t, '@@iterator') || i[r(t)];
            };
        },
        '37e8': function (t, e, n) {
            var r = n('83ab'),
                o = n('aed9'),
                i = n('9bf2'),
                c = n('825a'),
                u = n('fc6a'),
                a = n('df75');
            e.f =
                r && !o
                    ? Object.defineProperties
                    : function (t, e) {
                          c(t);
                          var n,
                              r = u(e),
                              o = a(e),
                              f = o.length,
                              s = 0;
                          while (f > s) i.f(t, (n = o[s++]), r[n]);
                          return t;
                      };
        },
        '3a9b': function (t, e, n) {
            var r = n('e330');
            t.exports = r({}.isPrototypeOf);
        },
        '3bbe': function (t, e, n) {
            var r = n('1626'),
                o = String,
                i = TypeError;
            t.exports = function (t) {
                if ('object' == typeof t || r(t)) return t;
                throw i("Can't set " + o(t) + ' as a prototype');
            };
        },
        '3f8c': function (t, e) {
            t.exports = {};
        },
        '40d5': function (t, e, n) {
            var r = n('d039');
            t.exports = !r(function () {
                var t = function () {}.bind();
                return 'function' != typeof t || t.hasOwnProperty('prototype');
            });
        },
        '44ad': function (t, e, n) {
            var r = n('e330'),
                o = n('d039'),
                i = n('c6b6'),
                c = Object,
                u = r(''.split);
            t.exports = o(function () {
                return !c('z').propertyIsEnumerable(0);
            })
                ? function (t) {
                      return 'String' == i(t) ? u(t, '') : c(t);
                  }
                : c;
        },
        '44d2': function (t, e, n) {
            var r = n('b622'),
                o = n('7c73'),
                i = n('9bf2').f,
                c = r('unscopables'),
                u = Array.prototype;
            void 0 == u[c] && i(u, c, {configurable: !0, value: o(null)}),
                (t.exports = function (t) {
                    u[c][t] = !0;
                });
        },
        '44de': function (t, e, n) {
            var r = n('da84');
            t.exports = function (t, e) {
                var n = r.console;
                n && n.error && (1 == arguments.length ? n.error(t) : n.error(t, e));
            };
        },
        4738: function (t, e, n) {
            var r = n('da84'),
                o = n('d256'),
                i = n('1626'),
                c = n('94ca'),
                u = n('8925'),
                a = n('b622'),
                f = n('6069'),
                s = n('c430'),
                p = n('2d00'),
                d = o && o.prototype,
                l = a('species'),
                v = !1,
                b = i(r.PromiseRejectionEvent),
                h = c('Promise', function () {
                    var t = u(o),
                        e = t !== String(o);
                    if (!e && 66 === p) return !0;
                    if (s && (!d['catch'] || !d['finally'])) return !0;
                    if (p >= 51 && /native code/.test(t)) return !1;
                    var n = new o(function (t) {
                            t(1);
                        }),
                        r = function (t) {
                            t(
                                function () {},
                                function () {}
                            );
                        },
                        i = (n.constructor = {});
                    return (i[l] = r), (v = n.then(function () {}) instanceof r), !v || (!e && f && !b);
                });
            t.exports = {CONSTRUCTOR: h, REJECTION_EVENT: b, SUBCLASSING: v};
        },
        4840: function (t, e, n) {
            var r = n('825a'),
                o = n('5087'),
                i = n('b622'),
                c = i('species');
            t.exports = function (t, e) {
                var n,
                    i = r(t).constructor;
                return void 0 === i || void 0 == (n = r(i)[c]) ? e : o(n);
            };
        },
        '485a': function (t, e, n) {
            var r = n('c65b'),
                o = n('1626'),
                i = n('861d'),
                c = TypeError;
            t.exports = function (t, e) {
                var n, u;
                if ('string' === e && o((n = t.toString)) && !i((u = r(n, t)))) return u;
                if (o((n = t.valueOf)) && !i((u = r(n, t)))) return u;
                if ('string' !== e && o((n = t.toString)) && !i((u = r(n, t)))) return u;
                throw c("Can't convert object to primitive value");
            };
        },
        4930: function (t, e, n) {
            var r = n('2d00'),
                o = n('d039');
            t.exports =
                !!Object.getOwnPropertySymbols &&
                !o(function () {
                    var t = Symbol();
                    return !String(t) || !(Object(t) instanceof Symbol) || (!Symbol.sham && r && r < 41);
                });
        },
        '4d64': function (t, e, n) {
            var r = n('fc6a'),
                o = n('23cb'),
                i = n('07fa'),
                c = function (t) {
                    return function (e, n, c) {
                        var u,
                            a = r(e),
                            f = i(a),
                            s = o(c, f);
                        if (t && n != n) {
                            while (f > s) if (((u = a[s++]), u != u)) return !0;
                        } else for (; f > s; s++) if ((t || s in a) && a[s] === n) return t || s || 0;
                        return !t && -1;
                    };
                };
            t.exports = {includes: c(!0), indexOf: c(!1)};
        },
        5087: function (t, e, n) {
            var r = n('68ee'),
                o = n('0d51'),
                i = TypeError;
            t.exports = function (t) {
                if (r(t)) return t;
                throw i(o(t) + ' is not a constructor');
            };
        },
        '50c4': function (t, e, n) {
            var r = n('5926'),
                o = Math.min;
            t.exports = function (t) {
                return t > 0 ? o(r(t), 9007199254740991) : 0;
            };
        },
        5692: function (t, e, n) {
            var r = n('c430'),
                o = n('c6cd');
            (t.exports = function (t, e) {
                return o[t] || (o[t] = void 0 !== e ? e : {});
            })('versions', []).push({
                version: '3.22.8',
                mode: r ? 'pure' : 'global',
                copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
                license: 'https://github.com/zloirock/core-js/blob/v3.22.8/LICENSE',
                source: 'https://github.com/zloirock/core-js'
            });
        },
        '56d7': function (t, e, n) {
            'use strict';
            n.r(e),
                n.d(e, 'Helloworld', function () {
                    return A;
                }),
                n.d(e, 'Re', function () {
                    return k;
                });
            n('e260'), n('e6cf'), n('cca6'), n('a79d');
            var r = n('fc16');
            Object(r['setPublicPath'])('subapp1', 1);
            var o = n('8bbf'),
                i = n.n(o),
                c = n('6389'),
                u = n.n(c),
                a = function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n('router-view');
                },
                f = [],
                s = {},
                p = s;
            function d(t, e, n, r, o, i, c, u) {
                var a,
                    f = 'function' === typeof t ? t.options : t;
                if (
                    (e && ((f.render = e), (f.staticRenderFns = n), (f._compiled = !0)),
                    r && (f.functional = !0),
                    i && (f._scopeId = 'data-v-' + i),
                    c
                        ? ((a = function (t) {
                              (t =
                                  t ||
                                  (this.$vnode && this.$vnode.ssrContext) ||
                                  (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)),
                                  t || 'undefined' === typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__),
                                  o && o.call(this, t),
                                  t && t._registeredComponents && t._registeredComponents.add(c);
                          }),
                          (f._ssrRegister = a))
                        : o &&
                          (a = u
                              ? function () {
                                    o.call(this, (f.functional ? this.parent : this).$root.$options.shadowRoot);
                                }
                              : o),
                    a)
                )
                    if (f.functional) {
                        f._injectStyles = a;
                        var s = f.render;
                        f.render = function (t, e) {
                            return a.call(e), s(t, e);
                        };
                    } else {
                        var p = f.beforeCreate;
                        f.beforeCreate = p ? [].concat(p, a) : [a];
                    }
                return {exports: t, options: f};
            }
            var l = d(p, a, f, !1, null, null, null),
                v = l.exports,
                b = function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n('div', {attrs: {id: 'layoout'}}, [n('div', [t._v('layout')]), n('router-view')], 1);
                },
                h = [],
                y = {name: 'Layout'},
                m = y,
                x = d(m, b, h, !1, null, null, null),
                g = x.exports,
                w = function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n('div', [t._v('page1')]);
                },
                j = [],
                O = {name: 'page1'},
                S = O,
                E = d(S, w, j, !1, null, null, null),
                P = E.exports,
                _ = function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n('div', [t._v('hello world')]);
                },
                T = [],
                R = {},
                C = R,
                I = d(C, _, T, !1, null, null, null),
                A = I.exports,
                N =
                    (n('7037'),
                    {
                        functional: !0,
                        render: function (t) {
                            return t('div', ['react test']);
                        }
                    }),
                k = N,
                M = [
                    {
                        name: 'subApp1Layout',
                        component: g,
                        path: '/subapp1',
                        children: [{name: 'page1', path: '/subapp1/page1', component: P}]
                    }
                ],
                F = new u.a({mode: 'history', routes: M});
            i.a.use(u.a),
                (i.a.config.productionTip = !1),
                new i.a({
                    router: F,
                    render: function (t) {
                        return t(v);
                    }
                }).$mount('#app');
        },
        '56ef': function (t, e, n) {
            var r = n('d066'),
                o = n('e330'),
                i = n('241c'),
                c = n('7418'),
                u = n('825a'),
                a = o([].concat);
            t.exports =
                r('Reflect', 'ownKeys') ||
                function (t) {
                    var e = i.f(u(t)),
                        n = c.f;
                    return n ? a(e, n(t)) : e;
                };
        },
        5926: function (t, e, n) {
            var r = n('b42e');
            t.exports = function (t) {
                var e = +t;
                return e !== e || 0 === e ? 0 : r(e);
            };
        },
        '59ed': function (t, e, n) {
            var r = n('1626'),
                o = n('0d51'),
                i = TypeError;
            t.exports = function (t) {
                if (r(t)) return t;
                throw i(o(t) + ' is not a function');
            };
        },
        '5c6c': function (t, e) {
            t.exports = function (t, e) {
                return {enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e};
            };
        },
        '5e77': function (t, e, n) {
            var r = n('83ab'),
                o = n('1a2d'),
                i = Function.prototype,
                c = r && Object.getOwnPropertyDescriptor,
                u = o(i, 'name'),
                a = u && 'something' === function () {}.name,
                f = u && (!r || (r && c(i, 'name').configurable));
            t.exports = {EXISTS: u, PROPER: a, CONFIGURABLE: f};
        },
        '5e7e': function (t, e, n) {
            'use strict';
            var r,
                o,
                i,
                c,
                u = n('23e7'),
                a = n('c430'),
                f = n('605d'),
                s = n('da84'),
                p = n('c65b'),
                d = n('cb2d'),
                l = n('d2bb'),
                v = n('d44e'),
                b = n('2626'),
                h = n('59ed'),
                y = n('1626'),
                m = n('861d'),
                x = n('19aa'),
                g = n('4840'),
                w = n('2cf4').set,
                j = n('b575'),
                O = n('44de'),
                S = n('e667'),
                E = n('01b4'),
                P = n('69f3'),
                _ = n('d256'),
                T = n('4738'),
                R = n('f069'),
                C = 'Promise',
                I = T.CONSTRUCTOR,
                A = T.REJECTION_EVENT,
                N = T.SUBCLASSING,
                k = P.getterFor(C),
                M = P.set,
                F = _ && _.prototype,
                L = _,
                U = F,
                D = s.TypeError,
                G = s.document,
                $ = s.process,
                q = R.f,
                z = q,
                B = !!(G && G.createEvent && s.dispatchEvent),
                V = 'unhandledrejection',
                W = 'rejectionhandled',
                X = 0,
                J = 1,
                Y = 2,
                H = 1,
                K = 2,
                Q = function (t) {
                    var e;
                    return !(!m(t) || !y((e = t.then))) && e;
                },
                Z = function (t, e) {
                    var n,
                        r,
                        o,
                        i = e.value,
                        c = e.state == J,
                        u = c ? t.ok : t.fail,
                        a = t.resolve,
                        f = t.reject,
                        s = t.domain;
                    try {
                        u
                            ? (c || (e.rejection === K && ot(e), (e.rejection = H)),
                              !0 === u ? (n = i) : (s && s.enter(), (n = u(i)), s && (s.exit(), (o = !0))),
                              n === t.promise ? f(D('Promise-chain cycle')) : (r = Q(n)) ? p(r, n, a, f) : a(n))
                            : f(i);
                    } catch (d) {
                        s && !o && s.exit(), f(d);
                    }
                },
                tt = function (t, e) {
                    t.notified ||
                        ((t.notified = !0),
                        j(function () {
                            var n,
                                r = t.reactions;
                            while ((n = r.get())) Z(n, t);
                            (t.notified = !1), e && !t.rejection && nt(t);
                        }));
                },
                et = function (t, e, n) {
                    var r, o;
                    B
                        ? ((r = G.createEvent('Event')),
                          (r.promise = e),
                          (r.reason = n),
                          r.initEvent(t, !1, !0),
                          s.dispatchEvent(r))
                        : (r = {promise: e, reason: n}),
                        !A && (o = s['on' + t]) ? o(r) : t === V && O('Unhandled promise rejection', n);
                },
                nt = function (t) {
                    p(w, s, function () {
                        var e,
                            n = t.facade,
                            r = t.value,
                            o = rt(t);
                        if (
                            o &&
                            ((e = S(function () {
                                f ? $.emit('unhandledRejection', r, n) : et(V, n, r);
                            })),
                            (t.rejection = f || rt(t) ? K : H),
                            e.error)
                        )
                            throw e.value;
                    });
                },
                rt = function (t) {
                    return t.rejection !== H && !t.parent;
                },
                ot = function (t) {
                    p(w, s, function () {
                        var e = t.facade;
                        f ? $.emit('rejectionHandled', e) : et(W, e, t.value);
                    });
                },
                it = function (t, e, n) {
                    return function (r) {
                        t(e, r, n);
                    };
                },
                ct = function (t, e, n) {
                    t.done || ((t.done = !0), n && (t = n), (t.value = e), (t.state = Y), tt(t, !0));
                },
                ut = function (t, e, n) {
                    if (!t.done) {
                        (t.done = !0), n && (t = n);
                        try {
                            if (t.facade === e) throw D("Promise can't be resolved itself");
                            var r = Q(e);
                            r
                                ? j(function () {
                                      var n = {done: !1};
                                      try {
                                          p(r, e, it(ut, n, t), it(ct, n, t));
                                      } catch (o) {
                                          ct(n, o, t);
                                      }
                                  })
                                : ((t.value = e), (t.state = J), tt(t, !1));
                        } catch (o) {
                            ct({done: !1}, o, t);
                        }
                    }
                };
            if (
                I &&
                ((L = function (t) {
                    x(this, U), h(t), p(r, this);
                    var e = k(this);
                    try {
                        t(it(ut, e), it(ct, e));
                    } catch (n) {
                        ct(e, n);
                    }
                }),
                (U = L.prototype),
                (r = function (t) {
                    M(this, {
                        type: C,
                        done: !1,
                        notified: !1,
                        parent: !1,
                        reactions: new E(),
                        rejection: !1,
                        state: X,
                        value: void 0
                    });
                }),
                (r.prototype = d(U, 'then', function (t, e) {
                    var n = k(this),
                        r = q(g(this, L));
                    return (
                        (n.parent = !0),
                        (r.ok = !y(t) || t),
                        (r.fail = y(e) && e),
                        (r.domain = f ? $.domain : void 0),
                        n.state == X
                            ? n.reactions.add(r)
                            : j(function () {
                                  Z(r, n);
                              }),
                        r.promise
                    );
                })),
                (o = function () {
                    var t = new r(),
                        e = k(t);
                    (this.promise = t), (this.resolve = it(ut, e)), (this.reject = it(ct, e));
                }),
                (R.f = q =
                    function (t) {
                        return t === L || t === i ? new o(t) : z(t);
                    }),
                !a && y(_) && F !== Object.prototype)
            ) {
                (c = F.then),
                    N ||
                        d(
                            F,
                            'then',
                            function (t, e) {
                                var n = this;
                                return new L(function (t, e) {
                                    p(c, n, t, e);
                                }).then(t, e);
                            },
                            {unsafe: !0}
                        );
                try {
                    delete F.constructor;
                } catch (at) {}
                l && l(F, U);
            }
            u({global: !0, constructor: !0, wrap: !0, forced: I}, {Promise: L}), v(L, C, !1, !0), b(C);
        },
        '5eed': function (t, e, n) {
            var r = n('d256'),
                o = n('1c7e'),
                i = n('4738').CONSTRUCTOR;
            t.exports =
                i ||
                !o(function (t) {
                    r.all(t).then(void 0, function () {});
                });
        },
        '605d': function (t, e, n) {
            var r = n('c6b6'),
                o = n('da84');
            t.exports = 'process' == r(o.process);
        },
        6069: function (t, e) {
            t.exports = 'object' == typeof window && 'object' != typeof Deno;
        },
        '60da': function (t, e, n) {
            'use strict';
            var r = n('83ab'),
                o = n('e330'),
                i = n('c65b'),
                c = n('d039'),
                u = n('df75'),
                a = n('7418'),
                f = n('d1e7'),
                s = n('7b0b'),
                p = n('44ad'),
                d = Object.assign,
                l = Object.defineProperty,
                v = o([].concat);
            t.exports =
                !d ||
                c(function () {
                    if (
                        r &&
                        1 !==
                            d(
                                {b: 1},
                                d(
                                    l({}, 'a', {
                                        enumerable: !0,
                                        get: function () {
                                            l(this, 'b', {value: 3, enumerable: !1});
                                        }
                                    }),
                                    {b: 2}
                                )
                            ).b
                    )
                        return !0;
                    var t = {},
                        e = {},
                        n = Symbol(),
                        o = 'abcdefghijklmnopqrst';
                    return (
                        (t[n] = 7),
                        o.split('').forEach(function (t) {
                            e[t] = t;
                        }),
                        7 != d({}, t)[n] || u(d({}, e)).join('') != o
                    );
                })
                    ? function (t, e) {
                          var n = s(t),
                              o = arguments.length,
                              c = 1,
                              d = a.f,
                              l = f.f;
                          while (o > c) {
                              var b,
                                  h = p(arguments[c++]),
                                  y = d ? v(u(h), d(h)) : u(h),
                                  m = y.length,
                                  x = 0;
                              while (m > x) (b = y[x++]), (r && !i(l, h, b)) || (n[b] = h[b]);
                          }
                          return n;
                      }
                    : d;
        },
        6374: function (t, e, n) {
            var r = n('da84'),
                o = Object.defineProperty;
            t.exports = function (t, e) {
                try {
                    o(r, t, {value: e, configurable: !0, writable: !0});
                } catch (n) {
                    r[t] = e;
                }
                return e;
            };
        },
        6389: function (e, n) {
            e.exports = t;
        },
        '68ee': function (t, e, n) {
            var r = n('e330'),
                o = n('d039'),
                i = n('1626'),
                c = n('f5df'),
                u = n('d066'),
                a = n('8925'),
                f = function () {},
                s = [],
                p = u('Reflect', 'construct'),
                d = /^\s*(?:class|function)\b/,
                l = r(d.exec),
                v = !d.exec(f),
                b = function (t) {
                    if (!i(t)) return !1;
                    try {
                        return p(f, s, t), !0;
                    } catch (e) {
                        return !1;
                    }
                },
                h = function (t) {
                    if (!i(t)) return !1;
                    switch (c(t)) {
                        case 'AsyncFunction':
                        case 'GeneratorFunction':
                        case 'AsyncGeneratorFunction':
                            return !1;
                    }
                    try {
                        return v || !!l(d, a(t));
                    } catch (e) {
                        return !0;
                    }
                };
            (h.sham = !0),
                (t.exports =
                    !p ||
                    o(function () {
                        var t;
                        return (
                            b(b.call) ||
                            !b(Object) ||
                            !b(function () {
                                t = !0;
                            }) ||
                            t
                        );
                    })
                        ? h
                        : b);
        },
        '69f3': function (t, e, n) {
            var r,
                o,
                i,
                c = n('7f9a'),
                u = n('da84'),
                a = n('e330'),
                f = n('861d'),
                s = n('9112'),
                p = n('1a2d'),
                d = n('c6cd'),
                l = n('f772'),
                v = n('d012'),
                b = 'Object already initialized',
                h = u.TypeError,
                y = u.WeakMap,
                m = function (t) {
                    return i(t) ? o(t) : r(t, {});
                },
                x = function (t) {
                    return function (e) {
                        var n;
                        if (!f(e) || (n = o(e)).type !== t) throw h('Incompatible receiver, ' + t + ' required');
                        return n;
                    };
                };
            if (c || d.state) {
                var g = d.state || (d.state = new y()),
                    w = a(g.get),
                    j = a(g.has),
                    O = a(g.set);
                (r = function (t, e) {
                    if (j(g, t)) throw new h(b);
                    return (e.facade = t), O(g, t, e), e;
                }),
                    (o = function (t) {
                        return w(g, t) || {};
                    }),
                    (i = function (t) {
                        return j(g, t);
                    });
            } else {
                var S = l('state');
                (v[S] = !0),
                    (r = function (t, e) {
                        if (p(t, S)) throw new h(b);
                        return (e.facade = t), s(t, S, e), e;
                    }),
                    (o = function (t) {
                        return p(t, S) ? t[S] : {};
                    }),
                    (i = function (t) {
                        return p(t, S);
                    });
            }
            t.exports = {set: r, get: o, has: i, enforce: m, getterFor: x};
        },
        7037: function (t, n) {
            t.exports = e;
        },
        7149: function (t, e, n) {
            'use strict';
            var r = n('23e7'),
                o = n('d066'),
                i = n('c430'),
                c = n('d256'),
                u = n('4738').CONSTRUCTOR,
                a = n('cdf9'),
                f = o('Promise'),
                s = i && !u;
            r(
                {target: 'Promise', stat: !0, forced: i || u},
                {
                    resolve: function (t) {
                        return a(s && this === f ? c : this, t);
                    }
                }
            );
        },
        7418: function (t, e) {
            e.f = Object.getOwnPropertySymbols;
        },
        7839: function (t, e) {
            t.exports = [
                'constructor',
                'hasOwnProperty',
                'isPrototypeOf',
                'propertyIsEnumerable',
                'toLocaleString',
                'toString',
                'valueOf'
            ];
        },
        '7b0b': function (t, e, n) {
            var r = n('1d80'),
                o = Object;
            t.exports = function (t) {
                return o(r(t));
            };
        },
        '7c73': function (t, e, n) {
            var r,
                o = n('825a'),
                i = n('37e8'),
                c = n('7839'),
                u = n('d012'),
                a = n('1be4'),
                f = n('cc12'),
                s = n('f772'),
                p = '>',
                d = '<',
                l = 'prototype',
                v = 'script',
                b = s('IE_PROTO'),
                h = function () {},
                y = function (t) {
                    return d + v + p + t + d + '/' + v + p;
                },
                m = function (t) {
                    t.write(y('')), t.close();
                    var e = t.parentWindow.Object;
                    return (t = null), e;
                },
                x = function () {
                    var t,
                        e = f('iframe'),
                        n = 'java' + v + ':';
                    return (
                        (e.style.display = 'none'),
                        a.appendChild(e),
                        (e.src = String(n)),
                        (t = e.contentWindow.document),
                        t.open(),
                        t.write(y('document.F=Object')),
                        t.close(),
                        t.F
                    );
                },
                g = function () {
                    try {
                        r = new ActiveXObject('htmlfile');
                    } catch (e) {}
                    g = 'undefined' != typeof document ? (document.domain && r ? m(r) : x()) : m(r);
                    var t = c.length;
                    while (t--) delete g[l][c[t]];
                    return g();
                };
            (u[b] = !0),
                (t.exports =
                    Object.create ||
                    function (t, e) {
                        var n;
                        return (
                            null !== t ? ((h[l] = o(t)), (n = new h()), (h[l] = null), (n[b] = t)) : (n = g()),
                            void 0 === e ? n : i.f(n, e)
                        );
                    });
        },
        '7dd0': function (t, e, n) {
            'use strict';
            var r = n('23e7'),
                o = n('c65b'),
                i = n('c430'),
                c = n('5e77'),
                u = n('1626'),
                a = n('9ed3'),
                f = n('e163'),
                s = n('d2bb'),
                p = n('d44e'),
                d = n('9112'),
                l = n('cb2d'),
                v = n('b622'),
                b = n('3f8c'),
                h = n('ae93'),
                y = c.PROPER,
                m = c.CONFIGURABLE,
                x = h.IteratorPrototype,
                g = h.BUGGY_SAFARI_ITERATORS,
                w = v('iterator'),
                j = 'keys',
                O = 'values',
                S = 'entries',
                E = function () {
                    return this;
                };
            t.exports = function (t, e, n, c, v, h, P) {
                a(n, e, c);
                var _,
                    T,
                    R,
                    C = function (t) {
                        if (t === v && M) return M;
                        if (!g && t in N) return N[t];
                        switch (t) {
                            case j:
                                return function () {
                                    return new n(this, t);
                                };
                            case O:
                                return function () {
                                    return new n(this, t);
                                };
                            case S:
                                return function () {
                                    return new n(this, t);
                                };
                        }
                        return function () {
                            return new n(this);
                        };
                    },
                    I = e + ' Iterator',
                    A = !1,
                    N = t.prototype,
                    k = N[w] || N['@@iterator'] || (v && N[v]),
                    M = (!g && k) || C(v),
                    F = ('Array' == e && N.entries) || k;
                if (
                    (F &&
                        ((_ = f(F.call(new t()))),
                        _ !== Object.prototype &&
                            _.next &&
                            (i || f(_) === x || (s ? s(_, x) : u(_[w]) || l(_, w, E)),
                            p(_, I, !0, !0),
                            i && (b[I] = E))),
                    y &&
                        v == O &&
                        k &&
                        k.name !== O &&
                        (!i && m
                            ? d(N, 'name', O)
                            : ((A = !0),
                              (M = function () {
                                  return o(k, this);
                              }))),
                    v)
                )
                    if (((T = {values: C(O), keys: h ? M : C(j), entries: C(S)}), P))
                        for (R in T) (g || A || !(R in N)) && l(N, R, T[R]);
                    else r({target: e, proto: !0, forced: g || A}, T);
                return (i && !P) || N[w] === M || l(N, w, M, {name: v}), (b[e] = M), T;
            };
        },
        '7f9a': function (t, e, n) {
            var r = n('da84'),
                o = n('1626'),
                i = n('8925'),
                c = r.WeakMap;
            t.exports = o(c) && /native code/.test(i(c));
        },
        '825a': function (t, e, n) {
            var r = n('861d'),
                o = String,
                i = TypeError;
            t.exports = function (t) {
                if (r(t)) return t;
                throw i(o(t) + ' is not an object');
            };
        },
        '83ab': function (t, e, n) {
            var r = n('d039');
            t.exports = !r(function () {
                return (
                    7 !=
                    Object.defineProperty({}, 1, {
                        get: function () {
                            return 7;
                        }
                    })[1]
                );
            });
        },
        '861d': function (t, e, n) {
            var r = n('1626');
            t.exports = function (t) {
                return 'object' == typeof t ? null !== t : r(t);
            };
        },
        8925: function (t, e, n) {
            var r = n('e330'),
                o = n('1626'),
                i = n('c6cd'),
                c = r(Function.toString);
            o(i.inspectSource) ||
                (i.inspectSource = function (t) {
                    return c(t);
                }),
                (t.exports = i.inspectSource);
        },
        '8bbf': function (t, e) {
            t.exports = n;
        },
        '90e3': function (t, e, n) {
            var r = n('e330'),
                o = 0,
                i = Math.random(),
                c = r((1).toString);
            t.exports = function (t) {
                return 'Symbol(' + (void 0 === t ? '' : t) + ')_' + c(++o + i, 36);
            };
        },
        9112: function (t, e, n) {
            var r = n('83ab'),
                o = n('9bf2'),
                i = n('5c6c');
            t.exports = r
                ? function (t, e, n) {
                      return o.f(t, e, i(1, n));
                  }
                : function (t, e, n) {
                      return (t[e] = n), t;
                  };
        },
        '94ca': function (t, e, n) {
            var r = n('d039'),
                o = n('1626'),
                i = /#|\.prototype\./,
                c = function (t, e) {
                    var n = a[u(t)];
                    return n == s || (n != f && (o(e) ? r(e) : !!e));
                },
                u = (c.normalize = function (t) {
                    return String(t).replace(i, '.').toLowerCase();
                }),
                a = (c.data = {}),
                f = (c.NATIVE = 'N'),
                s = (c.POLYFILL = 'P');
            t.exports = c;
        },
        '9a1f': function (t, e, n) {
            var r = n('c65b'),
                o = n('59ed'),
                i = n('825a'),
                c = n('0d51'),
                u = n('35a1'),
                a = TypeError;
            t.exports = function (t, e) {
                var n = arguments.length < 2 ? u(t) : e;
                if (o(n)) return i(r(n, t));
                throw a(c(t) + ' is not iterable');
            };
        },
        '9bf2': function (t, e, n) {
            var r = n('83ab'),
                o = n('0cfb'),
                i = n('aed9'),
                c = n('825a'),
                u = n('a04b'),
                a = TypeError,
                f = Object.defineProperty,
                s = Object.getOwnPropertyDescriptor,
                p = 'enumerable',
                d = 'configurable',
                l = 'writable';
            e.f = r
                ? i
                    ? function (t, e, n) {
                          if (
                              (c(t),
                              (e = u(e)),
                              c(n),
                              'function' === typeof t && 'prototype' === e && 'value' in n && l in n && !n[l])
                          ) {
                              var r = s(t, e);
                              r &&
                                  r[l] &&
                                  ((t[e] = n.value),
                                  (n = {
                                      configurable: d in n ? n[d] : r[d],
                                      enumerable: p in n ? n[p] : r[p],
                                      writable: !1
                                  }));
                          }
                          return f(t, e, n);
                      }
                    : f
                : function (t, e, n) {
                      if ((c(t), (e = u(e)), c(n), o))
                          try {
                              return f(t, e, n);
                          } catch (r) {}
                      if ('get' in n || 'set' in n) throw a('Accessors not supported');
                      return 'value' in n && (t[e] = n.value), t;
                  };
        },
        '9ed3': function (t, e, n) {
            'use strict';
            var r = n('ae93').IteratorPrototype,
                o = n('7c73'),
                i = n('5c6c'),
                c = n('d44e'),
                u = n('3f8c'),
                a = function () {
                    return this;
                };
            t.exports = function (t, e, n, f) {
                var s = e + ' Iterator';
                return (t.prototype = o(r, {next: i(+!f, n)})), c(t, s, !1, !0), (u[s] = a), t;
            };
        },
        a04b: function (t, e, n) {
            var r = n('c04e'),
                o = n('d9b5');
            t.exports = function (t) {
                var e = r(t, 'string');
                return o(e) ? e : e + '';
            };
        },
        a4b4: function (t, e, n) {
            var r = n('342f');
            t.exports = /web0s(?!.*chrome)/i.test(r);
        },
        a79d: function (t, e, n) {
            'use strict';
            var r = n('23e7'),
                o = n('c430'),
                i = n('d256'),
                c = n('d039'),
                u = n('d066'),
                a = n('1626'),
                f = n('4840'),
                s = n('cdf9'),
                p = n('cb2d'),
                d = i && i.prototype,
                l =
                    !!i &&
                    c(function () {
                        d['finally'].call({then: function () {}}, function () {});
                    });
            if (
                (r(
                    {target: 'Promise', proto: !0, real: !0, forced: l},
                    {
                        finally: function (t) {
                            var e = f(this, u('Promise')),
                                n = a(t);
                            return this.then(
                                n
                                    ? function (n) {
                                          return s(e, t()).then(function () {
                                              return n;
                                          });
                                      }
                                    : t,
                                n
                                    ? function (n) {
                                          return s(e, t()).then(function () {
                                              throw n;
                                          });
                                      }
                                    : t
                            );
                        }
                    }
                ),
                !o && a(i))
            ) {
                var v = u('Promise').prototype['finally'];
                d['finally'] !== v && p(d, 'finally', v, {unsafe: !0});
            }
        },
        ae93: function (t, e, n) {
            'use strict';
            var r,
                o,
                i,
                c = n('d039'),
                u = n('1626'),
                a = n('7c73'),
                f = n('e163'),
                s = n('cb2d'),
                p = n('b622'),
                d = n('c430'),
                l = p('iterator'),
                v = !1;
            [].keys && ((i = [].keys()), 'next' in i ? ((o = f(f(i))), o !== Object.prototype && (r = o)) : (v = !0));
            var b =
                void 0 == r ||
                c(function () {
                    var t = {};
                    return r[l].call(t) !== t;
                });
            b ? (r = {}) : d && (r = a(r)),
                u(r[l]) ||
                    s(r, l, function () {
                        return this;
                    }),
                (t.exports = {IteratorPrototype: r, BUGGY_SAFARI_ITERATORS: v});
        },
        aed9: function (t, e, n) {
            var r = n('83ab'),
                o = n('d039');
            t.exports =
                r &&
                o(function () {
                    return (
                        42 != Object.defineProperty(function () {}, 'prototype', {value: 42, writable: !1}).prototype
                    );
                });
        },
        b42e: function (t, e) {
            var n = Math.ceil,
                r = Math.floor;
            t.exports =
                Math.trunc ||
                function (t) {
                    var e = +t;
                    return (e > 0 ? r : n)(e);
                };
        },
        b575: function (t, e, n) {
            var r,
                o,
                i,
                c,
                u,
                a,
                f,
                s,
                p = n('da84'),
                d = n('0366'),
                l = n('06cf').f,
                v = n('2cf4').set,
                b = n('1cdc'),
                h = n('d4c3'),
                y = n('a4b4'),
                m = n('605d'),
                x = p.MutationObserver || p.WebKitMutationObserver,
                g = p.document,
                w = p.process,
                j = p.Promise,
                O = l(p, 'queueMicrotask'),
                S = O && O.value;
            S ||
                ((r = function () {
                    var t, e;
                    m && (t = w.domain) && t.exit();
                    while (o) {
                        (e = o.fn), (o = o.next);
                        try {
                            e();
                        } catch (n) {
                            throw (o ? c() : (i = void 0), n);
                        }
                    }
                    (i = void 0), t && t.enter();
                }),
                b || m || y || !x || !g
                    ? !h && j && j.resolve
                        ? ((f = j.resolve(void 0)),
                          (f.constructor = j),
                          (s = d(f.then, f)),
                          (c = function () {
                              s(r);
                          }))
                        : m
                        ? (c = function () {
                              w.nextTick(r);
                          })
                        : ((v = d(v, p)),
                          (c = function () {
                              v(r);
                          }))
                    : ((u = !0),
                      (a = g.createTextNode('')),
                      new x(r).observe(a, {characterData: !0}),
                      (c = function () {
                          a.data = u = !u;
                      }))),
                (t.exports =
                    S ||
                    function (t) {
                        var e = {fn: t, next: void 0};
                        i && (i.next = e), o || ((o = e), c()), (i = e);
                    });
        },
        b622: function (t, e, n) {
            var r = n('da84'),
                o = n('5692'),
                i = n('1a2d'),
                c = n('90e3'),
                u = n('4930'),
                a = n('fdbf'),
                f = o('wks'),
                s = r.Symbol,
                p = s && s['for'],
                d = a ? s : (s && s.withoutSetter) || c;
            t.exports = function (t) {
                if (!i(f, t) || (!u && 'string' != typeof f[t])) {
                    var e = 'Symbol.' + t;
                    u && i(s, t) ? (f[t] = s[t]) : (f[t] = a && p ? p(e) : d(e));
                }
                return f[t];
            };
        },
        c04e: function (t, e, n) {
            var r = n('c65b'),
                o = n('861d'),
                i = n('d9b5'),
                c = n('dc4a'),
                u = n('485a'),
                a = n('b622'),
                f = TypeError,
                s = a('toPrimitive');
            t.exports = function (t, e) {
                if (!o(t) || i(t)) return t;
                var n,
                    a = c(t, s);
                if (a) {
                    if ((void 0 === e && (e = 'default'), (n = r(a, t, e)), !o(n) || i(n))) return n;
                    throw f("Can't convert object to primitive value");
                }
                return void 0 === e && (e = 'number'), u(t, e);
            };
        },
        c430: function (t, e) {
            t.exports = !1;
        },
        c65b: function (t, e, n) {
            var r = n('40d5'),
                o = Function.prototype.call;
            t.exports = r
                ? o.bind(o)
                : function () {
                      return o.apply(o, arguments);
                  };
        },
        c6b6: function (t, e, n) {
            var r = n('e330'),
                o = r({}.toString),
                i = r(''.slice);
            t.exports = function (t) {
                return i(o(t), 8, -1);
            };
        },
        c6cd: function (t, e, n) {
            var r = n('da84'),
                o = n('6374'),
                i = '__core-js_shared__',
                c = r[i] || o(i, {});
            t.exports = c;
        },
        c8ba: function (t, e) {
            var n;
            n = (function () {
                return this;
            })();
            try {
                n = n || new Function('return this')();
            } catch (r) {
                'object' === typeof window && (n = window);
            }
            t.exports = n;
        },
        ca84: function (t, e, n) {
            var r = n('e330'),
                o = n('1a2d'),
                i = n('fc6a'),
                c = n('4d64').indexOf,
                u = n('d012'),
                a = r([].push);
            t.exports = function (t, e) {
                var n,
                    r = i(t),
                    f = 0,
                    s = [];
                for (n in r) !o(u, n) && o(r, n) && a(s, n);
                while (e.length > f) o(r, (n = e[f++])) && (~c(s, n) || a(s, n));
                return s;
            };
        },
        cb2d: function (t, e, n) {
            var r = n('1626'),
                o = n('9112'),
                i = n('13d2'),
                c = n('6374');
            t.exports = function (t, e, n, u) {
                u || (u = {});
                var a = u.enumerable,
                    f = void 0 !== u.name ? u.name : e;
                return (
                    r(n) && i(n, f, u),
                    u.global
                        ? a
                            ? (t[e] = n)
                            : c(e, n)
                        : (u.unsafe ? t[e] && (a = !0) : delete t[e], a ? (t[e] = n) : o(t, e, n)),
                    t
                );
            };
        },
        cc12: function (t, e, n) {
            var r = n('da84'),
                o = n('861d'),
                i = r.document,
                c = o(i) && o(i.createElement);
            t.exports = function (t) {
                return c ? i.createElement(t) : {};
            };
        },
        cc98: function (t, e, n) {
            'use strict';
            var r = n('23e7'),
                o = n('c430'),
                i = n('4738').CONSTRUCTOR,
                c = n('d256'),
                u = n('d066'),
                a = n('1626'),
                f = n('cb2d'),
                s = c && c.prototype;
            if (
                (r(
                    {target: 'Promise', proto: !0, forced: i, real: !0},
                    {
                        catch: function (t) {
                            return this.then(void 0, t);
                        }
                    }
                ),
                !o && a(c))
            ) {
                var p = u('Promise').prototype['catch'];
                s['catch'] !== p && f(s, 'catch', p, {unsafe: !0});
            }
        },
        cca6: function (t, e, n) {
            var r = n('23e7'),
                o = n('60da');
            r({target: 'Object', stat: !0, arity: 2, forced: Object.assign !== o}, {assign: o});
        },
        cdf9: function (t, e, n) {
            var r = n('825a'),
                o = n('861d'),
                i = n('f069');
            t.exports = function (t, e) {
                if ((r(t), o(e) && e.constructor === t)) return e;
                var n = i.f(t),
                    c = n.resolve;
                return c(e), n.promise;
            };
        },
        d012: function (t, e) {
            t.exports = {};
        },
        d039: function (t, e) {
            t.exports = function (t) {
                try {
                    return !!t();
                } catch (e) {
                    return !0;
                }
            };
        },
        d066: function (t, e, n) {
            var r = n('da84'),
                o = n('1626'),
                i = function (t) {
                    return o(t) ? t : void 0;
                };
            t.exports = function (t, e) {
                return arguments.length < 2 ? i(r[t]) : r[t] && r[t][e];
            };
        },
        d1e7: function (t, e, n) {
            'use strict';
            var r = {}.propertyIsEnumerable,
                o = Object.getOwnPropertyDescriptor,
                i = o && !r.call({1: 2}, 1);
            e.f = i
                ? function (t) {
                      var e = o(this, t);
                      return !!e && e.enumerable;
                  }
                : r;
        },
        d256: function (t, e, n) {
            var r = n('da84');
            t.exports = r.Promise;
        },
        d2bb: function (t, e, n) {
            var r = n('e330'),
                o = n('825a'),
                i = n('3bbe');
            t.exports =
                Object.setPrototypeOf ||
                ('__proto__' in {}
                    ? (function () {
                          var t,
                              e = !1,
                              n = {};
                          try {
                              (t = r(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set)),
                                  t(n, []),
                                  (e = n instanceof Array);
                          } catch (c) {}
                          return function (n, r) {
                              return o(n), i(r), e ? t(n, r) : (n.__proto__ = r), n;
                          };
                      })()
                    : void 0);
        },
        d44e: function (t, e, n) {
            var r = n('9bf2').f,
                o = n('1a2d'),
                i = n('b622'),
                c = i('toStringTag');
            t.exports = function (t, e, n) {
                t && !n && (t = t.prototype), t && !o(t, c) && r(t, c, {configurable: !0, value: e});
            };
        },
        d4c3: function (t, e, n) {
            var r = n('342f'),
                o = n('da84');
            t.exports = /ipad|iphone|ipod/i.test(r) && void 0 !== o.Pebble;
        },
        d6d6: function (t, e) {
            var n = TypeError;
            t.exports = function (t, e) {
                if (t < e) throw n('Not enough arguments');
                return t;
            };
        },
        d9b5: function (t, e, n) {
            var r = n('d066'),
                o = n('1626'),
                i = n('3a9b'),
                c = n('fdbf'),
                u = Object;
            t.exports = c
                ? function (t) {
                      return 'symbol' == typeof t;
                  }
                : function (t) {
                      var e = r('Symbol');
                      return o(e) && i(e.prototype, u(t));
                  };
        },
        da84: function (t, e, n) {
            (function (e) {
                var n = function (t) {
                    return t && t.Math == Math && t;
                };
                t.exports =
                    n('object' == typeof globalThis && globalThis) ||
                    n('object' == typeof window && window) ||
                    n('object' == typeof self && self) ||
                    n('object' == typeof e && e) ||
                    (function () {
                        return this;
                    })() ||
                    Function('return this')();
            }.call(this, n('c8ba')));
        },
        dc4a: function (t, e, n) {
            var r = n('59ed');
            t.exports = function (t, e) {
                var n = t[e];
                return null == n ? void 0 : r(n);
            };
        },
        df75: function (t, e, n) {
            var r = n('ca84'),
                o = n('7839');
            t.exports =
                Object.keys ||
                function (t) {
                    return r(t, o);
                };
        },
        e163: function (t, e, n) {
            var r = n('1a2d'),
                o = n('1626'),
                i = n('7b0b'),
                c = n('f772'),
                u = n('e177'),
                a = c('IE_PROTO'),
                f = Object,
                s = f.prototype;
            t.exports = u
                ? f.getPrototypeOf
                : function (t) {
                      var e = i(t);
                      if (r(e, a)) return e[a];
                      var n = e.constructor;
                      return o(n) && e instanceof n ? n.prototype : e instanceof f ? s : null;
                  };
        },
        e177: function (t, e, n) {
            var r = n('d039');
            t.exports = !r(function () {
                function t() {}
                return (t.prototype.constructor = null), Object.getPrototypeOf(new t()) !== t.prototype;
            });
        },
        e260: function (t, e, n) {
            'use strict';
            var r = n('fc6a'),
                o = n('44d2'),
                i = n('3f8c'),
                c = n('69f3'),
                u = n('9bf2').f,
                a = n('7dd0'),
                f = n('c430'),
                s = n('83ab'),
                p = 'Array Iterator',
                d = c.set,
                l = c.getterFor(p);
            t.exports = a(
                Array,
                'Array',
                function (t, e) {
                    d(this, {type: p, target: r(t), index: 0, kind: e});
                },
                function () {
                    var t = l(this),
                        e = t.target,
                        n = t.kind,
                        r = t.index++;
                    return !e || r >= e.length
                        ? ((t.target = void 0), {value: void 0, done: !0})
                        : 'keys' == n
                        ? {value: r, done: !1}
                        : 'values' == n
                        ? {value: e[r], done: !1}
                        : {value: [r, e[r]], done: !1};
                },
                'values'
            );
            var v = (i.Arguments = i.Array);
            if ((o('keys'), o('values'), o('entries'), !f && s && 'values' !== v.name))
                try {
                    u(v, 'name', {value: 'values'});
                } catch (b) {}
        },
        e330: function (t, e, n) {
            var r = n('40d5'),
                o = Function.prototype,
                i = o.bind,
                c = o.call,
                u = r && i.bind(c, c);
            t.exports = r
                ? function (t) {
                      return t && u(t);
                  }
                : function (t) {
                      return (
                          t &&
                          function () {
                              return c.apply(t, arguments);
                          }
                      );
                  };
        },
        e667: function (t, e) {
            t.exports = function (t) {
                try {
                    return {error: !1, value: t()};
                } catch (e) {
                    return {error: !0, value: e};
                }
            };
        },
        e6cf: function (t, e, n) {
            n('5e7e'), n('14e5'), n('cc98'), n('3529'), n('f22b'), n('7149');
        },
        e893: function (t, e, n) {
            var r = n('1a2d'),
                o = n('56ef'),
                i = n('06cf'),
                c = n('9bf2');
            t.exports = function (t, e, n) {
                for (var u = o(e), a = c.f, f = i.f, s = 0; s < u.length; s++) {
                    var p = u[s];
                    r(t, p) || (n && r(n, p)) || a(t, p, f(e, p));
                }
            };
        },
        e95a: function (t, e, n) {
            var r = n('b622'),
                o = n('3f8c'),
                i = r('iterator'),
                c = Array.prototype;
            t.exports = function (t) {
                return void 0 !== t && (o.Array === t || c[i] === t);
            };
        },
        f069: function (t, e, n) {
            'use strict';
            var r = n('59ed'),
                o = function (t) {
                    var e, n;
                    (this.promise = new t(function (t, r) {
                        if (void 0 !== e || void 0 !== n) throw TypeError('Bad Promise constructor');
                        (e = t), (n = r);
                    })),
                        (this.resolve = r(e)),
                        (this.reject = r(n));
                };
            t.exports.f = function (t) {
                return new o(t);
            };
        },
        f22b: function (t, e, n) {
            'use strict';
            var r = n('23e7'),
                o = n('c65b'),
                i = n('f069'),
                c = n('4738').CONSTRUCTOR;
            r(
                {target: 'Promise', stat: !0, forced: c},
                {
                    reject: function (t) {
                        var e = i.f(this);
                        return o(e.reject, void 0, t), e.promise;
                    }
                }
            );
        },
        f36a: function (t, e, n) {
            var r = n('e330');
            t.exports = r([].slice);
        },
        f5df: function (t, e, n) {
            var r = n('00ee'),
                o = n('1626'),
                i = n('c6b6'),
                c = n('b622'),
                u = c('toStringTag'),
                a = Object,
                f =
                    'Arguments' ==
                    i(
                        (function () {
                            return arguments;
                        })()
                    ),
                s = function (t, e) {
                    try {
                        return t[e];
                    } catch (n) {}
                };
            t.exports = r
                ? i
                : function (t) {
                      var e, n, r;
                      return void 0 === t
                          ? 'Undefined'
                          : null === t
                          ? 'Null'
                          : 'string' == typeof (n = s((e = a(t)), u))
                          ? n
                          : f
                          ? i(e)
                          : 'Object' == (r = i(e)) && o(e.callee)
                          ? 'Arguments'
                          : r;
                  };
        },
        f772: function (t, e, n) {
            var r = n('5692'),
                o = n('90e3'),
                i = r('keys');
            t.exports = function (t) {
                return i[t] || (i[t] = o(t));
            };
        },
        fc16: function (t, e, n) {
            function r(t, e) {
                var n = document.createElement('a');
                n.href = t;
                var r = '/' === n.pathname[0] ? n.pathname : '/' + n.pathname,
                    o = 0,
                    i = r.length;
                while (o !== e && i >= 0) {
                    var c = r[--i];
                    '/' === c && o++;
                }
                if (o !== e)
                    throw Error(
                        'systemjs-webpack-interop: rootDirectoryLevel (' +
                            e +
                            ') is greater than the number of directories (' +
                            o +
                            ') in the URL path ' +
                            t
                    );
                var u = r.slice(0, i + 1);
                return n.protocol + '//' + n.host + u;
            }
            (e.setPublicPath = function (t, e) {
                if ((e || (e = 1), 'string' !== typeof t || 0 === t.trim().length))
                    throw Error(
                        "systemjs-webpack-interop: setPublicPath(systemjsModuleName) must be called with a non-empty string 'systemjsModuleName'"
                    );
                if ('number' !== typeof e || e <= 0 || isNaN(e) || !o(e))
                    throw Error(
                        "systemjs-webpack-interop: setPublicPath(systemjsModuleName, rootDirectoryLevel) must be called with a positive integer 'rootDirectoryLevel'"
                    );
                var i;
                try {
                    if (((i = window.System.resolve(t)), !i)) throw Error();
                } catch (c) {
                    throw Error(
                        "systemjs-webpack-interop: There is no such module '" +
                            t +
                            "' in the SystemJS registry. Did you misspell the name of your module?"
                    );
                }
                n.p = r(i, e);
            }),
                (e.resolveDirectory = r);
            var o =
                Number.isInteger ||
                function (t) {
                    return 'number' === typeof t && isFinite(t) && Math.floor(t) === t;
                };
        },
        fc6a: function (t, e, n) {
            var r = n('44ad'),
                o = n('1d80');
            t.exports = function (t) {
                return r(o(t));
            };
        },
        fdbf: function (t, e, n) {
            var r = n('4930');
            t.exports = r && !Symbol.sham && 'symbol' == typeof Symbol.iterator;
        }
    });
});
