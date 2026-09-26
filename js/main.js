document.addEventListener('DOMContentLoaded', () => {

    // 1. AUTOMATICKÝ KARUSEL V HERO SEKCI
    const slides = document.querySelectorAll('.carousel-slide');
    let currentSlide = 0;

    if (slides.length > 0) {
        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 4500);
    }

    // 2. PŘEPÍNÁNÍ ZÁLOŽEK (TABS)
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-target');

            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            tabContents.forEach(content => {
                if (content.id === targetId) {
                    content.style.display = 'block';
                } else {
                    content.style.display = 'none';
                }
            });
        });
    });

    // 3. KALKULAČKA PORCÍ
    const portionsInput = document.getElementById('portions-input');
    if (portionsInput) {
        const basePortions = parseInt(portionsInput.getAttribute('data-base-portions')) || 4;
        const ingredientAmounts = document.querySelectorAll('.ingredient-amount');
        const baseValues = Array.from(ingredientAmounts).map(el => parseFloat(el.textContent));

        portionsInput.addEventListener('input', (e) => {
            let newPortions = parseInt(e.target.value);
            if (isNaN(newPortions) || newPortions < 1) return;

            ingredientAmounts.forEach((el, index) => {
                const calculated = (baseValues[index] / basePortions) * newPortions;
                el.textContent = Number.isInteger(calculated) ? calculated : calculated.toFixed(1);
            });
        });
    }

    // 4. PLYNULÉ SKROLOVÁNÍ
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

});

// Filtrování galerií podle kategorií
document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector('.gallery-carousel-track');
    if (!track) return;

    let cards = Array.from(track.querySelectorAll('.gallery-card'));
    const categoryButtons = document.querySelectorAll('.cat-btn');
    
    let currentIndex = 0;
    let autoSlideInterval;

    // Funkce pro posun karuselu doleva
    function slideNext() {
        const visibleCards = window.innerWidth <= 600 ? 1 : (window.innerWidth <= 900 ? 2 : 3);
        const activeCards = cards.filter(card => card.style.display !== 'none');
        
        if (activeCards.length <= visibleCards) return;

        currentIndex++;
        if (currentIndex > activeCards.length - visibleCards) {
            currentIndex = 0; // Vrátí se na začátek
        }

        updateCarouselPosition(activeCards);
    }

    function updateCarouselPosition(activeCards) {
        if (activeCards.length === 0) return;
        const cardWidth = activeCards[0].getBoundingClientRect().width + 20; // šířka + gap (20px)
        track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }

    // Automatické spuštění posunu doleva každé 3 sekundy
    function startAutoSlide() {
        autoSlideInterval = setInterval(slideNext, 3000);
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    startAutoSlide();

    // Zastavení při najetí myší
    track.addEventListener('mouseenter', stopAutoSlide);
    track.addEventListener('mouseleave', startAutoSlide);

    // Filtrování podle kategorií
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const selectedCategory = button.getAttribute('data-category');
            currentIndex = 0; // Reset pozice při změně kategorie
            track.style.transform = `translateX(0px)`;

            cards.forEach(card => {
                if (selectedCategory === 'vse' || card.getAttribute('data-category') === selectedCategory) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});

// Kalkulačka příjmu (clanky/kalkulacka.html)
        function calculateFitness() {
            const gender = document.getElementById('gender').value;
            const weight = parseFloat(document.getElementById('weight').value);
            const height = parseFloat(document.getElementById('height').value);
            const age = parseInt(document.getElementById('age').value);
            const activity = document.getElementById('activity').value;

            if (!weight || !height || !age) {
                alert('Prosím, vyplň svou váhu, výšku i věk.');
                return;
            }

            let bmr;
            if (gender === 'female') {
                bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
            } else {
                bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
            }

            let activityMultiplier = 1.2;
            if (activity === 'moderate') {
                activityMultiplier = 1.375;
            } else if (activity === 'high') {
                activityMultiplier = 1.55;
            }

            const tdee = Math.round(bmr * activityMultiplier);
            const roundedBMR = Math.round(bmr);
            
            const deficit = Math.max(roundedBMR, tdee - 400); 
            const surplus = tdee;

            document.getElementById('resBMR').textContent = roundedBMR;
            document.getElementById('resMaintain').textContent = tdee;
            document.getElementById('goalDeficit').textContent = deficit + ' kcal';
            document.getElementById('goalSurplus').textContent = surplus + ' kcal';

            const resultsBox = document.getElementById('calcResults');
            resultsBox.style.display = 'block';
            resultsBox.scrollIntoView({ behavior: 'smooth' });
        }