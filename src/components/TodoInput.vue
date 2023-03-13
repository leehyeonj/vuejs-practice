<template>
  <div>
    <input type="text" v-model="newTodoItem" @keyup.enter="addTodo">
    <button @click="addTodo" >저장하기</button>

  </div>
</template>

<script>
import {store} from "@/vuex/store";

export default {
  name : 'TodoInput',

  data : function (){
    return{
      newTodoItem : ""
    }
  },
  methods : {
    addTodo (){
      store.commit('addTodo', {
        id : Math.random(),
        title : this.newTodoItem
      })
      this.newTodoItem = ""
    }
  }

}
</script>