/**
 * https://leetcode.com/problems/find-if-path-exists-in-graph/
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */

var sortIdObj = (edges, variblePath = {}) => {
  edges.forEach(elem => {
    variblePath[+elem[0]] = !!variblePath[elem[0]] ? [...variblePath[elem[0]], elem] : [elem];
    variblePath[+elem[1]] = !!variblePath[elem[1]] ? [...variblePath[elem[1]], elem] : [elem];
  });
  return variblePath;
};

var nextStepInPath = (variblePath, nowNum, endNum, visited = []) => {
  return variblePath[nowNum].map(elem => {
    if(!visited.includes(elem)){
      visited.push(elem);
      const indNextNum = elem.indexOf(nowNum) === 1 ? 0 : 1;
      const numNext = elem[indNextNum];

      if(numNext === endNum) return true;
      else return nextStepInPath(variblePath, numNext, endNum, visited)
    } 
  })
}

var validPath = function(n, edges, source, destination) {
  if(n === 1) return true
  const variblePath = sortIdObj(edges);
  const arrPathIncludes = nextStepInPath(variblePath, source, destination);
  return JSON.stringify(arrPathIncludes).includes(true);
};

console.log(validPath(3, [[0,1],[1,2],[2,0]], 0, 2)) //true
console.log(validPath(6, [[0,1],[0,2],[3,5],[5,4],[4,3]], 0, 5)) //false
console.log(validPath(10, [[4,3],[1,4],[4,8],[1,7],[6,4],[4,2],[7,4],[4,0],[0,9],[5,4]], 5, 9)) //true