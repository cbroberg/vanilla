const cls = require('../services/lib').cls
const log = require('../services/lib').log

// Classes - A class is a blueprint from in which individual objects are created

cls()

// class declaration
class Person {
    constructor(name, year_born) {
        this.name = name // property (e.g. props)
        this.year_born = year_born
    }

    get age() { // age becomes a property
        return this.calcAge()
    }

    calcAge() {
        return new Date().getFullYear() - this.year_born
    }

    what() {
        log(this.name + ' is a person')
    }
// static method is not called through an instance of the class (me) but directly through the class name
    static arms() { 
        return 2
    }

}

// Outside the class we use the instantiation to access the properties (me.name)
// Inside the class we use this to access the properties

// Instantiation of the class Person
var me = new Person('Christian', 1968)

log(me.name + ' was born in ' + me.year_born)
log(me.name + ' is ' + me.age + ' years old')
me.what()
log(me.name + ' has ' + Person.arms() + ' arms!')

class Child extends Person {
    what() {
        super.what()
        log(this.name + ' is a child') // this.name is inherited from the Person class
    }
}

var you = new Child('Mathilde', 2001)
me.what()
you.what()
log(you.name + ' is ' + you.age + ' years old')





// class expression - unnamed
var Person2 = class {
    constructor(name, age) {
        this.name = name
        this.year_born = age
    }
}

// class expression - named
var Person3 = class Person {
    constructor(name, age) {
        this.name = name
        this.year_born = age
    }
}

var myGirlfriend = new Person2('Mette', 1974)
var mySon = new Person3('Max', 2004)

log(myGirlfriend.name)
log(mySon.name)