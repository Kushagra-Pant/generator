hindi = []
english = []
wikis = []

function loadEnglishMovies() {
  return fetch('english.txt')
    .then(response => response.text())
    .then(data => {
      const lines = data.split('\n');

      for (let i = 0; i < lines.length; i++) {
        const movie = lines[i].trim();
        english.push(movie);
      }
    });
}

function loadHindiMovies() {
  return fetch('hindi.txt')
    .then(response => response.text())
    .then(data => {
      const lines = data.split('\n');

      for (let i = 0; i < lines.length; i++) {
        const movie = lines[i].trim();
        hindi.push(movie);
      }
    });
}

loadEnglishMovies();
loadHindiMovies();

function generate(){
  movies = []
  if(document.getElementById('hin').checked)
  {
    movies = movies.concat(hindi)
  }
  if(document.getElementById('eng').checked)
  {
    movies = movies.concat(english)
  }
  if(movies.length > 0)
  {
    document.getElementById('error').innerHTML = ""
    document.getElementById('rhead').innerHTML = "And your movie is..."
    document.getElementById('result').innerHTML = movies[Math.floor(Math.random() * movies.length)]
  }
  else
  {
    document.getElementById('error').innerHTML = "⚠ You haven't selected a language"
    document.getElementById('rhead').innerHTML = ""
    document.getElementById('result').innerHTML = ""
  }
}

function loadWikis() {
  return fetch('wiki.txt')
    .then(response => response.text())
    .then(data => {
      const lines = data.split('\n');

      for (let i = 0; i < lines.length; i++) {
        const movie = lines[i].trim();
        wikis.push(movie);
      }
    });
}

loadWikis()

function wiki(){
  document.getElementById("wiki").innerHTML = wikis[Math.floor(Math.random()*wikis.length)]
}
