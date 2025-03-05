let listaGenerica = [];

let programLanguages = ["Python", "C", "Klotin", "C++", "JavaScript"];

console.log(programLanguages)

let newList = []
function addList(item) {
    newList.push(item);
}
addList("Java");
addList("Ruby");
addList("Golang");

function p(texto) {
    console.log(texto);
}

function doble(num) {
    res = num * 2;
    return res;
}

function med(a, b, c) {
    res = (a + b + c) / 3;
    return res;
}

function square(num) {
    res = num * num;
    return res;
}