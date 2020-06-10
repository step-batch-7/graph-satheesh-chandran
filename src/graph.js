//Example
// Pairs => [[from,to],[to,from]]
// Source => from
// To => to
// Should return true.

const findEdges = function (pairs, root) {
  const edges = [];
  pairs.forEach(pair => {
    if (pair[0] == root) edges.push(pair[1]);
  });
  return edges;
};

const bfs = function (pairs, source, target) {
  const queue = [];
  const visitedList = [];
  queue.push(source);
  while (queue.length !== 0) {
    const node = queue.shift();
    if (node == target) return true;
    visitedList.push(node);
    const edges = findEdges(pairs, node);
    edges.forEach(edge => {
      if (!visitedList.includes(edge)) queue.push(edge);
    });
  }
  return false;
};

module.exports = { bfs };
