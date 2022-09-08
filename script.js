let getPontos
function submitPontos() {
  getPontos = document.querySelector('#pontos').value
  // console.log(getPontos)
  let notaA = getPontos >= 90 && getPontos <= 100
  let notaB = getPontos >= 80 && getPontos < 90
  let notaC = getPontos >= 70 && getPontos < 80
  let notaD = getPontos >= 60 && getPontos < 70
  let notaF = getPontos >= 0 && getPontos < 60

  let nota = document.querySelector('#getGrande')
  if (notaA) {
    nota.innerHTML = 'Nota A'
  } else if (notaB) {
    nota.innerHTML = 'Nota B'
  } else if (notaC) {
    nota.innerHTML = 'Nota C'
  } else if (notaD) {
    nota.innerHTML = 'Nota D'
  } else if (notaF) {
    nota.innerHTML = 'Nota F'
  } else {
    nota.innerHTML = `'${getPontos}' não foi reconhecido, Informe apenas número de 0 a 100!`
  }
}
