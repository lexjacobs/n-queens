var anagrams = function(str){
  var results = [];
  if(str.length < 2){
    return [str];
  } else {
    for(var i = 0; i < str.length; i++){
      var letter = str[i];
      var trimmedStr = str.substr(0, i) + str.substr(i+1, str.length-1);
      var trimmedStrArray = allAnagrams(trimmedStr);
      for (var j = 0; j < trimmedStrArray.length; j++) {
        results.push(letter + trimmedStrArray[j]);
      }
    }
  }
  return results;
};


//anagrams("012");
// should return 012 021 102 120 210 201