const commander = require("commander");

const workspaceCommands = {
  ...require("./add"),
  ...require("./exec")
};

commander
  .command("w <workspace> <command> [options...]")
  .allowUnknownOption()
  .description("Run a command against a single workspace")
  .action(workspace);

async function workspace(workspace, subCommand, t, otherOptions) {
  return workspaceCommands[subCommand](workspace);
}

module.exports = workspace;
