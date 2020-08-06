#!/usr/bin/env node
require("./utils/initial");
const { program } = require("commander");
const json = require("@/package.json");


program
  .name(json.name)
  .usage("cyber-type <type>")
  .version(json.version);

program
  .arguments("<type>")
  .description("在DefinitelyTyped查询类型注解")
  .action(require("@/actions/index"));

program.parse(process.argv);


