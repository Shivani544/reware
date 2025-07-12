document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const inner = document.querySelector('.carousel-inner');
    const items = document.querySelectorAll('.carousel-item');
    const prevBtn = document.querySelector('.carousel-control.prev');
    const nextBtn = document.querySelector('.carousel-control.next');
    
    let currentIndex = 0;
    const itemWidth = items[0].clientWidth;
    const totalItems = items.length;
    
    function updateCarousel() {
        inner.style.transform = `translateX(${-currentIndex * itemWidth}px)`;
    }
    
    nextBtn.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
    });
    
    prevBtn.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateCarousel();
    });
    
    // Auto-rotate every 5 seconds
    setInterval(function() {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
    }, 5000);
});