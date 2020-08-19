// const myInfo = (name: string, age: number, gender: string): string =>{
//     return `Hello ${name}, I am ${age}, and ${gender}`;
// };

// console.log(myInfo("name", 23, "gendeeeer"));

// export {};

// // interface not converting to js file
// interface Human{
//     name: string;
//     age: number;
//     gender: string;
// }

class Human{
    public name: string;
    private age: number;
    public gender: string;
    constructor(name: string, age: number, gender: string){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

// const coder ={
//     name: "sammy",
//     age: 15,
//     gender: "male"
// }

const student = new Human("Samuel", 16, "male")

const myInfo = (coder: Human): string =>{
    return `Hello ${coder.name}, I am ${coder.age}, and ${coder.gender}`;
};

console.log(myInfo(student));

export {};