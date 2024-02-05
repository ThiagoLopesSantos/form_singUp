const form = document.getElementById('form-cadastro');

//adicionando uma ação para quando clicar no botão de cadastro
form.addEventListener('submit', function(e){
    e.preventDefault();
    calcularIdade(); 
});


//Seleciona os ids para manipulação
const alerta = document.getElementById('msg-alert');
const alert2 = document.getElementById('alert2');
const sucesso = document.getElementById('msg-sucesso');


//função que calcula e valida as idades
function calcularIdade() {
    // Obter os valores dos campos de ano de nascimento
    var anoNascimento1 = parseInt(document.getElementById('age1').value);
    var anoNascimento2 = parseInt(document.getElementById('age2').value);

    // Obter o ano atual
    var anoAtual = new Date().getFullYear();

    // Calcular as idades
    var age1 = anoAtual - anoNascimento1;
    var age2 = anoAtual - anoNascimento2;

    //Resgata os nomes digitados
    const user1 = document.getElementById('name1').value;
    const user2 = document.getElementById('name2').value;
    
    //VALIDAÇÃO DAS IDADES
    if (age1 >= 18) {
        // Exibir o resultado de sucesso caso usuario seja maior de 18
        console.log(`A idade do usuário ${user1} é ${age1} anos cadastro realizado!`);
        sucesso.style.display = "block";
        alerta.style.display = "none";
        alert2.style.display = "none";
        sucesso.innerHTML = "Cadastro Concluido com Sucesso!";
        limparFormulario();
    }else if (age2 < 18){
        //Exibe um alerta caso o acompanhante seja de menor idade
        console.log(`A idade do usuário ${user2} é ${age2} anos, o acompanhante deve ter a partir de 18 anos`);
        alert2.style.display = "block";
        sucesso.style.display = "none";
    }else {
        if (age1 < 18 && age2 >= 18){
            // Exibir o resultado de sucesso caso o acompanhante seja mais velho que o usuario
            console.log(`A idade do usuário ${user1} é ${age1} anos e A idade do usuário ${user2} é ${age2} anos. Cadastro realizdo com sucesso!`);
            sucesso.style.display = "block";
            sucesso.innerHTML = "Cadastro Concluido com Sucesso!";
            alerta.style.display = "none";
            alert2.style.display = "none";
            limparFormulario();
        }else{
            // Seleciona os elementos pelos IDs e adiciona o atributo required
            document.getElementById('name2').setAttribute('required', true);
            document.getElementById('email2').setAttribute('required', true);
            document.getElementById('age2').setAttribute('required', true);

            // Exibir o bloco extra de cadastro do formulário para o caso do usuario ser menor de idade
            console.log(`A idade do usuário ${user1} é ${age1} anos, é necessário cadastrar um acompanhante!`);
            sucesso.style.display = "none";
            alerta.style.display = "block";
            alert2.style.display = "none";            
        }
    }
    
}; 

function limparFormulario() {
    //selecionando todos os inputs do formulário
    const inputs = form.querySelectorAll('input');

    //limpa o valor de cada input
    inputs.forEach(input => {
        input.value = '';
    });
}
