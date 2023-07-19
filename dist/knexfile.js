"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    development: {
        client: "pg",
        connection: {
            connectionString: "postgres://postgres:daredevil8869@localhost:5432/nodemailer"
        }
    },
};
exports.default = config;
