const { pool } = require("../config/queries");


exports.getCustomers = (req, res) => {
  pool.query("SELECT * FROM customers ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};
