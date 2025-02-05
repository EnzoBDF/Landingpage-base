document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".carousel-track");
    const prevButton = document.querySelector(".carousel-control.prev");
    const nextButton = document.querySelector(".carousel-control.next");
    const cards = document.querySelectorAll(".card");
    const indicatorsContainer = document.querySelector(".carousel-indicators");

    let currentIndex = 0;
    const totalCards = cards.length;

    // Criação dinâmica dos indicadores
    function createIndicators() {
        indicatorsContainer.innerHTML = ""; // Limpa os indicadores existentes
        for (let i = 0; i < totalCards; i++) {
            const indicator = document.createElement("div");
            indicator.classList.add("indicator");
            if (i === currentIndex) {
                indicator.classList.add("active");
            }
            indicator.addEventListener("click", function () {
                currentIndex = i;
                updateCarousel();
            });
            indicatorsContainer.appendChild(indicator);
        }
    }

    function updateIndicators() {
        const indicators = document.querySelectorAll(".indicator");
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle("active", index === currentIndex);
        });
    }

    function updateCarousel() {
        const cardWidth = document.querySelector(".carousel-container").offsetWidth;
        track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        updateIndicators();
    }

    nextButton.addEventListener("click", function () {
        if (currentIndex < totalCards - 1) {
            currentIndex++;
            updateCarousel();
        }
    });

    prevButton.addEventListener("click", function () {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    window.addEventListener("resize", function () {
        updateCarousel();
    });

    // Inicializar
    createIndicators();
    updateCarousel();
});

document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible"); // Adiciona a classe para animar
                observer.unobserve(entry.target); // Para de observar após a animação
            }
        });
    }, { threshold: 0.2 }); // Ajuste o threshold conforme necessário

    cards.forEach((card) => {
        observer.observe(card); // Observa cada card
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card-vantagens");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible"); // Adiciona a classe para animar
                observer.unobserve(entry.target); // Para de observar após a animação
            }
        });
    }, { threshold: 0.2 }); // Ajusta o threshold conforme necessário

    cards.forEach((card) => {
        observer.observe(card); // Observa cada card
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const pictures = document.querySelectorAll(".people-picture");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("visible");
                }, index * 200); // Atraso de 200ms entre cada elemento
                observer.unobserve(entry.target); // Para de observar após animar
            }
        });
    }, { threshold: 0.1 }); // Gatilho quando 10% do elemento está visível

    pictures.forEach((picture) => {
        observer.observe(picture); // Observa cada card
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const pagamentoSection = document.querySelector(".pagamento");

    const observerOptions = {
        root: null, // Usa o viewport como referência
        rootMargin: "0px",
        threshold: 0.2 // Gatilho quando 20% da seção estiver visível
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                pagamentoSection.classList.add("in-view");
                observer.unobserve(pagamentoSection); // Para observar apenas uma vez
            }
        });
    }, observerOptions);

    observer.observe(pagamentoSection);
});

document.addEventListener("DOMContentLoaded", function () {
    const elementsToAnimate = document.querySelectorAll(".ebook-section img, .ebook-text, .ebook-button");

    // Configurar Intersection Observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate"); // Adiciona a classe de animação
                observer.unobserve(entry.target); // Para de observar após a animação
            }
        });
    });

    // Observar todos os elementos que precisam de animação
    elementsToAnimate.forEach((el) => observer.observe(el));
});

document.addEventListener("DOMContentLoaded", function () {
    const targetCircle = document.querySelector(".people-circle");
    const targetText = document.querySelector(".people-show p");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate");
                    observer.unobserve(entry.target); // Para de observar após a animação
                }
            });
        },
        { threshold: 0.5 } // Gatilho quando 50% do elemento estiver visível
    );

    observer.observe(targetCircle);
    observer.observe(targetText);
});


document.addEventListener("DOMContentLoaded", function () {
    const targetH1 = document.querySelector(".depoimento-text h1");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate");
                    observer.unobserve(entry.target); // Para de observar após a animação
                }
            });
        },
        { threshold: 0.5 } // Gatilho quando 50% do elemento estiver visível
    );

    observer.observe(targetH1);
});


document.addEventListener("DOMContentLoaded", () => {
    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach((question) => {
        question.addEventListener("click", () => {
            const expanded = question.getAttribute("aria-expanded") === "true";
            question.setAttribute("aria-expanded", !expanded);

            const answer = question.nextElementSibling;
            if (!expanded) {
                answer.style.maxHeight = answer.scrollHeight + "px";
            } else {
                answer.style.maxHeight = "0px";
            }
        });
    });
});



document.addEventListener("DOMContentLoaded", () => {
    const faqSection = document.querySelector(".faq-section");
    const faqItems = document.querySelectorAll(".faq-item");
  
    // Função para verificar se o elemento está visível na viewport
    const isInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      return rect.top <= window.innerHeight && rect.bottom >= 0;
    };
  
    // Função para animar a seção FAQ quando entrar na viewport
    const animateFaqSection = () => {
      if (isInViewport(faqSection) && !faqSection.classList.contains("fade-in")) {
        faqSection.classList.add("fade-in"); // Anima a seção principal
        faqItems.forEach((item, index) => {
          setTimeout(() => {
            item.classList.add("fade-in"); // Anima cada item com atraso
          }, index * 400); // Incremento de atraso (150ms por item)
        });
      }
    };
  
    // Chamar animação no carregamento e no scroll
    window.addEventListener("scroll", animateFaqSection);
    animateFaqSection(); // Garante a animação inicial caso já esteja na viewport
  });
  
  
/* document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".carousel-vantagens-track");
    const cards = document.querySelectorAll(".carousel-vantagens-item");
    const container = document.querySelector(".carousel-vantagens-container");
    const totalCards = cards.length;

    let currentIndex = 0;
    let startX = 0;
    let isDragging = false;

    function updateCarousel() {
        const containerWidth = container.offsetWidth;
        const cardWidth = cards[0].offsetWidth; // Usamos a largura de um único card
        const trackOffset = currentIndex * containerWidth - (containerWidth - cardWidth) / 2;

        // Garante que o carrossel não ultrapasse os limites
        const maxOffset = (totalCards - 1) * containerWidth - (containerWidth - cardWidth) / 2;
        track.style.transform = `translateX(-${Math.min(trackOffset, maxOffset)}px)`;
        track.style.transition = "transform 0.3s ease";
    }

    // Inicia o arraste
    track.addEventListener("touchstart", (e) => {
        isDragging = true;
        startX = e.touches[0].clientX;
        track.style.transition = "none"; // Desativa a transição enquanto arrasta
    });

    // Movimento do arraste
    track.addEventListener("touchmove", (e) => {
        if (!isDragging) return;
        const deltaX = e.touches[0].clientX - startX;
        const containerWidth = container.offsetWidth;
        const maxTranslate = -((totalCards - 1) * containerWidth); // Limite esquerdo
        const newTranslate = Math.min(0, Math.max(-currentIndex * containerWidth + deltaX, maxTranslate)); // Restringe o movimento
        track.style.transform = `translateX(${newTranslate}px)`;
    });

    // Finaliza o arraste
    track.addEventListener("touchend", (e) => {
        if (!isDragging) return;
        isDragging = false;

        const containerWidth = container.offsetWidth;
        const deltaX = e.changedTouches[0].clientX - startX;

        // Limite para mudar de card
        if (deltaX > 50 && currentIndex > 0) {
            currentIndex--;
        } else if (deltaX < -50 && currentIndex < totalCards - 1) {
            currentIndex++;
        }

        updateCarousel();
    });

    // Atualiza o carrossel ao redimensionar
    window.addEventListener("resize", updateCarousel);

    // Inicializa o carrossel
    updateCarousel();
});
 */