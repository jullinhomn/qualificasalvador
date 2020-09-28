// Desenvolvido por @jullinhomn


//Função para reiniciar a página
function proximo() {
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let cpf = document.getElementById('cpf').value; // documentos
    let celular = document.getElementById('contato').value;
    if (nome.length != 0 || email.length != 0 || cpf.length != 0 || celular.length != 0) {
        var conf = confirm('Tem certeza que deseja ir para o próxmimo canditado ?')
    } if (conf == true) {
        location.reload();
    }
}
// Função para salvar o Curso número 1
function salvarDados1() {
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let cpf = document.getElementById('cpf').value; // documentos
    let celular = document.getElementById('contato').value;
    // Restrição de campos obrigatórios 
    if (nome.length <= 10) {
        alert('Favor preencher o campo "Nome" completo.');
    } else if (email.length <= 7) {
        alert('Favor preencher o campo "E-mail" corretamente.')
    } else if (cpf.length <= 6) {
        alert('Favor preencher o campo "CPF" corretamente.')
    } else if (celular.length <= 7) {
        alert('Favor preencher o campo "Contato" corretamente.')
    } else {
        resultado.innerHTML = '';
        resultado.innerHTML += `<strong>Dados do canditado:</strong> <br> Nome: ${nome}<br>E-mail: ${email}<br>CPF: ${cpf}<br>Celular: ${celular} <br> Curso: <strong>Aperfeiçoamento em Panificação</strong>`;
    }
}
// Função para salvar o Curso número 2
function salvarDados2() {
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let cpf = document.getElementById('cpf').value; // documentos
    let celular = document.getElementById('contato').value;
    // Restrição de campos obrigatórios 
    if (nome.length <= 10) {
        alert('Favor preencher o campo "Nome" completo.');
    } else if (email.length <= 7) {
        alert('Favor preencher o campo "E-mail" corretamente.')
    } else if (cpf.length <= 6) {
        alert('Favor preencher o campo "CPF" corretamente.')
    } else if (celular.length <= 7) {
        alert('Favor preencher o campo "Contato" corretamente.')
    } else {
        resultado.innerHTML = '';
        resultado.innerHTML += `<strong>Dados do canditado:</strong> <br> Nome: ${nome}<br>E-mail: ${email}<br>CPF: ${cpf}<br>Celular: ${celular} <br> Curso: <strong>Operador de Telemarketing</strong>`;
    }
}
// Para dar foco no " Nome "
var inputfoco = document.getElementById('nome');
inputfoco.focus();




