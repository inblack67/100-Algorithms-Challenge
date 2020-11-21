function arrayChange ( inputArray: number[] ): number
{
    let count = 0;

    inputArray.forEach( ( el, i, arr ) =>
    {
        if ( el >= arr[ i + 1 ] )
        {
            const diff = el - arr[ i + 1 ];
            arr[ i + 1 ] = arr[ i ] + 1;
            count += diff + 1;
        }
    } );
    console.log( inputArray );
    return count;
}

console.log( arrayChange( [ 1, 1, 1 ] ) );
console.log( arrayChange( [ 2, 1 ] ) );