'use strict';


/* 
  A script which executes two tasks sequencially.
  Lets say f
*/

doTheJob();
function doTheJob() {
  let promise = Promise.resolve();
  for(let i = 0;i<5;i++) {
    executeTask1(i).then(result1=>{
      console.log("--result1=",result1);
      return executeTask2(i); 
    }).then(result2=>{
      console.log("--result2=",result2);      
    });     
  }
}



function executeTask1(data) {
  let time2sleep   = 10;
  let result = "result-task1-" + data; 
  return  new Promise((resolve, reject) => {
    setTimeout(() => resolve(result),time2sleep);
  });
}



function executeTask2(data) {
  let time2sleep   = 10;
  let result = "result-task2-" + data; 
  return  new Promise((resolve, reject) => {
    setTimeout(() => resolve(result),time2sleep);
  });
}





