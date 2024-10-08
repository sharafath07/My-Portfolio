let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let portfolio = document.querySelector('#portfolio')

next.addEventListener('click', function(){
  let items = document.querySelectorAll('.item')
  document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
  let items = document.querySelectorAll('.item')
  document.querySelector('.slide').prepend(items[items.length - 1])
})

document.addEventListener('keydown', function(event){
  if(event.key === "ArrowRight"){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
  } else if(event.key === "ArrowLeft"){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1])
  }
})

window.addEventListener("load", function () {
    const loadingScreen = document.querySelector(".loader");
    const mainContent = document.querySelector(".main-content");
  
    loadingScreen.style.display = "none";
    mainContent.style.display = "block";
  });
  
  function scrollToSection(id) {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
    console.log(document.getElementById('check').value);    
  }

  document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for reaching out! We will get back to you shortly.');

    document.getElementById('name').value = ''
    document.getElementById('email').value = ''
    document.getElementById('subject').value = ''
    document.getElementById('message').value = ''

  });
  