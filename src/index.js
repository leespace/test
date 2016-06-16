var Person = function(name, age){
	this.name = name;
	this.age = age;
}

Person.prototype.sayName = function(){
	console.log(this.name);
}

Person.prototype.sayAge = function(){
	console.log(this.age);
}

var person = new Person('lee', '26');

person.sayName();
person.sayAge();