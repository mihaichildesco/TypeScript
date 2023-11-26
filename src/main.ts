// explicit types
let character: string;
let age: number;
let isLoggedIn: boolean;

// arrays
let names: string[];
let numbers: number[];

// union types
let person: (string | number)[] = [];
let uid: string | number;

// arrays
names = ["John", "Mary"];
numbers = [10, 20];

let ninjas: [string, number, boolean];

// objects
let ninja1: object;
ninja1 = { name: "Ryu", age: 30 };

let ninjaTwo: {};
ninjaTwo = { name: "Yoshi", age: 20 };

// any type
let age1: any = 25;
age1 = true;

let mixed: any[] = [];
mixed.push(10);
mixed.push("hello");
mixed.push(false);
console.log("testing123");

// Functions
const add = (a: number, b: number, c?: number | string) => {
  console.log(a + b);
};

add(10, 20);
