// Generics in TypeScript
// Following Maximilian's TypeScript Course

// ========================================
// 1. Generic Functions
// ========================================
// Generics allow us to write flexible, reusable code
function identity<T>(arg: T): T {
  return arg;
}

let output1 = identity<string>('Hello');
let output2 = identity<number>(42);
let output3 = identity('TypeScript'); // Type inference

console.log('Generic identity:', { output1, output2, output3 });

// ========================================
// 2. Working with Arrays
// ========================================
function getFirstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

let firstNumber = getFirstElement([1, 2, 3]); // number | undefined
let firstName = getFirstElement(['Alice', 'Bob']); // string | undefined

console.log('First elements:', { firstNumber, firstName });

// ========================================
// 3. Multiple Type Parameters
// ========================================
function merge<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

const mergedObj = merge({ name: 'Max' }, { age: 30 });
console.log('Merged object:', mergedObj);
console.log('Name:', mergedObj.name); // TypeScript knows about 'name'
console.log('Age:', mergedObj.age); // TypeScript knows about 'age'

// ========================================
// 4. Generic Constraints
// ========================================
// Use 'extends' to add constraints to generics
interface Lengthy {
  length: number;
}

function logLength<T extends Lengthy>(element: T): T {
  console.log('Length:', element.length);
  return element;
}

logLength('Hello'); // string has length
logLength([1, 2, 3]); // array has length
logLength({ length: 10, value: 'test' }); // object with length property
// logLength(10); // Error: number doesn't have length property

// ========================================
// 5. keyof Constraint
// ========================================
// Ensure a key exists in an object
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const person = {
  name: 'Max',
  age: 30,
  occupation: 'Developer'
};

const personName = getProperty(person, 'name'); // 'Max'
const personAge = getProperty(person, 'age'); // 30
// const invalid = getProperty(person, 'salary'); // Error: 'salary' doesn't exist

console.log('Get property:', { personName, personAge });

// ========================================
// 6. Generic Classes
// ========================================
class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T): void {
    this.data.push(item);
  }

  removeItem(item: T): void {
    const index = this.data.indexOf(item);
    if (index > -1) {
      this.data.splice(index, 1);
    }
  }

  getItems(): T[] {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Apple');
textStorage.addItem('Banana');
textStorage.removeItem('Apple');
console.log('Text storage:', textStorage.getItems());

const numberStorage = new DataStorage<number>();
numberStorage.addItem(1);
numberStorage.addItem(2);
numberStorage.addItem(3);
console.log('Number storage:', numberStorage.getItems());

// ========================================
// 7. Generic Interfaces
// ========================================
interface Repository<T> {
  getById(id: number): T | undefined;
  getAll(): T[];
  create(item: T): void;
  update(id: number, item: T): void;
  delete(id: number): void;
}

interface User {
  id: number;
  name: string;
  email: string;
}

class UserRepository implements Repository<User> {
  private users: User[] = [];

  getById(id: number): User | undefined {
    return this.users.find(u => u.id === id);
  }

  getAll(): User[] {
    return [...this.users];
  }

  create(user: User): void {
    this.users.push(user);
  }

  update(id: number, user: User): void {
    const index = this.users.findIndex(u => u.id === id);
    if (index > -1) {
      this.users[index] = user;
    }
  }

  delete(id: number): void {
    this.users = this.users.filter(u => u.id !== id);
  }
}

const userRepo = new UserRepository();
userRepo.create({ id: 1, name: 'Alice', email: 'alice@example.com' });
userRepo.create({ id: 2, name: 'Bob', email: 'bob@example.com' });
console.log('All users:', userRepo.getAll());

// ========================================
// 8. Generic Utility Types
// ========================================
// Partial<T> - Makes all properties optional
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>): Todo {
  return { ...todo, ...fieldsToUpdate };
}

const todo1: Todo = {
  title: 'Learn TypeScript',
  description: 'Study generics',
  completed: false
};

const todo2 = updateTodo(todo1, { completed: true });
console.log('Updated todo:', todo2);

// Readonly<T> - Makes all properties readonly
const readonlyTodo: Readonly<Todo> = {
  title: 'Cannot change',
  description: 'This is readonly',
  completed: false
};
// readonlyTodo.completed = true; // Error: Cannot assign to 'completed'

// Record<K, T> - Creates an object type with keys K and values T
type PageInfo = {
  title: string;
  url: string;
};

const pages: Record<'home' | 'about' | 'contact', PageInfo> = {
  home: { title: 'Home', url: '/' },
  about: { title: 'About', url: '/about' },
  contact: { title: 'Contact', url: '/contact' }
};

console.log('Pages:', pages);

// Pick<T, K> - Creates a type by picking properties from T
type TodoPreview = Pick<Todo, 'title' | 'completed'>;

const preview: TodoPreview = {
  title: 'Learn Generics',
  completed: false
};

// Omit<T, K> - Creates a type by omitting properties from T
type TodoInfo = Omit<Todo, 'completed'>;

const info: TodoInfo = {
  title: 'Study TypeScript',
  description: 'Advanced topics'
};

console.log('Utility types:', { preview, info });

// ========================================
// 9. Generic Type Aliases
// ========================================
type ApiResponse<T> = {
  data: T;
  status: number;
  message: string;
};

type UserResponse = ApiResponse<User>;
type ProductResponse = ApiResponse<{ id: number; name: string; price: number }>;

const userResponse: UserResponse = {
  data: { id: 1, name: 'Max', email: 'max@example.com' },
  status: 200,
  message: 'Success'
};

console.log('User response:', userResponse);

// ========================================
// 10. Generic Constraints with Interfaces
// ========================================
interface HasId {
  id: number;
}

function findById<T extends HasId>(items: T[], id: number): T | undefined {
  return items.find(item => item.id === id);
}

const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
];

const products = [
  { id: 101, name: 'Laptop', price: 999 },
  { id: 102, name: 'Mouse', price: 29 }
];

console.log('Find by ID:', {
  user: findById(users, 1),
  product: findById(products, 101)
});

// ========================================
// 11. Generic Default Parameters
// ========================================
interface Container<T = string> {
  value: T;
  getValue(): T;
}

const stringContainer: Container = { // Uses default type 'string'
  value: 'Hello',
  getValue() {
    return this.value;
  }
};

const numberContainer: Container<number> = {
  value: 42,
  getValue() {
    return this.value;
  }
};

console.log('Containers:', {
  string: stringContainer.getValue(),
  number: numberContainer.getValue()
});

// ========================================
// 12. Practical Example: Promise
// ========================================
// Promises are generic in TypeScript
function fetchData<T>(url: string): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: 'mock data' } as T);
    }, 1000);
  });
}

interface Product {
  id: number;
  name: string;
  price: number;
}

// TypeScript knows the resolved type
fetchData<Product>('/api/product/1').then(product => {
  console.log('Fetched product:', product);
});

// ========================================
// 13. Advanced: Conditional Types with Generics
// ========================================
// Note: TypeScript has a built-in NonNullable<T> utility type
// This is a custom implementation for learning purposes

type CustomNonNullable<T> = T extends null | undefined ? never : T;

type Example1 = CustomNonNullable<string | null>; // string
type Example2 = CustomNonNullable<number | undefined>; // number
type Example3 = CustomNonNullable<string | null | undefined>; // string

let value1: Example1 = 'Hello';
let value2: Example2 = 42;

console.log('Non-nullable types:', { value1, value2 });
