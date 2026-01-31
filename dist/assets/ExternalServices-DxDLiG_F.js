const a = "https://wdd330-backend.onrender.com/";
async function o(e) {
  const t = await e.json();
  if (e.ok) return t;
  throw { name: "servicesError", message: t };
}
class r {
  constructor() {}
  async sendOrder(t) {
    const s = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(t),
      },
      n = await fetch(`${a}orders`, s);
    return await o(n);
  }
  async getData(t) {
    const s = await fetch(`${a}products/search/${t}`);
    return (await o(s)).Result;
  }
  async findProductById(t) {
    const s = await fetch(`${a}product/${t}`);
    return (await o(s)).Result;
  }
}
export { r as E };
