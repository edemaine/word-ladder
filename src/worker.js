import { LadderSearch } from './ladder.js'

onmessage = function (e) {
  const {
    start,
    goal,
    shortest,
    options,
    dictSet,
  } = e.data;

  // Recreate the LadderSearch object in the worker
  const ladderSearch = new LadderSearch();
  ladderSearch.options = options;
  ladderSearch.setDict(dictSet); // Assuming `setDict` exists to set the dictionary

  let result;
  if (shortest) { 
    result = ladderSearch.shortestLadder(start,goal)
  }
  else { 
    result = ladderSearch.ladderDAG(start, goal);
  }

  return postMessage({type: shortest ? "ladder" : "dag", data: result})
};