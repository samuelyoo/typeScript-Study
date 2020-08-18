// const myInfo = (name: string, age: number, gender: string): string =>{
//     return `Hello ${name}, I am ${age}, and ${gender}`;
// };

// console.log(myInfo("name", 23, "gendeeeer"));

// export {};

// interface not converting to js file
interface Human{
    name: string;
    age: number;
    gender: string;
}

const coder ={
    name: "sammy",
    age: 15,
    gender: "male"
}

const myInfo = (coder: Human): string =>{
    return `Hello ${coder.name}, I am ${coder.age}, and ${coder.gender}`;
};

console.log(myInfo(coder));

export {};