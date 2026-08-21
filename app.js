
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SANTA CHELA - POS Premium Bar</title>
  
  <!-- FUENTES TIPOGRÁFICAS MODERNAS -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;800&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet">

  <style>
    :root {
      --neon-gold: #fbbf24;
      --neon-amber: #f59e0b;
      --neon-glow: rgba(251, 191, 36, 0.35);
      --bg-dark: #0a0603;
      --card-bg: rgba(15, 9, 4, 0.65);
      --card-border: rgba(251, 191, 36, 0.22);
      --text-main: #f8fafc;
      --text-muted: #94a3b8;
      --red-accent: #ef4444;
      --green-accent: #10b981;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Outfit', sans-serif; }
    
    body {
      background: linear-gradient(135deg, rgba(10, 6, 3, 0.45), rgba(5, 3, 1, 0.55)), 
                  url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1920&q=80') center/cover fixed no-repeat;
      color: var(--text-main);
      min-height: 100vh;
      padding: 20px 15px;
    }

    .container { max-width: 1250px; margin: 0 auto; }

    /* HEADER CYBER-PUB */
    header {
      background: var(--card-bg);
      border: 1px solid var(--card-border);
      backdrop-filter: blur(12px);
      padding: 20px 30px;
      border-radius: 16px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      gap: 20px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.8), 0 0 15px var(--neon-glow);
      margin-bottom: 25px;
    }

    .brand { display: flex; align-items: center; gap: 15px; }
    .brand-icon { 
      font-size: 2.8rem; 
      filter: drop-shadow(0 0 8px var(--neon-gold));
      animation: float 3s ease-in-out infinite;
    }
    @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }

    .brand h1 { 
      font-family: 'Space Grotesk', sans-serif;
      font-size: 2.2rem; 
      color: var(--neon-gold); 
      letter-spacing: 3px; 
      text-transform: uppercase; 
      font-weight: 700;
      text-shadow: 0 0 12px var(--neon-glow);
    }

    .kpi-container { display: flex; gap: 15px; flex-wrap: wrap; }
    .kpi-card { 
      background: rgba(0, 0, 0, 0.5); 
      border: 1px solid var(--card-border); 
      padding: 10px 20px; 
      border-radius: 12px; 
      text-align: center;
      min-width: 130px;
    }
    .kpi-title { font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px; }
    .kpi-value { font-family: 'Space Grotesk', sans-serif; font-size: 1.4rem; font-weight: 700; color: var(--neon-gold); }

    /* NAVEGACIÓN MODERNA */
    nav { display: flex; gap: 12px; margin-bottom: 25px; flex-wrap: wrap; }
    .nav-btn {
      flex: 1;
      min-width: 150px;
      padding: 14px;
      background: var(--card-bg);
      border: 1px solid var(--card-border);
      color: var(--text-main);
      border-radius: 12px;
      font-weight: 600;
      font-size: 0.95rem;
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      text-align: center;
      backdrop-filter: blur(8px);
    }
    .nav-btn.active, .nav-btn:hover { 
      background: var(--neon-gold); 
      color: #000; 
      border-color: var(--neon-gold); 
      box-shadow: 0 0 20px var(--neon-glow);
      transform: translateY(-2px);
    }

    .tab-content { display: none; }
    .tab-content.active { display: block; animation: fadeIn 0.4s ease; }
    @keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }

    .grid-layout { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 25px; }

    /* TARJETAS GLASSMORPHISM */
    .card {
      background: var(--card-bg);
      border: 1px solid var(--card-border);
      border-radius: 16px;
      padding: 25px;
      box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.5);
      backdrop-filter: blur(10px);
    }

    .card h2 { 
      font-family: 'Space Grotesk', sans-serif;
      font-size: 1.25rem; 
      color: var(--neon-gold); 
      margin-bottom: 20px; 
      border-bottom: 1px solid var(--card-border); 
      padding-bottom: 10px;
      letter-spacing: 1px;
    }

    .form-group { margin-bottom: 18px; }
    label { display: block; font-size: 0.85rem; color: var(--text-muted); margin-bottom: 6px; font-weight: 500; }
    input, select {
      width: 100%;
      padding: 12px 15px;
      background: rgba(0, 0, 0, 0.6);
      border: 1px solid var(--card-border);
      color: #fff;
      border-radius: 10px;
      outline: none;
      font-size: 0.95rem;
      transition: border-color 0.3s;
    }
    input:focus, select:focus { border-color: var(--neon-gold); box-shadow: 0 0 10px var(--neon-glow); }

    .btn {
      width: 100%;
      padding: 14px;
      background: linear-gradient(135deg, var(--neon-gold), var(--neon-amber));
      color: #000;
      border: none;
      border-radius: 10px;
      font-weight: 700;
      font-size: 0.95rem;
      cursor: pointer;
      transition: all 0.3s;
      letter-spacing: 0.5px;
    }
    .btn:hover { 
      box-shadow: 0 0 20px var(--neon-glow); 
      transform: translateY(-2px); 
    }
    .btn-danger { background: var(--red-accent); color: white; }
    .btn-danger:hover { background: #dc2626; box-shadow: 0 0 15px rgba(239, 68, 68, 0.4); }

    /* BOTONES DE EDICIÓN RÁPIDA (+ / -) */
    .btn-qty {
      background: rgba(251, 191, 36, 0.2);
      border: 1px solid var(--neon-gold);
      color: #fff;
      font-weight: bold;
      border-radius: 6px;
      width: 28px;
      height: 28px;
      cursor: pointer;
      font-size: 0.9rem;
      transition: all 0.2s;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
    .btn-qty:hover {
      background: var(--neon-gold);
      color: #000;
    }

    /* GRILLA DE MESAS / ESPACIOS */
    .space-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)); gap: 12px; margin-top: 15px; }
    .space-card {
      background: rgba(0, 0, 0, 0.5);
      border: 1px solid var(--card-border);
      padding: 16px 10px;
      border-radius: 12px;
      text-align: center;
      cursor: pointer;
      transition: all 0.3s;
    }
    .space-card:hover { border-color: var(--neon-gold); }
    .space-card.active { 
      border-color: var(--neon-gold); 
      background: rgba(251, 191, 36, 0.18); 
      box-shadow: 0 0 15px var(--neon-glow);
    }
    .space-card .name { font-weight: 700; font-size: 1rem; color: #fff; }
    .space-card .total { font-family: 'Space Grotesk', sans-serif; font-size: 0.9rem; color: var(--neon-gold); margin-top: 6px; font-weight: 700; }

    /* TABLAS ESTILIZADAS */
    table { width: 100%; border-collapse: collapse; margin-top: 10px; font-size: 0.95rem; }
    th, td { padding: 12px 15px; text-align: left; border-bottom: 1px solid var(--card-border); }
    th { color: var(--neon-gold); background: rgba(0, 0, 0, 0.4); font-weight: 600; font-family: 'Space Grotesk', sans-serif; }
    td { color: #e2e8f0; }

    @media (max-width: 768px) {
      header { flex-direction: column; text-align: center; }
      .kpi-container { width: 100%; justify-content: center; }
    }
  </style>
</head>
<body>

<div class="container">
  <header>
    <div class="brand">
      <span class="brand-icon">🍺</span>
      <div>
        <h1>SANTA CHELA</h1>
        <p style="font-size: 0.85rem; color: var(--text-muted); letter-spacing: 1px;">SISTEMA POS & CONTROL DE BAR</p>
      </div>
    </div>
    <div class="kpi-container">
      <div class="kpi-card">
        <div class="kpi-title">Ventas Hoy</div>
        <div class="kpi-value" id="kpi-sales-today">$0</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-title">Caja Total</div>
        <div class="kpi-value" id="kpi-sales-total">$0</div>
      </div>
    </div>
  </header>

  <nav>
    <button class="nav-btn active" onclick="switchTab('pos', event)">🪑 Mesas & Barra</button>
    <button class="nav-btn" onclick="switchTab('inventory', event)">📦 Inventario</button>
    <button class="nav-btn" onclick="switchTab('history', event)">📜 Historial de Ventas</button>
  </nav>

  <!-- TAB 1: POS MESAS & BARRA -->
  <div id="tab-pos" class="tab-content active">
    <div class="grid-layout">
      <div class="card">
        <h2>Registrar Consumo</h2>
        <form id="form-add-consumption" onsubmit="addConsumption(event)">
          <div class="form-group">
            <label>Ubicación / Destino</label>
            <select id="pos-location"></select>
          </div>

          <div class="form-group">
            <label>Categoría de Producto</label>
            <select id="pos-category" onchange="filterProductsByCategory()">
              <option value="Cervezas">🍺 Cervezas</option>
              <option value="Aguardiente">🍾 Aguardiente</option>
              <option value="Whisky">🥃 Whisky</option>
              <option value="Cigarrillos">🚬 Cigarrillos</option>
              <option value="Otros">🍿 Otros / Pasabocas</option>
            </select>
          </div>

          <div class="form-group">
            <label>Producto</label>
            <select id="pos-beer"></select>
          </div>

          <div class="form-group">
            <label>Cantidad</label>
            <input type="number" id="pos-qty" min="1" value="1" required>
          </div>
          <button type="submit" class="btn">+ Despachar a la Cuenta</button>
        </form>
      </div>

      <div class="card">
        <h2>Gestión de Espacios</h2>
        <form onsubmit="addSpace(event)">
          <div class="form-group">
            <label>Añadir Nuevo Espacio</label>
            <input type="text" id="space-name" placeholder="Ej: Mesa 5" required>
          </div>
          <button type="submit" class="btn">+ Agregar Mesa/Espacio</button>
        </form>
        <div class="space-grid" id="spaces-list"></div>
      </div>
    </div>

    <!-- CUENTA ACTIVA CON EDICIÓN DE CANTIDAD -->
    <div class="card" style="margin-top: 25px;">
      <h2>Cuenta Activa: <span id="active-space-title" style="color: #fff;">Barra Principal</span></h2>
      <div style="overflow-x: auto;">
        <table>
          <thead>
            <tr>
              <th>Producto</th>
              <th>Precio Un.</th>
              <th style="text-align: center;">Cant. (Editar)</th>
              <th>Subtotal</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody id="active-items-table"></tbody>
        </table>
      </div>
      <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 20px; flex-wrap: wrap; gap: 15px;">
        <h3 style="font-family: 'Space Grotesk', sans-serif; font-size: 1.4rem; color: var(--neon-gold);">
          Total Cuenta: $<span id="active-space-total">0</span>
        </h3>
        <button class="btn" style="width: auto; padding: 14px 30px;" onclick="closeAccount()">💰 Cobrar y Cerrar Cuenta</button>
      </div>
    </div>
  </div>

  <!-- TAB 2: INVENTARIO -->
  <div id="tab-inventory" class="tab-content">
    <div class="grid-layout">
      <div class="card">
        <h2>Agregar / Modificar Producto</h2>
        <form onsubmit="saveInventoryItem(event)">
          <div class="form-group">
            <label>Categoría</label>
            <select id="inv-category" required>
              <option value="Cervezas">🍺 Cervezas</option>
              <option value="Aguardiente">🍾 Aguardiente</option>
              <option value="Whisky">🥃 Whisky</option>
              <option value="Cigarrillos">🚬 Cigarrillos</option>
              <option value="Otros">🍿 Otros / Pasabocas</option>
            </select>
          </div>
          <div class="form-group">
            <label>Nombre del Producto</label>
            <input type="text" id="inv-name" required placeholder="Ej: Águila / Antioqueño / Mustang">
          </div>
          <div class="form-group">
            <label>Precio de Venta ($)</label>
            <input type="number" id="inv-price" min="0" required placeholder="8000">
          </div>
          <div class="form-group">
            <label>Cantidad en Stock</label>
            <input type="number" id="inv-stock" min="0" required placeholder="50">
          </div>
          <button type="submit" class="btn">Guardar en Inventario</button>
        </form>
      </div>

      <div class="card">
        <h2>Stock de Productos</h2>
        <div style="overflow-x: auto;">
          <table>
            <thead>
              <tr>
                <th>Categoría</th>
                <th>Producto</th>
                <th>Precio</th>
                <th>Stock</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody id="inventory-table"></tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  <!-- TAB 3: HISTORIAL -->
  <div id="tab-history" class="tab-content">
    <div class="card">
      <h2>Historial de Ventas</h2>
      <div class="form-group" style="max-width: 300px;">
        <label>Filtrar por Fecha</label>
        <input type="date" id="history-date-filter" onchange="renderHistory()">
      </div>
      <div style="overflow-x: auto;">
        <table>
          <thead>
            <tr>
              <th>Fecha y Hora</th>
              <th>Ubicación</th>
              <th>Detalle de Productos</th>
              <th>Total Cobrado</th>
            </tr>
          </thead>
          <tbody id="history-table"></tbody>
        </table>
      </div>
    </div>
  </div>
</div>

<script>
  let spaces = JSON.parse(localStorage.getItem('sc_spaces')) || ["Barra Principal", "Mesa 1", "Mesa 2"];
  let inventory = JSON.parse(localStorage.getItem('sc_inventory')) || [
    { id: 1, category: "Cervezas", name: "Cerveza Águila", price: 8000, stock: 48 },
    { id: 2, category: "Cervezas", name: "Club Colombia Dorada", price: 9000, stock: 30 },
    { id: 3, category: "Aguardiente", name: "Aguardiente Antioqueño (Media)", price: 45000, stock: 12 },
    { id: 4, category: "Whisky", name: "Old Parr 12 Años (Trago)", price: 20000, stock: 20 },
    { id: 5, category: "Cigarrillos", name: "Caja Mustang", price: 10000, stock: 15 }
  ];
  let activeAccounts = JSON.parse(localStorage.getItem('sc_accounts')) || { "Barra Principal": [] };
  let salesHistory = JSON.parse(localStorage.getItem('sc_history')) || [];
  let currentSelectedSpace = "Barra Principal";

  function saveData() {
    localStorage.setItem('sc_spaces', JSON.stringify(spaces));
    localStorage.setItem('sc_inventory', JSON.stringify(inventory));
    localStorage.setItem('sc_accounts', JSON.stringify(activeAccounts));
    localStorage.setItem('sc_history', JSON.stringify(salesHistory));
  }

  function switchTab(tabId, e) {
    document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(el => el.classList.remove('active'));
    document.getElementById(`tab-${tabId}`).classList.add('active');
    e.target.classList.add('active');
  }

  function renderPOS() {
    const spaceSelect = document.getElementById('pos-location');
    const spaceGrid = document.getElementById('spaces-list');
    spaceSelect.innerHTML = '';
    spaceGrid.innerHTML = '';

    spaces.forEach(s => {
      let option = document.createElement('option');
      option.value = s; option.textContent = s;
      if (s === currentSelectedSpace) option.selected = true;
      spaceSelect.appendChild(option);

      let total = (activeAccounts[s] || []).reduce((acc, item) => acc + (item.price * item.qty), 0);

      let card = document.createElement('div');
      card.className = `space-card ${s === currentSelectedSpace ? 'active' : ''}`;
      card.onclick = () => { currentSelectedSpace = s; renderPOS(); };
      card.innerHTML = `<div class="name">${s}</div><div class="total">$${total}</div>`;
      spaceGrid.appendChild(card);
    });

    filterProductsByCategory();
    renderActiveAccount();
  }

  function filterProductsByCategory() {
    const selectedCategory = document.getElementById('pos-category').value;
    const beerSelect = document.getElementById('pos-beer');
    beerSelect.innerHTML = '';

    const filteredItems = inventory.filter(item => item.category === selectedCategory);

    if (filteredItems.length === 0) {
      let opt = document.createElement('option');
      opt.textContent = "Sin productos en esta categoría";
      beerSelect.appendChild(opt);
      return;
    }

    filteredItems.forEach(item => {
      let opt = document.createElement('option');
      opt.value = item.id;
      opt.textContent = `${item.name} - $${item.price} (${item.stock} disp.)`;
      beerSelect.appendChild(opt);
    });
  }

  // RENDERIZAR CUENTA ACTIVA CON BOTONES DE + Y -
  function renderActiveAccount() {
    document.getElementById('active-space-title').textContent = currentSelectedSpace;
    const items = activeAccounts[currentSelectedSpace] || [];
    const tbody = document.getElementById('active-items-table');
    tbody.innerHTML = '';
    let total = 0;

    items.forEach((i, index) => {
      let sub = i.price * i.qty;
      total += sub;
      tbody.innerHTML += `
        <tr>
          <td>${i.name}</td>
          <td>$${i.price}</td>
          <td style="text-align: center;">
            <button class="btn-qty" onclick="updateItemQuantity(${index}, -1)">-</button>
            <span style="margin: 0 10px; font-weight: bold; color: var(--neon-gold);">${i.qty}</span>
            <button class="btn-qty" onclick="updateItemQuantity(${index}, 1)">+</button>
          </td>
          <td>$${sub}</td>
          <td>
            <button class="btn btn-danger" style="padding: 5px 10px; font-size: 0.75rem; width: auto;" onclick="removeConsumptionItem(${index})">❌ Eliminar</button>
          </td>
        </tr>
      `;
    });

    document.getElementById('active-space-total').textContent = total;
    updateKPIs();
  }

  // FUNCIÓN PARA AUMENTAR O DISMINUIR CANTIDADES (+1 / -1)
  function updateItemQuantity(index, change) {
    const items = activeAccounts[currentSelectedSpace];
    if (!items || !items[index]) return;

    const item = items[index];
    let beer = inventory.find(i => i.id === item.id);

    if (change === 1) { // Si sumamos 1
      if (beer && beer.stock < 1) {
        alert("No hay suficiente stock en inventario.");
        return;
      }
      if (beer) beer.stock -= 1;
      item.qty += 1;
    } else if (change === -1) { // Si restamos 1
      if (item.qty > 1) {
        item.qty -= 1;
        if (beer) beer.stock += 1;
      } else {
        // Si llega a 0, se elimina
        removeConsumptionItem(index);
        return;
      }
    }

    saveData();
    renderPOS();
    renderInventory();
  }

  function removeConsumptionItem(index) {
    const items = activeAccounts[currentSelectedSpace];
    if (!items || !items[index]) return;

    const itemToRemove = items[index];
    let beer = inventory.find(i => i.id === itemToRemove.id);
    if (beer) {
      beer.stock += itemToRemove.qty;
    }

    items.splice(index, 1);

    saveData();
    renderPOS();
    renderInventory();
  }

  function addConsumption(e) {
    e.preventDefault();
    const space = document.getElementById('pos-location').value;
    const beerId = parseInt(document.getElementById('pos-beer').value);
    const qty = parseInt(document.getElementById('pos-qty').value);

    let beer = inventory.find(i => i.id === beerId);
    if (!beer || beer.stock < qty) {
      alert("No hay suficiente stock en inventario.");
      return;
    }

    beer.stock -= qty;

    if (!activeAccounts[space]) activeAccounts[space] = [];
    
    // Si ya existe el producto en la cuenta, suma la cantidad
    let existingItem = activeAccounts[space].find(item => item.id === beerId);
    if (existingItem) {
      existingItem.qty += qty;
    } else {
      activeAccounts[space].push({ id: beer.id, name: beer.name, price: beer.price, qty: qty });
    }

    saveData();
    renderPOS();
    renderInventory();
  }

  function addSpace(e) {
    e.preventDefault();
    const input = document.getElementById('space-name');
    const name = input.value.trim();
    if (name && !spaces.includes(name)) {
      spaces.push(name);
      saveData();
      input.value = '';
      renderPOS();
    }
  }

  function closeAccount() {
    const items = activeAccounts[currentSelectedSpace] || [];
    if (items.length === 0) {
      alert("No hay consumo registrado en esta cuenta.");
      return;
    }

    let total = items.reduce((acc, i) => acc + (i.price * i.qty), 0);
    let now = new Date();

    salesHistory.push({
      date: now.toISOString().split('T')[0],
      time: now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      space: currentSelectedSpace,
      items: items.map(i => `${i.qty}x ${i.name}`).join(', '),
      total: total
    });

    activeAccounts[currentSelectedSpace] = [];
    saveData();
    renderPOS();
    renderHistory();
    alert(`Cuenta cerrada exitosamente. Total cobrado: $${total}`);
  }

  function renderInventory() {
    const tbody = document.getElementById('inventory-table');
    tbody.innerHTML = '';
    inventory.forEach(item => {
      tbody.innerHTML += `
        <tr>
          <td><small style="color: var(--neon-gold); font-weight: 600;">${item.category}</small></td>
          <td>${item.name}</td>
          <td>$${item.price}</td>
          <td>${item.stock}</td>
          <td><button class="btn btn-danger" style="padding: 6px 12px; font-size: 0.8rem; width: auto;" onclick="deleteInventoryItem(${item.id})">Eliminar</button></td>
        </tr>
      `;
    });
  }

  function saveInventoryItem(e) {
    e.preventDefault();
    const category = document.getElementById('inv-category').value;
    const name = document.getElementById('inv-name').value;
    const price = parseInt(document.getElementById('inv-price').value);
    const stock = parseInt(document.getElementById('inv-stock').value);

    inventory.push({ id: Date.now(), category, name, price, stock });
    saveData();
    renderInventory();
    renderPOS();
    e.target.reset();
  }

  function deleteInventoryItem(id) {
    inventory = inventory.filter(i => i.id !== id);
    saveData();
    renderInventory();
    renderPOS();
  }

  function renderHistory() {
    const tbody = document.getElementById('history-table');
    const filterDate = document.getElementById('history-date-filter').value;
    tbody.innerHTML = '';

    let list = [...salesHistory];
    if (filterDate) {
      list = list.filter(s => s.date === filterDate);
    }

    list.reverse().forEach(s => {
      tbody.innerHTML += `
        <tr>
          <td>${s.date} ${s.time}</td>
          <td>${s.space}</td>
          <td>${s.items}</td>
          <td style="color: var(--neon-gold); font-weight: bold; font-family: 'Space Grotesk', sans-serif;">$${s.total}</td>
        </tr>
      `;
    });
  }

  function updateKPIs() {
    let today = new Date().toISOString().split('T')[0];
    let totalAll = salesHistory.reduce((acc, s) => acc + s.total, 0);
    let totalToday = salesHistory.filter(s => s.date === today).reduce((acc, s) => acc + s.total, 0);

    document.getElementById('kpi-sales-total').textContent = `$${totalAll}`;
    document.getElementById('kpi-sales-today').textContent = `$${totalToday}`;
  }

  renderPOS();
  renderInventory();
  renderHistory();
</script>

</body>
</html>