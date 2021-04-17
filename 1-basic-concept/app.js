//DECLARATIVE APPROACH FANCY AF OMEGALUL
// we like define a template and then control from here

const app = Vue.createApp({
  data() {
    //return object selalu object
    return {
      //any key-val like message or anything
      //data dibawah akan berada di object global vue, bisa diakses lewat this context
      // vue weird
      messageA: "helo",
      messageB: "<h1>helo mom<h1>",
      mLink: "http://facebook.com",
    };
  },

  methods: {
    changeMessage() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.messageA;
      } else {
        return this.messageB;
      }
    },
  },
});

//wants a string, apapun yang ingin dikontrol
app.mount("#messageing");
