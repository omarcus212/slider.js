'use strict'


const imagens = [
    {id: '1', url: './img/angular.png' },
    {id: '2', url: './img/vue.jpg' },
    {id: '3', url: './img/react.png' },
    {id: '6', url: 'https://1.bp.blogspot.com/--WXuB2bHWBA/XyLeC0fBUWI/AAAAAAAAHmo/HEIZfG6QmCAVx_aGdzDWfd3P22kNaD1ngCLcBGAsYHQ/d/DESKTOP-WALLPAPER-SAMURAI-RED.png'},
    {id: '6', url: 'https://p4.wallpaperbetter.com/wallpaper/65/636/1016/digital-art-2560x1440-samurai-wallpaper-preview.jpg'}
]




// criacao do button ded proximo(Next);
const creatNextbtn = () =>{

  const nextBtn = document.createElement('span');
  nextBtn.classList.add('slider-button');
  nextBtn.id = 'next';
  nextBtn.innerHTML = '&rsaquo;';

  return nextBtn;

}


// criacao do button ded anterior(Back);
const creatBackbtn = () =>{

    const backBtn = document.createElement('span');
    backBtn.classList.add('slider-button');
    backBtn.id = 'back';
    backBtn.innerHTML = ` &lsaquo;  `;
  
    return backBtn;
  
  }
  

// criacao do container com as div de imagens;
  const criarslideItem = () =>{

    
    const sliderContainer = document.createElement('div');
    sliderContainer.classList.add('slider-item-container');

    const slides = imagens.map(item => `
    <div class="slider-item">
    <img src="${item.url}" alt="">
           </div>
    `)

    sliderContainer.innerHTML = slides.join("");

    return sliderContainer;

  }


// criacao do slide
  const criarSlide = () =>{
       
  const slide = document.querySelector('.slide');

  slide.appendChild(creatBackbtn());
  slide.appendChild(criarslideItem());
  slide.appendChild(creatNextbtn());

  }

  criarSlide(imagens);



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
    proximoSlider();
}, 5000)