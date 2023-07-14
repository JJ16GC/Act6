import { Schema, model } from "mongoose";

const CitasSchema = new Schema({
  cedula: {
    type: String,
    required: true,
    lowercase: false,
  },
  especialidad: {
    type: String,
    required: true,
    lowercase: false,
  }
});

export default model("  Citas", CitasSchema);
