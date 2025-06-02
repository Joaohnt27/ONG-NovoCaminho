// Função para o botão de copiar a chave pix
function copyChavePix() {
  const chavePix = document.querySelector(".chave-pix span");
  navigator.clipboard.writeText(chavePix.textContent).then(() => {
    alert("Chave PIX copiada com sucesso!");
  });
}

// Para página de adoção
const btnCaes = document.getElementById("btn-caes");
const btnGatos = document.getElementById("btn-gatos");
const animais = document.querySelectorAll(".animal");

btnCaes.addEventListener("click", () => {
  animais.forEach((animal) => {
    if (animal.classList.contains("cao")) {
      animal.style.display = "block";
    } else {
      animal.style.display = "none";
    }
  });
  btnCaes.classList.add("ativo");
  btnGatos.classList.remove("ativo");
});

btnGatos.addEventListener("click", () => {
  animais.forEach((animal) => {
    if (animal.classList.contains("gato")) {
      animal.style.display = "block";
    } else {
      animal.style.display = "none";
    }
  });
  btnGatos.classList.add("ativo");
  btnCaes.classList.remove("ativo");
});

// Exibir cães por padrão
window.addEventListener("load", () => {
  btnCaes.click();
});

// Variáveis globais para menu e navegação
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('nav ul li a');
let header = document.querySelector('header');
let footer = document.querySelector('footer');

// Toggle menu mobile
menuIcon.onclick = () => {
  menuIcon.classList.toggle('fa-times');
  navbar.classList.toggle('active');
};

// Scroll para ativar links do menu e outras ações
window.addEventListener('scroll', () => {
  let scrollY = window.scrollY;

  sections.forEach(sec => {
    let sectionTop = sec.offsetTop - 150;
    let sectionHeight = sec.offsetHeight;
    let sectionId = sec.getAttribute('id');

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        let matched = document.querySelector(`nav ul li a[href="#${sectionId}"]`);
        if (matched) matched.classList.add('active');
      });
    }
  });

  // Fixar header
  header.classList.toggle('sticky', scrollY > 100);

  // Esconder menu mobile ao scrollar
  menuIcon.classList.remove('fa-times');
  navbar.classList.remove('active');

  // Animação footer
  footer.classList.toggle('show-animate', window.innerHeight + scrollY >= document.body.scrollHeight);
});

// Função para ampliar imagem na aba adoção (Lightbox)
function abrirLightbox(el) {
  const card = el.closest('.card');
  const img = card.querySelector('img');
  const titulo = card.querySelector('h2')?.innerText || "";

  const lightbox = document.getElementById('lightbox');
  document.getElementById('lightbox-img').src = img.src;
  document.getElementById('lightbox-caption').innerText = titulo;
  lightbox.style.display = 'flex';

  document.body.style.overflow = 'hidden'; // bloqueia scroll fundo
}

function fecharLightbox(event) {
  if (event.target.id === 'lightbox') {
    document.getElementById('lightbox').style.display = 'none';
    document.body.style.overflow = ''; // libera scroll fundo
  }
}
