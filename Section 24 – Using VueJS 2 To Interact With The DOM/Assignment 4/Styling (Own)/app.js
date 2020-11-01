new Vue({
  el: '#exercise',
  data: {
    // number 1
    clicked: false,
    clicked_class: null,
    time: 0,
    // number 2 and 3
    arr_class: [],
    // number 4
    inputedClass: '',
    className: null,
    classStatus: null,
    // number 5
    inputedColor: null,
    // number 6
    valueProgress: 0,
    timer: null
  },
  computed: {
    print_arr_class: function() {
      if (this.arr_class.length > 0) {
        return this.arr_class
      } else {
        return 'I got no class :('
      }
    },
    inputedClassTF: function() {
      return this.className;
    }
  },
  methods: {
    startEffect: function() {
      if (this.clicked === false) {
        started = setInterval(this.clockRunning, 1000);	
        this.clicked = true;
      } else if (this.clicked === true) {
        this.time = 0;
        this.clicked = false;        
      }
    },
    clockRunning: function() {
      this.time++;
      if (this.time % 2 == 0) {
        this.clicked_class = 'hightlight';
      } else {
        this.clicked_class = 'shrink';
      }
    },
    addClass: function(event) {
      inputedClass = event.target.value;
      this.arr_class.push(inputedClass);
      this.inputedClass = '';
    },
    addClassName: function(event) {
      this.className = event.target.value;
    },
    addClassTF: function(event) {
      this.classStatus = event.target.value;
    },
    addColor: function(event) {
      this.inputedColor = event.target.value;
    },
    startProgress: function(event) {
      this.timer = setInterval(this.progressBar, 1000);	
    },
    progressBar: function() {
      this.valueProgress += 10;
      if(this.valueProgress > 100) {
        this.valueProgress = 0;
        clearInterval(this.timer)
      }
    }
  }
});
