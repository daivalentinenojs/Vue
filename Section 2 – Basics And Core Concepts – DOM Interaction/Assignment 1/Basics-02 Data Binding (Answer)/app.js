const app = Vue.createApp({
    data () {
        return {
            myName : 'Daivalentineno Janitra Salim',
            myAge : 25,
            imageLink : 'http://daivalentinenojs.my.id/assets/images/about_me/1.jpg'
        }
    },
    methods: {
        outputMyAgeAfter5Years () {
            return this.myAge + 5;
        },
        outputRandomNumber () {
            const randomNumber = Math.random();
            return randomNumber;
        }
    }
});

app.mount('#assignment');