

class TaxService{
    constructor(){

    }

    getPayPercent(income){
        let percent = 0;
        if(income <= 150000) percent = 0;
        else if( 150000 < income && income<= 300000) percent = 5
        else if( 300000 < income && income<= 500000) percent = 10
        else if( 500000 < income && income<= 750000) percent = 15
        else if( 750000 < income && income<= 1000000) percent = 20
        else if( 1000000 < income && income<= 2000000) percent = 20
        else if( 2000000 < income && income<= 5000000) percent = 25
        else if( income >= 1000000) percent = 30
        return percent;
    }

    async calTax(income){
        const percent = this.getPayPercent(income)
        return {totalTax: income * (percent/100)}
    }
}
module.exports = { TaxService };