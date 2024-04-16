loginBtn.addEventListener('click', validateUser) // Adiciona evento de click ao botão

// Valida os Campos de Entrada
function validateUser(){
    if(user.value !=='' && password.value !== ''){
        alert(`Seja bem vindo, ${user.value}`) // Exibe o nome do usuário e dá boas vindas
    } else{
        alert('Verifique os campos de entrada') // Avisa para verificar os campos de entrada
    }
}