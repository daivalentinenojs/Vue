new Vue({
    el: '#exercise',
    data: {
        value: '',
        value_entered: ''
    },
    methods: {
        showAlert: function(event) {
            alert('Alert !');
        },
        storeValue: function(event) {
            this.value = event.target.value;
        },
        storeValueEntered: function(event) {
            this.value_entered = event.target.value;
        }
    }
});