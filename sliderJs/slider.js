'use strict'


const imagens = [
    {id: '1', url: './img/angular.png' },
    {id: '2', url: './img/vue.png' },
    {id: '3', url: './img/react.png' }
]





const sliderItemContainer = document.querySelector('.slider-item-container');
let sliderALLItem = document.querySelectorAll('.slider-item');



// fuction do tipo aron
const proximoSlider = () =>{

const primeroitem = sliderALLItem[0];
sliderItemContainer.appendChild(primeroitem);
sliderALLItem = document.querySelectorAll('.slider-item');


}




const anteriorSlider = () =>{

    const ultimoItem = sliderALLItem[sliderALLItem.length-1]
    sliderItemContainer.prepend(ultimoItem);
    sliderALLItem = document.querySelectorAll('.slider-item');

}





document.getElementById('next').addEventListener('click', proximoSlider);
document.getElementById('back').addEventListener('click', anteriorSlider);






setInterval(() => {
    anteriorSlider();
}, 2500)