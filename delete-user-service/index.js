// delete-user-service/index.js
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./user.model");

app.use(express.json());
app.use(cors());

app.patch("/users/delete/:id", async (req, res) => {
  await User.findByIdAndUpdate(req.params.id, req.body);
  res.status(200).send({ message: "Usuario eliminado" });
});

mongoose.connect(
  "mongodb+srv://cristiancubillos0654:QolYJR7ZvwcCLyL6@cluster0.m7ju5gz.mongodb.net/"
);

const PORT = process.env.PORT || 3003;
app.listen(PORT, () =>
  console.log(
    `Servicio de eliminacion de usuarios corriendo en el puerto ${PORT}`
  )
);
