const app = Vue.createApp({
  data() {
    return {
      todo: "",
      todoList: [],
    };
  },
  computed: {
    messageHelper() {
      let setting = {};
      if (!this.todo) {
        setting = {
          message: "Masukan Pesan!",
          style: { "is-danger": !this.todo },
        };
      } else {
        setting = {
          message: "Siap ditampung, tekan Enter!",
          style: { "is-success": this.todo },
        };
      }
      return setting;
    },
  },
  methods: {
    enterHandler(e) {
      this.todoList.push(e.target.value);
      this.todo = "";
    },
    removeTodo(index) {
      this.todoList.splice(index, 1);
    },
  },
});

app.mount("#my-section");
