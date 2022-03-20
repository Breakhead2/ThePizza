let btn_menu = document.querySelector('#menuBars');
let menu = document.querySelector('.navbar');

btn_menu.addEventListener('click',()=>{
    menu.classList.toggle('active');
    btn_menu.classList.toggle('fa-times');
})

window.onscroll = ()=>{
        menu.classList.remove('active');
        btn_menu.classList.remove('fa-times');
      
        if(window.scrollY > 1400){
            document.querySelector('#scrollTop').classList.add('active');
        }else{
            document.querySelector('#scrollTop').classList.remove('active');
        }
}

let btn = document.querySelector('#btn');
let container = document.querySelector('.image');
let images = container.querySelectorAll('.pizza');
let i = 0;
let orders = [];


function loader(){
    document.querySelector('.loader').classList.add('fade-out');
}

function fadeOut(){
    setInterval(loader, 3000)
}

window.onload = ()=>{
    setInterval(() => {
        images.forEach(element => {
            element.classList.remove('visible');
        });
        images[i].classList.add('visible');
        ( i===7 ) ? i = 0 : i++; 
    }, 800);
    setInterval(loader, 2000);
}

let add_btns = document.querySelectorAll('#add');
let food_name = document.querySelector('#foods');
food_name.value = orders;

for (let button of add_btns){
    button.addEventListener('click', (event) =>{
        event.preventDefault();
        let name = event.target.getAttribute('item-data');
        orders.push(name);
    })
}