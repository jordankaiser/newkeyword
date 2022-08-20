import { aPromise, timer } from "./features/promises/promises.js";

aPromise()
  .then((result) => {
    console.log('Promise handle 2 - ' + result);
  })
  .catch((error) => {
    console.log('Promise handle 2 - ' + error);
  })
  .finally(() => {
    console.log('finaly')
    clearInterval(timer);
  });