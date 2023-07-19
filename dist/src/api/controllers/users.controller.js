"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAll = void 0;
const findAll = async (req, res, next) => {
    // const users = await knex("users").select("*");
    res.render("index");
};
exports.findAll = findAll;
