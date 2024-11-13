
let fun1: () => void;
let fun2: (name: string) => string;
let fun3: (name: string, id: (string | number)) => number;

fun1 = () => {
    console.log('fun1 called..');
}

fun2 = (name) => {
    return name;
}

fun3 = (name, id) => {
    return Number(id);
}

fun1();
console.log(fun2('Shakib'));
console.log(fun3('Shakib', 20));