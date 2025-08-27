import "dotenv/config";
import mongoose from "mongoose";
import User from "../src/models/User.js";
// import Project from "../src/models/Project.js";
// import Task from "../src/models/Task.js";

await mongoose.connect(process.env.MONGO_URI);

const u = await User.create({ name:"Admin", email:"admin@example.com", role:"admin" });
// const p = await Project.create({ ownerId: u._id, name:"Project A", tags:["internal"] });
// await Task.create([
//   { projectId: p._id, title:"Setup repo", status:"done" },
//   { projectId: p._id, title:"Design schema", status:"in_progress" }
// ]);

console.log("✅ Seed done");
await mongoose.disconnect();
process.exit(0);
