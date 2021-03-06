var sassdoc = require("sassdoc");

sassdoc("sass", {
  verbose: true,
  dest: "./docs",
  // theme: "herman"
}).then(
  function () {
    console.log("Your documentation has been generated!");
  },
  function (err) {
    console.error(err);
  }
);
