const slides = document.querySelectorAll('.slider .list img');
        const dots = document.querySelectorAll('.slider .dots li');
        const prevButton = document.getElementById('prev');
        const nextButton = document.getElementById('next');
        const slideList = document.querySelector('.slider .list');

        let currentIndex = 0;
        let autoSlideInterval;

        function updateSlider(index) {
            slideList.style.transform = `translateX(-${index * 100}%)`;
            dots.forEach(dot => dot.classList.remove('active'));
            dots[index].classList.add('active');
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % slides.length;
            updateSlider(currentIndex);
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            updateSlider(currentIndex);
        }

        // Manual Navigation
        nextButton.addEventListener('click', () => {
            nextSlide();
            restartAutoSlide();
        });

        prevButton.addEventListener('click', () => {
            prevSlide();
            restartAutoSlide();
        });

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentIndex = index;
                updateSlider(currentIndex);
                restartAutoSlide();
            });
        });

        // Auto-Slide Functionality
        function startAutoSlide() {
            autoSlideInterval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
        }

        function restartAutoSlide() {
            clearInterval(autoSlideInterval);
            startAutoSlide();
        }

        // Start the slider
        startAutoSlide();