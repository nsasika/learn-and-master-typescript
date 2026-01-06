// Advanced Types in TypeScript
// Following Maximilian's TypeScript Course

// ========================================
// 1. Intersection Types
// ========================================
// Combine multiple types into one
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

let emp1: ElevatedEmployee = {
  name: 'Max',
  privileges: ['create-server'],
  startDate: new Date()
};

console.log('Elevated employee:', emp1);

// Intersection with primitives
type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric; // Results in 'number'

let value: Universal = 42;
console.log('Universal value:', value);

// ========================================
// 2. Type Guards
// ========================================
// Using typeof
function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

console.log('Type guard examples:', {
  numbers: add(5, 10),
  strings: add('Hello, ', 'World!'),
  mixed: add('Value: ', 42)
});

// Using 'in' operator
type UnknownEmployee = Employee | Admin;

function printEmployeeInfo(emp: UnknownEmployee) {
  console.log('Name:', emp.name);
  if ('privileges' in emp) {
    console.log('Privileges:', emp.privileges);
  }
  if ('startDate' in emp) {
    console.log('Start Date:', emp.startDate);
  }
}

printEmployeeInfo(emp1);

// ========================================
// 3. instanceof Type Guard
// ========================================
class Car {
  drive() {
    console.log('Driving a car...');
  }
}

class Truck {
  drive() {
    console.log('Driving a truck...');
  }

  loadCargo(amount: number) {
    console.log('Loading cargo:', amount);
  }
}

type Vehicle = Car | Truck;

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

const car = new Car();
const truck = new Truck();
useVehicle(car);
useVehicle(truck);

// ========================================
// 4. Discriminated Unions
// ========================================
// Pattern for type guards with literal types
interface Bird {
  type: 'bird'; // Discriminant property
  flyingSpeed: number;
}

interface Horse {
  type: 'horse'; // Discriminant property
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      console.log('Flying at speed:', speed);
      break;
    case 'horse':
      speed = animal.runningSpeed;
      console.log('Running at speed:', speed);
      break;
  }
}

moveAnimal({ type: 'bird', flyingSpeed: 50 });
moveAnimal({ type: 'horse', runningSpeed: 30 });

// ========================================
// 5. Type Casting
// ========================================
// Two syntaxes for type casting
// NOTE: These examples are for learning purposes and will fail in Node.js
// Uncomment when using in a browser environment

// const input1 = document.getElementById('user-input'); // HTMLElement | null
// const input2 = <HTMLInputElement>document.getElementById('email-input'); // Angle bracket syntax (doesn't work in React JSX)
// const input3 = document.getElementById('password-input') as HTMLInputElement; // 'as' syntax (preferred)

// With null check
// const userInput = document.getElementById('username');
// if (userInput) {
//   (userInput as HTMLInputElement).value = 'Max';
// }

// Or using non-null assertion operator
// const emailInput = document.getElementById('email')!; // ! means it won't be null
// (emailInput as HTMLInputElement).value = 'test@example.com';

console.log('Type casting examples (DOM operations commented out for Node.js compatibility)');

// ========================================
// 6. Index Properties
// ========================================
// For objects with flexible property names
interface ErrorContainer {
  [key: string]: string; // Index signature
}

const errorBag: ErrorContainer = {
  email: 'Not a valid email',
  username: 'Must start with a character',
  password: 'Must be at least 8 characters'
};

console.log('Error container:', errorBag);

// ========================================
// 7. Function Overloads
// ========================================
// Define multiple function signatures
function combine(a: number, b: number): number;
function combine(a: string, b: string): string;
function combine(a: string, b: number): string;
function combine(a: number, b: string): string;
function combine(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result1 = combine(1, 5);
const result2 = combine('Max', ' Schwarz');
const result3 = combine('Age: ', 30);

console.log('Function overloads:', { result1, result2, result3 });

// ========================================
// 8. Optional Chaining
// ========================================
// Safely access nested properties
interface UserData {
  id: number;
  name: string;
  job?: {
    title: string;
    description?: string;
  };
}

const userData: UserData = {
  id: 1,
  name: 'Max'
  // No job property
};

const userData2: UserData = {
  id: 2,
  name: 'John',
  job: { title: 'Developer' }
};

console.log('Optional chaining:');
console.log(userData.job?.title); // undefined (no error)
console.log(userData2.job?.title); // 'Developer'
console.log(userData2.job?.description); // undefined

// ========================================
// 9. Nullish Coalescing
// ========================================
// Use ?? to provide default values for null or undefined
const userInput1 = null;
const userInput2 = '';
const userInput3 = 0;

const storedData1 = userInput1 ?? 'DEFAULT'; // 'DEFAULT' (null)
const storedData2 = userInput2 ?? 'DEFAULT'; // '' (empty string is not nullish)
const storedData3 = userInput3 ?? 'DEFAULT'; // 0 (0 is not nullish)

console.log('Nullish coalescing:', { storedData1, storedData2, storedData3 });

// Compare with || operator
const orData1 = userInput1 || 'DEFAULT'; // 'DEFAULT'
const orData2 = userInput2 || 'DEFAULT'; // 'DEFAULT' (treats empty string as falsy)
const orData3 = userInput3 || 'DEFAULT'; // 'DEFAULT' (treats 0 as falsy)

console.log('OR operator:', { orData1, orData2, orData3 });

// ========================================
// 10. Type Predicates
// ========================================
// Custom type guard functions
interface Fish {
  swim: () => void;
}

interface Bird2 {
  fly: () => void;
}

function isFish(pet: Fish | Bird2): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function move(pet: Fish | Bird2) {
  if (isFish(pet)) {
    pet.swim();
  } else {
    pet.fly();
  }
}

const fish: Fish = { swim: () => console.log('Swimming...') };
const bird: Bird2 = { fly: () => console.log('Flying...') };

move(fish);
move(bird);

// ========================================
// 11. Mapped Types
// ========================================
// Create new types based on old ones
// Note: TypeScript has built-in Readonly<T> and Partial<T> utility types
// These are custom implementations for learning purposes

type CustomReadonly<T> = {
  readonly [P in keyof T]: T[P];
};

type CustomOptional<T> = {
  [P in keyof T]?: T[P];
};

interface Point {
  x: number;
  y: number;
}

type ReadonlyPoint = CustomReadonly<Point>;
type OptionalPoint = CustomOptional<Point>;

const readonlyPoint: ReadonlyPoint = { x: 10, y: 20 };
// readonlyPoint.x = 5; // Error: Cannot assign to 'x' because it is a read-only property

const optionalPoint: OptionalPoint = { x: 10 }; // y is optional

console.log('Mapped types:', { readonlyPoint, optionalPoint });

// ========================================
// 12. Conditional Types
// ========================================
// Types that depend on conditions
type StringOrNumber<T> = T extends string ? string : number;

type Type1 = StringOrNumber<string>; // string
type Type2 = StringOrNumber<boolean>; // number

let value1: Type1 = 'hello';
let value2: Type2 = 42;

console.log('Conditional types:', { value1, value2 });

// ========================================
// 13. Practical Example: API Error Handling
// ========================================
interface SuccessResponse<T> {
  status: 'success';
  data: T;
}

interface ErrorResponse {
  status: 'error';
  error: {
    code: number;
    message: string;
  };
}

type ApiResponse<T> = SuccessResponse<T> | ErrorResponse;

function handleResponse<T>(response: ApiResponse<T>): T | null {
  if (response.status === 'success') {
    return response.data;
  } else {
    console.error(`Error ${response.error.code}: ${response.error.message}`);
    return null;
  }
}

const successResponse: ApiResponse<{ name: string }> = {
  status: 'success',
  data: { name: 'John' }
};

const errorResponse: ApiResponse<any> = {
  status: 'error',
  error: { code: 404, message: 'Not found' }
};

console.log('API handling:');
console.log(handleResponse(successResponse));
console.log(handleResponse(errorResponse));
