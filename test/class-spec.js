const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {
  let word;

  before(() => {
    word = new Word("testing");
  });
  describe("Word constructor function", function () {

    it('should have a "word" property', function () {
      expect(word.word).to.exist;
    });

    it('should set the "word" property when a new word is created', function () {
      expect(word.word).to.equal("testing");
    });
  });

  describe("removeVowels function", function () {
    it("should return a the word with all vowels removed", function () {
      const newWord = word.removeVowels();
      expect(newWord).to.deep.equal("tstng");

      const fullVowel = new Word("aeiouAEIOU");
      const empty = fullVowel.removeVowels();
      expect(empty).to.deep.equal("");

      const noVowels = new Word("try");
      const tryWord = noVowels.removeVowels();
      expect(tryWord).to.deep.equal("try");
    });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {
      const newWord = word.removeConsonants();
      expect(newWord).to.deep.equal("ei");

      const fullConsonant = new Word("bbbcccddd");
      const empty = fullConsonant.removeConsonants();
      expect(empty).to.deep.equal("");

      const noConsonants = new Word("aeiou");
      const vowels = noConsonants.removeConsonants();
      expect(vowels).to.deep.equal("aeiou");
    });
  });

  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {
      const newWord = word.pigLatin();
      expect(newWord).to.deep.equal("estingtay");

      const firstVowel = new Word("aether");
      const pigLatined = firstVowel.pigLatin();
      expect(pigLatined).to.deep.equal("aetheryay");
    });
  });
});
