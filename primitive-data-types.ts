// Primitive Data Types in TypeScript
// Following Maximilian's TypeScript Course

// ========================================
// 1. Number Type
// ========================================
// All numbers in TypeScript (integers, floats, decimals, hex, binary, octal) are of type 'number'
let age: number = 30;
let price: number = 19.99;
let hexNumber: number = 0xf00d;
let binaryNumber: number = 0b1010;

console.log('Number examples:', { age, price, hexNumber, binaryNumber });

// ========================================
// 2. String Type
// ========================================
// Text values are of type 'string'
let firstName: string = 'John';
let lastName: string = "Doe";
let fullName: string = `${firstName} ${lastName}`; // Template literals

console.log('String examples:', { firstName, lastName, fullName });

// ========================================
// 3. Boolean Type
// ========================================
// True/false values are of type 'boolean'
let isActive: boolean = true;
let isCompleted: boolean = false;
let hasPermission: boolean = 2 > 1; // Result of comparison

console.log('Boolean examples:', { isActive, isCompleted, hasPermission });

// ========================================
// 4. Type Inference
// ========================================
// TypeScript can automatically infer types
let inferredNumber = 100; // TypeScript infers this as number
let inferredString = 'Hello'; // TypeScript infers this as string
let inferredBoolean = true; // TypeScript infers this as boolean

// inferredNumber = 'text'; // Error: Type 'string' is not assignable to type 'number'

console.log('Type inference examples:', { inferredNumber, inferredString, inferredBoolean });

// ========================================
// 5. Best Practice: Let TypeScript Infer
// ========================================
// It's often better to let TypeScript infer types when initializing variables
let count = 0; // Preferred over: let count: number = 0;
let message = 'Hello'; // Preferred over: let message: string = 'Hello';

// Only explicitly type when necessary (e.g., when declaring without initialization)
let futureValue: number;
futureValue = 42;

console.log('Best practice examples:', { count, message, futureValue });
