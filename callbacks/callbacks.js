// function sum(a,b){
//   console.log(a+b);
// }
function calculator(a,b,callback){
  callback(a,b);
}
calculator(20,30,(a,b)=>{
  console.log(a+b);
});
