const categoryStyles = {
  technology: { label: 'Технології', color: '#2563eb', tint: '#eff6ff', icon: '💻' },
  auto: { label: 'Авто', color: '#dc2626', tint: '#fef2f2', icon: '🚗' },
  food: { label: 'Їжа', color: '#ea580c', tint: '#fff7ed', icon: '🍔' },
  fashion: { label: 'Мода', color: '#db2777', tint: '#fdf2f8', icon: '👟' },
  entertainment: { label: 'Розваги', color: '#7c3aed', tint: '#f5f3ff', icon: '🎮' },
  travel: { label: 'Подорожі', color: '#16a34a', tint: '#f0fdf4', icon: '✈️' },
  energy: { label: 'Енергія', color: '#0891b2', tint: '#ecfeff', icon: '⚡' },
  finance: { label: 'Фінанси', color: '#ca8a04', tint: '#fefce8', icon: '🏦' },
  luxury: { label: 'Люкс', color: '#334155', tint: '#f8fafc', icon: '💎' },
  service: { label: 'Сервіси', color: '#64748b', tint: '#f8fafc', icon: '🛠️' },
  special: { label: 'Події', color: '#14b8a6', tint: '#f0fdfa', icon: '❔' }
};

const boardSpaces = [
  { type: 'corner', name: 'Старт', price: 0, rent: 0, category: 'special' },
  { type: 'property', name: 'ByteLab', price: 60, rent: 8, category: 'technology' },
  { type: 'chance', name: 'Шанс', price: 0, rent: 0, category: 'special' },
  { type: 'property', name: 'Cloudy', price: 80, rent: 10, category: 'technology' },
  { type: 'tax', name: 'Податок', price: 100, rent: 0, category: 'service' },
  { type: 'rail', name: 'HyperRail', price: 200, rent: 25, category: 'service' },
  { type: 'property', name: 'Volt Motors', price: 100, rent: 12, category: 'auto' },
  { type: 'property', name: 'AutoDrive', price: 120, rent: 14, category: 'auto' },
  { type: 'utility', name: 'Електромережа', price: 150, rent: 18, category: 'energy' },
  { type: 'property', name: 'TurboCar', price: 140, rent: 16, category: 'auto' },
  { type: 'corner', name: 'Відпочинок', price: 0, rent: 0, category: 'special' },
  { type: 'property', name: 'Burger Hub', price: 140, rent: 16, category: 'food' },
  { type: 'chance', name: 'Скриня', price: 0, rent: 0, category: 'special' },
  { type: 'property', name: 'Pizza Go', price: 160, rent: 18, category: 'food' },
  { type: 'property', name: 'Coffee Craft', price: 180, rent: 20, category: 'food' },
  { type: 'rail', name: 'SkyLine', price: 200, rent: 25, category: 'service' },
  { type: 'property', name: 'SneakerPro', price: 180, rent: 20, category: 'fashion' },
  { type: 'property', name: 'UrbanWear', price: 200, rent: 22, category: 'fashion' },
  { type: 'tax', name: 'Комуналка', price: 120, rent: 0, category: 'service' },
  { type: 'property', name: 'LuxeFit', price: 220, rent: 24, category: 'fashion' },
  { type: 'corner', name: 'Вʼязниця', price: 0, rent: 0, category: 'special' },
  { type: 'property', name: 'GameForge', price: 220, rent: 24, category: 'entertainment' },
  { type: 'chance', name: 'Шанс', price: 0, rent: 0, category: 'special' },
  { type: 'property', name: 'StreamBox', price: 240, rent: 28, category: 'entertainment' },
  { type: 'property', name: 'MusicWave', price: 260, rent: 30, category: 'entertainment' },
  { type: 'rail', name: 'MetroJet', price: 200, rent: 25, category: 'service' },
  { type: 'property', name: 'AirNova', price: 260, rent: 30, category: 'travel' },
  { type: 'utility', name: 'Водоканал', price: 150, rent: 18, category: 'energy' },
  { type: 'property', name: 'HotelGo', price: 280, rent: 34, category: 'travel' },
  { type: 'property', name: 'CruiseLine', price: 300, rent: 36, category: 'travel' },
  { type: 'corner', name: 'Паркінг', price: 0, rent: 0, category: 'special' },
  { type: 'property', name: 'SolarCity', price: 300, rent: 36, category: 'energy' },
  { type: 'property', name: 'WindWorks', price: 320, rent: 40, category: 'energy' },
  { type: 'chance', name: 'Скриня', price: 0, rent: 0, category: 'special' },
  { type: 'property', name: 'PayPoint', price: 340, rent: 44, category: 'finance' },
  { type: 'rail', name: 'CargoLink', price: 200, rent: 25, category: 'service' },
  { type: 'property', name: 'NeoBank', price: 360, rent: 48, category: 'finance' },
  { type: 'tax', name: 'Суперподаток', price: 160, rent: 0, category: 'service' },
  { type: 'property', name: 'Diamond Mall', price: 380, rent: 52, category: 'luxury' },
  { type: 'property', name: 'Royal Tower', price: 400, rent: 60, category: 'luxury' }
];

const playerColors = ['#ef4444', '#2563eb', '#16a34a', '#f59e0b', '#8b5cf6', '#ec4899', '#06b6d4', '#111827'];
const actionCards = [
  { id: 'block-turn', name: 'Блок ходу', type: 'Атака', text: 'Пропускає наступний хід суперника.' },
  { id: 'wreck-level', name: 'Демонтаж', type: 'Атака', text: 'Знімає 1 рівень з найсильнішої чужої клітинки.' },
  { id: 'rent-shield', name: 'Імунітет', type: 'Захист', text: 'Скасовує наступну сплату оренди.' },
  { id: 'triple-dice', name: '3 кубики', type: 'Користь', text: 'Наступний кидок — трьома кубиками.' }
];

const APP_VERSION = '1.1.0';
const LAP_BONUS = 200;
const TURN_SECONDS = 20;
const DECISION_SECONDS = 15;
const AUCTION_SECONDS = 5;
const BID_STEP = 10;
const MAX_UPGRADE_LEVEL = 5;
const CARD_SLOT_COUNT = 3;

const boardSize = 11;
const pathPositions = [
  ...Array.from({ length: boardSize }, (_, index) => [boardSize, boardSize - index]),
  ...Array.from({ length: boardSize - 2 }, (_, index) => [boardSize - 1 - index, 1]),
  ...Array.from({ length: boardSize }, (_, index) => [1, index + 1]),
  ...Array.from({ length: boardSize - 2 }, (_, index) => [index + 2, boardSize])
];

const state = {
  roomId: '',
  role: 'offline',
  peer: null,
  connections: [],
  myId: crypto.randomUUID(),
  game: createGame(),
  hasRolled: false,
  tickTimer: null
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
  copyLinkBtn: document.querySelector('#copyLinkBtn'),
  declineBtn: document.querySelector('#declineBtn'),
  tradeBtn: document.querySelector('#tradeBtn'),
  timerStatus: document.querySelector('#timerStatus'),
  auctionModal: document.querySelector('#auctionModal'),
  auctionInfo: document.querySelector('#auctionInfo'),
  auctionBidInput: document.querySelector('#auctionBidInput'),
  auctionBidBtn: document.querySelector('#auctionBidBtn'),
  auctionPassBtn: document.querySelector('#auctionPassBtn'),
  tradeModal: document.querySelector('#tradeModal'),
  tradeTarget: document.querySelector('#tradeTarget'),
  tradeOfferCash: document.querySelector('#tradeOfferCash'),
  tradeRequestCash: document.querySelector('#tradeRequestCash'),
  tradeOfferProperty: document.querySelector('#tradeOfferProperty'),
  tradeRequestProperty: document.querySelector('#tradeRequestProperty'),
  tradeOfferCard: document.querySelector('#tradeOfferCard'),
  tradeRequestCard: document.querySelector('#tradeRequestCard'),
  tradeProposeBtn: document.querySelector('#tradeProposeBtn'),
  tradeAcceptBtn: document.querySelector('#tradeAcceptBtn'),
  tradeCloseBtn: document.querySelector('#tradeCloseBtn'),
  tradeStatus: document.querySelector('#tradeStatus')
};

function createGame() {
  return {
    players: [],
    currentTurn: 0,
    spaces: boardSpaces.map((space) => ({ ...space, owner: null, level: 0 })),
    log: ['Гра готова. Створіть кімнату або грайте локально.'],
    lastDice: null,
    started: false,
    turnEndsAt: null,
    pendingDecision: null,
    auction: null,
    trade: null
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
    bankrupt: false,
    cards: [],
    skipTurn: false,
    rentShield: false,
    tripleDice: false
  };
  drawActionCard(player);
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
  return player && (state.role === 'offline' || player.id === state.myId);
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
    const category = categoryStyles[space.category] || categoryStyles.special;
    const side = boardSide(row, col);
    cell.style.setProperty('--category-color', category.color);
    cell.style.setProperty('--category-tint', category.tint);
    cell.classList.add(`cell--${space.type}`, `cell--${side}`);
    cell.querySelector('.cell-color').textContent = space.price ? formatShortMoney(space.price) : category.icon;
    cell.querySelector('.cell-name').textContent = space.name;
    cell.querySelector('.cell-category').textContent = `${category.icon} ${category.label}`;
    cell.querySelector('.cell-price').textContent = space.price ? `Рента ${formatShortMoney(rentFor(space))}` : labelFor(space.type);

    if (space.owner) {
      const owner = state.game.players.find((player) => player.id === space.owner);
      const ownerDot = document.createElement('span');
      ownerDot.className = 'owner-dot';
      ownerDot.style.background = owner?.color || '#fff';
      cell.append(ownerDot);
    }

    if (space.level) {
      const levels = document.createElement('span');
      levels.className = 'house-count';
      levels.textContent = stars(space.level);
      cell.append(levels);
    }

    cell.addEventListener('click', () => requestAction('upgrade', { spaceIndex: index }) || upgradeSpace(index, localActorId()));

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
  center.innerHTML = `
    <div class="center-log-shell">
      <div class="center-log-list">
        ${state.game.log.slice(0, 12).map((item) => `<div class="center-log-line">${colorizeLog(item)}</div>`).join('')}
      </div>
      <div class="center-chatbar"><span>Всім</span><em>Введіть повідомлення</em><b>RIP</b><i>⛶</i><i>⌃</i></div>
    </div>
  `;
  els.board.append(center);
}

function boardSide(row, col) {
  if ((row === 1 || row === boardSize) && (col === 1 || col === boardSize)) return 'corner';
  if (row === 1) return 'top';
  if (row === boardSize) return 'bottom';
  if (col === 1) return 'left';
  return 'right';
}

function formatShortMoney(value) {
  if (!value) return '';
  return `${(value / 100).toLocaleString('uk-UA', { maximumFractionDigits: 1 })}00k`;
}

function colorizeLog(item) {
  return item.replace(/^([^—]+—\s*)([^:]+?)(?=\s)/, '$1<span>$2</span>');
}

function labelFor(type) {
  return ({ corner: 'кутова клітинка', chance: 'картка події', tax: 'сплатити банку', utility: 'сервіс', rail: 'транспорт' })[type] || '';
}

function rentFor(space) {
  return Math.ceil(space.rent * (2 ** (space.level || 0)));
}

function stars(level = 0) {
  return level ? '★'.repeat(level) : '☆'.repeat(MAX_UPGRADE_LEVEL);
}

function upgradeCost(space) {
  return Math.ceil(space.price * (0.5 * (2 ** (space.level || 0))));
}

function renderPlayers() {
  els.playersList.innerHTML = '';
  state.game.players.forEach((player, index) => {
    const holdings = state.game.spaces.filter((space) => space.owner === player.id).length;
    const card = document.createElement('article');
    card.className = `player-card ${index === state.game.currentTurn ? 'active' : ''}`;
    const cardButtons = (player.cards || []).map((item) => `<button class="card-slot" data-card="${item.id}" title="${item.text}">${item.name}<small>${item.type}</small></button>`).join('');
    const emptySlots = Math.max(0, CARD_SLOT_COUNT - (player.cards || []).length);
    card.innerHTML = `
      <div class="player-top">
        <span class="player-chip"><span class="token" style="background:${player.color}"></span>${player.name}</span>
        <strong>$ ${player.money.toLocaleString('uk-UA')}k</strong>
      </div>
      <small>${player.bankrupt ? 'Банкрут' : `Позиція: ${state.game.spaces[player.position].name} • Активи: ${holdings}`}</small>
      <div class="card-slots">${cardButtons}${'<span class="empty-slot">Порожньо</span>'.repeat(emptySlots)}</div>
    `;
    els.playersList.append(card);
  });
}

function renderLog() {
  els.gameLog.innerHTML = state.game.log.map((item) => `<div class="log-item">${item}</div>`).join('');
}

function renderControls() {
  const player = currentPlayer();
  const activeSpace = player ? state.game.spaces[player.position] : null;
  const pendingForTurn = state.game.pendingDecision?.playerId === player?.id;
  const auctionOpen = Boolean(state.game.auction);
  els.turnBadge.textContent = player ? `Хід: ${player.name}` : 'Очікування';
  els.dice.textContent = state.game.lastDice ? state.game.lastDice.join(' + ') : '—';
  els.rollBtn.disabled = !state.game.players.length || !isMyTurn() || state.hasRolled || pendingForTurn || auctionOpen;
  els.endTurnBtn.disabled = !state.game.players.length || !isMyTurn() || !state.hasRolled || pendingForTurn || auctionOpen;
  els.buyBtn.disabled = !state.game.players.length || !isMyTurn() || !activeSpace || !canBuy(player, activeSpace) || !pendingForTurn;
  els.declineBtn.disabled = !state.game.players.length || !isMyTurn() || !pendingForTurn;
  els.tradeBtn.disabled = !state.game.players.length || !isMyTurn() || auctionOpen;
  els.timerStatus.textContent = timerLabel();
  renderAuction();
  renderTrade();
}

function render() {
  renderBoard();
  renderPlayers();
  renderLog();
  renderControls();
}

function isPurchasable(space) {
  return Boolean(space && !space.owner && !['corner', 'chance', 'tax'].includes(space.type));
}

function canBuy(player, space) {
  return Boolean(isPurchasable(space) && player.money >= space.price);
}

function canUpgrade(player, space) {
  if (!space?.owner || space.owner !== player.id || !space.price || (space.level || 0) >= MAX_UPGRADE_LEVEL) return false;
  const group = state.game.spaces.filter((item) => item.category === space.category && item.type === 'property');
  return group.length > 0 && group.every((item) => item.owner === player.id) && player.money >= upgradeCost(space);
}

function rollDice(playerId = state.myId) {
  const player = currentPlayer();
  if (!player || player.id !== playerId || state.hasRolled || state.game.auction || state.game.pendingDecision) return;
  if (player.skipTurn) {
    player.skipTurn = false;
    addLog(`${player.name} пропускає хід через Action Card.`);
    advanceTurn();
    state.hasRolled = false;
    syncAndRender();
    return;
  }
  const dice = player.tripleDice ? [randomDie(), randomDie(), randomDie()] : [randomDie(), randomDie()];
  player.tripleDice = false;
  const oldPosition = player.position;
  const steps = dice.reduce((sum, value) => sum + value, 0);
  const absolutePosition = oldPosition + steps;
  const completedLaps = Math.floor(absolutePosition / state.game.spaces.length);
  player.position = absolutePosition % state.game.spaces.length;
  if (completedLaps > 0) {
    const landedOnStart = player.position === 0;
    const bonus = LAP_BONUS * completedLaps * (landedOnStart ? 2 : 1);
    player.money += bonus;
    addLog(`${player.name} ${landedOnStart ? 'став на Старт' : 'пройшов Старт'} і отримав ₴${bonus}.`);
  }
  state.game.lastDice = dice;
  state.hasRolled = true;
  addLog(`${player.name} кинув ${dice.join(' + ')} і став на «${state.game.spaces[player.position].name}».`);
  resolveSpace(player);
  syncAndRender();
}

function randomDie() {
  return Math.floor(Math.random() * 6) + 1;
}

function resolveSpace(player) {
  const space = state.game.spaces[player.position];
  if (space.type === 'tax') {
    const tax = progressiveTax(player);
    player.money -= tax;
    addLog(`${player.name} сплатив прогресивний податок ₴${tax} (10% від активів).`);
  } else if (space.type === 'chance') {
    drawActionCard(player);
  } else if (space.owner && space.owner !== player.id) {
    const owner = state.game.players.find((item) => item.id === space.owner);
    const rent = rentFor(space);
    if (player.rentShield) {
      player.rentShield = false;
      addLog(`${player.name} використав імунітет і не платить ₴${rent} ренти.`);
    } else {
      player.money -= rent;
      if (owner) owner.money += rent;
      addLog(`${player.name} заплатив ₴${rent} ренти гравцю ${owner?.name || 'власник'} (рівень ${space.level || 0}).`);
    }
  } else if (isPurchasable(space)) {
    state.game.pendingDecision = { playerId: player.id, spaceIndex: player.position, endsAt: Date.now() + DECISION_SECONDS * 1000 };
    addLog(`${player.name} має ${DECISION_SECONDS}с, щоб купити «${space.name}» або віддати її на аукціон.`);
  }
  if (player.money < 0) markBankrupt(player);
}

function markBankrupt(player) {
  player.bankrupt = true;
  state.game.spaces.forEach((space) => {
    if (space.owner === player.id) {
      space.owner = null;
      space.level = 0;
    }
  });
  addLog(`${player.name} збанкрутував. Його майно повернулося банку.`);
}

function buyOrBuild(playerId = state.myId) {
  const player = currentPlayer();
  if (!player || player.id !== playerId) return;
  const decision = state.game.pendingDecision;
  const space = decision ? state.game.spaces[decision.spaceIndex] : state.game.spaces[player.position];
  if (!canBuy(player, space)) return;
  player.money -= space.price;
  space.owner = player.id;
  state.game.pendingDecision = null;
  addLog(`${player.name} купив «${space.name}» за ₴${space.price}.`);
  syncAndRender();
}

function declinePurchase(playerId = state.myId) {
  const player = currentPlayer();
  if (!player || player.id !== playerId || state.game.pendingDecision?.playerId !== player.id) return;
  startAuction(state.game.pendingDecision.spaceIndex, player.id);
  syncAndRender();
}

function upgradeSpace(spaceIndex, playerId = state.myId) {
  const player = currentPlayer();
  const space = state.game.spaces[spaceIndex];
  if (!player || player.id !== playerId || !isMyTurn() || state.game.auction || state.game.pendingDecision || !canUpgrade(player, space)) return;
  const cost = upgradeCost(space);
  player.money -= cost;
  space.level = (space.level || 0) + 1;
  addLog(`${player.name} підняв «${space.name}» до рівня ${space.level} за ₴${cost}. Нова рента: ₴${rentFor(space)}.`);
  syncAndRender();
}

function endTurn(playerId = state.myId) {
  const player = currentPlayer();
  if (!player || player.id !== playerId || !state.hasRolled) return;
  state.game.pendingDecision = null;
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
  state.game.turnEndsAt = Date.now() + TURN_SECONDS * 1000;
}

function progressiveTax(player) {
  const propertyValue = state.game.spaces
    .filter((space) => space.owner === player.id)
    .reduce((sum, space) => sum + space.price + Array.from({ length: space.level || 0 }).reduce((total, _, level) => total + Math.ceil(space.price * (0.5 * (2 ** level))), 0), 0);
  return Math.ceil((player.money + propertyValue) * 0.1);
}

function drawActionCard(player) {
  if (!player.cards) player.cards = [];
  if (player.cards.length >= CARD_SLOT_COUNT) {
    player.money += 50;
    addLog(`${player.name} має повний інвентар Action Cards і отримує компенсацію ₴50.`);
    return;
  }
  const card = actionCards[Math.floor(Math.random() * actionCards.length)];
  player.cards.push({ ...card, uid: crypto.randomUUID() });
  addLog(`${player.name} отримав Action Card: ${card.name} (${card.type}).`);
}

function useActionCard(cardId, playerId = state.myId) {
  const player = currentPlayer();
  if (!player || player.id !== playerId || state.hasRolled || state.game.auction) return;
  const index = (player.cards || []).findIndex((card) => card.id === cardId);
  if (index < 0) return;
  const [card] = player.cards.splice(index, 1);
  if (card.id === 'block-turn') {
    const target = nextOpponent(player.id);
    if (target) target.skipTurn = true;
    addLog(`${player.name} активував «${card.name}»: ${target?.name || 'суперник'} пропустить хід.`);
  }
  if (card.id === 'wreck-level') {
    const targetSpace = state.game.spaces.filter((space) => space.owner && space.owner !== player.id && space.level > 0).sort((a, b) => b.level - a.level)[0];
    if (targetSpace) targetSpace.level -= 1;
    addLog(`${player.name} активував «${card.name}»${targetSpace ? ` проти «${targetSpace.name}»` : ', але цілей немає'}.`);
  }
  if (card.id === 'rent-shield') {
    player.rentShield = true;
    addLog(`${player.name} активував «${card.name}»: наступна рента буде скасована.`);
  }
  if (card.id === 'triple-dice') {
    player.tripleDice = true;
    addLog(`${player.name} активував «${card.name}»: наступний кидок буде 3 кубиками.`);
  }
  syncAndRender();
}

function nextOpponent(playerId) {
  return state.game.players.find((player) => player.id !== playerId && !player.bankrupt);
}

function startAuction(spaceIndex, declinedBy) {
  const space = state.game.spaces[spaceIndex];
  state.game.pendingDecision = null;
  state.game.auction = {
    spaceIndex,
    declinedBy,
    currentBid: Math.ceil(space.price * 0.5),
    highBidder: null,
    passed: [],
    endsAt: Date.now() + AUCTION_SECONDS * 1000
  };
  addLog(`Аукціон за «${space.name}» стартує з ₴${state.game.auction.currentBid}. Кожна ставка скидає таймер на ${AUCTION_SECONDS}с.`);
}

function placeAuctionBid(playerId = activeAuctionBidderId(), amount = Number(els.auctionBidInput.value)) {
  const auction = state.game.auction;
  const bidder = state.game.players.find((player) => player.id === playerId);
  if (!auction || !bidder || bidder.id === auction.declinedBy || bidder.bankrupt) return;
  const minimum = auction.highBidder ? auction.currentBid + BID_STEP : auction.currentBid;
  const bid = Math.max(minimum, Number(amount) || minimum);
  if (bidder.money < bid) return;
  auction.currentBid = bid;
  auction.highBidder = bidder.id;
  auction.endsAt = Date.now() + AUCTION_SECONDS * 1000;
  addLog(`${bidder.name} ставить ₴${bid} на аукціоні.`);
  syncAndRender();
}

function passAuction(playerId = activeAuctionBidderId()) {
  const auction = state.game.auction;
  if (!auction) return;
  if (!auction.passed.includes(playerId)) auction.passed.push(playerId);
  addLog(`${state.game.players.find((player) => player.id === playerId)?.name || 'Гравець'} пасує в аукціоні.`);
  syncAndRender();
}

function finishAuction() {
  const auction = state.game.auction;
  if (!auction) return false;
  const space = state.game.spaces[auction.spaceIndex];
  const winner = state.game.players.find((player) => player.id === auction.highBidder);
  if (winner && winner.money >= auction.currentBid) {
    winner.money -= auction.currentBid;
    space.owner = winner.id;
    addLog(`${winner.name} виграв аукціон і купив «${space.name}» за ₴${auction.currentBid}.`);
  } else {
    addLog(`Аукціон за «${space.name}» завершився без ставок. Клітинка лишається вільною.`);
  }
  state.game.auction = null;
  return true;
}

function renderAuction() {
  const auction = state.game.auction;
  els.auctionModal.classList.toggle('hidden', !auction);
  if (!auction) return;
  const space = state.game.spaces[auction.spaceIndex];
  const highBidder = state.game.players.find((player) => player.id === auction.highBidder);
  const seconds = Math.max(0, Math.ceil((auction.endsAt - Date.now()) / 1000));
  const minimum = auction.highBidder ? auction.currentBid + BID_STEP : auction.currentBid;
  els.auctionInfo.innerHTML = `<strong>${space.name}</strong><br>Поточна ставка: ₴${auction.currentBid} ${highBidder ? `(${highBidder.name})` : '(ще немає)'}<br>Таймер: ${seconds}с`;
  els.auctionBidInput.value = minimum;
  const canBid = isParticipantAllowedToBid(auction);
  els.auctionBidBtn.disabled = !canBid;
  els.auctionPassBtn.disabled = !canBid;
}

function isParticipantAllowedToBid(auction) {
  return Boolean(activeAuctionBidderId(auction));
}

function activeAuctionBidderId(auction = state.game.auction) {
  if (!auction) return null;
  if (state.role !== 'offline') {
    const player = state.game.players.find((item) => item.id === state.myId);
    return player && player.id !== auction.declinedBy && !auction.passed.includes(player.id) && !player.bankrupt ? player.id : null;
  }
  return state.game.players.find((player) => player.id !== auction.declinedBy && !auction.passed.includes(player.id) && !player.bankrupt)?.id || null;
}

function timerLabel() {
  if (state.game.auction) return `Аукціон: ${Math.max(0, Math.ceil((state.game.auction.endsAt - Date.now()) / 1000))}с`;
  if (state.game.pendingDecision) return `Рішення: ${Math.max(0, Math.ceil((state.game.pendingDecision.endsAt - Date.now()) / 1000))}с`;
  if (state.game.turnEndsAt) return `Хід: ${Math.max(0, Math.ceil((state.game.turnEndsAt - Date.now()) / 1000))}с`;
  return 'Таймер: —';
}

function processTimers() {
  if (!canControlGame() || !state.game.players.length) return;
  const now = Date.now();
  if (state.game.auction && state.game.auction.endsAt <= now && finishAuction()) {
    syncAndRender();
    return;
  }
  if (state.game.pendingDecision && state.game.pendingDecision.endsAt <= now) {
    startAuction(state.game.pendingDecision.spaceIndex, state.game.pendingDecision.playerId);
    syncAndRender();
    return;
  }
  const player = currentPlayer();
  if (player && !state.hasRolled && state.game.turnEndsAt && state.game.turnEndsAt <= now) rollDice(player.id);
}

function renderTrade() {
  const trade = state.game.trade;
  els.tradeStatus.textContent = trade ? `Пропозиція: ${playerName(trade.from)} ↔ ${playerName(trade.to)} • Accept: ${trade.accepted[trade.from] ? '✓' : '—'} / ${trade.accepted[trade.to] ? '✓' : '—'}` : 'Змініть пакет — Accept іншого гравця буде скинуто.';
}

function openTrade() {
  populateTradeSelects();
  els.tradeModal.classList.remove('hidden');
}

function closeTrade() {
  els.tradeModal.classList.add('hidden');
}

function populateTradeSelects() {
  const player = currentPlayer();
  const opponents = state.game.players.filter((item) => item.id !== player?.id && !item.bankrupt);
  els.tradeTarget.innerHTML = opponents.map((item) => `<option value="${item.id}">${item.name}</option>`).join('');
  fillAssetSelect(els.tradeOfferProperty, player?.id);
  fillAssetSelect(els.tradeRequestProperty, opponents[0]?.id);
  fillCardSelect(els.tradeOfferCard, player);
  fillCardSelect(els.tradeRequestCard, opponents[0]);
}

function fillAssetSelect(select, ownerId) {
  select.innerHTML = '<option value="">—</option>' + state.game.spaces
    .map((space, index) => ({ space, index }))
    .filter(({ space }) => space.owner === ownerId)
    .map(({ space, index }) => `<option value="${index}">${space.name} ${stars(space.level || 0)}</option>`)
    .join('');
}

function fillCardSelect(select, player) {
  select.innerHTML = '<option value="">—</option>' + (player?.cards || []).map((card) => `<option value="${card.uid}">${card.name}</option>`).join('');
}

function proposeTrade(playerId = state.myId, packageData = null) {
  const from = state.role === 'offline' ? currentPlayer()?.id : playerId;
  const data = packageData || readTradeForm(from);
  if (!data?.to) return;
  state.game.trade = { ...data, from, accepted: { [from]: false, [data.to]: false } };
  addLog(`${playerName(from)} оновив пропозицію обміну для ${playerName(data.to)}. Accept скинуто.`);
  syncAndRender();
}

function readTradeForm(from) {
  return {
    from,
    to: els.tradeTarget.value,
    offerCash: Number(els.tradeOfferCash.value) || 0,
    requestCash: Number(els.tradeRequestCash.value) || 0,
    offerProperties: els.tradeOfferProperty.value ? [Number(els.tradeOfferProperty.value)] : [],
    requestProperties: els.tradeRequestProperty.value ? [Number(els.tradeRequestProperty.value)] : [],
    offerCards: els.tradeOfferCard.value ? [els.tradeOfferCard.value] : [],
    requestCards: els.tradeRequestCard.value ? [els.tradeRequestCard.value] : []
  };
}

function acceptTrade(playerId = state.myId) {
  const trade = state.game.trade;
  let actor = state.role === 'offline' ? currentPlayer()?.id : playerId;
  if (state.role === 'offline' && trade && trade.accepted[actor]) actor = trade.to;
  if (!trade || ![trade.from, trade.to].includes(actor)) return;
  trade.accepted[actor] = true;
  if (trade.accepted[trade.from] && trade.accepted[trade.to]) executeTrade(trade);
  syncAndRender();
}

function executeTrade(trade) {
  const from = state.game.players.find((player) => player.id === trade.from);
  const to = state.game.players.find((player) => player.id === trade.to);
  if (!from || !to || from.money < trade.offerCash || to.money < trade.requestCash) return;
  from.money -= trade.offerCash;
  to.money += trade.offerCash;
  to.money -= trade.requestCash;
  from.money += trade.requestCash;
  transferProperties(trade.offerProperties, to.id);
  transferProperties(trade.requestProperties, from.id);
  transferCards(from, to, trade.offerCards);
  transferCards(to, from, trade.requestCards);
  addLog(`Обмін між ${from.name} та ${to.name} виконано. Рівні переданої нерухомості анульовано.`);
  state.game.trade = null;
  closeTrade();
}

function transferProperties(indices, newOwner) {
  indices.forEach((index) => {
    const space = state.game.spaces[index];
    if (space) {
      space.owner = newOwner;
      space.level = 0;
    }
  });
}

function transferCards(from, to, cardUids) {
  cardUids.forEach((uid) => {
    const index = (from.cards || []).findIndex((card) => card.uid === uid);
    if (index >= 0 && (to.cards || []).length < CARD_SLOT_COUNT) to.cards.push(from.cards.splice(index, 1)[0]);
  });
}

function playerName(id) {
  return state.game.players.find((player) => player.id === id)?.name || '—';
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
  state.game = createGame();
  state.hasRolled = false;
  addPlayer(state.myId, safeName());
  state.game.turnEndsAt = Date.now() + TURN_SECONDS * 1000;
  setupPeer(`monopoly-${state.roomId}`);
  els.roomStatus.textContent = `Хост: ${state.roomId}`;
  updateUrlRoom();
  render();
}

function joinRoom() {
  state.role = 'guest';
  state.roomId = normalizeRoom(els.roomCode.value);
  els.roomCode.value = state.roomId;
  state.game = createGame();
  state.hasRolled = false;
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
    runRemoteAction(payload.action, payload.playerId, payload.details);
  }
}

function runRemoteAction(action, playerId, details = {}) {
  const turnActions = ['roll', 'buy', 'decline', 'end', 'upgrade', 'card', 'trade-propose'];
  if (turnActions.includes(action) && currentPlayer()?.id !== playerId) return;
  if (action === 'roll') rollDice(playerId);
  if (action === 'buy') buyOrBuild(playerId);
  if (action === 'decline') declinePurchase(playerId);
  if (action === 'end') endTurn(playerId);
  if (action === 'upgrade') upgradeSpace(details.spaceIndex, playerId);
  if (action === 'card') useActionCard(details.cardId, playerId);
  if (action === 'auction-bid') placeAuctionBid(playerId, details.amount);
  if (action === 'auction-pass') passAuction(playerId);
  if (action === 'trade-propose') proposeTrade(playerId, details.trade);
  if (action === 'trade-accept') acceptTrade(playerId);
}

function localActorId() {
  return state.role === 'offline' ? currentPlayer()?.id : state.myId;
}

function requestAction(action, details = {}) {
  if (state.role === 'guest') {
    state.connections[0]?.send({ type: 'action', action, playerId: state.myId, details });
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
  addPlayer('local-3', 'Друг 3');
  state.game.turnEndsAt = Date.now() + TURN_SECONDS * 1000;
  els.roomStatus.textContent = `Локальна партія • v${APP_VERSION}`;
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
els.rollBtn.addEventListener('click', () => requestAction('roll') || rollDice(localActorId()));
els.buyBtn.addEventListener('click', () => requestAction('buy') || buyOrBuild(localActorId()));
els.declineBtn.addEventListener('click', () => requestAction('decline') || declinePurchase(localActorId()));
els.tradeBtn.addEventListener('click', openTrade);
els.endTurnBtn.addEventListener('click', () => requestAction('end') || endTurn(localActorId()));
els.auctionBidBtn.addEventListener('click', () => requestAction('auction-bid', { amount: Number(els.auctionBidInput.value) }) || placeAuctionBid());
els.auctionPassBtn.addEventListener('click', () => requestAction('auction-pass') || passAuction());
els.playersList.addEventListener('click', (event) => {
  const button = event.target.closest('[data-card]');
  if (button) requestAction('card', { cardId: button.dataset.card }) || useActionCard(button.dataset.card, localActorId());
});
els.tradeTarget.addEventListener('change', () => {
  fillAssetSelect(els.tradeRequestProperty, els.tradeTarget.value);
  fillCardSelect(els.tradeRequestCard, state.game.players.find((player) => player.id === els.tradeTarget.value));
});
els.tradeProposeBtn.addEventListener('click', () => {
  const trade = readTradeForm(state.role === 'offline' ? currentPlayer()?.id : state.myId);
  requestAction('trade-propose', { trade }) || proposeTrade(state.myId, trade);
});
els.tradeAcceptBtn.addEventListener('click', () => requestAction('trade-accept') || acceptTrade(localActorId()));
els.tradeCloseBtn.addEventListener('click', closeTrade);
state.tickTimer = setInterval(() => {
  processTimers();
  renderControls();
}, 500);

hydrateFromUrl();
if (!els.roomCode.value) {
  startLocalGame();
} else {
  els.roomStatus.textContent = `Офлайн-режим • v${APP_VERSION}`;
  render();
}
