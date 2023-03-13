<template>
  <div>
    <div v-for="item in todos" v-bind:key="item.id" class="flex">
      <p>{{ item.title }}</p>
      <!-- <p @click="deleteTodo(item.id)">x</p> -->
    </div>
  </div>
</template>

<script>
// import { store } from "@/vuex/store";

import { defineComponent, ref } from "vue";
import { getTodoList } from "../service/todo";

export default defineComponent({
  name: "todoList",

  setup() {
    const todos = ref([]);
    const _getTodoList = async () => {
      try {
        const { data } = await getTodoList();
        console.log(data);
        todos.value = data;
      } catch (e) {
        console.log(e);
      }
    };

    _getTodoList();
    return {
      todos,
    };
  },
});
</script>

<style>
.flex {
  display: flex;
}
</style>
