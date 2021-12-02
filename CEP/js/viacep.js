//seleciona caixas de texto//
let Rua = document.querySelector('#Rua')
let Bairro = document.querySelector('#Bairro')
let Cidade = document.querySelector('#Cidade')
let Estado = document.querySelector('#Estado')

//consulta CEP no site ViaCEP//
Cep.value = ''

Cep.addEventListener('blur', function(e) {
    let Cep = e.target.value;
    let script = document.createElement('script')
    script.src = 'https://viacep.com.br/ws/'+Cep+'/json/?callback=popularForm'
    document.body.appendChild(script);
});

function popularForm(endereco) {

    if("erro" in endereco) {
        alert('CEP não encontrado')
        return;
    }

    //ler os dados que retornaram do site ViaCEP e armazena//
    console.log(endereco)
    Rua.value = endereco.logradouro
    Bairro.value = endereco.bairro
    Cidade.value = endereco.localidade
    Estado.value = endereco.uf
}

//junta as informações e formata para exibição//   
function format() {
  
    let Nome = document.getElementById('Nome').value
    let Numero = document.getElementById('Numero').value
    let Cep = document.getElementById('Cep').value
    
    document.getElementById('Etiqueta').innerText = 'Etiqueta'
    document.getElementById('Endereco').innerHTML = `${Nome}<br>${Rua.value}, ${Numero}<br>${Bairro.value}<br>${Cidade.value} -${Cep}`
 
    
}

