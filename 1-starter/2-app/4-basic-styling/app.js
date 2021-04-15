const app = Vue.createApp({
    data() {
        return {
            isActive: false,
        };
    },
    computed: {
        mainButton() {
            return { "is-loading": this.isActive, "is-danger": this.isActive };
        },
    },
    methods: {
        handleClick() {
            this.isActive = !this.isActive;
        },
    },
});

app.mount("#my-section");
