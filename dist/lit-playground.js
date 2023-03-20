import { css as l, LitElement as u, html as c } from "lit";
import { property as d, customElement as h } from "lit/decorators.js";
import { createRef as F, ref as G } from "lit/directives/ref.js";
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let q = class extends Event {
  constructor(e, s, r) {
    super("context-request", { bubbles: !0, composed: !0 }), this.context = e, this.callback = s, this.subscribe = r;
  }
};
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let K = class {
  constructor(e, s, r, t = !1) {
    this.host = e, this.context = s, this.callback = r, this.subscribe = t, this.provided = !1, this.value = void 0, this.host.addController(this);
  }
  hostConnected() {
    this.dispatchRequest();
  }
  hostDisconnected() {
    this.unsubscribe && (this.unsubscribe(), this.unsubscribe = void 0);
  }
  dispatchRequest() {
    this.host.dispatchEvent(new q(this.context, (e, s) => {
      this.unsubscribe && (this.unsubscribe !== s && (this.provided = !1, this.unsubscribe()), this.subscribe || this.unsubscribe()), this.value = e, this.host.requestUpdate(), this.provided && !this.subscribe || (this.provided = !0, this.callback && this.callback(e, s)), this.unsubscribe = s;
    }, this.subscribe));
  }
};
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let ee = class {
  constructor(e) {
    this.callbacks = /* @__PURE__ */ new Map(), this.updateObservers = () => {
      for (const [s, r] of this.callbacks)
        s(this.t, r);
    }, e !== void 0 && (this.value = e);
  }
  get value() {
    return this.t;
  }
  set value(e) {
    this.setValue(e);
  }
  setValue(e, s = !1) {
    const r = s || !Object.is(e, this.t);
    this.t = e, r && this.updateObservers();
  }
  addCallback(e, s) {
    s && (this.callbacks.has(e) || this.callbacks.set(e, () => {
      this.callbacks.delete(e);
    })), e(this.value);
  }
  clearCallbacks() {
    this.callbacks.clear();
  }
};
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class te extends Event {
  constructor(e) {
    super("context-provider", { bubbles: !0, composed: !0 }), this.context = e;
  }
}
class re extends ee {
  constructor(e, s, r) {
    super(r), this.host = e, this.context = s, this.onContextRequest = (t) => {
      t.context === this.context && t.composedPath()[0] !== this.host && (t.stopPropagation(), this.addCallback(t.callback, t.subscribe));
    }, this.attachListeners(), this.host.addController(this);
  }
  attachListeners() {
    this.host.addEventListener("context-request", this.onContextRequest);
  }
  hostConnected() {
    this.host.dispatchEvent(new te(this.context));
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const P = ({ finisher: i, descriptor: e }) => (s, r) => {
  var t;
  if (r === void 0) {
    const a = (t = s.originalKey) !== null && t !== void 0 ? t : s.key, o = e != null ? { kind: "method", placement: "prototype", key: a, descriptor: e(s.key) } : { ...s, key: a };
    return i != null && (o.finisher = function(n) {
      i(n, a);
    }), o;
  }
  {
    const a = s.constructor;
    e !== void 0 && Object.defineProperty(s, r, e(r)), i == null || i(a, r);
  }
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function $({ context: i }) {
  return P({ finisher: (e, s) => {
    const r = /* @__PURE__ */ new WeakMap();
    e.addInitializer((n) => {
      r.set(n, new re(n, i));
    });
    const t = Object.getOwnPropertyDescriptor(e.prototype, s), a = t == null ? void 0 : t.set, o = { ...t, set: function(n) {
      var x;
      (x = r.get(this)) === null || x === void 0 || x.setValue(n), a && a.call(this, n);
    } };
    Object.defineProperty(e.prototype, s, o);
  } });
}
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function p({ context: i, subscribe: e }) {
  return P({ finisher: (s, r) => {
    s.addInitializer((t) => {
      new K(t, i, (a) => {
        t[r] = a;
      }, e);
    });
  } });
}
const se = l`
    main {
        width: 100%;
        height: 100%;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: #fff;
    }

    main.dark {
        background-color: #151d30;
    }
    .app-wrapper {
        width: 100%;
        max-width: 700px;
        margin: 0 auto;
    }
`, C = "themeContext", M = "searchDataContext", R = {
  IS_DARK_THEME: "is_dark_theme"
}, ie = l`
    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    h1 {
        font-family: "Source Code Pro", monospace;
        font-size: 22px;
        font-weight: 600;
        color: #1f2a48;
    }

    h1.dark {
        color: #fff;
    }
`, ae = l`
    button {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(0, 0, 0, 0);

        border: none;
        outline: none;

        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease-out;
        padding: 6px 14px;
        border-radius: 6px;
    }
    button:hover {
        background-color: #1f2a48;
    }
    button.light {
        background-color: #1f2a48;
    }
    span {
        text-transform: uppercase;
        font-family: "Source Code Pro", monospace;
    }

    img {
        width: 14px;
        margin-left: 10px;

        filter: invert(1);
    }
`, oe = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHdpZHRoPSIyNCI+PHBhdGggZD0iTTEyIDE1cTEuMjUgMCAyLjEyNS0uODc1VDE1IDEycTAtMS4yNS0uODc1LTIuMTI1VDEyIDlxLTEuMjUgMC0yLjEyNS44NzVUOSAxMnEwIDEuMjUuODc1IDIuMTI1VDEyIDE1Wm0wIDJxLTIuMDc1IDAtMy41MzctMS40NjNRNyAxNC4wNzUgNyAxMnQxLjQ2My0zLjUzOFE5LjkyNSA3IDEyIDd0My41MzggMS40NjJRMTcgOS45MjUgMTcgMTJxMCAyLjA3NS0xLjQ2MiAzLjUzN1ExNC4wNzUgMTcgMTIgMTdaTTIgMTNxLS40MjUgMC0uNzEyLS4yODhRMSAxMi40MjUgMSAxMnQuMjg4LS43MTNRMS41NzUgMTEgMiAxMWgycS40MjUgMCAuNzEzLjI4N1E1IDExLjU3NSA1IDEydC0uMjg3LjcxMlE0LjQyNSAxMyA0IDEzWm0xOCAwcS0uNDI1IDAtLjcxMi0uMjg4UTE5IDEyLjQyNSAxOSAxMnQuMjg4LS43MTNRMTkuNTc1IDExIDIwIDExaDJxLjQyNSAwIC43MTIuMjg3LjI4OC4yODguMjg4LjcxM3QtLjI4OC43MTJRMjIuNDI1IDEzIDIyIDEzWm0tOC04cS0uNDI1IDAtLjcxMi0uMjg4UTExIDQuNDI1IDExIDRWMnEwLS40MjUuMjg4LS43MTNRMTEuNTc1IDEgMTIgMXQuNzEzLjI4N1ExMyAxLjU3NSAxMyAydjJxMCAuNDI1LS4yODcuNzEyUTEyLjQyNSA1IDEyIDVabTAgMThxLS40MjUgMC0uNzEyLS4yODhRMTEgMjIuNDI1IDExIDIydi0ycTAtLjQyNS4yODgtLjcxMlExMS41NzUgMTkgMTIgMTl0LjcxMy4yODhRMTMgMTkuNTc1IDEzIDIwdjJxMCAuNDI1LS4yODcuNzEyUTEyLjQyNSAyMyAxMiAyM1pNNS42NSA3LjA1IDQuNTc1IDZxLS4zLS4yNzUtLjI4OC0uNy4wMTMtLjQyNS4yODgtLjcyNS4zLS4zLjcyNS0uM3QuNy4zTDcuMDUgNS42NXEuMjc1LjMuMjc1LjcgMCAuNC0uMjc1LjctLjI3NS4zLS42ODcuMjg3LS40MTMtLjAxMi0uNzEzLS4yODdaTTE4IDE5LjQyNWwtMS4wNS0xLjA3NXEtLjI3NS0uMy0uMjc1LS43MTIgMC0uNDEzLjI3NS0uNjg4LjI3NS0uMy42ODgtLjI4Ny40MTIuMDEyLjcxMi4yODdMMTkuNDI1IDE4cS4zLjI3NS4yODguNy0uMDEzLjQyNS0uMjg4LjcyNS0uMy4zLS43MjUuM3QtLjctLjNaTTE2Ljk1IDcuMDVxLS4zLS4yNzUtLjI4Ny0uNjg4LjAxMi0uNDEyLjI4Ny0uNzEyTDE4IDQuNTc1cS4yNzUtLjMuNy0uMjg4LjQyNS4wMTMuNzI1LjI4OC4zLjMuMy43MjV0LS4zLjdMMTguMzUgNy4wNXEtLjMuMjc1LS43LjI3NS0uNCAwLS43LS4yNzVaTTQuNTc1IDE5LjQyNXEtLjMtLjMtLjMtLjcyNXQuMy0uN2wxLjA3NS0xLjA1cS4zLS4yNzUuNzEzLS4yNzUuNDEyIDAgLjY4Ny4yNzUuMy4yNzUuMjg4LjY4OC0uMDEzLjQxMi0uMjg4LjcxMkw2IDE5LjQyNXEtLjI3NS4zLS43LjI4Ny0uNDI1LS4wMTItLjcyNS0uMjg3Wk0xMiAxMloiLz48L3N2Zz4=", ne = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHdpZHRoPSIyNCI+PHBhdGggZD0iTTEyIDIxcS0zLjc3NSAwLTYuMzg4LTIuNjEzUTMgMTUuNzc1IDMgMTJxMC0zLjQ1IDIuMjUtNS45ODhRNy41IDMuNDc1IDExIDMuMDVxLjYyNS0uMDc1Ljk3NS40NXQtLjAyNSAxLjFxLS40MjUuNjUtLjYzOCAxLjM3NVExMS4xIDYuNyAxMS4xIDcuNXEwIDIuMjUgMS41NzUgMy44MjVRMTQuMjUgMTIuOSAxNi41IDEyLjlxLjc3NSAwIDEuNTM4LS4yMjUuNzYyLS4yMjUgMS4zNjItLjYyNS41MjUtLjM1IDEuMDc1LS4wMzguNTUuMzEzLjQ3NS45ODgtLjM1IDMuNDUtMi45MzcgNS43MjVRMTUuNDI1IDIxIDEyIDIxWm0wLTJxMi4yIDAgMy45NS0xLjIxMiAxLjc1LTEuMjEzIDIuNTUtMy4xNjMtLjUuMTI1LTEgLjItLjUuMDc1LTEgLjA3NS0zLjA3NSAwLTUuMjM4LTIuMTYyUTkuMSAxMC41NzUgOS4xIDcuNXEwLS41LjA3NS0xdC4yLTFxLTEuOTUuOC0zLjE2MiAyLjU1UTUgOS44IDUgMTJxMCAyLjkgMi4wNSA0Ljk1UTkuMSAxOSAxMiAxOVptLS4yNS02Ljc1WiIvPjwvc3ZnPg==";
var ce = Object.defineProperty, le = Object.getOwnPropertyDescriptor, H = (i, e, s, r) => {
  for (var t = r > 1 ? void 0 : r ? le(e, s) : e, a = i.length - 1, o; a >= 0; a--)
    (o = i[a]) && (t = (r ? o(e, s, t) : o(t)) || t);
  return r && t && ce(e, s, t), t;
};
let y = class extends u {
  render() {
    var e, s, r, t;
    const i = (e = this.themeContext) != null && e.is_dark_theme ? "light" : "dark";
    return c` <button @click=${this.toggle} type="button" class="${(s = this.themeContext) != null && s.is_dark_theme ? "" : "light"}">
            <span>${i}</span>
            <img ?hidden=${!((r = this.themeContext) != null && r.is_dark_theme)} src=${oe} alt="light theme" />
            <img ?hidden=${(t = this.themeContext) == null ? void 0 : t.is_dark_theme} src=${ne} alt="dark theme" />
        </button>`;
  }
  toggle() {
    var i, e;
    localStorage.setItem(R.IS_DARK_THEME, (i = this.themeContext) != null && i.is_dark_theme ? "false" : "true"), (e = this.themeContext) == null || e.toggleTheme(), this.requestUpdate();
  }
};
y.styles = [ae];
H([
  p({ context: C, subscribe: !0 }),
  d({ attribute: !1 })
], y.prototype, "themeContext", 2);
y = H([
  h("theme-switcher-element")
], y);
var ue = Object.defineProperty, he = Object.getOwnPropertyDescriptor, Q = (i, e, s, r) => {
  for (var t = r > 1 ? void 0 : r ? he(e, s) : e, a = i.length - 1, o; a >= 0; a--)
    (o = i[a]) && (t = (r ? o(e, s, t) : o(t)) || t);
  return r && t && ue(e, s, t), t;
};
let N = class extends u {
  render() {
    var e;
    return c`
            <header>
                <h1 class="${(e = this.themeContext) != null && e.is_dark_theme ? "dark" : ""}">DevFinder</h1>
                <theme-switcher-element></theme-switcher-element>
            </header>
        `;
  }
};
N.styles = [ie];
Q([
  p({ context: C, subscribe: !0 }),
  d({ attribute: !1 })
], N.prototype, "themeContext", 2);
N = Q([
  h("header-element")
], N);
const de = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHdpZHRoPSIyNCI+PHBhdGggZD0ibTE4LjkgMjAuMy01LjYtNS42cS0uNzUuNi0xLjcyNS45NVExMC42IDE2IDkuNSAxNnEtMi43MjUgMC00LjYxMi0xLjg4N1EzIDEyLjIyNSAzIDkuNXEwLTIuNzI1IDEuODg4LTQuNjEzUTYuNzc1IDMgOS41IDN0NC42MTMgMS44ODdRMTYgNi43NzUgMTYgOS41cTAgMS4xLS4zNSAyLjA3NS0uMzUuOTc1LS45NSAxLjcyNWw1LjYyNSA1LjYyNXEuMjc1LjI3NS4yNzUuNjc1dC0uMy43cS0uMjc1LjI3NS0uNy4yNzUtLjQyNSAwLS43LS4yNzVaTTkuNSAxNHExLjg3NSAwIDMuMTg4LTEuMzEyUTE0IDExLjM3NSAxNCA5LjVxMC0xLjg3NS0xLjMxMi0zLjE4OFExMS4zNzUgNSA5LjUgNSA3LjYyNSA1IDYuMzEyIDYuMzEyIDUgNy42MjUgNSA5LjVxMCAxLjg3NSAxLjMxMiAzLjE4OFE3LjYyNSAxNCA5LjUgMTRaIiBmaWxsPSIjMDI3OWZlIi8+PC9zdmc+", pe = l`
    div {
        background-color: #1f2a48;
        border-radius: 8px;
        position: relative;
        padding: 4px;
        font-family: "Source Code Pro", monospace;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 20px;
    }
    /* search icon */
    img {
        position: absolute;
        top: 50%;
        left: 10px;
        transform: translateY(-47%);
    }
    button,
    input {
        font-family: "Source Code Pro", monospace;
        font-weight: 600;
        transition: all 0.3s ease-out;

        outline: none;
        border: none;
    }
    button {
        background-color: #0279fe;
        padding: 12px 20px;
        border-radius: 4px;
        height: 100%;
        cursor: pointer;
    }
    button:hover {
        background-color: rgba(2, 121, 254, 0.7);
    }

    input {
        width: 100%;
        padding-left: 38px;
        background-color: rgba(0, 0, 0, 0);
        height: 40px;
    }
`, b = (i, e) => ({
  data: i,
  error: e ? {
    message: e
  } : null
});
var Me = Object.defineProperty, xe = Object.getOwnPropertyDescriptor, Y = (i, e, s, r) => {
  for (var t = r > 1 ? void 0 : r ? xe(e, s) : e, a = i.length - 1, o; a >= 0; a--)
    (o = i[a]) && (t = (r ? o(e, s, t) : o(t)) || t);
  return r && t && Me(e, s, t), t;
};
const U = "search-input";
let L = class extends u {
  constructor() {
    super(...arguments), this.inputRef = F();
  }
  render() {
    var e;
    const i = (e = this.dataContext) != null && e.is_loading ? "Searching.." : "Search";
    return c`
            <div>
                <img src=${de} alt="Search" />
                <input type="text" placeholder="Search GitHub username.." ${G(this.inputRef)} id=${U} />
                <button type="button" @click=${this.handleSearch}>${i}</button>
            </div>
        `;
  }
  async handleSearch(i) {
    var r, t;
    let e = "";
    if (i && (e = i), this.inputRef.value) {
      const a = this.inputRef.value;
      e = a.value, a.value = "";
    }
    (r = this.dataContext) == null || r.updateSearchData({ is_loading: !0 });
    const s = await this.getSearchData(e);
    (t = this.dataContext) == null || t.updateSearchData({ is_loading: !1, data: s.data, error: s.error });
  }
  async getSearchData(i) {
    var e, s, r, t, a;
    try {
      const n = await (await fetch(`https://api.github.com/search/users?q=${i}`)).json();
      if (!(n != null && n.items) || ((e = n == null ? void 0 : n.items) == null ? void 0 : e.length) === 0 || !((r = (s = n == null ? void 0 : n.items) == null ? void 0 : s[0]) != null && r.url))
        return b(null, "No user found");
      const j = await (await fetch((a = (t = n == null ? void 0 : n.items) == null ? void 0 : t[0]) == null ? void 0 : a.url)).json();
      return b(j);
    } catch (o) {
      return b(null, (o == null ? void 0 : o.message) || "Something went wrong");
    }
  }
  connectedCallback() {
    super.connectedCallback(), this.handleSearch("ayofef"), window.addEventListener("keyup", (i) => {
      var e;
      i.preventDefault(), i.stopPropagation(), i.key === "Enter" && ((e = i == null ? void 0 : i.originalTarget) == null ? void 0 : e.id) === U && this.handleSearch();
    });
  }
};
L.styles = [pe];
Y([
  p({ context: M, subscribe: !0 }),
  d({ attribute: !1 })
], L.prototype, "dataContext", 2);
L = Y([
  h("search-element")
], L);
var ge = Object.defineProperty, je = Object.getOwnPropertyDescriptor, W = (i, e, s, r) => {
  for (var t = r > 1 ? void 0 : r ? je(e, s) : e, a = i.length - 1, o; a >= 0; a--)
    (o = i[a]) && (t = (r ? o(e, s, t) : o(t)) || t);
  return r && t && ge(e, s, t), t;
};
let D = class extends u {
  render() {
    var i, e, s, r;
    return c` <img src="${(e = (i = this.dataContext) == null ? void 0 : i.data) == null ? void 0 : e.avatar_url}" alt="${(r = (s = this.dataContext) == null ? void 0 : s.data) == null ? void 0 : r.login}" />`;
  }
};
D.styles = l`
        img {
            width: 100%;
            max-width: 238px;
            border-radius: 8px;
            flex-shrink: 0;
        }
    `;
W([
  p({ context: M, subscribe: !0 }),
  d({ attribute: !1 })
], D.prototype, "dataContext", 2);
D = W([
  h("profile-image-element")
], D);
const ye = l`
    .bio-header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        padding: 0;
        margin: 0;
    }

    .bio-header h2 {
        line-height: 1;
    }

    .bio-handle {
        margin-top: -20px;
    }
    .bio-handle a {
        color: #0279fe;
        text-decoration: none;
    }

    .bio-description p {
        color: #a9b1d6;
    }
`;
var Ne = Object.defineProperty, Le = Object.getOwnPropertyDescriptor, V = (i, e, s, r) => {
  for (var t = r > 1 ? void 0 : r ? Le(e, s) : e, a = i.length - 1, o; a >= 0; a--)
    (o = i[a]) && (t = (r ? o(e, s, t) : o(t)) || t);
  return r && t && Ne(e, s, t), t;
};
let I = class extends u {
  constructor() {
    super(...arguments), this.getHeaderhtml = () => {
      var e, s, r, t;
      const i = this.dataContext ? new Date(((s = (e = this.dataContext) == null ? void 0 : e.data) == null ? void 0 : s.created_at) ?? null).toLocaleDateString("en-US", { day: "numeric", year: "numeric", month: "short" }) : "";
      return c`
            <div class="bio-header">
                <h2>${(t = (r = this.dataContext) == null ? void 0 : r.data) == null ? void 0 : t.name}</h2>
                <p>Joined ${i}</p>
            </div>
        `;
    }, this.getBioHandleHtml = () => {
      var i, e, s, r;
      return c`
            <div class="bio-handle">
                <a href=${(e = (i = this.dataContext) == null ? void 0 : i.data) == null ? void 0 : e.html_url} target="_blank" rel="noopener noreferrer">@${(r = (s = this.dataContext) == null ? void 0 : s.data) == null ? void 0 : r.login}</a>
            </div>
        `;
    }, this.getBioDescriptionHtml = () => {
      var i, e, s, r, t, a;
      return c`
            <div class="bio-description">
                <p ?hidden=${!((e = (i = this.dataContext) == null ? void 0 : i.data) != null && e.bio)}>${(r = (s = this.dataContext) == null ? void 0 : s.data) == null ? void 0 : r.bio}</p>
                <p ?hidden=${!!((a = (t = this.dataContext) == null ? void 0 : t.data) != null && a.bio)}>This profile has no bio</p>
            </div>
        `;
    };
  }
  render() {
    return c` ${this.getHeaderhtml()} ${this.getBioHandleHtml()} ${this.getBioDescriptionHtml()} `;
  }
};
I.styles = [ye];
V([
  p({ context: M, subscribe: !0 }),
  d({ attribute: !1 })
], I.prototype, "dataContext", 2);
I = V([
  h("profile-bio-element")
], I);
const De = l`
    .stat-wrapper {
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
        align-items: center;
        background-color: #151d30;
        padding: 12px 16px;
        border-radius: 8px;
    }

    .stat {
    }

    .stat p {
        padding: 0;
        margin: 0;
        line-height: 1;
        font-size: 12px;
        font-weight: 600;
        color: #a9b1d6;
        margin-bottom: 8px;
    }
    .stat h3 {
        padding: 0;
        margin: 0;
        line-height: 1;
    }
`, Ie = ["public_repos", "followers", "following"], Se = {
  public_repos: "Repos",
  followers: "Followers",
  following: "Following"
};
var me = Object.defineProperty, fe = Object.getOwnPropertyDescriptor, B = (i, e, s, r) => {
  for (var t = r > 1 ? void 0 : r ? fe(e, s) : e, a = i.length - 1, o; a >= 0; a--)
    (o = i[a]) && (t = (r ? o(e, s, t) : o(t)) || t);
  return r && t && me(e, s, t), t;
};
let S = class extends u {
  render() {
    return c`<div class="stat-wrapper">${this.getStatHtml()}</div>`;
  }
  getStatHtml() {
    return Ie.map((i) => {
      var e, s, r, t;
      return typeof ((s = (e = this.dataContext) == null ? void 0 : e.data) == null ? void 0 : s[i]) != "number" ? null : c` <div class="stat">
                <p>${Se[i]}</p>
                <h3>${(t = (r = this.dataContext) == null ? void 0 : r.data) == null ? void 0 : t[i]}</h3>
            </div>`;
    }).filter(Boolean);
  }
};
S.styles = [De];
B([
  p({ context: M, subscribe: !0 }),
  d({ attribute: !1 })
], S.prototype, "dataContext", 2);
S = B([
  h("profile-stat-element")
], S);
var Ee = Object.defineProperty, be = Object.getOwnPropertyDescriptor, Te = (i, e, s, r) => {
  for (var t = r > 1 ? void 0 : r ? be(e, s) : e, a = i.length - 1, o; a >= 0; a--)
    (o = i[a]) && (t = (r ? o(e, s, t) : o(t)) || t);
  return r && t && Ee(e, s, t), t;
};
let T = class extends u {
  render() {
    return c` <div class="profile-wrapper">
            <profile-image-element></profile-image-element>
            <div class="profile-bio-wrapper">
                <profile-bio-element></profile-bio-element>
                <profile-stat-element></profile-stat-element>
            </div>
        </div>`;
  }
};
T.styles = l`
        .profile-wrapper {
            display: flex;
            align-items: flex-start;
        }

        .profile-bio-wrapper {
            margin-left: 20px;
            width: 100%;
            margin-top: -20px;
            max-width: 400px;
        }
    `;
T = Te([
  h("profile-element-success-state")
], T);
var ve = Object.defineProperty, Ce = Object.getOwnPropertyDescriptor, ze = (i, e, s, r) => {
  for (var t = r > 1 ? void 0 : r ? Ce(e, s) : e, a = i.length - 1, o; a >= 0; a--)
    (o = i[a]) && (t = (r ? o(e, s, t) : o(t)) || t);
  return r && t && ve(e, s, t), t;
};
let v = class extends u {
  render() {
    return c`<div class="loader">&nbsp;</div>`;
  }
};
v.styles = l`
        .loader {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 34px;
            height: 34px;
            transform: translate(-50%, -50%);
            border: 3px solid rgba(2, 121, 254, 0.2);
            border-radius: 50%;
            border-top-color: #0279fe;
            animation: spin 0.6s linear infinite;
        }

        @keyframes spin {
            from {
                transform: translate(-50%, -50%) rotate(0deg);
            }
            to {
                transform: translate(-50%, -50%) rotate(360deg);
            }
        }
    `;
v = ze([
  h("profile-loading-state-element")
], v);
const _e = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHdpZHRoPSIyNCI+PHBhdGggZD0iTTEyIDEzcS40MjUgMCAuNzEzLS4yODhRMTMgMTIuNDI1IDEzIDEyVjcuOTc1cTAtLjQyNS0uMjg3LS43UTEyLjQyNSA3IDEyIDd0LS43MTIuMjg3UTExIDcuNTc1IDExIDh2NC4wMjVxMCAuNDI1LjI4OC43LjI4Ny4yNzUuNzEyLjI3NVptMCA0cS40MjUgMCAuNzEzLS4yODhRMTMgMTYuNDI1IDEzIDE2dC0uMjg3LS43MTNRMTIuNDI1IDE1IDEyIDE1dC0uNzEyLjI4N1ExMSAxNS41NzUgMTEgMTZ0LjI4OC43MTJRMTEuNTc1IDE3IDEyIDE3Wm0wIDVxLTIuMDc1IDAtMy45LS43ODgtMS44MjUtLjc4Ny0zLjE3NS0yLjEzNy0xLjM1LTEuMzUtMi4xMzctMy4xNzVRMiAxNC4wNzUgMiAxMnQuNzg4LTMuOXEuNzg3LTEuODI1IDIuMTM3LTMuMTc1IDEuMzUtMS4zNSAzLjE3NS0yLjEzOFE5LjkyNSAyIDEyIDJ0My45Ljc4N3ExLjgyNS43ODggMy4xNzUgMi4xMzggMS4zNSAxLjM1IDIuMTM3IDMuMTc1UTIyIDkuOTI1IDIyIDEydC0uNzg4IDMuOXEtLjc4NyAxLjgyNS0yLjEzNyAzLjE3NS0xLjM1IDEuMzUtMy4xNzUgMi4xMzdRMTQuMDc1IDIyIDEyIDIyWm0wLTEwWm0wIDhxMy4zMjUgMCA1LjY2My0yLjMzN1EyMCAxNS4zMjUgMjAgMTJ0LTIuMzM3LTUuNjYzUTE1LjMyNSA0IDEyIDRUNi4zMzggNi4zMzdRNCA4LjY3NSA0IDEydDIuMzM4IDUuNjYzUTguNjc1IDIwIDEyIDIwWiIgZmlsbD0iI0QxMDAwMCIvPjwvc3ZnPg==", k = l`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 34px;
    height: 34px;
    transform: translate(-50%, -50%);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
var we = Object.defineProperty, Ae = Object.getOwnPropertyDescriptor, Z = (i, e, s, r) => {
  for (var t = r > 1 ? void 0 : r ? Ae(e, s) : e, a = i.length - 1, o; a >= 0; a--)
    (o = i[a]) && (t = (r ? o(e, s, t) : o(t)) || t);
  return r && t && we(e, s, t), t;
};
let m = class extends u {
  render() {
    var i, e;
    return c`<div class="error-wrapper">
            <img src=${_e} alt="Error" />
            <p>${(e = (i = this.dataContext) == null ? void 0 : i.error) == null ? void 0 : e.message}</p>
        </div>`;
  }
};
m.styles = l`
        .error-wrapper {
            ${k};
        }
    `;
Z([
  p({ context: M, subscribe: !0 }),
  d({ attribute: !1 })
], m.prototype, "dataContext", 2);
m = Z([
  h("profile-error-state-element")
], m);
var Oe = Object.defineProperty, Ue = Object.getOwnPropertyDescriptor, J = (i, e, s, r) => {
  for (var t = r > 1 ? void 0 : r ? Ue(e, s) : e, a = i.length - 1, o; a >= 0; a--)
    (o = i[a]) && (t = (r ? o(e, s, t) : o(t)) || t);
  return r && t && Oe(e, s, t), t;
};
let f = class extends u {
  render() {
    return c`<div class="empty-wrapper">
            <p>Search github user by username to view profile details</p>
        </div>`;
  }
};
f.styles = l`
        .empty-wrapper {
            ${k};
        }
    `;
J([
  p({ context: M, subscribe: !0 }),
  d({ attribute: !1 })
], f.prototype, "dataContext", 2);
f = J([
  h("profile-empty-state-element")
], f);
var Pe = Object.defineProperty, $e = Object.getOwnPropertyDescriptor, X = (i, e, s, r) => {
  for (var t = r > 1 ? void 0 : r ? $e(e, s) : e, a = i.length - 1, o; a >= 0; a--)
    (o = i[a]) && (t = (r ? o(e, s, t) : o(t)) || t);
  return r && t && Pe(e, s, t), t;
};
let E = class extends u {
  render() {
    var t, a, o, n, x, j, _, w, A, O;
    const i = !!((t = this.dataContext) != null && t.is_loading), e = !!((o = (a = this.dataContext) == null ? void 0 : a.error) != null && o.message), s = !((n = this.dataContext) != null && n.is_loading) && !((j = (x = this.dataContext) == null ? void 0 : x.error) != null && j.message) && ((_ = this.dataContext) == null ? void 0 : _.data), r = !((w = this.dataContext) != null && w.is_loading) && !((A = this.dataContext) != null && A.error) && !((O = this.dataContext) != null && O.data);
    return c`<div class="profile-wrapper">
            <profile-loading-state-element ?hidden=${!i}> </profile-loading-state-element>
            <profile-error-state-element ?hidden=${!e}></profile-error-state-element>
            <profile-empty-state-element ?hidden=${!r}></profile-empty-state-element>
            <profile-element-success-state ?hidden=${!s}> </profile-element-success-state>
        </div>`;
  }
};
E.styles = l`
        .profile-wrapper {
            position: relative;
            background-color: #1f2a48;
            border-radius: 8px;
            padding: 22px 20px 18px 20px;
            min-height: 200px;
        }
    `;
X([
  p({ context: M, subscribe: !0 }),
  d({ attribute: !1 })
], E.prototype, "dataContext", 2);
E = X([
  h("profile-element")
], E);
var Re = Object.defineProperty, He = Object.getOwnPropertyDescriptor, z = (i, e, s, r) => {
  for (var t = r > 1 ? void 0 : r ? He(e, s) : e, a = i.length - 1, o; a >= 0; a--)
    (o = i[a]) && (t = (r ? o(e, s, t) : o(t)) || t);
  return r && t && Re(e, s, t), t;
};
let g = class extends u {
  constructor() {
    super(...arguments), this.themeContext = {
      is_dark_theme: !0,
      toggleTheme: this._toggleTheme.bind(this)
    }, this.dataContext = {
      is_loading: !1,
      data: null,
      error: null,
      updateSearchData: this._updateSearchData.bind(this)
    };
  }
  render() {
    var i;
    return c`
            <main class="${(i = this.themeContext) != null && i.is_dark_theme ? "dark" : ""}">
                <div class="app-wrapper">
                    <header-element ?value=${!0}></header-element>
                    <search-element></search-element>
                    <profile-element></profile-element>
                </div>
            </main>
        `;
  }
  connectedCallback() {
    super.connectedCallback();
    const i = localStorage.getItem(R.IS_DARK_THEME);
    this.themeContext = {
      ...this.themeContext,
      is_dark_theme: i === "true"
    };
  }
  _toggleTheme() {
    this.themeContext = {
      ...this.themeContext,
      is_dark_theme: !this.themeContext.is_dark_theme
    };
  }
  _updateSearchData(i) {
    this.dataContext = {
      ...this.dataContext,
      ...i
    };
  }
};
g.styles = [se];
z([
  $({ context: C }),
  d({ attribute: !1 })
], g.prototype, "themeContext", 2);
z([
  $({ context: M }),
  d({ attribute: !1 })
], g.prototype, "dataContext", 2);
g = z([
  h("github-search-app")
], g);
export {
  g as MyElement
};
