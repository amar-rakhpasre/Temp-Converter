
function add(x, y){
    return x + y;
}
console.log(add(5, 5));

function sub(x, y){
    return x - y;
}
console.log(sub(5, 5));

function div(x, y){
    return x / y;
}
console.log(div(5, 5));

function isEven(num){
    return num%2===0 ? true : false;

    // if(num%2===0){
    //     return true;
    // }else {
    //     return false;
    // }
}
console.log(isEven(4));

function isValidEmail(email){
    return email.includes("@gmail.com") ? true : false;
}
console.log(isValidEmail("ytdvyt@gmail.com"));


let x = 1;
let X = 10;