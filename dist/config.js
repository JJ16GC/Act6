"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PORT = exports.MONGODB_URI = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
exports.MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://JhonG:1522094@cluster0.crfdlcj.mongodb.net/?retryWrites=true&w=majority";
exports.PORT = process.env.PORT || 3000;
