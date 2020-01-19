const Person = require("./Person.js");

class Nick extends Person {
    constructor(name, color, weight){
        super(name, color)
        this.weight = weight;
    }
}

module.exports = Person;