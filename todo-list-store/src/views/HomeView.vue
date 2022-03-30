<template>
  <div class="home">
    <Nav/>
    <Todos/>
  </div>
</template>

<script>
import Todos from '../components/Todos.vue'
import Nav from '../components/Nav.vue'

export default {
  name: 'HomeView',
  components: {
    Todos,
    Nav
  }
}
</script>
