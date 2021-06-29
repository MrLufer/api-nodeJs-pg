const { db } = require("../config/queries");

exports.getCustomers = (req, res) => {
  db.query("SELECT * FROM customers", (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

exports.createCustomer = (req, res) => {
  const { first_name, last_name, birth_date } = req.body;
  db.query(
    "INSERT INTO customers (first_name, last_name,birth_date) VALUES ($1, $2, $3)",
    [first_name, last_name, birth_date],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json("Creado con exito");
    }
  );
};
