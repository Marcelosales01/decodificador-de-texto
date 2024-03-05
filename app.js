const TextArea = document.querySelector('.text_area');
const mensagem = document.querySelector('.mensagem');

function BotaoCriptografar(){
    const texto_criptografado = criptografar(TextArea.value);
    mensagem.value = texto_criptografado;
    TextArea.value = "";
    const boneco_lupa = document.querySelectorAll('/assets/High\ quality\ products\ 1\ 1.svg');
    boneco_lupa.parentNode.removeChild(boneco_lupa);
    
    
}

function criptografar(StringCriptografada){
    let MatrizCodigo = [["e" , "enter"], ["i" , "imes"], ["a" , "ai"], ["o" , "ober"], ["u" , "ufat"]];
    StringCriptografada = StringCriptografada.toLowerCase();

    for(let i = 0; i < MatrizCodigo.length; i++){
        if(StringCriptografada.includes(MatrizCodigo[i][0])){
            StringCriptografada = StringCriptografada.replaceAll(MatrizCodigo[i][0], MatrizCodigo[i][1]);
        }

    }
    return StringCriptografada;
}

function BotaoDescriptografar(){
    const texto_descriptografado = descriptografar(TextArea.value);
    mensagem.value = texto_descriptografado;
    TextArea.value = "";
}

function descriptografar(StringDescriptografada){
    let MatrizCodigo = [["e" , "enter"], ["i" , "imes"], ["a" , "ai"], ["o" , "ober"], ["u" , "ufat"]];
    StringDescriptografada = StringDescriptografada.toLowerCase();

    for(let i = 0; i < MatrizCodigo.length; i++){
        if(StringDescriptografada.includes(MatrizCodigo[i][1])){
            StringDescriptografada = StringDescriptografada.replaceAll(MatrizCodigo[i][1], MatrizCodigo[i][0]);
        }

    }
    return StringDescriptografada;
}

function BotaoCopiar() {
    mensagem.select();
    mensagem.setSelectionRange(0, 99999);
  
    navigator.clipboard.writeText(mensagem.value)
      .then(function() {
        console.log('Texto copiado para a área de transferência!');
      })
      .catch(function(error) {
        console.error('Ocorreu um erro ao copiar o texto: ', error);
      });
  }
