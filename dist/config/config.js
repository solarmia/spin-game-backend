"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.total_angle = exports.fee = exports.rpcURL = exports.solanaNet = exports.tokenMint = exports.treasuryPrivKey = exports.RBYAmount = exports.JWT_SECRET = exports.PORT = exports.MONGO_URL = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
try {
    dotenv_1.default.config();
}
catch (error) {
    console.error("Error loading environment variables:", error);
    process.exit(1);
}
exports.MONGO_URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}`;
exports.PORT = process.env.PORT;
exports.JWT_SECRET = process.env.JWT_SECRET || "JWT_SECRET";
exports.RBYAmount = Number(process.env.RBY_AMOUNT);
exports.treasuryPrivKey = process.env.TREASURY_PRIVATE_KEY.toString();
exports.tokenMint = process.env.TOKEN_ADDR.toString();
exports.solanaNet = process.env.SOLANA_NET;
exports.rpcURL = process.env.RPC_URL;
exports.fee = Number(process.env.FEE);
exports.total_angle = Number(process.env.ANGLE);
