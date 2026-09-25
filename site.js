
const PRODUCTS = [{"id": 1, "name": "Atelier Acrylic Color Set", "category": "Painting", "price": 24, "image": "assets/products/atelier-acrylic-set.svg", "description": "Designed for studio workflows with a refined balance of performance, versatility, and presentation.", "tag": "Studio Pick"}, {"id": 2, "name": "Heritage Oil Color Collection", "category": "Painting", "price": 38, "image": "assets/products/heritage-oil-colors.svg", "description": "A versatile creative essential for painting, illustration, sketching, and mixed-media practice.", "tag": "New"}, {"id": 3, "name": "Studio Gouache Essentials", "category": "Painting", "price": 18, "image": "assets/products/studio-gouache-set.svg", "description": "A carefully curated professional-grade option for artists who want reliable materials and confident results.", "tag": "Featured"}, {"id": 4, "name": "Watercolor Field Set", "category": "Painting", "price": 29, "image": "assets/products/watercolor-field-set.svg", "description": "Designed for studio workflows with a refined balance of performance, versatility, and presentation.", "tag": "Studio Pick"}, {"id": 5, "name": "Precision Brush Set", "category": "Brushes & Tools", "price": 22, "image": "assets/products/precision-brush-set.svg", "description": "A versatile creative essential for painting, illustration, sketching, and mixed-media practice.", "tag": "New"}, {"id": 6, "name": "Heritage Filbert Brush Set", "category": "Brushes & Tools", "price": 34, "image": "assets/products/heritage-brush-set.svg", "description": "A carefully curated professional-grade option for artists who want reliable materials and confident results.", "tag": "Featured"}, {"id": 7, "name": "Detail Brush Trio", "category": "Brushes & Tools", "price": 16, "image": "assets/products/detail-brush-trio.svg", "description": "Designed for studio workflows with a refined balance of performance, versatility, and presentation.", "tag": "Studio Pick"}, {"id": 8, "name": "Linen Canvas Pack", "category": "Canvas & Surfaces", "price": 42, "image": "assets/products/linen-canvas-pack.svg", "description": "A versatile creative essential for painting, illustration, sketching, and mixed-media practice.", "tag": "New"}, {"id": 9, "name": "Museum Canvas Boards", "category": "Canvas & Surfaces", "price": 28, "image": "assets/products/museum-canvas-board.svg", "description": "A carefully curated professional-grade option for artists who want reliable materials and confident results.", "tag": "Featured"}, {"id": 10, "name": "Gallery Stretched Canvas", "category": "Canvas & Surfaces", "price": 36, "image": "assets/products/gallery-canvas.svg", "description": "Designed for studio workflows with a refined balance of performance, versatility, and presentation.", "tag": "Studio Pick"}, {"id": 11, "name": "Pro Illustration Marker Set", "category": "Markers & Color", "price": 46, "image": "assets/products/pro-marker-set.svg", "description": "A versatile creative essential for painting, illustration, sketching, and mixed-media practice.", "tag": "New"}, {"id": 12, "name": "Architect Marker Collection", "category": "Markers & Color", "price": 52, "image": "assets/products/architect-marker-set.svg", "description": "A carefully curated professional-grade option for artists who want reliable materials and confident results.", "tag": "Featured"}, {"id": 13, "name": "Studio Color Marker Pack", "category": "Markers & Color", "price": 32, "image": "assets/products/studio-color-markers.svg", "description": "Designed for studio workflows with a refined balance of performance, versatility, and presentation.", "tag": "Studio Pick"}, {"id": 14, "name": "Graphite Master Drawing Set", "category": "Drawing & Sketching", "price": 31, "image": "assets/products/graphite-master-set.svg", "description": "A versatile creative essential for painting, illustration, sketching, and mixed-media practice.", "tag": "New"}, {"id": 15, "name": "Colored Pencil Studio Set", "category": "Drawing & Sketching", "price": 44, "image": "assets/products/colored-pencil-studio.svg", "description": "A carefully curated professional-grade option for artists who want reliable materials and confident results.", "tag": "Featured"}, {"id": 16, "name": "Sketching Foundation Kit", "category": "Drawing & Sketching", "price": 27, "image": "assets/products/sketching-foundation.svg", "description": "Designed for studio workflows with a refined balance of performance, versatility, and presentation.", "tag": "Studio Pick"}, {"id": 17, "name": "Ceramic Mixing Palette", "category": "Studio Tools", "price": 19, "image": "assets/products/ceramic-mixing-palette.svg", "description": "A versatile creative essential for painting, illustration, sketching, and mixed-media practice.", "tag": "New"}, {"id": 18, "name": "Professional Painter Palette", "category": "Studio Tools", "price": 39, "image": "assets/products/pro-paint-palette.svg", "description": "A carefully curated professional-grade option for artists who want reliable materials and confident results.", "tag": "Featured"}, {"id": 19, "name": "Travel Watercolor Palette", "category": "Studio Tools", "price": 26, "image": "assets/products/travel-palette.svg", "description": "Designed for studio workflows with a refined balance of performance, versatility, and presentation.", "tag": "Studio Pick"}, {"id": 20, "name": "Professional Studio Easel", "category": "Studio Equipment", "price": 129, "image": "assets/products/studio-easel.svg", "description": "A versatile creative essential for painting, illustration, sketching, and mixed-media practice.", "tag": "New"}, {"id": 21, "name": "Tabletop Artist Easel", "category": "Studio Equipment", "price": 79, "image": "assets/products/tabletop-easel.svg", "description": "A carefully curated professional-grade option for artists who want reliable materials and confident results.", "tag": "Featured"}, {"id": 22, "name": "Portable Field Easel", "category": "Studio Equipment", "price": 109, "image": "assets/products/portable-easel.svg", "description": "Designed for studio workflows with a refined balance of performance, versatility, and presentation.", "tag": "Studio Pick"}, {"id": 23, "name": "Mixed Media Creator Kit", "category": "Painting", "price": 48, "image": "assets/products/mixed-media-kit.svg", "description": "A versatile creative essential for painting, illustration, sketching, and mixed-media practice.", "tag": "New"}, {"id": 24, "name": "Professional Gesso", "category": "Painting", "price": 21, "image": "assets/products/professional-gesso.svg", "description": "A carefully curated professional-grade option for artists who want reliable materials and confident results.", "tag": "Featured"}, {"id": 25, "name": "Texture & Modeling Medium", "category": "Painting", "price": 26, "image": "assets/products/texture-medium.svg", "description": "Designed for studio workflows with a refined balance of performance, versatility, and presentation.", "tag": "Studio Pick"}, {"id": 26, "name": "Artist Surface Preparation Kit", "category": "Canvas & Surfaces", "price": 29, "image": "assets/products/artist-surface-kit.svg", "description": "A versatile creative essential for painting, illustration, sketching, and mixed-media practice.", "tag": "New"}, {"id": 27, "name": "Creative Starter Collection", "category": "Drawing & Sketching", "price": 36, "image": "assets/products/creative-starter-set.svg", "description": "A carefully curated professional-grade option for artists who want reliable materials and confident results.", "tag": "Featured"}, {"id": 28, "name": "Premium Artist Gift Set", "category": "Studio Tools", "price": 64, "image": "assets/products/premium-gift-set.svg", "description": "Designed for studio workflows with a refined balance of performance, versatility, and presentation.", "tag": "Studio Pick"}];
const CART_KEY = "artisen-cart-v1";
const THEME_KEY = "artisen-theme";
const $ = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => [...r.querySelectorAll(s)];

function money(n) { return "$" + Number(n).toFixed(2); }
function getCart() { try { return JSON.parse(localStorage.getItem(CART_KEY)||"[]"); } catch { return []; } }
function saveCart(c) { localStorage.setItem(CART_KEY, JSON.stringify(c)); renderCart(); }
function notify(msg) { const t=$(".toast"); if(!t)return; t.textContent=msg; t.classList.add("show"); clearTimeout(window.__toast); window.__toast=setTimeout(()=>t.classList.remove("show"),2300); }

function addToCart(id) {
  const p=PRODUCTS.find(x=>x.id===Number(id)); if(!p)return;
  const c=getCart(); const found=c.find(x=>x.id===p.id);
  if(found) found.qty++; else c.push({id:p.id,qty:1});
  saveCart(c); notify(p.name+" added to cart");
}
function removeFromCart(id) { saveCart(getCart().filter(x=>x.id!==Number(id))); }
function renderCart() {
  const c=getCart(), panel=$("#cart-panel"), list=$("#cart-items"), count=$(".cart-count"), total=$("#cart-total");
  const totalQty=c.reduce((a,x)=>a+x.qty,0);
  if(count) count.textContent=totalQty;
  if(!list)return;
  if(!c.length) list.innerHTML='<p style="color:var(--muted);padding:20px 0">Your cart is ready for something creative.</p>';
  else list.innerHTML=c.map(x=>{const p=PRODUCTS.find(y=>y.id===x.id);return `<div class="cart-item"><img src="${p.image}" alt="${p.name}"><div><b>${p.name}</b><br><small>Qty ${x.qty}</small></div><button class="mini" onclick="removeFromCart(${p.id})">Remove</button></div>`}).join("");
  const total=c.reduce((a,x)=>a+(PRODUCTS.find(y=>y.id===x.id)?.price||0)*x.qty,0);
  
  if(total) $("#cart-total").textContent=money(total);
}
function renderProductGrid(grid, items) {
  if(!grid)return;
  grid.innerHTML=items.map(p=>`<article class="product-card reveal visible" data-category="${p.category}" data-search="${p.name.toLowerCase()} ${p.category.toLowerCase()}">
    <a class="product-media" href="product.html?id=${p.id}"><img src="${p.image}" alt="${p.name}" loading="lazy"><span class="tag">${p.tag}</span></a>
    <p class="eyebrow">${p.category}</p><h3><a href="product.html?id=${p.id}" style="text-decoration:none">${p.name}</a></h3>
    <p class="desc">${p.description}</p>
    <div class="product-bottom"><span class="price">${money(p.price)}</span><div class="mini-actions"><button class="mini add" onclick="addToCart(${p.id})">Add</button><a class="mini" href="product.html?id=${p.id}">View</a></div></div>
  </article>`).join("");
}
function initCatalog() {
  const grid=$("#catalog-grid"); if(!grid)return;
  const search=$("#catalog-search"), filter=$("#catalog-filter");
  const params=new URLSearchParams(location.search); if(params.get("category")) filter.value=params.get("category");
  const apply=()=>{const q=(search.value||"").toLowerCase().trim(), cat=filter.value; const items=PRODUCTS.filter(p=>(!q || (p.name+" "+p.category).toLowerCase().includes(q))&&(cat==="all"||p.category===cat)); renderProductGrid(grid,items); $("#empty")?.toggleAttribute("hidden",items.length!==0);};
  search.addEventListener("input",apply); filter.addEventListener("change",apply); apply();
}
function initProduct() {
  const id=Number(new URLSearchParams(location.search).get("id"))||1, p=PRODUCTS.find(x=>x.id===id)||PRODUCTS[0];
  const img=$("#detail-img"), name=$("#detail-name"), cat=$("#detail-cat"), price=$("#detail-price"), desc=$("#detail-desc"), add=$("#detail-add");
  if(!img)return; img.src=p.image; img.alt=p.name; name.textContent=p.name; cat.textContent=p.category; price.textContent=money(p.price); desc.textContent=p.description+" Ideal for artists building a dependable creative workflow with materials that feel considered from first use to final detail."; add.onclick=()=>addToCart(p.id);
  $("#detail-tag").textContent=p.tag;
  document.title=p.name+" | ARTISEN";
}
document.addEventListener("DOMContentLoaded",()=>{
  if(localStorage.getItem(THEME_KEY)==="dark")document.body.classList.add("dark");
  $("#theme-toggle")?.addEventListener("click",()=>{document.body.classList.toggle("dark");localStorage.setItem(THEME_KEY,document.body.classList.contains("dark")?"dark":"light");});
  $("#menu-toggle")?.addEventListener("click",()=>$("#site-nav")?.classList.toggle("open"));
  $("#cart-toggle")?.addEventListener("click",()=>$("#cart-panel")?.classList.toggle("open"));
  $("#cart-close")?.addEventListener("click",()=>$("#cart-panel")?.classList.remove("open"));
  $("#checkout-demo")?.addEventListener("click",()=>notify("Demo checkout — no payment was processed."));
  $("#clear-cart")?.addEventListener("click",()=>{saveCart([]);notify("Cart cleared");});
  renderCart(); initCatalog(); initProduct();
  $$(".reveal").forEach(x=>x.classList.add("visible"));
  $$("[data-demo-form]").forEach(f=>f.addEventListener("submit",e=>{e.preventDefault(); const s=f.querySelector(".form-status"); if(s)s.textContent="Thanks — this demo form does not send personal information."; notify("Demo form submitted locally");}));
});
