//ES5 things

//constructor
const User = function(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    console.log(this);
}

//Object Methods
User.prototype.getFirstName = function(){
    return this.firstName;
}

User.prototype.getLastName = function(){
    return this.lastName;
}

User.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`;
}

//Object Creation
let u = new User('Ravi', 'Naik');
console.log(u.getFullName());

