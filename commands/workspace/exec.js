const colors = require("colors");
const { getAllOptions } = require("../../util/getOptions");

async function exec(workspace, options) {
  let extraArgs = await getAllOptions(process.argv);
  console.log(`{
    workspace: ${colors.green(workspace)},
    options: ${colors.green(options)},
    extraArgs: ${colors.green(extraArgs)}
  }`);
}

exports.exec = exec;
