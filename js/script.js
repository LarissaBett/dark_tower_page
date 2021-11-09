document.getElementById("botaoenviar").addEventListener ("click", ValidaFormulario)

function ValidaFormulario(){

  if(document.getElementById("nome").value != "" &&
     document.getElementById("email").value != "" &&
     document.getElementById("mensagem").value != "" ){

    alert("Prontinho! Sua mensagem foi enviada.")
  }else{
    alert("Por favor, preencha todos os campos.")
  }
}




