const server = require("./src/server");

// const { Character, Film, Planet } = require("./src/database");
// Character.get(200).then((res) => console.log(res));
// Film.get(1).then((res) => console.log(res));
// Planet.get(1).then((res) => console.log(res));
// Character.insert({
//   _id: "200",
//   name: "Test",
//   height: "178",
//   mass: "120",
//   hair_color: "black",
//   skin_color: "fair",
//   eye_color: "black",
//   birth_year: "14FEB",
//   gender: "male",
//   homeworld: "2",
//   films: ["1", "3"],
// })

server.listen(8004, () => {
  console.log("Database service listening on port 8004");
});
