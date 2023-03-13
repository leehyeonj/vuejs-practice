import Vue from "vue";
import { VueQueryPlugin, QueryClient, hydrate } from "vue-query";

export default (context) => {
  // 여기서 vue query의 global setting을 할 수 있다
  const queryClient = new QueryClient({
    defaultOptions: { queries: { staleTime: 1000 } },
  });
  const options = { queryClient };

  Vue.use(VueQueryPlugin, options);

  if (process.client) {
    if (context.nuxtState && context.nuxtState["vue-query"]) {
      hydrate(queryClient, context.nuxtState["vue-query"]);
    }
  }
};
