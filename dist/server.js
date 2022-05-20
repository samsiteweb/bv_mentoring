"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const port = 6005;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get('/api', (req, res) => {
    res.status(200).json("You are welcome to my Bookstore Api. Cheers!");
});
app.listen(port, () => console.log("My server is running on port " + port));
