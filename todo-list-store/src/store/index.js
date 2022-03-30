import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [],
    todo: {
      id: 0,
      title: "",
      completed: false,
    },
  },
  getters: {
    todos: (state) => state.todos,
    todo: (state) => state.todo,
  },
  mutations: {
    getTodos(state, response) {
      state.todos = response;
    },
    updateTodo(state, response) {
      state.todos = state.todos.map((t) => {
        if (response.id === t.id) {
          return response;
        }
        return t;
      });
    },
    editTodo(state, todoItem) {
      state.todo = todoItem;
    },
    deleteTodo(state,id){
      state.todos = state.todos.filter((todo) => todo.id !== id);
    }
  },
  actions: {
    async getTodos({ commit }) {
      await axios
        .get("http://localhost:3000/todos")
        .then((res) => commit("getTodos", res.data))
        .catch((err) => console.log(err));
    },
    async addTodo() {
      if (this.state.todo.title != "") {
        console.log('if ok');
        let newTodo = {
          title: this.state.todo.title,
          completed: false,
        };
        await axios.post("http://localhost:3000/todos", newTodo).then((res) => {
          this.state.todos = [res.data, ...this.state.todos];
          this.state.todo.title = "";
        });
      } else {
        alert("Veuillez saisir d'abord le titre de l'élément !");
      }
    },
    async updateTodo({ commit }) {
      console.log(this.state.todo.id)
      await axios.put(`http://localhost:3000/todos/${this.state.todo.id}`, this.state.todo).then((res) =>
        commit('updateTodo', res.data))
        .catch((err) => console.log(err));
        this.state.todo.title="";

    },
    async updateTodoStatus({ commit }, todoItem) {
      this.state.todo = todoItem;
      this.state.todo.completed = !this.state.todo.completed;
      await axios.put(`http://localhost:3000/todos/${this.state.todo.id}`, this.state.todo).then((res) =>
        commit('updateTodo', res.data))
        .catch((err) => console.log(err));
        this.state.todo.title="";

    },
    async deleteOneTodo({commit},todoItem) {
      console.log(todoItem.id);
      if (confirm("Voulez vous vraiment supprimer cet élément !")) {
        await axios.delete(`http://localhost:3000/todos/${todoItem.id}`).then(() => {
          commit('deleteTodo',todoItem.id)
        });
      }
    },
  },
})
