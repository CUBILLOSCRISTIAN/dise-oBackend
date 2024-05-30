// create-user-service/index.js
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./user.model");
const upload = require("./config/multer");
const cloudinary = require("./config/cloudinary");

app.use(express.json());
app.use(cors());

app.post("/users", upload.single("avatar"), async (req, res) => {
  let pictureURL = "";
  const data = {
    ...req.body,
  };
  if (req.file) {
    const res = await cloudinary.uploader.upload(req.file.path, {
      public_id: "test" + "-" + Date.now(),
    });
    data.avatar = res.public_id;
  }

  const user = new User(data);
  await user.save();
  if (user.avatar) {
    user.avatar = cloudinary.url(user.avatar, {
      width: 500,
      height: 500,
      Crop: "fill",
    });
  }
  res.status(201).send(user);
});

mongoose.connect(
  "mongodb+srv://cristiancubillos0654:QolYJR7ZvwcCLyL6@cluster0.m7ju5gz.mongodb.net/"
);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () =>
  console.log(`Servicio de creación de usuarios corriendo en el puerto ${PORT}`)
);
