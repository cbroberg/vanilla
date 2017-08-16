class Human {
  constructor() {}
  static ping() {
    return 'ping'
  }
}

class Computer extends Human {
  constructor() {
        super()
  static pingpong() {
    return super.ping() + ' pong'
  }      
    }

}

console.log('Computer says ' + Computer.pingpong()) // 'ping pong'

class Animal {
  constructor(name) {
    this.name = name
  }

  speak() {
    console.log(this.name + ' makes a noise.')
  }
}

class Dog extends Animal {
  speak() {
    console.log(this.name + ' barks.')
  }
}

var d = new Dog('Mitzie')
d.speak()

class Cat {
  constructor(name) {
    this.name = name
  }

  speak() {
    console.log(this.name + ' makes a noise.')
  }
}

class Lion extends Cat {
  speak() {
    super.speak()
    console.log(this.name + ' roars.')
  }
}

var c = new Lion('Simba') // Simba makes a noise
c.speak() // Simba roars
