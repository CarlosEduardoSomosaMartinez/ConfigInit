"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_route_1 = __importDefault(require("@routes/index.route"));
const app = (0, express_1.default)();
app.get('/', (req, res, next) => {
    res.json({ message: "hola mundo" });
});
app.use('/', index_route_1.default);
app.listen(3000, () => {
    console.log("el servidor esta correindo en ep port 300");
});
