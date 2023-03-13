// 라우터 인스턴스 생성

import TodoList from "../components/TodoList.vue";
import HelloWorld from "../components/HelloWorld.vue";
import Vue from "vue";
import VueRouter from "vue-router";

export const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: HelloWorld },
    { path: "/todo", component: TodoList },
  ],
});
Vue.use(VueRouter);
