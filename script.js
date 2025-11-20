document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. PARALLAX EFFECT ---
    const parallaxBg = document.getElementById('parallax-bg');
    
    window.addEventListener('scroll', () => {
        let offset = window.pageYOffset;
        // Зсуваємо фон зі швидкістю 0.5 від швидкості скролу
        parallaxBg.style.transform = `translateY(${offset * 0.5}px)`;
    });

    // --- 2. DRAG AND DROP FUNCTIONALITY ---
    const comics = document.querySelectorAll('.comic-card');
    const cartZone = document.getElementById('cart-zone');
    const cartCount = document.getElementById('cart-count');
    let count = 0;

    comics.forEach(comic => {
        // Початок перетягування
        comic.addEventListener('dragstart', (e) => {
            comic.classList.add('dragging');
            // Передаємо дані про товар (можна передати ID)
            e.dataTransfer.setData('text/plain', comic.dataset.id);
        });

        // Кінець перетягування
        comic.addEventListener('dragend', () => {
            comic.classList.remove('dragging');
        });
    });

    // Дозволяємо кидати в зону кошика
    cartZone.addEventListener('dragover', (e) => {
        e.preventDefault(); // Це обов'язково!
        cartZone.classList.add('drag-over');
    });

    // Коли покидаємо зону кошика (не кинули)
    cartZone.addEventListener('dragleave', () => {
        cartZone.classList.remove('drag-over');
    });

    // Момент кидка (Drop)
    cartZone.addEventListener('drop', (e) => {
        e.preventDefault();
        cartZone.classList.remove('drag-over');
        
        // Отримуємо ID товару
        const id = e.dataTransfer.getData('text/plain');
        
        // Логіка додавання (візуальна)
        count++;
        cartCount.innerText = count;
        
        // Анімація кошика "Бульк"
        cartZone.style.transform = "scale(1.2)";
        setTimeout(() => {
            cartZone.style.transform = "scale(1)";
        }, 200);

        // Можна додати сповіщення
        // alert(`Comics #${id} added to cart!`);
    });

    // --- 3. HOVER EFFECTS (Додатково до CSS) ---
    // Додаємо "tilt" ефект на кнопки при русі миші (опціонально)
    const buttons = document.querySelectorAll('button');
    
    buttons.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            // Можна використати для складних ефектів блиску
        });
    });
});