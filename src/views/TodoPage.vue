<template>
  <div>
    <router-link to="/">Home</router-link>
    <todo-input></todo-input>
    <todo-list></todo-list>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import TodoList from "../components/TodoList.vue";
import TodoInput from "../components/TodoInput.vue";

export default defineComponent({
  name: "TodoPage",
  components: {
    TodoInput,
    TodoList,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
