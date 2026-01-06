// Functions in TypeScript
// Following Maximilian's TypeScript Course

// ========================================
// 1. Function Return Types
// ========================================
// TypeScript infers return types, but you can be explicit
function add(n1: number, n2: number): number {
  return n1 + n2;
}

function greet(name: string): string {
  return `Hello, ${name}!`;
}

console.log('Function results:', {
  sum: add(5, 10),
  greeting: greet('TypeScript')
});

// ========================================
// 2. Void Return Type
// ========================================
// Functions that don't return a value have type 'void'
function printResult(num: number): void {
  console.log('Result:', num);
  // No return statement
}

printResult(add(5, 12));

// ========================================
// 3. Undefined Return Type
// ========================================
// If a function explicitly returns undefined, use 'undefined' type
function returnUndefined(): undefined {
  console.log('This function returns undefined');
  return undefined;
}

let result = returnUndefined();
console.log('Undefined result:', result);

// ========================================
// 4. Function Types
// ========================================
// You can define types for entire functions
let combineValues: (a: number, b: number) => number;

combineValues = add; // OK
// combineValues = printResult; // Error: Type mismatch

console.log('Using function type:', combineValues(8, 8));

// ========================================
// 5. Function Types with Callbacks
// ========================================
function addAndHandle(n1: number, n2: number, callback: (num: number) => void) {
  const result = n1 + n2;
  callback(result);
}

addAndHandle(10, 20, (result) => {
  console.log('Callback result:', result);
});

// ========================================
// 6. Optional Parameters
// ========================================
// Use ? to make parameters optional
function buildName(firstName: string, lastName?: string): string {
  if (lastName) {
    return `${firstName} ${lastName}`;
  }
  return firstName;
}

console.log('Optional parameters:', {
  fullName: buildName('John', 'Doe'),
  firstName: buildName('John')
});

// ========================================
// 7. Default Parameters
// ========================================
// Provide default values for parameters
function calculateTax(amount: number, taxRate: number = 0.1): number {
  return amount * taxRate;
}

console.log('Default parameters:', {
  withDefault: calculateTax(100),
  withCustom: calculateTax(100, 0.2)
});

// ========================================
// 8. Rest Parameters
// ========================================
// Use rest parameters to accept unlimited arguments
function sum(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log('Rest parameters:', {
  sum1: sum(1, 2, 3),
  sum2: sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
});

// ========================================
// 9. Function Overloading
// ========================================
// Define multiple function signatures
function combine(a: number, b: number): number;
function combine(a: string, b: string): string;
function combine(a: number | string, b: number | string): number | string {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else {
    return a.toString() + b.toString();
  }
}

console.log('Function overloading:', {
  numbers: combine(5, 10),
  strings: combine('Hello, ', 'World!')
});

// ========================================
// 10. Arrow Functions
// ========================================
const multiply = (x: number, y: number): number => x * y;
const square = (x: number): number => x * x;
const logMessage = (msg: string): void => console.log('Message:', msg);

console.log('Arrow functions:', {
  multiplication: multiply(4, 5),
  squared: square(7)
});

logMessage('TypeScript is awesome!');

// ========================================
// 11. Never Return Type
// ========================================
// Functions that never return (throw errors or infinite loops)
function throwError(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {
    // Infinite loop
  }
}

// Uncomment to test (will throw error):
// throwError('Something went wrong!');

// ========================================
// 12. Practical Example: Validation
// ========================================
type ValidationResult = { isValid: true } | { isValid: false; errors: string[] };

function validateEmail(email: string): ValidationResult {
  const errors: string[] = [];
  
  if (!email.includes('@')) {
    errors.push('Email must contain @');
  }
  
  if (email.length < 5) {
    errors.push('Email must be at least 5 characters');
  }
  
  if (errors.length > 0) {
    return { isValid: false, errors };
  }
  
  return { isValid: true };
}

console.log('Email validation:', {
  valid: validateEmail('test@example.com'),
  invalid: validateEmail('bad')
});

// ========================================
// 13. Higher-Order Functions
// ========================================
function createMultiplier(multiplier: number): (n: number) => number {
  return (n: number) => n * multiplier;
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log('Higher-order functions:', {
  doubled: double(5),
  tripled: triple(5)
});
