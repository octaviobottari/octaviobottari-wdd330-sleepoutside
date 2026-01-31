(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) o(e);
  new MutationObserver((e) => {
    for (const n of e)
      if (n.type === "childList")
        for (const i of n.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && o(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function a(e) {
    const n = {};
    return (
      e.integrity && (n.integrity = e.integrity),
      e.referrerPolicy && (n.referrerPolicy = e.referrerPolicy),
      e.crossOrigin === "use-credentials"
        ? (n.credentials = "include")
        : e.crossOrigin === "anonymous"
          ? (n.credentials = "omit")
          : (n.credentials = "same-origin"),
      n
    );
  }
  function o(e) {
    if (e.ep) return;
    e.ep = !0;
    const n = a(e);
    fetch(e.href, n);
  }
})();
function l(r) {
  return JSON.parse(localStorage.getItem(r));
}
function u(r, t) {
  localStorage.setItem(r, JSON.stringify(t));
}
function d(r) {
  const t = window.location.search;
  return new URLSearchParams(t).get(r);
}
function f(r, t, a, o = "afterbegin", e = !1) {
  e && (t.innerHTML = "");
  const n = a.map(r);
  t.insertAdjacentHTML(o, n.join(""));
}
async function c(r) {
  const t = await fetch(r);
  if (!t.ok) throw new Error(`Could not load template: ${r}`);
  return await t.text();
}
function s(r, t, a, o) {
  t.insertAdjacentHTML("afterbegin", r);
}
async function m() {
  try {
    const r = await c("/partials/header.html"),
      t = document.querySelector("#main-header");
    t && s(r, t);
    const a = await c("/partials/footer.html"),
      o = document.querySelector("#main-footer");
    o && s(a, o);
  } catch (r) {
    console.error("Error loading header/footer:", r);
  }
}
function p(r, t = !0) {
  const a = document.querySelector(".alert");
  a && a.remove();
  const o = document.createElement("div");
  o.classList.add("alert"),
    (o.innerHTML = `
    <p>${r}</p>
    <button class="alert-close">✕</button>
  `);
  const e = document.querySelector("main");
  e &&
    (e.prepend(o),
    o.querySelector(".alert-close").addEventListener("click", () => {
      e.removeChild(o);
    }),
    t && window.scrollTo({ top: 0, behavior: "smooth" }));
}
export { p as a, d as b, l as g, m as l, f as r, u as s };
