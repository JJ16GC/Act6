import { Schema, model } from "mongoose";

const PersonasSchema = new Schema({
  nombre: {
    type: String,
    required: true,
    lowercase: false,
  },
  cedula: {
    type: String,
    required: true,
    lowercase: false,
  },
  apellido: {
    type: String,
    required: true,
    lowercase: false,
  },
  edad: {
    type: String,
    required: true,
    lowercase: false,
  },
  telefono: {
    type: String,
    required: true,
    lowercase: false,
  },
});

export default model('Personas', PersonasSchema)