/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting

var anagrams = function(str){
  var results = [];
  if(str.length < 2){
    return [str];
  } else {
    for(var i = 0; i < str.length; i++){
      var letter = str[i];
      var trimmedStr = str.substr(0, i) + str.substr(i+1, str.length-1);
      var trimmedStrArray = anagrams(trimmedStr);
      for (var j = 0; j < trimmedStrArray.length; j++) {
        results.push(letter + trimmedStrArray[j]);
      }
    }
  }
  return results;
};

var boardNumberPreparer = function(n){
  var boardAnagramSeed = [];
  for(var i = 0; i < n; i ++){
    boardAnagramSeed.push(i);
  }
  //console.log(boardAnagramSeed);
  return boardAnagramSeed.join("");
};

var naiveBoardSetGenerator = function(n){
  var finalBoardArray = [];
  var boardSeedArray = anagrams(boardNumberPreparer(n));
  // boardSeedArray: [ '012', '021', '102', '120', '201', '210' ]
  // for each set of number in boardSeed Array:
  for (var i = 0; i < boardSeedArray.length; i++) {
    
    // initialize an empty array which will represent a single board:
    var singleBoard = [];

    // for each row of each single board:
    for(var j = 0; j < n; j++){
      var singleRow = [];

      // for each board space of each single row:
      for(var k = 0; k < n; k++){
        if(k === +boardSeedArray[i][j]){
          singleRow.push(1);
        } else {
          singleRow.push(0);
        }
      }
      singleBoard.push(singleRow);
    }
    finalBoardArray.push(singleBoard);
  }
  console.log(finalBoardArray);
  return finalBoardArray;
};

// naiveBoardSetGenerator returns for n(2):
// [ [ [ 1, 0 ], [ 0, 1 ] ], [ [ 0, 1 ], [ 1, 0 ] ] ]
// this is a set of boards that can be iterated over. the solution for
// rooks is self-contained. for queens, check for diagonal conflicts.




// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other
// [[0,1,0],
// [0,0,1],
// [1,0,0],
// ]

// generate all solutions for n = 3





var n3maker = function(){
  var i;
  var boardCount = 0;
  var results = {};
  for(i = 0; i < 3; i++){
    for(var j =0; j < 3; j++){
      for(var k = 0; k < 3; k++){
        var start = [];
        start.push([],[],[]);
        for(var a = 0; a < start.length; a++){
          start[a].push(0,0,0);
        }
        var subResults = start.slice();
        subResults[0][i] = 1;
        subResults[1][j] = 1;
        subResults[2][k] = 1;
        boardCount++;
        results[boardCount] = subResults.slice();
      }
    }
  }
  //console.log(results);
  return results;
};

 var boardSet = n3maker();

 for( var n in boardSet){
  var thisBoard = new Board(boardSet[n]);
     if(thisBoard.hasAnyColConflicts()){
      delete boardSet[n];
     }
 }

 console.log(boardSet);

//


window.findNRooksSolution = function(n) {
  var solution = undefined; //fixme



  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
