<template>
  <div class="container">
    <h1 class="title">List of Todos</h1>
    <div class="form-group">
      <input
        v-model="$store.state.todo.title"
        placeholder=" Add new Todo ..."
        type="text"
        class="form-control input-margin"
      />
    </div>
    <div class="d-grid gap-2">
      <button
        @click="$store.dispatch('addTodo')"
        class="btn btn-block btn-color"
      >
        Add Todo
      </button>
      <button
        @click="$store.dispatch('updateTodo')"
        class="btn btn-block btn-secondary"
      >
        Update Todo
      </button>
    </div>
    <ul class="list-group">
      <li class="list-group-item" v-for="todo in todos" :key="todo.id">
        <Todo
          :todo="todo"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import Todo from "./Todo.vue";

export default {
  components: { Todo },
  name: "Todos-comp",

  computed: {
    todos() {
      return this.$store.getters.todos;
    },
    myTodo() {
      return this.$store.getters.todo;
    },
  },
 
  mounted() {
    this.$store.dispatch("getTodos");
  },
};
</script>

<style>
.title {
  text-align: center;
  margin-top: 15px;
  margin-bottom: 15px;
}
.container {
  width: 50% !important;
}
.btn-color {
  background-color: #008b8b !important;
  color: white !important;
  margin-top: 15px;
  margin-bottom: 15px;
}
.input-margin {
  margin-bottom: 15px;
}
</style>
