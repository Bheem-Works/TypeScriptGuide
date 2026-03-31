type User = {
  name: string;
  age: number;
};

function greet(user: User): string {
  return `Hello, ${user.name}. You are ${user.age} years old.`;
}

const demoUser: User = {
  name: "TypeScript Learner",
  age: 21
};

console.log(greet(demoUser));
