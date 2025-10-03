let resposta = document.getElementById('resposta')

function principal(){
    let potencia = Number(document.getElementById('potencia').value)
    let irrarea = Number(document.getElementById('irrarea').value)
    let funcionamentodia = Number(document.getElementById('funcionamentodia').value)
    let eficienciasis = Number(document.getElementById('eficienciasis').value) / 100

    let kwh = (potencia * irrarea * funcionamentodia * eficienciasis) / 1000


    resposta.innerHTML = ``
    resposta.innerHTML += `Por mês a geração de energia será: ${kwh.toFixed(2)} KWH`
}

principal()