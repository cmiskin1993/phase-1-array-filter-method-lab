// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']


function findMatching(name, el) {
    return name.filter(
      (possibleMatch) => possibleMatch.toLowerCase() === el.toLowerCase()
    );
  }

  function fuzzyMatch(source, testString) {
    return source.filter(
      (possibleMatch) =>
        possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
    );
  }
  
  function matchName(source, soughtName) {
    return source.filter((record) => record.name === soughtName);
  }