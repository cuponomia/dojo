class Movie {

    private title : string;

    public getBaseValue() : number {return 0};
    public getAditionalValue() : number {return 0};
    public getMaxDaysBeforeSurcharge() : number {return 0};

    public constructor (title: string){
        this.title = title;
    }

    public getTitle(){
        return this.title;
    }
}

class Children extends Movie{
    public getBaseValue() : number{
        return 1.5;
    }

    public getAditionalValue() : number{
        return 1.5;
    }

    public getMaxDaysBeforeSurcharge() : number{
        return 3;
    }
}

class NewRelease extends Movie{
    public getBaseValue() : number{
        return 0;
    }

    public getAditionalValue() : number{
        return 3;
    }

    public getMaxDaysBeforeSurcharge() : number{
        return 0;
    }
}

class Regular extends Movie{
    public getBaseValue() : number{
        return 2;
    }

    public getAditionalValue() : number{
        return 1.5;
    }

    public getMaxDaysBeforeSurcharge() : number{
        return 2;
    }
}

class Rental{

    private movie : Movie;
    private daysRented : number;

    public constructor (movie : Movie, daysRented : number){
        this.movie = movie;
        this.daysRented = daysRented;
    }

    public getMovie() : Movie{
        return this.movie;
    }

    public getDaysRented() : number{
        return this.daysRented;
    }

    public getAmount() : number {
        let amount = this.movie.getBaseValue();
        if (this.daysRented > this.movie.getMaxDaysBeforeSurcharge()){
            amount += this.movie.getAditionalValue();
        }
        return amount;
    }

    public getPoints() : number{
        if ((this.getMovie() instanceof NewRelease) && this.getDaysRented() > 1){
            return 2;
        }
        return 1;
    }
}

class Customer{

    private name : string;
    private rentals : Rental[] = [];

    public constructor (name : string){
        this.name = name;
    }

    public getName() : string{
        return this.name;
    }

    public addRental(rental : Rental){
        this.rentals.push(rental);
    }

    public getStatement(): string {
        let totalAmount: number = 0;
        let frequentRenterPoints: number = 0;
        let result = "Rental Record for " + this.getName() + "\n";

        for (const rental of this.rentals) {
            let thisAmount = rental.getAmount();
            frequentRenterPoints += rental.getPoints();

            // show figures for this rental
            result += "\t" + rental.getMovie().getTitle() + "\t" + thisAmount.toFixed(1) + "\n";
            totalAmount += thisAmount;
        }

        // add footer lines
        result += "Amount owed is " + totalAmount.toFixed(1) + "\n";
        result += "You earned " + frequentRenterPoints + " frequent renter points";

        return result;
    }
}

const customer = new Customer("Bob");
customer.addRental(new Rental(new Regular("Jaws"), 2));
customer.addRental(new Rental(new Regular("Golden Eye"), 3));
customer.addRental(new Rental(new NewRelease("Short New"), 1));
customer.addRental(new Rental(new NewRelease("Long New",), 2));
customer.addRental(new Rental(new Children("Bambi"), 3));
customer.addRental(new Rental(new Children("Toy Story"), 4));

console.log(customer.getStatement())