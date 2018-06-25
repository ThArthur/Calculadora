var inicial, capital, juros, meses, total_juros;

function calcular(){

    capital = document.getElementById('valor_inicial').value;
    juros = document.getElementById('juros_').value;
    meses = document.getElementById('meses_').value;

    var inicial = capital * Math.pow((1 + (juros/100)), meses);

    document.getElementById('1').innerHTML = inicial;

    total_juros = inicial - capital;
    document.getElementById('2').innerHTML = total_juros;

}