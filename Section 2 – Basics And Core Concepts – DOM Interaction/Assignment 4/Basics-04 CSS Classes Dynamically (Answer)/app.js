const app = Vue.createApp({
    data () {
        return {
            className: '',
            classSetting: 'show',
            backgroundColor: ''
        };
    },
    computed: {
        className() {
            if (this.className === 'user1') {
                return { user1: True, user2:False }
            } else if (this.className === 'user2') {
                return { user2: True, user1:False }
            } else {
                return { user1: False, user2:False }
            }       
        }
    },
    methods: {
        classSelected($event) {
            this.className = $event.target.value;
        },
        showOrHide() {
            if (this.classSetting === 'show') {
                this.classSetting = 'hidden';
            } else {
                this.classSetting = 'show';
            }
        },
        backgroundColorSelected($event) {
            this.backgroundColor = $event.target.value;
        }
    }
});

app.mount('#assignment');