let contatti = []

function aggiungiContatto() {
  document.getElementById('NuovoContatto').style.display = 'flex'
}
function ChiudiAggiungContatto() {
  document.getElementById('NuovoContatto').style.display = 'none'
}
let indiceContatto = 0

function salvaContatto() {
  let nome = document.getElementById('Nome').value
  let cognome = document.getElementById('Cognome').value
  let numero = document.getElementById('Numero').value

  if (!nome || !cognome || !numero) {
    if (!nome) {
      document.getElementById('Nome').style.backgroundColor = 'red'
    }
    if (!cognome) {
      document.getElementById('Cognome').style.backgroundColor = 'red'
    }
    if (!numero) {
      document.getElementById('Numero').style.backgroundColor = 'red'
    }
    return
  }
  document.getElementById('noResult').style.display = 'none'

  let contatto = {
    nome: nome,
    cognome: cognome,
    numero: numero,
    id: indiceContatto,
  }
  contatti.push(contatto)
  document.getElementById(
    'ContainerContatti'
  ).innerHTML += `<div class="contatti" id="container-${indiceContatto}-contatto">
  <div style="display: flex;" id="div-${indiceContatto}-contatto">
      <div class="div-info">
          <img src="immagini/gettyimages-1300845620-612x612.jpg" alt=""
              style="  width: 50px;height: 50px; border-radius: 100px; margin-top: 7px;">
      </div>
      <div class="div-info">
          <h4 id="${indiceContatto}-nome">${nome}</h4>
      </div>
      <div class="div-info">
          <h4 id="${indiceContatto}-cognome">${cognome}</h4>
      </div>
      <div class="div-info">
          <h4 id="${indiceContatto}-numero">${numero}</h4>
      </div>
      <div class="div-info">
          <h4>preferiti</h4>
      </div>
      <div style="display: flex;width: 400px;margin-right: 0px; flex: 1;">
 <div style="margin-top: 16px; flex: 1;">
     <button onclick="modificaContatto(${indiceContatto})"
         style="height: 30px;width: 100px; border-radius: 30px; border: 1px solid black;">Modifica</button>
 </div>
 <div style="margin-top: 16px; flex: 1;">
     <button onclick="eliminaContatto(${indiceContatto})"
         style="height: 30px;width: 100px; border-radius: 30px; border: 1px solid black;">Elimina</button>
 </div>
</div>
  </div>
   <div id="div-${indiceContatto}-modifica-contatto" style="display: flex;height: 70px;display: none; ">
  <div class="contatti1">
      <div style="display: flex;">
          <div class="div-info">
              <img src="immagini/gettyimages-1300845620-612x612.jpg" alt=""
                  style="  width: 50px; height: 50px;border-radius: 100px; margin-top: 7px;">
          </div>
          <div class="div-info">
              <input id="${indiceContatto}-nuovo-nome" placeholder="${nome}" style="margin-top:20px">
          </div>
          <div class="div-info">
              <input id="${indiceContatto}-nuovo-cognome" placeholder="${cognome}" style="margin-top:20px">
          </div>
          <div class="div-info">
              <input id="${indiceContatto}-nuovo-numero" placeholder="${numero}" style="margin-top:20px">
          </div>
          <div class="div-info">
              <h4>preferiti</h4>
          </div>
      </div>
  </div>
  <div style="display: flex;width: 400px;margin-right: 0px; flex: 1;">
      <div style="margin-top: 16px; flex: 1;">
          <button onclick="salvaModificaContatto(${indiceContatto})"
              style="height: 30px;width: 100px; border-radius: 30px; border: 1px solid black;">Salva</button>
      </div>
      <div style="margin-top: 16px; flex: 1;">
          <button onclick="annullaModifica(${indiceContatto})"
              style="height: 30px;width: 100px; border-radius: 30px; border: 1px solid black;">Annulla</button>
      </div>
  </div>

</div>
  
 </div> 
 
`
  indiceContatto++
  ChiudiAggiungContatto()
  document.getElementById('Nome').value = ''
  document.getElementById('Cognome').value = ''
  document.getElementById('Numero').value = ''
}

function modificaContatto(indiceContatto) {
  document.getElementById(`div-${indiceContatto}-contatto`).style.display =
    'none'
  document.getElementById(
    `div-${indiceContatto}-modifica-contatto`
  ).style.display = 'flex'
  let nome = document.getElementById(`${indiceContatto}-nome`).innerHTML
  let cognome = document.getElementById(`${indiceContatto}-cognome`).innerHTML
  let numero = document.getElementById(`${indiceContatto}-numero`).innerHTML
  document.getElementById(`${indiceContatto}-nuovo-nome`).value = nome
  document.getElementById(`${indiceContatto}-nuovo-cognome`).value = cognome
  document.getElementById(`${indiceContatto}-nuovo-numero`).value = numero
}

function salvaModificaContatto(indiceContatto) {
  let nuovoNome = document.getElementById(`${indiceContatto}-nuovo-nome`).value
  let nuovoCognome = document.getElementById(
    `${indiceContatto}-nuovo-cognome`
  ).value
  let nuovoNumero = document.getElementById(
    `${indiceContatto}-nuovo-numero`
  ).value
  document.getElementById(`${indiceContatto}-nome`).innerHTML = nuovoNome
  document.getElementById(`${indiceContatto}-cognome`).innerHTML = nuovoCognome
  document.getElementById(`${indiceContatto}-numero`).innerHTML = nuovoNumero
  document.getElementById(`div-${indiceContatto}-contatto`).style.display =
    'flex'
  document.getElementById(
    `div-${indiceContatto}-modifica-contatto`
  ).style.display = 'none'
}

function annullaModifica(indiceContatto) {
  document.getElementById(`div-${indiceContatto}-contatto`).style.display =
    'flex'
  document.getElementById(
    `div-${indiceContatto}-modifica-contatto`
  ).style.display = 'none'
}

function eliminaContatto(indiceContatto) {
  document.getElementById(`container-${indiceContatto}-contatto`).remove()
  contatti = contatti.filter((contatto) => contatto.id !== indiceContatto)
  if (contatti.length === 0) {
    document.getElementById('noResult').style.display = 'block'
  }
}

function cercaNomi() {
  let cerca = document.getElementById('search').value.toLowerCase()
  if (!cerca) {
    for (let index = 0; index < contatti.length; index++) {
      document.getElementById(`container-${index}-contatto`).style.display =
        'block'
    }
    document.getElementById('noResult').style.display = 'none'
    return
  }
  let listaContatti = contatti.filter((contatto) => {
    return (
      contatto.nome.startsWith(cerca) ||
      contatto.cognome.startsWith(cerca) ||
      contatto.numero.startsWith(cerca)
    )
  })
  let listaIdContatti = listaContatti.map((contatto) => {
    return contatto.indice
  })
  if (listaIdContatti.length == 0) {
    document.getElementById('noResult').style.display = 'block'
  } else {
    document.getElementById('noResult').style.display = 'none'
  }

  if (listaContatti.length === 0) {
    document.getElementById('noResult').style.display = 'block'
  } else {
    document.getElementById('noResult').style.display = 'none'
  }
  for (let index = 0; index < contatti.length; index++) {
    let idContatto = `container-${index}-contatto`

    if (!listaContatti.some((contatto) => idContatto.includes(contatto.id))) {
      document.getElementById(idContatto).style.display = 'none'
    } else {
      document.getElementById(idContatto).style.display = 'block'
    }
  }
}
function modificaProfilo() {
  document.getElementById('NuovoProfilo').style.display = 'flex'
}
function ChiudiModificaProfilo() {
  document.getElementById('NuovoProfilo').style.display = 'none'
}
let ricercaAttiva = false

function ricercaPerLettera(lettera) {
  console.log('Ricerca per lettera:', lettera)
  if (ricercaAttiva && ultimaLetteraCercata === lettera) {
    resettaVisibilitaContatti()
    return
  }
  resettaVisibilitaContatti()
  let letteraAttiva = false
  for (let index = 0; index < contatti.length; index++) {
    let idContatto = `container-${index}-contatto`
    let nomeContatto = contatti[index].nome.toLowerCase()
    let cognomeContatto = contatti[index].cognome.toLowerCase()

    if (
      nomeContatto.startsWith(lettera.toLowerCase()) ||
      cognomeContatto.startsWith(lettera.toLowerCase())
    ) {
      document.getElementById(idContatto).style.display = 'block'
      letteraAttiva = true
    } else {
      document.getElementById(idContatto).style.display = 'none'
    }
  }
  document.getElementById('noResult').style.display = letteraAttiva
    ? 'none'
    : 'block'
  ricercaAttiva = true
  ultimaLetteraCercata = lettera
}
function resettaVisibilitaContatti() {
  for (let index = 0; index < contatti.length; index++) {
    let idContatto = `container-${index}-contatto`
    document.getElementById(idContatto).style.display = 'block'
  }
  document.getElementById('noResult').style.display = 'none'
  ricercaAttiva = false
  ultimaLetteraCercata = ''
}
