const express = require("express");
const multer = require("multer");
const upload = multer({ dest: "uploads/image/" });
let app = express();
app.use("/",express.static("View"));

app.post("/profile", upload.single("avatar"), (req, res, next) => {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
  res.send("Image uploded")
});

app.listen(8080)