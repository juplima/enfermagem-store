
// LISTA DE PRODUTOS — COMPLETA
const produtos = [
    {
        id: 1,
        nome: "Crocs Profissional Azul",
        preco: 149.90,
        descricao: "Conforto ideal para longos plantões.",
        imagem: "https://i.pinimg.com/1200x/55/ba/d5/55bad5b37972f6698033334ef279d263.jpg"
    },
    {
        id: 2,
        nome: "Crocs Profissional Rosa",
        preco: 149.90,
        descricao: "Macio, antiderrapante e leve.",
        imagem: "https://i.pinimg.com/736x/3d/f4/e8/3df4e8e5c5d6688f8f2fe89892dc81ea.jpg"
    },
    {
        id: 3,
        nome: "Crocs com Pingentes",
        preco: 179.90,
        descricao: "Modelo exclusivo com pingentes temáticos.",
        imagem: "https://i.pinimg.com/736x/e6/a5/99/e6a5991e84889ec5ddaccce31c8b2a90.jpg"
    },
    {
        id: 4,
        nome: "Scrub Azul Royal",
        preco: 199.90,
        descricao: "Tecido leve, confortável e resistente.",
        imagem: "https://i.pinimg.com/736x/d7/57/8e/d7578eee8f04fdc117e8791bf9c17ca0.jpg"
    },
    {
        id: 5,
        nome: "Scrub Verde Claro",
        preco: 199.90,
        descricao: "Preferido por profissionais da saúde.",
        imagem: "https://i.pinimg.com/736x/56/f9/ff/56f9ffa96cf3acef88e13addc51b97b6.jpg"
    },
    {
        id: 6,
        nome: "Jaleco Feminino Premium",
        preco: 229.90,
        descricao: "Tecido antibacteriano e elegante.",
        imagem: "https://i.pinimg.com/1200x/52/0a/0e/520a0e7f13da403b9cb4e3ce4fc583e8.jpg"
    },
    {
        id: 7,
        nome: "Estetoscópio Profissional Preto",
        preco: 129.90,
        descricao: "Alta sensibilidade acústica.",
        imagem: "https://i.pinimg.com/1200x/3d/29/19/3d291930e041155914e3591ee41ce177.jpg"
    },
    {
        id: 8,
        nome: "Estetoscópio Rosa",
        preco: 139.90,
        descricao: "Um toque estiloso ao seu plantão.",
        imagem: "https://i.pinimg.com/736x/b6/10/86/b610869aed48c752efaae1bdb18e9c79.jpg"
    },
    {
        id: 9,
        nome: "Pingentes para Crocs (kit)",
        preco: 29.90,
        descricao: "Kits variados, coloridos e temáticos.",
        imagem: "https://i.pinimg.com/736x/59/e7/04/59e704dd456bf2c8df179603b77e4124.jpg"
    },
    {
        id: 10,
        nome: "Relógio de Enfermagem",
        preco: 39.90,
        descricao: "Ideal para medir sinais vitais.",
        imagem: "https://i.pinimg.com/1200x/d2/ce/84/d2ce843d563af41c978eeb23c3a62228.jpg"
    },
    {
        id: 11,
        nome: "Porta-crachá Retrátil",
        preco: 19.90,
        descricao: "Seguro, prático e resistente.",
        imagem: "https://i.pinimg.com/736x/3e/be/bc/3ebebc24d0c542cb0f5be112c7ce2572.jpg"
    }
];
// PÁGINA PRODUTO — DINÂMICO
if (window.location.pathname.includes("produto.html")) {

    const url = new URLSearchParams(window.location.search);
    const idProduto = parseInt(url.get("id"));

    const produto = produtos.find(p => p.id === idProduto);

    if (produto) {
        document.getElementById("product-image").src = produto.imagem;
        document.getElementById("product-name").textContent = produto.nome;
        document.getElementById("product-desc").textContent = produto.descricao;
        document.getElementById("product-price").textContent = 
            "R$ " + produto.preco.toFixed(2).replace(".", ",");

        // Botão adicionar ao carrinho
        document.getElementById("addToCart").onclick = () => {
            addToCart(produto.id);
        };
    }
}




// --------------------
// ADICIONAR AO CARRINHO (DINÂMICO)
// --------------------
document.addEventListener("DOMContentLoaded", () => {

    // Só roda se estivermos na página produto.html
    if (window.location.pathname.includes("produto.html")) {

        const url = new URLSearchParams(window.location.search);
        const idProduto = parseInt(url.get("id"));

        const produto = produtos.find(p => p.id === idProduto);

        const addBtn = document.getElementById("addToCart");

        if (produto && addBtn) {
            addBtn.addEventListener("click", () => {
                addToCart(produto.id);
            });
        }
    }

    loadCart();
});


// --------------------
// FUNÇÃO PARA ADICIONAR
// --------------------
function addToCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const produto = produtos.find(p => p.id === id);

    if (!produto) return;

    let existing = cart.find(item => item.id === id);

    if (existing) {
        existing.quantidade += 1;
    } else {
        cart.push({
            id: produto.id,
            nome: produto.nome,
            preco: produto.preco,
            imagem: produto.imagem,
            quantidade: 1
        });
  }

    // MENSAGEM DE SUCESSO
    alert("Produto adicionado ao carrinho!");

    localStorage.setItem("cart", JSON.stringify(cart));
}







// --------------------
// CARREGAR CARRINHO
// --------------------
function loadCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartItems = document.getElementById("cart-items");
    let empty = document.getElementById("empty-cart");
    let totalDiv = document.getElementById("cart-total");

    if (!cartItems) return;

    cartItems.innerHTML = "";

    if (cart.length === 0) {
        empty.classList.remove("d-none");
        totalDiv.classList.add("d-none");
        return;
    }

    empty.classList.add("d-none");
    totalDiv.classList.remove("d-none");

    let total = 0;

    cart.forEach(item => {
        total += item.preco * item.quantidade;

        cartItems.innerHTML += `
            <div class="card mb-3 shadow-sm">
                <div class="card-body d-flex justify-content-between align-items-center">
                    
                    <div class="d-flex align-items-center">
                        <img src="${item.imagem}" width="70" class="rounded me-3">
                        <div>
                            <h5>${item.nome}</h5>
                            <p class="text-primary fw-bold">R$ ${item.preco.toFixed(2)}</p>
                        </div>
                    </div>

                    <div class="text-end">
                        <button class="btn btn-sm btn-outline-secondary" onclick="changeQty(${item.id}, -1)">-</button>
                        <span class="mx-2">${item.quantidade}</span>
                        <button class="btn btn-sm btn-outline-secondary" onclick="changeQty(${item.id}, 1)">+</button>

                        <button class="btn btn-sm btn-danger ms-3" onclick="removeItem(${item.id})">
                            Remover
                        </button>
                    </div>
                </div>
            </div>
        `;
    });

    document.getElementById("total-value").textContent =
        "R$ " + total.toFixed(2);
}


// --------------------
// ALTERAR QUANTIDADE
// --------------------
function changeQty(id, amount) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let item = cart.find(p => p.id === id);
    if (!item) return;

    item.quantidade += amount;

    if (item.quantidade <= 0) {
        cart = cart.filter(p => p.id !== id);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
}


// --------------------
// REMOVER ITEM
// --------------------
function removeItem(id) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.filter(p => p.id !== id);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
}

// ------------
// CHECKOUT
// ------------
function loadCheckout() {
    let container = document.getElementById("checkout-items");
    let totalEl = document.getElementById("checkout-total");

    if (!container) return; // só roda se estiver na página checkout

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let total = 0;

    cart.forEach(item => {
        total += item.preco * item.quantidade;

        container.innerHTML += `
            <div class="d-flex justify-content-between mb-2">
                <span>${item.nome} (x${item.quantidade})</span>
                <span class="fw-bold">R$ ${(item.preco * item.quantidade).toFixed(2)}</span>
            </div>
        `;
    });

    totalEl.textContent = "R$ " + total.toFixed(2);

    // Quando o formulário for enviado → vai para página "Obrigado"
    const form = document.getElementById("checkout-form");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            localStorage.removeItem("cart"); // limpar carrinho
            window.location.href = "../finalizacao/obrigado.html";
        });
    }
}

document.addEventListener("DOMContentLoaded", loadCheckout);

// ----------------------------
// CADASTRO
// ----------------------------
if (document.getElementById("registerForm")) {
    document.getElementById("registerForm").addEventListener("submit", (e) => {
        e.preventDefault();

        const nome = document.getElementById("regNome").value;
        const email = document.getElementById("regEmail").value;
        const senha = document.getElementById("regSenha").value;

        let users = JSON.parse(localStorage.getItem("users")) || [];

        if (users.find(u => u.email === email)) {
            alert("Este e-mail já está cadastrado!");
            return;
        }

        users.push({ nome, email, senha });
        localStorage.setItem("users", JSON.stringify(users));

        alert("Conta criada com sucesso!");
        window.location.href = "login.html";
    });
}



// ----------------------------
// LOGIN
// ----------------------------
if (document.getElementById("loginForm")) {
    document.getElementById("loginForm").addEventListener("submit", (e) => {
        e.preventDefault();

        const email = document.getElementById("loginEmail").value;
        const senha = document.getElementById("loginSenha").value;

        let users = JSON.parse(localStorage.getItem("users")) || [];

        const user = users.find(u => u.email === email && u.senha === senha);

        if (!user) {
            alert("E-mail ou senha incorretos!");
            return;
        }

        localStorage.setItem("userLogged", JSON.stringify(user));
        window.location.href = "conta.html";
    });
}



// ----------------------------
// LOGOUT
// ----------------------------
function logout() {
    localStorage.removeItem("userLogged");
    window.location.href = "login.html";
}

// ----------------------
// LOGIN DO ADMIN
// ----------------------
if (document.getElementById("adminLoginForm")) {
    document.getElementById("adminLoginForm").addEventListener("submit", (e) => {
        e.preventDefault();

        const user = document.getElementById("adminUser").value;
        const senha = document.getElementById("adminSenha").value;

        if (user === "admin" && senha === "123") {
            localStorage.setItem("adminLogged", "true");
            window.location.href = "../dashboard/admin-dashboard.html";
        } else {
            alert("Credenciais inválidas!");
        }
    });
}

// ----------------------
// LOGOUT ADMIN
// ----------------------
function adminLogout() {
    localStorage.removeItem("adminLogged");
    window.location.href = "../login/admin-login.html";
}


// ----------------------
// CARREGAR PRODUTOS NO ADMIN
// ----------------------
function loadAdminProducts() {
    const list = document.getElementById("adminProductsList");
    if (!list) return;

    const products = JSON.parse(localStorage.getItem("adminProducts")) || [];

    list.innerHTML = "";

    products.forEach((p, index) => {
        list.innerHTML += `
        <tr>
            <td>${index + 1}</td>
            <td>${p.nome}</td>
            <td>R$ ${p.preco.toFixed(2)}</td>
            <td>
    <button class="btn btn-sm btn-warning me-2" onclick="editAdminProduct(${index})">
        Editar
    </button>

    <button class="btn btn-sm btn-danger" onclick="removeAdminProduct(${index})">
        Excluir
    </button>
</td>

        </tr>
        `;
    });
}


// ----------------------
// NOVO PRODUTO
// ----------------------
if (document.getElementById("newProductForm")) {
    document.getElementById("newProductForm").addEventListener("submit", (e) => {
        e.preventDefault();

        const nome = document.getElementById("prodNome").value;
        const preco = parseFloat(document.getElementById("prodPreco").value);
        const imagem = document.getElementById("prodImg").value;

        let products = JSON.parse(localStorage.getItem("adminProducts")) || [];

        products.push({ nome, preco, imagem });

        localStorage.setItem("adminProducts", JSON.stringify(products));

        alert("Produto adicionado!");
        window.location.href = "admin-produtos.html";
    });
}


// ----------------------
// REMOVER PRODUTO
// ----------------------
function removeAdminProduct(index) {
    let products = JSON.parse(localStorage.getItem("adminProducts")) || [];

    products.splice(index, 1);

    localStorage.setItem("adminProducts", JSON.stringify(products));

    loadAdminProducts();
}

function editAdminProduct(index) {
    localStorage.setItem("editProductIndex", index);
    window.location.href = "admin-editar-produto.html";
}

// ----------------------
// EDITAR PRODUTO
// ----------------------
if (document.getElementById("editProductForm")) {
    document.getElementById("editProductForm").addEventListener("submit", (e) => {
        e.preventDefault();

        const index = localStorage.getItem("editProductIndex");

        let products = JSON.parse(localStorage.getItem("adminProducts")) || [];

        products[index] = {
            nome: document.getElementById("editNome").value,
            preco: parseFloat(document.getElementById("editPreco").value),
            imagem: document.getElementById("editImg").value
        };

        localStorage.setItem("adminProducts", JSON.stringify(products));
        localStorage.removeItem("editProductIndex");

        alert("Produto atualizado com sucesso!");
        window.location.href = "admin-produtos.html";
    });
}

// ----------------------------
// ADMIN: CARREGAR PEDIDOS
// ----------------------------
function loadAdminOrders() {
    const tbody = document.getElementById("adminOrdersList");
    if (!tbody) return;

    const pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];

    tbody.innerHTML = "";

    pedidos.forEach((p, index) => {
        tbody.innerHTML += `
        <tr>
            <td>${p.id}</td>
            <td>${p.nomeCliente}</td>
            <td>R$ ${p.total.toFixed(2)}</td>
            <td>${p.data}</td>
            <td>
                <button class="btn btn-sm btn-danger" onclick="removeAdminOrder(${index})">
                    Excluir
                </button>
            </td>
        </tr>
        `;
    });
}

// ----------------------------
// ADMIN: REMOVER PEDIDO
// ----------------------------
function removeAdminOrder(index) {
    const pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];

    pedidos.splice(index, 1);

    localStorage.setItem("pedidos", JSON.stringify(pedidos));

    loadAdminOrders();
}

