'use strict';



doTheJob();
async function doTheJob() {
  let promise = Promise.resolve();
  for(let i = 0;i<5;i++) {
    let task = "task-" + i;   
    promise = promise.then(function(result) {
      console.log("----result=",result);
      return doTaskSequentiel(task);
    });    
  }
/*
  for(let i = 0;i<listLinks.length;i++) {
    let task = listLinks[i];   
     

    doTaskSequentiel(task).then(result=>{
      console.log("---result=",null);
    });
    console.log("----saved---");    
  }
*/
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



function delay(ms) {
  return  new Promise((resolve, reject) => {
    setTimeout(() => resolve(ms),ms);
  });
}


