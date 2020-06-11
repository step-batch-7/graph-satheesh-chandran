const { readFileSync } = require('fs');
const { bfs } = require('./src/graph.js');

const main = function () {
  // const pairs = JSON.parse(readFileSync('./src/graph.json', 'utf8'));
  const pairs = [['aa', 'bb']];

  console.log(bfs(pairs, 'aa', 'aa'));

  // console.log(bfs(pairs, 'bb', 'jj'));
  // console.log(bfs(pairs, 'jj', 'aa'));
  // console.log(bfs(pairs, 'aa', 'hh'));
  // console.log(bfs(pairs, 'hh', 'ii'));
  // console.log(bfs(pairs, 'ii', 'ee'));
  // console.log(bfs(pairs, 'ee', 'mm'));
  // console.log(bfs(pairs, 'mm', 'jj'));
};

main();
