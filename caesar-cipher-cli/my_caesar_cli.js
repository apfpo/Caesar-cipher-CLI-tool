const fs = require('fs')
const path = require('path')
const {pipeline} = require('stream')
const encode = require('./encode')
const commander = require('./commander')
const { action, shift, input, output } = commander.opts();
const pipe = require('./pipe')


const rs = input ? fs.createReadStream(path.join(__dirname, input)) : process.stdin;
const ws = output ? fs.createWriteStream(path.join(__dirname, output), { flags: 'a+' }) : process.stdout;

const transform = new pipe(encode, shift)


pipeline(rs, transform, ws, err => {
  if (err) {
    console.error('Pipeline failed.', err);
  } else {
    console.log('Pipeline succeeded.');
  }
});