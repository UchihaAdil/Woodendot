// var slides = document.querySelectorAll('#slides .slide');
// var currentSlide = 0;
// var slideInterval = setInterval(nextSlide,2000);

// function nextSlide() {
//     slides[currentSlide].className = 'slide';
//     currentSlide = (currentSlide+1)%slides.length;
//     slides[currentSlide].className = 'slide showing';
// }


let span = document.getElementsByTagName('span');
let slideImg = document.getElementsByClassName('piece__img');

let l = 0;

span[1].onclick = () =>{
    l++;
    for(let i of slideImg){
        if (l == 0) i.style.left = "0px";
        if (l == 1) i.style.left = "-401px";
        
        if (l == 2) i.style.left = "-802px";    
        
        if(l > 2) l = 2;
    }
}


span[0].onclick = () =>{
    l--;
    for(let i of slideImg){
        if (l == 0) i.style.left = "0px";
        if (l == 1) i.style.left = "-401px";
        
        
        
        if(l < 0) l = 0;
    }
}


