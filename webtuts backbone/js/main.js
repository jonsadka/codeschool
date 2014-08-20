 // Person Model
 var Person = Backbone.Model.extend({
	// defaults given to a new instance
	defaults: {
		name: 'John Doe',
		age: 30,
		occupation: 'worker'
	},
	
	// // will be triggered by backbone when you set an attritube
	// // must call using person.set('age', -20, {validate:true})
	validate: function(attrs) {
		console.log(attrs);
		if ( attrs.age < 0 ) {
			return 'Age must be positve';
		}

		if ( ! attrs.name ){
			return 'Every person musth ahve a name';
		}
	},

	work: function(){
		return this.get('name') + ' is working.';
	}
});

// View for all people
var PeopleView = Backbone.View.extend({
	tagName: 'ul',

	render: function(){
		// filter through all item in a collection
		this.collection.each(function(person){
			// for each, create a new PersonView
			var personView = new PersonView({ model: person });
			// append to root element
			this.$el.append(personView.render().el);
		}, this);

		return this;
	}

});

// Person View
var PersonView = Backbone.View.extend({
	tagName: 'li',

	template: _.template( $('#personTemplate').html() ),

	render: function(){
		// template object with its data
			// and toJSON() turn the model into the object only
		this.$el.html( this.template(this.model.toJSON()) );
		return this;
	}
});

// A List of People
var PeopleCollection = Backbone.Collection.extend({
	model:  Person
});

var peopleCollection = new PeopleCollection([
	{
		name: 'John Doe',
		age: 50,
		occupation: 'web designer'
	},
	{
		name: 'Jon Sadka',
		age: 20,
		occupation: 'software engineer'
	}
]);

var peopleView = new PeopleView({ collection: peopleCollection });
$(document.body).append(peopleView.render().el);