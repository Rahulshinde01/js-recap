const obj = {
    data: 1,
    newObj: {
        mydata: 44,
        fun: function addNos(){
            const urdata = 12;
            console.log(this)
            return `addition of 2 nos is ${this.mydata + urdata}`
        }
    }
}

// console.log(obj.newObj.fun());
// obj.newObj.mydata = 100
// console.log(obj.newObj.fun());


// function one(){
//     const data = 12;
//     console.log(this.data);
// }
// one();

// console.log(this);


// const one = function (){
//     const data = 12;
//     console.log(this);
// }
// one();



const one = (num1, num2) => (num1 + num2)
console.log(one(12,33));



