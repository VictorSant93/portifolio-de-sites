// ==============================
// MENU MOBILE
// ==============================
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('open');
            menuToggle.classList.toggle('active');
        });

        // Fechar menu ao clicar em um link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('open');
                menuToggle.classList.remove('active');
            });
        });
    }

    // ==============================
    // FAQ ACCORDION
    // ==============================
    const faqPerguntas = document.querySelectorAll('.faq-pergunta');
    faqPerguntas.forEach(pergunta => {
        pergunta.addEventListener('click', function() {
            const item = this.parentElement;
            const isActive = item.classList.contains('active');

            // Fecha todas as outras
            document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));

            // Abre a clicada se não estava ativa
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // ==============================
    // MÁSCARA DE TELEFONE
    // ==============================
    const telefoneInput = document.getElementById('telefone');
    if (telefoneInput) {
        telefoneInput.addEventListener('input', function(e) {
            let valor = e.target.value.replace(/\D/g, '');
            if (valor.length > 11) valor = valor.slice(0, 11);

            let formatado = '';
            if (valor.length > 0) {
                if (valor.length <= 2) {
                    formatado = `(${valor}`;
                } else if (valor.length <= 6) {
                    formatado = `(${valor.slice(0,2)}) ${valor.slice(2)}`;
                } else {
                    formatado = `(${valor.slice(0,2)}) ${valor.slice(2,7)}-${valor.slice(7)}`;
                }
            }
            e.target.value = formatado;
        });
    }

    // ==============================
    // SCROLL SUAVE PARA ÂNCORAS
    // ==============================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ==============================
    // FORMULÁRIO DE CONTATO (simulação)
    // ==============================
    const formContato = document.getElementById('formContato');
    if (formContato) {
        formContato.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('📩 Mensagem enviada com sucesso!\nEm breve entraremos em contato.');
            this.reset();
        });
    }
});