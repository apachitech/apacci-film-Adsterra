function showSuggestions() {
    const suggestionsContainer = document.getElementById('suggestions-container');
    suggestionsContainer.innerHTML = ''; // Clear existing content
    const randomMovies = getRandomMovies(5); // Get 5 random movies for suggestions

    randomMovies.forEach(movie => {
        const suggestionElement = document.createElement('div');
        suggestionElement.classList.add('suggestion');
        suggestionElement.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">
            <div class="overlay" aria-hidden="true">
                <div class="info">
                    <h3>${movie.title}</h3>
                    <p>${movie.description}</p>
                    <button aria-label="Watch ${movie.title}" onclick="openMoviePage(${movies.indexOf(movie)})">Watch Now</button>
                </div>
            </div>
        `;
        suggestionsContainer.appendChild(suggestionElement);
    });
}

function getRandomMovies(count) {
    const shuffled = movies.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}