
const API = import.meta.env.VITE_API_BASE || "http://localhost:8080";

export async function getBooks() {
  const r = await fetch(`${API}/books`);
  return r.json();
}
