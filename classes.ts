// Classes in TypeScript
// Following Maximilian's TypeScript Course

// ========================================
// 1. Basic Class Definition
// ========================================
class Department {
  name: string;

  constructor(n: string) {
    this.name = n;
  }

  describe() {
    console.log('Department:', this.name);
  }
}

const accounting = new Department('Accounting');
accounting.describe(); // Department: Accounting

// ========================================
// 2. Access Modifiers
// ========================================
// public (default), private, protected
class Employee {
  public name: string;
  private salary: number;
  protected department: string;

  constructor(name: string, salary: number, department: string) {
    this.name = name;
    this.salary = salary;
    this.department = department;
  }

  public describe() {
    console.log(`${this.name} works in ${this.department}`);
  }

  private calculateBonus(): number {
    return this.salary * 0.1;
  }

  public getTotalCompensation(): number {
    return this.salary + this.calculateBonus();
  }
}

const emp1 = new Employee('John', 50000, 'IT');
console.log('Employee name:', emp1.name); // OK - public
// console.log(emp1.salary); // Error - private
emp1.describe();
console.log('Total compensation:', emp1.getTotalCompensation());

// ========================================
// 3. Shorthand Initialization
// ========================================
class Product {
  // Shorthand: define and initialize in constructor
  constructor(
    public id: number,
    public name: string,
    private price: number
  ) {}

  getPrice(): number {
    return this.price;
  }

  applyDiscount(discount: number): void {
    this.price = this.price * (1 - discount);
  }
}

const laptop = new Product(1, 'Laptop', 1000);
console.log('Product:', laptop.name, 'costs $' + laptop.getPrice());
laptop.applyDiscount(0.1);
console.log('After discount: $' + laptop.getPrice());

// ========================================
// 4. Readonly Properties
// ========================================
class Account {
  constructor(
    public readonly id: number,
    public name: string,
    private balance: number
  ) {}

  deposit(amount: number): void {
    this.balance += amount;
  }

  getBalance(): number {
    return this.balance;
  }
}

const myAccount = new Account(12345, 'Savings', 1000);
// myAccount.id = 99999; // Error: Cannot assign to 'id' because it is a read-only property
myAccount.deposit(500);
console.log('Account balance:', myAccount.getBalance());

// ========================================
// 5. Inheritance
// ========================================
class Person {
  constructor(public name: string, protected age: number) {}

  greet(): void {
    console.log(`Hello, I'm ${this.name}`);
  }
}

class Student extends Person {
  constructor(name: string, age: number, public studentId: string) {
    super(name, age); // Call parent constructor
  }

  study(): void {
    console.log(`${this.name} is studying`);
  }

  // Override parent method
  greet(): void {
    console.log(`Hi, I'm ${this.name}, a student with ID ${this.studentId}`);
  }
}

const student = new Student('Alice', 20, 'S12345');
student.greet();
student.study();

// ========================================
// 6. Getters and Setters
// ========================================
class User {
  private _password: string = '';

  constructor(public username: string) {}

  get password(): string {
    return '***'; // Never expose actual password
  }

  set password(newPassword: string) {
    if (newPassword.length >= 8) {
      this._password = newPassword;
    } else {
      console.log('Password must be at least 8 characters');
    }
  }

  authenticate(password: string): boolean {
    return this._password === password;
  }
}

const user = new User('john_doe');
user.password = 'short'; // Too short
user.password = 'securePassword123'; // Valid
console.log('Password display:', user.password); // '***'
console.log('Authentication:', user.authenticate('securePassword123')); // true

// ========================================
// 7. Static Members
// ========================================
class MathHelper {
  static PI: number = 3.14159;

  static calculateCircumference(radius: number): number {
    return 2 * this.PI * radius;
  }

  static calculateArea(radius: number): number {
    return this.PI * radius * radius;
  }
}

// Access static members without instantiation
console.log('Math constants:', MathHelper.PI);
console.log('Circumference:', MathHelper.calculateCircumference(5));
console.log('Area:', MathHelper.calculateArea(5));

// ========================================
// 8. Abstract Classes
// ========================================
abstract class Shape {
  constructor(public color: string) {}

  abstract calculateArea(): number; // Must be implemented by subclasses

  describe(): void {
    console.log(`This is a ${this.color} shape with area: ${this.calculateArea()}`);
  }
}

class Circle extends Shape {
  constructor(color: string, public radius: number) {
    super(color);
  }

  calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(color: string, public width: number, public height: number) {
    super(color);
  }

  calculateArea(): number {
    return this.width * this.height;
  }
}

const circle = new Circle('red', 5);
const rectangle = new Rectangle('blue', 10, 20);
circle.describe();
rectangle.describe();

// ========================================
// 9. Singleton Pattern
// ========================================
class DatabaseConnection {
  private static instance: DatabaseConnection;
  private constructor(private connectionString: string) {}

  static getInstance(): DatabaseConnection {
    if (!DatabaseConnection.instance) {
      DatabaseConnection.instance = new DatabaseConnection('localhost:5432');
    }
    return DatabaseConnection.instance;
  }

  query(sql: string): void {
    console.log(`Executing query on ${this.connectionString}: ${sql}`);
  }
}

const db1 = DatabaseConnection.getInstance();
const db2 = DatabaseConnection.getInstance();
console.log('Same instance?', db1 === db2); // true
db1.query('SELECT * FROM users');

// ========================================
// 10. Practical Example: Shopping Cart
// ========================================
class CartItem {
  constructor(
    public readonly productId: number,
    public name: string,
    public price: number,
    public quantity: number
  ) {}

  getTotal(): number {
    return this.price * this.quantity;
  }
}

class ShoppingCart {
  private items: CartItem[] = [];

  addItem(item: CartItem): void {
    this.items.push(item);
    console.log(`Added ${item.name} to cart`);
  }

  removeItem(productId: number): void {
    this.items = this.items.filter(item => item.productId !== productId);
  }

  getTotal(): number {
    return this.items.reduce((total, item) => total + item.getTotal(), 0);
  }

  showCart(): void {
    console.log('Shopping Cart:');
    this.items.forEach(item => {
      console.log(`- ${item.name}: $${item.price} x ${item.quantity} = $${item.getTotal()}`);
    });
    console.log(`Total: $${this.getTotal()}`);
  }
}

const cart = new ShoppingCart();
cart.addItem(new CartItem(1, 'Laptop', 999, 1));
cart.addItem(new CartItem(2, 'Mouse', 29, 2));
cart.showCart();
