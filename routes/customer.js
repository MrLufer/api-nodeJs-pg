const { Router } = require("express");
const { getCustomers, createCustomer } = require("../controllers/customer.controller");
const router = Router();

router.get("/customers", getCustomers);
router.post("/customer",createCustomer)

module.exports = router;
