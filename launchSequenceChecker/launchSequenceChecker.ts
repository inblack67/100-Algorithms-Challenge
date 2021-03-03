const isInASCOrder = (arr: number[]): boolean => {
    for (let i = 0; i < arr.length; i++) {
        const el = arr[ i ];
        const nextEl = arr[ i + 1 ];
        if (nextEl) {
            if (el > nextEl) {
                return false;
            }
        }
    }
    return true;
};

function launchSequenceChecker2 (systemNames: string[], stepNumbers: number[]): boolean {
    const stages = {};
    systemNames.forEach((el, i) => {
        if (stages[ el ]) {
            stages[ el ] = [ ...stages[ el ], stepNumbers[ i ] ];
        } else {
            stages[ el ] = [ stepNumbers[ i ] ];
        }
    });
    for (const i in stages) {
        if (Object.prototype.hasOwnProperty.call(stages, i)) {
            const el = stages[ i ];
            const isIt = isInASCOrder(el);
            if (!isIt) {
                return false;
            }
        }
    }
    return true;
}

// checking on the fly
function launchSequenceChecker (systemNames: string[], stepNumbers: number[]): boolean {
    const stages = {};
    for (let i = 0; i < systemNames.length; i++) {
        const el = systemNames[ i ];
        if (stages[ el ]) {
            if (stages[ el ] > stepNumbers[ i ]) {
                return false;
            }
            stages[ el ] = stepNumbers[ i ];
        }
        else {
            stages[ el ] = stepNumbers[ i ];
        }
    }
    return true;
}

console.log(launchSequenceChecker([ "stage_1", "stage_2", "dragon", "stage_1", "stage_2", "dragon" ], [ 1, 10, 11, 2, 12, 111 ]));
console.log(launchSequenceChecker([ "stage_1", "stage_1", "stage_2", "dragon" ], [ 2, 1, 12, 111 ]));