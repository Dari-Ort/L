// 💖 Crea un corazón flotante en una posición específica
    function crearCorazon(x, y) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = x + "px";
    heart.style.top = y + "px";
    heart.style.animationDuration = 4 + Math.random() * 2 + "s";
    document.body.appendChild(heart);

    // Eliminar después de la animación
    setTimeout(() => heart.remove(), 6000);
}

  // 🌟 Corazones al iniciar (una fila nada más)
    for (let i = 0; i < 20; i++) {
    setTimeout(() => {
      const x = Math.random() * window.innerWidth;
        const y = window.innerHeight - 50;
        crearCorazon(x, y);
    }, i * 150);
}

  // 🖱️ Corazones al hacer clic (desde donde se hace clic)
    document.addEventListener("click", (e) => {
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
        crearCorazon(e.clientX, e.clientY);
      }, i * 100);
    }
});

  // 🏃‍♂️ Botón que huye (NO)
    const noBtn = document.getElementById('noBtn');
    if (noBtn) {
    noBtn.addEventListener('mouseover', () => {
      const randX = Math.floor(Math.random() * (window.innerWidth - 100));
      const randY = Math.floor(Math.random() * (window.innerHeight - 100));
    noBtn.style.left = randX + 'px';
    noBtn.style.top = randY + 'px';
    });
}

  // 💌 Mostrar carta cuando le da clic a "Sí"
    const siBtn = document.querySelector(".btn-si");
    if (siBtn) {
    siBtn.addEventListener("click", () => {
        const carta = document.getElementById("mensajeAmor");
        if (carta) carta.style.display = "block";
    });
}

  // 🎵 Música que se pausa y sigue desde donde quedó
    document.querySelectorAll('.foto-audio img').forEach(img => {
    const audioId = img.dataset.audio;
    const audio = document.getElementById(audioId);

    if (!audio) return;

    img.addEventListener('mouseenter', () => {
      // Pausar otros audios (si quieres que solo suene uno)
        document.querySelectorAll('audio').forEach(a => {
        if (a !== audio) a.pause();
    });

        audio.play().catch(() => {
        console.log("Haz clic en la página para activar el audio.");
        });
    });

    img.addEventListener('mouseleave', () => {
      audio.pause(); // Se pausa, pero conserva el currentTime
    });
});