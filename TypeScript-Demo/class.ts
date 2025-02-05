class Employee {
    #id: number;
    protected name: string;
    address: string;

    // getter and setter for id
    get empId(): number {
        return this.#id;
    }
    set empId(value: number) {
        this.#id = value;
    }

    static getEmployeeCount(): number {
        return 50;
    }

    constructor(id: number, name: string, address: string) {
        this.address = address;
        this.#id = id;
        this.name = name;
    }

    getName(): string {
        return this.name + " " + this.address;
    }
}

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
    constructor(id: number, name: string, address: string) {
        super(id, name, address);
    }

    getName(): string {
        return `${this.name} is a manager at ${this.address}`;
    }
}
let manager1 = new Manager(1, "Khushi", "Highway")
let address2 = manager1.getName();

// console.log(manager1);
// console.log(address2);

// -------------------------------------------------------------------------------
// ### Interfaces:

interface User {
    name: string;
    age?: number;
    id: number;
    email: string;
}

let user: User = { name: "Khushi", age: 20, id: 1, email: "abc@gmail.com" };

// user.name;
// user.email;
let { name: userName, email }: User = { name: "Khushi", age: 20, id: 1, email: "abc@gmail.com" };
// userName can direclty be used
interface Employee1 extends User {
    salary: number;
}

let employee: Employee1 = {
    name: "John",
    id: 2,
    email: "john@gmail.com",
    salary: 5000
}

export interface Login {
    Login(): User;
}

let [user1, user2, ...restUsers]: User[] = [{
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
}]
console.log(user1);
console.log(user2);
console.log(restUsers);

let result = restUsers.filter(user => user.id >3 );
console.log(result); 

// ## Decorators:

// @CompositionEvent({})
// class Component {
//     constructor(public name: string) {}  
// }