const app = Vue.createApp({
  data() {
    return {
      user: {
        username: "amyar",
        email: "amyar@amyar.com",
      },
    };
  },
});

app.component("my-comp", {
  template: `
  <div class="content">
       <h3>{{ user.username }}</h3>
       <h4>{{ user.email }}</h4>
    </div>
  `,
  data() {
    return {
      user: {
        username: "tiko",
        email: "tiko@mail.com",
      },
    };
  },
});

app.mount("#my-section");
