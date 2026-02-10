
import { useEffect, useState } from "react";
import { getBooks } from "./api";

export default function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks().then(setBooks);
  }, []);

  return (
    <div style={{ padding: 30 }}>
      <h1>Private Library App</h1>
      {books.map(b => (
        <div key={b.id}>
          <b>{b.title}</b> — {b.author}
        </div>
      ))}
    </div>
  );
}
