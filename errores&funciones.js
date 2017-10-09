function range() {
    let num = 1;
    try {
        num.toPrecision(500);
    }
    catch (err) {
        console.log(err.name);
        console.log(err.message);

    }
}

function reference() {
    let x;
    try {
        x = y + 1;
    }
    catch (err) {
        console.log(err.name);
        console.log(err.message);

    }
}

function syntax() {
    try {
        eval("alert('Hello)");
    } catch (err) {
        console.log(err.name);
        console.log(err.message);
    }
}

function typeError() {
    let x = 1;
    try {
        x.toUpperCase();
    } catch (err) {
        console.log(err.name);
        console.log(err.message);

    }
}

function URI() {
    try {
        decodeURI("%%%");
    } catch (err) {
        console.log(err.name);
        console.log(err.message);
    }
}

function factorial(n) {
    if (n == 0 || n == 1) {
        return 1;
    } else {
        return (n * factorial(n - 1));
    }
}

function fibonacci(num) {
    if (num < 1) {
        return 0;
    } if (num == 1){
        return 1;
    } else{
        return fibonacci(num - 1) + fibonacci(num - 2);
    }
}
function multiply(a, b = 5) {
    return a*b;
}

function multiply(multiplicador, ...valores) {
    let i = 0;
    for (i = 0; i < valores.length; i++) {
        valores[i] = valores[i] * multiplicador;
    }
    return valores;
}

function creaSumador(x) {
    return function(y) {
        return x + y;
    };
}

function sumadoresAnonimos(){
    let suma5 = creaSumador(5);
    let suma10 = creaSumador(10);

    console.log(suma5(2));
    console.log(suma10(2));
}