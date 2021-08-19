let p = document.querySelector(".parents");
console.log(p);
// let currentSibling = document.querySelector("li");
// "use strict"

// console.log(currentSibling);

// let sibling1 = currentSibling.nextElementSibling;
// console.log(sibling1);

// let sibling2 = sibling1.nextElementSibling;
// console.log(sibling2);
// let sibling3 = sibling2.nextElementSibling;
// console.log(sibling3);

// let sibling4 = sibling3.nextElementSibling;
// console.log(sibling4);

// let sibling5 = sibling4.nextElementSibling;
// console.log(sibling5);

// let sibling6 = sibling5.nextElementSibling;
// console.log(sibling6);

// //previous siblings
// let presibling6 = sibling5.previousElementSibling;
// console.log(sibling6);


// let presibling5 = sibling6.previousElementSibling;
// console.log(sibling5);

// let presibling4 = sibling5.previousElementSibling;
// console.log(sibling4);


// let other = sibling6.previousElementSibling;
// console.log(sibling5);

//find all next siblings//




 let current = document.querySelector(".current");
 console.log(current)
 let nextSibling = current.nextElementSibling;
 
 while(nextSibling) {
     console.log(nextSibling);
    nextSibling = nextSibling.nextElementSibling;
 }


 //find all previous siblings//



 let current2 = document.querySelector(".current2");
 console.log(current2);

 let previousSibling = current2.previousElementSibling;

 while(previousSibling){
     console.log(previousSibling);
     previousSibling = previousSibling.previousElementSibling;
 }