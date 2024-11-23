<template>
  <div>
    <h1>Lista de tareas</h1>
    <div>
      <ul>
        <li v-for="todo in todoList" :key="todo.id" data-test="tarea" :class="[todo.completed ? 'completed' : '']">
          {{ todo.description }}
          <input type="checkbox" v-model="todo.completed" data-test="checkbox">
        </li>
      </ul>
    </div>
    <form data-test="form" @submit.prevent="crearTarea">
      <input type="text" data-test="nueva-tarea" v-model="nuevaTarea" placeholder="Escribe una nueva tarea" />
      <button type="submit">Agregar</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'TodoApp',
  data() {
    return {
      nuevaTarea: '',
      todoList: [
        { id: 1, description: 'Description toDo 1', completed: false }
      ]
    };
  },
  methods: {
    crearTarea() {
      if (this.nuevaTarea.trim() === '') return;

      this.todoList.push({
        id: this.todoList.length + 1,
        description: this.nuevaTarea,
        completed: false
      });

      this.nuevaTarea = '';
    }
  }
};
</script>

<style>
.completed {
  text-decoration: line-through;
}
</style>
