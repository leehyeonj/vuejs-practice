import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state : {
        todoList : ["vue 공부하기"]
    },
    mutations : {
        addTodo : function (state, payload){
            return state.todoList = [...state.todoList, payload]
        }
    }
})
