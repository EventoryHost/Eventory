function vendorpricecalculations(annualRevenue: number, teamsize: number, yearsOfOperation: number): number {
    let score: number = 0;

    // Annual Revenue Score Calculation
    if (annualRevenue > 18) {
        score += 1;
    } else if (annualRevenue <= 18 && annualRevenue > 12) {
        score += 2;
    } else if (annualRevenue <= 12 && annualRevenue > 7) {
        score += 3;
    } else if (annualRevenue <= 7 && annualRevenue > 3) {
        score += 4;
    } else if (annualRevenue <= 3) {
        score += 5;
    }

    // Team Size Score Calculation
    if (teamsize >= 51) {
        score += 1;
    } else if (teamsize <= 50 && teamsize >= 31) {
        score += 2;
    } else if (teamsize <= 30 && teamsize >= 16) {
        score += 3;
    } else if (teamsize <= 15 && teamsize >= 6) {
        score += 4;
    } else if (teamsize <= 5) {
        score += 5;
    }

    // Years of Operation Score Calculation
    if (yearsOfOperation > 12) {
        score += 1;
    } else if (yearsOfOperation <= 12 && yearsOfOperation > 8) {
        score += 2;
    } else if (yearsOfOperation <= 8 && yearsOfOperation > 5) {
        score += 3;
    } else if (yearsOfOperation <= 5 && yearsOfOperation > 2) {
        score += 4;
    } else if (yearsOfOperation <= 2) {
        score += 5;
    }



    // Category Calculation
    let Category: number = 0;
    if (score >= 15) {
        Category = 5;
    } else if (score <= 14 && score >= 12) {
        Category = 4;
    } else if (score <= 11 && score >= 9) {
        Category = 3;
    } else if (score <= 8 && score >= 6) {
        Category = 2;
    } else if (score <= 5 && score >= 3) {
        Category = 1;
    }

    let price: number = 0
    if (Category === 5) {
        price = 99;
    } else if (Category === 4) {
        price = 199;
    } else if (Category === 3) {
        price = 299;
    } else if (Category === 2) {
        price = 399;
    } else if (Category === 1) {
        price = 499;
    }
    // console.log("Total Score:", score);
    // console.log("Category :", Category);
    // console.log("Price :", price);
    return price;
}

export default vendorpricecalculations;