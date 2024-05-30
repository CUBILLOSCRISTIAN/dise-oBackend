const cloudinary = require("cloudinary").v2;

// Configuration
cloudinary.config({
  cloud_name: "dgugt2mhf",
  api_key: "352956673211354",
  api_secret: "EeiKtbM7EAINs2KoXZULIOWWE3U",
});

module.exports = cloudinary;
