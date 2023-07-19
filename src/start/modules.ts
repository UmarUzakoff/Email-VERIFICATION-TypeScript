import express, { Application } from "express";
import cookieParser from "cookie-parser";
import router from "../api/routes/mail.route";

const modules = (app: Application) => {
  app.use(express.json());
  app.use(cookieParser());
  app.use(express.urlencoded({ extended: true }));
  app.set("view engine", "ejs");
  app.use(router);

  app.all("/*", async (req, res) => {
    return res.status(404).json({ message: "Route Not Found" });
  });
};

export default modules;
