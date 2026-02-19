const excluirPropriedades = (objeto, propriedades) => {
    
    
    for (let i = propriedades.length - 1; i >= 0; i--) {
        const chave = propriedades[i]
        
        if (chave in objeto) {
                delete objeto[chave]
        }    
    }

    return objeto
};
var exemplo = { a: 1, b: 2, c: true };
console.log(excluirPropriedades(exemplo, ['b'])); // { a: 1, c: true }
exemplo = { a: 1, b: 2, c: true };
console.log(excluirPropriedades(exemplo, ['b', 'a'])); // { c: true }
