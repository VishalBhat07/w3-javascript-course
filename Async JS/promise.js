// let getData = (id) => {
//   console.log("data :", id);
// };

// setTimeout(() => {
//   getData(5);
// }, 3000);

// let promise = new Promise((resolve, reject) => {
//   console.log("I am a promise");
//   resolve("Some error");
// });

function getData(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data :", id);
      resolve("success");
    }, 2000);
  });
}

getData(1)
  .then((res) => {
    return getData(2);
  })
  .then((res) => {
    return getData(3);
  })
  .then((res) => {
    console.log("success");
  });
