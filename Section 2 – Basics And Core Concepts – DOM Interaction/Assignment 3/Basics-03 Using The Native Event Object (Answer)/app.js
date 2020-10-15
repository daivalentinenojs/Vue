const app = Vue.createApp({
    data() {
      return {
        counter: 0,
        result: '',
      };
    },
    watch: {
      counter(value) {
        if (value <= 37) {
            this.result = 'Not there yet'
            const that = this;
            setTimeout(function () {
                that.counter = 0;
            }, 5000);       
        } else {
            this.result = 'Too much!'
        }
      }
    },
    methods: {
      add(num) {
        this.counter = this.counter + num;
      }
    }
  });
  
  app.mount('#assignment');
  