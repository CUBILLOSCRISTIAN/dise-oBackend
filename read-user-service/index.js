// delete-user-service/index.js
const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const User = require("./user.model");

app.use(express.json());
app.use(cors());

app.get("/users", async (req, res) => {
  const users = await User.find({ deleted: false });
  res.status(200).send(users);
});

app.get("/users/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  res.status(200).send(user);
});

mongoose.connect(
  "mongodb+srv://cristiancubillos0654:QolYJR7ZvwcCLyL6@cluster0.m7ju5gz.mongodb.net/"
);

const PORT = process.env.PORT || 3004;
app.listen(PORT, () =>
  console.log(`Servicio de lectura de usuarios corriendo en el puerto ${PORT}`)
);
