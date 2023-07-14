import { Schema, model } from "mongoose";

const DoctoresSchema = new Schema({
  nombre: {
    type: String,
    required: true,
    lowercase: false,
  },
  apellido: {
    type: String,
    required: true,
    lowercase: false,
  },
  especialidad: {
    type: String,
    required: true,
    lowercase: false,
  },
  consultorio: {
    type: String,
    required: true,
    lowercase: false,
  },
  correo: {
    type: String,
    required: true,
    lowercase: false,
  },
});

export default model('Doctores', DoctoresSchema)