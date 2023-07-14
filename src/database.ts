import { connect, connection } from "mongoose";
import { MONGODB_URI } from "./config";

export async function connectToMongodb() {
  try {
    await connect(MONGODB_URI);
  } catch (error) {
    console.log("Error:", error);
  }
}

connection.on("connected", () => {
  console.log("Mongodb Conectado a:", connection.db.databaseName);
});

connection.on("error", (error) => {
  console.error("error", error);
});

connection.on("disconnected", () => {
  console.log("Mongodb disconnected");
});

export default connectToMongodb;
