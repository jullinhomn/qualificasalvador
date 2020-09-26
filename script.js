
function salvarDados1() {
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let cpf = document.getElementById('cpf').value; // documentos
    let celular = document.getElementById('contato').value;
    resultado.innerHTML = '';
    resultado.innerHTML += `<strong>Dados do canditado:</strong> <br> Nome: ${nome}<br>E-mail: ${email}<br>CPF: ${cpf}<br>Celular: ${celular} <br> Curso: <strong>Aperfeiçoamento em Panificação</strong>`;
    
    
}

function salvarDados2() {
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let cpf = document.getElementById('cpf').value; // documentos
    let celular = document.getElementById('contato').value;
    resultado.innerHTML = '';
    resultado.innerHTML += `<strong>Dados do canditado:</strong> <br> Nome: ${nome}<br>E-mail: ${email}<br>CPF: ${cpf}<br>Celular: ${celular} <br> Curso: <strong>Operador de Telemarketing</strong>`;
    
}
