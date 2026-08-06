function greet(user){
    return `Hello, ${user}!`;
}
console.log(greet("Jonh"));

function addition(a,b){
    return a+b;
}
console.log(addition(10,20))

const add=(a,b)=>a+b;
console.log("Sum:",add(5,3));

const sub=(a,b)=>a-b;
console.log("Sub:",sub(5,3));

const mul=(a,b)=>a*b;
console.log("Mul:",mul(5,3));

const div=(a,b)=>a/b;
console.log("Div:",div(5,3));

let score=85;
if(score>=90){
    console.log("Grade:A");
}
else if(score>=75){
    console.log("Grade:B");
}
else console.log("Grade:C");

for(let i=1; i<=3;i++) console.log("For loop:",i);

let j=1;
while(j<=3){
    console.log("While loop:",j);
    j++;
}