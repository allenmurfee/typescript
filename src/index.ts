console.log("Testing compiling")

//Colon then variable type annotates it
let age: number = 20

if (age < 50) {
    age+=10;
    console.log(age)
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
function render(document) {
    console.log(document)
}

//Declared as any
function renderTwo(document: any) {
    console.log(document)
}

let numbers: number[] = [1,2,3]