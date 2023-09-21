// Your code here
class Dog {
	constructor(name) {
	  this.name = name;
	}
  
	static makeJet() {
	  return new Dog("Jet");
	}
  
	changeName(newName) {
	  this.name = newName;
	  return this.name;
	}
  
	speak(word) {
	  return `${this.name} says ${word}`;
	}
	greetAndChangeName(newName){
		const name = this.changeName(newName)
		console.log(`Hi ${name}`)
	}
  }

  const newDog = new Dog('hex');

  console.log(newDog.greetAndChangeName( 'skooby'))


/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = Dog;
} catch {
	module.exports = null;
}