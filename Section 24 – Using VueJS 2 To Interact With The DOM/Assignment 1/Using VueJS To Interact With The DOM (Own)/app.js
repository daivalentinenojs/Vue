// Put this in the script section in JSFiddle
// In a local setup, you need to merge this and the index.html file into one file
new Vue({
	el: '#exercise',
	data: {
		name: 'Daivalentineno Janitra Salim',
		age: 25,
		image_link: 'https://images.carandbike.com/car-images/large/toyota/innova-crysta/toyota-innova-crysta.webp?v=14',
		input_text: '<input type="text" value="Daivalentineno Janitra Salim">'
	},
	methods: {
		multiply: function(multiplier) {
			return this.age * multiplier;
		},
		random_number: function() {
			return Math.random();
		},
	}
});