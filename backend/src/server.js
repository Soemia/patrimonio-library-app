
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { db } from "./db.js";

dotenv.config();

const app = express();

app.use(cors({ origin: process.env.CORS_ORIGIN }));
app.use(express.json());

app.get("/health", (_, res) => {
  res.json({ status: "OK" });
});

app.get("/books", async (_, res) => {
  try {
    const r = await db.query(
      "SELECT id, title, author FROM books LIMIT 20"
    );
    res.json(r.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
});

app.listen(process.env.PORT || 8080, () =>
  console.log("Backend running")
);
