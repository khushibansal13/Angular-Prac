"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Employee_id;
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    // getter and setter for id
    get empId() {
        return __classPrivateFieldGet(this, _Employee_id, "f");
    }
    set empId(value) {
        __classPrivateFieldSet(this, _Employee_id, value, "f");
    }
    static getEmployeeCount() {
        return 50;
    }
    constructor(id, name, address) {
        _Employee_id.set(this, void 0);
        this.address = address;
        __classPrivateFieldSet(this, _Employee_id, id, "f");
        this.name = name;
    }
    getName() {
        return this.name + " " + this.address;
    }
}
_Employee_id = new WeakMap();
let john = new Employee(1, "John", "123 Main Street");
john.empId = 100;
// console.log(john.empId);  
let address = john.getName();
Employee.getEmployeeCount();
// john.id = 1;
// john.name = "Khushi";
// john.address = "123 Main Street";
// console.log(john);
// console.log(address);
class Manager extends Employee {
    constructor(id, name, address) {
        super(id, name, address);
    }
    getName() {
        return `${this.name} is a manager at ${this.address}`;
    }
}
let manager1 = new Manager(1, "Khushi", "Highway");
let address2 = manager1.getName();
let user = { name: "Khushi", age: 20, id: 1, email: "abc@gmail.com" };
// user.name;
// user.email;
let { name: userName, email } = { name: "Khushi", age: 20, id: 1, email: "abc@gmail.com" };
let employee = {
    name: "John",
    id: 2,
    email: "john@gmail.com",
    salary: 5000
};
let [user1, user2, ...restUsers] = [{
        name: "John",
        age: 20,
        id: 1,
        email: "john@gmail.com"
    },
    {
        name: "Jane",
        age: 30,
        id: 2,
        email: "jane@gmail.com"
    },
    {
        name: "Peter",
        age: 25,
        id: 3,
        email: "peter@gmail.com"
    }, {
        name: "Susan",
        age: 28,
        id: 4,
        email: "susan@gmail.com"
    }];
console.log(user1);
console.log(user2);
console.log(restUsers);
let result = restUsers.filter(user => user.id > 3);
console.log(result);
