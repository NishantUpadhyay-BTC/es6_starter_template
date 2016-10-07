export default class ParameterDefault{
  constructor(){
    console.log('Hey there!')
  }

  // similar to splat operator in Ruby
  containsAll(haystack, ...needles) {
  for (var needle of needles) {
      if (haystack.indexOf(needle) === -1) {
        return false;
      }
    }
    return true;
  }

  animalSentence(animals2="tigers", animals3="bears") {
    return `Lions and ${animals2} and ${animals3}! Oh my!`;
  }

  // Unlike Python, default value expressions are evaluated at function call time
  // from left to right. This also means that default expressions can use the
  // values of previously-filled parameters. For example, we could make our animal
  // sentence function more fancy as follows:

  animalSentenceFancy(animals2="tigers",
    animals3=(animals2 == "bears") ? "sealions" : "bears")
  {
    return `Lions and ${animals2} and ${animals3}! Oh my!`;
  }
}
