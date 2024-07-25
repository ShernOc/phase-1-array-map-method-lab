// map() used to perform an action on each element in an Array and gather the results in a new Array

const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// split the words split(), then use CharAt(0) returns the first character to an uppercase, selects the first words, and joins()
const titleCased = ()=> {
return tutorials.map((words)=> words.split(' ').map(words=>words.charAt(0).toUpperCase()+ words.slice(1)).join(' ') );
}; 

/* Another way
split the words split(), then use CharAt(0) returns the first character to an uppercase, selects the first words, and joins()
const titleCased = text => text.split(' ').map(words=>words.charAt(0).toUpperCase()+ words.slice(1)).join(' '); 

 We are now going to create the new array map()

const titledCasedtutorial= tutorials.map(titleCased); 

console.log(titledCasedtutorial); */




