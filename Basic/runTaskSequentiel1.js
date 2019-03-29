'use strict';


/* 
  A script which executes two tasks sequencially.
  Now we have a list of data foreach we need to execute both tasks sequencally:
*/

doTheJob();
async function doTheJob() { 
  let result1 = await executeTask1("Anna");    
  console.log("--resultTask1=",result1);
  let result2 = await executeTask2("Anna");  
  console.log("--resultTask2=",result2); 
  let result3 = await executeTask1("Berta");    
  console.log("--resultTask1=",result3);
  let result4 = await executeTask2("Berta");  
  console.log("--resultTask2=",result4); 
  console.log("----finished--- ????");    
   
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



