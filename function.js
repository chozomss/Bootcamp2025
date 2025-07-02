// function reverseString(str){
//     return str.split("").reverse().join("");
// }
// console.log(reverseString("Tshering"));

function replace(str,charToReplace,strReplacement){
   let result="";
    for(let i=0; i<str.length;i+=1){
        if(str[i] === charToReplace){
            result += strReplacement; 
        }else{
            result += str[i]
        }
    }
return result;
}
// console.log(replace("hello","o","0987"));




function strLengthEven(str){
    return str.length % 2 === 0;

}
// console.log(strLengthEven("hello"));



function findRabbit(arr){
    let result=[];
    for (let i=0; i<arr.length; i+=1){
        if(arr[i]=== "rabbit"){
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(findRabbit(['tshering','is','a','rabbit']));

function subtractTen(num){
    return num-10;
}
function isSquare(num){
  if (num < 0 ) {
      return false;
  }
  const sqrNum = Math.sqrt(num);
  return Number.isInteger(sqrNum);
}

console.log(isSquare(-1));
console.log(isSquare(0));
console.log(isSquare(3));
console.log(isSquare(4));
console.log(isSquare(25));
console.log(isSquare(26));

function removeExclamationMarks(s) {
  let result='';
  for(let i = 0; i < s.length; i += 1){
    if(s[i] !== '!'){
      result += s[i]
    }
  }
  return result;
}
console.log( removeExclamationMarks('hello! world!!!!!'));