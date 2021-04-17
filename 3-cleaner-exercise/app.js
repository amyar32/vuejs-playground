const app = Vue.createApp({
  data() {
    return {
      text: "",
      confirmedText: "",
    };
  },
  watch: {
    // nama method di bawah sm dengan data, jd ketika data berubah, method dbwh dieksekusksi otomatis
    text(newVal, oldVal) {
      console.log(newVal + " text changed");
      console.log("before " + oldVal);
    },
  },
  computed: {
    someComputed() {
      if (!this.text) {
        return "";
      } else {
        return this.text + " computed!";
      }
    },
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
