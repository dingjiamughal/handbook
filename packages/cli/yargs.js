#! /usr/bin/env node
const program = require('commander');
const inquirer = require('inquirer');
const chalk = require('chalk');
const pkg = require('../package.json');
const path = require('path');
const fs = require('fs');
const { promises: pfs } = require('fs');
const asyncReduce = require('async/reduce');
const _ = require('lodash');
const prettier = require('prettier');
const shelljs = require('shelljs');
const yaml = require('js-yaml');
const yargs = require('yargs');
const { hideBin } = require('yargs/helpers');
const dedent = require('dedent');

const arg = hideBin(process.argv);

const cli = yargs(arg);

cli
  .usage('Usage: cx-heading create <options>')
  .demandCommand(1, 'A command is Required. Pass --help to see all avaliable command and options')
  .strict()
  .recommendCommands() // 错误纠正
  .fail((err, msg) => {
    console.log(`CX ERROR: ${err}`);
  })
  .alias('h', 'help')
  .alias('v', 'version')
  .wrap(cli.terminalWidth())
  .epilogue(
    dedent`
    当一个命令失败时，所有日志都会被写入当前项目的 cx-debug.log
    查看更多消息，请访问我主页 github
  `
  )
  .options({
    debug: {
      type: 'boolean',
      describe: 'bootstrap debug 模式',
      alias: 'd'
    }
  })
  .group(['debug'], 'Dev Options:')
  .group(['help', 'version'], '常用命令:')
  // command第一种用法
  .command(
    'init [name]',
    'init a project',
    yargs => {
      yargs.option('name', {
        type: 'string',
        describe: 'name of project',
        alias: 'n'
      });
    },
    argv => console.log(argv)
  )
  .command({
    command: 'list',
    aliases: ['ls', 'll', 'la'],
    describe: 'list local packages',
    builder: yargs => {},
    handler: argv => console.log(argv)
  })
  .parse(process.argv.slice(3), { lernaVersion: '1.1.1' });
