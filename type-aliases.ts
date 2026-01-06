// Type Aliases and Custom Types in TypeScript
// Following Maximilian's TypeScript Course

// ========================================
// 1. Type Aliases Basics
// ========================================
// Type aliases allow you to create custom type names
// Use 'type' keyword to define them

type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
): Combinable {
  if ((typeof input1 === 'number' && typeof input2 === 'number') || resultConversion === 'as-number') {
    return +input1 + +input2;
  } else {
    return input1.toString() + input2.toString();
  }
}

console.log('Using type aliases:', combine(10, 20, 'as-number'));

// ========================================
// 2. Object Type Aliases
// ========================================
type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

let user1: User = {
  id: 1,
  name: 'Alice Johnson',
  email: 'alice@example.com',
  isActive: true
};

let user2: User = {
  id: 2,
  name: 'Bob Smith',
  email: 'bob@example.com',
  isActive: false
};

console.log('User objects:', { user1, user2 });

// ========================================
// 3. Complex Type Aliases
// ========================================
type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  tags: string[];
  inStock: boolean;
};

let laptop: Product = {
  id: 101,
  name: 'Dell XPS 15',
  price: 1499.99,
  category: 'Electronics',
  tags: ['laptop', 'computer', 'portable'],
  inStock: true
};

console.log('Product:', laptop);

// ========================================
// 4. Type Aliases for Functions
// ========================================
type MathOperation = (a: number, b: number) => number;

let add: MathOperation = (x, y) => x + y;
let subtract: MathOperation = (x, y) => x - y;
let multiply: MathOperation = (x, y) => x * y;

console.log('Math operations:', {
  addition: add(10, 5),
  subtraction: subtract(10, 5),
  multiplication: multiply(10, 5)
});

// ========================================
// 5. Nested Type Aliases
// ========================================
type Address = {
  street: string;
  city: string;
  zipCode: string;
  country: string;
};

type Customer = {
  id: number;
  name: string;
  email: string;
  address: Address;
  orders: number[];
};

let customer: Customer = {
  id: 501,
  name: 'Emma Wilson',
  email: 'emma@example.com',
  address: {
    street: '123 Main St',
    city: 'New York',
    zipCode: '10001',
    country: 'USA'
  },
  orders: [1001, 1002, 1003]
};

console.log('Customer with nested types:', customer);

// ========================================
// 6. Union Type Aliases
// ========================================
type ID = number | string;
type Status = 'active' | 'inactive' | 'pending';
type ApiResponse = { success: true; data: any } | { success: false; error: string };

function getUserById(id: ID): ApiResponse {
  if (id === 1 || id === '1') {
    return { success: true, data: { name: 'John' } };
  }
  return { success: false, error: 'User not found' };
}

console.log('Response examples:', {
  found: getUserById(1),
  notFound: getUserById(999)
});

// ========================================
// 7. Type Aliases vs Interfaces
// ========================================
// Type aliases can represent any type, including primitives and unions
type StringOrNumber = string | number; // Possible with type
type Point = { x: number; y: number }; // Possible with both

// Interfaces are specifically for object shapes and can be extended
interface IPoint {
  x: number;
  y: number;
}

let point1: Point = { x: 10, y: 20 };
let point2: IPoint = { x: 30, y: 40 };

console.log('Points:', { point1, point2 });

// ========================================
// 8. Practical Example: E-commerce
// ========================================
type ProductCategory = 'electronics' | 'clothing' | 'food' | 'books';
type PaymentMethod = 'credit-card' | 'paypal' | 'bank-transfer';

type OrderItem = {
  productId: number;
  productName: string;
  quantity: number;
  price: number;
};

type Order = {
  orderId: number;
  customerId: number;
  items: OrderItem[];
  totalAmount: number;
  paymentMethod: PaymentMethod;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  createdAt: Date;
};

let sampleOrder: Order = {
  orderId: 5001,
  customerId: 501,
  items: [
    { productId: 101, productName: 'Laptop', quantity: 1, price: 1499.99 },
    { productId: 102, productName: 'Mouse', quantity: 2, price: 29.99 }
  ],
  totalAmount: 1559.97,
  paymentMethod: 'credit-card',
  status: 'processing',
  createdAt: new Date()
};

console.log('Sample order:', sampleOrder);

// ========================================
// 9. Reusable Type Aliases
// ========================================
type Timestamp = number | Date;
type Nullable<T> = T | null;
type Optional<T> = T | undefined;

let eventTime: Timestamp = new Date();
let deletedAt: Nullable<Date> = null;
let middleName: Optional<string> = undefined;

console.log('Utility type aliases:', { eventTime, deletedAt, middleName });
