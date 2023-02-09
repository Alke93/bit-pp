function Car(type, fuelType) {
    this.type = type;
    this.fuelType = fuelType;
}

function SetBrand(brand) {
    //Car.call(this, 'convertible', 'petrol');
    Car.apply(this, ['convertible', 'petrol']);
    this.brand = brand;
    
    console.log('Car details', this);
}

function DefinePrice(price) {
    // Car.call(this, 'limo', 'diesel');
    Car.apply(this, ['limo', 'diesel']);
    this.price = price;

    console.log('Car details ', this);
}

const newBrand = new SetBrand('Opel');
const newPrice = new DefinePrice(20000);

var car = {
    model: 'Opel Astra',
    year: 2007,
    getData: function() {
        return `${this.model} ${this.year}`
    }
}

var modelName = function() {
    console.log(this.getData() + ', I choose you!');
};



class CarTest {
    constructor(type, fuelType) {
        this.type = type;
        this.fuelType = fuelType;
    }

    getData() {
        return `${this.type} ${this.fuelType}`;
    }
}

var logCar = modelName.bind(new CarTest('limo', 'diesel'));
console.log(logCar);
logCar();