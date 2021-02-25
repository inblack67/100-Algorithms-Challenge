interface Deadlines {
    today: number;
    upcoming: number;
    later: number;
}

const tasksTypes = (deadlines: number[], today: number): number[] => {

    const res: Deadlines = {
        later: 0,
        today: 0,
        upcoming: 0
    };

    deadlines.forEach(el => {
        if (el <= today) {
            res.today++;
        } else if (el > today && el <= today + 7) {
            res.upcoming++;
        } else {
            res.later++;
        }
    });

    return [ res.today, res.upcoming, res.later ];
};

console.log(tasksTypes([ 1, 2, 3, 4, 5 ], 2));
console.log(tasksTypes([ 1, 2, 4, 2, 10, 3, 1, 4, 5, 4, 9, 8 ], 1));
