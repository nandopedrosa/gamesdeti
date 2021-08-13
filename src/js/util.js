//Busca um item aleatorio em um array. Retorna o item e seu índice
function getRandomItem(arrayDeItens) {
    if(arrayDeItens.length == 0) {
        return null;
    }
    
    //Numero aleatorio entre 0 e o último item do array
    const index = Math.floor(Math.random() * ((arrayDeItens.length - 1) + 1)) + 0
    const item = arrayDeItens[index];
    return { objeto: item, index: index };
}

//Carrega um game aleatorio
//Basicamente carregamos todos os links de Jogar da Home e escolhemos algum aleatório
//Carrega um game aleatorio
//Basicamente carregamos todos os links de Jogar da Home e escolhemos algum aleatório
function estouComSorte() {

    const xhttp = new XMLHttpRequest();

    // envio da requisicao
    xhttp.open("GET", "/src/home.html");
    xhttp.send();


    //callback
    xhttp.onload = function () {
        const homeHtml = this.responseText;
        var games = [];

        $(homeHtml).find('a.jogar').each(function () {
            const url = $(this).attr('href');
            games.push(url);
        });

        const pagina = getRandomItem(games);
        var currentUrl = window.location;
        var baseUrl = currentUrl.protocol + "//" + currentUrl.host + "//";
        window.location.href = baseUrl + pagina.objeto;
    }

}

