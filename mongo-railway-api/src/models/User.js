import mongoose from "mongoose";
const schema = new mongoose.Schema({
  name: { type:String, required:true, trim:true },
  email:{ type:String, required:true, unique:true, lowercase:true, index:true },
  role: { type:String, enum:["admin","user"], default:"user", index:true }
}, { timestamps:true });

export default mongoose.model("User", schema);
