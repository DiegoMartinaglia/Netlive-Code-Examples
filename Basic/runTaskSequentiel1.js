'use strict';


/* 
  A script which executes two tasks sequencially.
  Now we have a list of data foreach we need to execute both tasks sequencally:
*/

doTheJob();
async function doTheJob() {
  for(let i = 0;i<5;i++) {
    let resultTask1 = await executeTask1(i);    
    console.log("--resultTask1=",resultTask1);
    let resultTask2 = await executeTask2(i);  
    console.log("--resultTask2=",resultTask2);      
  }
}


function executeTask1(data) {
  let time2sleep   = 100;
  let result = "result-task1-" + data; 
  return  new Promise((resolve, reject) => {
    setTimeout(() => resolve(result),time2sleep);
  });
}



function executeTask2(data) {
  let time2sleep   = 200;
  let result = "result-task2-" + data; 
  return  new Promise((resolve, reject) => {
    setTimeout(() => resolve(result),time2sleep);
  });
}



