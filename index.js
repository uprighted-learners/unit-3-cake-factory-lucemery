class Cake {
    // your code here
    constructor(flavor, icing, decoration) {
        this.flavor = flavor;
        this.icing = icing;
        this.decoration = decoration;
    }
    
    describe() {
        console.log(`It's a ${this.flavor} cake, with ${this.icing} icing, 
        and ${this.decoration}`);
    }
}


let chocolateCake = new Cake("chocolate", "caramel", "sprinkles");
chocolateCake.describe();
// Should print:
// 'It is a chocolate cake, with caramel frosting, and sprinkles'

let strawberryCake = new Cake("strawberry", "vanilla", "strawberry pieces");
strawberryCake.describe();

let birthdayCake = new Cake("vanilla", "chocolate", "candle");
birthdayCake.describe(); 