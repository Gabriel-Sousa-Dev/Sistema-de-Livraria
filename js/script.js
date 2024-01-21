let fNome = document.querySelector("input#nomeL")
let fAutor = document.getElementById("nomeA")
let fData = document.getElementById("dataP")
let fDesc = document.getElementById("desc")
let fBtn = document.getElementById("sub")
let form = document.getElementById("form")
const areaLivros = document.getElementById("area-livros")
const livro = document.querySelector("div#livro")

let livros = []

const carregarLivros = () => {
  
  if(localStorage.getItem("livrosG")){
    livros = JSON.parse(localStorage.getItem("livrosG"))
    adicionarLivros(livros)
  }
  
}

const atualizarLivros = () => {
  
  let livrosStr = JSON.stringify(livros)
  localStorage.setItem("livrosG",livrosStr)
  
}



const adicionarLivros = (array) => {
  areaLivros.innerText = ""
  
  for (let pos in array){
    let novoLivro = document.createElement("div")
    novoLivro.innerHTML = `
          <p class='livro-titulo'>${String(array[pos].nome)}</p>
          <p class='livro-autor'>${array[pos].autor}</p>
          <p class='livro-descricao'>${array[pos].descricao}</p>`;
        novoLivro.classList.add("livro")
        areaLivros.appendChild(novoLivro)
        
  }
  
  atualizarLivros()
}



form.addEventListener("submit", (e) => {
  
  e.preventDefault()
  let livro = {
    nome: String(fNome.value),
    autor: String(fAutor.value),
    data: String(fData.value),
    descricao: String(fDesc.value)
  }
  
  livros.push(livro)
  adicionarLivros(livros)
}
)
