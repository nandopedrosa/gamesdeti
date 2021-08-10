 //Busca um item aleatorio em um array. Retorna o item e seu índice
 function getRandomItem(arrayDeItens) {
    //Numero aleatorio entre 0 e o último item do array
    const index = Math.floor(Math.random() * ((arrayDeItens.length - 1) + 1)) + 0
    const item = arrayDeItens[index];
    return { objeto: item, index: index };
}

//Carrega um game aleatorio
function estouComSorte() {
    const games = [];
    games.push('gov-itil4-praticas');

    const game = getRandomItem(games).objeto;


}