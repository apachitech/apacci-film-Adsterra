// Function to create movie elements and append to the container
// Existing JavaScript code...

function createMovieElements() {
    const container = document.getElementById('container');
    movies.forEach((movie, index) => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');
        movieElement.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">
            <div class="overlay">
                <div class="info">
                    <h3>${movie.title}</h3>
                    <p>${movie.description}</p>
                    <h1>${movie.year}</h1>
                    <button onclick="openMoviePage(${index})">Watch Now</button>
                </div>
            </div>
        `;
        container.appendChild(movieElement);
    });
}

function openMoviePage(index) {
    const movie = movies[index];
    const adsterraAdUrl = "https://www.profitablecpmrate.com/pmb582e8sg?key=c3682468f8bcce3785bcb80ba3b62090"; // Replace with your Adsterra ad URL

    // Redirect to Adsterra ad link first, then navigate to the movie page
    const redirectAfterAd = () => {
        const url = new URL(window.location.href);
        url.pathname = '../movie-info.html'; // Ensure this path is correct
        url.searchParams.set('title', movie.title);
        url.searchParams.set('image', movie.image);
        url.searchParams.set('link', movie.link);
        url.searchParams.set('description', movie.description);
        window.location.href = url.toString();
    };

    // Open the Adsterra link and set a timeout for redirection
    window.open(adsterraAdUrl, '_blank'); // Open the ad in a new tab
    setTimeout(redirectAfterAd, 3000); // Adjust delay as needed
}

function getMovieFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return {
        title: params.get('title'),
        year: params.get('year'),
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

function openLoginModal() {
    document.getElementById('loginModal').style.display = 'block';
  }

  function closeLoginModal() {
    document.getElementById('loginModal').style.display = 'none';
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

// Close modal when clicking outside of it
window.onclick = function(event) {
    if (event.target == document.getElementById('loginModal')) {
      closeLoginModal();
    }
  }

  // Prevent form submission (for demo purposes)
  document.querySelector('.modal-form').addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Login functionality would be implemented here.');
    });