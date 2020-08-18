const name = "Sanny",
    age = 15,
    gender = "male";


// ? can make it optional in typescirpt
const myInfo = (name, age, gender?) =>{
    console.log( `Hello ${name}, I am ${age}, and ${gender}`);
};

myInfo(name, age)

export {};