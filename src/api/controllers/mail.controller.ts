import { Request, RequestHandler, Response } from "express";
import nodemailer from "nodemailer";
import Joi from "joi";
import { IEmail } from "../../types/email.types";

export const mailhandler = async (req: Request, res: Response) => {
  const { email } = req.body as IEmail;
  //VALIDATION
  const schema = Joi.object({
    email: Joi.string().email().required(),
  });

  const { error } = schema.validate({ email });
  if (error) {
    return res.status(403).json({ error: error.message });
  }
  /// CODE Generator
  const code: number = Math.floor(100000 + Math.random() * 900000);

  res.cookie("code", code, { maxAge: 120 * 100 * 60 });
  res.cookie("email", email, { maxAge: 120 * 100 * 60 });

  /// EMAIL handler
  const transporter = nodemailer.createTransport({
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

export const VerifyEmail: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const { code, email } = req.cookies;
    const { verifyCode } = req.body;

    if (code != verifyCode) {
      return res.render("verify");
    }

    res.status(200).json({ message: "Success" });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
