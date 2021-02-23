const closure = () => {
    let count = 0;
    return () => {
        count++;
        console.log(count);     // 1, 2, 3
    };
};

const res = closure();
res();
res();
res();

// closure()();    // call it right away 