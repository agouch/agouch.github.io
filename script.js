// Confetti effect to webpage.

window.addEventListener('load', () => {
    launchConfetti();
});

function launchConfetti() {
    const duration = 5 * 5000; 
    const end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 3,
            startVelocity: 30,
            spread: 360,
            ticks: 60,
            origin: {
                x: Math.random(),
                y: Math.random() - 0.2
            }
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    })();
}
