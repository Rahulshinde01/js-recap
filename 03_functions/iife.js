// let a = 4;

// (function one(){
//     a = 12;
//     console.log(a);
    
//     console.log("hello world");
    
// })();



// ((param) => {
//     console.log(`${param}`);
    
// })("hello 544")

// Without IIFE, variables leak to the global scope
var count = 0; 
function increment() {
    count++;
}
increment();
console.log(count); // 1

// With IIFE, variables are scoped locally
(function () {
    var count = 0; 
    function increment() {
        count++;
        console.log(count); // Prints incremented value
    }
    increment(); // 1
    increment(); // 2
})();

// count is not defined in the global scope
console.log(typeof count); // "undefined"
