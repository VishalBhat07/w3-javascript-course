function asyncFunc1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data 1");
      resolve("success");
    }, 4000);
  });
}
function asyncFunc2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data 2");
      resolve("success");
    }, 4000);
  });
}

console.log("Fetching data 1 ...");

asyncFunc1().then((res) => {
  //   console.log(res);
  console.log("Fetching data 2 ...");

  let p2 = asyncFunc2().then((res) => {});
});
