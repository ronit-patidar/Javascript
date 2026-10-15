// async function always return a primse
// async functionName(){}

// await -> await pauses the execution of its surrounding async function until the promise is settled.

// await is only used with async function only.

 function api(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log("weather data");
      resolve(200);
    },2000)
  })
}
// (Immediately invoked funuction expression)
/// iife is a function that is called immediately as soon as is definded.
// (function)();

(async function getWeatherData(){
  console.log("data1 fetching..");
  await api(); // 1st
  console.log("data2 fetching..");
  await api(); // 2st
})();
