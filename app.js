const burgerButtonElement = document.getElementById('burgerEmoji');
const navigationElement = document.getElementById('navigationContainer');
const closeButtonElement = document.getElementById('closeButton');



function openNavigation(){
navigationElement.style.display = 'block';


};

function closeNavigation(){
navigationElement.style.display = "none";
}





burgerButtonElement.addEventListener('click', openNavigation);
closeButtonElement.addEventListener('click', closeNavigation)