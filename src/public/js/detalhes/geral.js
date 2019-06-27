if (document.querySelector('.btn-calcular-frete') != null) {
    document.querySelector('.btn-calcular-frete').addEventListener('click', function (e) {
        let cepDestino = document.querySelector('#campoCalcularFrete').value;
        let precoLivro = document.querySelector('#precoLivro').value;
        document.querySelector('.valorFrete').innerHTML = "  ";
        calculaFrete(41106, cepDestino, precoLivro, 'PAC');
        calculaFrete(40010, cepDestino, precoLivro, 'Sedex');
    });


    function calculaFrete(codServico, cepDestivo, precoLivor, type) {
        let url = "https://www.chsweb.com.br/apicorreios/frete.php?sCepOrigem=88750000&sCepDestino=" + cepDestivo + "&nVlValorDeclarado=" + precoLivor + "&nCdServico=" + codServico;

        let ajax = new XMLHttpRequest();

        ajax.addEventListener('load', function () {
            addValue(JSON.parse(this.responseText).results, type);
        });
        ajax.open("GET", url);
        ajax.send();
    }

    function addValue(values, type) {
        document.querySelector('.valorFrete').innerHTML += ""
            + "<p><b>" + type + ": </b>R$ " + values.cServico.Valor + " </p>";
        // +"<p><b>PAC: </b>R$ 39,95</p>";

    }
}
