type Person = {
    name: string;
    services: string[];
};

function proCategorization (pros: string[], preferences: string[][]): string[][][] {
    const res: string[][][] = [];

    const people: Person[] = [];

    pros.forEach((pro, i) => {
        const services = preferences[ i ];
        const person: Person = { name: pro, services };
        people.push(person);
    });

    console.log(people);

    for (let i = 0; i < people.length; i++) {
        const el = people[ i ];
        for (let j = 0; j < people.length; j++) {
            const el2 = people[ j ];
            
        }
    }

    return res;
}

console.log(proCategorization([ "Jack", "Leon", "Maria" ], [ [ "Computer repair", "Handyman", "House cleaning" ],
[ "Computer lessons", "Computer repair", "Data recovery service" ],
[ "Computer lessons", "House cleaning" ] ]));