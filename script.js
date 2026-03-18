let allGames = [];

fetch('games.json')
  .then(res => res.json())
  .then(games => {
    allGames = games;
    displayGames(games);
  });

function displayGames(games) {
  const grid = document.getElementById('gameGrid');
  grid.innerHTML = "";

  games.forEach(game => {
    const card = document.createElement('div');
    card.className = 'card';

    card.onclick = () => {
      window.location.href = game.link;
    };

    card.innerHTML = `
      <img src="${game.image}">
      <div class="game-name">${game.name}</div>
    `;

    grid.appendChild(card);
  });
}

/* SEARCH FEATURE */
document.getElementById('search').addEventListener('input', (e) => {
  const value = e.target.value.toLowerCase();

  const filtered = allGames.filter(g =>
    g.name.toLowerCase().includes(value)
  );

  displayGames(filtered);
});