#!/usr/bin/env node

const path = require('path');
const program = require('commander');
const buildScript = require('../scripts/scripts');
const buildStyles = require('../scripts/styles');
const copyFiles = require('../scripts/copy');
const pkg = require('../package.json');

const loadConfig = (configFile) => {
  const conf = configFile || 'ecl-builder.config.js';
  return require(path.resolve(process.cwd(), conf)); // eslint-disable-line
};

program
  .version(pkg.version)
  .usage('ecl-builder [command] [option]')
  .option('-c, --config [config_file]', 'config file (default: ecl-builder.config.js)');

program
  .command('scripts')
  .description('compile JS')
  .action((options) => {
    const config = loadConfig(options.config_file);
    config.scripts.forEach(conf => buildScript(conf.entry, conf.dest, conf.options));
  });

program
  .command('styles')
  .description('compile SCSS to CSS')
  .action((options) => {
    const config = loadConfig(options.config_file);
    config.styles.forEach(conf => buildStyles(conf.entry, conf.dest, conf.options));
  });

program
  .command('copy')
  .description('copy static files')
  .action((options) => {
    const config = loadConfig(options.config_file);
    config.copy.forEach(conf => copyFiles(conf.patterns || '**', conf.from, conf.to));
  });

// If no arguments provided, display help menu.
if (!process.argv.slice(2).length) {
  program.help();
} else {
  program.parse(process.argv);
}
