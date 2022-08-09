class User {
  constructor(_username) {
    this.username = _username;
    this.games = [];
  }

  gameover() {
    return new Date();
  }
}

// Arreglo de usuarios:
let users = [];

// Comprobar si existe el item "pitrainer.users"
if (localStorage.getItem("pitrainer.users") !== null) {
  const cadena_texto_users = localStorage.getItem("pitrainer.users");

  users = JSON.parse(cadena_texto_users);
}

function addUserToLocalStorage(user) {
  users.push(user);
  // lo sobreescribo en el LS:
  localStorage.setItem("pitrainer.users", JSON.stringify(users));
}

function updateUserLocalStorage(users) {
  localStorage.removeItem("pitrainer.users");
  localStorage.setItem("pitrainer.users", JSON.stringify(users));
}

const button_clear = document.querySelector("#clear");

if (users.length !== 0) {
  div_history = document.querySelector("#history");
  div_history.style.display = "block";
  createTableHistoric();
  button_clear.disabled = false;
}

// Botón para reiniciar la tabla de historic:
button_clear.addEventListener("click", function () {
  localStorage.removeItem("pitrainer.users");
  window.location.reload();
});

function createTableHistoric(arrayUsers = users) {
  // const table_history = document.querySelector("#history > table");
  const container_history = document.querySelector("#history_container");

  container_history.innerHTML = "";

  arrayUsers.forEach((user) => {
    // crear los nombres
    const h4 = document.createElement("h4");
    h4.innerText = user.username;

    container_history.append(h4);
    // crear la table
    const table = document.createElement("table"); // <table></table>
    const thead = document.createElement("thead"); // <thead></thead>

    thead.innerHTML = `
		<tr>
			<th>Score</th>
			<th>Attempts</th>
			<th>✅ </th>
			<th>❌ </th>
			<th>Game Over</th>
		</tr>	
		`;

    const tbody = document.createElement("tbody");
    // entonces debemos iterar lo que es user.games

    user.games.forEach((game) => {
      tbody.innerHTML += `
				<tr>
					<td>${game.score.toFixed(2)}</td>
					<td>${game.attempts}</td>
					<td>${game.success_attempts}</td>
					<td>${game.failed_attempts}</td>
					<td>${new Date(game.gameover_at).toLocaleString("es-PE", {
            weekday: "short",
            year: "2-digit",
            month: "short",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
          })}</td>
				</tr>
			`;
    });

    table.append(thead);
    table.append(tbody);
    container_history.append(table);
  });
}