"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const mail_route_1 = __importDefault(require("../api/routes/mail.route"));
const modules = (app) => {
    app.use(express_1.default.json());
    app.use((0, cookie_parser_1.default)());
    app.use(express_1.default.urlencoded({ extended: true }));
    app.set("view engine", "ejs");
    app.use(mail_route_1.default);
    app.all("/*", async (req, res) => {
        return res.status(404).json({ message: "Route Not Found" });
    });
};
exports.default = modules;
