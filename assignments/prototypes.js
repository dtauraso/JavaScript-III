/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  

/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

// https://www.sitepoint.com/simple-inheritance-javascript/
var inheritsFrom = function (child, parent) {
  child.prototype = Object.create(parent.prototype);
};
var GameObject = function(name, dimensions) {
  this.name = name
  this.dimensions = dimensions
  // this.test = "I'm a test"
}
GameObject.prototype.createdAt = function() {

}
GameObject.prototype.destroy = function() {

  return `destroy ${this.name}`
}
/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
function CharacterStats(healthPoints) {
  this.healthPoints = healthPoints
  this.test = "I'm a test"
}
// put this in front so it will not replace the new prototype functions made
inheritsFrom(CharacterStats, GameObject)
CharacterStats.prototype.takeDamage = function() {
  return `${this.name} took damage`
}
// bottom up edges
// CharacterStats -> GameObject


var a = new GameObject("object a")

var b = new CharacterStats(2)
console.log(b.destroy())
// implicit usage of this for the 2 instances created
b.takeDamage()
/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
 
var Humanoid = function(humanoid_data) {
  this.team = humanoid_data.team
  this.weapons = humanoid_data.weapons
  this.language = humanoid_data.language
  this.name = humanoid_data.name
  this.createdAt = humanoid_data.createdAt
  this.dimensions = humanoid_data.dimensions
  this.healthPoints = humanoid_data.healthPoints

}
// bottom up edges

// Humanoid -> CharacterStats
inheritsFrom(Humanoid, CharacterStats)

Humanoid.prototype.greet = function() {
  return `${this.name} greets in ${this.language}`
}

var c = new Humanoid("team x", "gun", "spanish")

// calling c's inherited functions on c
c.takeDamage()
c.destroy()

/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!
  var Villain = function(name, human) {
    this.name = name
    this.human = human
  }

  inheritsFrom(Villain, Humanoid)

  Villain.prototype.VillanRemoveHealth = function(damage, hero) {
    if(hero.human.healthPoints > 0) {
      hero.human.healthPoints -= damage
      if(hero.human.healthPoints === 0) {
        // console.log("here")
        return hero.human.destroy()

      } else {
        return `${hero.human.name} is still alive`
      }

    } else {
      return hero.human.destroy()
    }  }

  var Hero = function(name, human) {
    this.name = name
    this.human = human
  }

  inheritsFrom(Hero, Humanoid)
  Hero.prototype.HeroRemoveHealth = function(damage, villain) {
    if(villain.human.healthPoints > 0) {
      villain.human.healthPoints -= damage
      if(villain.human.healthPoints === 0) {
        // console.log("here")
        return villain.human.destroy()

      } else {
        return `${villain.human.name} is still alive`
      }

    } else {
      return villain.human.destroy()
    }

}


console.log("stretch goal")
let swordsmanHero = new Hero("a good name", new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2,
  },
  healthPoints: 15,
  name: 'Sir Mustachio',
  team: 'The Round Table',
  weapons: [
    'Giant Sword',
    'Shield',
  ],
  language: 'Common Tongue',
}));

// let aVillain = new Villain("a bad name", swordsman)
const mageVillain = new Villain("really bad name", new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1,
  },
  healthPoints: 5,
  name: 'Bruce',
  team: 'Mage Guild',
  weapons: [
    'Staff of Shamalama',
  ],
  language: 'Common Tongue',
}));
// 1 really powerfull move
console.log(swordsmanHero.HeroRemoveHealth(4, mageVillain))
console.log(mageVillain.VillanRemoveHealth(5, swordsmanHero))
console.log(swordsmanHero.HeroRemoveHealth(1, mageVillain))

// console.log(aVillain.human.healthPoints)

// this code came from a SL

// function Villain(attributes) {
//   Humanoid.call(this, attributes);
// }

// Villain.prototype = Object.create(Humanoid.prototype);

// Villain.prototype.cuts = function() {
//   console.log(`\n`);
//   if (swordsman.healthPoints < 1) {
//     console.log(
//       `The Swordsman is dead and can't fight!\nThe Swordsman lost the fight!`
//     );
//     throw new Error("Swordsman is dead");
//   }
//   let hit = Math.floor(Math.random() * 10);
//   if (hit < 2) {
//     return `The Swordsman missed everyone!`;
//   } else if (hit < 6) {
//     let deathPoints = Math.floor(Math.random() * 10);
//     mage.healthPoints -= deathPoints;
//     console.log(
//       `The Swordsman hit the Mage and scored ${deathPoints} points of damage, the mage has ${mage.healthPoints} health points left`
//     );
//     if (mage.healthPoints < 1) {
//       return `The mage is dead!`;
//     } else {
//       return `Now there coming after you!!!`;
//     }
//   } else {
//     let deathPoints = Math.floor(Math.random() * 10);
//     archer.healthPoints -= deathPoints;
//     console.log(
//       `The Swordsman hit the Archer and scored ${deathPoints} points of damage, the archer has ${archer.healthPoints} health points left`
//     );
//     if (archer.healthPoints < 1) {
//       return `The mage is dead!`;
//     } else {
//       return `Now there coming after you!!!`;
//     }
//   }
// };
