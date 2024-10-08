// function api() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Weather data");
//       resolve(200);
//     }, 3000);
//   });
// }

// async function getWeatherData() {
//   console.log("Fetching data 1 : ");
//   await api();
//   console.log("Fetching data 2 : ");
//   await api();
// }

function getData(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data :", id);
      resolve("success");
    }, 2000);
  });
}

(async function () {
  console.log("Fetching data 1 ... ");
  let sum = await getData(45);
  console.log(sum);
  //   console.log("Fetching data 2 ... ");
  //   await getData(90);
  //   console.log("Fetching data 3 ... ");
  //   await getData(23);
})();
