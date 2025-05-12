// Different method used for classes
// class Car {
//     constructor(make, model) {
//         this.make = make;
//         this.model = model;
//     }
// }

class Car {
    constructor() {
        make: this.make
        model: this.model
        speed: this.speed
    }

    details() {
        console.log(`This car's make is ${this.make} and the model is ${this.model}.`)
    }

    accelerate(mph) {
        this.speed += mph;
        console.log(`This car is going ${this.speed} mph.`)
    }

    brake(mph) {
        this.speed -= mph;
        console.log(`This car is going ${this.speed} mph.`)
    }
}

let firstCar = new Car();
firstCar.make = 'Nissan';
firstCar.model = 'Versa';
firstCar.speed = 0;
// Can add an extra variable without going into the constructor
// firstCar.tires = 'None'
firstCar.details();
firstCar.accelerate(40);
firstCar.brake(15);

console.log(firstCar);

let secondCar = new Car();
secondCar.make = 'Ford';
secondCar.model = 'Fusion';
secondCar.details();

console.log(secondCar);


class Employee {
    // This constructor method initializes the properties below
    constructor(name, title, catchPhrase) {
        this.name = name;
        this.title = title;
        this.catchPhrase = catchPhrase;
    }
    introduction() {
        console.log(`Hi, I am ${this.name}. I am a ${this.title}. ${this.catchPhrase}`);
    }
}

let spongebob = new Employee('Spongebob', 'Fry Cook', "I'm Ready!");
spongebob.introduction();

let squidward = new Employee('Squidward', 'Cashier', 'I hate everyone.');
squidward.introduction();

console.log(spongebob);
console.log(squidward);
