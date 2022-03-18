
import { Movie } from "./movie";

export class ChildrenMovie extends Movie {

    override getDaysToSurcharge(){
        return 3;
    }

    override getBasePrice() {
        return 1.5;
    }

    override getAdditionalPrice() {
      return 1.5;
    }
}