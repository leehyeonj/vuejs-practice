<template>
  <div>
    <router-link to="/">Home</router-link>
    <input type="text" v-model="newTodoItem" @keyup.enter="addTodo" />
    <button @click="addTodo">저장하기</button>
    <div v-for="item in todos" v-bind:key="item.id" class="flex">
      <p>{{ item.title }}</p>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import TodoList from "../components/TodoList.vue";
import TodoInput from "../components/TodoInput.vue";
import { getTodoList, addTodoSv } from "../service/todo";

export default defineComponent({
  name: "TodoPage",
  components: {
    TodoInput,
    TodoList,
  },
  setup() {
    const todos = ref([]);
    const newTodoItem = ref("");
    const _getTodoList = async () => {
      try {
        const { data } = await getTodoList();

        todos.value = data;
      } catch (e) {
        console.log(e);
      }
    };

    const addTodo = async () => {
      try {
        await addTodoSv({ title: newTodoItem.value });
        newTodoItem.value = "";
        _getTodoList();
      } catch (e) {
        console.log(e);
      }
    };

    _getTodoList();
    return {
      todos,
      newTodoItem,
      addTodo,
    };
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
