var Person = Backbone.Model.extend({
	// defaults given to a new instance
	defaults: {
		name: 'John Doe',
		age: 30,
		occupation: 'worker'
	},
	
	// // will be triggered by backbone when you set an attritube
	// // must call using person.set('age', -20, {validate:true})
	// validate: function(attrs) {
	// 	console.log(attrs);
	// 	if ( attrs.age < 0 ) {
	// 		return 'Age must be positve';
	// 	}

	// 	if ( ! attrs.name ){
	// 		return 'Every person musth ahve a name';
	// 	}
	// },

	// work: function(){
	// 	return this.get('name') + ' is working.';
	// }
});

var PersonView = Backbone.View.extend({
	tagName: 'li',

	template: _.template( $('#personTemplate').html() ),

	initialize: function(){
		this.render();
	},

	render: function(){
		// template object with its data
			// and toJSON() turn the model into the object only
		this.$el.html( this.template(this.model.toJSON()) );
	}

});

var person = new Person;
var personView = new PersonView({model: person});