export class Movie {

    public static CHILDRENS = 2;
    public static NEW_RELEASE = 1;
    public static REGULAR = 0;

        
    private title: string;
    private priceCode: number;

    public constructor(title: string, priceCode: number) {
        this.title = title;
        this.priceCode = priceCode;
    }

    public getPriceCode(): number {
        return this.priceCode;
    }

    public setPriceCode(arg: number) {
        this.priceCode = arg;
    }

    public getTitle(): string {
        return this.title;
    }

    public getBasePrice(): number {
        switch (this.getPriceCode()) {
            case Movie.REGULAR:
                return 2;
                break;
            case Movie.NEW_RELEASE:
                return 0;
                break;
            case Movie.CHILDRENS:
                return 1.5;
                break;
        }
    }

    public getAdditionalPrice(): number {
        switch (this.getPriceCode()) {
            case Movie.REGULAR:
                return 1.5;
                break;
            case Movie.NEW_RELEASE:
                return 3;
                break;
            case Movie.CHILDRENS:
                return 1.5;
                break;
        }
    }

    public getDaysToSurcharge() : number{
          return 0;
    }

}

