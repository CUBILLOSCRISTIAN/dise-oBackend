const logerActions = require("./loger.actions");

async function GetLog() {
  const log = await logerActions.getLogByMongo();
  return log;
}

async function CreateLog(data) {

  const logCreated = await logerActions.createLogByMongo(data);
  return logCreated;
}

module.exports = { GetLog, CreateLog };
