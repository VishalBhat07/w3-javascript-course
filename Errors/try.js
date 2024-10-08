try {
  console.logg("Hello");
} catch (e) {
  console.log(e.name);
  console.log(e.message);
} finally {
  console.log("Error was handled !!");
}
