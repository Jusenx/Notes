const API_URL = "http://localhost:3000/auth";

async function register() {
  const email = document.getElementById("registerEmail").value;
  const password = document.getElementById("registerPassword").value;

  const res = await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();
  alert(data.message || data.error);
}

async function login() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  const res = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();

  if (data.token) {
    document.getElementById("tokenBox").textContent = data.token;
    alert("Login realizado com sucesso!");
  } else {
    alert(data.error || "Erro ao fazer login");
  }
}
