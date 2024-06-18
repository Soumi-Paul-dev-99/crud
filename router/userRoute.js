const express = require("express");
const {
  allUser,
  createuser,
  testuser,
  oneUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");
const router = express.Router();

//for read get all data
router.route("/alluser").get(allUser);
router.route("/create").post(createuser);
router.route("/get").get(testuser);
router.route("/get/:id").get(oneUser);
router.route("/update/:id").put(updateUser);
router.route("/delete/:id").delete(deleteUser);

module.exports = router;
