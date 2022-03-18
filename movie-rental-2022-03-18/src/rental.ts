import {Movie} from "./movie";
import { RegularMovie } from "./regularMovie";

export class Rental {

    private movie: Movie;
    private daysRented: number;

    public constructor(movie: Movie, daysRented: number) {
        this.movie = movie;
        this.daysRented = daysRented;
    }

    public getDaysRented(): number {
        return this.daysRented;
    }

    getAmountFor() {
        let daysToSurcharge = this.movie.getDaysToSurcharge();
        
        let rentalAmount = this.movie.getBasePrice();

        if(this.getDaysRented() > daysToSurcharge ){
            rentalAmount += (this.getDaysRented() - daysToSurcharge) * this.movie.getAdditionalPrice();
        }

        return rentalAmount;
    } 
}