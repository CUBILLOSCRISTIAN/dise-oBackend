// delete-user-service/index.js
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./user.model");

app.use(express.json());
app.use(cors());

app.patch("/users/update/:id", async (req, res) => {
  req.body.modified = true;
  await User.findByIdAndUpdate(req.params.id, req.body);
  res.status(200).send("Usuario editado");
});

mongoose.connect(
  "mongodb+srv://cristiancubillos0654:QolYJR7ZvwcCLyL6@cluster0.m7ju5gz.mongodb.net/"
);

const PORT = process.env.PORT || 3002;
app.listen(PORT, () =>
  console.log(
    `Servicio de editado de usuarios corriendo en el puerto ${PORT}`
  )
);
