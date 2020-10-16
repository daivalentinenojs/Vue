const app = Vue.createApp({
    data() {
      return { 
        enteredTask: '',
        tasks: [],
        showOrHide: 'Show'
      };
    },
    methods: {
      addTask() {
        this.tasks.push(this.enteredTask);
        this.enteredTask = '';
        if (this.tasks.length > 0) {
            this.showOrHide = 'Hidden';
        }
      },
      updateVisibility () {
        if (this.showOrHide == 'Show') {
            this.showOrHide = 'Hidden';
        } else {
            this.showOrHide = 'Show';
        }
      }
    }
  });
  
  app.mount('#assignment');
  