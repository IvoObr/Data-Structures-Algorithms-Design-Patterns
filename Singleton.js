let instance = null;

class Singleton {
    constructor() {
        if (!instance) {
            instance = this.init();
        }
        return instance;
    }

    init() {
        const privateMethod = () => {
            console.log("I am private");
        }
        const privateVariable = "Im also private";
        const privateRandomNumber = Math.random();
        return {
            publicMethod() {
                console.log("The public can see me!");
            },
            publicProperty: "I am also public",
            getRandomNumber() {
                return privateRandomNumber;
            }
        }
    }
}

// Testing
var singleA = new Singleton;
var singleB = new Singleton;
singleA.publicMethod();
console.log(singleA.publicProperty);
console.log(singleA.getRandomNumber() === singleB.getRandomNumber());