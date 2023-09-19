let img1 = document.querySelector('.img-1');
let img2 = document.querySelector('.img-2');
let img2bis = document.querySelector('.img-2-bis');
let img3 = document.querySelector('.img-3');
let img3bis = document.querySelector('.img-3-bis');
let img4 = document.querySelector('.img-4');
let img4bis = document.querySelector('.img-4-bis');
let img5 = document.querySelector('.img-5');
let img5bis = document.querySelector('.img-5-bis');
let img6 = document.querySelector('.img-6');
let img6bis = document.querySelector('.img-6-bis');
let img7 = document.querySelector('.img-7');
let img7bis = document.querySelector('.img-7-bis');
// selectors buttons
let btn1 = document.querySelector('.caption-btn-1');
let btn2 = document.querySelector('.caption-btn-2');
let btn3 = document.querySelector('.caption-btn-3');
let btn4 = document.querySelector('.caption-btn-4');
let btn5 = document.querySelector('.caption-btn-5');
let btn6 = document.querySelector('.caption-btn-6');
let btn7 = document.querySelector('.caption-btn-7');



btn1.addEventListener('click', () => {
  img1.src = 'images/portrait/portrait-1.jpg';
  img2.src = 'images/portrait/portrait-2.jpg';
  img2bis.src = 'images/portrait/portrait-3.jpg';
  img3.src = 'images/portrait/portrait-3.jpg';
  img3bis.src = 'images/portrait/portrait-4.jpg';
  img4.src = 'images/portrait/portrait-4.jpg';
  img5.src = 'images/portrait/portrait-5.jpg';
  img5bis.src ='images/portrait/portrait-5.jpg';
  img6.src = 'images/portrait/portrait-6.jpg';
  img6bis.src = 'images/portrait/portrait-6.jpg';
  img7.src = 'images/portrait/portrait-7.jpg';
  img7bis = 'images/portrait/portrait-7.jpg';
  document.querySelector('.citation').innerHTML= ' " La photographie est un instant qui ne se réfléchit pas, suspendue à une fraction de seconde qui laisse à réfléchir. " '
  document.querySelector('.author-citation').innerHTML= 'Guillaume de Maupassant'
  // restart animation on each button clicked
  tween1.restart();
  tween2.restart();
  tween3.restart();
  tween4.restart();
  tween5.restart();
  tween6.restart();
  tween7.restart(); 
  tween2bis.restart();
  tween3bis.restart();
  tween5bis.restart();
  tween6bis.restart(); 
});

btn2.addEventListener('click', ()=> {
  img1.src = 'images/mariage/wedding-1.jpg';
  img2.src = 'images/mariage/wedding-2.jpg';
  img2bis.src = 'images/mariage/wedding-3.jpg';
  img3.src = 'images/mariage/wedding-3.jpg';
  img3bis.src = 'images/mariage/wedding-2.jpg';
  img4.src = 'images/mariage/wedding-4.jpg';
  img4bis.src = 'images/mariage/wedding-7.jpg';
  img5.src = 'images/mariage/wedding-5.jpg';
  img5bis.src = 'images/mariage/wedding-5.jpg';
  img6.src = 'images/mariage/wedding-6.jpg';
  img6bis.src = 'images/mariage/wedding-6.jpg';
  img7.src = 'images/mariage/wedding-7.jpg';
  img7bis.src ='images/mariage/wedding-4.jpg';
  document.querySelector('.citation').innerHTML= ' " Il ne s\'agit pas de transmettre une vision, mais de toucher les gens à travers une image. "'
  document.querySelector('.author-citation').innerHTML= 'Ansel Adams'
  // restart animation on each button clicked
  tween1.restart();
  tween2.restart();
  tween3.restart();
  tween4.restart();
  tween5.restart();
  tween6.restart();
  tween7.restart(); 
  tween2bis.restart();
  tween3bis.restart();
  tween5bis.restart();
  tween6bis.restart(); 
});


btn3.addEventListener('click', () => {
  img1.src = 'images/bebe/baby-1.jpg';
  img2.src = 'images/bebe/baby-2.jpg';
  img2bis.src = 'images/bebe/baby-2.jpg';
  img3.src = 'images/bebe/baby-3.jpg';
  img3bis.src = 'images/bebe/baby-3.jpg';
  img4.src = 'images/bebe/baby-4.jpg';
  img4bis.src = 'images/bebe/baby-7.jpg';
  img5.src = 'images/bebe/baby-5.jpg';
  img5bis.src = 'images/bebe/baby-5.jpg';
  img6.src = 'images/bebe/baby-6.jpg';
  img6bis.src = 'images/bebe/baby-6.jpg';
  img7.src = 'images/bebe/baby-7.jpg';
  img7bis.src = 'images/bebe/baby-4.jpg';
  document.querySelector('.citation').innerHTML= ' " Ce que la photgraphie reproduit à l\'infini n\'a lieu qu\'une fois. "'
  document.querySelector('.author-citation').innerHTML= 'Roland Barthes'
  // restart animation on each button clicked
  tween1.restart();
  tween2.restart();
  tween3.restart();
  tween4.restart();
  tween5.restart();
  tween6.restart();
  tween7.restart(); 
  tween2bis.restart();
  tween3bis.restart();
  tween5bis.restart();
  tween6bis.restart(); 
});

btn4.addEventListener('click', ()=> {
  img1.src = 'images/couple/couple-1.jpg';
  img2.src = 'images/couple/couple-2.jpg';
  img2bis.src ='images/couple/couple-2.jpg';
  img3.src = 'images/couple/couple-3.jpg';
  img3bis.src ='images/couple/couple-3.jpg';
  img4.src = 'images/couple/couple-4.jpg';
  img4bis.src = 'images/couple/couple-7.jpg';
  img5.src = 'images/couple/couple-5.jpg';
  img5bis.src = 'images/couple/couple-5.jpg';
  img6.src = 'images/couple/couple-6.jpg';
  img6bis.src ='images/couple/couple-7.jpg';
  img7.src = 'images/couple/couple-7.jpg';
  img7bis.src = 'images/couple/couple-4.jpg';
  document.querySelector('.citation').innerHTML= ' " La photographie, c\'est l\'art de saisir l\'âme d\'un instant. "'
  document.querySelector('.author-citation').innerHTML= 'Margaret  Bourke - White'
  // restart animation on each button clicked
  tween1.restart();
  tween2.restart();
  tween3.restart();
  tween4.restart();
  tween5.restart();
  tween6.restart();
  tween7.restart(); 
  tween2bis.restart();
  tween3bis.restart();
  tween5bis.restart();
  tween6bis.restart(); 
});

btn5.addEventListener('click', ()=> {
  img1.src = 'images/grossesse/pregnant-1.jpg';
  img1.alt = 'portrait mariage';
  img2.src = 'images/grossesse/pregnant-2.jpg';
  img2bis.src ='images/grossesse/pregnant-2.jpg';
  img3.src = 'images/grossesse/pregnant-3.jpg';
  img3bis.src = 'images/grossesse/pregnant-3.jpg';
  img4.src = 'images/grossesse/pregnant-4.jpg';
  img4bis.src = 'images/grossesse/pregnant-7.jpg';
  img5.src = 'images/grossesse/pregnant-5.jpg';
  img5bis.src ='images/grossesse/pregnant-5.jpg';
  img6.src = 'images/grossesse/pregnant-6.jpg';
  img6bis.src ='images/grossesse/pregnant-7.jpg';
  img7.src = 'images/grossesse/pregnant-7.jpg';
  img7bis.src = 'images/grossesse/pregnant-4.jpg';
  document.querySelector('.citation').innerHTML= ' " Être enceinte, c\'est vivre à deux dans un même corps, au même rythme. "'
  document.querySelector('.author-citation').innerHTML= 'James Matthew Barrie'
  // restart animation on each button clicked
  tween1.restart();
  tween2.restart();
  tween3.restart();
  tween4.restart();
  tween5.restart();
  tween6.restart();
  tween7.restart();
  tween2bis.restart();
  tween3bis.restart();
  tween5bis.restart();
  tween6bis.restart();
});



btn6.addEventListener('click', ()=> {
  img1.src = 'images/famille/famille-1.jpg';
  img2.src = 'images/famille/famille-2.jpg';
  img2bis.src ='images/famille/famille-2.jpg';
  img3.src = 'images/famille/famille-3.jpg';
  img3bis.src = 'images/famille/famille-3.jpg';
  img4.src = 'images/famille/famille-4.jpg';
  img4bis.src ='images/famille/famille-7.jpg';
  img5.src = 'images/famille/famille-5.jpg';
  img5bis.src ='images/famille/famille-5.jpg';
  img6.src = 'images/famille/famille-6.jpg';
  img6bis.src ='images/famille/famille-7.jpg';
  img7.src = 'images/famille/famille-7.jpg';
  img7bis.src = 'images/famille/famille-4.jpg';
  document.querySelector('.citation').innerHTML= ' " Les photographies sont les trésors de nos familles. "'
  document.querySelector('.author-citation').innerHTML= 'Thibault Chappe'
  // restart animation on each button clicked
  tween1.restart();
  tween2.restart();
  tween3.restart();
  tween4.restart();
  tween5.restart();
  tween6.restart();
  tween7.restart();
  tween2bis.restart();
  tween3bis.restart();
  tween5bis.restart();
  tween6bis.restart();
});


btn7.addEventListener('click', ()=> {
  img1.src = 'images/bapteme/bapteme1.jpg';
  img2.src = 'images/bapteme/bapteme2.jpg';
  img2bis.src = 'images/bapteme/bapteme3.jpg';
  img3.src = 'images/bapteme/bapteme4.jpg';
  img3bis.src = 'images/bapteme/bapteme4.jpg';
  img4.src = 'images/bapteme/bapteme3.jpg';
  img4bis.src = 'images/bapteme/bapteme8.jpg';
  img5.src = 'images/bapteme/bapteme6.jpg';
  img5bis.src ='images/bapteme/bapteme6.jpg';
  img6.src = 'images/bapteme/bapteme7.jpg';
  img6bis.src =
  img7.src = 'images/bapteme/bapteme8.jpg';
  img7bis.src = 'images/bapteme/bapteme3.jpg';
  document.querySelector('.citation').innerHTML= ' " Les photographies sont les trésors de nos familles. "'
  document.querySelector('.author-citation').innerHTML= 'Thibault Chappe'
  // restart animation on each button clicked
  tween1.restart();
  tween2.restart();
  tween3.restart();
  tween4.restart();
  tween5.restart();
  tween6.restart();
  tween7.restart();
  tween2bis.restart();
  tween3bis.restart();
  tween5bis.restart();
  tween6bis.restart();
});




// animation 1 -  slide in images

const tween1 = gsap.from(".img-1", {x : -1500, duration: 6.5,}); 
const tween2 = gsap.from(".img-2", {x : 1500,duration: 9,});  
const tween3 = gsap.from(".img-3", {x : -1500,duration: 10,}); 
const tween4 = gsap.from(".img-4", {x : 1500,duration: 11,}); 
const tween5 = gsap.from(".img-5", {x : -1500,duration: 9,});  
const tween6 = gsap.from(".img-6", {y : 1500, duration: 11,}); 
const tween7 = gsap.from(".img-7", {x : 1500,duration: 8,}); 
const tween8 = gsap.from(".img-4-bis", {x : 1500,duration: 10,});  
const tween9 = gsap.from(".img-7-bis", {y : 1500,duration: 10,}); 
const tween2bis = gsap.from(".img-2-bis", {x : -1500,duration: 5.5,}); 
const tween3bis = gsap.from(".img-3-bis", {x : 1500,duration: 5.5,}); 
const tween5bis = gsap.from(".img-5-bis", {x : -1500,duration: 7,}); 
const tween6bis = gsap.from(".img-6-bis", {x : 1500,duration: 7,}); 


// animation 2 -  reveal + hide quote 


const tl = gsap.timeline({paused: true});

tl.from(".quote", {opacity:0,duration: 6,});
tl.to(".quote", {opacity:1,duration: 3, delay:12}); 

function animateAtScrollPos() {
  if(scrollY > 100) {
    tl.play();
    document.removeEventListener("scroll", animateAtScrollPos);
  }
}
document.addEventListener("scroll", animateAtScrollPos);




// ANIMATION FOOTER   - SLIDE DOWN TO UP 

gsap.registerPlugin(ScrollTrigger); 

gsap.from(".footer-card-left",{
  y:100,
  opacity:0,  
  duration:3.5, 
  scale:0.5,
  delay:5,
  scrollTrigger: ".footer-trigger"
})

gsap.from(".footer-card-center",{
  y:100,
  opacity:0,  
  duration:3.5, 
  scale:0.5,
  delay:5.5,
  scrollTrigger: ".footer-trigger"
})

gsap.from(".footer-card-right",{
  y:100,
  opacity:0,  
  duration:3.5, 
  scale:0.5,
  delay:6,
  scrollTrigger: ".footer-trigger"
})

gsap.from(".ButtonUp",{
  y:100,
  opacity:0,  
  duration:3.5, 
  scale:0.5,
  delay:6,
  scrollTrigger: ".animation-trigger-slide-in"
})