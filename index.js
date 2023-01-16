// Variaveis

const modal = document.querySelector('.modal-cadastro')
const bg = document.querySelector('.background-modal')
const nomeLogin = document.querySelector('#nome')
const cidadeLogin = document.querySelector('#cidade')
const telLogin = document.querySelector('#tel')
const idadeLogin = document.querySelector('#idade')
const nomeReg = document.querySelector('#nome-reg')
const cidadeReg = document.querySelector('#cidade-reg')
const telReg = document.querySelector('#tel-reg')
const idadeReg = document.querySelector('#idade-reg')
const cadastrar = document.querySelector('#cad')

document.querySelector('#btn-cadastrar').addEventListener('click', () => {
    modal.classList.toggle('on')
    bg.classList.remove('off')
    document.querySelector('.btn-voltar').addEventListener('click', () => {
        modal.classList.remove('on')
        bg.classList.add('off')
    })
})

cadastrar.addEventListener('click', () => {
    modalCadastro()
    modal.classList.remove('on')
    bg.classList.add('off')
})

function modalCadastro() {
    let tabelaCad = document.querySelector('.tabela')
    let row = document.createElement('tr')

    dadosReg = [ nomeReg.value, cidadeReg.value, idadeReg.value,telReg.value ]

    for (let i = 0; i < dadosReg.length; i++) {
        let el = document.createElement('td')
        row.appendChild(el)
        tabelaCad.appendChild(row)
        el.innerHTML = dadosReg[i]
    }
}