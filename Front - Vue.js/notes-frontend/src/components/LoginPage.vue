<template>
  <div class="login-container">
    <h2>Login</h2>
    <form @submit.prevent="handleLogin">
      <div class="form-group">
        <label for="username">Usuário</label>
        <input type="text" id="username" v-model="username" required />
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
    handleLogin() {
      // Aqui você pode validar os dados ou fazer uma chamada para o backend
      if (this.username === "admin" && this.password === "senha123") {
        // Simulação de login bem-sucedido
        this.$router.push("/home"); // Redireciona para a página inicial ou dashboard
      } else {
        this.errorMessage = "Usuário ou senha incorretos";
      }
    },
  },
};
</script>

<style scoped>
.login-container {
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
