function fareEstimator (ride_time: number, ride_distance: number, cost_per_minute: number[], cost_per_mile: number[]): number[] {

    // (Cost per minute) * (ride time) + (Cost per mile) * (ride distance)

    const res: number[] = [];

    for (let i = 0; i < cost_per_mile.length; i++) {
        const costPerMile = cost_per_mile[ i ];
        const costPerMinute = cost_per_minute[ i ];
        console.log(costPerMinute);
        console.log(costPerMile);
        const totalCost = (costPerMinute * ride_time) + (costPerMile * ride_distance);
        res.push(+totalCost.toFixed(1));
    }

    return res;
}

console.log(fareEstimator(30, 7, [ 0.2, 0.35, 0.4, 0.45 ], [ 1.1, 1.8, 2.3, 3.5 ]));
