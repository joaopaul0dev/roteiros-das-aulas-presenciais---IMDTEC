const excluir = (array, itensParaExcluir) => {
 for (let i = array.length - 1; i >= 0; i--) {
    if (itensParaExcluir.includes(array[i])) {
            array.splice(i, 1);  
        }
        return array
 }
}
let exemplo = [1, 2, 3, 1, 2];
console.log(excluir(exemplo, [1, 2])); // [ 3 ]
exemplo = ['a', 'b', 'a', 'd', 'e', 'a'];
console.log(excluir(exemplo, ['a', 'd'])); // [ 'b', 'e' ]
exemplo = [true, false, false, true, true, false, false];
console.log(excluir(exemplo, [true])); // [ false, false, false, false ]