
import { Movie } from "./movie";

export class RegularMovie extends Movie {

    override getDaysToSurcharge(){
        return 2;
    }

    override getBasePrice() {
        return 2;
    }

    override getAdditionalPrice() {
      return 1.5;
    }
    
}