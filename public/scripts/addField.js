//procurar pelo botao
document.querySelector("#add-time")
//quando ele for clicado
.addEventListener('click',  cloneField)
//execute a função
function cloneField(){
    //duplicar os campos
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
    //limpar os campos
    const fields = newFieldContainer.querySelectorAll('input')

    fields.forEach(function(field) {
        field.value = ""
    });
    
    //colocar na pág
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
