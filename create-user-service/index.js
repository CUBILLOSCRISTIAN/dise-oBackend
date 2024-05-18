// create-user-service/index.js
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const User = require("./user.model");

app.use(express.json());

app.post("/users", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.status(201).send("Usuario creado");
});

mongoose.connect(
  "mongodb+srv://cristiancubillos0654:QolYJR7ZvwcCLyL6@cluster0.m7ju5gz.mongodb.net/"
);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () =>
  console.log(`Servicio de creación de usuarios corriendo en el puerto ${PORT}`)
);
