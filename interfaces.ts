// Interfaces in TypeScript
// Following Maximilian's TypeScript Course

// ========================================
// 1. Basic Interface Definition
// ========================================
// Interfaces define the structure of an object
interface Person {
  name: string;
  age: number;
}

let john: Person = {
  name: 'John Doe',
  age: 30
};

console.log('Person:', john);

// ========================================
// 2. Optional Properties
// ========================================
interface Employee {
  readonly id: number;
  name: string;
  age: number;
  department?: string; // Optional property
  email?: string;
}

let emp1: Employee = {
  id: 1,
  name: 'Alice',
  age: 28,
  department: 'Engineering'
};

let emp2: Employee = {
  id: 2,
  name: 'Bob',
  age: 35
  // No department or email
};

console.log('Employees:', { emp1, emp2 });

// ========================================
// 3. Readonly Properties
// ========================================
interface Point {
  readonly x: number;
  readonly y: number;
}

let point: Point = { x: 10, y: 20 };
// point.x = 5; // Error: Cannot assign to 'x' because it is a read-only property

console.log('Point:', point);

// ========================================
// 4. Function Types in Interfaces
// ========================================
interface MathOperation {
  (a: number, b: number): number;
}

let add: MathOperation = (x, y) => x + y;
let subtract: MathOperation = (x, y) => x - y;

console.log('Math operations:', {
  sum: add(10, 5),
  difference: subtract(10, 5)
});

// ========================================
// 5. Interface Methods
// ========================================
interface Greetable {
  name: string;
  greet(phrase: string): void;
}

let user: Greetable = {
  name: 'Max',
  greet(phrase: string) {
    console.log(`${phrase} ${this.name}`);
  }
};

user.greet('Hello,');

// ========================================
// 6. Implementing Interfaces in Classes
// ========================================
interface Animal {
  name: string;
  makeSound(): void;
}

class Dog implements Animal {
  constructor(public name: string) {}

  makeSound(): void {
    console.log(`${this.name} says: Woof!`);
  }

  // Additional methods not in interface are OK
  fetch(): void {
    console.log(`${this.name} fetches the ball`);
  }
}

class Cat implements Animal {
  constructor(public name: string) {}

  makeSound(): void {
    console.log(`${this.name} says: Meow!`);
  }
}

const dog = new Dog('Buddy');
const cat = new Cat('Whiskers');
dog.makeSound();
cat.makeSound();

// ========================================
// 7. Multiple Interface Implementation
// ========================================
interface Walkable {
  walk(): void;
}

interface Swimmable {
  swim(): void;
}

class Duck implements Walkable, Swimmable {
  walk(): void {
    console.log('Duck is walking');
  }

  swim(): void {
    console.log('Duck is swimming');
  }
}

const duck = new Duck();
duck.walk();
duck.swim();

// ========================================
// 8. Interface Inheritance
// ========================================
interface Shape {
  color: string;
}

interface Circle extends Shape {
  radius: number;
}

interface Rectangle extends Shape {
  width: number;
  height: number;
}

let circle: Circle = {
  color: 'red',
  radius: 5
};

let rectangle: Rectangle = {
  color: 'blue',
  width: 10,
  height: 20
};

console.log('Shapes:', { circle, rectangle });

// ========================================
// 9. Extending Multiple Interfaces
// ========================================
interface Named {
  name: string;
}

interface Aged {
  age: number;
}

interface Student extends Named, Aged {
  studentId: string;
  courses: string[];
}

let student: Student = {
  name: 'Emma',
  age: 20,
  studentId: 'S12345',
  courses: ['Math', 'Physics', 'Chemistry']
};

console.log('Student:', student);

// ========================================
// 10. Interfaces vs Type Aliases
// ========================================
// Interface
interface IUser {
  id: number;
  username: string;
}

// Type alias
type TUser = {
  id: number;
  username: string;
};

// Both work similarly for object types
let user1: IUser = { id: 1, username: 'alice' };
let user2: TUser = { id: 2, username: 'bob' };

// Key difference: Interfaces can be extended/implemented
interface IAdmin extends IUser {
  privileges: string[];
}

// Type aliases can use unions and other features
type ID = number | string;

console.log('Users:', { user1, user2 });

// ========================================
// 11. Index Signatures
// ========================================
interface StringDictionary {
  [key: string]: string;
}

let translations: StringDictionary = {
  hello: 'hola',
  goodbye: 'adiós',
  thanks: 'gracias'
};

console.log('Translations:', translations);

interface NumberDictionary {
  [index: number]: string;
}

let daysOfWeek: NumberDictionary = {
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday'
};

console.log('Days:', daysOfWeek);

// ========================================
// 12. Practical Example: API Response
// ========================================
interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  timestamp: Date;
}

interface UserData {
  id: number;
  name: string;
  email: string;
}

function fetchUser(id: number): ApiResponse<UserData> {
  if (id > 0) {
    return {
      success: true,
      data: {
        id: id,
        name: 'John Doe',
        email: 'john@example.com'
      },
      timestamp: new Date()
    };
  } else {
    return {
      success: false,
      error: 'Invalid user ID',
      timestamp: new Date()
    };
  }
}

console.log('API Response:', fetchUser(1));

// ========================================
// 13. Interface for Class Constructor
// ========================================
interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface;
}

interface ClockInterface {
  tick(): void;
}

class DigitalClock implements ClockInterface {
  constructor(h: number, m: number) {
    console.log(`Digital Clock set to ${h}:${m}`);
  }
  
  tick() {
    console.log('Digital: beep beep');
  }
}

class AnalogClock implements ClockInterface {
  constructor(h: number, m: number) {
    console.log(`Analog Clock set to ${h}:${m}`);
  }
  
  tick() {
    console.log('Analog: tick tock');
  }
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
  return new ctor(hour, minute);
}

let digital = createClock(DigitalClock, 12, 30);
let analog = createClock(AnalogClock, 3, 15);
digital.tick();
analog.tick();
