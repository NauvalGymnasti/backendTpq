import "dotenv/config";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import { connectDB } from "./config/db.js";
import users from "./routes/users.routes.js";
// import students from "./routes/students.routes.js";
// import teachers from "./routes/teachers.routes.js";

const app = express();
app.use(cors());
app.use(express.json({ limit: "1mb" }));
app.use(morgan("dev"));

app.get("/health", (_req, res) => res.json({ ok:true, ts:new Date() }));
app.use("/api/users", users);
// app.use("/api/students", projects);
// app.use("/api/teachers", tasks);

const port = process.env.PORT || 4000;
connectDB(process.env.MONGO_URI)
  .then(() => app.listen(port, () => console.log(`🚀 API running on :${port}`)))
  .catch(err => { console.error(err); process.exit(1); });
