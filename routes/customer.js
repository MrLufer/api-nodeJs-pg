const { Router } = require("express");
const {
  getCustomers,
  createCustomer,
  getAvgAge,
} = require("../controllers/customer.controller");
const router = Router();

router.get("/customers", getCustomers);
router.post("/customer", createCustomer);
router.get("/avg", getAvgAge);

module.exports = router;
