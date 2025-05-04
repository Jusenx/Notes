<template>
  <div class="notes-container">
    <h2>Minhas Notas</h2>

    <form @submit.prevent="addNote">
      <input
        v-model="newNote"
        id="title"
        placeholder="Digite a Tarefa"
        required
      />
      <input
        v-model="newNote"
        id="content"
        placeholder="Digite uma descrição"
        required
      />
      <button type="submit">Adicionar</button>
    </form>

    <ul>
      <li v-for="note in notes" :key="note.id">{{ note.content }}</li>
    </ul>

    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newNote: "",
      notes: [],
      errorMessage: "",
    };
  },
  async created() {
    await this.fetchNotes(); // Busca as notas ao entrar na tela
  },
  methods: {
    async fetchNotes() {
      const token = localStorage.getItem("token");
      try {
        const res = await fetch("http://localhost:3000/notes", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();
        if (res.ok) {
          this.notes = data;
        } else {
          this.errorMessage = data.error || "Erro ao carregar notas.";
        }
      } catch (err) {
        this.errorMessage = "Erro de conexão com o servidor.";
      }
    },
    async addNote() {
      const token = localStorage.getItem("token");
      try {
        const res = await fetch("http://localhost:3000/notes", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            title: this.newNote,
            content: this.newNote,
          }),
        });

        const data = await res.json();

        if (res.ok) {
          this.notes.push(data); // Adiciona a nova nota na lista
          this.newNote = "";
        } else {
          this.errorMessage = data.error || "Erro ao criar nota.";
        }
      } catch (err) {
        this.errorMessage = "Erro ao conectar com o servidor.";
      }
    },
  },
};
</script>

<style scoped>
.notes-container {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
}

form {
  margin-bottom: 20px;
}

input {
  width: 70%;
  padding: 8px;
  margin-right: 5px;
}

button {
  padding: 8px 12px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  background: #f2f2f2;
  margin: 5px 0;
  padding: 10px;
  border-radius: 4px;
}

.error {
  color: red;
  font-size: 14px;
}
</style>
