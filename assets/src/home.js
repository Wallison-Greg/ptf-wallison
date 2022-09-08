/*animatio menu */

const menu = document.querySelectorAll('.menu a');

menu.forEach((item) => {
    item.addEventListener('click', scrollClick);
});

function scrollClick(event){
    event.preventDefault();

    const elemento = event.target;
    const id = elemento.getAttribute('href');
    const section = document.querySelector(id).offsetTop;

    window.scroll({
        top: section,
        behavior: 'smooth'
    });
}

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

/*menu / botão */

window.onload = () => {
    document.querySelector(".btn").addEventListener("click", () =>{
        if(document.querySelector(".ocut").style.display === 'flex'){
            document.querySelector(".ocut").style.display = 'none'
        }
        else{
            document.querySelector(".ocut").style.display = 'flex'
        }
    })
}

/*animação galaxy */

function stars (){
    let count = 50;
    let area = document.querySelector('#area');
    let i = 0;

    while(i < count){
        let star = document.createElement('i');
        let x = Math.floor(Math.random() * window.innerWidth);
        let duration = Math.random() * 1;
        let h = Math.random() * 100;

        star.style.left = x + 'px';
        star.style.width = 1 + 'px';
        star.style.height = h + 'px';
        star.style.animationDuration = duration + 's';

        area.appendChild(star);
        i++
    }
}
stars();