const app = Vue.createApp({
    data() {
      return {
        userName:'',
        enterUserName:''
      };
    },
    methods: {
      enterRegisterUser (event) {
        this.enterUserName = event.target.value;
      },
      registerUser (event) {
        this.userName = event.target.value;
      },
      submitForm () {
        alert('Submitted !');
      }
    }
  });
  
  app.mount('#assignment');
  