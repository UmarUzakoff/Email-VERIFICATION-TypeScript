"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerifyEmail = exports.mailhandler = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const joi_1 = __importDefault(require("joi"));
const mailhandler = async (req, res) => {
    const { email } = req.body;
    //VALIDATION
    const schema = joi_1.default.object({
        email: joi_1.default.string().email().required(),
    });
    const { error } = schema.validate({ email });
    if (error) {
        return res.status(403).json({ error: error.message });
    }
    /// CODE Generator
    const code = Math.floor(100000 + Math.random() * 900000);
    res.cookie("code", code, { maxAge: 120 * 100 * 60 });
    res.cookie("email", email, { maxAge: 120 * 100 * 60 });
    /// EMAIL handler
    const transporter = nodemailer_1.default.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: "eankundagacxen@gmail.com",
            pass: "pilsarfzqsxqjgnp",
        },
        secure: true,
    });
    const mailData = {
        from: "umar.uzakoff@mail.ru",
        to: email,
        subject: "Sending Email using Node.js",
        text: "That was easy!",
        html: `<b>${code}</b>
                   <br>Keep it in secreet!<br/>`,
    };
    const data = await transporter.sendMail(mailData);
    console.log(data);
    res.redirect("/verify");
};
exports.mailhandler = mailhandler;
const VerifyEmail = async (req, res) => {
    try {
        const { code, email } = req.cookies;
        const { verifyCode } = req.body;
        if (code != verifyCode) {
            return res.render("verify");
        }
        res.status(200).json({ message: "Success" });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.VerifyEmail = VerifyEmail;
