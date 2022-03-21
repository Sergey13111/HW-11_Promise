"use strict";

const promise = new Promise(function (resolve, reject) {
    setTimeout(() => resolve("done"), 5000);
});

const promiseErr = new Promise(function (resolve, reject) {
    setTimeout(() => reject (new Error("Error")), 5000);
});

// .then / .catch

promise
    .then((result) => console.log(result))
    .catch((error) => console.error(error))
    .finally(() => console.log("Promise was finished!"));
    
promiseErr
    .then((result) => console.log(result))
    .catch((error) => console.error(error))
    .finally(() => console.log("Promise was finished!"));

// async / await + try...catch

async function getWrapper() {
    try {
        const result = await promise;
        console.log(result);
    } catch (error) {
        console.error(error)
    } finally {
        console.log("Promise was finished!")
    }

}

async function getWrapperErr() {
    try {
        const result = await promiseErr;
        console.log(result);
    } catch (error) {
        console.error(error)
    } finally {
        console.log("Promise was finished!")
    }
}

getWrapper();
getWrapperErr();