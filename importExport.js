//Named Exports:
// Module: myModule.js
const myFunction = () => {
  console.log('Hello from myFunction!');
};

const myVariable = 'This is a variable.';

module.exports = {
  myFunction,
  myVariable,
};
//Default Export:
// Module: myModule.js
const myFunction = () => {
  console.log('Hello from myFunction!');
};

const myVariable = 'This is a variable.';

module.exports = myFunction; // or module.exports = myVariable; for a variable

//NamedImports
// Module: main.js
const { myFunction, myVariable } = require('./myModule');

//Default Import
// Module: main.js
const myFunction = require('./myModule');


// ES6 MODULES

//Named Exports:
// Module: myModule.js
export const myFunction = () => {
  console.log('Hello from myFunction!');
};

export const myVariable = 'This is a variable.';

//Default Export:
// Module: myModule.js
const myFunction = () => {
  console.log('Hello from myFunction!');
};

export default myFunction; // or export default 'This is a variable'; for a variable

// Named Imports:
// Module: main.js
import { myFunction, myVariable } from './myModule';

//Default Import:
// Module: main.js
import myFunction from './myModule';

