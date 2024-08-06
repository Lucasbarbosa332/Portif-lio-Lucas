function updatemenu() {
    if (document.getElementById('responsive-menu').checked == true) {
      document.getElementById('menu').style.borderBottomRightRadius = '0';
      document.getElementById('menu').style.borderBottomLeftRadius = '0';
    }else{
      document.getElementById('menu').style.borderRadius = '22px';
    }
  } 
  function scrollToSection(sectionId) {
    document.querySelector(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}
function scrollToSection(sectionId) {
  document.querySelector(sectionId).scrollIntoView({
      behavior: 'smooth'
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const textElement = document.getElementById('typing-text');
  const textToType = "Welcome to my portfolio.";
  let index = 0;
  let direction = 1;

  function typeWriter() {
      if (direction === 1) {
          if (index < textToType.length) {
              textElement.innerHTML += textToType.charAt(index);
              index++;
              setTimeout(typeWriter, 100);
          } else {
              direction = -1;
              setTimeout(typeWriter, 2000); // Aguarda 2 segundos antes de apagar
          }
      } else {
          if (index > 0) {
              textElement.innerHTML = textElement.innerHTML.slice(0, -1);
              index--;
              setTimeout(typeWriter, 50);
          } else {
              direction = 1;
              setTimeout(typeWriter, 500); // Aguarda meio segundo antes de começar novamente
          }
      }
  }

  typeWriter();
});
  


  

