<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
   <TodoInput/>
   <todo-list></todo-list>
  </div>
</template>

<script>
import TodoInput from "@/components/TodoInput.vue";
import TodoList from "@/components/TodoList.vue";

export default {
  name: "App",
  components: {
    TodoList,
    TodoInput,

  },

};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
