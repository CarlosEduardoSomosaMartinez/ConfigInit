"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/api", (req, res, next) => {
    res.json({ message: "welcome to my app" });
});
exports.default = router;
