function salvarDados1() {
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let cpf = document.getElementById('cpf').value; // documentos
    let celular = document.getElementById('contato').value;
    // Restrição de campos obrigatórios 
        if (nome.length <= 10) {
            alert('Favor preencher com o Nome Completo.')
        } else if (email.length <= 7){
            alert('Favor preencher o E-mail corretamente.')
        } else if (cpf.length <= 6) {
            alert('Favor preencher o Cpf corretamente.')            
        } else if(celular.length <= 7){
            alert('Favor preencher o Contato corretamente.')
        } else {
            resultado.innerHTML = '';
            resultado.innerHTML += `<strong>Dados do canditado:</strong> <br> Nome: ${nome}<br>E-mail: ${email}<br>CPF: ${cpf}<br>Celular: ${celular} <br> Curso: <strong>Aperfeiçoamento em Panificação</strong>`;
        }
    }

    function salvarDados2() {
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let cpf = document.getElementById('cpf').value; // documentos
    let celular = document.getElementById('contato').value;
    // Restrição de campos obrigatórios 
        if (nome.length <= 10) {
            alert('Favor preencher com o Nome Completo.')
        } else if (email.length <= 7){
            alert('Favor preencher o E-mail corretamente.')
        } else if (cpf.length <= 6) {
            alert('Favor preencher o Cpf corretamente.')            
        } else if(celular.length <= 7){
            alert('Favor preencher o Contato corretamente.')
        } else {
            resultado.innerHTML = '';
            resultado.innerHTML += `<strong>Dados do canditado:</strong> <br> Nome: ${nome}<br>E-mail: ${email}<br>CPF: ${cpf}<br>Celular: ${celular} <br> Curso: <strong>Operador de Telemarketing</strong>`;
    }
}

