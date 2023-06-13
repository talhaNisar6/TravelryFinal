import { Schema, model } from "mongoose";

const about = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    
    },
    phone: {
      type: String,
    },
    role: {
        type: String,
      },
   
  },
  { timestamps: true }
);

export default model("about", about);
