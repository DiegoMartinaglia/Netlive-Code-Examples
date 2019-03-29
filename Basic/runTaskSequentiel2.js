'use strict';


/* 
  A script which executes two tasks sequencially.
  Now we have a list of data foreach we need to execute both tasks sequencally:
*/

doTheJobWay1();
async function doTheJobWay1() {  
  externFunction("Anna").then(result1=>{
    console.log("---resolved with Anna-----");
    return   externFunction("Berta");
  }).then(result2=>{
    console.log("----resolved with Berta-----");
  });
}

async function doTheJobWay2() {  
  externFunction("Anna").then(result1=>{
    console.log("---resolved with Anna-----");    
  });
  
  externFunction("Berta").then(result2=>{
    console.log("----resolved with Berta-----");
  });
}


async function externFunction(data) {
  let resultTask1 = await executeTask1(data);    
  console.log("--resultTask1=",resultTask1);
  let resultTask2 = await executeTask2(data);  
  console.log("--resultTask2=",resultTask2);     
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



