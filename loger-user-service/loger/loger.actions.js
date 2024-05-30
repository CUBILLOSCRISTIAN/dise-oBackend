const Log = require("./loger.model");
const cloudinary = require("../config/cloudinary");

async function getLogByMongo() {
  const logs = await Log.find();
  for (const loger of logs) {
    if (loger.avatar && loger.avatar !== "") {
      loger.avatar = cloudinary.url(loger.avatar, {
        width: 500,
        height: 500,
        Crop: "fill",
      });
    }
  }
  return logs;
}

async function createLogByMongo(data) {
  if (data.file) {
    const res = await cloudinary.uploader.upload(data.file.path, {
      public_id: "test" + "-" + Date.now(),
    });
    data.avatar = res.public_id;
  }

  let logCreated = new Log(data);
  await logCreated.save();
  if (logCreated.avatar) {
    logCreated.avatar = cloudinary.url(logCreated.avatar, {
      width: 500,
      height: 500,
      Crop: "fill",
    });
  }
  return logCreated;
}

module.exports = {
  getLogByMongo,
  createLogByMongo,
};
