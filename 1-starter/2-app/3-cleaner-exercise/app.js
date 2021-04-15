const app = Vue.createApp({
  data() {
    return {
      text: "Hola",
      confirmedText: "",
    };
  },
  methods: {
    setAlert() {
      alert("Clicked Alert");
    },
    setText(event) {
      this.text = event.target.value;
    },
    setConfirmedText() {
      this.confirmedText = this.text;
    },
  },
});

app.mount("#my-section");
