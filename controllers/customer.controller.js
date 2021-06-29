const { db } = require("../config/queries");

exports.getCustomers = (req, res) => {
  db.query("SELECT * FROM customers", (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};
