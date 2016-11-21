Template.ParkingSpaces.onCreated(function(){
	var self = this;
	self.autorun(function() {
		self.subscribe('parkingSpaces');
	});
});

Template.ParkingSpaces.helpers({
	parkingSpaces: ()=> {
		console.log("out of folder");
		return ParkingSpaces.find({});
	}
});

Template.myParkingSpaces.helpers({
	myParkingSpaces: ()=>{
		var thisId = Meteor.userId();
		if (thisId) {
			console.log(ParkingSpaces);
			return ParkingSpaces.find({userID: thisId});
		};
	}
})

Template.ParkingSpace.onCreated(function(){
	this.editMode = new ReactiveVar(false);
});

Template.SellParkingSpace.events({
	'click .fa-close': function() {
		Session.set('SellParkingSpace', false);
	}
});


Template.ParkingSpace.helpers({
	editMode: function(){
		return Template.instance().editMode.get();
	},
	canDelete: function(){
		return this.usersName == Meteor.user().profile.name
	}
});

Template.ParkingSpace.events({
	'click .delete': function () {
		Meteor.call('deleteParkingSpace', this._id);
	},
	'click .buy': function(){
		Session.set('ParkingSpace',this)
		console.log(this);
		Modal.show('exampleModal', function (){
			return this
		})
	}
});
