class FirstChar {
  constructor(theWord) {
    this.theWord = theWord;
  }

  FirstCharToUpperCase(theWord) {
    theWord = theWord[0].toUpperCase() + theWord.slice(1);
    return theWord;
  }
}

module.exports = FirstChar;
