const commander = require("commander");
const colors = require("colors");
const { getAllOptions } = require("../util/getOptions");

commander
  .command("add <packagesToAdd...>")
  .allowUnknownOption()
  .description("add dependency to repository")
  .action(add);

async function add(args = [], options) {
  let extraArgs = await getAllOptions(process.argv);
  console.log(`
  $ yarn add ${colors.green([args.join(" "), extraArgs.join(" ")].join(" "))}
  `);
}

exports.add = add;
