// 라우터 인스턴스 생성

import TodoPage from "../views/TodoPage.vue";
import HelloWorld from "../views/HelloWorld.vue";
import Vue from "vue";
import VueRouter from "vue-router";

export const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: HelloWorld },
    { path: "/todo", component: TodoPage },
  ],
});
Vue.use(VueRouter);
