const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  createInventoryController,
  getInventoryController,
  getDonarsController,
  getHospitalController,
  getOrgnaisationController,
  getOrgnaisationForHospitalController,
  getInventoryHospitalController,
  getRecentInventoryController,
} = require("../controllers/inventoryController");

const router = express.Router();
// Add inventory post
router.post("/create-inventory", authMiddleware, createInventoryController);
// get all blood records

router.get("/get-inventory", authMiddleware, getInventoryController);

// get all recent blood records

router.get(
  "/get-recent-inventory",
  authMiddleware,
  getRecentInventoryController
);

router.post(
  "/get-inventory-hospital",
  authMiddleware,
  getInventoryHospitalController
);

//get donar records

router.get("/get-donars", authMiddleware, getDonarsController);

// get hospital records
router.get("/get-hospitals", authMiddleware, getHospitalController);

router.get("/get-orgnaisation", authMiddleware, getOrgnaisationController);

router.get(
  "/get-orgnaisation-for-hospital",
  authMiddleware,
  getOrgnaisationForHospitalController
);
module.exports = router;
