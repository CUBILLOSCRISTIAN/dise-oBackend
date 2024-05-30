const mongoose = require("mongoose");

const logerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      match: [/.+\@.+\..+/, "Por favor ingrese un correo válido"],
    },
    numberPhone: {
      type: String,
      match: [
        /^\d{10}$/,
        "Por favor ingrese un número de teléfono válido de 10 dígitos",
      ],
    },
    gender: {
      type: String,
      enum: ["M", "F", "NB", "PNR"],
    },
    avatar: {
      type: String,
      trim: true,
    },
    documentType: {
      type: String,

      enum: ["CC", "TI"],
    },
    numberDocument: {
      type: String,

      trim: true,
    },
    birthDay: {
      type: Date,
    },
    status: {
      type: String,
      enum: ["created", "edited", "deleted"],
      default: "created",
    },
    DataTransfer: {
      type: Date, 
      default: Date.now,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Log = mongoose.model("Logger", logerSchema);

module.exports = Log;
