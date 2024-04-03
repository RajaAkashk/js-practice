let num=2;
if(num>0){
    console.log(`${num} is positive number.`)
}else if(num<0){
    console.log(`${num} is negative number.`)
}else{
    console.log(`${num} is zero.`)
}


let yr=2023;

if(yr%4==0 && (yr%100 !==0 || yr%400==0)){
    console.log(`${yr} is a leap year.`)
}else{
    console.log(`${yr} is not a leap year.`)
}


let num1=55;
let num2=545;
let num3=55;
if(num1>num2 && num1>num3){
    console.log(`${num1} is greater. `)
}
else if(num1<num2 && num2>num3){
    console.log(`${num2} is greater. `)
}
else if(num3>num2 && num1<num3){
    console.log(`${num3} is greater. `)
}else{
    console.log("all numbers are same")
}

if(num1%2===0){
    console.log("number is even")
}else{
    console.log("number is odd")
}

let str="wadas";
let vowels= str.split('');
let check=false;

for(let i=0;i<vowels.length;i++){
    if(vowels[i]==="a" ||vowels[i]==="e" ||vowels[i]==="i" ||vowels[i]==="o" ||vowels[i]==="u" ){
        console.log("vowels  +ve")
     check=true;
    break;}
}

if(check!==true){
    console.log("vowels  -ve")
}

for(let i=0;i<str.length;i++){
    if("aeiuoAIEOU".includes(str[i])){
        console.log("vowels  +ve")
        check=true;
        break;
    }
}if(check!==true){
    console.log("vowels  -ve")
}


let num4=5;
let pNum=false;
if(num4>1){
    for(let i=2;i<num4;i++){
        if(num4%i===0){
            pNum=true;
            break;
        }
    }
}
if(pNum===true){
    console.log(`${num4} is not a prime number.`)
}else{
    console.log(`${num4} is  a prime number.`)
}


if(num4 === (Math.sqrt(num4)**2)){
    console.log(`${num4} is square number.`)
}else{
    console.log(`${num4} is not a square number.`)
}


let str2="hello my name is ";
let pStr= str2.split('');
let checkP=false;
for(let i=0; i<=pStr.length;i++){

if((pStr[i])){
    console.log('paligram');
checkP=true;
break;
}

}if(checkP!==true){
    console.log('!! paligram');
}


let a=2;
{
    let a=2;
    console.log(a);     
}
console.log(a);