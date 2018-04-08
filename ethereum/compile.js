const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

//define the "build" folder path
const buildPath = path.resolve(__dirname, 'build');
//delete the build folder and everything in it
fs.removeSync(buildPath);

const eventPath = path.resolve(__dirname, 'contracts', 'Event.sol');
const source = fs.readFileSync(eventPath, 'utf8');
const output = solc.compile(source, 1).contracts;

//console.log(output);

//check if directory exists - if not, create it
fs.ensureDirSync(buildPath);

//loop over both contracts
for (let contract in output) {
  fs.outputJsonSync(
    path.resolve(buildPath, contract.replace(':', '') + '.json'),
    output[contract]
  );
}
