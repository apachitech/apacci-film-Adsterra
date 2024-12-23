document.querySelectorAll('.watch-trailer').forEach(button => {
    button.addEventListener('click', () => {
        const trailerUrl = button.getAttribute('data-trailer');
        window.open(trailerUrl, '_blank'); // Opens the trailer in a new tab
    });
});