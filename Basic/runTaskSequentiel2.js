'use strict';


/* 
  A script which executes two tasks sequencially.
  Lets say f
*/

doTheJob();
async function doTheJob() {
  let promise = Promise.resolve();
  for(let i = 0;i<10;i++) {
    let result1 = await executeTask1(i);    
    console.log("--result1=",result1);
    let result2 = await executeTask2(i);  
    console.log("--result2=",result2);      
  }
}

async function doTaskSequentiel(task) {
  let urlId = "some Value";  
  let result = await delay(1000);
  if (result > 100) {
    console.log("1-------doTaskSequentiel="+task);
    let result2 = await delay(2000);
    console.log("2-------doTaskSequentiel="+task);
  } else {
    LOGGER.info("----doTaskSequentiel: entry exists----" + JSON.stringify(result[0]));
  }
  return urlId;
}


function executeTask1(task) {
  let time2sleep   = 500;
  return  new Promise((resolve, reject) => {
    setTimeout(() => resolve(task),time2sleep);
  });
}

function executeTask2(task) {
  let time2sleep   = 1000;
  return  new Promise((resolve, reject) => {
    setTimeout(() => resolve(task),time2sleep);
  });
}



