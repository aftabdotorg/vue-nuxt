Vue.createApp({})
  .component("color-button", {
    template: '<button @click="count++">{{count}}</button>',
    data() {
      return {
        count: 0,
      };
    },
  })
  .mount("#app");
