#!/usr/bin/env node

const commander = require("commander");
const pkg = require("./package.json");
const commands = require("./commands");

commander
  .version(pkg.version, "-v, --version")
  .usage("[command] [flags]")
  .parse(process.argv);
