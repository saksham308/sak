CommonJS (Node.js)
Exporting:
Named Exports:

javascript
Copy code
// Module: myModule.js
const myFunction = () => {
  console.log('Hello from myFunction!');
};

const myVariable = 'This is a variable.';

module.exports = {
  myFunction,
  myVariable,
};
Default Export:

javascript
Copy code
// Module: myModule.js
const myFunction = () => {
  console.log('Hello from myFunction!');
};

const myVariable = 'This is a variable.';

module.exports = myFunction; // or module.exports = myVariable; for a variable
Importing:
Named Imports:

javascript
Copy code
// Module: main.js
const { myFunction, myVariable } = require('./myModule');
Default Import:

javascript
Copy code
// Module: main.js
const myFunction = require('./myModule');
ES6 Modules (Browser, modern Node.js versions)
Exporting:
Named Exports:

javascript
Copy code
// Module: myModule.js
export const myFunction = () => {
  console.log('Hello from myFunction!');
};

export const myVariable = 'This is a variable.';
Default Export:

javascript
Copy code
// Module: myModule.js
const myFunction = () => {
  console.log('Hello from myFunction!');
};

export default myFunction; // or export default 'This is a variable'; for a variable
Importing:
Named Imports:

javascript
Copy code
// Module: main.js
import { myFunction, myVariable } from './myModule';
Default Import:

javascript
Copy code
// Module: main.js
import myFunction from './myModule';
Note:
CommonJS is synchronous, and imports are loaded at runtime.
ES6 modules are asynchronous and statically analyzable, allowing for more optimizations.
When using ES6 modules, the file extension (e.g., .js) is usually required in the import statement.
ES6 modules use export and import keywords, while CommonJS uses module.exports and require.
