function depositProfit (deposit: number, rate: number, threshold: number): number {
    let totalAmount = deposit;
    let years = 0;
    while (totalAmount <= threshold) {
        totalAmount = totalAmount + ((rate / 100) * totalAmount);
        years++;
    }
    return years;
}

console.log(depositProfit(100, 20, 170));