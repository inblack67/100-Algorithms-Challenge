function incrementalBackups (lastBackupTime: number, changes: number[][]): number[] {
    const res: number[] = [];
    for (let i = 0; i < changes.length; i++) {
        const el = changes[ i ];
        const time = el[ 0 ];
        const id = el[ 1 ];
        if (time > lastBackupTime) {
            if (!res.includes(id)) {
                res.push(id);
            }
        }
    }
    const sortedRes = res.sort((a, b) => a - b);
    return sortedRes;
}

console.log(incrementalBackups(461620205, [ [ 461620203, 1 ],
[ 461620204, 2 ],
[ 461620205, 6 ],
[ 461620206, 5 ],
[ 461620207, 3 ],
[ 461620207, 5 ],
[ 461620208, 1 ] ]));
