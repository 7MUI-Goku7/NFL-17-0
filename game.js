/* =========================================================
   NFL 17-0
   Version 0.1 - Draft Prototype
   ========================================================= */

/* ---------------------------------------------------------
   TEST DATABASE
   This is intentionally small.
   We'll replace/expand this with the real NFL database later.
--------------------------------------------------------- */

const TEAMS = {
  cowboys: {
    name: "Dallas Cowboys",
    abbreviation: "DAL"
  },

  packers: {
    name: "Green Bay Packers",
    abbreviation: "GB"
  },

  patriots: {
    name: "New England Patriots",
    abbreviation: "NE"
  },

  bears: {
    name: "Chicago Bears",
    abbreviation: "CHI"
  },

  lions: {
    name: "Detroit Lions",
    abbreviation: "DET"
  },

  vikings: {
    name: "Minnesota Vikings",
    abbreviation: "MIN"
  },

  browns: {
    name: "Cleveland Browns",
    abbreviation: "CLE"
  },

  commanders: {
    name: "Washington Commanders",
    abbreviation: "WAS"
  },

  broncos: {
    name: "Denver Broncos",
    abbreviation: "DEN"
  },

  steelers: {
    name: "Pittsburgh Steelers",
    abbreviation: "PIT"
  }
};


/*
   Each player has:

   id
   name
   team
   positions
   rating
   era
   description

   Later this structure will become much more detailed.
*/

const PLAYERS = [

  /* =========================
     COWBOYS
  ========================= */

  {
    id: "staubach",
    name: "Roger Staubach",
    team: "cowboys",
    positions: ["QB"],
    rating: 98,
    era: "1970s",
    description: "Hall of Fame quarterback"
  },

  {
    id: "aikman",
    name: "Troy Aikman",
    team: "cowboys",
    positions: ["QB"],
    rating: 96,
    era: "1990s",
    description: "Three-time Super Bowl champion"
  },

  {
    id: "emmitt",
    name: "Emmitt Smith",
    team: "cowboys",
    positions: ["RB"],
    rating: 99,
    era: "1990s",
    description: "All-time NFL rushing leader"
  },

  {
    id: "irvin",
    name: "Michael Irvin",
    team: "cowboys",
    positions: ["WR"],
    rating: 97,
    era: "1990s",
    description: "Hall of Fame receiver"
  },

  {
    id: "witten",
    name: "Jason Witten",
    team: "cowboys",
    positions: ["TE"],
    rating: 95,
    era: "2000s",
    description: "Elite Cowboys tight end"
  },

  {
    id: "larry-allen",
    name: "Larry Allen",
    team: "cowboys",
    positions: ["OL"],
    rating: 99,
    era: "1990s",
    description: "Hall of Fame offensive lineman"
  },

  {
    id: "lilly",
    name: "Bob Lilly",
    team: "cowboys",
    positions: ["DT", "DL"],
    rating: 99,
    era: "1960s",
    description: "Hall of Fame defensive tackle"
  },

  {
    id: "deion",
    name: "Deion Sanders",
    team: "cowboys",
    positions: ["CB", "DB"],
    rating: 99,
    era: "1990s",
    description: "Hall of Fame cornerback"
  },


  /* =========================
     PACKERS
  ========================= */

  {
    id: "starr",
    name: "Bart Starr",
    team: "packers",
    positions: ["QB"],
    rating: 98,
    era: "1960s",
    description: "Two-time Super Bowl MVP"
  },

  {
    id: "hutson",
    name: "Don Hutson",
    team: "packers",
    positions: ["WR"],
    rating: 99,
    era: "1930s",
    description: "Historic Hall of Fame receiver"
  },

  {
    id: "green",
    name: "Ahman Green",
    team: "packers",
    positions: ["RB"],
    rating: 92,
    era: "2000s",
    description: "Elite Packers running back"
  },

  {
    id: "favre",
    name: "Brett Favre",
    team: "packers",
    positions: ["QB"],
    rating: 98,
    era: "1990s",
    description: "Three-time MVP"
  },


  /* =========================
     PATRIOTS
  ========================= */

  {
    id: "brady",
    name: "Tom Brady",
    team: "patriots",
    positions: ["QB"],
    rating: 100,
    era: "2000s",
    description: "Seven-time Super Bowl champion"
  },

  {
    id: "gronk",
    name: "Rob Gronkowski",
    team: "patriots",
    positions: ["TE"],
    rating: 99,
    era: "2010s",
    description: "Dominant tight end"
  },

  {
    id: "moss",
    name: "Randy Moss",
    team: "patriots",
    positions: ["WR"],
    rating: 99,
    era: "2000s",
    description: "Elite deep threat"
  },

  {
    id: "welker",
    name: "Wes Welker",
    team: "patriots",
    positions: ["WR"],
    rating: 93,
    era: "2000s",
    description: "Elite slot receiver"
  },


  /* =========================
     BEARS
  ========================= */

  {
    id: "payton",
    name: "Walter Payton",
    team: "bears",
    positions: ["RB"],
    rating: 100,
    era: "1970s",
    description: "Hall of Fame running back"
  },

  {
    id: "luckman",
    name: "Sid Luckman",
    team: "bears",
    positions: ["QB"],
    rating: 97,
    era: "1940s",
    description: "Hall of Fame quarterback"
  },


  /* =========================
     LIONS
  ========================= */

  {
    id: "sanders",
    name: "Barry Sanders",
    team: "lions",
    positions: ["RB"],
    rating: 100,
    era: "1990s",
    description: "Hall of Fame running back"
  },


  /* =========================
     VIKINGS
  ========================= */

  {
    id: "randy-moss",
    name: "Randy Moss",
    team: "vikings",
    positions: ["WR"],
    rating: 100,
    era: "1990s",
    description: "Historic deep threat"
  },

  {
    id: "cunningham",
    name: "Randall Cunningham",
    team: "vikings",
    positions: ["QB"],
    rating: 94,
    era: "1990s",
    description: "Dynamic dual-threat quarterback"
  },


  /* =========================
     BROWNS
  ========================= */

  {
    id: "jim-brown",
    name: "Jim Brown",
    team: "browns",
    positions: ["RB"],
    rating: 100,
    era: "1950s",
    description: "One of football's greatest running backs"
  },

  {
    id: "otto",
    name: "Otto Graham",
    team: "browns",
    positions: ["QB"],
    rating: 99,
    era: "1950s",
    description: "Hall of Fame quarterback"
  },


  /* =========================
     COMMANDERS
  ========================= */

  {
    id: "baugh",
    name: "Sammy Baugh",
    team: "commanders",
    positions: ["QB", "P", "DB", "CB"],
    rating: 100,
    era: "1930s",
    description: "Historic two-way star"
  },

  {
    id: "clark",
    name: "Gary Clark",
    team: "commanders",
    positions: ["WR"],
    rating: 94,
    era: "1980s",
    description: "Three-time Pro Bowler"
  },


  /* =========================
     BRONCOS
  ========================= */

  {
    id: "elway",
    name: "John Elway",
    team: "broncos",
    positions: ["QB"],
    rating: 99,
    era: "1980s",
    description: "Two-time Super Bowl champion"
  },

  {
    id: "td",
    name: "Terrell Davis",
    team: "broncos",
    positions: ["RB"],
    rating: 98,
    era: "1990s",
    description: "Super Bowl-winning running back"
  },

  {
    id: "sharpe",
    name: "Shannon Sharpe",
    team: "broncos",
    positions: ["TE"],
    rating: 97,
    era: "1990s",
    description: "Hall of Fame tight end"
  },


  /* =========================
     STEELERS
  ========================= */

  {
    id: "bradshaw",
    name: "Terry Bradshaw",
    team: "steelers",
    positions: ["QB"],
    rating: 97,
    era: "1970s",
    description: "Four-time Super Bowl champion"
  },

  {
    id: "harris",
    name: "Franco Harris",
    team: "steelers",
    positions: ["RB"],
    rating: 96,
    era: "1970s",
    description: "Hall of Fame running back"
  }

];


/* ---------------------------------------------------------
   GAME STATE
--------------------------------------------------------- */

let gameState = {

  mode: "alltime",

  difficulty: "rookie",

  timerSetting: 0,

  positions: {
    QB: 1,
    RB: 1,
    WR: 2,
    TE: 1,
    FLEX: 2
  },

  remainingTeams: [],

  currentTeam: null,

  draftedPlayers: [],

  roster: [],

  draftHistory: [],

  currentSlot: null,

  timer: null,

  timeRemaining: 0

};


/* ---------------------------------------------------------
   SCREEN MANAGEMENT
--------------------------------------------------------- */

function showScreen(id) {

  document.querySelectorAll(".screen").forEach(screen => {
    screen.classList.remove("active");
  });

  document.getElementById(id).classList.add("active");

  window.scrollTo(0, 0);
}


function showHome() {
  showScreen("home-screen");
}


function showSetup() {
  showScreen("setup-screen");
}


function showHowToPlay() {
  showScreen("how-screen");
}


/* ---------------------------------------------------------
   MODE SELECTION
--------------------------------------------------------- */

document.querySelectorAll(".mode-btn").forEach(button => {

  button.addEventListener("click", () => {

    document.querySelectorAll(".mode-btn").forEach(btn => {
      btn.classList.remove("selected");
    });

    button.classList.add("selected");

    gameState.mode = button.dataset.mode;

  });

});


/* ---------------------------------------------------------
   ROSTER SETUP
--------------------------------------------------------- */

function changePosition(position, amount) {

  const current = gameState.positions[position];

  const newValue = Math.max(0, Math.min(5, current + amount));

  gameState.positions[position] = newValue;

  document.getElementById(`count-${position}`).textContent = newValue;
}


/* ---------------------------------------------------------
   BUILD SLOT LIST
--------------------------------------------------------- */

function getRosterSlots() {

  const slots = [];

  Object.entries(gameState.positions).forEach(([position, count]) => {

    for (let i = 0; i < count; i++) {

      slots.push({
        position,
        index: i + 1
      });

    }

  });

  return slots;
}


/* ---------------------------------------------------------
   POSITION COMPATIBILITY
--------------------------------------------------------- */

function isPositionCompatible(player, slot) {

  if (slot === "FLEX") {

    return player.positions.some(position =>
      ["QB", "RB", "HB", "FB", "WR", "TE"].includes(position)
    );

  }

  if (slot === "DL") {

    return player.positions.some(position =>
      ["DL", "DE", "DT"].includes(position)
    );

  }

  if (slot === "DB") {

    return player.positions.some(position =>
      ["DB", "CB", "S"].includes(position)
    );

  }

  if (slot === "OL") {

    return player.positions.some(position =>
      ["OL", "OT", "OG", "C", "LT", "LG", "RG", "RT"].includes(position)
    );

  }

  return player.positions.includes(slot);
}


/* ---------------------------------------------------------
   FIND NEXT EMPTY SLOT
--------------------------------------------------------- */

function findNextEmptySlot() {

  const slots = getRosterSlots();

  for (const slot of slots) {

    const filled = gameState.roster.some(
      player => player.slot === slot.position &&
                player.slotIndex === slot.index
    );

    if (!filled) {
      return slot;
    }

  }

  return null;
}


/* ---------------------------------------------------------
   START GAME
--------------------------------------------------------- */

function startGame() {

  gameState.difficulty =
    document.getElementById("difficulty").value;

  gameState.timerSetting =
    Number(document.getElementById("timer-setting").value);

  gameState.remainingTeams =
    Object.keys(TEAMS);

  gameState.draftedPlayers = [];

  gameState.roster = [];

  gameState.draftHistory = [];

  gameState.currentTeam = null;

  gameState.currentSlot = null;

  clearInterval(gameState.timer);

  const slots = getRosterSlots();

  if (slots.length === 0) {

    alert("Your roster needs at least one position.");

    return;
  }

  showScreen("draft-screen");

  nextDraft();

}


/* ---------------------------------------------------------
   RANDOM TEAM
--------------------------------------------------------- */

function getRandomTeam() {

  if (gameState.remainingTeams.length === 0) {
    return null;
  }

  const index =
    Math.floor(Math.random() * gameState.remainingTeams.length);

  const teamId =
    gameState.remainingTeams[index];

  gameState.remainingTeams.splice(index, 1);

  return teamId;
}


/* ---------------------------------------------------------
   NEXT DRAFT
--------------------------------------------------------- */

function nextDraft() {

  clearInterval(gameState.timer);

  const nextSlot = findNextEmptySlot();

  if (!nextSlot) {

    finishDraft();

    return;
  }

  gameState.currentSlot = nextSlot;

  let attempts = 0;

  let selectedTeam = null;

  /*
     Keep looking for a team that has at least one player
     capable of filling the current position.
  */

  while (attempts < 100 && gameState.remainingTeams.length > 0) {

    const teamId = getRandomTeam();

    const eligible = PLAYERS.filter(player =>
      player.team === teamId &&
      !gameState.draftedPlayers.includes(player.id) &&
      isPositionCompatible(player, nextSlot.position)
    );

    if (eligible.length > 0) {

      selectedTeam = teamId;

      break;

    }

    /*
       If this team can't fill the slot, it is returned
       to the available pool.
    */

    gameState.remainingTeams.push(teamId);

    attempts++;

  }

  if (!selectedTeam) {

    alert(
      "The current test database doesn't contain enough players " +
      "for this roster configuration. Try a smaller roster."
    );

    showSetup();

    return;
  }

  gameState.currentTeam = selectedTeam;

  document.getElementById("current-team").textContent =
    TEAMS[selectedTeam].name.toUpperCase();

  document.getElementById("current-team-subtitle").textContent =
    `Choose a player for ${nextSlot.position}`;

  document.getElementById("player-search").value = "";

  updateProgress();

  renderPlayers();

  startTimer();

  renderHistory();

  renderCurrentRoster();
}


/* ---------------------------------------------------------
   GET ELIGIBLE PLAYERS
--------------------------------------------------------- */

function getEligiblePlayers() {

  const slot = gameState.currentSlot;

  if (!slot) return [];

  return PLAYERS.filter(player =>

    player.team === gameState.currentTeam &&

    !gameState.draftedPlayers.includes(player.id) &&

    isPositionCompatible(player, slot.position)

  );

}


/* ---------------------------------------------------------
   RENDER PLAYERS
--------------------------------------------------------- */

function renderPlayers() {

  const container =
    document.getElementById("player-list");

  const search =
    document
      .getElementById("player-search")
      .value
      .toLowerCase()
      .trim();

  let players = getEligiblePlayers();

  if (search) {

    players = players.filter(player =>
      player.name.toLowerCase().includes(search) ||
      player.positions.some(position =>
        position.toLowerCase().includes(search)
      )
    );

  }

  container.innerHTML = "";

  if (players.length === 0) {

    container.innerHTML = `
      <div class="empty-message">
        No eligible players found.
      </div>
    `;

    return;
  }


  /*
     Highest-rated players appear first for now.
     Later, Expert mode will remove rating-based sorting.
  */

  players.sort((a, b) => b.rating - a.rating);


  players.forEach(player => {

    const card = document.createElement("div");

    card.className = "player-card";

    let ratingHTML = "";

    if (gameState.difficulty === "rookie") {

      ratingHTML = `
        <div class="player-rating">
          ${player.rating}
        </div>
      `;

    }

    card.innerHTML = `

      <div class="player-info">

        <div class="player-name">
          ${player.name}
        </div>

        <div class="player-meta">
          ${player.positions.join(" / ")}
          • ${player.era}
        </div>

        ${
          gameState.difficulty !== "expert"
            ? `<div class="player-meta">${player.description}</div>`
            : ""
        }

      </div>

      ${ratingHTML}

      <button
        class="pick-btn"
        onclick="draftPlayer('${player.id}')"
      >
        DRAFT
      </button>

    `;

    container.appendChild(card);

  });

}


/* ---------------------------------------------------------
   DRAFT PLAYER
--------------------------------------------------------- */

function draftPlayer(playerId) {

  const player =
    PLAYERS.find(p => p.id === playerId);

  if (!player) return;

  if (gameState.draftedPlayers.includes(player.id)) {

    alert("That player has already been drafted.");

    return;
  }

  const slot =
    gameState.currentSlot;

  gameState.draftedPlayers.push(player.id);

  gameState.roster.push({

    playerId: player.id,

    name: player.name,

    team: gameState.currentTeam,

    slot: slot.position,

    slotIndex: slot.index,

    rating: player.rating

  });

  gameState.draftHistory.push({

    team: gameState.currentTeam,

    player: player.name,

    position: slot.position

  });

  clearInterval(gameState.timer);

  nextDraft();

}


/* ---------------------------------------------------------
   TIMER
--------------------------------------------------------- */

function startTimer() {

  clearInterval(gameState.timer);

  const timerElement =
    document.getElementById("timer");

  if (gameState.timerSetting === 0) {

    timerElement.textContent = "—";

    return;
  }

  gameState.timeRemaining =
    gameState.timerSetting;

  timerElement.textContent =
    gameState.timeRemaining;

  gameState.timer = setInterval(() => {

    gameState.timeRemaining--;

    timerElement.textContent =
      gameState.timeRemaining;

    if (gameState.timeRemaining <= 0) {

      clearInterval(gameState.timer);

      /*
         For Version 0.1, timeout automatically selects
         the highest-rated eligible player.
      */

      const players =
        getEligiblePlayers()
          .sort((a, b) => b.rating - a.rating);

      if (players.length > 0) {

        draftPlayer(players[0].id);

      }

    }

  }, 1000);

}


/* ---------------------------------------------------------
   PROGRESS
--------------------------------------------------------- */

function updateProgress() {

  const total =
    getRosterSlots().length;

  const current =
    gameState.roster.length;

  document.getElementById("draft-progress").textContent =
    `${current} / ${total}`;

}


/* ---------------------------------------------------------
   DRAFT HISTORY
--------------------------------------------------------- */

function renderHistory() {

  const container =
    document.getElementById("draft-history");

  container.innerHTML = "";

  gameState.draftHistory
    .slice()
    .reverse()
    .forEach((pick, index) => {

      const item =
        document.createElement("div");

      item.className = "history-item";

      item.innerHTML = `

        <div>
          <div class="history-team">
            ${TEAMS[pick.team].name}
          </div>

          <div class="history-player">
            ${pick.player}
          </div>
        </div>

        <strong>
          ${pick.position}
        </strong>

      `;

      container.appendChild(item);

    });

}


/* ---------------------------------------------------------
   CURRENT ROSTER
--------------------------------------------------------- */

function renderCurrentRoster() {

  const container =
    document.getElementById("current-roster");

  container.innerHTML = "";

  const slots =
    getRosterSlots();

  slots.forEach(slot => {

    const player =
      gameState.roster.find(p =>
        p.slot === slot.position &&
        p.slotIndex === slot.index
      );

    const item =
      document.createElement("div");

    item.className = "roster-item";

    item.innerHTML = `

      <span class="roster-position">
        ${slot.position}
      </span>

      <span class="roster-player">
        ${player ? player.name : "EMPTY"}
      </span>

    `;

    container.appendChild(item);

  });

}


/* ---------------------------------------------------------
   FINISH DRAFT
--------------------------------------------------------- */

function finishDraft() {

  clearInterval(gameState.timer);

  calculateTeamRating();

  renderFinalRoster();

  showScreen("complete-screen");

}


/* ---------------------------------------------------------
   TEAM RATING
--------------------------------------------------------- */

function calculateTeamRating() {

  if (gameState.roster.length === 0) {

    document.getElementById("team-overall")
      .textContent = "—";

    return;
  }

  const total =
    gameState.roster.reduce(
      (sum, player) => sum + player.rating,
      0
    );

  const average =
    total / gameState.roster.length;

  document.getElementById("team-overall")
    .textContent = average.toFixed(1);

}


/* ---------------------------------------------------------
   FINAL ROSTER
--------------------------------------------------------- */

function renderFinalRoster() {

  const container =
    document.getElementById("final-roster");

  container.innerHTML = "";

  gameState.roster.forEach(player => {

    const item =
      document.createElement("div");

    item.className = "roster-item";

    item.innerHTML = `

      <span class="roster-position">
        ${player.slot}
      </span>

      <span class="roster-player">
        ${player.name}
      </span>

    `;

    container.appendChild(item);

  });

}


/* ---------------------------------------------------------
   SIMULATION PREVIEW
--------------------------------------------------------- */

function showSimulationPreview() {

  showScreen("simulation-screen");

}


/* ---------------------------------------------------------
   BASIC SEASON SIMULATOR
---------------------------------------------------------

   This is deliberately simple for Version 0.1.

   The real simulator will eventually use:
   - player attributes
   - team-specific versions
   - offense/defense units
   - coaching
   - opponent ratings
   - historical team data
   - randomness
   - home field
   - matchup advantages
--------------------------------------------------------- */

function simulateSeason(mode) {

  const teamRating =
    Number(
      document
        .getElementById("team-overall")
        .textContent
    );

  const games = [];

  let wins = 0;

  let pointsFor = 0;

  let pointsAgainst = 0;


  for (let week = 1; week <= 17; week++) {

    let opponentRating;

    if (mode === "staircase") {

      opponentRating =
        70 + ((week - 1) * 1.6);

    } else {

      opponentRating =
        75 + Math.random() * 22;

    }

    const homeAdvantage =
      Math.random() <
