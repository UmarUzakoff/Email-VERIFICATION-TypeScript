import type { Knex } from "knex";

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "pg",
    connection: {
      connectionString: "postgres://postgres:daredevil8869@localhost:5432/nodemailer"
    }
  },
};

export default config;
