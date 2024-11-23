<script>
import TodoApp from './components/TodoApp.vue'
import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'App',
  components: {
    TodoApp,
    HelloWorld
  }
}
</script>

<template>
  <div>
    <TodoApp />
    <HelloWorld msg="¡Este es un mensaje para el Prop!" />
  </div>

</template>

<style scoped></style>
