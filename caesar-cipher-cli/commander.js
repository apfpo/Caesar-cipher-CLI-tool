const commander = require('commander')
const fs = require('fs')

commander
    .storeOptionsAsProperties(false)
    .option('-s, --shift <number>', 'a shift')
    .option('-i, --input <filename>', 'an input file')
    .option('-o, --output <filename>', 'an output file')
    .option('-a --action [type]', 'an action encode/decode')
    .parse(process.argv)

const {action, shift, output } = commander.opts();

if (action != 'decode' && action != 'encode') {
  process.stderr.write(
    'Invalid parameter! Please, write encode/decode for action parameter\n'
  );
  process.on('exit', () => {
    const exit = process.exit;
    console.log(`About to exit with code: ${1}`);
    exit(1);
  });
}

if (isNaN(shift)) {
  process.stderr.write(
    'Invalid parameter! Please, write number for shift parameter\n'
  );
  console.log(`About to exit with code: ${2}`);
}

fs.stat(`${output}`, err => {
  return err === null
    ? (commander.correctWay = true)
    : process.on('exit', () => {
        commander.correctWay = false;
      });
});

module.exports = commander;