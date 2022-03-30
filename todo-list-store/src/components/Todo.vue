<template>
  <div>
    <div v-if="todo.completed == false" class="form-check">
      <input
        class="form-check-input"
        type="checkbox"
        value=""
        id="flexCheckDefault"
        @change="
          $store.dispatch('updateTodoStatus', todo, $event.target.checked)
        "
      />
    </div>
    <div v-if="todo.completed" class="form-check">
      <input
        class="form-check-input"
        type="checkbox"
        value=""
        id="flexCheckDefault"
        checked
        @change="
          $store.dispatch('updateTodoStatus', todo, $event.target.checked)
        "
      />
    </div>

    <div>
      <h2
        :class="{
          'is-completed': todo.completed,
        }"
      >
        {{ todo.title }}
      </h2>
      <div class="d-flex justify-content-end">
        <button @click="editTodo" class="btn btn-secondary btn-margin">
          Edit
        </button>
        <button id="deleteBtn" @click="deleteOneTodo()" class="btn btn-warning">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: ["todo"],
  name: "Todo-item",
  methods: {
 
    editTodo() {
      this.$store.commit("editTodo", this.todo);
    },
    deleteOneTodo() {
      this.$store.dispatch("deleteOneTodo", this.todo);
    },
  },
};
</script>

<style>
.is-completed {
  text-decoration: line-through;
}
.btn-margin {
  margin-right: 10px !important;
}
</style>