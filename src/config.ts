import { config } from "dotenv";
config();

export const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb+srv://JhonG:1522094@cluster0.crfdlcj.mongodb.net/?retryWrites=true&w=majority";
export const PORT = process.env.PORT || 3000;