'use strict';


/* 
  A script which executes two tasks sequencially.
  Lets say f
*/

doTheJob()
// doTheJobWay2();
function doTheJob() {
  let promise = Promise.resolve();
  for(let i = 0;i<3;i++) {      
      promise = promise.then(function(result){
             console.log("----*******333 result---=",result);
             return externFunction(i);
      });  
      console.log("-----loppping ----- "); 
  }
}

function doTheJobWay2() {
  let promise = Promise.resolve("begin");
  let newPromise = null; 
  for(let i = 0;i<3;i++) { 
    console.log("--------------i=",i);     
      if (i > 0) {
        console.log("--------------i=",i);
        promise = newPromise;
      }
      console.log("----promise=",promise);
      promise.then(function(result){
        console.log("----*******333 result---=",result);
        newPromise =  externFunction(i);
      });   
      console.log("-----loppping ----- ")
  }
}

function externFunction(i) {
  console.log("----externFunction-----");
  return new Promise(function(resolve,reject) {
    executeTask1(i).then(result1=>{
      console.log("--result1=",result1);
      return executeTask2(i); 
    }).then(result2=>{
      console.log("--result2=",result2); 
      resolve(result2);     
    });  
  });  
}





function executeTask1(data) {
  let time2sleep   = 10;
  let result = "result-task1-" + data; 
  return  new Promise((resolve, reject) => {
    setTimeout(() => resolve(result),time2sleep);
  });
}



function executeTask2(data) {
  let time2sleep   =10;
  let result = "result-task2-" + data; 
  return  new Promise((resolve, reject) => {
    setTimeout(() => resolve(result),time2sleep);
  });
}





