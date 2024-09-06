document.addEventListener("DOMContentLoaded", function() {
    // Scroll Suave ao clicar em links do menu
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Efeito de destaque ao passar o mouse nos botões
    const learnMoreBtn = document.getElementById("learn-more");
    learnMoreBtn.addEventListener('mouseover', function() {
        this.style.transform = "scale(1.1)";
    });

    learnMoreBtn.addEventListener('mouseout', function() {
        this.style.transform = "scale(1)";
    });

    // Validação Simples do Formulário de Contato
    const contactForm = document.getElementById("contact-form");
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (name === "" || email === "" || message === "") {
            alert("Por favor, preencha todos os campos.");
        } else {
            alert(`Obrigado por entrar em contato, ${name}!`);
            contactForm.reset();
        }
    });
});
