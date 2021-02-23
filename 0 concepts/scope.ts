// var is hoisted, so are fns with function keyword
// var => lexical scope
// const, let => block scope
const scope = (isVar: boolean = false) => {
    if (isVar) {
        var ok = true;
        let notok = false;
    }
    if (false) {
        var test = true;
        let test2 = false;
    }
    console.log(ok);
    // console.log(notok)   // notok not defined
    console.log(test);   // undefined
    console.log(test2); // test2 not def
};

console.log(scope(true));   // ok = true