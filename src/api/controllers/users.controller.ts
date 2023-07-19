import { NextFunction, Request, RequestHandler, Response } from "express";
import knex from "../../database/knex";

export const findAll: RequestHandler = async(req: Request, res: Response, next: NextFunction) => {
    // const users = await knex("users").select("*");
    res.render("index");
};