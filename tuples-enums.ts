// Tuples and Enums in TypeScript
// Following Maximilian's TypeScript Course

// ========================================
// 1. Tuples
// ========================================
// Tuples are fixed-length arrays with specific types for each element
// Useful when you know exactly how many elements and their types

let person: [string, number] = ['John', 30]; // [name, age]
let coordinate: [number, number] = [10, 20]; // [x, y]

console.log('Tuple examples:', { person, coordinate });

// Accessing tuple elements
console.log('Person name:', person[0]); // 'John'
console.log('Person age:', person[1]); // 30

// Tuples enforce type and position
// person = [30, 'John']; // Error: Type 'number' is not assignable to type 'string'
// person = ['John', '30']; // Error: Type 'string' is not assignable to type 'number'

// ========================================
// 2. Tuple Methods (Limitation)
// ========================================
// Note: push() and pop() are allowed on tuples (TypeScript limitation)
person.push('extra'); // This is allowed but breaks the tuple contract
console.log('After push (limitation):', person);

// ========================================
// 3. Complex Tuples
// ========================================
let user: [number, string, boolean] = [1, 'alice', true]; // [id, username, isActive]
let rgbColor: [number, number, number] = [255, 128, 0]; // RGB values

console.log('Complex tuples:', { user, rgbColor });

// ========================================
// 4. Enums - Numeric Enums
// ========================================
// Enums allow us to define named constants
// By default, enums are number-based starting from 0

enum Role {
  ADMIN,      // 0
  READ_ONLY,  // 1
  AUTHOR      // 2
}

let userRole: Role = Role.ADMIN;
console.log('User role:', userRole); // 0
console.log('Role name:', Role[0]); // 'ADMIN'

// Using enum in conditional
if (userRole === Role.ADMIN) {
  console.log('User is an admin');
}

// ========================================
// 5. Enums with Custom Values
// ========================================
// You can assign custom numeric values
enum Status {
  PENDING = 100,
  IN_PROGRESS = 200,
  COMPLETED = 300,
  CANCELLED = 400
}

let orderStatus: Status = Status.IN_PROGRESS;
console.log('Order status:', orderStatus); // 200

// ========================================
// 6. String Enums
// ========================================
// String enums are more readable and easier to debug
enum Direction {
  UP = 'UP',
  DOWN = 'DOWN',
  LEFT = 'LEFT',
  RIGHT = 'RIGHT'
}

let moveDirection: Direction = Direction.UP;
console.log('Move direction:', moveDirection); // 'UP'

// ========================================
// 7. Heterogeneous Enums (Not Recommended)
// ========================================
// Mixing strings and numbers is possible but not recommended
enum MixedEnum {
  No = 0,
  Yes = 'YES'
}

console.log('Mixed enum:', MixedEnum.No, MixedEnum.Yes); // 0, 'YES'

// ========================================
// 8. Const Enums
// ========================================
// Const enums are removed during compilation for better performance
const enum HttpStatus {
  OK = 200,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500
}

let responseStatus: HttpStatus = HttpStatus.OK;
console.log('HTTP status:', responseStatus); // 200

// ========================================
// 9. Practical Example
// ========================================
enum Priority {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH'
}

interface Task {
  id: number;
  title: string;
  priority: Priority;
}

let task: Task = {
  id: 1,
  title: 'Complete TypeScript course',
  priority: Priority.HIGH
};

console.log('Task with enum:', task);
