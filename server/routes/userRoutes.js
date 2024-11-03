const express = require("express");
const router = express.Router();
const passport = require("passport");
const userController = require("../controllers/userController");

router.post("/register", userController.register);
router.post("/login", userController.login);
router.get(
  "/:id/todos",
  passport.authenticate("jwt", { session: false }),
  userController.getUserTodos
);
router.post("/logout", userController.logout);

module.exports = router;
