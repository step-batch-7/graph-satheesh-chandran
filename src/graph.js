//Example
// Pairs => [[from,to],[to,from]]
// Source => from
// To => to
// Should return true.

const parsePair = function (pairs) {
  const parseList = {};
  pairs.forEach(([key, value]) => {
    if (parseList[key]) return parseList[key].push(value);
    parseList[key] = [value];
  });
  return parseList;
};

const bfs = function (pairs, source, target) {
  const adjacent = parsePair(pairs);
  const queue = [];
  const visitedList = [];
  queue.push(source);
  while (queue.length !== 0) {
    const node = queue.shift();
    if (node === target) return true;
    visitedList.push(node);
    const edges = adjacent[node];
    edges.forEach(edge => {
      if (!visitedList.includes(edge)) queue.push(edge);
    });
  }
  return false;
};

module.exports = { bfs };
