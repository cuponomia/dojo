
import { Movie } from "./movie";
import { Rental } from "./rental";

export class NewReleaseMovie extends Movie {

    override getDaysToSurcharge(){
        return 0;
    }

    override getBasePrice() {
        return 3;
    }

    override getAdditionalPrice() {
      return 1;
    }
    
}