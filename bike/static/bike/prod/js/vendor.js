/*! jQuery v1.11.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function (a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
        if (!a.document)throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function (a, b) {
    var c = [], d = c.slice, e = c.concat, f = c.push, g = c.indexOf, h = {}, i = h.toString, j = h.hasOwnProperty, k = {}, l = "1.11.1", m = function (a, b) {
        return new m.fn.init(a, b)
    }, n = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, o = /^-ms-/, p = /-([\da-z])/gi, q = function (a, b) {
        return b.toUpperCase()
    };
    m.fn = m.prototype = {
        jquery: l, constructor: m, selector: "", length: 0, toArray: function () {
            return d.call(this)
        }, get: function (a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this)
        }, pushStack: function (a) {
            var b = m.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        }, each: function (a, b) {
            return m.each(this, a, b)
        }, map: function (a) {
            return this.pushStack(m.map(this, function (b, c) {
                return a.call(b, c, b)
            }))
        }, slice: function () {
            return this.pushStack(d.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (a) {
            var b = this.length, c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        }, end: function () {
            return this.prevObject || this.constructor(null)
        }, push: f, sort: c.sort, splice: c.splice
    }, m.extend = m.fn.extend = function () {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || m.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)if (null != (e = arguments[h]))for (d in e)a = g[d], c = e[d], g !== c && (j && c && (m.isPlainObject(c) || (b = m.isArray(c))) ? (b ? (b = !1, f = a && m.isArray(a) ? a : []) : f = a && m.isPlainObject(a) ? a : {}, g[d] = m.extend(j, f, c)) : void 0 !== c && (g[d] = c));
        return g
    }, m.extend({
        expando: "jQuery" + (l + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (a) {
            throw new Error(a)
        }, noop: function () {
        }, isFunction: function (a) {
            return "function" === m.type(a)
        }, isArray: Array.isArray || function (a) {
            return "array" === m.type(a)
        }, isWindow: function (a) {
            return null != a && a == a.window
        }, isNumeric: function (a) {
            return !m.isArray(a) && a - parseFloat(a) >= 0
        }, isEmptyObject: function (a) {
            var b;
            for (b in a)return !1;
            return !0
        }, isPlainObject: function (a) {
            var b;
            if (!a || "object" !== m.type(a) || a.nodeType || m.isWindow(a))return !1;
            try {
                if (a.constructor && !j.call(a, "constructor") && !j.call(a.constructor.prototype, "isPrototypeOf"))return !1
            } catch (c) {
                return !1
            }
            if (k.ownLast)for (b in a)return j.call(a, b);
            for (b in a);
            return void 0 === b || j.call(a, b)
        }, type: function (a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a
        }, globalEval: function (b) {
            b && m.trim(b) && (a.execScript || function (b) {
                a.eval.call(a, b)
            })(b)
        }, camelCase: function (a) {
            return a.replace(o, "ms-").replace(p, q)
        }, nodeName: function (a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        }, each: function (a, b, c) {
            var d, e = 0, f = a.length, g = r(a);
            if (c) {
                if (g) {
                    for (; f > e; e++)if (d = b.apply(a[e], c), d === !1)break
                } else for (e in a)if (d = b.apply(a[e], c), d === !1)break
            } else if (g) {
                for (; f > e; e++)if (d = b.call(a[e], e, a[e]), d === !1)break
            } else for (e in a)if (d = b.call(a[e], e, a[e]), d === !1)break;
            return a
        }, trim: function (a) {
            return null == a ? "" : (a + "").replace(n, "")
        }, makeArray: function (a, b) {
            var c = b || [];
            return null != a && (r(Object(a)) ? m.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c
        }, inArray: function (a, b, c) {
            var d;
            if (b) {
                if (g)return g.call(b, a, c);
                for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)if (c in b && b[c] === a)return c
            }
            return -1
        }, merge: function (a, b) {
            var c = +b.length, d = 0, e = a.length;
            while (c > d)a[e++] = b[d++];
            if (c !== c)while (void 0 !== b[d])a[e++] = b[d++];
            return a.length = e, a
        }, grep: function (a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        }, map: function (a, b, c) {
            var d, f = 0, g = a.length, h = r(a), i = [];
            if (h)for (; g > f; f++)d = b(a[f], f, c), null != d && i.push(d); else for (f in a)d = b(a[f], f, c), null != d && i.push(d);
            return e.apply([], i)
        }, guid: 1, proxy: function (a, b) {
            var c, e, f;
            return "string" == typeof b && (f = a[b], b = a, a = f), m.isFunction(a) ? (c = d.call(arguments, 2), e = function () {
                return a.apply(b || this, c.concat(d.call(arguments)))
            }, e.guid = a.guid = a.guid || m.guid++, e) : void 0
        }, now: function () {
            return +new Date
        }, support: k
    }), m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) {
        h["[object " + b + "]"] = b.toLowerCase()
    });
    function r(a) {
        var b = a.length, c = m.type(a);
        return "function" === c || m.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }

    var s = function (a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + -new Date, v = a.document, w = 0, x = 0, y = gb(), z = gb(), A = gb(), B = function (a, b) {
            return a === b && (l = !0), 0
        }, C = "undefined", D = 1 << 31, E = {}.hasOwnProperty, F = [], G = F.pop, H = F.push, I = F.push, J = F.slice, K = F.indexOf || function (a) {
                for (var b = 0, c = this.length; c > b; b++)if (this[b] === a)return b;
                return -1
            }, L = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", M = "[\\x20\\t\\r\\n\\f]", N = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", O = N.replace("w", "w#"), P = "\\[" + M + "*(" + N + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + O + "))|)" + M + "*\\]", Q = ":(" + N + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + P + ")*)|.*)\\)|)", R = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"), S = new RegExp("^" + M + "*," + M + "*"), T = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"), U = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"), V = new RegExp(Q), W = new RegExp("^" + O + "$"), X = {
            ID: new RegExp("^#(" + N + ")"),
            CLASS: new RegExp("^\\.(" + N + ")"),
            TAG: new RegExp("^(" + N.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + P),
            PSEUDO: new RegExp("^" + Q),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + L + ")$", "i"),
            needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
        }, Y = /^(?:input|select|textarea|button)$/i, Z = /^h\d$/i, $ = /^[^{]+\{\s*\[native \w/, _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ab = /[+~]/, bb = /'|\\/g, cb = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"), db = function (a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
        };
        try {
            I.apply(F = J.call(v.childNodes), v.childNodes), F[v.childNodes.length].nodeType
        } catch (eb) {
            I = {
                apply: F.length ? function (a, b) {
                    H.apply(a, J.call(b))
                } : function (a, b) {
                    var c = a.length, d = 0;
                    while (a[c++] = b[d++]);
                    a.length = c - 1
                }
            }
        }
        function fb(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w, x;
            if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], !a || "string" != typeof a)return d;
            if (1 !== (k = b.nodeType) && 9 !== k)return [];
            if (p && !e) {
                if (f = _.exec(a))if (j = f[1]) {
                    if (9 === k) {
                        if (h = b.getElementById(j), !h || !h.parentNode)return d;
                        if (h.id === j)return d.push(h), d
                    } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j)return d.push(h), d
                } else {
                    if (f[2])return I.apply(d, b.getElementsByTagName(a)), d;
                    if ((j = f[3]) && c.getElementsByClassName && b.getElementsByClassName)return I.apply(d, b.getElementsByClassName(j)), d
                }
                if (c.qsa && (!q || !q.test(a))) {
                    if (s = r = u, w = b, x = 9 === k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
                        o = g(a), (r = b.getAttribute("id")) ? s = r.replace(bb, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length;
                        while (l--)o[l] = s + qb(o[l]);
                        w = ab.test(a) && ob(b.parentNode) || b, x = o.join(",")
                    }
                    if (x)try {
                        return I.apply(d, w.querySelectorAll(x)), d
                    } catch (y) {
                    } finally {
                        r || b.removeAttribute("id")
                    }
                }
            }
            return i(a.replace(R, "$1"), b, d, e)
        }

        function gb() {
            var a = [];

            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }

            return b
        }

        function hb(a) {
            return a[u] = !0, a
        }

        function ib(a) {
            var b = n.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function jb(a, b) {
            var c = a.split("|"), e = a.length;
            while (e--)d.attrHandle[c[e]] = b
        }

        function kb(a, b) {
            var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || D) - (~a.sourceIndex || D);
            if (d)return d;
            if (c)while (c = c.nextSibling)if (c === b)return -1;
            return a ? 1 : -1
        }

        function lb(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function mb(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function nb(a) {
            return hb(function (b) {
                return b = +b, hb(function (c, d) {
                    var e, f = a([], c.length, b), g = f.length;
                    while (g--)c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function ob(a) {
            return a && typeof a.getElementsByTagName !== C && a
        }

        c = fb.support = {}, f = fb.isXML = function (a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, m = fb.setDocument = function (a) {
            var b, e = a ? a.ownerDocument || a : v, g = e.defaultView;
            return e !== n && 9 === e.nodeType && e.documentElement ? (n = e, o = e.documentElement, p = !f(e), g && g !== g.top && (g.addEventListener ? g.addEventListener("unload", function () {
                m()
            }, !1) : g.attachEvent && g.attachEvent("onunload", function () {
                m()
            })), c.attributes = ib(function (a) {
                return a.className = "i", !a.getAttribute("className")
            }), c.getElementsByTagName = ib(function (a) {
                return a.appendChild(e.createComment("")), !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = $.test(e.getElementsByClassName) && ib(function (a) {
                return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 2 === a.getElementsByClassName("i").length
            }), c.getById = ib(function (a) {
                return o.appendChild(a).id = u, !e.getElementsByName || !e.getElementsByName(u).length
            }), c.getById ? (d.find.ID = function (a, b) {
                if (typeof b.getElementById !== C && p) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }, d.filter.ID = function (a) {
                var b = a.replace(cb, db);
                return function (a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete d.find.ID, d.filter.ID = function (a) {
                var b = a.replace(cb, db);
                return function (a) {
                    var c = typeof a.getAttributeNode !== C && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
                return typeof b.getElementsByTagName !== C ? b.getElementsByTagName(a) : void 0
            } : function (a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++])1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
                return typeof b.getElementsByClassName !== C && p ? b.getElementsByClassName(a) : void 0
            }, r = [], q = [], (c.qsa = $.test(e.querySelectorAll)) && (ib(function (a) {
                a.innerHTML = "<select msallowclip=''><option selected=''></option></select>", a.querySelectorAll("[msallowclip^='']").length && q.push("[*^$]=" + M + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + M + "*(?:value|" + L + ")"), a.querySelectorAll(":checked").length || q.push(":checked")
            }), ib(function (a) {
                var b = e.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + M + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
            })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ib(function (a) {
                c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", Q)
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function (a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function (a, b) {
                if (b)while (b = b.parentNode)if (b === a)return !0;
                return !1
            }, B = b ? function (a, b) {
                if (a === b)return l = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === e || a.ownerDocument === v && t(v, a) ? -1 : b === e || b.ownerDocument === v && t(v, b) ? 1 : k ? K.call(k, a) - K.call(k, b) : 0 : 4 & d ? -1 : 1)
            } : function (a, b) {
                if (a === b)return l = !0, 0;
                var c, d = 0, f = a.parentNode, g = b.parentNode, h = [a], i = [b];
                if (!f || !g)return a === e ? -1 : b === e ? 1 : f ? -1 : g ? 1 : k ? K.call(k, a) - K.call(k, b) : 0;
                if (f === g)return kb(a, b);
                c = a;
                while (c = c.parentNode)h.unshift(c);
                c = b;
                while (c = c.parentNode)i.unshift(c);
                while (h[d] === i[d])d++;
                return d ? kb(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0
            }, e) : n
        }, fb.matches = function (a, b) {
            return fb(a, null, null, b)
        }, fb.matchesSelector = function (a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b)))try {
                var d = s.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType)return d
            } catch (e) {
            }
            return fb(b, n, null, [a]).length > 0
        }, fb.contains = function (a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b)
        }, fb.attr = function (a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()], f = e && E.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, fb.error = function (a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, fb.uniqueSort = function (a) {
            var b, d = [], e = 0, f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++])b === a[f] && (e = d.push(f));
                while (e--)a.splice(d[e], 1)
            }
            return k = null, a
        }, e = fb.getText = function (a) {
            var b, c = "", d = 0, f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent)return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling)c += e(a)
                } else if (3 === f || 4 === f)return a.nodeValue
            } else while (b = a[d++])c += e(b);
            return c
        }, d = fb.selectors = {
            cacheLength: 50,
            createPseudo: hb,
            match: X,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (a) {
                    return a[1] = a[1].replace(cb, db), a[3] = (a[3] || a[4] || a[5] || "").replace(cb, db), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                }, CHILD: function (a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fb.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fb.error(a[0]), a
                }, PSEUDO: function (a) {
                    var b, c = !a[6] && a[2];
                    return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function (a) {
                    var b = a.replace(cb, db).toLowerCase();
                    return "*" === a ? function () {
                        return !0
                    } : function (a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                }, CLASS: function (a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + M + ")" + a + "(" + M + "|$)")) && y(a, function (a) {
                            return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== C && a.getAttribute("class") || "")
                        })
                }, ATTR: function (a, b, c) {
                    return function (d) {
                        var e = fb.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                }, CHILD: function (a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b;
                    return 1 === d && 0 === e ? function (a) {
                        return !!a.parentNode
                    } : function (b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h;
                        if (q) {
                            if (f) {
                                while (p) {
                                    l = b;
                                    while (l = l[p])if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType)return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n];
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())if (1 === l.nodeType && ++m && l === b) {
                                    k[a] = [w, n, m];
                                    break
                                }
                            } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w)m = j[1]; else while (l = ++n && l && l[p] || (m = n = 0) || o.pop())if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b))break;
                            return m -= e, m === d || m % d === 0 && m / d >= 0
                        }
                    }
                }, PSEUDO: function (a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fb.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? hb(function (a, c) {
                        var d, f = e(a, b), g = f.length;
                        while (g--)d = K.call(a, f[g]), a[d] = !(c[d] = f[g])
                    }) : function (a) {
                        return e(a, 0, c)
                    }) : e
                }
            },
            pseudos: {
                not: hb(function (a) {
                    var b = [], c = [], d = h(a.replace(R, "$1"));
                    return d[u] ? hb(function (a, b, c, e) {
                        var f, g = d(a, null, e, []), h = a.length;
                        while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function (a, e, f) {
                        return b[0] = a, d(b, null, f, c), !c.pop()
                    }
                }), has: hb(function (a) {
                    return function (b) {
                        return fb(a, b).length > 0
                    }
                }), contains: hb(function (a) {
                    return function (b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                    }
                }), lang: hb(function (a) {
                    return W.test(a || "") || fb.error("unsupported lang: " + a), a = a.replace(cb, db).toLowerCase(), function (b) {
                        var c;
                        do if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1
                    }
                }), target: function (b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                }, root: function (a) {
                    return a === o
                }, focus: function (a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                }, enabled: function (a) {
                    return a.disabled === !1
                }, disabled: function (a) {
                    return a.disabled === !0
                }, checked: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                }, selected: function (a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                }, empty: function (a) {
                    for (a = a.firstChild; a; a = a.nextSibling)if (a.nodeType < 6)return !1;
                    return !0
                }, parent: function (a) {
                    return !d.pseudos.empty(a)
                }, header: function (a) {
                    return Z.test(a.nodeName)
                }, input: function (a) {
                    return Y.test(a.nodeName)
                }, button: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                }, text: function (a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                }, first: nb(function () {
                    return [0]
                }), last: nb(function (a, b) {
                    return [b - 1]
                }), eq: nb(function (a, b, c) {
                    return [0 > c ? c + b : c]
                }), even: nb(function (a, b) {
                    for (var c = 0; b > c; c += 2)a.push(c);
                    return a
                }), odd: nb(function (a, b) {
                    for (var c = 1; b > c; c += 2)a.push(c);
                    return a
                }), lt: nb(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;)a.push(d);
                    return a
                }), gt: nb(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;)a.push(d);
                    return a
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})d.pseudos[b] = lb(b);
        for (b in{submit: !0, reset: !0})d.pseudos[b] = mb(b);
        function pb() {
        }

        pb.prototype = d.filters = d.pseudos, d.setFilters = new pb, g = fb.tokenize = function (a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k)return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(R, " ")
                }), h = h.slice(c.length));
                for (g in d.filter)!(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c)break
            }
            return b ? h.length : h ? fb.error(a) : z(a, i).slice(0)
        };
        function qb(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++)d += a[b].value;
            return d
        }

        function rb(a, b, c) {
            var d = b.dir, e = c && "parentNode" === d, f = x++;
            return b.first ? function (b, c, f) {
                while (b = b[d])if (1 === b.nodeType || e)return a(b, c, f)
            } : function (b, c, g) {
                var h, i, j = [w, f];
                if (g) {
                    while (b = b[d])if ((1 === b.nodeType || e) && a(b, c, g))return !0
                } else while (b = b[d])if (1 === b.nodeType || e) {
                    if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f)return j[2] = h[2];
                    if (i[d] = j, j[2] = a(b, c, g))return !0
                }
            }
        }

        function sb(a) {
            return a.length > 1 ? function (b, c, d) {
                var e = a.length;
                while (e--)if (!a[e](b, c, d))return !1;
                return !0
            } : a[0]
        }

        function tb(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++)fb(a, b[d], c);
            return c
        }

        function ub(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g
        }

        function vb(a, b, c, d, e, f) {
            return d && !d[u] && (d = vb(d)), e && !e[u] && (e = vb(e, f)), hb(function (f, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, p = f || tb(b || "*", h.nodeType ? [h] : h, []), q = !a || !f && b ? p : ub(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = ub(r, n), d(j, [], h, i), k = j.length;
                    while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)(l = r[k]) && (j = e ? K.call(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = ub(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : I.apply(g, r)
            })
        }

        function wb(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = rb(function (a) {
                return a === b
            }, h, !0), l = rb(function (a) {
                return K.call(b, a) > -1
            }, h, !0), m = [function (a, c, d) {
                return !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d))
            }]; f > i; i++)if (c = d.relative[a[i].type])m = [rb(sb(m), c)]; else {
                if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                    for (e = ++i; f > e; e++)if (d.relative[a[e].type])break;
                    return vb(i > 1 && sb(m), i > 1 && qb(a.slice(0, i - 1).concat({value: " " === a[i - 2].type ? "*" : ""})).replace(R, "$1"), c, e > i && wb(a.slice(i, e)), f > e && wb(a = a.slice(e)), f > e && qb(a))
                }
                m.push(c)
            }
            return sb(m)
        }

        function xb(a, b) {
            var c = b.length > 0, e = a.length > 0, f = function (f, g, h, i, k) {
                var l, m, o, p = 0, q = "0", r = f && [], s = [], t = j, u = f || e && d.find.TAG("*", k), v = w += null == t ? 1 : Math.random() || .1, x = u.length;
                for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
                    if (e && l) {
                        m = 0;
                        while (o = a[m++])if (o(l, g, h)) {
                            i.push(l);
                            break
                        }
                        k && (w = v)
                    }
                    c && ((l = !o && l) && p--, f && r.push(l))
                }
                if (p += q, c && q !== p) {
                    m = 0;
                    while (o = b[m++])o(r, s, g, h);
                    if (f) {
                        if (p > 0)while (q--)r[q] || s[q] || (s[q] = G.call(i));
                        s = ub(s)
                    }
                    I.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && fb.uniqueSort(i)
                }
                return k && (w = v, j = t), r
            };
            return c ? hb(f) : f
        }

        return h = fb.compile = function (a, b) {
            var c, d = [], e = [], f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--)f = wb(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, xb(e, d)), f.selector = a
            }
            return f
        }, i = fb.select = function (a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a, o = !f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(cb, db), b) || [])[0], !b)return e;
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length)
                }
                i = X.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i], d.relative[l = k.type])break;
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(cb, db), ab.test(j[0].type) && ob(b.parentNode) || b))) {
                        if (j.splice(i, 1), a = f.length && qb(j), !a)return I.apply(e, f), e;
                        break
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, ab.test(a) && ob(b.parentNode) || b), e
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ib(function (a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"))
        }), ib(function (a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || jb("type|href|height|width", function (a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && ib(function (a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || jb("value", function (a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), ib(function (a) {
            return null == a.getAttribute("disabled")
        }) || jb(L, function (a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), fb
    }(a);
    m.find = s, m.expr = s.selectors, m.expr[":"] = m.expr.pseudos, m.unique = s.uniqueSort, m.text = s.getText, m.isXMLDoc = s.isXML, m.contains = s.contains;
    var t = m.expr.match.needsContext, u = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, v = /^.[^:#\[\.,]*$/;

    function w(a, b, c) {
        if (m.isFunction(b))return m.grep(a, function (a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType)return m.grep(a, function (a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (v.test(b))return m.filter(b, a, c);
            b = m.filter(b, a)
        }
        return m.grep(a, function (a) {
            return m.inArray(a, b) >= 0 !== c
        })
    }

    m.filter = function (a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? m.find.matchesSelector(d, a) ? [d] : [] : m.find.matches(a, m.grep(b, function (a) {
            return 1 === a.nodeType
        }))
    }, m.fn.extend({
        find: function (a) {
            var b, c = [], d = this, e = d.length;
            if ("string" != typeof a)return this.pushStack(m(a).filter(function () {
                for (b = 0; e > b; b++)if (m.contains(d[b], this))return !0
            }));
            for (b = 0; e > b; b++)m.find(a, d[b], c);
            return c = this.pushStack(e > 1 ? m.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
        }, filter: function (a) {
            return this.pushStack(w(this, a || [], !1))
        }, not: function (a) {
            return this.pushStack(w(this, a || [], !0))
        }, is: function (a) {
            return !!w(this, "string" == typeof a && t.test(a) ? m(a) : a || [], !1).length
        }
    });
    var x, y = a.document, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, A = m.fn.init = function (a, b) {
        var c, d;
        if (!a)return this;
        if ("string" == typeof a) {
            if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b)return !b || b.jquery ? (b || x).find(a) : this.constructor(b).find(a);
            if (c[1]) {
                if (b = b instanceof m ? b[0] : b, m.merge(this, m.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : y, !0)), u.test(c[1]) && m.isPlainObject(b))for (c in b)m.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                return this
            }
            if (d = y.getElementById(c[2]), d && d.parentNode) {
                if (d.id !== c[2])return x.find(a);
                this.length = 1, this[0] = d
            }
            return this.context = y, this.selector = a, this
        }
        return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : m.isFunction(a) ? "undefined" != typeof x.ready ? x.ready(a) : a(m) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), m.makeArray(a, this))
    };
    A.prototype = m.fn, x = m(y);
    var B = /^(?:parents|prev(?:Until|All))/, C = {children: !0, contents: !0, next: !0, prev: !0};
    m.extend({
        dir: function (a, b, c) {
            var d = [], e = a[b];
            while (e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !m(e).is(c)))1 === e.nodeType && d.push(e), e = e[b];
            return d
        }, sibling: function (a, b) {
            for (var c = []; a; a = a.nextSibling)1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    }), m.fn.extend({
        has: function (a) {
            var b, c = m(a, this), d = c.length;
            return this.filter(function () {
                for (b = 0; d > b; b++)if (m.contains(this, c[b]))return !0
            })
        }, closest: function (a, b) {
            for (var c, d = 0, e = this.length, f = [], g = t.test(a) || "string" != typeof a ? m(a, b || this.context) : 0; e > d; d++)for (c = this[d]; c && c !== b; c = c.parentNode)if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && m.find.matchesSelector(c, a))) {
                f.push(c);
                break
            }
            return this.pushStack(f.length > 1 ? m.unique(f) : f)
        }, index: function (a) {
            return a ? "string" == typeof a ? m.inArray(this[0], m(a)) : m.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (a, b) {
            return this.pushStack(m.unique(m.merge(this.get(), m(a, b))))
        }, addBack: function (a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });
    function D(a, b) {
        do a = a[b]; while (a && 1 !== a.nodeType);
        return a
    }

    m.each({
        parent: function (a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        }, parents: function (a) {
            return m.dir(a, "parentNode")
        }, parentsUntil: function (a, b, c) {
            return m.dir(a, "parentNode", c)
        }, next: function (a) {
            return D(a, "nextSibling")
        }, prev: function (a) {
            return D(a, "previousSibling")
        }, nextAll: function (a) {
            return m.dir(a, "nextSibling")
        }, prevAll: function (a) {
            return m.dir(a, "previousSibling")
        }, nextUntil: function (a, b, c) {
            return m.dir(a, "nextSibling", c)
        }, prevUntil: function (a, b, c) {
            return m.dir(a, "previousSibling", c)
        }, siblings: function (a) {
            return m.sibling((a.parentNode || {}).firstChild, a)
        }, children: function (a) {
            return m.sibling(a.firstChild)
        }, contents: function (a) {
            return m.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : m.merge([], a.childNodes)
        }
    }, function (a, b) {
        m.fn[a] = function (c, d) {
            var e = m.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = m.filter(d, e)), this.length > 1 && (C[a] || (e = m.unique(e)), B.test(a) && (e = e.reverse())), this.pushStack(e)
        }
    });
    var E = /\S+/g, F = {};

    function G(a) {
        var b = F[a] = {};
        return m.each(a.match(E) || [], function (a, c) {
            b[c] = !0
        }), b
    }

    m.Callbacks = function (a) {
        a = "string" == typeof a ? F[a] || G(a) : m.extend({}, a);
        var b, c, d, e, f, g, h = [], i = !a.once && [], j = function (l) {
            for (c = a.memory && l, d = !0, f = g || 0, g = 0, e = h.length, b = !0; h && e > f; f++)if (h[f].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
                c = !1;
                break
            }
            b = !1, h && (i ? i.length && j(i.shift()) : c ? h = [] : k.disable())
        }, k = {
            add: function () {
                if (h) {
                    var d = h.length;
                    !function f(b) {
                        m.each(b, function (b, c) {
                            var d = m.type(c);
                            "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && f(c)
                        })
                    }(arguments), b ? e = h.length : c && (g = d, j(c))
                }
                return this
            }, remove: function () {
                return h && m.each(arguments, function (a, c) {
                    var d;
                    while ((d = m.inArray(c, h, d)) > -1)h.splice(d, 1), b && (e >= d && e--, f >= d && f--)
                }), this
            }, has: function (a) {
                return a ? m.inArray(a, h) > -1 : !(!h || !h.length)
            }, empty: function () {
                return h = [], e = 0, this
            }, disable: function () {
                return h = i = c = void 0, this
            }, disabled: function () {
                return !h
            }, lock: function () {
                return i = void 0, c || k.disable(), this
            }, locked: function () {
                return !i
            }, fireWith: function (a, c) {
                return !h || d && !i || (c = c || [], c = [a, c.slice ? c.slice() : c], b ? i.push(c) : j(c)), this
            }, fire: function () {
                return k.fireWith(this, arguments), this
            }, fired: function () {
                return !!d
            }
        };
        return k
    }, m.extend({
        Deferred: function (a) {
            var b = [["resolve", "done", m.Callbacks("once memory"), "resolved"], ["reject", "fail", m.Callbacks("once memory"), "rejected"], ["notify", "progress", m.Callbacks("memory")]], c = "pending", d = {
                state: function () {
                    return c
                }, always: function () {
                    return e.done(arguments).fail(arguments), this
                }, then: function () {
                    var a = arguments;
                    return m.Deferred(function (c) {
                        m.each(b, function (b, f) {
                            var g = m.isFunction(a[b]) && a[b];
                            e[f[1]](function () {
                                var a = g && g.apply(this, arguments);
                                a && m.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                            })
                        }), a = null
                    }).promise()
                }, promise: function (a) {
                    return null != a ? m.extend(a, d) : d
                }
            }, e = {};
            return d.pipe = d.then, m.each(b, function (a, f) {
                var g = f[2], h = f[3];
                d[f[1]] = g.add, h && g.add(function () {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        }, when: function (a) {
            var b = 0, c = d.call(arguments), e = c.length, f = 1 !== e || a && m.isFunction(a.promise) ? e : 0, g = 1 === f ? a : m.Deferred(), h = function (a, b, c) {
                return function (e) {
                    b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                }
            }, i, j, k;
            if (e > 1)for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++)c[b] && m.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
            return f || g.resolveWith(k, c), g.promise()
        }
    });
    var H;
    m.fn.ready = function (a) {
        return m.ready.promise().done(a), this
    }, m.extend({
        isReady: !1, readyWait: 1, holdReady: function (a) {
            a ? m.readyWait++ : m.ready(!0)
        }, ready: function (a) {
            if (a === !0 ? !--m.readyWait : !m.isReady) {
                if (!y.body)return setTimeout(m.ready);
                m.isReady = !0, a !== !0 && --m.readyWait > 0 || (H.resolveWith(y, [m]), m.fn.triggerHandler && (m(y).triggerHandler("ready"), m(y).off("ready")))
            }
        }
    });
    function I() {
        y.addEventListener ? (y.removeEventListener("DOMContentLoaded", J, !1), a.removeEventListener("load", J, !1)) : (y.detachEvent("onreadystatechange", J), a.detachEvent("onload", J))
    }

    function J() {
        (y.addEventListener || "load" === event.type || "complete" === y.readyState) && (I(), m.ready())
    }

    m.ready.promise = function (b) {
        if (!H)if (H = m.Deferred(), "complete" === y.readyState)setTimeout(m.ready); else if (y.addEventListener)y.addEventListener("DOMContentLoaded", J, !1), a.addEventListener("load", J, !1); else {
            y.attachEvent("onreadystatechange", J), a.attachEvent("onload", J);
            var c = !1;
            try {
                c = null == a.frameElement && y.documentElement
            } catch (d) {
            }
            c && c.doScroll && !function e() {
                if (!m.isReady) {
                    try {
                        c.doScroll("left")
                    } catch (a) {
                        return setTimeout(e, 50)
                    }
                    I(), m.ready()
                }
            }()
        }
        return H.promise(b)
    };
    var K = "undefined", L;
    for (L in m(k))break;
    k.ownLast = "0" !== L, k.inlineBlockNeedsLayout = !1, m(function () {
        var a, b, c, d;
        c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== K && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", k.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(d))
    }), function () {
        var a = y.createElement("div");
        if (null == k.deleteExpando) {
            k.deleteExpando = !0;
            try {
                delete a.test
            } catch (b) {
                k.deleteExpando = !1
            }
        }
        a = null
    }(), m.acceptData = function (a) {
        var b = m.noData[(a.nodeName + " ").toLowerCase()], c = +a.nodeType || 1;
        return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
    };
    var M = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, N = /([A-Z])/g;

    function O(a, b, c) {
        if (void 0 === c && 1 === a.nodeType) {
            var d = "data-" + b.replace(N, "-$1").toLowerCase();
            if (c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : M.test(c) ? m.parseJSON(c) : c
                } catch (e) {
                }
                m.data(a, b, c)
            } else c = void 0
        }
        return c
    }

    function P(a) {
        var b;
        for (b in a)if (("data" !== b || !m.isEmptyObject(a[b])) && "toJSON" !== b)return !1;
        return !0
    }

    function Q(a, b, d, e) {
        if (m.acceptData(a)) {
            var f, g, h = m.expando, i = a.nodeType, j = i ? m.cache : a, k = i ? a[h] : a[h] && h;
            if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b)return k || (k = i ? a[h] = c.pop() || m.guid++ : h), j[k] || (j[k] = i ? {} : {toJSON: m.noop}), ("object" == typeof b || "function" == typeof b) && (e ? j[k] = m.extend(j[k], b) : j[k].data = m.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[m.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[m.camelCase(b)])) : f = g, f
        }
    }

    function R(a, b, c) {
        if (m.acceptData(a)) {
            var d, e, f = a.nodeType, g = f ? m.cache : a, h = f ? a[m.expando] : m.expando;
            if (g[h]) {
                if (b && (d = c ? g[h] : g[h].data)) {
                    m.isArray(b) ? b = b.concat(m.map(b, m.camelCase)) : b in d ? b = [b] : (b = m.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
                    while (e--)delete d[b[e]];
                    if (c ? !P(d) : !m.isEmptyObject(d))return
                }
                (c || (delete g[h].data, P(g[h]))) && (f ? m.cleanData([a], !0) : k.deleteExpando || g != g.window ? delete g[h] : g[h] = null)
            }
        }
    }

    m.extend({
        cache: {},
        noData: {"applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},
        hasData: function (a) {
            return a = a.nodeType ? m.cache[a[m.expando]] : a[m.expando], !!a && !P(a)
        },
        data: function (a, b, c) {
            return Q(a, b, c)
        },
        removeData: function (a, b) {
            return R(a, b)
        },
        _data: function (a, b, c) {
            return Q(a, b, c, !0)
        },
        _removeData: function (a, b) {
            return R(a, b, !0)
        }
    }), m.fn.extend({
        data: function (a, b) {
            var c, d, e, f = this[0], g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = m.data(f), 1 === f.nodeType && !m._data(f, "parsedAttrs"))) {
                    c = g.length;
                    while (c--)g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = m.camelCase(d.slice(5)), O(f, d, e[d])));
                    m._data(f, "parsedAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function () {
                m.data(this, a)
            }) : arguments.length > 1 ? this.each(function () {
                m.data(this, a, b)
            }) : f ? O(f, a, m.data(f, a)) : void 0
        }, removeData: function (a) {
            return this.each(function () {
                m.removeData(this, a)
            })
        }
    }), m.extend({
        queue: function (a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = m._data(a, b), c && (!d || m.isArray(c) ? d = m._data(a, b, m.makeArray(c)) : d.push(c)), d || []) : void 0
        }, dequeue: function (a, b) {
            b = b || "fx";
            var c = m.queue(a, b), d = c.length, e = c.shift(), f = m._queueHooks(a, b), g = function () {
                m.dequeue(a, b)
            };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        }, _queueHooks: function (a, b) {
            var c = b + "queueHooks";
            return m._data(a, c) || m._data(a, c, {
                    empty: m.Callbacks("once memory").add(function () {
                        m._removeData(a, b + "queue"), m._removeData(a, c)
                    })
                })
        }
    }), m.fn.extend({
        queue: function (a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? m.queue(this[0], a) : void 0 === b ? this : this.each(function () {
                var c = m.queue(this, a, b);
                m._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && m.dequeue(this, a)
            })
        }, dequeue: function (a) {
            return this.each(function () {
                m.dequeue(this, a)
            })
        }, clearQueue: function (a) {
            return this.queue(a || "fx", [])
        }, promise: function (a, b) {
            var c, d = 1, e = m.Deferred(), f = this, g = this.length, h = function () {
                --d || e.resolveWith(f, [f])
            };
            "string" != typeof a && (b = a, a = void 0), a = a || "fx";
            while (g--)c = m._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, T = ["Top", "Right", "Bottom", "Left"], U = function (a, b) {
        return a = b || a, "none" === m.css(a, "display") || !m.contains(a.ownerDocument, a)
    }, V = m.access = function (a, b, c, d, e, f, g) {
        var h = 0, i = a.length, j = null == c;
        if ("object" === m.type(c)) {
            e = !0;
            for (h in c)m.access(a, b, h, c[h], !0, f, g)
        } else if (void 0 !== d && (e = !0, m.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
                return j.call(m(a), c)
            })), b))for (; i > h; h++)b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    }, W = /^(?:checkbox|radio)$/i;
    !function () {
        var a = y.createElement("input"), b = y.createElement("div"), c = y.createDocumentFragment();
        if (b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", k.leadingWhitespace = 3 === b.firstChild.nodeType, k.tbody = !b.getElementsByTagName("tbody").length, k.htmlSerialize = !!b.getElementsByTagName("link").length, k.html5Clone = "<:nav></:nav>" !== y.createElement("nav").cloneNode(!0).outerHTML, a.type = "checkbox", a.checked = !0, c.appendChild(a), k.appendChecked = a.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue, c.appendChild(b), b.innerHTML = "<input type='radio' checked='checked' name='t'/>", k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, k.noCloneEvent = !0, b.attachEvent && (b.attachEvent("onclick", function () {
                k.noCloneEvent = !1
            }), b.cloneNode(!0).click()), null == k.deleteExpando) {
            k.deleteExpando = !0;
            try {
                delete b.test
            } catch (d) {
                k.deleteExpando = !1
            }
        }
    }(), function () {
        var b, c, d = y.createElement("div");
        for (b in{
            submit: !0,
            change: !0,
            focusin: !0
        })c = "on" + b, (k[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"), k[b + "Bubbles"] = d.attributes[c].expando === !1);
        d = null
    }();
    var X = /^(?:input|select|textarea)$/i, Y = /^key/, Z = /^(?:mouse|pointer|contextmenu)|click/, $ = /^(?:focusinfocus|focusoutblur)$/, _ = /^([^.]*)(?:\.(.+)|)$/;

    function ab() {
        return !0
    }

    function bb() {
        return !1
    }

    function cb() {
        try {
            return y.activeElement
        } catch (a) {
        }
    }

    m.event = {
        global: {},
        add: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, n, o, p, q, r = m._data(a);
            if (r) {
                c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = m.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function (a) {
                    return typeof m === K || a && m.event.triggered === a.type ? void 0 : m.event.dispatch.apply(k.elem, arguments)
                }, k.elem = a), b = (b || "").match(E) || [""], h = b.length;
                while (h--)f = _.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = m.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = m.event.special[o] || {}, l = m.extend({
                    type: o,
                    origType: q,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && m.expr.match.needsContext.test(e),
                    namespace: p.join(".")
                }, i), (n = g[o]) || (n = g[o] = [], n.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? n.splice(n.delegateCount++, 0, l) : n.push(l), m.event.global[o] = !0);
                a = null
            }
        },
        remove: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, n, o, p, q, r = m.hasData(a) && m._data(a);
            if (r && (k = r.events)) {
                b = (b || "").match(E) || [""], j = b.length;
                while (j--)if (h = _.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                    l = m.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, n = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = n.length;
                    while (f--)g = n[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (n.splice(f, 1), g.selector && n.delegateCount--, l.remove && l.remove.call(a, g));
                    i && !n.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || m.removeEvent(a, o, r.handle), delete k[o])
                } else for (o in k)m.event.remove(a, o + b[j], c, d, !0);
                m.isEmptyObject(k) && (delete r.handle, m._removeData(a, "events"))
            }
        },
        trigger: function (b, c, d, e) {
            var f, g, h, i, k, l, n, o = [d || y], p = j.call(b, "type") ? b.type : b, q = j.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = l = d = d || y, 3 !== d.nodeType && 8 !== d.nodeType && !$.test(p + m.event.triggered) && (p.indexOf(".") >= 0 && (q = p.split("."), p = q.shift(), q.sort()), g = p.indexOf(":") < 0 && "on" + p, b = b[m.expando] ? b : new m.Event(p, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = q.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : m.makeArray(c, [b]), k = m.event.special[p] || {}, e || !k.trigger || k.trigger.apply(d, c) !== !1)) {
                if (!e && !k.noBubble && !m.isWindow(d)) {
                    for (i = k.delegateType || p, $.test(i + p) || (h = h.parentNode); h; h = h.parentNode)o.push(h), l = h;
                    l === (d.ownerDocument || y) && o.push(l.defaultView || l.parentWindow || a)
                }
                n = 0;
                while ((h = o[n++]) && !b.isPropagationStopped())b.type = n > 1 ? i : k.bindType || p, f = (m._data(h, "events") || {})[b.type] && m._data(h, "handle"), f && f.apply(h, c), f = g && h[g], f && f.apply && m.acceptData(h) && (b.result = f.apply(h, c), b.result === !1 && b.preventDefault());
                if (b.type = p, !e && !b.isDefaultPrevented() && (!k._default || k._default.apply(o.pop(), c) === !1) && m.acceptData(d) && g && d[p] && !m.isWindow(d)) {
                    l = d[g], l && (d[g] = null), m.event.triggered = p;
                    try {
                        d[p]()
                    } catch (r) {
                    }
                    m.event.triggered = void 0, l && (d[g] = l)
                }
                return b.result
            }
        },
        dispatch: function (a) {
            a = m.event.fix(a);
            var b, c, e, f, g, h = [], i = d.call(arguments), j = (m._data(this, "events") || {})[a.type] || [], k = m.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = m.event.handlers.call(this, a, j), b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem, g = 0;
                    while ((e = f.handlers[g++]) && !a.isImmediatePropagationStopped())(!a.namespace_re || a.namespace_re.test(e.namespace)) && (a.handleObj = e, a.data = e.data, c = ((m.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, i), void 0 !== c && (a.result = c) === !1 && (a.preventDefault(), a.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        },
        handlers: function (a, b) {
            var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type))for (; i != this; i = i.parentNode || this)if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                for (e = [], f = 0; h > f; f++)d = b[f], c = d.selector + " ", void 0 === e[c] && (e[c] = d.needsContext ? m(c, this).index(i) >= 0 : m.find(c, this, null, [i]).length), e[c] && e.push(d);
                e.length && g.push({elem: i, handlers: e})
            }
            return h < b.length && g.push({elem: this, handlers: b.slice(h)}), g
        },
        fix: function (a) {
            if (a[m.expando])return a;
            var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
            g || (this.fixHooks[e] = g = Z.test(e) ? this.mouseHooks : Y.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new m.Event(f), b = d.length;
            while (b--)c = d[b], a[c] = f[c];
            return a.target || (a.target = f.srcElement || y), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, g.filter ? g.filter(a, f) : a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (a, b) {
                var c, d, e, f = b.button, g = b.fromElement;
                return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || y, e = d.documentElement, c = d.body, a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)), !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
            }
        },
        special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    if (this !== cb() && this.focus)try {
                        return this.focus(), !1
                    } catch (a) {
                    }
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    return this === cb() && this.blur ? (this.blur(), !1) : void 0
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    return m.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                }, _default: function (a) {
                    return m.nodeName(a.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function (a, b, c, d) {
            var e = m.extend(new m.Event, c, {type: a, isSimulated: !0, originalEvent: {}});
            d ? m.event.trigger(e, null, b) : m.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, m.removeEvent = y.removeEventListener ? function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    } : function (a, b, c) {
        var d = "on" + b;
        a.detachEvent && (typeof a[d] === K && (a[d] = null), a.detachEvent(d, c))
    }, m.Event = function (a, b) {
        return this instanceof m.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ab : bb) : this.type = a, b && m.extend(this, b), this.timeStamp = a && a.timeStamp || m.now(), void(this[m.expando] = !0)) : new m.Event(a, b)
    }, m.Event.prototype = {
        isDefaultPrevented: bb,
        isPropagationStopped: bb,
        isImmediatePropagationStopped: bb,
        preventDefault: function () {
            var a = this.originalEvent;
            this.isDefaultPrevented = ab, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function () {
            var a = this.originalEvent;
            this.isPropagationStopped = ab, a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = ab, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, m.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (a, b) {
        m.event.special[a] = {
            delegateType: b, bindType: b, handle: function (a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                return (!e || e !== d && !m.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), k.submitBubbles || (m.event.special.submit = {
        setup: function () {
            return m.nodeName(this, "form") ? !1 : void m.event.add(this, "click._submit keypress._submit", function (a) {
                var b = a.target, c = m.nodeName(b, "input") || m.nodeName(b, "button") ? b.form : void 0;
                c && !m._data(c, "submitBubbles") && (m.event.add(c, "submit._submit", function (a) {
                    a._submit_bubble = !0
                }), m._data(c, "submitBubbles", !0))
            })
        }, postDispatch: function (a) {
            a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && m.event.simulate("submit", this.parentNode, a, !0))
        }, teardown: function () {
            return m.nodeName(this, "form") ? !1 : void m.event.remove(this, "._submit")
        }
    }), k.changeBubbles || (m.event.special.change = {
        setup: function () {
            return X.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (m.event.add(this, "propertychange._change", function (a) {
                "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
            }), m.event.add(this, "click._change", function (a) {
                this._just_changed && !a.isTrigger && (this._just_changed = !1), m.event.simulate("change", this, a, !0)
            })), !1) : void m.event.add(this, "beforeactivate._change", function (a) {
                var b = a.target;
                X.test(b.nodeName) && !m._data(b, "changeBubbles") && (m.event.add(b, "change._change", function (a) {
                    !this.parentNode || a.isSimulated || a.isTrigger || m.event.simulate("change", this.parentNode, a, !0)
                }), m._data(b, "changeBubbles", !0))
            })
        }, handle: function (a) {
            var b = a.target;
            return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
        }, teardown: function () {
            return m.event.remove(this, "._change"), !X.test(this.nodeName)
        }
    }), k.focusinBubbles || m.each({focus: "focusin", blur: "focusout"}, function (a, b) {
        var c = function (a) {
            m.event.simulate(b, a.target, m.event.fix(a), !0)
        };
        m.event.special[b] = {
            setup: function () {
                var d = this.ownerDocument || this, e = m._data(d, b);
                e || d.addEventListener(a, c, !0), m._data(d, b, (e || 0) + 1)
            }, teardown: function () {
                var d = this.ownerDocument || this, e = m._data(d, b) - 1;
                e ? m._data(d, b, e) : (d.removeEventListener(a, c, !0), m._removeData(d, b))
            }
        }
    }), m.fn.extend({
        on: function (a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (f in a)this.on(f, b, c, a[f], e);
                return this
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1)d = bb; else if (!d)return this;
            return 1 === e && (g = d, d = function (a) {
                return m().off(a), g.apply(this, arguments)
            }, d.guid = g.guid || (g.guid = m.guid++)), this.each(function () {
                m.event.add(this, a, d, c, b)
            })
        }, one: function (a, b, c, d) {
            return this.on(a, b, c, d, 1)
        }, off: function (a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj)return d = a.handleObj, m(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a)this.off(e, b, a[e]);
                return this
            }
            return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = bb), this.each(function () {
                m.event.remove(this, a, c, b)
            })
        }, trigger: function (a, b) {
            return this.each(function () {
                m.event.trigger(a, b, this)
            })
        }, triggerHandler: function (a, b) {
            var c = this[0];
            return c ? m.event.trigger(a, b, c, !0) : void 0
        }
    });
    function db(a) {
        var b = eb.split("|"), c = a.createDocumentFragment();
        if (c.createElement)while (b.length)c.createElement(b.pop());
        return c
    }

    var eb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", fb = / jQuery\d+="(?:null|\d+)"/g, gb = new RegExp("<(?:" + eb + ")[\\s/>]", "i"), hb = /^\s+/, ib = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, jb = /<([\w:]+)/, kb = /<tbody/i, lb = /<|&#?\w+;/, mb = /<(?:script|style|link)/i, nb = /checked\s*(?:[^=]|=\s*.checked.)/i, ob = /^$|\/(?:java|ecma)script/i, pb = /^true\/(.*)/, qb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, rb = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: k.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    }, sb = db(y), tb = sb.appendChild(y.createElement("div"));
    rb.optgroup = rb.option, rb.tbody = rb.tfoot = rb.colgroup = rb.caption = rb.thead, rb.th = rb.td;
    function ub(a, b) {
        var c, d, e = 0, f = typeof a.getElementsByTagName !== K ? a.getElementsByTagName(b || "*") : typeof a.querySelectorAll !== K ? a.querySelectorAll(b || "*") : void 0;
        if (!f)for (f = [], c = a.childNodes || a; null != (d = c[e]); e++)!b || m.nodeName(d, b) ? f.push(d) : m.merge(f, ub(d, b));
        return void 0 === b || b && m.nodeName(a, b) ? m.merge([a], f) : f
    }

    function vb(a) {
        W.test(a.type) && (a.defaultChecked = a.checked)
    }

    function wb(a, b) {
        return m.nodeName(a, "table") && m.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function xb(a) {
        return a.type = (null !== m.find.attr(a, "type")) + "/" + a.type, a
    }

    function yb(a) {
        var b = pb.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function zb(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++)m._data(c, "globalEval", !b || m._data(b[d], "globalEval"))
    }

    function Ab(a, b) {
        if (1 === b.nodeType && m.hasData(a)) {
            var c, d, e, f = m._data(a), g = m._data(b, f), h = f.events;
            if (h) {
                delete g.handle, g.events = {};
                for (c in h)for (d = 0, e = h[c].length; e > d; d++)m.event.add(b, c, h[c][d])
            }
            g.data && (g.data = m.extend({}, g.data))
        }
    }

    function Bb(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(), !k.noCloneEvent && b[m.expando]) {
                e = m._data(b);
                for (d in e.events)m.removeEvent(b, d, e.handle);
                b.removeAttribute(m.expando)
            }
            "script" === c && b.text !== a.text ? (xb(b).text = a.text, yb(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), k.html5Clone && a.innerHTML && !m.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && W.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
        }
    }

    m.extend({
        clone: function (a, b, c) {
            var d, e, f, g, h, i = m.contains(a.ownerDocument, a);
            if (k.html5Clone || m.isXMLDoc(a) || !gb.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (tb.innerHTML = a.outerHTML, tb.removeChild(f = tb.firstChild)), !(k.noCloneEvent && k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || m.isXMLDoc(a)))for (d = ub(f), h = ub(a), g = 0; null != (e = h[g]); ++g)d[g] && Bb(e, d[g]);
            if (b)if (c)for (h = h || ub(a), d = d || ub(f), g = 0; null != (e = h[g]); g++)Ab(e, d[g]); else Ab(a, f);
            return d = ub(f, "script"), d.length > 0 && zb(d, !i && ub(a, "script")), d = h = e = null, f
        }, buildFragment: function (a, b, c, d) {
            for (var e, f, g, h, i, j, l, n = a.length, o = db(b), p = [], q = 0; n > q; q++)if (f = a[q], f || 0 === f)if ("object" === m.type(f))m.merge(p, f.nodeType ? [f] : f); else if (lb.test(f)) {
                h = h || o.appendChild(b.createElement("div")), i = (jb.exec(f) || ["", ""])[1].toLowerCase(), l = rb[i] || rb._default, h.innerHTML = l[1] + f.replace(ib, "<$1></$2>") + l[2], e = l[0];
                while (e--)h = h.lastChild;
                if (!k.leadingWhitespace && hb.test(f) && p.push(b.createTextNode(hb.exec(f)[0])), !k.tbody) {
                    f = "table" !== i || kb.test(f) ? "<table>" !== l[1] || kb.test(f) ? 0 : h : h.firstChild, e = f && f.childNodes.length;
                    while (e--)m.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j)
                }
                m.merge(p, h.childNodes), h.textContent = "";
                while (h.firstChild)h.removeChild(h.firstChild);
                h = o.lastChild
            } else p.push(b.createTextNode(f));
            h && o.removeChild(h), k.appendChecked || m.grep(ub(p, "input"), vb), q = 0;
            while (f = p[q++])if ((!d || -1 === m.inArray(f, d)) && (g = m.contains(f.ownerDocument, f), h = ub(o.appendChild(f), "script"), g && zb(h), c)) {
                e = 0;
                while (f = h[e++])ob.test(f.type || "") && c.push(f)
            }
            return h = null, o
        }, cleanData: function (a, b) {
            for (var d, e, f, g, h = 0, i = m.expando, j = m.cache, l = k.deleteExpando, n = m.event.special; null != (d = a[h]); h++)if ((b || m.acceptData(d)) && (f = d[i], g = f && j[f])) {
                if (g.events)for (e in g.events)n[e] ? m.event.remove(d, e) : m.removeEvent(d, e, g.handle);
                j[f] && (delete j[f], l ? delete d[i] : typeof d.removeAttribute !== K ? d.removeAttribute(i) : d[i] = null, c.push(f))
            }
        }
    }), m.fn.extend({
        text: function (a) {
            return V(this, function (a) {
                return void 0 === a ? m.text(this) : this.empty().append((this[0] && this[0].ownerDocument || y).createTextNode(a))
            }, null, a, arguments.length)
        }, append: function () {
            return this.domManip(arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = wb(this, a);
                    b.appendChild(a)
                }
            })
        }, prepend: function () {
            return this.domManip(arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = wb(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        }, before: function () {
            return this.domManip(arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        }, after: function () {
            return this.domManip(arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        }, remove: function (a, b) {
            for (var c, d = a ? m.filter(a, this) : this, e = 0; null != (c = d[e]); e++)b || 1 !== c.nodeType || m.cleanData(ub(c)), c.parentNode && (b && m.contains(c.ownerDocument, c) && zb(ub(c, "script")), c.parentNode.removeChild(c));
            return this
        }, empty: function () {
            for (var a, b = 0; null != (a = this[b]); b++) {
                1 === a.nodeType && m.cleanData(ub(a, !1));
                while (a.firstChild)a.removeChild(a.firstChild);
                a.options && m.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        }, clone: function (a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
                return m.clone(this, a, b)
            })
        }, html: function (a) {
            return V(this, function (a) {
                var b = this[0] || {}, c = 0, d = this.length;
                if (void 0 === a)return 1 === b.nodeType ? b.innerHTML.replace(fb, "") : void 0;
                if (!("string" != typeof a || mb.test(a) || !k.htmlSerialize && gb.test(a) || !k.leadingWhitespace && hb.test(a) || rb[(jb.exec(a) || ["", ""])[1].toLowerCase()])) {
                    a = a.replace(ib, "<$1></$2>");
                    try {
                        for (; d > c; c++)b = this[c] || {}, 1 === b.nodeType && (m.cleanData(ub(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {
                    }
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        }, replaceWith: function () {
            var a = arguments[0];
            return this.domManip(arguments, function (b) {
                a = this.parentNode, m.cleanData(ub(this)), a && a.replaceChild(b, this)
            }), a && (a.length || a.nodeType) ? this : this.remove()
        }, detach: function (a) {
            return this.remove(a, !0)
        }, domManip: function (a, b) {
            a = e.apply([], a);
            var c, d, f, g, h, i, j = 0, l = this.length, n = this, o = l - 1, p = a[0], q = m.isFunction(p);
            if (q || l > 1 && "string" == typeof p && !k.checkClone && nb.test(p))return this.each(function (c) {
                var d = n.eq(c);
                q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b)
            });
            if (l && (i = m.buildFragment(a, this[0].ownerDocument, !1, this), c = i.firstChild, 1 === i.childNodes.length && (i = c), c)) {
                for (g = m.map(ub(i, "script"), xb), f = g.length; l > j; j++)d = i, j !== o && (d = m.clone(d, !0, !0), f && m.merge(g, ub(d, "script"))), b.call(this[j], d, j);
                if (f)for (h = g[g.length - 1].ownerDocument, m.map(g, yb), j = 0; f > j; j++)d = g[j], ob.test(d.type || "") && !m._data(d, "globalEval") && m.contains(h, d) && (d.src ? m._evalUrl && m._evalUrl(d.src) : m.globalEval((d.text || d.textContent || d.innerHTML || "").replace(qb, "")));
                i = c = null
            }
            return this
        }
    }), m.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (a, b) {
        m.fn[a] = function (a) {
            for (var c, d = 0, e = [], g = m(a), h = g.length - 1; h >= d; d++)c = d === h ? this : this.clone(!0), m(g[d])[b](c), f.apply(e, c.get());
            return this.pushStack(e)
        }
    });
    var Cb, Db = {};

    function Eb(b, c) {
        var d, e = m(c.createElement(b)).appendTo(c.body), f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : m.css(e[0], "display");
        return e.detach(), f
    }

    function Fb(a) {
        var b = y, c = Db[a];
        return c || (c = Eb(a, b), "none" !== c && c || (Cb = (Cb || m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Cb[0].contentWindow || Cb[0].contentDocument).document, b.write(), b.close(), c = Eb(a, b), Cb.detach()), Db[a] = c), c
    }

    !function () {
        var a;
        k.shrinkWrapBlocks = function () {
            if (null != a)return a;
            a = !1;
            var b, c, d;
            return c = y.getElementsByTagName("body")[0], c && c.style ? (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== K && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(y.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(d), a) : void 0
        }
    }();
    var Gb = /^margin/, Hb = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"), Ib, Jb, Kb = /^(top|right|bottom|left)$/;
    a.getComputedStyle ? (Ib = function (a) {
        return a.ownerDocument.defaultView.getComputedStyle(a, null)
    }, Jb = function (a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ib(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, c && ("" !== g || m.contains(a.ownerDocument, a) || (g = m.style(a, b)), Hb.test(g) && Gb.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 === g ? g : g + ""
    }) : y.documentElement.currentStyle && (Ib = function (a) {
        return a.currentStyle
    }, Jb = function (a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ib(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Hb.test(g) && !Kb.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto"
    });
    function Lb(a, b) {
        return {
            get: function () {
                var c = a();
                if (null != c)return c ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }

    !function () {
        var b, c, d, e, f, g, h;
        if (b = y.createElement("div"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = d && d.style) {
            c.cssText = "float:left;opacity:.5", k.opacity = "0.5" === c.opacity, k.cssFloat = !!c.cssFloat, b.style.backgroundClip = "content-box", b.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === b.style.backgroundClip, k.boxSizing = "" === c.boxSizing || "" === c.MozBoxSizing || "" === c.WebkitBoxSizing, m.extend(k, {
                reliableHiddenOffsets: function () {
                    return null == g && i(), g
                }, boxSizingReliable: function () {
                    return null == f && i(), f
                }, pixelPosition: function () {
                    return null == e && i(), e
                }, reliableMarginRight: function () {
                    return null == h && i(), h
                }
            });
            function i() {
                var b, c, d, i;
                c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), b.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", e = f = !1, h = !0, a.getComputedStyle && (e = "1%" !== (a.getComputedStyle(b, null) || {}).top, f = "4px" === (a.getComputedStyle(b, null) || {width: "4px"}).width, i = b.appendChild(y.createElement("div")), i.style.cssText = b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", b.style.width = "1px", h = !parseFloat((a.getComputedStyle(i, null) || {}).marginRight)), b.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = b.getElementsByTagName("td"), i[0].style.cssText = "margin:0;border:0;padding:0;display:none", g = 0 === i[0].offsetHeight, g && (i[0].style.display = "", i[1].style.display = "none", g = 0 === i[0].offsetHeight), c.removeChild(d))
            }
        }
    }(), m.swap = function (a, b, c, d) {
        var e, f, g = {};
        for (f in b)g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b)a.style[f] = g[f];
        return e
    };
    var Mb = /alpha\([^)]*\)/i, Nb = /opacity\s*=\s*([^)]*)/, Ob = /^(none|table(?!-c[ea]).+)/, Pb = new RegExp("^(" + S + ")(.*)$", "i"), Qb = new RegExp("^([+-])=(" + S + ")", "i"), Rb = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Sb = {letterSpacing: "0", fontWeight: "400"}, Tb = ["Webkit", "O", "Moz", "ms"];

    function Ub(a, b) {
        if (b in a)return b;
        var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = Tb.length;
        while (e--)if (b = Tb[e] + c, b in a)return b;
        return d
    }

    function Vb(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)d = a[g], d.style && (f[g] = m._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && U(d) && (f[g] = m._data(d, "olddisplay", Fb(d.nodeName)))) : (e = U(d), (c && "none" !== c || !e) && m._data(d, "olddisplay", e ? c : m.css(d, "display"))));
        for (g = 0; h > g; g++)d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }

    function Wb(a, b, c) {
        var d = Pb.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function Xb(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2)"margin" === c && (g += m.css(a, c + T[f], !0, e)), d ? ("content" === c && (g -= m.css(a, "padding" + T[f], !0, e)), "margin" !== c && (g -= m.css(a, "border" + T[f] + "Width", !0, e))) : (g += m.css(a, "padding" + T[f], !0, e), "padding" !== c && (g += m.css(a, "border" + T[f] + "Width", !0, e)));
        return g
    }

    function Yb(a, b, c) {
        var d = !0, e = "width" === b ? a.offsetWidth : a.offsetHeight, f = Ib(a), g = k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = Jb(a, b, f), (0 > e || null == e) && (e = a.style[b]), Hb.test(e))return e;
            d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + Xb(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }

    m.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = Jb(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {"float": k.cssFloat ? "cssFloat" : "styleFloat"},
        style: function (a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = m.camelCase(b), i = a.style;
                if (b = m.cssProps[h] || (m.cssProps[h] = Ub(i, h)), g = m.cssHooks[b] || m.cssHooks[h], void 0 === c)return g && "get"in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
                if (f = typeof c, "string" === f && (e = Qb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(m.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || m.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set"in g && void 0 === (c = g.set(a, c, d)))))try {
                    i[b] = c
                } catch (j) {
                }
            }
        },
        css: function (a, b, c, d) {
            var e, f, g, h = m.camelCase(b);
            return b = m.cssProps[h] || (m.cssProps[h] = Ub(a.style, h)), g = m.cssHooks[b] || m.cssHooks[h], g && "get"in g && (f = g.get(a, !0, c)), void 0 === f && (f = Jb(a, b, d)), "normal" === f && b in Sb && (f = Sb[b]), "" === c || c ? (e = parseFloat(f), c === !0 || m.isNumeric(e) ? e || 0 : f) : f
        }
    }), m.each(["height", "width"], function (a, b) {
        m.cssHooks[b] = {
            get: function (a, c, d) {
                return c ? Ob.test(m.css(a, "display")) && 0 === a.offsetWidth ? m.swap(a, Rb, function () {
                    return Yb(a, b, d)
                }) : Yb(a, b, d) : void 0
            }, set: function (a, c, d) {
                var e = d && Ib(a);
                return Wb(a, c, d ? Xb(a, b, d, k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), k.opacity || (m.cssHooks.opacity = {
        get: function (a, b) {
            return Nb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        }, set: function (a, b) {
            var c = a.style, d = a.currentStyle, e = m.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "", f = d && d.filter || c.filter || "";
            c.zoom = 1, (b >= 1 || "" === b) && "" === m.trim(f.replace(Mb, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Mb.test(f) ? f.replace(Mb, e) : f + " " + e)
        }
    }), m.cssHooks.marginRight = Lb(k.reliableMarginRight, function (a, b) {
        return b ? m.swap(a, {display: "inline-block"}, Jb, [a, "marginRight"]) : void 0
    }), m.each({margin: "", padding: "", border: "Width"}, function (a, b) {
        m.cssHooks[a + b] = {
            expand: function (c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++)e[a + T[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, Gb.test(a) || (m.cssHooks[a + b].set = Wb)
    }), m.fn.extend({
        css: function (a, b) {
            return V(this, function (a, b, c) {
                var d, e, f = {}, g = 0;
                if (m.isArray(b)) {
                    for (d = Ib(a), e = b.length; e > g; g++)f[b[g]] = m.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? m.style(a, b, c) : m.css(a, b)
            }, a, b, arguments.length > 1)
        }, show: function () {
            return Vb(this, !0)
        }, hide: function () {
            return Vb(this)
        }, toggle: function (a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
                U(this) ? m(this).show() : m(this).hide()
            })
        }
    });
    function Zb(a, b, c, d, e) {
        return new Zb.prototype.init(a, b, c, d, e)
    }

    m.Tween = Zb, Zb.prototype = {
        constructor: Zb, init: function (a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (m.cssNumber[c] ? "" : "px")
        }, cur: function () {
            var a = Zb.propHooks[this.prop];
            return a && a.get ? a.get(this) : Zb.propHooks._default.get(this)
        }, run: function (a) {
            var b, c = Zb.propHooks[this.prop];
            return this.pos = b = this.options.duration ? m.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Zb.propHooks._default.set(this), this
        }
    }, Zb.prototype.init.prototype = Zb.prototype, Zb.propHooks = {
        _default: {
            get: function (a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = m.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
            }, set: function (a) {
                m.fx.step[a.prop] ? m.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[m.cssProps[a.prop]] || m.cssHooks[a.prop]) ? m.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    }, Zb.propHooks.scrollTop = Zb.propHooks.scrollLeft = {
        set: function (a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, m.easing = {
        linear: function (a) {
            return a
        }, swing: function (a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    }, m.fx = Zb.prototype.init, m.fx.step = {};
    var $b, _b, ac = /^(?:toggle|show|hide)$/, bc = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"), cc = /queueHooks$/, dc = [ic], ec = {
        "*": [function (a, b) {
            var c = this.createTween(a, b), d = c.cur(), e = bc.exec(b), f = e && e[3] || (m.cssNumber[a] ? "" : "px"), g = (m.cssNumber[a] || "px" !== f && +d) && bc.exec(m.css(c.elem, a)), h = 1, i = 20;
            if (g && g[3] !== f) {
                f = f || g[3], e = e || [], g = +d || 1;
                do h = h || ".5", g /= h, m.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
            }
            return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
        }]
    };

    function fc() {
        return setTimeout(function () {
            $b = void 0
        }), $b = m.now()
    }

    function gc(a, b) {
        var c, d = {height: a}, e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b)c = T[e], d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a), d
    }

    function hc(a, b, c) {
        for (var d, e = (ec[b] || []).concat(ec["*"]), f = 0, g = e.length; g > f; f++)if (d = e[f].call(c, b, a))return d
    }

    function ic(a, b, c) {
        var d, e, f, g, h, i, j, l, n = this, o = {}, p = a.style, q = a.nodeType && U(a), r = m._data(a, "fxshow");
        c.queue || (h = m._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
            h.unqueued || i()
        }), h.unqueued++, n.always(function () {
            n.always(function () {
                h.unqueued--, m.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height"in b || "width"in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = m.css(a, "display"), l = "none" === j ? m._data(a, "olddisplay") || Fb(a.nodeName) : j, "inline" === l && "none" === m.css(a, "float") && (k.inlineBlockNeedsLayout && "inline" !== Fb(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", k.shrinkWrapBlocks() || n.always(function () {
            p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2]
        }));
        for (d in b)if (e = b[d], ac.exec(e)) {
            if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
                if ("show" !== e || !r || void 0 === r[d])continue;
                q = !0
            }
            o[d] = r && r[d] || m.style(a, d)
        } else j = void 0;
        if (m.isEmptyObject(o))"inline" === ("none" === j ? Fb(a.nodeName) : j) && (p.display = j); else {
            r ? "hidden"in r && (q = r.hidden) : r = m._data(a, "fxshow", {}), f && (r.hidden = !q), q ? m(a).show() : n.done(function () {
                m(a).hide()
            }), n.done(function () {
                var b;
                m._removeData(a, "fxshow");
                for (b in o)m.style(a, b, o[b])
            });
            for (d in o)g = hc(q ? r[d] : 0, d, n), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function jc(a, b) {
        var c, d, e, f, g;
        for (c in a)if (d = m.camelCase(c), e = b[d], f = a[c], m.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = m.cssHooks[d], g && "expand"in g) {
            f = g.expand(f), delete a[d];
            for (c in f)c in a || (a[c] = f[c], b[c] = e)
        } else b[d] = e
    }

    function kc(a, b, c) {
        var d, e, f = 0, g = dc.length, h = m.Deferred().always(function () {
            delete i.elem
        }), i = function () {
            if (e)return !1;
            for (var b = $b || fc(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++)j.tweens[g].run(f);
            return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
        }, j = h.promise({
            elem: a,
            props: m.extend({}, b),
            opts: m.extend(!0, {specialEasing: {}}, c),
            originalProperties: b,
            originalOptions: c,
            startTime: $b || fc(),
            duration: c.duration,
            tweens: [],
            createTween: function (b, c) {
                var d = m.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d), d
            },
            stop: function (b) {
                var c = 0, d = b ? j.tweens.length : 0;
                if (e)return this;
                for (e = !0; d > c; c++)j.tweens[c].run(1);
                return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
            }
        }), k = j.props;
        for (jc(k, j.opts.specialEasing); g > f; f++)if (d = dc[f].call(j, a, k, j.opts))return d;
        return m.map(k, hc, j), m.isFunction(j.opts.start) && j.opts.start.call(a, j), m.fx.timer(m.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }

    m.Animation = m.extend(kc, {
        tweener: function (a, b) {
            m.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++)c = a[d], ec[c] = ec[c] || [], ec[c].unshift(b)
        }, prefilter: function (a, b) {
            b ? dc.unshift(a) : dc.push(a)
        }
    }), m.speed = function (a, b, c) {
        var d = a && "object" == typeof a ? m.extend({}, a) : {
            complete: c || !c && b || m.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !m.isFunction(b) && b
        };
        return d.duration = m.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in m.fx.speeds ? m.fx.speeds[d.duration] : m.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function () {
            m.isFunction(d.old) && d.old.call(this), d.queue && m.dequeue(this, d.queue)
        }, d
    }, m.fn.extend({
        fadeTo: function (a, b, c, d) {
            return this.filter(U).css("opacity", 0).show().end().animate({opacity: b}, a, c, d)
        }, animate: function (a, b, c, d) {
            var e = m.isEmptyObject(a), f = m.speed(b, c, d), g = function () {
                var b = kc(this, m.extend({}, a), f);
                (e || m._data(this, "finish")) && b.stop(!0)
            };
            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        }, stop: function (a, b, c) {
            var d = function (a) {
                var b = a.stop;
                delete a.stop, b(c)
            };
            return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
                var b = !0, e = null != a && a + "queueHooks", f = m.timers, g = m._data(this);
                if (e)g[e] && g[e].stop && d(g[e]); else for (e in g)g[e] && g[e].stop && cc.test(e) && d(g[e]);
                for (e = f.length; e--;)f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                (b || !c) && m.dequeue(this, a)
            })
        }, finish: function (a) {
            return a !== !1 && (a = a || "fx"), this.each(function () {
                var b, c = m._data(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = m.timers, g = d ? d.length : 0;
                for (c.finish = !0, m.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;)f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                for (b = 0; g > b; b++)d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }
    }), m.each(["toggle", "show", "hide"], function (a, b) {
        var c = m.fn[b];
        m.fn[b] = function (a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(gc(b, !0), a, d, e)
        }
    }), m.each({
        slideDown: gc("show"),
        slideUp: gc("hide"),
        slideToggle: gc("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (a, b) {
        m.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), m.timers = [], m.fx.tick = function () {
        var a, b = m.timers, c = 0;
        for ($b = m.now(); c < b.length; c++)a = b[c], a() || b[c] !== a || b.splice(c--, 1);
        b.length || m.fx.stop(), $b = void 0
    }, m.fx.timer = function (a) {
        m.timers.push(a), a() ? m.fx.start() : m.timers.pop()
    }, m.fx.interval = 13, m.fx.start = function () {
        _b || (_b = setInterval(m.fx.tick, m.fx.interval))
    }, m.fx.stop = function () {
        clearInterval(_b), _b = null
    }, m.fx.speeds = {slow: 600, fast: 200, _default: 400}, m.fn.delay = function (a, b) {
        return a = m.fx ? m.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) {
            var d = setTimeout(b, a);
            c.stop = function () {
                clearTimeout(d)
            }
        })
    }, function () {
        var a, b, c, d, e;
        b = y.createElement("div"), b.setAttribute("className", "t"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = y.createElement("select"), e = c.appendChild(y.createElement("option")), a = b.getElementsByTagName("input")[0], d.style.cssText = "top:1px", k.getSetAttribute = "t" !== b.className, k.style = /top/.test(d.getAttribute("style")), k.hrefNormalized = "/a" === d.getAttribute("href"), k.checkOn = !!a.value, k.optSelected = e.selected, k.enctype = !!y.createElement("form").enctype, c.disabled = !0, k.optDisabled = !e.disabled, a = y.createElement("input"), a.setAttribute("value", ""), k.input = "" === a.getAttribute("value"), a.value = "t", a.setAttribute("type", "radio"), k.radioValue = "t" === a.value
    }();
    var lc = /\r/g;
    m.fn.extend({
        val: function (a) {
            var b, c, d, e = this[0];
            {
                if (arguments.length)return d = m.isFunction(a), this.each(function (c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, m(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : m.isArray(e) && (e = m.map(e, function (a) {
                        return null == a ? "" : a + ""
                    })), b = m.valHooks[this.type] || m.valHooks[this.nodeName.toLowerCase()], b && "set"in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e)return b = m.valHooks[e.type] || m.valHooks[e.nodeName.toLowerCase()], b && "get"in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(lc, "") : null == c ? "" : c)
            }
        }
    }), m.extend({
        valHooks: {
            option: {
                get: function (a) {
                    var b = m.find.attr(a, "value");
                    return null != b ? b : m.trim(m.text(a))
                }
            }, select: {
                get: function (a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && m.nodeName(c.parentNode, "optgroup"))) {
                        if (b = m(c).val(), f)return b;
                        g.push(b)
                    }
                    return g
                }, set: function (a, b) {
                    var c, d, e = a.options, f = m.makeArray(b), g = e.length;
                    while (g--)if (d = e[g], m.inArray(m.valHooks.option.get(d), f) >= 0)try {
                        d.selected = c = !0
                    } catch (h) {
                        d.scrollHeight
                    } else d.selected = !1;
                    return c || (a.selectedIndex = -1), e
                }
            }
        }
    }), m.each(["radio", "checkbox"], function () {
        m.valHooks[this] = {
            set: function (a, b) {
                return m.isArray(b) ? a.checked = m.inArray(m(a).val(), b) >= 0 : void 0
            }
        }, k.checkOn || (m.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var mc, nc, oc = m.expr.attrHandle, pc = /^(?:checked|selected)$/i, qc = k.getSetAttribute, rc = k.input;
    m.fn.extend({
        attr: function (a, b) {
            return V(this, m.attr, a, b, arguments.length > 1)
        }, removeAttr: function (a) {
            return this.each(function () {
                m.removeAttr(this, a)
            })
        }
    }), m.extend({
        attr: function (a, b, c) {
            var d, e, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f)return typeof a.getAttribute === K ? m.prop(a, b, c) : (1 === f && m.isXMLDoc(a) || (b = b.toLowerCase(), d = m.attrHooks[b] || (m.expr.match.bool.test(b) ? nc : mc)), void 0 === c ? d && "get"in d && null !== (e = d.get(a, b)) ? e : (e = m.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set"in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void m.removeAttr(a, b))
        }, removeAttr: function (a, b) {
            var c, d, e = 0, f = b && b.match(E);
            if (f && 1 === a.nodeType)while (c = f[e++])d = m.propFix[c] || c, m.expr.match.bool.test(c) ? rc && qc || !pc.test(c) ? a[d] = !1 : a[m.camelCase("default-" + c)] = a[d] = !1 : m.attr(a, c, ""), a.removeAttribute(qc ? c : d)
        }, attrHooks: {
            type: {
                set: function (a, b) {
                    if (!k.radioValue && "radio" === b && m.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        }
    }), nc = {
        set: function (a, b, c) {
            return b === !1 ? m.removeAttr(a, c) : rc && qc || !pc.test(c) ? a.setAttribute(!qc && m.propFix[c] || c, c) : a[m.camelCase("default-" + c)] = a[c] = !0, c
        }
    }, m.each(m.expr.match.bool.source.match(/\w+/g), function (a, b) {
        var c = oc[b] || m.find.attr;
        oc[b] = rc && qc || !pc.test(b) ? function (a, b, d) {
            var e, f;
            return d || (f = oc[b], oc[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, oc[b] = f), e
        } : function (a, b, c) {
            return c ? void 0 : a[m.camelCase("default-" + b)] ? b.toLowerCase() : null
        }
    }), rc && qc || (m.attrHooks.value = {
        set: function (a, b, c) {
            return m.nodeName(a, "input") ? void(a.defaultValue = b) : mc && mc.set(a, b, c)
        }
    }), qc || (mc = {
        set: function (a, b, c) {
            var d = a.getAttributeNode(c);
            return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0
        }
    }, oc.id = oc.name = oc.coords = function (a, b, c) {
        var d;
        return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
    }, m.valHooks.button = {
        get: function (a, b) {
            var c = a.getAttributeNode(b);
            return c && c.specified ? c.value : void 0
        }, set: mc.set
    }, m.attrHooks.contenteditable = {
        set: function (a, b, c) {
            mc.set(a, "" === b ? !1 : b, c)
        }
    }, m.each(["width", "height"], function (a, b) {
        m.attrHooks[b] = {
            set: function (a, c) {
                return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
            }
        }
    })), k.style || (m.attrHooks.style = {
        get: function (a) {
            return a.style.cssText || void 0
        }, set: function (a, b) {
            return a.style.cssText = b + ""
        }
    });
    var sc = /^(?:input|select|textarea|button|object)$/i, tc = /^(?:a|area)$/i;
    m.fn.extend({
        prop: function (a, b) {
            return V(this, m.prop, a, b, arguments.length > 1)
        }, removeProp: function (a) {
            return a = m.propFix[a] || a, this.each(function () {
                try {
                    this[a] = void 0, delete this[a]
                } catch (b) {
                }
            })
        }
    }), m.extend({
        propFix: {"for": "htmlFor", "class": "className"}, prop: function (a, b, c) {
            var d, e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g)return f = 1 !== g || !m.isXMLDoc(a), f && (b = m.propFix[b] || b, e = m.propHooks[b]), void 0 !== c ? e && "set"in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get"in e && null !== (d = e.get(a, b)) ? d : a[b]
        }, propHooks: {
            tabIndex: {
                get: function (a) {
                    var b = m.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : sc.test(a.nodeName) || tc.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        }
    }), k.hrefNormalized || m.each(["href", "src"], function (a, b) {
        m.propHooks[b] = {
            get: function (a) {
                return a.getAttribute(b, 4)
            }
        }
    }), k.optSelected || (m.propHooks.selected = {
        get: function (a) {
            var b = a.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
        }
    }), m.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        m.propFix[this.toLowerCase()] = this
    }), k.enctype || (m.propFix.enctype = "encoding");
    var uc = /[\t\r\n\f]/g;
    m.fn.extend({
        addClass: function (a) {
            var b, c, d, e, f, g, h = 0, i = this.length, j = "string" == typeof a && a;
            if (m.isFunction(a))return this.each(function (b) {
                m(this).addClass(a.call(this, b, this.className))
            });
            if (j)for (b = (a || "").match(E) || []; i > h; h++)if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(uc, " ") : " ")) {
                f = 0;
                while (e = b[f++])d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                g = m.trim(d), c.className !== g && (c.className = g)
            }
            return this
        }, removeClass: function (a) {
            var b, c, d, e, f, g, h = 0, i = this.length, j = 0 === arguments.length || "string" == typeof a && a;
            if (m.isFunction(a))return this.each(function (b) {
                m(this).removeClass(a.call(this, b, this.className))
            });
            if (j)for (b = (a || "").match(E) || []; i > h; h++)if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(uc, " ") : "")) {
                f = 0;
                while (e = b[f++])while (d.indexOf(" " + e + " ") >= 0)d = d.replace(" " + e + " ", " ");
                g = a ? m.trim(d) : "", c.className !== g && (c.className = g)
            }
            return this
        }, toggleClass: function (a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(m.isFunction(a) ? function (c) {
                m(this).toggleClass(a.call(this, c, this.className, b), b)
            } : function () {
                if ("string" === c) {
                    var b, d = 0, e = m(this), f = a.match(E) || [];
                    while (b = f[d++])e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else(c === K || "boolean" === c) && (this.className && m._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : m._data(this, "__className__") || "")
            })
        }, hasClass: function (a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(uc, " ").indexOf(b) >= 0)return !0;
            return !1
        }
    }), m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
        m.fn[b] = function (a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), m.fn.extend({
        hover: function (a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }, bind: function (a, b, c) {
            return this.on(a, null, b, c)
        }, unbind: function (a, b) {
            return this.off(a, null, b)
        }, delegate: function (a, b, c, d) {
            return this.on(b, a, c, d)
        }, undelegate: function (a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var vc = m.now(), wc = /\?/, xc = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    m.parseJSON = function (b) {
        if (a.JSON && a.JSON.parse)return a.JSON.parse(b + "");
        var c, d = null, e = m.trim(b + "");
        return e && !m.trim(e.replace(xc, function (a, b, e, f) {
            return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "")
        })) ? Function("return " + e)() : m.error("Invalid JSON: " + b)
    }, m.parseXML = function (b) {
        var c, d;
        if (!b || "string" != typeof b)return null;
        try {
            a.DOMParser ? (d = new DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
        } catch (e) {
            c = void 0
        }
        return c && c.documentElement && !c.getElementsByTagName("parsererror").length || m.error("Invalid XML: " + b), c
    };
    var yc, zc, Ac = /#.*$/, Bc = /([?&])_=[^&]*/, Cc = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Dc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Ec = /^(?:GET|HEAD)$/, Fc = /^\/\//, Gc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Hc = {}, Ic = {}, Jc = "*/".concat("*");
    try {
        zc = location.href
    } catch (Kc) {
        zc = y.createElement("a"), zc.href = "", zc = zc.href
    }
    yc = Gc.exec(zc.toLowerCase()) || [];
    function Lc(a) {
        return function (b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0, f = b.toLowerCase().match(E) || [];
            if (m.isFunction(c))while (d = f[e++])"+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function Mc(a, b, c, d) {
        var e = {}, f = a === Ic;

        function g(h) {
            var i;
            return e[h] = !0, m.each(a[h] || [], function (a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }

        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function Nc(a, b) {
        var c, d, e = m.ajaxSettings.flatOptions || {};
        for (d in b)void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
        return c && m.extend(!0, a, c), a
    }

    function Oc(a, b, c) {
        var d, e, f, g, h = a.contents, i = a.dataTypes;
        while ("*" === i[0])i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
        if (e)for (g in h)if (h[g] && h[g].test(e)) {
            i.unshift(g);
            break
        }
        if (i[0]in c)f = i[0]; else {
            for (g in c) {
                if (!i[0] || a.converters[g + " " + i[0]]) {
                    f = g;
                    break
                }
                d || (d = g)
            }
            f = f || d
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function Pc(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1])for (g in a.converters)j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())if ("*" === f)f = i; else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g)for (e in j)if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                break
            }
            if (g !== !0)if (g && a["throws"])b = g(b); else try {
                b = g(b)
            } catch (l) {
                return {state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f}
            }
        }
        return {state: "success", data: b}
    }

    m.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: zc,
            type: "GET",
            isLocal: Dc.test(yc[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Jc,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /xml/, html: /html/, json: /json/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": m.parseJSON, "text xml": m.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (a, b) {
            return b ? Nc(Nc(a, m.ajaxSettings), b) : Nc(m.ajaxSettings, a)
        },
        ajaxPrefilter: Lc(Hc),
        ajaxTransport: Lc(Ic),
        ajax: function (a, b) {
            "object" == typeof a && (b = a, a = void 0), b = b || {};
            var c, d, e, f, g, h, i, j, k = m.ajaxSetup({}, b), l = k.context || k, n = k.context && (l.nodeType || l.jquery) ? m(l) : m.event, o = m.Deferred(), p = m.Callbacks("once memory"), q = k.statusCode || {}, r = {}, s = {}, t = 0, u = "canceled", v = {
                readyState: 0,
                getResponseHeader: function (a) {
                    var b;
                    if (2 === t) {
                        if (!j) {
                            j = {};
                            while (b = Cc.exec(f))j[b[1].toLowerCase()] = b[2]
                        }
                        b = j[a.toLowerCase()]
                    }
                    return null == b ? null : b
                },
                getAllResponseHeaders: function () {
                    return 2 === t ? f : null
                },
                setRequestHeader: function (a, b) {
                    var c = a.toLowerCase();
                    return t || (a = s[c] = s[c] || a, r[a] = b), this
                },
                overrideMimeType: function (a) {
                    return t || (k.mimeType = a), this
                },
                statusCode: function (a) {
                    var b;
                    if (a)if (2 > t)for (b in a)q[b] = [q[b], a[b]]; else v.always(a[v.status]);
                    return this
                },
                abort: function (a) {
                    var b = a || u;
                    return i && i.abort(b), x(0, b), this
                }
            };
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || zc) + "").replace(Ac, "").replace(Fc, yc[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = m.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (c = Gc.exec(k.url.toLowerCase()), k.crossDomain = !(!c || c[1] === yc[1] && c[2] === yc[2] && (c[3] || ("http:" === c[1] ? "80" : "443")) === (yc[3] || ("http:" === yc[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = m.param(k.data, k.traditional)), Mc(Hc, k, b, v), 2 === t)return v;
            h = k.global, h && 0 === m.active++ && m.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !Ec.test(k.type), e = k.url, k.hasContent || (k.data && (e = k.url += (wc.test(e) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = Bc.test(e) ? e.replace(Bc, "$1_=" + vc++) : e + (wc.test(e) ? "&" : "?") + "_=" + vc++)), k.ifModified && (m.lastModified[e] && v.setRequestHeader("If-Modified-Since", m.lastModified[e]), m.etag[e] && v.setRequestHeader("If-None-Match", m.etag[e])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + Jc + "; q=0.01" : "") : k.accepts["*"]);
            for (d in k.headers)v.setRequestHeader(d, k.headers[d]);
            if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t))return v.abort();
            u = "abort";
            for (d in{success: 1, error: 1, complete: 1})v[d](k[d]);
            if (i = Mc(Ic, k, b, v)) {
                v.readyState = 1, h && n.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function () {
                    v.abort("timeout")
                }, k.timeout));
                try {
                    t = 1, i.send(r, x)
                } catch (w) {
                    if (!(2 > t))throw w;
                    x(-1, w)
                }
            } else x(-1, "No Transport");
            function x(a, b, c, d) {
                var j, r, s, u, w, x = b;
                2 !== t && (t = 2, g && clearTimeout(g), i = void 0, f = d || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, c && (u = Oc(k, v, c)), u = Pc(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (m.lastModified[e] = w), w = v.getResponseHeader("etag"), w && (m.etag[e] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, h && n.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), h && (n.trigger("ajaxComplete", [v, k]), --m.active || m.event.trigger("ajaxStop")))
            }

            return v
        },
        getJSON: function (a, b, c) {
            return m.get(a, b, c, "json")
        },
        getScript: function (a, b) {
            return m.get(a, void 0, b, "script")
        }
    }), m.each(["get", "post"], function (a, b) {
        m[b] = function (a, c, d, e) {
            return m.isFunction(c) && (e = e || d, d = c, c = void 0), m.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            })
        }
    }), m.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
        m.fn[b] = function (a) {
            return this.on(b, a)
        }
    }), m._evalUrl = function (a) {
        return m.ajax({url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
    }, m.fn.extend({
        wrapAll: function (a) {
            if (m.isFunction(a))return this.each(function (b) {
                m(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = m(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                    var a = this;
                    while (a.firstChild && 1 === a.firstChild.nodeType)a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        }, wrapInner: function (a) {
            return this.each(m.isFunction(a) ? function (b) {
                m(this).wrapInner(a.call(this, b))
            } : function () {
                var b = m(this), c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        }, wrap: function (a) {
            var b = m.isFunction(a);
            return this.each(function (c) {
                m(this).wrapAll(b ? a.call(this, c) : a)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                m.nodeName(this, "body") || m(this).replaceWith(this.childNodes)
            }).end()
        }
    }), m.expr.filters.hidden = function (a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !k.reliableHiddenOffsets() && "none" === (a.style && a.style.display || m.css(a, "display"))
    }, m.expr.filters.visible = function (a) {
        return !m.expr.filters.hidden(a)
    };
    var Qc = /%20/g, Rc = /\[\]$/, Sc = /\r?\n/g, Tc = /^(?:submit|button|image|reset|file)$/i, Uc = /^(?:input|select|textarea|keygen)/i;

    function Vc(a, b, c, d) {
        var e;
        if (m.isArray(b))m.each(b, function (b, e) {
            c || Rc.test(a) ? d(a, e) : Vc(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
        }); else if (c || "object" !== m.type(b))d(a, b); else for (e in b)Vc(a + "[" + e + "]", b[e], c, d)
    }

    m.param = function (a, b) {
        var c, d = [], e = function (a, b) {
            b = m.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        };
        if (void 0 === b && (b = m.ajaxSettings && m.ajaxSettings.traditional), m.isArray(a) || a.jquery && !m.isPlainObject(a))m.each(a, function () {
            e(this.name, this.value)
        }); else for (c in a)Vc(c, a[c], b, e);
        return d.join("&").replace(Qc, "+")
    }, m.fn.extend({
        serialize: function () {
            return m.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var a = m.prop(this, "elements");
                return a ? m.makeArray(a) : this
            }).filter(function () {
                var a = this.type;
                return this.name && !m(this).is(":disabled") && Uc.test(this.nodeName) && !Tc.test(a) && (this.checked || !W.test(a))
            }).map(function (a, b) {
                var c = m(this).val();
                return null == c ? null : m.isArray(c) ? m.map(c, function (a) {
                    return {name: b.name, value: a.replace(Sc, "\r\n")}
                }) : {name: b.name, value: c.replace(Sc, "\r\n")}
            }).get()
        }
    }), m.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function () {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Zc() || $c()
    } : Zc;
    var Wc = 0, Xc = {}, Yc = m.ajaxSettings.xhr();
    a.ActiveXObject && m(a).on("unload", function () {
        for (var a in Xc)Xc[a](void 0, !0)
    }), k.cors = !!Yc && "withCredentials"in Yc, Yc = k.ajax = !!Yc, Yc && m.ajaxTransport(function (a) {
        if (!a.crossDomain || k.cors) {
            var b;
            return {
                send: function (c, d) {
                    var e, f = a.xhr(), g = ++Wc;
                    if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)for (e in a.xhrFields)f[e] = a.xhrFields[e];
                    a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                    for (e in c)void 0 !== c[e] && f.setRequestHeader(e, c[e] + "");
                    f.send(a.hasContent && a.data || null), b = function (c, e) {
                        var h, i, j;
                        if (b && (e || 4 === f.readyState))if (delete Xc[g], b = void 0, f.onreadystatechange = m.noop, e)4 !== f.readyState && f.abort(); else {
                            j = {}, h = f.status, "string" == typeof f.responseText && (j.text = f.responseText);
                            try {
                                i = f.statusText
                            } catch (k) {
                                i = ""
                            }
                            h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404
                        }
                        j && d(h, i, j, f.getAllResponseHeaders())
                    }, a.async ? 4 === f.readyState ? setTimeout(b) : f.onreadystatechange = Xc[g] = b : b()
                }, abort: function () {
                    b && b(void 0, !0)
                }
            }
        }
    });
    function Zc() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {
        }
    }

    function $c() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {
        }
    }

    m.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /(?:java|ecma)script/},
        converters: {
            "text script": function (a) {
                return m.globalEval(a), a
            }
        }
    }), m.ajaxPrefilter("script", function (a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), m.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var b, c = y.head || m("head")[0] || y.documentElement;
            return {
                send: function (d, e) {
                    b = y.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function (a, c) {
                        (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || e(200, "success"))
                    }, c.insertBefore(b, c.firstChild)
                }, abort: function () {
                    b && b.onload(void 0, !0)
                }
            }
        }
    });
    var _c = [], ad = /(=)\?(?=&|$)|\?\?/;
    m.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var a = _c.pop() || m.expando + "_" + vc++;
            return this[a] = !0, a
        }
    }), m.ajaxPrefilter("json jsonp", function (b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (ad.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && ad.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = m.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(ad, "$1" + e) : b.jsonp !== !1 && (b.url += (wc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
            return g || m.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
            g = arguments
        }, d.always(function () {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, _c.push(e)), g && m.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), m.parseHTML = function (a, b, c) {
        if (!a || "string" != typeof a)return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || y;
        var d = u.exec(a), e = !c && [];
        return d ? [b.createElement(d[1])] : (d = m.buildFragment([a], b, e), e && e.length && m(e).remove(), m.merge([], d.childNodes))
    };
    var bd = m.fn.load;
    m.fn.load = function (a, b, c) {
        if ("string" != typeof a && bd)return bd.apply(this, arguments);
        var d, e, f, g = this, h = a.indexOf(" ");
        return h >= 0 && (d = m.trim(a.slice(h, a.length)), a = a.slice(0, h)), m.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (f = "POST"), g.length > 0 && m.ajax({
            url: a,
            type: f,
            dataType: "html",
            data: b
        }).done(function (a) {
            e = arguments, g.html(d ? m("<div>").append(m.parseHTML(a)).find(d) : a)
        }).complete(c && function (a, b) {
            g.each(c, e || [a.responseText, b, a])
        }), this
    }, m.expr.filters.animated = function (a) {
        return m.grep(m.timers, function (b) {
            return a === b.elem
        }).length
    };
    var cd = a.document.documentElement;

    function dd(a) {
        return m.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }

    m.offset = {
        setOffset: function (a, b, c) {
            var d, e, f, g, h, i, j, k = m.css(a, "position"), l = m(a), n = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = m.css(a, "top"), i = m.css(a, "left"), j = ("absolute" === k || "fixed" === k) && m.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), m.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (n.top = b.top - h.top + g), null != b.left && (n.left = b.left - h.left + e), "using"in b ? b.using.call(a, n) : l.css(n)
        }
    }, m.fn.extend({
        offset: function (a) {
            if (arguments.length)return void 0 === a ? this : this.each(function (b) {
                m.offset.setOffset(this, a, b)
            });
            var b, c, d = {top: 0, left: 0}, e = this[0], f = e && e.ownerDocument;
            if (f)return b = f.documentElement, m.contains(b, e) ? (typeof e.getBoundingClientRect !== K && (d = e.getBoundingClientRect()), c = dd(f), {
                top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
            }) : d
        }, position: function () {
            if (this[0]) {
                var a, b, c = {top: 0, left: 0}, d = this[0];
                return "fixed" === m.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), m.nodeName(a[0], "html") || (c = a.offset()), c.top += m.css(a[0], "borderTopWidth", !0), c.left += m.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - c.top - m.css(d, "marginTop", !0),
                    left: b.left - c.left - m.css(d, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                var a = this.offsetParent || cd;
                while (a && !m.nodeName(a, "html") && "static" === m.css(a, "position"))a = a.offsetParent;
                return a || cd
            })
        }
    }), m.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (a, b) {
        var c = /Y/.test(b);
        m.fn[a] = function (d) {
            return V(this, function (a, d, e) {
                var f = dd(a);
                return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void(f ? f.scrollTo(c ? m(f).scrollLeft() : e, c ? e : m(f).scrollTop()) : a[d] = e)
            }, a, d, arguments.length, null)
        }
    }), m.each(["top", "left"], function (a, b) {
        m.cssHooks[b] = Lb(k.pixelPosition, function (a, c) {
            return c ? (c = Jb(a, b), Hb.test(c) ? m(a).position()[b] + "px" : c) : void 0
        })
    }), m.each({Height: "height", Width: "width"}, function (a, b) {
        m.each({padding: "inner" + a, content: b, "": "outer" + a}, function (c, d) {
            m.fn[d] = function (d, e) {
                var f = arguments.length && (c || "boolean" != typeof d), g = c || (d === !0 || e === !0 ? "margin" : "border");
                return V(this, function (b, c, d) {
                    var e;
                    return m.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? m.css(b, c, g) : m.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), m.fn.size = function () {
        return this.length
    }, m.fn.andSelf = m.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return m
    });
    var ed = a.jQuery, fd = a.$;
    return m.noConflict = function (b) {
        return a.$ === m && (a.$ = fd), b && a.jQuery === m && (a.jQuery = ed), m
    }, typeof b === K && (a.jQuery = a.$ = m), m
});
/*!
 * Bootstrap v3.3.4 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if ("undefined" == typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");
+function (a) {
    "use strict";
    var b = a.fn.jquery.split(" ")[0].split(".");
    if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
}(jQuery), +function (a) {
    "use strict";
    function b() {
        var a = document.createElement("bootstrap"), b = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for (var c in b)if (void 0 !== a.style[c])return {end: b[c]};
        return !1
    }

    a.fn.emulateTransitionEnd = function (b) {
        var c = !1, d = this;
        a(this).one("bsTransitionEnd", function () {
            c = !0
        });
        var e = function () {
            c || a(d).trigger(a.support.transition.end)
        };
        return setTimeout(e, b), this
    }, a(function () {
        a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = {
            bindType: a.support.transition.end,
            delegateType: a.support.transition.end,
            handle: function (b) {
                return a(b.target).is(this) ? b.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery), +function (a) {
    "use strict";
    function b(b) {
        return this.each(function () {
            var c = a(this), e = c.data("bs.alert");
            e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c)
        })
    }

    var c = '[data-dismiss="alert"]', d = function (b) {
        a(b).on("click", c, this.close)
    };
    d.VERSION = "3.3.4", d.TRANSITION_DURATION = 150, d.prototype.close = function (b) {
        function c() {
            g.detach().trigger("closed.bs.alert").remove()
        }

        var e = a(this), f = e.attr("data-target");
        f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, ""));
        var g = a(f);
        b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c())
    };
    var e = a.fn.alert;
    a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function () {
        return a.fn.alert = e, this
    }, a(document).on("click.bs.alert.data-api", c, d.prototype.close)
}(jQuery), +function (a) {
    "use strict";
    function b(b) {
        return this.each(function () {
            var d = a(this), e = d.data("bs.button"), f = "object" == typeof b && b;
            e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b)
        })
    }

    var c = function (b, d) {
        this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1
    };
    c.VERSION = "3.3.4", c.DEFAULTS = {loadingText: "loading..."}, c.prototype.setState = function (b) {
        var c = "disabled", d = this.$element, e = d.is("input") ? "val" : "html", f = d.data();
        b += "Text", null == f.resetText && d.data("resetText", d[e]()), setTimeout(a.proxy(function () {
            d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c))
        }, this), 0)
    }, c.prototype.toggle = function () {
        var a = !0, b = this.$element.closest('[data-toggle="buttons"]');
        if (b.length) {
            var c = this.$element.find("input");
            "radio" == c.prop("type") && (c.prop("checked") && this.$element.hasClass("active") ? a = !1 : b.find(".active").removeClass("active")), a && c.prop("checked", !this.$element.hasClass("active")).trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active"));
        a && this.$element.toggleClass("active")
    };
    var d = a.fn.button;
    a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function () {
        return a.fn.button = d, this
    }, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (c) {
        var d = a(c.target);
        d.hasClass("btn") || (d = d.closest(".btn")), b.call(d, "toggle"), c.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (b) {
        a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type))
    })
}(jQuery), +function (a) {
    "use strict";
    function b(b) {
        return this.each(function () {
            var d = a(this), e = d.data("bs.carousel"), f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b), g = "string" == typeof b ? b : f.slide;
            e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle()
        })
    }

    var c = function (b, c) {
        this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart"in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this))
    };
    c.VERSION = "3.3.4", c.TRANSITION_DURATION = 600, c.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, c.prototype.keydown = function (a) {
        if (!/input|textarea/i.test(a.target.tagName)) {
            switch (a.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            a.preventDefault()
        }
    }, c.prototype.cycle = function (b) {
        return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this
    }, c.prototype.getItemIndex = function (a) {
        return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active)
    }, c.prototype.getItemForDirection = function (a, b) {
        var c = this.getItemIndex(b), d = "prev" == a && 0 === c || "next" == a && c == this.$items.length - 1;
        if (d && !this.options.wrap)return b;
        var e = "prev" == a ? -1 : 1, f = (c + e) % this.$items.length;
        return this.$items.eq(f)
    }, c.prototype.to = function (a) {
        var b = this, c = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return a > this.$items.length - 1 || 0 > a ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function () {
            b.to(a)
        }) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a))
    }, c.prototype.pause = function (b) {
        return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, c.prototype.next = function () {
        return this.sliding ? void 0 : this.slide("next")
    }, c.prototype.prev = function () {
        return this.sliding ? void 0 : this.slide("prev")
    }, c.prototype.slide = function (b, d) {
        var e = this.$element.find(".item.active"), f = d || this.getItemForDirection(b, e), g = this.interval, h = "next" == b ? "left" : "right", i = this;
        if (f.hasClass("active"))return this.sliding = !1;
        var j = f[0], k = a.Event("slide.bs.carousel", {relatedTarget: j, direction: h});
        if (this.$element.trigger(k), !k.isDefaultPrevented()) {
            if (this.sliding = !0, g && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var l = a(this.$indicators.children()[this.getItemIndex(f)]);
                l && l.addClass("active")
            }
            var m = a.Event("slid.bs.carousel", {relatedTarget: j, direction: h});
            return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd", function () {
                f.removeClass([b, h].join(" ")).addClass("active"), e.removeClass(["active", h].join(" ")), i.sliding = !1, setTimeout(function () {
                    i.$element.trigger(m)
                }, 0)
            }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger(m)), g && this.cycle(), this
        }
    };
    var d = a.fn.carousel;
    a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function () {
        return a.fn.carousel = d, this
    };
    var e = function (c) {
        var d, e = a(this), f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));
        if (f.hasClass("carousel")) {
            var g = a.extend({}, f.data(), e.data()), h = e.attr("data-slide-to");
            h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault()
        }
    };
    a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), a(window).on("load", function () {
        a('[data-ride="carousel"]').each(function () {
            var c = a(this);
            b.call(c, c.data())
        })
    })
}(jQuery), +function (a) {
    "use strict";
    function b(b) {
        var c, d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");
        return a(d)
    }

    function c(b) {
        return this.each(function () {
            var c = a(this), e = c.data("bs.collapse"), f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);
            !e && f.toggle && /show|hide/.test(b) && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), "string" == typeof b && e[b]()
        })
    }

    var d = function (b, c) {
        this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    d.VERSION = "3.3.4", d.TRANSITION_DURATION = 350, d.DEFAULTS = {toggle: !0}, d.prototype.dimension = function () {
        var a = this.$element.hasClass("width");
        return a ? "width" : "height"
    }, d.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var b, e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(e && e.length && (b = e.data("bs.collapse"), b && b.transitioning))) {
                var f = a.Event("show.bs.collapse");
                if (this.$element.trigger(f), !f.isDefaultPrevented()) {
                    e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null));
                    var g = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var h = function () {
                        this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!a.support.transition)return h.call(this);
                    var i = a.camelCase(["scroll", g].join("-"));
                    this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])
                }
            }
        }
    }, d.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var b = a.Event("hide.bs.collapse");
            if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                var c = this.dimension();
                this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var e = function () {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this)
            }
        }
    }, d.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, d.prototype.getParent = function () {
        return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function (c, d) {
            var e = a(d);
            this.addAriaAndCollapsedClass(b(e), e)
        }, this)).end()
    }, d.prototype.addAriaAndCollapsedClass = function (a, b) {
        var c = a.hasClass("in");
        a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c)
    };
    var e = a.fn.collapse;
    a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function () {
        return a.fn.collapse = e, this
    }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (d) {
        var e = a(this);
        e.attr("data-target") || d.preventDefault();
        var f = b(e), g = f.data("bs.collapse"), h = g ? "toggle" : e.data();
        c.call(f, h)
    })
}(jQuery), +function (a) {
    "use strict";
    function b(b) {
        b && 3 === b.which || (a(e).remove(), a(f).each(function () {
            var d = a(this), e = c(d), f = {relatedTarget: this};
            e.hasClass("open") && (e.trigger(b = a.Event("hide.bs.dropdown", f)), b.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger("hidden.bs.dropdown", f)))
        }))
    }

    function c(b) {
        var c = b.attr("data-target");
        c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
        var d = c && a(c);
        return d && d.length ? d : b.parent()
    }

    function d(b) {
        return this.each(function () {
            var c = a(this), d = c.data("bs.dropdown");
            d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c)
        })
    }

    var e = ".dropdown-backdrop", f = '[data-toggle="dropdown"]', g = function (b) {
        a(b).on("click.bs.dropdown", this.toggle)
    };
    g.VERSION = "3.3.4", g.prototype.toggle = function (d) {
        var e = a(this);
        if (!e.is(".disabled, :disabled")) {
            var f = c(e), g = f.hasClass("open");
            if (b(), !g) {
                "ontouchstart"in document.documentElement && !f.closest(".navbar-nav").length && a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click", b);
                var h = {relatedTarget: this};
                if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented())return;
                e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger("shown.bs.dropdown", h)
            }
            return !1
        }
    }, g.prototype.keydown = function (b) {
        if (/(38|40|27|32)/.test(b.which) && !/input|textarea/i.test(b.target.tagName)) {
            var d = a(this);
            if (b.preventDefault(), b.stopPropagation(), !d.is(".disabled, :disabled")) {
                var e = c(d), g = e.hasClass("open");
                if (!g && 27 != b.which || g && 27 == b.which)return 27 == b.which && e.find(f).trigger("focus"), d.trigger("click");
                var h = " li:not(.disabled):visible a", i = e.find('[role="menu"]' + h + ', [role="listbox"]' + h);
                if (i.length) {
                    var j = i.index(b.target);
                    38 == b.which && j > 0 && j--, 40 == b.which && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus")
                }
            }
        }
    };
    var h = a.fn.dropdown;
    a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function () {
        return a.fn.dropdown = h, this
    }, a(document).on("click.bs.dropdown.data-api", b).on("click.bs.dropdown.data-api", ".dropdown form", function (a) {
        a.stopPropagation()
    }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="menu"]', g.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="listbox"]', g.prototype.keydown)
}(jQuery), +function (a) {
    "use strict";
    function b(b, d) {
        return this.each(function () {
            var e = a(this), f = e.data("bs.modal"), g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
            f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d)
        })
    }

    var c = function (b, c) {
        this.options = c, this.$body = a(document.body), this.$element = a(b), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function () {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    c.VERSION = "3.3.4", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, c.prototype.toggle = function (a) {
        return this.isShown ? this.hide() : this.show(a)
    }, c.prototype.show = function (b) {
        var d = this, e = a.Event("show.bs.modal", {relatedTarget: b});
        this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
            d.$element.one("mouseup.dismiss.bs.modal", function (b) {
                a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function () {
            var e = a.support.transition && d.$element.hasClass("fade");
            d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in").attr("aria-hidden", !1), d.enforceFocus();
            var f = a.Event("shown.bs.modal", {relatedTarget: b});
            e ? d.$dialog.one("bsTransitionEnd", function () {
                d.$element.trigger("focus").trigger(f)
            }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f)
        }))
    }, c.prototype.hide = function (b) {
        b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal())
    }, c.prototype.enforceFocus = function () {
        a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function (a) {
            this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus")
        }, this))
    }, c.prototype.escape = function () {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function (a) {
            27 == a.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, c.prototype.resize = function () {
        this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal")
    }, c.prototype.hideModal = function () {
        var a = this;
        this.$element.hide(), this.backdrop(function () {
            a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal")
        })
    }, c.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, c.prototype.backdrop = function (b) {
        var d = this, e = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var f = a.support.transition && e;
            if (this.$backdrop = a('<div class="modal-backdrop ' + e + '" />').appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function (a) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b)return;
            f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var g = function () {
                d.removeBackdrop(), b && b()
            };
            a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g()
        } else b && b()
    }, c.prototype.handleUpdate = function () {
        this.adjustDialog()
    }, c.prototype.adjustDialog = function () {
        var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : ""
        })
    }, c.prototype.resetAdjustments = function () {
        this.$element.css({paddingLeft: "", paddingRight: ""})
    }, c.prototype.checkScrollbar = function () {
        var a = window.innerWidth;
        if (!a) {
            var b = document.documentElement.getBoundingClientRect();
            a = b.right - Math.abs(b.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < a, this.scrollbarWidth = this.measureScrollbar()
    }, c.prototype.setScrollbar = function () {
        var a = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth)
    }, c.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", this.originalBodyPad)
    }, c.prototype.measureScrollbar = function () {
        var a = document.createElement("div");
        a.className = "modal-scrollbar-measure", this.$body.append(a);
        var b = a.offsetWidth - a.clientWidth;
        return this.$body[0].removeChild(a), b
    };
    var d = a.fn.modal;
    a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function () {
        return a.fn.modal = d, this
    }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (c) {
        var d = a(this), e = d.attr("href"), f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")), g = f.data("bs.modal") ? "toggle" : a.extend({remote: !/#/.test(e) && e}, f.data(), d.data());
        d.is("a") && c.preventDefault(), f.one("show.bs.modal", function (a) {
            a.isDefaultPrevented() || f.one("hidden.bs.modal", function () {
                d.is(":visible") && d.trigger("focus")
            })
        }), b.call(f, g, this)
    })
}(jQuery), +function (a) {
    "use strict";
    function b(b) {
        return this.each(function () {
            var d = a(this), e = d.data("bs.tooltip"), f = "object" == typeof b && b;
            (e || !/destroy|hide/.test(b)) && (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]())
        })
    }

    var c = function (a, b) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.init("tooltip", a, b)
    };
    c.VERSION = "3.3.4", c.TRANSITION_DURATION = 150, c.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {selector: "body", padding: 0}
    }, c.prototype.init = function (b, c, d) {
        if (this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(this.options.viewport.selector || this.options.viewport), this.$element[0]instanceof document.constructor && !this.options.selector)throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
            var g = e[f];
            if ("click" == g)this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this)); else if ("manual" != g) {
                var h = "hover" == g ? "mouseenter" : "focusin", i = "hover" == g ? "mouseleave" : "focusout";
                this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = a.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, c.prototype.getDefaults = function () {
        return c.DEFAULTS
    }, c.prototype.getOptions = function (b) {
        return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
            show: b.delay,
            hide: b.delay
        }), b
    }, c.prototype.getDelegateOptions = function () {
        var b = {}, c = this.getDefaults();
        return this._options && a.each(this._options, function (a, d) {
            c[a] != d && (b[a] = d)
        }), b
    }, c.prototype.enter = function (b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        return c && c.$tip && c.$tip.is(":visible") ? void(c.hoverState = "in") : (c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void(c.timeout = setTimeout(function () {
            "in" == c.hoverState && c.show()
        }, c.options.delay.show)) : c.show())
    }, c.prototype.leave = function (b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void(c.timeout = setTimeout(function () {
            "out" == c.hoverState && c.hide()
        }, c.options.delay.hide)) : c.hide()
    }, c.prototype.show = function () {
        var b = a.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(b);
            var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (b.isDefaultPrevented() || !d)return;
            var e = this, f = this.tip(), g = this.getUID(this.type);
            this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade");
            var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement, i = /\s?auto?\s?/i, j = i.test(h);
            j && (h = h.replace(i, "") || "top"), f.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element);
            var k = this.getPosition(), l = f[0].offsetWidth, m = f[0].offsetHeight;
            if (j) {
                var n = h, o = this.options.container ? a(this.options.container) : this.$element.parent(), p = this.getPosition(o);
                h = "bottom" == h && k.bottom + m > p.bottom ? "top" : "top" == h && k.top - m < p.top ? "bottom" : "right" == h && k.right + l > p.width ? "left" : "left" == h && k.left - l < p.left ? "right" : h, f.removeClass(n).addClass(h)
            }
            var q = this.getCalculatedOffset(h, k, l, m);
            this.applyPlacement(q, h);
            var r = function () {
                var a = e.hoverState;
                e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e)
            };
            a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", r).emulateTransitionEnd(c.TRANSITION_DURATION) : r()
        }
    }, c.prototype.applyPlacement = function (b, c) {
        var d = this.tip(), e = d[0].offsetWidth, f = d[0].offsetHeight, g = parseInt(d.css("margin-top"), 10), h = parseInt(d.css("margin-left"), 10);
        isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top = b.top + g, b.left = b.left + h, a.offset.setOffset(d[0], a.extend({
            using: function (a) {
                d.css({top: Math.round(a.top), left: Math.round(a.left)})
            }
        }, b), 0), d.addClass("in");
        var i = d[0].offsetWidth, j = d[0].offsetHeight;
        "top" == c && j != f && (b.top = b.top + f - j);
        var k = this.getViewportAdjustedDelta(c, b, i, j);
        k.left ? b.left += k.left : b.top += k.top;
        var l = /top|bottom/.test(c), m = l ? 2 * k.left - e + i : 2 * k.top - f + j, n = l ? "offsetWidth" : "offsetHeight";
        d.offset(b), this.replaceArrow(m, d[0][n], l)
    }, c.prototype.replaceArrow = function (a, b, c) {
        this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "")
    }, c.prototype.setContent = function () {
        var a = this.tip(), b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
    }, c.prototype.hide = function (b) {
        function d() {
            "in" != e.hoverState && f.detach(), e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b()
        }

        var e = this, f = a(this.$tip), g = a.Event("hide.bs." + this.type);
        return this.$element.trigger(g), g.isDefaultPrevented() ? void 0 : (f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), this.hoverState = null, this)
    }, c.prototype.fixTitle = function () {
        var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
    }, c.prototype.hasContent = function () {
        return this.getTitle()
    }, c.prototype.getPosition = function (b) {
        b = b || this.$element;
        var c = b[0], d = "BODY" == c.tagName, e = c.getBoundingClientRect();
        null == e.width && (e = a.extend({}, e, {width: e.right - e.left, height: e.bottom - e.top}));
        var f = d ? {
            top: 0,
            left: 0
        } : b.offset(), g = {scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop()}, h = d ? {
            width: a(window).width(),
            height: a(window).height()
        } : null;
        return a.extend({}, e, g, h, f)
    }, c.prototype.getCalculatedOffset = function (a, b, c, d) {
        return "bottom" == a ? {
            top: b.top + b.height,
            left: b.left + b.width / 2 - c / 2
        } : "top" == a ? {
            top: b.top - d,
            left: b.left + b.width / 2 - c / 2
        } : "left" == a ? {top: b.top + b.height / 2 - d / 2, left: b.left - c} : {
            top: b.top + b.height / 2 - d / 2,
            left: b.left + b.width
        }
    }, c.prototype.getViewportAdjustedDelta = function (a, b, c, d) {
        var e = {top: 0, left: 0};
        if (!this.$viewport)return e;
        var f = this.options.viewport && this.options.viewport.padding || 0, g = this.getPosition(this.$viewport);
        if (/right|left/.test(a)) {
            var h = b.top - f - g.scroll, i = b.top + f - g.scroll + d;
            h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i)
        } else {
            var j = b.left - f, k = b.left + f + c;
            j < g.left ? e.left = g.left - j : k > g.width && (e.left = g.left + g.width - k)
        }
        return e
    }, c.prototype.getTitle = function () {
        var a, b = this.$element, c = this.options;
        return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
    }, c.prototype.getUID = function (a) {
        do a += ~~(1e6 * Math.random()); while (document.getElementById(a));
        return a
    }, c.prototype.tip = function () {
        return this.$tip = this.$tip || a(this.options.template)
    }, c.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, c.prototype.enable = function () {
        this.enabled = !0
    }, c.prototype.disable = function () {
        this.enabled = !1
    }, c.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled
    }, c.prototype.toggle = function (b) {
        var c = this;
        b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
    }, c.prototype.destroy = function () {
        var a = this;
        clearTimeout(this.timeout), this.hide(function () {
            a.$element.off("." + a.type).removeData("bs." + a.type)
        })
    };
    var d = a.fn.tooltip;
    a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function () {
        return a.fn.tooltip = d, this
    }
}(jQuery), +function (a) {
    "use strict";
    function b(b) {
        return this.each(function () {
            var d = a(this), e = d.data("bs.popover"), f = "object" == typeof b && b;
            (e || !/destroy|hide/.test(b)) && (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]())
        })
    }

    var c = function (a, b) {
        this.init("popover", a, b)
    };
    if (!a.fn.tooltip)throw new Error("Popover requires tooltip.js");
    c.VERSION = "3.3.4", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function () {
        return c.DEFAULTS
    }, c.prototype.setContent = function () {
        var a = this.tip(), b = this.getTitle(), c = this.getContent();
        a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide()
    }, c.prototype.hasContent = function () {
        return this.getTitle() || this.getContent()
    }, c.prototype.getContent = function () {
        var a = this.$element, b = this.options;
        return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
    }, c.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var d = a.fn.popover;
    a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function () {
        return a.fn.popover = d, this
    }
}(jQuery), +function (a) {
    "use strict";
    function b(c, d) {
        this.$body = a(document.body), this.$scrollElement = a(a(c).is(document.body) ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)), this.refresh(), this.process()
    }

    function c(c) {
        return this.each(function () {
            var d = a(this), e = d.data("bs.scrollspy"), f = "object" == typeof c && c;
            e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]()
        })
    }

    b.VERSION = "3.3.4", b.DEFAULTS = {offset: 10}, b.prototype.getScrollHeight = function () {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, b.prototype.refresh = function () {
        var b = this, c = "offset", d = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), a.isWindow(this.$scrollElement[0]) || (c = "position", d = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
            var b = a(this), e = b.data("target") || b.attr("href"), f = /^#./.test(e) && a(e);
            return f && f.length && f.is(":visible") && [[f[c]().top + d, e]] || null
        }).sort(function (a, b) {
            return a[0] - b[0]
        }).each(function () {
            b.offsets.push(this[0]), b.targets.push(this[1])
        })
    }, b.prototype.process = function () {
        var a, b = this.$scrollElement.scrollTop() + this.options.offset, c = this.getScrollHeight(), d = this.options.offset + c - this.$scrollElement.height(), e = this.offsets, f = this.targets, g = this.activeTarget;
        if (this.scrollHeight != c && this.refresh(), b >= d)return g != (a = f[f.length - 1]) && this.activate(a);
        if (g && b < e[0])return this.activeTarget = null, this.clear();
        for (a = e.length; a--;)g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a])
    }, b.prototype.activate = function (b) {
        this.activeTarget = b, this.clear();
        var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]', d = a(c).parents("li").addClass("active");
        d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy")
    }, b.prototype.clear = function () {
        a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var d = a.fn.scrollspy;
    a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function () {
        return a.fn.scrollspy = d, this
    }, a(window).on("load.bs.scrollspy.data-api", function () {
        a('[data-spy="scroll"]').each(function () {
            var b = a(this);
            c.call(b, b.data())
        })
    })
}(jQuery), +function (a) {
    "use strict";
    function b(b) {
        return this.each(function () {
            var d = a(this), e = d.data("bs.tab");
            e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]()
        })
    }

    var c = function (b) {
        this.element = a(b)
    };
    c.VERSION = "3.3.4", c.TRANSITION_DURATION = 150, c.prototype.show = function () {
        var b = this.element, c = b.closest("ul:not(.dropdown-menu)"), d = b.data("target");
        if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
            var e = c.find(".active:last a"), f = a.Event("hide.bs.tab", {relatedTarget: b[0]}), g = a.Event("show.bs.tab", {relatedTarget: e[0]});
            if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
                var h = a(d);
                this.activate(b.closest("li"), c), this.activate(h, h.parent(), function () {
                    e.trigger({type: "hidden.bs.tab", relatedTarget: b[0]}), b.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: e[0]
                    })
                })
            }
        }
    }, c.prototype.activate = function (b, d, e) {
        function f() {
            g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu").length && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), e && e()
        }

        var g = d.find("> .active"), h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);
        g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass("in")
    };
    var d = a.fn.tab;
    a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function () {
        return a.fn.tab = d, this
    };
    var e = function (c) {
        c.preventDefault(), b.call(a(this), "show")
    };
    a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e)
}(jQuery), +function (a) {
    "use strict";
    function b(b) {
        return this.each(function () {
            var d = a(this), e = d.data("bs.affix"), f = "object" == typeof b && b;
            e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]()
        })
    }

    var c = function (b, d) {
        this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    c.VERSION = "3.3.4", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = {
        offset: 0,
        target: window
    }, c.prototype.getState = function (a, b, c, d) {
        var e = this.$target.scrollTop(), f = this.$element.offset(), g = this.$target.height();
        if (null != c && "top" == this.affixed)return c > e ? "top" : !1;
        if ("bottom" == this.affixed)return null != c ? e + this.unpin <= f.top ? !1 : "bottom" : a - d >= e + g ? !1 : "bottom";
        var h = null == this.affixed, i = h ? e : f.top, j = h ? g : b;
        return null != c && c >= e ? "top" : null != d && i + j >= a - d ? "bottom" : !1
    }, c.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset)return this.pinnedOffset;
        this.$element.removeClass(c.RESET).addClass("affix");
        var a = this.$target.scrollTop(), b = this.$element.offset();
        return this.pinnedOffset = b.top - a
    }, c.prototype.checkPositionWithEventLoop = function () {
        setTimeout(a.proxy(this.checkPosition, this), 1)
    }, c.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
            var b = this.$element.height(), d = this.options.offset, e = d.top, f = d.bottom, g = a(document.body).height();
            "object" != typeof d && (f = e = d), "function" == typeof e && (e = d.top(this.$element)), "function" == typeof f && (f = d.bottom(this.$element));
            var h = this.getState(g, b, e, f);
            if (this.affixed != h) {
                null != this.unpin && this.$element.css("top", "");
                var i = "affix" + (h ? "-" + h : ""), j = a.Event(i + ".bs.affix");
                if (this.$element.trigger(j), j.isDefaultPrevented())return;
                this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == h && this.$element.offset({top: g - b - f})
        }
    };
    var d = a.fn.affix;
    a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function () {
        return a.fn.affix = d, this
    }, a(window).on("load", function () {
        a('[data-spy="affix"]').each(function () {
            var c = a(this), d = c.data();
            d.offset = d.offset || {}, null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d)
        })
    })
}(jQuery);
/*
 Leaflet, a JavaScript library for mobile-friendly interactive maps. http://leafletjs.com
 (c) 2010-2013, Vladimir Agafonkin
 (c) 2010-2011, CloudMade
 */
!function (t, e, i) {
    var n = t.L, o = {};
    o.version = "0.7.3", "object" == typeof module && "object" == typeof module.exports ? module.exports = o : "function" == typeof define && define.amd && define(o), o.noConflict = function () {
        return t.L = n, this
    }, t.L = o, o.Util = {
        extend: function (t) {
            var e, i, n, o, s = Array.prototype.slice.call(arguments, 1);
            for (i = 0, n = s.length; n > i; i++) {
                o = s[i] || {};
                for (e in o)o.hasOwnProperty(e) && (t[e] = o[e])
            }
            return t
        }, bind: function (t, e) {
            var i = arguments.length > 2 ? Array.prototype.slice.call(arguments, 2) : null;
            return function () {
                return t.apply(e, i || arguments)
            }
        }, stamp: function () {
            var t = 0, e = "_leaflet_id";
            return function (i) {
                return i[e] = i[e] || ++t, i[e]
            }
        }(), invokeEach: function (t, e, i) {
            var n, o;
            if ("object" == typeof t) {
                o = Array.prototype.slice.call(arguments, 3);
                for (n in t)e.apply(i, [n, t[n]].concat(o));
                return !0
            }
            return !1
        }, limitExecByInterval: function (t, e, i) {
            var n, o;
            return function s() {
                var a = arguments;
                return n ? void(o = !0) : (n = !0, setTimeout(function () {
                    n = !1, o && (s.apply(i, a), o = !1)
                }, e), void t.apply(i, a))
            }
        }, falseFn: function () {
            return !1
        }, formatNum: function (t, e) {
            var i = Math.pow(10, e || 5);
            return Math.round(t * i) / i
        }, trim: function (t) {
            return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
        }, splitWords: function (t) {
            return o.Util.trim(t).split(/\s+/)
        }, setOptions: function (t, e) {
            return t.options = o.extend({}, t.options, e), t.options
        }, getParamString: function (t, e, i) {
            var n = [];
            for (var o in t)n.push(encodeURIComponent(i ? o.toUpperCase() : o) + "=" + encodeURIComponent(t[o]));
            return (e && -1 !== e.indexOf("?") ? "&" : "?") + n.join("&")
        }, template: function (t, e) {
            return t.replace(/\{ *([\w_]+) *\}/g, function (t, n) {
                var o = e[n];
                if (o === i)throw new Error("No value provided for variable " + t);
                return "function" == typeof o && (o = o(e)), o
            })
        }, isArray: Array.isArray || function (t) {
            return "[object Array]" === Object.prototype.toString.call(t)
        }, emptyImageUrl: "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
    }, function () {
        function e(e) {
            var i, n, o = ["webkit", "moz", "o", "ms"];
            for (i = 0; i < o.length && !n; i++)n = t[o[i] + e];
            return n
        }

        function i(e) {
            var i = +new Date, o = Math.max(0, 16 - (i - n));
            return n = i + o, t.setTimeout(e, o)
        }

        var n = 0, s = t.requestAnimationFrame || e("RequestAnimationFrame") || i, a = t.cancelAnimationFrame || e("CancelAnimationFrame") || e("CancelRequestAnimationFrame") || function (e) {
                t.clearTimeout(e)
            };
        o.Util.requestAnimFrame = function (e, n, a, r) {
            return e = o.bind(e, n), a && s === i ? void e() : s.call(t, e, r)
        }, o.Util.cancelAnimFrame = function (e) {
            e && a.call(t, e)
        }
    }(), o.extend = o.Util.extend, o.bind = o.Util.bind, o.stamp = o.Util.stamp, o.setOptions = o.Util.setOptions, o.Class = function () {
    }, o.Class.extend = function (t) {
        var e = function () {
            this.initialize && this.initialize.apply(this, arguments), this._initHooks && this.callInitHooks()
        }, i = function () {
        };
        i.prototype = this.prototype;
        var n = new i;
        n.constructor = e, e.prototype = n;
        for (var s in this)this.hasOwnProperty(s) && "prototype" !== s && (e[s] = this[s]);
        t.statics && (o.extend(e, t.statics), delete t.statics), t.includes && (o.Util.extend.apply(null, [n].concat(t.includes)), delete t.includes), t.options && n.options && (t.options = o.extend({}, n.options, t.options)), o.extend(n, t), n._initHooks = [];
        var a = this;
        return e.__super__ = a.prototype, n.callInitHooks = function () {
            if (!this._initHooksCalled) {
                a.prototype.callInitHooks && a.prototype.callInitHooks.call(this), this._initHooksCalled = !0;
                for (var t = 0, e = n._initHooks.length; e > t; t++)n._initHooks[t].call(this)
            }
        }, e
    }, o.Class.include = function (t) {
        o.extend(this.prototype, t)
    }, o.Class.mergeOptions = function (t) {
        o.extend(this.prototype.options, t)
    }, o.Class.addInitHook = function (t) {
        var e = Array.prototype.slice.call(arguments, 1), i = "function" == typeof t ? t : function () {
            this[t].apply(this, e)
        };
        this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(i)
    };
    var s = "_leaflet_events";
    o.Mixin = {}, o.Mixin.Events = {
        addEventListener: function (t, e, i) {
            if (o.Util.invokeEach(t, this.addEventListener, this, e, i))return this;
            var n, a, r, h, l, u, c, d = this[s] = this[s] || {}, p = i && i !== this && o.stamp(i);
            for (t = o.Util.splitWords(t), n = 0, a = t.length; a > n; n++)r = {
                action: e,
                context: i || this
            }, h = t[n], p ? (l = h + "_idx", u = l + "_len", c = d[l] = d[l] || {}, c[p] || (c[p] = [], d[u] = (d[u] || 0) + 1), c[p].push(r)) : (d[h] = d[h] || [], d[h].push(r));
            return this
        }, hasEventListeners: function (t) {
            var e = this[s];
            return !!e && (t in e && e[t].length > 0 || t + "_idx"in e && e[t + "_idx_len"] > 0)
        }, removeEventListener: function (t, e, i) {
            if (!this[s])return this;
            if (!t)return this.clearAllEventListeners();
            if (o.Util.invokeEach(t, this.removeEventListener, this, e, i))return this;
            var n, a, r, h, l, u, c, d, p, _ = this[s], m = i && i !== this && o.stamp(i);
            for (t = o.Util.splitWords(t), n = 0, a = t.length; a > n; n++)if (r = t[n], u = r + "_idx", c = u + "_len", d = _[u], e) {
                if (h = m && d ? d[m] : _[r]) {
                    for (l = h.length - 1; l >= 0; l--)h[l].action !== e || i && h[l].context !== i || (p = h.splice(l, 1), p[0].action = o.Util.falseFn);
                    i && d && 0 === h.length && (delete d[m], _[c]--)
                }
            } else delete _[r], delete _[u], delete _[c];
            return this
        }, clearAllEventListeners: function () {
            return delete this[s], this
        }, fireEvent: function (t, e) {
            if (!this.hasEventListeners(t))return this;
            var i, n, a, r, h, l = o.Util.extend({}, e, {type: t, target: this}), u = this[s];
            if (u[t])for (i = u[t].slice(), n = 0, a = i.length; a > n; n++)i[n].action.call(i[n].context, l);
            r = u[t + "_idx"];
            for (h in r)if (i = r[h].slice())for (n = 0, a = i.length; a > n; n++)i[n].action.call(i[n].context, l);
            return this
        }, addOneTimeEventListener: function (t, e, i) {
            if (o.Util.invokeEach(t, this.addOneTimeEventListener, this, e, i))return this;
            var n = o.bind(function () {
                this.removeEventListener(t, e, i).removeEventListener(t, n, i)
            }, this);
            return this.addEventListener(t, e, i).addEventListener(t, n, i)
        }
    }, o.Mixin.Events.on = o.Mixin.Events.addEventListener, o.Mixin.Events.off = o.Mixin.Events.removeEventListener, o.Mixin.Events.once = o.Mixin.Events.addOneTimeEventListener, o.Mixin.Events.fire = o.Mixin.Events.fireEvent, function () {
        var n = "ActiveXObject"in t, s = n && !e.addEventListener, a = navigator.userAgent.toLowerCase(), r = -1 !== a.indexOf("webkit"), h = -1 !== a.indexOf("chrome"), l = -1 !== a.indexOf("phantom"), u = -1 !== a.indexOf("android"), c = -1 !== a.search("android [23]"), d = -1 !== a.indexOf("gecko"), p = typeof orientation != i + "", _ = t.navigator && t.navigator.msPointerEnabled && t.navigator.msMaxTouchPoints && !t.PointerEvent, m = t.PointerEvent && t.navigator.pointerEnabled && t.navigator.maxTouchPoints || _, f = "devicePixelRatio"in t && t.devicePixelRatio > 1 || "matchMedia"in t && t.matchMedia("(min-resolution:144dpi)") && t.matchMedia("(min-resolution:144dpi)").matches, g = e.documentElement, v = n && "transition"in g.style, y = "WebKitCSSMatrix"in t && "m11"in new t.WebKitCSSMatrix && !c, P = "MozPerspective"in g.style, L = "OTransition"in g.style, x = !t.L_DISABLE_3D && (v || y || P || L) && !l, w = !t.L_NO_TOUCH && !l && function () {
                var t = "ontouchstart";
                if (m || t in g)return !0;
                var i = e.createElement("div"), n = !1;
                return i.setAttribute ? (i.setAttribute(t, "return;"), "function" == typeof i[t] && (n = !0), i.removeAttribute(t), i = null, n) : !1
            }();
        o.Browser = {
            ie: n,
            ielt9: s,
            webkit: r,
            gecko: d && !r && !t.opera && !n,
            android: u,
            android23: c,
            chrome: h,
            ie3d: v,
            webkit3d: y,
            gecko3d: P,
            opera3d: L,
            any3d: x,
            mobile: p,
            mobileWebkit: p && r,
            mobileWebkit3d: p && y,
            mobileOpera: p && t.opera,
            touch: w,
            msPointer: _,
            pointer: m,
            retina: f
        }
    }(), o.Point = function (t, e, i) {
        this.x = i ? Math.round(t) : t, this.y = i ? Math.round(e) : e
    }, o.Point.prototype = {
        clone: function () {
            return new o.Point(this.x, this.y)
        }, add: function (t) {
            return this.clone()._add(o.point(t))
        }, _add: function (t) {
            return this.x += t.x, this.y += t.y, this
        }, subtract: function (t) {
            return this.clone()._subtract(o.point(t))
        }, _subtract: function (t) {
            return this.x -= t.x, this.y -= t.y, this
        }, divideBy: function (t) {
            return this.clone()._divideBy(t)
        }, _divideBy: function (t) {
            return this.x /= t, this.y /= t, this
        }, multiplyBy: function (t) {
            return this.clone()._multiplyBy(t)
        }, _multiplyBy: function (t) {
            return this.x *= t, this.y *= t, this
        }, round: function () {
            return this.clone()._round()
        }, _round: function () {
            return this.x = Math.round(this.x), this.y = Math.round(this.y), this
        }, floor: function () {
            return this.clone()._floor()
        }, _floor: function () {
            return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
        }, distanceTo: function (t) {
            t = o.point(t);
            var e = t.x - this.x, i = t.y - this.y;
            return Math.sqrt(e * e + i * i)
        }, equals: function (t) {
            return t = o.point(t), t.x === this.x && t.y === this.y
        }, contains: function (t) {
            return t = o.point(t), Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y)
        }, toString: function () {
            return "Point(" + o.Util.formatNum(this.x) + ", " + o.Util.formatNum(this.y) + ")"
        }
    }, o.point = function (t, e, n) {
        return t instanceof o.Point ? t : o.Util.isArray(t) ? new o.Point(t[0], t[1]) : t === i || null === t ? t : new o.Point(t, e, n)
    }, o.Bounds = function (t, e) {
        if (t)for (var i = e ? [t, e] : t, n = 0, o = i.length; o > n; n++)this.extend(i[n])
    }, o.Bounds.prototype = {
        extend: function (t) {
            return t = o.point(t), this.min || this.max ? (this.min.x = Math.min(t.x, this.min.x), this.max.x = Math.max(t.x, this.max.x), this.min.y = Math.min(t.y, this.min.y), this.max.y = Math.max(t.y, this.max.y)) : (this.min = t.clone(), this.max = t.clone()), this
        }, getCenter: function (t) {
            return new o.Point((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, t)
        }, getBottomLeft: function () {
            return new o.Point(this.min.x, this.max.y)
        }, getTopRight: function () {
            return new o.Point(this.max.x, this.min.y)
        }, getSize: function () {
            return this.max.subtract(this.min)
        }, contains: function (t) {
            var e, i;
            return t = "number" == typeof t[0] || t instanceof o.Point ? o.point(t) : o.bounds(t), t instanceof o.Bounds ? (e = t.min, i = t.max) : e = i = t, e.x >= this.min.x && i.x <= this.max.x && e.y >= this.min.y && i.y <= this.max.y
        }, intersects: function (t) {
            t = o.bounds(t);
            var e = this.min, i = this.max, n = t.min, s = t.max, a = s.x >= e.x && n.x <= i.x, r = s.y >= e.y && n.y <= i.y;
            return a && r
        }, isValid: function () {
            return !(!this.min || !this.max)
        }
    }, o.bounds = function (t, e) {
        return !t || t instanceof o.Bounds ? t : new o.Bounds(t, e)
    }, o.Transformation = function (t, e, i, n) {
        this._a = t, this._b = e, this._c = i, this._d = n
    }, o.Transformation.prototype = {
        transform: function (t, e) {
            return this._transform(t.clone(), e)
        }, _transform: function (t, e) {
            return e = e || 1, t.x = e * (this._a * t.x + this._b), t.y = e * (this._c * t.y + this._d), t
        }, untransform: function (t, e) {
            return e = e || 1, new o.Point((t.x / e - this._b) / this._a, (t.y / e - this._d) / this._c)
        }
    }, o.DomUtil = {
        get: function (t) {
            return "string" == typeof t ? e.getElementById(t) : t
        }, getStyle: function (t, i) {
            var n = t.style[i];
            if (!n && t.currentStyle && (n = t.currentStyle[i]), (!n || "auto" === n) && e.defaultView) {
                var o = e.defaultView.getComputedStyle(t, null);
                n = o ? o[i] : null
            }
            return "auto" === n ? null : n
        }, getViewportOffset: function (t) {
            var i, n = 0, s = 0, a = t, r = e.body, h = e.documentElement;
            do {
                if (n += a.offsetTop || 0, s += a.offsetLeft || 0, n += parseInt(o.DomUtil.getStyle(a, "borderTopWidth"), 10) || 0, s += parseInt(o.DomUtil.getStyle(a, "borderLeftWidth"), 10) || 0, i = o.DomUtil.getStyle(a, "position"), a.offsetParent === r && "absolute" === i)break;
                if ("fixed" === i) {
                    n += r.scrollTop || h.scrollTop || 0, s += r.scrollLeft || h.scrollLeft || 0;
                    break
                }
                if ("relative" === i && !a.offsetLeft) {
                    var l = o.DomUtil.getStyle(a, "width"), u = o.DomUtil.getStyle(a, "max-width"), c = a.getBoundingClientRect();
                    ("none" !== l || "none" !== u) && (s += c.left + a.clientLeft), n += c.top + (r.scrollTop || h.scrollTop || 0);
                    break
                }
                a = a.offsetParent
            } while (a);
            a = t;
            do {
                if (a === r)break;
                n -= a.scrollTop || 0, s -= a.scrollLeft || 0, a = a.parentNode
            } while (a);
            return new o.Point(s, n)
        }, documentIsLtr: function () {
            return o.DomUtil._docIsLtrCached || (o.DomUtil._docIsLtrCached = !0, o.DomUtil._docIsLtr = "ltr" === o.DomUtil.getStyle(e.body, "direction")), o.DomUtil._docIsLtr
        }, create: function (t, i, n) {
            var o = e.createElement(t);
            return o.className = i, n && n.appendChild(o), o
        }, hasClass: function (t, e) {
            if (t.classList !== i)return t.classList.contains(e);
            var n = o.DomUtil._getClass(t);
            return n.length > 0 && new RegExp("(^|\\s)" + e + "(\\s|$)").test(n)
        }, addClass: function (t, e) {
            if (t.classList !== i)for (var n = o.Util.splitWords(e), s = 0, a = n.length; a > s; s++)t.classList.add(n[s]); else if (!o.DomUtil.hasClass(t, e)) {
                var r = o.DomUtil._getClass(t);
                o.DomUtil._setClass(t, (r ? r + " " : "") + e)
            }
        }, removeClass: function (t, e) {
            t.classList !== i ? t.classList.remove(e) : o.DomUtil._setClass(t, o.Util.trim((" " + o.DomUtil._getClass(t) + " ").replace(" " + e + " ", " ")))
        }, _setClass: function (t, e) {
            t.className.baseVal === i ? t.className = e : t.className.baseVal = e
        }, _getClass: function (t) {
            return t.className.baseVal === i ? t.className : t.className.baseVal
        }, setOpacity: function (t, e) {
            if ("opacity"in t.style)t.style.opacity = e; else if ("filter"in t.style) {
                var i = !1, n = "DXImageTransform.Microsoft.Alpha";
                try {
                    i = t.filters.item(n)
                } catch (o) {
                    if (1 === e)return
                }
                e = Math.round(100 * e), i ? (i.Enabled = 100 !== e, i.Opacity = e) : t.style.filter += " progid:" + n + "(opacity=" + e + ")"
            }
        }, testProp: function (t) {
            for (var i = e.documentElement.style, n = 0; n < t.length; n++)if (t[n]in i)return t[n];
            return !1
        }, getTranslateString: function (t) {
            var e = o.Browser.webkit3d, i = "translate" + (e ? "3d" : "") + "(", n = (e ? ",0" : "") + ")";
            return i + t.x + "px," + t.y + "px" + n
        }, getScaleString: function (t, e) {
            var i = o.DomUtil.getTranslateString(e.add(e.multiplyBy(-1 * t))), n = " scale(" + t + ") ";
            return i + n
        }, setPosition: function (t, e, i) {
            t._leaflet_pos = e, !i && o.Browser.any3d ? t.style[o.DomUtil.TRANSFORM] = o.DomUtil.getTranslateString(e) : (t.style.left = e.x + "px", t.style.top = e.y + "px")
        }, getPosition: function (t) {
            return t._leaflet_pos
        }
    }, o.DomUtil.TRANSFORM = o.DomUtil.testProp(["transform", "WebkitTransform", "OTransform", "MozTransform", "msTransform"]), o.DomUtil.TRANSITION = o.DomUtil.testProp(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]), o.DomUtil.TRANSITION_END = "webkitTransition" === o.DomUtil.TRANSITION || "OTransition" === o.DomUtil.TRANSITION ? o.DomUtil.TRANSITION + "End" : "transitionend", function () {
        if ("onselectstart"in e)o.extend(o.DomUtil, {
            disableTextSelection: function () {
                o.DomEvent.on(t, "selectstart", o.DomEvent.preventDefault)
            }, enableTextSelection: function () {
                o.DomEvent.off(t, "selectstart", o.DomEvent.preventDefault)
            }
        }); else {
            var i = o.DomUtil.testProp(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]);
            o.extend(o.DomUtil, {
                disableTextSelection: function () {
                    if (i) {
                        var t = e.documentElement.style;
                        this._userSelect = t[i], t[i] = "none"
                    }
                }, enableTextSelection: function () {
                    i && (e.documentElement.style[i] = this._userSelect, delete this._userSelect)
                }
            })
        }
        o.extend(o.DomUtil, {
            disableImageDrag: function () {
                o.DomEvent.on(t, "dragstart", o.DomEvent.preventDefault)
            }, enableImageDrag: function () {
                o.DomEvent.off(t, "dragstart", o.DomEvent.preventDefault)
            }
        })
    }(), o.LatLng = function (t, e, n) {
        if (t = parseFloat(t), e = parseFloat(e), isNaN(t) || isNaN(e))throw new Error("Invalid LatLng object: (" + t + ", " + e + ")");
        this.lat = t, this.lng = e, n !== i && (this.alt = parseFloat(n))
    }, o.extend(o.LatLng, {
        DEG_TO_RAD: Math.PI / 180,
        RAD_TO_DEG: 180 / Math.PI,
        MAX_MARGIN: 1e-9
    }), o.LatLng.prototype = {
        equals: function (t) {
            if (!t)return !1;
            t = o.latLng(t);
            var e = Math.max(Math.abs(this.lat - t.lat), Math.abs(this.lng - t.lng));
            return e <= o.LatLng.MAX_MARGIN
        }, toString: function (t) {
            return "LatLng(" + o.Util.formatNum(this.lat, t) + ", " + o.Util.formatNum(this.lng, t) + ")"
        }, distanceTo: function (t) {
            t = o.latLng(t);
            var e = 6378137, i = o.LatLng.DEG_TO_RAD, n = (t.lat - this.lat) * i, s = (t.lng - this.lng) * i, a = this.lat * i, r = t.lat * i, h = Math.sin(n / 2), l = Math.sin(s / 2), u = h * h + l * l * Math.cos(a) * Math.cos(r);
            return 2 * e * Math.atan2(Math.sqrt(u), Math.sqrt(1 - u))
        }, wrap: function (t, e) {
            var i = this.lng;
            return t = t || -180, e = e || 180, i = (i + e) % (e - t) + (t > i || i === e ? e : t), new o.LatLng(this.lat, i)
        }
    }, o.latLng = function (t, e) {
        return t instanceof o.LatLng ? t : o.Util.isArray(t) ? "number" == typeof t[0] || "string" == typeof t[0] ? new o.LatLng(t[0], t[1], t[2]) : null : t === i || null === t ? t : "object" == typeof t && "lat"in t ? new o.LatLng(t.lat, "lng"in t ? t.lng : t.lon) : e === i ? null : new o.LatLng(t, e)
    }, o.LatLngBounds = function (t, e) {
        if (t)for (var i = e ? [t, e] : t, n = 0, o = i.length; o > n; n++)this.extend(i[n])
    }, o.LatLngBounds.prototype = {
        extend: function (t) {
            if (!t)return this;
            var e = o.latLng(t);
            return t = null !== e ? e : o.latLngBounds(t), t instanceof o.LatLng ? this._southWest || this._northEast ? (this._southWest.lat = Math.min(t.lat, this._southWest.lat), this._southWest.lng = Math.min(t.lng, this._southWest.lng), this._northEast.lat = Math.max(t.lat, this._northEast.lat), this._northEast.lng = Math.max(t.lng, this._northEast.lng)) : (this._southWest = new o.LatLng(t.lat, t.lng), this._northEast = new o.LatLng(t.lat, t.lng)) : t instanceof o.LatLngBounds && (this.extend(t._southWest), this.extend(t._northEast)), this
        }, pad: function (t) {
            var e = this._southWest, i = this._northEast, n = Math.abs(e.lat - i.lat) * t, s = Math.abs(e.lng - i.lng) * t;
            return new o.LatLngBounds(new o.LatLng(e.lat - n, e.lng - s), new o.LatLng(i.lat + n, i.lng + s))
        }, getCenter: function () {
            return new o.LatLng((this._southWest.lat + this._northEast.lat) / 2, (this._southWest.lng + this._northEast.lng) / 2)
        }, getSouthWest: function () {
            return this._southWest
        }, getNorthEast: function () {
            return this._northEast
        }, getNorthWest: function () {
            return new o.LatLng(this.getNorth(), this.getWest())
        }, getSouthEast: function () {
            return new o.LatLng(this.getSouth(), this.getEast())
        }, getWest: function () {
            return this._southWest.lng
        }, getSouth: function () {
            return this._southWest.lat
        }, getEast: function () {
            return this._northEast.lng
        }, getNorth: function () {
            return this._northEast.lat
        }, contains: function (t) {
            t = "number" == typeof t[0] || t instanceof o.LatLng ? o.latLng(t) : o.latLngBounds(t);
            var e, i, n = this._southWest, s = this._northEast;
            return t instanceof o.LatLngBounds ? (e = t.getSouthWest(), i = t.getNorthEast()) : e = i = t, e.lat >= n.lat && i.lat <= s.lat && e.lng >= n.lng && i.lng <= s.lng
        }, intersects: function (t) {
            t = o.latLngBounds(t);
            var e = this._southWest, i = this._northEast, n = t.getSouthWest(), s = t.getNorthEast(), a = s.lat >= e.lat && n.lat <= i.lat, r = s.lng >= e.lng && n.lng <= i.lng;
            return a && r
        }, toBBoxString: function () {
            return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",")
        }, equals: function (t) {
            return t ? (t = o.latLngBounds(t), this._southWest.equals(t.getSouthWest()) && this._northEast.equals(t.getNorthEast())) : !1
        }, isValid: function () {
            return !(!this._southWest || !this._northEast)
        }
    }, o.latLngBounds = function (t, e) {
        return !t || t instanceof o.LatLngBounds ? t : new o.LatLngBounds(t, e)
    }, o.Projection = {}, o.Projection.SphericalMercator = {
        MAX_LATITUDE: 85.0511287798, project: function (t) {
            var e = o.LatLng.DEG_TO_RAD, i = this.MAX_LATITUDE, n = Math.max(Math.min(i, t.lat), -i), s = t.lng * e, a = n * e;
            return a = Math.log(Math.tan(Math.PI / 4 + a / 2)), new o.Point(s, a)
        }, unproject: function (t) {
            var e = o.LatLng.RAD_TO_DEG, i = t.x * e, n = (2 * Math.atan(Math.exp(t.y)) - Math.PI / 2) * e;
            return new o.LatLng(n, i)
        }
    }, o.Projection.LonLat = {
        project: function (t) {
            return new o.Point(t.lng, t.lat)
        }, unproject: function (t) {
            return new o.LatLng(t.y, t.x)
        }
    }, o.CRS = {
        latLngToPoint: function (t, e) {
            var i = this.projection.project(t), n = this.scale(e);
            return this.transformation._transform(i, n)
        }, pointToLatLng: function (t, e) {
            var i = this.scale(e), n = this.transformation.untransform(t, i);
            return this.projection.unproject(n)
        }, project: function (t) {
            return this.projection.project(t)
        }, scale: function (t) {
            return 256 * Math.pow(2, t)
        }, getSize: function (t) {
            var e = this.scale(t);
            return o.point(e, e)
        }
    }, o.CRS.Simple = o.extend({}, o.CRS, {
        projection: o.Projection.LonLat,
        transformation: new o.Transformation(1, 0, -1, 0),
        scale: function (t) {
            return Math.pow(2, t)
        }
    }), o.CRS.EPSG3857 = o.extend({}, o.CRS, {
        code: "EPSG:3857",
        projection: o.Projection.SphericalMercator,
        transformation: new o.Transformation(.5 / Math.PI, .5, -.5 / Math.PI, .5),
        project: function (t) {
            var e = this.projection.project(t), i = 6378137;
            return e.multiplyBy(i)
        }
    }), o.CRS.EPSG900913 = o.extend({}, o.CRS.EPSG3857, {code: "EPSG:900913"}), o.CRS.EPSG4326 = o.extend({}, o.CRS, {
        code: "EPSG:4326",
        projection: o.Projection.LonLat,
        transformation: new o.Transformation(1 / 360, .5, -1 / 360, .5)
    }), o.Map = o.Class.extend({
        includes: o.Mixin.Events,
        options: {
            crs: o.CRS.EPSG3857,
            fadeAnimation: o.DomUtil.TRANSITION && !o.Browser.android23,
            trackResize: !0,
            markerZoomAnimation: o.DomUtil.TRANSITION && o.Browser.any3d
        },
        initialize: function (t, e) {
            e = o.setOptions(this, e), this._initContainer(t), this._initLayout(), this._onResize = o.bind(this._onResize, this), this._initEvents(), e.maxBounds && this.setMaxBounds(e.maxBounds), e.center && e.zoom !== i && this.setView(o.latLng(e.center), e.zoom, {reset: !0}), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._tileLayersNum = 0, this.callInitHooks(), this._addLayers(e.layers)
        },
        setView: function (t, e) {
            return e = e === i ? this.getZoom() : e, this._resetView(o.latLng(t), this._limitZoom(e)), this
        },
        setZoom: function (t, e) {
            return this._loaded ? this.setView(this.getCenter(), t, {zoom: e}) : (this._zoom = this._limitZoom(t), this)
        },
        zoomIn: function (t, e) {
            return this.setZoom(this._zoom + (t || 1), e)
        },
        zoomOut: function (t, e) {
            return this.setZoom(this._zoom - (t || 1), e)
        },
        setZoomAround: function (t, e, i) {
            var n = this.getZoomScale(e), s = this.getSize().divideBy(2), a = t instanceof o.Point ? t : this.latLngToContainerPoint(t), r = a.subtract(s).multiplyBy(1 - 1 / n), h = this.containerPointToLatLng(s.add(r));
            return this.setView(h, e, {zoom: i})
        },
        fitBounds: function (t, e) {
            e = e || {}, t = t.getBounds ? t.getBounds() : o.latLngBounds(t);
            var i = o.point(e.paddingTopLeft || e.padding || [0, 0]), n = o.point(e.paddingBottomRight || e.padding || [0, 0]), s = this.getBoundsZoom(t, !1, i.add(n)), a = n.subtract(i).divideBy(2), r = this.project(t.getSouthWest(), s), h = this.project(t.getNorthEast(), s), l = this.unproject(r.add(h).divideBy(2).add(a), s);
            return s = e && e.maxZoom ? Math.min(e.maxZoom, s) : s, this.setView(l, s, e)
        },
        fitWorld: function (t) {
            return this.fitBounds([[-90, -180], [90, 180]], t)
        },
        panTo: function (t, e) {
            return this.setView(t, this._zoom, {pan: e})
        },
        panBy: function (t) {
            return this.fire("movestart"), this._rawPanBy(o.point(t)), this.fire("move"), this.fire("moveend")
        },
        setMaxBounds: function (t) {
            return t = o.latLngBounds(t), this.options.maxBounds = t, t ? (this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds, this)) : this.off("moveend", this._panInsideMaxBounds, this)
        },
        panInsideBounds: function (t, e) {
            var i = this.getCenter(), n = this._limitCenter(i, this._zoom, t);
            return i.equals(n) ? this : this.panTo(n, e)
        },
        addLayer: function (t) {
            var e = o.stamp(t);
            return this._layers[e] ? this : (this._layers[e] = t, !t.options || isNaN(t.options.maxZoom) && isNaN(t.options.minZoom) || (this._zoomBoundLayers[e] = t, this._updateZoomLevels()), this.options.zoomAnimation && o.TileLayer && t instanceof o.TileLayer && (this._tileLayersNum++, this._tileLayersToLoad++, t.on("load", this._onTileLayerLoad, this)), this._loaded && this._layerAdd(t), this)
        },
        removeLayer: function (t) {
            var e = o.stamp(t);
            return this._layers[e] ? (this._loaded && t.onRemove(this), delete this._layers[e], this._loaded && this.fire("layerremove", {layer: t}), this._zoomBoundLayers[e] && (delete this._zoomBoundLayers[e], this._updateZoomLevels()), this.options.zoomAnimation && o.TileLayer && t instanceof o.TileLayer && (this._tileLayersNum--, this._tileLayersToLoad--, t.off("load", this._onTileLayerLoad, this)), this) : this
        },
        hasLayer: function (t) {
            return t ? o.stamp(t)in this._layers : !1
        },
        eachLayer: function (t, e) {
            for (var i in this._layers)t.call(e, this._layers[i]);
            return this
        },
        invalidateSize: function (t) {
            if (!this._loaded)return this;
            t = o.extend({animate: !1, pan: !0}, t === !0 ? {animate: !0} : t);
            var e = this.getSize();
            this._sizeChanged = !0, this._initialCenter = null;
            var i = this.getSize(), n = e.divideBy(2).round(), s = i.divideBy(2).round(), a = n.subtract(s);
            return a.x || a.y ? (t.animate && t.pan ? this.panBy(a) : (t.pan && this._rawPanBy(a), this.fire("move"), t.debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(o.bind(this.fire, this, "moveend"), 200)) : this.fire("moveend")), this.fire("resize", {
                oldSize: e,
                newSize: i
            })) : this
        },
        addHandler: function (t, e) {
            if (!e)return this;
            var i = this[t] = new e(this);
            return this._handlers.push(i), this.options[t] && i.enable(), this
        },
        remove: function () {
            this._loaded && this.fire("unload"), this._initEvents("off");
            try {
                delete this._container._leaflet
            } catch (t) {
                this._container._leaflet = i
            }
            return this._clearPanes(), this._clearControlPos && this._clearControlPos(), this._clearHandlers(), this
        },
        getCenter: function () {
            return this._checkIfLoaded(), this._initialCenter && !this._moved() ? this._initialCenter : this.layerPointToLatLng(this._getCenterLayerPoint())
        },
        getZoom: function () {
            return this._zoom
        },
        getBounds: function () {
            var t = this.getPixelBounds(), e = this.unproject(t.getBottomLeft()), i = this.unproject(t.getTopRight());
            return new o.LatLngBounds(e, i)
        },
        getMinZoom: function () {
            return this.options.minZoom === i ? this._layersMinZoom === i ? 0 : this._layersMinZoom : this.options.minZoom
        },
        getMaxZoom: function () {
            return this.options.maxZoom === i ? this._layersMaxZoom === i ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom
        },
        getBoundsZoom: function (t, e, i) {
            t = o.latLngBounds(t);
            var n, s = this.getMinZoom() - (e ? 1 : 0), a = this.getMaxZoom(), r = this.getSize(), h = t.getNorthWest(), l = t.getSouthEast(), u = !0;
            i = o.point(i || [0, 0]);
            do s++, n = this.project(l, s).subtract(this.project(h, s)).add(i), u = e ? n.x < r.x || n.y < r.y : r.contains(n); while (u && a >= s);
            return u && e ? null : e ? s : s - 1
        },
        getSize: function () {
            return (!this._size || this._sizeChanged) && (this._size = new o.Point(this._container.clientWidth, this._container.clientHeight), this._sizeChanged = !1), this._size.clone()
        },
        getPixelBounds: function () {
            var t = this._getTopLeftPoint();
            return new o.Bounds(t, t.add(this.getSize()))
        },
        getPixelOrigin: function () {
            return this._checkIfLoaded(), this._initialTopLeftPoint
        },
        getPanes: function () {
            return this._panes
        },
        getContainer: function () {
            return this._container
        },
        getZoomScale: function (t) {
            var e = this.options.crs;
            return e.scale(t) / e.scale(this._zoom)
        },
        getScaleZoom: function (t) {
            return this._zoom + Math.log(t) / Math.LN2
        },
        project: function (t, e) {
            return e = e === i ? this._zoom : e, this.options.crs.latLngToPoint(o.latLng(t), e)
        },
        unproject: function (t, e) {
            return e = e === i ? this._zoom : e, this.options.crs.pointToLatLng(o.point(t), e)
        },
        layerPointToLatLng: function (t) {
            var e = o.point(t).add(this.getPixelOrigin());
            return this.unproject(e)
        },
        latLngToLayerPoint: function (t) {
            var e = this.project(o.latLng(t))._round();
            return e._subtract(this.getPixelOrigin())
        },
        containerPointToLayerPoint: function (t) {
            return o.point(t).subtract(this._getMapPanePos())
        },
        layerPointToContainerPoint: function (t) {
            return o.point(t).add(this._getMapPanePos())
        },
        containerPointToLatLng: function (t) {
            var e = this.containerPointToLayerPoint(o.point(t));
            return this.layerPointToLatLng(e)
        },
        latLngToContainerPoint: function (t) {
            return this.layerPointToContainerPoint(this.latLngToLayerPoint(o.latLng(t)))
        },
        mouseEventToContainerPoint: function (t) {
            return o.DomEvent.getMousePosition(t, this._container)
        },
        mouseEventToLayerPoint: function (t) {
            return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))
        },
        mouseEventToLatLng: function (t) {
            return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))
        },
        _initContainer: function (t) {
            var e = this._container = o.DomUtil.get(t);
            if (!e)throw new Error("Map container not found.");
            if (e._leaflet)throw new Error("Map container is already initialized.");
            e._leaflet = !0
        },
        _initLayout: function () {
            var t = this._container;
            o.DomUtil.addClass(t, "leaflet-container" + (o.Browser.touch ? " leaflet-touch" : "") + (o.Browser.retina ? " leaflet-retina" : "") + (o.Browser.ielt9 ? " leaflet-oldie" : "") + (this.options.fadeAnimation ? " leaflet-fade-anim" : ""));
            var e = o.DomUtil.getStyle(t, "position");
            "absolute" !== e && "relative" !== e && "fixed" !== e && (t.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos()
        },
        _initPanes: function () {
            var t = this._panes = {};
            this._mapPane = t.mapPane = this._createPane("leaflet-map-pane", this._container), this._tilePane = t.tilePane = this._createPane("leaflet-tile-pane", this._mapPane), t.objectsPane = this._createPane("leaflet-objects-pane", this._mapPane), t.shadowPane = this._createPane("leaflet-shadow-pane"), t.overlayPane = this._createPane("leaflet-overlay-pane"), t.markerPane = this._createPane("leaflet-marker-pane"), t.popupPane = this._createPane("leaflet-popup-pane");
            var e = " leaflet-zoom-hide";
            this.options.markerZoomAnimation || (o.DomUtil.addClass(t.markerPane, e), o.DomUtil.addClass(t.shadowPane, e), o.DomUtil.addClass(t.popupPane, e))
        },
        _createPane: function (t, e) {
            return o.DomUtil.create("div", t, e || this._panes.objectsPane)
        },
        _clearPanes: function () {
            this._container.removeChild(this._mapPane)
        },
        _addLayers: function (t) {
            t = t ? o.Util.isArray(t) ? t : [t] : [];
            for (var e = 0, i = t.length; i > e; e++)this.addLayer(t[e])
        },
        _resetView: function (t, e, i, n) {
            var s = this._zoom !== e;
            n || (this.fire("movestart"), s && this.fire("zoomstart")), this._zoom = e, this._initialCenter = t, this._initialTopLeftPoint = this._getNewTopLeftPoint(t), i ? this._initialTopLeftPoint._add(this._getMapPanePos()) : o.DomUtil.setPosition(this._mapPane, new o.Point(0, 0)), this._tileLayersToLoad = this._tileLayersNum;
            var a = !this._loaded;
            this._loaded = !0, this.fire("viewreset", {hard: !i}), a && (this.fire("load"), this.eachLayer(this._layerAdd, this)), this.fire("move"), (s || n) && this.fire("zoomend"), this.fire("moveend", {hard: !i})
        },
        _rawPanBy: function (t) {
            o.DomUtil.setPosition(this._mapPane, this._getMapPanePos().subtract(t))
        },
        _getZoomSpan: function () {
            return this.getMaxZoom() - this.getMinZoom()
        },
        _updateZoomLevels: function () {
            var t, e = 1 / 0, n = -1 / 0, o = this._getZoomSpan();
            for (t in this._zoomBoundLayers) {
                var s = this._zoomBoundLayers[t];
                isNaN(s.options.minZoom) || (e = Math.min(e, s.options.minZoom)), isNaN(s.options.maxZoom) || (n = Math.max(n, s.options.maxZoom))
            }
            t === i ? this._layersMaxZoom = this._layersMinZoom = i : (this._layersMaxZoom = n, this._layersMinZoom = e), o !== this._getZoomSpan() && this.fire("zoomlevelschange")
        },
        _panInsideMaxBounds: function () {
            this.panInsideBounds(this.options.maxBounds)
        },
        _checkIfLoaded: function () {
            if (!this._loaded)throw new Error("Set map center and zoom first.")
        },
        _initEvents: function (e) {
            if (o.DomEvent) {
                e = e || "on", o.DomEvent[e](this._container, "click", this._onMouseClick, this);
                var i, n, s = ["dblclick", "mousedown", "mouseup", "mouseenter", "mouseleave", "mousemove", "contextmenu"];
                for (i = 0, n = s.length; n > i; i++)o.DomEvent[e](this._container, s[i], this._fireMouseEvent, this);
                this.options.trackResize && o.DomEvent[e](t, "resize", this._onResize, this)
            }
        },
        _onResize: function () {
            o.Util.cancelAnimFrame(this._resizeRequest), this._resizeRequest = o.Util.requestAnimFrame(function () {
                this.invalidateSize({debounceMoveend: !0})
            }, this, !1, this._container)
        },
        _onMouseClick: function (t) {
            !this._loaded || !t._simulated && (this.dragging && this.dragging.moved() || this.boxZoom && this.boxZoom.moved()) || o.DomEvent._skipped(t) || (this.fire("preclick"), this._fireMouseEvent(t))
        },
        _fireMouseEvent: function (t) {
            if (this._loaded && !o.DomEvent._skipped(t)) {
                var e = t.type;
                if (e = "mouseenter" === e ? "mouseover" : "mouseleave" === e ? "mouseout" : e, this.hasEventListeners(e)) {
                    "contextmenu" === e && o.DomEvent.preventDefault(t);
                    var i = this.mouseEventToContainerPoint(t), n = this.containerPointToLayerPoint(i), s = this.layerPointToLatLng(n);
                    this.fire(e, {latlng: s, layerPoint: n, containerPoint: i, originalEvent: t})
                }
            }
        },
        _onTileLayerLoad: function () {
            this._tileLayersToLoad--, this._tileLayersNum && !this._tileLayersToLoad && this.fire("tilelayersload")
        },
        _clearHandlers: function () {
            for (var t = 0, e = this._handlers.length; e > t; t++)this._handlers[t].disable()
        },
        whenReady: function (t, e) {
            return this._loaded ? t.call(e || this, this) : this.on("load", t, e), this
        },
        _layerAdd: function (t) {
            t.onAdd(this), this.fire("layeradd", {layer: t})
        },
        _getMapPanePos: function () {
            return o.DomUtil.getPosition(this._mapPane)
        },
        _moved: function () {
            var t = this._getMapPanePos();
            return t && !t.equals([0, 0])
        },
        _getTopLeftPoint: function () {
            return this.getPixelOrigin().subtract(this._getMapPanePos())
        },
        _getNewTopLeftPoint: function (t, e) {
            var i = this.getSize()._divideBy(2);
            return this.project(t, e)._subtract(i)._round()
        },
        _latLngToNewLayerPoint: function (t, e, i) {
            var n = this._getNewTopLeftPoint(i, e).add(this._getMapPanePos());
            return this.project(t, e)._subtract(n)
        },
        _getCenterLayerPoint: function () {
            return this.containerPointToLayerPoint(this.getSize()._divideBy(2))
        },
        _getCenterOffset: function (t) {
            return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())
        },
        _limitCenter: function (t, e, i) {
            if (!i)return t;
            var n = this.project(t, e), s = this.getSize().divideBy(2), a = new o.Bounds(n.subtract(s), n.add(s)), r = this._getBoundsOffset(a, i, e);
            return this.unproject(n.add(r), e)
        },
        _limitOffset: function (t, e) {
            if (!e)return t;
            var i = this.getPixelBounds(), n = new o.Bounds(i.min.add(t), i.max.add(t));
            return t.add(this._getBoundsOffset(n, e))
        },
        _getBoundsOffset: function (t, e, i) {
            var n = this.project(e.getNorthWest(), i).subtract(t.min), s = this.project(e.getSouthEast(), i).subtract(t.max), a = this._rebound(n.x, -s.x), r = this._rebound(n.y, -s.y);
            return new o.Point(a, r)
        },
        _rebound: function (t, e) {
            return t + e > 0 ? Math.round(t - e) / 2 : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(e))
        },
        _limitZoom: function (t) {
            var e = this.getMinZoom(), i = this.getMaxZoom();
            return Math.max(e, Math.min(i, t))
        }
    }), o.map = function (t, e) {
        return new o.Map(t, e)
    }, o.Projection.Mercator = {
        MAX_LATITUDE: 85.0840591556, R_MINOR: 6356752.314245179, R_MAJOR: 6378137, project: function (t) {
            var e = o.LatLng.DEG_TO_RAD, i = this.MAX_LATITUDE, n = Math.max(Math.min(i, t.lat), -i), s = this.R_MAJOR, a = this.R_MINOR, r = t.lng * e * s, h = n * e, l = a / s, u = Math.sqrt(1 - l * l), c = u * Math.sin(h);
            c = Math.pow((1 - c) / (1 + c), .5 * u);
            var d = Math.tan(.5 * (.5 * Math.PI - h)) / c;
            return h = -s * Math.log(d), new o.Point(r, h)
        }, unproject: function (t) {
            for (var e, i = o.LatLng.RAD_TO_DEG, n = this.R_MAJOR, s = this.R_MINOR, a = t.x * i / n, r = s / n, h = Math.sqrt(1 - r * r), l = Math.exp(-t.y / n), u = Math.PI / 2 - 2 * Math.atan(l), c = 15, d = 1e-7, p = c, _ = .1; Math.abs(_) > d && --p > 0;)e = h * Math.sin(u), _ = Math.PI / 2 - 2 * Math.atan(l * Math.pow((1 - e) / (1 + e), .5 * h)) - u, u += _;
            return new o.LatLng(u * i, a)
        }
    }, o.CRS.EPSG3395 = o.extend({}, o.CRS, {
        code: "EPSG:3395",
        projection: o.Projection.Mercator,
        transformation: function () {
            var t = o.Projection.Mercator, e = t.R_MAJOR, i = .5 / (Math.PI * e);
            return new o.Transformation(i, .5, -i, .5)
        }()
    }), o.TileLayer = o.Class.extend({
        includes: o.Mixin.Events,
        options: {
            minZoom: 0,
            maxZoom: 18,
            tileSize: 256,
            subdomains: "abc",
            errorTileUrl: "",
            attribution: "",
            zoomOffset: 0,
            opacity: 1,
            unloadInvisibleTiles: o.Browser.mobile,
            updateWhenIdle: o.Browser.mobile
        },
        initialize: function (t, e) {
            e = o.setOptions(this, e), e.detectRetina && o.Browser.retina && e.maxZoom > 0 && (e.tileSize = Math.floor(e.tileSize / 2), e.zoomOffset++, e.minZoom > 0 && e.minZoom--, this.options.maxZoom--), e.bounds && (e.bounds = o.latLngBounds(e.bounds)), this._url = t;
            var i = this.options.subdomains;
            "string" == typeof i && (this.options.subdomains = i.split(""))
        },
        onAdd: function (t) {
            this._map = t, this._animated = t._zoomAnimated, this._initContainer(), t.on({
                viewreset: this._reset,
                moveend: this._update
            }, this), this._animated && t.on({
                zoomanim: this._animateZoom,
                zoomend: this._endZoomAnim
            }, this), this.options.updateWhenIdle || (this._limitedUpdate = o.Util.limitExecByInterval(this._update, 150, this), t.on("move", this._limitedUpdate, this)), this._reset(), this._update()
        },
        addTo: function (t) {
            return t.addLayer(this), this
        },
        onRemove: function (t) {
            this._container.parentNode.removeChild(this._container), t.off({
                viewreset: this._reset,
                moveend: this._update
            }, this), this._animated && t.off({
                zoomanim: this._animateZoom,
                zoomend: this._endZoomAnim
            }, this), this.options.updateWhenIdle || t.off("move", this._limitedUpdate, this), this._container = null, this._map = null
        },
        bringToFront: function () {
            var t = this._map._panes.tilePane;
            return this._container && (t.appendChild(this._container), this._setAutoZIndex(t, Math.max)), this
        },
        bringToBack: function () {
            var t = this._map._panes.tilePane;
            return this._container && (t.insertBefore(this._container, t.firstChild), this._setAutoZIndex(t, Math.min)), this
        },
        getAttribution: function () {
            return this.options.attribution
        },
        getContainer: function () {
            return this._container
        },
        setOpacity: function (t) {
            return this.options.opacity = t, this._map && this._updateOpacity(), this
        },
        setZIndex: function (t) {
            return this.options.zIndex = t, this._updateZIndex(), this
        },
        setUrl: function (t, e) {
            return this._url = t, e || this.redraw(), this
        },
        redraw: function () {
            return this._map && (this._reset({hard: !0}), this._update()), this
        },
        _updateZIndex: function () {
            this._container && this.options.zIndex !== i && (this._container.style.zIndex = this.options.zIndex)
        },
        _setAutoZIndex: function (t, e) {
            var i, n, o, s = t.children, a = -e(1 / 0, -1 / 0);
            for (n = 0, o = s.length; o > n; n++)s[n] !== this._container && (i = parseInt(s[n].style.zIndex, 10), isNaN(i) || (a = e(a, i)));
            this.options.zIndex = this._container.style.zIndex = (isFinite(a) ? a : 0) + e(1, -1)
        },
        _updateOpacity: function () {
            var t, e = this._tiles;
            if (o.Browser.ielt9)for (t in e)o.DomUtil.setOpacity(e[t], this.options.opacity); else o.DomUtil.setOpacity(this._container, this.options.opacity)
        },
        _initContainer: function () {
            var t = this._map._panes.tilePane;
            if (!this._container) {
                if (this._container = o.DomUtil.create("div", "leaflet-layer"), this._updateZIndex(), this._animated) {
                    var e = "leaflet-tile-container";
                    this._bgBuffer = o.DomUtil.create("div", e, this._container), this._tileContainer = o.DomUtil.create("div", e, this._container)
                } else this._tileContainer = this._container;
                t.appendChild(this._container), this.options.opacity < 1 && this._updateOpacity()
            }
        },
        _reset: function (t) {
            for (var e in this._tiles)this.fire("tileunload", {tile: this._tiles[e]});
            this._tiles = {}, this._tilesToLoad = 0, this.options.reuseTiles && (this._unusedTiles = []), this._tileContainer.innerHTML = "", this._animated && t && t.hard && this._clearBgBuffer(), this._initContainer()
        },
        _getTileSize: function () {
            var t = this._map, e = t.getZoom() + this.options.zoomOffset, i = this.options.maxNativeZoom, n = this.options.tileSize;
            return i && e > i && (n = Math.round(t.getZoomScale(e) / t.getZoomScale(i) * n)), n
        },
        _update: function () {
            if (this._map) {
                var t = this._map, e = t.getPixelBounds(), i = t.getZoom(), n = this._getTileSize();
                if (!(i > this.options.maxZoom || i < this.options.minZoom)) {
                    var s = o.bounds(e.min.divideBy(n)._floor(), e.max.divideBy(n)._floor());
                    this._addTilesFromCenterOut(s), (this.options.unloadInvisibleTiles || this.options.reuseTiles) && this._removeOtherTiles(s)
                }
            }
        },
        _addTilesFromCenterOut: function (t) {
            var i, n, s, a = [], r = t.getCenter();
            for (i = t.min.y; i <= t.max.y; i++)for (n = t.min.x; n <= t.max.x; n++)s = new o.Point(n, i), this._tileShouldBeLoaded(s) && a.push(s);
            var h = a.length;
            if (0 !== h) {
                a.sort(function (t, e) {
                    return t.distanceTo(r) - e.distanceTo(r)
                });
                var l = e.createDocumentFragment();
                for (this._tilesToLoad || this.fire("loading"), this._tilesToLoad += h, n = 0; h > n; n++)this._addTile(a[n], l);
                this._tileContainer.appendChild(l)
            }
        },
        _tileShouldBeLoaded: function (t) {
            if (t.x + ":" + t.y in this._tiles)return !1;
            var e = this.options;
            if (!e.continuousWorld) {
                var i = this._getWrapTileNum();
                if (e.noWrap && (t.x < 0 || t.x >= i.x) || t.y < 0 || t.y >= i.y)return !1
            }
            if (e.bounds) {
                var n = e.tileSize, o = t.multiplyBy(n), s = o.add([n, n]), a = this._map.unproject(o), r = this._map.unproject(s);
                if (e.continuousWorld || e.noWrap || (a = a.wrap(), r = r.wrap()), !e.bounds.intersects([a, r]))return !1
            }
            return !0
        },
        _removeOtherTiles: function (t) {
            var e, i, n, o;
            for (o in this._tiles)e = o.split(":"), i = parseInt(e[0], 10), n = parseInt(e[1], 10), (i < t.min.x || i > t.max.x || n < t.min.y || n > t.max.y) && this._removeTile(o)
        },
        _removeTile: function (t) {
            var e = this._tiles[t];
            this.fire("tileunload", {
                tile: e,
                url: e.src
            }), this.options.reuseTiles ? (o.DomUtil.removeClass(e, "leaflet-tile-loaded"), this._unusedTiles.push(e)) : e.parentNode === this._tileContainer && this._tileContainer.removeChild(e), o.Browser.android || (e.onload = null, e.src = o.Util.emptyImageUrl), delete this._tiles[t]
        },
        _addTile: function (t, e) {
            var i = this._getTilePos(t), n = this._getTile();
            o.DomUtil.setPosition(n, i, o.Browser.chrome), this._tiles[t.x + ":" + t.y] = n, this._loadTile(n, t), n.parentNode !== this._tileContainer && e.appendChild(n)
        },
        _getZoomForUrl: function () {
            var t = this.options, e = this._map.getZoom();
            return t.zoomReverse && (e = t.maxZoom - e), e += t.zoomOffset, t.maxNativeZoom ? Math.min(e, t.maxNativeZoom) : e
        },
        _getTilePos: function (t) {
            var e = this._map.getPixelOrigin(), i = this._getTileSize();
            return t.multiplyBy(i).subtract(e)
        },
        getTileUrl: function (t) {
            return o.Util.template(this._url, o.extend({
                s: this._getSubdomain(t),
                z: t.z,
                x: t.x,
                y: t.y
            }, this.options))
        },
        _getWrapTileNum: function () {
            var t = this._map.options.crs, e = t.getSize(this._map.getZoom());
            return e.divideBy(this._getTileSize())._floor()
        },
        _adjustTilePoint: function (t) {
            var e = this._getWrapTileNum();
            this.options.continuousWorld || this.options.noWrap || (t.x = (t.x % e.x + e.x) % e.x), this.options.tms && (t.y = e.y - t.y - 1), t.z = this._getZoomForUrl()
        },
        _getSubdomain: function (t) {
            var e = Math.abs(t.x + t.y) % this.options.subdomains.length;
            return this.options.subdomains[e]
        },
        _getTile: function () {
            if (this.options.reuseTiles && this._unusedTiles.length > 0) {
                var t = this._unusedTiles.pop();
                return this._resetTile(t), t
            }
            return this._createTile()
        },
        _resetTile: function () {
        },
        _createTile: function () {
            var t = o.DomUtil.create("img", "leaflet-tile");
            return t.style.width = t.style.height = this._getTileSize() + "px", t.galleryimg = "no", t.onselectstart = t.onmousemove = o.Util.falseFn, o.Browser.ielt9 && this.options.opacity !== i && o.DomUtil.setOpacity(t, this.options.opacity), o.Browser.mobileWebkit3d && (t.style.WebkitBackfaceVisibility = "hidden"), t
        },
        _loadTile: function (t, e) {
            t._layer = this, t.onload = this._tileOnLoad, t.onerror = this._tileOnError, this._adjustTilePoint(e), t.src = this.getTileUrl(e), this.fire("tileloadstart", {
                tile: t,
                url: t.src
            })
        },
        _tileLoaded: function () {
            this._tilesToLoad--, this._animated && o.DomUtil.addClass(this._tileContainer, "leaflet-zoom-animated"), this._tilesToLoad || (this.fire("load"), this._animated && (clearTimeout(this._clearBgBufferTimer), this._clearBgBufferTimer = setTimeout(o.bind(this._clearBgBuffer, this), 500)))
        },
        _tileOnLoad: function () {
            var t = this._layer;
            this.src !== o.Util.emptyImageUrl && (o.DomUtil.addClass(this, "leaflet-tile-loaded"), t.fire("tileload", {
                tile: this,
                url: this.src
            })), t._tileLoaded()
        },
        _tileOnError: function () {
            var t = this._layer;
            t.fire("tileerror", {tile: this, url: this.src});
            var e = t.options.errorTileUrl;
            e && (this.src = e), t._tileLoaded()
        }
    }), o.tileLayer = function (t, e) {
        return new o.TileLayer(t, e)
    }, o.TileLayer.WMS = o.TileLayer.extend({
        defaultWmsParams: {
            service: "WMS",
            request: "GetMap",
            version: "1.1.1",
            layers: "",
            styles: "",
            format: "image/jpeg",
            transparent: !1
        }, initialize: function (t, e) {
            this._url = t;
            var i = o.extend({}, this.defaultWmsParams), n = e.tileSize || this.options.tileSize;
            i.width = i.height = e.detectRetina && o.Browser.retina ? 2 * n : n;
            for (var s in e)this.options.hasOwnProperty(s) || "crs" === s || (i[s] = e[s]);
            this.wmsParams = i, o.setOptions(this, e)
        }, onAdd: function (t) {
            this._crs = this.options.crs || t.options.crs, this._wmsVersion = parseFloat(this.wmsParams.version);
            var e = this._wmsVersion >= 1.3 ? "crs" : "srs";
            this.wmsParams[e] = this._crs.code, o.TileLayer.prototype.onAdd.call(this, t)
        }, getTileUrl: function (t) {
            var e = this._map, i = this.options.tileSize, n = t.multiplyBy(i), s = n.add([i, i]), a = this._crs.project(e.unproject(n, t.z)), r = this._crs.project(e.unproject(s, t.z)), h = this._wmsVersion >= 1.3 && this._crs === o.CRS.EPSG4326 ? [r.y, a.x, a.y, r.x].join(",") : [a.x, r.y, r.x, a.y].join(","), l = o.Util.template(this._url, {s: this._getSubdomain(t)});
            return l + o.Util.getParamString(this.wmsParams, l, !0) + "&BBOX=" + h
        }, setParams: function (t, e) {
            return o.extend(this.wmsParams, t), e || this.redraw(), this
        }
    }), o.tileLayer.wms = function (t, e) {
        return new o.TileLayer.WMS(t, e)
    }, o.TileLayer.Canvas = o.TileLayer.extend({
        options: {async: !1}, initialize: function (t) {
            o.setOptions(this, t)
        }, redraw: function () {
            this._map && (this._reset({hard: !0}), this._update());
            for (var t in this._tiles)this._redrawTile(this._tiles[t]);
            return this
        }, _redrawTile: function (t) {
            this.drawTile(t, t._tilePoint, this._map._zoom)
        }, _createTile: function () {
            var t = o.DomUtil.create("canvas", "leaflet-tile");
            return t.width = t.height = this.options.tileSize, t.onselectstart = t.onmousemove = o.Util.falseFn, t
        }, _loadTile: function (t, e) {
            t._layer = this, t._tilePoint = e, this._redrawTile(t), this.options.async || this.tileDrawn(t)
        }, drawTile: function () {
        }, tileDrawn: function (t) {
            this._tileOnLoad.call(t)
        }
    }), o.tileLayer.canvas = function (t) {
        return new o.TileLayer.Canvas(t)
    }, o.ImageOverlay = o.Class.extend({
        includes: o.Mixin.Events,
        options: {opacity: 1},
        initialize: function (t, e, i) {
            this._url = t, this._bounds = o.latLngBounds(e), o.setOptions(this, i)
        },
        onAdd: function (t) {
            this._map = t, this._image || this._initImage(), t._panes.overlayPane.appendChild(this._image), t.on("viewreset", this._reset, this), t.options.zoomAnimation && o.Browser.any3d && t.on("zoomanim", this._animateZoom, this), this._reset()
        },
        onRemove: function (t) {
            t.getPanes().overlayPane.removeChild(this._image), t.off("viewreset", this._reset, this), t.options.zoomAnimation && t.off("zoomanim", this._animateZoom, this)
        },
        addTo: function (t) {
            return t.addLayer(this), this
        },
        setOpacity: function (t) {
            return this.options.opacity = t, this._updateOpacity(), this
        },
        bringToFront: function () {
            return this._image && this._map._panes.overlayPane.appendChild(this._image), this
        },
        bringToBack: function () {
            var t = this._map._panes.overlayPane;
            return this._image && t.insertBefore(this._image, t.firstChild), this
        },
        setUrl: function (t) {
            this._url = t, this._image.src = this._url
        },
        getAttribution: function () {
            return this.options.attribution
        },
        _initImage: function () {
            this._image = o.DomUtil.create("img", "leaflet-image-layer"), this._map.options.zoomAnimation && o.Browser.any3d ? o.DomUtil.addClass(this._image, "leaflet-zoom-animated") : o.DomUtil.addClass(this._image, "leaflet-zoom-hide"), this._updateOpacity(), o.extend(this._image, {
                galleryimg: "no",
                onselectstart: o.Util.falseFn,
                onmousemove: o.Util.falseFn,
                onload: o.bind(this._onImageLoad, this),
                src: this._url
            })
        },
        _animateZoom: function (t) {
            var e = this._map, i = this._image, n = e.getZoomScale(t.zoom), s = this._bounds.getNorthWest(), a = this._bounds.getSouthEast(), r = e._latLngToNewLayerPoint(s, t.zoom, t.center), h = e._latLngToNewLayerPoint(a, t.zoom, t.center)._subtract(r), l = r._add(h._multiplyBy(.5 * (1 - 1 / n)));
            i.style[o.DomUtil.TRANSFORM] = o.DomUtil.getTranslateString(l) + " scale(" + n + ") "
        },
        _reset: function () {
            var t = this._image, e = this._map.latLngToLayerPoint(this._bounds.getNorthWest()), i = this._map.latLngToLayerPoint(this._bounds.getSouthEast())._subtract(e);
            o.DomUtil.setPosition(t, e), t.style.width = i.x + "px", t.style.height = i.y + "px"
        },
        _onImageLoad: function () {
            this.fire("load")
        },
        _updateOpacity: function () {
            o.DomUtil.setOpacity(this._image, this.options.opacity)
        }
    }), o.imageOverlay = function (t, e, i) {
        return new o.ImageOverlay(t, e, i)
    }, o.Icon = o.Class.extend({
        options: {className: ""}, initialize: function (t) {
            o.setOptions(this, t)
        }, createIcon: function (t) {
            return this._createIcon("icon", t)
        }, createShadow: function (t) {
            return this._createIcon("shadow", t)
        }, _createIcon: function (t, e) {
            var i = this._getIconUrl(t);
            if (!i) {
                if ("icon" === t)throw new Error("iconUrl not set in Icon options (see the docs).");
                return null
            }
            var n;
            return n = e && "IMG" === e.tagName ? this._createImg(i, e) : this._createImg(i), this._setIconStyles(n, t), n
        }, _setIconStyles: function (t, e) {
            var i, n = this.options, s = o.point(n[e + "Size"]);
            i = o.point("shadow" === e ? n.shadowAnchor || n.iconAnchor : n.iconAnchor), !i && s && (i = s.divideBy(2, !0)), t.className = "leaflet-marker-" + e + " " + n.className, i && (t.style.marginLeft = -i.x + "px", t.style.marginTop = -i.y + "px"), s && (t.style.width = s.x + "px", t.style.height = s.y + "px")
        }, _createImg: function (t, i) {
            return i = i || e.createElement("img"), i.src = t, i
        }, _getIconUrl: function (t) {
            return o.Browser.retina && this.options[t + "RetinaUrl"] ? this.options[t + "RetinaUrl"] : this.options[t + "Url"]
        }
    }), o.icon = function (t) {
        return new o.Icon(t)
    }, o.Icon.Default = o.Icon.extend({
        options: {
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
        }, _getIconUrl: function (t) {
            var e = t + "Url";
            if (this.options[e])return this.options[e];
            o.Browser.retina && "icon" === t && (t += "-2x");
            var i = o.Icon.Default.imagePath;
            if (!i)throw new Error("Couldn't autodetect L.Icon.Default.imagePath, set it manually.");
            return i + "/marker-" + t + ".png"
        }
    }), o.Icon.Default.imagePath = function () {
        var t, i, n, o, s, a = e.getElementsByTagName("script"), r = /[\/^]leaflet[\-\._]?([\w\-\._]*)\.js\??/;
        for (t = 0, i = a.length; i > t; t++)if (n = a[t].src, o = n.match(r))return s = n.split(r)[0], (s ? s + "/" : "") + "images"
    }(), o.Marker = o.Class.extend({
        includes: o.Mixin.Events,
        options: {
            icon: new o.Icon.Default,
            title: "",
            alt: "",
            clickable: !0,
            draggable: !1,
            keyboard: !0,
            zIndexOffset: 0,
            opacity: 1,
            riseOnHover: !1,
            riseOffset: 250
        },
        initialize: function (t, e) {
            o.setOptions(this, e), this._latlng = o.latLng(t)
        },
        onAdd: function (t) {
            this._map = t, t.on("viewreset", this.update, this), this._initIcon(), this.update(), this.fire("add"), t.options.zoomAnimation && t.options.markerZoomAnimation && t.on("zoomanim", this._animateZoom, this)
        },
        addTo: function (t) {
            return t.addLayer(this), this
        },
        onRemove: function (t) {
            this.dragging && this.dragging.disable(), this._removeIcon(), this._removeShadow(), this.fire("remove"), t.off({
                viewreset: this.update,
                zoomanim: this._animateZoom
            }, this), this._map = null
        },
        getLatLng: function () {
            return this._latlng
        },
        setLatLng: function (t) {
            return this._latlng = o.latLng(t), this.update(), this.fire("move", {latlng: this._latlng})
        },
        setZIndexOffset: function (t) {
            return this.options.zIndexOffset = t, this.update(), this
        },
        setIcon: function (t) {
            return this.options.icon = t, this._map && (this._initIcon(), this.update()), this._popup && this.bindPopup(this._popup), this
        },
        update: function () {
            if (this._icon) {
                var t = this._map.latLngToLayerPoint(this._latlng).round();
                this._setPos(t)
            }
            return this
        },
        _initIcon: function () {
            var t = this.options, e = this._map, i = e.options.zoomAnimation && e.options.markerZoomAnimation, n = i ? "leaflet-zoom-animated" : "leaflet-zoom-hide", s = t.icon.createIcon(this._icon), a = !1;
            s !== this._icon && (this._icon && this._removeIcon(), a = !0, t.title && (s.title = t.title), t.alt && (s.alt = t.alt)), o.DomUtil.addClass(s, n), t.keyboard && (s.tabIndex = "0"), this._icon = s, this._initInteraction(), t.riseOnHover && o.DomEvent.on(s, "mouseover", this._bringToFront, this).on(s, "mouseout", this._resetZIndex, this);
            var r = t.icon.createShadow(this._shadow), h = !1;
            r !== this._shadow && (this._removeShadow(), h = !0), r && o.DomUtil.addClass(r, n), this._shadow = r, t.opacity < 1 && this._updateOpacity();
            var l = this._map._panes;
            a && l.markerPane.appendChild(this._icon), r && h && l.shadowPane.appendChild(this._shadow)
        },
        _removeIcon: function () {
            this.options.riseOnHover && o.DomEvent.off(this._icon, "mouseover", this._bringToFront).off(this._icon, "mouseout", this._resetZIndex), this._map._panes.markerPane.removeChild(this._icon), this._icon = null
        },
        _removeShadow: function () {
            this._shadow && this._map._panes.shadowPane.removeChild(this._shadow), this._shadow = null
        },
        _setPos: function (t) {
            o.DomUtil.setPosition(this._icon, t), this._shadow && o.DomUtil.setPosition(this._shadow, t), this._zIndex = t.y + this.options.zIndexOffset, this._resetZIndex()
        },
        _updateZIndex: function (t) {
            this._icon.style.zIndex = this._zIndex + t
        },
        _animateZoom: function (t) {
            var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round();
            this._setPos(e)
        },
        _initInteraction: function () {
            if (this.options.clickable) {
                var t = this._icon, e = ["dblclick", "mousedown", "mouseover", "mouseout", "contextmenu"];
                o.DomUtil.addClass(t, "leaflet-clickable"), o.DomEvent.on(t, "click", this._onMouseClick, this), o.DomEvent.on(t, "keypress", this._onKeyPress, this);
                for (var i = 0; i < e.length; i++)o.DomEvent.on(t, e[i], this._fireMouseEvent, this);
                o.Handler.MarkerDrag && (this.dragging = new o.Handler.MarkerDrag(this), this.options.draggable && this.dragging.enable())
            }
        },
        _onMouseClick: function (t) {
            var e = this.dragging && this.dragging.moved();
            (this.hasEventListeners(t.type) || e) && o.DomEvent.stopPropagation(t), e || (this.dragging && this.dragging._enabled || !this._map.dragging || !this._map.dragging.moved()) && this.fire(t.type, {
                originalEvent: t,
                latlng: this._latlng
            })
        },
        _onKeyPress: function (t) {
            13 === t.keyCode && this.fire("click", {originalEvent: t, latlng: this._latlng})
        },
        _fireMouseEvent: function (t) {
            this.fire(t.type, {
                originalEvent: t,
                latlng: this._latlng
            }), "contextmenu" === t.type && this.hasEventListeners(t.type) && o.DomEvent.preventDefault(t), "mousedown" !== t.type ? o.DomEvent.stopPropagation(t) : o.DomEvent.preventDefault(t)
        },
        setOpacity: function (t) {
            return this.options.opacity = t, this._map && this._updateOpacity(), this
        },
        _updateOpacity: function () {
            o.DomUtil.setOpacity(this._icon, this.options.opacity), this._shadow && o.DomUtil.setOpacity(this._shadow, this.options.opacity)
        },
        _bringToFront: function () {
            this._updateZIndex(this.options.riseOffset)
        },
        _resetZIndex: function () {
            this._updateZIndex(0)
        }
    }), o.marker = function (t, e) {
        return new o.Marker(t, e)
    }, o.DivIcon = o.Icon.extend({
        options: {iconSize: [12, 12], className: "leaflet-div-icon", html: !1},
        createIcon: function (t) {
            var i = t && "DIV" === t.tagName ? t : e.createElement("div"), n = this.options;
            return i.innerHTML = n.html !== !1 ? n.html : "", n.bgPos && (i.style.backgroundPosition = -n.bgPos.x + "px " + -n.bgPos.y + "px"), this._setIconStyles(i, "icon"), i
        },
        createShadow: function () {
            return null
        }
    }), o.divIcon = function (t) {
        return new o.DivIcon(t)
    }, o.Map.mergeOptions({closePopupOnClick: !0}), o.Popup = o.Class.extend({
        includes: o.Mixin.Events,
        options: {
            minWidth: 50,
            maxWidth: 300,
            autoPan: !0,
            closeButton: !0,
            offset: [0, 7],
            autoPanPadding: [5, 5],
            keepInView: !1,
            className: "",
            zoomAnimation: !0
        },
        initialize: function (t, e) {
            o.setOptions(this, t), this._source = e, this._animated = o.Browser.any3d && this.options.zoomAnimation, this._isOpen = !1
        },
        onAdd: function (t) {
            this._map = t, this._container || this._initLayout();
            var e = t.options.fadeAnimation;
            e && o.DomUtil.setOpacity(this._container, 0), t._panes.popupPane.appendChild(this._container), t.on(this._getEvents(), this), this.update(), e && o.DomUtil.setOpacity(this._container, 1), this.fire("open"), t.fire("popupopen", {popup: this}), this._source && this._source.fire("popupopen", {popup: this})
        },
        addTo: function (t) {
            return t.addLayer(this), this
        },
        openOn: function (t) {
            return t.openPopup(this), this
        },
        onRemove: function (t) {
            t._panes.popupPane.removeChild(this._container), o.Util.falseFn(this._container.offsetWidth), t.off(this._getEvents(), this), t.options.fadeAnimation && o.DomUtil.setOpacity(this._container, 0), this._map = null, this.fire("close"), t.fire("popupclose", {popup: this}), this._source && this._source.fire("popupclose", {popup: this})
        },
        getLatLng: function () {
            return this._latlng
        },
        setLatLng: function (t) {
            return this._latlng = o.latLng(t), this._map && (this._updatePosition(), this._adjustPan()), this
        },
        getContent: function () {
            return this._content
        },
        setContent: function (t) {
            return this._content = t, this.update(), this
        },
        update: function () {
            this._map && (this._container.style.visibility = "hidden", this._updateContent(), this._updateLayout(), this._updatePosition(), this._container.style.visibility = "", this._adjustPan())
        },
        _getEvents: function () {
            var t = {viewreset: this._updatePosition};
            return this._animated && (t.zoomanim = this._zoomAnimation), ("closeOnClick"in this.options ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (t.preclick = this._close), this.options.keepInView && (t.moveend = this._adjustPan), t
        },
        _close: function () {
            this._map && this._map.closePopup(this)
        },
        _initLayout: function () {
            var t, e = "leaflet-popup", i = e + " " + this.options.className + " leaflet-zoom-" + (this._animated ? "animated" : "hide"), n = this._container = o.DomUtil.create("div", i);
            this.options.closeButton && (t = this._closeButton = o.DomUtil.create("a", e + "-close-button", n), t.href = "#close", t.innerHTML = "&#215;", o.DomEvent.disableClickPropagation(t), o.DomEvent.on(t, "click", this._onCloseButtonClick, this));
            var s = this._wrapper = o.DomUtil.create("div", e + "-content-wrapper", n);
            o.DomEvent.disableClickPropagation(s), this._contentNode = o.DomUtil.create("div", e + "-content", s), o.DomEvent.disableScrollPropagation(this._contentNode), o.DomEvent.on(s, "contextmenu", o.DomEvent.stopPropagation), this._tipContainer = o.DomUtil.create("div", e + "-tip-container", n), this._tip = o.DomUtil.create("div", e + "-tip", this._tipContainer)
        },
        _updateContent: function () {
            if (this._content) {
                if ("string" == typeof this._content)this._contentNode.innerHTML = this._content; else {
                    for (; this._contentNode.hasChildNodes();)this._contentNode.removeChild(this._contentNode.firstChild);
                    this._contentNode.appendChild(this._content)
                }
                this.fire("contentupdate")
            }
        },
        _updateLayout: function () {
            var t = this._contentNode, e = t.style;
            e.width = "", e.whiteSpace = "nowrap";
            var i = t.offsetWidth;
            i = Math.min(i, this.options.maxWidth), i = Math.max(i, this.options.minWidth), e.width = i + 1 + "px", e.whiteSpace = "", e.height = "";
            var n = t.offsetHeight, s = this.options.maxHeight, a = "leaflet-popup-scrolled";
            s && n > s ? (e.height = s + "px", o.DomUtil.addClass(t, a)) : o.DomUtil.removeClass(t, a), this._containerWidth = this._container.offsetWidth
        },
        _updatePosition: function () {
            if (this._map) {
                var t = this._map.latLngToLayerPoint(this._latlng), e = this._animated, i = o.point(this.options.offset);
                e && o.DomUtil.setPosition(this._container, t), this._containerBottom = -i.y - (e ? 0 : t.y), this._containerLeft = -Math.round(this._containerWidth / 2) + i.x + (e ? 0 : t.x), this._container.style.bottom = this._containerBottom + "px", this._container.style.left = this._containerLeft + "px"
            }
        },
        _zoomAnimation: function (t) {
            var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);
            o.DomUtil.setPosition(this._container, e)
        },
        _adjustPan: function () {
            if (this.options.autoPan) {
                var t = this._map, e = this._container.offsetHeight, i = this._containerWidth, n = new o.Point(this._containerLeft, -e - this._containerBottom);
                this._animated && n._add(o.DomUtil.getPosition(this._container));
                var s = t.layerPointToContainerPoint(n), a = o.point(this.options.autoPanPadding), r = o.point(this.options.autoPanPaddingTopLeft || a), h = o.point(this.options.autoPanPaddingBottomRight || a), l = t.getSize(), u = 0, c = 0;
                s.x + i + h.x > l.x && (u = s.x + i - l.x + h.x), s.x - u - r.x < 0 && (u = s.x - r.x), s.y + e + h.y > l.y && (c = s.y + e - l.y + h.y), s.y - c - r.y < 0 && (c = s.y - r.y), (u || c) && t.fire("autopanstart").panBy([u, c])
            }
        },
        _onCloseButtonClick: function (t) {
            this._close(), o.DomEvent.stop(t)
        }
    }), o.popup = function (t, e) {
        return new o.Popup(t, e)
    }, o.Map.include({
        openPopup: function (t, e, i) {
            if (this.closePopup(), !(t instanceof o.Popup)) {
                var n = t;
                t = new o.Popup(i).setLatLng(e).setContent(n)
            }
            return t._isOpen = !0, this._popup = t, this.addLayer(t)
        }, closePopup: function (t) {
            return t && t !== this._popup || (t = this._popup, this._popup = null), t && (this.removeLayer(t), t._isOpen = !1), this
        }
    }), o.Marker.include({
        openPopup: function () {
            return this._popup && this._map && !this._map.hasLayer(this._popup) && (this._popup.setLatLng(this._latlng), this._map.openPopup(this._popup)), this
        }, closePopup: function () {
            return this._popup && this._popup._close(), this
        }, togglePopup: function () {
            return this._popup && (this._popup._isOpen ? this.closePopup() : this.openPopup()), this
        }, bindPopup: function (t, e) {
            var i = o.point(this.options.icon.options.popupAnchor || [0, 0]);
            return i = i.add(o.Popup.prototype.options.offset), e && e.offset && (i = i.add(e.offset)), e = o.extend({offset: i}, e), this._popupHandlersAdded || (this.on("click", this.togglePopup, this).on("remove", this.closePopup, this).on("move", this._movePopup, this), this._popupHandlersAdded = !0), t instanceof o.Popup ? (o.setOptions(t, e), this._popup = t) : this._popup = new o.Popup(e, this).setContent(t), this
        }, setPopupContent: function (t) {
            return this._popup && this._popup.setContent(t), this
        }, unbindPopup: function () {
            return this._popup && (this._popup = null, this.off("click", this.togglePopup, this).off("remove", this.closePopup, this).off("move", this._movePopup, this), this._popupHandlersAdded = !1), this
        }, getPopup: function () {
            return this._popup
        }, _movePopup: function (t) {
            this._popup.setLatLng(t.latlng)
        }
    }), o.LayerGroup = o.Class.extend({
        initialize: function (t) {
            this._layers = {};
            var e, i;
            if (t)for (e = 0, i = t.length; i > e; e++)this.addLayer(t[e])
        }, addLayer: function (t) {
            var e = this.getLayerId(t);
            return this._layers[e] = t, this._map && this._map.addLayer(t), this
        }, removeLayer: function (t) {
            var e = t in this._layers ? t : this.getLayerId(t);
            return this._map && this._layers[e] && this._map.removeLayer(this._layers[e]), delete this._layers[e], this
        }, hasLayer: function (t) {
            return t ? t in this._layers || this.getLayerId(t)in this._layers : !1
        }, clearLayers: function () {
            return this.eachLayer(this.removeLayer, this), this
        }, invoke: function (t) {
            var e, i, n = Array.prototype.slice.call(arguments, 1);
            for (e in this._layers)i = this._layers[e], i[t] && i[t].apply(i, n);
            return this
        }, onAdd: function (t) {
            this._map = t, this.eachLayer(t.addLayer, t)
        }, onRemove: function (t) {
            this.eachLayer(t.removeLayer, t), this._map = null
        }, addTo: function (t) {
            return t.addLayer(this), this
        }, eachLayer: function (t, e) {
            for (var i in this._layers)t.call(e, this._layers[i]);
            return this
        }, getLayer: function (t) {
            return this._layers[t]
        }, getLayers: function () {
            var t = [];
            for (var e in this._layers)t.push(this._layers[e]);
            return t
        }, setZIndex: function (t) {
            return this.invoke("setZIndex", t)
        }, getLayerId: function (t) {
            return o.stamp(t)
        }
    }), o.layerGroup = function (t) {
        return new o.LayerGroup(t)
    }, o.FeatureGroup = o.LayerGroup.extend({
        includes: o.Mixin.Events,
        statics: {EVENTS: "click dblclick mouseover mouseout mousemove contextmenu popupopen popupclose"},
        addLayer: function (t) {
            return this.hasLayer(t) ? this : ("on"in t && t.on(o.FeatureGroup.EVENTS, this._propagateEvent, this), o.LayerGroup.prototype.addLayer.call(this, t), this._popupContent && t.bindPopup && t.bindPopup(this._popupContent, this._popupOptions), this.fire("layeradd", {layer: t}))
        },
        removeLayer: function (t) {
            return this.hasLayer(t) ? (t in this._layers && (t = this._layers[t]), t.off(o.FeatureGroup.EVENTS, this._propagateEvent, this), o.LayerGroup.prototype.removeLayer.call(this, t), this._popupContent && this.invoke("unbindPopup"), this.fire("layerremove", {layer: t})) : this
        },
        bindPopup: function (t, e) {
            return this._popupContent = t, this._popupOptions = e, this.invoke("bindPopup", t, e)
        },
        openPopup: function (t) {
            for (var e in this._layers) {
                this._layers[e].openPopup(t);
                break
            }
            return this
        },
        setStyle: function (t) {
            return this.invoke("setStyle", t)
        },
        bringToFront: function () {
            return this.invoke("bringToFront")
        },
        bringToBack: function () {
            return this.invoke("bringToBack")
        },
        getBounds: function () {
            var t = new o.LatLngBounds;
            return this.eachLayer(function (e) {
                t.extend(e instanceof o.Marker ? e.getLatLng() : e.getBounds())
            }), t
        },
        _propagateEvent: function (t) {
            t = o.extend({layer: t.target, target: this}, t), this.fire(t.type, t)
        }
    }), o.featureGroup = function (t) {
        return new o.FeatureGroup(t)
    }, o.Path = o.Class.extend({
        includes: [o.Mixin.Events],
        statics: {
            CLIP_PADDING: function () {
                var e = o.Browser.mobile ? 1280 : 2e3, i = (e / Math.max(t.outerWidth, t.outerHeight) - 1) / 2;
                return Math.max(0, Math.min(.5, i))
            }()
        },
        options: {
            stroke: !0,
            color: "#0033ff",
            dashArray: null,
            lineCap: null,
            lineJoin: null,
            weight: 5,
            opacity: .5,
            fill: !1,
            fillColor: null,
            fillOpacity: .2,
            clickable: !0
        },
        initialize: function (t) {
            o.setOptions(this, t)
        },
        onAdd: function (t) {
            this._map = t, this._container || (this._initElements(), this._initEvents()), this.projectLatlngs(), this._updatePath(), this._container && this._map._pathRoot.appendChild(this._container), this.fire("add"), t.on({
                viewreset: this.projectLatlngs,
                moveend: this._updatePath
            }, this)
        },
        addTo: function (t) {
            return t.addLayer(this), this
        },
        onRemove: function (t) {
            t._pathRoot.removeChild(this._container), this.fire("remove"), this._map = null, o.Browser.vml && (this._container = null, this._stroke = null, this._fill = null), t.off({
                viewreset: this.projectLatlngs,
                moveend: this._updatePath
            }, this)
        },
        projectLatlngs: function () {
        },
        setStyle: function (t) {
            return o.setOptions(this, t), this._container && this._updateStyle(), this
        },
        redraw: function () {
            return this._map && (this.projectLatlngs(), this._updatePath()), this
        }
    }), o.Map.include({
        _updatePathViewport: function () {
            var t = o.Path.CLIP_PADDING, e = this.getSize(), i = o.DomUtil.getPosition(this._mapPane), n = i.multiplyBy(-1)._subtract(e.multiplyBy(t)._round()), s = n.add(e.multiplyBy(1 + 2 * t)._round());
            this._pathViewport = new o.Bounds(n, s)
        }
    }), o.Path.SVG_NS = "http://www.w3.org/2000/svg", o.Browser.svg = !(!e.createElementNS || !e.createElementNS(o.Path.SVG_NS, "svg").createSVGRect), o.Path = o.Path.extend({
        statics: {SVG: o.Browser.svg},
        bringToFront: function () {
            var t = this._map._pathRoot, e = this._container;
            return e && t.lastChild !== e && t.appendChild(e), this
        },
        bringToBack: function () {
            var t = this._map._pathRoot, e = this._container, i = t.firstChild;
            return e && i !== e && t.insertBefore(e, i), this
        },
        getPathString: function () {
        },
        _createElement: function (t) {
            return e.createElementNS(o.Path.SVG_NS, t)
        },
        _initElements: function () {
            this._map._initPathRoot(), this._initPath(), this._initStyle()
        },
        _initPath: function () {
            this._container = this._createElement("g"), this._path = this._createElement("path"), this.options.className && o.DomUtil.addClass(this._path, this.options.className), this._container.appendChild(this._path)
        },
        _initStyle: function () {
            this.options.stroke && (this._path.setAttribute("stroke-linejoin", "round"), this._path.setAttribute("stroke-linecap", "round")), this.options.fill && this._path.setAttribute("fill-rule", "evenodd"), this.options.pointerEvents && this._path.setAttribute("pointer-events", this.options.pointerEvents), this.options.clickable || this.options.pointerEvents || this._path.setAttribute("pointer-events", "none"), this._updateStyle()
        },
        _updateStyle: function () {
            this.options.stroke ? (this._path.setAttribute("stroke", this.options.color), this._path.setAttribute("stroke-opacity", this.options.opacity), this._path.setAttribute("stroke-width", this.options.weight), this.options.dashArray ? this._path.setAttribute("stroke-dasharray", this.options.dashArray) : this._path.removeAttribute("stroke-dasharray"), this.options.lineCap && this._path.setAttribute("stroke-linecap", this.options.lineCap), this.options.lineJoin && this._path.setAttribute("stroke-linejoin", this.options.lineJoin)) : this._path.setAttribute("stroke", "none"), this.options.fill ? (this._path.setAttribute("fill", this.options.fillColor || this.options.color), this._path.setAttribute("fill-opacity", this.options.fillOpacity)) : this._path.setAttribute("fill", "none")
        },
        _updatePath: function () {
            var t = this.getPathString();
            t || (t = "M0 0"), this._path.setAttribute("d", t)
        },
        _initEvents: function () {
            if (this.options.clickable) {
                (o.Browser.svg || !o.Browser.vml) && o.DomUtil.addClass(this._path, "leaflet-clickable"), o.DomEvent.on(this._container, "click", this._onMouseClick, this);
                for (var t = ["dblclick", "mousedown", "mouseover", "mouseout", "mousemove", "contextmenu"], e = 0; e < t.length; e++)o.DomEvent.on(this._container, t[e], this._fireMouseEvent, this)
            }
        },
        _onMouseClick: function (t) {
            this._map.dragging && this._map.dragging.moved() || this._fireMouseEvent(t)
        },
        _fireMouseEvent: function (t) {
            if (this.hasEventListeners(t.type)) {
                var e = this._map, i = e.mouseEventToContainerPoint(t), n = e.containerPointToLayerPoint(i), s = e.layerPointToLatLng(n);
                this.fire(t.type, {
                    latlng: s,
                    layerPoint: n,
                    containerPoint: i,
                    originalEvent: t
                }), "contextmenu" === t.type && o.DomEvent.preventDefault(t), "mousemove" !== t.type && o.DomEvent.stopPropagation(t)
            }
        }
    }), o.Map.include({
        _initPathRoot: function () {
            this._pathRoot || (this._pathRoot = o.Path.prototype._createElement("svg"), this._panes.overlayPane.appendChild(this._pathRoot), this.options.zoomAnimation && o.Browser.any3d ? (o.DomUtil.addClass(this._pathRoot, "leaflet-zoom-animated"), this.on({
                zoomanim: this._animatePathZoom,
                zoomend: this._endPathZoom
            })) : o.DomUtil.addClass(this._pathRoot, "leaflet-zoom-hide"), this.on("moveend", this._updateSvgViewport), this._updateSvgViewport())
        }, _animatePathZoom: function (t) {
            var e = this.getZoomScale(t.zoom), i = this._getCenterOffset(t.center)._multiplyBy(-e)._add(this._pathViewport.min);
            this._pathRoot.style[o.DomUtil.TRANSFORM] = o.DomUtil.getTranslateString(i) + " scale(" + e + ") ", this._pathZooming = !0
        }, _endPathZoom: function () {
            this._pathZooming = !1
        }, _updateSvgViewport: function () {
            if (!this._pathZooming) {
                this._updatePathViewport();
                var t = this._pathViewport, e = t.min, i = t.max, n = i.x - e.x, s = i.y - e.y, a = this._pathRoot, r = this._panes.overlayPane;
                o.Browser.mobileWebkit && r.removeChild(a), o.DomUtil.setPosition(a, e), a.setAttribute("width", n), a.setAttribute("height", s), a.setAttribute("viewBox", [e.x, e.y, n, s].join(" ")), o.Browser.mobileWebkit && r.appendChild(a)
            }
        }
    }), o.Path.include({
        bindPopup: function (t, e) {
            return t instanceof o.Popup ? this._popup = t : ((!this._popup || e) && (this._popup = new o.Popup(e, this)), this._popup.setContent(t)), this._popupHandlersAdded || (this.on("click", this._openPopup, this).on("remove", this.closePopup, this), this._popupHandlersAdded = !0), this
        }, unbindPopup: function () {
            return this._popup && (this._popup = null, this.off("click", this._openPopup).off("remove", this.closePopup), this._popupHandlersAdded = !1), this
        }, openPopup: function (t) {
            return this._popup && (t = t || this._latlng || this._latlngs[Math.floor(this._latlngs.length / 2)], this._openPopup({latlng: t})), this
        }, closePopup: function () {
            return this._popup && this._popup._close(), this
        }, _openPopup: function (t) {
            this._popup.setLatLng(t.latlng), this._map.openPopup(this._popup)
        }
    }), o.Browser.vml = !o.Browser.svg && function () {
        try {
            var t = e.createElement("div");
            t.innerHTML = '<v:shape adj="1"/>';
            var i = t.firstChild;
            return i.style.behavior = "url(#default#VML)", i && "object" == typeof i.adj
        } catch (n) {
            return !1
        }
    }(), o.Path = o.Browser.svg || !o.Browser.vml ? o.Path : o.Path.extend({
        statics: {VML: !0, CLIP_PADDING: .02},
        _createElement: function () {
            try {
                return e.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"), function (t) {
                    return e.createElement("<lvml:" + t + ' class="lvml">')
                }
            } catch (t) {
                return function (t) {
                    return e.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')
                }
            }
        }(),
        _initPath: function () {
            var t = this._container = this._createElement("shape");
            o.DomUtil.addClass(t, "leaflet-vml-shape" + (this.options.className ? " " + this.options.className : "")), this.options.clickable && o.DomUtil.addClass(t, "leaflet-clickable"), t.coordsize = "1 1", this._path = this._createElement("path"), t.appendChild(this._path), this._map._pathRoot.appendChild(t)
        },
        _initStyle: function () {
            this._updateStyle()
        },
        _updateStyle: function () {
            var t = this._stroke, e = this._fill, i = this.options, n = this._container;
            n.stroked = i.stroke, n.filled = i.fill, i.stroke ? (t || (t = this._stroke = this._createElement("stroke"), t.endcap = "round", n.appendChild(t)), t.weight = i.weight + "px", t.color = i.color, t.opacity = i.opacity, t.dashStyle = i.dashArray ? o.Util.isArray(i.dashArray) ? i.dashArray.join(" ") : i.dashArray.replace(/( *, *)/g, " ") : "", i.lineCap && (t.endcap = i.lineCap.replace("butt", "flat")), i.lineJoin && (t.joinstyle = i.lineJoin)) : t && (n.removeChild(t), this._stroke = null), i.fill ? (e || (e = this._fill = this._createElement("fill"), n.appendChild(e)), e.color = i.fillColor || i.color, e.opacity = i.fillOpacity) : e && (n.removeChild(e), this._fill = null)
        },
        _updatePath: function () {
            var t = this._container.style;
            t.display = "none", this._path.v = this.getPathString() + " ", t.display = ""
        }
    }), o.Map.include(o.Browser.svg || !o.Browser.vml ? {} : {
        _initPathRoot: function () {
            if (!this._pathRoot) {
                var t = this._pathRoot = e.createElement("div");
                t.className = "leaflet-vml-container", this._panes.overlayPane.appendChild(t), this.on("moveend", this._updatePathViewport), this._updatePathViewport()
            }
        }
    }), o.Browser.canvas = function () {
        return !!e.createElement("canvas").getContext
    }(), o.Path = o.Path.SVG && !t.L_PREFER_CANVAS || !o.Browser.canvas ? o.Path : o.Path.extend({
        statics: {
            CANVAS: !0,
            SVG: !1
        }, redraw: function () {
            return this._map && (this.projectLatlngs(), this._requestUpdate()), this
        }, setStyle: function (t) {
            return o.setOptions(this, t), this._map && (this._updateStyle(), this._requestUpdate()), this
        }, onRemove: function (t) {
            t.off("viewreset", this.projectLatlngs, this).off("moveend", this._updatePath, this), this.options.clickable && (this._map.off("click", this._onClick, this), this._map.off("mousemove", this._onMouseMove, this)), this._requestUpdate(), this.fire("remove"), this._map = null
        }, _requestUpdate: function () {
            this._map && !o.Path._updateRequest && (o.Path._updateRequest = o.Util.requestAnimFrame(this._fireMapMoveEnd, this._map))
        }, _fireMapMoveEnd: function () {
            o.Path._updateRequest = null, this.fire("moveend")
        }, _initElements: function () {
            this._map._initPathRoot(), this._ctx = this._map._canvasCtx
        }, _updateStyle: function () {
            var t = this.options;
            t.stroke && (this._ctx.lineWidth = t.weight, this._ctx.strokeStyle = t.color), t.fill && (this._ctx.fillStyle = t.fillColor || t.color)
        }, _drawPath: function () {
            var t, e, i, n, s, a;
            for (this._ctx.beginPath(), t = 0, i = this._parts.length; i > t; t++) {
                for (e = 0, n = this._parts[t].length; n > e; e++)s = this._parts[t][e], a = (0 === e ? "move" : "line") + "To", this._ctx[a](s.x, s.y);
                this instanceof o.Polygon && this._ctx.closePath()
            }
        }, _checkIfEmpty: function () {
            return !this._parts.length
        }, _updatePath: function () {
            if (!this._checkIfEmpty()) {
                var t = this._ctx, e = this.options;
                this._drawPath(), t.save(), this._updateStyle(), e.fill && (t.globalAlpha = e.fillOpacity, t.fill()), e.stroke && (t.globalAlpha = e.opacity, t.stroke()), t.restore()
            }
        }, _initEvents: function () {
            this.options.clickable && (this._map.on("mousemove", this._onMouseMove, this), this._map.on("click", this._onClick, this))
        }, _onClick: function (t) {
            this._containsPoint(t.layerPoint) && this.fire("click", t)
        }, _onMouseMove: function (t) {
            this._map && !this._map._animatingZoom && (this._containsPoint(t.layerPoint) ? (this._ctx.canvas.style.cursor = "pointer", this._mouseInside = !0, this.fire("mouseover", t)) : this._mouseInside && (this._ctx.canvas.style.cursor = "", this._mouseInside = !1, this.fire("mouseout", t)))
        }
    }), o.Map.include(o.Path.SVG && !t.L_PREFER_CANVAS || !o.Browser.canvas ? {} : {
        _initPathRoot: function () {
            var t, i = this._pathRoot;
            i || (i = this._pathRoot = e.createElement("canvas"), i.style.position = "absolute", t = this._canvasCtx = i.getContext("2d"), t.lineCap = "round", t.lineJoin = "round", this._panes.overlayPane.appendChild(i), this.options.zoomAnimation && (this._pathRoot.className = "leaflet-zoom-animated", this.on("zoomanim", this._animatePathZoom), this.on("zoomend", this._endPathZoom)), this.on("moveend", this._updateCanvasViewport), this._updateCanvasViewport())
        }, _updateCanvasViewport: function () {
            if (!this._pathZooming) {
                this._updatePathViewport();
                var t = this._pathViewport, e = t.min, i = t.max.subtract(e), n = this._pathRoot;
                o.DomUtil.setPosition(n, e), n.width = i.x, n.height = i.y, n.getContext("2d").translate(-e.x, -e.y)
            }
        }
    }), o.LineUtil = {
        simplify: function (t, e) {
            if (!e || !t.length)return t.slice();
            var i = e * e;
            return t = this._reducePoints(t, i), t = this._simplifyDP(t, i)
        }, pointToSegmentDistance: function (t, e, i) {
            return Math.sqrt(this._sqClosestPointOnSegment(t, e, i, !0))
        }, closestPointOnSegment: function (t, e, i) {
            return this._sqClosestPointOnSegment(t, e, i)
        }, _simplifyDP: function (t, e) {
            var n = t.length, o = typeof Uint8Array != i + "" ? Uint8Array : Array, s = new o(n);
            s[0] = s[n - 1] = 1, this._simplifyDPStep(t, s, e, 0, n - 1);
            var a, r = [];
            for (a = 0; n > a; a++)s[a] && r.push(t[a]);
            return r
        }, _simplifyDPStep: function (t, e, i, n, o) {
            var s, a, r, h = 0;
            for (a = n + 1; o - 1 >= a; a++)r = this._sqClosestPointOnSegment(t[a], t[n], t[o], !0), r > h && (s = a, h = r);
            h > i && (e[s] = 1, this._simplifyDPStep(t, e, i, n, s), this._simplifyDPStep(t, e, i, s, o))
        }, _reducePoints: function (t, e) {
            for (var i = [t[0]], n = 1, o = 0, s = t.length; s > n; n++)this._sqDist(t[n], t[o]) > e && (i.push(t[n]), o = n);
            return s - 1 > o && i.push(t[s - 1]), i
        }, clipSegment: function (t, e, i, n) {
            var o, s, a, r = n ? this._lastCode : this._getBitCode(t, i), h = this._getBitCode(e, i);
            for (this._lastCode = h; ;) {
                if (!(r | h))return [t, e];
                if (r & h)return !1;
                o = r || h, s = this._getEdgeIntersection(t, e, o, i), a = this._getBitCode(s, i), o === r ? (t = s, r = a) : (e = s, h = a)
            }
        }, _getEdgeIntersection: function (t, e, i, n) {
            var s = e.x - t.x, a = e.y - t.y, r = n.min, h = n.max;
            return 8 & i ? new o.Point(t.x + s * (h.y - t.y) / a, h.y) : 4 & i ? new o.Point(t.x + s * (r.y - t.y) / a, r.y) : 2 & i ? new o.Point(h.x, t.y + a * (h.x - t.x) / s) : 1 & i ? new o.Point(r.x, t.y + a * (r.x - t.x) / s) : void 0
        }, _getBitCode: function (t, e) {
            var i = 0;
            return t.x < e.min.x ? i |= 1 : t.x > e.max.x && (i |= 2), t.y < e.min.y ? i |= 4 : t.y > e.max.y && (i |= 8), i
        }, _sqDist: function (t, e) {
            var i = e.x - t.x, n = e.y - t.y;
            return i * i + n * n
        }, _sqClosestPointOnSegment: function (t, e, i, n) {
            var s, a = e.x, r = e.y, h = i.x - a, l = i.y - r, u = h * h + l * l;
            return u > 0 && (s = ((t.x - a) * h + (t.y - r) * l) / u, s > 1 ? (a = i.x, r = i.y) : s > 0 && (a += h * s, r += l * s)), h = t.x - a, l = t.y - r, n ? h * h + l * l : new o.Point(a, r)
        }
    }, o.Polyline = o.Path.extend({
        initialize: function (t, e) {
            o.Path.prototype.initialize.call(this, e), this._latlngs = this._convertLatLngs(t)
        }, options: {smoothFactor: 1, noClip: !1}, projectLatlngs: function () {
            this._originalPoints = [];
            for (var t = 0, e = this._latlngs.length; e > t; t++)this._originalPoints[t] = this._map.latLngToLayerPoint(this._latlngs[t])
        }, getPathString: function () {
            for (var t = 0, e = this._parts.length, i = ""; e > t; t++)i += this._getPathPartStr(this._parts[t]);
            return i
        }, getLatLngs: function () {
            return this._latlngs
        }, setLatLngs: function (t) {
            return this._latlngs = this._convertLatLngs(t), this.redraw()
        }, addLatLng: function (t) {
            return this._latlngs.push(o.latLng(t)), this.redraw()
        }, spliceLatLngs: function () {
            var t = [].splice.apply(this._latlngs, arguments);
            return this._convertLatLngs(this._latlngs, !0), this.redraw(), t
        }, closestLayerPoint: function (t) {
            for (var e, i, n = 1 / 0, s = this._parts, a = null, r = 0, h = s.length; h > r; r++)for (var l = s[r], u = 1, c = l.length; c > u; u++) {
                e = l[u - 1], i = l[u];
                var d = o.LineUtil._sqClosestPointOnSegment(t, e, i, !0);
                n > d && (n = d, a = o.LineUtil._sqClosestPointOnSegment(t, e, i))
            }
            return a && (a.distance = Math.sqrt(n)), a
        }, getBounds: function () {
            return new o.LatLngBounds(this.getLatLngs())
        }, _convertLatLngs: function (t, e) {
            var i, n, s = e ? t : [];
            for (i = 0, n = t.length; n > i; i++) {
                if (o.Util.isArray(t[i]) && "number" != typeof t[i][0])return;
                s[i] = o.latLng(t[i])
            }
            return s
        }, _initEvents: function () {
            o.Path.prototype._initEvents.call(this)
        }, _getPathPartStr: function (t) {
            for (var e, i = o.Path.VML, n = 0, s = t.length, a = ""; s > n; n++)e = t[n], i && e._round(), a += (n ? "L" : "M") + e.x + " " + e.y;
            return a
        }, _clipPoints: function () {
            var t, e, i, n = this._originalPoints, s = n.length;
            if (this.options.noClip)return void(this._parts = [n]);
            this._parts = [];
            var a = this._parts, r = this._map._pathViewport, h = o.LineUtil;
            for (t = 0, e = 0; s - 1 > t; t++)i = h.clipSegment(n[t], n[t + 1], r, t), i && (a[e] = a[e] || [], a[e].push(i[0]), (i[1] !== n[t + 1] || t === s - 2) && (a[e].push(i[1]), e++))
        }, _simplifyPoints: function () {
            for (var t = this._parts, e = o.LineUtil, i = 0, n = t.length; n > i; i++)t[i] = e.simplify(t[i], this.options.smoothFactor)
        }, _updatePath: function () {
            this._map && (this._clipPoints(), this._simplifyPoints(), o.Path.prototype._updatePath.call(this))
        }
    }), o.polyline = function (t, e) {
        return new o.Polyline(t, e)
    }, o.PolyUtil = {}, o.PolyUtil.clipPolygon = function (t, e) {
        var i, n, s, a, r, h, l, u, c, d = [1, 4, 2, 8], p = o.LineUtil;
        for (n = 0, l = t.length; l > n; n++)t[n]._code = p._getBitCode(t[n], e);
        for (a = 0; 4 > a; a++) {
            for (u = d[a], i = [], n = 0, l = t.length, s = l - 1; l > n; s = n++)r = t[n], h = t[s], r._code & u ? h._code & u || (c = p._getEdgeIntersection(h, r, u, e), c._code = p._getBitCode(c, e), i.push(c)) : (h._code & u && (c = p._getEdgeIntersection(h, r, u, e), c._code = p._getBitCode(c, e), i.push(c)), i.push(r));
            t = i
        }
        return t
    }, o.Polygon = o.Polyline.extend({
        options: {fill: !0}, initialize: function (t, e) {
            o.Polyline.prototype.initialize.call(this, t, e), this._initWithHoles(t)
        }, _initWithHoles: function (t) {
            var e, i, n;
            if (t && o.Util.isArray(t[0]) && "number" != typeof t[0][0])for (this._latlngs = this._convertLatLngs(t[0]), this._holes = t.slice(1), e = 0, i = this._holes.length; i > e; e++)n = this._holes[e] = this._convertLatLngs(this._holes[e]), n[0].equals(n[n.length - 1]) && n.pop();
            t = this._latlngs, t.length >= 2 && t[0].equals(t[t.length - 1]) && t.pop()
        }, projectLatlngs: function () {
            if (o.Polyline.prototype.projectLatlngs.call(this), this._holePoints = [], this._holes) {
                var t, e, i, n;
                for (t = 0, i = this._holes.length; i > t; t++)for (this._holePoints[t] = [], e = 0, n = this._holes[t].length; n > e; e++)this._holePoints[t][e] = this._map.latLngToLayerPoint(this._holes[t][e])
            }
        }, setLatLngs: function (t) {
            return t && o.Util.isArray(t[0]) && "number" != typeof t[0][0] ? (this._initWithHoles(t), this.redraw()) : o.Polyline.prototype.setLatLngs.call(this, t)
        }, _clipPoints: function () {
            var t = this._originalPoints, e = [];
            if (this._parts = [t].concat(this._holePoints), !this.options.noClip) {
                for (var i = 0, n = this._parts.length; n > i; i++) {
                    var s = o.PolyUtil.clipPolygon(this._parts[i], this._map._pathViewport);
                    s.length && e.push(s)
                }
                this._parts = e
            }
        }, _getPathPartStr: function (t) {
            var e = o.Polyline.prototype._getPathPartStr.call(this, t);
            return e + (o.Browser.svg ? "z" : "x")
        }
    }), o.polygon = function (t, e) {
        return new o.Polygon(t, e)
    }, function () {
        function t(t) {
            return o.FeatureGroup.extend({
                initialize: function (t, e) {
                    this._layers = {}, this._options = e, this.setLatLngs(t)
                }, setLatLngs: function (e) {
                    var i = 0, n = e.length;
                    for (this.eachLayer(function (t) {
                        n > i ? t.setLatLngs(e[i++]) : this.removeLayer(t)
                    }, this); n > i;)this.addLayer(new t(e[i++], this._options));
                    return this
                }, getLatLngs: function () {
                    var t = [];
                    return this.eachLayer(function (e) {
                        t.push(e.getLatLngs())
                    }), t
                }
            })
        }

        o.MultiPolyline = t(o.Polyline), o.MultiPolygon = t(o.Polygon), o.multiPolyline = function (t, e) {
            return new o.MultiPolyline(t, e)
        }, o.multiPolygon = function (t, e) {
            return new o.MultiPolygon(t, e)
        }
    }(), o.Rectangle = o.Polygon.extend({
        initialize: function (t, e) {
            o.Polygon.prototype.initialize.call(this, this._boundsToLatLngs(t), e)
        }, setBounds: function (t) {
            this.setLatLngs(this._boundsToLatLngs(t))
        }, _boundsToLatLngs: function (t) {
            return t = o.latLngBounds(t), [t.getSouthWest(), t.getNorthWest(), t.getNorthEast(), t.getSouthEast()]
        }
    }), o.rectangle = function (t, e) {
        return new o.Rectangle(t, e)
    }, o.Circle = o.Path.extend({
        initialize: function (t, e, i) {
            o.Path.prototype.initialize.call(this, i), this._latlng = o.latLng(t), this._mRadius = e
        }, options: {fill: !0}, setLatLng: function (t) {
            return this._latlng = o.latLng(t), this.redraw()
        }, setRadius: function (t) {
            return this._mRadius = t, this.redraw()
        }, projectLatlngs: function () {
            var t = this._getLngRadius(), e = this._latlng, i = this._map.latLngToLayerPoint([e.lat, e.lng - t]);
            this._point = this._map.latLngToLayerPoint(e), this._radius = Math.max(this._point.x - i.x, 1)
        }, getBounds: function () {
            var t = this._getLngRadius(), e = this._mRadius / 40075017 * 360, i = this._latlng;
            return new o.LatLngBounds([i.lat - e, i.lng - t], [i.lat + e, i.lng + t])
        }, getLatLng: function () {
            return this._latlng
        }, getPathString: function () {
            var t = this._point, e = this._radius;
            return this._checkIfEmpty() ? "" : o.Browser.svg ? "M" + t.x + "," + (t.y - e) + "A" + e + "," + e + ",0,1,1," + (t.x - .1) + "," + (t.y - e) + " z" : (t._round(), e = Math.round(e), "AL " + t.x + "," + t.y + " " + e + "," + e + " 0,23592600")
        }, getRadius: function () {
            return this._mRadius
        }, _getLatRadius: function () {
            return this._mRadius / 40075017 * 360
        }, _getLngRadius: function () {
            return this._getLatRadius() / Math.cos(o.LatLng.DEG_TO_RAD * this._latlng.lat)
        }, _checkIfEmpty: function () {
            if (!this._map)return !1;
            var t = this._map._pathViewport, e = this._radius, i = this._point;
            return i.x - e > t.max.x || i.y - e > t.max.y || i.x + e < t.min.x || i.y + e < t.min.y
        }
    }), o.circle = function (t, e, i) {
        return new o.Circle(t, e, i)
    }, o.CircleMarker = o.Circle.extend({
        options: {radius: 10, weight: 2}, initialize: function (t, e) {
            o.Circle.prototype.initialize.call(this, t, null, e), this._radius = this.options.radius
        }, projectLatlngs: function () {
            this._point = this._map.latLngToLayerPoint(this._latlng)
        }, _updateStyle: function () {
            o.Circle.prototype._updateStyle.call(this), this.setRadius(this.options.radius)
        }, setLatLng: function (t) {
            return o.Circle.prototype.setLatLng.call(this, t), this._popup && this._popup._isOpen && this._popup.setLatLng(t), this
        }, setRadius: function (t) {
            return this.options.radius = this._radius = t, this.redraw()
        }, getRadius: function () {
            return this._radius
        }
    }), o.circleMarker = function (t, e) {
        return new o.CircleMarker(t, e)
    }, o.Polyline.include(o.Path.CANVAS ? {
        _containsPoint: function (t, e) {
            var i, n, s, a, r, h, l, u = this.options.weight / 2;
            for (o.Browser.touch && (u += 10), i = 0, a = this._parts.length; a > i; i++)for (l = this._parts[i], n = 0, r = l.length, s = r - 1; r > n; s = n++)if ((e || 0 !== n) && (h = o.LineUtil.pointToSegmentDistance(t, l[s], l[n]), u >= h))return !0;
            return !1
        }
    } : {}), o.Polygon.include(o.Path.CANVAS ? {
        _containsPoint: function (t) {
            var e, i, n, s, a, r, h, l, u = !1;
            if (o.Polyline.prototype._containsPoint.call(this, t, !0))return !0;
            for (s = 0, h = this._parts.length; h > s; s++)for (e = this._parts[s], a = 0, l = e.length, r = l - 1; l > a; r = a++)i = e[a], n = e[r], i.y > t.y != n.y > t.y && t.x < (n.x - i.x) * (t.y - i.y) / (n.y - i.y) + i.x && (u = !u);
            return u
        }
    } : {}), o.Circle.include(o.Path.CANVAS ? {
        _drawPath: function () {
            var t = this._point;
            this._ctx.beginPath(), this._ctx.arc(t.x, t.y, this._radius, 0, 2 * Math.PI, !1)
        }, _containsPoint: function (t) {
            var e = this._point, i = this.options.stroke ? this.options.weight / 2 : 0;
            return t.distanceTo(e) <= this._radius + i
        }
    } : {}), o.CircleMarker.include(o.Path.CANVAS ? {
        _updateStyle: function () {
            o.Path.prototype._updateStyle.call(this)
        }
    } : {}), o.GeoJSON = o.FeatureGroup.extend({
        initialize: function (t, e) {
            o.setOptions(this, e), this._layers = {}, t && this.addData(t)
        }, addData: function (t) {
            var e, i, n, s = o.Util.isArray(t) ? t : t.features;
            if (s) {
                for (e = 0, i = s.length; i > e; e++)n = s[e], (n.geometries || n.geometry || n.features || n.coordinates) && this.addData(s[e]);
                return this
            }
            var a = this.options;
            if (!a.filter || a.filter(t)) {
                var r = o.GeoJSON.geometryToLayer(t, a.pointToLayer, a.coordsToLatLng, a);
                return r.feature = o.GeoJSON.asFeature(t), r.defaultOptions = r.options, this.resetStyle(r), a.onEachFeature && a.onEachFeature(t, r), this.addLayer(r)
            }
        }, resetStyle: function (t) {
            var e = this.options.style;
            e && (o.Util.extend(t.options, t.defaultOptions), this._setLayerStyle(t, e))
        }, setStyle: function (t) {
            this.eachLayer(function (e) {
                this._setLayerStyle(e, t)
            }, this)
        }, _setLayerStyle: function (t, e) {
            "function" == typeof e && (e = e(t.feature)), t.setStyle && t.setStyle(e)
        }
    }), o.extend(o.GeoJSON, {
        geometryToLayer: function (t, e, i, n) {
            var s, a, r, h, l = "Feature" === t.type ? t.geometry : t, u = l.coordinates, c = [];
            switch (i = i || this.coordsToLatLng, l.type) {
                case"Point":
                    return s = i(u), e ? e(t, s) : new o.Marker(s);
                case"MultiPoint":
                    for (r = 0, h = u.length; h > r; r++)s = i(u[r]), c.push(e ? e(t, s) : new o.Marker(s));
                    return new o.FeatureGroup(c);
                case"LineString":
                    return a = this.coordsToLatLngs(u, 0, i), new o.Polyline(a, n);
                case"Polygon":
                    if (2 === u.length && !u[1].length)throw new Error("Invalid GeoJSON object.");
                    return a = this.coordsToLatLngs(u, 1, i), new o.Polygon(a, n);
                case"MultiLineString":
                    return a = this.coordsToLatLngs(u, 1, i), new o.MultiPolyline(a, n);
                case"MultiPolygon":
                    return a = this.coordsToLatLngs(u, 2, i), new o.MultiPolygon(a, n);
                case"GeometryCollection":
                    for (r = 0, h = l.geometries.length; h > r; r++)c.push(this.geometryToLayer({
                        geometry: l.geometries[r],
                        type: "Feature",
                        properties: t.properties
                    }, e, i, n));
                    return new o.FeatureGroup(c);
                default:
                    throw new Error("Invalid GeoJSON object.")
            }
        }, coordsToLatLng: function (t) {
            return new o.LatLng(t[1], t[0], t[2])
        }, coordsToLatLngs: function (t, e, i) {
            var n, o, s, a = [];
            for (o = 0, s = t.length; s > o; o++)n = e ? this.coordsToLatLngs(t[o], e - 1, i) : (i || this.coordsToLatLng)(t[o]), a.push(n);
            return a
        }, latLngToCoords: function (t) {
            var e = [t.lng, t.lat];
            return t.alt !== i && e.push(t.alt), e
        }, latLngsToCoords: function (t) {
            for (var e = [], i = 0, n = t.length; n > i; i++)e.push(o.GeoJSON.latLngToCoords(t[i]));
            return e
        }, getFeature: function (t, e) {
            return t.feature ? o.extend({}, t.feature, {geometry: e}) : o.GeoJSON.asFeature(e)
        }, asFeature: function (t) {
            return "Feature" === t.type ? t : {type: "Feature", properties: {}, geometry: t}
        }
    });
    var a = {
        toGeoJSON: function () {
            return o.GeoJSON.getFeature(this, {type: "Point", coordinates: o.GeoJSON.latLngToCoords(this.getLatLng())})
        }
    };
    o.Marker.include(a), o.Circle.include(a), o.CircleMarker.include(a), o.Polyline.include({
        toGeoJSON: function () {
            return o.GeoJSON.getFeature(this, {
                type: "LineString",
                coordinates: o.GeoJSON.latLngsToCoords(this.getLatLngs())
            })
        }
    }), o.Polygon.include({
        toGeoJSON: function () {
            var t, e, i, n = [o.GeoJSON.latLngsToCoords(this.getLatLngs())];
            if (n[0].push(n[0][0]), this._holes)for (t = 0, e = this._holes.length; e > t; t++)i = o.GeoJSON.latLngsToCoords(this._holes[t]), i.push(i[0]), n.push(i);
            return o.GeoJSON.getFeature(this, {type: "Polygon", coordinates: n})
        }
    }), function () {
        function t(t) {
            return function () {
                var e = [];
                return this.eachLayer(function (t) {
                    e.push(t.toGeoJSON().geometry.coordinates)
                }), o.GeoJSON.getFeature(this, {type: t, coordinates: e})
            }
        }

        o.MultiPolyline.include({toGeoJSON: t("MultiLineString")}), o.MultiPolygon.include({toGeoJSON: t("MultiPolygon")}), o.LayerGroup.include({
            toGeoJSON: function () {
                var e, i = this.feature && this.feature.geometry, n = [];
                if (i && "MultiPoint" === i.type)return t("MultiPoint").call(this);
                var s = i && "GeometryCollection" === i.type;
                return this.eachLayer(function (t) {
                    t.toGeoJSON && (e = t.toGeoJSON(), n.push(s ? e.geometry : o.GeoJSON.asFeature(e)))
                }), s ? o.GeoJSON.getFeature(this, {
                    geometries: n,
                    type: "GeometryCollection"
                }) : {type: "FeatureCollection", features: n}
            }
        })
    }(), o.geoJson = function (t, e) {
        return new o.GeoJSON(t, e)
    }, o.DomEvent = {
        addListener: function (t, e, i, n) {
            var s, a, r, h = o.stamp(i), l = "_leaflet_" + e + h;
            return t[l] ? this : (s = function (e) {
                return i.call(n || t, e || o.DomEvent._getEvent())
            }, o.Browser.pointer && 0 === e.indexOf("touch") ? this.addPointerListener(t, e, s, h) : (o.Browser.touch && "dblclick" === e && this.addDoubleTapListener && this.addDoubleTapListener(t, s, h), "addEventListener"in t ? "mousewheel" === e ? (t.addEventListener("DOMMouseScroll", s, !1), t.addEventListener(e, s, !1)) : "mouseenter" === e || "mouseleave" === e ? (a = s, r = "mouseenter" === e ? "mouseover" : "mouseout", s = function (e) {
                return o.DomEvent._checkMouse(t, e) ? a(e) : void 0
            }, t.addEventListener(r, s, !1)) : "click" === e && o.Browser.android ? (a = s, s = function (t) {
                return o.DomEvent._filterClick(t, a)
            }, t.addEventListener(e, s, !1)) : t.addEventListener(e, s, !1) : "attachEvent"in t && t.attachEvent("on" + e, s), t[l] = s, this))
        }, removeListener: function (t, e, i) {
            var n = o.stamp(i), s = "_leaflet_" + e + n, a = t[s];
            return a ? (o.Browser.pointer && 0 === e.indexOf("touch") ? this.removePointerListener(t, e, n) : o.Browser.touch && "dblclick" === e && this.removeDoubleTapListener ? this.removeDoubleTapListener(t, n) : "removeEventListener"in t ? "mousewheel" === e ? (t.removeEventListener("DOMMouseScroll", a, !1), t.removeEventListener(e, a, !1)) : "mouseenter" === e || "mouseleave" === e ? t.removeEventListener("mouseenter" === e ? "mouseover" : "mouseout", a, !1) : t.removeEventListener(e, a, !1) : "detachEvent"in t && t.detachEvent("on" + e, a), t[s] = null, this) : this
        }, stopPropagation: function (t) {
            return t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0, o.DomEvent._skipped(t), this
        }, disableScrollPropagation: function (t) {
            var e = o.DomEvent.stopPropagation;
            return o.DomEvent.on(t, "mousewheel", e).on(t, "MozMousePixelScroll", e)
        }, disableClickPropagation: function (t) {
            for (var e = o.DomEvent.stopPropagation, i = o.Draggable.START.length - 1; i >= 0; i--)o.DomEvent.on(t, o.Draggable.START[i], e);
            return o.DomEvent.on(t, "click", o.DomEvent._fakeStop).on(t, "dblclick", e)
        }, preventDefault: function (t) {
            return t.preventDefault ? t.preventDefault() : t.returnValue = !1, this
        }, stop: function (t) {
            return o.DomEvent.preventDefault(t).stopPropagation(t)
        }, getMousePosition: function (t, e) {
            if (!e)return new o.Point(t.clientX, t.clientY);
            var i = e.getBoundingClientRect();
            return new o.Point(t.clientX - i.left - e.clientLeft, t.clientY - i.top - e.clientTop)
        }, getWheelDelta: function (t) {
            var e = 0;
            return t.wheelDelta && (e = t.wheelDelta / 120), t.detail && (e = -t.detail / 3), e
        }, _skipEvents: {}, _fakeStop: function (t) {
            o.DomEvent._skipEvents[t.type] = !0
        }, _skipped: function (t) {
            var e = this._skipEvents[t.type];
            return this._skipEvents[t.type] = !1, e
        }, _checkMouse: function (t, e) {
            var i = e.relatedTarget;
            if (!i)return !0;
            try {
                for (; i && i !== t;)i = i.parentNode
            } catch (n) {
                return !1
            }
            return i !== t
        }, _getEvent: function () {
            var e = t.event;
            if (!e)for (var i = arguments.callee.caller; i && (e = i.arguments[0], !e || t.Event !== e.constructor);)i = i.caller;
            return e
        }, _filterClick: function (t, e) {
            var i = t.timeStamp || t.originalEvent.timeStamp, n = o.DomEvent._lastClick && i - o.DomEvent._lastClick;
            return n && n > 100 && 500 > n || t.target._simulatedClick && !t._simulated ? void o.DomEvent.stop(t) : (o.DomEvent._lastClick = i, e(t))
        }
    }, o.DomEvent.on = o.DomEvent.addListener, o.DomEvent.off = o.DomEvent.removeListener, o.Draggable = o.Class.extend({
        includes: o.Mixin.Events,
        statics: {
            START: o.Browser.touch ? ["touchstart", "mousedown"] : ["mousedown"],
            END: {mousedown: "mouseup", touchstart: "touchend", pointerdown: "touchend", MSPointerDown: "touchend"},
            MOVE: {
                mousedown: "mousemove",
                touchstart: "touchmove",
                pointerdown: "touchmove",
                MSPointerDown: "touchmove"
            }
        },
        initialize: function (t, e) {
            this._element = t, this._dragStartTarget = e || t
        },
        enable: function () {
            if (!this._enabled) {
                for (var t = o.Draggable.START.length - 1; t >= 0; t--)o.DomEvent.on(this._dragStartTarget, o.Draggable.START[t], this._onDown, this);
                this._enabled = !0
            }
        },
        disable: function () {
            if (this._enabled) {
                for (var t = o.Draggable.START.length - 1; t >= 0; t--)o.DomEvent.off(this._dragStartTarget, o.Draggable.START[t], this._onDown, this);
                this._enabled = !1, this._moved = !1
            }
        },
        _onDown: function (t) {
            if (this._moved = !1, !(t.shiftKey || 1 !== t.which && 1 !== t.button && !t.touches || (o.DomEvent.stopPropagation(t), o.Draggable._disabled || (o.DomUtil.disableImageDrag(), o.DomUtil.disableTextSelection(), this._moving)))) {
                var i = t.touches ? t.touches[0] : t;
                this._startPoint = new o.Point(i.clientX, i.clientY), this._startPos = this._newPos = o.DomUtil.getPosition(this._element), o.DomEvent.on(e, o.Draggable.MOVE[t.type], this._onMove, this).on(e, o.Draggable.END[t.type], this._onUp, this)
            }
        },
        _onMove: function (t) {
            if (t.touches && t.touches.length > 1)return void(this._moved = !0);
            var i = t.touches && 1 === t.touches.length ? t.touches[0] : t, n = new o.Point(i.clientX, i.clientY), s = n.subtract(this._startPoint);
            (s.x || s.y) && (o.Browser.touch && Math.abs(s.x) + Math.abs(s.y) < 3 || (o.DomEvent.preventDefault(t), this._moved || (this.fire("dragstart"), this._moved = !0, this._startPos = o.DomUtil.getPosition(this._element).subtract(s), o.DomUtil.addClass(e.body, "leaflet-dragging"), this._lastTarget = t.target || t.srcElement, o.DomUtil.addClass(this._lastTarget, "leaflet-drag-target")), this._newPos = this._startPos.add(s), this._moving = !0, o.Util.cancelAnimFrame(this._animRequest), this._animRequest = o.Util.requestAnimFrame(this._updatePosition, this, !0, this._dragStartTarget)))
        },
        _updatePosition: function () {
            this.fire("predrag"), o.DomUtil.setPosition(this._element, this._newPos), this.fire("drag")
        },
        _onUp: function () {
            o.DomUtil.removeClass(e.body, "leaflet-dragging"), this._lastTarget && (o.DomUtil.removeClass(this._lastTarget, "leaflet-drag-target"), this._lastTarget = null);
            for (var t in o.Draggable.MOVE)o.DomEvent.off(e, o.Draggable.MOVE[t], this._onMove).off(e, o.Draggable.END[t], this._onUp);
            o.DomUtil.enableImageDrag(), o.DomUtil.enableTextSelection(), this._moved && this._moving && (o.Util.cancelAnimFrame(this._animRequest), this.fire("dragend", {distance: this._newPos.distanceTo(this._startPos)})), this._moving = !1
        }
    }), o.Handler = o.Class.extend({
        initialize: function (t) {
            this._map = t
        }, enable: function () {
            this._enabled || (this._enabled = !0, this.addHooks())
        }, disable: function () {
            this._enabled && (this._enabled = !1, this.removeHooks())
        }, enabled: function () {
            return !!this._enabled
        }
    }), o.Map.mergeOptions({
        dragging: !0,
        inertia: !o.Browser.android23,
        inertiaDeceleration: 3400,
        inertiaMaxSpeed: 1 / 0,
        inertiaThreshold: o.Browser.touch ? 32 : 18,
        easeLinearity: .25,
        worldCopyJump: !1
    }), o.Map.Drag = o.Handler.extend({
        addHooks: function () {
            if (!this._draggable) {
                var t = this._map;
                this._draggable = new o.Draggable(t._mapPane, t._container), this._draggable.on({
                    dragstart: this._onDragStart,
                    drag: this._onDrag,
                    dragend: this._onDragEnd
                }, this), t.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDrag, this), t.on("viewreset", this._onViewReset, this), t.whenReady(this._onViewReset, this))
            }
            this._draggable.enable()
        }, removeHooks: function () {
            this._draggable.disable()
        }, moved: function () {
            return this._draggable && this._draggable._moved
        }, _onDragStart: function () {
            var t = this._map;
            t._panAnim && t._panAnim.stop(), t.fire("movestart").fire("dragstart"), t.options.inertia && (this._positions = [], this._times = [])
        }, _onDrag: function () {
            if (this._map.options.inertia) {
                var t = this._lastTime = +new Date, e = this._lastPos = this._draggable._newPos;
                this._positions.push(e), this._times.push(t), t - this._times[0] > 200 && (this._positions.shift(), this._times.shift())
            }
            this._map.fire("move").fire("drag")
        }, _onViewReset: function () {
            var t = this._map.getSize()._divideBy(2), e = this._map.latLngToLayerPoint([0, 0]);
            this._initialWorldOffset = e.subtract(t).x, this._worldWidth = this._map.project([0, 180]).x
        }, _onPreDrag: function () {
            var t = this._worldWidth, e = Math.round(t / 2), i = this._initialWorldOffset, n = this._draggable._newPos.x, o = (n - e + i) % t + e - i, s = (n + e + i) % t - e - i, a = Math.abs(o + i) < Math.abs(s + i) ? o : s;
            this._draggable._newPos.x = a
        }, _onDragEnd: function (t) {
            var e = this._map, i = e.options, n = +new Date - this._lastTime, s = !i.inertia || n > i.inertiaThreshold || !this._positions[0];
            if (e.fire("dragend", t), s)e.fire("moveend"); else {
                var a = this._lastPos.subtract(this._positions[0]), r = (this._lastTime + n - this._times[0]) / 1e3, h = i.easeLinearity, l = a.multiplyBy(h / r), u = l.distanceTo([0, 0]), c = Math.min(i.inertiaMaxSpeed, u), d = l.multiplyBy(c / u), p = c / (i.inertiaDeceleration * h), _ = d.multiplyBy(-p / 2).round();
                _.x && _.y ? (_ = e._limitOffset(_, e.options.maxBounds), o.Util.requestAnimFrame(function () {
                    e.panBy(_, {duration: p, easeLinearity: h, noMoveStart: !0})
                })) : e.fire("moveend")
            }
        }
    }), o.Map.addInitHook("addHandler", "dragging", o.Map.Drag), o.Map.mergeOptions({doubleClickZoom: !0}), o.Map.DoubleClickZoom = o.Handler.extend({
        addHooks: function () {
            this._map.on("dblclick", this._onDoubleClick, this)
        }, removeHooks: function () {
            this._map.off("dblclick", this._onDoubleClick, this)
        }, _onDoubleClick: function (t) {
            var e = this._map, i = e.getZoom() + (t.originalEvent.shiftKey ? -1 : 1);
            "center" === e.options.doubleClickZoom ? e.setZoom(i) : e.setZoomAround(t.containerPoint, i)
        }
    }), o.Map.addInitHook("addHandler", "doubleClickZoom", o.Map.DoubleClickZoom), o.Map.mergeOptions({scrollWheelZoom: !0}), o.Map.ScrollWheelZoom = o.Handler.extend({
        addHooks: function () {
            o.DomEvent.on(this._map._container, "mousewheel", this._onWheelScroll, this), o.DomEvent.on(this._map._container, "MozMousePixelScroll", o.DomEvent.preventDefault), this._delta = 0
        }, removeHooks: function () {
            o.DomEvent.off(this._map._container, "mousewheel", this._onWheelScroll), o.DomEvent.off(this._map._container, "MozMousePixelScroll", o.DomEvent.preventDefault)
        }, _onWheelScroll: function (t) {
            var e = o.DomEvent.getWheelDelta(t);
            this._delta += e, this._lastMousePos = this._map.mouseEventToContainerPoint(t), this._startTime || (this._startTime = +new Date);
            var i = Math.max(40 - (+new Date - this._startTime), 0);
            clearTimeout(this._timer), this._timer = setTimeout(o.bind(this._performZoom, this), i), o.DomEvent.preventDefault(t), o.DomEvent.stopPropagation(t)
        }, _performZoom: function () {
            var t = this._map, e = this._delta, i = t.getZoom();
            e = e > 0 ? Math.ceil(e) : Math.floor(e), e = Math.max(Math.min(e, 4), -4), e = t._limitZoom(i + e) - i, this._delta = 0, this._startTime = null, e && ("center" === t.options.scrollWheelZoom ? t.setZoom(i + e) : t.setZoomAround(this._lastMousePos, i + e))
        }
    }), o.Map.addInitHook("addHandler", "scrollWheelZoom", o.Map.ScrollWheelZoom), o.extend(o.DomEvent, {
        _touchstart: o.Browser.msPointer ? "MSPointerDown" : o.Browser.pointer ? "pointerdown" : "touchstart",
        _touchend: o.Browser.msPointer ? "MSPointerUp" : o.Browser.pointer ? "pointerup" : "touchend",
        addDoubleTapListener: function (t, i, n) {
            function s(t) {
                var e;
                if (o.Browser.pointer ? (_.push(t.pointerId), e = _.length) : e = t.touches.length, !(e > 1)) {
                    var i = Date.now(), n = i - (r || i);
                    h = t.touches ? t.touches[0] : t, l = n > 0 && u >= n, r = i
                }
            }

            function a(t) {
                if (o.Browser.pointer) {
                    var e = _.indexOf(t.pointerId);
                    if (-1 === e)return;
                    _.splice(e, 1)
                }
                if (l) {
                    if (o.Browser.pointer) {
                        var n, s = {};
                        for (var a in h)n = h[a], s[a] = "function" == typeof n ? n.bind(h) : n;
                        h = s
                    }
                    h.type = "dblclick", i(h), r = null
                }
            }

            var r, h, l = !1, u = 250, c = "_leaflet_", d = this._touchstart, p = this._touchend, _ = [];
            t[c + d + n] = s, t[c + p + n] = a;
            var m = o.Browser.pointer ? e.documentElement : t;
            return t.addEventListener(d, s, !1), m.addEventListener(p, a, !1), o.Browser.pointer && m.addEventListener(o.DomEvent.POINTER_CANCEL, a, !1), this
        },
        removeDoubleTapListener: function (t, i) {
            var n = "_leaflet_";
            return t.removeEventListener(this._touchstart, t[n + this._touchstart + i], !1), (o.Browser.pointer ? e.documentElement : t).removeEventListener(this._touchend, t[n + this._touchend + i], !1), o.Browser.pointer && e.documentElement.removeEventListener(o.DomEvent.POINTER_CANCEL, t[n + this._touchend + i], !1), this
        }
    }), o.extend(o.DomEvent, {
        POINTER_DOWN: o.Browser.msPointer ? "MSPointerDown" : "pointerdown",
        POINTER_MOVE: o.Browser.msPointer ? "MSPointerMove" : "pointermove",
        POINTER_UP: o.Browser.msPointer ? "MSPointerUp" : "pointerup",
        POINTER_CANCEL: o.Browser.msPointer ? "MSPointerCancel" : "pointercancel",
        _pointers: [],
        _pointerDocumentListener: !1,
        addPointerListener: function (t, e, i, n) {
            switch (e) {
                case"touchstart":
                    return this.addPointerListenerStart(t, e, i, n);
                case"touchend":
                    return this.addPointerListenerEnd(t, e, i, n);
                case"touchmove":
                    return this.addPointerListenerMove(t, e, i, n);
                default:
                    throw"Unknown touch event type"
            }
        },
        addPointerListenerStart: function (t, i, n, s) {
            var a = "_leaflet_", r = this._pointers, h = function (t) {
                o.DomEvent.preventDefault(t);
                for (var e = !1, i = 0; i < r.length; i++)if (r[i].pointerId === t.pointerId) {
                    e = !0;
                    break
                }
                e || r.push(t), t.touches = r.slice(), t.changedTouches = [t], n(t)
            };
            if (t[a + "touchstart" + s] = h, t.addEventListener(this.POINTER_DOWN, h, !1), !this._pointerDocumentListener) {
                var l = function (t) {
                    for (var e = 0; e < r.length; e++)if (r[e].pointerId === t.pointerId) {
                        r.splice(e, 1);
                        break
                    }
                };
                e.documentElement.addEventListener(this.POINTER_UP, l, !1), e.documentElement.addEventListener(this.POINTER_CANCEL, l, !1), this._pointerDocumentListener = !0
            }
            return this
        },
        addPointerListenerMove: function (t, e, i, n) {
            function o(t) {
                if (t.pointerType !== t.MSPOINTER_TYPE_MOUSE && "mouse" !== t.pointerType || 0 !== t.buttons) {
                    for (var e = 0; e < a.length; e++)if (a[e].pointerId === t.pointerId) {
                        a[e] = t;
                        break
                    }
                    t.touches = a.slice(), t.changedTouches = [t], i(t)
                }
            }

            var s = "_leaflet_", a = this._pointers;
            return t[s + "touchmove" + n] = o, t.addEventListener(this.POINTER_MOVE, o, !1), this
        },
        addPointerListenerEnd: function (t, e, i, n) {
            var o = "_leaflet_", s = this._pointers, a = function (t) {
                for (var e = 0; e < s.length; e++)if (s[e].pointerId === t.pointerId) {
                    s.splice(e, 1);
                    break
                }
                t.touches = s.slice(), t.changedTouches = [t], i(t)
            };
            return t[o + "touchend" + n] = a, t.addEventListener(this.POINTER_UP, a, !1), t.addEventListener(this.POINTER_CANCEL, a, !1), this
        },
        removePointerListener: function (t, e, i) {
            var n = "_leaflet_", o = t[n + e + i];
            switch (e) {
                case"touchstart":
                    t.removeEventListener(this.POINTER_DOWN, o, !1);
                    break;
                case"touchmove":
                    t.removeEventListener(this.POINTER_MOVE, o, !1);
                    break;
                case"touchend":
                    t.removeEventListener(this.POINTER_UP, o, !1), t.removeEventListener(this.POINTER_CANCEL, o, !1)
            }
            return this
        }
    }), o.Map.mergeOptions({
        touchZoom: o.Browser.touch && !o.Browser.android23,
        bounceAtZoomLimits: !0
    }), o.Map.TouchZoom = o.Handler.extend({
        addHooks: function () {
            o.DomEvent.on(this._map._container, "touchstart", this._onTouchStart, this)
        }, removeHooks: function () {
            o.DomEvent.off(this._map._container, "touchstart", this._onTouchStart, this)
        }, _onTouchStart: function (t) {
            var i = this._map;
            if (t.touches && 2 === t.touches.length && !i._animatingZoom && !this._zooming) {
                var n = i.mouseEventToLayerPoint(t.touches[0]), s = i.mouseEventToLayerPoint(t.touches[1]), a = i._getCenterLayerPoint();
                this._startCenter = n.add(s)._divideBy(2), this._startDist = n.distanceTo(s), this._moved = !1, this._zooming = !0, this._centerOffset = a.subtract(this._startCenter), i._panAnim && i._panAnim.stop(), o.DomEvent.on(e, "touchmove", this._onTouchMove, this).on(e, "touchend", this._onTouchEnd, this), o.DomEvent.preventDefault(t)
            }
        }, _onTouchMove: function (t) {
            var e = this._map;
            if (t.touches && 2 === t.touches.length && this._zooming) {
                var i = e.mouseEventToLayerPoint(t.touches[0]), n = e.mouseEventToLayerPoint(t.touches[1]);
                this._scale = i.distanceTo(n) / this._startDist, this._delta = i._add(n)._divideBy(2)._subtract(this._startCenter), 1 !== this._scale && (e.options.bounceAtZoomLimits || !(e.getZoom() === e.getMinZoom() && this._scale < 1 || e.getZoom() === e.getMaxZoom() && this._scale > 1)) && (this._moved || (o.DomUtil.addClass(e._mapPane, "leaflet-touching"), e.fire("movestart").fire("zoomstart"), this._moved = !0), o.Util.cancelAnimFrame(this._animRequest), this._animRequest = o.Util.requestAnimFrame(this._updateOnMove, this, !0, this._map._container), o.DomEvent.preventDefault(t))
            }
        }, _updateOnMove: function () {
            var t = this._map, e = this._getScaleOrigin(), i = t.layerPointToLatLng(e), n = t.getScaleZoom(this._scale);
            t._animateZoom(i, n, this._startCenter, this._scale, this._delta, !1, !0)
        }, _onTouchEnd: function () {
            if (!this._moved || !this._zooming)return void(this._zooming = !1);
            var t = this._map;
            this._zooming = !1, o.DomUtil.removeClass(t._mapPane, "leaflet-touching"), o.Util.cancelAnimFrame(this._animRequest), o.DomEvent.off(e, "touchmove", this._onTouchMove).off(e, "touchend", this._onTouchEnd);
            var i = this._getScaleOrigin(), n = t.layerPointToLatLng(i), s = t.getZoom(), a = t.getScaleZoom(this._scale) - s, r = a > 0 ? Math.ceil(a) : Math.floor(a), h = t._limitZoom(s + r), l = t.getZoomScale(h) / this._scale;
            t._animateZoom(n, h, i, l)
        }, _getScaleOrigin: function () {
            var t = this._centerOffset.subtract(this._delta).divideBy(this._scale);
            return this._startCenter.add(t)
        }
    }), o.Map.addInitHook("addHandler", "touchZoom", o.Map.TouchZoom), o.Map.mergeOptions({
        tap: !0,
        tapTolerance: 15
    }), o.Map.Tap = o.Handler.extend({
        addHooks: function () {
            o.DomEvent.on(this._map._container, "touchstart", this._onDown, this)
        }, removeHooks: function () {
            o.DomEvent.off(this._map._container, "touchstart", this._onDown, this)
        }, _onDown: function (t) {
            if (t.touches) {
                if (o.DomEvent.preventDefault(t), this._fireClick = !0, t.touches.length > 1)return this._fireClick = !1, void clearTimeout(this._holdTimeout);
                var i = t.touches[0], n = i.target;
                this._startPos = this._newPos = new o.Point(i.clientX, i.clientY), n.tagName && "a" === n.tagName.toLowerCase() && o.DomUtil.addClass(n, "leaflet-active"), this._holdTimeout = setTimeout(o.bind(function () {
                    this._isTapValid() && (this._fireClick = !1, this._onUp(), this._simulateEvent("contextmenu", i))
                }, this), 1e3), o.DomEvent.on(e, "touchmove", this._onMove, this).on(e, "touchend", this._onUp, this)
            }
        }, _onUp: function (t) {
            if (clearTimeout(this._holdTimeout), o.DomEvent.off(e, "touchmove", this._onMove, this).off(e, "touchend", this._onUp, this), this._fireClick && t && t.changedTouches) {
                var i = t.changedTouches[0], n = i.target;
                n && n.tagName && "a" === n.tagName.toLowerCase() && o.DomUtil.removeClass(n, "leaflet-active"), this._isTapValid() && this._simulateEvent("click", i)
            }
        }, _isTapValid: function () {
            return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance
        }, _onMove: function (t) {
            var e = t.touches[0];
            this._newPos = new o.Point(e.clientX, e.clientY)
        }, _simulateEvent: function (i, n) {
            var o = e.createEvent("MouseEvents");
            o._simulated = !0, n.target._simulatedClick = !0, o.initMouseEvent(i, !0, !0, t, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null), n.target.dispatchEvent(o)
        }
    }), o.Browser.touch && !o.Browser.pointer && o.Map.addInitHook("addHandler", "tap", o.Map.Tap), o.Map.mergeOptions({boxZoom: !0}), o.Map.BoxZoom = o.Handler.extend({
        initialize: function (t) {
            this._map = t, this._container = t._container, this._pane = t._panes.overlayPane, this._moved = !1
        }, addHooks: function () {
            o.DomEvent.on(this._container, "mousedown", this._onMouseDown, this)
        }, removeHooks: function () {
            o.DomEvent.off(this._container, "mousedown", this._onMouseDown), this._moved = !1
        }, moved: function () {
            return this._moved
        }, _onMouseDown: function (t) {
            return this._moved = !1, !t.shiftKey || 1 !== t.which && 1 !== t.button ? !1 : (o.DomUtil.disableTextSelection(), o.DomUtil.disableImageDrag(), this._startLayerPoint = this._map.mouseEventToLayerPoint(t), void o.DomEvent.on(e, "mousemove", this._onMouseMove, this).on(e, "mouseup", this._onMouseUp, this).on(e, "keydown", this._onKeyDown, this))
        }, _onMouseMove: function (t) {
            this._moved || (this._box = o.DomUtil.create("div", "leaflet-zoom-box", this._pane), o.DomUtil.setPosition(this._box, this._startLayerPoint), this._container.style.cursor = "crosshair", this._map.fire("boxzoomstart"));
            var e = this._startLayerPoint, i = this._box, n = this._map.mouseEventToLayerPoint(t), s = n.subtract(e), a = new o.Point(Math.min(n.x, e.x), Math.min(n.y, e.y));
            o.DomUtil.setPosition(i, a), this._moved = !0, i.style.width = Math.max(0, Math.abs(s.x) - 4) + "px", i.style.height = Math.max(0, Math.abs(s.y) - 4) + "px"
        }, _finish: function () {
            this._moved && (this._pane.removeChild(this._box), this._container.style.cursor = ""), o.DomUtil.enableTextSelection(), o.DomUtil.enableImageDrag(), o.DomEvent.off(e, "mousemove", this._onMouseMove).off(e, "mouseup", this._onMouseUp).off(e, "keydown", this._onKeyDown)
        }, _onMouseUp: function (t) {
            this._finish();
            var e = this._map, i = e.mouseEventToLayerPoint(t);
            if (!this._startLayerPoint.equals(i)) {
                var n = new o.LatLngBounds(e.layerPointToLatLng(this._startLayerPoint), e.layerPointToLatLng(i));
                e.fitBounds(n), e.fire("boxzoomend", {boxZoomBounds: n})
            }
        }, _onKeyDown: function (t) {
            27 === t.keyCode && this._finish()
        }
    }), o.Map.addInitHook("addHandler", "boxZoom", o.Map.BoxZoom), o.Map.mergeOptions({
        keyboard: !0,
        keyboardPanOffset: 80,
        keyboardZoomOffset: 1
    }), o.Map.Keyboard = o.Handler.extend({
        keyCodes: {
            left: [37],
            right: [39],
            down: [40],
            up: [38],
            zoomIn: [187, 107, 61, 171],
            zoomOut: [189, 109, 173]
        }, initialize: function (t) {
            this._map = t, this._setPanOffset(t.options.keyboardPanOffset), this._setZoomOffset(t.options.keyboardZoomOffset)
        }, addHooks: function () {
            var t = this._map._container;
            -1 === t.tabIndex && (t.tabIndex = "0"), o.DomEvent.on(t, "focus", this._onFocus, this).on(t, "blur", this._onBlur, this).on(t, "mousedown", this._onMouseDown, this), this._map.on("focus", this._addHooks, this).on("blur", this._removeHooks, this)
        }, removeHooks: function () {
            this._removeHooks();
            var t = this._map._container;
            o.DomEvent.off(t, "focus", this._onFocus, this).off(t, "blur", this._onBlur, this).off(t, "mousedown", this._onMouseDown, this), this._map.off("focus", this._addHooks, this).off("blur", this._removeHooks, this)
        }, _onMouseDown: function () {
            if (!this._focused) {
                var i = e.body, n = e.documentElement, o = i.scrollTop || n.scrollTop, s = i.scrollLeft || n.scrollLeft;
                this._map._container.focus(), t.scrollTo(s, o)
            }
        }, _onFocus: function () {
            this._focused = !0, this._map.fire("focus")
        }, _onBlur: function () {
            this._focused = !1, this._map.fire("blur")
        }, _setPanOffset: function (t) {
            var e, i, n = this._panKeys = {}, o = this.keyCodes;
            for (e = 0, i = o.left.length; i > e; e++)n[o.left[e]] = [-1 * t, 0];
            for (e = 0, i = o.right.length; i > e; e++)n[o.right[e]] = [t, 0];
            for (e = 0, i = o.down.length; i > e; e++)n[o.down[e]] = [0, t];
            for (e = 0, i = o.up.length; i > e; e++)n[o.up[e]] = [0, -1 * t]
        }, _setZoomOffset: function (t) {
            var e, i, n = this._zoomKeys = {}, o = this.keyCodes;
            for (e = 0, i = o.zoomIn.length; i > e; e++)n[o.zoomIn[e]] = t;
            for (e = 0, i = o.zoomOut.length; i > e; e++)n[o.zoomOut[e]] = -t
        }, _addHooks: function () {
            o.DomEvent.on(e, "keydown", this._onKeyDown, this)
        }, _removeHooks: function () {
            o.DomEvent.off(e, "keydown", this._onKeyDown, this)
        }, _onKeyDown: function (t) {
            var e = t.keyCode, i = this._map;
            if (e in this._panKeys) {
                if (i._panAnim && i._panAnim._inProgress)return;
                i.panBy(this._panKeys[e]), i.options.maxBounds && i.panInsideBounds(i.options.maxBounds)
            } else {
                if (!(e in this._zoomKeys))return;
                i.setZoom(i.getZoom() + this._zoomKeys[e])
            }
            o.DomEvent.stop(t)
        }
    }), o.Map.addInitHook("addHandler", "keyboard", o.Map.Keyboard), o.Handler.MarkerDrag = o.Handler.extend({
        initialize: function (t) {
            this._marker = t
        }, addHooks: function () {
            var t = this._marker._icon;
            this._draggable || (this._draggable = new o.Draggable(t, t)), this._draggable.on("dragstart", this._onDragStart, this).on("drag", this._onDrag, this).on("dragend", this._onDragEnd, this), this._draggable.enable(), o.DomUtil.addClass(this._marker._icon, "leaflet-marker-draggable")
        }, removeHooks: function () {
            this._draggable.off("dragstart", this._onDragStart, this).off("drag", this._onDrag, this).off("dragend", this._onDragEnd, this), this._draggable.disable(), o.DomUtil.removeClass(this._marker._icon, "leaflet-marker-draggable")
        }, moved: function () {
            return this._draggable && this._draggable._moved
        }, _onDragStart: function () {
            this._marker.closePopup().fire("movestart").fire("dragstart")
        }, _onDrag: function () {
            var t = this._marker, e = t._shadow, i = o.DomUtil.getPosition(t._icon), n = t._map.layerPointToLatLng(i);
            e && o.DomUtil.setPosition(e, i), t._latlng = n, t.fire("move", {latlng: n}).fire("drag")
        }, _onDragEnd: function (t) {
            this._marker.fire("moveend").fire("dragend", t)
        }
    }), o.Control = o.Class.extend({
        options: {position: "topright"}, initialize: function (t) {
            o.setOptions(this, t)
        }, getPosition: function () {
            return this.options.position
        }, setPosition: function (t) {
            var e = this._map;
            return e && e.removeControl(this), this.options.position = t, e && e.addControl(this), this
        }, getContainer: function () {
            return this._container
        }, addTo: function (t) {
            this._map = t;
            var e = this._container = this.onAdd(t), i = this.getPosition(), n = t._controlCorners[i];
            return o.DomUtil.addClass(e, "leaflet-control"), -1 !== i.indexOf("bottom") ? n.insertBefore(e, n.firstChild) : n.appendChild(e), this
        }, removeFrom: function (t) {
            var e = this.getPosition(), i = t._controlCorners[e];
            return i.removeChild(this._container), this._map = null, this.onRemove && this.onRemove(t), this
        }, _refocusOnMap: function () {
            this._map && this._map.getContainer().focus()
        }
    }), o.control = function (t) {
        return new o.Control(t)
    }, o.Map.include({
        addControl: function (t) {
            return t.addTo(this), this
        }, removeControl: function (t) {
            return t.removeFrom(this), this
        }, _initControlPos: function () {
            function t(t, s) {
                var a = i + t + " " + i + s;
                e[t + s] = o.DomUtil.create("div", a, n)
            }

            var e = this._controlCorners = {}, i = "leaflet-", n = this._controlContainer = o.DomUtil.create("div", i + "control-container", this._container);
            t("top", "left"), t("top", "right"), t("bottom", "left"), t("bottom", "right")
        }, _clearControlPos: function () {
            this._container.removeChild(this._controlContainer)
        }
    }), o.Control.Zoom = o.Control.extend({
        options: {
            position: "topleft",
            zoomInText: "+",
            zoomInTitle: "Zoom in",
            zoomOutText: "-",
            zoomOutTitle: "Zoom out"
        }, onAdd: function (t) {
            var e = "leaflet-control-zoom", i = o.DomUtil.create("div", e + " leaflet-bar");
            return this._map = t, this._zoomInButton = this._createButton(this.options.zoomInText, this.options.zoomInTitle, e + "-in", i, this._zoomIn, this), this._zoomOutButton = this._createButton(this.options.zoomOutText, this.options.zoomOutTitle, e + "-out", i, this._zoomOut, this), this._updateDisabled(), t.on("zoomend zoomlevelschange", this._updateDisabled, this), i
        }, onRemove: function (t) {
            t.off("zoomend zoomlevelschange", this._updateDisabled, this)
        }, _zoomIn: function (t) {
            this._map.zoomIn(t.shiftKey ? 3 : 1)
        }, _zoomOut: function (t) {
            this._map.zoomOut(t.shiftKey ? 3 : 1)
        }, _createButton: function (t, e, i, n, s, a) {
            var r = o.DomUtil.create("a", i, n);
            r.innerHTML = t, r.href = "#", r.title = e;
            var h = o.DomEvent.stopPropagation;
            return o.DomEvent.on(r, "click", h).on(r, "mousedown", h).on(r, "dblclick", h).on(r, "click", o.DomEvent.preventDefault).on(r, "click", s, a).on(r, "click", this._refocusOnMap, a), r
        }, _updateDisabled: function () {
            var t = this._map, e = "leaflet-disabled";
            o.DomUtil.removeClass(this._zoomInButton, e), o.DomUtil.removeClass(this._zoomOutButton, e), t._zoom === t.getMinZoom() && o.DomUtil.addClass(this._zoomOutButton, e), t._zoom === t.getMaxZoom() && o.DomUtil.addClass(this._zoomInButton, e)
        }
    }), o.Map.mergeOptions({zoomControl: !0}), o.Map.addInitHook(function () {
        this.options.zoomControl && (this.zoomControl = new o.Control.Zoom, this.addControl(this.zoomControl))
    }), o.control.zoom = function (t) {
        return new o.Control.Zoom(t)
    }, o.Control.Attribution = o.Control.extend({
        options: {
            position: "bottomright",
            prefix: '<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'
        }, initialize: function (t) {
            o.setOptions(this, t), this._attributions = {}
        }, onAdd: function (t) {
            this._container = o.DomUtil.create("div", "leaflet-control-attribution"), o.DomEvent.disableClickPropagation(this._container);
            for (var e in t._layers)t._layers[e].getAttribution && this.addAttribution(t._layers[e].getAttribution());
            return t.on("layeradd", this._onLayerAdd, this).on("layerremove", this._onLayerRemove, this), this._update(), this._container
        }, onRemove: function (t) {
            t.off("layeradd", this._onLayerAdd).off("layerremove", this._onLayerRemove)
        }, setPrefix: function (t) {
            return this.options.prefix = t, this._update(), this
        }, addAttribution: function (t) {
            return t ? (this._attributions[t] || (this._attributions[t] = 0), this._attributions[t]++, this._update(), this) : void 0
        }, removeAttribution: function (t) {
            return t ? (this._attributions[t] && (this._attributions[t]--, this._update()), this) : void 0
        }, _update: function () {
            if (this._map) {
                var t = [];
                for (var e in this._attributions)this._attributions[e] && t.push(e);
                var i = [];
                this.options.prefix && i.push(this.options.prefix), t.length && i.push(t.join(", ")), this._container.innerHTML = i.join(" | ")
            }
        }, _onLayerAdd: function (t) {
            t.layer.getAttribution && this.addAttribution(t.layer.getAttribution())
        }, _onLayerRemove: function (t) {
            t.layer.getAttribution && this.removeAttribution(t.layer.getAttribution())
        }
    }), o.Map.mergeOptions({attributionControl: !0}), o.Map.addInitHook(function () {
        this.options.attributionControl && (this.attributionControl = (new o.Control.Attribution).addTo(this))
    }), o.control.attribution = function (t) {
        return new o.Control.Attribution(t)
    }, o.Control.Scale = o.Control.extend({
        options: {
            position: "bottomleft",
            maxWidth: 100,
            metric: !0,
            imperial: !0,
            updateWhenIdle: !1
        }, onAdd: function (t) {
            this._map = t;
            var e = "leaflet-control-scale", i = o.DomUtil.create("div", e), n = this.options;
            return this._addScales(n, e, i), t.on(n.updateWhenIdle ? "moveend" : "move", this._update, this), t.whenReady(this._update, this), i
        }, onRemove: function (t) {
            t.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this)
        }, _addScales: function (t, e, i) {
            t.metric && (this._mScale = o.DomUtil.create("div", e + "-line", i)), t.imperial && (this._iScale = o.DomUtil.create("div", e + "-line", i))
        }, _update: function () {
            var t = this._map.getBounds(), e = t.getCenter().lat, i = 6378137 * Math.PI * Math.cos(e * Math.PI / 180), n = i * (t.getNorthEast().lng - t.getSouthWest().lng) / 180, o = this._map.getSize(), s = this.options, a = 0;
            o.x > 0 && (a = n * (s.maxWidth / o.x)), this._updateScales(s, a)
        }, _updateScales: function (t, e) {
            t.metric && e && this._updateMetric(e), t.imperial && e && this._updateImperial(e)
        }, _updateMetric: function (t) {
            var e = this._getRoundNum(t);
            this._mScale.style.width = this._getScaleWidth(e / t) + "px", this._mScale.innerHTML = 1e3 > e ? e + " m" : e / 1e3 + " km"
        }, _updateImperial: function (t) {
            var e, i, n, o = 3.2808399 * t, s = this._iScale;
            o > 5280 ? (e = o / 5280, i = this._getRoundNum(e), s.style.width = this._getScaleWidth(i / e) + "px", s.innerHTML = i + " mi") : (n = this._getRoundNum(o), s.style.width = this._getScaleWidth(n / o) + "px", s.innerHTML = n + " ft")
        }, _getScaleWidth: function (t) {
            return Math.round(this.options.maxWidth * t) - 10
        }, _getRoundNum: function (t) {
            var e = Math.pow(10, (Math.floor(t) + "").length - 1), i = t / e;
            return i = i >= 10 ? 10 : i >= 5 ? 5 : i >= 3 ? 3 : i >= 2 ? 2 : 1, e * i
        }
    }), o.control.scale = function (t) {
        return new o.Control.Scale(t)
    }, o.Control.Layers = o.Control.extend({
        options: {collapsed: !0, position: "topright", autoZIndex: !0},
        initialize: function (t, e, i) {
            o.setOptions(this, i), this._layers = {}, this._lastZIndex = 0, this._handlingClick = !1;
            for (var n in t)this._addLayer(t[n], n);
            for (n in e)this._addLayer(e[n], n, !0)
        },
        onAdd: function (t) {
            return this._initLayout(), this._update(), t.on("layeradd", this._onLayerChange, this).on("layerremove", this._onLayerChange, this), this._container
        },
        onRemove: function (t) {
            t.off("layeradd", this._onLayerChange, this).off("layerremove", this._onLayerChange, this)
        },
        addBaseLayer: function (t, e) {
            return this._addLayer(t, e), this._update(), this
        },
        addOverlay: function (t, e) {
            return this._addLayer(t, e, !0), this._update(), this
        },
        removeLayer: function (t) {
            var e = o.stamp(t);
            return delete this._layers[e], this._update(), this
        },
        _initLayout: function () {
            var t = "leaflet-control-layers", e = this._container = o.DomUtil.create("div", t);
            e.setAttribute("aria-haspopup", !0), o.Browser.touch ? o.DomEvent.on(e, "click", o.DomEvent.stopPropagation) : o.DomEvent.disableClickPropagation(e).disableScrollPropagation(e);
            var i = this._form = o.DomUtil.create("form", t + "-list");
            if (this.options.collapsed) {
                o.Browser.android || o.DomEvent.on(e, "mouseover", this._expand, this).on(e, "mouseout", this._collapse, this);
                var n = this._layersLink = o.DomUtil.create("a", t + "-toggle", e);
                n.href = "#", n.title = "Layers", o.Browser.touch ? o.DomEvent.on(n, "click", o.DomEvent.stop).on(n, "click", this._expand, this) : o.DomEvent.on(n, "focus", this._expand, this), o.DomEvent.on(i, "click", function () {
                    setTimeout(o.bind(this._onInputClick, this), 0)
                }, this), this._map.on("click", this._collapse, this)
            } else this._expand();
            this._baseLayersList = o.DomUtil.create("div", t + "-base", i), this._separator = o.DomUtil.create("div", t + "-separator", i), this._overlaysList = o.DomUtil.create("div", t + "-overlays", i), e.appendChild(i)
        },
        _addLayer: function (t, e, i) {
            var n = o.stamp(t);
            this._layers[n] = {
                layer: t,
                name: e,
                overlay: i
            }, this.options.autoZIndex && t.setZIndex && (this._lastZIndex++, t.setZIndex(this._lastZIndex))
        },
        _update: function () {
            if (this._container) {
                this._baseLayersList.innerHTML = "", this._overlaysList.innerHTML = "";
                var t, e, i = !1, n = !1;
                for (t in this._layers)e = this._layers[t], this._addItem(e), n = n || e.overlay, i = i || !e.overlay;
                this._separator.style.display = n && i ? "" : "none"
            }
        },
        _onLayerChange: function (t) {
            var e = this._layers[o.stamp(t.layer)];
            if (e) {
                this._handlingClick || this._update();
                var i = e.overlay ? "layeradd" === t.type ? "overlayadd" : "overlayremove" : "layeradd" === t.type ? "baselayerchange" : null;
                i && this._map.fire(i, e)
            }
        },
        _createRadioElement: function (t, i) {
            var n = '<input type="radio" class="leaflet-control-layers-selector" name="' + t + '"';
            i && (n += ' checked="checked"'), n += "/>";
            var o = e.createElement("div");
            return o.innerHTML = n, o.firstChild
        },
        _addItem: function (t) {
            var i, n = e.createElement("label"), s = this._map.hasLayer(t.layer);
            t.overlay ? (i = e.createElement("input"), i.type = "checkbox", i.className = "leaflet-control-layers-selector", i.defaultChecked = s) : i = this._createRadioElement("leaflet-base-layers", s), i.layerId = o.stamp(t.layer), o.DomEvent.on(i, "click", this._onInputClick, this);
            var a = e.createElement("span");
            a.innerHTML = " " + t.name, n.appendChild(i), n.appendChild(a);
            var r = t.overlay ? this._overlaysList : this._baseLayersList;
            return r.appendChild(n), n
        },
        _onInputClick: function () {
            var t, e, i, n = this._form.getElementsByTagName("input"), o = n.length;
            for (this._handlingClick = !0, t = 0; o > t; t++)e = n[t], i = this._layers[e.layerId], e.checked && !this._map.hasLayer(i.layer) ? this._map.addLayer(i.layer) : !e.checked && this._map.hasLayer(i.layer) && this._map.removeLayer(i.layer);
            this._handlingClick = !1, this._refocusOnMap()
        },
        _expand: function () {
            o.DomUtil.addClass(this._container, "leaflet-control-layers-expanded")
        },
        _collapse: function () {
            this._container.className = this._container.className.replace(" leaflet-control-layers-expanded", "")
        }
    }), o.control.layers = function (t, e, i) {
        return new o.Control.Layers(t, e, i)
    }, o.PosAnimation = o.Class.extend({
        includes: o.Mixin.Events, run: function (t, e, i, n) {
            this.stop(), this._el = t, this._inProgress = !0, this._newPos = e, this.fire("start"), t.style[o.DomUtil.TRANSITION] = "all " + (i || .25) + "s cubic-bezier(0,0," + (n || .5) + ",1)", o.DomEvent.on(t, o.DomUtil.TRANSITION_END, this._onTransitionEnd, this), o.DomUtil.setPosition(t, e), o.Util.falseFn(t.offsetWidth), this._stepTimer = setInterval(o.bind(this._onStep, this), 50)
        }, stop: function () {
            this._inProgress && (o.DomUtil.setPosition(this._el, this._getPos()), this._onTransitionEnd(), o.Util.falseFn(this._el.offsetWidth))
        }, _onStep: function () {
            var t = this._getPos();
            return t ? (this._el._leaflet_pos = t, void this.fire("step")) : void this._onTransitionEnd()
        }, _transformRe: /([-+]?(?:\d*\.)?\d+)\D*, ([-+]?(?:\d*\.)?\d+)\D*\)/, _getPos: function () {
            var e, i, n, s = this._el, a = t.getComputedStyle(s);
            if (o.Browser.any3d) {
                if (n = a[o.DomUtil.TRANSFORM].match(this._transformRe), !n)return;
                e = parseFloat(n[1]), i = parseFloat(n[2])
            } else e = parseFloat(a.left), i = parseFloat(a.top);
            return new o.Point(e, i, !0)
        }, _onTransitionEnd: function () {
            o.DomEvent.off(this._el, o.DomUtil.TRANSITION_END, this._onTransitionEnd, this), this._inProgress && (this._inProgress = !1, this._el.style[o.DomUtil.TRANSITION] = "", this._el._leaflet_pos = this._newPos, clearInterval(this._stepTimer), this.fire("step").fire("end"))
        }
    }), o.Map.include({
        setView: function (t, e, n) {
            if (e = e === i ? this._zoom : this._limitZoom(e), t = this._limitCenter(o.latLng(t), e, this.options.maxBounds), n = n || {}, this._panAnim && this._panAnim.stop(), this._loaded && !n.reset && n !== !0) {
                n.animate !== i && (n.zoom = o.extend({animate: n.animate}, n.zoom), n.pan = o.extend({animate: n.animate}, n.pan));
                var s = this._zoom !== e ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, e, n.zoom) : this._tryAnimatedPan(t, n.pan);
                if (s)return clearTimeout(this._sizeTimer), this
            }
            return this._resetView(t, e), this
        }, panBy: function (t, e) {
            if (t = o.point(t).round(), e = e || {}, !t.x && !t.y)return this;
            if (this._panAnim || (this._panAnim = new o.PosAnimation, this._panAnim.on({
                    step: this._onPanTransitionStep,
                    end: this._onPanTransitionEnd
                }, this)), e.noMoveStart || this.fire("movestart"), e.animate !== !1) {
                o.DomUtil.addClass(this._mapPane, "leaflet-pan-anim");
                var i = this._getMapPanePos().subtract(t);
                this._panAnim.run(this._mapPane, i, e.duration || .25, e.easeLinearity)
            } else this._rawPanBy(t), this.fire("move").fire("moveend");
            return this
        }, _onPanTransitionStep: function () {
            this.fire("move")
        }, _onPanTransitionEnd: function () {
            o.DomUtil.removeClass(this._mapPane, "leaflet-pan-anim"), this.fire("moveend")
        }, _tryAnimatedPan: function (t, e) {
            var i = this._getCenterOffset(t)._floor();
            return (e && e.animate) === !0 || this.getSize().contains(i) ? (this.panBy(i, e), !0) : !1
        }
    }), o.PosAnimation = o.DomUtil.TRANSITION ? o.PosAnimation : o.PosAnimation.extend({
        run: function (t, e, i, n) {
            this.stop(), this._el = t, this._inProgress = !0, this._duration = i || .25, this._easeOutPower = 1 / Math.max(n || .5, .2), this._startPos = o.DomUtil.getPosition(t), this._offset = e.subtract(this._startPos), this._startTime = +new Date, this.fire("start"), this._animate()
        }, stop: function () {
            this._inProgress && (this._step(), this._complete())
        }, _animate: function () {
            this._animId = o.Util.requestAnimFrame(this._animate, this), this._step()
        }, _step: function () {
            var t = +new Date - this._startTime, e = 1e3 * this._duration;
            e > t ? this._runFrame(this._easeOut(t / e)) : (this._runFrame(1), this._complete())
        }, _runFrame: function (t) {
            var e = this._startPos.add(this._offset.multiplyBy(t));
            o.DomUtil.setPosition(this._el, e), this.fire("step")
        }, _complete: function () {
            o.Util.cancelAnimFrame(this._animId), this._inProgress = !1, this.fire("end")
        }, _easeOut: function (t) {
            return 1 - Math.pow(1 - t, this._easeOutPower)
        }
    }), o.Map.mergeOptions({
        zoomAnimation: !0,
        zoomAnimationThreshold: 4
    }), o.DomUtil.TRANSITION && o.Map.addInitHook(function () {
        this._zoomAnimated = this.options.zoomAnimation && o.DomUtil.TRANSITION && o.Browser.any3d && !o.Browser.android23 && !o.Browser.mobileOpera, this._zoomAnimated && o.DomEvent.on(this._mapPane, o.DomUtil.TRANSITION_END, this._catchTransitionEnd, this)
    }), o.Map.include(o.DomUtil.TRANSITION ? {
        _catchTransitionEnd: function (t) {
            this._animatingZoom && t.propertyName.indexOf("transform") >= 0 && this._onZoomTransitionEnd()
        }, _nothingToAnimate: function () {
            return !this._container.getElementsByClassName("leaflet-zoom-animated").length
        }, _tryAnimatedZoom: function (t, e, i) {
            if (this._animatingZoom)return !0;
            if (i = i || {}, !this._zoomAnimated || i.animate === !1 || this._nothingToAnimate() || Math.abs(e - this._zoom) > this.options.zoomAnimationThreshold)return !1;
            var n = this.getZoomScale(e), o = this._getCenterOffset(t)._divideBy(1 - 1 / n), s = this._getCenterLayerPoint()._add(o);
            return i.animate === !0 || this.getSize().contains(o) ? (this.fire("movestart").fire("zoomstart"), this._animateZoom(t, e, s, n, null, !0), !0) : !1
        }, _animateZoom: function (t, e, i, n, s, a, r) {
            r || (this._animatingZoom = !0), o.DomUtil.addClass(this._mapPane, "leaflet-zoom-anim"), this._animateToCenter = t, this._animateToZoom = e, o.Draggable && (o.Draggable._disabled = !0), o.Util.requestAnimFrame(function () {
                this.fire("zoomanim", {center: t, zoom: e, origin: i, scale: n, delta: s, backwards: a})
            }, this)
        }, _onZoomTransitionEnd: function () {
            this._animatingZoom = !1, o.DomUtil.removeClass(this._mapPane, "leaflet-zoom-anim"), this._resetView(this._animateToCenter, this._animateToZoom, !0, !0), o.Draggable && (o.Draggable._disabled = !1)
        }
    } : {}), o.TileLayer.include({
        _animateZoom: function (t) {
            this._animating || (this._animating = !0, this._prepareBgBuffer());
            var e = this._bgBuffer, i = o.DomUtil.TRANSFORM, n = t.delta ? o.DomUtil.getTranslateString(t.delta) : e.style[i], s = o.DomUtil.getScaleString(t.scale, t.origin);
            e.style[i] = t.backwards ? s + " " + n : n + " " + s
        }, _endZoomAnim: function () {
            var t = this._tileContainer, e = this._bgBuffer;
            t.style.visibility = "", t.parentNode.appendChild(t), o.Util.falseFn(e.offsetWidth), this._animating = !1
        }, _clearBgBuffer: function () {
            var t = this._map;
            !t || t._animatingZoom || t.touchZoom._zooming || (this._bgBuffer.innerHTML = "", this._bgBuffer.style[o.DomUtil.TRANSFORM] = "")
        }, _prepareBgBuffer: function () {
            var t = this._tileContainer, e = this._bgBuffer, i = this._getLoadedTilesPercentage(e), n = this._getLoadedTilesPercentage(t);
            return e && i > .5 && .5 > n ? (t.style.visibility = "hidden", void this._stopLoadingImages(t)) : (e.style.visibility = "hidden", e.style[o.DomUtil.TRANSFORM] = "", this._tileContainer = e, e = this._bgBuffer = t, this._stopLoadingImages(e), void clearTimeout(this._clearBgBufferTimer))
        }, _getLoadedTilesPercentage: function (t) {
            var e, i, n = t.getElementsByTagName("img"), o = 0;
            for (e = 0, i = n.length; i > e; e++)n[e].complete && o++;
            return o / i
        }, _stopLoadingImages: function (t) {
            var e, i, n, s = Array.prototype.slice.call(t.getElementsByTagName("img"));
            for (e = 0, i = s.length; i > e; e++)n = s[e], n.complete || (n.onload = o.Util.falseFn, n.onerror = o.Util.falseFn, n.src = o.Util.emptyImageUrl, n.parentNode.removeChild(n))
        }
    }), o.Map.include({
        _defaultLocateOptions: {
            watch: !1,
            setView: !1,
            maxZoom: 1 / 0,
            timeout: 1e4,
            maximumAge: 0,
            enableHighAccuracy: !1
        }, locate: function (t) {
            if (t = this._locateOptions = o.extend(this._defaultLocateOptions, t), !navigator.geolocation)return this._handleGeolocationError({
                code: 0,
                message: "Geolocation not supported."
            }), this;
            var e = o.bind(this._handleGeolocationResponse, this), i = o.bind(this._handleGeolocationError, this);
            return t.watch ? this._locationWatchId = navigator.geolocation.watchPosition(e, i, t) : navigator.geolocation.getCurrentPosition(e, i, t), this
        }, stopLocate: function () {
            return navigator.geolocation && navigator.geolocation.clearWatch(this._locationWatchId), this._locateOptions && (this._locateOptions.setView = !1), this
        }, _handleGeolocationError: function (t) {
            var e = t.code, i = t.message || (1 === e ? "permission denied" : 2 === e ? "position unavailable" : "timeout");
            this._locateOptions.setView && !this._loaded && this.fitWorld(), this.fire("locationerror", {
                code: e,
                message: "Geolocation error: " + i + "."
            })
        }, _handleGeolocationResponse: function (t) {
            var e = t.coords.latitude, i = t.coords.longitude, n = new o.LatLng(e, i), s = 180 * t.coords.accuracy / 40075017, a = s / Math.cos(o.LatLng.DEG_TO_RAD * e), r = o.latLngBounds([e - s, i - a], [e + s, i + a]), h = this._locateOptions;
            if (h.setView) {
                var l = Math.min(this.getBoundsZoom(r), h.maxZoom);
                this.setView(n, l)
            }
            var u = {latlng: n, bounds: r, timestamp: t.timestamp};
            for (var c in t.coords)"number" == typeof t.coords[c] && (u[c] = t.coords[c]);
            this.fire("locationfound", u)
        }
    })
}(window, document);
if (typeof console == "undefined") {
    this.console = {
        log: function (msg) { /* do nothing since it would otherwise break IE */
        }
    };
}


L.Control.OSMGeocoder = L.Control.extend({
    options: {
        collapsed: true,
        position: 'topright',
        text: 'Locate',
        bounds: null, // L.LatLngBounds
        email: null, // String
        callback: function (results) {
            if (results.length == 0) {
                console.log("ERROR: didn't find a result");
                return;
            }
            var bbox = results[0].boundingbox,
                first = new L.LatLng(bbox[0], bbox[2]),
                second = new L.LatLng(bbox[1], bbox[3]),
                bounds = new L.LatLngBounds([first, second]);
            this._map.fitBounds(bounds);
        }
    },

    _callbackId: 0,

    initialize: function (options) {
        L.Util.setOptions(this, options);
    },

    onAdd: function (map) {
        this._map = map;

        var className = 'leaflet-control-geocoder',
            container = this._container = L.DomUtil.create('div', className);

        L.DomEvent.disableClickPropagation(container);

        var form = this._form = L.DomUtil.create('form', className + '-form');

        var input = this._input = document.createElement('input');
        input.type = "text";

        var submit = document.createElement('input');
        submit.type = "submit";
        submit.value = this.options.text;

        form.appendChild(input);
        form.appendChild(submit);

        L.DomEvent.addListener(form, 'submit', this._geocode, this);

        if (this.options.collapsed) {
            L.DomEvent.addListener(container, 'mouseover', this._expand, this);
            L.DomEvent.addListener(container, 'mouseout', this._collapse, this);

            var link = this._layersLink = L.DomUtil.create('a', className + '-toggle', container);
            link.href = '#';
            link.title = 'Nominatim Geocoder';

            L.DomEvent.addListener(link, L.Browser.touch ? 'click' : 'focus', this._expand, this);

            this._map.on('movestart', this._collapse, this);
        } else {
            this._expand();
        }

        container.appendChild(form);

        return container;
    },

    /* helper functions for cordinate extraction */
    _createSearchResult: function (lat, lon) {
        //creates an position description similar to the result of a Nominatim search
        var diff = 0.005;
        var result = [];
        result[0] = {};
        result[0]["boundingbox"] = [parseFloat(lat) - diff, parseFloat(lat) + diff, parseFloat(lon) - diff, parseFloat(lon) + diff];
        result[0]["class"] = "boundary";
        result[0]["display_name"] = "Position: " + lat + " " + lon;
        result[0]["lat"] = lat;
        result[0]["lon"] = lon;
        return result;
    },
    _isLatLon: function (q) {
        //"lon lat" => xx.xxx x.xxxxx
        var re = /(-?\d+\.\d+)\s(-?\d+\.\d+)/;
        var m = re.exec(q);
        if (m != undefined) return m;

        //lat...xx.xxx...lon...x.xxxxx
        re = /lat\D*(-?\d+\.\d+)\D*lon\D*(-?\d+\.\d+)/;
        m = re.exec(q);
        //showRegExpResult(m);
        if (m != undefined) return m;
        else return null;
    },
    _isLatLon_decMin: function (q) {
        console.log("is LatLon?: " + q);
        //N 53° 13.785' E 010° 23.887'
        //re = /[NS]\s*(\d+)\D*(\d+\.\d+).?\s*[EW]\s*(\d+)\D*(\d+\.\d+)\D*/;
        re = /([ns])\s*(\d+)\D*(\d+\.\d+).?\s*([ew])\s*(\d+)\D*(\d+\.\d+)/i;
        m = re.exec(q.toLowerCase());
        //showRegExpResult(m);
        if ((m != undefined)) return m;
        else return null;
        // +- dec min +- dec min
    },

    _geocode: function (event) {
        L.DomEvent.preventDefault(event);
        var q = this._input.value;
        //try to find corrdinates
        if (this._isLatLon(q) != null) {
            var m = this._isLatLon(q);
            console.log("LatLon: " + m[1] + " " + m[2]);
            //m = {lon, lat}
            this.options.callback.call(this, this._createSearchResult(m[1], m[2]));
            return;
        }
        else if (this._isLatLon_decMin(q) != null) {
            var m = this._isLatLon_decMin(q);
            //m: [ns, lat dec, lat min, ew, lon dec, lon min]
            var temp = new Array();
            temp['n'] = 1;
            temp['s'] = -1;
            temp['e'] = 1;
            temp['w'] = -1;
            this.options.callback.call(this, this._createSearchResult(
                temp[m[1]] * (Number(m[2]) + m[3] / 60),
                temp[m[4]] * (Number(m[5]) + m[6] / 60)
            ));
            return;
        }

        //and now Nominatim
        //http://wiki.openstreetmap.org/wiki/Nominatim
        console.log(this._callbackId);
        window[("_l_osmgeocoder_" + this._callbackId)] = L.Util.bind(this.options.callback, this);


        /* Set up params to send to Nominatim */
        var params = {
            // Defaults
            q: this._input.value,
            json_callback: ("_l_osmgeocoder_" + this._callbackId++),
            format: 'json'
        };

        if (this.options.bounds && this.options.bounds != null) {
            if (this.options.bounds instanceof L.LatLngBounds) {
                params.viewbox = this.options.bounds.toBBoxString();
                params.bounded = 1;
            }
            else {
                console.log('bounds must be of type L.LatLngBounds');
                return;
            }
        }

        if (this.options.email && this.options.email != null) {
            if (typeof this.options.email == 'string') {
                params.email = this.options.email;
            }
            else {
                console.log('email must be a string');
            }
        }

        var protocol = location.protocol;
        var url = protocol + "//nominatim.openstreetmap.org/search" + L.Util.getParamString(params),
            script = document.createElement("script");


        script.type = "text/javascript";
        script.src = url;
        script.id = this._callbackId;
        document.getElementsByTagName("head")[0].appendChild(script);
    },

    _expand: function () {
        L.DomUtil.addClass(this._container, 'leaflet-control-geocoder-expanded');
    },

    _collapse: function () {
        this._container.className = this._container.className.replace(' leaflet-control-geocoder-expanded', '');
    }
});

/**
 * bootbox.js [v4.3.0]
 *
 * http://bootboxjs.com/license.txt
 */

// @see https://github.com/makeusabrew/bootbox/issues/180
// @see https://github.com/makeusabrew/bootbox/issues/186
(function (root, factory) {

    "use strict";
    if (typeof define === "function" && define.amd) {
        // AMD. Register as an anonymous module.
        define(["jquery"], factory);
    } else if (typeof exports === "object") {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory(require("jquery"));
    } else {
        // Browser globals (root is window)
        root.bootbox = factory(root.jQuery);
    }

}(this, function init($, undefined) {

    "use strict";

    // the base DOM structure needed to create a modal
    var templates = {
        dialog: "<div class='bootbox modal' tabindex='-1' role='dialog'>" +
        "<div class='modal-dialog'>" +
        "<div class='modal-content'>" +
        "<div class='modal-body'><div class='bootbox-body'></div></div>" +
        "</div>" +
        "</div>" +
        "</div>",
        header: "<div class='modal-header'>" +
        "<h4 class='modal-title'></h4>" +
        "</div>",
        footer: "<div class='modal-footer'></div>",
        closeButton: "<button type='button' class='bootbox-close-button close' data-dismiss='modal' aria-hidden='true'>&times;</button>",
        form: "<form class='bootbox-form'></form>",
        inputs: {
            text: "<input class='bootbox-input bootbox-input-text form-control' autocomplete=off type=text />",
            textarea: "<textarea class='bootbox-input bootbox-input-textarea form-control'></textarea>",
            email: "<input class='bootbox-input bootbox-input-email form-control' autocomplete='off' type='email' />",
            select: "<select class='bootbox-input bootbox-input-select form-control'></select>",
            checkbox: "<div class='checkbox'><label><input class='bootbox-input bootbox-input-checkbox' type='checkbox' /></label></div>",
            date: "<input class='bootbox-input bootbox-input-date form-control' autocomplete=off type='date' />",
            time: "<input class='bootbox-input bootbox-input-time form-control' autocomplete=off type='time' />",
            number: "<input class='bootbox-input bootbox-input-number form-control' autocomplete=off type='number' />",
            password: "<input class='bootbox-input bootbox-input-password form-control' autocomplete='off' type='password' />"
        }
    };

    var defaults = {
        // default language
        locale: "en",
        // show backdrop or not
        backdrop: true,
        // animate the modal in/out
        animate: true,
        // additional class string applied to the top level dialog
        className: null,
        // whether or not to include a close button
        closeButton: true,
        // show the dialog immediately by default
        show: true,
        // dialog container
        container: "body"
    };

    // our public object; augmented after our private API
    var exports = {};

    /**
     * @private
     */
    function _t(key) {
        var locale = locales[defaults.locale];
        return locale ? locale[key] : locales.en[key];
    }

    function processCallback(e, dialog, callback) {
        e.stopPropagation();
        e.preventDefault();

        // by default we assume a callback will get rid of the dialog,
        // although it is given the opportunity to override this

        // so, if the callback can be invoked and it *explicitly returns false*
        // then we'll set a flag to keep the dialog active...
        var preserveDialog = $.isFunction(callback) && callback(e) === false;

        // ... otherwise we'll bin it
        if (!preserveDialog) {
            dialog.modal("hide");
        }
    }

    function getKeyLength(obj) {
        // @TODO defer to Object.keys(x).length if available?
        var k, t = 0;
        for (k in obj) {
            t++;
        }
        return t;
    }

    function each(collection, iterator) {
        var index = 0;
        $.each(collection, function (key, value) {
            iterator(key, value, index++);
        });
    }

    function sanitize(options) {
        var buttons;
        var total;

        if (typeof options !== "object") {
            throw new Error("Please supply an object of options");
        }

        if (!options.message) {
            throw new Error("Please specify a message");
        }

        // make sure any supplied options take precedence over defaults
        options = $.extend({}, defaults, options);

        if (!options.buttons) {
            options.buttons = {};
        }

        // we only support Bootstrap's "static" and false backdrop args
        // supporting true would mean you could dismiss the dialog without
        // explicitly interacting with it
        options.backdrop = options.backdrop ? "static" : false;

        buttons = options.buttons;

        total = getKeyLength(buttons);

        each(buttons, function (key, button, index) {

            if ($.isFunction(button)) {
                // short form, assume value is our callback. Since button
                // isn't an object it isn't a reference either so re-assign it
                button = buttons[key] = {
                    callback: button
                };
            }

            // before any further checks make sure by now button is the correct type
            if ($.type(button) !== "object") {
                throw new Error("button with key " + key + " must be an object");
            }

            if (!button.label) {
                // the lack of an explicit label means we'll assume the key is good enough
                button.label = key;
            }

            if (!button.className) {
                if (total <= 2 && index === total - 1) {
                    // always add a primary to the main option in a two-button dialog
                    button.className = "btn-primary";
                } else {
                    button.className = "btn-default";
                }
            }
        });

        return options;
    }

    /**
     * map a flexible set of arguments into a single returned object
     * if args.length is already one just return it, otherwise
     * use the properties argument to map the unnamed args to
     * object properties
     * so in the latter case:
     * mapArguments(["foo", $.noop], ["message", "callback"])
     * -> { message: "foo", callback: $.noop }
     */
    function mapArguments(args, properties) {
        var argn = args.length;
        var options = {};

        if (argn < 1 || argn > 2) {
            throw new Error("Invalid argument length");
        }

        if (argn === 2 || typeof args[0] === "string") {
            options[properties[0]] = args[0];
            options[properties[1]] = args[1];
        } else {
            options = args[0];
        }

        return options;
    }

    /**
     * merge a set of default dialog options with user supplied arguments
     */
    function mergeArguments(defaults, args, properties) {
        return $.extend(
            // deep merge
            true,
            // ensure the target is an empty, unreferenced object
            {},
            // the base options object for this type of dialog (often just buttons)
            defaults,
            // args could be an object or array; if it's an array properties will
            // map it to a proper options object
            mapArguments(
                args,
                properties
            )
        );
    }

    /**
     * this entry-level method makes heavy use of composition to take a simple
     * range of inputs and return valid options suitable for passing to bootbox.dialog
     */
    function mergeDialogOptions(className, labels, properties, args) {
        //  build up a base set of dialog properties
        var baseOptions = {
            className: "bootbox-" + className,
            buttons: createLabels.apply(null, labels)
        };

        // ensure the buttons properties generated, *after* merging
        // with user args are still valid against the supplied labels
        return validateButtons(
            // merge the generated base properties with user supplied arguments
            mergeArguments(
                baseOptions,
                args,
                // if args.length > 1, properties specify how each arg maps to an object key
                properties
            ),
            labels
        );
    }

    /**
     * from a given list of arguments return a suitable object of button labels
     * all this does is normalise the given labels and translate them where possible
     * e.g. "ok", "confirm" -> { ok: "OK, cancel: "Annuleren" }
     */
    function createLabels() {
        var buttons = {};

        for (var i = 0, j = arguments.length; i < j; i++) {
            var argument = arguments[i];
            var key = argument.toLowerCase();
            var value = argument.toUpperCase();

            buttons[key] = {
                label: _t(value)
            };
        }

        return buttons;
    }

    function validateButtons(options, buttons) {
        var allowedButtons = {};
        each(buttons, function (key, value) {
            allowedButtons[value] = true;
        });

        each(options.buttons, function (key) {
            if (allowedButtons[key] === undefined) {
                throw new Error("button key " + key + " is not allowed (options are " + buttons.join("\n") + ")");
            }
        });

        return options;
    }

    exports.alert = function () {
        var options;

        options = mergeDialogOptions("alert", ["ok"], ["message", "callback"], arguments);

        if (options.callback && !$.isFunction(options.callback)) {
            throw new Error("alert requires callback property to be a function when provided");
        }

        /**
         * overrides
         */
        options.buttons.ok.callback = options.onEscape = function () {
            if ($.isFunction(options.callback)) {
                return options.callback();
            }
            return true;
        };

        return exports.dialog(options);
    };

    exports.confirm = function () {
        var options;

        options = mergeDialogOptions("confirm", ["cancel", "confirm"], ["message", "callback"], arguments);

        /**
         * overrides; undo anything the user tried to set they shouldn't have
         */
        options.buttons.cancel.callback = options.onEscape = function () {
            return options.callback(false);
        };

        options.buttons.confirm.callback = function () {
            return options.callback(true);
        };

        // confirm specific validation
        if (!$.isFunction(options.callback)) {
            throw new Error("confirm requires a callback");
        }

        return exports.dialog(options);
    };

    exports.prompt = function () {
        var options;
        var defaults;
        var dialog;
        var form;
        var input;
        var shouldShow;
        var inputOptions;

        // we have to create our form first otherwise
        // its value is undefined when gearing up our options
        // @TODO this could be solved by allowing message to
        // be a function instead...
        form = $(templates.form);

        // prompt defaults are more complex than others in that
        // users can override more defaults
        // @TODO I don't like that prompt has to do a lot of heavy
        // lifting which mergeDialogOptions can *almost* support already
        // just because of 'value' and 'inputType' - can we refactor?
        defaults = {
            className: "bootbox-prompt",
            buttons: createLabels("cancel", "confirm"),
            value: "",
            inputType: "text"
        };

        options = validateButtons(
            mergeArguments(defaults, arguments, ["title", "callback"]),
            ["cancel", "confirm"]
        );

        // capture the user's show value; we always set this to false before
        // spawning the dialog to give us a chance to attach some handlers to
        // it, but we need to make sure we respect a preference not to show it
        shouldShow = (options.show === undefined) ? true : options.show;

        /**
         * overrides; undo anything the user tried to set they shouldn't have
         */
        options.message = form;

        options.buttons.cancel.callback = options.onEscape = function () {
            return options.callback(null);
        };

        options.buttons.confirm.callback = function () {
            var value;

            switch (options.inputType) {
                case "text":
                case "textarea":
                case "email":
                case "select":
                case "date":
                case "time":
                case "number":
                case "password":
                    value = input.val();
                    break;

                case "checkbox":
                    var checkedItems = input.find("input:checked");

                    // we assume that checkboxes are always multiple,
                    // hence we default to an empty array
                    value = [];

                    each(checkedItems, function (_, item) {
                        value.push($(item).val());
                    });
                    break;
            }

            return options.callback(value);
        };

        options.show = false;

        // prompt specific validation
        if (!options.title) {
            throw new Error("prompt requires a title");
        }

        if (!$.isFunction(options.callback)) {
            throw new Error("prompt requires a callback");
        }

        if (!templates.inputs[options.inputType]) {
            throw new Error("invalid prompt type");
        }

        // create the input based on the supplied type
        input = $(templates.inputs[options.inputType]);

        switch (options.inputType) {
            case "text":
            case "textarea":
            case "email":
            case "date":
            case "time":
            case "number":
            case "password":
                input.val(options.value);
                break;

            case "select":
                var groups = {};
                inputOptions = options.inputOptions || [];

                if (!inputOptions.length) {
                    throw new Error("prompt with select requires options");
                }

                each(inputOptions, function (_, option) {

                    // assume the element to attach to is the input...
                    var elem = input;

                    if (option.value === undefined || option.text === undefined) {
                        throw new Error("given options in wrong format");
                    }


                    // ... but override that element if this option sits in a group

                    if (option.group) {
                        // initialise group if necessary
                        if (!groups[option.group]) {
                            groups[option.group] = $("<optgroup/>").attr("label", option.group);
                        }

                        elem = groups[option.group];
                    }

                    elem.append("<option value='" + option.value + "'>" + option.text + "</option>");
                });

                each(groups, function (_, group) {
                    input.append(group);
                });

                // safe to set a select's value as per a normal input
                input.val(options.value);
                break;

            case "checkbox":
                var values = $.isArray(options.value) ? options.value : [options.value];
                inputOptions = options.inputOptions || [];

                if (!inputOptions.length) {
                    throw new Error("prompt with checkbox requires options");
                }

                if (!inputOptions[0].value || !inputOptions[0].text) {
                    throw new Error("given options in wrong format");
                }

                // checkboxes have to nest within a containing element, so
                // they break the rules a bit and we end up re-assigning
                // our 'input' element to this container instead
                input = $("<div/>");

                each(inputOptions, function (_, option) {
                    var checkbox = $(templates.inputs[options.inputType]);

                    checkbox.find("input").attr("value", option.value);
                    checkbox.find("label").append(option.text);

                    // we've ensured values is an array so we can always iterate over it
                    each(values, function (_, value) {
                        if (value === option.value) {
                            checkbox.find("input").prop("checked", true);
                        }
                    });

                    input.append(checkbox);
                });
                break;
        }

        if (options.placeholder) {
            input.attr("placeholder", options.placeholder);
        }

        if (options.pattern) {
            input.attr("pattern", options.pattern);
        }

        // now place it in our form
        form.append(input);

        form.on("submit", function (e) {
            e.preventDefault();
            // Fix for SammyJS (or similar JS routing library) hijacking the form post.
            e.stopPropagation();
            // @TODO can we actually click *the* button object instead?
            // e.g. buttons.confirm.click() or similar
            dialog.find(".btn-primary").click();
        });

        dialog = exports.dialog(options);

        // clear the existing handler focusing the submit button...
        dialog.off("shown.bs.modal");

        // ...and replace it with one focusing our input, if possible
        dialog.on("shown.bs.modal", function () {
            input.focus();
        });

        if (shouldShow === true) {
            dialog.modal("show");
        }

        return dialog;
    };

    exports.dialog = function (options) {
        options = sanitize(options);

        var dialog = $(templates.dialog);
        var innerDialog = dialog.find(".modal-dialog");
        var body = dialog.find(".modal-body");
        var buttons = options.buttons;
        var buttonStr = "";
        var callbacks = {
            onEscape: options.onEscape
        };

        each(buttons, function (key, button) {

            // @TODO I don't like this string appending to itself; bit dirty. Needs reworking
            // can we just build up button elements instead? slower but neater. Then button
            // can just become a template too
            buttonStr += "<button data-bb-handler='" + key + "' type='button' class='btn " + button.className + "'>" + button.label + "</button>";
            callbacks[key] = button.callback;
        });

        body.find(".bootbox-body").html(options.message);

        if (options.animate === true) {
            dialog.addClass("fade");
        }

        if (options.className) {
            dialog.addClass(options.className);
        }

        if (options.size === "large") {
            innerDialog.addClass("modal-lg");
        }

        if (options.size === "small") {
            innerDialog.addClass("modal-sm");
        }

        if (options.title) {
            body.before(templates.header);
        }

        if (options.closeButton) {
            var closeButton = $(templates.closeButton);

            if (options.title) {
                dialog.find(".modal-header").prepend(closeButton);
            } else {
                closeButton.css("margin-top", "-10px").prependTo(body);
            }
        }

        if (options.title) {
            dialog.find(".modal-title").html(options.title);
        }

        if (buttonStr.length) {
            body.after(templates.footer);
            dialog.find(".modal-footer").html(buttonStr);
        }


        /**
         * Bootstrap event listeners; used handle extra
         * setup & teardown required after the underlying
         * modal has performed certain actions
         */

        dialog.on("hidden.bs.modal", function (e) {
            // ensure we don't accidentally intercept hidden events triggered
            // by children of the current dialog. We shouldn't anymore now BS
            // namespaces its events; but still worth doing
            if (e.target === this) {
                dialog.remove();
            }
        });

        /*
         dialog.on("show.bs.modal", function() {
         // sadly this doesn't work; show is called *just* before
         // the backdrop is added so we'd need a setTimeout hack or
         // otherwise... leaving in as would be nice
         if (options.backdrop) {
         dialog.next(".modal-backdrop").addClass("bootbox-backdrop");
         }
         });
         */

        dialog.on("shown.bs.modal", function () {
            dialog.find(".btn-primary:first").focus();
        });

        /**
         * Bootbox event listeners; experimental and may not last
         * just an attempt to decouple some behaviours from their
         * respective triggers
         */

        dialog.on("escape.close.bb", function (e) {
            if (callbacks.onEscape) {
                processCallback(e, dialog, callbacks.onEscape);
            }
        });

        /**
         * Standard jQuery event listeners; used to handle user
         * interaction with our dialog
         */

        dialog.on("click", ".modal-footer button", function (e) {
            var callbackKey = $(this).data("bb-handler");

            processCallback(e, dialog, callbacks[callbackKey]);

        });

        dialog.on("click", ".bootbox-close-button", function (e) {
            // onEscape might be falsy but that's fine; the fact is
            // if the user has managed to click the close button we
            // have to close the dialog, callback or not
            processCallback(e, dialog, callbacks.onEscape);
        });

        dialog.on("keyup", function (e) {
            if (e.which === 27) {
                dialog.trigger("escape.close.bb");
            }
        });

        // the remainder of this method simply deals with adding our
        // dialogent to the DOM, augmenting it with Bootstrap's modal
        // functionality and then giving the resulting object back
        // to our caller

        $(options.container).append(dialog);

        dialog.modal({
            backdrop: true,
            keyboard: false,
            show: false
        });

        if (options.show) {
            dialog.modal("show");
        }

        // @TODO should we return the raw element here or should
        // we wrap it in an object on which we can expose some neater
        // methods, e.g. var d = bootbox.alert(); d.hide(); instead
        // of d.modal("hide");

        /*
         function BBDialog(elem) {
         this.elem = elem;
         }

         BBDialog.prototype = {
         hide: function() {
         return this.elem.modal("hide");
         },
         show: function() {
         return this.elem.modal("show");
         }
         };
         */

        return dialog;

    };

    exports.setDefaults = function () {
        var values = {};

        if (arguments.length === 2) {
            // allow passing of single key/value...
            values[arguments[0]] = arguments[1];
        } else {
            // ... and as an object too
            values = arguments[0];
        }

        $.extend(defaults, values);
    };

    exports.hideAll = function () {
        $(".bootbox").modal("hide");

        return exports;
    };


    /**
     * standard locales. Please add more according to ISO 639-1 standard. Multiple language variants are
     * unlikely to be required. If this gets too large it can be split out into separate JS files.
     */
    var locales = {
        br: {
            OK: "OK",
            CANCEL: "Cancelar",
            CONFIRM: "Sim"
        },
        cs: {
            OK: "OK",
            CANCEL: "Zrušit",
            CONFIRM: "Potvrdit"
        },
        da: {
            OK: "OK",
            CANCEL: "Annuller",
            CONFIRM: "Accepter"
        },
        de: {
            OK: "OK",
            CANCEL: "Abbrechen",
            CONFIRM: "Akzeptieren"
        },
        el: {
            OK: "Εντάξει",
            CANCEL: "Ακύρωση",
            CONFIRM: "Επιβεβαίωση"
        },
        en: {
            OK: "OK",
            CANCEL: "Cancel",
            CONFIRM: "OK"
        },
        es: {
            OK: "OK",
            CANCEL: "Cancelar",
            CONFIRM: "Aceptar"
        },
        et: {
            OK: "OK",
            CANCEL: "Katkesta",
            CONFIRM: "OK"
        },
        fi: {
            OK: "OK",
            CANCEL: "Peruuta",
            CONFIRM: "OK"
        },
        fr: {
            OK: "OK",
            CANCEL: "Annuler",
            CONFIRM: "D'accord"
        },
        he: {
            OK: "אישור",
            CANCEL: "ביטול",
            CONFIRM: "אישור"
        },
        id: {
            OK: "OK",
            CANCEL: "Batal",
            CONFIRM: "OK"
        },
        it: {
            OK: "OK",
            CANCEL: "Annulla",
            CONFIRM: "Conferma"
        },
        ja: {
            OK: "OK",
            CANCEL: "キャンセル",
            CONFIRM: "確認"
        },
        lt: {
            OK: "Gerai",
            CANCEL: "Atšaukti",
            CONFIRM: "Patvirtinti"
        },
        lv: {
            OK: "Labi",
            CANCEL: "Atcelt",
            CONFIRM: "Apstiprināt"
        },
        nl: {
            OK: "OK",
            CANCEL: "Annuleren",
            CONFIRM: "Accepteren"
        },
        no: {
            OK: "OK",
            CANCEL: "Avbryt",
            CONFIRM: "OK"
        },
        pl: {
            OK: "OK",
            CANCEL: "Anuluj",
            CONFIRM: "Potwierdź"
        },
        pt: {
            OK: "OK",
            CANCEL: "Cancelar",
            CONFIRM: "Confirmar"
        },
        ru: {
            OK: "OK",
            CANCEL: "Отмена",
            CONFIRM: "Применить"
        },
        sv: {
            OK: "OK",
            CANCEL: "Avbryt",
            CONFIRM: "OK"
        },
        tr: {
            OK: "Tamam",
            CANCEL: "İptal",
            CONFIRM: "Onayla"
        },
        zh_CN: {
            OK: "OK",
            CANCEL: "取消",
            CONFIRM: "确认"
        },
        zh_TW: {
            OK: "OK",
            CANCEL: "取消",
            CONFIRM: "確認"
        }
    };

    exports.init = function (_$) {
        return init(_$ || $);
    };

    return exports;
}));

/*!
 * Bootstrap v3.3.4 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

if (typeof jQuery === 'undefined') {
    throw new Error('Bootstrap\'s JavaScript requires jQuery')
}

+function ($) {
    'use strict';
    var version = $.fn.jquery.split(' ')[0].split('.')
    if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1)) {
        throw new Error('Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher')
    }
}(jQuery);

/* ========================================================================
 * Bootstrap: transition.js v3.3.4
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
    'use strict';

    // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
    // ============================================================

    function transitionEnd() {
        var el = document.createElement('bootstrap')

        var transEndEventNames = {
            WebkitTransition: 'webkitTransitionEnd',
            MozTransition: 'transitionend',
            OTransition: 'oTransitionEnd otransitionend',
            transition: 'transitionend'
        }

        for (var name in transEndEventNames) {
            if (el.style[name] !== undefined) {
                return {end: transEndEventNames[name]}
            }
        }

        return false // explicit for ie8 (  ._.)
    }

    // http://blog.alexmaccaw.com/css-transitions
    $.fn.emulateTransitionEnd = function (duration) {
        var called = false
        var $el = this
        $(this).one('bsTransitionEnd', function () {
            called = true
        })
        var callback = function () {
            if (!called) $($el).trigger($.support.transition.end)
        }
        setTimeout(callback, duration)
        return this
    }

    $(function () {
        $.support.transition = transitionEnd()

        if (!$.support.transition) return

        $.event.special.bsTransitionEnd = {
            bindType: $.support.transition.end,
            delegateType: $.support.transition.end,
            handle: function (e) {
                if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
            }
        }
    })

}(jQuery);

/* ========================================================================
 * Bootstrap: alert.js v3.3.4
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
    'use strict';

    // ALERT CLASS DEFINITION
    // ======================

    var dismiss = '[data-dismiss="alert"]'
    var Alert = function (el) {
        $(el).on('click', dismiss, this.close)
    }

    Alert.VERSION = '3.3.4'

    Alert.TRANSITION_DURATION = 150

    Alert.prototype.close = function (e) {
        var $this = $(this)
        var selector = $this.attr('data-target')

        if (!selector) {
            selector = $this.attr('href')
            selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
        }

        var $parent = $(selector)

        if (e) e.preventDefault()

        if (!$parent.length) {
            $parent = $this.closest('.alert')
        }

        $parent.trigger(e = $.Event('close.bs.alert'))

        if (e.isDefaultPrevented()) return

        $parent.removeClass('in')

        function removeElement() {
            // detach from parent, fire event then clean up data
            $parent.detach().trigger('closed.bs.alert').remove()
        }

        $.support.transition && $parent.hasClass('fade') ?
            $parent
                .one('bsTransitionEnd', removeElement)
                .emulateTransitionEnd(Alert.TRANSITION_DURATION) :
            removeElement()
    }


    // ALERT PLUGIN DEFINITION
    // =======================

    function Plugin(option) {
        return this.each(function () {
            var $this = $(this)
            var data = $this.data('bs.alert')

            if (!data) $this.data('bs.alert', (data = new Alert(this)))
            if (typeof option == 'string') data[option].call($this)
        })
    }

    var old = $.fn.alert

    $.fn.alert = Plugin
    $.fn.alert.Constructor = Alert


    // ALERT NO CONFLICT
    // =================

    $.fn.alert.noConflict = function () {
        $.fn.alert = old
        return this
    }


    // ALERT DATA-API
    // ==============

    $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)

}(jQuery);

/* ========================================================================
 * Bootstrap: button.js v3.3.4
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
    'use strict';

    // BUTTON PUBLIC CLASS DEFINITION
    // ==============================

    var Button = function (element, options) {
        this.$element = $(element)
        this.options = $.extend({}, Button.DEFAULTS, options)
        this.isLoading = false
    }

    Button.VERSION = '3.3.4'

    Button.DEFAULTS = {
        loadingText: 'loading...'
    }

    Button.prototype.setState = function (state) {
        var d = 'disabled'
        var $el = this.$element
        var val = $el.is('input') ? 'val' : 'html'
        var data = $el.data()

        state = state + 'Text'

        if (data.resetText == null) $el.data('resetText', $el[val]())

        // push to event loop to allow forms to submit
        setTimeout($.proxy(function () {
            $el[val](data[state] == null ? this.options[state] : data[state])

            if (state == 'loadingText') {
                this.isLoading = true
                $el.addClass(d).attr(d, d)
            } else if (this.isLoading) {
                this.isLoading = false
                $el.removeClass(d).removeAttr(d)
            }
        }, this), 0)
    }

    Button.prototype.toggle = function () {
        var changed = true
        var $parent = this.$element.closest('[data-toggle="buttons"]')

        if ($parent.length) {
            var $input = this.$element.find('input')
            if ($input.prop('type') == 'radio') {
                if ($input.prop('checked') && this.$element.hasClass('active')) changed = false
                else $parent.find('.active').removeClass('active')
            }
            if (changed) $input.prop('checked', !this.$element.hasClass('active')).trigger('change')
        } else {
            this.$element.attr('aria-pressed', !this.$element.hasClass('active'))
        }

        if (changed) this.$element.toggleClass('active')
    }


    // BUTTON PLUGIN DEFINITION
    // ========================

    function Plugin(option) {
        return this.each(function () {
            var $this = $(this)
            var data = $this.data('bs.button')
            var options = typeof option == 'object' && option

            if (!data) $this.data('bs.button', (data = new Button(this, options)))

            if (option == 'toggle') data.toggle()
            else if (option) data.setState(option)
        })
    }

    var old = $.fn.button

    $.fn.button = Plugin
    $.fn.button.Constructor = Button


    // BUTTON NO CONFLICT
    // ==================

    $.fn.button.noConflict = function () {
        $.fn.button = old
        return this
    }


    // BUTTON DATA-API
    // ===============

    $(document)
        .on('click.bs.button.data-api', '[data-toggle^="button"]', function (e) {
            var $btn = $(e.target)
            if (!$btn.hasClass('btn')) $btn = $btn.closest('.btn')
            Plugin.call($btn, 'toggle')
            e.preventDefault()
        })
        .on('focus.bs.button.data-api blur.bs.button.data-api', '[data-toggle^="button"]', function (e) {
            $(e.target).closest('.btn').toggleClass('focus', /^focus(in)?$/.test(e.type))
        })

}(jQuery);

/* ========================================================================
 * Bootstrap: carousel.js v3.3.4
 * http://getbootstrap.com/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
    'use strict';

    // CAROUSEL CLASS DEFINITION
    // =========================

    var Carousel = function (element, options) {
        this.$element = $(element)
        this.$indicators = this.$element.find('.carousel-indicators')
        this.options = options
        this.paused = null
        this.sliding = null
        this.interval = null
        this.$active = null
        this.$items = null

        this.options.keyboard && this.$element.on('keydown.bs.carousel', $.proxy(this.keydown, this))

        this.options.pause == 'hover' && !('ontouchstart' in document.documentElement) && this.$element
            .on('mouseenter.bs.carousel', $.proxy(this.pause, this))
            .on('mouseleave.bs.carousel', $.proxy(this.cycle, this))
    }

    Carousel.VERSION = '3.3.4'

    Carousel.TRANSITION_DURATION = 600

    Carousel.DEFAULTS = {
        interval: 5000,
        pause: 'hover',
        wrap: true,
        keyboard: true
    }

    Carousel.prototype.keydown = function (e) {
        if (/input|textarea/i.test(e.target.tagName)) return
        switch (e.which) {
            case 37:
                this.prev();
                break
            case 39:
                this.next();
                break
            default:
                return
        }

        e.preventDefault()
    }

    Carousel.prototype.cycle = function (e) {
        e || (this.paused = false)

        this.interval && clearInterval(this.interval)

        this.options.interval
        && !this.paused
        && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))

        return this
    }

    Carousel.prototype.getItemIndex = function (item) {
        this.$items = item.parent().children('.item')
        return this.$items.index(item || this.$active)
    }

    Carousel.prototype.getItemForDirection = function (direction, active) {
        var activeIndex = this.getItemIndex(active)
        var willWrap = (direction == 'prev' && activeIndex === 0)
            || (direction == 'next' && activeIndex == (this.$items.length - 1))
        if (willWrap && !this.options.wrap) return active
        var delta = direction == 'prev' ? -1 : 1
        var itemIndex = (activeIndex + delta) % this.$items.length
        return this.$items.eq(itemIndex)
    }

    Carousel.prototype.to = function (pos) {
        var that = this
        var activeIndex = this.getItemIndex(this.$active = this.$element.find('.item.active'))

        if (pos > (this.$items.length - 1) || pos < 0) return

        if (this.sliding)       return this.$element.one('slid.bs.carousel', function () {
            that.to(pos)
        }) // yes, "slid"
        if (activeIndex == pos) return this.pause().cycle()

        return this.slide(pos > activeIndex ? 'next' : 'prev', this.$items.eq(pos))
    }

    Carousel.prototype.pause = function (e) {
        e || (this.paused = true)

        if (this.$element.find('.next, .prev').length && $.support.transition) {
            this.$element.trigger($.support.transition.end)
            this.cycle(true)
        }

        this.interval = clearInterval(this.interval)

        return this
    }

    Carousel.prototype.next = function () {
        if (this.sliding) return
        return this.slide('next')
    }

    Carousel.prototype.prev = function () {
        if (this.sliding) return
        return this.slide('prev')
    }

    Carousel.prototype.slide = function (type, next) {
        var $active = this.$element.find('.item.active')
        var $next = next || this.getItemForDirection(type, $active)
        var isCycling = this.interval
        var direction = type == 'next' ? 'left' : 'right'
        var that = this

        if ($next.hasClass('active')) return (this.sliding = false)

        var relatedTarget = $next[0]
        var slideEvent = $.Event('slide.bs.carousel', {
            relatedTarget: relatedTarget,
            direction: direction
        })
        this.$element.trigger(slideEvent)
        if (slideEvent.isDefaultPrevented()) return

        this.sliding = true

        isCycling && this.pause()

        if (this.$indicators.length) {
            this.$indicators.find('.active').removeClass('active')
            var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)])
            $nextIndicator && $nextIndicator.addClass('active')
        }

        var slidEvent = $.Event('slid.bs.carousel', {relatedTarget: relatedTarget, direction: direction}) // yes, "slid"
        if ($.support.transition && this.$element.hasClass('slide')) {
            $next.addClass(type)
            $next[0].offsetWidth // force reflow
            $active.addClass(direction)
            $next.addClass(direction)
            $active
                .one('bsTransitionEnd', function () {
                    $next.removeClass([type, direction].join(' ')).addClass('active')
                    $active.removeClass(['active', direction].join(' '))
                    that.sliding = false
                    setTimeout(function () {
                        that.$element.trigger(slidEvent)
                    }, 0)
                })
                .emulateTransitionEnd(Carousel.TRANSITION_DURATION)
        } else {
            $active.removeClass('active')
            $next.addClass('active')
            this.sliding = false
            this.$element.trigger(slidEvent)
        }

        isCycling && this.cycle()

        return this
    }


    // CAROUSEL PLUGIN DEFINITION
    // ==========================

    function Plugin(option) {
        return this.each(function () {
            var $this = $(this)
            var data = $this.data('bs.carousel')
            var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
            var action = typeof option == 'string' ? option : options.slide

            if (!data) $this.data('bs.carousel', (data = new Carousel(this, options)))
            if (typeof option == 'number') data.to(option)
            else if (action) data[action]()
            else if (options.interval) data.pause().cycle()
        })
    }

    var old = $.fn.carousel

    $.fn.carousel = Plugin
    $.fn.carousel.Constructor = Carousel


    // CAROUSEL NO CONFLICT
    // ====================

    $.fn.carousel.noConflict = function () {
        $.fn.carousel = old
        return this
    }


    // CAROUSEL DATA-API
    // =================

    var clickHandler = function (e) {
        var href
        var $this = $(this)
        var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) // strip for ie7
        if (!$target.hasClass('carousel')) return
        var options = $.extend({}, $target.data(), $this.data())
        var slideIndex = $this.attr('data-slide-to')
        if (slideIndex) options.interval = false

        Plugin.call($target, options)

        if (slideIndex) {
            $target.data('bs.carousel').to(slideIndex)
        }

        e.preventDefault()
    }

    $(document)
        .on('click.bs.carousel.data-api', '[data-slide]', clickHandler)
        .on('click.bs.carousel.data-api', '[data-slide-to]', clickHandler)

    $(window).on('load', function () {
        $('[data-ride="carousel"]').each(function () {
            var $carousel = $(this)
            Plugin.call($carousel, $carousel.data())
        })
    })

}(jQuery);

/* ========================================================================
 * Bootstrap: collapse.js v3.3.4
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
    'use strict';

    // COLLAPSE PUBLIC CLASS DEFINITION
    // ================================

    var Collapse = function (element, options) {
        this.$element = $(element)
        this.options = $.extend({}, Collapse.DEFAULTS, options)
        this.$trigger = $('[data-toggle="collapse"][href="#' + element.id + '"],' +
        '[data-toggle="collapse"][data-target="#' + element.id + '"]')
        this.transitioning = null

        if (this.options.parent) {
            this.$parent = this.getParent()
        } else {
            this.addAriaAndCollapsedClass(this.$element, this.$trigger)
        }

        if (this.options.toggle) this.toggle()
    }

    Collapse.VERSION = '3.3.4'

    Collapse.TRANSITION_DURATION = 350

    Collapse.DEFAULTS = {
        toggle: true
    }

    Collapse.prototype.dimension = function () {
        var hasWidth = this.$element.hasClass('width')
        return hasWidth ? 'width' : 'height'
    }

    Collapse.prototype.show = function () {
        if (this.transitioning || this.$element.hasClass('in')) return

        var activesData
        var actives = this.$parent && this.$parent.children('.panel').children('.in, .collapsing')

        if (actives && actives.length) {
            activesData = actives.data('bs.collapse')
            if (activesData && activesData.transitioning) return
        }

        var startEvent = $.Event('show.bs.collapse')
        this.$element.trigger(startEvent)
        if (startEvent.isDefaultPrevented()) return

        if (actives && actives.length) {
            Plugin.call(actives, 'hide')
            activesData || actives.data('bs.collapse', null)
        }

        var dimension = this.dimension()

        this.$element
            .removeClass('collapse')
            .addClass('collapsing')[dimension](0)
            .attr('aria-expanded', true)

        this.$trigger
            .removeClass('collapsed')
            .attr('aria-expanded', true)

        this.transitioning = 1

        var complete = function () {
            this.$element
                .removeClass('collapsing')
                .addClass('collapse in')[dimension]('')
            this.transitioning = 0
            this.$element
                .trigger('shown.bs.collapse')
        }

        if (!$.support.transition) return complete.call(this)

        var scrollSize = $.camelCase(['scroll', dimension].join('-'))

        this.$element
            .one('bsTransitionEnd', $.proxy(complete, this))
            .emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])
    }

    Collapse.prototype.hide = function () {
        if (this.transitioning || !this.$element.hasClass('in')) return

        var startEvent = $.Event('hide.bs.collapse')
        this.$element.trigger(startEvent)
        if (startEvent.isDefaultPrevented()) return

        var dimension = this.dimension()

        this.$element[dimension](this.$element[dimension]())[0].offsetHeight

        this.$element
            .addClass('collapsing')
            .removeClass('collapse in')
            .attr('aria-expanded', false)

        this.$trigger
            .addClass('collapsed')
            .attr('aria-expanded', false)

        this.transitioning = 1

        var complete = function () {
            this.transitioning = 0
            this.$element
                .removeClass('collapsing')
                .addClass('collapse')
                .trigger('hidden.bs.collapse')
        }

        if (!$.support.transition) return complete.call(this)

        this.$element
            [dimension](0)
            .one('bsTransitionEnd', $.proxy(complete, this))
            .emulateTransitionEnd(Collapse.TRANSITION_DURATION)
    }

    Collapse.prototype.toggle = function () {
        this[this.$element.hasClass('in') ? 'hide' : 'show']()
    }

    Collapse.prototype.getParent = function () {
        return $(this.options.parent)
            .find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')
            .each($.proxy(function (i, element) {
                var $element = $(element)
                this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element)
            }, this))
            .end()
    }

    Collapse.prototype.addAriaAndCollapsedClass = function ($element, $trigger) {
        var isOpen = $element.hasClass('in')

        $element.attr('aria-expanded', isOpen)
        $trigger
            .toggleClass('collapsed', !isOpen)
            .attr('aria-expanded', isOpen)
    }

    function getTargetFromTrigger($trigger) {
        var href
        var target = $trigger.attr('data-target')
            || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') // strip for ie7

        return $(target)
    }


    // COLLAPSE PLUGIN DEFINITION
    // ==========================

    function Plugin(option) {
        return this.each(function () {
            var $this = $(this)
            var data = $this.data('bs.collapse')
            var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

            if (!data && options.toggle && /show|hide/.test(option)) options.toggle = false
            if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
            if (typeof option == 'string') data[option]()
        })
    }

    var old = $.fn.collapse

    $.fn.collapse = Plugin
    $.fn.collapse.Constructor = Collapse


    // COLLAPSE NO CONFLICT
    // ====================

    $.fn.collapse.noConflict = function () {
        $.fn.collapse = old
        return this
    }


    // COLLAPSE DATA-API
    // =================

    $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
        var $this = $(this)

        if (!$this.attr('data-target')) e.preventDefault()

        var $target = getTargetFromTrigger($this)
        var data = $target.data('bs.collapse')
        var option = data ? 'toggle' : $this.data()

        Plugin.call($target, option)
    })

}(jQuery);

/* ========================================================================
 * Bootstrap: dropdown.js v3.3.4
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
    'use strict';

    // DROPDOWN CLASS DEFINITION
    // =========================

    var backdrop = '.dropdown-backdrop'
    var toggle = '[data-toggle="dropdown"]'
    var Dropdown = function (element) {
        $(element).on('click.bs.dropdown', this.toggle)
    }

    Dropdown.VERSION = '3.3.4'

    Dropdown.prototype.toggle = function (e) {
        var $this = $(this)

        if ($this.is('.disabled, :disabled')) return

        var $parent = getParent($this)
        var isActive = $parent.hasClass('open')

        clearMenus()

        if (!isActive) {
            if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
                // if mobile we use a backdrop because click events don't delegate
                $('<div class="dropdown-backdrop"/>').insertAfter($(this)).on('click', clearMenus)
            }

            var relatedTarget = {relatedTarget: this}
            $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))

            if (e.isDefaultPrevented()) return

            $this
                .trigger('focus')
                .attr('aria-expanded', 'true')

            $parent
                .toggleClass('open')
                .trigger('shown.bs.dropdown', relatedTarget)
        }

        return false
    }

    Dropdown.prototype.keydown = function (e) {
        if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) return

        var $this = $(this)

        e.preventDefault()
        e.stopPropagation()

        if ($this.is('.disabled, :disabled')) return

        var $parent = getParent($this)
        var isActive = $parent.hasClass('open')

        if ((!isActive && e.which != 27) || (isActive && e.which == 27)) {
            if (e.which == 27) $parent.find(toggle).trigger('focus')
            return $this.trigger('click')
        }

        var desc = ' li:not(.disabled):visible a'
        var $items = $parent.find('[role="menu"]' + desc + ', [role="listbox"]' + desc)

        if (!$items.length) return

        var index = $items.index(e.target)

        if (e.which == 38 && index > 0)                 index--                        // up
        if (e.which == 40 && index < $items.length - 1) index++                        // down
        if (!~index)                                      index = 0

        $items.eq(index).trigger('focus')
    }

    function clearMenus(e) {
        if (e && e.which === 3) return
        $(backdrop).remove()
        $(toggle).each(function () {
            var $this = $(this)
            var $parent = getParent($this)
            var relatedTarget = {relatedTarget: this}

            if (!$parent.hasClass('open')) return

            $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))

            if (e.isDefaultPrevented()) return

            $this.attr('aria-expanded', 'false')
            $parent.removeClass('open').trigger('hidden.bs.dropdown', relatedTarget)
        })
    }

    function getParent($this) {
        var selector = $this.attr('data-target')

        if (!selector) {
            selector = $this.attr('href')
            selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
        }

        var $parent = selector && $(selector)

        return $parent && $parent.length ? $parent : $this.parent()
    }


    // DROPDOWN PLUGIN DEFINITION
    // ==========================

    function Plugin(option) {
        return this.each(function () {
            var $this = $(this)
            var data = $this.data('bs.dropdown')

            if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
            if (typeof option == 'string') data[option].call($this)
        })
    }

    var old = $.fn.dropdown

    $.fn.dropdown = Plugin
    $.fn.dropdown.Constructor = Dropdown


    // DROPDOWN NO CONFLICT
    // ====================

    $.fn.dropdown.noConflict = function () {
        $.fn.dropdown = old
        return this
    }


    // APPLY TO STANDARD DROPDOWN ELEMENTS
    // ===================================

    $(document)
        .on('click.bs.dropdown.data-api', clearMenus)
        .on('click.bs.dropdown.data-api', '.dropdown form', function (e) {
            e.stopPropagation()
        })
        .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
        .on('keydown.bs.dropdown.data-api', toggle, Dropdown.prototype.keydown)
        .on('keydown.bs.dropdown.data-api', '[role="menu"]', Dropdown.prototype.keydown)
        .on('keydown.bs.dropdown.data-api', '[role="listbox"]', Dropdown.prototype.keydown)

}(jQuery);

/* ========================================================================
 * Bootstrap: modal.js v3.3.4
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
    'use strict';

    // MODAL CLASS DEFINITION
    // ======================

    var Modal = function (element, options) {
        this.options = options
        this.$body = $(document.body)
        this.$element = $(element)
        this.$dialog = this.$element.find('.modal-dialog')
        this.$backdrop = null
        this.isShown = null
        this.originalBodyPad = null
        this.scrollbarWidth = 0
        this.ignoreBackdropClick = false

        if (this.options.remote) {
            this.$element
                .find('.modal-content')
                .load(this.options.remote, $.proxy(function () {
                    this.$element.trigger('loaded.bs.modal')
                }, this))
        }
    }

    Modal.VERSION = '3.3.4'

    Modal.TRANSITION_DURATION = 300
    Modal.BACKDROP_TRANSITION_DURATION = 150

    Modal.DEFAULTS = {
        backdrop: true,
        keyboard: true,
        show: true
    }

    Modal.prototype.toggle = function (_relatedTarget) {
        return this.isShown ? this.hide() : this.show(_relatedTarget)
    }

    Modal.prototype.show = function (_relatedTarget) {
        var that = this
        var e = $.Event('show.bs.modal', {relatedTarget: _relatedTarget})

        this.$element.trigger(e)

        if (this.isShown || e.isDefaultPrevented()) return

        this.isShown = true

        this.checkScrollbar()
        this.setScrollbar()
        this.$body.addClass('modal-open')

        this.escape()
        this.resize()

        this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

        this.$dialog.on('mousedown.dismiss.bs.modal', function () {
            that.$element.one('mouseup.dismiss.bs.modal', function (e) {
                if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true
            })
        })

        this.backdrop(function () {
            var transition = $.support.transition && that.$element.hasClass('fade')

            if (!that.$element.parent().length) {
                that.$element.appendTo(that.$body) // don't move modals dom position
            }

            that.$element
                .show()
                .scrollTop(0)

            that.adjustDialog()

            if (transition) {
                that.$element[0].offsetWidth // force reflow
            }

            that.$element
                .addClass('in')
                .attr('aria-hidden', false)

            that.enforceFocus()

            var e = $.Event('shown.bs.modal', {relatedTarget: _relatedTarget})

            transition ?
                that.$dialog // wait for modal to slide in
                    .one('bsTransitionEnd', function () {
                        that.$element.trigger('focus').trigger(e)
                    })
                    .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
                that.$element.trigger('focus').trigger(e)
        })
    }

    Modal.prototype.hide = function (e) {
        if (e) e.preventDefault()

        e = $.Event('hide.bs.modal')

        this.$element.trigger(e)

        if (!this.isShown || e.isDefaultPrevented()) return

        this.isShown = false

        this.escape()
        this.resize()

        $(document).off('focusin.bs.modal')

        this.$element
            .removeClass('in')
            .attr('aria-hidden', true)
            .off('click.dismiss.bs.modal')
            .off('mouseup.dismiss.bs.modal')

        this.$dialog.off('mousedown.dismiss.bs.modal')

        $.support.transition && this.$element.hasClass('fade') ?
            this.$element
                .one('bsTransitionEnd', $.proxy(this.hideModal, this))
                .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
            this.hideModal()
    }

    Modal.prototype.enforceFocus = function () {
        $(document)
            .off('focusin.bs.modal') // guard against infinite focus loop
            .on('focusin.bs.modal', $.proxy(function (e) {
                if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
                    this.$element.trigger('focus')
                }
            }, this))
    }

    Modal.prototype.escape = function () {
        if (this.isShown && this.options.keyboard) {
            this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e) {
                e.which == 27 && this.hide()
            }, this))
        } else if (!this.isShown) {
            this.$element.off('keydown.dismiss.bs.modal')
        }
    }

    Modal.prototype.resize = function () {
        if (this.isShown) {
            $(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this))
        } else {
            $(window).off('resize.bs.modal')
        }
    }

    Modal.prototype.hideModal = function () {
        var that = this
        this.$element.hide()
        this.backdrop(function () {
            that.$body.removeClass('modal-open')
            that.resetAdjustments()
            that.resetScrollbar()
            that.$element.trigger('hidden.bs.modal')
        })
    }

    Modal.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove()
        this.$backdrop = null
    }

    Modal.prototype.backdrop = function (callback) {
        var that = this
        var animate = this.$element.hasClass('fade') ? 'fade' : ''

        if (this.isShown && this.options.backdrop) {
            var doAnimate = $.support.transition && animate

            this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />')
                .appendTo(this.$body)

            this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
                if (this.ignoreBackdropClick) {
                    this.ignoreBackdropClick = false
                    return
                }
                if (e.target !== e.currentTarget) return
                this.options.backdrop == 'static'
                    ? this.$element[0].focus()
                    : this.hide()
            }, this))

            if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

            this.$backdrop.addClass('in')

            if (!callback) return

            doAnimate ?
                this.$backdrop
                    .one('bsTransitionEnd', callback)
                    .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
                callback()

        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass('in')

            var callbackRemove = function () {
                that.removeBackdrop()
                callback && callback()
            }
            $.support.transition && this.$element.hasClass('fade') ?
                this.$backdrop
                    .one('bsTransitionEnd', callbackRemove)
                    .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
                callbackRemove()

        } else if (callback) {
            callback()
        }
    }

    // these following methods are used to handle overflowing modals

    Modal.prototype.handleUpdate = function () {
        this.adjustDialog()
    }

    Modal.prototype.adjustDialog = function () {
        var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight

        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
            paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''
        })
    }

    Modal.prototype.resetAdjustments = function () {
        this.$element.css({
            paddingLeft: '',
            paddingRight: ''
        })
    }

    Modal.prototype.checkScrollbar = function () {
        var fullWindowWidth = window.innerWidth
        if (!fullWindowWidth) { // workaround for missing window.innerWidth in IE8
            var documentElementRect = document.documentElement.getBoundingClientRect()
            fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth
        this.scrollbarWidth = this.measureScrollbar()
    }

    Modal.prototype.setScrollbar = function () {
        var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
        this.originalBodyPad = document.body.style.paddingRight || ''
        if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)
    }

    Modal.prototype.resetScrollbar = function () {
        this.$body.css('padding-right', this.originalBodyPad)
    }

    Modal.prototype.measureScrollbar = function () { // thx walsh
        var scrollDiv = document.createElement('div')
        scrollDiv.className = 'modal-scrollbar-measure'
        this.$body.append(scrollDiv)
        var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
        this.$body[0].removeChild(scrollDiv)
        return scrollbarWidth
    }


    // MODAL PLUGIN DEFINITION
    // =======================

    function Plugin(option, _relatedTarget) {
        return this.each(function () {
            var $this = $(this)
            var data = $this.data('bs.modal')
            var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

            if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
            if (typeof option == 'string') data[option](_relatedTarget)
            else if (options.show) data.show(_relatedTarget)
        })
    }

    var old = $.fn.modal

    $.fn.modal = Plugin
    $.fn.modal.Constructor = Modal


    // MODAL NO CONFLICT
    // =================

    $.fn.modal.noConflict = function () {
        $.fn.modal = old
        return this
    }


    // MODAL DATA-API
    // ==============

    $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
        var $this = $(this)
        var href = $this.attr('href')
        var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7
        var option = $target.data('bs.modal') ? 'toggle' : $.extend({remote: !/#/.test(href) && href}, $target.data(), $this.data())

        if ($this.is('a')) e.preventDefault()

        $target.one('show.bs.modal', function (showEvent) {
            if (showEvent.isDefaultPrevented()) return // only register focus restorer if modal will actually get shown
            $target.one('hidden.bs.modal', function () {
                $this.is(':visible') && $this.trigger('focus')
            })
        })
        Plugin.call($target, option, this)
    })

}(jQuery);

/* ========================================================================
 * Bootstrap: tooltip.js v3.3.4
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
    'use strict';

    // TOOLTIP PUBLIC CLASS DEFINITION
    // ===============================

    var Tooltip = function (element, options) {
        this.type = null
        this.options = null
        this.enabled = null
        this.timeout = null
        this.hoverState = null
        this.$element = null

        this.init('tooltip', element, options)
    }

    Tooltip.VERSION = '3.3.4'

    Tooltip.TRANSITION_DURATION = 150

    Tooltip.DEFAULTS = {
        animation: true,
        placement: 'top',
        selector: false,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: 'hover focus',
        title: '',
        delay: 0,
        html: false,
        container: false,
        viewport: {
            selector: 'body',
            padding: 0
        }
    }

    Tooltip.prototype.init = function (type, element, options) {
        this.enabled = true
        this.type = type
        this.$element = $(element)
        this.options = this.getOptions(options)
        this.$viewport = this.options.viewport && $(this.options.viewport.selector || this.options.viewport)

        if (this.$element[0] instanceof document.constructor && !this.options.selector) {
            throw new Error('`selector` option must be specified when initializing ' + this.type + ' on the window.document object!')
        }

        var triggers = this.options.trigger.split(' ')

        for (var i = triggers.length; i--;) {
            var trigger = triggers[i]

            if (trigger == 'click') {
                this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
            } else if (trigger != 'manual') {
                var eventIn = trigger == 'hover' ? 'mouseenter' : 'focusin'
                var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout'

                this.$element.on(eventIn + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
                this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
            }
        }

        this.options.selector ?
            (this._options = $.extend({}, this.options, {trigger: 'manual', selector: ''})) :
            this.fixTitle()
    }

    Tooltip.prototype.getDefaults = function () {
        return Tooltip.DEFAULTS
    }

    Tooltip.prototype.getOptions = function (options) {
        options = $.extend({}, this.getDefaults(), this.$element.data(), options)

        if (options.delay && typeof options.delay == 'number') {
            options.delay = {
                show: options.delay,
                hide: options.delay
            }
        }

        return options
    }

    Tooltip.prototype.getDelegateOptions = function () {
        var options = {}
        var defaults = this.getDefaults()

        this._options && $.each(this._options, function (key, value) {
            if (defaults[key] != value) options[key] = value
        })

        return options
    }

    Tooltip.prototype.enter = function (obj) {
        var self = obj instanceof this.constructor ?
            obj : $(obj.currentTarget).data('bs.' + this.type)

        if (self && self.$tip && self.$tip.is(':visible')) {
            self.hoverState = 'in'
            return
        }

        if (!self) {
            self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
            $(obj.currentTarget).data('bs.' + this.type, self)
        }

        clearTimeout(self.timeout)

        self.hoverState = 'in'

        if (!self.options.delay || !self.options.delay.show) return self.show()

        self.timeout = setTimeout(function () {
            if (self.hoverState == 'in') self.show()
        }, self.options.delay.show)
    }

    Tooltip.prototype.leave = function (obj) {
        var self = obj instanceof this.constructor ?
            obj : $(obj.currentTarget).data('bs.' + this.type)

        if (!self) {
            self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
            $(obj.currentTarget).data('bs.' + this.type, self)
        }

        clearTimeout(self.timeout)

        self.hoverState = 'out'

        if (!self.options.delay || !self.options.delay.hide) return self.hide()

        self.timeout = setTimeout(function () {
            if (self.hoverState == 'out') self.hide()
        }, self.options.delay.hide)
    }

    Tooltip.prototype.show = function () {
        var e = $.Event('show.bs.' + this.type)

        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e)

            var inDom = $.contains(this.$element[0].ownerDocument.documentElement, this.$element[0])
            if (e.isDefaultPrevented() || !inDom) return
            var that = this

            var $tip = this.tip()

            var tipId = this.getUID(this.type)

            this.setContent()
            $tip.attr('id', tipId)
            this.$element.attr('aria-describedby', tipId)

            if (this.options.animation) $tip.addClass('fade')

            var placement = typeof this.options.placement == 'function' ?
                this.options.placement.call(this, $tip[0], this.$element[0]) :
                this.options.placement

            var autoToken = /\s?auto?\s?/i
            var autoPlace = autoToken.test(placement)
            if (autoPlace) placement = placement.replace(autoToken, '') || 'top'

            $tip
                .detach()
                .css({top: 0, left: 0, display: 'block'})
                .addClass(placement)
                .data('bs.' + this.type, this)

            this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)

            var pos = this.getPosition()
            var actualWidth = $tip[0].offsetWidth
            var actualHeight = $tip[0].offsetHeight

            if (autoPlace) {
                var orgPlacement = placement
                var $container = this.options.container ? $(this.options.container) : this.$element.parent()
                var containerDim = this.getPosition($container)

                placement = placement == 'bottom' && pos.bottom + actualHeight > containerDim.bottom ? 'top' :
                    placement == 'top' && pos.top - actualHeight < containerDim.top ? 'bottom' :
                        placement == 'right' && pos.right + actualWidth > containerDim.width ? 'left' :
                            placement == 'left' && pos.left - actualWidth < containerDim.left ? 'right' :
                                placement

                $tip
                    .removeClass(orgPlacement)
                    .addClass(placement)
            }

            var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)

            this.applyPlacement(calculatedOffset, placement)

            var complete = function () {
                var prevHoverState = that.hoverState
                that.$element.trigger('shown.bs.' + that.type)
                that.hoverState = null

                if (prevHoverState == 'out') that.leave(that)
            }

            $.support.transition && this.$tip.hasClass('fade') ?
                $tip
                    .one('bsTransitionEnd', complete)
                    .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
                complete()
        }
    }

    Tooltip.prototype.applyPlacement = function (offset, placement) {
        var $tip = this.tip()
        var width = $tip[0].offsetWidth
        var height = $tip[0].offsetHeight

        // manually read margins because getBoundingClientRect includes difference
        var marginTop = parseInt($tip.css('margin-top'), 10)
        var marginLeft = parseInt($tip.css('margin-left'), 10)

        // we must check for NaN for ie 8/9
        if (isNaN(marginTop))  marginTop = 0
        if (isNaN(marginLeft)) marginLeft = 0

        offset.top = offset.top + marginTop
        offset.left = offset.left + marginLeft

        // $.fn.offset doesn't round pixel values
        // so we use setOffset directly with our own function B-0
        $.offset.setOffset($tip[0], $.extend({
            using: function (props) {
                $tip.css({
                    top: Math.round(props.top),
                    left: Math.round(props.left)
                })
            }
        }, offset), 0)

        $tip.addClass('in')

        // check to see if placing tip in new offset caused the tip to resize itself
        var actualWidth = $tip[0].offsetWidth
        var actualHeight = $tip[0].offsetHeight

        if (placement == 'top' && actualHeight != height) {
            offset.top = offset.top + height - actualHeight
        }

        var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight)

        if (delta.left) offset.left += delta.left
        else offset.top += delta.top

        var isVertical = /top|bottom/.test(placement)
        var arrowDelta = isVertical ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight
        var arrowOffsetPosition = isVertical ? 'offsetWidth' : 'offsetHeight'

        $tip.offset(offset)
        this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], isVertical)
    }

    Tooltip.prototype.replaceArrow = function (delta, dimension, isVertical) {
        this.arrow()
            .css(isVertical ? 'left' : 'top', 50 * (1 - delta / dimension) + '%')
            .css(isVertical ? 'top' : 'left', '')
    }

    Tooltip.prototype.setContent = function () {
        var $tip = this.tip()
        var title = this.getTitle()

        $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
        $tip.removeClass('fade in top bottom left right')
    }

    Tooltip.prototype.hide = function (callback) {
        var that = this
        var $tip = $(this.$tip)
        var e = $.Event('hide.bs.' + this.type)

        function complete() {
            if (that.hoverState != 'in') $tip.detach()
            that.$element
                .removeAttr('aria-describedby')
                .trigger('hidden.bs.' + that.type)
            callback && callback()
        }

        this.$element.trigger(e)

        if (e.isDefaultPrevented()) return

        $tip.removeClass('in')

        $.support.transition && $tip.hasClass('fade') ?
            $tip
                .one('bsTransitionEnd', complete)
                .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
            complete()

        this.hoverState = null

        return this
    }

    Tooltip.prototype.fixTitle = function () {
        var $e = this.$element
        if ($e.attr('title') || typeof ($e.attr('data-original-title')) != 'string') {
            $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
        }
    }

    Tooltip.prototype.hasContent = function () {
        return this.getTitle()
    }

    Tooltip.prototype.getPosition = function ($element) {
        $element = $element || this.$element

        var el = $element[0]
        var isBody = el.tagName == 'BODY'

        var elRect = el.getBoundingClientRect()
        if (elRect.width == null) {
            // width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/14093
            elRect = $.extend({}, elRect, {width: elRect.right - elRect.left, height: elRect.bottom - elRect.top})
        }
        var elOffset = isBody ? {top: 0, left: 0} : $element.offset()
        var scroll = {scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop()}
        var outerDims = isBody ? {width: $(window).width(), height: $(window).height()} : null

        return $.extend({}, elRect, scroll, outerDims, elOffset)
    }

    Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
        return placement == 'bottom' ? {top: pos.top + pos.height, left: pos.left + pos.width / 2 - actualWidth / 2} :
            placement == 'top' ? {top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2} :
                placement == 'left' ? {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth} :
                    /* placement == 'right' */ {
                    top: pos.top + pos.height / 2 - actualHeight / 2,
                    left: pos.left + pos.width
                }

    }

    Tooltip.prototype.getViewportAdjustedDelta = function (placement, pos, actualWidth, actualHeight) {
        var delta = {top: 0, left: 0}
        if (!this.$viewport) return delta

        var viewportPadding = this.options.viewport && this.options.viewport.padding || 0
        var viewportDimensions = this.getPosition(this.$viewport)

        if (/right|left/.test(placement)) {
            var topEdgeOffset = pos.top - viewportPadding - viewportDimensions.scroll
            var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight
            if (topEdgeOffset < viewportDimensions.top) { // top overflow
                delta.top = viewportDimensions.top - topEdgeOffset
            } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) { // bottom overflow
                delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset
            }
        } else {
            var leftEdgeOffset = pos.left - viewportPadding
            var rightEdgeOffset = pos.left + viewportPadding + actualWidth
            if (leftEdgeOffset < viewportDimensions.left) { // left overflow
                delta.left = viewportDimensions.left - leftEdgeOffset
            } else if (rightEdgeOffset > viewportDimensions.width) { // right overflow
                delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset
            }
        }

        return delta
    }

    Tooltip.prototype.getTitle = function () {
        var title
        var $e = this.$element
        var o = this.options

        title = $e.attr('data-original-title')
        || (typeof o.title == 'function' ? o.title.call($e[0]) : o.title)

        return title
    }

    Tooltip.prototype.getUID = function (prefix) {
        do prefix += ~~(Math.random() * 1000000)
        while (document.getElementById(prefix))
        return prefix
    }

    Tooltip.prototype.tip = function () {
        return (this.$tip = this.$tip || $(this.options.template))
    }

    Tooltip.prototype.arrow = function () {
        return (this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow'))
    }

    Tooltip.prototype.enable = function () {
        this.enabled = true
    }

    Tooltip.prototype.disable = function () {
        this.enabled = false
    }

    Tooltip.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled
    }

    Tooltip.prototype.toggle = function (e) {
        var self = this
        if (e) {
            self = $(e.currentTarget).data('bs.' + this.type)
            if (!self) {
                self = new this.constructor(e.currentTarget, this.getDelegateOptions())
                $(e.currentTarget).data('bs.' + this.type, self)
            }
        }

        self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
    }

    Tooltip.prototype.destroy = function () {
        var that = this
        clearTimeout(this.timeout)
        this.hide(function () {
            that.$element.off('.' + that.type).removeData('bs.' + that.type)
        })
    }


    // TOOLTIP PLUGIN DEFINITION
    // =========================

    function Plugin(option) {
        return this.each(function () {
            var $this = $(this)
            var data = $this.data('bs.tooltip')
            var options = typeof option == 'object' && option

            if (!data && /destroy|hide/.test(option)) return
            if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
            if (typeof option == 'string') data[option]()
        })
    }

    var old = $.fn.tooltip

    $.fn.tooltip = Plugin
    $.fn.tooltip.Constructor = Tooltip


    // TOOLTIP NO CONFLICT
    // ===================

    $.fn.tooltip.noConflict = function () {
        $.fn.tooltip = old
        return this
    }

}(jQuery);

/* ========================================================================
 * Bootstrap: popover.js v3.3.4
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
    'use strict';

    // POPOVER PUBLIC CLASS DEFINITION
    // ===============================

    var Popover = function (element, options) {
        this.init('popover', element, options)
    }

    if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')

    Popover.VERSION = '3.3.4'

    Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
        placement: 'right',
        trigger: 'click',
        content: '',
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    })


    // NOTE: POPOVER EXTENDS tooltip.js
    // ================================

    Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)

    Popover.prototype.constructor = Popover

    Popover.prototype.getDefaults = function () {
        return Popover.DEFAULTS
    }

    Popover.prototype.setContent = function () {
        var $tip = this.tip()
        var title = this.getTitle()
        var content = this.getContent()

        $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
        $tip.find('.popover-content').children().detach().end()[ // we use append for html objects to maintain js events
            this.options.html ? (typeof content == 'string' ? 'html' : 'append') : 'text'
            ](content)

        $tip.removeClass('fade top bottom left right in')

        // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
        // this manually by checking the contents.
        if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()
    }

    Popover.prototype.hasContent = function () {
        return this.getTitle() || this.getContent()
    }

    Popover.prototype.getContent = function () {
        var $e = this.$element
        var o = this.options

        return $e.attr('data-content')
            || (typeof o.content == 'function' ?
                o.content.call($e[0]) :
                o.content)
    }

    Popover.prototype.arrow = function () {
        return (this.$arrow = this.$arrow || this.tip().find('.arrow'))
    }


    // POPOVER PLUGIN DEFINITION
    // =========================

    function Plugin(option) {
        return this.each(function () {
            var $this = $(this)
            var data = $this.data('bs.popover')
            var options = typeof option == 'object' && option

            if (!data && /destroy|hide/.test(option)) return
            if (!data) $this.data('bs.popover', (data = new Popover(this, options)))
            if (typeof option == 'string') data[option]()
        })
    }

    var old = $.fn.popover

    $.fn.popover = Plugin
    $.fn.popover.Constructor = Popover


    // POPOVER NO CONFLICT
    // ===================

    $.fn.popover.noConflict = function () {
        $.fn.popover = old
        return this
    }

}(jQuery);

/* ========================================================================
 * Bootstrap: scrollspy.js v3.3.4
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
    'use strict';

    // SCROLLSPY CLASS DEFINITION
    // ==========================

    function ScrollSpy(element, options) {
        this.$body = $(document.body)
        this.$scrollElement = $(element).is(document.body) ? $(window) : $(element)
        this.options = $.extend({}, ScrollSpy.DEFAULTS, options)
        this.selector = (this.options.target || '') + ' .nav li > a'
        this.offsets = []
        this.targets = []
        this.activeTarget = null
        this.scrollHeight = 0

        this.$scrollElement.on('scroll.bs.scrollspy', $.proxy(this.process, this))
        this.refresh()
        this.process()
    }

    ScrollSpy.VERSION = '3.3.4'

    ScrollSpy.DEFAULTS = {
        offset: 10
    }

    ScrollSpy.prototype.getScrollHeight = function () {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }

    ScrollSpy.prototype.refresh = function () {
        var that = this
        var offsetMethod = 'offset'
        var offsetBase = 0

        this.offsets = []
        this.targets = []
        this.scrollHeight = this.getScrollHeight()

        if (!$.isWindow(this.$scrollElement[0])) {
            offsetMethod = 'position'
            offsetBase = this.$scrollElement.scrollTop()
        }

        this.$body
            .find(this.selector)
            .map(function () {
                var $el = $(this)
                var href = $el.data('target') || $el.attr('href')
                var $href = /^#./.test(href) && $(href)

                return ($href
                    && $href.length
                    && $href.is(':visible')
                    && [[$href[offsetMethod]().top + offsetBase, href]]) || null
            })
            .sort(function (a, b) {
                return a[0] - b[0]
            })
            .each(function () {
                that.offsets.push(this[0])
                that.targets.push(this[1])
            })
    }

    ScrollSpy.prototype.process = function () {
        var scrollTop = this.$scrollElement.scrollTop() + this.options.offset
        var scrollHeight = this.getScrollHeight()
        var maxScroll = this.options.offset + scrollHeight - this.$scrollElement.height()
        var offsets = this.offsets
        var targets = this.targets
        var activeTarget = this.activeTarget
        var i

        if (this.scrollHeight != scrollHeight) {
            this.refresh()
        }

        if (scrollTop >= maxScroll) {
            return activeTarget != (i = targets[targets.length - 1]) && this.activate(i)
        }

        if (activeTarget && scrollTop < offsets[0]) {
            this.activeTarget = null
            return this.clear()
        }

        for (i = offsets.length; i--;) {
            activeTarget != targets[i]
            && scrollTop >= offsets[i]
            && (offsets[i + 1] === undefined || scrollTop < offsets[i + 1])
            && this.activate(targets[i])
        }
    }

    ScrollSpy.prototype.activate = function (target) {
        this.activeTarget = target

        this.clear()

        var selector = this.selector +
            '[data-target="' + target + '"],' +
            this.selector + '[href="' + target + '"]'

        var active = $(selector)
            .parents('li')
            .addClass('active')

        if (active.parent('.dropdown-menu').length) {
            active = active
                .closest('li.dropdown')
                .addClass('active')
        }

        active.trigger('activate.bs.scrollspy')
    }

    ScrollSpy.prototype.clear = function () {
        $(this.selector)
            .parentsUntil(this.options.target, '.active')
            .removeClass('active')
    }


    // SCROLLSPY PLUGIN DEFINITION
    // ===========================

    function Plugin(option) {
        return this.each(function () {
            var $this = $(this)
            var data = $this.data('bs.scrollspy')
            var options = typeof option == 'object' && option

            if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)))
            if (typeof option == 'string') data[option]()
        })
    }

    var old = $.fn.scrollspy

    $.fn.scrollspy = Plugin
    $.fn.scrollspy.Constructor = ScrollSpy


    // SCROLLSPY NO CONFLICT
    // =====================

    $.fn.scrollspy.noConflict = function () {
        $.fn.scrollspy = old
        return this
    }


    // SCROLLSPY DATA-API
    // ==================

    $(window).on('load.bs.scrollspy.data-api', function () {
        $('[data-spy="scroll"]').each(function () {
            var $spy = $(this)
            Plugin.call($spy, $spy.data())
        })
    })

}(jQuery);

/* ========================================================================
 * Bootstrap: tab.js v3.3.4
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
    'use strict';

    // TAB CLASS DEFINITION
    // ====================

    var Tab = function (element) {
        this.element = $(element)
    }

    Tab.VERSION = '3.3.4'

    Tab.TRANSITION_DURATION = 150

    Tab.prototype.show = function () {
        var $this = this.element
        var $ul = $this.closest('ul:not(.dropdown-menu)')
        var selector = $this.data('target')

        if (!selector) {
            selector = $this.attr('href')
            selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
        }

        if ($this.parent('li').hasClass('active')) return

        var $previous = $ul.find('.active:last a')
        var hideEvent = $.Event('hide.bs.tab', {
            relatedTarget: $this[0]
        })
        var showEvent = $.Event('show.bs.tab', {
            relatedTarget: $previous[0]
        })

        $previous.trigger(hideEvent)
        $this.trigger(showEvent)

        if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) return

        var $target = $(selector)

        this.activate($this.closest('li'), $ul)
        this.activate($target, $target.parent(), function () {
            $previous.trigger({
                type: 'hidden.bs.tab',
                relatedTarget: $this[0]
            })
            $this.trigger({
                type: 'shown.bs.tab',
                relatedTarget: $previous[0]
            })
        })
    }

    Tab.prototype.activate = function (element, container, callback) {
        var $active = container.find('> .active')
        var transition = callback
            && $.support.transition
            && (($active.length && $active.hasClass('fade')) || !!container.find('> .fade').length)

        function next() {
            $active
                .removeClass('active')
                .find('> .dropdown-menu > .active')
                .removeClass('active')
                .end()
                .find('[data-toggle="tab"]')
                .attr('aria-expanded', false)

            element
                .addClass('active')
                .find('[data-toggle="tab"]')
                .attr('aria-expanded', true)

            if (transition) {
                element[0].offsetWidth // reflow for transition
                element.addClass('in')
            } else {
                element.removeClass('fade')
            }

            if (element.parent('.dropdown-menu').length) {
                element
                    .closest('li.dropdown')
                    .addClass('active')
                    .end()
                    .find('[data-toggle="tab"]')
                    .attr('aria-expanded', true)
            }

            callback && callback()
        }

        $active.length && transition ?
            $active
                .one('bsTransitionEnd', next)
                .emulateTransitionEnd(Tab.TRANSITION_DURATION) :
            next()

        $active.removeClass('in')
    }


    // TAB PLUGIN DEFINITION
    // =====================

    function Plugin(option) {
        return this.each(function () {
            var $this = $(this)
            var data = $this.data('bs.tab')

            if (!data) $this.data('bs.tab', (data = new Tab(this)))
            if (typeof option == 'string') data[option]()
        })
    }

    var old = $.fn.tab

    $.fn.tab = Plugin
    $.fn.tab.Constructor = Tab


    // TAB NO CONFLICT
    // ===============

    $.fn.tab.noConflict = function () {
        $.fn.tab = old
        return this
    }


    // TAB DATA-API
    // ============

    var clickHandler = function (e) {
        e.preventDefault()
        Plugin.call($(this), 'show')
    }

    $(document)
        .on('click.bs.tab.data-api', '[data-toggle="tab"]', clickHandler)
        .on('click.bs.tab.data-api', '[data-toggle="pill"]', clickHandler)

}(jQuery);

/* ========================================================================
 * Bootstrap: affix.js v3.3.4
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
    'use strict';

    // AFFIX CLASS DEFINITION
    // ======================

    var Affix = function (element, options) {
        this.options = $.extend({}, Affix.DEFAULTS, options)

        this.$target = $(this.options.target)
            .on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))
            .on('click.bs.affix.data-api', $.proxy(this.checkPositionWithEventLoop, this))

        this.$element = $(element)
        this.affixed = null
        this.unpin = null
        this.pinnedOffset = null

        this.checkPosition()
    }

    Affix.VERSION = '3.3.4'

    Affix.RESET = 'affix affix-top affix-bottom'

    Affix.DEFAULTS = {
        offset: 0,
        target: window
    }

    Affix.prototype.getState = function (scrollHeight, height, offsetTop, offsetBottom) {
        var scrollTop = this.$target.scrollTop()
        var position = this.$element.offset()
        var targetHeight = this.$target.height()

        if (offsetTop != null && this.affixed == 'top') return scrollTop < offsetTop ? 'top' : false

        if (this.affixed == 'bottom') {
            if (offsetTop != null) return (scrollTop + this.unpin <= position.top) ? false : 'bottom'
            return (scrollTop + targetHeight <= scrollHeight - offsetBottom) ? false : 'bottom'
        }

        var initializing = this.affixed == null
        var colliderTop = initializing ? scrollTop : position.top
        var colliderHeight = initializing ? targetHeight : height

        if (offsetTop != null && scrollTop <= offsetTop) return 'top'
        if (offsetBottom != null && (colliderTop + colliderHeight >= scrollHeight - offsetBottom)) return 'bottom'

        return false
    }

    Affix.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset) return this.pinnedOffset
        this.$element.removeClass(Affix.RESET).addClass('affix')
        var scrollTop = this.$target.scrollTop()
        var position = this.$element.offset()
        return (this.pinnedOffset = position.top - scrollTop)
    }

    Affix.prototype.checkPositionWithEventLoop = function () {
        setTimeout($.proxy(this.checkPosition, this), 1)
    }

    Affix.prototype.checkPosition = function () {
        if (!this.$element.is(':visible')) return

        var height = this.$element.height()
        var offset = this.options.offset
        var offsetTop = offset.top
        var offsetBottom = offset.bottom
        var scrollHeight = $(document.body).height()

        if (typeof offset != 'object')         offsetBottom = offsetTop = offset
        if (typeof offsetTop == 'function')    offsetTop = offset.top(this.$element)
        if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element)

        var affix = this.getState(scrollHeight, height, offsetTop, offsetBottom)

        if (this.affixed != affix) {
            if (this.unpin != null) this.$element.css('top', '')

            var affixType = 'affix' + (affix ? '-' + affix : '')
            var e = $.Event(affixType + '.bs.affix')

            this.$element.trigger(e)

            if (e.isDefaultPrevented()) return

            this.affixed = affix
            this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null

            this.$element
                .removeClass(Affix.RESET)
                .addClass(affixType)
                .trigger(affixType.replace('affix', 'affixed') + '.bs.affix')
        }

        if (affix == 'bottom') {
            this.$element.offset({
                top: scrollHeight - height - offsetBottom
            })
        }
    }


    // AFFIX PLUGIN DEFINITION
    // =======================

    function Plugin(option) {
        return this.each(function () {
            var $this = $(this)
            var data = $this.data('bs.affix')
            var options = typeof option == 'object' && option

            if (!data) $this.data('bs.affix', (data = new Affix(this, options)))
            if (typeof option == 'string') data[option]()
        })
    }

    var old = $.fn.affix

    $.fn.affix = Plugin
    $.fn.affix.Constructor = Affix


    // AFFIX NO CONFLICT
    // =================

    $.fn.affix.noConflict = function () {
        $.fn.affix = old
        return this
    }


    // AFFIX DATA-API
    // ==============

    $(window).on('load', function () {
        $('[data-spy="affix"]').each(function () {
            var $spy = $(this)
            var data = $spy.data()

            data.offset = data.offset || {}

            if (data.offsetBottom != null) data.offset.bottom = data.offsetBottom
            if (data.offsetTop != null) data.offset.top = data.offsetTop

            Plugin.call($spy, data)
        })
    })

}(jQuery);

/*
 Leaflet, a JavaScript library for mobile-friendly interactive maps. http://leafletjs.com
 (c) 2010-2013, Vladimir Agafonkin
 (c) 2010-2011, CloudMade
 */
(function (window, document, undefined) {
    var oldL = window.L,
        L = {};

    L.version = '0.7.3';

// define Leaflet for Node module pattern loaders, including Browserify
    if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = L;

// define Leaflet as an AMD module
    } else if (typeof define === 'function' && define.amd) {
        define(L);
    }

// define Leaflet as a global L variable, saving the original L to restore later if needed

    L.noConflict = function () {
        window.L = oldL;
        return this;
    };

    window.L = L;


    /*
     * L.Util contains various utility functions used throughout Leaflet code.
     */

    L.Util = {
        extend: function (dest) { // (Object[, Object, ...]) ->
            var sources = Array.prototype.slice.call(arguments, 1),
                i, j, len, src;

            for (j = 0, len = sources.length; j < len; j++) {
                src = sources[j] || {};
                for (i in src) {
                    if (src.hasOwnProperty(i)) {
                        dest[i] = src[i];
                    }
                }
            }
            return dest;
        },

        bind: function (fn, obj) { // (Function, Object) -> Function
            var args = arguments.length > 2 ? Array.prototype.slice.call(arguments, 2) : null;
            return function () {
                return fn.apply(obj, args || arguments);
            };
        },

        stamp: (function () {
            var lastId = 0,
                key = '_leaflet_id';
            return function (obj) {
                obj[key] = obj[key] || ++lastId;
                return obj[key];
            };
        }()),

        invokeEach: function (obj, method, context) {
            var i, args;

            if (typeof obj === 'object') {
                args = Array.prototype.slice.call(arguments, 3);

                for (i in obj) {
                    method.apply(context, [i, obj[i]].concat(args));
                }
                return true;
            }

            return false;
        },

        limitExecByInterval: function (fn, time, context) {
            var lock, execOnUnlock;

            return function wrapperFn() {
                var args = arguments;

                if (lock) {
                    execOnUnlock = true;
                    return;
                }

                lock = true;

                setTimeout(function () {
                    lock = false;

                    if (execOnUnlock) {
                        wrapperFn.apply(context, args);
                        execOnUnlock = false;
                    }
                }, time);

                fn.apply(context, args);
            };
        },

        falseFn: function () {
            return false;
        },

        formatNum: function (num, digits) {
            var pow = Math.pow(10, digits || 5);
            return Math.round(num * pow) / pow;
        },

        trim: function (str) {
            return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
        },

        splitWords: function (str) {
            return L.Util.trim(str).split(/\s+/);
        },

        setOptions: function (obj, options) {
            obj.options = L.extend({}, obj.options, options);
            return obj.options;
        },

        getParamString: function (obj, existingUrl, uppercase) {
            var params = [];
            for (var i in obj) {
                params.push(encodeURIComponent(uppercase ? i.toUpperCase() : i) + '=' + encodeURIComponent(obj[i]));
            }
            return ((!existingUrl || existingUrl.indexOf('?') === -1) ? '?' : '&') + params.join('&');
        },
        template: function (str, data) {
            return str.replace(/\{ *([\w_]+) *\}/g, function (str, key) {
                var value = data[key];
                if (value === undefined) {
                    throw new Error('No value provided for variable ' + str);
                } else if (typeof value === 'function') {
                    value = value(data);
                }
                return value;
            });
        },

        isArray: Array.isArray || function (obj) {
            return (Object.prototype.toString.call(obj) === '[object Array]');
        },

        emptyImageUrl: 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='
    };

    (function () {

        // inspired by http://paulirish.com/2011/requestanimationframe-for-smart-animating/

        function getPrefixed(name) {
            var i, fn,
                prefixes = ['webkit', 'moz', 'o', 'ms'];

            for (i = 0; i < prefixes.length && !fn; i++) {
                fn = window[prefixes[i] + name];
            }

            return fn;
        }

        var lastTime = 0;

        function timeoutDefer(fn) {
            var time = +new Date(),
                timeToCall = Math.max(0, 16 - (time - lastTime));

            lastTime = time + timeToCall;
            return window.setTimeout(fn, timeToCall);
        }

        var requestFn = window.requestAnimationFrame ||
            getPrefixed('RequestAnimationFrame') || timeoutDefer;

        var cancelFn = window.cancelAnimationFrame ||
            getPrefixed('CancelAnimationFrame') ||
            getPrefixed('CancelRequestAnimationFrame') ||
            function (id) {
                window.clearTimeout(id);
            };


        L.Util.requestAnimFrame = function (fn, context, immediate, element) {
            fn = L.bind(fn, context);

            if (immediate && requestFn === timeoutDefer) {
                fn();
            } else {
                return requestFn.call(window, fn, element);
            }
        };

        L.Util.cancelAnimFrame = function (id) {
            if (id) {
                cancelFn.call(window, id);
            }
        };

    }());

// shortcuts for most used utility functions
    L.extend = L.Util.extend;
    L.bind = L.Util.bind;
    L.stamp = L.Util.stamp;
    L.setOptions = L.Util.setOptions;


    /*
     * L.Class powers the OOP facilities of the library.
     * Thanks to John Resig and Dean Edwards for inspiration!
     */

    L.Class = function () {
    };

    L.Class.extend = function (props) {

        // extended class with the new prototype
        var NewClass = function () {

            // call the constructor
            if (this.initialize) {
                this.initialize.apply(this, arguments);
            }

            // call all constructor hooks
            if (this._initHooks) {
                this.callInitHooks();
            }
        };

        // instantiate class without calling constructor
        var F = function () {
        };
        F.prototype = this.prototype;

        var proto = new F();
        proto.constructor = NewClass;

        NewClass.prototype = proto;

        //inherit parent's statics
        for (var i in this) {
            if (this.hasOwnProperty(i) && i !== 'prototype') {
                NewClass[i] = this[i];
            }
        }

        // mix static properties into the class
        if (props.statics) {
            L.extend(NewClass, props.statics);
            delete props.statics;
        }

        // mix includes into the prototype
        if (props.includes) {
            L.Util.extend.apply(null, [proto].concat(props.includes));
            delete props.includes;
        }

        // merge options
        if (props.options && proto.options) {
            props.options = L.extend({}, proto.options, props.options);
        }

        // mix given properties into the prototype
        L.extend(proto, props);

        proto._initHooks = [];

        var parent = this;
        // jshint camelcase: false
        NewClass.__super__ = parent.prototype;

        // add method for calling all hooks
        proto.callInitHooks = function () {

            if (this._initHooksCalled) {
                return;
            }

            if (parent.prototype.callInitHooks) {
                parent.prototype.callInitHooks.call(this);
            }

            this._initHooksCalled = true;

            for (var i = 0, len = proto._initHooks.length; i < len; i++) {
                proto._initHooks[i].call(this);
            }
        };

        return NewClass;
    };


// method for adding properties to prototype
    L.Class.include = function (props) {
        L.extend(this.prototype, props);
    };

// merge new default options to the Class
    L.Class.mergeOptions = function (options) {
        L.extend(this.prototype.options, options);
    };

// add a constructor hook
    L.Class.addInitHook = function (fn) { // (Function) || (String, args...)
        var args = Array.prototype.slice.call(arguments, 1);

        var init = typeof fn === 'function' ? fn : function () {
            this[fn].apply(this, args);
        };

        this.prototype._initHooks = this.prototype._initHooks || [];
        this.prototype._initHooks.push(init);
    };


    /*
     * L.Mixin.Events is used to add custom events functionality to Leaflet classes.
     */

    var eventsKey = '_leaflet_events';

    L.Mixin = {};

    L.Mixin.Events = {

        addEventListener: function (types, fn, context) { // (String, Function[, Object]) or (Object[, Object])

            // types can be a map of types/handlers
            if (L.Util.invokeEach(types, this.addEventListener, this, fn, context)) {
                return this;
            }

            var events = this[eventsKey] = this[eventsKey] || {},
                contextId = context && context !== this && L.stamp(context),
                i, len, event, type, indexKey, indexLenKey, typeIndex;

            // types can be a string of space-separated words
            types = L.Util.splitWords(types);

            for (i = 0, len = types.length; i < len; i++) {
                event = {
                    action: fn,
                    context: context || this
                };
                type = types[i];

                if (contextId) {
                    // store listeners of a particular context in a separate hash (if it has an id)
                    // gives a major performance boost when removing thousands of map layers

                    indexKey = type + '_idx';
                    indexLenKey = indexKey + '_len';

                    typeIndex = events[indexKey] = events[indexKey] || {};

                    if (!typeIndex[contextId]) {
                        typeIndex[contextId] = [];

                        // keep track of the number of keys in the index to quickly check if it's empty
                        events[indexLenKey] = (events[indexLenKey] || 0) + 1;
                    }

                    typeIndex[contextId].push(event);


                } else {
                    events[type] = events[type] || [];
                    events[type].push(event);
                }
            }

            return this;
        },

        hasEventListeners: function (type) { // (String) -> Boolean
            var events = this[eventsKey];
            return !!events && ((type in events && events[type].length > 0) ||
                (type + '_idx' in events && events[type + '_idx_len'] > 0));
        },

        removeEventListener: function (types, fn, context) { // ([String, Function, Object]) or (Object[, Object])

            if (!this[eventsKey]) {
                return this;
            }

            if (!types) {
                return this.clearAllEventListeners();
            }

            if (L.Util.invokeEach(types, this.removeEventListener, this, fn, context)) {
                return this;
            }

            var events = this[eventsKey],
                contextId = context && context !== this && L.stamp(context),
                i, len, type, listeners, j, indexKey, indexLenKey, typeIndex, removed;

            types = L.Util.splitWords(types);

            for (i = 0, len = types.length; i < len; i++) {
                type = types[i];
                indexKey = type + '_idx';
                indexLenKey = indexKey + '_len';

                typeIndex = events[indexKey];

                if (!fn) {
                    // clear all listeners for a type if function isn't specified
                    delete events[type];
                    delete events[indexKey];
                    delete events[indexLenKey];

                } else {
                    listeners = contextId && typeIndex ? typeIndex[contextId] : events[type];

                    if (listeners) {
                        for (j = listeners.length - 1; j >= 0; j--) {
                            if ((listeners[j].action === fn) && (!context || (listeners[j].context === context))) {
                                removed = listeners.splice(j, 1);
                                // set the old action to a no-op, because it is possible
                                // that the listener is being iterated over as part of a dispatch
                                removed[0].action = L.Util.falseFn;
                            }
                        }

                        if (context && typeIndex && (listeners.length === 0)) {
                            delete typeIndex[contextId];
                            events[indexLenKey]--;
                        }
                    }
                }
            }

            return this;
        },

        clearAllEventListeners: function () {
            delete this[eventsKey];
            return this;
        },

        fireEvent: function (type, data) { // (String[, Object])
            if (!this.hasEventListeners(type)) {
                return this;
            }

            var event = L.Util.extend({}, data, {type: type, target: this});

            var events = this[eventsKey],
                listeners, i, len, typeIndex, contextId;

            if (events[type]) {
                // make sure adding/removing listeners inside other listeners won't cause infinite loop
                listeners = events[type].slice();

                for (i = 0, len = listeners.length; i < len; i++) {
                    listeners[i].action.call(listeners[i].context, event);
                }
            }

            // fire event for the context-indexed listeners as well
            typeIndex = events[type + '_idx'];

            for (contextId in typeIndex) {
                listeners = typeIndex[contextId].slice();

                if (listeners) {
                    for (i = 0, len = listeners.length; i < len; i++) {
                        listeners[i].action.call(listeners[i].context, event);
                    }
                }
            }

            return this;
        },

        addOneTimeEventListener: function (types, fn, context) {

            if (L.Util.invokeEach(types, this.addOneTimeEventListener, this, fn, context)) {
                return this;
            }

            var handler = L.bind(function () {
                this
                    .removeEventListener(types, fn, context)
                    .removeEventListener(types, handler, context);
            }, this);

            return this
                .addEventListener(types, fn, context)
                .addEventListener(types, handler, context);
        }
    };

    L.Mixin.Events.on = L.Mixin.Events.addEventListener;
    L.Mixin.Events.off = L.Mixin.Events.removeEventListener;
    L.Mixin.Events.once = L.Mixin.Events.addOneTimeEventListener;
    L.Mixin.Events.fire = L.Mixin.Events.fireEvent;


    /*
     * L.Browser handles different browser and feature detections for internal Leaflet use.
     */

    (function () {

        var ie = 'ActiveXObject' in window,
            ielt9 = ie && !document.addEventListener,

        // terrible browser detection to work around Safari / iOS / Android browser bugs
            ua = navigator.userAgent.toLowerCase(),
            webkit = ua.indexOf('webkit') !== -1,
            chrome = ua.indexOf('chrome') !== -1,
            phantomjs = ua.indexOf('phantom') !== -1,
            android = ua.indexOf('android') !== -1,
            android23 = ua.search('android [23]') !== -1,
            gecko = ua.indexOf('gecko') !== -1,

            mobile = typeof orientation !== undefined + '',
            msPointer = window.navigator && window.navigator.msPointerEnabled &&
                window.navigator.msMaxTouchPoints && !window.PointerEvent,
            pointer = (window.PointerEvent && window.navigator.pointerEnabled && window.navigator.maxTouchPoints) ||
                msPointer,
            retina = ('devicePixelRatio' in window && window.devicePixelRatio > 1) ||
                ('matchMedia' in window && window.matchMedia('(min-resolution:144dpi)') &&
                window.matchMedia('(min-resolution:144dpi)').matches),

            doc = document.documentElement,
            ie3d = ie && ('transition' in doc.style),
            webkit3d = ('WebKitCSSMatrix' in window) && ('m11' in new window.WebKitCSSMatrix()) && !android23,
            gecko3d = 'MozPerspective' in doc.style,
            opera3d = 'OTransition' in doc.style,
            any3d = !window.L_DISABLE_3D && (ie3d || webkit3d || gecko3d || opera3d) && !phantomjs;


        // PhantomJS has 'ontouchstart' in document.documentElement, but doesn't actually support touch.
        // https://github.com/Leaflet/Leaflet/pull/1434#issuecomment-13843151

        var touch = !window.L_NO_TOUCH && !phantomjs && (function () {

                var startName = 'ontouchstart';

                // IE10+ (We simulate these into touch* events in L.DomEvent and L.DomEvent.Pointer) or WebKit, etc.
                if (pointer || (startName in doc)) {
                    return true;
                }

                // Firefox/Gecko
                var div = document.createElement('div'),
                    supported = false;

                if (!div.setAttribute) {
                    return false;
                }
                div.setAttribute(startName, 'return;');

                if (typeof div[startName] === 'function') {
                    supported = true;
                }

                div.removeAttribute(startName);
                div = null;

                return supported;
            }());


        L.Browser = {
            ie: ie,
            ielt9: ielt9,
            webkit: webkit,
            gecko: gecko && !webkit && !window.opera && !ie,

            android: android,
            android23: android23,

            chrome: chrome,

            ie3d: ie3d,
            webkit3d: webkit3d,
            gecko3d: gecko3d,
            opera3d: opera3d,
            any3d: any3d,

            mobile: mobile,
            mobileWebkit: mobile && webkit,
            mobileWebkit3d: mobile && webkit3d,
            mobileOpera: mobile && window.opera,

            touch: touch,
            msPointer: msPointer,
            pointer: pointer,

            retina: retina
        };

    }());


    /*
     * L.Point represents a point with x and y coordinates.
     */

    L.Point = function (/*Number*/ x, /*Number*/ y, /*Boolean*/ round) {
        this.x = (round ? Math.round(x) : x);
        this.y = (round ? Math.round(y) : y);
    };

    L.Point.prototype = {

        clone: function () {
            return new L.Point(this.x, this.y);
        },

        // non-destructive, returns a new point
        add: function (point) {
            return this.clone()._add(L.point(point));
        },

        // destructive, used directly for performance in situations where it's safe to modify existing point
        _add: function (point) {
            this.x += point.x;
            this.y += point.y;
            return this;
        },

        subtract: function (point) {
            return this.clone()._subtract(L.point(point));
        },

        _subtract: function (point) {
            this.x -= point.x;
            this.y -= point.y;
            return this;
        },

        divideBy: function (num) {
            return this.clone()._divideBy(num);
        },

        _divideBy: function (num) {
            this.x /= num;
            this.y /= num;
            return this;
        },

        multiplyBy: function (num) {
            return this.clone()._multiplyBy(num);
        },

        _multiplyBy: function (num) {
            this.x *= num;
            this.y *= num;
            return this;
        },

        round: function () {
            return this.clone()._round();
        },

        _round: function () {
            this.x = Math.round(this.x);
            this.y = Math.round(this.y);
            return this;
        },

        floor: function () {
            return this.clone()._floor();
        },

        _floor: function () {
            this.x = Math.floor(this.x);
            this.y = Math.floor(this.y);
            return this;
        },

        distanceTo: function (point) {
            point = L.point(point);

            var x = point.x - this.x,
                y = point.y - this.y;

            return Math.sqrt(x * x + y * y);
        },

        equals: function (point) {
            point = L.point(point);

            return point.x === this.x &&
                point.y === this.y;
        },

        contains: function (point) {
            point = L.point(point);

            return Math.abs(point.x) <= Math.abs(this.x) &&
                Math.abs(point.y) <= Math.abs(this.y);
        },

        toString: function () {
            return 'Point(' +
                L.Util.formatNum(this.x) + ', ' +
                L.Util.formatNum(this.y) + ')';
        }
    };

    L.point = function (x, y, round) {
        if (x instanceof L.Point) {
            return x;
        }
        if (L.Util.isArray(x)) {
            return new L.Point(x[0], x[1]);
        }
        if (x === undefined || x === null) {
            return x;
        }
        return new L.Point(x, y, round);
    };


    /*
     * L.Bounds represents a rectangular area on the screen in pixel coordinates.
     */

    L.Bounds = function (a, b) { //(Point, Point) or Point[]
        if (!a) {
            return;
        }

        var points = b ? [a, b] : a;

        for (var i = 0, len = points.length; i < len; i++) {
            this.extend(points[i]);
        }
    };

    L.Bounds.prototype = {
        // extend the bounds to contain the given point
        extend: function (point) { // (Point)
            point = L.point(point);

            if (!this.min && !this.max) {
                this.min = point.clone();
                this.max = point.clone();
            } else {
                this.min.x = Math.min(point.x, this.min.x);
                this.max.x = Math.max(point.x, this.max.x);
                this.min.y = Math.min(point.y, this.min.y);
                this.max.y = Math.max(point.y, this.max.y);
            }
            return this;
        },

        getCenter: function (round) { // (Boolean) -> Point
            return new L.Point(
                (this.min.x + this.max.x) / 2,
                (this.min.y + this.max.y) / 2, round);
        },

        getBottomLeft: function () { // -> Point
            return new L.Point(this.min.x, this.max.y);
        },

        getTopRight: function () { // -> Point
            return new L.Point(this.max.x, this.min.y);
        },

        getSize: function () {
            return this.max.subtract(this.min);
        },

        contains: function (obj) { // (Bounds) or (Point) -> Boolean
            var min, max;

            if (typeof obj[0] === 'number' || obj instanceof L.Point) {
                obj = L.point(obj);
            } else {
                obj = L.bounds(obj);
            }

            if (obj instanceof L.Bounds) {
                min = obj.min;
                max = obj.max;
            } else {
                min = max = obj;
            }

            return (min.x >= this.min.x) &&
                (max.x <= this.max.x) &&
                (min.y >= this.min.y) &&
                (max.y <= this.max.y);
        },

        intersects: function (bounds) { // (Bounds) -> Boolean
            bounds = L.bounds(bounds);

            var min = this.min,
                max = this.max,
                min2 = bounds.min,
                max2 = bounds.max,
                xIntersects = (max2.x >= min.x) && (min2.x <= max.x),
                yIntersects = (max2.y >= min.y) && (min2.y <= max.y);

            return xIntersects && yIntersects;
        },

        isValid: function () {
            return !!(this.min && this.max);
        }
    };

    L.bounds = function (a, b) { // (Bounds) or (Point, Point) or (Point[])
        if (!a || a instanceof L.Bounds) {
            return a;
        }
        return new L.Bounds(a, b);
    };


    /*
     * L.Transformation is an utility class to perform simple point transformations through a 2d-matrix.
     */

    L.Transformation = function (a, b, c, d) {
        this._a = a;
        this._b = b;
        this._c = c;
        this._d = d;
    };

    L.Transformation.prototype = {
        transform: function (point, scale) { // (Point, Number) -> Point
            return this._transform(point.clone(), scale);
        },

        // destructive transform (faster)
        _transform: function (point, scale) {
            scale = scale || 1;
            point.x = scale * (this._a * point.x + this._b);
            point.y = scale * (this._c * point.y + this._d);
            return point;
        },

        untransform: function (point, scale) {
            scale = scale || 1;
            return new L.Point(
                (point.x / scale - this._b) / this._a,
                (point.y / scale - this._d) / this._c);
        }
    };


    /*
     * L.DomUtil contains various utility functions for working with DOM.
     */

    L.DomUtil = {
        get: function (id) {
            return (typeof id === 'string' ? document.getElementById(id) : id);
        },

        getStyle: function (el, style) {

            var value = el.style[style];

            if (!value && el.currentStyle) {
                value = el.currentStyle[style];
            }

            if ((!value || value === 'auto') && document.defaultView) {
                var css = document.defaultView.getComputedStyle(el, null);
                value = css ? css[style] : null;
            }

            return value === 'auto' ? null : value;
        },

        getViewportOffset: function (element) {

            var top = 0,
                left = 0,
                el = element,
                docBody = document.body,
                docEl = document.documentElement,
                pos;

            do {
                top += el.offsetTop || 0;
                left += el.offsetLeft || 0;

                //add borders
                top += parseInt(L.DomUtil.getStyle(el, 'borderTopWidth'), 10) || 0;
                left += parseInt(L.DomUtil.getStyle(el, 'borderLeftWidth'), 10) || 0;

                pos = L.DomUtil.getStyle(el, 'position');

                if (el.offsetParent === docBody && pos === 'absolute') {
                    break;
                }

                if (pos === 'fixed') {
                    top += docBody.scrollTop || docEl.scrollTop || 0;
                    left += docBody.scrollLeft || docEl.scrollLeft || 0;
                    break;
                }

                if (pos === 'relative' && !el.offsetLeft) {
                    var width = L.DomUtil.getStyle(el, 'width'),
                        maxWidth = L.DomUtil.getStyle(el, 'max-width'),
                        r = el.getBoundingClientRect();

                    if (width !== 'none' || maxWidth !== 'none') {
                        left += r.left + el.clientLeft;
                    }

                    //calculate full y offset since we're breaking out of the loop
                    top += r.top + (docBody.scrollTop || docEl.scrollTop || 0);

                    break;
                }

                el = el.offsetParent;

            } while (el);

            el = element;

            do {
                if (el === docBody) {
                    break;
                }

                top -= el.scrollTop || 0;
                left -= el.scrollLeft || 0;

                el = el.parentNode;
            } while (el);

            return new L.Point(left, top);
        },

        documentIsLtr: function () {
            if (!L.DomUtil._docIsLtrCached) {
                L.DomUtil._docIsLtrCached = true;
                L.DomUtil._docIsLtr = L.DomUtil.getStyle(document.body, 'direction') === 'ltr';
            }
            return L.DomUtil._docIsLtr;
        },

        create: function (tagName, className, container) {

            var el = document.createElement(tagName);
            el.className = className;

            if (container) {
                container.appendChild(el);
            }

            return el;
        },

        hasClass: function (el, name) {
            if (el.classList !== undefined) {
                return el.classList.contains(name);
            }
            var className = L.DomUtil._getClass(el);
            return className.length > 0 && new RegExp('(^|\\s)' + name + '(\\s|$)').test(className);
        },

        addClass: function (el, name) {
            if (el.classList !== undefined) {
                var classes = L.Util.splitWords(name);
                for (var i = 0, len = classes.length; i < len; i++) {
                    el.classList.add(classes[i]);
                }
            } else if (!L.DomUtil.hasClass(el, name)) {
                var className = L.DomUtil._getClass(el);
                L.DomUtil._setClass(el, (className ? className + ' ' : '') + name);
            }
        },

        removeClass: function (el, name) {
            if (el.classList !== undefined) {
                el.classList.remove(name);
            } else {
                L.DomUtil._setClass(el, L.Util.trim((' ' + L.DomUtil._getClass(el) + ' ').replace(' ' + name + ' ', ' ')));
            }
        },

        _setClass: function (el, name) {
            if (el.className.baseVal === undefined) {
                el.className = name;
            } else {
                // in case of SVG element
                el.className.baseVal = name;
            }
        },

        _getClass: function (el) {
            return el.className.baseVal === undefined ? el.className : el.className.baseVal;
        },

        setOpacity: function (el, value) {

            if ('opacity' in el.style) {
                el.style.opacity = value;

            } else if ('filter' in el.style) {

                var filter = false,
                    filterName = 'DXImageTransform.Microsoft.Alpha';

                // filters collection throws an error if we try to retrieve a filter that doesn't exist
                try {
                    filter = el.filters.item(filterName);
                } catch (e) {
                    // don't set opacity to 1 if we haven't already set an opacity,
                    // it isn't needed and breaks transparent pngs.
                    if (value === 1) {
                        return;
                    }
                }

                value = Math.round(value * 100);

                if (filter) {
                    filter.Enabled = (value !== 100);
                    filter.Opacity = value;
                } else {
                    el.style.filter += ' progid:' + filterName + '(opacity=' + value + ')';
                }
            }
        },

        testProp: function (props) {

            var style = document.documentElement.style;

            for (var i = 0; i < props.length; i++) {
                if (props[i] in style) {
                    return props[i];
                }
            }
            return false;
        },

        getTranslateString: function (point) {
            // on WebKit browsers (Chrome/Safari/iOS Safari/Android) using translate3d instead of translate
            // makes animation smoother as it ensures HW accel is used. Firefox 13 doesn't care
            // (same speed either way), Opera 12 doesn't support translate3d

            var is3d = L.Browser.webkit3d,
                open = 'translate' + (is3d ? '3d' : '') + '(',
                close = (is3d ? ',0' : '') + ')';

            return open + point.x + 'px,' + point.y + 'px' + close;
        },

        getScaleString: function (scale, origin) {

            var preTranslateStr = L.DomUtil.getTranslateString(origin.add(origin.multiplyBy(-1 * scale))),
                scaleStr = ' scale(' + scale + ') ';

            return preTranslateStr + scaleStr;
        },

        setPosition: function (el, point, disable3D) { // (HTMLElement, Point[, Boolean])

            // jshint camelcase: false
            el._leaflet_pos = point;

            if (!disable3D && L.Browser.any3d) {
                el.style[L.DomUtil.TRANSFORM] = L.DomUtil.getTranslateString(point);
            } else {
                el.style.left = point.x + 'px';
                el.style.top = point.y + 'px';
            }
        },

        getPosition: function (el) {
            // this method is only used for elements previously positioned using setPosition,
            // so it's safe to cache the position for performance

            // jshint camelcase: false
            return el._leaflet_pos;
        }
    };


// prefix style property names

    L.DomUtil.TRANSFORM = L.DomUtil.testProp(
        ['transform', 'WebkitTransform', 'OTransform', 'MozTransform', 'msTransform']);

// webkitTransition comes first because some browser versions that drop vendor prefix don't do
// the same for the transitionend event, in particular the Android 4.1 stock browser

    L.DomUtil.TRANSITION = L.DomUtil.testProp(
        ['webkitTransition', 'transition', 'OTransition', 'MozTransition', 'msTransition']);

    L.DomUtil.TRANSITION_END =
        L.DomUtil.TRANSITION === 'webkitTransition' || L.DomUtil.TRANSITION === 'OTransition' ?
        L.DomUtil.TRANSITION + 'End' : 'transitionend';

    (function () {
        if ('onselectstart' in document) {
            L.extend(L.DomUtil, {
                disableTextSelection: function () {
                    L.DomEvent.on(window, 'selectstart', L.DomEvent.preventDefault);
                },

                enableTextSelection: function () {
                    L.DomEvent.off(window, 'selectstart', L.DomEvent.preventDefault);
                }
            });
        } else {
            var userSelectProperty = L.DomUtil.testProp(
                ['userSelect', 'WebkitUserSelect', 'OUserSelect', 'MozUserSelect', 'msUserSelect']);

            L.extend(L.DomUtil, {
                disableTextSelection: function () {
                    if (userSelectProperty) {
                        var style = document.documentElement.style;
                        this._userSelect = style[userSelectProperty];
                        style[userSelectProperty] = 'none';
                    }
                },

                enableTextSelection: function () {
                    if (userSelectProperty) {
                        document.documentElement.style[userSelectProperty] = this._userSelect;
                        delete this._userSelect;
                    }
                }
            });
        }

        L.extend(L.DomUtil, {
            disableImageDrag: function () {
                L.DomEvent.on(window, 'dragstart', L.DomEvent.preventDefault);
            },

            enableImageDrag: function () {
                L.DomEvent.off(window, 'dragstart', L.DomEvent.preventDefault);
            }
        });
    })();


    /*
     * L.LatLng represents a geographical point with latitude and longitude coordinates.
     */

    L.LatLng = function (lat, lng, alt) { // (Number, Number, Number)
        lat = parseFloat(lat);
        lng = parseFloat(lng);

        if (isNaN(lat) || isNaN(lng)) {
            throw new Error('Invalid LatLng object: (' + lat + ', ' + lng + ')');
        }

        this.lat = lat;
        this.lng = lng;

        if (alt !== undefined) {
            this.alt = parseFloat(alt);
        }
    };

    L.extend(L.LatLng, {
        DEG_TO_RAD: Math.PI / 180,
        RAD_TO_DEG: 180 / Math.PI,
        MAX_MARGIN: 1.0E-9 // max margin of error for the "equals" check
    });

    L.LatLng.prototype = {
        equals: function (obj) { // (LatLng) -> Boolean
            if (!obj) {
                return false;
            }

            obj = L.latLng(obj);

            var margin = Math.max(
                Math.abs(this.lat - obj.lat),
                Math.abs(this.lng - obj.lng));

            return margin <= L.LatLng.MAX_MARGIN;
        },

        toString: function (precision) { // (Number) -> String
            return 'LatLng(' +
                L.Util.formatNum(this.lat, precision) + ', ' +
                L.Util.formatNum(this.lng, precision) + ')';
        },

        // Haversine distance formula, see http://en.wikipedia.org/wiki/Haversine_formula
        // TODO move to projection code, LatLng shouldn't know about Earth
        distanceTo: function (other) { // (LatLng) -> Number
            other = L.latLng(other);

            var R = 6378137, // earth radius in meters
                d2r = L.LatLng.DEG_TO_RAD,
                dLat = (other.lat - this.lat) * d2r,
                dLon = (other.lng - this.lng) * d2r,
                lat1 = this.lat * d2r,
                lat2 = other.lat * d2r,
                sin1 = Math.sin(dLat / 2),
                sin2 = Math.sin(dLon / 2);

            var a = sin1 * sin1 + sin2 * sin2 * Math.cos(lat1) * Math.cos(lat2);

            return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        },

        wrap: function (a, b) { // (Number, Number) -> LatLng
            var lng = this.lng;

            a = a || -180;
            b = b || 180;

            lng = (lng + b) % (b - a) + (lng < a || lng === b ? b : a);

            return new L.LatLng(this.lat, lng);
        }
    };

    L.latLng = function (a, b) { // (LatLng) or ([Number, Number]) or (Number, Number)
        if (a instanceof L.LatLng) {
            return a;
        }
        if (L.Util.isArray(a)) {
            if (typeof a[0] === 'number' || typeof a[0] === 'string') {
                return new L.LatLng(a[0], a[1], a[2]);
            } else {
                return null;
            }
        }
        if (a === undefined || a === null) {
            return a;
        }
        if (typeof a === 'object' && 'lat' in a) {
            return new L.LatLng(a.lat, 'lng' in a ? a.lng : a.lon);
        }
        if (b === undefined) {
            return null;
        }
        return new L.LatLng(a, b);
    };


    /*
     * L.LatLngBounds represents a rectangular area on the map in geographical coordinates.
     */

    L.LatLngBounds = function (southWest, northEast) { // (LatLng, LatLng) or (LatLng[])
        if (!southWest) {
            return;
        }

        var latlngs = northEast ? [southWest, northEast] : southWest;

        for (var i = 0, len = latlngs.length; i < len; i++) {
            this.extend(latlngs[i]);
        }
    };

    L.LatLngBounds.prototype = {
        // extend the bounds to contain the given point or bounds
        extend: function (obj) { // (LatLng) or (LatLngBounds)
            if (!obj) {
                return this;
            }

            var latLng = L.latLng(obj);
            if (latLng !== null) {
                obj = latLng;
            } else {
                obj = L.latLngBounds(obj);
            }

            if (obj instanceof L.LatLng) {
                if (!this._southWest && !this._northEast) {
                    this._southWest = new L.LatLng(obj.lat, obj.lng);
                    this._northEast = new L.LatLng(obj.lat, obj.lng);
                } else {
                    this._southWest.lat = Math.min(obj.lat, this._southWest.lat);
                    this._southWest.lng = Math.min(obj.lng, this._southWest.lng);

                    this._northEast.lat = Math.max(obj.lat, this._northEast.lat);
                    this._northEast.lng = Math.max(obj.lng, this._northEast.lng);
                }
            } else if (obj instanceof L.LatLngBounds) {
                this.extend(obj._southWest);
                this.extend(obj._northEast);
            }
            return this;
        },

        // extend the bounds by a percentage
        pad: function (bufferRatio) { // (Number) -> LatLngBounds
            var sw = this._southWest,
                ne = this._northEast,
                heightBuffer = Math.abs(sw.lat - ne.lat) * bufferRatio,
                widthBuffer = Math.abs(sw.lng - ne.lng) * bufferRatio;

            return new L.LatLngBounds(
                new L.LatLng(sw.lat - heightBuffer, sw.lng - widthBuffer),
                new L.LatLng(ne.lat + heightBuffer, ne.lng + widthBuffer));
        },

        getCenter: function () { // -> LatLng
            return new L.LatLng(
                (this._southWest.lat + this._northEast.lat) / 2,
                (this._southWest.lng + this._northEast.lng) / 2);
        },

        getSouthWest: function () {
            return this._southWest;
        },

        getNorthEast: function () {
            return this._northEast;
        },

        getNorthWest: function () {
            return new L.LatLng(this.getNorth(), this.getWest());
        },

        getSouthEast: function () {
            return new L.LatLng(this.getSouth(), this.getEast());
        },

        getWest: function () {
            return this._southWest.lng;
        },

        getSouth: function () {
            return this._southWest.lat;
        },

        getEast: function () {
            return this._northEast.lng;
        },

        getNorth: function () {
            return this._northEast.lat;
        },

        contains: function (obj) { // (LatLngBounds) or (LatLng) -> Boolean
            if (typeof obj[0] === 'number' || obj instanceof L.LatLng) {
                obj = L.latLng(obj);
            } else {
                obj = L.latLngBounds(obj);
            }

            var sw = this._southWest,
                ne = this._northEast,
                sw2, ne2;

            if (obj instanceof L.LatLngBounds) {
                sw2 = obj.getSouthWest();
                ne2 = obj.getNorthEast();
            } else {
                sw2 = ne2 = obj;
            }

            return (sw2.lat >= sw.lat) && (ne2.lat <= ne.lat) &&
                (sw2.lng >= sw.lng) && (ne2.lng <= ne.lng);
        },

        intersects: function (bounds) { // (LatLngBounds)
            bounds = L.latLngBounds(bounds);

            var sw = this._southWest,
                ne = this._northEast,
                sw2 = bounds.getSouthWest(),
                ne2 = bounds.getNorthEast(),

                latIntersects = (ne2.lat >= sw.lat) && (sw2.lat <= ne.lat),
                lngIntersects = (ne2.lng >= sw.lng) && (sw2.lng <= ne.lng);

            return latIntersects && lngIntersects;
        },

        toBBoxString: function () {
            return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(',');
        },

        equals: function (bounds) { // (LatLngBounds)
            if (!bounds) {
                return false;
            }

            bounds = L.latLngBounds(bounds);

            return this._southWest.equals(bounds.getSouthWest()) &&
                this._northEast.equals(bounds.getNorthEast());
        },

        isValid: function () {
            return !!(this._southWest && this._northEast);
        }
    };

//TODO International date line?

    L.latLngBounds = function (a, b) { // (LatLngBounds) or (LatLng, LatLng)
        if (!a || a instanceof L.LatLngBounds) {
            return a;
        }
        return new L.LatLngBounds(a, b);
    };


    /*
     * L.Projection contains various geographical projections used by CRS classes.
     */

    L.Projection = {};


    /*
     * Spherical Mercator is the most popular map projection, used by EPSG:3857 CRS used by default.
     */

    L.Projection.SphericalMercator = {
        MAX_LATITUDE: 85.0511287798,

        project: function (latlng) { // (LatLng) -> Point
            var d = L.LatLng.DEG_TO_RAD,
                max = this.MAX_LATITUDE,
                lat = Math.max(Math.min(max, latlng.lat), -max),
                x = latlng.lng * d,
                y = lat * d;

            y = Math.log(Math.tan((Math.PI / 4) + (y / 2)));

            return new L.Point(x, y);
        },

        unproject: function (point) { // (Point, Boolean) -> LatLng
            var d = L.LatLng.RAD_TO_DEG,
                lng = point.x * d,
                lat = (2 * Math.atan(Math.exp(point.y)) - (Math.PI / 2)) * d;

            return new L.LatLng(lat, lng);
        }
    };


    /*
     * Simple equirectangular (Plate Carree) projection, used by CRS like EPSG:4326 and Simple.
     */

    L.Projection.LonLat = {
        project: function (latlng) {
            return new L.Point(latlng.lng, latlng.lat);
        },

        unproject: function (point) {
            return new L.LatLng(point.y, point.x);
        }
    };


    /*
     * L.CRS is a base object for all defined CRS (Coordinate Reference Systems) in Leaflet.
     */

    L.CRS = {
        latLngToPoint: function (latlng, zoom) { // (LatLng, Number) -> Point
            var projectedPoint = this.projection.project(latlng),
                scale = this.scale(zoom);

            return this.transformation._transform(projectedPoint, scale);
        },

        pointToLatLng: function (point, zoom) { // (Point, Number[, Boolean]) -> LatLng
            var scale = this.scale(zoom),
                untransformedPoint = this.transformation.untransform(point, scale);

            return this.projection.unproject(untransformedPoint);
        },

        project: function (latlng) {
            return this.projection.project(latlng);
        },

        scale: function (zoom) {
            return 256 * Math.pow(2, zoom);
        },

        getSize: function (zoom) {
            var s = this.scale(zoom);
            return L.point(s, s);
        }
    };


    /*
     * A simple CRS that can be used for flat non-Earth maps like panoramas or game maps.
     */

    L.CRS.Simple = L.extend({}, L.CRS, {
        projection: L.Projection.LonLat,
        transformation: new L.Transformation(1, 0, -1, 0),

        scale: function (zoom) {
            return Math.pow(2, zoom);
        }
    });


    /*
     * L.CRS.EPSG3857 (Spherical Mercator) is the most common CRS for web mapping
     * and is used by Leaflet by default.
     */

    L.CRS.EPSG3857 = L.extend({}, L.CRS, {
        code: 'EPSG:3857',

        projection: L.Projection.SphericalMercator,
        transformation: new L.Transformation(0.5 / Math.PI, 0.5, -0.5 / Math.PI, 0.5),

        project: function (latlng) { // (LatLng) -> Point
            var projectedPoint = this.projection.project(latlng),
                earthRadius = 6378137;
            return projectedPoint.multiplyBy(earthRadius);
        }
    });

    L.CRS.EPSG900913 = L.extend({}, L.CRS.EPSG3857, {
        code: 'EPSG:900913'
    });


    /*
     * L.CRS.EPSG4326 is a CRS popular among advanced GIS specialists.
     */

    L.CRS.EPSG4326 = L.extend({}, L.CRS, {
        code: 'EPSG:4326',

        projection: L.Projection.LonLat,
        transformation: new L.Transformation(1 / 360, 0.5, -1 / 360, 0.5)
    });


    /*
     * L.Map is the central class of the API - it is used to create a map.
     */

    L.Map = L.Class.extend({

        includes: L.Mixin.Events,

        options: {
            crs: L.CRS.EPSG3857,

            /*
             center: LatLng,
             zoom: Number,
             layers: Array,
             */

            fadeAnimation: L.DomUtil.TRANSITION && !L.Browser.android23,
            trackResize: true,
            markerZoomAnimation: L.DomUtil.TRANSITION && L.Browser.any3d
        },

        initialize: function (id, options) { // (HTMLElement or String, Object)
            options = L.setOptions(this, options);


            this._initContainer(id);
            this._initLayout();

            // hack for https://github.com/Leaflet/Leaflet/issues/1980
            this._onResize = L.bind(this._onResize, this);

            this._initEvents();

            if (options.maxBounds) {
                this.setMaxBounds(options.maxBounds);
            }

            if (options.center && options.zoom !== undefined) {
                this.setView(L.latLng(options.center), options.zoom, {reset: true});
            }

            this._handlers = [];

            this._layers = {};
            this._zoomBoundLayers = {};
            this._tileLayersNum = 0;

            this.callInitHooks();

            this._addLayers(options.layers);
        },


        // public methods that modify map state

        // replaced by animation-powered implementation in Map.PanAnimation.js
        setView: function (center, zoom) {
            zoom = zoom === undefined ? this.getZoom() : zoom;
            this._resetView(L.latLng(center), this._limitZoom(zoom));
            return this;
        },

        setZoom: function (zoom, options) {
            if (!this._loaded) {
                this._zoom = this._limitZoom(zoom);
                return this;
            }
            return this.setView(this.getCenter(), zoom, {zoom: options});
        },

        zoomIn: function (delta, options) {
            return this.setZoom(this._zoom + (delta || 1), options);
        },

        zoomOut: function (delta, options) {
            return this.setZoom(this._zoom - (delta || 1), options);
        },

        setZoomAround: function (latlng, zoom, options) {
            var scale = this.getZoomScale(zoom),
                viewHalf = this.getSize().divideBy(2),
                containerPoint = latlng instanceof L.Point ? latlng : this.latLngToContainerPoint(latlng),

                centerOffset = containerPoint.subtract(viewHalf).multiplyBy(1 - 1 / scale),
                newCenter = this.containerPointToLatLng(viewHalf.add(centerOffset));

            return this.setView(newCenter, zoom, {zoom: options});
        },

        fitBounds: function (bounds, options) {

            options = options || {};
            bounds = bounds.getBounds ? bounds.getBounds() : L.latLngBounds(bounds);

            var paddingTL = L.point(options.paddingTopLeft || options.padding || [0, 0]),
                paddingBR = L.point(options.paddingBottomRight || options.padding || [0, 0]),

                zoom = this.getBoundsZoom(bounds, false, paddingTL.add(paddingBR)),
                paddingOffset = paddingBR.subtract(paddingTL).divideBy(2),

                swPoint = this.project(bounds.getSouthWest(), zoom),
                nePoint = this.project(bounds.getNorthEast(), zoom),
                center = this.unproject(swPoint.add(nePoint).divideBy(2).add(paddingOffset), zoom);

            zoom = options && options.maxZoom ? Math.min(options.maxZoom, zoom) : zoom;

            return this.setView(center, zoom, options);
        },

        fitWorld: function (options) {
            return this.fitBounds([[-90, -180], [90, 180]], options);
        },

        panTo: function (center, options) { // (LatLng)
            return this.setView(center, this._zoom, {pan: options});
        },

        panBy: function (offset) { // (Point)
            // replaced with animated panBy in Map.PanAnimation.js
            this.fire('movestart');

            this._rawPanBy(L.point(offset));

            this.fire('move');
            return this.fire('moveend');
        },

        setMaxBounds: function (bounds) {
            bounds = L.latLngBounds(bounds);

            this.options.maxBounds = bounds;

            if (!bounds) {
                return this.off('moveend', this._panInsideMaxBounds, this);
            }

            if (this._loaded) {
                this._panInsideMaxBounds();
            }

            return this.on('moveend', this._panInsideMaxBounds, this);
        },

        panInsideBounds: function (bounds, options) {
            var center = this.getCenter(),
                newCenter = this._limitCenter(center, this._zoom, bounds);

            if (center.equals(newCenter)) {
                return this;
            }

            return this.panTo(newCenter, options);
        },

        addLayer: function (layer) {
            // TODO method is too big, refactor

            var id = L.stamp(layer);

            if (this._layers[id]) {
                return this;
            }

            this._layers[id] = layer;

            // TODO getMaxZoom, getMinZoom in ILayer (instead of options)
            if (layer.options && (!isNaN(layer.options.maxZoom) || !isNaN(layer.options.minZoom))) {
                this._zoomBoundLayers[id] = layer;
                this._updateZoomLevels();
            }

            // TODO looks ugly, refactor!!!
            if (this.options.zoomAnimation && L.TileLayer && (layer instanceof L.TileLayer)) {
                this._tileLayersNum++;
                this._tileLayersToLoad++;
                layer.on('load', this._onTileLayerLoad, this);
            }

            if (this._loaded) {
                this._layerAdd(layer);
            }

            return this;
        },

        removeLayer: function (layer) {
            var id = L.stamp(layer);

            if (!this._layers[id]) {
                return this;
            }

            if (this._loaded) {
                layer.onRemove(this);
            }

            delete this._layers[id];

            if (this._loaded) {
                this.fire('layerremove', {layer: layer});
            }

            if (this._zoomBoundLayers[id]) {
                delete this._zoomBoundLayers[id];
                this._updateZoomLevels();
            }

            // TODO looks ugly, refactor
            if (this.options.zoomAnimation && L.TileLayer && (layer instanceof L.TileLayer)) {
                this._tileLayersNum--;
                this._tileLayersToLoad--;
                layer.off('load', this._onTileLayerLoad, this);
            }

            return this;
        },

        hasLayer: function (layer) {
            if (!layer) {
                return false;
            }

            return (L.stamp(layer) in this._layers);
        },

        eachLayer: function (method, context) {
            for (var i in this._layers) {
                method.call(context, this._layers[i]);
            }
            return this;
        },

        invalidateSize: function (options) {
            if (!this._loaded) {
                return this;
            }

            options = L.extend({
                animate: false,
                pan: true
            }, options === true ? {animate: true} : options);

            var oldSize = this.getSize();
            this._sizeChanged = true;
            this._initialCenter = null;

            var newSize = this.getSize(),
                oldCenter = oldSize.divideBy(2).round(),
                newCenter = newSize.divideBy(2).round(),
                offset = oldCenter.subtract(newCenter);

            if (!offset.x && !offset.y) {
                return this;
            }

            if (options.animate && options.pan) {
                this.panBy(offset);

            } else {
                if (options.pan) {
                    this._rawPanBy(offset);
                }

                this.fire('move');

                if (options.debounceMoveend) {
                    clearTimeout(this._sizeTimer);
                    this._sizeTimer = setTimeout(L.bind(this.fire, this, 'moveend'), 200);
                } else {
                    this.fire('moveend');
                }
            }

            return this.fire('resize', {
                oldSize: oldSize,
                newSize: newSize
            });
        },

        // TODO handler.addTo
        addHandler: function (name, HandlerClass) {
            if (!HandlerClass) {
                return this;
            }

            var handler = this[name] = new HandlerClass(this);

            this._handlers.push(handler);

            if (this.options[name]) {
                handler.enable();
            }

            return this;
        },

        remove: function () {
            if (this._loaded) {
                this.fire('unload');
            }

            this._initEvents('off');

            try {
                // throws error in IE6-8
                delete this._container._leaflet;
            } catch (e) {
                this._container._leaflet = undefined;
            }

            this._clearPanes();
            if (this._clearControlPos) {
                this._clearControlPos();
            }

            this._clearHandlers();

            return this;
        },


        // public methods for getting map state

        getCenter: function () { // (Boolean) -> LatLng
            this._checkIfLoaded();

            if (this._initialCenter && !this._moved()) {
                return this._initialCenter;
            }
            return this.layerPointToLatLng(this._getCenterLayerPoint());
        },

        getZoom: function () {
            return this._zoom;
        },

        getBounds: function () {
            var bounds = this.getPixelBounds(),
                sw = this.unproject(bounds.getBottomLeft()),
                ne = this.unproject(bounds.getTopRight());

            return new L.LatLngBounds(sw, ne);
        },

        getMinZoom: function () {
            return this.options.minZoom === undefined ?
                (this._layersMinZoom === undefined ? 0 : this._layersMinZoom) :
                this.options.minZoom;
        },

        getMaxZoom: function () {
            return this.options.maxZoom === undefined ?
                (this._layersMaxZoom === undefined ? Infinity : this._layersMaxZoom) :
                this.options.maxZoom;
        },

        getBoundsZoom: function (bounds, inside, padding) { // (LatLngBounds[, Boolean, Point]) -> Number
            bounds = L.latLngBounds(bounds);

            var zoom = this.getMinZoom() - (inside ? 1 : 0),
                maxZoom = this.getMaxZoom(),
                size = this.getSize(),

                nw = bounds.getNorthWest(),
                se = bounds.getSouthEast(),

                zoomNotFound = true,
                boundsSize;

            padding = L.point(padding || [0, 0]);

            do {
                zoom++;
                boundsSize = this.project(se, zoom).subtract(this.project(nw, zoom)).add(padding);
                zoomNotFound = !inside ? size.contains(boundsSize) : boundsSize.x < size.x || boundsSize.y < size.y;

            } while (zoomNotFound && zoom <= maxZoom);

            if (zoomNotFound && inside) {
                return null;
            }

            return inside ? zoom : zoom - 1;
        },

        getSize: function () {
            if (!this._size || this._sizeChanged) {
                this._size = new L.Point(
                    this._container.clientWidth,
                    this._container.clientHeight);

                this._sizeChanged = false;
            }
            return this._size.clone();
        },

        getPixelBounds: function () {
            var topLeftPoint = this._getTopLeftPoint();
            return new L.Bounds(topLeftPoint, topLeftPoint.add(this.getSize()));
        },

        getPixelOrigin: function () {
            this._checkIfLoaded();
            return this._initialTopLeftPoint;
        },

        getPanes: function () {
            return this._panes;
        },

        getContainer: function () {
            return this._container;
        },


        // TODO replace with universal implementation after refactoring projections

        getZoomScale: function (toZoom) {
            var crs = this.options.crs;
            return crs.scale(toZoom) / crs.scale(this._zoom);
        },

        getScaleZoom: function (scale) {
            return this._zoom + (Math.log(scale) / Math.LN2);
        },


        // conversion methods

        project: function (latlng, zoom) { // (LatLng[, Number]) -> Point
            zoom = zoom === undefined ? this._zoom : zoom;
            return this.options.crs.latLngToPoint(L.latLng(latlng), zoom);
        },

        unproject: function (point, zoom) { // (Point[, Number]) -> LatLng
            zoom = zoom === undefined ? this._zoom : zoom;
            return this.options.crs.pointToLatLng(L.point(point), zoom);
        },

        layerPointToLatLng: function (point) { // (Point)
            var projectedPoint = L.point(point).add(this.getPixelOrigin());
            return this.unproject(projectedPoint);
        },

        latLngToLayerPoint: function (latlng) { // (LatLng)
            var projectedPoint = this.project(L.latLng(latlng))._round();
            return projectedPoint._subtract(this.getPixelOrigin());
        },

        containerPointToLayerPoint: function (point) { // (Point)
            return L.point(point).subtract(this._getMapPanePos());
        },

        layerPointToContainerPoint: function (point) { // (Point)
            return L.point(point).add(this._getMapPanePos());
        },

        containerPointToLatLng: function (point) {
            var layerPoint = this.containerPointToLayerPoint(L.point(point));
            return this.layerPointToLatLng(layerPoint);
        },

        latLngToContainerPoint: function (latlng) {
            return this.layerPointToContainerPoint(this.latLngToLayerPoint(L.latLng(latlng)));
        },

        mouseEventToContainerPoint: function (e) { // (MouseEvent)
            return L.DomEvent.getMousePosition(e, this._container);
        },

        mouseEventToLayerPoint: function (e) { // (MouseEvent)
            return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(e));
        },

        mouseEventToLatLng: function (e) { // (MouseEvent)
            return this.layerPointToLatLng(this.mouseEventToLayerPoint(e));
        },


        // map initialization methods

        _initContainer: function (id) {
            var container = this._container = L.DomUtil.get(id);

            if (!container) {
                throw new Error('Map container not found.');
            } else if (container._leaflet) {
                throw new Error('Map container is already initialized.');
            }

            container._leaflet = true;
        },

        _initLayout: function () {
            var container = this._container;

            L.DomUtil.addClass(container, 'leaflet-container' +
            (L.Browser.touch ? ' leaflet-touch' : '') +
            (L.Browser.retina ? ' leaflet-retina' : '') +
            (L.Browser.ielt9 ? ' leaflet-oldie' : '') +
            (this.options.fadeAnimation ? ' leaflet-fade-anim' : ''));

            var position = L.DomUtil.getStyle(container, 'position');

            if (position !== 'absolute' && position !== 'relative' && position !== 'fixed') {
                container.style.position = 'relative';
            }

            this._initPanes();

            if (this._initControlPos) {
                this._initControlPos();
            }
        },

        _initPanes: function () {
            var panes = this._panes = {};

            this._mapPane = panes.mapPane = this._createPane('leaflet-map-pane', this._container);

            this._tilePane = panes.tilePane = this._createPane('leaflet-tile-pane', this._mapPane);
            panes.objectsPane = this._createPane('leaflet-objects-pane', this._mapPane);
            panes.shadowPane = this._createPane('leaflet-shadow-pane');
            panes.overlayPane = this._createPane('leaflet-overlay-pane');
            panes.markerPane = this._createPane('leaflet-marker-pane');
            panes.popupPane = this._createPane('leaflet-popup-pane');

            var zoomHide = ' leaflet-zoom-hide';

            if (!this.options.markerZoomAnimation) {
                L.DomUtil.addClass(panes.markerPane, zoomHide);
                L.DomUtil.addClass(panes.shadowPane, zoomHide);
                L.DomUtil.addClass(panes.popupPane, zoomHide);
            }
        },

        _createPane: function (className, container) {
            return L.DomUtil.create('div', className, container || this._panes.objectsPane);
        },

        _clearPanes: function () {
            this._container.removeChild(this._mapPane);
        },

        _addLayers: function (layers) {
            layers = layers ? (L.Util.isArray(layers) ? layers : [layers]) : [];

            for (var i = 0, len = layers.length; i < len; i++) {
                this.addLayer(layers[i]);
            }
        },


        // private methods that modify map state

        _resetView: function (center, zoom, preserveMapOffset, afterZoomAnim) {

            var zoomChanged = (this._zoom !== zoom);

            if (!afterZoomAnim) {
                this.fire('movestart');

                if (zoomChanged) {
                    this.fire('zoomstart');
                }
            }

            this._zoom = zoom;
            this._initialCenter = center;

            this._initialTopLeftPoint = this._getNewTopLeftPoint(center);

            if (!preserveMapOffset) {
                L.DomUtil.setPosition(this._mapPane, new L.Point(0, 0));
            } else {
                this._initialTopLeftPoint._add(this._getMapPanePos());
            }

            this._tileLayersToLoad = this._tileLayersNum;

            var loading = !this._loaded;
            this._loaded = true;

            this.fire('viewreset', {hard: !preserveMapOffset});

            if (loading) {
                this.fire('load');
                this.eachLayer(this._layerAdd, this);
            }

            this.fire('move');

            if (zoomChanged || afterZoomAnim) {
                this.fire('zoomend');
            }

            this.fire('moveend', {hard: !preserveMapOffset});
        },

        _rawPanBy: function (offset) {
            L.DomUtil.setPosition(this._mapPane, this._getMapPanePos().subtract(offset));
        },

        _getZoomSpan: function () {
            return this.getMaxZoom() - this.getMinZoom();
        },

        _updateZoomLevels: function () {
            var i,
                minZoom = Infinity,
                maxZoom = -Infinity,
                oldZoomSpan = this._getZoomSpan();

            for (i in this._zoomBoundLayers) {
                var layer = this._zoomBoundLayers[i];
                if (!isNaN(layer.options.minZoom)) {
                    minZoom = Math.min(minZoom, layer.options.minZoom);
                }
                if (!isNaN(layer.options.maxZoom)) {
                    maxZoom = Math.max(maxZoom, layer.options.maxZoom);
                }
            }

            if (i === undefined) { // we have no tilelayers
                this._layersMaxZoom = this._layersMinZoom = undefined;
            } else {
                this._layersMaxZoom = maxZoom;
                this._layersMinZoom = minZoom;
            }

            if (oldZoomSpan !== this._getZoomSpan()) {
                this.fire('zoomlevelschange');
            }
        },

        _panInsideMaxBounds: function () {
            this.panInsideBounds(this.options.maxBounds);
        },

        _checkIfLoaded: function () {
            if (!this._loaded) {
                throw new Error('Set map center and zoom first.');
            }
        },

        // map events

        _initEvents: function (onOff) {
            if (!L.DomEvent) {
                return;
            }

            onOff = onOff || 'on';

            L.DomEvent[onOff](this._container, 'click', this._onMouseClick, this);

            var events = ['dblclick', 'mousedown', 'mouseup', 'mouseenter',
                    'mouseleave', 'mousemove', 'contextmenu'],
                i, len;

            for (i = 0, len = events.length; i < len; i++) {
                L.DomEvent[onOff](this._container, events[i], this._fireMouseEvent, this);
            }

            if (this.options.trackResize) {
                L.DomEvent[onOff](window, 'resize', this._onResize, this);
            }
        },

        _onResize: function () {
            L.Util.cancelAnimFrame(this._resizeRequest);
            this._resizeRequest = L.Util.requestAnimFrame(
                function () {
                    this.invalidateSize({debounceMoveend: true});
                }, this, false, this._container);
        },

        _onMouseClick: function (e) {
            if (!this._loaded || (!e._simulated &&
                ((this.dragging && this.dragging.moved()) ||
                (this.boxZoom && this.boxZoom.moved()))) ||
                L.DomEvent._skipped(e)) {
                return;
            }

            this.fire('preclick');
            this._fireMouseEvent(e);
        },

        _fireMouseEvent: function (e) {
            if (!this._loaded || L.DomEvent._skipped(e)) {
                return;
            }

            var type = e.type;

            type = (type === 'mouseenter' ? 'mouseover' : (type === 'mouseleave' ? 'mouseout' : type));

            if (!this.hasEventListeners(type)) {
                return;
            }

            if (type === 'contextmenu') {
                L.DomEvent.preventDefault(e);
            }

            var containerPoint = this.mouseEventToContainerPoint(e),
                layerPoint = this.containerPointToLayerPoint(containerPoint),
                latlng = this.layerPointToLatLng(layerPoint);

            this.fire(type, {
                latlng: latlng,
                layerPoint: layerPoint,
                containerPoint: containerPoint,
                originalEvent: e
            });
        },

        _onTileLayerLoad: function () {
            this._tileLayersToLoad--;
            if (this._tileLayersNum && !this._tileLayersToLoad) {
                this.fire('tilelayersload');
            }
        },

        _clearHandlers: function () {
            for (var i = 0, len = this._handlers.length; i < len; i++) {
                this._handlers[i].disable();
            }
        },

        whenReady: function (callback, context) {
            if (this._loaded) {
                callback.call(context || this, this);
            } else {
                this.on('load', callback, context);
            }
            return this;
        },

        _layerAdd: function (layer) {
            layer.onAdd(this);
            this.fire('layeradd', {layer: layer});
        },


        // private methods for getting map state

        _getMapPanePos: function () {
            return L.DomUtil.getPosition(this._mapPane);
        },

        _moved: function () {
            var pos = this._getMapPanePos();
            return pos && !pos.equals([0, 0]);
        },

        _getTopLeftPoint: function () {
            return this.getPixelOrigin().subtract(this._getMapPanePos());
        },

        _getNewTopLeftPoint: function (center, zoom) {
            var viewHalf = this.getSize()._divideBy(2);
            // TODO round on display, not calculation to increase precision?
            return this.project(center, zoom)._subtract(viewHalf)._round();
        },

        _latLngToNewLayerPoint: function (latlng, newZoom, newCenter) {
            var topLeft = this._getNewTopLeftPoint(newCenter, newZoom).add(this._getMapPanePos());
            return this.project(latlng, newZoom)._subtract(topLeft);
        },

        // layer point of the current center
        _getCenterLayerPoint: function () {
            return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
        },

        // offset of the specified place to the current center in pixels
        _getCenterOffset: function (latlng) {
            return this.latLngToLayerPoint(latlng).subtract(this._getCenterLayerPoint());
        },

        // adjust center for view to get inside bounds
        _limitCenter: function (center, zoom, bounds) {

            if (!bounds) {
                return center;
            }

            var centerPoint = this.project(center, zoom),
                viewHalf = this.getSize().divideBy(2),
                viewBounds = new L.Bounds(centerPoint.subtract(viewHalf), centerPoint.add(viewHalf)),
                offset = this._getBoundsOffset(viewBounds, bounds, zoom);

            return this.unproject(centerPoint.add(offset), zoom);
        },

        // adjust offset for view to get inside bounds
        _limitOffset: function (offset, bounds) {
            if (!bounds) {
                return offset;
            }

            var viewBounds = this.getPixelBounds(),
                newBounds = new L.Bounds(viewBounds.min.add(offset), viewBounds.max.add(offset));

            return offset.add(this._getBoundsOffset(newBounds, bounds));
        },

        // returns offset needed for pxBounds to get inside maxBounds at a specified zoom
        _getBoundsOffset: function (pxBounds, maxBounds, zoom) {
            var nwOffset = this.project(maxBounds.getNorthWest(), zoom).subtract(pxBounds.min),
                seOffset = this.project(maxBounds.getSouthEast(), zoom).subtract(pxBounds.max),

                dx = this._rebound(nwOffset.x, -seOffset.x),
                dy = this._rebound(nwOffset.y, -seOffset.y);

            return new L.Point(dx, dy);
        },

        _rebound: function (left, right) {
            return left + right > 0 ?
            Math.round(left - right) / 2 :
            Math.max(0, Math.ceil(left)) - Math.max(0, Math.floor(right));
        },

        _limitZoom: function (zoom) {
            var min = this.getMinZoom(),
                max = this.getMaxZoom();

            return Math.max(min, Math.min(max, zoom));
        }
    });

    L.map = function (id, options) {
        return new L.Map(id, options);
    };


    /*
     * Mercator projection that takes into account that the Earth is not a perfect sphere.
     * Less popular than spherical mercator; used by projections like EPSG:3395.
     */

    L.Projection.Mercator = {
        MAX_LATITUDE: 85.0840591556,

        R_MINOR: 6356752.314245179,
        R_MAJOR: 6378137,

        project: function (latlng) { // (LatLng) -> Point
            var d = L.LatLng.DEG_TO_RAD,
                max = this.MAX_LATITUDE,
                lat = Math.max(Math.min(max, latlng.lat), -max),
                r = this.R_MAJOR,
                r2 = this.R_MINOR,
                x = latlng.lng * d * r,
                y = lat * d,
                tmp = r2 / r,
                eccent = Math.sqrt(1.0 - tmp * tmp),
                con = eccent * Math.sin(y);

            con = Math.pow((1 - con) / (1 + con), eccent * 0.5);

            var ts = Math.tan(0.5 * ((Math.PI * 0.5) - y)) / con;
            y = -r * Math.log(ts);

            return new L.Point(x, y);
        },

        unproject: function (point) { // (Point, Boolean) -> LatLng
            var d = L.LatLng.RAD_TO_DEG,
                r = this.R_MAJOR,
                r2 = this.R_MINOR,
                lng = point.x * d / r,
                tmp = r2 / r,
                eccent = Math.sqrt(1 - (tmp * tmp)),
                ts = Math.exp(-point.y / r),
                phi = (Math.PI / 2) - 2 * Math.atan(ts),
                numIter = 15,
                tol = 1e-7,
                i = numIter,
                dphi = 0.1,
                con;

            while ((Math.abs(dphi) > tol) && (--i > 0)) {
                con = eccent * Math.sin(phi);
                dphi = (Math.PI / 2) - 2 * Math.atan(ts *
                Math.pow((1.0 - con) / (1.0 + con), 0.5 * eccent)) - phi;
                phi += dphi;
            }

            return new L.LatLng(phi * d, lng);
        }
    };


    L.CRS.EPSG3395 = L.extend({}, L.CRS, {
        code: 'EPSG:3395',

        projection: L.Projection.Mercator,

        transformation: (function () {
            var m = L.Projection.Mercator,
                r = m.R_MAJOR,
                scale = 0.5 / (Math.PI * r);

            return new L.Transformation(scale, 0.5, -scale, 0.5);
        }())
    });


    /*
     * L.TileLayer is used for standard xyz-numbered tile layers.
     */

    L.TileLayer = L.Class.extend({
        includes: L.Mixin.Events,

        options: {
            minZoom: 0,
            maxZoom: 18,
            tileSize: 256,
            subdomains: 'abc',
            errorTileUrl: '',
            attribution: '',
            zoomOffset: 0,
            opacity: 1,
            /*
             maxNativeZoom: null,
             zIndex: null,
             tms: false,
             continuousWorld: false,
             noWrap: false,
             zoomReverse: false,
             detectRetina: false,
             reuseTiles: false,
             bounds: false,
             */
            unloadInvisibleTiles: L.Browser.mobile,
            updateWhenIdle: L.Browser.mobile
        },

        initialize: function (url, options) {
            options = L.setOptions(this, options);

            // detecting retina displays, adjusting tileSize and zoom levels
            if (options.detectRetina && L.Browser.retina && options.maxZoom > 0) {

                options.tileSize = Math.floor(options.tileSize / 2);
                options.zoomOffset++;

                if (options.minZoom > 0) {
                    options.minZoom--;
                }
                this.options.maxZoom--;
            }

            if (options.bounds) {
                options.bounds = L.latLngBounds(options.bounds);
            }

            this._url = url;

            var subdomains = this.options.subdomains;

            if (typeof subdomains === 'string') {
                this.options.subdomains = subdomains.split('');
            }
        },

        onAdd: function (map) {
            this._map = map;
            this._animated = map._zoomAnimated;

            // create a container div for tiles
            this._initContainer();

            // set up events
            map.on({
                'viewreset': this._reset,
                'moveend': this._update
            }, this);

            if (this._animated) {
                map.on({
                    'zoomanim': this._animateZoom,
                    'zoomend': this._endZoomAnim
                }, this);
            }

            if (!this.options.updateWhenIdle) {
                this._limitedUpdate = L.Util.limitExecByInterval(this._update, 150, this);
                map.on('move', this._limitedUpdate, this);
            }

            this._reset();
            this._update();
        },

        addTo: function (map) {
            map.addLayer(this);
            return this;
        },

        onRemove: function (map) {
            this._container.parentNode.removeChild(this._container);

            map.off({
                'viewreset': this._reset,
                'moveend': this._update
            }, this);

            if (this._animated) {
                map.off({
                    'zoomanim': this._animateZoom,
                    'zoomend': this._endZoomAnim
                }, this);
            }

            if (!this.options.updateWhenIdle) {
                map.off('move', this._limitedUpdate, this);
            }

            this._container = null;
            this._map = null;
        },

        bringToFront: function () {
            var pane = this._map._panes.tilePane;

            if (this._container) {
                pane.appendChild(this._container);
                this._setAutoZIndex(pane, Math.max);
            }

            return this;
        },

        bringToBack: function () {
            var pane = this._map._panes.tilePane;

            if (this._container) {
                pane.insertBefore(this._container, pane.firstChild);
                this._setAutoZIndex(pane, Math.min);
            }

            return this;
        },

        getAttribution: function () {
            return this.options.attribution;
        },

        getContainer: function () {
            return this._container;
        },

        setOpacity: function (opacity) {
            this.options.opacity = opacity;

            if (this._map) {
                this._updateOpacity();
            }

            return this;
        },

        setZIndex: function (zIndex) {
            this.options.zIndex = zIndex;
            this._updateZIndex();

            return this;
        },

        setUrl: function (url, noRedraw) {
            this._url = url;

            if (!noRedraw) {
                this.redraw();
            }

            return this;
        },

        redraw: function () {
            if (this._map) {
                this._reset({hard: true});
                this._update();
            }
            return this;
        },

        _updateZIndex: function () {
            if (this._container && this.options.zIndex !== undefined) {
                this._container.style.zIndex = this.options.zIndex;
            }
        },

        _setAutoZIndex: function (pane, compare) {

            var layers = pane.children,
                edgeZIndex = -compare(Infinity, -Infinity), // -Infinity for max, Infinity for min
                zIndex, i, len;

            for (i = 0, len = layers.length; i < len; i++) {

                if (layers[i] !== this._container) {
                    zIndex = parseInt(layers[i].style.zIndex, 10);

                    if (!isNaN(zIndex)) {
                        edgeZIndex = compare(edgeZIndex, zIndex);
                    }
                }
            }

            this.options.zIndex = this._container.style.zIndex =
                (isFinite(edgeZIndex) ? edgeZIndex : 0) + compare(1, -1);
        },

        _updateOpacity: function () {
            var i,
                tiles = this._tiles;

            if (L.Browser.ielt9) {
                for (i in tiles) {
                    L.DomUtil.setOpacity(tiles[i], this.options.opacity);
                }
            } else {
                L.DomUtil.setOpacity(this._container, this.options.opacity);
            }
        },

        _initContainer: function () {
            var tilePane = this._map._panes.tilePane;

            if (!this._container) {
                this._container = L.DomUtil.create('div', 'leaflet-layer');

                this._updateZIndex();

                if (this._animated) {
                    var className = 'leaflet-tile-container';

                    this._bgBuffer = L.DomUtil.create('div', className, this._container);
                    this._tileContainer = L.DomUtil.create('div', className, this._container);

                } else {
                    this._tileContainer = this._container;
                }

                tilePane.appendChild(this._container);

                if (this.options.opacity < 1) {
                    this._updateOpacity();
                }
            }
        },

        _reset: function (e) {
            for (var key in this._tiles) {
                this.fire('tileunload', {tile: this._tiles[key]});
            }

            this._tiles = {};
            this._tilesToLoad = 0;

            if (this.options.reuseTiles) {
                this._unusedTiles = [];
            }

            this._tileContainer.innerHTML = '';

            if (this._animated && e && e.hard) {
                this._clearBgBuffer();
            }

            this._initContainer();
        },

        _getTileSize: function () {
            var map = this._map,
                zoom = map.getZoom() + this.options.zoomOffset,
                zoomN = this.options.maxNativeZoom,
                tileSize = this.options.tileSize;

            if (zoomN && zoom > zoomN) {
                tileSize = Math.round(map.getZoomScale(zoom) / map.getZoomScale(zoomN) * tileSize);
            }

            return tileSize;
        },

        _update: function () {

            if (!this._map) {
                return;
            }

            var map = this._map,
                bounds = map.getPixelBounds(),
                zoom = map.getZoom(),
                tileSize = this._getTileSize();

            if (zoom > this.options.maxZoom || zoom < this.options.minZoom) {
                return;
            }

            var tileBounds = L.bounds(
                bounds.min.divideBy(tileSize)._floor(),
                bounds.max.divideBy(tileSize)._floor());

            this._addTilesFromCenterOut(tileBounds);

            if (this.options.unloadInvisibleTiles || this.options.reuseTiles) {
                this._removeOtherTiles(tileBounds);
            }
        },

        _addTilesFromCenterOut: function (bounds) {
            var queue = [],
                center = bounds.getCenter();

            var j, i, point;

            for (j = bounds.min.y; j <= bounds.max.y; j++) {
                for (i = bounds.min.x; i <= bounds.max.x; i++) {
                    point = new L.Point(i, j);

                    if (this._tileShouldBeLoaded(point)) {
                        queue.push(point);
                    }
                }
            }

            var tilesToLoad = queue.length;

            if (tilesToLoad === 0) {
                return;
            }

            // load tiles in order of their distance to center
            queue.sort(function (a, b) {
                return a.distanceTo(center) - b.distanceTo(center);
            });

            var fragment = document.createDocumentFragment();

            // if its the first batch of tiles to load
            if (!this._tilesToLoad) {
                this.fire('loading');
            }

            this._tilesToLoad += tilesToLoad;

            for (i = 0; i < tilesToLoad; i++) {
                this._addTile(queue[i], fragment);
            }

            this._tileContainer.appendChild(fragment);
        },

        _tileShouldBeLoaded: function (tilePoint) {
            if ((tilePoint.x + ':' + tilePoint.y) in this._tiles) {
                return false; // already loaded
            }

            var options = this.options;

            if (!options.continuousWorld) {
                var limit = this._getWrapTileNum();

                // don't load if exceeds world bounds
                if ((options.noWrap && (tilePoint.x < 0 || tilePoint.x >= limit.x)) ||
                    tilePoint.y < 0 || tilePoint.y >= limit.y) {
                    return false;
                }
            }

            if (options.bounds) {
                var tileSize = options.tileSize,
                    nwPoint = tilePoint.multiplyBy(tileSize),
                    sePoint = nwPoint.add([tileSize, tileSize]),
                    nw = this._map.unproject(nwPoint),
                    se = this._map.unproject(sePoint);

                // TODO temporary hack, will be removed after refactoring projections
                // https://github.com/Leaflet/Leaflet/issues/1618
                if (!options.continuousWorld && !options.noWrap) {
                    nw = nw.wrap();
                    se = se.wrap();
                }

                if (!options.bounds.intersects([nw, se])) {
                    return false;
                }
            }

            return true;
        },

        _removeOtherTiles: function (bounds) {
            var kArr, x, y, key;

            for (key in this._tiles) {
                kArr = key.split(':');
                x = parseInt(kArr[0], 10);
                y = parseInt(kArr[1], 10);

                // remove tile if it's out of bounds
                if (x < bounds.min.x || x > bounds.max.x || y < bounds.min.y || y > bounds.max.y) {
                    this._removeTile(key);
                }
            }
        },

        _removeTile: function (key) {
            var tile = this._tiles[key];

            this.fire('tileunload', {tile: tile, url: tile.src});

            if (this.options.reuseTiles) {
                L.DomUtil.removeClass(tile, 'leaflet-tile-loaded');
                this._unusedTiles.push(tile);

            } else if (tile.parentNode === this._tileContainer) {
                this._tileContainer.removeChild(tile);
            }

            // for https://github.com/CloudMade/Leaflet/issues/137
            if (!L.Browser.android) {
                tile.onload = null;
                tile.src = L.Util.emptyImageUrl;
            }

            delete this._tiles[key];
        },

        _addTile: function (tilePoint, container) {
            var tilePos = this._getTilePos(tilePoint);

            // get unused tile - or create a new tile
            var tile = this._getTile();

            /*
             Chrome 20 layouts much faster with top/left (verify with timeline, frames)
             Android 4 browser has display issues with top/left and requires transform instead
             (other browsers don't currently care) - see debug/hacks/jitter.html for an example
             */
            L.DomUtil.setPosition(tile, tilePos, L.Browser.chrome);

            this._tiles[tilePoint.x + ':' + tilePoint.y] = tile;

            this._loadTile(tile, tilePoint);

            if (tile.parentNode !== this._tileContainer) {
                container.appendChild(tile);
            }
        },

        _getZoomForUrl: function () {

            var options = this.options,
                zoom = this._map.getZoom();

            if (options.zoomReverse) {
                zoom = options.maxZoom - zoom;
            }

            zoom += options.zoomOffset;

            return options.maxNativeZoom ? Math.min(zoom, options.maxNativeZoom) : zoom;
        },

        _getTilePos: function (tilePoint) {
            var origin = this._map.getPixelOrigin(),
                tileSize = this._getTileSize();

            return tilePoint.multiplyBy(tileSize).subtract(origin);
        },

        // image-specific code (override to implement e.g. Canvas or SVG tile layer)

        getTileUrl: function (tilePoint) {
            return L.Util.template(this._url, L.extend({
                s: this._getSubdomain(tilePoint),
                z: tilePoint.z,
                x: tilePoint.x,
                y: tilePoint.y
            }, this.options));
        },

        _getWrapTileNum: function () {
            var crs = this._map.options.crs,
                size = crs.getSize(this._map.getZoom());
            return size.divideBy(this._getTileSize())._floor();
        },

        _adjustTilePoint: function (tilePoint) {

            var limit = this._getWrapTileNum();

            // wrap tile coordinates
            if (!this.options.continuousWorld && !this.options.noWrap) {
                tilePoint.x = ((tilePoint.x % limit.x) + limit.x) % limit.x;
            }

            if (this.options.tms) {
                tilePoint.y = limit.y - tilePoint.y - 1;
            }

            tilePoint.z = this._getZoomForUrl();
        },

        _getSubdomain: function (tilePoint) {
            var index = Math.abs(tilePoint.x + tilePoint.y) % this.options.subdomains.length;
            return this.options.subdomains[index];
        },

        _getTile: function () {
            if (this.options.reuseTiles && this._unusedTiles.length > 0) {
                var tile = this._unusedTiles.pop();
                this._resetTile(tile);
                return tile;
            }
            return this._createTile();
        },

        // Override if data stored on a tile needs to be cleaned up before reuse
        _resetTile: function (/*tile*/) {
        },

        _createTile: function () {
            var tile = L.DomUtil.create('img', 'leaflet-tile');
            tile.style.width = tile.style.height = this._getTileSize() + 'px';
            tile.galleryimg = 'no';

            tile.onselectstart = tile.onmousemove = L.Util.falseFn;

            if (L.Browser.ielt9 && this.options.opacity !== undefined) {
                L.DomUtil.setOpacity(tile, this.options.opacity);
            }
            // without this hack, tiles disappear after zoom on Chrome for Android
            // https://github.com/Leaflet/Leaflet/issues/2078
            if (L.Browser.mobileWebkit3d) {
                tile.style.WebkitBackfaceVisibility = 'hidden';
            }
            return tile;
        },

        _loadTile: function (tile, tilePoint) {
            tile._layer = this;
            tile.onload = this._tileOnLoad;
            tile.onerror = this._tileOnError;

            this._adjustTilePoint(tilePoint);
            tile.src = this.getTileUrl(tilePoint);

            this.fire('tileloadstart', {
                tile: tile,
                url: tile.src
            });
        },

        _tileLoaded: function () {
            this._tilesToLoad--;

            if (this._animated) {
                L.DomUtil.addClass(this._tileContainer, 'leaflet-zoom-animated');
            }

            if (!this._tilesToLoad) {
                this.fire('load');

                if (this._animated) {
                    // clear scaled tiles after all new tiles are loaded (for performance)
                    clearTimeout(this._clearBgBufferTimer);
                    this._clearBgBufferTimer = setTimeout(L.bind(this._clearBgBuffer, this), 500);
                }
            }
        },

        _tileOnLoad: function () {
            var layer = this._layer;

            //Only if we are loading an actual image
            if (this.src !== L.Util.emptyImageUrl) {
                L.DomUtil.addClass(this, 'leaflet-tile-loaded');

                layer.fire('tileload', {
                    tile: this,
                    url: this.src
                });
            }

            layer._tileLoaded();
        },

        _tileOnError: function () {
            var layer = this._layer;

            layer.fire('tileerror', {
                tile: this,
                url: this.src
            });

            var newUrl = layer.options.errorTileUrl;
            if (newUrl) {
                this.src = newUrl;
            }

            layer._tileLoaded();
        }
    });

    L.tileLayer = function (url, options) {
        return new L.TileLayer(url, options);
    };


    /*
     * L.TileLayer.WMS is used for putting WMS tile layers on the map.
     */

    L.TileLayer.WMS = L.TileLayer.extend({

        defaultWmsParams: {
            service: 'WMS',
            request: 'GetMap',
            version: '1.1.1',
            layers: '',
            styles: '',
            format: 'image/jpeg',
            transparent: false
        },

        initialize: function (url, options) { // (String, Object)

            this._url = url;

            var wmsParams = L.extend({}, this.defaultWmsParams),
                tileSize = options.tileSize || this.options.tileSize;

            if (options.detectRetina && L.Browser.retina) {
                wmsParams.width = wmsParams.height = tileSize * 2;
            } else {
                wmsParams.width = wmsParams.height = tileSize;
            }

            for (var i in options) {
                // all keys that are not TileLayer options go to WMS params
                if (!this.options.hasOwnProperty(i) && i !== 'crs') {
                    wmsParams[i] = options[i];
                }
            }

            this.wmsParams = wmsParams;

            L.setOptions(this, options);
        },

        onAdd: function (map) {

            this._crs = this.options.crs || map.options.crs;

            this._wmsVersion = parseFloat(this.wmsParams.version);

            var projectionKey = this._wmsVersion >= 1.3 ? 'crs' : 'srs';
            this.wmsParams[projectionKey] = this._crs.code;

            L.TileLayer.prototype.onAdd.call(this, map);
        },

        getTileUrl: function (tilePoint) { // (Point, Number) -> String

            var map = this._map,
                tileSize = this.options.tileSize,

                nwPoint = tilePoint.multiplyBy(tileSize),
                sePoint = nwPoint.add([tileSize, tileSize]),

                nw = this._crs.project(map.unproject(nwPoint, tilePoint.z)),
                se = this._crs.project(map.unproject(sePoint, tilePoint.z)),
                bbox = this._wmsVersion >= 1.3 && this._crs === L.CRS.EPSG4326 ?
                    [se.y, nw.x, nw.y, se.x].join(',') :
                    [nw.x, se.y, se.x, nw.y].join(','),

                url = L.Util.template(this._url, {s: this._getSubdomain(tilePoint)});

            return url + L.Util.getParamString(this.wmsParams, url, true) + '&BBOX=' + bbox;
        },

        setParams: function (params, noRedraw) {

            L.extend(this.wmsParams, params);

            if (!noRedraw) {
                this.redraw();
            }

            return this;
        }
    });

    L.tileLayer.wms = function (url, options) {
        return new L.TileLayer.WMS(url, options);
    };


    /*
     * L.TileLayer.Canvas is a class that you can use as a base for creating
     * dynamically drawn Canvas-based tile layers.
     */

    L.TileLayer.Canvas = L.TileLayer.extend({
        options: {
            async: false
        },

        initialize: function (options) {
            L.setOptions(this, options);
        },

        redraw: function () {
            if (this._map) {
                this._reset({hard: true});
                this._update();
            }

            for (var i in this._tiles) {
                this._redrawTile(this._tiles[i]);
            }
            return this;
        },

        _redrawTile: function (tile) {
            this.drawTile(tile, tile._tilePoint, this._map._zoom);
        },

        _createTile: function () {
            var tile = L.DomUtil.create('canvas', 'leaflet-tile');
            tile.width = tile.height = this.options.tileSize;
            tile.onselectstart = tile.onmousemove = L.Util.falseFn;
            return tile;
        },

        _loadTile: function (tile, tilePoint) {
            tile._layer = this;
            tile._tilePoint = tilePoint;

            this._redrawTile(tile);

            if (!this.options.async) {
                this.tileDrawn(tile);
            }
        },

        drawTile: function (/*tile, tilePoint*/) {
            // override with rendering code
        },

        tileDrawn: function (tile) {
            this._tileOnLoad.call(tile);
        }
    });


    L.tileLayer.canvas = function (options) {
        return new L.TileLayer.Canvas(options);
    };


    /*
     * L.ImageOverlay is used to overlay images over the map (to specific geographical bounds).
     */

    L.ImageOverlay = L.Class.extend({
        includes: L.Mixin.Events,

        options: {
            opacity: 1
        },

        initialize: function (url, bounds, options) { // (String, LatLngBounds, Object)
            this._url = url;
            this._bounds = L.latLngBounds(bounds);

            L.setOptions(this, options);
        },

        onAdd: function (map) {
            this._map = map;

            if (!this._image) {
                this._initImage();
            }

            map._panes.overlayPane.appendChild(this._image);

            map.on('viewreset', this._reset, this);

            if (map.options.zoomAnimation && L.Browser.any3d) {
                map.on('zoomanim', this._animateZoom, this);
            }

            this._reset();
        },

        onRemove: function (map) {
            map.getPanes().overlayPane.removeChild(this._image);

            map.off('viewreset', this._reset, this);

            if (map.options.zoomAnimation) {
                map.off('zoomanim', this._animateZoom, this);
            }
        },

        addTo: function (map) {
            map.addLayer(this);
            return this;
        },

        setOpacity: function (opacity) {
            this.options.opacity = opacity;
            this._updateOpacity();
            return this;
        },

        // TODO remove bringToFront/bringToBack duplication from TileLayer/Path
        bringToFront: function () {
            if (this._image) {
                this._map._panes.overlayPane.appendChild(this._image);
            }
            return this;
        },

        bringToBack: function () {
            var pane = this._map._panes.overlayPane;
            if (this._image) {
                pane.insertBefore(this._image, pane.firstChild);
            }
            return this;
        },

        setUrl: function (url) {
            this._url = url;
            this._image.src = this._url;
        },

        getAttribution: function () {
            return this.options.attribution;
        },

        _initImage: function () {
            this._image = L.DomUtil.create('img', 'leaflet-image-layer');

            if (this._map.options.zoomAnimation && L.Browser.any3d) {
                L.DomUtil.addClass(this._image, 'leaflet-zoom-animated');
            } else {
                L.DomUtil.addClass(this._image, 'leaflet-zoom-hide');
            }

            this._updateOpacity();

            //TODO createImage util method to remove duplication
            L.extend(this._image, {
                galleryimg: 'no',
                onselectstart: L.Util.falseFn,
                onmousemove: L.Util.falseFn,
                onload: L.bind(this._onImageLoad, this),
                src: this._url
            });
        },

        _animateZoom: function (e) {
            var map = this._map,
                image = this._image,
                scale = map.getZoomScale(e.zoom),
                nw = this._bounds.getNorthWest(),
                se = this._bounds.getSouthEast(),

                topLeft = map._latLngToNewLayerPoint(nw, e.zoom, e.center),
                size = map._latLngToNewLayerPoint(se, e.zoom, e.center)._subtract(topLeft),
                origin = topLeft._add(size._multiplyBy((1 / 2) * (1 - 1 / scale)));

            image.style[L.DomUtil.TRANSFORM] =
                L.DomUtil.getTranslateString(origin) + ' scale(' + scale + ') ';
        },

        _reset: function () {
            var image = this._image,
                topLeft = this._map.latLngToLayerPoint(this._bounds.getNorthWest()),
                size = this._map.latLngToLayerPoint(this._bounds.getSouthEast())._subtract(topLeft);

            L.DomUtil.setPosition(image, topLeft);

            image.style.width = size.x + 'px';
            image.style.height = size.y + 'px';
        },

        _onImageLoad: function () {
            this.fire('load');
        },

        _updateOpacity: function () {
            L.DomUtil.setOpacity(this._image, this.options.opacity);
        }
    });

    L.imageOverlay = function (url, bounds, options) {
        return new L.ImageOverlay(url, bounds, options);
    };


    /*
     * L.Icon is an image-based icon class that you can use with L.Marker for custom markers.
     */

    L.Icon = L.Class.extend({
        options: {
            /*
             iconUrl: (String) (required)
             iconRetinaUrl: (String) (optional, used for retina devices if detected)
             iconSize: (Point) (can be set through CSS)
             iconAnchor: (Point) (centered by default, can be set in CSS with negative margins)
             popupAnchor: (Point) (if not specified, popup opens in the anchor point)
             shadowUrl: (String) (no shadow by default)
             shadowRetinaUrl: (String) (optional, used for retina devices if detected)
             shadowSize: (Point)
             shadowAnchor: (Point)
             */
            className: ''
        },

        initialize: function (options) {
            L.setOptions(this, options);
        },

        createIcon: function (oldIcon) {
            return this._createIcon('icon', oldIcon);
        },

        createShadow: function (oldIcon) {
            return this._createIcon('shadow', oldIcon);
        },

        _createIcon: function (name, oldIcon) {
            var src = this._getIconUrl(name);

            if (!src) {
                if (name === 'icon') {
                    throw new Error('iconUrl not set in Icon options (see the docs).');
                }
                return null;
            }

            var img;
            if (!oldIcon || oldIcon.tagName !== 'IMG') {
                img = this._createImg(src);
            } else {
                img = this._createImg(src, oldIcon);
            }
            this._setIconStyles(img, name);

            return img;
        },

        _setIconStyles: function (img, name) {
            var options = this.options,
                size = L.point(options[name + 'Size']),
                anchor;

            if (name === 'shadow') {
                anchor = L.point(options.shadowAnchor || options.iconAnchor);
            } else {
                anchor = L.point(options.iconAnchor);
            }

            if (!anchor && size) {
                anchor = size.divideBy(2, true);
            }

            img.className = 'leaflet-marker-' + name + ' ' + options.className;

            if (anchor) {
                img.style.marginLeft = (-anchor.x) + 'px';
                img.style.marginTop = (-anchor.y) + 'px';
            }

            if (size) {
                img.style.width = size.x + 'px';
                img.style.height = size.y + 'px';
            }
        },

        _createImg: function (src, el) {
            el = el || document.createElement('img');
            el.src = src;
            return el;
        },

        _getIconUrl: function (name) {
            if (L.Browser.retina && this.options[name + 'RetinaUrl']) {
                return this.options[name + 'RetinaUrl'];
            }
            return this.options[name + 'Url'];
        }
    });

    L.icon = function (options) {
        return new L.Icon(options);
    };


    /*
     * L.Icon.Default is the blue marker icon used by default in Leaflet.
     */

    L.Icon.Default = L.Icon.extend({

        options: {
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],

            shadowSize: [41, 41]
        },

        _getIconUrl: function (name) {
            var key = name + 'Url';

            if (this.options[key]) {
                return this.options[key];
            }

            if (L.Browser.retina && name === 'icon') {
                name += '-2x';
            }

            var path = L.Icon.Default.imagePath;

            if (!path) {
                throw new Error('Couldn\'t autodetect L.Icon.Default.imagePath, set it manually.');
            }

            return path + '/marker-' + name + '.png';
        }
    });

    L.Icon.Default.imagePath = (function () {
        var scripts = document.getElementsByTagName('script'),
            leafletRe = /[\/^]leaflet[\-\._]?([\w\-\._]*)\.js\??/;

        var i, len, src, matches, path;

        for (i = 0, len = scripts.length; i < len; i++) {
            src = scripts[i].src;
            matches = src.match(leafletRe);

            if (matches) {
                path = src.split(leafletRe)[0];
                return (path ? path + '/' : '') + 'images';
            }
        }
    }());


    /*
     * L.Marker is used to display clickable/draggable icons on the map.
     */

    L.Marker = L.Class.extend({

        includes: L.Mixin.Events,

        options: {
            icon: new L.Icon.Default(),
            title: '',
            alt: '',
            clickable: true,
            draggable: false,
            keyboard: true,
            zIndexOffset: 0,
            opacity: 1,
            riseOnHover: false,
            riseOffset: 250
        },

        initialize: function (latlng, options) {
            L.setOptions(this, options);
            this._latlng = L.latLng(latlng);
        },

        onAdd: function (map) {
            this._map = map;

            map.on('viewreset', this.update, this);

            this._initIcon();
            this.update();
            this.fire('add');

            if (map.options.zoomAnimation && map.options.markerZoomAnimation) {
                map.on('zoomanim', this._animateZoom, this);
            }
        },

        addTo: function (map) {
            map.addLayer(this);
            return this;
        },

        onRemove: function (map) {
            if (this.dragging) {
                this.dragging.disable();
            }

            this._removeIcon();
            this._removeShadow();

            this.fire('remove');

            map.off({
                'viewreset': this.update,
                'zoomanim': this._animateZoom
            }, this);

            this._map = null;
        },

        getLatLng: function () {
            return this._latlng;
        },

        setLatLng: function (latlng) {
            this._latlng = L.latLng(latlng);

            this.update();

            return this.fire('move', {latlng: this._latlng});
        },

        setZIndexOffset: function (offset) {
            this.options.zIndexOffset = offset;
            this.update();

            return this;
        },

        setIcon: function (icon) {

            this.options.icon = icon;

            if (this._map) {
                this._initIcon();
                this.update();
            }

            if (this._popup) {
                this.bindPopup(this._popup);
            }

            return this;
        },

        update: function () {
            if (this._icon) {
                var pos = this._map.latLngToLayerPoint(this._latlng).round();
                this._setPos(pos);
            }

            return this;
        },

        _initIcon: function () {
            var options = this.options,
                map = this._map,
                animation = (map.options.zoomAnimation && map.options.markerZoomAnimation),
                classToAdd = animation ? 'leaflet-zoom-animated' : 'leaflet-zoom-hide';

            var icon = options.icon.createIcon(this._icon),
                addIcon = false;

            // if we're not reusing the icon, remove the old one and init new one
            if (icon !== this._icon) {
                if (this._icon) {
                    this._removeIcon();
                }
                addIcon = true;

                if (options.title) {
                    icon.title = options.title;
                }

                if (options.alt) {
                    icon.alt = options.alt;
                }
            }

            L.DomUtil.addClass(icon, classToAdd);

            if (options.keyboard) {
                icon.tabIndex = '0';
            }

            this._icon = icon;

            this._initInteraction();

            if (options.riseOnHover) {
                L.DomEvent
                    .on(icon, 'mouseover', this._bringToFront, this)
                    .on(icon, 'mouseout', this._resetZIndex, this);
            }

            var newShadow = options.icon.createShadow(this._shadow),
                addShadow = false;

            if (newShadow !== this._shadow) {
                this._removeShadow();
                addShadow = true;
            }

            if (newShadow) {
                L.DomUtil.addClass(newShadow, classToAdd);
            }
            this._shadow = newShadow;


            if (options.opacity < 1) {
                this._updateOpacity();
            }


            var panes = this._map._panes;

            if (addIcon) {
                panes.markerPane.appendChild(this._icon);
            }

            if (newShadow && addShadow) {
                panes.shadowPane.appendChild(this._shadow);
            }
        },

        _removeIcon: function () {
            if (this.options.riseOnHover) {
                L.DomEvent
                    .off(this._icon, 'mouseover', this._bringToFront)
                    .off(this._icon, 'mouseout', this._resetZIndex);
            }

            this._map._panes.markerPane.removeChild(this._icon);

            this._icon = null;
        },

        _removeShadow: function () {
            if (this._shadow) {
                this._map._panes.shadowPane.removeChild(this._shadow);
            }
            this._shadow = null;
        },

        _setPos: function (pos) {
            L.DomUtil.setPosition(this._icon, pos);

            if (this._shadow) {
                L.DomUtil.setPosition(this._shadow, pos);
            }

            this._zIndex = pos.y + this.options.zIndexOffset;

            this._resetZIndex();
        },

        _updateZIndex: function (offset) {
            this._icon.style.zIndex = this._zIndex + offset;
        },

        _animateZoom: function (opt) {
            var pos = this._map._latLngToNewLayerPoint(this._latlng, opt.zoom, opt.center).round();

            this._setPos(pos);
        },

        _initInteraction: function () {

            if (!this.options.clickable) {
                return;
            }

            // TODO refactor into something shared with Map/Path/etc. to DRY it up

            var icon = this._icon,
                events = ['dblclick', 'mousedown', 'mouseover', 'mouseout', 'contextmenu'];

            L.DomUtil.addClass(icon, 'leaflet-clickable');
            L.DomEvent.on(icon, 'click', this._onMouseClick, this);
            L.DomEvent.on(icon, 'keypress', this._onKeyPress, this);

            for (var i = 0; i < events.length; i++) {
                L.DomEvent.on(icon, events[i], this._fireMouseEvent, this);
            }

            if (L.Handler.MarkerDrag) {
                this.dragging = new L.Handler.MarkerDrag(this);

                if (this.options.draggable) {
                    this.dragging.enable();
                }
            }
        },

        _onMouseClick: function (e) {
            var wasDragged = this.dragging && this.dragging.moved();

            if (this.hasEventListeners(e.type) || wasDragged) {
                L.DomEvent.stopPropagation(e);
            }

            if (wasDragged) {
                return;
            }

            if ((!this.dragging || !this.dragging._enabled) && this._map.dragging && this._map.dragging.moved()) {
                return;
            }

            this.fire(e.type, {
                originalEvent: e,
                latlng: this._latlng
            });
        },

        _onKeyPress: function (e) {
            if (e.keyCode === 13) {
                this.fire('click', {
                    originalEvent: e,
                    latlng: this._latlng
                });
            }
        },

        _fireMouseEvent: function (e) {

            this.fire(e.type, {
                originalEvent: e,
                latlng: this._latlng
            });

            // TODO proper custom event propagation
            // this line will always be called if marker is in a FeatureGroup
            if (e.type === 'contextmenu' && this.hasEventListeners(e.type)) {
                L.DomEvent.preventDefault(e);
            }
            if (e.type !== 'mousedown') {
                L.DomEvent.stopPropagation(e);
            } else {
                L.DomEvent.preventDefault(e);
            }
        },

        setOpacity: function (opacity) {
            this.options.opacity = opacity;
            if (this._map) {
                this._updateOpacity();
            }

            return this;
        },

        _updateOpacity: function () {
            L.DomUtil.setOpacity(this._icon, this.options.opacity);
            if (this._shadow) {
                L.DomUtil.setOpacity(this._shadow, this.options.opacity);
            }
        },

        _bringToFront: function () {
            this._updateZIndex(this.options.riseOffset);
        },

        _resetZIndex: function () {
            this._updateZIndex(0);
        }
    });

    L.marker = function (latlng, options) {
        return new L.Marker(latlng, options);
    };


    /*
     * L.DivIcon is a lightweight HTML-based icon class (as opposed to the image-based L.Icon)
     * to use with L.Marker.
     */

    L.DivIcon = L.Icon.extend({
        options: {
            iconSize: [12, 12], // also can be set through CSS
            /*
             iconAnchor: (Point)
             popupAnchor: (Point)
             html: (String)
             bgPos: (Point)
             */
            className: 'leaflet-div-icon',
            html: false
        },

        createIcon: function (oldIcon) {
            var div = (oldIcon && oldIcon.tagName === 'DIV') ? oldIcon : document.createElement('div'),
                options = this.options;

            if (options.html !== false) {
                div.innerHTML = options.html;
            } else {
                div.innerHTML = '';
            }

            if (options.bgPos) {
                div.style.backgroundPosition =
                    (-options.bgPos.x) + 'px ' + (-options.bgPos.y) + 'px';
            }

            this._setIconStyles(div, 'icon');
            return div;
        },

        createShadow: function () {
            return null;
        }
    });

    L.divIcon = function (options) {
        return new L.DivIcon(options);
    };


    /*
     * L.Popup is used for displaying popups on the map.
     */

    L.Map.mergeOptions({
        closePopupOnClick: true
    });

    L.Popup = L.Class.extend({
        includes: L.Mixin.Events,

        options: {
            minWidth: 50,
            maxWidth: 300,
            // maxHeight: null,
            autoPan: true,
            closeButton: true,
            offset: [0, 7],
            autoPanPadding: [5, 5],
            // autoPanPaddingTopLeft: null,
            // autoPanPaddingBottomRight: null,
            keepInView: false,
            className: '',
            zoomAnimation: true
        },

        initialize: function (options, source) {
            L.setOptions(this, options);

            this._source = source;
            this._animated = L.Browser.any3d && this.options.zoomAnimation;
            this._isOpen = false;
        },

        onAdd: function (map) {
            this._map = map;

            if (!this._container) {
                this._initLayout();
            }

            var animFade = map.options.fadeAnimation;

            if (animFade) {
                L.DomUtil.setOpacity(this._container, 0);
            }
            map._panes.popupPane.appendChild(this._container);

            map.on(this._getEvents(), this);

            this.update();

            if (animFade) {
                L.DomUtil.setOpacity(this._container, 1);
            }

            this.fire('open');

            map.fire('popupopen', {popup: this});

            if (this._source) {
                this._source.fire('popupopen', {popup: this});
            }
        },

        addTo: function (map) {
            map.addLayer(this);
            return this;
        },

        openOn: function (map) {
            map.openPopup(this);
            return this;
        },

        onRemove: function (map) {
            map._panes.popupPane.removeChild(this._container);

            L.Util.falseFn(this._container.offsetWidth); // force reflow

            map.off(this._getEvents(), this);

            if (map.options.fadeAnimation) {
                L.DomUtil.setOpacity(this._container, 0);
            }

            this._map = null;

            this.fire('close');

            map.fire('popupclose', {popup: this});

            if (this._source) {
                this._source.fire('popupclose', {popup: this});
            }
        },

        getLatLng: function () {
            return this._latlng;
        },

        setLatLng: function (latlng) {
            this._latlng = L.latLng(latlng);
            if (this._map) {
                this._updatePosition();
                this._adjustPan();
            }
            return this;
        },

        getContent: function () {
            return this._content;
        },

        setContent: function (content) {
            this._content = content;
            this.update();
            return this;
        },

        update: function () {
            if (!this._map) {
                return;
            }

            this._container.style.visibility = 'hidden';

            this._updateContent();
            this._updateLayout();
            this._updatePosition();

            this._container.style.visibility = '';

            this._adjustPan();
        },

        _getEvents: function () {
            var events = {
                viewreset: this._updatePosition
            };

            if (this._animated) {
                events.zoomanim = this._zoomAnimation;
            }
            if ('closeOnClick' in this.options ? this.options.closeOnClick : this._map.options.closePopupOnClick) {
                events.preclick = this._close;
            }
            if (this.options.keepInView) {
                events.moveend = this._adjustPan;
            }

            return events;
        },

        _close: function () {
            if (this._map) {
                this._map.closePopup(this);
            }
        },

        _initLayout: function () {
            var prefix = 'leaflet-popup',
                containerClass = prefix + ' ' + this.options.className + ' leaflet-zoom-' +
                    (this._animated ? 'animated' : 'hide'),
                container = this._container = L.DomUtil.create('div', containerClass),
                closeButton;

            if (this.options.closeButton) {
                closeButton = this._closeButton =
                    L.DomUtil.create('a', prefix + '-close-button', container);
                closeButton.href = '#close';
                closeButton.innerHTML = '&#215;';
                L.DomEvent.disableClickPropagation(closeButton);

                L.DomEvent.on(closeButton, 'click', this._onCloseButtonClick, this);
            }

            var wrapper = this._wrapper =
                L.DomUtil.create('div', prefix + '-content-wrapper', container);
            L.DomEvent.disableClickPropagation(wrapper);

            this._contentNode = L.DomUtil.create('div', prefix + '-content', wrapper);

            L.DomEvent.disableScrollPropagation(this._contentNode);
            L.DomEvent.on(wrapper, 'contextmenu', L.DomEvent.stopPropagation);

            this._tipContainer = L.DomUtil.create('div', prefix + '-tip-container', container);
            this._tip = L.DomUtil.create('div', prefix + '-tip', this._tipContainer);
        },

        _updateContent: function () {
            if (!this._content) {
                return;
            }

            if (typeof this._content === 'string') {
                this._contentNode.innerHTML = this._content;
            } else {
                while (this._contentNode.hasChildNodes()) {
                    this._contentNode.removeChild(this._contentNode.firstChild);
                }
                this._contentNode.appendChild(this._content);
            }
            this.fire('contentupdate');
        },

        _updateLayout: function () {
            var container = this._contentNode,
                style = container.style;

            style.width = '';
            style.whiteSpace = 'nowrap';

            var width = container.offsetWidth;
            width = Math.min(width, this.options.maxWidth);
            width = Math.max(width, this.options.minWidth);

            style.width = (width + 1) + 'px';
            style.whiteSpace = '';

            style.height = '';

            var height = container.offsetHeight,
                maxHeight = this.options.maxHeight,
                scrolledClass = 'leaflet-popup-scrolled';

            if (maxHeight && height > maxHeight) {
                style.height = maxHeight + 'px';
                L.DomUtil.addClass(container, scrolledClass);
            } else {
                L.DomUtil.removeClass(container, scrolledClass);
            }

            this._containerWidth = this._container.offsetWidth;
        },

        _updatePosition: function () {
            if (!this._map) {
                return;
            }

            var pos = this._map.latLngToLayerPoint(this._latlng),
                animated = this._animated,
                offset = L.point(this.options.offset);

            if (animated) {
                L.DomUtil.setPosition(this._container, pos);
            }

            this._containerBottom = -offset.y - (animated ? 0 : pos.y);
            this._containerLeft = -Math.round(this._containerWidth / 2) + offset.x + (animated ? 0 : pos.x);

            // bottom position the popup in case the height of the popup changes (images loading etc)
            this._container.style.bottom = this._containerBottom + 'px';
            this._container.style.left = this._containerLeft + 'px';
        },

        _zoomAnimation: function (opt) {
            var pos = this._map._latLngToNewLayerPoint(this._latlng, opt.zoom, opt.center);

            L.DomUtil.setPosition(this._container, pos);
        },

        _adjustPan: function () {
            if (!this.options.autoPan) {
                return;
            }

            var map = this._map,
                containerHeight = this._container.offsetHeight,
                containerWidth = this._containerWidth,

                layerPos = new L.Point(this._containerLeft, -containerHeight - this._containerBottom);

            if (this._animated) {
                layerPos._add(L.DomUtil.getPosition(this._container));
            }

            var containerPos = map.layerPointToContainerPoint(layerPos),
                padding = L.point(this.options.autoPanPadding),
                paddingTL = L.point(this.options.autoPanPaddingTopLeft || padding),
                paddingBR = L.point(this.options.autoPanPaddingBottomRight || padding),
                size = map.getSize(),
                dx = 0,
                dy = 0;

            if (containerPos.x + containerWidth + paddingBR.x > size.x) { // right
                dx = containerPos.x + containerWidth - size.x + paddingBR.x;
            }
            if (containerPos.x - dx - paddingTL.x < 0) { // left
                dx = containerPos.x - paddingTL.x;
            }
            if (containerPos.y + containerHeight + paddingBR.y > size.y) { // bottom
                dy = containerPos.y + containerHeight - size.y + paddingBR.y;
            }
            if (containerPos.y - dy - paddingTL.y < 0) { // top
                dy = containerPos.y - paddingTL.y;
            }

            if (dx || dy) {
                map
                    .fire('autopanstart')
                    .panBy([dx, dy]);
            }
        },

        _onCloseButtonClick: function (e) {
            this._close();
            L.DomEvent.stop(e);
        }
    });

    L.popup = function (options, source) {
        return new L.Popup(options, source);
    };


    L.Map.include({
        openPopup: function (popup, latlng, options) { // (Popup) or (String || HTMLElement, LatLng[, Object])
            this.closePopup();

            if (!(popup instanceof L.Popup)) {
                var content = popup;

                popup = new L.Popup(options)
                    .setLatLng(latlng)
                    .setContent(content);
            }
            popup._isOpen = true;

            this._popup = popup;
            return this.addLayer(popup);
        },

        closePopup: function (popup) {
            if (!popup || popup === this._popup) {
                popup = this._popup;
                this._popup = null;
            }
            if (popup) {
                this.removeLayer(popup);
                popup._isOpen = false;
            }
            return this;
        }
    });


    /*
     * Popup extension to L.Marker, adding popup-related methods.
     */

    L.Marker.include({
        openPopup: function () {
            if (this._popup && this._map && !this._map.hasLayer(this._popup)) {
                this._popup.setLatLng(this._latlng);
                this._map.openPopup(this._popup);
            }

            return this;
        },

        closePopup: function () {
            if (this._popup) {
                this._popup._close();
            }
            return this;
        },

        togglePopup: function () {
            if (this._popup) {
                if (this._popup._isOpen) {
                    this.closePopup();
                } else {
                    this.openPopup();
                }
            }
            return this;
        },

        bindPopup: function (content, options) {
            var anchor = L.point(this.options.icon.options.popupAnchor || [0, 0]);

            anchor = anchor.add(L.Popup.prototype.options.offset);

            if (options && options.offset) {
                anchor = anchor.add(options.offset);
            }

            options = L.extend({offset: anchor}, options);

            if (!this._popupHandlersAdded) {
                this
                    .on('click', this.togglePopup, this)
                    .on('remove', this.closePopup, this)
                    .on('move', this._movePopup, this);
                this._popupHandlersAdded = true;
            }

            if (content instanceof L.Popup) {
                L.setOptions(content, options);
                this._popup = content;
            } else {
                this._popup = new L.Popup(options, this)
                    .setContent(content);
            }

            return this;
        },

        setPopupContent: function (content) {
            if (this._popup) {
                this._popup.setContent(content);
            }
            return this;
        },

        unbindPopup: function () {
            if (this._popup) {
                this._popup = null;
                this
                    .off('click', this.togglePopup, this)
                    .off('remove', this.closePopup, this)
                    .off('move', this._movePopup, this);
                this._popupHandlersAdded = false;
            }
            return this;
        },

        getPopup: function () {
            return this._popup;
        },

        _movePopup: function (e) {
            this._popup.setLatLng(e.latlng);
        }
    });


    /*
     * L.LayerGroup is a class to combine several layers into one so that
     * you can manipulate the group (e.g. add/remove it) as one layer.
     */

    L.LayerGroup = L.Class.extend({
        initialize: function (layers) {
            this._layers = {};

            var i, len;

            if (layers) {
                for (i = 0, len = layers.length; i < len; i++) {
                    this.addLayer(layers[i]);
                }
            }
        },

        addLayer: function (layer) {
            var id = this.getLayerId(layer);

            this._layers[id] = layer;

            if (this._map) {
                this._map.addLayer(layer);
            }

            return this;
        },

        removeLayer: function (layer) {
            var id = layer in this._layers ? layer : this.getLayerId(layer);

            if (this._map && this._layers[id]) {
                this._map.removeLayer(this._layers[id]);
            }

            delete this._layers[id];

            return this;
        },

        hasLayer: function (layer) {
            if (!layer) {
                return false;
            }

            return (layer in this._layers || this.getLayerId(layer) in this._layers);
        },

        clearLayers: function () {
            this.eachLayer(this.removeLayer, this);
            return this;
        },

        invoke: function (methodName) {
            var args = Array.prototype.slice.call(arguments, 1),
                i, layer;

            for (i in this._layers) {
                layer = this._layers[i];

                if (layer[methodName]) {
                    layer[methodName].apply(layer, args);
                }
            }

            return this;
        },

        onAdd: function (map) {
            this._map = map;
            this.eachLayer(map.addLayer, map);
        },

        onRemove: function (map) {
            this.eachLayer(map.removeLayer, map);
            this._map = null;
        },

        addTo: function (map) {
            map.addLayer(this);
            return this;
        },

        eachLayer: function (method, context) {
            for (var i in this._layers) {
                method.call(context, this._layers[i]);
            }
            return this;
        },

        getLayer: function (id) {
            return this._layers[id];
        },

        getLayers: function () {
            var layers = [];

            for (var i in this._layers) {
                layers.push(this._layers[i]);
            }
            return layers;
        },

        setZIndex: function (zIndex) {
            return this.invoke('setZIndex', zIndex);
        },

        getLayerId: function (layer) {
            return L.stamp(layer);
        }
    });

    L.layerGroup = function (layers) {
        return new L.LayerGroup(layers);
    };


    /*
     * L.FeatureGroup extends L.LayerGroup by introducing mouse events and additional methods
     * shared between a group of interactive layers (like vectors or markers).
     */

    L.FeatureGroup = L.LayerGroup.extend({
        includes: L.Mixin.Events,

        statics: {
            EVENTS: 'click dblclick mouseover mouseout mousemove contextmenu popupopen popupclose'
        },

        addLayer: function (layer) {
            if (this.hasLayer(layer)) {
                return this;
            }

            if ('on' in layer) {
                layer.on(L.FeatureGroup.EVENTS, this._propagateEvent, this);
            }

            L.LayerGroup.prototype.addLayer.call(this, layer);

            if (this._popupContent && layer.bindPopup) {
                layer.bindPopup(this._popupContent, this._popupOptions);
            }

            return this.fire('layeradd', {layer: layer});
        },

        removeLayer: function (layer) {
            if (!this.hasLayer(layer)) {
                return this;
            }
            if (layer in this._layers) {
                layer = this._layers[layer];
            }

            layer.off(L.FeatureGroup.EVENTS, this._propagateEvent, this);

            L.LayerGroup.prototype.removeLayer.call(this, layer);

            if (this._popupContent) {
                this.invoke('unbindPopup');
            }

            return this.fire('layerremove', {layer: layer});
        },

        bindPopup: function (content, options) {
            this._popupContent = content;
            this._popupOptions = options;
            return this.invoke('bindPopup', content, options);
        },

        openPopup: function (latlng) {
            // open popup on the first layer
            for (var id in this._layers) {
                this._layers[id].openPopup(latlng);
                break;
            }
            return this;
        },

        setStyle: function (style) {
            return this.invoke('setStyle', style);
        },

        bringToFront: function () {
            return this.invoke('bringToFront');
        },

        bringToBack: function () {
            return this.invoke('bringToBack');
        },

        getBounds: function () {
            var bounds = new L.LatLngBounds();

            this.eachLayer(function (layer) {
                bounds.extend(layer instanceof L.Marker ? layer.getLatLng() : layer.getBounds());
            });

            return bounds;
        },

        _propagateEvent: function (e) {
            e = L.extend({
                layer: e.target,
                target: this
            }, e);
            this.fire(e.type, e);
        }
    });

    L.featureGroup = function (layers) {
        return new L.FeatureGroup(layers);
    };


    /*
     * L.Path is a base class for rendering vector paths on a map. Inherited by Polyline, Circle, etc.
     */

    L.Path = L.Class.extend({
        includes: [L.Mixin.Events],

        statics: {
            // how much to extend the clip area around the map view
            // (relative to its size, e.g. 0.5 is half the screen in each direction)
            // set it so that SVG element doesn't exceed 1280px (vectors flicker on dragend if it is)
            CLIP_PADDING: (function () {
                var max = L.Browser.mobile ? 1280 : 2000,
                    target = (max / Math.max(window.outerWidth, window.outerHeight) - 1) / 2;
                return Math.max(0, Math.min(0.5, target));
            })()
        },

        options: {
            stroke: true,
            color: '#0033ff',
            dashArray: null,
            lineCap: null,
            lineJoin: null,
            weight: 5,
            opacity: 0.5,

            fill: false,
            fillColor: null, //same as color by default
            fillOpacity: 0.2,

            clickable: true
        },

        initialize: function (options) {
            L.setOptions(this, options);
        },

        onAdd: function (map) {
            this._map = map;

            if (!this._container) {
                this._initElements();
                this._initEvents();
            }

            this.projectLatlngs();
            this._updatePath();

            if (this._container) {
                this._map._pathRoot.appendChild(this._container);
            }

            this.fire('add');

            map.on({
                'viewreset': this.projectLatlngs,
                'moveend': this._updatePath
            }, this);
        },

        addTo: function (map) {
            map.addLayer(this);
            return this;
        },

        onRemove: function (map) {
            map._pathRoot.removeChild(this._container);

            // Need to fire remove event before we set _map to null as the event hooks might need the object
            this.fire('remove');
            this._map = null;

            if (L.Browser.vml) {
                this._container = null;
                this._stroke = null;
                this._fill = null;
            }

            map.off({
                'viewreset': this.projectLatlngs,
                'moveend': this._updatePath
            }, this);
        },

        projectLatlngs: function () {
            // do all projection stuff here
        },

        setStyle: function (style) {
            L.setOptions(this, style);

            if (this._container) {
                this._updateStyle();
            }

            return this;
        },

        redraw: function () {
            if (this._map) {
                this.projectLatlngs();
                this._updatePath();
            }
            return this;
        }
    });

    L.Map.include({
        _updatePathViewport: function () {
            var p = L.Path.CLIP_PADDING,
                size = this.getSize(),
                panePos = L.DomUtil.getPosition(this._mapPane),
                min = panePos.multiplyBy(-1)._subtract(size.multiplyBy(p)._round()),
                max = min.add(size.multiplyBy(1 + p * 2)._round());

            this._pathViewport = new L.Bounds(min, max);
        }
    });


    /*
     * Extends L.Path with SVG-specific rendering code.
     */

    L.Path.SVG_NS = 'http://www.w3.org/2000/svg';

    L.Browser.svg = !!(document.createElementNS && document.createElementNS(L.Path.SVG_NS, 'svg').createSVGRect);

    L.Path = L.Path.extend({
        statics: {
            SVG: L.Browser.svg
        },

        bringToFront: function () {
            var root = this._map._pathRoot,
                path = this._container;

            if (path && root.lastChild !== path) {
                root.appendChild(path);
            }
            return this;
        },

        bringToBack: function () {
            var root = this._map._pathRoot,
                path = this._container,
                first = root.firstChild;

            if (path && first !== path) {
                root.insertBefore(path, first);
            }
            return this;
        },

        getPathString: function () {
            // form path string here
        },

        _createElement: function (name) {
            return document.createElementNS(L.Path.SVG_NS, name);
        },

        _initElements: function () {
            this._map._initPathRoot();
            this._initPath();
            this._initStyle();
        },

        _initPath: function () {
            this._container = this._createElement('g');

            this._path = this._createElement('path');

            if (this.options.className) {
                L.DomUtil.addClass(this._path, this.options.className);
            }

            this._container.appendChild(this._path);
        },

        _initStyle: function () {
            if (this.options.stroke) {
                this._path.setAttribute('stroke-linejoin', 'round');
                this._path.setAttribute('stroke-linecap', 'round');
            }
            if (this.options.fill) {
                this._path.setAttribute('fill-rule', 'evenodd');
            }
            if (this.options.pointerEvents) {
                this._path.setAttribute('pointer-events', this.options.pointerEvents);
            }
            if (!this.options.clickable && !this.options.pointerEvents) {
                this._path.setAttribute('pointer-events', 'none');
            }
            this._updateStyle();
        },

        _updateStyle: function () {
            if (this.options.stroke) {
                this._path.setAttribute('stroke', this.options.color);
                this._path.setAttribute('stroke-opacity', this.options.opacity);
                this._path.setAttribute('stroke-width', this.options.weight);
                if (this.options.dashArray) {
                    this._path.setAttribute('stroke-dasharray', this.options.dashArray);
                } else {
                    this._path.removeAttribute('stroke-dasharray');
                }
                if (this.options.lineCap) {
                    this._path.setAttribute('stroke-linecap', this.options.lineCap);
                }
                if (this.options.lineJoin) {
                    this._path.setAttribute('stroke-linejoin', this.options.lineJoin);
                }
            } else {
                this._path.setAttribute('stroke', 'none');
            }
            if (this.options.fill) {
                this._path.setAttribute('fill', this.options.fillColor || this.options.color);
                this._path.setAttribute('fill-opacity', this.options.fillOpacity);
            } else {
                this._path.setAttribute('fill', 'none');
            }
        },

        _updatePath: function () {
            var str = this.getPathString();
            if (!str) {
                // fix webkit empty string parsing bug
                str = 'M0 0';
            }
            this._path.setAttribute('d', str);
        },

        // TODO remove duplication with L.Map
        _initEvents: function () {
            if (this.options.clickable) {
                if (L.Browser.svg || !L.Browser.vml) {
                    L.DomUtil.addClass(this._path, 'leaflet-clickable');
                }

                L.DomEvent.on(this._container, 'click', this._onMouseClick, this);

                var events = ['dblclick', 'mousedown', 'mouseover',
                    'mouseout', 'mousemove', 'contextmenu'];
                for (var i = 0; i < events.length; i++) {
                    L.DomEvent.on(this._container, events[i], this._fireMouseEvent, this);
                }
            }
        },

        _onMouseClick: function (e) {
            if (this._map.dragging && this._map.dragging.moved()) {
                return;
            }

            this._fireMouseEvent(e);
        },

        _fireMouseEvent: function (e) {
            if (!this.hasEventListeners(e.type)) {
                return;
            }

            var map = this._map,
                containerPoint = map.mouseEventToContainerPoint(e),
                layerPoint = map.containerPointToLayerPoint(containerPoint),
                latlng = map.layerPointToLatLng(layerPoint);

            this.fire(e.type, {
                latlng: latlng,
                layerPoint: layerPoint,
                containerPoint: containerPoint,
                originalEvent: e
            });

            if (e.type === 'contextmenu') {
                L.DomEvent.preventDefault(e);
            }
            if (e.type !== 'mousemove') {
                L.DomEvent.stopPropagation(e);
            }
        }
    });

    L.Map.include({
        _initPathRoot: function () {
            if (!this._pathRoot) {
                this._pathRoot = L.Path.prototype._createElement('svg');
                this._panes.overlayPane.appendChild(this._pathRoot);

                if (this.options.zoomAnimation && L.Browser.any3d) {
                    L.DomUtil.addClass(this._pathRoot, 'leaflet-zoom-animated');

                    this.on({
                        'zoomanim': this._animatePathZoom,
                        'zoomend': this._endPathZoom
                    });
                } else {
                    L.DomUtil.addClass(this._pathRoot, 'leaflet-zoom-hide');
                }

                this.on('moveend', this._updateSvgViewport);
                this._updateSvgViewport();
            }
        },

        _animatePathZoom: function (e) {
            var scale = this.getZoomScale(e.zoom),
                offset = this._getCenterOffset(e.center)._multiplyBy(-scale)._add(this._pathViewport.min);

            this._pathRoot.style[L.DomUtil.TRANSFORM] =
                L.DomUtil.getTranslateString(offset) + ' scale(' + scale + ') ';

            this._pathZooming = true;
        },

        _endPathZoom: function () {
            this._pathZooming = false;
        },

        _updateSvgViewport: function () {

            if (this._pathZooming) {
                // Do not update SVGs while a zoom animation is going on otherwise the animation will break.
                // When the zoom animation ends we will be updated again anyway
                // This fixes the case where you do a momentum move and zoom while the move is still ongoing.
                return;
            }

            this._updatePathViewport();

            var vp = this._pathViewport,
                min = vp.min,
                max = vp.max,
                width = max.x - min.x,
                height = max.y - min.y,
                root = this._pathRoot,
                pane = this._panes.overlayPane;

            // Hack to make flicker on drag end on mobile webkit less irritating
            if (L.Browser.mobileWebkit) {
                pane.removeChild(root);
            }

            L.DomUtil.setPosition(root, min);
            root.setAttribute('width', width);
            root.setAttribute('height', height);
            root.setAttribute('viewBox', [min.x, min.y, width, height].join(' '));

            if (L.Browser.mobileWebkit) {
                pane.appendChild(root);
            }
        }
    });


    /*
     * Popup extension to L.Path (polylines, polygons, circles), adding popup-related methods.
     */

    L.Path.include({

        bindPopup: function (content, options) {

            if (content instanceof L.Popup) {
                this._popup = content;
            } else {
                if (!this._popup || options) {
                    this._popup = new L.Popup(options, this);
                }
                this._popup.setContent(content);
            }

            if (!this._popupHandlersAdded) {
                this
                    .on('click', this._openPopup, this)
                    .on('remove', this.closePopup, this);

                this._popupHandlersAdded = true;
            }

            return this;
        },

        unbindPopup: function () {
            if (this._popup) {
                this._popup = null;
                this
                    .off('click', this._openPopup)
                    .off('remove', this.closePopup);

                this._popupHandlersAdded = false;
            }
            return this;
        },

        openPopup: function (latlng) {

            if (this._popup) {
                // open the popup from one of the path's points if not specified
                latlng = latlng || this._latlng ||
                this._latlngs[Math.floor(this._latlngs.length / 2)];

                this._openPopup({latlng: latlng});
            }

            return this;
        },

        closePopup: function () {
            if (this._popup) {
                this._popup._close();
            }
            return this;
        },

        _openPopup: function (e) {
            this._popup.setLatLng(e.latlng);
            this._map.openPopup(this._popup);
        }
    });


    /*
     * Vector rendering for IE6-8 through VML.
     * Thanks to Dmitry Baranovsky and his Raphael library for inspiration!
     */

    L.Browser.vml = !L.Browser.svg && (function () {
        try {
            var div = document.createElement('div');
            div.innerHTML = '<v:shape adj="1"/>';

            var shape = div.firstChild;
            shape.style.behavior = 'url(#default#VML)';

            return shape && (typeof shape.adj === 'object');

        } catch (e) {
            return false;
        }
    }());

    L.Path = L.Browser.svg || !L.Browser.vml ? L.Path : L.Path.extend({
        statics: {
            VML: true,
            CLIP_PADDING: 0.02
        },

        _createElement: (function () {
            try {
                document.namespaces.add('lvml', 'urn:schemas-microsoft-com:vml');
                return function (name) {
                    return document.createElement('<lvml:' + name + ' class="lvml">');
                };
            } catch (e) {
                return function (name) {
                    return document.createElement(
                        '<' + name + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">');
                };
            }
        }()),

        _initPath: function () {
            var container = this._container = this._createElement('shape');

            L.DomUtil.addClass(container, 'leaflet-vml-shape' +
            (this.options.className ? ' ' + this.options.className : ''));

            if (this.options.clickable) {
                L.DomUtil.addClass(container, 'leaflet-clickable');
            }

            container.coordsize = '1 1';

            this._path = this._createElement('path');
            container.appendChild(this._path);

            this._map._pathRoot.appendChild(container);
        },

        _initStyle: function () {
            this._updateStyle();
        },

        _updateStyle: function () {
            var stroke = this._stroke,
                fill = this._fill,
                options = this.options,
                container = this._container;

            container.stroked = options.stroke;
            container.filled = options.fill;

            if (options.stroke) {
                if (!stroke) {
                    stroke = this._stroke = this._createElement('stroke');
                    stroke.endcap = 'round';
                    container.appendChild(stroke);
                }
                stroke.weight = options.weight + 'px';
                stroke.color = options.color;
                stroke.opacity = options.opacity;

                if (options.dashArray) {
                    stroke.dashStyle = L.Util.isArray(options.dashArray) ?
                        options.dashArray.join(' ') :
                        options.dashArray.replace(/( *, *)/g, ' ');
                } else {
                    stroke.dashStyle = '';
                }
                if (options.lineCap) {
                    stroke.endcap = options.lineCap.replace('butt', 'flat');
                }
                if (options.lineJoin) {
                    stroke.joinstyle = options.lineJoin;
                }

            } else if (stroke) {
                container.removeChild(stroke);
                this._stroke = null;
            }

            if (options.fill) {
                if (!fill) {
                    fill = this._fill = this._createElement('fill');
                    container.appendChild(fill);
                }
                fill.color = options.fillColor || options.color;
                fill.opacity = options.fillOpacity;

            } else if (fill) {
                container.removeChild(fill);
                this._fill = null;
            }
        },

        _updatePath: function () {
            var style = this._container.style;

            style.display = 'none';
            this._path.v = this.getPathString() + ' '; // the space fixes IE empty path string bug
            style.display = '';
        }
    });

    L.Map.include(L.Browser.svg || !L.Browser.vml ? {} : {
        _initPathRoot: function () {
            if (this._pathRoot) {
                return;
            }

            var root = this._pathRoot = document.createElement('div');
            root.className = 'leaflet-vml-container';
            this._panes.overlayPane.appendChild(root);

            this.on('moveend', this._updatePathViewport);
            this._updatePathViewport();
        }
    });


    /*
     * Vector rendering for all browsers that support canvas.
     */

    L.Browser.canvas = (function () {
        return !!document.createElement('canvas').getContext;
    }());

    L.Path = (L.Path.SVG && !window.L_PREFER_CANVAS) || !L.Browser.canvas ? L.Path : L.Path.extend({
        statics: {
            //CLIP_PADDING: 0.02, // not sure if there's a need to set it to a small value
            CANVAS: true,
            SVG: false
        },

        redraw: function () {
            if (this._map) {
                this.projectLatlngs();
                this._requestUpdate();
            }
            return this;
        },

        setStyle: function (style) {
            L.setOptions(this, style);

            if (this._map) {
                this._updateStyle();
                this._requestUpdate();
            }
            return this;
        },

        onRemove: function (map) {
            map
                .off('viewreset', this.projectLatlngs, this)
                .off('moveend', this._updatePath, this);

            if (this.options.clickable) {
                this._map.off('click', this._onClick, this);
                this._map.off('mousemove', this._onMouseMove, this);
            }

            this._requestUpdate();

            this.fire('remove');
            this._map = null;
        },

        _requestUpdate: function () {
            if (this._map && !L.Path._updateRequest) {
                L.Path._updateRequest = L.Util.requestAnimFrame(this._fireMapMoveEnd, this._map);
            }
        },

        _fireMapMoveEnd: function () {
            L.Path._updateRequest = null;
            this.fire('moveend');
        },

        _initElements: function () {
            this._map._initPathRoot();
            this._ctx = this._map._canvasCtx;
        },

        _updateStyle: function () {
            var options = this.options;

            if (options.stroke) {
                this._ctx.lineWidth = options.weight;
                this._ctx.strokeStyle = options.color;
            }
            if (options.fill) {
                this._ctx.fillStyle = options.fillColor || options.color;
            }
        },

        _drawPath: function () {
            var i, j, len, len2, point, drawMethod;

            this._ctx.beginPath();

            for (i = 0, len = this._parts.length; i < len; i++) {
                for (j = 0, len2 = this._parts[i].length; j < len2; j++) {
                    point = this._parts[i][j];
                    drawMethod = (j === 0 ? 'move' : 'line') + 'To';

                    this._ctx[drawMethod](point.x, point.y);
                }
                // TODO refactor ugly hack
                if (this instanceof L.Polygon) {
                    this._ctx.closePath();
                }
            }
        },

        _checkIfEmpty: function () {
            return !this._parts.length;
        },

        _updatePath: function () {
            if (this._checkIfEmpty()) {
                return;
            }

            var ctx = this._ctx,
                options = this.options;

            this._drawPath();
            ctx.save();
            this._updateStyle();

            if (options.fill) {
                ctx.globalAlpha = options.fillOpacity;
                ctx.fill();
            }

            if (options.stroke) {
                ctx.globalAlpha = options.opacity;
                ctx.stroke();
            }

            ctx.restore();

            // TODO optimization: 1 fill/stroke for all features with equal style instead of 1 for each feature
        },

        _initEvents: function () {
            if (this.options.clickable) {
                // TODO dblclick
                this._map.on('mousemove', this._onMouseMove, this);
                this._map.on('click', this._onClick, this);
            }
        },

        _onClick: function (e) {
            if (this._containsPoint(e.layerPoint)) {
                this.fire('click', e);
            }
        },

        _onMouseMove: function (e) {
            if (!this._map || this._map._animatingZoom) {
                return;
            }

            // TODO don't do on each move
            if (this._containsPoint(e.layerPoint)) {
                this._ctx.canvas.style.cursor = 'pointer';
                this._mouseInside = true;
                this.fire('mouseover', e);

            } else if (this._mouseInside) {
                this._ctx.canvas.style.cursor = '';
                this._mouseInside = false;
                this.fire('mouseout', e);
            }
        }
    });

    L.Map.include((L.Path.SVG && !window.L_PREFER_CANVAS) || !L.Browser.canvas ? {} : {
        _initPathRoot: function () {
            var root = this._pathRoot,
                ctx;

            if (!root) {
                root = this._pathRoot = document.createElement('canvas');
                root.style.position = 'absolute';
                ctx = this._canvasCtx = root.getContext('2d');

                ctx.lineCap = 'round';
                ctx.lineJoin = 'round';

                this._panes.overlayPane.appendChild(root);

                if (this.options.zoomAnimation) {
                    this._pathRoot.className = 'leaflet-zoom-animated';
                    this.on('zoomanim', this._animatePathZoom);
                    this.on('zoomend', this._endPathZoom);
                }
                this.on('moveend', this._updateCanvasViewport);
                this._updateCanvasViewport();
            }
        },

        _updateCanvasViewport: function () {
            // don't redraw while zooming. See _updateSvgViewport for more details
            if (this._pathZooming) {
                return;
            }
            this._updatePathViewport();

            var vp = this._pathViewport,
                min = vp.min,
                size = vp.max.subtract(min),
                root = this._pathRoot;

            //TODO check if this works properly on mobile webkit
            L.DomUtil.setPosition(root, min);
            root.width = size.x;
            root.height = size.y;
            root.getContext('2d').translate(-min.x, -min.y);
        }
    });


    /*
     * L.LineUtil contains different utility functions for line segments
     * and polylines (clipping, simplification, distances, etc.)
     */

    /*jshint bitwise:false */ // allow bitwise operations for this file

    L.LineUtil = {

        // Simplify polyline with vertex reduction and Douglas-Peucker simplification.
        // Improves rendering performance dramatically by lessening the number of points to draw.

        simplify: function (/*Point[]*/ points, /*Number*/ tolerance) {
            if (!tolerance || !points.length) {
                return points.slice();
            }

            var sqTolerance = tolerance * tolerance;

            // stage 1: vertex reduction
            points = this._reducePoints(points, sqTolerance);

            // stage 2: Douglas-Peucker simplification
            points = this._simplifyDP(points, sqTolerance);

            return points;
        },

        // distance from a point to a segment between two points
        pointToSegmentDistance: function (/*Point*/ p, /*Point*/ p1, /*Point*/ p2) {
            return Math.sqrt(this._sqClosestPointOnSegment(p, p1, p2, true));
        },

        closestPointOnSegment: function (/*Point*/ p, /*Point*/ p1, /*Point*/ p2) {
            return this._sqClosestPointOnSegment(p, p1, p2);
        },

        // Douglas-Peucker simplification, see http://en.wikipedia.org/wiki/Douglas-Peucker_algorithm
        _simplifyDP: function (points, sqTolerance) {

            var len = points.length,
                ArrayConstructor = typeof Uint8Array !== undefined + '' ? Uint8Array : Array,
                markers = new ArrayConstructor(len);

            markers[0] = markers[len - 1] = 1;

            this._simplifyDPStep(points, markers, sqTolerance, 0, len - 1);

            var i,
                newPoints = [];

            for (i = 0; i < len; i++) {
                if (markers[i]) {
                    newPoints.push(points[i]);
                }
            }

            return newPoints;
        },

        _simplifyDPStep: function (points, markers, sqTolerance, first, last) {

            var maxSqDist = 0,
                index, i, sqDist;

            for (i = first + 1; i <= last - 1; i++) {
                sqDist = this._sqClosestPointOnSegment(points[i], points[first], points[last], true);

                if (sqDist > maxSqDist) {
                    index = i;
                    maxSqDist = sqDist;
                }
            }

            if (maxSqDist > sqTolerance) {
                markers[index] = 1;

                this._simplifyDPStep(points, markers, sqTolerance, first, index);
                this._simplifyDPStep(points, markers, sqTolerance, index, last);
            }
        },

        // reduce points that are too close to each other to a single point
        _reducePoints: function (points, sqTolerance) {
            var reducedPoints = [points[0]];

            for (var i = 1, prev = 0, len = points.length; i < len; i++) {
                if (this._sqDist(points[i], points[prev]) > sqTolerance) {
                    reducedPoints.push(points[i]);
                    prev = i;
                }
            }
            if (prev < len - 1) {
                reducedPoints.push(points[len - 1]);
            }
            return reducedPoints;
        },

        // Cohen-Sutherland line clipping algorithm.
        // Used to avoid rendering parts of a polyline that are not currently visible.

        clipSegment: function (a, b, bounds, useLastCode) {
            var codeA = useLastCode ? this._lastCode : this._getBitCode(a, bounds),
                codeB = this._getBitCode(b, bounds),

                codeOut, p, newCode;

            // save 2nd code to avoid calculating it on the next segment
            this._lastCode = codeB;

            while (true) {
                // if a,b is inside the clip window (trivial accept)
                if (!(codeA | codeB)) {
                    return [a, b];
                    // if a,b is outside the clip window (trivial reject)
                } else if (codeA & codeB) {
                    return false;
                    // other cases
                } else {
                    codeOut = codeA || codeB;
                    p = this._getEdgeIntersection(a, b, codeOut, bounds);
                    newCode = this._getBitCode(p, bounds);

                    if (codeOut === codeA) {
                        a = p;
                        codeA = newCode;
                    } else {
                        b = p;
                        codeB = newCode;
                    }
                }
            }
        },

        _getEdgeIntersection: function (a, b, code, bounds) {
            var dx = b.x - a.x,
                dy = b.y - a.y,
                min = bounds.min,
                max = bounds.max;

            if (code & 8) { // top
                return new L.Point(a.x + dx * (max.y - a.y) / dy, max.y);
            } else if (code & 4) { // bottom
                return new L.Point(a.x + dx * (min.y - a.y) / dy, min.y);
            } else if (code & 2) { // right
                return new L.Point(max.x, a.y + dy * (max.x - a.x) / dx);
            } else if (code & 1) { // left
                return new L.Point(min.x, a.y + dy * (min.x - a.x) / dx);
            }
        },

        _getBitCode: function (/*Point*/ p, bounds) {
            var code = 0;

            if (p.x < bounds.min.x) { // left
                code |= 1;
            } else if (p.x > bounds.max.x) { // right
                code |= 2;
            }
            if (p.y < bounds.min.y) { // bottom
                code |= 4;
            } else if (p.y > bounds.max.y) { // top
                code |= 8;
            }

            return code;
        },

        // square distance (to avoid unnecessary Math.sqrt calls)
        _sqDist: function (p1, p2) {
            var dx = p2.x - p1.x,
                dy = p2.y - p1.y;
            return dx * dx + dy * dy;
        },

        // return closest point on segment or distance to that point
        _sqClosestPointOnSegment: function (p, p1, p2, sqDist) {
            var x = p1.x,
                y = p1.y,
                dx = p2.x - x,
                dy = p2.y - y,
                dot = dx * dx + dy * dy,
                t;

            if (dot > 0) {
                t = ((p.x - x) * dx + (p.y - y) * dy) / dot;

                if (t > 1) {
                    x = p2.x;
                    y = p2.y;
                } else if (t > 0) {
                    x += dx * t;
                    y += dy * t;
                }
            }

            dx = p.x - x;
            dy = p.y - y;

            return sqDist ? dx * dx + dy * dy : new L.Point(x, y);
        }
    };


    /*
     * L.Polyline is used to display polylines on a map.
     */

    L.Polyline = L.Path.extend({
        initialize: function (latlngs, options) {
            L.Path.prototype.initialize.call(this, options);

            this._latlngs = this._convertLatLngs(latlngs);
        },

        options: {
            // how much to simplify the polyline on each zoom level
            // more = better performance and smoother look, less = more accurate
            smoothFactor: 1.0,
            noClip: false
        },

        projectLatlngs: function () {
            this._originalPoints = [];

            for (var i = 0, len = this._latlngs.length; i < len; i++) {
                this._originalPoints[i] = this._map.latLngToLayerPoint(this._latlngs[i]);
            }
        },

        getPathString: function () {
            for (var i = 0, len = this._parts.length, str = ''; i < len; i++) {
                str += this._getPathPartStr(this._parts[i]);
            }
            return str;
        },

        getLatLngs: function () {
            return this._latlngs;
        },

        setLatLngs: function (latlngs) {
            this._latlngs = this._convertLatLngs(latlngs);
            return this.redraw();
        },

        addLatLng: function (latlng) {
            this._latlngs.push(L.latLng(latlng));
            return this.redraw();
        },

        spliceLatLngs: function () { // (Number index, Number howMany)
            var removed = [].splice.apply(this._latlngs, arguments);
            this._convertLatLngs(this._latlngs, true);
            this.redraw();
            return removed;
        },

        closestLayerPoint: function (p) {
            var minDistance = Infinity, parts = this._parts, p1, p2, minPoint = null;

            for (var j = 0, jLen = parts.length; j < jLen; j++) {
                var points = parts[j];
                for (var i = 1, len = points.length; i < len; i++) {
                    p1 = points[i - 1];
                    p2 = points[i];
                    var sqDist = L.LineUtil._sqClosestPointOnSegment(p, p1, p2, true);
                    if (sqDist < minDistance) {
                        minDistance = sqDist;
                        minPoint = L.LineUtil._sqClosestPointOnSegment(p, p1, p2);
                    }
                }
            }
            if (minPoint) {
                minPoint.distance = Math.sqrt(minDistance);
            }
            return minPoint;
        },

        getBounds: function () {
            return new L.LatLngBounds(this.getLatLngs());
        },

        _convertLatLngs: function (latlngs, overwrite) {
            var i, len, target = overwrite ? latlngs : [];

            for (i = 0, len = latlngs.length; i < len; i++) {
                if (L.Util.isArray(latlngs[i]) && typeof latlngs[i][0] !== 'number') {
                    return;
                }
                target[i] = L.latLng(latlngs[i]);
            }
            return target;
        },

        _initEvents: function () {
            L.Path.prototype._initEvents.call(this);
        },

        _getPathPartStr: function (points) {
            var round = L.Path.VML;

            for (var j = 0, len2 = points.length, str = '', p; j < len2; j++) {
                p = points[j];
                if (round) {
                    p._round();
                }
                str += (j ? 'L' : 'M') + p.x + ' ' + p.y;
            }
            return str;
        },

        _clipPoints: function () {
            var points = this._originalPoints,
                len = points.length,
                i, k, segment;

            if (this.options.noClip) {
                this._parts = [points];
                return;
            }

            this._parts = [];

            var parts = this._parts,
                vp = this._map._pathViewport,
                lu = L.LineUtil;

            for (i = 0, k = 0; i < len - 1; i++) {
                segment = lu.clipSegment(points[i], points[i + 1], vp, i);
                if (!segment) {
                    continue;
                }

                parts[k] = parts[k] || [];
                parts[k].push(segment[0]);

                // if segment goes out of screen, or it's the last one, it's the end of the line part
                if ((segment[1] !== points[i + 1]) || (i === len - 2)) {
                    parts[k].push(segment[1]);
                    k++;
                }
            }
        },

        // simplify each clipped part of the polyline
        _simplifyPoints: function () {
            var parts = this._parts,
                lu = L.LineUtil;

            for (var i = 0, len = parts.length; i < len; i++) {
                parts[i] = lu.simplify(parts[i], this.options.smoothFactor);
            }
        },

        _updatePath: function () {
            if (!this._map) {
                return;
            }

            this._clipPoints();
            this._simplifyPoints();

            L.Path.prototype._updatePath.call(this);
        }
    });

    L.polyline = function (latlngs, options) {
        return new L.Polyline(latlngs, options);
    };


    /*
     * L.PolyUtil contains utility functions for polygons (clipping, etc.).
     */

    /*jshint bitwise:false */ // allow bitwise operations here

    L.PolyUtil = {};

    /*
     * Sutherland-Hodgeman polygon clipping algorithm.
     * Used to avoid rendering parts of a polygon that are not currently visible.
     */
    L.PolyUtil.clipPolygon = function (points, bounds) {
        var clippedPoints,
            edges = [1, 4, 2, 8],
            i, j, k,
            a, b,
            len, edge, p,
            lu = L.LineUtil;

        for (i = 0, len = points.length; i < len; i++) {
            points[i]._code = lu._getBitCode(points[i], bounds);
        }

        // for each edge (left, bottom, right, top)
        for (k = 0; k < 4; k++) {
            edge = edges[k];
            clippedPoints = [];

            for (i = 0, len = points.length, j = len - 1; i < len; j = i++) {
                a = points[i];
                b = points[j];

                // if a is inside the clip window
                if (!(a._code & edge)) {
                    // if b is outside the clip window (a->b goes out of screen)
                    if (b._code & edge) {
                        p = lu._getEdgeIntersection(b, a, edge, bounds);
                        p._code = lu._getBitCode(p, bounds);
                        clippedPoints.push(p);
                    }
                    clippedPoints.push(a);

                    // else if b is inside the clip window (a->b enters the screen)
                } else if (!(b._code & edge)) {
                    p = lu._getEdgeIntersection(b, a, edge, bounds);
                    p._code = lu._getBitCode(p, bounds);
                    clippedPoints.push(p);
                }
            }
            points = clippedPoints;
        }

        return points;
    };


    /*
     * L.Polygon is used to display polygons on a map.
     */

    L.Polygon = L.Polyline.extend({
        options: {
            fill: true
        },

        initialize: function (latlngs, options) {
            L.Polyline.prototype.initialize.call(this, latlngs, options);
            this._initWithHoles(latlngs);
        },

        _initWithHoles: function (latlngs) {
            var i, len, hole;
            if (latlngs && L.Util.isArray(latlngs[0]) && (typeof latlngs[0][0] !== 'number')) {
                this._latlngs = this._convertLatLngs(latlngs[0]);
                this._holes = latlngs.slice(1);

                for (i = 0, len = this._holes.length; i < len; i++) {
                    hole = this._holes[i] = this._convertLatLngs(this._holes[i]);
                    if (hole[0].equals(hole[hole.length - 1])) {
                        hole.pop();
                    }
                }
            }

            // filter out last point if its equal to the first one
            latlngs = this._latlngs;

            if (latlngs.length >= 2 && latlngs[0].equals(latlngs[latlngs.length - 1])) {
                latlngs.pop();
            }
        },

        projectLatlngs: function () {
            L.Polyline.prototype.projectLatlngs.call(this);

            // project polygon holes points
            // TODO move this logic to Polyline to get rid of duplication
            this._holePoints = [];

            if (!this._holes) {
                return;
            }

            var i, j, len, len2;

            for (i = 0, len = this._holes.length; i < len; i++) {
                this._holePoints[i] = [];

                for (j = 0, len2 = this._holes[i].length; j < len2; j++) {
                    this._holePoints[i][j] = this._map.latLngToLayerPoint(this._holes[i][j]);
                }
            }
        },

        setLatLngs: function (latlngs) {
            if (latlngs && L.Util.isArray(latlngs[0]) && (typeof latlngs[0][0] !== 'number')) {
                this._initWithHoles(latlngs);
                return this.redraw();
            } else {
                return L.Polyline.prototype.setLatLngs.call(this, latlngs);
            }
        },

        _clipPoints: function () {
            var points = this._originalPoints,
                newParts = [];

            this._parts = [points].concat(this._holePoints);

            if (this.options.noClip) {
                return;
            }

            for (var i = 0, len = this._parts.length; i < len; i++) {
                var clipped = L.PolyUtil.clipPolygon(this._parts[i], this._map._pathViewport);
                if (clipped.length) {
                    newParts.push(clipped);
                }
            }

            this._parts = newParts;
        },

        _getPathPartStr: function (points) {
            var str = L.Polyline.prototype._getPathPartStr.call(this, points);
            return str + (L.Browser.svg ? 'z' : 'x');
        }
    });

    L.polygon = function (latlngs, options) {
        return new L.Polygon(latlngs, options);
    };


    /*
     * Contains L.MultiPolyline and L.MultiPolygon layers.
     */

    (function () {
        function createMulti(Klass) {

            return L.FeatureGroup.extend({

                initialize: function (latlngs, options) {
                    this._layers = {};
                    this._options = options;
                    this.setLatLngs(latlngs);
                },

                setLatLngs: function (latlngs) {
                    var i = 0,
                        len = latlngs.length;

                    this.eachLayer(function (layer) {
                        if (i < len) {
                            layer.setLatLngs(latlngs[i++]);
                        } else {
                            this.removeLayer(layer);
                        }
                    }, this);

                    while (i < len) {
                        this.addLayer(new Klass(latlngs[i++], this._options));
                    }

                    return this;
                },

                getLatLngs: function () {
                    var latlngs = [];

                    this.eachLayer(function (layer) {
                        latlngs.push(layer.getLatLngs());
                    });

                    return latlngs;
                }
            });
        }

        L.MultiPolyline = createMulti(L.Polyline);
        L.MultiPolygon = createMulti(L.Polygon);

        L.multiPolyline = function (latlngs, options) {
            return new L.MultiPolyline(latlngs, options);
        };

        L.multiPolygon = function (latlngs, options) {
            return new L.MultiPolygon(latlngs, options);
        };
    }());


    /*
     * L.Rectangle extends Polygon and creates a rectangle when passed a LatLngBounds object.
     */

    L.Rectangle = L.Polygon.extend({
        initialize: function (latLngBounds, options) {
            L.Polygon.prototype.initialize.call(this, this._boundsToLatLngs(latLngBounds), options);
        },

        setBounds: function (latLngBounds) {
            this.setLatLngs(this._boundsToLatLngs(latLngBounds));
        },

        _boundsToLatLngs: function (latLngBounds) {
            latLngBounds = L.latLngBounds(latLngBounds);
            return [
                latLngBounds.getSouthWest(),
                latLngBounds.getNorthWest(),
                latLngBounds.getNorthEast(),
                latLngBounds.getSouthEast()
            ];
        }
    });

    L.rectangle = function (latLngBounds, options) {
        return new L.Rectangle(latLngBounds, options);
    };


    /*
     * L.Circle is a circle overlay (with a certain radius in meters).
     */

    L.Circle = L.Path.extend({
        initialize: function (latlng, radius, options) {
            L.Path.prototype.initialize.call(this, options);

            this._latlng = L.latLng(latlng);
            this._mRadius = radius;
        },

        options: {
            fill: true
        },

        setLatLng: function (latlng) {
            this._latlng = L.latLng(latlng);
            return this.redraw();
        },

        setRadius: function (radius) {
            this._mRadius = radius;
            return this.redraw();
        },

        projectLatlngs: function () {
            var lngRadius = this._getLngRadius(),
                latlng = this._latlng,
                pointLeft = this._map.latLngToLayerPoint([latlng.lat, latlng.lng - lngRadius]);

            this._point = this._map.latLngToLayerPoint(latlng);
            this._radius = Math.max(this._point.x - pointLeft.x, 1);
        },

        getBounds: function () {
            var lngRadius = this._getLngRadius(),
                latRadius = (this._mRadius / 40075017) * 360,
                latlng = this._latlng;

            return new L.LatLngBounds(
                [latlng.lat - latRadius, latlng.lng - lngRadius],
                [latlng.lat + latRadius, latlng.lng + lngRadius]);
        },

        getLatLng: function () {
            return this._latlng;
        },

        getPathString: function () {
            var p = this._point,
                r = this._radius;

            if (this._checkIfEmpty()) {
                return '';
            }

            if (L.Browser.svg) {
                return 'M' + p.x + ',' + (p.y - r) +
                    'A' + r + ',' + r + ',0,1,1,' +
                    (p.x - 0.1) + ',' + (p.y - r) + ' z';
            } else {
                p._round();
                r = Math.round(r);
                return 'AL ' + p.x + ',' + p.y + ' ' + r + ',' + r + ' 0,' + (65535 * 360);
            }
        },

        getRadius: function () {
            return this._mRadius;
        },

        // TODO Earth hardcoded, move into projection code!

        _getLatRadius: function () {
            return (this._mRadius / 40075017) * 360;
        },

        _getLngRadius: function () {
            return this._getLatRadius() / Math.cos(L.LatLng.DEG_TO_RAD * this._latlng.lat);
        },

        _checkIfEmpty: function () {
            if (!this._map) {
                return false;
            }
            var vp = this._map._pathViewport,
                r = this._radius,
                p = this._point;

            return p.x - r > vp.max.x || p.y - r > vp.max.y ||
                p.x + r < vp.min.x || p.y + r < vp.min.y;
        }
    });

    L.circle = function (latlng, radius, options) {
        return new L.Circle(latlng, radius, options);
    };


    /*
     * L.CircleMarker is a circle overlay with a permanent pixel radius.
     */

    L.CircleMarker = L.Circle.extend({
        options: {
            radius: 10,
            weight: 2
        },

        initialize: function (latlng, options) {
            L.Circle.prototype.initialize.call(this, latlng, null, options);
            this._radius = this.options.radius;
        },

        projectLatlngs: function () {
            this._point = this._map.latLngToLayerPoint(this._latlng);
        },

        _updateStyle: function () {
            L.Circle.prototype._updateStyle.call(this);
            this.setRadius(this.options.radius);
        },

        setLatLng: function (latlng) {
            L.Circle.prototype.setLatLng.call(this, latlng);
            if (this._popup && this._popup._isOpen) {
                this._popup.setLatLng(latlng);
            }
            return this;
        },

        setRadius: function (radius) {
            this.options.radius = this._radius = radius;
            return this.redraw();
        },

        getRadius: function () {
            return this._radius;
        }
    });

    L.circleMarker = function (latlng, options) {
        return new L.CircleMarker(latlng, options);
    };


    /*
     * Extends L.Polyline to be able to manually detect clicks on Canvas-rendered polylines.
     */

    L.Polyline.include(!L.Path.CANVAS ? {} : {
        _containsPoint: function (p, closed) {
            var i, j, k, len, len2, dist, part,
                w = this.options.weight / 2;

            if (L.Browser.touch) {
                w += 10; // polyline click tolerance on touch devices
            }

            for (i = 0, len = this._parts.length; i < len; i++) {
                part = this._parts[i];
                for (j = 0, len2 = part.length, k = len2 - 1; j < len2; k = j++) {
                    if (!closed && (j === 0)) {
                        continue;
                    }

                    dist = L.LineUtil.pointToSegmentDistance(p, part[k], part[j]);

                    if (dist <= w) {
                        return true;
                    }
                }
            }
            return false;
        }
    });


    /*
     * Extends L.Polygon to be able to manually detect clicks on Canvas-rendered polygons.
     */

    L.Polygon.include(!L.Path.CANVAS ? {} : {
        _containsPoint: function (p) {
            var inside = false,
                part, p1, p2,
                i, j, k,
                len, len2;

            // TODO optimization: check if within bounds first

            if (L.Polyline.prototype._containsPoint.call(this, p, true)) {
                // click on polygon border
                return true;
            }

            // ray casting algorithm for detecting if point is in polygon

            for (i = 0, len = this._parts.length; i < len; i++) {
                part = this._parts[i];

                for (j = 0, len2 = part.length, k = len2 - 1; j < len2; k = j++) {
                    p1 = part[j];
                    p2 = part[k];

                    if (((p1.y > p.y) !== (p2.y > p.y)) &&
                        (p.x < (p2.x - p1.x) * (p.y - p1.y) / (p2.y - p1.y) + p1.x)) {
                        inside = !inside;
                    }
                }
            }

            return inside;
        }
    });


    /*
     * Extends L.Circle with Canvas-specific code.
     */

    L.Circle.include(!L.Path.CANVAS ? {} : {
        _drawPath: function () {
            var p = this._point;
            this._ctx.beginPath();
            this._ctx.arc(p.x, p.y, this._radius, 0, Math.PI * 2, false);
        },

        _containsPoint: function (p) {
            var center = this._point,
                w2 = this.options.stroke ? this.options.weight / 2 : 0;

            return (p.distanceTo(center) <= this._radius + w2);
        }
    });


    /*
     * CircleMarker canvas specific drawing parts.
     */

    L.CircleMarker.include(!L.Path.CANVAS ? {} : {
        _updateStyle: function () {
            L.Path.prototype._updateStyle.call(this);
        }
    });


    /*
     * L.GeoJSON turns any GeoJSON data into a Leaflet layer.
     */

    L.GeoJSON = L.FeatureGroup.extend({

        initialize: function (geojson, options) {
            L.setOptions(this, options);

            this._layers = {};

            if (geojson) {
                this.addData(geojson);
            }
        },

        addData: function (geojson) {
            var features = L.Util.isArray(geojson) ? geojson : geojson.features,
                i, len, feature;

            if (features) {
                for (i = 0, len = features.length; i < len; i++) {
                    // Only add this if geometry or geometries are set and not null
                    feature = features[i];
                    if (feature.geometries || feature.geometry || feature.features || feature.coordinates) {
                        this.addData(features[i]);
                    }
                }
                return this;
            }

            var options = this.options;

            if (options.filter && !options.filter(geojson)) {
                return;
            }

            var layer = L.GeoJSON.geometryToLayer(geojson, options.pointToLayer, options.coordsToLatLng, options);
            layer.feature = L.GeoJSON.asFeature(geojson);

            layer.defaultOptions = layer.options;
            this.resetStyle(layer);

            if (options.onEachFeature) {
                options.onEachFeature(geojson, layer);
            }

            return this.addLayer(layer);
        },

        resetStyle: function (layer) {
            var style = this.options.style;
            if (style) {
                // reset any custom styles
                L.Util.extend(layer.options, layer.defaultOptions);

                this._setLayerStyle(layer, style);
            }
        },

        setStyle: function (style) {
            this.eachLayer(function (layer) {
                this._setLayerStyle(layer, style);
            }, this);
        },

        _setLayerStyle: function (layer, style) {
            if (typeof style === 'function') {
                style = style(layer.feature);
            }
            if (layer.setStyle) {
                layer.setStyle(style);
            }
        }
    });

    L.extend(L.GeoJSON, {
        geometryToLayer: function (geojson, pointToLayer, coordsToLatLng, vectorOptions) {
            var geometry = geojson.type === 'Feature' ? geojson.geometry : geojson,
                coords = geometry.coordinates,
                layers = [],
                latlng, latlngs, i, len;

            coordsToLatLng = coordsToLatLng || this.coordsToLatLng;

            switch (geometry.type) {
                case 'Point':
                    latlng = coordsToLatLng(coords);
                    return pointToLayer ? pointToLayer(geojson, latlng) : new L.Marker(latlng);

                case 'MultiPoint':
                    for (i = 0, len = coords.length; i < len; i++) {
                        latlng = coordsToLatLng(coords[i]);
                        layers.push(pointToLayer ? pointToLayer(geojson, latlng) : new L.Marker(latlng));
                    }
                    return new L.FeatureGroup(layers);

                case 'LineString':
                    latlngs = this.coordsToLatLngs(coords, 0, coordsToLatLng);
                    return new L.Polyline(latlngs, vectorOptions);

                case 'Polygon':
                    if (coords.length === 2 && !coords[1].length) {
                        throw new Error('Invalid GeoJSON object.');
                    }
                    latlngs = this.coordsToLatLngs(coords, 1, coordsToLatLng);
                    return new L.Polygon(latlngs, vectorOptions);

                case 'MultiLineString':
                    latlngs = this.coordsToLatLngs(coords, 1, coordsToLatLng);
                    return new L.MultiPolyline(latlngs, vectorOptions);

                case 'MultiPolygon':
                    latlngs = this.coordsToLatLngs(coords, 2, coordsToLatLng);
                    return new L.MultiPolygon(latlngs, vectorOptions);

                case 'GeometryCollection':
                    for (i = 0, len = geometry.geometries.length; i < len; i++) {

                        layers.push(this.geometryToLayer({
                            geometry: geometry.geometries[i],
                            type: 'Feature',
                            properties: geojson.properties
                        }, pointToLayer, coordsToLatLng, vectorOptions));
                    }
                    return new L.FeatureGroup(layers);

                default:
                    throw new Error('Invalid GeoJSON object.');
            }
        },

        coordsToLatLng: function (coords) { // (Array[, Boolean]) -> LatLng
            return new L.LatLng(coords[1], coords[0], coords[2]);
        },

        coordsToLatLngs: function (coords, levelsDeep, coordsToLatLng) { // (Array[, Number, Function]) -> Array
            var latlng, i, len,
                latlngs = [];

            for (i = 0, len = coords.length; i < len; i++) {
                latlng = levelsDeep ?
                    this.coordsToLatLngs(coords[i], levelsDeep - 1, coordsToLatLng) :
                    (coordsToLatLng || this.coordsToLatLng)(coords[i]);

                latlngs.push(latlng);
            }

            return latlngs;
        },

        latLngToCoords: function (latlng) {
            var coords = [latlng.lng, latlng.lat];

            if (latlng.alt !== undefined) {
                coords.push(latlng.alt);
            }
            return coords;
        },

        latLngsToCoords: function (latLngs) {
            var coords = [];

            for (var i = 0, len = latLngs.length; i < len; i++) {
                coords.push(L.GeoJSON.latLngToCoords(latLngs[i]));
            }

            return coords;
        },

        getFeature: function (layer, newGeometry) {
            return layer.feature ? L.extend({}, layer.feature, {geometry: newGeometry}) : L.GeoJSON.asFeature(newGeometry);
        },

        asFeature: function (geoJSON) {
            if (geoJSON.type === 'Feature') {
                return geoJSON;
            }

            return {
                type: 'Feature',
                properties: {},
                geometry: geoJSON
            };
        }
    });

    var PointToGeoJSON = {
        toGeoJSON: function () {
            return L.GeoJSON.getFeature(this, {
                type: 'Point',
                coordinates: L.GeoJSON.latLngToCoords(this.getLatLng())
            });
        }
    };

    L.Marker.include(PointToGeoJSON);
    L.Circle.include(PointToGeoJSON);
    L.CircleMarker.include(PointToGeoJSON);

    L.Polyline.include({
        toGeoJSON: function () {
            return L.GeoJSON.getFeature(this, {
                type: 'LineString',
                coordinates: L.GeoJSON.latLngsToCoords(this.getLatLngs())
            });
        }
    });

    L.Polygon.include({
        toGeoJSON: function () {
            var coords = [L.GeoJSON.latLngsToCoords(this.getLatLngs())],
                i, len, hole;

            coords[0].push(coords[0][0]);

            if (this._holes) {
                for (i = 0, len = this._holes.length; i < len; i++) {
                    hole = L.GeoJSON.latLngsToCoords(this._holes[i]);
                    hole.push(hole[0]);
                    coords.push(hole);
                }
            }

            return L.GeoJSON.getFeature(this, {
                type: 'Polygon',
                coordinates: coords
            });
        }
    });

    (function () {
        function multiToGeoJSON(type) {
            return function () {
                var coords = [];

                this.eachLayer(function (layer) {
                    coords.push(layer.toGeoJSON().geometry.coordinates);
                });

                return L.GeoJSON.getFeature(this, {
                    type: type,
                    coordinates: coords
                });
            };
        }

        L.MultiPolyline.include({toGeoJSON: multiToGeoJSON('MultiLineString')});
        L.MultiPolygon.include({toGeoJSON: multiToGeoJSON('MultiPolygon')});

        L.LayerGroup.include({
            toGeoJSON: function () {

                var geometry = this.feature && this.feature.geometry,
                    jsons = [],
                    json;

                if (geometry && geometry.type === 'MultiPoint') {
                    return multiToGeoJSON('MultiPoint').call(this);
                }

                var isGeometryCollection = geometry && geometry.type === 'GeometryCollection';

                this.eachLayer(function (layer) {
                    if (layer.toGeoJSON) {
                        json = layer.toGeoJSON();
                        jsons.push(isGeometryCollection ? json.geometry : L.GeoJSON.asFeature(json));
                    }
                });

                if (isGeometryCollection) {
                    return L.GeoJSON.getFeature(this, {
                        geometries: jsons,
                        type: 'GeometryCollection'
                    });
                }

                return {
                    type: 'FeatureCollection',
                    features: jsons
                };
            }
        });
    }());

    L.geoJson = function (geojson, options) {
        return new L.GeoJSON(geojson, options);
    };


    /*
     * L.DomEvent contains functions for working with DOM events.
     */

    L.DomEvent = {
        /* inspired by John Resig, Dean Edwards and YUI addEvent implementations */
        addListener: function (obj, type, fn, context) { // (HTMLElement, String, Function[, Object])

            var id = L.stamp(fn),
                key = '_leaflet_' + type + id,
                handler, originalHandler, newType;

            if (obj[key]) {
                return this;
            }

            handler = function (e) {
                return fn.call(context || obj, e || L.DomEvent._getEvent());
            };

            if (L.Browser.pointer && type.indexOf('touch') === 0) {
                return this.addPointerListener(obj, type, handler, id);
            }
            if (L.Browser.touch && (type === 'dblclick') && this.addDoubleTapListener) {
                this.addDoubleTapListener(obj, handler, id);
            }

            if ('addEventListener' in obj) {

                if (type === 'mousewheel') {
                    obj.addEventListener('DOMMouseScroll', handler, false);
                    obj.addEventListener(type, handler, false);

                } else if ((type === 'mouseenter') || (type === 'mouseleave')) {

                    originalHandler = handler;
                    newType = (type === 'mouseenter' ? 'mouseover' : 'mouseout');

                    handler = function (e) {
                        if (!L.DomEvent._checkMouse(obj, e)) {
                            return;
                        }
                        return originalHandler(e);
                    };

                    obj.addEventListener(newType, handler, false);

                } else if (type === 'click' && L.Browser.android) {
                    originalHandler = handler;
                    handler = function (e) {
                        return L.DomEvent._filterClick(e, originalHandler);
                    };

                    obj.addEventListener(type, handler, false);
                } else {
                    obj.addEventListener(type, handler, false);
                }

            } else if ('attachEvent' in obj) {
                obj.attachEvent('on' + type, handler);
            }

            obj[key] = handler;

            return this;
        },

        removeListener: function (obj, type, fn) {  // (HTMLElement, String, Function)

            var id = L.stamp(fn),
                key = '_leaflet_' + type + id,
                handler = obj[key];

            if (!handler) {
                return this;
            }

            if (L.Browser.pointer && type.indexOf('touch') === 0) {
                this.removePointerListener(obj, type, id);
            } else if (L.Browser.touch && (type === 'dblclick') && this.removeDoubleTapListener) {
                this.removeDoubleTapListener(obj, id);

            } else if ('removeEventListener' in obj) {

                if (type === 'mousewheel') {
                    obj.removeEventListener('DOMMouseScroll', handler, false);
                    obj.removeEventListener(type, handler, false);

                } else if ((type === 'mouseenter') || (type === 'mouseleave')) {
                    obj.removeEventListener((type === 'mouseenter' ? 'mouseover' : 'mouseout'), handler, false);
                } else {
                    obj.removeEventListener(type, handler, false);
                }
            } else if ('detachEvent' in obj) {
                obj.detachEvent('on' + type, handler);
            }

            obj[key] = null;

            return this;
        },

        stopPropagation: function (e) {

            if (e.stopPropagation) {
                e.stopPropagation();
            } else {
                e.cancelBubble = true;
            }
            L.DomEvent._skipped(e);

            return this;
        },

        disableScrollPropagation: function (el) {
            var stop = L.DomEvent.stopPropagation;

            return L.DomEvent
                .on(el, 'mousewheel', stop)
                .on(el, 'MozMousePixelScroll', stop);
        },

        disableClickPropagation: function (el) {
            var stop = L.DomEvent.stopPropagation;

            for (var i = L.Draggable.START.length - 1; i >= 0; i--) {
                L.DomEvent.on(el, L.Draggable.START[i], stop);
            }

            return L.DomEvent
                .on(el, 'click', L.DomEvent._fakeStop)
                .on(el, 'dblclick', stop);
        },

        preventDefault: function (e) {

            if (e.preventDefault) {
                e.preventDefault();
            } else {
                e.returnValue = false;
            }
            return this;
        },

        stop: function (e) {
            return L.DomEvent
                .preventDefault(e)
                .stopPropagation(e);
        },

        getMousePosition: function (e, container) {
            if (!container) {
                return new L.Point(e.clientX, e.clientY);
            }

            var rect = container.getBoundingClientRect();

            return new L.Point(
                e.clientX - rect.left - container.clientLeft,
                e.clientY - rect.top - container.clientTop);
        },

        getWheelDelta: function (e) {

            var delta = 0;

            if (e.wheelDelta) {
                delta = e.wheelDelta / 120;
            }
            if (e.detail) {
                delta = -e.detail / 3;
            }
            return delta;
        },

        _skipEvents: {},

        _fakeStop: function (e) {
            // fakes stopPropagation by setting a special event flag, checked/reset with L.DomEvent._skipped(e)
            L.DomEvent._skipEvents[e.type] = true;
        },

        _skipped: function (e) {
            var skipped = this._skipEvents[e.type];
            // reset when checking, as it's only used in map container and propagates outside of the map
            this._skipEvents[e.type] = false;
            return skipped;
        },

        // check if element really left/entered the event target (for mouseenter/mouseleave)
        _checkMouse: function (el, e) {

            var related = e.relatedTarget;

            if (!related) {
                return true;
            }

            try {
                while (related && (related !== el)) {
                    related = related.parentNode;
                }
            } catch (err) {
                return false;
            }
            return (related !== el);
        },

        _getEvent: function () { // evil magic for IE
            /*jshint noarg:false */
            var e = window.event;
            if (!e) {
                var caller = arguments.callee.caller;
                while (caller) {
                    e = caller['arguments'][0];
                    if (e && window.Event === e.constructor) {
                        break;
                    }
                    caller = caller.caller;
                }
            }
            return e;
        },

        // this is a horrible workaround for a bug in Android where a single touch triggers two click events
        _filterClick: function (e, handler) {
            var timeStamp = (e.timeStamp || e.originalEvent.timeStamp),
                elapsed = L.DomEvent._lastClick && (timeStamp - L.DomEvent._lastClick);

            // are they closer together than 500ms yet more than 100ms?
            // Android typically triggers them ~300ms apart while multiple listeners
            // on the same event should be triggered far faster;
            // or check if click is simulated on the element, and if it is, reject any non-simulated events

            if ((elapsed && elapsed > 100 && elapsed < 500) || (e.target._simulatedClick && !e._simulated)) {
                L.DomEvent.stop(e);
                return;
            }
            L.DomEvent._lastClick = timeStamp;

            return handler(e);
        }
    };

    L.DomEvent.on = L.DomEvent.addListener;
    L.DomEvent.off = L.DomEvent.removeListener;


    /*
     * L.Draggable allows you to add dragging capabilities to any element. Supports mobile devices too.
     */

    L.Draggable = L.Class.extend({
        includes: L.Mixin.Events,

        statics: {
            START: L.Browser.touch ? ['touchstart', 'mousedown'] : ['mousedown'],
            END: {
                mousedown: 'mouseup',
                touchstart: 'touchend',
                pointerdown: 'touchend',
                MSPointerDown: 'touchend'
            },
            MOVE: {
                mousedown: 'mousemove',
                touchstart: 'touchmove',
                pointerdown: 'touchmove',
                MSPointerDown: 'touchmove'
            }
        },

        initialize: function (element, dragStartTarget) {
            this._element = element;
            this._dragStartTarget = dragStartTarget || element;
        },

        enable: function () {
            if (this._enabled) {
                return;
            }

            for (var i = L.Draggable.START.length - 1; i >= 0; i--) {
                L.DomEvent.on(this._dragStartTarget, L.Draggable.START[i], this._onDown, this);
            }

            this._enabled = true;
        },

        disable: function () {
            if (!this._enabled) {
                return;
            }

            for (var i = L.Draggable.START.length - 1; i >= 0; i--) {
                L.DomEvent.off(this._dragStartTarget, L.Draggable.START[i], this._onDown, this);
            }

            this._enabled = false;
            this._moved = false;
        },

        _onDown: function (e) {
            this._moved = false;

            if (e.shiftKey || ((e.which !== 1) && (e.button !== 1) && !e.touches)) {
                return;
            }

            L.DomEvent.stopPropagation(e);

            if (L.Draggable._disabled) {
                return;
            }

            L.DomUtil.disableImageDrag();
            L.DomUtil.disableTextSelection();

            if (this._moving) {
                return;
            }

            var first = e.touches ? e.touches[0] : e;

            this._startPoint = new L.Point(first.clientX, first.clientY);
            this._startPos = this._newPos = L.DomUtil.getPosition(this._element);

            L.DomEvent
                .on(document, L.Draggable.MOVE[e.type], this._onMove, this)
                .on(document, L.Draggable.END[e.type], this._onUp, this);
        },

        _onMove: function (e) {
            if (e.touches && e.touches.length > 1) {
                this._moved = true;
                return;
            }

            var first = (e.touches && e.touches.length === 1 ? e.touches[0] : e),
                newPoint = new L.Point(first.clientX, first.clientY),
                offset = newPoint.subtract(this._startPoint);

            if (!offset.x && !offset.y) {
                return;
            }
            if (L.Browser.touch && Math.abs(offset.x) + Math.abs(offset.y) < 3) {
                return;
            }

            L.DomEvent.preventDefault(e);

            if (!this._moved) {
                this.fire('dragstart');

                this._moved = true;
                this._startPos = L.DomUtil.getPosition(this._element).subtract(offset);

                L.DomUtil.addClass(document.body, 'leaflet-dragging');
                this._lastTarget = e.target || e.srcElement;
                L.DomUtil.addClass(this._lastTarget, 'leaflet-drag-target');
            }

            this._newPos = this._startPos.add(offset);
            this._moving = true;

            L.Util.cancelAnimFrame(this._animRequest);
            this._animRequest = L.Util.requestAnimFrame(this._updatePosition, this, true, this._dragStartTarget);
        },

        _updatePosition: function () {
            this.fire('predrag');
            L.DomUtil.setPosition(this._element, this._newPos);
            this.fire('drag');
        },

        _onUp: function () {
            L.DomUtil.removeClass(document.body, 'leaflet-dragging');

            if (this._lastTarget) {
                L.DomUtil.removeClass(this._lastTarget, 'leaflet-drag-target');
                this._lastTarget = null;
            }

            for (var i in L.Draggable.MOVE) {
                L.DomEvent
                    .off(document, L.Draggable.MOVE[i], this._onMove)
                    .off(document, L.Draggable.END[i], this._onUp);
            }

            L.DomUtil.enableImageDrag();
            L.DomUtil.enableTextSelection();

            if (this._moved && this._moving) {
                // ensure drag is not fired after dragend
                L.Util.cancelAnimFrame(this._animRequest);

                this.fire('dragend', {
                    distance: this._newPos.distanceTo(this._startPos)
                });
            }

            this._moving = false;
        }
    });


    /*
     L.Handler is a base class for handler classes that are used internally to inject
     interaction features like dragging to classes like Map and Marker.
     */

    L.Handler = L.Class.extend({
        initialize: function (map) {
            this._map = map;
        },

        enable: function () {
            if (this._enabled) {
                return;
            }

            this._enabled = true;
            this.addHooks();
        },

        disable: function () {
            if (!this._enabled) {
                return;
            }

            this._enabled = false;
            this.removeHooks();
        },

        enabled: function () {
            return !!this._enabled;
        }
    });


    /*
     * L.Handler.MapDrag is used to make the map draggable (with panning inertia), enabled by default.
     */

    L.Map.mergeOptions({
        dragging: true,

        inertia: !L.Browser.android23,
        inertiaDeceleration: 3400, // px/s^2
        inertiaMaxSpeed: Infinity, // px/s
        inertiaThreshold: L.Browser.touch ? 32 : 18, // ms
        easeLinearity: 0.25,

        // TODO refactor, move to CRS
        worldCopyJump: false
    });

    L.Map.Drag = L.Handler.extend({
        addHooks: function () {
            if (!this._draggable) {
                var map = this._map;

                this._draggable = new L.Draggable(map._mapPane, map._container);

                this._draggable.on({
                    'dragstart': this._onDragStart,
                    'drag': this._onDrag,
                    'dragend': this._onDragEnd
                }, this);

                if (map.options.worldCopyJump) {
                    this._draggable.on('predrag', this._onPreDrag, this);
                    map.on('viewreset', this._onViewReset, this);

                    map.whenReady(this._onViewReset, this);
                }
            }
            this._draggable.enable();
        },

        removeHooks: function () {
            this._draggable.disable();
        },

        moved: function () {
            return this._draggable && this._draggable._moved;
        },

        _onDragStart: function () {
            var map = this._map;

            if (map._panAnim) {
                map._panAnim.stop();
            }

            map
                .fire('movestart')
                .fire('dragstart');

            if (map.options.inertia) {
                this._positions = [];
                this._times = [];
            }
        },

        _onDrag: function () {
            if (this._map.options.inertia) {
                var time = this._lastTime = +new Date(),
                    pos = this._lastPos = this._draggable._newPos;

                this._positions.push(pos);
                this._times.push(time);

                if (time - this._times[0] > 200) {
                    this._positions.shift();
                    this._times.shift();
                }
            }

            this._map
                .fire('move')
                .fire('drag');
        },

        _onViewReset: function () {
            // TODO fix hardcoded Earth values
            var pxCenter = this._map.getSize()._divideBy(2),
                pxWorldCenter = this._map.latLngToLayerPoint([0, 0]);

            this._initialWorldOffset = pxWorldCenter.subtract(pxCenter).x;
            this._worldWidth = this._map.project([0, 180]).x;
        },

        _onPreDrag: function () {
            // TODO refactor to be able to adjust map pane position after zoom
            var worldWidth = this._worldWidth,
                halfWidth = Math.round(worldWidth / 2),
                dx = this._initialWorldOffset,
                x = this._draggable._newPos.x,
                newX1 = (x - halfWidth + dx) % worldWidth + halfWidth - dx,
                newX2 = (x + halfWidth + dx) % worldWidth - halfWidth - dx,
                newX = Math.abs(newX1 + dx) < Math.abs(newX2 + dx) ? newX1 : newX2;

            this._draggable._newPos.x = newX;
        },

        _onDragEnd: function (e) {
            var map = this._map,
                options = map.options,
                delay = +new Date() - this._lastTime,

                noInertia = !options.inertia || delay > options.inertiaThreshold || !this._positions[0];

            map.fire('dragend', e);

            if (noInertia) {
                map.fire('moveend');

            } else {

                var direction = this._lastPos.subtract(this._positions[0]),
                    duration = (this._lastTime + delay - this._times[0]) / 1000,
                    ease = options.easeLinearity,

                    speedVector = direction.multiplyBy(ease / duration),
                    speed = speedVector.distanceTo([0, 0]),

                    limitedSpeed = Math.min(options.inertiaMaxSpeed, speed),
                    limitedSpeedVector = speedVector.multiplyBy(limitedSpeed / speed),

                    decelerationDuration = limitedSpeed / (options.inertiaDeceleration * ease),
                    offset = limitedSpeedVector.multiplyBy(-decelerationDuration / 2).round();

                if (!offset.x || !offset.y) {
                    map.fire('moveend');

                } else {
                    offset = map._limitOffset(offset, map.options.maxBounds);

                    L.Util.requestAnimFrame(function () {
                        map.panBy(offset, {
                            duration: decelerationDuration,
                            easeLinearity: ease,
                            noMoveStart: true
                        });
                    });
                }
            }
        }
    });

    L.Map.addInitHook('addHandler', 'dragging', L.Map.Drag);


    /*
     * L.Handler.DoubleClickZoom is used to handle double-click zoom on the map, enabled by default.
     */

    L.Map.mergeOptions({
        doubleClickZoom: true
    });

    L.Map.DoubleClickZoom = L.Handler.extend({
        addHooks: function () {
            this._map.on('dblclick', this._onDoubleClick, this);
        },

        removeHooks: function () {
            this._map.off('dblclick', this._onDoubleClick, this);
        },

        _onDoubleClick: function (e) {
            var map = this._map,
                zoom = map.getZoom() + (e.originalEvent.shiftKey ? -1 : 1);

            if (map.options.doubleClickZoom === 'center') {
                map.setZoom(zoom);
            } else {
                map.setZoomAround(e.containerPoint, zoom);
            }
        }
    });

    L.Map.addInitHook('addHandler', 'doubleClickZoom', L.Map.DoubleClickZoom);


    /*
     * L.Handler.ScrollWheelZoom is used by L.Map to enable mouse scroll wheel zoom on the map.
     */

    L.Map.mergeOptions({
        scrollWheelZoom: true
    });

    L.Map.ScrollWheelZoom = L.Handler.extend({
        addHooks: function () {
            L.DomEvent.on(this._map._container, 'mousewheel', this._onWheelScroll, this);
            L.DomEvent.on(this._map._container, 'MozMousePixelScroll', L.DomEvent.preventDefault);
            this._delta = 0;
        },

        removeHooks: function () {
            L.DomEvent.off(this._map._container, 'mousewheel', this._onWheelScroll);
            L.DomEvent.off(this._map._container, 'MozMousePixelScroll', L.DomEvent.preventDefault);
        },

        _onWheelScroll: function (e) {
            var delta = L.DomEvent.getWheelDelta(e);

            this._delta += delta;
            this._lastMousePos = this._map.mouseEventToContainerPoint(e);

            if (!this._startTime) {
                this._startTime = +new Date();
            }

            var left = Math.max(40 - (+new Date() - this._startTime), 0);

            clearTimeout(this._timer);
            this._timer = setTimeout(L.bind(this._performZoom, this), left);

            L.DomEvent.preventDefault(e);
            L.DomEvent.stopPropagation(e);
        },

        _performZoom: function () {
            var map = this._map,
                delta = this._delta,
                zoom = map.getZoom();

            delta = delta > 0 ? Math.ceil(delta) : Math.floor(delta);
            delta = Math.max(Math.min(delta, 4), -4);
            delta = map._limitZoom(zoom + delta) - zoom;

            this._delta = 0;
            this._startTime = null;

            if (!delta) {
                return;
            }

            if (map.options.scrollWheelZoom === 'center') {
                map.setZoom(zoom + delta);
            } else {
                map.setZoomAround(this._lastMousePos, zoom + delta);
            }
        }
    });

    L.Map.addInitHook('addHandler', 'scrollWheelZoom', L.Map.ScrollWheelZoom);


    /*
     * Extends the event handling code with double tap support for mobile browsers.
     */

    L.extend(L.DomEvent, {

        _touchstart: L.Browser.msPointer ? 'MSPointerDown' : L.Browser.pointer ? 'pointerdown' : 'touchstart',
        _touchend: L.Browser.msPointer ? 'MSPointerUp' : L.Browser.pointer ? 'pointerup' : 'touchend',

        // inspired by Zepto touch code by Thomas Fuchs
        addDoubleTapListener: function (obj, handler, id) {
            var last,
                doubleTap = false,
                delay = 250,
                touch,
                pre = '_leaflet_',
                touchstart = this._touchstart,
                touchend = this._touchend,
                trackedTouches = [];

            function onTouchStart(e) {
                var count;

                if (L.Browser.pointer) {
                    trackedTouches.push(e.pointerId);
                    count = trackedTouches.length;
                } else {
                    count = e.touches.length;
                }
                if (count > 1) {
                    return;
                }

                var now = Date.now(),
                    delta = now - (last || now);

                touch = e.touches ? e.touches[0] : e;
                doubleTap = (delta > 0 && delta <= delay);
                last = now;
            }

            function onTouchEnd(e) {
                if (L.Browser.pointer) {
                    var idx = trackedTouches.indexOf(e.pointerId);
                    if (idx === -1) {
                        return;
                    }
                    trackedTouches.splice(idx, 1);
                }

                if (doubleTap) {
                    if (L.Browser.pointer) {
                        // work around .type being readonly with MSPointer* events
                        var newTouch = {},
                            prop;

                        // jshint forin:false
                        for (var i in touch) {
                            prop = touch[i];
                            if (typeof prop === 'function') {
                                newTouch[i] = prop.bind(touch);
                            } else {
                                newTouch[i] = prop;
                            }
                        }
                        touch = newTouch;
                    }
                    touch.type = 'dblclick';
                    handler(touch);
                    last = null;
                }
            }

            obj[pre + touchstart + id] = onTouchStart;
            obj[pre + touchend + id] = onTouchEnd;

            // on pointer we need to listen on the document, otherwise a drag starting on the map and moving off screen
            // will not come through to us, so we will lose track of how many touches are ongoing
            var endElement = L.Browser.pointer ? document.documentElement : obj;

            obj.addEventListener(touchstart, onTouchStart, false);
            endElement.addEventListener(touchend, onTouchEnd, false);

            if (L.Browser.pointer) {
                endElement.addEventListener(L.DomEvent.POINTER_CANCEL, onTouchEnd, false);
            }

            return this;
        },

        removeDoubleTapListener: function (obj, id) {
            var pre = '_leaflet_';

            obj.removeEventListener(this._touchstart, obj[pre + this._touchstart + id], false);
            (L.Browser.pointer ? document.documentElement : obj).removeEventListener(
                this._touchend, obj[pre + this._touchend + id], false);

            if (L.Browser.pointer) {
                document.documentElement.removeEventListener(L.DomEvent.POINTER_CANCEL, obj[pre + this._touchend + id],
                    false);
            }

            return this;
        }
    });


    /*
     * Extends L.DomEvent to provide touch support for Internet Explorer and Windows-based devices.
     */

    L.extend(L.DomEvent, {

        //static
        POINTER_DOWN: L.Browser.msPointer ? 'MSPointerDown' : 'pointerdown',
        POINTER_MOVE: L.Browser.msPointer ? 'MSPointerMove' : 'pointermove',
        POINTER_UP: L.Browser.msPointer ? 'MSPointerUp' : 'pointerup',
        POINTER_CANCEL: L.Browser.msPointer ? 'MSPointerCancel' : 'pointercancel',

        _pointers: [],
        _pointerDocumentListener: false,

        // Provides a touch events wrapper for (ms)pointer events.
        // Based on changes by veproza https://github.com/CloudMade/Leaflet/pull/1019
        //ref http://www.w3.org/TR/pointerevents/ https://www.w3.org/Bugs/Public/show_bug.cgi?id=22890

        addPointerListener: function (obj, type, handler, id) {

            switch (type) {
                case 'touchstart':
                    return this.addPointerListenerStart(obj, type, handler, id);
                case 'touchend':
                    return this.addPointerListenerEnd(obj, type, handler, id);
                case 'touchmove':
                    return this.addPointerListenerMove(obj, type, handler, id);
                default:
                    throw 'Unknown touch event type';
            }
        },

        addPointerListenerStart: function (obj, type, handler, id) {
            var pre = '_leaflet_',
                pointers = this._pointers;

            var cb = function (e) {

                L.DomEvent.preventDefault(e);

                var alreadyInArray = false;
                for (var i = 0; i < pointers.length; i++) {
                    if (pointers[i].pointerId === e.pointerId) {
                        alreadyInArray = true;
                        break;
                    }
                }
                if (!alreadyInArray) {
                    pointers.push(e);
                }

                e.touches = pointers.slice();
                e.changedTouches = [e];

                handler(e);
            };

            obj[pre + 'touchstart' + id] = cb;
            obj.addEventListener(this.POINTER_DOWN, cb, false);

            // need to also listen for end events to keep the _pointers list accurate
            // this needs to be on the body and never go away
            if (!this._pointerDocumentListener) {
                var internalCb = function (e) {
                    for (var i = 0; i < pointers.length; i++) {
                        if (pointers[i].pointerId === e.pointerId) {
                            pointers.splice(i, 1);
                            break;
                        }
                    }
                };
                //We listen on the documentElement as any drags that end by moving the touch off the screen get fired there
                document.documentElement.addEventListener(this.POINTER_UP, internalCb, false);
                document.documentElement.addEventListener(this.POINTER_CANCEL, internalCb, false);

                this._pointerDocumentListener = true;
            }

            return this;
        },

        addPointerListenerMove: function (obj, type, handler, id) {
            var pre = '_leaflet_',
                touches = this._pointers;

            function cb(e) {

                // don't fire touch moves when mouse isn't down
                if ((e.pointerType === e.MSPOINTER_TYPE_MOUSE || e.pointerType === 'mouse') && e.buttons === 0) {
                    return;
                }

                for (var i = 0; i < touches.length; i++) {
                    if (touches[i].pointerId === e.pointerId) {
                        touches[i] = e;
                        break;
                    }
                }

                e.touches = touches.slice();
                e.changedTouches = [e];

                handler(e);
            }

            obj[pre + 'touchmove' + id] = cb;
            obj.addEventListener(this.POINTER_MOVE, cb, false);

            return this;
        },

        addPointerListenerEnd: function (obj, type, handler, id) {
            var pre = '_leaflet_',
                touches = this._pointers;

            var cb = function (e) {
                for (var i = 0; i < touches.length; i++) {
                    if (touches[i].pointerId === e.pointerId) {
                        touches.splice(i, 1);
                        break;
                    }
                }

                e.touches = touches.slice();
                e.changedTouches = [e];

                handler(e);
            };

            obj[pre + 'touchend' + id] = cb;
            obj.addEventListener(this.POINTER_UP, cb, false);
            obj.addEventListener(this.POINTER_CANCEL, cb, false);

            return this;
        },

        removePointerListener: function (obj, type, id) {
            var pre = '_leaflet_',
                cb = obj[pre + type + id];

            switch (type) {
                case 'touchstart':
                    obj.removeEventListener(this.POINTER_DOWN, cb, false);
                    break;
                case 'touchmove':
                    obj.removeEventListener(this.POINTER_MOVE, cb, false);
                    break;
                case 'touchend':
                    obj.removeEventListener(this.POINTER_UP, cb, false);
                    obj.removeEventListener(this.POINTER_CANCEL, cb, false);
                    break;
            }

            return this;
        }
    });


    /*
     * L.Handler.TouchZoom is used by L.Map to add pinch zoom on supported mobile browsers.
     */

    L.Map.mergeOptions({
        touchZoom: L.Browser.touch && !L.Browser.android23,
        bounceAtZoomLimits: true
    });

    L.Map.TouchZoom = L.Handler.extend({
        addHooks: function () {
            L.DomEvent.on(this._map._container, 'touchstart', this._onTouchStart, this);
        },

        removeHooks: function () {
            L.DomEvent.off(this._map._container, 'touchstart', this._onTouchStart, this);
        },

        _onTouchStart: function (e) {
            var map = this._map;

            if (!e.touches || e.touches.length !== 2 || map._animatingZoom || this._zooming) {
                return;
            }

            var p1 = map.mouseEventToLayerPoint(e.touches[0]),
                p2 = map.mouseEventToLayerPoint(e.touches[1]),
                viewCenter = map._getCenterLayerPoint();

            this._startCenter = p1.add(p2)._divideBy(2);
            this._startDist = p1.distanceTo(p2);

            this._moved = false;
            this._zooming = true;

            this._centerOffset = viewCenter.subtract(this._startCenter);

            if (map._panAnim) {
                map._panAnim.stop();
            }

            L.DomEvent
                .on(document, 'touchmove', this._onTouchMove, this)
                .on(document, 'touchend', this._onTouchEnd, this);

            L.DomEvent.preventDefault(e);
        },

        _onTouchMove: function (e) {
            var map = this._map;

            if (!e.touches || e.touches.length !== 2 || !this._zooming) {
                return;
            }

            var p1 = map.mouseEventToLayerPoint(e.touches[0]),
                p2 = map.mouseEventToLayerPoint(e.touches[1]);

            this._scale = p1.distanceTo(p2) / this._startDist;
            this._delta = p1._add(p2)._divideBy(2)._subtract(this._startCenter);

            if (this._scale === 1) {
                return;
            }

            if (!map.options.bounceAtZoomLimits) {
                if ((map.getZoom() === map.getMinZoom() && this._scale < 1) ||
                    (map.getZoom() === map.getMaxZoom() && this._scale > 1)) {
                    return;
                }
            }

            if (!this._moved) {
                L.DomUtil.addClass(map._mapPane, 'leaflet-touching');

                map
                    .fire('movestart')
                    .fire('zoomstart');

                this._moved = true;
            }

            L.Util.cancelAnimFrame(this._animRequest);
            this._animRequest = L.Util.requestAnimFrame(
                this._updateOnMove, this, true, this._map._container);

            L.DomEvent.preventDefault(e);
        },

        _updateOnMove: function () {
            var map = this._map,
                origin = this._getScaleOrigin(),
                center = map.layerPointToLatLng(origin),
                zoom = map.getScaleZoom(this._scale);

            map._animateZoom(center, zoom, this._startCenter, this._scale, this._delta, false, true);
        },

        _onTouchEnd: function () {
            if (!this._moved || !this._zooming) {
                this._zooming = false;
                return;
            }

            var map = this._map;

            this._zooming = false;
            L.DomUtil.removeClass(map._mapPane, 'leaflet-touching');
            L.Util.cancelAnimFrame(this._animRequest);

            L.DomEvent
                .off(document, 'touchmove', this._onTouchMove)
                .off(document, 'touchend', this._onTouchEnd);

            var origin = this._getScaleOrigin(),
                center = map.layerPointToLatLng(origin),

                oldZoom = map.getZoom(),
                floatZoomDelta = map.getScaleZoom(this._scale) - oldZoom,
                roundZoomDelta = (floatZoomDelta > 0 ?
                    Math.ceil(floatZoomDelta) : Math.floor(floatZoomDelta)),

                zoom = map._limitZoom(oldZoom + roundZoomDelta),
                scale = map.getZoomScale(zoom) / this._scale;

            map._animateZoom(center, zoom, origin, scale);
        },

        _getScaleOrigin: function () {
            var centerOffset = this._centerOffset.subtract(this._delta).divideBy(this._scale);
            return this._startCenter.add(centerOffset);
        }
    });

    L.Map.addInitHook('addHandler', 'touchZoom', L.Map.TouchZoom);


    /*
     * L.Map.Tap is used to enable mobile hacks like quick taps and long hold.
     */

    L.Map.mergeOptions({
        tap: true,
        tapTolerance: 15
    });

    L.Map.Tap = L.Handler.extend({
        addHooks: function () {
            L.DomEvent.on(this._map._container, 'touchstart', this._onDown, this);
        },

        removeHooks: function () {
            L.DomEvent.off(this._map._container, 'touchstart', this._onDown, this);
        },

        _onDown: function (e) {
            if (!e.touches) {
                return;
            }

            L.DomEvent.preventDefault(e);

            this._fireClick = true;

            // don't simulate click or track longpress if more than 1 touch
            if (e.touches.length > 1) {
                this._fireClick = false;
                clearTimeout(this._holdTimeout);
                return;
            }

            var first = e.touches[0],
                el = first.target;

            this._startPos = this._newPos = new L.Point(first.clientX, first.clientY);

            // if touching a link, highlight it
            if (el.tagName && el.tagName.toLowerCase() === 'a') {
                L.DomUtil.addClass(el, 'leaflet-active');
            }

            // simulate long hold but setting a timeout
            this._holdTimeout = setTimeout(L.bind(function () {
                if (this._isTapValid()) {
                    this._fireClick = false;
                    this._onUp();
                    this._simulateEvent('contextmenu', first);
                }
            }, this), 1000);

            L.DomEvent
                .on(document, 'touchmove', this._onMove, this)
                .on(document, 'touchend', this._onUp, this);
        },

        _onUp: function (e) {
            clearTimeout(this._holdTimeout);

            L.DomEvent
                .off(document, 'touchmove', this._onMove, this)
                .off(document, 'touchend', this._onUp, this);

            if (this._fireClick && e && e.changedTouches) {

                var first = e.changedTouches[0],
                    el = first.target;

                if (el && el.tagName && el.tagName.toLowerCase() === 'a') {
                    L.DomUtil.removeClass(el, 'leaflet-active');
                }

                // simulate click if the touch didn't move too much
                if (this._isTapValid()) {
                    this._simulateEvent('click', first);
                }
            }
        },

        _isTapValid: function () {
            return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance;
        },

        _onMove: function (e) {
            var first = e.touches[0];
            this._newPos = new L.Point(first.clientX, first.clientY);
        },

        _simulateEvent: function (type, e) {
            var simulatedEvent = document.createEvent('MouseEvents');

            simulatedEvent._simulated = true;
            e.target._simulatedClick = true;

            simulatedEvent.initMouseEvent(
                type, true, true, window, 1,
                e.screenX, e.screenY,
                e.clientX, e.clientY,
                false, false, false, false, 0, null);

            e.target.dispatchEvent(simulatedEvent);
        }
    });

    if (L.Browser.touch && !L.Browser.pointer) {
        L.Map.addInitHook('addHandler', 'tap', L.Map.Tap);
    }


    /*
     * L.Handler.ShiftDragZoom is used to add shift-drag zoom interaction to the map
     * (zoom to a selected bounding box), enabled by default.
     */

    L.Map.mergeOptions({
        boxZoom: true
    });

    L.Map.BoxZoom = L.Handler.extend({
        initialize: function (map) {
            this._map = map;
            this._container = map._container;
            this._pane = map._panes.overlayPane;
            this._moved = false;
        },

        addHooks: function () {
            L.DomEvent.on(this._container, 'mousedown', this._onMouseDown, this);
        },

        removeHooks: function () {
            L.DomEvent.off(this._container, 'mousedown', this._onMouseDown);
            this._moved = false;
        },

        moved: function () {
            return this._moved;
        },

        _onMouseDown: function (e) {
            this._moved = false;

            if (!e.shiftKey || ((e.which !== 1) && (e.button !== 1))) {
                return false;
            }

            L.DomUtil.disableTextSelection();
            L.DomUtil.disableImageDrag();

            this._startLayerPoint = this._map.mouseEventToLayerPoint(e);

            L.DomEvent
                .on(document, 'mousemove', this._onMouseMove, this)
                .on(document, 'mouseup', this._onMouseUp, this)
                .on(document, 'keydown', this._onKeyDown, this);
        },

        _onMouseMove: function (e) {
            if (!this._moved) {
                this._box = L.DomUtil.create('div', 'leaflet-zoom-box', this._pane);
                L.DomUtil.setPosition(this._box, this._startLayerPoint);

                //TODO refactor: move cursor to styles
                this._container.style.cursor = 'crosshair';
                this._map.fire('boxzoomstart');
            }

            var startPoint = this._startLayerPoint,
                box = this._box,

                layerPoint = this._map.mouseEventToLayerPoint(e),
                offset = layerPoint.subtract(startPoint),

                newPos = new L.Point(
                    Math.min(layerPoint.x, startPoint.x),
                    Math.min(layerPoint.y, startPoint.y));

            L.DomUtil.setPosition(box, newPos);

            this._moved = true;

            // TODO refactor: remove hardcoded 4 pixels
            box.style.width = (Math.max(0, Math.abs(offset.x) - 4)) + 'px';
            box.style.height = (Math.max(0, Math.abs(offset.y) - 4)) + 'px';
        },

        _finish: function () {
            if (this._moved) {
                this._pane.removeChild(this._box);
                this._container.style.cursor = '';
            }

            L.DomUtil.enableTextSelection();
            L.DomUtil.enableImageDrag();

            L.DomEvent
                .off(document, 'mousemove', this._onMouseMove)
                .off(document, 'mouseup', this._onMouseUp)
                .off(document, 'keydown', this._onKeyDown);
        },

        _onMouseUp: function (e) {

            this._finish();

            var map = this._map,
                layerPoint = map.mouseEventToLayerPoint(e);

            if (this._startLayerPoint.equals(layerPoint)) {
                return;
            }

            var bounds = new L.LatLngBounds(
                map.layerPointToLatLng(this._startLayerPoint),
                map.layerPointToLatLng(layerPoint));

            map.fitBounds(bounds);

            map.fire('boxzoomend', {
                boxZoomBounds: bounds
            });
        },

        _onKeyDown: function (e) {
            if (e.keyCode === 27) {
                this._finish();
            }
        }
    });

    L.Map.addInitHook('addHandler', 'boxZoom', L.Map.BoxZoom);


    /*
     * L.Map.Keyboard is handling keyboard interaction with the map, enabled by default.
     */

    L.Map.mergeOptions({
        keyboard: true,
        keyboardPanOffset: 80,
        keyboardZoomOffset: 1
    });

    L.Map.Keyboard = L.Handler.extend({

        keyCodes: {
            left: [37],
            right: [39],
            down: [40],
            up: [38],
            zoomIn: [187, 107, 61, 171],
            zoomOut: [189, 109, 173]
        },

        initialize: function (map) {
            this._map = map;

            this._setPanOffset(map.options.keyboardPanOffset);
            this._setZoomOffset(map.options.keyboardZoomOffset);
        },

        addHooks: function () {
            var container = this._map._container;

            // make the container focusable by tabbing
            if (container.tabIndex === -1) {
                container.tabIndex = '0';
            }

            L.DomEvent
                .on(container, 'focus', this._onFocus, this)
                .on(container, 'blur', this._onBlur, this)
                .on(container, 'mousedown', this._onMouseDown, this);

            this._map
                .on('focus', this._addHooks, this)
                .on('blur', this._removeHooks, this);
        },

        removeHooks: function () {
            this._removeHooks();

            var container = this._map._container;

            L.DomEvent
                .off(container, 'focus', this._onFocus, this)
                .off(container, 'blur', this._onBlur, this)
                .off(container, 'mousedown', this._onMouseDown, this);

            this._map
                .off('focus', this._addHooks, this)
                .off('blur', this._removeHooks, this);
        },

        _onMouseDown: function () {
            if (this._focused) {
                return;
            }

            var body = document.body,
                docEl = document.documentElement,
                top = body.scrollTop || docEl.scrollTop,
                left = body.scrollLeft || docEl.scrollLeft;

            this._map._container.focus();

            window.scrollTo(left, top);
        },

        _onFocus: function () {
            this._focused = true;
            this._map.fire('focus');
        },

        _onBlur: function () {
            this._focused = false;
            this._map.fire('blur');
        },

        _setPanOffset: function (pan) {
            var keys = this._panKeys = {},
                codes = this.keyCodes,
                i, len;

            for (i = 0, len = codes.left.length; i < len; i++) {
                keys[codes.left[i]] = [-1 * pan, 0];
            }
            for (i = 0, len = codes.right.length; i < len; i++) {
                keys[codes.right[i]] = [pan, 0];
            }
            for (i = 0, len = codes.down.length; i < len; i++) {
                keys[codes.down[i]] = [0, pan];
            }
            for (i = 0, len = codes.up.length; i < len; i++) {
                keys[codes.up[i]] = [0, -1 * pan];
            }
        },

        _setZoomOffset: function (zoom) {
            var keys = this._zoomKeys = {},
                codes = this.keyCodes,
                i, len;

            for (i = 0, len = codes.zoomIn.length; i < len; i++) {
                keys[codes.zoomIn[i]] = zoom;
            }
            for (i = 0, len = codes.zoomOut.length; i < len; i++) {
                keys[codes.zoomOut[i]] = -zoom;
            }
        },

        _addHooks: function () {
            L.DomEvent.on(document, 'keydown', this._onKeyDown, this);
        },

        _removeHooks: function () {
            L.DomEvent.off(document, 'keydown', this._onKeyDown, this);
        },

        _onKeyDown: function (e) {
            var key = e.keyCode,
                map = this._map;

            if (key in this._panKeys) {

                if (map._panAnim && map._panAnim._inProgress) {
                    return;
                }

                map.panBy(this._panKeys[key]);

                if (map.options.maxBounds) {
                    map.panInsideBounds(map.options.maxBounds);
                }

            } else if (key in this._zoomKeys) {
                map.setZoom(map.getZoom() + this._zoomKeys[key]);

            } else {
                return;
            }

            L.DomEvent.stop(e);
        }
    });

    L.Map.addInitHook('addHandler', 'keyboard', L.Map.Keyboard);


    /*
     * L.Handler.MarkerDrag is used internally by L.Marker to make the markers draggable.
     */

    L.Handler.MarkerDrag = L.Handler.extend({
        initialize: function (marker) {
            this._marker = marker;
        },

        addHooks: function () {
            var icon = this._marker._icon;
            if (!this._draggable) {
                this._draggable = new L.Draggable(icon, icon);
            }

            this._draggable
                .on('dragstart', this._onDragStart, this)
                .on('drag', this._onDrag, this)
                .on('dragend', this._onDragEnd, this);
            this._draggable.enable();
            L.DomUtil.addClass(this._marker._icon, 'leaflet-marker-draggable');
        },

        removeHooks: function () {
            this._draggable
                .off('dragstart', this._onDragStart, this)
                .off('drag', this._onDrag, this)
                .off('dragend', this._onDragEnd, this);

            this._draggable.disable();
            L.DomUtil.removeClass(this._marker._icon, 'leaflet-marker-draggable');
        },

        moved: function () {
            return this._draggable && this._draggable._moved;
        },

        _onDragStart: function () {
            this._marker
                .closePopup()
                .fire('movestart')
                .fire('dragstart');
        },

        _onDrag: function () {
            var marker = this._marker,
                shadow = marker._shadow,
                iconPos = L.DomUtil.getPosition(marker._icon),
                latlng = marker._map.layerPointToLatLng(iconPos);

            // update shadow position
            if (shadow) {
                L.DomUtil.setPosition(shadow, iconPos);
            }

            marker._latlng = latlng;

            marker
                .fire('move', {latlng: latlng})
                .fire('drag');
        },

        _onDragEnd: function (e) {
            this._marker
                .fire('moveend')
                .fire('dragend', e);
        }
    });


    /*
     * L.Control is a base class for implementing map controls. Handles positioning.
     * All other controls extend from this class.
     */

    L.Control = L.Class.extend({
        options: {
            position: 'topright'
        },

        initialize: function (options) {
            L.setOptions(this, options);
        },

        getPosition: function () {
            return this.options.position;
        },

        setPosition: function (position) {
            var map = this._map;

            if (map) {
                map.removeControl(this);
            }

            this.options.position = position;

            if (map) {
                map.addControl(this);
            }

            return this;
        },

        getContainer: function () {
            return this._container;
        },

        addTo: function (map) {
            this._map = map;

            var container = this._container = this.onAdd(map),
                pos = this.getPosition(),
                corner = map._controlCorners[pos];

            L.DomUtil.addClass(container, 'leaflet-control');

            if (pos.indexOf('bottom') !== -1) {
                corner.insertBefore(container, corner.firstChild);
            } else {
                corner.appendChild(container);
            }

            return this;
        },

        removeFrom: function (map) {
            var pos = this.getPosition(),
                corner = map._controlCorners[pos];

            corner.removeChild(this._container);
            this._map = null;

            if (this.onRemove) {
                this.onRemove(map);
            }

            return this;
        },

        _refocusOnMap: function () {
            if (this._map) {
                this._map.getContainer().focus();
            }
        }
    });

    L.control = function (options) {
        return new L.Control(options);
    };


// adds control-related methods to L.Map

    L.Map.include({
        addControl: function (control) {
            control.addTo(this);
            return this;
        },

        removeControl: function (control) {
            control.removeFrom(this);
            return this;
        },

        _initControlPos: function () {
            var corners = this._controlCorners = {},
                l = 'leaflet-',
                container = this._controlContainer =
                    L.DomUtil.create('div', l + 'control-container', this._container);

            function createCorner(vSide, hSide) {
                var className = l + vSide + ' ' + l + hSide;

                corners[vSide + hSide] = L.DomUtil.create('div', className, container);
            }

            createCorner('top', 'left');
            createCorner('top', 'right');
            createCorner('bottom', 'left');
            createCorner('bottom', 'right');
        },

        _clearControlPos: function () {
            this._container.removeChild(this._controlContainer);
        }
    });


    /*
     * L.Control.Zoom is used for the default zoom buttons on the map.
     */

    L.Control.Zoom = L.Control.extend({
        options: {
            position: 'topleft',
            zoomInText: '+',
            zoomInTitle: 'Zoom in',
            zoomOutText: '-',
            zoomOutTitle: 'Zoom out'
        },

        onAdd: function (map) {
            var zoomName = 'leaflet-control-zoom',
                container = L.DomUtil.create('div', zoomName + ' leaflet-bar');

            this._map = map;

            this._zoomInButton = this._createButton(
                this.options.zoomInText, this.options.zoomInTitle,
                zoomName + '-in', container, this._zoomIn, this);
            this._zoomOutButton = this._createButton(
                this.options.zoomOutText, this.options.zoomOutTitle,
                zoomName + '-out', container, this._zoomOut, this);

            this._updateDisabled();
            map.on('zoomend zoomlevelschange', this._updateDisabled, this);

            return container;
        },

        onRemove: function (map) {
            map.off('zoomend zoomlevelschange', this._updateDisabled, this);
        },

        _zoomIn: function (e) {
            this._map.zoomIn(e.shiftKey ? 3 : 1);
        },

        _zoomOut: function (e) {
            this._map.zoomOut(e.shiftKey ? 3 : 1);
        },

        _createButton: function (html, title, className, container, fn, context) {
            var link = L.DomUtil.create('a', className, container);
            link.innerHTML = html;
            link.href = '#';
            link.title = title;

            var stop = L.DomEvent.stopPropagation;

            L.DomEvent
                .on(link, 'click', stop)
                .on(link, 'mousedown', stop)
                .on(link, 'dblclick', stop)
                .on(link, 'click', L.DomEvent.preventDefault)
                .on(link, 'click', fn, context)
                .on(link, 'click', this._refocusOnMap, context);

            return link;
        },

        _updateDisabled: function () {
            var map = this._map,
                className = 'leaflet-disabled';

            L.DomUtil.removeClass(this._zoomInButton, className);
            L.DomUtil.removeClass(this._zoomOutButton, className);

            if (map._zoom === map.getMinZoom()) {
                L.DomUtil.addClass(this._zoomOutButton, className);
            }
            if (map._zoom === map.getMaxZoom()) {
                L.DomUtil.addClass(this._zoomInButton, className);
            }
        }
    });

    L.Map.mergeOptions({
        zoomControl: true
    });

    L.Map.addInitHook(function () {
        if (this.options.zoomControl) {
            this.zoomControl = new L.Control.Zoom();
            this.addControl(this.zoomControl);
        }
    });

    L.control.zoom = function (options) {
        return new L.Control.Zoom(options);
    };


    /*
     * L.Control.Attribution is used for displaying attribution on the map (added by default).
     */

    L.Control.Attribution = L.Control.extend({
        options: {
            position: 'bottomright',
            prefix: '<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'
        },

        initialize: function (options) {
            L.setOptions(this, options);

            this._attributions = {};
        },

        onAdd: function (map) {
            this._container = L.DomUtil.create('div', 'leaflet-control-attribution');
            L.DomEvent.disableClickPropagation(this._container);

            for (var i in map._layers) {
                if (map._layers[i].getAttribution) {
                    this.addAttribution(map._layers[i].getAttribution());
                }
            }

            map
                .on('layeradd', this._onLayerAdd, this)
                .on('layerremove', this._onLayerRemove, this);

            this._update();

            return this._container;
        },

        onRemove: function (map) {
            map
                .off('layeradd', this._onLayerAdd)
                .off('layerremove', this._onLayerRemove);

        },

        setPrefix: function (prefix) {
            this.options.prefix = prefix;
            this._update();
            return this;
        },

        addAttribution: function (text) {
            if (!text) {
                return;
            }

            if (!this._attributions[text]) {
                this._attributions[text] = 0;
            }
            this._attributions[text]++;

            this._update();

            return this;
        },

        removeAttribution: function (text) {
            if (!text) {
                return;
            }

            if (this._attributions[text]) {
                this._attributions[text]--;
                this._update();
            }

            return this;
        },

        _update: function () {
            if (!this._map) {
                return;
            }

            var attribs = [];

            for (var i in this._attributions) {
                if (this._attributions[i]) {
                    attribs.push(i);
                }
            }

            var prefixAndAttribs = [];

            if (this.options.prefix) {
                prefixAndAttribs.push(this.options.prefix);
            }
            if (attribs.length) {
                prefixAndAttribs.push(attribs.join(', '));
            }

            this._container.innerHTML = prefixAndAttribs.join(' | ');
        },

        _onLayerAdd: function (e) {
            if (e.layer.getAttribution) {
                this.addAttribution(e.layer.getAttribution());
            }
        },

        _onLayerRemove: function (e) {
            if (e.layer.getAttribution) {
                this.removeAttribution(e.layer.getAttribution());
            }
        }
    });

    L.Map.mergeOptions({
        attributionControl: true
    });

    L.Map.addInitHook(function () {
        if (this.options.attributionControl) {
            this.attributionControl = (new L.Control.Attribution()).addTo(this);
        }
    });

    L.control.attribution = function (options) {
        return new L.Control.Attribution(options);
    };


    /*
     * L.Control.Scale is used for displaying metric/imperial scale on the map.
     */

    L.Control.Scale = L.Control.extend({
        options: {
            position: 'bottomleft',
            maxWidth: 100,
            metric: true,
            imperial: true,
            updateWhenIdle: false
        },

        onAdd: function (map) {
            this._map = map;

            var className = 'leaflet-control-scale',
                container = L.DomUtil.create('div', className),
                options = this.options;

            this._addScales(options, className, container);

            map.on(options.updateWhenIdle ? 'moveend' : 'move', this._update, this);
            map.whenReady(this._update, this);

            return container;
        },

        onRemove: function (map) {
            map.off(this.options.updateWhenIdle ? 'moveend' : 'move', this._update, this);
        },

        _addScales: function (options, className, container) {
            if (options.metric) {
                this._mScale = L.DomUtil.create('div', className + '-line', container);
            }
            if (options.imperial) {
                this._iScale = L.DomUtil.create('div', className + '-line', container);
            }
        },

        _update: function () {
            var bounds = this._map.getBounds(),
                centerLat = bounds.getCenter().lat,
                halfWorldMeters = 6378137 * Math.PI * Math.cos(centerLat * Math.PI / 180),
                dist = halfWorldMeters * (bounds.getNorthEast().lng - bounds.getSouthWest().lng) / 180,

                size = this._map.getSize(),
                options = this.options,
                maxMeters = 0;

            if (size.x > 0) {
                maxMeters = dist * (options.maxWidth / size.x);
            }

            this._updateScales(options, maxMeters);
        },

        _updateScales: function (options, maxMeters) {
            if (options.metric && maxMeters) {
                this._updateMetric(maxMeters);
            }

            if (options.imperial && maxMeters) {
                this._updateImperial(maxMeters);
            }
        },

        _updateMetric: function (maxMeters) {
            var meters = this._getRoundNum(maxMeters);

            this._mScale.style.width = this._getScaleWidth(meters / maxMeters) + 'px';
            this._mScale.innerHTML = meters < 1000 ? meters + ' m' : (meters / 1000) + ' km';
        },

        _updateImperial: function (maxMeters) {
            var maxFeet = maxMeters * 3.2808399,
                scale = this._iScale,
                maxMiles, miles, feet;

            if (maxFeet > 5280) {
                maxMiles = maxFeet / 5280;
                miles = this._getRoundNum(maxMiles);

                scale.style.width = this._getScaleWidth(miles / maxMiles) + 'px';
                scale.innerHTML = miles + ' mi';

            } else {
                feet = this._getRoundNum(maxFeet);

                scale.style.width = this._getScaleWidth(feet / maxFeet) + 'px';
                scale.innerHTML = feet + ' ft';
            }
        },

        _getScaleWidth: function (ratio) {
            return Math.round(this.options.maxWidth * ratio) - 10;
        },

        _getRoundNum: function (num) {
            var pow10 = Math.pow(10, (Math.floor(num) + '').length - 1),
                d = num / pow10;

            d = d >= 10 ? 10 : d >= 5 ? 5 : d >= 3 ? 3 : d >= 2 ? 2 : 1;

            return pow10 * d;
        }
    });

    L.control.scale = function (options) {
        return new L.Control.Scale(options);
    };


    /*
     * L.Control.Layers is a control to allow users to switch between different layers on the map.
     */

    L.Control.Layers = L.Control.extend({
        options: {
            collapsed: true,
            position: 'topright',
            autoZIndex: true
        },

        initialize: function (baseLayers, overlays, options) {
            L.setOptions(this, options);

            this._layers = {};
            this._lastZIndex = 0;
            this._handlingClick = false;

            for (var i in baseLayers) {
                this._addLayer(baseLayers[i], i);
            }

            for (i in overlays) {
                this._addLayer(overlays[i], i, true);
            }
        },

        onAdd: function (map) {
            this._initLayout();
            this._update();

            map
                .on('layeradd', this._onLayerChange, this)
                .on('layerremove', this._onLayerChange, this);

            return this._container;
        },

        onRemove: function (map) {
            map
                .off('layeradd', this._onLayerChange, this)
                .off('layerremove', this._onLayerChange, this);
        },

        addBaseLayer: function (layer, name) {
            this._addLayer(layer, name);
            this._update();
            return this;
        },

        addOverlay: function (layer, name) {
            this._addLayer(layer, name, true);
            this._update();
            return this;
        },

        removeLayer: function (layer) {
            var id = L.stamp(layer);
            delete this._layers[id];
            this._update();
            return this;
        },

        _initLayout: function () {
            var className = 'leaflet-control-layers',
                container = this._container = L.DomUtil.create('div', className);

            //Makes this work on IE10 Touch devices by stopping it from firing a mouseout event when the touch is released
            container.setAttribute('aria-haspopup', true);

            if (!L.Browser.touch) {
                L.DomEvent
                    .disableClickPropagation(container)
                    .disableScrollPropagation(container);
            } else {
                L.DomEvent.on(container, 'click', L.DomEvent.stopPropagation);
            }

            var form = this._form = L.DomUtil.create('form', className + '-list');

            if (this.options.collapsed) {
                if (!L.Browser.android) {
                    L.DomEvent
                        .on(container, 'mouseover', this._expand, this)
                        .on(container, 'mouseout', this._collapse, this);
                }
                var link = this._layersLink = L.DomUtil.create('a', className + '-toggle', container);
                link.href = '#';
                link.title = 'Layers';

                if (L.Browser.touch) {
                    L.DomEvent
                        .on(link, 'click', L.DomEvent.stop)
                        .on(link, 'click', this._expand, this);
                }
                else {
                    L.DomEvent.on(link, 'focus', this._expand, this);
                }
                //Work around for Firefox android issue https://github.com/Leaflet/Leaflet/issues/2033
                L.DomEvent.on(form, 'click', function () {
                    setTimeout(L.bind(this._onInputClick, this), 0);
                }, this);

                this._map.on('click', this._collapse, this);
                // TODO keyboard accessibility
            } else {
                this._expand();
            }

            this._baseLayersList = L.DomUtil.create('div', className + '-base', form);
            this._separator = L.DomUtil.create('div', className + '-separator', form);
            this._overlaysList = L.DomUtil.create('div', className + '-overlays', form);

            container.appendChild(form);
        },

        _addLayer: function (layer, name, overlay) {
            var id = L.stamp(layer);

            this._layers[id] = {
                layer: layer,
                name: name,
                overlay: overlay
            };

            if (this.options.autoZIndex && layer.setZIndex) {
                this._lastZIndex++;
                layer.setZIndex(this._lastZIndex);
            }
        },

        _update: function () {
            if (!this._container) {
                return;
            }

            this._baseLayersList.innerHTML = '';
            this._overlaysList.innerHTML = '';

            var baseLayersPresent = false,
                overlaysPresent = false,
                i, obj;

            for (i in this._layers) {
                obj = this._layers[i];
                this._addItem(obj);
                overlaysPresent = overlaysPresent || obj.overlay;
                baseLayersPresent = baseLayersPresent || !obj.overlay;
            }

            this._separator.style.display = overlaysPresent && baseLayersPresent ? '' : 'none';
        },

        _onLayerChange: function (e) {
            var obj = this._layers[L.stamp(e.layer)];

            if (!obj) {
                return;
            }

            if (!this._handlingClick) {
                this._update();
            }

            var type = obj.overlay ?
                (e.type === 'layeradd' ? 'overlayadd' : 'overlayremove') :
                (e.type === 'layeradd' ? 'baselayerchange' : null);

            if (type) {
                this._map.fire(type, obj);
            }
        },

        // IE7 bugs out if you create a radio dynamically, so you have to do it this hacky way (see http://bit.ly/PqYLBe)
        _createRadioElement: function (name, checked) {

            var radioHtml = '<input type="radio" class="leaflet-control-layers-selector" name="' + name + '"';
            if (checked) {
                radioHtml += ' checked="checked"';
            }
            radioHtml += '/>';

            var radioFragment = document.createElement('div');
            radioFragment.innerHTML = radioHtml;

            return radioFragment.firstChild;
        },

        _addItem: function (obj) {
            var label = document.createElement('label'),
                input,
                checked = this._map.hasLayer(obj.layer);

            if (obj.overlay) {
                input = document.createElement('input');
                input.type = 'checkbox';
                input.className = 'leaflet-control-layers-selector';
                input.defaultChecked = checked;
            } else {
                input = this._createRadioElement('leaflet-base-layers', checked);
            }

            input.layerId = L.stamp(obj.layer);

            L.DomEvent.on(input, 'click', this._onInputClick, this);

            var name = document.createElement('span');
            name.innerHTML = ' ' + obj.name;

            label.appendChild(input);
            label.appendChild(name);

            var container = obj.overlay ? this._overlaysList : this._baseLayersList;
            container.appendChild(label);

            return label;
        },

        _onInputClick: function () {
            var i, input, obj,
                inputs = this._form.getElementsByTagName('input'),
                inputsLen = inputs.length;

            this._handlingClick = true;

            for (i = 0; i < inputsLen; i++) {
                input = inputs[i];
                obj = this._layers[input.layerId];

                if (input.checked && !this._map.hasLayer(obj.layer)) {
                    this._map.addLayer(obj.layer);

                } else if (!input.checked && this._map.hasLayer(obj.layer)) {
                    this._map.removeLayer(obj.layer);
                }
            }

            this._handlingClick = false;

            this._refocusOnMap();
        },

        _expand: function () {
            L.DomUtil.addClass(this._container, 'leaflet-control-layers-expanded');
        },

        _collapse: function () {
            this._container.className = this._container.className.replace(' leaflet-control-layers-expanded', '');
        }
    });

    L.control.layers = function (baseLayers, overlays, options) {
        return new L.Control.Layers(baseLayers, overlays, options);
    };


    /*
     * L.PosAnimation is used by Leaflet internally for pan animations.
     */

    L.PosAnimation = L.Class.extend({
        includes: L.Mixin.Events,

        run: function (el, newPos, duration, easeLinearity) { // (HTMLElement, Point[, Number, Number])
            this.stop();

            this._el = el;
            this._inProgress = true;
            this._newPos = newPos;

            this.fire('start');

            el.style[L.DomUtil.TRANSITION] = 'all ' + (duration || 0.25) +
            's cubic-bezier(0,0,' + (easeLinearity || 0.5) + ',1)';

            L.DomEvent.on(el, L.DomUtil.TRANSITION_END, this._onTransitionEnd, this);
            L.DomUtil.setPosition(el, newPos);

            // toggle reflow, Chrome flickers for some reason if you don't do this
            L.Util.falseFn(el.offsetWidth);

            // there's no native way to track value updates of transitioned properties, so we imitate this
            this._stepTimer = setInterval(L.bind(this._onStep, this), 50);
        },

        stop: function () {
            if (!this._inProgress) {
                return;
            }

            // if we just removed the transition property, the element would jump to its final position,
            // so we need to make it stay at the current position

            L.DomUtil.setPosition(this._el, this._getPos());
            this._onTransitionEnd();
            L.Util.falseFn(this._el.offsetWidth); // force reflow in case we are about to start a new animation
        },

        _onStep: function () {
            var stepPos = this._getPos();
            if (!stepPos) {
                this._onTransitionEnd();
                return;
            }
            // jshint camelcase: false
            // make L.DomUtil.getPosition return intermediate position value during animation
            this._el._leaflet_pos = stepPos;

            this.fire('step');
        },

        // you can't easily get intermediate values of properties animated with CSS3 Transitions,
        // we need to parse computed style (in case of transform it returns matrix string)

        _transformRe: /([-+]?(?:\d*\.)?\d+)\D*, ([-+]?(?:\d*\.)?\d+)\D*\)/,

        _getPos: function () {
            var left, top, matches,
                el = this._el,
                style = window.getComputedStyle(el);

            if (L.Browser.any3d) {
                matches = style[L.DomUtil.TRANSFORM].match(this._transformRe);
                if (!matches) {
                    return;
                }
                left = parseFloat(matches[1]);
                top = parseFloat(matches[2]);
            } else {
                left = parseFloat(style.left);
                top = parseFloat(style.top);
            }

            return new L.Point(left, top, true);
        },

        _onTransitionEnd: function () {
            L.DomEvent.off(this._el, L.DomUtil.TRANSITION_END, this._onTransitionEnd, this);

            if (!this._inProgress) {
                return;
            }
            this._inProgress = false;

            this._el.style[L.DomUtil.TRANSITION] = '';

            // jshint camelcase: false
            // make sure L.DomUtil.getPosition returns the final position value after animation
            this._el._leaflet_pos = this._newPos;

            clearInterval(this._stepTimer);

            this.fire('step').fire('end');
        }

    });


    /*
     * Extends L.Map to handle panning animations.
     */

    L.Map.include({

        setView: function (center, zoom, options) {

            zoom = zoom === undefined ? this._zoom : this._limitZoom(zoom);
            center = this._limitCenter(L.latLng(center), zoom, this.options.maxBounds);
            options = options || {};

            if (this._panAnim) {
                this._panAnim.stop();
            }

            if (this._loaded && !options.reset && options !== true) {

                if (options.animate !== undefined) {
                    options.zoom = L.extend({animate: options.animate}, options.zoom);
                    options.pan = L.extend({animate: options.animate}, options.pan);
                }

                // try animating pan or zoom
                var animated = (this._zoom !== zoom) ?
                this._tryAnimatedZoom && this._tryAnimatedZoom(center, zoom, options.zoom) :
                    this._tryAnimatedPan(center, options.pan);

                if (animated) {
                    // prevent resize handler call, the view will refresh after animation anyway
                    clearTimeout(this._sizeTimer);
                    return this;
                }
            }

            // animation didn't start, just reset the map view
            this._resetView(center, zoom);

            return this;
        },

        panBy: function (offset, options) {
            offset = L.point(offset).round();
            options = options || {};

            if (!offset.x && !offset.y) {
                return this;
            }

            if (!this._panAnim) {
                this._panAnim = new L.PosAnimation();

                this._panAnim.on({
                    'step': this._onPanTransitionStep,
                    'end': this._onPanTransitionEnd
                }, this);
            }

            // don't fire movestart if animating inertia
            if (!options.noMoveStart) {
                this.fire('movestart');
            }

            // animate pan unless animate: false specified
            if (options.animate !== false) {
                L.DomUtil.addClass(this._mapPane, 'leaflet-pan-anim');

                var newPos = this._getMapPanePos().subtract(offset);
                this._panAnim.run(this._mapPane, newPos, options.duration || 0.25, options.easeLinearity);
            } else {
                this._rawPanBy(offset);
                this.fire('move').fire('moveend');
            }

            return this;
        },

        _onPanTransitionStep: function () {
            this.fire('move');
        },

        _onPanTransitionEnd: function () {
            L.DomUtil.removeClass(this._mapPane, 'leaflet-pan-anim');
            this.fire('moveend');
        },

        _tryAnimatedPan: function (center, options) {
            // difference between the new and current centers in pixels
            var offset = this._getCenterOffset(center)._floor();

            // don't animate too far unless animate: true specified in options
            if ((options && options.animate) !== true && !this.getSize().contains(offset)) {
                return false;
            }

            this.panBy(offset, options);

            return true;
        }
    });


    /*
     * L.PosAnimation fallback implementation that powers Leaflet pan animations
     * in browsers that don't support CSS3 Transitions.
     */

    L.PosAnimation = L.DomUtil.TRANSITION ? L.PosAnimation : L.PosAnimation.extend({

        run: function (el, newPos, duration, easeLinearity) { // (HTMLElement, Point[, Number, Number])
            this.stop();

            this._el = el;
            this._inProgress = true;
            this._duration = duration || 0.25;
            this._easeOutPower = 1 / Math.max(easeLinearity || 0.5, 0.2);

            this._startPos = L.DomUtil.getPosition(el);
            this._offset = newPos.subtract(this._startPos);
            this._startTime = +new Date();

            this.fire('start');

            this._animate();
        },

        stop: function () {
            if (!this._inProgress) {
                return;
            }

            this._step();
            this._complete();
        },

        _animate: function () {
            // animation loop
            this._animId = L.Util.requestAnimFrame(this._animate, this);
            this._step();
        },

        _step: function () {
            var elapsed = (+new Date()) - this._startTime,
                duration = this._duration * 1000;

            if (elapsed < duration) {
                this._runFrame(this._easeOut(elapsed / duration));
            } else {
                this._runFrame(1);
                this._complete();
            }
        },

        _runFrame: function (progress) {
            var pos = this._startPos.add(this._offset.multiplyBy(progress));
            L.DomUtil.setPosition(this._el, pos);

            this.fire('step');
        },

        _complete: function () {
            L.Util.cancelAnimFrame(this._animId);

            this._inProgress = false;
            this.fire('end');
        },

        _easeOut: function (t) {
            return 1 - Math.pow(1 - t, this._easeOutPower);
        }
    });


    /*
     * Extends L.Map to handle zoom animations.
     */

    L.Map.mergeOptions({
        zoomAnimation: true,
        zoomAnimationThreshold: 4
    });

    if (L.DomUtil.TRANSITION) {

        L.Map.addInitHook(function () {
            // don't animate on browsers without hardware-accelerated transitions or old Android/Opera
            this._zoomAnimated = this.options.zoomAnimation && L.DomUtil.TRANSITION &&
            L.Browser.any3d && !L.Browser.android23 && !L.Browser.mobileOpera;

            // zoom transitions run with the same duration for all layers, so if one of transitionend events
            // happens after starting zoom animation (propagating to the map pane), we know that it ended globally
            if (this._zoomAnimated) {
                L.DomEvent.on(this._mapPane, L.DomUtil.TRANSITION_END, this._catchTransitionEnd, this);
            }
        });
    }

    L.Map.include(!L.DomUtil.TRANSITION ? {} : {

        _catchTransitionEnd: function (e) {
            if (this._animatingZoom && e.propertyName.indexOf('transform') >= 0) {
                this._onZoomTransitionEnd();
            }
        },

        _nothingToAnimate: function () {
            return !this._container.getElementsByClassName('leaflet-zoom-animated').length;
        },

        _tryAnimatedZoom: function (center, zoom, options) {

            if (this._animatingZoom) {
                return true;
            }

            options = options || {};

            // don't animate if disabled, not supported or zoom difference is too large
            if (!this._zoomAnimated || options.animate === false || this._nothingToAnimate() ||
                Math.abs(zoom - this._zoom) > this.options.zoomAnimationThreshold) {
                return false;
            }

            // offset is the pixel coords of the zoom origin relative to the current center
            var scale = this.getZoomScale(zoom),
                offset = this._getCenterOffset(center)._divideBy(1 - 1 / scale),
                origin = this._getCenterLayerPoint()._add(offset);

            // don't animate if the zoom origin isn't within one screen from the current center, unless forced
            if (options.animate !== true && !this.getSize().contains(offset)) {
                return false;
            }

            this
                .fire('movestart')
                .fire('zoomstart');

            this._animateZoom(center, zoom, origin, scale, null, true);

            return true;
        },

        _animateZoom: function (center, zoom, origin, scale, delta, backwards, forTouchZoom) {

            if (!forTouchZoom) {
                this._animatingZoom = true;
            }

            // put transform transition on all layers with leaflet-zoom-animated class
            L.DomUtil.addClass(this._mapPane, 'leaflet-zoom-anim');

            // remember what center/zoom to set after animation
            this._animateToCenter = center;
            this._animateToZoom = zoom;

            // disable any dragging during animation
            if (L.Draggable) {
                L.Draggable._disabled = true;
            }

            L.Util.requestAnimFrame(function () {
                this.fire('zoomanim', {
                    center: center,
                    zoom: zoom,
                    origin: origin,
                    scale: scale,
                    delta: delta,
                    backwards: backwards
                });
            }, this);
        },

        _onZoomTransitionEnd: function () {

            this._animatingZoom = false;

            L.DomUtil.removeClass(this._mapPane, 'leaflet-zoom-anim');

            this._resetView(this._animateToCenter, this._animateToZoom, true, true);

            if (L.Draggable) {
                L.Draggable._disabled = false;
            }
        }
    });


    /*
     Zoom animation logic for L.TileLayer.
     */

    L.TileLayer.include({
        _animateZoom: function (e) {
            if (!this._animating) {
                this._animating = true;
                this._prepareBgBuffer();
            }

            var bg = this._bgBuffer,
                transform = L.DomUtil.TRANSFORM,
                initialTransform = e.delta ? L.DomUtil.getTranslateString(e.delta) : bg.style[transform],
                scaleStr = L.DomUtil.getScaleString(e.scale, e.origin);

            bg.style[transform] = e.backwards ?
            scaleStr + ' ' + initialTransform :
            initialTransform + ' ' + scaleStr;
        },

        _endZoomAnim: function () {
            var front = this._tileContainer,
                bg = this._bgBuffer;

            front.style.visibility = '';
            front.parentNode.appendChild(front); // Bring to fore

            // force reflow
            L.Util.falseFn(bg.offsetWidth);

            this._animating = false;
        },

        _clearBgBuffer: function () {
            var map = this._map;

            if (map && !map._animatingZoom && !map.touchZoom._zooming) {
                this._bgBuffer.innerHTML = '';
                this._bgBuffer.style[L.DomUtil.TRANSFORM] = '';
            }
        },

        _prepareBgBuffer: function () {

            var front = this._tileContainer,
                bg = this._bgBuffer;

            // if foreground layer doesn't have many tiles but bg layer does,
            // keep the existing bg layer and just zoom it some more

            var bgLoaded = this._getLoadedTilesPercentage(bg),
                frontLoaded = this._getLoadedTilesPercentage(front);

            if (bg && bgLoaded > 0.5 && frontLoaded < 0.5) {

                front.style.visibility = 'hidden';
                this._stopLoadingImages(front);
                return;
            }

            // prepare the buffer to become the front tile pane
            bg.style.visibility = 'hidden';
            bg.style[L.DomUtil.TRANSFORM] = '';

            // switch out the current layer to be the new bg layer (and vice-versa)
            this._tileContainer = bg;
            bg = this._bgBuffer = front;

            this._stopLoadingImages(bg);

            //prevent bg buffer from clearing right after zoom
            clearTimeout(this._clearBgBufferTimer);
        },

        _getLoadedTilesPercentage: function (container) {
            var tiles = container.getElementsByTagName('img'),
                i, len, count = 0;

            for (i = 0, len = tiles.length; i < len; i++) {
                if (tiles[i].complete) {
                    count++;
                }
            }
            return count / len;
        },

        // stops loading all tiles in the background layer
        _stopLoadingImages: function (container) {
            var tiles = Array.prototype.slice.call(container.getElementsByTagName('img')),
                i, len, tile;

            for (i = 0, len = tiles.length; i < len; i++) {
                tile = tiles[i];

                if (!tile.complete) {
                    tile.onload = L.Util.falseFn;
                    tile.onerror = L.Util.falseFn;
                    tile.src = L.Util.emptyImageUrl;

                    tile.parentNode.removeChild(tile);
                }
            }
        }
    });


    /*
     * Provides L.Map with convenient shortcuts for using browser geolocation features.
     */

    L.Map.include({
        _defaultLocateOptions: {
            watch: false,
            setView: false,
            maxZoom: Infinity,
            timeout: 10000,
            maximumAge: 0,
            enableHighAccuracy: false
        },

        locate: function (/*Object*/ options) {

            options = this._locateOptions = L.extend(this._defaultLocateOptions, options);

            if (!navigator.geolocation) {
                this._handleGeolocationError({
                    code: 0,
                    message: 'Geolocation not supported.'
                });
                return this;
            }

            var onResponse = L.bind(this._handleGeolocationResponse, this),
                onError = L.bind(this._handleGeolocationError, this);

            if (options.watch) {
                this._locationWatchId =
                    navigator.geolocation.watchPosition(onResponse, onError, options);
            } else {
                navigator.geolocation.getCurrentPosition(onResponse, onError, options);
            }
            return this;
        },

        stopLocate: function () {
            if (navigator.geolocation) {
                navigator.geolocation.clearWatch(this._locationWatchId);
            }
            if (this._locateOptions) {
                this._locateOptions.setView = false;
            }
            return this;
        },

        _handleGeolocationError: function (error) {
            var c = error.code,
                message = error.message ||
                    (c === 1 ? 'permission denied' :
                        (c === 2 ? 'position unavailable' : 'timeout'));

            if (this._locateOptions.setView && !this._loaded) {
                this.fitWorld();
            }

            this.fire('locationerror', {
                code: c,
                message: 'Geolocation error: ' + message + '.'
            });
        },

        _handleGeolocationResponse: function (pos) {
            var lat = pos.coords.latitude,
                lng = pos.coords.longitude,
                latlng = new L.LatLng(lat, lng),

                latAccuracy = 180 * pos.coords.accuracy / 40075017,
                lngAccuracy = latAccuracy / Math.cos(L.LatLng.DEG_TO_RAD * lat),

                bounds = L.latLngBounds(
                    [lat - latAccuracy, lng - lngAccuracy],
                    [lat + latAccuracy, lng + lngAccuracy]),

                options = this._locateOptions;

            if (options.setView) {
                var zoom = Math.min(this.getBoundsZoom(bounds), options.maxZoom);
                this.setView(latlng, zoom);
            }

            var data = {
                latlng: latlng,
                bounds: bounds,
                timestamp: pos.timestamp
            };

            for (var i in pos.coords) {
                if (typeof pos.coords[i] === 'number') {
                    data[i] = pos.coords[i];
                }
            }

            this.fire('locationfound', data);
        }
    });


}(window, document));
/*
 Leaflet.AwesomeMarkers, a plugin that adds colorful iconic markers for Leaflet, based on the Font Awesome icons
 (c) 2012-2013, Lennard Voogdt

 http://leafletjs.com
 https://github.com/lvoogdt
 */

/*global L*/

(function (window, document, undefined) {
    "use strict";
    /*
     * Leaflet.AwesomeMarkers assumes that you have already included the Leaflet library.
     */

    L.AwesomeMarkers = {};

    L.AwesomeMarkers.version = '2.0.1';

    L.AwesomeMarkers.Icon = L.Icon.extend({
        options: {
            iconSize: [35, 45],
            iconAnchor: [17, 42],
            popupAnchor: [1, -32],
            shadowAnchor: [10, 12],
            shadowSize: [36, 16],
            className: 'awesome-marker',
            prefix: 'glyphicon',
            spinClass: 'fa-spin',
            extraClasses: '',
            icon: 'home',
            markerColor: 'blue',
            iconColor: 'white'
        },

        initialize: function (options) {
            options = L.Util.setOptions(this, options);
        },

        createIcon: function () {
            var div = document.createElement('div'),
                options = this.options;

            if (options.icon) {
                div.innerHTML = this._createInner();
            }

            if (options.bgPos) {
                div.style.backgroundPosition =
                    (-options.bgPos.x) + 'px ' + (-options.bgPos.y) + 'px';
            }

            this._setIconStyles(div, 'icon-' + options.markerColor);
            return div;
        },

        _createInner: function () {
            var iconClass, iconSpinClass = "", iconColorClass = "", iconColorStyle = "", options = this.options;

            if (options.icon.slice(0, options.prefix.length + 1) === options.prefix + "-") {
                iconClass = options.icon;
            } else {
                iconClass = options.prefix + "-" + options.icon;
            }

            if (options.spin && typeof options.spinClass === "string") {
                iconSpinClass = options.spinClass;
            }

            if (options.iconColor) {
                if (options.iconColor === 'white' || options.iconColor === 'black') {
                    iconColorClass = "icon-" + options.iconColor;
                } else {
                    iconColorStyle = "style='color: " + options.iconColor + "' ";
                }
            }

            return "<i " + iconColorStyle + "class='" + options.extraClasses + " " + options.prefix + " " + iconClass + " " + iconSpinClass + " " + iconColorClass + "'></i>";
        },

        _setIconStyles: function (img, name) {
            var options = this.options,
                size = L.point(options[name === 'shadow' ? 'shadowSize' : 'iconSize']),
                anchor;

            if (name === 'shadow') {
                anchor = L.point(options.shadowAnchor || options.iconAnchor);
            } else {
                anchor = L.point(options.iconAnchor);
            }

            if (!anchor && size) {
                anchor = size.divideBy(2, true);
            }

            img.className = 'awesome-marker-' + name + ' ' + options.className;

            if (anchor) {
                img.style.marginLeft = (-anchor.x) + 'px';
                img.style.marginTop = (-anchor.y) + 'px';
            }

            if (size) {
                img.style.width = size.x + 'px';
                img.style.height = size.y + 'px';
            }
        },

        createShadow: function () {
            var div = document.createElement('div');

            this._setIconStyles(div, 'shadow');
            return div;
        }
    });

    L.AwesomeMarkers.icon = function (options) {
        return new L.AwesomeMarkers.Icon(options);
    };

}(this, document));



