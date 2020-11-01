// Put this in the script section in JSFiddle
// In a local setup, you need to merge this and the index.html file into one file
new Vue({
	el: '#app',
	data: {
		counter: 0,
		// result: ''
		// It does not work
		// result: this.counter > 5 ? 'Greater 5' : 'Smaller 5'
		secondCounter: 0
	},
	computed: {
		output: function() {
			console.log('Computed');
			return this.counter > 5 ? 'Greater 5' : 'Smaller than 5';
		}
	},
	watch: {
		counter: function(value) {
			var vm = this;
			setTimeout(function() {
				vm.counter = 0;
			}, 2000);
		}
	},
	methods: {
		// increase: function() {
		// 	this.counter++;
		// 	this.result = this.counter > 5 ? 'Greater 5' : 'Smaller 5';
		// },
		// decrease: function() {
		// 	this.counter--;
		// 	this.result = this.counter > 5 ? 'Greater 5' : 'Smaller 5';
		// }
		result: function() {
			console.log('Method');
			return this.counter > 5 ? 'Greater 5' : 'Smaller 5';
		}
	}
})