import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state : {
        todoList : [{id : 1, title : 'vue 공부하기'}]
    },
    mutations : {
        addTodo : function (state, payload){
            return state.todoList = [...state.todoList, payload]
        },
        deleteTodo : function (state, payload){
            return state.todoList = state.todoList.filter((todo) => todo.id !== payload);
        }

    }
})
