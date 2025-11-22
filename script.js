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
        if (cartCount.innerText == 5) {
            openField();
        }
        if (cartCount.innerText == 6) {
            openField6();
        }
        
        // Анімація кошика "Бульк"
        cartZone.style.transform = "scale(1.2)";
        setTimeout(() => {
            cartZone.style.transform = "scale(1)";
        }, 200);

        // Можна додати сповіщення
        // alert(`Comics #${id} added to cart!`);
    });

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

function subscribeNewsletter() {
    window.alert("Thank you for subscribing to our newsletter!");
}

function openEasterEgg(videoUrl) {

    const modal = document.createElement("div");
    modal.style.position = "fixed";
    modal.style.inset = "0";
    modal.style.background = "rgba(0,0,0,0.85)";
    modal.style.display = "flex";
    modal.style.justifyContent = "center";
    modal.style.alignItems = "center";
    modal.style.zIndex = "9999";

    const video = document.createElement("video");
    video.src = videoUrl;       
    video.controls = true;
    video.autoplay = true;
    video.style.maxWidth = "90%";
    video.style.maxHeight = "90%";
    video.style.boxShadow = "0 0 20px #000";
    video.style.borderRadius = "10px";

    modal.appendChild(video);
    document.body.appendChild(modal);

    modal.onclick = function(e) {
        if (e.target === modal) {
            modal.remove();
        }
    };
};

function openField() {
    const fieldWindow = window.open("", "FieldWindow", "width=600,height=400");

    fieldWindow.document.open();
    fieldWindow.document.write(`
        <html>
        <head>
            <title>Secret Code</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    text-align: center;
                    margin-top: 50px;
                }
                input, button {
                    margin: 20px auto;
                    padding: 10px;
                    font-size: 16px;
                    display: block;
                }
                button {
                    cursor: pointer;
                }
            </style>
        </head>
        <body>
            <h1>Enter secret code</h1>
            <input type="text" id="secretCode"/>
            <button id="submitBtn">Submit</button>

            <script>
                function openEasterEgg(videoPath) {
                    const vidWin = window.open("", "VideoWindow", "width=800,height=600");
                    vidWin.document.write(
                        "<video width='100%' height='100%' controls autoplay>" +
                        "<source src='" + videoPath + "' type='video/mp4'>" +
                        "</video>"
                    );
                }

                document.getElementById("submitBtn").onclick = function () {
                    const code = document.getElementById("secretCode").value;
                    if (code === "921") {
                        document.body.innerHTML = 
                            "<button onclick=\\"openEasterEgg('images/Download (1).mp4')\\">Open Easter Egg</button><h1 style='color: white; cursor: pointer; width: 300px'>hqedkfhj</h1>";
                    } else {
                        alert("Access Denied! Try again.");
                    }
                };
            <\/script>
        </body>
        </html>
    `);
    fieldWindow.document.close();
}

function openField6() {
    const fieldWindow = window.open("", "FieldWindow", "width=800,height=600");

    fieldWindow.document.open();
    fieldWindow.document.write(`
        <html>
        <body style="margin:0; background:black; display:flex; align-items:center; justify-content:center; height:100%;">
            <video controls autoplay style="max-width:100%; max-height:100%;">
                <source src="images/Rick Astley - Never Gonna Give You Up (Official Video) (4K Remaster).mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </body>
        </html>
    `);
    fieldWindow.document.close();
}

 function flySuperman() {
    const emailInput = document.getElementById('emailInput');
    const text = emailInput.value.trim().toLowerCase();
    if (text === "clayface"){ 
        const superman = document.createElement('img');
        superman.src = 'images/superman.png'; 
        superman.className = 'flying-superman';
        document.body.appendChild(superman);

        superman.addEventListener('animationend', () => {
            superman.remove(); 
        });
    }
    else{
        subscribeNewsletter();
    }
}
