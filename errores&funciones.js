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

function creaDividor(x) {
    return function(y) {
        return y / x;
    };
}
let creaDivir2 = creaDividor(2);
console.log(creaDivir2(10));


function comparatorNumber(x,y) {
    if (x === y) return 0;
    if (x < y) return -1;
    if (x > y) return 1;
}
console.log(comparatorNumber(10,10));
console.log(comparatorNumber(9,10));
console.log(comparatorNumber(11,10));

function numeroMayorCadena(x) {
    return function () {
        let numeros = [];
        let masAlto = 0;
        let cadena = x.split(" ");
        for(let i = 0 ; i < cadena.length ; i++) {
            if (!isNaN(cadena[i])){
                numeros.push(parseInt(cadena[i]));
            }
        }
        for(let i = 0 ; i < numeros.length ; i++) {
            if (masAlto < numeros[i]){
                masAlto = numeros[i];
            }
        }
        return masAlto;
    }
}
let impreso = "24 -145 15 es 5 23 mayor que 14";

let funcionImpresa = x => numeroMayorCadena(x);
console.log(funcionImpresa(impreso)());

function sumaDos(x) {
    return function (y) {
        return x+y;
    }

}

let res= z => sumaDos(z);

console.log(res(3)(3));

function concatenar(x) {
    return function (y) {
        return function (a) {
            return function (b) {
                return `${x} ${y} ${a} ${b}`;
            }
        }
    }
}

let cadena = b => concatenar(b);

console.log(cadena("hola")("que")("haces")("?"));