const mysym = Symbol("hey")

const obj = {
    "first name": "Rahul",
    boolean: 22,
    [mysym]: "its is symbol bro"
}

console.log(obj.boolean)
console.log(obj["first name"])
console.log(typeof obj[mysym])


obj.greeting = function (){
    console.log("hello");
    
}

console.log(obj.greeting());
