const exp = require("express");
adminApp = exp.Router();

adminApp.get("/test-admin", (req, res) => {
  res.send({ message: "This from admin api" });
});

module.exports = adminApp;
