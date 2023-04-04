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
function calculateTax(income: number): number {
  if (income < 50_000) {
    return income * 1.2;
    //JS returns undefined unless there's another return, and undefined isn't a number, which is return type in this function
  }
}
