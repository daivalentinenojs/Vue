const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      // $ sign is used to define Vue variable
      this.message = this.$refs.userText
      // Will print the HTML code, such as <input type="text">
      console.log(this.$refs.userText); 
      // Will print the input directory
      console.dir(this.$refs.userText);
      // Will print the inputted value
      this.message = this.$refs.userText.value;
    },
    beforeCreate() {
      console.log('beforeCreate()');
    },
    created() {
      console.log('created()');
    },
    beforeMount() {
      console.log('beforeMount()');
    },
    mounted() {
      console.log('mounted()');
    },
    beforeUpdate() {
      console.log('beforeUpdate()');
    },
    updated() {
      console.log('updated()');
    },
    beforeUnmount() {
      console.log('beforeUnmount()');
    },
    unmounted() {
      console.log('unmounted()');
    }
  },
});

app.mount('#app');

setTimeout(function () {
  app.unmount();
}, 3000);

// let message = 'Hello!';
// let longMessage = message + ' World!';
// console.log(longMessage);
// message = 'Hello!!!';
// console.log(longMessage);

// Result
// Hello! World!
// Hello! World!

// const data = {
//   message: 'Hello!'
// };

// const handler = {
//   set(target, key, value) {
//     console.log(target);
//     console.log(key);
//     console.log(value);
//   }
// };

// const proxy = new Proxy(data, handler);
// proxy.message = 'Hello!!!';

// Result
// {message: "Hello!"}
// message
// Hello!!!

// const data = {
//   message: 'Hello!',
//   longMessage: 'Hello! World!'
// };

// const handler = {
//   set(target, key, value) {
//     if (key === 'message') {
//       target.longMessage = value + ' World!';
//     }
//     target.message = value;
//   }
// };

// const proxy = new Proxy(data, handler);
// proxy.message = 'Hello!!!';

// console.log(proxy.longMessage);

// Result
// Hello!!! World!

const app2 = Vue.createApp({
  template: `
    <p>{{ favoriteMeal }}</p>
  `,
  data() {
    return {
      favoriteMeal: 'Pizza!'
    };
  }
});

app2.mount('#app2');