const HashMap = require('./hashmap');


//1. Print your hash map and notice the length and items that are hashed in your hash map. Have you hashed all the items you were asked to?
// Retrieve the value that is hashed in the key "Maiar" and Hobbit.
// What are the values of Maiar and Hobbit that you have? Is there a 
//discrepancy ? Explain your answer. What is the capacity of your hash
//table after you have hashed all the above items ? Explain your answer.
function main() {

  const lotr = new HashMap();

  HashMap.MAX_LOAD_RATIO = 0.5;
  HashMap.SIZE_RATIO = 3;

  lotr.set('Hobbit', 'Bilbo');
  lotr.set('Hobbit', 'Frodo');
  lotr.set('Wizard', 'Gandalf');
  lotr.set('Human', 'Aragorn');
  lotr.set('Elf', 'Legolas');
  lotr.set('Maiar', 'The Necromancer');
  lotr.set('Maiar', 'Sauron');
  lotr.set('RingBearer', 'Gollum');
  lotr.set('LadyOfLight', 'Galadriel');
  lotr.set('HalfElven', 'Arwen');
  lotr.set('Ent', 'Treebeard');


  //  console.log(lotr.get('Hobbit'));
  // console.log(lotr.get('Maiar'));

  // console.log(lotr);

}

main();

//2.WhatDoesThisDo - What is the output of the following code? 
//explain your answer.
const WhatDoesThisDo = function () {
  let str1 = 'Hello World.';
  let str2 = 'Hello World.';
  let map1 = new HashMap();
  map1.set(str1, 10);
  map1.set(str2, 20);
  let map2 = new HashMap();
  let str3 = str1;
  let str4 = str2;
  map2.set(str3, 20);
  map2.set(str4, 10);

  // console.log(map1.get(str1));
  // console.log(map2.get(str3));
};
WhatDoesThisDo();

// this will return only the value and not the key -- returns 20, 10
//because they key is the same

//4. Remove Duplicates -- Implement a function to delete all duplicated characters
//in a string and keep only the first occurrence of each character. For example, if 
//the input is string “google”, the result after deletion is “gole”.Test your program 
//with a sentence as well such as "google all that you think can think of".

function removeDuplicates(string) {


  const answer = new HashMap(); 

  let newString = ''; 

  for (let char of string) {
    if (!answer.get(char)) {
      newString += char; 
      answer.set(char, true); 
    }
  }
  console.log(newString)

  return newString; 
}
removeDuplicates('google') 


// think of hashmap like table drawings one column with a label 
// set to hashmap and set seen to true then if already in there 
// if already there skip it 

