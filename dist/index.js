"use strict";
function greet(user) {
    return `Hello, ${user.name}. You are ${user.age} years old.`;
}
const demoUser = {
    name: "TypeScript Learner",
    age: 21
};
console.log(greet(demoUser));
