const boardSpaces = [
  { type: 'corner', name: 'Старт', price: 0, rent: 0, color: '#54e6a6' },
  { type: 'property', name: 'Поділ', price: 60, rent: 8, color: '#8b5cf6' },
  { type: 'chance', name: 'Шанс', price: 0, rent: 0, color: '#fbbf24' },
  { type: 'property', name: 'Львівська кава', price: 80, rent: 10, color: '#8b5cf6' },
  { type: 'tax', name: 'Податок', price: 100, rent: 0, color: '#ff6b6b' },
  { type: 'property', name: 'Дніпро', price: 100, rent: 12, color: '#0ea5e9' },
  { type: 'corner', name: 'Відпочинок', price: 0, rent: 0, color: '#58a6ff' },
  { type: 'property', name: 'Харків IT', price: 120, rent: 14, color: '#0ea5e9' },
  { type: 'utility', name: 'Електростанція', price: 150, rent: 18, color: '#94a3b8' },
  { type: 'property', name: 'Одеса порт', price: 140, rent: 16, color: '#10b981' },
  { type: 'chance', name: 'Скриня', price: 0, rent: 0, color: '#fbbf24' },
  { type: 'property', name: 'Карпати', price: 160, rent: 18, color: '#10b981' },
  { type: 'corner', name: 'Вʼязниця', price: 0, rent: 0, color: '#f97316' },
  { type: 'property', name: 'Вінниця', price: 180, rent: 20, color: '#ef4444' },
  { type: 'rail', name: 'Укрзалізниця', price: 200, rent: 25, color: '#64748b' },
  { type: 'property', name: 'Чернівці', price: 200, rent: 22, color: '#ef4444' },
  { type: 'tax', name: 'Комуналка', price: 80, rent: 0, color: '#ff6b6b' },
  { type: 'property', name: 'Київ Центр', price: 240, rent: 28, color: '#ec4899' },
  { type: 'corner', name: 'Паркінг', price: 0, rent: 0, color: '#a3e635' },
  { type: 'property', name: 'Печерськ', price: 260, rent: 30, color: '#ec4899' },
  { type: 'chance', name: 'Шанс', price: 0, rent: 0, color: '#fbbf24' },
  { type: 'property', name: 'Софіївська', price: 280, rent: 34, color: '#f59e0b' },
  { type: 'utility', name: 'Водоканал', price: 150, rent: 18, color: '#94a3b8' },
  { type: 'property', name: 'Майдан', price: 320, rent: 40, color: '#f59e0b' }
];

const playerColors = ['#54e6a6', '#58a6ff', '#ff7ab6', '#ffd166', '#a78bfa', '#fb7185'];
const chanceCards = [
  { text: 'Ви отримали грант для бізнесу: +₴120', amount: 120 },
  { text: 'Ремонт офісу: -₴90', amount: -90 },
  { text: 'Друзі скинулися на свято: +₴60', amount: 60 },
  { text: 'Штраф за паркування: -₴50', amount: -50 },
  { text: 'Вдалий продаж стартапу: +₴180', amount: 180 }
];

const pathPositions = [
  [7, 7], [7, 6], [7, 5], [7, 4], [7, 3], [7, 2], [7, 1],
  [6, 1], [5, 1], [4, 1], [3, 1], [2, 1], [1, 1],
  [1, 2], [1, 3], [1, 4], [1, 5], [1, 6], [1, 7],
  [2, 7], [3, 7], [4, 7], [5, 7], [6, 7]
];

const state = {
  roomId: '',
  role: 'offline',
  peer: null,
  connections: [],
  myId: crypto.randomUUID(),
  game: createGame(),
  hasRolled: false
};

const els = {
  board: document.querySelector('#board'),
  playerName: document.querySelector('#playerName'),
  roomCode: document.querySelector('#roomCode'),
  hostBtn: document.querySelector('#hostBtn'),
  joinBtn: document.querySelector('#joinBtn'),
  localBtn: document.querySelector('#localBtn'),
  rollBtn: document.querySelector('#rollBtn'),
  buyBtn: document.querySelector('#buyBtn'),
  endTurnBtn: document.querySelector('#endTurnBtn'),
  dice: document.querySelector('#dice'),
  playersList: document.querySelector('#playersList'),
  gameLog: document.querySelector('#gameLog'),
  turnBadge: document.querySelector('#turnBadge'),
  roomStatus: document.querySelector('#roomStatus'),
  copyLinkBtn: document.querySelector('#copyLinkBtn')
};

function createGame() {
  return {
    players: [],
    currentTurn: 0,
    spaces: boardSpaces.map((space) => ({ ...space, owner: null, houses: 0 })),
    log: ['Гра готова. Створіть кімнату або грайте локально.'],
    lastDice: null,
    started: false
  };
}

function safeName() {
  return els.playerName.value.trim() || `Гравець ${state.game.players.length + 1}`;
}

function normalizeRoom(value) {
  return value.trim().toLowerCase().replace(/[^a-z0-9а-яіїєґ-]/gi, '-').slice(0, 18) || `room-${Math.floor(Math.random() * 9000 + 1000)}`;
}

function addPlayer(id, name) {
  if (state.game.players.some((player) => player.id === id)) return;
  const player = {
    id,
    name,
    money: 1500,
    position: 0,
    color: playerColors[state.game.players.length % playerColors.length],
    bankrupt: false
  };
  state.game.players.push(player);
  state.game.started = true;
  addLog(`${name} приєднався до партії.`);
}

function addLog(message) {
  state.game.log.unshift(`${new Date().toLocaleTimeString('uk-UA', { hour: '2-digit', minute: '2-digit' })} — ${message}`);
  state.game.log = state.game.log.slice(0, 60);
}

function currentPlayer() {
  return state.game.players[state.game.currentTurn];
}

function isMyTurn() {
  const player = currentPlayer();
  return player && player.id === state.myId;
}

function canControlGame() {
  return state.role === 'host' || state.role === 'offline';
}

function renderBoard() {
  els.board.innerHTML = '';
  const template = document.querySelector('#cellTemplate');
  state.game.spaces.forEach((space, index) => {
    const cell = template.content.firstElementChild.cloneNode(true);
    const [row, col] = pathPositions[index];
    cell.style.gridRow = row;
    cell.style.gridColumn = col;
    cell.querySelector('.cell-color').style.background = space.color;
    cell.querySelector('.cell-name').textContent = space.name;
    cell.querySelector('.cell-price').textContent = space.price ? `₴${space.price} • рента ₴${rentFor(space)}` : labelFor(space.type);

    if (space.owner) {
      const owner = state.game.players.find((player) => player.id === space.owner);
      const ownerDot = document.createElement('span');
      ownerDot.className = 'owner-dot';
      ownerDot.style.background = owner?.color || '#fff';
      cell.append(ownerDot);
    }

    if (space.houses) {
      const houses = document.createElement('span');
      houses.className = 'house-count';
      houses.textContent = `🏠×${space.houses}`;
      cell.append(houses);
    }

    const tokenBox = cell.querySelector('.tokens');
    state.game.players.filter((player) => player.position === index && !player.bankrupt).forEach((player) => {
      const token = document.createElement('span');
      token.className = 'token';
      token.title = player.name;
      token.style.background = player.color;
      tokenBox.append(token);
    });
    els.board.append(cell);
  });

  const center = document.createElement('article');
  center.className = 'cell center';
  center.innerHTML = '<h2>Банк міста</h2><p>Купуйте райони, збирайте ренту, будуйте будинки й не збанкрутуйте.</p>';
  els.board.append(center);
}

function labelFor(type) {
  return ({ corner: 'кутова клітинка', chance: 'картка', tax: 'сплатити', utility: 'сервіс', rail: 'транспорт' })[type] || '';
}

function rentFor(space) {
  return space.rent + (space.houses * Math.ceil(space.rent * 0.55));
}

function renderPlayers() {
  els.playersList.innerHTML = '';
  state.game.players.forEach((player, index) => {
    const holdings = state.game.spaces.filter((space) => space.owner === player.id).length;
    const card = document.createElement('article');
    card.className = `player-card ${index === state.game.currentTurn ? 'active' : ''}`;
    card.innerHTML = `
      <div class="player-top">
        <span class="player-chip"><span class="token" style="background:${player.color}"></span>${player.name}</span>
        <strong>₴${player.money}</strong>
      </div>
      <small>${player.bankrupt ? 'Банкрут' : `Позиція: ${state.game.spaces[player.position].name} • Активи: ${holdings}`}</small>
    `;
    els.playersList.append(card);
  });
}

function renderLog() {
  els.gameLog.innerHTML = state.game.log.map((item) => `<div class="log-item">${item}</div>`).join('');
}

function renderControls() {
  const player = currentPlayer();
  els.turnBadge.textContent = player ? `Хід: ${player.name}` : 'Очікування';
  els.dice.textContent = state.game.lastDice ? `${state.game.lastDice[0]} + ${state.game.lastDice[1]}` : '—';
  const activeSpace = player ? state.game.spaces[player.position] : null;
  els.rollBtn.disabled = !state.game.players.length || !isMyTurn() || state.hasRolled;
  els.endTurnBtn.disabled = !state.game.players.length || !isMyTurn() || !state.hasRolled;
  els.buyBtn.disabled = !state.game.players.length || !isMyTurn() || !activeSpace || !canBuyOrBuild(player, activeSpace);
}

function render() {
  renderBoard();
  renderPlayers();
  renderLog();
  renderControls();
}

function canBuyOrBuild(player, space) {
  if (!space || ['corner', 'chance', 'tax'].includes(space.type)) return false;
  if (!space.owner) return player.money >= space.price;
  return space.owner === player.id && space.houses < 4 && player.money >= Math.ceil(space.price * 0.55);
}

function rollDice(playerId = state.myId) {
  const player = currentPlayer();
  if (!player || player.id !== playerId || state.hasRolled) return;
  const dice = [randomDie(), randomDie()];
  const oldPosition = player.position;
  player.position = (player.position + dice[0] + dice[1]) % state.game.spaces.length;
  if (player.position < oldPosition) {
    player.money += 200;
    addLog(`${player.name} пройшов Старт і отримав ₴200.`);
  }
  state.game.lastDice = dice;
  state.hasRolled = true;
  addLog(`${player.name} кинув ${dice[0]} + ${dice[1]} і став на «${state.game.spaces[player.position].name}».`);
  resolveSpace(player);
  syncAndRender();
}

function randomDie() {
  return Math.floor(Math.random() * 6) + 1;
}

function resolveSpace(player) {
  const space = state.game.spaces[player.position];
  if (space.type === 'tax') {
    player.money -= space.price;
    addLog(`${player.name} сплатив ₴${space.price}: ${space.name}.`);
  } else if (space.type === 'chance') {
    const card = chanceCards[Math.floor(Math.random() * chanceCards.length)];
    player.money += card.amount;
    addLog(`${player.name}: ${card.text}.`);
  } else if (space.owner && space.owner !== player.id) {
    const owner = state.game.players.find((item) => item.id === space.owner);
    const rent = rentFor(space);
    player.money -= rent;
    if (owner) owner.money += rent;
    addLog(`${player.name} заплатив ₴${rent} ренти гравцю ${owner?.name || 'власник'}.`);
  }
  if (player.money < 0) markBankrupt(player);
}

function markBankrupt(player) {
  player.bankrupt = true;
  state.game.spaces.forEach((space) => {
    if (space.owner === player.id) {
      space.owner = null;
      space.houses = 0;
    }
  });
  addLog(`${player.name} збанкрутував. Його майно повернулося банку.`);
}

function buyOrBuild(playerId = state.myId) {
  const player = currentPlayer();
  if (!player || player.id !== playerId) return;
  const space = state.game.spaces[player.position];
  if (!canBuyOrBuild(player, space)) return;
  if (!space.owner) {
    player.money -= space.price;
    space.owner = player.id;
    addLog(`${player.name} купив «${space.name}» за ₴${space.price}.`);
  } else {
    const cost = Math.ceil(space.price * 0.55);
    player.money -= cost;
    space.houses += 1;
    addLog(`${player.name} збудував будинок на «${space.name}» за ₴${cost}.`);
  }
  syncAndRender();
}

function endTurn(playerId = state.myId) {
  const player = currentPlayer();
  if (!player || player.id !== playerId || !state.hasRolled) return;
  advanceTurn();
  state.hasRolled = false;
  syncAndRender();
}

function advanceTurn() {
  if (!state.game.players.length) return;
  let guard = 0;
  do {
    state.game.currentTurn = (state.game.currentTurn + 1) % state.game.players.length;
    guard += 1;
  } while (currentPlayer()?.bankrupt && guard <= state.game.players.length);
}

function syncAndRender() {
  broadcast({ type: 'state', game: state.game, hasRolled: state.hasRolled });
  render();
}

function broadcast(payload) {
  if (state.role !== 'host') return;
  state.connections.forEach((connection) => connection.open && connection.send(payload));
}

function hostRoom() {
  state.role = 'host';
  state.roomId = normalizeRoom(els.roomCode.value);
  els.roomCode.value = state.roomId;
  addPlayer(state.myId, safeName());
  setupPeer(`monopoly-${state.roomId}`);
  els.roomStatus.textContent = `Хост: ${state.roomId}`;
  updateUrlRoom();
  render();
}

function joinRoom() {
  state.role = 'guest';
  state.roomId = normalizeRoom(els.roomCode.value);
  els.roomCode.value = state.roomId;
  setupPeer();
  els.roomStatus.textContent = `Підключення до ${state.roomId}…`;
  updateUrlRoom();
}

function setupPeer(id) {
  if (!window.Peer) {
    addLog('PeerJS не завантажився. Перевірте інтернет або грайте локально.');
    render();
    return;
  }
  state.peer?.destroy();
  state.peer = new Peer(id);

  state.peer.on('open', () => {
    if (state.role === 'guest') connectToHost();
  });

  state.peer.on('connection', (connection) => {
    state.connections.push(connection);
    connection.on('data', (payload) => handleMessage(payload, connection));
    connection.on('open', () => connection.send({ type: 'state', game: state.game, hasRolled: state.hasRolled }));
  });

  state.peer.on('error', (error) => {
    addLog(`Помилка кімнати: ${error.type || error.message}.`);
    render();
  });
}

function connectToHost() {
  const connection = state.peer.connect(`monopoly-${state.roomId}`);
  state.connections = [connection];
  connection.on('open', () => {
    els.roomStatus.textContent = `У кімнаті: ${state.roomId}`;
    connection.send({ type: 'join', id: state.myId, name: safeName() });
  });
  connection.on('data', (payload) => handleMessage(payload, connection));
  connection.on('close', () => {
    addLog('Зʼєднання з хостом закрито.');
    render();
  });
}

function handleMessage(payload, connection) {
  if (!payload?.type) return;
  if (payload.type === 'join' && state.role === 'host') {
    addPlayer(payload.id, payload.name);
    connection.send({ type: 'state', game: state.game, hasRolled: state.hasRolled });
    syncAndRender();
  }
  if (payload.type === 'state') {
    state.game = payload.game;
    state.hasRolled = payload.hasRolled && isMyTurn();
    render();
  }
  if (payload.type === 'action' && state.role === 'host') {
    runRemoteAction(payload.action, payload.playerId);
  }
}

function runRemoteAction(action, playerId) {
  if (currentPlayer()?.id !== playerId) return;
  if (action === 'roll') rollDice(playerId);
  if (action === 'buy') buyOrBuild(playerId);
  if (action === 'end') endTurn(playerId);
}

function requestAction(action) {
  if (state.role === 'guest') {
    state.connections[0]?.send({ type: 'action', action, playerId: state.myId });
    return true;
  }
  return false;
}

function startLocalGame() {
  state.role = 'offline';
  state.peer?.destroy();
  state.game = createGame();
  state.hasRolled = false;
  addPlayer(state.myId, safeName());
  addPlayer('local-2', 'Друг 2');
  els.roomStatus.textContent = 'Локальна партія';
  render();
}

function updateUrlRoom() {
  const url = new URL(window.location.href);
  url.searchParams.set('room', state.roomId);
  history.replaceState(null, '', url);
}

function copyLink() {
  const url = new URL(window.location.href);
  if (state.roomId) url.searchParams.set('room', state.roomId);
  navigator.clipboard?.writeText(url.toString());
  addLog('Посилання на кімнату скопійовано.');
  render();
}

function hydrateFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const room = params.get('room');
  if (room) els.roomCode.value = room;
  els.playerName.value = localStorage.getItem('monopoly-name') || '';
}

els.playerName.addEventListener('input', () => localStorage.setItem('monopoly-name', els.playerName.value));
els.hostBtn.addEventListener('click', hostRoom);
els.joinBtn.addEventListener('click', joinRoom);
els.localBtn.addEventListener('click', startLocalGame);
els.copyLinkBtn.addEventListener('click', copyLink);
els.rollBtn.addEventListener('click', () => requestAction('roll') || rollDice());
els.buyBtn.addEventListener('click', () => requestAction('buy') || buyOrBuild());
els.endTurnBtn.addEventListener('click', () => requestAction('end') || endTurn());

hydrateFromUrl();
render();
