// Arrays and Objects in TypeScript
// Following Maximilian's TypeScript Course

// ========================================
// 1. Array Types
// ========================================
// Arrays can store multiple values of the same type
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ['Alice', 'Bob', 'Charlie'];
let mixedArray: (number | string)[] = [1, 'two', 3, 'four']; // Union type array

// Alternative syntax using generic type
let scores: Array<number> = [85, 90, 78, 92];

console.log('Array examples:', { numbers, names, mixedArray, scores });

// Array methods maintain type safety
numbers.push(6); // OK
// numbers.push('7'); // Error: Argument of type 'string' is not assignable to parameter of type 'number'

// ========================================
// 2. Object Types
// ========================================
// Objects with specific property types
let person: { name: string; age: number } = {
  name: 'John Doe',
  age: 30
};

console.log('Object example:', person);

// ========================================
// 3. Type Inference with Objects
// ========================================
// TypeScript infers object structure
let product = {
  id: 1,
  title: 'Laptop',
  price: 999.99,
  inStock: true
};

// TypeScript knows the structure:
// product.title = 'Desktop'; // OK
// product.title = 123; // Error: Type 'number' is not assignable to type 'string'

console.log('Inferred object:', product);

// ========================================
// 4. Nested Objects
// ========================================
let employee: {
  id: number;
  name: string;
  contact: {
    email: string;
    phone: string;
  };
} = {
  id: 101,
  name: 'Jane Smith',
  contact: {
    email: 'jane@example.com',
    phone: '555-1234'
  }
};

console.log('Nested object:', employee);

// ========================================
// 5. Array of Objects
// ========================================
let users: { id: number; username: string; isAdmin: boolean }[] = [
  { id: 1, username: 'alice', isAdmin: true },
  { id: 2, username: 'bob', isAdmin: false },
  { id: 3, username: 'charlie', isAdmin: false }
];

console.log('Array of objects:', users);

// ========================================
// 6. Any Type (Not Recommended)
// ========================================
// 'any' disables type checking - use sparingly!
let flexibleValue: any = 'Hello';
flexibleValue = 42;
flexibleValue = true;
flexibleValue = [1, 2, 3];

console.log('Any type example:', flexibleValue);
