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




document.addEventListener("DOMContentLoaded", function() {
  const texts = document.querySelectorAll('.left ');
  
  texts.forEach(text => {
      const textContent = text.textContent;
      let index = 0;

      function typeWriter() {
          if (index < textContent.length) {
              text.textContent = textContent.substring(0, index + 1);
              index++;
              setTimeout(typeWriter, 150); // Ajuste o tempo para a velocidade desejada
          } else {
              setTimeout(() => {
                  index = 0;
                  text.textContent = "";
                  typeWriter();
              }, 2000); // Pausa antes de reiniciar o efeito
          }
      }

      typeWriter();
  });
});



/* habilidades  */

document.querySelectorAll('.projeto__imagem').forEach(imagem => {
  imagem.addEventListener('click', () => {
    const card = imagem.closest('.projeto__content');
    const texto = card.querySelector('.projeto__texto');
    const botoes = card.querySelector('.projeto__botoes');

    imagem.style.display = 'none';
    texto.style.display = 'block';
    botoes.style.display = 'block';
  });
});

/*  formulario  */

document.addEventListener('DOMContentLoaded', function() {
  var button = document.querySelector('.ui-btn');

  if (button) {
    button.addEventListener('click', function() {
      window.location.href = 'https://github.com/Lucasbarbosa332';
    });
  }
});





