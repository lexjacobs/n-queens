var allAnagrams = function(word){
  if(word.length < 2){
    return word;
  } else {
    for(var i = 0; i < word.length; i++){
      var letter = word[i];
      var shorterWord = word.substr(0, i) + word.substr(i+1, word.length-1);
      
    }
  }

};


allAnagrams("012");
// should return 012 021 102 120 210 201