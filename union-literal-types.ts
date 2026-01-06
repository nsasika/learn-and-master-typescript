// Union and Literal Types in TypeScript
// Following Maximilian's TypeScript Course

// ========================================
// 1. Union Types
// ========================================
// Union types allow a value to be one of several types
// Use the | (pipe) operator to combine types

function combine(input1: number | string, input2: number | string) {
  // Type guard to handle different types
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    return input1 + input2;
  } else {
    return input1.toString() + input2.toString();
  }
}

console.log('Union type examples:');
console.log(combine(10, 20)); // 30
console.log(combine('Hello, ', 'World!')); // 'Hello, World!'
console.log(combine('Age: ', 30)); // 'Age: 30'

// ========================================
// 2. Union Types with Variables
// ========================================
let userId: number | string;
userId = 123; // OK
userId = 'abc-123'; // OK
// userId = true; // Error: Type 'boolean' is not assignable

console.log('User ID:', userId);

// ========================================
// 3. Literal Types
// ========================================
// Literal types allow you to specify exact values a variable can have
// Very useful for defining specific allowed values

let taskStatus: 'pending' | 'approved' | 'rejected';
taskStatus = 'pending'; // OK
taskStatus = 'approved'; // OK
// taskStatus = 'cancelled'; // Error: Type '"cancelled"' is not assignable

console.log('Status:', taskStatus);

// ========================================
// 4. Numeric Literal Types
// ========================================
let diceRoll: 1 | 2 | 3 | 4 | 5 | 6;
diceRoll = 4; // OK
// diceRoll = 7; // Error: Type '7' is not assignable

console.log('Dice roll:', diceRoll);

// ========================================
// 5. Combining Union and Literal Types
// ========================================
type ResultStatus = 'success' | 'error' | 'loading';
type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

function makeRequest(url: string, method: HttpMethod): ResultStatus {
  console.log(`Making ${method} request to ${url}`);
  return 'success';
}

let result = makeRequest('/api/users', 'GET');
console.log('Request result:', result);

// ========================================
// 6. Practical Example with Function
// ========================================
type ConversionType = 'as-number' | 'as-text';

function combineValues(
  input1: number | string,
  input2: number | string,
  resultConversion: ConversionType
) {
  let result: number | string;
  
  if ((typeof input1 === 'number' && typeof input2 === 'number') || resultConversion === 'as-number') {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  
  return result;
}

console.log('Combine as number:', combineValues(10, 20, 'as-number')); // 30
console.log('Combine as text:', combineValues(10, 20, 'as-text')); // '1020'
console.log('Combine strings as number:', combineValues('10', '20', 'as-number')); // 30

// ========================================
// 7. Union with Objects
// ========================================
interface Admin {
  name: string;
  privileges: string[];
}

interface Employee {
  name: string;
  startDate: Date;
}

type ElevatedEmployee = Admin | Employee;

let employee1: ElevatedEmployee = {
  name: 'John',
  privileges: ['create-server'],
  startDate: new Date()
};

console.log('Elevated employee:', employee1);

// ========================================
// 8. Type Guards with Union Types
// ========================================
function printEmployeeInfo(emp: Admin | Employee) {
  console.log('Name:', emp.name);
  
  // Type guard using 'in' operator
  if ('privileges' in emp) {
    console.log('Privileges:', emp.privileges);
  }
  
  if ('startDate' in emp) {
    console.log('Start Date:', emp.startDate);
  }
}

printEmployeeInfo(employee1);

// ========================================
// 9. Boolean Literals
// ========================================
let isTrue: true = true;
// isTrue = false; // Error: Type 'false' is not assignable to type 'true'

let toggle: true | false = true; // Same as boolean, but more explicit
toggle = false;

console.log('Boolean literal:', toggle);
