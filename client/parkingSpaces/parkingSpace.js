Template.ParkingSpace.onCreated(function(){
	this.editMode = new ReactiveVar(false);
});

Template.ParkingSpace.helpers({
	editMode: function(){
		return Template.instance().editMode.get();
	}
});

Template.ParkingSpace.events({
	'click .fa-trash': function () {
		Meteor.call('deleteParkingSpace', this._id);
	}
});
