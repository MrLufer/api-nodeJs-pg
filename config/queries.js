const { Pool } = require("pg");
const connectionString = process.env.DATABASE_URL;

exports.pool = new Pool({
  connectionString,
});
