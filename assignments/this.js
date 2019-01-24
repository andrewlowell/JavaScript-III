/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window - 'this' can have global context if you just call it out in the wild without any other more specific information, and that global is called window.
* 2. Implicit - 'this' automatically refers to the object before the '.' if the method or attribute was part of an object and referenced by the dot syntax
* 3. New - when you use a constructor function to create a new object, 'this' for any method called from that object will refer back to the specific instance of that object which was created with the new keyword.
* 4. Explicit - whenever the .call or .apply functions are used, they define what 'this' is explicitly.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);

// Principle 2

// code example for Implicit Binding
console.log(mage.takeDamage()); // Bruce took damage.

// Principle 3

// code example for New Binding
const mage = new Humanoid({
  createdAt: new Date(),
  healthPoints: 5,
  name: 'Bruce',
  team: 'Mage Guild',
  language: 'Common Tongue',
});

// Principle 4

// code example for Explicit Binding
function CharacterStats(charAttrs) {
  GameObject.call(this, charAttrs);
  this.healthPoints = charAttrs.healthPoints;
  this.name = charAttrs.name;
}