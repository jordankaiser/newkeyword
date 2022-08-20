export let timer;

export const aPromise = () => {
  let decider = false;

  // Switch the decider variable to true/false to test.
  setTimeout(() => {
    decider = true
  }, 2000);

  const promise = new Promise((resolve, reject) => {

    timer = setInterval(() => {
      console.log('tick');
      if (decider) {
        resolve('good');
      }
    }, 500);
    
    setTimeout(() => {
      reject(new Error('error message'));
    }, 3000);
  });

  return promise;
};