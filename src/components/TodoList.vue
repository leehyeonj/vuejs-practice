<template>
  <div>
    <div v-for="item in todoList" v-bind:key="item">
      {{item}}
    </div>
  </div>
</template>

<script>
import {store} from "@/vuex/store";

export default {
  data : function (){
    return {

    }
  },
  computed : {
    todoList (){
      return store.state.todoList
    }
  }

}
</script>