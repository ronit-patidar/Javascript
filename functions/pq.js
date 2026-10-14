const arr = [80,99,100,98,60,70,49,39,93,38];

const gradeA = arr.filter((val)=>{
  return val>90;
})
// [99,100,98,93]
console.log(gradeA);