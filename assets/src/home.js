/*animação de digitação*/

const digitacao = (text, cont) => {

    const nome  = document.querySelector('#name');

    if( cont < text.length){
        setTimeout(()=>{
            nome.textContent += text.charAt(cont);
            cont ++;

            digitacao(text, cont);
        },80)
    }
}

digitacao('wallison gregorio', 0);

/*animação banner imagem */

let img = document.getElementById('foto');

let cordenadas = img.getBoundingClientRect(); //verificando a posição do elemento