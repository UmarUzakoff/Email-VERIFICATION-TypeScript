"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mail_controller_1 = require("../controllers/mail.controller");
const users_controller_1 = require("../controllers/users.controller");
const router = (0, express_1.Router)();
router.get("/", users_controller_1.findAll);
router.post("/send", mail_controller_1.mailhandler);
exports.default = router;
