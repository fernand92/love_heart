const formation = document.getElementById('heart-formation');
const message = document.getElementById('final-message');

// Calcula os pontos do coração gigante
function heartShape(t) {
    const x = 16 * Math.pow(Math.sin(t), 3);
    const y = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
    return { 
        x: x * 15 + (window.innerWidth / 2), 
        y: y * 15 + (window.innerHeight / 2.2) 
    };
}

function start() {
    const total = 70; // Quantidade de coraçõezinhos
    
    for (let i = 0; i < total; i++) {
        setTimeout(() => {
            const h = document.createElement('div');
            h.className = 'heart';
            
            // Posição inicial (Boca do bonequinho fofo)
            h.style.left = "15%"; 
            h.style.top = "75%";
            
            formation.appendChild(h);

            // Anima para o destino
            setTimeout(() => {
                const angle = (i / total) * (2 * Math.PI);
                const pos = heartShape(angle);
                h.style.left = pos.x + "px";
                h.style.top = pos.y + "px";
                h.style.opacity = "1";
            }, 50);
        }, i * 80); // Um por um
    }

    // Mostra o texto I Love You após a formação
    setTimeout(() => {
        message.classList.add('visible');
    }, 6000);
}

window.onload = start;