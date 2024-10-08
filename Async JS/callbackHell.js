function getData(id, getNextData) {
  //   console.log("Searching you id...");
  setTimeout(() => {
    // console.log("Id found !!");
    if (getNextData) getNextData();
    console.log("data :", id);
  }, 2000);
}

getData(1, () => {
  getData(2, () => {
    getData(3, () => {
      getData(4);
    });
  });
});
