const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      match: [/.+\@.+\..+/, "Por favor ingrese un correo válido"],
    },
    numberPhone: {
      type: String,
      required: true,
      match: [
        /^\d{10}$/,
        "Por favor ingrese un número de teléfono válido de 10 dígitos",
      ],
    },
    gender: {
      type: String,
      enum: ["M", "F", "NB", "PNR"],
      required: true,
    },
    avatar: {
      type: String,
      trim: true,
    },
    documentType: {
      type: String,
      required: true,
      enum: ["CC", "TI"],
    },
    numberDocument: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    birthDay: {
      type: Date,
      required: true,
    },
    deleted: {
      type: Boolean,
      default: false,
    },
    modified: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
