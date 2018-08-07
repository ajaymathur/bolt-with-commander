const commander = require("commander");
const colors = require("colors");
const { getAllOptions } = require("../util/getOptions");

commander
  .command("install")
  .allowUnknownOption()
  .description("add dependency to repository")
  .action(install);

async function install(args = [], options) {
  let extraArgs = await getAllOptions(process.argv);
  console.log(`
  $ yarn install ${colors.green(extraArgs.join(" "))}
  `);
}

exports.install = install;
