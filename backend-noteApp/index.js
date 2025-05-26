import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import NoteRoute from "./routes/NoteRoute.js";
import UserRoute from "./routes/UserRoute.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Konfigurasi CORS
const allowedOrigins = [
  "https://notes-frontend-daino-dot-prak-tcc-1-450606.uc.r.appspot.com",
];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
<<<<<<< HEAD
=======

>>>>>>> c4dfc21cf008d279959ab4ab21e205fd3a1c7978
// Middleware
app.use(cookieParser());
app.use(express.json());

// Routing langsung di root
app.use(NoteRoute);
app.use(UserRoute);

// Health Check
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok", message: "Server is running" });
});

// Start Server
app.listen(PORT, () =>
  console.log(`Server berjalan di http://localhost:${PORT}`)
);
