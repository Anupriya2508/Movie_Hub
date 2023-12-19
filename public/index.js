// Use this script to set up the UI based on the logged-in status
  const username = localStorage.getItem('username');
  const Div2 = document.getElementById('user-buttons');
  const movie1 = document.getElementById('movie_hub');

  if (username) {
    Div2.innerHTML = (`
      <p class="text">Welcome, ${username}!</p>
      <div class="search-bar">
        <input type="text" id="movieSearch" placeholder="Search a movie...">
        <button onclick="searchMovies()">Search</button>
      </div>
      <a onclick="logout()">Logout</a>
    `);

    movie1.innerHTML = (`
      <li><a href="index.html">Home</a></li>
      <li><a  href="new_movie.html">New Movies</a></li>
      <li><a href="popular.html">Popular</a></li>
    `);
  } else {
    Div2.innerHTML = (`
      <a id="nav-change" href="login.html">Login</a>
      <a href="sign-up.html">Sign-Up</a>
    `);
  }

  function logout() {
    localStorage.removeItem('username');
    location.replace('index.html');
  }

//Define an array of movie objects.....
    const movies = [
        {
          title: "ANT MAN",
          releaseYear: 2015,
          genre: ["Action", "Comedy", "Sci-Fi"],
          overview: "Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, catburglar Scott Lang must embrace his inner hero and help his mentor, Dr.Hank Pym, pull off a plan that will save the world.",
          imageSrc: "movie/ant man.jpeg"
        },
        {
          title: "AVATAR",
          releaseYear: 2009,
          genre: ["Adventure", "Fantasy"],
          overview: "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
          imageSrc: "movie/Avatar.jpeg"
        },
        {
          title: "CAPTAIN MARVEL",
          releaseYear: 2019,
          genre: ["Action", "Adventure", "Sci-Fi"],
          overview: "Carol Danvers becomes one of the universe's most powerful heroes when Earth is caught in the middle of a galactic war between two alien races.",
          imageSrc: "movie/captain marvel.jpeg"
        },
        {
          title: "JUNGLE CRUISE",
          releaseYear: 2021,
          genre: ["Action", "Comedy", "Adventure"],
          overview: "Based on Disneyland's theme park ride where a small riverboat takes a group of travelers through a jungle filled withdangerous animals and reptiles but with a supernatural element.",
          imageSrc: "movie/jungle.jpeg"
        },
        {
          title: "JOHN CARTER",
          releaseYear: 2012,
          genre: ["Action", "Adventure", "Sci-Fi"],
          overview: "ransported to Barsoom, a Civil War vet discovers a barren planet seemingly inhabited by 12-foot tall barbarians.Finding himself prisoner of these creatures, he escapes, only to encounter Woola and a princess in desperate need of asavior.",
          imageSrc: "movie/john.jpeg"
        },
        {
          title: "Pixels",
          releaseYear: 2015,
          genre: ["Action", "Comedy", "Fantasy"],
          overview: "When aliens misinterpret video feeds of classic arcade games as a declaration of war, they attack the Earth in the form of the video games.",
          imageSrc: "movie/pixel.jpeg"
        },
        {
          title: "Unlocked",
          releaseYear: 2023,
          genre: ["Crime", "Drama", "Mystery"],
          overview: "A woman's life is turned upside-down when a dangerous man gets hold of her lost cell phone and uses it to track her every move.",
          imageSrc: "movie/unlocked.jpeg"
        },
        {
          title: "Inside",
          releaseYear: 2023,
          genre: ["Drama", "Thriller"],
          overview: "Nemo, a high-end art thief, is trapped in a New York penthouse after his heist doesn't go as planned.Locked inside with nothing but priceless works of art, he must use all his cunning and ingenuity to survive.",
          imageSrc: "movie/inside.jpeg"
        },
        {
          title: "Jawan",
          releaseYear: 2023,
          genre: ["Action", "Thriller"],
          overview: "A high-octane action thriller which outlines the emotional journey of a man who is set to rectify the wrongs in the society.",
          imageSrc: "movie/new/jawan.jpeg"
        },
        {
          title: "Blue Beetle",
          releaseYear: 2023,
          genre: ["Action", "Adventure", "Sci-Fi"],
          overview: "An alien scarab chooses Jaime Reyes to be its symbiotic host, bestowing the recent college graduate with a suit of armor that's capable of extraordinary powers, forever changing his destiny as he becomes the superhero known as Blue Beetle.",
          imageSrc: "movie/new/blue.jpeg"
        },
        {
          title: "Ballerina",
          releaseYear: 2023,
          genre: ["Action", "Thriller"],
          overview: "Grieving the loss of a best friend she couldn't protect, an ex-bodyguard sets out to fulfill her dear friend's last wish: sweet revenge.",
          imageSrc: "movie/new/bale.jpeg"
        },
        {
          title: "Kushi",
          releaseYear: 2023,
          genre: ["Comedy", "Drama", "Romance"],
          overview: "Raised in an atheist household, a young man falls in love with the daughter of his father's arch-rival, a devout Hindu leader.",
          imageSrc: "movie/new/kushi.jpeg"
        },
        {
          title: "Dada",
          releaseYear: 2023,
          genre: ["Drama", "Family", "Romance"],
          overview: "A couple in love, accidentally become teenage parents. Unpleasant situations make them fall apart. Manikandan, left alone with his son, struggles as a single teenage father.Fate owns him, bringing Sindhu back into his life.",
          imageSrc: "movie/new/dada.jpeg"
        },
        {
          title: "Born to fly",
          releaseYear: 2023,
          genre: ["Action", "Drama"],
          overview: "A special operations team headed by elite pilots are ordered to test new fighter jets. Test flight after test flight, they challenge the limits of the sky and themselves.",
          imageSrc: "movie/new/born.jpeg"
        },
        {
          title: "Asteroid City",
          releaseYear: 2023,
          genre: ["Drama", "Comedy", "Romance"],
          overview: "A woman's life is turned upside-down when a dangerous man gets hold of her lost cell phone and uses it to track her every move.",
          imageSrc: "movie/new/ciyt.jpeg"
        },
        {
          title: "Heart of Stone",
          releaseYear: 2023,
          genre: ["Action", "Crime", "Thriller"],
          overview: "An intelligence operative for a shadowy global peacekeeping agency races to stop a hacker from stealing its most valuable and dangerous weapon.",
          imageSrc: "movie/new/heart.jpeg"
        },
      ];

    const movieCardsContainer = document.getElementById("movieCardsContainer");

    //no of cards in easc row is 4.....
    const columnsPerRow = 4;

    //Generate movie cards dynamically
    for (let i = 0; i < movies.length; i++) {
      // Create a new row for every 'columnsPerRow' movies
      if (i % columnsPerRow === 0) {
        var newRow = document.createElement("div");
        newRow.className = "row";
        movieCardsContainer.appendChild(newRow);
      }

      const movie = movies[i];

      const movieCard = document.createElement("div");
      movieCard.className = "col-md-3";
      movieCard.innerHTML = `
      <div class="movie-card">
      <a href="details.html?title=${encodeURIComponent(movie.title)}&year=${movie.releaseYear}&genre=${movie.genre.join(',')}&overview=${encodeURIComponent(movie.overview)}&image=${movie.imageSrc}">
        <img src="${movie.imageSrc}" alt="${movie.title}">

        <div class="temp">
          <h2>${movie.title}</h2>
          <p class="release">Released: ${movie.releaseYear} </p>
          <p class="genere">${movie.genre}</p>
        </div>
        <div class="movie-details">
          <h4>Overview</h4>
          <p>${movie.overview}</p>
        </div>
        </a>
      </div>
    `;

      // Add the movie card to the current row
      newRow.appendChild(movieCard);
}




//Genre Buttons

// Add event listeners to genre buttons
document.getElementById("all-button").addEventListener("click", function() {
  searchMoviesG('All');
});

document.getElementById("action-button").addEventListener("click", function() {
  searchMoviesG('Action');
});

document.getElementById("comedy-button").addEventListener("click", function() {
  searchMoviesG('Comedy');
});

document.getElementById("fantasy-button").addEventListener("click", function() {
  searchMoviesG('Fantasy');
});

document.getElementById("horror-button").addEventListener("click", function() {
  searchMoviesG('Horror');
});

document.getElementById("adventure-button").addEventListener("click", function() {
  searchMoviesG('Adventure');
});


function searchMoviesG(genre) {
  // Clear the movie-cards container
  movieCardsContainer.innerHTML = "";

  // Filter movies based on the selected genre
  const filteredMovies = movies.filter((movie) => {
    return genre === "All" || movie.genre.includes(genre);
  });

  // Display filtered movies with clickable links to movie details
  for (let i = 0; i < filteredMovies.length; i++) {
    if (i % columnsPerRow === 0) {
      var newRow = document.createElement("div");
      newRow.className = "row";
      movieCardsContainer.appendChild(newRow);
    }

    const movie = filteredMovies[i];

    const movieCard = document.createElement("div");
    movieCard.className = "col-md-3";
    movieCard.innerHTML = `
      <div class="movie-card">
        <a href="details.html?title=${encodeURIComponent(movie.title)}&year=${movie.releaseYear}&genre=${movie.genre.join(',')}&overview=${encodeURIComponent(movie.overview)}&image=${movie.imageSrc}">
          <img src="${movie.imageSrc}" alt="${movie.title}">
          <div class="temp">
            <h2>${movie.title}</h2>
            <p class="release">Released: ${movie.releaseYear}</p>
            <p class="genere">${movie.genre.join(', ')}</p>
          </div>
          <div class="movie-details">
            <h4>Overview</h4>
            <p>${movie.overview}</p>
          </div>
      </div>
    `;

    newRow.appendChild(movieCard);
  }
}

