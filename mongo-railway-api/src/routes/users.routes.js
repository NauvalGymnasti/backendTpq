import { Router } from "express";
import User from "../models/User.js";
const r = Router();

r.get("/", async (_req, res) => {
  const data = await User.find().sort({ createdAt:-1 });
  res.json({ ok:true, data });
});

r.post("/", async (req, res) => {
  const { name, email, role } = req.body || {};
  if (!name || !email) return res.status(400).json({ ok:false, error:"name & email required" });
  try {
    const created = await User.create({ name, email, role });
    res.status(201).json({ ok:true, data: created });
  } catch (e) {
    if (e.code === 11000) return res.status(409).json({ ok:false, error:"email already exists" });
    res.status(500).json({ ok:false, error: e.message });
  }
});

export default r;
