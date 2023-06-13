import { Schema, model } from "mongoose";

const PlacesSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      max: 500,
    },
    img: {
      type: String,
    },
   
  },
  { timestamps: true }
);

export default model("Places", PlacesSchema);
