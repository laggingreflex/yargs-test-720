#!/usr/bin/env node

const config = require('yargs').options({
  x: {
    type: 'number'
  }
}).argv

console.log(config.x);

