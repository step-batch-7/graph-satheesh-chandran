const { readFileSync } = require('fs');
const { bfs, dfs, createAdjacencyTable } = require('./src/graph.js');

const main = function () {
  // const pairs = JSON.parse(readFileSync('./src/graph.json', 'utf8'));
  const pairs = [['aa', 'bb']];
  const table = createAdjacencyTable(pairs);

  console.log(bfs(pairs, 'aa', 'aa'));
  // console.log(bfs(pairs, 'bb', 'jj'));
  // console.log(bfs(pairs, 'jj', 'aa'));
  // console.log(bfs(pairs, 'aa', 'hh'));
  // console.log(bfs(pairs, 'hh', 'ii'));
  // console.log(bfs(pairs, 'ii', 'ee'));
  // console.log(bfs(pairs, 'ee', 'mm'));
  // console.log(bfs(pairs, 'mm', 'jj'));

  console.log('');

  console.log(dfs(table, 'aa', 'aa'));
  // console.log(dfs(table, 'bb', 'jj'));
  // console.log(dfs(table, 'jj', 'aa'));
  // console.log(dfs(table, 'aa', 'hh'));
  // console.log(dfs(table, 'hh', 'ii'));
  // console.log(dfs(table, 'ii', 'ee'));
  // console.log(dfs(table, 'ee', 'mm'));
  // console.log(dfs(table, 'mm', 'jj'));
};

main();
