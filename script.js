let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let portfolio = document.querySelector('#portfolio');

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
    const loadingScreen = document.querySelector(".load");
    const mainContent = document.querySelector(".main-content");
  
    document.body.classList.remove('no-scroll');
    loadingScreen.style.display = "none";
    mainContent.style.display = "block";
    loadingScreen.style.opacity = 0;
  });
  
  function scrollToSection(id) {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
    console.log(document.getElementById('check').value);    
  }  

function anime() {
  const button = document.querySelector('.msg');

    button.classList.add("anime");

    button.addEventListener("animationend", function() {
        button.classList.remove("anime");
    }, { once: true }); 
}

function sendMail(){

  if (document.getElementById('name').value === '' || document.getElementById('email').value === '' || document.getElementById('subject').value === '' || document.getElementById('message').value === '' ){

    if(document.getElementById('name').value === ''){
      alert('Fill your name...');
    }else if(document.getElementById('email').value === ''){
      alert('Fill your email...');
    }else if(document.getElementById('subject').value === ''){
      alert('Write the subject...');
    }else if(document.getElementById('message').value === ''){
      alert('Write the message...');
    }

  }else{

    let parms = {
      name : document.getElementById('name').value,
      email : document.getElementById('email').value,
      subject : document.getElementById('subject').value,
      message : document.getElementById('message').value
    }

    anime()
  
    emailjs.send("service_0h7lwhh", "template_h7uponr", parms).then(alert('Email sent!!'))
  
      document.getElementById('name').value = ''
      document.getElementById('email').value = ''
      document.getElementById('subject').value = ''
      document.getElementById('message').value = ''
  }
  
}