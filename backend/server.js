const express = require("express");
const cors = require("cors");
require("dotenv").config();

const uploadRoutes = require("./routes/uploadRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// ─── Middleware ───────────────────────────────────────────────
app.use(cors({
  origin: [
    "http://localhost:5173",   // Vite dev server
    "http://localhost:3000",
    "https://msd-nine.vercel.app", // your production frontend (update if needed)
  ],
  methods: ["GET", "POST", "DELETE"],
  credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ─── Routes ──────────────────────────────────────────────────
app.use("/api/upload", uploadRoutes);

// ─── Health Check ─────────────────────────────────────────────
app.get("/", (req, res) => {
  res.json({ message: "MSD Backend Server is running ✅", port: PORT });
});

// ─── Global Error Handler ─────────────────────────────────────
app.use((err, req, res, next) => {
  console.error("Server Error:", err.message);
  res.status(500).json({ error: err.message || "Internal Server Error" });
});

// ─── Start Server ─────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`✅ MSD Backend running on http://localhost:${PORT}`);
});
