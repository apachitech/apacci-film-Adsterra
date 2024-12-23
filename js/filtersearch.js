function createMovieElements(filteredMovies) {
    const container = document.getElementById('container');
    container.innerHTML = ''; // Clear existing content
    filteredMovies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');
        movieElement.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">
            <div class="overlay" aria-hidden="true">
                <div class="info">
                    <h3>${movie.title}</h3>
                    <p>${movie.description}</p>
                    <button aria-label="Watch ${movie.title}" onclick="openMoviePage(${movies.indexOf(movie)})">Watch Now</button>
                </div>
            </div>
        `;
        container.appendChild(movieElement);
    });
}

function applyFilters() {
    const title = document.getElementById('search-title').value.toLowerCase();
    const genre = document.getElementById('filter-genre').value;
    const year = document.getElementById('filter-year').value;
    const sortRating = document.getElementById('sort-rating').value;

    let filteredMovies = movies.filter(movie => {
        return (!title || movie.title.toLowerCase().includes(title)) &&
               (!genre || movie.genre === genre) &&
               (!year || movie.year === parseInt(year));
    });

    if (sortRating) {
        filteredMovies.sort((a, b) => sortRating === 'asc' ? a.rating - b.rating : b.rating - a.rating);
    }

    createMovieElements(filteredMovies);
}

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
    }
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('logout-btn').style.display = 'block';
        createMovieElements(movies);
        if (user.role === 'admin') {
            showAdminDashboard();
        }
    } else {
        document.getElementById('login-form').style.display = 'block';
    }
});

function openMoviePage(index) {
    const movie = movies[index];
    const url = new URL(window.location.href);
    url.pathname = '../movie-info.html'; // Ensure this path is correct
    url.searchParams.set('title', movie.title);
    url.searchParams.set('image', movie.image);
    url.searchParams.set('link', movie.link);
    url.searchParams.set('description', movie.description);
    window.location.href = url.toString();
}

function getMovieFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return {
        title: params.get('title'),
        image: params.get('image'),
        link: params.get('link'),
        description: params.get('description')
    };
}

function showMoviePage() {
    const movie = getMovieFromUrl();
    if (movie.title && movie.image && movie.link && movie.description) {
        document.querySelector('.banner').src = movie.image;
        document.querySelector('h1').textContent = movie.title;
        document.querySelector('p').textContent = movie.description;
        document.querySelector('iframe').src = movie.link;
        showSuggestions();
    }
}

function showSuggestions() {
    const suggestionsContainer = document.getElementById('suggestions-container');
    movies.slice(0, 5).forEach(movie => {
        const suggestionElement = document.createElement('div');
        suggestionElement.classList.add('suggestion');
        suggestionElement.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">
            <p>${movie.title}</p>
        `;
        suggestionsContainer.appendChild(suggestionElement);
    });
}
// Dark mode toggle function
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
}

// Check and apply dark mode preference
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
    }
    if (document.getElementById('container')) {
        createMovieElements();
    } else {
        showMoviePage();
    }
});