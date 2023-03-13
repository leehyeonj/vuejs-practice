<template>
  <div class="hello">
    <router-link to="/todo">todolist</router-link>
    <h1 @click="onClick">{{ msg }}</h1>
    <div v-for="category in categoryList" v-bind:key="category.id">
      {{ category.name }}
      <li v-for="(sub, index) in category.subCategories" v-bind:key="index">
        {{ sub.name }}
      </li>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  methods: {
    onClick(e) {
      console.log(e);
      dispatchEvent(new KeyboardEvent("keydown", { key: "Shift" }));
    },
  },

  setup() {
    const categoryList = [
      {
        id: 1,
        name: "여성의류",
        subCategories: [
          { name: "아우터" },
          {
            name: "티탑",
          },
        ],
      },
    ];

    return {
      categoryList,
    };
  },
};
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
