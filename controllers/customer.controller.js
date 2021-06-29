const Customer = require("../models/customer");

exports.getCustomers = async (req, res) => {
  try {
    let customers = await Customer.findAll({
      limit: 72,
      order: [["createdAt", "ASC"]],
    });
    res.json(customers);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};
