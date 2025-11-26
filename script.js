document.addEventListener('DOMContentLoaded', () => {
    
    const parallaxBg = document.getElementById('parallax-bg');
    
    window.addEventListener('scroll', () => {
        let offset = window.pageYOffset;
        parallaxBg.style.transform = `translateY(${offset * 0.5}px)`;
    });

    const comics = document.querySelectorAll('.comic-card');
    const cartZone = document.getElementById('cart-zone');
    const cartCount = document.getElementById('cart-count');
    let count = 0;

    comics.forEach(comic => {
        comic.addEventListener('dragstart', (e) => {
            comic.classList.add('dragging');
            e.dataTransfer.setData('text/plain', comic.dataset.id);
        });

        comic.addEventListener('dragend', () => {
            comic.classList.remove('dragging');
        });
    });

    cartZone.addEventListener('dragover', (e) => {
        e.preventDefault(); 
        cartZone.classList.add('drag-over');
    });

    cartZone.addEventListener('dragleave', () => {
        cartZone.classList.remove('drag-over');
    });

    cartZone.addEventListener('drop', (e) => {
        e.preventDefault();
        cartZone.classList.remove('drag-over');
        
        const id = e.dataTransfer.getData('text/plain');
        
        count++;
        cartCount.innerText = count;
        if (cartCount.innerText == 5) {
            openField();
        }
        if (cartCount.innerText == 6) {
            openField6();
        }
        
        cartZone.style.transform = "scale(1.2)";
        setTimeout(() => {
            cartZone.style.transform = "scale(1)";
        }, 200);

    });

    const buttons = document.querySelectorAll('button');
    
    buttons.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
        });
    });

    const slides = document.querySelectorAll('.carousel-slide');
        let currentSlide = 0;
        const intervalTime = 5000; 

        setInterval(() => {
            slides[currentSlide].classList.remove('opacity-100');
            slides[currentSlide].classList.add('opacity-0');

            currentSlide = (currentSlide + 1) % slides.length;

            slides[currentSlide].classList.remove('opacity-0');
            slides[currentSlide].classList.add('opacity-100');
        }, intervalTime);

        const openBtn = document.getElementById('open-menu-btn');
        const closeBtn = document.getElementById('close-menu-btn');
        const sidebar = document.getElementById('mobile-sidebar');
        const overlay = document.getElementById('menu-overlay');

        function toggleMenu() {
            if (window.innerWidth >= 768) return;
            const isClosed = sidebar.classList.contains('translate-x-full');
            
            if (isClosed) {
                sidebar.classList.remove('translate-x-full');
                overlay.classList.remove('hidden');
                setTimeout(() => {
                    overlay.classList.remove('opacity-0');
                }, 10);
            } else {
                sidebar.classList.add('translate-x-full');
                overlay.classList.add('opacity-0');
                setTimeout(() => {
                    overlay.classList.add('hidden');
                }, 300); 
            }
        }

        openBtn.addEventListener('click', toggleMenu);
        closeBtn.addEventListener('click', toggleMenu);
        overlay.addEventListener('click', toggleMenu);
});

function subscribeNewsletter() {
    window.alert("Thank you for subscribing to our newsletter!");
}

function handleLogoClick(videoUrl) {
    if (window.innerWidth < 768) {
        toggleMenu(); }
}
function openInsta(){
    window.open("https://www.instagram.com/therealstanlee/","_blank");
}
function toggleInfo(event, id) {
    if(event) event.stopPropagation();

    const infoBlock = document.getElementById(id);
    
    // Check if currently hidden
    if (infoBlock.classList.contains('hidden')) {
        // Show it
        infoBlock.classList.remove('hidden');
        infoBlock.classList.add('flex'); 
    } else {
        // Hide it
        infoBlock.classList.add('hidden');
        infoBlock.classList.remove('flex');
    }
}
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
