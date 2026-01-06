# Learn and Master TypeScript

A comprehensive TypeScript learning repository following Maximilian Schwarzmüller's TypeScript course structure.

## 📚 Course Structure

This repository contains separate files for each TypeScript concept, making it easy to learn and practice step by step.

### Learning Files

1. **[primitive-data-types.ts](./primitive-data-types.ts)** - Primitive Data Types
   - Number, String, Boolean types
   - Type inference
   - Best practices

2. **[arrays-and-objects.ts](./arrays-and-objects.ts)** - Arrays and Objects
   - Array types and methods
   - Object types and structures
   - Nested objects
   - Arrays of objects

3. **[tuples-enums.ts](./tuples-enums.ts)** - Tuples and Enums
   - Tuple types and usage
   - Numeric enums
   - String enums
   - Const enums

4. **[union-literal-types.ts](./union-literal-types.ts)** - Union and Literal Types
   - Union types with multiple types
   - Literal types for exact values
   - Type guards
   - Combining union and literal types

5. **[type-aliases.ts](./type-aliases.ts)** - Type Aliases and Custom Types
   - Creating custom type names
   - Object type aliases
   - Function type aliases
   - Complex nested types

6. **[functions.ts](./functions.ts)** - Functions
   - Function return types
   - Void and undefined types
   - Function types and callbacks
   - Optional and default parameters
   - Rest parameters and function overloading

7. **[classes.ts](./classes.ts)** - Classes and OOP
   - Basic class definition
   - Access modifiers (public, private, protected)
   - Inheritance and method overriding
   - Getters and setters
   - Static members
   - Abstract classes
   - Singleton pattern

8. **[interfaces.ts](./interfaces.ts)** - Interfaces
   - Interface definitions
   - Optional and readonly properties
   - Interface methods
   - Implementing interfaces in classes
   - Interface inheritance
   - Index signatures

9. **[advanced-types.ts](./advanced-types.ts)** - Advanced Types
   - Intersection types
   - Type guards (typeof, in, instanceof)
   - Discriminated unions
   - Type casting
   - Optional chaining
   - Nullish coalescing
   - Mapped and conditional types

10. **[generics.ts](./generics.ts)** - Generics
    - Generic functions and classes
    - Generic constraints
    - Built-in generic utility types
    - Generic interfaces
    - Working with Promises

## 🚀 Getting Started

### Prerequisites
- Node.js installed on your system
- Basic JavaScript knowledge

### Installation

1. Clone this repository:
```bash
git clone https://github.com/nsasika/learn-and-master-typescript.git
cd learn-and-master-typescript
```

2. Install dependencies:
```bash
npm install
```

### Usage

#### Compile TypeScript files:
```bash
npx tsc
```

This will compile all TypeScript files and output JavaScript files to the `dist` folder.

#### Watch mode (auto-compile on save):
```bash
npm start
```

#### Compile and run a specific file:
```bash
# Compile
npx tsc primitive-data-types.ts

# Run with Node.js
node dist/primitive-data-types.js
```

#### Run without compiling (using ts-node):
```bash
# Install ts-node globally or as dev dependency
npm install -g ts-node

# Run directly
ts-node primitive-data-types.ts
```

## 📖 Learning Path

Follow the files in the order listed above for a structured learning experience:

1. Start with **primitive-data-types.ts** to understand the basics
2. Progress through **arrays-and-objects.ts**, **tuples-enums.ts**, and **union-literal-types.ts**
3. Learn about code organization with **type-aliases.ts**
4. Master **functions.ts** before moving to OOP concepts
5. Dive into **classes.ts** and **interfaces.ts** for object-oriented programming
6. Explore **advanced-types.ts** for powerful TypeScript features
7. Complete your journey with **generics.ts** for flexible, reusable code

## 💡 Tips

- Each file contains extensive comments and examples
- Run each file to see the console output
- Experiment by modifying the examples
- Uncomment error examples to understand TypeScript's type checking
- Use VS Code for the best TypeScript development experience

## 🎯 Course Reference

This repository follows the structure of **Maximilian Schwarzmüller's TypeScript course**. Each file corresponds to key concepts taught in the course.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Feel free to fork this repository and add your own examples or improvements!

---

Happy Learning! 🎓
