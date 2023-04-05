"use strict";
var _a;
console.log("Testing compiling");
let age = 20;
if (age < 50) {
    age += 10;
    console.log(age);
}
let sales = 123456789;
let course = "TypeScript";
let isPublished = true;
let level;
function renderTwo(document) {
    console.log(document);
}
let numbers = [1, 2, 3];
let numberArr = [];
numberArr[0] = 1;
numberArr.forEach((num) => num.toString());
let user = [1, "Allen"];
user.push(2);
var Size;
(function (Size) {
    Size[Size["Small"] = 0] = "Small";
    Size[Size["Medium"] = 1] = "Medium";
    Size[Size["Large"] = 2] = "Large";
})(Size || (Size = {}));
let mySize = Size.Medium;
console.log(mySize);
let mySizeConst = 1;
console.log(mySizeConst);
function calculateTax(income, taxYear) {
    if ((taxYear || 2023) < 2023) {
        return income * 1.2;
    }
    else {
        return income * 1.3;
    }
}
calculateTax(20000, 2023);
function calculateTaxTwo(income, taxYear = 2023) {
    if (taxYear < 2023) {
        return income * 1.2;
    }
    else {
        return income * 1.3;
    }
}
calculateTaxTwo(20000);
let employee = {
    id: 1,
    name: "Allen",
    retire: (date) => {
        console.log(date);
    },
};
let employeeTwo = {
    id: 2,
};
let newEmployee = {
    id: 1,
    name: "Allen",
    retire: (date) => {
        console.log(date);
    },
};
function kgToLbs(weight) {
    if (typeof weight === "number")
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
kgToLbs(10);
kgToLbs("10kg");
let textBox = {
    drag: () => { },
    resize: () => { },
};
let quantity = 100;
let measurement = "inch";
function greet(name) {
    if (name)
        console.log(name.toLocaleUpperCase());
    else
        console.log("Hello");
}
greet(null);
greet(undefined);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);
let customerTwo = getCustomer(1);
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday);
console.log(customerTwo === null || customerTwo === void 0 ? void 0 : customerTwo.birthday);
console.log("customer birthday", (_a = customerTwo === null || customerTwo === void 0 ? void 0 : customerTwo.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
//# sourceMappingURL=index.js.map