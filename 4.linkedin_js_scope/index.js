// The warrior3 will be globally scoped
// use 'use strict' to remove this issue'
const warrior = {
  name: 'Jujin Take',
  type: 'Ninja',
  weapon: 'Shuriken',
  agility: 79
} // this is globally scoped

// globally scoped 
const screamWarrior = () => {
  let warrior2 = 'Samurai';
  
  warrior3 = 'Viking';
  return {
      shootWarrior: () => {
          return console.log(warrior, warrior2);
      }
  }
}
 
const newWarrior = screamWarrior();

// newWarrior.shootWarrior();

// console.log(warrior, warrior3);

// End Global scope.