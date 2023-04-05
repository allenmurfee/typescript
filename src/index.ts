console.log("Testing compiling");

//Colon then variable type annotates it
let age: number = 20;

if (age < 50) {
  age += 10;
  console.log(age);
}

//Don't always have to annotate, TS compiler can infer that "sales" is a number
let sales = 123_456_789;
let course: string = "TypeScript";
let isPublished: boolean = true;
//Don't initialize, TS will assume is of type "any"

//"Any" Type
//This removes the point of TypeScript though, so try to avoid using "any"
let level;

//This will throw error
// function render(document) {
//   console.log(document);
// }

//Declared as any
function renderTwo(document: any) {
  console.log(document);
}

let numbers: number[] = [1, 2, 3];

let numberArr: number[] = [];
numberArr[0] = 1;
//When doing "num." it will auto fill all number methods because TypeScript knows that "num" is a number.
numberArr.forEach((num) => num.toString());

//Tuples
//Fixed length array with particular type
//Try to keep tuples short. Key value pairs

//When compiled, this will be regular array in JS code
let user: [number, string] = [1, "Allen"];

//The push method is troublesome because it lets you store another value even though it isn't strictly declared with a type

user.push(2);

//Enums
//List of related constants

//PascalCase
enum Size {
  // Will default Small = 0, Medium = 1, etc.
  //To overwrite, can do: Small = "s", etc.
  Small,
  Medium,
  Large,
}

let mySize: Size = Size.Medium;

//This will log "1"
console.log(mySize);

//Declaring enum as const will make JS code more optimized and easy to understand
const enum SizeConst {
  // Will default Small = 0, Medium = 1, etc.
  //To overwrite, can do: Small = "s", etc.
  Small,
  Medium,
  Large,
}

let mySizeConst: SizeConst = SizeConst.Medium;

console.log(mySizeConst);

//Functions

//annotate function with colon after parameters to determine return type
//use : void if not going to return a value
function calculateTax(
  //taxYear? means taxYear doesn't need to be provided to the function
  income: number,
  taxYear?: number
): number {
  // let x;
  if ((taxYear || 2023) < 2023) {
    return income * 1.2;
    //JS returns undefined unless there's another return, and undefined isn't a number, which is return type in this function
  } else {
    return income * 1.3;
  }
}

//To call above function, have to supply exactly 2 arguments since those are the ones defined with return types
calculateTax(20_000, 2023);

function calculateTaxTwo(
  //taxYear is 2023 if not provided when calling function. Also, TS infers taxYear is a number
  income: number,
  taxYear = 2023
): number {
  if (taxYear < 2023) {
    return income * 1.2;
  } else {
    return income * 1.3;
  }
}

calculateTaxTwo(20_000);

//Objects

let employee: {
  //readonly makes it so we can't redefine id
  readonly id: number;
  name: string;
  //void means don't return any values
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "Allen",
  retire: (date: Date) => {
    console.log(date);
  },
};

//OR

//makes Name optional. however, conceptually, this doesn't make sense, as everyone has a name. But you can do this.
let employeeTwo: {
  id: number;
  name?: string;
} = {
  id: 2,
};

//Type Aliases
//Define custom type
type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let newEmployee: {} = {
  id: 1,
  name: "Allen",
  retire: (date: Date) => {
    console.log(date);
  },
};

//Union Types
//Using | syntax
function kgToLbs(weight: number | string): number {
  //Narrowing
  //Does type checking on "weight"
  if (typeof weight === "number") return weight * 2.2;
  else return parseInt(weight) * 2.2;
}

kgToLbs(10);
kgToLbs("10kg");

//Intersection Types
type Draggable = {
  drag: () => void;
};

type Resizeable = {
  resize: () => void;
};

//This is intersection type, meaning it's both the Draggable and Resizeable types
type UIWidget = Draggable & Resizeable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

//Literal Types
//Limit types you can assign to variable

//Literal (exact, specific)
type Quantity = 50 | 100;
let quantity: Quantity = 100;

type Metric = "cm" | "inch";
let measurement: Metric = "inch";

//Nullable Types

function greet(name: string | null | undefined) {
  if (name) console.log(name.toLocaleUpperCase());
  else console.log("Hello");
}

//Can't do greet(null) unless option is turned off

//Can do this because of union type in the function "greet"
greet(null);
greet(undefined);
