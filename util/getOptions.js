async function getAllOptions(args) {
  let extraArgs = [];

  for (let arg in process.argv) {
    if (process.argv[arg].startsWith("-")) {
      extraArgs = process.argv.slice(arg);
      break;
    }
  }

  return extraArgs;
}

module.exports = {
  getAllOptions
};
