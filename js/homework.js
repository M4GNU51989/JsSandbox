const myButton = document.querySelector('button');
const image = document.querySelector('img');
const images = ["images/Pic 1.jpg", "images/Pic 2.jpg", "images/Pic 3.jpg", "images/Pic 4.jpg"];

myButton.addEventListener('click', changeImage);

function changeImage(){
let randomIndex = Math.floor(Math.random() * images.length);
image.src = images[randomIndex];
}