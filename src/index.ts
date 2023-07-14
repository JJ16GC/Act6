import { Applicaction } from "./app";
import database from "./database";

database();
const app = new Applicaction();
app.start();
