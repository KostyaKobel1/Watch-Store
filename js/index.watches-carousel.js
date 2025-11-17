const slides = [
    `<div class="rare__timepieces_carousel-item">
        <div class="rare__timepieces_carousel-image">
          <img
            class="rare__timepieces_carousel-img"
            src="img/index-rare-timepieces/index-rare-timepieces-novatime-grand.jpeg"
            alt="Novatime Grand"
          />
        </div>
        <h6 class="rare__timepieces_carousel-title">Novatime Grand</h6>
        <span class="rare__timepieces_carousel-price">$350,00USD</span>
        <button class="rare__timepieces_carousel-btn">
          <a class="rare__timepieces_carousel-link" href="#">Buy Now</a>
          <svg
            class="rare__timepieces_carousel-icon"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            x="0px"
            y="0px"
            viewBox="0 0 100 99.999"
            enable-background="new 0 0 100 99.999"
            xml:space="preserve"
            height="24px"
            width="24px"
          >
            <polygon
              points="74,49.668 52.492,28.001 48.098,32.243 62.495,46.638 25.224,46.638 25.224,52.638 62.6,52.638 48.098,67.032   52.492,71.274 74,49.732 73.967,49.7 "
              fill="currentColor"
            ></polygon>
          </svg>
        </button>
    </div>`,
    ` <div class="rare__timepieces_carousel-item">
        <div class="rare__timepieces_carousel-image">
          <img
            class="rare__timepieces_carousel-img"
            src="img/index-rare-timepieces/index-rare-timepieces-solaris-eclipse.jpeg"
            alt="Solaris Eclipse"
          />
        </div>
        <h6 class="rare__timepieces_carousel-title">Solvaris Eclipse</h6>
        <span class="rare__timepieces_carousel-price">$49,99USD</span>
        <button class="rare__timepieces_carousel-btn">
          <a class="rare__timepieces_carousel-link" href="#">Buy Now</a>
          <svg
            class="rare__timepieces_carousel-icon"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            x="0px"
            y="0px"
            viewBox="0 0 100 99.999"
            enable-background="new 0 0 100 99.999"
            xml:space="preserve"
            height="24px"
            width="24px"
          >
            <polygon
              points="74,49.668 52.492,28.001 48.098,32.243 62.495,46.638 25.224,46.638 25.224,52.638 62.6,52.638 48.098,67.032   52.492,71.274 74,49.732 73.967,49.7 "
              fill="currentColor"
            ></polygon>
          </svg>
        </button>
    </div>`,
    `<div class="rare__timepieces_carousel-item">
        <div class="rare__timepieces_carousel-image">
          <img
            class="rare__timepieces_carousel-img"
            src="img/index-rare-timepieces/index-rare-timepieces-tempralux-eclipse.jpeg"
            alt="Tempralux Eclipse"
          />
        </div>
        <h6 class="rare__timepieces_carousel-title">TempraLux Heritage</h6>
        <span class="rare__timepieces_carousel-price">$540,00USD</span>
        <button class="rare__timepieces_carousel-btn">
          <a class="rare__timepieces_carousel-link" href="#">Buy Now</a>
          <svg
            class="rare__timepieces_carousel-icon"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            x="0px"
            y="0px"
            viewBox="0 0 100 99.999"
            enable-background="new 0 0 100 99.999"
            xml:space="preserve"
            height="24px"
            width="24px"
          >
            <polygon
              points="74,49.668 52.492,28.001 48.098,32.243 62.495,46.638 25.224,46.638 25.224,52.638 62.6,52.638 48.098,67.032   52.492,71.274 74,49.732 73.967,49.7 "
              fill="currentColor"
            ></polygon>
          </svg>
        </button>
    </div>`,
    ` <div class="rare__timepieces_carousel-item">
        <div class="rare__timepieces_carousel-image">
          <img
            class="rare__timepieces_carousel-img"
            src="img/index-rare-timepieces/index-rare-timepieces-veliora-precision.jpeg"
            alt="Veliora Precision"
          />
        </div>
        <h6 class="rare__timepieces_carousel-title">Veliora Precision</h6>
        <span class="rare__timepieces_carousel-price">#49,60USD</span>
        <button class="rare__timepieces_carousel-btn">
          <a class="rare__timepieces_carousel-link" href="#">Buy Now</a>
          <svg
            class="rare__timepieces_carousel-icon"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            x="0px"
            y="0px"
            viewBox="0 0 100 99.999"
            enable-background="new 0 0 100 99.999"
            xml:space="preserve"
            height="24px"
            width="24px"
          >
            <polygon
              points="74,49.668 52.492,28.001 48.098,32.243 62.495,46.638 25.224,46.638 25.224,52.638 62.6,52.638 48.098,67.032   52.492,71.274 74,49.732 73.967,49.7 "
              fill="currentColor"
            ></polygon>
          </svg>
        </button>
    </div>`
]
let currentSlide = 0;

function getSlidesPerView() {
    const width = window.innerWidth;
    if (width >= 990) return 4;
    if (width >= 768) return 2;
    if (width >= 480) return 1;
    return 1;
}
function renderSlide(direction = 'next') {
    const carouselContainer = document.querySelector('.rare__timepieces-carousel');
    const slidesPerView = getSlidesPerView();
    carouselContainer.classList.add(direction === 'next' ? 'slide-out-left' : 'slide-out-right');
    setTimeout(() => {
        let htmlContent = '';
        if (slidesPerView >= 1) {
            htmlContent += `
                <svg class="rare__timepieces_carousel-left-arrow" viewBox="0 0 30 30">
                    <defs>
                        <path
                            d="M19.533 15l-9.1-9.45c-.577-.6-.577-1.5 0-2.1.578-.6 1.445-.6 2.023 0l10.11 10.5c.29.3.434.75.434 1.05 0 .45-.144.75-.433 1.05l-10.111 10.5c-.29.3-.578.45-1.012.45-.433 0-.722-.15-1.01-.45-.578-.6-.578-1.5 0-2.1l9.1-9.45z"
                            id="arrow-path"
                        ></path>
                    </defs>
                    <use fill-rule="nonzero" opacity=".8" xlink:href="#arrow-path"></use>
                </svg>`;
        }
        
        for (let i = 0; i < slidesPerView; i++) {
            const slideIndex = (currentSlide + i) % slides.length;
            htmlContent += slides[slideIndex];
        }
        if (slidesPerView >= 1) {
            htmlContent += `
                <svg class="rare__timepieces_carousel-right-arrow" viewBox="0 0 30 30">
                    <defs>
                        <path
                            d="M19.533 15l-9.1-9.45c-.577-.6-.577-1.5 0-2.1.578-.6 1.445-.6 2.023 0l10.11 10.5c.29.3.434.75.434 1.05 0 .45-.144.75-.433 1.05l-10.111 10.5c-.29.3-.578.45-1.012.45-.433 0-.722-.15-1.01-.45-.578-.6-.578-1.5 0-2.1l9.1-9.45z"
                            id="arrow-path"
                        ></path>
                    </defs>
                    <use fill-rule="nonzero" opacity=".8" xlink:href="#arrow-path"></use>
                </svg>`;
        }
        
        carouselContainer.innerHTML = htmlContent;
        carouselContainer.classList.remove('slide-out-left', 'slide-out-right');
        carouselContainer.classList.add(direction === 'next' ? 'slide-in-right' : 'slide-in-left');
        attachEventListeners();
        
        setTimeout(() => {
            carouselContainer.classList.remove('slide-in-right', 'slide-in-left');
        }, 400);
    }, 400);
}
renderSlide();
function showNextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    renderSlide('next');
}
function showPrevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    renderSlide('prev');
}
function attachEventListeners() {
    const nextButton = document.querySelector('.rare__timepieces_carousel-right-arrow');
    const prevButton = document.querySelector('.rare__timepieces_carousel-left-arrow');
    
    if (nextButton) {
        nextButton.addEventListener('click', showNextSlide);
    }
    
    if (prevButton) {
        prevButton.addEventListener('click', showPrevSlide);
    }
}
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        renderSlide();
    }, 250);
});
attachEventListeners();
