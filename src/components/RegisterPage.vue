<template>
  <div class="register-container">
    <h2>Registro</h2>
    <form @submit.prevent="handleRegister">
      <div class="form-group">
        <label for="email">E-mail</label>
        <input type="text" id="email" v-model="email" required />
      </div>

      <div class="form-group">
        <label for="password">Senha</label>
        <input type="password" id="password" v-model="password" required />
      </div>

      <button type="submit">Entrar</button>
    </form>

    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      errorMessage: "",
    };
  },
  methods: {
    async handleRegister() {
      try {
        const res = await fetch("http://localhost:3000/auth/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: this.username, // igual ao `email` no outro exemplo
            password: this.password,
          }),
        });

        const data = await res.json();

        if (data.token) {
          // Exibe o token ou salva localmente
          alert("Registro realizado com sucesso!");
          localStorage.setItem("token", data.token);
          // Opcional: redirecionar
          this.$router.push("/login");
        } else {
          this.errorMessage = data.error || "Erro ao fazer registro";
        }
      } catch (error) {
        this.errorMessage = "Erro ao conectar com o servidor.";
        console.error(error);
      }
    },
  },
};
</script>

<style scoped>
.register-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.form-group {
  margin-bottom: 15px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.error {
  color: red;
  font-size: 14px;
  margin-top: 10px;
}
</style>
