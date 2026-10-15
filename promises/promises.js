// Promise is for "eventual" completion of task.
// it is an object in js.

// it is a solution to callback hell.

// reject and resolve are callbacks provided by js.

// 3 stages of promise 
// pending
// resolve
// reject

// API sends promises
// let promise = new Promise((resolve,reject)=>{
//   console.log("I am a Promise");
//   resolve("succees");
// })

// how to use promise 
// .then()  // executed when promise is fullfilled
// .catch()  // error

// eg

const getData = ()=>{
  return new Promise ((resolve,reject)=>{
      console.log("I am a Promise");
      reject("failed");
  })
}
let promise = getData();
promise.then((res)=>{
  console.log("Promise fullfilled : ",res);
})
promise.catch((err)=>{
  console.log("Rejected : ",err);
})