class Observer {
    constructor() {
/*         addObserver();
        removeObserver();
        notifyObserver(); */
        this._observers = [];
    }

    addObserver(observer) {
        this._observers.push(observer);
    }

    notifyObserver(...args) {
        this._observers.forEach(observer => {
            observer(...args);
        });
    }
}

class Telephone extends Observer {
    constructor() {
        addPhoneNumber();
        removePhoneNumber();
        dialPhoneNumber();
        this.phoneNumbers = [];
    }

    addPhoneNumber(number) {
        this.phoneNumbers.push(number);
        this.dialPhoneNumber(number);
        console.log(number + " added!")
    }

    removePhoneNumber(number, index) {
        if (this.phoneNumbers.includes(number)) {
            this.phoneNumbers.splice(index, 1);
        }
    }

    dialPhoneNumber(number) {
        if (this.phoneNumbers.includes(number)) {
            this.notifyObserver(number);
        }
    }
}

const printNumber = (number) => {
    console.log("The number is " + number)
}

const dialNumber = (number) => {
    console.log("Now dialling " + number)
}

const printTheNumber = () => {
    const number = 2347023232;
    addPhoneNumber(number);

    const Telephone = new Telephone();

    Telephone.addObserver(printNumber);
    Telephone.addObserver(dialNumber);
}

printTheNumber();
