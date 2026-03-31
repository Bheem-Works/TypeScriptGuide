# TypeScript Guide

This project shows a simple way to install TypeScript, create `.ts` files, compile them, and run them.

## 1. Install Node.js and npm

Before using TypeScript, make sure these are installed:

```bash
node -v
npm -v
```

If both commands show a version number, you are ready.

## 2. Create a project folder

Open terminal and go to your project folder:

```bash
cd /home/vim-magar/Desktop/vim/TypeScript
```

## 3. Create `package.json`

If you are starting from a fresh folder, run:

```bash
npm init -y
```

This creates a `package.json` file.

## 4. Install TypeScript

Install TypeScript in the project:

```bash
npm install --save-dev typescript
```

This adds TypeScript to `node_modules` and saves it in `package.json`.

## 5. Create a TypeScript config file

Create a config file:

```bash
npx tsc --init
```

In this project, we use `tsconfig.json` to tell TypeScript:

- read files from `src`
- save compiled JavaScript files into `dist`

## 6. Create your TypeScript files

Put your TypeScript files inside the `src` folder.

Example:

```ts
// src/vim.ts
console.log("hello this is vim");
```

Another example:

```ts
// src/index.ts
type User = {
  name: string;
  age: number;
};

function greet(user: User): string {
  return `Hello, ${user.name}. You are ${user.age} years old.`;
}

console.log(greet({ name: "TypeScript Learner", age: 21 }));
```

## 7. Compile TypeScript into JavaScript

Run:

```bash
npm run build
```

This compiles all `.ts` files from `src` into `.js` files inside `dist`.

Example:

- `src/index.ts` becomes `dist/index.js`
- `src/vim.ts` becomes `dist/vim.js`

## 8. Run the compiled JavaScript file

After building, run the file you want with Node.js.

Example:

```bash
node dist/index.js
```

Or:

```bash
node dist/vim.js
```

## 9. Full process for a new file

If you create a new file like `src/test.ts`, use this process:

### Step 1: Create the file

```ts
// src/test.ts
console.log("this is test file");
```

### Step 2: Build the project

```bash
npm run build
```

### Step 3: Run the compiled file

```bash
node dist/test.js
```

## 10. Important rule

Do not run the `.ts` file directly with `node`.

Wrong:

```bash
node src/vim.ts
```

Wrong:

```bash
node dist/vim.ts
```

Correct:

```bash
node dist/vim.js
```

## 11. If you update a file

Every time you change a `.ts` file:

1. Save the file
2. Run `npm run build`
3. Run the compiled `.js` file from `dist`

## 12. Commands used in this project

Build:

```bash
npm run build
```

Run main file:

```bash
node dist/index.js
```

Run `vim.ts` output:

```bash
node dist/vim.js
```

## 13. Project structure

```text
TypeScript/
├── src/
│   ├── index.ts
│   └── vim.ts
├── dist/
│   ├── index.js
│   └── vim.js
├── node_modules/
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

## 14. Quick summary

Use these steps every time:

1. Create or edit a file inside `src`
2. Run `npm run build`
3. Run the matching file from `dist`

Example:

```bash
npm run build
node dist/vim.js
```
