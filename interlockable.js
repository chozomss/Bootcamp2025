function interlockable(num1, num2) {
  if (num1 < 0 || num2 < 0){
    return false;
  }
  return (num1 & num2)===0;
}
console.log(interlockable(9,4))