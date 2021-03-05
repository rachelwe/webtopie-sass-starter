var sassdoc = require('sassdoc');

sassdoc('sass', { verbose: true, dest: './docs' })
  .then(function () {
    console.log('Your documentation has been generated!');
  }, function (err) {
    console.error(err);
  });