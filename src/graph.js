//Example
// Pairs => [[from,to],[to,from]]
// Source => from
// To => to
// Should return true.

const createAdjacencyTable = function (pairs) {
  const table = {};
  pairs.forEach(([key, value]) => {
    if (table[key]) return table[key].push(value);
    table[key] = [value];
  });
  return table;
};

const bfs = function (pairs, source, target) {
  const table = createAdjacencyTable(pairs);
  const queue = [source];
  const visitedList = [];
  while (queue.length !== 0) {
    const node = queue.shift();
    const edges = table[node] || [];
    if (edges.includes(target)) return true;
    edges.forEach(edge => {
      const isAlreadyExist = visitedList.includes(edge);
      if (!isAlreadyExist) queue.push(edge);
    });
    visitedList.push(node);
  }
  return false;
};

module.exports = { bfs };
